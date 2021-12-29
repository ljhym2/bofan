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
    // self.hexi = {
    //     install: function (e) {
    //         e._hexiInstalled || (Me(e, "hexi-sheet", fe), Me(e, "hexi-chord", k), Me(e, "hexi-tab", he), Me(e, "hexi-rhythm", P), e._hexiInstalled = !0)
    //     },
    //     Svg: F,
    //     shiftKey: a,
    //     dict: {
    //         guitar: x,
    //         ukulele: l
    //     }
    // }
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
            0 === this.Ee.getChords().length && this.Ee.getFirstTab() && this.setAttribute("finger-style", ""), this.Ee.setInstrument(e);
            const r = {
                chordStyle: i,
                keyShift: s,
                scale: this.getAttribute("scale"),
                simplifyChords: t
            };
            svgs.innerHTML = this.Ee.toHTML(r)
            this.style["font-size"] = r.scale + "em", this.innerHTML = this.Ee.toHTML(r), console.timeEnd("Update sheet"), this.dispatchEvent(new CustomEvent("rendercomplete"))
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
            // console.log(i)
            // console.log(t)
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
                    "font-family": "Arial Unicode MS, Arial",
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
        })

    function A(e, s) {
        for (const i in s) s.hasOwnProperty(i) && e.setAttribute(i, s[i]);
        return e
    }

    function G(e) {
        return {
            attr: s => {
                e.forEach((e => e.attr(s)))
            }
        }
    }

    function N(e) {
        return Array.isArray(e) && e.length > 0 ? N(e[0]) : e
    }

    function I(e) {
        return Array.isArray(e) && e.length > 0 ? I(e[e.length - 1]) : e
    }
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
    class R {
        constructor(e) {
            this.V = this.J(e)
        }
        createSvg(e, s, i) {
            // console.log(this.V.noteLengths)
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
            this.textContent = this.getAttribute("num")
            // console.log(this.textContent = '(5 3) (2 3) (1 3) (2 3)')
            console.log(this)
            const e = this.offsetWidth,
                s = parseInt(this.getAttribute("string-num")),
                i = new R(this.textContent),
                t = parseFloat(this.getAttribute("scale")) || 1;
            this.textContent = "", this.appendChild(i.createSvg(s, e, t))
        }
        disconnectedCallback() {}
    }

    function h(e) {
        const s = m(e);
        if (!s) return e;
        const t = i[s];
        return t ? e.replace(s, t) : e
    }

    function m(e) {
        const s = e.match(f);
        return s ? s[0] : null
    }

    function Me(e, s, i) {
        e.customElements.define(s, i)
    }
    const D = "#333333";
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
    class he extends HTMLElement {
        connectedCallback() {
            const e = this.textContent.split(/\n\n/);
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
    Me(window, "hexi-rhythm", P)
    Me(window, "hexi-chord", k)
    Me(window, "hexi-tab", he)
    var O = 3,
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
    // this.de = se['guitar']
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
            if (null == this.de) throw new Error("Instrument not set!");
            let s = "";


            // s += '<div class="hexi-body">';
            for (let t = 0; t < this.ie.length; ++t) {
                const r = this.ie[t];
                switch (r.type) {
                    case K:
                        // s += `<pre class="hexi-line" line-num="${r.line}">`;
                        // for (let t = 0; t < r.value.length; ++t) {
                        //     const n = r.value[t];
                        //     if (n.type === Y) s += `<span class="hexi-text">${n.value}</span>`;
                        //     else if (n.type === O) {
                        //         s += '<span class="hexi-chord-anchor">', s += this.le(n.value, e);
                        //         const t = " " === (i = n.extra) || void 0 === i || "\n" === i ? "　" : n.extra;
                        //         s += `${t}</span>`
                        //     }
                        // }
                        // s += "</pre>";
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
                        // s += `<pre class="hexi-chordline" line-num="${r.line}">`;
                        // for (let i = 0; i < r.value.length; ++i) {
                        //     const t = r.value[i];
                        //     t.type === O ? s += this.le(t.value, e) : t.type === Y && (s += `<span class="hexi-text">${t.value}</span>`)
                        // }
                        // s += "</pre>";
                        break;
                    case Z:
                        // s += `<div class="hexi-comment" line-num="${r.line}">${r.value}</div>`;
                        // break;
                    case X:
                        console.log(r.value)
                        s += `<hexi-rhythm string-num="${this.de.tuning.length}" line-num="${r.line}" scale="${e.scale}">${r.value}</hexi-rhythm>`;
                        break;
                    case Q:
                        // s += '<div class="hexi-chorus">';
                        // break;
                    case z:
                        // s += "</div>";
                        // break;
                    case W:
                        // s += `<hexi-tab inline-chords line-num="${r.line}" scale="${e.scale}">${r.value}</hexi-tab>`
                }
            }
            var i;
            return s += "", s
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
}

initdiv()


function linesvgTpl(paperPaddingLeft, paperPaddingTop) {

    var src = ''
    // svgline
    var svgline = $('#linesvg').children().children().attr({
        x: paperPaddingLeft - 0.015 * width,
    })


    console.log(paperPaddingTop)
    if (paperPaddingTop != undefined && svglinenum != 0) {
        var paperPaddingTop = paperPaddingTop - 0 + 60
        svglinehtml = ""
        svgline.each((index, element) => {
            console.log(paperPaddingTop)
            paperPaddingTop = paperPaddingTop + (index + 1) * 45
            $(element).attr({
                y: paperPaddingTop,
            })
            svglinehtml += $(element).parent().html()
        });
        src += svglinehtml
        console.log(svgline)
    }
    // svgline
    console.log(paperPaddingTop)
    // console.log(src)
    return src
}

if ($('#linesvg').children().length != 0) {
    // linesvgTpl()
    window.linesvgTpl = linesvgTpl
}