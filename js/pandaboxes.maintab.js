function removeHtmlTag(_0x6c4ex2, _0x6c4ex3) {
    for (var _0x6c4ex4 = _0x6c4ex2.split("<"), _0x6c4ex5 = 0; _0x6c4ex5 < _0x6c4ex4.length; _0x6c4ex5++) {
        -1 != _0x6c4ex4[_0x6c4ex5].indexOf(">") && (_0x6c4ex4[_0x6c4ex5] = _0x6c4ex4[_0x6c4ex5].substring(_0x6c4ex4[_0x6c4ex5].indexOf(">") + 1, _0x6c4ex4[_0x6c4ex5].length))
    };
    return _0x6c4ex4 = _0x6c4ex4.join(""), _0x6c4ex4 = _0x6c4ex4.substring(0, _0x6c4ex3 - 1)
}

function sliderposts(_0x6c4ex2) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array, maxpost = numposts1 <= _0x6c4ex2.feed.entry.length ? numposts1 : _0x6c4ex2.feed.entry.length;
    for (var _0x6c4ex3 = 0; _0x6c4ex3 < maxpost; _0x6c4ex3++) {
        var _0x6c4ex4, _0x6c4ex7, _0x6c4ex8 = _0x6c4ex2.feed.entry[_0x6c4ex3],
            _0x6c4ex9 = _0x6c4ex8.category[0].term,
            _0x6c4exa = _0x6c4ex8.title["$t"];
        if (_0x6c4ex3 == _0x6c4ex2.feed.entry.length) {
            break
        };
        for (var _0x6c4exb = 0; _0x6c4exb < _0x6c4ex8.link.length; _0x6c4exb++) {
            if ("alternate" == _0x6c4ex8.link[_0x6c4exb].rel) {
                _0x6c4ex7 = _0x6c4ex8.link[_0x6c4exb].href;
                break
            }
        };
        for (var _0x6c4exb = 0; _0x6c4exb < _0x6c4ex8.link.length; _0x6c4exb++) {
            if ("replies" == _0x6c4ex8.link[_0x6c4exb].rel && "text/html" == _0x6c4ex8.link[_0x6c4exb].type) {
                _0x6c4ex4 = _0x6c4ex8.link[_0x6c4exb].title.split(" ")[0];
                break
            }
        };
        if ("content" in _0x6c4ex8) {
            var _0x6c4exc = _0x6c4ex8.content["$t"]
        } else {
            if ("summary" in _0x6c4ex8) {
                var _0x6c4exc = _0x6c4ex8.summary["$t"]
            } else {
                var _0x6c4exc = ""
            }
        };
        postdate = _0x6c4ex8.published["$t"], j > imgr.length - 1 && (j = 0), img[_0x6c4ex3] = imgr[j], s = _0x6c4exc, a = s.indexOf("<img"), b = s.indexOf("src=\"", a), c = s.indexOf("\"", b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[_0x6c4ex3] = d);
        for (var _0x6c4exd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], _0x6c4exe = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], _0x6c4exf = postdate.split("-")[2].substring(0, 2), _0x6c4ex10 = postdate.split("-")[1], _0x6c4ex11 = postdate.split("-")[0], _0x6c4ex12 = 530, _0x6c4ex13 = 400, _0x6c4ex14 = 275, _0x6c4ex15 = 280, _0x6c4ex16 = 0; _0x6c4ex16 < _0x6c4exd.length; _0x6c4ex16++) {
            if (parseInt(_0x6c4ex10) == _0x6c4exd[_0x6c4ex16]) {
                _0x6c4ex10 = _0x6c4exe[_0x6c4ex16];
                break
            }
        };
        var _0x6c4ex17 = _0x6c4exf + " " + _0x6c4ex10 + " " + _0x6c4ex11;
        if (0 == _0x6c4ex3) {
            var _0x6c4ex18 = "<div class=\"main-post col-post\"><div class=\"date\"><p><span>" + _0x6c4ex17 + "</span></p></div><a href=\"" + _0x6c4ex7 + "\"><img width=\"" + _0x6c4ex12 + "\" height=\"" + _0x6c4ex13 + "\" src=\"" + img[_0x6c4ex3] + "\" alt=\"\"></img><div class=\"info\"><div class=\"box-title\"><h3><span class=\"box-label\">" + _0x6c4ex9 + "</span><a href=\"" + _0x6c4ex7 + "\" title=\"\">" + _0x6c4exa + "</a></h3></div></div></a></div>";
            document.write(_0x6c4ex18)
        } else {
            var _0x6c4ex18 = "<div class=\"second-post col-post\"><a href=\"" + _0x6c4ex7 + "\"><img width=\"" + _0x6c4ex14 + "\" height=\"" + _0x6c4ex15 + "\" src=\"" + img[_0x6c4ex3] + "\"></img><div class=\"info\"><div class=\"box-title\"><h3><span class=\"box-label\">" + _0x6c4ex9 + "</span><a href=\"" + _0x6c4ex7 + "\" title=\"\">" + _0x6c4exa + "</a></h3></div></div></a></div>";
            document.write(_0x6c4ex18)
        };
        j++
    }
}
imgr = new Array, imgr[0] = "https://sites.google.com/site/fdblogsite/Home/nothumbnail.gif", showRandomImg = !0, aBold = !0, summaryPost = 150, summaryTitle = 50, numposts1 = 10, featured_numposts = "5";

