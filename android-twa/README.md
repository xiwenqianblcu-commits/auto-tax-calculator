# AutoTax Atlas Android

这是 AutoTax Atlas 的 Trusted Web Activity（TWA）Android 工程，由 Bubblewrap 生成。

## 当前状态

- Android 包名：`app.autotaxatlas.calculator`
- 最低 Android 版本：Android 5.0（API 21）
- 当前测试入口：`https://xiwenqianblcu-commits.github.io/auto-tax-calculator/`
- 调试 APK 由 GitHub Actions 自动构建，不使用正式发布签名。

## 本地构建

需要 JDK 17 和 Android SDK：

```bash
chmod +x gradlew
./gradlew assembleDebug
```

APK 生成在：

```text
app/build/outputs/apk/debug/app-debug.apk
```

## 正式发布前必须完成

1. 绑定一个不包含个人信息的正式域名，并同步修改 `twa-manifest.json`、`app/build.gradle` 和网页 Manifest。
2. 创建并离线保存正式签名密钥；不要把 `.keystore`、密码或 Play Console 凭据提交到仓库。
3. 用正式证书的 SHA-256 指纹替换 `assetlinks.template.json` 中的占位符。
4. 将完成后的文件部署到正式域名根路径：

   ```text
   https://正式域名/.well-known/assetlinks.json
   ```

5. 验证 Digital Asset Links 后再生成正式 AAB 并提交 Google Play。

当前 GitHub Pages 是项目子路径，仓库内的 `.well-known` 文件只会发布到
`/auto-tax-calculator/.well-known/`，不满足 TWA 对“域名根路径”的验证要求。
因此当前工程适合构建和真机测试；在正式域名配置完成前，Chrome 会以 Custom Tab
作为安全回退，不应视为最终发布状态。
