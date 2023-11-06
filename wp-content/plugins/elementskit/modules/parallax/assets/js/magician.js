! function(t) {
    "use strict";
    t.fn.magician = function(n) {
        var a, u, r, i, o, s, c, f, h, M, I, p = t.extend({
                container: t(window),
                uniqueKey: "",
                type: "scroll",
                offsetTop: 0,
                duration: 1e3,
                offsetBottom: 0,
                animation: {}
            }, n),
            d = function() {
                r = a.height() - (p.offsetTop + p.offsetBottom), i = a.scrollTop() + p.offsetTop, o = i + r, s = u.outerHeight(), c = u.offset().top, f = c + s, 1 == (c <= o && f >= i) ? I = i - c + r : (c <= o && (I = r + s), f >= i && (I = 0)), I = Math.floor(I / (r + s) * 1e3), t({
                    n: M
                }).animate({
                    n: I
                }, {
                    duration: p.duration,
                    easing: "easeOutQuad",
                    step: function(e, t) {
                        h.seek(e)
                    }
                }), M = I
            };
        return this.each((function() {
            switch (u = t(this), a = "object" == typeof p.container ? p.container : u.parents(p.container).eq(0), p.type) {
                case "scroll":
                    var n = t.extend(p.animation, {
                        targets: u.get(),
                        duration: 1e3,
                        elasticity: 0,
                        easing: "linear",
                        autoplay: !1
                    });
                    h = anime(n), d(), a.on("scroll.magicianscrolleffect" + p.uniqueKey, d);
                    break;
                case "mousemove":
                    var r = e.pageX - u.offset().left,
                        i = e.pageY - u.offset().top;
                    TweenMax.to(u.find(".elementor-repeater-item-" + obj._id), 1, {
                        x: (r - u.width() / 2) / u.width() * obj.parallax_speed,
                        y: (i - u.height() / 2) / u.height() * obj.parallax_speed,
                        ease: Power2.ease
                    })
            }
        })), this
    }, jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, a, u) {
            return jQuery.easing[jQuery.easing.def](e, t, n, a, u)
        },
        easeInQuad: function(e, t, n, a, u) {
            return a * (t /= u) * t + n
        },
        easeOutQuad: function(e, t, n, a, u) {
            return -a * (t /= u) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, a, u) {
            return (t /= u / 2) < 1 ? a / 2 * t * t + n : -a / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, a, u) {
            return a * (t /= u) * t * t + n
        },
        easeOutCubic: function(e, t, n, a, u) {
            return a * ((t = t / u - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, a, u) {
            return (t /= u / 2) < 1 ? a / 2 * t * t * t + n : a / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, a, u) {
            return a * (t /= u) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, a, u) {
            return -a * ((t = t / u - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, a, u) {
            return (t /= u / 2) < 1 ? a / 2 * t * t * t * t + n : -a / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, a, u) {
            return a * (t /= u) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, a, u) {
            return a * ((t = t / u - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, a, u) {
            return (t /= u / 2) < 1 ? a / 2 * t * t * t * t * t + n : a / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, a, u) {
            return -a * Math.cos(t / u * (Math.PI / 2)) + a + n
        },
        easeOutSine: function(e, t, n, a, u) {
            return a * Math.sin(t / u * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, a, u) {
            return -a / 2 * (Math.cos(Math.PI * t / u) - 1) + n
        },
        easeInExpo: function(e, t, n, a, u) {
            return 0 == t ? n : a * Math.pow(2, 10 * (t / u - 1)) + n
        },
        easeOutExpo: function(e, t, n, a, u) {
            return t == u ? n + a : a * (1 - Math.pow(2, -10 * t / u)) + n
        },
        easeInOutExpo: function(e, t, n, a, u) {
            return 0 == t ? n : t == u ? n + a : (t /= u / 2) < 1 ? a / 2 * Math.pow(2, 10 * (t - 1)) + n : a / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function(e, t, n, a, u) {
            return -a * (Math.sqrt(1 - (t /= u) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, a, u) {
            return a * Math.sqrt(1 - (t = t / u - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, a, u) {
            return (t /= u / 2) < 1 ? -a / 2 * (Math.sqrt(1 - t * t) - 1) + n : a / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, a, u) {
            var r = 1.70158,
                i = 0,
                o = a;
            if (0 == t) return n;
            if (1 == (t /= u)) return n + a;
            if (i || (i = .3 * u), o < Math.abs(a)) {
                o = a;
                r = i / 4
            } else r = i / (2 * Math.PI) * Math.asin(a / o);
            return -o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - r) * (2 * Math.PI) / i) + n
        },
        easeOutElastic: function(e, t, n, a, u) {
            var r = 1.70158,
                i = 0,
                o = a;
            if (0 == t) return n;
            if (1 == (t /= u)) return n + a;
            if (i || (i = .3 * u), o < Math.abs(a)) {
                o = a;
                r = i / 4
            } else r = i / (2 * Math.PI) * Math.asin(a / o);
            return o * Math.pow(2, -10 * t) * Math.sin((t * u - r) * (2 * Math.PI) / i) + a + n
        },
        easeInOutElastic: function(e, t, n, a, u) {
            var r = 1.70158,
                i = 0,
                o = a;
            if (0 == t) return n;
            if (2 == (t /= u / 2)) return n + a;
            if (i || (i = u * (.3 * 1.5)), o < Math.abs(a)) {
                o = a;
                r = i / 4
            } else r = i / (2 * Math.PI) * Math.asin(a / o);
            return t < 1 ? o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - r) * (2 * Math.PI) / i) * -.5 + n : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - r) * (2 * Math.PI) / i) * .5 + a + n
        },
        easeInBack: function(e, t, n, a, u, r) {
            return r == undefined && (r = 1.70158), a * (t /= u) * t * ((r + 1) * t - r) + n
        },
        easeOutBack: function(e, t, n, a, u, r) {
            return r == undefined && (r = 1.70158), a * ((t = t / u - 1) * t * ((r + 1) * t + r) + 1) + n
        },
        easeInOutBack: function(e, t, n, a, u, r) {
            return r == undefined && (r = 1.70158), (t /= u / 2) < 1 ? a / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : a / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n
        },
        easeInBounce: function(e, t, n, a, u) {
            return a - jQuery.easing.easeOutBounce(e, u - t, 0, a, u) + n
        },
        easeOutBounce: function(e, t, n, a, u) {
            return (t /= u) < 1 / 2.75 ? a * (7.5625 * t * t) + n : t < 2 / 2.75 ? a * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? a * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : a * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, a, u) {
            return t < u / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, a, u) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - u, 0, a, u) + .5 * a + n
        }
    })
}(jQuery);