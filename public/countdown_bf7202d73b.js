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