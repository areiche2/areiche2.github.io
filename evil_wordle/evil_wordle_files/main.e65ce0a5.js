this.wordle = this.wordle || {},
this.wordle.bundle = function(e) {
    "use strict";
    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function s(e, a) {
        if (!(e instanceof a))
            throw new TypeError("Cannot call a class as a function")
    }
    function t(e, a) {
        for (var s = 0; s < a.length; s++) {
            var t = a[s];
            t.enumerable = t.enumerable || !1,
            t.configurable = !0,
            "value"in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t)
        }
    }
    function o(e, a, s) {
        return a && t(e.prototype, a),
        s && t(e, s),
        e
    }
    function n(e, a, s) {
        return a in e ? Object.defineProperty(e, a, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[a] = s,
        e
    }
    function r(e, a) {
        if ("function" != typeof a && null !== a)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        a && l(e, a)
    }
    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function l(e, a) {
        return (l = Object.setPrototypeOf || function(e, a) {
            return e.__proto__ = a,
            e
        }
        )(e, a)
    }
    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function u(e, a, s) {
        return (u = d() ? Reflect.construct : function(e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new (Function.bind.apply(e, t));
            return s && l(o, s.prototype),
            o
        }
        ).apply(null, arguments)
    }
    function c(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (c = function(e) {
            if (null === e || (s = e,
            -1 === Function.toString.call(s).indexOf("[native code]")))
                return e;
            var s;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e))
                    return a.get(e);
                a.set(e, t)
            }
            function t() {
                return u(e, arguments, i(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            l(t, e)
        }
        )(e)
    }
    function p(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function m(e, a) {
        return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
    }
    function h(e) {
        var a = d();
        return function() {
            var s, t = i(e);
            if (a) {
                var o = i(this).constructor;
                s = Reflect.construct(t, arguments, o)
            } else
                s = t.apply(this, arguments);
            return m(this, s)
        }
    }
    function y(e, a) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, a) {
            var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == s)
                return;
            var t, o, n = [], r = !0, i = !1;
            try {
                for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value),
                !a || n.length !== a); r = !0)
                    ;
            } catch (e) {
                i = !0,
                o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i)
                        throw o
                }
            }
            return n
        }(e, a) || b(e, a) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function g(e) {
        return function(e) {
            if (Array.isArray(e))
                return f(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function b(e, a) {
        if (e) {
            if ("string" == typeof e)
                return f(e, a);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === s && e.constructor && (s = e.constructor.name),
            "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
        }
    }
    function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, t = new Array(a); s < a; s++)
            t[s] = e[s];
        return t
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "_letter", ""),
            n(p(e), "_state", "empty"),
            n(p(e), "_animation", "idle"),
            n(p(e), "_last", !1),
            n(p(e), "_reveal", !1),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "last",
            set: function(e) {
                this._last = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                this.$tile = this.shadowRoot.querySelector(".tile"),
                this.$tile.addEventListener("animationend", (function(a) {
                    "PopIn" === a.animationName && (e._animation = "idle"),
                    "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state,
                    e._animation = "flip-out"),
                    "FlipOut" === a.animationName && (e._animation = "idle",
                    e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row",{
                        bubbles: !0,
                        composed: !0
                    }))),
                    e._render()
                }
                )),
                this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                case "letter":
                    if (s === a)
                        break;
                    var t = "null" === s ? "" : s;
                    this._letter = t,
                    this._state = t ? "tbd" : "empty",
                    this._animation = t ? "pop" : "idle";
                    break;
                case "evaluation":
                    if (!s)
                        break;
                    this._state = s;
                    break;
                case "reveal":
                    this._animation = "flip-in",
                    this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                this.$tile && (this.$tile.textContent = this._letter,
                ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state),
                (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letter", "evaluation", "reveal"]
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e._letters = "",
            e._evaluation = [],
            e._length,
            e
        }
        return o(t, [{
            key: "evaluation",
            get: function() {
                return this._evaluation
            },
            set: function(e) {
                var a = this;
                this._evaluation = e,
                this.$tiles && this.$tiles.forEach((function(e, s) {
                    e.setAttribute("evaluation", a._evaluation[s]),
                    setTimeout((function() {
                        e.setAttribute("reveal", "")
                    }
                    ), 300 * s)
                }
                ))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)),
                this.$row = this.shadowRoot.querySelector(".row");
                for (var a = function(a) {
                    var s = document.createElement("game-tile")
                      , t = e._letters[a];
                    (t && s.setAttribute("letter", t),
                    e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]),
                    setTimeout((function() {
                        s.setAttribute("reveal", "")
                    }
                    ), 100 * a));
                    a === e._length - 1 && (s.last = !0),
                    e.$row.appendChild(s)
                }, s = 0; s < this._length; s++)
                    a(s);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"),
                this.addEventListener("animationend", (function(a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid")
                }
                ))
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                case "letters":
                    this._letters = s || "";
                    break;
                case "length":
                    this._length = parseInt(s, 10);
                    break;
                case "win":
                    if (null === s) {
                        this.$tiles.forEach((function(e) {
                            e.classList.remove("win")
                        }
                        ));
                        break
                    }
                    this.$tiles.forEach((function(e, a) {
                        e.classList.add("win"),
                        e.style.animationDelay = "".concat(100 * a, "ms")
                    }
                    ))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                var e = this;
                this.$row && this.$tiles.forEach((function(a, s) {
                    var t = e._letters[s];
                    t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                }
                ))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letters", "length", "invalid", "win"]
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme"
      , S = "colorBlindTheme"
      , _ = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            s(this, t),
            n(p(e = a.call(this)), "isDarkTheme", !1),
            n(p(e), "isColorBlindTheme", !1),
            e.attachShadow({
                mode: "open"
            });
            var o = JSON.parse(window.localStorage.getItem(j))
              , r = window.matchMedia("(prefers-color-scheme: dark)").matches
              , i = JSON.parse(window.localStorage.getItem(S));
            return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0),
            !0 !== i && !1 !== i || e.setColorBlindTheme(i),
            e
        }
        return o(t, [{
            key: "setDarkTheme",
            value: function(e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"),
                this.isDarkTheme = e,
                window.localStorage.setItem(j, JSON.stringify(e))
            }
        }, {
            key: "setColorBlindTheme",
            value: function(e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"),
                this.isColorBlindTheme = e,
                window.localStorage.setItem(S, JSON.stringify(e))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                    var s = a.detail
                      , t = s.name
                      , o = s.checked;
                    switch (t) {
                    case "dark-theme":
                        return void e.setDarkTheme(o);
                    case "color-blind-theme":
                        return void e.setColorBlindTheme(o)
                    }
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    function q(e, a) {
        return e === a || e != e && a != a
    }
    function E(e, a) {
        for (var s = e.length; s--; )
            if (q(e[s][0], a))
                return s;
        return -1
    }
    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;
    function C(e) {
        var a = -1
          , s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    C.prototype.clear = function() {
        this.__data__ = [],
        this.size = 0
    }
    ,
    C.prototype.delete = function(e) {
        var a = this.__data__
          , s = E(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1),
        --this.size,
        !0)
    }
    ,
    C.prototype.get = function(e) {
        var a = this.__data__
          , s = E(a, e);
        return s < 0 ? void 0 : a[s][1]
    }
    ,
    C.prototype.has = function(e) {
        return E(this.__data__, e) > -1
    }
    ,
    C.prototype.set = function(e, a) {
        var s = this.__data__
          , t = E(s, e);
        return t < 0 ? (++this.size,
        s.push([e, a])) : s[t][1] = a,
        this
    }
    ;
    var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global
      , T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self
      , I = L || T || Function("return this")()
      , M = I.Symbol
      , O = Object.prototype
      , R = O.hasOwnProperty
      , P = O.toString
      , $ = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;
    function D(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function(e) {
            var a = R.call(e, $)
              , s = e[$];
            try {
                e[$] = void 0;
                var t = !0
            } catch (e) {}
            var o = P.call(e);
            return t && (a ? e[$] = s : delete e[$]),
            o
        }(e) : function(e) {
            return H.call(e)
        }(e)
    }
    function G(e) {
        var s = a(e);
        return null != e && ("object" == s || "function" == s)
    }
    function B(e) {
        if (!G(e))
            return !1;
        var a = D(e);
        return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
    }
    var F, W = I["__core-js_shared__"], Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/
      , X = Function.prototype
      , V = Object.prototype
      , K = X.toString
      , Q = V.hasOwnProperty
      , Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function ee(e) {
        return !(!G(e) || (a = e,
        Y && Y in a)) && (B(e) ? Z : U).test(function(e) {
            if (null != e) {
                try {
                    return J.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var a
    }
    function ae(e, a) {
        var s = function(e, a) {
            return null == e ? void 0 : e[a]
        }(e, a);
        return ee(s) ? s : void 0
    }
    var se = ae(I, "Map")
      , te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;
    function re(e) {
        var a = -1
          , s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    function ie(e, s) {
        var t, o, n = e.__data__;
        return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
    }
    function le(e) {
        var a = -1
          , s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    re.prototype.clear = function() {
        this.__data__ = te ? te(null) : {},
        this.size = 0
    }
    ,
    re.prototype.delete = function(e) {
        var a = this.has(e) && delete this.__data__[e];
        return this.size -= a ? 1 : 0,
        a
    }
    ,
    re.prototype.get = function(e) {
        var a = this.__data__;
        if (te) {
            var s = a[e];
            return "__lodash_hash_undefined__" === s ? void 0 : s
        }
        return oe.call(a, e) ? a[e] : void 0
    }
    ,
    re.prototype.has = function(e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e)
    }
    ,
    re.prototype.set = function(e, a) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1,
        s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a,
        this
    }
    ,
    le.prototype.clear = function() {
        this.size = 0,
        this.__data__ = {
            hash: new re,
            map: new (se || C),
            string: new re
        }
    }
    ,
    le.prototype.delete = function(e) {
        var a = ie(this, e).delete(e);
        return this.size -= a ? 1 : 0,
        a
    }
    ,
    le.prototype.get = function(e) {
        return ie(this, e).get(e)
    }
    ,
    le.prototype.has = function(e) {
        return ie(this, e).has(e)
    }
    ,
    le.prototype.set = function(e, a) {
        var s = ie(this, e)
          , t = s.size;
        return s.set(e, a),
        this.size += s.size == t ? 0 : 1,
        this
    }
    ;
    function de(e) {
        var a = this.__data__ = new C(e);
        this.size = a.size
    }
    de.prototype.clear = function() {
        this.__data__ = new C,
        this.size = 0
    }
    ,
    de.prototype.delete = function(e) {
        var a = this.__data__
          , s = a.delete(e);
        return this.size = a.size,
        s
    }
    ,
    de.prototype.get = function(e) {
        return this.__data__.get(e)
    }
    ,
    de.prototype.has = function(e) {
        return this.__data__.has(e)
    }
    ,
    de.prototype.set = function(e, a) {
        var s = this.__data__;
        if (s instanceof C) {
            var t = s.__data__;
            if (!se || t.length < 199)
                return t.push([e, a]),
                this.size = ++s.size,
                this;
            s = this.__data__ = new le(t)
        }
        return s.set(e, a),
        this.size = s.size,
        this
    }
    ;
    var ue = function() {
        try {
            var e = ae(Object, "defineProperty");
            return e({}, "", {}),
            e
        } catch (e) {}
    }();
    function ce(e, a, s) {
        "__proto__" == a && ue ? ue(e, a, {
            configurable: !0,
            enumerable: !0,
            value: s,
            writable: !0
        }) : e[a] = s
    }
    function pe(e, a, s) {
        (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
    }
    var me, he = function(e, a, s) {
        for (var t = -1, o = Object(e), n = s(e), r = n.length; r--; ) {
            var i = n[me ? r : ++t];
            if (!1 === a(o[i], i, o))
                break
        }
        return e
    }, ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e, ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module, be = ge && ge.exports === ye ? I.Buffer : void 0, fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;
    function ve(e, a) {
        var s, t, o = a ? (s = e.buffer,
        t = new s.constructor(s.byteLength),
        new ke(t).set(new ke(s)),
        t) : e.buffer;
        return new e.constructor(o,e.byteOffset,e.length)
    }
    var we = Object.create
      , xe = function() {
        function e() {}
        return function(a) {
            if (!G(a))
                return {};
            if (we)
                return we(a);
            e.prototype = a;
            var s = new e;
            return e.prototype = void 0,
            s
        }
    }();
    var ze, je, Se = (ze = Object.getPrototypeOf,
    je = Object,
    function(e) {
        return ze(je(e))
    }
    ), _e = Object.prototype;
    function qe(e) {
        var a = e && e.constructor;
        return e === ("function" == typeof a && a.prototype || _e)
    }
    function Ee(e) {
        return null != e && "object" == a(e)
    }
    function Ae(e) {
        return Ee(e) && "[object Arguments]" == D(e)
    }
    var Ce = Object.prototype
      , Le = Ce.hasOwnProperty
      , Te = Ce.propertyIsEnumerable
      , Ie = Ae(function() {
        return arguments
    }()) ? Ae : function(e) {
        return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
    }
      , Me = Array.isArray;
    function Oe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
    function Re(e) {
        return null != e && Oe(e.length) && !B(e)
    }
    var Pe = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e
      , $e = Pe && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module
      , He = $e && $e.exports === Pe ? I.Buffer : void 0
      , Ne = (He ? He.isBuffer : void 0) || function() {
        return !1
    }
      , De = Function.prototype
      , Ge = Object.prototype
      , Be = De.toString
      , Fe = Ge.hasOwnProperty
      , We = Be.call(Object);
    var Ye = {};
    Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0,
    Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
    var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e
      , Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module
      , Xe = Ue && Ue.exports === Je && L.process
      , Ve = function() {
        try {
            var e = Ue && Ue.require && Ue.require("util").types;
            return e || Xe && Xe.binding && Xe.binding("util")
        } catch (e) {}
    }()
      , Ke = Ve && Ve.isTypedArray
      , Qe = Ke ? function(e) {
        return function(a) {
            return e(a)
        }
    }(Ke) : function(e) {
        return Ee(e) && Oe(e.length) && !!Ye[D(e)]
    }
    ;
    function Ze(e, a) {
        if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a)
            return e[a]
    }
    var ea = Object.prototype.hasOwnProperty;
    function aa(e, a, s) {
        var t = e[a];
        ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
    }
    var sa = /^(?:0|[1-9]\d*)$/;
    function ta(e, s) {
        var t = a(e);
        return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
    }
    var oa = Object.prototype.hasOwnProperty;
    function na(e, a) {
        var s = Me(e)
          , t = !s && Ie(e)
          , o = !s && !t && Ne(e)
          , n = !s && !t && !o && Qe(e)
          , r = s || t || o || n
          , i = r ? function(e, a) {
            for (var s = -1, t = Array(e); ++s < e; )
                t[s] = a(s);
            return t
        }(e.length, String) : []
          , l = i.length;
        for (var d in e)
            !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
        return i
    }
    var ra = Object.prototype.hasOwnProperty;
    function ia(e) {
        if (!G(e))
            return function(e) {
                var a = [];
                if (null != e)
                    for (var s in Object(e))
                        a.push(s);
                return a
            }(e);
        var a = qe(e)
          , s = [];
        for (var t in e)
            ("constructor" != t || !a && ra.call(e, t)) && s.push(t);
        return s
    }
    function la(e) {
        return Re(e) ? na(e, !0) : ia(e)
    }
    function da(e) {
        return function(e, a, s, t) {
            var o = !s;
            s || (s = {});
            for (var n = -1, r = a.length; ++n < r; ) {
                var i = a[n]
                  , l = t ? t(s[i], e[i], i, s, e) : void 0;
                void 0 === l && (l = e[i]),
                o ? ce(s, i, l) : aa(s, i, l)
            }
            return s
        }(e, la(e))
    }
    function ua(e, a, s, t, o, n, r) {
        var i = Ze(e, s)
          , l = Ze(a, s)
          , d = r.get(l);
        if (d)
            pe(e, s, d);
        else {
            var u, c = n ? n(i, l, s + "", e, a, r) : void 0, p = void 0 === c;
            if (p) {
                var m = Me(l)
                  , h = !m && Ne(l)
                  , y = !m && !h && Qe(l);
                c = l,
                m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
                    var s = -1
                      , t = e.length;
                    for (a || (a = Array(t)); ++s < t; )
                        a[s] = e[s];
                    return a
                }(i) : h ? (p = !1,
                c = function(e, a) {
                    if (a)
                        return e.slice();
                    var s = e.length
                      , t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t),
                    t
                }(l, !0)) : y ? (p = !1,
                c = ve(l, !0)) : c = [] : function(e) {
                    if (!Ee(e) || "[object Object]" != D(e))
                        return !1;
                    var a = Se(e);
                    if (null === a)
                        return !0;
                    var s = Fe.call(a, "constructor") && a.constructor;
                    return "function" == typeof s && s instanceof s && Be.call(s) == We
                }(l) || Ie(l) ? (c = i,
                Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function(e) {
                    return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
                }(l))) : p = !1
            }
            p && (r.set(l, c),
            o(c, l, t, n, r),
            r.delete(l)),
            pe(e, s, c)
        }
    }
    function ca(e, a, s, t, o) {
        e !== a && he(a, (function(n, r) {
            if (o || (o = new de),
            G(n))
                ua(e, a, r, s, ca, t, o);
            else {
                var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                void 0 === i && (i = n),
                pe(e, r, i)
            }
        }
        ), la)
    }
    function pa(e) {
        return e
    }
    function ma(e, a, s) {
        switch (s.length) {
        case 0:
            return e.call(a);
        case 1:
            return e.call(a, s[0]);
        case 2:
            return e.call(a, s[0], s[1]);
        case 3:
            return e.call(a, s[0], s[1], s[2])
        }
        return e.apply(a, s)
    }
    var ha = Math.max;
    var ya = ue ? function(e, a) {
        return ue(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: (s = a,
            function() {
                return s
            }
            ),
            writable: !0
        });
        var s
    }
    : pa
      , ga = Date.now;
    var ba = function(e) {
        var a = 0
          , s = 0;
        return function() {
            var t = ga()
              , o = 16 - (t - s);
            if (s = t,
            o > 0) {
                if (++a >= 800)
                    return arguments[0]
            } else
                a = 0;
            return e.apply(void 0, arguments)
        }
    }(ya);
    function fa(e, a) {
        return ba(function(e, a, s) {
            return a = ha(void 0 === a ? e.length - 1 : a, 0),
            function() {
                for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n; )
                    r[o] = t[a + o];
                o = -1;
                for (var i = Array(a + 1); ++o < a; )
                    i[o] = t[o];
                return i[a] = s(r),
                ma(e, this, i)
            }
        }(e, a, pa), e + "")
    }
    var ka, va = (ka = function(e, a, s) {
        ca(e, a, s)
    }
    ,
    fa((function(e, s) {
        var t = -1
          , o = s.length
          , n = o > 1 ? s[o - 1] : void 0
          , r = o > 2 ? s[2] : void 0;
        for (n = ka.length > 3 && "function" == typeof n ? (o--,
        n) : void 0,
        r && function(e, s, t) {
            if (!G(t))
                return !1;
            var o = a(s);
            return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
        }(s[0], s[1], r) && (n = o < 3 ? void 0 : n,
        o = 1),
        e = Object(e); ++t < o; ) {
            var i = s[t];
            i && ka(e, i, t, n)
        }
        return e
    }
    ))), wa = "gameState", xa = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1
    };
    function za() {
        var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
        return JSON.parse(e)
    }
    function ja(e) {
        var a = za();
        !function(e) {
            window.localStorage.setItem(wa, JSON.stringify(e))
        }(va(a, e))
    }
    var Sa = document.createElement("template");
    Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Color Blind Mode</div>\n          <div class="description">High contrast colors</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="happy.koala5960@fastmail.com?subject=Feedback" title="happy.koala5960@fastmail.com">Email</a>\n          \n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div>\n      <div id="privacy-policy"><a href="https://www.powerlanguage.co.uk/privacy-policy.html" target="_blank">Privacy Policy</a></div>\n      <div id="copyright">Copyright 2021-2022. All Rights Reserved.</div>\n    </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "gameApp", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e, a = this;
                this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash,
                this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset),
                this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                    e.stopPropagation();
                    var s = e.detail
                      , t = s.name
                      , o = s.checked
                      , n = s.disabled;
                    a.dispatchEvent(new CustomEvent("game-setting-change",{
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: t,
                            checked: o,
                            disabled: n
                        }
                    })),
                    a.render()
                }
                )),
                this.render()
            }
        }, {
            key: "render",
            value: function() {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
                e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var a = za();
                a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
                a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"),
                this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea, Aa = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "_duration", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                a.textContent = this.getAttribute("text"),
                this._duration = this.getAttribute("duration") || 1e3,
                "Infinity" !== this._duration && setTimeout((function() {
                    a.classList.add("fade")
                }
                ), this._duration),
                a.addEventListener("transitionend", (function(a) {
                    e.parentNode.removeChild(e)
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    function Ca() {
        dataLayer.push(arguments)
    }
    customElements.define("game-toast", Aa),
    window.dataLayer = window.dataLayer || [],
    Ca("js", new Date);
    Ca("config", "G-2SSGMHY3NP", {
        app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
        debug_mode: !1
    });
    var Ta = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "agora", "aroma", "caulk", "shake", "pupal", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "lynch", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "harry", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "fibre", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "slave", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "hasty", "trash", "fella", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "fetus", "butch", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "payer", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "gaily", "egret", "lilac", "sever", "field", "fluff", "hydro", "flack", "agape", "wench", "voice", "stead", "stalk", "berth", "madam", "night", "bland", "liver", "wedge", "augur", "roomy", "wacky", "flock", "angry", "bobby", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "unlit", "waste", "merit", "woven", "octal", "needy", "clown", "widow", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "eclat", "doubt", "parer", "chute", "stick", "trice", "alike", "sooth", "recap", "saint", "liege", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "unset", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "vomit", "ombre", "fanny", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore", "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide", "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch", "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm", "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo", "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least", "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic", "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair", "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying", "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer", "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate", "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order", "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy", "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy", "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut", "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal", "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve", "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect", "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush", "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow", "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully", "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman", "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo", "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "shine", "gecko", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match", "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave"]
      , La = ["haith", "ardri", "whoso", "ymolt", "fakie", "diddy", "hocks", "xrays", "muils", "bocca", "knout", "fests", "lazzo", "sapan", "fumes", "mavis", "dorsa", "ferny", "topee", "roust", "lassy", "deeds", "lutes", "pervy", "loped", "togue", "astun", "keets", "mosks", "sorgo", "bards", "tatie", "maare", "lores", "yates", "ngoma", "wilts", "soddy", "shool", "souct", "clavi", "faery", "lavas", "vades", "specs", "woons", "rings", "cooch", "nosed", "batts", "howbe", "zocco", "fonda", "cohen", "nabks", "dwale", "nunny", "beres", "berks", "rudie", "scull", "easle", "refis", "konbu", "lisps", "wembs", "crape", "flims", "moola", "nucha", "molto", "sicks", "dacha", "sorda", "calos", "gursh", "sokol", "ulnas", "negus", "spaes", "atony", "axite", "doter", "udals", "senna", "lunks", "muled", "beaus", "pekoe", "imped", "datal", "saved", "flexo", "weepy", "gadge", "moten", "amate", "kevel", "miffs", "sices", "sines", "lardy", "dells", "elvan", "varus", "patte", "tiars", "tolan", "laxer", "kroon", "mewls", "taupe", "woofs", "marcs", "zaidy", "holds", "solus", "mises", "blent", "hazed", "farer", "dault", "cholo", "zurfs", "splog", "bawks", "gride", "gymps", "puler", "nimbs", "waned", "defat", "aboon", "fader", "scuta", "warby", "hires", "sijos", "tones", "herby", "dowed", "mandi", "linns", "taiko", "bodge", "convo", "naras", "tarns", "skart", "septa", "dicer", "dolos", "pokey", "cosey", "filum", "bears", "docht", "voids", "deash", "invar", "meses", "blits", "spuds", "mired", "losel", "erick", "meane", "banty", "stook", "deils", "shule", "abram", "aures", "phang", "bower", "outta", "monad", "zendo", "boyos", "gobby", "piled", "repla", "buiks", "frigs", "spacy", "cokes", "yowes", "denet", "debby", "swith", "sulus", "swits", "congo", "preop", "lumps", "neele", "grews", "takis", "bints", "clast", "ulyie", "senvy", "deely", "curch", "moppy", "paged", "tythe", "bwana", "nudzh", "rocks", "talpa", "crepy", "xerox", "roots", "finds", "maned", "kulas", "brusk", "punts", "scugs", "upran", "fecit", "hazan", "humpy", "proso", "lusus", "culty", "bilby", "nohow", "naker", "paedo", "blear", "molys", "etage", "durrs", "poupt", "phare", "mojos", "purls", "pance", "bosun", "barmy", "irone", "altho", "rases", "fuffs", "darks", "cedes", "shite", "leccy", "curie", "groks", "niqab", "busty", "thine", "gleds", "feres", "perai", "amove", "malar", "takin", "jugum", "ology", "dhikr", "girls", "cuffs", "cloot", "quids", "rawin", "twits", "arled", "panim", "misgo", "nidus", "roded", "bawds", "ginch", "locos", "tices", "bidis", "limbi", "yodel", "tapis", "tolus", "pluot", "pooka", "aleck", "besit", "patin", "sumph", "benes", "telco", "fyces", "lazzi", "loued", "sease", "sheva", "menes", "dedal", "pooja", "ricer", "clews", "ditts", "koaps", "fains", "whoot", "nonce", "laids", "sukuk", "tuffs", "trims", "oggin", "boyed", "limey", "cloke", "murid", "goxes", "nairu", "durzi", "caves", "hashy", "vichy", "lomes", "rates", "soldo", "warts", "aggie", "topis", "saice", "twins", "broos", "ideas", "thana", "mangs", "blase", "hains", "decan", "figgy", "bisks", "libri", "monie", "ratus", "shows", "luvvy", "sepad", "smout", "haded", "fires", "rages", "arhat", "crena", "pored", "kikoi", "anoas", "nubby", "yeans", "abeam", "cyclo", "chirm", "guans", "mpret", "bowet", "pleon", "aurum", "axled", "spang", "royne", "glazy", "atmas", "tench", "moras", "remex", "pipes", "ragis", "derny", "remet", "lairs", "bouts", "klutz", "glees", "keirs", "sleds", "uncus", "tammy", "swerf", "visto", "gudes", "upend", "peavy", "binks", "skyfs", "spail", "douks", "jeers", "rusts", "burqa", "footy", "koine", "words", "sugan", "deres", "mayas", "grubs", "mugga", "scapi", "kiths", "loons", "borty", "folia", "arrah", "nodes", "steps", "anear", "vughs", "twier", "links", "erred", "polly", "douar", "ovule", "styli", "happi", "nalla", "cesti", "luxed", "laldy", "rangy", "dacks", "vents", "tegus", "grise", "aldol", "torrs", "teens", "numbs", "deify", "quags", "rices", "deans", "keros", "chimo", "eisel", "manse", "hoord", "tossy", "lytta", "kombu", "sesey", "birsy", "forky", "pures", "naris", "luted", "niter", "kophs", "mesel", "terfs", "amaut", "heigh", "kvass", "embow", "euked", "vapes", "aired", "carbo", "pukus", "cruds", "trews", "meves", "troad", "carse", "hurly", "aspie", "bider", "zymes", "keefs", "abysm", "shiso", "gucks", "gajos", "dorts", "scrab", "nitre", "milos", "bambi", "plotz", "shoyu", "sabot", "spawl", "doges", "twire", "poked", "mimsy", "valse", "hexad", "tolls", "pepos", "slove", "lulls", "nebel", "caron", "ronde", "wadis", "poley", "shakt", "turps", "udons", "lazar", "girsh", "calla", "sluse", "sores", "thali", "forby", "breys", "trigs", "inapt", "gules", "tunes", "horah", "scums", "pairs", "jukes", "tawas", "nocks", "leaze", "heeze", "supes", "locie", "temse", "pervs", "offed", "nears", "avant", "torta", "laver", "oints", "pelta", "quonk", "ravey", "rakus", "aulos", "glums", "weens", "moves", "bemud", "fools", "gaurs", "crare", "hadal", "comix", "frize", "navew", "adman", "ofter", "veiny", "lytic", "hooks", "dobes", "loofs", "budis", "lotto", "laddy", "arced", "jures", "stems", "birrs", "perts", "ruths", "recto", "crios", "prana", "loups", "stoat", "backs", "ictic", "tupik", "matza", "tyiyn", "pulka", "laten", "ottar", "skank", "glial", "knell", "runts", "pouff", "exurb", "fuzee", "kecks", "vrows", "batta", "holme", "shiai", "redon", "beeps", "peens", "globi", "arars", "skegs", "nagas", "pekes", "chirt", "fists", "ylkes", "woald", "pokie", "angas", "oculi", "tails", "meath", "noter", "bunco", "afore", "agloo", "krans", "porin", "hakea", "waddy", "brith", "cogon", "coffs", "baize", "mucho", "twink", "navvy", "saned", "retax", "gasps", "stich", "rurps", "kokam", "litre", "mosed", "foley", "pauls", "thawy", "diols", "fours", "raupo", "nicol", "forks", "tuffe", "taira", "saics", "hahas", "timon", "ixnay", "gyoza", "alack", "doomy", "aloha", "caver", "penis", "cloze", "prexy", "swaly", "shoos", "jacky", "stylo", "yacca", "ixora", "ulama", "facts", "apeek", "corns", "betty", "fytte", "ochre", "neper", "jowed", "scray", "yerds", "pests", "karsy", "uplit", "silos", "bindi", "poler", "quops", "sherd", "brond", "herry", "ainga", "surgy", "guids", "kutus", "keeps", "means", "sipes", "semis", "knars", "cuzes", "pasha", "meous", "masks", "deers", "agaze", "aquae", "amoks", "rayne", "festa", "lemme", "bilks", "korun", "etwee", "adyta", "tripy", "dogey", "soyuz", "fidos", "goths", "laith", "didos", "citer", "calks", "ludic", "muntu", "tomia", "recce", "tilak", "abaca", "sabed", "tugra", "nikah", "naled", "salps", "jaggs", "prunt", "tsubo", "mecks", "olent", "orval", "volts", "rownd", "matin", "coati", "roped", "prima", "monde", "odors", "divas", "otaku", "dimbo", "cajon", "cists", "virga", "turme", "cadre", "bowat", "lopes", "nazes", "babes", "primy", "nimps", "limbs", "cymes", "hests", "fawns", "blash", "curer", "abore", "cozie", "bliny", "salto", "pynes", "artal", "taxol", "noyed", "burro", "kiwis", "washy", "kraut", "pugil", "kelts", "biffs", "meres", "breme", "gaths", "kusso", "azoic", "trogs", "stats", "duroc", "carps", "raser", "luffs", "pipet", "honks", "corey", "loris", "fohns", "rotas", "rotis", "geals", "swizz", "reccy", "toing", "pauas", "boked", "skool", "petar", "bests", "immit", "duros", "tenty", "toman", "sheel", "rukhs", "saids", "nummy", "biccy", "jibba", "klong", "pyxis", "jarks", "lacet", "arvee", "tenny", "sprad", "verbs", "sture", "auger", "walks", "munga", "helot", "calms", "kesar", "rules", "solum", "deedy", "emmas", "razes", "fleer", "bijou", "betid", "fatly", "houff", "jafas", "riles", "blowy", "glaum", "alang", "laity", "blate", "tabla", "flyte", "mooks", "horks", "turrs", "kudzu", "evens", "teads", "nicht", "grume", "solon", "watap", "trooz", "prees", "mures", "meany", "boeps", "waney", "sward", "updos", "wands", "olein", "cunei", "hosey", "hedgy", "mohos", "wised", "basti", "garum", "netts", "drupe", "negro", "moits", "morel", "jacal", "kiddo", "borer", "geyer", "quaff", "arias", "dervs", "enols", "assai", "unbox", "noris", "babul", "glume", "dhole", "fiars", "yarfa", "socle", "flaxy", "aland", "gazal", "rorie", "acini", "seeps", "vowed", "thurl", "nomas", "ozeki", "lunes", "groat", "oleos", "norms", "bunds", "rindy", "amrit", "dhoti", "pisco", "fryer", "piccy", "snees", "serra", "moggy", "lysin", "owche", "bidon", "shama", "compt", "miens", "jenny", "reses", "punga", "wanna", "drent", "flong", "stars", "balas", "viver", "mopus", "apish", "hafiz", "lades", "trabs", "anent", "banco", "lends", "paths", "sexed", "sturt", "smoko", "aceta", "dared", "fibro", "glues", "gleys", "polks", "awork", "ditas", "jeely", "okras", "ombus", "poney", "trios", "mased", "grike", "wasps", "spaed", "odahs", "halms", "guyse", "pavan", "corse", "roupy", "crapy", "flues", "liney", "yucas", "trier", "pewit", "lowry", "gambs", "byssi", "grift", "repos", "saugh", "cager", "guaco", "usque", "blurs", "dusts", "limos", "orach", "cymas", "theic", "aweel", "nieve", "comms", "farle", "trave", "kilps", "serks", "strim", "dumas", "pangs", "withy", "anion", "xylyl", "canst", "samba", "tasse", "arris", "caged", "kails", "ripps", "wimps", "leese", "thaim", "dinic", "hants", "sanes", "ficos", "hulky", "wizes", "veers", "gaups", "varan", "rexes", "colas", "iambi", "vroom", "passe", "faves", "rills", "frowy", "rowen", "holey", "hings", "spait", "riems", "dinky", "kavas", "mache", "cyder", "iller", "royst", "wacke", "youse", "slugs", "chewy", "shahs", "muxes", "suras", "grama", "ainee", "culpa", "prats", "bason", "drony", "fangs", "erven", "gigot", "ruing", "bawns", "mopes", "docks", "peaty", "resat", "cavel", "agave", "hawse", "muggy", "dhols", "cecum", "wirra", "izard", "hafts", "skive", "azons", "casky", "locum", "azuki", "jibbs", "bonie", "pyros", "joyed", "albee", "dawed", "akela", "gaumy", "usnea", "klick", "kiore", "jasps", "amice", "webby", "fakey", "groma", "coure", "bided", "gibli", "kales", "nomes", "impro", "junky", "gangs", "neddy", "arsis", "tuxes", "writs", "probs", "suber", "menad", "twoer", "quich", "bombe", "hares", "cuppa", "scrip", "neeps", "kacha", "urbia", "fedex", "holon", "camus", "bocci", "hemal", "haoma", "puddy", "sidle", "taals", "beigy", "pilao", "zizit", "breid", "nacre", "czars", "enmew", "sotol", "gramp", "crunk", "paras", "duomi", "pulas", "parts", "nabes", "azote", "carbs", "dilli", "meffs", "cloam", "tolar", "piker", "tears", "cocco", "nonet", "nadas", "dauts", "sucky", "rawns", "stoep", "fetta", "bases", "mease", "huggy", "mires", "wetas", "miltz", "quaky", "zlote", "cubes", "thoft", "doeks", "skite", "damns", "cauda", "boose", "scody", "dykes", "ferns", "coyed", "nills", "cates", "balms", "campo", "staws", "peeks", "roary", "honer", "vasal", "muons", "coset", "jongs", "piler", "turds", "verra", "salet", "trued", "thiol", "adsum", "argol", "prigs", "grees", "slart", "fleas", "kedge", "wigan", "yages", "jagir", "jebel", "doris", "bayts", "sared", "hijra", "wiled", "amowt", "tuile", "hauns", "exons", "crise", "pursy", "desse", "tanks", "vairs", "gabby", "booms", "flees", "teene", "blatt", "clart", "hoors", "raphe", "wrang", "cripe", "bravi", "feare", "gloms", "smeek", "shans", "alane", "guqin", "gummi", "treks", "toric", "emacs", "incus", "beses", "saves", "elchi", "stere", "santo", "reeky", "mimes", "todde", "toots", "crans", "chums", "roads", "demoi", "comes", "lumas", "seils", "dript", "puked", "pokes", "lovat", "salpa", "samen", "gript", "ethyl", "recal", "eldin", "wiped", "stirp", "haets", "drest", "ataps", "kists", "mizen", "ceric", "moods", "lenis", "groof", "gulls", "lythe", "eniac", "qajaq", "fondu", "potsy", "covin", "oxter", "scurs", "stell", "ashes", "chiao", "hanap", "rungs", "tsuba", "leves", "ceorl", "ippon", "agrin", "pooed", "ixtle", "yecch", "hoaed", "chela", "rewax", "novum", "hoast", "goory", "oners", "ctene", "cloff", "aunes", "vexes", "petri", "flaks", "hewed", "lolly", "yarns", "azoth", "welly", "oncer", "fanos", "toped", "yappy", "wiles", "soree", "rewon", "ritzy", "stang", "skeos", "sapor", "uhlan", "blued", "jasey", "psyop", "huffy", "gomer", "comps", "kedgy", "toile", "hails", "metes", "neive", "nould", "grody", "malax", "chevy", "ryked", "cants", "pogge", "riata", "brome", "curli", "mechs", "nonas", "dholl", "toils", "hoghs", "quyte", "agued", "geans", "notum", "kefir", "kulan", "blist", "bedad", "musks", "regma", "vigas", "talls", "monic", "prate", "bowse", "gilly", "barny", "culls", "swees", "poeps", "zonae", "conky", "sinky", "alaps", "smaak", "ahold", "delph", "runes", "dents", "verry", "biont", "copra", "gluts", "mense", "nappy", "poind", "sated", "neath", "roods", "gurge", "pongs", "geres", "blobs", "lutea", "blebs", "kanga", "kakas", "carex", "panda", "welds", "lupin", "feyed", "resit", "hoots", "borms", "imshi", "soles", "midis", "marae", "maire", "oriel", "evils", "tains", "muirs", "qapik", "targe", "muser", "skint", "sleys", "aunts", "outed", "kawed", "yagis", "biggy", "scena", "tasar", "fraps", "dooce", "gonef", "shogi", "peery", "hodad", "palet", "calpa", "reefy", "joeys", "chyle", "malls", "danks", "stude", "calix", "piezo", "shits", "kaval", "veils", "ewers", "goary", "aster", "jamon", "tanty", "munis", "spred", "gular", "abord", "telae", "saver", "baith", "carob", "ammos", "cohab", "syrah", "neist", "lobos", "mauds", "ceili", "toque", "lefts", "slims", "junks", "begar", "helos", "eyass", "salle", "tharm", "samps", "achar", "keyer", "ledes", "welts", "scaff", "stewy", "tarok", "cutes", "mulse", "cowls", "reges", "circs", "cunts", "korma", "imaum", "topos", "brere", "skody", "wends", "epopt", "ricin", "rehem", "tinct", "teres", "muggs", "pukas", "orgue", "tarts", "herds", "aioli", "voddy", "cocks", "isles", "coits", "downs", "regie", "potch", "soces", "galea", "cires", "hosed", "pownd", "lotsa", "abler", "plena", "felly", "spaza", "fleam", "skips", "expos", "derns", "cards", "waxed", "erned", "spake", "krone", "gulfy", "debur", "jiber", "tarsi", "tauts", "pacts", "fleek", "ayres", "giros", "temed", "prosy", "bibes", "monty", "skies", "embox", "lirks", "hooky", "blume", "thema", "sicht", "tufty", "bevor", "tosas", "ponga", "poort", "braks", "heugh", "coxes", "kames", "fugie", "lakhs", "oxeye", "torts", "dashy", "meins", "fusks", "redry", "douse", "mairs", "droil", "leans", "trems", "frass", "gryce", "keeks", "sused", "oases", "oldie", "duroy", "acker", "ering", "kohen", "hylic", "eggar", "fribs", "roils", "lozen", "crons", "dyers", "dodos", "yampy", "ibrik", "renig", "gesse", "solas", "viold", "kievs", "zowie", "skins", "yauds", "honed", "tanna", "tween", "pricy", "chogs", "kooks", "bacca", "besaw", "fungo", "halts", "yorps", "dhaba", "morae", "tokay", "corks", "morne", "chams", "zarfs", "tempi", "unsod", "mobie", "tawie", "etape", "ceaze", "tabis", "kidge", "dorbs", "gybes", "chile", "dowds", "quena", "dryad", "spain", "amids", "zooms", "rudas", "jerid", "padri", "psoas", "zings", "repps", "knurl", "jarps", "innit", "yowls", "tians", "goier", "zilas", "cooms", "tomes", "kinos", "dicts", "chynd", "ranis", "miter", "arsey", "pints", "spoom", "tanky", "meets", "yikes", "dural", "winey", "karas", "glias", "bosie", "mirid", "tamis", "daych", "steem", "jagas", "kibbe", "faker", "nemns", "jesse", "trips", "redip", "infra", "grump", "sojus", "owrie", "sonly", "thole", "mumps", "pisos", "goaty", "kokum", "marka", "kurta", "baboo", "anise", "drags", "drops", "queme", "jnana", "ghazi", "fehme", "cloop", "haggs", "ocher", "felch", "livor", "nixie", "meths", "plugs", "toyed", "arvos", "netop", "bises", "fillo", "unces", "sopor", "darns", "folds", "chare", "deaws", "tayra", "karos", "mawky", "omens", "elops", "spazz", "glows", "laiks", "copes", "pagod", "goris", "weest", "femmy", "colly", "campi", "bohea", "sasse", "roist", "grebe", "podia", "melba", "sucks", "braws", "moony", "hakus", "kaiak", "appal", "mosts", "brosy", "pools", "yelks", "rayas", "snaws", "drail", "aread", "khats", "bulks", "shops", "orris", "lated", "enrol", "bemas", "gobis", "lotes", "jerry", "wamed", "pells", "donga", "khadi", "stept", "agama", "leman", "yummo", "oflag", "obeah", "lotic", "metic", "aboil", "zayin", "kaput", "unbag", "agita", "advew", "torsk", "bauds", "tromp", "teaze", "dicky", "elogy", "warns", "shivs", "ordos", "deave", "upsee", "culti", "brank", "haika", "medle", "cries", "assez", "copay", "cages", "redox", "phish", "anils", "teins", "odeum", "natis", "oracy", "dumbs", "sades", "thuja", "tyers", "jello", "rahed", "justs", "cowry", "arbas", "minas", "spahi", "pelts", "syphs", "fecht", "syned", "perse", "knubs", "domed", "hosts", "dowps", "durst", "flays", "fluey", "dwaum", "kuias", "skell", "wazir", "teste", "supra", "fauld", "tires", "pylon", "bangs", "tinny", "tooms", "manto", "gemel", "vints", "debts", "curny", "amins", "wanky", "mensa", "resid", "stroy", "peaze", "nevel", "omovs", "shags", "temps", "darky", "doody", "sechs", "briss", "tranq", "trapt", "sorra", "korai", "gills", "braxy", "hoary", "odeon", "foots", "runny", "bufty", "loche", "curds", "larks", "ewest", "gluon", "ewhow", "bebop", "walty", "cuvee", "trild", "calif", "wudus", "vouge", "schul", "dsobo", "abuna", "binal", "cafes", "wushu", "botas", "panga", "ranke", "reink", "daine", "mooly", "hyphy", "oxers", "volks", "yuans", "leres", "flabs", "twyer", "reist", "wryer", "divis", "sajou", "calfs", "didst", "kibei", "ngati", "onium", "combi", "aguti", "busby", "chavs", "bruts", "preif", "oppos", "gaged", "piles", "incog", "wanty", "ostia", "chico", "thees", "caboc", "pards", "disme", "duets", "mitis", "plows", "cuits", "rowth", "seeks", "trona", "ramet", "hiver", "battu", "heals", "adays", "feint", "piony", "shaly", "kolas", "frore", "gryke", "eched", "firks", "bodle", "tuner", "vaxes", "awarn", "phyla", "dopas", "mincy", "hangs", "bated", "hoses", "proke", "tufas", "cusps", "solds", "sozin", "glout", "vegos", "gleet", "allis", "coped", "lobus", "choil", "gambo", "flams", "trock", "bluds", "croci", "cadee", "gurls", "ament", "buffo", "snibs", "plook", "raked", "prore", "nakfa", "cloys", "teles", "krunk", "hooch", "jotun", "liras", "wases", "rheum", "farci", "synds", "porno", "asura", "maneh", "phial", "eiked", "talcy", "tores", "kells", "teeny", "rente", "agros", "daric", "hicks", "labis", "sofar", "shews", "gabba", "strum", "podgy", "mulga", "ribby", "tucks", "gigue", "plods", "waite", "jalop", "dekes", "loave", "poynt", "eevns", "acais", "morse", "beton", "shuts", "leges", "binds", "jodel", "skiey", "smaik", "hales", "coofs", "chivy", "crudy", "gyral", "veeps", "brack", "spiks", "obeli", "guimp", "skuas", "davit", "gilts", "buran", "apiol", "files", "sizes", "slams", "akkas", "etuis", "crost", "butut", "cruck", "zincs", "tales", "hanch", "ronin", "dorps", "decks", "segol", "facia", "umber", "dorrs", "vower", "boysy", "ceiba", "blins", "ishes", "staph", "trins", "benni", "kiack", "marts", "vinos", "ginny", "yenta", "alkos", "blore", "chays", "emery", "gluer", "rondo", "zebus", "plonk", "lotus", "fords", "peage", "aidas", "alkyd", "rosin", "flurr", "clour", "fezes", "plues", "layup", "cohos", "pirai", "dunes", "hydra", "rived", "disci", "yukes", "quern", "masas", "trant", "hempy", "emote", "nodal", "vitex", "zobus", "visas", "idees", "hints", "kinks", "kiefs", "afars", "fiefs", "drave", "hosel", "swarf", "vardy", "zerda", "globy", "kylie", "varix", "marid", "antre", "jabot", "bigha", "baaed", "wails", "waled", "rurus", "mavin", "mulsh", "owres", "skyre", "warez", "antsy", "rubus", "poulp", "umped", "barms", "zanja", "jarul", "moste", "orcas", "dwaal", "echos", "terms", "faffs", "rupia", "ambos", "wicky", "grype", "vodun", "zinky", "teffs", "yests", "deice", "ragee", "wolfs", "monte", "tawed", "reens", "brize", "octas", "dawks", "brees", "pubes", "miaou", "heeds", "tasks", "cocky", "dobby", "tetra", "tolyl", "wired", "expat", "bayes", "sonde", "myoma", "putto", "liang", "yedes", "fract", "sicky", "bassy", "nexus", "yacks", "mille", "apoop", "plash", "neume", "lazes", "peals", "tepas", "mochs", "barry", "darzi", "sexts", "omlah", "messy", "scoog", "urial", "mieve", "tronc", "proms", "currs", "delos", "ngaio", "stuns", "linos", "nifty", "krona", "yeves", "scuff", "veney", "beins", "cubed", "ratal", "toker", "snafu", "doles", "hoagy", "laufs", "yeven", "stupe", "pewee", "mirin", "fille", "dikey", "thesp", "poops", "whops", "jonty", "kaids", "lusts", "amnia", "saine", "quayd", "muted", "junco", "lines", "eaves", "dobro", "burrs", "iotas", "kheda", "sokah", "milor", "furls", "feaze", "hoops", "vomer", "roric", "eagre", "dykon", "cohog", "ached", "chimb", "tents", "kelty", "serai", "cerne", "payed", "devon", "chino", "pyric", "haler", "rares", "oshac", "abcee", "spayd", "chias", "dints", "cesse", "rents", "artis", "richt", "toses", "gibus", "hayle", "leavy", "malwa", "pacas", "rebop", "amyls", "yeads", "adunc", "amped", "novas", "lehua", "calls", "styme", "coste", "nifes", "stile", "haply", "wires", "kukus", "gawsy", "caums", "daces", "stops", "booky", "wakes", "arear", "enows", "mezes", "maaed", "mashy", "sputa", "shays", "yocks", "bakes", "cundy", "vraic", "reans", "scoup", "kakis", "sunup", "bahut", "karoo", "orgic", "tosed", "sulph", "braza", "humic", "snirt", "forts", "fusel", "redos", "kaika", "lucks", "elans", "gouks", "iftar", "timbo", "liked", "yolky", "noule", "knawe", "sabir", "soars", "maced", "urged", "ruggy", "snods", "jocos", "bleys", "wormy", "plaas", "melik", "jupon", "belah", "mozes", "tweel", "scaud", "giust", "micht", "flews", "wanle", "causa", "sorus", "rewin", "souce", "shuls", "bajan", "simar", "whios", "helio", "cored", "tamal", "taras", "repeg", "gerbe", "rapes", "reata", "lyses", "carvy", "boabs", "gadjo", "demes", "panto", "ulvas", "preps", "doddy", "perms", "diram", "deary", "tater", "pruta", "stoma", "urvas", "ulans", "bundu", "petit", "cavie", "wuxia", "soare", "toppy", "knaur", "meint", "wuddy", "fiqhs", "donko", "rumps", "emend", "luges", "chirk", "toons", "swart", "pawls", "bonce", "cadgy", "awato", "urena", "byded", "camas", "awmry", "corni", "preed", "ukase", "rhomb", "potin", "biach", "suids", "ghees", "cella", "sined", "surfy", "parle", "huzza", "fitte", "snift", "sammy", "inerm", "shins", "quino", "kiter", "ervil", "mochy", "bares", "chocs", "issei", "voled", "comus", "pronk", "fyrds", "beads", "braky", "mabes", "snaps", "pyral", "deeve", "grist", "hadji", "coact", "goold", "rebbe", "mauts", "heame", "duded", "biggs", "sdein", "oxime", "matzo", "fagin", "dewed", "aesir", "navar", "porty", "fenny", "franc", "schav", "monos", "teats", "mahoe", "suety", "prial", "dines", "sowar", "morro", "wauks", "nudie", "kylin", "stumm", "ambit", "absey", "dowse", "trons", "blini", "askos", "hajji", "fouat", "jomon", "jivey", "limpa", "gowks", "nancy", "dsomo", "nutso", "sects", "niffy", "snubs", "ictal", "javel", "kinda", "yourn", "vesta", "bowrs", "fubby", "haint", "wolve", "doses", "owies", "barye", "weals", "pudor", "ghaut", "krais", "guano", "resaw", "hijab", "cawks", "bursa", "fifer", "knits", "hacek", "howls", "torcs", "mimeo", "gorps", "caphs", "pheon", "riled", "licht", "tuyer", "fusil", "paise", "yeuks", "linin", "lassu", "lives", "scala", "conus", "pacey", "hucks", "talma", "makos", "yells", "styed", "flans", "vison", "nawab", "cyano", "pareo", "fisks", "ploat", "zingy", "deets", "hasks", "illth", "nomic", "gades", "yechs", "sucre", "wazoo", "preve", "talks", "seams", "saris", "salse", "blets", "lowts", "coria", "meynt", "dukka", "rhyta", "sheol", "japer", "haems", "imago", "snoke", "modii", "fango", "sekts", "loess", "gunks", "flexi", "girds", "dynel", "rerig", "moths", "wadts", "chive", "ganof", "janns", "newel", "chars", "dewar", "thigs", "auras", "fient", "dawah", "doxie", "exies", "fomes", "mould", "brers", "seels", "noles", "buchu", "jiggy", "sukhs", "nisse", "lathy", "slops", "whang", "biter", "pukes", "sharn", "wasts", "sarks", "tanka", "molts", "warms", "thorp", "thane", "derry", "whams", "burka", "oobit", "kirks", "tikas", "amole", "laser", "gotch", "mezze", "apage", "sizar", "emoji", "musse", "pured", "terek", "vibes", "gowfs", "fovea", "pecky", "hevea", "scran", "quiff", "touse", "jawan", "lobed", "quats", "kaifs", "bavin", "miasm", "myops", "uncap", "trans", "briks", "pilaf", "clote", "cirri", "abohm", "spalt", "smews", "merel", "klang", "veles", "yitie", "halwa", "byrls", "ayont", "wigga", "arepa", "renne", "berko", "gowls", "ruffs", "toeas", "beers", "ended", "mawrs", "zanze", "saree", "bunks", "aflaj", "avion", "agast", "matte", "vegie", "droid", "drily", "folks", "sists", "ocrea", "salol", "slews", "flamm", "waldo", "hoons", "bothy", "yourt", "sycee", "peepe", "vinew", "dreks", "rebuy", "bonze", "wynds", "veena", "yerba", "louie", "burps", "sakis", "fixit", "thrip", "borna", "maiko", "cymae", "races", "deevs", "tates", "narky", "bools", "soaps", "woofy", "poxed", "naves", "molds", "gappy", "klieg", "kypes", "gynae", "porta", "byway", "shirs", "clade", "famed", "ethne", "peans", "ettin", "tepal", "flats", "carap", "volae", "hauls", "waved", "xebec", "moust", "hoser", "pudge", "louma", "oucht", "snars", "wanks", "brigs", "seeds", "typos", "horme", "joram", "biers", "lowan", "cames", "docus", "ureas", "vamps", "molla", "parti", "butes", "quods", "graff", "daffy", "cacky", "mirvs", "roked", "gelee", "spirt", "figos", "exome", "selfs", "delfs", "bruit", "henny", "betas", "weels", "gusla", "spick", "anigh", "grese", "raped", "snyes", "exing", "kabab", "tratt", "foals", "vaped", "regos", "sooky", "bemad", "foyle", "shaps", "doits", "loofa", "frets", "grouf", "dunsh", "aleft", "talas", "maxis", "jurel", "leafs", "thunk", "gisms", "medii", "agria", "seirs", "benne", "baked", "kapas", "lengs", "pseud", "nonny", "bubby", "zooey", "aroha", "nippy", "adown", "padre", "sates", "trods", "renos", "luter", "mapau", "thebe", "algum", "pedro", "farls", "plaps", "baken", "tahrs", "troth", "manis", "conin", "bumph", "krewe", "knops", "swack", "whump", "raird", "tutty", "gated", "blimy", "seely", "brows", "weets", "sairs", "males", "coyau", "pargo", "acock", "hanse", "boxes", "parma", "bisom", "kaury", "acmic", "suses", "polts", "smorg", "tiyin", "kains", "satay", "etics", "items", "gotta", "foyne", "seres", "genal", "empts", "stela", "korat", "salmi", "altos", "etnas", "villi", "pioys", "perdy", "ugged", "femal", "cions", "gogos", "pipas", "kilts", "rosti", "pales", "vendu", "ixias", "bundy", "kepis", "mingy", "katal", "mylar", "dings", "kipps", "rance", "roset", "auloi", "proem", "podge", "yoker", "hakas", "afear", "smarm", "filks", "sehri", "grots", "weans", "gofer", "duing", "apery", "palsa", "maerl", "verts", "gasts", "bungs", "epode", "memes", "primp", "gibed", "dimps", "gawks", "lurgy", "goras", "lidar", "skols", "chine", "doilt", "shoat", "gally", "cyton", "teiid", "touks", "atria", "coxae", "colin", "halse", "ariot", "noirs", "musha", "droog", "nauch", "sways", "pelma", "bevue", "baloo", "deles", "tuath", "aline", "sigil", "hived", "looky", "fogle", "socko", "yarrs", "mardy", "ankus", "unman", "baisa", "oxims", "spans", "nongs", "minos", "tawse", "frizz", "hexed", "linds", "burds", "tunds", "boody", "gloze", "yucks", "tapet", "pepsi", "conks", "favus", "dulce", "amici", "aizle", "cabas", "limas", "uveas", "curst", "dites", "lande", "unwit", "japes", "tules", "faver", "chaft", "inrun", "gamay", "sards", "whish", "bells", "inorb", "pavis", "dudes", "teels", "anker", "octyl", "brays", "seton", "rosit", "wahoo", "shtik", "winks", "acyls", "dhaks", "kempy", "scart", "curfs", "malis", "acold", "beats", "mikra", "siens", "chack", "herns", "setts", "jinne", "fikes", "twiny", "stipa", "pulps", "braze", "jocky", "oared", "beths", "feyly", "borak", "elemi", "ortho", "ruffe", "styte", "tarry", "snoek", "tuism", "indew", "daven", "barps", "narks", "prill", "cibol", "nappe", "munts", "ajuga", "vlies", "leats", "mutis", "owlet", "jorum", "risus", "aggro", "hokas", "charr", "gazar", "aruhe", "parev", "frust", "flory", "hizen", "chelp", "ripes", "bonks", "chuts", "punty", "debel", "camis", "quean", "bayer", "reins", "merls", "salue", "hyoid", "snits", "otary", "herye", "feens", "nerts", "diker", "crore", "curns", "lants", "xylic", "sloom", "inarm", "mowed", "doffs", "waker", "galah", "gobar", "hoers", "silva", "perve", "nouns", "zappy", "lindy", "murex", "pryse", "russe", "salat", "pacer", "chins", "softy", "boors", "sikas", "loots", "tepoy", "phpht", "homos", "staun", "serin", "gests", "kiers", "iglus", "ollav", "maiks", "urent", "crams", "ketol", "malam", "gales", "holed", "odyle", "luffa", "traps", "vagal", "sluts", "degas", "faxes", "incel", "botel", "howes", "unsew", "wried", "bitte", "abrim", "redan", "meows", "ponce", "steen", "goals", "baths", "hauds", "buppy", "kooky", "fonly", "kudus", "rodes", "roofs", "skosh", "skink", "breds", "tiers", "gyved", "epics", "ratos", "weber", "gynos", "urali", "globs", "buffa", "wrast", "ancho", "exeem", "feods", "colog", "beano", "masty", "swobs", "views", "horsy", "jotty", "imido", "fumer", "eaved", "helve", "gaper", "ports", "fides", "sweir", "faugh", "pants", "wirer", "whiss", "sumis", "swive", "foids", "kirri", "brava", "ensky", "refry", "accoy", "gobbi", "virtu", "lased", "hopak", "wools", "beans", "hoiks", "tifts", "fucus", "icers", "clomb", "triff", "margs", "arsed", "keens", "hause", "bunty", "asdic", "falaj", "porks", "pubis", "veldt", "cased", "bitch", "sagos", "deawy", "calmy", "noxal", "sinks", "aygre", "wooed", "omrah", "damar", "tanti", "bifid", "etyma", "gazed", "brise", "panes", "uredo", "hault", "dorad", "dearn", "chyme", "barca", "years", "bhats", "skyey", "mento", "rains", "dempt", "tuned", "glans", "trone", "fossa", "balls", "rimes", "halva", "soots", "gucky", "slaps", "heaps", "paans", "clods", "kexes", "boras", "noggs", "chufa", "bunya", "betes", "snobs", "humfs", "yamen", "rauns", "atopy", "lotas", "dauby", "kaama", "lowns", "goety", "zooks", "yaars", "fasti", "mulct", "hamal", "coney", "thilk", "bonny", "seamy", "mokos", "neeze", "murri", "sizer", "amene", "sculk", "gonch", "yoghs", "wifey", "piths", "biked", "gyros", "xeric", "based", "enure", "milko", "dited", "trest", "coats", "gowan", "arroz", "amban", "loral", "acned", "rykes", "chana", "gamas", "revet", "kithe", "bairn", "moyls", "poods", "seifs", "doobs", "momus", "sools", "ramie", "yeard", "lills", "baldy", "riels", "reech", "whaup", "taigs", "smuts", "tares", "paean", "prise", "pours", "boggy", "pacta", "penni", "puffa", "nowls", "osmic", "timps", "kazis", "rarks", "glugs", "beaux", "nates", "uncia", "dooms", "smaze", "drear", "laers", "zills", "zanza", "huers", "peghs", "wauff", "ungag", "agios", "cores", "trank", "gnarr", "etens", "aulic", "shent", "pudic", "kines", "avens", "poake", "pixes", "obias", "rewan", "mensh", "baits", "mauby", "ahind", "vitas", "ensew", "newts", "sculp", "venin", "selle", "yipes", "ogive", "vises", "nemas", "typal", "romal", "jobed", "gelid", "heirs", "wives", "apter", "gynny", "drice", "noxes", "solan", "qophs", "sensi", "madid", "eloin", "wheal", "meare", "deems", "serge", "tangi", "rimed", "pomps", "alamo", "drant", "coaly", "zooty", "fused", "ronne", "nudes", "picot", "leish", "urase", "greek", "walds", "umrah", "softs", "frump", "demos", "bands", "funds", "embay", "hopes", "rotte", "bahus", "alefs", "waler", "tapas", "homed", "caese", "susus", "stews", "canes", "fries", "jutty", "kendo", "joins", "whits", "dynes", "saola", "aalii", "lyres", "phizz", "sophs", "arnas", "gytes", "palls", "poncy", "machs", "oubit", "boeuf", "lions", "tardo", "stubs", "jutes", "togae", "zooid", "unget", "ephas", "sykes", "toyon", "eejit", "bipod", "testa", "lassi", "glike", "resew", "grued", "gives", "rybat", "cagot", "dwams", "tabes", "lears", "coder", "vertu", "fixed", "hoped", "glute", "aleph", "stirk", "bardo", "choom", "coble", "geums", "shlep", "gulas", "theow", "aidoi", "geare", "taber", "ducky", "pongy", "clous", "treif", "yeahs", "syens", "fluyt", "hoppy", "atuas", "vitae", "picra", "noyau", "refel", "airth", "hexyl", "khoum", "berme", "cruet", "punka", "venge", "crusy", "overs", "kranz", "hooty", "scatt", "rushy", "hoods", "heder", "ummed", "knive", "dauds", "yaups", "auris", "hamza", "terce", "nance", "jeton", "ylems", "sycon", "fleur", "rimer", "waifs", "kvell", "lurve", "stend", "vetch", "penie", "tubby", "peres", "slish", "chubs", "boxty", "beams", "stoln", "acidy", "olpae", "yonks", "vales", "milks", "yarta", "snebs", "gleed", "educe", "papas", "astir", "chons", "tamps", "ouphe", "liths", "dreck", "fogey", "fubar", "tushy", "pasts", "terai", "beals", "gusli", "zines", "safes", "subas", "risps", "harns", "ogler", "coypu", "runed", "naira", "kilim", "rummy", "kheth", "rivel", "spean", "hudud", "kores", "javas", "pents", "gorms", "nitro", "neems", "rased", "dribs", "pilis", "quins", "armed", "stane", "shchi", "whity", "mutha", "hilts", "bonne", "knish", "holms", "stens", "tiyns", "divvy", "aloed", "argon", "zests", "naric", "degum", "gippy", "icons", "imari", "grids", "voces", "paals", "cleep", "fagot", "sabra", "musts", "lited", "limes", "xenon", "egest", "maneb", "feeds", "hutia", "tynes", "adred", "reeve", "garda", "strew", "bents", "ratel", "donsy", "debud", "rajes", "bluet", "archi", "caffs", "gadso", "bimbo", "fetes", "urnal", "houfs", "noops", "pikas", "chiel", "kaphs", "gyves", "taped", "coked", "lingy", "wared", "drows", "ossia", "rebid", "ergos", "exine", "tenge", "dreys", "venal", "prims", "dosed", "blite", "cowan", "oncet", "mosey", "tryer", "linux", "duked", "flows", "gothy", "azide", "twirp", "ictus", "yerks", "erses", "huzzy", "fumet", "nurls", "auric", "genom", "talky", "oxlip", "cento", "toner", "crith", "crame", "fesse", "vexil", "gamed", "sagas", "kogal", "fraim", "mesne", "poppa", "bhang", "delts", "texts", "hadst", "satem", "agues", "clunk", "sheal", "bomas", "danio", "ingan", "panni", "paeon", "plong", "pulis", "hecht", "moper", "pagri", "doums", "buteo", "braes", "bubal", "frith", "dadah", "ogeed", "coarb", "jemmy", "atoms", "woods", "jibes", "frons", "hauld", "marms", "cully", "terfe", "spile", "fiche", "putts", "koels", "azyms", "hokis", "tikis", "urson", "yolks", "humps", "fisty", "lurgi", "serfs", "booed", "unarm", "skios", "sirih", "reals", "larns", "romps", "musar", "howks", "maxed", "tigon", "luaus", "koses", "cukes", "caird", "areas", "ummah", "fuzil", "iroko", "cured", "diets", "fuses", "snook", "spelk", "ebbet", "daiko", "sitka", "bulgy", "lunas", "ulnae", "awing", "jarta", "oidia", "hazer", "urubu", "wayed", "raxed", "poyse", "ponds", "areic", "rones", "realo", "whore", "bydes", "rhone", "favas", "padle", "crims", "rheas", "needs", "yucko", "bilgy", "crout", "neese", "wonts", "souks", "jougs", "clans", "tilly", "aspen", "hoves", "panax", "grego", "faurd", "huias", "klett", "wanly", "tryke", "abmho", "skort", "sweal", "fowth", "faxed", "sprug", "yapon", "fayre", "meril", "boite", "cowks", "moyas", "motts", "toaze", "ulnar", "gemot", "heare", "druse", "sonce", "scrow", "alowe", "bardy", "clave", "blaws", "laigh", "siles", "ricey", "lunts", "esnes", "almeh", "phene", "revie", "poddy", "deals", "heros", "fanks", "kaims", "sored", "notal", "moots", "cowed", "treen", "dover", "bimah", "evite", "accas", "kibes", "duppy", "speat", "speug", "twats", "pirog", "shojo", "lamas", "gyres", "shoji", "kulfi", "daris", "trows", "remap", "tewed", "owsen", "roneo", "hinky", "faffy", "saags", "cetyl", "phlox", "wavey", "ogles", "quass", "amine", "doona", "scars", "kills", "poofy", "ludes", "roman", "apsis", "snoot", "apayd", "sills", "louts", "gloop", "firns", "raced", "bails", "vrils", "hapus", "tutee", "trode", "aitus", "hiant", "asked", "racks", "stobs", "pyins", "snash", "gadje", "tenno", "pleas", "slojd", "zoist", "rifer", "beets", "flitt", "deros", "namma", "anata", "camps", "surfs", "sises", "babus", "flype", "grads", "solde", "ephod", "relit", "aeons", "diyas", "loids", "baffy", "plops", "zoppa", "execs", "saheb", "hecks", "soupy", "zygal", "tajes", "undam", "proas", "mores", "tined", "surat", "vibex", "wides", "cains", "whirr", "pupus", "spams", "mooch", "jobes", "brung", "rangi", "licit", "kobos", "towzy", "sabes", "boded", "withe", "roule", "eeven", "scogs", "vaned", "dazes", "cutis", "rymme", "bates", "bungy", "avast", "koker", "semee", "sinhs", "eyres", "vawte", "gobbo", "dormy", "velds", "named", "burgs", "garni", "kreep", "meson", "kinas", "cozen", "mucin", "farts", "flegs", "uraei", "fucks", "bedes", "kojis", "proyn", "gamin", "shims", "dubbo", "shoes", "aswim", "cleik", "yelms", "atimy", "doven", "clype", "xenic", "naiad", "dwile", "afara", "leady", "ecads", "menus", "ileus", "floes", "comas", "yesty", "thrae", "signs", "maqui", "senes", "fezzy", "fouds", "firry", "ogres", "vifda", "oleum", "palea", "visne", "irade", "loast", "nitty", "cezve", "tonka", "kagus", "saman", "irids", "coths", "whata", "calps", "dorba", "styre", "uvula", "rebit", "dames", "birls", "muley", "stabs", "gaits", "abash", "lisks", "palis", "kreng", "satai", "slomo", "faces", "unket", "snips", "imine", "dirke", "xoana", "snush", "cruve", "corso", "steno", "zoaea", "squiz", "tohos", "bezil", "mixer", "lacks", "zymic", "coved", "buras", "mitch", "olpes", "gusts", "kites", "yager", "sadza", "mongo", "impot", "cinct", "uhuru", "blees", "umbos", "sybow", "nukes", "bants", "geest", "fouls", "wiels", "tsars", "trape", "torse", "pilus", "escar", "shwas", "fount", "bling", "liefs", "butts", "gawps", "dozes", "acmes", "fyked", "infix", "seism", "kurus", "sabre", "kyles", "mamie", "womby", "reeks", "bania", "tuktu", "amens", "areal", "yeuky", "lowed", "unmix", "abacs", "puton", "prows", "wyted", "hogan", "goofs", "yelps", "molas", "dobla", "craic", "cools", "rubel", "obied", "soyas", "mifty", "oboli", "emmer", "speal", "balsa", "kraft", "shand", "varas", "blook", "fremd", "mbira", "liber", "ticed", "shako", "luger", "klaps", "casts", "toney", "dobra", "telos", "ramin", "asper", "boart", "sprue", "wroke", "rorid", "volta", "daman", "civie", "welke", "sacks", "riots", "pikul", "judas", "ciggy", "tanto", "loord", "tyred", "steil", "vughy", "cauls", "payor", "rubai", "tiles", "kybos", "litas", "apert", "naifs", "herma", "boygs", "caeca", "posed", "chark", "antra", "flocs", "rejon", "oncus", "vasts", "timed", "blech", "bonza", "crias", "aleye", "bandy", "fease", "hyens", "irons", "skear", "enlit", "hwyls", "lanas", "rafts", "tizes", "yokes", "azlon", "cours", "basks", "caned", "zoner", "punce", "tubas", "sants", "gombo", "rakes", "pibal", "abrin", "kanes", "abets", "brads", "akees", "roily", "oktas", "tiler", "ouzel", "addle", "shtup", "rynds", "rigol", "croft", "pepla", "stoas", "pedis", "howfs", "ovolo", "hoars", "swoun", "bumfs", "lysol", "fetas", "mooli", "urare", "douts", "vairy", "loafs", "parve", "anana", "sista", "typto", "miffy", "neals", "pinup", "clomp", "slyer", "eikon", "shura", "icier", "kufis", "porny", "diwan", "linga", "runds", "sloid", "derms", "viewy", "frats", "bunjy", "monal", "dumps", "piani", "taths", "ogled", "tecta", "khans", "dumka", "vivda", "wheen", "harps", "paiks", "vimen", "vives", "ochry", "nisei", "bubas", "chiro", "actin", "elves", "ormer", "wares", "eyers", "krang", "porns", "oater", "thraw", "tocks", "hokes", "wurst", "levis", "patus", "gobos", "mussy", "earnt", "faddy", "fitly", "recit", "wikis", "rudis", "pucks", "casus", "hokum", "huhus", "speil", "sonne", "blaud", "mokes", "hosen", "vrous", "asway", "amnio", "irked", "molal", "celli", "rooms", "oiled", "xylan", "reddy", "sawah", "deism", "emyde", "loric", "dashi", "deray", "lalls", "aspro", "hired", "karts", "alaap", "aurar", "kippa", "rutty", "antis", "cuish", "brane", "garis", "defog", "dazed", "oasis", "vangs", "abuts", "attar", "rorts", "besat", "brust", "carrs", "sires", "couth", "pitta", "yabas", "exude", "hurst", "pinks", "pulao", "besti", "nagor", "prads", "peers", "skeef", "highs", "eidos", "pizes", "scags", "oyers", "sooms", "dykey", "culet", "hairs", "scowp", "knuts", "dinos", "sawed", "talak", "berms", "wenge", "ouphs", "hexer", "midgy", "bluey", "gairs", "varec", "rakee", "koans", "eughs", "bowes", "forze", "mothy", "furze", "shaws", "tyres", "graal", "outre", "frows", "roops", "eruct", "fouth", "yakka", "redes", "pomes", "tozed", "bovid", "pissy", "mools", "poufs", "shaul", "kytes", "flics", "fiver", "areae", "vodou", "tatar", "punks", "attap", "mazer", "yawps", "byked", "vinca", "kopje", "craws", "forms", "alods", "taxer", "ticca", "hench", "spyal", "tiros", "rozit", "jelab", "works", "drabs", "lilos", "theek", "favel", "ponks", "gurns", "aglus", "punto", "refed", "rudds", "layin", "doggo", "borde", "tabor", "bolar", "hance", "gonif", "onned", "spifs", "redub", "yowza", "hoggs", "eches", "hides", "torot", "geits", "aimer", "apays", "cocci", "sente", "wraps", "silex", "slipt", "grays", "putid", "plans", "priss", "jokey", "yeeds", "hiois", "fores", "narcs", "tusks", "sunna", "armet", "jowar", "leeks", "taels", "lamps", "yawls", "zaida", "ohmic", "nerka", "certs", "parvo", "snows", "isbas", "mudra", "toned", "dicks", "mured", "palki", "gilet", "tubes", "combe", "blads", "rimae", "carpi", "jokes", "woads", "rhody", "boons", "coxal", "arked", "remen", "carte", "rides", "bowne", "dalts", "touzy", "tunny", "ligne", "moria", "antas", "tappa", "dools", "peece", "undug", "mesto", "hames", "spaer", "orfes", "ranas", "roids", "lauch", "scopa", "rivas", "progs", "canty", "ikats", "sauba", "bield", "wacko", "tabun", "cozed", "pucka", "nelis", "orixa", "swigs", "bromo", "swabs", "vuggs", "jimmy", "taroc", "pager", "jells", "wilco", "slurs", "spoor", "sauch", "laika", "saxes", "xylol", "virge", "fowls", "boord", "marse", "welks", "lawks", "cadge", "sties", "bundt", "levas", "clame", "plumy", "cogue", "murva", "vests", "skimo", "mules", "reast", "kalpa", "honky", "bogie", "pocky", "horst", "stowp", "fiers", "kilos", "razee", "sangh", "ogees", "dures", "nanas", "qorma", "sneck", "agone", "imshy", "yomps", "duper", "tanas", "whirs", "lolog", "hands", "genoa", "cotes", "skivy", "canso", "coden", "tiled", "obang", "litai", "desks", "lurex", "deist", "stong", "hushy", "perps", "busti", "diene", "zaris", "begem", "aduki", "tyran", "turfs", "daggy", "ziram", "bolds", "alias", "baccy", "mirza", "tased", "sinus", "coppy", "malic", "mowas", "moire", "skeps", "alays", "oaker", "tozes", "dufus", "caaed", "resus", "joule", "chaya", "soral", "ciels", "gumma", "swail", "blams", "uprun", "sidas", "shred", "chops", "vozhd", "jeons", "vutty", "tizzy", "jibed", "dolci", "massa", "estop", "kelim", "morat", "lubra", "tatts", "grues", "afros", "denes", "rowts", "liker", "spina", "pulli", "bozos", "feued", "gauzy", "abbed", "kukri", "mirky", "batik", "dices", "cotta", "siree", "cozes", "hovea", "spate", "vespa", "mouch", "muzzy", "seeld", "tikes", "pinko", "pilow", "becke", "smeke", "doved", "oasts", "lenes", "logon", "strad", "kipes", "jeats", "slaes", "powin", "scath", "folky", "times", "padis", "mudge", "biali", "maths", "dooly", "sakia", "spims", "swopt", "orzos", "ydrad", "rowie", "trugo", "dahls", "smees", "coses", "galax", "signa", "chapt", "faqir", "hoofs", "erics", "senti", "sized", "sazes", "spues", "opens", "typey", "sprit", "limba", "gleby", "toras", "bluid", "malts", "jouks", "fordo", "geste", "emmet", "rumen", "jiver", "dials", "mihis", "comal", "ilial", "whens", "sansa", "biker", "purpy", "scend", "tummy", "summa", "plica", "rears", "jocko", "lanks", "becks", "hyrax", "avels", "seity", "glady", "reeds", "bewet", "aking", "siled", "slank", "antes", "jucos", "unpen", "serer", "dwang", "karks", "rammy", "coted", "bytes", "gauch", "lobes", "eared", "mungo", "umiac", "mauzy", "sieur", "endew", "faded", "jours", "vulgo", "maise", "hemps", "neves", "filii", "campy", "mucor", "glaur", "chads", "frack", "rales", "darbs", "bruin", "sient", "soils", "tombs", "durra", "furrs", "gites", "brede", "bhuts", "yucch", "sirra", "lifes", "fusee", "sulfo", "zizel", "adieu", "stopt", "larch", "heads", "aglet", "leaps", "bobak", "acred", "creel", "cangs", "gyppy", "woops", "balus", "blaff", "helms", "skail", "doabs", "segos", "syren", "netes", "unwon", "ilium", "judos", "jiaos", "dunts", "tynde", "thewy", "bocce", "ousel", "rojis", "mixed", "tahas", "wifed", "blats", "elsin", "wited", "hilar", "raias", "bokos", "pyxie", "skyrs", "axils", "dewax", "honda", "tewit", "lipas", "zuppa", "scups", "ennog", "grone", "ooped", "ceria", "molly", "treyf", "fyles", "veery", "benty", "sceat", "feted", "gryde", "segni", "tronk", "users", "liger", "wocks", "lexes", "kerfs", "mikes", "winge", "rieve", "unbed", "crake", "forex", "kanas", "lumme", "waide", "khuds", "caups", "mobby", "kiley", "waulk", "blips", "titup", "judgy", "jakey", "pases", "rugae", "bubbe", "ropey", "wries", "shoer", "ninon", "jacks", "harts", "shive", "myope", "qubit", "kerma", "souts", "darts", "toges", "jeeps", "rayah", "muffs", "rests", "reamy", "eider", "buoys", "cited", "longe", "sasin", "roton", "lasts", "vauch", "kamas", "scams", "pross", "amort", "fanes", "sensa", "manta", "bally", "peins", "geeps", "okehs", "reoil", "lirot", "scoot", "lawed", "hards", "polio", "tarps", "ranks", "strag", "menta", "tryma", "zupas", "odyls", "pirns", "barfi", "barks", "scrat", "wrens", "hying", "ackee", "vealy", "jukus", "stays", "volte", "leben", "noria", "crips", "ryals", "alkyl", "ammon", "stown", "books", "agene", "pinon", "cauks", "burns", "wootz", "briki", "khets", "lepta", "hives", "avgas", "hobos", "gitch", "abray", "surds", "maces", "thegn", "cosec", "corby", "wonky", "lammy", "lowes", "colby", "riven", "gaped", "simul", "clepe", "scarp", "vireo", "arpen", "rusas", "voema", "pilum", "praam", "bored", "rands", "flimp", "mazey", "krays", "bassi", "tacho", "wants", "nazis", "noily", "zedas", "scops", "potes", "suent", "mujik", "tsked", "palay", "johns", "idols", "mined", "matlo", "kench", "dadas", "snugs", "opals", "skees", "moues", "mewed", "bosks", "chace", "hymns", "basta", "roams", "homie", "claps", "dunks", "blest", "dixie", "squab", "joled", "horis", "kimbo", "raves", "doula", "lamia", "porae", "machi", "jomos", "datos", "bajri", "akene", "dated", "swiss", "goony", "bepat", "debus", "aheap", "torii", "belts", "mulla", "ragus", "rifte", "kotos", "whomp", "shyer", "ikans", "bulbs", "smeik", "alder", "rasta", "adbot", "raths", "koppa", "bouks", "spard", "raree", "puggy", "twite", "hewer", "kelpy", "reaps", "jolls", "wises", "euros", "slane", "yojan", "alfas", "carta", "layed", "wrapt", "voulu", "kawau", "scuts", "lawns", "doggy", "yogis", "deair", "boner", "swire", "obole", "capiz", "saber", "fared", "samek", "seats", "cymol", "diazo", "boets", "wanes", "ernes", "flawn", "juvie", "lavvy", "boats", "fjeld", "amour", "loupe", "lokes", "ceder", "slats", "jooks", "yexes", "blots", "anomy", "flied", "sneds", "droob", "kebob", "fichu", "ancle", "atocs", "aedes", "demit", "bajra", "misch", "sifts", "endue", "yales", "tongs", "brach", "roins", "pouke", "tabid", "weise", "routh", "arere", "waspy", "soger", "ovist", "arval", "bowie", "kyats", "trats", "hiply", "sewin", "borts", "gurly", "tatou", "crags", "knurs", "ledum", "thins", "doyen", "gliff", "lippy", "slips", "peats", "moira", "shrow", "mater", "sends", "frorn", "tweer", "sitar", "ontic", "argus", "whipt", "harim", "radix", "cosed", "quair", "kurre", "comae", "gravs", "melas", "tours", "speer", "drams", "adaws", "janny", "leany", "stonk", "alway", "emove", "strae", "jawed", "balky", "yoofs", "rooks", "grits", "haufs", "monks", "taiga", "rekes", "slive", "canid", "silen", "imids", "socks", "manos", "vivas", "bever", "iodid", "halfa", "cedis", "gents", "booai", "pails", "bachs", "macer", "skelf", "fugus", "mumsy", "talaq", "smowt", "stims", "netty", "mains", "cunit", "glits", "spial", "heald", "phono", "foins", "fayer", "nanua", "grame", "crows", "yuked", "quate", "conga", "gaddi", "papaw", "nowty", "opted", "yealm", "pyats", "dales", "clies", "punji", "burks", "rumbo", "fanum", "dimes", "drome", "vasty", "slade", "tipis", "uptak", "vares", "pucan", "teend", "acnes", "racon", "agers", "decos", "oaths", "barde", "anima", "sages", "tenes", "gable", "whaur", "gases", "baels", "giron", "harks", "roups", "oleic", "bagie", "gesso", "cases", "hilus", "bacco", "leers", "jones", "likin", "sudor", "aldea", "basij", "gambe", "zonda", "tawai", "viffs", "conns", "lweis", "bekah", "squid", "poled", "argil", "sigla", "roven", "faked", "pukka", "ponts", "shalm", "tenne", "fogie", "hythe", "talcs", "sexes", "hyles", "vinic", "thens", "peggy", "ruche", "urman", "lento", "strow", "hokey", "pries", "sarge", "yangs", "ravin", "volti", "heths", "smugs", "vitro", "bivvy", "perog", "pinta", "tinty", "edile", "arcus", "ascus", "bewig", "rooky", "botts", "aidos", "sodic", "nites", "gnarl", "zilch", "iches", "turnt", "opahs", "thrid", "scats", "cabob", "aeros", "rabat", "tical", "idola", "bunts", "ridic", "manna", "axman", "walls", "inspo", "hulls", "lehrs", "bourg", "rusma", "syncs", "largo", "deens", "derat", "trine", "makes", "filch", "wakas", "winna", "bight", "gandy", "punny", "yarak", "vants", "oulks", "abamp", "gates", "amlas", "litho", "arils", "deare", "kiang", "wages", "menge", "dolts", "subha", "poupe", "pogey", "cided", "kenaf", "lesbo", "yites", "napoo", "tinks", "ducat", "swile", "liana", "foxes", "abask", "murti", "knowe", "myths", "bitou", "terga", "unsaw", "barbe", "clads", "swops", "yokel", "nebek", "stimy", "viols", "topes", "caked", "gamba", "doser", "sumps", "wanze", "seiza", "diact", "bousy", "varna", "gazon", "adoze", "varve", "immix", "seine", "lubed", "bezes", "mened", "tsadi", "toady", "jests", "durgy", "capex", "kelly", "corbe", "trots", "kaugh", "lived", "salts", "pagle", "chirr", "mauls", "boogy", "biped", "segno", "spaws", "burgh", "vacua", "seepy", "urdee", "amman", "ergot", "gapos", "podex", "wests", "makis", "peons", "peris", "vanda", "fiord", "coost", "mohel", "socas", "mirly", "adust", "scrob", "nubia", "sanga", "fatso", "hertz", "mohrs", "musos", "skyte", "perea", "kumis", "steek", "wrate", "boing", "farad", "atilt", "solah", "lakin", "pwned", "hallo", "luach", "foxie", "sybil", "bazar", "haiks", "chink", "setae", "pokal", "sowed", "fuero", "gages", "deads", "botte", "botty", "binit", "meris", "kerbs", "dowly", "ribes", "farcy", "unled", "griot", "eskar", "compo", "swale", "hinds", "trayf", "zoons", "janty", "crome", "yeses", "cerci", "sands", "grens", "tetes", "serow", "siver", "raggy", "rubes", "mofos", "hoyas", "sixmo", "soote", "airer", "lichi", "pyres", "tulpa", "pumas", "thirl", "chott", "swelt", "jambs", "buhrs", "ducts", "glibs", "derro", "kyaks", "bucku", "babel", "rumes", "kotow", "duels", "miles", "palms", "lynes", "kolos", "frush", "barre", "norma", "skeer", "laved", "twank", "rotch", "rumly", "rawer", "zigan", "oumas", "idled", "nouls", "gypos", "leggo", "tafia", "chics", "okays", "laxes", "sural", "yoick", "rokes", "mamee", "zulus", "karns", "uveal", "tolly", "skens", "claut", "moder", "nirls", "reaks", "tinas", "birle", "heben", "audad", "quina", "raita", "skald", "moils", "atrip", "blabs", "elmen", "lieus", "pyots", "earls", "whaps", "wroot", "yetts", "thoro", "manet", "smalt", "looms", "dries", "canna", "yules", "herbs", "glaik", "kight", "weirs", "reffo", "exode", "ludos", "manas", "logie", "ragga", "slubs", "laevo", "gutty", "sayst", "rathe", "bedel", "nighs", "sault", "barfs", "milty", "ahull", "heled", "spale", "stied", "butyl", "capon", "glime", "pelau", "crewe", "faiks", "gonys", "peeve", "shier", "petto", "clapt", "whins", "syboe", "oorie", "weize", "fuzes", "rheme", "eorls", "thous", "bilbo", "mists", "falls", "aecia", "snots", "shies", "exams", "tenue", "fleme", "stums", "zoeae", "beare", "suets", "boche", "grapy", "unkid", "clips", "loads", "wolds", "frags", "praos", "cives", "chews", "whips", "malmy", "honds", "longa", "knags", "mayan", "colts", "livre", "airns", "kerne", "fails", "kuris", "tewel", "muton", "dhows", "dolce", "aroid", "lawny", "doily", "gelds", "anted", "weems", "gilas", "cetes", "ameer", "zombi", "erica", "axone", "hoven", "levee", "scand", "gaffs", "cutin", "sauts", "lisle", "plyer", "metif", "lovie", "dawds", "orals", "freit", "myxos", "prems", "mihas", "tilth", "micks", "linch", "axile", "egger", "mawed", "kente", "rotes", "tauld", "zoppo", "sylph", "pally", "huffs", "silts", "eruvs", "flary", "laird", "shily", "unsee", "zamia", "chems", "jinks", "macon", "vizor", "nizam", "daubs", "eensy", "pinot", "hooly", "claws", "alums", "kents", "herms", "betta", "noups", "holks", "pilea", "ayahs", "pease", "fawny", "chivs", "lungs", "anlas", "glode", "logan", "scyes", "durry", "fauns", "wiggy", "zabra", "hates", "boffo", "uplay", "zoril", "caple", "combs", "tacks", "whare", "hunts", "squaw", "mopey", "umras", "pommy", "foram", "takes", "dexie", "rezes", "vizir", "micra", "heres", "lands", "cryer", "petti", "noses", "speld", "poyou", "feoff", "lucre", "googs", "jubes", "gulag", "gumps", "jinns", "beedi", "muras", "ligan", "kempt", "cromb", "iodin", "vibey", "vills", "louns", "britt", "trees", "wojus", "thars", "xylem", "psoae", "bouse", "siped", "kiddy", "yirds", "avers", "pujas", "durns", "spide", "titty", "spork", "fakir", "reest", "genas", "rated", "banak", "dears", "artel", "aahed", "yiked", "crabs", "solos", "bawrs", "tirls", "gyans", "gogga", "axmen", "cakes", "minge", "cooks", "ihram", "hakim", "urped", "dexes", "vitta", "cobza", "swipe", "sedum", "veale", "wakfs", "boink", "drouk", "chibs", "bibbs", "dozed", "perce", "shuln", "atlas", "sonsy", "gilpy", "latah", "icker", "cursi", "mongs", "nevus", "cuber", "soman", "sware", "merks", "devos", "gapes", "wasms", "raxes", "mosso", "cadis", "frits", "urate", "cymar", "ender", "shawm", "paysd", "moyle", "jeffs", "vocab", "boric", "prahu", "egads", "wipes", "spets", "kofta", "sowls", "buffe", "bantu", "lulus", "pungs", "sakti", "stilb", "spume", "choux", "dhals", "earns", "hangi", "tsade", "biogs", "ruers", "torah", "cuspy", "celts", "frory", "suits", "shmoe", "burfi", "wicks", "ekkas", "noted", "speir", "tholi", "sella", "wader", "avise", "sorts", "noint", "dosas", "axels", "emyds", "fauve", "claro", "cruse", "bobac", "delis", "mzees", "lacer", "nabis", "lathi", "gelly", "birse", "genic", "radon", "gutta", "yente", "koban", "bevvy", "ghyll", "kudos", "degus", "flops", "mohua", "hypha", "weald", "reate", "mazut", "booay", "goyle", "gusle", "tichy", "dregs", "dopes", "saith", "rowme", "dulse", "mered", "mouls", "trull", "wilds", "bhels", "warps", "folic", "looey", "rohes", "snipy", "motza", "emeus", "riyal", "vinas", "motty", "mused", "baulk", "riggs", "loves", "knees", "douce", "plats", "lowne", "ivies", "nobby", "surah", "ketes", "resty", "yanks", "glost", "eilds", "bolix", "gibel", "kutch", "clept", "houri", "undee", "hists", "surra", "nuddy", "ytost", "haick", "doric", "dixit", "sadhu", "banya", "linum", "mawks", "munge", "kawas", "hazes", "tumid", "tondi", "oribi", "exfil", "ovels", "celom", "sorns", "birks", "waded", "tared", "sicko", "evets", "caved", "ulema", "kitul", "tofts", "lycee", "busks", "ajwan", "quint", "oxids", "gadis", "kaing", "mopsy", "coned", "oundy", "dongs", "chimp", "adeem", "knosp", "thete", "dorse", "labda", "ramus", "hared", "telly", "skrik", "luxes", "omber", "halon", "geyan", "dawts", "fouet", "snick", "lemes", "belon", "gaucy", "algor", "stogy", "merse", "weros", "gungy", "budas", "genii", "thein", "slaid", "milpa", "cauri", "churl", "gamey", "sayon", "bitos", "ergon", "argot", "nashi", "aloin", "gutsy", "minds", "mayed", "kilty", "boult", "inked", "doped", "misdo", "toros", "budos", "gwine", "clint", "drays", "coals", "ephor", "gleek", "raiks", "carle", "chits", "jaaps", "triol", "fills", "roble", "ouija", "swans", "ulpan", "games", "lezes", "tifos", "loden", "evhoe", "hotty", "worms", "peaky", "armil", "cubit", "meeds", "kemps", "eupad", "coils", "queys", "dados", "hygge", "ruins", "samey", "naped", "hakes", "retag", "hunks", "cobbs", "yclad", "roper", "ketch", "basho", "unary", "meats", "indue", "kibbi", "fluky", "halls", "carts", "eards", "bulla", "weeps", "brool", "warre", "tubed", "boned", "flaws", "techs", "decaf", "terts", "ureic", "ganev", "wamus", "targa", "obits", "fairs", "gowds", "infos", "hypos", "whilk", "damme", "galvo", "pozzy", "leets", "pages", "ycled", "doyly", "banns", "lames", "rumal", "quoad", "seers", "gifts", "ottos", "indow", "newie", "kotch", "sides", "yupon", "hongs", "jalap", "gooky", "hoten", "meshy", "maxes", "apian", "hebes", "chuff", "ghats", "fasci", "gilds", "ovoli", "wexes", "towts", "adits", "nuked", "crwth", "mekka", "hasta", "fetwa", "scuds", "rabis", "kidel", "pumps", "umble", "sowne", "nouny", "cords", "sutra", "girrs", "stots", "anglo", "novae", "bedim", "cribs", "sumos", "furol", "aigas", "toshy", "isnae", "misty", "staig", "acari", "woful", "hilch", "grabs", "rawly", "teams", "spots", "skers", "plouk", "kehua", "barns", "japan", "gormy", "daals", "venae", "jades", "gatch", "boars", "nulls", "dorty", "miggs", "galed", "riffs", "wauls", "thelf", "snary", "cline", "suers", "chara", "sords", "duply", "savey", "ouped", "sdayn", "hyson", "motes", "laxly", "hemic", "dunam", "whups", "pioye", "kaies", "abris", "noahs", "unfix", "certy", "lunet", "serac", "arefy", "kikes", "breve", "amies", "delly", "yrneh", "meiny", "jambo", "sohur", "moons", "rines", "miler", "zeals", "dills", "nipas", "bract", "hable", "mixup", "effed", "heils", "ships", "spule", "oaves", "choco", "foody", "sobas", "omers", "orant", "lurer", "warks", "milts", "nolos", "ghast", "civvy", "maids", "snool", "arses", "tutti", "rasps", "ethal", "appuy", "finny", "ocker", "petre", "shaya", "schmo", "salal", "alans", "smirr", "soops", "kanae", "osier", "stull", "nying", "boobs", "golpe", "gings", "cuddy", "wuses", "slake", "perns", "roque", "trass", "malus", "modes", "lamed", "arede", "flirs", "cusum", "begot", "nurrs", "ducal", "chals", "sposh", "rolag", "jambe", "swads", "preon", "axles", "daffs", "porgy", "calyx", "gnars", "missa", "cleck", "dagos", "dolma", "typed", "argal", "cesta", "gebur", "letup", "fogou", "sorer", "oohed", "adobo", "mezzo", "abune", "umpty", "swang", "napes", "slays", "amahs", "chado", "benga", "dined", "trike", "narco", "fadge", "ulmin", "pater", "annas", "leuco", "belga", "smerk", "savin", "feuar", "taver", "spews", "spods", "yexed", "tells", "churr", "punas", "cuing", "gants", "etats", "howff", "retia", "lomed", "butle", "algid", "awner", "teuch", "finos", "crool", "sados", "gripy", "cohoe", "names", "bunia", "bunns", "bitts", "dogie", "quare", "jolts", "grize", "glops", "chats", "eosin", "skeds", "unpin", "allel", "kaneh", "tupek", "boils", "ziffs", "acids", "holes", "nopal", "boyfs", "lings", "recon", "byres", "rumpy", "gyeld", "burin", "duars", "reais", "stive", "entia", "almes", "daynt", "lipes", "beige", "sybbe", "sowle", "dores", "kuzus", "scrod", "ariki", "plink", "ragde", "sownd", "ravel", "furan", "tided", "taler", "steme", "grece", "mudir", "cubeb", "dayan", "pappi", "celeb", "melty", "smogs", "cavas", "cense", "datto", "tired", "bourd", "sprat", "zazen", "mucid", "cycas", "admen", "potto", "wilja", "crays", "gosht", "hurra", "skews", "divos", "laval", "hooey", "equid", "goors", "pacha", "hakam", "mynah", "pombe", "cones", "osmol", "sluff", "rayle", "potae", "tarty", "pilae", "milia", "numen", "yards", "locis", "sikes", "clift", "bizzo", "spitz", "massy", "bines", "siler", "fungs", "mulie", "nuder", "scots", "cisco", "fenks", "ahigh", "griff", "fusty", "zilla", "fluor", "ugali", "creps", "frati", "togas", "omits", "sough", "kylix", "letch", "bigos", "sambo", "whigs", "aloos", "eathe", "trigo", "twerp", "mikva", "mausy", "warst", "pakka", "bento", "spiry", "coled", "tanga", "lubes", "kandy", "toged", "arpas", "nidor", "sails", "cutto", "harls", "asana", "tends", "toyer", "kasha", "forbs", "whamo", "teems", "fudgy", "amido", "croon", "whets", "ursae", "manul", "laree", "algin", "bemix", "dicot", "jumps", "lilts", "pawky", "shris", "husos", "poaka", "nikab", "envoi", "sured", "rifts", "feuds", "gamme", "sudds", "biles", "zerks", "blype", "khazi", "mings", "corky", "lambs", "ailed", "achoo", "drums", "lushy", "selah", "rhumb", "hammy", "cutey", "gazoo", "awdls", "hents", "sojas", "setal", "fands", "lagan", "winze", "dumky", "occam", "immew", "kalam", "unbar", "zitis", "mucic", "scapa", "zouks", "gawcy", "trues", "radge", "yrivd", "bolus", "nixed", "profs", "safed", "besot", "tweep", "waken", "crura", "besee", "buses", "dishy", "tames", "cushy", "darcy", "smoor", "plums", "sinds", "daled", "acerb", "sidhe", "coves", "dangs", "smurs", "sulci", "cooee", "lauds", "tocos", "scaup", "egers", "belar", "jaxie", "brose", "goeth", "puzel", "picks", "kalis", "towse", "roons", "yills", "izzat", "incut", "sowms", "drees", "kebar", "coifs", "trior", "spart", "wifes", "estro", "moxas", "elint", "cubby", "apres", "pilaw", "sloes", "momma", "chich", "dzhos", "galop", "tirrs", "voars", "disas", "soave", "grigs", "puhas", "prang", "sorbs", "fasts", "brame", "strop", "rutin", "kerky", "mutes", "tawer", "dowls", "kraal", "ayins", "mails", "almug", "myopy", "repot", "satis", "mokis", "almas", "thugs", "merer", "clary", "scads", "palmy", "beamy", "ragas", "indol", "anile", "lerps", "ybore", "gluey", "horal", "hends", "resee", "mobey", "aumil", "demob", "kalif", "knobs", "grrls", "lungi", "sargo", "exuls", "feats", "halma", "welkt", "roans", "manky", "keeve", "animi", "peeps", "dojos", "readd", "fugle", "unlid", "flubs", "quant", "filos", "taces", "snies", "lowse", "rishi", "sayid", "croze", "sedgy", "jigot", "dunch", "gulps", "orlop", "ranee", "viced", "lakes", "kinin", "conne", "decad", "jetes", "crees", "taser", "comte", "doole", "cital", "culex", "sadis", "vilde", "jinni", "bauks", "peart", "nanos", "blubs", "tazza", "limby", "garre", "toper", "colls", "abaya", "opter", "dalis", "raits", "peppy", "bwazi", "nimbi", "carom", "aided", "autos", "flors", "yippy", "linny", "theca", "horas", "yodhs", "taxed", "plesh", "knurr", "bunje", "pharm", "aimed", "corno", "tunas", "shams", "roars", "inust", "sewen", "ditsy", "laich", "kafir", "emong", "boffs", "cites", "saist", "tomos", "jails", "saros", "aggry", "carls", "feebs", "lovey", "proto", "merde", "jhala", "esker", "genro", "loach", "sulks", "ursid", "silks", "marly", "glued", "cowps", "swayl", "canto", "hawed", "lobar", "pryer", "seaze", "valis", "zexes", "hynde", "hades", "uncos", "nyaff", "dalle", "cusec", "spode", "unaus", "donah", "rosed", "powan", "tofus", "moray", "boofy", "danny", "cacks", "prost", "curia", "capas", "quale", "sedge", "idant", "qaids", "capos", "coopt", "sloan", "basso", "fiest", "rozet", "haled", "hoise", "koori", "mixte", "carer", "greve", "cissy", "smush", "sklim", "teaed", "sheas", "sprew", "flogs", "troat", "pukey", "matts", "nidal", "kliks", "tills", "seals", "quads", "whats", "ecrus", "wades", "frape", "pling", "befog", "noyes", "zacks", "naunt", "costa", "cornu", "bahts", "bivia", "treys", "matai", "askoi", "aiyee", "garbe", "bokes", "gains", "situs", "paced", "eyots", "anyon", "raine", "grice", "naams", "kindy", "fujis", "cruft", "yewen", "stean", "pengo", "saddo", "chawk", "rubby", "choof", "swats", "pareu", "thill", "obeys", "pratt", "dowle", "peter", "buffi", "saiga", "fices", "suhur", "moove", "cooey", "dulls", "brits", "ginks", "skeen", "indie", "serre", "shish", "slier", "beany", "coons", "rotos", "sudsy", "goopy", "bussu", "ganef", "ganch", "paire", "dreed", "alifs", "tonus", "vezir", "demic", "troke", "reave", "quoif", "aliya", "chaws", "phoca", "woker", "quist", "siris", "cupid", "thuds", "dreer", "bumpy", "atomy", "cheep", "zoeal", "hyleg", "gores", "japed", "praty", "tyros", "divan", "tarre", "gurus", "rotan", "vexer", "suede", "gopik", "saick", "pouts", "mamey", "hoyle", "jugal", "madge", "namer", "yfere", "yauld", "pawks", "fetor", "sughs", "pulks", "kisan", "dancy", "torsi", "vices", "cusso", "cooze", "aides", "dogan", "bunas", "pacos", "qadis", "peyse", "scall", "proin", "unmew", "kbars", "sooey", "atmos", "aulas", "clows", "frier", "flawy", "pawer", "hemes", "fends", "labra", "canns", "poons", "emits", "uncoy", "parks", "paves", "reney", "teind", "duans", "disks", "nervy", "pucer", "wynns", "coram", "chomp", "murra", "tines", "ovens", "basan", "dagga", "bunde", "monas", "paten", "wowed", "epees", "boomy", "filed", "yufts", "serrs", "wifie", "istle", "jambu", "slopy", "voxel", "daker", "qibla", "shill", "slues", "manus", "nenes", "cuffo", "pingo", "syces", "paska", "poral", "bortz", "dolor", "vegas", "hurts", "glary", "biota", "uptie", "pooks", "azyme", "becap", "duits", "jaups", "nappa", "fuddy", "toits", "frate", "ampul", "womyn", "soler", "dotal", "ohone", "doves", "ahuru", "gloam", "dukes", "purda", "slags", "cutty", "linac", "grypt", "bacha", "atigi", "julep", "plast", "kyloe", "packs", "ooses", "cides", "coapt", "goats", "cults", "vivat", "kahal", "zante", "curet", "eigne", "coper", "mochi", "kasme", "dikes", "wheys", "beath", "adzes", "kyack", "alist", "yogin", "bitsy", "leaks", "wongi", "divna", "porge", "grips", "ashed", "unsay", "buffs", "tings", "aches", "penks", "ascon", "inwit", "frees", "spoot", "sagum", "xysts", "rites", "lured", "refly", "lound", "shewn", "beefs", "slits", "aghas", "maist", "hatha", "sexer", "ither", "ngwee", "luged", "swede", "glair", "caped", "rucks", "clach", "raker", "yesks", "olios", "tauon", "luces", "krubi", "glede", "tavas", "opsin", "karst", "fades", "aways", "brule", "foehn", "genes", "rooty", "tapen", "blive", "cuifs", "flite", "calid", "mysid", "texes", "taxon", "ratha", "pores", "chout", "veins", "carny", "oread", "tumps", "baddy", "heids", "psora", "apode", "borel", "pimps", "eusol", "ayaya", "obols", "mimer", "veily", "kayle", "arnut", "poses", "skyed", "lossy", "sowth", "cilia", "knarl", "ryots", "husks", "marri", "skims", "donna", "fixes", "platy", "ticks", "aargh", "curdy", "ramis", "karat", "lurks", "jammy", "rimus", "juked", "tiffs", "slabs", "stede", "pyxed", "hears", "hawms", "gnats", "myoid", "coyer", "banks", "dered", "fluty", "maars", "calve", "fuggy", "inion", "sisal", "minks", "oboes", "dabba", "alary", "heels", "nyssa", "hoied", "genip", "heapy", "morra", "wawls", "dovie", "erhus", "gulet", "zoism", "hiker", "muter", "diels", "masts", "deeps", "yarto", "jihad", "gauds", "topek", "neats", "comby", "ealed", "jumar", "goers", "braai", "ileac", "roguy", "grisy", "fauts", "kauru", "leses", "tride", "ticky", "alant", "reman", "vells", "thymy", "hikes", "likes", "gelts", "alapa", "cahow", "chook", "scape", "pupas", "yogee", "grovy", "skeed", "proul", "assam", "brock", "derma", "nomos", "toffy", "scans", "premy", "oozes", "caxon", "peags", "gaols", "ritts", "kenos", "firie", "arret", "vagus", "taluk", "waves", "jimpy", "zooea", "metis", "freon", "lownd", "sents", "sophy", "agood", "fugly", "fares", "dawns", "theed", "toked", "baals", "edema", "knows", "posts", "koros", "kanzu", "estoc", "hykes", "talar", "unpay", "sordo", "brogh", "pises", "vuggy", "potts", "habus", "graip", "parki", "jaggy", "troys", "cakey", "bhaji", "duped", "reird", "wetly", "emule", "thaws", "pyned", "minny", "claes", "noons", "loxes", "coala", "hated", "amias", "rater", "wagga", "towns", "oches", "almud", "mates", "clags", "loony", "mucks", "cosie", "mutts", "pippy", "waffs", "cwtch", "yamun", "tavah", "ogham", "bodhi", "meith", "withs", "sangs", "vampy", "reads", "donny", "piped", "ancon", "mowra", "lapin", "thymi", "blert", "nabob", "tonne", "dinks", "rache", "razoo", "benis", "starr", "barky", "jolty", "moped", "scudo", "reels", "inned", "sedes", "sarus", "azurn", "tousy", "moong", "toyos", "oomph", "smirs", "tways", "nabla", "bakra", "shoed", "lidos", "muhly", "snabs", "yirks", "mvule", "tamin", "haars", "bores", "gamps", "venus", "alews", "lours", "shiur", "firms", "feart", "pills", "fecks", "rhine", "gerne", "siroc", "moops", "sarod", "duces", "grege", "goods", "liard", "waxer", "nempt", "rizas", "nanna", "flobs", "swank", "vaper", "wyled", "neons", "ungod", "merch", "doups", "waacs", "vires", "haily", "lipin", "neeld", "trois", "spars", "trugs", "biner", "hided", "vaire", "sloyd", "himbo", "presa", "casks", "syker", "vatus", "grans", "morns", "fears", "wisht", "bites", "gager", "aurei", "duxes", "bidet", "tehrs", "axoid", "emure", "roker", "codes", "capot", "hoosh", "pyran", "shawn", "azury", "yonis", "hanky", "zimbs", "pussy", "zobos", "recks", "zebec", "vakil", "epact", "bezzy", "rosts", "dukas", "zaxes", "embus", "guffs", "bolas", "yaffs", "sefer", "aiery", "pygal", "gived", "unrid", "deled", "mercs", "chode", "koras", "slubb", "annat", "mommy", "bancs", "latke", "breis", "mells", "foxed", "scurf", "genty", "conia", "bawty", "gimpy", "owler", "wents", "flips", "naggy", "souse", "gimps", "pendu", "soken", "larky", "easer", "ousts", "boohs", "swies", "hells", "beray", "gaita", "leare", "ratas", "antar", "devis", "saury", "leuch", "aboma", "edger", "reive", "sited", "sales", "virls", "wecht", "legit", "chape", "enorm", "urger", "pight", "amnic", "nexts", "rhyne", "lests", "ofays", "posho", "seems", "iring", "ulnad", "rabic", "pubco", "waugh", "sowce", "sabal", "leads", "apgar", "eloge", "drack", "clubs", "hoked", "wulls", "albas", "stymy", "pechs", "porer", "drook", "dunno", "fanga", "rinks", "dosha", "ronts", "orbed", "wenny", "hiked", "lezza", "wawas", "stott", "sabin", "doseh", "orate", "cabre", "bongs", "vrouw", "iambs", "rhime", "domic", "yaird", "plasm", "bingy", "lanai", "misos", "tzars", "jills", "relie", "clots", "lotte", "dater", "razer", "lyase", "acted", "aguna", "igapo", "onery", "idles", "squit", "jumby", "blawn", "pudus", "trema", "okapi", "getup", "lamby", "emeer", "swots", "thale", "gawds", "dotes", "ghest", "rubli", "kloof", "zeros", "evert", "intel", "dooks", "phots", "stoup", "weils", "daint", "caman", "arish", "frist", "laths", "fiats", "yukky", "parae", "jefes", "bhuna", "piing", "bikes", "helps", "nurdy", "drole", "ahing", "annal", "chaps", "weamb", "gouty", "ricks", "orgia", "taits", "drere", "touts", "rends", "sodas", "rewth", "nolls", "licks", "avale", "intil", "aught", "woold", "ceroc", "sprod", "ingle", "feist", "azygy", "gleba", "arles", "emirs", "deffo", "plebs", "clays", "jural", "sloot", "agger", "modus", "argan", "dimer", "kited", "shist", "guiro", "pyrex", "casas", "allee", "joked", "palps", "pudsy", "sengi", "goffs", "niefs", "denar", "arets", "skegg", "wedgy", "arete", "powny", "galls", "grufe", "fanal", "guyed", "anura", "cutup", "urite", "nitry", "pilau", "creds", "emics", "kamis", "fitna", "rotal", "yince", "wefte", "shott", "slily", "gouch", "zebub", "duads", "velum", "carns", "choon", "corps", "gares", "patly", "poems", "kerry", "ferer", "touns", "fines", "wards", "mamba", "takas", "waked", "aurae", "donne", "marge", "lawin", "wrier", "gurdy", "sweer", "coqui", "abers", "wilis", "woxen", "diebs", "chary", "sacra", "asses", "cupel", "yonic", "ichor", "gator", "ezine", "katas", "zakat", "naked", "woosh", "aerie", "cared", "karri", "cebid", "boyar", "nache", "wersh", "wussy", "beaks", "boyau", "sylva", "poovy", "mixen", "draff", "quirt", "rouen", "teugh", "lieve", "pisky", "scaws", "coxed", "mesas", "moors", "phuts", "cells", "yobbo", "ollie", "abbes", "touze", "burry", "embar", "tabus", "jerks", "meted", "basse", "hamed", "firer", "haugh", "purin", "clefs", "hissy", "chips", "lepra", "dolls", "ummas", "murre", "clogs", "arras", "nitid", "enate", "ungot", "dowie", "coups", "soole", "finis", "cills", "lense", "mythy", "gojis", "props", "wally", "gimel", "macks", "bronc", "pumie", "bobas", "lenos", "gater", "motet", "bogue", "cytes", "riant", "yucky", "skein", "nonis", "naevi", "lists", "unked", "redye", "heles", "wites", "khoja", "bufos", "sials", "ogams", "paxes", "throe", "peise", "kynds", "coots", "bikie", "vulva", "yrapt", "gismo", "garbo", "bafts", "evohe", "tolas", "ambry", "vases", "cusks", "ploys", "waged", "sheds", "apses", "howso", "katis", "leeze", "beaut", "gosse", "debye", "gerle", "gonof", "nines", "noddy", "forza", "dight", "odium", "pluff", "mumms", "chowk", "dazer", "buats", "trads", "piert", "soups", "lords", "zinke", "minar", "addax", "lases", "qursh", "hylas", "lethe", "lurry", "ejido", "oupas", "bohos", "wiver", "twaes", "titis", "unais", "grana", "wolly", "burbs", "rared", "bombo", "almah", "repro", "spyre", "trill", "getas", "hinau", "amuck", "buffy", "nicad", "flyby", "velar", "juves", "senas", "huger", "lifts", "sayer", "tazze", "odism", "doted", "clipe", "elute", "reked", "nooit", "buaze", "looks", "seame", "dyads", "cumec", "tendu", "tokos", "ollas", "donee", "rayed", "plots", "frabs", "vexed", "relet", "elain", "umami", "drips", "leone", "reiks", "peaks", "sakes", "pings", "gunny", "lyted", "keema", "skean", "gamic", "triac", "skoff", "talus", "spays", "wisha", "bills", "gauss", "peize", "begum", "dived", "soily", "dobie", "djins", "capri", "wairs", "jived", "rorty", "scoug", "unhat", "repin", "zippo", "viand", "pupae", "cronk", "tolts", "camos", "motus", "bialy", "alecs", "stags", "muxed", "wefts", "hullo", "refix", "prier", "fayed", "kangs", "alate", "farms", "skits", "vines", "tinea", "ulzie", "domes", "tryps", "rello", "parch", "yechy", "katti", "hoick", "laris", "weeke", "biros", "cippi", "traik", "youks", "kevil", "fendy", "dawen", "asyla", "yours", "poult", "baghs", "hoyed", "neral", "bries", "purrs", "qanat", "smalm", "aviso", "lemel", "sorex", "kokas", "lacey", "padma", "bings", "jaffa", "pohed", "armer", "smoot", "roves", "shere", "craps", "wines", "looed", "tassa", "blags", "lyart", "haole", "lomas", "gored", "hider", "added", "whids", "moxie", "kapow", "slipe", "plage", "spado", "fifed", "spane", "kibla", "pious", "neuks", "turns", "bared", "zonks", "ansae", "foods", "pelon", "hiree", "tapus", "loper", "halid", "liane", "parge", "ligge", "mages", "hoper", "kaons", "hanks", "capes", "fives", "froes", "coomy", "units", "mizzy", "mumus", "tumpy", "pulus", "rumpo", "nurds", "limps", "fated", "flags", "teils", "roshi", "grins", "loury", "weids", "rowed", "commo", "marks", "neaps", "paris", "niger", "gauje", "docos", "dinar", "aight", "puffs", "yrent", "sylis", "fubsy", "amino", "choli", "malik", "yetis", "kings", "zezes", "jagra", "sodom", "assot", "diked", "poles", "fundy", "nugae", "pimas", "hills", "jembe", "commy", "shero", "dhobi", "coles", "pyets", "lipos", "onlay", "clops", "peare", "henna", "thack", "blocs", "yawed", "chemo", "fleys", "taggy", "salix", "spumy", "odals", "uraos", "perry", "dowts", "tutus", "ploye", "sewan", "cotts", "eyrir", "mesal", "jingo", "wyles", "reggo", "germy", "mungs", "ebbed", "molls", "rangs", "slued", "remix", "haver", "hones", "dryas", "pawns", "mahua", "horns", "bhoot", "cooed", "tanhs", "crews", "tyned", "neafe", "bucko", "loner", "abaft", "psion", "pawaw", "kissy", "grith", "acton", "wokka", "shots", "laced", "ohias", "fells", "saker", "eland", "riped", "orcin", "muids", "vleis", "raper", "plims", "swain", "roose", "barbs", "weeds", "skelp", "miaow", "scuzz", "bream", "iliad", "witan", "prion", "hogen", "lader", "poule", "luser", "gyred", "arett", "tophe", "recti", "brods", "nowed", "unlet", "toted", "spats", "kinds", "vends", "macas", "soums", "unapt", "bukes", "draco", "diota", "twain", "pened", "jager", "gundy", "kiaat", "abbas", "perdu", "quine", "goura", "pocks", "senor", "loins", "lazed", "pians", "buhls", "buzzy", "riced", "dules", "stoss", "buroo", "temes", "ranid", "tikka", "tacan", "skirl", "gaspy", "fraus", "moted", "kembs", "arums", "regna", "pical", "folie", "goban", "cepes", "filar", "fayne", "capul", "pekin", "therm", "mutch", "acros", "stour", "redds", "volva", "dippy", "jiffs", "wadds", "conto", "james", "raile", "aiver", "bowed", "ahint", "tools", "sabha", "slogs", "merle", "seans", "freet", "bedew", "sunns", "mozed", "waqfs", "wales", "mines", "ephah", "texas", "homes", "mimed", "combo", "quais", "septs", "scrim", "turks", "platt", "recta", "limed", "duddy", "cures", "pecke", "genua", "douma", "caber", "enoki", "bayle", "pully", "teade", "swole", "inure", "atoks", "teals", "oxies", "strak", "coate", "mebos", "sneap", "gonia", "pikes", "brios", "haram", "lyams", "milfs", "boree", "heats", "zorro", "spits", "tuans", "prase", "codas", "asker", "tuque", "ronte", "kumys", "voted", "exeat", "decko", "doats", "hooka", "glift", "basts", "upsey", "slots", "gighe", "pares", "yumps", "brags", "objet", "arame", "baled", "smits", "bales", "trays", "korus", "hillo", "debes", "cauld", "metre", "meved", "shlub", "renin", "pulls", "jirga", "gaids", "craal", "ponty", "loxed", "newed", "votes", "broch", "sugos", "wadge", "ouzos", "umbel", "wifty", "gunky", "mirks", "quire", "jaspe", "roums", "meals", "ankhs", "rowan", "fiere", "wowee", "shets", "totes", "bloop", "embog", "moile", "siker", "shope", "chank", "unjam", "besom", "bolts", "clits", "ablow", "seles", "slurb", "kades", "kicky", "hirer", "ahent", "poboy", "rewed", "meads", "viner", "scuft", "azans", "casco", "fones", "couta", "louis", "tases", "nihil", "boxla", "twals", "khors", "vials", "cerge", "alcos", "glogg", "gyals", "acing", "liman", "gipon", "cleve", "raved", "chang", "wroth", "vakas", "chica", "sibyl", "bayed", "fined", "uneth", "nooks", "moner", "domal", "cheth", "stagy", "sessa", "orlon", "appui", "pujah", "dwalm", "norks", "lints", "skids", "tuina", "shoon", "vails", "aitch", "zibet", "cimar", "babas", "hiems", "guars", "kants", "borks", "sculs", "kadai", "glims", "pated", "oonts", "meers", "borgo", "gooly", "smore", "liter", "typps", "homme", "picas", "toled", "tetri", "scabs", "godso", "pelas", "simba", "newbs", "poove", "manes", "doxed", "clons", "puers", "nixes", "admix", "carby", "curat", "suint", "clams", "wined", "algal", "geats", "laker", "stope", "nulla", "subah", "gopak", "hudna", "cered", "potoo", "pawas", "beted", "saims", "penes", "mated", "coirs", "vulns", "snark", "haffs", "prays", "semie", "liart", "daraf", "malms", "beaky", "khafs", "conte", "whort", "futon", "thowl", "reded", "skirr", "pinny", "axons", "souls", "imino", "ceres", "dargs", "tykes", "hoxed", "takky", "bices", "heuch", "micas", "lymes", "laves", "divot", "holla", "pampa", "scaur", "frena", "crudo", "allod", "namus", "tints", "whims", "ruled", "rakia", "silty", "bedye", "aroba", "fabby", "busky", "magot", "hules", "erose", "krabs", "bigae", "metol", "ohing", "yabba", "crocs", "durum", "iodic", "fazed", "upled", "lofts", "skaws", "wekas", "grund", "hetes", "wived", "apsos", "dorky", "nomoi", "forel", "narre", "parky", "laded", "tungs", "sowfs", "dital", "dinna", "minke", "fiked", "lyssa", "robed", "miaul", "eases", "sowff", "ouens", "bumps", "lemed", "marah", "onkus", "akita", "ayelp", "ruble", "yogic", "barro", "pones", "sluit", "orpin", "homas", "blunk", "baric", "dower", "schwa", "whist", "lochs", "ksars", "keech", "niner", "pusle", "bapus", "taxor", "rebec", "ditzy", "grosz", "zineb", "polje", "teths", "promo", "mohur", "sures", "stime", "goest", "nkosi", "unsex", "didie", "veals", "veges", "balks", "zloty", "shola", "vogie", "galut", "sizel", "rappe", "toter", "gadid", "bodes", "eyras", "adder", "nares", "viler", "barby", "nests", "titre", "frugs", "ganja", "paver", "konks", "swapt", "cacas", "abaci", "looby", "aweto", "dozer", "volet", "deshi", "tophi", "educt", "mends", "ponzu", "cheka", "lycea", "apaid", "stirs", "corgi", "abele", "egmas", "crems", "knots", "naffs", "latex", "logia", "teggs", "goafs", "polys", "razed", "dench", "airts", "roved", "terne", "recco", "marls", "soppy", "flota", "whift", "acers", "doled", "dipso", "fifis", "spivs", "agley", "scail", "sired", "indri", "grebo", "lares", "pipal", "apted", "ettle", "runty", "kelep", "cares", "bones", "leger", "sider", "punky", "hoove", "denis", "redux", "swamy", "jeans", "pashm", "gybed", "jotas", "linky", "quipo", "sixte", "sweel", "dikas", "meuse", "baser", "coded", "dured", "staps", "dicht", "rioja", "raggs", "ferms", "flump", "mythi", "kydst", "thagi", "prink", "scrag", "peeoy", "towny", "xenia", "cylix", "puris", "pulik", "coins", "sorta", "lined", "yarco", "sames", "mavie", "poets", "glent", "ropes", "draws", "heyed", "kabar", "gavot", "hongi", "jupes", "eased", "roofy", "upjet", "laxed", "liven", "peles", "powre", "lanch", "parra", "mafic", "india", "loved", "hosta", "hasps", "varia", "banes", "emmys", "spewy", "stoit", "pouks", "gears", "hawks", "oaten", "dares", "mazed", "spall", "clied", "melds", "spics", "ozzie", "bogus", "flamy", "resay", "buret", "cleek", "spins", "rakis", "lawer", "fuels", "brens", "haulm", "pheer", "spiff", "rives", "eyrie", "frogs", "logoi", "exits", "bulls", "festy", "skyer", "ylike", "toffs", "gonks", "pyoid", "vehme", "phons", "kilns", "typic", "atman", "symar", "kugel", "chugs", "usure", "droke", "yawny", "picul", "wacks", "sakai", "malty", "phage", "gools", "hexes", "zambo", "pesty", "idyls", "robes", "pekan", "silds", "lusks", "gonzo", "elfed", "skags", "pulmo", "moobs", "gooks", "dekko", "garth", "eliad", "sutta", "funks", "seron", "oxbow", "warbs", "holts", "hohed", "twerk", "whizz", "arene", "voile", "shash", "rises", "cozey", "jauks", "skeet", "dirks", "piked", "coign", "aegis", "owled", "liars", "dowar", "levin", "afald", "baurs", "umpie", "laksa", "vinal", "kembo", "liens", "keeno", "zetas", "kwela", "joles", "flane", "tyees", "milch", "thang", "culch", "yirrs", "yores", "adzed", "gynie", "raids", "izars", "yeesh", "kulak", "scuse", "spect", "courd", "sunis", "pates", "prest", "senza", "wings", "goads", "unlaw", "hajes", "plebe", "choky", "faros", "orang", "nalas", "grein", "predy", "visie", "miche", "verst", "hurls", "abyes", "makar", "pardy", "ruana", "pavin", "bumbo", "swoln", "terry", "retem", "nerol", "earst", "ardeb", "liers", "easts", "codec", "gulph", "napas", "rinds", "goons", "stivy", "devot", "nacho", "muses", "salep", "steds", "telex", "unban", "agons", "ysame", "retie", "toran", "gerah", "nomen", "rekey", "neemb", "maser", "melts", "sokes", "laari", "lodes", "niton", "ympes", "onces", "parly", "moats", "maron", "bogey", "sirup", "ramps", "cruor", "babka", "lysis", "devas", "cooky", "gazes", "whelm", "seral", "jehus", "enzym", "limma", "tuart", "kagos", "felts", "fonds", "notes", "marvy", "bogan", "neifs", "honan", "films", "benny", "algas", "sixer", "tegua", "pized", "libra", "pilei", "fatwa", "blain", "plack", "dungs", "kokra", "trets", "apeak", "balds", "snath", "pshaw", "serry", "kamik", "lites", "jokol", "iched", "upped", "imbar", "simis", "queyn", "boppy", "pilch", "artic", "brims", "lycra", "boxed", "fuffy", "sayne", "costs", "quips", "aarti", "blays", "sells", "snags", "appel", "lumbi", "gibes", "oinks", "sonny", "fidge", "hilum", "wedel", "feese", "yodle", "lepid", "soyle", "dewan", "grogs", "dorks", "yahoo", "haiku", "speks", "halfs", "thans", "sekos", "adios", "geist", "leary", "rolfs", "ablet", "hefte", "cutch", "denay", "ratch", "terns", "jewie", "butty", "marra", "sleer", "maims", "parrs", "snarf", "darga", "dwine", "roted", "perks", "andro", "suete", "baiza", "inkle", "simas", "foams", "feeze", "sorbo", "zones", "hubby", "mawns", "kohls", "brail", "stonn", "jocks", "tondo", "guyot", "phese", "rugal", "mayos", "tacos", "faine", "lewis", "apism", "abuzz", "ranga", "yugas", "loans", "boxen", "glads", "conge", "malva", "whear", "shmek", "sable", "chais", "diffs", "cardy", "prese", "sield", "adrad", "genny", "myall", "aspic", "stoun", "neums", "sewed", "posey", "skats", "kirby", "nirly", "fards", "barer", "doree", "whews", "resod", "gunge", "nahal", "piton", "ceils", "yukos", "apods", "defis", "fundi", "dosai", "biled", "golfs", "semes", "plews", "jaded", "quipu", "stond", "fugal", "fired", "taxus", "motte", "daurs", "reede", "ovals", "tests", "newsy", "noser", "hajis", "cardi", "walla", "kutis", "limen", "abies", "dohyo", "skene", "gayal", "lexis", "selva", "tocky", "elpee", "brier", "fritt", "aspis", "harms", "tragi", "nival", "foils", "syped", "tokes", "saser", "faced", "talea", "bombs", "naeve", "duple", "nazir", "exeme", "techy", "shads", "furth", "elven", "pipis", "telic", "obiit", "pawed", "shute", "anele", "tubae", "studs", "lordy", "urbex", "rials", "felty", "corms", "wains", "azido", "unrig", "doucs", "odour", "jakes", "erbia", "fanon", "teaks", "zaman", "breer", "crine", "mases", "dolia", "sewel", "ourie", "pinna", "manty", "bolls", "sofas", "enfix", "regar", "snoep", "slums", "shiva", "hejab", "chizz", "roosa", "hayed", "dicta", "madre", "geode", "jirre", "farro", "hacks", "weeny", "balti", "pitas", "musth", "zippy", "lahal", "updry", "comer", "duomo", "taxes", "atoke", "snood", "ceded", "murrs", "maras", "biffo", "stele", "crues", "latus", "desis", "kyrie", "zimbi", "natch", "skogs", "desex", "coops", "mucro", "samas", "agila", "locks", "pared", "ebook", "poofs", "mynas", "girns", "slorm", "middy", "sippy", "amain", "duals", "stria", "ridgy", "crogs", "flosh", "wafts", "ayrie", "erevs", "jesus", "vised", "kamme", "cluey", "upter", "aural", "soths", "hemin", "towze", "kyang", "agism", "urned", "roues", "somas", "ginge", "belee", "ketas", "reify", "twill", "loipe", "coxib", "unwet", "quoit", "bawls", "sweed", "winos", "syver", "towie", "sulfa", "unrip", "sujee", "mufti", "muset", "lenti", "flisk", "soled", "whoof", "breem", "outby", "spurs", "jehad", "quims", "deids", "jaker", "vlogs", "sibbs", "volar", "hocus", "poxes", "coomb", "frosh", "woose", "mobes", "reifs", "holos", "paolo", "tache", "unlay", "muzak", "agami", "scrae", "bouns", "vined", "skugs", "djinn", "toise", "ruses", "sysop", "deere", "reorg", "sours", "bourn", "uteri", "wicca", "ratoo", "rails", "voips", "moups", "hough", "apace", "clats", "amiga", "slaws", "sieth", "hokku", "telia", "carks", "kerve", "cogie", "clonk", "scudi", "yakow", "rotls", "sclim", "frise", "guyle", "lowps", "resto", "snell", "wisps", "dives", "civet", "donas", "garbs", "sarin", "shogs", "pyxes", "flaps", "nixer", "chola", "wheft", "walie", "kapus", "lapje", "showd", "nerds", "oaked", "toads", "lezzy", "mahwa", "adhan", "glams", "steys", "kanji", "aglee", "swims", "poted", "mneme", "paoli", "fados", "pluto", "kerns", "wells", "dupes", "knaps", "poopy", "palpi", "antae", "wonks", "biffy", "owned", "poori", "skran", "ebons", "trams", "fakes", "quits", "codex", "wingy", "egged", "segar", "tulsi", "proll", "risks", "ileum", "stoor", "doest", "darre", "stets", "tempt", "chirl", "parps", "debag", "acres", "derth", "amirs", "ureal", "moans", "cawed", "raged", "trist", "rahui", "maile", "brast", "legge", "axing", "bends", "golds", "stulm", "poach", "jisms", "umphs", "colza", "burse", "sythe", "masus", "soaks", "lotos", "inurn", "flaff", "viers", "psoai", "cimex", "glitz", "joual", "seare", "cadie", "blahs", "fenis", "raver", "rhies", "bubba", "goral", "labia", "lyard", "pedes", "oping", "gnows", "wills", "xysti", "bendy", "stent", "hinny", "gnaws", "boots", "pongo", "loams", "unred", "kopek", "pardi", "shtum", "snead", "prods", "waxes", "patka", "edged", "tubar", "ajiva", "boong", "xerus", "mayst", "boron", "laund", "moles", "murks", "skelm", "preys", "hoody", "bogle", "bucks", "wiper", "ickle", "bizes", "miked", "jujus", "shirr", "cooer", "bigly", "yoops", "maggs", "fural", "polis", "fugio", "strig", "porky", "yowed", "chere", "omasa", "yogas", "rouls", "karzy", "sango", "hayey", "logos", "clegs", "hyped", "curls", "frays", "goels", "gyrus", "isled", "hesps", "awave", "jilts", "yawns", "dungy", "skatt", "seise", "loirs", "tilts", "esses", "outro", "dorms", "saunt", "wagyu", "towsy", "clems", "yulan", "cocas", "slaty", "leeps", "zincy", "wears", "piste", "nepit", "whelk", "chiru", "nutsy", "snowk", "untax", "araks", "lolls", "choko", "bunce", "pelfs", "drusy", "spags", "dants", "taata", "fitch", "agars", "bergs", "puses", "pined", "bowls", "opepe", "paled", "azine", "tymps", "crops", "emmew", "dildo", "milds", "sneed", "gooby", "amigo", "salop", "zaire", "bonds", "sutor", "goosy", "malas", "rubin", "blows", "mengs", "guana", "sooks", "spink", "culms", "blogs", "galas", "puker", "sixes", "murly", "pesos", "ewked", "sauls", "bludy", "potty", "doper", "hamba", "ajies", "pikey", "unpeg", "playa", "lough", "titer", "spica", "natty", "strep", "kluge", "lotah", "greys", "umbre", "sager", "buist", "scrog", "lards", "rifty", "ycond", "moled", "popsy", "nisus", "abaka", "slype", "winns", "tawts", "coley", "roopy", "homey", "blude", "tangs", "vatic", "lairy", "forme", "bolos", "laces", "blart", "penna", "brans", "tries", "tozie", "twilt", "boson", "avize", "erugo", "imide", "paces", "yacka", "panko", "coude", "sunks", "salic", "yurta", "gizmo", "gnawn", "dirls", "deman", "edges", "genet", "avine", "perst", "blady", "enurn", "nyala", "powns", "femes", "nided", "sepic", "faggy", "tinds", "tommy", "prams", "escot", "lemma", "bubus", "fazes", "grams", "moory", "paspy", "gyppo", "taube", "alula", "crits", "gyron", "heedy", "kohas", "tesla", "reran", "rueda", "yapok", "krait", "clime", "nandu", "chiks", "cuppy", "genus", "basto", "halal", "skets", "onely", "treck", "swaps", "butoh", "taish", "situp", "diane", "wonga", "hulas", "awned", "finca", "amide", "brent", "spuer", "metho", "pomos", "bajus", "esile", "gompa", "volve", "nikau", "thuya", "brins", "pecks", "hayer", "fiscs", "hewgh", "sprog", "loppy", "stows", "renay", "sites", "gowns", "mints", "bhais", "leuds", "kirns", "ileal", "blues", "larnt", "intra", "romeo", "noels", "geeks", "caner", "mitre", "pebas", "sayed", "belay", "stupa", "leirs", "minae", "dweeb", "cowal", "saggy", "draps", "inset", "pains", "smolt", "redia", "marle", "quoll", "pandy", "undos", "alcid", "noils", "devel", "spaul", "sepal", "beryl", "retox", "flote", "plays", "blaer", "cobby", "colic", "murls", "birds", "mills", "hoved", "gleis", "yawey", "raffs", "gemmy", "hapax", "piets", "swags", "doers", "abear", "brats", "tress", "shorl", "tonks", "succi", "snigs", "maill", "slobs", "jedis", "giber", "cyans", "tippy", "sypes", "maror", "simps", "pitot", "splay", "tatus", "secco", "sonse", "cades", "solei", "khaph", "doors", "aloes", "roles", "yummy", "umiaq", "unica", "pinas", "yobby", "vauts", "kayos", "oscar", "titch", "swink", "baned", "hollo", "discs", "snogs", "swage", "furzy", "shote", "paved", "shiel", "gulpy", "nones", "arcos", "facer", "codon", "begad", "courb", "flued", "bundh", "tacet", "virid", "wexed", "kapok", "poots", "skoal", "ramal", "tufts", "grrrl", "pipit", "nodus", "bizzy", "yucca", "hight", "cooly", "softa", "speel", "rolls", "henry", "rores", "maund", "anole", "fique", "twigs", "yorks", "lapis", "wombs", "jowly", "turms", "appay", "micky", "feals", "teras", "glebe", "gouts", "ashet", "hodja", "zatis", "feria", "fetts", "jirds", "herse", "dates", "yowie", "garms", "hypes", "duffs", "prief", "chows", "fouer", "quays", "alvar", "kivas", "purty", "slebs", "quoin", "confs", "rowel", "zoned", "unbid", "golps", "gecks", "tinge", "feces", "leams", "pzazz", "vaded", "nails", "oozed", "woopy", "oiler", "mesic", "boles", "pavid", "haros", "brant", "rejig", "botes", "cuter", "paren", "motis", "longs", "hoxes", "pogos", "herls", "glisk", "rasse", "dusks", "lamer", "cobia", "treed", "jatos", "bides", "janes", "ornis", "leear", "halos", "hepar", "orles", "tenia", "umiak", "prent", "ivied", "brogs", "flava", "mozos", "pears", "areca", "larum", "praus", "murry", "sampi", "wrawl", "deoxy", "wheep", "wytes", "jarls", "intis", "widdy", "boaks", "darer", "haafs", "regur", "waurs", "loges", "peony", "facta", "gigas", "ikons", "fuzed", "alure", "brews", "gaums", "peels", "bosky", "jeeze", "reame", "kauri", "limns", "walis", "cotan", "copen", "bocks", "reams", "bouge", "imbed", "sheaf", "ident", "lauan", "goops", "stear", "seder", "pends", "gaitt", "mondo", "kynde", "stoae", "sings", "takhi", "sarky", "songs", "shend", "turfy", "lered", "auxin", "cajun", "bokeh", "copsy", "routs", "goldy", "curbs", "jubas", "voles", "gulfs", "ables", "pines", "sewar", "banda", "mixes", "ngana", "looie", "watts", "minis", "humas", "chert", "bulse", "tophs", "bandh", "avows", "rager", "gussy", "gugas", "samfu", "mamas", "losen", "untin", "pilar", "pipul", "synes", "niffs", "hikoi", "balun", "loggy", "inker", "taros", "tenon", "jeune", "direr", "brume", "dirts", "cecal", "glens", "mousy", "waits", "stoai", "gimme", "imams", "clues", "faena", "heast", "eales", "sprag", "gorsy", "offie", "fames", "noobs", "flits", "dicty", "tachs", "hithe", "downa", "micos", "eques", "poohs", "wawes", "baffs", "lazos", "skied", "cinqs", "tacts", "shuns", "momes", "nards", "salut", "feers", "cloye", "yapps", "wists", "winds", "gongs", "chave", "reiki", "dhuti", "feels", "zeins", "kicks", "tapes", "pikis", "roral", "duett", "towed", "boral", "coady", "mitts", "slows", "dunny", "yelts", "kutas", "filmi", "saran", "edits", "waift", "taxis", "redid", "fifes", "palla", "elver", "sawer", "drubs", "keels", "sahib", "runic", "duras", "sered", "kondo", "sains", "noway", "lahar", "araba", "troak", "aport", "moers", "laura", "reefs", "hansa", "chota", "nuffs", "sided", "aryls", "ydred", "grows", "musit", "derig", "mites", "afrit", "whorl", "loops", "piums", "popes", "podal", "lohan", "aggri", "seric", "loran", "morts", "cycad", "centu", "inula", "koffs", "yomim", "craig", "agist", "psych", "kythe", "paseo", "cirls", "pirls", "apers", "loses", "synth", "cents", "sexto", "ehing", "tyler", "germs", "torte", "primi", "allyl", "argle", "ribas", "magus", "weete", "ryper", "kabob", "bunko", "types", "piend", "hurds", "aphis", "fitts", "hoing", "polls", "bobos", "kubie", "sowps", "ariel", "doeth", "kieve", "sepoy", "riley", "wames", "finks", "awols", "laics", "doozy", "tiddy", "linty", "leugh", "chaco", "llano", "wrick", "modge", "glace", "rusks", "zoeas", "frere", "jewed", "kests", "basen", "polos", "lummy", "yurts", "dizen", "muist", "foule", "mulls", "azole", "tiges", "motey", "nduja", "kerel", "subby", "tides", "girts", "goles", "scows", "sighs", "zygon", "scute", "aredd", "usury", "bykes", "gippo", "bobol", "howre", "fusts", "nowts", "nertz", "firth", "moble", "fates", "houts", "samel", "wizen", "musca", "flies", "doorn", "luxer", "ginzo", "ceros", "moved", "diced", "haves", "gists", "limax", "losed", "yeggs", "doxes", "colds", "macle", "rille", "epris", "stipe", "fosse", "tusky", "upbye", "ameba", "feyer", "mhorr", "kelps", "nonyl", "wodge", "incle", "ataxy", "tansy", "wilga", "teers", "yoked", "lytes", "henge", "enarm", "beery", "busts", "caneh", "berob", "stire", "zhomo", "dampy", "teloi", "drats", "oakum", "paisa", "fermi", "cines", "sears", "maria", "rewet", "doner", "farse", "nelly", "pions", "cnida", "boyla", "lifer", "ramee", "beaty", "tuple", "octan", "hotch", "deked", "thanx", "jeels", "cysts", "maven", "caids", "impis", "speos", "pervo", "mocks", "roses", "fents", "kacks", "spugs", "gushy", "spald", "spued", "resow", "yabby", "cocos", "gemma", "pigmy", "pappy", "puces", "caret", "riads", "lefte", "ledgy", "sones", "emerg", "yokul", "naiks", "sadhe", "ungum", "vigia", "fykes", "pieta", "brugh", "ogmic", "sithe", "stedd", "mauri", "urari", "chuse", "ficin", "squeg", "gammy", "papes", "absit", "fulls", "aband", "agmas", "melic", "lysed", "ferly", "avyze", "enews", "starn", "gault", "paned", "scraw", "agoge", "puled", "loure", "bimas", "addio", "seyen", "miros", "ootid", "totty", "yuzus", "sopra", "tasso", "zowee", "rudes", "rojak", "ratan", "dulia", "synch", "laked", "sebum", "yarks", "pikau", "weeks", "hully", "whows", "paven", "memos", "inbye", "kazoo", "sapid", "kaiks", "putti", "dropt", "zupan", "topoi", "lures", "dibbs", "delft", "pands", "mirex", "prole", "jives", "drugs", "clipt", "whyda", "jurat", "damps", "unhip", "blaes", "nides", "rajas", "styes", "coeds", "pules", "mazes", "lavra", "lotta", "hours", "barra", "burls", "worts", "bords", "keyed", "nooky", "bazoo", "plies", "ducks", "eaned", "oller", "druxy", "aquas", "hulks", "toles", "nicks", "burke", "geoid", "sowse", "phyle", "yirth", "palas", "yarer", "wangs", "benet", "parol", "servo", "vired", "sweys", "urges", "panne", "nerks", "upbow", "zuzim", "soldi", "sidha", "runch", "brill", "kadis", "redly", "lorel", "dotty", "dinge", "rants", "doura", "zinco", "hejra", "gurry", "tamed", "naans", "sanko", "kyars", "spies", "yuppy", "roate", "chefs", "copal", "lanes", "piers", "fonts", "odist", "daube", "alkie", "octad", "soras", "moses", "spier", "jowls", "mares", "sorel", "furca", "mooed", "godet", "goyim", "vaute", "renga", "hefts", "vanes", "dyked", "necks", "tagma", "ojime", "gonna", "stade", "trefa", "fumed", "percs", "panty", "manat", "thews", "poilu", "khaya", "ching", "felid", "appro", "koura", "dumbo", "igged", "zoris", "gorse"]
      , Ia = "present"
      , Ma = "correct"
      , Oa = "absent";
    var Ra = {
        unknown: 0,
        absent: 1,
        present: 2,
        correct: 3
    };
    function Pa(e, a) {
        var s = {};
        return e.forEach((function(e, t) {
            if (a[t])
                for (var o = 0; o < e.length; o++) {
                    var n = e[o]
                      , r = a[t][o]
                      , i = s[n] || "unknown";
                    Ra[r] > Ra[i] && (s[n] = r)
                }
        }
        )),
        s
    }
    function $a(e) {
        var a = ["th", "st", "nd", "rd"]
          , s = e % 100;
        return e + (a[(s - 20) % 10] || a[s] || a[0])
    }
    var Ha = new Date(2021,5,19,0,0,0,0);
    function Na(e, a) {
        var s = new Date(e)
          , t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
        return Math.round(t / 864e5)
    }
    function Da(e) {
        var a, s = Ga(e);
        return a = s % La.length,
        La[a]
    }
    function Ga(e) {
        return Na(Ha, e)
    }
    var Ba = "abcdefghijklmnopqrstuvwxyz"
      , Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));
    function Wa(e) {
        for (var a = "", s = 0; s < e.length; s++) {
            var t = Ba.indexOf(e[s]);
            a += t >= 0 ? Fa[t] : "_"
        }
        return a
    }
    var Ya = "statistics"
      , Ja = "fail"
      , Ua = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: n({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        }, Ja, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0
    };
    function Xa() {
        var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
        return JSON.parse(e)
    }
    function Va(e) {
        var a = e.isWin
          , s = e.isStreak
          , t = e.numGuesses
          , o = Xa();
        a ? (o.guesses[t] += 1,
        s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0,
        o.guesses.fail += 1),
        o.maxStreak = Math.max(o.currentStreak, o.maxStreak),
        o.gamesPlayed += 1,
        o.gamesWon += a ? 1 : 0,
        o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100),
        o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
            var s = y(a, 2)
              , t = s[0]
              , o = s[1];
            return t !== Ja ? e += t * o : e
        }
        ), 0) / o.gamesWon),
        function(e) {
            window.localStorage.setItem(Ya, JSON.stringify(e))
        }(o)
    }
    var Ka = document.createElement("template");
    Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         <span style=\"color:red\">EVIL</span> WORDLE\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var Qa = document.createElement("template");
    Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS"
      , es = "WIN"
      , as = "FAIL"
      , ss = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"]
      , ts = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            s(this, t),
            n(p(e = a.call(this)), "tileIndex", 0),
            n(p(e), "rowIndex", 0),
            n(p(e), "solution", void 0),
            n(p(e), "boardState", void 0),
            n(p(e), "evaluations", void 0),
            n(p(e), "canInput", !0),
            n(p(e), "gameStatus", Za),
            n(p(e), "letterEvaluations", {}),
            n(p(e), "$board", void 0),
            n(p(e), "$keyboard", void 0),
            n(p(e), "$game", void 0),
            n(p(e), "today", void 0),
            n(p(e), "lastPlayedTs", void 0),
            n(p(e), "lastCompletedTs", void 0),
            n(p(e), "hardMode", void 0),
            n(p(e), "dayOffset", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e.today = new Date;
            var o = za();
            return e.lastPlayedTs = o.lastPlayedTs,
            !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""),
            e.evaluations = new Array(6).fill(null),
            e.solution = Da(e.today),
            e.dayOffset = Ga(e.today),
            e.lastCompletedTs = o.lastCompletedTs,
            e.hardMode = o.hardMode,
            e.restoringFromLocalStorage = !1,
            ja({
                rowIndex: e.rowIndex,
                boardState: e.boardState,
                evaluations: e.evaluations,
                solution: e.solution,
                gameStatus: e.gameStatus
            }),
            Ca("event", "level_start", {
                level_name: Wa(e.solution)
            })) : (e.boardState = o.boardState,
            e.evaluations = o.evaluations,
            e.rowIndex = o.rowIndex,
            e.solution = o.solution,
            e.dayOffset = Ga(e.today),
            e.letterEvaluations = Pa(e.boardState, e.evaluations),
            e.gameStatus = o.gameStatus,
            e.lastCompletedTs = o.lastCompletedTs,
            e.hardMode = o.hardMode,
            e.gameStatus !== Za && (e.canInput = !1),
            e.restoringFromLocalStorage = !0),
            e
        }
        return o(t, [{
            key: "evaluateRow",
            value: function() {
                if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                    var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex], s = this.boardState[this.rowIndex];
                    if (e = s,
                    !Ta.includes(e) && !La.includes(e))
                        return a.setAttribute("invalid", ""),
                        void this.addToast("Not in word list");
                    if (this.hardMode) {
                        var t = function(e, a, s) {
                            if (!e || !a || !s)
                                return {
                                    validGuess: !0
                                };
                            for (var t = 0; t < s.length; t++)
                                if (s[t] === Ma && e[t] !== a[t])
                                    return {
                                        validGuess: !1,
                                        errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase())
                                    };
                            for (var o = {}, n = 0; n < s.length; n++)
                                [Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                            var r = e.split("").reduce((function(e, a) {
                                return e[a] ? e[a] += 1 : e[a] = 1,
                                e
                            }
                            ), {});
                            for (var i in o)
                                if ((r[i] || 0) < o[i])
                                    return {
                                        validGuess: !1,
                                        errorMessage: "Guess must contain ".concat(i.toUpperCase())
                                    };
                            return {
                                validGuess: !0
                            }
                        }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1])
                          , o = t.validGuess
                          , n = t.errorMessage;
                        if (!o)
                            return a.setAttribute("invalid", ""),
                            void this.addToast(n || "Not valid in hard mode")
                    }
                    var r = function(e, a) {
                        for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++)
                            e[n] === a[n] && o[n] && (s[n] = Ma,
                            t[n] = !1,
                            o[n] = !1);
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (t[r])
                                for (var l = 0; l < a.length; l++) {
                                    var d = a[l];
                                    if (o[l] && i === d) {
                                        s[r] = Ia,
                                        o[l] = !1;
                                        break
                                    }
                                }
                        }
                        return s
                    }(s, this.solution);
                    this.evaluations[this.rowIndex] = r,
                    this.letterEvaluations = Pa(this.boardState, this.evaluations),
                    a.evaluation = this.evaluations[this.rowIndex],
                    this.rowIndex += 1;
                    var i = this.rowIndex >= 6
                      , l = r.every((function(e) {
                        return "correct" === e
                    }
                    ));
                    if (i || l)
                        Va({
                            isWin: l,
                            isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
                            numGuesses: this.rowIndex
                        }),
                        ja({
                            lastCompletedTs: Date.now()
                        }),
                        this.gameStatus = l ? es : as,
                        Ca("event", "level_end", {
                            level_name: Wa(this.solution),
                            num_guesses: this.rowIndex,
                            success: l
                        });
                    this.tileIndex = 0,
                    this.canInput = !1,
                    ja({
                        rowIndex: this.rowIndex,
                        boardState: this.boardState,
                        evaluations: this.evaluations,
                        solution: this.solution,
                        gameStatus: this.gameStatus,
                        lastPlayedTs: Date.now()
                    })
                }
            }
        }, {
            key: "addLetter",
            value: function(e) {
                this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e,
                this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]),
                this.tileIndex += 1)))
            }
        }, {
            key: "removeLetter",
            value: function() {
                if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                    this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                    var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                    this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"),
                    e.removeAttribute("invalid"),
                    this.tileIndex -= 1
                }
            }
        }, {
            key: "submitGuess",
            value: function() {
                if (this.gameStatus === Za && this.canInput) {
                    if (5 !== this.tileIndex)
                        return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""),
                        void this.addToast("Not enough letters");
                    this.evaluateRow()
                }
            }
        }, {
            key: "addToast",
            value: function(e, a) {
                var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , t = document.createElement("game-toast");
                t.setAttribute("text", e),
                a && t.setAttribute("duration", a),
                s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
            }
        }, {
            key: "sizeBoard",
            value: function() {
                var e = this.shadowRoot.querySelector("#board-container")
                  , a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350)
                  , s = 6 * Math.floor(a / 5);
                this.$board.style.width = "".concat(a, "px"),
                this.$board.style.height = "".concat(s, "px")
            }
        }, {
            key: "showStatsModal",
            value: function() {
                var e = this.$game.querySelector("game-modal")
                  , a = document.createElement("game-stats");
                this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex),
                a.gameApp = this,
                e.appendChild(a),
                e.setAttribute("open", "")
            }
        }, {
            key: "showHelpModal",
            value: function() {
                var e = this.$game.querySelector("game-modal");
                e.appendChild(document.createElement("game-help")),
                e.setAttribute("open", "")
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                this.$game = this.shadowRoot.querySelector("#game"),
                this.$board = this.shadowRoot.querySelector("#board"),
                this.$keyboard = this.shadowRoot.querySelector("game-keyboard"),
                this.sizeBoard(),
                this.lastPlayedTs || setTimeout((function() {
                    return e.showHelpModal()
                }
                ), 100);
                for (var a = 0; a < 6; a++) {
                    var s = document.createElement("game-row");
                    s.setAttribute("letters", this.boardState[a]),
                    s.setAttribute("length", 5),
                    this.evaluations[a] && (s.evaluation = this.evaluations[a]),
                    this.$board.appendChild(s)
                }
                this.$game.addEventListener("game-key-press", (function(a) {
                    var s = a.detail.key;
                    "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                }
                )),
                this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
                    e.$keyboard.letterEvaluations = e.letterEvaluations,
                    e.rowIndex < 6 && (e.canInput = !0);
                    var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""),
                    e.addToast(ss[e.rowIndex - 1], 2e3)),
                    e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0),
                    setTimeout((function() {
                        e.showStatsModal()
                    }
                    ), 2500))),
                    e.restoringFromLocalStorage = !1)
                }
                )),
                this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                    var s = a.detail
                      , t = s.name
                      , o = s.checked
                      , n = s.disabled;
                    switch (t) {
                    case "hard-mode":
                        return void (n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o,
                        ja({
                            hardMode: o
                        })))
                    }
                }
                )),
                this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-page")
                      , t = document.createTextNode("Settings");
                    s.appendChild(t);
                    var o = document.createElement("game-settings");
                    o.setAttribute("slot", "content"),
                    o.gameApp = e,
                    s.appendChild(o),
                    s.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("help-button").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-page")
                      , t = document.createTextNode("How to play");
                    s.appendChild(t);
                    var o = document.createElement("game-help");
                    o.setAttribute("page", ""),
                    o.setAttribute("slot", "content"),
                    s.appendChild(o),
                    s.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(a) {
                    e.showStatsModal()
                }
                )),
                window.addEventListener("resize", this.sizeBoard.bind(this))
            }
        }, {
            key: "disconnectedCallback",
            value: function() {}
        }, {
            key: "debugTools",
            value: function() {
                var e = this;
                this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)),
                this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                    e.addToast("hello world")
                }
                )),
                this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-modal");
                    s.textContent = "hello plz",
                    s.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                    e.evaluateRow()
                }
                )),
                this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                    e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                }
                )),
                this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                    var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template");
    os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var ns = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                this.addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".content").classList.add("closing")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"),
                    e.removeChild(e.firstChild),
                    e.removeAttribute("open"))
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"], ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]]
      , us = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "_letterEvaluations", {}),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "letterEvaluations",
            set: function(e) {
                this._letterEvaluations = e,
                this._render()
            }
        }, {
            key: "dispatchKeyPressEvent",
            value: function(e) {
                this.dispatchEvent(new CustomEvent("game-key-press",{
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        key: e
                    }
                }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                this.$keyboard = this.shadowRoot.getElementById("keyboard"),
                this.$keyboard.addEventListener("click", (function(a) {
                    var s = a.target.closest("button");
                    s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                }
                )),
                window.addEventListener("keydown", (function(a) {
                    if (!0 !== a.repeat) {
                        var s = a.key
                          , t = a.metaKey
                          , o = a.ctrlKey;
                        t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                    }
                }
                )),
                this.$keyboard.addEventListener("transitionend", (function(a) {
                    var s = a.target.closest("button");
                    s && e.$keyboard.contains(s) && s.classList.remove("fade")
                }
                )),
                ds.forEach((function(a) {
                    var s = document.createElement("div");
                    s.classList.add("row"),
                    a.forEach((function(e) {
                        var a;
                        if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
                            if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e,
                            a.textContent = e,
                            "←" === e) {
                                var t = document.createElement("game-icon");
                                t.setAttribute("icon", "backspace"),
                                a.textContent = "",
                                a.appendChild(t),
                                a.classList.add("one-and-a-half")
                            }
                            "↵" == e && (a.textContent = "enter",
                            a.classList.add("one-and-a-half"))
                        } else
                            (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                        s.appendChild(a)
                    }
                    )),
                    e.$keyboard.appendChild(s)
                }
                )),
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                for (var e in this._letterEvaluations) {
                    var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                    a.dataset.state = this._letterEvaluations[e],
                    a.classList.add("fade")
                }
            }
        }]),
        t
    }(c(HTMLElement));
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function cs(e, a, s, t) {
        return new (s || (s = Promise))((function(o, n) {
            function r(e) {
                try {
                    l(t.next(e))
                } catch (e) {
                    n(e)
                }
            }
            function i(e) {
                try {
                    l(t.throw(e))
                } catch (e) {
                    n(e)
                }
            }
            function l(e) {
                var a;
                e.done ? o(e.value) : (a = e.value,
                a instanceof s ? a : new s((function(e) {
                    e(a)
                }
                ))).then(r, i)
            }
            l((t = t.apply(e, a || [])).next())
        }
        ))
    }
    function ps(e, a) {
        var s, t, o, n, r = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: i(0),
            throw: i(1),
            return: i(2)
        },
        "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }
        ),
        n;
        function i(n) {
            return function(i) {
                return function(n) {
                    if (s)
                        throw new TypeError("Generator is already executing.");
                    for (; r; )
                        try {
                            if (s = 1,
                            t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t),
                            0) : t.next) && !(o = o.call(t, n[1])).done)
                                return o;
                            switch (t = 0,
                            o && (n = [2 & n[0], o.value]),
                            n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return r.label++,
                                {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                r.label++,
                                t = n[1],
                                n = [0];
                                continue;
                            case 7:
                                n = r.ops.pop(),
                                r.trys.pop();
                                continue;
                            default:
                                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    r.label = n[1];
                                    break
                                }
                                if (6 === n[0] && r.label < o[1]) {
                                    r.label = o[1],
                                    o = n;
                                    break
                                }
                                if (o && r.label < o[2]) {
                                    r.label = o[2],
                                    r.ops.push(n);
                                    break
                                }
                                o[2] && r.ops.pop(),
                                r.trys.pop();
                                continue
                            }
                            n = a.call(e, r)
                        } catch (e) {
                            n = [6, e],
                            t = 0
                        } finally {
                            s = o = 0
                        }
                    if (5 & n[0])
                        throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, i])
            }
        }
    }
    customElements.define("game-keyboard", us),
    function() {
        (console.warn || console.log).apply(console, arguments)
    }
    .bind("[clipboard-polyfill]");
    var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator, fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs),
    null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
    var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs),
    null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs))
      , vs = "undefined" == typeof window ? void 0 : window
      , ws = (null == vs || vs.ClipboardItem,
    vs);
    var xs = function() {
        this.success = !1
    };
    function zs(e, a, s) {
        for (var t in e.success = !0,
        a) {
            var o = a[t]
              , n = s.clipboardData;
            n.setData(t, o),
            "text/plain" === t && n.getData(t) !== o && (e.success = !1)
        }
        s.preventDefault()
    }
    function js(e) {
        var a = new xs
          , s = zs.bind(this, a, e);
        document.addEventListener("copy", s);
        try {
            document.execCommand("copy")
        } finally {
            document.removeEventListener("copy", s)
        }
        return a.success
    }
    function Ss(e, a) {
        _s(e);
        var s = js(a);
        return qs(),
        s
    }
    function _s(e) {
        var a = document.getSelection();
        if (a) {
            var s = document.createRange();
            s.selectNodeContents(e),
            a.removeAllRanges(),
            a.addRange(s)
        }
    }
    function qs() {
        var e = document.getSelection();
        e && e.removeAllRanges()
    }
    function Es(e) {
        return cs(this, void 0, void 0, (function() {
            var a;
            return ps(this, (function(s) {
                if (a = "text/plain"in e,
                "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
                    if (!a)
                        throw new Error("No `text/plain` value was specified.");
                    if (t = e["text/plain"],
                    ws.clipboardData.setData("Text", t))
                        return [2, !0];
                    throw new Error("Copying failed, possibly because the user rejected it.")
                }
                var t;
                return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important"),
                    a.textContent = "temporary element",
                    document.body.appendChild(a);
                    var s = Ss(a, e);
                    return document.body.removeChild(a),
                    s
                }(e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important");
                    var s = a;
                    a.attachShadow && (s = a.attachShadow({
                        mode: "open"
                    }));
                    var t = document.createElement("span");
                    t.innerText = e,
                    s.appendChild(t),
                    document.body.appendChild(a),
                    _s(t);
                    var o = document.execCommand("copy");
                    return qs(),
                    document.body.removeChild(a),
                    o
                }(e["text/plain"]) ? [2, !0] : [2, !1]
            }
            ))
        }
        ))
    }
    function As(e, a, s) {
        try {
            t = navigator.userAgent || navigator.vendor || window.opera,
            !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function(e) {
                return cs(this, void 0, void 0, (function() {
                    return ps(this, (function(a) {
                        if (ks)
                            return [2, ks(e)];
                        if (!Es(function(e) {
                            var a = {};
                            return a["text/plain"] = e,
                            a
                        }(e)))
                            throw new Error("writeText() failed");
                        return [2]
                    }
                    ))
                }
                ))
            }(e.text).then(a, s) : navigator.share(e)
        } catch (e) {
            s()
        }
        var t
    }
    var Cs = document.createElement("template");
    Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ls = document.createElement("template");
    Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement("template");
    Is.innerHTML = '\n  <div class="countdown">\n    <h1>Next <span style=\"color:red\">EVIL</span> WORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = {
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        winPercentage: "Win %",
        gamesPlayed: "Played",
        gamesWon: "Won",
        averageGuesses: "Av. Guesses"
    }
      , Os = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "stats", {}),
            n(p(e), "gameApp", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e.stats = Xa(),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                var a = this.shadowRoot.getElementById("statistics")
                  , s = this.shadowRoot.getElementById("guess-distribution")
                  , t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                if (Object.values(this.stats.guesses).every((function(e) {
                    return 0 === e
                }
                ))) {
                    var o = document.createElement("div");
                    o.classList.add("no-data"),
                    o.innerText = "No Data",
                    s.appendChild(o)
                } else
                    for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                        var r = n
                          , i = this.stats.guesses[n]
                          , l = Ts.content.cloneNode(!0)
                          , d = Math.max(7, Math.round(i / t * 100));
                        l.querySelector(".guess").textContent = r;
                        var u = l.querySelector(".graph-bar");
                        if (u.style.width = "".concat(d, "%"),
                        "number" == typeof i) {
                            l.querySelector(".num-guesses").textContent = i,
                            i > 0 && u.classList.add("align-right");
                            var c = parseInt(this.getAttribute("highlight-guess"), 10);
                            c && n === c && u.classList.add("highlight")
                        }
                        s.appendChild(l)
                    }
                if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                    var t = Ms[s]
                      , o = e.stats[s]
                      , n = Ls.content.cloneNode(!0);
                    n.querySelector(".label").textContent = t,
                    n.querySelector(".statistic").textContent = o,
                    a.appendChild(n)
                }
                )),
                this.gameApp.gameStatus !== Za) {
                    var p = this.shadowRoot.querySelector(".footer")
                      , m = Is.content.cloneNode(!0);
                    p.appendChild(m),
                    this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                        a.preventDefault(),
                        a.stopPropagation();
                        As(function(e) {
                            var a = e.evaluations
                              , s = e.dayOffset
                              , t = e.rowIndex
                              , o = e.isHardMode
                              , n = e.isWin
                              , r = JSON.parse(window.localStorage.getItem(j))
                              , i = JSON.parse(window.localStorage.getItem(S))
                              , l = "EVIL Wordle ".concat(s);
                            l += " ".concat(n ? t : "X", "/").concat(6),
                            o && (l += "*");
                            var d = "";
                            return a.forEach((function(e) {
                                e && (e.forEach((function(e) {
                                    if (e) {
                                        var a = "";
                                        switch (e) {
                                        case Ma:
                                            a = function(e) {
                                                return e ? "🟧" : "🟩"
                                            }(i);
                                            break;
                                        case Ia:
                                            a = function(e) {
                                                return e ? "🟦" : "🟨"
                                            }(i);
                                            break;
                                        case Oa:
                                            a = function(e) {
                                                return e ? "⬛" : "⬜"
                                            }(r)
                                        }
                                        d += a
                                    }
                                }
                                )),
                                d += "\n")
                            }
                            )),
                            {
                                text: "".concat(l, "\n\n").concat(d.trimEnd())
                            }
                        }({
                            evaluations: e.gameApp.evaluations,
                            dayOffset: e.gameApp.dayOffset,
                            rowIndex: e.gameApp.rowIndex,
                            isHardMode: e.gameApp.hardMode,
                            isWin: e.gameApp.gameStatus === es
                        }), (function() {
                            e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
                        }
                        ), (function() {
                            e.gameApp.addToast("Share failed", 2e3, !0)
                        }
                        ))
                    }
                    ))
                }
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Ps = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                    a.stopPropagation(),
                    e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""),
                    e.dispatchEvent(new CustomEvent("game-switch-change",{
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                        }
                    }))
                }
                ))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["checked"]
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-switch", Ps);
    var $s = document.createElement("template");
    $s.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong><span style="color:red">EVIL</span> WORDLE</strong> in 6 tries. I don\'t think you can.</p>\n  <p>This is a clone of the popular <strong>WORDLE</strong> with modified word selection.</p>\n      <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w" evaluation="correct" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="i" evaluation="present" reveal></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="s"></game-tile>\n          </div>\n          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="u" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>U</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new <span style="color:red">EVIL</span> WORDLE will be available each day!<strong></p>\n    </div>\n  </section>\n';
    var Hs = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild($s.content.cloneNode(!0))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var Ds = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".overlay").classList.add("closing")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"),
                    Array.from(e.childNodes).forEach((function(a) {
                        e.removeChild(a)
                    }
                    )),
                    e.removeAttribute("open"))
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
        help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
    }
      , Fs = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                var e = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
                "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4
      , Js = 36e5
      , Us = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            s(this, t),
            n(p(e = a.call(this)), "targetEpochMS", void 0),
            n(p(e), "intervalId", void 0),
            n(p(e), "$timer", void 0),
            e.attachShadow({
                mode: "open"
            });
            var o = new Date;
            return o.setDate(o.getDate() + 1),
            o.setHours(0, 0, 0, 0),
            e.targetEpochMS = o.getTime(),
            e
        }
        return o(t, [{
            key: "padDigit",
            value: function(e) {
                return e.toString().padStart(2, "0")
            }
        }, {
            key: "updateTimer",
            value: function() {
                var e, a = (new Date).getTime(), s = Math.floor(this.targetEpochMS - a);
                if (s <= 0)
                    e = "00:00:00";
                else {
                    var t = Math.floor(s % 864e5 / Js)
                      , o = Math.floor(s % Js / Ys)
                      , n = Math.floor(s % Ys / 1e3);
                    e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                }
                this.$timer.textContent = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                this.$timer = this.shadowRoot.querySelector("#timer"),
                this.intervalId = setInterval((function() {
                    e.updateTimer()
                }
                ), 200)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                clearInterval(this.intervalId)
            }
        }]),
        t
    }(c(HTMLElement));
    return customElements.define("countdown-timer", Us),
    e.CountdownTimer = Us,
    e.GameApp = ts,
    e.GameHelp = Hs,
    e.GameIcon = Fs,
    e.GameKeyboard = us,
    e.GameModal = ns,
    e.GamePage = Ds,
    e.GameRow = x,
    e.GameSettings = _a,
    e.GameStats = Os,
    e.GameSwitch = Ps,
    e.GameThemeManager = _,
    e.GameTile = v,
    e.GameToast = Aa,
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e
}({});
