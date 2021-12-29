// Base64binary_53c7f96762.js
var Base64Binary = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    decodeArrayBuffer: function (e) {
        var r = Math.ceil(3 * e.length / 4),
            t = new ArrayBuffer(r);
        return this.decode(e, t), t
    },
    decode: function (e, r) {
        var t = this._keyStr.indexOf(e.charAt(e.length - 1)),
            n = this._keyStr.indexOf(e.charAt(e.length - 1)),
            a = Math.ceil(3 * e.length / 4);
        64 == t && a--, 64 == n && a--;
        var h, i, c, f, d, y, A, s, k = 0,
            l = 0;
        for (h = new Uint8Array(r ? r : a), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""), k = 0; a > k; k += 3) d = this._keyStr.indexOf(e.charAt(l++)), y = this._keyStr.indexOf(e.charAt(l++)), A = this._keyStr.indexOf(e.charAt(l++)), s = this._keyStr.indexOf(e.charAt(l++)), i = d << 2 | y >> 4, c = (15 & y) << 4 | A >> 2, f = (3 & A) << 6 | s, h[k] = i, 64 != A && (h[k + 1] = c), 64 != s && (h[k + 2] = f);
        return h
    }
};
// Base64binary_53c7f96762.js

// countdown_bf7202d73b.js
var CountDown = {
    init: function (t) {
        var n = this;
        n.context = t, $(".count-down-area").on("click", function () {
            n.context.countDownInterval && ($(this).hide(), clearInterval(n.context.countDownInterval), n.context.onCancel && n.context.onCancel())
        })
    },
    start: function () {
        var t = this,
            n = $(".count-down-area"),
            o = n.find("p");
        o.text(t.context.value), n.show(), MidiAudio.tick(), t.context.countDownInterval = setInterval(function () {
            var e = o.text() - 1;
            e > 0 ? (o.text(e), MidiAudio.tick()) : 0 == e ? (o.text(e), n.hide()) : 0 > e && (clearInterval(t.context.countDownInterval), t.context.onReady())
        }, 1e3 * t.context.interval)
    }
};
// countdown_bf7202d73b.js

// chip_tag_07d172ea84.js
// var chipTag = {
//     escape: function (r) {
//         return r.replace(/\,/g, "[comma]")
//     },
//     unescape: function (r) {
//         return r.replace(/\[comma\]/g, ",")
//     },
//     strToArray: function (r) {
//         var t = [];
//         if ("string" != typeof r) return t;
//         if (r.trim().length < 1) return t;
//         for (var n = r.split(","), e = 0; e < n.length; e++) t.push(this.unescape(n[e]));
//         return t
//     },
//     chipDataToStr: function (r) {
//         for (var t = [], n = 0; n < r.length; n++) t.push(this.escape(r[n].tag));
//         return t.join(",")
//     },
//     strToChipHtml: function (r) {
//         for (var t = "", n = this.strToArray(r), e = 0; e < n.length; e++) t += '<div class="chip">' + n[e] + "</div>";
//         return t
//     },
//     strToChipData: function (r) {
//         for (var t = [], n = this.strToArray(r), e = 0; e < n.length; e++) t.push({
//             tag: n[e]
//         });
//         return t
//     }
// }; 
// chip_tag_07d172ea84.js