function mythumbn(_0x6c4ex2) {
    for (var _0x6c4ex3 = 0; _0x6c4ex3 < numposts; _0x6c4ex3++) {
        var _0x6c4ex8, _0x6c4ex7 = _0x6c4ex2.feed.entry[_0x6c4ex3],
            _0x6c4ex4 = _0x6c4ex7.title["$t"];
        if (_0x6c4ex3 == _0x6c4ex2.feed.entry.length) {
            break
        };
        for (var _0x6c4exb = 0; _0x6c4exb < _0x6c4ex7.link.length; _0x6c4exb++) {
            if ("replies" == _0x6c4ex7.link[_0x6c4exb].rel && "text/html" == _0x6c4ex7.link[_0x6c4exb].type) {
                var _0x6c4ex9 = _0x6c4ex7.link[_0x6c4exb].title,
                    _0x6c4exa = _0x6c4ex7.link[_0x6c4exb].href
            };
            if ("alternate" == _0x6c4ex7.link[_0x6c4exb].rel) {
                _0x6c4ex8 = _0x6c4ex7.link[_0x6c4exb].href;
                break
            }
        };
        var _0x6c4ex11;
        try {
            _0x6c4ex11 = _0x6c4ex7["media$thumbnail"].url, _0x6c4ex11 = _0x6c4ex11.replace("/s72-c/", "/w" + thumb_width + "-h" + thumb_height + "-c/")
        } catch (h) {
            s = _0x6c4ex7.content["$t"], a = s.indexOf("<img"), b = s.indexOf("src=\"", a), c = s.indexOf("\"", b + 5), d = s.substr(b + 5, c - b - 5), _0x6c4ex11 = -1 != a && -1 != b && -1 != c && "" != d ? d : no_thumb
        };
        var _0x6c4exd = _0x6c4ex7.published["$t"],
            _0x6c4ex15 = _0x6c4exd.substring(0, 4),
            _0x6c4exe = _0x6c4exd.substring(5, 7),
            _0x6c4exc = _0x6c4exd.substring(8, 10);
        document.write("<ul class=\"animagfid\">"), document.write("<li>"), 1 == showpostthumbnails && document.write("<a href=\"" + _0x6c4ex8 + "\"><div class=\"Pandaboxesthumb\"><img width=\"" + thumb_width + "\" height=\"" + thumb_height + "\" alt=\"" + _0x6c4ex4 + "\" src=\"" + _0x6c4ex11 + "\"/></div></a>"), document.write("<span class=\"Pandaboxestitle\"><a href=\"" + _0x6c4ex8 + "\" target =\"_top\">" + _0x6c4ex4 + "</a></span>");
        var _0x6c4ex10 = "";
        if (document.write("<span class=\"vienmeta\">"), 1 == showpostdate && (_0x6c4ex10 = _0x6c4ex10 + "<span class=\"vienmeta_date\">" + _0x6c4exc + "/" + _0x6c4exe + "/" + _0x6c4ex15 + "</span>"), 1 == showcommentnum && ("1 Comments" == _0x6c4ex9 && (_0x6c4ex9 = "1 Comment"), "0 Comments" == _0x6c4ex9 && (_0x6c4ex9 = "No Comments"), _0x6c4ex9 = "<span class=\"vienmeta_comment\"><a href=\"" + _0x6c4exa + "\" target =\"_top\">" + _0x6c4ex9 + "</a></span>", _0x6c4ex10 += _0x6c4ex9), 1 == displaymore && (_0x6c4ex10 = _0x6c4ex10 + "<span class=\"vienmeta_more\"><a href=\"" + _0x6c4ex8 + "\" class=\"url\" target =\"_top\">Read More...</a></span>"), document.write(_0x6c4ex10), document.write("</span>"), document.write("<span class=\"viesummary\">"), "content" in _0x6c4ex7) {
            var _0x6c4ex1a = _0x6c4ex7.content["$t"]
        } else {
            if ("summary" in _0x6c4ex7) {
                var _0x6c4ex1a = _0x6c4ex7.summary["$t"]
            } else {
                var _0x6c4ex1a = ""
            }
        };
        var _0x6c4ex14 = /<\S[^>]*>/g;
        if (_0x6c4ex1a = _0x6c4ex1a.replace(_0x6c4ex14, ""), 1 == showpostsummary) {
            if (_0x6c4ex1a.length < numchars) {
                document.write(""), document.write(_0x6c4ex1a), document.write("")
            } else {
                document.write(""), _0x6c4ex1a = _0x6c4ex1a.substring(0, numchars);
                var _0x6c4ex12 = _0x6c4ex1a.lastIndexOf(" ");
                _0x6c4ex1a = _0x6c4ex1a.substring(0, _0x6c4ex12), document.write(_0x6c4ex1a + "..."), document.write("")
            }
        };
        document.write("</span>"), document.write("</li>"), document.write("</ul>")
    };
    document.write("<ul class=\"animagfid2\">");
    for (var _0x6c4ex3 = 1; _0x6c4ex3 < numposts2; _0x6c4ex3++) {
        var _0x6c4ex8, _0x6c4ex7 = _0x6c4ex2.feed.entry[_0x6c4ex3],
            _0x6c4ex4 = _0x6c4ex7.title["$t"];
        if (_0x6c4ex3 == _0x6c4ex2.feed.entry.length) {
            break
        };
        for (var _0x6c4exb = 1; _0x6c4exb < _0x6c4ex7.link.length; _0x6c4exb++) {
            if ("replies" == _0x6c4ex7.link[_0x6c4exb].rel && "text/html" == _0x6c4ex7.link[_0x6c4exb].type) {
                var _0x6c4ex9 = _0x6c4ex7.link[_0x6c4exb].title,
                    _0x6c4exa = _0x6c4ex7.link[_0x6c4exb].href
            };
            if ("alternate" == _0x6c4ex7.link[_0x6c4exb].rel) {
                _0x6c4ex8 = _0x6c4ex7.link[_0x6c4exb].href;
                break
            }
        };
        var _0x6c4ex1b;
        try {
            _0x6c4ex1b = _0x6c4ex7["media$thumbnail"].url.replace("/s72-c/", "/w" + thumb_width2 + "-h" + thumb_height2 + "-c/")
        } catch (h) {
            s = _0x6c4ex7.content["$t"], a = s.indexOf("<img"), b = s.indexOf("src=\"", a), c = s.indexOf("\"", b + 5), d = s.substr(b + 5, c - b - 5), _0x6c4ex1b = -1 != a && -1 != b && -1 != c && "" != d ? d : no_thumb2
        };
        var _0x6c4exd = _0x6c4ex7.published["$t"],
            _0x6c4ex15 = _0x6c4exd.substring(0, 4),
            _0x6c4exe = _0x6c4exd.substring(5, 7),
            _0x6c4exc = _0x6c4exd.substring(8, 10);
        1 == showpostthumbnails2 && document.write("<a href=\"" + _0x6c4ex8 + "\"><div class=\"Pandaboxesthumb2\"><img width=\"" + thumb_width2 + "\" height=\"" + thumb_height2 + "\" alt=\"" + _0x6c4ex4 + "\" src=\"" + _0x6c4ex1b + "\"/></div></a>"), document.write("<li>"), document.write("<span class=\"Pandaboxestitle Pandaboxestitle2\"><a href=\"" + _0x6c4ex8 + "\" target =\"_top\">" + _0x6c4ex4 + "</a></span>");
        var _0x6c4ex10 = "";
        document.write("<span class=\"vienmeta vienmeta2\">"), 1 == showpostdate2 && (_0x6c4ex10 = _0x6c4ex10 + "<span class=\"vienmeta_date vienmeta_date2\">" + _0x6c4exc + "/" + _0x6c4exe + "/" + _0x6c4ex15 + "</span>"), 1 == showcommentnum2 && ("1 Comments" == _0x6c4ex9 && (_0x6c4ex9 = "1 Comment"), "0 Comments" == _0x6c4ex9 && (_0x6c4ex9 = "No Comments"), _0x6c4ex9 = "<span class=\"vienmeta_comment vienmeta_comment2\"><a href=\"" + _0x6c4exa + "\" target =\"_top\">" + _0x6c4ex9 + "</a></span>", _0x6c4ex10 += _0x6c4ex9), 1 == displaymore2 && (_0x6c4ex10 = _0x6c4ex10 + "<span class=\"vienmeta_more vienmeta_more2\"><a href=\"" + _0x6c4ex8 + "\" class=\"url\" target =\"_top\">Read More...</a></span>"), document.write(_0x6c4ex10), document.write("</span>"), document.write("</li>")
    };
    document.write("</ul>")
}

