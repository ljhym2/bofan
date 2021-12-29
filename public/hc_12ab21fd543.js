var parser = function () {


    function t() {
        this.yy = {}
    }

    var e = function (t, e, r, c) {
            for (r = r || {}, c = t.length; c--; r[t[c]] = e);
            return r
        },
        r = [1, 4],
        c = [1, 5],
        i = [1, 6],
        l = [1, 7],
        o = [1, 8],
        s = [1, 9],
        n = [1, 10],
        f = [1, 11],
        h = [1, 12],
        a = [1, 13],
        k = [1, 14],
        d = [1, 15],
        w = [1, 16],
        y = [1, 17],
        u = [1, 28],
        p = [1, 29],
        x = [1, 30],
        g = [1, 31],
        m = [1, 32],
        M = [1, 33],
        v = [1, 34],
        b = [1, 35],
        L = [1, 36],
        _ = [1, 37],
        C = [1, 38],
        T = [1, 39],
        B = [1, 40],
        E = [1, 41],
        z = [1, 42],
        N = [1, 43],
        A = [1, 44],
        S = [1, 45],
        O = [1, 46],
        R = [1, 47],
        D = [1, 48],
        P = [1, 22],
        j = [1, 23],
        W = [1, 24],
        G = [1, 25],
        q = [1, 26],
        F = [1, 27],
        Z = [1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53],
        H = [2, 12],
        I = {
            trace: function () {},
            yy: {},
            symbols_: {
                error: 2,
                BODY: 3,
                CELLS: 4,
                CELL: 5,
                KEY_VALUE: 6,
                TAG_BEGIN: 7,
                TAG_END: 8,
                TMP_KEY_SIGNATURE: 9,
                TMP_TIME_SIGNATURE: 10,
                SECTION_BEGIN: 11,
                PART_BEGIN: 12,
                KEYWORD: 13,
                SCALE: 14,
                UNICODE: 15,
                EOL: 16,
                EOF: 17,
                LYRIC: 18,
                COMMENT: 19,
                BAR: 20,
                SLUR: 21,
                APPOGGIATURA: 22,
                PAIR: 23,
                "(": 24,
                ")": 25,
                ":": 26,
                SLUR_BEGIN: 27,
                ")@": 28,
                "@(": 29,
                "{{": 30,
                "}}": 31,
                "=}}": 32,
                "-}}": 33,
                "{>": 34,
                ">}": 35,
                "{<": 36,
                "<}": 37,
                "{=": 38,
                "=}": 39,
                "{~": 40,
                "~}": 41,
                "{-": 42,
                "-}": 43,
                "{+": 44,
                "+}": 45,
                REPEAT_PART_BEGIN: 46,
                "]": 47,
                END_BAR: 48,
                SECTION_END_BAR: 49,
                SINGLE_BAR: 50,
                REPEAT_BOTH_BAR: 51,
                REPEAT_END_BAR: 52,
                REPEAT_BEGIN_BAR: 53,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2: "error",
                6: "KEY_VALUE",
                7: "TAG_BEGIN",
                8: "TAG_END",
                9: "TMP_KEY_SIGNATURE",
                10: "TMP_TIME_SIGNATURE",
                11: "SECTION_BEGIN",
                12: "PART_BEGIN",
                13: "KEYWORD",
                14: "SCALE",
                15: "UNICODE",
                16: "EOL",
                17: "EOF",
                18: "LYRIC",
                19: "COMMENT",
                24: "(",
                25: ")",
                26: ":",
                27: "SLUR_BEGIN",
                28: ")@",
                29: "@(",
                30: "{{",
                31: "}}",
                32: "=}}",
                33: "-}}",
                34: "{>",
                35: ">}",
                36: "{<",
                37: "<}",
                38: "{=",
                39: "=}",
                40: "{~",
                41: "~}",
                42: "{-",
                43: "-}",
                44: "{+",
                45: "+}",
                46: "REPEAT_PART_BEGIN",
                47: "]",
                48: "END_BAR",
                49: "SECTION_END_BAR",
                50: "SINGLE_BAR",
                51: "REPEAT_BOTH_BAR",
                52: "REPEAT_END_BAR",
                53: "REPEAT_BEGIN_BAR"
            },
            productions_: [
                0,
                [3, 1],
                [4, 1],
                [4, 2],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [5, 1],
                [21, 3],
                [21, 5],
                [21, 3],
                [22, 3],
                [22, 3],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [23, 1],
                [20, 1],
                [20, 1],
                [20, 1],
                [20, 1],
                [20, 1],
                [20, 1]
            ],
            performAction: function (t, e, r, c, i, l, o) {
                // console.log(t)
                // console.log(i)
                var s = l.length - 1;
                switch (i) {
                    case 1:
                        var n = l[s];
                        X.tick.reset();
                        var f = X.parse(n);
                        return f.raw = n, X.tick.stop("hc.parse done"), X.config.outputSvg && (X.svg.render(f), 2 & X.config.debug && console.log(f.svg), X.tick.stop("hc.svg.render done")), 4 & X.config.debug && console.log(X.sprintf("<!--%s-->", JSON.stringify(n, null, 4))), X.config.debug && X.log(X.tick.ticks), f;
                    case 2:
                        this.$ = X.lex.cellsWithPos([], l[s], o[s]);
                        break;
                    case 3:
                        this.$ = X.lex.cellsWithPos(l[s - 1], l[s], o[s]);
                        break;
                    case 4:
                        var h = l[s],
                            a = h.match(/{([^:]+):(.+)}/);
                        this.$ = X.newKeyValue(X.trim(a[1]), a[2]);
                        break;
                    case 5:
                        var h = l[s],
                            a = h.match(/\{(.+)\}/);
                        this.$ = X.newTag(X.trim(a[1]));
                        break;
                    case 6:
                        var h = l[s],
                            a = h.replace("{/", "").match(/(.+)\}/);
                        this.$ = X.newTag(X.trim(a[1]) + "_end");
                        break;
                    case 7:
                        var h = l[s],
                            a = h.match(/\{1=(.+)\}/),
                            k = X.lex.newTmpKeySignature(a[1]);
                        this.$ = k;
                        break;
                    case 8:
                        var h = l[s],
                            a = h.replace("{", "").replace("}", "").split("/");
                        this.$ = X.newTmpTimeSignature(a[0], a[1]);
                        break;
                    case 9:
                        this.$ = X.lex.newSection(l[s], X.sectionType.section);
                        break;
                    case 10:
                        this.$ = X.lex.newPart(l[s]);
                        break;
                    case 11:
                        this.$ = X.lex.newKeyword(t);
                        break;
                    case 12:
                        this.$ = X.newNote(t);
                        break;
                    case 13:
                        this.$ = X.newText(t);
                        break;
                    case 14:
                        var d = l[s];
                        this.$ = X.newKeyValue("eol", d.length);
                        break;
                    case 15:
                        this.$ = X.newCell("eof");
                        break;
                    case 16:
                        var h = l[s];
                        console.log(l)
                        value = h.replace("{lyric}", "").replace("{/lyric}", ""), this.$ = X.newCell("lyric", {
                            value: value
                        });
                        break;
                    case 17:
                        var h = l[s];
                        value = h.replace("{!", "").replace("!", ""), this.$ = X.newCell("lex_comment", {
                            value: value
                        });
                        break;
                    case 22:
                        this.$ = X.lex.newSlur("", l[s - 1]);
                        break;
                    case 23:
                        var w = l[s - 3];
                        this.$ = X.lex.newSlur(parseInt(w), l[s - 1]);
                        break;
                    case 24:
                        var h = l[s - 2],
                            a = h.match(/(\w+):/);
                        this.$ = X.lex.newSlur(a[1], l[s - 1]);
                        break;
                    case 25:
                        var k = X.newCell("left_appoggiatura");
                        k.cells = l[s - 1], this.$ = k;
                        break;
                    case 26:
                        var k = X.newCell("right_appoggiatura");
                        k.cells = l[s - 1], this.$ = k;
                        break;
                    case 27:
                        this.$ = X.newPreludeBegin();
                        break;
                    case 28:
                        this.$ = X.newPreludeEnd();
                        break;
                    case 29:
                        this.$ = X.newCells([X.newKeyword("="), X.newPreludeEnd()]);
                        break;
                    case 30:
                        this.$ = X.newCells([X.newNote("-"), X.newPreludeEnd()]);
                        break;
                    case 31:
                        this.$ = X.newTag("great_than");
                        break;
                    case 32:
                        this.$ = X.newTag("great_than_end");
                        break;
                    case 33:
                        this.$ = X.newTag("less_than");
                        break;
                    case 34:
                        this.$ = X.newTag("less_than_end");
                        break;
                    case 35:
                        this.$ = X.newTag("group");
                        break;
                    case 36:
                        this.$ = X.newTag("group_end");
                        break;
                    case 37:
                        this.$ = X.newTag("multi");
                        break;
                    case 38:
                        this.$ = X.newTag("multi_end");
                        break;
                    case 39:
                        this.$ = X.newTag("modify");
                        break;
                    case 40:
                        this.$ = X.newTag("modify_end");
                        break;
                    case 41:
                        this.$ = X.newTag("unit");
                        break;
                    case 42:
                        this.$ = X.newTag("unit_end");
                        break;
                    case 43:
                        var h = l[s],
                            k = X.newCell("repeat_part_begin"),
                            a = h.match(/\[(.+)\:/);
                        k.repeat = a[1], this.$ = k;
                        break;
                    case 44:
                        this.$ = X.newCell("repeat_part_end");
                        break;
                    case 45:
                        this.$ = X.newBar(X.barType.endBar);
                        break;
                    case 46:
                        this.$ = X.newBar(X.barType.sectionEndBar);
                        break;
                    case 47:
                        this.$ = X.newBar(X.barType.singleBar);
                        break;
                    case 48:
                        this.$ = X.newBar(X.barType.repeatBothBar);
                        break;
                    case 49:
                        this.$ = X.newBar(X.barType.repeatEndBar);
                        break;
                    case 50:
                        this.$ = X.newBar(X.barType.repeatBeginBar)
                }
            },
            table: [{
                3: 1,
                4: 2,
                5: 3,
                6: r,
                7: c,
                8: i,
                9: l,
                10: o,
                11: s,
                12: n,
                13: f,
                14: h,
                15: a,
                16: k,
                17: d,
                18: w,
                19: y,
                20: 18,
                21: 19,
                22: 20,
                23: 21,
                24: u,
                27: p,
                29: x,
                30: g,
                31: m,
                32: M,
                33: v,
                34: b,
                35: L,
                36: _,
                37: C,
                38: T,
                39: B,
                40: E,
                41: z,
                42: N,
                43: A,
                44: S,
                45: O,
                46: R,
                47: D,
                48: P,
                49: j,
                50: W,
                51: G,
                52: q,
                53: F
            }, {
                1: [3]
            }, {
                1: [2, 1],
                5: 49,
                6: r,
                7: c,
                8: i,
                9: l,
                10: o,
                11: s,
                12: n,
                13: f,
                14: h,
                15: a,
                16: k,
                17: d,
                18: w,
                19: y,
                20: 18,
                21: 19,
                22: 20,
                23: 21,
                24: u,
                27: p,
                29: x,
                30: g,
                31: m,
                32: M,
                33: v,
                34: b,
                35: L,
                36: _,
                37: C,
                38: T,
                39: B,
                40: E,
                41: z,
                42: N,
                43: A,
                44: S,
                45: O,
                46: R,
                47: D,
                48: P,
                49: j,
                50: W,
                51: G,
                52: q,
                53: F
            }, e(Z, [2, 2]), e(Z, [2, 4]), e(Z, [2, 5]), e(Z, [2, 6]), e(Z, [2, 7]), e(Z, [2, 8]), e(Z, [2, 9]), e(Z, [2, 10]), e(Z, [2, 11]), e(Z, H), e(Z, [2, 13]), e(Z, [2, 14]), e(Z, [2, 15]), e(Z, [2, 16]), e(Z, [2, 17]), e(Z, [2, 18]), e(Z, [2, 19]), e(Z, [2, 20]), e(Z, [2, 21]), e(Z, [2, 45]), e(Z, [2, 46]), e(Z, [2, 47]), e(Z, [2, 48]), e(Z, [2, 49]), e(Z, [2, 50]), {
                4: 50,
                5: 3,
                6: r,
                7: c,
                8: i,
                9: l,
                10: o,
                11: s,
                12: n,
                13: f,
                14: [1, 51],
                15: a,
                16: k,
                17: d,
                18: w,
                19: y,
                20: 18,
                21: 19,
                22: 20,
                23: 21,
                24: u,
                27: p,
                29: x,
                30: g,
                31: m,
                32: M,
                33: v,
                34: b,
                35: L,
                36: _,
                37: C,
                38: T,
                39: B,
                40: E,
                41: z,
                42: N,
                43: A,
                44: S,
                45: O,
                46: R,
                47: D,
                48: P,
                49: j,
                50: W,
                51: G,
                52: q,
                53: F
            }, {
                4: 52,
                5: 3,
                6: r,
                7: c,
                8: i,
                9: l,
                10: o,
                11: s,
                12: n,
                13: f,
                14: h,
                15: a,
                16: k,
                17: d,
                18: w,
                19: y,
                20: 18,
                21: 19,
                22: 20,
                23: 21,
                24: u,
                27: p,
                29: x,
                30: g,
                31: m,
                32: M,
                33: v,
                34: b,
                35: L,
                36: _,
                37: C,
                38: T,
                39: B,
                40: E,
                41: z,
                42: N,
                43: A,
                44: S,
                45: O,
                46: R,
                47: D,
                48: P,
                49: j,
                50: W,
                51: G,
                52: q,
                53: F
            }, {
                4: 53,
                5: 3,
                6: r,
                7: c,
                8: i,
                9: l,
                10: o,
                11: s,
                12: n,
                13: f,
                14: h,
                15: a,
                16: k,
                17: d,
                18: w,
                19: y,
                20: 18,
                21: 19,
                22: 20,
                23: 21,
                24: u,
                27: p,
                29: x,
                30: g,
                31: m,
                32: M,
                33: v,
                34: b,
                35: L,
                36: _,
                37: C,
                38: T,
                39: B,
                40: E,
                41: z,
                42: N,
                43: A,
                44: S,
                45: O,
                46: R,
                47: D,
                48: P,
                49: j,
                50: W,
                51: G,
                52: q,
                53: F
            }, e(Z, [2, 27]), e(Z, [2, 28]), e(Z, [2, 29]), e(Z, [2, 30]), e(Z, [2, 31]), e(Z, [2, 32]), e(Z, [2, 33]), e(Z, [2, 34]), e(Z, [2, 35]), e(Z, [2, 36]), e(Z, [2, 37]), e(Z, [2, 38]), e(Z, [2, 39]), e(Z, [2, 40]), e(Z, [2, 41]), e(Z, [2, 42]), e(Z, [2, 43]), e(Z, [2, 44]), e(Z, [2, 3]), {
                5: 49,
                6: r,
                7: c,
                8: i,
                9: l,
                10: o,
                11: s,
                12: n,
                13: f,
                14: h,
                15: a,
                16: k,
                17: d,
                18: w,
                19: y,
                20: 18,
                21: 19,
                22: 20,
                23: 21,
                24: u,
                25: [1, 54],
                27: p,
                28: [1, 55],
                29: x,
                30: g,
                31: m,
                32: M,
                33: v,
                34: b,
                35: L,
                36: _,
                37: C,
                38: T,
                39: B,
                40: E,
                41: z,
                42: N,
                43: A,
                44: S,
                45: O,
                46: R,
                47: D,
                48: P,
                49: j,
                50: W,
                51: G,
                52: q,
                53: F
            }, e([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53], H, {
                26: [1, 56]
            }), {
                5: 49,
                6: r,
                7: c,
                8: i,
                9: l,
                10: o,
                11: s,
                12: n,
                13: f,
                14: h,
                15: a,
                16: k,
                17: d,
                18: w,
                19: y,
                20: 18,
                21: 19,
                22: 20,
                23: 21,
                24: u,
                25: [1, 57],
                27: p,
                29: x,
                30: g,
                31: m,
                32: M,
                33: v,
                34: b,
                35: L,
                36: _,
                37: C,
                38: T,
                39: B,
                40: E,
                41: z,
                42: N,
                43: A,
                44: S,
                45: O,
                46: R,
                47: D,
                48: P,
                49: j,
                50: W,
                51: G,
                52: q,
                53: F
            }, {
                5: 49,
                6: r,
                7: c,
                8: i,
                9: l,
                10: o,
                11: s,
                12: n,
                13: f,
                14: h,
                15: a,
                16: k,
                17: d,
                18: w,
                19: y,
                20: 18,
                21: 19,
                22: 20,
                23: 21,
                24: u,
                25: [1, 58],
                27: p,
                29: x,
                30: g,
                31: m,
                32: M,
                33: v,
                34: b,
                35: L,
                36: _,
                37: C,
                38: T,
                39: B,
                40: E,
                41: z,
                42: N,
                43: A,
                44: S,
                45: O,
                46: R,
                47: D,
                48: P,
                49: j,
                50: W,
                51: G,
                52: q,
                53: F
            }, e(Z, [2, 22]), e(Z, [2, 25]), {
                4: 59,
                5: 3,
                6: r,
                7: c,
                8: i,
                9: l,
                10: o,
                11: s,
                12: n,
                13: f,
                14: h,
                15: a,
                16: k,
                17: d,
                18: w,
                19: y,
                20: 18,
                21: 19,
                22: 20,
                23: 21,
                24: u,
                27: p,
                29: x,
                30: g,
                31: m,
                32: M,
                33: v,
                34: b,
                35: L,
                36: _,
                37: C,
                38: T,
                39: B,
                40: E,
                41: z,
                42: N,
                43: A,
                44: S,
                45: O,
                46: R,
                47: D,
                48: P,
                49: j,
                50: W,
                51: G,
                52: q,
                53: F
            }, e(Z, [2, 24]), e(Z, [2, 26]), {
                5: 49,
                6: r,
                7: c,
                8: i,
                9: l,
                10: o,
                11: s,
                12: n,
                13: f,
                14: h,
                15: a,
                16: k,
                17: d,
                18: w,
                19: y,
                20: 18,
                21: 19,
                22: 20,
                23: 21,
                24: u,
                25: [1, 60],
                27: p,
                29: x,
                30: g,
                31: m,
                32: M,
                33: v,
                34: b,
                35: L,
                36: _,
                37: C,
                38: T,
                39: B,
                40: E,
                41: z,
                42: N,
                43: A,
                44: S,
                45: O,
                46: R,
                47: D,
                48: P,
                49: j,
                50: W,
                51: G,
                52: q,
                53: F
            }, e(Z, [2, 23])],
            defaultActions: {},
            parseError: function (t, e) {
                if (!e.recoverable) throw new Error(t);
                this.trace(t)
            },
            parse: function (t) {
                // console.log(t)
                function e() {
                    var t;
                    return t = d.lex() || a, "number" != typeof t && (t = r.symbols_[t] || t), t
                }
                var r = this,
                    c = [0],
                    i = [null],
                    l = [],
                    o = this.table,
                    s = "",
                    n = 0,
                    f = 0,
                    h = 0,
                    a = 1,
                    k = l.slice.call(arguments, 1),
                    d = Object.create(this.lexer),
                    w = {
                        yy: {}
                    };
                for (var y in this.yy) Object.prototype.hasOwnProperty.call(this.yy, y) && (w.yy[y] = this.yy[y]);
                // console.log(y) //undefined
                // console.log(this.yy) //{}
                // console.log(w) //{yy:{}}
                d.setInput(t, w.yy), w.yy.lexer = d, w.yy.parser = this, void 0 === d.yylloc && (d.yylloc = {});
                var u = d.yylloc;
                console.log(d)
                console.log(c)
                l.push(u);
                var p = d.options && d.options.ranges;
                this.parseError = typeof w.yy.parseError == "function" ? w.yy.parseError : Object.getPrototypeOf(this).parseError;
                for (var x, g, m, M, v, b, L, _, C, T = {};;) {
                    // console.log(x)
                    // console.log(g)
                    // console.log(m)
                    // console.log(M)
                    // console.log(v)
                    if (m = c[c.length - 1], this.defaultActions[m] ? M = this.defaultActions[m] : (null !== x && void 0 !== x || (x = e()), M = o[m] && o[m][x]), void 0 === M || !M.length || !M[0]) {
                        var B = "";
                        C = [];
                        for (b in o[m]) this.terminals_[b] && b > 2 && C.push("'" + this.terminals_[b] + "'");
                        B = d.showPosition ? "Parse error on line " + (n + 1) + ":\n" + d.showPosition() + "\nExpecting " + C.join(", ") + ", got '" + (this.terminals_[x] || x) + "'" : "Parse error on line " + (n + 1) + ": Unexpected " + (x == a ? "end of input" : "'" + (this.terminals_[x] || x) + "'"), this.parseError(B, {
                            text: d.match,
                            token: this.terminals_[x] || x,
                            line: d.yylineno,
                            loc: u,
                            expected: C
                        })
                    }
                    if (M[0] instanceof Array && M.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + x);
                    // console.log(M[0])
                    switch (M[0]) {
                        case 1:
                            c.push(x), i.push(d.yytext), l.push(d.yylloc), c.push(M[1]), x = null, g ? (x = g, g = null) : (f = d.yyleng, s = d.yytext, n = d.yylineno, u = d.yylloc, h > 0 && h--);
                            break;
                        case 2:
                            if (L = this.productions_[M[1]][1], T.$ = i[i.length - L], T._$ = {
                                    first_line: l[l.length - (L || 1)].first_line,
                                    last_line: l[l.length - 1].last_line,
                                    first_column: l[l.length - (L || 1)].first_column,
                                    last_column: l[l.length - 1].last_column
                                }, p && (T._$.range = [l[l.length - (L || 1)].range[0], l[l.length - 1].range[1]]), void 0 !== (v = this.performAction.apply(T, [s, f, n, w.yy, M[1], i, l].concat(k)))) return console.log(v), v;
                            L && (c = c.slice(0, -1 * L * 2), i = i.slice(0, -1 * L), l = l.slice(0, -1 * L)), c.push(this.productions_[M[1]][0]), i.push(T.$), l.push(T._$), _ = o[c[c.length - 2]][c[c.length - 1]], c.push(_);
                            break;
                        case 3:
                            return !0
                    }
                    // console.log(v)
                    // console.log(x, m, M, L, _, T)

                }
                return !0
            }
        },
        X = {
            eol: "\n",
            undefined: "undefined",
            object: "object",
            "break": "__break",
            isObject: function (t) {
                return typeof t == X.object
            },
            notDefined: function (t) {
                return typeof t == X.undefined
            },
            isDefined: function (t) {
                return !X.notDefined(t)
            },
            isEmpty: function (t) {
                switch (typeof t) {
                    case "object":
                        return t.length < 1;
                    case "string":
                        return t.match(/^\s*$/);
                    default:
                        return !t
                }
            },
            notEmtpy: function (t) {
                return !this.isEmpty(t)
            },
            extend: function (t, e) {
                if (!X.isObject(e)) return t;
                for (var r in e) t[r] = e[r];
                return t
            },
            inArray: function (t, e) {
                return this.indexOfArray(t, e) >= 0
            },
            indexOfArray: function (t, e) {
                for (var r = 0; r < e.length; r++)
                    if (e[r] == t) return r;
                return -1
            },
            removeKeys: function (t, e) {
                var r = {};
                if (!X.isObject(t)) return r;
                for (var c in t) X.inArray(c, e) || (r[c] = t[c]);
                return r
            },
            stringify: function (t) {
                var e = "";
                if ("string" == typeof t) e = t;
                else if ("number" == typeof t) e = t + "";
                else if ("object" == typeof t) {
                    var r = [];
                    e = JSON.stringify(t, function (t, e) {
                        if ("object" == typeof e && null !== e) {
                            if (e.getDescription) return e.getDescription();
                            if (-1 !== r.indexOf(e)) return;
                            r.push(e)
                        }
                        return e
                    }, 4)
                }
                return e
            },
            log: function () {
                if (X.config.debug) {
                    var t = "";
                    X.arrayEach(arguments, function (e) {
                        t += X.stringify(e), t += "  "
                    }), console.log("\n<!--" + t + "-->\n")
                }
            },
            sprintf: function () {
                var t, e, r = arguments,
                    c = r[0] || "";
                for (t = 1, e = r.length; e > t; t++) c = c.replace(/%s/, r[t]);
                return c
            },
            range: function (t, e, r) {
                var c = [],
                    i = t;
                if (r = X.oneValue(r, function (t) {
                        return t
                    }), e >= t)
                    for (; e > i; i++) c.push(r(i));
                else
                    for (i--; i >= e; i--) c.push(r(i));
                return c
            },
            "for": function (t, e, r) {
                var c, i;
                if (e >= t)
                    for (c = t; e > c && (!(i = r(c)) || i != this.break); c++);
                else
                    for (c = t - 1; c >= e && (r(c), !i || i != this.break); c--);
            },
            objectMerge: function () {
                for (var t = arguments, e = t.length, r = {}, c = 0; e > c; c++) X.extend(r, t[c]);
                return r
            },
            objectHas: function (t, e) {
                return e in t
            },
            objectGet: function (t, e, r) {
                return X.isObject(t) && X.objectHas(t, e) ? t[e] : r
            },
            objectKeys: function (t) {
                var e = [];
                for (var r in t) e.push(r);
                return e
            },
            objectValues: function (t) {
                var e = [];
                for (var r in t) e.push(t[r]);
                return e
            },
            objectOverride: function (t, e) {
                for (var r, c = 1; 100 > c; c++)
                    if (r = e + "" + c, !t[r]) return t[r] = t[e], r;
                return e
            },
            arrayToObject: function (t, e) {
                var r = {};
                return e = X.oneValue(e, 1), X.arrayEach(t, function (t) {
                    r[t] = e
                }), r
            },
            arrayMap: function (t, e) {
                var r = [];
                return X.arrayEach(t, function (t) {
                    r.push(e(t))
                }), r
            },
            arrayMax: function (t, e, r) {
                if (t.length < 1) return r;
                e = X.oneValue(e, function (t) {
                    return t
                });
                for (var c, i = e(t[0]), l = 1; l < t.length; l++)(c = e(t[l])) > i && (i = c);
                return i
            },
            arrayMin: function (t, e, r) {
                if (t.length < 1) return r;
                e = X.oneValue(e, function (t) {
                    return t
                });
                for (var c, i = e(t[0]), l = 1; l < t.length; l++)(c = e(t[l])) < i && (i = c);
                return i
            },
            arrayEach: function (t, e) {
                for (var r, c = 0; c < t.length && (!(r = e(t[c], c)) || r != X.break); c++);
            },
            arrayGrep: function (t, e) {
                for (var r = [], c = 0; c < t.length; c++) e(t[c], c) && r.push(t[c]);
                return r
            },
            arrayMerge: function () {
                for (var t = arguments, e = t.length, r = [], c = 0; e > c; c++) X.arrayEach(t[c], function (t) {
                    r.push(t)
                });
                return r
            },
            arraySum: function (t, e) {
                var r = 0;
                return X.arrayEach(t, function (t, c) {
                    var i = e ? e(t, c) : t;
                    c ? r += i : r = i
                }), r
            },
            mathMin: function (t, e) {
                return X.notDefined(t) ? e : X.notDefined(e) ? t : Math.min(t, e)
            },
            mathMax: function (t, e) {
                return X.notDefined(t) ? e : X.notDefined(e) ? t : Math.max(t, e)
            },
            times: function (t, e) {
                for (var r = 0; t > r; r++) e(r)
            },
            render: function (t, e) {
                return t.replace(/\{\w+\}/g, function (t) {
                    return t = t.substr(1, t.length - 2), t in e && t in e ? e[t] : ""
                })
            },
            oneValue: function () {
                for (var t = arguments, e = t.length, r = 0; e > r; r++)
                    if (X.isDefined(t[r])) return t[r]
            },
            matchNumber: function (t, e) {
                var r = t.match(/\d+/g);
                return r ? r[0] : e || 0
            },
            trim: function (t) {
                return t.replace(/(^\s*)(\s*$)/g, "")
            },
            clone: function (t) {
                var e;
                if (t instanceof Array) {
                    e = [];
                    for (var r = t.length; r--;) e[r] = X.clone(t[r]);
                    return e
                }
                if (t instanceof Object) {
                    e = {};
                    for (var c in t) e[c] = X.clone(t[c]);
                    return e
                }
                return t
            },
            describe: function (t, e) {
                var r = t;
                if (X.isObject(e))
                    for (var c in e) r += ", " + c + "=" + e[c];
                return r
            },
            a4widthToHeight: function (t) {
                return Math.round(297 * t / 210)
            },
            lineToHump: function (t) {
                return t.replace(/_(\w)/g, function (t, e) {
                    return e.toUpperCase()
                })
            },
            humpToLine: function (t) {
                return t.replace(/([A-Z])/g, "_$1").toLowerCase()
            },
            valueOnOff: function (t) {
                if ("string" == typeof t) switch (t) {
                    case "0":
                        return 0;
                    case "false":
                    case "no":
                    case "null":
                    case "nil":
                    case "off":
                        return !1
                }
                return t
            },
            escapeHTML: function (t) {
                return t = X.oneValue(t, ""), 0 == t.length ? "" : (t = t.replace(/&/g, "&amp;"), t = t.replace(/</g, "&lt;"), t = t.replace(/>/g, "&gt;"))
            },
            circleChar: function (t) {
                var e = {
                    0: "⓪",
                    1: "①",
                    2: "②",
                    3: "③",
                    4: "④",
                    5: "⑤",
                    6: "⑥",
                    7: "⑦",
                    8: "⑧",
                    9: "⑨",
                    10: "⑩",
                    11: "⑪",
                    12: "⑫",
                    13: "⑬",
                    14: "⑭",
                    15: "⑮",
                    16: "⑯",
                    17: "⑰",
                    18: "⑱",
                    19: "⑲",
                    20: "⑳",
                    A: "Ⓐ",
                    B: "Ⓑ",
                    C: "Ⓒ",
                    D: "Ⓓ",
                    E: "Ⓔ",
                    F: "Ⓕ",
                    G: "Ⓖ",
                    H: "Ⓗ",
                    I: "Ⓘ",
                    J: "Ⓙ",
                    K: "Ⓚ",
                    L: "Ⓛ",
                    M: "Ⓜ",
                    N: "Ⓝ",
                    O: "Ⓞ",
                    P: "Ⓟ",
                    Q: "Ⓠ",
                    R: "Ⓡ",
                    S: "Ⓢ",
                    T: "Ⓣ",
                    U: "Ⓤ",
                    V: "Ⓥ",
                    W: "Ⓦ",
                    X: "Ⓧ",
                    Y: "Ⓨ",
                    Z: "Ⓩ",
                    a: "ⓐ",
                    b: "ⓑ",
                    c: "ⓒ",
                    d: "ⓓ",
                    e: "ⓔ",
                    f: "ⓕ",
                    g: "ⓖ",
                    h: "ⓗ",
                    i: "ⓘ",
                    j: "ⓙ",
                    k: "ⓚ",
                    l: "ⓛ",
                    m: "ⓜ",
                    n: "ⓝ",
                    o: "ⓞ",
                    p: "ⓟ",
                    q: "ⓠ",
                    r: "ⓡ",
                    s: "ⓢ",
                    t: "ⓣ",
                    u: "ⓤ",
                    v: "ⓥ",
                    w: "ⓦ",
                    x: "ⓧ",
                    y: "ⓨ",
                    z: "ⓩ"
                };
                return e.hasOwnProperty(t) ? e[t] : t
            }
        };
    Array.prototype.first = function () {
            return this.length < 1 ? "" : this[0]
        }, Array.prototype.last = function () {
            return this.length < 1 ? "" : this[this.length - 1]
        }, Array.prototype.setFirst = function (t) {
            return this.length < 1 ? this.push(t) : this[0] = t, this
        }, Array.prototype.setLast = function (t) {
            return this.length < 1 ? this.push(t) : this[this.length - 1] = t, this
        }, Array.prototype.isEmpty = function () {
            return this.length < 1
        }, Array.prototype.notEmpty = function () {
            return this.length > 0
        }, X.resetFunctions = [], X.execReset = function () {
            X.arrayEach(X.resetFunctions, function (t) {
                t()
            })
        }, X.registerReset = function (t) {
            X.resetFunctions.push(t)
        }, X.tick = {
            ticks: [],
            reset: function () {
                this.ticks = [], this.start()
            },
            start: function () {
                this.lastTime = this.time()
            },
            stop: function (t) {
                var e = this.time();
                if (!this.lastTime) return this.lastTime = e, 0;
                var r = e - this.lastTime;
                if (t) {
                    var c = {};
                    c[t] = r, this.ticks.push(c)
                } else this.ticks.push(r);
                return this.lastTime = e, r
            },
            time: function () {
                return (new Date).getTime()
            }
        }, X.kScreen = "screen", X.kPrint = "print", X.kDebug = "debug", X.resetConfig = function (t) {
            X.config = X.extend({
                noteContentWidth: 11.1,
                noteContentHeight: 17.9,
                noteDotWidth: 6,
                noteDotHeight: 6,
                noteAccidentalWidth: 9,
                noteAccidentalHeight: 15,
                noteUnderBarHeight: 5,
                noteTopPointHeight: 5,
                noteBottomPointHeight: 5,
                noteMarkHeight: 1,
                noteLyricHeight: 1,
                noteMinMargin: 0,
                minNoteDuration: .001,
                horizontalTipWidth: 14,
                horizontalTipHeight: 18,
                appoggiaturaNoteWidth: 15,
                appoggiaturaNoteHeight: 16,
                appoggiaturaNoteUnderBarHeight: 3,
                appoggiaturaBottomPointHeight: 3,
                appoggiaturaTopPointHeight: 3,
                barWidth: 14,
                barHeight: 29,
                barMarkHeight: 15,
                charWidth: 1,
                restWidth: 50,
                preluleWidth: 11.1,
                preludeHeight: 20,
                timeSignature: null,
                timeSignatureWidth: 25,
                keySignature: null,
                keySignatureWidth: 60,
                tmpTimeSignatureWidth: 24,
                tmpTimeSignatureHeight: 32,
                tmpKeySignatureWidth: 60,
                tmpPartHeight: 1,
                fontFamily: "PingFang SC, Microsoft YaHei, Noto Sans, Source Han Serif SC, sans-serif;",
                fontWeightBold: 700,
                fontWeightNormal: 400,
                fontMonospaced: !1,
                fontSizeLyric: 22,
                partNameFontSize: 16,
                media: X.kPrint,
                standardWidth: 1e3,
                paperPaddingLeft: 60,
                paperPaddingTop: 60,
                backgroundColor: "#ffffff",
                fontColor: "#1b1b1b",
                grayColor: "#303030",
                purpleColor: "#9c27b0",
                blueColor: "#0d47a1",
                normalUnitAdvanceDistance: 12,
                normalAdvanceHeight: 80,
                normalGapDistance: 10,
                normalGapHeight: 30,
                noteGapDistance: 10,
                barAdvanceFactor: .7,
                textAdvanceFactor: .3,
                rowBufferWidth: 10,
                cellMinGap: 3,
                globalRatio: 1,
                groupPartGap: 10,
                groupBeginWidth: 20,
                octave: 0,
                textOctave: 0,
                version: 2,
                showLyric: "default",
                showGraph: !1,
                showBarNum: !1,
                showPageNumber: !1,
                measuresPerBarNum: 4,
                waterMarkOpacity: 0,
                siteInfoOpacity: .01,
                siteInfo: "",
                debug: 0,
                svgDebug: 0,
                nl2br: 0,
                playHints: [],
                instrument: "none",
                scale: 1,
                outputSvg: !0,
                outputFingerings: !1,
                checkMeasure: !1,
                hasLyric: !1,
                hasFingerNum: !1,
                hasChordName: !1,
                chordNameMap: {},
                charWidthMap: {
                    0: .539,
                    1: .539,
                    2: .539,
                    3: .539,
                    4: .539,
                    5: .539,
                    6: .539,
                    7: .539,
                    8: .539,
                    9: .539,
                    ")": .361,
                    "*": .479,
                    "+": .576,
                    ",": .326,
                    "-": .338,
                    ".": .326,
                    "/": .348,
                    ":": .326,
                    ";": .326,
                    "<": .576,
                    "=": .576,
                    ">": .576,
                    "?": .438,
                    "@": .901,
                    A: .719,
                    B: .675,
                    C: .69,
                    D: .772,
                    E: .655,
                    F: .629,
                    G: .742,
                    H: .859,
                    I: .401,
                    J: .402,
                    K: .723,
                    L: .64,
                    M: .979,
                    N: .798,
                    O: .769,
                    P: .637,
                    Q: .769,
                    R: .707,
                    S: .557,
                    T: .653,
                    U: .792,
                    V: .726,
                    W: 1.047,
                    X: .702,
                    Y: .688,
                    Z: .599,
                    "[": .341,
                    "\\": .348,
                    "]": .341,
                    "^": .576,
                    _: .555,
                    "`": .435,
                    a: .552,
                    b: .627,
                    c: .529,
                    d: .617,
                    e: .549,
                    f: .385,
                    g: .56,
                    h: .655,
                    i: .325,
                    j: .301,
                    k: .592,
                    l: .324,
                    m: .976,
                    n: .658,
                    o: .594,
                    p: .63,
                    q: .602,
                    r: .454,
                    s: .47,
                    t: .354,
                    u: .639,
                    v: .546,
                    w: .829,
                    x: .564,
                    y: .551,
                    z: .496,
                    "{": .375,
                    "|": .27,
                    "}": .375,
                    "~": .576
                }
            }, t), X.setPaperSize("a4", X.config.standardWidth)
        }, X.setPaperSize = function (t, e) {
            switch (X.setPaperWidth(e), t.toLowerCase()) {
                case "a4":
                    X.config.paperHeight = 1.414 * X.config.paperWidth;
                    break;
                case "a3":
                    X.config.paperHeight = .707 * X.config.paperWidth;
                    break;
                case "b3":
                    X.config.paperHeight = 1.324 * X.config.paperWidth;
                    break;
                case "b4":
                    X.config.paperHeight = .662 * X.config.paperWidth;
                    break;
                default:
                    var r = value.split(/[*x]+/);
                    r.length > 1 ? (X.setPaperWidth(r[0]), X.setPaperHeight(r[1])) : r[0] && X.setPaperSize("a4", r[0])
            }
        }, X.setPaperWidth = function (t) {
            (t = parseInt(t || 0)) && (X.config.paperWidth = Math.max(500, t), X.config.paperPaddingLeft = .06 * X.config.paperWidth, X.config.paperPaddingTop = .06 * X.config.paperWidth)
        }, X.setPaperHeight = function (t) {
            (t = parseInt(t || 0)) && (X.config.paperHeight = t)
        }, X.charWidth = function (t) {
            return X.config.charWidthMap[t] ? X.config.charWidthMap[t] : .7
        }, X.fontWidth = function (t, e) {
            if (t += "", e = e || 1, X.config.fontMonospaced) return t.length * e;
            for (var r = 0, c = 0; c < t.length; c++) {
                var i = t.charAt(c);
                r += i.match(/[\x00-\xff]/) ? X.charWidth(i) : 1
            }
            return r * e
        }, X.isNl2BrTrue = function () {
            return X.config.nl2br && "auto" != X.config.nl2br
        }, X.isNl2BrAuto = function () {
            return "auto" === X.config.nl2br
        }, X.isNl2BrFalse = function () {
            return !X.config.nl2br || "no" == X.config.nl2br || "off" == X.config.nl2br
        }, X.isMediaPrint = function () {
            return X.config.media == X.kPrint
        }, X.isMediaScreen = function () {
            return X.config.media == X.kScreen
        }, X.isGraphShow = function () {
            return X.config.showGraph
        }, X.isGraphNone = function () {
            return !X.config.showGraph
        }, X.isLyricShow = function () {
            return X.config.showLyric
        }, X.isLyricNone = function () {
            return !X.config.showLyric
        }, X.getPlayHint = function () {
            var t = [];
            return X.config.showTone && X.config.tone && t.push("音色：" + X.config.tone), X.config.showStyle && X.config.style && t.push("节奏型：" + X.config.style), X.config.hint && t.push(X.config.hint), t.join("　")
        }, X.resetConfig(), X.registerReset(X.resetConfig), X.counter = {
            pool: {},
            next: function (t) {
                return t = X.oneValue(t, "default"), this.pool[t] || (this.pool[t] = 1), this.pool[t]++
            },
            get: function (t) {
                return t = X.oneValue(t, "default"), this.pool[t] || (this.pool[t] = 1), this.pool[t]
            },
            reset: function () {
                this.pool = {}
            }
        }, X.registerReset(X.counter.reset.bind(X.counter)), X.newCell = function (t, e) {
            return X.extend({
                type: t,
                id: X.counter.next(t),
                x: 0,
                y: 0,
                advanceDistance: 0,
                advanceFactor: 0,
                comments: [],
                getWidth: function () {
                    return 0
                },
                getHeight: function () {
                    return 0
                },
                getMarginLeft: function () {
                    return 0
                },
                getMarginRight: function () {
                    return 0
                },
                getGapLeft: function () {
                    return 0
                },
                getGapRight: function () {
                    return 0
                },
                toElements: function () {
                    return []
                },
                toRect: function () {
                    return X.svg.newRect(this.getXLeft(), this.getYTop(), this.getWidth(), this.getHeight())
                },
                transform: function (t, e) {
                    this.x += t, this.y += e
                },
                pushComment: function (t) {
                    t && this.comments.push(t.toString())
                },
                pushComments: function (t) {
                    var e = this;
                    X.arrayEach(t, function (t) {
                        e.pushComment(t)
                    })
                },
                getUniqueId: function () {
                    return this.type + this.id
                },
                getRowId: function () {
                    var t = this;
                    return t.row ? t.row.id : 0
                },
                getXLeft: function () {
                    return this.x
                },
                getXRight: function () {
                    return this.x + this.getWidth()
                },
                getXCenter: function () {
                    return this.x + .5 * this.getWidth()
                },
                getYTop: function () {
                    return this.y - .5 * this.getHeight()
                },
                getYBottom: function () {
                    return this.y + .5 * this.getHeight()
                },
                getYCenter: function () {
                    return this.y + .5 * this.getHeight()
                },
                getNormalAdvanceDistance: function (t) {
                    return this.advanceFactor * X.oneValue(t, X.config.normalUnitAdvanceDistance)
                },
                getDescription: function () {
                    return X.describeCell(this)
                },
                getFullWidth: function () {
                    return this.getWidth() + this.getMarginLeft() + this.getMarginRight()
                },
                isDrawable: function () {
                    return X.notDefined(this.drawable) && (this.drawable = this.getFullWidth() > 0), this.drawable
                }
            }, X.oneValue(e, {}))
        }, X.newCells = function (t) {
            return X.newCell("cells", {
                cells: X.oneValue(t, []),
                push: function (t) {
                    this.cells.push(t)
                }
            })
        }, X.logCell = function (t) {
            X.isObject(t) && X.objectKeys(t, "getDescription") && X.log(t.getDescription())
        }, X.logCells = function (t) {
            X.arrayEach(t, function (t) {
                X.logCell(t)
            })
        }, X.describeCell = function (t, e) {
            return X.describe(t.type, X.extend({
                id: t.id,
                x: t.x,
                y: t.y
            }, e))
        }, X.safeDistance = function (t, e) {
            return t.getMarginRight() + e.getMarginLeft() + Math.max(t.getGapRight(), e.getGapLeft())
        }, X.normalDistance = function (t, e, r) {
            return Math.max(X.safeDistance(t, e), t.getNormalAdvanceDistance(r))
        }, X.adjustAdvanceFactor = function (t, e) {
            var r;
            if (X.isBar(t) || X.isBar(e)) r = X.config.barAdvanceFactor, X.isBar(e) && (e.advanceFactor = r);
            else {
                if (X.isNote(t) && X.isNote(e)) return t.advanceFactor;
                r = X.config.textAdvanceFactor
            }
            return t.advanceFactor = r, r
        }, X.getDrawableCells = function (t) {
            return X.arrayGrep(t, function (t) {
                return t.isDrawable ? t.isDrawable() : (X.log(t, " has not isDrawable function"), !1)
            })
        }, X.kNote = "note", X.newNote = function (t, e) {
            var r = X.newCell(X.kNote, {
                scale: 0,
                content: "0",
                accidental: 0,
                natural: 0,
                octave: 0,
                textOctave: X.config.textOctave,
                underBarCount: 0,
                dotCount: 0,
                durationRatio: 1,
                leftAppoggiatura: X.newLeftAppoggiatura([]),
                rightAppoggiatura: X.newRightAppoggiatura([]),
                topTips: [],
                leftTips: [],
                rightTips: [],
                lyrics: [],
                chordNotes: [],
                chordNames: [],
                fingerNums: [],
                hasLyric: !0,
                isTiedNote: !1,
                isExtendedNote: !1,
                extendedNotes: [],
                slaveNotes: [],
                lyricNotes: [],
                tracks: [],
                advanceFactor: 1,
                repeat: 0,
                initNote: function (t, e) {
                    var r = this;
                    switch (t) {
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                            r.scale = parseInt(t), r.content = e || t, r.octave = X.config.octave;
                            break;
                        case "0":
                            r.content = e || t, r.hasLyric = !1;
                            break;
                        case "-":
                            r.content = e || "yan", r.hasLyric = !1;
                            break;
                        case "X":
                        case "8":
                            r.content = "jie";
                            break;
                        case "9":
                            r.content = "kong";
                            break;
                        case "H":
                            r.content = "hua"
                    }
                    return r
                },
                getDescription: function () {
                    return X.describeCell(this, {
                        content: this.content,
                        octave: this.octave
                    })
                },
                getDuration: function () {
                    if (this.rootNote) return this.rootNote.getDuration();
                    for (var t = Math.pow(.5, this.underBarCount), e = 1, r = 0; r < this.dotCount; r++) e += Math.pow(.5, r + 1);
                    return t * e
                },
                getRealDuration: function () {
                    return this.rootNote ? this.rootNote.getRealDuration() : this.getDuration() * this.durationRatio
                },
                getTotalDuration: function () {
                    if (this.rootNote) return this.rootNote.getTotalDuration();
                    var t = this.getRealDuration();
                    return X.arrayEach(this.slaveNotes, function (e) {
                        t += e.getTotalDuration()
                    }), X.arrayEach(this.extendedNotes, function (e) {
                        t += e.getTotalDuration()
                    }), t
                },
                getAccidentalMark: function () {
                    if (this.hideAccidental) return "";
                    switch (this.accidental) {
                        case -2:
                            return "bb";
                        case -1:
                            return "b";
                        case 1:
                            return "#";
                        case 2:
                            return "x";
                        default:
                            return this.natural ? "n" : ""
                    }
                },
                getAccidentalMarkWidth: function () {
                    return this.getAccidentalMark().length * X.config.noteAccidentalWidth
                },
                getLeftTipWidth: function () {
                    return X.config.horizontalTipWidth * r.leftTips.length
                },
                getRightTipWidth: function () {
                    return X.config.horizontalTipWidth * r.rightTips.length
                },
                isMasterNote: function () {
                    return "yan" != this.content
                },
                isSlaveNote: function () {
                    return "yan" == this.content
                },
                isDummyNote: function () {
                    return this.isSlaveNote() || this.isExtendedNote
                },
                getLastNote: function () {
                    return this.slaveNotes.length > 0 ? this.slaveNotes.last() : this
                },
                pushSlaveNote: function (t) {
                    for (var e = 0; e < this.slaveNotes.length; e++)
                        if (t.id == this.slaveNotes[e].id) return;
                    var r = this.getLastNote();
                    return t.rightAppoggiatura.notes = X.arrayMerge(r.rightAppoggiatura.notes, t.rightAppoggiatura.notes), r.rightAppoggiatura.notes = [], t.rightTips = X.arrayMerge(r.rightTips, t.rightTips), r.rightTips = [], this.slaveNotes.push(t), this
                },
                pushExtendedNote: function (t) {
                    this.extendedNotes.push(t)
                },
                pushLyricNote: function (t) {
                    this.lyricNotes.push(t)
                },
                getMarginLeft: function () {
                    var t = this.leftAppoggiatura.getWidth();
                    return t += this.getLeftTipWidth(), t += this.getAccidentalMarkWidth(), t = Math.max(t, this.getGraphMinMargin()), t = Math.max(t, this.getLyricMinLeftMargin()), Math.max(t, X.config.noteMinMargin)
                },
                getMarginRight: function () {
                    var t = this.getDotWidth();
                    return t = Math.max(t, this.rightAppoggiatura.getWidth()), t += this.getRightTipWidth(), t = Math.max(t, this.getGraphMinMargin()), t = Math.max(t, this.getLyricMinRightMargin()), Math.max(t, X.config.noteMinMargin)
                },
                getGraphMinMargin: function () {
                    if (0 == this.scale) return 0;
                    if (X.isGraphShow() && this.fingering) {
                        var t = {
                            a6: 10,
                            o6: 10,
                            o3: 25,
                            o12: 15,
                            x8: 15,
                            x10: 15,
                            r8b: 5,
                            r8g: 5,
                            p8: 5,
                            h7: 10
                        };
                        if (this.instrument in t) return t[this.instrument]
                    }
                    return 0
                },
                getLyricMinLeftMargin: function () {
                    return X.arrayMax(this.lyrics, function (t) {
                        return X.getLyricLeftWidth(t)
                    }, 0)
                },
                getLyricMinRightMargin: function () {
                    return X.arrayMax(this.lyrics, function (t) {
                        return X.getLyricRightWidth(t)
                    }, 0) - X.config.noteContentWidth - (X.config.noteContentWidth + X.config.noteGapDistance) * this.lyricNotes.length
                },
                getLyricMinWidth: function () {
                    return X.arrayMax(this.lyrics, function (t) {
                        return X.getLyricTextWidth(t)
                    }, 0)
                },
                getDotWidth: function () {
                    var t = X.config.noteDotWidth * this.dotCount;
                    return t > 0 && (t += .5 * X.config.noteDotWidth), t
                },
                getTopPointHeight: function () {
                    return r.octaveForDisplay() <= 0 ? 0 : X.config.noteTopPointHeight * r.octaveForDisplay() + 2
                },
                getWidth: function () {
                    return X.config.noteContentWidth
                },
                getHeight: function () {
                    return X.config.noteContentHeight
                },
                getGapLeft: function () {
                    return X.config.noteGapDistance
                },
                getGapRight: function () {
                    return X.config.noteGapDistance
                },
                toElements: function () {
                    return X.arrayMerge(X.svg.newNoteElements(this), this.leftAppoggiatura.toElements(this), this.rightAppoggiatura.toElements(this))
                },
                octaveForDisplay: function () {
                    return 0 == this.scale ? 0 : this.octave + this.textOctave
                }
            });
            return r.initNote(t + "", e)
        }, X.isNote = function (t) {
            return t.type && t.type == X.kNote
        }, X.isMasterNote = function (t) {
            return X.isNote(t) && t.isMasterNote()
        }, X.cellsToNotes = function (t) {
            return X.arrayGrep(t, function (t) {
                return X.isNote(t)
            })
        }, X.isIntegerDuration = function (t, e) {
            return 8 == e ? Math.abs(t - 1.5 * Math.round(t / 1.5)) < X.config.minNoteDuration : Math.abs(t - Math.round(t)) < X.config.minNoteDuration
        }, X.newAppoggiatura = function (t, e) {
            return {
                type: t,
                notes: X.cellsToNotes(e),
                getWidth: function () {
                    return this.getLeftTipWidth() + this.getNoteWidth() + this.getRightTipWidth()
                },
                getNoteWidth: function () {
                    return this.notes.isEmpty() ? 0 : X.config.appoggiaturaNoteWidth * this.notes.length
                },
                getLeftTipWidth: function () {
                    return this.notes.isEmpty() ? 0 : X.config.horizontalTipWidth * this.notes.first().leftTips.length
                },
                getRightTipWidth: function () {
                    return this.notes.isEmpty() ? 0 : X.config.horizontalTipWidth * this.notes.last().rightTips.length
                },
                getUnderBarCount: function () {
                    return this.notes.isEmpty() ? 0 : 1 == this.notes.first().underBarCount ? 1 : 2
                },
                getBottomPointCount: function () {
                    return this.notes.isEmpty() ? 0 : X.arrayMax(this.notes, function (t) {
                        return t.octave >= 0 ? 0 : Math.abs(t.octave)
                    })
                },
                toElements: function (t) {
                    return X.svg.newAppoggiaturaElements(this, t)
                }
            }
        }, X.newLeftAppoggiatura = function (t) {
            return X.newAppoggiatura(X.appoggiaturaType.leftAppoggiatura, t)
        }, X.newRightAppoggiatura = function (t) {
            return X.newAppoggiatura(X.appoggiaturaType.rightAppoggiatura, t)
        }, X.appoggiaturaType = {
            leftAppoggiatura: "left_appoggiatura",
            rightAppoggiatura: "right_appoggiatura"
        }, X.newBar = function (t) {
            return X.newCell(t, {
                id: X.counter.next("bar"),
                start: [],
                fine: [],
                jump: [],
                dc: [],
                ds: [],
                repeat: [],
                eolCount: 0,
                advanceFactor: X.config.barAdvanceFactor,
                isIntegerMeasure: !0,
                num: 0,
                getWidth: function () {
                    return X.config.barWidth
                },
                getHeight: function () {
                    return X.config.barHeight
                },
                getGapLeft: function () {
                    return X.config.normalGapDistance
                },
                getGapRight: function () {
                    return X.config.normalGapDistance
                },
                toElements: function () {
                    return X.svg.newBarElements(this)
                }
            })
        }, X.isBar = function (t) {
            return t.type && t.type.match(/_bar$/)
        }, X.isEof = function (t) {
            return t.type && "eof" === t.type
        }, X.barType = {
            singleBar: "single_bar",
            sectionEndBar: "section_end_bar",
            endBar: "end_bar",
            repeatBeginBar: "repeat_begin_bar",
            repeatEndBar: "repeat_end_bar",
            repeatBothBar: "repeat_both_bar",
            dashedBar: "dashed_bar",
            blankBar: "blank_bar"
        }, X.newBeat = function () {
            return {
                notes: [],
                isEmpty: function () {
                    return this.notes.length < 1
                },
                pushNote: function (t) {
                    this.notes.push(t)
                },
                setAdvanceFactor: function () {
                    var t = this.notes;
                    if (!t.isEmpty()) {
                        for (var e, r, c = 0; c < t.length - 1; c++) e = t[c], r = e.getRealDuration(), e.advanceFactor = r > 1 ? .9 * r : .25 > r ? .5 : .5 + .4 * (r - .25) / .75;
                        t[t.length - 1].advanceFactor = 1
                    }
                },
                getUnderBars: function () {
                    var t = this.notes,
                        e = X.arrayMax(t, function (t) {
                            return t.underBarCount
                        }),
                        r = [];
                    X.times(e, function () {
                        r.push([])
                    });
                    var c, i, l = [];
                    for (i = 0; i < r.length; i++) {
                        for (c = 0; c < t.length; c++) t[c].underBarCount > i ? l.push(t[c]) : l.length > 0 && (r[i].push(l), l = []);
                        l.length > 0 && (r[i].push(l), l = [])
                    }
                    return r
                },
                underBarToElements: function () {
                    return X.svg.newUnderBarsToElements(this)
                }
            }
        }, X.cellsToBeats = function (t) {
            for (var e, r = 0, c = X.newBeat(), i = [], l = 4, o = 0; o < t.length; o++) e = t[o], X.isNote(e) && (e.timeSignature && (l = e.timeSignature.m), c.pushNote(e), r += e.getRealDuration(), X.isIntegerDuration(r, l) && (i.push(c), c = X.newBeat(), r = 0));
            if (!c.isEmpty()) {
                i.push(c);
                var s = t.last();
                X.isBar(s) && (s.isIntegerMeasure = !1)
            }
            return i
        }, X.newMeasure = function () {
            return {
                cells: [],
                beats: [],
                pushCell: function (t) {
                    this.cells.push(t)
                },
                isEmpty: function () {
                    return this.getDrawableCells().isEmpty()
                },
                getDrawableCells: function () {
                    return X.getDrawableCells(this.cells)
                },
                unshiftCells: function (t) {
                    this.cells = X.arrayMerge(t, this.cells), this.adjustAdvanceFactor()
                },
                unshiftGroupHeads: function () {
                    var t = this.getDrawableCells();
                    if (!t.isEmpty()) {
                        var e = t.first();
                        if (X.objectHas(e, "unitSet")) {
                            var r = e.unitSet.selectLeadGroupIds();
                            this.unshiftCells(X.groupTree.selectGroupHeadLeadCells(r))
                        }
                    }
                },
                adjustAdvanceFactor: function () {
                    var t = this.getDrawableCells();
                    if (!t.isEmpty()) {
                        var e = X.cellsToBeats(t);
                        X.arrayEach(e, function (t) {
                            t.setAdvanceFactor()
                        }), this.beats = e;
                        for (var r = 1; r < t.length; r++) X.adjustAdvanceFactor(t[r - 1], t[r])
                    }
                },
                normalWidth: function () {
                    return X.cellsNormalWidth(this.cells)
                },
                underBarsToElements: function () {
                    var t = [];
                    return X.arrayEach(this.beats, function (e) {
                        X.arrayEach(e.underBarToElements(), function (e) {
                            t.push(e)
                        })
                    }), t
                }
            }
        }, X.cellsToMeasures = function (t) {
            var e = [],
                r = X.newMeasure(),
                c = function () {
                    r.adjustAdvanceFactor(), e.push(r), r = X.newMeasure()
                };
            return X.arrayEach(t, function (t) {
                r.pushCell(t), X.isBar(t) && c()
            }), r.isEmpty() || c(), e
        }, X.rows = [], X.registerReset(function () {
            X.rows = []
        }), X.newRow = function (t) {
            var e = X.extend(X.svg.newElementGroup(), {
                id: X.counter.next("row"),
                measures: [],
                cells: [],
                rowWidth: X.oneValue(t, 0),
                dy: 0,
                shouldBreakPage: function () {
                    return this.cells.notEmpty() && this.cells.first().type == X.kBreakPage
                },
                getDrawableCells: function () {
                    return X.getDrawableCells(this.cells)
                },
                isEmpty: function () {
                    return this.getDrawableCells().isEmpty()
                },
                notEmpty: function () {
                    return !this.isEmpty()
                },
                pushMeasure: function (t) {
                    this.measures.push(t), this.pushCells(t.cells)
                },
                pushCells: function (t) {
                    var e = this;
                    X.arrayEach(t, function (t) {
                        t.row = e, e.cells.push(t)
                    })
                },
                normalWidth: function () {
                    return X.arraySum(this.measures, function (t) {
                        return t.normalWidth()
                    })
                },
                unitAdvanceDistance: function () {
                    return (this.rowWidth - X.cellsMinAdvanceDistance(this.cells)) / X.cellsTotalAdvanceFactor(this.cells)
                },
                fixPositionX: function (t) {
                    var e = X.config.normalUnitAdvanceDistance,
                        r = X.cellsNormalWidth(this.cells, e),
                        c = {};
                    r < (this.autoWidth ? 200 : 100) && (c.unitAdvanceDistance = e), X.fixCellsPositionX(this.cells, this.rowWidth, t, c)
                },
                buildGroupCells: function () {
                    var t = [],
                        e = {};
                    X.arrayEach(this.cells, function (r) {
                        X.isGroupHead(r) && (e[r.id] = r), X.objectHas(r, "unitSet") ? r.unitSet.restoreCells(e) : X.notDefined(r.groupId) && t.push(r)
                    }), this.cells = t
                },
                mergeGroupElements: function () {
                    var t = this;
                    X.arrayEach(this.cells, function (e) {
                        X.isGroupHead(e) && e.mergeGroupElements(t)
                    })
                },
                toElements: function () {
                    var t = this,
                        e = [],
                        r = function (r) {
                            r.row = t, e.push(r)
                        };
                    return X.arrayEach(this.cells, function (e) {
                        e.type == X.kGroupHead && e.partToElements(t, r), r(e)
                    }), this.cells = e, this.elements = X.cellsToElements(e), this.elements
                }
            });
            return X.rows.push(e), e
        }, X.cellsToRows = function (t, e) {
            var r = [],
                c = [],
                i = X.config.barAdvanceFactor * X.config.normalUnitAdvanceDistance,
                l = X.config.rowBufferWidth,
                o = function (t) {
                    r.push(t)
                },
                s = function (t) {
                    c.push(t)
                },
                n = function (t) {
                    if (!r.isEmpty()) {
                        var o = X.cellsToMeasures(r);
                        r = [];
                        var n = X.arrayMap(o, function (t) {
                                return t.normalWidth()
                            }),
                            f = X.dp.calc(n, e - l, i),
                            h = 1 === f.length,
                            a = f.shift(),
                            k = X.newRow(e),
                            d = 0,
                            w = function (t) {
                                if (r.notEmpty() && (t.unshiftCells(r), r = []), 0 == d && t.unshiftGroupHeads(), d += t.normalWidth(), k.pushMeasure(t), --a < 1) {
                                    var c = k.cells.last();
                                    c.type == X.barType.repeatBeginBar && (r.push(c), k.cells.setLast(X.newBar(X.barType.singleBar))), s(k), a = f.shift(), k = X.newRow(e), d = 0
                                }
                            };
                        X.arrayEach(o, function (t) {
                            w(t)
                        }), h && !t && (c.first().autoWidth = !0)
                    }
                };
            return X.arrayEach(t, function (t) {
                switch (t.type) {
                    case X.kBreakRow:
                        return void n();
                    case X.kBreakPage:
                        n()
                }
                o(t), X.config.nl2br && X.isBar(t) && t.eolCount > 0 && (n(!0), t.eolCount > 2 && o(X.newCell(X.kBreakPage)))
            }), n(), c
        }, X.cellsToElements = function (t) {
            var e = X.svg.newElementGroup(),
                r = X.getDrawableCells(t);
            X.arrayEach(r, function (t) {
                var r = t.toElements();
                e.pushElements(r), t.type == X.kGroupHead && (t.elements = r)
            });
            var c = X.cellsToMeasures(t);
            return X.arrayEach(c, function (t) {
                e.pushElements(t.underBarsToElements())
            }), e.elements
        }, X.cellsNormalWidth = function (t, e) {
            if (t = X.getDrawableCells(t), t.isEmpty()) return 0;
            for (var r = X.arraySum(t, function (t) {
                    return t.getWidth()
                }), c = 1; c < t.length; c++) r += X.normalDistance(t[c - 1], t[c], e);
            return r += t.first().getMarginLeft(), r += t.last().getMarginRight()
        }, X.cellsMinAdvanceDistance = function (t) {
            var e = 0;
            if (t = X.getDrawableCells(t), t.isEmpty()) return e;
            e += t.first().getMarginLeft(), e += t.last().getMarginRight(), X.arrayEach(t, function (t) {
                e += t.getWidth()
            });
            for (var r = 0; r < t.length - 1; r++) t[r].advanceFactor <= 0 && (e += X.safeDistance(t[r], t[r + 1]));
            return e
        }, X.cellsTotalAdvanceFactor = function (t) {
            var e = 0;
            t = X.getDrawableCells(t);
            for (var r = 0; r < t.length - 1; r++) e += t[r].advanceFactor;
            return e
        }, X.fixCellsPositionX = function (t, e, r, c) {
            ({
                cells: t,
                width: X.oneValue(e, 0),
                unitAdvanceDistance: X.objectGet(c, "unitAdvanceDistance", 0),
                getDrawableCells: function () {
                    return X.getDrawableCells(this.cells)
                },
                fixPositionX: function (t) {
                    var e = this.getDrawableCells();
                    if (!e.isEmpty()) {
                        this.adjustAdvanceDistance();
                        var r = t + e[0].getMarginLeft();
                        X.arrayEach(e, function (t) {
                            t.transform(r, 0), r += t.getWidth(), t.advanceDistance && (r += t.advanceDistance)
                        })
                    }
                },
                adjustAdvanceDistance: function () {
                    var t = this.getDrawableCells();
                    if (!t.isEmpty()) {
                        var e = 0;
                        if (this.unitAdvanceDistance)
                            for (e = 0; e < t.length - 1; e++) t[e].advanceDistance = X.normalDistance(t[e], t[e + 1], this.unitAdvanceDistance);
                        else {
                            var r = X.cellsTotalAdvanceFactor(this.cells),
                                c = this.width - X.cellsMinAdvanceDistance(this.cells),
                                i = !1;
                            for (e = 0; e < t.length - 1; e++) t[e].safeDistance = X.safeDistance(t[e], t[e + 1]), t[e].advanceDistance = t[e].advanceFactor > 0 && r > 0 ? c * t[e].advanceFactor / r : t[e].safeDistance, t[e].advanceDistance < t[e].safeDistance && (i = !0);
                            if (i) {
                                var l = [],
                                    o = 0;
                                for (e = 0; e < t.length - 1; e++) {
                                    t[e].advanceFactor > 0 && (c -= t[e].safeDistance);
                                    var s = t[e].advanceDistance - t[e].safeDistance;
                                    s = s > 0 ? s : 0, l.push(s), o += s
                                }
                                if (0 == o) return;
                                for (e = 0; e < t.length - 1; e++) t[e].advanceDistance = t[e].safeDistance + c * l[e] / o
                            }
                        }
                    }
                }
            }).fixPositionX(r)
        }, X.kGroup = "group", X.groupType = {
            group: "group",
            unit: "unit",
            modify: "modify",
            multi: "multi"
        }, X.newGroup = function (t) {
            var e = X.newCell(X.kGroup, {
                groupType: t,
                parts: [],
                basePartIndex: 0,
                drawable: !0,
                getLastPart: function () {
                    return this.parts.isEmpty() ? void 0 : this.parts.last()
                },
                newHead: function () {
                    var t = X.newGroupHead(this.id, this.groupType, this.parts);
                    return X.isDefined(this.groupId) && (t.groupId = this.groupId), X.isDefined(this.partIndex) && (t.partIndex = this.partIndex), t
                },
                newTail: function () {
                    var t = X.newGroupTail(this.id, this.groupType);
                    return X.isDefined(this.groupId) && (t.groupId = this.groupId), X.isDefined(this.partIndex) && (t.partIndex = this.partIndex), t
                },
                newPart: function () {
                    var t = this.getLastPart();
                    return X.isDefined(t) && t.isEmpty() ? t : (t = X.newGroupPart(this.id, this.parts.length + 1), this.parts.push(t), t)
                },
                selectLeadCells: function () {
                    var t = [],
                        e = [];
                    X.arrayEach(this.parts, function (r) {
                        var c = r.toLeadCells();
                        e.push(X.cellsToTimeLine(c)), t.push(c)
                    });
                    var r = X.getTimeLinesIntersection(e),
                        c = [];
                    X.arrayEach(t, function (t) {
                        c.push(X.cellsToUnits(t, r))
                    });
                    var i = [];
                    i.push(this.newHead());
                    var l = X.mergePartUnits(c);
                    return X.arrayEach(l, function (t) {
                        X.arrayEach(t.selectLeadCells(), function (t) {
                            i.push(t)
                        })
                    }), i.push(this.newTail()), i
                },
                selectMidiCells: function () {
                    var t = [];
                    if (this.groupType == X.groupType.modify) {
                        var e = {
                            type: X.groupType.modify,
                            parts: []
                        };
                        return X.arrayEach(this.parts, function (t) {
                            e.parts.push(t.toMidiCells())
                        }), t.push(e), t
                    }
                    var r = [],
                        c = [];
                    X.arrayEach(this.parts, function (t) {
                        var e = t.toMidiCells();
                        c.push(X.cellsToTimeLine(e)), r.push(e)
                    });
                    var i = X.getTimeLinesIntersection(c),
                        l = [];
                    X.arrayEach(r, function (t) {
                        l.push(X.cellsToUnits(t, i))
                    });
                    var o = X.mergePartUnits(l);
                    return X.arrayEach(o, function (e) {
                        X.arrayEach(e.selectMidiCells(), function (e) {
                            t.push(e)
                        })
                    }), t
                }
            });
            return e.newPart(), X.groupTree.putGroup(e), e
        }, X.isGroup = function (t) {
            return "type" in t && t.type == X.kGroup
        }, X.kNewPart = "new_part", X.newGroupPart = function (t, e) {
            return {
                name: "",
                groupId: t,
                partIndex: e,
                cells: [],
                getNameWidth: function () {
                    return this.name.length * X.config.partNameFontSize
                },
                toElements: function () {
                    if (this.name.length) {
                        var t = X.newText(this.name);
                        return t.fontSize = X.config.partNameFontSize, t.toElements()
                    }
                    return []
                },
                isEmpty: function () {
                    return X.getDrawableCells(this.cells).isEmpty()
                },
                clone: function () {
                    var t = X.newGroupPart(this.groupId, this.partIndex);
                    return t.name = this.name, t
                },
                pushCell: function (t) {
                    t.partIndex = this.partIndex, t.groupId = this.groupId, X.isGroup(t) && X.groupTree.setGroupRelation(t, this.groupId), this.cells.push(t)
                },
                toLeadCells: function () {
                    var t = [];
                    X.arrayEach(this.cells, function (e) {
                        X.isGroup(e) ? X.arrayEach(e.selectLeadCells(), function (e) {
                            t.push(e)
                        }) : t.push(e)
                    }), X.cellsToMeasures(t);
                    for (var e = X.getDrawableCells(t), r = 0; r < e.length - 1; r++) e[r].advanceDistance = X.normalDistance(e[r], e[r + 1]);
                    return t
                },
                toMidiCells: function () {
                    var t = [];
                    return X.arrayEach(this.cells, function (e) {
                        X.isGroup(e) ? X.arrayEach(e.selectMidiCells(), function (e) {
                            t.push(e)
                        }) : t.push(e)
                    }), t
                }
            }
        }, X.groupTree = {
            ROOT: -1,
            pool: {},
            relations: {},
            reset: function () {
                this.pool = {}, this.relations = {}
            },
            putGroup: function (t) {
                this.pool[t.id] = t, this.relations[t.id] = this.ROOT
            },
            setGroupRelation: function (t, e) {
                this.relations[t.id] = e
            },
            getGroupById: function (t) {
                return this.pool[t]
            },
            newGroupHeadById: function (t) {
                return this.getGroupById(t).newHead()
            },
            selectGroupHeadLeadCells: function (t) {
                if (!t.isEmpty()) {
                    var e = {},
                        r = void 0,
                        c = this,
                        i = function (t) {
                            if (!X.objectHas(e, t)) {
                                var l = c.newGroupHeadById(t);
                                e[t] = l;
                                var o = c.relations[t];
                                o == c.ROOT ? r = l : (i(o), e[o].subGroups.push(l))
                            }
                        };
                    return X.arrayEach(t, i), X.isDefined(r) ? r.selectLeadCells() : []
                }
            }
        }, X.registerReset(X.groupTree.reset), X.kGroupHead = "group_head", X.newGroupHead = function (t, e, r) {
            var c = X.newCell(X.kGroupHead, {
                id: t,
                groupType: e,
                groupElement: void 0,
                partElements: [],
                partCells: [],
                partRows: [],
                subGroups: [],
                getDescription: function () {
                    return X.describeCell(this, {
                        groupType: this.groupType,
                        id: this.id
                    })
                },
                newPart: function () {
                    this.partCells.push([])
                },
                clone: function () {
                    return X.newGroupHead(this.id, this.groupType, this.parts)
                },
                pushPartCell: function (t, e) {
                    this.partCells[t - 1].push(e)
                },
                selectLeadCells: function () {
                    var t = [this];
                    if (this.subGroups.isEmpty()) return t;
                    var e = X.newUnitSet();
                    return X.arrayEach(this.subGroups, function (t) {
                        e.pushUnit(t.selectLeadCells())
                    }), X.arrayEach(e.selectLeadCells(), function (e) {
                        t.push(e)
                    }), t
                },
                getWidth: function () {
                    var t = X.arrayMax(X.arrayMap(r, function (t) {
                        return t.getNameWidth()
                    }));
                    switch (this.groupType) {
                        case X.groupType.group:
                        case X.groupType.unit:
                            t += X.config.groupBeginWidth;
                            break;
                        default:
                            t += .001
                    }
                    return t
                },
                toElements: function () {
                    var t = [];
                    return this.groupElement && t.push(this.groupElement), X.arrayEach(this.partElements, function (e) {
                        X.arrayEach(e, function (e) {
                            t.push(e)
                        })
                    }), t
                },
                getMinPartRowDy: function () {
                    return this.partRows.isEmpty() ? 0 : this.partRows.first().dy
                },
                getMaxPartRowDy: function () {
                    return this.partRows.isEmpty() ? 0 : this.partRows.last().dy
                },
                partToElements: function (t, e) {
                    if (!this.partCells.isEmpty()) {
                        var r = this,
                            c = function (c) {
                                X.arrayEach(c, function (r) {
                                    e(r), r.type == X.kGroupHead && r.partToElements(t, e)
                                }), r.partRows.push(t)
                            },
                            i = 0;
                        switch (this.groupType) {
                            case X.groupType.group:
                            case X.groupType.modify:
                                c(this.partCells.first()), i++
                        }
                        for (var l; i < this.partCells.length; i++) {
                            if (this.groupType == X.groupType.multi && i == this.partCells.length - 1) {
                                c(this.partCells.last());
                                break
                            }
                            l = X.newRow(), l.pushCells(this.partCells[i]), l.toElements(), this.partRows.push(l)
                        }
                    }
                },
                mergeGroupElements: function (t) {
                    var e = this;
                    if (!e.partRows.isEmpty()) {
                        switch (e.groupType) {
                            case X.groupType.multi:
                                return void X.for(e.partRows.length, 0, function (r) {
                                    var c = e.partRows[r];
                                    c != t && (c.mergeGroupElements(), c.dy += t.pushElementAbove(X.svg.mergeElements(c.elements), X.config.groupPartGap))
                                });
                            default:
                                X.arrayEach(this.partRows, function (e) {
                                    e != t && (e.mergeGroupElements(), e.dy += t.pushElementBelow(X.svg.mergeElements(e.elements), X.config.groupPartGap))
                                })
                        }
                        var r, i = e.getMinPartRowDy(),
                            l = e.getMaxPartRowDy();
                        switch (e.groupType) {
                            case X.groupType.unit:
                                r = -.5 * (i + l);
                                break;
                            default:
                                r = 0
                        }
                        if (X.arrayEach(c.partRows, function (t, e) {
                                t.transform(0, r), t.dy += r, X.arrayEach(c.partElements[e], function (e) {
                                    e.transform(c.x, t.dy)
                                })
                            }), e.groupElement) {
                            var o = i - 15 + r,
                                s = l + 15 + r,
                                n = e.groupElement.getFirstRect();
                            switch (n.x = e.getXRight() - n.getWidth(), e.groupType) {
                                case X.groupType.group:
                                    n.y = o, n.height = s - o;
                                    break;
                                case X.groupType.unit:
                                    n.y = .5 * (o + s - n.height)
                            }
                        }
                    }
                }
            });
            switch (X.arrayEach(r, function (t) {
                c.newPart(), c.partElements.push(t.toElements())
            }), c.groupType) {
                case X.groupType.group:
                    c.groupElement = X.svg.newGroupBeginElement();
                    break;
                case X.groupType.unit:
                    c.groupElement = X.svg.newUnitBeginElement()
            }
            return c
        }, X.isGroupHead = function (t) {
            return t.type && t.type == X.kGroupHead
        }, X.kGroupTail = "group_tail", X.newGroupTail = function (t, e) {
            return X.newCell(X.kGroupTail, {
                getWidth: function () {
                    switch (e) {
                        case X.groupType.unit:
                            return X.config.groupBeginWidth;
                        default:
                            return 0
                    }
                },
                toElements: function () {
                    var t = [];
                    switch (e) {
                        case X.groupType.unit:
                            t.push(X.svg.newUnitEndElement(this))
                    }
                    return t
                }
            })
        }, X.newUnitSet = function () {
            return {
                id: X.counter.next("unitSet"),
                units: [],
                leadIndex: 0,
                exUnitSets: [],
                pushUnit: function (t) {
                    this.units.push(t)
                },
                expandUnits: function (t) {
                    X.isObject(t) || (t = {});
                    var e = this,
                        r = [],
                        c = function (t) {
                            r.push(t)
                        },
                        i = function (e) {
                            t[e.id] || X.arrayEach(e.expandUnits(t), function (t) {
                                c(t)
                            })
                        };
                    return t[e.id] = !0, X.arrayEach(e.units, function (t) {
                        c(t), X.arrayEach(t, function (t) {
                            X.objectHas(t, "unitSet") && i(t.unitSet)
                        })
                    }), X.arrayEach(e.exUnitSets, function (t) {
                        i(t)
                    }), r
                },
                getUnitWidth: function (t) {
                    var e = X.getDrawableCells(this.units[t]);
                    if (e.isEmpty()) return 0;
                    for (var r = X.arraySum(e, function (t) {
                            return t.getWidth()
                        }), c = 0; c < e.length - 1; c++) r += X.oneValue(e[c].advanceDistance, 0);
                    return r
                },
                getUnitMarginLeft: function (t) {
                    var e = X.getDrawableCells(this.units[t]);
                    return e.notEmpty() ? e.first().getMarginLeft() : 0
                },
                getUnitMarginRight: function (t) {
                    var e = X.getDrawableCells(this.units[t]);
                    return e.notEmpty() ? e.last().getMarginRight() : 0
                },
                selectLeadCells: function () {
                    var t = this,
                        e = 0,
                        r = [],
                        c = X.arrayMax(X.range(0, t.units.length, function (e) {
                            return t.getUnitMarginLeft(e)
                        })),
                        i = X.arrayMax(X.range(0, t.units.length, function (e) {
                            return t.getUnitMarginRight(e)
                        }));
                    if (X.for(0, t.units.length, function (l) {
                            var o = X.getDrawableCells(t.units[l]);
                            if (!o.isEmpty()) {
                                o.first().getMarginLeft = function () {
                                    return c
                                }, o.last().getMarinRight = function () {
                                    return i
                                };
                                var s = t.getUnitWidth(l);
                                s > e && (t.leadIndex = l, r = t.units[l], e = s)
                            }
                        }), 0 == e) return r;
                    var l = X.getDrawableCells(r),
                        o = l.first();
                    o.unitSet && t.exUnitSets.push(o.unitSet), o.unitSet = t;
                    var s = l.last(),
                        n = X.objectOverride(s, "transform");
                    return s.transform = function (e, r) {
                        s[n](e, r), t.startX = o.getXLeft() - c, t.width = s.getXRight() - t.startX + i, X.arrayEach(t.units, function (e, r) {
                            r != t.leadIndex && X.fixCellsPositionX(e, t.width, t.startX)
                        })
                    }, r
                },
                selectMidiCells: function (t) {
                    var e = this,
                        r = t ? e.units.last() : e.units.first(),
                        c = X.cellsToNotes(r);
                    if (c.notEmpty()) {
                        if (!t && c.first().rootNote) return e.selectMidiCells(!0);
                        for (var i = 0; i < e.units.length; i++) this.units[i] != r && c.first().tracks.push(X.cellsToNotes(e.units[i]))
                    }
                    return r
                },
                selectLeadGroupIds: function () {
                    var t = this,
                        e = {};
                    return X.arrayEach(t.expandUnits(), function (t) {
                        var r = X.getDrawableCells(t);
                        if (!r.isEmpty()) {
                            var c = r.first();
                            e[c.groupId] = !0
                        }
                    }), X.objectKeys(e)
                },
                restoreCells: function (t) {
                    var e = this;
                    X.arrayEach(e.expandUnits(), function (e) {
                        X.arrayEach(e, function (e) {
                            X.isGroupHead(e) && (t[e.id] = e), X.notDefined(e.restored) && t[e.groupId] && (t[e.groupId].pushPartCell(e.partIndex, e), e.restored = !0)
                        })
                    })
                },
                setMeasureNum: function (t, e) {
                    var r = this;
                    X.arrayEach(r.expandUnits(), function (r) {
                        X.arrayEach(r, function (r) {
                            X.isBar(r) && (r.num = t, r.isIncompleteMeasure = e)
                        })
                    })
                }
            }
        }, X.slurType = {
            slur: "slur",
            leftSlur: "left_slur",
            rightSlur: "right_slur"
        }, X.newSlur = function (t, e, r) {
            return X.newCell(X.oneValue(t, X.slurType.slur), {
                cells: X.oneValue(e, []),
                n: X.oneValue(r, 0),
                isTied: !1,
                depth: 0,
                hasSubSlur: function () {
                    for (var t = 0; t < this.cells.length; t++)
                        if (X.isSlur(this.cells[t])) return !0;
                    return !1
                },
                toMasterNotes: function () {
                    return X.arrayGrep(this.cells, function (t) {
                        return X.isMasterNote(t)
                    })
                },
                hasBar: function () {
                    var t = !1;
                    return X.arrayEach(this.cells, function (e) {
                        X.isBar(e) && (t = !0)
                    }), t
                },
                isBreakSlur: function () {
                    return this.type == X.slurType.slur && !this.hasSubSlur() && 1 == this.toMasterNotes().length && !this.hasBar()
                },
                pushCells: function (t) {
                    this.cells = X.arrayMerge(this.cells, t)
                }
            })
        }, X.isSlur = function (t) {
            return t.type && t.type.match(/slur$/)
        }, X.newPreludeBegin = function () {
            return X.newCell("prelude_begin", {
                getWidth: function () {
                    return X.config.preluleWidth
                },
                toElements: function () {
                    return X.svg.newPreludeBeginElement(this)
                }
            })
        }, X.newPreludeEnd = function () {
            return X.newCell("prelude_end", {
                getWidth: function () {
                    return X.config.preluleWidth
                },
                toElements: function () {
                    return X.svg.newPreludeEndElement(this)
                }
            })
        }, X.newText = function (t, e) {
            return X.newCell("text", X.extend({
                value: t,
                fontColor: X.config.fontColor,
                fontWeight: "",
                fontSize: 20,
                fontStyle: "normal",
                anchor: "left",
                getWidth: function () {
                    return X.isNl2BrFalse() && this.value.replace("　", "").match(/^\s*$/) && (this.value = ""), this.value.length < 1 ? 0 : X.fontWidth(this.value, this.fontSize)
                },
                getHeight: function () {
                    return this.fontSize
                },
                getGapLeft: function () {
                    return 10
                },
                getGapRight: function () {
                    return 5
                },
                toElements: function () {
                    return X.svg.newTextElements(this)
                }
            }, e))
        }, X.newRestText = function (t) {
            return X.newText(X.sprintf("（休止%s小节）", t))
        }, X.newBreakRow = function () {
            return X.newCell(X.kBreakRow)
        }, X.newBoldText = function (t, e) {
            return X.newText(t, X.extend({
                fontWeight: "bold"
            }, e))
        }, X.newHeadText = function (t) {
            return X.newCells([X.newBreakRow(), X.newText(t)])
        }, X.newRowText = function (t) {
            return X.newCells([X.newBreakRow(), X.newText(t), X.newBreakRow()])
        }, X.newOmitText = function (t) {
            var e = X.newCells([]);
            switch (t) {
                case "p":
                    return e.push(X.newText("（前奏）")), e;
                case "i":
                    return e.push(X.newText("（间奏）")), e;
                case "c":
                    return e.push(X.newText("（尾奏）")), e;
                case "pl":
                    return e.push(X.newText("（前")), e.push(X.newBar(X.barType.singleBar)), e.push(X.newText("奏）")), e;
                case "il":
                    return e.push(X.newText("（间")), e.push(X.newBar(X.barType.singleBar)), e.push(X.newText("奏）")), e;
                case "cd":
                    return e.push(X.newText("（尾")), e.push(X.newBar(X.barType.singleBar)), e.push(X.newText("奏）")), e
            }
            return t.match(/(\d+)p/) ? (e.push(X.newText(X.sprintf("（前奏%s小节）", X.matchNumber(t)))), e) : t.match(/(\d+)i/) ? (e.push(X.newText(X.sprintf("（间奏%s小节）", X.matchNumber(t)))), e) : t.match(/(\d+)c/) ? (e.push(X.newText(X.sprintf("（尾奏%s小节）", X.matchNumber(t)))), e) : t.match(/(\d+)/) ? (e.push(X.newText(X.sprintf("（省略%s小节）", X.matchNumber(t)))), e) : (e.push(X.newText(X.sprintf("（省略）"))), e)
        }, X.newRepeatPart = function (t) {
            var e = "",
                r = "",
                c = "line";
            switch (t) {
                case "e":
                    e = "结束句";
                    break;
                case "s":
                    e = "重复多次";
                    break;
                case "hs":
                    e = "＊", c = "dashed";
                    break;
                case "st":
                    e = "Ⓣ", c = "dashed";
                    break;
                default:
                    e = t, r = t
            }
            return X.newCell("repeat_type", {
                repeat: r,
                title: e,
                style: c,
                cells: [],
                pushCell: function (t) {
                    this.cells.push(t)
                }
            })
        }, X.isRepeatPartBegin = function (t) {
            return t.type && "repeat_part_begin" == t.type
        }, X.isRepeatPartEnd = function (t) {
            return t.type && "repeat_part_end" == t.type
        }, X.newBPM = function (t) {
            return {
                value: t.toString(),
                getWidth: function () {
                    return t.length < 1 ? 0 : 70
                },
                getHeight: function () {
                    return 30
                },
                toSvg: function (e, r) {
                    var c = "";
                    if (t.length < 1) return c;
                    var i = {
                        x: e + 5,
                        y: r + 1
                    };
                    return c += X.svg.renderUse("jiepaifu", i), i = {
                        x: i.x + 32,
                        y: i.y + 1,
                        dy: 5.368,
                        fill: X.config.fontColor,
                        "font-size": 16
                    }, c += X.svg.renderText(this.value, i)
                }
            }
        }, X.getBPM = function () {
            return X.oneValue(X.config.bpm, X.newBPM(""))
        }, X.formatTimeLineDuration = function (t) {
            return Math.round(t / X.config.minNoteDuration)
        }, X.cellsToTimeLine = function (t) {
            var e = [],
                r = 0,
                c = function () {
                    e.push(X.formatTimeLineDuration(r))
                };
            return X.arrayEach(t, function (t) {
                X.isNote(t) ? (c(), r += t.getRealDuration()) : X.isBar(t) && (c(), r += 1)
            }), e
        }, X.getTimeLinesIntersection = function (t) {
            var e = [],
                r = {};
            X.arrayEach(t, function (t) {
                X.arrayEach(t, function (t) {
                    t in r ? r[t]++ : r[t] = 1
                })
            });
            for (var c in r) r[c] == t.length && e.push(c);
            return e
        }, X.cellsToUnits = function (t, e) {
            var r = [],
                c = [],
                i = 0,
                l = function () {
                    r.push(c), c = []
                },
                o = X.arrayToObject(e),
                s = function () {
                    X.formatTimeLineDuration(i) in o && l()
                };
            return X.arrayEach(t, function (t) {
                if (X.isNote(t)) s(), i += t.getRealDuration();
                else if (X.isBar(t)) return i += 1, l(), c.push(t), void l();
                c.push(t)
            }), l(), r
        }, X.mergePartUnits = function (t) {
            var e = X.arrayMax(X.arrayMap(t, function (t) {
                    return t.length
                })),
                r = [];
            return X.notDefined(e) ? r : (X.for(0, e, function (e) {
                var c = X.newUnitSet();
                X.arrayEach(t, function (t) {
                    e < t.length && c.pushUnit(t[e])
                }), r.push(c)
            }), r)
        }, X.newTimeSignature = function (t) {
            var e = t.split(/\s+/),
                r = [];
            return X.arrayEach(e, function (t) {
                var e = t.split("/");
                2 == e.length && r.push({
                    n: e[0],
                    m: e[1]
                })
            }), {
                type: "time_signature",
                values: r,
                getWidth: function () {
                    return X.config.timeSignatureWidth * this.values.length
                },
                getTimeSignature: function () {
                    return this.values.isEmpty() ? {
                        n: 4,
                        m: 4
                    } : this.values.first()
                },
                toSvg: function (t, e) {
                    var r = "";
                    return X.arrayEach(this.values, function (c, i) {
                        var l = {
                            x: t + X.config.timeSignatureWidth * i,
                            y: e
                        };
                        r += X.svg.renderUse("paihao_xian", l), l.x += 10, l.y = e - 12, r += X.svg.renderUse("shuzi_c_bian_" + c.n, l), l.y = e + 12, r += X.svg.renderUse("shuzi_c_bian_" + c.m, l)
                    }), r
                }
            }
        }, X.newTmpTimeSignature = function (t, e) {
            return X.newCell("tmp_time_signature", {
                n: X.oneValue(t, 4),
                m: X.oneValue(e, 4),
                getTimeSignature: function () {
                    return {
                        n: this.n,
                        m: this.m
                    }
                },
                getWidth: function () {
                    return X.config.tmpTimeSignatureWidth
                },
                getHeight: function () {
                    return X.config.tmpTimeSignatureHeight
                },
                getGapLeft: function () {
                    return X.config.normalGapDistance
                },
                getGapRight: function () {
                    return X.config.normalGapDistance + 5
                },
                toElements: function () {
                    return X.svg.newTmpTimeSignatureElements(this)
                }
            })
        }, X.newKeySignature = function (t) {
            return {
                type: "key_signature",
                values: X.parseKeySignature(t),
                getWidth: function () {
                    return X.config.keySignatureWidth * this.values.length
                },
                getFirstKeySignatureString: function () {
                    return this.values.isEmpty() ? "" : this.values.first().accidental + this.values.first().key
                },
                toSvg: function (t, e) {
                    var r = "";
                    return X.arrayEach(this.values, function (c, i) {
                        var l = {
                            x: t + X.config.keySignatureWidth * i,
                            y: e
                        };
                        switch (r += X.svg.renderUse("diaohao_fu", l), c.accidental) {
                            case "b":
                                l.x += 45, r += X.svg.renderUse("bianyinfu_jiang", l);
                                break;
                            case "#":
                                l.x += 45, r += X.svg.renderUse("bianyinfu_sheng", l);
                                break;
                            default:
                                l.x += 40
                        }
                        r += X.svg.renderUse("diaohao_zimu_" + c.key.toLowerCase(), l)
                    }), r
                }
            }
        }, X.getKeySignature = function () {
            return X.config.keySignature || (X.config.keySignature = X.newKeySignature("")), X.config.keySignature
        }, X.parseKeySignature = function (t) {
            var e = [],
                r = t.split(/\s+/);
            return X.arrayEach(r, function (t) {
                switch (t = t.replace(/\d/, ""), t.length) {
                    case 1:
                        e.push({
                            key: t.charAt(0).toUpperCase(),
                            accidental: ""
                        });
                        break;
                    case 2:
                        e.push({
                            key: t.charAt(1).toUpperCase(),
                            accidental: t.charAt(0).toLowerCase()
                        })
                }
            }), e
        }, X.kKeyValue = "key_value", X.kBreakRow = "break_row", X.kBreakPage = "break_page", X.kEol = "eol", X.newKeyValue = function (t, e) {
            switch (t.toLowerCase()) {
                case "chord":
                case "cn":
                    return X.newCell("chord_name", {
                        value: e
                    });
                case "cf":
                    return X.newCell("chord_font", {
                        value: e
                    });
                case "cl":
                    return X.newCell("chord_loop", {
                        value: X.valueOnOff(e)
                    });
                case "df":
                    return X.newCell("drum_font", {
                        value: e
                    });
                case "mf":
                    return X.newCell("metronome_font", {
                        value: e
                    });
                case "fn":
                    return X.newCell("finger_num", {
                        value: e
                    });
                case "nc":
                    return X.newCell("note_content", {
                        value: e
                    });
                case "tip":
                    return X.newCell("tip", {
                        value: e
                    });
                case "ct":
                    return X.newCell("tip", {
                        value: X.circleChar(e)
                    });
                case "text":
                    return X.newText(e);
                case "bold":
                    return X.newBoldText(e);
                case "head":
                    return X.newHeadText(e);
                case "row":
                    return X.newRowText(e);
                case "rest":
                    return X.newRest(e);
                case "omit":
                    return X.newOmitText(e);
                case "comment":
                    return X.newCell("comment", {
                        value: e
                    });
                case "time_signature":
                    X.config.timeSignature = X.newTimeSignature(e);
                    break;
                case "bpm":
                    return X.config.bpm ? X.newCell("bpm", {
                        value: e,
                        isFirst: !1
                    }) : (X.config.bpm = X.newBPM(e), X.newCell("bpm", {
                        value: e,
                        isFirst: !0
                    }));
                case "_bpm":
                    return X.newCell("bpm", {
                        value: e,
                        isFirst: !0
                    });
                case "octave":
                    X.config.octave = parseInt(e);
                    break;
                case "text_octave":
                    X.config.textOctave = parseInt(e);
                    break;
                case "reset":
                    X.reset(e);
                    break;
                case "np":
                case "name":
                    return X.newKeyValue(X.kNewPart, e);
                case "paragraph":
                    return X.lex.newSection(e, X.sectionType.paragraph);
                case "section":
                    return X.lex.newSection(e, X.sectionType.section);
                case "mark":
                    return X.lex.newSection(e, X.sectionType.mark);
                case "flag":
                    return X.lex.newSection(e, X.sectionType.flag);
                case "eol":
                    break;
                case "f":
                    return X.newCells([X.newKeyValue("o6f", e), X.newKeyValue("o12f", e), X.newKeyValue("x8f", e), X.newKeyValue("x10f", e), X.newKeyValue("h7f", e)]);
                case "ff":
                    return X.newCells([X.newKeyValue("a6f", e), X.newKeyValue("o6f", e), X.newKeyValue("o12f", e), X.newKeyValue("o3f", e), X.newKeyValue("x8f", e), X.newKeyValue("x10f", e), X.newKeyValue("p8f", e), X.newKeyValue("h7f", e)]);
                case "instrument":
                    switch (X.config.instrument = e.toLowerCase(), X.config.instrument) {
                        case "piano":
                            X.config.showTone = !0, X.config.showStyle = !0, X.config.showChordName = !0, X.config.showFingerNum = !0;
                            break;
                        case "guitar":
                            X.config.showChordName = !0
                    }
                    break;
                case "width":
                case "paper_width":
                    X.setPaperSize("a4", e);
                    break;
                case "height":
                case "paper_height":
                    X.setPaperHeight(e);
                    break;
                case "size":
                case "paper_size":
                    X.setPaperSize(e);
                    break;
                case "font":
                    switch (e) {
                        case "serif":
                            X.config.fontFamily = "PingFang SC, Microsoft YaHei, Noto Sans, Source Han Serif SC, sans-serif;", X.config.fontWeightNormal = 500, X.config.fontSizeLyric = 22;
                            break;
                        case "sans":
                            X.config.fontFamily = "PingFang SC, Microsoft YaHei, Noto Sans, Source Han Sans SC, sans-serif;", X.config.fontWeightNormal = 400, X.config.fontSizeLyric = 22
                    }
                    break;
                case "skin":
                    switch (e) {
                        case "dark":
                            X.config.fontColor = "#ffffff", X.config.blueColor = "#bbdefb", X.config.purpleColor = "#e1bee7", X.config.backgroundColor = "#455a64"
                    }
                    break;
                default:
                    X.config[X.lineToHump(t)] = X.valueOnOff(e)
            }
            return X.newCell(X.kKeyValue, {
                key: t,
                value: e,
                getDescription: function () {
                    return X.describeCell(this, {
                        key: this.key,
                        value: this.value
                    })
                }
            })
        }, X.isKeyValue = function (t) {
            return t.type && t.type == X.kKeyValue
        }, X.reset = function (t) {
            switch (X.execReset(), t) {
                case X.kScreen:
                    X.config.media = X.kScreen, X.config.debug = 0, X.config.svgDebug = 0;
                    break;
                case X.kPrint:
                    X.config.media = X.kPrint, X.config.debug = 0, X.config.svgDebug = 0;
                    break;
                case X.kDebug:
                    X.config.debug = 1, X.config.svgDebug = 1
            }
        }, X.newTag = function (t) {
            switch (t) {
                case "nl2br":
                    if (X.config.paperWidth >= X.config.standardWidth) {
                        if (X.isGraphNone()) {
                            var e = X.config.paperWidth / X.config.standardWidth;
                            X.setPaperWidth(X.config.paperWidth / e), X.setPaperHeight(X.config.paperHeight / e)
                        }
                        X.config.nl2br = !0
                    }
                    break;
                case "np":
                    return X.newKeyValue(X.kNewPart, "");
                case "empty_bar":
                    return X.newBar(X.barType.blankBar);
                case "tbc":
                    var r = X.newText("▽");
                    return r.fontSize = 22, r.fontColor = X.config.purpleColor, r;
                case "san":
                    var c = X.newText("サ");
                    return c.fontSize = 22, c.fontColor = X.config.purpleColor, c;
                case "hot":
                    X.config[t] = 1;
                    break;
                case "jembe":
                    X.lex.context.lang = X.langType.jembe;
                    break;
                case "jembe_end":
                    X.lex.context.lang = X.langType.default
            }
            return X.newCell("tag", {
                value: t
            })
        }, X.isTag = function (t, e) {
            return e ? t.type && "tag" == t.type && t.value == e : t.type && "tag" == t.type
        }, X.newThan = function (t) {
            return X.newCell("than", {
                thanType: t,
                cells: [],
                pushCell: function (t) {
                    this.cells.push(t)
                }
            })
        }, X.thanType = {
            greatThan: "great_than",
            lessThan: "less_than"
        }, X.newRest = function (t) {
            return X.newCell("rest", {
                value: t,
                getWidth: function () {
                    return X.config.restWidth
                },
                toElements: function () {
                    return [X.svg.newRestElement(this)]
                }
            })
        }, X.midi = {
            middleCMidiNumber: 60,
            defaultCMidiNumber: 72,
            getNoteMidiNumber: function (t) {
                if (0 == t.scale) return 0;
                var e = [0, 0, 2, 4, 5, 7, 9, 11];
                return this.middleCMidiNumber + 12 * t.octave + e[t.scale] + t.accidental
            },
            getNoteRealMidiNumber: function (t, e) {
                return this.getNoteMidiNumber(t) - this.middleCMidiNumber + e
            },
            setNoteMidiNumberFlat: function (t, e) {
                var r = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7],
                    c = [0, -1, 0, -1, 0, 0, -1, 0, -1, 0, -1, 0];
                t.scale = r[e % 12], t.content = t.scale + "", t.octave = parseInt(e / 12) - 5, t.accidental = c[e % 12]
            },
            setNoteMidiNumberSharp: function (t, e) {
                var r = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7],
                    c = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];
                t.scale = r[e % 12], t.content = t.scale + "", t.octave = parseInt(e / 12) - 5, t.accidental = c[e % 12]
            },
            midiNumberToKeyType: function (t) {
                var e = this.midiNumberToShortName(t);
                return "C" == e ? 0 : X.inArray(e, ["G", "D", "A", "E", "B", "#F", "#C"]) ? 1 : -1
            },
            midiNumberToName: function (t) {
                var e = this.midiNumberToSpan(t);
                return this.midiNumberToShortName(t) + e
            },
            midiNumberToShortName: function (t) {
                var e = (parseInt(t) - 60) % 12;
                0 > e && (e += 12);
                var r = {
                        60: "C",
                        61: "bD",
                        62: "D",
                        63: "bE",
                        64: "E",
                        65: "F",
                        66: "bG",
                        67: "G",
                        68: "bA",
                        69: "A",
                        70: "bB",
                        71: "B"
                    },
                    c = t + "";
                return c.indexOf("#") >= 0 ? (r[61] = "#C", r[66] = "#F") : c.indexOf("b") >= 0 && (r[71] = "bC"), r[e + 60]
            },
            midiNumberToSpan: function (t) {
                return Math.floor((t - this.middleCMidiNumber) / 12) + 4
            },
            formatKeyName: function (t) {
                return t ? (t = t.replace(/\d/, "").toUpperCase(), t.length > 1 && (t = t.charAt(0).toLowerCase() + t.substr(1)), t) : ""
            },
            keyNameToMidiNumber: function (t, e) {
                t = X.oneValue(t, "C");
                var r = {
                    C4: 60,
                    "#C4": 61,
                    BD4: 61,
                    D4: 62,
                    "#D4": 63,
                    BE4: 63,
                    E4: 64,
                    F4: 65,
                    "#F4": 66,
                    BG4: 66,
                    G4: 67,
                    "#G4": 68,
                    BA4: 68,
                    A4: 69,
                    "#A4": 70,
                    BB4: 70,
                    B4: 71,
                    "#G3": 56,
                    BA3: 56,
                    A3: 57,
                    "#A3": 58,
                    BB3: 58,
                    B3: 59,
                    C0: 12,
                    C1: 24,
                    C2: 36,
                    C3: 48,
                    C5: 72,
                    C6: 84,
                    C7: 96,
                    C8: 108,
                    "#C0": 13,
                    "#C1": 25,
                    "#C2": 37,
                    "#C3": 49,
                    "#C5": 73,
                    "#C6": 85,
                    "#C7": 97,
                    "#C8": 109,
                    BD0: 13,
                    BD1: 25,
                    BD2: 37,
                    BD3: 49,
                    BD5: 73,
                    BD6: 85,
                    BD7: 97,
                    BD8: 109,
                    D0: 14,
                    D1: 26,
                    D2: 38,
                    D3: 50,
                    D5: 74,
                    D6: 86,
                    D7: 98,
                    D8: 110,
                    "#D0": 15,
                    "#D1": 27,
                    "#D2": 39,
                    "#D3": 51,
                    "#D5": 75,
                    "#D6": 87,
                    "#D7": 99,
                    "#D8": 111,
                    BE0: 15,
                    BE1: 27,
                    BE2: 39,
                    BE3: 51,
                    BE5: 75,
                    BE6: 87,
                    BE7: 99,
                    BE8: 111,
                    E0: 16,
                    E1: 28,
                    E2: 40,
                    E3: 52,
                    E5: 76,
                    E6: 88,
                    E7: 100,
                    E8: 112,
                    F0: 17,
                    F1: 29,
                    F2: 41,
                    F3: 53,
                    F5: 77,
                    F6: 89,
                    F7: 101,
                    F8: 113,
                    "#F0": 18,
                    "#F1": 30,
                    "#F2": 42,
                    "#F3": 54,
                    "#F5": 78,
                    "#F6": 90,
                    "#F7": 102,
                    "#F8": 114,
                    BG0: 18,
                    BG1: 30,
                    BG2: 42,
                    BG3: 54,
                    BG5: 78,
                    BG6: 90,
                    BG7: 102,
                    BG8: 114,
                    G0: 19,
                    G1: 31,
                    G2: 43,
                    G3: 55,
                    G5: 79,
                    G6: 91,
                    G7: 103,
                    G8: 115,
                    "#G0": 20,
                    "#G1": 32,
                    "#G2": 44,
                    "#G5": 80,
                    "#G6": 92,
                    "#G7": 104,
                    "#G8": 116,
                    BA0: 20,
                    BA1: 32,
                    BA2: 44,
                    BA5: 80,
                    BA6: 92,
                    BA7: 104,
                    BA8: 116,
                    A0: 21,
                    A1: 33,
                    A2: 45,
                    A5: 81,
                    A6: 93,
                    A7: 105,
                    A8: 117,
                    "#A0": 22,
                    "#A1": 34,
                    "#A2": 46,
                    "#A5": 82,
                    "#A6": 94,
                    "#A7": 106,
                    "#A8": 118,
                    BB0: 22,
                    BB1: 34,
                    BB2: 46,
                    BB5: 82,
                    BB6: 94,
                    BB7: 106,
                    BB8: 118,
                    B0: 23,
                    B1: 35,
                    B2: 47,
                    B5: 83,
                    B6: 95,
                    B7: 107,
                    B8: 119
                };
                if (t = t.toUpperCase(), e || (e = {
                        A: 60,
                        "#A": 60,
                        BB: 60,
                        B: 60
                    } [t], e = e || this.defaultCMidiNumber), t.match(/\d$/)) {
                    if (1 == X.config.version) return X.objectHas(r, t) ? r[t] + 12 : e
                } else t += this.midiNumberToSpan(e).toString();
                return X.objectHas(r, t) ? r[t] : e
            }
        }, X.midi.transposer = {
            transposeMap: {},
            hideReplicatedAccidental: !1,
            handleCell: function (t) {
                if (t.type)
                    if (X.isBar(t) || X.isEof(t)) this.transposeMap = {};
                    else if (X.isTag(t)) switch (t.value) {
                    case "hra":
                        this.hideReplicatedAccidental = !0;
                        break;
                    case "sra":
                        this.hideReplicatedAccidental = !1
                }
            },
            transposeNote: function (t, e, r) {
                if ((r || 0 != (r = X.midi.midiNumberToKeyType(e))) && 0 != (e = parseInt(e))) {
                    var c = function (t) {
                        var c = X.midi.getNoteMidiNumber(t);
                        1 > c || (r > 0 ? X.midi.setNoteMidiNumberSharp(t, c + e) : X.midi.setNoteMidiNumberFlat(t, c + e))
                    };
                    c(t);
                    var i = t.scale + ":" + t.octave;
                    t.accidental ? this.transposeMap[i] == t.accidental ? t.hideAccidental = this.hideReplicatedAccidental : this.transposeMap[i] = t.accidental : this.transposeMap[i] ? (this.transposeMap[i] = 0, t.natural = 1) : t.natural = 0, X.arrayEach(t.leftAppoggiatura.notes, function (t) {
                        c(t)
                    }), X.arrayEach(t.rightAppoggiatura.notes, function (t) {
                        c(t)
                    })
                }
            },
            format: function (t, e) {
                return e += "", e && e.indexOf("#") >= 0 ? t + "#" : e && e.indexOf("b") >= 0 ? t + "b" : t
            }
        }, X.instrument = {
            match: {
                perfect: 2,
                good: 1,
                bad: 0
            },
            status: {
                on: 1,
                off: 0
            },
            parseAllFingerings: function (t, e) {
                console.log(t)
                console.log(e)
                var r = this,
                    c = {
                        instruments: [],
                        fingerings: [],
                        tonalities: [],
                        scores: [],
                        instrumentFingerings: []
                    };
                return X.arrayEach(e, function (e) {
                    var i = r.parseFingerings(e, t);
                    if (i.fingeringSets = r.combineFingerings(i.fingeringsList), !i.fingeringSets.isEmpty()) {
                        var l = r.extractFingerings(i.fingeringsList);
                        c.fingerings = X.arrayMerge(c.fingerings, l.fingerings), c.tonalities = X.arrayMerge(c.tonalities, l.tonalities), c.scores = X.arrayMerge(c.scores, r.extractScores(i)), l.fingerings.notEmpty() && c.instruments.push(e), c.instrumentFingerings.push(i)
                    }
                }), c
            },
            combineFingerings: function (t) {
                var e = [],
                    r = 1,
                    c = [];
                return X.arrayEach(t, function (t) {
                    r *= t.length, c.push(0)
                }), 1 > r ? e : (r > 5 && (r = 1), X.for(0, r, function (r) {
                    for (var i, l = t.length - 1; l >= 0; l--) i = t[l], c[l] = r % i.length, r = Math.floor(r / i.length);
                    var o = [];
                    X.arrayEach(c, function (e, r) {
                        o.push(t[r][e])
                    }), e.push(o)
                }), e)
            },
            extractScores: function (t) {
                var e = this,
                    r = [];
                return X.arrayEach(t.fingeringSets, function (c) {
                    var i = [],
                        l = [];
                    X.arrayEach(c, function (t) {
                        return t.match != e.match.perfect ? (i = [], X.break) : (i.push(t.fingering), void l.push(t.fingeringName + "调指法"))
                    }), i.notEmpty() && r.push({
                        tag: t.instrument + "@f" + i.join("+") + "@g",
                        name: t.instrumentName + l.join("+") + "图谱"
                    })
                }), r.notEmpty() && (r.first().best = 1), r
            },
            extractFingerings: function (t) {
                var e = this,
                    r = {
                        fingerings: {},
                        tonalities: {}
                    };
                return X.arrayEach(t, function (t) {
                    X.arrayEach(t, function (t) {
                        t.match == e.match.perfect && (r.fingerings[t.instrument + "-" + t.fingeringName] = 1, t.tonalityName && (r.tonalities[t.instrument + "-" + t.tonalityName] = 1))
                    })
                }), {
                    fingerings: X.objectKeys(r.fingerings),
                    tonalities: X.objectKeys(r.tonalities)
                }
            },
            parseFingerings: function (t, e) {
                var r = this,
                    c = r.newContext(),
                    i = {
                        instrument: t,
                        instrumentName: r.instrumentName(t),
                        fingeringsList: []
                    },
                    l = function () {
                        if (!(c.maxNoteNumber < 1)) {
                            c.avaibleFingerings.isEmpty() && (c.avaibleFingerings = r.calcAvaiableFingerings(c, t));
                            var e = [];
                            X.arrayEach(c.avaibleFingerings, function (i) {
                                e.push(r.newFingering(c, t, i))
                            }), i.fingeringsList.push(e), r.resetContext(c)
                        }
                    };
                return X.arrayEach(e, function (e) {
                    switch (e.type) {
                        case "prelude_begin":
                            c.status = r.status.off;
                            break;
                        case "prelude_end":
                            c.status = r.status.on;
                            break;
                        case X.kKeyValue:
                            switch (e.key) {
                                case "key_signature":
                                case "tmp_key_signature":
                                    l(), c.keySignature = e.value;
                                    break;
                                case t + "f":
                                    switch (e.value) {
                                        case "on":
                                            c.status = r.status.on;
                                            break;
                                        case "off":
                                            c.status = r.status.off;
                                            break;
                                        case "auto":
                                            l();
                                            break;
                                        default:
                                            l(), c.avaibleFingerings = e.value.split(",")
                                    }
                                    break;
                                case "graph":
                                    c.status = X.valueOnOff(e.value) ? r.status.on : r.status.off
                            }
                            break;
                        case "note":
                            if (!c.status) return;
                            var i = X.midi.getNoteMidiNumber(e);
                            i > 0 && ((0 == c.minNoteNumber || i < c.minNoteNumber) && (c.minNoteNumber = i), (0 == c.maxNoteNumber || i > c.maxNoteNumber) && (c.maxNoteNumber = i))
                    }
                }), l(), i
            },
            calcAvaiableFingerings: function (t, e) {
                var r = this;
                switch (e) {
                    case "p8":
                        return r.calcAvaiableFingeringsForXiao(t, e, ["F4", "bB4", "C4", "C5", "bE4", "bA4"]);
                    case "h7":
                        return r.calcAvaiableFingeringsForXiao(t, e, ["F5", "C5", "bB4", "F4", "C4"]);
                    case "a6":
                        return r.calcAvaiableFingeringsForXiao(t, e, ["C5", "F5", "C6", "F4", "C4"]);
                    default:
                        return r.calcAvaiableFingeringsForOcarina(t, e)
                }
            },
            calcAvaiableFingeringsForOcarina: function (t, e) {
                var r, c = this,
                    i = t.minNoteNumber,
                    l = t.maxNoteNumber,
                    o = t.keySignature,
                    s = X.midi.keyNameToMidiNumber(o),
                    n = {
                        60: "C4",
                        65: "F4",
                        67: "G4",
                        79: "G5",
                        77: "F5",
                        72: "C5",
                        84: "C6"
                    },
                    f = {
                        62: "D4",
                        70: "bB4",
                        74: "D5",
                        82: "bB5"
                    },
                    h = [],
                    a = function (t, o) {
                        var n = 0;
                        for (var f in t) {
                            var a = f - X.midi.middleCMidiNumber;
                            if (c.rangeMatch(e, i + a, l + a) == o) {
                                var k = t[f];
                                h.push(k);
                                var d = i + l + 2 * a;
                                Math.abs(d - 158) <= Math.abs(n - 158) && (r = k, n = (s - a) % 12 == 0 ? 158 : d)
                            }
                        }
                    },
                    k = function (t) {
                        switch (e) {
                            case "o12":
                                d(c.ocarinaTonalityMidiNumberMap().BC, t), d(c.ocarinaTonalityMidiNumberMap().SC, t), d(c.ocarinaTonalityMidiNumberMap().SG, t), d(c.ocarinaTonalityMidiNumberMap().SF, t), d(c.ocarinaTonalityMidiNumberMap().AF, t), d(c.ocarinaTonalityMidiNumberMap().AG, t), d(c.ocarinaTonalityMidiNumberMap().AC, t);
                                break;
                            case "o6":
                                d(c.ocarinaTonalityMidiNumberMap().AC, t);
                                break;
                            case "o3":
                                d(c.ocarinaTonalityMidiNumberMap().AF, t), d(c.ocarinaTonalityMidiNumberMap().AG, t), d(c.ocarinaTonalityMidiNumberMap().AC, t);
                                break;
                            case "x8":
                            case "x10":
                                d(c.ocarinaTonalityMidiNumberMap().AG, t), d(c.ocarinaTonalityMidiNumberMap().AF, t);
                                break;
                            case "r8b":
                            case "r8g":
                                d(c.recorderTonalityMidiNumberMap().GreatBass, t), d(c.recorderTonalityMidiNumberMap().Bass, t), d(c.recorderTonalityMidiNumberMap().Tenor, t), d(c.recorderTonalityMidiNumberMap().Sopranino, t), d(c.recorderTonalityMidiNumberMap().Alto, t), d(c.recorderTonalityMidiNumberMap().Soprano, t)
                        }
                    },
                    d = function (t, o) {
                        var f = s - t + X.midi.defaultCMidiNumber,
                            a = X.midi.midiNumberToName(f),
                            k = function (t) {
                                return t - X.midi.middleCMidiNumber + f
                            },
                            d = c.rangeMatch(e, k(i), k(l));
                        if (d) {
                            if (d != o) return;
                            n[f] ? d == c.match.perfect && (r = a) : h.push(a)
                        }
                    };
                a(n, c.match.perfect), k(c.match.perfect), h.length < 1 && a(f, c.match.perfect), h.length < 1 && (a(n, c.match.good), k(c.match.good)), h.length < 1 && a(f, c.match.good), h.length < 1 && (a(n, c.match.bad), h = []);
                var w = [];
                return r && w.push(r), X.arrayEach(h, function (t) {
                    r && t == r || w.push(t)
                }), w
            },
            calcAvaiableFingeringsForXiao: function (t, e, r) {
                var c, i = this,
                    l = t.minNoteNumber,
                    o = t.maxNoteNumber,
                    s = [],
                    n = function (t, r) {
                        for (var n = 0; n < t.length; n++) {
                            var f = t[n],
                                h = X.midi.keyNameToMidiNumber(f),
                                a = h - X.midi.middleCMidiNumber;
                            i.rangeMatch(e, l + a, o + a) == r && (s.push(f), c || (c = f))
                        }
                    };
                n(r, i.match.perfect), s.length < 1 && n(r, i.match.good), s.length < 1 && (c = r[0], s = []);
                var f = [];
                return c && f.push(c), X.arrayEach(s, function (t) {
                    c && t == c || f.push(t)
                }), f
            },
            newFingering: function (t, e, r) {
                var c = X.midi.keyNameToMidiNumber(r),
                    i = c - X.midi.middleCMidiNumber,
                    l = function (t) {
                        return t + i
                    },
                    o = X.midi.keyNameToMidiNumber(t.keySignature),
                    s = o - c + X.midi.defaultCMidiNumber,
                    n = this.calcTonalityName(e, s);
                return {
                    instrument: e,
                    fingering: r,
                    fingeringName: X.midi.formatKeyName(r),
                    tonalityName: n,
                    match: this.rangeMatch(e, l(t.minNoteNumber), l(t.maxNoteNumber))
                }
            },
            newContext: function () {
                return {
                    minNoteNumber: 0,
                    maxNoteNumber: 0,
                    keySignature: "C",
                    avaibleFingerings: [],
                    status: this.status.on
                }
            },
            resetContext: function (t) {
                return t.minNoteNumber = 0, t.maxNoteNumber = 0, t.avaibleFingerings = [], t
            },
            rangeMatch: function (t, e, r) {
                switch (t) {
                    case "a6":
                        return e >= 69 && 89 >= r ? this.match.perfect : e >= 60 && 100 >= r ? this.match.good : this.match.bad;
                    case "o6":
                        return e >= 72 && 87 >= r ? this.match.perfect : e >= 69 && 89 >= r ? this.match.good : this.match.bad;
                    case "o12":
                        return e >= 69 && 89 >= r ? this.match.perfect : e >= 67 && 91 >= r ? this.match.good : this.match.bad;
                    case "o3":
                        return e >= 69 && 103 >= r ? this.match.perfect : e >= 67 && 105 >= r ? this.match.good : this.match.bad;
                    case "x8":
                        return e >= 72 && 89 >= r ? this.match.perfect : e >= 69 && 89 >= r ? this.match.good : this.match.bad;
                    case "x10":
                        return e >= 72 && 91 >= r ? this.match.perfect : e >= 69 && 91 >= r ? this.match.good : this.match.bad;
                    case "r8b":
                    case "r8g":
                        return e >= 72 && 87 >= r ? this.match.perfect : e >= 72 && 98 >= r ? this.match.good : this.match.bad;
                    case "p8":
                        return e >= 60 && 91 >= r ? this.match.perfect : this.match.bad;
                    case "h7":
                        return e >= 72 && 86 >= r ? this.match.perfect : e >= 69 && 86 >= r ? this.match.good : this.match.bad;
                    default:
                        return this.match.bad
                }
            },
            calcTonalityName: function (t, e) {
                switch (t) {
                    case "h7":
                    case "a6":
                        tonalityName = X.midi.midiNumberToShortName(e);
                        break;
                    case "o6":
                    case "o12":
                    case "o3":
                        tonalityName = this.midiNumberToTonalityName(e, this.ocarinaTonalityMidiNumberMap());
                        break;
                    case "r8b":
                    case "r8g":
                        tonalityName = this.midiNumberToTonalityName(e, this.recorderTonalityMidiNumberMap());
                        break;
                    default:
                        tonalityName = ""
                }
                return tonalityName
            },
            midiNumberToTonalityName: function (t, e) {
                for (var r in e)
                    if (e[r] == t) return r;
                return ""
            },
            ocarinaTonalityMidiNumberMap: function () {
                return {
                    BF: 53,
                    BG: 55,
                    BC: 60,
                    AF: 65,
                    AG: 67,
                    AC: 72,
                    SF: 77,
                    SG: 79,
                    SC: 84
                }
            },
            recorderTonalityMidiNumberMap: function () {
                return {
                    GreatBass: 48,
                    Bass: 53,
                    Tenor: 60,
                    Alto: 65,
                    Soprano: 72,
                    Sopranino: 77
                }
            },
            instrumentName: function (t) {
                return X.oneValue({
                    a6: "六筒陶笛(APP)",
                    ak: "测试",
                    o6: "六孔陶笛",
                    o12: "十二孔陶笛",
                    o3: "三管陶笛",
                    r8b: "英式八孔竖笛",
                    r8g: "德式八孔竖笛",
                    x8: "八孔埙",
                    x10: "十孔埙",
                    p8: "八孔洞箫",
                    h7: "葫芦丝",
                    none: "简谱(无图谱)"
                } [t], "")
            },
            getPlayHint: function (t, e, r) {
                r = X.midi.formatKeyName(r);
                var c = this,
                    i = function () {
                        var t = c.holesFullPressedNote(r);
                        return t ? X.sprintf("(筒音作%s)", t) : ""
                    };
                switch (t) {
                    case "a6":
                        return X.sprintf("六筒陶笛%s调指法(根音：%s)", r, e);
                    case "o6":
                        return X.sprintf("六孔%s陶笛%s调指法", e, r);
                    case "o12":
                        return X.sprintf("十二孔%s陶笛%s调指法", e, r);
                    case "o3":
                        return X.sprintf("三管%s陶笛%s调指法", e, r);
                    case "x8":
                        return X.sprintf("八孔埙%s调指法", r);
                    case "x10":
                        return X.sprintf("十孔埙%s调指法", r);
                    case "r8b":
                        return X.sprintf("英式八孔竖笛%s调指法", r);
                    case "r8g":
                        return X.sprintf("德式八孔竖笛%s调指法", r);
                    case "p8":
                        return X.sprintf("八孔箫%s调指法%s", r, i());
                    case "h7":
                        return X.sprintf("葫芦丝%s调指法%s", r, i());
                    default:
                        return ""
                }
            },
            holesFullPressedNote: function (t) {
                return X.oneValue({
                    C: "1",
                    F: "5",
                    G: "4",
                    D: "b7",
                    bB: "2",
                    "#C": "7",
                    bD: "7",
                    "#D": "6",
                    bE: "6",
                    E: "b6",
                    "#F": "b5",
                    bG: "b5",
                    "#G": "3",
                    bA: "3",
                    A: "b3",
                    "#A": "2",
                    B: "b2"
                } [t], "")
            }
        }, X.parseLyric = function (t) {
            t = t.replace("　", " ");
            for (var e = ",.!?，、。！？", r = "(（", c = ")）", i = ";；@＠_/", l = [], o = "", s = 0, n = function () {
                    o.length && (l.push(o), o = "")
                }; s < t.length;) {
                if (-1 != e.indexOf(t[s])) n(), l[l.length - 1] += t[s];
                else if (-1 != r.indexOf(t[s])) {
                    for (n();;) {
                        if (++s >= t.length) return l;
                        if (-1 != c.indexOf(t[s])) break;
                        o += t[s]
                    }
                    l.push(o), o = ""
                } else if (-1 != i.indexOf(t[s])) n(), l.push("");
                else if (t.charCodeAt(s) > 255) n(), l.push(t[s]);
                else switch (t[s]) {
                    case "\n":
                    case "\r":
                    case " ":
                        n();
                        break;
                    default:
                        o += t[s]
                }
                s++
            }
            return n(), l
        }, X.isLyric = function (t) {
            return t.type && "lyric" == t.type
        }, X.getLyricFontSize = function () {
            if ("string" == typeof X.config.showLyric) switch (X.config.showLyric) {
                case "large":
                    return 22;
                case "small":
                    return 18
            }
            return X.config.fontSizeLyric
        }, X.getLyricTextWidth = function (t) {
            return t ? X.fontWidth(t, X.getLyricFontSize()) : 0
        }, X.getLyricLeftWidth = function (t) {
            if (!t) return 0;
            var e = 0,
                r = t.match(/^(.+[.:：])([^.].*)$/);
            return r && (e = X.getLyricTextWidth(r[1]), t = r[2]), e += .5 * (Math.min(X.getLyricTextWidth(t), X.getLyricFontSize()) - X.config.noteContentWidth)
        }, X.getLyricRightWidth = function (t) {
            return X.getLyricTextWidth(t) - X.getLyricLeftWidth(t)
        }, X.dp = {
            calc: function (t, e, r) {
                var c, i, l, o, s = t.length,
                    n = t,
                    f = e,
                    h = [0],
                    a = {
                        0: 0
                    };
                for (n.unshift(0), c = 1; s >= c; c++) {
                    for (l = -1, o = c, i = c; i >= 1; i--) {
                        var k = function (t, e) {
                            for (var c = f - (e - t) * r, i = t; e >= i; i++)
                                if ((c -= n[i]) < 0) return -1;
                            return Math.pow(c, 3)
                        }(i, c);
                        if (0 > k) break;
                        var d = h[i - 1] + k;
                        (0 > l || l > d) && (l = d, o = i)
                    }
                    h[c] = l, a[c] = o
                }
                var w = [];
                for (c = s; c > 0; c = a[c] - 1) w.unshift(c - a[c] + 1);
                return w
            }
        }, X.parser = {
            parse: function (t) {
                X.parser.handleGraphSheetScale();
                var e = X.parser.expandCells(t.cells),
                    r = X.parser.slurToCells(e),
                    c = {
                        cells: X.parser.handleCells(r)
                    };
                X.extend(c, X.parser.handleLyric(c)), X.extend(c, X.parser.handleSlurs({
                    cells: e
                })), X.extend(c, X.parser.handleTranspose(c)), X.extend(c, X.parser.handleFingering(c)), X.extend(c, X.parser.handleGraph(c)), X.extend(c, X.parser.handleRepeatParts({
                    cells: r
                })), X.extend(c, X.parser.handleThans({
                    cells: r
                })), X.extend(c, X.parser.handlePart(c)), X.extend(c, X.parser.handleGroup(c));
                var i = c.cells;
                return X.extend(c, X.parser.expandGroup(c)), X.extend(c, X.parser.handleMeasure(c)), X.extend(c, X.parser.handleNl2Br(c)), X.extend(c, X.parser.handleConfig()), X.extend(c, X.parser.generateMidiNote({
                    cells: i
                })), c
            },
            expandCells: function (t) {
                var e = [],
                    r = function (t, c) {
                        X.arrayEach(t, function (t) {
                            c && (t.firstLine = c.firstLine, t.firstColumn = c.firstColumn, t.lastLine = c.lastLine, t.lastColumn = c.lastColumn), "cells" == t.type ? r(t.cells, t) : e.push(t)
                        })
                    };
                return r(t), e
            },
            slurToCells: function (t) {
                var e = [],
                    r = function (t) {
                        X.arrayEach(t, function (t) {
                            e.push(t), (X.isSlur(t) || "cells" == t.type) && r(t.cells)
                        })
                    };
                return r(t), e
            }
        }, X.parse = function (t) {
            return X.parser.parse({
                cells: t
            })
        }, X.parser.handleCells = function (t) {
            var e, r, c = [],
                i = [],
                l = !0,
                o = "right",
                s = {},
                n = X.config.timeSignature ? X.config.timeSignature.getTimeSignature() : {
                    n: 4,
                    m: 4
                },
                f = {
                    leftAppoggiatura: null,
                    accidental: 0,
                    natural: 0,
                    timeSignature: n,
                    chordFont: function () {
                        var t = {
                                "2/4": "c24",
                                "4/4": "c44",
                                "3/4": "b34",
                                "3/8": "b38",
                                "6/8": "b68"
                            },
                            e = n.n + "/" + n.m;
                        return e in t ? t[e] : ""
                    }(),
                    chordLoop: !0,
                    drumFont: "default",
                    metronomeFont: "default",
                    flag: null,
                    chordNames: [],
                    writeBuffer: function () {
                        this.leftAppoggiatura && (e.leftAppoggiatura = this.leftAppoggiatura, this.leftAppoggiatura = null), this.accidental && (e.accidental = this.accidental, this.accidental = null), this.natural && (e.natural = this.natural, this.natural = null), this.flag && (e.flag = this.flag, this.flag = null), e.timeSignature = this.timeSignature, e.chordFont = this.chordFont, e.chordLoop = this.chordLoop, e.drumFont = this.drumFont, e.metronomeFont = this.metronomeFont, e.chordNames = this.chordNames, this.chordNames = []
                    }
                },
                h = function () {
                    if (e) {
                        var t = e.scale + ":" + e.octave;
                        e.accidental ? s[t] = e.accidental : e.natural ? s[t] = 0 : s[t] && (e.accidental = s[t], e.hideAccidental = l), e.shouldResetAccidentalMap && (s = {})
                    }
                },
                a = function () {
                    return "left" == o
                },
                k = function () {
                    return !a()
                };
            return X.arrayEach(t, function (t) {
                if (t.type) {
                    if (t = X.cellToBarMark(t), "tag" == t.type) X.keyword.getKeywordType(t.value) && (t = X.newKeyword(t.value));
                    else if (X.isBar(t) || X.isEof(t)) r = t, k() && e && (e.shouldResetAccidentalMap = !0);
                    else if ("key_value" == t.type) switch (t.key) {
                        case "accidental":
                            o = t.value;
                            break;
                        case X.kEol:
                            if (c.notEmpty()) {
                                var s = c.last();
                                if (X.isBar(s)) return void s.eolCount++
                            }
                    }
                    switch (t.isDrawable && t.isDrawable() && i.notEmpty() && (t.pushComments(i), i = []), t.type) {
                        case "note":
                            t.isMasterNote() ? (k() && h(), e = t, f.writeBuffer(), a() && h()) : e && (e.pushSlaveNote(t), e.pushLyricNote(t));
                            break;
                        case "bar_mark":
                            return void(r && r[t.markType].push(t));
                        case "left_appoggiatura":
                            return void(f.leftAppoggiatura = X.newLeftAppoggiatura(X.parser.handleCells(t.cells)));
                        case "right_appoggiatura":
                            return void(e && (e.getLastNote().rightAppoggiatura = X.newRightAppoggiatura(X.parser.handleCells(t.cells))));
                        case "tmp_time_signature":
                            f.timeSignature = t.getTimeSignature();
                            break;
                        case "chord_font":
                            f.chordFont = t.value;
                            break;
                        case "chord_loop":
                            f.chordLoop = t.value;
                            break;
                        case "drum_font":
                            f.drumFont = t.value;
                            break;
                        case "metronome_font":
                            f.metronomeFont = t.value;
                            break;
                        case "tag":
                            switch (t.value) {
                                case "br":
                                    t = X.newBreakRow();
                                    break;
                                case "hra":
                                    l = !0;
                                    break;
                                case "sra":
                                    l = !1;
                                    break;
                                case "blank":
                                case "kong":
                                    r && (r.type = X.barType.blankBar);
                                    break;
                                case "dashed":
                                case "xu":
                                    r && (r.type = X.barType.dashedBar)
                            }
                            break;
                        case "chord_name":
                            f.chordNames.push(t.value), X.config.hasChordName = !0, X.config.chordNameMap[t.value] = X.config.chordNameMap[t.value] ? X.config.chordNameMap[t.value] + 1 : 1;
                            break;
                        case "finger_num":
                            e && (e.fingerNums.push(t.value), X.config.hasFingerNum = !0);
                            break;
                        case "note_content":
                            e && (e.content = t.value);
                            break;
                        case "tip":
                            e && e.topTips.push(t.value);
                            break;
                        case "flag":
                            f.flag = t.value;
                            break;
                        case "keyword":
                            var n = t.getKeywordValue();
                            switch (t.getKeywordType()) {
                                case "LEFT_TIP":
                                    e && e.leftTips.push(n);
                                    break;
                                case "DOT":
                                    e && e.getLastNote().dotCount++;
                                    break;
                                case "TIE":
                                    e && (e.isTiedNote = !0);
                                    break;
                                case "RIGHT_TIP":
                                    e && e.getLastNote().rightTips.push(n);
                                    break;
                                case "ACCIDENTAL":
                                    var d = a() ? f : e;
                                    if (d) {
                                        var w = n;
                                        w ? d.accidental += w : d.natural = 1
                                    }
                                    break;
                                case "UNDER_BAR":
                                    e && (e.underBarCount += n);
                                    break;
                                case "OCTAVE":
                                    e && (e.octave += n);
                                    break;
                                case "TOP_TIP":
                                    e && e.topTips.push(n)
                            }
                            return;
                        case "bpm":
                            t.isFirst || i.push("[bpm=" + t.value + "]");
                            break;
                        case "comment":
                            return void i.push(t.value)
                    }
                    c.push(t)
                }
            }), c
        }, X.parser.handleSlurs = function (t) {
            var e = {
                    slurs: []
                },
                r = [],
                c = function (t) {
                    if (t) {
                        if (t.type == X.slurType.slur) {
                            var e = {
                                parts: [
                                    []
                                ],
                                index: 0,
                                nextPart: function () {
                                    this.index++, this.parts.push([])
                                },
                                pushCell: function (t) {
                                    this.parts[this.index].push(t)
                                }
                            };
                            if (X.arrayEach(t.cells, function (t) {
                                    e.pushCell(t), X.isBar(t) && (t.type == X.barType.repeatEndBar || t.ds.notEmpty()) && (e.nextPart(), e.pushCell(t))
                                }), e.parts.length > 1) {
                                t.type = X.slurType.leftSlur, t.cells = e.parts.first(), i(t);
                                for (var r = 1; r < e.parts.length; r++) {
                                    var c = r == e.parts.length - 1 ? X.slurType.rightSlur : X.slurType.leftSlur;
                                    t = X.newSlur(c, e.parts[r]), i(t)
                                }
                                return
                            }
                        }
                        i(t)
                    }
                },
                i = function (t) {
                    if (t.n)
                        for (var r = X.cellsToNotes(t.cells), c = {
                                2: 1.5,
                                3: 2 / 3,
                                4: .75,
                                5: .8,
                                6: 4 / 6,
                                7: 4 / 7,
                                9: 8 / 9,
                                10: .8,
                                11: 8 / 11
                            } [t.n], i = 0; i < t.n && i < r.length; i++) r[i].durationRatio = c;
                    if (!t.cells.isEmpty()) {
                        var l = X.arrayGrep(t.cells, function (t) {
                            return X.isMasterNote(t)
                        });
                        switch (t.type) {
                            case X.slurType.leftSlur:
                            case X.slurType.rightSlur:
                                if (l.length < 1) return;
                                break;
                            default:
                                if (l.length < 2) return;
                                2 == l.length && X.midi.getNoteMidiNumber(l.first()) == X.midi.getNoteMidiNumber(l.last()) && (l.last().isExtendedNote = !0, l.first().pushExtendedNote(l.last())), X.for(1, l.length, function (t) {
                                    return l[t].getLyricMinWidth() > 0 ? X.break : void l.first().pushLyricNote(l[t])
                                })
                        }
                        e.slurs.push(t)
                    }
                },
                l = function (t) {
                    X.arrayEach(t, function (t) {
                        if (X.isSlur(t))
                            if (t.isBreakSlur()) {
                                if (r.length < 1) return;
                                l(t.cells), c(r.pop()), r.push(t)
                            } else {
                                var e = t.cells;
                                t.cells = [], r.push(t), l(e), c(r.pop())
                            }
                        else {
                            if (r.length < 1) return;
                            if (X.isNote(t) && t.isTiedNote) {
                                if (r.length < 1) return;
                                t.isTiedNote = !1, l([t]), c(r.pop()), r.push(X.newSlur(X.slurType.slur, [t]))
                            }
                        }
                        X.arrayEach(r, function (e) {
                            e.cells.push(t)
                        });
                        var i = r.last();
                        if (i.isTied && X.isMasterNote(t)) {
                            if (X.arrayGrep(i.cells, function (t) {
                                    return X.isMasterNote(t)
                                }).length < 1) return;
                            c(r.pop());
                            var o = X.newSlur(X.slurType.slur, [t]);
                            o.isTied = !0, r.push(o)
                        }
                    })
                };
            for (l(t.cells); r.length > 0;) c(r.pop());
            return e
        }, X.parser.handleRepeatParts = function (t) {
            var e = {
                    repeatParts: []
                },
                r = [],
                c = function (t, e) {
                    r.notEmpty() && t > 0 && (r.last().endIndex || (r.last().endIndex = t - 1, r.last().withTail = e))
                };
            X.arrayEach(t.cells, function (t, e) {
                X.isRepeatPartBegin(t) ? (c(e, !1), r.push({
                    beginIndex: e + 1,
                    endIndex: 0,
                    repeat: t.repeat,
                    withTail: !0
                })) : X.isRepeatPartEnd(t) && c(e, !0)
            }), c(t.cells.length, !1);
            var i = function (e, r) {
                var c = e;
                if (X.isBar(t.cells[c])) return c;
                for (;;) {
                    if ((c += r) < 0 || c > t.cells.length - 1) return e;
                    if (X.isBar(t.cells[c])) return c;
                    if (t.cells[c].isDrawable()) return e
                }
            };
            return X.arrayEach(r, function (r) {
                var c = X.newRepeatPart(r.repeat),
                    l = i(r.beginIndex, -1),
                    o = i(r.endIndex, 1);
                c.withTail = r.withTail;
                for (var s = l; o >= s; s++) c.repeat && X.isNote(t.cells[s]) && (t.cells[s].repeat = c.repeat), c.pushCell(t.cells[s]);
                e.repeatParts.push(c)
            }), e
        }, X.parser.handleThans = function (t) {
            return {
                thans: X.arrayMerge(X.parser.handleThansByType(t.cells, X.thanType.greatThan), X.parser.handleThansByType(t.cells, X.thanType.lessThan))
            }
        }, X.parser.handleThansByType = function (t, e) {
            var r = [],
                c = e,
                i = e + "_end",
                l = [],
                o = function (t) {
                    l.notEmpty() && t > 0 && (l.last().endIndex || (l.last().endIndex = t - 1))
                };
            return X.arrayEach(t, function (t, e) {
                X.isTag(t, c) ? (o(e), l.push({
                    beginIndex: e + 1,
                    endIndex: 0
                })) : X.isTag(t, i) && o(e)
            }), o(t.length), X.arrayEach(l, function (c) {
                for (var i = X.newThan(e), l = c.beginIndex, o = c.endIndex, s = l; o >= s; s++) i.pushCell(t[s]);
                r.push(i)
            }), r
        }, X.kPart = "part", X.kPartEnd = "part_end", X.parser.handlePart = function (t) {
            var e = {
                    cells: [],
                    partMap: {}
                },
                r = void 0;
            return X.arrayEach(t.cells, function (t) {
                X.isTag(t) && t.value == X.kPartEnd ? r = void 0 : X.isKeyValue(t) && t.key == X.kPart ? (r = t.value, e.partMap[r] = []) : X.isDefined(r) ? e.partMap[r].push(t) : e.cells.push(t)
            }), e
        }, X.parser.handleGroup = function (t) {
            var e = {
                    cells: []
                },
                r = [],
                c = function (t) {
                    if (r.isEmpty()) return void e.cells.push(t);
                    var c = r.last(),
                        i = c.getLastPart();
                    X.isKeyValue(t) && t.key == X.kNewPart ? (i = c.newPart(), i.name = t.value.trim()) : i.pushCell(t)
                },
                i = function () {
                    if (!r.isEmpty()) {
                        var e = r.last(),
                            i = e.usePart.split(/[\s,]+/);
                        X.arrayEach(i, function (e) {
                            var r = t.partMap[e];
                            X.notDefined(r) || (c(X.newKeyValue(X.kNewPart, "")), X.arrayEach(r, function (t) {
                                c(t)
                            }))
                        }), r.pop(), c(e)
                    }
                };
            return X.arrayEach(t.cells, function (t) {
                var e, l = !1,
                    o = "";
                switch (X.isTag(t) ? (e = t.value, e.match(/_end$/) && (e = e.replace("_end", ""), l = !0)) : X.isKeyValue(t) && (e = t.key, o = t.value), e) {
                    case X.groupType.group:
                    case X.groupType.modify:
                    case X.groupType.multi:
                    case X.groupType.unit:
                        if (l) i();
                        else {
                            var s = X.newGroup(e);
                            s.usePart = o, r.push(s)
                        }
                        return
                }
                c(t)
            }), e
        }, X.parser.expandGroup = function (t) {
            var e = {
                cells: []
            };
            return X.arrayEach(t.cells, function (t) {
                X.isGroup(t) ? X.arrayEach(t.selectLeadCells(), function (t) {
                    e.cells.push(t)
                }) : e.cells.push(t)
            }), e
        }, X.parser.handleTranspose = function (t) {
            var e = {},
                r = {
                    transpose: 0,
                    keyNumber: X.midi.defaultCMidiNumber
                };
            return X.arrayEach(t.cells, function (t) {
                switch (X.midi.transposer.handleCell(t), t.type) {
                    case X.kKeyValue:
                        switch (t.key) {
                            case "transpose":
                                r.transpose = t.value;
                                break;
                            case "key_signature":
                            case "tmp_key_signature":
                                r.keyNumber = X.midi.keyNameToMidiNumber(t.value, X.midi.middleCMidiNumber), r.keyNumber >= 84 && (r.keyNumber -= 12)
                        }
                        break;
                    case "note":
                        r.transpose && X.midi.transposer.transposeNote(t, r.transpose), t.keyNumber = r.keyNumber
                }
            }), e
        }, X.parser.handleGraph = function (t) {
            var e = {},
                r = {
                    instrument: "none",
                    fingering: "",
                    cfingering: !1,
                    keySignature: "C",
                    status: X.instrument.status.on,
                    isPlayHintShowed: !1,
                    isMultiFingerings: !1,
                    isFingeringUsed: !1,
                    playHintIndex: 0,
                    comments: []
                },
                c = function () {
                    if (r.isFingeringUsed) {
                        var t = r.fingering.split("+");
                        t.length > 1 && (t.shift(), r.fingering = t.join("+")), r.isPlayHintShowed = !1, r.isFingeringUsed = !1
                    }
                },
                i = function () {
                    var t = r.fingering.split("+");
                    return t.length > 0 ? t.first() : r.fingering
                },
                l = function () {
                    var t = i();
                    if (!t) return "";
                    var e = X.midi.keyNameToMidiNumber(t),
                        c = X.midi.keyNameToMidiNumber(r.keySignature);
                    return X.instrument.calcTonalityName(r.instrument, c - e + X.midi.defaultCMidiNumber)
                },
                o = function () {
                    var t;
                    switch (r.cfingering) {
                        case "sharp":
                            t = 1;
                            break;
                        case "flat":
                            t = -1;
                            break;
                        default:
                            t = 0
                    }
                    return t
                },
                s = function () {
                    if (!X.valueOnOff(r.cfingering)) return 0;
                    var t = "none" == r.instrument ? r.keySignature : i(),
                        e = X.midi.keyNameToMidiNumber(t) - X.midi.defaultCMidiNumber;
                    return X.midi.transposer.format(e, t)
                },
                n = function (t) {
                    var e = s(),
                        r = parseInt(e);
                    if (Math.abs(r) % 12) {
                        var c = X.midi.keyNameToMidiNumber(t) - r;
                        return X.midi.midiNumberToShortName(c)
                    }
                    return X.midi.formatKeyName(t)
                },
                f = function (t) {
                    var e = X.config.playHints,
                        c = X.instrument.getPlayHint(r.instrument, l(), t);
                    if (c) {
                        var i = X.indexOfArray(c, e);
                        return 0 > i ? (e.push(c), e.length) : i + 1
                    }
                },
                h = function () {
                    return r.status == X.instrument.status.on
                },
                a = function (t, e) {
                    return e ? e.scale = t.scale : e = X.newNote(t.scale), e.accidental = t.accidental, e.octave = t.octave, e.content = t.content, e.noteNumber = t.noteNumber, e
                },
                k = [];
            return X.arrayEach(t.cells, function (t) {
                switch (X.midi.transposer.handleCell(t), t.type) {
                    case "prelude_begin":
                        r.status = X.instrument.status.off;
                        break;
                    case "prelude_end":
                        r.status = X.instrument.status.on;
                        break;
                    case X.kKeyValue:
                        switch (t.key) {
                            case "instrument":
                            case "fingering":
                                r[t.key] = t.value;
                                break;
                            case "key_signature":
                                r.keySignature = t.value, r.transposedKeySignature = n(t.value), X.config.keySignature = X.newKeySignature(r.transposedKeySignature);
                                break;
                            case "tmp_key_signature":
                                r.keySignature = t.value, c();
                                var e = n(t.value);
                                r.transposedKeySignature && r.transposedKeySignature != e && (r.comments.push("转[1=" + e + "]"), r.transposedKeySignature = e);
                                break;
                            case r.instrument + "f":
                                switch (t.value) {
                                    case "on":
                                        r.status = X.instrument.status.on;
                                        break;
                                    case "off":
                                        r.status = X.instrument.status.off;
                                        break;
                                    default:
                                        c()
                                }
                                break;
                            case "graph":
                                r.status = X.valueOnOff(t.value) ? X.instrument.status.on : X.instrument.status.off;
                                break;
                            case "cfingering":
                                r[t.key] = t.value
                        }
                        break;
                    case "tag":
                        switch (t.value) {
                            case "cfingering":
                                r.cfingering = "auto"
                        }
                        break;
                    case "note":
                        if (t.instrument = r.instrument, t.fingering = i(), X.valueOnOff(r.cfingering) && (X.midi.transposer.transposeNote(t, s(), o()), t.fingering = "C5"), r.comments.notEmpty() && (t.pushComments(r.comments), r.comments = []), t.graph = h(), h() && 0 != t.scale && (t.noteNumber = X.midi.getNoteMidiNumber(t), X.config.lowNote ? t.noteNumber < X.config.lowNote.noteNumber && a(t, X.config.lowNote) : X.config.lowNote = a(t), X.config.highNote ? t.noteNumber > X.config.highNote.noteNumber && a(t, X.config.highNote) : X.config.highNote = a(t), "none" != r.instrument && (r.isFingeringUsed = !0, !r.isPlayHintShowed))) {
                            var l = f(t.fingering);
                            r.isPlayHintShowed = !0, l != r.playHintIndex && (t.playHintIndex = l, k.push(t), r.playHintIndex = l)
                        }
                }
            }), X.config.playHints.length > 1 && X.arrayEach(k, function (t) {
                t.pushComment("※" + t.playHintIndex)
            }), e
        }, X.parser.handleFingering = function (t) {
            var e = {};
            if (X.config.outputFingerings) {
                var r;
                switch (X.config.outputFingerings) {
                    case "true":
                    case "all":
                        r = ["o6", "o12", "o3", "a6", "r8b", "r8g", "x8", "x10", "p8", "h7"];
                        break;
                    default:
                        r = X.config.outputFingerings.split(",")
                }
                e.fingerings = X.instrument.parseAllFingerings(t.cells, r)
            }
            return e
        }, X.parser.handleLyric = function (t) {
            var e = {},
                r = {
                    index: 0,
                    lyrics: [],
                    pushLyric: function (t) {
                        this.lyrics.push(X.parseLyric(t))
                    },
                    nextLyrics: function () {
                        var t = this,
                            e = [];
                        return X.arrayEach(this.lyrics, function (r) {
                            t.index < r.length && e.push(r[t.index])
                        }), t.index++, e
                    }
                };
            X.arrayEach(t.cells, function (t) {
                X.isLyric(t) && (r.pushLyric(t.value), X.config.hasLyric = !0)
            });
            var c = {
                status: !0
            };
            return X.arrayEach(t.cells, function (t) {
                switch (t.type) {
                    case X.kNote:
                        c.status && t.hasLyric && (t.lyrics = r.nextLyrics());
                        break;
                    case X.kKeyValue:
                        "lyric" == t.key && (c.status = X.valueOnOff(t.value));
                        break;
                    case "prelude_begin":
                        c.status = !1;
                        break;
                    case "prelude_end":
                        c.status = !0;
                        break;
                    case "tag":
                        switch (t.value) {
                            case "jembe":
                                c.status = !1;
                                break;
                            case "jembe_end":
                                c.status = !0
                        }
                }
            }), e
        }, X.parser.handleNl2Br = function (t) {
            var e = {},
                r = X.config.paperWidth - 2 * X.config.paperPaddingLeft,
                c = X.cellsToMeasures(t.cells),
                i = X.arrayMax(c, function (t) {
                    return t.normalWidth()
                });
            if (X.isDefined(i) && i > r) {
                var l = X.config.paperHeight / X.config.paperWidth;
                X.config.paperWidth = i + 2 * X.config.paperPaddingLeft, X.config.paperHeight = X.config.paperWidth * l, r = i
            }
            if (e.lineWidth = r, X.isNl2BrFalse()) return e;
            for (var o, s, n, f, h = function () {
                    X.config.nl2br = !1
                }, a = 0, k = 0; k < c.length; k++)
                if (o = c[k], !o.cells.isEmpty()) {
                    a += o.normalWidth();
                    var d = o.cells.last();
                    if (X.isBar(d) && d.eolCount > 0) {
                        if (a > r) {
                            h();
                            break
                        }
                        if (X.isNl2BrAuto()) {
                            if (.3 * r > a) {
                                h();
                                break
                            }
                            if (s = a / r, n = n ? X.mathMin(s, n) : s, f = f ? X.mathMax(s, f) : s, .5 >= n / f) {
                                h();
                                break
                            }
                        }
                        a = 0
                    }
                } return X.isNl2BrFalse() || (X.config.nl2br = !0), e
        }, X.parser.generateMidiNote = function (t) {
            var e = {},
                r = {
                    bpm: 72,
                    midiSpeed: 1,
                    playTranspose: 0
                },
                c = [];
            if (X.arrayEach(t.cells, function (t) {
                    X.isGroup(t) ? X.arrayEach(t.selectMidiCells(), function (t) {
                        c.push(t)
                    }) : c.push(t)
                }), X.config.play) {
                var i = [],
                    l = null,
                    o = {};
                X.arrayEach(c, function (t) {
                    "section_begin" == t.type ? (l = t.name, o[l] = []) : l ? o[l].push(t) : i.push(t)
                });
                var s = X.config.play.split(/[\s,]+/);
                X.arrayEach(s, function (t) {
                    t in o && X.arrayEach(o[t], function (t) {
                        i.push(t)
                    })
                }), c = i
            }
            var n = {},
                f = function () {
                    return r.bpm && r.midiSpeed ? 60 / r.bpm / r.midiSpeed : 1
                },
                h = function (t) {
                    t = X.extend({
                        scale: "0",
                        duration: 0,
                        noteDuration: 0
                    }, t);
                    var e = f();
                    return t = X.extend({
                        playRatio: e,
                        textDuration: t.noteDuration * e,
                        midiDuration: t.duration * e
                    }, t)
                },
                a = function (t) {
                    var c = t.keyNumber + r.playTranspose,
                        i = h({
                            id: t.getUniqueId(),
                            firstLine: t.firstLine,
                            firstColumn: t.firstColumn,
                            lastLine: t.lastLine,
                            lastColumn: t.lastColumn,
                            scale: t.scale,
                            duration: t.isDummyNote() ? 0 : t.getTotalDuration(),
                            noteDuration: t.getRealDuration(),
                            keyNumber: c,
                            midiNumber: X.midi.getNoteRealMidiNumber(t, c),
                            chordNames: t.chordNames,
                            chordFont: t.chordFont,
                            chordLoop: t.chordLoop,
                            timeSignature: t.timeSignature,
                            measureDuration: t.measureDuration,
                            measureRealDuration: t.measureRealDuration
                        });
                    e.minMidiNumber = X.mathMin(e.minMidiNumber, i.midiNumber), e.maxMidiNumber = X.mathMax(e.maxMidiNumber, i.midiNumber);
                    var l = X.midi.getNoteMidiNumber(t);
                    return e.minNoteNumber = X.mathMin(e.minNoteNumber, l), e.maxNoteNumber = X.mathMax(e.maxNoteNumber, l), e.bpm || (e.bpm = parseInt(r.bpm * r.midiSpeed)), t.chordNotes.notEmpty() && (i.chord = [], X.arrayEach(t.chordNotes, function (e) {
                        e.keyNumber = t.keyNumber;
                        var r = a(e);
                        i.chord.push(r)
                    })), i
                },
                k = function (t) {
                    var e = h({
                        scale: "0"
                    });
                    return e = X.extend(e, {
                        duration: t / e.playRatio,
                        noteDuration: t / e.playRatio,
                        textDuration: t,
                        midiDuration: t
                    })
                },
                d = function (t) {
                    n.main ? n.main.push({
                        node: t,
                        endTime: n.main.last().endTime
                    }) : n.main = [{
                        node: t,
                        endTime: 0
                    }]
                },
                w = function (t, e, r) {
                    var c = {
                        node: t,
                        endTime: r + t.textDuration
                    };
                    n[e] || (n[e] = []);
                    var i = n[e];
                    return i.isEmpty() ? (r && i.push({
                        node: k(r),
                        endTime: r
                    }), void i.push(c)) : (i.last().endTime < r && i.push({
                        node: k(r - i.last().endTime),
                        endTime: r
                    }), void i.push(c))
                },
                y = function (t, e) {
                    var r = a(t);
                    return w(r, function (t) {
                        return "groupId" in t && "partIndex" in t ? "track" + t.groupId + "-" + t.partIndex : "main"
                    }(t), e), X.arrayEach(t.tracks, function (t) {
                        var r = e;
                        X.arrayEach(t, function (t) {
                            r += y(t, r)
                        })
                    }), r.textDuration
                },
                u = 1,
                p = 0,
                x = 0,
                g = function (t, e) {
                    if ("string" != typeof t) return !1;
                    for (var r, c = t.split(","), i = 0; i < c.length; i++)
                        if (r = c[i], r.match(/^\d+$/)) {
                            if (parseInt(r) == e) return !0
                        } else {
                            if (!r.match(/^\d+-\d+$/)) return !0;
                            var l = r.split("-");
                            if (parseInt(l[0]) <= e && parseInt(l[1]) >= e) return !0
                        } return !1
                },
                m = function (t, e, i, l) {
                    var o = !1,
                        s = 3 != i;
                    for (l = t; e > l && l < c.length; l++) {
                        var n = c[l];
                        if (X.isBar(n)) {
                            if (0 == i) {
                                if (n.type == X.barType.repeatEndBar || n.type == X.barType.repeatBothBar) {
                                    var f = 1;
                                    n.repeat.notEmpty() && (f = n.repeat.first().value);
                                    for (var a = 0; f > a; a++) u++, m(t, l, 1)
                                }
                                n.type != X.barType.repeatBeginBar && n.type != X.barType.repeatBothBar || (t = l + 1, u = 1), X.arrayEach(n.ds, function (t) {
                                    u++, p = t.n, m(0, l, 3)
                                }), X.arrayEach(n.dc, function (t) {
                                    u++, p = t.n, m(0, l, 2)
                                })
                            }
                            if (3 == i && X.arrayEach(n.start, function (t) {
                                    (t.n < 1 || t.n == p) && (s = !0)
                                }), 3 == i || 2 == i) {
                                var k = !1;
                                if (X.arrayEach(n.fine, function (t) {
                                        return t.n < 1 || t.n == p ? (k = !0, X.break) : void 0
                                    }), k) return;
                                X.arrayEach(n.jump, function (t) {
                                    return t.n < 1 || t.n == p ? (o = !o, X.break) : void 0
                                })
                            }
                        }
                        if (s && !o && (!n.repeat || g(n.repeat, u))) switch (n.type) {
                            case "note":
                                x += y(n, x);
                                break;
                            case X.groupType.modify:
                                X.arrayEach(n.parts[(u - 1) % n.parts.length], function (t) {
                                    switch (t.type) {
                                        case "note":
                                            x += y(t, x)
                                    }
                                });
                                break;
                            case "bpm":
                                if (i) break;
                                r.bpm = n.value, d(h({
                                    bpm: r.bpm * r.midiSpeed
                                }));
                                break;
                            case X.kKeyValue:
                                switch (n.key) {
                                    case "ms":
                                        r.midiSpeed = parseFloat(n.value), d(h({
                                            bpm: r.bpm * r.midiSpeed
                                        }));
                                        break;
                                    case "play_transpose":
                                        r.playTranspose = parseInt(n.value)
                                }
                        }
                    }
                };
            return m(0, c.length, 0),
                function () {
                    e.notes = [];
                    for (var t in n) {
                        for (var r = h({
                                id: t,
                                notes: []
                            }), c = n[t], i = 0; i < c.length; i++) r.notes.push(c[i].node);
                        e.notes.push(r)
                    }
                    e.notes
                }(), e
        }, X.parser.handleGraphSheetScale = function () {
            if (X.isGraphShow() && X.isMediaPrint()) {
                var t = X.objectHas(X.config, X.config.instrument + "scale") ? X.config[X.config.instrument + "scale"] : X.config.scale;
                X.setPaperWidth(X.config.paperWidth / t), X.setPaperHeight(X.config.paperHeight / t)
            }
        }, X.parser.handleConfig = function () {
            return {
                Y29weXJpZ2h0: "JUE5Y29weXJpZ2h0JTIwaGFwcGkxMjMuY29tJTIwY2hhbmduaWFu",
                config: X.config,
                hasLyric: X.config.hasLyric,
                hasChordName: X.config.hasChordName,
                hasFingerNum: X.config.hasFingerNum
            }
        }, X.parser.handleMeasure = function (t) {
            var e, r = {
                    totalMeasures: 0
                },
                c = 0,
                i = 4,
                l = 0,
                o = [],
                s = function () {
                    if (measureNotes = X.cellsToNotes(o), o = [], measureNotes.isEmpty()) return 0;
                    var t = measureNotes.first();
                    return t.measureRealDuration = X.arraySum(measureNotes, function (t) {
                        return t.getRealDuration()
                    }), t.timeSignature ? (i = t.timeSignature.m, t.measureDuration = 4 * t.timeSignature.n / t.timeSignature.m) : t.measureDuration = 4, 1 > l && (l = 1, t.measureDuration - t.measureRealDuration > X.config.minNoteDuration) ? (X.isIntegerDuration(t.measureRealDuration, i) || (c = t.measureRealDuration), t.measureRealDuration) : (l++, r.totalMeasures++, t.measureRealDuration)
                },
                n = function (t, e, r) {
                    X.objectHas(t, "unitSet") ? t.unitSet.setMeasureNum(e, r) : (t.num = e, t.isIncompleteMeasure = r)
                };
            return X.arrayEach(t.cells, function (t) {
                o.push(t), X.isBar(t) && (t.measureRealDuration = s(), t.measureRealDuration > 0 && (n(t, l, 1 == l && c > 0), e = t))
            }), 0 == s() && e && (!X.isIntegerDuration(e.measureRealDuration, i) && X.isIntegerDuration(e.measureRealDuration + c, i) && (e.isIncompleteMeasure = !0), n(e, 0, e.isIncompleteMeasure)), r
        }, X.svg = {
            renderTemplate: function (t, e) {
                // console.log(t)
                // console.log(X.extend(X.config, e))
                return X.render(t, X.extend(X.config, e))
            },
            renderDom: function (t, e, r) {
                var c = "";
                e = X.oneValue(e, {});
                // console.log(t)
                // console.log(e)
                // console.log(r)
                for (var i in e) c += X.render(' {key}="{value}"', {
                    key: i,
                    value: e[i]
                });
                return X.render("\n<{name}{attrs}>{value}</{name}>", {
                    name: t,
                    value: X.escapeHTML(r),
                    attrs: c
                })
            },
            renderPath: function (t) {
                return X.svg.renderDom("path", t)
            },
            renderRect: function (t) {
                return X.svg.renderDom("rect", t)
            },
            renderLine: function (t) {
                return X.svg.renderDom("line", t)
            },
            renderUse: function (t, e) {
                return X.svg.renderDom("use", X.extend({
                    "xlink:href": "#" + t,
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }, e))
            },
            renderText: function (t, e) {
                return X.svg.renderDom("text", X.extend({
                    "font-family": X.config.fontFamily,
                    "font-weight": X.config.fontWeightNormal
                }, e), t)
            },
            randLightColor: function () {
                return "#" + function t(e, r, c) {
                    return r[e.floor(e.random() * r.length)] + (c && t(e, r, c - 1))
                }(Math, "6789abcdef", 4)
            }
        }, X.svg.render = function (t) {
            return X.svg.renderSheet(t)
        }, X.svg.renderHead = function () {
            var t, e, r = X.config.paperPaddingTop - 20,
                c = .5 * X.config.paperWidth,
                i = "",
                l = X.oneValue(X.config.songName, ""),
                o = (X.config.paperWidth - 2 * X.config.paperPaddingLeft - 300) / X.fontWidth(l);
            36 > o ? (e = X.mathMax(24, o), t = 0) : 48 > o || X.config.paperWidth < 800 ? (e = 36, t = X.mathMin(4, o - e)) : (e = 48, t = X.mathMin(8, o - e)), i += X.svg.renderText(l, {
                x: c,
                y: 30 + r,
                dy: 30.078,
                fill: X.config.fontColor,
                style: "font-weight:" + X.config.fontWeightBold + "; letter-spacing:" + t + "px",
                "text-anchor": "middle",
                "font-size": e,
                id: "JUE5Y29weXJpZ2h0JTIwaGFwcGkxMjMuY29t"
            }), i += X.svg.renderText(X.config.aliasName, {
                x: c,
                y: 86 + r,
                dy: 16.71,
                fill: X.config.fontColor,
                "text-anchor": "middle",
                "font-size": 20
            }), i += X.svg.renderAuthor(r);
            var s = X.config.paperPaddingLeft,
                n = 96 + r;
            i += X.getKeySignature().toSvg(s, n), X.config.timeSignature && (i += X.config.timeSignature.toSvg(s + X.getKeySignature().getWidth(), n)), n = 139 + r, i += X.getBPM().toSvg(s, n);
            var f = X.getPlayHint();
            if (f) {
                var h = X.getBPM().getWidth();
                h > 0 && (s += h + 8), i += X.svg.renderText(f, {
                    x: s,
                    y: n + 2,
                    dy: 5.368,
                    fill: X.config.fontColor,
                    "font-size": 18
                })
            }
            return i += X.svg.renderHeadTextRows()
        }, X.svg.getBpmEndY = function () {


            var inserts = 0
            if (window.localStorage.getItem('song_show_chord_name') == 3) {
                inserts = initline * 100 + svglinenum * 90
            }


            return X.getBPM().getWidth() > 0 || X.getPlayHint() ? X.config.paperPaddingTop + 160 + inserts : X.config.paperPaddingTop + 120 + inserts
        }, X.svg.calcHeadHeight = function () {
            return X.svg.getBpmEndY() + (X.config.play ? 30 : 0) + 30 * X.config.playHints.length
        }, X.svg.renderHeadTextRows = function () {
            var t = X.config.paperPaddingLeft,
                e = X.svg.getBpmEndY(),
                r = "",
                c = function (c) {
                    r += X.svg.renderText(c, {
                        x: t,
                        y: e + 2,
                        dy: 5.368,
                        fill: X.config.fontColor,
                        "font-size": 18
                    }), e += 30
                };
            return X.config.play && c("演奏顺序：" + X.config.play), 1 == X.config.playHints.length ? c(X.config.playHints.first()) : X.config.playHints.length > 1 && X.arrayEach(X.config.playHints, function (t, e) {
                t = "※" + (e + 1) + " " + t, c(t)
            }), r
        }, X.svg.renderAuthor = function (t) {
            var e = "",
                r = {
                    x: X.config.paperWidth - X.config.paperPaddingLeft,
                    y: 85 + t,
                    dy: "-2.632",
                    "text-anchor": "end",
                    fill: X.config.fontColor,
                    "font-size": 16
                };
            if (X.valueOnOff(X.config.showNoteRange) && X.config.lowNote && X.config.highNote) {
                var c = X.newRow(130);
                c.pushCells([X.newText("音域"), X.config.lowNote, X.newText("到"), X.config.highNote]), c.cells[0].x = 0, c.cells[1].x = 60, c.cells[2].x = 84, c.cells[3].x = 118, c.toElements(), c.transform(X.config.paperWidth - X.config.paperPaddingLeft - c.rowWidth, t + 35), e += c.toSvg()
            }


            return X.config.musicComposer && (e += X.svg.renderText(X.config.musicComposer, r), r.y += 21),
                X.config.musicComposer666 && (e += X.svg.renderText(X.config.musicComposer666, r), r.y += 21),
                X.config.lyricComposer666 && (e += X.svg.renderText(X.config.lyricComposer666, r), r.y += 21),
                X.config.lyricComposer && (e += X.svg.renderText(X.config.lyricComposer, r), r.y += 21),
                X.config.lyricComposerrj && (e += X.svg.renderText(X.config.lyricComposerrj, r), r.y += 21),
                X.config.player && (e += X.svg.renderText(X.config.player, r), r.y += 21),
                X.config.author && (e += X.svg.renderText(X.config.author, r), r.y += 21), e
        },
        X.svg.slursToElements = function (t) {
            X.arrayEach(t, function (t) {
                var e = t.toMasterNotes();
                if (!e.isEmpty()) {
                    var r = e.first(),
                        c = e.last(),
                        i = r.getRowId(),
                        l = c.getRowId();
                    if (!(1 > i || 1 > l)) {
                        var o, s = function (t) {
                                return X.isBar(t) ? t.getXCenter() : t.getXLeft() - t.getMarginLeft()
                            },
                            n = function (t) {
                                return X.isBar(t) ? t.getXCenter() : t.getXRight() + t.getMarginRight()
                            };
                        if (i == l) {
                            switch (t.type) {
                                case X.slurType.leftSlur:
                                    o = X.svg.newLeftSlurElement(r.getXCenter(), c.getXRight(), 0, t.n);
                                    break;
                                case X.slurType.rightSlur:
                                    o = X.svg.newRightSlurElement(r.getXLeft(), c.getXCenter(), 0);
                                    break;
                                default:
                                    o = c.x - r.x < 80 ? X.svg.newShortSlurElement(r.getXCenter(), c.getXCenter(), 0, t.n) : X.svg.newLongSlurElement(r.getXCenter(), c.getXCenter(), 0, t.n)
                            }
                            r.row.pushElementAbove(o, 3)
                        } else {
                            var f = X.arrayMax(t.cells, function (t) {
                                    return t.getRowId() == i && t.isDrawable() ? n(t) : 0
                                }),
                                h = X.arrayMin(t.cells, function (t) {
                                    return t.getRowId() == l && t.isDrawable() ? s(t) : X.config.paperWidth
                                });
                            switch (t.type) {
                                case X.slurType.leftSlur:
                                    o = X.svg.newLeftSlurElement(r.getXCenter(), f, 0, t.n), r.row.pushElementAbove(o, 3);
                                    break;
                                case X.slurType.rightSlur:
                                    o = X.svg.newRightSlurElement(h, c.getXCenter(), 0), c.row.pushElementAbove(o, 3);
                                    break;
                                default:
                                    o = X.svg.newLeftSlurElement(r.getXCenter(), f, 0, t.n), r.row.pushElementAbove(o, 3), o = X.svg.newRightSlurElement(h, c.getXCenter(), 0), c.row.pushElementAbove(o, 3)
                            }
                        }
                    }
                }
            })
        }, X.svg.renderSlurNumber = function (t, e, r) {
            if (!r) return "";
            var c = r + "",
                i = {
                    x: t,
                    y: e,
                    dy: 3,
                    fill: X.config.fontColor,
                    "text-anchor": "middle",
                    "font-size": 10,
                    "xml:space": "preserve"
                },
                l = X.svg.renderRect({
                    x: t - 12,
                    y: e - 5,
                    height: 10,
                    width: 24,
                    fill: X.config.backgroundColor
                });
            return l += c.length > 1 ? X.svg.renderText(c, i) : X.svg.renderUse("lianyin_shuzi_" + r, {
                x: t,
                y: e
            })
        }, X.svg.newShortSlurElement = function (t, e, r, c) {
            var i = e - t,
                l = X.svg.newElement(),
                o = .3 * i,
                s = Math.max(11, Math.min(.3 * i, 16)),
                n = X.svg.newPoint(t, r),
                f = X.svg.newPoint(t + o, r - s),
                h = X.svg.newPoint(e - o, r - s),
                a = X.svg.newPoint(e, r);
            return l.pushRects(X.svg.bezierCurve3ToRects(n, f, h, a, .05)), c && l.newRect(.5 * (e + t - 10), r - 15, 10, 10), l.toSvg = function () {
                var t = this.getRects().first(),
                    e = t.getXLeft(),
                    r = t.getYBottom(),
                    l = e + i,
                    n = X.svg.newPoint(e, r),
                    f = X.svg.newPoint(e + o, r - s),
                    h = X.svg.newPoint(l - o, r - s),
                    a = X.svg.newPoint(l, r),
                    k = X.sprintf("M %s %s C %s %s %s %s %s %s M %s %s C %s %s %s %s %s %s", n.x, n.y, f.x, f.y + 1, h.x, h.y + 1, a.x, a.y, a.x, a.y, h.x, h.y, f.x, f.y, n.x, n.y),
                    d = X.svg.renderPath({
                        stroke: X.config.fontColor,
                        "stroke-width": "0.9",
                        "stroke-linecap": "round",
                        fill: "none",
                        d: k
                    });
                return d += X.svg.renderSlurNumber(e + .5 * (l - e), r - 10, c)
            }, l
        }, X.svg.newLeftSlurRects = function (t, e) {
            var r = X.svg.newPoint(t, e),
                c = X.svg.newPoint(t, e - 3),
                i = X.svg.newPoint(t + 11 - 3, e - 11),
                l = X.svg.newPoint(t + 11, e - 11);
            return X.svg.bezierCurve3ToRects(r, c, i, l, .1)
        }, X.svg.newRightSlurRects = function (t, e) {
            var r = X.svg.newPoint(t, e),
                c = X.svg.newPoint(t + 3, e),
                i = X.svg.newPoint(t + 11, e + 11 - 3),
                l = X.svg.newPoint(t + 11, e + 11);
            return X.svg.bezierCurve3ToRects(r, c, i, l, .1)
        }, X.svg.newLongSlurElement = function (t, e, r, c) {
            var i = e - t,
                l = X.svg.newElement();
            return l.pushRects(X.svg.newLeftSlurRects(t, r)), l.pushRects(X.svg.newRightSlurRects(e - 11, r - 11)), l.newRect(t + 11, r - 11, i - 22, 1.2), c && l.newRect(.5 * (e + t - 10), r - 15, 20, 10), l.toSvg = function () {
                var t = "",
                    e = this.getRects().first(),
                    r = e.getXLeft(),
                    l = r + i,
                    o = e.getYBottom(),
                    s = o - 11 + 1,
                    n = r + 11,
                    f = l - 11;
                return t += X.svg.renderUse("lianyinxian_zuo", {
                    x: n + .8,
                    y: s
                }), t += X.svg.renderUse("lianyinxian_you", {
                    x: f - .8,
                    y: s
                }), s += .77, t += X.svg.renderLine({
                    x1: n + 1.8,
                    y1: s,
                    x2: f,
                    y2: s,
                    stroke: X.config.fontColor,
                    "stroke-width": "1.2",
                    "stroke-linecap": "round",
                    fill: "none"
                }), t += X.svg.renderSlurNumber(r + .5 * (l - r), o - 10, c)
            }, l
        }, X.svg.newLeftSlurElement = function (t, e, r, c) {
            var i = e - t,
                l = X.svg.newElement();
            return l.pushRects(X.svg.newLeftSlurRects(t, r)), i > 11 && l.newRect(t + 11, r - 11, i - 11, 1.2), c && l.newRect(t + .618 * (e - t) - 5, r - 15, 20, 10), l.toSvg = function () {
                var t = "",
                    e = this.getRects().first(),
                    r = e.getXLeft(),
                    l = e.getYBottom() - 11 + 1,
                    o = r + i,
                    s = r + 11,
                    n = o;
                return t += X.svg.renderUse("lianyinxian_zuo", {
                    x: s + 1,
                    y: l
                }), i > 11 && (l += .77, t += X.svg.renderLine({
                    x1: s + 1,
                    y1: l,
                    x2: n,
                    y2: l,
                    stroke: X.config.fontColor,
                    "stroke-width": "1.2",
                    "stroke-linecap": "round",
                    fill: "none"
                })), t += X.svg.renderSlurNumber(r + .618 * (o - r), l - 10, c)
            }, l
        }, X.svg.newRightSlurElement = function (t, e, r) {
            var c = e - t,
                i = X.svg.newElement();
            return c > 11 && i.newRect(t, r - 11, c - 11, 1.2), i.pushRects(X.svg.newRightSlurRects(e - 11, r - 11)), i.toSvg = function () {
                var t = "",
                    e = this.getRects().last(),
                    r = e.getXRight(),
                    i = r - c,
                    l = e.getYBottom() - 11 + 1,
                    o = i,
                    s = r - 11;
                return t += X.svg.renderUse("lianyinxian_you", {
                    x: s - 1,
                    y: l
                }), c > 11 && (l += .77, t += X.svg.renderLine({
                    x1: o,
                    y1: l,
                    x2: s,
                    y2: l,
                    stroke: X.config.fontColor,
                    "stroke-width": "1.2",
                    "stroke-linecap": "round",
                    fill: "none"
                })), t
            }, i
        }, X.svg.thanToElements = function (t) {
            var e = [],
                r = null,
                c = function () {
                    r && !e.isEmpty() && (r.pushElementAbove(X.svg.mergeElements(e), 5), e = [], r = null)
                },
                i = function (t, i, l, o) {
                    r && r.id != t.id && c(), r = t;
                    var s;
                    switch (i.thanType) {
                        case X.thanType.greatThan:
                            s = X.svg.newGreatThanElement(l, o, 0);
                            break;
                        case X.thanType.lessThan:
                            s = X.svg.newLessThanElement(l, o, 0);
                            break;
                        default:
                            return
                    }
                    e.push(s)
                };
            X.arrayEach(t, function (t) {
                var e = X.getDrawableCells(t.cells),
                    r = e.first(),
                    c = e.last();
                if (!(r.getRowId() < 1 || c.getRowId() < 1)) {
                    var l = r.getXLeft(),
                        o = c.getXRight();
                    r.getRowId() == c.getRowId() ? i(r.row, t, l, o) : (i(r.row, t, l, X.config.paperWidth - X.config.paperPaddingLeft), i(c.row, t, X.config.paperPaddingLeft, o))
                }
            }), c()
        }, X.svg.newGreatThanElement = function (t, e, r) {
            var c = X.svg.newElement();
            return c.newRect(t, r, e - t, 7), c.toSvg = function () {
                var t = this.getRects(),
                    e = t[0],
                    r = "";
                return r += X.svg.renderLine({
                    x1: e.getXLeft(),
                    y1: e.getYTop(),
                    x2: e.getXRight(),
                    y2: e.getYCenter(),
                    "stroke-width": "1.2",
                    stroke: X.config.fontColor,
                    fill: "none"
                }), r += X.svg.renderLine({
                    x1: e.getXLeft(),
                    y1: e.getYBottom(),
                    x2: e.getXRight(),
                    y2: e.getYCenter(),
                    "stroke-width": "1.2",
                    stroke: X.config.fontColor,
                    fill: "none"
                })
            }, c
        }, X.svg.newLessThanElement = function (t, e, r) {
            var c = X.svg.newElement();
            return c.newRect(t, r, e - t, 7), c.toSvg = function () {
                var t = this.getRects(),
                    e = t[0],
                    r = "";
                return r += X.svg.renderLine({
                    x1: e.getXLeft(),
                    y1: e.getYCenter(),
                    x2: e.getXRight(),
                    y2: e.getYTop(),
                    "stroke-width": "1.2",
                    stroke: X.config.fontColor,
                    fill: "none"
                }), r += X.svg.renderLine({
                    x1: e.getXLeft(),
                    y1: e.getYCenter(),
                    x2: e.getXRight(),
                    y2: e.getYBottom(),
                    "stroke-width": "1.2",
                    stroke: X.config.fontColor,
                    fill: "none"
                })
            }, c
        }, X.svg.repeatPartsToElements = function (t) {
            var e = [],
                r = null,
                c = function () {
                    r && !e.isEmpty() && (r.pushElementAbove(X.svg.mergeElements(e), 2), e = [], r = null)
                },
                i = function (t, i) {
                    r && r.id != t.id && c(), r = t, e.push(i)
                },
                l = function (t) {
                    return X.isBar(t) ? t.getXCenter() : t.getXLeft() - t.getMarginLeft()
                },
                o = function (t) {
                    return X.isBar(t) ? t.getXCenter() : t.getXRight() + t.getMarginRight()
                };
            X.arrayEach(t, function (t) {
                var e = X.getDrawableCells(t.cells),
                    r = e.first(),
                    c = e.last(),
                    s = e[1] ? e[1] : r;
                if (!(r.getRowId() < 1 || c.getRowId() < 1 || s.getRowId() < 1)) {
                    X.isBar(r) && r.getRowId() != s.getRowId() && (r = s);
                    var n, f = l(r),
                        h = o(c);
                    if (r.getRowId() != c.getRowId()) {
                        var a = X.arrayMax(e, function (t) {
                            return t.getRowId() == r.getRowId() && t.type != X.kGroupHead && t.type != X.kGroupTail ? o(t) : 0
                        });
                        if (n = X.svg.newLeftRepeatPartElement(f, a, 0, t.title, t.style), i(r.row, n), t.withTail) {
                            var k = X.arrayMin(e, function (t) {
                                return t.getRowId() == c.getRowId() && t.type != X.kGroupHead && t.type != X.kGroupTail ? l(t) : h
                            });
                            n = X.svg.newRightRepeatPartElement(k, h, 0, t.style), i(c.row, n)
                        }
                    } else n = X.svg.newRepeatPartElement(f, h, 0, t.title, t.style), i(r.row, n)
                }
            }), c()
        }, X.svg.newRepeatPartElement = function (t, e, r, c, i) {
            e -= 2;
            var l = e - t,
                o = X.svg.newElement(),
                s = 18,
                n = "dashed" === i ? "4,4" : "";
            return o.newRect(t, r - s, 1.2, s), o.newRect(t, r - s, l, 1.2), o.newRect(t + 3, r - s + 3, 12 * c.length, 12), o.newRect(e, r - s, 1.2, s), o.toSvg = function () {
                var t = this.getRects(),
                    e = "",
                    r = t[0];
                return e += X.svg.renderLine({
                    x1: r.getXCenter(),
                    y1: r.getYTop(),
                    x2: r.getXCenter(),
                    y2: r.getYBottom(),
                    fill: "none",
                    stroke: X.config.fontColor,
                    "stroke-width": 1.2,
                    "stroke-dasharray": n
                }), r = t[1], e += X.svg.renderLine({
                    x1: r.getXLeft(),
                    y1: r.getYCenter(),
                    x2: r.getXRight(),
                    y2: r.getYCenter(),
                    fill: "none",
                    stroke: X.config.fontColor,
                    "stroke-width": 1.2,
                    "stroke-dasharray": n
                }), r = t[2], e += X.svg.renderText(c, {
                    x: r.getXLeft(),
                    y: r.getYBottom(),
                    "xml:space": "preserve",
                    "font-size": 12,
                    fill: X.config.fontColor
                }), r = t[3], e += X.svg.renderLine({
                    x1: r.getXCenter(),
                    y1: r.getYTop(),
                    x2: r.getXCenter(),
                    y2: r.getYBottom(),
                    fill: "none",
                    stroke: X.config.fontColor,
                    "stroke-width": 1.2,
                    "stroke-dasharray": n
                })
            }, o
        }, X.svg.newLeftRepeatPartElement = function (t, e, r, c, i) {
            var l = e - t,
                o = X.svg.newElement(),
                s = "dashed" === i ? "4,4" : "";
            return o.newRect(t, r - 18, 1.2, 18), o.newRect(t, r - 18, l, 1.2), o.newRect(t + 3, r - 18 + 3, 12 * c.length, 12), o.toSvg = function () {
                var t = this.getRects(),
                    e = "",
                    r = t[0];
                return e += X.svg.renderLine({
                    x1: r.getXCenter(),
                    y1: r.getYTop(),
                    x2: r.getXCenter(),
                    y2: r.getYBottom(),
                    fill: "none",
                    stroke: X.config.fontColor,
                    "stroke-width": 1.2,
                    "stroke-dasharray": s
                }), r = t[1], e += X.svg.renderLine({
                    x1: r.getXLeft(),
                    y1: r.getYCenter(),
                    x2: r.getXRight(),
                    y2: r.getYCenter(),
                    fill: "none",
                    stroke: X.config.fontColor,
                    "stroke-width": 1.2,
                    "stroke-dasharray": s
                }), r = t[2], e += X.svg.renderText(c, {
                    x: r.getXLeft(),
                    y: r.getYBottom(),
                    "xml:space": "preserve",
                    "font-size": 12,
                    fill: X.config.fontColor
                })
            }, o
        }, X.svg.newRightRepeatPartElement = function (t, e, r, c) {
            e -= 2;
            var i = e - t,
                l = X.svg.newElement(),
                o = "dashed" === c ? "4,4" : "";
            return l.newRect(t, r - 18, i, 1.2), l.newRect(e, r - 18, 1.2, 18), l.toSvg = function () {
                var t = this.getRects(),
                    e = "",
                    r = t[0];
                return e += X.svg.renderLine({
                    x1: r.getXLeft(),
                    y1: r.getYCenter(),
                    x2: r.getXRight(),
                    y2: r.getYCenter(),
                    fill: "none",
                    stroke: X.config.fontColor,
                    "stroke-width": 1.2,
                    "stroke-dasharray": o
                }), r = t[1], e += X.svg.renderLine({
                    x1: r.getXCenter(),
                    y1: r.getYTop(),
                    x2: r.getXCenter(),
                    y2: r.getYBottom(),
                    fill: "none",
                    stroke: X.config.fontColor,
                    "stroke-width": 1.2,
                    "stroke-dasharray": o
                })
            }, l
        }, X.svg.renderSheet = function (t) {
            var e = X.cellsToRows(t.cells, t.lineWidth);
            e = X.arrayGrep(e, function (t) {
                return t.notEmpty()
            }), X.arrayEach(e, function (t) {
                t.fixPositionX(X.config.paperPaddingLeft), t.buildGroupCells(), t.toElements()
            }), X.svg.slursToElements(t.slurs), X.svg.pushTopTipElementAbove(), X.svg.repeatPartsToElements(t.repeatParts), X.svg.thanToElements(t.thans), X.svg.pushExtraElements();
            var r = [
                    []
                ],
                c = X.svg.calcHeadHeight();

            window.allY = [0]

            X.arrayEach(e, function (t, i) {
                if (t.mergeGroupElements(), i > 0) {
                    var l = e[i - 1].getYBottom() - c - t.getYTop() + X.config.normalGapHeight;
                    c += Math.max(X.config.normalAdvanceHeight, l), X.isMediaPrint() && (t.shouldBreakPage() || c + t.getYBottom() > X.config.paperHeight - X.config.paperPaddingTop) && (c = X.config.paperPaddingTop - t.getYTop(), r.push([]))

                    allY.push((c - 20).toFixed(0) - 0)


                } else c -= t.getYTop();
                t.transform(0, c), r.last().push(t)
            }), X.isMediaScreen() && (c = e.notEmpty() ? e.last().getYBottom() : c, c += X.config.normalAdvanceHeight, X.config.paperHeight = c);
            var i = "";
            return X.arrayEach(r, function (t, e) {
                if (e > 0 && (i += X.svg.renderPaperBreak()), i += X.svg.renderPaperBegin(), 1 > e && (i += X.svg.renderHead()), X.arrayEach(t, function (t) {
                        X.config.debug && (i += "\n<!-- paperRow " + e + "-" + t.id + " begin -->"), i += t.toSvg(), X.config.debug && (i += "\n<!-- paperRow " + e + "-" + t.id + " end -->")
                    }), X.isMediaPrint() && (X.config.siteInfoOpacity > 0 && (i += X.svg.renderText(X.config.siteInfo, {
                        x: X.config.paperPaddingLeft,
                        y: X.config.paperHeight - .5 * X.config.paperPaddingTop,
                        fill: "#5E5E5E",
                        style: "letter-spacing:2px",
                        "text-anchor": "left",
                        "font-size": "18px",
                        "fill-opacity": X.config.siteInfoOpacity
                    })), X.config.showPageNumber && (i += X.svg.renderText("第 " + (e + 1) + " 页 / 共 " + r.length + " 页", {
                        x: X.config.paperWidth - X.config.paperPaddingLeft - 70,
                        y: X.config.paperHeight - .5 * X.config.paperPaddingTop,
                        fill: "#5E5E5E",
                        "text-anchor": "middle",
                        "font-size": "18px"
                    }))), X.config.waterMarkOpacity > 0) {
                    var c = .8 * (X.config.paperWidth - X.config.paperPaddingLeft);
                    i += X.svg.renderUse("icon", {
                        x: .5 * X.config.paperWidth,
                        y: .5 * X.config.paperHeight,
                        width: c,
                        height: c,
                        transform: "translate(-" + .5 * c + ", -" + .5 * c + ")",
                        "fill-opacity": X.config.waterMarkOpacity,
                        style: "zindex:-1"
                    })
                }
                i += X.svg.renderPaperEnd()
            }), t.svgWidth = X.config.paperWidth, t.svgHeight = X.config.paperHeight, t.svg = i, i
        }, X.svg.newElement = function (t) {
            return X.extend({
                id: X.counter.next("element"),
                rects: [],
                pushRect: function (t) {
                    this.rects.push(t)
                },
                pushRects: function (t) {
                    var e = this;
                    X.arrayEach(t, function (t) {
                        e.pushRect(t)
                    })
                },
                getRects: function () {
                    return this.rects
                },
                getFirstRect: function () {
                    return this.rects.first()
                },
                newRect: function (t, e, r, c) {
                    var i = X.svg.newRect(t, e, r, c);
                    return this.pushRect(i), i
                },
                transform: function (t, e) {
                    X.arrayEach(this.rects, function (r) {
                        r.transform(t, e)
                    })
                },
                isXBetween: function (t, e) {
                    return !!X.arrayMax(this.rects, function (r) {
                        return r.isXBetween(t, e) ? 1 : 0
                    })
                },
                grepRectsXBetween: function (t, e) {
                    return X.arrayGrep(this.rects, function (r) {
                        return r.isXBetween(t, e)
                    })
                },
                getYTopBetween: function (t, e) {
                    return X.arrayMin(this.grepRectsXBetween(t, e), function (t) {
                        return t.getYTop()
                    })
                },
                getYBottomBetween: function (t, e) {
                    return X.arrayMax(this.grepRectsXBetween(t, e), function (t) {
                        return t.getYBottom()
                    })
                },
                getYTop: function () {
                    return X.arrayMin(this.rects, function (t) {
                        return t.getYTop()
                    })
                },
                getYBottom: function () {
                    return X.arrayMax(this.rects, function (t) {
                        return t.getYBottom()
                    })
                },
                getYCenter: function () {
                    return .5 * (this.getYBottom() + this.getYTop())
                },
                getXLeft: function () {
                    return X.arrayMin(this.rects, function (t) {
                        return t.getXLeft()
                    })
                },
                getXRight: function () {
                    return X.arrayMax(this.rects, function (t) {
                        return t.getXRight()
                    })
                },
                getWidth: function () {
                    return this.rects.isEmpty() ? 0 : this.getXRight() - this.getXLeft()
                },
                getXCenter: function () {
                    return .5 * (this.getXLeft() + this.getXRight())
                },
                toSvg: function () {
                    return ""
                },
                render: function () {
                    var t = "";
                    return X.config.svgDebug && X.arrayEach(this.rects, function (e) {
                        t += e.bgColorSvg()
                    }), t += this.toSvg()
                },
                getUniqueId: function () {
                    return this.type + this.id
                }
            }, t)
        }, X.svg.mergeElements = function (t) {
            var e = X.svg.newElement();
            return X.arrayEach(t, function (t) {
                e.pushRects(t.getRects())
            }), e.toSvg = function () {
                return t.isEmpty() ? "" : X.arraySum(t, function (t) {
                    return t.toSvg()
                })
            }, e
        }, X.svg.newRectElement = function (t) {
            var e = X.extend(X.svg.newElement(), t);
            return e.newRect(X.oneValue(t.x, 0), X.oneValue(t.y, 0), X.oneValue(t.width, 0), X.oneValue(t.height, 0)), e
        }, X.svg.newCellElement = function (t, e) {
            return X.svg.newRectElement(X.extend({
                x: t.getXLeft(),
                y: t.getYTop(),
                width: t.getWidth(),
                height: t.getHeight()
            }, e))
        }, X.svg.newElements = function (t) {
            var e = X.extend({
                elements: [],
                push: function (t) {
                    this.elements.push(t)
                },
                newCellElement: function (t, e) {
                    this.push(X.svg.newCellElement(t, e))
                },
                newRectElement: function (t) {
                    this.push(X.svg.newRectElement(t))
                },
                init: function () {}
            }, t);
            return e.init(), e.elements
        }, X.svg.newElementGroup = function () {
            return {
                elements: [],
                getElementsXBetween: function (t, e) {
                    return X.arrayGrep(this.elements, function (r) {
                        return r.isXBetween(t, e)
                    })
                },
                getYTopBetween: function (t, e) {
                    return X.arrayMin(this.getElementsXBetween(t, e), function (r) {
                        return r.getYTopBetween(t, e)
                    })
                },
                getYBottomBetween: function (t, e) {
                    return X.arrayMax(this.getElementsXBetween(t, e), function (r) {
                        return r.getYBottomBetween(t, e)
                    })
                },
                getYTop: function () {
                    return X.arrayMin(this.elements, function (t) {
                        return t.getYTop()
                    })
                },
                getYBottom: function () {
                    return X.arrayMax(this.elements, function (t) {
                        return t.getYBottom()
                    })
                },
                pushElements: function (t) {
                    var e = this;
                    X.arrayEach(t, function (t) {
                        e.elements.push(t)
                    })
                },
                pushElementAbove: function (t, e) {
                    var r = this;
                    e = X.oneValue(e, 2);
                    var c = X.arrayMin(t.getRects(), function (t) {
                        var c = r.getYTopBetween(t.getXLeft(), t.getXRight());
                        return X.notDefined(c) && (c = e), c - e - t.getYBottom()
                    });
                    return c = X.isDefined(c) ? c : 0, t.transform(0, c), r.elements.push(t), c
                },
                pushElementBelow: function (t, e) {
                    var r = this;
                    e = X.oneValue(e, 2);
                    var c = X.arrayMax(t.getRects(), function (t) {
                        var c = r.getYBottomBetween(t.getXLeft(), t.getXRight());
                        return X.notDefined(c) && (c = -1 * e), c + e - t.getYTop()
                    });
                    return c = X.isDefined(c) ? c : 0, t.transform(0, c), r.elements.push(t), c
                },
                transform: function (t, e) {
                    X.arrayEach(this.elements, function (r) {
                        r.transform(t, e)
                    })
                },
                toElement: function () {
                    return X.svg.mergeElements(this.elements)
                },
                toSvg: function () {
                    return this.elements.isEmpty() ? "" : X.arraySum(this.elements, function (t) {
                        return t.render()
                    })
                }
            }
        }, X.svg.newBarElements = function (t) {
            return X.svg.newElements({
                init: function () {
                    this.newCellElement(t, {
                        toSvg: function () {
                            var e = {
                                x: this.getXCenter(),
                                y: this.getYCenter(),
                                id: t.getUniqueId(),
                                "class": "bar",
                                firstLine: t.firstLine,
                                firstColumn: t.firstColumn,
                                lastLine: t.lastLine,
                                lastColumn: t.lastColumn
                            };
                            switch (!X.config.checkMeasure || t.isIntegerMeasure || t.isIncompleteMeasure || (e.stroke = "red", e["stroke-width"] = "2"), t.type) {
                                case X.barType.singleBar:
                                    return X.svg.renderUse("xiaojiexian", e);
                                case X.barType.sectionEndBar:
                                    return X.svg.renderUse("xiaojiexian_shuangxian", e);
                                case X.barType.dashedBar:
                                    return X.svg.renderUse("xiaojiexian_xuxian", e);
                                case X.barType.blankBar:
                                    return X.svg.renderUse("xiaojiexian_weibu", e);
                                case X.barType.endBar:
                                    return X.svg.renderUse("jieshufu", e);
                                case X.barType.repeatBeginBar:
                                    return e.x -= 3, X.svg.renderUse("xunhuan_zuo", e);
                                case X.barType.repeatEndBar:
                                    return e.x += 3, X.svg.renderUse("xunhuan_you", e);
                                case X.barType.repeatBothBar:
                                    return X.svg.renderUse("xunhuan_zuoyou", e);
                                default:
                                    return ""
                            }
                        }
                    }), this.topMarkToElements(), this.bottomMarkToElements()
                },
                bottomMarkToElements: function () {
                    var e = this,
                        r = t.getXCenter(),
                        c = {
                            y: t.getYBottom(),
                            height: X.config.barMarkHeight,
                            dy: .5 * t.getHeight()
                        },
                        i = function (t, i, l) {
                            c.width = i, c.x = r - .5 * i, c.toSvg = function () {
                                return X.svg.renderUse(t, {
                                    x: this.getXCenter(),
                                    y: this.getYTop() - this.dy
                                })
                            }, e.newRectElement(c), l && (c.x += c.width, c.width = 10, c.toSvg = function () {
                                return X.svg.renderText(l, {
                                    x: this.getXLeft(),
                                    y: this.getYCenter() + 5,
                                    fill: X.config.fontColor,
                                    "font-size": 10,
                                    "xml:space": "preserve",
                                    "text-anchor": "left"
                                })
                            }, e.newRectElement(c)), c.y += c.height
                        };
                    X.arrayEach(t.fine, function (t) {
                        i("xiaojiexian_fine", 25, t.n)
                    }), X.arrayEach(t.ds, function (t) {
                        i("xiaojiexian_ds", 21, t.n)
                    }), X.arrayEach(t.dc, function (t) {
                        i("xiaojiexian_dc", 21, t.n)
                    }), c.y == t.getYBottom() && X.config.showBarNum && t.num && t.num % X.config.measuresPerBarNum == 0 && function () {
                        var i = t.num + "";
                        c.width = 12 * i.length, c.height = 12 * 1.6, c.x = r - .5 * c.width, c.toSvg = function () {
                            return X.svg.renderRect({
                                x: this.getXLeft(),
                                y: this.getYTop() + 12 * .3,
                                width: this.getWidth(),
                                height: 12 * 1.3,
                                fill: "none",
                                stroke: X.config.fontColor
                            }) + X.svg.renderText(i, {
                                x: this.getXCenter(),
                                y: this.getYCenter() + 6,
                                fill: X.config.fontColor,
                                "font-size": 12,
                                "xml:space": "preserve",
                                "text-anchor": "middle"
                            })
                        }, e.newRectElement(c)
                    }()
                },
                topMarkToElements: function () {
                    var e = this,
                        r = t.getXCenter(),
                        c = {
                            y: t.getYTop(),
                            width: t.getWidth(),
                            height: X.config.barMarkHeight + 2
                        };
                    c.dy = .5 * t.getHeight() + c.height;
                    var i = function (t, i, l) {
                        c.width = i, c.x = r - .5 * i, c.y -= c.height, c.toSvg = function () {
                            return X.svg.renderUse(t, {
                                x: this.getXCenter(),
                                y: this.getYTop() + this.dy
                            })
                        }, e.newRectElement(c), l && (c.x += c.width, c.width = 10, c.toSvg = function () {
                            return X.svg.renderText(l, {
                                x: this.getXLeft(),
                                y: this.getYCenter() + 5,
                                fill: X.config.fontColor,
                                "font-size": 10,
                                "xml:space": "preserve",
                                "text-anchor": "left"
                            })
                        }, e.newRectElement(c))
                    };
                    X.arrayEach(t.jump, function (t) {
                        i("xiaojiexian_ty", 14, t.n)
                    }), X.arrayEach(t.start, function (t) {
                        i("xiaojiexian_hs", 14, t.n)
                    })
                }
            })
        }, X.svg.renderPaperBegin = function () {
            var t = X.svg.renderTemplate('<svg width="{paperWidth}" height="{paperHeight}" viewBox="0 0 {paperWidth} {paperHeight}" class="sheet-svg" style="page-break-before:always; -webkit-font-smoothing:antialiased; font-family:{fontFamily};" version="1.1" encoding="UTF-8" xmlns="http://www.w3.org/2000/svg">');
            return t += X.svg.renderRect({
                    x: 0,
                    y: 0,
                    height: "100%",
                    width: "100%",
                    fill: X.config.svgDebug ? X.svg.randLightColor() : X.config.backgroundColor
                }), t += X.svg.handleTmplVars('<defs> <g id="li_up" transform="translate(0,-18)"> <path d="M0.5,17 l 1 -2.2 l 1 0.5 l 1 -2.2 l 1 0.5 l 1 -2.2 l 1 0.5 l 1 -2.2 l 1 0.5 l 1 -2.2 l 1 0.5 l 1 -2.2 l 1 0.5 l 1 -2 " fill="none" stroke="{font_color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ></path> </g> <g id="li_down" transform="translate(0,-18)"> <path d="M0.5,0.5 l 1 2.2 l 1 -0.5 l 1 2.2 l 1 -0.5 l 1 2.2 l 1 -0.5 l 1 2.2 l 1 -0.5 l 1 2.2 l 1 -0.5 l 1 2.2 l 1 -0.5 l 1 2 " fill="none" stroke="{font_color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ></path> </g> <g id="duo" transform="translate(0,-18)"> <path d="M1,9 l6,-3 l 6 10 l -3 -2 m 3 2 l -0.4 -3.5" fill="none" stroke="{font_color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ></path> </g> <g id="da_tip" transform="translate(-3,-27)"> <path fill="{font_color}" d="M0.49 6.32L0.49 4.75L2.61 4.75L2.61 2.81L4.37 2.81L4.37 4.75L6.54 4.75L6.54 6.32L4.37 6.32L4.37 8.07L4.37 8.07Q5.47 7.85 6.50 7.62L6.50 7.62L6.50 7.62Q6.53 8.39 6.60 9.34L6.60 9.34L6.60 9.34Q5.44 9.59 4.37 9.81L4.37 9.81L4.37 12.74L4.37 12.74Q4.37 14.02 3.15 14.18L3.15 14.18L3.15 14.18Q2.44 14.26 0.83 14.27L0.83 14.27L0.83 14.27Q0.73 13.57 0.48 12.53L0.48 12.53L0.48 12.53Q1.09 12.62 2.13 12.59L2.13 12.59L2.13 12.59Q2.61 12.59 2.61 12.06L2.61 12.06L2.61 10.20L2.61 10.20Q1.55 10.44 0.57 10.66L0.57 10.66L0.25 8.82L0.25 8.82Q1.46 8.63 2.61 8.41L2.61 8.41L2.61 6.32L0.49 6.32Z"></path> </g> <g id="die_tip" transform="translate(-5,-27)"> <path fill="{font_color}" d="M2.06 5.81L3.60 5.18L3.60 5.18Q4.59 7.81 6.03 9.37L6.03 9.37L6.03 9.37Q7.73 7.54 8.51 5.00L8.51 5.00L1.10 5.00L1.10 3.41L10.43 3.41L10.43 4.96L10.43 4.96Q9.36 8.34 7.41 10.55L7.41 10.55L7.41 10.55Q9.22 11.78 11.84 12.60L11.84 12.60L11.84 12.60Q11.16 13.36 10.54 14.23L10.54 14.23L10.54 14.23Q7.81 13.31 5.99 11.83L5.99 11.83L5.99 11.83Q4.14 13.24 1.45 14.25L1.45 14.25L1.45 14.25Q0.95 13.58 0.20 12.68L0.20 12.68L0.20 12.68Q2.79 11.85 4.66 10.52L4.66 10.52L4.66 10.52Q3.05 8.62 2.06 5.81L2.06 5.81Z"></path> </g> <g id="t_tip" transform="translate(0, -14)"><path fill="{font_color}" d="M-0.89 0L0.88 0L0.88-7.40L3.40-7.40L3.40-8.88L-3.39-8.88L-3.39-7.40L-0.89-7.40Z"></path></g> <g id="k_tip" transform="translate(0, -14)"><path fill="{font_color}" d="M-3.02 0L-1.25 0L-1.25-2.50L-0.08-3.98L2.21 0L4.16 0L0.97-5.39L3.68-8.88L1.73-8.88L-1.21-5.03L-1.25-5.03L-1.25-8.88L-3.02-8.88Z"></path></g> <g id="l_tip" transform="translate(0, -14)"><path fill="{font_color}" d="M-2.37 0L3.01 0L3.01-1.49L-0.59-1.49L-0.59-8.88L-2.37-8.88Z"></path></g> <g id="r_tip" transform="translate(0, -14)"><path fill="{font_color}" d="M-1.22-7.48L-0.07-7.48C1.07-7.48 1.69-7.15 1.69-6.19C1.69-5.24 1.07-4.76-0.07-4.76L-1.22-4.76ZM3.82 0L1.74-3.64C2.76-4.03 3.43-4.86 3.43-6.19C3.43-8.23 1.96-8.88 0.10-8.88L-3.00-8.88L-3.00 0L-1.22 0L-1.22-3.36L0.01-3.36L1.84 0Z"></path></g> <g id="accent_up" transform="translate(-7,-26)"> <path fill="{font_color}" d="M7.46 5.20L11.78 13.24L9.56 13.24L6.80 7.64L6.75 7.64L4.15 13.24L1.95 13.24L6.03 5.20L7.46 5.20Z"></path> </g> <g id="flutter_tongue" transform="translate(-5,-30)"> <path fill="{font_color}" d="M9.94 9.55L10.82 12L7.35 12.49L9.82 15.21L7.62 16.72L5.85 13.49L4.09 16.72L1.89 15.21L4.37 12.49L0.90 12L1.76 9.55L4.96 10.90L4.44 7.24L7.27 7.24L6.75 10.90L9.94 9.55Z"></path> </g> <g id="bianyinfu_x" transform="translate(-15,-15)"> <path fill="{font_color}" d="M5.45 8.98L7.60 11.12L6.71 12L4.58 9.84L2.43 12L1.54 11.11L3.70 8.98L1.54 6.83L2.41 5.95L4.58 8.10L6.74 5.95L7.59 6.86L5.45 8.98Z"></path> </g> <g id="diaohao_zimu_c" transform="translate(-50,-50)"> <path fill="{font_color}" d="m55.85,42.82703q-1.71571,-0.90955 -4.3203,-0.90955q-3.36943,0 -5.37457,2.13949t-2.00512,5.65363q0,3.76219 2.26351,6.06705t5.73631,2.30486q2.23251,0 3.70017,-0.64081l0,-2.10849q-1.67438,0.93021 -3.6795,0.93021q-2.60459,0 -4.25832,-1.73639t-1.65372,-4.69241q0,-2.81131 1.54002,-4.46502t4.02058,-1.65371q2.31519,0 4.03091,1.05424l0,-1.94311l0.00002,0.00001l0.00002,0z"></path> </g> <g id="diaohao_zimu_d" transform="translate(-50,-50)"> <path fill="{font_color}" d="m43.49999,42.00974l0,15.98051l4.54472,0q3.63578,0 6.04554,-2.11382t2.40975,-5.66505q0,-3.72033 -2.40975,-5.96098t-6.19351,-2.24066l-4.39675,0zm2.05041,14.14149l0,-12.3236l2.3252,0q3.04391,0 4.7561,1.66992t1.7122,4.65042q0,3.00163 -1.75447,4.50245t-4.60813,1.50081l-2.4309,0z"></path> </g> <g id="diaohao_zimu_e" transform="translate(-50,-50)"> <path fill="{font_color}" d="m54.32501,41.94654l-8.65002,0l0,16.10692l8.28783,0l0,-1.85357l-6.2212,0l0,-5.15593l5.77378,0l0,-1.83226l-5.77378,0l0,-5.4329l6.58339,0l0,-1.83226z"></path> </g> <g id="diaohao_zimu_f" transform="translate(-50,-50)"> <path fill="{font_color}" d="m54,43.9362l-6.00514,0l0,5.25113l5.57327,0l0,1.79205l-5.57327,0l0,6.89732l-1.99486,0l0,-15.7534l8,0l0,1.8129z"></path> </g> <g id="diaohao_zimu_g" transform="translate(-50,-50)"> <path d="m56.3,56.6733q-2.29645,1.33057 -5.18226,1.33057q-3.3329,0 -5.37532,-2.12891t-2.04242,-5.67026q0,-3.5823 2.25581,-5.89544t5.77161,-2.31314q2.47935,0 4.20677,0.79834l0,2.14938q-1.82903,-1.1668 -4.38968,-1.1668q-2.49968,0 -4.13564,1.72973t-1.63596,4.55463q0,2.92725 1.50386,4.5444t4.0442,1.61715q1.76807,0 2.98741,-0.67552l0,-4.1964l-3.3329,0l0,-1.76044l5.32452,0l0,7.08271z" fill="{font_color}"></path> </g> <g id="diaohao_zimu_a" transform="translate(-50,-50)"> <path fill="{font_color}" d="m56.99999,57.83243l-2.22026,0l-1.58298,-4.28918l-6.47575,0l-1.50076,4.28918l-2.22026,0l5.92072,-15.66486l2.15858,0l5.92072,15.66486l-0.00002,0l0.00001,0zm-4.41998,-6.05045l-2.36417,-6.52703q-0.10279,-0.31081 -0.22614,-1.09821l-0.06168,0q-0.1028,0.72523 -0.2467,1.09821l-2.32305,6.52703l5.22173,0l0.00002,0z"></path> </g> <g id="diaohao_zimu_b" transform="translate(-50,-50)"> <path d="m45.05,57.87592l0,-15.75184l4.60754,0q2.05472,0 3.3,0.9897t1.24529,2.61488q0,1.31266 -0.73679,2.31277t-2.02358,1.41683l0,0.04168q1.59811,0.16668 2.55283,1.20847t0.95472,2.62531q0,2.02106 -1.45284,3.28164t-3.7151,1.26056l-4.73207,0l-0.00001,0zm2.01321,-13.9808l0,4.93808l1.84717,0q1.47359,0 2.31416,-0.71883t0.84058,-1.98982q0,-2.22942 -2.96793,-2.22942l-2.03397,0l-0.00001,-0.00001zm0,6.70912l0,5.50064l2.4283,0q1.59811,0 2.46981,-0.73967t0.8717,-2.05233q0,-2.70864 -3.67358,-2.70864l-2.09623,0z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_0" transform="translate(-50,-50)"> <path d="m50.00001,42.80584c2.96498,0.29137 4.5046,2.70329 4.62194,7.23756c-0.11734,4.47715 -1.65651,6.8603 -4.62194,7.15077c-2.96455,-0.23158 -4.50592,-2.61606 -4.62195,-7.15077c0.11601,-4.53427 1.6574,-6.94619 4.62195,-7.23756zm-1.7442,10.02809c-0.05844,2.55893 0.52339,3.77974 1.74374,3.66238c1.22125,0.17447 1.80132,-1.16234 1.7442,-4.01131l0,-4.97042c0,-2.67318 -0.58185,-3.98121 -1.7442,-3.92409c-1.22079,-0.11557 -1.80219,1.018 -1.74374,3.40115l0,5.8423z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_1" transform="translate(-50,-50)"> <path d="m51.71218,55.39867c0,0.64459 0.26345,0.96553 0.78989,0.96553l1.49244,0l0,0.78989l-7.19868,0l0,-0.78989l1.40462,0c0.52689,-0.0575 0.78989,-0.35127 0.78989,-0.87772l0,-9.8318c-0.937,0.5269 -1.8147,0.90802 -2.63358,1.14117l-0.35126,-0.61427c1.75542,-0.87772 3.2483,-1.98903 4.47681,-3.33566l1.22897,0l0,12.55275l0.00089,0l0.00001,0z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_2" transform="translate(-50,-50)"> <path d="m45.36745,56.39778c0.23435,-0.2935 0.58745,-0.67572 1.05883,-1.1471c3.70613,-3.76393 5.3524,-6.3234 4.9415,-7.67707c-0.05914,-1.88197 -0.82448,-2.85296 -2.2942,-2.91212c-1.35367,0.11874 -2.20593,0.971 -2.55902,2.55903l-0.88228,0c0.47004,-2.82384 1.97023,-4.29356 4.50013,-4.41231c2.47076,0.17654 3.7944,1.50018 3.97094,3.97094c0.1174,1.53066 -0.91275,3.20695 -3.08866,5.02978c-1.29452,1.17757 -2.2942,2.17726 -3.00039,3.00039l4.23577,0c0.99967,0.05914 1.558,-0.49918 1.67673,-1.67675l0.70573,0l-0.44092,4.05922l-8.82417,0l0,-0.794l-0.00002,-0.00001z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_3" transform="translate(-50,-50)"> <path d="m48.3936,49.61003c1.56253,-1.27286 2.31469,-2.40155 2.25738,-3.38651c-0.05819,-1.04182 -0.57934,-1.59117 -1.56297,-1.64982c-0.86813,0 -1.56297,0.52114 -2.08411,1.56297l-0.6944,-0.26057c0.75172,-1.96726 2.0841,-2.98044 3.99405,-3.03907c1.79355,0.11684 2.77851,0.92676 2.95222,2.43109c0,1.15823 -0.78126,2.20049 -2.34423,3.12549l0.08686,0c2.0841,0.11684 3.21279,1.3606 3.3865,3.73349c-0.23192,3.18413 -2.0841,4.86217 -5.55702,5.03589c-1.96857,-0.11684 -3.03907,-0.69485 -3.21279,-1.73668c0.05687,-0.69441 0.46251,-1.07049 1.21554,-1.12869c0.46249,0 0.92543,0.31876 1.38925,0.95541c0.46249,0.69441 0.98365,1.04183 1.56297,1.04183c1.21555,-0.11507 1.85175,-1.12869 1.9104,-3.03908c-0.05819,-2.02546 -0.81125,-3.09595 -2.25782,-3.21279c-0.11684,0 -0.2319,0.02999 -0.34742,0.08686c-0.11684,0.0582 -0.23191,0.08685 -0.34742,0.08685l-0.34698,-0.60666l-0.00001,-0.00001z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_4" transform="translate(-50,-50)"> <path d="m50.13028,53.52836l-4.87848,0l0,-0.95818l6.44669,-9.7574l1.13291,0l0,9.23452l1.9168,0l0,1.48106l-1.9168,0l0,3.65886l-2.70068,0l0,-3.65886l-0.00045,0zm0,-6.79528l-0.08714,0l-3.39743,5.31422l3.48457,0l0,-5.31422l0,0z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_5" transform="translate(-50,-50)"> <path d="m46.81631,42.91905l5.04189,0c0.47116,0 0.73663,-0.14641 0.79591,-0.44242l0.70788,0l-0.35394,2.65367l-5.39581,0l-0.08849,2.74216c0.58886,-0.17698 1.20781,-0.26546 1.8573,-0.26546c3.12529,0.17698 4.77687,1.74008 4.9534,4.68839c-0.23626,3.06691 -2.094,4.68839 -5.57279,4.86536c-1.94625,-0.05929 -2.97842,-0.61941 -3.0961,-1.68078c0.05794,-0.76582 0.44197,-1.15031 1.14986,-1.15031c0.53093,0 1.00209,0.35395 1.41533,1.06137c0.41188,0.64949 0.85431,0.97335 1.32682,0.97335c1.29629,-0.11768 2.00418,-1.11977 2.12321,-3.00761c-0.05929,-2.12321 -0.97334,-3.24252 -2.74215,-3.3611c-0.59021,0 -1.18041,0.14777 -1.76928,0.44197l-0.61894,-0.35394l0.26591,-7.16463l-0.00001,0z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_6" transform="translate(-50,-50)"> <path d="m53.39882,43.50684c-2.73125,0.9886 -4.35753,2.87596 -4.88016,5.66476c0.7545,-0.52306 1.53865,-0.78416 2.3529,-0.78416c2.38167,0.11727 3.63047,1.53999 3.74729,4.27036c-0.17435,2.90562 -1.65591,4.41461 -4.44471,4.53189c-3.02155,-0.11728 -4.61908,-2.00465 -4.79299,-5.66476c0.23144,-4.70626 2.75871,-7.61053 7.58178,-8.71463l0.43589,0.69653l0,0.00001zm-3.22468,5.92628c-0.63989,0 -1.25013,0.26154 -1.83028,0.78416c0,0.05841 0,0.17435 0,0.3487c-0.05841,0.6399 -0.08718,1.22005 -0.08718,1.74311c0,2.78879 0.60981,4.18319 1.83029,4.18319c1.22003,0.05843 1.77141,-1.13286 1.65592,-3.57294c0.11593,-2.3821 -0.40714,-3.54374 -1.56876,-3.48621l0,0z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_7" transform="translate(-50,-50)"> <path d="m52.45176,45.31878l-4.54721,0c-0.71356,0 -1.15955,0.0892 -1.3375,0.26759c-0.23816,0.11998 -0.41654,0.50575 -0.53516,1.1591l-0.80232,0l0.35679,-3.92328l9.18407,0l0,0.89151l-5.17204,13.46413l-2.3182,0l5.17158,-11.85905l-0.00001,0.00001z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_8" transform="translate(-50,-50)"> <path d="m51.56455,49.26119c1.96925,1.0429 2.95522,2.34661 2.95522,3.91116c-0.29086,2.49181 -1.82539,3.8242 -4.60672,3.9981c-2.72439,-0.17389 -4.20199,-1.36066 -4.43282,-3.56382c0,-1.4476 0.8977,-2.54874 2.69395,-3.30254c-1.68107,-1.09982 -2.49181,-2.3466 -2.43354,-3.73726c0.23081,-2.31704 1.62148,-3.56338 4.17197,-3.73727c2.607,0.1739 4.02636,1.27502 4.2585,3.30254c0.0578,1.27503 -0.81075,2.31835 -2.60655,3.12909zm-2.60745,1.56456c-0.81207,0.57991 -1.18809,1.47759 -1.12983,2.69437c0,1.91233 0.75204,2.89783 2.25966,2.95522c1.44759,-0.11563 2.2014,-0.83943 2.25965,-2.17272c0.23127,-1.15896 -0.89856,-2.31747 -3.38949,-3.47686l0.00001,0zm0.86944,-7.21415c-1.21677,0.05826 -1.85495,0.69555 -1.91233,1.91232c-0.05825,1.21677 0.92637,2.28967 2.95522,3.21561c0.75248,-0.57861 1.12983,-1.41891 1.12983,-2.52049c-0.05825,-1.67974 -0.78205,-2.54917 -2.17271,-2.60743z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_9" transform="translate(-50,-50)"> <path d="m46.58061,56.53633c2.59713,-0.80753 4.2122,-2.68372 4.84785,-5.62725c-0.75083,0.5196 -1.50166,0.77898 -2.25073,0.77898c-2.36721,-0.1732 -3.63588,-1.55794 -3.80908,-4.15549c0.22947,-2.88506 1.73113,-4.44342 4.50145,-4.67465c3.05825,0.1732 4.64476,2.13556 4.76124,5.88662c-0.28925,4.50189 -2.79977,7.30166 -7.53156,8.39758l-0.51917,-0.60577l-0.00001,0zm3.20288,-5.8866c0.5196,0 1.1258,-0.22992 1.81816,-0.6928c0.11518,-0.92271 0.17364,-1.70168 0.17364,-2.33733c0,-2.65383 -0.63565,-3.98228 -1.90476,-3.98228c-1.15525,-0.0567 -1.70299,1.09723 -1.64497,3.46269c-0.11694,2.42391 0.40268,3.60775 1.55793,3.54973l0,-0.00001z" fill="{font_color}"></path> </g> <g id="shuzi_c_bian_12" transform="translate(-50,-50)"> <path d="m46.71218,55.39867c0,0.64459 0.26345,0.96553 0.78989,0.96553l1.49244,0l0,0.78989l-7.19868,0l0,-0.78989l1.40462,0c0.52689,-0.0575 0.78989,-0.35127 0.78989,-0.87772l0,-9.8318c-0.937,0.5269 -1.8147,0.90802 -2.63358,1.14117l-0.35126,-0.61427c1.75542,-0.87772 3.2483,-1.98903 4.47681,-3.33566l1.22897,0l0,12.55275l0.00089,0l0.00001,0z" fill="{font_color}"></path> <path d="m50.36745,56.39778c0.23435,-0.2935 0.58745,-0.67572 1.05883,-1.1471c3.70613,-3.76393 5.3524,-6.3234 4.9415,-7.67707c-0.05914,-1.88197 -0.82448,-2.85296 -2.2942,-2.91212c-1.35367,0.11874 -2.20593,0.971 -2.55902,2.55903l-0.88228,0c0.47004,-2.82384 1.97023,-4.29356 4.50013,-4.41231c2.47076,0.17654 3.7944,1.50018 3.97094,3.97094c0.1174,1.53066 -0.91275,3.20695 -3.08866,5.02978c-1.29452,1.17757 -2.2942,2.17726 -3.00039,3.00039l4.23577,0c0.99967,0.05914 1.558,-0.49918 1.67673,-1.67675l0.70573,0l-0.44092,4.05922l-8.82417,0l0,-0.794l-0.00002,-0.00001z" fill="{font_color}"></path> </g> <g id="diaohao_fu" transform="translate(-50,-50)"> <path d="m53.90001,57.81227l-8.81873,0l0,-1.70001l3.45433,0l0,-11.7568l-3.53561,1.04459l0,-1.80243l5.46599,-1.59762l0,14.11224l3.43402,0l0,1.70001l0,0.00001l0,0.00001z" fill="{font_color}"></path> <rect height="2" width="11" y="46.85897" x="68" stroke-width="33" fill="{font_color}"></rect> <rect height="2" width="11" y="51.32479" x="68" stroke-width="33" fill="{font_color}"></rect> </g> <g id="bianyinfu_sheng" transform="translate(-50,-50)"> <path stroke-width="33" d="m41.54219,35.03224c0.12982,-0.07418 0.33382,-0.01855 0.408,0.14836c0.03709,0.07418 0.03709,0.12982 0.03709,1.428c0,0.76036 0,1.37236 0.01855,1.37236c0,0 0.16691,-0.07418 0.37091,-0.14837c0.42654,-0.16691 0.48218,-0.18546 0.59345,-0.09272c0.12982,0.09272 0.12982,0.11127 0.12982,0.85309c0,0.63055 0,0.68618 -0.03709,0.74182c-0.01854,0.03709 -0.05563,0.07418 -0.07418,0.09273c-0.03709,0.01854 -0.25964,0.12982 -0.51927,0.22255l-0.46364,0.204l-0.01855,1.50218c0,0.816 0,1.50218 0.01855,1.50218c0,0 0.16691,-0.07418 0.37091,-0.14836c0.42654,-0.16691 0.48218,-0.18546 0.59345,-0.09273c0.12982,0.09273 0.12982,0.11127 0.12982,0.85309c0,0.63055 0,0.68618 -0.03709,0.74182c-0.01854,0.03709 -0.05563,0.07418 -0.07418,0.09273c-0.03709,0.01855 -0.25964,0.12981 -0.51927,0.22254l-0.46364,0.204l-0.01855,1.55782c0,1.40945 -0.01854,1.57637 -0.03709,1.632c-0.12982,0.22255 -0.44509,0.22255 -0.57491,0c-0.01854,-0.05564 -0.03709,-0.204 -0.03709,-1.50218l0,-1.428l-0.79745,0.31528l-0.77891,0.31527l0,1.50218c0,1.59491 0,1.55782 -0.09273,1.65055c-0.03709,0.05564 -0.16691,0.11127 -0.22255,0.11127c-0.07418,0 -0.204,-0.05563 -0.24109,-0.11127c-0.09273,-0.09272 -0.09273,-0.05563 -0.09273,-1.50218c0,-0.76037 0,-1.37236 -0.01854,-1.37236c0,0 -0.16691,0.07418 -0.37091,0.14836c-0.42655,0.16691 -0.48218,0.18546 -0.59346,0.09273c-0.12982,-0.09273 -0.12982,-0.11127 -0.12982,-0.85309c0,-0.63055 0,-0.68618 0.03709,-0.74182c0.01855,-0.03709 0.05564,-0.07418 0.07418,-0.09272c0.03709,-0.01855 0.25964,-0.12982 0.51927,-0.22255l0.48218,-0.204l0,-1.50218c0,-0.816 0,-1.50218 -0.01854,-1.50218c0,0 -0.16691,0.07418 -0.37091,0.14837c-0.42655,0.16691 -0.48218,0.18545 -0.59346,0.09272c-0.12982,-0.09272 -0.12982,-0.11127 -0.12982,-0.85309c0,-0.63055 0,-0.68618 0.03709,-0.74182c0.01855,-0.03709 0.05564,-0.07418 0.07418,-0.09273c0.03709,-0.01854 0.25964,-0.12982 0.51927,-0.22255l0.48218,-0.204l0,-1.55782c0,-1.40945 0.01855,-1.57636 0.03709,-1.632c0.12982,-0.22255 0.44509,-0.22255 0.57491,0c0.01855,0.05564 0.03709,0.204 0.03709,1.50218l0.01854,1.428l0.77891,-0.31527l0.77891,-0.31527l0,-1.50219c0,-1.40945 0,-1.50218 0.03709,-1.57637c0.03709,-0.07418 0.07418,-0.11127 0.16691,-0.14836zm-0.204,6.58364l0,-1.50218l-0.79745,0.31527l-0.77891,0.31527l0,1.52073l0,1.50218l0.05563,-0.01855c0.03709,-0.01855 0.38946,-0.16691 0.79746,-0.31527l0.72327,-0.29673l0,-1.52073z" fill="{font_color}"></path> </g> <g id="paihao_xian" transform="translate(-50,-50)"> <rect fill="{font_color}" stroke-width="33" stroke-linejoin="miter" stroke-linecap="butt" x="51" y="49" width="21" height="2"></rect> </g> <g id="jiepaifu" transform="translate(-50,-50)"> <path d="m57.72622,53.84865c0.3194,-0.02662 2.65283,0.14597 2.58032,0.62416c-0.07251,0.47815 -0.1692,-15.5075 0.37265,-15.27699c0.54185,0.23049 0.26611,-0.06029 0.26611,0c0,0.06026 0.10779,17.47403 -0.02531,17.87328c-0.58551,1.80979 -2.71472,3.48653 -4.89711,3.88574c-0.47906,0.07985 -1.27753,0.07985 -1.62353,0.02665c-1.09118,-0.23956 -1.75659,-0.77187 -1.99614,-1.65014c-0.0532,-0.15966 -0.0532,-0.26619 -0.0532,-0.58556c0,-0.39921 0,-0.55891 0.13306,-0.95811c0.21295,-0.69201 0.66541,-1.35739 1.27753,-1.96954c1.06462,-1.06458 2.52845,-1.78315 3.96563,-1.9695l-0.00001,0.00001z" stroke-width="33" fill="{font_color}"></path> <rect height="1.9" width="11.7" y="46.68741" x="66.55" stroke-width="33" fill="{font_color}"></rect> <rect height="1.9" width="11.7" y="51.78741" x="66.55" stroke-width="33" fill="{font_color}"></rect> </g> <g id="yinfu_0" transform="translate(-50,-50)"> <rect width="11.1" height="17.9" x="44.45" y="41.05" stroke-width="7"></rect> <path fill="{font_color}" stroke-width="0" d="m50.00001,41.01781c3.70189,0.36378 5.62417,3.37516 5.77067,9.03637c-0.1465,5.58989 -2.06822,8.56535 -5.77067,8.92801c-3.70135,-0.28914 -5.62582,-3.26625 -5.77068,-8.92801c0.14484,-5.66121 2.06933,-8.67259 5.77068,-9.03637zm-2.1777,12.52045c-0.07297,3.19493 0.65347,4.71915 2.17713,4.57263c1.52478,0.21783 2.24901,-1.45123 2.1777,-5.00828l0,-6.20576c0,-3.33757 -0.72646,-4.9707 -2.1777,-4.89938c-1.52421,-0.14429 -2.2501,1.27101 -2.17713,4.24646l0,7.29433z"></path> </g> <g id="yinfu_1" transform="translate(-50,-50)"> <rect width="11.1" height="17.9" x="44.45" y="41.05" stroke-width="7"></rect> <path fill="{font_color}" stroke-width="0" d="m51.71225,56.72592c0,0.80306 0.32822,1.2029 0.98409,1.2029l1.85934,0l0,0.98408l-8.96846,0l0,-0.98408l1.74994,0c0.65642,-0.07163 0.98409,-0.43763 0.98409,-1.0935l0,-12.24893c-1.16737,0.65644 -2.26085,1.13125 -3.28105,1.42172l-0.43762,-0.76528c2.18699,-1.09351 4.04689,-2.47802 5.57743,-4.15573l1.53112,0l0,15.63882l0.00111,0l0.00001,0z"></path> </g> <g id="yinfu_2" transform="translate(-50,-50)"> <rect width="11.1" height="17.9" x="44.45" y="41.05" stroke-width="7"></rect> <path fill="{font_color}" stroke-width="0" d="m44.23404,57.96309c0.29169,-0.36531 0.73117,-0.84104 1.31789,-1.42776c4.61288,-4.68482 6.66194,-7.8705 6.15051,-9.55537c-0.07361,-2.34241 -1.0262,-3.55098 -2.85551,-3.6246c-1.68486,0.14779 -2.74564,1.20857 -3.18512,3.18512l-1.09814,0c0.58504,-3.51473 2.45228,-5.34404 5.60115,-5.49184c3.07526,0.21974 4.72275,1.86723 4.9425,4.94249c0.14612,1.90516 -1.13607,3.99158 -3.84435,6.26038c-1.61124,1.46568 -2.85551,2.70996 -3.73447,3.73448l5.27211,0c1.24426,0.07362 1.93918,-0.6213 2.08697,-2.08698l0.8784,0l-0.54879,5.05236l-10.98313,0l0,-0.98827z"></path> </g> <g id="yinfu_3" transform="translate(-50,-50)"> <rect width="11.1" height="17.9" x="44.45" y="41.05" stroke-width="7"></rect> <path fill="{font_color}" stroke-width="0" d="m47.99024,49.51211c1.95488,-1.59247 2.8959,-3.00457 2.8242,-4.23684c-0.0728,-1.30343 -0.72481,-1.99072 -1.95542,-2.06409c-1.08611,0 -1.95543,0.65199 -2.60742,1.95543l-0.86876,-0.326c0.94048,-2.46124 2.60741,-3.72882 4.99694,-3.80218c2.24391,0.14617 3.47619,1.15947 3.69351,3.04153c0,1.44905 -0.97743,2.75303 -2.93286,3.91029l0.10867,0c2.60741,0.14618 4.01951,1.70224 4.23684,4.67096c-0.29015,3.98365 -2.60741,6.08305 -6.95237,6.30038c-2.46288,-0.14618 -3.80218,-0.86932 -4.01951,-2.17275c0.07115,-0.86877 0.57864,-1.33929 1.52076,-1.4121c0.57862,0 1.15781,0.3988 1.73809,1.19532c0.57862,0.86877 1.23064,1.30343 1.95543,1.30343c1.52077,-0.14397 2.31672,-1.4121 2.39009,-3.80218c-0.0728,-2.53405 -1.01495,-3.87334 -2.82475,-4.01951c-0.14618,0 -0.29013,0.03751 -0.43466,0.10866c-0.14618,0.07282 -0.29015,0.10866 -0.43466,0.10866l-0.43411,-0.75899z"></path> </g> <g id="yinfu_4" transform="translate(-50,-50)"> <rect width="11.1" height="17.9" x="44.45" y="41.05" stroke-width="7"></rect> <path fill="{font_color}" stroke-width="0" d="m50.16211,54.39056l-6.07059,0l0,-1.19232l8.02201,-12.14174l1.40976,0l0,11.49109l2.38519,0l0,1.84297l-2.38519,0l0,4.55295l-3.36062,0l0,-4.55295l-0.00056,0zm0,-8.45579l-0.10844,0l-4.22763,6.61282l4.33606,0l0,-6.61282z"></path> </g> <g id="yinfu_5" transform="translate(-50,-50)"> <rect width="11.1" height="17.9" x="44.45" y="41.05" stroke-width="7"></rect> <path fill="{font_color}" stroke-width="0" d="m46.03386,41.2363l6.28103,0c0.58697,0 0.91767,-0.1824 0.99153,-0.55116l0.88186,0l-0.44093,3.30586l-6.72194,0l-0.11024,3.4161c0.73358,-0.22047 1.50465,-0.33071 2.31377,-0.33071c3.89339,0.22047 5.95088,2.16774 6.17079,5.84065c-0.29433,3.82066 -2.60865,5.84066 -6.94241,6.06112c-2.42457,-0.07386 -3.71043,-0.77164 -3.85703,-2.09386c0.07218,-0.95404 0.55059,-1.43302 1.43246,-1.43302c0.66141,0 1.24837,0.44093 1.76316,1.32222c0.51311,0.80912 1.06427,1.21257 1.65292,1.21257c1.61488,-0.14661 2.49675,-1.39497 2.64503,-3.7468c-0.07386,-2.64502 -1.21256,-4.03943 -3.41608,-4.18715c-0.73527,0 -1.47052,0.18409 -2.20411,0.55059l-0.77106,-0.44093l0.33126,-8.92548z"></path> </g> <g id="yinfu_6" transform="translate(-50,-50)"> <rect width="11.1" height="17.9" x="44.45" y="41.05" stroke-width="7"></rect> <path fill="{font_color}" stroke-width="0" d="m54.20902,41.95901c-3.38233,1.22426 -5.39627,3.56153 -6.04348,7.01512c0.93435,-0.64775 1.90543,-0.97109 2.91377,-0.97109c2.94941,0.14523 4.4959,1.90709 4.64057,5.28833c-0.21591,3.59825 -2.05065,5.46696 -5.50423,5.6122c-3.74183,-0.14524 -5.72017,-2.48251 -5.93554,-7.01512c0.28661,-5.82813 3.41632,-9.42473 9.38911,-10.79202l0.53979,0.86257zm-3.99337,7.33899c-0.79243,0 -1.54814,0.32388 -2.26658,0.97108c0,0.07233 0,0.21592 0,0.43183c-0.07233,0.79243 -0.10796,1.51088 -0.10796,2.15862c0,3.45358 0.75517,5.18037 2.26659,5.18037c1.51086,0.07235 2.19368,-1.40291 2.05066,-4.42466c0.14357,-2.94995 -0.50418,-4.38849 -1.94272,-4.31724z"></path> </g> <g id="yinfu_7" transform="translate(-50,-50)"> <rect width="11.1" height="17.9" x="44.45" y="41.05" stroke-width="7"></rect> <path fill="{font_color}" stroke-width="0" d="m53.05094,44.17476l-5.65846,0c-0.88795,0 -1.44293,0.111 -1.66436,0.33298c-0.29636,0.1493 -0.51834,0.62934 -0.66595,1.44236l-0.99839,0l0.44398,-4.88206l11.42848,0l0,1.10938l-6.43599,16.75452l-2.88472,0l6.43542,-14.75719z"></path> </g> <g id="yinfu_yan" transform="translate(-50,-50)"> <rect width="11.1" height="17.9" x="44.45" y="41.05" stroke-width="7"></rect> <rect height="3.2" width="11" y="48.4" x="44.5" stroke-width="0" fill="{font_color}"></rect> </g> <g id="yinfu_jie" transform="translate(-50,-50)"> <rect width="11.1" height="17.9" x="44.45" y="41.05" stroke-width="7"></rect> <path fill="{font_color}" stroke-width="0" d="m56.32323,41.07743l-2.41862,0l-3.46394,6.75664q-0.12299,0.21336 -0.34843,0.92458l-0.0615,0q-0.02049,-0.09482 -0.34844,-0.9483l-3.56642,-6.73294l-2.4391,0l5.14467,9.00886l-4.73472,8.91401l2.4391,0l3.07449,-6.18766q0.26646,-0.54528 0.53292,-1.2802l0.041,0q0.24596,0.61639 0.5944,1.32763l3.19749,6.14024l2.29561,0l-4.83722,-8.8903l4.89872,-9.03256l0,0.00001z" ></path> </g> <g id="yinfu_hua"> <rect width="11.1" height="17.9" x="-5.55" y="-8.95" stroke-width="7"></rect> <path transform="scale(1.6)" d="M0,0 l 5 0 m -5 0 l -5 0 m 5 0 l -2.5 -4.33 m 2.5 4.33 l -2.5 4.33 m 2.5 -4.33 l 2.5 4.33 m -2.5 -4.33 l 2.5 -4.33 m -2.5 4.33 " fill="none" stroke="{font_color}" stroke-width="1.1" stroke-linecap="round" ></path> </g> <g id="yinfu_kong"> <rect width="11.1" height="17.9" x="-5.55" y="-8.95" stroke-width="7"></rect> </g> <g id="yinfu_A" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-3.29-5.44L-1.29-12.28L0.89-5.44ZM5.77-0.86L0.97-15L-1.11-15L-5.63-0.92L-7.29-0.68L-7.29 0L-2.71 0L-2.71-0.68L-4.59-0.94L-3.49-4.74L1.11-4.74L2.33-0.88L0.55-0.68L0.55 0L7.37 0L7.37-0.68Z"></path></g> <g id="yinfu_B" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-1.23-0.74C-1.29-2.88-1.29-5.08-1.29-7.46L-0.33-7.46C2.09-7.46 3.23-6.42 3.23-4.10C3.23-1.90 1.95-0.74-0.21-0.74ZM-0.29-14.18C1.73-14.18 2.57-13.14 2.57-11.32C2.57-9.34 1.55-8.18-0.51-8.18L-1.29-8.18C-1.29-10.24-1.29-12.22-1.23-14.18ZM-6.45-14.94L-6.45-14.26L-4.65-14.10C-4.59-12.08-4.59-10.04-4.59-8L-4.59-7.28C-4.59-5.12-4.59-2.96-4.65-0.86L-6.45-0.68L-6.45 0L-0.11 0C5.29 0 6.69-2.20 6.69-4.16C6.69-6.24 5.23-7.62 1.63-7.98C4.83-8.54 5.81-9.92 5.81-11.44C5.81-13.46 4.43-14.94 0.59-14.94Z"></path></g> <g id="yinfu_C" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M6.20-4.38L5.02-4.38L3.96-0.64C3.46-0.46 2.96-0.38 2.40-0.38C-0.50-0.38-2.68-2.52-2.68-7.46C-2.68-12.38-0.48-14.58 2.32-14.58C2.84-14.58 3.32-14.52 3.78-14.38L4.88-10.56L6.06-10.56L6.14-14.20C4.84-14.92 3.62-15.34 1.90-15.34C-2.44-15.34-6.22-12.82-6.22-7.48C-6.22-2.20-2.68 0.40 1.74 0.40C3.60 0.40 5.06-0.06 6.28-0.78Z"></path></g> <g id="yinfu_D" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-1.89-0.74C-1.93-2.84-1.93-4.96-1.93-7.20L-1.93-7.86C-1.93-10.02-1.93-12.12-1.89-14.18L-0.93-14.18C1.93-14.18 3.65-11.86 3.65-7.48C3.65-3.24 1.95-0.74-1.01-0.74ZM-7.17-14.94L-7.17-14.26L-5.37-14.10C-5.31-12.04-5.31-9.96-5.31-7.86L-5.31-7.20C-5.31-4.96-5.31-2.88-5.37-0.86L-7.17-0.68L-7.17 0L-0.97 0C4.07 0 7.13-2.84 7.13-7.52C7.13-12.12 4.27-14.94-0.61-14.94Z"></path></g> <g id="yinfu_E" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M5.90-4.14L4.78-4.14L3.86-0.78L-0.64-0.78C-0.68-2.86-0.68-4.98-0.68-7.20L-0.68-7.26L2.06-7.26L2.34-5.14L3.34-5.14L3.34-10.20L2.34-10.20L2.04-7.98L-0.68-7.98C-0.68-10.10-0.68-12.16-0.64-14.16L3.42-14.16L4.34-10.96L5.50-10.96L5.52-14.94L-5.92-14.94L-5.92-14.26L-4.12-14.10C-4.06-12.04-4.06-9.98-4.06-7.90L-4.06-7.02C-4.06-4.94-4.06-2.88-4.12-0.86L-5.92-0.68L-5.92 0L5.94 0Z"></path></g> <g id="yinfu_F" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M5.85-14.94L-5.75-14.94L-5.75-14.26L-3.95-14.10C-3.89-12.04-3.89-9.98-3.89-7.90L-3.89-7.02C-3.89-4.94-3.89-2.88-3.95-0.86L-5.75-0.68L-5.75 0L1.67 0L1.67-0.68L-0.47-0.90C-0.51-2.94-0.51-5.02-0.51-7.20L-0.51-7.26L2.25-7.26L2.53-5.04L3.53-5.04L3.53-10.20L2.53-10.20L2.23-7.98L-0.51-7.98C-0.51-10.10-0.51-12.16-0.47-14.16L3.75-14.16L4.67-10.96L5.81-10.96Z"></path></g> <g id="yinfu_G" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M7.34-7.34L0.66-7.34L0.66-6.66L2.80-6.40C2.84-4.90 2.86-3.48 2.86-2L2.86-0.50C2.44-0.40 2-0.36 1.54-0.36C-1.14-0.36-3.26-3.02-3.26-7.48C-3.26-12.28-1.08-14.58 1.74-14.58C2.32-14.58 2.80-14.50 3.28-14.30L4.32-10.60L5.56-10.60L5.64-14.26C4.40-14.96 3.02-15.34 1.30-15.34C-3.52-15.34-6.80-12.34-6.80-7.50C-6.80-2.54-3.58 0.40 1.16 0.40C3.06 0.40 4.48 0 6.04-0.92L6.04-1.90C6.04-3.54 6.06-5.04 6.10-6.50L7.34-6.66Z"></path></g> <g id="yinfu_H" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M7.88-14.26L7.88-14.94L0.96-14.94L0.96-14.26L2.64-14.10C2.70-12.08 2.70-10.02 2.70-7.98L-2.68-7.98C-2.68-10.04-2.68-12.10-2.62-14.10L-0.96-14.26L-0.96-14.94L-7.88-14.94L-7.88-14.26L-6.10-14.08C-6.08-12.04-6.08-9.98-6.08-7.90L-6.08-7.02C-6.08-4.94-6.08-2.88-6.10-0.86L-7.88-0.68L-7.88 0L-0.96 0L-0.96-0.68L-2.62-0.84C-2.68-2.88-2.68-4.96-2.68-7.22L2.70-7.22C2.70-4.92 2.70-2.84 2.64-0.86L0.96-0.68L0.96 0L7.88 0L7.88-0.68L6.12-0.86C6.08-2.92 6.08-4.98 6.08-7.02L6.08-7.90C6.08-9.98 6.08-12.06 6.12-14.10Z"></path></g> <g id="yinfu_I" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M3.52-14.26L3.52-14.94L-3.54-14.94L-3.54-14.26L-1.74-14.10C-1.68-12.04-1.68-9.98-1.68-7.90L-1.68-7.02C-1.68-4.94-1.68-2.88-1.74-0.86L-3.54-0.68L-3.54 0L3.52 0L3.52-0.68L1.74-0.86C1.70-2.92 1.70-4.98 1.70-7.04L1.70-7.90C1.70-9.98 1.70-12.06 1.74-14.10Z"></path></g> <g id="yinfu_J" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M3.76-14.94L-3.54-14.94L-3.54-14.26L-1.54-14.08C-1.46-6.58-1.38-3.14-1.38-1.20C-1.38 1.04-1.66 2.34-2.18 2.98L-2.78 2.20C-3.42 1.36-3.90 1.04-4.58 1.04C-5.48 1.04-6.22 1.64-6.24 2.54C-5.74 3.42-4.90 3.82-3.70 3.82C-1.58 3.82 0.20 2.56 1 0.40C1.64-0.90 1.90-2.72 1.90-5.62L1.90-8.08C1.90-10.10 1.90-12.14 1.96-14.10L3.76-14.26Z"></path></g> <g id="yinfu_K" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M6.63-0.82L1.67-9.98L4.97-13.98L7.03-14.26L7.03-14.94L1.83-14.94L1.83-14.26L3.83-13.98L-1.93-6.64L-1.93-7.90C-1.93-9.98-1.93-12.06-1.91-14.08L-0.11-14.26L-0.11-14.94L-7.03-14.94L-7.03-14.26L-5.23-14.10C-5.17-12.04-5.17-9.98-5.17-7.90L-5.17-7.02C-5.17-4.94-5.17-2.88-5.23-0.86L-7.03-0.68L-7.03 0L-0.33 0L-0.33-0.68L-1.91-0.86C-1.93-2.52-1.93-4.12-1.93-5.62L-0.49-7.36L2.93-0.82L1.53-0.68L1.53 0L8.03 0L8.03-0.68Z"></path></g> <g id="yinfu_L" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M5.83-4.48L4.75-4.48L3.75-0.78L-0.41-0.78C-0.45-2.86-0.45-4.94-0.45-6.92L-0.45-8.22C-0.45-10.02-0.45-12.06-0.41-14.08L1.55-14.26L1.55-14.94L-5.69-14.94L-5.69-14.26L-3.89-14.10C-3.83-12.04-3.83-9.98-3.83-7.90L-3.83-6.48C-3.83-4.88-3.83-2.86-3.89-0.86L-5.67-0.68L-5.69 0L5.87 0Z"></path></g> <g id="yinfu_M" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M9.32-14.26L9.32-14.94L4.04-14.94L0.08-4.32L-4-14.94L-9.52-14.94L-9.52-14.26L-7.40-14L-7.48-0.96L-9.68-0.68L-9.68 0L-4.28 0L-4.28-0.68L-6.50-0.98L-6.50-6.94C-6.50-8.22-6.54-10.80-6.58-12.88L-1.66 0L-0.60 0L4.18-12.98L4.10-6.54C4.06-4.92 4.10-2.90 4.04-0.86L2.28-0.68L2.28 0L9.30 0L9.30-0.68L7.52-0.86C7.46-2.86 7.46-4.94 7.46-7.02L7.46-7.90C7.46-9.98 7.46-12.04 7.52-14.10Z"></path></g> <g id="yinfu_N" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M7.59-14.94L2.07-14.94L2.07-14.26L4.73-13.98L4.83-4.46L-2.75-14.94L-7.57-14.94L-7.57-14.26L-6.15-14.10L-5.77-13.54L-5.89-0.96L-7.73-0.68L-7.73 0L-2.17 0L-2.17-0.68L-4.85-0.98L-4.97-12.40L3.85 0.04L5.61 0.04L5.75-14L7.59-14.26Z"></path></g> <g id="yinfu_O" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-3.55-7.48C-3.55-11.56-2.45-14.58 0.01-14.58C2.45-14.58 3.57-11.56 3.57-7.48C3.57-3.36 2.45-0.36 0.01-0.36C-2.45-0.36-3.55-3.36-3.55-7.48ZM0.01-15.34C-3.73-15.34-7.09-12.64-7.09-7.48C-7.09-2.26-3.75 0.40 0.01 0.40C3.79 0.40 7.09-2.28 7.09-7.48C7.09-12.66 3.77-15.34 0.01-15.34Z"></path></g> <g id="yinfu_P" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-0.02-14.18C2.10-14.18 3.26-12.94 3.26-10.52C3.26-8.28 2.14-6.72-0.18-6.72L-0.84-6.72L-0.84-7.90C-0.84-10.02-0.84-12.12-0.80-14.18ZM-0.08-5.98C4.68-5.98 6.38-8 6.38-10.50C6.38-13.32 4.56-14.94 0.02-14.94L-6.08-14.94L-6.08-14.26L-4.28-14.10C-4.22-12.04-4.22-9.98-4.22-7.90L-4.22-7.02C-4.22-4.94-4.22-2.88-4.28-0.86L-6.08-0.68L-6.08 0L1.34 0L1.34-0.68L-0.80-0.90C-0.84-2.70-0.84-4.48-0.84-5.98Z"></path></g> <g id="yinfu_Q" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-3.55-7.48C-3.55-11.56-2.45-14.58 0.01-14.58C2.45-14.58 3.57-11.56 3.57-7.48C3.57-3.36 2.45-0.36 0.01-0.36C-2.45-0.36-3.55-3.36-3.55-7.48ZM5.95 3.26C5.39 3.52 4.95 3.60 4.37 3.60C2.57 3.60 1.39 2.32 1.51 0.26C4.63-0.36 7.09-2.98 7.09-7.48C7.09-12.66 3.77-15.34 0.01-15.34C-3.73-15.34-7.09-12.64-7.09-7.48C-7.09-3.06-4.69-0.46-1.67 0.22C-1.57 2.74 0.09 4.60 3.25 4.60C4.33 4.60 5.47 4.28 6.19 3.80Z"></path></g> <g id="yinfu_R" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-1.72-7.80C-1.72-10.10-1.72-12.16-1.66-14.18L-0.52-14.18C1.50-14.18 2.56-13.10 2.56-11.12C2.56-9.30 1.70-7.80-0.54-7.80ZM5.80-0.78L5.14-4.08C4.80-6.06 4.12-7.16 1.50-7.52C4.64-8 5.76-9.54 5.76-11.18C5.76-13.56 3.84-14.94 0.32-14.94L-6.88-14.94L-6.88-14.26L-5.08-14.10C-5.02-12.04-5.02-9.98-5.02-7.90L-5.02-7.02C-5.02-4.94-5.02-2.88-5.08-0.86L-6.88-0.68L-6.88 0L0.18 0L0.18-0.68L-1.66-0.86C-1.72-2.90-1.72-4.96-1.72-7.06L-0.74-7.06C0.80-7.06 1.28-6.26 1.56-4.62L2.14-1.86C2.34-0.24 3.36 0.30 5.20 0.30C6.20 0.30 6.76 0.20 7.58 0L7.58-0.68Z"></path></g> <g id="yinfu_S" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M0.20-9.36C-1.20-10-1.96-10.74-1.96-12.12C-1.96-13.62-0.84-14.50 0.90-14.50C1.40-14.50 1.80-14.44 2.20-14.26L3.22-10.94L4.38-10.94L4.56-14.20C3.46-14.92 2.06-15.34 0.50-15.34C-2.76-15.34-4.94-13.80-4.94-11.10C-4.94-8.70-3.52-7.36-0.84-6.16L0.12-5.74C1.72-5.04 2.30-4.32 2.30-2.96C2.30-1.40 1.20-0.46-0.78-0.46C-1.54-0.46-2.14-0.54-2.74-0.76L-3.80-4.24L-4.96-4.24L-5.10-0.80C-3.90-0.02-2.08 0.40-0.44 0.40C3.32 0.40 5.34-1.42 5.34-4.08C5.34-6.34 4.24-7.54 1.26-8.88Z"></path></g> <g id="yinfu_T" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M4.50-14.16L5.52-10.66L6.68-10.66L6.60-14.94L-6.60-14.94L-6.68-10.66L-5.50-10.66L-4.50-14.16L-1.74-14.16C-1.70-12.10-1.70-10-1.70-7.90L-1.70-7.02C-1.70-4.94-1.70-2.88-1.74-0.88L-3.76-0.68L-3.76 0L3.76 0L3.76-0.68L1.72-0.88C1.68-2.92 1.68-5 1.68-7.04L1.68-7.90C1.68-10.02 1.68-12.10 1.72-14.16Z"></path></g> <g id="yinfu_U" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M7.75-14.94L2.37-14.94L2.37-14.26L4.65-13.96L4.73-6.32C4.77-2.70 3.43-1.24 1.11-1.24C-1.19-1.24-2.43-2.58-2.43-6.24L-2.43-8.12C-2.43-10.10-2.43-12.12-2.37-14.08L-0.45-14.26L-0.45-14.94L-7.57-14.94L-7.57-14.26L-5.85-14.10C-5.79-12.10-5.79-10.08-5.79-8.12L-5.79-5.94C-5.79-1.22-3.39 0.40 0.05 0.40C3.59 0.40 5.55-1.68 5.61-6.28L5.69-13.96L7.75-14.26Z"></path></g> <g id="yinfu_V" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M7.36-14.94L2.44-14.94L2.44-14.32L4.54-14.02L1.32-3.22L-2.34-14.08L-0.26-14.32L-0.26-14.94L-7.32-14.94L-7.32-14.26L-5.94-14.12L-0.86 0.04L0.96 0.04L5.68-14.04L7.36-14.34Z"></path></g> <g id="yinfu_W" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M10.87-14.94L6.05-14.94L6.05-14.26L7.93-14L5.19-3.44L2.23-14.02L4.35-14.26L4.35-14.94L-2.19-14.94L-2.19-14.26L-0.31-14.04L-3.31-3.48L-6.05-14.08L-4.17-14.26L-4.17-14.94L-10.93-14.94L-10.93-14.26L-9.57-14.12L-5.39 0.04L-3.57 0.04L-0.21-11.16L3.15 0.04L5.01 0.04L9.05-14L10.87-14.26Z"></path></g> <g id="yinfu_X" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M5.41-0.86L1.19-8.76L4.51-14L6.53-14.26L6.53-14.94L1.75-14.94L1.75-14.26L3.49-14.02L0.83-9.42L-1.67-14.08L0.15-14.26L0.15-14.94L-7.01-14.94L-7.01-14.26L-5.33-14.10L-1.43-6.80L-5.15-0.96L-6.89-0.68L-6.89 0L-2.23 0L-2.23-0.66L-4.01-0.94L-1.07-6.12L1.75-0.86L-0.07-0.68L-0.07 0L7.07 0L7.07-0.68Z"></path></g> <g id="yinfu_Y" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M5.46-14.02L7.10-14.26L7.10-14.94L2.42-14.94L2.42-14.26L4.38-14L1.30-7.24L-1.84-14.06L0.14-14.26L0.14-14.94L-6.80-14.94L-6.80-14.26L-5.70-14.16L-1.64-5.86C-1.64-3.48-1.64-2.30-1.68-0.88L-3.70-0.68L-3.70 0L3.82 0L3.82-0.68L1.78-0.88C1.74-2.42 1.74-3.68 1.74-6.42Z"></path></g> <g id="yinfu_Z" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M4.68-4.46L3.56-0.78L-2.22-0.78L5.62-14L5.62-14.94L-5.36-14.94L-5.58-10.66L-4.36-10.66L-3.32-14.16L2.00-14.16L-5.88-0.96L-5.88 0L5.70 0L5.76-4.46Z"></path></g> <g id="yinfu_a" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M1.01-1.94C0.27-1.28-0.19-1.02-0.73-1.02C-1.67-1.02-2.23-1.58-2.23-2.78C-2.23-4.24-1.49-5.18-0.09-5.76C0.15-5.86 0.55-5.98 1.01-6.10ZM-3.27-10.08L-2.95-10.20ZM5.65-1.50C5.27-0.90 5.05-0.74 4.75-0.74C4.37-0.74 4.13-1 4.13-1.76L4.13-7.14C4.13-10.04 2.99-11.26 0.15-11.26C-2.95-11.26-4.69-10.06-4.85-8.18C-4.69-7.52-4.19-7.16-3.47-7.16C-2.71-7.16-2.03-7.70-1.97-9.06L-1.83-10.48C-1.53-10.54-1.27-10.56-0.99-10.56C0.53-10.56 1.01-9.94 1.01-7.86L1.01-6.64C0.31-6.46-0.39-6.28-0.95-6.12C-4.17-5.18-5.21-4.20-5.21-2.38C-5.21-0.70-4.01 0.34-2.29 0.34C-0.69 0.34 0.07-0.28 1.09-1.40C1.39-0.32 2.13 0.34 3.45 0.34C4.73 0.34 5.49-0.12 5.99-1.22Z"></path></g> <g id="yinfu_b" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-1.59-9.28C-0.99-9.80-0.47-9.88 0.15-9.88C1.65-9.88 2.75-8.70 2.75-5.58C2.75-1.92 1.49-1.08 0.09-1.08C-0.51-1.08-1.07-1.24-1.59-1.64ZM-1.63-13.12L-1.57-16.34L-1.85-16.52L-6.27-15.66L-6.27-15.14L-4.81-15L-4.81-4.76C-4.81-3.64-4.83-1.90-4.85-0.74L-6.17-0.62L-6.17 0L-2.09 0.30L-1.67-1.08C-0.81-0.10 0.31 0.34 1.51 0.34C4.33 0.34 6.19-2.20 6.19-5.50C6.19-9.24 4.25-11.26 1.75-11.26C0.51-11.26-0.65-10.82-1.63-9.86Z"></path></g> <g id="yinfu_c" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M2.15-8.98C2.23-7.50 2.93-7.02 3.77-7.02C4.45-7.02 4.89-7.36 5.09-8.08C4.83-9.88 3.23-11.26 0.97-11.26C-2.37-11.26-5.09-9.16-5.09-5.44C-5.09-1.72-2.55 0.34 0.49 0.34C2.67 0.34 4.13-0.58 5.05-2.24L4.65-2.50C3.93-1.60 3.07-1.08 1.91-1.08C-0.23-1.08-1.69-2.78-1.69-5.76C-1.69-8.82-0.39-10.56 1.39-10.56C1.57-10.56 1.75-10.54 1.95-10.52Z"></path></g> <g id="yinfu_e" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-1.74-6.22C-1.66-9.32-0.76-10.56 0.34-10.56C1.40-10.56 2.16-9.64 2.16-7.90C2.16-6.66 1.92-6.20 0.98-6.20ZM4.66-2.60C4.00-1.68 3.14-1.08 1.74-1.08C-0.14-1.08-1.64-2.36-1.74-5.48L5.06-5.48C5.16-5.86 5.18-6.20 5.18-6.70C5.18-9.24 3.56-11.26 0.56-11.26C-2.30-11.26-5.16-9.26-5.16-5.50C-5.16-1.76-2.72 0.34 0.58 0.34C2.62 0.34 4.22-0.64 5.04-2.36Z"></path></g> <g id="yinfu_d" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M1.67-1.60C1.19-1.22 0.67-1.08 0.11-1.08C-1.43-1.08-2.59-2.24-2.59-5.50C-2.59-8.86-1.33-9.88 0.19-9.88C0.69-9.88 1.19-9.74 1.67-9.36ZM4.89-0.70L4.89-13.14L4.97-16.34L4.69-16.52L0.15-15.66L0.15-15.14L1.79-14.98L1.79-9.90C1.01-10.82 0.09-11.26-1.07-11.26C-3.81-11.26-6.03-9.14-6.03-5.38C-6.03-1.76-3.97 0.34-1.35 0.34C-0.13 0.34 0.91-0.16 1.75-1L1.91 0.24L6.19 0L6.19-0.62Z"></path></g> <g id="yinfu_f" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-3.57-10.74L-3.57-10.10L-2.01-10.10L-2.01-4.76C-2.01-3.42-2.03-2.08-2.05-0.74L-3.43-0.62L-3.43 0L3.11 0L3.11-0.62L1.29-0.78C1.25-2.12 1.23-3.44 1.23-4.76L1.23-10.10L3.79-10.10L3.79-10.92L1.19-10.92C1.11-13.20 1.29-14.60 1.97-15.60C2.07-15.76 2.23-15.90 2.43-16.02L2.75-15.40C3.27-14.28 3.87-13.90 4.65-13.90C5.57-13.90 6.09-14.48 6.09-15.26C5.83-16.34 4.73-16.74 3.53-16.74C2.27-16.74 1.03-16.34-0.11-15.30C-0.99-14.44-1.73-13.20-1.97-10.92Z"></path></g> <g id="yinfu_g" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-0.55-4.42C-1.71-4.42-2.29-5.62-2.29-7.56C-2.29-9.50-1.65-10.66-0.53-10.66C0.57-10.66 1.23-9.52 1.23-7.56C1.23-5.62 0.59-4.42-0.55-4.42ZM1.33 0.70C2.61 0.70 3.07 1.46 3.07 2.32C3.07 3.48 1.79 4.30-0.85 4.30C-2.67 4.30-3.77 3.48-3.77 2.02C-3.77 1.36-3.61 0.92-3.27 0.48C-2.63 0.66-2.07 0.70-0.89 0.70ZM5.81-11.04L5.45-11.26L2.89-10.24C2.13-10.88 1.01-11.26-0.53-11.26C-3.69-11.26-5.19-9.70-5.19-7.56C-5.19-6.24-4.61-5.10-3.39-4.44C-4.59-3.38-5.11-2.64-5.11-1.64C-5.11-0.64-4.53-0.12-3.65 0.28C-4.99 0.80-5.65 1.58-5.65 2.46C-5.65 3.92-4.47 5.18-0.83 5.18C3.37 5.18 5.59 3.30 5.59 1.06C5.59-0.74 4.41-1.98 1.19-1.98L-1.75-1.98C-2.87-1.98-3.33-2.36-3.33-3.10C-3.33-3.54-3.21-3.88-2.99-4.24C-2.33-3.96-1.51-3.80-0.55-3.80C2.57-3.80 4.07-5.46 4.07-7.56C4.07-8.40 3.85-9.14 3.39-9.74L5.81-9.48Z"></path></g> <g id="yinfu_h" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M5.28-0.72C5.26-1.88 5.24-3.58 5.24-4.76L5.24-7.36C5.24-10.08 3.92-11.26 1.98-11.26C0.48-11.26-0.54-10.66-1.74-9.24L-1.74-13.12L-1.68-16.34L-1.96-16.52L-6.38-15.66L-6.38-15.14L-4.92-15L-4.92-4.76C-4.92-3.64-4.94-1.92-4.96-0.74L-6.28-0.62L-6.28 0L-0.50 0L-0.50-0.62L-1.66-0.72C-1.68-1.90-1.70-3.64-1.70-4.76L-1.70-8.68C-0.88-9.42-0.10-9.76 0.54-9.76C1.42-9.76 2-9.20 2-7.64L2-4.76C2-3.60 1.98-1.90 1.96-0.74L0.68-0.62L0.68 0L6.48 0L6.48-0.62Z"></path></g> <g id="yinfu_i" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M0.06-13.24C1.02-13.24 1.80-13.92 1.80-14.86C1.80-15.82 1.02-16.50 0.06-16.50C-0.88-16.50-1.66-15.82-1.66-14.86C-1.66-13.92-0.88-13.24 0.06-13.24ZM1.78-0.74C1.76-1.90 1.74-3.64 1.74-4.76L1.74-7.84L1.82-11.04L1.54-11.24L-3.04-10.04L-3.04-9.56L-1.54-9.40C-1.50-8.38-1.48-7.64-1.48-6.36L-1.48-4.76C-1.48-3.64-1.50-1.92-1.52-0.74L-2.84-0.62L-2.84 0L3 0L3-0.62Z"></path></g> <g id="yinfu_j" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M0.09-13.24C1.03-13.24 1.81-13.92 1.81-14.86C1.81-15.82 1.03-16.50 0.09-16.50C-0.87-16.50-1.63-15.82-1.63-14.86C-1.63-13.92-0.87-13.24 0.09-13.24ZM1.59-11.24L-2.99-10.04L-2.99-9.56L-1.53-9.40C-1.47-8.46-1.45-7.56-1.45-6.26L-1.45-1.98C-1.45 0.54-1.31 2.86-1.67 3.90C-1.75 4.16-1.87 4.36-2.01 4.52L-2.39 3.76C-2.83 2.86-3.49 2.54-4.27 2.54C-5.05 2.54-5.87 3.10-5.97 4.06C-5.63 4.76-4.81 5.42-3.09 5.42C-1.89 5.42-0.77 5.08 0.35 3.90C1.41 2.78 1.77 1.58 1.77-1.46L1.77-7.84L1.83-11.04Z"></path></g> <g id="yinfu_k" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M5.37-0.78L1.73-7.92L4.13-10.12L6.09-10.32L6.09-10.92L0.87-10.92L0.87-10.32L2.89-10.08L-1.43-5.90L-1.43-13.12L-1.35-16.34L-1.63-16.52L-6.11-15.66L-6.11-15.14L-4.65-15L-4.65-4.76C-4.65-3.72-4.67-1.90-4.69-0.74L-6.03-0.62L-6.03 0L-0.13 0L-0.13-0.62L-1.39-0.74C-1.41-1.90-1.43-3.74-1.43-4.92L-1.43-5.06L-0.53-5.88L2.31 0L6.67 0L6.67-0.62Z"></path></g> <g id="yinfu_l" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M1.70-0.74C1.66-2.04 1.64-3.46 1.64-4.76L1.64-13.12L1.72-16.34L1.44-16.52L-3.04-15.66L-3.04-15.14L-1.58-15L-1.58-4.76C-1.58-3.48-1.60-2.04-1.62-0.74L-3-0.62L-3 0L3.06 0L3.06-0.62Z"></path></g> <g id="yinfu_m" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M8.53-0.74C8.51-1.88 8.49-3.58 8.49-4.76L8.49-7.28C8.49-10 7.47-11.26 5.23-11.26C3.93-11.26 2.85-10.76 1.53-9.18C1.11-10.58 0.09-11.26-1.41-11.26C-2.77-11.26-3.85-10.64-5.01-9.26L-5.15-11.04L-5.43-11.24L-9.77-9.98L-9.77-9.52L-8.27-9.36C-8.23-8.38-8.21-7.74-8.21-6.42L-8.21-4.76C-8.21-3.64-8.23-1.92-8.25-0.74L-9.59-0.62L-9.59 0L-3.81 0L-3.81-0.62L-4.95-0.72C-4.97-1.90-4.99-3.64-4.99-4.76L-4.99-8.58C-4.27-9.28-3.51-9.74-2.79-9.74C-1.83-9.74-1.41-9.10-1.41-7.46L-1.41-4.76C-1.41-3.60-1.43-1.90-1.45-0.74L-2.73-0.62L-2.73 0L2.93 0L2.93-0.62L1.81-0.72C1.77-1.88 1.75-3.58 1.75-4.76L1.75-7.40C1.75-7.82 1.73-8.20 1.67-8.56C2.43-9.32 3.17-9.74 3.91-9.74C4.87-9.74 5.31-9.22 5.31-7.46L5.31-4.76C5.31-3.60 5.29-1.90 5.27-0.74L4.07-0.62L4.07 0L9.73 0L9.73-0.62Z"></path></g> <g id="yinfu_n" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M5.25-0.72C5.21-1.88 5.19-3.58 5.19-4.76L5.19-7.40C5.19-10.02 3.89-11.26 1.99-11.26C0.67-11.26-0.43-10.80-1.75-9.28L-1.87-11.04L-2.15-11.24L-6.49-9.98L-6.49-9.50L-4.99-9.34C-4.95-8.38-4.93-7.72-4.93-6.42L-4.93-4.76C-4.93-3.64-4.95-1.92-4.97-0.74L-6.31-0.62L-6.31 0L-0.53 0L-0.53-0.62L-1.67-0.72C-1.69-1.90-1.71-3.64-1.71-4.76L-1.71-8.62C-0.85-9.38-0.03-9.76 0.57-9.76C1.51-9.76 1.95-9.20 1.95-7.64L1.95-4.76C1.95-3.60 1.93-1.90 1.91-0.74L0.65-0.62L0.65 0L6.45 0L6.45-0.62Z"></path></g> <g id="yinfu_o" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-0.01 0.34C3.39 0.34 5.67-1.94 5.67-5.52C5.67-9.10 3.15-11.26-0.01-11.26C-3.15-11.26-5.67-9.06-5.67-5.52C-5.67-2-3.43 0.34-0.01 0.34ZM-0.01-0.36C-1.45-0.36-2.25-2-2.25-5.48C-2.25-8.98-1.45-10.56-0.01-10.56C1.43-10.56 2.21-8.98 2.21-5.48C2.21-2 1.43-0.36-0.01-0.36Z"></path></g> <g id="yinfu_p" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-1.57-9.18C-0.91-9.78-0.39-9.88 0.21-9.88C1.79-9.88 2.75-8.76 2.75-5.50C2.75-2.16 1.65-1.08 0.09-1.08C-0.57-1.08-1.07-1.18-1.57-1.58ZM-1.79-11.04L-2.07-11.24L-6.35-9.98L-6.35-9.50L-4.87-9.34C-4.83-8.38-4.81-7.70-4.81-6.40L-4.81 0.14C-4.81 1.36-4.83 2.88-4.85 4.46L-6.19 4.60L-6.19 5.18L-0.05 5.18L-0.05 4.60L-1.59 4.42C-1.61 2.86-1.63 1.34-1.63 0.14L-1.63-1.04C-0.79-0.06 0.21 0.34 1.31 0.34C3.95 0.34 6.17-1.88 6.17-5.52C6.17-9.22 4.23-11.26 1.79-11.26C0.47-11.26-0.71-10.80-1.65-9.76Z"></path></g> <g id="yinfu_q" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M1.84-1.56C1.34-1.22 0.86-1.08 0.30-1.08C-1.30-1.08-2.42-2.16-2.42-5.40C-2.42-8.68-1.28-9.88 0.28-9.88C0.82-9.88 1.34-9.72 1.84-9.32ZM5.14 4.46C5.10 3.12 5.08 1.78 5.08 0.44L5.08-7.96L5.16-11.04L4.88-11.22L2.16-9.74C1.40-10.76 0.38-11.26-0.78-11.26C-3.64-11.26-5.86-9-5.86-5.34C-5.86-1.72-3.90 0.34-1.34 0.34C-0.12 0.34 1.02-0.12 1.92-1.06L1.92 0.44C1.92 1.76 1.90 3.10 1.86 4.42L0.32 4.60L0.32 5.18L6.36 5.18L6.36 4.60Z"></path></g> <g id="yinfu_r" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M-0.10-11.04L-0.38-11.24L-4.72-9.98L-4.72-9.50L-3.22-9.34C-3.18-8.38-3.16-7.72-3.16-6.42L-3.16-4.76C-3.16-3.64-3.18-1.92-3.20-0.76L-4.56-0.62L-4.56 0L1.94 0L1.94-0.62L0.10-0.80C0.08-1.98 0.06-3.66 0.06-4.76L0.06-6.42C0.44-7.90 0.92-8.76 1.72-9.50L1.90-9.26C2.44-8.54 2.92-8.06 3.68-8.06C4.68-8.06 5.08-8.80 5.16-9.68C4.96-10.88 4.16-11.26 3.22-11.26C2.02-11.26 0.66-10.22 0.06-8.18Z"></path></g> <g id="yinfu_s" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M0.33-7.06C-1.23-7.54-1.63-8.14-1.63-8.88C-1.63-9.88-0.83-10.50 0.39-10.50C0.99-10.50 1.41-10.40 1.83-10.20L2.59-7.84L3.71-7.84L3.87-10.36C2.69-10.94 1.67-11.26 0.33-11.26C-2.61-11.26-4.25-9.74-4.25-7.64C-4.25-5.94-3.19-4.92-1.39-4.36L-0.23-4.02C1.37-3.52 1.75-2.92 1.75-2.08C1.75-0.98 0.91-0.44-0.61-0.44C-1.25-0.44-1.75-0.54-2.25-0.74L-2.87-3.38L-4.15-3.38L-4.31-0.66C-3.13 0-1.91 0.34-0.35 0.34C2.67 0.34 4.53-1.02 4.53-3.34C4.53-4.98 3.61-6.10 1.51-6.72Z"></path></g> <g id="yinfu_t" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M3.76-1.64C3.24-1.20 2.90-1 2.40-1C1.60-1 1.08-1.46 1.08-2.54L1.08-10.10L3.56-10.10L3.56-10.92L1.08-10.92L1.12-14.14L-0.94-14.14L-1.98-10.94L-3.76-10.74L-3.76-10.10L-2.14-10.10L-2.14-4.98C-2.14-4.14-2.16-3.56-2.16-2.80C-2.18-0.58-1.08 0.34 0.96 0.34C2.50 0.34 3.50-0.24 4.10-1.32Z"></path></g> <g id="yinfu_u" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M5.09-0.68L5.09-7.68L5.17-10.94L4.91-11.14L0.57-10.44L0.57-10L1.91-9.74L1.83-2.34C1.25-1.76 0.53-1.38-0.23-1.38C-1.19-1.38-1.81-1.88-1.81-3.48L-1.81-7.68L-1.69-10.94L-1.95-11.14L-6.39-10.54L-6.39-10L-4.99-9.72L-5.07-3.78C-5.11-0.74-3.85 0.34-1.85 0.34C-0.39 0.34 0.93-0.56 1.85-1.72L1.95 0.28L6.35 0.02L6.35-0.58Z"></path></g> <g id="yinfu_v" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M5.81-10.92L1.91-10.92L1.91-10.32L3.47-10.12L1.07-3L-1.43-10.16L0.01-10.32L0.01-10.92L-6.13-10.92L-6.13-10.32L-4.89-10.16L-0.87 0.04L0.51 0.04L4.39-10.10L5.81-10.32Z"></path></g> <g id="yinfu_w" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M8.83-10.92L4.71-10.92L4.71-10.32L6.51-10.12L4.39-3L1.95-10.14L3.49-10.32L3.49-10.92L-1.73-10.92L-1.73-10.32L-0.17-10.16L-2.53-2.88L-4.77-10.18L-3.21-10.32L-3.21-10.92L-9.11-10.92L-9.11-10.32L-8.03-10.20L-4.37 0.04L-3.01 0.04L-0.19-7.88C0.27-6.30 0.99-4.28 2.55 0.04L3.91 0.04L7.45-10.12L8.83-10.32Z"></path></g> <g id="yinfu_x" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M4.97-0.70L1.45-6.20L4.31-10.12L5.65-10.32L5.65-10.92L1.81-10.92L1.81-10.32L3.21-10.14L1.09-6.76L-1.09-10.18L0.29-10.32L0.29-10.92L-5.85-10.92L-5.85-10.32L-4.81-10.20L-1.47-4.94L-4.45-0.80L-6.03-0.62L-6.03 0L-1.93 0L-1.93-0.62L-3.35-0.80L-1.11-4.38L1.19-0.72L-0.31-0.62L-0.27 0L5.95 0L5.95-0.62Z"></path></g> <g id="yinfu_y" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M6-10.92L1.88-10.92L1.88-10.32L3.70-10.12L1.24-2.60L-1.48-10.16L-0.02-10.32L-0.02-10.92L-6.12-10.92L-6.12-10.32L-4.96-10.20L-0.22 1.08C-0.80 2.52-1.36 3.46-2.12 4.10L-2.44 3.68C-2.94 3.04-3.52 2.58-4.32 2.58C-5.10 2.58-5.88 2.96-6.04 3.86C-6 4.76-4.94 5.42-3.82 5.42C-2.60 5.42-0.84 4.48 0.34 1.36L4.66-10.14L6-10.32Z"></path></g> <g id="yinfu_z" transform="translate(0, 8)"><rect width="11.1" height="17.9" x="-5.55" y="-17.9" stroke-width="7"></rect><path fill="{font_color}" stroke-width="0" d="M3.72-3.68L2.76-0.70L-1.22-0.70L4.60-10.28L4.60-10.92L-4.44-10.92L-4.60-7.56L-3.50-7.48L-2.60-10.22L1.28-10.22L-4.72-0.62L-4.72 0L4.64 0L4.84-3.68Z"></path></g> <g id="xiaojiexian" transform="translate(-50,-50)"> <rect fill="none" stroke-width="0" x="45.05" y="35.85" width="9.9" height="28.4"></rect> <rect height="29" width="1.5" y="35.5" x="49.25" stroke-width="1" fill="{font_color}"></rect> </g> <g id="xiaojiexian_xuxian" transform="translate(-50,-50)"> <rect fill="none" stroke-width="0" x="45.05" y="35.85" width="9.9" height="28.4"></rect> <rect height="7" width="1.5" y="35.5" x="49.25" stroke-width="1" fill="{font_color}"></rect> <rect height="7" width="1.5" y="46.5" x="49.25" stroke-width="1" fill="{font_color}"></rect> <rect height="7" width="1.5" y="57.5" x="49.25" stroke-width="1" fill="{font_color}"></rect> </g> <g id="xunhuan_you" transform="translate(-50,-50)"> <rect height="28.4" width="12.1" y="35.75" x="39.95" stroke-width="0" fill="none"></rect> <rect height="29" width="1" y="35.5" x="45.65" fill="{font_color}"></rect> <rect height="29" width="2.4" y="35.5" x="48.35" fill="{font_color}"></rect> <circle r="1.53489" cy="44.15" cx="41.75" fill="{font_color}"></circle> <circle r="1.53489" cy="54.8" cx="41.8" fill="{font_color}"></circle> </g> <g id="xiaojiexian_weibu" transform="translate(-50,-50)"> <rect fill="none" stroke-width="0" x="45.05" y="35.85" width="9.9" height="28.4"></rect> <rect height="29" width="1.5" y="35.5" x="49.25" stroke-width="1" fill="none"></rect> </g> <g id="jieshufu" transform="translate(-50,-50)"> <rect fill="none" stroke-width="0" x="42.45" y="35.65" width="11.7" height="28.4"></rect> <rect height="29" width="1" y="35.5" x="45.65" stroke-width="1" fill="{font_color}"></rect> <rect height="29" width="2.4" y="35.5" x="48.35" stroke-width="1" fill="{font_color}"></rect> </g> <g id="xiaojiexian_shuangxian" transform="translate(-50,-50)"> <rect fill="{font_color}" stroke-width="1" stroke-linejoin="miter" stroke-linecap="butt" x="47.4" y="35.5" width="1.5" height="29"></rect> <rect fill="{font_color}" stroke-width="1" stroke-linejoin="miter" stroke-linecap="butt" x="51.1" y="35.5" width="1.5" height="29"></rect> </g> <g id="xunhuan_zuo" transform="translate(-50,-50)"> <rect fill="none" stroke-width="0" x="46.65" y="35.75" width="12.1" height="28.4"></rect> <rect height="29" width="2.4" y="35.5" x="48.35" stroke-width="1" fill="{font_color}"></rect> <rect height="29" width="1" y="35.5" x="52.3" stroke-width="1" fill="{font_color}"></rect> <circle r="1.53489" cy="44.675" cx="56.775" fill="{font_color}"></circle> <circle r="1.53489" cy="55.325" cx="56.825" fill="{font_color}"></circle> </g> <g id="xunhuan_zuoyou" transform="translate(-50,-50)"> <rect height="28.4" width="18.4" y="35.65" x="40.05" stroke-width="0" fill="none"></rect> <rect height="29" width="1" y="35.5" x="45.65" stroke-width="1" fill="{font_color}"></rect> <rect height="29" width="2.4" y="35.5" x="48.35" stroke-width="1" fill="{font_color}"></rect> <circle r="1.53489" cy="44.15" cx="41.75" fill="{font_color}"></circle> <circle r="1.53489" cy="54.8" cx="41.8" fill="{font_color}"></circle> <rect height="29" width="1" y="35.5" x="52.3" stroke-width="1" fill="{font_color}"></rect> <circle r="1.53489" cy="44.675" cx="56.775" fill="{font_color}"></circle> <circle r="1.53489" cy="55.325" cx="56.825" fill="{font_color}"></circle> </g> <g id="dakuohu_zuo_2" transform="translate(-50,-50)"> <path d="m55.35585,12.01287l0,-1.51213c-1.92115,0.64801 -3.47848,2.57401 -4.67193,5.77811s-1.79017,6.75013 -1.79017,10.6382c0,2.01608 0.13099,4.37409 0.39296,7.07414s0.39296,4.80609 0.39296,6.31813c0,2.01607 -0.3493,3.90611 -1.04791,5.6701s-1.65918,2.86206 -2.88175,3.29407l0,1.72803c1.22255,0.432 2.18314,1.51202 2.88175,3.24006s1.04791,3.6361 1.04791,5.72411c0,1.51203 -0.13099,3.60004 -0.39296,6.26411s-0.39296,5.04015 -0.39296,7.12814c0,3.81605 0.59673,7.32613 1.79017,10.53022s2.75078,5.13011 4.67193,5.77811l0,-1.51202c-1.339,-0.79198 -2.32142,-2.08801 -2.94724,-3.88807s-0.93877,-3.74411 -0.93877,-5.83212c0,-1.72803 0.1237,-3.96011 0.37113,-6.69612s0.37112,-5.04004 0.37112,-6.91203c0,-2.88009 -0.42207,-5.67011 -1.26622,-8.37016s-2.09582,-4.77013 -3.755,-6.21012c1.63006,-1.51202 2.87447,-3.6361 3.73318,-6.37212s1.28804,-5.54407 1.28804,-8.42416c0,-1.94404 -0.12368,-4.26609 -0.37112,-6.96614s-0.37113,-4.9141 -0.37113,-6.64213c0,-2.16004 0.31294,-4.12211 0.93877,-5.88611s1.60823,-3.07806 2.94724,-3.94208l0,-0.00002z" fill="{font_color}"></path> </g> <g id="dakuohu_you_2" transform="translate(-50,-50)"> <path d="m45.35585,12.01287l0,-1.51213c1.97881,0.64801 3.58288,2.57401 4.81215,5.77811s1.8439,6.75013 1.8439,10.6382c0,2.01608 -0.13492,4.37409 -0.40475,7.07414s-0.40475,4.80609 -0.40475,6.31813c0,2.01607 0.35978,3.90611 1.07936,5.6701s1.70898,2.86206 2.96824,3.29407l0,1.72803c-1.25925,0.432 -2.24866,1.51202 -2.96824,3.24006s-1.07936,3.6361 -1.07936,5.72411c0,1.51203 0.13492,3.60004 0.40475,6.26411s0.40475,5.04015 0.40475,7.12814c0,3.81605 -0.61464,7.32613 -1.8439,10.53022s-2.83334,5.13011 -4.81215,5.77811l0,-1.51202c1.37919,-0.79198 2.39109,-2.08801 3.03569,-3.88807s0.96694,-3.74411 0.96694,-5.83212c0,-1.72803 -0.12741,-3.96011 -0.38227,-6.69612s-0.38226,-5.04004 -0.38226,-6.91203c0,-2.88009 0.43474,-5.67011 1.30422,-8.37016s2.15872,-4.77013 3.86771,-6.21012c-1.67899,-1.51202 -2.96074,-3.6361 -3.84523,-6.37212s-1.3267,-5.54407 -1.3267,-8.42416c0,-1.94404 0.12739,-4.26609 0.38226,-6.96614s0.38227,-4.9141 0.38227,-6.64213c0,-2.16004 -0.32233,-4.12211 -0.96694,-5.88611s-1.6565,-3.07806 -3.03569,-3.94208l0,-0.00002z" fill="{font_color}"></path> </g> <g id="linshi_paihao_shuzi_2" transform="translate(-50,-50)"> <path fill="{font_color}" d="m53.44358,55.84648l-6.99358,0l0,-1.26205l3.32955,-3.32999q1.38351,-1.3837 1.8548,-2.18957t0.47131,-1.67262q0,-0.97313 -0.54731,-1.49772t-1.59636,-0.52457q-1.53555,0 -2.93426,1.30766l0,-1.47494q1.36831,-1.04917 3.1623,-1.04917q1.55075,0 2.45536,0.83631t0.90461,2.26562q0,1.06435 -0.57774,2.09071t-2.18929,2.62296l-2.61498,2.55449l0,0.03042l5.27559,0l0,1.29247l0,0l-0.00001,-0.00001l0.00001,0z"></path> </g> <g id="linshi_paihao_fenxian" transform="translate(-50,-50)"> <path stroke="{font_color}" d="m43.1,50l13.8,0l-13.8,0z" fill="{font_color}"></path> </g> <g id="linshi_paihao_shuzi_4" transform="translate(-50,-50)"> <path d="m54.10001,52.75554l-1.46754,0l0,2.96749l-1.40701,0l0,-2.96749l-5.32546,0l0,-0.9387l5.05314,-7.53988l1.67933,0l0,7.32791l1.46754,0l0,1.15067zm-2.87455,-1.15067l0,-4.79948q0,-0.51477 0.03026,-1.18095l-0.03026,0q-0.1059,0.28767 -0.42362,0.89328l-3.41919,5.08714l3.8428,0l0.00001,0.00001z" fill="{font_color}"></path> </g> <g id="linshi_paihao_shuzi_3" transform="translate(-50,-50)"> <path fill="{font_color}" d="m46.69655,53.76844q1.15097,0.89725 2.61586,0.89725q1.16592,0 1.85352,-0.57573t0.6876,-1.54776q0,-2.13844 -3.07925,-2.13844l-0.94171,0l0,-1.18138l0.89687,0q2.7205,0 2.7205,-2.01881q0,-1.85431 -2.07774,-1.85431q-1.19583,0 -2.24217,0.79256l0,-1.34587q1.10612,-0.64302 2.58596,-0.64302q1.44994,0 2.32438,0.75517t0.87445,1.96648q0,2.21323 -2.25713,2.85625l0,0.01495q1.22573,0.1346 1.93574,0.86735t0.71003,1.83936q0,1.52533 -1.09866,2.45996t-2.92229,0.93463q-1.59941,0 -2.58597,-0.59816l0,-1.48046l0.00001,-0.00002z"></path> </g> <g id="linshi_paihao_shuzi_8" transform="translate(-50,-50)"> <path d="m48.80533,49.70284q-2.01603,-0.93604 -2.01603,-2.71897q0,-1.2332 0.94827,-2.01324t2.41175,-0.78003q1.35895,0 2.23257,0.73546t0.8736,1.89437q0,1.87209 -2.10562,2.88241l0,0.02972q2.46402,0.8766 2.46402,3.01612q0,1.39663 -1.01547,2.22867t-2.83737,0.83204q-1.49335,0 -2.43416,-0.82461t-0.94081,-2.1321q0,-2.13952 2.41923,-3.12013l0,-0.02972l0.00001,0zm3.00162,-2.71897q0,-0.75774 -0.4704,-1.18862t-1.29175,-0.43089q-0.74668,0 -1.28428,0.45317t-0.53761,1.15149q0,1.41148 1.77709,2.13951q1.80694,-0.74288 1.80694,-2.12466zm-1.89654,3.38758q-2.0907,0.84689 -2.0907,2.42181q0,0.80232 0.61227,1.32978t1.59789,0.52745q0.95575,0 1.55308,-0.52002t0.59735,-1.29264q0,-1.63435 -2.26989,-2.46638l0.00001,0z" fill="{font_color}"></path> </g> <g id="linshi_paihao_shuzi_6" transform="translate(-50,-50)"> <path d="m52.88699,45.84786q-0.86903,-0.4433 -1.81172,-0.4433q-1.45823,0 -2.33463,1.25599t-0.89114,3.44287l0.04418,0q0.78067,-1.53673 2.51874,-1.53673q1.4435,0 2.30518,0.94568t0.86168,2.51196q0,1.64017 -0.99423,2.69667t-2.54086,1.05651q-1.6939,0 -2.65866,-1.32988t-0.9648,-3.78272q0,-2.95525 1.26675,-4.69885t3.34361,-1.74359q1.17834,0 1.85591,0.32507l0,1.30032l0,0zm-4.94913,6.07304q0,1.10822 0.5892,1.89876t1.56133,0.79052q0.91324,0 1.48767,-0.67971t0.57446,-1.7436q0,-1.16732 -0.53762,-1.81009t-1.53925,-0.64277q-0.9574,0 -1.54659,0.65016t-0.58919,1.53673l0,0z" fill="{font_color}"></path> </g> <g id="shengbufu_shang" transform="translate(-50,-50)"> <path stroke="{font_color}" stroke-width="2" stroke-linejoin="miter" stroke-linecap="butt" fill-opacity="0" d="m32.1,37c0,0 -1,5.5 -9.40001,7.4"></path> </g> <g id="shengbufu_xia" transform="translate(-50,-50)"> <path stroke-width="2" stroke-linejoin="miter" stroke-linecap="butt" fill-opacity="0" d="m32.25,63.39999c0,0 -1,-5.72297 -9.4,-7.69999" stroke="{font_color}"></path> </g> <g id="yingao_di" transform="translate(-50,-50)"> <ellipse ry="1.9" rx="1.9" cy="63" cx="49.3" fill="{font_color}"></ellipse> </g> <g id="yingao_gao" transform="translate(-50,-50)"> <ellipse ry="1.9" rx="1.9" cy="36" cx="49.3" fill="{font_color}"></ellipse> </g> <g id="bianyinfu_jiang" transform="translate(-50,-50)"> <path stroke-width="33" d="m38.58004,35.44668c0.23695,-0.04308 0.6247,0 0.77549,0.10771c0.04308,0.02154 0.04308,0.2585 -0.02155,3.76971c-0.04309,2.04641 -0.06462,3.72662 -0.06462,3.72662c0,0.02154 0.08617,-0.02154 0.17233,-0.08616c0.45237,-0.30158 1.01244,-0.4739 1.57251,-0.51699c0.58161,-0.02155 1.05552,0.15079 1.4648,0.56007c0.40928,0.38774 0.62469,0.90473 0.66778,1.4648c0.02154,0.40928 -0.06463,0.77548 -0.2585,1.16322c-0.30158,0.58162 -0.7324,0.99089 -2.02487,1.87409c-0.81857,0.56007 -1.03398,0.7324 -1.29247,1.03397c-0.12925,0.12925 -0.28004,0.28004 -0.32312,0.30157c-0.19387,0.12925 -0.40928,0.10771 -0.58161,-0.04308c-0.04308,-0.06462 -0.08617,-0.12925 -0.10771,-0.19387c-0.02153,-0.04308 -0.06462,-2.34799 -0.12925,-5.98845c-0.06462,-3.25272 -0.1077,-6.16078 -0.12924,-6.48389l0,-0.56007l0.08616,-0.04308c0.04308,-0.02154 0.12925,-0.06462 0.19387,-0.08617zm2.28337,7.90561c-0.15079,-0.08616 -0.38774,-0.10771 -0.58162,-0.04308c-0.38774,0.1077 -0.71086,0.45237 -0.8401,0.90473c-0.04308,0.21541 -0.08616,2.06795 -0.04308,2.77881c0.02154,0.30157 0.02154,0.58161 0.04308,0.64624l0.02154,0.08616l0.32312,-0.28004c0.45237,-0.38774 0.90473,-0.8401 1.12014,-1.14168c0.21541,-0.30157 0.43082,-0.71086 0.51699,-1.01243c0.12925,-0.49545 0.06462,-1.05552 -0.12925,-1.48634c-0.10771,-0.21541 -0.23696,-0.3662 -0.43082,-0.45237z" fill="{font_color}"></path> </g> <g id="bianyinfu_huanyuan" transform="translate(-50,-50)"> <path stroke-width="33" d="m38.30435,35.01326c0.17391,-0.0346 0.56522,0 0.71738,0.08651c0.02174,0.0173 0.02174,0.27684 0,1.50533c-0.02174,0.83052 -0.02174,1.50532 -0.02174,1.50532c0,0.01731 0.54348,-0.0519 1.21739,-0.13842c0.69565,-0.10381 1.23913,-0.15572 1.26086,-0.15572c0.1087,0.0173 0.19565,0.08651 0.26087,0.17303l0.04347,0.06921l0.06522,5.00043c0.06523,4.0142 0.08696,5.00045 0.06523,5.00045c-0.02174,0.0173 -0.08696,0.0346 -0.15218,0.0519c-0.17391,0.05191 -0.52174,0.05191 -0.69565,0c-0.06521,-0.0173 -0.13043,-0.0346 -0.15217,-0.0519c-0.02174,-0.0173 -0.02174,-0.27684 0,-1.50533c0.02174,-0.83052 0.02174,-1.50532 0.02174,-1.50532c0,-0.0173 -0.54348,0.05191 -1.21739,0.13842c-0.69566,0.10382 -1.23913,0.15572 -1.26087,0.15572c-0.1087,-0.0173 -0.19566,-0.08651 -0.26087,-0.17303l-0.04348,-0.08651l-0.06522,-4.34295c-0.04348,-2.38775 -0.06522,-4.63709 -0.08696,-5.00044l0,-0.6402l0.1087,-0.0346c0.06522,-0.01731 0.15217,-0.03461 0.19566,-0.05191zm2.71738,4.84472c0,-0.19033 0,-0.24224 -0.02173,-0.24224c-0.08696,0 -2.02174,0.25954 -2.02174,0.27684c-0.02174,0 -0.06522,3.63354 -0.06522,3.65085c0.02174,0 2.02174,-0.25954 2.04348,-0.27684c0,0 0.06521,-2.61269 0.06521,-3.40861z" fill="{font_color}"></path> </g> <g id="fudian" transform="translate(-50,-50)"> <ellipse fill="{font_color}" cx="62.35" cy="49.75" rx="2.45" ry="2.45"></ellipse> </g> <g id="fudian2" transform="translate(-50,-50)"> <ellipse fill="{font_color}" cx="62.35" cy="49.75" rx="2.45" ry="2.45"></ellipse> <ellipse fill="{font_color}" cx="69.35" cy="49.75" rx="2.45" ry="2.45"></ellipse> </g> <g id="yanchang" transform="translate(-50,-50)"> <ellipse ry="1.2" rx="1.2" cy="34.8" cx="50" stroke-width="1" fill="{font_color}"></ellipse> <path d="m43.90277,36c3.65834,-7.46666 8.53611,-7.46666 12.19445,0m0,0c-3.65834,-6.72 -8.53612,-6.72 -12.19445,0" fill="{font_color}" stroke="{font_color}"></path> </g> <g id="baochifu" transform="translate(-50,-50)"> <path stroke="{font_color}" fill-opacity="0" d="m45.05,35.9c9.82505,0 9.9,0 9.9,0c0,0 -9.9,0 -9.9,0z" fill="{font_color}"></path> </g> <g id="zhongyinfu" transform="translate(-50,-50)"> <path stroke="{font_color}" d="m46,29.85455l8,3.23891l-7.91919,3.20653" stroke-width="1.2" fill="none"></path> </g> <g id="dunyinfu" transform="translate(-50,-50)"> <path d="m44.8,29.2l7.8,-0.03881l-3.8806,7.83881c-1.30647,-2.6 -2.61293,-5.2 -3.9194,-7.8z" fill="{font_color}"></path> </g> <g id="huxifu" transform="translate(-50,-50)"> <path d="m45.7,32.81284l8.6,3.48183l-8.51313,3.44702" stroke-linecap="butt" stroke-linejoin="miter" fill="none" stroke-width="1" transform="rotate(90 50,36.277267456054695) " stroke="{font_color}"></path> </g> <g id="huayin_shang" transform="translate(-50,-50)"> <line transform="rotate(90 62.92499923706055,38.39294815063477) " stroke="{font_color}" y2="37" x2="64.25" y1="39.7859" x1="61.6" fill="none"></line> <line stroke="{font_color}" y2="39.74091" x2="62.3" y1="37.5" x1="59.4" fill="none" transform="rotate(90 60.85000228881836,38.62045288085938) "></line> <path stroke="{font_color}" transform="rotate(-180 55.30000305175781,42.900001525878906) " d="m48.70438,48.3317c0,0 -1.20581,-8.14756 6.14959,-10.8634" stroke-width="1" fill="none"></path> </g> <g id="huayin_xia" transform="translate(-50,-50)"> <line stroke="{font_color}" y2="46.4" x2="64.05" y1="49.1859" x1="61.4" fill="none" transform="rotate(-180 62.725006103515625,47.7929458618164) "></line> <line stroke="{font_color}" y2="49.14091" x2="61.9" y1="46.9" x1="59" fill="none" transform="rotate(-180 60.45000457763672,48.02045059204101) "></line> <path stroke="{font_color}" d="m61.78897,48.8c0,0 1.18081,-8.14755 -6.02209,-10.86339" stroke-width="1" fill="none"></path> </g> <g id="boyinfu_shang1" transform="translate(-50,-50)"> <path fill="{font_color}" d="m45.62,28.31c0.06,-0.03 0.18,-0.06 0.24,-0.06c0.3,0 0.27,-0.03 1.89,1.95l1.53,1.83c0.03,0 0.57,-0.84 1.23,-1.83c1.14,-1.68 1.23,-1.83 1.35,-1.89c0.06,-0.03 0.18,-0.06 0.24,-0.06c0.3,0 0.27,-0.03 1.89,1.95l1.53,1.83l0.48,-0.69c0.51,-0.78 0.54,-0.84 0.69,-0.9c0.42,-0.18 0.87,0.15 0.81,0.6c-0.03,0.12 -0.3,0.51 -1.5,2.37c-1.38,2.07 -1.5,2.22 -1.62,2.28c-0.06,0.03 -0.18,0.06 -0.24,0.06c-0.3,0 -0.27,0.03 -1.89,-1.95l-1.53,-1.83c-0.03,0 -0.57,0.84 -1.23,1.83c-1.14,1.68 -1.23,1.83 -1.35,1.89c-0.06,0.03 -0.18,0.06 -0.24,0.06c-0.3,0 -0.27,0.03 -1.89,-1.95l-1.53,-1.83l-0.48,0.69c-0.51,0.78 -0.54,0.84 -0.69,0.9c-0.42,0.18 -0.87,-0.15 -0.81,-0.59999c0.03,-0.12 0.3,-0.51 1.5,-2.37c1.38,-2.07 1.5,-2.22 1.62,-2.28l0,-0.00001z" stroke-width="33.33333"></path> </g> <g id="boyinfu_shang2" transform="translate(-50,-50)"> <path fill="{font_color}" d="m42.5,29.11c0.06,-0.03 0.18,-0.06 0.24,-0.06c0.3,0 0.27,-0.03 1.89,1.95l1.53,1.83c0.03,0 0.57,-0.84 1.23,-1.83c1.14,-1.68 1.23,-1.83 1.35,-1.89c0.06,-0.03 0.18,-0.06 0.24,-0.06c0.3,0 0.27,-0.03 1.89,1.95l1.53,1.83c0.03,0 0.57,-0.84 1.23,-1.83c1.14,-1.68 1.23,-1.83 1.35,-1.89c0.06,-0.03 0.18,-0.06 0.24,-0.06c0.3,0 0.27,-0.03 1.89,1.95l1.53,1.83l0.48,-0.69c0.51,-0.78 0.54,-0.84 0.69,-0.9c0.42,-0.18 0.87,0.15 0.81,0.6c-0.03,0.12 -0.3,0.51 -1.5,2.37c-1.38,2.07 -1.5,2.22 -1.62,2.28c-0.06,0.03 -0.18,0.06 -0.24,0.06c-0.3,0 -0.27,0.03 -1.89,-1.95l-1.53,-1.83c-0.03,0 -0.57,0.84 -1.23,1.83c-1.14,1.68 -1.23,1.83 -1.35,1.89c-0.06,0.03 -0.18,0.06 -0.24,0.06c-0.3,0 -0.27,0.03 -1.89,-1.95l-1.53,-1.83c-0.03,0 -0.57,0.84 -1.23,1.83c-1.14,1.68 -1.23,1.83 -1.35,1.89c-0.06,0.03 -0.18,0.06 -0.24,0.06c-0.3,0 -0.27,0.03 -1.89,-1.95l-1.53,-1.83l-0.48,0.69c-0.51,0.78 -0.54,0.84 -0.69,0.9c-0.42,0.18 -0.87,-0.15 -0.81,-0.6c0.03,-0.12 0.3,-0.51 1.5,-2.37c1.38,-2.07 1.5,-2.22 1.62,-2.28z" stroke-width="33.33333"></path> </g> <g id="boyinfu_xia1" transform="translate(-50,-50)"> <path fill="{font_color}" d="m49.79,27.85c0.27,-0.15 0.63,0 0.75,0.27c0.06,0.12 0.06,0.24 0.06,1.43999l0,1.29l0.57,-0.84c0.51,-0.75 0.57,-0.84 0.69,-0.9c0.06,-0.03 0.18,-0.06 0.24,-0.06c0.3,0 0.27,-0.03 1.89,1.95l1.53,1.83l0.48,-0.69c0.51,-0.78 0.54,-0.84 0.69,-0.9c0.42,-0.18 0.87,0.15 0.81,0.6c-0.03,0.12 -0.3,0.51 -1.5,2.37c-1.38,2.07 -1.5,2.22 -1.62,2.28c-0.06,0.03 -0.18,0.06 -0.24,0.06c-0.3,0 -0.27,0.03 -1.83,-1.89c-0.81,-0.99 -1.5,-1.8 -1.53,-1.86c-0.06,-0.03 -0.06,-0.03 -0.12,0.03c-0.06,0.06 -0.06,0.15 -0.06,2.28c0,1.95 0,2.25 -0.06,2.34c-0.18,0.45 -0.81,0.48 -1.05,0.03c-0.03,-0.06 -0.06,-0.24 -0.06,-1.41l0,-1.35l-0.57,0.84c-0.54,0.78 -0.6,0.87 -0.72,0.93c-0.06,0.03 -0.18,0.06 -0.24,0.06c-0.3,0 -0.27,0.03 -1.89,-1.95l-1.53,-1.83l-0.48,0.69c-0.51,0.78 -0.54,0.84 -0.69,0.9c-0.42,0.18 -0.87,-0.15 -0.81,-0.6c0.03,-0.12 0.3,-0.51 1.5,-2.37c1.38,-2.07 1.5,-2.22 1.62,-2.28c0.06,-0.03 0.18,-0.06 0.24,-0.06c0.3,0 0.27,-0.03 1.89,1.95l1.53,1.83c0.03,0 0.06,-0.06 0.09,-0.09c0.06,-0.12 0.06,-0.15 0.06,-2.28c0,-1.92 0,-2.22 0.06,-2.31c0.06,-0.15 0.15,-0.24 0.3,-0.3l0,0.00001z" stroke-width="33.33333"></path> </g> <g id="boyinfu_xia2" transform="translate(-50,-50)"> <path stroke-width="33.33333" d="m52.81,27.85c0.27,-0.15 0.63,0 0.75,0.27c0.06,0.12 0.06,0.24 0.06,1.44l0,1.29l0.57,-0.84c0.51,-0.75 0.57,-0.84 0.69,-0.9c0.06,-0.03 0.18,-0.06 0.24,-0.06c0.3,0 0.27,-0.03 1.89,1.95l1.53,1.83l0.48,-0.69c0.51,-0.78 0.54,-0.84 0.69,-0.9c0.42,-0.18 0.87,0.15 0.81,0.6c-0.03,0.12 -0.3,0.51 -1.5,2.37c-1.38,2.07 -1.5,2.22 -1.62,2.28c-0.06,0.03 -0.18,0.06 -0.24,0.06c-0.3,0 -0.27,0.03 -1.83,-1.89c-0.81,-0.99 -1.5,-1.8 -1.53,-1.86c-0.06,-0.02999 -0.06,-0.02999 -0.12,0.03c-0.06,0.06 -0.06,0.15 -0.06,2.28c0,1.95 0,2.25 -0.06,2.34c-0.18,0.45 -0.81,0.48 -1.05,0.03c-0.03,-0.06 -0.06,-0.24 -0.06,-1.41l0,-1.35l-0.57,0.84c-0.54,0.78 -0.6,0.87 -0.72,0.93c-0.06,0.03 -0.18,0.06 -0.24,0.06c-0.3,0 -0.27,0.03 -1.89,-1.95l-1.53,-1.83c-0.03,0 -0.57,0.84 -1.23,1.83c-1.14,1.68 -1.23,1.83 -1.35,1.89c-0.06,0.03 -0.18,0.06 -0.24,0.06c-0.3,0 -0.27,0.03 -1.89,-1.95l-1.53,-1.83l-0.48,0.68999c-0.51,0.78 -0.54,0.84 -0.69,0.9c-0.42,0.18 -0.87,-0.15 -0.81,-0.6c0.03,-0.12 0.3,-0.51 1.5,-2.37c1.38,-2.07 1.5,-2.22 1.62,-2.28c0.06,-0.03 0.18,-0.06 0.24,-0.06c0.3,0 0.27,-0.03 1.89,1.95l1.53,1.83c0.03,0 0.57,-0.84 1.23,-1.83c1.14,-1.68 1.23,-1.83 1.35,-1.89c0.06,-0.03 0.18,-0.06 0.24,-0.06c0.3,0 0.27,-0.03 1.89,1.95l1.53,1.83c0.03,0 0.06,-0.06 0.09,-0.09c0.06,-0.12 0.06,-0.15 0.06,-2.28c0,-1.92 0,-2.22 0.06,-2.31c0.06,-0.15 0.15,-0.24 0.3,-0.3z" fill="{font_color}"></path> </g> <g id="changyinfu1" transform="translate(-50,-50)"> <path fill="{font_color}" d="m46.4349,31.3038l0.43835,-1.54672c-0.51803,-0.41849 -1.0888,-0.62407 -1.71286,-0.62407c-0.4049,0 -0.71708,0.11285 -0.9493,0.34508c-0.2325,0.23249 -0.35868,0.50469 -0.38506,0.8234c0,0.45792 0.14602,0.78995 0.43808,1.00884c0.29205,0.21918 0.61075,0.3255 0.9493,0.3255c0.03317,0 0.07314,0.01984 0.10632,0.05302c0.17919,-0.01984 0.55093,-0.15256 1.11517,-0.38505l0,0l0,0zm3.39908,4.40821l1.82572,-6.12108c0,-0.15934 -0.05305,-0.23903 -0.16588,-0.23903c-0.25237,0 -0.78344,0.26568 -1.60001,0.80327c-0.8166,0.53135 -1.26148,0.84325 -1.33435,0.93625c0.03316,-0.03998 0.0862,-0.093 0.15935,-0.16615c0.67058,0.97597 1.00911,1.89887 1.00911,2.77531c-0.05981,0.67027 -0.29232,1.2612 -0.70374,1.75907c-0.4049,0.4979 -0.91612,0.74372 -1.52687,0.74372c-0.52455,0 -0.98927,-0.12621 -1.4075,-0.37202c-0.41169,-0.24552 -0.63087,-0.59742 -0.65724,-1.06867c0.03318,-0.11285 0.05302,-0.25887 0.05302,-0.43835l0.62408,-2.38996c-0.26566,0.1395 -0.6374,0.21262 -1.11545,0.21262c-0.51095,-0.02662 -0.92917,-0.20582 -1.25466,-0.53785c-0.32523,-0.33852 -0.48458,-0.78991 -0.48458,-1.36097c0.03318,-0.51775 0.20586,-0.94277 0.53107,-1.27451c0.32523,-0.33203 0.79675,-0.4979 1.42736,-0.4979c0.59742,0 1.22149,0.23902 1.87873,0.71027l1.05561,-3.34606l1.95842,0l-1.44066,4.51453c0.87641,-0.68389 1.61336,-1.16847 2.21075,-1.45399c0.59771,-0.28552 1.24815,-0.42475 1.95193,-0.42475c0.48452,0 0.73037,0.19905 0.73037,0.60395c0,0.20585 -0.1262,0.65072 -0.21265,0.94957c0.63737,-1.03577 1.36102,-1.55352 2.17106,-1.55352c0.36521,0 0.65726,0.1327 0.88298,0.39838c0.2322,0.2654 0.34504,0.57758 0.34504,0.93597c0,0.65725 -0.39157,1.06214 -0.95582,1.06214c-0.3652,0 -0.6771,-0.23901 -0.73037,-0.73692c0.08647,-0.38505 0.186,-0.74345 0.186,-0.9493c0,-0.07315 -0.04653,-0.10633 -0.13273,-0.10633c-0.11306,0 -0.32547,0.10633 -0.65072,0.32549c-0.29885,0.20558 -0.5909,0.55093 -0.88971,1.04883c-0.29858,0.4979 -0.54413,1.08227 -0.74345,1.75257l-1.11523,3.50541l-1.87899,0l0,0zm-1.52007,-4.24233l-1.11545,3.29303c0,0.10606 -0.01984,0.19905 -0.05303,0.27221c0,0.28552 0.1724,0.45792 0.51776,0.51122c0.99579,-0.48483 1.49369,-1.1883 1.49369,-2.11776c0,-0.5909 -0.27872,-1.2416 -0.84297,-1.95869l0,0z"></path> </g> <g id="changyinfu2" transform="translate(-50,-50)"> <path fill="{font_color}" d="m46.4349,31.3038l0.43835,-1.54672c-0.51803,-0.41849 -1.0888,-0.62407 -1.71286,-0.62407c-0.4049,0 -0.71708,0.11285 -0.9493,0.34508c-0.2325,0.23249 -0.35868,0.50469 -0.38506,0.8234c0,0.45792 0.14602,0.78995 0.43808,1.00884c0.29205,0.21918 0.61075,0.3255 0.9493,0.3255c0.03317,0 0.07314,0.01984 0.10632,0.05302c0.17919,-0.01984 0.55093,-0.15256 1.11517,-0.38505l0,0l0,0zm3.39908,4.40821l1.82572,-6.12108c0,-0.15934 -0.05305,-0.23903 -0.16588,-0.23903c-0.25237,0 -0.78344,0.26568 -1.60001,0.80327c-0.8166,0.53135 -1.26148,0.84325 -1.33435,0.93625c0.03316,-0.03998 0.0862,-0.093 0.15935,-0.16615c0.67058,0.97597 1.00911,1.89887 1.00911,2.77531c-0.05981,0.67027 -0.29232,1.2612 -0.70374,1.75907c-0.4049,0.4979 -0.91612,0.74372 -1.52687,0.74372c-0.52455,0 -0.98927,-0.12621 -1.4075,-0.37202c-0.41169,-0.24552 -0.63087,-0.59742 -0.65724,-1.06867c0.03318,-0.11285 0.05302,-0.25887 0.05302,-0.43835l0.62408,-2.38996c-0.26566,0.1395 -0.6374,0.21262 -1.11545,0.21262c-0.51095,-0.02662 -0.92917,-0.20582 -1.25466,-0.53785c-0.32523,-0.33852 -0.48458,-0.78991 -0.48458,-1.36097c0.03318,-0.51775 0.20586,-0.94277 0.53107,-1.27451c0.32523,-0.33203 0.79675,-0.4979 1.42736,-0.4979c0.59742,0 1.22149,0.23902 1.87873,0.71027l1.05561,-3.34606l1.95842,0l-1.44066,4.51453c0.87641,-0.68389 1.61336,-1.16847 2.21075,-1.45399c0.59771,-0.28552 1.24815,-0.42475 1.95193,-0.42475c0.48452,0 0.73037,0.19905 0.73037,0.60395c0,0.20585 -0.1262,0.65072 -0.21265,0.94957c0.63737,-1.03577 1.36102,-1.55352 2.17106,-1.55352c0.36521,0 0.65726,0.1327 0.88298,0.39838c0.2322,0.2654 0.34504,0.57758 0.34504,0.93597c0,0.65725 -0.39157,1.06214 -0.95582,1.06214c-0.3652,0 -0.6771,-0.23901 -0.73037,-0.73692c0.08647,-0.38505 0.186,-0.74345 0.186,-0.9493c0,-0.07315 -0.04653,-0.10633 -0.13273,-0.10633c-0.11306,0 -0.32547,0.10633 -0.65072,0.32549c-0.29885,0.20558 -0.5909,0.55093 -0.88971,1.04883c-0.29858,0.4979 -0.54413,1.08227 -0.74345,1.75257l-1.11523,3.50541l-1.87899,0l0,0zm-1.52007,-4.24233l-1.11545,3.29303c0,0.10606 -0.01984,0.19905 -0.05303,0.27221c0,0.28552 0.1724,0.45792 0.51776,0.51122c0.99579,-0.48483 1.49369,-1.1883 1.49369,-2.11776c0,-0.5909 -0.27872,-1.2416 -0.84297,-1.95869l0,0z"></path> <path stroke="{font_color}" fill-opacity="0" d="m58.2,32.24129c0,0 1.56492,-1.87796 3.39621,-0.03325c1.8313,1.84472 3.29633,0.01662 3.29633,0.01662c0,0 1.63151,-1.84472 3.32961,0c1.69811,1.84472 3.32962,0.01662 3.32962,0.01662c0,0 1.66481,-1.86134 3.36292,-0.03325c1.69811,1.8281 3.29633,0.01662 3.29633,0.01662c0,0 1.59823,-1.84472 3.32963,-0.01662c1.73141,1.8281 3.32962,0.01662 3.32962,0.01662c0,0 1.76469,-1.86134 3.22973,-0.01662c1.46503,1.84472 2.83018,0.03325 2.83018,0.03325" fill="{font_color}"></path> </g> <g id="changyinfu3" transform="translate(-50,-50)"> <!-- (3.39621+3.29633)*7 = 46.84778 --> <path stroke="{font_color}" fill-opacity="0" d="m46.4349,32.24129 c0,0 1.56492,-1.87796 3.39621,-0.03325c1.8313,1.84472 3.29633,0.01662 3.29633,0.01662 c0,0 1.56492,-1.87796 3.39621,-0.03325c1.8313,1.84472 3.29633,0.01662 3.29633,0.01662 c0,0 1.56492,-1.87796 3.39621,-0.03325c1.8313,1.84472 3.29633,0.01662 3.29633,0.01662 c0,0 1.56492,-1.87796 3.39621,-0.03325c1.8313,1.84472 3.29633,0.01662 3.29633,0.01662 c0,0 1.56492,-1.87796 3.39621,-0.03325c1.8313,1.84472 3.29633,0.01662 3.29633,0.01662 c0,0 1.56492,-1.87796 3.39621,-0.03325c1.8313,1.84472 3.29633,0.01662 3.29633,0.01662 c0,0 1.56492,-1.87796 3.39621,-0.03325c1.8313,1.84472 3.29633,0.01662 3.29633,0.01662" fill="{font_color}"></path> </g> <g id="yiyin_bianyinfu_sheng" transform="translate(-50,-50)"> <path d="m45.1528,40.7327c0.09753,-0.05572 0.25077,-0.01394 0.30648,0.11144c0.02785,0.05572 0.02785,0.09753 0.02785,1.07269c0,0.57117 0,1.03088 0.01394,1.03088c0,0 0.12538,-0.05572 0.27863,-0.11145c0.32041,-0.12538 0.36221,-0.13931 0.44579,-0.06966c0.09751,0.06966 0.09751,0.08359 0.09751,0.64083c0,0.47366 0,0.51545 -0.02785,0.55724c-0.01393,0.02786 -0.0418,0.05572 -0.05572,0.06966c-0.02787,0.01392 -0.19504,0.09751 -0.39007,0.16717l-0.34827,0.15325l-0.01394,1.12841c0,0.61296 0,1.12841 0.01394,1.12841c0,0 0.12538,-0.05572 0.27863,-0.11144c0.32041,-0.12538 0.3622,-0.13931 0.44579,-0.06966c0.09752,0.06966 0.09752,0.08359 0.09752,0.64083c0,0.47366 0,0.51543 -0.02785,0.55724c-0.01392,0.02787 -0.04179,0.05572 -0.05572,0.06966c-0.02786,0.01394 -0.19504,0.0975 -0.39007,0.16716l-0.34828,0.15325l-0.01394,1.17019c0,1.05875 -0.01392,1.18415 -0.02785,1.22593c-0.09753,0.16718 -0.33435,0.16718 -0.43186,0c-0.01393,-0.04179 -0.02786,-0.15325 -0.02786,-1.12841l0,-1.07269l-0.59904,0.23684l-0.58509,0.23682l0,1.12841c0,1.19807 0,1.17021 -0.06964,1.23987c-0.02787,0.04179 -0.12538,0.08359 -0.16719,0.08359c-0.05572,0 -0.15324,-0.04178 -0.18111,-0.08359c-0.06966,-0.06965 -0.06966,-0.04179 -0.06966,-1.12841c0,-0.57118 0,-1.03088 -0.01392,-1.03088c0,0 -0.12539,0.05572 -0.27862,0.11144c-0.32042,0.12538 -0.3622,0.13932 -0.44579,0.06966c-0.09753,-0.06966 -0.09753,-0.08359 -0.09753,-0.64082c0,-0.47366 0,-0.51545 0.02787,-0.55724c0.01394,-0.02786 0.04179,-0.05572 0.05572,-0.06965c0.02785,-0.01394 0.19503,-0.09751 0.39007,-0.16718l0.3622,-0.15325l0,-1.12841c0,-0.61296 0,-1.12841 -0.01392,-1.12841c0,0 -0.12539,0.05572 -0.27863,0.11145c-0.32042,0.12538 -0.3622,0.13931 -0.44579,0.06965c-0.09751,-0.06965 -0.09751,-0.08359 -0.09751,-0.64083c0,-0.47366 0,-0.51544 0.02785,-0.55723c0.01394,-0.02787 0.04181,-0.05572 0.05572,-0.06966c0.02785,-0.01393 0.19503,-0.09752 0.39007,-0.16718l0.36221,-0.15323l0,-1.17021c0,-1.05875 0.01394,-1.18413 0.02785,-1.22593c0.09753,-0.16718 0.33435,-0.16718 0.43186,0c0.01394,0.04179 0.02787,0.15325 0.02787,1.12841l0.01393,1.07269l0.58509,-0.23682l0.5851,-0.23682l0,-1.12841c0,-1.05875 0,-1.12841 0.02786,-1.18415c0.02785,-0.05572 0.05572,-0.08359 0.12538,-0.11144l0.00003,0l-0.00003,-0.00002zm-0.15323,4.9455l0,-1.12841l-0.59903,0.23682l-0.5851,0.23682l0,1.14234l0,1.12841l0.0418,-0.01394c0.02785,-0.01394 0.29255,-0.12539 0.59903,-0.23682l0.5433,-0.22289l0,-1.14234l0,0l0,0.00002z" fill="{font_color}"></path> </g> <g id="yiyin_bianyinfu_jiang" transform="translate(-50,-50)"> <path fill="{font_color}" d="m43.23667,41.27848c0.16751,-0.03046 0.44165,0 0.54824,0.07615c0.03045,0.01524 0.03045,0.18275 -0.01524,2.66505c-0.03046,1.44674 -0.04568,2.63459 -0.04568,2.63459c0,0.01523 0.06092,-0.01523 0.12183,-0.06092c0.31981,-0.2132 0.71576,-0.33503 1.11171,-0.36549c0.41117,-0.01523 0.7462,0.1066 1.03555,0.39595c0.28935,0.27412 0.44164,0.63961 0.4721,1.03555c0.01523,0.28936 -0.0457,0.54824 -0.18275,0.82236c-0.21321,0.41119 -0.51778,0.70053 -1.43151,1.32492c-0.57869,0.39595 -0.73098,0.51778 -0.91372,0.73098c-0.09138,0.09137 -0.19799,0.19798 -0.22844,0.2132c-0.13707,0.09138 -0.28936,0.07615 -0.41118,-0.03045c-0.03045,-0.04569 -0.06091,-0.09137 -0.07615,-0.13706c-0.01521,-0.03046 -0.04568,-1.65995 -0.09137,-4.23362c-0.04568,-2.29955 -0.07614,-4.35544 -0.09136,-4.58387l0,-0.39595l0.06091,-0.03046c0.03045,-0.01523 0.09137,-0.04568 0.13706,-0.06092zm1.61425,5.58898c-0.1066,-0.06091 -0.27412,-0.07616 -0.41118,-0.03046c-0.27412,0.07613 -0.50254,0.3198 -0.59392,0.63961c-0.03045,0.15229 -0.06091,1.46196 -0.03045,1.96451c0.01523,0.2132 0.01523,0.41117 0.03045,0.45687l0.01523,0.06091l0.22843,-0.19798c0.31981,-0.27412 0.63961,-0.59392 0.7919,-0.80713c0.15228,-0.21319 0.30457,-0.50255 0.36548,-0.71574c0.09138,-0.35027 0.04569,-0.74622 -0.09137,-1.05079c-0.07615,-0.15229 -0.16752,-0.25889 -0.30458,-0.31981z"></path> </g> <g id="yiyinxian_qian" transform="translate(-50,-50)"> <path fill="{font_color}" d="m50.16008,57.08764c0,0 -0.818,4.79115 4.44059,5.49229" fill-opacity="0" stroke="{font_color}"></path> </g> <g id="yiyin_yingao_gao" transform="translate(-50,-50)"> <ellipse ry="1.2" rx="1.2" cy="43.5" cx="50" fill="{font_color}"></ellipse> </g> <g id="yiyin_yinfu_1" transform="translate(-50,-50)"> <path fill="{font_color}" d="m52.52389,54.48409l-5.00169,0l0,-0.96419l1.95918,0l0,-6.66805l-2.00528,0.59245l0,-1.02227l3.10012,-0.90612l0,8.00399l1.94766,0l0,0.96419l0,0z"></path> </g> <g id="yiyin_yinfu_2" transform="translate(-50,-50)"> <path fill="{font_color}" d="m52.61782,54.4445l-5.31653,0l0,-0.95942l2.53112,-2.53146q1.05176,-1.05188 1.41004,-1.66451t0.35828,-1.27153q0,-0.73977 -0.41607,-1.13856t-1.21354,-0.39878q-1.16734,0 -2.23064,0.99408l0,-1.12124q1.04019,-0.79758 2.404,-0.79758q1.17887,0 1.86655,0.63576t0.68768,1.72232q0,0.80913 -0.43918,1.58937t-1.66431,1.99397l-1.98791,1.94193l0,0.02313l4.01051,0l0,0.98254l0,0z"></path> </g> <g id="yiyin_yinfu_3" transform="translate(-50,-50)"> <path fill="{font_color}" d="m47.49273,52.86018q0.87357,0.681 1.98539,0.681q0.88492,0 1.4068,-0.43698t0.52187,-1.17471q0,-1.62305 -2.3371,-1.62305l-0.71474,0l0,-0.89665l0.68071,0q2.06481,0 2.06481,-1.53225q0,-1.40739 -1.57697,-1.40739q-0.90761,0 -1.70177,0.60155l0,-1.02149q0.83954,-0.48805 1.96271,-0.48805q1.10048,0 1.76417,0.57317t0.66369,1.49253q0,1.6798 -1.71312,2.16785l0,0.01134q0.93031,0.10216 1.4692,0.6583t0.53889,1.39605q0,1.1577 -0.83386,1.86707t-2.21797,0.70937q-1.21393,0 -1.96271,-0.454l0,-1.12365l0,-0.00001z"></path> </g> <g id="yiyin_yinfu_4" transform="translate(-50,-50)"> <path d="m53.2203,52.16431l-1.15266,0l0,2.33079l-1.10512,0l0,-2.33079l-4.18282,0l0,-0.73729l3.96893,-5.92211l1.31902,0l0,5.75562l1.15266,0l0,0.90378zm-2.25778,-0.90378l0,-3.7697q0,-0.40432 0.02376,-0.92756l-0.02376,0q-0.08319,0.22594 -0.33272,0.70162l-2.68556,3.99563l3.01828,0z" fill="{font_color}"></path> </g> <g id="yiyin_yinfu_5" transform="translate(-50,-50)"> <path fill="{font_color}" d="m47.48999,52.97866q0.89893,0.58293 1.85624,0.58293q0.9106,0 1.47099,-0.51297t0.56036,-1.35236q0,-0.85104 -0.5662,-1.31738t-1.65194,-0.46633q-0.51368,0 -1.38926,0.08162l0,-4.47676l4.34289,0l0,0.97929l-3.30386,0l0,2.49485q0.49034,-0.02331 0.74717,-0.02331q1.38926,0 2.17144,0.70531t0.78219,1.9411q0,1.2824 -0.83471,2.07515t-2.31739,0.79276q-1.2375,0 -1.86791,-0.37307l0,-1.13085z"></path> </g> <g id="yiyin_yinfu_6" transform="translate(-50,-50)"> <path fill="{font_color}" d="m52.23264,46.78895q-0.67206,-0.34281 -1.40108,-0.34281q-1.12772,0 -1.80548,0.97131t-0.68916,2.66253l0.03416,0q0.60373,-1.18842 1.94786,-1.18842q1.11632,0 1.78271,0.73134t0.66637,1.94261q0,1.26842 -0.76889,2.08546t-1.96496,0.81705q-1.30997,0 -2.05607,-1.02845t-0.74612,-2.92536q0,-2.28543 0.97964,-3.63383t2.58576,-1.3484q0.91127,0 1.43526,0.25139l0,1.00559l0,0zm-3.8274,4.69657q0,0.85704 0.45565,1.4684t1.20744,0.61134q0.70625,0 1.15049,-0.52565t0.44425,-1.34841q0,-0.90274 -0.41576,-1.39983t-1.19037,-0.49708q-0.74041,0 -1.19605,0.5028t-0.45565,1.18842l0,0z"></path> </g> <g id="yiyin_yinfu_7" transform="translate(-50,-50)"> <path fill="{font_color}" d="m52.93901,45.89263l-3.53638,8.60762l-1.18276,0l3.35715,-8.00044l-4.51603,0l0,-1.00006l5.87803,0l0,0.39288z"></path> </g> <g id="yiyin_yinfu_hua"> <path d="M0,0 l 5 0 m -5 0 l -5 0 m 5 0 l -2.5 -4.33 m 2.5 4.33 l -2.5 4.33 m 2.5 -4.33 l 2.5 4.33 m -2.5 -4.33 l 2.5 -4.33 m -2.5 4.33 " fill="none" stroke="{font_color}" stroke-linecap="round" ></path> </g> <g id="yiyinxian_hou" transform="translate(-50,-50)"> <path fill="{font_color}" d="m50.09213,57.17038c0,0 0.71759,4.65513 -3.89552,5.33637" fill-opacity="0" stroke="{font_color}"></path> </g> <g id="yiyin_yingao_di" transform="translate(-50,-50)"> <ellipse ry="1.2" rx="1.2" cy="54" cx="50" fill="{font_color}"></ellipse> </g> <g id="kuohu_zuo" transform="translate(-50,-50)"> <path fill="{font_color}" d="m36.1523,40.8691q-3.2273,3.6996 -3.2273,9.0718t3.2273,9.19l1.6727,0q-3.247,-3.9751 -3.247,-9.1703t3.2273,-9.0915l-1.653,0l0,0z"></path> </g> <g id="kuohu_you" transform="translate(-50,-50)"> <path fill="{font_color}" d="m64.02271,40.8691q3.2273,3.6996 3.2273,9.0718t-3.2273,9.19l-1.67271,0q3.247,-3.9751 3.247,-9.1703t-3.2273,-9.0915l1.65301,0l0,0z"></path> </g> <g id="xiaojiexian_fine" transform="translate(-50,-50)"> <path fill="{font_color}" d="m44.94241,71.72372l-0.45351,0c-0.08461,-0.3185 -0.26107,-0.65903 -0.52901,-1.02174c-0.26812,-0.3627 -0.52505,-0.56237 -0.77081,-0.59849c-0.12503,-0.01617 -0.27311,-0.0282 -0.4444,-0.03629c-0.17146,-0.00808 -0.3658,-0.01203 -0.58353,-0.01203l-1.43896,0l0,3.44631l0.98803,0c0.2989,0 0.53124,-0.0313 0.69687,-0.09373c0.16578,-0.06242 0.30716,-0.15822 0.42445,-0.2872c0.08083,-0.08875 0.15444,-0.22668 0.22116,-0.41413c0.06673,-0.18746 0.11007,-0.38799 0.13036,-0.60159l0.45351,0l0,3.37374l-0.45351,0c-0.01204,-0.17731 -0.05366,-0.37888 -0.12417,-0.60469c-0.07086,-0.22581 -0.14653,-0.38902 -0.22736,-0.4898c-0.12142,-0.14911 -0.27379,-0.25092 -0.45764,-0.30526c-0.18385,-0.05435 -0.40501,-0.0817 -0.66367,-0.0817l-0.98803,0l0,2.9517c0,0.13277 0.02615,0.25161 0.0786,0.35617c0.05228,0.10474 0.14515,0.18935 0.2781,0.25367c0.06054,0.02804 0.19141,0.06226 0.39297,0.10268c0.20156,0.04007 0.35462,0.06226 0.45953,0.06638l0,0.42909l-3.71839,0l0,-0.42927c0.1209,-0.00808 0.28205,-0.02115 0.48378,-0.03938c0.20156,-0.01805 0.33261,-0.04128 0.39298,-0.06947c0.1209,-0.05246 0.20861,-0.13002 0.26296,-0.23286s0.08169,-0.22667 0.08169,-0.37182l0,-6.19129c0,-0.13294 -0.02219,-0.25092 -0.06656,-0.35376c-0.04437,-0.10284 -0.13707,-0.18643 -0.27809,-0.25092c-0.10886,-0.05245 -0.25488,-0.09872 -0.43838,-0.13913c-0.18351,-0.04025 -0.32951,-0.06449 -0.43838,-0.07258l0,-0.42926l6.72941,0l0,2.14665z"></path> <path stroke-width="0" d="m48.43705,78.15681l-2.87792,0l0,-0.39899c0.0927,-0.00809 0.18832,-0.01617 0.2872,-0.02425c0.09872,-0.00808 0.18436,-0.02408 0.25694,-0.04815c0.11282,-0.03629 0.19658,-0.09958 0.25092,-0.19021c0.05435,-0.09046 0.0817,-0.20844 0.0817,-0.35342l0,-3.6778c0,-0.12881 -0.02924,-0.24662 -0.08772,-0.35325s-0.13999,-0.1964 -0.2449,-0.26881c-0.07652,-0.04832 -0.18745,-0.0896 -0.3326,-0.12383s-0.27809,-0.05538 -0.39899,-0.06346l0,-0.39899l2.10401,-0.13294l0.08461,0.08461l0,4.86119c0,0.14103 0.02699,0.25797 0.08117,0.35067c0.05383,0.0927 0.13913,0.16132 0.25505,0.20552c0.08806,0.03629 0.17422,0.06552 0.25814,0.0877c0.0841,0.02219 0.17818,0.03732 0.28239,0.04541l0,0.39899zm-0.75586,-8.3861c0,0.22977 -0.0755,0.4303 -0.22667,0.60159s-0.3376,0.25694 -0.55929,0.25694c-0.20551,0 -0.38385,-0.0817 -0.53502,-0.2449s-0.22667,-0.34963 -0.22667,-0.55927c0,-0.22169 0.0755,-0.41516 0.22667,-0.58044s0.32951,-0.24783 0.53502,-0.24783c0.22977,0 0.41826,0.07756 0.5653,0.23286s0.22065,0.33553 0.22065,0.54105z"></path> <path stroke-width="0" d="m55.75893,78.15681l-2.9142,0l0,-0.39899c0.09269,-0.00809 0.19451,-0.01617 0.30526,-0.02425s0.20259,-0.02425 0.27517,-0.04832c0.11282,-0.03629 0.19657,-0.09975 0.25092,-0.19038s0.0817,-0.20861 0.0817,-0.35376l0,-3.06538c0,-0.42324 -0.10009,-0.74966 -0.29993,-0.97943c-0.20002,-0.22977 -0.44353,-0.34465 -0.7304,-0.34465c-0.21412,0 -0.41,0.0332 -0.58783,0.09975s-0.33518,0.14807 -0.4726,0.2449c-0.13346,0.0927 -0.23957,0.19245 -0.31834,0.29925s-0.13638,0.19244 -0.17266,0.25694l0,3.42825c0,0.13707 0.0282,0.24989 0.08461,0.33863s0.14102,0.15719 0.25402,0.20552c0.08461,0.04025 0.17628,0.07051 0.27517,0.09063s0.20053,0.03423 0.30527,0.04231l0,0.39899l-2.92022,0l0,-0.39899c0.09269,-0.00809 0.18849,-0.01617 0.2872,-0.02425s0.18436,-0.02408 0.25694,-0.04815c0.11282,-0.03629 0.19658,-0.09958 0.25092,-0.19021c0.05435,-0.09046 0.08169,-0.20844 0.08169,-0.35342l0,-3.6778c0,-0.1369 -0.02923,-0.26261 -0.08771,-0.37732s-0.13999,-0.20827 -0.2449,-0.28085c-0.07653,-0.04832 -0.16733,-0.0834 -0.27207,-0.10559s-0.21773,-0.03732 -0.33863,-0.0454l0,-0.39899l1.9831,-0.13294l0.08461,0.08462l0,0.84046l0.03027,0c0.09682,-0.09682 0.21773,-0.21256 0.3627,-0.34756s0.28223,-0.2449 0.41121,-0.32952c0.14911,-0.09682 0.32641,-0.17731 0.5321,-0.24181s0.43735,-0.09682 0.69532,-0.09682c0.57235,0 0.99662,0.17834 1.27266,0.53503s0.41412,0.83135 0.41412,1.42383l0,3.10165c0,0.14103 0.02425,0.25488 0.07257,0.34156s0.13106,0.15409 0.24783,0.20259c0.09682,0.04025 0.18041,0.06845 0.25092,0.08461s0.16837,0.02821 0.29322,0.03629l0,0.39899z"></path> <path stroke-width="0" d="m61.78701,76.75414c-0.24988,0.47569 -0.58438,0.85457 -1.00368,1.13662s-0.90083,0.42324 -1.44498,0.42324c-0.47965,0 -0.8998,-0.08462 -1.2606,-0.25402s-0.658,-0.39899 -0.8919,-0.68929s-0.40811,-0.62876 -0.52299,-1.01572s-0.17232,-0.7961 -0.17232,-1.22742c0,-0.38696 0.06139,-0.76685 0.18436,-1.13971s0.30337,-0.70839 0.54105,-1.00677c0.22976,-0.28618 0.51491,-0.51698 0.8556,-0.69222s0.72248,-0.26296 1.14573,-0.26296c0.43529,0 0.80814,0.06845 1.11857,0.20552s0.56237,0.32452 0.75585,0.56237c0.18539,0.22581 0.32349,0.49169 0.41412,0.79816s0.13604,0.63891 0.13604,0.99766l0,0.39899l-3.94815,0c0,0.39177 0.03731,0.74742 0.11178,1.06662c0.07464,0.31902 0.19244,0.59969 0.35377,0.84219c0.15719,0.23424 0.3627,0.41929 0.61672,0.55447c0.25402,0.13535 0.55618,0.20311 0.90685,0.20311c0.35875,0 0.66814,-0.0841 0.928,-0.2523s0.51095,-0.47089 0.75276,-0.90857l0.42342,0.26003zm-1.33628,-2.27341c0,-0.22512 -0.01909,-0.46606 -0.05744,-0.72318c-0.03835,-0.25729 -0.09975,-0.47226 -0.18436,-0.6451c-0.0927,-0.18488 -0.21961,-0.33554 -0.38094,-0.45214s-0.3689,-0.1749 -0.62274,-0.1749c-0.42324,0 -0.77494,0.17577 -1.05509,0.52729c-0.28016,0.3517 -0.43236,0.84099 -0.45644,1.46785l2.75702,0l0,0.00018z"></path> </g> <g id="xiaojiexian_dc" transform="translate(-50,-50)"> <path fill="{font_color}" d="m41.41325,76.62178l1.6221,-5.86021c0,-0.09289 0.04641,-0.28478 0.04641,-0.3546c0,-0.37791 -0.25575,-0.52887 -0.97685,-0.62201l0,-0.19197l3.12204,0c2.76133,0 4.13934,1.13376 4.13934,3.40682c0,1.02326 -0.27337,1.91269 -0.8139,2.66273c-0.54078,0.74981 -1.25585,1.31374 -2.15123,1.69738c-0.88942,0.37791 -1.83691,0.56982 -2.84272,0.56982l-3.21493,0l0,-0.19197c0.64542,0.00007 0.91275,-0.37776 1.06974,-1.11598l0,0l0,0zm3.0289,-6.40653l-1.81384,6.69131c0,0.06411 -0.01762,0.12788 -0.04665,0.19199c0.05236,0.29644 0.34318,0.44764 0.88364,0.44764c0.8546,0 1.6221,-0.20927 2.30218,-0.62796c0.68032,-0.42432 1.20349,-0.99414 1.58141,-1.71499c0.37792,-0.72672 0.56982,-1.52326 0.56982,-2.39532c0,-1.88934 -0.88364,-2.83105 -2.64536,-2.83105c-0.39513,0 -0.67429,0.08122 -0.8312,0.23839l0,0l0,0zm14.26097,-0.62226l-0.45368,2.57563l-0.23838,0c-0.10455,-1.43021 -0.75568,-2.14527 -1.95337,-2.14527c-0.74981,0 -1.41854,0.26171 -2.01144,0.78487c-0.58718,0.51746 -1.04657,1.17413 -1.3661,1.96503c-0.31985,0.78487 -0.47676,1.54634 -0.47676,2.27315c0,0.76147 0.17436,1.40092 0.51746,1.9183c0.34864,0.51746 0.87197,0.77312 1.57545,0.77312c1.13343,0 2.16264,-0.50578 3.07539,-1.52301l0.18594,0.19198c-0.94749,1.30209 -2.13361,1.95329 -3.54637,1.95329c-0.63375,0 -1.19761,-0.15715 -1.69167,-0.47098c-0.49413,-0.3139 -0.87197,-0.73822 -1.14534,-1.27329c-0.26741,-0.53483 -0.401,-1.12177 -0.401,-1.75569c0,-0.87776 0.24409,-1.72665 0.72681,-2.55197c0.48239,-0.82558 1.12772,-1.49422 1.93568,-2.00002c0.80819,-0.5058 1.65113,-0.76155 2.52914,-0.76155c0.26146,0 0.49984,0.01737 0.71514,0.05807c0.21506,0.04077 0.45906,0.09313 0.72078,0.15691c0.26146,0.06409 0.45343,0.10478 0.56394,0.12216c0.23838,-0.08147 0.41266,-0.18023 0.52309,-0.29074l0.2153,0l0,0zm-10.16827,7.64509c0,-0.17461 0.0641,-0.32555 0.1976,-0.45931c0.13383,-0.13382 0.3024,-0.2034 0.49438,-0.2034c0.16858,0 0.3139,0.06958 0.44178,0.2034c0.13383,0.13383 0.1976,0.29074 0.1976,0.45931c0,0.401 -0.29049,0.69174 -0.63938,0.69174c-0.39529,0 -0.69198,-0.27908 -0.69198,-0.69174l0,0l0,0zm9.81335,0.09877c0,-0.38959 0.27345,-0.66866 0.63963,-0.66866c0.39537,0 0.66866,0.27345 0.66866,0.66866c0,0.36625 -0.27908,0.63937 -0.66866,0.63937c-0.3546,0 -0.63963,-0.28479 -0.63963,-0.63937l0,0z"></path> </g> <g id="xiaojiexian_ds" transform="translate(-50,-50)"> <path fill="{font_color}" d="m43.50971,78.12899l-3.30971,0l0,-0.19761c0.66434,0 0.93964,-0.38902 1.10119,-1.14897l1.66993,-6.03302c0,-0.09561 0.0478,-0.2932 0.0478,-0.36502c0,-0.38905 -0.26328,-0.54446 -1.00559,-0.64033l0,-0.19758l3.2141,0c2.8427,0 4.26136,1.16713 4.26136,3.50729c0,1.05337 -0.28143,1.96903 -0.83791,2.74124c-0.55672,0.77196 -1.29289,1.35246 -2.21464,1.74737c-0.91561,0.38902 -1.89105,0.58663 -2.92654,0.58663l0,0l0,0zm0.90973,-7.94196l-1.86726,6.8886c0,0.06592 -0.01815,0.13162 -0.04805,0.19756c0.05393,0.30523 0.35325,0.4609 0.90974,0.4609c1.49636,0 2.63358,-0.4371 3.41143,-1.30491c0.78422,-0.87372 1.17327,-2.06464 1.17327,-3.57299c0,-1.94498 -0.90974,-2.91453 -2.72332,-2.91453c-0.40694,-0.00002 -0.69424,0.08357 -0.8558,0.24537l0,0l0,0zm13.11306,-0.64056l-0.51456,2.54975l-0.2454,0c0,-1.40664 -0.5327,-2.10677 -1.59221,-2.10677c-0.40696,0 -0.73617,0.11963 -0.99335,0.35913c-0.2574,0.23927 -0.38315,0.5506 -0.38315,0.93964c0,0.36502 0.10173,0.68224 0.31133,0.96342c0.20936,0.2753 0.53859,0.64057 0.99948,1.08942c0.46087,0.44886 0.80797,0.86166 1.04726,1.23872c0.24539,0.37112 0.36525,0.80209 0.36525,1.29289c0.02993,1.50223 -1.3108,2.56765 -2.62157,2.54951c-0.23339,0 -0.5805,-0.08384 -1.05339,-0.24539c-0.47264,-0.16159 -0.78988,-0.24544 -0.95756,-0.24544c-0.23925,0 -0.43685,0.22163 -0.49078,0.44298l-0.24537,0l0.44297,-2.81892l0.29319,0c0,0.11377 -0.01786,0.23953 -0.0478,0.36505c0.02381,0.55675 0.20935,1.03549 0.55648,1.44832c0.35325,0.40716 0.80212,0.61065 1.35271,0.61065c0.47288,0 0.86781,-0.16768 1.18505,-0.50892c0.3231,-0.341 0.48465,-0.74206 0.48465,-1.20293c0,-0.37706 -0.1135,-0.718 -0.33511,-1.02348c-0.22137,-0.30518 -0.5626,-0.68812 -1.03524,-1.15485c-0.47291,-0.467 -0.82003,-0.86806 -1.05341,-1.20905c-0.23339,-0.34125 -0.34713,-0.73617 -0.34713,-1.17302c0,-0.62855 0.22137,-1.14311 0.67025,-1.5503c0.44886,-0.40694 0.99355,-0.6104 1.63387,-0.6104c0.43097,0 0.79599,0.05981 1.1012,0.17356c0.3052,0.11375 0.52681,0.17356 0.66436,0.17356c0.16768,0 0.34124,-0.11375 0.5148,-0.34712l0.29317,0l0,0zm-8.89975,7.87041c0,-0.1797 0.06595,-0.33512 0.20347,-0.47292c0.13778,-0.13774 0.31133,-0.20933 0.50892,-0.20933c0.17356,0 0.3231,0.07159 0.45474,0.20933c0.13778,0.13779 0.2035,0.29935 0.2035,0.47292c0,0.41283 -0.29908,0.71212 -0.65824,0.71212c-0.40694,0 -0.71239,-0.28733 -0.71239,-0.71212l0,0l0,0zm8.45677,0.10168c0,-0.40104 0.32923,-0.68837 0.73617,-0.68837c0.37728,0 0.66434,0.28143 0.66434,0.68837c0,0.37705 -0.29907,0.65826 -0.66434,0.65826c-0.2035,0 -0.37706,-0.06575 -0.52069,-0.19149c-0.14365,-0.12578 -0.21548,-0.28117 -0.21548,-0.46677l0,0z"></path> </g> <g id="xiaojiexian_ty" transform="translate(-50,-50)"> <path fill="{font_color}" stroke-width="0" d="m49.54021,25.12531l-1.9399,0c0.03474,0.67435 0.06265,1.16816 0.08344,1.474c0.02108,0.30585 0.09056,0.66749 0.20163,1.08472c0.11818,0.42404 0.30585,0.79937 0.57724,1.1263c0.27111,0.32664 0.62566,0.54221 1.0776,0.63961l0,-4.32463l0,0zm2.8435,0l-1.90485,0l0,4.3246c0.48669,-0.0974 0.86202,-0.30583 1.1331,-0.63278c0.27111,-0.32664 0.45192,-0.70226 0.5493,-1.12629c0.10423,-0.42406 0.15979,-0.88281 0.18089,-1.37661c0.02073,-0.48669 0.03468,-0.88278 0.04155,-1.18892l0,0l0,0zm-1.90485,-0.91758l1.90485,0c-0.00683,-0.31981 -0.02079,-0.74412 -0.04155,-1.26555c-0.02107,-0.52826 -0.07664,-1.01495 -0.18089,-1.46005c-0.09739,-0.45194 -0.28506,-0.82728 -0.55614,-1.13313c-0.27111,-0.31297 -0.6467,-0.4659 -1.12627,-0.4659l0,4.32462l0,0zm-2.87855,0l1.9399,0l0,-4.32462c-0.54934,0.02079 -0.95942,0.27823 -1.24448,0.77175c-0.27822,0.49352 -0.45194,1.00811 -0.52855,1.54349c-0.06948,0.53538 -0.12502,1.2029 -0.16688,2.00938l0,0l0,0zm1.9399,7.68956l0,-1.6201c-0.7857,-0.1529 -1.48796,-0.47956 -2.09966,-0.97337c-1.21685,-0.99416 -1.95386,-2.48212 -2.12074,-4.17851l-1.61981,0l0,-0.91758l1.61981,0c0.174,-1.35582 0.60515,-2.50291 1.30713,-3.44153c0.70226,-0.93862 1.66879,-1.50875 2.91327,-1.71037l0,-1.6201l0.93865,0l0,1.6201c2.50972,0.39612 4.13668,2.69057 4.18534,5.1519l1.65481,0l0,0.91755l-1.65481,0c-0.02791,1.29315 -0.4172,2.41947 -1.17499,3.38597c-0.75093,0.96653 -1.75195,1.55032 -3.01035,1.7659l0,1.62012l-0.93866,0l0,0z"></path> </g> <g id="xiaojiexian_hs" transform="translate(-50,-50)"> <path fill="{font_color}" stroke-width="0" d="m48.6005,25.84624c-2.41392,-1.20446 -3.65253,-2.63823 -3.71605,-4.29631c0.02936,-0.54131 0.17078,-1.06305 0.41946,-1.5604c0.25348,-0.49757 0.59983,-0.90225 1.03388,-1.20946c0.43884,-0.30721 0.92642,-0.46321 1.46293,-0.46321c0.65836,0 1.21904,0.17538 1.69223,0.52174c0.473,0.34616 0.7071,0.83873 0.7071,1.47751c-0.01958,0.26826 -0.14142,0.49257 -0.37073,0.66814c-0.22911,0.17078 -0.48278,0.26826 -0.77041,0.28763c-0.53652,-0.04873 -0.8633,-0.26806 -0.97536,-0.65816l-0.17558,-0.56567c-0.13163,-0.41467 -0.35115,-0.71209 -0.76562,-0.71209c-0.30241,0 -0.55109,0.14641 -0.74126,0.44383s-0.28763,0.59983 -0.29742,0.91183c0.02916,0.42426 0.16579,0.80478 0.40468,1.13136c0.2439,0.32678 0.54131,0.60482 0.89725,0.84372c0.35615,0.2341 0.75104,0.44862 1.1753,0.64857c0.42425,0.19994 0.84372,0.3901 1.25819,0.57546l3.63298,-5.45204l1.0826,0l-3.85725,5.85193c0.64856,0.317 1.24341,0.68273 1.77511,1.08741c0.5315,0.40968 0.97516,0.89246 1.3313,1.44356c0.35595,0.55089 0.5315,1.15073 0.5315,1.7993c0,0.56088 -0.13163,1.08761 -0.39989,1.58018c-0.26344,0.49237 -0.64378,0.88746 -1.14116,1.18009c-0.49733,0.29261 -1.0778,0.43884 -1.73595,0.43884c-0.59026,-0.05853 -1.06805,-0.27305 -1.42899,-0.64857c-0.35595,-0.37551 -0.5461,-0.78519 -0.57048,-1.22885c0.01937,-0.26826 0.11705,-0.50234 0.29742,-0.69751c0.18038,-0.19495 0.43405,-0.30221 0.76083,-0.32177c0.36076,0 0.61442,0.08287 0.76563,0.24389c0.15102,0.16578 0.27305,0.40968 0.35594,0.73623c0.08772,0.32679 0.17057,0.56089 0.24866,0.69254c0.0829,0.13663 0.24392,0.20494 0.48758,0.20494c0.37075,0 0.65839,-0.12686 0.86812,-0.38051c0.20973,-0.24868 0.31218,-0.57548 0.31218,-0.98015c0,-0.5461 -0.19515,-1.00451 -0.58523,-1.37526c-0.38533,-0.36573 -0.97056,-0.74123 -1.75076,-1.12155c-0.78022,-0.37552 -1.23862,-0.60964 -1.38004,-0.69731l-3.53548,5.49098l-1.05823,0l3.755,-5.89087l0,0zm-3.6769,1.0191c0,-0.34137 0.10227,-0.59484 0.30221,-0.76563c0.19995,-0.17058 0.43904,-0.25345 0.71688,-0.25345c0.26347,0.02437 0.48778,0.12184 0.66814,0.2926c0.18037,0.17059 0.27306,0.42905 0.27306,0.76563c0,0.20973 -0.10247,0.40968 -0.30241,0.60463c-0.19994,0.19996 -0.41447,0.29745 -0.63879,0.29745c-0.27785,0 -0.52173,-0.0779 -0.72168,-0.2389c-0.19995,-0.16103 -0.29742,-0.39493 -0.29742,-0.70232l0,0l0,0zm8.23168,-3.43301c0,-0.33657 0.0925,-0.59983 0.27305,-0.7852c0.18518,-0.18519 0.41927,-0.27785 0.7071,-0.27785c0.28763,0 0.5315,0.08769 0.72649,0.26326c0.19514,0.17059 0.29258,0.42426 0.29258,0.75584c0,0.22931 -0.10225,0.43884 -0.30718,0.6242c-0.20474,0.18536 -0.42905,0.27804 -0.67292,0.27804c-0.25849,0 -0.49736,-0.08789 -0.7071,-0.25847c-0.20973,-0.17558 -0.31202,-0.37552 -0.31202,-0.59983l0,0z"></path> </g> <g id="lianyinxian_zuo" transform="translate(-50,-50)"> <path stroke="{font_color}" d="m50.75,50.75c0,0 -8.39389,0.56947 -12.21896,8.88383" stroke-linecap="round" stroke-linejoin="miter" stroke-width="1.2" fill="none"></path> </g> <g id="lianyinxian_you" transform="translate(-50,-50)"> <path stroke="{font_color}" d="m50.75,50.75c0,0 7.64178,0.56947 11.12411,8.88383" stroke-linecap="round" stroke-linejoin="miter" stroke-width="1.2" fill="none"></path> </g> <g id="lianyin_shuzi_2" transform="translate(-50,-50)"> <rect height="9.09091" width="9.71251" y="45.4934" x="45.14375" fill="none"></rect> <path fill="{font_color}" d="m52.47356,54.19958l-5.02356,0l0,-0.90654l2.39164,-2.39196q0.99379,-0.99392 1.33233,-1.57278t0.33854,-1.20146q0,-0.699 -0.39314,-1.07582t-1.14668,-0.37681q-1.103,0 -2.10771,0.9393l0,-1.05946q0.98287,-0.75363 2.27151,-0.75363q1.11391,0 1.7637,0.60072t0.64979,1.62741q0,0.76454 -0.41499,1.50178t-1.57259,1.88409l-1.87836,1.83491l0,0.02185l3.7895,0l0,0.92839l0,0z"></path> </g> <g id="lianyin_shuzi_3" transform="translate(-50,-50)"> <rect height="9.09091" width="9.71251" y="45.4934" x="45.14375" fill="none"></rect> <path fill="{font_color}" d="m47.5,52.85191q0.87103,0.67902 1.97961,0.67902q0.88235,0 1.40274,-0.43573t0.52034,-1.17128q0,-1.61838 -2.33029,-1.61838l-0.71269,0l0,-0.89402l0.67872,0q2.05883,0 2.05883,-1.52779q0,-1.40333 -1.57235,-1.40333q-0.905,0 -1.69686,0.5998l0,-1.01853q0.8371,-0.48662 1.95701,-0.48662q1.0973,0 1.75907,0.57152t0.66176,1.48819q0,1.6749 -1.70814,2.16152l0,0.01133q0.9276,0.10186 1.4649,0.65642t0.53735,1.39196q0,1.15436 -0.83147,1.86166t-2.21152,0.70731q-1.21039,0 -1.95701,-0.45265l0,-1.12039l0,0z"></path> </g> <g id="lianyin_shuzi_4" transform="translate(-50,-50)"> <rect height="9.09091" width="9.71251" y="45.4934" x="45.14375" fill="none"></rect> <path fill="{font_color}" d="m53.05001,51.99785l-1.0917,0l0,2.20754l-1.04668,0l0,-2.20754l-3.96162,0l0,-0.6983l3.75904,-5.60894l1.24927,0l0,5.45125l1.0917,0l0,0.85598zm-2.13839,-0.85598l0,-3.57035q0,-0.38294 0.02251,-0.87851l-0.02251,0q-0.07878,0.214 -0.31513,0.66452l-2.54354,3.78434l2.85867,0z"></path> </g> <g id="lianyin_shuzi_5" transform="translate(-50,-50)"> <rect height="9.09091" width="9.71251" y="45.4934" x="45.14375" fill="none"></rect> <path fill="{font_color}" d="m47.622,52.82201q0.85165,0.55227 1.75862,0.55227q0.86271,0 1.39362,-0.48599t0.53088,-1.28123q0,-0.80628 -0.53642,-1.24809t-1.56506,-0.4418q-0.48666,0 -1.31619,0.07732l0,-4.24131l4.11448,0l0,0.92778l-3.1301,0l0,2.36365q0.46455,-0.02209 0.70787,-0.02209q1.3162,0 2.05724,0.66822t0.74105,1.839q0,1.21497 -0.79082,1.96602t-2.1955,0.75107q-1.17242,0 -1.76968,-0.35345l0,-1.07137z"></path> </g> <g id="lianyin_shuzi_6" transform="translate(-50,-50)"> <rect height="9.09091" width="9.71251" y="45.4934" x="45.14375" fill="none"></rect> <path fill="{font_color}" d="m52.13745,46.92587q-0.64341,-0.3282 -1.34135,-0.3282q-1.07963,0 -1.7285,0.9299t-0.65977,2.54901l0.03271,0q0.57799,-1.13776 1.86481,-1.13776q1.06873,0 1.7067,0.70016t0.63796,1.85979q0,1.21434 -0.7361,1.99654t-1.88118,0.78221q-1.25412,0 -1.96841,-0.9846t-0.71431,-2.80063q0,-2.18799 0.93786,-3.4789t2.47552,-1.29091q0.87241,0 1.37407,0.24067l0,0.96272l0,0zm-3.6642,4.49632q0,0.8205 0.43622,1.40579t1.15596,0.58528q0.67614,0 1.10144,-0.50324t0.42531,-1.29091q0,-0.86425 -0.39804,-1.34014t-1.13962,-0.47589q-0.70883,0 -1.14506,0.48136t-0.43622,1.13775l0,0z"></path> </g> <g id="lianyin_shuzi_7" transform="translate(-50,-50)"> <rect height="9.09091" width="9.71251" y="45.4934" x="45.14375" fill="none"></rect> <path fill="{font_color}" d="m52.7,46.22666l-3.24879,7.90761l-1.08658,0l3.08414,-7.34982l-4.14877,0l0,-0.91872l5.4,0l0,0.36093z"></path> </g> <g id="lianyin_shuzi_8" transform="translate(-50,-50)"> <rect height="9.09091" width="9.71251" y="45.4934" x="45.14375" fill="none"></rect> <path fill="{font_color}" d="m49.14937,49.78842q-1.43546,-0.66648 -1.43546,-1.93597q0,-0.87807 0.67519,-1.43347t1.71722,-0.5554q0.96761,0 1.58964,0.52366t0.62202,1.34884q0,1.33297 -1.49925,2.05235l0,0.02116q1.75444,0.62416 1.75444,2.14755q0,0.99444 -0.72304,1.58686t-2.02027,0.59243q-1.0633,0 -1.73318,-0.58714t-0.66988,-1.5181q0,-1.52339 1.72255,-2.2216l0,-0.02116l0.00001,0zm2.13723,-1.93597q0,-0.53954 -0.33494,-0.84632t-0.91975,-0.3068q-0.53165,0 -0.91443,0.32266t-0.38279,0.81988q0,1.00501 1.26533,1.52339q1.28659,-0.52895 1.28659,-1.51281zm-1.35038,2.41203q-1.48863,0.60301 -1.48863,1.72439q0,0.57127 0.43595,0.94683t1.13773,0.37556q0.68051,0 1.10582,-0.37027t0.42533,-0.92039q0,-1.16369 -1.61621,-1.75612l0.00001,0z"></path> </g> <g id="lianyin_shuzi_9" transform="translate(-50,-50)"> <rect height="9.09091" width="9.71251" y="45.4934" x="45.14375" fill="none"></rect> <path fill="{font_color}" d="m47.87307,52.90001q0.66499,0.39017 1.425,0.39017q1.07665,0 1.66248,-0.84891t0.58584,-2.39909q-0.01056,0.01055 -0.01056,0q-0.52776,1.00182 -1.77332,1.00182q-1.00276,0 -1.66248,-0.69072t-0.65971,-1.79801q0,-1.17054 0.72305,-1.92455t1.86303,-0.754q1.19277,0 1.86305,0.93327t0.67027,2.72599q0,2.20401 -0.86554,3.39564t-2.3961,1.19165q-0.83389,0 -1.425,-0.27419l0,-0.9491l0,0.00001zm0.59111,-4.47128q0,0.80145 0.41167,1.276t1.12943,0.47454q0.63333,0 1.06083,-0.43237t0.42748,-1.04401q0,-0.86471 -0.42222,-1.42363t-1.11887,-0.55891q-0.64389,0 -1.06611,0.48509t-0.42222,1.22328l0,0.00001z"></path> </g> <g id="lidu_pp" transform="translate(-50,-50)"> <path stroke-width="0" d="m48.55689,29.42815l-1.11757,3.2296c0.03341,0 0.01671,0.02794 -0.05035,0.08949c0.05035,0.18427 0.14534,0.27924 0.27373,0.27924l1.14549,0l0,0.70973l-5.3082,0l0,-0.70973l1.16793,0c0.2513,0 0.52503,-0.18998 0.56989,-0.45822l2.72676,-7.64382l0,-0.13961c0,-0.2069 -0.1229,-0.34101 -0.20667,-0.34101c-0.19568,0 -0.39687,0.10619 -0.60926,0.31859c-0.21217,0.21239 -0.41334,0.46941 -0.6033,0.77106c-0.18446,0.30165 -0.35772,0.60353 -0.50855,0.90518l-0.34079,0.6818l-0.54769,0c0.50854,-1.02831 1.01138,-1.85522 1.50871,-2.47546c0.49734,-0.62573 1.11757,-0.9386 1.855,-0.9386c0.18447,0 0.34651,0.08926 0.49733,0.26252c0.15083,0.17325 0.23482,0.39686 0.25702,0.67608c0.67609,-0.62573 1.49201,-0.9386 2.44754,-0.9386c1.32425,0 1.9724,1.00016 1.9724,2.33562c0,0.59781 -0.16776,1.22355 -0.49733,1.88292c-0.32957,0.65388 -0.76557,1.20136 -1.31875,1.63734c-0.54746,0.43007 -1.13428,0.64816 -1.75452,0.64816c-0.48612,0 -1.00566,-0.26277 -1.55884,-0.78228l0,0l0,0zm8.62729,-0.04488l-1.16219,3.27448c0,0.0167 -0.00549,0.04465 -0.05037,0.04465c0.05037,0.21788 0.15655,0.32408 0.32409,0.32408l1.09514,0l0,0.70973l-5.30819,0l0,-0.70973l1.21255,0c0.10622,0 0.22338,-0.04465 0.34653,-0.13414c0.12837,-0.08376 0.20092,-0.19543 0.22338,-0.32408l2.72674,-7.64382l0,-0.09498c0,-0.24581 -0.16204,-0.38565 -0.25127,-0.38565c-0.32981,0 -0.69305,0.3131 -1.08968,0.93883c-0.39114,0.62024 -0.69851,1.20134 -0.92759,1.73781l-0.54769,0c0.27943,-0.60902 0.56439,-1.15122 0.84931,-1.62613c0.2852,-0.47491 0.64267,-0.89397 1.07297,-1.25169c0.43026,-0.35749 0.91065,-0.53624 1.44161,-0.53624c0.16204,0 0.31291,0.08926 0.46374,0.26252c0.15083,0.17325 0.24576,0.39686 0.29065,0.67608c0.67606,-0.62573 1.47505,-0.9386 2.40268,-0.9386c0.66486,0 1.15646,0.21788 1.48055,0.64816c0.3298,0.43027 0.49184,0.98895 0.49184,1.68746c0,0.59781 -0.16777,1.21805 -0.49733,1.8717c-0.32959,0.64816 -0.76556,1.18464 -1.31301,1.61493c-0.54769,0.42476 -1.13431,0.63695 -1.76025,0.63695c-0.26825,0 -0.54196,-0.07804 -0.82144,-0.2291c-0.27917,-0.15087 -0.50827,-0.33509 -0.69276,-0.55323l0,0l0,0zm2.68213,-4.93946c-0.48611,0 -0.89399,0.26272 -1.2238,0.788c-0.32952,0.52526 -0.57557,1.12307 -0.73762,1.78793s-0.24009,1.17342 -0.24009,1.51993c0.06134,0.59232 0.26249,0.88848 0.59779,0.88848s0.66489,-0.27398 0.98347,-0.82714c0.31836,-0.55318 0.58113,-1.17342 0.78778,-1.87171c0.20687,-0.69851 0.31285,-1.20706 0.31285,-1.53114c0,-0.50283 -0.16203,-0.75436 -0.48039,-0.75436l0,0l0,0zm-8.633,0c-0.46941,0 -0.86605,0.26272 -1.19012,0.788c-0.31859,0.52526 -0.5589,1.12307 -0.72094,1.78793s-0.24009,1.17342 -0.24009,1.51993c0,0.59232 0.18424,0.88848 0.55318,0.88848c0.352,0 0.6873,-0.27398 1.01138,-0.82714c0.32957,-0.55318 0.59781,-1.17342 0.80449,-1.87171c0.2069,-0.69851 0.31286,-1.20706 0.31286,-1.53114c0,-0.50283 -0.17874,-0.75436 -0.53075,-0.75436l0,0z"></path> </g> <g id="lidu_p" transform="translate(-50,-50)"> <path stroke-width="0" d="m53.35062,23.83966c-0.5424,0 -1.00069,0.30359 -1.37516,0.91051c-0.36812,0.60692 -0.64579,1.29767 -0.83302,2.0659c-0.18723,0.76824 -0.27741,1.35585 -0.27741,1.75623c0,0.68438 0.21286,1.02661 0.63918,1.02661c0.4067,0 0.79413,-0.31655 1.1686,-0.95573c0.38081,-0.63918 0.69077,-1.35585 0.92955,-2.1627c0.23904,-0.80711 0.3615,-1.39472 0.3615,-1.76919c0,-0.58101 -0.20654,-0.87164 -0.61324,-0.87164l0,0l0,0zm-6.3982,3.09278l-0.63284,0c0.59396,-1.19454 1.18158,-2.16296 1.76257,-2.89259c0.58762,-0.73597 1.31063,-1.10409 2.17592,-1.10409c0.18721,0 0.36783,0.11636 0.54871,0.34881c0.18094,0.22584 0.27107,0.49056 0.27107,0.78754c0.46491,-0.25811 0.91686,-0.52943 1.42702,-0.76824c0.51645,-0.2388 0.92955,-0.36812 1.40108,-0.36812c0.79412,0 1.36854,0.25202 1.73031,0.76189c0.36786,0.50379 0.54874,1.16862 0.54874,1.98869c0,0.50987 -0.10975,1.04591 -0.32292,1.60761c-0.21312,0.5617 -0.5101,1.07817 -0.89091,1.55604c-0.38081,0.47763 -0.82007,0.86502 -1.32355,1.162c-0.50354,0.29063 -1.03299,0.43899 -1.58833,0.43899c-0.31631,0 -0.63258,-0.09018 -0.9555,-0.27106c-0.32287,-0.18089 -0.58759,-0.40673 -0.79415,-0.6844l-1.34286,3.8351c0.03861,0 0.01931,0.03226 -0.05818,0.10337c0.05818,0.21292 0.16792,0.32264 0.31628,0.32264l1.32356,0l0,0.82009l-6.13343,0l0,-0.82007l1.3495,0c0.29037,0 0.60666,-0.2195 0.65849,-0.52943l3.15069,-8.8322l0,-0.16131c0,-0.23907 -0.14201,-0.39404 -0.2388,-0.39404c-0.2261,0 -0.45856,0.12271 -0.70397,0.36812c-0.24515,0.24541 -0.47761,0.54239 -0.6971,0.89094c-0.21315,0.34855 -0.41334,0.69736 -0.58762,1.04591l-0.39376,0.78781l0,0z"></path> </g> <g id="lidu_mp" transform="translate(-50,-50)"> <path stroke-width="0" d="m43.03016,29.96536l1.84168,-5.14473c0.07068,-0.25741 0.10945,-0.45073 0.10945,-0.57943c0,-0.21257 -0.07727,-0.31543 -0.23842,-0.31543c-0.27666,0 -0.62453,0.27033 -1.05601,0.80467c-0.42488,0.5346 -0.78541,1.25566 -1.08158,2.15078l-0.60528,0c0.32203,-0.98532 0.81126,-1.90603 1.46164,-2.76872c0.65038,-0.86295 1.40361,-1.29442 2.25997,-1.29442c0.68255,0 1.02383,0.36712 1.02383,1.10769c0.25767,-0.3091 0.58603,-0.56677 0.99165,-0.77275c0.40563,-0.20598 0.79834,-0.3091 1.17179,-0.3091c0.65038,0 0.97873,0.36052 0.97873,1.08185c0.3157,-0.31569 0.68915,-0.5731 1.12036,-0.77275c0.43781,-0.20598 0.85636,-0.3091 1.24932,-0.3091c0.65011,0 0.9787,0.33494 0.9787,1.00457c0,0.22523 -0.01951,0.41196 -0.05166,0.55358l-1.45504,4.32058c0,0.07728 -0.03218,0.25108 -0.10312,0.528c0,0.21255 0.0902,0.34125 0.264,0.39927c0.27692,-0.02582 0.60528,-0.264 0.98506,-0.70837c0.38004,-0.44414 0.75985,-1.06234 1.12695,-1.84801l0.41853,0.1804c-0.48288,0.99799 -0.96578,1.78366 -1.43603,2.36939c-0.46998,0.58605 -1.06866,0.8759 -1.80924,0.8759c-0.83051,0 -1.32634,-0.40566 -1.50014,-1.21056c0.01925,-0.2126 0.05143,-0.42512 0.09653,-0.63112c0.0451,-0.21231 0.10945,-0.4378 0.18013,-0.67596c0.07095,-0.24475 0.12238,-0.41855 0.14163,-0.51508l1.03043,-2.66586c0.07068,-0.2189 0.10945,-0.41196 0.10945,-0.57943c0,-0.33495 -0.10945,-0.50216 -0.32202,-0.50216c-0.18673,0 -0.34128,0.08361 -0.46365,0.25108c-0.12238,0.16747 -0.24448,0.41196 -0.36686,0.72765c-0.11604,0.31543 -0.18039,0.48291 -0.19332,0.50216l-1.84801,4.74541l-1.92502,0l1.92502,-5.14473c0.05169,-0.3091 0.07727,-0.4829 0.07727,-0.528c0,-0.36686 -0.11578,-0.55359 -0.34128,-0.55359c-0.12211,0 -0.25108,0.08994 -0.37978,0.264c-0.1287,0.17381 -0.27033,0.41829 -0.41855,0.73398l-0.23183,0.4829l-1.66128,4.74544l-2.05399,0l0,0zm12.25985,-1.66129l1.2427,-3.48344c0.07069,-0.27693 0.10286,-0.4829 0.10286,-0.63086c0,-0.19332 -0.0902,-0.28985 -0.264,-0.28985c-0.1224,0 -0.28326,0.09653 -0.46998,0.28985c-0.43145,0.45706 -0.77273,0.93996 -1.03019,1.44871l-0.66325,0c0.12868,-0.38005 0.34125,-0.77908 0.63112,-1.19131c0.28959,-0.41855 0.63086,-0.75983 1.01724,-1.03016c0.39268,-0.27693 0.78564,-0.41222 1.17838,-0.41222c0.65038,0 1.1011,0.3091 1.34558,0.92097c0.34125,-0.28984 0.74691,-0.5346 1.20423,-0.73424c0.45706,-0.19939 0.90146,-0.29618 1.32631,-0.29618c0.74058,0 1.31371,0.29618 1.71274,0.89513c0.4056,0.59235 0.60525,1.28124 0.60525,2.06032c0,0.71473 -0.1738,1.44238 -0.528,2.17003c-0.34761,0.72762 -0.82418,1.32636 -1.43576,1.79634c-0.61164,0.47019 -1.28156,0.70204 -2.01554,0.70204c-0.68253,0 -1.31339,-0.25767 -1.89944,-0.76645l-1.03008,2.95547c-0.03221,0.08387 -0.08393,0.2384 -0.15458,0.45073c0.02584,0.22552 0.14165,0.38004 0.34761,0.45732c0.2126,0.08361 0.56018,0.1224 1.0497,0.1224l0,0.81759l-6.03988,0l0,-0.81759c0.7469,0 1.2815,-0.11604 1.5969,-0.34125c0.31545,-0.22552 0.54098,-0.5217 0.66966,-0.90151l1.5004,-4.19185l0,0zm3.29672,-2.24071c-0.28352,0.64378 -0.45732,1.49381 -0.528,2.55614c0.07068,0.68915 0.2252,1.0304 0.47628,1.0304c0.8759,-0.16748 1.59696,-1.17836 2.16347,-3.0327c0.17406,-0.6633 0.264,-1.26199 0.264,-1.79658c0,-0.66304 -0.17381,-1.02383 -0.528,-1.08159c-0.57943,0 -1.19761,0.77249 -1.84774,2.32433l0,0z"></path> </g> <g id="lidu_mf" transform="translate(-50,-50)"> <path stroke-width="0" d="m56.67284,25.78919c0.27016,-0.70639 0.66335,-1.36952 1.17905,-1.98987c0.51598,-0.62036 1.13632,-1.12399 1.86713,-1.51089c0.73079,-0.3869 1.52926,-0.57734 2.38911,-0.57734c0.46061,0.04301 0.81077,0.20879 1.03794,0.4913c0.22743,0.27647 0.34391,0.62036 0.34391,1.01959c0,0.42363 -0.13511,0.8045 -0.41131,1.13631c-0.27044,0.33157 -0.60805,0.49735 -1.01959,0.49735c-0.49758,0 -0.78009,-0.22715 -0.83519,-0.67546c0.03072,-0.29483 0.14112,-0.57733 0.33158,-0.84148c0.19042,-0.26414 0.42389,-0.44829 0.70012,-0.54061c0.10437,0 0.15368,-0.04906 0.15368,-0.15345c0,-0.12277 -0.28247,-0.30087 -0.68174,-0.30087c-1.12398,0 -1.97779,1.14839 -2.5612,3.44542l2.21103,0l0,0.82916l-2.41377,0c-0.20252,0.8845 -0.46062,1.78712 -0.77985,2.70837c-0.3132,0.91516 -0.645,1.75667 -0.99493,2.52443c-0.34414,0.76751 -0.66966,1.37555 -0.97054,1.83617c-0.44226,0.68174 -0.90891,1.25907 -1.40649,1.73832c-0.49735,0.48499 -1.09304,0.79218 -1.78712,0.92725c-0.30086,0.037 -0.48528,0.05537 -0.55268,0.05537c-0.59595,0 -1.06865,-0.1844 -1.4065,-0.55899c-0.33784,-0.3746 -0.52199,-0.81057 -0.55268,-1.30814c0.04276,-0.43596 0.17181,-0.76778 0.38691,-0.99491c0.21482,-0.2272 0.52802,-0.4053 0.94564,-0.53433c0.31319,0.02463 0.5713,0.13506 0.77406,0.33157c0.2025,0.20278 0.30691,0.44853 0.30691,0.74939c0,0.55875 -0.55873,1.03166 -0.98261,1.43092c0,0.1044 0.11672,0.15369 0.35018,0.15369c0.96423,0 1.73177,-1.02586 2.29074,-3.07085c0.1965,-0.55292 0.36853,-1.08725 0.522,-1.60295c0.1537,-0.52225 0.36853,-1.28979 0.65105,-2.30939c0.28879,-1.02564 0.4913,-1.71366 0.61433,-2.07592l-1.68901,0l0,-0.82913l1.98988,0l0,0l-0.00004,-0.00001zm-13.03282,6.28912l1.86108,-5.05468c0.06743,-0.25181 0.1044,-0.42363 0.1044,-0.50363c0,-0.18414 -0.09835,-0.27621 -0.30112,-0.27621c-0.24553,0 -0.57735,0.24552 -0.99495,0.74311c-0.4113,0.49131 -0.82287,1.20977 -1.22209,2.14962l-0.57735,0c0.4976,-1.06261 1.0133,-1.94712 1.54763,-2.64722c0.54061,-0.7001 1.21002,-1.05028 2.0022,-1.05028c0.60199,0 0.92751,0.32552 0.97655,0.97658c0.75545,-0.68778 1.42486,-1.03167 2.01454,-1.03167c0.63871,0 0.9826,0.34389 1.03191,1.03167c0.30691,-0.30691 0.67545,-0.55269 1.11142,-0.74313c0.43621,-0.19044 0.83544,-0.28855 1.20399,-0.28855c0.65104,0 0.97631,0.27018 0.97631,0.81054c0,0.11672 -0.03069,0.30716 -0.09811,0.57735l-1.38184,3.97374c-0.07371,0.30084 -0.12302,0.46059 -0.15371,0.60199c0,0.15949 0.08605,0.27018 0.25182,0.3255c0.52828,-0.06764 1.21606,-0.81079 2.06358,-2.23562l0.50362,0c-0.25181,0.42389 -0.522,0.87816 -0.82287,1.3695c-0.29486,0.48524 -0.6264,0.89054 -0.9889,1.20374c-0.36226,0.31347 -0.77985,0.47297 -1.25907,0.47297c-0.82916,0 -1.35116,-0.38064 -1.55996,-1.13607c0.02464,-0.23952 0.10439,-0.55899 0.24578,-0.9582c0.14114,-0.39926 0.21484,-0.63875 0.23321,-0.72478l1.00726,-2.59162c0.01861,-0.10464 0.07371,-0.35018 0.07371,-0.45458c0,-0.21509 -0.09208,-0.32552 -0.27622,-0.32552c-0.50365,0 -0.87822,0.34389 -1.13004,1.03193l-1.689,4.75356l-1.80573,0l1.86082,-5.10373c0.03069,-0.10439 0.0493,-0.22112 0.0493,-0.35621c0,-0.21509 -0.12904,-0.32553 -0.38087,-0.32553c-0.44829,0.01837 -0.77381,0.36226 -0.97657,1.03193l-1.73806,4.75353l-1.76271,0l0,0l0.00002,-0.00001z"></path> </g> <g id="lidu_f" transform="translate(-50,-50)"> <path stroke-width="0" d="m51.7,26.25383l1.7387,0l0,0.65204l-1.93672,0c-0.55529,1.89813 -1.04313,3.30348 -1.46333,4.21626c-0.30918,0.65203 -0.61343,1.21227 -0.90801,1.68072c-0.29456,0.46864 -0.66172,0.86945 -1.10109,1.20278c-0.43958,0.33809 -0.95628,0.53611 -1.55036,0.59882c-0.39605,0 -0.75827,-0.13531 -1.09161,-0.4008c-0.32839,-0.26567 -0.49258,-0.60374 -0.49258,-1.02394c0,-0.27043 0.07735,-0.53135 0.2366,-0.78734c0.15945,-0.25599 0.41544,-0.40576 0.77291,-0.45876c0.2366,0 0.43936,0.07735 0.6182,0.23185c0.17863,0.15927 0.27042,0.34778 0.27042,0.5747c0,0.15451 -0.03877,0.28011 -0.11118,0.37666c-0.0724,0.10149 -0.19308,0.22214 -0.35252,0.37191c-0.15946,0.14974 -0.26569,0.28012 -0.30922,0.3816c0.03384,0.13037 0.11118,0.19803 0.22236,0.19803c0.4008,0 0.75827,-0.24629 1.07203,-0.73888c0.31395,-0.48783 0.57487,-1.05779 0.7826,-1.70982c0.20751,-0.65204 0.44431,-1.50209 0.71948,-2.55017c0.27538,-1.05283 0.48784,-1.77252 0.62791,-2.16362l-1.30407,0l0,-0.65204l1.57944,0c0.22691,-0.56499 0.54086,-1.0916 0.9466,-1.58893c0.41048,-0.49753 0.8839,-0.89358 1.41999,-1.19784c0.53611,-0.30426 1.1011,-0.45876 1.69021,-0.45876c0.4831,0 0.79208,0.14975 0.97092,0.34777c0.17863,0.19803 0.29459,0.48764 0.3573,0.62296c0,0.35747 -0.10624,0.71475 -0.31396,1.06727c-0.20751,0.35272 -0.50703,0.54105 -0.89338,0.55549c-0.04824,-0.04827 -0.13531,-0.09654 -0.25598,-0.14976c-0.2366,-0.11098 -0.35746,-0.19802 -0.39605,-0.50228c0.04351,-0.44431 0.24628,-0.74383 0.60851,-0.89338c0.23661,-0.05797 0.35748,-0.14976 0.35748,-0.27538c0,-0.17389 -0.14501,-0.28012 -0.43483,-0.3187c-0.48761,0 -0.92246,0.33809 -1.30384,1.00931c-0.25601,0.38161 -0.512,0.97567 -0.77293,1.78221l0,0l0,0.00002z" fill="{font_color}"></path> </g> <g id="lidu_ff" transform="translate(-50,-50)"> <path stroke-width="0" d="m48.92125,26.84817c-0.13514,0.66179 -0.32622,1.35144 -0.56863,2.06914c-0.23766,0.71771 -0.494,1.3654 -0.75952,1.93861c-0.26571,0.5732 -0.51271,1.0252 -0.75035,1.356c-0.7223,1.20715 -1.52858,1.89223 -2.42324,2.06458c-0.20521,0.0233 -0.34493,0.03724 -0.41956,0.03724c-0.46594,0 -0.8248,-0.1445 -1.07638,-0.42873c-0.25177,-0.28419 -0.37756,-0.62911 -0.37756,-1.02519c0,-0.5593 0.33557,-0.93207 1.01129,-1.12315c0.2283,0.01869 0.41479,0.10726 0.56387,0.26094c0.1445,0.15381 0.21914,0.34034 0.21914,0.55926c0,0.17715 -0.03741,0.32622 -0.11663,0.44744c-0.07922,0.12579 -0.17695,0.23763 -0.29815,0.33553c-0.1258,0.10253 -0.19585,0.1678 -0.21436,0.19111c-0.05135,0.05116 -0.07464,0.08855 -0.07464,0.11184c0,0.07922 0.07464,0.11644 0.22829,0.11644c0.43808,0 0.80629,-0.24698 1.09986,-0.741c0.29835,-0.49399 0.52187,-1.02521 0.67572,-1.58909c0.13057,-0.3915 0.27029,-0.86221 0.42414,-1.41671l0.47071,-1.70573c0.16301,-0.58238 0.30293,-1.05768 0.42394,-1.42131l-1.28157,0l0,-0.62914l1.52857,0c0.20979,-0.52645 0.50794,-1.02522 0.90421,-1.50052c0.39608,-0.48007 0.86679,-0.86222 1.41195,-1.15102c0.54537,-0.29357 1.14188,-0.43807 1.78493,-0.43807c0.35884,0.01852 0.62913,0.13037 0.81087,0.34015c0.1863,0.20978 0.27961,0.46136 0.27961,0.76429c0,0.34492 -0.10268,0.63373 -0.30769,0.86679s-0.47989,0.37279 -0.82024,0.41478c-0.38213,0 -0.59172,-0.17714 -0.62912,-0.53599c0.0187,-0.20959 0.10267,-0.41936 0.25175,-0.61979c0.15368,-0.20043 0.34015,-0.34015 0.56842,-0.40999c0.07922,0 0.11665,-0.03741 0.11665,-0.11663c0,-0.09315 -0.21436,-0.22829 -0.536,-0.22829c-0.82023,0 -1.46331,0.85744 -1.92923,2.57709l3.16882,0c0.33099,-0.84809 0.86222,-1.57057 1.58451,-2.16231c0.72707,-0.59192 1.56582,-0.89008 2.52117,-0.89008c0.36345,0.01851 0.63374,0.13514 0.80627,0.35409c0.17235,0.21913 0.26094,0.48007 0.26094,0.78758c0,0.33099 -0.10249,0.61044 -0.30291,0.83892c-0.20043,0.22829 -0.46614,0.36344 -0.80151,0.40543c-0.38215,0 -0.59193,-0.17714 -0.62916,-0.53599c0.0233,-0.21894 0.10711,-0.42872 0.25158,-0.62437c0.1445,-0.20043 0.33557,-0.33557 0.56865,-0.40543c0.0605,0 0.09313,-0.03741 0.09313,-0.11663c0,-0.09315 -0.19565,-0.22829 -0.51268,-0.22829c-0.50315,0 -0.91337,0.27029 -1.22563,0.81544c-0.31213,0.54535 -0.54518,1.14185 -0.70361,1.79887l1.65895,0l0,0.62914l-1.85,0c-0.24698,1.03 -0.56861,2.05045 -0.96469,3.07112c-0.39608,1.02062 -0.75954,1.77081 -1.0951,2.25541c-0.32164,0.51733 -0.67572,0.96473 -1.06245,1.34228c-0.38692,0.37739 -0.85286,0.61981 -1.40277,0.72229c-0.20501,0.02332 -0.34492,0.03725 -0.41936,0.03725c-0.45678,0 -0.81086,-0.14449 -1.06264,-0.42873c-0.247,-0.28421 -0.38214,-0.62913 -0.40543,-1.02521c0.03263,-0.32621 0.13057,-0.56846 0.29358,-0.72707c0.1632,-0.15845 0.40085,-0.28882 0.71772,-0.39608c0.24242,0.01869 0.43807,0.10249 0.59192,0.25636c0.15366,0.15387 0.22829,0.34015 0.22829,0.56384c0,0.17715 -0.06051,0.34016 -0.18172,0.49402s-0.30293,0.34953 -0.54535,0.59193c0,0.07922 0.07463,0.11643 0.22849,0.11643c0.73165,0 1.33275,-0.77822 1.79411,-2.33008c0.15383,-0.47526 0.28897,-0.92272 0.40544,-1.34684c0.12121,-0.42397 0.2796,-1.00652 0.48003,-1.73819c0.20042,-0.73643 0.33557,-1.23501 0.41478,-1.49594l-3.09438,0l0,-0.00002z"></path> </g> <g id="lidu_fff" transform="translate(-50,-50)"> <path stroke-width="0" d="m54.53334,26.95331c-0.22165,1.00962 -0.53775,2.02851 -0.94817,3.05707c-0.40578,1.02836 -0.78779,1.80668 -1.14161,2.33497c-0.33506,0.53312 -0.6935,0.99068 -1.08034,1.36826c-0.3822,0.37737 -0.85387,0.61794 -1.41057,0.72172c-0.20752,0.02358 -0.34916,0.03767 -0.42452,0.03767c-0.4624,0 -0.82084,-0.14626 -1.07571,-0.43399c-0.25004,-0.28772 -0.38684,-0.63689 -0.41042,-1.03783c0.03304,-0.33023 0.13217,-0.57542 0.29255,-0.73602c0.16038,-0.16037 0.39631,-0.29235 0.71244,-0.40094c0.50471,0.03787 0.83011,0.37737 0.83011,0.8303c0,0.2547 -0.24057,0.62278 -0.71707,1.0993c0,0.08017 0.07555,0.11787 0.2313,0.11787c0.74065,0 1.34912,-0.7878 1.81615,-2.35873c0.13217,-0.41042 0.27844,-0.91512 0.44346,-1.50971c0.16521,-0.599 0.32559,-1.1698 0.47167,-1.71701c0.14627,-0.54722 0.28308,-1.00479 0.40115,-1.37288l-3.13243,0c-0.2313,1.00479 -0.55206,2.02388 -0.96247,3.05707c-0.40558,1.02836 -0.78779,1.80668 -1.14159,2.33497c-0.74065,1.22198 -1.55684,1.92011 -2.45304,2.08996c-0.20752,0.02357 -0.34916,0.03766 -0.42935,0.03766c-0.47167,0 -0.83494,-0.14626 -1.08981,-0.43399c-0.25468,-0.28772 -0.39148,-0.63205 -0.41506,-1.03783c0.03768,-0.34431 0.13681,-0.60384 0.29255,-0.76886c0.15555,-0.16521 0.40095,-0.28789 0.73117,-0.3681c0.24521,0.01894 0.44346,0.10376 0.59901,0.2595c0.15574,0.15577 0.2313,0.34434 0.2313,0.5708c0.02821,0.37737 -0.47186,0.81619 -0.75494,1.0993c0,0.08017 0.07091,0.11787 0.21719,0.11787c0.50935,0 0.91977,-0.3538 1.19821,-0.83977c0.14144,-0.24057 0.2452,-0.44345 0.31129,-0.61792l0.34434,-0.90103c0.10859,-0.33486 0.25004,-0.8162 0.42472,-1.45307c0.17448,-0.63688 0.3395,-1.22644 0.48577,-1.77365c0.14627,-0.54722 0.28308,-1.00479 0.40095,-1.37288l-1.27357,0l0,-0.63689l1.54718,0c0.20772,-0.54722 0.50491,-1.0614 0.89639,-1.5379c0.39148,-0.47631 0.85851,-0.86315 1.41056,-1.15106c0.55186,-0.29236 1.17,-0.43863 1.84456,-0.43863c0.36327,0.01874 0.63688,0.13198 0.82083,0.34434c0.18859,0.21235 0.28308,0.46703 0.28308,0.77369c0,0.34433 -0.10376,0.63205 -0.31612,0.87281c-0.21235,0.24058 -0.48597,0.38202 -0.82566,0.42452c-0.38685,0 -0.59901,-0.17931 -0.63669,-0.54258c0.01874,-0.21216 0.10376,-0.42452 0.24984,-0.62741c0.15111,-0.20289 0.34453,-0.34433 0.58027,-0.41505c0.08019,0 0.11806,-0.03787 0.11806,-0.11806c0,-0.0943 -0.21699,-0.2311 -0.54258,-0.2311c-0.50954,0 -0.91996,0.27361 -1.23589,0.8162c-0.31612,0.54239 -0.55205,1.14159 -0.71707,1.79258l3.20778,0c0.33508,-0.85851 0.87284,-1.58989 1.60401,-2.1889c0.73601,-0.5992 1.58504,-0.90102 2.55217,-0.90102c0.35861,0.01874 0.62739,0.13198 0.80672,0.34433c0.18396,0.20753 0.27361,0.46703 0.27361,0.77369c0,0.34916 -0.10379,0.64152 -0.30667,0.87745c-0.20289,0.23594 -0.47167,0.37738 -0.81137,0.41988c-0.39631,0 -0.61792,-0.17931 -0.66045,-0.54258c0.02359,-0.22163 0.11321,-0.42936 0.2595,-0.63205c0.15093,-0.20289 0.33951,-0.3397 0.57082,-0.41042c0.08018,0 0.11787,-0.03787 0.11787,-0.11806c0,-0.0943 -0.217,-0.2311 -0.52365,-0.2311c-0.86335,0 -1.51899,0.88209 -1.96728,2.64646l3.20798,0c0.34917,-0.87262 0.88692,-1.61809 1.6181,-2.23604c0.73117,-0.62275 1.5756,-0.93407 2.53322,-0.93407c0.37275,0.03305 0.65101,0.16521 0.83032,0.39631c0.18396,0.22647 0.27361,0.49525 0.27361,0.8019c0,0.32559 -0.10379,0.60384 -0.3161,0.84441c-0.21216,0.23593 -0.48579,0.37274 -0.82549,0.41524c-0.35381,0 -0.55671,-0.17931 -0.5992,-0.54258c0.01894,-0.21216 0.10394,-0.41988 0.25002,-0.62258c0.14627,-0.20772 0.33022,-0.34917 0.54258,-0.41989c0.08019,0 0.11787,-0.03787 0.11787,-0.11806c0,-0.0943 -0.21697,-0.2311 -0.52365,-0.2311c-0.86315,0 -1.52361,0.88209 -1.9719,2.64646l1.70313,0l0,0.63689l-1.89654,0c-0.1414,0.66992 -0.33022,1.35858 -0.57078,2.06638c-0.23576,0.7076 -0.49063,1.35378 -0.7594,1.93885c-0.26897,0.58493 -0.51435,1.0473 -0.73601,1.38682c-0.33487,0.51899 -0.69811,0.96711 -1.08981,1.34448c-0.39148,0.37757 -0.85852,0.62759 -1.4011,0.74548c-0.18395,0.02358 -0.31128,0.03766 -0.38684,0.03766c-0.47631,0 -0.84439,-0.14142 -1.09911,-0.42452c-0.25002,-0.28306 -0.38684,-0.63224 -0.41038,-1.0473c0.04249,-0.34914 0.1414,-0.60846 0.29716,-0.77369c0.1604,-0.16502 0.40095,-0.28306 0.72654,-0.36327c0.23112,0.01894 0.41988,0.09912 0.56599,0.24057c0.1511,0.14627 0.22644,0.33023 0.22644,0.55205c0,0.15091 -0.03766,0.28306 -0.11321,0.40095c-0.07072,0.11787 -0.17912,0.24538 -0.31593,0.39148c-0.1368,0.14626 -0.23132,0.25951 -0.28308,0.34452c0,0.08017 0.07536,0.11787 0.23112,0.11787c0.43397,0 0.78779,-0.2311 1.06623,-0.69814c0.27825,-0.46703 0.51882,-1.01908 0.73118,-1.66059c0.14144,-0.44346 0.28773,-0.92944 0.43861,-1.46237l0.46703,-1.67007c0.16523,-0.58027 0.30667,-1.07087 0.42471,-1.46718l-3.12779,0l0,-0.00006z"></path> </g> <g id="lidu_cresc" transform="translate(-50,-50)"> <path stroke="{font_color}" d="m46.26054,32.35387l0.15415,0.42575c-1.16458,0.91502 -2.148,1.37239 -2.95044,1.37239c-0.42566,0 -0.73521,-0.15171 -0.92839,-0.45502c-0.19336,-0.30332 -0.28986,-0.68733 -0.28986,-1.15229c0,-0.77308 0.20547,-1.56801 0.61649,-2.38527c0.41102,-0.81707 0.91014,-1.44332 1.49727,-1.87883c0.45981,-0.33765 0.97853,-0.50644 1.5559,-0.50644c0.36205,0 0.63601,0.06867 0.82204,0.20547c0.18595,0.13707 0.27892,0.30341 0.27892,0.49903c0,0.15179 -0.04897,0.27531 -0.14683,0.37073c-0.09794,0.09542 -0.23492,0.14312 -0.41102,0.14312c-0.17131,0 -0.39151,-0.07816 -0.66059,-0.23492c-0.27892,-0.16625 -0.51141,-0.24956 -0.69726,-0.24956c-0.2398,0 -0.47834,0.10869 -0.71561,0.32609c-0.23736,0.21749 -0.4636,0.63871 -0.67892,1.26415c-0.21531,0.62543 -0.32293,1.25312 -0.32293,1.88326c0,0.46424 0.09044,0.82322 0.27151,1.0773c0.1321,0.19534 0.31805,0.29311 0.55776,0.29311c0.57257,0.00009 1.25512,-0.33259 2.04779,-0.99805z" stroke-miterlimit="10" stroke-width="0.25"></path> <path stroke="{font_color}" d="m48.69722,33.94655l-1.09356,0l0.51376,-1.97434c0.24956,-0.96869 0.46713,-1.88858 0.65317,-2.75961c0.044,-0.21522 0.06605,-0.34976 0.06605,-0.4037c0,-0.11737 -0.05385,-0.1761 -0.16146,-0.1761c-0.07346,0 -0.18604,0.05024 -0.33765,0.15044c-0.15171,0.10038 -0.42566,0.34859 -0.82204,0.74497l-0.22751,-0.25688c0.46948,-0.50391 0.93788,-0.88195 1.40492,-1.13395s0.82529,-0.37804 1.07486,-0.37804c0.0881,0 0.15767,0.02087 0.20899,0.06234c0.05141,0.04165 0.07707,0.09424 0.07707,0.15776c0,0.06406 -0.03216,0.23366 -0.09649,0.50897l-0.31932,1.32035c0.49514,-0.78093 1.05399,-1.44892 1.67671,-2.00397c0.29907,-0.26519 0.54908,-0.39774 0.75013,-0.39774c0.147,0 0.26962,0.04762 0.36765,0.14303c0.09804,0.0955 0.1471,0.20682 0.1471,0.33395c0,0.1321 -0.04771,0.24477 -0.14303,0.33756c-0.09542,0.09298 -0.33368,0.20312 -0.71507,0.33025c-0.36178,0.12243 -0.65643,0.26925 -0.88367,0.44065c-0.22742,0.17131 -0.47671,0.43307 -0.74804,0.78546s-0.46099,0.65949 -0.56887,0.92116s-0.27215,0.86966 -0.49279,1.82345l-0.33088,1.42398z" stroke-miterlimit="10" stroke-width="0.25"></path> <path stroke="{font_color}" d="m55.69155,32.10431l0.24224,0.32293c-1.19891,1.14009 -2.22633,1.71014 -3.08253,1.71014c-0.3475,0 -0.61288,-0.11747 -0.7963,-0.35229s-0.27522,-0.61161 -0.27522,-1.13025c0,-1.04703 0.31805,-2.08917 0.95414,-3.12653c0.71434,-1.17913 1.5681,-1.76878 2.56146,-1.76878c0.34732,0 0.61279,0.08692 0.7963,0.26058c0.18351,0.17375 0.27531,0.41228 0.27531,0.71561c0,0.31814 -0.11014,0.63113 -0.33025,0.93933c-0.22028,0.30829 -0.61414,0.62877 -1.18166,0.96155c-0.2839,0.16146 -0.89053,0.45259 -1.82019,0.87337c-0.0441,0.2642 -0.06605,0.51629 -0.06605,0.75591c0,0.3475 0.05502,0.58965 0.16517,0.72663c0.11014,0.13707 0.27034,0.20546 0.48077,0.20546c0.20059,0 0.42069,-0.0562 0.66058,-0.16878c0.32275,-0.15171 0.79476,-0.46 1.41621,-0.92487zm-2.56878,-1.0641c0.78771,-0.35229 1.3798,-0.73151 1.7761,-1.13765c0.26908,-0.28371 0.4037,-0.56516 0.4037,-0.844c0,-0.21034 -0.05503,-0.37804 -0.16517,-0.50273c-0.11005,-0.12478 -0.25317,-0.18712 -0.42936,-0.18712c-0.18108,0 -0.35717,0.06858 -0.52839,0.20547c-0.23013,0.18107 -0.4234,0.45502 -0.57981,0.82204c-0.22507,0.53824 -0.38419,1.08615 -0.47707,1.644z" stroke-miterlimit="10" stroke-width="0.25"></path> <path stroke="{font_color}" d="m60.17593,27.77416c0.43542,0 0.7718,0.08448 1.00917,0.25327c0.23727,0.16878 0.3559,0.36332 0.3559,0.58351c0,0.1321 -0.05024,0.24703 -0.15044,0.34488c-0.10029,0.09794 -0.22145,0.14683 -0.36332,0.14683c-0.09297,0 -0.17375,-0.02078 -0.24224,-0.06235c-0.06858,-0.04156 -0.16643,-0.14556 -0.29356,-0.3119c-0.2398,-0.31805 -0.47707,-0.47707 -0.712,-0.47707c-0.20067,0 -0.37795,0.07707 -0.53209,0.23095c-0.15415,0.15396 -0.23122,0.34579 -0.23122,0.57538c0,0.2005 0.04888,0.39467 0.14672,0.58278s0.34497,0.49234 0.74127,0.91258c0.54321,0.57664 0.81473,1.1241 0.81473,1.64192c0,0.51809 -0.2202,0.97131 -0.66058,1.35983c-0.4403,0.38853 -1.008,0.5827 -1.70264,0.5827c-0.58234,0 -1.01532,-0.11873 -1.29912,-0.356c-0.28381,-0.23718 -0.42566,-0.52948 -0.42566,-0.87698c0,-0.17131 0.05386,-0.31308 0.16146,-0.42575c0.10752,-0.11249 0.23962,-0.16878 0.39638,-0.16878c0.13689,0 0.25426,0.04536 0.35221,0.1358c0.09785,0.09063 0.14682,0.19706 0.14682,0.31922c0,0.04897 -0.00334,0.11267 -0.00975,0.19083c-0.00326,0.06361 -0.00497,0.11746 -0.00497,0.16146c0,0.16146 0.06831,0.29853 0.20493,0.41102c0.13165,0.11258 0.312,0.16879 0.54113,0.16879c0.26329,0 0.49487,-0.04518 0.69464,-0.13553c0.19987,-0.09035 0.35592,-0.22733 0.46813,-0.41057s0.16824,-0.36521 0.16824,-0.5461c0,-0.17592 -0.05268,-0.35184 -0.15785,-0.52776c-0.10527,-0.17592 -0.34118,-0.46677 -0.70811,-0.87229c-0.50896,-0.56688 -0.76331,-1.11162 -0.76331,-1.6346c0,-0.47888 0.19326,-0.89794 0.57981,-1.25719c0.38653,-0.35925 0.87824,-0.53887 1.4753,-0.53887z" stroke-miterlimit="10" stroke-width="0.25"></path> <path stroke="{font_color}" d="m65.79047,32.35387l0.15405,0.42575c-1.16457,0.91502 -2.1479,1.37239 -2.95034,1.37239c-0.42566,0 -0.73522,-0.15171 -0.92839,-0.45502c-0.19336,-0.30332 -0.28995,-0.68733 -0.28995,-1.15229c0,-0.77308 0.20547,-1.56801 0.61649,-2.38527c0.41102,-0.81707 0.91005,-1.44332 1.49726,-1.87883c0.45981,-0.33765 0.97844,-0.50644 1.5559,-0.50644c0.36205,0 0.636,0.06867 0.82204,0.20547c0.18596,0.13707 0.27893,0.30341 0.27893,0.49903c0,0.15179 -0.04897,0.27531 -0.14682,0.37073c-0.09795,0.09542 -0.23484,0.14312 -0.41103,0.14312c-0.17131,0 -0.3915,-0.07816 -0.66057,-0.23492c-0.27884,-0.16625 -0.51132,-0.24956 -0.69727,-0.24956c-0.23971,0 -0.47824,0.10869 -0.71552,0.32609c-0.23745,0.21749 -0.4637,0.63871 -0.67892,1.26415c-0.21541,0.62543 -0.32293,1.25312 -0.32293,1.88326c0,0.46424 0.09044,0.82322 0.27151,1.0773c0.13219,0.19534 0.31805,0.29311 0.55785,0.29311c0.57248,0.00009 1.25502,-0.33259 2.04771,-0.99805z" stroke-miterlimit="10" stroke-width="0.25"></path> <path stroke="{font_color}" d="m67.48588,32.35387c0.19083,0 0.35103,0.07228 0.48069,0.21648c0.12965,0.14439 0.19444,0.32663 0.19444,0.54683c0,0.31813 -0.0759,0.56761 -0.22752,0.74858c-0.15179,0.18098 -0.34253,0.27161 -0.57248,0.27161c-0.19083,0 -0.35121,-0.06731 -0.48069,-0.20185c-0.12975,-0.13445 -0.19444,-0.30694 -0.19444,-0.51746c0,-0.3082 0.09044,-0.57727 0.27151,-0.80732c0.1321,-0.17122 0.3083,-0.25687 0.52848,-0.25687z" stroke-miterlimit="10" stroke-width="0.25"></path> </g> <g id="lidu_dim" transform="translate(-50,-50)"> <path stroke-width="0.25" stroke-miterlimit="10" d="m44.90718,32.58654l0.22312,0.30289c-0.71206,0.6005 -1.24073,0.99907 -1.58611,1.19561c-0.47824,0.27101 -0.85551,0.40652 -1.13182,0.40652c-0.12746,0 -0.23107,-0.03592 -0.31074,-0.10764c-0.07978,-0.07173 -0.11961,-0.15277 -0.11961,-0.24315c0,-0.09027 0.02914,-0.23911 0.08772,-0.44635l0.27895,-0.97385c-0.63768,0.68596 -1.169,1.15135 -1.59406,1.39606c-0.42516,0.24442 -0.80773,0.36687 -1.14772,0.36687c-0.28171,0 -0.51808,-0.12383 -0.70932,-0.37099c-0.19133,-0.24736 -0.2869,-0.6105 -0.2869,-1.08924c0,-0.75544 0.25904,-1.6238 0.77702,-2.6053c0.51808,-0.9813 1.09454,-1.7076 1.72957,-2.17828c0.63485,-0.47078 1.21543,-0.70627 1.74145,-0.70627c0.11686,0 0.29221,0.01864 0.52604,0.05583c0.24971,-1.03429 0.48874,-1.78884 0.71736,-2.26355c0.22842,-0.47471 0.52327,-0.88446 0.88466,-1.22926c0.36127,-0.3447 0.77436,-0.61129 1.23936,-0.79959c0.4649,-0.18829 0.89928,-0.28239 1.30314,-0.28239c0.21244,0 0.38258,0.05573 0.51013,0.16729c0.12745,0.11166 0.19125,0.25247 0.19125,0.42251c0,0.16475 -0.05868,0.29888 -0.17583,0.40249c-0.11716,0.10371 -0.27699,0.15543 -0.47932,0.15543c-0.13306,0 -0.38081,-0.02659 -0.74297,-0.07977c-0.36217,-0.05299 -0.60983,-0.07968 -0.74297,-0.07968c-0.18642,0 -0.3502,0.05701 -0.49129,0.17102c-0.1412,0.11411 -0.27573,0.35932 -0.40347,0.73581c-0.08469,0.23912 -0.27798,1.00171 -0.5796,2.28778l-1.12751,4.81469c-0.13236,0.56871 -0.19851,0.94607 -0.19851,1.13202c0,0.20222 0.07693,0.30318 0.23109,0.30318c0.09565,0 0.20723,-0.03453 0.33479,-0.10371c0.18064,-0.10077 0.53133,-0.35324 1.05215,-0.757l-0.00004,0.00002l-0.00001,0zm-1.68974,-4.12029c-0.42516,-0.09586 -0.72531,-0.14375 -0.90065,-0.14375c-0.35599,0 -0.70412,0.13973 -1.0441,0.41917c-0.34009,0.27945 -0.6683,0.82088 -0.98435,1.62439c-0.31624,0.80361 -0.47421,1.5034 -0.47421,2.09939c0,0.2715 0.073,0.49365 0.21909,0.66663c0.14611,0.17299 0.31213,0.25943 0.49817,0.25943c0.22313,0 0.47824,-0.09842 0.76514,-0.29544c0.40907,-0.29259 0.73325,-0.64916 0.97237,-1.06951c0.14345,-0.26601 0.33733,-0.91792 0.58186,-1.95574l0.36668,-1.60457l-0.00002,0l0.00002,0z" stroke="{font_color}"></path> <path stroke-width="0.25" stroke-miterlimit="10" d="m46.2063,29.3826l-0.35069,-0.27101c0.53065,-0.5845 1.01496,-1.00024 1.45277,-1.24741c0.43782,-0.24707 0.81059,-0.37051 1.11849,-0.37051c0.16984,0 0.29985,0.03719 0.39001,0.11156c0.09008,0.07447 0.13531,0.17534 0.13531,0.3029c0,0.15415 -0.1722,0.80763 -0.51672,1.96065c-0.56163,1.88617 -0.84245,3.02339 -0.84245,3.41117c0,0.07447 0.01853,0.13688 0.05582,0.18721c0.03709,0.05063 0.07693,0.07575 0.11951,0.07575c0.16994,0 0.6057,-0.32939 1.30706,-0.98837l0.31086,0.30289c-0.72796,0.68547 -1.2593,1.12378 -1.59409,1.31511c-0.33479,0.19124 -0.60844,0.28691 -0.82098,0.28691c-0.18604,0 -0.33351,-0.05857 -0.44233,-0.17534c-0.10901,-0.11676 -0.16347,-0.27896 -0.16347,-0.48619c0,-0.66417 0.39856,-2.28748 1.19558,-4.86963c0.03709,-0.12216 0.05574,-0.23117 0.05574,-0.32684c0,-0.10617 -0.04779,-0.15935 -0.14347,-0.15935c-0.10636,0 -0.22715,0.04258 -0.36264,0.12756s-0.43684,0.35598 -0.90439,0.81293l0.00005,0.00001l0.00004,0l-0.00001,0zm3.13231,-5.27624c0.16457,0 0.30006,0.05456 0.40643,0.16337c0.10627,0.10891 0.15945,0.24844 0.15945,0.41848c0,0.23392 -0.08105,0.43968 -0.24313,0.61767c-0.1621,0.17809 -0.34401,0.26708 -0.54594,0.26708c-0.15945,0 -0.2923,-0.05583 -0.39857,-0.16739c-0.10626,-0.11166 -0.15945,-0.25767 -0.15945,-0.4384c0,-0.23912 0.07703,-0.44233 0.23119,-0.60973c0.15414,-0.16749 0.33752,-0.25109 0.55006,-0.25109l-0.00002,0.00001l-0.00003,0l0.00002,0l-0.00001,0z" stroke="{font_color}"></path> <path stroke-width="0.25" stroke-miterlimit="10" d="m50.07982,29.36661l-0.23923,-0.31879c0.52603,-0.52603 1.02596,-0.9138 1.49987,-1.16362c0.47394,-0.24971 0.84727,-0.37453 1.11966,-0.37453c0.11216,0 0.19614,0.02384 0.25207,0.07163c0.05574,0.04788 0.08379,0.11441 0.08379,0.19928c0,0.10637 -0.04258,0.31085 -0.12756,0.61375c-0.12226,0.44635 -0.20743,0.79969 -0.25532,1.06c1.27175,-1.29637 2.24423,-1.94466 2.91725,-1.94466c0.17476,0 0.30729,0.04779 0.39748,0.14345c0.09007,0.09567 0.13512,0.24717 0.13512,0.4543c0,0.22313 -0.07957,0.60305 -0.23862,1.13977c0.60609,-0.63229 1.13251,-1.08001 1.57925,-1.34307s0.79506,-0.39455 1.04488,-0.39455c0.2233,0 0.3962,0.06368 0.51846,0.19124s0.18339,0.32419 0.18339,0.58981c0,0.15944 -0.02659,0.34813 -0.07977,0.56596c-0.05309,0.21792 -0.24707,0.882 -0.58186,1.99244c-0.41976,1.37624 -0.62965,2.19722 -0.62965,2.46283c0,0.18073 0.07436,0.27101 0.22313,0.27101c0.10087,0 0.19928,-0.0318 0.29494,-0.09568c0.3134,-0.22312 0.63494,-0.49933 0.96432,-0.82882l0.26308,0.28691c-0.11157,0.09047 -0.32146,0.27631 -0.62965,0.55801c-0.42515,0.38247 -0.71735,0.62169 -0.87671,0.71736c-0.3083,0.18054 -0.56862,0.27101 -0.78114,0.27101c-0.15936,0 -0.30023,-0.0785 -0.4224,-0.2351c-0.12226,-0.1567 -0.18328,-0.37325 -0.18328,-0.64956c0,-0.25512 0.03708,-0.55399 0.11156,-0.89672c0.07437,-0.34264 0.2922,-1.1118 0.65359,-2.30741c0.271,-0.8978 0.4065,-1.44257 0.4065,-1.63381c0,-0.18064 -0.07977,-0.27101 -0.23911,-0.27101c-0.13287,0 -0.31085,0.06652 -0.53397,0.19919c-0.45705,0.27631 -0.83973,0.61375 -1.14772,1.01221c-0.21254,0.27631 -0.39857,0.71471 -0.55793,1.31501c-0.35608,1.31247 -0.62167,2.38316 -0.79702,3.21199l-1.13173,0l1.18754,-4.86973c0.08489,-0.35069 0.12757,-0.55252 0.12757,-0.6057c0,-0.08497 -0.02129,-0.15003 -0.06358,-0.19526c-0.04249,-0.04514 -0.10352,-0.0677 -0.18311,-0.0677c-0.14315,0 -0.36589,0.11156 -0.66839,0.33469c-0.52526,0.37737 -0.90312,0.74258 -1.13391,1.09591c-0.23087,0.35353 -0.42828,0.89132 -0.59264,1.61399l-0.61275,2.6939l-1.14516,0l0.90064,-3.80178c0.26562,-1.09974 0.39857,-1.69759 0.39857,-1.79326c0,-0.12216 -0.04779,-0.18328 -0.14345,-0.18328c-0.20705,-0.0002 -0.62946,0.3027 -1.26702,0.9084l0.00001,-0.00001l0.00001,0z" stroke="{font_color}"></path> <path stroke-width="0.25" stroke-miterlimit="10" d="m60.65614,32.50686c0.20723,0 0.38121,0.0785 0.52201,0.2351c0.1408,0.1568 0.21116,0.3547 0.21116,0.59383c0,0.34548 -0.08242,0.61639 -0.24709,0.81293c-0.16483,0.19654 -0.37196,0.29495 -0.6217,0.29495c-0.20723,0 -0.38139,-0.0731 -0.522,-0.2192c-0.14092,-0.146 -0.21117,-0.33332 -0.21117,-0.56194c0,-0.33469 0.09822,-0.62689 0.29485,-0.87671c0.14354,-0.18594 0.33487,-0.27896 0.57391,-0.27896l0.00002,0l0.00001,0z" stroke="{font_color}"></path> </g> <g id="lidu_sf" transform="translate(-50,-50)"> <path stroke="{font_color}" d="m50.06665,24.46122c0.43575,0 0.7724,0.08455 1.00994,0.25345c0.23745,0.16891 0.35618,0.3636 0.35618,0.58395c0,0.13221 -0.05027,0.24722 -0.15055,0.34515c-0.10038,0.09802 -0.22163,0.14694 -0.36359,0.14694c-0.09305,0 -0.17389,-0.0208 -0.24234,-0.06239c-0.06863,-0.0416 -0.16656,-0.14568 -0.29388,-0.31214c-0.23998,-0.31829 -0.47743,-0.47744 -0.71244,-0.47744c-0.20083,0 -0.37824,0.07713 -0.5325,0.23112c-0.15427,0.15408 -0.2314,0.34604 -0.2314,0.57581c0,0.20065 0.04892,0.39497 0.14694,0.58323c0.09793,0.18826 0.34524,0.49272 0.74183,0.91318c0.54353,0.57718 0.81525,1.12496 0.81525,1.64326c0,0.51849 -0.22036,0.97205 -0.66109,1.36087c-0.44072,0.38882 -1.00876,0.58313 -1.70403,0.58313c-0.58278,0 -1.01609,-0.11881 -1.30001,-0.35627c-0.28402,-0.23736 -0.42598,-0.52988 -0.42598,-0.87765c0,-0.17144 0.0538,-0.31332 0.16158,-0.42607c0.10761,-0.11258 0.2399,-0.16891 0.3966,-0.16891c0.13708,0 0.25454,0.04539 0.35256,0.13591c0.09792,0.0907 0.14694,0.19722 0.14694,0.31947c0,0.04901 -0.00335,0.11276 -0.00968,0.19097c-0.00334,0.06367 -0.00497,0.11756 -0.00497,0.1616c0,0.16158 0.06827,0.29875 0.20499,0.41133c0.13175,0.11267 0.31232,0.16891 0.54155,0.16891c0.26349,0 0.49525,-0.04521 0.69527,-0.13563c0.20002,-0.09042 0.35617,-0.22751 0.46848,-0.41088s0.16837,-0.36549 0.16837,-0.54652c0,-0.17605 -0.05272,-0.3521 -0.15788,-0.52816c-0.10535,-0.17605 -0.34153,-0.46712 -0.70883,-0.87295c-0.50927,-0.56731 -0.7639,-1.11247 -0.7639,-1.63585c0,-0.47924 0.19341,-0.89862 0.58025,-1.25815c0.38674,-0.35952 0.87891,-0.53928 1.47634,-0.53928z" stroke-miterlimit="10" stroke-width="0.25"></path> <path stroke="{font_color}" d="m51.90288,24.93866l1.75547,0c0.28881,-1.22406 0.6194,-2.13481 0.99158,-2.73232c0.37209,-0.59733 0.85685,-1.06871 1.45428,-1.41395c0.59733,-0.34514 1.16049,-0.51785 1.68929,-0.51785c0.29867,0 0.52391,0.05869 0.67583,0.17624c0.15173,0.11755 0.22768,0.25716 0.22768,0.41865c0,0.14695 -0.05154,0.26937 -0.15444,0.36731c-0.1031,0.09802 -0.23792,0.14694 -0.40456,0.14694c-0.17171,0 -0.49543,-0.05136 -0.97105,-0.15427c-0.23546,-0.04892 -0.41938,-0.07351 -0.55167,-0.07351c-0.32372,0 -0.6156,0.19956 -0.87539,0.59861c-0.25996,0.39921 -0.46839,0.93904 -0.62528,1.61956l-0.36892,1.5645l1.94609,0l-0.11755,0.52156l-1.97168,0l-1.14982,4.68601c-0.35753,1.42498 -0.9291,2.50463 -1.71505,3.23914c-0.78587,0.73442 -1.63902,1.10172 -2.5597,1.10172c-0.30852,0 -0.54227,-0.06004 -0.70141,-0.17994c-0.15906,-0.11999 -0.23872,-0.2681 -0.23872,-0.44433c0,-0.15183 0.05507,-0.27309 0.16529,-0.3636c0.11023,-0.09069 0.26811,-0.1359 0.47373,-0.1359c0.10281,0 0.25463,0.0122 0.45537,0.03671c0.34289,0.04404 0.67094,0.06601 0.98426,0.06601c0.48476,0 0.83731,-0.11384 1.05768,-0.34143c0.22036,-0.22778 0.44072,-0.78479 0.66109,-1.67094l1.49108,-5.99343l-1.75547,0l0.13202,-0.52147z" stroke-miterlimit="10" stroke-width="0.25"></path> </g> <g id="lidu_fp" transform="translate(-50,-50)"> <path stroke="{font_color}" stroke-width="0.25" stroke-miterlimit="10" d="m46.21766,24.86324l1.8393,0c0.30261,-1.28253 0.64898,-2.23676 1.03894,-2.86282c0.38985,-0.62586 0.89777,-1.11975 1.52374,-1.48147c0.62586,-0.36163 1.2159,-0.54258 1.77005,-0.54258c0.31294,0 0.54892,0.06148 0.708,0.18466c0.15898,0.12316 0.23857,0.26944 0.23857,0.43865c0,0.15395 -0.05402,0.28224 -0.16183,0.38483c-0.10799,0.1027 -0.24925,0.15395 -0.42388,0.15395c-0.1799,0 -0.51909,-0.05381 -1.01743,-0.16163c-0.2467,-0.05125 -0.4394,-0.07702 -0.57801,-0.07702c-0.33917,0 -0.645,0.20909 -0.9172,0.62718c-0.27238,0.41829 -0.49076,0.98389 -0.65514,1.69691l-0.38653,1.63922l2.03901,0l-0.12315,0.54647l-2.06584,0l-1.20482,4.90979c-0.37461,1.49304 -0.97348,2.62424 -1.79696,3.39383c-0.82341,0.76949 -1.7173,1.15433 -2.68193,1.15433c-0.32327,0 -0.56818,-0.0629 -0.73493,-0.18853c-0.16665,-0.12574 -0.25011,-0.28092 -0.25011,-0.46556c0,-0.15906 0.0577,-0.28612 0.17319,-0.38095c0.11549,-0.09502 0.28093,-0.1424 0.49635,-0.1424c0.10773,0 0.2668,0.01279 0.47712,0.03847c0.35927,0.04615 0.70298,0.06916 1.03128,0.06916c0.50789,0 0.8773,-0.11929 1.10818,-0.35774c0.2309,-0.23866 0.46178,-0.82227 0.69266,-1.75072l1.56229,-6.27967l-1.83932,0l0.13843,-0.54638l-0.00002,0.00002z"></path> <path stroke="{font_color}" stroke-width="0.25" stroke-miterlimit="10" d="m51.11209,26.27157l-0.30014,-0.30791c0.4668,-0.55907 0.93121,-0.97214 1.39298,-1.23894c0.46177,-0.2667 0.86197,-0.40019 1.20047,-0.40019c0.12818,0 0.22956,0.03212 0.30393,0.09616c0.07438,0.06425 0.11161,0.15774 0.11161,0.28092c0,0.14884 -0.01666,0.30147 -0.05001,0.4579c-0.03346,0.1565 -0.13728,0.52713 -0.31171,1.11207c0.78494,-0.78503 1.32098,-1.26981 1.60843,-1.45456c0.48213,-0.31292 0.92353,-0.46945 1.32363,-0.46945c0.26167,0 0.48223,0.12317 0.66187,0.3694c0.17953,0.24623 0.26936,0.61819 0.26936,1.11577c0,1.24168 -0.38712,2.4216 -1.16117,3.54001c-0.77412,1.11861 -1.6304,1.67769 -2.56854,1.67769c-0.36911,0 -0.73821,-0.10005 -1.10734,-0.30015l-0.65759,2.53964c-0.04112,0.15387 -0.06158,0.2795 -0.06158,0.37699c0,0.18976 0.0718,0.32573 0.21544,0.40796c0.22057,0.12818 0.68489,0.23344 1.39299,0.3155l-0.10005,0.38483c-0.82605,-0.06668 -1.47503,-0.10005 -1.94704,-0.10005c-0.48745,0 -1.11852,0.03336 -1.89311,0.10005l0.10004,-0.38483c0.38987,-0.04112 0.67333,-0.14885 0.85041,-0.32316c0.17698,-0.17453 0.31937,-0.48481 0.42709,-0.93121l1.39298,-5.84101c0.26167,-1.08753 0.39251,-1.69303 0.39251,-1.8161c0,-0.1333 -0.06422,-0.2 -0.19241,-0.2c-0.22597,0 -0.65694,0.33084 -1.29304,0.99269l0,-0.00001zm1.55907,3.63231c0.40475,0.4054 0.81979,0.60805 1.24521,0.60805c0.61477,0 1.15414,-0.47968 1.61781,-1.43913c0.46367,-0.95926 0.69558,-1.89568 0.69558,-2.8089c0,-0.29237 -0.06528,-0.51425 -0.19582,-0.66565c-0.13055,-0.15131 -0.30593,-0.227 -0.52601,-0.227c-0.24577,0 -0.52222,0.12051 -0.82928,0.36163c-0.47616,0.37452 -0.83969,0.74647 -1.09047,1.11587c-0.17916,0.26679 -0.34806,0.72847 -0.50686,1.38522l-0.41014,1.66992l-0.00002,0z"></path> </g> <g id="lidu_sfp" transform="translate(-50,-50)"> <path stroke="{font_color}" d="m47.37173,25.69467c0.39953,0 0.70819,0.07752 0.92598,0.23239c0.21772,0.15487 0.32657,0.33337 0.32657,0.53541c0,0.12121 -0.0461,0.22667 -0.13804,0.31645c-0.09203,0.08988 -0.20321,0.13472 -0.33337,0.13472c-0.08532,0 -0.15944,-0.01907 -0.22219,-0.0572c-0.06292,-0.03813 -0.15272,-0.13356 -0.26944,-0.28619c-0.22004,-0.29183 -0.43775,-0.43775 -0.65322,-0.43775c-0.18414,0 -0.3468,0.07072 -0.48823,0.2119c-0.14144,0.14127 -0.21216,0.31728 -0.21216,0.52794c0,0.18398 0.04485,0.36214 0.13472,0.53475c0.08979,0.17261 0.31654,0.45176 0.68016,0.83727c0.49835,0.5292 0.74749,1.03144 0.74749,1.50666c0,0.47539 -0.20205,0.89124 -0.60613,1.24774c-0.40408,0.35649 -0.9249,0.53466 -1.56237,0.53466c-0.53433,0 -0.93162,-0.10894 -1.19194,-0.32665c-0.26041,-0.21763 -0.39057,-0.48583 -0.39057,-0.80469c0,-0.15719 0.04933,-0.28727 0.14816,-0.39065c0.09866,-0.10322 0.21995,-0.15487 0.36362,-0.15487c0.12568,0 0.23338,0.04162 0.32325,0.12461c0.08979,0.08315 0.13472,0.18081 0.13472,0.2929c0,0.04494 -0.00306,0.1034 -0.00887,0.1751c-0.00306,0.05837 -0.00456,0.10778 -0.00456,0.14816c0,0.14816 0.0626,0.27393 0.18795,0.37715c0.12079,0.1033 0.28636,0.15487 0.49652,0.15487c0.24159,0 0.45407,-0.04145 0.63747,-0.12436c0.18338,-0.08291 0.32656,-0.2086 0.42953,-0.37673s0.15437,-0.3351 0.15437,-0.50108c0,-0.16142 -0.04833,-0.32284 -0.14475,-0.48426c-0.09659,-0.16142 -0.31314,-0.42829 -0.64991,-0.80038c-0.46693,-0.52015 -0.70039,-1.01999 -0.70039,-1.49985c0,-0.43941 0.17733,-0.82392 0.53201,-1.15356c0.3546,-0.32964 0.80585,-0.49446 1.35361,-0.49446z" stroke-miterlimit="10" stroke-width="0.25"></path> <path stroke="{font_color}" d="m49.05531,26.13242l1.60954,0c0.2648,-1.1223 0.56791,-1.95734 0.90915,-2.50518c0.34116,-0.54768 0.78562,-0.97987 1.33338,-1.2964c0.54768,-0.31646 1.06402,-0.4748 1.54885,-0.4748c0.27384,0 0.48036,0.0538 0.61965,0.16158c0.13911,0.10778 0.20875,0.23578 0.20875,0.38385c0,0.13472 -0.04726,0.24697 -0.14161,0.33677c-0.09451,0.08987 -0.21813,0.13472 -0.37092,0.13472c-0.15745,0 -0.45425,-0.04709 -0.89034,-0.14143c-0.21589,-0.04486 -0.38451,-0.0674 -0.50581,-0.0674c-0.2968,0 -0.56443,0.18297 -0.80261,0.54883c-0.23836,0.36603 -0.42945,0.86098 -0.5733,1.48493l-0.33825,1.43445l1.78431,0l-0.10778,0.4782l-1.80777,0l-1.05424,4.29644c-0.32781,1.30653 -0.85186,2.29643 -1.57248,2.96987c-0.72054,0.67337 -1.50276,1.01013 -2.34691,1.01013c-0.28288,0 -0.49719,-0.05505 -0.6431,-0.16499c-0.14583,-0.11001 -0.21887,-0.24581 -0.21887,-0.40741c0,-0.13919 0.05049,-0.25036 0.15155,-0.33336c0.10107,-0.08315 0.24582,-0.12461 0.43435,-0.12461c0.09426,0 0.23347,0.0112 0.41751,0.03366c0.31438,0.04038 0.61517,0.06052 0.90244,0.06052c0.44446,0 0.76771,-0.10438 0.96975,-0.31305c0.20204,-0.20884 0.40409,-0.71955 0.60613,-1.53202l1.36712,-5.49519l-1.60954,0l0.12104,-0.47812z" stroke-miterlimit="10" stroke-width="0.25"></path> <path stroke="{font_color}" d="m53.33833,27.36483l-0.26265,-0.26945c0.40847,-0.48924 0.8148,-0.8507 1.21889,-1.08416c0.40408,-0.23339 0.75428,-0.35021 1.05059,-0.35021c0.11217,0 0.20088,0.02811 0.26597,0.08415c0.06499,0.05621 0.09766,0.13804 0.09766,0.24581c0,0.13025 -0.01458,0.26381 -0.04369,0.40069c-0.02935,0.13696 -0.12022,0.46129 -0.27276,0.97316c0.68688,-0.68697 1.15596,-1.1112 1.4075,-1.27286c0.42199,-0.27385 0.80809,-0.41081 1.15837,-0.41081c0.22899,0 0.42191,0.10778 0.5791,0.32325c0.1571,0.21547 0.2357,0.54097 0.2357,0.97639c0,1.08657 -0.33867,2.11908 -1.01618,3.09779c-0.67743,0.97888 -1.42673,1.4681 -2.24768,1.4681c-0.32299,0 -0.64592,-0.08755 -0.96901,-0.26264l-0.57545,2.22238c-0.03598,0.13465 -0.05381,0.24458 -0.05381,0.32989c0,0.16606 0.06284,0.28503 0.18853,0.35699c0.193,0.11217 0.59933,0.20428 1.21889,0.27608l-0.08755,0.33677c-0.72294,-0.05836 -1.29077,-0.08755 -1.70381,-0.08755c-0.42655,0 -0.97879,0.02919 -1.65663,0.08755l0.08755,-0.33677c0.34116,-0.03598 0.58922,-0.13024 0.74417,-0.28279c0.15487,-0.1527 0.27948,-0.42422 0.37374,-0.81488l1.21888,-5.11134c0.22899,-0.95168 0.34348,-1.48154 0.34348,-1.58923c0,-0.11665 -0.05621,-0.17501 -0.1683,-0.17501c-0.19773,0 -0.57487,0.28951 -1.1315,0.86869zm1.36438,3.17854c0.35418,0.35476 0.7174,0.53209 1.08965,0.53209c0.53798,0 1.00996,-0.41976 1.41562,-1.25935c0.40583,-0.83942 0.60878,-1.65886 0.60878,-2.458c0,-0.25585 -0.05712,-0.45001 -0.17137,-0.58249c-0.11433,-0.13241 -0.2677,-0.19864 -0.46029,-0.19864c-0.21506,0 -0.45698,0.10545 -0.72577,0.31645c-0.4166,0.32773 -0.73471,0.65322 -0.95425,0.97648c-0.15686,0.23346 -0.30468,0.63746 -0.44355,1.21216l-0.35883,1.46131z" stroke-miterlimit="10" stroke-width="0.25"></path> </g> <g id="lidu_atempo" transform="translate(-50,-50)"> <path stroke-width="0.25" stroke-miterlimit="10" d="m47.02225,27.35223l0.53418,-0.11334l-0.60724,2.04852c-0.24292,0.81518 -0.47229,1.75426 -0.68809,2.81763c-0.11882,0.57763 -0.17813,0.95004 -0.17813,1.11731c0,0.16746 0.06749,0.25109 0.20245,0.25109c0.08632,0 0.22398,-0.05662 0.41297,-0.17005c0.33463,-0.19966 0.65589,-0.44796 0.9636,-0.7449l0.25907,0.31578c-0.61533,0.56149 -1.00946,0.9015 -1.1821,1.02012c-0.34549,0.23763 -0.67484,0.41297 -0.98783,0.5263c-0.20524,0.07556 -0.4049,0.11333 -0.59917,0.11333c-0.14045,0 -0.24571,-0.03239 -0.31579,-0.09719c-0.07017,-0.06469 -0.10526,-0.15919 -0.10526,-0.28339c0,-0.08104 0.02153,-0.19158 0.06479,-0.33193l0.32386,-1.10126c-0.46431,0.55601 -1.01753,1.03378 -1.65987,1.43319c-0.39413,0.2482 -0.75577,0.3724 -1.08501,0.3724c-0.3131,0 -0.55333,-0.11065 -0.72058,-0.33192c-0.22667,-0.29684 -0.34011,-0.6855 -0.34011,-1.16595c0,-0.57206 0.15241,-1.2091 0.45743,-1.91085c0.30492,-0.70164 0.71381,-1.33859 1.22666,-1.91075c0.51275,-0.57206 1.05262,-0.99311 1.61939,-1.26314c0.43719,-0.20504 0.99859,-0.30762 1.68419,-0.30762c0.17265,0 0.34818,0.01077 0.52631,0.0323l0.19427,-0.31568l0.00001,0zm-1.00407,1.23882c-0.29146,-0.05941 -0.53717,-0.08912 -0.73683,-0.08912c-0.48584,0 -0.90958,0.13357 -1.27121,0.40081c-0.36164,0.26724 -0.69776,0.7477 -1.00806,1.44127c-0.3105,0.69357 -0.4656,1.38585 -0.4656,2.07672c0,0.36712 0.062,0.63157 0.1863,0.79345c0.1241,0.16198 0.28608,0.24302 0.48584,0.24302c0.3724,0 0.77182,-0.20115 1.19835,-0.60326c0.42633,-0.40211 0.73942,-0.98103 0.93918,-1.7368l0.67204,-2.52608l-0.00001,-0.00001z" fill="{font_color}" stroke="{font_color}"></path> <path stroke-width="0.25" stroke-miterlimit="10" d="m54.37413,26.24299l1.28547,-0.49311l-0.58173,2.26631l1.67661,0l-0.12959,0.57495l-1.67791,0l-0.70632,2.71338c-0.22418,0.81458 -0.33633,1.38095 -0.33633,1.69933c0,0.14573 0.03101,0.251 0.09311,0.31569c0.062,0.06479 0.14703,0.09728 0.25508,0.09728c0.16726,0 0.42373,-0.09988 0.76923,-0.29963c0.45344,-0.26435 0.88525,-0.56399 1.29544,-0.89881l0.30771,0.37239c-1.1821,0.89074 -1.97296,1.43599 -2.37237,1.63554c-0.39952,0.19966 -0.72059,0.29964 -0.9635,0.29964c-0.19976,0 -0.35765,-0.07287 -0.47368,-0.21859c-0.11613,-0.14573 -0.17414,-0.38317 -0.17414,-0.7124c0,-0.38866 0.10247,-0.98234 0.30771,-1.78136l0.82426,-3.22244l-1.31168,0l0.14573,-0.57495l1.31308,0l0.45385,-1.7732l-0.00003,-0.00003z" stroke="{font_color}"></path> <path stroke-width="0.25" stroke-miterlimit="10" d="m61.65322,32.26692l0.26724,0.35625c-1.32265,1.25776 -2.45611,1.88663 -3.40067,1.88663c-0.38337,0 -0.67603,-0.12959 -0.87848,-0.38865c-0.20245,-0.25917 -0.30373,-0.67472 -0.30373,-1.24689c0,-1.15508 0.35088,-2.30478 1.05262,-3.4492c0.78807,-1.30082 1.72994,-1.95133 2.82591,-1.95133c0.38317,0 0.67603,0.09589 0.87848,0.28748c0.20245,0.19168 0.30372,0.45484 0.30372,0.78946c0,0.35097 -0.1215,0.69626 -0.36433,1.03627c-0.24302,0.34011 -0.67752,0.69367 -1.30361,1.06069c-0.31319,0.17813 -0.98244,0.49939 -2.00804,0.9635c-0.04855,0.29147 -0.07287,0.56957 -0.07287,0.83391c0,0.38337 0.06071,0.65051 0.18221,0.80162c0.12142,0.15121 0.29815,0.22667 0.5303,0.22667c0.22129,0 0.46411,-0.062 0.72876,-0.1862c0.35606,-0.16716 0.87688,-0.50737 1.56248,-1.02021l0.00001,0zm-2.83389,-1.17391c0.869,-0.38866 1.5222,-0.80691 1.9594,-1.25497c0.29685,-0.31299 0.44537,-0.62349 0.44537,-0.93111c0,-0.23205 -0.06071,-0.41706 -0.18222,-0.55462c-0.12141,-0.13766 -0.2793,-0.20644 -0.47368,-0.20644c-0.19975,0 -0.39403,0.07566 -0.58292,0.22668c-0.25388,0.19976 -0.46709,0.50198 -0.63975,0.90688c-0.24829,0.59369 -0.42373,1.19815 -0.5262,1.81357l0,0.00001z" stroke="{font_color}"></path> <path stroke-width="0.25" stroke-miterlimit="10" d="m63.26445,29.3521l-0.24302,-0.32386c0.53438,-0.53438 1.04225,-0.92832 1.5237,-1.1821c0.48155,-0.25368 0.86073,-0.38048 1.13754,-0.38048c0.11383,0 0.19926,0.02422 0.25597,0.07277c0.05663,0.04864 0.08514,0.11623 0.08514,0.20245c0,0.10806 -0.04337,0.31578 -0.12959,0.6235c-0.1242,0.45344 -0.21072,0.81239 -0.25936,1.07684c1.29195,-1.31697 2.27987,-1.97555 2.96347,-1.97555c0.17763,0 0.3123,0.04855 0.4039,0.14573c0.09141,0.09719 0.13726,0.25109 0.13726,0.46151c0,0.22668 -0.08093,0.61263 -0.24242,1.15788c0.61572,-0.64234 1.15051,-1.09717 1.60425,-1.36441c0.45384,-0.26724 0.8077,-0.40081 1.06158,-0.40081c0.22677,0 0.4024,0.06469 0.52661,0.19428c0.1243,0.12958 0.1864,0.32934 0.1864,0.59917c0,0.16198 -0.02702,0.35366 -0.08104,0.57495c-0.05403,0.22139 -0.2511,0.89602 -0.5911,2.0241c-0.42643,1.39811 -0.63965,2.23211 -0.63965,2.50194c0,0.18361 0.07556,0.27532 0.22668,0.27532c0.10247,0 0.20235,-0.0323 0.29955,-0.09719c0.31847,-0.22667 0.64503,-0.50727 0.97974,-0.842l0.26724,0.29147c-0.11343,0.09191 -0.32664,0.28069 -0.63964,0.56688c-0.43191,0.38855 -0.72875,0.63157 -0.89074,0.72875c-0.3131,0.1834 -0.57764,0.27531 -0.79344,0.27531c-0.16199,0 -0.30511,-0.07974 -0.42921,-0.23883c-0.12421,-0.15918 -0.18621,-0.37918 -0.18621,-0.65987c0,-0.25917 0.03778,-0.56279 0.11343,-0.91097c0.07556,-0.34808 0.29684,-1.12946 0.66386,-2.34405c0.27531,-0.91207 0.41296,-1.46549 0.41296,-1.65977c0,-0.18351 -0.08093,-0.27531 -0.24292,-0.27531c-0.13496,0 -0.31577,0.06758 -0.54245,0.20235c-0.46431,0.28069 -0.85297,0.6235 -1.16585,1.02829c-0.21601,0.2807 -0.40491,0.72607 -0.56689,1.3359c-0.36173,1.33331 -0.63157,2.42101 -0.80969,3.263l-1.1497,0l1.20652,-4.94708c0.08623,-0.35625 0.12949,-0.5613 0.12949,-0.61532c0,-0.08632 -0.02164,-0.15241 -0.0646,-0.19836c-0.04316,-0.04585 -0.10516,-0.06878 -0.1859,-0.06878c-0.14555,0 -0.37181,0.11333 -0.67902,0.34001c-0.53358,0.38337 -0.91754,0.75438 -1.15199,1.11332c-0.23444,0.35915 -0.435,0.90549 -0.60207,1.63963l-0.62239,2.73669l-1.16347,0l0.91496,-3.86217c0.26992,-1.11721 0.40489,-1.72456 0.40489,-1.82174c0,-0.1241 -0.04855,-0.1862 -0.14573,-0.1862c-0.21023,-0.0002 -0.63934,0.30751 -1.28706,0.92283l0.00002,-0.00002z" stroke="{font_color}"></path> <path stroke-width="0.25" stroke-miterlimit="10" d="m73.4502,29.49793l-0.3158,-0.32396c0.49112,-0.58821 0.97965,-1.02281 1.46549,-1.30351c0.48584,-0.2806 0.90688,-0.42105 1.26315,-0.42105c0.13486,0 0.24152,0.03379 0.31976,0.10117c0.07816,0.06758 0.11742,0.16597 0.11742,0.29555c0,0.1566 -0.01754,0.31718 -0.05254,0.48175c-0.03528,0.16467 -0.14453,0.55462 -0.32793,1.17004c0.82584,-0.82594 1.38982,-1.336 1.69225,-1.53038c0.50737,-0.32924 0.97157,-0.49391 1.39272,-0.49391c0.27531,0 0.50726,0.12959 0.69626,0.38865c0.1889,0.25907 0.28339,0.65041 0.28339,1.17393c0,1.3064 -0.4072,2.54781 -1.22178,3.72452c-0.81448,1.17691 -1.71539,1.76512 -2.70242,1.76512c-0.38835,0 -0.7766,-0.10526 -1.16505,-0.31578l-0.69188,2.67199c-0.04326,0.16188 -0.06469,0.29405 -0.06469,0.39662c0,0.19966 0.07555,0.3427 0.22667,0.42922c0.23196,0.13486 0.72059,0.24561 1.46548,0.33193l-0.10526,0.4049c-0.86921,-0.07018 -1.55191,-0.10526 -2.04852,-0.10526c-0.51295,0 -1.17691,0.03509 -1.99179,0.10526l0.10526,-0.4049c0.41019,-0.04326 0.70842,-0.1566 0.89472,-0.34001c0.18621,-0.18361 0.33603,-0.51006 0.44946,-0.97976l1.46549,-6.14541c0.27532,-1.14422 0.41297,-1.78127 0.41297,-1.91076c0,-0.14025 -0.06758,-0.21042 -0.20235,-0.21042c-0.23784,0 -0.69127,0.34808 -1.36053,1.04444l0.00002,0.00002zm1.64043,3.82161c0.42583,0.42653 0.86253,0.63974 1.31009,0.63974c0.64682,0 1.21429,-0.50467 1.70203,-1.51413c0.48794,-1.00924 0.73195,-1.99448 0.73195,-2.95529c0,-0.30761 -0.06868,-0.54106 -0.20604,-0.70034c-0.13746,-0.15919 -0.32186,-0.23883 -0.55342,-0.23883c-0.25857,0 -0.54944,0.12679 -0.8726,0.38048c-0.50089,0.39403 -0.88335,0.78538 -1.14731,1.17402c-0.18859,0.2807 -0.36633,0.76643 -0.53329,1.45742l-0.43141,1.75694l0,-0.00001z" stroke="{font_color}"></path> <path stroke-width="0.25" stroke-miterlimit="10" d="m84.63993,27.48988c0.529,0 0.96889,0.21053 1.31976,0.63157c0.35088,0.42115 0.52631,1.00686 0.52631,1.75705c0,1.19825 -0.42115,2.27389 -1.26315,3.22652c-0.84209,0.95284 -1.73273,1.4291 -2.672,1.4291c-0.57764,0 -1.04324,-0.18899 -1.39671,-0.56677c-0.35356,-0.37779 -0.5303,-0.89333 -0.5303,-1.54653c0,-1.13355 0.32386,-2.18058 0.97158,-3.14149c0.81517,-1.19297 1.83001,-1.78945 3.04451,-1.78945l0.00001,0zm-0.68819,0.60725c-0.45892,0 -0.90279,0.32784 -1.33192,0.98373c-0.42912,0.65579 -0.64363,1.56138 -0.64363,2.71637c0,0.70173 0.13217,1.25506 0.39662,1.65986c0.19437,0.29695 0.45345,0.44527 0.77731,0.44527c0.45344,0 0.86631,-0.2805 1.23891,-0.842c0.47497,-0.72875 0.71241,-1.63284 0.71241,-2.71237c0,-0.80969 -0.10934,-1.38724 -0.32785,-1.73273c-0.2186,-0.34529 -0.49261,-0.51813 -0.82185,-0.51813z" stroke="{font_color}"></path> </g> <g id="lidu_rit" transform="translate(-50,-50)"> <path stroke="{font_color}" stroke-width="0.25" stroke-miterlimit="10" d="m43.01623,35.0269l-1.64985,0l0.7751,-2.97866c0.37651,-1.46158 0.70475,-2.84929 0.98544,-4.16337c0.06638,-0.32471 0.09966,-0.52768 0.09966,-0.60906c0,-0.17707 -0.08125,-0.26568 -0.24361,-0.26568c-0.11082,0 -0.28067,0.0758 -0.50942,0.22696c-0.22887,0.15145 -0.64218,0.52591 -1.2402,1.12392l-0.34324,-0.38755c0.7083,-0.76024 1.41498,-1.33059 2.11959,-1.71077s1.24511,-0.57035 1.62162,-0.57035c0.13289,0 0.23786,0.03149 0.3153,0.09406c0.07757,0.06285 0.11629,0.14218 0.11629,0.23801c0,0.09665 -0.04853,0.35252 -0.14559,0.76788l-0.48174,1.99199c0.74701,-1.17818 1.59013,-2.18597 2.52961,-3.02337c0.45122,-0.40009 0.8284,-0.60007 1.13171,-0.60007c0.22179,0 0.40676,0.07184 0.55467,0.21579c0.14791,0.14408 0.22192,0.31203 0.22192,0.50383c0,0.19929 -0.07197,0.36928 -0.21578,0.50927c-0.14395,0.14027 -0.50342,0.30643 -1.07881,0.49823c-0.5458,0.18471 -0.99033,0.40622 -1.33316,0.66482c-0.34311,0.25846 -0.71922,0.65337 -1.12857,1.185s-0.69549,0.99484 -0.85825,1.38974s-0.41059,1.31204 -0.74347,2.75114l-0.49918,2.14822l-0.00002,0.00001z"></path> <path stroke="{font_color}" fill="{font_color}" stroke-width="0.25" stroke-miterlimit="10" d="m48.12074,28.28359l-0.4872,-0.37651c0.73721,-0.81204 1.41005,-1.38961 2.0183,-1.73299c0.60825,-0.34324 1.12611,-0.51473 1.55388,-0.51473c0.23596,0 0.41658,0.05166 0.54186,0.15499c0.12514,0.10346 0.18798,0.2436 0.18798,0.42081c0,0.21416 -0.23924,1.12202 -0.71784,2.72388c-0.78027,2.62041 -1.17041,4.20032 -1.17041,4.73905c0,0.10347 0.02576,0.19016 0.07757,0.26009c0.05151,0.07034 0.10687,0.10524 0.16602,0.10524c0.23611,0 0.84149,-0.45761 1.81588,-1.37312l0.43185,0.42081c-1.01134,0.95231 -1.74948,1.56124 -2.21459,1.82705c-0.46511,0.26568 -0.84531,0.39859 -1.14057,0.39859c-0.25845,0 -0.46333,-0.08138 -0.6145,-0.24359c-0.15145,-0.16222 -0.2271,-0.38755 -0.2271,-0.67545c0,-0.92272 0.55372,-3.17795 1.66102,-6.76525c0.05153,-0.16971 0.07742,-0.32116 0.07742,-0.45407c0,-0.1475 -0.06638,-0.22137 -0.19929,-0.22137c-0.14777,0 -0.31557,0.05916 -0.50383,0.17721s-0.60688,0.49455 -1.25644,1.12938l-0.00001,-0.00002zm4.35164,-7.33015c0.22873,0 0.41698,0.0758 0.56475,0.22697c0.14764,0.15131 0.22151,0.34515 0.22151,0.58139c0,0.32498 -0.11259,0.61083 -0.33766,0.85812c-0.22533,0.24741 -0.47807,0.37105 -0.75847,0.37105c-0.2215,0 -0.40609,-0.07757 -0.55371,-0.23256c-0.14763,-0.15512 -0.2215,-0.35796 -0.2215,-0.60906c0,-0.33221 0.10701,-0.61452 0.32116,-0.84708c0.21388,-0.23269 0.46865,-0.34883 0.76393,-0.34883z"></path> <path stroke="{font_color}" stroke-width="0.25" stroke-miterlimit="10" d="m56.30368,24.00952l1.75793,-0.67435l-0.79555,3.0993l2.293,0l-0.17722,0.78627l-2.29461,0l-0.96594,3.71067c-0.30659,1.11398 -0.45995,1.88853 -0.45995,2.32391c0,0.19931 0.0424,0.34324 0.12733,0.43172c0.08478,0.08861 0.20104,0.13304 0.34883,0.13304c0.22875,0 0.57933,-0.13659 1.05194,-0.40976c0.6201,-0.36152 1.21048,-0.77128 1.77157,-1.22917l0.42081,0.50928c-1.61657,1.21813 -2.69811,1.96377 -3.24434,2.23668c-0.54636,0.27303 -0.98545,0.40976 -1.31764,0.40976c-0.27317,0 -0.4891,-0.09965 -0.64777,-0.29894c-0.15882,-0.1993 -0.23815,-0.52401 -0.23815,-0.97425c0,-0.5315 0.14014,-1.3434 0.42081,-2.43611l1.12719,-4.40685l-1.79378,0l0.19929,-0.78628l1.79569,0l0.62052,-2.42493l0.00004,0z"></path> </g></defs>'),

                t += X.svg.handleTmplVars('<symbol id="tdOutline1" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline2" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline3" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline4" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline5" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline6" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline7" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline8" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline9" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline10" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline11" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline12" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline13" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline14" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdOutline15" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,100c-6,0,-6,0,-10,-20c-2,-4,-2,-4,-6,-6c-24,-16,-24,-64,16,-70c40,6,40,54,16,70c-4,2,-4,2,-6,6c-4,20,-4,20,-10,20Z"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="7"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="52" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="16" cy="84" r="8"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="64" cy="84" r="8"></circle></symbol><symbol id="tdo12Outline1" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline2" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline3" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline4" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline5" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline6" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline7" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline8" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline9" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline10" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline11" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline12" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline13" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline14" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline15" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline16" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline17" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline18" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline19" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline20" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo12Outline21" viewBox="0 0 120 100"> <path stroke="{font_color}" stroke-width="1" d="M45,98c-6,0,-6,0,-6,-20c-2,-4,-2,-4,-6,-6c-40,-10,-40,-34,25,-50c80,-20,80,-8,10,40c-8,6,-8,6,-12,20l-4,14c-1,2,-1,2,-8,2"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="16" cy="52" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="28" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="40" cy="43" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="52" cy="34" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="60" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="68" cy="85" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="72" cy="48" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="84" cy="40" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="94" cy="32" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="104" cy="24" r="4"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="78" cy="30" r="4"></circle></symbol><symbol id="tdo3Outline57" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline58" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline59" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline60" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline61" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline62" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline63" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline64" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline65" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline66" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline67" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline68" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline69" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#000"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline70" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline71" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline72" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#000"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline73" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline74" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline75" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M57,141l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="80" cy="58" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="94" cy="44" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="110" cy="30" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="70" cy="52" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline76" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M69,144l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="96" cy="69" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="107" cy="56" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="120" cy="42" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="95" cy="88" stroke="#000" stroke-width="1" r="3.5" fill="#000"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline77" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M69,144l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="96" cy="69" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="107" cy="56" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="120" cy="42" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="95" cy="88" stroke="#000" stroke-width="1" r="3.5" fill="#000"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline78" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M69,144l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="96" cy="69" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="107" cy="56" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="120" cy="42" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="95" cy="88" stroke="#000" stroke-width="1" r="3.5" fill="#000"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline79" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M69,144l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="96" cy="69" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="107" cy="56" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="120" cy="42" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="95" cy="88" stroke="#000" stroke-width="1" r="3.5" fill="#000"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline80" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M69,144l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="96" cy="69" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="107" cy="56" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="120" cy="42" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="95" cy="88" stroke="#000" stroke-width="1" r="3.5" fill="#000"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline81" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M69,144l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="96" cy="69" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="107" cy="56" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="120" cy="42" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="95" cy="88" stroke="#000" stroke-width="1" r="3.5" fill="#000"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline82" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M69,144l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="96" cy="69" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="107" cy="56" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="120" cy="42" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="95" cy="88" stroke="#000" stroke-width="1" r="3.5" fill="#fff"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline83" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M69,144l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="96" cy="69" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="107" cy="56" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="120" cy="42" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="95" cy="88" stroke="#000" stroke-width="1" r="3.5" fill="#000"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline84" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M69,144l-5,5l6,2Z"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="96" cy="69" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="107" cy="56" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="120" cy="42" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="95" cy="88" stroke="#000" stroke-width="1" r="3.5" fill="#fff"></circle> <circle cx="110" cy="94" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="118" cy="78" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="125" cy="64" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="134" cy="50" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle></symbol><symbol id="tdo3Outline85" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M81,147l-5,5l6,2"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="118" cy="78" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="125" cy="64" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="134" cy="50" stroke="#000" stroke-width="1" r="4" fill="#000"></circle></symbol><symbol id="tdo3Outline86" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M81,147l-5,5l6,2"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="118" cy="78" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="125" cy="64" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="134" cy="50" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle></symbol><symbol id="tdo3Outline87" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M81,147l-5,5l6,2"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="118" cy="78" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="125" cy="64" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="134" cy="50" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle></symbol><symbol id="tdo3Outline88" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M81,147l-5,5l6,2"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="118" cy="78" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="125" cy="64" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="134" cy="50" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle></symbol><symbol id="tdo3Outline89" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M81,147l-5,5l6,2"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="118" cy="78" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="125" cy="64" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="134" cy="50" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle></symbol><symbol id="tdo3Outline90" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M81,147l-5,5l6,2"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="118" cy="78" stroke="#000" stroke-width="1" r="4" fill="#000"></circle> <circle cx="125" cy="64" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="134" cy="50" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle></symbol><symbol id="tdo3Outline91" viewBox="0 0 160 160"> <path stroke="#000" stroke-width="1" d="M70,132c-15,-4,-15,-4,-15,-7c3,-15,3,-16,-6,-20c-54,-5,-50,-50,-22,-62c56,-24,56,-24,92,-34c28,-10,40,-2,32,20c-30,60,-30,60,-56,105c-2,4,-2,4,-24,-2Z"></path> <path stroke="#eee" stroke-width="1" fill="none" d="M90,133c10,-24,4,-24,-20,-40c-40,-20,-40,-48,74,-86"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M53,138l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M65,141l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="none" d="M77,144l2,-6l9,3l-2,6l-9,-3"></path> <path stroke="{font_color}" stroke-width="1" fill="#000" d="M81,147l-5,5l6,2"></path> <circle cx="36" cy="114" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="16" cy="70" stroke="#000" stroke-width="1" r="5" fill="#fff"></circle> <circle cx="30" cy="60" stroke="#000" stroke-width="1" r="6" fill="#fff"></circle> <circle cx="42" cy="48" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="54" cy="40" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="37" cy="74" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="66" cy="72" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="80" cy="58" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="94" cy="44" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="110" cy="30" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="70" cy="52" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="85" cy="82" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="96" cy="69" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="107" cy="56" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="120" cy="42" stroke="#ccc" stroke-width="1" r="4" fill="#ccc"></circle> <circle cx="95" cy="88" stroke="#ccc" stroke-width="1" r="3.5" fill="#ccc"></circle> <circle cx="110" cy="94" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="118" cy="78" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="125" cy="64" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle> <circle cx="134" cy="50" stroke="#000" stroke-width="1" r="4" fill="#fff"></circle></symbol><symbol id="x8Outline60" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline61" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline62" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline63" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline64" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline65" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline66" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline67" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline68" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline69" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline70" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline71" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline72" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline73" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline74" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline75" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline76" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="70" cy="80" r="6"></circle></symbol><symbol id="x8Outline77" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60 "></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="16" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="36" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="54" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline60" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline61" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline62" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline63" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline64" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline65" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline66" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline67" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline68" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#000" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline69" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline70" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline71" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline72" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline73" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline74" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline75" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline76" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline77" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline78" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="70" cy="80" r="6"></circle></symbol><symbol id="x10Outline79" viewBox="0 0 80 100"> <path stroke="{font_color}" stroke-width="1" d="M40,95c-10,0,-30,-20,-30,-60l0,-10c0,-20,10,-20,15,-20l30,0c5,0,15,0,15,20l0,10c0,40,-20,60,-30,60"></path> <circle stroke="#000" stroke-width="1" fill="#fff" cx="30" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="14" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="32" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="48" cy="30" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="31" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="49" cy="46" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="26" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="54" cy="62" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="10" cy="80" r="6"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="70" cy="80" r="6"></circle></symbol>'),

                t += X.svg.handleTmplVars('<symbol id="td6tOutline1" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline2" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline3" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline4" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline5" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline6" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline7" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline8" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline9" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline10" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline11" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline12" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline13" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline14" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline15" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline16" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline17" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline18" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline19" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline20" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline21" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline22" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline23" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline24" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline25" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline26" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline27" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline28" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline29" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline30" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline31" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline32" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline33" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline34" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline35" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline36" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline37" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline38" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline39" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline40" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline41" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline42" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline43" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline44" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline45" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline46" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline47" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="td6tOutline48" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol>'),

                t += X.svg.handleTmplVars('<symbol id="jt6tOutline1" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline2" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline3" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline4" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline5" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline6" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline7" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline8" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline9" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline10" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline11" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline12" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline13" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline14" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline15" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline16" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline17" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline18" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline19" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline20" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline21" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline22" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline23" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline24" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline25" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline26" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline27" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline28" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline29" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline30" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline31" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline32" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline33" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline34" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline35" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline36" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline37" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline38" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline39" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline40" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline41" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline42" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline43" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline44" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline45" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline46" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline47" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol><symbol id="jt6tOutline48" viewBox="-5 -5 80 100"><rect x="1" y="1" width="68" height="88" rx="5" ry="5" stroke="#000" stroke-width="1" ></rect><circle fill="#000" stroke="#000" stroke-width="1" cx="23" cy="18" r="7"></circle><circle fill="#000" stroke="#000" stroke-width="1" cx="47" cy="18" r="7"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="45" r="8"></circle><circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="45" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="23" cy="72" r="8"></circle> <circle fill="#fff" stroke="#000" stroke-width="1" cx="47" cy="72" r="8"></circle></symbol>'),

                t += X.svg.handleTmplVars(' <symbol id="xiao8Outline60" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline61" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="#fff" stroke-width="0" /> </symbol> <symbol id="xiao8Outline62" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline63" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline64" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline65" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline66" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="#fff" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline67" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline68" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline69" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline70" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline71" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline72" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M94 194 l5 10 l-10 0 z" fill="none"></path> <path d="M106 194 l5 10 l-10 0 z" fill="none"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline73" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="#fff" stroke-width="0" /> </symbol> <symbol id="xiao8Outline74" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline75" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline76" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline77" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline78" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="#fff" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline79" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline80" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline81" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline82" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline83" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline84" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline85" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="#fff" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline86" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline87" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline88" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="#fff" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline89" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline90" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol> <symbol id="xiao8Outline91" viewBox="60 3 80 202"> <path d="M90,192 h-10 v-188 h40 v188 h-10 Z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M90,192 a 12 12 0 0 1 20 0" fill="white" stroke="#000" stroke-width="1" /> <path d="M100 194 l5 10 l-10 0 z" fill="none"></path> <path d="M94 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M106 194 l5 10 l-10 0 z" fill="#000"></path> <path d="M80,93 h40" stroke="#000" stroke-width="2" fill="none" /> <path d="M80,162 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="100" cy="175" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,127 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M93,107 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> <circle cx="100" cy="79" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="59" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="39" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="19" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M93,19 a 7 7 0 0 0 14 0" fill="none" stroke-width="0" /> </symbol>'),

                t += X.svg.handleTmplVars(' <symbol id="hulusi7Outline72" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline73" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="#fff" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline74" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline75" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline76" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline77" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline78" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="#fff" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline79" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline80" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="#fff" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline81" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline82" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline83" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#000" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline84" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline85" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#000" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="#fff" stroke-width="0" /> </symbol> <symbol id="hulusi7Outline86" viewBox="10 -1 80 130"> <path stroke="#999" stroke-width="1" fill="#ffe082" d="M45,126l0,3l10,0l0,-3z"> </path> <path stroke="#999" stroke-width="1" fill="#ffecb3" d="M50,129 c-38,-7,-26,-37,-20,-37 c-26,-10,-26,-50,20,-52 M50,129 c38,-7,26,-37,20,-37 c26,-10,26,-50,-20,-52 "> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" d="M40,105L40,0L60,0L60,105z"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M35,96L35,30C37,30,37,30,40,18"> </path> <path stroke="#999" stroke-width="1" stroke-linejoin="round" fill="none" d="M65,96L65,20C63,20,63,20,60,8"> </path> <path d="M40,54 l20,0" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="3" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="13" r="5"></circle> <path d="M45,13 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="28" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="43" r="5"></circle> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="65" r="5"></circle> <path d="M45,65 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="80" r="5"></circle> <path d="M45,80 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> <circle stroke="#000" stroke-width="1" fill="#fff" cx="50" cy="95" r="5"></circle> <circle stroke="#333" stroke-width="1" fill="#fff" cx="50" cy="115" r="5"></circle> <path d="M45,115 a 5 5 0 0 0 10 0" fill="none" stroke-width="0" /> </symbol>'),

                t += X.svg.handleTmplVars(' <symbol id="recorder8Outline72B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline73B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline74B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline75B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline76B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline77B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline78B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline79B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline80B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline81B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline82B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline83B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline84B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline85B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline86B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline87B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline88B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline89B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline90B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline91B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline92B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline93B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline94B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline95B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline96B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline97B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline98B" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline72G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline73G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline74G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline75G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline76G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline77G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline78G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline79G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline80G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline81G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline82G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline83G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline84G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline85G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline86G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline87G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="none" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline88G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline89G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline90G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline91G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline92G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline93G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline94G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline95G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline96G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#fff" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline97G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol> <symbol id="recorder8Outline98G" viewBox="60 0 80 200"> <path d="M90,196 a40 40 0 0 1 -10 -20 l0,-172 l40,0 l0,172 a40 40 0 0 1 -10,20 z" stroke="#000" stroke-width="2" stroke-linejoin="round" /> <path d="M80,96 l40,0" stroke="#000" stroke-width="2" /> <path d="M80,176 l40,0" fill="none" stroke="#000" stroke-width="2" /> <path d="M80,31 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <path d="M80,158 l40,0" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="2" /> <circle cx="97" cy="167" r="7" fill="#000" stroke="#000" stroke-width="1" /> <path d="M90 167 A7 7 0 0 0 104 167" fill="#fff" stroke-width="0" /> <circle cx="100" cy="147" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="127" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <path d="M100 120 A7 7 0 0 1 100 134" fill="none" stroke="#000" stroke-width="1" /> <circle cx="100" cy="107" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="85" r="7" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="100" cy="65" r="7" fill="#fff" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="45" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="104" cy="45" r="6" fill="#000" stroke="#000" stroke-width="1" /> <circle cx="92" cy="45" r="4" fill="#000" stroke="#000" stroke-width="1" /> <ellipse cx="100" cy="18" rx="15" ry="9" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="1" /> <circle cx="92" cy="18" r="4" fill="#fff" stroke="#000" stroke-width="1" /> <circle cx="104" cy="18" r="6" fill="#000" stroke="#000" stroke-width="1" /> </symbol>'),

                t += X.svg.handleTmplVars('<symbol id="icon" viewBox="0 0 400 400"> <rect fill="none" stroke-width="0" x="0" y="0" width="400" height="400"></rect> <path id="green" fill="#64b83b" fill-rule="evenodd" d="m278.622,149.609c0,0.967 0.076,1.363 0.169,0.879c0.093,-0.483 0.093,-1.274 0,-1.758c-0.093,-0.483 -0.169,-0.087 -0.169,0.879m-0.366,9.375c0,1.612 0.069,2.271 0.154,1.465c0.084,-0.805 0.084,-2.124 0,-2.929c-0.085,-0.806 -0.154,-0.147 -0.154,1.464m-0.019,5.664c0.003,1.075 0.079,1.468 0.168,0.874c0.09,-0.594 0.088,-1.473 -0.005,-1.953c-0.093,-0.481 -0.166,0.005 -0.163,1.079m3.141,36.329c0.002,1.503 0.073,2.071 0.157,1.26c0.085,-0.81 0.083,-2.041 -0.003,-2.734c-0.086,-0.693 -0.156,-0.03 -0.154,1.474m-0.007,11.328c0.002,1.289 0.075,1.769 0.162,1.067c0.087,-0.702 0.085,-1.757 -0.004,-2.344c-0.089,-0.587 -0.16,-0.012 -0.158,1.277m38.614,-0.765c-0.249,0.548 -0.447,1.208 -0.438,1.467c0.008,0.258 0.274,-0.128 0.591,-0.859c0.668,-1.538 0.527,-2.099 -0.153,-0.608m-229.785,6.262c-8.92,0.628 -9.936,1.359 -9.874,7.101c0.04,3.778 0.954,7.428 3.701,14.784c1.051,2.814 1.911,5.294 1.911,5.51c0,0.217 0.767,1.96 1.706,3.874c0.938,1.914 2.081,4.269 2.538,5.232c1.178,2.479 2.762,5.293 4.455,7.912c0.801,1.239 1.457,2.358 1.457,2.486c0,0.444 6.468,9.226 9.279,12.597c2.953,3.542 10.57,11.224 14.158,14.279c4.203,3.578 11.608,9.204 12.115,9.204c0.212,0 0.385,0.176 0.385,0.391c0,0.215 0.203,0.391 0.452,0.391c0.248,0 0.995,0.404 1.66,0.899c2.381,1.772 12.022,6.922 15.857,8.47c1.182,0.477 2.5,1.021 2.93,1.208c0.69,0.301 8.579,2.889 11.718,3.845c1.761,0.536 7.41,1.835 10.938,2.515c7.751,1.495 9.966,1.817 12.891,1.876c3.06,0.063 3.08,0.069 0.976,0.327c-1.182,0.145 2.861,0.264 8.985,0.266c6.123,0.001 10.253,-0.119 9.179,-0.266c-1.845,-0.253 -1.787,-0.271 1.05,-0.329c4.937,-0.101 16.342,-2.203 23.95,-4.414c7.624,-2.215 8.214,-2.638 8.972,-6.424c0.323,-1.61 -0.918,-5.484 -2.554,-7.973c-0.739,-1.124 -2.14,-3.631 -4.366,-7.813c-3.272,-6.146 -8.242,-12.295 -10.971,-13.574c-0.573,-0.269 -1.458,-0.681 -1.966,-0.917c-1.331,-0.618 -7.895,-0.214 -12.552,0.771c-7.789,1.648 -20.74,0.61 -32.617,-2.615c-1.52,-0.412 -7.211,-2.511 -9.358,-3.451c-0.762,-0.333 -1.736,-0.739 -2.166,-0.901c-1.084,-0.41 -3.478,-1.613 -6.25,-3.141c-1.289,-0.711 -3.013,-1.655 -3.832,-2.098c-6.061,-3.284 -18.291,-16.002 -24.277,-25.246c-2.998,-4.63 -5.68,-9.068 -5.68,-9.398c0,-0.202 -0.176,-0.367 -0.391,-0.367c-0.214,0 -0.39,-0.239 -0.39,-0.53c0,-0.292 -0.879,-2.058 -1.953,-3.924c-1.075,-1.867 -1.953,-3.484 -1.953,-3.594c0,-0.581 -3.264,-4.878 -4.672,-6.149l-1.631,-1.474l-8.665,0.102c-4.766,0.055 -11.581,0.306 -15.145,0.558m62.706,52.949c4.163,0.772 6.02,1.915 7.204,4.434c0.871,1.852 1.097,4.29 0.437,4.698c-0.215,0.133 -0.391,0.561 -0.391,0.952c0,0.95 -2.851,3.847 -4.091,4.158c-1.271,0.319 -1.278,0.945 -0.01,0.945c1.477,0 3.956,2.668 4.284,4.613c1.193,7.063 -4.667,11.393 -14.706,10.865c-7.016,-0.369 -7.972,-0.557 -8.477,-1.665c-1.096,-2.406 -0.264,-8.323 0.904,-6.433c0.643,1.04 8.735,1.46 10.384,0.539c4.363,-2.437 0.571,-6.108 -5.648,-5.466l-2.171,0.224l0.029,-1.632c0.016,-0.897 0.148,-2.422 0.293,-3.389l0.264,-1.758l2.19,0.13c5.046,0.3 8.853,-2.503 5.696,-4.192c-0.996,-0.533 -8.34,-0.422 -10.003,0.151c-0.827,0.285 -0.908,0.233 -0.65,-0.421c0.162,-0.41 0.381,-1.361 0.488,-2.113c0.106,-0.752 0.339,-1.719 0.517,-2.149c0.178,-0.429 0.422,-1.089 0.542,-1.465c0.154,-0.479 0.66,-0.697 1.696,-0.729c0.812,-0.026 2.004,-0.181 2.649,-0.345c1.81,-0.46 5.951,-0.437 8.57,0.048"></path> <path id="purple" fill="#e62b67" fill-rule="evenodd" d="m251.242,22.688c-0.242,1.809 -0.72,5.222 -1.062,7.585c-0.342,2.364 -0.786,5.66 -0.987,7.325c-0.201,1.665 -0.541,4.433 -0.755,6.152c-0.215,1.719 -0.555,4.487 -0.756,6.152c-0.201,1.665 -0.639,4.961 -0.974,7.325c-0.335,2.363 -0.792,5.791 -1.016,7.617c-0.225,1.826 -0.485,3.584 -0.58,3.906c-0.16,0.544 -0.422,2.495 -1.379,10.254c-0.206,1.665 -0.549,4.434 -0.764,6.152c-0.215,1.719 -0.557,4.488 -0.76,6.153c-0.344,2.816 -0.642,4.949 -2.204,15.722c-0.327,2.256 -0.761,5.464 -0.964,7.129c-0.203,1.665 -0.545,4.434 -0.76,6.153c-0.77,6.165 -1.15,9.228 -1.525,12.304c-0.21,1.719 -0.478,3.653 -0.596,4.297c-0.118,0.645 -0.569,3.897 -1.002,7.227c-0.723,5.56 -1.543,10.561 -1.781,10.866c-0.054,0.069 -0.95,-0.484 -1.991,-1.228c-1.042,-0.744 -2.553,-1.723 -3.359,-2.175c-0.805,-0.453 -2.036,-1.142 -2.734,-1.532c-8.48,-4.74 -21.551,-7.124 -31.543,-5.753c-5.552,0.762 -14.942,3.405 -16.191,4.557c-0.205,0.189 -0.575,0.343 -0.823,0.343c-3.454,0 -14.827,9.374 -21.714,17.898c-5.537,6.854 -10.523,22.205 -10.478,32.263c0.011,2.646 0.849,9.544 1.309,10.776c0.12,0.323 0.292,1.026 0.383,1.563c0.708,4.188 3.423,11.057 6.131,15.515c0.847,1.393 1.539,2.677 1.539,2.851c0,0.175 0.142,0.377 0.316,0.449c0.174,0.071 0.86,0.921 1.526,1.888c4.139,6.015 11.37,12.087 19.252,16.166c5.471,2.832 10.381,4.375 17.544,5.515c20.026,3.185 42.223,-6.788 53.474,-24.025c1.332,-2.041 2.893,-4.299 3.47,-5.018c1.329,-1.659 2.654,-4.273 3.689,-7.277c0.445,-1.294 0.954,-2.705 1.131,-3.135c0.176,-0.429 0.431,-1.308 0.566,-1.953c0.136,-0.644 0.421,-1.963 0.634,-2.929c0.43,-1.95 0.646,-3.135 1.823,-9.961c1.711,-9.926 2.507,-16.417 3.593,-29.297c0.394,-4.676 0.971,-10.329 1.555,-15.235c0.205,-1.718 0.569,-4.882 0.811,-7.031c0.241,-2.148 0.612,-5.224 0.825,-6.836c0.213,-1.611 0.563,-4.511 0.778,-6.445c0.216,-1.934 0.552,-4.922 0.747,-6.641c0.196,-1.718 0.529,-4.707 0.74,-6.64c0.211,-1.934 0.661,-5.45 0.998,-7.813c0.338,-2.363 0.774,-5.527 0.969,-7.031c0.196,-1.504 0.64,-4.668 0.988,-7.031c0.348,-2.364 0.804,-5.616 1.013,-7.227c2.427,-18.732 2.202,-17.555 3.438,-18.038c2.409,-0.942 16.232,0.278 18.884,1.667c0.374,0.196 1.11,0.356 1.638,0.356c0.527,0 1.067,0.175 1.2,0.39c0.133,0.215 0.67,0.391 1.195,0.391c0.524,0 0.953,0.176 0.953,0.39c0,0.215 0.308,0.402 0.684,0.416c0.376,0.014 1.738,0.625 3.027,1.358c1.289,0.732 2.696,1.492 3.125,1.688c0.749,0.341 5.792,3.882 7.422,5.211c8.62,7.025 12.06,10.147 19.47,17.665l6.189,6.28l-0.169,-1.758c-0.191,-1.995 -2.094,-9.611 -2.657,-10.639c-0.205,-0.374 -0.374,-0.989 -0.376,-1.368c-0.005,-0.833 -2.668,-8.517 -3.894,-11.235c-0.484,-1.075 -1.141,-2.569 -1.459,-3.321c-2.513,-5.934 -11.049,-18.671 -12.575,-18.764c-0.128,-0.008 -1.183,-0.887 -2.346,-1.953c-1.163,-1.066 -2.349,-1.939 -2.637,-1.939c-0.287,0 -0.524,-0.132 -0.526,-0.293c-0.001,-0.161 -0.397,-0.484 -0.878,-0.718c-0.822,-0.398 -6.701,-3.348 -8.195,-4.111c-0.373,-0.191 -0.945,-0.347 -1.27,-0.347c-0.325,0 -0.591,-0.176 -0.591,-0.39c0,-0.215 -0.205,-0.391 -0.455,-0.391c-0.25,0 -1.783,-0.631 -3.407,-1.401c-1.623,-0.771 -3.748,-1.659 -4.721,-1.973c-0.973,-0.314 -2.12,-0.715 -2.55,-0.89c-0.429,-0.176 -1.221,-0.5 -1.758,-0.721c-0.537,-0.22 -1.855,-0.709 -2.929,-1.086c-6.571,-2.304 -12.916,-6.624 -19.752,-13.444c-4.544,-4.535 -8.089,-8.46 -11.987,-13.275l-0.757,-0.935l-0.442,3.288m86.739,87.078c0,0.752 0.081,1.059 0.179,0.683c0.098,-0.376 0.098,-0.991 0,-1.367c-0.098,-0.376 -0.179,-0.068 -0.179,0.684m-157.034,70.41c5.9,3.355 3.866,12.012 -2.822,12.012c-6.318,0 -8.626,-8.007 -3.351,-11.626c1.393,-0.957 4.796,-1.169 6.173,-0.386m42.188,0c5.899,3.355 3.865,12.012 -2.823,12.012c-6.318,0 -8.626,-8.007 -3.351,-11.626c1.394,-0.957 4.797,-1.169 6.174,-0.386m18.257,30.859c-0.094,21.747 -27.57,37.379 -53.501,30.439c-16.353,-4.376 -27.662,-16.794 -27.721,-30.439l-0.014,-3.222l40.625,0l40.625,0l-0.014,3.222"></path> <path id="yellow" fill="#f6c232" fill-rule="evenodd" d="m185.547,77.193c-1.611,0.298 -5.391,0.999 -8.399,1.556c-3.007,0.558 -5.996,1.161 -6.64,1.341c-0.645,0.179 -1.963,0.528 -2.93,0.775c-23.889,6.105 -47.972,21.612 -63.689,41.01c-0.957,1.182 -1.843,2.236 -1.968,2.344c-0.405,0.347 -6.608,9.25 -6.608,9.484c0,0.124 -0.67,1.249 -1.487,2.5c-1.821,2.784 -6.666,12.356 -7.874,15.555c-0.486,1.289 -1.115,2.871 -1.396,3.515c-1.022,2.341 -3.3,9.397 -3.303,10.231c-0.002,0.471 -0.16,0.953 -0.352,1.072c-0.193,0.119 -0.445,0.876 -0.561,1.683c-0.116,0.807 -0.389,2.259 -0.607,3.225c-1.226,5.451 -2.368,12.926 -2.446,16.016c-0.053,2.114 -0.059,2.123 -0.334,0.586c-0.162,-0.907 -0.303,1.685 -0.335,6.175c-0.036,5.073 0.079,7.655 0.335,7.497c0.215,-0.133 0.392,-0.099 0.394,0.074c0.013,1.417 6.594,2.017 14.059,1.282c2.686,-0.264 7.432,-0.62 10.547,-0.791c12.568,-0.689 16.636,-4.099 16.987,-14.237c0.208,-5.999 1.056,-12.165 2.17,-15.762c0.439,-1.42 2.114,-6.189 2.696,-7.676c0.716,-1.833 4.523,-9.117 5.547,-10.617c0.614,-0.898 1.116,-1.747 1.116,-1.887c0,-0.141 1.098,-1.689 2.441,-3.441c9.639,-12.578 19.884,-20.563 32.91,-25.65c11.342,-4.429 21.884,-5.885 42.188,-5.827c16.364,0.046 18.151,-0.449 18.173,-5.037c0.004,-1.01 0.361,-3.859 0.792,-6.33c0.431,-2.47 0.957,-5.634 1.168,-7.031c0.212,-1.396 0.564,-3.594 0.783,-4.883c0.657,-3.861 0.918,-10.351 0.417,-10.351c-0.239,0 -0.435,-0.321 -0.435,-0.713c0,-2.412 -4.596,-3.803 -18.323,-5.545c-7.35,-0.933 -20.371,-1.008 -25.036,-0.143m-44.287,31.498c-0.239,4.734 -0.955,21.754 -1.002,23.829l-0.024,1.074l-4.933,0l-4.932,0l0.238,-5.371c0.131,-2.954 0.353,-7.701 0.493,-10.547c0.183,-3.744 0.131,-5.176 -0.189,-5.176c-0.243,0 -0.442,0.134 -0.442,0.298c0,0.165 -0.703,0.733 -1.563,1.265c-0.859,0.531 -1.562,1.099 -1.562,1.264c0,0.164 -0.2,0.298 -0.443,0.298c-0.314,0 -0.387,-1.162 -0.251,-3.984c0.195,-4.05 1.314,-6.172 3.255,-6.172c0.244,0 0.761,-0.352 1.15,-0.781c0.635,-0.702 1.203,-0.782 5.577,-0.782l4.871,0l-0.243,4.785"></path> <path id="blue" fill="#1e69a6" fill-rule="evenodd" d="m284.489,113.965c-0.139,0.376 -0.374,0.771 -0.523,0.879c-1.404,1.014 -3.531,11.063 -4.232,19.992c-0.197,2.51 -0.441,4.707 -0.544,4.883c-0.253,0.435 -0.823,20.889 -0.711,25.515c0.083,3.42 0.323,6.227 1.203,14.063c3.559,31.684 2.452,45.374 -4.555,56.36c-0.929,1.457 -1.689,2.804 -1.689,2.995c0,0.19 -0.135,0.404 -0.299,0.476c-0.164,0.071 -1.132,1.272 -2.152,2.669c-4.39,6.015 -16.166,18.594 -20.443,21.837c-4.375,3.318 -5.031,8.032 -2.055,14.78c0.401,0.91 0.73,1.77 0.73,1.909c0,0.14 0.703,1.72 1.562,3.512c0.86,1.792 1.563,3.526 1.563,3.852c0,0.327 0.176,0.594 0.39,0.594c0.215,0 0.391,0.266 0.391,0.59c0,0.325 0.365,1.424 0.812,2.442c5.886,13.42 6.787,13.607 19.248,3.994c1.535,-1.185 3.294,-2.476 3.909,-2.869c1.005,-0.644 4.675,-3.985 8.428,-7.673c2.831,-2.782 6.167,-6.557 8.81,-9.968c1.494,-1.93 2.827,-3.596 2.962,-3.703c0.135,-0.108 0.476,-0.635 0.758,-1.172c0.281,-0.537 1.182,-1.885 2,-2.996c0.818,-1.11 1.828,-2.624 2.244,-3.364c0.415,-0.74 0.992,-1.765 1.281,-2.278c0.288,-0.513 0.612,-1.02 0.72,-1.128c1.178,-1.178 6.253,-12.077 9.367,-20.117c2.566,-6.627 5.145,-17.75 5.795,-25c0.154,-1.719 0.541,-3.564 0.86,-4.101c0.852,-1.436 0.856,-22.772 0.005,-24.219c-0.316,-0.537 -0.701,-2.383 -0.855,-4.102c-0.154,-1.719 -0.468,-3.916 -0.697,-4.883c-0.487,-2.052 -1.144,-5.167 -1.443,-6.836c-0.343,-1.922 -3.521,-12.303 -4.425,-14.453c-0.18,-0.429 -0.72,-1.836 -1.2,-3.125c-4.092,-10.996 -13.387,-25.815 -22.953,-36.592c-3.086,-3.477 -3.823,-3.954 -4.262,-2.763m19.673,83.579c4.631,1.096 7.981,5.585 6.428,8.614c-0.192,0.373 -0.729,1.479 -1.195,2.458c-1.068,2.247 -2.789,4.348 -7.127,8.707c-1.892,1.901 -3.44,3.539 -3.44,3.64c0,0.222 6.547,-0.071 8.902,-0.398l1.675,-0.233l-0.113,3.408l-0.112,3.408l-11.621,0.104l-11.621,0.103l0,-3.127c0,-3.047 0.032,-3.156 1.268,-4.205c3.241,-2.751 11.148,-11.051 11.763,-12.347c1.661,-3.5 -1.426,-4.491 -9.86,-3.166l-1.711,0.269l0.271,-1.315c0.15,-0.724 0.367,-2.107 0.484,-3.073c0.294,-2.441 0.646,-2.735 3.278,-2.735c1.25,0 2.373,-0.161 2.495,-0.358c0.28,-0.454 8.071,-0.266 10.236,0.246"></path></symbol>')
        }, X.svg.handleTmplVars = function (t) {
            // console.log(t)
            return t.replace(/{(\w+)}/g, function (t, e) {
                // console.log(e)
                // console.log(X.config[X.lineToHump(e)])
                return X.config[X.lineToHump(e)]
            })
        }, X.svg.renderPaperEnd = function () {
            if (window.localStorage.getItem('song_show_chord_name') != 3) return "</svg>"
            var str = ''
            var bpmtop = 0
            if (X.config.bpm != undefined) {
                bpmtop = X.config.bpm.getWidth() > 0 ? 30 : 0
            }
            console.log(bpmtop)
            // console.log(typeof hexiansvg == 'undefined')
            if (typeof hexiansvg == 'undefined') return "</svg>"
            str += hexiansvg(X.config.paperPaddingLeft, X.config.paperPaddingTop + bpmtop)
            return str + "</svg>"
        }, X.svg.renderPaperBreak = function () {
            return "\n<!--paper_break-->\n"
        }, X.svg.newTextElements = function (t) {
            return X.svg.newElements({
                init: function () {
                    t.value.length < 1 || this.newCellElement(t, {
                        toSvg: function () {
                            var e = {
                                x: this.getXLeft(),
                                y: this.getYCenter(),
                                dy: 5,
                                fill: t.fontColor,
                                "text-anchor": t.anchor,
                                "font-size": t.fontSize,
                                "xml:space": "preserve"
                            };
                            return t.fontWeight && (e["font-weight"] = t.fontWeight), t.fontStyle && (e["font-style"] = t.fontStyle), X.svg.renderText(t.value, e)
                        }
                    })
                }
            })
        }, X.svg.renderHorizontalTips = X.svg.newNoteElements = function (t, e) {
            var r = "";
            return X.arrayEach(t, function (t) {
                switch (t) {
                    case "aeration":
                        e.x += 8, e.y += 0, r += X.svg.renderUse("huxifu", e);
                        break;
                    case "slide_up":
                        r += X.svg.renderUse("huayin_shang", e);
                        break;
                    case "slide_down":
                        r += X.svg.renderUse("huayin_xia", e);
                        break;
                    case "li_up":
                        r += X.svg.renderUse("li_up", e);
                        break;
                    case "li_down":
                        r += X.svg.renderUse("li_down", e);
                        break;
                    case "duo":
                        r += X.svg.renderUse("duo", e);
                        break;
                    default:
                        return
                }
                e.x += X.config.horizontalTipWidth
            }), r
        }, X.svg.newNoteElements = function (t) {
            return X.svg.newElements({
                init: function () {
                    this.newCellElement(t, {
                        toSvg: function () {
                            var e = "",
                                r = {
                                    x: this.getXCenter(),
                                    y: this.getYCenter(),
                                    id: t.getUniqueId(),
                                    "class": t.type,
                                    fill: X.config.backgroundColor,
                                    stroke: X.config.backgroundColor,
                                    firstLine: t.firstLine,
                                    firstColumn: t.firstColumn,
                                    lastLine: t.lastLine,
                                    lastColumn: t.lastColumn
                                },
                                c = t.content + "";
                            return c.match(/^([0-7A-Za-z]|yan|jie|hua|kong)$/) ? e += X.svg.renderUse("yinfu_" + c, r) : (r.x = this.getXLeft(), r.y = this.getYBottom(), r.fill = X.config.fontColor, r.stroke = X.config.fontColor, r["stroke-width"] = 0, r["font-size"] = 20, r["font-weight"] = 900, r["font-family"] = "Source Han Serif SC, sans-serif", e += X.svg.renderText(c, r)), e
                        }
                    }), this.leftTipToElements(), this.accidentalMarkToElements(), this.topPointToElements(), this.bottomPointToElements(), this.dotToElements(), this.rightTipToElements()
                },
                leftTipToElements: function () {
                    t.leftTips.length < 1 || this.newRectElement({
                        x: t.getXLeft() - t.getAccidentalMarkWidth() - t.leftAppoggiatura.getWidth() - t.getLeftTipWidth(),
                        y: t.getYTop() - .4 * X.config.horizontalTipHeight,
                        width: t.getLeftTipWidth(),
                        height: X.config.horizontalTipHeight,
                        toSvg: function () {
                            var e = {
                                x: this.getXLeft(),
                                y: this.getYBottom()
                            };
                            return X.svg.renderHorizontalTips(t.leftTips, e)
                        }
                    })
                },
                accidentalMarkToElements: function () {
                    t.getAccidentalMark() && this.newRectElement({
                        x: t.getXLeft() - t.getAccidentalMarkWidth(),
                        y: t.getYTop() - .3 * X.config.noteAccidentalHeight,
                        width: t.getAccidentalMarkWidth(),
                        height: X.config.noteAccidentalHeight,
                        toSvg: function () {
                            var e = {
                                x: this.getXRight() + 5,
                                y: this.getYBottom()
                            };
                            switch (t.getAccidentalMark()) {
                                case "b":
                                    return X.svg.renderUse("bianyinfu_jiang", e);
                                case "#":
                                    return X.svg.renderUse("bianyinfu_sheng", e);
                                case "n":
                                    return X.svg.renderUse("bianyinfu_huanyuan", e);
                                case "bb":
                                    return X.svg.renderUse("bianyinfu_jiang", e) + X.svg.renderUse("bianyinfu_jiang", {
                                        x: e.x - 6,
                                        y: e.y
                                    });
                                case "x":
                                    return X.svg.renderUse("bianyinfu_x", e);
                                default:
                                    return ""
                            }
                        }
                    })
                },
                topPointToElements: function () {
                    t.octaveForDisplay() <= 0 || this.newRectElement({
                        x: t.getXLeft(),
                        y: t.getYTop() - t.getTopPointHeight(),
                        height: t.octaveForDisplay() * X.config.noteTopPointHeight,
                        width: X.config.noteContentWidth,
                        toSvg: function () {
                            var e = {
                                    x: this.getXCenter() + 1,
                                    y: this.getYBottom() + .5 * (t.getHeight() + X.config.noteTopPointHeight)
                                },
                                r = "";
                            return X.times(t.octaveForDisplay(), function () {
                                r += X.svg.renderUse("yingao_gao", e), e.y -= X.config.noteTopPointHeight
                            }), r
                        }
                    })
                },
                bottomPointToElements: function () {
                    if (!(t.octaveForDisplay() >= 0)) {
                        var e = -t.octaveForDisplay();
                        this.newRectElement({
                            x: t.getXLeft(),
                            y: t.getYBottom() + t.underBarCount * X.config.noteUnderBarHeight + 4,
                            height: e * X.config.noteBottomPointHeight,
                            width: X.config.noteContentWidth,
                            toSvg: function () {
                                var r = {
                                        x: this.getXCenter(),
                                        y: this.getYTop() - .5 * t.getHeight() - 1
                                    },
                                    c = "";
                                return X.times(e, function () {
                                    c += X.svg.renderUse("yingao_di", r), r.y += X.config.noteBottomPointHeight
                                }), c
                            }
                        })
                    }
                },
                dotToElements: function () {
                    t.dotCount < 1 || this.newRectElement({
                        x: t.getXRight() + .5 * X.config.noteDotWidth,
                        y: t.getYTop() + .7 * t.getHeight(),
                        width: t.dotCount * X.config.noteDotWidth,
                        height: X.config.noteDotHeight,
                        toSvg: function () {
                            var e = {
                                    x: this.getXLeft() - .8 * t.getWidth(),
                                    y: this.getYBottom() - 3
                                },
                                r = "";
                            return X.times(t.dotCount, function () {
                                r += X.svg.renderUse("fudian", e), e.x += X.config.noteDotWidth
                            }), r
                        }
                    })
                },
                rightTipToElements: function () {
                    t.rightTips.length < 1 || this.newRectElement({
                        x: t.getXRight() + t.getDotWidth() + t.rightAppoggiatura.getWidth(),
                        y: t.getYTop() - .1 * X.config.horizontalTipHeight,
                        width: t.getRightTipWidth(),
                        height: X.config.horizontalTipHeight,
                        toSvg: function () {
                            var e = {
                                x: this.getXLeft(),
                                y: this.getYBottom()
                            };
                            return X.svg.renderHorizontalTips(t.rightTips, e)
                        }
                    })
                }
            })
        }, X.svg.newTopTipToElements = function (t, e, r) {
            var c, i = -8,
                l = 16,
                o = 16,
                s = {
                    p: "lidu_p",
                    pp: ["lidu_pp", l + 5, o, i],
                    mp: ["lidu_mp", l + 6, o, i],
                    mf: ["lidu_mf", l + 6, o + 2, i],
                    f: "lidu_f",
                    ff: ["lidu_ff", l + 3, o + 2, i],
                    fff: ["lidu_fff", l + 5, o, i],
                    sf: ["lidu_sf", l, o + 4, i],
                    fp: ["lidu_fp", l, o + 4, i],
                    sfp: ["lidu_sfp", l, o + 4, i],
                    atempo: ["lidu_atempo", 47, o, i - 2],
                    rit: ["lidu_rit", l + 5, o + 4, i - 4],
                    cresc: ["lidu_cresc", 28, o, i - 2],
                    dim: ["lidu_dim", l + 9, o, i - 6],
                    fermata: "yanchang",
                    staccato: "dunyinfu",
                    tenuto: "baochifu",
                    mordent_up: "boyinfu_shang1",
                    mordent_down: "boyinfu_xia1",
                    mordent_up_long: ["boyinfu_shang2", l + 6, o, i - 4],
                    mordent_down_long: ["boyinfu_xia2", l + 6, o, i - 4],
                    accent_right: "zhongyinfu",
                    accent_up: "accent_up",
                    trill: "changyinfu1",
                    trill_long: ["changyinfu2", 49, o, i],
                    long_tone: ["changyinfu3", 47, o, i],
                    da_tip: "da_tip",
                    die_tip: "die_tip",
                    t_tip: ["t_tip", 12, o, -6],
                    k_tip: ["k_tip", 12, o, -6],
                    l_tip: ["l_tip", 12, o, -6],
                    r_tip: ["r_tip", 12, o, -6],
                    flutter_tongue: "flutter_tongue",
                    flutter_tongue_long: "flutter_tongue",
                    turn: "turn"
                },
                n = s[t];
            return n instanceof Array ? (c = n[0], l = n[1], o = n[2], i = n[3]) : n ? c = n : (l = X.fontWidth(t, 12), i = X.mathMax(-9, -.5 * l)), X.svg.newRectElement({
                x: e + i,
                y: r,
                centerX: e,
                width: l,
                height: o,
                toSvg: function () {
                    return c ? X.svg.renderUse(c, {
                        x: this.centerX,
                        y: this.getYBottom() + 12
                    }) : X.svg.renderText(t, {
                        x: this.getXLeft(),
                        y: this.getYBottom() - 3,
                        fill: X.config.fontColor,
                        "font-size": 12,
                        "font-weight": X.config.fontWeightBold,
                        "xml:space": "preserve",
                        "text-anchor": "start"
                    })
                }
            })
        }, X.svg.newChordNamesToElements = function (t, e, r) {
            var c = t.join("/"),
                i = 12 * c.length;
            return X.svg.newRectElement({
                x: e,
                y: r,
                width: i,
                height: 15,
                toSvg: function () {
                    return X.svg.renderText(c, {
                        x: this.getXLeft(),
                        y: this.getYCenter() + 4,
                        fill: X.config.fontColor,
                        "font-size": 16,
                        "font-weight": X.config.fontWeightBold,
                        "xml:space": "preserve",
                        "text-anchor": "left"
                    })
                }
            })
        }, X.svg.newFingerNumsToElements = function (t, e, r) {
            var c = t.join("/");
            return X.svg.newRectElement({
                x: e,
                y: r,
                width: 20,
                height: 15,
                toSvg: function () {
                    return X.svg.renderText(c, {
                        x: this.getXLeft(),
                        y: this.getYCenter() + 4,
                        fill: X.config.fontColor,
                        "font-size": 12,
                        "font-weight": X.config.fontWeightBold,
                        "xml:space": "preserve",
                        "text-anchor": "left"
                    })
                }
            })
        }, X.svg.newAppoggiaturaElements = function (t, e) {
            return X.svg.newElements({
                init: function () {
                    if (!t.notes.isEmpty()) {
                        var r, c = X.config.appoggiaturaNoteWidth * t.notes.length * .5 - 5,
                            i = t.getBottomPointCount() * X.config.appoggiaturaBottomPointHeight + X.config.appoggiaturaNoteUnderBarHeight * t.getUnderBarCount() + 1,
                            l = e.getYTop();
                        switch (t.type) {
                            case X.appoggiaturaType.leftAppoggiatura:
                                r = e.getXLeft() - e.getAccidentalMarkWidth() - t.getWidth() + t.getLeftTipWidth(), this.newRectElement({
                                    x: r + c,
                                    y: l + i,
                                    width: 10,
                                    height: 10,
                                    toSvg: function () {
                                        return X.svg.renderUse("yiyinxian_qian", {
                                            x: this.getXCenter(),
                                            y: this.getYTop() - 5
                                        })
                                    }
                                });
                                break;
                            case X.appoggiaturaType.rightAppoggiatura:
                                r = e.getXRight() + t.getLeftTipWidth(), this.newRectElement({
                                    x: r + c,
                                    y: l + i,
                                    width: 10,
                                    height: 10,
                                    toSvg: function () {
                                        return X.svg.renderUse("yiyinxian_hou", {
                                            x: this.getXCenter(),
                                            y: this.getYTop() - 5
                                        })
                                    }
                                });
                                break;
                            default:
                                return
                        }
                        this.notesToElements(r, l), this.tipsToElements(r - t.getLeftTipWidth(), l, t.notes.first().leftTips), this.tipsToElements(r + t.getNoteWidth(), l, t.notes.last().rightTips)
                    }
                },
                notesToElements: function (e, r) {
                    var c = this;
                    X.arrayEach(t.notes, function (t, i) {
                        t.x = e + X.config.appoggiaturaNoteWidth * i, t.y = r - X.config.appoggiaturaNoteHeight, c.newRectElement({
                            x: t.x,
                            y: t.y,
                            width: X.config.appoggiaturaNoteWidth,
                            height: X.config.appoggiaturaNoteHeight,
                            content: t.content,
                            toSvg: function () {
                                return X.svg.renderUse("yiyin_yinfu_" + this.content, {
                                    x: this.getXCenter(),
                                    y: this.getYCenter()
                                })
                            }
                        }), c.accidentalMarkToElements(t), c.topPointToElements(t), c.bottomPointToElements(t)
                    }), c.underBarToElements()
                },
                accidentalMarkToElements: function (t) {
                    "" != t.getAccidentalMark() && this.newRectElement({
                        x: t.x - 3,
                        y: t.y - 5,
                        width: 10,
                        height: 10,
                        mark: t.getAccidentalMark(),
                        toSvg: function () {
                            var t = {
                                x: this.getXRight(),
                                y: this.getYBottom()
                            };
                            switch (this.mark) {
                                case "b":
                                    return X.svg.renderUse("yiyin_bianyinfu_jiang", t);
                                case "#":
                                    return X.svg.renderUse("yiyin_bianyinfu_sheng", t);
                                default:
                                    return ""
                            }
                        }
                    })
                },
                topPointToElements: function (t) {
                    t.octaveForDisplay() <= 0 || this.newRectElement({
                        x: t.x,
                        y: t.y - X.config.appoggiaturaTopPointHeight * t.octaveForDisplay(),
                        width: X.config.appoggiaturaNoteWidth,
                        height: X.config.appoggiaturaTopPointHeight * t.octaveForDisplay(),
                        octave: t.octaveForDisplay(),
                        toSvg: function () {
                            var t = {
                                    x: this.getXCenter(),
                                    y: this.getYTop() + 8
                                },
                                e = "";
                            return X.times(this.octave, function () {
                                e += X.svg.renderUse("yiyin_yingao_gao", t), t.y += X.config.appoggiaturaTopPointHeight
                            }), e
                        }
                    })
                },
                bottomPointToElements: function (e) {
                    if (!(e.octaveForDisplay() >= 0)) {
                        var r = -e.octaveForDisplay();
                        this.newRectElement({
                            x: e.x,
                            y: e.y + X.config.appoggiaturaNoteHeight + t.getUnderBarCount() * X.config.appoggiaturaNoteUnderBarHeight,
                            width: X.config.appoggiaturaNoteWidth,
                            height: X.config.appoggiaturaBottomPointHeight * r,
                            octave: r,
                            toSvg: function () {
                                var t = {
                                        x: this.getXCenter(),
                                        y: this.getYTop() - 2
                                    },
                                    e = "";
                                return X.times(this.octave, function () {
                                    e += X.svg.renderUse("yiyin_yingao_di", t), t.y += X.config.appoggiaturaBottomPointHeight
                                }), e
                            }
                        })
                    }
                },
                underBarToElements: function () {
                    var e = t.getUnderBarCount();
                    if (!(1 > e)) {
                        var r = t.notes.first(),
                            c = t.notes.last(),
                            i = r.x,
                            l = c.x + X.config.appoggiaturaNoteWidth;
                        this.newRectElement({
                            x: i,
                            y: r.y + X.config.appoggiaturaNoteHeight,
                            width: l - i,
                            height: X.config.appoggiaturaNoteUnderBarHeight * e,
                            toSvg: function () {
                                var t = {
                                        x1: this.getXLeft(),
                                        y1: this.getYTop(),
                                        x2: this.getXRight(),
                                        y2: this.getYTop(),
                                        "stroke-width": 1,
                                        stroke: X.config.fontColor
                                    },
                                    r = "";
                                return X.times(e, function () {
                                    r += X.svg.renderLine(t), t.y1 += X.config.appoggiaturaNoteUnderBarHeight, t.y2 = t.y1
                                }), r
                            }
                        })
                    }
                },
                tipsToElements: function (t, e, r) {
                    this.newRectElement({
                        x: t,
                        y: e - X.config.horizontalTipHeight,
                        width: X.config.horizontalTipWidth * r.length,
                        height: X.config.horizontalTipHeight,
                        toSvg: function () {
                            var t = {
                                x: this.getXLeft(),
                                y: this.getYBottom()
                            };
                            return X.svg.renderHorizontalTips(r, t)
                        }
                    })
                }
            })
        }, X.svg.newUnderBarsToElements = function (t) {
            return X.svg.newElements({
                init: function () {
                    var e = t.getUnderBars();
                    if (!e.isEmpty()) {
                        var r = this;
                        X.arrayEach(e, function (t, e) {
                            X.arrayEach(t, function (t) {
                                var c = t.first(),
                                    i = t.last(),
                                    l = c.getYCenter() + (e + 1) * X.config.noteUnderBarHeight;
                                r.newRectElement({
                                    x: c.getXLeft(),
                                    y: l,
                                    width: i.getXRight() - c.getXLeft(),
                                    height: 2,
                                    toSvg: function () {
                                        return X.svg.renderLine({
                                            x1: this.getXLeft(),
                                            y1: this.getYCenter(),
                                            x2: this.getXRight(),
                                            y2: this.getYCenter(),
                                            "stroke-width": 2,
                                            stroke: X.config.fontColor
                                        })
                                    }
                                })
                            })
                        })
                    }
                }
            })
        }, X.svg.newPoint = function (t, e) {
            return {
                x: X.oneValue(t, 0),
                y: X.oneValue(e, 0),
                transform: function (t, e) {
                    this.x += t, this.y += e
                }
            }
        }, X.svg.newRect = function (t, e, r, c) {
            var i = {
                x: X.oneValue(t, 0),
                y: X.oneValue(e, 0),
                width: X.oneValue(r, 0),
                height: X.oneValue(c, 0),
                transform: function (t, e) {
                    this.x += t, this.y += e
                },
                isXBetween: function (t, e) {
                    return !(this.getXRight() <= t || this.getXLeft() >= e)
                },
                getWidth: function () {
                    return this.width
                },
                getHeight: function () {
                    return this.height
                },
                getYTop: function () {
                    return this.height > 0 ? this.y : this.y - this.height
                },
                getYBottom: function () {
                    return this.height > 0 ? this.y + this.height : this.y
                },
                getYCenter: function () {
                    return this.y + .5 * this.height
                },
                getXLeft: function () {
                    return this.width > 0 ? this.x : this.x - this.width
                },
                getXRight: function () {
                    return this.width > 0 ? this.x + this.width : this.x
                },
                getXCenter: function () {
                    return this.x + .5 * this.width
                },
                format: function () {
                    this.height < 0 && (this.y += this.height, this.height *= -1), this.width < 0 && (this.x += this.width, this.width *= -1)
                },
                bgColorSvg: function () {
                    return X.svg.renderRect({
                        x: this.x,
                        y: this.y,
                        width: this.width,
                        height: this.height,
                        fill: X.svg.randLightColor()
                    })
                }
            };
            return i.format(), i
        }, X.svg.bezierCurve3ToRects = function (t, e, r, c, i) {
            var l = function (t, e, r, c, i) {
                    return t * Math.pow(1 - i, 3) + 3 * e * i * Math.pow(1 - i, 2) + 3 * r * Math.pow(i, 2) * (1 - i) + c * Math.pow(i, 3)
                },
                o = [];
            i = X.oneValue(i, .1);
            for (var s = 0; 1 >= s; s += i) o.push(X.svg.newPoint(l(t.x, e.x, r.x, c.x, s), l(t.y, e.y, r.y, c.y, s)));
            for (var n = [], f = 1; f < o.length; f++) n.push(X.svg.newRect(o[f - 1].x, o[f - 1].y, o[f].x - o[f - 1].x, o[f].y - o[f - 1].y));
            return n
        }, X.svg.newCommentElement = function (t, e) {
            if (!(t.length < 1)) {
                e = X.extend({
                    x: 0,
                    y: 0,
                    fontSize: 16,
                    fontColor: X.config.fontColor,
                    fontStyle: "normal",
                    fontWeight: "normal"
                }, e);
                for (var r = e.x, c = e.y, i = e.fontSize, l = i * X.fontWidth("a"), o = {
                        fill: e.fontColor,
                        "font-style": e.fontStyle,
                        "font-weight": e.fontWeight,
                        "font-size": i,
                        widht: i,
                        height: i + 14
                    }, s = {
                        normal: 1,
                        word: 2
                    }, n = [], f = function (t) {
                        n.push(t), r += t.getWidth()
                    }, h = function (t, e) {
                        e = X.objectMerge(o, e), f(X.svg.newCharElement(t, r, c, e))
                    }, a = s.normal, k = "", d = 0; d < t.length; d++) {
                    var w = t.charAt(d);
                    switch (w) {
                        case "[":
                            a = s.word;
                            continue;
                        case "]":
                            a = s.normal,
                                function (t) {
                                    var e = t.match(/1=(.+)/);
                                    if (e) {
                                        var o = X.parseKeySignature(e[1]).first();
                                        return h("1", {
                                            width: l
                                        }), h("=", {
                                            width: l
                                        }), o.accidental && h(o.accidental, {
                                            dy: -2,
                                            "font-size": i - 2,
                                            width: l
                                        }), void h(o.key, {
                                            width: l
                                        })
                                    }
                                    if (e = t.match(/bpm=(.+)/)) {
                                        var s = X.newBPM(e[1]),
                                            n = X.svg.newElement({
                                                bpm: s
                                            });
                                        n.newRect(r, c, s.getWidth(), s.getHeight()), n.toSvg = function () {
                                            var t = this.getFirstRect();
                                            return this.bpm.toSvg(t.getXLeft(), t.getYCenter())
                                        }, f(n)
                                    }
                                }(k), k = "";
                            continue
                    }
                    switch (a) {
                        case s.normal:
                            h(w, {
                                width: X.fontWidth(w, i)
                            });
                            break;
                        case s.word:
                            k += w
                    }
                }
                return X.svg.mergeElements(n)
            }
        }, X.svg.newCharElement = function (t, e, r, c) {
            var i = X.oneValue(c["font-size"], 14),
                l = X.oneValue(c.width, i),
                o = X.oneValue(c.height, i);
            X.removeKeys(c, ["width", "height"]);
            var s = X.svg.newElement();
            return s.newRect(e, r, l, o), s.toSvg = function () {
                return X.svg.renderText(t, X.extend({
                    x: this.getXCenter(),
                    y: this.getYCenter() + .5 * i,
                    fill: X.config.fontColor,
                    "text-anchor": "middle",
                    "xml:space": "preserve",
                    "font-size": i
                }, c))
            }, s
        }, X.svg.newRestElement = function (t) {
            var e = 1.2,
                r = X.svg.newElement();
            return r.newRect(t.getXLeft(), -5, e, 10), r.newRect(t.getXRight() - e, -5, e, 10), r.newRect(t.getXLeft(), -e, t.getWidth(), 2.4), r.newRect(t.getXCenter() - 14, -14, 28, 21), r.toSvg = function () {
                for (var e, r = this.getRects(), c = "", i = 0; 3 > i; i++) e = r[i], c += X.svg.renderLine({
                    x1: e.getXCenter(),
                    y1: e.getYTop(),
                    x2: e.getXCenter(),
                    y2: e.getYBottom(),
                    "stroke-width": e.getWidth(),
                    stroke: X.config.fontColor,
                    fill: "none"
                });
                return e = r[3], c += X.svg.renderText(t.value, {
                    x: e.getXCenter(),
                    y: e.getYCenter(),
                    "xml:space": "preserve",
                    "font-size": 14,
                    "text-anchor": "middle",
                    fill: X.config.fontColor
                })
            }, r
        }, X.svg.pushExtraElements = function () {
            X.svg.pushExtraElementAbove(), X.isGraphShow() && X.svg.pushGraphElementAbove(), X.isLyricShow() && X.svg.pushLyricElementBelow()
        }, X.svg.pushTopTipElementAbove = function () {
            X.arrayEach(X.rows, function (t) {
                var e = X.cellsToNotes(t.cells),
                    r = X.svg.newElementGroup();
                X.arrayEach(e, function (t) {
                    X.arrayEach(t.topTips, function (e) {
                        r.pushElementAbove(X.svg.newTopTipToElements(e, t.getXCenter(), 0), 1)
                    })
                }), t.pushElementAbove(r.toElement(), 1)
            })
        }, X.svg.pushExtraElementAbove = function () {
            X.arrayEach(X.rows, function (t) {
                var e = X.cellsToNotes(t.cells),
                    r = X.svg.newElementGroup();
                X.arrayEach(e, function (t) {
                    if (X.config.showChordName && X.config.showChordName && r.pushElementAbove(X.svg.newChordNamesToElements(t.chordNames, t.getXLeft(), 0), 1), X.config.showFingerNum && X.notEmtpy(t.fingerNums) && r.pushElementAbove(X.svg.newFingerNumsToElements(t.fingerNums, t.getXLeft(), 0), 1), X.arrayEach(t.comments, function (e) {
                            var c = X.svg.newCommentElement(e, {
                                x: t.getXLeft() - 7
                            });
                            c && r.pushElementAbove(c, 1)
                        }), t.flag) {
                        var e = X.svg.newCommentElement(X.sprintf("(%s)", t.flag), {
                            x: t.getXLeft() - X.fontWidth("(", 16),
                            fontSize: 16,
                            fontColor: X.config.purpleColor,
                            fontWeight: "bold"
                        });
                        e && r.pushElementAbove(e, 1)
                    }
                }), t.pushElementAbove(r.toElement(), 1)
            })
        }, X.svg.pushGraphElementAbove = function () {
            X.arrayEach(X.rows, function (t) {
                var e = [],
                    r = X.cellsToNotes(t.cells);
                X.arrayEach(r, function (t) {
                    if ("none" != t.instrument && 0 != t.scale && !t.isDummyNote() && t.graph) {
                        var r = X.svg.newGraphElement(t, X.midi.keyNameToMidiNumber(t.fingering), t.instrument);
                        e.push(r)
                    }
                }), e.length < 1 || t.pushElementAbove(X.svg.mergeElements(e), 10)
            })
        }, X.svg.pushLyricElementBelow = function () {
            X.arrayEach(X.rows, function (t) {
                var e = X.cellsToNotes(t.cells),
                    r = X.arrayMax(e, function (t) {
                        return t.lyrics.length
                    });
                r && X.for(0, r, function (r) {
                    var c = X.svg.newElementGroup();
                    X.arrayEach(e, function (t) {
                        if (r < t.lyrics.length) {
                            var e = t.lyrics[r],
                                i = X.newText(e, {
                                    fontSize: X.getLyricFontSize()
                                });
                            X.arrayEach(i.toElements(), function (e) {
                                e.transform(t.getXLeft() - X.getLyricLeftWidth(t.lyrics[r]), 0), c.pushElementBelow(e, 10)
                            })
                        }
                    }), c.elements.length && t.pushElementBelow(c.toElement(), 10)
                })
            })
        }, X.svg.newTmpTimeSignatureElements = function (t) {
            return X.svg.newElements({
                init: function () {
                    this.push(X.svg.newCellElement(t, {
                        toSvg: function () {
                            var e = "";
                            return e += X.svg.renderUse("linshi_paihao_fenxian", {
                                x: this.getXCenter(),
                                y: this.getYCenter()
                            }), e += X.svg.renderUse("linshi_paihao_shuzi_" + t.n, {
                                x: this.getXCenter(),
                                y: this.getYCenter() - 10
                            }), e += X.svg.renderUse("linshi_paihao_shuzi_" + t.m, {
                                x: this.getXCenter(),
                                y: this.getYCenter() + 10
                            })
                        }
                    }))
                }
            })
        }, X.svg.newPreludeBeginElement = function (t) {
            return X.svg.newElements({
                init: function () {
                    this.newRectElement({
                        x: t.getXLeft(),
                        y: t.getYTop() - 10,
                        width: X.config.preluleWidth,
                        height: X.config.preludeHeight,
                        toSvg: function () {
                            var t = {
                                x: this.getXRight() + 10,
                                y: this.getYCenter()
                            };
                            return X.svg.renderUse("kuohu_zuo", t)
                        }
                    })
                }
            })
        }, X.svg.newPreludeEndElement = function (t) {
            return X.svg.newElements({
                init: function () {
                    this.newRectElement({
                        x: t.getXLeft(),
                        y: t.getYTop() - 10,
                        width: X.config.preluleWidth,
                        height: X.config.preludeHeight,
                        toSvg: function () {
                            var t = {
                                x: this.getXLeft() - 8,
                                y: this.getYCenter()
                            };
                            return X.svg.renderUse("kuohu_you", t)
                        }
                    })
                }
            })
        }, X.svg.newGroupBeginElement = function () {
            var t = X.svg.newElement();
            return t.newRect(0, 0, X.config.groupBeginWidth, 0), t.toSvg = function () {
                var t = this.getFirstRect(),
                    e = t.getXCenter(),
                    r = t.getYTop() + 6.5,
                    c = t.getYBottom() - 6.5,
                    i = "";
                return 3 > c - r ? i : (i += X.svg.renderLine({
                    x1: e,
                    y1: r,
                    x2: e,
                    y2: c,
                    "stroke-width": 4,
                    stroke: X.config.fontColor,
                    fill: "none"
                }), i += X.svg.renderLine({
                    x1: e + 4.5,
                    y1: r - 1.5,
                    x2: e + 4.5,
                    y2: c + 1.5,
                    "stroke-width": 2,
                    stroke: X.config.fontColor,
                    fill: "none"
                }), i += X.svg.renderUse("shengbufu_shang", {
                    x: e + 25.5,
                    y: r + 6.5
                }), i += X.svg.renderUse("shengbufu_xia", {
                    x: e + 25.5,
                    y: c - 6.5
                }))
            }, t
        }, X.svg.newUnitBeginElement = function () {
            var t = X.svg.newElement();
            return t.newRect(0, 0, X.config.groupBeginWidth, 80), t.toSvg = function () {
                var t = this.getFirstRect();
                return X.svg.renderUse("dakuohu_zuo_2", {
                    x: t.getXCenter(),
                    y: t.getYCenter()
                })
            }, t
        }, X.svg.newUnitEndElement = function (t) {
            var e = X.svg.newElement();
            return e.newRect(t.x, -40, t.getWidth(), 80), e.toSvg = function () {
                var t = this.getFirstRect();
                return X.svg.renderUse("dakuohu_you_2", {
                    x: t.getXCenter(),
                    y: t.getYCenter()
                })
            }, e
        }, X.svg.newGraphElement = function (t, e, r) {
            var c = X.svg.newElement(),
                i = 0,
                l = 0,
                o = 0;
            switch (r) {
                case "a6":
                case "o6":
                case "x8":
                case "x10":
                    i = 45, l = 50, o = t.getXCenter() - .5 * i;
                    break;
                case "r8b":
                case "r8g":
                    i = 45, l = 112.5, o = t.getXCenter() - .5 * i;
                    break;
                case "p8":
                    i = 45, l = 113.625, o = t.getXCenter() - .5 * i;
                    break;
                case "h7":
                    i = 45, l = 97.5, o = t.getXCenter() - .5 * i;
                    break;
                case "o12":
                    i = 60, l = 60, o = t.getXCenter() - .4 * i;
                    break;
                case "o3":
                    i = 80, l = 80, o = t.getXCenter() - .4 * i
            }
            return c.newRect(o, 0, i, l), c.toSvg = function () {
                var c = {
                        C: "#dcb4ff",
                        "#C": "#80baea",
                        bD: "#e2aa58",
                        D: "#e2cd78",
                        "#D": "#ea8a80",
                        bE: "#ea8a80",
                        E: "#80ea80",
                        "#E": "#fbbbbb",
                        bF: "#fbbbbb",
                        F: "#B3E085",
                        "#F": "#ea80c1",
                        bG: "#ea80c1",
                        G: "#87cefa",
                        "#G": "#b693f0",
                        bA: "#efc99d",
                        A: "#e2b178",
                        "#A": "#78e2af",
                        bB: "#78e2af",
                        B: "#e278b4",
                        "#B": "f5d391",
                        bC: "f5d391"
                    },
                    i = this.getFirstRect(),
                    l = X.midi.getNoteRealMidiNumber(t, e),
                    o = {
                        x: i.getXLeft(),
                        y: i.getYTop(),
                        fill: c[X.midi.midiNumberToShortName(e)],
                        width: i.getWidth(),
                        height: i.getHeight()
                    },
                    s = function (t, e, r) {
                        return t.length < 1 ? "" : (r || (r = X.config.blueColor), X.svg.renderText(t, {
                            x: e.getXCenter(),
                            y: e.getYTop() - 6,
                            fill: r,
                            "text-anchor": "middle",
                            "font-size": 12
                        }))
                    };
                switch (r) {
                    case "o6":
                        var n = [1, 1, 2, 2, 3, 3, 4, 8, 5, 14, 6, 9, 7, 10, 13, 11, 15, 12, 12],
                            f = ["轻吹", "", "轻吹", "", "轻吹", "", "", "", "", "", "", "", "", "", "", "", "", "", "重吹"],
                            h = l - 72 + 1;
                        return h = Math.max(h, 0), h = Math.min(h, n.length - 1), X.svg.renderUse("tdOutline" + n[h], o) + s(f[h], i);
                    case "a6":
                        return n = [28, 29, 24, 25, 21, 26, 23, 19, 22, 18, 17, 20, 15, 13, 11, 9, 14, 10, 7, 3, 6, 2, 1, 4, 12, 45, 8, 41, 5, 42, 39, 35, 38, 34, 33, 36, 44, 44, 40, 40, 37], h = l - 60, h = Math.max(h, 0), h = Math.min(h, n.length - 1), X.svg.renderUse("td6tOutline" + n[h], o);
                        //陶笛图片
                    case "ak":
                        return n = [28, 29, 24, 25, 21, 26, 23, 19, 22, 18, 17, 20, 15, 13, 11, 9, 14, 10, 7, 3, 6, 2, 1, 4, 12, 45, 8, 41, 5, 42, 39, 35, 38, 34, 33, 36, 44, 44, 40, 40, 37], h = l - 60, h = Math.max(h, 0), h = Math.min(h, n.length - 1), X.svg.renderUse("jt6tOutline" + n[h], o);
                    case "o12":
                        return n = [1, 2, 3, 4, 5, 6, 21, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 16, 19, 20], h = l - 72 + 3, 0 > h ? X.svg.renderUse("tdo12Outline" + n.first(), o) + s("轻吹", i) : h >= n.length ? X.svg.renderUse("tdo12Outline" + n.last(), o) + s("重吹", i) : X.svg.renderUse("tdo12Outline" + n[h], o);
                    case "o3":
                        return h = l - 72 + 60, 57 > h ? X.svg.renderUse("tdo3Outline57", o) + s("轻吹", i) : h > 91 ? X.svg.renderUse("tdo3Outline91", o) + s("重吹", i) : X.svg.renderUse("tdo3Outline" + h, o);
                    case "x8":
                        return h = l - 72 + 60, 60 > h ? X.svg.renderUse("x8Outline60", o) + s("轻吹", i) : 61 == h ? X.svg.renderUse("x8Outline62", o) + s("轻吹", i) : h > 77 ? X.svg.renderUse("x8Outline77", o) + s("重吹", i) : X.svg.renderUse("x8Outline" + h, o);
                    case "x10":
                        return h = l - 72 + 60, 60 > h ? X.svg.renderUse("x10Outline60", o) + s("轻吹", i) : 61 == h ? X.svg.renderUse("x10Outline62", o) + s("轻吹", i) : h > 79 ? X.svg.renderUse("x10Outline79", o) + s("重吹", i) : X.svg.renderUse("x10Outline" + h, o);
                    case "r8b":
                        return h = l, h = Math.max(h, 72), h = Math.min(h, 98), X.svg.renderUse("recorder8Outline" + h + "B", o);
                    case "r8g":
                        return h = l, h = Math.max(h, 72), h = Math.min(h, 98), X.svg.renderUse("recorder8Outline" + h + "G", o);
                    case "p8":
                        return h = l, h = Math.max(60, h), h = Math.min(91, h), X.svg.renderUse("xiao8Outline" + h, o);
                    case "h7":
                        return 72 > l ? X.svg.renderUse("hulusi7Outline72", o) + s("缓吹", i) : X.svg.renderUse("hulusi7Outline" + Math.min(86, l), o);
                    default:
                        return ""
                }
            }, c
        }, X.keyword = {
            KEYWORDS: {
                DOT: ["."],
                TIE: ["$"],
                ACCIDENTAL: ["#", "b", "n"],
                UNDER_BAR: ["_", "=", "x", "/"],
                OCTAVE: [",", "'", '"', "g", "d"],
                LEFT_TIP: ["lsu", "lsd", "zsh", "zxh", "zsl", "zxl", "zd"],
                RIGHT_TIP: ["su", "sd", "sh", "xh", "sl", "xl", "duo", "v"],
                TOP_TIP: [">", "^", "*", "~~", "~", "!~", "atempo", "cresc", "dim", "da", "die", "fff", "ff", "fp", "fe", "ft~", "ft", "f", "k", "l", "mf", "mp", "mu", "md", "ml", "mu~", "md~", "ml~", "pp", "p", "rit", "r", "sfp", "sf", "sp", "st", "tr~", "tr", "te", "t", "dun", "bo", "nb", "chang", "chan", "cc", "yc", "bc", "hs"]
            },
            prepareKeywordMap: function () {
                var t = this.KEYWORDS,
                    e = {};
                for (var r in t) X.arrayEach(t[r], function (t) {
                    e[t] = r
                });
                this.KEYWORD_MAP = e
            },
            getKeywordList: function () {
                var t = [];
                for (var e in this.KEYWORD_MAP) e = "'" == e ? '"\'"' : "'" + e + "'", t.push(e);
                return t = t.sort().reverse(), t.join("|")
            },
            getKeywordType: function (t) {
                return t = t.toLowerCase(), this.KEYWORD_MAP[t]
            }
        }, X.keyword.prepareKeywordMap(), X.newKeyword = function (t) {
            return X.newCell("keyword", {
                value: t,
                getKeywordType: function () {
                    return X.keyword.getKeywordType(this.value)
                },
                getKeywordValue: function () {
                    switch (this.getKeywordType()) {
                        case "DOT":
                        case "TIE":
                            return 1;
                        case "ACCIDENTAL":
                            return this.accidentalValue();
                        case "UNDER_BAR":
                            return this.underBarValue();
                        case "OCTAVE":
                            return this.octaveValue();
                        case "LEFT_TIP":
                        case "RIGHT_TIP":
                        case "TOP_TIP":
                            return this.tipValue()
                    }
                },
                octaveValue: function () {
                    switch (this.value) {
                        case ",":
                        case "d":
                            return -1;
                        case "D":
                            return -2;
                        case "'":
                        case "g":
                            return 1;
                        case "G":
                        case '"':
                            return 2;
                        default:
                            return 0
                    }
                },
                underBarValue: function () {
                    switch (this.value) {
                        case "_":
                        case "/":
                        case "x":
                            return 1;
                        case "=":
                            return 2;
                        default:
                            return 0
                    }
                },
                accidentalValue: function () {
                    switch (this.value) {
                        case "b":
                            return -1;
                        case "#":
                            return 1;
                        default:
                            return 0
                    }
                },
                tipValue: function () {
                    var t = this.value;
                    switch (t = t.replace(/[{}\s]+/g, "").toLowerCase()) {
                        case ">":
                            return "accent_right";
                        case "^":
                            return "accent_up";
                        case "v":
                            return "aeration";
                        case "te":
                        case "bc":
                            return "tenuto";
                        case "tu":
                            return "turn";
                        case "tr":
                        case "chan":
                            return "trill";
                        case "tr~":
                        case "cc":
                            return "trill_long";
                        case "~~":
                        case "chang":
                            return "long_tone";
                        case "mu":
                        case "bo":
                        case "~":
                            return "mordent_up";
                        case "ml":
                        case "md":
                        case "nb":
                        case "!~":
                            return "mordent_down";
                        case "mu~":
                            return "mordent_up_long";
                        case "ml~":
                        case "md~":
                            return "mordent_down_long";
                        case "st":
                        case "dun":
                            return "staccato";
                        case "su":
                        case "sh":
                        case "lsu":
                        case "zsh":
                            return "slide_up";
                        case "sd":
                        case "xh":
                        case "lsd":
                        case "zxh":
                            return "slide_down";
                        case "sl":
                        case "zsl":
                            return "li_up";
                        case "xl":
                        case "zxl":
                            return "li_down";
                        case "duo":
                        case "zd":
                            return "duo";
                        case "fe":
                        case "yc":
                        case "*":
                            return "fermata";
                        case "ft":
                        case "hs":
                            return "flutter_tongue";
                        case "ft~":
                            return "flutter_tongue_long";
                        case "da":
                            return "da_tip";
                        case "die":
                            return "die_tip";
                        case "t":
                            return "t_tip";
                        case "k":
                            return "k_tip";
                        case "l":
                            return "l_tip";
                        case "r":
                            return "r_tip";
                        default:
                            return t
                    }
                }
            })
        }, X.isKeyword = function (t) {
            return t.type && "keyword" == t.type
        }, X.newBarMark = function (t, e, r) {
            return X.newCell("bar_mark", {
                markType: t,
                n: X.oneValue(e, 0),
                value: X.oneValue(r, 0)
            })
        }, X.cellToBarMark = function (t) {
            var e, r = function (t) {
                    return {
                        start: "start",
                        jump: "jump",
                        fine: "fine",
                        ds: "ds",
                        dc: "dc",
                        s: "start",
                        j: "jump",
                        repeat: "repeat"
                    } [t.replace(/\d+/, "").toLowerCase()]
                },
                c = 0,
                i = 0;
            switch (t.type) {
                case "tag":
                    e = r(t.value), e && (c = X.matchNumber(t.value));
                    break;
                case "key_value":
                    e = r(t.key), e && (c = X.matchNumber(t.key), i = t.value)
            }
            return e ? X.newBarMark(e, c, i) : t
        }, X.lex = {
            context: {
                lang: "default"
            },
            cellsWithPos: function (t, e, r) {
                return e.firstLine = r.first_line, e.firstColumn = r.first_column, e.lastLine = r.last_line, e.lastColumn = r.last_column, t.push(e), t
            },
            newSlur: function (t, e) {
                switch (t += "", t.toLowerCase()) {
                    case "l":
                        return X.newSlur(X.slurType.leftSlur, e);
                    case "r":
                        return X.newSlur(X.slurType.rightSlur, e);
                    case "c":
                        return X.lex.newChord(e);
                    case "s":
                        return X.lex.newSetNote(e)
                }
                var r = X.newSlur(X.slurType.slur, e);
                return t.match(/\d+/) ? (r.n = t, r) : ("t" == t && (r.isTied = !0), r)
            },
            getRootNote: function (t) {
                var e = X.arrayGrep(t, function (t) {
                    return X.isNote(t) && t.isMasterNote()
                });
                return e.isEmpty() ? void 0 : e.last()
            },
            newChord: function (t) {
                var e = X.newCells();
                t = X.parser.handleCells(t);
                var r = this.getRootNote(t);
                if (!r) return e;
                var c = X.cellsToNotes(t),
                    i = !0;
                return X.arrayEach(c, function (t) {
                    t == r && (i = !1), i ? (t.rootNote = r, r.chordNotes.push(t)) : e.push(t)
                }), e
            },
            newSetNote: function (t) {
                var e = X.newCells();
                t = X.parser.handleCells(t);
                var r = this.getRootNote(t);
                if (!r) return e;
                e.push(X.newTag(X.groupType.multi));
                var c = X.cellsToNotes(t),
                    i = !0;
                return X.arrayEach(c, function (t) {
                    e.push(t), t == r && (i = !1), i && (t.rootNote = r, e.push(X.lex.newPart("%%")))
                }), e.push(X.newTag(X.groupType.multi + "_end")), e
            },
            newSection: function (t, e) {
                var r = function (t) {
                        return X.newBoldText(t, {
                            fontColor: X.config.purpleColor,
                            fontSize: 18
                        })
                    },
                    c = t.replace(":", "").replace("%", " ");
                if (c.match(/^\s*$/)) return r(c + "　");
                var i = [];
                i.push(X.newCell("section_begin", {
                    name: c
                }));
                var l = c + "：";
                switch (e) {
                    case X.sectionType.flag:
                        i.push(X.newCell("flag", {
                            value: c
                        }));
                        break;
                    case X.sectionType.mark:
                        i.push(r(l));
                        break;
                    case X.sectionType.section:
                        i.push(r(l)), c.match(/^[a-z0-9]$/) || i.unshift(X.newBreakRow());
                        break;
                    case X.sectionType.paragraph:
                        i.push(r(l)), c.match(/^[A-Z]/) && (i.unshift(X.newBreakRow()), i.push(X.newBreakRow()))
                }
                return X.newCells(i)
            },
            newPart: function (t) {
                var e = "",
                    r = t.match(/%([^%]*)%/);
                return r && (e = r[1]), X.newKeyValue(X.kNewPart, e)
            },
            newTmpKeySignature: function (t) {
                return X.newKeyValue("tmp_key_signature", t)
            },
            newKeyword: function (t) {
                var e = this,
                    r = [];
                switch (e.context.lang) {
                    case X.langType.jembe:
                        r = e.newJembeKeyword(t)
                }
                return r.length > 0 ? X.newCells(r) : X.newKeyword(t)
            },
            newJembeKeyword: function (t) {
                var e = [];
                if (!t.match(/^[BTASMLRbtas]+$/)) return e;
                for (var r = 0; r < t.length; r++) switch (t[r]) {
                    case "B":
                    case "T":
                    case "A":
                    case "S":
                    case "M":
                    case "b":
                    case "t":
                    case "a":
                    case "s":
                        e.push(X.newNote(0, t[r]));
                        break;
                    case "L":
                    case "R":
                        e.push(X.newKeyword(t[r].toLowerCase()))
                }
                return e
            }
        }, X.sectionType = {
            mark: "mark",
            flag: "flag",
            section: "section",
            paragraph: "paragraph"
        }, X.langType = {
            "default": "default",
            jembe: "jembe"
        };
    var U = function () {
        return {
            EOF: 1,
            parseError: function (t, e) {
                if (!this.yy.parser) throw new Error(t);
                this.yy.parser.parseError(t, e)
            },
            setInput: function (t, e) {
                console.log(this)
                // console.log(e)
                return this.yy = e || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, console.log(this), this
            },
            input: function () {
                var t = this._input[0];
                return this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t
            },
            unput: function (t) {
                var e = t.length,
                    r = t.split(/(?:\r\n?|\n)/g);
                this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.offset -= e;
                var c = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), r.length - 1 && (this.yylineno -= r.length - 1);
                var i = this.yylloc.range;
                return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: r ? (r.length === c.length ? this.yylloc.first_column : 0) + c[c.length - r.length].length - r[0].length : this.yylloc.first_column - e
                }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - e]), this.yyleng = this.yytext.length, this
            },
            more: function () {
                return this._more = !0, this
            },
            reject: function () {
                return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                })
            },
            less: function (t) {
                this.unput(this.match.slice(t))
            },
            pastInput: function () {
                var t = this.matched.substr(0, this.matched.length - this.match.length);
                return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
            },
            upcomingInput: function () {
                var t = this.match;
                return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
            },
            showPosition: function () {
                var t = this.pastInput(),
                    e = new Array(t.length + 1).join("-");
                return t + this.upcomingInput() + "\n" + e + "^"
            },
            test_match: function (t, e) {
                var r, c, i;
                if (this.options.backtrack_lexer && (i = {
                        yylineno: this.yylineno,
                        yylloc: {
                            first_line: this.yylloc.first_line,
                            last_line: this.last_line,
                            first_column: this.yylloc.first_column,
                            last_column: this.yylloc.last_column
                        },
                        yytext: this.yytext,
                        match: this.match,
                        matches: this.matches,
                        matched: this.matched,
                        yyleng: this.yyleng,
                        offset: this.offset,
                        _more: this._more,
                        _input: this._input,
                        yy: this.yy,
                        conditionStack: this.conditionStack.slice(0),
                        done: this.done
                    }, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), c = t[0].match(/(?:\r\n?|\n).*/g), c && (this.yylineno += c.length), this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: c ? c[c.length - 1].length - c[c.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                    }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], r = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), r) return r;
                if (this._backtrack) {
                    for (var l in i) this[l] = i[l];
                    return !1
                }
                return !1
            },
            next: function () {
                if (this.done) return this.EOF;
                this._input || (this.done = !0);
                var t, e, r, c;
                this._more || (this.yytext = "", this.match = "");
                for (var i = this._currentRules(), l = 0; l < i.length; l++)
                    if ((r = this._input.match(this.rules[i[l]])) && (!e || r[0].length > e[0].length)) {
                        if (e = r, c = l, this.options.backtrack_lexer) {
                            if (!1 !== (t = this.test_match(r, i[l]))) return t;
                            if (this._backtrack) {
                                e = !1;
                                continue
                            }
                            return !1
                        }
                        if (!this.options.flex) break
                    } return e ? !1 !== (t = this.test_match(e, i[c])) && t : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                })
            },
            lex: function () {
                var t = this.next();
                return t || this.lex()
            },
            begin: function (t) {
                this.conditionStack.push(t)
            },
            popState: function () {
                return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0]
            },
            _currentRules: function () {
                return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules
            },
            topState: function (t) {
                return t = this.conditionStack.length - 1 - Math.abs(t || 0), t >= 0 ? this.conditionStack[t] : "INITIAL"
            },
            pushState: function (t) {
                this.begin(t)
            },
            stateStackSize: function () {
                return this.conditionStack.length
            },
            options: {},
            performAction: function (t, e, r) {
                switch (r) {
                    case 0:
                        return 48;
                    case 1:
                        return 49;
                    case 2:
                        return 53;
                    case 3:
                        return 50;
                    case 4:
                        return 51;
                    case 5:
                        return 52;
                    case 6:
                        return 26;
                    case 7:
                        return 18;
                    case 8:
                        return 19;
                    case 9:
                        return 30;
                    case 10:
                        return 34;
                    case 11:
                        return 36;
                    case 12:
                        return 38;
                    case 13:
                        return 40;
                    case 14:
                        return 42;
                    case 15:
                        return 44;
                    case 16:
                        return 10;
                    case 17:
                        return 9;
                    case 18:
                        return 6;
                    case 19:
                        return 8;
                    case 20:
                        return 7;
                    case 21:
                        return 46;
                    case 22:
                        return 27;
                    case 23:
                        return 24;
                    case 24:
                        return ">>";
                    case 25:
                        return 35;
                    case 26:
                        return 37;
                    case 27:
                        return 32;
                    case 28:
                        return 39;
                    case 29:
                        return 33;
                    case 30:
                        return 43;
                    case 31:
                        return 41;
                    case 32:
                        return 45;
                    case 33:
                        return 31;
                    case 34:
                        return 47;
                    case 35:
                        return 28;
                    case 36:
                        return 25;
                    case 37:
                        return 29;
                    case 38:
                        return 12;
                    case 39:
                        return 11;
                    case 40:
                        return 14;
                    case 41:
                    case 42:
                        return 13;
                    case 43:
                        return 15;
                    case 44:
                        return 16;
                    case 45:
                        break;
                    case 46:
                        return 17
                }
            },
            rules: [/^(?:\|\|\|)/, /^(?:\|\|)/, /^(?:\|:)/, /^(?:\|)/, /^(?::\|:)/, /^(?::\|)/, /^(?::)/, /^(?:\{lyric\}[\w\W]*?\{\/lyric\})/, /^(?:\{![\w\W]*?!\})/, /^(?:\{\{)/, /^(?:\{>)/, /^(?:\{<)/, /^(?:\{=)/, /^(?:\{~)/, /^(?:\{-)/, /^(?:\{\+)/, /^(?:\{\d+\/\d+\})/, /^(?:\{1=[^}]+\})/, /^(?:\{[^:}]+:[^}]+\})/, /^(?:\{\/[^}]+\})/, /^(?:\{[^}]+\})/, /^(?:\[([\d,-]+|e|s|hs|st):)/, /^(?:\(([a-z]|\d+):)/, /^(?:\()/, /^(?:>>)/, /^(?:>\})/, /^(?:<\})/, /^(?:=\}\})/, /^(?:=\})/, /^(?:-\}\})/, /^(?:-\})/, /^(?:~\})/, /^(?:\+\})/, /^(?:\}\})/, /^(?:\])/, /^(?:\)@)/, /^(?:\))/, /^(?:@\()/, /^(?:%[^%]*%)/, /^(?:[A-Z]\d{0,1}:(?=[^|]))/, /^(?:[0-9HX\-])/, /^(?:~~|~|zxl|zxh|zsl|zsh|zd|yc|xl|xh|x|v|tr~|tr|te|t|su|st|sp|sl|sh|sfp|sf|sd|rit|pp|p|nb|n|mu~|mu|mp|ml~|ml|mf|md~|md|lsu|lsd|k|hs|g|ft~|ft|fp|fff|ff|fe|f|duo|dun|dim|die|da|d|cresc|chang|chan|cc|bo|bc|b|atempo|_|\^|>|=|\/|\.|,|\*|\$|#|"|!~|')/, /^(?:[BTASMLRbtas])/, /^(?:[\u4e00-\u9fa5]+)/, /^(?:\n+)/, /^(?:\s+)/, /^(?:$)/],
            conditions: {
                INITIAL: {
                    rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
                    inclusive: !0
                }
            }
        }
    }();
    return I.lexer = U, t.prototype = I, I.Parser = t, new t
}();


"undefined" != typeof require && "undefined" != typeof exports && (exports.parser = parser, exports.Parser = parser.Parser, exports.parse = function () {
    return parser.parse.apply(parser, arguments)
}, exports.main = function (t) {
    t[1] || (console.log("Usage: " + t[0] + " FILE"), process.exit(1));
    var e = require("fs").readFileSync(require("path").normalize(t[1]), "utf8");
    return exports.parser.parse(e)
}, "undefined" != typeof module && require.main === module && exports.main(process.argv.slice(1)));