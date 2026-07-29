#!/usr/bin/env python3
"""Daily official-law monitor for AutoTax Atlas.

The monitor only creates review candidates. It never edits tax formulas.
"""

from __future__ import annotations

import argparse
import difflib
import hashlib
import io
import json
import os
import re
import sys
import time
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCES = ROOT / "automation" / "regulation-sources.json"
DEFAULT_STATE = ROOT / "data" / "regulation-monitor" / "state.json"
DEFAULT_REPORT = ROOT / "data" / "regulation-monitor" / "latest-report.json"
USER_AGENT = "AutoTaxAtlas-RegulationMonitor/2.0 (+public-law-monitor)"


class VisibleTextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.hidden_depth = 0

    def handle_starttag(self, tag: str, attrs) -> None:
        if tag.lower() in {"script", "style", "noscript", "svg"}:
            self.hidden_depth += 1

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() in {"script", "style", "noscript", "svg"}:
            self.hidden_depth = max(0, self.hidden_depth - 1)

    def handle_data(self, data: str) -> None:
        if not self.hidden_depth:
            self.parts.append(data)


def normalize_text(value: str) -> str:
    value = value.replace("\u00a0", " ")
    return re.sub(r"\s+", " ", value).strip()


def extract_html(payload: bytes, charset: str | None) -> tuple[str, dict]:
    candidates = [charset, "utf-8", "latin-1"]
    decoded = None
    for encoding in candidates:
        if not encoding:
            continue
        try:
            decoded = payload.decode(encoding)
            break
        except (UnicodeDecodeError, LookupError):
            continue
    if decoded is None:
        decoded = payload.decode("utf-8", errors="replace")
    parser = VisibleTextParser()
    parser.feed(decoded)
    text = normalize_text(" ".join(parser.parts))
    return text, {"parser": "html", "page_count": None, "needs_ocr": False}


def extract_pdf(payload: bytes) -> tuple[str, dict]:
    try:
        from pypdf import PdfReader
    except ImportError as error:
        raise RuntimeError("PDF来源需要安装pypdf") from error
    reader = PdfReader(io.BytesIO(payload))
    pages = [(page.extract_text() or "") for page in reader.pages]
    text = normalize_text(" ".join(pages))
    needs_ocr = len(text) < max(160, len(reader.pages) * 40)
    return text, {
        "parser": "pypdf",
        "page_count": len(reader.pages),
        "needs_ocr": needs_ocr,
    }


def fetch_source(source: dict) -> tuple[str, dict]:
    last_error = None
    for attempt in range(3):
        request = Request(
            source["url"],
            headers={
                "User-Agent": USER_AGENT,
                "Accept": "text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.2",
            },
        )
        try:
            with urlopen(request, timeout=25) as response:
                payload = response.read(25 * 1024 * 1024 + 1)
                if len(payload) > 25 * 1024 * 1024:
                    raise RuntimeError("来源文件超过25MB安全上限")
                content_type = response.headers.get_content_type()
                charset = response.headers.get_content_charset()
                metadata = {
                    "http_status": response.status,
                    "content_type": content_type,
                    "etag": response.headers.get("ETag"),
                    "last_modified": response.headers.get("Last-Modified"),
                    "final_url": response.geturl(),
                    "bytes": len(payload),
                    "attempts": attempt + 1,
                }
            break
        except HTTPError as error:
            last_error = error
            if error.code not in {429, 500, 502, 503, 504} or attempt == 2:
                raise
            time.sleep(2 + attempt * 4)
        except (URLError, TimeoutError) as error:
            last_error = error
            if attempt == 2:
                raise
            time.sleep(2 + attempt * 4)
    else:
        raise last_error or RuntimeError("官方来源抓取失败")
    is_pdf = (
        source.get("format") == "pdf"
        or content_type == "application/pdf"
        or payload.startswith(b"%PDF")
    )
    text, extraction = extract_pdf(payload) if is_pdf else extract_html(payload, charset)
    metadata.update(extraction)
    if len(text) < 120 and not metadata.get("needs_ocr"):
        raise RuntimeError("提取文本过短，未建立有效快照")
    return text, metadata