function mythumbn1(_0x6c4ex2) {
    for (var _0x6c4ex3 = 0; _0x6c4ex3 < numposts; _0x6c4ex3++) {
        var _0x6c4ex8, _0x6c4ex7 = _0x6c4ex2.feed.entry[_0x6c4ex3],
            _0x6c4ex4 = _0x6c4ex7.title["$t"];
        if (_0x6c4ex3 == _0x6c4ex2.feed.entry.length) {
            break
        };
        for (var _0x6c4exb = 0; _0x6c4exb < _0x6c4ex7.link.length; _0x6c4exb++) {
            if ("replies" == _0x6c4ex7.link[_0x6c4exb].rel && "text/html" == _0x6c4ex7.link[_0x6c4exb].type) {
                var _0x6c4ex9 = _0x6c4ex7.link[_0x6c4exb].title,
                    _0x6c4exa = _0x6c4ex7.link[_0x6c4exb].href
            };
            if ("alternate" == _0x6c4ex7.link[_0x6c4exb].rel) {
                _0x6c4ex8 = _0x6c4ex7.link[_0x6c4exb].href;
                break
            }
        };
        var _0x6c4ex11;
        try {
            _0x6c4ex11 = _0x6c4ex7["media$thumbnail"].url, _0x6c4ex11 = _0x6c4ex11.replace("/s72-c/", "/w" + thumb_width + "-h" + thumb_height + "-c/")
        } catch (h) {
            s = _0x6c4ex7.content["$t"], a = s.indexOf("<img"), b = s.indexOf("src=\"", a), c = s.indexOf("\"", b + 5), d = s.substr(b + 5, c - b - 5), _0x6c4ex11 = -1 != a && -1 != b && -1 != c && "" != d ? d : no_thumb
        };
        var _0x6c4exd = _0x6c4ex7.published["$t"],
            _0x6c4ex15 = _0x6c4exd.substring(0, 4),
            _0x6c4exe = _0x6c4exd.substring(5, 7),
            _0x6c4exc = _0x6c4exd.substring(8, 10);
        document.write("<ul class=\"animagfid1\">"), document.write("<li>"), 1 == showpostthumbnails && document.write("<a href=\"" + _0x6c4ex8 + "\"><div class=\"Pandaboxesthumb\"><img width=\"" + thumb_width + "\" height=\"" + thumb_height + "\" alt=\"" + _0x6c4ex4 + "\" src=\"" + _0x6c4ex11 + "\"/></div></a>"), document.write("<span class=\"Pandaboxestitle\"><a href=\"" + _0x6c4ex8 + "\" target =\"_top\">" + _0x6c4ex4 + "</a></span>");
        var _0x6c4ex10 = "";
        if (document.write("<span class=\"vienmeta\">"), 1 == showpostdate && (_0x6c4ex10 = _0x6c4ex10 + "<span class=\"vienmeta_date\">" + _0x6c4exc + "/" + _0x6c4exe + "/" + _0x6c4ex15 + "</span>"), 1 == showcommentnum && ("1 Comments" == _0x6c4ex9 && (_0x6c4ex9 = "1 Comment"), "0 Comments" == _0x6c4ex9 && (_0x6c4ex9 = "No Comments"), _0x6c4ex9 = "<span class=\"vienmeta_comment\"><a href=\"" + _0x6c4exa + "\" target =\"_top\">" + _0x6c4ex9 + "</a></span>", _0x6c4ex10 += _0x6c4ex9), 1 == displaymore && (_0x6c4ex10 = _0x6c4ex10 + "<span class=\"vienmeta_more\"><a href=\"" + _0x6c4ex8 + "\" class=\"url\" target =\"_top\">Read More...</a></span>"), document.write(_0x6c4ex10), document.write("</span>"), document.write("<span class=\"viesummary\">"), "content" in _0x6c4ex7) {
            var _0x6c4ex1a = _0x6c4ex7.content["$t"]
        } else {
            if ("summary" in _0x6c4ex7) {
                var _0x6c4ex1a = _0x6c4ex7.summary["$t"]
            } else {
                var _0x6c4ex1a = ""
            }
        };
        var _0x6c4ex14 = /<\S[^>]*>/g;
        if (_0x6c4ex1a = _0x6c4ex1a.replace(_0x6c4ex14, ""), 1 == showpostsummary) {
            if (_0x6c4ex1a.length < numchars) {
                document.write(""), document.write(_0x6c4ex1a), document.write("")
            } else {
                document.write(""), _0x6c4ex1a = _0x6c4ex1a.substring(0, numchars);
                var _0x6c4ex12 = _0x6c4ex1a.lastIndexOf(" ");
                _0x6c4ex1a = _0x6c4ex1a.substring(0, _0x6c4ex12), document.write(_0x6c4ex1a + "..."), document.write("")
            }
        };
        document.write("</span>"), document.write("</li>"), document.write("</ul>")
    };
    document.write("<ul class=\"animagfid22\">");
    for (var _0x6c4ex3 = 1; _0x6c4ex3 < numposts3; _0x6c4ex3++) {
        var _0x6c4ex8, _0x6c4ex7 = _0x6c4ex2.feed.entry[_0x6c4ex3],
            _0x6c4ex4 = _0x6c4ex7.title["$t"];
        if (_0x6c4ex3 == _0x6c4ex2.feed.entry.length) {
            break
        };
        for (var _0x6c4exb = 1; _0x6c4exb < _0x6c4ex7.link.length; _0x6c4exb++) {
            if ("replies" == _0x6c4ex7.link[_0x6c4exb].rel && "text/html" == _0x6c4ex7.link[_0x6c4exb].type) {
                var _0x6c4ex9 = _0x6c4ex7.link[_0x6c4exb].title,
                    _0x6c4exa = _0x6c4ex7.link[_0x6c4exb].href
            };
            if ("alternate" == _0x6c4ex7.link[_0x6c4exb].rel) {
                _0x6c4ex8 = _0x6c4ex7.link[_0x6c4exb].href;
                break
            }
        };
        var _0x6c4ex1b;
        try {
            _0x6c4ex1b = _0x6c4ex7["media$thumbnail"].url.replace("/s72-c/", "/w" + thumb_width2 + "-h" + thumb_height2 + "-c/")
        } catch (h) {
            s = _0x6c4ex7.content["$t"], a = s.indexOf("<img"), b = s.indexOf("src=\"", a), c = s.indexOf("\"", b + 5), d = s.substr(b + 5, c - b - 5), _0x6c4ex1b = -1 != a && -1 != b && -1 != c && "" != d ? d : no_thumb2
        };
        var _0x6c4exd = _0x6c4ex7.published["$t"],
            _0x6c4ex15 = _0x6c4exd.substring(0, 4),
            _0x6c4exe = _0x6c4exd.substring(5, 7),
            _0x6c4exc = _0x6c4exd.substring(8, 10);
        1 == showpostthumbnails2 && document.write("<a href=\"" + _0x6c4ex8 + "\"><div class=\"Pandaboxesthumb2\"><img width=\"" + thumb_width2 + "\" height=\"" + thumb_height2 + "\" alt=\"" + _0x6c4ex4 + "\" src=\"" + _0x6c4ex1b + "\"/></div></a>"), document.write("<li>"), document.write("<span class=\"Pandaboxestitle Pandaboxestitle2\"><a href=\"" + _0x6c4ex8 + "\" target =\"_top\">" + _0x6c4ex4 + "</a></span>");
        var _0x6c4ex10 = "";
        document.write("<span class=\"vienmeta vienmeta2\">"), 1 == showpostdate2 && (_0x6c4ex10 = _0x6c4ex10 + "<span class=\"vienmeta_date vienmeta_date2\">" + _0x6c4exc + "/" + _0x6c4exe + "/" + _0x6c4ex15 + "</span>"), 1 == showcommentnum2 && ("1 Comments" == _0x6c4ex9 && (_0x6c4ex9 = "1 Comment"), "0 Comments" == _0x6c4ex9 && (_0x6c4ex9 = "No Comments"), _0x6c4ex9 = "<span class=\"vienmeta_comment vienmeta_comment2\"><a href=\"" + _0x6c4exa + "\" target =\"_top\">" + _0x6c4ex9 + "</a></span>", _0x6c4ex10 += _0x6c4ex9), 1 == displaymore2 && (_0x6c4ex10 = _0x6c4ex10 + "<span class=\"vienmeta_more vienmeta_more2\"><a href=\"" + _0x6c4ex8 + "\" class=\"url\" target =\"_top\">Read More...</a></span>"), document.write(_0x6c4ex10), document.write("</span>"), document.write("</li>")
    };
    document.write("</ul>")
}

