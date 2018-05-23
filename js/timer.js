/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/easytimer@1.1.1/src/easytimer.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var module, Timer = function(n) {
    "use strict";

    function e() {
        return "undefined" != typeof document
    }

    function t() {
        return L
    }

    function o(n, e) {
        return (n % e + e) % e
    }

    function s(n, e, t) {
        var o, s = "";
        for (o = 0; o < e; o += 1) s += String(t);
        return (s + n).slice(-s.length)
    }

    function i() {
        this.secondTenths = 0, this.seconds = 0, this.minutes = 0, this.hours = 0, this.days = 0, this.toString = function(n, e, t) {
            n = n || ["hours", "minutes", "seconds"], e = e || ":", t = t || 2;
            var o, i = [];
            for (o = 0; o < t; o += 1) "0";
            for (o = 0; o < n.length; o += 1) void 0 !== this[n[o]] && i.push(s(this[n[o]], t, "0"));
            return i.join(e)
        }
    }

    function r() {
        function n() {
            return X.countdown
        }

        function s(n, e) {
            J[n] += e, K[n] += e
        }

        function r(n) {
            s(j, n), S("daysUpdated")
        }

        function U(e) {
            s(k, e), J.hours = o(J.hours, l), (n() && J.hours === l - 1 || !n() && 0 === J.hours) && r(e), z === k && (K[E] += n() ? -f : f, K[g] += n() ? -h : h, K[T] += n() ? -m : m), S("hoursUpdated")
        }

        function V(e) {
            s(E, e), J.minutes = o(J.minutes, f), (n() && J.minutes === f - 1 || !n() && 0 === J.minutes) && U(e), z === E && (K[g] += n() ? -d : d, K[T] += n() ? -a : a), S("minutesUpdated")
        }

        function A(e) {
            s(g, e), J.seconds = o(J.seconds, d), (n() && J.seconds === d - 1 || !n() && 0 === J.seconds) && V(e), z === g && (K[T] += n() ? -c : c), S("secondsUpdated")
        }

        function M(e) {
            s(T, e), J.secondTenths = o(J.secondTenths, c), (n() && J.secondTenths === c - 1 || !n() && 0 === J.secondTenths) && A(e), S("secondTenthsUpdated")
        }

        function P() {
            clearInterval(q), q = void 0, Q = !1, W = !1
        }

        function x() {
            return F instanceof Array && (X.countdown && (J.hours < F[w] || J.hours === F[w] && (J.minutes < F[y] || J.minutes === F[y] && (J.seconds < F[p] || J.seconds === F[p] && (J.secondTenths < F[v] || J.secondTenths === F[v])))) || !X.countdown && (J.hours > F[w] || J.hours === F[w] && (J.minutes > F[y] || J.minutes === F[y] && J.seconds >= F[p])))
        }

        function I(n) {
            z = n && "string" == typeof n.precision ? n.precision : g, D = n && "function" == typeof n.callback ? n.callback : function() {}, B = n && !0 === n.countdown ? -1 : 1, H = n && 1 == n.countdown, n && "object" == typeof n.target && function(n) {
                F = O(n)
            }(n.target), n && "object" == typeof n.startValues && function(n) {
                G = O(n), J.secondTenths = G[v], J.seconds = G[p], J.minutes = G[y], J.hours = G[w], J.days = G[b], K.days = J.days, K.hours = K.days * l + J.hours, K.minutes = K.hours * f + J.minutes, K.seconds = K.minutes * d + J.seconds, K.secondTenths = K.seconds * c + J.secondTenths
            }(n.startValues), F = F || !H ? F : [0, 0, 0, 0, 0], X = {
                precision: z,
                callback: D,
                countdown: "object" == typeof n && 1 == n.countdown,
                target: F,
                startValues: G
            }
        }

        function O(n) {
            var e, t, o, s, i, r;
            if ("object" == typeof n)
                if (n instanceof Array) {
                    if (5 != n.length) throw new Error("Array size not valid");
                    r = n
                } else r = [n.secondTenths || 0, n.seconds || 0, n.minutes || 0, n.hours || 0, n.days || 0];
            for (var u = 0; u < n.length; u += 1) n[u] < 0 && (n[u] = 0);
            return e = r[v], t = r[p] + Math.floor(e / c), o = r[y] + Math.floor(t / d), s = r[w] + Math.floor(o / f), i = r[b] + Math.floor(s / l), r[v] = e % c, r[p] = t % d, r[y] = o % f, r[w] = s % l, r[b] = i, r
        }

        function R() {
            P(),
                function() {
                    for (var n in J) J.hasOwnProperty(n) && "number" == typeof J[n] && (J[n] = 0);
                    for (var n in K) K.hasOwnProperty(n) && "number" == typeof K[n] && (K[n] = 0)
                }(), S("stopped")
        }

        function S(n) {
            e() ? N.dispatchEvent(new u(n)) : t() && N.emit(n)
        }
        var q, z, B, D, F, G, H, J = new i,
            K = new i,
            N = e() ? document.createElement("span") : t() ? new L.EventEmitter : void 0,
            Q = !1,
            W = !1,
            X = {};
        void 0 !== this && (this.start = function(n) {
            if (this.isRunning()) throw new Error("Timer already running");
            this.isPaused() || I(n), x() || (function() {
                var n, e = C[z];
                switch (z) {
                    case j:
                        n = r;
                        break;
                    case k:
                        n = U;
                        break;
                    case E:
                        n = V;
                        break;
                    case T:
                        n = M;
                        break;
                    default:
                        n = A
                }
                q = setInterval(function() {
                    n(B), D(J), x() && (S("targetAchieved"), R())
                }, e), Q = !0, W = !1
            }(), S("started"))
        }, this.pause = function() {
            P(), W = !0, S("paused")
        }, this.stop = R, this.isRunning = function() {
            return Q
        }, this.isPaused = function() {
            return W
        }, this.getTimeValues = function() {
            return J
        }, this.getTotalTimeValues = function() {
            return K
        }, this.getConfig = function() {
            return X
        }, this.addEventListener = function(n, o) {
            e() ? N.addEventListener(n, o) : t() && N.on(n, o)
        }, this.removeEventListener = function(n, o) {
            e() ? N.removeEventListener(n, o) : t() && N.removeListener(n, o)
        })
    }
    var u = "undefined" != typeof window ? window.CustomEvent : void 0;
    "undefined" != typeof window && "function" != typeof u && ((u = function(n, e) {
        e = e || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(n, e.bubbles, e.cancelable, e.detail), t
    }).prototype = window.Event.prototype, window.CustomEvent = u);
    var c = 10,
        d = 60,
        a = 600,
        f = 60,
        h = 3600,
        m = 36e3,
        l = 24,
        v = 0,
        p = 1,
        y = 2,
        w = 3,
        b = 4,
        T = "secondTenths",
        g = "seconds",
        E = "minutes",
        k = "hours",
        j = "days",
        C = {
            secondTenths: 100,
            seconds: 1e3,
            minutes: 6e4,
            hours: 36e5,
            days: 864e5
        },
        L = n && n.exports ? require("events") : void 0;
    return n && n.exports ? n.exports = r : "function" == typeof define && define.amd && define([], function() {
        return r
    }), r
}(module);
//# sourceMappingURL=/sm/8d60de019b2239e9099a52a13a7a50c00c2230c631801eea90a1a0b5204d1a18.map