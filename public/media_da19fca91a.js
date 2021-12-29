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