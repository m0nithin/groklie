! function(e, t) {
    "use strict";
    var a = {
        init: function() {
            t.hooks.addAction("frontend/element_ready/section", a.elementorSection)
        },
        elementorSection: function(e) {
            var a = e,
                i = null;
            Boolean(t.isEditMode());
            (i = new n(a)).init(i)
        }
    };
    e(window).on("elementor/frontend/init", a.init);
    var n = function(a) {
        var n = this,
            i = a.data("id"),
            r = Boolean(t.isEditMode()),
            l = e(window);
        e("body"), l.scrollTop(), l.height(), navigator.userAgent.match(/Version\/[\d\.]+.*Safari/), navigator.platform;
        n.init = function() {
            return e(window).width() <= 1024 || (n.setParallaxMulti(i), n.moveBg(i)), !1
        }, n.setParallaxMulti = function(t) {
            var i, l = {},
                o = [];
            if (l = n.getOptions(t, "ekit_section_parallax_multi_items"), "yes" == (i = n.getOptions(t, "ekit_section_parallax_multi"))) {
                if (r) {
                    if (!l.hasOwnProperty("models") || 0 === Object.keys(l.models).length || "yes" != i) return;
                    l = l.models
                }
                if (a.addClass("elementskit-parallax-multi-container"), e.each(l, (function(e, t) {
                        t.hasOwnProperty("attributes") && (t = t.attributes), o.push(t), n.pushElement(t), n.getSVG()
                    })), o.length < 0) return o;
                a.on("mousemove", (function(t) {
                    e.each(o, (function(e, a) {
                        "mousemove" == a.parallax_style && n.moveItem(a, t)
                    }))
                })), e.each(o, (function(e, t) {
                    "tilt" == t.parallax_style && n.tiltItem(t), "onscroll" == t.parallax_style && n.walkItem(t)
                }))
            }
        }, n.moveBg = function(e) {
            var t, i;
            t = n.getOptions(e, "ekit_section_parallax_bg"), i = n.getOptions(e, "ekit_section_parallax_bg_speed"), a.addClass("elementskit-parallax-multi-container"), "yes" != t || r || a.jarallax({
                speed: i
            })
        }, n.walkItem = function(e) {
            e.parallax_transform !== undefined && e.parallax_transform_value !== undefined && a.find(".elementor-repeater-item-" + e._id).magician({
                type: "scroll",
                offsetTop: parseInt(e.offsettop),
                offsetBottom: parseInt(e.offsetbottom),
                duration: parseInt(e.smoothness),
                animation: {
                    [e.parallax_transform]: e.parallax_transform_value
                }
            })
        }, n.moveItem = function(e, t) {
            var n = t.pageX - a.offset().left,
                i = t.pageY - a.offset().top,
                r = a.find(".elementor-repeater-item-" + e._id);
            TweenMax.to(r, 1, {
                x: (n - a.width() / 2) / a.width() * e.parallax_speed,
                y: (i - a.height() / 2) / a.height() * e.parallax_speed,
                ease: Power2.ease
            })
        }, n.tiltItem = function(e) {
            var t = a.find(".elementor-repeater-item-" + e._id);
            t.find("img");
            t.tilt({
                disableAxis: e.disableaxis,
                scale: e.scale,
                speed: e.parallax_speed,
                maxTilt: e.maxtilt,
                glare: !0,
                maxGlare: .5
            })
        }, n.getOptions = function(t, a) {
            var n = null,
                i = {};
            if (r) {
                if (!window.elementor.hasOwnProperty("elements")) return !1;
                if (!(n = window.elementor.elements).models) return !1;
                if (e.each(n.models, (function(e, a) {
                        t == a.id && (i = a.attributes.settings.attributes)
                    })), !i.hasOwnProperty(a)) return !1
            } else {
                if (void 0 === (i = e(t = ".elementor-element-" + t).data("settings"))) return;
                if (!i.hasOwnProperty(a)) return !1
            }
            return i[a]
        }, n.pushElement = function(e) {
            var t = "ekit-section-parallax-mousemove ekit-section-parallax-layer elementor-repeater-item-" + e._id,
                n = "";
            "shape" == e.item_source && (e.image = {}, e.image.url = window.elementskit_module_parallax_url + "assets/svg/" + e.shape + ".svg", t += " ekit-section-parallax-layer-shape", n = "shape-" + e.shape.replace(".svg", "")), 0 === a.find(".elementor-repeater-item-" + e._id).length && "" != e.image.url && a.prepend(`\n                        <div class="${t} ekit-section-parallax-type-${e.parallax_style}" >\n                            <img class="elementskit-parallax-graphic ${n}" src="${e.image.url}"/>\n                        </div>\n                    `)
        }, n.getSVG = function() {
            a.find(".ekit-section-parallax-layer-shape img").each((function() {
                var t = e(this),
                    a = t.prop("attributes"),
                    n = t.attr("src");
                e.get(n, (function(n) {
                    var i = e(n).find("svg");
                    i = i.removeAttr("xmlns:a"), e.each(a, (function() {
                        i.attr(this.name, this.value)
                    })), t.replaceWith(i)
                }))
            }))
        }
    }
}(jQuery, window.elementorFrontend);