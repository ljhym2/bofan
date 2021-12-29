function MidiPlayer(e) {
    // console.log(this)
    this.playTime = 0, this.isLoaded = !1, this.BPM = 72, this.playRatio = 60 / this.BPM, this.speed = 1, this.keyNumber = 72, this.noteIndex = 0, this.context = e ? e : {}, this.drumPlayer = this.createDrumPlayer(this), this.metronomePlayer = this.createMetronomePlayer(this), this.chordPlayer = this.createChordPlayer(this), this.loopTimer = null, this.isNoteMute = !1
}
// console.log(this)

function shouldUseMidiJs() {
    return "undefined" != typeof MIDI && window.navigator.userAgent.match(/chrome/i)
}

function isMidiAudioLoaded() {
    return "undefined" == typeof MidiAudio ? !1 : MidiAudio.loaded
}

function midiNoteOn(e, t) {
    isMidiAudioLoaded() ? MidiAudio.playNote(e, t) : shouldUseMidiJs() ? MIDI.noteOn(0, e, t, 0) : "undefined" != typeof NativeAPI && NativeAPI.noteOn(0, e, t, 0)
}

function midiNoteOff(e) {
    isMidiAudioLoaded() ? MidiAudio.stopNote(e) : shouldUseMidiJs() ? MIDI.noteOff(0, e, 0) : "undefined" != typeof NativeAPI && NativeAPI.noteOff(0, e, 0)
}

