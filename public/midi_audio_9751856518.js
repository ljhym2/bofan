var MidiAudio = {
    masterVolume: 127,
    keyToNote: {},
    noteToKey: {},
    noteBuffer: {},
    noteSource: {},
    soundfont: {},
    AudioContext: window.AudioContext || window.webkitAudioContext
};
MidiAudio.init = function (conf) {
    console.log(conf)
    var self = this;
    // console.log(conf.instrument)
    if (!self.AudioContext) return void(conf.onerror && conf.onerror("WebAudio not support"));
    // // console.log(conf.instrument)
    // console.log(MidiAudio.hasSoundfont(name))
    // var name = window.localStorage.getItem("song_play_music") ? window.localStorage.getItem("song_play_music") : 'piano'
    // console.log(name)
    if (!MidiAudio.hasSoundfont(conf.instrument)) {
        // onerror: ƒ()
        // onprogress: ƒ(t)
        // onsuccess: ƒ() 
        // instrument: ''
        // soundfontUrl: "http://127.0.0.1:5501/public/acoustic_grand_violin-mp3.js"
        function initcallback() {
            MidiAudio.loaded = !0
            // MidiAudio.soundfont = {}
            // MidiAudio.noteBuffer = {}
            // console.log(MidiAudio.noteBuffer)

            self.init(conf), self.debug("GET " + conf.soundfontUrl + " success")
            self.loadSoundFont({
                onerror: function (o) {
                    conf.onerror && conf.onerror(o)
                },
                onsuccess: function () {
                    MidiAudio.loaded = !0, MidiAudio.debug("MidiAudio.init success"), conf.onsuccess && conf.onsuccess()
                }
            })
        }

        // loadScriptString(name, initcallback)

        var xhr = new XMLHttpRequest;
        return xhr.onreadystatechange = function () {
                if (4 == xhr.readyState)
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // console.log(xhr.responseText)
                        // console.log(eval(xhr.responseText))
                        if (MidiAudio.soundfont = eval(xhr.responseText), !MidiAudio.hasSoundfont(conf.instrument)) return void(conf.onerror && conf.onerror("load sound font failed"));
                        self.init(conf), self.debug("GET " + conf.soundfontUrl + " success")
                    } else conf.onerror && conf.onerror(xhr.status + " error")
            },
            conf.onprogress && (xhr.onprogress = conf.onprogress),
            MidiAudio.debug("GET " + conf.soundfontUrl),
            xhr.open("GET", conf.soundfontUrl, !0),
            void xhr.send(null)
    }

    self.loadSoundFont({
        onerror: function (o) {
            conf.onerror && conf.onerror(o)
        },
        onsuccess: function () {
            MidiAudio.loaded = !0, MidiAudio.debug("MidiAudio.init success"), conf.onsuccess && conf.onsuccess()
        }
    })
}, MidiAudio.loadSoundFont = function (o) {
    console.log(o)

    var i = this,
        n = i.getAudioContext();

    console.log(i)
    console.log(i.getAudioContext())
    if (null == n) return void o.onerror("audio context is null");
    var e, t = 21,
        d = 59,
        u = 60,
        r = 108,
        a = r - t,
        f = function (i) {
            var e = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
                t = (i - 12) / 12 >> 0,
                d = e[i % 12] + t;
            MidiAudio.keyToNote[d] = i, MidiAudio.noteToKey[i] = d;
            var u = MidiAudio.soundfont[d].split(",")[1],
                r = Base64Binary.decodeArrayBuffer(u);
            n.decodeAudioData(r, function (i) {
                MidiAudio.noteBuffer[this] = i, 0 >= a ? o.onsuccess() : a--
            }.bind(i), function (o) {
                MidiAudio.debug("audioContext.decodeAudioData failed: " + o)
            })
        };
    for (e = u; r >= e; e++) f(e);
    for (e = d; e >= t; e--) f(e)
}, MidiAudio.newAudioContext = function () {
    var o = this;
    return o.AudioContext ? new o.AudioContext : null
}, MidiAudio.getAudioContext = function () {
    var o = this;
    if (o.audioContext) {
        if (!o.audioContext.state) return o.audioContext;
        switch (o.audioContext.state) {
            case "suspended":
            case "interrupted":
                return o.audioContext.resume(), o.audioContext;
            case "running":
                return o.audioContext;
            case "closed":
        }
    }
    return o.audioContext = o.newAudioContext(), o.audioContext
}, MidiAudio.playNote = function (o, i, n, e) {
    if (MidiAudio.noteBuffer[o]) {
        var t = MidiAudio.getAudioContext();
        if (t) {
            var d = t.createBufferSource();
            d.buffer = MidiAudio.noteBuffer[o], d.loop = e;
            var u = i / 127 * (MidiAudio.masterVolume / 127) * 2 - 1;
            d.connect(t.destination), d.playbackRate.value = 1, d.gainNode = t.createGain(), d.gainNode.connect(t.destination), d.gainNode.gain.value = Math.min(1, Math.max(-1, u)), d.connect(d.gainNode), MidiAudio.playSound(d), n ? MidiAudio.stopSound(d, n) : MidiAudio.noteSource[o] = d
        }
    }
}, MidiAudio.stopNote = function (o, i) {
    var n = MidiAudio.noteSource[o];
    n && (MidiAudio.stopSound(n, i), delete MidiAudio.noteSource[o])
}, MidiAudio.playSound = function (o, i) {
    if (o) try {
        i = i || 0, o.start ? o.start(i) : o.play ? o.play(i) : o.noteOn && o.noteOn(i)
    } catch (n) {
        MidiAudio.debug(n)
    }
}, MidiAudio.stopSound = function (o, i) {
    if (o) try {
        if (o.stopped) return;
        var n = MidiAudio.getAudioContext();
        if (!n) return;
        if (i = i || 0, o.gainNode) {
            i < n.currentTime && (i += n.currentTime);
            var e = o.gainNode.gain;
            e.linearRampToValueAtTime(e.value, i), e.linearRampToValueAtTime(-1, i + .1), i += .5
        }
        o.stop ? o.stop(i) : o.noteOff && o.noteOff(i), o.stopped = !0
    } catch (t) {
        MidiAudio.debug(t)
    }
}, MidiAudio.hasSoundfont = function (o) {
    console.log(o)
    // console.log(MidiAudio.soundfont)
    return "C4" in MidiAudio.soundfont ? !0 : (o || (o = "acoustic_grand_piano"), "object" == typeof MIDI && "object" == typeof MIDI.Soundfont && "object" == typeof MIDI.Soundfont[o] ? (MidiAudio.soundfont = MIDI.Soundfont[o], !0) : !1)
}, MidiAudio.loadSound = function (o, i) {
    MidiAudio.noteBuffer[i] && o.onload && o.onload();
    console.log(o)
    console.log(i)
    var n = "/static/soundfont/" + i,
        e = new XMLHttpRequest;
    e.responseType = "arraybuffer", e.onload = function () {
        var n = MidiAudio.getAudioContext();
        n && n.decodeAudioData(e.response, function (n) {
            MidiAudio.noteBuffer[i] = n, o.onload && o.onload()
        })
    }, e.onerror = function () {
        o.onerror ? o.onerror("xhr error") : MidiAudio.debug("GET " + n + " error")
    }, e.onprogress = function (i) {
        if (i.lengthComputable) {
            var e = i.loaded / i.total;
            o.onprogress ? o.onprogress(e) : MidiAudio.debug("GET " + n + " " + e + "%")
        }
    }, e.open("GET", n, !0), e.send(null)
}, MidiAudio.tick = function (o, i, n) {
    var e = MidiAudio.getAudioContext();
    if (e) {
        var t = e.createGain();
        t.connect(e.destination), t.gain.value = "undefined" == typeof o ? 1 : o, source = e.createBufferSource(), source.buffer = MidiAudio.makeTickBuffer(i || 440, n || .7), source.connect(t), MidiAudio.playSound(source, 0)
    }
}, MidiAudio.makeTickBuffer = function (o, i) {
    for (var n = MidiAudio.getAudioContext(), e = n.sampleRate, t = .1 * e, d = n.createBuffer(1, t, e), u = d.getChannelData(0), r = 2 * Math.PI / e * o, a = 100 / e, f = 200 / e, s = 500 / e, c = 0; t > c; c++) u[c] = i * (.09 * Math.exp(-c * a) * Math.sin(r * c) + .34 * Math.exp(-c * f) * Math.sin(2 * r * c) + .57 * Math.exp(-c * s) * Math.sin(6 * r * c));
    return d
}, MidiAudio.debug = function (o) {
    console.log(o)
};