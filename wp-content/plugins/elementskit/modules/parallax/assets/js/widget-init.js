! function(e, t) {
    "use strict";
    var n = function() {
        t.hooks.addAction("frontend/element_ready/global", (function(e) {
            new s({
                $element: e
            })
        }))
    };
    e(window).on("elementor/frontend/init", n);
    var i = "undefined" != typeof window.elementorFrontend.version && function(e, t) {
            if ("string" != typeof e) return !1;
            if ("string" != typeof t) return !1;
            e = e.split("."), t = t.split(".");
            const n = Math.min(e.length, t.length);
            for (let i = 0; i < n; ++i) {
                if (e[i] = parseInt(e[i], 10), t[i] = parseInt(t[i], 10), e[i] > t[i]) return 1;
                if (e[i] < t[i]) return -1
            }
            return e.length == t.length ? 0 : e.length < t.length ? -1 : 1
        }(window.elementorFrontend.version, "2.6.0") < 0 ? elementorFrontend.Module : elementorModules.frontend.handlers.Base,
        s = i.extend({
            isTrue: function(e, t) {
                return 0 != this.getElementSettings(e) && this.getElementSettings(e) == t
            },
            shouldRun: function(e) {
                var n = !1;
                return this.isTrue("ekit_we_effect_on", e) && (n = !0), Boolean(t.isEditMode()) && this.isTrue("ekit_we_on_test_mode", "yes") && (n = !1), n
            },
            active: function() {
                this.shouldRun("tilt") && this.tilt(), this.shouldRun("mousemove") && this.mousemove(), this.shouldRun("onscroll") && this.onscroll()
            },
            deactivate: function(t) {
                (t || !this.getElementSettings("ekit_we_effect_on") || "tilt" != this.getElementSettings("ekit_we_effect_on") || this.isTrue("ekit_we_on_test_mode", "yes")) && this.$element.find(".elementor-widget-container").tilt().tilt.destroy.call(this.$element.find(".elementor-widget-container")), (t || !this.getElementSettings("ekit_we_effect_on") || "mousemove" != this.getElementSettings("ekit_we_effect_on") || this.isTrue("ekit_we_on_test_mode", "yes")) && this.$element.parents(".elementor-section").first().off("mousemove.elementskitwidgethovereffect"), (t || !this.getElementSettings("ekit_we_effect_on") || "onscroll" != this.getElementSettings("ekit_we_effect_on") || this.isTrue("ekit_we_on_test_mode", "yes")) && e(window).off("scroll.magicianscrolleffect" + this.getID())
            },
            onElementChange: function(e) {
                e.includes("ekit_we_") && (e.includes("_on") && this.deactivate(!1), e.includes("we_scroll_") && this.deactivate(!0), this.active())
            },
            onInit: function() {
                i.prototype.onInit.apply(this, arguments), this.active()
            },
            onDestroy: function() {
                i.prototype.onDestroy.apply(this, arguments), this.deactivate(!0)
            },
            tilt: function() {
                this.$element.find(".elementor-widget-container").tilt({
                    disableAxis: this.getElementSettings("ekit_we_tilt_disableaxis"),
                    scale: this.getElementSettings("ekit_we_tilt_scale"),
                    speed: this.getElementSettings("ekit_we_tilt_parallax_speed"),
                    maxTilt: this.getElementSettings("ekit_we_tilt_maxtilt"),
                    glare: !0,
                    maxGlare: .5
                })
            },
            mousemove: function() {
                var e = this.$element.find(".elementor-widget-container"),
                    t = this.$element.parents(".elementor-section").first(),
                    n = this.getElementSettings("ekit_we_mousemove_parallax_speed");
                t.on("mousemove.elementskitwidgethovereffect", (function(i) {
                    var s = i.pageX - t.offset().left,
                        o = i.pageY - t.offset().top;
                    TweenMax.to(e, 1, {
                        x: (s - t.width() / 2) / t.width() * n,
                        y: (o - t.height() / 2) / t.height() * n,
                        ease: Power2.ease
                    })
                }))
            },
            onscroll: function() {
                this.$element.find(".elementor-widget-container").magician({
                    type: "scroll",
                    uniqueKey: this.getID(),
                    offsetTop: parseInt(this.getElementSettings("ekit_we_scroll_offsettop")),
                    offsetBottom: parseInt(this.getElementSettings("ekit_we_scroll_offsetbottom")),
                    duration: parseInt(this.getElementSettings("ekit_we_scroll_smoothness")),
                    animation: {
                        [this.getElementSettings("ekit_we_scroll_animation")]: this.getElementSettings("ekit_we_scroll_animation_value")
                    }
                })
            }
        })
}(jQuery, window.elementorFrontend);