function midiNotePlay(e, t, i) {
    isMidiAudioLoaded() ? MidiAudio.playNote(e, t, i) : shouldUseMidiJs() ? (MIDI.noteOn(0, e, t, 0), MIDI.noteOff(0, e, i)) : "undefined" != typeof NativeAPI && (NativeAPI.noteOn(0, e, t, 0), setTimeout(function () {
        NativeAPI.noteOff(0, e, 0)
    }, 1e3 * i))
}
MidiPlayer.prototype.debugLog = function () {
    this.context.debug && console.log(Array.from(arguments).join("	"))
}, MidiPlayer.prototype.getSpeedAsBPM = function () {
    return this.BPM / this.speed
}, MidiPlayer.prototype.setSpeedByBPM = function (e) {
    e && (this.speed = this.BPM / e)
}, MidiPlayer.prototype.resetNotes = function (e) {
    this.notes = [], this.preHandleNotes(e), this.notes = this.notes.sort(function (e, t) {
        return e.time - t.time
    })
}, MidiPlayer.prototype.preHandleNotes = function (e, t, i, o) {
    e = e || [], t = t || 0, i = i || 0, o = o || {};
    for (var n, r = 0; r < e.length; r++) n = e[r], n.textDuration ? (n.time = t, n.part = i, this.notes.push(n), n.chord && this.preHandleNotes(n.chord, t, "chord", o), "chord" != i && (t += n.textDuration)) : n.notes && this.preHandleNotes(n.notes, t, n.id, o)
}, MidiPlayer.prototype.playFromLineColumn = function (e, t) {
    this.debugLog("playFromLineColumn", e, t);
    for (var i, o = 0; o < this.notes.length; o++)
        if (i = this.notes[o], i.lastLine && i.lastColumn && i.lastLine == e && i.lastColumn >= t) return this.playTime = i.time, this.pause(), void this.resume();
    for (o = 0, i; o < this.notes.length; o++)
        if (i = this.notes[o], i.lastLine && i.lastColumn && i.lastLine > e && i.lastColumn >= t) {
            this.playTime = i.time;
            break
        } this.pause(), this.resume()
}, MidiPlayer.prototype.playFromId = function (e) {
    for (var t = 0; t < this.notes.length; t++)
        if (this.notes[t].id == e) {
            this.playTime = this.notes[t].time;
            break
        } this.pause(), this.resume()
}, MidiPlayer.prototype.play = function () {
    this.stop(), this.resume()
}, MidiPlayer.prototype.finish = function () {
    this.stop(), this.debugLog("finish"), this.context.onFinish && this.context.onFinish()
}, MidiPlayer.prototype.setContext = function (e, t) {
    this.context[e] = t
}, MidiPlayer.prototype.getContext = function (e) {
    return this.context[e]
}, MidiPlayer.prototype.stop = function () {
    this.pause(), this.playTime = 0, this.noteIndex = 0, this.lastScrolledNoteId = 0
}, MidiPlayer.prototype.pause = function () {
    this.loopTimer && clearTimeout(this.loopTimer), this.chordPlayer.stop(), this.drumPlayer.stop(), this.metronomePlayer.stop()
}, MidiPlayer.prototype.resume = function () {
    for (var e = this, t = 0; t < e.notes.length; t++)
        if (!(e.notes[t].time < e.playTime)) {
            e.noteIndex = t, e.loop();
            break
        }
}, MidiPlayer.prototype.loop = function (e) {
    var t = this;
    if (e) return void (t.loopTimer = setTimeout(t.loop.bind(t), e * this.speed * 1e3));
    if (t.loopTimer = null, !(t.noteIndex < 0)) {
        if (t.noteIndex >= t.notes.length) return void t.finish();
        var i = t.notes[t.noteIndex];
        if (t.playEvent(i), t.playNote(i), t.playTime = i.time, e = 0, t.noteIndex < t.notes.length - 1) {
            var o = t.notes[t.noteIndex + 1];
            o.time > i.time && (e = o.time - i.time)
        } else t.noteIndex == t.notes.length - 1 && (e = i.textDuration - .1);
        t.noteIndex++, t.loop(e)
    }
}, MidiPlayer.prototype.playNote = function (e) {
    var t = this;
    if (e.scale > 0 && e.midiDuration > 0 && !t.isNoteMute) {
        var i = e.midiNumber;
        midiNotePlay(i, e.measureDuration ? 100 : 90, e.midiDuration * this.speed)
    }
    t.debugLog("note ", e.time, e.scale);
    var o = $("#" + e.id);
    if (o.length > 0) {
        var n;
        switch (t.context.skin) {
            case "dark":
                n = "#e65100";
                break;
            case "light":
                n = "#00cccc";
                break;
            default:
                n = t.context.skin ? t.context.skin : "#00cccc"
        }
        // #c6ff00 #00cccc
        o.attr("style", "fill:" + n + ";stroke:" + n), setTimeout(function () {
            o.attr("style", "")
        }, e.textDuration * this.speed * 1e3), t.scrollTo(e.id)
    }
}, MidiPlayer.prototype.playEvent = function (e) {
    var t = this;
    e.keyNumber && (t.keyNumber = e.keyNumber), e.playRatio && (t.playRatio = e.playRatio), e.timeSignature && (t.timeSignature = e.timeSignature), e.measureDuration && (t.debugLog("event measure", e.measureRealDuration, e.measureDuration), t.drumPlayer.play(e), t.metronomePlayer.play(e)), e.chordNames instanceof Array && e.chordNames.length > 0 && (t.debugLog("event chord_names", JSON.stringify(e.chordNames), e.chordFont), t.chordPlayer.play(e))
}, MidiPlayer.prototype.scrollTo = function (e, t) {
    var i = this,
        o = function () {
            t && t()
        };
    if (!i.containerDom) {
        if (ishengping == 1) {//10.11
            var n = $(".containers1");
            n.scrollTop(n.scrollTop() + 1), i.containerDom = n.scrollTop() ? n : $(".containers1")
        } else {//-------
            var n = $("body");
            n.scrollTop(n.scrollTop() + 1), i.containerDom = n.scrollTop() ? n : $("html")
        }
    }
    var r = function (t) {
        i.isScrolling = true;
        var n = function () {
            i.isScrolling = false, i.lastScrolledNoteId = e, o()
        };
        i.containerDom.animate({
            scrollTop: t
        }, 1e3, n)
    };
    if (e) {
        var s = $("#" + e);
        if (s.length < 1 || i.isScrolling) return void o();
        if (ishengping == 1) {//10.11
            var a = $(window).width(),
                d = a - s.offset().left - s.width() - 18 + i.containerDom.scrollTop(),
                u = i.containerDom.scrollTop();
            console.log('top:' + d)
            console.log(u)
            if (d > u + 0.1 * a && u + 0.8 * a > d) return void o();
            r(Math.max(0, d - 0.2 * a))
        }
        if (ishengping != 1) {//--------
            var a = $(window).height(),
                d = s.offset().top,
                u = i.containerDom.scrollTop();
            if (d > u + 0.1 * a && u + 0.8 * a > d) return void o();
            r(Math.max(0, d - 0.2 * a))
        }
    } else r(0)
}, MidiPlayer.prototype.createChordPlayer = function (e) {
    return {
        context: e,
        timer: null,
        playingNote: {},
        fontType: "chord",
        isMute: function () {
            var e = "is" + this.fontType.substring(0, 1).toUpperCase() + this.fontType.substring(1) + "Mute";
            return e in this.context ? this.context[e] : !1
        },
        play: function (e) {
            var t = this;
            t.stop();
            var i = e.chordNames[0],
                o = MidiUtil.getChordWithActionList(i, e.chordFont);
            if (null != o) {
                t.chordKeyNumber = o.chordKeyNumber, t.actionList = o.actionList, t.actionIndex = 0, t.chordLoop = e.chordLoop, t.baseKeyNumber = t.context.keyNumber - 12 + t.chordKeyNumber % 12, (t.baseKeyNumber > 60 || t.context.keyNumber > 84) && (t.baseKeyNumber -= 12);
                var n = function (e) {
                    if (t.chordLoop || !(t.actionIndex >= t.actionList.length)) {
                        var i = t.actionIndex++ % t.actionList.length,
                            o = t.actionList[i];
                        for (var r in o.keys) {
                            var s = t.baseKeyNumber + (parseInt(r) - 1);
                            if (t.playingNote[s] && (midiNoteOff(s), delete t.playingNote[s]), o.keys[r] > 0 && !t.isMute() && (midiNoteOn(s, o.keys[r]), t.playingNote[s] = !0), o.keys[r]) {
                                var a = o.duration * e.playRatio;
                                e.debugLog(t.fontType, r, t.baseKeyNumber, o.keys[r], a)
                            }
                        }
                        var d = o.duration * e.playRatio * e.speed;
                        d > 0 ? t.timer = setTimeout(n.bind(t, e), 1e3 * d) : n(e)
                    }
                };
                n(t.context)
            }
        },
        stop: function () {
            this.timer && (clearTimeout(this.timer), this.timer = null);
            for (var e in this.playingNote) midiNoteOff(e);
            this.playingNote = {}
        }
    }
}, MidiPlayer.prototype.createMeasurePlayer = function (e, t) {
    return {
        context: e,
        timer: null,
        fontType: t,
        isMute: function () {
            var e = "is" + this.fontType.substring(0, 1).toUpperCase() + this.fontType.substring(1) + "Mute";
            return e in this.context ? this.context[e] : !0
        },
        play: function (t) {
            var i = this;
            i.stop();
            var o = MidiUtil.getFont(i.fontType, t[i.fontType + "Font"]);
            if (o && e.timeSignature && e.timeSignature.n && e.timeSignature.m) {
                var n = e.timeSignature.n + "/" + e.timeSignature.m;
                if (i.actionList = o[n], i.actionIndex = 0, i.actionList) {
                    for (var r = t.measureDuration - t.measureRealDuration; i.actionIndex < i.actionList.length && !(0 >= r); i.actionIndex++) r -= i.actionList[i.actionIndex].duration;
                    var s = function (e) {
                        i.timer = null;
                        var t = i.actionIndex++;
                        if (!(t >= i.actionList.length)) {
                            var o = i.actionList[t];
                            for (var n in o.keys)
                                if (!i.isMute()) {
                                    switch (n) {
                                        case "bell":
                                            Metronome.bell();
                                            break;
                                        case "click":
                                            Metronome.click();
                                            break;
                                        default:
                                            MidiAudio.playNote(n + ".wav", o.keys[n])
                                    }
                                    e.debugLog(i.fontType, n, o.keys[n])
                                } var r = o.duration * e.playRatio * e.speed;
                            i.timer = setTimeout(s.bind(i, e), 1e3 * r)
                        }
                    };
                    s(i.context)
                }
            }
        },
        stop: function () {
            this.timer && (clearTimeout(this.timer), this.timer = null)
        }
    }
}, MidiPlayer.prototype.createMetronomePlayer = function (e) {
    return this.createMeasurePlayer(e, "metronome")
}, MidiPlayer.prototype.createDrumPlayer = function (e) {
    return this.createMeasurePlayer(e, "drum")
}, MidiPlayer.prototype.setMute = function (e) {
    var t = this;
    for (var i in e) {
        var o = i.substring(0, 1).toUpperCase() + i.substring(1).toLowerCase();
        t["is" + o + "Mute"] = e[i]
    }
}, MidiPlayer.prototype.load = function (e) {
    console.log(e)
    window.eee = e
    var t, i = this;
    if (shouldUseMidiJs()) {
        var o = window.localStorage;
        t = o && null != o.getItem("soundfont_url") ? o.getItem("soundfont_url") : "*";
        var n = "acoustic_grand_piano";
        i.debugLog("GET " + t + n + "-ogg.js"), MIDI.loadPlugin({
            soundfontUrl: t,
            instrument: n,
            onprogress: function (t, o) {
                e.onprogress ? e.onprogress(o) : i.debugLog(t, o)
            },
            onsuccess: function () {
                i.debugLog("MIDI loaded"), o && o.setItem("soundfont_url", t), MIDI.setInstrument(0, MIDI.GM.byName[n].number, 0), i.isLoaded = !0, e.onload && e.onload()
            }
        })
    } else if ("undefined" != typeof MidiAudio && MidiAudio.getAudioContext()) {
        var r = window.navigator.userAgent.match(/chrome|android|ie|edge|firefox|opera/i) ? "ogg" : "mp3";
        var name = window.localStorage.getItem("song_play_music") ? window.localStorage.getItem("song_play_music") : 'piano'
        console.log(name)
        // http://127.0.0.1:5501/
        // "./public

        // t = "https://qpu.cangqiang.com/bofang/bofan/acoustic_grand_" + name + "-" + r + ".js", 
        t = "./public/acoustic_grand_" + name + "-" + r + ".js",
            MidiAudio.init({
                soundfontUrl: t,
                onsuccess: function () {
                    i.isLoaded = !0, e.onload && e.onload()
                },
                onerror: function () {
                    i.isLoaded = !0, e.onload && e.onload(), i.debugLog("MidiAudio init failed")
                },
                onprogress: function (t) {
                    if (t.lengthComputable) {
                        var o = t.loaded / t.total;
                        e.onprogress ? e.onprogress(o) : i.debugLog(o)
                    }
                }
            })
    } else "undefined" != typeof NativeAPI && "undefined" != typeof NativeAPI.loadSoundfont && NativeAPI.loadSoundfont(), i.isLoaded = !0, e.onload && e.onload()
};