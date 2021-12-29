var songBuilder = { 
    params: {},
    init: function (r) {
        console.log(r)
        this.parser = r
    },
    getParam: function (r) {
        return this.params.hasOwnProperty(r) ? this.params[r] : ""
    },
    setParam: function (r, e) {
        switch (r) {
            case "rhythm":
                this.params.time_signature = e;
                break;
            case "keynote":
                this.params.key_signature = e;
                break;
            case "lyric":
                this.params.lyric = e ? e : "[]";
                break;
            default:
                this.params[r] = e
        }
        console.log(this.params)
        return this.params
    },
    setParams: function (r) {
        for (var e in r) this.setParam(e, r[e])
    },
    toPostData: function () {
        var r = this.parseSource(),
            e = r.fingerings,
            i = r.config,
            t = {},
            a = function (r) {
                for (var e in r) switch (e) {
                    case "time_signature":
                        t.rhythm = r[e];
                        break;
                    case "key_signature":
                        t.keynote = r[e];
                        break;
                    default:
                        t[e] = r[e]
                }
            };
        return a(this.params), a({
            price: "price" in i ? i.price : "",
            hot: "hot" in i ? i.hot : 0,
            instruments: e ? e.instruments.join(",") : "",
            fingerings: e ? e.fingerings.join(",") : "",
            tonalities: e ? e.tonalities.join(",") : "",
            scores: e ? JSON.stringify(e.scores) : "[]",
            source: this.buildSource()
        }), t
    },
    parseSource: function () {
        var r = this.buildParam("reset", "screen");
        return r += this.buildParam("output_svg", 0), r += this.buildParam("output_fingerings", "true"), r += this.buildHeader(), r += this.buildNotation(), this.parser.parse(r)
    },
    buildSource: function () {
        var r = this.buildHeader() + this.buildNotation() + "\n" + this.buildLyric();
        return r.replace(/(^\n*)/g, "").replace(/(\n*$)/g, "")
    },
    buildHeader: function () {
        for (var r, e = this.params, i = ["song_name", "alias_name", "music_composer", "lyric_composer", "music_composer666", "lyric_composer666", "time_signature", "key_signature"], t = "", a = 0; a < i.length; a++) r = i[a], e.hasOwnProperty(r) && (t += this.buildParam(r, e[r]));
        return t
    },
    buildNotation: function () {
        var r = this.params;
        return r.hasOwnProperty("notation") ? r.notation : ""
    },
    buildLyric: function () {
        for (var lyrics = eval("(" + this.params.lyric + ")"), output = "", i = 0; i < lyrics.length; i++) output += "\n{lyric}\n" + lyrics[i] + "\n{/lyric}\n";
        return output
    },
    buildParams: function (r) {
        var e = "";
        for (var i in r) e += this.buildParam(i, r[i]);
        return e
    },
    buildParam: function (r, e) {
        // if (r == 'reset') {
        //     alert(r+e)
        // }
        if ("undefined" == typeof e || e.length < 1) return "";
        switch (r) {
            case "song_name":
                e = e.replace(/（/g, "(").replace(/）/g, ")").replace(/\(.*\)/g, "").replace(/\{.*\}/g, "");
                break;
            case "keynote":
            case "key_signature":
                r = "key_signature", e = e.replace(/1=/, "");
                break;
            case "rhythm":
                r = "time_signature";
                break;
            case "music_composer666":
                e.match(/\S/) && !e.match(/作曲$/) && (e += " 作曲 ");
                break;
            case "lyric_composer666":
                e.match(/\S/) && !e.match(/作词$/) && (e += " 作词 ");
                break;
            case "music_composer":
                e.match(/\S/) && !e.match(/歌手$/) && (e += " 歌手 ");
                break;
            case "lyric_composer":
                e.match(/\S/) && !e.match(/制谱人$/) && (e += " 制谱 ")

            // case "music_composer":
            //     e.match(/\S/) && !e.match(/曲$/) && (e += " 曲");
            //     break;
            // case "lyric_composer":
            //     e.match(/\S/) && !e.match(/词$/) && (e += " 词")
        }
        return e += "", e = e.replace(/[:{}]/g, ""), e.match(/^\s*$/) ? "" : "{" + r + ":" + e + "}\n"
    }
};
"undefined" != typeof module && "undefined" != typeof module.exports && (module.exports.builder = songBuilder);