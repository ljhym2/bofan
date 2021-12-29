var util = {
    extend: function (t, e) {
        if ("object" != typeof e) return t;
        for (var n in e) t[n] = e[n];
        return t
    },
    notDefined: function (t) {
        return "undefined" == typeof t
    },
    isDefined: function (t) {
        return !hc.notDefined(t)
    },
    isEmpty: function (t) {
        return "object" == typeof t && "length" in t ? t.length < 1 : !t
    },
    log: function () {
        for (var t = [], e = 0; e < arguments.length; e++) t.push("object" == typeof arguments[e] ? JSON.stringify(arguments[e]) : arguments[e]);
        console.log(t.join("	"))
    },
    getQueryString: function (t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
            n = window.location.search.substr(1).match(e);
        return null != n ? decodeURIComponent(n[2]) : null
    },
    _extend: function (t) {
        var e = this;
        return e.extend(e, t), e
    }
};
util._extend({
    arrayBreak: "__break",
    arrayEach: function (t, e) {
        for (var n, r = 0; r < t.length && (n = e(t[r], r), !n || n != this.arrayBreak); r++);
    },
    arrayGrep: function (t, e) {
        for (var n = [], r = 0; r < t.length; r++) e(t[r], r) && n.push(t[r]);
        return n
    },
    arrayMap: function (t, e) {
        var n = [];
        return this.arrayEach(t, function (t) {
            n.push(e(t))
        }), n
    }
}), util._extend({
    isObject: function (t) {
        return "object" == typeof t
    },
    objectMerge: function () {
        for (var t = arguments, e = t.length, n = {}, r = 0; e > r; r++) hc.extend(n, t[r]);
        return n
    },
    objectHas: function (t, e) {
        return e in t
    },
    objectGet: function (t, e, n) {
        return hc.isObject(t) && hc.objectHas(t, e) ? t[e] : n
    }
}), util._extend({
    readFromStorage: function (t) {
        var e = window.localStorage,
            n = window.Cookie;
        return null != e.getItem(t) ? e.getItem(t) : n && null != n.read(t) ? n.read(t) : void 0
    },
    writeToStorage: function (t, e) {
        var n = window.localStorage,
            r = window.Cookie;
        n ? n.setItem(t, e) : r && r.write(t, e)
    },

    readObjectFromStroage: function (t, e) {
        var n = this.readFromStorage(t);
        return n ? JSON.parse(n) : e
    },
    writeObjectToStorage: function (t, e) {
        this.writeToStorage(t, JSON.stringify(e))
    },
    writeHistory: function (t, e, n) {
        var r = this.readObjectFromStroage(t, []),
            i = !0;
        if ("id" in e)
            for (var o = 0, a = r.length; a > o; o++)
                if (e.id == r[o].id) {
                    r.splice(o, 1), i = !1;
                    break
                } return r.unshift(e), n || (n = 10), r.length > n && (r = r.splice(0, n)), this.writeObjectToStorage(t, r), i
    }
}), util._extend({
    _ticks: [],
    stringifyTicks: function () {
        return JSON.stringify(this._ticks, null, 4)
    },
    resetTicks: function () {
        this._ticks = [], this.startTick()
    },
    startTick: function () {
        this.lastTime = this.time()
    },
    stopTick: function (t) {
        var e = this.time();
        if (!this.lastTime) return this.lastTime = e, 0;
        var n = e - this.lastTime;
        if (t) {
            var r = {};
            r[t] = n, this._ticks.push(r)
        } else this._ticks.push(n);
        return this.lastTime = e, n
    },
    time: function () {
        return (new Date).getTime()
    }
}), util._extend({
    sprintf: function () {
        var t, e, n = arguments,
            r = n[0] || "";
        for (t = 1, e = n.length; e > t; t++) r = r.replace(/%s/, n[t]);
        return r
    },
    render: function (t, e) {
        return t.replace(/\{\w+\}/g, function (t) {
            // console.log(t)
            // console.log(e)
            // Y.config.paperPaddingTop += 500
            // console.log(t.substr(1, t.length - 2))
            // console.log(t = t.substr(1, t.length - 2), t in e && t in e ? e[t] : "")
            return t = t.substr(1, t.length - 2), t in e && t in e ? e[t] : ""
        })
    },
    renderDom: function (t, e, n, r) {
        var i = "";
        e = e ? e : {};
        for (var o in e) i += this.render(' {key}="{value}"', {
            key: o,
            value: e[o]
        });
        return this.render("\n<{name}{attrs}{selected}>{content}</{name}>", {
            name: t,
            content: n ? n : "",
            attrs: i,
            selected: r ? " selected" : ""
        })
    },
    renderOption: function (t, e, n) {
        return this.renderDom("option", {
            value: e
        }, t, n)
    }
}), util._extend({
    loadMore: function (t) {
        $(window).scroll(function () {
            if (!self.loading) {
                var e = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
                $(document).height() <= e && t()
            }
        })
    }
}), util._extend({
    validateDateTime: function (t) {
        var e = /^(\d+)-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/,
            n = t.match(e);
        if (null == n) return !1;
        n[2] = n[2] - 1;
        var r = new Date(n[1], n[2], n[3], n[4], n[5], n[6]);
        return r.getFullYear() != n[1] ? !1 : r.getMonth() != n[2] ? !1 : r.getDate() != n[3] ? !1 : r.getHours() != n[4] ? !1 : r.getMinutes() != n[5] ? !1 : r.getSeconds() != n[6] ? !1 : !0
    }
});