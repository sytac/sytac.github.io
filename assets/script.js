! function(e, n) {
    "use strict";

    function secondsFromDeadline() {
        var now = new Date;
        return Math.floor((deadline.getTime() - now.getTime()) / 1e3)
    }

    function o(task) {
        for (var n = 0; n < tasks.length; n++) {
            tasks[n].attributes.href.value = task ? v[n] : "javascript: void(0)"
        }
    }

    function r(node) {
        var position = node.getBoundingClientRect().top + window.pageYOffset - node.documentElement.clientTop - 106;
        scrollTo(position, 500)
    }

    function scrollTo(position, t) {
        function moveTo() {
            i += 1 / 60;
            var n = i / s,
                t = a(n);
            1 > n ? (p(moveTo), window.scrollTo(0, r + (position - r) * t)) : window.scrollTo(0, position)
        }
        var r = window.scrollY,
            i = 0,
            a = function(e) {
                return (e /= .5) < 1 ? .5 * n.pow(e, 5) : .5 * (n.pow(e - 2, 5) + 2)
            },
            s = n.max(.1, n.min(n.abs(r - e) / t, .8));
        moveTo();
    }

    function a(node) {
        node.preventDefault();
        var t = this.attributes.href.value.slice(1);
        r(e.getElementById(t))
    }
    var deadline = new Date("2014-12-05T20:00:00+01:00"),
        u = 'Prepare your hackz! <span class="timer">%time%</span>',
        l = 'Go to tasks and start! <i class="icon-arrow"></i>',
        c = e.getElementById("counter"),
        slideTargets = e.getElementsByClassName("smoothslide"),
        tasks = e.getElementsByClassName("task-link"),
        f = {
            days: e.getElementById("counter-days"),
            hours: e.getElementById("counter-hours"),
            minutes: e.getElementById("counter-minutes"),
            seconds: e.getElementById("counter-seconds")
        },
        w = function(e) {
            return 10 > +e ? "0" + +e : "" + e
        },
        v = [];
    for (T = 0; T < tasks.length; T++) v[T] = tasks[T].attributes.href.value;
    var y = function(e) {
            var t = n.floor(e) % 60,
                o = n.floor(e / 60) % 60,
                r = n.floor(e / 3600) % 24,
                i = n.floor(e / 86400),
                a = [w(r), w(o), w(t)].join(":");
            return f.days.innerHTML = w(i), f.hours.innerHTML = w(r), f.minutes.innerHTML = w(o), f.seconds.innerHTML = w(t), a = i + " day" + (1 === i ? " " : "s ") + a, u.replace("%time%", a)
        },
        l = 'Go to results <i class="icon-arrow"></i>',
        g = function() {
            var n = secondsFromDeadline();
            0 > n ? (c.innerHTML = l, e.body.className = "ready", o(!0), clearInterval(h)) : (c.innerHTML = y(n), e.body.className = "not-ready")
        };
    o(!1);
    var h = setInterval(g, 1e3);
    g();
    var T, p = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
            window.setTimeout(e, 1e3 / 60)
        }
    }();
    for (var i = 0; i < slideTargets.length; i++) slideTargets[i].addEventListener("click", a, !1)
}(document, Math);
