(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [498], {
        7091: function(e, t, n) {
            "use strict";

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function o(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" === typeof e) return i(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                            }
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0;
                        return function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (n = e[Symbol.iterator]()).next.bind(n)
            }
            n.d(t, {
                V: function() {
                    return se
                }
            });
            var u, c, s, l = n(7294);

            function f(e, t) {
                if (e in t) {
                    for (var n = t[e], r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                    return "function" === typeof n ? n.apply(void 0, o) : n
                }
                var a = new Error('Tried to handle "' + e + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(t).map((function(e) {
                    return '"' + e + '"'
                })).join(", ") + ".");
                throw Error.captureStackTrace && Error.captureStackTrace(a, f), a
            }

            function d(e) {
                var t = e.props,
                    n = e.slot,
                    i = e.defaultTag,
                    a = e.features,
                    s = e.visible,
                    l = void 0 === s || s,
                    d = e.name;
                if (l) return p(t, n, i, d);
                var v = null != a ? a : u.None;
                if (v & u.Static) {
                    var h = t.static,
                        y = void 0 !== h && h,
                        m = o(t, ["static"]);
                    if (y) return p(m, n, i, d)
                }
                if (v & u.RenderStrategy) {
                    var b, g = t.unmount,
                        w = void 0 === g || g,
                        O = o(t, ["unmount"]);
                    return f(w ? c.Unmount : c.Hidden, ((b = {})[c.Unmount] = function() {
                        return null
                    }, b[c.Hidden] = function() {
                        return p(r({}, O, {
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }), n, i, d)
                    }, b))
                }
                return p(t, n, i, d)
            }

            function p(e, t, n, r) {
                var i;
                void 0 === t && (t = {});
                var u = h(e, ["unmount", "static"]),
                    c = u.as,
                    s = void 0 === c ? n : c,
                    f = u.children,
                    d = u.refName,
                    p = void 0 === d ? "ref" : d,
                    v = o(u, ["as", "children", "refName"]),
                    y = void 0 !== e.ref ? ((i = {})[p] = e.ref, i) : {},
                    m = "function" === typeof f ? f(t) : f;
                if (v.className && "function" === typeof v.className && (v.className = v.className(t)), s === l.Fragment && Object.keys(v).length > 0) {
                    if (!(0, l.isValidElement)(m) || Array.isArray(m) && m.length > 1) throw new Error(['Passing props on "Fragment"!', "", "The current component <" + r + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(v).map((function(e) {
                        return "  - " + e
                    })).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((function(e) {
                        return "  - " + e
                    })).join("\n")].join("\n"));
                    return (0, l.cloneElement)(m, Object.assign({}, function(e, t, n) {
                        for (var r, o = Object.assign({}, e), i = function() {
                                var n, i = r.value;
                                void 0 !== e[i] && void 0 !== t[i] && Object.assign(o, ((n = {})[i] = function(n) {
                                    n.defaultPrevented || e[i](n), n.defaultPrevented || t[i](n)
                                }, n))
                            }, u = a(n); !(r = u()).done;) i();
                        return o
                    }(function(e) {
                        var t = Object.assign({}, e);
                        for (var n in t) void 0 === t[n] && delete t[n];
                        return t
                    }(h(v, ["ref"])), m.props, ["onClick"]), y))
                }
                return (0, l.createElement)(s, Object.assign({}, h(v, ["ref"]), s !== l.Fragment && y), m)
            }

            function v(e) {
                var t;
                return Object.assign((0, l.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function h(e, t) {
                void 0 === t && (t = []);
                for (var n, r = Object.assign({}, e), o = a(t); !(n = o()).done;) {
                    var i = n.value;
                    i in r && delete r[i]
                }
                return r
            }

            function y() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = (0, l.useRef)(t);
                return (0, l.useEffect)((function() {
                    r.current = t
                }), [t]), (0, l.useCallback)((function(e) {
                    for (var t, n = a(r.current); !(t = n()).done;) {
                        var o = t.value;
                        null != o && ("function" === typeof o ? o(e) : o.current = e)
                    }
                }), [r])
            }

            function m(e) {
                for (var t, n, r = e.parentElement, o = null; r && !(r instanceof HTMLFieldSetElement);) r instanceof HTMLLegendElement && (o = r), r = r.parentElement;
                var i = null != (t = "" === (null == (n = r) ? void 0 : n.getAttribute("disabled"))) && t;
                return (!i || ! function(e) {
                    if (!e) return !1;
                    var t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(o)) && i
            }! function(e) {
                e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static"
            }(u || (u = {})),
            function(e) {
                e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden"
            }(c || (c = {})),
            function(e) {
                e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab"
            }(s || (s = {}));
            var b = {
                serverHandoffComplete: !1
            };

            function g() {
                var e = (0, l.useState)(b.serverHandoffComplete),
                    t = e[0],
                    n = e[1];
                return (0, l.useEffect)((function() {
                    !0 !== t && n(!0)
                }), [t]), (0, l.useEffect)((function() {
                    !1 === b.serverHandoffComplete && (b.serverHandoffComplete = !0)
                }), []), t
            }
            var w = "undefined" !== typeof window ? l.useLayoutEffect : l.useEffect,
                O = 0;

            function E() {
                return ++O
            }

            function x() {
                var e = g(),
                    t = (0, l.useState)(e ? E : null),
                    n = t[0],
                    r = t[1];
                return w((function() {
                    null === n && r(E())
                }), [n]), null != n ? "" + n : void 0
            }

            function S(e, t, n) {
                var r = (0, l.useRef)(t);
                r.current = t, (0, l.useEffect)((function() {
                    function t(e) {
                        r.current.call(window, e)
                    }
                    return window.addEventListener(e, t, n),
                        function() {
                            return window.removeEventListener(e, t, n)
                        }
                }), [e, n])
            }
            var C, P, j, T, M, I = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((function(e) {
                return e + ":not([tabindex='-1'])"
            })).join(",");

            function R(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }

            function A(e, t) {
                var n = Array.isArray(e) ? e.slice().sort((function(e, t) {
                        var n = e.compareDocumentPosition(t);
                        return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                    })) : function(e) {
                        return void 0 === e && (e = document.body), null == e ? [] : Array.from(e.querySelectorAll(I))
                    }(e),
                    r = document.activeElement,
                    o = function() {
                        if (t & (C.First | C.Next)) return j.Next;
                        if (t & (C.Previous | C.Last)) return j.Previous;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    }(),
                    i = function() {
                        if (t & C.First) return 0;
                        if (t & C.Previous) return Math.max(0, n.indexOf(r)) - 1;
                        if (t & C.Next) return Math.max(0, n.indexOf(r)) + 1;
                        if (t & C.Last) return n.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    }(),
                    a = t & C.NoScroll ? {
                        preventScroll: !0
                    } : {},
                    u = 0,
                    c = n.length,
                    s = void 0;
                do {
                    var l;
                    if (u >= c || u + c <= 0) return P.Error;
                    var f = i + u;
                    if (t & C.WrapAround) f = (f + c) % c;
                    else {
                        if (f < 0) return P.Underflow;
                        if (f >= c) return P.Overflow
                    }
                    null == (l = s = n[f]) || l.focus(a), u += o
                } while (s !== document.activeElement);
                return s.hasAttribute("tabindex") || s.setAttribute("tabindex", "0"), P.Success
            }

            function k(e, t, n) {
                void 0 === t && (t = M.All);
                var r = void 0 === n ? {} : n,
                    o = r.initialFocus,
                    i = r.containers,
                    u = (0, l.useRef)("undefined" !== typeof window ? document.activeElement : null),
                    c = (0, l.useRef)(null),
                    f = function() {
                        var e = (0, l.useRef)(!1);
                        return (0, l.useEffect)((function() {
                            return e.current = !0,
                                function() {
                                    e.current = !1
                                }
                        }), []), e
                    }(),
                    d = Boolean(t & M.RestoreFocus),
                    p = Boolean(t & M.InitialFocus);
                (0, l.useEffect)((function() {
                    d && (u.current = document.activeElement)
                }), [d]), (0, l.useEffect)((function() {
                    if (d) return function() {
                        R(u.current), u.current = null
                    }
                }), [d]), (0, l.useEffect)((function() {
                    if (p && e.current) {
                        var t = document.activeElement;
                        if (null == o ? void 0 : o.current) {
                            if ((null == o ? void 0 : o.current) === t) return void(c.current = t)
                        } else if (e.current.contains(t)) return void(c.current = t);
                        (null == o ? void 0 : o.current) ? R(o.current): A(e.current, C.First) === P.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), c.current = document.activeElement
                    }
                }), [e, o, p]), S("keydown", (function(n) {
                    t & M.TabLock && e.current && n.key === s.Tab && (n.preventDefault(), A(e.current, (n.shiftKey ? C.Previous : C.Next) | C.WrapAround) === P.Success && (c.current = document.activeElement))
                })), S("focus", (function(n) {
                    if (t & M.FocusLock) {
                        var r = new Set(null == i ? void 0 : i.current);
                        if (r.add(e), r.size) {
                            var o = c.current;
                            if (o && f.current) {
                                var u = n.target;
                                u && u instanceof HTMLElement ? ! function(e, t) {
                                    for (var n, r = a(e); !(n = r()).done;) {
                                        var o;
                                        if (null == (o = n.value.current) ? void 0 : o.contains(t)) return !0
                                    }
                                    return !1
                                }(r, u) ? (n.preventDefault(), n.stopPropagation(), R(o)) : (c.current = u, R(u)) : R(c.current)
                            }
                        }
                    }
                }), !0)
            }! function(e) {
                e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll"
            }(C || (C = {})),
            function(e) {
                e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow"
            }(P || (P = {})),
            function(e) {
                e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next"
            }(j || (j = {})),
            function(e) {
                e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose"
            }(T || (T = {})),
            function(e) {
                e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All"
            }(M || (M = {}));
            var N = new Set,
                D = new Map;

            function F(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function L(e) {
                var t = D.get(e);
                t && (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
            }
            var _ = (0, l.createContext)(!1);

            function B(e) {
                return l.createElement(_.Provider, {
                    value: e.force
                }, e.children)
            }
            var H = n(3935);

            function U() {
                var e = (0, l.useContext)(_),
                    t = (0, l.useContext)(W),
                    n = (0, l.useState)((function() {
                        if (!e && null !== t) return null;
                        if ("undefined" === typeof window) return null;
                        var n = document.getElementById("headlessui-portal-root");
                        if (n) return n;
                        var r = document.createElement("div");
                        return r.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(r)
                    })),
                    r = n[0],
                    o = n[1];
                return (0, l.useEffect)((function() {
                    null !== r && (document.body.contains(r) || document.body.appendChild(r))
                }), [r]), (0, l.useEffect)((function() {
                    e || null !== t && o(t.current)
                }), [t, o, e]), r
            }
            var q = l.Fragment;

            function z(e) {
                var t = e,
                    n = U(),
                    r = (0, l.useState)((function() {
                        return "undefined" === typeof window ? null : document.createElement("div")
                    }))[0],
                    o = g();
                return w((function() {
                    if (n && r) return n.appendChild(r),
                        function() {
                            var e;
                            n && (r && (n.removeChild(r), n.childNodes.length <= 0 && (null == (e = n.parentElement) || e.removeChild(n))))
                        }
                }), [n, r]), o && n && r ? (0, H.createPortal)(d({
                    props: t,
                    defaultTag: q,
                    name: "Portal"
                }), r) : null
            }
            var Y = l.Fragment,
                W = (0, l.createContext)(null);
            z.Group = function(e) {
                var t = e.target,
                    n = o(e, ["target"]);
                return l.createElement(W.Provider, {
                    value: t
                }, d({
                    props: n,
                    defaultTag: Y,
                    name: "Popover.Group"
                }))
            };
            var G = (0, l.createContext)(null);

            function Q() {
                var e = (0, l.useContext)(G);
                if (null === e) {
                    var t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Q), t
                }
                return e
            }
            var V, K = (0, l.createContext)(null);
            K.displayName = "OpenClosedContext",
                function(e) {
                    e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
                }(V || (V = {}));
            var X, $, Z, J, ee = (0, l.createContext)((function() {}));

            function te(e) {
                var t = e.children,
                    n = e.onUpdate,
                    r = e.type,
                    o = e.element,
                    i = (0, l.useContext)(ee),
                    a = (0, l.useCallback)((function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        null == n || n.apply(void 0, t), i.apply(void 0, t)
                    }), [i, n]);
                return w((function() {
                    return a(X.Add, r, o),
                        function() {
                            return a(X.Remove, r, o)
                        }
                }), [a, r, o]), l.createElement(ee.Provider, {
                    value: a
                }, t)
            }
            ee.displayName = "StackContext",
                function(e) {
                    e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
                }(X || (X = {})),
                function(e) {
                    e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
                }(Z || (Z = {})),
                function(e) {
                    e[e.SetTitleId = 0] = "SetTitleId"
                }(J || (J = {}));
            var ne = (($ = {})[J.SetTitleId] = function(e, t) {
                    return e.titleId === t.id ? e : r({}, e, {
                        titleId: t.id
                    })
                }, $),
                re = (0, l.createContext)(null);

            function oe(e) {
                var t = (0, l.useContext)(re);
                if (null === t) {
                    var n = new Error("<" + e + " /> is missing a parent <" + se.displayName + " /> component.");
                    throw Error.captureStackTrace && Error.captureStackTrace(n, oe), n
                }
                return t
            }

            function ie(e, t) {
                return f(t.type, ne, e, t)
            }
            re.displayName = "DialogContext";
            var ae = u.RenderStrategy | u.Static,
                ue = v((function(e, t) {
                    var n, i = e.open,
                        u = e.onClose,
                        c = e.initialFocus,
                        p = o(e, ["open", "onClose", "initialFocus"]),
                        v = (0, l.useState)(0),
                        h = v[0],
                        m = v[1],
                        b = (0, l.useContext)(K);
                    void 0 === i && null !== b && (i = f(b, ((n = {})[V.Open] = !0, n[V.Closed] = !1, n)));
                    var O = (0, l.useRef)(new Set),
                        E = (0, l.useRef)(null),
                        C = y(E, t),
                        P = e.hasOwnProperty("open") || null !== b,
                        j = e.hasOwnProperty("onClose");
                    if (!P && !j) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!P) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!j) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" !== typeof i) throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + i);
                    if ("function" !== typeof u) throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: " + u);
                    var T = i ? Z.Open : Z.Closed,
                        I = null !== b ? b === V.Open : T === Z.Open,
                        R = (0, l.useReducer)(ie, {
                            titleId: null,
                            descriptionId: null
                        }),
                        A = R[0],
                        _ = R[1],
                        H = (0, l.useCallback)((function() {
                            return u(!1)
                        }), [u]),
                        U = (0, l.useCallback)((function(e) {
                            return _({
                                type: J.SetTitleId,
                                id: e
                            })
                        }), [_]),
                        q = g() && T === Z.Open,
                        Y = h > 1,
                        W = null !== (0, l.useContext)(re);
                    k(E, q ? f(Y ? "parent" : "leaf", {
                            parent: M.RestoreFocus,
                            leaf: M.All
                        }) : M.None, {
                            initialFocus: c,
                            containers: O
                        }),
                        function(e, t) {
                            void 0 === t && (t = !0), w((function() {
                                if (t && e.current) {
                                    var n = e.current;
                                    N.add(n);
                                    for (var r, o = a(D.keys()); !(r = o()).done;) {
                                        var i = r.value;
                                        i.contains(n) && (L(i), D.delete(i))
                                    }
                                    return document.querySelectorAll("body > *").forEach((function(e) {
                                            if (e instanceof HTMLElement) {
                                                for (var t, n = a(N); !(t = n()).done;) {
                                                    var r = t.value;
                                                    if (e.contains(r)) return
                                                }
                                                1 === N.size && (D.set(e, {
                                                    "aria-hidden": e.getAttribute("aria-hidden"),
                                                    inert: e.inert
                                                }), F(e))
                                            }
                                        })),
                                        function() {
                                            if (N.delete(n), N.size > 0) document.querySelectorAll("body > *").forEach((function(e) {
                                                if (e instanceof HTMLElement && !D.has(e)) {
                                                    for (var t, n = a(N); !(t = n()).done;) {
                                                        var r = t.value;
                                                        if (e.contains(r)) return
                                                    }
                                                    D.set(e, {
                                                        "aria-hidden": e.getAttribute("aria-hidden"),
                                                        inert: e.inert
                                                    }), F(e)
                                                }
                                            }));
                                            else
                                                for (var e, t = a(D.keys()); !(e = t()).done;) {
                                                    var r = e.value;
                                                    L(r), D.delete(r)
                                                }
                                        }
                                }
                            }), [t])
                        }(E, !!Y && q), S("mousedown", (function(e) {
                            var t, n = e.target;
                            T === Z.Open && (Y || (null == (t = E.current) ? void 0 : t.contains(n)) || H())
                        })), S("keydown", (function(e) {
                            e.key === s.Escape && T === Z.Open && (Y || (e.preventDefault(), e.stopPropagation(), H()))
                        })), (0, l.useEffect)((function() {
                            if (T === Z.Open && !W) {
                                var e = document.documentElement.style.overflow,
                                    t = document.documentElement.style.paddingRight,
                                    n = window.innerWidth - document.documentElement.clientWidth;
                                return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = n + "px",
                                    function() {
                                        document.documentElement.style.overflow = e, document.documentElement.style.paddingRight = t
                                    }
                            }
                        }), [T, W]), (0, l.useEffect)((function() {
                            if (T === Z.Open && E.current) {
                                var e = new IntersectionObserver((function(e) {
                                    for (var t, n = a(e); !(t = n()).done;) {
                                        var r = t.value;
                                        0 === r.boundingClientRect.x && 0 === r.boundingClientRect.y && 0 === r.boundingClientRect.width && 0 === r.boundingClientRect.height && H()
                                    }
                                }));
                                return e.observe(E.current),
                                    function() {
                                        return e.disconnect()
                                    }
                            }
                        }), [T, E, H]);
                    var Q = function() {
                            var e = (0, l.useState)([]),
                                t = e[0],
                                n = e[1];
                            return [t.length > 0 ? t.join(" ") : void 0, (0, l.useMemo)((function() {
                                return function(e) {
                                    var t = (0, l.useCallback)((function(e) {
                                            return n((function(t) {
                                                    return [].concat(t, [e])
                                                })),
                                                function() {
                                                    return n((function(t) {
                                                        var n = t.slice(),
                                                            r = n.indexOf(e);
                                                        return -1 !== r && n.splice(r, 1), n
                                                    }))
                                                }
                                        }), []),
                                        r = (0, l.useMemo)((function() {
                                            return {
                                                register: t,
                                                slot: e.slot,
                                                name: e.name,
                                                props: e.props
                                            }
                                        }), [t, e.slot, e.name, e.props]);
                                    return l.createElement(G.Provider, {
                                        value: r
                                    }, e.children)
                                }
                            }), [n])]
                        }(),
                        $ = Q[0],
                        ee = Q[1],
                        ne = "headlessui-dialog-" + x(),
                        oe = (0, l.useMemo)((function() {
                            return [{
                                dialogState: T,
                                close: H,
                                setTitleId: U
                            }, A]
                        }), [T, A, H, U]),
                        ue = (0, l.useMemo)((function() {
                            return {
                                open: T === Z.Open
                            }
                        }), [T]),
                        ce = {
                            ref: C,
                            id: ne,
                            role: "dialog",
                            "aria-modal": T === Z.Open || void 0,
                            "aria-labelledby": A.titleId,
                            "aria-describedby": $,
                            onClick: function(e) {
                                e.stopPropagation()
                            }
                        },
                        se = p;
                    return l.createElement(te, {
                        type: "Dialog",
                        element: E,
                        onUpdate: (0, l.useCallback)((function(e, t, n) {
                            var r;
                            "Dialog" === t && f(e, ((r = {})[X.Add] = function() {
                                O.current.add(n), m((function(e) {
                                    return e + 1
                                }))
                            }, r[X.Remove] = function() {
                                O.current.add(n), m((function(e) {
                                    return e - 1
                                }))
                            }, r))
                        }), [])
                    }, l.createElement(B, {
                        force: !0
                    }, l.createElement(z, null, l.createElement(re.Provider, {
                        value: oe
                    }, l.createElement(z.Group, {
                        target: E
                    }, l.createElement(B, {
                        force: !1
                    }, l.createElement(ee, {
                        slot: ue,
                        name: "Dialog.Description"
                    }, d({
                        props: r({}, se, ce),
                        slot: ue,
                        defaultTag: "div",
                        features: ae,
                        visible: I,
                        name: "Dialog"
                    }))))))))
                })),
                ce = v((function e(t, n) {
                    var o = oe([se.displayName, e.name].join("."))[0],
                        i = o.dialogState,
                        a = o.close,
                        u = y(n),
                        c = "headlessui-dialog-overlay-" + x(),
                        s = (0, l.useCallback)((function(e) {
                            if (e.target === e.currentTarget) {
                                if (m(e.currentTarget)) return e.preventDefault();
                                e.preventDefault(), e.stopPropagation(), a()
                            }
                        }), [a]),
                        f = (0, l.useMemo)((function() {
                            return {
                                open: i === Z.Open
                            }
                        }), [i]);
                    return d({
                        props: r({}, t, {
                            ref: u,
                            id: c,
                            "aria-hidden": !0,
                            onClick: s
                        }),
                        slot: f,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                }));
            var se = Object.assign(ue, {
                Overlay: ce,
                Title: function e(t) {
                    var n = oe([se.displayName, e.name].join("."))[0],
                        o = n.dialogState,
                        i = n.setTitleId,
                        a = "headlessui-dialog-title-" + x();
                    (0, l.useEffect)((function() {
                        return i(a),
                            function() {
                                return i(null)
                            }
                    }), [a, i]);
                    var u = (0, l.useMemo)((function() {
                        return {
                            open: o === Z.Open
                        }
                    }), [o]);
                    return d({
                        props: r({}, t, {
                            id: a
                        }),
                        slot: u,
                        defaultTag: "h2",
                        name: "Dialog.Title"
                    })
                },
                Description: function(e) {
                    var t = Q(),
                        n = "headlessui-description-" + x();
                    w((function() {
                        return t.register(n)
                    }), [n, t.register]);
                    var o = e,
                        i = r({}, t.props, {
                            id: n
                        });
                    return d({
                        props: r({}, o, i),
                        slot: t.slot || {},
                        defaultTag: "p",
                        name: t.name || "Description"
                    })
                }
            })
        },
        1217: function(e, t, n) {
            "use strict";
            n.d(t, {
                Pi: function() {
                    return x
                }
            });
            var r = n(8949),
                o = n(7294);
            if (!o.useState) throw new Error("mobx-react-lite requires React with Hooks support");
            if (!r.rC) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
            var i = n(3935);

            function a(e) {
                e()
            }

            function u(e) {
                return (0, r.Gf)(e)
            }
            var c = "undefined" === typeof FinalizationRegistry ? void 0 : FinalizationRegistry;

            function s(e) {
                return {
                    reaction: e,
                    mounted: !1,
                    changedBeforeMount: !1,
                    cleanAt: Date.now() + l
                }
            }
            var l = 1e4;
            var f = function(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            };
            var d = c ? function(e) {
                    var t = new Map,
                        n = 1,
                        r = new e((function(e) {
                            var n = t.get(e);
                            n && (n.reaction.dispose(), t.delete(e))
                        }));
                    return {
                        addReactionToTrack: function(e, o, i) {
                            var a = n++;
                            return r.register(i, a, e), e.current = s(o), e.current.finalizationRegistryCleanupToken = a, t.set(a, e.current), e.current
                        },
                        recordReactionAsCommitted: function(e) {
                            r.unregister(e), e.current && e.current.finalizationRegistryCleanupToken && t.delete(e.current.finalizationRegistryCleanupToken)
                        },
                        forceCleanupTimerToRunNowForTests: function() {},
                        resetCleanupScheduleForTests: function() {}
                    }
                }(c) : function() {
                    var e, t = new Set;

                    function n() {
                        void 0 === e && (e = setTimeout(r, 1e4))
                    }

                    function r() {
                        e = void 0;
                        var r = Date.now();
                        t.forEach((function(e) {
                            var n = e.current;
                            n && r >= n.cleanAt && (n.reaction.dispose(), e.current = null, t.delete(e))
                        })), t.size > 0 && n()
                    }
                    return {
                        addReactionToTrack: function(e, r, o) {
                            var i;
                            return e.current = s(r), i = e, t.add(i), n(), e.current
                        },
                        recordReactionAsCommitted: function(e) {
                            t.delete(e)
                        },
                        forceCleanupTimerToRunNowForTests: function() {
                            e && (clearTimeout(e), r())
                        },
                        resetCleanupScheduleForTests: function() {
                            var n, r;
                            if (t.size > 0) {
                                try {
                                    for (var o = f(t), i = o.next(); !i.done; i = o.next()) {
                                        var a = i.value,
                                            u = a.current;
                                        u && (u.reaction.dispose(), a.current = null)
                                    }
                                } catch (c) {
                                    n = {
                                        error: c
                                    }
                                } finally {
                                    try {
                                        i && !i.done && (r = o.return) && r.call(o)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                t.clear()
                            }
                            e && (clearTimeout(e), e = void 0)
                        }
                    }
                }(),
                p = d.addReactionToTrack,
                v = d.recordReactionAsCommitted,
                h = (d.resetCleanupScheduleForTests, d.forceCleanupTimerToRunNowForTests, !1);

            function y() {
                return h
            }
            var m = function(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (u) {
                    o = {
                        error: u
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            };

            function b(e) {
                return "observer".concat(e)
            }
            var g = function() {};

            function w() {
                return new g
            }

            function O(e, t) {
                if (void 0 === t && (t = "observed"), y()) return e();
                var n = m(o.useState(w), 1)[0],
                    i = m(o.useState(), 2)[1],
                    a = function() {
                        return i([])
                    },
                    c = o.useRef(null);
                if (!c.current) var s = new r.le(b(t), (function() {
                        l.mounted ? a() : l.changedBeforeMount = !0
                    })),
                    l = p(c, s, n);
                var f, d, h = c.current.reaction;
                if (o.useDebugValue(h, u), o.useEffect((function() {
                        return v(c), c.current ? (c.current.mounted = !0, c.current.changedBeforeMount && (c.current.changedBeforeMount = !1, a())) : (c.current = {
                                reaction: new r.le(b(t), (function() {
                                    a()
                                })),
                                mounted: !0,
                                changedBeforeMount: !1,
                                cleanAt: 1 / 0
                            }, a()),
                            function() {
                                c.current.reaction.dispose(), c.current = null
                            }
                    }), []), h.track((function() {
                        try {
                            f = e()
                        } catch (t) {
                            d = t
                        }
                    })), d) throw d;
                return f
            }
            var E = function() {
                return (E = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function x(e, t) {
                if (y()) return e;
                var n, r, i, a = E({
                        forwardRef: !1
                    }, t),
                    u = e.displayName || e.name,
                    c = function(t, n) {
                        return O((function() {
                            return e(t, n)
                        }), u)
                    };
                return "" !== u && (c.displayName = u), e.contextTypes && (c.contextTypes = e.contextTypes), n = a.forwardRef ? (0, o.memo)((0, o.forwardRef)(c)) : (0, o.memo)(c), r = e, i = n, Object.keys(r).forEach((function(e) {
                    S[e] || Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
                })), n
            }
            var S = {
                $$typeof: !0,
                render: !0,
                compare: !0,
                type: !0,
                displayName: !0
            };
            var C;
            (C = i.unstable_batchedUpdates) || (C = a), (0, r.jQ)({
                reactionScheduler: C
            })
        },
        8418: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (c) {
                        o = !0, i = c
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            t.default = void 0;
            var o, i = (o = n(7294)) && o.__esModule ? o : {
                    default: o
                },
                a = n(6273),
                u = n(387),
                c = n(7190);
            var s = {};

            function l(e, t, n, r) {
                if (e && a.isLocalURL(t)) {
                    e.prefetch(t, n, r).catch((function(e) {
                        0
                    }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    s[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var f = function(e) {
                var t, n = !1 !== e.prefetch,
                    o = u.useRouter(),
                    f = i.default.useMemo((function() {
                        var t = r(a.resolveHref(o, e.href, !0), 2),
                            n = t[0],
                            i = t[1];
                        return {
                            href: n,
                            as: e.as ? a.resolveHref(o, e.as) : i || n
                        }
                    }), [o, e.href, e.as]),
                    d = f.href,
                    p = f.as,
                    v = e.children,
                    h = e.replace,
                    y = e.shallow,
                    m = e.scroll,
                    b = e.locale;
                "string" === typeof v && (v = i.default.createElement("a", null, v));
                var g = (t = i.default.Children.only(v)) && "object" === typeof t && t.ref,
                    w = r(c.useIntersection({
                        rootMargin: "200px"
                    }), 2),
                    O = w[0],
                    E = w[1],
                    x = i.default.useCallback((function(e) {
                        O(e), g && ("function" === typeof g ? g(e) : "object" === typeof g && (g.current = e))
                    }), [g, O]);
                i.default.useEffect((function() {
                    var e = E && n && a.isLocalURL(d),
                        t = "undefined" !== typeof b ? b : o && o.locale,
                        r = s[d + "%" + p + (t ? "%" + t : "")];
                    e && !r && l(o, d, p, {
                        locale: t
                    })
                }), [p, d, E, b, n, o]);
                var S = {
                    ref: x,
                    onClick: function(e) {
                        t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function(e, t, n, r, o, i, u, c) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && a.isLocalURL(n)) && (e.preventDefault(), null == u && r.indexOf("#") >= 0 && (u = !1), t[o ? "replace" : "push"](n, r, {
                                shallow: i,
                                locale: c,
                                scroll: u
                            }))
                        }(e, o, d, p, h, y, m, b)
                    },
                    onMouseEnter: function(e) {
                        t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), a.isLocalURL(d) && l(o, d, p, {
                            priority: !0
                        })
                    }
                };
                if (e.passHref || "a" === t.type && !("href" in t.props)) {
                    var C = "undefined" !== typeof b ? b : o && o.locale,
                        P = o && o.isLocaleDomain && a.getDomainLocale(p, C, o && o.locales, o && o.domainLocales);
                    S.href = P || a.addBasePath(a.addLocale(p, C, o && o.defaultLocale))
                }
                return i.default.cloneElement(t, S)
            };
            t.default = f
        },
        7190: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (c) {
                        o = !0, i = c
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootMargin,
                    n = e.disabled || !a,
                    c = o.useRef(),
                    s = r(o.useState(!1), 2),
                    l = s[0],
                    f = s[1],
                    d = o.useCallback((function(e) {
                        c.current && (c.current(), c.current = void 0), n || l || e && e.tagName && (c.current = function(e, t, n) {
                            var r = function(e) {
                                    var t = e.rootMargin || "",
                                        n = u.get(t);
                                    if (n) return n;
                                    var r = new Map,
                                        o = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = r.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return u.set(t, n = {
                                        id: t,
                                        observer: o,
                                        elements: r
                                    }), n
                                }(n),
                                o = r.id,
                                i = r.observer,
                                a = r.elements;
                            return a.set(e, t), i.observe(e),
                                function() {
                                    a.delete(e), i.unobserve(e), 0 === a.size && (i.disconnect(), u.delete(o))
                                }
                        }(e, (function(e) {
                            return e && f(e)
                        }), {
                            rootMargin: t
                        }))
                    }), [n, t, l]);
                return o.useEffect((function() {
                    if (!a && !l) {
                        var e = i.requestIdleCallback((function() {
                            return f(!0)
                        }));
                        return function() {
                            return i.cancelIdleCallback(e)
                        }
                    }
                }), [l]), [d, l]
            };
            var o = n(7294),
                i = n(9311),
                a = "undefined" !== typeof IntersectionObserver;
            var u = new Map
        },
        9008: function(e, t, n) {
            e.exports = n(5443)
        },
        1664: function(e, t, n) {
            e.exports = n(8418)
        },
        725: function(e, t, n) {
            var r;
            "undefined" != typeof self && self, e.exports = (r = n(7294), function(e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var o in e) n.d(r, o, function(t) {
                            return e[t]
                        }.bind(null, o));
                    return r
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 2)
            }([function(e, t) {
                e.exports = r
            }, function(e, t, n) {
                "use strict";
                var r = {
                    linear: function(e, t, n, r) {
                        return (n - t) * e / r + t
                    },
                    easeInQuad: function(e, t, n, r) {
                        return (n - t) * (e /= r) * e + t
                    },
                    easeOutQuad: function(e, t, n, r) {
                        return -(n - t) * (e /= r) * (e - 2) + t
                    },
                    easeInOutQuad: function(e, t, n, r) {
                        var o = n - t;
                        return (e /= r / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t
                    },
                    easeInCubic: function(e, t, n, r) {
                        return (n - t) * (e /= r) * e * e + t
                    },
                    easeOutCubic: function(e, t, n, r) {
                        return (n - t) * ((e = e / r - 1) * e * e + 1) + t
                    },
                    easeInOutCubic: function(e, t, n, r) {
                        var o = n - t;
                        return (e /= r / 2) < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t
                    },
                    easeInQuart: function(e, t, n, r) {
                        return (n - t) * (e /= r) * e * e * e + t
                    },
                    easeOutQuart: function(e, t, n, r) {
                        return -(n - t) * ((e = e / r - 1) * e * e * e - 1) + t
                    },
                    easeInOutQuart: function(e, t, n, r) {
                        var o = n - t;
                        return (e /= r / 2) < 1 ? o / 2 * e * e * e * e + t : -o / 2 * ((e -= 2) * e * e * e - 2) + t
                    },
                    easeInQuint: function(e, t, n, r) {
                        return (n - t) * (e /= r) * e * e * e * e + t
                    },
                    easeOutQuint: function(e, t, n, r) {
                        return (n - t) * ((e = e / r - 1) * e * e * e * e + 1) + t
                    },
                    easeInOutQuint: function(e, t, n, r) {
                        var o = n - t;
                        return (e /= r / 2) < 1 ? o / 2 * e * e * e * e * e + t : o / 2 * ((e -= 2) * e * e * e * e + 2) + t
                    },
                    easeInSine: function(e, t, n, r) {
                        var o = n - t;
                        return -o * Math.cos(e / r * (Math.PI / 2)) + o + t
                    },
                    easeOutSine: function(e, t, n, r) {
                        return (n - t) * Math.sin(e / r * (Math.PI / 2)) + t
                    },
                    easeInOutSine: function(e, t, n, r) {
                        return -(n - t) / 2 * (Math.cos(Math.PI * e / r) - 1) + t
                    },
                    easeInExpo: function(e, t, n, r) {
                        return 0 == e ? t : (n - t) * Math.pow(2, 10 * (e / r - 1)) + t
                    },
                    easeOutExpo: function(e, t, n, r) {
                        var o = n - t;
                        return e == r ? t + o : o * (1 - Math.pow(2, -10 * e / r)) + t
                    },
                    easeInOutExpo: function(e, t, n, r) {
                        var o = n - t;
                        return 0 === e ? t : e === r ? t + o : (e /= r / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : o / 2 * (2 - Math.pow(2, -10 * --e)) + t
                    },
                    easeInCirc: function(e, t, n, r) {
                        return -(n - t) * (Math.sqrt(1 - (e /= r) * e) - 1) + t
                    },
                    easeOutCirc: function(e, t, n, r) {
                        return (n - t) * Math.sqrt(1 - (e = e / r - 1) * e) + t
                    },
                    easeInOutCirc: function(e, t, n, r) {
                        var o = n - t;
                        return (e /= r / 2) < 1 ? -o / 2 * (Math.sqrt(1 - e * e) - 1) + t : o / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                    },
                    easeInElastic: function(e, t, n, r) {
                        var o, i, a, u = n - t;
                        return a = 1.70158, 0 === e ? t : 1 == (e /= r) ? t + u : ((i = 0) || (i = .3 * r), (o = u) < Math.abs(u) ? (o = u, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(u / o), -o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - a) * (2 * Math.PI) / i) + t)
                    },
                    easeOutElastic: function(e, t, n, r) {
                        var o, i, a, u = n - t;
                        return a = 1.70158, 0 === e ? t : 1 == (e /= r) ? t + u : ((i = 0) || (i = .3 * r), (o = u) < Math.abs(u) ? (o = u, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(u / o), o * Math.pow(2, -10 * e) * Math.sin((e * r - a) * (2 * Math.PI) / i) + u + t)
                    },
                    easeInOutElastic: function(e, t, n, r) {
                        var o, i, a, u = n - t;
                        return a = 1.70158, 0 === e ? t : 2 == (e /= r / 2) ? t + u : ((i = 0) || (i = r * (.3 * 1.5)), (o = u) < Math.abs(u) ? (o = u, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(u / o), e < 1 ? o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - a) * (2 * Math.PI) / i) * -.5 + t : o * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - a) * (2 * Math.PI) / i) * .5 + u + t)
                    },
                    easeInBack: function(e, t, n, r, o) {
                        return void 0 === o && (o = 1.70158), (n - t) * (e /= r) * e * ((o + 1) * e - o) + t
                    },
                    easeOutBack: function(e, t, n, r, o) {
                        return void 0 === o && (o = 1.70158), (n - t) * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + t
                    },
                    easeInOutBack: function(e, t, n, r, o) {
                        var i = n - t;
                        return void 0 === o && (o = 1.70158), (e /= r / 2) < 1 ? i / 2 * (e * e * ((1 + (o *= 1.525)) * e - o)) + t : i / 2 * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + t
                    },
                    easeInBounce: function(e, t, n, o) {
                        var i = n - t;
                        return i - r.easeOutBounce(o - e, 0, i, o) + t
                    },
                    easeOutBounce: function(e, t, n, r) {
                        var o = n - t;
                        return (e /= r) < 1 / 2.75 ? o * (7.5625 * e * e) + t : e < 2 / 2.75 ? o * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? o * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : o * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
                    },
                    easeInOutBounce: function(e, t, n, o) {
                        var i = n - t;
                        return e < o / 2 ? .5 * r.easeInBounce(2 * e, 0, i, o) + t : .5 * r.easeOutBounce(2 * e - o, 0, i, o) + .5 * i + t
                    }
                };
                e.exports = r
            }, function(e, t, n) {
                e.exports = n(3)
            }, function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "ReactConfetti", (function() {
                    return H
                }));
                var r, o, i = n(0),
                    a = n.n(i),
                    u = n(1),
                    c = n.n(u);

                function s(e, t) {
                    return e + Math.random() * (t - e)
                }

                function l(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function f(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }! function(e) {
                    e[e.Circle = 0] = "Circle", e[e.Square = 1] = "Square", e[e.Strip = 2] = "Strip"
                }(r || (r = {})),
                function(e) {
                    e[e.Positive = 1] = "Positive", e[e.Negative = -1] = "Negative"
                }(o || (o = {}));
                var d = function() {
                    function e(t, n, r, i) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), f(this, "context", void 0), f(this, "radius", void 0), f(this, "x", void 0), f(this, "y", void 0), f(this, "w", void 0), f(this, "h", void 0), f(this, "vx", void 0), f(this, "vy", void 0), f(this, "shape", void 0), f(this, "angle", void 0), f(this, "angularSpin", void 0), f(this, "color", void 0), f(this, "rotateY", void 0), f(this, "rotationDirection", void 0), f(this, "getOptions", void 0), this.getOptions = n;
                        var a, u, c = this.getOptions(),
                            l = c.colors,
                            d = c.initialVelocityX,
                            p = c.initialVelocityY;
                        this.context = t, this.x = r, this.y = i, this.w = s(5, 20), this.h = s(5, 20), this.radius = s(5, 10), this.vx = "number" == typeof d ? s(-d, d) : s(d.min, d.max), this.vy = "number" == typeof p ? s(-p, 0) : s(p.min, p.max), this.shape = (a = 0, u = 2, Math.floor(a + Math.random() * (u - a + 1))), this.angle = s(0, 360) * Math.PI / 180, this.angularSpin = s(-.2, .2), this.color = l[Math.floor(Math.random() * l.length)], this.rotateY = s(0, 1), this.rotationDirection = s(0, 1) ? o.Positive : o.Negative
                    }
                    var t, n, i;
                    return t = e, (n = [{
                        key: "update",
                        value: function() {
                            var e = this.getOptions(),
                                t = e.gravity,
                                n = e.wind,
                                i = e.friction,
                                a = e.opacity,
                                u = e.drawShape;
                            this.x += this.vx, this.y += this.vy, this.vy += t, this.vx += n, this.vx *= i, this.vy *= i, this.rotateY >= 1 && this.rotationDirection === o.Positive ? this.rotationDirection = o.Negative : this.rotateY <= -1 && this.rotationDirection === o.Negative && (this.rotationDirection = o.Positive);
                            var c = .1 * this.rotationDirection;
                            if (this.rotateY += c, this.angle += this.angularSpin, this.context.save(), this.context.translate(this.x, this.y), this.context.rotate(this.angle), this.context.scale(1, this.rotateY), this.context.rotate(this.angle), this.context.beginPath(), this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.globalAlpha = a, this.context.lineCap = "round", this.context.lineWidth = 2, u && "function" == typeof u) u.call(this, this.context);
                            else switch (this.shape) {
                                case r.Circle:
                                    this.context.beginPath(), this.context.arc(0, 0, this.radius, 0, 2 * Math.PI), this.context.fill();
                                    break;
                                case r.Square:
                                    this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                                    break;
                                case r.Strip:
                                    this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h)
                            }
                            this.context.closePath(), this.context.restore()
                        }
                    }]) && l(t.prototype, n), i && l(t, i), e
                }();

                function p(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var v = function e(t, n) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), p(this, "canvas", void 0), p(this, "context", void 0), p(this, "getOptions", void 0), p(this, "x", 0), p(this, "y", 0), p(this, "w", 0), p(this, "h", 0), p(this, "lastNumberOfPieces", 0), p(this, "tweenInitTime", Date.now()), p(this, "particles", []), p(this, "particlesGenerated", 0), p(this, "removeParticleAt", (function(e) {
                        r.particles.splice(e, 1)
                    })), p(this, "getParticle", (function() {
                        var e = s(r.x, r.w + r.x),
                            t = s(r.y, r.h + r.y);
                        return new d(r.context, r.getOptions, e, t)
                    })), p(this, "animate", (function() {
                        var e = r.canvas,
                            t = r.context,
                            n = r.particlesGenerated,
                            o = r.lastNumberOfPieces,
                            i = r.getOptions(),
                            a = i.run,
                            u = i.recycle,
                            c = i.numberOfPieces,
                            s = i.debug,
                            l = i.tweenFunction,
                            f = i.tweenDuration;
                        if (!a) return !1;
                        var d = r.particles.length,
                            p = u ? d : n,
                            v = Date.now();
                        if (p < c) {
                            o !== c && (r.tweenInitTime = v, r.lastNumberOfPieces = c);
                            for (var h = r.tweenInitTime, y = l(v - h > f ? f : Math.max(0, v - h), p, c, f), m = Math.round(y - p), b = 0; b < m; b++) r.particles.push(r.getParticle());
                            r.particlesGenerated += m
                        }
                        return s && (t.font = "12px sans-serif", t.fillStyle = "#333", t.textAlign = "right", t.fillText("Particles: ".concat(d), e.width - 10, e.height - 20)), r.particles.forEach((function(t, n) {
                            t.update(), (t.y > e.height || t.y < -100 || t.x > e.width + 100 || t.x < -100) && (u && p <= c ? r.particles[n] = r.getParticle() : r.removeParticleAt(n))
                        })), d > 0 || p < c
                    })), this.canvas = t;
                    var o = this.canvas.getContext("2d");
                    if (!o) throw new Error("Could not get canvas context");
                    this.context = o, this.getOptions = n
                };

                function h(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function y(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? h(Object(n), !0).forEach((function(t) {
                            b(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function m(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function b(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var g = {
                        width: "undefined" != typeof window ? window.innerWidth : 300,
                        height: "undefined" != typeof window ? window.innerHeight : 200,
                        numberOfPieces: 200,
                        friction: .99,
                        wind: 0,
                        gravity: .1,
                        initialVelocityX: 4,
                        initialVelocityY: 10,
                        colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548"],
                        opacity: 1,
                        debug: !1,
                        tweenFunction: c.a.easeInOutQuad,
                        tweenDuration: 5e3,
                        recycle: !0,
                        run: !0
                    },
                    w = function() {
                        function e(t, n) {
                            var r = this;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), b(this, "canvas", void 0), b(this, "context", void 0), b(this, "_options", void 0), b(this, "generator", void 0), b(this, "rafId", void 0), b(this, "setOptionsWithDefaults", (function(e) {
                                var t = {
                                    confettiSource: {
                                        x: 0,
                                        y: 0,
                                        w: r.canvas.width,
                                        h: 0
                                    }
                                };
                                r._options = y(y(y({}, t), g), e), Object.assign(r, e.confettiSource)
                            })), b(this, "update", (function() {
                                var e = r.options,
                                    t = e.run,
                                    n = e.onConfettiComplete,
                                    o = r.canvas,
                                    i = r.context;
                                t && (i.fillStyle = "white", i.clearRect(0, 0, o.width, o.height)), r.generator.animate() ? r.rafId = requestAnimationFrame(r.update) : (n && "function" == typeof n && r.generator.particlesGenerated > 0 && n.call(r, r), r._options.run = !1)
                            })), b(this, "reset", (function() {
                                r.generator && r.generator.particlesGenerated > 0 && (r.generator.particlesGenerated = 0, r.generator.particles = [], r.generator.lastNumberOfPieces = 0)
                            })), b(this, "stop", (function() {
                                r.options = {
                                    run: !1
                                }, r.rafId && (cancelAnimationFrame(r.rafId), r.rafId = void 0)
                            })), this.canvas = t;
                            var o = this.canvas.getContext("2d");
                            if (!o) throw new Error("Could not get canvas context");
                            this.context = o, this.generator = new v(this.canvas, (function() {
                                return r.options
                            })), this.options = n, this.update()
                        }
                        var t, n, r;
                        return t = e, (n = [{
                            key: "options",
                            get: function() {
                                return this._options
                            },
                            set: function(e) {
                                var t = this._options && this._options.run,
                                    n = this._options && this._options.recycle;
                                this.setOptionsWithDefaults(e), this.generator && (Object.assign(this.generator, this.options.confettiSource), "boolean" == typeof e.recycle && e.recycle && !1 === n && (this.generator.lastNumberOfPieces = this.generator.particles.length)), "boolean" == typeof e.run && e.run && !1 === t && this.update()
                            }
                        }]) && m(t.prototype, n), r && m(t, r), e
                    }();

                function O(e) {
                    return function(e) {
                        if (Array.isArray(e)) return T(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(e) || j(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function E(e) {
                    return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function x() {
                    return (x = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function S(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function C(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? S(Object(n), !0).forEach((function(t) {
                            F(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function P(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [],
                                r = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                o = !0, i = e
                            } finally {
                                try {
                                    r || null == u.return || u.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return n
                        }
                    }(e, t) || j(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function j(e, t) {
                    if (e) {
                        if ("string" == typeof e) return T(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0
                    }
                }

                function T(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function M(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function I(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function R(e, t) {
                    return (R = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function A(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = D(e);
                        if (t) {
                            var o = D(this).constructor;
                            n = Reflect.construct(r, arguments, o)
                        } else n = r.apply(this, arguments);
                        return k(this, n)
                    }
                }

                function k(e, t) {
                    return !t || "object" !== E(t) && "function" != typeof t ? N(e) : t
                }

                function N(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function D(e) {
                    return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function F(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var L = a.a.createRef(),
                    _ = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && R(e, t)
                        }(i, e);
                        var t, n, r, o = A(i);

                        function i(e) {
                            var t;
                            M(this, i);
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++) r[u - 1] = arguments[u];
                            return F(N(t = o.call.apply(o, [this, e].concat(r))), "canvas", a.a.createRef()), F(N(t), "confetti", void 0), t.canvas = e.canvasRef || L, t
                        }
                        return t = i, (n = [{
                            key: "componentDidMount",
                            value: function() {
                                if (this.canvas.current) {
                                    var e = B(this.props)[0];
                                    this.confetti = new w(this.canvas.current, e)
                                }
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function() {
                                var e = B(this.props)[0];
                                this.confetti && (this.confetti.options = e)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.confetti && this.confetti.stop(), this.confetti = void 0
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = P(B(this.props), 2),
                                    t = e[0],
                                    n = e[1],
                                    r = C({
                                        zIndex: 2,
                                        position: "absolute",
                                        pointerEvents: "none",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0
                                    }, n.style);
                                return a.a.createElement("canvas", x({
                                    width: t.width,
                                    height: t.height,
                                    ref: this.canvas
                                }, n, {
                                    style: r
                                }))
                            }
                        }]) && I(t.prototype, n), r && I(t, r), i
                    }(i.Component);

                function B(e) {
                    var t = {},
                        n = {},
                        r = [].concat(O(Object.keys(g)), ["confettiSource", "drawShape", "onConfettiComplete"]),
                        o = ["canvasRef"];
                    for (var i in e) {
                        var a = e[i];
                        r.includes(i) ? t[i] = a : o.includes(i) ? o[i] = a : n[i] = a
                    }
                    return [t, n, {}]
                }
                F(_, "defaultProps", C({}, g)), F(_, "displayName", "ReactConfetti");
                var H = a.a.forwardRef((function(e, t) {
                    return a.a.createElement(_, x({
                        canvasRef: t
                    }, e))
                }));
                t.default = H
            }]).default)
        },
        7005: function(e, t, n) {
            var r = n(7294);

            function o(e) {
                return e && "object" === typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var i = o(r),
                a = function() {
                    return (a = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };
            ! function(e) {
                if (!e || "undefined" === typeof window) return;
                const t = document.createElement("style");
                t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t)
            }('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');
            t.Z = function(e) {
                var t, n, o, u, c = e.style,
                    s = void 0 === c ? {} : c,
                    l = e.className,
                    f = void 0 === l ? "" : l,
                    d = e.play,
                    p = void 0 === d || d,
                    v = e.pauseOnHover,
                    h = void 0 !== v && v,
                    y = e.pauseOnClick,
                    m = void 0 !== y && y,
                    b = e.direction,
                    g = void 0 === b ? "left" : b,
                    w = e.speed,
                    O = void 0 === w ? 20 : w,
                    E = e.delay,
                    x = void 0 === E ? 0 : E,
                    S = e.loop,
                    C = void 0 === S ? 0 : S,
                    P = e.gradient,
                    j = void 0 === P || P,
                    T = e.gradientColor,
                    M = void 0 === T ? [255, 255, 255] : T,
                    I = e.gradientWidth,
                    R = void 0 === I ? 200 : I,
                    A = e.onFinish,
                    k = e.onCycleComplete,
                    N = e.children,
                    D = r.useState(0),
                    F = D[0],
                    L = D[1],
                    _ = r.useState(0),
                    B = _[0],
                    H = _[1],
                    U = r.useState(0),
                    q = U[0],
                    z = U[1],
                    Y = r.useState(!1),
                    W = Y[0],
                    G = Y[1],
                    Q = r.useRef(null),
                    V = r.useRef(null),
                    K = function() {
                        V.current && Q.current && (L(Q.current.getBoundingClientRect().width), H(V.current.getBoundingClientRect().width)), z(B < F ? F / O : B / O)
                    };
                r.useEffect((function() {
                    return K(), window.addEventListener("resize", K),
                        function() {
                            window.removeEventListener("resize", K)
                        }
                })), r.useEffect((function() {
                    G(!0)
                }), []);
                var X = "rgba(" + M[0] + ", " + M[1] + ", " + M[2];
                return i.default.createElement(r.Fragment, null, W ? i.default.createElement("div", {
                    ref: Q,
                    style: a(a({}, s), (t = {}, t["--pause-on-hover"] = h ? "paused" : "running", t["--pause-on-click"] = m ? "paused" : "running", t)),
                    className: f + " marquee-container"
                }, j && i.default.createElement("div", {
                    style: (n = {}, n["--gradient-color"] = X + ", 1), " + X + ", 0)", n["--gradient-width"] = "number" === typeof R ? R + "px" : R, n),
                    className: "overlay"
                }), i.default.createElement("div", {
                    ref: V,
                    style: (o = {}, o["--play"] = p ? "running" : "paused", o["--direction"] = "left" === g ? "normal" : "reverse", o["--duration"] = q + "s", o["--delay"] = x + "s", o["--iteration-count"] = C ? "" + C : "infinite", o),
                    className: "marquee",
                    onAnimationIteration: k,
                    onAnimationEnd: A
                }, N), i.default.createElement("div", {
                    style: (u = {}, u["--play"] = p ? "running" : "paused", u["--direction"] = "left" === g ? "normal" : "reverse", u["--duration"] = q + "s", u["--delay"] = x + "s", u["--iteration-count"] = C ? "" + C : "infinite", u),
                    className: "marquee"
                }, N)) : null)
            }
        }
    }
]);