Object.fromEntries ||
  (Object.fromEntries = function (t) {
    var r = {};
    return (
      Array.prototype.forEach.call(t, function (e) {
        r[e[0]] = e[1];
      }),
      r
    );
  });
var jm = Object.create;
var po = Object.defineProperty;
var Gm = Object.getOwnPropertyDescriptor;
var Xm = Object.getOwnPropertyNames;
var Qm = Object.getPrototypeOf,
  Vm = Object.prototype.hasOwnProperty;
var ul = (t, l) => () => (l || t((l = { exports: {} }).exports, l), l.exports);
var Zm = (t, l, a, e) => {
  if ((l && typeof l == "object") || typeof l == "function")
    for (let u of Xm(l))
      !Vm.call(t, u) &&
        u !== a &&
        po(t, u, {
          get: () => l[u],
          enumerable: !(e = Gm(l, u)) || e.enumerable,
        });
  return t;
};
var Yu = (t, l, a) => (
  (a = t != null ? jm(Qm(t)) : {}),
  Zm(
    l || !t || !t.__esModule
      ? po(a, "default", { value: t, enumerable: !0 })
      : a,
    t,
  )
);
var Oo = ul((_) => {
  "use strict";
  var Mi = Symbol.for("react.transitional.element"),
    Lm = Symbol.for("react.portal"),
    Km = Symbol.for("react.fragment"),
    Jm = Symbol.for("react.strict_mode"),
    wm = Symbol.for("react.profiler"),
    km = Symbol.for("react.consumer"),
    Fm = Symbol.for("react.context"),
    Wm = Symbol.for("react.forward_ref"),
    $m = Symbol.for("react.suspense"),
    Im = Symbol.for("react.memo"),
    zo = Symbol.for("react.lazy"),
    Pm = Symbol.for("react.activity"),
    ho = Symbol.iterator;
  function t1(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ho && t[ho]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var xo = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Eo = Object.assign,
    To = {};
  function Ba(t, l, a) {
    ((this.props = t),
      (this.context = l),
      (this.refs = To),
      (this.updater = a || xo));
  }
  Ba.prototype.isReactComponent = {};
  Ba.prototype.setState = function (t, l) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, t, l, "setState");
  };
  Ba.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Ao() {}
  Ao.prototype = Ba.prototype;
  function Oi(t, l, a) {
    ((this.props = t),
      (this.context = l),
      (this.refs = To),
      (this.updater = a || xo));
  }
  var Ni = (Oi.prototype = new Ao());
  Ni.constructor = Oi;
  Eo(Ni, Ba.prototype);
  Ni.isPureReactComponent = !0;
  var go = Array.isArray;
  function Ai() {}
  var w = { H: null, A: null, T: null, S: null },
    Mo = Object.prototype.hasOwnProperty;
  function _i(t, l, a) {
    var e = a.ref;
    return {
      $$typeof: Mi,
      type: t,
      key: l,
      ref: e !== void 0 ? e : null,
      props: a,
    };
  }
  function l1(t, l) {
    return _i(t.type, l, t.props);
  }
  function Di(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Mi;
  }
  function a1(t) {
    var l = { "=": "=0", ":": "=2" };
    return (
      "$" +
      t.replace(/[=:]/g, function (a) {
        return l[a];
      })
    );
  }
  var bo = /\/+/g;
  function Ti(t, l) {
    return typeof t == "object" && t !== null && t.key != null
      ? a1("" + t.key)
      : l.toString(36);
  }
  function e1(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (
          (typeof t.status == "string"
            ? t.then(Ai, Ai)
            : ((t.status = "pending"),
              t.then(
                function (l) {
                  t.status === "pending" &&
                    ((t.status = "fulfilled"), (t.value = l));
                },
                function (l) {
                  t.status === "pending" &&
                    ((t.status = "rejected"), (t.reason = l));
                },
              )),
          t.status)
        ) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function Ca(t, l, a, e, u) {
    var n = typeof t;
    (n === "undefined" || n === "boolean") && (t = null);
    var i = !1;
    if (t === null) i = !0;
    else
      switch (n) {
        case "bigint":
        case "string":
        case "number":
          i = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case Mi:
            case Lm:
              i = !0;
              break;
            case zo:
              return ((i = t._init), Ca(i(t._payload), l, a, e, u));
          }
      }
    if (i)
      return (
        (u = u(t)),
        (i = e === "" ? "." + Ti(t, 0) : e),
        go(u)
          ? ((a = ""),
            i != null && (a = i.replace(bo, "$&/") + "/"),
            Ca(u, l, a, "", function (r) {
              return r;
            }))
          : u != null &&
            (Di(u) &&
              (u = l1(
                u,
                a +
                  (u.key == null || (t && t.key === u.key)
                    ? ""
                    : ("" + u.key).replace(bo, "$&/") + "/") +
                  i,
              )),
            l.push(u)),
        1
      );
    i = 0;
    var c = e === "" ? "." : e + ":";
    if (go(t))
      for (var f = 0; f < t.length; f++)
        ((e = t[f]), (n = c + Ti(e, f)), (i += Ca(e, l, a, n, u)));
    else if (((f = t1(t)), typeof f == "function"))
      for (t = f.call(t), f = 0; !(e = t.next()).done; )
        ((e = e.value), (n = c + Ti(e, f++)), (i += Ca(e, l, a, n, u)));
    else if (n === "object") {
      if (typeof t.then == "function") return Ca(e1(t), l, a, e, u);
      throw (
        (l = String(t)),
        Error(
          "Objects are not valid as a React child (found: " +
            (l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return i;
  }
  function ju(t, l, a) {
    if (t == null) return t;
    var e = [],
      u = 0;
    return (
      Ca(t, e, "", "", function (n) {
        return l.call(a, n, u++);
      }),
      e
    );
  }
  function u1(t) {
    if (t._status === -1) {
      var l = t._result;
      ((l = l()),
        l.then(
          function (a) {
            (t._status === 0 || t._status === -1) &&
              ((t._status = 1), (t._result = a));
          },
          function (a) {
            (t._status === 0 || t._status === -1) &&
              ((t._status = 2), (t._result = a));
          },
        ),
        t._status === -1 && ((t._status = 0), (t._result = l)));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var So =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var l = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(l)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    n1 = {
      map: ju,
      forEach: function (t, l, a) {
        ju(
          t,
          function () {
            l.apply(this, arguments);
          },
          a,
        );
      },
      count: function (t) {
        var l = 0;
        return (
          ju(t, function () {
            l++;
          }),
          l
        );
      },
      toArray: function (t) {
        return (
          ju(t, function (l) {
            return l;
          }) || []
        );
      },
      only: function (t) {
        if (!Di(t))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return t;
      },
    };
  _.Activity = Pm;
  _.Children = n1;
  _.Component = Ba;
  _.Fragment = Km;
  _.Profiler = wm;
  _.PureComponent = Oi;
  _.StrictMode = Jm;
  _.Suspense = $m;
  _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w;
  _.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (t) {
      return w.H.useMemoCache(t);
    },
  };
  _.cache = function (t) {
    return function () {
      return t.apply(null, arguments);
    };
  };
  _.cacheSignal = function () {
    return null;
  };
  _.cloneElement = function (t, l, a) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + ".",
      );
    var e = Eo({}, t.props),
      u = t.key;
    if (l != null)
      for (n in (l.key !== void 0 && (u = "" + l.key), l))
        !Mo.call(l, n) ||
          n === "key" ||
          n === "__self" ||
          n === "__source" ||
          (n === "ref" && l.ref === void 0) ||
          (e[n] = l[n]);
    var n = arguments.length - 2;
    if (n === 1) e.children = a;
    else if (1 < n) {
      for (var i = Array(n), c = 0; c < n; c++) i[c] = arguments[c + 2];
      e.children = i;
    }
    return _i(t.type, u, e);
  };
  _.createContext = function (t) {
    return (
      (t = {
        $$typeof: Fm,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }),
      (t.Provider = t),
      (t.Consumer = { $$typeof: km, _context: t }),
      t
    );
  };
  _.createElement = function (t, l, a) {
    var e,
      u = {},
      n = null;
    if (l != null)
      for (e in (l.key !== void 0 && (n = "" + l.key), l))
        Mo.call(l, e) &&
          e !== "key" &&
          e !== "__self" &&
          e !== "__source" &&
          (u[e] = l[e]);
    var i = arguments.length - 2;
    if (i === 1) u.children = a;
    else if (1 < i) {
      for (var c = Array(i), f = 0; f < i; f++) c[f] = arguments[f + 2];
      u.children = c;
    }
    if (t && t.defaultProps)
      for (e in ((i = t.defaultProps), i)) u[e] === void 0 && (u[e] = i[e]);
    return _i(t, n, u);
  };
  _.createRef = function () {
    return { current: null };
  };
  _.forwardRef = function (t) {
    return { $$typeof: Wm, render: t };
  };
  _.isValidElement = Di;
  _.lazy = function (t) {
    return { $$typeof: zo, _payload: { _status: -1, _result: t }, _init: u1 };
  };
  _.memo = function (t, l) {
    return { $$typeof: Im, type: t, compare: l === void 0 ? null : l };
  };
  _.startTransition = function (t) {
    var l = w.T,
      a = {};
    w.T = a;
    try {
      var e = t(),
        u = w.S;
      (u !== null && u(a, e),
        typeof e == "object" &&
          e !== null &&
          typeof e.then == "function" &&
          e.then(Ai, So));
    } catch (n) {
      So(n);
    } finally {
      (l !== null && a.types !== null && (l.types = a.types), (w.T = l));
    }
  };
  _.unstable_useCacheRefresh = function () {
    return w.H.useCacheRefresh();
  };
  _.use = function (t) {
    return w.H.use(t);
  };
  _.useActionState = function (t, l, a) {
    return w.H.useActionState(t, l, a);
  };
  _.useCallback = function (t, l) {
    return w.H.useCallback(t, l);
  };
  _.useContext = function (t) {
    return w.H.useContext(t);
  };
  _.useDebugValue = function () {};
  _.useDeferredValue = function (t, l) {
    return w.H.useDeferredValue(t, l);
  };
  _.useEffect = function (t, l) {
    return w.H.useEffect(t, l);
  };
  _.useEffectEvent = function (t) {
    return w.H.useEffectEvent(t);
  };
  _.useId = function () {
    return w.H.useId();
  };
  _.useImperativeHandle = function (t, l, a) {
    return w.H.useImperativeHandle(t, l, a);
  };
  _.useInsertionEffect = function (t, l) {
    return w.H.useInsertionEffect(t, l);
  };
  _.useLayoutEffect = function (t, l) {
    return w.H.useLayoutEffect(t, l);
  };
  _.useMemo = function (t, l) {
    return w.H.useMemo(t, l);
  };
  _.useOptimistic = function (t, l) {
    return w.H.useOptimistic(t, l);
  };
  _.useReducer = function (t, l, a) {
    return w.H.useReducer(t, l, a);
  };
  _.useRef = function (t) {
    return w.H.useRef(t);
  };
  _.useState = function (t) {
    return w.H.useState(t);
  };
  _.useSyncExternalStore = function (t, l, a) {
    return w.H.useSyncExternalStore(t, l, a);
  };
  _.useTransition = function () {
    return w.H.useTransition();
  };
  _.version = "19.2.6";
});
var Gu = ul((Iy, No) => {
  "use strict";
  No.exports = Oo();
});
var jo = ul(($) => {
  "use strict";
  function Ri(t, l) {
    var a = t.length;
    t.push(l);
    t: for (; 0 < a; ) {
      var e = (a - 1) >>> 1,
        u = t[e];
      if (0 < Xu(u, l)) ((t[e] = l), (t[a] = u), (a = e));
      else break t;
    }
  }
  function nl(t) {
    return t.length === 0 ? null : t[0];
  }
  function Vu(t) {
    if (t.length === 0) return null;
    var l = t[0],
      a = t.pop();
    if (a !== l) {
      t[0] = a;
      t: for (var e = 0, u = t.length, n = u >>> 1; e < n; ) {
        var i = 2 * (e + 1) - 1,
          c = t[i],
          f = i + 1,
          r = t[f];
        if (0 > Xu(c, a))
          f < u && 0 > Xu(r, c)
            ? ((t[e] = r), (t[f] = a), (e = f))
            : ((t[e] = c), (t[i] = a), (e = i));
        else if (f < u && 0 > Xu(r, a)) ((t[e] = r), (t[f] = a), (e = f));
        else break t;
      }
    }
    return l;
  }
  function Xu(t, l) {
    var a = t.sortIndex - l.sortIndex;
    return a !== 0 ? a : t.id - l.id;
  }
  $.unstable_now = void 0;
  typeof performance == "object" && typeof performance.now == "function"
    ? ((_o = performance),
      ($.unstable_now = function () {
        return _o.now();
      }))
    : ((Ui = Date),
      (Do = Ui.now()),
      ($.unstable_now = function () {
        return Ui.now() - Do;
      }));
  var _o,
    Ui,
    Do,
    ml = [],
    Rl = [],
    i1 = 1,
    Lt = null,
    St = 3,
    Hi = !1,
    Ce = !1,
    Be = !1,
    qi = !1,
    Bo = typeof setTimeout == "function" ? setTimeout : null,
    Ro = typeof clearTimeout == "function" ? clearTimeout : null,
    Uo = typeof setImmediate < "u" ? setImmediate : null;
  function Qu(t) {
    for (var l = nl(Rl); l !== null; ) {
      if (l.callback === null) Vu(Rl);
      else if (l.startTime <= t)
        (Vu(Rl), (l.sortIndex = l.expirationTime), Ri(ml, l));
      else break;
      l = nl(Rl);
    }
  }
  function Yi(t) {
    if (((Be = !1), Qu(t), !Ce))
      if (nl(ml) !== null) ((Ce = !0), Ha || ((Ha = !0), Ra()));
      else {
        var l = nl(Rl);
        l !== null && ji(Yi, l.startTime - t);
      }
  }
  var Ha = !1,
    Re = -1,
    Ho = 5,
    qo = -1;
  function Yo() {
    return qi ? !0 : !($.unstable_now() - qo < Ho);
  }
  function Ci() {
    if (((qi = !1), Ha)) {
      var t = $.unstable_now();
      qo = t;
      var l = !0;
      try {
        t: {
          ((Ce = !1), Be && ((Be = !1), Ro(Re), (Re = -1)), (Hi = !0));
          var a = St;
          try {
            l: {
              for (
                Qu(t), Lt = nl(ml);
                Lt !== null && !(Lt.expirationTime > t && Yo());

              ) {
                var e = Lt.callback;
                if (typeof e == "function") {
                  ((Lt.callback = null), (St = Lt.priorityLevel));
                  var u = e(Lt.expirationTime <= t);
                  if (((t = $.unstable_now()), typeof u == "function")) {
                    ((Lt.callback = u), Qu(t), (l = !0));
                    break l;
                  }
                  (Lt === nl(ml) && Vu(ml), Qu(t));
                } else Vu(ml);
                Lt = nl(ml);
              }
              if (Lt !== null) l = !0;
              else {
                var n = nl(Rl);
                (n !== null && ji(Yi, n.startTime - t), (l = !1));
              }
            }
            break t;
          } finally {
            ((Lt = null), (St = a), (Hi = !1));
          }
          l = void 0;
        }
      } finally {
        l ? Ra() : (Ha = !1);
      }
    }
  }
  var Ra;
  typeof Uo == "function"
    ? (Ra = function () {
        Uo(Ci);
      })
    : typeof MessageChannel < "u"
      ? ((Bi = new MessageChannel()),
        (Co = Bi.port2),
        (Bi.port1.onmessage = Ci),
        (Ra = function () {
          Co.postMessage(null);
        }))
      : (Ra = function () {
          Bo(Ci, 0);
        });
  var Bi, Co;
  function ji(t, l) {
    Re = Bo(function () {
      t($.unstable_now());
    }, l);
  }
  $.unstable_IdlePriority = 5;
  $.unstable_ImmediatePriority = 1;
  $.unstable_LowPriority = 4;
  $.unstable_NormalPriority = 3;
  $.unstable_Profiling = null;
  $.unstable_UserBlockingPriority = 2;
  $.unstable_cancelCallback = function (t) {
    t.callback = null;
  };
  $.unstable_forceFrameRate = function (t) {
    0 > t || 125 < t
      ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
        )
      : (Ho = 0 < t ? Math.floor(1e3 / t) : 5);
  };
  $.unstable_getCurrentPriorityLevel = function () {
    return St;
  };
  $.unstable_next = function (t) {
    switch (St) {
      case 1:
      case 2:
      case 3:
        var l = 3;
        break;
      default:
        l = St;
    }
    var a = St;
    St = l;
    try {
      return t();
    } finally {
      St = a;
    }
  };
  $.unstable_requestPaint = function () {
    qi = !0;
  };
  $.unstable_runWithPriority = function (t, l) {
    switch (t) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        t = 3;
    }
    var a = St;
    St = t;
    try {
      return l();
    } finally {
      St = a;
    }
  };
  $.unstable_scheduleCallback = function (t, l, a) {
    var e = $.unstable_now();
    switch (
      (typeof a == "object" && a !== null
        ? ((a = a.delay), (a = typeof a == "number" && 0 < a ? e + a : e))
        : (a = e),
      t)
    ) {
      case 1:
        var u = -1;
        break;
      case 2:
        u = 250;
        break;
      case 5:
        u = 1073741823;
        break;
      case 4:
        u = 1e4;
        break;
      default:
        u = 5e3;
    }
    return (
      (u = a + u),
      (t = {
        id: i1++,
        callback: l,
        priorityLevel: t,
        startTime: a,
        expirationTime: u,
        sortIndex: -1,
      }),
      a > e
        ? ((t.sortIndex = a),
          Ri(Rl, t),
          nl(ml) === null &&
            t === nl(Rl) &&
            (Be ? (Ro(Re), (Re = -1)) : (Be = !0), ji(Yi, a - e)))
        : ((t.sortIndex = u),
          Ri(ml, t),
          Ce || Hi || ((Ce = !0), Ha || ((Ha = !0), Ra()))),
      t
    );
  };
  $.unstable_shouldYield = Yo;
  $.unstable_wrapCallback = function (t) {
    var l = St;
    return function () {
      var a = St;
      St = l;
      try {
        return t.apply(this, arguments);
      } finally {
        St = a;
      }
    };
  };
});
var Xo = ul((tp, Go) => {
  "use strict";
  Go.exports = jo();
});
var Vo = ul((xt) => {
  "use strict";
  var c1 = Gu();
  function Qo(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        l += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Hl() {}
  var zt = {
      d: {
        f: Hl,
        r: function () {
          throw Error(Qo(522));
        },
        D: Hl,
        C: Hl,
        L: Hl,
        m: Hl,
        X: Hl,
        S: Hl,
        M: Hl,
      },
      p: 0,
      findDOMNode: null,
    },
    f1 = Symbol.for("react.portal");
  function o1(t, l, a) {
    var e =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f1,
      key: e == null ? null : "" + e,
      children: t,
      containerInfo: l,
      implementation: a,
    };
  }
  var He = c1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Zu(t, l) {
    if (t === "font") return "";
    if (typeof l == "string") return l === "use-credentials" ? l : "";
  }
  xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = zt;
  xt.createPortal = function (t, l) {
    var a =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11))
      throw Error(Qo(299));
    return o1(t, l, null, a);
  };
  xt.flushSync = function (t) {
    var l = He.T,
      a = zt.p;
    try {
      if (((He.T = null), (zt.p = 2), t)) return t();
    } finally {
      ((He.T = l), (zt.p = a), zt.d.f());
    }
  };
  xt.preconnect = function (t, l) {
    typeof t == "string" &&
      (l
        ? ((l = l.crossOrigin),
          (l =
            typeof l == "string" ? (l === "use-credentials" ? l : "") : void 0))
        : (l = null),
      zt.d.C(t, l));
  };
  xt.prefetchDNS = function (t) {
    typeof t == "string" && zt.d.D(t);
  };
  xt.preinit = function (t, l) {
    if (typeof t == "string" && l && typeof l.as == "string") {
      var a = l.as,
        e = Zu(a, l.crossOrigin),
        u = typeof l.integrity == "string" ? l.integrity : void 0,
        n = typeof l.fetchPriority == "string" ? l.fetchPriority : void 0;
      a === "style"
        ? zt.d.S(t, typeof l.precedence == "string" ? l.precedence : void 0, {
            crossOrigin: e,
            integrity: u,
            fetchPriority: n,
          })
        : a === "script" &&
          zt.d.X(t, {
            crossOrigin: e,
            integrity: u,
            fetchPriority: n,
            nonce: typeof l.nonce == "string" ? l.nonce : void 0,
          });
    }
  };
  xt.preinitModule = function (t, l) {
    if (typeof t == "string")
      if (typeof l == "object" && l !== null) {
        if (l.as == null || l.as === "script") {
          var a = Zu(l.as, l.crossOrigin);
          zt.d.M(t, {
            crossOrigin: a,
            integrity: typeof l.integrity == "string" ? l.integrity : void 0,
            nonce: typeof l.nonce == "string" ? l.nonce : void 0,
          });
        }
      } else l == null && zt.d.M(t);
  };
  xt.preload = function (t, l) {
    if (
      typeof t == "string" &&
      typeof l == "object" &&
      l !== null &&
      typeof l.as == "string"
    ) {
      var a = l.as,
        e = Zu(a, l.crossOrigin);
      zt.d.L(t, a, {
        crossOrigin: e,
        integrity: typeof l.integrity == "string" ? l.integrity : void 0,
        nonce: typeof l.nonce == "string" ? l.nonce : void 0,
        type: typeof l.type == "string" ? l.type : void 0,
        fetchPriority:
          typeof l.fetchPriority == "string" ? l.fetchPriority : void 0,
        referrerPolicy:
          typeof l.referrerPolicy == "string" ? l.referrerPolicy : void 0,
        imageSrcSet: typeof l.imageSrcSet == "string" ? l.imageSrcSet : void 0,
        imageSizes: typeof l.imageSizes == "string" ? l.imageSizes : void 0,
        media: typeof l.media == "string" ? l.media : void 0,
      });
    }
  };
  xt.preloadModule = function (t, l) {
    if (typeof t == "string")
      if (l) {
        var a = Zu(l.as, l.crossOrigin);
        zt.d.m(t, {
          as: typeof l.as == "string" && l.as !== "script" ? l.as : void 0,
          crossOrigin: a,
          integrity: typeof l.integrity == "string" ? l.integrity : void 0,
        });
      } else zt.d.m(t);
  };
  xt.requestFormReset = function (t) {
    zt.d.r(t);
  };
  xt.unstable_batchedUpdates = function (t, l) {
    return t(l);
  };
  xt.useFormState = function (t, l, a) {
    return He.H.useFormState(t, l, a);
  };
  xt.useFormStatus = function () {
    return He.H.useHostTransitionStatus();
  };
  xt.version = "19.2.6";
});
var Ko = ul((ap, Lo) => {
  "use strict";
  function Zo() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zo);
      } catch (t) {
        console.error(t);
      }
  }
  (Zo(), (Lo.exports = Vo()));
});
var em = ul((yi) => {
  "use strict";
  var dt = Xo(),
    h0 = Gu(),
    s1 = Ko();
  function S(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        l += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function g0(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function zu(t) {
    var l = t,
      a = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do ((l = t), (l.flags & 4098) !== 0 && (a = l.return), (t = l.return));
      while (t);
    }
    return l.tag === 3 ? a : null;
  }
  function b0(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function S0(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function Jo(t) {
    if (zu(t) !== t) throw Error(S(188));
  }
  function d1(t) {
    var l = t.alternate;
    if (!l) {
      if (((l = zu(t)), l === null)) throw Error(S(188));
      return l !== t ? null : t;
    }
    for (var a = t, e = l; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return (Jo(u), t);
          if (n === e) return (Jo(u), l);
          n = n.sibling;
        }
        throw Error(S(188));
      }
      if (a.return !== e.return) ((a = u), (e = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          if (c === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            if (c === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(S(189));
        }
      }
      if (a.alternate !== e) throw Error(S(190));
    }
    if (a.tag !== 3) throw Error(S(188));
    return a.stateNode.current === a ? t : l;
  }
  function z0(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((l = z0(t)), l !== null)) return l;
      t = t.sibling;
    }
    return null;
  }
  var W = Object.assign,
    r1 = Symbol.for("react.element"),
    Lu = Symbol.for("react.transitional.element"),
    Ze = Symbol.for("react.portal"),
    Qa = Symbol.for("react.fragment"),
    x0 = Symbol.for("react.strict_mode"),
    gc = Symbol.for("react.profiler"),
    E0 = Symbol.for("react.consumer"),
    zl = Symbol.for("react.context"),
    vf = Symbol.for("react.forward_ref"),
    bc = Symbol.for("react.suspense"),
    Sc = Symbol.for("react.suspense_list"),
    yf = Symbol.for("react.memo"),
    ql = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  var zc = Symbol.for("react.activity");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.tracing_marker");
  var m1 = Symbol.for("react.memo_cache_sentinel");
  Symbol.for("react.view_transition");
  var wo = Symbol.iterator;
  function qe(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (wo && t[wo]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var v1 = Symbol.for("react.client.reference");
  function xc(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === v1 ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Qa:
        return "Fragment";
      case gc:
        return "Profiler";
      case x0:
        return "StrictMode";
      case bc:
        return "Suspense";
      case Sc:
        return "SuspenseList";
      case zc:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Ze:
          return "Portal";
        case zl:
          return t.displayName || "Context";
        case E0:
          return (t._context.displayName || "Context") + ".Consumer";
        case vf:
          var l = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = l.displayName || l.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case yf:
          return (
            (l = t.displayName || null),
            l !== null ? l : xc(t.type) || "Memo"
          );
        case ql:
          ((l = t._payload), (t = t._init));
          try {
            return xc(t(l));
          } catch {}
      }
    return null;
  }
  var Le = Array.isArray,
    O = h0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = s1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ma = { pending: !1, data: null, method: null, action: null },
    Ec = [],
    Va = -1;
  function sl(t) {
    return { current: t };
  }
  function vt(t) {
    0 > Va || ((t.current = Ec[Va]), (Ec[Va] = null), Va--);
  }
  function J(t, l) {
    (Va++, (Ec[Va] = t.current), (t.current = l));
  }
  var ol = sl(null),
    cu = sl(null),
    wl = sl(null),
    Tn = sl(null);
  function An(t, l) {
    switch ((J(wl, l), J(cu, t), J(ol, null), l.nodeType)) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? t0(t) : 0;
        break;
      default:
        if (((t = l.tagName), (l = l.namespaceURI)))
          ((l = t0(l)), (t = Zr(l, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (vt(ol), J(ol, t));
  }
  function ie() {
    (vt(ol), vt(cu), vt(wl));
  }
  function Tc(t) {
    t.memoizedState !== null && J(Tn, t);
    var l = ol.current,
      a = Zr(l, t.type);
    l !== a && (J(cu, t), J(ol, a));
  }
  function Mn(t) {
    (cu.current === t && (vt(ol), vt(cu)),
      Tn.current === t && (vt(Tn), (gu._currentValue = ma)));
  }
  var Gi, ko;
  function oa(t) {
    if (Gi === void 0)
      try {
        throw Error();
      } catch (a) {
        var l = a.stack.trim().match(/\n( *(at )?)/);
        ((Gi = (l && l[1]) || ""),
          (ko =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Gi +
      t +
      ko
    );
  }
  var Xi = !1;
  function Qi(t, l) {
    if (!t || Xi) return "";
    Xi = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (l) {
              var h = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(h.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(h, []);
                } catch (y) {
                  var v = y;
                }
                Reflect.construct(t, [], h);
              } else {
                try {
                  h.call();
                } catch (y) {
                  v = y;
                }
                t.call(h.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (y) {
                v = y;
              }
              (h = t()) &&
                typeof h.catch == "function" &&
                h.catch(function () {});
            }
          } catch (y) {
            if (y && v && typeof y.stack == "string") return [y.stack, v.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          r = c.split(`
`);
        for (
          u = e = 0;
          e < f.length && !f[e].includes("DetermineComponentFrameRoot");

        )
          e++;
        for (; u < r.length && !r[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === f.length || u === r.length)
          for (
            e = f.length - 1, u = r.length - 1;
            1 <= e && 0 <= u && f[e] !== r[u];

          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== r[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== r[u])) {
                  var p =
                    `
` + f[e].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", t.displayName)),
                    p
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      ((Xi = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : "") ? oa(a) : "";
  }
  function y1(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return oa(t.type);
      case 16:
        return oa("Lazy");
      case 13:
        return t.child !== l && l !== null
          ? oa("Suspense Fallback")
          : oa("Suspense");
      case 19:
        return oa("SuspenseList");
      case 0:
      case 15:
        return Qi(t.type, !1);
      case 11:
        return Qi(t.type.render, !1);
      case 1:
        return Qi(t.type, !0);
      case 31:
        return oa("Activity");
      default:
        return "";
    }
  }
  function Fo(t) {
    try {
      var l = "",
        a = null;
      do ((l += y1(t, a)), (a = t), (t = t.return));
      while (t);
      return l;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  var Ac = Object.prototype.hasOwnProperty,
    pf = dt.unstable_scheduleCallback,
    Vi = dt.unstable_cancelCallback,
    p1 = dt.unstable_shouldYield,
    h1 = dt.unstable_requestPaint,
    jt = dt.unstable_now,
    g1 = dt.unstable_getCurrentPriorityLevel,
    T0 = dt.unstable_ImmediatePriority,
    A0 = dt.unstable_UserBlockingPriority,
    On = dt.unstable_NormalPriority,
    b1 = dt.unstable_LowPriority,
    M0 = dt.unstable_IdlePriority,
    S1 = dt.log,
    z1 = dt.unstable_setDisableYieldValue,
    xu = null,
    Gt = null;
  function Vl(t) {
    if (
      (typeof S1 == "function" && z1(t),
      Gt && typeof Gt.setStrictMode == "function")
    )
      try {
        Gt.setStrictMode(xu, t);
      } catch {}
  }
  var Xt = Math.clz32 ? Math.clz32 : T1,
    x1 = Math.log,
    E1 = Math.LN2;
  function T1(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((x1(t) / E1) | 0)) | 0);
  }
  var Ku = 256,
    Ju = 262144,
    wu = 4194304;
  function sa(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Pn(t, l, a) {
    var e = t.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var c = e & 134217727;
    return (
      c !== 0
        ? ((e = c & ~n),
          e !== 0
            ? (u = sa(e))
            : ((i &= c),
              i !== 0
                ? (u = sa(i))
                : a || ((a = c & ~t), a !== 0 && (u = sa(a)))))
        : ((c = e & ~n),
          c !== 0
            ? (u = sa(c))
            : i !== 0
              ? (u = sa(i))
              : a || ((a = e & ~t), a !== 0 && (u = sa(a)))),
      u === 0
        ? 0
        : l !== 0 &&
            l !== u &&
            (l & n) === 0 &&
            ((n = u & -u),
            (a = l & -l),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? l
          : u
    );
  }
  function Eu(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function A1(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function O0() {
    var t = wu;
    return ((wu <<= 1), (wu & 62914560) === 0 && (wu = 4194304), t);
  }
  function Zi(t) {
    for (var l = [], a = 0; 31 > a; a++) l.push(t);
    return l;
  }
  function Tu(t, l) {
    ((t.pendingLanes |= l),
      l !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function M1(t, l, a, e, u, n) {
    var i = t.pendingLanes;
    ((t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0));
    var c = t.entanglements,
      f = t.expirationTimes,
      r = t.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var p = 31 - Xt(a),
        h = 1 << p;
      ((c[p] = 0), (f[p] = -1));
      var v = r[p];
      if (v !== null)
        for (r[p] = null, p = 0; p < v.length; p++) {
          var y = v[p];
          y !== null && (y.lane &= -536870913);
        }
      a &= ~h;
    }
    (e !== 0 && N0(t, e, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l)));
  }
  function N0(t, l, a) {
    ((t.pendingLanes |= l), (t.suspendedLanes &= ~l));
    var e = 31 - Xt(l);
    ((t.entangledLanes |= l),
      (t.entanglements[e] = t.entanglements[e] | 1073741824 | (a & 261930)));
  }
  function _0(t, l) {
    var a = (t.entangledLanes |= l);
    for (t = t.entanglements; a; ) {
      var e = 31 - Xt(a),
        u = 1 << e;
      ((u & l) | (t[e] & l) && (t[e] |= l), (a &= ~u));
    }
  }
  function D0(t, l) {
    var a = l & -l;
    return (
      (a = (a & 42) !== 0 ? 1 : hf(a)),
      (a & (t.suspendedLanes | l)) !== 0 ? 0 : a
    );
  }
  function hf(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function gf(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function U0() {
    var t = G.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : tm(t.type));
  }
  function Wo(t, l) {
    var a = G.p;
    try {
      return ((G.p = t), l());
    } finally {
      G.p = a;
    }
  }
  var ia = Math.random().toString(36).slice(2),
    pt = "__reactFiber$" + ia,
    Ut = "__reactProps$" + ia,
    he = "__reactContainer$" + ia,
    Mc = "__reactEvents$" + ia,
    O1 = "__reactListeners$" + ia,
    N1 = "__reactHandles$" + ia,
    $o = "__reactResources$" + ia,
    Au = "__reactMarker$" + ia;
  function bf(t) {
    (delete t[pt], delete t[Ut], delete t[Mc], delete t[O1], delete t[N1]);
  }
  function Za(t) {
    var l = t[pt];
    if (l) return l;
    for (var a = t.parentNode; a; ) {
      if ((l = a[he] || a[pt])) {
        if (
          ((a = l.alternate),
          l.child !== null || (a !== null && a.child !== null))
        )
          for (t = n0(t); t !== null; ) {
            if ((a = t[pt])) return a;
            t = n0(t);
          }
        return l;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function ge(t) {
    if ((t = t[pt] || t[he])) {
      var l = t.tag;
      if (
        l === 5 ||
        l === 6 ||
        l === 13 ||
        l === 31 ||
        l === 26 ||
        l === 27 ||
        l === 3
      )
        return t;
    }
    return null;
  }
  function Ke(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(S(33));
  }
  function Pa(t) {
    var l = t[$o];
    return (
      l ||
        (l = t[$o] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      l
    );
  }
  function mt(t) {
    t[Au] = !0;
  }
  var C0 = new Set(),
    B0 = {};
  function Ea(t, l) {
    (ce(t, l), ce(t + "Capture", l));
  }
  function ce(t, l) {
    for (B0[t] = l, t = 0; t < l.length; t++) C0.add(l[t]);
  }
  var _1 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Io = {},
    Po = {};
  function D1(t) {
    return Ac.call(Po, t)
      ? !0
      : Ac.call(Io, t)
        ? !1
        : _1.test(t)
          ? (Po[t] = !0)
          : ((Io[t] = !0), !1);
  }
  function on(t, l, a) {
    if (D1(l))
      if (a === null) t.removeAttribute(l);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var e = l.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + a);
      }
  }
  function ku(t, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + a);
    }
  }
  function vl(t, l, a, e) {
    if (e === null) t.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(l, a, "" + e);
    }
  }
  function Jt(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function R0(t) {
    var l = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (l === "checkbox" || l === "radio")
    );
  }
  function U1(t, l, a) {
    var e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
    if (
      !t.hasOwnProperty(l) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(t, l, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((a = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(t, l, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[l]);
          },
        }
      );
    }
  }
  function Oc(t) {
    if (!t._valueTracker) {
      var l = R0(t) ? "checked" : "value";
      t._valueTracker = U1(t, l, "" + t[l]);
    }
  }
  function H0(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var a = l.getValue(),
      e = "";
    return (
      t && (e = R0(t) ? (t.checked ? "true" : "false") : t.value),
      (t = e),
      t !== a ? (l.setValue(t), !0) : !1
    );
  }
  function Nn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var C1 = /[\n"\\]/g;
  function Ft(t) {
    return t.replace(C1, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function Nc(t, l, a, e, u, n, i, c) {
    ((t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      l != null
        ? i === "number"
          ? ((l === 0 && t.value === "") || t.value != l) &&
            (t.value = "" + Jt(l))
          : t.value !== "" + Jt(l) && (t.value = "" + Jt(l))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      l != null
        ? _c(t, i, Jt(l))
        : a != null
          ? _c(t, i, Jt(a))
          : e != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.name = "" + Jt(c))
        : t.removeAttribute("name"));
  }
  function q0(t, l, a, e, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      l != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || l != null)) {
        Oc(t);
        return;
      }
      ((a = a != null ? "" + Jt(a) : ""),
        (l = l != null ? "" + Jt(l) : a),
        c || l === t.value || (t.value = l),
        (t.defaultValue = l));
    }
    ((e = e != null ? e : u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (t.checked = c ? t.checked : !!e),
      (t.defaultChecked = !!e),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i),
      Oc(t));
  }
  function _c(t, l, a) {
    (l === "number" && Nn(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function te(t, l, a, e) {
    if (((t = t.options), l)) {
      l = {};
      for (var u = 0; u < a.length; u++) l["$" + a[u]] = !0;
      for (a = 0; a < t.length; a++)
        ((u = l.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== u && (t[a].selected = u),
          u && e && (t[a].defaultSelected = !0));
    } else {
      for (a = "" + Jt(a), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === a) {
          ((t[u].selected = !0), e && (t[u].defaultSelected = !0));
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Y0(t, l, a) {
    if (
      l != null &&
      ((l = "" + Jt(l)), l !== t.value && (t.value = l), a == null)
    ) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = a != null ? "" + Jt(a) : "";
  }
  function j0(t, l, a, e) {
    if (l == null) {
      if (e != null) {
        if (a != null) throw Error(S(92));
        if (Le(e)) {
          if (1 < e.length) throw Error(S(93));
          e = e[0];
        }
        a = e;
      }
      (a == null && (a = ""), (l = a));
    }
    ((a = Jt(l)),
      (t.defaultValue = a),
      (e = t.textContent),
      e === a && e !== "" && e !== null && (t.value = e),
      Oc(t));
  }
  function fe(t, l) {
    if (l) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var B1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ts(t, l, a) {
    var e = l.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? t.setProperty(l, "")
        : l === "float"
          ? (t.cssFloat = "")
          : (t[l] = "")
      : e
        ? t.setProperty(l, a)
        : typeof a != "number" || a === 0 || B1.has(l)
          ? l === "float"
            ? (t.cssFloat = a)
            : (t[l] = ("" + a).trim())
          : (t[l] = a + "px");
  }
  function G0(t, l, a) {
    if (l != null && typeof l != "object") throw Error(S(62));
    if (((t = t.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (l != null && l.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? t.setProperty(e, "")
            : e === "float"
              ? (t.cssFloat = "")
              : (t[e] = ""));
      for (var u in l)
        ((e = l[u]), l.hasOwnProperty(u) && a[u] !== e && ts(t, u, e));
    } else for (var n in l) l.hasOwnProperty(n) && ts(t, n, l[n]);
  }
  function Sf(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var R1 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    H1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function sn(t) {
    return H1.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function xl() {}
  var Dc = null;
  function zf(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var La = null,
    le = null;
  function ls(t) {
    var l = ge(t);
    if (l && (t = l.stateNode)) {
      var a = t[Ut] || null;
      t: switch (((t = l.stateNode), l.type)) {
        case "input":
          if (
            (Nc(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (l = a.name),
            a.type === "radio" && l != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Ft("" + l) + '"][type="radio"]',
              ),
                l = 0;
              l < a.length;
              l++
            ) {
              var e = a[l];
              if (e !== t && e.form === t.form) {
                var u = e[Ut] || null;
                if (!u) throw Error(S(90));
                Nc(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (l = 0; l < a.length; l++)
              ((e = a[l]), e.form === t.form && H0(e));
          }
          break t;
        case "textarea":
          Y0(t, a.value, a.defaultValue);
          break t;
        case "select":
          ((l = a.value), l != null && te(t, !!a.multiple, l, !1));
      }
    }
  }
  var Li = !1;
  function X0(t, l, a) {
    if (Li) return t(l, a);
    Li = !0;
    try {
      var e = t(l);
      return e;
    } finally {
      if (
        ((Li = !1),
        (La !== null || le !== null) &&
          (di(), La && ((l = La), (t = le), (le = La = null), ls(l), t)))
      )
        for (l = 0; l < t.length; l++) ls(t[l]);
    }
  }
  function fu(t, l) {
    var a = t.stateNode;
    if (a === null) return null;
    var e = a[Ut] || null;
    if (e === null) return null;
    a = e[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((e = !e.disabled) ||
          ((t = t.type),
          (e = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !e));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(S(231, l, typeof a));
    return a;
  }
  var Ol = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Uc = !1;
  if (Ol)
    try {
      ((qa = {}),
        Object.defineProperty(qa, "passive", {
          get: function () {
            Uc = !0;
          },
        }),
        window.addEventListener("test", qa, qa),
        window.removeEventListener("test", qa, qa));
    } catch {
      Uc = !1;
    }
  var qa,
    Zl = null,
    xf = null,
    dn = null;
  function Q0() {
    if (dn) return dn;
    var t,
      l = xf,
      a = l.length,
      e,
      u = "value" in Zl ? Zl.value : Zl.textContent,
      n = u.length;
    for (t = 0; t < a && l[t] === u[t]; t++);
    var i = a - t;
    for (e = 1; e <= i && l[a - e] === u[n - e]; e++);
    return (dn = u.slice(t, 1 < e ? 1 - e : void 0));
  }
  function rn(t) {
    var l = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
        : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Fu() {
    return !0;
  }
  function as() {
    return !1;
  }
  function Ct(t) {
    function l(a, e, u, n, i) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in t)
        t.hasOwnProperty(c) && ((a = t[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Fu
          : as),
        (this.isPropagationStopped = as),
        this
      );
    }
    return (
      W(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Fu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Fu));
        },
        persist: function () {},
        isPersistent: Fu,
      }),
      l
    );
  }
  var Ta = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ti = Ct(Ta),
    Mu = W({}, Ta, { view: 0, detail: 0 }),
    q1 = Ct(Mu),
    Ki,
    Ji,
    Ye,
    li = W({}, Mu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ef,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ye &&
              (Ye && t.type === "mousemove"
                ? ((Ki = t.screenX - Ye.screenX), (Ji = t.screenY - Ye.screenY))
                : (Ji = Ki = 0),
              (Ye = t)),
            Ki);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ji;
      },
    }),
    es = Ct(li),
    Y1 = W({}, li, { dataTransfer: 0 }),
    j1 = Ct(Y1),
    G1 = W({}, Mu, { relatedTarget: 0 }),
    wi = Ct(G1),
    X1 = W({}, Ta, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Q1 = Ct(X1),
    V1 = W({}, Ta, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Z1 = Ct(V1),
    L1 = W({}, Ta, { data: 0 }),
    us = Ct(L1),
    K1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    J1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    w1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function k1(t) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(t)
      : (t = w1[t])
        ? !!l[t]
        : !1;
  }
  function Ef() {
    return k1;
  }
  var F1 = W({}, Mu, {
      key: function (t) {
        if (t.key) {
          var l = K1[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress"
          ? ((t = rn(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? J1[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ef,
      charCode: function (t) {
        return t.type === "keypress" ? rn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? rn(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    W1 = Ct(F1),
    $1 = W({}, li, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ns = Ct($1),
    I1 = W({}, Mu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ef,
    }),
    P1 = Ct(I1),
    tv = W({}, Ta, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lv = Ct(tv),
    av = W({}, li, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ev = Ct(av),
    uv = W({}, Ta, { newState: 0, oldState: 0 }),
    nv = Ct(uv),
    iv = [9, 13, 27, 32],
    Tf = Ol && "CompositionEvent" in window,
    ke = null;
  Ol && "documentMode" in document && (ke = document.documentMode);
  var cv = Ol && "TextEvent" in window && !ke,
    V0 = Ol && (!Tf || (ke && 8 < ke && 11 >= ke)),
    is = " ",
    cs = !1;
  function Z0(t, l) {
    switch (t) {
      case "keyup":
        return iv.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function L0(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Ka = !1;
  function fv(t, l) {
    switch (t) {
      case "compositionend":
        return L0(l);
      case "keypress":
        return l.which !== 32 ? null : ((cs = !0), is);
      case "textInput":
        return ((t = l.data), t === is && cs ? null : t);
      default:
        return null;
    }
  }
  function ov(t, l) {
    if (Ka)
      return t === "compositionend" || (!Tf && Z0(t, l))
        ? ((t = Q0()), (dn = xf = Zl = null), (Ka = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return V0 && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var sv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function fs(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!sv[t.type] : l === "textarea";
  }
  function K0(t, l, a, e) {
    (La ? (le ? le.push(e) : (le = [e])) : (La = e),
      (l = Jn(l, "onChange")),
      0 < l.length &&
        ((a = new ti("onChange", "change", null, a, e)),
        t.push({ event: a, listeners: l })));
  }
  var Fe = null,
    ou = null;
  function dv(t) {
    Xr(t, 0);
  }
  function ai(t) {
    var l = Ke(t);
    if (H0(l)) return t;
  }
  function os(t, l) {
    if (t === "change") return l;
  }
  var J0 = !1;
  Ol &&
    (Ol
      ? (($u = "oninput" in document),
        $u ||
          ((ki = document.createElement("div")),
          ki.setAttribute("oninput", "return;"),
          ($u = typeof ki.oninput == "function")),
        (Wu = $u))
      : (Wu = !1),
    (J0 = Wu && (!document.documentMode || 9 < document.documentMode)));
  var Wu, $u, ki;
  function ss() {
    Fe && (Fe.detachEvent("onpropertychange", w0), (ou = Fe = null));
  }
  function w0(t) {
    if (t.propertyName === "value" && ai(ou)) {
      var l = [];
      (K0(l, ou, t, zf(t)), X0(dv, l));
    }
  }
  function rv(t, l, a) {
    t === "focusin"
      ? (ss(), (Fe = l), (ou = a), Fe.attachEvent("onpropertychange", w0))
      : t === "focusout" && ss();
  }
  function mv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ai(ou);
  }
  function vv(t, l) {
    if (t === "click") return ai(l);
  }
  function yv(t, l) {
    if (t === "input" || t === "change") return ai(l);
  }
  function pv(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
  }
  var Vt = typeof Object.is == "function" ? Object.is : pv;
  function su(t, l) {
    if (Vt(t, l)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof l != "object" ||
      l === null
    )
      return !1;
    var a = Object.keys(t),
      e = Object.keys(l);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Ac.call(l, u) || !Vt(t[u], l[u])) return !1;
    }
    return !0;
  }
  function ds(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function rs(t, l) {
    var a = ds(t);
    t = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = t + a.textContent.length), t <= l && e >= l))
          return { node: a, offset: l - t };
        t = e;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ds(a);
    }
  }
  function k0(t, l) {
    return t && l
      ? t === l
        ? !0
        : t && t.nodeType === 3
          ? !1
          : l && l.nodeType === 3
            ? k0(t, l.parentNode)
            : "contains" in t
              ? t.contains(l)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(l) & 16)
                : !1
      : !1;
  }
  function F0(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var l = Nn(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof l.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = l.contentWindow;
      else break;
      l = Nn(t.document);
    }
    return l;
  }
  function Af(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      l &&
      ((l === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        l === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var hv = Ol && "documentMode" in document && 11 >= document.documentMode,
    Ja = null,
    Cc = null,
    We = null,
    Bc = !1;
  function ms(t, l, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Bc ||
      Ja == null ||
      Ja !== Nn(e) ||
      ((e = Ja),
      "selectionStart" in e && Af(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (We && su(We, e)) ||
        ((We = e),
        (e = Jn(Cc, "onSelect")),
        0 < e.length &&
          ((l = new ti("onSelect", "select", null, l, a)),
          t.push({ event: l, listeners: e }),
          (l.target = Ja))));
  }
  function fa(t, l) {
    var a = {};
    return (
      (a[t.toLowerCase()] = l.toLowerCase()),
      (a["Webkit" + t] = "webkit" + l),
      (a["Moz" + t] = "moz" + l),
      a
    );
  }
  var wa = {
      animationend: fa("Animation", "AnimationEnd"),
      animationiteration: fa("Animation", "AnimationIteration"),
      animationstart: fa("Animation", "AnimationStart"),
      transitionrun: fa("Transition", "TransitionRun"),
      transitionstart: fa("Transition", "TransitionStart"),
      transitioncancel: fa("Transition", "TransitionCancel"),
      transitionend: fa("Transition", "TransitionEnd"),
    },
    Fi = {},
    W0 = {};
  Ol &&
    ((W0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wa.animationend.animation,
      delete wa.animationiteration.animation,
      delete wa.animationstart.animation),
    "TransitionEvent" in window || delete wa.transitionend.transition);
  function Aa(t) {
    if (Fi[t]) return Fi[t];
    if (!wa[t]) return t;
    var l = wa[t],
      a;
    for (a in l) if (l.hasOwnProperty(a) && a in W0) return (Fi[t] = l[a]);
    return t;
  }
  var $0 = Aa("animationend"),
    I0 = Aa("animationiteration"),
    P0 = Aa("animationstart"),
    gv = Aa("transitionrun"),
    bv = Aa("transitionstart"),
    Sv = Aa("transitioncancel"),
    td = Aa("transitionend"),
    ld = new Map(),
    Rc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Rc.push("scrollEnd");
  function el(t, l) {
    (ld.set(t, l), Ea(l, [t]));
  }
  var _n =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var l = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(l)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Kt = [],
    ka = 0,
    Mf = 0;
  function ei() {
    for (var t = ka, l = (Mf = ka = 0); l < t; ) {
      var a = Kt[l];
      Kt[l++] = null;
      var e = Kt[l];
      Kt[l++] = null;
      var u = Kt[l];
      Kt[l++] = null;
      var n = Kt[l];
      if (((Kt[l++] = null), e !== null && u !== null)) {
        var i = e.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (e.pending = u));
      }
      n !== 0 && ad(a, u, n);
    }
  }
  function ui(t, l, a, e) {
    ((Kt[ka++] = t),
      (Kt[ka++] = l),
      (Kt[ka++] = a),
      (Kt[ka++] = e),
      (Mf |= e),
      (t.lanes |= e),
      (t = t.alternate),
      t !== null && (t.lanes |= e));
  }
  function Of(t, l, a, e) {
    return (ui(t, l, a, e), Dn(t));
  }
  function Ma(t, l) {
    return (ui(t, null, null, l), Dn(t));
  }
  function ad(t, l, a) {
    t.lanes |= a;
    var e = t.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = t.return; n !== null; )
      ((n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return));
    return t.tag === 3
      ? ((n = t.stateNode),
        u &&
          l !== null &&
          ((u = 31 - Xt(a)),
          (t = n.hiddenUpdates),
          (e = t[u]),
          e === null ? (t[u] = [l]) : e.push(l),
          (l.lane = a | 536870912)),
        n)
      : null;
  }
  function Dn(t) {
    if (50 < nu) throw ((nu = 0), (lf = null), Error(S(185)));
    for (var l = t.return; l !== null; ) ((t = l), (l = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Fa = {};
  function zv(t, l, a, e) {
    ((this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = l),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function qt(t, l, a, e) {
    return new zv(t, l, a, e);
  }
  function Nf(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Tl(t, l) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = qt(t.tag, l, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = l),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (l = t.dependencies),
      (a.dependencies =
        l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function ed(t, l) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = l),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (l = a.dependencies),
          (t.dependencies =
            l === null
              ? null
              : { lanes: l.lanes, firstContext: l.firstContext })),
      t
    );
  }
  function mn(t, l, a, e, u, n) {
    var i = 0;
    if (((e = t), typeof t == "function")) Nf(t) && (i = 1);
    else if (typeof t == "string")
      i = Ty(t, a, ol.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case zc:
          return (
            (t = qt(31, a, l, u)),
            (t.elementType = zc),
            (t.lanes = n),
            t
          );
        case Qa:
          return va(a.children, u, n, l);
        case x0:
          ((i = 8), (u |= 24));
          break;
        case gc:
          return (
            (t = qt(12, a, l, u | 2)),
            (t.elementType = gc),
            (t.lanes = n),
            t
          );
        case bc:
          return (
            (t = qt(13, a, l, u)),
            (t.elementType = bc),
            (t.lanes = n),
            t
          );
        case Sc:
          return (
            (t = qt(19, a, l, u)),
            (t.elementType = Sc),
            (t.lanes = n),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case zl:
                i = 10;
                break t;
              case E0:
                i = 9;
                break t;
              case vf:
                i = 11;
                break t;
              case yf:
                i = 14;
                break t;
              case ql:
                ((i = 16), (e = null));
                break t;
            }
          ((i = 29),
            (a = Error(S(130, t === null ? "null" : typeof t, ""))),
            (e = null));
      }
    return (
      (l = qt(i, a, l, u)),
      (l.elementType = t),
      (l.type = e),
      (l.lanes = n),
      l
    );
  }
  function va(t, l, a, e) {
    return ((t = qt(7, t, e, l)), (t.lanes = a), t);
  }
  function Wi(t, l, a) {
    return ((t = qt(6, t, null, l)), (t.lanes = a), t);
  }
  function ud(t) {
    var l = qt(18, null, null, 0);
    return ((l.stateNode = t), l);
  }
  function $i(t, l, a) {
    return (
      (l = qt(4, t.children !== null ? t.children : [], t.key, l)),
      (l.lanes = a),
      (l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      l
    );
  }
  var vs = new WeakMap();
  function Wt(t, l) {
    if (typeof t == "object" && t !== null) {
      var a = vs.get(t);
      return a !== void 0
        ? a
        : ((l = { value: t, source: l, stack: Fo(l) }), vs.set(t, l), l);
    }
    return { value: t, source: l, stack: Fo(l) };
  }
  var Wa = [],
    $a = 0,
    Un = null,
    du = 0,
    wt = [],
    kt = 0,
    aa = null,
    il = 1,
    cl = "";
  function bl(t, l) {
    ((Wa[$a++] = du), (Wa[$a++] = Un), (Un = t), (du = l));
  }
  function nd(t, l, a) {
    ((wt[kt++] = il), (wt[kt++] = cl), (wt[kt++] = aa), (aa = t));
    var e = il;
    t = cl;
    var u = 32 - Xt(e) - 1;
    ((e &= ~(1 << u)), (a += 1));
    var n = 32 - Xt(l) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (u -= i),
        (il = (1 << (32 - Xt(l) + u)) | (a << u) | e),
        (cl = n + t));
    } else ((il = (1 << n) | (a << u) | e), (cl = t));
  }
  function _f(t) {
    t.return !== null && (bl(t, 1), nd(t, 1, 0));
  }
  function Df(t) {
    for (; t === Un; )
      ((Un = Wa[--$a]), (Wa[$a] = null), (du = Wa[--$a]), (Wa[$a] = null));
    for (; t === aa; )
      ((aa = wt[--kt]),
        (wt[kt] = null),
        (cl = wt[--kt]),
        (wt[kt] = null),
        (il = wt[--kt]),
        (wt[kt] = null));
  }
  function id(t, l) {
    ((wt[kt++] = il),
      (wt[kt++] = cl),
      (wt[kt++] = aa),
      (il = l.id),
      (cl = l.overflow),
      (aa = t));
  }
  var ht = null,
    F = null,
    q = !1,
    kl = null,
    $t = !1,
    Hc = Error(S(519));
  function ea(t) {
    var l = Error(
      S(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (ru(Wt(l, t)), Hc);
  }
  function ys(t) {
    var l = t.stateNode,
      a = t.type,
      e = t.memoizedProps;
    switch (((l[pt] = t), (l[Ut] = e), a)) {
      case "dialog":
        (C("cancel", l), C("close", l));
        break;
      case "iframe":
      case "object":
      case "embed":
        C("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < pu.length; a++) C(pu[a], l);
        break;
      case "source":
        C("error", l);
        break;
      case "img":
      case "image":
      case "link":
        (C("error", l), C("load", l));
        break;
      case "details":
        C("toggle", l);
        break;
      case "input":
        (C("invalid", l),
          q0(
            l,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0,
          ));
        break;
      case "select":
        C("invalid", l);
        break;
      case "textarea":
        (C("invalid", l), j0(l, e.value, e.defaultValue, e.children));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      l.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      Vr(l.textContent, a)
        ? (e.popover != null && (C("beforetoggle", l), C("toggle", l)),
          e.onScroll != null && C("scroll", l),
          e.onScrollEnd != null && C("scrollend", l),
          e.onClick != null && (l.onclick = xl),
          (l = !0))
        : (l = !1),
      l || ea(t, !0));
  }
  function ps(t) {
    for (ht = t.return; ht; )
      switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          $t = !1;
          return;
        case 27:
        case 3:
          $t = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function Ya(t) {
    if (t !== ht) return !1;
    if (!q) return (ps(t), (q = !0), !1);
    var l = t.tag,
      a;
    if (
      ((a = l !== 3 && l !== 27) &&
        ((a = l === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || cf(t.type, t.memoizedProps))),
        (a = !a)),
      a && F && ea(t),
      ps(t),
      l === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(S(317));
      F = u0(t);
    } else if (l === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(S(317));
      F = u0(t);
    } else
      l === 27
        ? ((l = F), ca(t.type) ? ((t = df), (df = null), (F = t)) : (F = l))
        : (F = ht ? Pt(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ga() {
    ((F = ht = null), (q = !1));
  }
  function Ii() {
    var t = kl;
    return (
      t !== null &&
        (_t === null ? (_t = t) : _t.push.apply(_t, t), (kl = null)),
      t
    );
  }
  function ru(t) {
    kl === null ? (kl = [t]) : kl.push(t);
  }
  var qc = sl(null),
    Oa = null,
    El = null;
  function jl(t, l, a) {
    (J(qc, l._currentValue), (l._currentValue = a));
  }
  function Al(t) {
    ((t._currentValue = qc.current), vt(qc));
  }
  function Yc(t, l, a) {
    for (; t !== null; ) {
      var e = t.alternate;
      if (
        ((t.childLanes & l) !== l
          ? ((t.childLanes |= l), e !== null && (e.childLanes |= l))
          : e !== null && (e.childLanes & l) !== l && (e.childLanes |= l),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function jc(t, l, a, e) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < l.length; f++)
            if (c.context === l[f]) {
              ((n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                Yc(n.return, a, t),
                e || (i = null));
              break t;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(S(341));
        ((i.lanes |= a),
          (n = i.alternate),
          n !== null && (n.lanes |= a),
          Yc(i, a, t),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function be(t, l, a, e) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(S(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          Vt(u.pendingProps.value, i.value) ||
            (t !== null ? t.push(c) : (t = [c]));
        }
      } else if (u === Tn.current) {
        if (((i = u.alternate), i === null)) throw Error(S(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(gu) : (t = [gu]));
      }
      u = u.return;
    }
    (t !== null && jc(l, t, a, e), (l.flags |= 262144));
  }
  function Cn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Vt(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ba(t) {
    ((Oa = t),
      (El = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function gt(t) {
    return cd(Oa, t);
  }
  function Iu(t, l) {
    return (Oa === null && ba(t), cd(t, l));
  }
  function cd(t, l) {
    var a = l._currentValue;
    if (((l = { context: l, memoizedValue: a, next: null }), El === null)) {
      if (t === null) throw Error(S(308));
      ((El = l),
        (t.dependencies = { lanes: 0, firstContext: l }),
        (t.flags |= 524288));
    } else El = El.next = l;
    return a;
  }
  var xv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              l = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  t.push(e);
                },
              });
            this.abort = function () {
              ((l.aborted = !0),
                t.forEach(function (a) {
                  return a();
                }));
            };
          },
    Ev = dt.unstable_scheduleCallback,
    Tv = dt.unstable_NormalPriority,
    ft = {
      $$typeof: zl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Uf() {
    return { controller: new xv(), data: new Map(), refCount: 0 };
  }
  function Ou(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Ev(Tv, function () {
          t.controller.abort();
        }));
  }
  var $e = null,
    Gc = 0,
    oe = 0,
    ae = null;
  function Av(t, l) {
    if ($e === null) {
      var a = ($e = []);
      ((Gc = 0),
        (oe = ao()),
        (ae = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        }));
    }
    return (Gc++, l.then(hs, hs), l);
  }
  function hs() {
    if (--Gc === 0 && $e !== null) {
      ae !== null && (ae.status = "fulfilled");
      var t = $e;
      (($e = null), (oe = 0), (ae = null));
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Mv(t, l) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      t.then(
        function () {
          ((e.status = "fulfilled"), (e.value = l));
          for (var u = 0; u < a.length; u++) (0, a[u])(l);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      e
    );
  }
  var gs = O.S;
  O.S = function (t, l) {
    ((zr = jt()),
      typeof l == "object" &&
        l !== null &&
        typeof l.then == "function" &&
        Av(t, l),
      gs !== null && gs(t, l));
  };
  var ya = sl(null);
  function Cf() {
    var t = ya.current;
    return t !== null ? t : K.pooledCache;
  }
  function vn(t, l) {
    l === null ? J(ya, ya.current) : J(ya, l.pool);
  }
  function fd() {
    var t = Cf();
    return t === null ? null : { parent: ft._currentValue, pool: t };
  }
  var Se = Error(S(460)),
    Bf = Error(S(474)),
    ni = Error(S(542)),
    Bn = { then: function () {} };
  function bs(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function od(t, l, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(l) : a !== l && (l.then(xl, xl), (l = a)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((t = l.reason), zs(t), t);
      default:
        if (typeof l.status == "string") l.then(xl, xl);
        else {
          if (((t = K), t !== null && 100 < t.shellSuspendCounter))
            throw Error(S(482));
          ((t = l),
            (t.status = "pending"),
            t.then(
              function (e) {
                if (l.status === "pending") {
                  var u = l;
                  ((u.status = "fulfilled"), (u.value = e));
                }
              },
              function (e) {
                if (l.status === "pending") {
                  var u = l;
                  ((u.status = "rejected"), (u.reason = e));
                }
              },
            ));
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw ((t = l.reason), zs(t), t);
        }
        throw ((pa = l), Se);
    }
  }
  function da(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((pa = a), Se)
        : a;
    }
  }
  var pa = null;
  function Ss() {
    if (pa === null) throw Error(S(459));
    var t = pa;
    return ((pa = null), t);
  }
  function zs(t) {
    if (t === Se || t === ni) throw Error(S(483));
  }
  var ee = null,
    mu = 0;
  function Pu(t) {
    var l = mu;
    return ((mu += 1), ee === null && (ee = []), od(ee, t, l));
  }
  function je(t, l) {
    ((l = l.props.ref), (t.ref = l !== void 0 ? l : null));
  }
  function tn(t, l) {
    throw l.$$typeof === r1
      ? Error(S(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          S(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : t,
          ),
        ));
  }
  function sd(t) {
    function l(d, s) {
      if (t) {
        var m = d.deletions;
        m === null ? ((d.deletions = [s]), (d.flags |= 16)) : m.push(s);
      }
    }
    function a(d, s) {
      if (!t) return null;
      for (; s !== null; ) (l(d, s), (s = s.sibling));
      return null;
    }
    function e(d) {
      for (var s = new Map(); d !== null; )
        (d.key !== null ? s.set(d.key, d) : s.set(d.index, d), (d = d.sibling));
      return s;
    }
    function u(d, s) {
      return ((d = Tl(d, s)), (d.index = 0), (d.sibling = null), d);
    }
    function n(d, s, m) {
      return (
        (d.index = m),
        t
          ? ((m = d.alternate),
            m !== null
              ? ((m = m.index), m < s ? ((d.flags |= 67108866), s) : m)
              : ((d.flags |= 67108866), s))
          : ((d.flags |= 1048576), s)
      );
    }
    function i(d) {
      return (t && d.alternate === null && (d.flags |= 67108866), d);
    }
    function c(d, s, m, g) {
      return s === null || s.tag !== 6
        ? ((s = Wi(m, d.mode, g)), (s.return = d), s)
        : ((s = u(s, m)), (s.return = d), s);
    }
    function f(d, s, m, g) {
      var E = m.type;
      return E === Qa
        ? p(d, s, m.props.children, g, m.key)
        : s !== null &&
            (s.elementType === E ||
              (typeof E == "object" &&
                E !== null &&
                E.$$typeof === ql &&
                da(E) === s.type))
          ? ((s = u(s, m.props)), je(s, m), (s.return = d), s)
          : ((s = mn(m.type, m.key, m.props, null, d.mode, g)),
            je(s, m),
            (s.return = d),
            s);
    }
    function r(d, s, m, g) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== m.containerInfo ||
        s.stateNode.implementation !== m.implementation
        ? ((s = $i(m, d.mode, g)), (s.return = d), s)
        : ((s = u(s, m.children || [])), (s.return = d), s);
    }
    function p(d, s, m, g, E) {
      return s === null || s.tag !== 7
        ? ((s = va(m, d.mode, g, E)), (s.return = d), s)
        : ((s = u(s, m)), (s.return = d), s);
    }
    function h(d, s, m) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = Wi("" + s, d.mode, m)), (s.return = d), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Lu:
            return (
              (m = mn(s.type, s.key, s.props, null, d.mode, m)),
              je(m, s),
              (m.return = d),
              m
            );
          case Ze:
            return ((s = $i(s, d.mode, m)), (s.return = d), s);
          case ql:
            return ((s = da(s)), h(d, s, m));
        }
        if (Le(s) || qe(s))
          return ((s = va(s, d.mode, m, null)), (s.return = d), s);
        if (typeof s.then == "function") return h(d, Pu(s), m);
        if (s.$$typeof === zl) return h(d, Iu(d, s), m);
        tn(d, s);
      }
      return null;
    }
    function v(d, s, m, g) {
      var E = s !== null ? s.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return E !== null ? null : c(d, s, "" + m, g);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Lu:
            return m.key === E ? f(d, s, m, g) : null;
          case Ze:
            return m.key === E ? r(d, s, m, g) : null;
          case ql:
            return ((m = da(m)), v(d, s, m, g));
        }
        if (Le(m) || qe(m)) return E !== null ? null : p(d, s, m, g, null);
        if (typeof m.then == "function") return v(d, s, Pu(m), g);
        if (m.$$typeof === zl) return v(d, s, Iu(d, m), g);
        tn(d, m);
      }
      return null;
    }
    function y(d, s, m, g, E) {
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return ((d = d.get(m) || null), c(s, d, "" + g, E));
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Lu:
            return (
              (d = d.get(g.key === null ? m : g.key) || null),
              f(s, d, g, E)
            );
          case Ze:
            return (
              (d = d.get(g.key === null ? m : g.key) || null),
              r(s, d, g, E)
            );
          case ql:
            return ((g = da(g)), y(d, s, m, g, E));
        }
        if (Le(g) || qe(g))
          return ((d = d.get(m) || null), p(s, d, g, E, null));
        if (typeof g.then == "function") return y(d, s, m, Pu(g), E);
        if (g.$$typeof === zl) return y(d, s, m, Iu(s, g), E);
        tn(s, g);
      }
      return null;
    }
    function z(d, s, m, g) {
      for (
        var E = null, U = null, x = s, M = (s = 0), N = null;
        x !== null && M < m.length;
        M++
      ) {
        x.index > M ? ((N = x), (x = null)) : (N = x.sibling);
        var A = v(d, x, m[M], g);
        if (A === null) {
          x === null && (x = N);
          break;
        }
        (t && x && A.alternate === null && l(d, x),
          (s = n(A, s, M)),
          U === null ? (E = A) : (U.sibling = A),
          (U = A),
          (x = N));
      }
      if (M === m.length) return (a(d, x), q && bl(d, M), E);
      if (x === null) {
        for (; M < m.length; M++)
          ((x = h(d, m[M], g)),
            x !== null &&
              ((s = n(x, s, M)),
              U === null ? (E = x) : (U.sibling = x),
              (U = x)));
        return (q && bl(d, M), E);
      }
      for (x = e(x); M < m.length; M++)
        ((N = y(x, d, M, m[M], g)),
          N !== null &&
            (t && N.alternate !== null && x.delete(N.key === null ? M : N.key),
            (s = n(N, s, M)),
            U === null ? (E = N) : (U.sibling = N),
            (U = N)));
      return (
        t &&
          x.forEach(function (nt) {
            return l(d, nt);
          }),
        q && bl(d, M),
        E
      );
    }
    function T(d, s, m, g) {
      if (m == null) throw Error(S(151));
      for (
        var E = null, U = null, x = s, M = (s = 0), N = null, A = m.next();
        x !== null && !A.done;
        M++, A = m.next()
      ) {
        x.index > M ? ((N = x), (x = null)) : (N = x.sibling);
        var nt = v(d, x, A.value, g);
        if (nt === null) {
          x === null && (x = N);
          break;
        }
        (t && x && nt.alternate === null && l(d, x),
          (s = n(nt, s, M)),
          U === null ? (E = nt) : (U.sibling = nt),
          (U = nt),
          (x = N));
      }
      if (A.done) return (a(d, x), q && bl(d, M), E);
      if (x === null) {
        for (; !A.done; M++, A = m.next())
          ((A = h(d, A.value, g)),
            A !== null &&
              ((s = n(A, s, M)),
              U === null ? (E = A) : (U.sibling = A),
              (U = A)));
        return (q && bl(d, M), E);
      }
      for (x = e(x); !A.done; M++, A = m.next())
        ((A = y(x, d, M, A.value, g)),
          A !== null &&
            (t && A.alternate !== null && x.delete(A.key === null ? M : A.key),
            (s = n(A, s, M)),
            U === null ? (E = A) : (U.sibling = A),
            (U = A)));
      return (
        t &&
          x.forEach(function (Tt) {
            return l(d, Tt);
          }),
        q && bl(d, M),
        E
      );
    }
    function R(d, s, m, g) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Qa &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Lu:
            t: {
              for (var E = m.key; s !== null; ) {
                if (s.key === E) {
                  if (((E = m.type), E === Qa)) {
                    if (s.tag === 7) {
                      (a(d, s.sibling),
                        (g = u(s, m.props.children)),
                        (g.return = d),
                        (d = g));
                      break t;
                    }
                  } else if (
                    s.elementType === E ||
                    (typeof E == "object" &&
                      E !== null &&
                      E.$$typeof === ql &&
                      da(E) === s.type)
                  ) {
                    (a(d, s.sibling),
                      (g = u(s, m.props)),
                      je(g, m),
                      (g.return = d),
                      (d = g));
                    break t;
                  }
                  a(d, s);
                  break;
                } else l(d, s);
                s = s.sibling;
              }
              m.type === Qa
                ? ((g = va(m.props.children, d.mode, g, m.key)),
                  (g.return = d),
                  (d = g))
                : ((g = mn(m.type, m.key, m.props, null, d.mode, g)),
                  je(g, m),
                  (g.return = d),
                  (d = g));
            }
            return i(d);
          case Ze:
            t: {
              for (E = m.key; s !== null; ) {
                if (s.key === E)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === m.containerInfo &&
                    s.stateNode.implementation === m.implementation
                  ) {
                    (a(d, s.sibling),
                      (g = u(s, m.children || [])),
                      (g.return = d),
                      (d = g));
                    break t;
                  } else {
                    a(d, s);
                    break;
                  }
                else l(d, s);
                s = s.sibling;
              }
              ((g = $i(m, d.mode, g)), (g.return = d), (d = g));
            }
            return i(d);
          case ql:
            return ((m = da(m)), R(d, s, m, g));
        }
        if (Le(m)) return z(d, s, m, g);
        if (qe(m)) {
          if (((E = qe(m)), typeof E != "function")) throw Error(S(150));
          return ((m = E.call(m)), T(d, s, m, g));
        }
        if (typeof m.then == "function") return R(d, s, Pu(m), g);
        if (m.$$typeof === zl) return R(d, s, Iu(d, m), g);
        tn(d, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          s !== null && s.tag === 6
            ? (a(d, s.sibling), (g = u(s, m)), (g.return = d), (d = g))
            : (a(d, s), (g = Wi(m, d.mode, g)), (g.return = d), (d = g)),
          i(d))
        : a(d, s);
    }
    return function (d, s, m, g) {
      try {
        mu = 0;
        var E = R(d, s, m, g);
        return ((ee = null), E);
      } catch (x) {
        if (x === Se || x === ni) throw x;
        var U = qt(29, x, null, d.mode);
        return ((U.lanes = g), (U.return = d), U);
      } finally {
      }
    };
  }
  var Sa = sd(!0),
    dd = sd(!1),
    Yl = !1;
  function Rf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Xc(t, l) {
    ((t = t.updateQueue),
      l.updateQueue === t &&
        (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Fl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Wl(t, l, a) {
    var e = t.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (j & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
        (e.pending = l),
        (l = Dn(t)),
        ad(t, null, a),
        l
      );
    }
    return (ui(t, e, l, a), Dn(t));
  }
  function Ie(t, l, a) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (a & 4194048) !== 0))
    ) {
      var e = l.lanes;
      ((e &= t.pendingLanes), (a |= e), (l.lanes = a), _0(t, a));
    }
  }
  function Pi(t, l) {
    var a = t.updateQueue,
      e = t.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (a = a.next));
        } while (a !== null);
        n === null ? (u = n = l) : (n = n.next = l);
      } else u = n = l;
      ((a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = l) : (t.next = l),
      (a.lastBaseUpdate = l));
  }
  var Qc = !1;
  function Pe() {
    if (Qc) {
      var t = ae;
      if (t !== null) throw t;
    }
  }
  function tu(t, l, a, e) {
    Qc = !1;
    var u = t.updateQueue;
    Yl = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        r = f.next;
      ((f.next = null), i === null ? (n = r) : (i.next = r), (i = f));
      var p = t.alternate;
      p !== null &&
        ((p = p.updateQueue),
        (c = p.lastBaseUpdate),
        c !== i &&
          (c === null ? (p.firstBaseUpdate = r) : (c.next = r),
          (p.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var h = u.baseState;
      ((i = 0), (p = r = f = null), (c = n));
      do {
        var v = c.lane & -536870913,
          y = v !== c.lane;
        if (y ? (H & v) === v : (e & v) === v) {
          (v !== 0 && v === oe && (Qc = !0),
            p !== null &&
              (p = p.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var z = t,
              T = c;
            v = l;
            var R = a;
            switch (T.tag) {
              case 1:
                if (((z = T.payload), typeof z == "function")) {
                  h = z.call(R, h, v);
                  break t;
                }
                h = z;
                break t;
              case 3:
                z.flags = (z.flags & -65537) | 128;
              case 0:
                if (
                  ((z = T.payload),
                  (v = typeof z == "function" ? z.call(R, h, v) : z),
                  v == null)
                )
                  break t;
                h = W({}, h, v);
                break t;
              case 2:
                Yl = !0;
            }
          }
          ((v = c.callback),
            v !== null &&
              ((t.flags |= 64),
              y && (t.flags |= 8192),
              (y = u.callbacks),
              y === null ? (u.callbacks = [v]) : y.push(v)));
        } else
          ((y = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            p === null ? ((r = p = y), (f = h)) : (p = p.next = y),
            (i |= v));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((y = c),
            (c = y.next),
            (y.next = null),
            (u.lastBaseUpdate = y),
            (u.shared.pending = null));
        }
      } while (!0);
      (p === null && (f = h),
        (u.baseState = f),
        (u.firstBaseUpdate = r),
        (u.lastBaseUpdate = p),
        n === null && (u.shared.lanes = 0),
        (na |= i),
        (t.lanes = i),
        (t.memoizedState = h));
    }
  }
  function rd(t, l) {
    if (typeof t != "function") throw Error(S(191, t));
    t.call(l);
  }
  function md(t, l) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) rd(a[t], l);
  }
  var se = sl(null),
    Rn = sl(0);
  function xs(t, l) {
    ((t = Ul), J(Rn, t), J(se, l), (Ul = t | l.baseLanes));
  }
  function Vc() {
    (J(Rn, Ul), J(se, se.current));
  }
  function Hf() {
    ((Ul = Rn.current), vt(se), vt(Rn));
  }
  var Zt = sl(null),
    It = null;
  function Gl(t) {
    var l = t.alternate;
    (J(et, et.current & 1),
      J(Zt, t),
      It === null &&
        (l === null || se.current !== null || l.memoizedState !== null) &&
        (It = t));
  }
  function Zc(t) {
    (J(et, et.current), J(Zt, t), It === null && (It = t));
  }
  function vd(t) {
    t.tag === 22
      ? (J(et, et.current), J(Zt, t), It === null && (It = t))
      : Xl(t);
  }
  function Xl() {
    (J(et, et.current), J(Zt, Zt.current));
  }
  function Ht(t) {
    (vt(Zt), It === t && (It = null), vt(et));
  }
  var et = sl(0);
  function Hn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var a = l.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || of(a) || sf(a)))
          return l;
      } else if (
        l.tag === 19 &&
        (l.memoizedProps.revealOrder === "forwards" ||
          l.memoizedProps.revealOrder === "backwards" ||
          l.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          l.memoizedProps.revealOrder === "together")
      ) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        ((l.child.return = l), (l = l.child));
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      ((l.sibling.return = l.return), (l = l.sibling));
    }
    return null;
  }
  var Nl = 0,
    D = null,
    L = null,
    it = null,
    qn = !1,
    ue = !1,
    za = !1,
    Yn = 0,
    vu = 0,
    ne = null,
    Ov = 0;
  function P() {
    throw Error(S(321));
  }
  function qf(t, l) {
    if (l === null) return !1;
    for (var a = 0; a < l.length && a < t.length; a++)
      if (!Vt(t[a], l[a])) return !1;
    return !0;
  }
  function Yf(t, l, a, e, u, n) {
    return (
      (Nl = n),
      (D = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (O.H = t === null || t.memoizedState === null ? Kd : kf),
      (za = !1),
      (n = a(e, u)),
      (za = !1),
      ue && (n = pd(l, a, e, u)),
      yd(t),
      n
    );
  }
  function yd(t) {
    O.H = yu;
    var l = L !== null && L.next !== null;
    if (((Nl = 0), (it = L = D = null), (qn = !1), (vu = 0), (ne = null), l))
      throw Error(S(300));
    t === null ||
      ot ||
      ((t = t.dependencies), t !== null && Cn(t) && (ot = !0));
  }
  function pd(t, l, a, e) {
    D = t;
    var u = 0;
    do {
      if ((ue && (ne = null), (vu = 0), (ue = !1), 25 <= u))
        throw Error(S(301));
      if (((u += 1), (it = L = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((O.H = Jd), (n = l(a, e)));
    } while (ue);
    return n;
  }
  function Nv() {
    var t = O.H,
      l = t.useState()[0];
    return (
      (l = typeof l.then == "function" ? Nu(l) : l),
      (t = t.useState()[0]),
      (L !== null ? L.memoizedState : null) !== t && (D.flags |= 1024),
      l
    );
  }
  function jf() {
    var t = Yn !== 0;
    return ((Yn = 0), t);
  }
  function Gf(t, l, a) {
    ((l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~a));
  }
  function Xf(t) {
    if (qn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        (l !== null && (l.pending = null), (t = t.next));
      }
      qn = !1;
    }
    ((Nl = 0), (it = L = D = null), (ue = !1), (vu = Yn = 0), (ne = null));
  }
  function Et() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (it === null ? (D.memoizedState = it = t) : (it = it.next = t), it);
  }
  function ut() {
    if (L === null) {
      var t = D.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = L.next;
    var l = it === null ? D.memoizedState : it.next;
    if (l !== null) ((it = l), (L = t));
    else {
      if (t === null)
        throw D.alternate === null ? Error(S(467)) : Error(S(310));
      ((L = t),
        (t = {
          memoizedState: L.memoizedState,
          baseState: L.baseState,
          baseQueue: L.baseQueue,
          queue: L.queue,
          next: null,
        }),
        it === null ? (D.memoizedState = it = t) : (it = it.next = t));
    }
    return it;
  }
  function ii() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Nu(t) {
    var l = vu;
    return (
      (vu += 1),
      ne === null && (ne = []),
      (t = od(ne, t, l)),
      (l = D),
      (it === null ? l.memoizedState : it.next) === null &&
        ((l = l.alternate),
        (O.H = l === null || l.memoizedState === null ? Kd : kf)),
      t
    );
  }
  function ci(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Nu(t);
      if (t.$$typeof === zl) return gt(t);
    }
    throw Error(S(438, String(t)));
  }
  function Qf(t) {
    var l = null,
      a = D.updateQueue;
    if ((a !== null && (l = a.memoCache), l == null)) {
      var e = D.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (l = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (l == null && (l = { data: [], index: 0 }),
      a === null && ((a = ii()), (D.updateQueue = a)),
      (a.memoCache = l),
      (a = l.data[l.index]),
      a === void 0)
    )
      for (a = l.data[l.index] = Array(t), e = 0; e < t; e++) a[e] = m1;
    return (l.index++, a);
  }
  function _l(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function yn(t) {
    var l = ut();
    return Vf(l, L, t);
  }
  function Vf(t, l, a) {
    var e = t.queue;
    if (e === null) throw Error(S(311));
    e.lastRenderedReducer = a;
    var u = t.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((l.baseQueue = u = n), (e.pending = null));
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      l = u.next;
      var c = (i = null),
        f = null,
        r = l,
        p = !1;
      do {
        var h = r.lane & -536870913;
        if (h !== r.lane ? (H & h) === h : (Nl & h) === h) {
          var v = r.revertLane;
          if (v === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: r.action,
                  hasEagerState: r.hasEagerState,
                  eagerState: r.eagerState,
                  next: null,
                }),
              h === oe && (p = !0));
          else if ((Nl & v) === v) {
            ((r = r.next), v === oe && (p = !0));
            continue;
          } else
            ((h = {
              lane: 0,
              revertLane: r.revertLane,
              gesture: null,
              action: r.action,
              hasEagerState: r.hasEagerState,
              eagerState: r.eagerState,
              next: null,
            }),
              f === null ? ((c = f = h), (i = n)) : (f = f.next = h),
              (D.lanes |= v),
              (na |= v));
          ((h = r.action),
            za && a(n, h),
            (n = r.hasEagerState ? r.eagerState : a(n, h)));
        } else
          ((v = {
            lane: h,
            revertLane: r.revertLane,
            gesture: r.gesture,
            action: r.action,
            hasEagerState: r.hasEagerState,
            eagerState: r.eagerState,
            next: null,
          }),
            f === null ? ((c = f = v), (i = n)) : (f = f.next = v),
            (D.lanes |= h),
            (na |= h));
        r = r.next;
      } while (r !== null && r !== l);
      if (
        (f === null ? (i = n) : (f.next = c),
        !Vt(n, t.memoizedState) && ((ot = !0), p && ((a = ae), a !== null)))
      )
        throw a;
      ((t.memoizedState = n),
        (t.baseState = i),
        (t.baseQueue = f),
        (e.lastRenderedState = n));
    }
    return (u === null && (e.lanes = 0), [t.memoizedState, e.dispatch]);
  }
  function tc(t) {
    var l = ut(),
      a = l.queue;
    if (a === null) throw Error(S(311));
    a.lastRenderedReducer = t;
    var e = a.dispatch,
      u = a.pending,
      n = l.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = (u = u.next);
      do ((n = t(n, i.action)), (i = i.next));
      while (i !== u);
      (Vt(n, l.memoizedState) || (ot = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, e];
  }
  function hd(t, l, a) {
    var e = D,
      u = ut(),
      n = q;
    if (n) {
      if (a === void 0) throw Error(S(407));
      a = a();
    } else a = l();
    var i = !Vt((L || u).memoizedState, a);
    if (
      (i && ((u.memoizedState = a), (ot = !0)),
      (u = u.queue),
      Zf(Sd.bind(null, e, u, t), [t]),
      u.getSnapshot !== l || i || (it !== null && it.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        de(9, { destroy: void 0 }, bd.bind(null, e, u, a, l), null),
        K === null)
      )
        throw Error(S(349));
      n || (Nl & 127) !== 0 || gd(e, l, a);
    }
    return a;
  }
  function gd(t, l, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: l, value: a }),
      (l = D.updateQueue),
      l === null
        ? ((l = ii()), (D.updateQueue = l), (l.stores = [t]))
        : ((a = l.stores), a === null ? (l.stores = [t]) : a.push(t)));
  }
  function bd(t, l, a, e) {
    ((l.value = a), (l.getSnapshot = e), zd(l) && xd(t));
  }
  function Sd(t, l, a) {
    return a(function () {
      zd(l) && xd(t);
    });
  }
  function zd(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var a = l();
      return !Vt(t, a);
    } catch {
      return !0;
    }
  }
  function xd(t) {
    var l = Ma(t, 2);
    l !== null && Dt(l, t, 2);
  }
  function Lc(t) {
    var l = Et();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), za)) {
        Vl(!0);
        try {
          a();
        } finally {
          Vl(!1);
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = t),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _l,
        lastRenderedState: t,
      }),
      l
    );
  }
  function Ed(t, l, a, e) {
    return ((t.baseState = a), Vf(t, L, typeof e == "function" ? e : _l));
  }
  function _v(t, l, a, e, u) {
    if (oi(t)) throw Error(S(485));
    if (((t = l.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (O.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = l.pending),
        a === null
          ? ((n.next = l.pending = n), Td(l, n))
          : ((n.next = a.next), (l.pending = a.next = n)));
    }
  }
  function Td(t, l) {
    var a = l.action,
      e = l.payload,
      u = t.state;
    if (l.isTransition) {
      var n = O.T,
        i = {};
      O.T = i;
      try {
        var c = a(u, e),
          f = O.S;
        (f !== null && f(i, c), Es(t, l, c));
      } catch (r) {
        Kc(t, l, r);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (O.T = n));
      }
    } else
      try {
        ((n = a(u, e)), Es(t, l, n));
      } catch (r) {
        Kc(t, l, r);
      }
  }
  function Es(t, l, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            Ts(t, l, e);
          },
          function (e) {
            return Kc(t, l, e);
          },
        )
      : Ts(t, l, a);
  }
  function Ts(t, l, a) {
    ((l.status = "fulfilled"),
      (l.value = a),
      Ad(l),
      (t.state = a),
      (l = t.pending),
      l !== null &&
        ((a = l.next),
        a === l ? (t.pending = null) : ((a = a.next), (l.next = a), Td(t, a))));
  }
  function Kc(t, l, a) {
    var e = t.pending;
    if (((t.pending = null), e !== null)) {
      e = e.next;
      do ((l.status = "rejected"), (l.reason = a), Ad(l), (l = l.next));
      while (l !== e);
    }
    t.action = null;
  }
  function Ad(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Md(t, l) {
    return l;
  }
  function As(t, l) {
    if (q) {
      var a = K.formState;
      if (a !== null) {
        t: {
          var e = D;
          if (q) {
            if (F) {
              l: {
                for (var u = F, n = $t; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (((u = Pt(u.nextSibling)), u === null)) {
                    u = null;
                    break l;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((F = Pt(u.nextSibling)), (e = u.data === "F!"));
                break t;
              }
            }
            ea(e);
          }
          e = !1;
        }
        e && (l = a[0]);
      }
    }
    return (
      (a = Et()),
      (a.memoizedState = a.baseState = l),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Md,
        lastRenderedState: l,
      }),
      (a.queue = e),
      (a = Vd.bind(null, D, e)),
      (e.dispatch = a),
      (e = Lc(!1)),
      (n = wf.bind(null, D, !1, e.queue)),
      (e = Et()),
      (u = { state: l, dispatch: null, action: t, pending: null }),
      (e.queue = u),
      (a = _v.bind(null, D, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = t),
      [l, a, !1]
    );
  }
  function Ms(t) {
    var l = ut();
    return Od(l, L, t);
  }
  function Od(t, l, a) {
    if (
      ((l = Vf(t, l, Md)[0]),
      (t = yn(_l)[0]),
      typeof l == "object" && l !== null && typeof l.then == "function")
    )
      try {
        var e = Nu(l);
      } catch (i) {
        throw i === Se ? ni : i;
      }
    else e = l;
    l = ut();
    var u = l.queue,
      n = u.dispatch;
    return (
      a !== l.memoizedState &&
        ((D.flags |= 2048),
        de(9, { destroy: void 0 }, Dv.bind(null, u, a), null)),
      [e, n, t]
    );
  }
  function Dv(t, l) {
    t.action = l;
  }
  function Os(t) {
    var l = ut(),
      a = L;
    if (a !== null) return Od(l, a, t);
    (ut(), (l = l.memoizedState), (a = ut()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = t), [l, e, !1]);
  }
  function de(t, l, a, e) {
    return (
      (t = { tag: t, create: a, deps: e, inst: l, next: null }),
      (l = D.updateQueue),
      l === null && ((l = ii()), (D.updateQueue = l)),
      (a = l.lastEffect),
      a === null
        ? (l.lastEffect = t.next = t)
        : ((e = a.next), (a.next = t), (t.next = e), (l.lastEffect = t)),
      t
    );
  }
  function Nd() {
    return ut().memoizedState;
  }
  function pn(t, l, a, e) {
    var u = Et();
    ((D.flags |= t),
      (u.memoizedState = de(
        1 | l,
        { destroy: void 0 },
        a,
        e === void 0 ? null : e,
      )));
  }
  function fi(t, l, a, e) {
    var u = ut();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    L !== null && e !== null && qf(e, L.memoizedState.deps)
      ? (u.memoizedState = de(l, n, a, e))
      : ((D.flags |= t), (u.memoizedState = de(1 | l, n, a, e)));
  }
  function Ns(t, l) {
    pn(8390656, 8, t, l);
  }
  function Zf(t, l) {
    fi(2048, 8, t, l);
  }
  function Uv(t) {
    D.flags |= 4;
    var l = D.updateQueue;
    if (l === null) ((l = ii()), (D.updateQueue = l), (l.events = [t]));
    else {
      var a = l.events;
      a === null ? (l.events = [t]) : a.push(t);
    }
  }
  function _d(t) {
    var l = ut().memoizedState;
    return (
      Uv({ ref: l, nextImpl: t }),
      function () {
        if ((j & 2) !== 0) throw Error(S(440));
        return l.impl.apply(void 0, arguments);
      }
    );
  }
  function Dd(t, l) {
    return fi(4, 2, t, l);
  }
  function Ud(t, l) {
    return fi(4, 4, t, l);
  }
  function Cd(t, l) {
    if (typeof l == "function") {
      t = t();
      var a = l(t);
      return function () {
        typeof a == "function" ? a() : l(null);
      };
    }
    if (l != null)
      return (
        (t = t()),
        (l.current = t),
        function () {
          l.current = null;
        }
      );
  }
  function Bd(t, l, a) {
    ((a = a != null ? a.concat([t]) : null), fi(4, 4, Cd.bind(null, l, t), a));
  }
  function Lf() {}
  function Rd(t, l) {
    var a = ut();
    l = l === void 0 ? null : l;
    var e = a.memoizedState;
    return l !== null && qf(l, e[1]) ? e[0] : ((a.memoizedState = [t, l]), t);
  }
  function Hd(t, l) {
    var a = ut();
    l = l === void 0 ? null : l;
    var e = a.memoizedState;
    if (l !== null && qf(l, e[1])) return e[0];
    if (((e = t()), za)) {
      Vl(!0);
      try {
        t();
      } finally {
        Vl(!1);
      }
    }
    return ((a.memoizedState = [e, l]), e);
  }
  function Kf(t, l, a) {
    return a === void 0 || ((Nl & 1073741824) !== 0 && (H & 261930) === 0)
      ? (t.memoizedState = l)
      : ((t.memoizedState = a), (t = Er()), (D.lanes |= t), (na |= t), a);
  }
  function qd(t, l, a, e) {
    return Vt(a, l)
      ? a
      : se.current !== null
        ? ((t = Kf(t, a, e)), Vt(t, l) || (ot = !0), t)
        : (Nl & 42) === 0 || ((Nl & 1073741824) !== 0 && (H & 261930) === 0)
          ? ((ot = !0), (t.memoizedState = a))
          : ((t = Er()), (D.lanes |= t), (na |= t), l);
  }
  function Yd(t, l, a, e, u) {
    var n = G.p;
    G.p = n !== 0 && 8 > n ? n : 8;
    var i = O.T,
      c = {};
    ((O.T = c), wf(t, !1, l, a));
    try {
      var f = u(),
        r = O.S;
      if (
        (r !== null && r(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var p = Mv(f, e);
        lu(t, l, p, Qt(t));
      } else lu(t, l, e, Qt(t));
    } catch (h) {
      lu(t, l, { then: function () {}, status: "rejected", reason: h }, Qt());
    } finally {
      ((G.p = n),
        i !== null && c.types !== null && (i.types = c.types),
        (O.T = i));
    }
  }
  function Cv() {}
  function Jc(t, l, a, e) {
    if (t.tag !== 5) throw Error(S(476));
    var u = jd(t).queue;
    Yd(
      t,
      u,
      l,
      ma,
      a === null
        ? Cv
        : function () {
            return (Gd(t), a(e));
          },
    );
  }
  function jd(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: ma,
      baseState: ma,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _l,
        lastRenderedState: ma,
      },
      next: null,
    };
    var a = {};
    return (
      (l.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _l,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = l),
      (t = t.alternate),
      t !== null && (t.memoizedState = l),
      l
    );
  }
  function Gd(t) {
    var l = jd(t);
    (l.next === null && (l = t.alternate.memoizedState),
      lu(t, l.next.queue, {}, Qt()));
  }
  function Jf() {
    return gt(gu);
  }
  function Xd() {
    return ut().memoizedState;
  }
  function Qd() {
    return ut().memoizedState;
  }
  function Bv(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var a = Qt();
          t = Fl(a);
          var e = Wl(l, t, a);
          (e !== null && (Dt(e, l, a), Ie(e, l, a)),
            (l = { cache: Uf() }),
            (t.payload = l));
          return;
      }
      l = l.return;
    }
  }
  function Rv(t, l, a) {
    var e = Qt();
    ((a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      oi(t)
        ? Zd(l, a)
        : ((a = Of(t, l, a, e)), a !== null && (Dt(a, t, e), Ld(a, l, e))));
  }
  function Vd(t, l, a) {
    var e = Qt();
    lu(t, l, a, e);
  }
  function lu(t, l, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (oi(t)) Zd(l, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var i = l.lastRenderedState,
            c = n(i, a);
          if (((u.hasEagerState = !0), (u.eagerState = c), Vt(c, i)))
            return (ui(t, l, u, 0), K === null && ei(), !1);
        } catch {
        } finally {
        }
      if (((a = Of(t, l, u, e)), a !== null))
        return (Dt(a, t, e), Ld(a, l, e), !0);
    }
    return !1;
  }
  function wf(t, l, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: ao(),
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      oi(t))
    ) {
      if (l) throw Error(S(479));
    } else ((l = Of(t, a, e, 2)), l !== null && Dt(l, t, 2));
  }
  function oi(t) {
    var l = t.alternate;
    return t === D || (l !== null && l === D);
  }
  function Zd(t, l) {
    ue = qn = !0;
    var a = t.pending;
    (a === null ? (l.next = l) : ((l.next = a.next), (a.next = l)),
      (t.pending = l));
  }
  function Ld(t, l, a) {
    if ((a & 4194048) !== 0) {
      var e = l.lanes;
      ((e &= t.pendingLanes), (a |= e), (l.lanes = a), _0(t, a));
    }
  }
  var yu = {
    readContext: gt,
    use: ci,
    useCallback: P,
    useContext: P,
    useEffect: P,
    useImperativeHandle: P,
    useLayoutEffect: P,
    useInsertionEffect: P,
    useMemo: P,
    useReducer: P,
    useRef: P,
    useState: P,
    useDebugValue: P,
    useDeferredValue: P,
    useTransition: P,
    useSyncExternalStore: P,
    useId: P,
    useHostTransitionStatus: P,
    useFormState: P,
    useActionState: P,
    useOptimistic: P,
    useMemoCache: P,
    useCacheRefresh: P,
  };
  yu.useEffectEvent = P;
  var Kd = {
      readContext: gt,
      use: ci,
      useCallback: function (t, l) {
        return ((Et().memoizedState = [t, l === void 0 ? null : l]), t);
      },
      useContext: gt,
      useEffect: Ns,
      useImperativeHandle: function (t, l, a) {
        ((a = a != null ? a.concat([t]) : null),
          pn(4194308, 4, Cd.bind(null, l, t), a));
      },
      useLayoutEffect: function (t, l) {
        return pn(4194308, 4, t, l);
      },
      useInsertionEffect: function (t, l) {
        pn(4, 2, t, l);
      },
      useMemo: function (t, l) {
        var a = Et();
        l = l === void 0 ? null : l;
        var e = t();
        if (za) {
          Vl(!0);
          try {
            t();
          } finally {
            Vl(!1);
          }
        }
        return ((a.memoizedState = [e, l]), e);
      },
      useReducer: function (t, l, a) {
        var e = Et();
        if (a !== void 0) {
          var u = a(l);
          if (za) {
            Vl(!0);
            try {
              a(l);
            } finally {
              Vl(!1);
            }
          }
        } else u = l;
        return (
          (e.memoizedState = e.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (e.queue = t),
          (t = t.dispatch = Rv.bind(null, D, t)),
          [e.memoizedState, t]
        );
      },
      useRef: function (t) {
        var l = Et();
        return ((t = { current: t }), (l.memoizedState = t));
      },
      useState: function (t) {
        t = Lc(t);
        var l = t.queue,
          a = Vd.bind(null, D, l);
        return ((l.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: Lf,
      useDeferredValue: function (t, l) {
        var a = Et();
        return Kf(a, t, l);
      },
      useTransition: function () {
        var t = Lc(!1);
        return (
          (t = Yd.bind(null, D, t.queue, !0, !1)),
          (Et().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, l, a) {
        var e = D,
          u = Et();
        if (q) {
          if (a === void 0) throw Error(S(407));
          a = a();
        } else {
          if (((a = l()), K === null)) throw Error(S(349));
          (H & 127) !== 0 || gd(e, l, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: l };
        return (
          (u.queue = n),
          Ns(Sd.bind(null, e, n, t), [t]),
          (e.flags |= 2048),
          de(9, { destroy: void 0 }, bd.bind(null, e, n, a, l), null),
          a
        );
      },
      useId: function () {
        var t = Et(),
          l = K.identifierPrefix;
        if (q) {
          var a = cl,
            e = il;
          ((a = (e & ~(1 << (32 - Xt(e) - 1))).toString(32) + a),
            (l = "_" + l + "R_" + a),
            (a = Yn++),
            0 < a && (l += "H" + a.toString(32)),
            (l += "_"));
        } else ((a = Ov++), (l = "_" + l + "r_" + a.toString(32) + "_"));
        return (t.memoizedState = l);
      },
      useHostTransitionStatus: Jf,
      useFormState: As,
      useActionState: As,
      useOptimistic: function (t) {
        var l = Et();
        l.memoizedState = l.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (l.queue = a),
          (l = wf.bind(null, D, !0, a)),
          (a.dispatch = l),
          [t, l]
        );
      },
      useMemoCache: Qf,
      useCacheRefresh: function () {
        return (Et().memoizedState = Bv.bind(null, D));
      },
      useEffectEvent: function (t) {
        var l = Et(),
          a = { impl: t };
        return (
          (l.memoizedState = a),
          function () {
            if ((j & 2) !== 0) throw Error(S(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    kf = {
      readContext: gt,
      use: ci,
      useCallback: Rd,
      useContext: gt,
      useEffect: Zf,
      useImperativeHandle: Bd,
      useInsertionEffect: Dd,
      useLayoutEffect: Ud,
      useMemo: Hd,
      useReducer: yn,
      useRef: Nd,
      useState: function () {
        return yn(_l);
      },
      useDebugValue: Lf,
      useDeferredValue: function (t, l) {
        var a = ut();
        return qd(a, L.memoizedState, t, l);
      },
      useTransition: function () {
        var t = yn(_l)[0],
          l = ut().memoizedState;
        return [typeof t == "boolean" ? t : Nu(t), l];
      },
      useSyncExternalStore: hd,
      useId: Xd,
      useHostTransitionStatus: Jf,
      useFormState: Ms,
      useActionState: Ms,
      useOptimistic: function (t, l) {
        var a = ut();
        return Ed(a, L, t, l);
      },
      useMemoCache: Qf,
      useCacheRefresh: Qd,
    };
  kf.useEffectEvent = _d;
  var Jd = {
    readContext: gt,
    use: ci,
    useCallback: Rd,
    useContext: gt,
    useEffect: Zf,
    useImperativeHandle: Bd,
    useInsertionEffect: Dd,
    useLayoutEffect: Ud,
    useMemo: Hd,
    useReducer: tc,
    useRef: Nd,
    useState: function () {
      return tc(_l);
    },
    useDebugValue: Lf,
    useDeferredValue: function (t, l) {
      var a = ut();
      return L === null ? Kf(a, t, l) : qd(a, L.memoizedState, t, l);
    },
    useTransition: function () {
      var t = tc(_l)[0],
        l = ut().memoizedState;
      return [typeof t == "boolean" ? t : Nu(t), l];
    },
    useSyncExternalStore: hd,
    useId: Xd,
    useHostTransitionStatus: Jf,
    useFormState: Os,
    useActionState: Os,
    useOptimistic: function (t, l) {
      var a = ut();
      return L !== null
        ? Ed(a, L, t, l)
        : ((a.baseState = t), [t, a.queue.dispatch]);
    },
    useMemoCache: Qf,
    useCacheRefresh: Qd,
  };
  Jd.useEffectEvent = _d;
  function lc(t, l, a, e) {
    ((l = t.memoizedState),
      (a = a(e, l)),
      (a = a == null ? l : W({}, l, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var wc = {
    enqueueSetState: function (t, l, a) {
      t = t._reactInternals;
      var e = Qt(),
        u = Fl(e);
      ((u.payload = l),
        a != null && (u.callback = a),
        (l = Wl(t, u, e)),
        l !== null && (Dt(l, t, e), Ie(l, t, e)));
    },
    enqueueReplaceState: function (t, l, a) {
      t = t._reactInternals;
      var e = Qt(),
        u = Fl(e);
      ((u.tag = 1),
        (u.payload = l),
        a != null && (u.callback = a),
        (l = Wl(t, u, e)),
        l !== null && (Dt(l, t, e), Ie(l, t, e)));
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals;
      var a = Qt(),
        e = Fl(a);
      ((e.tag = 2),
        l != null && (e.callback = l),
        (l = Wl(t, e, a)),
        l !== null && (Dt(l, t, a), Ie(l, t, a)));
    },
  };
  function _s(t, l, a, e, u, n, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(e, n, i)
        : l.prototype && l.prototype.isPureReactComponent
          ? !su(a, e) || !su(u, n)
          : !0
    );
  }
  function Ds(t, l, a, e) {
    ((t = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(a, e),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(a, e),
      l.state !== t && wc.enqueueReplaceState(l, l.state, null));
  }
  function xa(t, l) {
    var a = l;
    if ("ref" in l) {
      a = {};
      for (var e in l) e !== "ref" && (a[e] = l[e]);
    }
    if ((t = t.defaultProps)) {
      a === l && (a = W({}, a));
      for (var u in t) a[u] === void 0 && (a[u] = t[u]);
    }
    return a;
  }
  function wd(t) {
    _n(t);
  }
  function kd(t) {
    console.error(t);
  }
  function Fd(t) {
    _n(t);
  }
  function jn(t, l) {
    try {
      var a = t.onUncaughtError;
      a(l.value, { componentStack: l.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Us(t, l, a) {
    try {
      var e = t.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function kc(t, l, a) {
    return (
      (a = Fl(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        jn(t, l);
      }),
      a
    );
  }
  function Wd(t) {
    return ((t = Fl(t)), (t.tag = 3), t);
  }
  function $d(t, l, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      ((t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          Us(l, a, e);
        }));
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        (Us(l, a, e),
          typeof u != "function" &&
            ($l === null ? ($l = new Set([this])) : $l.add(this)));
        var c = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Hv(t, l, a, e, u) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((l = a.alternate),
        l !== null && be(l, a, u, !0),
        (a = Zt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              It === null ? Zn() : a.alternate === null && tt === 0 && (tt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === Bn
                ? (a.flags |= 16384)
                : ((l = a.updateQueue),
                  l === null ? (a.updateQueue = new Set([e])) : l.add(e),
                  rc(t, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === Bn
                ? (a.flags |= 16384)
                : ((l = a.updateQueue),
                  l === null
                    ? ((l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = l))
                    : ((a = l.retryQueue),
                      a === null ? (l.retryQueue = new Set([e])) : a.add(e)),
                  rc(t, e, u)),
              !1
            );
        }
        throw Error(S(435, a.tag));
      }
      return (rc(t, e, u), Zn(), !1);
    }
    if (q)
      return (
        (l = Zt.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = u),
            e !== Hc && ((t = Error(S(422), { cause: e })), ru(Wt(t, a))))
          : (e !== Hc && ((l = Error(S(423), { cause: e })), ru(Wt(l, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (e = Wt(e, a)),
            (u = kc(t.stateNode, e, u)),
            Pi(t, u),
            tt !== 4 && (tt = 2)),
        !1
      );
    var n = Error(S(520), { cause: e });
    if (
      ((n = Wt(n, a)),
      uu === null ? (uu = [n]) : uu.push(n),
      tt !== 4 && (tt = 2),
      l === null)
    )
      return !0;
    ((e = Wt(e, a)), (a = l));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = u & -u),
            (a.lanes |= t),
            (t = kc(a.stateNode, e, t)),
            Pi(a, t),
            !1
          );
        case 1:
          if (
            ((l = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof l.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  ($l === null || !$l.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = Wd(u)),
              $d(u, t, a, e),
              Pi(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ff = Error(S(461)),
    ot = !1;
  function yt(t, l, a, e) {
    l.child = t === null ? dd(l, null, a, e) : Sa(l, t.child, a, e);
  }
  function Cs(t, l, a, e, u) {
    a = a.render;
    var n = l.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return (
      ba(l),
      (e = Yf(t, l, a, i, n, u)),
      (c = jf()),
      t !== null && !ot
        ? (Gf(t, l, u), Dl(t, l, u))
        : (q && c && _f(l), (l.flags |= 1), yt(t, l, e, u), l.child)
    );
  }
  function Bs(t, l, a, e, u) {
    if (t === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Nf(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((l.tag = 15), (l.type = n), Id(t, l, n, e, u))
        : ((t = mn(a.type, null, e, l, l.mode, u)),
          (t.ref = l.ref),
          (t.return = l),
          (l.child = t));
    }
    if (((n = t.child), !Wf(t, u))) {
      var i = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : su), a(i, e) && t.ref === l.ref)
      )
        return Dl(t, l, u);
    }
    return (
      (l.flags |= 1),
      (t = Tl(n, e)),
      (t.ref = l.ref),
      (t.return = l),
      (l.child = t)
    );
  }
  function Id(t, l, a, e, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (su(n, e) && t.ref === l.ref)
        if (((ot = !1), (l.pendingProps = e = n), Wf(t, u)))
          (t.flags & 131072) !== 0 && (ot = !0);
        else return ((l.lanes = t.lanes), Dl(t, l, u));
    }
    return Fc(t, l, a, e, u);
  }
  function Pd(t, l, a, e) {
    var u = e.children,
      n = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        l.stateNode === null &&
        (l.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.mode === "hidden")
    ) {
      if ((l.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), t !== null)) {
          for (e = l.child = t.child, u = 0; e !== null; )
            ((u = u | e.lanes | e.childLanes), (e = e.sibling));
          e = u & ~n;
        } else ((e = 0), (l.child = null));
        return Rs(t, l, n, a, e);
      }
      if ((a & 536870912) !== 0)
        ((l.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && vn(l, n !== null ? n.cachePool : null),
          n !== null ? xs(l, n) : Vc(),
          vd(l));
      else
        return (
          (e = l.lanes = 536870912),
          Rs(t, l, n !== null ? n.baseLanes | a : a, a, e)
        );
    } else
      n !== null
        ? (vn(l, n.cachePool), xs(l, n), Xl(l), (l.memoizedState = null))
        : (t !== null && vn(l, null), Vc(), Xl(l));
    return (yt(t, l, u, a), l.child);
  }
  function Je(t, l) {
    return (
      (t !== null && t.tag === 22) ||
        l.stateNode !== null ||
        (l.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.sibling
    );
  }
  function Rs(t, l, a, e, u) {
    var n = Cf();
    return (
      (n = n === null ? null : { parent: ft._currentValue, pool: n }),
      (l.memoizedState = { baseLanes: a, cachePool: n }),
      t !== null && vn(l, null),
      Vc(),
      vd(l),
      t !== null && be(t, l, e, !0),
      (l.childLanes = u),
      null
    );
  }
  function hn(t, l) {
    return (
      (l = Gn({ mode: l.mode, children: l.children }, t.mode)),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function Hs(t, l, a) {
    return (
      Sa(l, t.child, null, a),
      (t = hn(l, l.pendingProps)),
      (t.flags |= 2),
      Ht(l),
      (l.memoizedState = null),
      t
    );
  }
  function qv(t, l, a) {
    var e = l.pendingProps,
      u = (l.flags & 128) !== 0;
    if (((l.flags &= -129), t === null)) {
      if (q) {
        if (e.mode === "hidden")
          return ((t = hn(l, e)), (l.lanes = 536870912), Je(null, t));
        if (
          (Zc(l),
          (t = F)
            ? ((t = Kr(t, $t)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((l.memoizedState = {
                  dehydrated: t,
                  treeContext: aa !== null ? { id: il, overflow: cl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = ud(t)),
                (a.return = l),
                (l.child = a),
                (ht = l),
                (F = null)))
            : (t = null),
          t === null)
        )
          throw ea(l);
        return ((l.lanes = 536870912), null);
      }
      return hn(l, e);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Zc(l), u))
        if (l.flags & 256) ((l.flags &= -257), (l = Hs(t, l, a)));
        else if (l.memoizedState !== null)
          ((l.child = t.child), (l.flags |= 128), (l = null));
        else throw Error(S(558));
      else if (
        (ot || be(t, l, a, !1), (u = (a & t.childLanes) !== 0), ot || u)
      ) {
        if (
          ((e = K),
          e !== null && ((i = D0(e, a)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), Ma(t, i), Dt(e, t, i), Ff);
        (Zn(), (l = Hs(t, l, a)));
      } else
        ((t = n.treeContext),
          (F = Pt(i.nextSibling)),
          (ht = l),
          (q = !0),
          (kl = null),
          ($t = !1),
          t !== null && id(l, t),
          (l = hn(l, e)),
          (l.flags |= 4096));
      return l;
    }
    return (
      (t = Tl(t.child, { mode: e.mode, children: e.children })),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function gn(t, l) {
    var a = l.ref;
    if (a === null) t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(S(284));
      (t === null || t.ref !== a) && (l.flags |= 4194816);
    }
  }
  function Fc(t, l, a, e, u) {
    return (
      ba(l),
      (a = Yf(t, l, a, e, void 0, u)),
      (e = jf()),
      t !== null && !ot
        ? (Gf(t, l, u), Dl(t, l, u))
        : (q && e && _f(l), (l.flags |= 1), yt(t, l, a, u), l.child)
    );
  }
  function qs(t, l, a, e, u, n) {
    return (
      ba(l),
      (l.updateQueue = null),
      (a = pd(l, e, a, u)),
      yd(t),
      (e = jf()),
      t !== null && !ot
        ? (Gf(t, l, n), Dl(t, l, n))
        : (q && e && _f(l), (l.flags |= 1), yt(t, l, a, n), l.child)
    );
  }
  function Ys(t, l, a, e, u) {
    if ((ba(l), l.stateNode === null)) {
      var n = Fa,
        i = a.contextType;
      (typeof i == "object" && i !== null && (n = gt(i)),
        (n = new a(e, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = wc),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = e),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Rf(l),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? gt(i) : Fa),
        (n.state = l.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && (lc(l, a, i, e), (n.state = l.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && wc.enqueueReplaceState(n, n.state, null),
          tu(l, e, n, u),
          Pe(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (e = !0));
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps,
        f = xa(a, c);
      n.props = f;
      var r = n.context,
        p = a.contextType;
      ((i = Fa), typeof p == "object" && p !== null && (i = gt(p)));
      var h = a.getDerivedStateFromProps;
      ((p =
        typeof h == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = l.pendingProps !== c),
        p ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || r !== i) && Ds(l, n, e, i)),
        (Yl = !1));
      var v = l.memoizedState;
      ((n.state = v),
        tu(l, e, n, u),
        Pe(),
        (r = l.memoizedState),
        c || v !== r || Yl
          ? (typeof h == "function" && (lc(l, a, h, e), (r = l.memoizedState)),
            (f = Yl || _s(l, a, f, e, v, r, i))
              ? (p ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308),
                (l.memoizedProps = e),
                (l.memoizedState = r)),
            (n.props = e),
            (n.state = r),
            (n.context = i),
            (e = f))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (e = !1)));
    } else {
      ((n = l.stateNode),
        Xc(t, l),
        (i = l.memoizedProps),
        (p = xa(a, i)),
        (n.props = p),
        (h = l.pendingProps),
        (v = n.context),
        (r = a.contextType),
        (f = Fa),
        typeof r == "object" && r !== null && (f = gt(r)),
        (c = a.getDerivedStateFromProps),
        (r =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== h || v !== f) && Ds(l, n, e, f)),
        (Yl = !1),
        (v = l.memoizedState),
        (n.state = v),
        tu(l, e, n, u),
        Pe());
      var y = l.memoizedState;
      i !== h ||
      v !== y ||
      Yl ||
      (t !== null && t.dependencies !== null && Cn(t.dependencies))
        ? (typeof c == "function" && (lc(l, a, c, e), (y = l.memoizedState)),
          (p =
            Yl ||
            _s(l, a, p, e, v, y, f) ||
            (t !== null && t.dependencies !== null && Cn(t.dependencies)))
            ? (r ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, y, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, y, f)),
              typeof n.componentDidUpdate == "function" && (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (l.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === t.memoizedProps && v === t.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && v === t.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = e),
              (l.memoizedState = y)),
          (n.props = e),
          (n.state = y),
          (n.context = f),
          (e = p))
        : (typeof n.componentDidUpdate != "function" ||
            (i === t.memoizedProps && v === t.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && v === t.memoizedState) ||
            (l.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      gn(t, l),
      (e = (l.flags & 128) !== 0),
      n || e
        ? ((n = l.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (l.flags |= 1),
          t !== null && e
            ? ((l.child = Sa(l, t.child, null, u)),
              (l.child = Sa(l, null, a, u)))
            : yt(t, l, a, u),
          (l.memoizedState = n.state),
          (t = l.child))
        : (t = Dl(t, l, u)),
      t
    );
  }
  function js(t, l, a, e) {
    return (ga(), (l.flags |= 256), yt(t, l, a, e), l.child);
  }
  var ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ec(t) {
    return { baseLanes: t, cachePool: fd() };
  }
  function uc(t, l, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), l && (t |= Yt), t);
  }
  function tr(t, l, a) {
    var e = l.pendingProps,
      u = !1,
      n = (l.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (et.current & 2) !== 0),
      i && ((u = !0), (l.flags &= -129)),
      (i = (l.flags & 32) !== 0),
      (l.flags &= -33),
      t === null)
    ) {
      if (q) {
        if (
          (u ? Gl(l) : Xl(l),
          (t = F)
            ? ((t = Kr(t, $t)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((l.memoizedState = {
                  dehydrated: t,
                  treeContext: aa !== null ? { id: il, overflow: cl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = ud(t)),
                (a.return = l),
                (l.child = a),
                (ht = l),
                (F = null)))
            : (t = null),
          t === null)
        )
          throw ea(l);
        return (sf(t) ? (l.lanes = 32) : (l.lanes = 536870912), null);
      }
      var c = e.children;
      return (
        (e = e.fallback),
        u
          ? (Xl(l),
            (u = l.mode),
            (c = Gn({ mode: "hidden", children: c }, u)),
            (e = va(e, u, a, null)),
            (c.return = l),
            (e.return = l),
            (c.sibling = e),
            (l.child = c),
            (e = l.child),
            (e.memoizedState = ec(a)),
            (e.childLanes = uc(t, i, a)),
            (l.memoizedState = ac),
            Je(null, e))
          : (Gl(l), Wc(l, c))
      );
    }
    var f = t.memoizedState;
    if (f !== null && ((c = f.dehydrated), c !== null)) {
      if (n)
        l.flags & 256
          ? (Gl(l), (l.flags &= -257), (l = nc(t, l, a)))
          : l.memoizedState !== null
            ? (Xl(l), (l.child = t.child), (l.flags |= 128), (l = null))
            : (Xl(l),
              (c = e.fallback),
              (u = l.mode),
              (e = Gn({ mode: "visible", children: e.children }, u)),
              (c = va(c, u, a, null)),
              (c.flags |= 2),
              (e.return = l),
              (c.return = l),
              (e.sibling = c),
              (l.child = e),
              Sa(l, t.child, null, a),
              (e = l.child),
              (e.memoizedState = ec(a)),
              (e.childLanes = uc(t, i, a)),
              (l.memoizedState = ac),
              (l = Je(null, e)));
      else if ((Gl(l), sf(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var r = i.dgst;
        ((i = r),
          (e = Error(S(419))),
          (e.stack = ""),
          (e.digest = i),
          ru({ value: e, source: null, stack: null }),
          (l = nc(t, l, a)));
      } else if (
        (ot || be(t, l, a, !1), (i = (a & t.childLanes) !== 0), ot || i)
      ) {
        if (
          ((i = K),
          i !== null && ((e = D0(i, a)), e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), Ma(t, e), Dt(i, t, e), Ff);
        (of(c) || Zn(), (l = nc(t, l, a)));
      } else
        of(c)
          ? ((l.flags |= 192), (l.child = t.child), (l = null))
          : ((t = f.treeContext),
            (F = Pt(c.nextSibling)),
            (ht = l),
            (q = !0),
            (kl = null),
            ($t = !1),
            t !== null && id(l, t),
            (l = Wc(l, e.children)),
            (l.flags |= 4096));
      return l;
    }
    return u
      ? (Xl(l),
        (c = e.fallback),
        (u = l.mode),
        (f = t.child),
        (r = f.sibling),
        (e = Tl(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        r !== null ? (c = Tl(r, c)) : ((c = va(c, u, a, null)), (c.flags |= 2)),
        (c.return = l),
        (e.return = l),
        (e.sibling = c),
        (l.child = e),
        Je(null, e),
        (e = l.child),
        (c = t.child.memoizedState),
        c === null
          ? (c = ec(a))
          : ((u = c.cachePool),
            u !== null
              ? ((f = ft._currentValue),
                (u = u.parent !== f ? { parent: f, pool: f } : u))
              : (u = fd()),
            (c = { baseLanes: c.baseLanes | a, cachePool: u })),
        (e.memoizedState = c),
        (e.childLanes = uc(t, i, a)),
        (l.memoizedState = ac),
        Je(t.child, e))
      : (Gl(l),
        (a = t.child),
        (t = a.sibling),
        (a = Tl(a, { mode: "visible", children: e.children })),
        (a.return = l),
        (a.sibling = null),
        t !== null &&
          ((i = l.deletions),
          i === null ? ((l.deletions = [t]), (l.flags |= 16)) : i.push(t)),
        (l.child = a),
        (l.memoizedState = null),
        a);
  }
  function Wc(t, l) {
    return (
      (l = Gn({ mode: "visible", children: l }, t.mode)),
      (l.return = t),
      (t.child = l)
    );
  }
  function Gn(t, l) {
    return ((t = qt(22, t, null, l)), (t.lanes = 0), t);
  }
  function nc(t, l, a) {
    return (
      Sa(l, t.child, null, a),
      (t = Wc(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    );
  }
  function Gs(t, l, a) {
    t.lanes |= l;
    var e = t.alternate;
    (e !== null && (e.lanes |= l), Yc(t.return, l, a));
  }
  function ic(t, l, a, e, u, n) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = l),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = e),
        (i.tail = a),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function lr(t, l, a) {
    var e = l.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    e = e.children;
    var i = et.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (l.flags |= 128)) : (i &= 1),
      J(et, i),
      yt(t, l, e, a),
      (e = q ? du : 0),
      !c && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Gs(t, a, l);
        else if (t.tag === 19) Gs(t, a, l);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = l.child, u = null; a !== null; )
          ((t = a.alternate),
            t !== null && Hn(t) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = l.child), (l.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          ic(l, !1, u, a, n, e));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = l.child, l.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Hn(t) === null)) {
            l.child = u;
            break;
          }
          ((t = u.sibling), (u.sibling = a), (a = u), (u = t));
        }
        ic(l, !0, a, null, n, e);
        break;
      case "together":
        ic(l, !1, null, null, void 0, e);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Dl(t, l, a) {
    if (
      (t !== null && (l.dependencies = t.dependencies),
      (na |= l.lanes),
      (a & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((be(t, l, a, !1), (a & l.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && l.child !== t.child) throw Error(S(153));
    if (l.child !== null) {
      for (
        t = l.child, a = Tl(t, t.pendingProps), l.child = a, a.return = l;
        t.sibling !== null;

      )
        ((t = t.sibling),
          (a = a.sibling = Tl(t, t.pendingProps)),
          (a.return = l));
      a.sibling = null;
    }
    return l.child;
  }
  function Wf(t, l) {
    return (t.lanes & l) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Cn(t)));
  }
  function Yv(t, l, a) {
    switch (l.tag) {
      case 3:
        (An(l, l.stateNode.containerInfo),
          jl(l, ft, t.memoizedState.cache),
          ga());
        break;
      case 27:
      case 5:
        Tc(l);
        break;
      case 4:
        An(l, l.stateNode.containerInfo);
        break;
      case 10:
        jl(l, l.type, l.memoizedProps.value);
        break;
      case 31:
        if (l.memoizedState !== null) return ((l.flags |= 128), Zc(l), null);
        break;
      case 13:
        var e = l.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (Gl(l), (l.flags |= 128), null)
            : (a & l.child.childLanes) !== 0
              ? tr(t, l, a)
              : (Gl(l), (t = Dl(t, l, a)), t !== null ? t.sibling : null);
        Gl(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((e = (a & l.childLanes) !== 0),
          e || (be(t, l, a, !1), (e = (a & l.childLanes) !== 0)),
          u)
        ) {
          if (e) return lr(t, l, a);
          l.flags |= 128;
        }
        if (
          ((u = l.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          J(et, et.current),
          e)
        )
          break;
        return null;
      case 22:
        return ((l.lanes = 0), Pd(t, l, a, l.pendingProps));
      case 24:
        jl(l, ft, t.memoizedState.cache);
    }
    return Dl(t, l, a);
  }
  function ar(t, l, a) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) ot = !0;
      else {
        if (!Wf(t, a) && (l.flags & 128) === 0) return ((ot = !1), Yv(t, l, a));
        ot = (t.flags & 131072) !== 0;
      }
    else ((ot = !1), q && (l.flags & 1048576) !== 0 && nd(l, du, l.index));
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          var e = l.pendingProps;
          if (((t = da(l.elementType)), (l.type = t), typeof t == "function"))
            Nf(t)
              ? ((e = xa(t, e)), (l.tag = 1), (l = Ys(null, l, t, e, a)))
              : ((l.tag = 0), (l = Fc(null, l, t, e, a)));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === vf) {
                ((l.tag = 11), (l = Cs(null, l, t, e, a)));
                break t;
              } else if (u === yf) {
                ((l.tag = 14), (l = Bs(null, l, t, e, a)));
                break t;
              }
            }
            throw ((l = xc(t) || t), Error(S(306, l, "")));
          }
        }
        return l;
      case 0:
        return Fc(t, l, l.type, l.pendingProps, a);
      case 1:
        return ((e = l.type), (u = xa(e, l.pendingProps)), Ys(t, l, e, u, a));
      case 3:
        t: {
          if ((An(l, l.stateNode.containerInfo), t === null))
            throw Error(S(387));
          e = l.pendingProps;
          var n = l.memoizedState;
          ((u = n.element), Xc(t, l), tu(l, e, null, a));
          var i = l.memoizedState;
          if (
            ((e = i.cache),
            jl(l, ft, e),
            e !== n.cache && jc(l, [ft], a, !0),
            Pe(),
            (e = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: i.cache }),
              (l.updateQueue.baseState = n),
              (l.memoizedState = n),
              l.flags & 256)
            ) {
              l = js(t, l, e, a);
              break t;
            } else if (e !== u) {
              ((u = Wt(Error(S(424)), l)), ru(u), (l = js(t, l, e, a)));
              break t;
            } else {
              switch (((t = l.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                F = Pt(t.firstChild),
                  ht = l,
                  q = !0,
                  kl = null,
                  $t = !0,
                  a = dd(l, null, e, a),
                  l.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((ga(), e === u)) {
              l = Dl(t, l, a);
              break t;
            }
            yt(t, l, e, a);
          }
          l = l.child;
        }
        return l;
      case 26:
        return (
          gn(t, l),
          t === null
            ? (a = c0(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = a)
              : q ||
                ((a = l.type),
                (t = l.pendingProps),
                (e = wn(wl.current).createElement(a)),
                (e[pt] = l),
                (e[Ut] = t),
                bt(e, a, t),
                mt(e),
                (l.stateNode = e))
            : (l.memoizedState = c0(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Tc(l),
          t === null &&
            q &&
            ((e = l.stateNode = Jr(l.type, l.pendingProps, wl.current)),
            (ht = l),
            ($t = !0),
            (u = F),
            ca(l.type) ? ((df = u), (F = Pt(e.firstChild))) : (F = u)),
          yt(t, l, l.pendingProps.children, a),
          gn(t, l),
          t === null && (l.flags |= 4194304),
          l.child
        );
      case 5:
        return (
          t === null &&
            q &&
            ((u = e = F) &&
              ((e = dy(e, l.type, l.pendingProps, $t)),
              e !== null
                ? ((l.stateNode = e),
                  (ht = l),
                  (F = Pt(e.firstChild)),
                  ($t = !1),
                  (u = !0))
                : (u = !1)),
            u || ea(l)),
          Tc(l),
          (u = l.type),
          (n = l.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (e = n.children),
          cf(u, n) ? (e = null) : i !== null && cf(u, i) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((u = Yf(t, l, Nv, null, null, a)), (gu._currentValue = u)),
          gn(t, l),
          yt(t, l, e, a),
          l.child
        );
      case 6:
        return (
          t === null &&
            q &&
            ((t = a = F) &&
              ((a = ry(a, l.pendingProps, $t)),
              a !== null
                ? ((l.stateNode = a), (ht = l), (F = null), (t = !0))
                : (t = !1)),
            t || ea(l)),
          null
        );
      case 13:
        return tr(t, l, a);
      case 4:
        return (
          An(l, l.stateNode.containerInfo),
          (e = l.pendingProps),
          t === null ? (l.child = Sa(l, null, e, a)) : yt(t, l, e, a),
          l.child
        );
      case 11:
        return Cs(t, l, l.type, l.pendingProps, a);
      case 7:
        return (yt(t, l, l.pendingProps, a), l.child);
      case 8:
        return (yt(t, l, l.pendingProps.children, a), l.child);
      case 12:
        return (yt(t, l, l.pendingProps.children, a), l.child);
      case 10:
        return (
          (e = l.pendingProps),
          jl(l, l.type, e.value),
          yt(t, l, e.children, a),
          l.child
        );
      case 9:
        return (
          (u = l.type._context),
          (e = l.pendingProps.children),
          ba(l),
          (u = gt(u)),
          (e = e(u)),
          (l.flags |= 1),
          yt(t, l, e, a),
          l.child
        );
      case 14:
        return Bs(t, l, l.type, l.pendingProps, a);
      case 15:
        return Id(t, l, l.type, l.pendingProps, a);
      case 19:
        return lr(t, l, a);
      case 31:
        return qv(t, l, a);
      case 22:
        return Pd(t, l, a, l.pendingProps);
      case 24:
        return (
          ba(l),
          (e = gt(ft)),
          t === null
            ? ((u = Cf()),
              u === null &&
                ((u = K),
                (n = Uf()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (l.memoizedState = { parent: e, cache: u }),
              Rf(l),
              jl(l, ft, u))
            : ((t.lanes & a) !== 0 && (Xc(t, l), tu(l, null, null, a), Pe()),
              (u = t.memoizedState),
              (n = l.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (l.memoizedState = u),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = u),
                  jl(l, ft, e))
                : ((e = n.cache),
                  jl(l, ft, e),
                  e !== u.cache && jc(l, [ft], a, !0))),
          yt(t, l, l.pendingProps.children, a),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(S(156, l.tag));
  }
  function yl(t) {
    t.flags |= 4;
  }
  function cc(t, l, a, e, u) {
    if (((l = (t.mode & 32) !== 0) && (l = !1), l)) {
      if (((t.flags |= 16777216), (u & 335544128) === u))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Mr()) t.flags |= 8192;
        else throw ((pa = Bn), Bf);
    } else t.flags &= -16777217;
  }
  function Xs(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Fr(l)))
      if (Mr()) t.flags |= 8192;
      else throw ((pa = Bn), Bf);
  }
  function ln(t, l) {
    (l !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((l = t.tag !== 22 ? O0() : 536870912), (t.lanes |= l), (re |= l)));
  }
  function Ge(t, l) {
    if (!q)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var e = null; a !== null; )
            (a.alternate !== null && (e = a), (a = a.sibling));
          e === null
            ? l || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function k(t) {
    var l = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      e = 0;
    if (l)
      for (var u = t.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling));
    else
      for (u = t.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = t),
          (u = u.sibling));
    return ((t.subtreeFlags |= e), (t.childLanes = a), l);
  }
  function jv(t, l, a) {
    var e = l.pendingProps;
    switch ((Df(l), l.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (k(l), null);
      case 1:
        return (k(l), null);
      case 3:
        return (
          (a = l.stateNode),
          (e = null),
          t !== null && (e = t.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          Al(ft),
          ie(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ya(l)
              ? yl(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), Ii())),
          k(l),
          null
        );
      case 26:
        var u = l.type,
          n = l.memoizedState;
        return (
          t === null
            ? (yl(l),
              n !== null ? (k(l), Xs(l, n)) : (k(l), cc(l, u, null, e, a)))
            : n
              ? n !== t.memoizedState
                ? (yl(l), k(l), Xs(l, n))
                : (k(l), (l.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== e && yl(l),
                k(l),
                cc(l, u, t, e, a)),
          null
        );
      case 27:
        if (
          (Mn(l),
          (a = wl.current),
          (u = l.type),
          t !== null && l.stateNode != null)
        )
          t.memoizedProps !== e && yl(l);
        else {
          if (!e) {
            if (l.stateNode === null) throw Error(S(166));
            return (k(l), null);
          }
          ((t = ol.current),
            Ya(l) ? ys(l, t) : ((t = Jr(u, e, a)), (l.stateNode = t), yl(l)));
        }
        return (k(l), null);
      case 5:
        if ((Mn(l), (u = l.type), t !== null && l.stateNode != null))
          t.memoizedProps !== e && yl(l);
        else {
          if (!e) {
            if (l.stateNode === null) throw Error(S(166));
            return (k(l), null);
          }
          if (((n = ol.current), Ya(l))) ys(l, n);
          else {
            var i = wn(wl.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof e.is == "string"
                        ? i.createElement("select", { is: e.is })
                        : i.createElement("select")),
                      e.multiple
                        ? (n.multiple = !0)
                        : e.size && (n.size = e.size));
                    break;
                  default:
                    n =
                      typeof e.is == "string"
                        ? i.createElement(u, { is: e.is })
                        : i.createElement(u);
                }
            }
            ((n[pt] = l), (n[Ut] = e));
            t: for (i = l.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === l) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === l) break t;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            l.stateNode = n;
            t: switch ((bt(n, u, e), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break t;
              case "img":
                e = !0;
                break t;
              default:
                e = !1;
            }
            e && yl(l);
          }
        }
        return (
          k(l),
          cc(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, a),
          null
        );
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== e && yl(l);
        else {
          if (typeof e != "string" && l.stateNode === null) throw Error(S(166));
          if (((t = wl.current), Ya(l))) {
            if (
              ((t = l.stateNode),
              (a = l.memoizedProps),
              (e = null),
              (u = ht),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            ((t[pt] = l),
              (t = !!(
                t.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                Vr(t.nodeValue, a)
              )),
              t || ea(l, !0));
          } else
            ((t = wn(t).createTextNode(e)), (t[pt] = l), (l.stateNode = t));
        }
        return (k(l), null);
      case 31:
        if (((a = l.memoizedState), t === null || t.memoizedState !== null)) {
          if (((e = Ya(l)), a !== null)) {
            if (t === null) {
              if (!e) throw Error(S(318));
              if (
                ((t = l.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(S(557));
              t[pt] = l;
            } else
              (ga(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4));
            (k(l), (t = !1));
          } else
            ((a = Ii()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = a),
              (t = !0));
          if (!t) return l.flags & 256 ? (Ht(l), l) : (Ht(l), null);
          if ((l.flags & 128) !== 0) throw Error(S(558));
        }
        return (k(l), null);
      case 13:
        if (
          ((e = l.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ya(l)), e !== null && e.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(S(318));
              if (
                ((u = l.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(S(317));
              u[pt] = l;
            } else
              (ga(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4));
            (k(l), (u = !1));
          } else
            ((u = Ii()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return l.flags & 256 ? (Ht(l), l) : (Ht(l), null);
        }
        return (
          Ht(l),
          (l.flags & 128) !== 0
            ? ((l.lanes = a), l)
            : ((a = e !== null),
              (t = t !== null && t.memoizedState !== null),
              a &&
                ((e = l.child),
                (u = null),
                e.alternate !== null &&
                  e.alternate.memoizedState !== null &&
                  e.alternate.memoizedState.cachePool !== null &&
                  (u = e.alternate.memoizedState.cachePool.pool),
                (n = null),
                e.memoizedState !== null &&
                  e.memoizedState.cachePool !== null &&
                  (n = e.memoizedState.cachePool.pool),
                n !== u && (e.flags |= 2048)),
              a !== t && a && (l.child.flags |= 8192),
              ln(l, l.updateQueue),
              k(l),
              null)
        );
      case 4:
        return (ie(), t === null && eo(l.stateNode.containerInfo), k(l), null);
      case 10:
        return (Al(l.type), k(l), null);
      case 19:
        if ((vt(et), (e = l.memoizedState), e === null)) return (k(l), null);
        if (((u = (l.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) Ge(e, !1);
          else {
            if (tt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null; ) {
                if (((n = Hn(t)), n !== null)) {
                  for (
                    l.flags |= 128,
                      Ge(e, !1),
                      t = n.updateQueue,
                      l.updateQueue = t,
                      ln(l, t),
                      l.subtreeFlags = 0,
                      t = a,
                      a = l.child;
                    a !== null;

                  )
                    (ed(a, t), (a = a.sibling));
                  return (
                    J(et, (et.current & 1) | 2),
                    q && bl(l, e.treeForkCount),
                    l.child
                  );
                }
                t = t.sibling;
              }
            e.tail !== null &&
              jt() > Qn &&
              ((l.flags |= 128), (u = !0), Ge(e, !1), (l.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = Hn(n)), t !== null)) {
              if (
                ((l.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                ln(l, t),
                Ge(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !q)
              )
                return (k(l), null);
            } else
              2 * jt() - e.renderingStartTime > Qn &&
                a !== 536870912 &&
                ((l.flags |= 128), (u = !0), Ge(e, !1), (l.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = l.child), (l.child = n))
            : ((t = e.last),
              t !== null ? (t.sibling = n) : (l.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = jt()),
            (t.sibling = null),
            (a = et.current),
            J(et, u ? (a & 1) | 2 : a & 1),
            q && bl(l, e.treeForkCount),
            t)
          : (k(l), null);
      case 22:
      case 23:
        return (
          Ht(l),
          Hf(),
          (e = l.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== e && (l.flags |= 8192)
            : e && (l.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (k(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : k(l),
          (a = l.updateQueue),
          a !== null && ln(l, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (e = null),
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          e !== a && (l.flags |= 2048),
          t !== null && vt(ya),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          l.memoizedState.cache !== a && (l.flags |= 2048),
          Al(ft),
          k(l),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(S(156, l.tag));
  }
  function Gv(t, l) {
    switch ((Df(l), l.tag)) {
      case 1:
        return (
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 3:
        return (
          Al(ft),
          ie(),
          (t = l.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((l.flags = (t & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Mn(l), null);
      case 31:
        if (l.memoizedState !== null) {
          if ((Ht(l), l.alternate === null)) throw Error(S(340));
          ga();
        }
        return (
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 13:
        if (
          (Ht(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(S(340));
          ga();
        }
        return (
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 19:
        return (vt(et), null);
      case 4:
        return (ie(), null);
      case 10:
        return (Al(l.type), null);
      case 22:
      case 23:
        return (
          Ht(l),
          Hf(),
          t !== null && vt(ya),
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 24:
        return (Al(ft), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function er(t, l) {
    switch ((Df(l), l.tag)) {
      case 3:
        (Al(ft), ie());
        break;
      case 26:
      case 27:
      case 5:
        Mn(l);
        break;
      case 4:
        ie();
        break;
      case 31:
        l.memoizedState !== null && Ht(l);
        break;
      case 13:
        Ht(l);
        break;
      case 19:
        vt(et);
        break;
      case 10:
        Al(l.type);
        break;
      case 22:
      case 23:
        (Ht(l), Hf(), t !== null && vt(ya));
        break;
      case 24:
        Al(ft);
    }
  }
  function _u(t, l) {
    try {
      var a = l.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            e = void 0;
            var n = a.create,
              i = a.inst;
            ((e = n()), (i.destroy = e));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      V(l, l.return, c);
    }
  }
  function ua(t, l, a) {
    try {
      var e = l.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & t) === t) {
            var i = e.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = l));
              var f = a,
                r = c;
              try {
                r();
              } catch (p) {
                V(u, f, p);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (p) {
      V(l, l.return, p);
    }
  }
  function ur(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var a = t.stateNode;
      try {
        md(l, a);
      } catch (e) {
        V(t, t.return, e);
      }
    }
  }
  function nr(t, l, a) {
    ((a.props = xa(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      V(t, l, e);
    }
  }
  function au(t, l) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var e = t.stateNode;
            break;
          case 30:
            e = t.stateNode;
            break;
          default:
            e = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      V(t, l, u);
    }
  }
  function fl(t, l) {
    var a = t.ref,
      e = t.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          V(t, l, u);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          V(t, l, u);
        }
      else a.current = null;
  }
  function ir(t) {
    var l = t.type,
      a = t.memoizedProps,
      e = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break t;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      V(t, t.return, u);
    }
  }
  function fc(t, l, a) {
    try {
      var e = t.stateNode;
      (ny(e, t.type, a, l), (e[Ut] = l));
    } catch (u) {
      V(t, t.return, u);
    }
  }
  function cr(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ca(t.type)) ||
      t.tag === 4
    );
  }
  function oc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || cr(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && ca(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function $c(t, l, a) {
    var e = t.tag;
    if (e === 5 || e === 6)
      ((t = t.stateNode),
        l
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(t, l)
          : ((l =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            l.appendChild(t),
            (a = a._reactRootContainer),
            a != null || l.onclick !== null || (l.onclick = xl)));
    else if (
      e !== 4 &&
      (e === 27 && ca(t.type) && ((a = t.stateNode), (l = null)),
      (t = t.child),
      t !== null)
    )
      for ($c(t, l, a), t = t.sibling; t !== null; )
        ($c(t, l, a), (t = t.sibling));
  }
  function Xn(t, l, a) {
    var e = t.tag;
    if (e === 5 || e === 6)
      ((t = t.stateNode), l ? a.insertBefore(t, l) : a.appendChild(t));
    else if (
      e !== 4 &&
      (e === 27 && ca(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (Xn(t, l, a), t = t.sibling; t !== null; )
        (Xn(t, l, a), (t = t.sibling));
  }
  function fr(t) {
    var l = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var e = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      (bt(l, e, a), (l[pt] = t), (l[Ut] = a));
    } catch (n) {
      V(t, t.return, n);
    }
  }
  var Sl = !1,
    ct = !1,
    sc = !1,
    Qs = typeof WeakSet == "function" ? WeakSet : Set,
    rt = null;
  function Xv(t, l) {
    if (((t = t.containerInfo), (uf = $n), (t = F0(t)), Af(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break t;
            }
            var i = 0,
              c = -1,
              f = -1,
              r = 0,
              p = 0,
              h = t,
              v = null;
            l: for (;;) {
              for (
                var y;
                h !== a || (u !== 0 && h.nodeType !== 3) || (c = i + u),
                  h !== n || (e !== 0 && h.nodeType !== 3) || (f = i + e),
                  h.nodeType === 3 && (i += h.nodeValue.length),
                  (y = h.firstChild) !== null;

              )
                ((v = h), (h = y));
              for (;;) {
                if (h === t) break l;
                if (
                  (v === a && ++r === u && (c = i),
                  v === n && ++p === e && (f = i),
                  (y = h.nextSibling) !== null)
                )
                  break;
                ((h = v), (v = h.parentNode));
              }
              h = y;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      nf = { focusedElem: t, selectionRange: a }, $n = !1, rt = l;
      rt !== null;

    )
      if (
        ((l = rt), (t = l.child), (l.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = l), (rt = t));
      else
        for (; rt !== null; ) {
          switch (((l = rt), (n = l.alternate), (t = l.flags), l.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = l.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (a = 0; a < t.length; a++)
                  ((u = t[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                ((t = void 0),
                  (a = l),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode));
                try {
                  var z = xa(a.type, u);
                  ((t = e.getSnapshotBeforeUpdate(z, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = t));
                } catch (T) {
                  V(a, a.return, T);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = l.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  ff(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ff(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(S(163));
          }
          if (((t = l.sibling), t !== null)) {
            ((t.return = l.return), (rt = t));
            break;
          }
          rt = l.return;
        }
  }
  function or(t, l, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (hl(t, a), e & 4 && _u(5, a));
        break;
      case 1:
        if ((hl(t, a), e & 4))
          if (((t = a.stateNode), l === null))
            try {
              t.componentDidMount();
            } catch (i) {
              V(a, a.return, i);
            }
          else {
            var u = xa(a.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              V(a, a.return, i);
            }
          }
        (e & 64 && ur(a), e & 512 && au(a, a.return));
        break;
      case 3:
        if ((hl(t, a), e & 64 && ((t = a.updateQueue), t !== null))) {
          if (((l = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                l = a.child.stateNode;
                break;
              case 1:
                l = a.child.stateNode;
            }
          try {
            md(t, l);
          } catch (i) {
            V(a, a.return, i);
          }
        }
        break;
      case 27:
        l === null && e & 4 && fr(a);
      case 26:
      case 5:
        (hl(t, a), l === null && e & 4 && ir(a), e & 512 && au(a, a.return));
        break;
      case 12:
        hl(t, a);
        break;
      case 31:
        (hl(t, a), e & 4 && rr(t, a));
        break;
      case 13:
        (hl(t, a),
          e & 4 && mr(t, a),
          e & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = Fv.bind(null, a)), my(t, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Sl), !e)) {
          ((l = (l !== null && l.memoizedState !== null) || ct), (u = Sl));
          var n = ct;
          ((Sl = e),
            (ct = l) && !n ? gl(t, a, (a.subtreeFlags & 8772) !== 0) : hl(t, a),
            (Sl = u),
            (ct = n));
        }
        break;
      case 30:
        break;
      default:
        hl(t, a);
    }
  }
  function sr(t) {
    var l = t.alternate;
    (l !== null && ((t.alternate = null), sr(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && bf(l)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var I = null,
    Nt = !1;
  function pl(t, l, a) {
    for (a = a.child; a !== null; ) (dr(t, l, a), (a = a.sibling));
  }
  function dr(t, l, a) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function")
      try {
        Gt.onCommitFiberUnmount(xu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (ct || fl(a, l),
          pl(t, l, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        ct || fl(a, l);
        var e = I,
          u = Nt;
        (ca(a.type) && ((I = a.stateNode), (Nt = !1)),
          pl(t, l, a),
          iu(a.stateNode),
          (I = e),
          (Nt = u));
        break;
      case 5:
        ct || fl(a, l);
      case 6:
        if (
          ((e = I),
          (u = Nt),
          (I = null),
          pl(t, l, a),
          (I = e),
          (Nt = u),
          I !== null)
        )
          if (Nt)
            try {
              (I.nodeType === 9
                ? I.body
                : I.nodeName === "HTML"
                  ? I.ownerDocument.body
                  : I
              ).removeChild(a.stateNode);
            } catch (n) {
              V(a, l, n);
            }
          else
            try {
              I.removeChild(a.stateNode);
            } catch (n) {
              V(a, l, n);
            }
        break;
      case 18:
        I !== null &&
          (Nt
            ? ((t = I),
              a0(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                a.stateNode,
              ),
              pe(t))
            : a0(I, a.stateNode));
        break;
      case 4:
        ((e = I),
          (u = Nt),
          (I = a.stateNode.containerInfo),
          (Nt = !0),
          pl(t, l, a),
          (I = e),
          (Nt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ua(2, a, l), ct || ua(4, a, l), pl(t, l, a));
        break;
      case 1:
        (ct ||
          (fl(a, l),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && nr(a, l, e)),
          pl(t, l, a));
        break;
      case 21:
        pl(t, l, a);
        break;
      case 22:
        ((ct = (e = ct) || a.memoizedState !== null), pl(t, l, a), (ct = e));
        break;
      default:
        pl(t, l, a);
    }
  }
  function rr(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        pe(t);
      } catch (a) {
        V(l, l.return, a);
      }
    }
  }
  function mr(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        pe(t);
      } catch (a) {
        V(l, l.return, a);
      }
  }
  function Qv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return (l === null && (l = t.stateNode = new Qs()), l);
      case 22:
        return (
          (t = t.stateNode),
          (l = t._retryCache),
          l === null && (l = t._retryCache = new Qs()),
          l
        );
      default:
        throw Error(S(435, t.tag));
    }
  }
  function an(t, l) {
    var a = Qv(t);
    l.forEach(function (e) {
      if (!a.has(e)) {
        a.add(e);
        var u = Wv.bind(null, t, e);
        e.then(u, u);
      }
    });
  }
  function Mt(t, l) {
    var a = l.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = t,
          i = l,
          c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ca(c.type)) {
                ((I = c.stateNode), (Nt = !1));
                break t;
              }
              break;
            case 5:
              ((I = c.stateNode), (Nt = !1));
              break t;
            case 3:
            case 4:
              ((I = c.stateNode.containerInfo), (Nt = !0));
              break t;
          }
          c = c.return;
        }
        if (I === null) throw Error(S(160));
        (dr(n, i, u),
          (I = null),
          (Nt = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; ) (vr(l, t), (l = l.sibling));
  }
  var al = null;
  function vr(t, l) {
    var a = t.alternate,
      e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Mt(l, t),
          Ot(t),
          e & 4 && (ua(3, t, t.return), _u(3, t), ua(5, t, t.return)));
        break;
      case 1:
        (Mt(l, t),
          Ot(t),
          e & 512 && (ct || a === null || fl(a, a.return)),
          e & 64 &&
            Sl &&
            ((t = t.updateQueue),
            t !== null &&
              ((e = t.callbacks),
              e !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var u = al;
        if (
          (Mt(l, t),
          Ot(t),
          e & 512 && (ct || a === null || fl(a, a.return)),
          e & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = t.memoizedState), a === null))
            if (e === null)
              if (t.stateNode === null) {
                t: {
                  ((e = t.type),
                    (a = t.memoizedProps),
                    (u = u.ownerDocument || u));
                  l: switch (e) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Au] ||
                          n[pt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        bt(n, e, a),
                        (n[pt] = t),
                        mt(n),
                        (e = n));
                      break t;
                    case "link":
                      var i = o0("link", "href", u).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      ((n = u.createElement(e)),
                        bt(n, e, a),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = o0("meta", "content", u).get(
                          e + (a.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      ((n = u.createElement(e)),
                        bt(n, e, a),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(S(468, e));
                  }
                  ((n[pt] = t), mt(n), (e = n));
                }
                t.stateNode = e;
              } else s0(u, t.type, t.stateNode);
            else t.stateNode = f0(u, e, t.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null
                  ? s0(u, t.type, t.stateNode)
                  : f0(u, e, t.memoizedProps))
              : e === null &&
                t.stateNode !== null &&
                fc(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Mt(l, t),
          Ot(t),
          e & 512 && (ct || a === null || fl(a, a.return)),
          a !== null && e & 4 && fc(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Mt(l, t),
          Ot(t),
          e & 512 && (ct || a === null || fl(a, a.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            fe(u, "");
          } catch (z) {
            V(t, t.return, z);
          }
        }
        (e & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), fc(t, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (sc = !0));
        break;
      case 6:
        if ((Mt(l, t), Ot(t), e & 4)) {
          if (t.stateNode === null) throw Error(S(162));
          ((e = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = e;
          } catch (z) {
            V(t, t.return, z);
          }
        }
        break;
      case 3:
        if (
          ((zn = null),
          (u = al),
          (al = kn(l.containerInfo)),
          Mt(l, t),
          (al = u),
          Ot(t),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            pe(l.containerInfo);
          } catch (z) {
            V(t, t.return, z);
          }
        sc && ((sc = !1), yr(t));
        break;
      case 4:
        ((e = al),
          (al = kn(t.stateNode.containerInfo)),
          Mt(l, t),
          Ot(t),
          (al = e));
        break;
      case 12:
        (Mt(l, t), Ot(t));
        break;
      case 31:
        (Mt(l, t),
          Ot(t),
          e & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), an(t, e))));
        break;
      case 13:
        (Mt(l, t),
          Ot(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (si = jt()),
          e & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), an(t, e))));
        break;
      case 22:
        u = t.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          r = Sl,
          p = ct;
        if (
          ((Sl = r || u),
          (ct = p || f),
          Mt(l, t),
          (ct = p),
          (Sl = r),
          Ot(t),
          e & 8192)
        )
          t: for (
            l = t.stateNode,
              l._visibility = u ? l._visibility & -2 : l._visibility | 1,
              u && (a === null || f || Sl || ct || ra(t)),
              a = null,
              l = t;
            ;

          ) {
            if (l.tag === 5 || l.tag === 26) {
              if (a === null) {
                f = a = l;
                try {
                  if (((n = f.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = f.stateNode;
                    var h = f.memoizedProps.style,
                      v =
                        h != null && h.hasOwnProperty("display")
                          ? h.display
                          : null;
                    c.style.display =
                      v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (z) {
                  V(f, f.return, z);
                }
              }
            } else if (l.tag === 6) {
              if (a === null) {
                f = l;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (z) {
                  V(f, f.return, z);
                }
              }
            } else if (l.tag === 18) {
              if (a === null) {
                f = l;
                try {
                  var y = f.stateNode;
                  u ? e0(y, !0) : e0(f.stateNode, !1);
                } catch (z) {
                  V(f, f.return, z);
                }
              }
            } else if (
              ((l.tag !== 22 && l.tag !== 23) ||
                l.memoizedState === null ||
                l === t) &&
              l.child !== null
            ) {
              ((l.child.return = l), (l = l.child));
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              (a === l && (a = null), (l = l.return));
            }
            (a === l && (a = null),
              (l.sibling.return = l.return),
              (l = l.sibling));
          }
        e & 4 &&
          ((e = t.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), an(t, a))));
        break;
      case 19:
        (Mt(l, t),
          Ot(t),
          e & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), an(t, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Mt(l, t), Ot(t));
    }
  }
  function Ot(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var a, e = t.return; e !== null; ) {
          if (cr(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(S(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = oc(t);
            Xn(t, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (fe(i, ""), (a.flags &= -33));
            var c = oc(t);
            Xn(t, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              r = oc(t);
            $c(t, r, f);
            break;
          default:
            throw Error(S(161));
        }
      } catch (p) {
        V(t, t.return, p);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function yr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        (yr(l),
          l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function hl(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) (or(t, l.alternate, l), (l = l.sibling));
  }
  function ra(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ua(4, l, l.return), ra(l));
          break;
        case 1:
          fl(l, l.return);
          var a = l.stateNode;
          (typeof a.componentWillUnmount == "function" && nr(l, l.return, a),
            ra(l));
          break;
        case 27:
          iu(l.stateNode);
        case 26:
        case 5:
          (fl(l, l.return), ra(l));
          break;
        case 22:
          l.memoizedState === null && ra(l);
          break;
        case 30:
          ra(l);
          break;
        default:
          ra(l);
      }
      t = t.sibling;
    }
  }
  function gl(t, l, a) {
    for (a = a && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var e = l.alternate,
        u = t,
        n = l,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (gl(u, n, a), _u(4, n));
          break;
        case 1:
          if (
            (gl(u, n, a),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (r) {
              V(e, e.return, r);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  rd(f[u], c);
            } catch (r) {
              V(e, e.return, r);
            }
          }
          (a && i & 64 && ur(n), au(n, n.return));
          break;
        case 27:
          fr(n);
        case 26:
        case 5:
          (gl(u, n, a), a && e === null && i & 4 && ir(n), au(n, n.return));
          break;
        case 12:
          gl(u, n, a);
          break;
        case 31:
          (gl(u, n, a), a && i & 4 && rr(u, n));
          break;
        case 13:
          (gl(u, n, a), a && i & 4 && mr(u, n));
          break;
        case 22:
          (n.memoizedState === null && gl(u, n, a), au(n, n.return));
          break;
        case 30:
          break;
        default:
          gl(u, n, a);
      }
      l = l.sibling;
    }
  }
  function $f(t, l) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (t = l.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && Ou(a)));
  }
  function If(t, l) {
    ((t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && Ou(t)));
  }
  function ll(t, l, a, e) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (pr(t, l, a, e), (l = l.sibling));
  }
  function pr(t, l, a, e) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (ll(t, l, a, e), u & 2048 && _u(9, l));
        break;
      case 1:
        ll(t, l, a, e);
        break;
      case 3:
        (ll(t, l, a, e),
          u & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && Ou(t))));
        break;
      case 12:
        if (u & 2048) {
          (ll(t, l, a, e), (t = l.stateNode));
          try {
            var n = l.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                l.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (f) {
            V(l, l.return, f);
          }
        } else ll(t, l, a, e);
        break;
      case 31:
        ll(t, l, a, e);
        break;
      case 13:
        ll(t, l, a, e);
        break;
      case 23:
        break;
      case 22:
        ((n = l.stateNode),
          (i = l.alternate),
          l.memoizedState !== null
            ? n._visibility & 2
              ? ll(t, l, a, e)
              : eu(t, l)
            : n._visibility & 2
              ? ll(t, l, a, e)
              : ((n._visibility |= 2),
                Ga(t, l, a, e, (l.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && $f(i, l));
        break;
      case 24:
        (ll(t, l, a, e), u & 2048 && If(l.alternate, l));
        break;
      default:
        ll(t, l, a, e);
    }
  }
  function Ga(t, l, a, e, u) {
    for (
      u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child;
      l !== null;

    ) {
      var n = t,
        i = l,
        c = a,
        f = e,
        r = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Ga(n, i, c, f, u), _u(8, i));
          break;
        case 23:
          break;
        case 22:
          var p = i.stateNode;
          (i.memoizedState !== null
            ? p._visibility & 2
              ? Ga(n, i, c, f, u)
              : eu(n, i)
            : ((p._visibility |= 2), Ga(n, i, c, f, u)),
            u && r & 2048 && $f(i.alternate, i));
          break;
        case 24:
          (Ga(n, i, c, f, u), u && r & 2048 && If(i.alternate, i));
          break;
        default:
          Ga(n, i, c, f, u);
      }
      l = l.sibling;
    }
  }
  function eu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var a = t,
          e = l,
          u = e.flags;
        switch (e.tag) {
          case 22:
            (eu(a, e), u & 2048 && $f(e.alternate, e));
            break;
          case 24:
            (eu(a, e), u & 2048 && If(e.alternate, e));
            break;
          default:
            eu(a, e);
        }
        l = l.sibling;
      }
  }
  var we = 8192;
  function ja(t, l, a) {
    if (t.subtreeFlags & we)
      for (t = t.child; t !== null; ) (hr(t, l, a), (t = t.sibling));
  }
  function hr(t, l, a) {
    switch (t.tag) {
      case 26:
        (ja(t, l, a),
          t.flags & we &&
            t.memoizedState !== null &&
            Ay(a, al, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ja(t, l, a);
        break;
      case 3:
      case 4:
        var e = al;
        ((al = kn(t.stateNode.containerInfo)), ja(t, l, a), (al = e));
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = we), (we = 16777216), ja(t, l, a), (we = e))
            : ja(t, l, a));
        break;
      default:
        ja(t, l, a);
    }
  }
  function gr(t) {
    var l = t.alternate;
    if (l !== null && ((t = l.child), t !== null)) {
      l.child = null;
      do ((l = t.sibling), (t.sibling = null), (t = l));
      while (t !== null);
    }
  }
  function Xe(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var a = 0; a < l.length; a++) {
          var e = l[a];
          ((rt = e), Sr(e, t));
        }
      gr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (br(t), (t = t.sibling));
  }
  function br(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Xe(t), t.flags & 2048 && ua(9, t, t.return));
        break;
      case 3:
        Xe(t);
        break;
      case 12:
        Xe(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null &&
        l._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((l._visibility &= -3), bn(t))
          : Xe(t);
        break;
      default:
        Xe(t);
    }
  }
  function bn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var a = 0; a < l.length; a++) {
          var e = l[a];
          ((rt = e), Sr(e, t));
        }
      gr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          (ua(8, l, l.return), bn(l));
          break;
        case 22:
          ((a = l.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), bn(l)));
          break;
        default:
          bn(l);
      }
      t = t.sibling;
    }
  }
  function Sr(t, l) {
    for (; rt !== null; ) {
      var a = rt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ua(8, a, l);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ou(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) ((e.return = a), (rt = e));
      else
        t: for (a = t; rt !== null; ) {
          e = rt;
          var u = e.sibling,
            n = e.return;
          if ((sr(e), e === a)) {
            rt = null;
            break t;
          }
          if (u !== null) {
            ((u.return = n), (rt = u));
            break t;
          }
          rt = n;
        }
    }
  }
  var Vv = {
      getCacheForType: function (t) {
        var l = gt(ft),
          a = l.data.get(t);
        return (a === void 0 && ((a = t()), l.data.set(t, a)), a);
      },
      cacheSignal: function () {
        return gt(ft).controller.signal;
      },
    },
    Zv = typeof WeakMap == "function" ? WeakMap : Map,
    j = 0,
    K = null,
    B = null,
    H = 0,
    Q = 0,
    Rt = null,
    Ll = !1,
    ze = !1,
    Pf = !1,
    Ul = 0,
    tt = 0,
    na = 0,
    ha = 0,
    to = 0,
    Yt = 0,
    re = 0,
    uu = null,
    _t = null,
    Ic = !1,
    si = 0,
    zr = 0,
    Qn = 1 / 0,
    Vn = null,
    $l = null,
    st = 0,
    Il = null,
    me = null,
    Ml = 0,
    Pc = 0,
    tf = null,
    xr = null,
    nu = 0,
    lf = null;
  function Qt() {
    return (j & 2) !== 0 && H !== 0 ? H & -H : O.T !== null ? ao() : U0();
  }
  function Er() {
    if (Yt === 0)
      if ((H & 536870912) === 0 || q) {
        var t = Ju;
        ((Ju <<= 1), (Ju & 3932160) === 0 && (Ju = 262144), (Yt = t));
      } else Yt = 536870912;
    return ((t = Zt.current), t !== null && (t.flags |= 32), Yt);
  }
  function Dt(t, l, a) {
    (((t === K && (Q === 2 || Q === 9)) || t.cancelPendingCommit !== null) &&
      (ve(t, 0), Kl(t, H, Yt, !1)),
      Tu(t, a),
      ((j & 2) === 0 || t !== K) &&
        (t === K && ((j & 2) === 0 && (ha |= a), tt === 4 && Kl(t, H, Yt, !1)),
        dl(t)));
  }
  function Tr(t, l, a) {
    if ((j & 6) !== 0) throw Error(S(327));
    var e = (!a && (l & 127) === 0 && (l & t.expiredLanes) === 0) || Eu(t, l),
      u = e ? Jv(t, l) : dc(t, l, !0),
      n = e;
    do {
      if (u === 0) {
        ze && !e && Kl(t, l, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), n && !Lv(a))) {
          ((u = dc(t, l, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = l), t.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              u = uu;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (ve(c, i).flags |= 256), (i = dc(c, i, !1)), i !== 2)) {
                if (Pf && !f) {
                  ((c.errorRecoveryDisabledLanes |= n), (ha |= n), (u = 4));
                  break t;
                }
                ((n = _t),
                  (_t = u),
                  n !== null &&
                    (_t === null ? (_t = n) : _t.push.apply(_t, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (ve(t, 0), Kl(t, l, 0, !0));
          break;
        }
        t: {
          switch (((e = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(S(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              Kl(e, l, Yt, !Ll);
              break t;
            case 2:
              _t = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(S(329));
          }
          if ((l & 62914560) === l && ((u = si + 300 - jt()), 10 < u)) {
            if ((Kl(e, l, Yt, !Ll), Pn(e, 0, !0) !== 0)) break t;
            ((Ml = l),
              (e.timeoutHandle = Lr(
                Vs.bind(
                  null,
                  e,
                  a,
                  _t,
                  Vn,
                  Ic,
                  l,
                  Yt,
                  ha,
                  re,
                  Ll,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break t;
          }
          Vs(e, a, _t, Vn, Ic, l, Yt, ha, re, Ll, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    dl(t);
  }
  function Vs(t, l, a, e, u, n, i, c, f, r, p, h, v, y) {
    if (
      ((t.timeoutHandle = -1),
      (h = l.subtreeFlags),
      h & 8192 || (h & 16785408) === 16785408)
    ) {
      ((h = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xl,
      }),
        hr(l, n, h));
      var z =
        (n & 62914560) === n ? si - jt() : (n & 4194048) === n ? zr - jt() : 0;
      if (((z = My(h, z)), z !== null)) {
        ((Ml = n),
          (t.cancelPendingCommit = z(
            Ls.bind(null, t, l, n, a, e, u, i, c, f, p, h, null, v, y),
          )),
          Kl(t, n, i, !r));
        return;
      }
    }
    Ls(t, l, n, a, e, u, i, c, f);
  }
  function Lv(t) {
    for (var l = t; ; ) {
      var a = l.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        l.flags & 16384 &&
        ((a = l.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!Vt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = l.child), l.subtreeFlags & 16384 && a !== null))
        ((a.return = l), (l = a));
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    }
    return !0;
  }
  function Kl(t, l, a, e) {
    ((l &= ~to),
      (l &= ~ha),
      (t.suspendedLanes |= l),
      (t.pingedLanes &= ~l),
      e && (t.warmLanes |= l),
      (e = t.expirationTimes));
    for (var u = l; 0 < u; ) {
      var n = 31 - Xt(u),
        i = 1 << n;
      ((e[n] = -1), (u &= ~i));
    }
    a !== 0 && N0(t, a, l);
  }
  function di() {
    return (j & 6) === 0 ? (Du(0, !1), !1) : !0;
  }
  function lo() {
    if (B !== null) {
      if (Q === 0) var t = B.return;
      else ((t = B), (El = Oa = null), Xf(t), (ee = null), (mu = 0), (t = B));
      for (; t !== null; ) (er(t.alternate, t), (t = t.return));
      B = null;
    }
  }
  function ve(t, l) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), fy(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      (Ml = 0),
      lo(),
      (K = t),
      (B = a = Tl(t.current, null)),
      (H = l),
      (Q = 0),
      (Rt = null),
      (Ll = !1),
      (ze = Eu(t, l)),
      (Pf = !1),
      (re = Yt = to = ha = na = tt = 0),
      (_t = uu = null),
      (Ic = !1),
      (l & 8) !== 0 && (l |= l & 32));
    var e = t.entangledLanes;
    if (e !== 0)
      for (t = t.entanglements, e &= l; 0 < e; ) {
        var u = 31 - Xt(e),
          n = 1 << u;
        ((l |= t[u]), (e &= ~n));
      }
    return ((Ul = l), ei(), a);
  }
  function Ar(t, l) {
    ((D = null),
      (O.H = yu),
      l === Se || l === ni
        ? ((l = Ss()), (Q = 3))
        : l === Bf
          ? ((l = Ss()), (Q = 4))
          : (Q =
              l === Ff
                ? 8
                : l !== null &&
                    typeof l == "object" &&
                    typeof l.then == "function"
                  ? 6
                  : 1),
      (Rt = l),
      B === null && ((tt = 1), jn(t, Wt(l, t.current))));
  }
  function Mr() {
    var t = Zt.current;
    return t === null
      ? !0
      : (H & 4194048) === H
        ? It === null
        : (H & 62914560) === H || (H & 536870912) !== 0
          ? t === It
          : !1;
  }
  function Or() {
    var t = O.H;
    return ((O.H = yu), t === null ? yu : t);
  }
  function Nr() {
    var t = O.A;
    return ((O.A = Vv), t);
  }
  function Zn() {
    ((tt = 4),
      Ll || ((H & 4194048) !== H && Zt.current !== null) || (ze = !0),
      ((na & 134217727) === 0 && (ha & 134217727) === 0) ||
        K === null ||
        Kl(K, H, Yt, !1));
  }
  function dc(t, l, a) {
    var e = j;
    j |= 2;
    var u = Or(),
      n = Nr();
    ((K !== t || H !== l) && ((Vn = null), ve(t, l)), (l = !1));
    var i = tt;
    t: do
      try {
        if (Q !== 0 && B !== null) {
          var c = B,
            f = Rt;
          switch (Q) {
            case 8:
              (lo(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Zt.current === null && (l = !0);
              var r = Q;
              if (((Q = 0), (Rt = null), Ia(t, c, f, r), a && ze)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((r = Q), (Q = 0), (Rt = null), Ia(t, c, f, r));
          }
        }
        (Kv(), (i = tt));
        break;
      } catch (p) {
        Ar(t, p);
      }
    while (!0);
    return (
      l && t.shellSuspendCounter++,
      (El = Oa = null),
      (j = e),
      (O.H = u),
      (O.A = n),
      B === null && ((K = null), (H = 0), ei()),
      i
    );
  }
  function Kv() {
    for (; B !== null; ) _r(B);
  }
  function Jv(t, l) {
    var a = j;
    j |= 2;
    var e = Or(),
      u = Nr();
    K !== t || H !== l
      ? ((Vn = null), (Qn = jt() + 500), ve(t, l))
      : (ze = Eu(t, l));
    t: do
      try {
        if (Q !== 0 && B !== null) {
          l = B;
          var n = Rt;
          l: switch (Q) {
            case 1:
              ((Q = 0), (Rt = null), Ia(t, l, n, 1));
              break;
            case 2:
            case 9:
              if (bs(n)) {
                ((Q = 0), (Rt = null), Zs(l));
                break;
              }
              ((l = function () {
                ((Q !== 2 && Q !== 9) || K !== t || (Q = 7), dl(t));
              }),
                n.then(l, l));
              break t;
            case 3:
              Q = 7;
              break t;
            case 4:
              Q = 5;
              break t;
            case 7:
              bs(n)
                ? ((Q = 0), (Rt = null), Zs(l))
                : ((Q = 0), (Rt = null), Ia(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (B.tag) {
                case 26:
                  i = B.memoizedState;
                case 5:
                case 27:
                  var c = B;
                  if (i ? Fr(i) : c.stateNode.complete) {
                    ((Q = 0), (Rt = null));
                    var f = c.sibling;
                    if (f !== null) B = f;
                    else {
                      var r = c.return;
                      r !== null ? ((B = r), ri(r)) : (B = null);
                    }
                    break l;
                  }
              }
              ((Q = 0), (Rt = null), Ia(t, l, n, 5));
              break;
            case 6:
              ((Q = 0), (Rt = null), Ia(t, l, n, 6));
              break;
            case 8:
              (lo(), (tt = 6));
              break t;
            default:
              throw Error(S(462));
          }
        }
        wv();
        break;
      } catch (p) {
        Ar(t, p);
      }
    while (!0);
    return (
      (El = Oa = null),
      (O.H = e),
      (O.A = u),
      (j = a),
      B !== null ? 0 : ((K = null), (H = 0), ei(), tt)
    );
  }
  function wv() {
    for (; B !== null && !p1(); ) _r(B);
  }
  function _r(t) {
    var l = ar(t.alternate, t, Ul);
    ((t.memoizedProps = t.pendingProps), l === null ? ri(t) : (B = l));
  }
  function Zs(t) {
    var l = t,
      a = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = qs(a, l, l.pendingProps, l.type, void 0, H);
        break;
      case 11:
        l = qs(a, l, l.pendingProps, l.type.render, l.ref, H);
        break;
      case 5:
        Xf(l);
      default:
        (er(a, l), (l = B = ed(l, Ul)), (l = ar(a, l, Ul)));
    }
    ((t.memoizedProps = t.pendingProps), l === null ? ri(t) : (B = l));
  }
  function Ia(t, l, a, e) {
    ((El = Oa = null), Xf(l), (ee = null), (mu = 0));
    var u = l.return;
    try {
      if (Hv(t, u, l, a, H)) {
        ((tt = 1), jn(t, Wt(a, t.current)), (B = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((B = u), n);
      ((tt = 1), jn(t, Wt(a, t.current)), (B = null));
      return;
    }
    l.flags & 32768
      ? (q || e === 1
          ? (t = !0)
          : ze || (H & 536870912) !== 0
            ? (t = !1)
            : ((Ll = t = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = Zt.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
        Dr(l, t))
      : ri(l);
  }
  function ri(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Dr(l, Ll);
        return;
      }
      t = l.return;
      var a = jv(l.alternate, l, Ul);
      if (a !== null) {
        B = a;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        B = l;
        return;
      }
      B = l = t;
    } while (l !== null);
    tt === 0 && (tt = 5);
  }
  function Dr(t, l) {
    do {
      var a = Gv(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (B = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !l && ((t = t.sibling), t !== null))
      ) {
        B = t;
        return;
      }
      B = t = a;
    } while (t !== null);
    ((tt = 6), (B = null));
  }
  function Ls(t, l, a, e, u, n, i, c, f) {
    t.cancelPendingCommit = null;
    do mi();
    while (st !== 0);
    if ((j & 6) !== 0) throw Error(S(327));
    if (l !== null) {
      if (l === t.current) throw Error(S(177));
      if (
        ((n = l.lanes | l.childLanes),
        (n |= Mf),
        M1(t, a, n, i, c, f),
        t === K && ((B = K = null), (H = 0)),
        (me = l),
        (Il = t),
        (Ml = a),
        (Pc = n),
        (tf = u),
        (xr = e),
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            $v(On, function () {
              return (Hr(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (e = (l.flags & 13878) !== 0),
        (l.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = O.T), (O.T = null), (u = G.p), (G.p = 2), (i = j), (j |= 4));
        try {
          Xv(t, l, a);
        } finally {
          ((j = i), (G.p = u), (O.T = e));
        }
      }
      ((st = 1), Ur(), Cr(), Br());
    }
  }
  function Ur() {
    if (st === 1) {
      st = 0;
      var t = Il,
        l = me,
        a = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || a) {
        ((a = O.T), (O.T = null));
        var e = G.p;
        G.p = 2;
        var u = j;
        j |= 4;
        try {
          vr(l, t);
          var n = nf,
            i = F0(t.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            k0(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && Af(c)) {
              var r = f.start,
                p = f.end;
              if ((p === void 0 && (p = r), "selectionStart" in c))
                ((c.selectionStart = r),
                  (c.selectionEnd = Math.min(p, c.value.length)));
              else {
                var h = c.ownerDocument || document,
                  v = (h && h.defaultView) || window;
                if (v.getSelection) {
                  var y = v.getSelection(),
                    z = c.textContent.length,
                    T = Math.min(f.start, z),
                    R = f.end === void 0 ? T : Math.min(f.end, z);
                  !y.extend && T > R && ((i = R), (R = T), (T = i));
                  var d = rs(c, T),
                    s = rs(c, R);
                  if (
                    d &&
                    s &&
                    (y.rangeCount !== 1 ||
                      y.anchorNode !== d.node ||
                      y.anchorOffset !== d.offset ||
                      y.focusNode !== s.node ||
                      y.focusOffset !== s.offset)
                  ) {
                    var m = h.createRange();
                    (m.setStart(d.node, d.offset),
                      y.removeAllRanges(),
                      T > R
                        ? (y.addRange(m), y.extend(s.node, s.offset))
                        : (m.setEnd(s.node, s.offset), y.addRange(m)));
                  }
                }
              }
            }
            for (h = [], y = c; (y = y.parentNode); )
              y.nodeType === 1 &&
                h.push({ element: y, left: y.scrollLeft, top: y.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < h.length;
              c++
            ) {
              var g = h[c];
              ((g.element.scrollLeft = g.left), (g.element.scrollTop = g.top));
            }
          }
          (($n = !!uf), (nf = uf = null));
        } finally {
          ((j = u), (G.p = e), (O.T = a));
        }
      }
      ((t.current = l), (st = 2));
    }
  }
  function Cr() {
    if (st === 2) {
      st = 0;
      var t = Il,
        l = me,
        a = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || a) {
        ((a = O.T), (O.T = null));
        var e = G.p;
        G.p = 2;
        var u = j;
        j |= 4;
        try {
          or(t, l.alternate, l);
        } finally {
          ((j = u), (G.p = e), (O.T = a));
        }
      }
      st = 3;
    }
  }
  function Br() {
    if (st === 4 || st === 3) {
      ((st = 0), h1());
      var t = Il,
        l = me,
        a = Ml,
        e = xr;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? (st = 5)
        : ((st = 0), (me = Il = null), Rr(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && ($l = null),
        gf(a),
        (l = l.stateNode),
        Gt && typeof Gt.onCommitFiberRoot == "function")
      )
        try {
          Gt.onCommitFiberRoot(xu, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((l = O.T), (u = G.p), (G.p = 2), (O.T = null));
        try {
          for (var n = t.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((O.T = l), (G.p = u));
        }
      }
      ((Ml & 3) !== 0 && mi(),
        dl(t),
        (u = t.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? t === lf
            ? nu++
            : ((nu = 0), (lf = t))
          : (nu = 0),
        Du(0, !1));
    }
  }
  function Rr(t, l) {
    (t.pooledCacheLanes &= l) === 0 &&
      ((l = t.pooledCache), l != null && ((t.pooledCache = null), Ou(l)));
  }
  function mi() {
    return (Ur(), Cr(), Br(), Hr());
  }
  function Hr() {
    if (st !== 5) return !1;
    var t = Il,
      l = Pc;
    Pc = 0;
    var a = gf(Ml),
      e = O.T,
      u = G.p;
    try {
      ((G.p = 32 > a ? 32 : a), (O.T = null), (a = tf), (tf = null));
      var n = Il,
        i = Ml;
      if (((st = 0), (me = Il = null), (Ml = 0), (j & 6) !== 0))
        throw Error(S(331));
      var c = j;
      if (
        ((j |= 4),
        br(n.current),
        pr(n, n.current, i, a),
        (j = c),
        Du(0, !1),
        Gt && typeof Gt.onPostCommitFiberRoot == "function")
      )
        try {
          Gt.onPostCommitFiberRoot(xu, n);
        } catch {}
      return !0;
    } finally {
      ((G.p = u), (O.T = e), Rr(t, l));
    }
  }
  function Ks(t, l, a) {
    ((l = Wt(a, l)),
      (l = kc(t.stateNode, l, 2)),
      (t = Wl(t, l, 2)),
      t !== null && (Tu(t, 2), dl(t)));
  }
  function V(t, l, a) {
    if (t.tag === 3) Ks(t, t, a);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Ks(l, t, a);
          break;
        } else if (l.tag === 1) {
          var e = l.stateNode;
          if (
            typeof l.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              ($l === null || !$l.has(e)))
          ) {
            ((t = Wt(a, t)),
              (a = Wd(2)),
              (e = Wl(l, a, 2)),
              e !== null && ($d(a, e, l, t), Tu(e, 2), dl(e)));
            break;
          }
        }
        l = l.return;
      }
  }
  function rc(t, l, a) {
    var e = t.pingCache;
    if (e === null) {
      e = t.pingCache = new Zv();
      var u = new Set();
      e.set(l, u);
    } else ((u = e.get(l)), u === void 0 && ((u = new Set()), e.set(l, u)));
    u.has(a) ||
      ((Pf = !0), u.add(a), (t = kv.bind(null, t, l, a)), l.then(t, t));
  }
  function kv(t, l, a) {
    var e = t.pingCache;
    (e !== null && e.delete(l),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      K === t &&
        (H & a) === a &&
        (tt === 4 || (tt === 3 && (H & 62914560) === H && 300 > jt() - si)
          ? (j & 2) === 0 && ve(t, 0)
          : (to |= a),
        re === H && (re = 0)),
      dl(t));
  }
  function qr(t, l) {
    (l === 0 && (l = O0()), (t = Ma(t, l)), t !== null && (Tu(t, l), dl(t)));
  }
  function Fv(t) {
    var l = t.memoizedState,
      a = 0;
    (l !== null && (a = l.retryLane), qr(t, a));
  }
  function Wv(t, l) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var e = t.stateNode,
          u = t.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = t.stateNode;
        break;
      case 22:
        e = t.stateNode._retryCache;
        break;
      default:
        throw Error(S(314));
    }
    (e !== null && e.delete(l), qr(t, a));
  }
  function $v(t, l) {
    return pf(t, l);
  }
  var Ln = null,
    Xa = null,
    af = !1,
    Kn = !1,
    mc = !1,
    Jl = 0;
  function dl(t) {
    (t !== Xa &&
      t.next === null &&
      (Xa === null ? (Ln = Xa = t) : (Xa = Xa.next = t)),
      (Kn = !0),
      af || ((af = !0), Pv()));
  }
  function Du(t, l) {
    if (!mc && Kn) {
      mc = !0;
      do
        for (var a = !1, e = Ln; e !== null; ) {
          if (!l)
            if (t !== 0) {
              var u = e.pendingLanes;
              if (u === 0) var n = 0;
              else {
                var i = e.suspendedLanes,
                  c = e.pingedLanes;
                ((n = (1 << (31 - Xt(42 | t) + 1)) - 1),
                  (n &= u & ~(i & ~c)),
                  (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
              }
              n !== 0 && ((a = !0), Js(e, n));
            } else
              ((n = H),
                (n = Pn(
                  e,
                  e === K ? n : 0,
                  e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
                )),
                (n & 3) === 0 || Eu(e, n) || ((a = !0), Js(e, n)));
          e = e.next;
        }
      while (a);
      mc = !1;
    }
  }
  function Iv() {
    Yr();
  }
  function Yr() {
    Kn = af = !1;
    var t = 0;
    Jl !== 0 && cy() && (t = Jl);
    for (var l = jt(), a = null, e = Ln; e !== null; ) {
      var u = e.next,
        n = jr(e, l);
      (n === 0
        ? ((e.next = null),
          a === null ? (Ln = u) : (a.next = u),
          u === null && (Xa = a))
        : ((a = e), (t !== 0 || (n & 3) !== 0) && (Kn = !0)),
        (e = u));
    }
    ((st !== 0 && st !== 5) || Du(t, !1), Jl !== 0 && (Jl = 0));
  }
  function jr(t, l) {
    for (
      var a = t.suspendedLanes,
        e = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - Xt(n),
        c = 1 << i,
        f = u[i];
      (f === -1
        ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = A1(c, l))
        : f <= l && (t.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((l = K),
      (a = H),
      (a = Pn(
        t,
        t === l ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (e = t.callbackNode),
      a === 0 ||
        (t === l && (Q === 2 || Q === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && Vi(e),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Eu(t, a)) {
      if (((l = a & -a), l === t.callbackPriority)) return l;
      switch ((e !== null && Vi(e), gf(a))) {
        case 2:
        case 8:
          a = A0;
          break;
        case 32:
          a = On;
          break;
        case 268435456:
          a = M0;
          break;
        default:
          a = On;
      }
      return (
        (e = Gr.bind(null, t)),
        (a = pf(a, e)),
        (t.callbackPriority = l),
        (t.callbackNode = a),
        l
      );
    }
    return (
      e !== null && e !== null && Vi(e),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Gr(t, l) {
    if (st !== 0 && st !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (mi() && t.callbackNode !== a) return null;
    var e = H;
    return (
      (e = Pn(
        t,
        t === K ? e : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      e === 0
        ? null
        : (Tr(t, e, l),
          jr(t, jt()),
          t.callbackNode != null && t.callbackNode === a
            ? Gr.bind(null, t)
            : null)
    );
  }
  function Js(t, l) {
    if (mi()) return null;
    Tr(t, l, !0);
  }
  function Pv() {
    oy(function () {
      (j & 6) !== 0 ? pf(T0, Iv) : Yr();
    });
  }
  function ao() {
    if (Jl === 0) {
      var t = oe;
      (t === 0 && ((t = Ku), (Ku <<= 1), (Ku & 261888) === 0 && (Ku = 256)),
        (Jl = t));
    }
    return Jl;
  }
  function ws(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : sn("" + t);
  }
  function ks(t, l) {
    var a = l.ownerDocument.createElement("input");
    return (
      (a.name = l.name),
      (a.value = l.value),
      t.id && a.setAttribute("form", t.id),
      l.parentNode.insertBefore(a, l),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function ty(t, l, a, e, u) {
    if (l === "submit" && a && a.stateNode === u) {
      var n = ws((u[Ut] || null).action),
        i = e.submitter;
      i &&
        ((l = (l = i[Ut] || null)
          ? ws(l.formAction)
          : i.getAttribute("formAction")),
        l !== null && ((n = l), (i = null)));
      var c = new ti("action", "action", null, e, u);
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (Jl !== 0) {
                  var f = i ? ks(u, i) : new FormData(u);
                  Jc(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f,
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? ks(u, i) : new FormData(u)),
                  Jc(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (en = 0; en < Rc.length; en++)
    ((un = Rc[en]),
      (Fs = un.toLowerCase()),
      (Ws = un[0].toUpperCase() + un.slice(1)),
      el(Fs, "on" + Ws));
  var un, Fs, Ws, en;
  el($0, "onAnimationEnd");
  el(I0, "onAnimationIteration");
  el(P0, "onAnimationStart");
  el("dblclick", "onDoubleClick");
  el("focusin", "onFocus");
  el("focusout", "onBlur");
  el(gv, "onTransitionRun");
  el(bv, "onTransitionStart");
  el(Sv, "onTransitionCancel");
  el(td, "onTransitionEnd");
  ce("onMouseEnter", ["mouseout", "mouseover"]);
  ce("onMouseLeave", ["mouseout", "mouseover"]);
  ce("onPointerEnter", ["pointerout", "pointerover"]);
  ce("onPointerLeave", ["pointerout", "pointerover"]);
  Ea(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  );
  Ea(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " ",
    ),
  );
  Ea("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Ea(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  );
  Ea(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  );
  Ea(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
  var pu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    ly = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(pu),
    );
  function Xr(t, l) {
    l = (l & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var e = t[a],
        u = e.event;
      e = e.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i],
              f = c.instance,
              r = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped()))
              break t;
            ((n = c), (u.currentTarget = r));
            try {
              n(u);
            } catch (p) {
              _n(p);
            }
            ((u.currentTarget = null), (n = f));
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (f = c.instance),
              (r = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break t;
            ((n = c), (u.currentTarget = r));
            try {
              n(u);
            } catch (p) {
              _n(p);
            }
            ((u.currentTarget = null), (n = f));
          }
      }
    }
  }
  function C(t, l) {
    var a = l[Mc];
    a === void 0 && (a = l[Mc] = new Set());
    var e = t + "__bubble";
    a.has(e) || (Qr(l, t, 2, !1), a.add(e));
  }
  function vc(t, l, a) {
    var e = 0;
    (l && (e |= 4), Qr(a, t, e, l));
  }
  var nn = "_reactListening" + Math.random().toString(36).slice(2);
  function eo(t) {
    if (!t[nn]) {
      ((t[nn] = !0),
        C0.forEach(function (a) {
          a !== "selectionchange" && (ly.has(a) || vc(a, !1, t), vc(a, !0, t));
        }));
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[nn] || ((l[nn] = !0), vc("selectionchange", !1, l));
    }
  }
  function Qr(t, l, a, e) {
    switch (tm(l)) {
      case 2:
        var u = _y;
        break;
      case 8:
        u = Dy;
        break;
      default:
        u = co;
    }
    ((a = u.bind(null, l, a, t)),
      (u = void 0),
      !Uc ||
        (l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? t.addEventListener(l, a, { capture: !0, passive: u })
          : t.addEventListener(l, a, !0)
        : u !== void 0
          ? t.addEventListener(l, a, { passive: u })
          : t.addEventListener(l, a, !1));
  }
  function yc(t, l, a, e, u) {
    var n = e;
    if ((l & 1) === 0 && (l & 2) === 0 && e !== null)
      t: for (;;) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Za(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    X0(function () {
      var r = n,
        p = zf(a),
        h = [];
      t: {
        var v = ld.get(t);
        if (v !== void 0) {
          var y = ti,
            z = t;
          switch (t) {
            case "keypress":
              if (rn(a) === 0) break t;
            case "keydown":
            case "keyup":
              y = W1;
              break;
            case "focusin":
              ((z = "focus"), (y = wi));
              break;
            case "focusout":
              ((z = "blur"), (y = wi));
              break;
            case "beforeblur":
            case "afterblur":
              y = wi;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = es;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = j1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = P1;
              break;
            case $0:
            case I0:
            case P0:
              y = Q1;
              break;
            case td:
              y = lv;
              break;
            case "scroll":
            case "scrollend":
              y = q1;
              break;
            case "wheel":
              y = ev;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = Z1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = ns;
              break;
            case "toggle":
            case "beforetoggle":
              y = nv;
          }
          var T = (l & 4) !== 0,
            R = !T && (t === "scroll" || t === "scrollend"),
            d = T ? (v !== null ? v + "Capture" : null) : v;
          T = [];
          for (var s = r, m; s !== null; ) {
            var g = s;
            if (
              ((m = g.stateNode),
              (g = g.tag),
              (g !== 5 && g !== 26 && g !== 27) ||
                m === null ||
                d === null ||
                ((g = fu(s, d)), g != null && T.push(hu(s, g, m))),
              R)
            )
              break;
            s = s.return;
          }
          0 < T.length &&
            ((v = new y(v, z, null, a, p)), h.push({ event: v, listeners: T }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((v = t === "mouseover" || t === "pointerover"),
            (y = t === "mouseout" || t === "pointerout"),
            v &&
              a !== Dc &&
              (z = a.relatedTarget || a.fromElement) &&
              (Za(z) || z[he]))
          )
            break t;
          if (
            (y || v) &&
            ((v =
              p.window === p
                ? p
                : (v = p.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            y
              ? ((z = a.relatedTarget || a.toElement),
                (y = r),
                (z = z ? Za(z) : null),
                z !== null &&
                  ((R = zu(z)),
                  (T = z.tag),
                  z !== R || (T !== 5 && T !== 27 && T !== 6)) &&
                  (z = null))
              : ((y = null), (z = r)),
            y !== z)
          ) {
            if (
              ((T = es),
              (g = "onMouseLeave"),
              (d = "onMouseEnter"),
              (s = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((T = ns),
                (g = "onPointerLeave"),
                (d = "onPointerEnter"),
                (s = "pointer")),
              (R = y == null ? v : Ke(y)),
              (m = z == null ? v : Ke(z)),
              (v = new T(g, s + "leave", y, a, p)),
              (v.target = R),
              (v.relatedTarget = m),
              (g = null),
              Za(p) === r &&
                ((T = new T(d, s + "enter", z, a, p)),
                (T.target = m),
                (T.relatedTarget = R),
                (g = T)),
              (R = g),
              y && z)
            )
              l: {
                for (T = ay, d = y, s = z, m = 0, g = d; g; g = T(g)) m++;
                g = 0;
                for (var E = s; E; E = T(E)) g++;
                for (; 0 < m - g; ) ((d = T(d)), m--);
                for (; 0 < g - m; ) ((s = T(s)), g--);
                for (; m--; ) {
                  if (d === s || (s !== null && d === s.alternate)) {
                    T = d;
                    break l;
                  }
                  ((d = T(d)), (s = T(s)));
                }
                T = null;
              }
            else T = null;
            (y !== null && $s(h, v, y, T, !1),
              z !== null && R !== null && $s(h, R, z, T, !0));
          }
        }
        t: {
          if (
            ((v = r ? Ke(r) : window),
            (y = v.nodeName && v.nodeName.toLowerCase()),
            y === "select" || (y === "input" && v.type === "file"))
          )
            var U = os;
          else if (fs(v))
            if (J0) U = yv;
            else {
              U = mv;
              var x = rv;
            }
          else
            ((y = v.nodeName),
              !y ||
              y.toLowerCase() !== "input" ||
              (v.type !== "checkbox" && v.type !== "radio")
                ? r && Sf(r.elementType) && (U = os)
                : (U = vv));
          if (U && (U = U(t, r))) {
            K0(h, U, a, p);
            break t;
          }
          (x && x(t, v, r),
            t === "focusout" &&
              r &&
              v.type === "number" &&
              r.memoizedProps.value != null &&
              _c(v, "number", v.value));
        }
        switch (((x = r ? Ke(r) : window), t)) {
          case "focusin":
            (fs(x) || x.contentEditable === "true") &&
              ((Ja = x), (Cc = r), (We = null));
            break;
          case "focusout":
            We = Cc = Ja = null;
            break;
          case "mousedown":
            Bc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Bc = !1), ms(h, a, p));
            break;
          case "selectionchange":
            if (hv) break;
          case "keydown":
          case "keyup":
            ms(h, a, p);
        }
        var M;
        if (Tf)
          t: {
            switch (t) {
              case "compositionstart":
                var N = "onCompositionStart";
                break t;
              case "compositionend":
                N = "onCompositionEnd";
                break t;
              case "compositionupdate":
                N = "onCompositionUpdate";
                break t;
            }
            N = void 0;
          }
        else
          Ka
            ? Z0(t, a) && (N = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (N = "onCompositionStart");
        (N &&
          (V0 &&
            a.locale !== "ko" &&
            (Ka || N !== "onCompositionStart"
              ? N === "onCompositionEnd" && Ka && (M = Q0())
              : ((Zl = p),
                (xf = "value" in Zl ? Zl.value : Zl.textContent),
                (Ka = !0))),
          (x = Jn(r, N)),
          0 < x.length &&
            ((N = new us(N, t, null, a, p)),
            h.push({ event: N, listeners: x }),
            M ? (N.data = M) : ((M = L0(a)), M !== null && (N.data = M)))),
          (M = cv ? fv(t, a) : ov(t, a)) &&
            ((N = Jn(r, "onBeforeInput")),
            0 < N.length &&
              ((x = new us("onBeforeInput", "beforeinput", null, a, p)),
              h.push({ event: x, listeners: N }),
              (x.data = M))),
          ty(h, t, r, a, p));
      }
      Xr(h, l);
    });
  }
  function hu(t, l, a) {
    return { instance: t, listener: l, currentTarget: a };
  }
  function Jn(t, l) {
    for (var a = l + "Capture", e = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = fu(t, a)),
          u != null && e.unshift(hu(t, u, n)),
          (u = fu(t, l)),
          u != null && e.push(hu(t, u, n))),
        t.tag === 3)
      )
        return e;
      t = t.return;
    }
    return [];
  }
  function ay(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function $s(t, l, a, e, u) {
    for (var n = l._reactName, i = []; a !== null && a !== e; ) {
      var c = a,
        f = c.alternate,
        r = c.stateNode;
      if (((c = c.tag), f !== null && f === e)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        r === null ||
        ((f = r),
        u
          ? ((r = fu(a, n)), r != null && i.unshift(hu(a, r, f)))
          : u || ((r = fu(a, n)), r != null && i.push(hu(a, r, f)))),
        (a = a.return));
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var ey = /\r\n?/g,
    uy = /\u0000|\uFFFD/g;
  function Is(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        ey,
        `
`,
      )
      .replace(uy, "");
  }
  function Vr(t, l) {
    return ((l = Is(l)), Is(t) === l);
  }
  function Z(t, l, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? l === "body" || (l === "textarea" && e === "") || fe(t, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            l !== "body" &&
            fe(t, "" + e);
        break;
      case "className":
        ku(t, "class", e);
        break;
      case "tabIndex":
        ku(t, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ku(t, a, e);
        break;
      case "style":
        G0(t, e, n);
        break;
      case "data":
        if (l !== "object") {
          ku(t, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (l !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        ((e = sn("" + e)), t.setAttribute(a, e));
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (l !== "input" && Z(t, l, "name", u.name, u, null),
                Z(t, l, "formEncType", u.formEncType, u, null),
                Z(t, l, "formMethod", u.formMethod, u, null),
                Z(t, l, "formTarget", u.formTarget, u, null))
              : (Z(t, l, "encType", u.encType, u, null),
                Z(t, l, "method", u.method, u, null),
                Z(t, l, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          t.removeAttribute(a);
          break;
        }
        ((e = sn("" + e)), t.setAttribute(a, e));
        break;
      case "onClick":
        e != null && (t.onclick = xl);
        break;
      case "onScroll":
        e != null && C("scroll", t);
        break;
      case "onScrollEnd":
        e != null && C("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(S(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(S(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        t.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((a = sn("" + e)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? t.setAttribute(a, "" + e)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? t.setAttribute(a, "")
          : e !== !1 &&
              e != null &&
              typeof e != "function" &&
              typeof e != "symbol"
            ? t.setAttribute(a, e)
            : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? t.setAttribute(a, e)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? t.removeAttribute(a)
          : t.setAttribute(a, e);
        break;
      case "popover":
        (C("beforetoggle", t), C("toggle", t), on(t, "popover", e));
        break;
      case "xlinkActuate":
        vl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        vl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        vl(t, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        vl(t, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        vl(t, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        vl(t, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        vl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        vl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        vl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        on(t, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = R1.get(a) || a), on(t, a, e));
    }
  }
  function ef(t, l, a, e, u, n) {
    switch (a) {
      case "style":
        G0(t, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(S(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(S(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? fe(t, e)
          : (typeof e == "number" || typeof e == "bigint") && fe(t, "" + e);
        break;
      case "onScroll":
        e != null && C("scroll", t);
        break;
      case "onScrollEnd":
        e != null && C("scrollend", t);
        break;
      case "onClick":
        e != null && (t.onclick = xl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!B0.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (l = a.slice(2, u ? a.length - 7 : void 0)),
              (n = t[Ut] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && t.removeEventListener(l, n, u),
              typeof e == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(l, e, u));
              break t;
            }
            a in t
              ? (t[a] = e)
              : e === !0
                ? t.setAttribute(a, "")
                : on(t, a, e);
          }
    }
  }
  function bt(t, l, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (C("error", t), C("load", t));
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(S(137, l));
                default:
                  Z(t, l, n, i, a, null);
              }
          }
        (u && Z(t, l, "srcSet", a.srcSet, a, null),
          e && Z(t, l, "src", a.src, a, null));
        return;
      case "input":
        C("invalid", t);
        var c = (n = i = u = null),
          f = null,
          r = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var p = a[e];
            if (p != null)
              switch (e) {
                case "name":
                  u = p;
                  break;
                case "type":
                  i = p;
                  break;
                case "checked":
                  f = p;
                  break;
                case "defaultChecked":
                  r = p;
                  break;
                case "value":
                  n = p;
                  break;
                case "defaultValue":
                  c = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null) throw Error(S(137, l));
                  break;
                default:
                  Z(t, l, e, p, a, null);
              }
          }
        q0(t, n, c, f, r, i, u, !1);
        return;
      case "select":
        (C("invalid", t), (e = i = n = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((c = a[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                Z(t, l, u, c, a, null);
            }
        ((l = n),
          (a = i),
          (t.multiple = !!e),
          l != null ? te(t, !!e, l, !1) : a != null && te(t, !!e, a, !0));
        return;
      case "textarea":
        (C("invalid", t), (n = u = e = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(S(91));
                break;
              default:
                Z(t, l, i, c, a, null);
            }
        j0(t, e, u, n);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && ((e = a[f]), e != null))
            switch (f) {
              case "selected":
                t.selected =
                  e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                Z(t, l, f, e, a, null);
            }
        return;
      case "dialog":
        (C("beforetoggle", t), C("toggle", t), C("cancel", t), C("close", t));
        break;
      case "iframe":
      case "object":
        C("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < pu.length; e++) C(pu[e], t);
        break;
      case "image":
        (C("error", t), C("load", t));
        break;
      case "details":
        C("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (C("error", t), C("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (r in a)
          if (a.hasOwnProperty(r) && ((e = a[r]), e != null))
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(S(137, l));
              default:
                Z(t, l, r, e, a, null);
            }
        return;
      default:
        if (Sf(l)) {
          for (p in a)
            a.hasOwnProperty(p) &&
              ((e = a[p]), e !== void 0 && ef(t, l, p, e, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((e = a[c]), e != null && Z(t, l, c, e, a, null));
  }
  function ny(t, l, a, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          c = null,
          f = null,
          r = null,
          p = null;
        for (y in a) {
          var h = a[y];
          if (a.hasOwnProperty(y) && h != null)
            switch (y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = h;
              default:
                e.hasOwnProperty(y) || Z(t, l, y, null, e, h);
            }
        }
        for (var v in e) {
          var y = e[v];
          if (((h = a[v]), e.hasOwnProperty(v) && (y != null || h != null)))
            switch (v) {
              case "type":
                n = y;
                break;
              case "name":
                u = y;
                break;
              case "checked":
                r = y;
                break;
              case "defaultChecked":
                p = y;
                break;
              case "value":
                i = y;
                break;
              case "defaultValue":
                c = y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(S(137, l));
                break;
              default:
                y !== h && Z(t, l, v, y, e, h);
            }
        }
        Nc(t, i, c, f, r, p, n, u);
        return;
      case "select":
        y = i = c = v = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                y = f;
              default:
                e.hasOwnProperty(n) || Z(t, l, n, null, e, f);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (f = a[u]),
            e.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && Z(t, l, u, n, e, f);
            }
        ((l = c),
          (a = i),
          (e = y),
          v != null
            ? te(t, !!a, v, !1)
            : !!e != !!a &&
              (l != null ? te(t, !!a, l, !0) : te(t, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        y = v = null;
        for (c in a)
          if (
            ((u = a[c]),
            a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                Z(t, l, c, null, e, u);
            }
        for (i in e)
          if (
            ((u = e[i]),
            (n = a[i]),
            e.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                y = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(S(91));
                break;
              default:
                u !== n && Z(t, l, i, u, e, n);
            }
        Y0(t, v, y);
        return;
      case "option":
        for (var z in a)
          if (
            ((v = a[z]),
            a.hasOwnProperty(z) && v != null && !e.hasOwnProperty(z))
          )
            switch (z) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Z(t, l, z, null, e, v);
            }
        for (f in e)
          if (
            ((v = e[f]),
            (y = a[f]),
            e.hasOwnProperty(f) && v !== y && (v != null || y != null))
          )
            switch (f) {
              case "selected":
                t.selected =
                  v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                Z(t, l, f, v, e, y);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var T in a)
          ((v = a[T]),
            a.hasOwnProperty(T) &&
              v != null &&
              !e.hasOwnProperty(T) &&
              Z(t, l, T, null, e, v));
        for (r in e)
          if (
            ((v = e[r]),
            (y = a[r]),
            e.hasOwnProperty(r) && v !== y && (v != null || y != null))
          )
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(S(137, l));
                break;
              default:
                Z(t, l, r, v, e, y);
            }
        return;
      default:
        if (Sf(l)) {
          for (var R in a)
            ((v = a[R]),
              a.hasOwnProperty(R) &&
                v !== void 0 &&
                !e.hasOwnProperty(R) &&
                ef(t, l, R, void 0, e, v));
          for (p in e)
            ((v = e[p]),
              (y = a[p]),
              !e.hasOwnProperty(p) ||
                v === y ||
                (v === void 0 && y === void 0) ||
                ef(t, l, p, v, e, y));
          return;
        }
    }
    for (var d in a)
      ((v = a[d]),
        a.hasOwnProperty(d) &&
          v != null &&
          !e.hasOwnProperty(d) &&
          Z(t, l, d, null, e, v));
    for (h in e)
      ((v = e[h]),
        (y = a[h]),
        !e.hasOwnProperty(h) ||
          v === y ||
          (v == null && y == null) ||
          Z(t, l, h, v, e, y));
  }
  function Ps(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function iy() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, l = 0, a = performance.getEntriesByType("resource"), e = 0;
        e < a.length;
        e++
      ) {
        var u = a[e],
          n = u.transferSize,
          i = u.initiatorType,
          c = u.duration;
        if (n && c && Ps(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e],
              r = f.startTime;
            if (r > c) break;
            var p = f.transferSize,
              h = f.initiatorType;
            p &&
              Ps(h) &&
              ((f = f.responseEnd), (i += p * (f < c ? 1 : (c - r) / (f - r))));
          }
          if ((--e, (l += (8 * (n + i)) / (u.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var uf = null,
    nf = null;
  function wn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function t0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zr(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function cf(t, l) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof l.children == "string" ||
      typeof l.children == "number" ||
      typeof l.children == "bigint" ||
      (typeof l.dangerouslySetInnerHTML == "object" &&
        l.dangerouslySetInnerHTML !== null &&
        l.dangerouslySetInnerHTML.__html != null)
    );
  }
  var pc = null;
  function cy() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === pc
        ? !1
        : ((pc = t), !0)
      : ((pc = null), !1);
  }
  var Lr = typeof setTimeout == "function" ? setTimeout : void 0,
    fy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    l0 = typeof Promise == "function" ? Promise : void 0,
    oy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof l0 < "u"
          ? function (t) {
              return l0.resolve(null).then(t).catch(sy);
            }
          : Lr;
  function sy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ca(t) {
    return t === "head";
  }
  function a0(t, l) {
    var a = l,
      e = 0;
    do {
      var u = a.nextSibling;
      if ((t.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (e === 0) {
            (t.removeChild(u), pe(l));
            return;
          }
          e--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          e++;
        else if (a === "html") iu(t.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = t.ownerDocument.head), iu(a));
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            (n[Au] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = i));
          }
        } else a === "body" && iu(t.ownerDocument.body);
      a = u;
    } while (a);
    pe(l);
  }
  function e0(t, l) {
    var a = t;
    t = 0;
    do {
      var e = a.nextSibling;
      if (
        (a.nodeType === 1
          ? l
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (l
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        e && e.nodeType === 8)
      )
        if (((a = e.data), a === "/$")) {
          if (t === 0) break;
          t--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || t++;
      a = e;
    } while (a);
  }
  function ff(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var a = l;
      switch (((l = l.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ff(a), bf(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function dy(t, l, a, e) {
    for (; t.nodeType === 1; ) {
      var u = a;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!e && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (e) {
        if (!t[Au])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = Pt(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function ry(t, l, a) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = Pt(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Kr(t, l) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Pt(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function of(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function sf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function my(t, l) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || a.readyState !== "loading") l();
    else {
      var e = function () {
        (l(), a.removeEventListener("DOMContentLoaded", e));
      };
      (a.addEventListener("DOMContentLoaded", e), (t._reactRetry = e));
    }
  }
  function Pt(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (
          ((l = t.data),
          l === "$" ||
            l === "$!" ||
            l === "$?" ||
            l === "$~" ||
            l === "&" ||
            l === "F!" ||
            l === "F")
        )
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var df = null;
  function u0(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (l === 0) return Pt(t.nextSibling);
          l--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function n0(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (l === 0) return t;
          l--;
        } else (a !== "/$" && a !== "/&") || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Jr(t, l, a) {
    switch (((l = wn(a)), t)) {
      case "html":
        if (((t = l.documentElement), !t)) throw Error(S(452));
        return t;
      case "head":
        if (((t = l.head), !t)) throw Error(S(453));
        return t;
      case "body":
        if (((t = l.body), !t)) throw Error(S(454));
        return t;
      default:
        throw Error(S(451));
    }
  }
  function iu(t) {
    for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
    bf(t);
  }
  var tl = new Map(),
    i0 = new Set();
  function kn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Cl = G.d;
  G.d = { f: vy, r: yy, D: py, C: hy, L: gy, m: by, X: zy, S: Sy, M: xy };
  function vy() {
    var t = Cl.f(),
      l = di();
    return t || l;
  }
  function yy(t) {
    var l = ge(t);
    l !== null && l.tag === 5 && l.type === "form" ? Gd(l) : Cl.r(t);
  }
  var xe = typeof document > "u" ? null : document;
  function wr(t, l, a) {
    var e = xe;
    if (e && typeof l == "string" && l) {
      var u = Ft(l);
      ((u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        i0.has(u) ||
          (i0.add(u),
          (t = { rel: t, crossOrigin: a, href: l }),
          e.querySelector(u) === null &&
            ((l = e.createElement("link")),
            bt(l, "link", t),
            mt(l),
            e.head.appendChild(l))));
    }
  }
  function py(t) {
    (Cl.D(t), wr("dns-prefetch", t, null));
  }
  function hy(t, l) {
    (Cl.C(t, l), wr("preconnect", t, l));
  }
  function gy(t, l, a) {
    Cl.L(t, l, a);
    var e = xe;
    if (e && t && l) {
      var u = 'link[rel="preload"][as="' + Ft(l) + '"]';
      l === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + Ft(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + Ft(a.imageSizes) + '"]'))
        : (u += '[href="' + Ft(t) + '"]');
      var n = u;
      switch (l) {
        case "style":
          n = ye(t);
          break;
        case "script":
          n = Ee(t);
      }
      tl.has(n) ||
        ((t = W(
          {
            rel: "preload",
            href: l === "image" && a && a.imageSrcSet ? void 0 : t,
            as: l,
          },
          a,
        )),
        tl.set(n, t),
        e.querySelector(u) !== null ||
          (l === "style" && e.querySelector(Uu(n))) ||
          (l === "script" && e.querySelector(Cu(n))) ||
          ((l = e.createElement("link")),
          bt(l, "link", t),
          mt(l),
          e.head.appendChild(l)));
    }
  }
  function by(t, l) {
    Cl.m(t, l);
    var a = xe;
    if (a && t) {
      var e = l && typeof l.as == "string" ? l.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Ft(e) + '"][href="' + Ft(t) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ee(t);
      }
      if (
        !tl.has(n) &&
        ((t = W({ rel: "modulepreload", href: t }, l)),
        tl.set(n, t),
        a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Cu(n))) return;
        }
        ((e = a.createElement("link")),
          bt(e, "link", t),
          mt(e),
          a.head.appendChild(e));
      }
    }
  }
  function Sy(t, l, a) {
    Cl.S(t, l, a);
    var e = xe;
    if (e && t) {
      var u = Pa(e).hoistableStyles,
        n = ye(t);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = e.querySelector(Uu(n)))) c.loading = 5;
        else {
          ((t = W({ rel: "stylesheet", href: t, "data-precedence": l }, a)),
            (a = tl.get(n)) && uo(t, a));
          var f = (i = e.createElement("link"));
          (mt(f),
            bt(f, "link", t),
            (f._p = new Promise(function (r, p) {
              ((f.onload = r), (f.onerror = p));
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Sn(i, l, e));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i));
      }
    }
  }
  function zy(t, l) {
    Cl.X(t, l);
    var a = xe;
    if (a && t) {
      var e = Pa(a).hoistableScripts,
        u = Ee(t),
        n = e.get(u);
      n ||
        ((n = a.querySelector(Cu(u))),
        n ||
          ((t = W({ src: t, async: !0 }, l)),
          (l = tl.get(u)) && no(t, l),
          (n = a.createElement("script")),
          mt(n),
          bt(n, "link", t),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function xy(t, l) {
    Cl.M(t, l);
    var a = xe;
    if (a && t) {
      var e = Pa(a).hoistableScripts,
        u = Ee(t),
        n = e.get(u);
      n ||
        ((n = a.querySelector(Cu(u))),
        n ||
          ((t = W({ src: t, async: !0, type: "module" }, l)),
          (l = tl.get(u)) && no(t, l),
          (n = a.createElement("script")),
          mt(n),
          bt(n, "link", t),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function c0(t, l, a, e) {
    var u = (u = wl.current) ? kn(u) : null;
    if (!u) throw Error(S(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((l = ye(a.href)),
            (a = Pa(u).hoistableStyles),
            (e = a.get(l)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(l, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = ye(a.href);
          var n = Pa(u).hoistableStyles,
            i = n.get(t);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, i),
              (n = u.querySelector(Uu(t))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              tl.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                tl.set(t, a),
                n || Ey(u, t, a, i.state))),
            l && e === null)
          )
            throw Error(S(528, ""));
          return i;
        }
        if (l && e !== null) throw Error(S(529, ""));
        return null;
      case "script":
        return (
          (l = a.async),
          (a = a.src),
          typeof a == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = Ee(a)),
              (a = Pa(u).hoistableScripts),
              (e = a.get(l)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(l, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(S(444, t));
    }
  }
  function ye(t) {
    return 'href="' + Ft(t) + '"';
  }
  function Uu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function kr(t) {
    return W({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Ey(t, l, a, e) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]")
      ? (e.loading = 1)
      : ((l = t.createElement("link")),
        (e.preload = l),
        l.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        l.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        bt(l, "link", a),
        mt(l),
        t.head.appendChild(l));
  }
  function Ee(t) {
    return '[src="' + Ft(t) + '"]';
  }
  function Cu(t) {
    return "script[async]" + t;
  }
  function f0(t, l, a) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var e = t.querySelector('style[data-href~="' + Ft(a.href) + '"]');
          if (e) return ((l.instance = e), mt(e), e);
          var u = W({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (t.ownerDocument || t).createElement("style")),
            mt(e),
            bt(e, "style", u),
            Sn(e, a.precedence, t),
            (l.instance = e)
          );
        case "stylesheet":
          u = ye(a.href);
          var n = t.querySelector(Uu(u));
          if (n) return ((l.state.loading |= 4), (l.instance = n), mt(n), n);
          ((e = kr(a)),
            (u = tl.get(u)) && uo(e, u),
            (n = (t.ownerDocument || t).createElement("link")),
            mt(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              ((i.onload = c), (i.onerror = f));
            })),
            bt(n, "link", e),
            (l.state.loading |= 4),
            Sn(n, a.precedence, t),
            (l.instance = n)
          );
        case "script":
          return (
            (n = Ee(a.src)),
            (u = t.querySelector(Cu(n)))
              ? ((l.instance = u), mt(u), u)
              : ((e = a),
                (u = tl.get(n)) && ((e = W({}, a)), no(e, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                mt(u),
                bt(u, "link", e),
                t.head.appendChild(u),
                (l.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(S(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((e = l.instance), (l.state.loading |= 4), Sn(e, a.precedence, t));
    return l.instance;
  }
  function Sn(t, l, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        i = 0;
      i < e.length;
      i++
    ) {
      var c = e[i];
      if (c.dataset.precedence === l) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((l = a.nodeType === 9 ? a.head : a), l.insertBefore(t, l.firstChild));
  }
  function uo(t, l) {
    (t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title));
  }
  function no(t, l) {
    (t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity));
  }
  var zn = null;
  function o0(t, l, a) {
    if (zn === null) {
      var e = new Map(),
        u = (zn = new Map());
      u.set(a, e);
    } else ((u = zn), (e = u.get(a)), e || ((e = new Map()), u.set(a, e)));
    if (e.has(t)) return e;
    for (
      e.set(t, null), a = a.getElementsByTagName(t), u = 0;
      u < a.length;
      u++
    ) {
      var n = a[u];
      if (
        !(
          n[Au] ||
          n[pt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function s0(t, l, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        l === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function Ty(t, l, a) {
    if (a === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof l.precedence != "string" ||
          typeof l.href != "string" ||
          l.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof l.rel != "string" ||
          typeof l.href != "string" ||
          l.href === "" ||
          l.onLoad ||
          l.onError
        )
          break;
        switch (l.rel) {
          case "stylesheet":
            return (
              (t = l.disabled),
              typeof l.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          l.async &&
          typeof l.async != "function" &&
          typeof l.async != "symbol" &&
          !l.onLoad &&
          !l.onError &&
          l.src &&
          typeof l.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Fr(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Ay(t, l, a, e) {
    if (
      a.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = ye(e.href),
          n = l.querySelector(Uu(u));
        if (n) {
          ((l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (t.count++, (t = Fn.bind(t)), l.then(t, t)),
            (a.state.loading |= 4),
            (a.instance = n),
            mt(n));
          return;
        }
        ((n = l.ownerDocument || l),
          (e = kr(e)),
          (u = tl.get(u)) && uo(e, u),
          (n = n.createElement("link")),
          mt(n));
        var i = n;
        ((i._p = new Promise(function (c, f) {
          ((i.onload = c), (i.onerror = f));
        })),
          bt(n, "link", e),
          (a.instance = n));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(a, l),
        (l = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (t.count++,
          (a = Fn.bind(t)),
          l.addEventListener("load", a),
          l.addEventListener("error", a)));
    }
  }
  var hc = 0;
  function My(t, l) {
    return (
      t.stylesheets && t.count === 0 && xn(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (a) {
            var e = setTimeout(function () {
              if ((t.stylesheets && xn(t, t.stylesheets), t.unsuspend)) {
                var n = t.unsuspend;
                ((t.unsuspend = null), n());
              }
            }, 6e4 + l);
            0 < t.imgBytes && hc === 0 && (hc = 62500 * iy());
            var u = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && xn(t, t.stylesheets), t.unsuspend))
                ) {
                  var n = t.unsuspend;
                  ((t.unsuspend = null), n());
                }
              },
              (t.imgBytes > hc ? 50 : 800) + l,
            );
            return (
              (t.unsuspend = a),
              function () {
                ((t.unsuspend = null), clearTimeout(e), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Fn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) xn(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Wn = null;
  function xn(t, l) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Wn = new Map()),
        l.forEach(Oy, t),
        (Wn = null),
        Fn.call(t)));
  }
  function Oy(t, l) {
    if (!(l.state.loading & 4)) {
      var a = Wn.get(t);
      if (a) var e = a.get(null);
      else {
        ((a = new Map()), Wn.set(t, a));
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (e = i));
        }
        e && a.set(null, e);
      }
      ((u = l.instance),
        (i = u.getAttribute("data-precedence")),
        (n = a.get(i) || e),
        n === e && a.set(null, u),
        a.set(i, u),
        this.count++,
        (e = Fn.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (l.state.loading |= 4));
    }
  }
  var gu = {
    $$typeof: zl,
    Provider: null,
    Consumer: null,
    _currentValue: ma,
    _currentValue2: ma,
    _threadCount: 0,
  };
  function Ny(t, l, a, e, u, n, i, c, f) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Zi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zi(0)),
      (this.hiddenUpdates = Zi(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function Wr(t, l, a, e, u, n, i, c, f, r, p, h) {
    return (
      (t = new Ny(t, l, a, i, f, r, p, h, c)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = qt(3, null, null, l)),
      (t.current = n),
      (n.stateNode = t),
      (l = Uf()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: l }),
      Rf(n),
      t
    );
  }
  function $r(t) {
    return t ? ((t = Fa), t) : Fa;
  }
  function Ir(t, l, a, e, u, n) {
    ((u = $r(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = Fl(l)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = Wl(t, e, l)),
      a !== null && (Dt(a, t, l), Ie(a, t, l)));
  }
  function d0(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < l ? a : l;
    }
  }
  function io(t, l) {
    (d0(t, l), (t = t.alternate) && d0(t, l));
  }
  function Pr(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Ma(t, 67108864);
      (l !== null && Dt(l, t, 67108864), io(t, 67108864));
    }
  }
  function r0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Qt();
      l = hf(l);
      var a = Ma(t, l);
      (a !== null && Dt(a, t, l), io(t, l));
    }
  }
  var $n = !0;
  function _y(t, l, a, e) {
    var u = O.T;
    O.T = null;
    var n = G.p;
    try {
      ((G.p = 2), co(t, l, a, e));
    } finally {
      ((G.p = n), (O.T = u));
    }
  }
  function Dy(t, l, a, e) {
    var u = O.T;
    O.T = null;
    var n = G.p;
    try {
      ((G.p = 8), co(t, l, a, e));
    } finally {
      ((G.p = n), (O.T = u));
    }
  }
  function co(t, l, a, e) {
    if ($n) {
      var u = rf(e);
      if (u === null) (yc(t, l, e, In, a), m0(t, e));
      else if (Cy(u, t, l, a, e)) e.stopPropagation();
      else if ((m0(t, e), l & 4 && -1 < Uy.indexOf(t))) {
        for (; u !== null; ) {
          var n = ge(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = sa(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - Xt(i));
                      ((c.entanglements[1] |= f), (i &= ~f));
                    }
                    (dl(n), (j & 6) === 0 && ((Qn = jt() + 500), Du(0, !1)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = Ma(n, 2)), c !== null && Dt(c, n, 2), di(), io(n, 2));
            }
          if (((n = rf(e)), n === null && yc(t, l, e, In, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else yc(t, l, e, null, a);
    }
  }
  function rf(t) {
    return ((t = zf(t)), fo(t));
  }
  var In = null;
  function fo(t) {
    if (((In = null), (t = Za(t)), t !== null)) {
      var l = zu(t);
      if (l === null) t = null;
      else {
        var a = l.tag;
        if (a === 13) {
          if (((t = b0(l)), t !== null)) return t;
          t = null;
        } else if (a === 31) {
          if (((t = S0(l)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return ((In = t), null);
  }
  function tm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (g1()) {
          case T0:
            return 2;
          case A0:
            return 8;
          case On:
          case b1:
            return 32;
          case M0:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var mf = !1,
    Pl = null,
    ta = null,
    la = null,
    bu = new Map(),
    Su = new Map(),
    Ql = [],
    Uy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function m0(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Pl = null;
        break;
      case "dragenter":
      case "dragleave":
        ta = null;
        break;
      case "mouseover":
      case "mouseout":
        la = null;
        break;
      case "pointerover":
      case "pointerout":
        bu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Su.delete(l.pointerId);
    }
  }
  function Qe(t, l, a, e, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: l,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        l !== null && ((l = ge(l)), l !== null && Pr(l)),
        t)
      : ((t.eventSystemFlags |= e),
        (l = t.targetContainers),
        u !== null && l.indexOf(u) === -1 && l.push(u),
        t);
  }
  function Cy(t, l, a, e, u) {
    switch (l) {
      case "focusin":
        return ((Pl = Qe(Pl, t, l, a, e, u)), !0);
      case "dragenter":
        return ((ta = Qe(ta, t, l, a, e, u)), !0);
      case "mouseover":
        return ((la = Qe(la, t, l, a, e, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (bu.set(n, Qe(bu.get(n) || null, t, l, a, e, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          Su.set(n, Qe(Su.get(n) || null, t, l, a, e, u)),
          !0
        );
    }
    return !1;
  }
  function lm(t) {
    var l = Za(t.target);
    if (l !== null) {
      var a = zu(l);
      if (a !== null) {
        if (((l = a.tag), l === 13)) {
          if (((l = b0(a)), l !== null)) {
            ((t.blockedOn = l),
              Wo(t.priority, function () {
                r0(a);
              }));
            return;
          }
        } else if (l === 31) {
          if (((l = S0(a)), l !== null)) {
            ((t.blockedOn = l),
              Wo(t.priority, function () {
                r0(a);
              }));
            return;
          }
        } else if (l === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function En(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var a = rf(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var e = new a.constructor(a.type, a);
        ((Dc = e), a.target.dispatchEvent(e), (Dc = null));
      } else return ((l = ge(a)), l !== null && Pr(l), (t.blockedOn = a), !1);
      l.shift();
    }
    return !0;
  }
  function v0(t, l, a) {
    En(t) && a.delete(l);
  }
  function By() {
    ((mf = !1),
      Pl !== null && En(Pl) && (Pl = null),
      ta !== null && En(ta) && (ta = null),
      la !== null && En(la) && (la = null),
      bu.forEach(v0),
      Su.forEach(v0));
  }
  function cn(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      mf ||
        ((mf = !0),
        dt.unstable_scheduleCallback(dt.unstable_NormalPriority, By)));
  }
  var fn = null;
  function y0(t) {
    fn !== t &&
      ((fn = t),
      dt.unstable_scheduleCallback(dt.unstable_NormalPriority, function () {
        fn === t && (fn = null);
        for (var l = 0; l < t.length; l += 3) {
          var a = t[l],
            e = t[l + 1],
            u = t[l + 2];
          if (typeof e != "function") {
            if (fo(e || a) === null) continue;
            break;
          }
          var n = ge(a);
          n !== null &&
            (t.splice(l, 3),
            (l -= 3),
            Jc(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function pe(t) {
    function l(f) {
      return cn(f, t);
    }
    (Pl !== null && cn(Pl, t),
      ta !== null && cn(ta, t),
      la !== null && cn(la, t),
      bu.forEach(l),
      Su.forEach(l));
    for (var a = 0; a < Ql.length; a++) {
      var e = Ql[a];
      e.blockedOn === t && (e.blockedOn = null);
    }
    for (; 0 < Ql.length && ((a = Ql[0]), a.blockedOn === null); )
      (lm(a), a.blockedOn === null && Ql.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          i = u[Ut] || null;
        if (typeof n == "function") i || y0(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Ut] || null))) c = i.formAction;
            else if (fo(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (a[e + 1] = c) : (a.splice(e, 3), (e -= 3)),
            y0(a));
        }
      }
  }
  function am() {
    function t(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function l() {
      (u !== null && (u(), (u = null)), e || setTimeout(a, 20));
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var e = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", l),
        navigation.addEventListener("navigateerror", l),
        setTimeout(a, 100),
        function () {
          ((e = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", l),
            navigation.removeEventListener("navigateerror", l),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function oo(t) {
    this._internalRoot = t;
  }
  vi.prototype.render = oo.prototype.render = function (t) {
    var l = this._internalRoot;
    if (l === null) throw Error(S(409));
    var a = l.current,
      e = Qt();
    Ir(a, e, t, l, null, null);
  };
  vi.prototype.unmount = oo.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      (Ir(t.current, 2, null, t, null, null), di(), (l[he] = null));
    }
  };
  function vi(t) {
    this._internalRoot = t;
  }
  vi.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = U0();
      t = { blockedOn: null, target: t, priority: l };
      for (var a = 0; a < Ql.length && l !== 0 && l < Ql[a].priority; a++);
      (Ql.splice(a, 0, t), a === 0 && lm(t));
    }
  };
  var p0 = h0.version;
  if (p0 !== "19.2.6") throw Error(S(527, p0, "19.2.6"));
  G.findDOMNode = function (t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function"
        ? Error(S(188))
        : ((t = Object.keys(t).join(",")), Error(S(268, t)));
    return (
      (t = d1(l)),
      (t = t !== null ? z0(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Ry = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.6",
  };
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    ((Ve = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Ve.isDisabled && Ve.supportsFiber)
  )
    try {
      ((xu = Ve.inject(Ry)), (Gt = Ve));
    } catch {}
  var Ve;
  yi.createRoot = function (t, l) {
    if (!g0(t)) throw Error(S(299));
    var a = !1,
      e = "",
      u = wd,
      n = kd,
      i = Fd;
    return (
      l != null &&
        (l.unstable_strictMode === !0 && (a = !0),
        l.identifierPrefix !== void 0 && (e = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
        l.onCaughtError !== void 0 && (n = l.onCaughtError),
        l.onRecoverableError !== void 0 && (i = l.onRecoverableError)),
      (l = Wr(t, 1, !1, null, null, a, e, null, u, n, i, am)),
      (t[he] = l.current),
      eo(t),
      new oo(l)
    );
  };
  yi.hydrateRoot = function (t, l, a) {
    if (!g0(t)) throw Error(S(299));
    var e = !1,
      u = "",
      n = wd,
      i = kd,
      c = Fd,
      f = null;
    return (
      a != null &&
        (a.unstable_strictMode === !0 && (e = !0),
        a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
        a.onCaughtError !== void 0 && (i = a.onCaughtError),
        a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
        a.formState !== void 0 && (f = a.formState)),
      (l = Wr(t, 1, !0, l, a != null ? a : null, e, u, f, n, i, c, am)),
      (l.context = $r(null)),
      (a = l.current),
      (e = Qt()),
      (e = hf(e)),
      (u = Fl(e)),
      (u.callback = null),
      Wl(a, u, e),
      (a = e),
      (l.current.lanes = a),
      Tu(l, a),
      dl(l),
      (t[he] = l.current),
      eo(t),
      new vi(l)
    );
  };
  yi.version = "19.2.6";
});
var im = ul((up, nm) => {
  "use strict";
  function um() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um);
      } catch (t) {
        console.error(t);
      }
  }
  (um(), (nm.exports = em()));
});
var dm = ul((pi) => {
  "use strict";
  var Ly = Symbol.for("react.transitional.element"),
    Ky = Symbol.for("react.fragment");
  function sm(t, l, a) {
    var e = null;
    if (
      (a !== void 0 && (e = "" + a),
      l.key !== void 0 && (e = "" + l.key),
      "key" in l)
    ) {
      a = {};
      for (var u in l) u !== "key" && (a[u] = l[u]);
    } else a = l;
    return (
      (l = a.ref),
      { $$typeof: Ly, type: t, key: e, ref: l !== void 0 ? l : null, props: a }
    );
  }
  pi.Fragment = Ky;
  pi.jsx = sm;
  pi.jsxs = sm;
});
var so = ul((op, rm) => {
  "use strict";
  rm.exports = dm();
});
var X = Yu(Gu(), 1),
  gm = Yu(im(), 1);
var lt = {
    importDuty: {
      title: "GECEX\u7B2C532/2023\u53F7\u51B3\u8BAE",
      url: "https://www.in.gov.br/en/web/dou/-/resolucao-gecex-n-532-de-20-de-novembro-de-2023-524468810",
    },
    ipi: {
      title: "\u7B2C12,549/2025\u53F7\u6CD5\u4EE4\uFF08IPI Verde\uFF09",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12549.htm",
    },
    legacyFederal: {
      title: "\u7B2C10,865/2004\u53F7\u6CD5\u5F8B",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l10.865.htm",
    },
    reform: {
      title:
        "\u5BAA\u6CD5\u4FEE\u6B63\u6848\u7B2C132/2023\u53F7\u4E0E\u8865\u5145\u6CD5\u7B2C214/2025\u53F7",
      url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm",
    },
    afrmm: {
      title: "\u7B2C14,301/2022\u53F7\u6CD5\u5F8B",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/L14301.htm",
    },
    icms: {
      title: "\u8865\u5145\u6CD5\u7B2C87/1996\u53F7\uFF08Lei Kandir\uFF09",
      url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp87.htm",
    },
  },
  Hy = { 2026: "2026-07-01", 2027: "2027-07-01", 2028: "2028-07-01" };
function cm(t, l) {
  return Number.isFinite(t) && t > 0 ? t : l;
}
function qy(t) {
  return !Number.isFinite(t) || t <= 0
    ? 0
    : t <= 55
      ? -2.15
      : t <= 66
        ? -1.75
        : t <= 72
          ? -0.25
          : t <= 85
            ? 0
            : t <= 105
              ? 0.75
              : t <= 132
                ? 1.5
                : t <= 165
                  ? 3
                  : t <= 200
                    ? 3.5
                    : t <= 240
                      ? 4
                      : t <= 290
                        ? 6.25
                        : 6.5;
}
function Yy(t, l) {
  return t === "BEV"
    ? -2
    : t === "PHEV"
      ? l === "flex" || l === "ethanol"
        ? -2
        : l === "diesel"
          ? 3
          : 2
      : t === "HEV" || t === "REEV"
        ? l === "flex" || l === "ethanol"
          ? -1.5
          : l === "diesel"
            ? 4
            : 3
        : l === "ethanol"
          ? -0.5
          : l === "flex"
            ? 0
            : l === "diesel"
              ? 12
              : 6.5;
}
function jy(t) {
  return t === "tier1" ? -2 : t === "tier2" ? -1 : 0;
}
function Gy(t) {
  return t === "qualified" ? -1 : 0;
}
function Xy(t) {
  return t === "item17" ? -2 : t === "item18" ? -1 : 0;
}
function Qy(t, l, a, e) {
  return l !== "CBU"
    ? e === "low"
      ? 14
      : e === "high"
        ? 18
        : 16
    : t === "ICE"
      ? 35
      : a < "2024-07-01"
        ? t === "BEV"
          ? 10
          : 12
        : a < "2025-07-01"
          ? t === "BEV"
            ? 18
            : t === "HEV"
              ? 25
              : 20
          : a < "2026-07-01"
            ? t === "BEV"
              ? 25
              : t === "HEV"
                ? 30
                : 28
            : 35;
}
function Vy(t, l) {
  return t < 2027 ? 0 : l === "low" ? 8 : l === "high" ? 9.5 : 8.8;
}
function fm(t) {
  return t === 2026
    ? "\u53CC\u8F68\u6D4B\u8BD5\u5E74"
    : t === 2027
      ? "CBS\u4E0EIS\u542F\u52A8"
      : "CBS\u7A33\u5B9A\u8FD0\u884C\u671F";
}
function Zy(t, l) {
  if (t.importMode !== "CBU") return l === "low" ? 0 : l === "high" ? 6.3 : 3.9;
  let a =
    6.3 +
    Yy(t.energy, t.fuel) +
    qy(t.powerKw) +
    jy(t.efficiencyBand) +
    Gy(t.safetyBand) +
    Xy(t.recyclabilityBand) +
    (Number.isFinite(t.ipiExtraAdjustment) ? t.ipiExtraAdjustment : 0);
  return Math.max(0, a);
}
function Te(t, l = "base") {
  let a = [],
    e = [],
    u = [],
    n = cm(t.cif, 25e3),
    i = cm(t.freightRate, 5),
    c = t.entryDate || "2026-07-01",
    f = Number(c.slice(0, 4)),
    r = f >= 2027;
  ((Number.isFinite(t.cif) && t.cif > 0) ||
    e.push(
      "CIF\u4EF7\u683C\u65E0\u6709\u6548\u503C\uFF0C\u630925,000 USD\u4F30\u7B97",
    ),
    (Number.isFinite(t.freightRate) && t.freightRate > 0) ||
      e.push("\u6D77\u8FD0\u8D39\u6309CIF\u76845%\u4F30\u7B97"),
    t.ncm.trim() ||
      e.push(
        "\u672A\u586B\u5199NCM\uFF0C\u630987.03\u4E58\u7528\u8F66\u4EE3\u8868\u89C4\u5219\u6D4B\u7B97",
      ),
    t.importMode !== "CBU" &&
      e.push(
        `\u6574\u5957${t.importMode}\u6309\u96F6\u90E8\u4EF6\u7EFC\u5408\u7A0E\u7387${l === "base" ? "16%" : l === "low" ? "14%" : "18%"}\u89C4\u5212\u503C\u8BA1\u7B97\uFF1B\u7533\u62A5\u65F6\u987B\u6309BOM\u9010\u9879\u5F52\u7C7B`,
      ));
  let p = Qy(t.energy, t.importMode, c, l),
    h = n * (p / 100);
  a.push({
    name: "\u8FDB\u53E3\u7A0E",
    short: "II",
    rate: p,
    amount: h,
    base: n,
    color: "#2563eb",
    note:
      t.importMode === "CBU"
        ? "\u7A0E\u57FA\u4E3ACIF\uFF1B\u65B0\u80FD\u6E90\u6574\u8F66\u81EA2026\u5E747\u6708\u8D77\u56DE\u523035%"
        : "KD/CKD\u5FC5\u987B\u6309\u96F6\u90E8\u4EF6NCM\u548CBOM\u9010\u9879\u5F52\u7C7B\uFF0C\u6B64\u5904\u4E3A\u89C4\u5212\u533A\u95F4",
    ruleStatus: t.importMode === "CBU" ? "confirmed" : "estimate",
    sourceTitle: lt.importDuty.title,
    sourceUrl: lt.importDuty.url,
  });
  let v = 0;
  if (r)
    a.push({
      name: "\u5DE5\u4E1A\u4EA7\u54C1\u7A0E",
      short: "IPI",
      rate: 0,
      amount: 0,
      base: n + h,
      color: "#0f9f78",
      note: "2027\u5E74\u8D77\u4E00\u822C\u4EA7\u54C1\u7A0E\u7387\u964D\u4E3A\u96F6\uFF1B\u4E0E\u9A6C\u7459\u65AF\u81EA\u7531\u533A\u7ADE\u4E89\u7684\u4EA7\u54C1\u4F8B\u5916",
      ruleStatus: "confirmed",
      sourceTitle: lt.reform.title,
      sourceUrl: lt.reform.url,
    });
  else {
    let A = Zy(t, l),
      nt = n + h;
    ((v = nt * (A / 100)),
      a.push({
        name: "\u5DE5\u4E1A\u4EA7\u54C1\u7A0E",
        short: "IPI",
        rate: A,
        amount: v,
        base: nt,
        color: "#0f9f78",
        note:
          t.importMode === "CBU"
            ? "6.3%\u57FA\u51C6\u53E0\u52A0\u52A8\u529B\u3001\u529F\u7387\u3001\u80FD\u6548\u3001\u5B89\u5168\u53CA\u53EF\u56DE\u6536\u6027\u8C03\u6574"
            : "\u6574\u5957\u6563\u4EF6\u7F3A\u5C11BOM\u7A0E\u53F7\uFF0C\u4F7F\u75280%\u20146.3%\u89C4\u5212\u533A\u95F4",
        ruleStatus: t.importMode === "CBU" ? "confirmed" : "estimate",
        sourceTitle: lt.ipi.title,
        sourceUrl: lt.ipi.url,
      }),
      (!Number.isFinite(t.powerKw) || t.powerKw <= 0) &&
        e.push(
          "\u672A\u586B\u5199\u6700\u5927\u51C0\u529F\u7387\uFF0CIPI\u529F\u7387\u8C03\u6574\u6682\u63090\u4E2A\u767E\u5206\u70B9",
        ),
      t.efficiencyBand === "unknown" &&
        e.push(
          "\u672A\u786E\u8BA4MOVER\u80FD\u6548\u6863\u4F4D\uFF0CIPI\u80FD\u6548\u8C03\u6574\u6682\u63090\u4E2A\u767E\u5206\u70B9",
        ),
      t.safetyBand === "unknown" &&
        e.push(
          "\u672A\u786E\u8BA4\u7ED3\u6784\u5B89\u5168\u53CA\u9A7E\u9A76\u8F85\u52A9\u6761\u4EF6\uFF0CIPI\u5B89\u5168\u8C03\u6574\u6682\u63090\u4E2A\u767E\u5206\u70B9",
        ),
      t.recyclabilityBand === "unknown" &&
        e.push(
          "\u672A\u786E\u8BA4\u6CD5\u5B9A\u53EF\u56DE\u6536\u6027\u6863\u4F4D\uFF0CIPI\u53EF\u56DE\u6536\u6027\u8C03\u6574\u6682\u63090\u4E2A\u767E\u5206\u70B9",
        ));
  }
  let y = 0,
    z = 0,
    R = n * (i / 100) * 0.08,
    d = 40,
    s = R + d;
  if (r) {
    let A =
      Number.isFinite(t.selectiveTaxRate) && t.selectiveTaxRate > 0
        ? t.selectiveTaxRate
        : 0;
    ((z = (n + h) * (A / 100)),
      a.push({
        name: "\u9009\u62E9\u6027\u7A0E",
        short: "IS",
        rate: A,
        amount: z,
        base: n + h,
        color: "#ef4444",
        note: A
          ? "\u91C7\u7528\u7528\u6237\u586B\u5199\u7684\u89C4\u5212\u7A0E\u7387\uFF1B\u6B63\u5F0F\u6C7D\u8F66\u7A0E\u7387\u4ECD\u987B\u7B49\u5F85\u666E\u901A\u6CD5\u5F8B"
          : "\u6C7D\u8F66\u5C5E\u4E8E\u5F81\u7A0E\u8303\u56F4\uFF0C\u4F46\u6B63\u5F0F\u7A0E\u7387\u5C1A\u5F85\u666E\u901A\u6CD5\u5F8B\uFF0C\u5F53\u524D\u672A\u8BA1\u5165\u91D1\u989D",
        ruleStatus: A ? "estimate" : "tbd",
        sourceTitle: lt.reform.title,
        sourceUrl: lt.reform.url,
      }),
      A ||
        (u.push(
          "\u6C7D\u8F66\u9009\u62E9\u6027\u7A0E\uFF08IS\uFF09\u6B63\u5F0F\u7A0E\u7387",
        ),
        e.push(
          "2027\u20142028\u5E74IS\u7A0E\u7387\u5C1A\u672A\u786E\u5B9A\uFF0C\u5F53\u524D\u603B\u989D\u4E0D\u542BIS",
        )));
    let nt = Vy(f, l),
      Tt = n + h + z + R + d,
      Bl = Tt * (nt / 100);
    ((y += Bl),
      a.push({
        name: "\u5546\u54C1\u4E0E\u670D\u52A1\u8D21\u732E\u7A0E",
        short: "CBS\uFF08\u89C4\u5212\uFF09",
        rate: nt,
        amount: Bl,
        base: Tt,
        color: "#f97316",
        note: "2027\u5E74\u8D77\u6B63\u5F0F\u53D6\u4EE3PIS/COFINS\uFF1B\u53C2\u8003\u7A0E\u7387\u4ECD\u5F85\u53C2\u8BAE\u9662\u6700\u7EC8\u786E\u5B9A\uFF0C8.0%\u20149.5%\u4EC5\u4E3A\u89C4\u5212\u533A\u95F4",
        ruleStatus: "estimate",
        sourceTitle: lt.reform.title,
        sourceUrl: lt.reform.url,
      }),
      u.push("2027\u20142028\u5E74CBS\u53C2\u8003\u7A0E\u7387"));
    let Na = 0.1,
      _a = Tt * (Na / 100);
    ((y += _a),
      a.push({
        name: "\u5546\u54C1\u4E0E\u670D\u52A1\u7A0E",
        short: "IBS\uFF08\u8FC7\u6E21\uFF09",
        rate: Na,
        amount: _a,
        base: Tt,
        color: "#eab308",
        note: "2027\u20142028\u5E74\u5DDE0.05%\u4E0E\u5E020.05%\uFF0C\u5408\u8BA10.1%",
        ruleStatus: "confirmed",
        sourceTitle: lt.reform.title,
        sourceUrl: lt.reform.url,
      }));
  } else {
    let Tt = n * 0.0262,
      Bl = n * (12.57 / 100);
    ((y = Tt + Bl),
      a.push({
        name: "PIS\u8FDB\u53E3\u8D21\u732E",
        short: "PIS",
        rate: 2.62,
        amount: Tt,
        base: n,
        color: "#f59e0b",
        note: "\u6309NCM 87.03\u6C7D\u8F66\u5DEE\u5F02\u7A0E\u7387\u6D4B\u7B97",
        ruleStatus: t.importMode === "CBU" ? "confirmed" : "estimate",
        sourceTitle: lt.legacyFederal.title,
        sourceUrl: lt.legacyFederal.url,
      }),
      a.push({
        name: "COFINS\u8FDB\u53E3\u8D21\u732E",
        short: "COFINS",
        rate: 12.57,
        amount: Bl,
        base: n,
        color: "#f97316",
        note: "\u6309NCM 87.03\u6C7D\u8F66\u5DEE\u5F02\u7A0E\u7387\u6D4B\u7B97",
        ruleStatus: t.importMode === "CBU" ? "confirmed" : "estimate",
        sourceTitle: lt.legacyFederal.title,
        sourceUrl: lt.legacyFederal.url,
      }),
      a.push({
        name: "CBS/IBS\u6D4B\u8BD5",
        short: "\u6D4B\u8BD5\u7A0E\u7387\uFF08\u62B5\u6263\uFF09",
        rate: 1,
        amount: 0,
        base: n,
        color: "#cbd5e1",
        note: "0.9% CBS\u4E0E0.1% IBS\u53EF\u62B5\u6263PIS/COFINS\uFF1B\u5408\u89C4\u5C65\u884C\u9644\u968F\u4E49\u52A1\u53EF\u514D\u7F34",
        ruleStatus: "confirmed",
        sourceTitle: lt.reform.title,
        sourceUrl: lt.reform.url,
      }));
  }
  (a.push({
    name: "\u6D77\u8FD0\u4E0E\u901A\u5173\u9644\u52A0",
    short: "AFRMM / SISCOMEX",
    rate: (s / n) * 100,
    amount: s,
    base: n,
    color: "#94a3b8",
    note: `AFRMM\u6309\u6D77\u8FD0\u8D39\u76848%\uFF1B\u6D77\u8FD0\u8D39\u6309CIF\u7684${i}%\uFF0CSISCOMEX\u6682\u630940 USD`,
    ruleStatus: "estimate",
    sourceTitle: lt.afrmm.title,
    sourceUrl: lt.afrmm.url,
  }),
    e.push(
      `\u6D77\u8FD0\u8D39\u6309CIF\u7684${i}%\u4F30\u7B97\uFF1BSISCOMEX\u8D39\u7528\u6682\u630940 USD`,
    ));
  let m =
      Number.isFinite(t.icmsOverride) && t.icmsOverride > 0
        ? t.icmsOverride
        : t.stateIcmsRate,
    g =
      Number.isFinite(t.fecpOverride) && t.fecpOverride >= 0
        ? t.fecpOverride
        : t.stateFecpRate,
    E = m + g,
    x = (n + h + v + z + y + s) / (1 - E / 100),
    M = x * (E / 100);
  (a.push({
    name: "\u5DDE\u5546\u54C1\u6D41\u901A\u7A0E",
    short: "ICMS",
    rate: E,
    amount: M,
    base: x,
    color: "#7c3aed",
    note: `${t.stateName}\uFF1AICMS ${m}%${g ? ` + FECP ${g}%` : ""}\uFF0C\u7A0E\u5185\u8BA1\u5F81\uFF1B2029\u5E74\u524D\u7EF4\u6301\u5B8C\u6574\u7A0E\u7387`,
    ruleStatus:
      Number.isFinite(t.icmsOverride) && t.icmsOverride > 0
        ? "confirmed"
        : "estimate",
    sourceTitle: lt.icms.title,
    sourceUrl: lt.icms.url,
  }),
    (Number.isFinite(t.icmsOverride) && t.icmsOverride > 0) ||
      e.push(
        `${t.stateName}\u6309\u4E00\u822CICMS ${t.stateIcmsRate}%${t.stateFecpRate ? `\u53CAFECP ${t.stateFecpRate}%` : ""}\u6D4B\u7B97\uFF1B\u8F66\u8F86\u4E13\u9879\u4F18\u60E0\u5F85\u590D\u6838`,
      ));
  let N = a.reduce((A, nt) => A + nt.amount, 0);
  return {
    cif: n,
    lines: a,
    assumptions: [...new Set(e)],
    taxTotal: N,
    total: n + N,
    effectiveRate: (N / n) * 100,
    year: f,
    scenario: l,
    phase: fm(f),
    keyChanges:
      f === 2026
        ? [
            "PIS/COFINS\u4ECD\u5728",
            "CBS/IBS\u4EC5\u6D4B\u8BD5\u5E76\u62B5\u6263",
            "IPI Verde\u6709\u6548\u81F3\u5E74\u672B",
          ]
        : [
            "PIS/COFINS\u9000\u51FA",
            "\u4E00\u822CIPI\u964D\u81F30%",
            "CBS\u6B63\u5F0F\u542F\u52A8\u3001IBS\u4E3A0.1%",
            "IS\u8FDB\u5165\u5F81\u7A0E\u6846\u67B6\u4F46\u7A0E\u7387\u5F85\u5B9A",
          ],
    unresolvedRules: [...new Set(u)],
  };
}
function om(t) {
  return [2026, 2027, 2028].map((l) => {
    let a = { ...t, entryDate: Hy[l] },
      e = Te(a, "base");
    return {
      year: l,
      phase: fm(l),
      base: e,
      low: Te(a, "low"),
      high: Te(a, "high"),
      keyChanges: e.keyChanges,
    };
  });
}
var o = Yu(so(), 1),
  Bu = [
    ["AC", "\u963F\u514B\u91CC\u5DDE", 19, 0],
    ["AL", "\u963F\u62C9\u6208\u65AF\u5DDE", 19, 0],
    ["AP", "\u963F\u9A6C\u5E15\u5DDE", 18, 0],
    ["AM", "\u4E9A\u9A6C\u5B59\u5DDE", 20, 0],
    ["BA", "\u5DF4\u4F0A\u4E9A\u5DDE", 20.5, 0],
    ["CE", "\u585E\u963F\u62C9\u5DDE", 20, 0],
    ["DF", "\u8054\u90A6\u533A", 20, 0],
    ["ES", "\u5723\u57C3\u65AF\u76AE\u91CC\u56FE\u5DDE", 17, 0],
    ["GO", "\u6208\u4E9A\u65AF\u5DDE", 19, 0],
    ["MA", "\u9A6C\u62C9\u5C3C\u6602\u5DDE", 23, 0],
    ["MT", "\u9A6C\u6258\u683C\u7F57\u7D22\u5DDE", 17, 0],
    ["MS", "\u5357\u9A6C\u6258\u683C\u7F57\u7D22\u5DDE", 17, 0],
    ["MG", "\u7C73\u7EB3\u65AF\u5409\u62C9\u65AF\u5DDE", 18, 0],
    ["PA", "\u5E15\u62C9\u5DDE", 19, 0],
    ["PB", "\u5E15\u62C9\u4F0A\u5DF4\u5DDE", 20, 0],
    ["PR", "\u5DF4\u62C9\u90A3\u5DDE", 19.5, 0],
    ["PE", "\u4F2F\u5357\u5E03\u54E5\u5DDE", 20.5, 0],
    ["PI", "\u76AE\u5965\u4F0A\u5DDE", 22.5, 0],
    ["RJ", "\u91CC\u7EA6\u70ED\u5185\u5362\u5DDE", 20, 2],
    ["RN", "\u5317\u91CC\u5965\u683C\u5170\u5FB7\u5DDE", 20, 0],
    ["RS", "\u5357\u91CC\u5965\u683C\u5170\u5FB7\u5DDE", 17, 0],
    ["RO", "\u6717\u591A\u5C3C\u4E9A\u5DDE", 19.5, 0],
    ["RR", "\u7F57\u8D56\u9A6C\u5DDE", 20, 0],
    ["SC", "\u5723\u5361\u5854\u7433\u5A1C\u5DDE", 17, 0],
    ["SP", "\u5723\u4FDD\u7F57\u5DDE", 18, 0],
    ["SE", "\u585E\u5C14\u5E0C\u57F9\u5DDE", 19, 0],
    ["TO", "\u6258\u574E\u5EF7\u65AF\u5DDE", 20, 0],
  ].map(([t, l, a, e]) => ({ code: t, name: l, icms: a, fecp: e })),
  mm = [
    {
      country: "BR",
      topic: "2026\u20142033\u7A0E\u6539",
      title: "\u5BAA\u6CD5\u4FEE\u6B63\u6848\u7B2C132/2023\u53F7",
      summary:
        "\u660E\u786E2026\u5E74CBS/IBS\u6D4B\u8BD5\u30012027\u5E74PIS/COFINS\u9000\u51FA\u53CA\u4E00\u822CIPI\u5F52\u96F6\u7B49\u8FC7\u6E21\u5B89\u6392\u3002",
      updated: "\u73B0\u884C\u5408\u5E76\u6587\u672C",
      url: "https://legis.senado.leg.br/norma/37959796/publicacao/37963893",
    },
    {
      country: "BR",
      topic: "CBS / IBS / IS",
      title: "\u8865\u5145\u6CD5\u7B2C214/2025\u53F7",
      summary:
        "\u5EFA\u7ACBCBS\u3001IBS\u548C\u9009\u62E9\u6027\u7A0E\u6846\u67B6\uFF0C\u662F\u5DF4\u897F\u6D88\u8D39\u7A0E\u6539\u9769\u7684\u6838\u5FC3\u6CD5\u5F8B\u3002",
      updated: "2025-01-16",
      url: "https://legis.senado.leg.br/norma/40180341",
    },
    {
      country: "BR",
      topic: "IPI / MOVER",
      title: "\u7B2C12,549/2025\u53F7\u6CD5\u4EE4",
      summary:
        "\u66F4\u65B0\u6C7D\u8F66IPI\u57FA\u51C6\u7A0E\u7387\uFF0C\u4EE5\u53CA\u52A8\u529B\u3001\u529F\u7387\u3001\u80FD\u6548\u3001\u5B89\u5168\u548C\u53EF\u56DE\u6536\u6027\u8C03\u6574\u89C4\u5219\u3002",
      updated: "2025-07-10",
      url: "https://www2.camara.leg.br/legin/fed/decret/2025/decreto-12549-10-julho-2025-797715-publicacaooriginal-175882-pe.html",
    },
    {
      country: "BR",
      topic: "MOVER\u6280\u672F\u53C2\u6570",
      title: "MDIC\u4E58\u7528\u8F66IPI Verde\u53C2\u6570\u8868",
      summary:
        "\u516C\u5E0387.03\u4E58\u7528\u8F666.3%\u57FA\u51C6\u53CA\u4E94\u7C7B\u6280\u672F\u6307\u6807\u7684\u7A0E\u7387\u8C03\u6574\u53C2\u6570\u3002",
      updated: "2026-07\u6838\u9A8C",
      url: "https://www.gov.br/mdic/pt-br/centrais-de-conteudo/publicacoes/carro-sustentavel/veiculo-passageiro",
    },
    {
      country: "BR",
      topic: "\u8FDB\u53E3\u7A0E II",
      title: "GECEX\u7B2C532/2023\u53F7\u51B3\u8BAE",
      summary:
        "\u6062\u590D\u7535\u52A8\u548C\u6DF7\u5408\u52A8\u529B\u6C7D\u8F66\u8FDB\u53E3\u7A0E\u5E76\u5206\u9636\u6BB5\u63D0\u9AD8\uFF1B2026\u5E747\u6708\u540E\u4EE3\u8868\u6027CBU\u630935%\u6D4B\u7B97\u3002",
      updated: "2026-07\u9002\u7528",
      url: "https://www.in.gov.br/en/web/dou/-/resolucao-gecex-n-532-de-20-de-novembro-de-2023-524468810",
    },
    {
      country: "BR",
      topic: "PIS/COFINS\u8FDB\u53E3",
      title: "\u7B2C10,865/2004\u53F7\u6CD5\u5F8B",
      summary:
        "\u89C4\u5B9A\u8FDB\u53E3\u73AF\u8282PIS\u548CCOFINS\uFF1BNCM 87.03\u4EE3\u8868\u6027\u7A0E\u7387\u5206\u522B\u4E3A2.62%\u548C12.57%\u3002",
      updated: "\u73B0\u884C\u5408\u5E76\u6587\u672C",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l10.865.htm",
    },
    {
      country: "MX",
      topic: "IGI / HS\u7A0E\u5219",
      title:
        "\u58A8\u897F\u54E5\u8FDB\u51FA\u53E3\u4E00\u822C\u7A0E\u6CD5\uFF08LIGIE\uFF09",
      summary:
        "\u8F66\u8F86\u7A0E\u7387\u9700\u7ED3\u5408\u7A0E\u53F7\u3001\u539F\u4EA7\u5730\u548C\u4F18\u60E0\u5B89\u6392\u5224\u65AD\u3002",
      updated: "\u6301\u7EED\u66F4\u65B0",
      url: "https://www.diputados.gob.mx/LeyesBiblio/ref/ligie_2022.htm",
    },
    {
      country: "MX",
      topic: "ISAN",
      title:
        "\u58A8\u897F\u54E5\u65B0\u6C7D\u8F66\u7A0E\u6CD5\uFF08LFISAN\uFF09",
      summary:
        "\u89C4\u5B9A\u65B0\u8F66\u9500\u552E\u548C\u8FDB\u53E3\u73AF\u8282ISAN\u8BA1\u7A0E\u89C4\u5219\uFF0C\u90E8\u5206\u65B0\u80FD\u6E90\u8F66\u8F86\u53EF\u80FD\u9002\u7528\u8C41\u514D\u3002",
      updated: "\u73B0\u884C\u6587\u672C",
      url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFISAN.pdf",
    },
    {
      country: "AR",
      topic: "\u8FDB\u53E3\u5173\u7A0E",
      title:
        "\u963F\u6839\u5EF7\u7535\u52A8\u53CA\u6DF7\u52A8\u8F66\u96F6\u5173\u7A0E\u914D\u989D\u5236\u5EA6",
      summary:
        "\u5E74\u5EA6\u914D\u989D\u5185\u7B26\u5408\u4EF7\u683C\u548C\u6280\u672F\u6761\u4EF6\u7684\u65B0\u80FD\u6E90\u8F7B\u578B\u6C7D\u8F66\u53EF\u63090%\u8FDB\u53E3\u5173\u7A0E\u7533\u62A5\u3002",
      updated: "2025\u8D77\u5B9E\u65BD",
      url: "https://www.argentina.gob.ar/noticias/el-gobierno-nacional-reglamento-el-procedimiento-para-importar-autos-electricos-e-hibridos",
    },
  ],
  Ru = {
    BR: "\u5DF4\u897F",
    MX: "\u58A8\u897F\u54E5",
    AR: "\u963F\u6839\u5EF7",
  },
  Jy = {
    confirmed: "\u5DF2\u786E\u8BA4",
    estimate: "\u89C4\u5212\u503C",
    tbd: "\u5F85\u5B9A",
  },
  vm = ["BEV", "PHEV", "HEV", "REEV", "ICE"],
  Ae = (t) =>
    new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 }).format(
      Math.round(t),
    ),
  wy = "https://github.com/xiwenqianblcu-commits/auto-tax-calculator/issues";
function hi(t, l, a) {
  let e = new Blob([t], { type: l }),
    u = URL.createObjectURL(e),
    n = document.createElement("a");
  ((n.href = u), (n.download = a), n.click(), URL.revokeObjectURL(u));
}
function ym(t) {
  return `"${String(t == null ? "" : t)
    .split('"')
    .join('""')}"`;
}
function pm(t) {
  let l = [],
    a = "",
    e = !1;
  for (let u = 0; u < t.length; u += 1) {
    let n = t[u];
    n === '"' && e && t[u + 1] === '"'
      ? ((a += '"'), (u += 1))
      : n === '"'
        ? (e = !e)
        : n === "," && !e
          ? (l.push(a.trim()), (a = ""))
          : (a += n);
  }
  return (l.push(a.trim()), l);
}
function ky(t) {
  return t
    ? new Intl.DateTimeFormat("zh-CN", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(t))
    : "\u7B49\u5F85\u9996\u6B21\u81EA\u52A8\u68C0\u67E5";
}
function hm(t, l, a, e) {
  let u = [
      "\u672A\u586B\u5199HS/NCM\u7EC6\u5206\uFF0C\u5F53\u524D\u6309\u4E58\u7528\u8F66\u4EE3\u8868\u89C4\u5219\u6D4B\u7B97",
    ],
    n = [],
    i = (f, r, p, h, v, y) => {
      let z = (h * p) / 100;
      return (
        n.push({
          name: f,
          short: r,
          rate: p,
          base: h,
          amount: z,
          ruleStatus: v,
          note: y,
        }),
        z
      );
    };
  if (t === "MX") {
    let f = i(
        "\u4E00\u822C\u8FDB\u53E3\u7A0E",
        "IGI",
        50,
        a,
        "estimate",
        "\u4E2D\u56FD\u6765\u6E90\u4E58\u7528\u8F66\u6309\u975EFTA\u89C4\u5212\u53E3\u5F84\uFF0C\u6B63\u5F0F\u7533\u62A5\u987B\u6838\u5BF9LIGIE\u7A0E\u53F7",
      ),
      r = i(
        "\u6D77\u5173\u624B\u7EED\u8D39",
        "DTA",
        0.8,
        a + f,
        "estimate",
        "\u4EE3\u8868\u6027\u89C4\u5212\u503C",
      ),
      p = a + f + r;
    (i(
      "\u589E\u503C\u7A0E",
      "IVA",
      16,
      p,
      "confirmed",
      "\u6309\u4E00\u822C\u8FDB\u53E3IVA\u7A0E\u7387",
    ),
      i(
        "\u65B0\u6C7D\u8F66\u7A0E",
        "ISAN",
        l === "BEV" ? 0 : 2,
        a + f,
        "estimate",
        "\u5B9E\u9645\u9002\u7528\u9636\u68AF\u3001\u8C41\u514D\u548C\u8F66\u8F86\u4EF7\u683C\u5F85\u6838\u9A8C",
      ),
      u.push(
        "IGI\u6682\u630950%\u89C4\u5212\u503C\uFF1BISAN\u6309\u4EE3\u8868\u6027\u7A0E\u7387\u4F30\u7B97",
      ));
  } else {
    let f = l !== "ICE" && e >= "2025-01-01",
      r = i(
        "\u8FDB\u53E3\u5173\u7A0E",
        "Derecho",
        f ? 0 : 35,
        a,
        f ? "estimate" : "confirmed",
        f
          ? "\u5047\u8BBE\u6EE1\u8DB3\u65B0\u80FD\u6E90\u96F6\u5173\u7A0E\u914D\u989D\u6761\u4EF6"
          : "\u914D\u989D\u5916\u4EE3\u8868\u6027\u7A0E\u7387",
      );
    i(
      "\u7EDF\u8BA1\u7A0E",
      "Tasa",
      3,
      a,
      "estimate",
      "\u7A0E\u7387\u548C\u4E0A\u9650\u9700\u6309\u7533\u62A5\u65E5\u671F\u6838\u9A8C",
    );
    let p = a + r;
    (i(
      "\u589E\u503C\u7A0E",
      "IVA",
      21,
      p,
      "confirmed",
      "\u4E00\u822C\u7A0E\u7387",
    ),
      i(
        "\u9644\u52A0IVA\u9884\u7F34",
        "IVA adicional",
        20,
        p,
        "estimate",
        "\u662F\u5426\u9002\u7528\u53D6\u51B3\u4E8E\u8FDB\u53E3\u4E3B\u4F53\u548C\u7528\u9014",
      ),
      u.push(
        f
          ? "\u5047\u8BBE\u8F66\u8F86\u6EE1\u8DB3\u65B0\u80FD\u6E90\u96F6\u5173\u7A0E\u914D\u989D\u6761\u4EF6"
          : "\u672A\u91C7\u7528\u65B0\u80FD\u6E90\u96F6\u5173\u7A0E\u914D\u989D",
      ));
  }
  let c = n.reduce((f, r) => f + r.amount, 0);
  return {
    cif: a,
    lines: n,
    assumptions: u,
    taxTotal: c,
    total: a + c,
    effectiveRate: (c / a) * 100,
    unresolvedRules: [],
  };
}
function Fy() {
  let [t, l] = (0, X.useState)("calculator"),
    [a, e] = (0, X.useState)("BR"),
    [u, n] = (0, X.useState)("BEV"),
    [i, c] = (0, X.useState)(25e3),
    [f, r] = (0, X.useState)("2026-07-01"),
    [p, h] = (0, X.useState)("CBU"),
    [v, y] = (0, X.useState)("SP"),
    [z, T] = (0, X.useState)(!1),
    [R, d] = (0, X.useState)(""),
    [s, m] = (0, X.useState)(""),
    [g, E] = (0, X.useState)("gasoline"),
    [U, x] = (0, X.useState)("unknown"),
    [M, N] = (0, X.useState)("unknown"),
    [A, nt] = (0, X.useState)("unknown"),
    [Tt, Bl] = (0, X.useState)(""),
    [Na, _a] = (0, X.useState)(2026),
    [gi, bm] = (0, X.useState)("ALL"),
    [bi, ro] = (0, X.useState)(null),
    [Ia, Pm] = (0, X.useState)(!1),
    [appInstalled, setAppInstalled] = (0, X.useState)(
      () =>
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === !0,
    ),
    [Me, Hu] = (0, X.useState)([]),
    [mo, Oe] = (0, X.useState)(""),
    [Sm, zm] = (0, X.useState)(!1),
    [qu, xm] = (0, X.useState)([]),
    [Da, Em] = (0, X.useState)({
      run_at: null,
      status: "awaiting_first_run",
      source_count: 10,
      changed_count: 0,
      error_count: 0,
      pdf_source_count: 1,
    });
  (0, X.useEffect)(() => {
    let b = (Y) => {
        let at = navigator.userAgent || "",
          yo =
            !/Android/i.test(at) ||
            /(Chrome|CriOS|EdgA|SamsungBrowser)\//i.test(at);
        yo && (Y.preventDefault(), ro(Y));
      },
      Y = () => {
        (setAppInstalled(!0),
          ro(null),
          Pm(!1),
          (document.documentElement.dataset.appInstalled = "true"),
          Oe(
            "\u5E94\u7528\u5DF2\u5B89\u88C5\uFF0C\u53EF\u4ECE\u4E3B\u5C4F\u5E55\u6216\u5E94\u7528\u5217\u8868\u542F\u52A8\u3002",
          ));
      };
    ((document.documentElement.dataset.appInstalled = appInstalled
      ? "true"
      : "false"),
      window.addEventListener("beforeinstallprompt", b),
      window.addEventListener("appinstalled", Y),
      "serviceWorker" in navigator &&
        navigator.serviceWorker.register("./sw.js").catch(() => {}));
    try {
      Hu(JSON.parse(localStorage.getItem("autotax-scenarios") || "[]"));
    } catch {
      Hu([]);
    }
    return (
      fetch("./data/regulation-monitor/latest-report.json", {
        cache: "no-store",
      })
        .then((Y) =>
          Y.ok
            ? Y.json()
            : Promise.reject(new Error("monitor report unavailable")),
        )
        .then(Em)
        .catch(() => {}),
      () => {
        (window.removeEventListener("beforeinstallprompt", b),
          window.removeEventListener("appinstalled", Y));
      }
    );
  }, []);
  let Ne = (0, X.useMemo)(() => {
      let b = Bu.find((Y) => Y.code === v) || Bu[24];
      return {
        cif: Number(i),
        freightRate: 5,
        importMode: p,
        entryDate: f,
        energy: u,
        fuel: g,
        ncm: R,
        powerKw: Number(s),
        efficiencyBand: U,
        safetyBand: M,
        recyclabilityBand: A,
        ipiExtraAdjustment: 0,
        selectiveTaxRate: Number(Tt),
        stateName: b.name,
        stateIcmsRate: b.icms,
        stateFecpRate: b.fecp,
        icmsOverride: 0,
        fecpOverride: 0,
      };
    }, [i, p, f, u, g, R, s, U, M, A, Tt, v]),
    Tm = (0, X.useMemo)(() => (a === "BR" ? om(Ne) : []), [a, Ne]),
    At = (0, X.useMemo)(
      () =>
        a === "BR"
          ? Te({ ...Ne, entryDate: `${Na}-07-01` }, "base")
          : hm(a, u, Number(i) || 25e3, f),
      [a, u, i, f, Ne, Na],
    ),
    Am = (b) => {
      (_a(b), r(`${b}-07-01`));
    },
    vo = () => ({
      id: `${Date.now()}-${a}-${u}`,
      name: `${Ru[a]} \xB7 ${u} \xB7 ${f}`,
      savedAt: new Date().toISOString(),
      inputs: {
        country: a,
        energy: u,
        cif: Number(i),
        entryDate: f,
        importMode: p,
        stateCode: v,
        ncm: R,
        powerKw: s,
        fuel: g,
        efficiencyBand: U,
        safetyBand: M,
        recyclabilityBand: A,
        selectiveTaxRate: Tt,
      },
      result: At,
    }),
    Mm = () => {
      let b = [vo(), ...Me].slice(0, 30);
      (Hu(b),
        localStorage.setItem("autotax-scenarios", JSON.stringify(b)),
        Oe(
          "\u8F66\u578B\u65B9\u6848\u5DF2\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\uFF0C\u53EF\u968F\u65F6\u6062\u590D\u3002",
        ));
    },
    Om = (b) => {
      let Y = b.inputs;
      (e(Y.country),
        n(Y.energy),
        c(Y.cif),
        r(Y.entryDate),
        h(Y.importMode),
        y(Y.stateCode || "SP"),
        d(Y.ncm || ""),
        m(Y.powerKw || ""),
        E(Y.fuel || "gasoline"),
        x(Y.efficiencyBand || "unknown"),
        N(Y.safetyBand || "unknown"),
        nt(Y.recyclabilityBand || "unknown"),
        Bl(Y.selectiveTaxRate || ""),
        _a(Number(Y.entryDate.slice(0, 4))),
        Oe(`\u5DF2\u6062\u590D\uFF1A${b.name}`),
        window.scrollTo({ top: 0, behavior: "smooth" }));
    },
    Nm = (b) => {
      let Y = Me.filter((at) => at.id !== b);
      (Hu(Y), localStorage.setItem("autotax-scenarios", JSON.stringify(Y)));
    },
    _m = () => {
      hi(
        JSON.stringify(vo(), null, 2),
        "application/json;charset=utf-8",
        `autotax-${a}-${f}.json`,
      );
    },
    Dm = () => {
      let at = `<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="\u7A0E\u989D\u6D4B\u7B97"><Table>${[["AutoTax Atlas \u6C7D\u8F66\u8FDB\u53E3\u7A0E\u6D4B\u7B97\u62A5\u544A", "", "", "", ""], ["\u56FD\u5BB6", Ru[a], "\u80FD\u6E90\u7C7B\u578B", u, ""], ["\u8FDB\u5165\u65F6\u95F4", f, "\u8FDB\u53E3\u65B9\u5F0F", p, ""], ["CIF\uFF08USD\uFF09", At.cif, "\u7EFC\u5408\u7A0E\u7387", `${At.effectiveRate.toFixed(2)}%`, ""], ["\u7A0E\u8D39\u9879\u76EE", "\u7B80\u79F0", "\u7A0E\u7387", "\u7A0E\u57FA\uFF08USD\uFF09", "\u7A0E\u989D\uFF08USD\uFF09"], ...At.lines.map((rl) => [rl.name, rl.short, `${rl.rate.toFixed(4)}%`, rl.base.toFixed(2), rl.amount.toFixed(2)]), ["\u5408\u8BA1\u7A0E\u989D", "", "", "", At.taxTotal.toFixed(2)], ["\u5B8C\u7A0E\u6210\u672C", "", "", "", At.total.toFixed(2)], ["\u4F7F\u7528\u7684\u5047\u8BBE", At.assumptions.join("\uFF1B"), "", "", ""]].map((rl) => `<Row>${rl.map((_e) => `<Cell><Data ss:Type="${typeof _e == "number" ? "Number" : "String"}">${String(_e).split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;")}</Data></Cell>`).join("")}</Row>`).join("")}</Table></Worksheet></Workbook>`;
      hi(at, "application/vnd.ms-excel;charset=utf-8", `autotax-${a}-${f}.xls`);
    },
    Um = () => {
      hi(
        `\uFEFF${[
          [
            "name",
            "country",
            "energy",
            "cif",
            "entryDate",
            "importMode",
            "stateCode",
          ],
          ["T1-BEV", "BR", "BEV", "25000", "2026-07-01", "CBU", "SP"],
          ["B30-REEV", "BR", "REEV", "32000", "2027-07-01", "CKD", "MG"],
        ].map((Y) => Y.map(ym).join(",")).join(`
`)}`,
        "text/csv;charset=utf-8",
        "autotax-batch-template.csv",
      );
    },
    Cm = async (b) => {
      if (!b) return;
      let at = (await b.text())
        .replace(/^\uFEFF/, "")
        .split(/\r?\n/)
        .filter(Boolean);
      if (at.length < 2) {
        Oe("\u6279\u91CF\u6587\u4EF6\u6CA1\u6709\u6570\u636E\u884C\u3002");
        return;
      }
      let rl = pm(at[0]),
        _e = at.slice(1).map((qm, yo) => {
          let Ym = pm(qm),
            Bt = Object.fromEntries(rl.map((De, Ue) => [De, Ym[Ue] || ""])),
            Si = ["BR", "MX", "AR"].includes(Bt.country) ? Bt.country : "BR",
            zi = vm.includes(Bt.energy) ? Bt.energy : "BEV",
            xi = Number(Bt.cif) || 25e3,
            Ei = /^\d{4}-\d{2}-\d{2}$/.test(Bt.entryDate)
              ? Bt.entryDate
              : "2026-07-01",
            Ua;
          if (Si === "BR") {
            let De =
              Bu.find((Ue) => Ue.code === Bt.stateCode) ||
              Bu.find((Ue) => Ue.code === "SP");
            Ua = Te(
              {
                ...Ne,
                cif: xi,
                energy: zi,
                entryDate: Ei,
                importMode: ["CBU", "KD", "CKD"].includes(Bt.importMode)
                  ? Bt.importMode
                  : "CBU",
                stateName: De.name,
                stateIcmsRate: De.icms,
                stateFecpRate: De.fecp,
              },
              "base",
            );
          } else Ua = hm(Si, zi, xi, Ei);
          return {
            row: yo + 2,
            name: Bt.name || `\u8F66\u578B${yo + 1}`,
            country: Si,
            energy: zi,
            cif: xi,
            entryDate: Ei,
            importMode: Bt.importMode || "CBU",
            stateCode: Bt.stateCode || "",
            effectiveRate: Ua.effectiveRate,
            taxTotal: Ua.taxTotal,
            total: Ua.total,
            assumptionCount: Ua.assumptions.length,
          };
        });
      (xm(_e),
        zm(!0),
        Oe(
          `\u5DF2\u5B8C\u6210 ${_e.length} \u4E2A\u8F66\u578B\u7684\u6279\u91CF\u6D4B\u7B97\u3002`,
        ));
    },
    Bm = () => {
      let b = [
          "\u8F66\u578B",
          "\u56FD\u5BB6",
          "\u80FD\u6E90",
          "CIF",
          "\u8FDB\u5165\u65F6\u95F4",
          "\u8FDB\u53E3\u65B9\u5F0F",
          "\u5DDE",
          "\u7EFC\u5408\u7A0E\u7387",
          "\u7A0E\u989D",
          "\u5B8C\u7A0E\u6210\u672C",
          "\u5047\u8BBE\u6570",
        ],
        Y = qu.map((at) => [
          at.name,
          at.country,
          at.energy,
          at.cif,
          at.entryDate,
          at.importMode,
          at.stateCode,
          `${at.effectiveRate.toFixed(2)}%`,
          at.taxTotal.toFixed(2),
          at.total.toFixed(2),
          at.assumptionCount,
        ]);
      hi(
        `\uFEFF${[b, ...Y].map((at) => at.map(ym).join(",")).join(`
`)}`,
        "text/csv;charset=utf-8",
        "autotax-batch-results.csv",
      );
    },
    Rm = () => Pm(!0),
    Km = async () => {
      if (!bi) return;
      try {
        await bi.prompt();
        let b = await bi.userChoice;
        (ro(null),
          b.outcome === "accepted"
            ? (setAppInstalled(!0),
              (document.documentElement.dataset.appInstalled = "true"),
              Oe(
                "\u5E94\u7528\u5DF2\u5B89\u88C5\uFF0C\u53EF\u4ECE\u4E3B\u5C4F\u5E55\u6216\u5E94\u7528\u5217\u8868\u542F\u52A8\u3002",
              ),
              Pm(!1))
            : Oe(
                "\u5B89\u88C5\u5DF2\u53D6\u6D88\uFF1B\u53EF\u7A0D\u540E\u4ECE\u6D4F\u89C8\u5668\u83DC\u5355\u91CD\u65B0\u5B89\u88C5\u3002",
              ));
      } catch {
        (ro(null),
          Oe(
            "\u5F53\u524D\u6D4F\u89C8\u5668\u672A\u5B8C\u6210\u5B89\u88C5\uFF0C\u8BF7\u4F7F\u7528 Chrome \u83DC\u5355\u4E2D\u7684\u201C\u5B89\u88C5\u5E94\u7528\u201D\u3002",
          ));
      }
    },
    Hm = gi === "ALL" ? mm : mm.filter((b) => b.country === gi);
  return (0, o.jsxs)("div", {
    className: "app-shell",
    children: [
      (0, o.jsxs)("header", {
        className: "topbar",
        children: [
          (0, o.jsxs)("button", {
            className: "brand",
            onClick: () => l("calculator"),
            children: [
              (0, o.jsx)("span", { className: "brand-mark", children: "AT" }),
              (0, o.jsxs)("span", {
                children: [
                  "\u5168\u7403\u6C7D\u8F66\u7A0E\u7387\u8BA1\u7B97\u5668",
                  (0, o.jsx)("small", { children: "AutoTax Atlas" }),
                ],
              }),
            ],
          }),
          (0, o.jsxs)("nav", {
            "aria-label": "\u4E3B\u5BFC\u822A",
            children: [
              (0, o.jsx)("button", {
                className: t === "laws" ? "active" : "",
                onClick: () => l("laws"),
                children: "\u6CD5\u89C4\u5E93",
              }),
              (0, o.jsx)("button", {
                className: t === "calculator" ? "active" : "",
                onClick: () => l("calculator"),
                children: "\u7A0E\u989D\u6D4B\u7B97",
              }),
              (0, o.jsx)("button", {
                className: t === "advice" ? "active" : "",
                onClick: () => l("advice"),
                children: "\u51CF\u7A0E\u5EFA\u8BAE",
              }),
            ],
          }),
          (0, o.jsxs)("div", {
            className: "header-actions",
            children: [
              !appInstalled &&
                (0, o.jsx)("button", {
                  className: "ghost-button install-launch",
                  onClick: Rm,
                  children: "\u5B89\u88C5\u5E94\u7528",
                }),
              (0, o.jsx)("button", {
                className: "save-button",
                onClick: Mm,
                children: "\u4FDD\u5B58\u65B9\u6848",
              }),
            ],
          }),
        ],
      }),
      mo &&
        (0, o.jsxs)("button", {
          className: "toast",
          onClick: () => Oe(""),
          children: [mo, (0, o.jsx)("span", { children: "\xD7" })],
        }),
      Ia &&
        (0, o.jsx)("div", {
          className: "install-overlay",
          onClick: () => Pm(!1),
          children: (0, o.jsxs)("section", {
            className: "install-dialog",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "install-title",
            onClick: (b) => b.stopPropagation(),
            children: [
              (0, o.jsxs)("div", {
                className: "install-dialog-head",
                children: [
                  (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsx)("span", {
                        className: "step-label",
                        children: "AutoTax Atlas",
                      }),
                      (0, o.jsx)("h2", {
                        id: "install-title",
                        children: "\u9009\u62E9\u5B89\u88C5\u65B9\u5F0F",
                      }),
                    ],
                  }),
                  (0, o.jsx)("button", {
                    className: "install-close",
                    "aria-label": "\u5173\u95ED\u5B89\u88C5\u8BF4\u660E",
                    onClick: () => Pm(!1),
                    children: "\xD7",
                  }),
                ],
              }),
              (0, o.jsx)("p", {
                className: "install-intro",
                children:
                  "Android \u53EF\u76F4\u63A5\u4E0B\u8F7D\u5DF2\u9A8C\u8BC1\u7684\u6D4B\u8BD5\u538B\u7F29\u5305\uFF1B\u7535\u8111\u3001iPhone \u548C\u652F\u6301 PWA \u7684 Android \u6D4F\u89C8\u5668\u4E5F\u53EF\u5B89\u88C5\u7F51\u9875\u5E94\u7528\u3002",
              }),
              (0, o.jsx)("a", {
                className: "install-android-download",
                href: "./downloads/autotax-atlas-android-debug.zip",
                download: "autotax-atlas-android-debug.zip",
                children:
                  "\u4E0B\u8F7D Android \u6D4B\u8BD5\u5305\uFF08ZIP\uFF0C\u7EA6 4.4 MB\uFF09",
              }),
              bi &&
                (0, o.jsx)("button", {
                  className: "install-primary",
                  onClick: Km,
                  children: "\u5B89\u88C5 PWA \u5230\u5F53\u524D\u8BBE\u5907",
                }),
              (0, o.jsxs)("div", {
                className: "install-platforms",
                children: [
                  (0, o.jsxs)("article", {
                    children: [
                      (0, o.jsx)("b", { children: "Windows / macOS" }),
                      (0, o.jsx)("p", {
                        children:
                          "\u4F7F\u7528 Chrome \u6216 Edge \u6253\u5F00\u7F51\u9875\uFF0C\u70B9\u51FB\u5730\u5740\u680F\u53F3\u4FA7\u7684\u5B89\u88C5\u56FE\u6807\uFF0C\u6216\u5728\u6D4F\u89C8\u5668\u83DC\u5355\u4E2D\u9009\u62E9\u201C\u5B89\u88C5\u5E94\u7528\u201D\u3002",
                      }),
                    ],
                  }),
                  (0, o.jsxs)("article", {
                    children: [
                      (0, o.jsx)("b", { children: "Android" }),
                      (0, o.jsx)("p", {
                        children:
                          "\u4E0B\u8F7D ZIP \u540E\u89E3\u538B\u5E76\u5B89\u88C5 app-debug.apk\uFF1B\u9996\u6B21\u5B89\u88C5\u53EF\u80FD\u9700\u5141\u8BB8\u5F53\u524D\u6D4F\u89C8\u5668\u201C\u5B89\u88C5\u672A\u77E5\u5E94\u7528\u201D\u3002",
                      }),
                    ],
                  }),
                  (0, o.jsxs)("article", {
                    children: [
                      (0, o.jsx)("b", { children: "iPhone / iPad" }),
                      (0, o.jsx)("p", {
                        children:
                          "\u4F7F\u7528 Safari \u6253\u5F00\u7F51\u9875\uFF0C\u70B9\u51FB\u201C\u5206\u4EAB\u201D\uFF0C\u518D\u9009\u62E9\u201C\u6DFB\u52A0\u5230\u4E3B\u5C4F\u5E55\u201D\u3002",
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)("p", {
                className: "install-note",
                children:
                  "Android \u5B89\u88C5\u5305\u4E3A\u8C03\u8BD5\u6D4B\u8BD5\u7248\uFF0C\u9002\u5408\u771F\u673A\u8BD5\u7528\uFF0C\u4E0D\u4F5C\u4E3A\u5E94\u7528\u5546\u5E97\u6B63\u5F0F\u53D1\u5E03\u7248\u3002\u5982\u679C PWA \u5B89\u88C5\u6309\u94AE\u672A\u51FA\u73B0\uFF0C\u8BF7\u6539\u7528\u6700\u65B0\u7248 Chrome\u3002",
              }),
            ],
          }),
        }),
      t === "calculator" &&
        (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("section", {
              className: "hero",
              children: [
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("span", {
                      className: "eyebrow",
                      children:
                        "\u5DF4\u897F 2026\u20142028 \u7A0E\u6539\u60C5\u666F\u5BF9\u6BD4",
                    }),
                    (0, o.jsx)("h1", {
                      children:
                        "\u4E00\u6B21\u8F93\u5165\uFF0C\u770B\u6E05\u5B8C\u6574\u8FDB\u53E3\u7A0E\u8D1F",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "\u9010\u9879\u62C6\u5206\u7A0E\u989D\uFF0C\u81EA\u52A8\u8BF4\u660E\u5047\u8BBE\uFF0C\u5E76\u5BF9\u5C1A\u672A\u786E\u5B9A\u7684\u89C4\u5219\u663E\u793A\u89C4\u5212\u533A\u95F4\u3002",
                    }),
                  ],
                }),
                (0, o.jsxs)("span", {
                  className: "hero-status",
                  children: [
                    (0, o.jsx)("i", {}),
                    "\u6CD5\u89C4\u6570\u636E\u6838\u9A8C\u81F3 2026-07",
                  ],
                }),
              ],
            }),
            !appInstalled &&
              (0, o.jsxs)("section", {
                className: "download-banner",
                children: [
                  (0, o.jsx)("span", {
                    className: "download-mark",
                    children: "AT",
                  }),
                  (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsx)("span", {
                        className: "step-label",
                        children: "\u7F51\u9875\u4E0E Android \u5E94\u7528",
                      }),
                      (0, o.jsx)("h2", {
                        children:
                          "\u5B89\u88C5\u7F51\u9875\u5E94\u7528\uFF0C\u6216\u4E0B\u8F7D Android \u6D4B\u8BD5\u7248",
                      }),
                      (0, o.jsx)("p", {
                        children:
                          "Android \u538B\u7F29\u5305\u7EA6 4.4 MB\uFF0C\u89E3\u538B\u540E\u5B89\u88C5 APK\uFF1BWindows\u3001macOS \u548C iPhone \u53EF\u4F7F\u7528 PWA\u3002",
                      }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: "download-actions",
                    children: [
                      (0, o.jsx)("a", {
                        className: "android-download",
                        href: "./downloads/autotax-atlas-android-debug.zip",
                        download: "autotax-atlas-android-debug.zip",
                        children: "\u4E0B\u8F7D Android \u6D4B\u8BD5\u5305",
                      }),
                      (0, o.jsx)("button", {
                        className: "pwa-install",
                        onClick: Rm,
                        children: "\u5B89\u88C5\u7F51\u9875\u5E94\u7528",
                      }),
                    ],
                  }),
                ],
              }),
            (0, o.jsxs)("main", {
              className: "workspace",
              children: [
                (0, o.jsxs)("section", {
                  className: "panel input-panel",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "section-heading",
                      children: [
                        (0, o.jsxs)("div", {
                          children: [
                            (0, o.jsx)("span", {
                              className: "step-label",
                              children: "\u57FA\u7840\u4FE1\u606F",
                            }),
                            (0, o.jsx)("h2", {
                              children:
                                "\u8F66\u8F86\u4E0E\u8FDB\u53E3\u53C2\u6570",
                            }),
                          ],
                        }),
                        (0, o.jsx)("span", {
                          className: "small-badge",
                          children: "\u5B9E\u65F6\u8BA1\u7B97",
                        }),
                      ],
                    }),
                    (0, o.jsxs)("div", {
                      className: "form-grid",
                      children: [
                        (0, o.jsxs)("label", {
                          children: [
                            "\u76EE\u6807\u56FD\u5BB6",
                            (0, o.jsxs)("select", {
                              value: a,
                              onChange: (b) => e(b.target.value),
                              children: [
                                (0, o.jsx)("option", {
                                  value: "BR",
                                  children: "\u5DF4\u897F",
                                }),
                                (0, o.jsx)("option", {
                                  value: "MX",
                                  children: "\u58A8\u897F\u54E5",
                                }),
                                (0, o.jsx)("option", {
                                  value: "AR",
                                  children: "\u963F\u6839\u5EF7",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, o.jsxs)("label", {
                          children: [
                            "CIF\u4EF7\u683C\uFF08USD\uFF09",
                            (0, o.jsx)("input", {
                              type: "number",
                              min: "1",
                              value: i,
                              onChange: (b) => c(b.target.value),
                            }),
                          ],
                        }),
                        (0, o.jsxs)("fieldset", {
                          className: "span-2",
                          children: [
                            (0, o.jsx)("legend", {
                              children: "\u80FD\u6E90\u7C7B\u578B",
                            }),
                            (0, o.jsx)("div", {
                              className: "segmented",
                              children: vm.map((b) =>
                                (0, o.jsx)(
                                  "button",
                                  {
                                    className: u === b ? "active" : "",
                                    onClick: () => n(b),
                                    children: b,
                                  },
                                  b,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, o.jsxs)("label", {
                          children: [
                            "\u9884\u8BA1\u8FDB\u5165\u65F6\u95F4",
                            (0, o.jsx)("input", {
                              type: "date",
                              min: a === "BR" ? "2026-01-01" : "2025-01-01",
                              max: "2028-12-31",
                              value: f,
                              onChange: (b) => {
                                (r(b.target.value),
                                  a === "BR" &&
                                    _a(Number(b.target.value.slice(0, 4))));
                              },
                            }),
                          ],
                        }),
                        (0, o.jsxs)("label", {
                          children: [
                            "\u8FDB\u53E3\u65B9\u5F0F",
                            (0, o.jsxs)("select", {
                              value: p,
                              onChange: (b) => h(b.target.value),
                              children: [
                                (0, o.jsx)("option", {
                                  value: "CBU",
                                  children: "CBU \u6574\u8F66",
                                }),
                                (0, o.jsx)("option", {
                                  value: "KD",
                                  children:
                                    "KD \u6563\u4EF6\uFF08\u89C4\u5212\uFF09",
                                }),
                                (0, o.jsx)("option", {
                                  value: "CKD",
                                  children:
                                    "CKD \u6574\u5957\u6563\u4EF6\uFF08\u4FDD\u5B88\uFF09",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a === "BR" &&
                          (0, o.jsxs)("label", {
                            className: "span-2",
                            children: [
                              "\u8FDB\u53E3\uFF0F\u7ECF\u8425\u5DDE",
                              (0, o.jsx)("select", {
                                value: v,
                                onChange: (b) => y(b.target.value),
                                children: Bu.map((b) =>
                                  (0, o.jsxs)(
                                    "option",
                                    {
                                      value: b.code,
                                      children: [
                                        b.name,
                                        "\uFF08",
                                        b.code,
                                        "\uFF09",
                                      ],
                                    },
                                    b.code,
                                  ),
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, o.jsx)("button", {
                      className: "advanced-toggle",
                      onClick: () => T(!z),
                      children: z
                        ? "\u2212 \u6536\u8D77"
                        : "\uFF0B \u66F4\u591A\u6280\u672F\u53C2\u6570\uFF08\u53EF\u9009\uFF09",
                    }),
                    z &&
                      (0, o.jsxs)("div", {
                        className: "advanced-grid",
                        children: [
                          (0, o.jsxs)("label", {
                            children: [
                              "NCM / HS CODE",
                              (0, o.jsx)("input", {
                                value: R,
                                onChange: (b) => d(b.target.value),
                                placeholder: "\u4F8B\u5982 8703.80.00",
                              }),
                            ],
                          }),
                          (0, o.jsxs)("label", {
                            children: [
                              "\u6700\u5927\u51C0\u529F\u7387\uFF08kW\uFF09",
                              (0, o.jsx)("input", {
                                type: "number",
                                value: s,
                                onChange: (b) => m(b.target.value),
                                placeholder: "\u4F8B\u5982 70",
                              }),
                            ],
                          }),
                          u !== "BEV" &&
                            (0, o.jsxs)("label", {
                              children: [
                                "\u53D1\u52A8\u673A\uFF0F\u589E\u7A0B\u5668\u71C3\u6599",
                                (0, o.jsxs)("select", {
                                  value: g,
                                  onChange: (b) => E(b.target.value),
                                  children: [
                                    (0, o.jsx)("option", {
                                      value: "gasoline",
                                      children: "\u6C7D\u6CB9",
                                    }),
                                    (0, o.jsx)("option", {
                                      value: "flex",
                                      children: "Flex-fuel",
                                    }),
                                    (0, o.jsx)("option", {
                                      value: "ethanol",
                                      children: "\u4E59\u9187",
                                    }),
                                    (0, o.jsx)("option", {
                                      value: "diesel",
                                      children: "\u67F4\u6CB9",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          (0, o.jsxs)("label", {
                            children: [
                              "MOVER\u80FD\u6548\u6863\u4F4D",
                              (0, o.jsxs)("select", {
                                value: U,
                                onChange: (b) => x(b.target.value),
                                children: [
                                  (0, o.jsx)("option", {
                                    value: "unknown",
                                    children:
                                      "\u672A\u786E\u8BA4\uFF08\u63090\u8C03\u6574\uFF09",
                                  }),
                                  (0, o.jsx)("option", {
                                    value: "tier1",
                                    children:
                                      "\u9644\u4EF6III\u7B2C2\u9879\uFF08-2.0\uFF09",
                                  }),
                                  (0, o.jsx)("option", {
                                    value: "tier2",
                                    children:
                                      "\u9644\u4EF6III\u7B2C3\u9879\uFF08-1.0\uFF09",
                                  }),
                                  (0, o.jsx)("option", {
                                    value: "none",
                                    children:
                                      "\u4E0D\u7B26\u5408\u51CF\u514D\u6761\u4EF6",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsxs)("label", {
                            children: [
                              "\u5B89\u5168\u8F85\u52A9\u6761\u4EF6",
                              (0, o.jsxs)("select", {
                                value: M,
                                onChange: (b) => N(b.target.value),
                                children: [
                                  (0, o.jsx)("option", {
                                    value: "unknown",
                                    children:
                                      "\u672A\u786E\u8BA4\uFF08\u63090\u8C03\u6574\uFF09",
                                  }),
                                  (0, o.jsx)("option", {
                                    value: "qualified",
                                    children:
                                      "\u9644\u4EF6IV\u7B2C5\u9879\uFF08-1.0\uFF09",
                                  }),
                                  (0, o.jsx)("option", {
                                    value: "none",
                                    children:
                                      "\u4E0D\u7B26\u5408\u51CF\u514D\u6761\u4EF6",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsxs)("label", {
                            children: [
                              "\u6CD5\u5B9A\u53EF\u56DE\u6536\u6027",
                              (0, o.jsxs)("select", {
                                value: A,
                                onChange: (b) => nt(b.target.value),
                                children: [
                                  (0, o.jsx)("option", {
                                    value: "unknown",
                                    children:
                                      "\u672A\u786E\u8BA4\uFF08\u63090\u8C03\u6574\uFF09",
                                  }),
                                  (0, o.jsx)("option", {
                                    value: "item17",
                                    children:
                                      "\u9644\u4EF6III\u7B2C17\u9879\uFF08-2.0\uFF09",
                                  }),
                                  (0, o.jsx)("option", {
                                    value: "item18",
                                    children:
                                      "\u9644\u4EF6III\u7B2C18\u9879\uFF08-1.0\uFF09",
                                  }),
                                  (0, o.jsx)("option", {
                                    value: "none",
                                    children:
                                      "\u4E0D\u7B26\u5408\u51CF\u514D\u6761\u4EF6",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsxs)("label", {
                            children: [
                              "2027\u540EIS\u89C4\u5212\u7A0E\u7387\uFF08%\uFF09",
                              (0, o.jsx)("input", {
                                type: "number",
                                value: Tt,
                                onChange: (b) => Bl(b.target.value),
                                placeholder:
                                  "\u4E0D\u586B\u5219\u4E0D\u8BA1\u5165",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                (0, o.jsxs)("section", {
                  className: "panel result-panel",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "result-title",
                      children: [
                        (0, o.jsxs)("div", {
                          children: [
                            (0, o.jsxs)("span", {
                              className: "step-label",
                              children: [Ru[a], " \xB7 ", u, " \xB7 ", f],
                            }),
                            (0, o.jsx)("h2", {
                              children: "\u5B9E\u65F6\u7A0E\u8D1F\u6982\u89C8",
                            }),
                          ],
                        }),
                        (0, o.jsx)("span", {
                          className: "calculated",
                          children: "\u2713 \u5DF2\u8BA1\u7B97",
                        }),
                      ],
                    }),
                    a === "BR" &&
                      (0, o.jsxs)("section", {
                        className: "year-comparison",
                        children: [
                          (0, o.jsxs)("div", {
                            className: "comparison-heading",
                            children: [
                              (0, o.jsxs)("div", {
                                children: [
                                  (0, o.jsx)("span", {
                                    className: "step-label",
                                    children:
                                      "\u540C\u4E00\u8F66\u578B\u53C2\u6570",
                                  }),
                                  (0, o.jsx)("h3", {
                                    children:
                                      "2026\u20142028\u7A0E\u8D1F\u5E76\u6392\u5BF9\u6BD4",
                                  }),
                                ],
                              }),
                              (0, o.jsxs)("div", {
                                className: "legend",
                                children: [
                                  (0, o.jsxs)("span", {
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "confirmed",
                                      }),
                                      "\u5DF2\u786E\u8BA4",
                                    ],
                                  }),
                                  (0, o.jsxs)("span", {
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "estimate",
                                      }),
                                      "\u89C4\u5212\u503C",
                                    ],
                                  }),
                                  (0, o.jsxs)("span", {
                                    children: [
                                      (0, o.jsx)("i", { className: "tbd" }),
                                      "\u5F85\u5B9A",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: "year-grid",
                            children: Tm.map((b) =>
                              (0, o.jsxs)(
                                "button",
                                {
                                  className: `year-card ${Na === b.year ? "selected" : ""}`,
                                  onClick: () => Am(b.year),
                                  children: [
                                    (0, o.jsxs)("span", {
                                      children: [
                                        (0, o.jsx)("b", { children: b.year }),
                                        (0, o.jsx)("em", { children: b.phase }),
                                      ],
                                    }),
                                    (0, o.jsxs)("strong", {
                                      children: [
                                        b.base.effectiveRate.toFixed(1),
                                        "%",
                                      ],
                                    }),
                                    (0, o.jsx)("small", {
                                      children:
                                        Math.abs(
                                          b.low.effectiveRate -
                                            b.high.effectiveRate,
                                        ) > 0.05
                                          ? `${b.low.effectiveRate.toFixed(1)}%\u2014${b.high.effectiveRate.toFixed(1)}%`
                                          : "\u65E0\u6570\u503C\u533A\u95F4",
                                    }),
                                    (0, o.jsxs)("p", {
                                      children: [
                                        "\u7A0E\u989D ",
                                        Ae(b.base.taxTotal),
                                        " USD",
                                      ],
                                    }),
                                    (0, o.jsx)("ul", {
                                      children: b.keyChanges
                                        .slice(0, 3)
                                        .map((Y) =>
                                          (0, o.jsx)("li", { children: Y }, Y),
                                        ),
                                    }),
                                  ],
                                },
                                b.year,
                              ),
                            ),
                          }),
                          (0, o.jsx)("p", {
                            className: "footnote",
                            children:
                              "CBS\u533A\u95F4\u4E3A\u5185\u90E8\u89C4\u5212\u60C5\u666F\uFF1B\u672A\u586B\u5199IS\u89C4\u5212\u7A0E\u7387\u65F6\uFF0C\u603B\u989D\u4E0D\u5305\u542BIS\u3002",
                          }),
                        ],
                      }),
                    (0, o.jsxs)("div", {
                      className: "summary-grid",
                      children: [
                        (0, o.jsxs)("div", {
                          children: [
                            (0, o.jsx)("span", {
                              children: "\u7EFC\u5408\u7A0E\u7387",
                            }),
                            (0, o.jsxs)("strong", {
                              children: [At.effectiveRate.toFixed(1), "%"],
                            }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          children: [
                            (0, o.jsx)("span", {
                              children: "\u9884\u8BA1\u7A0E\u989D",
                            }),
                            (0, o.jsx)("strong", { children: Ae(At.taxTotal) }),
                            (0, o.jsx)("small", { children: "USD" }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          children: [
                            (0, o.jsx)("span", {
                              children: "\u9884\u8BA1\u5B8C\u7A0E\u6210\u672C",
                            }),
                            (0, o.jsx)("strong", { children: Ae(At.total) }),
                            (0, o.jsx)("small", { children: "USD" }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsxs)("section", {
                      className: "tax-chart",
                      children: [
                        (0, o.jsxs)("div", {
                          className: "tax-chart-heading",
                          children: [
                            (0, o.jsx)("div", {
                              children: [
                                (0, o.jsx)("span", {
                                  className: "step-label",
                                  children: "\u7A0E\u8D39\u6784\u6210",
                                }),
                                (0, o.jsx)("h3", {
                                  children:
                                    "\u5404\u9879\u7A0E\u989D\u5360\u6BD4",
                                }),
                              ],
                            }),
                            (0, o.jsx)("span", {
                              className: "small-badge",
                              children: "\u5408\u8BA1 100%",
                            }),
                          ],
                        }),
                        (0, o.jsx)("div", {
                          className: "tax-chart-list",
                          children: At.lines
                            .filter((b) => b.amount > 0)
                            .map((b) => {
                              let Y =
                                At.taxTotal > 0
                                  ? (b.amount / At.taxTotal) * 100
                                  : 0;
                              return (0, o.jsxs)(
                                "div",
                                {
                                  className: "tax-chart-row",
                                  children: [
                                    (0, o.jsxs)("div", {
                                      className: "tax-chart-label",
                                      children: [
                                        (0, o.jsxs)("span", {
                                          children: [b.short, " \xB7 ", b.name],
                                        }),
                                        (0, o.jsxs)("b", {
                                          children: [Y.toFixed(1), "%"],
                                        }),
                                      ],
                                    }),
                                    (0, o.jsx)("div", {
                                      className: "tax-chart-track",
                                      role: "img",
                                      "aria-label": `${b.name}\u5360\u603B\u7A0E\u989D${Y.toFixed(1)}%`,
                                      children: (0, o.jsx)("i", {
                                        className: "tax-chart-bar",
                                        style: { width: `${Math.max(Y, 1)}%` },
                                      }),
                                    }),
                                    (0, o.jsxs)("small", {
                                      children: [
                                        "\u7A0E\u989D ",
                                        Ae(b.amount),
                                        " USD \xB7 \u5360CIF ",
                                        ((b.amount / At.cif) * 100).toFixed(1),
                                        "%",
                                      ],
                                    }),
                                  ],
                                },
                                `${b.short}-chart`,
                              );
                            }),
                        }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: "table-wrap",
                      children: (0, o.jsxs)("table", {
                        children: [
                          (0, o.jsx)("thead", {
                            children: (0, o.jsxs)("tr", {
                              children: [
                                (0, o.jsx)("th", {
                                  children: "\u7A0E\u8D39\u9879\u76EE",
                                }),
                                (0, o.jsx)("th", { children: "\u7A0E\u7387" }),
                                (0, o.jsx)("th", {
                                  children: "\u89C4\u5219\u72B6\u6001",
                                }),
                                (0, o.jsx)("th", {
                                  children: "\u7A0E\u989D\uFF08USD\uFF09",
                                }),
                                (0, o.jsx)("th", { children: "\u5360CIF" }),
                              ],
                            }),
                          }),
                          (0, o.jsx)("tbody", {
                            children: At.lines.map((b) =>
                              (0, o.jsxs)(
                                "tr",
                                {
                                  children: [
                                    (0, o.jsxs)("td", {
                                      children: [
                                        (0, o.jsx)("b", { children: b.name }),
                                        (0, o.jsx)("small", {
                                          children: b.short,
                                        }),
                                      ],
                                    }),
                                    (0, o.jsxs)("td", {
                                      children: [b.rate.toFixed(2), "%"],
                                    }),
                                    (0, o.jsxs)("td", {
                                      children: [
                                        (0, o.jsx)("span", {
                                          className: `status ${b.ruleStatus || "estimate"}`,
                                          children:
                                            Jy[b.ruleStatus || "estimate"],
                                        }),
                                        b.sourceUrl &&
                                          (0, o.jsx)("a", {
                                            href: b.sourceUrl,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "\u6CD5\u6E90\u2197",
                                          }),
                                      ],
                                    }),
                                    (0, o.jsx)("td", {
                                      children: Ae(b.amount),
                                    }),
                                    (0, o.jsxs)("td", {
                                      children: [
                                        ((b.amount / At.cif) * 100).toFixed(1),
                                        "%",
                                      ],
                                    }),
                                  ],
                                },
                                `${b.short}-${b.name}`,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                    (0, o.jsxs)("aside", {
                      className: "assumptions",
                      children: [
                        (0, o.jsxs)("strong", {
                          children: [
                            "\u672C\u6B21\u4F7F\u7528 ",
                            At.assumptions.length,
                            " \u9879\u5047\u8BBE",
                          ],
                        }),
                        (0, o.jsx)("ul", {
                          children: At.assumptions.map((b) =>
                            (0, o.jsx)("li", { children: b }, b),
                          ),
                        }),
                      ],
                    }),
                    (0, o.jsx)("p", {
                      className: "disclaimer",
                      children:
                        "\u7ED3\u679C\u7528\u4E8E\u65B9\u6848\u521D\u7B5B\uFF0C\u4E0D\u6784\u6210\u7A0E\u52A1\u6216\u6CD5\u5F8B\u610F\u89C1\u3002\u6B63\u5F0F\u7533\u62A5\u524D\u5E94\u7ED3\u5408\u7A0E\u53F7\u3001\u8BA4\u8BC1\u6587\u4EF6\u3001\u539F\u4EA7\u5730\u53CA\u8FDB\u53E3\u4E3B\u4F53\u590D\u6838\u3002",
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)("section", {
              className: "tool-grid",
              children: [
                (0, o.jsxs)("article", {
                  className: "panel tool-panel",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "tool-heading",
                      children: [
                        (0, o.jsxs)("div", {
                          children: [
                            (0, o.jsx)("span", {
                              className: "step-label",
                              children: "\u62A5\u544A\u4E0E\u5BFC\u51FA",
                            }),
                            (0, o.jsx)("h2", {
                              children: "\u5BFC\u51FA\u6D4B\u7B97\u7ED3\u679C",
                            }),
                          ],
                        }),
                        (0, o.jsx)("span", {
                          className: "small-badge",
                          children: "\u672C\u5730\u751F\u6210",
                        }),
                      ],
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "\u5BFC\u51FA\u6587\u4EF6\u540C\u65F6\u4FDD\u7559\u7A0E\u7387\u3001\u7A0E\u57FA\u3001\u7A0E\u989D\u3001\u89C4\u5219\u72B6\u6001\u548C\u672C\u6B21\u91C7\u7528\u7684\u5047\u8BBE\u3002",
                    }),
                    (0, o.jsxs)("div", {
                      className: "tool-actions",
                      children: [
                        (0, o.jsx)("button", {
                          onClick: Dm,
                          children: "\u5BFC\u51FA Excel",
                        }),
                        (0, o.jsx)("button", {
                          onClick: () => window.print(),
                          children: "\u6253\u5370 / \u4FDD\u5B58PDF",
                        }),
                        (0, o.jsx)("button", {
                          onClick: _m,
                          children: "\u5BFC\u51FAJSON",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)("article", {
                  className: "panel tool-panel",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "tool-heading",
                      children: [
                        (0, o.jsxs)("div", {
                          children: [
                            (0, o.jsx)("span", {
                              className: "step-label",
                              children: "\u8F66\u578B\u65B9\u6848",
                            }),
                            (0, o.jsx)("h2", {
                              children:
                                "\u5DF2\u4FDD\u5B58\u8F66\u578B\u65B9\u6848",
                            }),
                          ],
                        }),
                        (0, o.jsxs)("span", {
                          className: "small-badge",
                          children: [Me.length, "/30"],
                        }),
                      ],
                    }),
                    Me.length
                      ? (0, o.jsx)("div", {
                          className: "scenario-list",
                          children: Me.slice(0, 5).map((b) =>
                            (0, o.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, o.jsxs)("button", {
                                    onClick: () => Om(b),
                                    children: [
                                      (0, o.jsx)("b", { children: b.name }),
                                      (0, o.jsxs)("small", {
                                        children: [
                                          "\u7EFC\u5408\u7A0E\u7387 ",
                                          b.result.effectiveRate.toFixed(1),
                                          "% \xB7 ",
                                          Ae(b.result.taxTotal),
                                          " USD",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, o.jsx)("button", {
                                    className: "remove",
                                    "aria-label": `\u5220\u9664${b.name}`,
                                    onClick: () => Nm(b.id),
                                    children: "\xD7",
                                  }),
                                ],
                              },
                              b.id,
                            ),
                          ),
                        })
                      : (0, o.jsx)("p", {
                          className: "empty-copy",
                          children:
                            "\u70B9\u51FB\u9875\u9762\u53F3\u4E0A\u89D2\u201C\u4FDD\u5B58\u65B9\u6848\u201D\uFF0C\u5373\u53EF\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u5EFA\u7ACB\u8F66\u578B\u65B9\u6848\u5E93\u3002",
                        }),
                  ],
                }),
                (0, o.jsxs)("article", {
                  className: "panel tool-panel batch-panel",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "tool-heading",
                      children: [
                        (0, o.jsxs)("div", {
                          children: [
                            (0, o.jsx)("span", {
                              className: "step-label",
                              children: "\u6279\u91CF\u6D4B\u7B97",
                            }),
                            (0, o.jsx)("h2", {
                              children:
                                "\u4E00\u6B21\u6D4B\u7B97\u591A\u6B3E\u8F66\u578B",
                            }),
                          ],
                        }),
                        (0, o.jsx)("span", {
                          className: "small-badge",
                          children: "CSV\u5BFC\u5165",
                        }),
                      ],
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "\u4E0B\u8F7D\u6A21\u677F\u540E\u6309\u884C\u586B\u5199\u8F66\u578B\u3002\u7F3A\u5931\u6216\u65E0\u6548\u5B57\u6BB5\u4F1A\u91C7\u7528\u4FDD\u5B88\u9ED8\u8BA4\u503C\uFF0C\u5E76\u5728\u7ED3\u679C\u4E2D\u7EDF\u8BA1\u5047\u8BBE\u6570\u91CF\u3002",
                    }),
                    (0, o.jsxs)("div", {
                      className: "tool-actions",
                      children: [
                        (0, o.jsx)("button", {
                          onClick: Um,
                          children: "\u4E0B\u8F7D\u586B\u5199\u6A21\u677F",
                        }),
                        (0, o.jsxs)("label", {
                          className: "file-button",
                          children: [
                            "\u5BFC\u5165CSV\u5E76\u6D4B\u7B97",
                            (0, o.jsx)("input", {
                              type: "file",
                              accept: ".csv,text/csv",
                              onChange: (b) =>
                                void Cm(b.target.files && b.target.files[0]),
                            }),
                          ],
                        }),
                        qu.length > 0 &&
                          (0, o.jsx)("button", {
                            onClick: Bm,
                            children: "\u5BFC\u51FA\u6279\u91CF\u7ED3\u679C",
                          }),
                      ],
                    }),
                    Sm &&
                      qu.length > 0 &&
                      (0, o.jsx)("div", {
                        className: "table-wrap batch-table",
                        children: (0, o.jsxs)("table", {
                          children: [
                            (0, o.jsx)("thead", {
                              children: (0, o.jsxs)("tr", {
                                children: [
                                  (0, o.jsx)("th", {
                                    children: "\u8F66\u578B",
                                  }),
                                  (0, o.jsx)("th", {
                                    children: "\u56FD\u5BB6/\u80FD\u6E90",
                                  }),
                                  (0, o.jsx)("th", {
                                    children: "\u8FDB\u5165\u65F6\u95F4",
                                  }),
                                  (0, o.jsx)("th", {
                                    children: "\u7EFC\u5408\u7A0E\u7387",
                                  }),
                                  (0, o.jsx)("th", {
                                    children: "\u7A0E\u989D",
                                  }),
                                  (0, o.jsx)("th", {
                                    children: "\u5047\u8BBE",
                                  }),
                                ],
                              }),
                            }),
                            (0, o.jsx)("tbody", {
                              children: qu.map((b) =>
                                (0, o.jsxs)(
                                  "tr",
                                  {
                                    children: [
                                      (0, o.jsxs)("td", {
                                        children: [
                                          (0, o.jsx)("b", { children: b.name }),
                                          (0, o.jsxs)("small", {
                                            children: [
                                              b.importMode,
                                              b.stateCode
                                                ? ` \xB7 ${b.stateCode}`
                                                : "",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("td", {
                                        children: [b.country, " / ", b.energy],
                                      }),
                                      (0, o.jsx)("td", {
                                        children: b.entryDate,
                                      }),
                                      (0, o.jsxs)("td", {
                                        children: [
                                          b.effectiveRate.toFixed(1),
                                          "%",
                                        ],
                                      }),
                                      (0, o.jsxs)("td", {
                                        children: [Ae(b.taxTotal), " USD"],
                                      }),
                                      (0, o.jsxs)("td", {
                                        children: [b.assumptionCount, "\u9879"],
                                      }),
                                    ],
                                  },
                                  `${b.row}-${b.name}`,
                                ),
                              ),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      t === "laws" &&
        (0, o.jsxs)("main", {
          className: "page",
          children: [
            (0, o.jsxs)("div", {
              className: "page-title",
              children: [
                (0, o.jsx)("span", {
                  className: "eyebrow",
                  children:
                    "\u5B98\u65B9\u6CD5\u6E90\u4E0E\u9002\u7528\u8BF4\u660E",
                }),
                (0, o.jsx)("h1", {
                  children: "\u6C7D\u8F66\u7A0E\u7387\u6CD5\u89C4\u5E93",
                }),
                (0, o.jsx)("p", {
                  children:
                    "\u6309\u56FD\u5BB6\u67E5\u770B\u8BA1\u7B97\u5668\u91C7\u7528\u7684\u4E3B\u8981\u6CD5\u5F8B\u4F9D\u636E\u3002\u5916\u90E8\u94FE\u63A5\u76F4\u63A5\u6307\u5411\u653F\u5E9C\u6216\u7ACB\u6CD5\u673A\u5173\u7F51\u7AD9\u3002",
                }),
              ],
            }),
            (0, o.jsxs)("section", {
              className: `monitor-card ${Da.status}`,
              children: [
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("span", {
                      className: "step-label",
                      children: "\u81EA\u52A8\u6CD5\u89C4\u76D1\u6D4B",
                    }),
                    (0, o.jsx)("h2", {
                      children:
                        "\u5B98\u65B9\u6765\u6E90\u6BCF\u65E5\u81EA\u52A8\u68C0\u67E5",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "\u53D8\u5316\u53EA\u8FDB\u5165\u4EBA\u5DE5\u5BA1\u6838\u961F\u5217\uFF0C\u4E0D\u4F1A\u76F4\u63A5\u6539\u5199\u7A0E\u7387\u516C\u5F0F\u3002PDF\u9644\u4EF6\u4F1A\u8BB0\u5F55\u9875\u6570\u3001\u63D0\u53D6\u72B6\u6001\u548COCR\u590D\u6838\u6807\u8BB0\u3002",
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "monitor-metrics",
                  children: [
                    (0, o.jsxs)("span", {
                      children: [
                        (0, o.jsx)("b", { children: Da.source_count }),
                        (0, o.jsx)("small", {
                          children: "\u5B98\u65B9\u6765\u6E90",
                        }),
                      ],
                    }),
                    (0, o.jsxs)("span", {
                      children: [
                        (0, o.jsx)("b", { children: Da.changed_count }),
                        (0, o.jsx)("small", {
                          children: "\u5F85\u5BA1\u6838\u53D8\u5316",
                        }),
                      ],
                    }),
                    (0, o.jsxs)("span", {
                      children: [
                        (0, o.jsx)("b", { children: Da.error_count }),
                        (0, o.jsx)("small", {
                          children: "\u6293\u53D6\u5F02\u5E38",
                        }),
                      ],
                    }),
                    (0, o.jsxs)("span", {
                      children: [
                        (0, o.jsx)("b", { children: Da.pdf_source_count }),
                        (0, o.jsx)("small", { children: "PDF\u6765\u6E90" }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)("footer", {
                  children: [
                    (0, o.jsxs)("span", {
                      children: [
                        "\u6700\u8FD1\u68C0\u67E5\uFF1A",
                        ky(Da.run_at),
                      ],
                    }),
                    (0, o.jsx)("a", {
                      href: wy,
                      target: "_blank",
                      rel: "noreferrer",
                      children:
                        "\u6253\u5F00\u4EBA\u5DE5\u5BA1\u6838\u961F\u5217 \u2197",
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: "filter-row",
              children: ["ALL", "BR", "MX", "AR"].map((b) =>
                (0, o.jsx)(
                  "button",
                  {
                    className: gi === b ? "active" : "",
                    onClick: () => bm(b),
                    children: b === "ALL" ? "\u5168\u90E8" : Ru[b],
                  },
                  b,
                ),
              ),
            }),
            (0, o.jsx)("div", {
              className: "law-grid",
              children: Hm.map((b) =>
                (0, o.jsxs)(
                  "article",
                  {
                    className: "law-card",
                    children: [
                      (0, o.jsxs)("div", {
                        children: [
                          (0, o.jsx)("span", { children: Ru[b.country] }),
                          (0, o.jsx)("em", { children: b.topic }),
                        ],
                      }),
                      (0, o.jsx)("h2", { children: b.title }),
                      (0, o.jsx)("p", { children: b.summary }),
                      (0, o.jsxs)("footer", {
                        children: [
                          (0, o.jsx)("small", { children: b.updated }),
                          (0, o.jsx)("a", {
                            href: b.url,
                            target: "_blank",
                            rel: "noreferrer",
                            children:
                              "\u67E5\u770B\u5B98\u65B9\u539F\u6587 \u2197",
                          }),
                        ],
                      }),
                    ],
                  },
                  b.url,
                ),
              ),
            }),
          ],
        }),
      t === "advice" &&
        (0, o.jsxs)("main", {
          className: "page",
          children: [
            (0, o.jsxs)("div", {
              className: "page-title",
              children: [
                (0, o.jsx)("span", {
                  className: "eyebrow",
                  children: "\u57FA\u4E8E\u5F53\u524D\u53C2\u6570",
                }),
                (0, o.jsx)("h1", {
                  children: "\u51CF\u7A0E\u4E0E\u843D\u5730\u5EFA\u8BAE",
                }),
                (0, o.jsx)("p", {
                  children:
                    "\u5EFA\u8BAE\u662F\u65B9\u6848\u7B5B\u9009\u65B9\u5411\uFF0C\u6700\u7EC8\u9700\u7ED3\u5408\u4F9B\u5E94\u94FE\u3001\u8BA4\u8BC1\u3001\u914D\u989D\u548C\u5F53\u5730\u5B9E\u4F53\u5B89\u6392\u9A8C\u8BC1\u3002",
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: "advice-grid",
              children: [
                (0, o.jsxs)("article", {
                  children: [
                    (0, o.jsx)("span", { children: "01" }),
                    (0, o.jsx)("h2", {
                      children: "\u5E76\u884C\u6BD4\u8F83CBU\u4E0EKD/CKD",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "\u5BF9\u6574\u5957\u6563\u4EF6\u5148\u4F7F\u7528\u4FDD\u5B88\u89C4\u5212\u533A\u95F4\uFF0C\u518D\u901A\u8FC7BOM\u9010\u9879\u5F52\u7C7B\u5BFB\u627E\u771F\u5B9E\u7A0E\u7387\uFF0C\u907F\u514D\u628A\u6574\u5957\u65B9\u6848\u8BEF\u5F53\u6210\u5355\u4E00\u7A0E\u53F7\u3002",
                    }),
                  ],
                }),
                (0, o.jsxs)("article", {
                  children: [
                    (0, o.jsx)("span", { children: "02" }),
                    (0, o.jsx)("h2", {
                      children:
                        "\u4F18\u5148\u5B8C\u6210IPI\u6280\u672F\u8BA4\u8BC1",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "\u529F\u7387\u3001\u52A8\u529B\u5F62\u5F0F\u3001MOVER\u80FD\u6548\u3001\u5B89\u5168\u8F85\u52A9\u548C\u53EF\u56DE\u6536\u6027\u4F1A\u76F4\u63A5\u6539\u53D8\u5DF4\u897F\u4E58\u7528\u8F66IPI\uFF0C\u7F3A\u5931\u8BA4\u8BC1\u5C06\u5931\u53BB\u53EF\u8BC1\u660E\u7684\u51CF\u7A0E\u7A7A\u95F4\u3002",
                    }),
                  ],
                }),
                (0, o.jsxs)("article", {
                  children: [
                    (0, o.jsx)("span", { children: "03" }),
                    (0, o.jsx)("h2", {
                      children:
                        "\u5DDE\u7A0E\u4E0D\u80FD\u53EA\u6BD4\u8F83\u540D\u4E49\u7A0E\u7387",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "ICMS\u8FD8\u53D7\u7A0E\u5185\u8BA1\u5F81\u3001\u8FDB\u53E3\u5DDE\u3001\u7ECF\u8425\u5DDE\u3001\u4E13\u9879\u8F66\u8F86\u653F\u7B56\u53CA\u53EF\u80FD\u7684\u57FA\u91D1\u9644\u52A0\u5F71\u54CD\uFF0C\u5E94\u7ED3\u5408\u5B9E\u9645\u6D41\u8F6C\u8DEF\u5F84\u590D\u6838\u3002",
                    }),
                  ],
                }),
                (0, o.jsxs)("article", {
                  children: [
                    (0, o.jsx)("span", { children: "04" }),
                    (0, o.jsx)("h2", {
                      children:
                        "\u4E3A2027\u5E74\u4FDD\u7559\u60C5\u666F\u533A\u95F4",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "CBS\u53C2\u8003\u7A0E\u7387\u548C\u6C7D\u8F66\u9009\u62E9\u6027\u7A0E\u4ECD\u53EF\u80FD\u5F71\u54CD\u6700\u7EC8\u7ED3\u679C\u3002\u9884\u7B97\u5E94\u4FDD\u7559\u4F4E\u3001\u4E2D\u3001\u9AD8\u4E09\u6863\uFF0C\u4E0D\u628A\u89C4\u5212\u503C\u5F53\u6210\u5DF2\u751F\u6548\u7A0E\u7387\u3002",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
(0, gm.createRoot)(document.getElementById("root")).render((0, o.jsx)(Fy, {}));
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