function mythumbn2(_0x6c4ex2) {
    document.write("<div id=\"recent-posts\">");
    for (var _0x6c4ex3 = 0; numpost > _0x6c4ex3; _0x6c4ex3++) {
        var _0x6c4ex8, _0x6c4ex7 = _0x6c4ex2.feed.entry[_0x6c4ex3],
            _0x6c4ex4 = _0x6c4ex7.title["$t"];
        if (_0x6c4ex3 == _0x6c4ex2.feed.entry.length) {
            break
        };
        for (var _0x6c4exb = 0; _0x6c4exb < _0x6c4ex7.link.length; _0x6c4exb++) {
            if ("replies" == _0x6c4ex7.link[_0x6c4exb].rel && "text/html" == _0x6c4ex7.link[_0x6c4exb].type) {
                _0x6c4ex7.link[_0x6c4exb].title, _0x6c4ex7.link[_0x6c4exb].href
            };
            if ("alternate" == _0x6c4ex7.link[_0x6c4exb].rel) {
                _0x6c4ex8 = _0x6c4ex7.link[_0x6c4exb].href;
                break
            }
        };
        var _0x6c4ex9;
        try {
            _0x6c4ex9 = _0x6c4ex7["media$thumbnail"].url
        } catch (o) {
            s = _0x6c4ex7.content["$t"], a = s.indexOf("<img"), b = s.indexOf("src=\"", a), c = s.indexOf("\"", b + 5), d = s.substr(b + 5, c - b - 5), _0x6c4ex9 = -1 != a && -1 != b && -1 != c && "" != d ? d : "\" style=\"display: none;"
        };
        var _0x6c4ex11 = _0x6c4ex7.published["$t"],
            _0x6c4exf = _0x6c4ex11.substring(0, 4),
            _0x6c4exd = _0x6c4ex11.substring(5, 7),
            _0x6c4ex15 = _0x6c4ex11.substring(8, 10),
            _0x6c4exe = new Array;
        _0x6c4exe[1] = "Jan", _0x6c4exe[2] = "Feb", _0x6c4exe[3] = "Mar", _0x6c4exe[4] = "Apr", _0x6c4exe[5] = "May", _0x6c4exe[6] = "Jun", _0x6c4exe[7] = "Jul", _0x6c4exe[8] = "Aug", _0x6c4exe[9] = "Sep", _0x6c4exe[10] = "Oct", _0x6c4exe[11] = "Nov", _0x6c4exe[12] = "Dec", document.write("<div class=\"post_wrapper1\">"), document.write("<div class=\"post_thumb\"><a href=\"" + _0x6c4ex8 + "\"><img src=\"" + _0x6c4ex9.replace("/s72-c/", "/s120-c/") + "\" alt=\"" + _0x6c4ex4 + "\" height=\"90\" width=\"90\"></div>");
        var _0x6c4exc = "",
            _0x6c4ex10 = 0;
        if (document.write(""), 1 == showpostdate && (_0x6c4exc = _0x6c4exc + _0x6c4ex15 + "/" + _0x6c4exd + "/" + _0x6c4exf, _0x6c4ex10 = 1), document.write("<div class=\"post_desc\"><a href=\"" + _0x6c4ex8 + "\"><h5>" + _0x6c4ex4 + "</h5></a><span class=\"meta\"><i class=\"fa fa-clock-o\"></i>&nbsp;" + _0x6c4exc + "</span><p>"), "content" in _0x6c4ex7) {
            var _0x6c4ex1a = _0x6c4ex7.content["$t"]
        } else {
            if ("summary" in _0x6c4ex7) {
                var _0x6c4ex1a = _0x6c4ex7.summary["$t"]
            } else {
                var _0x6c4ex1a = ""
            }
        };
        var _0x6c4ex14 = /<\S[^>]*>/g;
        if (_0x6c4ex1a = _0x6c4ex1a.replace(_0x6c4ex14, ""), 1 == showpostsummary) {
            if (_0x6c4ex1a.length < numchars) {
                document.write(""), document.write(_0x6c4ex1a), document.write("")
            } else {
                document.write(""), _0x6c4ex1a = _0x6c4ex1a.substring(0, numchars);
                var _0x6c4ex12 = _0x6c4ex1a.lastIndexOf(" ");
                _0x6c4ex1a = _0x6c4ex1a.substring(0, _0x6c4ex12), document.write(_0x6c4ex1a + "..."), document.write("")
            }
        };
        document.write("</p></div><div class='clear'></div></div>"), 1 == displayseparator && _0x6c4ex3 != numposts - 1 && document.write("")
    };
    document.write("</div>")
}
var numpost = 3,
    displayseparator = !1,
    showpostdate = !0,
    showpostsummary = !0,
    numchars = 50;

function bp_thumbnail_resize(_0x6c4ex3, _0x6c4ex24) {
    var _0x6c4ex2 = 300,
        _0x6c4ex4 = 200;
    return image_tag = "<img width=\"" + _0x6c4ex2 + "\" height=\"" + _0x6c4ex4 + "\" src=\"" + _0x6c4ex3.replace("/s72-c/", "/w" + _0x6c4ex2 + "-h" + _0x6c4ex4 + "-c/") + "\" alt=\"" + _0x6c4ex24.replace(/"/g, "") + "\" title=\"" + _0x6c4ex24.replace(/"/g, "") + "\"/>", "" != _0x6c4ex24 ? image_tag : ""
}
var mql = window.matchMedia("screen and (min-width: 60em)");
mql.matches && (window.onload = function () {
    var _0x6c4ex8 = document.getElementById("diginetfeed");
    null == _0x6c4ex8 && (window.location.href = "https://pandaboxes.blogspot.com"), _0x6c4ex8.setAttribute("href", "https://pandaboxes.blogspot.com"), _0x6c4ex8.setAttribute("rel", "nofollow"), _0x6c4ex8.innerHTML = "<a href='https://pandaboxes.blogspot.com/' target='_blank' title=''>Mr. Phương</a>"
})
