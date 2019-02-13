+function() {
    "use strict";
    function e(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function t(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function n(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }()
      , r = JParticles
      , i = r.utils
      , a = r.Base
      , s = Math.random
      , c = Math.abs
      , u = Math.PI
      , l = 2 * u
      , f = i.pInt
      , h = i.limitRandom
      , p = i.calcSpeed
      , y = i.defineReadOnlyProperty
      , v = function(r) {
        function i(n, o) {
            return e(this, i),
            t(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, n, o))
        }
        return n(i, r),
        o(i, [{
            key: "version",
            get: function() {
                return "2.0.0"
            }
        }]),
        o(i, [{
            key: "init",
            value: function() {
                this.dots = [],
                this.createDots(),
                this.draw()
            }
        }, {
            key: "snowShape",
            value: function() {
                var e = this.set
                  , t = e.maxR
                  , n = e.minR
                  , o = e.maxSpeed
                  , r = e.minSpeed
                  , i = h(t, n);
                return {
                    r: i,
                    x: s() * this.cw,
                    y: -i,
                    vx: p(o, r),
                    vy: c(i * p(o, r)),
                    color: this.color()
                }
            }
        }, {
            key: "createDots",
            value: function() {
                for (var e = f(6 * s()); e--; )
                    this.dots.push(this.snowShape())
            }
        }, {
            key: "draw",
            value: function() {
                var e = this
                  , t = this.cxt
                  , n = this.cw
                  , o = this.ch
                  , r = this.paused
                  , i = this.set.opacity;
                t.clearRect(0, 0, n, o),
                t.globalAlpha = i,
                this.dots.forEach(function(i, a, c) {
                    var u = i.x
                      , f = i.y
                      , h = i.r;
                    t.save(),
                    t.beginPath(),
                    t.arc(u, f, h, 0, l),
                    t.fillStyle = i.color,
                    t.fill(),
                    t.restore(),
                    r || (i.x += i.vx,
                    i.y += i.vy,
                    s() > .99 && s() > .5 && (i.vx *= -1),
                    u < 0 || u - h > n ? c.splice(a, 1, e.snowShape()) : f - h > o && c.splice(a, 1))
                }),
                !r && s() > .9 && this.createDots(),
                this.requestAnimationFrame()
            }
        }]),
        i
    }(a);
    v.defaultConfig = {
        color: "#fff",
        maxR: 6.5,
        minR: .4,
        maxSpeed: .6,
        minSpeed: .1
    },
    y(v, "snow")
}();
