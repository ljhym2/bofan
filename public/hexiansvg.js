var initdiv = function () {
    "use strict";
    const e = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        s = {
            C: 0,
            "C#": 1,
            Db: 1,
            D: 2,
            "D#": 3,
            Eb: 3,
            E: 4,
            F: 5,
            "F#": 6,
            Gb: 6,
            G: 7,
            "G#": 8,
            Ab: 8,
            A: 9,
            "A#": 10,
            Bb: 10,
            B: 11
        },
        i = {
            "A#": "Bb",
            Db: "C#",
            "D#": "Eb",
            Gb: "F#",
            Ab: "G#"
        },
        t = ["1", "1#", "2", "2#", "3", "4", "4#", "5", "5#", "6", "6#", "7"],
        r = ["C", "G", "D", "A", "E", "B", "F#", "C#", "G#", "Eb", "Bb", "F"],
        n = {
            Am: "C",
            Em: "G",
            Bm: "D",
            "F#m": "A",
            "C#m": "E",
            "G#m": "B",
            "D#m": "F#",
            "A#m": "C#",
            Fm: "G#",
            Cm: "Eb",
            Gm: "Bb",
            Dm: "F"
        },
        f = /^[A-G][b#]?/,
        d = /^[A-G](b|#)?m?/,
        g = /^([A-G][b#]?)(\d)/;

    function h(e) {
        const s = m(e);
        if (!s) return e;
        const t = i[s];
        return t ? e.replace(s, t) : e
    }

    function a(i, t) {
        if (!t) return i;
        const r = m(i);
        if (!r) return i;
        return e[((s[r] + t) % 12 + 12) % 12] + i.substr(r.length)
    }

    function o(e) {
        const s = (e = e.replace("maj", "")).match(d);
        return s ? "maj" === s[2] ? s[0][0] : s[0] : e
    }

    function m(e) {
        const s = e.match(f);
        return s ? s[0] : null
    }

    function u(e) {
        if (0 === e.length) return null;
        const s = {};

        function i(e) {
            return s[r[e % 12]] || 0
        }
        let t;
        e.forEach((e => {
            let i = o(e);
            i = h(i), i = function (e) {
                if (void 0 !== n[e]) return n[e];
                return e
            }(i), s[i] = (s[i] || 0) + 1
        }));
        let f = -1,
            d = -1,
            g = -1;
        for (let e = 0; e < r.length; ++e) {
            const s = i(e),
                n = s + i(e + 1),
                h = i(e + 11) + n;
            c([h, s, n], [f, d, g]) > 0 && (d = s, g = n, f = h, t = r[e])
        }
        return t
    }

    function c(e, s) {
        for (let i = 0; i < e.length; ++i)
            if (e[i] !== s[i]) return e[i] - s[i];
        return 0
    }
    const l = {
            name: "ukulele",
            tuning: ["G4", "C4", "E4", "A4"],
            chords: {
                A: "{define: A frets 2 1 0 0 fingers 2 1 0 0}",
                Am: "{define: Am frets 2 0 0 0 fingers 2 0 0 0}",
                A7: "{define: A7 frets 0 1 0 0 fingers 0 1 0 0}",
                A7sus4: "{define: A7sus4 frets 0 2 0 0 fingers 0 2 0 0}",
                Am7: "{define: Am7 frets 0 0 0 0 fingers 0 0 0 0}",
                AmM7: "{define: AmM7 frets 1 0 0 0 fingers 1 0 0 0}",
                Adim: "{define: Adim frets 2 3 5 3 fingers 1 2 4 3}",
                Adim7: "{define: Adim7 frets 2 3 2 3 fingers 1 3 2 4}",
                Amaj7: "{define: Amaj7 frets 1 1 0 0 fingers 1 2 0 0}",
                A6: "{define: A6 frets 2 4 2 4 fingers 1 3 2 4}",
                Asus2: "{define: Asus2 frets 2 4 5 2 fingers 2 3 4 1}",
                Asus4: "{define: Asus4 frets 2 2 0 0 fingers 1 2 0 0}",
                Aaug: "{define: Aaug frets 2 1 1 4 fingers 2 1 1 4 add: string 1 fret 1 finger 1 add: string 4 fret 1 finger 1}",
                Am6: "{define: Am6 frets 2 4 2 3 fingers 1 3 1 2 add: string 2 fret 2 finger 1}",
                A9: "{define: A9 frets 0 1 0 2 fingers 0 1 0 2}",
                Aadd9: "{define: Aadd9 frets 2 1 0 2 fingers 2 1 0 3}",
                Bb: "{define: Bb frets 3 2 1 1 fingers 3 2 1 1}",
                Bbm: "{define: Bbm frets 3 1 1 1 fingers 3 1 1 1 add: string 1 fret 1 finger 1}",
                Bb7: "{define: Bb7 frets 1 2 1 1 fingers 1 2 1 1 add: string 2 fret 1 finger 1}",
                Bb7sus4: "{define: Bb7sus4 frets 1 3 1 1 fingers 1 3 1 1 add: string 2 fret 1 finger 1}",
                Bbm7: "{define: Bbm7 frets 1 1 1 1 fingers 1 1 1 1}",
                BbmM7: "{define: BbmM7 frets 2 1 1 1 fingers 2 1 1 1}",
                Bbdim: "{define: Bbdim frets 3 1 0 1 fingers 4 1 0 2}",
                Bbdim7: "{define: Bbdim7 frets 0 1 0 1 fingers 0 1 0 2}",
                Bbmaj7: "{define: Bbmaj7 frets 3 2 1 0 fingers 3 2 1 0}",
                Bb6: "{define: Bb6 frets 0 2 1 1 fingers 0 2 1 1}",
                Bbm6: "{define: Bbm6 frets 0 1 1 1 fingers 0 1 1 1}",
                Bbsus2: "{define: Bbsus2 frets 3 0 1 1 fingers 3 0 1 1}",
                Bbsus4: "{define: Bbsus4 frets 3 3 1 1 fingers 3 4 1 1}",
                Bbaug: "{define: Bbaug frets 3 2 2 5 fingers 2 1 1 4 add: string 1 fret 2 finger 1 add: string 4 fret 2 finger 1}",
                Bb9: "{define: Bb9 frets 1 2 1 3 fingers 2 1 4 3}",
                Bbadd9: "{define: Bbadd9 frets 3 2 1 3 fingers 3 2 1 4}",
                "Bbm7-5": "{define: Bbm7-5 frets 1 1 0 1 fingers 1 2 0 3}",
                B: "{define: B frets 4 3 2 2 fingers 3 2 1 1}",
                Bm: "{define: Bm frets 4 2 2 2 fingers 3 1 1 1 add: string 1 fret 2 finger 1}",
                Bm6: "{define: Bm6 frets 1 2 2 2 fingers 1 2 3 4}",
                B7: "{define: B7 frets 2 3 2 2 fingers 1 2 1 1 add: string 2 fret 2 finger 1}",
                B7sus4: "{define: B7sus4 frets 2 4 2 2 fingers 1 3 1 1 add: string 2 fret 2 finger 1}",
                Bm7: "{define: Bm7 frets 2 2 2 2 fingers 1 1 1 1}",
                BmM7: "{define: BmM7 frets 3 2 2 2 fingers 2 1 1 1}",
                Bdim: "{define: Bdim frets 4 2 1 2 fingers 4 2 1 3}",
                Bdim7: "{define: Bdim7 frets 1 2 1 2 fingers 1 3 2 4}",
                Bmaj7: "{define: Bmaj7 frets 3 3 2 2 fingers 2 2 1 1}",
                B6: "{define: B6 frets 1 3 2 2 fingers 1 4 2 3}",
                Bsus2: "{define: Bsus2 frets 4 1 2 2 fingers 4 1 2 3}",
                Bsus4: "{define: Bsus4 frets 4 4 2 2 fingers 2 4 1 1}",
                Baug: "{define: Baug frets 4 3 3 2 fingers 4 2 3 1}",
                B9: "{define: B9 frets 2 3 2 4 fingers 1 3 2 4}",
                Badd9: "{define: Badd9 frets 4 3 2 4 fingers 3 2 1 4}",
                C: "{define: C frets 0 0 0 3 fingers 0 0 0 3}",
                Cm: "{define: Cm frets 0 3 3 3 fingers 0 1 2 3}",
                C7: "{define: C7 frets 0 0 0 1 fingers 0 0 0 1}",
                C7sus4: "{define: C7sus4 frets 0 0 1 1 fingers 0 0 1 1}",
                Cm7: "{define: Cm7 frets 3 3 3 3 fingers 1 1 1 1}",
                CmM7: "{define: CmM7 frets 4 3 3 3 fingers 2 1 1 1}",
                Cdim: "{define: Cdim frets 0 3 2 3 fingers 0 3 2 4}",
                Cdim7: "{define: Cdim7 frets 2 3 2 3 fingers 1 3 2 4}",
                Cmaj7: "{define: Cmaj7 frets 0 0 0 2 fingers 0 0 0 1}",
                C6: "{define: C6 frets 0 0 0 0 fingers 0 0 0 0}",
                Cm6: "{define: Cm6 frets 2 3 3 3 fingers 1 3 3 3}",
                Csus2: "{define: Csus2 frets 0 2 3 3 fingers 0 1 2 3}",
                Csus4: "{define: Csus4 frets 0 0 1 3 fingers 0 0 1 3}",
                Caug: "{define: Caug frets 1 0 0 3 fingers 1 0 0 4}",
                C9: "{define: C9 frets 0 2 0 1 fingers 0 2 0 1}",
                Cadd9: "{define: Cadd9 frets 0 2 0 3 fingers 0 1 0 3}",
                "C#": "{define: C# frets 1 1 1 4 fingers 1 1 1 4 add: string 4 fret 1 finger 1}",
                "C#m": "{define: C#m frets 1 4 4 4 fingers 1 3 3 3 add: string 2 fret 1 finger 1 add: string 3 fret 1 finger 1 add: string 4 fret 1 finger 1}",
                "C#7": "{define: C#7 frets 1 1 1 2 fingers 1 1 1 2 add: string 4 fret 1 finger 1}",
                "C#7sus4": "{define: C#7sus4 frets 1 1 2 2 fingers 1 1 2 3 add: string 4 fret 1 finger 1}",
                "C#m7": "{define: C#m7 frets 1 4 4 2 fingers 1 3 3 2}",
                "C#mM7": "{define: C#mM7 frets 1 0 0 4 fingers 1 0 0 4}",
                "C#dim": "{define: C#dim frets 0 1 0 4 fingers 0 1 0 4}",
                "C#dim7": "{define: C#dim7 frets 0 1 0 1 fingers 0 1 0 2}",
                "C#maj7": "{define: C#maj7 frets 1 1 1 3 fingers 1 1 1 3 add: string 4 fret 1 finger 1}",
                "C#6": "{define: C#6 frets 1 1 1 1 fingers 1 1 1 1}",
                "C#m6": "{define: C#m6 frets 1 1 0 1 fingers 1 2 0 3}",
                "C#sus2": "{define: C#sus2 frets 1 3 4 4 fingers 1 2 3 3}",
                "C#sus4": "{define: C#sus4 frets 1 1 2 4 fingers 1 1 2 4 add: string 4 fret 1 finger 1}",
                "C#aug": "{define: C#aug frets 2 1 1 4 fingers 2 1 1 4 add: string 1 fret 1 finger 1 add: string 4 fret 1 finger 1}",
                "C#9": "{define: C#9 frets 1 3 1 2 fingers 1 4 2 3}",
                "C#add9": "{define: C#add9 frets 1 3 1 4 fingers 1 3 1 4 add: string 2 fret 1 finger 1 add: string 4 fret 1 finger 1}",
                D: "{define: D frets 2 2 2 0 fingers 1 2 3 0}",
                Dm: "{define: Dm frets 2 2 1 0 fingers 2 3 1 0}",
                Dm6: "{define: Dm6 frets 0 2 1 2 fingers 0 2 1 3}",
                D7: "{define: D7 frets 2 0 2 0 fingers 1 0 2 0}",
                D7sus4: "{define: D7sus4 frets 2 2 3 3 fingers 1 2 3 4}",
                Dm7: "{define: Dm7 frets 2 2 1 3 fingers 2 3 1 4}",
                DmM7: "{define: DmM7 frets 2 2 1 4 fingers 2 3 1 4}",
                Ddim: "{define: Ddim frets 1 2 1 0 fingers 1 3 2 0}",
                Ddim7: "{define: Ddim7 frets 1 2 1 2 fingers 1 3 2 4}",
                Dmaj7: "{define: Dmaj7 frets 2 2 2 4 fingers 1 1 1 2 add: string 4 fret 2 finger 1}",
                D6: "{define: D6 frets 2 2 2 2 fingers 2 2 2 2}",
                Dsus2: "{define: Dsus2 frets 2 2 0 0 fingers 1 2 0 0}",
                Dsus4: "{define: Dsus4 frets 0 2 3 0 fingers 0 1 2 0}",
                Daug: "{define: Daug frets 3 2 2 5 fingers 2 1 1 4 add: string 1 fret 2 finger 1 add: string 4 fret 2 finger 1}",
                D9: "{define: D9 frets 2 4 2 3 fingers 1 4 2 3}",
                Dadd9: "{define: Dadd9 frets 2 4 2 5 fingers 1 3 1 4 add: string 2 fret 2 finger 1 add: string 4 fret 2 finger 1}",
                Eb: "{define: Eb frets 0 3 3 1 fingers 0 2 2 1}",
                Ebm: "{define: Ebm frets 3 3 2 1 fingers 3 3 2 1}",
                Eb7: "{define: Eb7 frets 3 3 3 4 fingers 1 1 1 2 add: string 4 fret 3 finger 1}",
                Eb7sus4: "{define: Eb7sus4 frets 3 3 4 4 fingers 1 1 2 3}",
                Ebm7: "{define: Ebm7 frets 3 3 2 4 fingers 2 2 1 4}",
                EbmM7: "{define: EbmM7 frets 3 3 2 5 fingers 2 3 1 4}",
                Ebdim: "{define: Ebdim frets 2 3 2 0 fingers 1 3 2 0}",
                Ebdim7: "{define: Ebdim7 frets 2 3 2 3 fingers 1 3 2 4}",
                Ebmaj7: "{define: Ebmaj7 frets 3 3 3 5 fingers 1 1 1 2 add: string 4 fret 3 finger 1}",
                Eb6: "{define: Eb6 frets 3 3 3 3 fingers 1 1 1 1}",
                Ebm6: "{define: Ebm6 frets 3 3 2 3 fingers 2 3 1 4}",
                Ebsus2: "{define: Ebsus2 frets 3 3 1 1 fingers 2 3 1 1}",
                Ebsus4: "{define: Ebsus4 frets 1 3 4 1 fingers 2 3 4 1}",
                Ebaug: "{define: Ebaug frets 0 3 3 2 fingers 0 2 2 1}",
                Eb9: "{define: Eb9 frets 0 1 1 1 fingers 0 1 2 3}",
                Ebadd9: "{define: Ebadd9 frets 0 3 1 1 fingers 0 3 1 1}",
                E: "{define: E frets 4 4 4 2 fingers 2 3 4 1}",
                Em: "{define: Em frets 0 4 3 2 fingers 0 3 2 1}",
                E7: "{define: E7 frets 1 2 0 2 fingers 1 2 0 3}",
                E7sus4: "{define: E7sus4 frets 2 2 0 2 fingers 2 3 0 4}",
                Em6: "{define: Em6 frets 4 4 3 4 fingers 2 3 1 4}",
                Em7: "{define: Em7 frets 0 2 0 2 fingers 0 1 0 2}",
                EmM7: "{define: EmM7 frets 0 3 0 2 fingers 0 2 0 1}",
                Edim: "{define: Edim frets 0 4 0 1 fingers 0 3 0 1}",
                Edim7: "{define: Edim7 frets 0 1 0 1 fingers 0 1 0 2}",
                Emaj7: "{define: Emaj7 frets 1 3 0 2 fingers 1 3 0 2}",
                E6: "{define: E6 frets 4 4 4 4 fingers 1 1 1 1}",
                Esus2: "{define: Esus2 frets 4 4 2 2 fingers 3 4 1 1}",
                Esus4: "{define: Esus4 frets 2 4 0 2 fingers 2 4 0 1}",
                Eaug: "{define: Eaug frets 1 0 0 3 fingers 1 0 0 4}",
                E9: "{define: E9 frets 1 2 2 2 fingers 1 2 3 4}",
                Eadd9: "{define: Eadd9 frets 1 4 2 2 fingers 1 4 2 3}",
                F: "{define: F frets 2 0 1 0 fingers 2 0 1 0}",
                Fm: "{define: Fm frets 1 0 1 3 fingers 1 0 2 4}",
                F7: "{define: F7 frets 2 3 1 0 fingers 2 3 1 0}",
                F7sus4: "{define: F7sus4 frets 3 3 1 3 fingers 2 3 1 4}",
                Fm6: "{define: Fm6 frets 1 2 1 3 fingers 1 2 1 3 add: string 2 fret 1 finger 1 add: string 4 fret 1 finger 1}",
                Fm7: "{define: Fm7 frets 1 3 1 3 fingers 1 3 2 4}",
                FmM7: "{define: FmM7 frets 1 4 1 3 fingers 1 4 1 3 add: string 4 fret 1 finger 1}",
                Fdim: "{define: Fdim frets 1 x 1 2 fingers 1 0 2 3}",
                Fdim7: "{define: Fdim7 frets 1 2 1 2 fingers 1 3 2 4}",
                Fmaj7: "{define: Fmaj7 frets 2 4 1 3 fingers 2 4 1 3}",
                F6: "{define: F6 frets 2 2 1 3 fingers 2 3 1 4}",
                Fsus2: "{define: Fsus2 frets 0 0 1 3 fingers 0 0 1 3}",
                Fsus4: "{define: Fsus4 frets 3 0 1 1 fingers 3 0 1 2}",
                F6sus2: "{define: F6sus2 frets 0 0 1 3 fingers 0 0 1 3}",
                F6sus4: "{define: F6sus4 frets 3 0 1 1 fingers 3 0 1 1}",
                F6aug: "{define: F6aug frets 2 1 1 4 fingers 2 1 1 4 add: string 1 fret 1 finger 1 add: string 4 fret 1 finger 1}",
                F9: "{define: F9 frets 2 3 3 3 fingers 1 2 3 4}",
                Faug: "{define: Faug frets 2 1 1 0 fingers 3 1 2 0}",
                Fadd9: "{define: Fadd9 frets 0 0 1 0 fingers 0 0 1 0}",
                "F#": "{define: F# frets 3 1 2 1 fingers 3 1 2 1 add: string 1 fret 1 finger 1 add: string 3 fret 1 finger 1}",
                "F#m": "{define: F#m frets 2 1 2 0 fingers 2 1 3 0}",
                "F#7": "{define: F#7 frets 3 4 2 4 fingers 2 3 1 4}",
                "F#7sus4": "{define: F#7sus4 frets 4 4 2 4 fingers 2 3 1 4}",
                "F#m7": "{define: F#m7 frets 2 4 2 4 fingers 1 3 2 4}",
                "F#mM7": "{define: F#mM7 frets 2 5 2 4 fingers 1 4 1 3 add: string 4 fret 2 finger 1}",
                "F#dim": "{define: F#dim frets 2 0 2 0 fingers 2 0 3 0}",
                "F#dim7": "{define: F#dim7 frets 2 3 2 3 fingers 1 3 2 4}",
                "F#maj7": "{define: F#maj7 frets 3 5 2 4 fingers 2 4 1 3}",
                "F#m6": "{define: F#m6 frets 2 1 2 4 fingers 2 1 3 4}",
                "F#6": "{define: F#6 frets 3 3 2 4 fingers 2 3 1 4}",
                "F#sus2": "{define: F#sus2 frets 1 1 2 4 fingers 1 1 2 4 add: string 3 fret 1 finger 1 add: string 4 fret 1 finger 1}",
                "F#sus4": "{define: F#sus4 frets 4 1 2 2 fingers 4 1 2 3}",
                "F#aug": "{define: F#aug frets 3 2 2 5 fingers 2 1 1 4 add: string 1 fret 2 finger 1 add: string 4 fret 2 finger 1}",
                "F#9": "{define: F#9 frets 1 1 0 1 fingers 1 2 0 3}",
                "F#add9": "{define: F#add9 frets 1 1 2 1 fingers 1 1 2 1 add: string 3 fret 1 finger 1}",
                G: "{define: G frets 0 2 3 2 fingers 0 1 3 2}",
                Gm: "{define: Gm frets 0 2 3 1 fingers 0 2 3 1}",
                Gm6: "{define: Gm6 frets 0 2 0 1 fingers 0 2 0 1}",
                G7: "{define: G7 frets 0 2 1 2 fingers 0 2 1 3}",
                G7sus4: "{define: G7sus4 frets 0 2 1 3 fingers 0 2 1 4}",
                Gm7: "{define: Gm7 frets 0 2 1 1 fingers 0 2 1 1}",
                GmM7: "{define: GmM7 frets 0 2 2 1 fingers 0 2 3 1}",
                Gdim: "{define: Gdim frets 0 1 3 1 fingers 0 1 4 2}",
                Gdim7: "{define: Gdim7 frets 0 1 0 1 fingers 0 1 0 2}",
                Gmaj7: "{define: Gmaj7 frets 0 2 2 2 fingers 0 1 2 3}",
                G6: "{define: G6 frets 0 2 0 2 fingers 0 1 0 2}",
                Gsus2: "{define: Gsus2 frets 0 2 3 0 fingers 0 1 3 0}",
                Gsus4: "{define: Gsus4 frets 0 2 3 3 fingers 0 1 3 4}",
                Gaug: "{define: Gaug frets 0 3 3 2 fingers 0 2 3 1}",
                G9: "{define: G9 frets 2 2 1 2 fingers 2 3 1 4}",
                Gadd9: "{define: Gadd9 frets 2 2 3 2 fingers 1 1 2 1 add: string 3 fret 2 finger 1}",
                "G#": "{define: G# frets 5 3 4 3 fingers 3 1 2 1 add: string 1 fret 3 finger 1 add: string 3 fret 3 finger 1}",
                "G#m": "{define: G#m frets 1 3 4 2 fingers 1 3 4 2}",
                "G#7": "{define: G#7 frets 1 3 2 3 fingers 1 3 2 4}",
                "G#7sus4": "{define: G#7sus4 frets 1 3 2 4 fingers 1 3 2 4}",
                "G#m7": "{define: G#m7 frets 1 3 2 2 fingers 1 4 2 3}",
                "G#mM7": "{define: G#mM7 frets 0 3 4 2 fingers 0 2 3 1}",
                "G#dim": "{define: G#dim frets 1 2 x 2 fingers 1 2 0 3}",
                "G#dim7": "{define: G#dim7 frets 1 2 1 2 fingers 1 3 2 4}",
                "G#maj7": "{define: G#maj7 frets 1 3 3 3 fingers 1 3 3 3}",
                "G#6": "{define: G#6 frets 1 3 1 3 fingers 1 3 2 4}",
                "G#m6": "{define: G#m6 frets 1 3 1 2 fingers 1 3 1 2 add: string 2 fret 1 finger 1 add: string 4 fret 1 finger 1}",
                "G#sus2": "{define: G#sus2 frets 1 3 4 1 fingers 2 3 4 1}",
                "G#sus4": "{define: G#sus4 frets 1 3 4 4 fingers 1 2 3 3}",
                "G#aug": "{define: G#aug frets 1 0 0 3 fingers 1 0 0 4}",
                "G#9": "{define: G#9 frets 1 0 2 1 fingers 1 0 3 2}",
                "G#add9": "{define: G#add9 frets 3 3 4 3 fingers 1 1 2 1 add: string 3 fret 3 finger 1}",
                "C-F": "{define: C-F frets 2 0 1 3 fingers 2 0 1 3}",
                "D/A": "{define: D/A frets 2 2 2 0 fingers 1 2 3 0}",
                "Dm/C": "{define: Dm/C frets 2 2 1 3 fingers 2 3 1 4}",
                "Fm7/C": "{define: Fm7/C frets 1 3 1 3 fingers 1 3 2 4}",
                "G/B": "{define: G/B frets 0 2 3 2 fingers 0 1 3 2}",
                "G/F#": "{define: G/F# frets 0 2 2 2 fingers 0 1 2 3}",
                "G/F": "{define: G/F frets 0 2 1 2 fingers 0 2 1 3}",
                "G7/B": "{define: G7/B frets 0 2 1 2 fingers 0 2 1 3}"
            }
        },
        x = {
            name: "guitar",
            tuning: ["E2", "A2", "D3", "G3", "B3", "E4"],
            chords: {
                A: "{define: A frets x r0 2 2 2 0 fingers 0 0 1 2 3 0}",
                Am: "{define: Am frets x r0 2 2 1 0 fingers 0 0 2 3 1 0}",
                Adim: "{define: Adim frets x r0 1 2 1 x fingers 0 0 2 3 1 0}",
                Aaug: "{define: Aaug frets x r0 3 2 2 1 fingers 0 0 4 2 3 1}",
                Amaj7: "{define: Amaj7 frets x r0 2 1 2 0 fingers 0 0 2 1 3 0}",
                Am7: "{define: Am7 frets x r0 2 0 1 0 fingers 0 0 2 0 1 0}",
                A7: "{define: A7 frets x r0 2 0 2 0 fingers 0 0 2 0 3 0}",
                Adim7: "{define: Adim7 frets x r0 1 2 1 2 fingers 0 0 1 2 1 2}",
                AmM7: "{define: AmM7 frets x r0 2 1 1 0 fingers 0 0 3 1 2 0}",
                Aaug7: "{define: Aaug7 frets x r0 3 1 2 1 fingers 0 0 4 1 3 2}",
                "Am7-5": "{define: Am7-5 frets x r0 1 2 1 3 fingers 0 0 1 3 2 4}",
                Asus2: "{define: Asus2 frets x r0 2 2 0 0 fingers 0 0 1 2 0 0 }",
                Asus4: "{define: Asus4 frets x r0 0 2 3 0 fingers 0 0 0 1 2 0}",
                A7sus2: "{define: A7sus2 frets x r0 2 0 0 0 fingers 0 0 1 0 0 0}",
                A7sus4: "{define: A7sus4 frets x r0 0 0 3 0 fingers 0 0 0 0 3 0}",
                A6: "{define: A6 frets x r0 4 2 2 0 fingers 0 0 4 2 2 0}",
                Am6: "{define: Am6 frets x r0 4 2 1 0 fingers 0 0 3 2 1 0}",
                Amaj9: "{define: Amaj9 frets x r0 2 4 2 4 fingers 0 0 1 3 2 4}",
                Am9: "{define: Am9 frets x r0 2 4 1 3 fingers 0 0 2 4 1 3}",
                A9: "{define: A9 frets x r0 2 4 2 3 fingers 0 0 1 4 2 3}",
                Aadd9: "{define: Aadd9 frets x r0 2 4 2 0 fingers 0 0 1 3 2 0}",
                Amadd9: "{define: Amadd9 frets x r0 2 4 1 0 fingers 0 0 2 3 1 0}",
                A5: "{define: A5 frets x r0 2 2 x x fingers 0 0 1 2 0 0}",
                "A/C#": "{define: A/C# frets x 4 2 2 2 x fingers 0 3 1 1 1 0}",
                "A/E": "{define: A/E frets 0 0 2 2 2 x fingers 0 0 1 1 1 0}",
                Bb: "{define: Bb frets x r1 0 3 3 1 fingers 0 1 0 3 4 2}",
                Bbm: "{define: Bbm frets x r1 3 3 2 1 fingers 0 1 3 4 2 1}",
                Bbdim: "{define: Bbdim frets x r1 2 3 2 0 fingers 0 1 2 4 3 0}",
                Bbaug: "{define: Bbaug frets x r1 0 3 3 2 fingers 0 1 0 3 4 2}",
                Bbmaj7: "{define: Bbmaj7 frets x r1 0 2 3 1 fingers 0 1 0 3 4 2}",
                Bbm7: "{define: Bbm7 frets x r1 3 1 2 1 fingers 0 1 3 0 2 1}",
                Bb7: "{define: Bb7 frets x r1 0 1 3 1 fingers 0 1 0 1 3 1}",
                Bbdim7: "{define: Bbdim7 frets x r1 2 0 2 0 fingers 0 1 2 0 3 0}",
                BbmM7: "{define: BbmM7 frets x r1 3 2 2 1 fingers 0 1 3 2 2 1}",
                Bbaug7: "{define: Bbaug7 frets x r1 0 2 3 2 fingers 0 1 0 2 4 3}",
                "Bbm7-5": "{define: Bbm7-5 frets x r1 2 1 2 0 fingers 0 1 3 2 4 0}",
                Bbsus2: "{define: Bbsus2 frets x r1 3 3 1 1 fingers 0 1 2 3 1 1}",
                Bbsus4: "{define: Bbsus4 frets x 1 1 3 4 1 fingers 0 1 1 2 3 1}",
                Bb7sus2: "{define: Bb7sus2 frets x r1 3 1 1 1 fingers 0 1 3 1 1 1}",
                Bb7sus4: "{define: Bb7sus4 frets x r1 1 1 4 1 fingers 0 1 1 1 2 1}",
                Bb6: "{define: Bb6 frets x r1 0 0 3 1 fingers 0 1 0 0 3 2}",
                Bbm6: "{define: Bbm6 frets x r1 3 0 2 1 fingers 0 1 4 0 3 2 }",
                Bbmaj9: "{define: Bbmaj9 frets x r1 0 2 1 1 fingers 0 1 0 4 2 3}",
                Bbm9: "{define: Bbm9 frets r6 8 6 6 6 8 fingers 1 2 1 1 1 3}",
                Bb9: "{define: Bb9 frets x r1 0 1 1 1 fingers 0 1 0 2 3 4 }",
                Bbadd9: "{define: Bbadd9 frets x r1 0 3 1 1 fingers 0 1 0 4 2 3}",
                Bbmadd9: "{define: Bbmadd9 frets x r1 3 1 2 1 fingers 0 1 3 1 2 1}",
                Bb5: "{define: Bb5 frets x r1 3 3 x x fingers 0 1 3 4 0 0}",
                B: "{define: B frets x r2 4 4 4 2 fingers 0 1 2 3 4 1}",
                Bm: "{define: Bm frets x r2 4 4 3 2 fingers 0 1 3 2 4 1}",
                Bdim: "{define: Bdim frets x r2 0 4 3 1 fingers 0 2 0 4 3 1}",
                Baug: "{define: Baug frets x r2 1 0 0 3 fingers 0 2 1 0 0 3}",
                Bmaj7: "{define: Bmaj7 frets x r2 1 3 0 2 fingers 0 2 1 4 0 3}",
                Bm7: "{define: Bm7 frets x r2 4 2 3 2 fingers 0 1 3 1 4 1}",
                B7: "{define: B7 frets x r2 1 2 0 2 fingers 0 2 1 3 0 4}",
                Bdim7: "{define: Bdim7 frets x r2 0 1 0 1 fingers 0 3 0 1 0 2}",
                BmM7: "{define: BmM7 frets x r2 0 3 0 2 fingers 0 1 0 3 0 2}",
                Baug7: "{define: Baug7 frets x r2 1 3 0 3 fingers 0 2 1 3 0 4}",
                "Bm7-5": "{define: Bm7-5 frets x r2 0 2 0 1 fingers 0 2 0 3 0 1}",
                Bsus2: "{define: Bsus2 frets x r2 4 4 2 2 fingers 0 1 2 3 1 1 }",
                Bsus4: "{define: Bsus4 frets x r2 2 4 5 2 fingers 0 1 1 2 3 1}",
                B7sus2: "{define: B7sus2 frets x r2 4 2 2 2 fingers 0 1 2 1 1 1}",
                B7sus4: "{define: B7sus4 frets x 2 4 2 0 0 fingers 0 1 3 2 0 0}",
                B6: "{define: B6 frets x r2 1 1 0 2 fingers 0 3 1 2 0 4}",
                Bm6: "{define: Bm6 frets x r2 0 1 0 2 fingers 0 2 0 1 0 3}",
                Bmaj9: "{define: Bmaj9 frets r7 4 4 4 4 6 fingers 3 1 1 1 1 2}",
                Bm9: "{define: Bm9 frets x r2 0 2 2 2 fingers 0 1 0 2 3 4}",
                B9: "{define: B9 frets r7 4 4 4 4 5 fingers 3 1 1 1 1 2}",
                Badd9: "{define: Badd9 frets x r2 4 2 4 2 fingers 0 1 2 1 3 1}",
                Bmadd9: "{define: Bmadd9 frets x r2 0 4 2 2 fingers 0 1 0 4 2 3}",
                B5: "{define: B5 frets x r2 4 4 x x fingers 0 1 3 4 0 0}",
                C: "{define: C frets x r3 2 0 1 0 fingers 0 3 2 0 1 0}",
                Cm: "{define: Cm frets x r3 1 0 1 3 fingers 0 2 1 0 4 3}",
                Cdim: "{define: Cdim frets x x 1 2 1 2 fingers 0 0 1 2 3 4}",
                Caug: "{define: Caug frets x r3 2 1 1 0 fingers 0 4 3 1 2 0}",
                Cmaj7: "{define: Cmaj7 frets x r3 2 0 0 0 fingers 0 2 1 0 0 0}",
                Cm7: "{define: Cm7 frets x r3 1 3 1 3 fingers 0 2 1 3 1 4}",
                C7: "{define: C7 frets x r3 2 3 1 0 fingers 0 3 2 4 1 0}",
                Cdim7: "{define: Cdim7 frets x r3 1 2 1 2 fingers 0 4 1 2 1 3}",
                CmM7: "{define: CmM7 frets x r3 1 0 0 3 fingers 0 2 1 0 0 3}",
                Caug7: "{define: Caug7 frets x r3 2 1 0 0 fingers 0 3 2 1 0 0}",
                "Cm7-5": "{define: Cm7-5 frets x r3 1 3 1 2 fingers 0 3 1 4 1 2}",
                Csus2: "{define: Csus2 frets x r3 0 0 1 3 fingers 0 2 0 0 1 3}",
                Csus4: "{define: Csus4 frets x r3 3 0 1 1 fingers 0 3 4 0 1 2}",
                C7sus2: "{define: C7sus2 frets x r3 0 3 1 3 fingers 0 2 0 3 1 4}",
                C7sus4: "{define: C7sus4 frets x r3 1 3 1 1 fingers 0 2 1 3 1 1}",
                C6: "{define: C6 frets x r3 2 2 5 3 fingers 0 2 1 1 4 3}",
                Cm6: "{define: Cm6 frets x r3 1 2 1 3 fingers 0 3 1 2 1 4}",
                Cmaj9: "{define: Cmaj9 frets x r3 0 0 0 0 fingers 0 3 0 0 0 0}",
                Cm9: "{define: Cm9 frets x r3 0 3 4 3 fingers 0 1 0 2 4 3}",
                C9: "{define: C9 frets x r3 2 3 3 x fingers 0 2 1 3 4 0}",
                Cadd9: "{define: Cadd9 frets x r3 2 0 3 0 fingers 0 2 1 0 3 0}",
                Cmadd9: "{define: Cmadd9 frets x r3 0 0 4 3 fingers 0 1 0 0 3 2}",
                C5: "{define: C5 frets x r3 5 5 x x fingers 0 1 3 4 0 0}",
                "C/E": "{define: C/E frets r0 3 2 0 1 0 fingers 0 3 2 0 1 0}",
                "C/G": "{define: C/G frets 3 r3 2 0 1 0 fingers 3 4 2 0 1 0}",
                "C#": "{define: C# frets x r4 3 1 2 1 fingers 0 4 3 1 2 1}",
                "C#m": "{define: C#m frets x r4 2 1 2 0 fingers 0 4 2 1 3 0}",
                "C#dim": "{define: C#dim frets x r4 2 0 2 0 fingers 0 4 1 0 2 0}",
                "C#aug": "{define: C#aug frets x r4 3 2 2 5 fingers 0 3 2 1 1 4}",
                "C#maj7": "{define: C#maj7 frets x r4 3 1 1 1 fingers 0 3 2 1 1 1}",
                "C#m7": "{define: C#m7 frets x r4 2 1 0 0 fingers 0 3 2 1 0 0}",
                "C#7": "{define: C#7 frets x r4 3 1 0 1 fingers 0 4 3 1 0 2}",
                "C#dim7": "{define: C#dim7 frets x r4 2 3 2 3 fingers 0 4 1 2 1 3}",
                "C#mM7": "{define: C#mM7 frets x r4 2 1 1 0 fingers 0 4 3 1 2 0}",
                "C#aug7": "{define: C#aug7 frets x r4 3 2 1 1 fingers 0 4 3 2 1 1}",
                "C#m7-5": "{define: C#m7-5 frets x r4 2 0 0 0 fingers 0 2 1 0 0 0}",
                "C#sus2": "{define: C#sus2 frets x r4 1 1 2 4 fingers 0 3 1 1 2 4}",
                "C#sus4": "{define: C#sus4 frets x r4 4 6 7 4 fingers 0 1 1 2 3 1}",
                "C#7sus2": "{define: C#7sus2 frets x r4 1 1 0 4 fingers 0 3 1 2 0 4}",
                "C#7sus4": "{define: C#7sus4 frets x r4 4 1 0 2 fingers 0 3 4 1 0 2}",
                "C#6": "{define: C#6 frets x r4 3 3 6 4 fingers 0 2 1 1 4 3}",
                "C#m6": "{define: C#m6 frets x r4 2 3 2 4 fingers 0 3 1 2 1 4}",
                "C#maj9": "{define: C#maj9 frets x r4 1 1 1 1 fingers 0 2 1 1 1 1}",
                "C#m9": "{define: C#m9 frets x r4 1 1 0 0 fingers 0 3 1 2 0 0}",
                "C#9": "{define: C#9 frets x r4 1 1 0 1 fingers 0 4 1 2 0 3}",
                "C#add9": "{define: C#add9 frets x r4 2 2 3 2 fingers 0 3 1 1 2 1}",
                "C#madd9": "{define: C#madd9 frets x r4 1 1 2 0 fingers 0 4 1 2 3 0}",
                "C#5": "{define: C#5 frets x r4 6 6 x x fingers 0 1 3 4 0 0}",
                D: "{define: D frets x x r0 2 3 2 fingers 0 0 0 1 3 2}",
                Dm: "{define: Dm frets x x r0 2 3 1 fingers 0 0 0 2 3 1}",
                Ddim: "{define: Ddim frets x r1 3 1 3 1 fingers 0 1 2 1 3 1}",
                Daug: "{define: Daug frets x x r0 3 3 2 fingers 0 0 0 2 3 1}",
                Dmaj7: "{define: Dmaj7 frets x x r0 2 2 2 fingers 0 0 0 1 2 3}",
                Dm7: "{define: Dm7 frets x x r0 2 1 1 fingers 0 0 0 3 1 2}",
                D7: "{define: D7 frets x x r0 2 1 2 fingers 0 0 0 2 1 3}",
                Ddim7: "{define: Ddim7 frets x x r0 1 0 1 fingers 0 0 0 1 0 2}",
                DmM7: "{define: DmM7 frets x x r0 2 2 1 fingers 0 0 0 2 3 1}",
                Daug7: "{define: Daug7 frets x x r0 3 2 2 fingers 0 0 0 3 1 2}",
                "Dm7-5": "{define: Dm7-5 frets x x r0 1 1 1 fingers 0 0 0 1 2 3}",
                Dsus2: "{define: Dsus2 frets x x r0 2 3 0 fingers 0 0 0 1 2 0}",
                Dsus4: "{define: Dsus4 frets x x r0 2 3 3 fingers 0 0 0 1 2 3}",
                D7sus2: "{define: D7sus2 frets x x r0 2 1 0 fingers 0 0 0 2 1 0}",
                D7sus4: "{define: D7sus4 frets x x r0 2 1 3 fingers 0 0 0 2 1 3}",
                D6: "{define: D6 frets x x r0 2 0 2 fingers 0 0 0 1 0 2}",
                Dm6: "{define: Dm6 frets x x r0 2 0 1 fingers 0 0 0 2 0 1}",
                Dmaj9: "{define: Dmaj9 frets x r5 2 2 2 2 fingers 0 2 1 1 1 1}",
                Dm9: "{define: Dm9 frets x r1 2 2 1 1 fingers 0 1 2 3 1 1}",
                D9: "{define: D9 frets x r5 4 5 5 x fingers 0 2 1 3 4 0}",
                Dadd9: "{define: Dadd9 frets x r5 2 2 3 2 fingers 0 3 1 1 2 1}",
                Dmadd9: "{define: Dmadd9 frets x r5 2 2 2 5 fingers 0 2 1 1 1 3}",
                D5: "{define: D5 frets x x r0 2 3 x fingers 0 0 0 1 2 0 }",
                "D/F#": "{define: D/F# frets r2 0 0 2 3 2 fingers T 0 0 1 3 2}",
                "D/A": "{define: D/A frets x r0 0 2 3 2 fingers 0 0 0 1 3 2}",
                Eb: "{define: Eb frets x x r1 3 4 3 fingers 0 0 1 2 4 3}",
                Ebm: "{define: Ebm frets x x r1 3 4 2 fingers 0 0 1 3 4 2}",
                Ebdim: "{define: Ebdim frets x x r1 2 4 2 fingers 0 0 1 2 4 3}",
                Ebaug: "{define: Ebaug frets x x r1 4 4 3 fingers 0 0 1 3 4 2}",
                Ebmaj7: "{define: Ebmaj7 frets x x r1 3 3 3 fingers 0 0 1 2 3 4}",
                Ebm7: "{define: Ebm7 frets x x r1 3 2 2 fingers 0 0 1 4 2 3}",
                Eb7: "{define: Eb7 frets x x r1 3 2 3 fingers 0 0 1 3 2 4}",
                Ebdim7: "{define: Ebdim7 frets x x r1 2 1 2 fingers 0 0 1 2 1 3}",
                EbmM7: "{define: EbmM7 frets x x r1 3 3 2 fingers 0 0 1 3 4 2}",
                Ebaug7: "{define: Ebaug7 frets x x r1 4 3 3 fingers 0 0 1 4 2 3}",
                "Ebm7-5": "{define: Ebm7-5 frets x x r1 2 2 2 fingers 0 0 1 2 3 4}",
                Ebsus2: "{define: Ebsus2 frets x x r1 3 4 1 fingers 0 0 1 2 3 1}",
                Ebsus4: "{define: Ebsus4 frets x x r1 3 4 4 fingers 0 0 1 2 3 4}",
                Eb7sus2: "{define: Eb7sus2 frets x x r1 3 2 1 fingers 0 0 1 3 2 1}",
                Eb7sus4: "{define: Eb7sus4 frets x x r1 3 2 4 fingers 0 0 1 3 2 4}",
                Eb6: "{define: Eb6 frets x x r1 3 1 3 fingers 0 0 1 2 1 3}",
                Ebm6: "{define: Ebm6 frets x x r1 3 1 2 fingers 0 0 1 3 1 2}",
                Ebmaj9: "{define: Ebmaj9 frets x x r1 0 3 1 fingers 0 0 1 0 4 2}",
                Ebm9: "{define: Ebm9 frets x r2 3 3 2 2 fingers 0 1 2 3 1 1}",
                Eb9: "{define: Eb9 frets x x r1 0 2 1 fingers 0 0 1 0 3 2}",
                Ebadd9: "{define: Ebadd9 frets x r3 3 3 4 3 fingers 0 3 1 1 2 1}",
                Ebmadd9: "{define: Ebmadd9 frets x r6 3 3 3 6 fingers 0 2 1 1 1 3}",
                Eb5: "{define: Eb5 frets x x r1 3 4 x fingers 0 0 1 3 4 0}",
                E: "{define: E frets r0 2 r2 1 0 0 fingers 0 2 3 1 0 0}",
                Em: "{define: Em frets r0 2 r2 0 0 0 fingers 0 2 3 0 0 0}",
                Edim: "{define: Edim frets x x r2 3 5 3 fingers 0 0 1 2 4 3}",
                Eaug: "{define: Eaug frets r0 3 r2 1 1 0 fingers 0 4 3 1 2 0}",
                Emaj7: "{define: Emaj7 frets r0 2 1 1 0 0 fingers 0 3 1 2 0 0}",
                Em7: "{define: Em7 frets r0 2 2 0 3 0 fingers 0 1 2 0 3 0}",
                E7: "{define: E7 frets r0 2 0 1 0 0 fingers 0 2 0 1 0 0}",
                Edim7: "{define: Edim7 frets r0 1 r2 0 3 0 fingers 0 1 2 0 3 0}",
                EmM7: "{define: EmM7 frets r0 2 1 0 0 0 fingers 0 2 1 0 0 0}",
                Eaug7: "{define: Eaug7 frets r0 3 1 1 1 0 fingers 0 4 1 2 3 0}",
                "Em7-5": "{define: Em7-5 frets r0 1 2 0 3 0 fingers 0 1 2 0 3 0}",
                Esus2: "{define: Esus2 frets x x r2 4 5 2 fingers 0 0 1 2 3 1}",
                Esus4: "{define: Esus4 frets r0 0 r2 2 0 0 fingers 0 0 1 2 0 0}",
                E7sus2: "{define: E7sus2 frets r0 2 4 4 3 0 fingers 0 1 3 4 2 0}",
                E7sus4: "{define: E7sus4 frets r0 0 0 2 0 0 fingers 0 0 0 1 0 0}",
                E6: "{define: E6 frets r0 4 r2 1 0 0 fingers 0 3 2 1 0 0}",
                Em6: "{define: Em6 frets r0 4 r2 0 0 0 fingers 0 2 1 0 0 0}",
                Emaj9: "{define: Emaj9 frets r0 2 4 1 4 0 fingers 0 2 3 1 4 0}",
                Em9: "{define: Em9 frets r0 2 4 0 3 0 fingers 0 1 3 0 2 0}",
                E9: "{define: E9 frets r0 2 4 1 3 0 fingers 0 2 4 1 3 0}",
                Eadd9: "{define: Eadd9 frets r0 2 4 1 0 0 fingers 0 2 3 1 0 0}",
                Emadd9: "{define: Emadd9 frets r0 2 4 0 0 0 fingers 0 1 2 0 0 0}",
                E5: "{define: E5 frets r0 2 r2 0 0 0 fingers 0 1 2 0 0 0}",
                "E/G#": "{define: E/G# frets r4 2 2 1 0 0 fingers 4 2 3 1 0 0}",
                "E/B": "{define: E/B frets 0 r2 2 1 0 0 fingers 0 2 3 1 0 0}",
                F: "{define: F frets r1 3 r3 2 1 1 fingers 1 3 4 2 1 1}",
                Fm: "{define: Fm frets r1 3 r3 1 1 1 fingers 1 2 3 1 1 1}",
                Fdim: "{define: Fdim frets x x r3 1 0 1 fingers 0 0 3 1 0 2}",
                Faug: "{define: Faug frets x x r3 2 2 1 fingers 0 0 4 2 3 1}",
                Fmaj7: "{define: Fmaj7 frets r1 0 3 2 1 0 fingers T 0 3 2 1 0}",
                Fm7: "{define: Fm7 frets r1 3 1 1 1 1 fingers 1 2 1 1 1 1}",
                F7: "{define: F7 frets r1 3 1 2 1 1 fingers 1 3 1 2 1 1}",
                Fdim7: "{define: Fdim7 frets r1 2 0 2 0 2 fingers 1 4 0 2 0 3}",
                FmM7: "{define: FmM7 frets r1 3 2 1 1 1 fingers 1 3 2 1 1 1}",
                Faug7: "{define: Faug7 frets r1 0 r3 2 2 0 fingers 1 0 4 2 3 0 }",
                "Fm7-5": "{define: Fm7-5 frets r1 2 r3 1 4 1 fingers 1 2 3 1 4 1}",
                Fsus2: "{define: Fsus2 frets x x r3 0 1 1 fingers 0 0 3 0 1 2 }",
                Fsus4: "{define: Fsus4 frets r1 1 r3 3 1 1 fingers 1 1 2 3 1 1}",
                F7sus2: "{define: F7sus2 frets x x r3 5 4 3 fingers 0 0 1 3 2 1}",
                F7sus4: "{define: F7sus4 frets r1 1 1 3 1 1 fingers 1 1 1 2 1 1}",
                F6: "{define: F6 frets r1 0 0 2 1 1 fingers 1 0 0 4 2 3}",
                Fm6: "{define: Fm6 frets r1 3 r3 1 3 1 fingers 1 2 3 1 4 1}",
                Fmaj9: "{define: Fmaj9 frets r1 0 2 0 1 1 fingers 1 0 4 0 2 3}",
                Fm9: "{define: Fm9 frets r1 3 1 1 1 3 fingers 1 2 1 1 1 3}",
                F9: "{define: F9 frets r1 0 1 0 1 1 fingers 1 0 2 0 3 4}",
                Fadd9: "{define: Fadd9 frets r1 0 r3 0 1 1 fingers 1 0 4 0 2 3}",
                Fmadd9: "{define: Fmadd9 frets x x r3 0 1 4 fingers 0 0 2 0 1 3}",
                F5: "{define: F5 frets r1 3 r3 x x x fingers 1 3 4 0 0 0 }",
                "F#": "{define: F# frets r2 4 r4 3 2 2 fingers 1 3 4 2 1 1}",
                "F#m": "{define: F#m frets r2 4 r4 2 2 2 fingers 1 2 3 1 1 1}",
                "F#dim": "{define: F#dim frets x x r4 2 1 2 fingers 0 0 4 2 1 3}",
                "F#aug": "{define: F#aug frets x x r4 3 3 2 fingers 0 0 4 2 3 1}",
                "F#maj7": "{define: F#maj7 frets r2 4 3 3 2 2 fingers 1 4 2 3 1 1}",
                "F#m7": "{define: F#m7 frets r2 4 2 2 2 2 fingers 1 2 1 1 1 1}",
                "F#7": "{define: F#7 frets r2 4 2 3 2 2 fingers 1 3 1 2 1 1}",
                "F#dim7": "{define: F#dim7 frets r2 3 4 2 4 2 fingers 1 2 3 1 4 1}",
                "F#mM7": "{define: F#mM7 frets r2 4 3 2 2 2 fingers 1 3 2 1 1 1}",
                "F#aug7": "{define: F#aug7 frets x x r4 3 3 1 fingers 0 0 4 2 3 1}",
                "F#m7-5": "{define: F#m7-5 frets r2 0 r4 2 1 0 fingers 2 0 4 3 1 0}",
                "F#sus2": "{define: F#sus2 frets x x r4 1 2 2 fingers 0 0 4 1 2 3 }",
                "F#sus4": "{define: F#sus4 frets r2 2 r4 4 2 2 fingers 1 1 2 3 1 1}",
                "F#7sus2": "{define: F#7sus2 frets x x r4 1 2 0 fingers 0 0 3 1 2 0}",
                "F#7sus4": "{define: F#7sus4 frets r2 2 2 4 2 2 fingers 1 1 1 2 1 1}",
                "F#6": "{define: F#6 frets r2 2 4 3 2 2 fingers 1 1 3 2 1 1}",
                "F#m6": "{define: F#m6 frets r2 4 r4 2 4 2 fingers 1 2 3 1 4 1}",
                "F#maj9": "{define: F#maj9 frets r2 1 r4 1 2 1 fingers 2 1 4 1 3 1}",
                "F#m9": "{define: F#m9 frets r2 0 4 1 2 0 fingers 2 0 4 1 3 0}",
                "F#9": "{define: F#9 frets r2 4 2 3 2 4 fingers 1 3 1 2 1 4}",
                "F#add9": "{define: F#add9 frets x x r4 3 2 4 fingers 0 0 3 2 1 4}",
                "F#madd9": "{define: F#madd9 frets x x r4 2 2 4 fingers 0 0 2 1 1 3}",
                "F#5": "{define: F#5 frets r2 4 r4 x x x fingers 1 3 4 0 0 0}",
                G: "{define: G frets r3 2 0 0 0 3 fingers 2 1 0 0 0 3}",
                Gm: "{define: Gm frets r3 1 0 0 3 3 fingers 2 1 0 0 3 4 }",
                Gdim: "{define: Gdim frets x x r4 2 1 2 fingers 0 0 4 2 1 3}",
                Gaug: "{define: Gaug frets r3 2 1 0 0 3 fingers 3 2 1 0 0 4}",
                Gmaj7: "{define: Gmaj7 frets r3 2 0 0 0 2 fingers 3 1 0 0 0 2}",
                Gm7: "{define: Gm7 frets r3 5 3 3 3 3 fingers 1 3 1 1 1 1}",
                G7: "{define: G7 frets r3 2 0 0 0 1 fingers 3 2 0 0 0 1}",
                Gdim7: "{define: Gdim7 frets r3 1 2 0 2 0 fingers 4 1 2 0 3 0}",
                GmM7: "{define: GmM7 frets r3 1 0 0 3 2 fingers 3 1 0 0 4 2}",
                Gaug7: "{define: Gaug7 frets r3 2 1 0 0 3 fingers 4 2 1 0 0 3}",
                "Gm7-5": "{define: Gm7-5 frets x x r0 3 2 1 fingers 0 0 0 3 2 1 }",
                Gsus2: "{define: Gsus2 frets r3 0 0 0 3 3 fingers 1 0 0 0 2 3}",
                Gsus4: "{define: Gsus4 frets r3 3 0 0 1 3 fingers 2 3 0 0 1 4}",
                G7sus2: "{define: G7sus2 frets r3 0 3 0 3 3 fingers 1 0 2 0 3 4}",
                G7sus4: "{define: G7sus4 frets r3 3 0 0 1 1 fingers 3 4 0 0 1 2 }",
                G6: "{define: G6 frets r3 2 0 0 0 0 fingers 2 1 0 0 0 0}",
                Gm6: "{define: Gm6 frets r3 1 0 0 3 0 fingers 2 1 0 0 3 0}",
                Gmaj9: "{define: Gmaj9 frets r3 0 0 0 0 2 fingers 2 0 0 0 0 1}",
                Gm9: "{define: Gm9 frets r3 0 0 3 3 1 fingers 2 0 0 3 4 1}",
                G9: "{define: G9 frets r3 0 0 0 0 1 fingers 2 0 0 0 0 1}",
                Gadd9: "{define: Gadd9 frets r3 0 0 0 0 3 fingers 1 0 0 0 0 2}",
                Gmadd9: "{define: Gmadd9 frets r3 0 0 3 3 3 fingers 1 0 0 2 3 4}",
                G5: "{define: G5 frets x x 0 r0 3 3 fingers 0 0 0 0 3 3}",
                "G/B": "{define: G/B frets x 2 0 0 3 3 fingers 0 1 0 0 3 4}",
                "G/D": "{define: G/D frets x x r0 0 0 3 fingers 0 0 0 0 0 3}",
                "G#": "{define: G# frets r4 3 1 1 1 4 fingers 3 2 1 1 1 4}",
                "G#m": "{define: G#m frets r4 6 6 4 4 4 fingers 1 2 3 1 1 1}",
                "G#dim": "{define: G#dim frets r4 2 0 1 0 4 fingers 3 2 0 1 0 4}",
                "G#aug": "{define: G#aug frets x x r6 5 5 4 fingers 0 0 4 2 3 1}",
                "G#maj7": "{define: G#maj7 frets r4 3 1 1 1 3 fingers 4 2 1 1 1 3}",
                "G#m7": "{define: G#m7 frets x x r2 4 4 2 fingers 0 0 0 2 3 1}",
                "G#7": "{define: G#7 frets r4 3 1 1 1 2 fingers 4 3 1 1 1 2}",
                "G#dim7": "{define: G#dim7 frets r4 2 0 1 0 1 fingers 4 3 0 1 0 2}",
                "G#mM7": "{define: G#mM7 frets r4 2 1 0 0 4 fingers 3 2 1 0 0 4}",
                "G#aug7": "{define: G#aug7 frets r4 3 2 0 1 0 fingers 4 3 2 0 1 0}",
                "G#m7-5": "{define: G#m7-5 frets r4 2 0 1 0 2 fingers 4 2 0 1 0 3}",
                "G#sus2": "{define: G#sus2 frets r4 1 1 1 4 4 fingers 2 1 1 1 3 4}",
                "G#sus4": "{define: G#sus4 frets r4 4 r6 6 4 4 fingers 1 1 2 3 1 1}",
                "G#7sus2": "{define: G#7sus2 frets r4 1 1 1 4 2 fingers 3 1 1 1 4 2}",
                "G#7sus4": "{define: G#7sus4 frets r4 4 4 6 4 4 fingers 1 1 1 2 1 1}",
                "G#6": "{define: G#6 frets r4 3 1 1 1 1 fingers 3 2 1 1 1 1}",
                "G#m6": "{define: G#m6 frets r4 2 1 1 4 1 fingers 3 2 1 1 4 1}",
                "G#maj9": "{define: G#maj9 frets r4 1 1 1 1 3 fingers 3 1 1 1 1 2}",
                "G#m9": "{define: G#m9 frets r4 6 4 4 4 6 fingers 1 2 1 1 1 3}",
                "G#9": "{define: G#9 frets r4 1 1 1 1 2 fingers 3 1 1 1 1 2}",
                "G#add9": "{define: G#add9 frets r4 1 1 1 1 4 fingers 2 1 1 1 1 3}",
                "G#madd9": "{define: G#madd9 frets x x r6 3 4 0 fingers 0 0 3 1 2 0}",
                "G#5": "{define: G#5 frets r4 6 6 x x x fingers 1 3 4 0 0 0}"
            }
        },
        C = {
            ukulele: l,
            guitar: x
        },
        b = {},
        E = /{define: ([a-zA-Z0-9#/\-_]+) frets ([\d\sxr]+) fingers ([\d\sT]+)(.*)}/;
    class B {
        static getByDefinition(e) {
            if (!e) return null;
            const s = b[e];
            if (s) return s;
            const i = new B;
            return i.parseFromDefinition(e), b[e] = i, i
        }
        static getByName(e, s) {
            const i = h(s);
            let t = C[e].chords[i];
            return i !== s && t && (t = t.replace(i, s)), B.getByDefinition(t)
        }
        static addByDefinition(e, s) {
            const i = h(e);
            (6 === B.getByDefinition(s).getNumStrings() ? x : l).chords[i] = s
        }
        constructor() {
            this.i = null, this.t = [], this.g = [], this.h = [], this.o = 0
        }
        getName() {
            return this.i
        }
        setName(e) {
            this.i = e
        }
        getDots() {
            return this.t
        }
        getPitches() {
            return this.h
        }
        getRoots() {
            return this.g
        }
        getNumStrings() {
            return this.o
        }
        parseFromDefinition(i) {
            if (!i || 0 === i.trim().length) return;
            const t = i.trim().match(E);
            if (!t || t.length <= 1) return void console.error("Invalid chord definition: " + i);
            this.i = t[1];
            const r = t[2].trim().split(" ").map(((e, s) => {
                    let i = e.trim();
                    return "x" === i ? -1 : (0 === i.indexOf("r") && (this.g.push(s), i = i.substr(1)), parseInt(i))
                })),
                n = t[3].trim().split(" ");
            r.length !== n.length && console.error("Invalid chord definition: " + i), this.o = n.length;
            const f = 6 === this.o ? x.tuning : l.tuning;
            this.h = r.map(((i, t) => i >= 0 ? function (i, t) {
                const r = i.match(g);
                if (!r || 3 !== r.length) throw new Error("Invalid pitch: " + i);
                const n = r[1];
                let f = parseInt(r[2]),
                    d = s[n] + t;
                for (;;)
                    if (d < 0) d += 12, f -= 1;
                    else {
                        if (!(d >= 12)) break;
                        d -= 12, f += 1
                    } if (f <= 0) throw new Error("Too low pitch: " + i + t);
                return e[d] + f
            }(f[t], i) : null)), this.t = function (e, s) {
                const i = [];
                return e.forEach(((e, t) => {
                    e > 0 && i.push({
                        string: t,
                        fret: e,
                        finger: s[t]
                    })
                })), i
            }(r, n)
        }
        toggleDot(e) {
            let s = !0;
            for (let i = this.t.length - 1; i >= 0; --i) {
                const t = this.t[i];
                t.string === e.string && t.fret === e.fret ? (t.finger === e.finger ? this.t.splice(i, 1) : t.finger = e.finger, s = !1) : t.finger === e.finger && t.fret !== e.fret && this.t.splice(i, 1)
            }
            s && this.t.push(e);
            const i = this.toDefinition();
            this.parseFromDefinition(i)
        }
        shiftFret(e) {
            const s = this.getFretRange();
            if (!(s.first + e <= 0 || s.last + e > 30))
                for (let s = 0; s < this.t.length; ++s) {
                    const i = this.t[s];
                    i.fret = Math.max(i.fret + e, 1)
                }
        }
        toDefinition() {
            const e = Array(...new Array(this.o)).map((() => 0)),
                s = Array(...new Array(this.o)).map((() => 0));
            for (let i = 0; i < this.t.length; ++i) {
                const {
                    string: t,
                    fret: r,
                    finger: n
                } = this.t[i];
                e[t] < r && (e[t] = r, s[t] = n)
            }
            return this.getPitches().forEach(((s, i) => {
                s || (e[i] = "x")
            })), this.getRoots().forEach((s => {
                e[s] = "r" + e[s]
            })), `{define: ${this.i} frets ${e.join(" ")} fingers ${s.join(" ")}}`
        }
        getFretRange() {
            let e = -1,
                s = 300;
            for (let i = 0; i < this.t.length; i++) this.t[i].fret > e && (e = this.t[i].fret), this.t[i].fret < s && (s = this.t[i].fret);
            return {
                first: s < 300 ? s : 0,
                last: e > 0 ? e : 0
            }
        }
    }
    class F {
        constructor(e, s, i, t = {}) {
            this.m = i || 1, this.node = this.u("svg", {
                width: e ? e * this.m : "100%",
                height: s ? s * this.m : "100%",
                xmlns: "http://www.w3.org/2000/svg"
            }), this.l = t
        }
        line(e, s, i, t, r) {
            const n = this.u("line", this.p({
                x1: e,
                y1: s,
                x2: i,
                y2: t
            })).attr({
                "stroke-width": r ? r * this.m : .5
            });
            return this.node.appendChild(n), n
        }
        circle(e, s, i) {
            const t = this.u("circle", this.p({
                cx: e,
                cy: s,
                r: i
            })).attr({
                stroke: "none"
            });
            return this.node.appendChild(t), t
        }
        arc(e, s, i, t, r) {
            const n = p(e, s, i, r),
                f = p(e, s, i, t),
                d = r - t <= 180 ? "0" : "1",
                g = ["M", n.x, n.y, "A", i, i, 0, d, 0, f.x, f.y].join(" "),
                h = this.u("path", {
                    d: g,
                    fill: "none"
                });
            return this.node.appendChild(h), h
        }
        rect(e, s, i, t) {
            const r = this.u("rect", this.p({
                x: e,
                y: s,
                width: i,
                height: t
            }));
            return this.node.appendChild(r), r
        }
        cross(e, s, i) {
            const t = i / 2;
            return G([this.line(e - t, s - t, e + t, s + t), this.line(e + t, s - t, e - t, s + t)])
        }
        path(e, s = 0, i = 0, t = 1) {
            Array.isArray(e) && (e = e.map((e => e.join(","))).join(" ")), e = function (e, s, i, t) {
                if (!s && !i && 1 === t) return e;
                return e.split(" ").map((e => {
                    const r = e.match(/([MLCSQ]|^)([-0-9.]+),([-0-9.]+)/);
                    if (!r) return e;
                    const n = parseFloat(r[2]) * t + s,
                        f = parseFloat(r[3]) * t + i;
                    return r[1] + String(n) + "," + String(f)
                })).join(" ")
            }(e, s * this.m, i * this.m, t * this.m);
            const r = this.u("path", {
                d: e,
                "stroke-width": .5
            });
            return this.node.appendChild(r), r
        }
        text(e, s, i, t) {
            const r = this.u("text", this.p({
                    x: e,
                    y: s
                })),
                n = document.createTextNode(i);
            return r.appendChild(n), this.node.appendChild(r), r.attr({
                "font-size": (f = t, d = this.m, Math.sqrt(Math.pow(f, 2) * d)),
                "font-family": "Arial",
                stroke: "none"
            });
            var f, d
        }
        hParallelLines(e, s, i, t, r) {
            const n = [];
            for (let f = 0; f < i; ++f) {
                const i = s + f * r;
                n.push(this.line(e, i, e + t, i))
            }
            return G(n)
        }
        vParallelLines(e, s, i, t, r) {
            const n = [];
            for (let f = 0; f < i; ++f) {
                const i = e + f * r;
                n.push(this.line(i, s, i, s + t))
            }
            return G(n)
        }
        u(e, s) {
            const i = document.createElementNS("http://www.w3.org/2000/svg", e);
            return A(i, Object.assign({}, this.l, s)), i.attr = A.bind(null, i), i
        }
        p(e) {
            const s = Object.assign({}, e);
            for (const e in s) "number" == typeof s[e] && (s[e] *= this.m);
            return s
        }
    }

    function G(e) {
        return {
            attr: s => {
                e.forEach((e => e.attr(s)))
            }
        }
    }

    function A(e, s) {
        for (const i in s) s.hasOwnProperty(i) && e.setAttribute(i, s[i]);
        return e
    }

    function p(e, s, i, t) {
        const r = (t - 90) * Math.PI / 180;
        return {
            x: e + i * Math.cos(r),
            y: s + i * Math.sin(r)
        }
    }
    const D = "#333333";
    class M {
        constructor(e = {}) {
            this.M = Object.assign({
                showText: !0,
                showBarreText: !0,
                barre: !0,
                fretSpace: 12,
                stringSpace: 10,
                dotRadius: 5,
                margin: {
                    left: 12,
                    top: 20,
                    right: 6,
                    bottom: 6
                },
                colors: {
                    dots: "#555555",
                    dotText: "#ffffff",
                    text: "#333333"
                },
                fonts: {
                    dot: 8,
                    text: 13,
                    fret: 9
                }
            }, e), this.j = 4, this._ = {}
        }
        plot(e, s, i = 1) {
            if (!s.getName()) return;
            const t = this.L(s, i);
            this._[t] || (this._[t] = this.k(s, i));
            const r = this._[t];
            e.appendChild(document.importNode(r.node, !0))
        }
        k(e, s) {
            const i = (e.getNumStrings() - 1) * this.M.stringSpace + this.M.margin.left + this.M.margin.right,
                t = this.j * this.M.fretSpace + this.M.margin.top + this.M.margin.bottom,
                r = new F(i, t, s, {
                    stroke: D,
                    fill: D
                });
            return this.draw(r, e, {
                x: 0,
                y: 0
            }), r
        }
        draw(e, s, i) {
            const t = this.M.fretSpace,
                r = this.M.stringSpace,
                n = this.M.dotRadius,
                f = this.M.fonts.fret;
            let d = this.M.fonts.dot;
            d < 8 && (d = 0);
            const g = this.M.fonts.text,
                h = {
                    x: this.M.margin.left + i.x,
                    y: this.M.margin.top + i.y
                },
                a = h.x,
                o = h.y + t / 2;
            this.v(e, s.getNumStrings(), t, r, h, s.getRoots());
            const m = s.getFretRange(),
                u = this.getFirstFret(m),
                c = {};
            for (let i = 0; i < s.getDots().length; ++i) {
                if (!this.M.barre || 0 == s.getDots()[i].finger) {
                    this.S(e, a + s.getDots()[i].string * r, o + (s.getDots()[i].fret - u) * t, s.getDots()[i].finger || void 0, d, n);
                    continue
                }
                const f = [s.getDots()[i].finger, s.getDots()[i].fret].join(",");
                if (null == c[f]) c[f] = {
                    min: s.getDots()[i].string,
                    max: s.getDots()[i].string
                };
                else {
                    const e = c[f];
                    e.min = Math.min(e.min, s.getDots()[i].string), e.max = Math.max(e.max, s.getDots()[i].string)
                }
            }
            for (const s in c) {
                if (!c.hasOwnProperty(s)) continue;
                const i = s.split(",")[0],
                    f = s.split(",")[1],
                    g = c[s],
                    h = {
                        x: a + g.min * r,
                        y: o + (f - u) * t
                    };
                if (this.M.barre && g.max > g.min) {
                    const s = (g.max - g.min) * r;
                    e.line(h.x, h.y, h.x + s, h.y, n).attr({
                        stroke: this.M.colors.dots
                    }), e.circle(h.x, h.y, n / 2).attr({
                        fill: this.M.colors.dots
                    }), e.circle(h.x + s, h.y, n / 2).attr({
                        fill: this.M.colors.dots
                    }), this.M.showBarreText && this.S(e, h.x + s / 2, h.y, i, d, n)
                } else this.S(e, h.x, h.y, i, d, n)
            }
            if (1 != u) {
                const s = h.y + (this.j - (m.last - m.first)) * t - (t - f) / 2,
                    i = h.x - n - 1;
                e.text(i, s, m.first, f).attr({
                    "text-anchor": "end"
                })
            }
            if (this.M.showText) {
                const i = function (e) {
                    return j() ? e.replace("b", "♭").replace("#", "♯") : e
                }(s.getName());
                e.text(h.x + (s.getNumStrings() - 1) * r / 2, h.y - t / 3, i, g).attr({
                    "font-family": "puhuiti, Arial Unicode MS, Arial",
                    fill: this.M.colors.text,
                    "letter-spacing": 0,
                    "text-anchor": "middle"
                })
            }
            this.T(e, s.getPitches(), r, h)
        }
        getFirstFret(e) {
            return e.last <= this.j ? 1 : e.last - this.j + 1
        }
        getConfig() {
            return this.M
        }
        v(e, s, i, t, r, n) {
            const f = this.j * i,
                d = (s - 1) * t,
                {
                    x: g,
                    y: h
                } = r;
            e.hParallelLines(g, h, this.j + 1, d, i), e.vParallelLines(g, h, s, f, t), n.forEach((s => {
                const i = g + s * t;
                e.line(i, h, i, h + f, 1.5)
            }))
        }
        S(e, s, i, t, r, n) {
            e.circle(s, i, n).attr({
                fill: this.M.colors.dots
            }), r > 0 && t && e.text(s, i + r / 2 - 1, t, r).attr({
                fill: this.M.colors.dotText,
                "text-anchor": "middle"
            })
        }
        T(e, s, i, t) {
            for (let r = 0; r < s.length; r++) s[r] || e.cross(t.x + r * i, t.y, i / 1.5)
        }
        L(e, s) {
            return e.toDefinition() + s
        }
    }
    let w = null;

    function j() {
        if (null !== w) return w;
        let e = document.createElement("canvas");
        const s = e.getContext("2d");
        s.font = '12px "Arial Unicode MS", sans-serif';
        const i = s.measureText("♭").width,
            t = s.measureText("口").width;
        return e = void 0, w = t !== i, w
    }
    const y = new M,
        _ = new M({
            showBarreText: !1,
            fretSpace: 7,
            stringSpace: 6,
            dotRadius: 2.5,
            margin: {
                left: 8,
                top: 12,
                right: 4,
                bottom: 4
            },
            colors: {
                dots: "#555555",
                dotText: "#ffffff",
                text: "indianred"
            },
            fonts: {
                dot: 0,
                text: 9,
                fret: 8
            }
        }),
        L = new M({
            fretSpace: 28,
            stringSpace: 24,
            dotRadius: 10,
            showText: !1,
            showBarreText: !0,
            barre: !0,
            margin: {
                left: 20,
                top: 10,
                right: 20,
                bottom: 10
            },
            colors: {
                dots: "#555555",
                dotText: "#ffffff",
                text: "#000000"
            },
            fonts: {
                dot: 9,
                text: 13,
                fret: 9
            }
        });
    class k extends HTMLElement {
        static get observedAttributes() {
            return ["define"]
        }
        connectedCallback() {
            const e = this.getAttribute("define");
            if (e) this.$ = B.getByDefinition(e);
            else {
                const e = this.getAttribute("name"),
                    s = this.getAttribute("instrument");
                e && s && (this.$ = B.getByName(s, e))
            }
            this.N()
        }
        disconnectedCallback() {
            this.$ = null
        }
        attributeChangedCallback(e, s, i, t) {
            this.$ && ("define" === e && this.hasAttribute("define") && (this.$ = B.getByDefinition(this.getAttribute("define"))), this.N())
        }
        getChord() {
            return this.$
        }
        locateDot(e, s) {
            const {
                stringSpace: i,
                fretSpace: t,
                margin: r
            } = this.I().getConfig(), n = this.$.getFretRange(), f = this.I().getFirstFret(n);
            return {
                string: Math.max(Math.round((e - r.left) / i), 0),
                fret: f + (Math.max(Math.round((s - r.top - t / 2) / t), 0) + 1) - 1
            }
        }
        N() {
            if (this.$) {
                this.innerHTML = "";
                const e = parseFloat(this.getAttribute("scale")) || 1;
                this.I().plot(this, this.$, e)
            }
        }
        I() {
            const e = this.getAttribute("size");
            let s = y;
            return "small" === e ? s = _ : "builder" === e && (s = L), s
        }
    }
    const v = {
            BAR: "|",
            STRING: "-",
            CHORD_LINE_MARKER: "@",
            TEMPO_LINE_MARKER: "%",
            PICK: "x",
            DASH: "=",
            REST_1: "R2",
            REST_2: "R1",
            REST_4: "R",
            REST_8: "r",
            REST_16: "r1",
            REST_32: "r2",
            REST_64: "r3",
            NULL: "*",
            BEAM: "-",
            DOUBLE_BEAM: "=",
            DOT: ".",
            TIE: "~",
            SLIDE_UP: "/",
            SLIDE_DOWN: "\\",
            STROKE_UP: "u",
            STROKE_DOWN: "d",
            ARPEGGIO_UP: "W",
            ARPEGGIO_DOWN: "w"
        },
        S = new M({
            showBarreText: !1,
            fretSpace: 7,
            stringSpace: 6,
            dotRadius: 2.5,
            margin: {
                left: 8,
                top: 12,
                right: 4,
                bottom: 4
            },
            colors: {
                dots: "#555555",
                dotText: "#ffffff",
                text: "indianred"
            },
            fonts: {
                dot: 0,
                text: 9,
                fret: 8
            }
        }),
        T = ["M9,9.176 C6.93065632,11.6293456 5.896,13.4959936 5.896,14.776 C5.896,15.9706726 6.87732352,17.7519882 8.84,20.12 L8.2,20.92 C7.64533056,20.6213318 7.18666848,20.4080006 6.824,20.28 C6.37599776,20.1306659 5.98133504,20.056 5.64,20.056 C5.17066432,20.056 4.8293344,20.189332 4.616,20.456 C4.4026656,20.722668 4.296,21.1439971 4.296,21.72 C4.296,22.9360061 4.79732832,24.0879946 5.8,25.176 L5.256,25.976 C2.41865248,23.8853229 1,22.0186749 1,20.376 C1,19.9706646 1.0799992,19.5920018 1.24,19.24 C1.4000008,18.8879982 1.61866528,18.5946678 1.896,18.36 C2.429336,17.8906643 3.1226624,17.656 3.976,17.656 C4.38133536,17.656 4.98932928,17.7839987 5.8,18.04 L1.48,12.28 C3.5066768,10.5093245 4.52,8.88800736 4.52,7.416 C4.52,6.2426608 3.8266736,4.77067552 2.44,3 L4.136,3 L9,9.176 Z", "M9,9.43444862 L5.37246964,22.3899142 L3.97975709,22.3899142 L6.73279352,12.6085377 C5.45883304,13.1915366 4.51957117,13.4830316 3.91497976,13.4830316 C3.15924049,13.4830316 2.47908534,13.2131288 1.87449393,12.673315 C1.29149506,12.241464 1,11.6260855 1,10.8271612 C1,10.2441623 1.21592227,9.70435664 1.64777328,9.20772798 C2.01484664,8.77587697 2.55465231,8.5599547 3.26720648,8.5599547 C3.85020534,8.5599547 4.39001101,8.77587697 4.88663968,9.20772798 C5.31849069,9.63957899 5.53441296,10.1793847 5.53441296,10.8271612 C5.53441296,11.172642 5.44804405,11.5181176 5.27530364,11.8635984 C5.31848874,11.9067835 5.3616732,11.9391719 5.4048583,11.9607644 L5.43724696,11.9607644 C5.86909798,11.9607644 6.40890364,11.636881 7.05668016,10.9891045 C7.57490138,10.4708833 8.00674591,9.95266984 8.35222672,9.43444862 L9,9.43444862 Z", "M8.97503267,7.11932863 L4.02317881,24.8511167 L2.74172185,24.8511167 L5.12582781,16.2087326 C4.01323947,16.7451591 3.16887705,17.0133684 2.59271523,17.0133684 C1.91721517,17.0133684 1.32119464,16.7948275 0.804635762,16.3577392 C0.546356325,16.1391951 0.347682815,15.8858864 0.208609272,15.5978055 C0.0695357285,15.3097245 0,15.0166811 0,14.7186664 C0,14.1623722 0.19867351,13.6855558 0.59602649,13.2882028 C0.99337947,12.8908498 1.45529538,12.6921763 1.98178808,12.6921763 C2.50828078,12.6921763 2.99006404,12.8908498 3.42715232,13.2882028 C3.8245053,13.6458205 4.02317881,14.1226369 4.02317881,14.7186664 C4.02317881,14.9968135 3.9437094,15.2948237 3.78476821,15.6127061 L3.90397351,15.6723088 L3.93377483,15.6723088 C4.37086311,15.6723088 4.94701629,15.2749617 5.66225166,14.4802558 L6.91390728,10.0100571 C5.94039248,10.5067483 5.09603007,10.7550902 4.3807947,10.7550902 C3.70529464,10.7550902 3.10927411,10.5365494 2.59271523,10.0994611 C2.33443579,9.88091694 2.13576228,9.62760822 1.99668874,9.33952731 C1.8576152,9.0514464 1.78807947,8.75840297 1.78807947,8.46038824 C1.78807947,7.90409406 1.98675298,7.42727764 2.38410596,7.02992466 C2.78145894,6.63257168 3.24337485,6.43389817 3.76986755,6.43389817 C4.29636025,6.43389817 4.77814351,6.63257168 5.21523179,7.02992466 C5.61258477,7.46701294 5.81125828,7.94382936 5.81125828,8.46038824 C5.81125828,8.79813827 5.73178887,9.09614853 5.57284768,9.35442797 L5.69205298,9.41403062 L5.7218543,9.41403062 C6.07947199,9.41403062 6.55628841,9.11602035 7.15231788,8.51999088 C7.49006791,8.18224085 7.85761391,7.7153581 8.25496689,7.11932863 L8.97503267,7.11932863 L8.97503267,7.11932863 Z M8.97503267,7.11932863 L9,7.02992466 L9,7.11932863 L8.97503267,7.11932863 L8.97503267,7.11932863 Z", "M10,3.61662198 L3.6997319,26.2707775 L2.54691689,26.2707775 L4.82573727,18.1474531 C3.78909223,18.6479024 2.98034249,18.8981233 2.39946381,18.8981233 C1.81858512,18.8981233 1.26899276,18.6747118 0.750670241,18.227882 C0.250220912,17.852545 0,17.3342303 0,16.6729223 C0,16.2260925 0.178729223,15.7792694 0.536193029,15.3324397 C0.929403217,14.9749759 1.37622627,14.7962466 1.8766756,14.7962466 C2.32350536,14.7962466 2.77032842,14.9749759 3.21715818,15.3324397 C3.57462198,15.6899035 3.75335121,16.1367265 3.75335121,16.6729223 C3.75335121,17.0125129 3.69079598,17.3074161 3.56568365,17.5576408 C3.58355684,17.5755139 3.61036622,17.5933869 3.6461126,17.6112601 L3.6997319,17.6112601 C4.0750689,17.6112601 4.61125657,17.2359287 5.30831099,16.4852547 L6.51474531,12.2493298 C5.96067641,12.4995544 5.51385335,12.6872201 5.17426273,12.8123324 C4.78105255,12.9374448 4.4235941,13 4.10187668,13 C3.4941882,13 2.93119115,12.7765885 2.41286863,12.3297587 C1.93029249,11.9722949 1.68900804,11.4539802 1.68900804,10.7747989 C1.68900804,10.2922228 1.86773727,9.84539973 2.22520107,9.43431635 C2.58266488,9.07685255 3.02948794,8.89812332 3.56568365,8.89812332 C4.0125134,8.89812332 4.45933646,9.07685255 4.90616622,9.43431635 C5.26363003,9.82752654 5.44235925,10.2743496 5.44235925,10.7747989 C5.44235925,11.0786432 5.37086756,11.3735464 5.22788204,11.6595174 L5.33512064,11.7131367 L5.36193029,11.7131367 C5.73726729,11.7131367 6.27345496,11.3378054 6.97050938,10.5871314 L8.1769437,6.35120643 C7.14029866,6.85165576 6.33154893,7.10187668 5.75067024,7.10187668 C5.16979155,7.10187668 4.6201992,6.87846515 4.10187668,6.43163539 C3.60142735,6.05629839 3.35120643,5.53798365 3.35120643,4.8766756 C3.35120643,4.42984584 3.52993566,3.98302279 3.88739946,3.53619303 C4.28060965,3.17872922 4.72743271,3 5.22788204,3 C5.6747118,3 6.12153485,3.17872922 6.56836461,3.53619303 C6.83646247,3.9651496 6.97050938,4.39409973 6.97050938,4.8230563 C6.97050938,5.14477373 6.90795416,5.43074048 6.78284182,5.68096515 C6.80071501,5.71671153 6.8275244,5.74352091 6.86327078,5.7613941 L6.91689008,5.7613941 C7.09562198,5.7613941 7.30116059,5.68543418 7.53351206,5.53351206 C7.76586354,5.38158995 8.00714799,5.16264665 8.25737265,4.8766756 C8.7220756,4.41197265 9.07953405,3.99195898 9.32975871,3.61662198 L10,3.61662198 Z", "M10.9081083,1.63126854 L3.59113201,27.914995 L2.50075908,27.914995 L4.59542286,20.4258546 C3.61982115,20.8658318 2.87378398,21.0858172 2.35728895,21.0858172 C1.87905282,21.0858172 1.35300096,20.8945256 0.779117604,20.5119367 C0.300881471,20.0910889 0.0617669916,19.6128599 0.0617669916,19.0772354 C0.0617669916,18.8094232 0.100025308,18.5846556 0.17654309,18.4029259 C0.253060871,18.2211961 0.38696498,18.0346868 0.578259433,17.8433924 C0.903460003,17.5181918 1.30517233,17.355594 1.78340846,17.355594 C2.2616446,17.355594 2.6729215,17.5181918 3.01725152,17.8433924 C3.18941652,18.0155574 3.31375605,18.1972844 3.39027384,18.3885789 C3.46679162,18.5798733 3.50504993,18.8094232 3.50504993,19.0772354 C3.50504993,19.402436 3.43809788,19.6606797 3.30419176,19.8519741 L3.36157981,19.9380562 L3.44766188,19.9380562 C3.81112135,19.9380562 4.30847946,19.5746022 4.93975116,18.8476832 L6.03012409,14.9739899 C5.15016961,15.4139672 4.40413243,15.6339525 3.79199018,15.6339525 C3.31375405,15.6339525 2.78770219,15.4426609 2.21381883,15.060072 C1.7355827,14.6392242 1.49646822,14.1609953 1.49646822,13.6253708 C1.49646822,13.3575586 1.53472653,13.1327909 1.61124432,12.9510612 C1.6877621,12.7693315 1.82166621,12.5828222 2.01296066,12.3915277 C2.33816123,12.0663272 2.73987356,11.9037293 3.21810969,11.9037293 C3.46679248,11.9037293 3.6867778,11.9419876 3.87807225,12.0185054 C4.06936671,12.0950232 4.255876,12.2193627 4.43760573,12.3915277 C4.61933546,12.5636927 4.74845728,12.7454197 4.82497506,12.9367142 C4.90149284,13.1280087 4.93975116,13.3623408 4.93975116,13.6397178 C4.93975116,13.9170948 4.89192826,14.1705561 4.79628104,14.4001094 C4.85366937,14.4574978 4.90149227,14.4861915 4.93975116,14.4861915 C5.11191617,14.4861915 5.32233691,14.4048926 5.5710197,14.2422923 C5.81970249,14.079692 6.11620444,13.8262307 6.46053446,13.4819007 L7.52221337,9.60820735 C6.62312944,10.0290552 5.89143913,10.2394759 5.32712049,10.2394759 C4.76280185,10.2394759 4.23196771,10.0481843 3.73460213,9.6655954 C3.48591934,9.4551715 3.30419234,9.23518618 3.18941566,9.00563284 C3.07463899,8.7760795 3.01725152,8.51783586 3.01725152,8.23089418 C3.01725152,7.75265804 3.17984936,7.35094572 3.50504993,7.02574515 C3.69634439,6.83445069 3.88285368,6.70054659 4.06458341,6.6240288 C4.24631314,6.54751102 4.47108075,6.50925271 4.73889299,6.50925271 C5.00670522,6.50925271 5.23147283,6.54751102 5.41320256,6.6240288 C5.59493229,6.70054659 5.77187701,6.83445069 5.94404202,7.02574515 C6.28837203,7.35094572 6.46053446,7.75265804 6.46053446,8.23089418 C6.46053446,8.51783586 6.38401782,8.78564407 6.23098226,9.03432686 C6.2883706,9.07258575 6.33619349,9.09171491 6.37445238,9.09171491 C6.73791185,9.09171491 7.24483454,8.73782548 7.89523568,8.03003601 L9.10038471,4.07026062 C8.22043023,4.51023787 7.48395763,4.73022319 6.89094483,4.73022319 C6.3744498,4.73022319 5.84839795,4.5389316 5.31277348,4.1563427 C5.06409069,3.9459188 4.88236368,3.72593348 4.76758701,3.49638013 C4.65281034,3.26682679 4.59542286,3.01814773 4.59542286,2.7503355 C4.59542286,2.48252326 4.63368118,2.25297336 4.71019896,2.06167891 C4.78671674,1.87038445 4.91583856,1.68387516 5.09756829,1.50214543 C5.27929802,1.3204157 5.46580732,1.19129388 5.65710177,1.1147761 C5.84839623,1.03825832 6.06838155,1 6.31706434,1 C6.56574713,1 6.78573245,1.03825832 6.9770269,1.1147761 C7.16832135,1.19129388 7.35483065,1.3204157 7.53656038,1.50214543 C7.71829011,1.68387516 7.84741193,1.86560216 7.92392971,2.04733189 C8.00044749,2.22906163 8.03870581,2.45382924 8.03870581,2.72164147 C8.03870581,2.93206537 7.96218917,3.19030901 7.80915361,3.49638013 C7.86654195,3.55376847 7.91436484,3.58246221 7.95262373,3.58246221 C8.23956541,3.58246221 8.65084232,3.31465399 9.18646679,2.77902952 C9.58818514,2.37731117 9.92294541,1.97559884 10.1907576,1.57388049 L10.9081083,1.57388049 L10.9081083,1.63126854 Z"];
    class $ {
        constructor(e, s) {
            this.R = s, this.P = {
                color: "#333",
                fontSize: 9,
                marginLeft: 1,
                marginTop: 12,
                marginBottom: 5,
                stringNum: e,
                stringSpacing: 10,
                noteSpacing: 20,
                symbolSize: 2
            }
        }
        createTabCanvas(e, s, i, t) {
            this.O = i, this.H = t, s && (this.P.noteSpacing = Math.min(32, s / (e + 1)));
            const r = (e + 1) * this.P.noteSpacing;
            r > s && (s = r);
            const n = this.P.stringSpacing * (this.P.stringNum + (this.O ? 1.5 : 0)) + (t ? 32 : 0) + this.P.marginTop + this.P.marginBottom,
                f = new F(s, n, this.R, {
                    stroke: this.P.color,
                    fill: this.P.color
                }),
                d = this.P.marginLeft;
            return f.hParallelLines(d, this.getFirstStringPosY(), this.P.stringNum, s - 2, this.P.stringSpacing), f.vParallelLines(d, this.getFirstStringPosY(), 2, (this.P.stringNum - 1) * this.P.stringSpacing, s - 2), f
        }
        barNum(e, s) {
            if (null === s) return;
            const i = this.getFirstStringPosY() - this.P.symbolSize;
            e.text(0, i, s, 7).attr({
                fill: "#999",
                "text-anchor": "left"
            })
        }
        drawChords(e, s, i) {
            for (const t in s)
                if (s.hasOwnProperty(t)) {
                    const r = this.getNotePosX(parseInt(t)),
                        n = s[t],
                        f = this.getFirstStringPosY();
                    if (i) {
                        const s = 6 === this.P.stringNum ? "guitar" : "ukulele",
                            i = B.getByName(s, n);
                        i && S.draw(e, i, {
                            x: r - 8,
                            y: 0
                        })
                    } else e.text(r, f - 8, n, 9).attr({
                        fill: "indianred",
                        "text-anchor": "middle"
                    })
                }
        }
        drawFlavors(e, s) {
            s.forEach((s => {
                s.type === v.TIE ? this.tie(e, s.index, s.index + (s.span ? 2 : 1), s.string) : s.type === v.SLIDE_UP ? this.slide(e, s.index, s.string, !0) : s.type === v.SLIDE_DOWN ? this.slide(e, s.index, s.string, !1) : s.type === v.STROKE_DOWN ? this.stroke(e, s.index, !0, s.string.min, s.string.max) : s.type === v.STROKE_UP ? this.stroke(e, s.index, !1, s.string.min, s.string.max) : s.type === v.ARPEGGIO_DOWN ? this.arpeggio(e, s.index, !0, s.string.min, s.string.max) : s.type === v.ARPEGGIO_UP && this.arpeggio(e, s.index, !1, s.string.min, s.string.max)
            }))
        }
        drawTempo(e, s, i, t) {
            for (let i = 0; i < s.length; ++i) s[i] !== v.BAR && s[i] !== v.DASH && s[i] !== v.REST_1 && s[i] !== v.REST_2 && s[i] !== v.REST_4 && s[i] !== v.REST_8 && s[i] !== v.REST_16 && s[i] !== v.REST_32 && s[i] !== v.REST_64 && this.Z(e, i);
            this.K(e, i, t, 0), this.U(e, t)
        }
        K(e, s, i, t) {
            for (let r = 0; r < s.length; ++r)
                if (Array.isArray(s[r]) && s[r].length > 0) {
                    const n = N(s[r]),
                        f = I(s[r]);
                    if (n === f)
                        if (0 === t) this.X(e, n);
                        else {
                            const s = void 0 !== i[n - 1];
                            this.W(e, n, t, s)
                        }
                    else this.Y(e, n, f, t);
                    this.K(e, s[r], i, t + 1)
                }
        }
        U(e, s) {
            for (const i in s)
                if (s.hasOwnProperty(i)) {
                    const t = this.getNotePosX(parseInt(i)),
                        r = s[i],
                        n = this.getLastStringPosY() + 1.5 * this.P.stringSpacing - (2 * r + 1);
                    e.circle(t + 3, n, 1.5)
                }
        }
        Z(e, s) {
            const i = this.getLastStringPosY() + .5 * this.P.stringSpacing;
            this.vLine(e, this.getNotePosX(s), i, this.P.stringSpacing)
        }
        Y(e, s, i, t) {
            const r = this.getNotePosX(s),
                n = this.getNotePosX(i),
                f = this.getLastStringPosY() + .5 * this.P.stringSpacing + this.P.stringSpacing - 2 * t;
            this.hLine(e, f, r, n - r)
        }
        X(e, s) {
            const i = this.getNotePosX(s),
                t = this.getLastStringPosY() + 1.5 * this.P.stringSpacing;
            e.path(["M0,0", "C1,-2 1,-2 2,-3", "S3,-6 2,-8"].join(" "), i, t).attr({
                fill: "white"
            })
        }
        W(e, s, i, t) {
            const r = this.P.noteSpacing / 2;
            let n = this.getNotePosX(s);
            t && (n -= r);
            const f = this.getLastStringPosY() + 1.5 * this.P.stringSpacing - 2 * i;
            this.hLine(e, f, n, r)
        }
        multiPick(e, s, i) {
            const t = this.getNotePosX(i),
                r = Math.min(...s.map((e => e.string)));
            if (this.O && r <= this.P.stringNum) {
                const s = this.getNthStringPosY(r);
                this.vLine(e, t, s, this.getLastStringPosY() - s + this.P.symbolSize)
            }
            for (let t = 0; t < s.length; ++t) {
                const r = s[t].string,
                    n = s[t].fret;
                r >= 0 && r < this.P.stringNum && this.q(e, i, r, isNaN(n) ? void 0 : n)
            }
        }
        q(e, s, i, t) {
            const r = this.getNotePosX(s),
                n = this.getNthStringPosY(i);
            void 0 === t ? this.cross(e, r, n) : (e.circle(r, n, this.P.stringSpacing / 2).attr({
                fill: "white"
            }), e.text(r, n + this.P.fontSize / 3, t, this.P.fontSize).attr({
                fill: this.P.color,
                "text-anchor": "middle"
            }))
        }
        dash(e, s) {
            const i = this.P.stringNum / 2,
                t = this.getNotePosX(s),
                r = this.getNthStringPosY(i) - this.P.stringSpacing / 2,
                n = 2 * this.P.symbolSize;
            e.line(t - n, r, t + n, r).attr({
                stroke: "#666",
                "stroke-width": 2
            })
        }
        stroke(e, s, i, t, r) {
            let n = this.getNotePosX(s);
            void 0 !== t && void 0 !== r ? n -= 3 * this.P.symbolSize : (t = 0, r = this.P.stringNum - 1);
            const f = this.getNthStringPosY(t) - this.P.symbolSize,
                d = this.getNthStringPosY(r) + this.P.symbolSize;
            this.vLine(e, n, f, d - f), i ? this.upArrow(e, n, f) : this.downArrow(e, n, d)
        }
        mute(e, s, i) {
            this.stroke(e, s, i);
            const t = this.getNotePosX(s);
            for (let s = 0; s < this.P.stringNum - 1; ++s) this.cross(e, t, this.getNthStringPosY(s + .5))
        }
        palmMute(e, s) {
            this.stroke(e, s, !0);
            const i = this.getNotePosX(s);
            e.circle(i, this.P.marginTop + .5 * this.P.stringSpacing, 1.5)
        }
        accentedStroke(e, s) {
            this.stroke(e, s, !0);
            const i = this.getNotePosX(s),
                t = this.P.stringSpacing / 4,
                r = this.P.marginTop + .5 * this.P.stringSpacing,
                n = [`M${-t},${-t}`, `L${t},0`, `L${-t},${t}`];
            e.path(n.join(" "), i, r).attr({
                fill: "none"
            })
        }
        arpeggio(e, s, i, t, r) {
            let n = this.getNotePosX(s);
            void 0 !== t && void 0 !== r ? n -= 3 * this.P.symbolSize : (t = 0, r = this.P.stringNum - 1);
            const f = this.getNthStringPosY(t) - this.P.symbolSize,
                d = this.getNthStringPosY(r) + this.P.symbolSize,
                g = this.P.stringSpacing / 2,
                h = g / 2;
            let a = ["M0,0", "L0," + this.P.stringSpacing / 2];
            for (let e = 0; e < r - t; ++e) {
                const s = 3 + h + 2 * g * e;
                a = a.concat([`Q${-h},${s}, 0,${s+h}`, `Q${h},${s+g} 0,${s+g+h}`])
            }
            e.path(a.join(" "), n, f).attr({
                fill: "none"
            }), i ? this.upArrow(e, n, f) : this.downArrow(e, n, d)
        }
        extend(e, s) {
            const i = this.getNotePosX(s),
                t = (this.getFirstStringPosY() + this.getLastStringPosY()) / 2,
                r = this.P.noteSpacing / 4;
            e.line(i - r, t, i + r, t).attr({
                "stroke-width": 2
            })
        }
        tie(e, s, i, t) {
            let r, n, f = this.getNotePosX(s),
                d = this.getNotePosX(i) - f;
            void 0 === t ? (r = this.P.stringSpacing, n = -this.P.stringSpacing) : (f += this.P.symbolSize, d -= this.P.symbolSize, r = this.getNthStringPosY(t) - 2 * this.P.symbolSize, n = -this.P.stringSpacing + this.P.symbolSize);
            const g = ["M0,0", `Q${d/2},${n} ${d},0`].join(" ");
            e.path(g, f, r).attr({
                fill: "none"
            })
        }
        slide(e, s, i, t) {
            const r = this.getNotePosX(s) + 5,
                n = this.getNotePosX(s + 1) - 5;
            let f = this.getNthStringPosY(i),
                d = f;
            t ? (f += this.P.symbolSize, d -= this.P.symbolSize) : (f -= this.P.symbolSize, d += this.P.symbolSize), e.line(r, f, n, d)
        }
        bar(e, s) {
            const i = this.getNotePosX(s);
            this.vLine(e, i, this.getFirstStringPosY(), this.P.stringSpacing * (this.P.stringNum - 1))
        }
        rest(e, s, i) {
            const t = this.getNotePosX(s);
            if (i < 2) {
                const s = 5 * this.P.symbolSize,
                    r = this.P.stringSpacing / 2,
                    n = this.getNthStringPosY(this.P.stringNum / 2 - 1) + i * r;
                e.rect(t - s / 2, n, s, r).attr({
                    stroke: "none",
                    fill: "#666666"
                })
            } else {
                const s = Math.min(i - 2, T.length - 1),
                    r = this.getNthStringPosY((this.P.stringNum - 3) / 2);
                e.path(T[s], t - 3, r, .75).attr({
                    stroke: "none",
                    fill: "#666666"
                })
            }
        }
        hLine(e, s, i, t) {
            e.line(i, s, i + t, s)
        }
        vLine(e, s, i, t) {
            e.line(s, i, s, i + t)
        }
        cross(e, s, i) {
            e.cross(s, i, this.P.stringSpacing / 2)
        }
        upArrow(e, s, i) {
            const t = this.P.stringSpacing / 2;
            e.line(s, i, s - t / 2, i + t), e.line(s, i, s + t / 2, i + t)
        }
        downArrow(e, s, i) {
            const t = this.P.stringSpacing / 2;
            e.line(s, i, s + t / 2, i - t), e.line(s, i, s - t / 2, i - t)
        }
        getNotePosX(e) {
            return this.P.marginLeft + this.P.noteSpacing * (e + 1)
        }
        getFirstStringPosY() {
            return this.getNthStringPosY(0)
        }
        getLastStringPosY() {
            return this.getNthStringPosY(this.P.stringNum - 1)
        }
        getNthStringPosY(e) {
            return this.P.marginTop + this.P.stringSpacing * (e + 1) + (this.H ? 32 : 0)
        }
    }

    function N(e) {
        return Array.isArray(e) && e.length > 0 ? N(e[0]) : e
    }

    function I(e) {
        return Array.isArray(e) && e.length > 0 ? I(e[e.length - 1]) : e
    }
    class R {
        constructor(e) {
            this.V = this.J(e)
        }
        createSvg(e, s, i) {
            const t = Math.max(...this.V.noteLengths) > 0;
            return this.ee = new $(e, i), this.se = this.ee.createTabCanvas(this.V.notes.length, s / i, t), this.drawNotes(this.V.notes), t && this.ee.drawTempo(this.se, this.V.notes, this.V.tempoTree, this.V.dots), this.se.node
        }
        J(e) {
            let s = "";
            const i = [],
                t = [],
                r = [],
                n = [r],
                f = {},
                d = () => {
                    s.length > 0 && (n.length > 0 && n[n.length - 1].push(i.length), i.push(s), t.push(n.length - 1), s = "")
                };
            for (let t = 0; t < e.length; ++t) switch (e[t]) {
                case " ":
                    d();
                    break;
                case ".":
                    d(), f[i.length - 1] = n.length - 1;
                    break;
                case "(":
                    d();
                    const r = [];
                    n.length > 0 && n[n.length - 1].push(r), n.push(r);
                    break;
                case ")":
                    d(), n.length > 0 && n.pop();
                    break;
                default:
                    s += e[t]
            }
            return d(), {
                notes: i,
                noteLengths: t,
                tempoTree: r,
                dots: f
            }
        }
        drawNotes(e) {
            for (let s = 0; s < e.length; ++s)
                if ("~" === e[s]) {
                    for (let i = s - 1; i >= 0; i--)
                        if ("|" !== e[i]) {
                            this.ee.tie(this.se, i, s);
                            break
                        }
                } else this.drawNote(s, e[s])
        }
        drawNote(e, s) {
            switch (s) {
                case "d":
                    this.ee.stroke(this.se, e, !0);
                    break;
                case "u":
                    this.ee.stroke(this.se, e, !1);
                    break;
                case "o":
                    this.ee.palmMute(this.se, e);
                    break;
                case ">":
                    this.ee.accentedStroke(this.se, e);
                    break;
                case "w":
                    this.ee.arpeggio(this.se, e, !0);
                    break;
                case "x":
                case "xd":
                    this.ee.mute(this.se, e, !0);
                    break;
                case "xu":
                    this.ee.mute(this.se, e, !1);
                    break;
                case "-":
                    this.ee.extend(this.se, e);
                    break;
                case "0":
                    const i = this.V.noteLengths[e];
                    this.ee.rest(this.se, e, i + 2);
                    break;
                case "|":
                    this.ee.bar(this.se, e);
                    break;
                default:
                    const t = s.split(parseInt(s, 10) >= 10 ? "" : ",").map((e => {
                        const s = e.split(":"),
                            i = parseInt(s[1], 10);
                        return {
                            string: parseInt(s[0], 10) - 1,
                            fret: isNaN(i) ? void 0 : i
                        }
                    })).filter((e => !isNaN(e.string)));
                    this.ee.multiPick(this.se, t, e)
            }
        }
    }
    class P extends HTMLElement {
        connectedCallback() {
            if (this.getAttribute("instrument") == "ukulele") return
            this.textContent = this.getAttribute("num")
            // console.log(this.textContent)
            const e = this.offsetWidth,
                s = parseInt(this.getAttribute("string-num")),
                i = new R(this.textContent),
                t = parseFloat(this.getAttribute("scale")) || 1;
            this.textContent = "", this.appendChild(i.createSvg(s, e, t))
        }
        disconnectedCallback() {}
    }
    const O = 3,
        H = 4,
        Z = 5,
        z = 7,
        K = 8,
        U = 9,
        X = 10,
        Q = 11,
        W = 12,
        Y = 13,
        q = 14,
        V = "regular",
        J = "inline",
        ee = "number",
        se = {
            ukulele: l,
            guitar: x
        },
        ie = {
            title: 15,
            artist: 1,
            author: 2,
            meta: U,
            comment: Z,
            rhythm: X,
            start_of_chorus: Q,
            end_of_chorus: z
        },
        te = /\{([a-zA-Z]+):(.*)\}/,
        re = /\[([a-zA-Z0-9#/\-_]+)\]/;
    class ne {
        constructor() {
            this.ie = [], this.te = [], this.re = {}, this.ne = [], this.fe = [], this.de = null, this.ge = null, this.he = null, this.ae = null
        }
        parseFromText(e) {
            console.log(e)
            e = (e = function (e) {
                if ("string" != typeof e) return e;
                return e.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
            }(e)).replace(/\[([b#])([A-G])([^\]]*)\]/g, "[$2$1$3]"), this.ie = [];
            const s = e.split("\n");
            for (let e = 0; e < s.length; ++e) {
                const i = s[e].trim();
                if (0 === i.length) continue;
                // console.log(te)
                const t = te.exec(i);
                if (t) {
                    const s = t[1].toLowerCase(),
                        r = t[2].trim();
                    if ("define" === s) {
                        const e = r.substr(0, r.indexOf(" ")).trim();
                        B.addByDefinition(e, i)
                    } else if ("title" === s) this.ge = r;
                    else if ("artist" === s) this.he = r;
                    else if ("author" === s) this.ae = r;
                    else {
                        // console.log(ie)
                        const i = ie[s];
                        i === U ? this.te.push(r) : this.oe(i, r, e)
                    }
                    continue
                }
                if ("{start_of_chorus}" === i.toLowerCase()) {
                    this.oe(Q, null, e);
                    continue
                }
                if ("{end_of_chorus}" === i.toLowerCase()) {
                    this.oe(z, null, e);
                    continue
                }
                if ("{start_of_tab}" === i.toLowerCase()) {
                    const i = [];
                    for (; ++e < s.length;) {
                        const t = s[e].trim();
                        if ("{end_of_tab}" === t.toLowerCase()) break;
                        i.push(t)
                    }
                    this.oe(W, i.join("\n"), e - i.length - 1);
                    continue
                }
                const r = this.me(s[e]);
                this.oe(this.ue(r), r, e)
            }
        }
        me(e) {
            const s = [];
            let i, t = 0,
                r = 0;
            for (; i = re.exec(e.substr(t));) {
                const n = t + i.index - r;
                if (n > 0) {
                    const i = e.substr(r, n);
                    i.length > 0 && s.push({
                        type: Y,
                        value: i
                    })
                }
                t += i.index + i[0].length;
                const f = i[1],
                    d = e[t];
                s.push({
                    type: O,
                    value: f,
                    extra: d
                }), this.re[f] || (this.re[f] = !0, this.ne.push(f)), this.fe.push(f), t++, r = t
            }
            if (r < e.length) {
                const i = e.substr(r, e.length - r);
                i.length > 0 && s.push({
                    type: Y,
                    value: i
                })
            }
            return s
        }
        toHTML(e) {
            console.log(e)
            if (null == this.de) throw new Error("Instrument not set!");
            let s = "";
            s += `\n      <div class="hexi-header">\n        <div class="hexi-title">${this.ge||"未命名"}</div>\n        <div class="hexi-subtitle">\n          <span><em>唱: </em>${this.he||"未知歌手"}</span>\n    `, this.ae && (s += `<span><em>谱: </em>${this.ae}</span>`), s += '<ul class="hexi-meta">';
            if (this.getMeta(e.keyShift).slice(0, 4).forEach((e => {
                    s += `<li>${e}</li>`
                })), s += "</ul>", s += "</div></div>", e.chordStyle === V) {
                s += '<div class="hexi-chords">';
                const i = [];
                this.getChords().forEach((t => {
                    let r = a(t, e.keyShift);
                    e.simplifyChords && (r = o(r)), i.includes(r) || (s += this.ce(r, "normal", e.scale), i.push(r))
                })), s += "</div>"
            }
            s += '<div class="hexi-body">';
            for (let t = 0; t < this.ie.length; ++t) {
                const r = this.ie[t];
                switch (r.type) {
                    case K:
                        s += `<pre class="hexi-line" line-num="${r.line}">`;
                        for (let t = 0; t < r.value.length; ++t) {
                            const n = r.value[t];
                            if (n.type === Y) s += `<span class="hexi-text">${n.value}</span>`;
                            else if (n.type === O) {
                                s += '<span class="hexi-chord-anchor">', s += this.le(n.value, e);
                                const t = " " === (i = n.extra) || void 0 === i || "\n" === i ? "　" : n.extra;
                                s += `${t}</span>`
                            }
                        }
                        s += "</pre>";
                        break;
                    case q:
                        s += `<pre class="hexi-textline" line-num="${r.line}">`;
                        for (let e = 0; e < r.value.length; ++e) {
                            const i = r.value[e];
                            i.type === Y && (s += `<span class="hexi-text">${i.value}</span>`)
                        }
                        s += "</pre>";
                        break;
                    case H:
                        s += `<pre class="hexi-chordline" line-num="${r.line}">`;
                        for (let i = 0; i < r.value.length; ++i) {
                            const t = r.value[i];
                            t.type === O ? s += this.le(t.value, e) : t.type === Y && (s += `<span class="hexi-text">${t.value}</span>`)
                        }
                        s += "</pre>";
                        break;
                    case Z:
                        s += `<div class="hexi-comment" line-num="${r.line}">${r.value}</div>`;
                        break;
                    case X:
                        console.log(r.value)
                        s += `<hexi-rhythm string-num="${this.de.tuning.length}" line-num="${r.line}" scale="${e.scale}">${r.value}</hexi-rhythm>`;
                        break;
                    case Q:
                        s += '<div class="hexi-chorus">';
                        break;
                    case z:
                        s += "</div>";
                        break;
                    case W:
                        s += `<hexi-tab inline-chords line-num="${r.line}" scale="${e.scale}">${r.value}</hexi-tab>`
                }
            }
            var i;
            return s += "</div>", s
        }
        setInstrument(e) {
            this.de = se[e]
        }
        getNodes() {
            return this.ie
        }
        getChords() {
            return this.ne
        }
        getMeta(e) {
            let s = this.getKey();
            if (!s) return this.te;
            e && (s = a(this.getKey(), e));
            const i = this.te.slice();
            let t = 0;
            i[0] && (i[0].indexOf("♩=") >= 0 || i[0].match(/\d\/\d/)) && (t = 1);
            for (let e = 0; e < i.length; ++e) {
                if (i[e].indexOf("原调 1=") >= 0) {
                    t = e + 1;
                    break
                }
            }
            return i.splice(t, 0, "选调 1=" + s), i
        }
        getFirstRhythm() {
            for (let e = 0; e < this.ie.length; ++e) {
                const s = this.ie[e];
                if (s.type === X) return s.value
            }
            return null
        }
        getFirstTab() {
            for (let e = 0; e < this.ie.length; ++e) {
                const s = this.ie[e];
                if (s.type === W) return s.value
            }
            return null
        }
        getKey() {
            return this.xe || (this.xe = u(this.fe)), this.xe
        }
        oe(e, s, i) {
            this.ie.push({
                type: e,
                value: s,
                line: i
            })
        }
        Ce(e, s) {
            const i = e.indexOf("[", s + 1),
                t = e.indexOf("]", s);
            return t < 0 || i >= 0 && i < t ? "" : e.substr(s + 1, t - s - 1)
        }
        le(e, i) {
            let r = i.chordStyle === ee ? e : a(e, i.keyShift);
            if (i.simplifyChords && (r = o(r)), i.chordStyle === ee && (r = function (e, i) {
                    const r = m(e);
                    let n = s[r];
                    return void 0 === n ? e : (n = (n - s[i] + 12) % 12, e.replace(r, t[n]))
                }(r, this.getKey())), i.chordStyle === J) return this.ce(r, "small", i.scale); {
                const e = j() ? "arial" : "roboto";
                return `<span class="hexi-chord">${r.replace("b",`<span class="hexi-chord-flat ${e}">♭</span>`).replace("#",`<span class="hexi-chord-sharp ${e}">♯</span>`)}</span>`
            }
        }
        ce(e, s, i) {
            return `<hexi-chord size="${s}" scale="${i}" name="${e}" instrument="${this.de.name}"></hexi-chord>`
        }
        ue(e) {
            let s = !1,
                i = !1;
            for (let t = 0; t < e.length; ++t)
                if (e[t].type === Y && e[t].value.trim().length > 0 && (s = !0), e[t].type === O && e[t].value.trim().length > 0 && (i = !0), s && i) return K;
            return i ? H : q
        }
    }
    class fe extends HTMLElement {
        static get observedAttributes() {
            return ["scale", "instrument", "chord-style", "simplify-chords", "key-shift", "columns", "refresh"]
        }
        connectedCallback() {
            this.setContent(this.textContent), this.hasAttribute("eager-rendering") ? (this.N(), this.setAttribute("ready", "")) : this.be();
            const e = this;
            this.data = {
                get meta() {
                    return e.Ee.getMeta()
                },
                get chords() {
                    return e.Ee.getChords()
                },
                get key() {
                    return e.Ee.getKey()
                },
                get firstTab() {
                    return e.Ee.getFirstTab()
                },
                get firstRhythm() {
                    return e.Ee.getFirstRhythm()
                }
            }
        }
        disconnectedCallback() {
            this.Ee = null, this.removeAttribute("ready")
        }
        attributeChangedCallback(e, s, i, t) {
            this.Ee && this.be()
        }
        setContent(e) {
            console.log(e)
            this.Ee = new ne, this.Ee.parseFromText(e), this.be()
        }
        be() {
            this.Be || (this.Be = !0, requestAnimationFrame((() => {
                this.N(), this.setAttribute("ready", ""), this.Be = !1
            })))
        }
        N() {
            if (!this.Ee) return;
            console.time("Update sheet");
            const e = this.getAttribute("instrument"),
                s = parseInt(this.getAttribute("key-shift")) || 0,
                i = this.getAttribute("chord-style") || V,
                t = this.hasAttribute("simplify-chords");
            console.log(e)
            0 === this.Ee.getChords().length && this.Ee.getFirstTab() && this.setAttribute("finger-style", ""), this.Ee.setInstrument(e);
            const r = {
                chordStyle: i,
                keyShift: s,
                scale: this.getAttribute("scale"),
                simplifyChords: t
            };
            console.log(r)
            this.style["font-size"] = r.scale + "em", this.innerHTML = this.Ee.toHTML(r), console.timeEnd("Update sheet"), this.dispatchEvent(new CustomEvent("rendercomplete"))
        }
    }
    const de = {
        "-": 1,
        "=": 2
    };
    class ge {
        constructor() {
            this.Fe = [], this.Ge = -1, this.Ae = 0
        }
        createSvg(e, s, i, t) {
            if (0 === this.Fe.length) return [];
            this.ee = new $(this.Ge, t);
            const r = e / 16 / t - 1,
                n = [];
            let f = 1,
                d = this.Fe[0],
                g = 1;
            for (; f < this.Fe.length;) {
                if (d.notes.length + this.Fe[f].notes.length + 1 <= r) d = this.pe(d, this.Fe[f]);
                else {
                    const r = this.De(d, i ? null : g, e / t, s);
                    if (n.push(r), i) return n;
                    const h = d.flavors[d.flavors.length - 1];
                    h && h.index === d.notes.length - 1 && h.type === v.TIE && h.span && this.Fe[f].flavors.splice(0, 0, Object.assign(h, {
                        index: -2,
                        span: !0
                    })), d = this.Fe[f], g = f + 1
                }++f
            }
            return d.notes.length > 0 && n.push(this.De(d, i ? null : g, e / t, s)), n
        }
        pe(e, s) {
            const i = e.notes,
                t = e.tempoTree,
                r = e.dots,
                n = e.chords,
                f = e.flavors;
            i.push(v.BAR), t.push(i.length), this.Me(s.tempoTree, i.length);
            for (const e in s.dots) s.dots.hasOwnProperty(e) && (r[parseInt(e, 10) + i.length] = s.dots[e]);
            for (const e in s.chords) s.chords.hasOwnProperty(e) && (n[parseInt(e, 10) + i.length] = s.chords[e]);
            return s.flavors.forEach((e => {
                e.index += i.length, f.push(e)
            })), {
                notes: i.concat(s.notes),
                tempoTree: t.concat(s.tempoTree),
                dots: r,
                flavors: f,
                chords: n,
                barStartPos: e.barStartPos,
                linePos: e.linePos
            }
        }
        Me(e, s) {
            for (let i = 0; i < e.length; ++i) Array.isArray(e[i]) ? this.Me(e[i], s) : e[i] += s
        }
        parseFromText(e) {
            const s = e.split("\n").map((e => e.trim())).filter((e => e.length > 0)),
                i = s.filter((e => e[0] === v.BAR)),
                t = s.filter((e => e[0] === v.TEMPO_LINE_MARKER)),
                r = s.filter((e => e[0] === v.CHORD_LINE_MARKER));
            if (4 !== i.length && 6 !== i.length || this.Ge > 0 && i.length !== this.Ge) return this.Ae += e.split("\n").length + 1, !1;
            this.Ge < 0 && (this.Ge = i.length);
            const n = {
                strings: i,
                tempoLines: t
            };
            return r.length > 0 && (n.chordLine = r[0]), this.we(n), this.Ae += e.split("\n").length + 1, !0
        }
        getStringNum() {
            return this.Ge
        }
        we(e) {
            const {
                strings: s,
                tempoLines: i,
                chordLine: t
            } = e;
            let r = [],
                n = [r],
                f = {},
                d = [],
                g = {},
                h = 0,
                a = [],
                o = 0;
            for (; h < s[0].length;) {
                if (s[0][h] === v.BAR) {
                    h > 0 && (this.Fe.push({
                        notes: a,
                        tempoTree: r,
                        dots: f,
                        flavors: d,
                        chords: g,
                        barStartPos: o,
                        linePos: this.Ae
                    }), a = [], r = [], n = [r], f = {}, d = [], g = {}, o = h), ++h;
                    continue
                }
                let e;
                const m = this.je(h, s);
                if (m ? (a.push(m), e = m.length > 1) : e = this.ye(h, s, i, n, a, d, f), t) {
                    const e = this._e(t, h);
                    e && (g[a.length - 1] = e)
                }++h, e && ++h
            }
        }
        je(e, s) {
            const i = [v.DASH, v.REST_1, v.REST_2, v.REST_16, v.REST_32, v.REST_64, v.REST_4, v.REST_8];
            for (let t = 0; t < s.length; ++t)
                for (let r = 0; r < i.length; ++r)
                    if (0 === s[t].substr(e).indexOf(i[r])) return i[r];
            return null
        }
        ye(e, s, i, t, r, n, f) {
            let d = !1,
                g = [];
            const h = {
                string: {
                    min: 10,
                    max: -1
                },
                index: r.length
            };
            for (let i = 0; i < s.length; ++i) {
                const t = s[i][e],
                    f = s[i][e - 1];
                if ([v.SLIDE_UP, v.SLIDE_DOWN, v.TIE].includes(t)) n.push({
                    type: t,
                    string: i,
                    index: r.length - 1,
                    span: s[0][e + 1] === v.BAR
                });
                else if (g !== v.NULL) {
                    if (s[i][e] === v.NULL) {
                        g = v.NULL;
                        continue
                    }
                    const t = this.Le(s[i], e);
                    null !== t && (g.push({
                        string: i,
                        fret: t
                    }), t > 9 && (d = !0), [v.STROKE_DOWN, v.STROKE_UP, v.ARPEGGIO_DOWN, v.ARPEGGIO_UP].includes(f) && (h.type = f, h.string.min = Math.min(h.string.min, i), h.string.max = Math.max(h.string.max, i)))
                }
            }
            return h.type && n.push(h), i.forEach((s => {
                const i = () => {
                        const e = [];
                        t.length > 0 && t[t.length - 1].push(e), t.push(e)
                    },
                    r = (de[s[e]] || 0) - (de[s[e - 1]] || 0);
                for (let e = 0; e < r; ++e) i()
            })), (g === v.NULL || g.length > 0) && (t.length > 0 && t[t.length - 1].push(r.length), r.push(g)), i.forEach((s => {
                if (s[e] === v.DOT) return void(f[r.length - 1] = t.length - 1);
                if (0 === t.length) return;
                const i = (de[s[e]] || 0) - (de[s[d ? e + 2 : e + 1]] || 0);
                for (let e = 0; e < i; ++e) t.pop()
            })), d
        }
        De(e, s, i, t) {
            const {
                notes: r,
                tempoTree: n,
                dots: f,
                flavors: d,
                chords: g
            } = e, h = n.filter((e => Array.isArray(e))).length > 0, a = this.ee.createTabCanvas(r.length, i, h, Object.keys(g).length > 0 && t), o = [v.REST_1, v.REST_2, v.REST_4, v.REST_8, v.REST_16, v.REST_32, v.REST_64];
            for (let e = 0; e < r.length; ++e) {
                const s = r[e],
                    i = o.indexOf(s);
                s === v.BAR ? this.ee.bar(a, e) : s === v.DASH ? this.ee.dash(a, e) : i >= 0 ? this.ee.rest(a, e, i) : s === v.NULL || Array.isArray(s) && this.ee.multiPick(a, s, e)
            }
            return this.ee.drawChords(a, g, t), this.ee.drawTempo(a, r, n, f), this.ee.drawFlavors(a, d), this.ee.barNum(a, s), a.node.setAttribute("line-pos", e.linePos), a.node.setAttribute("column-num", e.barStartPos), a.node
        }
        _e(e, s) {
            let i = null;
            if (this.ke(e[s]) && !this.ke(e[s - 1])) {
                i = e[s];
                for (let t = s + 1; t < e.length && this.ke(e[t]); ++t) i += e[t]
            }
            return i
        }
        ke(e) {
            return /[a-zA-Z0-9#/\-_]/.test(e)
        }
        Le(e, s) {
            if (e[s] === v.PICK) return;
            let i = parseInt(e[s]);
            if (!isNaN(i)) {
                const t = parseInt(e[s + 1]);
                return isNaN(t) || (i = 10 * i + t), i
            }
            return null
        }
    }
    class he extends HTMLElement {
        connectedCallback() {
            // const e = this.textContent.split(/\n\n/);
            // const e = this.textContent.split(/\n\n/);
            // this.textContent = 
            // console.log(this.getAttribute("num"))
            var mytext = this.getAttribute("num").replace(/\t/g,'')
            if (this.getAttribute("string-num") == 4) return
            const e = mytext.split(/\n\n/)
            // const e = this.getAttribute("num").split(/\n\n/)
            console.log(e)
            this.textContent = "";
            const s = new ge;
            let i = !1;
            if (e.forEach((e => {
                    0 !== e.trim().length && (i |= s.parseFromText(e))
                })), i) {
                const e = this.offsetWidth,
                    i = parseFloat(this.getAttribute("scale")) || 1,
                    t = s.createSvg(e, this.hasAttribute("inline-chords"), this.hasAttribute("preview"), i),
                    r = parseInt(this.getAttribute("line-num")) + 1;
                t.forEach((e => {
                    e.setAttribute("line-num", String(parseInt(e.getAttribute("line-pos")) + r)), this.appendChild(e)
                })), this.setAttribute("string-num", s.getStringNum())
            }
        }
        disconnectedCallback() {}
    }
    const ae = window.AudioContext || window.webkitAudioContext,
        oe = new Audio;
    oe.src = "data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA==";
    let me = null,
        ue = !1;
    const ce = {
        get: () => (me = Ce(), ue || (ue = !0, "suspended" === me.state ? (document.body.addEventListener("touchstart", be), document.body.addEventListener("touchend", be), be()) : Ee()), me),
        close() {
            me && me.close && (me.close().catch((() => {})), me = null, ue = !1)
        }
    };

    function le(e) {
        return new Promise(((s, i) => {
            const t = new XMLHttpRequest;
            t.open("GET", e, !0), t.responseType = "arraybuffer", t.onload = () => {
                const e = t.response;
                s(e)
            }, t.onerror = () => {
                i(new Error("Network failure"))
            }, t.onabort = () => {
                i(new Error("Request aborted"))
            }, t.send()
        }))
    }

    function xe(e) {
        return new Promise(((s, i) => {
            try {
                Ce().decodeAudioData(e, s, i)
            } catch (e) {
                i(e)
            }
        }))
    }

    function Ce() {
        return me || (me = new ae, console.log("Creating audio context")), me
    }

    function be() {
        me.resume().then((() => {
            document.body.removeEventListener("touchstart", be), document.body.removeEventListener("touchend", be), Ee()
        }))
    }

    function Ee() {
        const e = oe.play();
        e && e.catch && e.catch((() => {}))
    }
    const Be = {
            tempo: 80,
            beats: 4,
            notesPerBeat: 2,
            rhythms: {}
        },
        Fe = "acoustic",
        Ge = {
            KICK: "kick",
            SNARE: "snare",
            HIHAT: "hihat",
            TOM1: "tom1",
            TOM2: "tom2",
            TOM3: "tom3"
        },
        Ae = {
            BASIC_4: {
                snare: [0, 0, 1, 0, 0, 0, 1, 0],
                hihat: [.3, .3, .3, .3, .3, .3, .3, .3],
                kick: [1, 0, 0, 0, 1, 0, 0, 0]
            },
            BASIC_3: {
                snare: [0, 0, 0, 1, 0, 0],
                hihat: [.3, .3, .3, .3, .3, .3],
                kick: [1, 0, 0, 0, 0, 0]
            }
        },
        pe = {
            [Ge.SNARE]: -1,
            [Ge.HIHAT]: 1
        };
    const De = {
        C3: [0, 1875],
        B2: [2150, 2267],
        E2: [4708, 2242],
        F2: [7242, 2258],
        "F#2": [9808, 2225],
        Gb2: [9808, 2225],
        G2: [12350, 2225],
        "G#2": [14900, 2183],
        Ab2: [14900, 2183],
        A2: [17400, 2217],
        "A#2": [19917, 2233],
        Bb2: [19917, 2233],
        "C#3": [22483, 1950],
        Db3: [22483, 1950],
        D3: [24750, 1925],
        "D#3": [27025, 1908],
        Eb3: [27025, 1908],
        E3: [29267, 1933],
        F3: [31533, 1917],
        "F#3": [33783, 1875],
        Gb3: [33783, 1875],
        G3: [36058, 1900],
        "G#3": [38300, 1892],
        Ab3: [38300, 1892],
        A3: [40517, 1950],
        "A#3": [42800, 1875],
        Bb3: [42800, 1875],
        B3: [45058, 1892],
        C4: [47275, 1708],
        "C#4": [49320, 1705],
        Db4: [49320, 1705],
        D4: [51350, 1683],
        "D#4": [53400, 1692],
        Eb4: [53400, 1692],
        E4: [55442, 1691],
        F4: [57475, 1700],
        "F#4": [59517, 1675],
        Gb4: [59517, 1675],
        G4: [61550, 1542],
        "G#4": [63600, 1650],
        Ab4: [63600, 1650],
        A4: [65608, 1650],
        "A#4": [67642, 1633],
        Bb4: [67642, 1633],
        B4: [69625, 1533],
        C5: [71658, 1275],
        "C#5": [73283, 1284],
        Db5: [73283, 1284],
        D5: [74908, 1292],
        "D#5": [76550, 1308],
        Eb5: [76550, 1308],
        E5: [78200, 1283]
    };

    function Me(e, s, i) {
        e.customElements.define(s, i)
    }
    self.hexi = {
        install: function (e) {
            // e._hexiInstalled || (Me(e, "hexi-sheet", fe), Me(e, "hexi-chord", k), Me(e, "hexi-tab", he), Me(e, "hexi-rhythm", P), e._hexiInstalled = !0)
        },
        Svg: F,
        shiftKey: a,
        dict: {
            guitar: x,
            ukulele: l
        }
    }, self.xiat = {
        audioContextProvider: ce,
        XiatMetronome: class {
            constructor() {
                this.ve = null, this.Se = null
            }
            get Te() {
                return ce.get()
            }
            play(e) {
                this.stop(), this.ve || (this.ve = function (e, s) {
                    const i = e.sampleRate,
                        t = e.createBuffer(1, 2 * i, i),
                        r = t.getChannelData(0);
                    let n = 0,
                        f = 1;
                    const d = i / 50;
                    for (let e = 0; e < d; e++) r[e] = Math.sin(n) * f, n += 2 * Math.PI * s / i, n > 2 * Math.PI && (n -= 2 * Math.PI), f -= 1 / d;
                    return t
                }(this.Te, 880)), this.Se = this.Te.createBufferSource(), this.Se.connect(this.Te.destination), this.Se.buffer = this.ve, this.Se.loop = !0, this.Se.loopEnd = 60 / e, this.Se.start(0)
            }
            stop() {
                this.Se && (this.Se.stop(), this.Se = null)
            }
            isPlaying() {
                return !!this.Se
            }
        },
        XiatDrum: class {
            constructor(e = Fe) {
                this.$e = null, this.Ne = null, this.Ie = null, this.Re = this.Pe(e).catch((e => null)), this.Oe = null, this.He = -1, this.Ze = 0
            }
            get ctx() {
                return ce.get()
            }
            initializeAudio() {
                return this.Oe || (this.Oe = this.Re.then((e => e ? this.ze(e) : Promise.reject(new Error("鼓声加载失败")))).then((e => {
                    this.$e = e, this.Ne = this.Ke(), this.Ie = this.Ue()
                }))), this.Oe
            }
            play(e) {
                if (!this.$e) return;
                this.Ze++, this.He = this.ctx.currentTime, this.Xe = 0;
                const s = Object.assign({}, Be, e);
                this.Qe(this.Ze, s)
            }
            Qe(e, s) {
                if (this.Ze !== e) return;
                const {
                    beats: i,
                    notesPerBeat: t,
                    tempo: r
                } = s;
                let {
                    rhythms: n
                } = s;
                if ("string" == typeof n && (n = Ae[n]), !n) throw new Error("Empty rhythms");
                const f = this.ctx.currentTime,
                    d = 60 / t / r;
                let g = this.Xe * d + this.He;
                for (; g < f + d;) {
                    if (this.Xe < i * t) this.Xe % t == 0 && this.We(g, this.$e.stick, 2);
                    else {
                        const e = (this.Xe - i * t) % (t * i);
                        for (const s in n)
                            if (n.hasOwnProperty(s)) {
                                const i = n[s][e];
                                i && this.playNote(s, g, i)
                            }
                    }
                    this.Xe++, g = this.Xe * d + this.He
                }
                setTimeout((() => {
                    this.Qe(e, s)
                }), 20)
            }
            playNote(e, s, i) {
                this.$e && this.$e[e] && this.We(s, this.$e[e], i, pe[e])
            }
            stop() {
                this.Ze++, this.He = -1
            }
            isPlaying() {
                return this.He >= 0
            }
            We(e, s, i, t) {
                const r = this.ctx.createBufferSource();
                r.buffer = s;
                const n = this.ctx.createGain();
                n.gain.value = i || 1, r.connect(n);
                let f = n;
                if (t) {
                    const e = this.ctx.createPanner();
                    e.panningModel = "HRTF", e.setPosition(t, 0, 0), n.connect(e), f = e
                }
                f.connect(this.Ne), f.connect(this.Ie), r.start(e)
            }
            Ke() {
                let e = this.ctx.destination;
                if (this.ctx.createDynamicsCompressor) {
                    const s = this.ctx.createDynamicsCompressor();
                    s.connect(this.ctx.destination), e = s
                }
                const s = this.ctx.createGain();
                return s.gain.value = .7, s.connect(e), s
            }
            Ue(e = 1) {
                const s = this.ctx.createConvolver(),
                    i = this.ctx.createGain();
                return i.gain.value = e, i.connect(this.Ne), s.connect(i), s.buffer = this.$e.stick, s
            }
            Pe(e) {
                const s = {},
                    i = Object.values(Ge).map((i => le("https://cdn.yoopu.me/sound/drum-samples/" + e + "/" + i + ".mp3").then((e => {
                        s[i] = e
                    }))));
                return i.push(le("https://cdn.yoopu.me/sound/drum-samples/common/stick.mp3").then((e => s.stick = e))), i.push(le("https://cdn.yoopu.me/sound/drum-effect/living-room.mp3").then((e => s.effect = e))), i.forEach((e => {
                    e.catch((() => {}))
                })), Promise.all(i).then((() => s))
            }
            ze(e) {
                const s = [],
                    i = {};
                for (const t in e) e.hasOwnProperty(t) && s.push(xe(e[t]).then((e => {
                    i[t] = e
                })));
                return Promise.all(s).then((() => i))
            }
        },
        XiatSynth: class {
            constructor() {
                this.Ye = null, this.Re = le("https://cdn.yoopu.me/sound/guitar-sound-1.m4a").catch((() => null))
            }
            get ctx() {
                return ce.get()
            }
            initializeAudio() {
                return this.Ye ? Promise.resolve() : this.Re.then((e => e ? xe(e).then((e => {
                    this.Ye = e
                })) : Promise.reject(new Error("音效加载失败"))))
            }
            strumChord(e, s) {
                this.initializeAudio().then((() => {
                    let i = this.ctx.currentTime;
                    const t = e.getPitches();
                    s && t.reverse(), t.forEach((e => {
                        e && (i += .01, "C3" === e ? this.playNote(e, i + .1) : this.playNote(e, i))
                    }))
                }))
            }
            playNote(e, s = 0) {
                if (console.log(e), !this.Ye) return;
                const [i, t] = De[e], r = this.ctx.createBufferSource();
                r.buffer = this.Ye, r.connect(this.ctx.destination), r.start(s, i / 1e3, t / 1e3)
            }
        }
    }
    Me(window, "hexi-sheet", fe), Me(window, "hexi-chord", k), Me(window, "hexi-tab", he), Me(window, "hexi-rhythm", P)

};
initdiv()


function linesvgTpl(paperPaddingLeft, paperPaddingTop) {

    var src = ''
    // svgline
    var svgline = $('#linesvg').children().children().attr({
        x: paperPaddingLeft,
    })
    // console.log(svgline)
    svglinenum = svgline.length
    // console.log(paperPaddingTop)
    if (paperPaddingTop != undefined && svglinenum != 0) {
        var paperPaddingTop = paperPaddingTop - 0 + 110
        svglinehtml = ""
        svgline.each((index, element) => {
            // console.log(element)
            // paperPaddingTop = paperPaddingTop + index  * 45
            $(element).attr({
                y: paperPaddingTop + index * 100,
            })
            svglinehtml += $(element).prop("outerHTML")
            // console.log(svglinehtml)
        });
        src += svglinehtml
        // console.log(svgline)
        // paperPaddingTop += (svglinenum - 1) * 100
    }
    // svgline
    // console.log(paperPaddingTop)
    // console.log(src)
    return src
}

function linebottomsvgTpl(paperPaddingLeft, paperPaddingTop) {
    var src = ''
    // svgline
    var svgline = $('#linebottomsvg').children().children().attr({
        x: paperPaddingLeft,
    })

    svgbottomlinenum = svgline.length
    // console.log(paperPaddingTop)
    if (paperPaddingTop != undefined && svgbottomlinenum != 0) { //---等于hexiansvg
        var paperPaddingTop = paperPaddingTop - 20 - svgbottomlinenum * 100
        svglinehtml = ""
        svgline.each((index, element) => {
            // console.log(paperPaddingTop)
            // paperPaddingTop = paperPaddingTop + index  * 45
            $(element).attr({
                y: paperPaddingTop + index * 100,
            })
            svglinehtml += $(element).prop("outerHTML")
        });
        src += svglinehtml
        // console.log(svgline)
        paperPaddingTop += (svgbottomlinenum - 1) * 100
    } //---等于hexiansvg
    // svgline
    // console.log(paperPaddingTop)
    // console.log(src)
    $('.sheet-svg').attr(
        'height',
        paperPaddingTop
    )
    return src
}

// linesvgTpl()
window.linesvgTpl = linesvgTpl
// window.linebottomsvgTpl = linebottomsvgTpl

// if (typeof linebottomsvgTpl != 'undefined') {
//     sheetDom.html(sheetDom.html() + linebottomsvgTpl(sheetDom.width()))
// }




// 旧版hexiansvg.js
var cvgdata = [
    [{
            A: "{define: A frets x r0 2 2 2 0 fingers 0 0 1 2 3 0}"
        },
        {
            Am: "{define: Am frets x r0 2 2 1 0 fingers 0 0 2 3 1 0}"
        },
        {
            Adim: "{define: Adim frets x r0 1 2 1 x fingers 0 0 2 3 1 0}"
        },
        {
            Aaug: "{define: Aaug frets x r0 3 2 2 1 fingers 0 0 4 2 3 1}"
        },
        {
            Amaj7: "{define: Amaj7 frets x r0 2 1 2 0 fingers 0 0 2 1 3 0}"
        },
        {
            Am7: "{define: Am7 frets x r0 2 0 1 0 fingers 0 0 2 0 1 0}"
        },
        {
            A7: "{define: A7 frets x r0 2 0 2 0 fingers 0 0 2 0 3 0}"
        },
        {
            Adim7: "{define: Adim7 frets x r0 1 2 1 2 fingers 0 0 1 2 1 2}"
        },
        {
            AmM7: "{define: AmM7 frets x r0 2 1 1 0 fingers 0 0 3 1 2 0}"
        },
        {
            Aaug7: "{define: Aaug7 frets x r0 3 1 2 1 fingers 0 0 4 1 3 2}"
        },
        {
            "Am7-5": "{define: Am7-5 frets x r0 1 2 1 3 fingers 0 0 1 3 2 4}"
        },
        {
            Asus2: "{define: Asus2 frets x r0 2 2 0 0 fingers 0 0 1 2 0 0 }"
        },
        {
            Asus4: "{define: Asus4 frets x r0 0 2 3 0 fingers 0 0 0 1 2 0}"
        },
        {
            A7sus2: "{define: A7sus2 frets x r0 2 0 0 0 fingers 0 0 1 0 0 0}"
        },
        {
            A7sus4: "{define: A7sus4 frets x r0 0 0 3 0 fingers 0 0 0 0 3 0}"
        },
        {
            A6: "{define: A6 frets x r0 4 2 2 0 fingers 0 0 4 2 2 0}"
        },
        {
            Am6: "{define: Am6 frets x r0 4 2 1 0 fingers 0 0 3 2 1 0}"
        },
        {
            Amaj9: "{define: Amaj9 frets x r0 2 4 2 4 fingers 0 0 1 3 2 4}"
        },
        {
            Am9: "{define: Am9 frets x r0 2 4 1 3 fingers 0 0 2 4 1 3}"
        },
        {
            A9: "{define: A9 frets x r0 2 4 2 3 fingers 0 0 1 4 2 3}"
        },
        {
            Aadd9: "{define: Aadd9 frets x r0 2 4 2 0 fingers 0 0 1 3 2 0}"
        },
        {
            Amadd9: "{define: Amadd9 frets x r0 2 4 1 0 fingers 0 0 2 3 1 0}"
        },
        {
            A5: "{define: A5 frets x r0 2 2 x x fingers 0 0 1 2 0 0}"
        },
        {
            "A/C#": "{define: A/C# frets x 4 2 2 2 x fingers 0 3 1 1 1 0}"
        },
        {
            "A/E": "{define: A/E frets 0 0 2 2 2 x fingers 0 0 1 1 1 0}"
        },
    ],
    [{
            Bb: "{define: Bb frets x r1 0 3 3 1 fingers 0 1 0 3 4 2}"
        },
        {
            Bbm: "{define: Bbm frets x r1 3 3 2 1 fingers 0 1 3 4 2 1}"
        },
        {
            Bbdim: "{define: Bbdim frets x r1 2 3 2 0 fingers 0 1 2 4 3 0}"
        },
        {
            Bbaug: "{define: Bbaug frets x r1 0 3 3 2 fingers 0 1 0 3 4 2}"
        },
        {
            Bbmaj7: "{define: Bbmaj7 frets x r1 0 2 3 1 fingers 0 1 0 3 4 2}"
        },
        {
            Bbm7: "{define: Bbm7 frets x r1 3 1 2 1 fingers 0 1 3 0 2 1}"
        },
        {
            Bb7: "{define: Bb7 frets x r1 0 1 3 1 fingers 0 1 0 1 3 1}"
        },
        {
            Bbdim7: "{define: Bbdim7 frets x r1 2 0 2 0 fingers 0 1 2 0 3 0}"
        },
        {
            BbmM7: "{define: BbmM7 frets x r1 3 2 2 1 fingers 0 1 3 2 2 1}"
        },
        {
            Bbaug7: "{define: Bbaug7 frets x r1 0 2 3 2 fingers 0 1 0 2 4 3}"
        },
        {
            "Bbm7-5": "{define: Bbm7-5 frets x r1 2 1 2 0 fingers 0 1 3 2 4 0}"
        },
        {
            Bbsus2: "{define: Bbsus2 frets x r1 3 3 1 1 fingers 0 1 2 3 1 1}"
        },
        {
            Bbsus4: "{define: Bbsus4 frets x 1 1 3 4 1 fingers 0 1 1 2 3 1}"
        },
        {
            Bb7sus2: "{define: Bb7sus2 frets x r1 3 1 1 1 fingers 0 1 3 1 1 1}"
        },
        {
            Bb7sus4: "{define: Bb7sus4 frets x r1 1 1 4 1 fingers 0 1 1 1 2 1}"
        },
        {
            Bb6: "{define: Bb6 frets x r1 0 0 3 1 fingers 0 1 0 0 3 2}"
        },
        {
            Bbm6: "{define: Bbm6 frets x r1 3 0 2 1 fingers 0 1 4 0 3 2 }"
        },
        {
            Bbmaj9: "{define: Bbmaj9 frets x r1 0 2 1 1 fingers 0 1 0 4 2 3}"
        },
        {
            Bbm9: "{define: Bbm9 frets r6 8 6 6 6 8 fingers 1 2 1 1 1 3}"
        },
        {
            Bb9: "{define: Bb9 frets x r1 0 1 1 1 fingers 0 1 0 2 3 4 }"
        },
        {
            Bbadd9: "{define: Bbadd9 frets x r1 0 3 1 1 fingers 0 1 0 4 2 3}"
        },
        {
            Bbmadd9: "{define: Bbmadd9 frets x r1 3 1 2 1 fingers 0 1 3 1 2 1}"
        },
        {
            Bb5: "{define: Bb5 frets x r1 3 3 x x fingers 0 1 3 4 0 0}"
        },
    ],
    [{
            B: "{define: B frets x r2 4 4 4 2 fingers 0 1 2 3 4 1}"
        },
        {
            Bm: "{define: Bm frets x r2 4 4 3 2 fingers 0 1 3 2 4 1}"
        },
        {
            Bdim: "{define: Bdim frets x r2 0 4 3 1 fingers 0 2 0 4 3 1}"
        },
        {
            Baug: "{define: Baug frets x r2 1 0 0 3 fingers 0 2 1 0 0 3}"
        },
        {
            Bmaj7: "{define: Bmaj7 frets x r2 1 3 0 2 fingers 0 2 1 4 0 3}"
        },
        {
            Bm7: "{define: Bm7 frets x r2 4 2 3 2 fingers 0 1 3 1 4 1}"
        },
        {
            B7: "{define: B7 frets x r2 1 2 0 2 fingers 0 2 1 3 0 4}"
        },
        {
            Bdim7: "{define: Bdim7 frets x r2 0 1 0 1 fingers 0 3 0 1 0 2}"
        },
        {
            BmM7: "{define: BmM7 frets x r2 0 3 0 2 fingers 0 1 0 3 0 2}"
        },
        {
            Baug7: "{define: Baug7 frets x r2 1 3 0 3 fingers 0 2 1 3 0 4}"
        },
        {
            "Bm7-5": "{define: Bm7-5 frets x r2 0 2 0 1 fingers 0 2 0 3 0 1}"
        },
        {
            Bsus2: "{define: Bsus2 frets x r2 4 4 2 2 fingers 0 1 2 3 1 1 }"
        },
        {
            Bsus4: "{define: Bsus4 frets x r2 2 4 5 2 fingers 0 1 1 2 3 1}"
        },
        {
            B7sus2: "{define: B7sus2 frets x r2 4 2 2 2 fingers 0 1 2 1 1 1}"
        },
        {
            B7sus4: "{define: B7sus4 frets x 2 4 2 0 0 fingers 0 1 3 2 0 0}"
        },
        {
            B6: "{define: B6 frets x r2 1 1 0 2 fingers 0 3 1 2 0 4}"
        },
        {
            Bm6: "{define: Bm6 frets x r2 0 1 0 2 fingers 0 2 0 1 0 3}"
        },
        {
            Bmaj9: "{define: Bmaj9 frets r7 4 4 4 4 6 fingers 3 1 1 1 1 2}"
        },
        {
            Bm9: "{define: Bm9 frets x r2 0 2 2 2 fingers 0 1 0 2 3 4}"
        },
        {
            B9: "{define: B9 frets r7 4 4 4 4 5 fingers 3 1 1 1 1 2}"
        },
        {
            Badd9: "{define: Badd9 frets x r2 4 2 4 2 fingers 0 1 2 1 3 1}"
        },
        {
            Bmadd9: "{define: Bmadd9 frets x r2 0 4 2 2 fingers 0 1 0 4 2 3}"
        },
        {
            B5: "{define: B5 frets x r2 4 4 x x fingers 0 1 3 4 0 0}"
        },
    ],
    [{
            C: "{define: C frets x r3 2 0 1 0 fingers 0 3 2 0 1 0}"
        },
        {
            Cm: "{define: Cm frets x r3 1 0 1 3 fingers 0 2 1 0 4 3}"
        },
        {
            Cdim: "{define: Cdim frets x x 1 2 1 2 fingers 0 0 1 2 3 4}"
        },
        {
            Caug: "{define: Caug frets x r3 2 1 1 0 fingers 0 4 3 1 2 0}"
        },
        {
            Cmaj7: "{define: Cmaj7 frets x r3 2 0 0 0 fingers 0 2 1 0 0 0}"
        },
        {
            Cm7: "{define: Cm7 frets x r3 1 3 1 3 fingers 0 2 1 3 1 4}"
        },
        {
            C7: "{define: C7 frets x r3 2 3 1 0 fingers 0 3 2 4 1 0}"
        },
        {
            Cdim7: "{define: Cdim7 frets x r3 1 2 1 2 fingers 0 4 1 2 1 3}"
        },
        {
            CmM7: "{define: CmM7 frets x r3 1 0 0 3 fingers 0 2 1 0 0 3}"
        },
        {
            Caug7: "{define: Caug7 frets x r3 2 1 0 0 fingers 0 3 2 1 0 0}"
        },
        {
            "Cm7-5": "{define: Cm7-5 frets x r3 1 3 1 2 fingers 0 3 1 4 1 2}"
        },
        {
            Csus2: "{define: Csus2 frets x r3 0 0 1 3 fingers 0 2 0 0 1 3}"
        },
        {
            Csus4: "{define: Csus4 frets x r3 3 0 1 1 fingers 0 3 4 0 1 2}"
        },
        {
            C7sus2: "{define: C7sus2 frets x r3 0 3 1 3 fingers 0 2 0 3 1 4}"
        },
        {
            C7sus4: "{define: C7sus4 frets x r3 1 3 1 1 fingers 0 2 1 3 1 1}"
        },
        {
            C6: "{define: C6 frets x r3 2 2 5 3 fingers 0 2 1 1 4 3}"
        },
        {
            Cm6: "{define: Cm6 frets x r3 1 2 1 3 fingers 0 3 1 2 1 4}"
        },
        {
            Cmaj9: "{define: Cmaj9 frets x r3 0 0 0 0 fingers 0 3 0 0 0 0}"
        },
        {
            Cm9: "{define: Cm9 frets x r3 0 3 4 3 fingers 0 1 0 2 4 3}"
        },
        {
            C9: "{define: C9 frets x r3 2 3 3 x fingers 0 2 1 3 4 0}"
        },
        {
            Cadd9: "{define: Cadd9 frets x r3 2 0 3 0 fingers 0 2 1 0 3 0}"
        },
        {
            Cmadd9: "{define: Cmadd9 frets x r3 0 0 4 3 fingers 0 1 0 0 3 2}"
        },
        {
            C5: "{define: C5 frets x r3 5 5 x x fingers 0 1 3 4 0 0}"
        },
        {
            "C/E": "{define: C/E frets r0 3 2 0 1 0 fingers 0 3 2 0 1 0}"
        },
        {
            "C/G": "{define: C/G frets 3 r3 2 0 1 0 fingers 3 4 2 0 1 0}"
        },
    ],
    [{
            "C#": "{define: C# frets x r4 3 1 2 1 fingers 0 4 3 1 2 1}"
        },
        {
            "C#m": "{define: C#m frets x r4 2 1 2 0 fingers 0 4 2 1 3 0}"
        },
        {
            "C#dim": "{define: C#dim frets x r4 2 0 2 0 fingers 0 4 1 0 2 0}"
        },
        {
            "C#aug": "{define: C#aug frets x r4 3 2 2 5 fingers 0 3 2 1 1 4}"
        },
        {
            "C#maj7": "{define: C#maj7 frets x r4 3 1 1 1 fingers 0 3 2 1 1 1}"
        },
        {
            "C#m7": "{define: C#m7 frets x r4 2 1 0 0 fingers 0 3 2 1 0 0}"
        },
        {
            "C#7": "{define: C#7 frets x r4 3 1 0 1 fingers 0 4 3 1 0 2}"
        },
        {
            "C#dim7": "{define: C#dim7 frets x r4 2 3 2 3 fingers 0 4 1 2 1 3}"
        },
        {
            "C#mM7": "{define: C#mM7 frets x r4 2 1 1 0 fingers 0 4 3 1 2 0}"
        },
        {
            "C#aug7": "{define: C#aug7 frets x r4 3 2 1 1 fingers 0 4 3 2 1 1}"
        },
        {
            "C#m7-5": "{define: C#m7-5 frets x r4 2 0 0 0 fingers 0 2 1 0 0 0}"
        },
        {
            "C#sus2": "{define: C#sus2 frets x r4 1 1 2 4 fingers 0 3 1 1 2 4}"
        },
        {
            "C#sus4": "{define: C#sus4 frets x r4 4 6 7 4 fingers 0 1 1 2 3 1}"
        },
        {
            "C#7sus2": "{define: C#7sus2 frets x r4 1 1 0 4 fingers 0 3 1 2 0 4}"
        },
        {
            "C#7sus4": "{define: C#7sus4 frets x r4 4 1 0 2 fingers 0 3 4 1 0 2}"
        },
        {
            "C#6": "{define: C#6 frets x r4 3 3 6 4 fingers 0 2 1 1 4 3}"
        },
        {
            "C#m6": "{define: C#m6 frets x r4 2 3 2 4 fingers 0 3 1 2 1 4}"
        },
        {
            "C#maj9": "{define: C#maj9 frets x r4 1 1 1 1 fingers 0 2 1 1 1 1}"
        },
        {
            "C#m9": "{define: C#m9 frets x r4 1 1 0 0 fingers 0 3 1 2 0 0}"
        },
        {
            "C#9": "{define: C#9 frets x r4 1 1 0 1 fingers 0 4 1 2 0 3}"
        },
        {
            "C#add9": "{define: C#add9 frets x r4 2 2 3 2 fingers 0 3 1 1 2 1}"
        },
        {
            "C#madd9": "{define: C#madd9 frets x r4 1 1 2 0 fingers 0 4 1 2 3 0}"
        },
        {
            "C#5": "{define: C#5 frets x r4 6 6 x x fingers 0 1 3 4 0 0}"
        },
    ],
    [{
            D: "{define: D frets x x r0 2 3 2 fingers 0 0 0 1 3 2}"
        },
        {
            Dm: "{define: Dm frets x x r0 2 3 1 fingers 0 0 0 2 3 1}"
        },
        {
            Ddim: "{define: Ddim frets x r1 3 1 3 1 fingers 0 1 2 1 3 1}"
        },
        {
            Daug: "{define: Daug frets x x r0 3 3 2 fingers 0 0 0 2 3 1}"
        },
        {
            Dmaj7: "{define: Dmaj7 frets x x r0 2 2 2 fingers 0 0 0 1 2 3}"
        },
        {
            Dm7: "{define: Dm7 frets x x r0 2 1 1 fingers 0 0 0 3 1 2}"
        },
        {
            D7: "{define: D7 frets x x r0 2 1 2 fingers 0 0 0 2 1 3}"
        },
        {
            Ddim7: "{define: Ddim7 frets x x r0 1 0 1 fingers 0 0 0 1 0 2}"
        },
        {
            DmM7: "{define: DmM7 frets x x r0 2 2 1 fingers 0 0 0 2 3 1}"
        },
        {
            Daug7: "{define: Daug7 frets x x r0 3 2 2 fingers 0 0 0 3 1 2}"
        },
        {
            "Dm7-5": "{define: Dm7-5 frets x x r0 1 1 1 fingers 0 0 0 1 2 3}"
        },
        {
            Dsus2: "{define: Dsus2 frets x x r0 2 3 0 fingers 0 0 0 1 2 0}"
        },
        {
            Dsus4: "{define: Dsus4 frets x x r0 2 3 3 fingers 0 0 0 1 2 3}"
        },
        {
            D7sus2: "{define: D7sus2 frets x x r0 2 1 0 fingers 0 0 0 2 1 0}"
        },
        {
            D7sus4: "{define: D7sus4 frets x x r0 2 1 3 fingers 0 0 0 2 1 3}"
        },
        {
            D6: "{define: D6 frets x x r0 2 0 2 fingers 0 0 0 1 0 2}"
        },
        {
            Dm6: "{define: Dm6 frets x x r0 2 0 1 fingers 0 0 0 2 0 1}"
        },
        {
            Dmaj9: "{define: Dmaj9 frets x r5 2 2 2 2 fingers 0 2 1 1 1 1}"
        },
        {
            Dm9: "{define: Dm9 frets x r1 2 2 1 1 fingers 0 1 2 3 1 1}"
        },
        {
            D9: "{define: D9 frets x r5 4 5 5 x fingers 0 2 1 3 4 0}"
        },
        {
            Dadd9: "{define: Dadd9 frets x r5 2 2 3 2 fingers 0 3 1 1 2 1}"
        },
        {
            Dmadd9: "{define: Dmadd9 frets x r5 2 2 2 5 fingers 0 2 1 1 1 3}"
        },
        {
            D5: "{define: D5 frets x x r0 2 3 x fingers 0 0 0 1 2 0 }"
        },
        {
            "D/F#": "{define: D/F# frets r2 0 0 2 3 2 fingers T 0 0 1 3 2}"
        },
        {
            "D/A": "{define: D/A frets x r0 0 2 3 2 fingers 0 0 0 1 3 2}"
        },
    ],
    [{
            Eb: "{define: Eb frets x x r1 3 4 3 fingers 0 0 1 2 4 3}"
        },
        {
            Ebm: "{define: Ebm frets x x r1 3 4 2 fingers 0 0 1 3 4 2}"
        },
        {
            Ebdim: "{define: Ebdim frets x x r1 2 4 2 fingers 0 0 1 2 4 3}"
        },
        {
            Ebaug: "{define: Ebaug frets x x r1 4 4 3 fingers 0 0 1 3 4 2}"
        },
        {
            Ebmaj7: "{define: Ebmaj7 frets x x r1 3 3 3 fingers 0 0 1 2 3 4}"
        },
        {
            Ebm7: "{define: Ebm7 frets x x r1 3 2 2 fingers 0 0 1 4 2 3}"
        },
        {
            Eb7: "{define: Eb7 frets x x r1 3 2 3 fingers 0 0 1 3 2 4}"
        },
        {
            Ebdim7: "{define: Ebdim7 frets x x r1 2 1 2 fingers 0 0 1 2 1 3}"
        },
        {
            EbmM7: "{define: EbmM7 frets x x r1 3 3 2 fingers 0 0 1 3 4 2}"
        },
        {
            Ebaug7: "{define: Ebaug7 frets x x r1 4 3 3 fingers 0 0 1 4 2 3}"
        },
        {
            "Ebm7-5": "{define: Ebm7-5 frets x x r1 2 2 2 fingers 0 0 1 2 3 4}"
        },
        {
            Ebsus2: "{define: Ebsus2 frets x x r1 3 4 1 fingers 0 0 1 2 3 1}"
        },
        {
            Ebsus4: "{define: Ebsus4 frets x x r1 3 4 4 fingers 0 0 1 2 3 4}"
        },
        {
            Eb7sus2: "{define: Eb7sus2 frets x x r1 3 2 1 fingers 0 0 1 3 2 1}"
        },
        {
            Eb7sus4: "{define: Eb7sus4 frets x x r1 3 2 4 fingers 0 0 1 3 2 4}"
        },
        {
            Eb6: "{define: Eb6 frets x x r1 3 1 3 fingers 0 0 1 2 1 3}"
        },
        {
            Ebm6: "{define: Ebm6 frets x x r1 3 1 2 fingers 0 0 1 3 1 2}"
        },
        {
            Ebmaj9: "{define: Ebmaj9 frets x x r1 0 3 1 fingers 0 0 1 0 4 2}"
        },
        {
            Ebm9: "{define: Ebm9 frets x r2 3 3 2 2 fingers 0 1 2 3 1 1}"
        },
        {
            Eb9: "{define: Eb9 frets x x r1 0 2 1 fingers 0 0 1 0 3 2}"
        },
        {
            Ebadd9: "{define: Ebadd9 frets x r3 3 3 4 3 fingers 0 3 1 1 2 1}"
        },
        {
            Ebmadd9: "{define: Ebmadd9 frets x r6 3 3 3 6 fingers 0 2 1 1 1 3}"
        },
        {
            Eb5: "{define: Eb5 frets x x r1 3 4 x fingers 0 0 1 3 4 0}"
        },
    ],
    [{
            E: "{define: E frets r0 2 r2 1 0 0 fingers 0 2 3 1 0 0}"
        },
        {
            Em: "{define: Em frets r0 2 r2 0 0 0 fingers 0 2 3 0 0 0}"
        },
        {
            Edim: "{define: Edim frets x x r2 3 5 3 fingers 0 0 1 2 4 3}"
        },
        {
            Eaug: "{define: Eaug frets r0 3 r2 1 1 0 fingers 0 4 3 1 2 0}"
        },
        {
            Emaj7: "{define: Emaj7 frets r0 2 1 1 0 0 fingers 0 3 1 2 0 0}"
        },
        {
            Em7: "{define: Em7 frets r0 2 2 0 3 0 fingers 0 1 2 0 3 0}"
        },
        {
            E7: "{define: E7 frets r0 2 0 1 0 0 fingers 0 2 0 1 0 0}"
        },
        {
            Edim7: "{define: Edim7 frets r0 1 r2 0 3 0 fingers 0 1 2 0 3 0}"
        },
        {
            EmM7: "{define: EmM7 frets r0 2 1 0 0 0 fingers 0 2 1 0 0 0}"
        },
        {
            Eaug7: "{define: Eaug7 frets r0 3 1 1 1 0 fingers 0 4 1 2 3 0}"
        },
        {
            "Em7-5": "{define: Em7-5 frets r0 1 2 0 3 0 fingers 0 1 2 0 3 0}"
        },
        {
            Esus2: "{define: Esus2 frets x x r2 4 5 2 fingers 0 0 1 2 3 1}"
        },
        {
            Esus4: "{define: Esus4 frets r0 0 r2 2 0 0 fingers 0 0 1 2 0 0}"
        },
        {
            E7sus2: "{define: E7sus2 frets r0 2 4 4 3 0 fingers 0 1 3 4 2 0}"
        },
        {
            E7sus4: "{define: E7sus4 frets r0 0 0 2 0 0 fingers 0 0 0 1 0 0}"
        },
        {
            E6: "{define: E6 frets r0 4 r2 1 0 0 fingers 0 3 2 1 0 0}"
        },
        {
            Em6: "{define: Em6 frets r0 4 r2 0 0 0 fingers 0 2 1 0 0 0}"
        },
        {
            Emaj9: "{define: Emaj9 frets r0 2 4 1 4 0 fingers 0 2 3 1 4 0}"
        },
        {
            Em9: "{define: Em9 frets r0 2 4 0 3 0 fingers 0 1 3 0 2 0}"
        },
        {
            E9: "{define: E9 frets r0 2 4 1 3 0 fingers 0 2 4 1 3 0}"
        },
        {
            Eadd9: "{define: Eadd9 frets r0 2 4 1 0 0 fingers 0 2 3 1 0 0}"
        },
        {
            Emadd9: "{define: Emadd9 frets r0 2 4 0 0 0 fingers 0 1 2 0 0 0}"
        },
        {
            E5: "{define: E5 frets r0 2 r2 0 0 0 fingers 0 1 2 0 0 0}"
        },
        {
            "E/G#": "{define: E/G# frets r4 2 2 1 0 0 fingers 4 2 3 1 0 0}"
        },
        {
            "E/B": "{define: E/B frets 0 r2 2 1 0 0 fingers 0 2 3 1 0 0}"
        },
    ],
    [{
            F: "{define: F frets r1 3 r3 2 1 1 fingers 1 3 4 2 1 1}"
        },
        {
            Fm: "{define: Fm frets r1 3 r3 1 1 1 fingers 1 2 3 1 1 1}"
        },
        {
            Fdim: "{define: Fdim frets x x r3 1 0 1 fingers 0 0 3 1 0 2}"
        },
        {
            Faug: "{define: Faug frets x x r3 2 2 1 fingers 0 0 4 2 3 1}"
        },
        {
            Fmaj7: "{define: Fmaj7 frets r1 0 3 2 1 0 fingers T 0 3 2 1 0}"
        },
        {
            Fm7: "{define: Fm7 frets r1 3 1 1 1 1 fingers 1 2 1 1 1 1}"
        },
        {
            F7: "{define: F7 frets r1 3 1 2 1 1 fingers 1 3 1 2 1 1}"
        },
        {
            Fdim7: "{define: Fdim7 frets r1 2 0 2 0 2 fingers 1 4 0 2 0 3}"
        },
        {
            FmM7: "{define: FmM7 frets r1 3 2 1 1 1 fingers 1 3 2 1 1 1}"
        },
        {
            Faug7: "{define: Faug7 frets r1 0 r3 2 2 0 fingers 1 0 4 2 3 0 }"
        },
        {
            "Fm7-5": "{define: Fm7-5 frets r1 2 r3 1 4 1 fingers 1 2 3 1 4 1}"
        },
        {
            Fsus2: "{define: Fsus2 frets x x r3 0 1 1 fingers 0 0 3 0 1 2 }"
        },
        {
            Fsus4: "{define: Fsus4 frets r1 1 r3 3 1 1 fingers 1 1 2 3 1 1}"
        },
        {
            F7sus2: "{define: F7sus2 frets x x r3 5 4 3 fingers 0 0 1 3 2 1}"
        },
        {
            F7sus4: "{define: F7sus4 frets r1 1 1 3 1 1 fingers 1 1 1 2 1 1}"
        },
        {
            F6: "{define: F6 frets r1 0 0 2 1 1 fingers 1 0 0 4 2 3}"
        },
        {
            Fm6: "{define: Fm6 frets r1 3 r3 1 3 1 fingers 1 2 3 1 4 1}"
        },
        {
            Fmaj9: "{define: Fmaj9 frets r1 0 2 0 1 1 fingers 1 0 4 0 2 3}"
        },
        {
            Fm9: "{define: Fm9 frets r1 3 1 1 1 3 fingers 1 2 1 1 1 3}"
        },
        {
            F9: "{define: F9 frets r1 0 1 0 1 1 fingers 1 0 2 0 3 4}"
        },
        {
            Fadd9: "{define: Fadd9 frets r1 0 r3 0 1 1 fingers 1 0 4 0 2 3}"
        },
        {
            Fmadd9: "{define: Fmadd9 frets x x r3 0 1 4 fingers 0 0 2 0 1 3}"
        },
        {
            F5: "{define: F5 frets r1 3 r3 x x x fingers 1 3 4 0 0 0 }"
        },
    ],
    [{
            "F#": "{define: F# frets r2 4 r4 3 2 2 fingers 1 3 4 2 1 1}"
        },
        {
            "F#m": "{define: F#m frets r2 4 r4 2 2 2 fingers 1 2 3 1 1 1}"
        },
        {
            "F#dim": "{define: F#dim frets x x r4 2 1 2 fingers 0 0 4 2 1 3}"
        },
        {
            "F#aug": "{define: F#aug frets x x r4 3 3 2 fingers 0 0 4 2 3 1}"
        },
        {
            "F#maj7": "{define: F#maj7 frets r2 4 3 3 2 2 fingers 1 4 2 3 1 1}"
        },
        {
            "F#m7": "{define: F#m7 frets r2 4 2 2 2 2 fingers 1 2 1 1 1 1}"
        },
        {
            "F#7": "{define: F#7 frets r2 4 2 3 2 2 fingers 1 3 1 2 1 1}"
        },
        {
            "F#dim7": "{define: F#dim7 frets r2 3 4 2 4 2 fingers 1 2 3 1 4 1}"
        },
        {
            "F#mM7": "{define: F#mM7 frets r2 4 3 2 2 2 fingers 1 3 2 1 1 1}"
        },
        {
            "F#aug7": "{define: F#aug7 frets x x r4 3 3 1 fingers 0 0 4 2 3 1}"
        },
        {
            "F#m7-5": "{define: F#m7-5 frets r2 0 r4 2 1 0 fingers 2 0 4 3 1 0}"
        },
        {
            "F#sus2": "{define: F#sus2 frets x x r4 1 2 2 fingers 0 0 4 1 2 3 }"
        },
        {
            "F#sus4": "{define: F#sus4 frets r2 2 r4 4 2 2 fingers 1 1 2 3 1 1}"
        },
        {
            "F#7sus2": "{define: F#7sus2 frets x x r4 1 2 0 fingers 0 0 3 1 2 0}"
        },
        {
            "F#7sus4": "{define: F#7sus4 frets r2 2 2 4 2 2 fingers 1 1 1 2 1 1}"
        },
        {
            "F#6": "{define: F#6 frets r2 2 4 3 2 2 fingers 1 1 3 2 1 1}"
        },
        {
            "F#m6": "{define: F#m6 frets r2 4 r4 2 4 2 fingers 1 2 3 1 4 1}"
        },
        {
            "F#maj9": "{define: F#maj9 frets r2 1 r4 1 2 1 fingers 2 1 4 1 3 1}"
        },
        {
            "F#m9": "{define: F#m9 frets r2 0 4 1 2 0 fingers 2 0 4 1 3 0}"
        },
        {
            "F#9": "{define: F#9 frets r2 4 2 3 2 4 fingers 1 3 1 2 1 4}"
        },
        {
            "F#add9": "{define: F#add9 frets x x r4 3 2 4 fingers 0 0 3 2 1 4}"
        },
        {
            "F#madd9": "{define: F#madd9 frets x x r4 2 2 4 fingers 0 0 2 1 1 3}"
        },
        {
            "F#5": "{define: F#5 frets r2 4 r4 x x x fingers 1 3 4 0 0 0}"
        },
    ],
    [{
            G: "{define: G frets r3 2 0 0 0 3 fingers 2 1 0 0 0 3}"
        },
        {
            Gm: "{define: Gm frets r3 1 0 0 3 3 fingers 2 1 0 0 3 4 }"
        },
        {
            Gdim: "{define: Gdim frets x x r4 2 1 2 fingers 0 0 4 2 1 3}"
        },
        {
            Gaug: "{define: Gaug frets r3 2 1 0 0 3 fingers 3 2 1 0 0 4}"
        },
        {
            Gmaj7: "{define: Gmaj7 frets r3 2 0 0 0 2 fingers 3 1 0 0 0 2}"
        },
        {
            Gm7: "{define: Gm7 frets r3 5 3 3 3 3 fingers 1 3 1 1 1 1}"
        },
        {
            G7: "{define: G7 frets r3 2 0 0 0 1 fingers 3 2 0 0 0 1}"
        },
        {
            Gdim7: "{define: Gdim7 frets r3 1 2 0 2 0 fingers 4 1 2 0 3 0}"
        },
        {
            GmM7: "{define: GmM7 frets r3 1 0 0 3 2 fingers 3 1 0 0 4 2}"
        },
        {
            Gaug7: "{define: Gaug7 frets r3 2 1 0 0 3 fingers 4 2 1 0 0 3}"
        },
        {
            "Gm7-5": "{define: Gm7-5 frets x x r0 3 2 1 fingers 0 0 0 3 2 1 }"
        },
        {
            Gsus2: "{define: Gsus2 frets r3 0 0 0 3 3 fingers 1 0 0 0 2 3}"
        },
        {
            Gsus4: "{define: Gsus4 frets r3 3 0 0 1 3 fingers 2 3 0 0 1 4}"
        },
        {
            G7sus2: "{define: G7sus2 frets r3 0 3 0 3 3 fingers 1 0 2 0 3 4}"
        },
        {
            G7sus4: "{define: G7sus4 frets r3 3 0 0 1 1 fingers 3 4 0 0 1 2 }"
        },
        {
            G6: "{define: G6 frets r3 2 0 0 0 0 fingers 2 1 0 0 0 0}"
        },
        {
            Gm6: "{define: Gm6 frets r3 1 0 0 3 0 fingers 2 1 0 0 3 0}"
        },
        {
            Gmaj9: "{define: Gmaj9 frets r3 0 0 0 0 2 fingers 2 0 0 0 0 1}"
        },
        {
            Gm9: "{define: Gm9 frets r3 0 0 3 3 1 fingers 2 0 0 3 4 1}"
        },
        {
            G9: "{define: G9 frets r3 0 0 0 0 1 fingers 2 0 0 0 0 1}"
        },
        {
            Gadd9: "{define: Gadd9 frets r3 0 0 0 0 3 fingers 1 0 0 0 0 2}"
        },
        {
            Gmadd9: "{define: Gmadd9 frets r3 0 0 3 3 3 fingers 1 0 0 2 3 4}"
        },
        {
            G5: "{define: G5 frets x x 0 r0 3 3 fingers 0 0 0 0 3 3}"
        },
        {
            "G/B": "{define: G/B frets x 2 0 0 3 3 fingers 0 1 0 0 3 4}"
        },
        {
            "G/D": "{define: G/D frets x x r0 0 0 3 fingers 0 0 0 0 0 3}"
        },
    ],
    [{
            "G#": "{define: G# frets r4 3 1 1 1 4 fingers 3 2 1 1 1 4}"
        },
        {
            "G#m": "{define: G#m frets r4 6 6 4 4 4 fingers 1 2 3 1 1 1}"
        },
        {
            "G#dim": "{define: G#dim frets r4 2 0 1 0 4 fingers 3 2 0 1 0 4}"
        },
        {
            "G#aug": "{define: G#aug frets x x r6 5 5 4 fingers 0 0 4 2 3 1}"
        },
        {
            "G#maj7": "{define: G#maj7 frets r4 3 1 1 1 3 fingers 4 2 1 1 1 3}"
        },
        {
            "G#m7": "{define: G#m7 frets x x r2 4 4 2 fingers 0 0 0 2 3 1}"
        },
        {
            "G#7": "{define: G#7 frets r4 3 1 1 1 2 fingers 4 3 1 1 1 2}"
        },
        {
            "G#dim7": "{define: G#dim7 frets r4 2 0 1 0 1 fingers 4 3 0 1 0 2}"
        },
        {
            "G#mM7": "{define: G#mM7 frets r4 2 1 0 0 4 fingers 3 2 1 0 0 4}"
        },
        {
            "G#aug7": "{define: G#aug7 frets r4 3 2 0 1 0 fingers 4 3 2 0 1 0}"
        },
        {
            "G#m7-5": "{define: G#m7-5 frets r4 2 0 1 0 2 fingers 4 2 0 1 0 3}"
        },
        {
            "G#sus2": "{define: G#sus2 frets r4 1 1 1 4 4 fingers 2 1 1 1 3 4}"
        },
        {
            "G#sus4": "{define: G#sus4 frets r4 4 r6 6 4 4 fingers 1 1 2 3 1 1}"
        },
        {
            "G#7sus2": "{define: G#7sus2 frets r4 1 1 1 4 2 fingers 3 1 1 1 4 2}"
        },
        {
            "G#7sus4": "{define: G#7sus4 frets r4 4 4 6 4 4 fingers 1 1 1 2 1 1}"
        },
        {
            "G#6": "{define: G#6 frets r4 3 1 1 1 1 fingers 3 2 1 1 1 1}"
        },
        {
            "G#m6": "{define: G#m6 frets r4 2 1 1 4 1 fingers 3 2 1 1 4 1}"
        },
        {
            "G#maj9": "{define: G#maj9 frets r4 1 1 1 1 3 fingers 3 1 1 1 1 2}"
        },
        {
            "G#m9": "{define: G#m9 frets r4 6 4 4 4 6 fingers 1 2 1 1 1 3}"
        },
        {
            "G#9": "{define: G#9 frets r4 1 1 1 1 2 fingers 3 1 1 1 1 2}"
        },
        {
            "G#add9": "{define: G#add9 frets r4 1 1 1 1 4 fingers 2 1 1 1 1 3}"
        },
        {
            "G#madd9": "{define: G#madd9 frets x x r6 3 4 0 fingers 0 0 3 1 2 0}"
        },
        {
            "G#5": "{define: G#5 frets r4 6 6 x x x fingers 1 3 4 0 0 0}"
        },
    ]
]



// 吉他
// temsvg
// cvgdata
var newgtArr = []
context.guitarkey.forEach(element => {
    if (newgtArr.indexOf(element) == -1) {
        newgtArr.push(element)
    }
});

// console.log(newgtArr)


function sheetLogicWidth() {
    var e = Math.max(500, $("#sheet").width());
    return 834 > e ? 1.2 * e : 1e3 > e ? 1e3 : e
}

var deload = false

function hexiansvg(paperPaddingLeft, paperPaddingTop) {

    if (deload === false && typeof svelteoctave != 'undefined') {
        deload = svelteoctave.index
    }
    // console.log(deload)
    var src = ''
    // var jiange = 70
    var svgindex = []
    // console.log(svelteoctave)
    // console.log(context.guitarkey)
    cvgdata.forEach((element, index) => {
        element.forEach((element1, index1) => {
            if (!context.guitarkey) return
            context.guitarkey.forEach((element2, index2) => {
                // console.log(element1[element2])
                if (element1[element2] != undefined) {
                    svgindex.push({
                        out: index,
                        inner: index1
                    })
                }
            });
        });
    });
    // console.log(svgindex)
    var chazhi = 0
    if (typeof svelteoctave != 'undefined') {
        chazhi = svelteoctave.index - deload
    }
    // console.log(chazhi)
    var chazhiindex = []
    svgindex.forEach((element, index) => {
        // console.log(element.out + chazhi)
        var out = element.out + chazhi
        if (element.out + chazhi > 11) {
            out = element.out - 12 + chazhi
        }
        if (element.out + chazhi < 0) {
            out = element.out + 12 + chazhi
        }
        chazhiindex.push({
            out: out,
            inner: element.inner
        })
    });
    // console.log(chazhiindex)
    $('#initjitasvg').html('')
    var newAm = []
    chazhiindex.forEach((element, index) => {
        // console.log(cvgdata[element.out] + '----------' + element.inner)
        // console.log(cvgdata[element.out][element.inner])
        if (cvgdata[element.out] == undefined) return
        if (cvgdata[element.out][element.inner] != undefined) {
            if (newAm.indexOf(`<hexi-chord size="normal" scale="1" name="${Object.keys(cvgdata[element.out][element.inner])[0]}" instrument="guitar"></hexi-chord>`) == -1) {
                newAm.push(`<hexi-chord size="normal" scale="1" name="${Object.keys(cvgdata[element.out][element.inner])[0]}" instrument="guitar"></hexi-chord>`)
                $('#initjitasvg').html($('#initjitasvg').html() + `<hexi-chord size="normal" scale="1" name="${Object.keys(cvgdata[element.out][element.inner])[0]}" instrument="guitar"></hexi-chord>`)
            }
        }
    });
    // $('#initjitasvg').html(...newAm)
    // console.log(newAm)

    // var svgdiv = document.createElement('div')
    var svgdiv = $('#initjitasvg').children().children()
    // $(svgdiv).html($('#initjitasvg').children().children())
    var canSvg = []
    // $('html').append(svgdiv)
    // console.log($('#initjitasvg'))
    svgdiv.each(function (index, item) {
        // console.log(item)
        // console.log($(item).attr('define').split(' ')[1])
        html = $(item).prop("outerHTML").replace(/height="74"/g, (sear, retu) => {
            // console.log(sear)
            // console.log(retu)
            return `height="74" x="{paperPaddingLeft}" y="{paperPaddingTop}"`
        })
        // if (newAm.indexOf($(item).attr('define').split(' ')[1]) != -1) {
        canSvg.push(html)
        // }
        // $(item).html(html)
    })
    // console.log(canSvg)
    var line = 7
    var mores = 0
    var pagecalc = window.localStorage.getItem('song_sheet_scale') ? window.localStorage.getItem('song_sheet_scale') - 0 : 10
    if (pagecalc > 10) line = 6
    var width = 10 * sheetLogicWidth() / pagecalc
    // console.log(width)
    if (width > 680) {
        line = 8
        mores = Math.floor((width - 680) / 80)
    }


    // svgline
    var svgline = $('#linesvg').children().children().attr({
        x: width * 0.06,
    })

    svglinenum = svgline.length

    // console.log(svglinenum)
    // console.log(paperPaddingTop)
    if (paperPaddingTop != undefined && svglinenum != 0) { //---等于hexian-line
        var paperPaddingTop = paperPaddingTop - 0 + 110
        svglinehtml = ""
        svgline.each((index, element) => {
            // console.log(paperPaddingTop)
            // paperPaddingTop = paperPaddingTop + index  * 45
            $(element).attr({
                y: paperPaddingTop + index * 100,
            })
            // svglinehtml += $(element).parent().html()
        });
        // src += svglinehtml
        // console.log(svgline)
        paperPaddingTop += (svgline.length - 1) * 100
    } //---等于hexian-line
    // svgline
    // console.log(paperPaddingTop)



    line += mores
    // if (($(window).width() > 800)) {
    //     line -= 1
    // }
    // console.log(line)
    var initline = Math.ceil(canSvg.length / line)
    window.initline = initline
    console.log('行数：' + initline)
    // if (($(window).width() - 550)/80) {
    // alert(7)
    // }

    var endJta = []

    function chunk(arr, size) {

        var arr2 = [];
        for (var i = 0; i < arr.length; i = i + size) {
            arr2.push(arr.slice(i, i + size));
        }
        return arr2;
    }

    endJta = chunk(canSvg, line);

    var paddingtop = svglinenum == 0 ? 40 : 20
    endJta.forEach((element, index) => {
        element.forEach((element1, index1) => {
            // paperPaddingLeft - 0.015 * width + index1 * 75
            src += svghandle(element1, paperPaddingLeft + index1 * 75, paperPaddingTop + paddingtop + (index + 1) * 80)
        });
    });


    // if (endJta.length != 0 && typeof svelteoctave != 'undefined') {
    //     let diao = ''
    //     if (tiaoshi) {
    //         diao = tiaoshi[svelteoctave.index].keynote.split('=')[1]
    //     }
    //     let zhifa = "吉他指法：" + diao + "调指法"

    //     src += `<text font-family="PingFang SC, Microsoft YaHei, Noto Sans, Source Han Serif SC, sans-serif;" id="seljitasvg" font-weight="400" x="${paperPaddingLeft}" y="${paperPaddingTop + 10 +( endJta.length+1 )* 100}" dy="5.368" fill="#1b1b1b" font-size="18">${zhifa}</text>`
    // }
    // console.log(endJta)
    // svgindex += 1
    // src += svghandle(element1[element], jiange * index)
    return src
}

function svghandle(svg, left, top) {
    // console.log(svg)
    return svg.replace(/\{\w+\}/g, (sear, retu) => {

        // sear1 = sear.substr(1, sear.length - 2)
        // console.log(sear1)

        if (sear == '{paperPaddingLeft}') return left
        if (sear == '{paperPaddingTop}') return top
        // console.log(sear)
        // return left
    })
    // console.log(svg)
    // return svg
}
if (!context.guitarkey) {
    window.initline = 0
    window.localStorage.setItem('song_show_chord_name', 'on')
} else {
    // if (window.localStorage.getItem('song_show_chord_name') != 3) {}
    hexiansvg()
    window.hexiansvg = hexiansvg
}
// 旧版hexiansvg.js