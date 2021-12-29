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