def excerpt_diff(old_excerpt: str, new_excerpt: str) -> str:
    diff = difflib.unified_diff(
        old_excerpt.split(),
        new_excerpt.split(),
        fromfile="previous",
        tofile="observed",
        n=3,
        lineterm="",
    )
    return " ".join(list(diff)[:220])[:6000]


def write_github_output(values: dict[str, int | str]) -> None:
    output_path = os.environ.get("GITHUB_OUTPUT")
    if not output_path:
        return
    with open(output_path, "a", encoding="utf-8") as handle:
        for key, value in values.items():
            handle.write(f"{key}={value}\n")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--sources", type=Path, default=DEFAULT_SOURCES)
    parser.add_argument("--state", type=Path, default=DEFAULT_STATE)
    parser.add_argument("--report", type=Path, default=DEFAULT_REPORT)
    args = parser.parse_args()

    sources = json.loads(args.sources.read_text(encoding="utf-8"))
    if args.state.exists():
        state = json.loads(args.state.read_text(encoding="utf-8"))
    else:
        state = {"schema_version": 1, "sources": {}}

    checked_at = datetime.now(timezone.utc).isoformat()
    changes: list[dict] = []
    baselines: list[dict] = []
    errors: list[dict] = []
    results: list[dict] = []

    for source in sources:
        previous = state["sources"].get(source["id"], {})
        try:
            text, metadata = fetch_source(source)
            digest = hashlib.sha256(text.encode("utf-8")).hexdigest()
            excerpt = text[:6000]
            record = {
                **source,
                "observed_sha256": digest,
                "observed_length": len(text),
                "observed_at": checked_at,
                "excerpt": excerpt,
                "metadata": metadata,
                "status": "ocr_review" if metadata.get("needs_ocr") else "monitored",
            }
            if not previous:
                baselines.append({"id": source["id"], "title": source["title"]})
                outcome = "baseline"
            elif previous.get("observed_sha256") != digest:
                change = {
                    "id": source["id"],
                    "country": source["country"],
                    "title": source["title"],
                    "topic": source["topic"],
                    "url": source["url"],
                    "detected_at": checked_at,
                    "old_sha256": previous.get("observed_sha256"),
                    "new_sha256": digest,
                    "old_length": previous.get("observed_length"),
                    "new_length": len(text),
                    "length_delta": len(text) - int(previous.get("observed_length") or 0),
                    "diff_excerpt": excerpt_diff(previous.get("excerpt", ""), excerpt),
                    "parser": metadata.get("parser"),
                    "page_count": metadata.get("page_count"),
                    "needs_ocr": metadata.get("needs_ocr", False),
                    "review_status": "pending",
                }
                changes.append(change)
                outcome = "changed"
            else:
                outcome = "unchanged"
            state["sources"][source["id"]] = record
            results.append({"id": source["id"], "outcome": outcome})
        except (HTTPError, URLError, TimeoutError, RuntimeError, ValueError) as error:
            detail = f"{type(error).__name__}: {error}"
            errors.append(
                {
                    "id": source["id"],
                    "title": source["title"],
                    "url": source["url"],
                    "detail": detail[:500],
                }
            )
            results.append({"id": source["id"], "outcome": "error", "detail": detail[:500]})

    state["schema_version"] = 1
    state["last_run_at"] = checked_at
    state["source_count"] = len(sources)
    state["pending_review_count"] = len(changes)
    state["error_count"] = len(errors)
    report = {
        "schema_version": 1,
        "run_at": checked_at,
        "status": "review_required" if changes else ("partial_error" if errors else "healthy"),
        "source_count": len(sources),
        "baseline_count": len(baselines),
        "changed_count": len(changes),
        "error_count": len(errors),
        "pdf_source_count": sum(1 for item in sources if item.get("format") == "pdf"),
        "changes": changes,
        "baselines": baselines,
        "errors": errors,
        "results": results,
        "notice": "监测结果只生成待审核候选，不会自动修改税率计算规则。",
    }
    args.state.parent.mkdir(parents=True, exist_ok=True)
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.state.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_github_output(
        {
            "changed_count": len(changes),
            "baseline_count": len(baselines),
            "error_count": len(errors),
            "should_commit": int(bool(changes or baselines)),
        }
    )
    print(
        f"Checked {len(sources)} sources: "
        f"{len(changes)} changed, {len(baselines)} baselines, {len(errors)} errors."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