// midi_player_b7156ede4e.js
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
    if (e) return void(t.loopTimer = setTimeout(t.loop.bind(t), e * this.speed * 1e3));
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
        if (ishengping == 1) { //10.11
            var n = $(".containers1");
            n.scrollTop(n.scrollTop() + 1), i.containerDom = n.scrollTop() ? n : $(".containers1")
        } else { //-------
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
        if (ishengping == 1) { //10.11
            var a = $(window).width(),
                d = a - s.offset().left - s.width() - 18 + i.containerDom.scrollTop(),
                u = i.containerDom.scrollTop();
            console.log('top:' + d)
            console.log(u)
            if (d > u + 0.1 * a && u + 0.8 * a > d) return void o();
            r(Math.max(0, d - 0.2 * a))
        }
        if (ishengping != 1) { //--------
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
// midi_player_b7156ede4e.js

// song_midi_6ddebe6acf.js
var SongMidi = {
    player: new MidiPlayer,
    context: {},
    setContext: function (t, o) {
        this.context[t] = o
    },
    getContext: function (t) {
        return this.context[t]
    },
    init: function (t) {
        var o = this;
        o.context = util.extend(o.context, {
            domId: "play-btn",
            onScroll: function () {
                o.count()
            },
            onReady: function () {
                o.play()
            }
        }), o.context = util.extend(o.context, t);
        var n = $("#" + o.context.domId);
        n.click(function () {
            var n = o.context.ui;
            switch (n.getStatus()) {
                case n.STATUS.play:
                    n.playToLoad(), o.load();
                    break;
                case n.STATUS.stop:
                    n.stopToPlay(), o.stop(), t.onClick && t.onClick()
            }
        })
    },
    load: function () {
        var t = this,
            o = function () {
                t.context.ui.loadToPlay(), t.context.onLoad()
            },
            n = function (o) {
                t.context.ui.playToLoad(o)
            };
        t.player.isLoaded ? o() : t.player.load({
            onload: o,
            onprogress: n
        })
    },
    scroll: function () {
        var t = this.player;
        t.scrollTo(this.context.resume ? t.lastScrolledNoteId : null, this.context.onScroll)
    },
    count: function () {
        CountDown.init({
            value: 3,
            interval: 60 / this.player.getSpeedAsBPM(),
            onReady: this.context.onReady
        }), CountDown.start()
    },
    play: function () {
        var t = this,
            o = t.context.ui;
        o.playToStop(), t.player.setContext("skin", t.context.getSkin()), t.player.setContext("onFinish", function () {
            return t.context.playLoop && t.context.playLoop() ? void t.player.scrollTo(null, function () {
                t.play()
            }.bind(t)) : void o.stopToPlay()
        });
        var n = t.context.getPlayContents();
        t.player.resetNotes(n.notes), n.line || n.column ? t.player.playFromLineColumn(n.line, n.column) : t.context.resume ? t.player.resume() : t.player.play(), this.context.onPlay && this.context.onPlay()
    },
    stop: function () {
        this.player.pause(), this.context.onStop && this.context.onStop()
    },
    refresh: function () {
        var t = this,
            o = t.context.ui;
        if (o.getStatus() == o.STATUS.stop) {
            t.player.pause();
            var n = t.context.getPlayContents();
            t.player.resetNotes(n.notes), t.player.resume()
        }
    }
};
SongMidi.setContext("ui", {
        STATUS: {
            play: "play",
            load: "load",
            stop: "stop"
        },
        getStatus: function () {
            // console.log(window.banben)
            // if (!window.banben) {
            //     layer.open({
            //         content: '请升级最新版本的百度App',
            //         skin: 'msg',
            //         time: 2 //2秒后自动关闭
            //     });
            //     return
            // } 
            var t = $("#play-btn");
            this.STATUS.load
            return t.hasClass("icon-play3") ? this.STATUS.play : t.hasClass("icon-stop2") ? this.STATUS.stop : this.STATUS.load
        },
        playToLoad: function (t) {
            console.log(window.banben)

            // console.log(t)
            // var o = $("#play-btn");
            // o.removeClass("icon-play3"), o.addClass("icon-spinner"), o.attr("title", "加载中");

            // var n = $("#play-btn-label");

            // if (t) {
            //     console.log(12346)
            //     var e = parseInt(100 * t) + "%";
            //     n.text(e), o.attr("title", e)
            // } else n.text("加载中")

        },
        loadToPlay: function () {
            // var t = $("#play-btn");
            // t.removeClass("icon-spinner"), t.addClass("icon-play3"), t.attr("title", "播放");
            // var o = $("#play-btn-label");
            // o.text("播放")
        },
        playToStop: function () {
            var t = $("#play-btn");
            t.removeClass("icon-play3"), t.addClass("icon-stop2"), t.attr("title", "停止");

            var o = $("#play-btn-label");
            o.text("停止")
        },
        stopToPlay: function () {
            var t = $("#play-btn");
            t.removeClass("icon-stop2"), t.addClass("icon-play3"), t.attr("title", "播放");

            var o = $("#play-btn-label");
            o.text("播放")
        }
    }), SongMidi.setContext("onLoad", function () {
        console.log(window.banben = true)
        if (!window.banben) {
            return
        }
        var t = SongMidi,
            o = t.player;
        t.context.onClick && t.context.onClick(), o.BPM = t.context.getBpm();
        var n = o.getSpeedAsBPM(),
            e = $("#play_speed");
        for (i = 50; 200 >= i; i++) e.append('<option value="' + i + '"' + (i == n ? "selected" : "") + " >" + i + "</option>");
        // $("#play-modal").openModal(),
        o.playTime ? ($(".start-play-1").hide(), $(".start-play-2").show()) : ($(".start-play-1").show(), $(".start-play-2").hide())
    }), SongMidi.adjustMicrophone = function (t) {
        var o = this;
        t > 0 && !o.microphone && (o.microphone = MicroPhone.init({
            onerror: function (t) {
                console.log(t)
            }
        })), o.microphone && o.microphone.setAdjust(t)
    },
    function () {
        var t = SongMidi,
            o = t.player,
            n = function () {
                o.setSpeedByBPM($("#play_speed").val()), o.setMute({
                    note: "off" == $("#play_note").val(),
                    metronome: "off" == $("#play_metronome").val(),
                    chord: "off" == $("#play_chord").val(),
                    drum: !0
                }), t.scroll()
            };
        $(".op-replay").click(function () {
            t.context.resume = !1, n()
        }), $(".op-resume").click(function () {
            t.context.resume = !0, n()
        }), $("#play_microphone").change(function () {
            var o = parseFloat($(this).val());
            t.adjustMicrophone(o)
        })
    }();
// song_midi_6ddebe6acf.js

// song_builder_c9e6115f89.js
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
        for (var r, e = this.params, i = ["song_name", "alias_name", "music_composer", "lyric_composer", "lyric_composerrj", "music_composer666", "lyric_composer666", "time_signature", "key_signature"], t = "", a = 0; a < i.length; a++) r = i[a], e.hasOwnProperty(r) && (t += this.buildParam(r, e[r]));
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
            case "lyric_composerrj":
                e.match(/\S/) && !e.match(/软件$/) && (e += " 软件 ");
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
// song_builder_c9e6115f89.js

// microphone_de188b3d57.js
var MicroPhone = {};
MicroPhone.isBrowserSupport = function () {
    return navigator.getUserMedia || navigator.webkitGetUserMedia
}, MicroPhone.init = function (o) {
    return (AudioContext = window.AudioContext || window.webkitAudioContext) ? (MicroPhone.context = new AudioContext, MicroPhone.gainNode = MicroPhone.context.createGain(), MicroPhone.gainNode.gain.value = 0, MicroPhone.gainNode.connect(MicroPhone.context.destination), navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia, navigator.getUserMedia ? (navigator.getUserMedia({
        audio: !0
    }, function (e) {
        var n = MicroPhone.context.createMediaStreamSource(e);
        n.connect(MicroPhone.gainNode), o.onsuccess && o.onsuccess()
    }, function (e) {
        o.onerror && o.onerror(e.message)
    }), MicroPhone) : void(o.onerror && o.onerror("navigator.getUserMedia not support"))) : void(o.onerror && o.onerror("WebAudio not support"))
}, MicroPhone.setAdjust = function (o) {
    MicroPhone.gainNode.gain.value = o * o
};
// microphone_de188b3d57.js

// util_5b7fbbde18.js
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
// util_5b7fbbde18.js

// media_da19fca91a.js
var media = {
    generateHtml: function (e) {
        var t = "";
        if (!e) return t;
        for (var a = 0; a < e.length; a++) switch (e[a].type) {
            case "audio":
                t += template("player-tpl", e[a]);
                break;
            case "audio163":
                t += template("player163-tpl", e[a]);
                break;
            case "qqvideo":
                t += template("qqvideo-tpl", e[a]);
                break;
                // case "item":
                //     t += this.generateItemHtml(e[a]);
                //     break;
            case "image":
                t += '<p><img class="materialboxed score-img" src="' + e[a].url + '" /></p>';
                break;
            case "link":
                t += util.render('<p></p><a href="{url}" target="_blank">{name}</a></p>', e[a]);
                break;
            case "text":
                t += e[a].value + "<br/>"
        }
        return t
    },

};
// media_da19fca91a.js

// metronome_ec9ac0d41b.js
function initMetronome(e, o) {
    var t = $("#metronome_time_signature"),
        n = $("#metronome_bpm");
    for (i = 30; 240 >= i; i++) n.append('<option value="' + i + '">' + i + "</option>");
    t.val(e), n.val(o), $("#metronome_play").on("click", function () {
        Metronome.play($("#metronome_time_signature").val(), $("#metronome_bpm").val())
    }), t.on("input", function () {
        Metronome.time_signature = $("#metronome_time_signature").val(), Metronome.tick >= 0 && Metronome.startTick()
    }), n.on("input", function () {
        Metronome.bpm = $("#metronome_bpm").val(), console.log(Metronome.bpm), Metronome.tick >= 0 && Metronome.startTick()
    }), Metronome.time_signature = e, Metronome.bpm = o, Metronome.onstart = function () {
        $("#metronome_play").html("停止")
    }, Metronome.onstop = function () {
        $("#metronome_play").html("开始"), $("#metronome_beat").html("")
    }, Metronome.onbeat = function (e) {
        $("#metronome_beat").html(e)
    }
}
var Metronome = {
    beat: -1,
    tick: -1,
    bpm: 60,
    time_signature: "4/4"
};
Metronome.bell = function () {
    MidiAudio && MidiAudio.getAudioContext() ? MidiAudio.tick(1, 880, .9) : "undefined" != typeof NativeAPI && NativeAPI.noteOn(0, "bell", 100, 0)
}, Metronome.click = function () {
    MidiAudio && MidiAudio.getAudioContext() ? MidiAudio.tick(1, 440, .7) : "undefined" != typeof NativeAPI && NativeAPI.noteOn(0, "click", 100, 0)
}, Metronome.play = function (e, o) {
    Metronome.time_signature = e, Metronome.bpm = o, Metronome.beat < 0 ? (Metronome.startTick(), setInterval(Metronome.update, 100)) : Metronome.tick < 0 ? Metronome.startTick() : Metronome.stopTick()
}, Metronome.startTick = function () {
    Metronome.tick = 0, Metronome.beat = 0, Metronome.onstart && Metronome.onstart()
}, Metronome.stopTick = function () {
    Metronome.tick = -1, Metronome.onstop && Metronome.onstop()
}, Metronome.matchNumber = function (e, o) {
    var t = (e + "").match(/^\d+/g);
    return t ? t[0] : o ? o : 0
}, Metronome.update = function () {
    if (!(Metronome.tick < 0)) {
        var e = Metronome.matchNumber(Metronome.bpm, -1),
            o = Metronome.matchNumber(Metronome.time_signature, -1);
        if (!(0 > e || 0 > o)) {
            var t = Math.round(600 / e);
            Metronome.tick++ % t || (Metronome.beat = Metronome.beat % o, Metronome.onbeat && Metronome.onbeat(Metronome.beat + 1), Metronome.beat++ ? Metronome.click() : Metronome.bell())
        }
    }
};
// metronome_ec9ac0d41b.js

function isBetaUser() {
    var e = window.localStorage.getItem("beta");
    return e && "yes" === e
}
var timeshow = 0

function draw(debug) {

    // 10.22
    if (typeof hexiansvg != 'undefined' && context.guitarkey) {
        hexiansvg()
        console.log('0--0')
    }
    // 10.22

    setresize()

    timeshow += 1

    var src = songBuilder.buildParam("reset", "screen"),
        sheetWidth = sheetLogicWidth(),
        width = 10 * sheetWidth / (context.sheet_scale || 10);


    // $('#linesvg').children().children().attr({
    //     x: width * 0.06,
    // })

    // console.log(src)
    // console.log(sheetWidth)
    // console.log(10 * sheetWidth)
    // console.log(context.sheet_scale)
    // console.log(context.sheet_scale || 10)
    // width = 50
    // console.log($("#show-chord-name").val())
    src += songBuilder.buildParam("paper_width", width), "cfingering" in context || (context.cfingering = $("#cfingering").val()), "show_note_range" in context || (context.show_note_range = $("#show-note-range").val()), "show_bar_num" in context || (context.show_bar_num = $("#show-bar-num").val()), "show_graph" in context || (context.show_graph = $("#show-graph").val()), "show_lyric" in context || (context.show_lyric = $("#show-lyric").val()), "show_chord_name" in context || (context.show_chord_name = $("#show-chord-name").val() == 3 ? 'on' : $("#show-chord-name").val()), "show_finger_num" in context || (context.show_finger_num = $("#show-finger-num").val()), context.play_transpose = $("#play_transpose").val(), context.text_octave = $("#text-octave").val(); // 高八度低八度 , context.text_octave = $("#text-octave").val() , "text_octave"
    for (var params = ["instrument", "fingering", "cfingering", "show_note_range", "show_bar_num", "show_graph", "show_lyric", "show_chord_name", "show_finger_num", "song_name", "alias_name", "keynote", "rhythm", "music_composer", "lyric_composer", "music_composer666", "lyric_composerrj", "lyric_composer666", "play_transpose", "text_octave"], i = 0, key; i < params.length; i++) {
        switch (key = params[i]) {
            case "fingering":
            case "show_graph":
                if ("none" === context.instrument) break
        }
        src += songBuilder.buildParam(key, context[key])
    }
    context.instrument ? src += songBuilder.buildParam("output_midi", "true") : (src += isBetaUser() ? songBuilder.buildParam("output_fingerings", "all") : songBuilder.buildParam("output_fingerings", "true"), src += songBuilder.buildParam("output_svg", "false"));

    var htmlDom = $("html"),
        footDom = $("#foot"),
        commonHeaderDom = $(".common-header"),
        searchWrapperDom = $(".search-wrapper"),
        commentItemDom = $(".comment-item"),
        setBackgroundColor = function (e, t) {
            switch (t) {
                case "dark":
                    context.skin = "dark", src += "{skin:dark}\n", htmlDom.css("background", e), footDom.css("color", "#ffffff"), commentItemDom.css("color", "#ffffff"), commonHeaderDom.css("background", e), searchWrapperDom.hide();
                    break;
                default:
                    context.skin = "light", src += "{background_color:" + e + "}\n", htmlDom.css("background", e), footDom.css("color", "#1b1b1b"), commentItemDom.css("color", "#333"), commonHeaderDom.css("background", "#00cccc"), searchWrapperDom.show()
            }
        };
    switch (context.background_color) {
        case "dark":
            setBackgroundColor("#455a64", "dark");
            break;
        case "light_gray":
            setBackgroundColor("#f7f7f7");
            break;
        case "light_red":
            setBackgroundColor("#fff7f7");
            break;
        case "light_green":
            setBackgroundColor("#f7fff7");
            break;
        case "light_blue":
            setBackgroundColor("#f7f7ff");
            break;
        case "gray":
            setBackgroundColor("#eee");
            break;
        case "red":
            setBackgroundColor("#fee");
            break;
        case "green":
            setBackgroundColor("#efe");
            break;
        case "blue":
            setBackgroundColor("#eef");
            break;
        default:
            setBackgroundColor("#ffffff")
    }
    src += context.notation;


    var lyrics = context.lyric ? eval(context.lyric) : [];
    if (util.arrayEach(lyrics, function (e) {
            src += "\n{lyric}\n" + e + "\n{/lyric}\n"
        }),

        result = parser.parse(src), debug && console.log(src), !context.instrument) return context.instrumentFingerings = result.fingerings.instrumentFingerings, void renderInstruments();
    // console.log(result.svg)
    result.hasLyric || ($("#show-lyric-div").hide(), context.show_lyric = !1), result.hasChordName || ($("#show-chord-name-div").show(), context.show_chord_name = !1), result.hasFingerNum || ($("#show-finger-num-div").hide(), context.show_finger_num = !1), context.midiNotes = result.notes, context.bpm = result.bpm;
    var sheetDom = $("#sheet");
    sheetDom.html(result.svg);
    var scale = result.svgWidth != sheetDom.width() ? 1 * sheetDom.width() / result.svgWidth : 1;
    sheetDom.css({
            height: result.svgHeight * scale,
            transform: "scale(" + (1 > scale ? scale : 1) + ")"
        }), $("#sheet .sheet-svg").css({
            transform: "scale(" + (scale > 1 ? scale : 1) + ")"
        }), $("#preload").hide(),
        // $("#header").show(), 
        console.log(timeshow)
    context.show_foot && "off" === context.show_foot ? footDom.hide() : footDom.show(), context.onMidiNotesChange && context.onMidiNotesChange();
    if (timeshow == 2) sheetDom.show(), $('.bofangsvg').hide(), $('#beforesgv').show()
}


// 陶笛图片
function renderInstruments() {
    console.log('---------------')
    for (var e, t = template("instrument-tpl", {
            index: "none",
            instrumentName: "简谱(无图谱)"
        }), n = window.localStorage.getItem("song_instrument"), o = 0; o < context.instrumentFingerings.length; o++) e = context.instrumentFingerings[o], e.index = o, e.instrument == n && (e.selected = "selected"), t += template("instrument-tpl", e);
    var i = function () {

            $('#fingerings-wrapper').off('change');

            context.instrumentIndex = a.val(), renderFingerings()
        },
        a = $("#instruments-wrapper");
    a.html(t), a.material_select(), a.on("change", i), i()
}
// 陶笛图片

// hc_js 10.19
function holesFullPressedNote(t) {
    var myobj = {
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
    }
    return myobj[t] ? myobj[t] : ''
}

function oneValue() {
    for (var t = arguments, e = t.length, r = 0; e > r; r++)
        if (isDefined(t[r])) return t[r]
}

function isDefined(t) {
    return !notDefined(t)
}

function notDefined(t) {
    return typeof t == "undefined"
}

var I = function (r) {
    var t = holesFullPressedNote(r);
    return t ? sprintf("(筒音作%s)", t) : ""
};

function sprintf() {
    var t, e, r = arguments,
        c = r[0] || "";
    for (t = 1, e = r.length; e > t; t++) c = c.replace(/%s/, r[t]);
    return c
}

function getPlayHint(t, r) {
    // console.log(r)
    switch (t) {
        case "a6":
            return sprintf("六筒陶笛%s调指法(根音：%s)", r);
        case "o6":
            return sprintf("六孔%s陶笛%s调指法", r);
        case "o12":
            return sprintf("%s", I(r));
        case "o3":
            return sprintf("三管%s陶笛%s调指法", r);
        case "x8":
            return sprintf("%s", I(r));
        case "x10":
            return sprintf("%s", I(r));
        case "r8b":
            return sprintf("英式八孔竖笛%s调指法", r);
        case "r8g":
            return sprintf("德式八孔竖笛%s调指法", r);
        case "p8":
            return sprintf("%s", I(r));
        case "h7":
            return sprintf("%s", I(r));
        default:
            return ""
    }
}
// hc_js 10.19

function renderFingerings() {
    var e = $("#fingerings-wrapper"),
        t = "";
    if ("none" == context.instrumentIndex) return e.html(t), e.material_select(), $("#fingerings-wrapper-div").hide(), $("#show-graph-div").hide(), context.instrument = "none", window.localStorage.setItem("song_instrument", ""), void draw();

    $("#fingerings-wrapper-div").show()
    // , $("#show-graph-div").show();

    var n = context.instrumentFingerings[context.instrumentIndex];
    window.localStorage.setItem("song_instrument", n.instrument);
    var q = []
    var ww = window.localStorage.getItem('song_instrument')
    var selindex = -1
    for (var o, i, a = n.fingeringSets, r = 0; r < a.length; r++) {
        o = a[r], i = [];

        for (var s = 0; s < o.length; s++) {
            q.push(o[s])
            var endstr = ''
            if (ww == 'x8' || ww == 'x10' || ww == 'h7' || ww == 'p8') {
                endstr = getPlayHint(o[s].instrument, o[s].fingeringName)
            }
            i.push(util.render(`{fingeringName}调指法 {tonalityName}${endstr}`, o[s]))
        }
        // var t = window.localStorage.getItem('song_instrument')
        // console.log(i)
        // console.log(q) //---------------------------
        // console.log(i)
        // console.log(element.instrument)
        var names = i.join(" + ")
        if (ww == 'x8' || ww == 'x10') {
            var i2 = []
            i.forEach((element, index) => {
                // console.log(element.split(' ')[1])
                i2[index] = element.split(' ')[1]
            });

            // console.log(i2)
            names = '' + i2.join(" + ")
        }

        t += template("fingering-tpl", {
            index: r,
            fingeringName: names
        })
    }

    e.html(t);
    if (ww == 'x8' || ww == 'x10' || ww == 'h7' || ww == 'p8') {
        q.forEach((element, index) => {
            // console.log(element)
            // console.log(index)
            if (selindex != -1) return
            // console.log(getPlayHint(element.instrument, element.fingeringName))
            if (getPlayHint(element.instrument, element.fingeringName) == "(筒音作5)") {
                // console.log(index)
                selindex = index
                context.fingeringIndex = index
                e.val(index)
                // draw()
            }
        });
    }

    console.log('-------------------', selindex)

    e.material_select(selindex);

    var c = function () {
        // console.log('change')
        console.log(e.val())
        context.fingeringIndex = e.val(), changeFingering()
    };
    e.on("change", c), c()
}
// var index = layer.open({
//     type: 2,
// });
// layer.close(index)

function changeFingering() {
    if ("none" != context.instrumentIndex) {
        for (var e = context.instrumentFingerings[context.instrumentIndex], t = e.fingeringSets[context.fingeringIndex], n = [], o = 0; o < t.length; o++) {
            n.push(t[o].fingering);
        }
        console.log(n)
        context.instrument = e.instrument, context.fingering = n.join("+"), draw()
    }
}

function sheetLogicWidth() {
    var e = Math.max(500, $("#sheet").width());
    return 834 > e ? 1.2 * e : 1e3 > e ? 1e3 : e
}

function initSheetScale() {
    var e = sheetLogicWidth(),
        t = Math.ceil(e > 4e3 ? 10 : Math.max(5, e / 400)),
        n = Math.floor(e > 1200 ? e / 100 : 12),
        o = e > 2e3 ? e / 200 : 10;
    context.sheet_scale && (o = context.sheet_scale <= t ? t : context.sheet_scale >= n ? n : context.sheet_scale), context.sheetScaleList = [];
    var a = $("#sheet-scale");
    for (i = t; n >= i; i++) a.append('<option value="' + i + '"' + (i == o ? "selected" : "") + " >" + 10 * i + "%</option>"), context.sheetScaleList.push(i)
}

function initForDraw() {
    var lastSongData;
    if (context.local) {
        var refresh = function () {
            var songData = window.localStorage.getItem("song_data");
            return lastSongData ? void(lastSongData != songData && window.location.reload()) : (lastSongData = songData, context = eval("(" + songData + ")"), context.local = 1, $("title").html(context.song_name), void draw())
        };
        setInterval(refresh, 600), refresh()
    } else draw();

    // $("#tags-wrapper").append(chipTag.song.strToChipHtml(context.tags));
    var mediaHtml = media.generateHtml(context.music_list);
    $("#media-wrapper").html(mediaHtml), $(".materialboxed").materialbox(), $("#sheet").click(function (e) {
        e.pageY < 100 && switchFullScreen() || toggleMenu()
    })
}

function isMessageHandlerExisted() {
    return window.webkit && window.webkit.messageHandlers
}

function switchFullScreen() {
    return postMessageToMessageHandler("switchNavigationBar") ? !0 : "undefined" != typeof NativeAPI && NativeAPI.switchFullScreen ? (NativeAPI.switchFullScreen(), !0) : !1
}

function postMessageToMessageHandler(e, t) {
    if (!isMessageHandlerExisted()) return !1;
    try {
        return window.webkit.messageHandlers[e].postMessage({
            body: t ? t : ""
        }), !0
    } catch (n) {
        return console.log(n), !1
    }
}

$('#play-li').click(function () {
    if ($('#play-btn').hasClass('icon-play3')) {
        $("#menu-modal").closeModal()
        $("#play-modal").openModal()
    }
})

function initSongMidi() {
    SongMidi.init({
        // domId: "init-start",
        domId: "play-li",
        getBpm: function () {
            return context.bpm
        },
        playLoop: function () {
            return "on" == $("#play_loop").val()
        },
        getPlayContents: function () {
            return {
                notes: context.midiNotes ? context.midiNotes : []
            }
        },
        getSkin: function () {
            return context.skin && "dark" == context.skin ? "dark" : "light"
        },
        onClick: function () {

            tickForIOS(), $("#menu-modal").closeModal()

        }
    }), context.onMidiNotesChange = function () {
        SongMidi.refresh()

    }, MicroPhone.isBrowserSupport() || $("#play-microphone-row").hide()
}

function writeHistory() {
    context.local || util.writeHistory("history_songs", {
        id: context.song_uuid,
        label: util.sprintf("%s %s", context.song_name, context.alias_name),
        value: ""
    }, 10)
}

function initUserSongMenu() {
    var e = $("#user-song-li");
    context.user_id ? e.html(context.user_song ? '<i class="icon-star-full"></i><p>取消收藏</p>' : '<i class="icon-star-empty"></i><p>添加收藏</p>') : e.hide()
}

function initContextFromStorage() {
    var e;
    e = window.localStorage.getItem("score_orientation"), e && $("input[name='score-orientation'][value=" + e + "]").attr("checked", !0), e = window.localStorage.getItem("song_cfingering"), e && (context.cfingering = e, $("#cfingering").val(e)), e = window.localStorage.getItem("song_show_note_range"), e && (context.show_note_range = e, $("#show-note-range").val(e)), e = window.localStorage.getItem("song_show_bar_num"), e && (context.show_bar_num = e, $("#show-bar-num").val(e)), e = window.localStorage.getItem("song_show_graph"), e && (context.show_graph = e, $("#show-graph").val(e)), e = window.localStorage.getItem("song_show_lyric"), e && (context.show_lyric = e, $("#show-lyric").val(e)), e = window.localStorage.getItem("song_show_chord_name"), e && (context.show_chord_name = e, $("#show-chord-name").val(e)), e = window.localStorage.getItem("song_show_finger_num"), e && (context.show_finger_num = e, $("#show-finger-num").val(e)), e = window.localStorage.getItem("song_sheet_scale"), e && (context.sheet_scale = e), e = window.localStorage.getItem("song_background_color"), e && (context.background_color = e, $("#background-color").val(e)), e = window.localStorage.getItem("song_show_foot"), e && (context.show_foot = e, $("#show-foot").val(e)), e = window.localStorage.getItem("song_play_metronome"), e && $("#play_metronome").val(e), e = window.localStorage.getItem("song_play_note"), e && $("#play_note").val(e), e = window.localStorage.getItem("song_play_chord"), e && $("#play_chord").val(e), e = window.localStorage.getItem("song_play_loop"), e && $("#play_loop").val(e);

    // 10.27
    var isshow = window.localStorage.getItem('song_show_top') ? window.localStorage.getItem('song_show_top') :
        'on'
    $("#show-foot").val(isshow)
    $('#header').css('display', isshow == 'on' ? 'block' : 'none')
    $("#show-foot").val(isshow)
    $('#header').css('display', isshow == 'on' ? 'block' : 'none')

    if (isshow == 'on' && $("#show-note-range").val() != 'on') {
        $('.newbtnbox').css({
            'top': '60px',
            'display': 'flex'
        })
    } else {
        $('.newbtnbox').css({
            'top': '10px',
            'display': 'none'
        })
    }

    console.log('音域', $("#show-note-range").val())
    if ($("#show-note-range").val() == 'on') {
        $('.newbtnbox').css({
            'display': 'none'
        })
    }
    // 10.27

}



// 10.22设置转调
// 设置转调
var tiaoshi = [{
        keynote: "1=C",
        octave: ['C', 'Dm', 'Em', 'F', 'G', 'Am']
    },
    {
        keynote: "1=#C",
        octave: ['#C', 'bEm', 'Fm', '#F', 'bA', 'bBm']
    },
    {
        keynote: "1=D",
        octave: ['D', 'Em', '#Fm', 'G', 'A', 'Bm']
    },
    {
        keynote: "1=bE",
        octave: ['bE', 'Fm', 'Gm', 'bA', 'bB', 'Cm']
    },
    {
        keynote: "1=E",
        octave: ['E', '#Fm', 'bAm', 'A', 'B', '#Cm']
    },
    {
        keynote: "1=F",
        octave: ['F', 'Gm', 'Am', 'bB', 'C', 'Dm']
    },
    {
        keynote: "1=#F",
        octave: ['#F', 'bAm', 'bBm', 'B', '#C', 'bEm']
    },
    {
        keynote: "1=G",
        octave: ['G', 'Am', 'Bm', 'C', 'D', 'Em']
    },
    {
        keynote: "1=#G",
        octave: ['bA', 'bBm', 'Cm', '#C', 'bE', 'Fm']
    },
    {
        keynote: "1=A",
        octave: ['A', 'Bm', '#Cm', 'D', 'E', '#Fm']
    },
    {
        keynote: "1=bB",
        octave: ['bB', 'Cm', 'Dm', 'bE', 'F', 'Gm']
    },
    {
        keynote: "1=B",
        octave: ['B', '#Cm', 'bEm', 'E', '#F', 'bAm']
    },
]
// var svelteoctave = {}

function initsvelte() {
    var t = ''
    var val = -1
    if (!context.keynote) {
        window.myinserts = false
        $('#svelte').parent().hide()
        return
    }
    tiaoshi.forEach((element, index) => {
        t += `<option value="${index}" selected=${element.keynote == context.keynote}">${element.keynote}</option>`
        if (element.keynote == context.keynote) {
            val = index
            // svelteoctave = {
            //     index: index,
            //     data: []
            // }
        }
    });
    if (val == -1) {
        window.myinserts = false
        $('#svelte').parent().hide()
        return
    }
    getsevelte()
    window.myinserts = true
    $('#svelte').html(t)
    $('#svelte').val(val)
}

function getsevelte() {
    context.notation.replace(/{cn:(\s{0,}\#?\w+\s{0,})}/gi, (sear, retu) => {
        // if (svelteoctave.data.indexOf(retu.trim()) == -1) {
        //     svelteoctave.data.push(retu.trim())
        // }
    })
}

function svelteChange(val) {
    console.log(val)
    var oldval = -1
    tiaoshi.forEach((element, index) => {
        if (context.keynote == element.keynote) {
            oldval = index
        }
    });
    if (oldval == -1) {
        console.log(oldval);
        return
    }
    context.keynote = tiaoshi[val].keynote

    // svelteoctave = {
    //     index: val,
    //     data: []
    // }

    // context.notation = context.notation.replace(/{cn:(\s{0,}\#?\w+\s{0,})}/gi, (sear, retu) => {
    //     var myindex = -1
    //     tiaoshi[oldval].octave.forEach((element, index) => {
    //         if (element == retu.trim()) {
    //             myindex = index
    //         }
    //     });

    //     if (myindex == -1) {
    //         console.log(myindex)
    //         return sear
    //     }
    //     return '{cn:' + tiaoshi[val].octave[myindex] + '}'
    // })
    getsevelte()
    draw() // 转调
}
// 10.22设置转调

// 10.25吉他转调
var svelteoctave = {}

var deload = false

function initjitanote() {
    var t = ''
    context.oldnotation = JSON.parse(JSON.stringify(context.notation))
    var val = -1
    if (!context.guitarnote) {
        window.myinserts = false
        $('#jitasvelte').parent().hide()
        return
    }
    tiaoshi.forEach((element, index) => {
        t += `<option value="${index}" selected=${element.keynote.split('=')[1] == context.guitarnote}">${'选调:'+element.keynote.split('=')[1]}</option>`
        if (element.keynote.split('=')[1] == context.guitarnote) {
            val = index
            svelteoctave = {
                index: index,
                data: []
            }
        }
    });
    if (deload === false) {
        deload = svelteoctave.index
    }
    if (val == -1) {
        window.myinserts = false
        $('#jitasvelte').parent().hide()
        return
    }
    getjitanote()
    window.myinserts = true
    $('#jitasvelte').html(t)
    $('#jitasvelte').val(val)
}

function getjitanote() {
    context.notation.replace(/{cn:(\s{0,}\#?\w+\s{0,})}/gi, (sear, retu) => {
        if (svelteoctave.data.indexOf(retu.trim()) == -1) {
            svelteoctave.data.push(retu.trim())
        }
    })
}

function jitanoteChange(val) {
    var oldval = -1
    tiaoshi.forEach((element, index) => {
        if (context.guitarnote == element.keynote.split('=')[1]) {
            oldval = index
        }
    });
    if (oldval == -1) {
        console.log(oldval);
        return
    }

    context.guitarnote = tiaoshi[val].keynote.split('=')[1]
    svelteoctave = {
        index: val,
        data: []
    }

    var chazhi = 0
    chazhi = svelteoctave.index - deload
    var oldNC = []
    var newNC = []
    // context.notation = 
    context.oldnotation.replace(/{cn:(\s{0,}\#?\w+\s{0,})}/gi, (sear, retu) => {
        oldNC.push(retu.trim())
        return sear
    })
    // 更改和弦
    oldNC.forEach((element, index) => {
        cvgdata.forEach((element1, index1) => {
            element1.forEach((element2, index2) => {
                if (Object.keys(element2)[0] == element) {
                    var outindex = index1 + chazhi
                    if (index1 + chazhi > 11) {
                        outindex = index1 + chazhi - 12
                    }
                    if (index1 + chazhi < 0) {
                        outindex = index1 + chazhi + 12
                    }
                    // console.log('index1:' + index1 + Object.keys(cvgdata[outindex][index2])[0])
                    newNC.push(Object.keys(cvgdata[outindex][index2])[0])
                } else {
                    return
                }
            });

        });
    });
    console.log(newNC)
    var tihuanindex = -1
    context.notation = context.oldnotation.replace(/{cn:(\s{0,}\#?\w+\s{0,})}/gi, (sear, retu) => {
        tihuanindex += 1
        return '{cn:' + newNC[tihuanindex] + '}'
    })
    // 更改和弦
    // console.log(context.oldnotation)
    // console.log(context.notation)
    getjitanote()
    draw() // 转调
}
// 10.25吉他转调

if (context.guitarbd) {
    $('#bdjia').html('变调夹：' + context.guitarbd)
}


function initOnOptionChanged() {
    $('input[name="score-orientation"]').on("change", function () {
        window.localStorage.setItem("score_orientation", $(this).val())
    }), $("#cfingering").on("change", function () {
        context.cfingering = $(this).val(), window.localStorage.setItem("song_cfingering", context.cfingering), draw()
    }), $("#svelte").on("change", function () { // 10.22转调//-------------------------
        console.log('change')
        svelteChange($(this).val()) // 10.22转调
    }), $("#jitasvelte").on("change", function () { // 10.25吉他转调//-------------------------
        console.log('change')
        jitanoteChange($(this).val()) // 10.25吉他转调
    }), $("#text-octave").on("change", function () { // 高八度
        draw() // 高八度
    }), $("#show-note-range").on("change", function () {
        console.log($(this).val())
        if ($(this).val() == 'on') {
            $('.newbtnbox').css({
                'display': 'none'
            })
        }
        console.log(window.localStorage.getItem('song_show_top'))
        if ($(this).val() == 'off' && window.localStorage.getItem('song_show_top') != 'off') {
            $('.newbtnbox').css({
                'top': '60px',
                'display': 'flex'
            })
        }
        context.show_note_range = $(this).val(), window.localStorage.setItem("song_show_note_range", context.show_note_range), draw()
    }), $("#show-bar-num").on("change", function () {
        context.show_bar_num = $(this).val(), window.localStorage.setItem("song_show_bar_num", context.show_bar_num), draw()
    }), $("#show-graph").on("change", function () {
        context.show_graph = $(this).val(), window.localStorage.setItem("song_show_graph", context.show_graph), draw()
    }), $("#show-lyric").on("change", function () {
        context.show_lyric = $(this).val(), window.localStorage.setItem("song_show_lyric", context.show_lyric), draw()
    }), $("#show-chord-name").on("change", function () {
        context.show_chord_name = $(this).val(), window.localStorage.setItem("song_show_chord_name", context.show_chord_name), draw()
    }), $("#show-finger-num").on("change", function () {
        context.show_finger_num = $(this).val(), window.localStorage.setItem("song_show_finger_num", context.show_finger_num), draw()
    }), $("#sheet-scale").on("change", function () {
        scaleSheet($(this).val())
    }), $("#background-color").on("change", function () {
        context.background_color = $(this).val(), window.localStorage.setItem("song_background_color", context.background_color), draw()
    }), $("#show-foot").on("change", function () {
        context.show_foot = $(this).val(), window.localStorage.setItem("song_show_foot", context.show_foot), draw()
    }), $("#play_metronome").on("change", function () {
        window.localStorage.setItem("song_play_metronome", $(this).val())
    }), $("#play_microphone").on("change", function () {
        window.localStorage.setItem("song_play_microphone", $(this).val())
    }), $("#play_note").on("change", function () {
        window.localStorage.setItem("song_play_note", $(this).val())
    }), $("#play_chord").on("change", function () { //和弦
        window.localStorage.setItem("song_play_chord", $(this).val()) //和弦
    }), $("#play_music").on("change", function () {

        if (window.isvip == 0) {
            window.localStorage.setItem("song_play_music", 'piano')
            $("#show-graph").val('piano')
            layer.open({
                content: '您不是VIP，请开通VIP',
                btn: ['去看看', "取消"],
                yes: function (index) {
                    nav('/pages/buyvip/buyvip')
                    layer.close(index);
                }
            });
            return
        }

        window.localStorage.setItem("song_play_music", $(this).val())
        var r = window.navigator.userAgent.match(/chrome|android|ie|edge|firefox|opera/i) ? "ogg" : "mp3";
        var name = window.localStorage.getItem("song_play_music")
        console.log(window.MidiAudio.soundfont = {}) //new
        console.log(name)
        // ./public
        // http://127.0.0.1:5501/
        var t = "./public/acoustic_grand_" + name + "-" + r + ".js"
        // var t = "https://qpu.cangqiang.com/bofang/bofan/acoustic_grand_" + name + "-" + r + ".js"
        window.MidiAudio.init({
            soundfontUrl: t,
            // instrument: 'acoustic_grand_' + name,//new
        })

    }), $("#play_transpose").on("change", function () {
        draw()
    }), $("#play_loop").on("change", function () {
        window.localStorage.setItem("song_play_loop", $(this).val())
    })
}

// $('#init-start').click(function () {

//     var r = window.navigator.userAgent.match(/chrome|android|ie|edge|firefox|opera/i) ? "ogg" : "mp3";
//     var name = window.localStorage.getItem("song_play_music") ? window.localStorage.getItem("song_play_music") : 'piano'
//     console.log(window.MidiAudio.soundfont = {}) //new
//     console.log(name)
//     // ./public
//     // http://127.0.0.1:5501/
//     var t = "./public/acoustic_grand_" + name + "-" + r + ".js"
//     var e = window.eee
//     console.log(e)
//     console.log(SongMidi.context.ui.getStatus())
//     window.MidiAudio.init({
//         soundfontUrl: t,
//         onsuccess: function () {
//             MidiPlayer.isLoaded = !0, e.onload && e.onload()
//             console.log(MidiPlayer.isLoaded)

//         },
//         // instrument: 'acoustic_grand_' + name,//new
//     })
// })

function initMenuModal() {
    $("#user-song-li").click(function () {
        userSongUtil.switch({
            song_uuid: context.song_uuid,
            user_song: context.user_song,
            onUserSongRemoved: function () {
                context.user_song = 0, initUserSongMenu(), Materialize.toast("取消成功", 2e3)
            },
            onUserSongAdded: function () {
                context.user_song = 1, initUserSongMenu(), Materialize.toast("收藏成功", 2e3)
            },
            onError: function (e, t) {
                Materialize.toast(t, 2e3)
            }
        })
    }), $("#metronome-li").click(function () {
        $("#metronome-modal").openModal()
    }), $("#instruments-li").click(function () {
        $("#instruments-modal").openModal()
    })
}

function toggleMenu() {
    var e = $("#menu-modal");
    "block" === e.css("display") ? e.closeModal() : (tickForIOS(), e.openModal())

}

function scaleSheet(e) {
    console.log("scaleSheet", 10 * e + "%"), context.sheet_scale = e, window.localStorage.setItem("song_sheet_scale", e), draw(),
        setTimeout(() => {
            draw()
        }, 10);
}

function sheetScaleIn() {
    var e = "";
    if (!context.sheetScaleList || context.sheetScaleList.length < 1) return e;
    for (var t = $("#sheet-scale"), n = t.val(), o = 0; o < context.sheetScaleList.length; o++)
        if (context.sheetScaleList[o] >= n) return o > 0 && (e = context.sheetScaleList[o - 1], t.val(e), scaleSheet(e)), e;
    console.log(e)
    return e
}

function sheetScaleOut() {
    var e = "";
    if (!context.sheetScaleList || context.sheetScaleList.length < 1) return e;
    for (var t = $("#sheet-scale"), n = t.val(), o = 0; o < context.sheetScaleList.length; o++)
        if (context.sheetScaleList[o] > n) return e = context.sheetScaleList[o], t.val(e), scaleSheet(e), e;
    console.log(e)
    return e
}

function tickForIOS() {
    window.navigator.userAgent.match(/iphone|ipod|ipad|mac/i) && MidiAudio.tick(.01, 440, .1)
}

function checkLocationHref() {
    return true
}

function hasViewPermission() {
    if (context.is_vip) return !0;
    for (var e = context.song_uuid, t = JSON.parse(window.localStorage.getItem("viewed_songs") || "[]"), n = !1, o = 0, i = t.length; i > o; o++)
        if (e == t[o].song_uuid) {
            n = !0;
            break
        } return n ? !0 : t.length >= 5 ? !1 : (t.push({
        song_uuid: e
    }), window.localStorage.setItem("viewed_songs", JSON.stringify(t)), !0)
}

function initSongInstrument() {
    // $("#select-instrument").openModal(), ------------------------------------------------------------------------------------------------------------------------------
    window.localStorage.getItem("preference_instrument") || ($("#select-instrument-btn").on("click", function () {
        var e = $('input[name="which-instrument"]:checked').val();
        window.localStorage.setItem("song_instrument", e), window.localStorage.setItem("preference_instrument", e), renderInstruments()
    }))
}

function setresize() {
    var width = 10 * sheetLogicWidth() / (context.sheet_scale || 10);

    $('#linesvg').children().html('')
    var myhtml1 = JSON.parse(JSON.stringify($('#linesvg').html()))
    $('#linesvg').width(width - .12 * width)
    $('#linesvg').html(myhtml1)

    $('#linebottomsvg').children().html('')
    var myhtml2 = JSON.parse(JSON.stringify($('#linebottomsvg').html()))
    $('#linebottomsvg').width(width - .12 * width)
    $('#linebottomsvg').html(myhtml2)
}

// function loadcallback1() {
$(document).ready(function () {

    initsvelte() //10.22

    initjitanote() //10.22


    // $.ajax({
    //     type: 'POST',
    //     url: '/Home/GetName', // 本地测试接口
    //     async: false,
    //     success: function (result) {
    //         console.log(result)
    //         context = result.name;
    //     }
    // });

    // alert(context);

    return checkLocationHref() ? hasViewPermission() ? ($("body").append(''), window.onresize = function () {
        // id="linesvg"
        // setresize()
        draw()
    }, context.local ? $("#back-btn").hide() : $("#back-btn").click(function () {
        // navi.back("/")
    }), $("#menu-btn").click(function () {
        $('.editor-title').removeClass('showhide')
        toggleMenu()

    }), document.oncontextmenu = function () {
        // return !1
    }, $(document).keypress(function (e) {
        switch (e.which) {
            case 45:
                sheetScaleIn();
                break;
            case 43:
            case 61:
                sheetScaleOut();
                break;
            default:
                console.log("keypress", e.which)
        }
    }), initContextFromStorage(), initMenuModal(), initOnOptionChanged(), initSheetScale(), initSongMidi(), initForDraw(), initUserSongMenu(), initMetronome(context.rhythm, context.bpm ? context.bpm : 72), initSongInstrument(), void writeHistory()) : void("") : void("")
});


// }















// 10.21------v