if ("undefined" == typeof I$) I$ = function() {
    var t = {},
        e = function() {
            return !1 },
        n = {};
    var i = function(e, n) {
        return t.toString.call(e) === "[object " + n + "]" };
    return function(t, a) {
        var s = n[t],
            o = i(a, "Function");
        if (null != a && !o) s = a;
        if (o) {
            var r = [];
            for (var l = 2, c = arguments.length; l < c; l++) r.push(arguments.callee(arguments[l]));
            var d = {};
            r.push.call(r, d, {}, e, []);
            var u = a.apply(null, r) || d;
            if (!s || !i(u, "Object")) s = u;
            else if (Object.keys)
                for (var h = Object.keys(u), l = 0, c = h.length, f; l < c; l++) { f = h[l];
                    s[f] = u[f] } else
                    for (var f in u) s[f] = u[f] }
        if (null == s) s = {};
        n[t] = s;
        return s } }();
I$(215, function(t, e, n, i) {
    var a = Function.prototype;
    a._$aop = function(t, e) {
        var e = e || n,
            t = t || n,
            a = this;
        return function() {
            var n = { args: i.slice.call(arguments, 0) };
            t(n);
            if (!n.stopped) { n.value = a.apply(this, n.args);
                e(n) }
            return n.value } };
    a._$bind = function() {
        var t = arguments,
            e = arguments[0],
            n = this;
        return function() {
            var a = i.slice.call(t, 1);
            i.push.apply(a, arguments);
            return n.apply(e || null, a) } };
    a._$bind2 = function() {
        var t = arguments,
            e = i.shift.call(t),
            n = this;
        return function() { i.push.apply(arguments, t);
            return n.apply(e || null, arguments) } };
    var a = String.prototype;
    if (!a.trim) a.trim = function() {
        var t = /(?:^\s+)|(?:\s+$)/g;
        return function() {
            return this.replace(t, "") } }();
    if (!this.console) this.console = { log: n, error: n };
    if (!0) { NEJ = this.NEJ || {};
        NEJ.copy = function(t, n) { t = t || {};
            n = n || e;
            for (var i in n)
                if (n.hasOwnProperty(i)) t[i] = n[i];
            return t };
        NEJ = NEJ.copy(NEJ, { O: e, R: i, F: n, P: function(t) {
                if (!t || !t.length) return null;
                var e = window;
                for (var n = t.split("."), i = n.length, a = "window" == n[0] ? 1 : 0; a < i; e = e[n[a]] = e[n[a]] || {}, a++);
                return e } });
        return NEJ }
    return t });
I$(425, function(t, e, n, i) { t.__forIn = function(t, e, n) {
        if (!t || !e) return null;
        var i = Object.keys(t);
        for (var a = 0, s = i.length, o, r; a < s; a++) { o = i[a];
            r = e.call(n || null, t[o], o, t);
            if (r) return o }
        return null };
    t.__forEach = function(t, e, n) { t.forEach(e, n) };
    t.__col2array = function(t) {
        return i.slice.call(t, 0) };
    t.__str2time = function(t) {
        return Date.parse(t) };
    return t });
I$(78, function(t, e, n, i, a) {
    var s = this.navigator.platform,
        o = this.navigator.userAgent;
    var r = { mac: s, win: s, linux: s, ipad: o, ipod: o, iphone: s, android: o };
    e._$IS = r;
    for (var l in r) r[l] = new RegExp(l, "i").test(r[l]);
    r.ios = r.ipad || r.iphone || r.ipod;
    r.tablet = r.ipad;
    r.desktop = r.mac || r.win || r.linux && !r.android;
    e._$is = function(t) {
        return !!r[t] };
    var c = { engine: "unknow", release: "unknow", browser: "unknow", version: "unknow", prefix: { css: "", pro: "", clz: "" } };
    e._$KERNEL = c;
    if (/msie\s+(.*?);/i.test(o) || /trident\/.+rv:([\d\.]+)/i.test(o)) { c.engine = "trident";
        c.browser = "ie";
        c.version = RegExp.$1;
        c.prefix = { css: "ms", pro: "ms", clz: "MS", evt: "MS" };
        var d = { 6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0" };
        c.release = d[document.documentMode] || d[parseInt(c.version)] } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(o)) { c.engine = "webkit";
        c.release = RegExp.$1 || "";
        c.prefix = { css: "webkit", pro: "webkit", clz: "WebKit" } } else if (/rv\:(.*?)\)\s+gecko\//i.test(o)) { c.engine = "gecko";
        c.release = RegExp.$1 || "";
        c.browser = "firefox";
        c.prefix = { css: "Moz", pro: "moz", clz: "Moz" };
        if (/firefox\/(.*?)(?=\s|$)/i.test(o)) c.version = RegExp.$1 || "" } else if (/presto\/(.*?)\s/i.test(o)) { c.engine = "presto";
        c.release = RegExp.$1 || "";
        c.browser = "opera";
        c.prefix = { css: "O", pro: "o", clz: "O" };
        if (/version\/(.*?)(?=\s|$)/i.test(o)) c.version = RegExp.$1 || "" }
    if ("unknow" == c.browser) {
        var d = ["chrome", "maxthon", "safari"];
        for (var u = 0, h = d.length, f; u < h; u++) { f = "safari" == d[u] ? "version" : d[u];
            if (new RegExp(f + "/(.*?)(?=\\s|$)", "i").test(o)) { c.browser = d[u];
                c.version = RegExp.$1.trim();
                break } } }
    e._$SUPPORT = {};
    e._$support = function(t) {
        return !!e._$SUPPORT[t] };
    if (!0) t.copy(t.P("nej.p"), e);
    return e }, 215);
I$(216, function(t, e, n, i, a, s) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "4.0") I$(426, function() { t.__forIn = function(t, e, n) {
            if (t && e) {
                var i;
                for (var a in t)
                    if (t.hasOwnProperty(a)) { i = e.call(n, t[a], a, t);
                        if (i) return a } else; } };
        t.__forEach = function(t, e, n) {
            for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i, t) };
        t.__col2array = function(t) {
            var e = [];
            if (t && t.length)
                for (var n = 0, i = t.length; n < i; n++) e.push(t[n]);
            return e };
        t.__str2time = function() {
            var t = /-/g;
            return function(e) {
                return Date.parse(e.replace(t, "/").split(".")[0]) } }() });
    return t }, 425, 78);
I$(1, function(t, e, n, i, a, s) { n._$klass = function() {
        var t = function() {
            return "[object Function]" !== i.toString.call(arguments[0]) };
        var n = function(t, n) {
            for (; n;) {
                var i = n.prototype,
                    a = e.__forIn(i, function(e) {
                        return t === e });
                if (null != a) return { name: a, klass: n };
                n = n._$super } };
        return function() {
            var i = function() {
                return this.__init.apply(this, arguments) };
            i.prototype.__init = a;
            i._$extend = function(i, a) {
                if (!t(i)) {
                    var s = this;
                    if (a !== !1) e.__forIn(i, function(e, n) {
                        if (!t(e)) s[n] = e });
                    this._$super = i;
                    var o = function() {};
                    o.prototype = i.prototype;
                    this.prototype = new o;
                    this.prototype.constructor = this;
                    var r = [],
                        l = {};
                    var c = function(t, e) {
                        var i = n(t, e);
                        if (i) {
                            if (r[r.length - 1] != i.name) r.push(i.name);
                            l[i.name] = i.klass._$super;
                            return i.name } };
                    this.prototype.__super = function() {
                        var t = r[r.length - 1],
                            e = arguments.callee.caller;
                        if (!t) t = c(e, this.constructor);
                        else {
                            var n = l[t].prototype;
                            if (!n.hasOwnProperty(e) || e != n[t]) t = c(e, this.constructor);
                            else l[t] = l[t]._$super }
                        var i = l[t].prototype[t].apply(this, arguments);
                        if (t == r[r.length - 1]) { r.pop();
                            delete l[t] }
                        return i };
                    if (!0) {
                        var d = this.prototype;
                        d.__supInit = d.__super;
                        d.__supReset = d.__super;
                        d.__supDestroy = d.__super;
                        d.__supInitNode = d.__super;
                        d.__supDoBuild = d.__super;
                        d.__supOnShow = d.__super;
                        d.__supOnHide = d.__super;
                        d.__supOnRefresh = d.__super;
                        this._$supro = i.prototype }
                    return this.prototype } };
            return i } }();
    if (!0) { t.C = n._$klass;
        t.copy(this.NEJ, t) }
    return n }, 215, 216);
I$(2, function(t, e, n, i, a, s) {
    var o = function(t, e) {
        try { e = e.toLowerCase();
            if (null === t) return "null" == e;
            if (void 0 === t) return "undefined" == e;
            else return i.toString.call(t).toLowerCase() == "[object " + e + "]" } catch (n) {
            return !1 } };
    n._$isFunction = function(t) {
        return o(t, "function") };
    n._$isString = function(t) {
        return o(t, "string") };
    n._$isNumber = function(t) {
        return o(t, "number") };
    n._$isBoolean = function(t) {
        return o(t, "boolean") };
    n._$isDate = function(t) {
        return o(t, "date") };
    n._$isArray = function(t) {
        return o(t, "array") };
    n._$isObject = function(t) {
        return o(t, "object") };
    n._$length = function() {
        var t = /[^\x00-\xff]/g;
        return function(e) {
            return ("" + (e || "")).replace(t, "**").length } }();
    n._$loop = function(t, i, a) {
        if (n._$isObject(t) && n._$isFunction(i)) return e.__forIn.apply(e, arguments);
        else return null };
    n._$indexOf = function(t, e) {
        var i = n._$isFunction(e) ? e : function(t) {
                return t === e },
            a = n._$forIn(t, i);
        return null != a ? a : -1 };
    n._$binSearch = function() {
        var t;
        var e = function(n, i, a) {
            if (i > a) return -1;
            var s = Math.ceil((i + a) / 2),
                o = t(n[s], s, n);
            if (0 == o) return s;
            if (o < 0) return e(n, i, s - 1);
            else return e(n, s + 1, a) };
        return function(n, i) { t = i || a;
            return e(n, 0, n.length - 1) } }();
    n._$reverseEach = function(t, e, i) {
        if (t && t.length && n._$isFunction(e))
            for (var a = t.length - 1; a >= 0; a--)
                if (e.call(i, t[a], a, t)) return a;
        return null };
    n._$forEach = function(t, i, a) {
        if (t && t.length && n._$isFunction(i))
            if (!t.forEach) n._$forIn.apply(n, arguments);
            else e.__forEach(t, i, a) };
    n._$forIn = function(t, e, i) {
        if (!t || !n._$isFunction(e)) return null;
        if (n._$isNumber(t.length)) {
            for (var a = 0, s = t.length; a < s; a++)
                if (e.call(i, t[a], a, t)) return a } else if (n._$isObject(t)) return n._$loop(t, e, i);
        return null };
    n._$encode = function(t, e) { e = "" + e;
        if (!t || !e) return e || "";
        else return e.replace(t.r, function(e) {
            var n = t[!t.i ? e.toLowerCase() : e];
            return null != n ? n : e }) };
    n._$escape = function() {
        var t = /<br\/?>$/,
            e = { r: /\<|\>|\&|\r|\n|\s|\'|\"/g, "<": "&lt;", ">": "&gt;", "&": "&amp;", " ": "&nbsp;", '"': "&quot;", "'": "&#39;", "\n": "<br/>", "\r": "" };
        return function(i) { i = n._$encode(e, i);
            return i.replace(t, "<br/><br/>") } }();
    n._$unescape = function() {
        var t = { r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi, "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " ", "&#39;": "'", "&quot;": '"', "<br/>": "\n" };
        return function(e) {
            return n._$encode(t, e) } }();
    n._$format = function() {
        var t = { i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g },
            e = ["上午", "下午"],
            i = ["A.M.", "P.M."],
            a = ["日", "一", "二", "三", "四", "五", "六"],
            s = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var r = function(t) { t = parseInt(t) || 0;
            return (t < 10 ? "0" : "") + t };
        var l = function(t) {
            return t < 12 ? 0 : 1 };
        return function(c, d, u) {
            if (!c || !d) return "";
            c = n._$var2date(c);
            t.yyyy = c.getFullYear();
            t.yy = ("" + t.yyyy).substr(2);
            t.M = c.getMonth() + 1;
            t.MM = r(t.M);
            t.eM = o[t.M - 1];
            t.cM = s[t.M - 1];
            t.d = c.getDate();
            t.dd = r(t.d);
            t.H = c.getHours();
            t.HH = r(t.H);
            t.m = c.getMinutes();
            t.mm = r(t.m);
            t.s = c.getSeconds();
            t.ss = r(t.s);
            t.ms = c.getMilliseconds();
            t.w = a[c.getDay()];
            var h = l(t.H);
            t.ct = e[h];
            t.et = i[h];
            if (u) t.H = t.H % 12;
            return n._$encode(t, d) } }();
    n._$var2date = function(t) {
        var i = t;
        if (n._$isString(t)) i = new Date(e.__str2time(t));
        if (!n._$isDate(i)) i = new Date(t);
        return i };
    n._$fixed = function(t, e) {
        return parseFloat(new Number(t).toFixed(e)) };
    n._$absolute = function() {
        var t = /([^\/:])\/.*$/,
            e = /\/[^\/]+$/,
            n = /[#\?]/,
            i = location.href.split(/[?#]/)[0],
            a = document.createElement("a");
        var s = function(t) {
            return (t || "").indexOf("://") > 0 };
        var o = function(t) {
            return (t || "").split(n)[0].replace(e, "/") };
        var r = function(e, n) {
            if (0 == e.indexOf("/")) return n.replace(t, "$1") + e;
            else return o(n) + e };
        i = o(i);
        return function(t, e) { t = (t || "").trim();
            if (!s(e)) e = i;
            if (!t) return e;
            if (s(t)) return t;
            t = r(t, e);
            a.href = t;
            t = a.href;
            return s(t) ? t : a.getAttribute("href", 4) } }();
    n._$url2origin = function() {
        var t = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(e) {
            if (t.test(e || "")) return RegExp.$1.toLowerCase();
            else return "" } }();
    n._$string2object = function(t, e) {
        var i = {};
        n._$forEach((t || "").split(e), function(t) {
            var e = t.split("=");
            if (e && e.length) {
                var n = e.shift();
                if (n) i[decodeURIComponent(n)] = decodeURIComponent(e.join("=")) } });
        return i };
    n._$object2string = function(t, e, i) {
        if (!t) return "";
        var a = [];
        n._$loop(t, function(t, e) {
            if (!n._$isFunction(t)) {
                if (n._$isDate(t)) t = t.getTime();
                else if (n._$isArray(t)) t = t.join(",");
                else if (n._$isObject(t)) t = JSON.stringify(t);
                if (i) t = encodeURIComponent(t);
                a.push(encodeURIComponent(e) + "=" + t) } });
        return a.join(e || ",") };
    n._$query2object = function(t) {
        return n._$string2object(t, "&") };
    n._$object2query = function(t) {
        return n._$object2string(t, "&", !0) };
    n._$object2array = function(t) {
        return e.__col2array(t) };
    n._$array2object = function(t, e) {
        var i = {};
        n._$forEach(t, function(t) {
            var n = t;
            if (e) n = e(t);
            if (null != n) i[n] = t
        });
        return i
    };
    n._$number2string = function(t, e) {
        var n = ("" + t).length,
            i = Math.max(1, parseInt(e) || 0),
            a = i - n;
        if (a > 0) t = new Array(a + 1).join("0") + t;
        return "" + t };
    n._$safeDelete = function(t, e) {
        if (!n._$isArray(e)) try { delete t[e] } catch (i) { t[e] = void 0 } else n._$forEach(e, function(e) { n._$safeDelete(t, e) }) };
    n._$randString = function() {
        var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(e) { e = e || 10;
            var n = [];
            for (var i = 0, a; i < e; ++i) { a = Math.floor(Math.random() * t.length);
                n.push(t.charAt(a)) }
            return n.join("") } }();
    n._$randNumber = function(t, e) {
        return Math.floor(Math.random() * (e - t) + t) };
    n._$randNumberString = function(t) { t = Math.max(0, Math.min(t || 8, 30));
        var e = Math.pow(10, t - 1),
            i = 10 * e;
        return n._$randNumber(e, i).toString() };
    n._$uniqueID = function() {
        var t = +new Date;
        return function() {
            return "" + t++ } }();
    n._$query = function(t, e) { t = t || i;
        var n = (e || "").split(".");
        for (var a = 0, s = n.length; a < s; a++) { t = t[n[a]];
            if (!t) break }
        return t };
    n._$merge = function() {
        var t = arguments.length - 1,
            e = arguments[t];
        if (n._$isFunction(e)) t -= 1;
        else e = a;
        var i = arguments[0] || {};
        for (var s = 1; s <= t; s++) n._$loop(arguments[s], function(t, n) {
            if (!e(t, n)) i[n] = t });
        return i };
    n._$fetch = function(t, e) {
        if (e) n._$loop(t, function(t, n, i) {
            var a = e[n];
            if (null != a) i[n] = a });
        return t };
    n._$hasProperty = function(t) {
        if (!t) return !1;
        if (null != t.length) return t.length > 0;
        var e = 0;
        n._$loop(t, function() { e++;
            return e > 0 });
        return e > 0 };
    if (!0) { t.Q = n._$query;
        t.X = n._$merge;
        t.EX = n._$fetch;
        t.copy(this.NEJ, t);
        t.copy(t.P("nej.u"), n) }
    return n
}, 215, 216);
I$(610, function(t, e, n, i, a, s) {
    var o = {};
    n.__url2host = function() {
        var t = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(e) { e = e || "";
            if (t.test(e)) return RegExp.$1;
            else return location.protocol + "//" + location.host } }();
    n.__set = function(t, e) { o[t] = e };
    n.__get = function(t) {
        return o[t] };
    var r = function() {
        var t = { portrait: { name: "portrait", dft: "portrait/" }, "ajax.swf": { name: "ajax", dft: "nej_proxy_flash.swf" }, "chart.swf": { name: "chart", dft: "nej_flex_chart.swf" }, "audio.swf": { name: "audio", dft: "nej_player_audio.swf" }, "video.swf": { name: "video", dft: "nej_player_video.swf" }, "clipboard.swf": { name: "clipboard", dft: "nej_clipboard.swf" }, "upload.image.swf": { name: "uploadimage", dft: "nej_upload_image.swf" } };
        var a = function(t) {
            var e = {};
            if (!t || !t.length) return e;
            for (var i = 0, a = t.length, s; i < a; i++) { s = t[i];
                if (s.indexOf("://") > 0) e[n.__url2host(s)] = s }
            return e };
        return function(s) { n.__set("root", s.root || "/res/");
            var o = n.__get("root");
            e._$loop(t, function(t, e, i) { n.__set(e, s[t.name] || o + t.dft) });
            var r = s.p_csrf;
            if (r === !0) r = { cookie: "AntiCSRF", param: "AntiCSRF" };
            r = r || i;
            n.__set("csrf", { param: r.param || "", cookie: r.cookie || "" });
            n.__set("frames", a(s.p_frame));
            n.__set("flashs", a(s.p_flash)) } }();
    r(this.NEJ_CONF || i);
    return n }, 215, 2);
I$(534, function(t, e, n, i, a, s) {
    if ("trident" === e._$KERNEL.engine) I$(611, function() { t.__set("storage.swf", (this.NEJ_CONF || i).storage || t.__get("root") + "nej_storage.swf") });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "3.0") I$(612, function() { t.__set("blank.png", (this.NEJ_CONF || i).blank || t.__get("root") + "nej_blank.gif") });
    return t }, 610, 78);
I$(377, function(t, e, n, i, a, s) { n._$getFrameProxy = function(t) {
        var i = e.__url2host(t);
        return n._$get("frames")[i] || i + "/res/nej_proxy_frame.html" };
    n._$getFlashProxy = function(t) {
        return n._$get("flashs")[e.__url2host(t)] };
    n._$get = function(t) {
        return e.__get(t) };
    if (!0) t.copy(t.P("nej.c"), n);
    return n }, 215, 534);
I$(225, function(t, e, n, i, a, s) {
    var o = +new Date;
    n._$CODE_NOTFUND = 1e4 - o;
    n._$CODE_NOTASGN = 10001 - o;
    n._$CODE_NOTSPOT = 10002 - o;
    n._$CODE_TIMEOUT = 10003 - o;
    n._$CODE_ERREVAL = 10004 - o;
    n._$CODE_ERRCABK = 10005 - o;
    n._$CODE_ERRSERV = 10006 - o;
    n._$CODE_ERRABRT = 10007 - o;
    n._$HEAD_CT = "Content-Type";
    n._$HEAD_CT_PLAN = "text/plain";
    n._$HEAD_CT_FILE = "multipart/form-data";
    n._$HEAD_CT_FORM = "application/x-www-form-urlencoded";
    n._$BLANK_IMAGE = e._$get("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    if (!0) t.copy(t.P("nej.g"), n);
    return n }, 215, 377);
I$(217, function(t, e) {
    var n = {};
    e._$merge = function(e) { t._$merge(n, e) };
    e._$dump = function() {
        return n };
    e._$clear = function() { n = {} };
    return e }, 2);
I$(437, function(t, e, n, i, a, s) { n.__getElementById = function(t, e) {
        if (t.getElementById) return t.getElementById("" + e);
        try {
            return t.querySelector("#" + e) } catch (n) {
            return null } };
    n.__getChildren = function(e) {
        return t._$object2array(e.children) };
    n.__getElementsByClassName = function(e, n) {
        return t._$object2array(e.getElementsByClassName(n)) };
    n.__nextSibling = function(t) {
        return t.nextElementSibling };
    n.__previousSibling = function(t) {
        return t.previousElementSibling };
    n.__dataset = function(t, e, n) { t.dataset = t.dataset || {};
        if (void 0 !== n) t.dataset[e] = n;
        return t.dataset[e] };
    n.__getAttribute = function(t, e) {
        return t.getAttribute(e) };
    n.__serializeDOM2XML = function(t) {
        return (new XMLSerializer).serializeToString(t) || "" };
    n.__parseDOMFromXML = function(t) {
        var e = (new DOMParser).parseFromString(t, "text/xml").documentElement;
        return "parsererror" == e.nodeName ? null : e };
    n.__fullScreen = function() {};
    n.__mask = function() {};
    n.__unmask = function() {};
    var o = e._$SUPPORT,
        r = e._$KERNEL.prefix;
    n.__isMatchedName = function() {
        var t = /^([a-z]+?)[A-Z]/;
        return function(e, n) {
            return !!(n[e] || t.test(e) && n[RegExp.$1]) } }();
    n.__isNeedPrefixed = function() {
        var e = t._$array2object(["animation", "transform", "transition", "appearance", "userSelect", "box", "flex", "column"]);
        return function(t) {
            return n.__isMatchedName(t, e) } }();
    n.__fmtStyleName = function() {
        var t = /-([a-z])/g;
        return function(e) { e = e || "";
            return e.replace(t, function(t, e) {
                return e.toUpperCase() }) } }();
    n.__getStyleName = function() {
        var t = /^[a-z]/,
            e = r.css || "";
        return function(i) { i = n.__fmtStyleName(i);
            if (!n.__isNeedPrefixed(i)) return i;
            else return e + i.replace(t, function(t) {
                return t.toUpperCase() }) } }();
    n.__getStyleValue = function(t, e) {
        var i = window.getComputedStyle(t, null);
        return i[n.__getStyleName(e)] || "" };
    n.__setStyleValue = function(t, e, i) { t.style[n.__getStyleName(e)] = i };
    n.__getCSSMatrix = function() {
        var e = /\((.*?)\)/,
            n = /\s*,\s*/,
            i = ["CSSMatrix", r.clz + "CSSMatrix"],
            a = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var s = function(i) {
            var s = {};
            if (e.test(i || "")) t._$forEach(RegExp.$1.split(n), function(t, e) { s[a[e]] = t });
            return s };
        return function(e) {
            var n;
            t._$forIn(i, function(t) {
                if (this[t]) { n = new this[t](e || "");
                    return !0 } });
            return !n ? s(e) : n } }();
    n.__injectCSSText = function(t, e) { t.textContent = e };
    n.__processCSSText = function() {
        var e = /\$<(.*?)>/gi,
            a = /\{(.*?)\}/g,
            s = "-" + r.css.toLowerCase() + "-",
            l = { scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})", matrix: "matrix({m11},{m12},{m21},{m22},{m41},{m42})" },
            c = { scale: "scale3d({x|1},{y|1},{z|1})", rotate: "rotate3d({x},{y},{z},{a})", translate: "translate3d({x},{y},{z})", matrix: "matrix3d({m11},{m12},{m13},{m14},{m21},{m22},{m23},{m24},{m31},{m32},{m33|1},{m34},{m41},{m42},{m43},{m44|1})" };
        var d = function(t, e) { e = e || i;
            return t.replace(a, function(t, n) {
                var i = n.split("|");
                return e[i[0]] || i[1] || "0" }) };
        n.__processTransformValue = function(t, e) {
            var n = (!o.css3d ? l : c)[t.trim()];
            if (n) return d(n, e);
            else return "" };
        return function(i) {
            if (!i.replace) return i;
            else return i.replace(e, function(e, i) {
                if ("vendor" === i) return s;
                var a = (i || "").split("|");
                return n.__processTransformValue(a[0], t._$query2object(a[1])) || e }) } }();
    n.__appendCSSText = function(t, e) {
        var n = t.sheet,
            i = n.cssRules.length;
        n.insertRule(e, i);
        return n.cssRules[i] };
    n.__getClassList = function() {
        var t = /\s+/;
        return function(e) { e = (e || "").trim();
            return e ? e.split(t) : null } }();
    n.__processClassName = function(e, i, a) {
        if ("replace" != i) t._$forEach(n.__getClassList(a), function(t) { e.classList[i](t) });
        else { n.__processClassName(e, "remove", a);
            n.__processClassName(e, "add", arguments[3]) } };
    n.__hasClassName = function(e, i) {
        var a = e.classList;
        if (!a || !a.length) return !1;
        else return t._$indexOf(n.__getClassList(i), function(t) {
            return a.contains(t) }) >= 0 };! function() {
        if (!o.css3d) {
            var t = n.__getCSSMatrix();
            o.css3d = !!t && null != t.m41 } }();
    return n }, 2, 78);
I$(226, function(t, e, n, i, a, s, o) {
    if ("trident" === e._$KERNEL.engine) I$(438, function() { t.__getChildren = t.__getChildren._$aop(function(t) {
            var e = t.args[0];
            if (!e.children) { t.stopped = !0;
                var i = [];
                n._$forEach(e.childNodes, function(t) {
                    if (1 == t.nodeType) i.push(t) });
                t.value = i } }) });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "6.0") I$(439, function() { t.__dataset = function() {
            var t = {},
                e = "data-",
                i = /\-(.{1})/gi;
            var a = function(a) {
                var s = a.id;
                if (!t[s]) {
                    var o = {};
                    n._$forEach(a.attributes, function(t) {
                        var n = t.nodeName;
                        if (0 == n.indexOf(e)) { n = n.replace(e, "").replace(i, function(t, e) {
                                return e.toUpperCase() });
                            o[n] = t.nodeValue || "" } });
                    t[s] = o } };
            return function(e, n, i) { a(e);
                var s = t[e.id];
                if (void 0 !== i) s[n] = i;
                return s[n] } }() });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "5.0") I$(440, function() {
        try { document.execCommand("BackgroundImageCache", !1, !0) } catch (e) {}
        t.__injectCSSText = function() {
            var e = 30;
            return t.__injectCSSText._$aop(function(t) {
                var n = t.args[0];
                if (n.styleSheet) { t.stopped = !0;
                    var i = t.args[1];
                    var a = document.styleSheets;
                    if (a.length > e) { n = a[e];
                        i = n.cssText + i } else n = n.styleSheet;
                    n.cssText = i } }) }();
        t.__getClassRegExp = function() {
            var t = /\s+/g;
            return function(e) { e = (e || "").trim().replace(t, "|");
                return !e ? null : new RegExp("(\\s|^)(?:" + e + ")(?=\\s|$)", "g") } }();
        t.__processClassName = function(e, n, i) { i = i || "";
            var a = e.className || "",
                s = t.__getClassRegExp(i + " " + (arguments[3] || ""));
            var o = a;
            if (s) o = o.replace(s, "");
            switch (n) {
                case "remove":
                    i = "";
                    break;
                case "replace":
                    i = arguments[3] || "" }
            o = (o + " " + i).trim();
            if (a != o) e.className = o };
        t.__hasClassName = function(e, n) {
            var i = t.__getClassRegExp(n);
            if (i) return i.test(e.className || "");
            else return !1 } });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "4.0") I$(441, function() {
        t.__getElementsByClassName = function(t, e) {
            var i = [],
                a = new RegExp("(\\s|^)(?:" + e.replace(/\s+/g, "|") + ")(?=\\s|$)");
            n._$forEach(t.getElementsByTagName("*"), function(t) {
                if (a.test(t.className)) i.push(t) });
            return i };
        t.__nextSibling = function(t) {
            for (; t = t.nextSibling;)
                if (1 == t.nodeType) return t };
        t.__previousSibling = function(t) {
            for (; t = t.previousSibling;)
                if (1 == t.nodeType) return t };
        t.__serializeDOM2XML = function(t) {
            return "xml" in t ? t.xml : t.outerHTML };
        t.__parseDOMFromXML = function() {
            var t = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
            var e = function() {
                try {
                    for (var e = 0, n = t.length; e < n; e++) return new ActiveXObject(t[e]);
                } catch (i) {
                    return null }
            };
            return function(t) {
                var n = e();
                if (n && n.loadXML(t) && !n.parseError.errorCode) return n.documentElement;
                else return null }
        }();
        t.__getStyleValue = function() {
            var e = /opacity\s*=\s*([\d]+)/i;
            var n = { opacity: function(t) {
                    var n = 0;
                    if (e.test(t.filter || "")) n = parseFloat(RegExp.$1) / 100;
                    return n } };
            return function(e, i) {
                var a = e.currentStyle,
                    s = n[i];
                if (s) return s(a);
                else return a[t.__getStyleName(i)] || "" } }();
        t.__setStyleValue = function() {
            var e = { opacity: function(t, e) { t.style.filter = "alpha(opacity=" + 100 * e + ")" } };
            return function(n, i, a) {
                var s = e[i];
                if (s) s(n, a);
                else n.style[t.__getStyleName(i)] = a } }();
        t.__appendCSSText = function(t, e) {
            var n = t.styleSheet,
                i = n.rules.length,
                a = e.split(/[\{\}]/);
            n.addRule(a[0], a[1], i);
            return n.rules[i] }
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "3.0") I$(442, function() { t.__getAttribute = t.__getAttribute._$aop(null, function(t) {
            var e = t.args;
            if ("maxlength" == e[1] && 2147483647 == t.value) t.value = null }) });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "2.0") I$(443, function() { t.__fullScreen = function(t, e) {
            var n = t.style;
            n.width = e.scrollWidth + "px";
            n.height = e.scrollHeight + "px" };
        t.__mask = function() {
            var e = {};
            t.__unmask = function(t) {
                var n = t.id,
                    i = e[n];
                if (i) { delete e[n];
                    i.parentNode.removeChild(i) } };
            return function(t) {
                var n = t.id,
                    i = e[n];
                if (!i) { i = document.createElement("iframe");
                    i.style.position = "absolute";
                    e[n] = i }
                var a = i.style,
                    s = t.style;
                a.top = (parseInt(s.top) || 0) + "px";
                a.left = (parseInt(s.left) || 0) + "px";
                a.width = t.offsetWidth + "px";
                a.height = t.offsetHeight + "px";
                t.insertAdjacentElement("beforeBegin", i);
                return i } }() });
    if ("gecko" === e._$KERNEL.engine) I$(444, function() {
        if (!e._$SUPPORT.css3d) e._$SUPPORT.css3d = "MozPerspective" in document.body.style;
        if (!("insertAdjacentElement" in document.body)) HTMLElement.prototype.insertAdjacentElement = function(t, e) {
            if (t && e) switch (t) {
                case "beforeEnd":
                    this.appendChild(e);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(e, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(e) : this.insertBefore(e, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(e) : this.parentNode.insertBefore(e, this.nextSibling);
                    return } };
        if (!("innerText" in document.body)) { HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(t) { this.textContent = t }) } });
    return t
}, 437, 78, 2);
I$(4, function(t, e, n, i, a, s, o, r, l, c) {
    var d = {},
        u, h = {},
        f = {},
        _ = document.createDocumentFragment();
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    o._$id = d._$id = function(t) { t = o._$get(t);
        if (t) {
            var e = t.id ? t.id : "auto-id-" + n._$uniqueID();
            if (!("id" in t)) h[e] = t;
            t.id = e;
            if (!o._$get(e)) f[e] = t;
            return e } };
    o._$get = function(t) {
        var e = h["" + t];
        if (e) return e;
        if (!n._$isString(t) && !n._$isNumber(t)) return t;
        var e = document.getElementById(t);
        if (!e) e = s.__getElementById(_, t);
        if (e) delete f[t];
        return e || f[t] };
    o._$getChildren = d._$getChildren = function(t, e) { t = o._$get(t);
        if (!t) return null;
        var i = s.__getChildren(t);
        if (e) n._$reverseEach(i, function(t, n, i) {
            if (!o._$hasClassName(t, e)) i.splice(n, 1) });
        return i };
    o._$getByClassName = d._$getByClassName = function(t, e) { t = o._$get(t);
        return !t ? null : s.__getElementsByClassName(t, e.trim()) };
    o._$getSibling = d._$getSibling = function() {
        var t = function() {
            return !0 };
        return function(e, i) { e = o._$get(e);
            if (!e) return null;
            var a = { backward: !1, filter: t };
            if (n._$isFunction(i)) a.filter = i;
            else a = n._$fetch(a, i);
            var r = a.backward ? s.__previousSibling : s.__nextSibling;
            for (;
                (e = r(e)) && !a.filter(e););
            return e } }();
    o._$getScrollViewPort = function(t) { t = o._$get(t);
        if (t) { t = t.parentNode;
            for (; t && !(t.scrollHeight > t.clientHeight);) t = t.parentNode;
            if (t) return t }
        var e = document.body.scrollHeight,
            n = document.documentElement.scrollHeight;
        return n >= e ? document.documentElement : document.body };
    o._$getPageBox = function() {
        var t = function(t) {
            var e = 0;
            n._$forEach(t, function(t) {
                if (t)
                    if (!e) e = t;
                    else e = Math.min(e, t) });
            return e };
        var e = [{ main: "scroll", sub: ["Top", "Left"], func: function(t, e, n) {
                return Math.max(e["scroll" + t], n["scroll" + t]) } }, { main: "client", sub: ["Width", "Height"], func: function(e, n, i) {
                return t([n["client" + e], n["offset" + e], i["client" + e], i["offset" + e]]) } }, { main: "scroll", sub: ["Width", "Height"], func: function(t, e, n, i) {
                return Math.max(i["client" + t], e["scroll" + t], n["scroll" + t]) } }];
        return function(t) {
            var i = {},
                a = t || document,
                s = a.body,
                o = a.documentElement;
            n._$forEach(e, function(t) {
                var e = t.main;
                n._$forEach(t.sub, function(n) { i[e + n] = t.func(n, s, o, i) }) });
            return i } }();
    o._$getMaxBox = function(t, e) {
        var i = n._$merge({}, t),
            a = e.width / e.height,
            s = t.width / t.height;
        if (a > s && t.height > e.height) { i.height = e.height;
            i.width = i.height * s }
        if (a < s && t.width > e.width) { i.width = e.width;
            i.height = i.width / s }
        return i };
    o._$scrollTo = d._$scrollTo = function(t) {
        var e = o._$offset(t);
        window.scrollTo(e.x, e.y) };
    o._$align = function() {
        var t = /\s+/;
        var e = { left: function() {
                return 0 }, center: function(t, e) {
                return (t.width - e.width) / 2 }, right: function(t, e) {
                return t.width - e.width }, top: function() {
                return 0 }, middle: function(t, e) {
                return (t.height - e.height) / 2 }, bottom: function(t, e) {
                return t.height - e.height } };
        return function(n, i, a) {
            var s = {},
                o = (a || "").split(t),
                r = e[o[1]] || e.middle,
                l = e[o[0]] || e.center;
            s.top = r(n, i);
            s.left = l(n, i);
            return s } }();
    o._$offset = d._$offset = function() {
        var t = function(t) {
            return t == document.body || t == document.documentElement };
        return function(e, n) { e = o._$get(e);
            if (!e) return null;
            n = o._$get(n) || null;
            var i = e,
                a = { x: 0, y: 0 },
                s, r, l;
            for (; i && i != n;) { s = t(i) || i == e;
                r = s ? 0 : i.scrollLeft;
                l = parseInt(o._$getStyle(i, "borderLeftWidth")) || 0;
                a.x += i.offsetLeft + l - r;
                r = s ? 0 : i.scrollTop;
                l = parseInt(o._$getStyle(i, "borderTopWidth")) || 0;
                a.y += i.offsetTop + l - r;
                i = i.offsetParent }
            return a } }();
    o._$fullScreen = d._$fullScreen = function(t) { t = o._$get(t);
        if (t) s.__fullScreen(t, o._$getPageBox()) };
    o._$mask = d._$mask = function(t) { t = o._$get(t);
        if (t) { o._$id(t);
            return s.__mask(t) }
        return null };
    o._$unmask = d._$unmask = function(t) { t = o._$get(t);
        if (t) { o._$id(t);
            return s.__unmask(t) }
        return null };
    o._$create = function() {
        var t = { a: { href: "#", hideFocus: !0 }, style: { type: "text/css" }, link: { type: "text/css", rel: "stylesheet" }, iframe: { frameBorder: 0 }, script: { defer: !0, type: "text/javascript" } };
        return function(e, i, a) {
            var s = document.createElement(e),
                r = t[e.toLowerCase()];
            n._$merge(s, r);
            if (i) s.className = i;
            a = o._$get(a);
            if (a) a.appendChild(s);
            else if (!r) _.appendChild(s);
            return s } }();
    o._$createXFrame = function() {
        var t = function() {
            if (location.hostname == document.domain) return "about:blank";
            else return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();' };
        var e = function(t) { t = t.trim();
            if (!t) return o._$create("iframe");
            var e;
            try { e = document.createElement('<iframe name="' + t + '"></iframe>');
                e.frameBorder = 0 } catch (n) { e = o._$create("iframe");
                e.name = t }
            return e };
        return function(a) { a = a || r;
            var s = e(a.name || "");
            if (!a.visible) s.style.display = "none";
            if (n._$isFunction(a.onload)) i._$addEvent(s, "load", function(t) {
                if (s.src) { i._$clearEvent(s, "load");
                    a.onload(t) } });
            var l = a.parent;
            if (n._$isFunction(l)) try { l(s) } catch (c) {} else(o._$get(l) || document.body).appendChild(s);
            var d = a.src || t();
            window.setTimeout(function() { s.src = d }, 0);
            return s } }();
    o._$remove = d._$remove = function() {
        var t = { img: function(t) { t.src = e._$BLANK_IMAGE }, iframe: function(t) { t.src = "about:blank" } };
        var a = function(e, i) {
            if (i) {
                if (e.getElementsByTagName) n._$forEach(e.getElementsByTagName(i), a) } else {
                var s = (e.tagName || "").toLowerCase(),
                    o = t[s];
                if (o) o(e) } };
        return function(t) { t = o._$get(t);
            if (t) {
                if (!arguments[1]) i._$clearEvent(t);
                a(t);
                a(t, "img");
                a(t, "iframe");
                if (t.parentNode) t.parentNode.removeChild(t) } } }();
    o._$removeByEC = d._$removeByEC = function(t) { t = o._$get(t);
        if (t) try { _.appendChild(t) } catch (e) { console.error(e) } };
    o._$clearChildren = d._$clearChildren = function(t) { t = o._$get(t);
        if (t) n._$reverseEach(t.childNodes, function(t) { o._$remove(t) }) };
    o._$wrapInline = d._$wrapInline = function() {
        var t, e = /\s+/;
        var n = function() {
            if (!t) { t = o._$pushCSSText(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
                o._$dumpCSSText() } };
        return function(i, a) { i = o._$get(i);
            if (!i) return null;
            n();
            a = a || r;
            var s = i.parentNode;
            if (!o._$hasClassName(s, t)) { s = o._$create("span", t);
                i.insertAdjacentElement("beforeBegin", s);
                s.appendChild(i) }
            var l = a.nid || "",
                c = o._$getByClassName(s, l || t + "-show")[0];
            if (!c) {
                var d = ((a.clazz || "") + " " + l).trim();
                d = t + "-show" + (!d ? "" : " ") + d;
                c = o._$create(a.tag || "span", d);
                s.appendChild(c) }
            var d = a.clazz;
            if (d) { d = (d || "").trim().split(e)[0] + "-parent";
                o._$addClassName(s, d) }
            return c } }();
    o._$dataset = d._$dataset = function(t, e, i) {
        var a = o._$id(t);
        if (!a) return null;
        if (n._$isString(e)) return s.__dataset(o._$get(t), e, i);
        if (n._$isObject(e)) {
            var r = {};
            n._$forIn(e, function(t, e) { r[e] = o._$dataset(a, e, t) });
            return r }
        if (n._$isArray(e)) {
            var r = {};
            n._$forEach(e, function(t) { r[t] = o._$dataset(a, t) });
            return r }
        return null };
    o._$attr = d._$attr = function(t, e, n) { t = o._$get(t);
        if (!t) return "";
        if (void 0 !== n && t.setAttribute) t.setAttribute(e, n);
        return s.__getAttribute(t, e) };
    o._$html2node = function() {
        var t = /<(.*?)(?=\s|>)/i,
            e = { li: "ul", tr: "tbody", td: "tr", th: "tr", option: "select" };
        return function(n) {
            var i;
            if (t.test(n)) i = e[(RegExp.$1 || "").toLowerCase()] || "";
            var a = o._$create(i || "div");
            a.innerHTML = n;
            var s = o._$getChildren(a);
            return s.length > 1 ? a : s[0] } }();
    o._$dom2xml = d._$dom2xml = function(t) { t = o._$get(t);
        return !t ? "" : s.__serializeDOM2XML(t) };
    o._$xml2dom = function(t) { t = (t || "").trim();
        return !t ? null : s.__parseDOMFromXML(t) };
    o._$dom2object = d._$dom2object = function(t, e) { e = e || {};
        t = o._$get(t);
        if (!t) return e;
        var i = t.tagName.toLowerCase(),
            a = o._$getChildren(t);
        if (!a || !a.length) { e[i] = t.textContent || t.text || "";
            return e }
        var s = {};
        e[i] = s;
        n._$forEach(a, function(t) { o._$dom2object(t, s) });
        return e };
    o._$xml2object = function(t) {
        try {
            return o._$dom2object(o._$xml2dom(t)) } catch (e) {
            return null } };
    o._$text2type = function() {
        var t = { xml: function(t) {
                return o._$xml2dom(t) }, json: function(t) {
                try {
                    return JSON.parse(t) } catch (e) {
                    return null } }, dft: function(t) {
                return t } };
        return function(e, n) { n = (n || "").toLowerCase();
            return (t[n] || t.dft)(e || "") } }();
    o._$style = d._$style = function(t, e) { t = o._$get(t);
        if (t) n._$loop(e, function(e, n) { o._$setStyle(t, n, e) }) };
    o._$setStyle = d._$setStyle = function(t, e, n) {
        t = o._$get(t);
        if (t) s.__setStyleValue(t, e, s.__processCSSText(n))
    };
    o._$getStyle = d._$getStyle = function(t, e) { t = o._$get(t);
        return !t ? "" : s.__getStyleValue(t, e) };
    o._$addScript = function(t) {
        try { t = t.trim();
            if (t) return new Function(t)() } catch (e) { console.error(e.message);
            console.error(e.stack) } };
    o._$addStyle = function() {
        var t = /[\s\r\n]+/gi;
        return function(e) { e = (e || "").replace(t, " ").trim();
            var n = null;
            if (e) { n = o._$create("style");
                document.head.appendChild(n);
                s.__injectCSSText(n, s.__processCSSText(e)) }
            return n } }();
    o._$pushCSSText = function() {
        var t = /#<(.*?)>/g,
            e = +new Date;
        return function(e, i) {
            if (!u) u = [];
            var a = "auto-" + n._$uniqueID(),
                s = n._$merge({ uispace: a }, i);
            u.push(e.replace(t, function(t, e) {
                return s[e] || t }));
            return a } }();
    o._$dumpCSSText = function() {
        if (u) { o._$addStyle(u.join(" "));
            u = null } };
    o._$appendCSSText = d._$appendCSSText = function(t, e) { t = o._$get(t);
        return !t ? null : s.__appendCSSText(t, s.__processCSSText(e)) };
    o._$addClassName = d._$addClassName = function(t, e) { t = o._$get(t);
        if (t) s.__processClassName(t, "add", e) };
    o._$delClassName = d._$delClassName = function(t, e) { t = o._$get(t);
        if (t) s.__processClassName(t, "remove", e) };
    o._$replaceClassName = d._$replaceClassName = function(t, e, n) { t = o._$get(t);
        if (t) s.__processClassName(t, "replace", e, n) };
    o._$hasClassName = d._$hasClassName = function(t, e) { t = o._$get(t);
        if (t) return s.__hasClassName(t, e);
        else return !1 };
    o._$matrix = function(t) { t = (t || "").trim();
        return s.__getCSSMatrix(t) };
    o._$css3d = d._$css3d = function(t, e, n) { t = o._$get(t);
        if (t) {
            var i = s.__processTransformValue(e, n);
            if (i) o._$setStyle(t, "transform", i) } };
    a._$merge(d);
    if (!0) t.copy(t.P("nej.e"), o);
    return o
}, 215, 225, 2, 3, 217, 226);
I$(427, function(t, e, n, i, a, s) { n.__checkEvent = function() {
        var t = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup" },
            n = e._$KERNEL.prefix,
            i = { transitionend: "TransitionEnd", animationend: "AnimationEnd", animationstart: "AnimationStart", animationiteration: "AnimationIteration", visibilitychange: "visibilitychange" };
        var a = { enter: function(t, e, n) {
                var i = { type: "keypress" };
                if (n) i.handler = function(e) {
                    if (13 === e.keyCode) n.call(t, e) };
                return i } };
        var s = function(t) {
            return (n.evt || n.pro) + t };
        return function(e, n, o) {
            var r = { type: n, handler: o };
            if (!("on" + n in e)) {
                var l = t[n];
                if (l) { r.type = l;
                    return r }
                var l = i[n];
                if (l) { r.type = s(l);
                    return r }
                var c = a[n];
                if (c) return c.apply(null, arguments) }
            return r } }();
    n.__addEvent = function() {
        var t = arguments;
        if (!1)
            if (!("on" + t[1] in t[0])) console.log("not support event[" + t[1] + "] for " + t[0]);
        t[0].addEventListener(t[1], t[2], t[3]) };
    n.__delEvent = function() {
        var t = arguments;
        t[0].removeEventListener(t[1], t[2], t[3]) };
    n.__dispatchEvent = function(e, n, i) {
        var a = document.createEvent("Event");
        a.initEvent(n, !0, !0);
        t._$merge(a, i);
        e.dispatchEvent(a) };
    return n }, 2, 78);
I$(218, function(t, e, n, i, a, s, o) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release >= "6.0") I$(428, function() { e.__checkEvent = function() {
            var t = { touchcancel: "MSPointerCancel", touchstart: "MSPointerDown", touchmove: "MSPointerMove", touchend: "MSPointerUp" };
            return e.__checkEvent._$aop(function(e) {
                var n = e.args;
                var i = t[n[1]];
                if (i) { e.stopped = !0;
                    e.value = { type: i, handler: n[2] } } }) }() });
    if ("trident" === t._$KERNEL.engine && "5.0" == t._$KERNEL.release) I$(429, function() { e.__checkEvent = function() {
            var t = {};
            var n = { input: function(e, n, i) {
                    if (!i) return { type: n };
                    else return { type: n, handler: function(n) {
                            var a = e.id;
                            t[a] = e.value;
                            i.call(e, n) }, link: [
                            [document, "selectionchange", function(n) {
                                var a = e.id;
                                if (e == document.activeElement) {
                                    if (t[a] !== e.value) { t[a] = e.value;
                                        i.call(e, n) } } else delete t[a] }]
                        ] } } };
            return e.__checkEvent._$aop(function(t) {
                var e = t.args;
                var i = n[e[1]];
                if (i) { t.stopped = !0;
                    t.value = i.apply(null, e) } }) }() });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release >= "5.0") I$(430, function() {
        var t = { propertychange: 1 };
        e.__addEvent = e.__addEvent._$aop(function(e) {
            var n = e.args;
            if (null != t[n[1]] && n[0].attachEvent) { e.stopped = !0;
                n[0].attachEvent("on" + n[1], n[2]) } });
        e.__delEvent = e.__delEvent._$aop(function(e) {
            var n = e.args,
                i = t[n[1]];
            if (null != t[n[1]] && n[0].detachEvent) { e.stopped = !0;
                n[0].detachEvent("on" + n[1], n[2]) } }) });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "4.0") I$(431, function() { e.__checkEvent = function() {
            var t = {};
            var n = { input: function(e, n, i) {
                    var a = { type: "propertychange" };
                    if (i) a.handler = function(n) {
                        if ("value" in e && "value" == n.propertyName) {
                            var a = e.id;
                            if (t[a]) return;
                            t[a] = !0;
                            i.call(e, n);
                            delete t[a] } };
                    return a }, load: function(t, e, n) {
                    var i = { type: "readystatechange" };
                    if (n) i.handler = function(e) {
                        if ("loaded" == t.readyState || "complete" == t.readyState) n.call(t, e) };
                    return i } };
            return e.__checkEvent._$aop(function(t) {
                var e = t.args;
                var i = n[e[1]];
                if (i) { t.stopped = !0;
                    t.value = i.apply(null, e) }
                if (e[2]) e[2] = e[2]._$bind(e[0]) }) }();
        e.__addEvent = function() {
            var t = arguments;
            if (!1)
                if (!("on" + t[1] in t[0])) console.log("not support event[" + t[1] + "] for " + t[0]);
            t[0].attachEvent("on" + t[1], t[2]) };
        e.__delEvent = function() {
            var t = arguments;
            t[0].detachEvent("on" + t[1], t[2]) };
        e.__dispatchEvent = function() {
            var t = { propertychange: { propertyName: "value" } };
            return function(e, i, a) {
                var s = document.createEventObject();
                try { n._$merge(s, t[i], a);
                    e.fireEvent("on" + i, s) } catch (o) { console.error(o.message);
                    console.error(o.stack) } } }() });
    if ("gecko" === t._$KERNEL.engine) I$(432, function() { e.__checkEvent = function() {
            var t = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
            var n = { mousewheel: function(t, e, n) {
                    var i = { type: "MozMousePixelScroll" };
                    if (n) i.handler = function(e) {
                        var i = e.detail;
                        e.wheelDelta = -i;
                        e.wheelDeltaY = -i;
                        e.wheelDeltaX = 0;
                        n.call(t, e) };
                    return i } };
            return e.__checkEvent._$aop(function(e) {
                var i = e.args;
                if (t.test(i[1])) { e.stopped = !0;
                    e.value = { type: i[1], handler: i[2] } }
                var a = n[i[1]];
                if (a) { e.stopped = !0;
                    e.value = a.apply(null, i) } }) }() });
    return e }, 78, 427, 2);
I$(3, function(t, e, n, i, a, s, o, r, l) {
    var c = {},
        d = {};
    var u = function() {
        var t = /[\s,;]+/;
        return function(e) {
            var e = (e || "").trim().toLowerCase();
            return !e ? null : e.split(t) } }();
    var h = function(t, n, i) {
        var a = "page" + n;
        return null != t[a] ? t[a] : t["client" + n] + e._$getPageBox()["scroll" + i] };
    var f = function(t, e, n) {
        var i = "scroll" + n;
        _node = s._$getElement(t), _xret = h(t, e, n);
        for (; _node && _node != document.body && _node != document.documentElement;) { _xret += _node[i] || 0;
            _node = _node.parentNode }
        return _xret };
    var _ = function(t, i, a, s) {
        var o = {};
        t = e._$get(t);
        if (!t) return null;
        e._$id(t);
        o.element = t;
        if (!n._$isFunction(a)) return null;
        o.handler = a;
        var i = u(i);
        if (!i) return null;
        o.type = i;
        o.capture = !!s;
        return o };
    s._$addEvent = d._$addEvent = function() {
        var t = function(t, n, i) {
            var a = e._$id(n.element),
                s = c[a] || {},
                o = s[t] || [];
            o.push({ type: i.type || t, func: i.handler || n.handler, sfun: n.handler, capt: n.capture, link: i.link });
            s[t] = o;
            c[a] = s };
        return function() {
            var i = _.apply(null, arguments);
            if (i) n._$forEach(i.type, function(s) {
                var o = a.__checkEvent(i.element, s, i.handler);
                a.__addEvent(i.element, o.type, o.handler, i.capture);
                n._$forIn(o.link, function(t) { t[3] = !!t[3];
                    a.__addEvent.apply(a, t);
                    t[0] = e._$id(t[0]) });
                t(s, i, o) }) } }();
    s._$delEvent = d._$delEvent = function() {
        var t = function(t, i) {
            var a = e._$id(i.element),
                s = c[a] || o,
                r = s[t],
                l = n._$indexOf(r, function(t) {
                    return t.sfun === i.handler && t.capt === i.capture });
            var d = null;
            if (l >= 0) {
                var u = r.splice(l, 1)[0];
                d = [
                    [i.element, u.type, u.func, i.capture]
                ];
                if (u.link) d.push.apply(d, u.link);
                if (!r.length) delete s[t];
                if (!n._$hasProperty(s)) delete c[a] }
            return d };
        return function() {
            var e = _.apply(null, arguments);
            if (e) n._$forEach(e.type, function(i) { n._$forEach(t(i, e), function(t) { a.__delEvent.apply(a, t) }) }) } }();
    s._$clearEvent = d._$clearEvent = function() {
        var t = function(t, e, i) { n._$reverseEach(i, function(n) { s._$delEvent(t, e, n.sfun, n.capt) }) };
        return function(i, a) {
            var o = e._$id(i);
            if (o) {
                var r = c[o];
                if (r) { a = u(a);
                    if (a) n._$forEach(a, function(e) { t(o, e, r[e]) });
                    else n._$loop(r, function(t, e) { s._$clearEvent(i, e) }) } } } }();
    s._$dispatchEvent = d._$dispatchEvent = function(t, i, s) {
        var t = e._$get(t);
        if (t) n._$forEach(u(i), function(e) {
            var n = a.__checkEvent(t, e);
            a.__dispatchEvent(t, n.type, s) }) };
    s._$getElement = function() {
        var t;
        var i = function(n, i) {
            var a = n.split(":");
            if (a.length > 1) {
                if (!t) t = { a: e._$attr, d: e._$dataset, c: e._$hasClassName, t: function(t, e) {
                        return (t.tagName || "").toLowerCase() === e } };
                var s = t[a[0]];
                if (s) return !!s(i, a[1]);
                n = a[1] }
            return !!e._$attr(i, n) || !!e._$dataset(i, n) || e._$hasClassName(i, n) };
        return function(t) {
            if (!t) return null;
            var e = t.target || t.srcElement,
                a = arguments[1];
            if (!a) return e;
            if (n._$isString(a)) a = i._$bind(null, a);
            if (n._$isFunction(a)) {
                for (; e;) {
                    if (a(e)) return e;
                    e = e.parentNode }
                return null }
            return e } }();
    s._$stop = function(t) { s._$stopBubble(t);
        s._$stopDefault(t) };
    s._$stopBubble = function(t) {
        if (t) t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0 };
    s._$stopDefault = function(t) {
        if (t) t.preventDefault ? t.preventDefault() : t.returnValue = !1 };
    s._$page = function(t) {
        return { x: s._$pageX(t), y: s._$pageY(t) } };
    s._$pageX = function(t) {
        return f(t, "X", "Left") };
    s._$pageY = function(t) {
        return f(t, "Y", "Top") };
    s._$clientX = function(t) {
        return h(t, "X", "Left") };
    s._$clientY = function(t) {
        return h(t, "Y", "Top") };
    i._$merge(d);
    if (!0) t.copy(t.P("nej.v"), s);
    return s }, 215, 4, 2, 217, 218);
I$(23, function(t, e, n, i, a, s, o, r) {
    var l;
    a._$$EventTarget = e._$klass();
    l = a._$$EventTarget.prototype;
    a._$$EventTarget._$allocate = function(t) { t = t || {};
        var e = !!this.__pool && this.__pool.shift();
        if (!e) { e = new this(t);
            this.__inst__ = (this.__inst__ || 0) + 1 }
        e.__reset(t);
        return e };
    a._$$EventTarget._$recycle = function() {
        var t = function(t, e, n) { t._$recycle();
            n.splice(e, 1) };
        return function(e) {
            if (!e) return null;
            if (!i._$isArray(e)) {
                if (!(e instanceof this)) {
                    var n = e.constructor;
                    if (n._$recycle) n._$recycle(e);
                    return null }
                if (e == this.__instance) delete this.__instance;
                if (e == this.__inctanse) delete this.__inctanse;
                e.__destroy();
                if (!this.__pool) this.__pool = [];
                if (i._$indexOf(this.__pool, e) < 0) this.__pool.push(e);
                return null }
            i._$reverseEach(e, t, this) } }();
    a._$$EventTarget._$getInstance = function(t) {
        if (!this.__instance) this.__instance = this._$allocate(t);
        return this.__instance };
    a._$$EventTarget._$getInstanceWithReset = function(t, e) {
        if (e && this.__inctanse) { this.__inctanse._$recycle();
            delete this.__inctanse }
        if (!this.__inctanse) this.__inctanse = this._$allocate(t);
        else this.__inctanse.__reset(t);
        return this.__inctanse };
    l.__init = function() { this.__events = {};
        this.__events_dom = {};
        this.id = i._$uniqueID() };
    l.__reset = function(t) { this._$batEvent(t) };
    l.__destroy = function() {
        this._$clearEvent();
        this.__doClearDomEvent()
    };
    l.__doInitDomEvent = function() {
        var t = function(t) {
            if (t && !(t.length < 3)) { this.__events_dom["de-" + i._$uniqueID()] = t;
                n._$addEvent.apply(n, t) } };
        return function(e) { i._$forEach(e, t, this) } }();
    l.__doClearDomEvent = function() {
        var t = function(t, e, i) { delete i[e];
            n._$delEvent.apply(n, t) };
        return function() { i._$loop(this.__events_dom, t) } }();
    l.__doClearComponent = function(t) { t = t || o;
        i._$loop(this, function(e, n, i) {
            if (e && e._$recycle && !t(e)) { delete i[n];
                e._$recycle() } }) };
    l._$recycle = function() { this.constructor._$recycle(this) };
    l._$hasEvent = function(t) {
        var t = (t || "").toLowerCase(),
            e = this.__events[t];
        return !!e && e !== o };
    l._$delEvent = function(t, e) {
        var t = (t || "").toLowerCase(),
            n = this.__events[t];
        if (i._$isArray(n)) { i._$reverseEach(n, function(t, n, i) {
                if (t == e) i.splice(n, 1) });
            if (!n.length) delete this.__events[t] } else if (n == e) delete this.__events[t] };
    l._$setEvent = function(t, e) {
        if (t && i._$isFunction(e)) this.__events[t.toLowerCase()] = e };
    l._$batEvent = function() {
        var t = function(t, e) { this._$setEvent(e, t) };
        return function(e) { i._$loop(e, t, this) } }();
    l._$clearEvent = function() {
        var t = function(t, e) { this._$clearEvent(e) };
        return function(e) {
            var e = (e || "").toLowerCase();
            if (e) delete this.__events[e];
            else i._$loop(this.__events, t, this) } }();
    l._$addEvent = function(t, e) {
        if (t && i._$isFunction(e)) { t = t.toLowerCase();
            var n = this.__events[t];
            if (n) {
                if (!i._$isArray(n)) this.__events[t] = [n];
                this.__events[t].push(e) } else this.__events[t] = e } };
    l._$dispatchEvent = function(t) {
        var t = (t || "").toLowerCase(),
            e = this.__events[t];
        if (e) {
            var n = r.slice.call(arguments, 1);
            if (i._$isArray(e)) i._$forEach(e, function(t) {
                if (!1) t.apply(this, n);
                else try { t.apply(this, n) } catch (e) { console.error(e.message);
                    console.error(e.stack) } }, this);
            else e.apply(this, n) } };
    if (!0) { a._$$Event = a._$$EventTarget;
        t.copy(t.P("nej.ut"), a) }
    return a
}, 215, 1, 3, 2);
I$(11, function(t, e, n, i, a, s) { n._$cookie = function() {
        var t = new Date,
            n = +t,
            a = 864e5;
        var s = function(t) {
            var e = document.cookie,
                n = "\\b" + t + "=",
                i = e.search(n);
            if (i < 0) return "";
            i += n.length - 2;
            var a = e.indexOf(";", i);
            if (a < 0) a = e.length;
            return e.substring(i, a) || "" };
        return function(o, r) {
            if (void 0 === r) return s(o);
            if (e._$isString(r)) {
                if (r) { document.cookie = o + "=" + r + ";";
                    return r }
                r = { expires: -100 } }
            r = r || i;
            var l = o + "=" + (r.value || "") + ";";
            delete r.value;
            if (void 0 !== r.expires) { t.setTime(n + r.expires * a);
                r.expires = t.toGMTString() }
            l += e._$object2string(r, ";");
            document.cookie = l } }();
    if (!0) t.copy(t.P("nej.j"), n);
    return n }, 215, 2);
! function() {
    "use strict";

    function t(e, n, i) {
        function a() { i = i || e;
            n = n || "root";
            var t = new Error('Failed to require "' + i + '" from "' + n + '"');
            t.path = i;
            t.parent = n;
            t.require = !0;
            throw t }
        var s = t.resolve(e);
        if (null != s) {
            var o = t.modules[s];
            if (!o._resolving && !o.exports) {
                var r = {};
                r.exports = {};
                r.client = r.component = !0;
                o._resolving = !0;
                o.call(this, r.exports, t.relative(s), r);
                delete o._resolving;
                o.exports = r.exports }
            return o.exports } else a() }
    t.modules = {};
    t.aliases = {};
    t.exts = ["", ".js", ".json", "/index.js", "/index.json"];
    t.resolve = function(e) {
        if ("/" === e.charAt(0)) e = e.slice(1);
        for (var n = 0; n < 5; n++) {
            var i = e + t.exts[n];
            if (t.modules.hasOwnProperty(i)) return i;
            if (t.aliases.hasOwnProperty(i)) return t.aliases[i] } };
    t.normalize = function(t, e) {
        var n = [];
        if ("." != e.charAt(0)) return e;
        t = t.split("/");
        e = e.split("/");
        for (var i = 0; i < e.length; ++i)
            if (".." === e[i]) t.pop();
            else if ("." != e[i] && "" != e[i]) n.push(e[i]);
        return t.concat(n).join("/") };
    t.register = function(e, n) { t.modules[e] = n };
    t.alias = function(e, n) {
        function i() {
            throw new Error('Failed to alias "' + e + '", it does not exist') }
        if (t.modules.hasOwnProperty(e)) t.aliases[n] = e;
        else i() };
    t.relative = function(e) {
        function n(i) {
            var a = n.resolve(i);
            return t(a, e, i) }
        var i = t.normalize(e, "..");
        n.resolve = function(n) {
            var a = n.charAt(0);
            if ("/" === a) return n.slice(1);
            if ("." === a) return t.normalize(i, n);
            var s = e.split("/");
            var o = s.length;
            for (; o-- && "deps" !== s[o];);
            n = s.slice(0, o + 2).join("/") + "/deps/" + n;
            return n };
        n.exists = function(e) {
            return t.modules.hasOwnProperty(n.resolve(e)) };
        return n };
    t.register("regularjs/src/Regular.js", function(t, e, n) {
        var i = e("./env.js");
        var a = e("./parser/Lexer.js");
        var s = e("./parser/Parser.js");
        var o = e("./config.js");
        var r = e("./util");
        var l = e("./helper/extend.js");
        if (i.browser) {
            var c = e("./helper/combine.js");
            var d = e("./dom.js");
            var u = e("./walkers.js");
            var h = e("./group.js") }
        var f = e("./helper/event.js");
        var _ = e("./helper/watcher.js");
        var p = e("./helper/parse.js");
        var m = e("./helper/filter.js");
        var g = "undefined" == typeof document ? {} : document;
        var v = function(t) {
            var e = i.isRunning;
            i.isRunning = !0;
            var n, a;
            t = t || {};
            t.data = t.data || {};
            t.computed = t.computed || {};
            t.events = t.events || {};
            if (this.data) r.extend(t.data, this.data);
            if (this.computed) r.extend(t.computed, this.computed);
            if (this.events) r.extend(t.events, this.events);
            r.extend(this, t, !0);
            if (this.$parent) this.$parent._append(this);
            this._children = [];
            this.$refs = {};
            a = this.template;
            if ("string" == typeof a && a.length < 16 && (n = d.find(a))) a = n.innerHTML;
            if (a && a.nodeType) a = a.innerHTML;
            if ("string" == typeof a) this.template = new s(a).parse();
            this.computed = $(this.computed);
            this.$root = this.$root || this;
            if (this.events) this.$on(this.events);
            if (this.$body) this._getTransclude = function() {
                var e = this.$parent || this;
                if (this.$body) return e.$compile(this.$body, { namespace: t.namespace, outer: this, extra: t.extra }) };
            this.$emit("$config");
            this.config && this.config(this.data);
            if (a) { this.group = this.$compile(this.template, { namespace: t.namespace });
                c.node(this) }
            if (!this.$parent) this.$update();
            this.$ready = !0;
            this.$emit("$init");
            if (this.init) this.init(this.data);
            i.isRunning = e };
        u && (u.Regular = v);
        r.extend(v, { _directives: { __regexp__: [] }, _plugins: {}, _protoInheritCache: ["directive", "use"], __after__: function(t, e) {
                var n;
                this.__after__ = t.__after__;
                if (e.name) v.component(e.name, this);
                if (n = e.template) {
                    var i, a;
                    if ("string" == typeof n && n.length < 16 && (i = d.find(n))) { n = i.innerHTML;
                        if (a = d.attr(i, "name")) v.component(a, this) }
                    if (n.nodeType) n = n.innerHTML;
                    if ("string" == typeof n) this.prototype.template = new s(n).parse() }
                if (e.computed) this.prototype.computed = $(e.computed);
                v._inheritConfig(this, t) }, directive: function(t, e) {
                if ("object" === r.typeOf(t)) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) this.directive(n, t[n]);
                    return this }
                var i = r.typeOf(t);
                var a = this._directives,
                    s;
                if (null != e) {
                    if ("function" == typeof e) e = { link: e };
                    if ("string" === i) a[t] = e;
                    else if ("regexp" === i) { e.regexp = t;
                        a.__regexp__.push(e) }
                    return this } else if ("string" === i && (s = a[t])) return s;
                else {
                    var o = a.__regexp__;
                    for (var l = 0, c = o.length; l < c; l++) { s = o[l];
                        var d = s.regexp.test(t);
                        if (d) return s } } }, plugin: function(t, e) {
                var n = this._plugins;
                if (null == e) return n[t];
                n[t] = e;
                return this }, use: function(t) {
                if ("string" == typeof t) t = v.plugin(t);
                if ("function" != typeof t) return this;
                t(this, v);
                return this }, config: function(t, e) {
                var n = !1;
                if ("object" == typeof t)
                    for (var i in t) {
                        if ("END" === i || "BEGIN" === i) n = !0;
                        o[i] = t[i] }
                if (n) a.setup() }, expression: p.expression, Parser: s, Lexer: a, _addProtoInheritCache: function(t, e) {
                if (Array.isArray(t)) return t.forEach(v._addProtoInheritCache);
                var n = "_" + t + "s";
                v._protoInheritCache.push(t);
                v[n] = {};
                if (!v[t]) v[t] = function(i, a) {
                    var s = this[n];
                    if ("object" == typeof i) {
                        for (var o in i)
                            if (i.hasOwnProperty(o)) this[t](o, i[o]);
                        return this }
                    if (null == a) return s[i];
                    s[i] = e ? e(a) : a;
                    return this } }, _inheritConfig: function(t, e) {
                var n = v._protoInheritCache;
                var i = r.slice(n);
                i.forEach(function(n) { t[n] = e[n];
                    var i = "_" + n + "s";
                    if (e[i]) t[i] = r.createObject(e[i]) });
                return t } });
        l(v);
        v._addProtoInheritCache("component");
        v._addProtoInheritCache("filter", function(t) {
            return "function" == typeof t ? { get: t } : t });
        f.mixTo(v);
        _.mixTo(v);
        v.implement({
            init: function() {},
            config: function() {},
            destroy: function() { this.$emit("$destroy");
                this.group && this.group.destroy(!0);
                this.group = null;
                this.parentNode = null;
                this._watchers = null;
                this._children = [];
                var t = this.$parent;
                if (t) {
                    var e = t._children.indexOf(this);
                    t._children.splice(e, 1) }
                this.$parent = null;
                this.$root = null;
                this._handles = null;
                this.$refs = null },
            $compile: function(t, e) { e = e || {};
                if ("string" == typeof t) t = new s(t).parse();
                var n = this.__ext__,
                    i = e.record,
                    a;
                if (e.extra) this.__ext__ = e.extra;
                if (i) this._record();
                var o = this._walk(t, e);
                if (i) { a = this._release();
                    var r = this;
                    if (a.length) o.ondestroy = function() { r.$unwatch(a) } }
                if (e.extra) this.__ext__ = n;
                return o },
            $bind: function(t, e, n) {
                var i = r.typeOf(e);
                if ("expression" === e.type || "string" === i) this._bind(t, e, n);
                else if ("array" === i)
                    for (var a = 0, s = e.length; a < s; a++) this._bind(t, e[a]);
                else if ("object" === i)
                    for (var a in e)
                        if (e.hasOwnProperty(a)) this._bind(t, a, e[a]);
                t.$update();
                return this },
            $unbind: function() {},
            $inject: function(t, e, n) {
                var i = c.node(this);
                if (t === !1) {
                    if (!this._fragContainer) this._fragContainer = d.fragment();
                    return this.$inject(this._fragContainer) }
                if ("string" == typeof t) t = d.find(t);
                if (!t) throw "injected node is not found";
                if (!i) return this;
                d.inject(i, t, e);
                this.$emit("$inject", t);
                this.parentNode = Array.isArray(i) ? i[0].parentNode : i.parentNode;
                return this },
            $mute: function(t) { t = !!t;
                var e = t === !1 && this._mute;
                this._mute = !!t;
                if (e) this.$update();
                return this },
            _bind: function(t, e, n) {
                var i = this;
                if (!(t && t instanceof v)) throw "$bind() should pass Regular component as first argument";
                if (!e) throw "$bind() should  pass as least one expression to bind";
                if (!n) n = e;
                e = p.expression(e);
                n = p.expression(n);
                if (n.set) {
                    var a = this.$watch(e, function(e) { t.$update(n, e) });
                    t.$on("$destroy", function() { i.$unwatch(a) }) }
                if (e.set) {
                    var s = t.$watch(n, function(t) { i.$update(e, t) });
                    this.$on("$destroy", t.$unwatch.bind(t, s)) }
                n.set(t, e.get(this)) },
            _walk: function(t, e) {
                if ("array" === r.typeOf(t)) {
                    var n = [];
                    for (var i = 0, a = t.length; i < a; i++) n.push(this._walk(t[i], e));
                    return new h(n) }
                if ("string" == typeof t) return g.createTextNode(t);
                else return u[t.type || "default"].call(this, t, e) },
            _append: function(t) { this._children.push(t);
                t.$parent = this },
            _handleEvent: function(t, e, n, i) {
                var a = this.constructor,
                    s = "function" != typeof n ? r.handleEvent.call(this, n, e) : n,
                    o = a.event(e),
                    l;
                if (o) l = o.call(this, t, s, i);
                else d.on(t, e, s);
                return o ? l : function() { d.off(t, e, s) } },
            _touchExpr: function(t) {
                var e, n = this.__ext__,
                    i = {};
                if ("expression" !== t.type || t.touched) return t;
                e = t.get || (t.get = new Function(r.ctxName, r.extName, r.prefix + "return (" + t.body + ")"));
                i.get = !n ? e : function(t) {
                    return e(t, n) };
                if (t.setbody && !t.set) {
                    var a = t.setbody;
                    t.set = function(e, n, i) {
                        t.set = new Function(r.ctxName, r.setName, r.extName, r.prefix + a);
                        return t.set(e, n, i)
                    };
                    t.setbody = null
                }
                if (t.set) i.set = !n ? t.set : function(e, i) {
                    return t.set(e, i, n) };
                r.extend(i, { type: "expression", touched: !0, once: t.once || t.constant });
                return i
            },
            _f_: function(t) {
                var e = this.constructor;
                var n = e.filter(t);
                if (!n) throw "filter " + t + " is undefined";
                return n },
            _sg_: function(t, e, n) {
                if ("undefined" != typeof n) {
                    var i = this.computed,
                        a = i[t];
                    if (a) {
                        if ("expression" === a.type && !a.get) this._touchExpr(a);
                        if (a.get) return a.get(this);
                        else r.log("the computed '" + t + "' don't define the get function,  get data." + t + " altnately", "error") } }
                if ("undefined" != typeof e && "undefined" != typeof t) return n && "undefined" != typeof n[t] ? n[t] : e[t] },
            _ss_: function(t, e, n, i, a) {
                var a = this.computed,
                    i = i || "=",
                    s, o = a ? a[t] : null;
                if ("=" !== i) { s = o ? o.get(this) : n[t];
                    switch (i) {
                        case "+=":
                            e = s + e;
                            break;
                        case "-=":
                            e = s - e;
                            break;
                        case "*=":
                            e = s * e;
                            break;
                        case "/=":
                            e = s / e;
                            break;
                        case "%=":
                            e = s % e } }
                if (o)
                    if (o.set) return o.set(this, e);
                    else r.log("the computed '" + t + "' don't define the set function,  assign data." + t + " altnately", "error");
                n[t] = e;
                return e }
        });
        v.prototype.inject = function() { r.log("use $inject instead of inject", "error");
            return this.$inject.apply(this, arguments) };
        v.filter(m);
        n.exports = v;
        var $ = function() {
            function t(t) {
                return function(e) {
                    return t.call(e, e.data) } }

            function e(t) {
                return function(e, n) { t.call(e, n, e.data);
                    return n } }
            return function(n) {
                if (n) {
                    var i = {},
                        a, s, o;
                    for (var r in n) { a = n[r];
                        o = typeof a;
                        if ("expression" !== a.type)
                            if ("string" === o) i[r] = p.expression(a);
                            else { s = i[r] = { type: "expression" };
                                if ("function" === o) s.get = t(a);
                                else {
                                    if (a.get) s.get = t(a.get);
                                    if (a.set) s.set = e(a.set) } }
                        else i[r] = a }
                    return i } } }()
    });
    t.register("regularjs/src/util.js", function(t, e, n) { e("./helper/shim.js");
        var i = n.exports;
        var a = e("./helper/entities.js");
        var s = [].slice;
        var o = {}.toString;
        var r = "undefined" != typeof window ? window : global;
        i.noop = function() {};
        i.uid = function() {
            var t = 0;
            return function() {
                return t++ } }();
        i.varName = "d";
        i.setName = "p_";
        i.ctxName = "c";
        i.extName = "e";
        i.rWord = /^[\$\w]+$/;
        i.rSimpleAccessor = /^[\$\w]+(\.[\$\w]+)*$/;
        i.nextTick = "function" == typeof setImmediate ? setImmediate.bind(r) : function(t) { setTimeout(t, 0) };
        i.prefix = "var " + i.varName + "=" + i.ctxName + ".data;" + i.extName + "=" + i.extName + "||'';";
        i.slice = function(t, e, n) {
            var i = [];
            for (var a = e || 0, s = n || t.length; a < s; a++) {
                var o = t[a];
                i.push(o) }
            return i };
        i.typeOf = function(t) {
            return null == t ? String(t) : o.call(t).slice(8, -1).toLowerCase() };
        i.extend = function(t, e, n) {
            if ("array" === i.typeOf(n))
                for (var a = 0, s = n.length; a < s; a++) {
                    var o = n[a];
                    t[o] = e[o] } else
                    for (var a in e)
                        if ("undefined" == typeof t[a] || n === !0) t[a] = e[a];
            return t };
        i.makePredicate = function u(t, e) {
            function n(t) {
                if (1 === t.length) return i += "return str === '" + t[0] + "';";
                i += "switch(str){";
                for (var e = 0; e < t.length; ++e) i += "case '" + t[e] + "':";
                i += "return true}return false;" }
            if ("string" == typeof t) t = t.split(" ");
            var i = "",
                a = [];
            t: for (var s = 0; s < t.length; ++s) {
                for (var o = 0; o < a.length; ++o)
                    if (a[o][0].length === t[s].length) { a[o].push(t[s]);
                        continue t }
                a.push([t[s]]) }
            if (a.length > 3) { a.sort(function(t, e) {
                    return e.length - t.length });
                i += "switch(str.length){";
                for (var s = 0; s < a.length; ++s) {
                    var r = a[s];
                    i += "case " + r[0].length + ":";
                    n(r) }
                i += "}" } else n(t);
            return new Function("str", i) };
        i.trackErrorPos = function() {
            function t(t, e) {
                var n = 0;
                for (var i = 0, a = t.length; i < a; i++) {
                    var s = (t[i] || "").length;
                    if (n + s > e) return { num: i, line: t[i], start: e - n };
                    n = n + s + 1 } }
            var e = /\r\n|[\n\r\u2028\u2029]/g;
            return function(n, i) {
                if (i > n.length - 1) i = n.length - 1;
                e.lastIndex = 0;
                var a = n.split(e);
                var s = t(a, i);
                var o = s.line.length;
                var r = s.start - 10;
                if (r < 0) r = 0;
                var l = s.start + 10;
                if (l > o) l = o;
                var c = s.line.slice(r, l);
                var d = s.num + 1 + "> " + (r > 0 ? "..." : "");
                var u = l < o ? "..." : "";
                return d + c + u + "\n" + new Array(s.start + d.length + 1).join(" ") + "^" } }();
        var l = /\((\?\!|\?\:|\?\=)/g;
        i.findSubCapture = function(t) {
            var e = 0,
                n = 0,
                i = t.length,
                a = t.match(l);
            if (a) a = a.length;
            else a = 0;
            for (; i--;) {
                var s = t.charAt(i);
                if (0 === i || "\\" !== t.charAt(i - 1)) {
                    if ("(" === s) e++;
                    if (")" === s) n++ } }
            if (e !== n) throw "RegExp: " + t + "'s bracket is not marched";
            else return e - a };
        i.escapeRegExp = function(t) {
            return t.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function(t) {
                return "\\" + t }) };
        var c = new RegExp("&(" + Object.keys(a).join("|") + ");", "gi");
        i.convertEntity = function(t) {
            return ("" + t).replace(c, function(t, e) {
                return String.fromCharCode(a[e]) }) };
        i.createObject = function(t, e) {
            function n() {}
            n.prototype = t;
            var a = new n;
            if (e) i.extend(a, e);
            return a };
        i.createProto = function(t, e) {
            function n() { this.constructor = t }
            n.prototype = e;
            return t.prototype = new n };
        i.clone = function h(t) {
            var e = i.typeOf(t);
            if ("array" === e) {
                var n = [];
                for (var a = 0, s = t.length; a < s; a++) n[a] = t[a];
                return n }
            if ("object" === e) {
                var n = {};
                for (var a in t)
                    if (t.hasOwnProperty(a)) n[a] = t[a];
                return n }
            return t };
        i.equals = function(t, e) {
            if (Array.isArray(t)) {
                var n = d(t, e || []);
                return n }
            var i = typeof t;
            if ("number" === i && "number" == typeof e && isNaN(t) && isNaN(e)) return !0;
            else return t === e };
        var d = function() {
            function t(t, e) {
                return t === e }

            function e(e, n) {
                var i = e.length;
                var a = n.length;
                var s = [];
                for (var o = 0; o <= i; o++) s.push([o]);
                for (var r = 1; r <= a; r++) s[0][r] = r;
                for (var o = 1; o <= i; o++)
                    for (var r = 1; r <= a; r++)
                        if (t(e[o - 1], n[r - 1])) s[o][r] = s[o - 1][r - 1];
                        else s[o][r] = Math.min(s[o - 1][r] + 1, s[o][r - 1] + 1);
                return s }

            function n(t, n) {
                var i = e(n, t);
                var a = n.length;
                var s = a;
                var o = t.length;
                var r = o;
                var l = [];
                var c = i[s][r];
                for (; s > 0 || r > 0;)
                    if (0 !== s)
                        if (0 !== r) {
                            var d = i[s - 1][r - 1];
                            var u = i[s - 1][r];
                            var h = i[s][r - 1];
                            var f = Math.min(h, u, d);
                            if (f === u) { l.unshift(2);
                                s--;
                                c = u } else if (f === d) {
                                if (d === c) l.unshift(0);
                                else { l.unshift(1);
                                    c = d }
                                s--;
                                r-- } else { l.unshift(3);
                                r--;
                                c = h } } else { l.unshift(2);
                            s-- }
                else { l.unshift(3);
                    r-- }
                var _ = 0;
                var p = 3;
                var m = 2;
                var g = 1;
                var a = 0;
                o = 0;
                var v = [];
                var $ = { index: null, add: 0, removed: [] };
                for (var s = 0; s < l.length; s++) {
                    if (l[s] > 0) {
                        if (null === $.index) $.index = o } else if (null != $.index) { v.push($);
                        $ = { index: null, add: 0, removed: [] } }
                    switch (l[s]) {
                        case _:
                            a++;
                            o++;
                            break;
                        case p:
                            $.add++;
                            o++;
                            break;
                        case m:
                            $.removed.push(n[a]);
                            a++;
                            break;
                        case g:
                            $.add++;
                            $.removed.push(n[a]);
                            a++;
                            o++ } }
                if (null != $.index) v.push($);
                return v }
            return n }();
        i.throttle = function f(t, e) {
            var e = e || 100;
            var n, i, a;
            var s = null;
            var o = 0;
            var r = function() { o = +new Date;
                s = null;
                a = t.apply(n, i);
                n = i = null };
            return function() {
                var l = +new Date;
                var c = e - (l - o);
                n = this;
                i = arguments;
                if (c <= 0 || c > e) { clearTimeout(s);
                    s = null;
                    o = l;
                    a = t.apply(n, i);
                    n = i = null } else if (!s) s = setTimeout(r, c);
                return a } };
        i.escape = function() {
            var t = /&/g,
                e = /</g,
                n = />/g,
                i = /\'/g,
                a = /\"/g,
                s = /[&<>\"\']/;
            return function(o) {
                return s.test(o) ? o.replace(t, "&amp;").replace(e, "&lt;").replace(n, "&gt;").replace(i, "&#39;").replace(a, "&quot;") : o } }();
        i.cache = function(t) { t = t || 1e3;
            var e = [],
                n = {};
            return { set: function(t, i) {
                    if (e.length > this.max) n[e.shift()] = void 0;
                    if (void 0 === n[t]) e.push(t);
                    n[t] = i;
                    return i }, get: function(t) {
                    if (void 0 === t) return n;
                    else return n[t] }, max: t, len: function() {
                    return e.length } } };
        i.handleEvent = function(t, e) {
            var n = this,
                i;
            if ("expression" === t.type) i = t.get;
            if (i) return function a(t) { n.data.$event = t;
                var e = i(n);
                if (e === !1 && t && t.preventDefault) t.preventDefault();
                n.data.$event = void 0;
                n.$update() };
            else return function o() {
                var e = s.call(arguments);
                e.unshift(t);
                n.$emit.apply(n, e);
                n.$update() } };
        i.once = function(t) {
            var e = 0;
            return function() {
                if (0 === e++) t.apply(this, arguments) } };
        i.log = function(t, e) {
            if ("undefined" != typeof console) console[e || "log"](t) };
        i.isVoidTag = i.makePredicate("area base br col embed hr img input keygen link menuitem meta param source track wbr r-content");
        i.isBooleanAttr = i.makePredicate("selected checked disabled readOnly required open autofocus controls autoplay compact loop defer multiple");
        i.isFalse - function() {
            return !1 };
        i.isTrue - function() {
            return !0 };
        i.assert = function(t, e) {
            if (!t) throw e } });
    t.register("regularjs/src/walkers.js", function(t, e, n) {
        function i(t, e) {
            var n = [];
            for (var i = 0, a = t.length; i < a; i++) {
                var s = this._walk(t[i], { element: e, fromElement: !0, attrs: t });
                if (s) n.push(s) }
            return n }
        var a = e("./parser/node.js");
        var s = e("./dom.js");
        var o = e("./helper/animate.js");
        var r = e("./group.js");
        var l = e("./util");
        var c = e("./helper/combine.js");
        var d = n.exports = {};
        d.list = function(t, e) {
            function n(n, i) {
                if (!n) { n = [];
                    i = l.equals(n, i) }
                if (i && i.length) {
                    var r = a;
                    var d = 0,
                        m = n.length,
                        g = i[0].index;
                    for (var v = 0; v < i.length; v++) {
                        var $ = i[v];
                        var y = $.index;
                        for (var b = d; b < y; b++) {
                            var w = f.get(b + 1);
                            w.data[_] = b }
                        for (var C = 0, x = $.removed.length; C < x; C++) {
                            var T = f.children.splice(y + 1, 1)[0];
                            T.destroy(!0) }
                        for (var L = y; L < y + $.add; L++) {
                            var S = n[L];
                            var I = {};
                            I[_] = L;
                            I[p] = S;
                            l.extend(I, u);
                            var k = h.$compile(t.body, { extra: I, namespace: s, record: !0, outer: e.outer });
                            k.data = I;
                            var D = c.last(f.get(L));
                            if (D.parentNode) o.inject(c.node(k), D, "after");
                            f.children.splice(L + 1, 0, k) }
                        d = y + $.add - $.removed.length;
                        d = d < 0 ? 0 : d }
                    if (d < m)
                        for (var v = d; v < m; v++) {
                            var N = f.get(v + 1);
                            N.data[_] = v } } }
            var i = d.Regular;
            var a = document.createComment("Regular list"),
                s = e.namespace,
                u = e.extra;
            var h = this;
            var f = new r;
            f.push(a);
            var _ = t.variable + "_index";
            var p = t.variable;
            this.$watch(t.sequence, n, { init: !0 });
            return f };
        d.template = function(t, e) {
            var n = t.content,
                i;
            var a = document.createComment("inlcude");
            var i, s = e.namespace,
                l = e.extra;
            var d = new r;
            d.push(a);
            if (n) {
                var u = this;
                this.$watch(n, function(t) {
                    if (i = d.get(1)) { i.destroy(!0);
                        d.children.pop() }
                    d.push(i = u.$compile(t, { record: !0, outer: e.outer, namespace: s, extra: l }));
                    if (a.parentNode) o.inject(c.node(i), a, "before") }, { init: !0 }) }
            return d };
        var u = 0;
        d["if"] = function(t, e) {
            var n = this,
                i, a, s = e.extra;
            if (e && e.element) {
                var l = function(o) {
                    if (o) {
                        if (a) c.destroy(a);
                        if (t.consequent) i = n.$compile(t.consequent, { record: !0, element: e.element, extra: s }) } else {
                        if (i) c.destroy(i);
                        if (t.alternate) a = n.$compile(t.alternate, { record: !0, element: e.element, extra: s }) } };
                this.$watch(t.test, l, { force: !0 });
                return { destroy: function() {
                        if (i) c.destroy(i);
                        else if (a) c.destroy(a) } } }
            var d, i, a, h;
            var f = document.createComment("Regular if" + u++);
            var _ = new r;
            _.push(f);
            var p = null,
                m = e.namespace;
            var l = function(r, l) {
                var d = !!r;
                if (d !== p) { p = d;
                    if (_.children[1]) { _.children[1].destroy(!0);
                        _.children.pop() }
                    if (d) {
                        if (t.consequent && t.consequent.length) { i = n.$compile(t.consequent, { record: !0, outer: e.outer, namespace: m, extra: s });
                            _.push(i);
                            if (f.parentNode) o.inject(c.node(i), f, "before") } } else if (t.alternate && t.alternate.length) { a = n.$compile(t.alternate, { record: !0, outer: e.outer, namespace: m, extra: s });
                        _.push(a);
                        if (f.parentNode) o.inject(c.node(a), f, "before") } } };
            this.$watch(t.test, l, { force: !0, init: !0 });
            return _ };
        d.expression = function(t, e) {
            var n = document.createTextNode("");
            this.$watch(t, function(t) { s.text(n, "" + (null == t ? "" : "" + t)) });
            return n
        };
        d.text = function(t, e) {
            var n = document.createTextNode(l.convertEntity(t.text));
            return n };
        var h = /^on-(.+)$/;
        d.element = function(t, e) {
            var n = t.attrs,
                a, r = this,
                d = this.constructor,
                u = t.children,
                f = e.namespace,
                _, p, m = e.extra,
                g = 0,
                v = d.component(t.tag);
            if ("svg" === t.tag) f = "svg";
            if (v) {
                var $ = {},
                    y;
                for (var b = 0, w = n.length; b < w; b++) {
                    var C = n[b];
                    var x = this._touchExpr(C.value || "");
                    var T = C.name;
                    var L = T.match(h);
                    if (!L) {
                        if ("expression" !== x.type) $[C.name] = x;
                        else $[C.name] = x.get(r);
                        if ("ref" === C.name && null != x) _ = "expression" === x.type ? x.get(r) : x;
                        if ("isolate" === C.name) { g = "expression" === x.type ? x.get(r) : parseInt(x || 3, 10);
                            $.isolate = g } } else { y = y || {};
                        y[L[1]] = l.handleEvent.call(this, x, L[1]) } }
                var S = { data: $, events: y, $parent: this, $outer: e.outer, namespace: f, $root: this.$root, $body: t.children };
                var a = new v(S);
                if (_ && r.$refs) r.$refs[_] = a;
                for (var b = 0, w = n.length; b < w; b++) {
                    var C = n[b];
                    var x = C.value || "";
                    if ("expression" === x.type && C.name.indexOf("on-") === -1) { x = r._touchExpr(x);
                        if (!(2 & g)) this.$watch(x, a.$update.bind(a, C.name));
                        if (x.set && !(1 & g)) a.$watch(C.name, r.$update.bind(r, x), { sync: !0 }) } }
                if (_) a.$on("destroy", function() {
                    if (r.$refs) r.$refs[_] = null });
                return a } else if ("r-content" === t.tag && this._getTransclude) return this._getTransclude();
            if (u && u.length) p = this.$compile(u, { outer: e.outer, namespace: f, extra: m });
            var I = s.create(t.tag, f, n);
            var k;
            if (p && !l.isVoidTag(t.tag)) s.inject(c.node(p), I);
            n.sort(function(t, e) {
                var n = d.directive(t.name),
                    i = d.directive(e.name);
                if (n && i) return (i.priority || 1) - (n.priority || 1);
                if (n) return 1;
                if (i) return -1;
                if ("type" === e.name) return 1;
                else return -1 });
            var D = i.call(this, n, I, D);
            var N = { type: "element", group: p, node: function() {
                    return I }, last: function() {
                    return I }, destroy: function(t) {
                    if (t) o.remove(I, p ? p.destroy.bind(p) : l.noop);
                    else if (p) p.destroy();
                    if (D.length) D.forEach(function(t) {
                        if (t)
                            if ("function" == typeof t.destroy) t.destroy();
                            else t() }) } };
            return N };
        d.attribute = function(t, e) {
            var n = t;
            var i = this.constructor;
            var a = this;
            var o = e.element;
            var r = n.name,
                c = n.value || "",
                d = i.directive(r);
            c = this._touchExpr(c);
            if (d && d.link) {
                var u = d.link.call(a, o, c, r, e.attrs);
                if ("function" == typeof u) u = { destroy: u };
                return u } else {
                if ("ref" === r && null != c && e.fromElement) {
                    var h = "expression" === c.type ? c.get(a) : c;
                    var f = this.$refs;
                    if (f) { f[h] = o;
                        return { destroy: function() { f[h] = null } } } }
                if ("expression" === c.type) this.$watch(c, function(t, e) { s.attr(o, r, t) }, { init: !0 });
                else if (l.isBooleanAttr(r)) s.attr(o, r, !0);
                else s.attr(o, r, c);
                if (!e.fromElement) return { destroy: function() { s.attr(o, r, null) } } } }
    });
    t.register("regularjs/src/env.js", function(t, e, n) {
        var i = e("./util");
        t.svg = function() {
            return "undefined" != typeof document && document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") }();
        t.browser = "undefined" != typeof document && document.nodeType;
        t.exprCache = i.cache(1e3);
        t.isRunning = !1 });
    t.register("regularjs/src/index.js", function(t, e, n) {
        var i = e("./env.js");
        var a = e("./config");
        var s = n.exports = e("./Regular.js");
        var o = s.Parser;
        var r = s.Lexer;
        if (i.browser) { e("./directive/base.js");
            e("./directive/animation.js");
            e("./module/timeout.js");
            s.dom = e("./dom.js") }
        s.env = i;
        s.util = e("./util.js");
        s.parse = function(t, e) { e = e || {};
            if (e.BEGIN || e.END) {
                if (e.BEGIN) a.BEGIN = e.BEGIN;
                if (e.END) a.END = e.END;
                r.setup() }
            var n = new o(t).parse();
            return !e.stringify ? n : JSON.stringify(n) } });
    t.register("regularjs/src/dom.js", function(t, e, n) {
        function i(t) {
            return ("" + t).replace(/-\D/g, function(t) {
                return t.charAt(1).toUpperCase() }) }

        function a(t, e) {
            return "change" === e && o.msie < 9 && t && t.tagName && "input" === t.tagName.toLowerCase() && ("checkbox" === t.type || "radio" === t.type) ? "click" : e }

        function s(t) { t = t || window.event;
            if (t._fixed) return t;
            this.event = t;
            this.target = t.target || t.srcElement;
            var e = this.type = t.type;
            var n = this.button = t.button;
            if (p.test(e)) { this.pageX = null != t.pageX ? t.pageX : t.clientX + m.scrollLeft;
                this.pageY = null != t.pageX ? t.pageY : t.clientY + m.scrollTop;
                if ("mouseover" === e || "mouseout" === e) {
                    var i = t.relatedTarget || t[("mouseover" === e ? "from" : "to") + "Element"];
                    for (; i && 3 === i.nodeType;) i = i.parentNode;
                    this.relatedTarget = i } }
            if ("DOMMouseScroll" === e || "mousewheel" === e) this.wheelDelta = t.wheelDelta ? t.wheelDelta / 120 : -(t.detail || 0) / 3;
            this.which = t.which || t.keyCode;
            if (!this.which && void 0 !== n) this.which = 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0;
            this._fixed = !0 }
        var o = n.exports;
        var r = e("./env.js");
        var l = e("./util");
        var c = document.createElement("div");
        var d, u;
        var h = function() {};
        var f = { html: "http://www.w3.org/1999/xhtml", svg: "http://www.w3.org/2000/svg" };
        o.body = document.body;
        o.doc = document;
        o.tNode = c;
        if (c.addEventListener) { d = function(t, e, n) { t.addEventListener(e, n, !1) };
            u = function(t, e, n) { t.removeEventListener(e, n, !1) } } else { d = function(t, e, n) { t.attachEvent("on" + e, n) };
            u = function(t, e, n) { t.detachEvent("on" + e, n) } }
        o.msie = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);
        if (isNaN(o.msie)) o.msie = parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);
        o.find = function(t) {
            if (document.querySelector) try {
                return document.querySelector(t) } catch (e) {}
            if (t.indexOf("#") !== -1) return document.getElementById(t.slice(1)) };
        o.inject = function(t, e, n) { n = n || "bottom";
            if (Array.isArray(t)) {
                var i = t;
                t = o.fragment();
                for (var a = 0, s = i.length; a < s; a++) t.appendChild(i[a]) }
            var r, l;
            switch (n) {
                case "bottom":
                    e.appendChild(t);
                    break;
                case "top":
                    if (r = e.firstChild) e.insertBefore(t, e.firstChild);
                    else e.appendChild(t);
                    break;
                case "after":
                    if (l = e.nextSibling) l.parentNode.insertBefore(t, l);
                    else e.parentNode.appendChild(t);
                    break;
                case "before":
                    e.parentNode.insertBefore(t, e) } };
        o.id = function(t) {
            return document.getElementById(t) };
        o.create = function(t, e, n) {
            if ("svg" === e) {
                if (!r.svg) throw Error("the env need svg support");
                e = f.svg }
            return !e ? document.createElement(t) : document.createElementNS(e, t) };
        o.fragment = function() {
            return document.createDocumentFragment() };
        var _ = { "class": function(t, e) { "className" in t && (t.namespaceURI === f.html || !t.namespaceURI) ? t.className = e || "" : t.setAttribute("class", e) }, "for": function(t, e) { "htmlFor" in t ? t.htmlFor = e : t.setAttribute("for", e) }, style: function(t, e) { t.style ? t.style.cssText = e : t.setAttribute("style", e) }, value: function(t, e) { t.value = null != e ? e : "" } };
        o.attr = function(t, e, n) {
            if (l.isBooleanAttr(e))
                if ("undefined" != typeof n)
                    if (n) { t[e] = !0;
                        t.setAttribute(e, e);
                        if (o.msie && o.msie <= 7) t.defaultChecked = !0 } else { t[e] = !1;
                        t.removeAttribute(e) }
            else return t[e] || (t.attributes.getNamedItem(e) || h).specified ? e : void 0;
            else if ("undefined" != typeof n)
                if (_[e]) _[e](t, n);
                else if (null === n) t.removeAttribute(e);
            else t.setAttribute(e, n);
            else if (t.getAttribute) {
                var i = t.getAttribute(e, 2);
                return null === i ? void 0 : i } };
        o.on = function(t, e, n) {
            var i = e.split(" ");
            n.real = function(e) {
                var i = new s(e);
                i.origin = t;
                n.call(t, i) };
            i.forEach(function(e) { e = a(t, e);
                d(t, e, n.real) }) };
        o.off = function(t, e, n) {
            var i = e.split(" ");
            n = n.real || n;
            i.forEach(function(e) { e = a(t, e);
                u(t, e, n) }) };
        o.text = function() {
            var t = {};
            if (o.msie && o.msie < 9) { t[1] = "innerText";
                t[3] = "nodeValue" } else t[1] = t[3] = "textContent";
            return function(e, n) {
                var i = t[e.nodeType];
                if (null == n) return i ? e[i] : "";
                e[i] = n } }();
        o.html = function(t, e) {
            if ("undefined" == typeof e) return t.innerHTML;
            else t.innerHTML = e };
        o.replace = function(t, e) {
            if (e.parentNode) e.parentNode.replaceChild(t, e) };
        o.remove = function(t) {
            if (t.parentNode) t.parentNode.removeChild(t) };
        o.css = function(t, e, n) {
            if ("object" !== l.typeOf(e))
                if ("undefined" != typeof n) { e = i(e);
                    if (e) t.style[e] = n } else {
                    var a;
                    if (o.msie <= 8) { a = t.currentStyle && t.currentStyle[e];
                        if ("" === a) a = "auto" }
                    a = a || t.style[e];
                    if (o.msie <= 8) a = "" === a ? void 0 : a;
                    return a }
            else
                for (var s in e)
                    if (e.hasOwnProperty(s)) o.css(t, s, e[s]) };
        o.addClass = function(t, e) {
            var n = t.className || "";
            if ((" " + n + " ").indexOf(" " + e + " ") === -1) t.className = n ? n + " " + e : e };
        o.delClass = function(t, e) {
            var n = t.className || "";
            t.className = (" " + n + " ").replace(" " + e + " ", " ").trim() };
        o.hasClass = function(t, e) {
            var n = t.className || "";
            return (" " + n + " ").indexOf(" " + e + " ") !== -1 };
        var p = /^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/;
        var m = document;
        m = !m.compatMode || "CSS1Compat" === m.compatMode ? m.documentElement : m.body;
        l.extend(s.prototype, { immediateStop: l.isFalse, stop: function() { this.preventDefault().stopPropagation() }, preventDefault: function() {
                if (this.event.preventDefault) this.event.preventDefault();
                else this.event.returnValue = !1;
                return this }, stopPropagation: function() {
                if (this.event.stopPropagation) this.event.stopPropagation();
                else this.event.cancelBubble = !0;
                return this }, stopImmediatePropagation: function() {
                if (this.event.stopImmediatePropagation) this.event.stopImmediatePropagation() } });
        o.nextFrame = function() {
            var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) { setTimeout(t, 16) };
            var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || function(t) { clearTimeout(t) };
            return function(n) {
                var i = t(n);
                return function() { e(i) } } }();
        var g;
        o.nextReflow = function(t) { o.nextFrame(function() { g = document.body.offsetWidth;
                t() }) } });
    t.register("regularjs/src/group.js", function(t, e, n) {
        function i(t) { this.children = t || [] }
        var a = e("./util");
        var s = e("./helper/combine");
        a.extend(i.prototype, { destroy: function(t) { s.destroy(this.children, t);
                if (this.ondestroy) this.ondestroy();
                this.children = null }, get: function(t) {
                return this.children[t] }, push: function(t) { this.children.push(t) } });
        n.exports = i });
    t.register("regularjs/src/config.js", function(t, e, n) { n.exports = { BEGIN: "{", END: "}" } });
    t.register("regularjs/src/parser/Lexer.js", function(t, e, n) {
        function i(t) {
            return function(e) {
                return { type: t, value: e } } }

        function a(t, e) {
            if (c[l.END]) { this.markStart = c[l.END];
                this.markEnd = l.END }
            this.input = (t || "").trim();
            this.opts = e || {};
            this.map = 2 !== this.opts.mode ? d : u;
            this.states = ["INIT"];
            if (e && e.expression) { this.states.push("JST");
                this.expression = !0 } }

        function s(t) {
            var e, n = {},
                i;
            for (var a = 0, s = t.length; a < s; a++) { e = t[a];
                i = e[2] || "INIT";
                (n[i] || (n[i] = { rules: [], links: [] })).rules.push(e) }
            return o(n) }

        function o(t) {
            function e(t, e) {
                return "string" == typeof h[e] ? r.escapeRegExp(h[e]) : String(h[e]).slice(1, -1) }
            var n, a, s, o, l, c, d;
            for (var u in t) {
                n = t[u];
                n.curIndex = 1;
                a = n.rules;
                s = [];
                for (var f = 0, _ = a.length; f < _; f++) {
                    d = a[f];
                    l = d[0];
                    o = d[1];
                    if ("string" == typeof o) o = i(o);
                    if ("regexp" === r.typeOf(l)) l = l.toString().slice(1, -1);
                    l = l.replace(/\{(\w+)\}/g, e);
                    c = r.findSubCapture(l) + 1;
                    n.links.push([n.curIndex, c, o]);
                    n.curIndex += c;
                    s.push(l)
                }
                n.TRUNK = new RegExp("^(?:(" + s.join(")|(") + "))")
            }
            return t
        }
        var r = e("../util.js");
        var l = e("../config.js");
        var c = { "}": "{", "]": "[" },
            d, u;
        var h = { NAME: /(?:[:_A-Za-z][-\.:_0-9A-Za-z]*)/, IDENT: /[\$_A-Za-z][_0-9A-Za-z\$]*/, SPACE: /[\r\n\f ]/ };
        var f = /a|(b)/.exec("a");
        var _ = f && void 0 === f[1] ? function(t) {
            return void 0 !== t } : function(t) {
            return !!t };
        var p = a.prototype;
        p.lex = function(t) { t = (t || this.input).trim();
            var e = [],
                n, i, a, s, o;
            this.input = t, this.marks = 0;
            this.index = 0;
            var r = 0;
            for (; t;) { r++;
                o = this.state();
                n = this.map[o];
                i = n.TRUNK.exec(t);
                if (!i) this.error("Unrecoginized Token");
                a = i[0].length;
                t = t.slice(a);
                s = this._process.call(this, i, n, t);
                if (s) e.push(s);
                this.index += a }
            e.push({ type: "EOF" });
            return e };
        p.error = function(t) {
            throw "Parse Error: " + t + ":\n" + r.trackErrorPos(this.input, this.index) };
        p._process = function(t, e, n) {
            var i = e.links,
                a = !1,
                s;
            for (var o = i.length, r = 0; r < o; r++) {
                var l = i[r],
                    c = l[2],
                    d = l[0];
                if (_(t[d])) { a = !0;
                    if (c) { s = c.apply(this, t.slice(d, d + l[1]));
                        if (s) s.pos = this.index }
                    break } }
            if (!a) switch (n.charAt(0)) {
                case "<":
                    this.enter("TAG");
                    break;
                default:
                    this.enter("JST") }
            return s };
        p.enter = function(t) { this.states.push(t);
            return this };
        p.state = function() {
            var t = this.states;
            return t[t.length - 1] };
        p.leave = function(t) {
            var e = this.states;
            if (!t || e[e.length - 1] === t) e.pop() };
        a.setup = function() { h.END = l.END;
            h.BEGIN = l.BEGIN;
            d = s([m.ENTER_JST, m.ENTER_TAG, m.TEXT, m.TAG_NAME, m.TAG_OPEN, m.TAG_CLOSE, m.TAG_PUNCHOR, m.TAG_ENTER_JST, m.TAG_UNQ_VALUE, m.TAG_STRING, m.TAG_SPACE, m.TAG_COMMENT, m.JST_OPEN, m.JST_CLOSE, m.JST_COMMENT, m.JST_EXPR_OPEN, m.JST_IDENT, m.JST_SPACE, m.JST_LEAVE, m.JST_NUMBER, m.JST_PUNCHOR, m.JST_STRING, m.JST_COMMENT]);
            u = s([m.ENTER_JST2, m.TEXT, m.JST_COMMENT, m.JST_OPEN, m.JST_CLOSE, m.JST_EXPR_OPEN, m.JST_IDENT, m.JST_SPACE, m.JST_LEAVE, m.JST_NUMBER, m.JST_PUNCHOR, m.JST_STRING, m.JST_COMMENT]) };
        var m = { ENTER_JST: [/[^\x00<]*?(?={BEGIN})/, function(t) { this.enter("JST");
                if (t) return { type: "TEXT", value: t } }], ENTER_JST2: [/[^\x00]*?(?={BEGIN})/, function(t) { this.enter("JST");
                if (t) return { type: "TEXT", value: t } }], ENTER_TAG: [/[^\x00<>]*?(?=<)/, function(t) { this.enter("TAG");
                if (t) return { type: "TEXT", value: t } }], TEXT: [/[^\x00]+/, "TEXT"], TAG_NAME: [/{NAME}/, "NAME", "TAG"], TAG_UNQ_VALUE: [/[^\{}&"'=><`\r\n\f ]+/, "UNQ", "TAG"], TAG_OPEN: [/<({NAME})\s*/, function(t, e) {
                return { type: "TAG_OPEN", value: e } }, "TAG"], TAG_CLOSE: [/<\/({NAME})[\r\n\f ]*>/, function(t, e) { this.leave();
                return { type: "TAG_CLOSE", value: e } }, "TAG"], TAG_ENTER_JST: [/(?={BEGIN})/, function() { this.enter("JST") }, "TAG"], TAG_PUNCHOR: [/[\>\/=&]/, function(t) {
                if (">" === t) this.leave();
                return { type: t, value: t } }, "TAG"], TAG_STRING: [/'([^']*)'|"([^"]*)"/, function(t, e, n) {
                var i = e || n || "";
                return { type: "STRING", value: i } }, "TAG"], TAG_SPACE: [/{SPACE}+/, null, "TAG"], TAG_COMMENT: [/<\!--([^\x00]*?)--\>/, null, "TAG"], JST_OPEN: ["{BEGIN}#{SPACE}*({IDENT})", function(t, e) {
                return { type: "OPEN", value: e } }, "JST"], JST_LEAVE: [/{END}/, function(t) {
                if (this.markEnd === t && this.expression) return { type: this.markEnd, value: this.markEnd };
                if (!this.markEnd || !this.marks) { this.firstEnterStart = !1;
                    this.leave("JST");
                    return { type: "END" } } else { this.marks--;
                    return { type: this.markEnd, value: this.markEnd } } }, "JST"], JST_CLOSE: [/{BEGIN}\s*\/({IDENT})\s*{END}/, function(t, e) { this.leave("JST");
                return { type: "CLOSE", value: e } }, "JST"], JST_COMMENT: [/{BEGIN}\!([^\x00]*?)\!{END}/, function() { this.leave() }, "JST"], JST_EXPR_OPEN: ["{BEGIN}", function(t, e) {
                if (t === this.markStart) {
                    if (this.expression) return { type: this.markStart, value: this.markStart };
                    if (this.firstEnterStart || this.marks) { this.marks++;
                        this.firstEnterStart = !1;
                        return { type: this.markStart, value: this.markStart } } else this.firstEnterStart = !0 }
                return { type: "EXPR_OPEN", escape: !1 } }, "JST"], JST_IDENT: ["{IDENT}", "IDENT", "JST"], JST_SPACE: [/[ \r\n\f]+/, null, "JST"], JST_PUNCHOR: [/[=!]?==|[-=><+*\/%\!]?\=|\|\||&&|\@\(|\.\.|[<\>\[\]\(\)\-\|\{}\+\*\/%?:\.!,]/, function(t) {
                return { type: t, value: t } }, "JST"], JST_STRING: [/'([^']*)'|"([^"]*)"/, function(t, e, n) {
                return { type: "STRING", value: e || n || "" } }, "JST"], JST_NUMBER: [/(?:[0-9]*\.[0-9]+|[0-9]+)(e\d+)?/, function(t) {
                return { type: "NUMBER", value: parseFloat(t, 10) } }, "JST"] };
        a.setup();
        n.exports = a
    });
    t.register("regularjs/src/parser/node.js", function(t, e, n) { n.exports = { element: function(t, e, n) {
                return { type: "element", tag: t, attrs: e, children: n } }, attribute: function(t, e) {
                return { type: "attribute", name: t, value: e } }, "if": function(t, e, n) {
                return { type: "if", test: t, consequent: e, alternate: n } }, list: function(t, e, n) {
                return { type: "list", sequence: t, variable: e, body: n } }, expression: function(t, e, n) {
                return { type: "expression", body: t, constant: n || !1, setbody: e || !1 } }, text: function(t) {
                return { type: "text", text: t } }, template: function(t) {
                return { type: "template", content: t } } } });
    t.register("regularjs/src/parser/Parser.js", function(t, e, n) {
        function i(t, e) { e = e || {};
            this.input = t;
            this.tokens = new r(t, e).lex();
            this.pos = 0;
            this.noComputed = e.noComputed;
            this.length = this.tokens.length }
        var a = e("../util.js");
        var s = e("../config.js");
        var o = e("./node.js");
        var r = e("./Lexer.js");
        var l = a.varName;
        var c = a.ctxName;
        var d = a.extName;
        var u = a.makePredicate("STRING IDENT NUMBER");
        var h = a.makePredicate("true false undefined null this Array Date JSON Math NaN RegExp decodeURI decodeURIComponent encodeURI encodeURIComponent parseFloat parseInt Object");
        var f = i.prototype;
        f.parse = function() { this.pos = 0;
            var t = this.program();
            if ("TAG_CLOSE" === this.ll().type) this.error("You may got a unclosed Tag");
            return t };
        f.ll = function(t) { t = t || 1;
            if (t < 0) t += 1;
            var e = this.pos + t - 1;
            if (e > this.length - 1) return this.tokens[this.length - 1];
            else return this.tokens[e] };
        f.la = function(t) {
            return (this.ll(t) || "").type };
        f.match = function(t, e) {
            var n;
            if (!(n = this.eat(t, e))) { n = this.ll();
                this.error("expect [" + t + (null == e ? "" : ":" + e) + ']" -> got "[' + n.type + (null == e ? "" : ":" + n.value) + "]", n.pos) } else return n };
        f.error = function(t, e) { t = "Parse Error: " + t + ":\n" + a.trackErrorPos(this.input, "number" == typeof e ? e : this.ll().pos || 0);
            throw new Error(t) };
        f.next = function(t) { t = t || 1;
            this.pos += t };
        f.eat = function(t, e) {
            var n = this.ll();
            if ("string" != typeof t) {
                for (var i = t.length; i--;)
                    if (n.type === t[i]) { this.next();
                        return n } } else if (n.type === t && ("undefined" == typeof e || n.value === e)) { this.next();
                return n }
            return !1 };
        f.program = function() {
            var t = [],
                e = this.ll();
            for (;
                "EOF" !== e.type && "TAG_CLOSE" !== e.type;) { t.push(this.statement());
                e = this.ll() }
            return t };
        f.statement = function() {
            var t = this.ll();
            switch (t.type) {
                case "NAME":
                case "TEXT":
                    var e = t.value;
                    this.next();
                    for (; t = this.eat(["NAME", "TEXT"]);) e += t.value;
                    return o.text(e);
                case "TAG_OPEN":
                    return this.xml();
                case "OPEN":
                    return this.directive();
                case "EXPR_OPEN":
                    return this.interplation();
                case "PART_OPEN":
                    return this.template();
                default:
                    this.error("Unexpected token: " + this.la()) } };
        f.xml = function() {
            var t, e, n, i;
            t = this.match("TAG_OPEN").value;
            e = this.attrs();
            i = this.eat("/");
            this.match(">");
            if (!i && !a.isVoidTag(t)) { n = this.program();
                if (!this.eat("TAG_CLOSE", t)) this.error("expect </" + t + "> gotno matched closeTag") }
            return o.element(t, e, n) };
        f.xentity = function(t) {
            var e = t.value,
                n;
            if ("NAME" === t.type) {
                if (this.eat("=")) n = this.attvalue();
                return o.attribute(e, n) } else {
                if ("if" !== e) this.error("current version. ONLY RULE #if #else #elseif is valid in tag, the rule #" + e + " is invalid");
                return this["if"](!0) } };
        f.attrs = function(t) {
            var e;
            if (!t) e = ["NAME", "OPEN"];
            else e = ["NAME"];
            var n = [],
                i;
            for (; i = this.eat(e);) n.push(this.xentity(i));
            return n };
        f.attvalue = function() {
            var t = this.ll();
            switch (t.type) {
                case "NAME":
                case "UNQ":
                case "STRING":
                    this.next();
                    var e = t.value;
                    if (~e.indexOf(s.BEGIN) && ~e.indexOf(s.END)) {
                        var n = !0;
                        var a = new i(e, { mode: 2 }).parse();
                        if (1 === a.length && "expression" === a[0].type) return a[0];
                        var r = [];
                        a.forEach(function(t) {
                            if (!t.constant) n = !1;
                            r.push(t.body || "'" + t.text.replace(/'/g, "\\'") + "'") });
                        r = "[" + r.join(",") + "].join('')";
                        e = o.expression(r, null, n) }
                    return e;
                case "EXPR_OPEN":
                    return this.interplation();
                default:
                    this.error("Unexpected token: " + this.la()) } };
        f.directive = function() {
            var t = this.ll().value;
            this.next();
            if ("function" == typeof this[t]) return this[t]();
            else this.error("Undefined directive[" + t + "]") };
        f.interplation = function() { this.match("EXPR_OPEN");
            var t = this.expression(!0);
            this.match("END");
            return t };
        f.include = function() {
            var t = this.expression();
            this.match("END");
            return o.template(t) };
        f["if"] = function(t) {
            var e = this.expression();
            var n = [],
                i = [];
            var a = n;
            var s = !t ? "statement" : "attrs";
            this.match("END");
            var r, l;
            for (; !(l = this.eat("CLOSE"));) { r = this.ll();
                if ("OPEN" === r.type) switch (r.value) {
                    case "else":
                        a = i;
                        this.next();
                        this.match("END");
                        break;
                    case "elseif":
                        this.next();
                        i.push(this["if"](t));
                        return o["if"](e, n, i);
                    default:
                        a.push(this[s](!0)) } else a.push(this[s](!0)) }
            if ("if" !== l.value) this.error("Unmatched if directive");
            return o["if"](e, n, i) };
        f.list = function() {
            var t = this.expression(),
                e, n;
            var i = [],
                a = [];
            var s = i;
            this.match("IDENT", "as");
            e = this.match("IDENT").value;
            this.match("END");
            for (; !(n = this.eat("CLOSE"));)
                if (this.eat("OPEN", "else")) { s = a;
                    this.match("END") } else s.push(this.statement());
            if ("list" !== n.value) this.error("expect list got /" + n.value + " ", n.pos);
            return o.list(t, e, i, a) };
        f.expression = function() {
            var t;
            if (this.eat("@(")) { t = this.expr();
                t.once = !0;
                this.match(")") } else t = this.expr();
            return t };
        f.expr = function() { this.depend = [];
            var t = this.filter();
            var e = t.get || t;
            var n = t.set;
            return o.expression(e, n, !this.depend.length) };
        f.filter = function() {
            var t = this.assign();
            var e = this.eat("|");
            var n = [],
                i, s, o = "t",
                r = t.set,
                l, d = "";
            if (e) {
                if (r) i = [];
                s = "(function(" + o + "){";
                do { d = o + " = " + c + "._f_('" + this.match("IDENT").value + "' ).get.call( " + a.ctxName + "," + o;
                    if (this.eat(":")) d += ", " + this.arguments("|").join(",") + ");";
                    else d += ");";
                    n.push(d);
                    i && i.unshift(d.replace(" ).get.call", " ).set.call")) } while (e = this.eat("|"));
                n.push("return " + o);
                i && i.push("return " + o);
                l = s + n.join("") + "})(" + t.get + ")";
                if (i) r = r.replace(a.setName, s + i.join("") + "})(" + a.setName + ")");
                return this.getset(l, r) }
            return t };
        f.assign = function() {
            var t = this.condition(),
                e;
            if (e = this.eat(["=", "+=", "-=", "*=", "/=", "%="])) {
                if (!t.set) this.error("invalid lefthand expression in assignment expression");
                return this.getset(t.set.replace("," + a.setName, "," + this.condition().get).replace("'='", "'" + e.type + "'"), t.set);
            }
            return t
        };
        f.condition = function() {
            var t = this.or();
            if (this.eat("?")) return this.getset([t.get + "?", this.assign().get, this.match(":").type, this.assign().get].join(""));
            else return t };
        f.or = function() {
            var t = this.and();
            if (this.eat("||")) return this.getset(t.get + "||" + this.or().get);
            else return t };
        f.and = function() {
            var t = this.equal();
            if (this.eat("&&")) return this.getset(t.get + "&&" + this.and().get);
            else return t };
        f.equal = function() {
            var t = this.relation(),
                e;
            if (e = this.eat(["==", "!=", "===", "!=="])) return this.getset(t.get + e.type + this.equal().get);
            else return t };
        f.relation = function() {
            var t = this.additive(),
                e;
            if (e = this.eat(["<", ">", ">=", "<="]) || this.eat("IDENT", "in")) return this.getset(t.get + e.value + this.relation().get);
            else return t };
        f.additive = function() {
            var t = this.multive(),
                e;
            if (e = this.eat(["+", "-"])) return this.getset(t.get + e.value + this.additive().get);
            else return t };
        f.multive = function() {
            var t = this.range(),
                e;
            if (e = this.eat(["*", "/", "%"])) return this.getset(t.get + e.type + this.multive().get);
            else return t };
        f.range = function() {
            var t = this.unary(),
                e, n;
            if (e = this.eat("..")) { n = this.unary();
                var i = "(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })(" + t.get + "," + n.get + ")";
                return this.getset(i) }
            return t };
        f.unary = function() {
            var t;
            if (t = this.eat(["+", "-", "~", "!"])) return this.getset("(" + t.type + this.unary().get + ")");
            else return this.member() };
        f.member = function(t, e, n, i) {
            var s, o, r;
            var h = !1;
            if (!t) { o = this.primary();
                var f = typeof o;
                if ("string" === f) { n = [];
                    n.push(o);
                    e = o;
                    r = d + "." + o;
                    t = c + "._sg_('" + o + "', " + l + ", " + d + ")";
                    h = !0 } else if ("this" === o.get) { t = c;
                    n = ["this"] } else { n = null;
                    t = o.get } } else if ("string" == typeof e && u(e)) n.push(e);
            else {
                if (n && n.length) this.depend.push(n);
                n = null }
            if (s = this.eat(["[", ".", "("])) switch (s.type) {
                case ".":
                    var _ = this.match("IDENT").value;
                    i = t;
                    if ("(" !== this.la()) t = c + "._sg_('" + _ + "', " + t + ")";
                    else t += "['" + _ + "']";
                    return this.member(t, _, n, i);
                case "[":
                    o = this.assign();
                    i = t;
                    if ("(" !== this.la()) t = c + "._sg_(" + o.get + ", " + t + ")";
                    else t += "[" + o.get + "]";
                    this.match("]");
                    return this.member(t, o, n, i);
                case "(":
                    var p = this.arguments().join(",");
                    t = t + "(" + p + ")";
                    this.match(")");
                    return this.member(t, null, n) }
            if (n && n.length) this.depend.push(n);
            var m = { get: t };
            if (e) m.set = c + "._ss_(" + (e.get ? e.get : "'" + e + "'") + "," + a.setName + "," + (i ? i : a.varName) + ", '=', " + (h ? 1 : 0) + ")";
            return m };
        f.arguments = function(t) { t = t || ")";
            var e = [];
            do
                if (this.la() !== t) e.push(this.assign().get);
            while (this.eat(","));
            return e };
        f.primary = function() {
            var t = this.ll();
            switch (t.type) {
                case "{":
                    return this.object();
                case "[":
                    return this.array();
                case "(":
                    return this.paren();
                case "STRING":
                    this.next();
                    return this.getset("'" + t.value + "'");
                case "NUMBER":
                    this.next();
                    return this.getset("" + t.value);
                case "IDENT":
                    this.next();
                    if (h(t.value)) return this.getset(t.value);
                    else return t.value;
                default:
                    this.error("Unexpected Token: " + t.type) } };
        f.object = function() {
            var t = [this.match("{").type];
            var e = this.eat(["STRING", "IDENT", "NUMBER"]);
            for (; e;) { t.push("'" + e.value + "'" + this.match(":").type);
                var n = this.assign().get;
                t.push(n);
                e = null;
                if (this.eat(",") && (e = this.eat(["STRING", "IDENT", "NUMBER"]))) t.push(",") }
            t.push(this.match("}").type);
            return { get: t.join("") } };
        f.array = function() {
            var t = [this.match("[").type],
                e;
            if (this.eat("]")) t.push("]");
            else {
                for (; e = this.assign();) { t.push(e.get);
                    if (this.eat(",")) t.push(",");
                    else break }
                t.push(this.match("]").type) }
            return { get: t.join("") } };
        f.paren = function() { this.match("(");
            var t = this.filter();
            t.get = "(" + t.get + ")";
            this.match(")");
            return t };
        f.getset = function(t, e) {
            return { get: t, set: e } };
        n.exports = i
    });
    t.register("regularjs/src/helper/extend.js", function(t, e, n) {
        function i(t, e, n) {
            return function() {
                var i = this.supr;
                this.supr = n[t];
                var a = e.apply(this, arguments);
                this.supr = i;
                return a } }

        function a(t, e, n) {
            for (var a in e)
                if (e.hasOwnProperty(a)) t[a] = r(e[a]) && r(n[a]) && o.test(e[a]) ? i(a, e[a], n) : e[a] }
        var s = e("../util.js"),
            o = /xy/.test(function() { "xy" }) ? /\bsupr\b/ : /.*/,
            r = function(t) {
                return "function" == typeof t };
        var l = ["events", "data", "computed"],
            c = l.length;
        n.exports = function d(t) {
            function e() { i.apply(this, arguments) }

            function n(t) {
                var e = c;
                for (; e--;) {
                    var n = l[e];
                    if (t.hasOwnProperty(n) && o.hasOwnProperty(n)) { s.extend(o[n], t[n], !0);
                        delete t[n] } }
                a(o, t, r);
                return this }
            t = t || {};
            var i = this,
                o, r = i && i.prototype || {};
            if ("function" == typeof t) { o = t.prototype;
                t.implement = n;
                t.extend = d;
                return t }
            o = s.createProto(e, r);
            e.implement = n;
            e.implement(t);
            if (i.__after__) i.__after__.call(e, i, t);
            e.extend = d;
            return e } });
    t.register("regularjs/src/helper/shim.js", function(t, e, n) {
        function i(t, e) {
            for (var n in e)
                if (void 0 === t[n]) t[n] = e[n] }
        var a = [].slice;
        var s = {}.toString;
        i(String.prototype, { trim: function() {
                return this.replace(/^\s+|\s+$/g, "") } });
        i(Array.prototype, { indexOf: function(t, e) { e = e || 0;
                for (var n = e, i = this.length; n < i; n++)
                    if (this[n] === t) return n;
                return -1 }, forEach: function(t, e) {
                for (var n = 0, i = this.length; n < i; n++) t.call(e, this[n], n, this) }, filter: function(t, e) {
                var n = [];
                for (var i = 0, a = this.length; i < a; i++) {
                    var s = t.call(e, this[i], i, this);
                    if (s) n.push(this[i]) }
                return n }, map: function(t, e) {
                var n = [];
                for (var i = 0, a = this.length; i < a; i++) n.push(t.call(e, this[i], i, this));
                return n } });
        i(Function.prototype, { bind: function(t) {
                var e = this;
                var n = a.call(arguments, 1);
                return function() {
                    var i = n.concat(a.call(arguments));
                    return e.apply(t, i) } } });
        i(Object, { keys: function(t) {
                var e = [];
                for (var n in t)
                    if (t.hasOwnProperty(n)) e.push(n);
                return e } });
        i(Date, { now: function() {
                return +new Date } });
        i(Array, { isArray: function(t) {
                return "[object Array]" === s.call(t) } }) });
    t.register("regularjs/src/helper/parse.js", function(t, e, n) {
        var i = e("../env").exprCache;
        var a = e("../util");
        var s = e("../parser/Parser.js");
        n.exports = { expression: function(t, e) {
                if ("string" == typeof t && (t = t.trim())) t = i.get(t) || i.set(t, new s(t, { mode: 2, expression: !0 }).expression());
                if (t) return t }, parse: function(t) {
                return new s(t).parse() } } });
    t.register("regularjs/src/helper/watcher.js", function(t, e, n) {
        function i() {}
        var a = e("../util.js");
        var s = e("./parse.js").expression;
        var o = { $watch: function(t, e, n) {
                var i, o, r, l, c = this.__ext__;
                if (!this._watchers) this._watchers = [];
                n = n || {};
                if (n === !0) n = { deep: !0 };
                var d = a.uid("w_");
                if (Array.isArray(t)) {
                    var u = [];
                    for (var h = 0, f = t.length; h < f; h++) u.push(this.$expression(t[h]).get);
                    var _ = [];
                    r = function(t) {
                        var e = !0;
                        for (var n = 0, i = u.length; n < i; n++) {
                            var s = u[n](t, c);
                            if (!a.equals(s, _[n])) { e = !1;
                                _[n] = a.clone(s) } }
                        return e ? !1 : _ } } else { t = this._touchExpr(s(t));
                    i = t.get;
                    o = t.once }
                var p = { id: d, get: i, fn: e, once: o, force: n.force, test: r, deep: n.deep, last: n.sync ? i(this) : void 0 };
                this._watchers.push(p);
                l = this._records && this._records.length;
                if (l) this._records[l - 1].push(d);
                if (n.init === !0) { this.$phase = "digest";
                    this._checkSingleWatch(p, this._watchers.length - 1);
                    this.$phase = null }
                return p }, $unwatch: function(t) { t = t.uid || t;
                if (!this._watchers) this._watchers = [];
                if (Array.isArray(t))
                    for (var e = 0, n = t.length; e < n; e++) this.$unwatch(t[e]);
                else {
                    var i = this._watchers,
                        a, s;
                    if (!t || !i || !(s = i.length)) return;
                    for (; s--;) { a = i[s];
                        if (a && a.id === t) i.splice(s, 1) } } }, $expression: function(t) {
                return this._touchExpr(s(t)) }, $digest: function() {
                if ("digest" !== this.$phase && !this._mute) { this.$phase = "digest";
                    var t = !1,
                        e = 0;
                    for (; t = this._digest();)
                        if (++e > 20) throw "there may a circular dependencies reaches";
                    if (e > 0 && this.$emit) this.$emit("$update");
                    this.$phase = null } }, _digest: function() {
                var t = this._watchers;
                var e = !1,
                    n, i, a;
                if (t && t.length)
                    for (var s = 0, o = t.length; s < o; s++) { i = t[s];
                        a = this._checkSingleWatch(i, s);
                        if (a) e = !0 }
                n = this._children;
                if (n && n.length)
                    for (var r = 0, l = n.length; r < l; r++)
                        if (n[r]._digest()) e = !0;
                return e }, _checkSingleWatch: function(t, e) {
                var n = !1;
                if (t)
                    if (t.test) {
                        var i = t.test(this);
                        if (i) { n = !0;
                            t.fn.apply(this, i) } } else {
                        var s = t.get(this);
                        var o = t.last;
                        var r = !0;
                        if ("object" === a.typeOf(s) && t.deep)
                            if (!t.last) r = !1;
                            else {
                                for (var l in s)
                                    if (t.last[l] !== s[l]) { r = !1;
                                        break }
                                if (r !== !1)
                                    for (var c in o)
                                        if (o[c] !== s[c]) { r = !1;
                                            break } }
                        else r = a.equals(s, t.last);
                        if (r === !1 || t.force) { r = !1;
                            t.force = null;
                            n = !0;
                            t.fn.call(this, s, t.last);
                            if ("object" != typeof s || t.deep) t.last = a.clone(s);
                            else t.last = s } else if ("array" === a.typeOf(r) && r.length) { t.last = a.clone(s);
                            t.fn.call(this, s, r);
                            n = !0 } else r = !0;
                        if (n && t.once) this._watchers.splice(e, 1);
                        return n } }, $set: function(t, e) {
                if (null != t) {
                    var n = a.typeOf(t);
                    if ("string" === n || "expression" === t.type) { t = this.$expression(t);
                        t.set(this, e) } else if ("function" === n) t.call(this, this.data);
                    else
                        for (var i in t) this.$set(i, t[i]) } }, $get: function(t) {
                return this.$expression(t).get(this) }, $update: function() { this.$set.apply(this, arguments);
                var t = this;
                do {
                    if (t.data.isolate || !t.$parent) break;
                    t = t.$parent } while (t);
                t.$digest() }, _record: function() {
                if (!this._records) this._records = [];
                this._records.push([]) }, _release: function() {
                return this._records.pop() } };
        a.extend(i.prototype, o);
        i.mixTo = function(t) { t = "function" == typeof t ? t.prototype : t;
            return a.extend(t, o) };
        n.exports = i });
    t.register("regularjs/src/helper/event.js", function(t, e, n) {
        function i() {
            if (arguments.length) this.$on.apply(this, arguments) }
        var a = [].slice,
            s = e("../util.js");
        var o = { $on: function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) this.$on(n, t[n]);
                else {
                    var i = this;
                    var a = i._handles || (i._handles = {}),
                        s = a[t] || (a[t] = []);
                    s.push(e) }
                return this }, $off: function(t, e) {
                var n = this;
                if (n._handles) {
                    if (!t) this._handles = {};
                    var i = n._handles,
                        a;
                    if (a = i[t]) {
                        if (!e) { i[t] = [];
                            return n }
                        for (var s = 0, o = a.length; s < o; s++)
                            if (e === a[s]) { a.splice(s, 1);
                                return n } }
                    return n } }, $emit: function(t) {
                var e = this;
                var n = e._handles,
                    i, s, o;
                if (t) {
                    var s = a.call(arguments, 1);
                    var o = t;
                    if (!n) return e;
                    if (i = n[o.slice(1)])
                        for (var r = 0, l = i.length; r < l; r++) i[r].apply(e, s);
                    if (!(i = n[o])) return e;
                    for (var c = 0, l = i.length; c < l; c++) i[c].apply(e, s);
                    return e } }, $broadcast: function() {} };
        s.extend(i.prototype, o);
        i.mixTo = function(t) { t = "function" == typeof t ? t.prototype : t;
            s.extend(t, o) };
        n.exports = i });
    t.register("regularjs/src/helper/animate.js", function(t, e, n) {
        function i(t) {
            var e = 0,
                n = 0,
                i = 0,
                s = 0,
                o = 0,
                r = 5 / 3,
                l;
            if (window.getComputedStyle) { l = window.getComputedStyle(t), n = a(l[u + "Duration"]) || n;
                i = a(l[u + "Delay"]) || i;
                s = a(l[h + "Duration"]) || s;
                o = a(l[h + "Delay"]) || o;
                e = Math.max(n + i, s + o) }
            return 1e3 * e * r }

        function a(t) {
            var e = 0,
                n;
            if (!t) return 0;
            t.split(",").forEach(function(t) { n = parseFloat(t);
                if (n > e) e = n });
            return e }
        var s = e("../util");
        var o = e("../dom.js");
        var r = {};
        var l = e("../env.js");
        var c = "transitionend",
            d = "animationend",
            u = "transition",
            h = "animation";
        if (!("ontransitionend" in window))
            if ("onwebkittransitionend" in window) { c += " webkitTransitionEnd";
                u = "webkitTransition" } else if ("onotransitionend" in o.tNode || "Opera" === navigator.appName) { c += " oTransitionEnd";
            u = "oTransition" }
        if (!("onanimationend" in window))
            if ("onwebkitanimationend" in window) { d += " webkitAnimationEnd";
                h = "webkitAnimation" } else if ("onoanimationend" in o.tNode) { d += " oAnimationEnd";
            h = "oAnimation" }
        r.inject = function(t, e, n, i) { i = i || s.noop;
            if (Array.isArray(t)) {
                var a = o.fragment();
                var r = 0;
                for (var l = 0, c = t.length; l < c; l++) a.appendChild(t[l]);
                o.inject(a, e, n);
                var d = function() { r++;
                    if (r === c) i() };
                if (c === r) i();
                for (l = 0; l < c; l++)
                    if (t[l].onenter) t[l].onenter(d);
                    else d() } else { o.inject(t, e, n);
                if (t.onenter) t.onenter(i);
                else i() } };
        r.remove = function(t, e) {
            if (t.onleave) t.onleave(function() { f(t, e) });
            else f(t, e) };
        var f = function(t, e) { o.remove(t);
            e && e() };
        r.startClassAnimate = function(t, e, n, a) {
            var r, u, h, f;
            if (!d && !c || l.isRunning) return n();
            f = s.once(function _() {
                if (h) clearTimeout(h);
                if (2 === a) o.delClass(t, r);
                if (3 !== a) o.delClass(t, e);
                o.off(t, d, f);
                o.off(t, c, f);
                n() });
            if (2 === a) { o.addClass(t, e);
                r = e.split(/\s+/).map(function(t) {
                    return t + "-active" }).join(" ");
                o.nextReflow(function() { o.addClass(t, r);
                    u = i(t);
                    h = setTimeout(f, u) }) } else o.nextReflow(function() { o.addClass(t, e);
                u = i(t);
                h = setTimeout(f, u) });
            o.on(t, d, f);
            o.on(t, c, f);
            return f };
        r.startStyleAnimate = function(t, e, n) {
            var a, r, l;
            o.nextReflow(function() { o.css(t, e);
                a = i(t);
                l = setTimeout(r, a) });
            r = s.once(function u() {
                if (l) clearTimeout(l);
                o.off(t, d, r);
                o.off(t, c, r);
                n() });
            o.on(t, d, r);
            o.on(t, c, r);
            return r };
        n.exports = r
    });
    t.register("regularjs/src/helper/combine.js", function(t, e, n) {
        var i = e("../dom.js");
        var a = n.exports = { node: function(t) {
                var e, n;
                if (t.element) return t.element;
                if ("function" == typeof t.node) return t.node();
                if ("number" == typeof t.nodeType) return t;
                if (t.group) return a.node(t.group);
                if (e = t.children) {
                    if (1 === e.length) return a.node(e[0]);
                    var i = [];
                    for (var s = 0, o = e.length; s < o; s++) { n = a.node(e[s]);
                        if (Array.isArray(n)) i.push.apply(i, n);
                        else i.push(n) }
                    return i } }, last: function(t) {
                var e = t.children;
                if ("function" == typeof t.last) return t.last();
                if ("number" == typeof t.nodeType) return t;
                if (e && e.length) return a.last(e[e.length - 1]);
                if (t.group) return a.last(t.group);
                else; }, destroy: function(t, e) {
                if (t) {
                    if (Array.isArray(t))
                        for (var n = 0, s = t.length; n < s; n++) a.destroy(t[n], e);
                    var o = t.children;
                    if ("function" == typeof t.destroy) return t.destroy(e);
                    if ("number" == typeof t.nodeType && e) i.remove(t);
                    if (o && o.length) { a.destroy(o, !0);
                        t.children = null } } } } });
    t.register("regularjs/src/helper/entities.js", function(t, e, n) {
        var i = { quot: 34, amp: 38, apos: 39, lt: 60, gt: 62, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, copy: 169, ordf: 170, laquo: 171, not: 172, shy: 173, reg: 174, macr: 175, deg: 176, plusmn: 177, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, sup1: 185, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, Agrave: 192, Aacute: 193, Acirc: 194, Atilde: 195, Auml: 196, Aring: 197, AElig: 198, Ccedil: 199, Egrave: 200, Eacute: 201, Ecirc: 202, Euml: 203, Igrave: 204, Iacute: 205, Icirc: 206, Iuml: 207, ETH: 208, Ntilde: 209, Ograve: 210, Oacute: 211, Ocirc: 212, Otilde: 213, Ouml: 214, times: 215, Oslash: 216, Ugrave: 217, Uacute: 218, Ucirc: 219, Uuml: 220, Yacute: 221, THORN: 222, szlig: 223, agrave: 224, aacute: 225, acirc: 226, atilde: 227, auml: 228, aring: 229, aelig: 230, ccedil: 231, egrave: 232, eacute: 233, ecirc: 234, euml: 235, igrave: 236, iacute: 237, icirc: 238, iuml: 239, eth: 240, ntilde: 241, ograve: 242, oacute: 243, ocirc: 244, otilde: 245, ouml: 246, divide: 247, oslash: 248, ugrave: 249, uacute: 250, ucirc: 251, uuml: 252, yacute: 253, thorn: 254, yuml: 255, fnof: 402, Alpha: 913, Beta: 914, Gamma: 915, Delta: 916, Epsilon: 917, Zeta: 918, Eta: 919, Theta: 920, Iota: 921, Kappa: 922, Lambda: 923, Mu: 924, Nu: 925, Xi: 926, Omicron: 927, Pi: 928, Rho: 929, Sigma: 931, Tau: 932, Upsilon: 933, Phi: 934, Chi: 935, Psi: 936, Omega: 937, alpha: 945, beta: 946, gamma: 947, delta: 948, epsilon: 949, zeta: 950, eta: 951, theta: 952, iota: 953, kappa: 954, lambda: 955, mu: 956, nu: 957, xi: 958, omicron: 959, pi: 960, rho: 961, sigmaf: 962, sigma: 963, tau: 964, upsilon: 965, phi: 966, chi: 967, psi: 968, omega: 969, thetasym: 977, upsih: 978, piv: 982, bull: 8226, hellip: 8230, prime: 8242, Prime: 8243, oline: 8254, frasl: 8260, weierp: 8472, image: 8465, real: 8476, trade: 8482, alefsym: 8501, larr: 8592, uarr: 8593, rarr: 8594, darr: 8595, harr: 8596, crarr: 8629, lArr: 8656, uArr: 8657, rArr: 8658, dArr: 8659, hArr: 8660, forall: 8704, part: 8706, exist: 8707, empty: 8709, nabla: 8711, isin: 8712, notin: 8713, ni: 8715, prod: 8719, sum: 8721, minus: 8722, lowast: 8727, radic: 8730, prop: 8733, infin: 8734, ang: 8736, and: 8743, or: 8744, cap: 8745, cup: 8746, "int": 8747, there4: 8756, sim: 8764, cong: 8773, asymp: 8776, ne: 8800, equiv: 8801, le: 8804, ge: 8805, sub: 8834, sup: 8835, nsub: 8836, sube: 8838, supe: 8839, oplus: 8853, otimes: 8855, perp: 8869, sdot: 8901, lceil: 8968, rceil: 8969, lfloor: 8970, rfloor: 8971, lang: 9001, rang: 9002, loz: 9674, spades: 9824, clubs: 9827, hearts: 9829, diams: 9830, OElig: 338, oelig: 339, Scaron: 352, scaron: 353, Yuml: 376, circ: 710, tilde: 732, ensp: 8194, emsp: 8195, thinsp: 8201, zwnj: 8204, zwj: 8205, lrm: 8206, rlm: 8207, ndash: 8211, mdash: 8212, lsquo: 8216, rsquo: 8217, sbquo: 8218, ldquo: 8220, rdquo: 8221, bdquo: 8222, dagger: 8224, Dagger: 8225, permil: 8240, lsaquo: 8249, rsaquo: 8250, euro: 8364 };
        n.exports = i });
    t.register("regularjs/src/helper/filter.js", function(t, e, n) {
        var i = n.exports = {};
        i.json = { get: function(t) {
                return "undefined" != typeof JSON ? JSON.stringify(t) : t }, set: function(t) {
                return "undefined" != typeof JSON ? JSON.parse(t) : t } };
        i.last = function(t) {
            return t && t[t.length - 1] };
        i.average = function(t, e) { t = t || [];
            return t.length ? i.total(t, e) / t.length : 0 };
        i.total = function(t, e) {
            var n = 0;
            if (t) { t.forEach(function(t) { n += e ? t[e] : t });
                return n } } });
    t.register("regularjs/src/directive/base.js", function(t, e, n) {
        var i = e("../util.js");
        var a = e("../dom.js");
        var s = e("../helper/animate.js");
        var o = e("../Regular.js");
        e("./event.js");
        e("./form.js");
        o.directive("r-class", function(t, e) { this.$watch(e, function(e) {
                var n = " " + t.className.replace(/\s+/g, " ") + " ";
                for (var i in e)
                    if (e.hasOwnProperty(i)) { n = n.replace(" " + i + " ", " ");
                        if (e[i] === !0) n += i + " " }
                t.className = n.trim() }, !0) });
        o.directive("r-style", function(t, e) { this.$watch(e, function(e) {
                for (var n in e)
                    if (e.hasOwnProperty(n)) a.css(t, n, e[n]) }, !0) });
        o.directive("r-hide", function(t, e) {
            var n = null,
                i;
            this.$watch(e, function(e) {
                var a = !!e;
                if (a !== n) { n = a;
                    if (a)
                        if (t.onleave) i = t.onleave(function() { t.style.display = "none";
                            i = null });
                        else t.style.display = "none";
                    else {
                        if (i) i();
                        t.style.display = "";
                        if (t.onenter) t.onenter() } } }) });
        o.directive("r-html", function(t, e) { this.$watch(e, function(e) { e = e || "";
                a.html(t, e) }, { force: !0 }) }) });
    t.register("regularjs/src/directive/form.js", function(t, e, n) {
        function i(t, e) {
            function n() { e.set(i, this.value);
                a.last = this.value;
                i.$update() }
            var i = this;
            var a = this.$watch(e, function(e) {
                var n = r.slice(t.getElementsByTagName("option"));
                n.forEach(function(n, i) {
                    if (n.value == e) t.selectedIndex = i }) });
            l.on(t, "change", n);
            if (void 0 === e.get(i) && t.value) e.set(i, t.value);
            return function s() { l.off(t, "change", n) } }

        function a(t, e) {
            var n = this;
            var i = this.$watch(e, function(e) {
                if (t.value !== e) t.value = null == e ? "" : "" + e });
            var a = function s(t) {
                var a = this;
                if ("cut" === t.type || "paste" === t.type) r.nextTick(function() {
                    var t = a.value;
                    e.set(n, t);
                    i.last = t;
                    n.$update() });
                else {
                    var s = a.value;
                    e.set(n, s);
                    i.last = s;
                    n.$update() } };
            if (9 !== l.msie && "oninput" in l.tNode) t.addEventListener("input", a);
            else { l.on(t, "paste", a);
                l.on(t, "keyup", a);
                l.on(t, "cut", a);
                l.on(t, "change", a) }
            if (void 0 === e.get(n) && t.value) e.set(n, t.value);
            return function o() {
                if (9 !== l.msie && "oninput" in l.tNode) t.removeEventListener("input", a);
                else { l.off(t, "paste", a);
                    l.off(t, "keyup", a);
                    l.off(t, "cut", a);
                    l.off(t, "change", a) } } }

        function s(t, e) {
            var n = this;
            var i = this.$watch(e, function(e) { l.attr(t, "checked", !!e) });
            var a = function s() {
                var t = this.checked;
                e.set(n, t);
                i.last = t;
                n.$update() };
            if (e.set) l.on(t, "change", a);
            if (void 0 === e.get(n)) e.set(n, !!t.checked);
            return function o() {
                if (e.set) l.off(t, "change", a) } }

        function o(t, e) {
            var n = this;
            var i = this.$watch(e, function(e) {
                if (e == t.value) t.checked = !0;
                else t.checked = !1 });
            var a = function s() {
                var t = this.value;
                e.set(n, t);
                n.$update() };
            if (e.set) l.on(t, "change", a);
            if (void 0 === e.get(n))
                if (t.checked) e.set(n, t.value);
            return function o() {
                if (e.set) l.off(t, "change", a) } }
        var r = e("../util.js");
        var l = e("../dom.js");
        var c = e("../Regular.js");
        var d = { text: a, select: i, checkbox: s, radio: o };
        c.directive("r-model", function(t, e) {
            var n = t.tagName.toLowerCase();
            var i = n;
            if ("input" === i) i = t.type || "text";
            else if ("textarea" === i) i = "text";
            if ("string" == typeof e) e = this.$expression(e);
            if (d[i]) return d[i].call(this, t, e);
            else if ("input" === n) return d.text.call(this, t, e) }) });
    t.register("regularjs/src/directive/animation.js", function(t, e, n) {
        function i(t) {
            var e = [],
                n = 0,
                i = s.noop;
            var a;
            var o = { type: t, start: function(t) { a = s.uid();
                    if ("function" == typeof t) i = t;
                    if (n > 0) n = 0;
                    else o.step();
                    return o.compelete }, compelete: function() { a = null;
                    i && i();
                    i = s.noop;
                    n = 0 }, step: function() {
                    if (e[n]) e[n](o.done.bind(o, a)) }, done: function(t) {
                    if (t === a)
                        if (n < e.length - 1) { n++;
                            o.step() } else o.compelete() }, push: function(t) { e.push(t) } };
            return o }

        function a(t, e) {
            function n(t) { u && d.push(u);
                u = i(t) }

            function a(t, e) {
                if (e) t() }

            function s(t) {
                return function() { delete t.onenter;
                    delete t.onleave } }
            e = e.trim();
            var o = e.split(";"),
                r, c = this,
                d = [],
                u, h = [],
                p, m, g, v = 0,
                $, y, b = this;
            for (var w = 0, C = o.length; w < C; w++) { r = o[w];
                $ = r.split(":");
                m = $[0] && $[0].trim();
                g = $[1] && $[1].trim();
                if (m)
                    if (m !== f)
                        if (m !== _) {
                            var y = l.animation(m);
                            if (y && u) u.push(y.call(this, { element: t, done: u.done, param: g }));
                            else throw "you need start with `on` or `event` in r-animation" } else { n(g);
                            if ("leave" === g) { t.onleave = u.start;
                                h.push(s(t)) } else if ("enter" === g) { t.onenter = u.start;
                                h.push(s(t)) } else if ("on" + g in t) h.push(this._handleEvent(t, g, u.start));
                            else { this.$on(g, u.start);
                                h.push(this.$off.bind(this, g, u.start)) } }
                else { n("when");
                    this.$watch(g, a.bind(this, u.start)) } else; }
            if (h.length) return function() { h.forEach(function(t) { t() }) } }
        var s = e("../util.js"),
            o = e("../helper/animate.js"),
            r = e("../dom.js"),
            l = e("../Regular.js");
        var c = /^[-\w]+(\s[-\w]+)*$/,
            d = /[\r\n\f ]*,[\r\n\f ]*(?=\w+\:)/,
            u = /^\{.*\}$/,
            h = /\s+/,
            f = "when",
            _ = "on",
            p = "then";
        l._addProtoInheritCache("animation");
        l.animation({
            wait: function(t) {
                var e = parseInt(t.param) || 0;
                return function(t) { setTimeout(t, e) }
            },
            "class": function(t) {
                var e = t.param.split(","),
                    n = e[0] || "",
                    i = parseInt(e[1]) || 1;
                return function(e) { o.startClassAnimate(t.element, n, e, i) } },
            call: function(t) {
                var e = this.$expression(t.param).get,
                    n = this;
                return function(t) { e(n);
                    n.$update();
                    t() } },
            emit: function(t) {
                var e = t.param;
                var n = e.split(","),
                    i = n[0] || "",
                    a = n[1] ? this.$expression(n[1]).get : null;
                if (!i) throw "you shoud specified a eventname in emit command";
                var s = this;
                return function(t) { s.$emit(i, a ? a(s) : void 0);
                    t() } },
            style: function(t) {
                var e = {},
                    n = t.param,
                    i = n.split(","),
                    a;
                i.forEach(function(t) { t = t.trim();
                    if (t) {
                        var n = t.split(h),
                            i = n.shift(),
                            s = n.join(" ");
                        if (!i || !s) throw "invalid style in command: style";
                        e[i] = s;
                        a = !0 } });
                return function(n) {
                    if (a) o.startStyleAnimate(t.element, e, n);
                    else n() } }
        });
        l.directive("r-animation", a);
        l.directive("r-sequence", a)
    });
    t.register("regularjs/src/directive/event.js", function(t, e, n) {
        function i(t, e) {
            var n = t.target;
            for (; n && n !== s.doc;) {
                for (var i = 0, a = e.length; i < a; i++)
                    if (e[i].element === n) e[i].fire(t);
                n = n.parentNode } }
        var a = e("../util.js");
        var s = e("../dom.js");
        var o = e("../Regular.js");
        o._addProtoInheritCache("event");
        o.event("enter", function(t, e) {
            function n(t) {
                if (13 === t.which) { t.preventDefault();
                    e(t) } }
            a.log("on-enter will be removed in 0.4.0", "error");
            s.on(t, "keypress", n);
            return function() { s.off(t, "keypress", n) } });
        o.directive(/^on-\w+$/, function(t, e, n, i) {
            if (n && e) {
                var a = n.split("-")[1];
                return this._handleEvent(t, a, e, i) } });
        o.directive(/^delegate-\w+$/, function(t, e, n, o) {
            function r(t) { i(t, c[d]) }
            var l = this.$root;
            var c = l._delegates || (l._delegates = {});
            if (n && e) {
                var d = n.split("-")[1];
                var u = a.handleEvent.call(this, e, d);
                if (!c[d]) { c[d] = [];
                    l.$on("$inject", function(t) {
                        var e = this.parentNode;
                        if (e) s.off(e, d, r);
                        s.on(t, d, r) });
                    l.$on("$destroy", function() {
                        if (l.parentNode) s.off(l.parentNode, d, r);
                        l._delegates[d] = null }) }
                var h = { element: t, fire: u };
                c[d].push(h);
                return function() {
                    var t = c[d];
                    if (t && t.length)
                        for (var e = 0, n = t.length; e < n; e++)
                            if (t[e] === h) t.splice(e, 1) } } }) });
    t.register("regularjs/src/module/timeout.js", function(t, e, n) {
        function i(t) { t.implement({ $timeout: function(t, e) { e = e || 0;
                    return setTimeout(function() { t.call(this);
                        this.$update() }.bind(this), e) }, $interval: function(t, e) { e = e || 1e3 / 60;
                    return setInterval(function() { t.call(this);
                        this.$update() }.bind(this), e) } }) }
        var a = e("../Regular.js");
        a.plugin("timeout", i);
        a.plugin("$timeout", i) });
    t.alias("regularjs/src/index.js", "regularjs/index.js");
    if ("object" == typeof exports) module.exports = t("regularjs");
    else if ("function" == typeof define && define.amd) define(function() {
        return t("regularjs") });
    else window["Regular"] = t("regularjs")
}();
I$(644, function(t, e, n, i, a, s) { n.__handleFileLabelClick = function() {};
    return n });
I$(609, function(t, e, n, i, a, s, o) {
    if ("gecko" === t._$KERNEL.engine) I$(645, function() { n.__handleFileLabelClick = function() {
            var t = function(t) { e._$stop(t);
                e._$getElement(t, "t:label").control.click() };
            return function(n) { e._$addEvent(n, "click", t) } }() });
    return n }, 78, 3, 644);
I$(516, function(t, e, n, i, a, s, o, r, l, c) {
    var d = {},
        u = e._$pushCSSText(".#<uispace>{position:absolute;width:0;height:0;overflow:hidden;}");
    o._$bind = function() {
        var t = function(t) {
            var e = d[t];
            if (!e) { e = {};
                d[t] = e }
            return e };
        var s = function(t, e) {
            if (e) {
                var n = [];
                i._$loop(e, function(t, e) { n.push('<input type="hidden" name="' + e + '" value="' + t + '">') });
                t.insertAdjacentHTML("afterBegin", n.join("")) } };
        var o = function(t, n, i, a, o) {
            var r, l = d[t],
                c = u + " " + (i || "");
            n = e._$get(n);
            if (n) { r = e._$create("div", c);
                n.appendChild(r);
                e._$dataset(n, "id", t);
                s(n, a) } else { r = e._$create("form", c);
                e._$dataset(r, "id", t);
                s(r, a);
                (o || document.body).appendChild(r) }
            l.pid = e._$id(r) };
        var c = function(t, i) {
            var a = i.accept || "";
            if (a) a = 'accept="' + a + '"';
            var s = "";
            if (i.multiple) s = 'multiple="true"';
            var i = d[t],
                o = t + "-" + i.nmb,
                r = e._$html2node('<input type="file" ' + s + " " + a + ' contenteditable="false" id="' + o + '"/>');
            i.nmb++;
            e._$get(i.pid).appendChild(r);
            n._$addEvent(r, "change", h);
            return o };
        var h = function(t) {
            var i = n._$getElement(t),
                a = i.id,
                s = a.split("-"),
                o = d[s[0]];
            if (i.value) {
                if (o.multiple) e._$get(o.lab).htmlFor = c(s[0], o);
                if (!i.name) {
                    var r = "";
                    i.name = o.name + r }
                o.onchange({ id: a, form: i.form, target: e._$get(o.lab) }) } };
        return function(n, s) { n = e._$get(n);
            if (n && "LABEL" == n.tagName) { e._$dumpCSSText();
                var d = i._$uniqueID(),
                    u = t(d);
                s = s || r;
                o(d, s.form, s.clazz, s.param, e._$get(s.parent));
                u.nmb = 0;
                u.name = s.name || "file";
                u.lab = e._$id(n);
                u.accept = s.accept || "";
                u.multiple = !!s.multiple;
                u.onchange = s.onchange || l;
                n.htmlFor = c(d, u);
                a.__handleFileLabelClick(n);
                return d } } }();
    o._$get = function(t) {
        var n = d[t];
        if (n) {
            var i = e._$get(n.pid);
            if (i) {
                if ("FORM" != i.tagName) i = i.parentNode;
                return i } } };
    o._$unbind = function(t) {
        var n = d[t];
        if (n) { e._$remove(n.pid);
            delete d[t] } };
    s._$merge({ _$bind: o._$bind });
    if (!0) {
        var s = t.P("nej.e");
        s._$file = o._$bind;
        s._$getFileForm = o._$get;
        s._$removeFileForm = o._$unbind }
    return o }, 215, 4, 3, 2, 609, 217);
! function() {
    var t = !0,
        e = null;
    ! function(n) {
        function i(n) {
            if ("bug-string-char-index" == n) return "a" != "a" [0];
            var i, s = "json" == n;
            if (s || "json-stringify" == n || "json-parse" == n) {
                if ("json-stringify" == n || s) {
                    var o = c.stringify,
                        l = "function" == typeof o && d;
                    if (l) {
                        (i = function() {
                            return 1 }).toJSON = i;
                        try { l = "0" === o(0) && "0" === o(new Number) && '""' == o(new String) && o(a) === r && o(r) === r && o() === r && "1" === o(i) && "[1]" == o([i]) && "[null]" == o([r]) && "null" == o(e) && "[null,null,null]" == o([r, a, e]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == o({ a: [i, t, !1, e, "\0\b\n\f\r\t"] }) && "1" === o(e, i) && "[\n 1,\n 2\n]" == o([1, 2], e, 1) && '"-271821-04-20T00:00:00.000Z"' == o(new Date((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == o(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == o(new Date((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == o(new Date((-1))) } catch (u) { l = !1 } }
                    if (!s) return l }
                if ("json-parse" == n || s) { n = c.parse;
                    if ("function" == typeof n) try {
                        if (0 === n("0") && !n(!1)) { i = n('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var h = 5 == i.a.length && 1 === i.a[0];
                            if (h) {
                                try { h = !n('"\t"') } catch (f) {}
                                if (h) try { h = 1 !== n("01") } catch (_) {} } } } catch (p) { h = !1 }
                    if (!s) return h }
                return l && h } }
        var a = {}.toString,
            s, o, r, l = "function" == typeof define && define.amd,
            c = "object" == typeof exports && exports;
        c || l ? "object" == typeof JSON && JSON ? c ? (c.stringify = JSON.stringify, c.parse = JSON.parse) : c = JSON : l && (c = n.JSON = {}) : c = n.JSON || (n.JSON = {});
        var d = new Date((-0xc782b5b800cec));
        try { d = -109252 == d.getUTCFullYear() && 0 === d.getUTCMonth() && 1 === d.getUTCDate() && 10 == d.getUTCHours() && 37 == d.getUTCMinutes() && 6 == d.getUTCSeconds() && 708 == d.getUTCMilliseconds() } catch (u) {}
        if (!i("json")) {
            var h = i("bug-string-char-index");
            if (!d) var f = Math.floor,
                _ = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                p = function(t, e) {
                    return _[e] + 365 * (t - 1970) + f((t - 1969 + (e = +(e > 1))) / 4) - f((t - 1901 + e) / 100) + f((t - 1601 + e) / 400) };
            if (!(s = {}.hasOwnProperty)) s = function(t) {
                var n = {},
                    i;
                if ((n.__proto__ = e, n.__proto__ = { toString: 1 }, n).toString != a) s = function(t) {
                    var n = this.__proto__,
                        t = t in (this.__proto__ = e, this);
                    this.__proto__ = n;
                    return t };
                else { i = n.constructor;
                    s = function(t) {
                        var e = (this.constructor || i).prototype;
                        return t in this && !(t in e && this[t] === e[t]) } }
                n = e;
                return s.call(this, t) };
            var m = { "boolean": 1, number: 1, string: 1, undefined: 1 };
            o = function(t, n) {
                var i = 0,
                    o, r, l;
                (o = function() { this.valueOf = 0 }).prototype.valueOf = 0;
                r = new o;
                for (l in r) s.call(r, l) && i++;
                o = r = e;
                if (i) i = 2 == i ? function(t, e) {
                    var n = {},
                        i = "[object Function]" == a.call(t),
                        o;
                    for (o in t) !(i && "prototype" == o) && !s.call(n, o) && (n[o] = 1) && s.call(t, o) && e(o) } : function(t, e) {
                    var n = "[object Function]" == a.call(t),
                        i, o;
                    for (i in t) !(n && "prototype" == i) && s.call(t, i) && !(o = "constructor" === i) && e(i);
                    (o || s.call(t, i = "constructor")) && e(i) };
                else { r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    i = function(t, e) {
                        var n = "[object Function]" == a.call(t),
                            i, o;
                        if (o = !n)
                            if (o = "function" != typeof t.constructor) { o = typeof t.hasOwnProperty;
                                o = "object" == o ? !!t.hasOwnProperty : !m[o] }
                        o = o ? t.hasOwnProperty : s;
                        for (i in t) !(n && "prototype" == i) && o.call(t, i) && e(i);
                        for (n = r.length; i = r[--n]; o.call(t, i) && e(i)); } }
                i(t, n) };
            if (!i("json-stringify")) {
                var g = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
                    v = function(t, e) {
                        return ("000000" + (e || 0)).slice(-t) },
                    $ = function(t) {
                        var e = '"',
                            n = 0,
                            i = t.length,
                            a = i > 10 && h,
                            s;
                        for (a && (s = t.split("")); n < i; n++) {
                            var o = t.charCodeAt(n);
                            switch (o) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    e += g[o];
                                    break;
                                default:
                                    if (o < 32) { e += "\\u00" + v(2, o.toString(16));
                                        break }
                                    e += a ? s[n] : h ? t.charAt(n) : t[n] } }
                        return e + '"' },
                    y = function(n, i, l, c, d, u, h) {
                        var _ = i[n],
                            m, g, b, w, C, x, T, L, S;
                        try { _ = i[n] } catch (I) {}
                        if ("object" == typeof _ && _) { m = a.call(_);
                            if ("[object Date]" == m && !s.call(_, "toJSON"))
                                if (_ > -1 / 0 && _ < 1 / 0) {
                                    if (p) { b = f(_ / 864e5);
                                        for (m = f(b / 365.2425) + 1970 - 1; p(m + 1, 0) <= b; m++);
                                        for (g = f((b - p(m, 0)) / 30.42); p(m, g + 1) <= b; g++);
                                        b = 1 + b - p(m, g);
                                        w = (_ % 864e5 + 864e5) % 864e5;
                                        C = f(w / 36e5) % 24;
                                        x = f(w / 6e4) % 60;
                                        T = f(w / 1e3) % 60;
                                        w %= 1e3 } else { m = _.getUTCFullYear();
                                        g = _.getUTCMonth();
                                        b = _.getUTCDate();
                                        C = _.getUTCHours();
                                        x = _.getUTCMinutes();
                                        T = _.getUTCSeconds();
                                        w = _.getUTCMilliseconds() }
                                    _ = (m <= 0 || m >= 1e4 ? (m < 0 ? "-" : "+") + v(6, m < 0 ? -m : m) : v(4, m)) + "-" + v(2, g + 1) + "-" + v(2, b) + "T" + v(2, C) + ":" + v(2, x) + ":" + v(2, T) + "." + v(3, w) + "Z" } else _ = e;
                            else if ("function" == typeof _.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || s.call(_, "toJSON"))) _ = _.toJSON(n) }
                        l && (_ = l.call(i, n, _));
                        if (_ === e) return "null";
                        m = a.call(_);
                        if ("[object Boolean]" == m) return "" + _;
                        if ("[object Number]" == m) return _ > -1 / 0 && _ < 1 / 0 ? "" + _ : "null";
                        if ("[object String]" == m) return $("" + _);
                        if ("object" == typeof _) {
                            for (n = h.length; n--;)
                                if (h[n] === _) throw TypeError();
                            h.push(_);
                            L = [];
                            i = u;
                            u += d;
                            if ("[object Array]" == m) { g = 0;
                                for (n = _.length; g < n; S || (S = t), g++) { m = y(g, _, l, c, d, u, h);
                                    L.push(m === r ? "null" : m) }
                                n = S ? d ? "[\n" + u + L.join(",\n" + u) + "\n" + i + "]" : "[" + L.join(",") + "]" : "[]" } else { o(c || _, function(e) {
                                    var n = y(e, _, l, c, d, u, h);
                                    n !== r && L.push($(e) + ":" + (d ? " " : "") + n);
                                    S || (S = t) });
                                n = S ? d ? "{\n" + u + L.join(",\n" + u) + "\n" + i + "}" : "{" + L.join(",") + "}" : "{}" }
                            h.pop();
                            return n } };
                c.stringify = function(t, e, n) {
                    var i, s, o;
                    if ("function" == typeof e || "object" == typeof e && e)
                        if ("[object Function]" == a.call(e)) s = e;
                        else if ("[object Array]" == a.call(e)) { o = {};
                        for (var r = 0, l = e.length, c; r < l; c = e[r++], ("[object String]" == a.call(c) || "[object Number]" == a.call(c)) && (o[c] = 1)); }
                    if (n)
                        if ("[object Number]" == a.call(n)) {
                            if ((n -= n % 1) > 0) { i = "";
                                for (n > 10 && (n = 10); i.length < n; i += " "); } } else "[object String]" == a.call(n) && (i = n.length <= 10 ? n : n.slice(0, 10));
                    return y("", (c = {}, c[""] = t, c), s, o, i, "", [])
                }
            }
            if (!i("json-parse")) {
                var b = String.fromCharCode,
                    w = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r" },
                    C, x, T = function() { C = x = e;
                        throw SyntaxError() },
                    L = function() {
                        for (var n = x, i = n.length, a, s, o, r, l; C < i;) { l = n.charCodeAt(C);
                            switch (l) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    C++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    a = h ? n.charAt(C) : n[C];
                                    C++;
                                    return a;
                                case 34:
                                    a = "@";
                                    for (C++; C < i;) { l = n.charCodeAt(C);
                                        if (l < 32) T();
                                        else if (92 == l) { l = n.charCodeAt(++C);
                                            switch (l) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    a += w[l];
                                                    C++;
                                                    break;
                                                case 117:
                                                    s = ++C;
                                                    for (o = C + 4; C < o; C++) { l = n.charCodeAt(C);
                                                        l >= 48 && l <= 57 || l >= 97 && l <= 102 || l >= 65 && l <= 70 || T() }
                                                    a += b("0x" + n.slice(s, C));
                                                    break;
                                                default:
                                                    T() } } else {
                                            if (34 == l) break;
                                            l = n.charCodeAt(C);
                                            for (s = C; l >= 32 && 92 != l && 34 != l;) l = n.charCodeAt(++C);
                                            a += n.slice(s, C) } }
                                    if (34 == n.charCodeAt(C)) { C++;
                                        return a }
                                    T();
                                default:
                                    s = C;
                                    if (45 == l) { r = t;
                                        l = n.charCodeAt(++C) }
                                    if (l >= 48 && l <= 57) {
                                        for (48 == l && (l = n.charCodeAt(C + 1), l >= 48 && l <= 57) && T(); C < i && (l = n.charCodeAt(C), l >= 48 && l <= 57); C++);
                                        if (46 == n.charCodeAt(C)) {
                                            for (o = ++C; o < i && (l = n.charCodeAt(o), l >= 48 && l <= 57); o++);
                                            o == C && T();
                                            C = o }
                                        l = n.charCodeAt(C);
                                        if (101 == l || 69 == l) { l = n.charCodeAt(++C);
                                            (43 == l || 45 == l) && C++;
                                            for (o = C; o < i && (l = n.charCodeAt(o), l >= 48 && l <= 57); o++);
                                            o == C && T();
                                            C = o }
                                        return +n.slice(s, C) }
                                    r && T();
                                    if ("true" == n.slice(C, C + 4)) { C += 4;
                                        return t }
                                    if ("false" == n.slice(C, C + 5)) { C += 5;
                                        return !1 }
                                    if ("null" == n.slice(C, C + 4)) { C += 4;
                                        return e }
                                    T() } }
                        return "$" },
                    S = function(e) {
                        var n, i; "$" == e && T();
                        if ("string" == typeof e) {
                            if ("@" == (h ? e.charAt(0) : e[0])) return e.slice(1);
                            if ("[" == e) {
                                for (n = [];; i || (i = t)) { e = L();
                                    if ("]" == e) break;
                                    if (i)
                                        if ("," == e) { e = L(); "]" == e && T() } else T();
                                        "," == e && T();
                                    n.push(S(e)) }
                                return n }
                            if ("{" == e) {
                                for (n = {};; i || (i = t)) { e = L();
                                    if ("}" == e) break;
                                    if (i)
                                        if ("," == e) { e = L(); "}" == e && T() } else T();
                                        ("," == e || "string" != typeof e || "@" != (h ? e.charAt(0) : e[0]) || ":" != L()) && T();
                                    n[e.slice(1)] = S(L()) }
                                return n }
                            T() }
                        return e },
                    I = function(t, e, n) { n = k(t, e, n);
                        n === r ? delete t[e] : t[e] = n },
                    k = function(t, e, n) {
                        var i = t[e],
                            s;
                        if ("object" == typeof i && i)
                            if ("[object Array]" == a.call(i))
                                for (s = i.length; s--;) I(i, s, n);
                            else o(i, function(t) { I(i, t, n) });
                        return n.call(t, e, i) };
                c.parse = function(t, n) {
                    var i, s;
                    C = 0;
                    x = "" + t;
                    i = S(L()); "$" != L() && T();
                    C = x = e;
                    return n && "[object Function]" == a.call(n) ? k((s = {}, s[""] = i, s), "", n) : i } }
        }
        l && define(function() {
            return c })
    }(this);
    return JSON
}();
I$(632, function(_m, _p, _o, _f, _r) {
    if ("trident" === _m._$KERNEL.engine && "2.0" == _m._$KERNEL.release) I$(653, function() { JSON.parse = function() {
            var _isSafeJSON = function(t) {
                return !/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(t.replace(/"(\\.|[^"\\])*"/g, "")) };
            return JSON.parse._$aop(function(_event) {
                var _str = _event.args[0] || "";
                if (_str.length >= 5e5) { _event.stopped = !0;
                    _event.value = eval("(" + _str + ")") } }) }() });
    return JSON }, 78);
I$(590, function() {
    return JSON }, 632);
I$(451, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var h;
    l._$$ProxyAbstract = t._$klass();
    h = l._$$ProxyAbstract._$extend(s._$$EventTarget);
    h.__reset = function(t) { this.__super(t);
        this.__request = e._$fetch({ url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4 }, t);
        var n = i._$get("csrf");
        if (n.cookie && n.param) {
            var s = encodeURIComponent(n.param) + "=" + encodeURIComponent(o._$cookie(n.cookie) || ""),
                r = this.__request.url.indexOf("?") < 0 ? "?" : "&";
            this.__request.url += r + s }
        this.__headers = t.headers || {};
        var l = this.__headers[a._$HEAD_CT];
        if (null == l) this.__headers[a._$HEAD_CT] = a._$HEAD_CT_FORM };
    h.__destroy = function() { this.__super();
        delete this.__rkey;
        delete this.__request;
        delete this.__headers };
    h.__onLoadRequest = function(t) {
        var e = t.status;
        if (e != -1)
            if (0 == ("" + e).indexOf("2")) this._$dispatchEvent("onload", n._$text2type(t.result, this.__request.type));
            else this._$dispatchEvent("onerror", { data: e, result: t.result, code: a._$CODE_ERRSERV, message: "服务器返回异常状态[" + e + "]!" });
        else this._$dispatchEvent("onerror", { code: a._$CODE_TIMEOUT, message: "请求[" + this.__request.url + "]超时！" }) };
    h.__doSendRequest = d;
    h.__getResponseHeader = d;
    h._$send = function(t) {
        var e = this.__request.url;
        if (e) try { this.__request.data = null == t ? null : t;
            var n = { request: this.__request, headers: this.__headers };
            try { this._$dispatchEvent("onbeforerequest", n) } catch (i) { console.error(i.message);
                console.error(i.stack) }
            this.__doSendRequest(n) } catch (s) { this._$dispatchEvent("onerror", { code: a._$CODE_ERRSERV, message: "请求[" + e + "]失败:" + s.message + "！" }) } else this._$dispatchEvent("onerror", { code: a._$CODE_NOTASGN, message: "没有输入请求地址！" }) };
    h._$abort = d;
    h._$header = function(t) {
        if (!e._$isArray(t)) return this.__getResponseHeader(t) || "";
        var n = {};
        e._$forEach(t, function(t) { n[t] = this._$header(t) }, this);
        return n };
    return l }, 1, 2, 4, 377, 225, 23, 11, 590);
I$(591, function(t, e, n, i) { t.__getXMLHttpRequest = function() {
        return new XMLHttpRequest };
    return t });
I$(452, function(t, e, n, i, a, s, o) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "2.0") I$(592, function() { e.__getXMLHttpRequest = function() {
            var t = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
            return function() {
                var e = null;
                n._$forIn(t, function(t) {
                    try { e = new ActiveXObject(t);
                        return !0 } catch (n) {} });
                return e } }() });
    return e }, 78, 591, 2);
I$(243, function(t, e, n, i, a, s, o, r, l) {
    var c;
    s._$$ProxyXHR = n._$klass();
    c = s._$$ProxyXHR._$extend(t._$$ProxyAbstract);
    c.__destroy = function() { this.__super();
        window.clearTimeout(this.__timer);
        delete this.__timer;
        try { this.__xhr.onreadystatechange = r;
            this.__xhr.abort() } catch (t) {}
        delete this.__xhr };
    c.__doSendRequest = function() {
        var t = function(t, e) { this.__xhr.setRequestHeader(e, t) };
        var n = function(t) {
            var n = [];
            e._$reverseEach(t.getElementsByTagName("input"), function(t) {
                if ("file" == t.type)
                    if (t.name) {
                        if (t.files.length > 1) { e._$forEach(t.files, function(e) { n.push({ name: t.name, file: e }) });
                            t.parentNode.removeChild(t) } } else t.parentNode.removeChild(t) });
            return n.length > 0 ? n : null };
        return function(s) {
            var o = s.request,
                r = s.headers;
            this.__xhr = a.__getXMLHttpRequest();
            if (r[i._$HEAD_CT] === i._$HEAD_CT_FILE) { delete r[i._$HEAD_CT];
                this.__xhr.upload.onprogress = this.__onStateChange._$bind(this, 1);
                if ("FORM" === o.data.tagName) {
                    var l = n(o.data);
                    o.data = new FormData(o.data);
                    e._$forEach(l, function(t) {
                        var n = t.file;
                        o.data.append(t.name || n.name || "file-" + e._$uniqueID(), n) }) } }
            this.__xhr.onreadystatechange = this.__onStateChange._$bind(this, 2);
            if (0 !== o.timeout) this.__timer = window.setTimeout(this.__onStateChange._$bind(this, 3), o.timeout);
            this.__xhr.open(o.method, o.url, !o.sync);
            e._$loop(r, t, this);
            if (this.__request.cookie && "withCredentials" in this.__xhr) this.__xhr.withCredentials = !0;
            this.__xhr.send(o.data) } }();
    c.__onStateChange = function(t) {
        switch (t) {
            case 1:
                this._$dispatchEvent("onuploading", arguments[1]);
                break;
            case 2:
                if (4 == this.__xhr.readyState) this.__onLoadRequest({ status: this.__xhr.status, result: this.__xhr.responseText || "" });
                break;
            case 3:
                this.__onLoadRequest({ status: -1 }) } };
    c.__getResponseHeader = function(t) {
        return !this.__xhr ? "" : this.__xhr.getResponseHeader(t) };
    c._$abort = function() { this.__onLoadRequest({ status: 0 }) };
    return s }, 451, 2, 1, 225, 452);
! function() {
    if ("undefined" == typeof TrimPath) { TrimPath = {};
        if ("undefined" != typeof exports) TrimPath = exports }
    var t = {},
        e = [],
        n = /\s+/g,
        i = +new Date,
        a, s, o;
    var r = function() {
        var t = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            e = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;]/,
            n = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            i = /^new\s+/,
            a = /['"]/;
        var s = function(e) {
            if (!t.test(e)) { e = e.split(".")[0].trim();
                if (e && !a.test(e)) { e = e.replace(i, "");
                    try {
                        if (n.test(e)) return;
                        o[e] = 1 } catch (s) {} } } };
        return function(n) { n = n || "";
            if (n && !t.test(n)) {
                var i = n.split(e);
                for (var a = 0, o = i.length; a < o; a++) s(i[a]) } } }();
    var l = function(t) {
        if ("in" != t[2]) throw "bad for loop statement: " + t.join(" ");
        e.push(t[1]);
        r(t[3]);
        return "var __HASH__" + t[1] + " = " + t[3] + "," + t[1] + "," + t[1] + "_count=0;if (!!__HASH__" + t[1] + ")for(var " + t[1] + "_key in __HASH__" + t[1] + "){" + t[1] + " = __HASH__" + t[1] + "[" + t[1] + "_key];if (typeof(" + t[1] + ')=="function") continue;' + t[1] + "_count++;" };
    var c = function() {
        var t = e[e.length - 1];
        return "}; if(!__HASH__" + t + "||!" + t + "_count){" };
    var d = function() { e.pop();
        return "};" };
    var u = function(t) {
        if ("as" != t[2]) throw "bad for list loop statement: " + t.join(" ");
        var e = t[1].split("..");
        if (e.length > 1) { r(e[0]);
            r(e[1]);
            return "for(var " + t[3] + "," + t[3] + "_index=0," + t[3] + "_beg=" + e[0] + "," + t[3] + "_end=" + e[1] + "," + t[3] + "_length=parseInt(" + t[3] + "_end-" + t[3] + "_beg+1);" + t[3] + "_index<" + t[3] + "_length;" + t[3] + "_index++){" + t[3] + " = " + t[3] + "_beg+" + t[3] + "_index;" } else { r(t[1]);
            return "for(var __LIST__" + t[3] + " = " + t[1] + "," + t[3] + "," + t[3] + "_index=0," + t[3] + "_length=__LIST__" + t[3] + ".length;" + t[3] + "_index<" + t[3] + "_length;" + t[3] + "_index++){" + t[3] + " = __LIST__" + t[3] + "[" + t[3] + "_index];" } };
    var h = function(t) {
        if (t && t.length) { t.shift();
            var e = t[0].split("(")[0];
            return "var " + e + " = function" + t.join("").replace(e, "") + "{var __OUT=[];" } };
    var f = function(t) {
        if (!t[1]) throw "bad include statement: " + t.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline(' };
    var _ = function(t, e) { r(e.slice(1).join(" "));
        return t };
    var p = function(t) {
        return _("if(", t) };
    var m = function(t) {
        return _("}else if(", t) };
    var g = function(t) {
        return _("var ", t) };
    s = { blk: /^\{(cdata|minify|eval)/i, tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include", def: { "if": { pfix: p, sfix: "){", pmin: 1 }, "else": { pfix: "}else{" }, elseif: { pfix: m, sfix: "){", pdft: "true" }, "/if": { pfix: "}" }, "for": { pfix: l, pmin: 3 }, forelse: { pfix: c }, "/for": { pfix: d }, list: { pfix: u, pmin: 3 }, "/list": { pfix: "};" }, "break": { pfix: "break;" }, "var": { pfix: g, sfix: ";" }, macro: { pfix: h }, "/macro": { pfix: 'return __OUT.join("");};' }, trim: { pfix: function() { a = !0 } }, "/trim": { pfix: function() { a = null } }, inline: { pfix: f, pmin: 1, sfix: "));}" } }, ext: { seed: function(t) {
                return (t || "") + "" + i }, "default": function(t, e) {
                return t || e } } };
    var v = function() {
        var t = /\\([\{\}])/g;
        return function(e, i) { e = e.replace(t, "$1");
            var a = e.slice(1, -1).split(n),
                o = s.def[a[0]];
            if (o) {
                if (o.pmin && o.pmin >= a.length) throw "Statement needs more parameters:" + e;
                i.push(o.pfix && "string" != typeof o.pfix ? o.pfix(a) : o.pfix || "");
                if (o.sfix) {
                    if (a.length <= 1) {
                        if (o.pdft) i.push(o.pdft) } else
                        for (var r = 1, l = a.length; r < l; r++) {
                            if (r > 1) i.push(" ");
                            i.push(a[r]) }
                    i.push(o.sfix) } } else y(e, i) } }();
    var $ = function(t, e) {
        if (t && t.length)
            if (1 != t.length) {
                var n = t.pop().split(":");
                e.push("__MDF['" + n.shift() + "'](");
                $(t, e);
                if (n.length > 0) {
                    var i = n.join(":");
                    r(i);
                    e.push("," + i) }
                e.push(")")
            } else {
                var a = t.pop();
                r(a);
                e.push("" == a ? '""' : a) }
    };
    var y = function(t, e) {
        if (t) {
            var n = t.split("\n");
            if (n && n.length)
                for (var i = 0, s = n.length, o; i < s; i++) { o = n[i];
                    if (a) { o = o.trim();
                        if (!o) continue }
                    b(o, e);
                    if (a && i < s - 1) e.push("__OUT.push('\\n');") } } };
    var b = function() {
        var t = /\|\|/g,
            e = /#@@#/g;
        return function(n, i) {
            var a = "}",
                s = -1,
                o = n.length,
                r, l, c, d, u;
            for (; s + a.length < o;) { r = "${";
                l = "}";
                c = n.indexOf(r, s + a.length);
                if (c < 0) break;
                if ("%" == n.charAt(c + 2)) { r = "${%";
                    l = "%}" }
                d = n.indexOf(l, c + r.length);
                if (d < 0) break;
                w(n.substring(s + a.length, c), i);
                u = n.substring(c + r.length, d).replace(t, "#@@#").split("|");
                for (var h = 0, f = u.length; h < f; u[h] = u[h].replace(e, "||"), h++);
                i.push("__OUT.push(");
                $(u, i);
                i.push(");");
                a = l;
                s = d }
            w(n.substring(s + a.length), i) } }();
    var w = function() {
        var t = { r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'" };
        var e = function(e) {
            return (e || "").replace(t.r, function(e) {
                return t[e] || e }) };
        return function(t, n) {
            if (t) n.push("__OUT.push('" + e(t) + "');") } }();
    var C = function() {
        var t = /\t/g,
            e = /\n/g,
            i = /\r\n?/g;
        var a = function(t, e) {
            var n = t.indexOf("}", e + 1);
            for (;
                "\\" == t.charAt(n - 1);) n = t.indexOf("}", n + 1);
            return n };
        var r = function() {
            var t = [],
                e = arguments[0];
            for (var n in e) { n = (n || "").trim();
                if (n) t.push(n + "=$v('" + n + "')");
                else; }
            return t.length > 0 ? "var " + t.join(",") + ";" : "" };
        return function(l) { o = {};
            l = l.replace(i, "\n").replace(t, "    ");
            var c = ["if(!__CTX) return '';", ""];
            c.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            c.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            c.push("__OUT=[];");
            var d = -1,
                u = l.length;
            var h, f, _, p, m, g, $, b;
            for (; d + 1 < u;) { h = d;
                h = l.indexOf("{", h + 1);
                for (; h >= 0;) { f = a(l, h);
                    _ = l.substring(h, f);
                    p = _.match(s.blk);
                    if (p) { m = p[1].length + 1;
                        g = l.indexOf("}", h + m);
                        if (g >= 0) { $ = g - h - m <= 0 ? "{/" + p[1] + "}" : _.substr(m + 1);
                            m = l.indexOf($, g + 1);
                            if (m >= 0) { y(l.substring(d + 1, h), c);
                                b = l.substring(g + 1, m);
                                switch (p[1]) {
                                    case "cdata":
                                        w(b, c);
                                        break;
                                    case "minify":
                                        w(b.replace(e, " ").replace(n, " "), c);
                                        break;
                                    case "eval":
                                        if (b) c.push("__OUT.push((function(){" + b + "})());") }
                                h = d = m + $.length - 1 } } } else if ("$" != l.charAt(h - 1) && "\\" != l.charAt(h - 1) && 0 == _.substr("/" == _.charAt(1) ? 2 : 1).search(s.tag)) break;
                    h = l.indexOf("{", h + 1) }
                if (h < 0) break;
                f = a(l, h);
                if (f < 0) break;
                y(l.substring(d + 1, h), c);
                v(l.substring(h, f + 1), c);
                d = f }
            y(l.substring(d + 1), c);
            c.push(';return __OUT.join("");');
            c[1] = r(o);
            o = null;
            return new Function("__CTX", "__MDF", c.join("")) } }();
    TrimPath.seed = function() {
        return i };
    TrimPath.merge = function() {
        var e = {};
        TrimPath.dump = function() {
            return { func: e, text: t } };
        return function(n, i, a) {
            try { i = i || {};
                if (!e[n] && !t[n]) return "";
                if (!e[n]) { e[n] = C(t[n]);
                    delete t[n] }
                if (a)
                    for (var o in s.ext)
                        if (!a[o]) a[o] = s.ext[o];
                return e[n](i, a || s.ext) } catch (r) {
                return r.message || "" } } }();
    TrimPath.parse = function() {
        var e = +new Date;
        return function(n, i) {
            if (!n) return "";
            i = i || "ck_" + e++;
            t[i] = n;
            return i } }()
}();
I$(239, function(t, e, n, i, a, s, o, r, l) {
    var c = {};
    s._$seed = TrimPath.seed;
    s._$get = function() {
        var t = function(t) {
            return !s._$getTextTemplate ? "" : s._$getTextTemplate(t) };
        return function(n, i, a) { i = i || {};
            i.inline = t;
            a = e._$merge({}, c, a);
            a.rand = e._$uniqueID;
            a.format = e._$format;
            a.escape = e._$escape;
            a.inline = t;
            return TrimPath.merge(n, i, a) } }();
    s._$add = function(t, e) {
        if (!t) return "";
        var i, a = n._$get(t);
        if (a) { i = a.id;
            t = a.value || a.innerText;
            if (!e) n._$remove(a) }
        return TrimPath.parse(t, i) };
    s._$render = function(t, e, i, a) { t = n._$get(t);
        if (t) t.innerHTML = s._$get(e, i, a) };
    s._$extend = function(t) { e._$merge(c, t) };
    i._$merge({ _$render: s._$render });
    if (!0) {
        var d = t.P("nej.e");
        d._$addHtmlTemplate = s._$add;
        d._$getHtmlTemplate = s._$get;
        d._$getHtmlTemplateSeed = s._$seed;
        d._$renderHtmlTemplate = s._$render;
        d._$registJSTExt = s._$extend }
    return s }, 215, 2, 4, 217, 450);
I$(643, function(t, e, n, i, a) {
    var s = this,
        o = t._$KERNEL.prefix.pro,
        r = t._$is("desktop") ? 80 : t._$is("ios") ? 50 : 30;
    e.__requestAnimationFrame = function() {
        var e = t._$is("android") ? null : s.requestAnimationFrame || s[o + "RequestAnimationFrame"];
        return function() {
            if (!e) e = function(t) {
                return window.setTimeout(function() {
                    try { t(+new Date) } catch (e) {} }, 1e3 / r) };
            return e.apply(this, arguments) } }();
    e.__cancelAnimationFrame = function() {
        var e = t._$is("android") ? null : s.cancelAnimationFrame || s[o + "CancelAnimationFrame"];
        return function() {
            if (!e) e = function(t) { window.clearTimeout(t) };
            return e.apply(this, arguments) } }();
    return e }, 78);
I$(607, function(t, e) {
    return t }, 643, 78);
I$(491, function(t, e, n, i, a, s) { n.requestAnimationFrame = function() { e.__requestAnimationFrame.apply(null, arguments) };
    n.cancelAnimationFrame = function() { e.__cancelAnimationFrame.apply(null, arguments) };
    if (!0) {
        if (!this.requestAnimationFrame) this.requestAnimationFrame = n.requestAnimationFrame;
        if (!this.cancelAnimationFrame) this.cancelAnimationFrame = n.cancelAnimationFrame }
    return n }, 78, 607);
I$(613, function(t, e, n, i, a) { e.__canFlashEventBubble = function(t) {
        return "transparent" != (t || "").toLowerCase() };
    return e }, 78);
I$(535, function(t, e, n, i, a, s) {
    if ("trident" === e._$KERNEL.engine) I$(614, function() { t.__canFlashEventBubble = function(t) {
            return !0 } });
    if ("webkit" === e._$KERNEL.engine) I$(615, function() { t.__canFlashEventBubble = function(t) {
            return !0 } });
    return t }, 613, 78);
I$(536, '{var hide  = defined("hidden")&&!!hidden}\n{var param = defined("params")&&params||NEJ.O}\n{var width = !hide?width:"1px",height = !hide?height:"1px"}\n{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}\n<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"\n        codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"\n        width = "${width|default:"100px"}"\n        height = "${height|default:"100px"}" id="${id}">\n    <param value="${src}" name="movie">\n    {for x in param}\n    <param value="${x}" name="${x_key}"/>\n    {/for}\n    <embed src="${src}" name="${id}"\n           width="${width|default:"100px"}"\n           height="${height|default:"100px"}"\n           pluginspage="http://www.adobe.com/go/getflashplayer"\n           type="application/x-shockwave-flash"\n           {for x in param}${x_key}="${x}" {/for}></embed>\n</object>\n{if hide}</div>{/if}');
I$(378, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var h = a._$add(r);
    l._$flash = function() {
        var r = {},
            l, c = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(t) {
            var e = decodeURIComponent(t.target),
                n = t.type.toLowerCase();
            var i = r[e + "-tgt"];
            if (i && c.test(n)) u(i, t);
            var a = r[e + "-on" + n];
            if (a) {
                var s = "";
                try { s = a(t) } catch (o) {}
                return s } };
        var d = function(t) { l = document.title;
            var n = e._$get(t.parent) || document.body,
                i = a._$get(h, t);
            n.insertAdjacentHTML(!t.hidden ? "beforeEnd" : "afterBegin", i) };
        var u = function(t, e) {
            var i = e.type.toLowerCase();
            s.requestAnimationFrame(function() { n._$dispatchEvent(t, i) }) };
        var f = function(t) {
            return !!t && !!t.inited && !!t.inited() };
        var _ = function(t) {
            var n = [document.embeds[t], e._$get(t), document[t], window[t]],
                a = i._$forIn(n, f),
                s = n[a],
                o = t + "-count";
            r[o]++;
            if (!(s || r[o] > 100)) window.setTimeout(_._$bind(null, t), 300);
            else {
                if (l) { document.title = l;
                    l = null }
                r[t](s);
                delete r[t];
                delete r[o] } };
        var p = function(t) {
            var n = t.id,
                a = t.params;
            if (!a) { a = {};
                t.params = a }
            var s = a.flashvars || "";
            s += (!s ? "" : "&") + ("id=" + n);
            if (!t.hidden && (t.target || o.__canFlashEventBubble(a.wmode))) {
                var l = e._$id(t.target) || e._$id(t.parent);
                r[n + "-tgt"] = l }
            a.flashvars = s;
            i._$loop(t, function(t, e) {
                if (i._$isFunction(t) && "onready" != e) r[n + "-" + e] = t }) };
        return function(e) { e = t.X({}, e);
            if (e.src) {
                var n = "_" + i._$uniqueID();
                e.id = n;
                p(e);
                d(e);
                if (e.onready) { r[n] = e.onready;
                    r[n + "-count"] = 0;
                    _(n) } } } }();
    if (!0) t.copy(t.P("nej.e"), l);
    return l }, 215, 4, 3, 2, 239, 491, 535, 536);
I$(453, function(t, e, n, i, a, s, o, r, l) {
    var c, d = {},
        u = i._$uniqueID();
    this["ld" + u] = function(t, e) {
        var n = d[t];
        if (n) { delete d[t];
            n.__onLoadRequest({ status: 200, result: e }) } };
    this["er" + u] = function(t, e) {
        var n = d[t];
        if (n) { delete d[t];
            n.__onLoadRequest({ status: e || 0 }) } };
    s._$$ProxyFlash = e._$klass();
    c = s._$$ProxyFlash._$extend(t._$$ProxyAbstract);
    c.__doSendRequest = function(t) {
        var e = d.flash;
        if (!i._$isArray(e))
            if (e) { this.__rkey = i._$uniqueID();
                d[this.__rkey] = this;
                var s = i._$fetch({ url: "", data: null, method: "GET" }, t.request);
                s.key = this.__rkey;
                s.headers = t.headers;
                s.onerror = "cb.er" + u;
                s.onloaded = "cb.ld" + u;
                var o = n._$getFlashProxy(s.url);
                if (o) s.policyURL = o;
                e.request(s) } else { d.flash = [this.__doSendRequest._$bind(this, t)];
                a._$flash({ hidden: !0, src: n._$get("ajax.swf"), onready: function(t) {
                        if (t) {
                            var e = d.flash;
                            d.flash = t;
                            i._$reverseEach(e, function(t, e, n) {
                                try { t() } catch (i) {} }) } } }) }
        else e.push(this.__doSendRequest._$bind(this, t)) };
    c._$abort = function() { delete d[this.__rkey];
        this.__onLoadRequest({ status: 0 }) };
    return s }, 451, 1, 377, 2, 378);
I$(654, function(t, e, n, i) { t.__formatOrigin = function() {
        var t = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(e) { e = e || "";
            if (t.test(e)) return RegExp.$1;
            else return "*" } }();
    t.__formatPassData = function(t) {
        return t };
    t.__postMessage = function(n, i) {
        if (n.postMessage) { i = i || e;
            n.postMessage(t.__formatPassData(i.data), t.__formatOrigin(i.origin)) } };
    return t });
I$(446, function(t, e, n, i, a, s, o, r, l, c) {
    var d;
    o._$$CustomEvent = e._$klass();
    d = o._$$CustomEvent._$extend(s._$$EventTarget);
    d.__init = function() { this.__cache = {};
        this.__super() };
    d.__reset = function(t) { this.__super(t);
        this.__element = n._$get(t.element) || window;
        this.__doEventInit(t.event);
        this.__doEventAPIEnhance();
        this._$dispatchEvent("oninit") };
    d.__destroy = function() {
        var t = function(t, e, n) {
            if (!a._$isArray(t)) a._$safeDelete(this.__element, e);
            delete n[e] };
        return function() { this.__super();
            a._$loop(this.__cache, t, this);
            delete this.__element } }();
    d.__isDelegate = function(t, e) { t = n._$get(t);
        return !(t !== this.__element || e && !this.__cache["on" + e]) };
    d.__doEventInit = function(t) {
        if (!a._$isString(t)) {
            if (a._$isArray(t)) a._$forEach(t, this.__doEventInit, this) } else {
            var e = "on" + t;
            if (!this.__cache[e]) this.__cache[e] = this.__doEventDispatch._$bind(this, t);
            this.__doEventBind(t) } };
    d.__doEventBind = function(t) {
        var e = "on" + t,
            n = this.__element[e],
            i = this.__cache[e];
        if (n != i) { this.__doEventDelete(t);
            if (n && n != l) this.__doEventAdd(t, n);
            this.__element[e] = i } };
    d.__doEventAdd = function(t, e, n) {
        var i = this.__cache[t];
        if (!i) { i = [];
            this.__cache[t] = i }
        if (a._$isFunction(e)) !n ? i.push(e) : i.unshift(e) };
    d.__doEventDelete = function(t, e) {
        var n = this.__cache[t];
        if (n && n.length)
            if (e) a._$reverseEach(n, function(t, n, i) {
                if (e === t) { i.splice(n, 1);
                    return !0 }
            });
            else delete this.__cache[t]
    };
    d.__doEventDispatch = function(t, e) { e = e || { noargs: !0 };
        if (e == r) e = {};
        e.type = t;
        this._$dispatchEvent("ondispatch", e);
        if (!e.stopped) a._$forEach(this.__cache[t], function(t) {
            if (!1) t(e);
            else try { t(e) } catch (n) { console.error(n.message);
                console.error(n.stack) } }) };
    d.__doEventAPIEnhance = function() {
        var e = function(t) {
            var e = t.args,
                n = e[1].toLowerCase();
            if (this.__isDelegate(e[0], n)) { t.stopped = !0;
                this.__doEventBind(n);
                this.__doEventAdd(n, e[2], e[3]);
                this._$dispatchEvent("oneventadd", { type: n, listener: e[2] }) } };
        var n = function(t) {
            var e = t.args,
                n = e[1].toLowerCase();
            if (this.__isDelegate(e[0], n)) { t.stopped = !0;
                this.__doEventDelete(n, e[2]) } };
        var s = function(t) {
            var e = t.args,
                n = (e[1] || "").toLowerCase();
            if (this.__isDelegate(e[0])) {
                if (n) { this.__doEventDelete(n);
                    return }
                a._$loop(this.__cache, function(t, e) {
                    if (a._$isArray(t)) this.__doEventDelete(e) }, this) } };
        var o = function(t) {
            var e = t.args,
                n = e[1].toLowerCase();
            if (this.__isDelegate(e[0], n)) { t.stopped = !0;
                e[0]["on" + n].apply(e[0], e.slice(2)) } };
        return function() {
            if (!this.__enhanced) { this.__enhanced = !0;
                i._$addEvent = i._$addEvent._$aop(e._$bind(this));
                i._$delEvent = i._$delEvent._$aop(n._$bind(this));
                i._$clearEvent = i._$clearEvent._$aop(s._$bind(this));
                i._$dispatchEvent = i._$dispatchEvent._$aop(o._$bind(this));
                if (!0) t.copy(t.P("nej.v"), i) } } }();
    if (!0) t.copy(t.P("nej.ut"), o);
    return o
}, 215, 1, 4, 3, 2, 23);
I$(633, function(t, e, n, i, a, s, o, r) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release >= "4.0" && t._$KERNEL.release <= "5.0") I$(655, function() { e.__formatPassData = function(t) {
            return JSON.stringify(t) } });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "3.0") I$(656, function(t) {
        var a = "MSG|",
            o = [];
        var r = function() {
            var t = unescape(window.name || "").trim();
            if (t && 0 == t.indexOf(a)) { window.name = "";
                var s = n._$string2object(t.replace(a, ""), "|"),
                    o = (s.origin || "").toLowerCase();
                if (!o || "*" == o || 0 == location.href.toLowerCase().indexOf(o)) i._$dispatchEvent(window, "message", { data: JSON.parse(s.data || "null"), source: window.frames[s.self] || s.self, origin: e.__formatOrigin(s.ref || document.referrer) }) } };
        var l = function() {
            var t;
            var e = function(e, i, a) {
                if (n._$indexOf(t, e.w) < 0) { t.push(e.w);
                    a.splice(i, 1);
                    e.w.name = e.d } };
            return function() { t = [];
                n._$reverseEach(o, e);
                t = null } }();
        e.__postMessage = function() {
            var t = function(t) {
                var e = {};
                t = t || s;
                e.origin = t.origin || "";
                e.ref = location.href;
                e.self = t.source;
                e.data = JSON.stringify(t.data);
                return a + n._$object2string(e, "|", !0) };
            return function(e, n) { o.unshift({ w: e, d: escape(t(n)) }) } }();
        t._$$CustomEvent._$allocate({ element: window, event: "message" });
        setInterval(l, 100);
        setInterval(r, 20) }, 446, 590);
    return e }, 78, 654, 2, 3);
I$(593, function(t, e, n, i, a, s, o, r) { a._$postMessage = function() {
        var t = window.name || "_parent",
            a = { _top: window.top, _self: window, _parent: window.parent };
        return function(o, r) {
            if (e._$isString(o)) { o = a[o] || window.frames[o] || (n._$get(o) || s).contentWindow;
                if (!o) return }
            var l = e._$fetch({ data: null, origin: "*", source: t }, r);
            i.__postMessage(o, l) } }();
    if (!0) t.copy(t.P("nej.j"), a);
    return a }, 215, 2, 4, 633);
I$(454, function(t, e, n, i, a, s, o, r, l, c, d) {
    var u, h = {};
    r._$$ProxyFrame = n._$klass();
    u = r._$$ProxyFrame._$extend(t._$$ProxyAbstract);
    u.__init = function() {
        var t = "NEJ-AJAX-DATA:",
            e = !1;
        var n = function(e) {
            var n = e.data;
            if (0 == n.indexOf(t)) { n = JSON.parse(n.replace(t, ""));
                var i = h[n.key];
                if (i) { delete h[n.key];
                    n.result = decodeURIComponent(n.result || "");
                    i.__onLoadRequest(n) } } };
        var a = function() {
            if (!e) { e = !0;
                i._$addEvent(window, "message", n) } };
        return function() { this.__super();
            a() } }();
    u.__doSendRequest = function(t) {
        var n = t.request,
            r = a._$getFrameProxy(n.url),
            l = h[r];
        if (!e._$isArray(l))
            if (l) { this.__rkey = e._$uniqueID();
                h[this.__rkey] = this;
                var c = e._$fetch({ url: "", data: null, timeout: 0, method: "GET" }, n);
                c.key = this.__rkey;
                c.headers = t.headers;
                o._$postMessage(h[r], { data: c }) } else { h[r] = [this.__doSendRequest._$bind(this, t)];
                s._$createXFrame({ src: r, visible: !1, onload: function(t) {
                        var n = h[r];
                        h[r] = i._$getElement(t).contentWindow;
                        e._$reverseEach(n, function(t) {
                            try { t() } catch (e) {} }) } }) }
        else l.push(this.__doSendRequest._$bind(this, t)) };
    u._$abort = function() { delete h[this.__rkey];
        this.__onLoadRequest({ status: 0 }) };
    return r }, 451, 2, 1, 3, 377, 4, 593);
I$(455, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var h, f = {},
        _ = "NEJ-UPLOAD-RESULT:";
    l._$$ProxyUpload = e._$klass();
    h = l._$$ProxyUpload._$extend(t._$$ProxyAbstract);
    h.__init = function() {
        var t = !1;
        var e = function(t) {
            var e = t.data;
            if (0 == e.indexOf(_)) { e = JSON.parse(e.replace(_, ""));
                var n = f[e.key];
                if (n) { delete f[e.key];
                    n.__onLoadRequest(decodeURIComponent(e.result)) } } };
        var n = function() {
            if (!t) { t = !0;
                i._$addEvent(window, "message", e) } };
        return function() { this.__super();
            n() } }();
    h.__destroy = function() { this.__super();
        a._$remove(this.__frame);
        delete this.__frame;
        window.clearTimeout(this.__timer);
        delete this.__timer };
    h.__onLoadRequest = function(t) {
        var e;
        try { e = JSON.parse(t);
            this._$dispatchEvent("onload", e) } catch (n) { this._$dispatchEvent("onerror", { code: s._$CODE_ERREVAL, message: t }) } };
    h.__doSendRequest = function() {
        var t = function() {
            var t, e;
            try {
                var t = this.__frame.contentWindow.document.body,
                    e = (t.innerText || t.textContent || "").trim();
                if (e.indexOf(_) >= 0 || t.innerHTML.indexOf(_) >= 0) return } catch (n) {
                return }
            this.__onLoadRequest(e) };
        var e = function(t, n, i) { o._$request(t, { type: "json", method: "POST", cookie: i, mode: parseInt(n) || 0, onload: function(a) {
                    if (this.__timer) { this._$dispatchEvent("onuploading", a);
                        this.__timer = window.setTimeout(e._$bind(this, t, n, i), 1e3) } }._$bind(this), onerror: function(a) {
                    if (this.__timer) this.__timer = window.setTimeout(e._$bind(this, t, n, i), 1e3) }._$bind(this) }) };
        return function(o) {
            var r = o.request,
                l = o.headers,
                d = r.data,
                u = n._$uniqueID();
            f[u] = this;
            d.target = u;
            d.method = "POST";
            d.enctype = s._$HEAD_CT_FILE;
            d.encoding = s._$HEAD_CT_FILE;
            var h = d.action || "",
                _ = h.indexOf("?") <= 0 ? "?" : "&";
            d.action = h + _ + "_proxy_=form";
            this.__frame = a._$createXFrame({ name: u, onload: function(n) {
                    var a = i._$getElement(n);
                    i._$addEvent(a, "load", t._$bind(this));
                    d.submit();
                    var s = (d.nej_query || c).value;
                    if (s) {
                        var o = (d.nej_mode || c).value,
                            r = "true" === (d.nej_cookie || c).value;
                        this.__timer = window.setTimeout(e._$bind(this, s, o, r), 100) } }._$bind(this) }) } }();
    h._$abort = function() { this._$dispatchEvent("onerror", { code: s._$CODE_ERRABRT, message: "客户端终止文件上传" }) };
    return l }, 451, 1, 2, 3, 4, 225, 14, 593);
I$(456, function(t, e, n, i, a, s, o, r) { a.__getProxyByMode = function(a, s, o) {
        var r = s ? { 2: i._$$ProxyUpload } : { 2: n._$$ProxyFrame, 3: e._$$ProxyFlash };
        return (r[a] || t._$$ProxyXHR)._$allocate(o) };
    return a }, 243, 453, 454, 455);
I$(244, function(t, e, n, i, a, s) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "5.0") I$(457, function() { e.__getProxyByMode = function() {
            var t = { 0: 2, 1: 3 };
            return e.__getProxyByMode._$aop(function(e) {
                var n = e.args,
                    i = n[0] || 0;
                n[0] = n[1] ? 2 : t[i] || i }) }() });
    return e }, 78, 456);
I$(14, function(t, e, n, i, a, s, o, r, l, c) {
    var d = {},
        u = l;
    o._$abort = function(t) {
        var e = d[t];
        if (e) e.req._$abort() };
    o._$filter = function(t) { u = t || l };
    o._$request = function() {
        var t = (location.protocol + "//" + location.host).toLowerCase();
        var i = function(e) {
            var i = n._$url2origin(e);
            return !!i && i != t };
        var o = function(t) {
            return (t || r)[e._$HEAD_CT] == e._$HEAD_CT_FILE };
        var c = function(t) {
            var e = o(t.headers);
            if (!i(t.url) && !e) return a._$$ProxyXHR._$allocate(t);
            else return s.__getProxyByMode(t.mode, e, t) };
        var h = function(t, e) {
            var n = { data: e };
            var i = t.result.headers;
            if (i) n.headers = t.req._$header(i);
            return n };
        var f = function(t) {
            var e = d[t];
            if (e) {
                if (e.req) e.req._$recycle();
                delete d[t] } };
        var _ = function(t, e) {
            var n = d[t];
            if (n) {
                var i = arguments[2];
                if ("onload" == e && n.result) i = h(n, i);
                f(t);
                var a = { type: e, result: i };
                u(a);
                if (!a.stopped)(n[e] || l)(a.result) } };
        var p = function(t, e) { _(t, "onload", e) };
        var m = function(t, e) { _(t, "onerror", e) };
        return function(t, e) { e = e || {};
            var i = n._$uniqueID(),
                a = { result: e.result, onload: e.onload || l, onerror: e.onerror || l };
            d[i] = a;
            e.onload = p._$bind(null, i);
            e.onerror = m._$bind(null, i);
            if (e.query) {
                var s = t.indexOf("?") < 0 ? "?" : "&",
                    o = e.query;
                if (n._$isObject(o)) o = n._$object2query(o);
                if (o) t += s + o }
            e.url = t;
            a.req = c(e);
            a.req._$send(e.data);
            return i } }();
    o._$upload = function(t, a) { t = i._$get(t);
        if (!t) return "";
        var s = n._$fetch({ mode: 0, type: "json", query: null, cookie: !1, headers: {}, onload: null, onerror: null, onuploading: null, onbeforerequest: null }, a);
        s.data = t;
        s.method = "POST";
        s.timeout = 0;
        s.headers[e._$HEAD_CT] = e._$HEAD_CT_FILE;
        return o._$request(t.action, s) };
    if (!0) t.copy(t.P("nej.j"), o);
    return o }, 215, 225, 2, 4, 243, 244);
I$(339, function(t, e, n) {
    var i = Regular.dom;
    var a = { "r-tooltip": function(t, e) { console.log("do some directive logic") } };
    var s = { mouseenter: function(t, e, i) { n._$addEvent(t, "mouseenter", e);
            return function() { n._$delEvent(t, "mouseenter", e) } }, mouseleave: function(t, e, i) { n._$addEvent(t, "mouseleave", e);
            return function() { n._$delEvent(t, "mouseleave", e) } }, upload: function(n, i, a) {
            function s(t) {
                var e = t || {};
                if (e && 200 === e.retcode) i({ type: "upload", data: e, param: h });
                else i({ type: "error", message: e.retdesc, param: h });
                c() }

            function o(t) { i({ type: "before", data: t }) }

            function r(t) {
                var e = t || {};
                if (e && "number" == typeof e.total && "number" == typeof e.progress) i({ type: "progress", data: e.progress / e.total }) }

            function l(n) {
                if ("function" == typeof FileReader) {
                    var a = nes.one("input", n.form).files,
                        l = a[0];
                    var c = new FileReader(l);
                    c.readAsDataURL(l);
                    c.addEventListener("load", function() { i({ type: "preview", data: this.result }) }) }
                t._$unbind(n.id);
                n.form.setAttribute("action", h.url || "/uploadImageForNej.html?module=authOcr");
                e._$upload(n.form, { onload: s, onerror: s, onuploading: r, onbeforerequest: o }) }

            function c() { f = t._$bind(n, { parent: n.parentNode, name: "img", multiple: !!h.multiple, accept: h.accept || "image/jpg,image/jpeg,image/png", onchange: l }) }
            var d = a.filter(function(t) {
                return "upload-param" === t.name })[0];
            var u;
            var h = {};
            if (d) h = this.$get(Regular.expression(d.value)) || {};
            var f;
            if (this.$root === this) this.$on("inject", c);
            else setTimeout(function() { c() }._$bind(this));
            return function _() {
                if (f) t._$unbind(f) } } };
    return { events: s, directives: a } }, 516, 14, 3, 247);
I$(245, function(t, e, n, i, a) {
    var s = 8;
    var o = function(t, e) {
        return t << e | t >>> 32 - e };
    var r = function(t, e) {
        var n = (65535 & t) + (65535 & e),
            i = (t >> 16) + (e >> 16) + (n >> 16);
        return i << 16 | 65535 & n };
    var l = function(t, e, n, i) {
        if (t < 20) return e & n | ~e & i;
        if (t < 40) return e ^ n ^ i;
        if (t < 60) return e & n | e & i | n & i;
        else return e ^ n ^ i };
    var c = function(t) {
        if (t < 20) return 1518500249;
        if (t < 40) return 1859775393;
        if (t < 60) return -1894007588;
        else return -899497514
    };
    var d = function() {
        var t = function(t) {
                return t % 32 },
            e = function(t) {
                return 32 - s - t % 32 };
        return function(n, i) {
            var a = [],
                o = (1 << s) - 1,
                r = i ? t : e;
            for (var l = 0, c = n.length * s; l < c; l += s) a[l >> 5] |= (n.charCodeAt(l / s) & o) << r(l);
            return a } }();
    var u = function() {
        var t = "0123456789abcdef",
            e = function(t) {
                return t % 4 },
            n = function(t) {
                return 3 - t % 4 };
        return function(i, a) {
            var s = [],
                o = a ? e : n;
            for (var r = 0, l = 4 * i.length; r < l; r++) s.push(t.charAt(i[r >> 2] >> 8 * o(r) + 4 & 15) + t.charAt(i[r >> 2] >> 8 * o(r) & 15));
            return s.join("") } }();
    var h = function() {
        var t = function(t) {
                return t % 32 },
            e = function(t) {
                return 32 - s - t % 32 };
        return function(n, i) {
            var a = [],
                o = (1 << s) - 1,
                r = i ? t : e;
            for (var l = 0, c = 32 * n.length; l < c; l += s) a.push(String.fromCharCode(n[l >> 5] >>> r(l) & o));
            return a.join("") } }();
    var f = function() {
        var t = "=",
            e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = function(t) {
                return t % 4 },
            i = function(t) {
                return 3 - t % 4 };
        return function(a, s) {
            var o = [],
                r = s ? n : i;
            for (var l = 0, c; l < 4 * a.length; l += 3) { c = (a[l >> 2] >> 8 * r(l) & 255) << 16 | (a[l + 1 >> 2] >> 8 * r(l + 1) & 255) << 8 | a[l + 2 >> 2] >> 8 * r(l + 2) & 255;
                for (var d = 0; d < 4; d++) o.push(8 * l + 6 * d > 32 * a.length ? t : e.charAt(c >> 6 * (3 - d) & 63)) }
            return o.join("") } }();
    var _ = function(t, e, n, i, a, s) {
        return r(o(r(r(e, t), r(i, s)), a), n) };
    var p = function(t, e, n, i, a, s, o) {
        return _(e & n | ~e & i, t, e, a, s, o) };
    var m = function(t, e, n, i, a, s, o) {
        return _(e & i | n & ~i, t, e, a, s, o) };
    var g = function(t, e, n, i, a, s, o) {
        return _(e ^ n ^ i, t, e, a, s, o) };
    var v = function(t, e, n, i, a, s, o) {
        return _(n ^ (e | ~i), t, e, a, s, o) };
    var $ = function(t, e) { t[e >> 5] |= 128 << e % 32;
        t[(e + 64 >>> 9 << 4) + 14] = e;
        var n = 1732584193,
            i = -271733879,
            a = -1732584194,
            s = 271733878;
        for (var o = 0, l = t.length, c, d, u, h; o < l; o += 16) { c = n;
            d = i;
            u = a;
            h = s;
            n = p(n, i, a, s, t[o + 0], 7, -680876936);
            s = p(s, n, i, a, t[o + 1], 12, -389564586);
            a = p(a, s, n, i, t[o + 2], 17, 606105819);
            i = p(i, a, s, n, t[o + 3], 22, -1044525330);
            n = p(n, i, a, s, t[o + 4], 7, -176418897);
            s = p(s, n, i, a, t[o + 5], 12, 1200080426);
            a = p(a, s, n, i, t[o + 6], 17, -1473231341);
            i = p(i, a, s, n, t[o + 7], 22, -45705983);
            n = p(n, i, a, s, t[o + 8], 7, 1770035416);
            s = p(s, n, i, a, t[o + 9], 12, -1958414417);
            a = p(a, s, n, i, t[o + 10], 17, -42063);
            i = p(i, a, s, n, t[o + 11], 22, -1990404162);
            n = p(n, i, a, s, t[o + 12], 7, 1804603682);
            s = p(s, n, i, a, t[o + 13], 12, -40341101);
            a = p(a, s, n, i, t[o + 14], 17, -1502002290);
            i = p(i, a, s, n, t[o + 15], 22, 1236535329);
            n = m(n, i, a, s, t[o + 1], 5, -165796510);
            s = m(s, n, i, a, t[o + 6], 9, -1069501632);
            a = m(a, s, n, i, t[o + 11], 14, 643717713);
            i = m(i, a, s, n, t[o + 0], 20, -373897302);
            n = m(n, i, a, s, t[o + 5], 5, -701558691);
            s = m(s, n, i, a, t[o + 10], 9, 38016083);
            a = m(a, s, n, i, t[o + 15], 14, -660478335);
            i = m(i, a, s, n, t[o + 4], 20, -405537848);
            n = m(n, i, a, s, t[o + 9], 5, 568446438);
            s = m(s, n, i, a, t[o + 14], 9, -1019803690);
            a = m(a, s, n, i, t[o + 3], 14, -187363961);
            i = m(i, a, s, n, t[o + 8], 20, 1163531501);
            n = m(n, i, a, s, t[o + 13], 5, -1444681467);
            s = m(s, n, i, a, t[o + 2], 9, -51403784);
            a = m(a, s, n, i, t[o + 7], 14, 1735328473);
            i = m(i, a, s, n, t[o + 12], 20, -1926607734);
            n = g(n, i, a, s, t[o + 5], 4, -378558);
            s = g(s, n, i, a, t[o + 8], 11, -2022574463);
            a = g(a, s, n, i, t[o + 11], 16, 1839030562);
            i = g(i, a, s, n, t[o + 14], 23, -35309556);
            n = g(n, i, a, s, t[o + 1], 4, -1530992060);
            s = g(s, n, i, a, t[o + 4], 11, 1272893353);
            a = g(a, s, n, i, t[o + 7], 16, -155497632);
            i = g(i, a, s, n, t[o + 10], 23, -1094730640);
            n = g(n, i, a, s, t[o + 13], 4, 681279174);
            s = g(s, n, i, a, t[o + 0], 11, -358537222);
            a = g(a, s, n, i, t[o + 3], 16, -722521979);
            i = g(i, a, s, n, t[o + 6], 23, 76029189);
            n = g(n, i, a, s, t[o + 9], 4, -640364487);
            s = g(s, n, i, a, t[o + 12], 11, -421815835);
            a = g(a, s, n, i, t[o + 15], 16, 530742520);
            i = g(i, a, s, n, t[o + 2], 23, -995338651);
            n = v(n, i, a, s, t[o + 0], 6, -198630844);
            s = v(s, n, i, a, t[o + 7], 10, 1126891415);
            a = v(a, s, n, i, t[o + 14], 15, -1416354905);
            i = v(i, a, s, n, t[o + 5], 21, -57434055);
            n = v(n, i, a, s, t[o + 12], 6, 1700485571);
            s = v(s, n, i, a, t[o + 3], 10, -1894986606);
            a = v(a, s, n, i, t[o + 10], 15, -1051523);
            i = v(i, a, s, n, t[o + 1], 21, -2054922799);
            n = v(n, i, a, s, t[o + 8], 6, 1873313359);
            s = v(s, n, i, a, t[o + 15], 10, -30611744);
            a = v(a, s, n, i, t[o + 6], 15, -1560198380);
            i = v(i, a, s, n, t[o + 13], 21, 1309151649);
            n = v(n, i, a, s, t[o + 4], 6, -145523070);
            s = v(s, n, i, a, t[o + 11], 10, -1120210379);
            a = v(a, s, n, i, t[o + 2], 15, 718787259);
            i = v(i, a, s, n, t[o + 9], 21, -343485551);
            n = r(n, c);
            i = r(i, d);
            a = r(a, u);
            s = r(s, h) }
        return [n, i, a, s] };
    var y = function(t, e) {
        var n = d(t, !0);
        if (n.length > 16) n = $(n, t.length * s);
        var i = Array(16),
            a = Array(16);
        for (var o = 0; o < 16; o++) { i[o] = 909522486 ^ n[o];
            a[o] = 1549556828 ^ n[o] }
        var r = $(i.concat(d(e, !0)), 512 + e.length * s);
        return $(a.concat(r), 640) };
    var b = function(t, e) { t[e >> 5] |= 128 << 24 - e % 32;
        t[(e + 64 >> 9 << 4) + 15] = e;
        var n = Array(80),
            i = 1732584193,
            a = -271733879,
            s = -1732584194,
            d = 271733878,
            u = -1009589776;
        for (var h = 0, f = t.length, _, p, m, g, v; h < f; h += 16) { _ = i;
            p = a;
            m = s;
            g = d;
            v = u;
            for (var $ = 0; $ < 80; $++) { n[$] = $ < 16 ? t[h + $] : o(n[$ - 3] ^ n[$ - 8] ^ n[$ - 14] ^ n[$ - 16], 1);
                var y = r(r(o(i, 5), l($, a, s, d)), r(r(u, n[$]), c($)));
                u = d;
                d = s;
                s = o(a, 30);
                a = i;
                i = y }
            i = r(i, _);
            a = r(a, p);
            s = r(s, m);
            d = r(d, g);
            u = r(u, v) }
        return [i, a, s, d, u] };
    var w = function(t, e) {
        var n = d(t);
        if (n.length > 16) n = b(n, t.length * s);
        var i = Array(16),
            a = Array(16);
        for (var o = 0; o < 16; o++) { i[o] = 909522486 ^ n[o];
            a[o] = 1549556828 ^ n[o] }
        var r = b(i.concat(d(e)), 512 + e.length * s);
        return b(a.concat(r), 672) };
    e._$hmacsha12hex = function(t, e) {
        return u(w(t, e)) };
    e._$hmacsha12b64 = function(t, e) {
        return f(w(t, e)) };
    e._$hmacsha12str = function(t, e) {
        return h(w(t, e)) };
    e._$hmacmd52hex = function(t, e) {
        return u(y(t, e), !0) };
    e._$hmacmd52b64 = function(t, e) {
        return f(y(t, e), !0) };
    e._$hmacmd52str = function(t, e) {
        return h(y(t, e), !0) };
    e._$sha12hex = function(t) {
        return u(b(d(t), t.length * s)) };
    e._$sha12b64 = function(t) {
        return f(b(d(t), t.length * s)) };
    e._$sha12str = function(t) {
        return h(b(d(t), t.length * s)) };
    e._$md52hex = function(t) {
        return u($(d(t, !0), t.length * s), !0) };
    e._$md52b64 = function(t) {
        return f($(d(t, !0), t.length * s), !0) };
    e._$md52str = function(t) {
        return h($(d(t, !0), t.length * s), !0) };
    e._$str2hex = function(t, e) {
        return u(d(t, !e), !e) };
    if (!0) t.copy(t.P("nej.u"), e);
    return e
}, 215);
I$(15, function(t, e, n, i, a, s) {
    var o = {},
        r = function() {},
        l = {},
        c = n._$format(new Date, "yyyyMMddHHmm") + n._$randNumberString(6);
    o.typeOf = function(t) {
        return null == t ? String(t) : {}.toString.call(t).slice(8, -1).toLowerCase() };
    o.isLogin = function(t) {
        var e = "/getUserName.html",
            n = { method: "get", norest: !0, type: "json", onload: function(e) {
                    if (!e || 461 != e.retcode) t(1);
                    else t(0) }._$bind(this), onerror: function() { t(0) }._$bind(this) };
        s._$request(e, n) };
    o.findInList = function(t, e, n) { n = n || "id";
        var i = e.length;
        for (; i--;)
            if (e[i][n] == t) return i;
        return -1 };
    o.merge = function(t, e) {
        var n = o.typeOf(t),
            i = o.typeOf(e),
            a;
        if (n !== i) return e;
        switch (i) {
            case "object":
                for (var s in e)
                    if (e.hasOwnProperty(s)) t[s] = o.merge(t[s], e[s]);
                break;
            case "array":
                for (var s = 0, a = e.length; s < a; s++) t[s] = o.merge(t[s], e[s]);
                t.length = e.length;
                break;
            default:
                return e }
        return t };
    o.mergeList = function(t, e, n) { n = n || "id";
        var i = t.length;
        for (; i--;)
            for (var a = 0, s = e.length; a < s; a++)
                if (null != e[a][n] && e[a][n] === t[i][n]) { t.splice(i, 1, o.merge(e[a], t[i]));
                    break } };
    o.clone = function(t) {
        var e = o.typeOf(t);
        switch (e) {
            case "object":
                var n = {};
                for (var i in t) n[i] = o.clone(t[i]);
                return n;
            case "array":
                return t.map(o.clone);
            default:
                return t } };
    o.extend = function(t, e, n) {
        for (var i in e)
            if (void 0 == t[i] || n) t[i] = e[i];
        return t };
    o.initSelect = function(t, e, n, i) { t.options.length = 0;
        n = n || "value";
        i = i || "text";
        for (var a = 0, s = e.length; a < s; a++) {
            if ("string" == typeof e[a]) var o = new Option(e[a], e[a]);
            else var o = new Option(e[a][i], e[a][n]);
            t.options.add(o) } };
    o.throttle = function(t, e, n) {
        var i, a, s;
        var o = null;
        var r = 0;
        if (!n) n = {};
        var l = function() { r = n.leading === !1 ? 0 : +new Date;
            o = null;
            s = t.apply(i, a);
            if (!o) i = a = null };
        return function() {
            var c = +new Date;
            if (!r && n.leading === !1) r = c;
            var d = e - (c - r);
            i = this;
            a = arguments;
            if (d <= 0 || d > e) { clearTimeout(o);
                o = null;
                r = c;
                s = t.apply(i, a);
                if (!o) i = a = null } else if (!o && n.trailing !== !1) o = setTimeout(l, d);
            return s } };
    o.isInClassNode = function(t, n) {
        for (; t;)
            if (e._$hasClassName(t, n)) return !0;
            else t = t.parentNode;
        return !1 };
    o.getParentElementByTag = function(t, e) {
        for (; t;)
            if (t.tagName == e.toUpperCase()) return t;
            else t = t.parentNode;
        return null };
    o.getParentElementByClass = function(t, n) {
        for (; t;)
            if (e._$hasClassName(t, n)) return t;
            else t = t.parentNode;
        return null };
    o.imgThumbnailUrl = function(t, e, n, i) {
        var a = t || "",
            s = e || 0,
            o = n || 0,
            r = i || 85,
            l = "";
        if (!a) return "";
        a = a.replace(/^http:/i, "");
        if (/imageView/g.test(a) && /thumbnail/g.test(a)) return a;
        if (s + o == 0) s = 1e3;
        l = "imageView&thumbnail=" + s + "x" + o + "&quality=" + r;
        if (/\?/g.test(a)) return a + "&" + l;
        else return a + "?" + l };
    o.daEvent = function(t, e, n, i) {
        var a = { userAccount: window.account || "", userId: window.account || "" };
        if (i) a = this.merge(a, i);!!window._dapush && window._dapush("_trackEvent", t || "", e || "", n || "", a) };
    o.getUrlParam = function(t) {
        return n._$query2object(window.location.search.replace(/^\?/g, ""))[t] };
    o.insertParamIntoUrl = function(t, e) {
        if (!t || !e) return t || "";
        var n = t.split("#"),
            i = n[0];
        n[0] = i.indexOf("?") >= 0 ? i + "&" + e : i + "?" + e;
        return n.length > 1 ? n.join("#") : n[0] };
    o.compressHtml = function(t) {
        if ("string" != typeof t) return t;
        else return t.replace(/[\r\n]|\s+(?=[<{])/g, "").replace(/[}>]\s+/g, function(t) {
            return t.substr(0, 1) }) };
    o.getOffset = function(t) {
        var e = document.documentElement.scrollTop || document.body.scrollTop,
            n = document.documentElement.scrollLeft || document.body.scrollLeft,
            i = t.getBoundingClientRect();
        return { top: e + i.top, bottom: e + i.bottom, left: n + i.left, right: n + i.right, width: i.right - i.left, height: i.bottom - i.top } };
    o.millisecond2LeftTime = function(t, e) {
        var n = +t > 0 ? +t : 0,
            i = 6e4,
            a = 60 * i,
            s = 24 * a,
            o = function(t) {
                return (t < 10 ? "0" : "") + t };
        var r = Math.floor(n / s),
            l = Math.floor(n % s / a),
            c = Math.floor(n % s % a / i),
            d = Math.floor(n % s % a % i / 1e3);
        if (1 == r && 0 == l) { r = 0;
            l = 24 }
        var u = [o(r), o(l), o(c), o(d)];
        return e ? { d: r, h: l, m: c, s: d, dd: u[0], hh: u[1], mm: u[2], ss: u[3] } : u };
    o.formatTime = function(t, e) {
        var n = /^\d+$/gi.test(t + "") ? +t : Date.parse(t);
        if (isNaN(n)) return t;
        var i = new Date(n),
            a = function(t) {
                return ("0" + t).slice(-2) },
            s = i.getMonth() + 1,
            o = i.getDate(),
            r = i.getHours(),
            l = i.getMinutes(),
            c = i.getSeconds(),
            d = { yyyy: i.getFullYear(), M: s, MM: a(s), d: o, dd: a(o), h: r, hh: a(r), m: l, mm: a(l), s: c, ss: a(c) };
        return (e || "yyyy-MM-dd hh:mm:ss").replace(/y{4}|[Mdhms]{1,2}/gi, function(t) {
            return d[t] }) };
    o.safeHtml = function(t) {
        return String(t || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") };
    o.noProtocol = function(t) { t = (t || "").replace(/^http:/i, "");
        return t };
    return o }, 3, 4, 2, 78, 245, 14);
I$(155, function(t, e, n) {
    n.format = function(e, n) {
        if (t._$isString(e)) {
            var i = e.split(" ");
            var a = i[0].split("-");
            var s = i[1].split(":");
            e = new Date(a[0], a[1] - 1, a[2], s[0], s[1], s[2]) }
        return t._$format(e, n || "yyyy-MM-dd") };
    n.mixMobile = function(t) {
        if (!t) return "";
        var e = t.substring(0, 3),
            n = t.substring(t.length - 4);
        return e + new Array(4).join("*") + n
    };
    n.escape = t._$escape;
    n.cutstr = function(t, e) {
        var n, i = 0,
            a = /[^\x00-\xff]/,
            s = "";
        for (var o = 0; o < t.length && i < e - 1; o++) { n = t.substr(o, 1);
            if (null == a.exec(n)) i += 1;
            else i += 2;
            s += n }
        return s + "..." };
    n.noProtocol = function(t) { t = (t || "").replace(/^http:/i, "");
        return t };
    n.concatObjValue = function(e, n) {
        var i = [];
        t._$forIn(e, function(t, e, n) { i.push(t) });
        return i.join(n) };
    n.fixed = function(e, n) {
        var i = parseFloat(e, 10),
            a;
        if (null == n) n = 2;
        if (t._$isNumber(i)) { a = t._$fixed(i, 2);
            var s = a.toString();
            var o = s.indexOf(".");
            if (o < 0) { o = s.length;
                s += "." }
            for (; s.length <= o + n;) s += "0";
            return s } else return "" };
    n.maxlength = { get: function(t, e) {
            return t || "" }, set: function(t, e) {
            var t = t || "";
            return n.substr(t, e) } };
    n.integer = { get: function(t) {
            return t || "" }, set: function(t) {
            return parseInt(t) } };
    n.number = { get: function(t) {
            return t || "" }, set: function(e, n) { n = n || 2;
            var i = e.indexOf(".");
            if (i == e.length - 1 || "0" == e) return e;
            else { e = parseFloat(e);
                return t._$fixed(e, n) } } };
    n.imgThumbnailUrl = e.imgThumbnailUrl;
    return n
}, 2, 15);
I$(445, '<div class="progress progress-fix animated" r-hide=\'!progress\' style=\'display:none\' \n  r-animation= \'on: leave;  wait: 200;class: fadeOut\'>\n  <div class="progress-bar progress-bar-striped active" \n    role="progressbar" \n    style=" background-color: {currentColor};width: {percent||0}% ;">\n  </div>\n</div>');
I$(227, function(t, e) {
    function n(t, e, n) {
        var i = n / 100,
            a = 0,
            s = 2 * i - 1,
            o = ((s * a == -1 ? s : (s + a) / (1 + s * a)) + 1) / 2,
            r = 1 - o,
            l = [parseInt(t[0] * o + e[0] * r), parseInt(t[1] * o + e[1] * r), parseInt(t[2] * o + e[2] * r)];
        return l }

    function i(t) { t = "#" === t.charAt(0) ? t.slice(1) : t;
        var e;
        if (6 === t.length) e = [parseInt(t.substr(0, 2), 16), parseInt(t.substr(2, 2), 16), parseInt(t.substr(4, 2), 16)];
        else {
            var n = t.substr(0, 1);
            var i = t.substr(1, 1);
            var a = t.substr(2, 1);
            e = [parseInt(n + n, 16), parseInt(i + i, 16), parseInt(a + a, 16)] }
        return e }
    var a = { COLOR_SUCCESS: "#5cb85c", COLOR_INFO: "#5bc0de", COLOR_DANGER: "#d9534f", COLOR_WARNING: "#f0ad4e" };
    var s = { ERROR: i(a.COLOR_DANGER), COMPLETE: i(a.COLOR_SUCCESS) };
    var o = Regular.extend({ template: t, data: { startColor: i(a.COLOR_INFO), endColor: s.COMPLETE, percent: 0 }, computed: { currentColor: function(t) {
                var e = n(t.startColor, t.endColor, 100 - t.percent);
                return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")" } }, init: function() {
            if (this.$root == this) this.$inject(document.body) }, move: function(t) { clearTimeout(this.timer);
            if (1e3 === t) this.end(!0);
            else this.$update("percent", t) }, start: function() {
            if (this.timer) clearTimeout(this.timer);
            this.data.progress = !0;
            this.data.percent = 2;
            this.data.endColor = s.COMPLETE;
            this.$update();
            this._startTimer() }, end: function(t) { clearTimeout(this.timer);
            this.data.progress = !1;
            this.data.percent = 100;
            this.data.endColor = !t ? s.COMPLETE : s.ERROR;
            this.$update() }, _startTimer: function() {
            var t = this.data;
            this.timer = this.$timeout(function() { t.percent = t.percent + (100 - t.percent) * (.2 * Math.random());
                this._startTimer();
                console.log(this.$get("currentColor")) }, 1e3 * Math.random() + 2e3) } }).use("timeout");
    return new o }, 445, 247);
I$(228, function(t, e, n, i, a, s, o, r, l, c) { o._$request = function() {
        var t = {},
            s = /\{(.*?)\}/gi,
            o = /^get|delete|head$/i,
            d = /json/i,
            u = /xml/i;
        var h = function(e) {
            var n = t[e];
            if (n) { delete n.s;
                delete n.f;
                delete t[e] } };
        var f = function(e, n) {
            var i = t[e];
            if (i) {
                var a = i[n],
                    s = c.slice.call(arguments, 2);
                try {
                    (a || l).apply(null, s) } catch (o) {
                    if (!1) throw o;
                    console.error(o.message);
                    console.error(o) }
                h(e) } };
        var _ = function(t, e) { f(t, "s", e) };
        var p = function(t, n) { n = n || {};
            if (n.code != i._$CODE_ERRSERV || 204 != n.data) { e._$dispatchEvent(window, "resterror", n);
                if (!n.stopped) f(t, "f", n);
                else h(t) } else _(t, null) };
        var m = function(t, e, n) {
            var i = t[e] || t[e.toLowerCase()];
            if (!i) { i = n;
                t[e] = i }
            return i };
        var g = function(t, e, i) {
            if (n._$isArray(t)) i[e] = JSON.stringify(t) };
        return function(e, i) { i = n._$merge({}, i);
            var c = {},
                h = i.param || r;
            e = e.replace(s, function(t, e) {
                var n = h[e];
                if (null != n) c[e] = !0;
                return encodeURIComponent(n || "") || t });
            var f = i.data || {};
            n._$loop(h, function(t, e) {
                if (!c[e]) f[e] = t });
            var v = "text",
                $ = i.headers || {},
                y = m($, "Accept", "application/json"),
                b = m($, "Content-Type", "application/json");
            if (d.test(y)) v = "json";
            else if (u.test(y)) v = "xml";
            var w = n._$uniqueID();
            t[w] = { s: i.onload || l, f: i.onerror || l };
            i.method = i.method || "GET";
            if (o.test(i.method.trim())) { n._$forIn(f, g);
                i.query = f;
                f = null } else if (d.test(b)) f = JSON.stringify(f);
            i.type = v;
            i.data = f;
            i.headers = $;
            i.onload = _._$bind(null, w);
            i.onerror = p._$bind(null, w);
            a._$request(e, i) } }();
    s._$$CustomEvent._$allocate({ element: window, event: "resterror" });
    if (!0) t.P("nej.j")._$requestByREST = o._$request;
    return o }, 215, 3, 2, 225, 14, 446);
I$(6, function(t, e, n, i) {
    var a = function() {};
    var s = function(s, o) { o = o || {};
        o.headers = o.headers || {};
        o.headers["X-Requested-With"] = "XMLHttpRequest";
        var r = o.onerror || a,
            l = o.onload || a;
        if (o.progress) { t.start();
            o.onload = function(e) {
                if (e && e.code >= 200 && e.code < 400 || e && e.retcode >= 200 && e.retcode < 400) { t.end();
                    l.apply(this, arguments) } else { t.end(!0);
                    r.apply(this, arguments) } };
            o.onerror = function(e) { t.end(!0);
                r.apply(this, arguments) } }
        if (o.method && "get" == o.method.toLowerCase()) {
            if (!o.data) o.data = {};
            if (!o.query) o.query = {};
            o.data.t = o.query.t = +new Date }
        if (!o.type) o.type = "json";
        if (o.norest) {
            if (!i._$isString(o.data)) o.data = i._$object2query(o.data);
            n._$request(s, o) } else e._$request(s, o) };
    return s }, 227, 228, 14, 2);
I$(151, function(t, e, n, i) {
    var a = Regular.util.slice,
        s = Regular.dom.msie,
        o = function() {},
        r = { BEGIN: "{", END: "}" };
    if (Regular.config) Regular.config(r);
    var l = function() {
        function t(t) {
            var e = t.attributes,
                n = e && e.length,
                i, a = [];
            if (n)
                for (var o = 0; o < n; o++)
                    if (!s || s > 8 || e[o].specified) { i = e[o];
                        a.push(i) }
            return a }

        function e(t) {
            var e = i.exec(t);
            return e && e[1] }

        function n(t) {
            var e = a.exec(t);
            return e && e[1] && Regular.expression(e[1]) }
        var i = /^on-(\w+)$/,
            a = new RegExp("^" + r.BEGIN + "(.*)" + r.END + "$");
        return { getAttrs: t, getEventName: e, getExpression: n } }();
    var c = Regular.extend({ scope: Regular, init: function u() {
            var t = this.scope;
            this._initComponents(t._components) }, _initComponents: function(t) {
            var e;
            for (var n in t) { e = t[n];
                if (e) this._initComponent(n, e) } }, _initDirectives: function(t) {
            var e;
            for (var n in t) { e = t[n];
                if (e) this._initDirective(n, e) } }, _initDirective: function(t, e) {
            var n = this.container || document.body;
            var i = nes.all("[" + t + "]");
            i.forEach(this._singleDirective.bind(this, "r-" + t, e, "name")) }, _initComponent: function(t, e) {
            var n = this.container || document.body;
            var i = a(n.getElementsByTagName(t));
            i.forEach(this._initTag.bind(this, e)) }, _initTag: function(t, e) {
            var n = l.getAttrs(e);
            var i = {},
                a = {},
                s = {},
                o = this,
                r;
            n.forEach(function(t) {
                var e = t.value,
                    n = t.name,
                    c, d;
                if ("id" === n) r = n;
                d = l.getEventName(n);
                c = l.getExpression(e);
                if (!d)
                    if (!c) i[n] = e;
                    else { s[n] = c;
                        i[n] = c.get(o) }
                else a[d] = Regular.util.handleEvent.call(o, c || e, d) });
            var c = new t({ data: i, events: a, $parent: this });
            if (r) this[r] = c;
            c.$bind(this, s);
            c.$inject(e, "after");
            e.parentNode.removeChild(e) } });
    Regular.dom.find = function(t) {
        return nes.one(t) };
    var d = Regular.extend({ $request: function(t, e) {
            function n() { a.$update("loading", !1) }
            var a = this;
            var s = e.onerror || o,
                r = e.onload || o;
            a.$update("loading", !0);
            e.onload = r._$aop(null, n).bind(this);
            e.onerror = s._$aop(null, n).bind(this);
            i(t, e) } }).directive(e.directives || {}).event(e.events || {}).filter(n || {});
    d.boot = function(t) { new c({ scope: d, data: t || window.__data__ || {} }) };
    return d }, 247, 339, 155, 6);
! function(t, e, n) {
    function i(t) { t = t || {};
        if (t.macros) this._macros = t.macros;
        this._links = {};
        this._rules = {};
        this.TRUNK = null;
        this.cache = W(t.maxCache || 200);
        this.cache.set("", [
            []
        ]) }

    function a(t) {
        return rt.parse(t) }

    function s(t, e) {
        return e ? t.nodeName === e : 1 === t.nodeType }

    function o(t, e) {
        var t = t.firstChild;
        return !t || s(t, e) ? t : c(t, e) }

    function r(t, e) {
        var t = t.lastChild;
        return !t || s(t, e) ? t : l(t, e) }

    function l(t, e) {
        for (; t = t.previousSibling;)
            if (s(t, e)) return t;
        return t }

    function c(t, e) {
        for (; t = t.nextSibling;)
            if (s(t, e)) return t;
        return t }

    function d(t, e) {
        var n = ct[e];
        if (n) return "function" == typeof n ? n(t) : t[n];
        if (ut) return t.getAttribute(e);
        var i = t.getAttributeNode(e);
        return "boolean" == typeof t[e] ? t[e] ? e : null : i && i.specified ? i.value : null }

    function u(t) {
        for (var e = t.length; e--;) {
            var n = t[e];
            t.splice(e, 1, null);
            if (~t.indexOf(n)) t.splice(e, 1);
            else t.splice(e, 1, n) }
        return t }

    function h(t, e) {
        if (t && e) {
            var n = t.nextSibling;
            for (; n;) {
                if (n === e) return -1;
                n = n.nextSibling } }
        return t ? 1 : -1 }

    function f(t) {
        return u(t.sort(ht)) }

    function _(t, e) {
        var n, i, a, s;
        if (t) { a = e ? "type" : "child";
            n = c;
            i = l;
            s = o } else { a = "last" + (e ? "type" : "child");
            i = c;
            n = l;
            s = r }
        return function(t, o) {
            var r = _t[a];
            if (t === lt) return !1;
            var l = ft(t),
                c = t.parentNode,
                d = o.step > 0 ? n : i,
                u = o.step,
                h = o.start,
                f = e && t.nodeName;
            if (null === u) return !1;
            if (!r[l]) {
                var _ = s(c, f),
                    p = 0;
                do { r[ft(_)] = ++p;
                    _t.length++ } while (_ = n(_, f)) }
            var m = r[l];
            if (0 === u) return m === h;
            else return (m - h) / u >= 0 && (m - h) % u === 0 } }

    function p() {
        if (_t.length) _t = { child: {}, lastchild: {}, type: {}, lasttype: {}, length: 0 } }

    function m(t, e, n) {
        var i;
        for (var a in e)
            if (n !== a && (i = mt[a]) && !i(t, e[a])) return !1;
        return !0 }

    function g(t, e, n) {
        var i = e.length,
            a = e[i - 1];
        if (!m(t, a, n)) return !1;
        else {
            if (1 == i) return !0;
            var s = e[i - 2],
                o = gt.combos[s.combo],
                r = vt[i - 2],
                l = o(t, r);
            if (l) return !0;
            else return !1 } }

    function v(t) {
        return function(n) {
            if (n == lt || null == n || n == e) return null;
            else return g(n, t) } }

    function $(t) {
        var e = [];
        for (var n = 0, i = t.length; n < i; n++) e.push(v(t.slice(0, n + 1)));
        return e }

    function y(t, e, n) {
        if (!e.length) return t;
        var i = vt;
        vt = $(e);
        for (var a = t.length; a--;)
            if (!g(t[a], e, n)) t.splice(a, 1);
        vt = i;
        return t }

    function b(t, e) {
        var n, i, a = t[t.length - 1];
        if (a.id) { n = pt.byId(a.id);
            i = "id" } else if (a.classList && a.classList.length && pt.byClassName) { n = pt.byClassName(a.classList, e);
            i = "classList" } else { n = pt.byTagName(a.tag || "*", e);
            i = "tag" }
        if (!n.length) return n;
        else return y(n, t, i) }

    function w(t, e) {
        if (!t[0][0]) return [];
        var n = [],
            i = 0;
        for (var a = 0, s = t.length; a < s; a++) {
            var o = t[a],
                r = o.length,
                l = o[r - 1],
                c = b(o, e);
            if (c && c.length) i++;
            if (!n) n = c;
            else n = n.concat(c) }
        p();
        if (i > 1) f(n);
        return n }

    function C(t, n) {
        var i = a(t);
        var s = w(i, n || e);
        return s }

    function x(t, n) {
        var i;
        if ($t && !k.debug) try { i = (n || e).querySelector(t) } catch (a) { i = C(t, n)[0] } else i = C(t, n)[0];
        return i }

    function T(t, n) {
        var i;
        if ($t && !k.debug) try { i = A((n || e).querySelectorAll(t)) } catch (a) { i = C(t, n) } else i = C(t, n);
        return i }

    function L(t, e) {
        if (!t || 1 !== t.nodeType) return !1;
        var n = a(e),
            i = n.length;
        if (!n[i - 1][0]) return !1;
        for (; i--;)
            if (S(t, n[i])) return !0;
        return !1 }

    function S(t, e) {
        var n = e.length;
        if (!m(t, e[n - 1])) return !1;
        else return 1 === y([t], e.slice(0)).length;
    }

    function I(t) {
        return function(e, n) {
            var i = n.split(/\s+of\s+/);
            if (i.length < 2) throw Error("no 'of' keyword in nth-match\"s selector");
            var a = it(i[0]),
                s = i[1],
                o = e.parentNode[t ? "firstChild" : "lastChild"],
                r = t ? "nextSibling" : "previousSibling",
                l = a.step,
                c = a.start,
                d = 0;
            if (!L(e, s)) return !1;
            if (null === l) return !1;
            do {
                if (1 === o.nodeType && k.matches(o, s)) d++;
                if (o === e) break } while (o = o[r]);
            if (0 === l) return d === c;
            else return (d - c) / l >= 0 && (d - c) % l === 0 } }
    var k = function(t, e) {
            return T(t, e) },
        D = {};
    var N = Array.prototype,
        E = Object.prototype,
        P = String.prototype,
        R = Function.prototype,
        B = N.slice,
        M = e.body,
        Y = e.createElement("div"),
        A = function(t) {
            return B.call(t) },
        j = function(t) {
            return null == t ? String(t) : E.toString.call(t).slice(8, -1).toLowerCase() },
        Z = function(t, e, n) {
            for (var i in e)
                if (null == t[i] || n) t[i] = e[i] },
        W = function(t) {
            var e = [],
                i = {};
            return { set: function(t, n) {
                    if (e.length > this.length) delete i[e.shift()];
                    i[t] = n;
                    e.push(t);
                    return n }, get: function(t) {
                    if (t === n) return i;
                    else return i[t] }, length: t, len: function() {
                    return e.length } } },
        X = function(t) {
            return function(e, n) {
                if ("object" == j(e))
                    for (var i in e) t.call(this, i, e[i]);
                else t.call(this, e, n);
                return this } },
        H = function(t) {
            try {
                return t() } catch (e) {
                return !1 } finally { Y = document.createElement("div") } };
    try { B.call(e.getElementsByTagName("body")) } catch (G) { A = function(t) {
            var e = [],
                n = t.length;
            for (var i = 0; i < n; i++) e.push(t[i]);
            return e } }
    var O = /^\s+|\s+$/g;
    P.trim = P.trim || function() {
        return this.replace(O, "") };
    R.bind = R.bind || function(t, e) { e = B.call(arguments, 1);
        var n = this;
        return function() {
            return n.apply(t, e.concat(B.call(arguments))) } };
    N.indexOf = N.indexOf || function(t) {
        for (var e = 0, n = this.length; e < n; e++)
            if (t === this[e]) return e;
        return -1 };
    var J = /\(\?\!|\(\?\:/,
        F = function(t) {
            var e = 0,
                n = 0,
                i = t.length,
                a = t.split(J).length - 1;
            for (; i--;) {
                var s = t.charAt(i);
                if (0 === i || "\\" !== t.charAt(i - 1)) {
                    if ("(" === s) e++;
                    if (")" === s) n++ } }
            if (e !== n) throw t + "中的括号不匹配";
            else return e - a },
        z = /\\(\d+)/g,
        Q = function(t, e) {
            return t },
        U = Object.keys || function(t) {
            var e = [];
            for (var n in t)
                if (t.hasOwnProperty(n)) e.push(n);
            return e },
        q = function(t) {
            var e = t.reg;
            if ("regexp" === j(e)) e = e.toString().slice(1, -1);
            t.regexp = e.replace(V, function(t, e) {
                if (e in at) return at[e];
                else throw new Error('can"t replace undefined macros:' + e) });
            return t },
        K = function(t) {
            for (var e in t)
                if (t.hasOwnProperty(e)) q(t[e]);
            return t };
    Z(i.prototype, { parse: function(t) { t = clean(t);
            if (e = this.cache.get(t)) return e;
            var e = this.parsed = [
                [null]
            ];
            var n = this.input = t;
            var i = this.TRUNK;
            var a;
            for (; a != (n = n.replace(i, this._process.bind(this)));) a = n;
            if ("" !== n) this.error(n);
            return this.cache.set(t, e) }, on: function(t) {
            if ("string" === j(t)) {
                var e = {};
                e[t] = arguments[1];
                t = e }
            for (var i in t) {
                var a = t[i];
                if ("object" !== j(a)) a = { regexp: a };
                var s = a.regexp;
                if ("regexp" === j(s)) a.regexp = s.toString().slice(1, -1);
                if (a.order === n) a.order = 1;
                this._rules[i] = a }
            this.setup();
            return this }, off: function(t) {
            if ("array" === j(t))
                for (var e = t.length; e--;) this.off(t[e]);
            else if (this._rules[t]) delete this._rules[t];
            return this }, current: function() {
            var t = this.parsed;
            var e = t[t.length - 1],
                n = e.length;
            return e[n - 1] || (e[n - 1] = { tag: "*" }) }, error: function(t) {
            throw Error("输入  " + this.input + "  含有未识别语句:" + t || "") }, clone: function(t) {
            return (new i).on(this._rules) }, _process: function() {
            var t = this._links,
                e = this._rules,
                n = B.call(arguments);
            for (var i in t) {
                var a = t[i],
                    s = a[1],
                    o = parseInt(a[0]);
                if (n[o] && (rule = e[i])) { rule.action.apply(this, n.slice(o, o + s));
                    return "" } }
            return "" }, setup: function() { K(this._rules);
            var t = 1,
                e = [],
                n = this._rules,
                i = this._links,
                a = U(n).sort(function(t, e) {
                    return n[t].order >= n[e].order }),
                s = a.length;
            for (; s--;) {
                var o = a[s],
                    r = n[o],
                    l = F(r.regexp) + 1;
                if (r.filter && !mt[o]) mt[o] = r.filter;
                i[o] = [t, l];
                var c = Q(r.regexp, t - 1);
                t += l;
                e.push(c) }
            this.TRUNK = new RegExp("^(?:(" + e.join(")|(") + "))");
            return this } });
    var V = /\{\{([^\}]*)\}\}/g,
        tt = /^(?:(\d+)|([+-]?\d*)?n([+-]\d+)?)$/,
        et = /^(nth)[\w-]*(-of-type|-child)/,
        nt = W(100),
        it = function(t) {
            var e, n, i;
            if (!t || !(t = t.replace(/\s+/g, ""))) return { start: 1, step: 0 };
            if (i = nt.get(t)) return i;
            if ("even" == t) { n = 2;
                e = 2 } else if ("odd" == t) { e = 2;
                n = 1 } else { i = t.match(tt);
                if (!i) e = null;
                else if (i[1]) { e = 0;
                    n = parseInt(i[1]) } else {
                    if ("-" == i[2]) i[2] = "-1";
                    e = i[2] ? parseInt(i[2]) : 1;
                    n = i[3] ? parseInt(i[3]) : 0 } }
            if (n < 1)
                if (e < 1) e = null;
                else n = - -n % e + e;
            return nt.set(t, { start: n, step: e }) };
    var at = { split: "\\s*,\\s*", operator: "[*^$|~!]?=", combo: "[>\\s+~](?!=)", word: "[\\\\\\w\\u00A1-\\uFFFF-]" },
        st = { split: { reg: "{{split}}", action: function(t) { this.parsed.push([null]) }, order: 0 }, id: { reg: "#({{word}}+)", action: function(t, e) { this.current().id = e } }, tag: { reg: "\\*|[a-zA-Z-]\\w*", action: function(t) { this.current().tag = t.toLowerCase() } }, classList: { reg: "\\.({{word}}+)", action: function(t, e) {
                    var n = this.current(),
                        i = n.classList || (n.classList = []);
                    i.push(e) } }, pesudos: { reg: ":({{word}}+)(?:\\(([^\\(\\)]*|(?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\))?", action: function(t, e, n) {
                    var i = this.current(),
                        a = i.pesudos || (i.pesudos = []),
                        e = e.toLowerCase(),
                        s = { name: e };
                    if (n) n = n.trim();
                    if (et.test(e)) n = it(n);
                    if (n) s.param = n;
                    a.push(s) } }, attributes: { reg: "\\[\\s*({{word}}+)(?:({{operator}})['\"]?([^'\"\\[]+)['\"]?)?\\s*\\]", action: function(t, e, n, i) {
                    var a = this.current(),
                        s = a.attributes || (a.attributes = []);
                    var o = {};
                    s.push({ key: e, operator: n, value: i }) } }, combo: { reg: "\\s*({{combo}})\\s*", action: function(t, e) {
                    var n = this.parsed,
                        i = n[n.length - 1];
                    this.current().combo = e;
                    i.push(null) }, order: 0 } };
    var ot = new RegExp("\\s*(,|" + at.combo + "|" + at.operator + ")\\s*", "g");
    clean = function(t) {
        return t.trim().replace(/\s+/g, " ").replace(ot, "$1") };
    var rt = new i;
    rt.on(st);
    var lt = e.documentElement || e;
    var ct = { "for": "htmlFor", href: function(t) {
            return "href" in t ? t.getAttribute("href", 2) : t.getAttribute("href") }, type: function(t) {
            return "type" in t ? t.getAttribute("type") : t.type } };
    var dt = H(function() { Y.appendChild(e.createComment(""));
        return !Y.getElementsByTagName("*").length || "number" != typeof e.getElementsByTagName("input").length });
    var ut = H(function() { Y.innerHTML = "<select></select>";
        var t = j(Y.lastChild.getAttribute("multiple"));
        return "boolean" !== t && "string" !== t });
    var ht = e.compareDocumentPosition ? function(t, e) {
        if (!t.compareDocumentPosition || !e.compareDocumentPosition) return 0;
        else return 4 & t.compareDocumentPosition(e) ? -1 : t === e ? 0 : 1 } : "sourceIndex" in e ? function(t, e) {
        if (!t.sourceIndex || !e.sourceIndex) return 0;
        else return t.sourceIndex - e.sourceIndex } : function(t, n) {
        var i = 0,
            a = [t],
            s = [n],
            o = t.parentNode,
            r = n.parentNode,
            l = o;
        if (t === e) return -1;
        else if (n === e) return 1;
        else if (!o && !r) return 0;
        else if (!r) return -1;
        else if (!o) return 1;
        else if (o === r) return h(t, n);
        for (; l;) { a.unshift(l);
            l = l.parentNode }
        l = r;
        for (; l;) { s.unshift(l);
            l = l.parentNode }
        for (; a[i] === s[i];) i++;
        return h(a[i], s[i]) };
    var ft = function(t) {
        var e = 0;
        return function(n) {
            return n._uid || (n._uid = t + e++) } }("nes_" + (+new Date).toString(36));
    var _t = { length: 1 };
    p();
    var pt = { byId: function(t) {
            var n = e.getElementById(t);
            return n ? [n] : [] }, byClassName: e.getElementsByClassName ? function(t, n) { t = t.join(" ");
            return A((n || e).getElementsByClassName(t)) } : null, byTagName: dt ? function(t, n) {
            var i = (n || e).getElementsByTagName(t);
            return A(i) } : function(t, n) {
            var i = (n || e).getElementsByTagName(t);
            var a, s = [],
                o = 0;
            for (; a = i[o]; o++)
                if (1 === a.nodeType) s.push(a);
            return s } };
    var mt = { id: function(t, e) {
            return t.id === e }, classList: function(t, e) {
            var n = e.length,
                i = " " + t.className + " ";
            for (; n--;)
                if (i.indexOf(" " + e[n] + " ") === -1) return !1;
            return !0 }, tag: function(t, e) {
            if ("*" == e) return !0;
            else return t.tagName.toLowerCase() === e }, pesudos: function(t, e) {
            var n = e.length,
                i = gt["pesudos"];
            for (; n--;) {
                var a = e[n],
                    s = a.name,
                    o = i[s];
                if (!o) throw Error("不支持的伪类:" + s);
                if (!o(t, a.param)) return !1 }
            return !0 }, attributes: function(t, e) {
            var n = e.length,
                i = gt["operators"];
            for (; n--;) {
                var a = e[n],
                    s = a["operator"],
                    o = i[s],
                    r = d(t, a.key);
                if (null !== r)
                    if (s) {
                        if (!o) throw Error("不支持的操作符:" + s);
                        if (!o(a.value, r + "")) return !1 } else;
                else if ("!=" !== s) return !1 }
            return !0 } };
    var gt = { combos: { ">": function(t, e) {
                var n = t.parentNode;
                if (e(n)) return n }, "~": function(t, e) {
                var n = l(t);
                for (; n;) {
                    if (e(n)) return n;
                    n = l(n) } }, " ": function(t, e) {
                var n = t.parentNode;
                for (; n;) {
                    var i = e(n);
                    if (i) return n;
                    if (null === i) return null;
                    n = n.parentNode }
                return null }, "+": function(t, e) {
                var n = l(t);
                if (n && e(n)) return n } }, operators: { "^=": function(t, e) {
                if (null == e) return !1;
                else return 0 === e.indexOf(t) }, "=": function(t, e) {
                return e === t }, "~=": function(t, e) {
                if (null == e) return !1;
                else return ~(" " + e + " ").indexOf(t) }, "$=": function(t, e) {
                return e.substr(e.length - t.length) === t }, "|=": function(t, e) {
                return ~("-" + e + "-").indexOf("-" + t + "-") }, "*=": function(t, e) {
                return ~e.indexOf(t) }, "!=": function(t, e) {
                return e !== t } }, pesudos: { not: function(t, e) {
                return !L(t, e) }, matches: function(t, e) {
                return L(t, e) }, "nth-child": _(!0, !1), "nth-last-child": _(!1, !1), "nth-of-type": _(!0, !0), "nth-last-of-type": _(!1, !0), "first-child": function(t) {
                return !l(t) }, "last-child": function(t) {
                return !c(t) }, "last-of-type": function(t) {
                return !c(t, t.nodeName) }, "first-of-type": function(t) {
                return !l(t, t.nodeName) }, "only-child": function(t) {
                return !l(t) && !c(t) }, "only-of-type": function(t) {
                return !l(t, t.nodeName) && !c(t, t.nodeName) }, contains: function(t, e) {
                return ~(t.innerText || t.textContent || "").indexOf(e) }, checked: function(t) {
                return !!t.checked || !!t.selected }, selected: function(t) {
                return t.selected }, enabled: function(t) {
                return t.disabled === !1 }, disabled: function(t) {
                return t.disabled === !0 }, empty: function(t) {
                var e;
                t = t.firstChild;
                for (; t;) {
                    if (t.nodeName > "@" || 3 === (e = t.nodeType) || 4 === e) return !1;
                    t = t.nextSibling }
                return !0 }, focus: function(t) {
                return t === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) }, target: function(t, e) {
                var n = t.id || t.name;
                if (!n) return !1;
                else return "#" + n === location.hash } } };
    var vt = null;
    var $t = !!e.querySelector;
    ! function yt(t, e) {
        for (var n in t) k[n] = function(n) {
            var i = t[n];
            return X(function(t, a) { i[t] = a;
                if (n in e) e[n](t, a) }) }(n) }(gt, { operators: function(t) {
            var e = at.operator.split("]");
            e.splice(1, 0, t.charAt(0) + "]");
            at.operator = e.join("");
            rt.setup() }, combos: function(t) {
            var e = at.combo.split("]");
            e.splice(1, 0, t + "]");
            at.combo = e.join("");
            rt.setup() } });
    k.debug = !1;
    k._nthCache = nt;
    k.parser = rt;
    k.parse = a;
    k._find = w;
    k._get = C;
    k.one = x;
    k.all = T;
    k.matches = L;
    k._uniqueSort = f;
    k._cleanSelector = clean;
    k._getUid = ft;
    if ("object" == typeof exports) module.exports = k;
    else if ("function" == typeof define && define.amd) define(function() {
        return k });
    else t.nes = k;
    k.pesudos({
        "nth-match": I(!0),
        "nth-last-match": I(!1),
        "local-link": function(t, e) {
            if (e) e = parseInt(e) }
    })
}(window, document, void 0);
I$(287, function(t, e, n, i, a, s) { n._$all = function() {
        try {
            return nes.all.apply(nes, arguments) } catch (t) {
            return null } };
    n._$one = function() {
        try {
            return nes.one.apply(nes, arguments) } catch (t) {
            return null } };
    n._$g = nes._get;
    if (!0) t.copy(t.P("nej.e"), n);
    return n }, 215, 485);
I$(79, function(t, e, n, i, a) {
    function s(t, e) { this.length = 0;
        this._signs = {};
        this._context = e || l;
        if (t)
            if ("string" == typeof t) {
                if (e && e instanceof s) e = e[0];
                if ("string" == typeof e) e = $(e)[0];
                this._$add(a._$all(t, e)) } else if (t instanceof s || m(t) || t.length) this._$add(t) }
    var o = /^\s*<(\w+|!)[^>]*>/,
        r = [].slice,
        l = document,
        c = "documentElement",
        d = l[c],
        u = l.createElement("div"),
        h = null == u.textContent ? "innerText" : "textContent",
        f = function(t, e, n) { n = n || {};
            if (null == this[t] || n.override) this[t] = e;
            return this },
        _ = function(t, e, n) {
            for (; e && e !== n;) {
                if (nes.matches(e, t)) return e;
                e = e.parentNode } },
        p = function(n, i, a) {
            return n === a || "undefined" === n || n === this || n === e || n === t },
        m = function(t) {
            if (!t) return !1;
            var e = t.nodeType;
            return 1 === e || 9 === e || 11 === e || t.window === t },
        g = function(t) {
            var e = t.prototype,
                n = {};
            return { extend: function(t, i) { n[t] = e[t];
                    e[t] = i;
                    return this }, reset: function() {
                    for (var t in n)
                        if (n.hasOwnProperty(t))
                            if (void 0 === n[t]) delete e[t];
                            else e[t] = n[t] } } },
        v = g(Function);
    v.extend("autoSet", function() {
        var t = this;
        return function(e, i) {
            if (n._$isObject(e)) {
                var a = r.call(arguments, 1);
                for (var s in e) t.apply(this, [s, e[s]].concat(a));
                return this } else return t.apply(this, arguments) } }).extend("splitProcess", function(t) {
        var e = this;
        return function(i) {
            if (n._$isArray(i)) {
                var a = r.call(arguments, 1),
                    s = i.length,
                    o;
                if (t) o = {};
                for (var l = 0; l < s; l++) {
                    var c = i[l],
                        d = e.apply(this, [c].concat(a));
                    if (t && "string" == typeof c) o[c] = d }
                return t ? o : this } else return e.apply(this, arguments) } });
    f = f.autoSet();
    var $ = function(t, e) { $._$implement(i._$dump(), { statics: !0 });
        i._$clear();
        if ("string" == typeof t && 0 == t.trim().indexOf("<")) {
            var n = document.createElement("div");
            n.innerHTML = t;
            var a = $(n.childNodes);
            return a }
        return new s(t, e) };
    $._$extend = f._$bind($);
    $._$extend({ _$signal: "_uid", _$instances: {}, _$handlers: [], _$fragment: function() {}, _$implement: function(t, e, n) { n = n || {};
            f.call(s.prototype, t, n.statics ? this._transport(e) : e) }.autoSet(), _transport: function(t) {
            return function() {
                var e = r.call(arguments);
                e.unshift(this[0]);
                var n = t.apply(this, e);
                if (!p.call(this, n)) return n;
                this._$forEach(function(n, i) {
                    if (0 !== i) { e[0] = n;
                        t.apply(this, e) } });
                return this } }, _merge: function(t, e, n) {
            var i = t.length || 0,
                a = 0;
            for (; void 0 !== e[a];) {
                var s = e[a++];
                if (!n || n.call(t, s)) t[i++] = s }
            t.length = i;
            return t }, _toArray: function(t) {
            return $._merge([], t) }, _contains: d.contains ? function(t, e) {
            return t === e || (9 == t.nodeType ? t[c] : t).contains(e) } : d.compareDocumentPosition ? function(t, e) {
            return e && !!(16 & t.compareDocumentPosition(e)) } : function(t, e) {
            for (; e = e.parentNode;)
                if (e === t) return !0;
            return !1 }, _$cloneNode: function(t, e) { e = !!e;
            var n = t.cloneNode(e),
                i, a;
            if (e) { a = nes.all("*", t);
                a.push(t);
                i = nes.all("*", n);
                i.push(n) } else { a = [t];
                i = [n] }
            for (_i = i.length; _i--;) w.fixture.clone(i[_i], a[_i]);
            return n }, _delegateHandlers: {}, _cleanSelector: nes._cleanSelector, _$uniqueSort: nes._uniqueSort, _$matches: nes.matches, _$fn: s.prototype, _$uid: nes._getUid });
    var y = /^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/,
        b = /^key(?:)/,
        w = { insertor: { top: function(t, e) { t.insertBefore(e, t.firstChild) }, bottom: function(t, e) { t.appendChild(e) }, before: function(t, e) {
                    var n = t.parentNode;
                    if (n) n.insertBefore(e, t) }, after: function(t, e) {
                    var n = t.parentNode;
                    if (n) n.insertBefore(e, t.nextSibling) } }, fixProps: { input: "checked", option: "selected", textarea: "value", script: "text" }, fixture: { clone: function(t, e) {
                    var n, i;
                    if (1 === t.nodeType) {
                        if (t.clearAttributes) { t.clearAttributes();
                            t.mergeAttributes(e) }
                        n = t.nodeName.toLowerCase();
                        if (_prop = w.fixProps[n]) t[_prop] = e[_prop];
                        t.removeAttribute($._$signal);
                        t.removeAttribute("id") } }, event: function(e) {
                    var n = e.type;
                    var i = e.button;
                    e.__fixed = !0;
                    e.target = e.target || e.srcElement || document;
                    e.metaKey = !!e.metaKey;
                    if (3 === e.target.nodeType) e.target = e.target.parentNode;
                    if (y.test(n)) { e.pageX = t._$pageX(e);
                        e.pageY = t._$pageY(e);
                        if ("mouseover" === n || "mouseout" === n) {
                            var a = e.relatedTarget || e[("mouseover" == n ? "from" : "to") + "Element"];
                            for (; a && 3 == a.nodeType;) a = a.parentNode;
                            e.relatedTarget = a } }
                    e.which = null != e.charCode ? e.charCode : e.keyCode;
                    if (!e.which && void 0 !== i) e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0;
                    if (!e.preventDefault) e.preventDefault = function() { this.returnValue = !1;
                        return this };
                    if (!e.stopPropagation) e.stopPropagation = function() { this.cancelBubble = !0;
                        return this } } } },
        C = function(t) {
            var e = $._$matches;
            return function(n, i) {
                var a = $([]);
                if ("boolean" == typeof n) { i = n;
                    n = null }
                this._$forEach(function(s) {
                    var o = s[t];
                    for (; o;) {
                        if (1 === o.nodeType && (!n || e(o, n))) { a._$add(o);
                            if (!i) break }
                        o = o[t] } });
                return a } };
    $._$implement({ _$style: function(t, n) {
            if (!t) throw Error("缺少css样式名");
            if (void 0 === n) return e._$getStyle(this[0], t);
            else return this._$forEach(function(i) { e._$setStyle(i, t, n) }) }.splitProcess(!0).autoSet(), _$attr: function(t, n) {
            if (!t) throw Error("缺少属性名");
            if (void 0 === n) return e._$attr(this[0], t);
            else return this._$forEach(function(i) { e._$attr(i, t, n) }) }.splitProcess(!0).autoSet(), _$forEach: function(t) { n._$forEach(this, t);
            return this }, _$filter: function(t) {
            var e = [],
                n = "string" == typeof t;
            this._$forEach(function(i, a) {
                var s = n ? $._$matches(i, t) : t.call(this, i, a);
                if (s) e.push(i) });
            return $(e) }, _$map: function(t) {
            var e = [],
                n = !1;
            this._$forEach(function(i, a) {
                var s = t.call(this, i, a);
                if (!m(s)) n = !0;
                e.push(s) });
            return n ? e : $([])._$add(e) }, _$sort: function() {
            var t = this._$get();
            $._$uniqueSort(t);
            return $(t) }, _$add: function(t) {
            if (t) {
                if (t.tagName || "number" != typeof t.length || t === window) t = [t];
                $._merge(this, t, function(t) {
                    if (!m(t)) return !1;
                    var e = $._$uid(t);
                    if (this._signs[e]) return !1;
                    else { this._signs[e] = 1;
                        return !0 } });
                return this } }, _$get: function(t, e) {
            if ("number" != typeof t) return $._toArray(this);
            else return e ? $(this[t]) : this[t] }, _$last: function(t) {
            return t ? $(this[this.length - 1]) : this[this.length - 1] }, _$first: function(t) {
            return t ? $(this[0]) : this[0] }, _$matches: function(t) {
            return $._$matches(this[0], t) }, _$parent: C("parentNode"), _$prev: C("previousSibling"), _$next: C("nextSibling"), _$children: function(t, e) {
            var n = $([]);
            if ("boolean" == typeof t) { e = t;
                t = null }
            this._$forEach(function(i) {
                var s = e ? a._$all(t || "*", i) : t ? $(i.childNodes)._$filter(t) : $(i.childNodes);
                n._$add(s) });
            return n }, _$siblings: function(t) {
            return this._$prev(t, !0)._$add(this._$next(t, !0)) }, _$insert: function(t, e) { e = e && e.toLowerCase() || "bottom";
            if (!w.insertor[e]) e = "bottom";
            var n = $(t)[0],
                i = w.insertor[e];
            if (!n) throw Error("The Element to be inserted is not exist");
            return this._$forEach(function(t, e) { i(t, 0 === e ? n : $._$cloneNode(n, !0)) }) }, _$insert2: function(t, e) { $(t)._$insert(this, e);
            return this }, _$clone: function(t) {
            return this._$map(function(e) {
                return $._$cloneNode(e, t) }) }, _$text: function(t) {
            if (void 0 === t) {
                if (!this[0]) throw Error("内部节点为空，无法完成get操作");
                return this[0][h] }
            return this._$forEach(function(e) { e[h] = t }) }, _$html: function(t) {
            if (void 0 === t) {
                if (!this[0]) throw Error("内部节点为空，无法完成get操作");
                return this[0].innerHTML }
            return this._$forEach(function(e) { e.innerHTML = t }) }, _$val: function(t) {
            if (void 0 === t) {
                if (!this[0]) throw Error("内部节点为空，无法完成get操作");
                return this[0].value }
            return this._$forEach(function(e) { e.value = t }) }, _delegate: function(e, n, i) { n = $._cleanSelector(n);
            return this._$forEach(function(a) {
                var s = $._$uid(a),
                    o = $._delegateHandlers[s] || ($._delegateHandlers[s] = {}),
                    r = o[e] || (o[e] = {}),
                    l = r[n] || (r[n] = []);
                var c = function(t) {
                    var e;
                    if (e = _(n, t.target || t.srcElement, a)) i.apply(e, arguments) };
                c._raw = i;
                l.push(c);
                t._$addEvent(a, e, c) }) }, _undelegate: function(e, n, i) { n = $._cleanSelector(n);
            return this._$forEach(function(a) {
                var s = $._$uid(a);
                var o, r, l;
                if ((o = $._delegateHandlers[s]) && (r = o[e]) && (l = r[n])) {
                    for (var c = l.length; c--;) {
                        var d = l[c];
                        if (!i || d._raw === i) { t._$delEvent(a, e, d);
                            l.splice(c, 1) } }
                    if (!l.length) delete r[n] } }) }, _$on: function(e, n, i) {
            if (void 0 === e) throw Error("缺少事件名参数");
            if ("function" == typeof n) { i = n;
                n = null }
            var a = e.indexOf(" ");
            if (~a) { n = e.slice(a + 1);
                e = e.slice(0, a) }
            if (!i) throw Error("缺少回调函数");
            else {
                var s = i;
                var i = function(t) { w.fixture.event(t);
                    s.apply(this, arguments) };
                s.real = i }
            if (n) return this._delegate(e, n, i);
            else return this._$forEach(function(n) { t._$addEvent(n, e, i) }) }.splitProcess().autoSet(), _$off: function(e, n, i) {
            if ("function" == typeof n) { i = n;
                n = null }
            var a;
            if (e && ~(a = e.indexOf(" "))) { n = e.slice(a + 1);
                e = e.slice(0, a) }
            if (i) i = i.real || i;
            if (n) return this._undelegate(e, n, i);
            else return this._$forEach(function(n) {
                var a = $._$uid(n),
                    s = $._delegateHandlers[a],
                    o;
                if (!e) {
                    if (s) delete $._delegateHandlers[a];
                    t._$clearEvent(n, e) } else {
                    if (s) o = s[e];
                    if (!i) {
                        if (o) delete s[e];
                        t._$clearEvent(n, e) } else t._$delEvent(n, e, i) } }) }.splitProcess().autoSet(), _$trigger: function(e, n) {
            if ("string" != typeof e) throw Error("事件类型参数错误");
            this._$forEach(function(i) { t._$dispatchEvent(i, e, n) });
            return this }.splitProcess().autoSet(), splice: function() {
            throw Error("don't use the NodeList#splice") } });
    v.reset();
    if (!0) nej.$ = $;
    return $ }, 3, 4, 2, 217, 287);
I$(25, function(t) {
    return t }, 79);
I$(494, function(t, e, n, i) { t.__hoverElement = function() {};
    t.__unhoverElement = function(t) {};
    return t });
I$(302, function(t, e, n, i, a, s, o) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "2.0") I$(495, function() {
        var t = {};
        var i = function(e) {
            var n = e.srcElement,
                i = t[n.id],
                a = n.className;
            if (a.indexOf(i) < 0) n.className += " " + i };
        var a = function(e) {
            var n = e.srcElement,
                i = t[n.id],
                a = n.className || "";
            if (a.indexOf(i) >= 0) n.className = a.replace(i, "").trim() };
        e.__hoverElement = function(e, s) {
            var o = e.id;
            if (!t[o]) { t[o] = s;
                n._$addEvent(o, "mouseenter", i);
                n._$addEvent(o, "mouseleave", a) } };
        e.__unhoverElement = function(e) {
            if (t[e]) { delete t[e];
                n._$delEvent(e, "mouseenter", i);
                n._$delEvent(e, "mouseleave", a) } } });
    return e }, 78, 494, 3);
I$(107, function(t, e, n, i, a, s, o, r, l) { s._$hover = function(t, n) {
        if (i._$isArray(t)) i._$forEach(t, function(t) { s._$hover(t, n) });
        else { t = e._$get(t);
            if (t) { e._$id(t);
                a.__hoverElement(t, n || e._$dataset(t, "hover") || "js-hover") } } };
    s._$unhover = function(t) {
        if (i._$isArray(t)) i._$forEach(t, function(t) { s._$unhover(t) });
        else {
            var n = e._$id(t);
            if (n) a.__unhoverElement(n) } };
    n._$merge(s);
    if (!0) t.copy(t.P("nej.e"), s);
    return s }, 215, 4, 217, 2, 302);
I$(433, function() {
    var t = {};
    if (!1);
    else;
    return t }, 215);
I$(463, '{#if isLogin}\n您好，<span id="user163Box">{user.account}</span><span class="sep">|</span><a href="/logout.html?url={encodeURIComponent(location.href)}" data-param="zn=top">退出</a>\n{#else}\t\n考拉欢迎你！<a class="login" href="/login.html?target={encodeURIComponent(location.href)}" data-param="zn=top">登录</a><span class="sep">|</span><a target="_blank" href="http://reg.163.com/reg/innerDomainReg.do?product=kaola&url=http://global.163.com/urs/redirect.html?target={encodeURIComponent(location.href)}" data-param="zn=top">免费注册</a>\n{/if}\t\n');
I$(264, function(t, e) {
    var n = e.extend({ name: "UserInfo", template: t, data: { isLogin: !1, location: location }, config: function(t) { this.getUserName() }, refresh: function() { this.getUserName() }, getUserName: function() { this.$request("/getUserName.html", { method: "GET", norest: !0, type: "json", onload: function(t) {
                    if (t && 461 == t.retcode) { this.data.isLogin = !1;
                        window.isLogin = !1 } else { t = t || {};
                        t.result = t.result || {};
                        this.data.isLogin = !0;
                        this.data.user = t.result;
                        this.data.user.account = t.result.nickname || t.result.account;
                        window.account = t.result.account;
                        window.user = t.result;
                        window.isLogin = !0 }
                    this.$emit("logined", window.user) } }) } });
    return n }, 463, 151);
I$(434, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) { d._$$RightBar = t._$klass();
    _ = d._$$RightBar._$extend(n._$$EventTarget);
    _.__reset = function(t) { this.__super(t);
        this.__rightBar = i._$get("rightBarNew");
        this.__leftBar = i._$get("indexleft");
        this.__fixTop = 66;
        this.__abTop = 0;
        if (this.__leftBar)
            if (window.screen.width <= 1280) this.__leftBar.style.marginLeft = "-642px";
        if (this.__rightBar) { this.__anchorNode = this.__getAnchorNode();
            if (!this.__anchorNode) this.__top = 230;
            else if (!this.__top) this.__top = 230;
            this.__width = this.__anchorNode.clientWidth;
            var e = (document.body.clientWidth - this.__width) / 2 - 68;
            this.__rightBar.style.right = e + "px";
            this.__getOffsetABTop();
            this.__rightBar.style.display = "block";
            if (this.__isIEOldVer()) { this.__rightBar.style.position = "absolute";
                this.__rightBar.style.top = "0px" } else { a._$addEvent(window, "scroll", this.__checkRightBar._$bind(this));
                this.__checkRightBar() } } };
    _.__getOffsetABTop = function() { this.__offsetABTop = i._$offset(this.__anchorNode).y + this.__top };
    _._$refreshRightBar = function(t) {
        var t = t || {};
        o.extend(this, t, !0);
        this.__checkRightBar() };
    _.__checkRightBar = function(t) {
        if (this.__offsetABTop - (document.body.scrollTop || document.documentElement.scrollTop) < this.__top) { this.__rightBar.style.top = this.__top + "px";
            this.__rightBar.style.position = "fixed";
            if (i._$get("mainBgWrapHome")) this.__rightBar.style.top = this.__fixTop + "px";
            if (this.__leftBar) { this.__leftBar.style.position = "fixed";
                this.__leftBar.style.top = this.__fixTop + "px" } } else { this.__rightBar.style.position = "absolute";
            this.__rightBar.style.top = this.__offsetABTop + "px";
            if (i._$get("mainBgWrapHome")) this.__rightBar.style.top = this.__abTop + "px";
            if (this.__leftBar) { this.__leftBar.style.position = "absolute";
                this.__leftBar.style.top = this.__abTop + "px" } } };
    _.__getAnchorNode = function() {
        var t = i._$get("mainBgWrapHome");
        if (t) { this.__top = t.clientHeight + this.__abTop;
            return t } else if (i._$get("topTabBox")) { t = i._$get("topTabBox");
            if (t) { this.__top = t.clientHeight + 40;
                return t } } else { t = i._$get("docHead");
            if (t) { this.__top = t.clientHeight + 70;
                return t } }
        return t };
    _.__isIEOldVer = function() {
        var t = "ie" == l._$KERNEL.browser && l._$KERNEL.release <= "3.0";
        return function() {
            return t } }();
    return d._$$RightBar }, 1, 2, 23, 4, 3, 107, 15, 433, 78, 11);
I$(298, function(t, e, n, i, a, s, o, r) {
    var l;
    a._$$Animation = e._$klass();
    l = a._$$Animation._$extend(n._$$EventTarget);
    l.__reset = function(t) { this.__super(t);
        this.__end = t.to || s;
        this.__begin = t.from || {};
        this.__delay = Math.max(0, parseInt(t.delay) || 0) };
    l.__destroy = function() { this.__super();
        this._$stop();
        if (this.__dtime) { window.clearTimeout(this.__dtime);
            delete this.__dtime }
        delete this.__end;
        delete this.__begin };
    l.__onAnimationFrame = function(t) {
        if (this.__begin) {
            if (("" + t).indexOf(".") >= 0) t = +new Date;
            if (!this.__doAnimationFrame(t)) this.__timer = i.requestAnimationFrame(this.__onAnimationFrame._$bind(this));
            else this._$stop() } };
    l.__doAnimationFrame = o;
    l._$play = function() {
        var t = function() { this.__dtime = window.clearTimeout(this.__dtime);
            this.__begin.time = +new Date;
            this.__timer = i.requestAnimationFrame(this.__onAnimationFrame._$bind(this)) };
        return function() { this.__dtime = window.setTimeout(t._$bind(this), this.__delay) } }();
    l._$stop = function() { this.__timer = i.cancelAnimationFrame(this.__timer);
        this._$dispatchEvent("onstop") };
    if (!0) t.copy(t.P("nej.ut"), a);
    return a }, 215, 1, 23, 491);
I$(96, function(t, e, n, i, a, s, o, r) {
    var l;
    a._$$AnimBezier = e._$klass();
    l = a._$$AnimBezier._$extend(i._$$Animation);
    l.__reset = function(t) { this.__super(t);
        this.__duration = t.duration || 200;
        this.__epsilon = 1 / (200 * this.__duration);
        this.__doParseTiming(t.timing);
        this.__doCalPolynomialCoefficients() };
    l.__destroy = function() { this.__super();
        delete this.__pointer;
        delete this.__coefficient };
    l.__doParseTiming = function() {
        var t = /^cubic\-bezier\((.*?)\)$/i,
            e = /\s*,\s*/i,
            i = { linear: [0, 0, 1, 1], ease: [.25, .1, .25, 1], easein: [.42, 0, 1, 1], easeout: [0, 0, .58, 1], easeinout: [0, 0, .58, 1] };
        var a = function(t, e, n) { n[e] = parseFloat(t) };
        return function(s) { s = (s || "").toLowerCase();
            this.__pointer = i[s];
            if (t.test(s)) { this.__pointer = RegExp.$1.split(e);
                n._$forEach(this.__pointer, a) }
            if (!this.__pointer) this.__pointer = i.ease } }();
    l.__doCalPolynomialCoefficients = function() {
        var t = this.__pointer,
            e = 3 * t[0],
            n = 3 * (t[2] - t[0]) - e,
            i = 1 - e - n,
            a = 3 * t[1],
            s = 3 * (t[3] - t[1]) - a,
            o = 1 - a - s;
        this.__coefficient = { ax: i, ay: o, bx: n, by: s, cx: e, cy: a } };
    l.__doCalCubicBezierAtTime = function() {
        var t = function(t, e) {
            return ((e.ax * t + e.bx) * t + e.cx) * t };
        var e = function(t, e) {
            return ((e.ay * t + e.by) * t + e.cy) * t };
        var n = function(t, e) {
            return (3 * e.ax * t + 2 * e.bx) * t + e.cx };
        var i = function(e, i, a) {
            var s, o, r, l, c, d;
            for (r = e, d = 0; d < 8; d++) { l = t(r, a) - e;
                if (Math.abs(l) < i) return r;
                c = n(r, a);
                if (Math.abs(c) < 1e-6) break;
                r -= l / c }
            s = 0;
            o = 1;
            r = e;
            if (r < s) return s;
            if (r > o) return o;
            for (; s < o;) { l = t(r, a);
                if (Math.abs(l - e) < i) return r;
                if (e > l) s = r;
                else o = r;
                r = .5 * (o - s) + s }
            return r };
        return function(t) {
            return e(i(t / this.__duration, this.__epsilon, this.__coefficient), this.__coefficient) } }();
    l.__doAnimationFrame = function(t) {
        var e = t - this.__begin.time,
            i = this.__doCalCubicBezierAtTime(e),
            a = n._$fixed(this.__begin.offset * (1 - i) + this.__end.offset * i, 2),
            s = !1;
        if (e >= this.__duration) { a = this.__end.offset;
            s = !0 }
        this._$dispatchEvent("onupdate", { offset: 1 * a });
        return s };
    l._$stop = function() { this._$dispatchEvent("onupdate", { offset: this.__end.offset });
        this.__super() };
    if (!0) t.copy(t.P("nej.ut"), a);
    return a }, 215, 1, 2, 298);
I$(300, function(t, e, n, i, a, s, o) {
    var r = t._$klass();
    var l = r._$extend(n._$$EventTarget);
    l.__reset = function(t) { this.__super(t);
        if (t.from && t.to && t.imageUrl) { this.__from = t.from;
            this.__to = t.to;
            this.__imageUrl = (t.imageUrl || "").replace(/^https?:/, "");
            this.__devx = t.devx;
            this.__devy = t.devy;
            this.__plus = t.plus === !1 ? !1 : !0;
            this.__cfg = { as: 4e3, toScale: .4, decCB: "cubic-bezier(0.26,1,0.87,1)", accCB: "cubic-bezier(0.13,0,0.74,0.04)", initW: 60, initH: 60, plusLength: 22, plusDeltaY: -40 };
            this.__getImage() } };
    l._$play = function() {
        if (this.__to) { this.__prepare();
            this.__aniStart = +new Date;
            this.__flyAni._$play() } };
    l.__prepare = function() { this.__getFromToPostions();
        this.__getTopPostion();
        this.__initCurves() };
    l.__getFromToPostions = function() { this.__fromPos = s.extend({}, this.__from.getBoundingClientRect());
        this.__toPos = s.extend({}, this.__to.getBoundingClientRect());
        if (void 0 === this.__fromPos.width) { this.__fromPos.width = this.__fromPos.right - this.__fromPos.left;
            this.__fromPos.height = this.__fromPos.bottom - this.__fromPos.top;
            this.__toPos.width = this.__toPos.right - this.__toPos.left;
            this.__toPos.height = this.__toPos.bottom - this.__toPos.top }
        this.__fromPos.left += (this.__fromPos.width - this.__cfg.initW) / 2;
        this.__fromPos.top += (this.__fromPos.height - this.__cfg.initH) / 2;
        this.__toPos.left += (this.__toPos.width - this.__cfg.initW) / 2;
        this.__toPos.top += (this.__toPos.height - this.__cfg.initH) / 2;
        if ("number" == typeof this.__devx) this.__toPos.left += this.__devx;
        if ("number" == typeof this.__devy) this.__toPos.top += this.__devy };
    l.__getTopPostion = function() { this.__topPos = { left: 0, top: 0 };
        if (this.__fromPos.left === this.__toPos.left && this.__fromPos.top < this.__toPos.top) { this.__flyType = 0;
            this.__totalTime = Math.sqrt(2 * Math.abs(this.__toPos.top - this.__fromPos.top) / this.__cfg.as) } else {
            if (this.__fromPos.top > 0) {
                var t = Math.abs(this.__fromPos.left - this.__toPos.left);
                var e = 120 * Math.log(2 * t + 1) / 8;
                this.__topPos.top = Math.min(this.__fromPos.top, this.__toPos.top) < e ? 0 : Math.min(this.__fromPos.top, this.__toPos.top) - e } else this.__topPos.top = this.__fromPos.top;
            var n = Math.abs(this.__topPos.top - Math.max(this.__fromPos.top, this.__toPos.top));
            var i = Math.abs(this.__fromPos.top - this.__toPos.top);
            var a, s;
            if (n - i < 50 && this.__fromPos.top <= this.__toPos.top) { this.__topPos.left = this.__fromPos.left;
                this.__topPos.top = this.__fromPos.top;
                if (this.__fromPos.top <= this.__toPos.top) { a = .001;
                    s = 2 * Math.sqrt(2 * i / this.__cfg.as) } } else { a = Math.sqrt(2 * n / this.__cfg.as);
                var o = 2 * (n - i) / this.__cfg.as;
                s = o > 0 ? Math.sqrt(o) : 0 }
            this.__topPos.left = (this.__toPos.left - this.__fromPos.left) * a / (a + s) + this.__fromPos.left;
            a *= 1e3;
            s *= 1e3;
            this.__totalTime = a + s;
            this.__stage1Time = a;
            this.__stage2Time = s } };
    l.__initCurves = function() {
        var t = 1;
        if (0 === this.__flyType) { t = this.__toPos.top - this.__toPos.top;
            this.__flyAni = o._$$AnimBezier._$allocate({ timing: this.__cfg.accCB, duration: this.__totalTime, from: { offset: 0 }, to: { offset: t }, onupdate: function(t) { this.__move(t.offset) }._$bind(this), onstop: function() { this._$dispatchEvent("onflystop");
                    this.__flyOver() }._$bind(this) }) } else { this.__flyAni = o._$$AnimBezier._$allocate({ timing: this.__cfg.decCB, duration: this.__stage1Time, from: { offset: 0 }, to: { offset: this.__topPos.top - this.__fromPos.top }, onupdate: function(t) { this.__move(t.offset) }._$bind(this), onstop: function() { e._$play() } });
            var e = o._$$AnimBezier._$allocate({ timing: this.__cfg.accCB, duration: this.__stage2Time, from: { offset: 0 }, to: { offset: this.__toPos.top - this.__topPos.top }, onupdate: function(t) {
                    var e = t.offset + this.__topPos.top - this.__fromPos.top;
                    this.__move(e) }._$bind(this), onstop: function() { this._$dispatchEvent("onflystop");
                    e._$recycle();
                    this.__flyOver() }._$bind(this) }) } };
    l.__move = function(t) {
        var e = (+new Date - this.__aniStart) / this.__totalTime;
        currScale = 1, n = 0, i = 0;
        e = e > 1 ? 1 : e;
        currScale = 1 - (1 - this.__cfg.toScale) * e;
        if (!this.__supportTransform()) var n = this.__cfg.initW * (1 - currScale) / 2,
            i = this.__cfg.initW * (1 - currScale) / 2;
        var a = this.__getStyle({ scale: currScale, x: e * (this.__toPos.left - this.__fromPos.left) + n, y: t + i });
        this.__imgNode.style.cssText = a
    };
    l.__flyOver = function() { this.__flyAni && this.__flyAni._$recycle();
        this.__imgNode && document.body.removeChild(this.__imgNode);
        this.__imgNode = null;
        this.__plus && this.__plusMove() };
    l.__plusMove = function() {
        var t = '<span class="favAddedPlus">&#xe603;<span class="favAddedPlusText">1</span></span>';
        var e = document.createElement("div");
        e.innerHTML = t, deltaY = this.__cfg.plusDeltaY;
        var n = o._$$AnimBezier._$allocate({ timing: this.__cfg.accCB, duration: 800, from: { offset: 0 }, to: { offset: deltaY }, onupdate: function(t) {
                var n = t.offset / deltaY;
                var i = this.__getStyle({ width: this.__cfg.plusLength, height: this.__cfg.plusLength, opacity: 1 - n, x: 0, y: t.offset, left: this.__toPos.left + (this.__cfg.initW - this.__cfg.plusLength) / 2, top: this.__toPos.top + (this.__cfg.initH - this.__cfg.plusLength) / 2, scale: 1 + n / 2 });
                e.style.cssText = i }._$bind(this), onstop: function() { this._$dispatchEvent("onplusstop");
                document.body.removeChild(e);
                e = null;
                n._$recycle() }._$bind(this) });
        document.body.appendChild(e);
        n._$play() };
    l.__supportTransform = function() {
        var t = !1;
        if (window.CSS && CSS.supports) t = CSS.supports("(transform: translateX(0)) or (-webkit-transform: translateX(0)) or (-ms-transform: translateX(0)) or (-moz-transform: translateX(0)) or (-ms-transform: translateX(0))");
        else {
            var e = document.createElement("div"),
                n = ["transform", "webkitTransform", "msTransform", "mozTransform"];
            for (var i = 0; i < n.length; i++)
                if (void 0 !== e.style[n[i]]) { t = !0;
                    break }
            e = null }
        return function() {
            return t } }();
    l.__getStyle = function() {
        function t(t) {
            var e = [];
            for (var n in t)
                if (t.hasOwnProperty(n)) e.push(n + ":" + t[n]);
                else;
            return e.join(";") }
        var e = { position: "fixed", "z-index": "10000", "border-radius": "100%" };
        return function(n, i) {
            var a = s.extend({}, e);
            if (i) a.display = "none";
            else {
                var o = this.__fromPos;
                if ("number" == typeof n.left) o = { left: n.left, top: n.top };
                var r = "number" == typeof n.opacity ? n.opacity : 1;
                if (this.__supportTransform()) {
                    var l = "translate(" + n.x + "px," + n.y + "px)  scale(" + n.scale + ")";
                    a = s.extend(a, { "-webkit-transform": l, "-ms-transform": l, "-moz-transform": l, transform: l, transition: "transform 0s ease", left: o.left + "px", top: o.top + "px", width: (n.width || this.__cfg.initW) + "px", height: (n.height || this.__cfg.initH) + "px", opacity: r }) } else a = s.extend(a, { width: (n.width || this.__cfg.initW) * n.scale + "px", height: (n.height || this.__cfg.initH) * n.scale + "px", left: o.left + n.x + "px", top: o.top + n.y + "px", opacity: r, filter: "alpha(opacity=" + Math.floor(100 * r) + ")" }) }
            return t(a) } }();
    l.__getImage = function() { this.__imgNode = document.createElement("img");
        this.__imgNode.src = this.__imageUrl;
        this.__imgNode.style.cssText = this.__getStyle(null, !0);
        document.body.appendChild(this.__imgNode) };
    l.__destroy = function() { this.__super();
        this.__from = null;
        this.__to = null;
        this.__flyAni && this.__flyAni._$recycle();
        this.__imgNode && document.body.removeChild(this.__imgNode);
        this.__imgNode = null };
    return r
}, 1, 2, 23, 4, 3, 15, 96);
I$(374, function(t, e, n) {
    var i = t.extend({ config: function(t) { e.extend(t, { active: !0 });
            this.supr(t) }, onok: function() { this.data.active = !1;
            setTimeout(function() { this.destroy() }._$bind(this), 350);
            this.$update() }, onclose: function() { this.data.active = !1;
            setTimeout(function() { this.destroy() }._$bind(this), 350);
            this.$update() } });
    i.directive("animate", function(t) { n._$addClassName(t, "iDialogAnimate5");
        n._$addClassName(t, "iDialogAniCore");
        this.$watch("active", function(e) {
            if (!e) n._$addClassName(t, "iDialogAnimate5");
            else setTimeout(function() { n._$delClassName(t, "iDialogAnimate5") }, 100) }) });
    return i }, 151, 15, 4);
I$(375, '<div ref="mdialog" class="m-dialog {clazz}" animate r-class="{{\'valign\':useTrans}}" r-style="{style}">\n\t<div class="head">\n\t\t<h1>{title || \'提示\'}</h1>\n\t</div>\n\t<a class="close" hidefocus="true" href="javascript:;" on-click="{this.onclose()}"></a>\n\t<div class="body">\n\t\t<div class="message">\n\t\t\t{#include msg}\n\t\t</div>\n\t\t{#if hideOkBtn != true}\n\t\t<a href="javascript:;" class="btn u-btn u-btn-ok u-btn-medium" on-click="{this.onok()}">\n\t\t\t<span r-html="{txtOk || \'确认\'}"></span>\n\t\t</a>\n\t\t{/if}\n\t\t{#if hideCCBtn != true}\n\t\t<a href="javascript:;" class="btn u-btn u-btn-cancel u-btn-medium" on-click="{this.cancel()}" r-html="{txtCC || \'取消\'}"></a>\n\t\t{/if}\n\t</div>\n</div>\n<div class="u-mask" style="z-index:10000;"></div>');
I$(187, function(t, e, n, i) {
    var a = t.extend({ template: i, config: function(t) { e.extend(t, { width: 520 });
            t.style = { height: "auto", "margin-top": "0", width: t.width + "px", "margin-left": -t.width / 2 + "px", "z-index": 10001, left: "50%", top: "50%" };
            this.__autoHeight();
            this.__bindEscEvent();
            this.supr(t);
            if (t.timeout) this.$timeout(function() { this.onclose() }._$bind(this), t.timeout) }, onok: function() { this.supr();
            this.data.onok && this.data.onok() }, onclose: function() { this.supr();
            this.data.onclose && this.data.onclose() }, cancel: function() {
            var t = this.data.oncancel,
                e;
            t && (e = t());
            e !== !1 && this.onclose() }, __autoHeight: function() {
            var t = this,
                e = t.data;
            if (e.height) e.style.height = e.height;
            e.useTrans = !0;
            if ("ie" == nej.p._$KERNEL.browser && nej.p._$KERNEL.version <= 9) t.$on("inject", function() { e.useTrans = !1;
                t.__calcH();
                t.$on("refresh", function() { t.__calcH() });
                t.$update() }) }, __calcH: function() {
            var t = this,
                e = t.data,
                n = t.$refs.mdialog,
                i, a;
            if (n) { a = n.clientHeight;
                e.style["margin-top"] = -a / 2 + "px" } }, __bindEscEvent: function() {
            function t(i) {
                if (27 == (i || window.event).keyCode) { e.onclose();
                    e.$update();
                    n._$delEvent(document, "keydown", t) } }
            var e = this;
            n._$addEvent(document, "keydown", t) } }).use("timeout");
    a.directive("countdown", function(t, e) {
        if (e && !isNaN(e)) { e /= 1;
            var n = setInterval(function() {!e && !clearInterval(n) && this.onclose();
                t.innerHTML = e-- }._$bind(this), 1e3) } });
    return a }, 374, 15, 3, 375);
I$(101, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _, p) { u._$$Cart = t._$klass();
    p = u._$$Cart._$extend(n._$$EventTarget);
    p.__reset = function(t) { this.__super(t);
        this.__user = t.user || window.user;
        this.__refreshCart() };
    p.__refreshCart = function() {
        if (this.__user) r("/cartNumAjax.html", { method: "GET", type: "json", norest: !0, onload: this.__cbCartInfo._$bind(this) });
        else {
            var t = decodeURIComponent(l._$cookie("NTES_KAOLA_CART_NEW")),
                e = t ? t.split("|") : [],
                n = 0,
                i = [],
                a;
            for (var s = 0, o = e.length; s < o; s++) {
                var c = e[s].split("_"),
                    d = c[3];
                a = !0;
                for (var u = 0, h = i.length; u < h; u++)
                    if (i[u] == d) a = !1;
                if (a) { i.push(d);
                    n += 1 } }
            this.__setCartNum(n) } };
    p.__addGoods2Cookie = function(t) {
        var e = decodeURIComponent(l._$cookie("NTES_KAOLA_CART_NEW"));
        var n = t.source || "other",
            i = [];
        var a = Date.now();
        if (e) { i = e.split("|"), index = -1;
            for (var s = 0, o = i.length; s < o; s++) { i[s] = i[s].split("_");
                var r = i[s][0],
                    c = i[s][3];
                if (c == t.skuId && r == t.goodsId) { i[s][1] = parseInt(i[s][1]) + t.count;
                    i[s][4] = a;
                    index = s } }
            if (index == -1) i.push([t.goodsId, t.count, t.source, t.skuId, a]) } else i = [
            [t.goodsId, t.count, t.source, t.skuId, a]
        ];
        var d = [];
        for (var s = 0, o = i.length; s < o; s++) d.push(i[s].join("_"));
        l._$cookie("NTES_KAOLA_CART_NEW", { value: encodeURIComponent(d.join("|")), path: "/", domain: "kaola.com", expires: 365 }) };
    p.__overNumAlert = function(t) { new d({ data: { height: 270, title: "购物车满啦", msg: '<i class="iconfont main-icon notice" r-html="{\'&#xe609;\'}"></i>' + (t || "啊哦~您的购物车商品已满，清理一下再加入新商品吧！"), clazz: "m-dialogalert", txtOk: "暂不清理", txtCC: "去购物车清理", oncancel: function() { window.open("/cart.html", "_blank");
                    return !1 } } }).$inject(document.body) };
    p.__alert = function(t) { new d({ data: { height: 220, msg: '<i class="iconfont main-icon notice" r-html="{\'&#xe609;\'}"></i>' + t, clazz: "m-dialogalert", hideOkBtn: !0, hideCCBtn: !0, timeout: 3e3 } }).$inject(document.body) };
    p._$addCart = function(t, e) {
        if (!this.__user) { this.__addGoods2Cookie(t);
            r("/cartAjax/modify.html", { method: "POST", type: "json", data: { number: t.count || 1, goodsId: t.goodsId || 0, skuId: t.skuId || 0 }, norest: !0, onload: function(t) {
                    if (200 == t.retcode) this._$dispatchEvent("onsuccess");
                    else if (101 == t.retcode && t.retdesc) this.__overNumAlert(t.retdesc);
                    else if (462 == t.retcode && t.retdesc) this.__alert(t.retdesc);
                    this.__refreshCart() }._$bind(this) }) } else r("/cartAjax/modify.html", { method: "POST", type: "json", data: { number: t.count || 1, goodsId: t.goodsId || 0, skuId: t.skuId || 0, innerSource: t.source || "" }, norest: !0, onload: function(t) {
                if (200 == t.retcode) { this.__setCartNum(t.cartGoodsNum);
                    this._$dispatchEvent("onsuccess", t) } else if (101 == t.retcode && t.retdesc) this.__overNumAlert(t.retdesc);
                else if (462 == t.retcode && t.retdesc) this.__alert(t.retdesc) }._$bind(this), onerror: function(t) {} });
        if (e) {
            var n = o.extend({}, e);
            if (!n.to) { n.to = i._$getByClassName("rightBarNew", "shopcart")[0];
                n.devx = 0;
                n.devy = -40 }
            if (n.to) {
                var a = c._$allocate(n);
                a._$play() } } };
    p.__cbCartInfo = function(t) {
        if (t && 200 == t.retcode) this.__setCartNum(t.object) };
    p.__setCartNum = function(t) {
        var e = i._$get("newcartnum"),
            n = i._$get("rightBarNew"),
            a = i._$getByClassName(n, "num");
        var s = i._$getByClassName(window.body, "custom-cart-num") || [];
        s = s.concat(e || []);
        t = t || 0;
        t = t <= 0 ? 0 : t <= 99 ? t : "99+";
        for (var o = 0, r = s.length; o < r; o++) { e = s[o];
            if (0 == t) {
                if (e) e.style.display = "none" } else if (e) { e.innerText = t;
                e.style.display = "" } }
        if (0 == t) {
            if (a && a.length > 0) a[0].style.visibility = "hidden" } else if (a && a.length > 0) { a[0].style.visibility = "visible";
            a[0].innerText = t }
        window.cartAmount = t;
        if ("[object Function]" == {}.toString.call(window.updateCustomCart)) window.updateCustomCart(t) };
    return u._$$Cart }, 1, 2, 23, 4, 3, 107, 15, 6, 11, 300, 187);
I$(486, function(t, e, n, i) { t.__setPlaceholder = function(t, e) {};
    return t });
I$(293, function(t, e, n, i, a, s, o, r, l) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "5.0") I$(487, function() {
        a.__setPlaceholder = function() {
            var t = {},
                a = { nid: "j-holder-" + i._$uniqueID() };
            var s = function(n) {
                var i = e._$get(n);
                t[n] = 2;
                if (!i.value) e._$setStyle(e._$wrapInline(i, a), "display", "none") };
            var o = function(n) {
                var i = e._$get(n);
                t[n] = 1;
                if (!i.value) e._$setStyle(e._$wrapInline(i, a), "display", "") };
            var r = function(n) {
                var i = e._$get(n);
                if (2 != t[n]) e._$setStyle(e._$wrapInline(i, a), "display", !i.value ? "" : "none") };
            var l = function(t, n) {
                var i = e._$id(t),
                    s = e._$wrapInline(t, { tag: "label", clazz: n, nid: a.nid });
                s.htmlFor = i;
                var o = e._$attr(t, "placeholder") || "";
                s.innerText = "null" == o ? "" : o;
                var r = t.offsetHeight + "px";
                e._$style(s, { left: 0, display: !t.value ? "" : "none" })
            };
            return function(e, i) {
                if (null == t[e.id]) { l(e, i);
                    var a = e.id;
                    t[a] = 1;
                    n._$addEvent(e, "blur", o._$bind(null, a));
                    n._$addEvent(e, "focus", s._$bind(null, a));
                    n._$addEvent(e, "input", r._$bind(null, a)) } }
        }()
    });
    return a
}, 78, 4, 3, 2, 486);
I$(93, function(t, e, n, i, a, s, o, r) { a._$placeholder = function(t, n) { t = e._$get(t);
        i.__setPlaceholder(t, e._$dataset(t, "holder") || n || "js-placeholder") };
    n._$merge(a);
    if (!0) t.copy(t.P("nej.e"), a);
    return a }, 215, 4, 217, 293);
I$(448, function(t, e, n, i, a, s, o, r, l, c) { s._$$SelectHelper = e._$klass();
    c = s._$$SelectHelper._$extend(a._$$EventTarget);
    c.__reset = function(t) { this.__super(t);
        this.__loop = !!t.loopable;
        this.__parent = n._$get(t.parent);
        this.__selected = t.selected || "js-selected";
        this.__hovered = t.hover || this.__selected;
        this.__nopt = {};
        if (t.clazz) { this.__nopt.filter = n._$hasClassName._$bind2(n, t.clazz);
            this.__clazz = t.clazz }
        this.__kbody = this.__getKeyBoardParent(this.__parent);
        this.__doInitDomEvent([
            [this.__kbody, "keydown", this.__doCheckKBAction._$bind(this), !0],
            [this.__kbody, "enter", this.__doCheckKBEnter._$bind(this)],
            [this.__parent, "click", this.__onCheckClick._$bind(this)],
            [this.__parent, "mouseover", this.__onCheckHover._$bind(this)],
            [this.__parent, "mouseleave", this.__onCheckLeave._$bind(this)]
        ]) };
    c.__destroy = function() { this.__super();
        delete this.__selected;
        delete this.__hovered;
        delete this.__parent;
        delete this.__kbody;
        delete this.__clazz;
        delete this.__nopt;
        delete this.__loop };
    c.__isItemElement = function(t) {
        if (this.__clazz) return n._$hasClassName(t, this.__clazz);
        else return t.parentNode == this.__parent };
    c.__getKeyBoardParent = function() {
        var t = 1e3;
        return function(e) {
            for (; e && (parseInt(e.tabIndex) || 0) <= t;) e = e.parentNode;
            return e || document } }();
    c.__getItemElement = function(t) {
        var e = n._$getByClassName(this.__parent, t);
        return !e ? null : e[0] };
    c.__doSyncSelection = function(t, e) { n._$delClassName(t.last, e);
        n._$addClassName(t.target, e);
        if (e == this.__selected && t.last != t.target) { this.__doScrollToView(t.target);
            this._$dispatchEvent("onchange", t) } };
    c.__doScrollToView = function(t) {
        var e = n._$getScrollViewPort(t),
            i = n._$offset(t, e);
        if (!(i.y - e.scrollTop < 0)) {
            var a = i.y + t.offsetHeight - e.clientHeight;
            if (a > e.scrollTop) e.scrollTop = a } else e.scrollTop = i.y };
    c.__doParseSelection = function(t, e) {
        var n = i._$getElement(t, this.__isItemElement._$bind(this));
        return !n ? null : { last: this.__getItemElement(e), target: n } };
    c.__doCheckKBAction = function(t) {
        var e = t.keyCode;
        if (38 == e || 40 == e) {
            var a = { last: this._$getSelectedNode() };
            this.__nopt.backward = 38 == e;
            var s = !this.__clazz ? n._$getChildren(this.__parent) : n._$getByClassName(this.__parent, this.__clazz),
                o = this.__nopt.backward ? s[s.length - 1] : s[0];
            if (!a.last) a.target = this.__getItemElement(this.__hovered) || o;
            else a.target = n._$getSibling(a.last, this.__nopt);
            if (!a.target) {
                if (!this.__loop || s.length <= 1) return;
                i._$stop(t);
                a.target = o }
            this.__doSyncSelection(a, this.__selected) } };
    c.__doCheckKBEnter = function(t) { i._$stop(t);
        this._$dispatchEvent("onselect", { target: this._$getSelectedNode() }) };
    c.__onCheckClick = function(t) {
        var e = this.__doParseSelection(t, this.__selected);
        if (e) { this.__doSyncSelection(e, this.__selected);
            this._$dispatchEvent("onselect", { target: e.target }) } };
    c.__onCheckHover = function(t) {
        var e = this.__doParseSelection(t, this.__hovered);
        if (e) { this.__doSyncSelection(e, this.__hovered);
            if (this.__kbody.focus) this.__kbody.focus() } };
    c.__onCheckLeave = function(t) {
        if (this.__hovered != this.__selected) n._$delClassName(this.__getItemElement(this.__hovered), this.__hovered) };
    c._$getSelectedNode = function() {
        return this.__getItemElement(this.__selected) };
    if (!0) t.copy(t.P("nej.ut"), s);
    return s }, 215, 1, 4, 3, 23);
I$(232, function(t, e, n, i, a, s, o, r, l) {
    var c;
    s._$$Suggest = e._$klass();
    c = s._$$Suggest._$extend(i._$$EventTarget);
    c.__init = function() { this.__sopt = { loopable: !0, onselect: this.__onSelect._$bind(this), onchange: this.__onSelectionChange._$bind(this) };
        this.__super() };
    c.__reset = function(t) { this.__super(t);
        this.__auto = !!t.autofill;
        this.__input = n._$get(t.input);
        this.__sopt.clazz = t.clazz;
        this.__sopt.parent = n._$get(t.body);
        this.__sopt.selected = t.selected || "js-selected";
        this.__doInitDomEvent([
            [this.__input, "input", this.__onInput._$bind(this)],
            [this.__input, "focus", this.__onInput._$bind(this)],
            [this.__input, "blur", this.__onBlur._$bind(this)]
        ]);
        this._$visibile(!1);
        this.__helper = a._$$SelectHelper._$allocate(this.__sopt) };
    c.__destroy = function() { this.__super();
        if (this.__helper) { this.__helper._$recycle();
            delete this.__helper }
        delete this.__xxx;
        delete this.__input;
        delete this.__sopt.parent };
    c.__onBlur = function() { this.__onSelect({ target: this.__helper._$getSelectedNode() }) };
    c.__onInput = function() {
        var t = this.__input.value.trim();
        if (!t) this._$visibile(!1);
        else if (!this.__xxx) this._$dispatchEvent("onchange", t) };
    c.__doUpdateValue = function(t) {
        if (!this.__xxx) { this.__xxx = !0;
            if (t && t != this.__input.value) this.__input.value = t;
            this.__xxx = !1 } };
    c.__onSelect = function(t) {
        var e = n._$dataset(t.target, "value") || "";
        this.__doUpdateValue(e);
        e = e || this.__input.value;
        this._$update("");
        this._$dispatchEvent("onselect", e) };
    c.__onSelectionChange = function(t) {
        if (this.__auto) this.__doUpdateValue(n._$dataset(t.target, "value") || "") };
    c._$setList = function(t) { this._$visibile(!!t && t.length > 0) };
    c._$visibile = function(t) {
        var t = !t ? "hidden" : "visible";
        this.__sopt.parent.style.visibility = t };
    c._$update = function(t) { this.__sopt.parent.innerHTML = t || "&nbsp;";
        this._$visibile(!!t) };
    if (!0) t.copy(t.P("nej.ut"), s);
    return s }, 215, 1, 4, 23, 448);
I$(587, function(t, e, n, i, a, s, o, r, l, c) { s._$$NewSelectHelper = e._$klass();
    c = s._$$NewSelectHelper._$extend(a._$$SelectHelper);
    c.__onCheckLeave = function(t) { this._$dispatchEvent("oncheckleave", this.__hovered, this.__selected, this.__getItemElement(this.__hovered));
        if (this.__hovered != this.__selected) n._$delClassName(this.__getItemElement(this.__hovered), this.__hovered) };
    return s }, 215, 1, 4, 3, 448);
I$(435, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f) {
    var _;
    c._$$SearchSuggestModule = t._$klass();
    _ = c._$$SearchSuggestModule._$extend(o._$$EventTarget);
    _.__init = function(t) { this.__supInit(t);
        this.__lsUsable = this.__getLsUsable();
        this.__initNode();
        this.__initEvent();
        this.__sopt = { loopable: !0, onselect: this.__onItemSelect._$bind(this), selected: "active", parent: this.__wrap, oncheckleave: this.__onItemLeave._$bind(this) };
        this.__helper = r._$$NewSelectHelper._$allocate(this.__sopt);
        this.__setBlurDisableOnce = !1;
        if (this.__lsUsable) { this.__initLatelySearch();
            window.kl = {};
            kl.delkey = this.__refreshLatelyKey._$bind(this);
            kl.setEmpty = this.__setLatelyKeyEmpty._$bind(this) } };
    _.__initNode = function() { this.__cache = {};
        this.__searchBox = i._$get("topsearchbox");
        this.__input = i._$get("topSearchInput");
        this.__wrap = i._$get("searchhintlist");
        this.__searchBtn = i._$get("topSearchBtn");
        this.__linkBox = i._$get("suggestlist");
        if (this.__linkBox) {
            var t = i._$getByClassName(this.__linkBox, "suggestitem"),
                e, n, a = window.searchTypePage || !1;
            if (a && 0 == pageType) this.__searchKey = this.__getUrlParam(location.href, "key");
            for (var s = 0, o = t.length; s < o; s++) { e = t[s];
                n = e.getAttribute("datakey");
                if (n) {
                    var r = "searchRefer=suggestion";
                    if (a) switch (pageType) {
                        case 0:
                            r = "searchRefer=suggest_search";
                            break;
                        case 1:
                            r = "searchRefer=suggest_brand";
                            break;
                        case 2:
                            r = "searchRefer=suggest_category" }
                    e.href = "//www.kaola.com/search.html?zn=top&key=" + encodeURIComponent(encodeURIComponent(n)) + "&" + r + "&referPosition=" + (s + 1) } } } };
    _.__initEvent = function() {
        if (this.__input) { this.__holderText = this.__input.getAttribute("placeholder");
            n._$addEvent(this.__input, "keypress", function(t) {
                var e = t.keyCode;
                if (13 == e) { this.__doSearch();
                    return !1 } }._$bind(this));
            n._$addEvent(this.__searchBtn, "click", this.__doSearch._$bind(this));
            if (!("placeholder" in document.createElement("input"))) l._$placeholder(this.__input);
            else; }
        this.__doInitDomEvent([
            [this.__input, "input", this.__onInput._$bind(this)],
            [this.__input, "focus", this.__onInput._$bind(this, !0)],
            [this.__input, "blur", this.__onBlur._$bind(this)]
        ]) };
    _.__initLatelySearch = function() {
        var t = this.__getUrlParam(location.href, "searchRefer");
        if (location.href.indexOf("/search.html") > 0 && ("recent" == t || "keyWordSuggestion" == t)) {
            var e = this.__getUrlParam(location.href, "key").replace(/%2B/gi, "%20");
            if (e) { e = decodeURIComponent(decodeURIComponent(e));
                this.__addLatelyKey(e) } }
        this.__keyAry = this.__lsGetItem("latelysearch");
        if (!this.__keyAry || 0 == this.__keyAry.length) { this.__keyAry = [];
            this.__showKeyAry = [] } else {
            var n = "," + this.__keyAry.join(",") + ",";
            if (this.__linkBox) {
                var a = i._$getByClassName(this.__linkBox, "suggestitem"),
                    s, e, o;
                for (var r = 0, l = a.length; r < l; r++) { s = a[r];
                    o = s.innerHTML;
                    if (!s.getAttribute("datakey")) n = n.replace("," + o + ",", ",") } }
            this.__showKeyAry = n.substring(1, n.length - 1).split(",") } };
    _.__addLatelyKey = function(t) {
        if (t) {
            var e = this.__lsGetItem("latelysearch") || [];
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] == t) { e.splice(n, 1);
                    break }
            e.unshift(t);
            this.__lsSetItem("latelysearch", e.slice(0, 20)) } };
    _.__doSearch = function() {
        var t = this.__input.value.replace(/(^\s*)|(\s*$)/g, ""),
            e = this.__input.placeholder,
            n = this.__input.getAttribute("urllink") || "";
        if (!t || "输入搜索" == t || t == e)
            if (e) t = e;
            else return;
        else n = "";
        if (window.searchTrigger, !1) window.searchTrigger(!0, t);
        else if ("在千万海外商品中搜索" == t) location.href = window.__domainUrl || "/";
        else {
            if (this.__lsUsable && !n && t) {
                for (var i = 0, a = this.__keyAry.length; i < a; i++)
                    if (this.__keyAry[i] == t) { this.__keyAry.splice(i, 1);
                        break }
                this.__keyAry.unshift(t);
                this.__lsSetItem("latelysearch", this.__keyAry.slice(0, 20)) }
            location.href = "" == n ? (window.__domainUrl || "/") + "search.html?zn=top&key=" + encodeURIComponent(encodeURIComponent(t)) + "&searchRefer=searchbutton" + (this.__searchKey ? "&oldQuery=" + this.__searchKey : "") : n } };
    _.__onInput = function(t, e) {
        if (e) { this.__isFocus = !0;
            this.__input.setAttribute("placeholder", "") }
        if (this.__isFocus) {
            var n = this.__input.value.trim();
            if (!n) { this.__clearItem();
                this.__showLatelyKey() } else if (this.__cache[n]) this.__showList(this.__cache[n], n);
            else this.__onChange(n) } };
    _.__onChange = function(t) {
        var e = "";
        var n = { query: t, size: 10 };
        if (this.__searchKey) { e = decodeURIComponent(decodeURIComponent(this.__searchKey));
            n.oldQuery = e }
        a("/getSuggestKeyword.html", { method: "POST", type: "json", norest: !0, data: n, onload: this.__cbSuggestKey._$bind(this, t), onerror: function() {} }) };
    _.__onSelect = function(t) {};
    _.__cbSuggestKey = function(t, e) { this.__cache[t] = e;
        this.__showList(e, t) };
    _.__showList = function(t, n) {
        var i = this.__input.value.trim();
        if (i === n) {
            var a = "",
                s = "";
            if (t && 200 == t.retcode) { data = t.suggestKeycords;
                for (var o = 0, r = data.length, l, c; o < r; o++) { l = data[o].replace(/（?(删除|删|旧|暂时作废)）?/gi, "");
                    c = e._$escape(l);
                    s = '<li data-key="' + encodeURIComponent(l) + '" data-search="searchRefer=keyWordSuggestion&referPosition=' + (o + 1) + "&oriQuery=" + i + (this.__searchKey ? "&oldQuery=" + this.__searchKey : "") + '">                      <a class="item" title="' + c + '" href="' + (window.__domainUrl || "/") + "search.html?zn=top&key=" + encodeURIComponent(encodeURIComponent(l)) + "&searchRefer=keyWordSuggestion&referPosition=" + (o + 1) + "&oriQuery=" + i + (this.__searchKey ? "&oldQuery=" + this.__searchKey : "") + '">                          <span class="shname">' + c + "</span>                      </a>                  </li>";
                    a += s } }
            if (a) { this.__wrap.innerHTML = a;
                this.__show(!0) } else this.__show(!1) } };
    _.__onBodyClick = function(t) {
        if ("none" != this.__wrap.style.display) {
            var a = n._$getElement(t),
                s = "j-searchflag-" + e._$randNumberString(6);
            if (a) { i._$addClassName(a, s);
                var o = i._$getByClassName(this.__searchBox, s);
                if (0 == o.length) this.__onHide();
                else return } else this.__onHide() } };
    _.__onBlur = function() { window.setTimeout(function() {
            if (this.__setBlurDisableOnce) { this.__setBlurDisableOnce = !1;
                this.__input.focus() } else { this.__onHide();
                this.__isFocus = !1;
                this.__input.setAttribute("placeholder", this.__holderText) } }._$bind(this), 250) };
    _.__onHide = function() { this.__show(!1);
        var t = this.__helper._$getSelectedNode();
        if (t) i._$delClassName(t, "active") };
    _.__show = function(t) { this.__wrap.style.display = t ? "" : "none" };
    _.__clearItem = function() { this.__wrap.innerHTML = "" };
    _.__onItemSelect = function(t) {
        if (t && t.target) {
            var e = t.target.getAttribute("data-key"),
                n = t.target.getAttribute("data-search");
            if (e) location.href = (window.__domainUrl || "/") + "search.html?zn=top&key=" + encodeURIComponent(e) + (n ? "&" + n : "");
            return !1 } };
    _.__onItemLeave = function(t, e, n) {
        if (t == e && n) i._$delClassName(n, t) };
    _.__showLatelyKey = function() {
        if (0 != this.__showKeyAry.length) {
            var t = '<li>                    <span class="item" title="最近搜索">                        <span class="shname tit">最近搜索</span>                        <span class="del" title="清空" onclick="kl.setEmpty(event)" style="display:block;">&#xe62b;</span>                    </span>                </li>',
                n = "",
                i = this.__showKeyAry.slice(0, 9);
            for (var a = 0, s = i.length, o; a < s; a++) { o = i[a];
                textescape = e._$escape(i[a]);
                n = '<li data-key="' + encodeURIComponent(o) + '" data-search="searchRefer=recent">                    <a class="item" title="' + textescape + '" href="' + (window.__domainUrl || "/") + "search.html?zn=top&key=" + encodeURIComponent(encodeURIComponent(o)) + '&searchRefer=recent">                        <span class="shname">' + textescape + '</span>                        <span class="del" onclick="kl.delkey(event,' + a + ')">删除</span>                    </a>                </li>';
                t += n }
            if (t) { this.__wrap.innerHTML = t;
                this.__show(!0) } else { this.__show(!1);
                this.__wrap.innerHTML = "" } } else this.__show(!1) };
    _.__refreshLatelyKey = function(t, e) { n._$stop(t);
        var i = this.__showKeyAry[e];
        this.__showKeyAry.splice(e, 1);
        for (var a = 0, s = this.__keyAry.length; a < s; a++)
            if (this.__keyAry[a] == i) { this.__keyAry.splice(a, 1);
                break }
        this.__showLatelyKey();
        this.__lsSetItem("latelysearch", this.__keyAry);
        this.__setBlurDisableOnce = !0;
        window["_gaq"].push(["_trackEvent", "搜索下拉框展示最近搜索词/词组", "删除"]) };
    _.__setLatelyKeyEmpty = function(t) { n._$stop(t);
        this.__showKeyAry = this.__keyAry = [];
        this.__showLatelyKey();
        this.__lsRemoveItem("latelysearch");
        window["_gaq"].push(["_trackEvent", "搜索下拉框展示最近搜索词/词组", "清空"]) };
    _.__getLsUsable = function() {
        try { localStorage.getItem("test");
            return !0 } catch (t) {
            return !1 } };
    _.__lsGetItem = function(t) {
        if (!this.__lsUsable) return null;
        else return JSON.parse(localStorage.getItem(t)) };
    _.__lsSetItem = function(t, e) {
        if (this.__lsUsable) localStorage.setItem(t, JSON.stringify(e)) };
    _.__lsRemoveItem = function(t) {
        if (this.__lsUsable) localStorage.removeItem(t) };
    _.__getUrlParam = function(t, e) {
        if (t.indexOf(e + "=") < 0) return "";
        var n = (t + "&").split(e + "=");
        return n[1] ? n[1].split("&")[0] : "" };
    return c._$$SearchSuggestModule
}, 1, 2, 3, 4, 6, 232, 23, 587, 93);
I$(605, function(t, e, n, i, a, s, o, r, l, c) {
    var d, u = 6e4;
    o._$$LoaderAbstract = e._$klass();
    d = o._$$LoaderAbstract._$extend(s._$$EventTarget);
    d.__init = function() { this.__super();
        this.__qopt = { onerror: this.__onQueueError._$bind(this), onload: this.__onQueueLoaded._$bind(this) };
        if (!this.constructor.__cache) this.constructor.__cache = { loaded: {} } };
    d.__reset = function(t) { this.__super(t);
        this.__version = t.version;
        this.__timeout = t.timeout;
        this.__qopt.version = this.__version;
        this.__qopt.timeout = this.__timeout };
    d.__delLoadData = function(t) { delete this.constructor.__cache[t] };
    d.__getLoadData = function(t) {
        return this.constructor.__cache[t] };
    d.__setLoadData = function(t, e) { this.constructor.__cache[t] = e };
    d.__getRequest = l;
    d.__doClearRequest = function(t) { i._$clearEvent(t) };
    d.__doRequest = function(t) { t.src = this.__url;
        document.head.appendChild(t) };
    d.__doClear = function() {
        var t = this.__getLoadData(this.__url);
        if (t) { window.clearTimeout(t.timer);
            this.__doClearRequest(t.request);
            delete t.bind;
            delete t.timer;
            delete t.request;
            this.__delLoadData(this.__url);
            this.__getLoadData("loaded")[this.__url] = !0 } };
    d.__doCallback = function(t) {
        var e = this.__getLoadData(this.__url);
        if (e) {
            var n = e.bind;
            this.__doClear();
            if (n && n.length > 0) {
                var i;
                for (; n.length;) { i = n.shift();
                    try { i._$dispatchEvent(t, arguments[1]) } catch (a) {
                        if (!1) throw a;
                        console.error(a.message);
                        console.error(a.stack) }
                    i._$recycle() } } } };
    d.__onError = function(t) { this.__doCallback("onerror", t) };
    d.__onLoaded = function() { this.__doCallback("onload") };
    d.__doLoadQueue = function(t) { this.constructor._$allocate(this.__qopt)._$load(t) };
    d.__onQueueCheck = function(t) {
        var e = this.__getLoadData(this.__key);
        if (e) {
            if (t) e.error++;
            e.loaded++;
            if (!(e.loaded < e.total)) { this.__delLoadData(this.__key);
                this._$dispatchEvent(e.error > 0 ? "onerror" : "onload") } } };
    d.__onQueueError = function(t) { this.__onQueueCheck(!0) };
    d.__onQueueLoaded = function() { this.__onQueueCheck() };
    d._$load = function(t) { t = a._$absolute(t);
        if (t) { this.__url = t;
            if (this.__version) this.__url += (this.__url.indexOf("?") < 0 ? "?" : "&") + this.__version;
            if (!this.__getLoadData("loaded")[this.__url]) {
                var e = this.__getLoadData(this.__url),
                    s;
                if (e) { e.bind.unshift(this);
                    e.timer = window.clearTimeout(e.timer) } else { s = this.__getRequest();
                    e = { request: s, bind: [this] };
                    this.__setLoadData(this.__url, e);
                    i._$addEvent(s, "load", this.__onLoaded._$bind(this));
                    i._$addEvent(s, "error", this.__onError._$bind(this, { code: n._$CODE_ERRSERV, message: "无法加载指定资源文件[" + this.__url + "]！" })) }
                if (0 != this.__timeout) e.timer = window.setTimeout(this.__onError._$bind(this, { code: n._$CODE_TIMEOUT, message: "指定资源文件[" + this.__url + "]载入超时！" }), this.__timeout || u);
                if (s) this.__doRequest(s);
                this._$dispatchEvent("onloading") } else {
                try { this._$dispatchEvent("onload") } catch (o) {
                    if (!1) throw o;
                    console.error(o.message);
                    console.error(o.stack) }
                this._$recycle() } } else this._$dispatchEvent("onerror", { code: n._$CODE_NOTASGN, message: "请指定要载入的资源地址！" }) };
    d._$queue = function(t) {
        if (t && t.length) { this.__key = a._$uniqueID();
            var e = { error: 0, loaded: 0, total: t.length };
            this.__setLoadData(this.__key, e);
            a._$forEach(t, function(t, n) {
                if (t) this.__doLoadQueue(t);
                else e.total-- }, this);
            this._$dispatchEvent("onloading") } else this._$dispatchEvent("onerror", { code: n._$CODE_NOTASGN, message: "请指定要载入的资源队列！" }) };
    return o }, 215, 1, 225, 3, 2, 23);
I$(481, function(t, e, n, i, a, s, o, r) {
    var l;
    a._$$LoaderText = e._$klass();
    l = a._$$LoaderText._$extend(t._$$LoaderAbstract);
    l.__getRequest = function() {
        return null };
    l.__doRequest = function() { i._$request(this.__url, { method: "GET", type: "text", onload: this.__onLoaded._$bind(this), onerror: this.__onError._$bind(this) }) };
    l.__onLoaded = function(t) { this.__doCallback("onload", { url: this.__url, content: t }) };
    return a }, 605, 1, 4, 14);
I$(641, function(t, e, n, i, a) { e.__removeIFrameKeepHistory = function(e) { t._$remove(e) };
    return e }, 4);
I$(606, function(t, e, n, i, a, s, o) {
    if ("trident" === n._$KERNEL.engine && n._$KERNEL.release <= "2.0") I$(642, function() { t.__removeIFrameKeepHistory = function(t) { e._$setStyle(t, "display", "none");
            try { t.contentWindow.document.body.innerHTML = "&nbsp;" } catch (n) {} } });
    return t }, 641, 4, 78);
I$(482, function(t, e, n, i, a, s, o, r) {
    var l;
    a._$$LoaderHtml = e._$klass();
    l = a._$$LoaderHtml._$extend(t._$$LoaderAbstract);
    l.__getRequest = function() {
        var t = n._$create("iframe");
        t.width = 0;
        t.height = 0;
        t.style.display = "none";
        return t };
    l.__doRequest = function(t) {
        try { document.body.appendChild(t);
            t.src = this.__url } catch (e) { console.log(t);
            console.error(e) } };
    l.__onError = function(t) {
        var e = (this.__getLoadData(this.__url) || s).request;
        this.__doCallback("onerror", t);
        i.__removeIFrameKeepHistory(e) };
    l.__onLoaded = function() {
        var t = null,
            e = (this.__getLoadData(this.__url) || s).request;
        try {
            if (e.src != this.__url) return;
            t = e.contentWindow.document.body } catch (n) {}
        this.__doCallback("onload", t);
        i.__removeIFrameKeepHistory(e) };
    return a }, 605, 1, 4, 606);
I$(483, function(t, e, n, i, a, s, o) {
    var r;
    i._$$LoaderStyle = e._$klass();
    r = i._$$LoaderStyle._$extend(t._$$LoaderAbstract);
    r.__getRequest = function() {
        return n._$create("link") };
    r.__doRequest = function(t) { t.href = this.__url;
        document.head.appendChild(t) };
    return i }, 605, 1, 4);
I$(484, function(t, e, n, i, a, s, o) {
    var r;
    i._$$LoaderScript = e._$klass();
    r = i._$$LoaderScript._$extend(t._$$LoaderAbstract);
    r.__reset = function(t) { this.__super(t);
        this.__async = t.async;
        this.__charset = t.charset;
        this.__qopt.async = !1;
        this.__qopt.charset = this.__charset };
    r.__getRequest = function() {
        var t = n._$create("script");
        if (null != this.__async) t.async = !!this.__async;
        if (null != this.__charset) t.charset = this.__charset;
        return t };
    r.__doClearRequest = function(t) { n._$remove(t) };
    return i }, 605, 1, 4);
I$(285, function(t, e, n, i, a, s, o, r, l) {
    s._$loadScript = function(t, e) { a._$$LoaderScript._$allocate(e)._$load(t) };
    s._$queueScript = function(t, e) { a._$$LoaderScript._$allocate(e)._$queue(t) };
    s._$loadStyle = function(t, e) { i._$$LoaderStyle._$allocate(e)._$load(t) };
    s._$queueStyle = function(t, e) { i._$$LoaderStyle._$allocate(e)._$queue(t) };
    s._$loadHtml = function(t, e) { n._$$LoaderHtml._$allocate(e)._$load(t) };
    s._$loadText = function(t, n) { e._$$LoaderText._$allocate(n)._$load(t) };
    if (!0) t.copy(t.P("nej.j"), s);
    return s
}, 215, 481, 482, 483, 484);
I$(233, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var f = {},
        _ = +new Date + "-";
    c._$parseTemplate = function() {
        var t = 0;
        var l = function() {
            if (!(t > 0)) { t = 0;
                n._$dispatchEvent(document, "templateready");
                n._$clearEvent(document, "templateready") } };
        var u = function(t, n) {
            var a = i._$dataset(t, "src");
            if (a) { n = n || d;
                var s = n.root;
                if (!s) s = t.ownerDocument.location.href;
                else s = e._$absolute(s);
                a = a.split(",");
                e._$forEach(a, function(t, n, i) { i[n] = e._$absolute(t, s) });
                return a } };
        var h = function(t, e) {
            if (t) {
                var n = u(t, e);
                if (n) o._$queueStyle(n, { version: i._$dataset(t, "version") });
                i._$addStyle(t.value) } };
        var f = function(e) { t--;
            i._$addScript(e);
            l() };
        var _ = function(e, n) {
            if (e) {
                var a = u(e, n),
                    s = e.value;
                if (!a) i._$addScript(s);
                else { t++;
                    var n = { version: i._$dataset(e, "version"), onload: f._$bind(null, s) };
                    window.setTimeout(o._$queueScript._$bind(o, a, n), 0) } } };
        var p = function(e) { t--;
            c._$parseTemplate(e);
            l() };
        var m = function(e, n) {
            if (e) {
                var a = u(e, n)[0];
                if (a) { t++;
                    var n = { version: i._$dataset(e, "version"), onload: p };
                    window.setTimeout(o._$loadHtml._$bind(o, a, n), 0) } } };
        var g = function(e, n) { t--;
            c._$addTextTemplate(e, n || "");
            l() };
        var v = function(e, n) {
            if (e && e.id) {
                var a = e.id,
                    s = u(e, n)[0];
                if (s) { t++;
                    var o = s + (s.indexOf("?") < 0 ? "?" : "&") + (i._$dataset(e, "version") || ""),
                        n = { type: "text", method: "GET", onload: g._$bind(null, a) };
                    window.setTimeout(r._$request._$bind(r, o, n), 0) } } };
        var $ = function(t, e) {
            var n = t.name.toLowerCase();
            switch (n) {
                case "jst":
                    a._$add(t, !0);
                    return;
                case "txt":
                    c._$addTextTemplate(t.id, t.value || "");
                    return;
                case "ntp":
                    c._$addNodeTemplate(t.value || "", t.id);
                    return;
                case "js":
                    _(t, e);
                    return;
                case "css":
                    h(t, e);
                    return;
                case "html":
                    m(t, e);
                    return;
                case "res":
                    v(t, e);
                    return } };
        s._$$CustomEvent._$allocate({ element: document, event: "templateready", oneventadd: l });
        return function(t, n) { t = i._$get(t);
            if (t) {
                var a = "TEXTAREA" == t.tagName ? [t] : e._$object2array(t.getElementsByTagName("textarea"));
                e._$forEach(a, function(t) { $(t, n) });
                i._$remove(t, !0) }
            l() } }();
    c._$addTextTemplate = function(t, e) { f[t] = e || "" };
    c._$getTextTemplate = function(t) {
        return f[t] || "" };
    c._$addNodeTemplate = function(t, n) { n = n || e._$uniqueID();
        t = i._$get(t) || t;
        c._$addTextTemplate(_ + n, t);
        if (!e._$isString(t)) i._$removeByEC(t);
        return n };
    c._$getNodeTemplate = function(t) {
        if (!t) return null;
        t = _ + t;
        var n = c._$getTextTemplate(t);
        if (!n) return null;
        var a;
        if (e._$isString(n)) { n = i._$html2node(n);
            var s = n.getElementsByTagName("textarea");
            if (!("TEXTAREA" == n.tagName || s && s.length)) c._$addTextTemplate(t, n);
            else a = n }
        if (!a) a = n.cloneNode(!0);
        i._$removeByEC(a);
        return a };
    c._$getItemTemplate = function() {
        var t = function(t, e) {
            return "offset" == e || "limit" == e };
        return function(n, i, a) {
            var s = [];
            if (!n || !n.length || !i) return s;
            a = a || d;
            var o = n.length,
                r = parseInt(a.offset) || 0,
                l = Math.min(o, r + (parseInt(a.limit) || o)),
                c = { total: n.length, range: [r, l] };
            e._$merge(c, a, t);
            for (var u = r, h; u < l; u++) { c.index = u;
                c.data = n[u];
                h = i._$allocate(c);
                var _ = h._$getId();
                f[_] = h;
                h._$recycle = h._$recycle._$aop(function(t, e) { delete f[t];
                    delete e._$recycle }._$bind(null, _, h));
                s.push(h) }
            return s } }();
    c._$getItemById = function(t) {
        return f[t] };
    c._$parseUITemplate = function() {
        var t = /#<(.+?)>/;
        return function(n, a) { a = a || {};
            var s = i._$html2node(n);
            e._$forIn(s.getElementsByTagName("textarea"), function(n) { n.id = (n.id || "").replace(t, function(t, n) {
                    var i = a[n];
                    if (!i) { i = "tpl-" + e._$uniqueID();
                        a[n] = i }
                    return i }) });
            c._$parseTemplate(s);
            return a } }();
    l._$merge({ _$parseTemplate: c._$parseTemplate, _$addNodeTemplate: c._$addNodeTemplate });
    if (!0) t.copy(t.P("nej.e"), c);
    return c }, 215, 2, 3, 4, 239, 446, 285, 14, 217);
I$(286, function(t, e, n, i, a, s, o, r, l, c) {
    var d;
    o._$$Abstract = e._$klass();
    d = o._$$Abstract._$extend(a._$$EventTarget);
    d.__init = function() { this.__super();
        n._$dumpCSSText();
        this.__initXGui();
        this.__initNode() };
    d.__reset = function(t) { this.__super(t);
        this.__doInitClass(t.clazz);
        this._$appendTo(t.parent) };
    d.__destroy = function() { this.__super();
        this.__doDelParentClass();
        delete this.__parent;
        n._$removeByEC(this.__body);
        n._$delClassName(this.__body, this.__class);
        delete this.__class };
    d.__initXGui = l;
    d.__initNode = function() {
        if (!this.__seed_html) this.__initNodeTemplate();
        this.__body = s._$getNodeTemplate(this.__seed_html);
        if (!this.__body) this.__body = n._$create("div", this.__seed_css);
        n._$addClassName(this.__body, this.__seed_css) };
    d.__initNodeTemplate = l;
    d.__doInitClass = function(t) { this.__class = t || "";
        n._$addClassName(this.__body, this.__class) };
    d.__doAddParentClass = function() {
        if (this.__seed_css) {
            var t = this.__seed_css.split(/\s+/);
            n._$addClassName(this.__parent, t.pop() + "-parent") } };
    d.__doDelParentClass = function() {
        if (this.__seed_css) {
            var t = this.__seed_css.split(/\s+/);
            n._$delClassName(this.__parent, t.pop() + "-parent") } };
    d._$getBody = function() {
        return this.__body };
    d._$appendTo = function(t) {
        if (this.__body) { this.__doDelParentClass();
            if (i._$isFunction(t)) this.__parent = t(this.__body);
            else { this.__parent = n._$get(t);
                if (this.__parent) this.__parent.appendChild(this.__body) }
            this.__doAddParentClass() } };
    d._$show = function() {
        if (this.__parent && this.__body && this.__body.parentNode != this.__parent) this.__parent.appendChild(this.__body) };
    d._$hide = function() { n._$removeByEC(this.__body) };
    if (!0) t.copy(t.P("nej.ui"), o);
    return o }, 215, 1, 4, 2, 23, 233);
I$(648, function(t, e, n, i, a, s, o, r, l) {
    var c;
    s._$$Layer = e._$klass();
    c = s._$$Layer._$extend(a._$$Abstract);
    c.__reset = function(t) { this.__super(t);
        this._$setEvent("oncontentready", t.oncontentready || this.__doInitContent._$bind(this));
        this.__nohack = !!t.nohack;
        this.__destroyable = !!t.destroyable;
        this._$setContent(t.content) };
    c.__destroy = function() { this._$dispatchEvent("onbeforerecycle");
        this.__super();
        this.__doHide();
        this._$setContent("");
        n._$style(this.__body, { top: "", left: "" }) };
    c.__doInitContent = r;
    c.__doPositionAlign = r;
    c.__doHide = function() { n._$removeByEC(this.__body);
        if (this.__mask) { n._$unmask(this.__body);
            delete this.__mask } };
    c._$setContent = function(t) {
        if (this.__body && this.__ncnt && null != t) { t = t || "";
            i._$isString(t) ? this.__ncnt.innerHTML = t : this.__ncnt.appendChild(t);
            this._$dispatchEvent("oncontentready", this.__ncnt) } };
    c._$setPosition = function(t) {
        var e = t.top;
        if (null != e) { e += "px";
            n._$setStyle(this.__body, "top", e);
            n._$setStyle(this.__mask, "top", e) }
        var e = t.left;
        if (null != e) { e += "px";
            n._$setStyle(this.__body, "left", e);
            n._$setStyle(this.__mask, "left", e) } };
    c._$show = function() { n._$setStyle(this.__body, "visibility", "hidden");
        this.__super();
        this.__doPositionAlign();
        n._$setStyle(this.__body, "visibility", "");
        if (!this.__nohack) this.__mask = n._$mask(this.__body) };
    c._$hide = function() { this.__destroyable ? this._$recycle() : this.__doHide() };
    if (!0) t.copy(t.P("nej.ui"), s);
    return s }, 215, 1, 4, 2, 286);
I$(647, function(t, e, n, i, a, s, o, r, l, c) {
    var d;
    o._$$LayerWrapper = e._$klass();
    d = o._$$LayerWrapper._$extend(a._$$Abstract);
    d.__reset = function(t) { this.__doInitLayerOptions();
        this.__super(this.__doFilterOptions(t));
        this.__lopt.onbeforerecycle = this._$recycle._$bind(this);
        this.__layer = this.__getLayerInstance() };
    d.__destroy = function() { this._$dispatchEvent("onbeforerecycle");
        this.__super();
        delete this.__lopt;
        n._$removeByEC(this.__body);
        var t = this.__layer;
        if (t) { delete this.__layer;
            t._$recycle() } };
    d.__getLayerInstance = l;
    d.__doFilterOptions = function(t) {
        var e = {};
        i._$loop(t, function(t, n) { this.__lopt.hasOwnProperty(n) ? this.__lopt[n] = t : e[n] = t }, this);
        return e };
    d.__doInitLayerOptions = function() { this.__lopt = { clazz: "", parent: null, content: this.__body, destroyable: !1, oncontentready: null, nohack: !1 } };
    d._$show = function() {
        if (this.__layer) this.__layer._$show();
        this._$dispatchEvent("onaftershow") };
    d._$hide = function() {
        if (this.__layer) this.__layer._$hide() };
    if (!0) t.copy(t.P("nej.ui"), o);
    return o }, 215, 1, 4, 2, 286, 648);
I$(630, function(t) {
    return t }, 647);
I$(665, ".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(#<blankimage>);}");
I$(649, function(t, e, n, i, a, s, o, r, l, c, d) {
    var u, h = i._$pushCSSText(o, { blankimage: n._$BLANK_IMAGE });
    r._$$Mask = e._$klass();
    u = r._$$Mask._$extend(s._$$Abstract);
    u.__reset = function(t) { this.__super(t);
        var e = t.content || "&nbsp;";
        a._$isString(e) ? this.__body.innerHTML = e : this.__body.appendChild(e) };
    u.__destroy = function() { this.__super();
        this.__body.innerHTML = "&nbsp;" };
    u.__initXGui = function() { this.__seed_css = h };
    u._$show = function() { i._$fullScreen(this.__body);
        this.__super() };
    if (!0) t.copy(t.P("nej.ui"), r);
    return r }, 215, 1, 225, 4, 2, 286, 665);
I$(650, function(t, e, n, i, a, s, o, r, l, c) {
    s._$$Draggable = e._$klass();
    c = s._$$Draggable._$extend(a._$$EventTarget);
    c.__reset = function(t) { this.__super(t);
        this.__overflow = !!t.overflow;
        this.__body = n._$get(t.body);
        this.__mbar = n._$get(t.mbar) || this.__body;
        this.__view = n._$get(t.view) || n._$getPageBox();
        this.__direction = parseInt(t.direction) || 0;
        this.__doInitDomEvent([
            [document, "mouseup", this.__onDragEnd._$bind(this)],
            [document, "mousemove", this.__onDragging._$bind(this)],
            [this.__mbar, "mousedown", this.__onDragStart._$bind(this)]
        ]) };
    c.__destroy = function() { this.__super();
        delete this.__body;
        delete this.__mbar;
        delete this.__view };
    c.__getMaxRange = function() {
        return { x: this.__view.clientWidth - this.__body.offsetWidth, y: this.__view.clientHeight - this.__body.offsetHeight } };
    c.__onDragStart = function(t) { i._$stop(t);
        if (!this.__offset) { this.__offset = { x: i._$pageX(t), y: i._$pageY(t) };
            this.__maxbox = this.__getMaxRange() } };
    c.__onDragging = function(t) {
        if (this.__offset) {
            var e = { x: i._$pageX(t), y: i._$pageY(t) };
            var a = e.x - this.__offset.x,
                s = e.y - this.__offset.y,
                o = parseInt(n._$getStyle(this.__body, "top")) || 0,
                r = parseInt(n._$getStyle(this.__body, "left")) || 0,
                l = { top: o + s, left: r + a };
            this.__offset = e;
            this._$setPosition(l) } };
    c.__onDragEnd = function(t) {
        if (this.__offset) { delete this.__maxbox;
            delete this.__offset;
            this._$dispatchEvent("ondragend", this._$getPosition()) } };
    c._$setPosition = function(t) {
        if (!this.__overflow) {
            var e = this.__maxbox || this.__getMaxRange();
            t.top = Math.min(e.y, Math.max(0, t.top));
            t.left = Math.min(e.x, Math.max(0, t.left)) }
        this._$dispatchEvent("onbeforechange", t);
        var n = this.__body.style;
        if (0 == this.__direction || 2 == this.__direction) n.top = t.top + "px";
        if (0 == this.__direction || 1 == this.__direction) n.left = t.left + "px";
        this._$dispatchEvent("onchange", t) };
    c._$getPosition = function() {
        return { left: parseInt(n._$getStyle(this.__body, "left")) || 0, top: parseInt(n._$getStyle(this.__body, "top")) || 0 } };
    s._$$Dragger = s._$$Draggable;
    if (!0) t.copy(t.P("nej.ut"), s);
    return s
}, 215, 1, 4, 3, 23);
I$(651, ".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}\n.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}\n.#<uispace> .zcnt{padding:10px 5px;}\n.#<uispace> .zttl{margin-right:20px;text-align:left;}\n.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}\n");
I$(652, '<div>\n  <div class="zbar"><div class="zttl">标题</div></div>\n  <div class="zcnt"></div>\n  <span class="zcls" title="关闭窗体">×</span>\n</div>');
I$(631, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) {
    var p = n._$pushCSSText(c),
        m = l._$addNodeTemplate(d),
        g;
    u._$$Window = e._$klass();
    g = u._$$Window._$extend(s._$$Layer);
    g.__init = function() { this.__mopt = {};
        this.__dopt = { onchange: this.__onDragging._$bind(this) };
        this.__super() };
    g.__reset = function(t) { this.__super(t);
        this.__setMask(t.mask);
        this._$setAlign(t.align);
        this._$setTitle(t.title);
        if (t.draggable) this.__dragger = r._$$Dragger._$allocate(this.__dopt) };
    g.__destroy = function() { this.__super();
        delete this.__align;
        delete this.__mclz;
        if (this.__imask) { this.__imask._$recycle();
            delete this.__imask }
        if (this.__dragger) { this.__dragger._$recycle();
            delete this.__dragger } };
    g.__initXGui = function() { this.__seed_css = p;
        this.__seed_html = m };
    g.__initNode = function() { this.__super();
        var t = n._$getChildren(this.__body);
        this.__ncnt = t[1];
        this.__dopt.mbar = t[0];
        this.__dopt.body = this.__body;
        i._$addEvent(t[2], "mousedown", this.__onClose._$bind(this));
        i._$addEvent(this.__dopt.mbar, "mousedown", this.__onDragStart._$bind(this));
        this.__nttl = n._$getChildren(this.__dopt.mbar)[0] };
    g.__onClose = function(t) { i._$stop(t);
        this._$dispatchEvent("onclose");
        this._$hide() };
    g.__onDragStart = function(t) { i._$dispatchEvent(document, "click") };
    g.__onDragging = function(t) {
        if (this.__mask) n._$style(this.__mask, { top: t.top + "px", left: t.left + "px" }) };
    g.__doPositionAlign = function() {
        var t = [function() {
                return 0 }, function(t, e, n) {
                return Math.max(0, t[n] + e[n] / 2) }, function(t, e, n) {
                return t[n] + e[n] }],
            e = ["left", "top"];
        return function() {
            var i = {},
                s = this.__body.style,
                o = n._$getPageBox(),
                r = { left: o.scrollLeft, top: o.scrollTop },
                l = { left: o.clientWidth - this.__body.offsetWidth, top: o.clientHeight - this.__body.offsetHeight };
            a._$forEach(e, function(e, n) {
                var a = t[this.__align[n]];
                if (a) i[e] = a(r, l, e) }, this);
            this._$setPosition(i) } }();
    g.__doShowMask = function() {
        if (!this.__imask) {
            if (!this.__mclz) return;
            this.__mopt.parent = this.__parent;
            this.__imask = this.__mclz._$allocate(this.__mopt) }
        this.__imask._$show() };
    g.__doHide = function() {
        if (this.__imask) this.__imask._$hide();
        this.__super() };
    g.__setMask = function(t) {
        if (!t) this.__mclz = null;
        else {
            if (t instanceof o._$$Mask) { this.__imask = t;
                return }
            if (a._$isFunction(t)) { this.__mclz = t;
                return }
            this.__mclz = o._$$Mask;
            if (a._$isString(t)) this.__mopt.clazz = t } };
    g._$setTitle = function(t, e) {
        if (this.__nttl) {
            var n = !e ? "innerText" : "innerHTML";
            this.__nttl[n] = t || "标题" }
        return this };
    g._$setAlign = function() {
        var t = /\s+/,
            e = { left: 0, center: 1, right: 2, auto: 3 },
            n = { top: 0, middle: 1, bottom: 2, auto: 3 };
        return function(i) { this.__align = (i || "").split(t);
            var a = e[this.__align[0]];
            if (null == a) a = 1;
            this.__align[0] = a;
            var a = n[this.__align[1]];
            if (null == a) a = 1;
            this.__align[1] = a;
            return this } }();
    g._$show = function() { this.__super();
        this.__doShowMask();
        return this };
    if (!0) t.copy(t.P("nej.ui"), u);
    return u }, 215, 1, 4, 3, 2, 648, 649, 650, 233, 651, 652);
I$(589, function(t, e, n, i, a, s, o, r) {
    var l;
    a._$$WindowWrapper = e._$klass();
    l = a._$$WindowWrapper._$extend(n._$$LayerWrapper);
    l.__getLayerInstance = function() {
        return i._$$Window._$allocate(this.__lopt) };
    l.__doInitLayerOptions = function() { this.__super();
        this.__lopt.mask = null;
        this.__lopt.title = "标题";
        this.__lopt.align = "";
        this.__lopt.draggable = !1;
        this.__lopt.onclose = null };
    if (!0) t.copy(t.P("nej.ui"), a);
    return a }, 215, 1, 630, 631);
I$(447, function(t) {
    return t }, 589);
I$(234, function(t, e, n, i, a, s, o, r) {
    var l;
    a._$$AnimEaseIn = e._$klass();
    l = a._$$AnimEaseIn._$extend(i._$$AnimBezier);
    l.__reset = function(t) { t = n._$merge({}, t);
        t.timing = "easein";
        this.__super(t) };
    if (!0) t.copy(t.P("nej.ut"), a);
    return a }, 215, 1, 2, 96);
I$(138, function(t, e, n, i, a, s, o, r) {
    var l;
    a._$$AnimEaseOut = e._$klass();
    l = a._$$AnimEaseOut._$extend(i._$$AnimBezier);
    l.__reset = function(t) { t = n._$merge({}, t);
        t.timing = "easeout";
        this.__super(t) };
    if (!0) t.copy(t.P("nej.ut"), a);
    return a }, 215, 1, 2, 96);
I$(229, function(t, e, n, i, a, s, o, r, l) {
    var c = NEJ.P,
        e = c("nej.ui"),
        l, d;
    a._$$AWWindow = t._$klass();
    l = a._$$AWWindow._$extend(e._$$WindowWrapper);
    d = a._$$AWWindow._$supro;
    l.__reset = function(t) { t.parent = t.parent || document.body;
        t.clazz = (t.clazz || "") + " m-window iDialogAniCore iDialogAnimate5";
        t.mask = "m-mask";
        this.__supReset(t);
        var e = this.__layer._$hide;
        this.__layer._$hide = function() { nej.e._$addClassName(this.__layer.__body, "iDialogAnimate5");
            window.setTimeout(function() { e.apply(this.__layer) }._$bind(this), 350) }._$bind(this);
        this.__layer._$setTitle(t.title, !0) };
    l.__doAnimation = function() { nej.e._$delClassName(this.__layer.__body, "iDialogAnimate5") };
    l._$hide = function() { this.__super();
        console.log("hide") };
    l.__doHide = function() {
        var t = this.__super.bind(this);
        var e = i._$$AnimEaseOut._$allocate({ from: { offset: 400 }, to: { offset: 0 }, duration: 1e3, onupdate: function(t) { this.__body.parentNode.parentNode.style.width = t.offset + "px";
                this.__layer.__doPositionAlign() }, onstop: function() { this._$recycle();
                t() } });
        e._$play() };
    l._$show = function() { d._$show.apply(this, arguments);
        this.__body.focus();
        this.__doAnimation();
        return this };
    return a._$$AWWindow }, 1, 447, 234, 138);
I$(230, ".#<uispace> .testloginwin{curosr:auto;}\n");
I$(231, '<div class="iDialogBody">\n\t<div class="iDialogMain j-flag" style="width:auto;">\n\t\t<div class="loginForm">\n\t\t<div id="loginbox" class="ph-loading" style="min-height:237px;"></div>\n\t\t<ul class="formList" style="width:auto;">\n\t\t\t<li class="regtip">\n\t\t\t\t<em>没有网易邮箱？&nbsp;<a class="j-flag" href="javascript:;" target="_blank">立即免费注册&gt;&gt;</a></em>\n\t\t\t</li>\n\t\t</ul>\n\t\t<ul class="m-thirdpart clearfix">\n            <li class="text">使用第三方账号登录：</li>\n            <li class="wx">\n            \t<a href="http://reg.163.com/outerLogin/oauth2/connect.do?target=13&scope=snsapi_login&domains=global.163.com&product=kaola&url2=http%3A%2F%2Fglobal.163.com%2Furs%2Fredirect.html&url=http%3A%2F%2Fglobal.163.com%2Furs%2Fredirect.html" class="j-flag">\n            \t\t<i class="w-icon w-icon-28"></i>\n            \t</a>\n            </li>\n            <li class="zfb">\n            \t<a href="http://reg.163.com/outerLogin/oauth2/aliPayFastLogin.do?product=kaola&redirect_error=http%3A%2F%2Fglobal.163.com%2Furs%2Fredirect.html&redirect_url=http%3A%2F%2Fglobal.163.com%2Furs%2Fredirect.html" class="j-flag">\n            \t\t<i class="w-icon w-icon-28 w-icon-28-1"></i>\n            \t</a>\n            </li>\n            <li class="wb">\n            \t<a href="http://reg.163.com/outerLogin/oauth2/connect.do?product=kaola&url2=http%3A%2F%2Fglobal.163.com%2Furs%2Fredirect.html&domains=global.163.com&target=3&url=http%3A%2F%2Fglobal.163.com%2Furs%2Fredirect.html" class="j-flag">\n            \t\t<i class="w-icon w-icon-28 w-icon-28-2"></i>\n            \t</a>\n            </li>\n            <li class="qq">\n            \t<a href="http://reg.163.com/outerLogin/oauth2/connect.do?product=kaola&url2=http%3A%2F%2Fglobal.163.com%2Furs%2Fredirect.html&domains=global.163.com&target=1&url=http%3A%2F%2Fglobal.163.com%2Furs%2Fredirect.html" class="j-flag">\n            \t\t<i class="w-icon w-icon-28 w-icon-28-3"></i>\n            \t</a>\n            </li>\n        </ul>\n\t</div>\n</div>');
I$(235, function(t, e, n, i, a, s, o, r, l) {
    var c = e._$format(new Date, "yyyyMMddHH") + e._$randNumberString(6);
    var d = location.protocol + "//ursdoccdn.nosdn.127.net/webzj/message_20161017.js";
    i._$queueScript([d], { onerror: function() { window["_gaq"] && window["_gaq"].push(["_trackEvent", "前端报错信息", "PC", "URS-js全站加载失败"]);
            window._dapush && window._dapush("_trackEvent", "前端报错信息", "PC", "URS-js全站加载失败") } });
    a._$$URSLoginModule = NEJ.C();
    pro = a._$$URSLoginModule._$extend(t._$$EventTarget);
    pro.__init = function(t) { this.__supInit(t);
        var e = location.protocol + "//ursdoccdn.nosdn.127.net/webzj/message_20161017.js";
        if (window.URS) this.__initURS();
        else i._$queueScript([e], { onload: function() { this.__initURS() }._$bind(this), onerror: function() { window["_gaq"] && window["_gaq"].push(["_trackEvent", "前端报错信息", "PC", "URS-js弹窗加载失败"]);
                window._dapush && window._dapush("_trackEvent", "前端报错信息", "PC", "URS-js弹窗加载失败") } }) };
    pro.__initURS = function() {
        var t = { cookieDomain: "kaola.com", domains: "kaola.com.hk", product: "kaola", promark: "LYABFrz", host: "www.kaola.com", includeBox: "loginbox", isHttps: 0 == location.protocol.indexOf("https") ? 1 : 0, skin: 1, page: "login", placeholder: { account: "网易邮箱账号", pwd: "密码" }, needUnLogin: 1, defaultUnLogin: 1, single: 1, errMode: 1, lazyCheck: 1, cssDomain: window.__cdnBaseUrl || location.protocol + "//www.kaola.com/", cssFiles: "css/login/urslogin_new.css?v=003", logincb: this.__cbLogin._$bind(this), statecb: this.__cbState._$bind(this), initReady: function() { window.initURSFrame = !0 } };
        this.__urs = new URS(t);
        window.setTimeout(function() {
            if (!window.initURSFrame) window["_gaq"] && window["_gaq"].push(["_trackEvent", "前端报错信息", "PC", "URS-初始化弹窗错误"]) }, 1e4) };
    pro.__reset = function(t) { this.__supInit(t) };
    pro.__cbLogin = function(t) { this._$dispatchEvent("cblogin", t) };
    pro.__cbState = function(t, e) { this._$dispatchEvent("cbstate", t, e) };
    return a._$$URSLoginModule }, 23, 2, 15, 285);
I$(7, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f) {
    var _ = e._$pushCSSText(i),
        p = o._$addNodeTemplate(a);
    c._$$LoginWindow = NEJ.C();
    f = c._$$LoginWindow._$extend(t);
    f.__reset = function(t) {
        t.clazz = t.clazz || "m-loginWrap m-loginWrap-1";
        t.width = t.width || "354";
        t.height = t.height || "340";
        t.title = t.title || "登录网易邮箱账号";
        this.__super(t);
        this.__doInitDomEvent([
            [this.__regUrl, "click", this._$Close._$bind(this)]
        ]);
        this.__layer.__dopt.mbar.className = "iDialogHead";
        this.__layer.__nttl.className = "";
        this.__loginAgentUrl = location.protocol + "//www.kaola.com/urs/163redirect.html?target=" + encodeURIComponent(this.__URLOrigin + "/agent/loginAgent.htm?from=iframeLogin");
        this.__targetUrl = t.backUrl || location.href;
        if (t.logincallback) {
            this.__loginAgentIframe = e._$get("loginIframeAgent");
            if (!this.__loginAgentIframe) {
                var n = this.__getElement('<iframe id="loginIframeAgent" name="loginIframeAgent" frameborder="0" width="0" height="0" src=""/>');
                document.body.insertBefore(n, nej.e._$getChildren(document.body)[0]);
                this.__loginAgentIframe = n }
            this.__loginType = 1
        }
        this.__regUrl.href = "http://reg.163.com/reg/innerDomainReg.do?product=kaola&url=" + encodeURIComponent(location.protocol + "//global.163.com/urs/redirect.html?target=" + encodeURIComponent(location.href)) + "&loginurl=" + encodeURIComponent(location.protocol + "//global.163.com/urs/redirect.html?target=" + encodeURIComponent(location.href));
        this.__wxUrl.href = this.__wxUrl.href + encodeURIComponent("?target=" + encodeURIComponent(this.__targetUrl));
        this.__aliPayUrl.href = this.__aliPayUrl.href + encodeURIComponent("?target=" + encodeURIComponent(this.__targetUrl));
        this.__weiboUrl.href = this.__weiboUrl.href + encodeURIComponent("?target=" + encodeURIComponent(this.__targetUrl));
        this.__qqUrl.href = this.__qqUrl.href + encodeURIComponent("?target=" + encodeURIComponent(this.__targetUrl))
    };
    f.__destroy = function(t) { this.__super(t) };
    f.__initXGui = function() { this.__seed_css = _;
        this.__seed_html = p };
    f.__initNode = function() { this.__super();
        var t = e._$getByClassName(this.__body, "j-flag"),
            n = 0;
        this.__wrap = t[n++];
        this.__regUrl = t[n++];
        this.__wxUrl = t[n++];
        this.__aliPayUrl = t[n++];
        this.__weiboUrl = t[n++];
        this.__qqUrl = t[n++];
        this.__URLOrigin = window.location.protocol + "//" + window.location.host;
        this.__loginType = 0;
        window.loginCallback = this.__loginCb._$bind(this) };
    f.__loginCb = function(t, e, n) { this._$dispatchEvent("logincallback", 0);
        this._$Close() };
    f.__getElement = function(t) {
        var e = document.createElement("div");
        e.innerHTML = t;
        return nej.e._$getChildren(e)[0] };
    f._$show = function() { this.__super();
        this.__urs = l._$allocate({ cblogin: this.__cbLoginOk._$bind(this), cbstate: this.__cbState._$bind(this) }) };
    f.__cbLoginOk = function() {
        if (1 == this.__loginType) this.__loginAgentIframe.src = this.__loginAgentUrl;
        else location.href = location.protocol + "//www.kaola.com/urs/163redirect.html?target=" + encodeURIComponent(this.__targetUrl) };
    f.__cbState = function(t, n) {
        if ("/l" == t && 423 == n.ret) { e._$addClassName(this.__wrap, "m-loginWarning m-loginWarning-1");
            this.__layer.__dopt.mbar.innerText = "账号风险提示" } };
    f._$Close = function() { this.__layer._$hide() };
    return c._$$LoginWindow
}, 229, 4, 3, 230, 231, 232, 233, 234, 235);
I$(26, function(t, e, n) {
    var i = { isLogin: function(e) {
            var n = "/getUserName.html?t=" + +new Date,
                i = { method: "get", norest: !0, type: "json", onload: function(t) {
                        if (!t || 461 != t.retcode) e(1);
                        else e(0) }._$bind(this), onerror: function() { e(0) }._$bind(this) };
            t._$request(n, i) }, toLogin: function(t) { n._$allocate({ logincallback: function() {!!window._$refreshTopbar && window._$refreshTopbar();!!t && t() } })._$show() }, afterLogin: function(t) { this.isLogin(function(e) {
                if (!e) n._$allocate({ logincallback: function() {!!window._$refreshTopbar && window._$refreshTopbar();
                        t() } })._$show();
                else t() }) }, getUserInfoFromCookie: function(t, n) {
            var i = "163" === t || e._$cookie("S_INFO") || !e._$cookie("S_OINFO") ? "P_INFO" : "P_OINFO";
            if (n) return i;
            var a = (e._$cookie(i) || "").replace(/\"|\'/g, ""),
                s = a.split("|");
            if (s.length > 1 && /^.+@.+$/.test(s[0])) {
                var o = s[s.length - 1];
                return { base: s[0], alias: /^1\d{10}@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(o) ? o : s[0] } } }, getAccountFromCookie: function() {
            var t = i.getUserInfoFromCookie() || {},
                e = t.base || "";
            return e }, getUserType: function() {
            return window._kaolaUserType || 1 }, getUserTypeInUser: function(t, e) {
            var e = e || {},
                n = e.isOrdered || !1,
                i = 1;
            if (t) i = n ? 3 : 2;
            return i } };
    return i }, 14, 11, 7);
I$(219, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _, p, m, g, v, $, y, b, w) {
    v._$$FrmTopBar = t._$klass();
    w = v._$$FrmTopBar._$extend(n._$$EventTarget);
    w.__reset = function(t) { this.__super(t);
        this.__addEvent();
        this.__initRightBar();
        this.__initNotice();
        this.__rightBar = u._$allocate();
        m._$allocate();
        this._$refreshTopbar();
        this.__fixedToptabs();
        this.__go2Top();
        this.__initUserCheckIn() };
    w.__go2Top = function() { this.__go2Top = i._$get("j-go2Top");
        if (this.__go2Top) { a._$addEvent(window, "scroll", this.__toggleGo2Top._$bind(this));
            this.__toggleGo2Top() } };
    w.__toggleGo2Top = function() {
        var t = document.body.scrollTop || document.documentElement.scrollTop;
        if ("ie" == f._$KERNEL.browser && f._$KERNEL.release < "3.0");
        else if (t > 300) this.__go2Top.style.display = "block";
        else this.__go2Top.style.display = "none" };
    w.__fixedToptabs = function() {
        var t = document.URL || "",
            e = [];
        if ("undefined" != typeof hasFixedToptabs && hasFixedToptabs) { this.__selfTab = i._$get("docHead");
            this.__selfTabPlaceHolder = i._$get("topTabPlaceHolder");
            if (!this.__selfTab) return;
            this.__offsetTopTab = i._$offset(this.__selfTab).y + 17;
            a._$addEvent(window, "scroll", this.__checkToptabs._$bind(this));
            this.__checkToptabs() } };
    w.__checkToptabs = function() {
        var t = document.body.scrollTop || document.documentElement.scrollTop;
        if ("ie" == f._$KERNEL.browser && f._$KERNEL.release < "3.0");
        else if (t <= this.__offsetTopTab) { i._$delClassName(this.__selfTab, "topTabBoxFixed");
            i._$addClassName(this.__selfTabPlaceHolder, "f-dn") } else { i._$addClassName(this.__selfTab, "topTabBoxFixed");
            i._$delClassName(this.__selfTabPlaceHolder, "f-dn") } };
    w.__initUserCheckIn = function() {
        var t = s(".checkin");
        if (t.length) e._$forEach(t, function(t, e, n) {
            var s = "/personal/my_point/index.html?",
                o = i._$attr(n[e], "data-from");
            if (o) s += "zn=" + o;
            a._$addEvent(n[e], "click", function() { g.afterLogin(function() { this.__reqCheckIn(s) }._$bind(this)) }._$bind(this)) }._$bind(this)) };
    w.__reqCheckIn = function(t) {
        var e = function(e) { setTimeout(function() { window.location.href = t }, 800) };
        c("/personal/my_sign.html", { method: "GET", type: "json", norest: !0, onload: e, onerror: e }) };
    w._$refreshTopbar = function() {
        var t = i._$get("topNavLeft");
        if (t)
            if (!this.__userInfo) { this.__userInfo = new d;
                this.__userInfo.$on("logined", this.__userLogined._$bind(this));
                this.__userInfo.$inject("#topNavLeft") } else this.__userInfo.refresh();
        this.__initGreenhandGift() };
    w.__userLogined = function(t) { this._$dispatchEvent("login");
        c("/getPersonalCount.html", { method: "GET", type: "json", norest: !0, onload: this.__cbPersonCount._$bind(this) });
        h._$allocate();
        if (t && t.isInternalStaffPartner) {
            var e = i._$get("mypartnerLeft"),
                n = i._$get("mypartnerTop");
            if (e) e.style.display = "block";
            if (n) n.style.display = "block" } };
    w.__initRightBar = function() {
        var t = i._$get("topNavRight");
        var e = i._$getByClassName(t, "contact");
        if (e && e.length) a._$addEvent(e[0], "click", this.__onServiceClick._$bind(this));
        var n = i._$get("rightBarNew");
        if (n) {
            var e = i._$getByClassName(n, "servonline");
            if (e.length) a._$addEvent(e[0], "click", this.__onServiceClick._$bind(this));
            var s = i._$get("j-newPartnerNotice"),
                o = i._$get("j-dropmenuPersonal");
            if (s) {
                var e = i._$getByClassName(s, "close");
                if (e.length) a._$addEvent(e[0], "click", function() { s.style.display = "none" }._$bind(this));
                var r = i._$getByClassName(o, "mcDropMenuBox");
                if (r.length) a._$addEvent(r[0], "mouseover", function() { s.style.display = "none" }._$bind(this)) } } };
    w.__onServiceClick = function() {
        var t = t || "http://im2.gm.163.com/static/kl/index.html",
            e = e || 1024,
            n = n || 710,
            i = i || (window.screen.availWidth - e) / 2,
            a = a || (window.screen.availHeight - n) / 2,
            s;
        s = window.open(t, "newwin", "height=" + n + ", width=" + e + ", left=" + i + ", top=" + a + ", toolbar=no, menubar=no, scrollbars=no, location=no, status=no");
        if (s && s.focus) s.focus() };
    w.__onFavBtnClick = function() {
        var t = location.protocol + "//" + location.host,
            e = document.title.replace(/[\/:*?"<>|]/g, "");
        try { window.external.addFavorite(t, e) } catch (n) { window.alert("请尝试点击 Ctrl + D 来添加！") } };
    w.__cbPersonCount = function(t) {
        if (t && 200 == t.retcode) {
            var e = i._$get("personalTips");
            if (0 != t.unReadAfterSaleCount || 0 != t.unReadCouponCount) {
                if (0 != t.unReadAfterSaleCount) i._$get("aftersaleTip").style.display = "block";
                if (0 != t.unReadCouponCount) {
                    var n = i._$get("couponTip");
                    n.innerText = t.unReadCouponCount;
                    n.style.display = "block" }
                e.style.display = "block" } else e.style.display = "none" } };
    w.__addEvent = function() {
        var t = i._$get("topNavWrap");
        a._$addEvent("addFavBtn", "click", this.__onFavBtnClick._$bind(this));
        var e = i._$getByClassName(t, "mcDropMenuBox");
        if (e && e.length)
            for (var n = 0, s = e.length; n < s; n++) o._$hover(e[n], "dropMenuBoxActive") };
    w.__initNotice = function() {
        var t = i._$get("topnotice");
        if (t) {
            var e = i._$dataset(t, "closetype");
            if (1 == e) {
                var n = i._$dataset(t, "id"),
                    s = _._$cookie("NTES_KAOLA_TOPNOTICE" + n);
                if (s && "-1" == s);
                else { t.style.display = "block";
                    _._$cookie("NTES_KAOLA_TOPNOTICE" + n, { path: "/", domain: "kaola.com", expires: 365, value: "-1" }) } }
            var o = i._$getByClassName(t, "close");
            if (o.length) a._$addEvent(o[0], "click", function() { t.style.display = "none" }) }! function() {
            function e() {
                var t = +new Date + h,
                    e = 0,
                    n = 0;
                for (var i = 0; i < s.length; i++)
                    if (s[i] > t) { e = s[i];
                        break }
                if (e) n = e - t;
                else { n = 0;!!p && clearInterval(p) }
                var a = _(n, !0);
                if (f.dd != a.dd) d.day[0].innerHTML = a.dd.slice(0, 1);
                if (f.dd != a.dd) d.day[1].innerHTML = a.dd.slice(1, 2);
                if (f.hh != a.hh) d.hour[0].innerHTML = a.hh.slice(0, 1);
                if (f.hh != a.hh) d.hour[1].innerHTML = a.hh.slice(1, 2);
                if (f.mm != a.mm) d.min[0].innerHTML = a.mm.slice(0, 1);
                if (f.mm != a.mm) d.min[1].innerHTML = a.mm.slice(1, 2);
                if (f.ss != a.ss) d.sec[0].innerHTML = a.ss.slice(0, 1);
                if (f.ss != a.ss) d.sec[1].innerHTML = a.ss.slice(1, 2);
                f = a }
            var n = i._$getByClassName(t, "timer-wrap");
            if (n && n.length) {
                var a = n[0];
                var s = a.getAttribute("data-points").split(","),
                    o = [],
                    r, l = parseFloat(a.getAttribute("data-serverTime"));
                for (var c = 0; c < s.length; c++)
                    if (s[c]) { r = parseFloat(s[c]); "number" == typeof r && o.push(r) }
                s = o;
                if (s && s.length) {
                    var d = { day: i._$getByClassName(i._$getByClassName(a, "day")[0], "dgt"), hour: i._$getByClassName(i._$getByClassName(a, "hour")[0], "dgt"), min: i._$getByClassName(i._$getByClassName(a, "min")[0], "dgt"), sec: i._$getByClassName(i._$getByClassName(a, "sec")[0], "dgt") },
                        u = +new Date,
                        h = l - u,
                        f = {};
                    var _ = function() {
                        var t = function(t) {
                            return (t < 10 ? "0" : "") + t };
                        var e = 6e4,
                            n = 60 * e,
                            i = 24 * n;
                        return function(a, s) {
                            var o = +a > 0 ? +a : 0;
                            var r = parseInt(o / i, 10),
                                l = parseInt(o % i / n, 10),
                                c = parseInt(o % i % n / e, 10),
                                d = parseInt(o % i % n % e / 1e3, 10),
                                u = parseInt(o % i % n % e % 1e3, 10);
                            if (1 === r && 0 === l) { r = 0;
                                l = 24 }
                            var h = [t(r), t(l), t(c), t(d)];
                            return { d: r, h: l, m: c, s: d, ms: u, dd: t(r), hh: t(l), mm: t(c), ss: t(d) } } }();
                    var p = setInterval(e, 500);
                    e() } } }() };
    w.__initGreenhandGift = function() { c("/newer/gift/remind.html?" + +new Date, { method: "GET", type: "json", norest: !0, onload: this.__setGreenhandGift._$bind(this) }) };
    w.__setGreenhandGift = function(t) {
        var e = document.getElementById("js-greenhand");
        if (e)
            if (t && 200 == t.retcode && t.img) {
                var n = document.getElementById("js-greenhandimg");
                if (n) n.src = t.img + "?imageView&thumbnail=80x80";
                e.style.display = "block";
                var s = parseInt(e.getAttribute("data-isindex"), 10) || 0;
                if (s) {
                    var o = i._$getByClassName(e, "mcDropMenuBox");
                    a._$addEvent(e, "mouseover", function() { i._$addClassName(o[0], "dropMenuBoxActive") }._$bind(this));
                    a._$addEvent(e, "mouseout", function() { i._$delClassName(o[0], "dropMenuBoxActive") }._$bind(this)) } }
    };
    return v._$$FrmTopBar
}, 1, 2, 23, 4, 3, 25, 107, 15, 433, 6, 264, 434, 101, 78, 11, 93, 435, 26);
I$(220, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) { d._$$Footer = t._$klass();
    _ = d._$$Footer._$extend(n._$$EventTarget);
    _.__reset = function(t) { this.__super(t);
        this.__footer = i._$get("docFoot");
        a._$addEvent(this.__footer, "click", this.__onContactClick._$bind(this)) };
    _.__onContactClick = function(t) {
        var e = a._$getElement(t);
        if ("联系客服" == e.innerText) { a._$stop(t);
            var n = n || "http://im2.gm.163.com/static/kl/index.html",
                i = i || 1024,
                s = s || 710,
                o = o || (window.screen.availWidth - i) / 2,
                r = r || (window.screen.availHeight - s) / 2,
                l;
            l = window.open(n, "newwin", "height=" + s + ", width=" + i + ", left=" + o + ", top=" + r + ", toolbar=no, menubar=no, scrollbars=no, location=no, status=no");
            if (l && l.focus) l.focus() } };
    return d._$$Footer }, 1, 2, 23, 4, 3, 107, 15, 433, 78, 11);
I$(588, '<div class="m-ctgcard f-cb">\n  <div class="f-fl m-ctglist">\n    {#if navItem.childrenNodeList && navItem.childrenNodeList.length}\n    <div class="m-ctgtbl">\n      {#list list as row}\n      <div class="f-cb">\n        {#list row.rowItems as cat2Item}\n\t      <div class="litd">\n          <div class="item">\n             <p class="title"><a target="_blank" class="cat2" href="//www.kaola.com/category/{cat2Item.categoryId||\'\'}.html?zn=top&zp=category-{@(index+1)}-1-{@(cat2Item_index+1+row_index*2)}">{@(cat2Item.categoryName||\'\')}</a></p>\n            <div class="ctgnamebox">\n              {#if cat2Item.childrenNodeList && cat2Item.childrenNodeList.length}\n              {#list cat2Item.childrenNodeList as cat3Item}<a target="_blank" class="f-fcred{cat3Item.specialEffect||\'\'}" href="//www.kaola.com/category/{cat2Item.categoryId||\'\'}/{cat3Item.categoryId||\'\'}.html?zn=top&zp=category-{@(index+1)}-1-{@(cat2Item_index+1+row_index*2)}-{@(cat3Item_index+1)}">{cat3Item.categoryName||\'\'}</a>{/list}\n              {/if}\n            </div>\n          </div>\n\t      </div>\n\t      {/list}\n      </div>\n      {/list}\n    </div>\n    {/if}\n  </div>\n  <div class="f-fl m-brandbox">\n    <div class="brandlist f-cb">\n      {#if navItem.brandList && navItem.brandList.length}\n      {#list navItem.brandList as item}\n        <a target="_blank" href="//www.kaola.com/brand/{@(item.brandId||\'\')}.html?source=1&zn=top&zp=category-{@(index+1)}-2-{@(item_index+1)}">\n          <img alt="{@(item.name||\'\')}" src="{@((item.logoPic||\'\')|noProtocol)}">\n        </a>\n      {/list}\n      {/if}\n    </div>\n  </div>\n  <div class="f-fr imgbox">\n    <a target="_blank" href="{@((navItem.bannerTargetUrl||\'\')|noProtocol|addActParam:\'zn=top\')}">\n      <img class="u-img" src="{@((navItem.bannerImageUrl||\'\')|noProtocol)}">\n    </a>\n  </div>\n</div>');
I$(436, function(t, e, n, i) {
    var a = n.extend({ template: i, data: { list: [] }, config: function(t) {
            var e = [];
            var n = t.navItem.childrenNodeList || [];
            this.data.list = [];
            for (var i = 0, a = n.length; i < a; i++)
                if (i % 2 == 1) { e.push(n[i - 1]);
                    e.push(n[i]);
                    this.data.list.push({ rowItems: e });
                    e = [] } else if (i == n.length - 1) this.data.list.push({ rowItems: [n[i]] });
            else;
            this.supr(t) } });
    a.filter("addParam", function(e, n) {
        return t.insertParamIntoUrl(e, n) }).filter("addActParam", function(e, n) {
        return t.insertParamIntoUrl(e, n + "&zp=category-" + (this.data.index + 1) + "-3-1") });
    return a }, 15, 2, 151, 588);
I$(221, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) {
    var p = l._$KERNEL;
    var m = 800,
        g = 0,
        v = +new Date,
        $;
    d._$$Nav = t._$klass();
    _ = d._$$Nav._$extend(i._$$EventTarget);
    _.__reset = function(t) { this.__super(t);
        var e = n("#topCats"),
            i, o = this,
            r;
        if (e.length) { this.__getFrontCategory();
            i = e._$children(".j-catli", !0);
            i._$forEach(function(t) { s._$addEvent(t, "mouseenter", o.__onNavHover._$bind(o));
                r = a._$dataset(t, "link") || "";
                s._$addEvent(t, "click", o.__onNavclick._$bind(o, r)) });
            s._$addEvent(e[0], "mousemove", o.__onNavMove._$bind(o));
            s._$addEvent(e[0], "mouseleave", o.__onNavLeave._$bind(o));
            o.__isHDpi() && o.__dealHDpiIcon(i) } };
    _.__isHDpi = function() {
        return window.devicePixelRatio && window.devicePixelRatio > 1 }, _.__dealHDpiIcon = function(t) {
        var e = t._$children(".icon"),
            i, a, s;
        for (var o = e.length; o; o--) { i = n(e[o - 1]);
            a = i._$attr("src") || "";
            s = a.split("?");
            2 == s.length && i._$attr("src", s[0]) } }, _.__getFrontCategory = function() { r("/getFrontCategory.shtml", { norest: !0, onload: function(t) { this.__injectCategoryList(t && t.frontCategoryList || []) }._$bind(this), onerror: function() {} }) };
    _.__injectCategoryList = function(t) {
        function i(t, n, i) {
            var a = [];
            e._$forEach(t, function(t) {
                if (t[n] && t[n] == i) a.push(t) });
            return a }
        var s = n(".j-catmenu li");
        for (var o = 0, r = s.length, l, d; o < r; o++) { l = a._$attr(s[o], "data-categoryId");
            d = i(t, "categoryId", l)[0];
            if (d) new c({ data: { navItem: d, index: o } }).$inject(s[o]) } };
    _.__onNavclick = function(t, e) { e = e || window._event;
        $ && clearTimeout($);
        var n = e.target || e.srcElement;
        if (!o.isInClassNode(n, "m-ctgcard") && t) window.open(t, "_blank") };
    _.__onNavLeave = function() { $ && clearTimeout($);
        this.__showOrHideCard(this.__hoverEle, 0) };
    _.__onNavMove = function(t) { t = t || window._event;
        var e = this;
        v = +new Date;
        e.__mousePosX = t.clientX };
    _.__onNavHover = function(t) { t = t || window._event;
        var e = t.target || t.srcElement,
            n = this,
            i, a;
        $ && clearTimeout($);
        if (o.isInClassNode(e, "j-catli")) { e = o.getParentElementByClass(e, "j-catli");
            n.__mousePosX = n.__mousePosX || t.clientX;
            n.__hoverEle = n.__hoverEle || e;
            i = t.clientX - n.__mousePosX;
            if (n.__hoverEle != e)
                if (i > 2) { a = +new Date;
                    g = m - (a - v);
                    v = a;
                    if (g <= 0 || g > m) { n.__showOrHideCard(n.__hoverEle, 0);
                        n.__showOrHideCard(e, 1);
                        n.__hoverEle = e } else $ = setTimeout(function() { n.__showOrHideCard(n.__hoverEle, 0);
                        n.__showOrHideCard(e, 1);
                        n.__hoverEle = e }, g) } else { n.__showOrHideCard(n.__hoverEle, 0);
                    n.__showOrHideCard(e, 1);
                    n.__hoverEle = e }
            else n.__showOrHideCard(n.__hoverEle, 1) } else n.__showOrHideCard(n.__hoverEle, 0);
        v = +new Date;
        n.__mousePosX = t.clientX };
    _.__showOrHideCard = function(t, e) {
        var i = o.getParentElementByTag(t, "li");
        var s = n(".j-catmenu li .m-ctgcard"),
            r;
        var l, c;
        if (i) { l = a._$dataset(i, "effect");
            c = a._$dataset(i, "index");
            r = s[c];
            if (r)
                if (e) {
                    if (l && "0" == l) a._$addClassName(i, "z-hover2");
                    a._$addClassName(i, "z-hover") } else a._$delClassName(i, "z-hover") } };
    return d._$$Nav }, 1, 2, 79, 23, 4, 3, 15, 6, 78, 436);
I$(222, function(t, e, n, i) {
    var a = t._$klass();
    var s = a._$extend(n._$$EventTarget);
    s.__reset = function() { this.navNode = document.getElementById("js_bottomnav");
        if (this.navNode) this.__initEvents() };
    s.__initEvents = function() { i._$addEvent(this.navNode, "click", this.__toggleOpenFold._$bind(this)) };
    s.__toggleOpenFold = function(t) {
        var n = t || window.event,
            a = n.target || n.srcElement,
            s = "m-bottomnav-open";
        if (a.className.indexOf("tg") >= 0) { i._$stop(n);
            if (e._$hasClassName(this.navNode, s)) e._$delClassName(this.navNode, s);
            else e._$addClassName(this.navNode, s) } };
    return a }, 1, 4, 23, 3);
I$(223, function(t, e, n, i, a, s, o, r, l, c, d, u, h) { l._$$ActionManage = t._$klass();
    h = l._$$ActionManage._$extend(n._$$EventTarget);
    h.__reset = function(t) { this.__super(t);
        o._$addEvent(document, "click", this.__onGACheck._$bind(this));
        this.__initHrefParam();
        this.__dealAccount() };
    h.__onGACheck = function(t) {
        var e = o._$getElement(t),
            n = i._$dataset(e, "category"),
            a = i._$dataset(e, "event"),
            s = i._$dataset(e, "label"),
            r = i._$dataset(e, "href");
        if (n)
            if (r) { window["_gaq"].push(["_trackEvent", n, a, s, { url: r }]);
                window._dapush && window._dapush("_trackEvent", n, a, s, { url: r }) } else { window["_gaq"].push(["_trackEvent", n, a, s]);
                window._dapush && window._dapush("_trackEvent", n, a, s) }
        if (i._$hasClassName(e, "j-openService")) { o._$stop(t);
            this._$openServiceWin() } };
    h._$openServiceWin = function(t) {
        var t = t || "http://im2.gm.163.com/static/kl/index.html",
            e = e || 1024,
            n = n || 710,
            i = i || (window.screen.availWidth - e) / 2,
            a = a || (window.screen.availHeight - n) / 2,
            s;
        s = window.open(t, "newwin", "height=" + n + ", width=" + e + ", left=" + i + ", top=" + a + ", toolbar=no, menubar=no, scrollbars=no, location=no, status=no");
        if (s && s.focus) s.focus() };
    h.__initHrefParam = function() { r("body")._$on("click a[data-param]", function() {
            var t = i._$attr(this, "data-param"),
                e = this.href,
                n = "";
            if (t && "javascript:;" != e) { e = e.split("#")[0];
                if (e.indexOf("?") < 0)
                    if ("?" == t.charAt(0)) n = e + t;
                    else n = e + "?" + t;
                else {
                    if ("&" != e.slice(-1)) e += "&";
                    if ("#" == t.charAt(0)) e = e.slice(0, -1);
                    n = e + t }
                i._$attr(this, "data-param", "");
                this.href = n } }) };
    h.__dealAccount = function() {!window.account && (window.account = s.getAccountFromCookie()) };
    return l._$$ActionManage }, 1, 2, 23, 4, 15, 26, 3, 25);
! function() {
    var t = [17, 95, 94, 86, 24, 63, 2, 0, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, 7, -7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 828e5, 11, -11, 2563907772, -12, 12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, -21, 21, 22, -22, 23, -23, 24, -24, 25, -25, -26, 26, 27, -27, -28, 28, -29, 29, -30, 30, 31, -31, -33, 32, 33, -32, -35, -34, 34, 35, 37, 36, -36, -37, 39, -38, -39, 38, -40, 40, -41, 41, 43, -43, 42, -42, 44, -44, -45, 45, -46, -47, 46, 47, 48, 49, -49, -48, 51, 50, -50, -51, 570562233, 52, 53, -53, -52, 55, -55, 54, -54, 503444072, 57, -56, 56, -57, -59, 59, -58, 58, 60, -60, -61, 61, 62, 63, -63, -62, -66, 711928724, 67, -64, 64, -65, -67, 65, 66, -68, 68, -69, -71, 71, 70, 69, -70, 72, 3686517206, -72, 73, -75, -74, 75, 74, -73, -78, -77, -76, 79, 77, 78, -79, 76, 81, 3554079995, 83, -82, -80, 82, -83, 80, -81, 84, -85, -84, -87, -86, 87, 86, 85, 90, -91, 88, -90, 89, -88, -89, 91, -93, -94, -92, -95, 95, 92, 93, 94, 99, -96, -99, 98, -97, -98, 96, 97, -101, 3272380065, 101, 100, -100, -103, -102, 102, 103, -105, -106, -107, 105, -104, 106, 107, 104, -108, 109, -110, -109, 110, 108, 111, -111, 251722036, -112, 115, 112, -115, 113, -114, 114, -113, 117, 116, -119, -117, 119, -116, 118, -118, 123, -122, -123, -121, 121, -120, 122, 120, 125, 127, 3412177804, -124, -125, 124, -127, 126, -126, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 864e5, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
    ! function() {
        function e() {
            var e = "WI1R2D5dv3Xzw8Cs".split("");
            this.d = function(n) {
                if (null == n || void 0 == n) return n;
                if (n.length % t[6] != t[7]) throw Error("1100");
                for (var i = [], a = t[7]; a < n.length; a++) { a % t[6] == t[7] && i.push("%");
                    for (var s = e, o = t[7]; o < s.length; o++)
                        if (n.charAt(a) == s[o]) { i.push(o.toString(t[50]));
                            break } }
                return decodeURIComponent(i.join("")) } }
        var n = (new e).d,
            i = (new e).d,
            a = (new e).d,
            s = (new e).d,
            o = (new e).d;
        ! function() {
            function e(e) {
                if (null == e) return null;
                for (var n = [], i = t[7], a = e.length; i < a; i++) {
                    var s = e[i];
                    n[i] = et[(s >>> t[14] & t[48]) * t[50] + (s & t[48])] }
                return n }

            function r(e) {
                var n = [];
                if (null == e || void 0 == e || e.length == t[7]) return d(it);
                if (e.length >= it) {
                    var n = t[7],
                        i = [];
                    if (null != e && e.length != t[7]) {
                        if (e.length < it) throw Error(s("RIRWRWRR"));
                        for (var a = t[7]; a < it; a++) i[a] = e[n + a] }
                    return i }
                for (i = t[7]; i < it; i++) n[i] = e[i % e.length];
                return n }

            function l(e) {
                var n = t[397];
                if (null != e)
                    for (var i = t[7]; i < e.length; i++) n = n >>> t[29] ^ tt[(n ^ e[i]) & t[291]];
                e = h(n ^ t[397]);
                n = e.length;
                if (null == e || n < t[7]) e = new String(a(""));
                else {
                    for (var i = [], s = t[7]; s < n; s++) i.push(p(e[s]));
                    e = i.join(a("")) }
                return e }

            function c(e, r, l) {
                var c, d = [n("R1"), n("R2"), a("RW"), o("5I"), a("D3"), o("2v"), o("53"), o("DI"), n("dv"), s("2w"), n("Dw"), o("DX"), a("dD"), s("55"), s("D5"), i("5w"), s("5d"), o("Rv"), n("dR"), s("DW"), o("28"), i("D1"), o("R5"), o("52"), n("2d"), n("5z"), a("Dv"), o("d5"), i("2s"), n("1s"), o("2R"), o("51"), s("dd"), n("R3"), n("Dd"), o("22"), s("5X"), s("RI"), n("2D"), n("D2"), n("d3"), n("23"), i("DR"), o("5R"), n("58"), a("5D"), o("5s"), s("2X"), i("dX"), i("RR"), o("Rd"), n("dI"), i("d2"), i("5v"), a("21"), i("d1"), i("DD"), s("1z"), o("2z"), s("2C"), a("2I"), o("RD"), n("dW"), a("5C")],
                    u = o("25"),
                    h = [];
                if (l == t[532]) l = e[r], c = t[7], h.push(d[l >>> t[6] & t[145]]), h.push(d[(l << t[14] & t[114]) + (c >>> t[14] & t[48])]), h.push(u), h.push(u);
                else if (l == t[6]) l = e[r], c = e[r + t[532]], e = t[7], h.push(d[l >>> t[6] & t[145]]), h.push(d[(l << t[14] & t[114]) + (c >>> t[14] & t[48])]), h.push(d[(c << t[6] & t[140]) + (e >>> t[21] & t[10])]), h.push(u);
                else if (l == t[10]) l = e[r], c = e[r + t[532]], e = e[r + t[6]], h.push(d[l >>> t[6] & t[145]]), h.push(d[(l << t[14] & t[114]) + (c >>> t[14] & t[48])]), h.push(d[(c << t[6] & t[140]) + (e >>> t[21] & t[10])]), h.push(d[e & t[145]]);
                else throw Error(o("RIRWRIRW"));
                return h.join(a("")) }

            function d(e) {
                for (var n = [], i = t[7]; i < e; i++) n[i] = t[7];
                return n }

            function u(e, n, i, o, r) {
                if (null != e && e.length != t[7]) {
                    if (null == i) throw Error(a("RIRWRWR2"));
                    if (e.length < r) throw Error(s("RIRWRWRR"));
                    for (var l = t[7]; l < r; l++) i[o + l] = e[n + l] } }

            function h(e) {
                var n = [];
                n[t[7]] = e >>> t[66] & t[291];
                n[t[532]] = e >>> t[50] & t[291];
                n[t[6]] = e >>> t[29] & t[291];
                n[t[10]] = e & t[291];
                return n }

            function f(e) {
                if (null == e || void 0 == e) return e;
                e = encodeURIComponent(e);
                for (var s = [], o = e.length, r = t[7]; r < o; r++)
                    if (e.charAt(r) == n("1D"))
                        if (r + t[6] < o) s.push(_(e.charAt(++r) + a("") + e.charAt(++r))[t[7]]);
                        else throw Error(i("RIRWRWR3"));
                else s.push(e.charCodeAt(r));
                return s }

            function _(e) {
                if (null == e || e.length == t[7]) return [];
                e = new String(e);
                for (var n = [], i = e.length / t[6], a = t[7], s = t[7]; s < i; s++) {
                    var o = parseInt(e.charAt(a++), t[50]) << t[14],
                        r = parseInt(e.charAt(a++), t[50]);
                    n[s] = v(o + r) }
                return n }

            function p(e) {
                var n = [];
                n.push(V[e >>> t[14] & t[48]]);
                n.push(V[e & t[48]]);
                return n.join(i("")) }

            function m(e, n) {
                if (null == e || null == n || e.length != n.length) return e;
                for (var i = [], a = t[7], s = e.length; a < s; a++) {
                    var o = a,
                        r;
                    r = e[a];
                    var l = n[a];
                    r = v(r);
                    l = v(l);
                    r = v(r ^ l);
                    i[o] = r }
                return i }

            function g(t, e) {
                return v(t + e) }

            function v(e) {
                if (e < t[282]) return v(t[283] - (t[282] - e));
                if (e >= t[282] && e <= t[274]) return e;
                if (e > t[274]) return v(t[284] + e - t[274]);
                throw Error(a("RIRWRWRI")) }

            function $(e) {
                function r() {
                    for (var e = [a("2I515I52531W28D21W2R5s5C525D5CdR5D521W2w535d5vd2"), i("2I525s515D1W255I5C5ddR5s5C5d1WDRd252"), n("2I525s515D1W2v5D51d15Ddd"), i("2I525s515D1W28535C5d1WDRd252"), a("2I5d5D5C5Rd31W2521"), o("2Id15I51"), a("2Id15I51535R1WD2d3dW5DdR5Dd2d2535C5d"), i("2Id1535I5w1W215w5I5R5z"), n("215Id25I5C5d"), i("215IdD5v5IdDdR1WR3RR"), a("215D5w5w1W28D2"), s("2153d2dRd2d15D5I581WD55Dd15I1WDR5Dd15355"), o("215s525s5C531W28D2"), s("215s5s5z585I5C1W2s5w521WDRd2d35w5D"), i("21d15I5d5d5I525s5R535s"), a("21d15s5I52dd5Id3"), a("2R5I5w5351d153"), n("2R5I5w53555sd15C535I5C1W2521"), n("2R5IdRd25D5w5w5Id1"), a("2R5IdRdD5I5w"), o("2R5D5Cd25IdDd1"), s("2R5D5Cd2dDd1d31W2d5sd25v535R"), o("2R5v5I5w5z52dDdRd25Dd1"), o("2R5s5w5s5C5C5I1W28D2"), i("2R5sdWdW5Dd1dW5w5Id25D1W2d5sd25v535R1W2w535d5vd2"), a("225D5X5ID5dD1W2w2d2R1WDR5I5CdR1W285s5C5s"), n("225DdR525D585s5C5I"), a("22252z5I5318DR21"), a("225sd2dD58"), o("2D5C5dd15Id55Dd1dR1W28D2"), i("2Dd15IdR1W215s5w521W23D22R"), n("2DdDd15sdRd2535w5D"), s("255I5C5dDR5s5C5d"), s("255sd1d25D"), n("25d15I5C5z5w535C1W2d5sd25v535R1W2v5D5Id5d3"), a("25d15D5C5R5v1WDR5Rd153dWd21W28D2"), n("2d5I51d1535s5w5I"), a("2d535d53"), a("2d53dR5v5I"), i("2d5sdD52d31W2s5w521WDRd2d35w5D"), i("2ddD5w5358"), s("2ddD5C5dDR5D5s"), o("2v5I5Dd2d25D5CdR5R5vdd5D535w5Dd1"), s("2v5Id1d1535C5dd25s5C"), n("2v53d15I5d535C5s1WDR5I5CdR1W2d21"), o("2358dW5I5Rd2"), n("235C555sd1585I5w1WD15s585I5C"), i("2z5I5RdRd22s5C5D"), a("2z535C5s1W28D2"), n("2z5sdXdD5z5I1W2d5sd25v535R1WDWd1R52C"), a("2w5s5v53d21W2ddD5X5Id15Id253"), a("2w5s585I"), o("2wdD5R53525I1W21d1535d5vd2"), o("2wdD5R53525I1W255Idv"), n("285I5d5C5Dd25s"), o("285I5w5ddD5C1W2d5sd25v535R"), o("285Id2dDd15I1W28D21WDR5Rd153dWd21W2R5IdW53d25I5wdR"), n("285D5C5w5s"), o("28535C5d2w53DD182Ddvd221"), a("285s5s5w215sd15I5C"), i("28DR1WDW28535C5R5v5s"), a("28DR1WD15D555Dd15D5C5R5D1WDR5I5CdR1WDR5Dd15355"), s("2C5DdddR1W2d5sd25v535R1W28D2"), a("2C535I5d5Id15I1WDR5s5w5352"), o("2Cd35I5w5I"), a("DW5I5w5I5R5D1WDR5Rd153dWd21W28D2"), a("DW5IdWd3d1dDdR"), o("DW5Dd1dW5Dd2dD5I"), n("DW5w5Id351535w5w"), i("DW28535C5d2w53DD"), n("D15I5R5v5I5C5I"), a("D15s5R5zdd5D5w5w"), i("DR5Idd5IdR525D5D"), o("DR5Rd153dWd21W28D21W215s5w52"), o("DR5D5d5s5D1WDWd1535Cd2"), a("DR5v5sdd5R5Id1521W2d5sd25v535R"), a("DR53582v5D53"), o("DR5C5IdW1W23D22R"), i("D25wdd5d285s5C5s"), s("D2dd1W2R5D5C1W28D21W2R5s5C525D5CdR5D521W2Ddvd2d15I1W215s5w52"), a("DD51dD5Cd2dD"), o("DD58dWdDdR5v"), n("DD5C53d55Dd1dR"), o("DDd25sdW535I"), i("D55w5I52535853d11WDR5Rd153dWd2"), i("Dd53525D1W2w5Id2535C"), s("C2zzzsCDXCvz"), o("CDv8vCC535vdC2zvX8CDXCvz"), a("CDv8vCC535vdC2zzzsCDXCvz"), n("CDv8vCC535vdCDXCvzC2z83R"), a("CDv8vCC535vdCDz8X3C2zX3I"), a("CDv8vCC535vdC535zWC3X8vs"), a("CDv8vCC535vdC5XDzdC2z83R"), a("CDv8vCC535vdCd3WXDCdvsvW"), o("CDv8vCC535vdCdzzv5C3zz3I"), o("CDv8vCC535vdCvXIvwC5XDzd"), o("CDv8vCC535vdC33Xz5C2z3X5"), s("CDXCvzC2z83R"), i("CDz3zwCD3wv5"), n("CDzCXCCvz8XsC33zvDC3zz3I"), o("C535zWCDXCvzC2z83R"), s("C535z3C5X8XRCDXd3XC2z83R"), n("C535z3C5X8XRCvvv31C2z83R"), n("C5XDzdC2z83R"), a("C33Xz5C2z3X5"), o("C3zz3IC2z83R"), i("C535zWCdzzv5C53vvCC2z83R"), i("Cdzzv5C53vvCC2z83R"), a("C5XWvdC5XDzdC2z83R"), n("C2zzzsCDXCvzDs2d21R1RRRIR1"), a("C5XDzdC2z83RDs2d21R1RRRIR1"), n("CDzCXCCvz8XsC5X8XRC3zz3IC2z83R"), n("CDv8vCC535vdC3zz3IC2z83R"), n("C2zvz8C3zz3I1WDWd15s"), s("C2zvz8CDXCvz1WDWd15s"), s("Cvvzz3C53C3wC2zvz8C2zvX8C3zz3I"), o("Cvvzz3C53C3wC2zvz8Cdzzv5CDXCvz")], r = [], c = t[7]; c < e.length; c++) try {
                        var d = e[c];
                        l()(d) && r.push(d) } catch (u) { o("555s5Cd21W525Dd25D5Rd21W5Dd1d15sd1") }
                    return r.join(a("Rz")) }

                function l() {
                    function e(t) {
                        var e = {};
                        return u.style.fontFamily = t, d.appendChild(u), e.height = u.offsetHeight, e.width = u.offsetWidth, d.removeChild(u), e }
                    var n = [i("585s5C5sdRdW5I5R5D"), s("dR5I5CdR18dR5Dd15355"), i("dR5Dd15355")],
                        r = [],
                        l = a("dddddd585858585858585858585w5w53"),
                        c = s("RdR1dWdv"),
                        d = Q.body,
                        u = Q.createElement(i("dRdW5I5C"));
                    u.style.fontSize = c;
                    u.style.visibility = s("5v5352525D5C");
                    u.innerHTML = l;
                    for (l = t[7]; l < n.length; l++) r[l] = e(n[l]);
                    return function(i) {
                        for (var a = t[7]; a < r.length; a++) {
                            var s = e(i + o("1w") + n[a]),
                                l = r[a];
                            if (s.height !== l.height || s.width !== l.width) return !0 }
                        return !1 } }

                function c() {
                    var t = null,
                        e = null,
                        o = [];
                    try { e = Q.createElement(a("5R5I5Cd55IdR")), t = e[i("5d5Dd22R5s5Cd25Ddvd2")](s("dd5D515d5w")) || e[n("5d5Dd22R5s5Cd25Ddvd2")](s("5DdvdW5Dd153585D5Cd25I5w18dd5D515d5w")) } catch (r) {}
                    if (!t) return o;
                    try { o.push(t.getSupportedExtensions()) } catch (l) {}
                    try { o.push(d(t, e)) } catch (c) {}
                    return o.join(n("Rz")) }

                function d(e, a) {
                    try {
                        var s = o("5Id2d2d15351dDd25D1Wd55D5RR11W5Id2d2d1D55Dd1d25DdvRz1Wd55Id1d3535C5d1Wd55D5RR11Wd55Id1d3535CD25Ddv2R5s5sd152535C5Id25DRz1WdD5C53555sd1581Wd55D5RR11WdD5C53555sd1582s5555dR5Dd2Rz1Wd55s53521W585I535C1v131Wdz1W1W1Wd55Id1d3535CD25Ddv2R5s5sd152535C5Id25D1WR81W5Id2d2d1D55Dd1d25Ddv1W1z1WdD5C53555sd1582s5555dR5Dd2Rz1W1W1W5d5wDsDW5sdR53d2535s5C1WR81Wd55D5RR21v5Id2d2d1D55Dd1d25Ddv1w1WRW1w1WRI13Rz1Wd8"),
                            r = i("dWd15D5R53dR535s5C1W585D5253dD58dW1W555w5s5Id2Rz1Wd55Id1d3535C5d1Wd55D5RR11Wd55Id1d3535CD25Ddv2R5s5sd152535C5Id25DRz1Wd55s53521W585I535C1v131Wdz1W1W1W5d5wDs25d15I5d2R5s5w5sd11WR81Wd55D5RR21vd55Id1d3535CD25Ddv2R5s5sd152535C5Id25D1w1WRW1w1WRI13Rz1Wd8"),
                            l = e.createBuffer();
                        e.bindBuffer(e.ARRAY_BUFFER, l);
                        var c = new Float32Array([t[424], t[479], t[7], t[420], t[444], t[7], t[7], t[459], t[7]]);
                        e.bufferData(e.ARRAY_BUFFER, c, e.STATIC_DRAW);
                        l.k = t[10];
                        l.l = t[10];
                        var d = e.createProgram(),
                            u = e.createShader(e.VERTEX_SHADER);
                        e.shaderSource(u, s);
                        e.compileShader(u);
                        var h = e.createShader(e.FRAGMENT_SHADER);
                        return e.shaderSource(h, r), e.compileShader(h), e.attachShader(d, u), e.attachShader(d, h), e.linkProgram(d), e.useProgram(d), d.n = e.getAttribLocation(d, o("5Id2d2d1D55Dd1d25Ddv")), d.m = e.getUniformLocation(d, i("dD5C53555sd1582s5555dR5Dd2")), e.enableVertexAttribArray(d.o), e.vertexAttribPointer(d.n, l.k, e.FLOAT, !t[532], t[7], t[7]), e.uniform2f(d.m, t[532], t[532]), e.drawArrays(e.TRIANGLE_STRIP, t[7], l.l), y(a[i("d25s225Id25IDDD12w")]()) } catch (f) {
                        return n("dd5D515d5w1W5Ddv5R5DdWd2535s5C") } }

                function u() {
                    var e = Q.createElement(s("5253d5")),
                        r = [],
                        l = [o("2I5Rd253d55D215sd1525Dd1"), a("2I5Rd253d55D2R5IdWd2535s5C"), s("2IdWdWDd5sd15zdRdW5I5R5D"), n("215I5R5z5dd15sdD5C52"), i("21dDd2d25s5C255I5R5D"), s("21dDd2d25s5C2v535d5v5w535d5vd2"), n("21dDd2d25s5CDR5v5I525sdd"), o("21dDd2d25s5CD25Ddvd2"), o("2R5IdWd2535s5CD25Ddvd2"), s("2dd15Id3D25Ddvd2"), a("2v535d5v5w535d5vd2"), o("2v535d5v5w535d5vd2D25Ddvd2"), n("235C5I5Rd253d55D215sd1525Dd1"), s("235C5I5Rd253d55D2R5IdWd2535s5C"), i("235C5I5Rd253d55D2R5IdWd2535s5CD25Ddvd2"), s("235C555s215I5R5z5dd15sdD5C52"), s("235C555sD25Ddvd2"), n("285D5CdD"), i("285D5CdDD25Ddvd2"), n("DR5Rd15s5w5w515Id1"), s("D25vd15D5D22225Id15zDR5v5I525sdd"), i("D25vd15D5D22255I5R5D"), s("D25vd15D5D222v535d5v5w535d5vd2"), n("D25vd15D5D222w535d5vd2DR5v5I525sdd"), n("D25vd15D5D22DR5v5I525sdd"), a("Dd535C525sdd"), i("Dd535C525sdd25d15I585D"), a("Dd535C525sddD25Ddvd2")];
                    if (!window[n("5d5Dd22R5s58dWdDd25D52DRd2d35w5D")]) return r.join(i(""));
                    for (var c = t[7]; c < l.length; c++) try { Q.body.appendChild(e), e.style.color = l[c], r.push(l[c]), r.push(window[s("5d5Dd22R5s58dWdDd25D52DRd2d35w5D")](e).getPropertyValue(a("5R5s5w5sd1"))), Q.body.removeChild(e) } catch (d) { r.push(i("5d5Dd21WdRd3dRd25D581W5R5s5w5sd1dR1W5Ddv5R5DdWd2535s5C")) }
                    return r.join(s("RX"))
                }

                function h() {
                    try {
                        var e = Q.createElement(s("5R5I5Cd55IdR")),
                            r = e[n("5d5Dd22R5s5Cd25Ddvd2")](n("R152")),
                            l = s("58dd2R1W5C5z515I555X5sd1521WdW5vdR5d5wd31W5Ddvd5d21WdXdI53dD1w1WCIz8XW1Wd2dW5vdRd21sRX1sdD5v515dd2535R1C585s1s5w5Dd5d55I");
                        r.textBaseline = i("d25sdW");
                        r.font = o("RdRWdWdv1W1d2Id1535I5w1d");
                        r.textBaseline = o("5I5wdW5v5I515Dd2535R");
                        r.fillStyle = o("1R55R5RW");
                        r.fillRect(t[273], t[532], t[144], t[58]);
                        r.fillStyle = i("1RRWR5R3");
                        r.fillText(l, t[6], t[48]);
                        r.fillStyle = n("d15d515I1vRIRWR11w1WR1RWR21w1WRW1w1WRW1CRd13");
                        r.fillText(l, t[14], t[52]);
                        return e[n("d25s225Id25IDDD12w")]() } catch (c) {
                        return a("5R5I5Cd55IdR1W5IdW531W5Ddv5R5DdWd2535s5C") } }

                function f() {
                    try {
                        return window[n("2I5Rd253d55DDv2s515X5D5Rd2")] && C.h ? p() : _() } catch (t) {
                        return n("5d5Dd21WdW5wdD5d535C1WdRd2d1535C5d1W5Ddv5R5DdWd2535s5C") } }

                function _() {
                    if (!U[i("dW5wdD5d535CdR")]) return a("");
                    var e = [a("R25d5I585D"), o("2I52515w5s5R5zDW5wdD5d535C"), i("2I525s515D2Ddv285I5C2R2R225Dd25D5Rd2"), i("2I525s515D2Ddv285I5C225Dd25D5Rd2"), o("2I5w5Idd5Id11W2CDW2IDW231WdDd2535wdR"), o("2I5w535D5253d21WDW5wdD5d18235C"), a("2I5w53dW5Id31WDR5D5RdDd153d2d31W2R5s5Cd2d15s5w1WRR"), o("2I5w53DRDR2s2w5s5d535C1WdW5wdD5d535C"), i("2I585IdX5s5C28DWRR225sdd5C5w5s5I525Dd1DW5wdD5d535C"), o("2I2s2w1W285D52535I1WDW5w5Id3515I5R5z1WDW5wdD5d535C"), a("2IdWdWDDdW"), a("2Id15R5v532R2I22"), o("2ID52d1WDR53d25DDR5I555Dd2d31WdW5wdD5d535C"), a("215I51d35w5s5C1WD25s5s5w215Id1"), i("215Id2d25w5D5w5s5d1W2d5I585D1W2w5IdD5C5R5v5Dd1"), s("2153d22R5s585Dd22I5d5D5Cd2"), s("2153d2525D555D5C525Dd11WDIdD535R5zDR5R5I5C"), n("215wdD5DDRd25I5R5zdR1W235CdRd25I5w5w1W225Dd25D5Rd25sd1"), n("2R5Id25I5w535C5I2dd15sdDdW1WDDdW525Id25D"), o("2R53d2d153dv1W232R2I1W2R5w535D5Cd2"), a("2R53d2d153dv1W5s5C5w535C5D1WdW5wdD5d18535C"), o("2R53d2d153dv1WD15D5R5D53d55Dd11WDW5wdD5d18535C"), i("2R5s5sdd5s5C1WDDdW525Id25D"), i("225D5I5wDW5wd32w53d55D1WDDdW525Id25D"), a("225D555IdD5wd21W21d15sdddR5Dd11W2v5D5wdW5Dd1"), a("2253d5Dv1W21d15sdddR5Dd11WDW5wdD5d18235C"), n("2253d5Dv1WDW5wdDdR1WDd5D511WDW5w5Id35Dd1"), s("2253d5Dv1WD52s221W2v5D5wdW5Dd11WDW5wdD5d18535C"), a("525sdD515w5DD2dd53dRd21WDd5D511WDW5wdD5d535C"), n("225sdd5C5w5s5I525Dd1dR1WdW5wdD5d535C"), i("525sdd5C5w5s5I52DDdW525Id25Dd1"), n("5D28dDdR535RDW5wdD5d535C1W222w28R5"), o("2DDR2C1W2w5IdD5C5R5v1W285sdX535w5w5I1WDW5wdD5d535C"), s("2DDR2C1WDR5s5C5Id11W2IDW23"), o("2Ddv53551W2Dd55Dd1d3dd5v5Dd15D"), o("255I5R5D515s5s5z1WDW5wdD5d535C"), i("25535w5D1W225sdd5C5w5s5I525Dd11WDW5wdD5d18535C"), s("25535w5D2w5I511WdW5wdD5d535C"), n("255wd32sd122535D1W2d5I585DdR1WDW5wdD5d535C"), i("255s5wdv1WRR1W21d15sdddR5Dd11WDW5wdD5d535C"), n("25DDDX2DDR5v5Id15D"), i("2d222w1W2s515X5D5Rd21WDd5D511WDW5wdD5d18535C1WRIR51CRWRW"), a("2d252I2R2D1WDW5wdD5d535C"), i("2d535C5d5Dd1"), n("2d5C5s585D1WDR5v5D5w5w1W235Cd25D5dd15Id2535s5C"), i("2d5s5s5d5w5D1W2D5Id1d25v1WDW5wdD5d535C"), a("2d5s5s5d5w5D1W2D5Id1d25v1WDW5wdD5d18535C"), n("2d5s5s5d5w5D1W2d5D5Id1dR1WRW1CRD1CRRRR1CRW"), i("2d5s5s5d5w5D1WD25I5w5z1W2D55555D5Rd2dR1WDW5wdD5d535C"), i("2d5s5s5d5w5D1WDDdW525Id25D"), a("2v5Id1585s5Cd31W2553d15D555sdv1WDW5wdD5d535C"), n("2v5Id1585s5Cd31WDW5wdD5d18235C"), i("2v5Dd15s5DdR1W151W2d5D5C5Dd15I5wdR1W5w53d55D"), n("2vDW225Dd25D5Rd2"), i("2vd2585wRD1W5w5s5R5Id2535s5C1WdWd15sd553525Dd1"), a("232D1WD25I511WdW5wdD5d535C"), a("532d5Dd2d25Dd1DR5Rd153dWd25I515w5DDW5wdD5d535C"), o("53285DdR5v1WdW5wdD5d535C"), a("2z5IdRdW5Dd1dR5zd31WDW5IdRdRdd5sd1521W285I5C5I5d5Dd1"), s("2w5IdRd2DW5IdRdR"), o("2w5s5d285D235C1WDW5wdD5d535C1WRI1CRW1CRW1CR3RRRD"), s("2w5s5d285D235C1WDW5wdD5d535C1WRI1CRW1CRW1CR3R5RI"), a("285I182R5s5C55535d1C5R5s581WdW5wdD5d535C"), n("28535Rd15sdR5s55d21W2s5555535R5D1WR1RWRIRR"), n("28535C53515Id1DW5wdD5d535C"), a("2C5Id253d55D1W2R5w535D5Cd2"), s("2C53d2d15s1WDW22251WDW5wdD5d18235C"), a("2C5s5z535I1WDRdD53d25D1W2D5C5I515w5Dd11WDW5wdD5d535C"), a("2C5sd1d25s5C1W23525D5Cd253d2d31WDR5I555D"), s("5CdW2IDW231WDW5wdD5d535C"), n("2CDW2w5IdRd2DW5IdRdR"), s("2CDWDW5w5Id35Dd1DR5v5D5w5w"), s("5CdWD25s5C5d51dD2I5252535C"), a("2Cd3dv2w5IdD5C5R5v5Dd1"), s("2s5Rd25sdR5v5IdW5D1WDRd2d15D5I58535C5d1WDR5Dd1d5535R5DdR"), i("2s5C5w535C5D1WDRd25sd15I5d5D1WdW5wdD5d18535C"), a("2sd15153d21W225sdd5C5w5s5I525Dd1"), a("DW5I5C525s1WDd5D511WDW5wdD5d535C"), i("DW5Id15s581CD2D51WdW5w5Id35Dd11WdW5wdD5d535C"), i("DW22251W535Cd25D5dd15I525s1W525s1WDd5D512z53d2"), n("DW222518Dv2R5v5I5C5d5D1WD5535Ddd5Dd1"), n("DW5v5sd25s2R5D5Cd25Dd1DW5wdD5d535CRI1CRI1CR11CR1"), o("DW535R5IdR5I"), o("DW5w5Id32s5C1WDW5wdD5d18535C"), o("DIDIR1RWRIRR1W2553d15D555sdv1WDW5wdD5d535C"), o("DIDI225sdd5C5w5s5I521WDW5wdD5d535C"), s("DIDI28535C53222w1WDW5wdD5d535C"), n("DIDI28dDdR535R"), n("D15D5I5w225sdd5C5w5s5I525Dd11WDW5wdD5d535C"), i("D15s515w5sdv1W2w5IdD5C5R5v5Dd11WDW5wdD5d535C"), n("D15s5R5z285D5wd21WDDdW525Id25D"), a("DR5I555Dd11WDDdW525Id25D"), s("DR5I555DDR5D5Id15R5v"), s("DR5Rd153dWd2535C5d1C22535Rd2535s5C5Id1d3"), o("DR5D552R5w535D5Cd21WDW5wdD5d535C"), o("DR5v5D5w5w1CDD232v5D5wdW5Dd1"), n("DR535wd55Dd15w535d5vd21WDW5wdD5d18235C"), o("DR5358dW5w5D1WDW5IdRdR"), i("DR5zd3dW5D1WDd5D511WDW5wdD5d535C"), s("DRdD585Id2d15IDW22251W21d15sdddR5Dd11WDW5wdD5d535C"), o("DRd3585I5Cd25D5R1WDW2z231W2R5w535D5Cd2"), s("D25D5C5R5D5Cd21W25D22C1WdW5wdD5d18535C"), o("D25vdD5C525Dd11W225IdW2Rd2d15w1W2CDW2IDW231WDW5wdD5d535C"), s("D25sd15R5v2v5D5wdW5Dd1"), a("DD5C53d2d31WDW5w5Id35Dd1"), a("DDdW5w5Id31WDW2R"), i("D5225sdd5C5w5s5I525Dd1"), o("D55D5Dd25w5D1WD2D51W2R5sd15D"), i("D52w2R1W28dD5wd253585D52535I1WDW5wdD5d535C"), o("Dd5D511W2R5s58dW5s5C5D5Cd2dR"), i("Dd5D512z53d218535Cd25D5dd1535Dd1d25D1WDW2225"), s("Dd2D21DX2D2C1W21d15sdddR5Dd11W2Ddvd25D5CdR535s5C"), n("Dd5s5w55d15I581W285Id25v5D585Id2535R5I"), s("Dd5sd1522R5IdWd2dDd15DDv"), n("DdDW231W225Dd25D5Rd25sd11WRI1CR2"), a("D35I5C525Ddv1W285D52535I1WDW5wdD5d535C"), n("D35I5C525Ddv1WDW22251WD5535Ddd5Dd1"), n("D35sdDD2dD515D1WDW5wdD5d18535C"), i("dX5I5z5s")],
                        r = [],
                        l = {};
                    r.push(v(U[n("dW5wdD5d535CdR")], function(e) { l[e.name] = t[532];
                        var a = v(e, function(t) {
                            return [t.type, t.suffixes].join(s("dC")) }).join(n("1w"));
                        return [e.name, e.description, a].join(i("RXRX")) }, this).join(i("12")));
                    r.push(v(e, function(t) {
                        if (l[t]) return o("");
                        t = U[a("dW5wdD5d535CdR")][t];
                        if (!t) return o("");
                        var e = v(t, function(t) {
                            return [t.type, t.suffixes].join(i("dC")) }).join(o("1w"));
                        return [t.name, t.description, e].join(i("RXRX")) }, this).join(n("Rz")));
                    return r.join(n("Rz")) }

                function p() {
                    if (window[a("2I5Rd253d55DDv2s515X5D5Rd2")]) {
                        var t = [n("2I5Rd15sDW22251CDW2225"), s("2I525s52511CDRd2d15D5I58"), o("2I5d2R5s5Cd2d15s5w1C2I5d2R5s5Cd2d15s5w"), s("225Dd55I5wD5D1Dv2Rd2d15w1C225Dd55I5wD5D1Dv2Rd2d15w1CRI"), o("285I5Rd15s585D52535I255w5IdR5vDW5IdW5Dd11C285I5Rd15s585D52535I255w5IdR5vDW5IdW5Dd1"), o("28dRdv585wR11C222s28225s5RdD585D5Cd2"), o("28dRdv585wR11CDv282w2vD2D2DW"), i("DW22251CDW52552Rd2d15w"), a("DIdD535R5zD253585D1CDIdD535R5zD253585D"), i("DIdD535R5zD253585D2R5v5D5R5z2s515X5D5Rd21CDIdD535R5zD253585D2R5v5D5R5z1CRI"), a("d1585s5Rdv1CD15D5I5wDW5w5Id35Dd11W2dR11W2R5s5Cd2d15s5w"), i("d1585s5Rdv1CD15D5I5wDW5w5Id35Dd11W2dR11W2R5s5Cd2d15s5w1CRI"), s("D15D5I5wDW5w5Id35Dd1"), o("D15D5I5wDW5w5Id35Dd11CD15D5I5wDW5w5Id35Dd11vd258131W2I5Rd253d55DDv1W2R5s5Cd2d15s5w1W1vRRR1185153d213"), s("D15D5I5wD553525D5s1CD15D5I5wD553525D5s1vd258131W2I5Rd253d55DDv1W2R5s5Cd2d15s5w1W1vRRR1185153d213"), n("d1585s5Rdv1CD15D5I5wDW5w5Id35Dd11W2dR11W2R5s5Cd2d15s5w"), s("DR5Rd153dWd2535C5d1C22535Rd2535s5C5Id1d3"), n("DR5v5D5w5w1CDD232v5D5wdW5Dd1"), s("DR5v5s5R5zdd5Id55D255w5IdR5v1CDR5v5s5R5zdd5Id55D255w5IdR5v"), i("DRDd2Rd25w1CDRDd2Rd25w"), n("DR5zd3dW5D1C225Dd25D5Rd2535s5C"), a("D2222R2Rd25w1CD2222R2Rd25w"), i("Dd28DW5w5Id35Dd11C2s2RDv")];
                        return v(t, function(t) {
                            try {
                                return new(window[a("2I5Rd253d55DDv2s515X5D5Rd2")])(t), t } catch (e) {
                                return null } }).join(s("Rz")) }
                    return o("") }

                function m() {
                    try {
                        return !!window[a("dR5DdRdR535s5CDRd25sd15I5d5D")] } catch (t) {
                        return !0 } }

                function g() {
                    try {
                        return !!window[n("5w5s5R5I5wDRd25sd15I5d5D")] } catch (t) {
                        return !0 } }

                function v(t, e, n) {
                    var i = [];
                    if (null == t) return i;
                    if (w && t.map === w) return t.map(e, n);
                    $(t, function(t, a, s) { i[i.length] = e.call(n, t, a, s) });
                    return i }

                function $(e, n) {
                    if (null !== e)
                        if (b && e.forEach === b) e.forEach(n, void 0);
                        else if (e.length === +e.length)
                        for (var i = t[7], a = e.length; i < a && n.call(void 0, e[i], i, e) !== {}; i++);
                    else
                        for (i in e)
                            if (e.hasOwnProperty(i) && n.call(void 0, e[i], i, e) === {}) break }
                var b = Array.prototype.forEach,
                    w = Array.prototype.map,
                    C = { e: y, j: !0, i: !0, h: !0, b: !0, a: !0 };
                typeof e == s("55dD5C5Rd2535s5C") ? C.e = e : (null != e.b && void 0 != e.b && (C.b = e.b), null != e.a && void 0 != e.a && (C.a = e.a));
                this.get = function() {
                    var e = [],
                        l = [];
                    if (F) { e.push(m());
                        e.push(g());
                        e.push(!!window[s("535C525Ddv5D522221")]);
                        Q.body ? e.push(typeof Q.body[o("5I5252215D5v5Id5535sd1")]) : e.push("undefined");
                        e.push(typeof window[i("5sdW5D5C225Id25I515IdR5D")]);
                        e.push(U[n("5RdWdD2R5w5IdRdR")]);
                        e.push(U[o("dW5w5Id2555sd158")]);
                        var d;
                        if (d = C.i) try {
                            var _ = Q.createElement(i("5R5I5Cd55IdR"));
                            d = !(!_[n("5d5Dd22R5s5Cd25Ddvd2")] || !_[s("5d5Dd22R5s5Cd25Ddvd2")](o("R152"))) } catch (p) { d = !1 }
                        if (d) try { e.push(h()), C.b && e.push(c()) } catch (v) { e.push(o("5R5I5Cd55IdR1W5Ddv5R5DdWd2535s5C")) }
                        e.push(u());
                        C.a && l.push(r());
                        l.push(U[o("dDdR5Dd12I5d5D5Cd2")]);
                        l.push(U[n("5w5I5C5ddD5I5d5D")]);
                        l.push(window[n("dR5Rd15D5D5C")][i("5R5s5w5sd1225DdWd25v")]);
                        C.j && (d = window[a("dR5Rd15D5D5C")] ? [window[i("dR5Rd15D5D5C")].height, window[n("dR5Rd15D5D5C")].width] : [t[7], t[7]], typeof d !== n("dD5C525D55535C5D52") && l.push(d.join(n("dv"))));
                        l.push((new Date)[o("5d5Dd2D253585DdX5s5C5D2s5555dR5Dd2")]());
                        l.push(U[i("525s2C5sd2D2d15I5R5z")]);
                        l.push(f()) }
                    d = [];
                    C.e ? (d.push(C.e(e.join(o("1R1R1R")))), d.push(C.e(l.join(o("1R1R1R"))))) : (d.push(y(e.join(o("1R1R1R")))), d.push(y(l.join(o("1R1R1R")))));
                    return d }
            }

            function y(e) {
                var n = t[80],
                    r, l, c, d, u, h;
                r = e.length & t[10];
                l = e.length - r;
                c = n;
                n = t[12];
                d = t[368];
                for (h = t[7]; h < l;) u = e.charCodeAt(h) & t[291] | (e.charCodeAt(++h) & t[291]) << t[29] | (e.charCodeAt(++h) & t[291]) << t[50] | (e.charCodeAt(++h) & t[291]) << t[66],
                    ++h, u = (u & t[477]) * n + (((u >>> t[50]) * n & t[477]) << t[50]) & t[397], u = u << t[48] | u >>> t[52], u = (u & t[477]) * d + (((u >>> t[50]) * d & t[477]) << t[50]) & t[397], c ^= u, c = c << t[42] | c >>> t[56], c = (c & t[477]) * t[17] + (((c >>> t[50]) * t[17] & t[477]) << t[50]) & t[397], c = (c & t[477]) + t[387] + (((c >>> t[50]) + t[427] & t[477]) << t[50]);
                u = t[7];
                switch (r) {
                    case t[10]:
                        u ^= (e.charCodeAt(h + t[6]) & t[291]) << t[50];
                    case t[6]:
                        u ^= (e.charCodeAt(h + t[532]) & t[291]) << t[29];
                    case t[532]:
                        u ^= e.charCodeAt(h) & t[291], u = (u & t[477]) * n + (((u >>> t[50]) * n & t[477]) << t[50]) & t[397], u = u << t[48] | u >>> t[52], u = (u & t[477]) * d + (((u >>> t[50]) * d & t[477]) << t[50]) & t[397], c ^= u }
                c ^= e.length;
                c ^= c >>> t[50];
                c = (c & t[477]) * t[399] + (((c >>> t[50]) * t[399] & t[477]) << t[50]) & t[397];
                c ^= c >>> t[42];
                c = (c & t[477]) * t[342] + (((c >>> t[50]) * t[342] & t[477]) << t[50]) & t[397];
                c ^= c >>> t[50];
                e = c >>> t[7];
                r = [];
                r.push(e);
                try {
                    for (var f, _ = e + s(""), p = t[7], m = t[7], g = t[7]; g < _.length; g++) try {
                        var v = parseInt(_.charAt(g) + o("")),
                            p = v || v === t[7] ? p + v : p + t[532];
                        m++ } catch ($) { p += t[532], m++ }
                    m = m == t[7] ? t[532] : m;
                    f = b(p * t[532] / m, q);
                    for (var y, x = Math.floor(f / Math.pow(t[34], q - t[532])), T = e + i(""), L = t[7], S = t[7], I = t[7], k = t[7], D = t[7]; D < T.length; D++) try {
                        var N = parseInt(T.charAt(D) + s(""));
                        N || N === t[7] ? N < x ? (S++, L += N) : (k++, I += N) : (k++, I += x) } catch (E) { k++, I += x }
                    k = k == t[7] ? t[532] : k;
                    S = S == t[7] ? t[532] : S;
                    y = b(I * t[532] / k - L * t[532] / S, K);
                    r.push(w(f, q, i("RW")));
                    r.push(w(y, K, i("RW"))) } catch (P) { r = [], r.push(e), r.push(C(q, s("18")).join(a(""))), r.push(C(K, s("18")).join(i(""))) }
                return r.join(i(""))
            }

            function b(e, o) {
                if (e < t[7] || e >= t[34]) throw Error(i("RIRIRIRW"));
                for (var r = C(o, n("RW")), l = s("") + e, c = t[7], d = t[7]; c < r.length && d < l.length; d++) l.charAt(d) != n("1C") && (r[c++] = l.charAt(d));
                return parseInt(r.join(a(""))) }

            function w(t, e, i) { t = n("") + t;
                if (t.length > e) throw Error(s("RIRIRIRI"));
                if (t.length == e) return t;
                for (var o = [], r = t.length; r < e; r++) o.push(i);
                o.push(t);
                return o.join(a("")) }

            function C(e, n) {
                if (e <= t[7]) return [t[7]];
                for (var i = [], a = t[7]; a < e; a++) i.push(n);
                return i }

            function x(t) {
                return null == t || void 0 == t }

            function T(t, e, n) { this.f = t;
                this.c = e;
                this.g = x(n) ? !0 : n }

            function L(t) {
                if (x(t) || x(t.f) || x(t.c)) return !1;
                try {
                    if (x(window[t.f])) return !1 } catch (e) {
                    return !1 }
                return !0 }

            function S(e, n) {
                if (x(e)) return s("");
                for (var i = t[7]; i < e.length; i++) {
                    var a = e[i];
                    if (!x(a) && a.f == n) return a } }

            function I() {
                var e;
                t: {
                    if (!x(J))
                        for (e = t[7]; e < J.length; e++) {
                            var r = J[e];
                            if (r.g && !L(r)) { e = r;
                                break t } }
                    e = null }
                var l;
                if (x(e)) {
                    try { l = window.parseFloat(s("RI1CRWRI")) === t[377] && window.isNaN(window.parseFloat(a("2v2D2w2w2s"))) } catch (c) { l = !1 }
                    if (l) {
                        var d;
                        try { d = window.parseInt(a("RIR1RR")) === t[265] && window.isNaN(window.parseInt(i("2v2D2w2w2s"))) } catch (u) { d = !1 }
                        if (d) {
                            var h;
                            try { h = window.decodeURI(s("1DR1R1")) === a("11") } catch (f) { h = !1 }
                            if (h) {
                                var _;
                                try { _ = window.decodeURIComponent(i("1DR1R5")) === o("15") } catch (p) { _ = !1 }
                                if (_) {
                                    var m;
                                    try { m = window.encodeURI(o("11")) === o("1DR1R1") } catch (g) { m = !1 }
                                    if (m) {
                                        var v;
                                        try { v = window.encodeURIComponent(a("15")) === a("1DR1R5") } catch ($) { v = !1 }
                                        if (v) {
                                            var y;
                                            try { y = window.escape(a("15")) === s("1DR1R5") } catch (b) { y = !1 }
                                            if (y) {
                                                var w;
                                                try { w = window.unescape(a("1DR1R5")) === a("15") } catch (C) { w = !1 }
                                                if (w) {
                                                    var T;
                                                    try { T = window.eval(o("1v55dD5C5Rd2535s5C1v13dzd15Dd2dDd15C1WRIR1RRRzd8131v13Rz")) === t[265] } catch (I) { T = !1 }
                                                    l = T ? null : S(J, s("5Dd55I5w")) } else l = S(J, i("dD5C5DdR5R5IdW5D")) } else l = S(J, n("5DdR5R5IdW5D")) } else l = S(J, n("5D5C5R5s525DDDD1232R5s58dW5s5C5D5Cd2")) } else l = S(J, n("5D5C5R5s525DDDD123")) } else l = S(J, o("525D5R5s525DDDD1232R5s58dW5s5C5D5Cd2")) } else l = S(J, n("525D5R5s525DDDD123")) } else l = S(J, a("dW5Id1dR5D235Cd2")) } else l = S(J, a("dW5Id1dR5D255w5s5Id2")) } else l = e;
                return l }

            function k() {
                var t = I();
                if (!x(t)) return t.c;
                try { t = x(window[i("dW5v5I5Cd25s58")]) || x(window[i("dW5v5I5Cd25s58")][a("535C5X5D5Rd22XdR")]) ? null : S(J, i("dW5v5I5Cd25s581C535C5X5D5Rd22XdR")) } catch (e) { t = null }
                if (!x(t)) return t.c;
                try { t = x(context) || x(context[o("5v5IdR5v2R5s525D")]) ? null : S(J, i("5R5s5Cd25Ddvd21C5v5IdR5v2R5s525D")) } catch (n) { t = null }
                return x(t) ? null : t.c }

            function D(e) {
                for (var n = [], a = t[7]; a < e; a++) {
                    var s = Math.random() * ut,
                        s = Math.floor(s);
                    n.push(dt.charAt(s)) }
                return n.join(i("")) }

            function N(e) {
                for (var i = (Q[a("5R5s5s5z535D")] || o("")).split(n("Rz1W")), s = t[7]; s < i.length; s++) {
                    var r = i[s].indexOf(a("R8"));
                    if (r >= t[7]) {
                        var l = i[s].substring(r + t[532], i[s].length);
                        if (i[s].substring(t[7], r) == e) return window.decodeURIComponent(l) } }
                return null }

            function E(e) {
                var r = [i("d5"), n("55dW"), s("dD"), i("5v"), a("5D5R"), i("5D58"), i("535RdW")],
                    l = i("");
                if (null == e || void 0 == e) return e;
                if (typeof e == [o("5s51"), n("5X5D"), i("5Rd2")].join(a(""))) {
                    for (var l = l + o("dz"), c = t[7]; c < r.length; c++)
                        if (e.hasOwnProperty(r[c])) {
                            var d = s("1d") + r[c] + n("1dRX1d"),
                                u;
                            u = n("") + e[r[c]];
                            u = null == u || void 0 == u ? u : u.replace(/'/g, s("Dw1d")).replace(/"/g, o("11"));
                            l += d + u + i("1d1w") }
                    l.charAt(l.length - t[532]) == i("1w") && (l = l.substring(t[7], l.length - t[532]));
                    return l += o("d8") }
                return null }

            function P(t, e, r, l) {
                var c = [];
                c.push(t + i("R8") + encodeURIComponent(e));
                r && (t = new Date, t = new Date(l), l = t[o("d25s2d28D2DRd2d1535C5d")](), c.push(a("Rz1W")), c.push(a("5Ddv")), c.push(a("dW53")), c.push(n("d15D")), c.push(n("dRR8")), c.push(l));
                c.push(s("Rz1W"));
                c.push(s("dW5I"));
                c.push(s("d25vR81s"));
                null != gt && void 0 != gt && gt != a("") && (c.push(n("Rz1W")), c.push(a("525s")), c.push(a("585I53")), c.push(s("5CR8")), c.push(gt));
                Q[o("5R5s5s5z535D")] = c.join(s("")) }

            function R(t) { window[vt] = t }

            function B(t) { window[$t] = t }

            function M(e, n) {
                for (var i = [], a = t[7]; a < n; a++) i.push(e);
                return i.join(o("")) }

            function Y(t, e) {
                var n = N(t);
                null !== n && void 0 !== n && n !== i("") || P(t, e, !1) }

            function A() {
                var t = N(lt);
                if (null == t || void 0 == t || t == n("")) t = window[$t];
                return t }

            function j() {
                var t = A();
                if (null == t || void 0 == t || t == i("")) return !1;
                try {
                    return (t = parseInt(t)) && t >= ct ? !0 : !1 } catch (e) {
                    return !1 } }

            function Z(e) {
                if (null == e || void 0 == e || e == n("")) return null;
                e = e.split(o("RX"));
                return e.length < t[6] || !/[0-9]+/gi.test(e[t[532]]) ? null : parseInt(e[t[532]]) }

            function W() {
                var t = N(rt);
                if (null == t || void 0 == t || t == i("")) t = window[vt];
                return t }

            function X() {
                var e = W();
                if (null == e || void 0 == e || e == o("")) return t[7];
                e = Z(e);
                return null == e ? t[7] : e - (ht - ft) - (new(window[s("225Id25D")]))[o("5d5Dd2D253585D")]() }

            function H(e, r) {
                var l = new(window[a("225Id25D")]);
                l[o("dR5Dd2D253585D")](l[s("5d5Dd2D253585D")]() - t[318]);
                null == r || void 0 == r || r == i("") ? window[o("525s5RdD585D5Cd2")][n("5R5s5s5z535D")] = e + o("R85CdD5w5wRz1WdW5Id25vR81sRz1W5DdvdW53d15DdRR8") + l[o("d25s2d28D2DRd2d1535C5d")]() : window[o("525s5RdD585D5Cd2")][i("5R5s5s5z535D")] = e + o("R85CdD5w5wRz1WdW5Id25vR81sRz1W525s585I535CR8") + r + i("Rz1W5DdvdW53d15DdRR8") + l[a("d25s2d28D2DRd2d1535C5d")]() }

            function G() {
                if (!(null == yt || void 0 == yt || yt.length <= t[7]))
                    for (var e = t[7]; e < yt.length; e++) {
                        var n = yt[e];
                        (null != gt && void 0 != gt && gt != a("") || null != n && void 0 != n && n != a("")) && gt != n && (H(rt, n), H(lt, n)) } }

            function O() { G();
                window[$t] = null;
                window[vt] = null;
                var _ = !0,
                    p = { v: i("d5RI1CRI") },
                    y = k();
                y && (p[s("535RdW")] = y);
                y = null;
                p[n("5v")] = z;
                var b = (new(window[i("225Id25D")]))[a("5d5Dd2D253585D")]() + ht,
                    w = b + t[300] * t[140] * t[140] * t[66] * t[295] * t[17];
                p[o("dD")] = D(t[10]) + b + D(t[10]);
                try {
                    var C = new $({ b: pt, a: _t }).get();
                    null != C && void 0 != C && C.length > t[7] ? p[n("55dW")] = C.join(a("1w")) : (p[o("55dW")] = M(o("RW"), t[34]), p[n("5D5R")] = o("RI"), _ = !1) } catch (x) { p[s("55dW")] = M(s("RW"), t[34]), p[a("5D5R")] = n("RI"), _ = !1 }
                try {
                    var T = y = E(p),
                        p = ot;
                    if (null == p || void 0 == p) throw Error(o("RIRWRWRv"));
                    if (null == T || void 0 == T) T = i("");
                    var C = T,
                        L;
                    L = null == T ? l([]) : l(f(T));
                    var S = f(C + L),
                        I = f(p);
                    null == S && (S = []);
                    L = [];
                    for (var N = t[7]; N < st; N++) {
                        var A = Math.random() * t[293],
                            A = Math.floor(A);
                        L[N] = v(A) }
                    var I = r(I),
                        I = m(I, r(L)),
                        N = I = r(I),
                        j;
                    if (null == S || void 0 == S || S.length == t[7]) j = d(nt);
                    else {
                        var Z = S.length,
                            W = t[7],
                            W = Z % nt <= nt - at ? nt - Z % nt - at : nt * t[6] - Z % nt - at,
                            A = [];
                        u(S, t[7], A, t[7], Z);
                        for (var X = t[7]; X < W; X++) A[Z + X] = t[7];
                        u(h(Z), t[7], A, Z + W, at);
                        j = A }
                    Z = j;
                    if (null == Z || Z.length % nt != t[7]) throw Error(a("RIRWRWRD"));
                    j = [];
                    for (var H = t[7], J = Z.length / nt, F = t[7]; F < J; F++) { j[F] = [];
                        for (var Q = t[7]; Q < nt; Q++) j[F][Q] = Z[H++] }
                    H = [];
                    u(L, t[7], H, t[7], st);
                    for (var U = j.length, q = t[7]; q < U; q++) {
                        var K;
                        var V = j[q];
                        if (null == V) K = null;
                        else {
                            for (var tt = v(t[84]), J = [], et = V.length, it = t[7]; it < et; it++) J.push(g(V[it], tt++));
                            K = J }
                        var dt = m(K, I),
                            ut;
                        J = dt;
                        F = N;
                        if (null == J) ut = null;
                        else if (null == F) ut = J;
                        else {
                            for (var Q = [], mt = F.length, gt = t[7], yt = J.length; gt < yt; gt++) Q[gt] = v(J[gt] + F[gt % mt]);
                            ut = Q }
                        var dt = m(ut, N),
                            bt = e(dt),
                            bt = e(bt);
                        u(bt, t[7], H, q * nt + st, nt);
                        N = bt }
                    var wt;
                    if (null == H || void 0 == H) wt = null;
                    else if (H.length == t[7]) wt = n("");
                    else {
                        var Ct = t[10];
                        try {
                            for (var U = [], xt = t[7]; xt < H.length;)
                                if (xt + Ct <= H.length) U.push(c(H, xt, Ct)), xt += Ct;
                                else { U.push(c(H, xt, H.length - xt));
                                    break }
                            wt = U.join(i("")) } catch (Tt) {
                            throw Error(i("RIRWRIRW")) } }
                    y = wt } catch (Lt) { y = E({ ec: a("R1"), em: Lt.message }), _ = !1 }
                y = y + i("RX") + b;
                P(rt, y, _, w);
                Y(rt, y);
                R(y);
                P(lt, ct, _, w);
                Y(lt, ct);
                B(ct);
                window[i("dR5Dd2D253585D5sdDd2")] && window[i("dR5Dd2D253585D5sdDd2")](O, ft) }
            T.prototype = { toString: function() {
                    return s("dz1d5C5I585D1dRX") + this.f + i("1w1W1d5R5s525D1dRX") + this.c + a("1w1W1d51d15sdddR5Dd1DWd15sdW1dRX") + this.g + i("d8") } };
            var J = [new T(o("dd535C525sdd"), a("RWRWRWRW")), new T(a("525s5RdD585D5Cd2"), i("RWRWRWRI")), new T(s("5C5Id5535d5Id25sd1"), a("RWRWRWR1")), new T(o("5w5s5R5Id2535s5C"), n("RWRWRWRR")), new T(i("5v53dRd25sd1d3"), i("RWRWRWR2")), new T(i("dR5Rd15D5D5C"), s("RWRWRWRd")), new T(o("dW5Id15D5Cd2"), a("RWRWRWRv")), new T(s("d25sdW"), a("RWRWRWR3")), new T(s("dR5D5w55"), i("RWRWRIRW")), new T(n("dW5Id1dR5D255w5s5Id2"), i("RWRIRWRW")), new T(s("dW5Id1dR5D235Cd2"), o("RWRIRWRI")), new T(i("525D5R5s525DDDD123"), a("RWRIRWR1")), new T(s("525D5R5s525DDDD1232R5s58dW5s5C5D5Cd2"), a("RWRIRWRR")), new T(i("5D5C5R5s525DDDD123"), n("RWRIRWR2")), new T(n("5D5C5R5s525DDDD1232R5s58dW5s5C5D5Cd2"), o("RWRIRWRD")), new T(i("5DdR5R5IdW5D"), i("RWRIRWR5")), new T(a("dD5C5DdR5R5IdW5D"), n("RWRIRWRd")), new T(s("5Dd55I5w"), i("RWRIRWRv")), new T(i("DsdW5v5I5Cd25s58"), n("RWR1RWRW"), (!1)), new T(a("5R5I5w5wDW5v5I5Cd25s58"), s("RWR1RWRI"), (!1)), new T(a("dW5v5I5Cd25s58"), i("RWR1RWR1"), (!1)), new T(s("dW5v5I5Cd25s581C535C5X5D5Rd22XdR"), i("RWR1RWRR"), (!1)), new T(o("5R5s5Cd25Ddvd21C5v5IdR5v2R5s525D"), s("RWR1RIRI"), (!1))],
                F = I() ? !1 : !0,
                z = window && window[o("5w5s5R5Id2535s5C")] && window[a("5w5s5R5Id2535s5C")].host || o("5C5sd2Ds5Ddv53dRd2Ds5v5sdRd2"),
                Q = window[a("525s5RdD585D5Cd2")],
                U = window[i("5C5Id5535d5Id25sd1")],
                q = t[6],
                K = t[6],
                V = [s("RW"), i("RI"), s("R1"), i("RR"), o("R2"), i("RD"), a("R5"), i("Rd"), a("Rv"), i("R3"), s("5I"), i("51"), i("5R"), o("52"), i("5D"), n("55")],
                tt = [t[7], t[370], t[376], t[513], t[440], t[308], t[486], t[336], t[453], t[533], t[302], t[452], t[487], t[455], t[407], t[31], t[446], t[356], t[524], t[394], t[430], t[285], t[359], t[502], t[482], t[484], t[467], t[325], t[530], t[404], t[289], t[419], t[465], t[20], t[362], t[494], t[317], t[346], t[537], t[383], t[412], t[432], t[166], t[434], t[298], t[492], t[460], t[328], t[499], t[323], t[473], t[348], t[351], t[392], t[372], t[519], t[516], t[450], t[415], t[25], t[400], t[511], t[311], t[437], t[462], t[429], t[39], t[409], t[539], t[497], t[454], t[304], t[312], t[248], t[338], t[489], t[373], t[388], t[514], t[378], t[408], t[528], t[421], t[290], t[488], t[478], t[327], t[469], t[292], t[425], t[504], t[360], t[361], t[442], t[396], t[525], t[495], t[287], t[329], t[461], t[435], t[405], t[436], t[183], t[347], t[309], t[384], t[538], t[24], t[457], t[496], t[363], t[512], t[390], t[438], t[313], t[451], t[508], t[28], t[416], t[395], t[343], t[520], t[374], t[326], t[490], t[349], t[474], t[472], t[324], t[443], t[481], t[288], t[423], t[334], t[411], t[527], t[393], t[507], t[355], t[358], t[506], t[470], t[296], t[306], t[449], t[131], t[531], t[406], t[45], t[301], t[464], t[380], t[510], t[381], t[367], t[485], t[341], t[333], t[316], t[418], t[19], t[518], t[447], t[310], t[441], t[382], t[517], t[476], t[345], t[501], t[321], t[371], t[523], t[335], t[401], t[275], t[433], t[413], t[428], t[458], t[332], t[122], t[500], t[365], t[493], t[466], t[13], t[536], t[389], t[299], t[353], t[505], t[357], t[294], t[340], t[391], t[526], t[354], t[320], t[422], t[286], t[410], t[375], t[322], t[471], t[480], t[23], t[339], t[483], t[314], t[352], t[509], t[379], t[366], t[402], t[43], t[403], t[463], t[315], t[448], t[305], t[529], t[297], t[522], t[369], t[398], t[337], t[344], t[475], t[319], t[503], t[439], t[307], t[515], t[385], t[15], t[417], t[445], t[521], t[386], t[535], t[350], t[303], t[491], t[364], t[8], t[468], t[331], t[456], t[498], t[149], t[431], t[224], t[426], t[414]],
                et = [t[165], t[257], t[276], t[223], t[249], t[60], t[199], t[207], t[174], t[215], t[277], t[141], t[148], t[32], t[140], t[94], t[110], t[146], t[111], t[58], t[250], t[232], t[123], t[157], t[167], t[200], t[150], t[266], t[17], t[168], t[151], t[191], t[192], t[90], t[193], t[240], t[70], t[225], t[115], t[118], t[86], t[226], t[48], t[208], t[62], t[169], t[267], t[40], t[76], t[152], t[216], t[68], t[184], t[95], t[9], t[106], t[241], t[6], t[74], t[82], t[242], t[124], t[132], t[116], t[278], t[251], t[194], t[112], t[102], t[103], t[80], t[217], t[104], t[72], t[37], t[195], t[274], t[133], t[46], t[209], t[22], t[175], t[233], t[268], t[107], t[81], t[196], t[153], t[210], t[145], t[44], t[211], t[534], t[201], t[51], t[127], t[71], t[158], t[87], t[234], t[10], t[269], t[91], t[34], t[41], t[119], t[182], t[258], t[47], t[52], t[218], t[88], t[170], t[35], t[154], t[98], t[26], t[89], t[83], t[117], t[252], t[259], t[61], t[202], t[203], t[77], t[185], t[66], t[125], t[265], t[30], t[33], t[16], t[282], t[42], t[260], t[7], t[219], t[186], t[144], t[155], t[96], t[14], t[261], t[253], t[227], t[105], t[159], t[254], t[97], t[128], t[136], t[187], t[137], t[54], t[160], t[235], t[57], t[176], t[75], t[236], t[84], t[279], t[138], t[55], t[280], t[99], t[73], t[139], t[129], t[171], t[59], t[237], t[100], t[220], t[281], t[212], t[243], t[177], t[161], t[244], t[134], t[178], t[114], t[162], t[108], t[532], t[163], t[238], t[147], t[228], t[179], t[78], t[18], t[27], t[229], t[188], t[262], t[63], t[156], t[197], t[245], t[69], t[270], t[204], t[255], t[273], t[189], t[142], t[11], t[109], t[101], t[164], t[271], t[130], t[53], t[113], t[180], t[85], t[190], t[230], t[120], t[121], t[246], t[181], t[247], t[21], t[79], t[38], t[231], t[67], t[263], t[92], t[205], t[213], t[221], t[214], t[239], t[135], t[222], t[264], t[256], t[172], t[143], t[64], t[173], t[272], t[29], t[65], t[198], t[206], t[50], t[56], t[49], t[93], t[126]],
                nt = t[152],
                it = t[152],
                at = t[14],
                st = t[14],
                ot = s("RIR2RdR1RW5R55R2R1RI225D2121RW22RD5525Rv5D2I2I2D52225IRRRR2IRR22RvRDRvR12I22RWR15I51RWRRRW"),
                rt = a("2XDR2DDRDR232s2C232218Dd2z2w18Rv232s"),
                lt = i("Ds5z5w5vd2dv52Ds"),
                ct = t[80],
                dt = a("5IDX51D3RW5RDv52DdRI5DD555R1DD5dRRD25vR2DR53D1RD5XDI5zR5DW5w2sRd582C5CRv285s2wR3dW2zdI2Xd123dR2vd22ddD25d52Ddd22dv2Rd321dX2I"),
                ut = dt.length,
                ht = t[330],
                ft = t[36],
                _t = !1,
                pt = !1,
                mt = window && window[s("5w5s5R5Id2535s5C")] && window[o("5w5s5R5Id2535s5C")][o("5v5sdRd25C5I585D")] || o("5C5sd2Ds5Ddv53dRd2Ds5v5sdRd25C5I585D"),
                gt = o("1C5z5I5s5w5I1C5R5s58Rz1C5z5I5s5w5I1C5R5s581C5v5z"),
                gt = function(e, a) {
                    if (null == e || void 0 == e || e == n("") || null == a || void 0 == a || a.length <= t[7]) return null;
                    a = a.split(i("Rz"));
                    for (var r = t[7]; r < a.length; r++) {
                        var l = new RegExp(a[r].replace(/\./g, o("Dw1C")) + s("12"));
                        if (null != e.match(l)) return a[r] }
                    return null
                }(mt, gt),
                vt = rt.replace(/[^a-zA-Z0-9$]/g, i("")).toLowerCase(),
                $t = lt.replace(/[^a-zA-Z0-9$]/g, a("")).toLowerCase(),
                yt = function(e) {
                    var n = [];
                    if (!e) return n;
                    e = e.split(o("1C"));
                    for (var i = a(""), r = t[7]; r < e.length; r++) r < e.length - t[532] && (i = s("1C") + e[e.length - t[532] - r] + i, n.push(i));
                    return n }(mt);
            yt.push(null);
            yt.push(o("1C") + mt);
            (function(e) {
                for (var i = t[7], r = (Q[o("5R5s5s5z535D")] || n("")).split(s("Rz1W")), l = t[7]; l < r.length; l++) {
                    var c = r[l].indexOf(a("R8"));
                    c >= t[7] && r[l].substring(t[7], c) == e && (i += t[532]) }
                return i })(rt) > t[532] && G();
            ! function() {
                var t = W();
                if (null == t || void 0 == t || t == s("")) t = !1;
                else {
                    var e;
                    if (e = j()) t = Z(t), e = !(null == t || t - (new(window[a("225Id25D")]))[o("5d5Dd2D253585D")]() <= ht - ft);
                    t = e }
                return t }() ? O(): (R(W()), B(A()), mt = X(), window[o("dR5Dd2D253585D5sdDd2")] && window[n("dR5Dd2D253585D5sdDd2")](O, mt))
        }()
    }()
}();
I$(5, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) { d._$$Module = NEJ.C();
    pro = d._$$Module._$extend(t._$$EventTarget);
    pro.__init = function(t) { this.__supInit(t);
        this.__initTopBar();
        l._$allocate();
        o._$allocate();
        r._$allocate();
        this.__initDspCookie() };
    pro.__initTopBar = function() { this.__topbar = a._$allocate({ login: this.__login._$bind(this) });
        this.__rightBar = this.__topbar.__rightBar;
        window._$refreshTopbar = this.__topbar._$refreshTopbar._$bind(this.__topbar) };
    pro._$refreshTopbar = function() { this.__topbar._$refreshTopbar() };
    pro.__initDspCookie = function() {
        var t = location.search.replace(/^\?/g, "");
        if (/__da_.+/g.test(t)) {
            var i = t.split("&");
            e._$forEach(i, function(t) {
                if (/^__da_/g.test(t)) n._$cookie("gtm_dsp_tag", { value: t, path: "/", domain: "kaola.com", expires: 7 }) }) } };
    pro.__login = h;
    return d._$$Module }, 23, 2, 11, 151, 219, 220, 221, 222, 223, 224);
var QRCode;
! function() {
    function t(t) { this.mode = c.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
        for (var e = [], n = 0, i = this.data.length; i > n; n++) {
            var a = this.data.charCodeAt(n);
            a > 65536 ? (e[0] = 240 | (1835008 & a) >>> 18, e[1] = 128 | (258048 & a) >>> 12, e[2] = 128 | (4032 & a) >>> 6, e[3] = 128 | 63 & a) : a > 2048 ? (e[0] = 224 | (61440 & a) >>> 12, e[1] = 128 | (4032 & a) >>> 6, e[2] = 128 | 63 & a) : a > 128 ? (e[0] = 192 | (1984 & a) >>> 6, e[1] = 128 | 63 & a) : e[0] = a, this.parsedData = this.parsedData.concat(e) }
        this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239)) }

    function e(t, e) { this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [] }

    function n(t, e) {
        if (void 0 == t.length) throw new Error(t.length + "/" + e);
        for (var n = 0; n < t.length && 0 == t[n];) n++;
        this.num = new Array(t.length - n + e);
        for (var i = 0; i < t.length - n; i++) this.num[i] = t[i + n] }

    function i(t, e) { this.totalCount = t, this.dataCount = e }

    function a() { this.buffer = [], this.length = 0 }

    function s() {
        return "undefined" != typeof CanvasRenderingContext2D }

    function o() {
        var t = !1,
            e = navigator.userAgent;
        return /android/i.test(e) && (t = !0, aMat = e.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (t = parseFloat(aMat[1]))), t }

    function r(t, e) {
        for (var n = 1, i = l(t), a = 0, s = p.length; s >= a; a++) {
            var o = 0;
            switch (e) {
                case d.L:
                    o = p[a][0];
                    break;
                case d.M:
                    o = p[a][1];
                    break;
                case d.Q:
                    o = p[a][2];
                    break;
                case d.H:
                    o = p[a][3] }
            if (o >= i) break;
            n++ }
        if (n > p.length) throw new Error("Too long data");
        return n }

    function l(t) {
        var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return e.length + (e.length != t ? 3 : 0) }
    t.prototype = { getLength: function() {
            return this.parsedData.length }, write: function(t) {
            for (var e = 0, n = this.parsedData.length; n > e; e++) t.put(this.parsedData[e], 8) } }, e.prototype = { addData: function(e) {
            var n = new t(e);
            this.dataList.push(n), this.dataCache = null }, isDark: function(t, e) {
            if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw new Error(t + "," + e);
            return this.modules[t][e] }, getModuleCount: function() {
            return this.moduleCount }, make: function() { this.makeImpl(!1, this.getBestMaskPattern()) }, makeImpl: function(t, n) { this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var i = 0; i < this.moduleCount; i++) { this.modules[i] = new Array(this.moduleCount);
                for (var a = 0; a < this.moduleCount; a++) this.modules[i][a] = null }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, n), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, n) }, setupPositionProbePattern: function(t, e) {
            for (var n = -1; 7 >= n; n++)
                if (!(-1 >= t + n || this.moduleCount <= t + n))
                    for (var i = -1; 7 >= i; i++) - 1 >= e + i || this.moduleCount <= e + i || (this.modules[t + n][e + i] = n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 2 && 4 >= n && i >= 2 && 4 >= i ? !0 : !1) }, getBestMaskPattern: function() {
            for (var t = 0, e = 0, n = 0; 8 > n; n++) { this.makeImpl(!0, n);
                var i = h.getLostPoint(this);
                (0 == n || t > i) && (t = i, e = n) }
            return e }, createMovieClip: function(t, e, n) {
            var i = t.createEmptyMovieClip(e, n),
                a = 1;
            this.make();
            for (var s = 0; s < this.modules.length; s++)
                for (var o = s * a, r = 0; r < this.modules[s].length; r++) {
                    var l = r * a,
                        c = this.modules[s][r];
                    c && (i.beginFill(0, 100), i.moveTo(l, o), i.lineTo(l + a, o), i.lineTo(l + a, o + a), i.lineTo(l, o + a), i.endFill()) }
            return i }, setupTimingPattern: function() {
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2);
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = 0 == e % 2) }, setupPositionAdjustPattern: function() {
            for (var t = h.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                for (var n = 0; n < t.length; n++) {
                    var i = t[e],
                        a = t[n];
                    if (null == this.modules[i][a])
                        for (var s = -2; 2 >= s; s++)
                            for (var o = -2; 2 >= o; o++) this.modules[i + s][a + o] = -2 == s || 2 == s || -2 == o || 2 == o || 0 == s && 0 == o ? !0 : !1 } }, setupTypeNumber: function(t) {
            for (var e = h.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
                var i = !t && 1 == (1 & e >> n);
                this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = i }
            for (var n = 0; 18 > n; n++) {
                var i = !t && 1 == (1 & e >> n);
                this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = i } }, setupTypeInfo: function(t, e) {
            for (var n = this.errorCorrectLevel << 3 | e, i = h.getBCHTypeInfo(n), a = 0; 15 > a; a++) {
                var s = !t && 1 == (1 & i >> a);
                6 > a ? this.modules[a][8] = s : 8 > a ? this.modules[a + 1][8] = s : this.modules[this.moduleCount - 15 + a][8] = s }
            for (var a = 0; 15 > a; a++) {
                var s = !t && 1 == (1 & i >> a);
                8 > a ? this.modules[8][this.moduleCount - a - 1] = s : 9 > a ? this.modules[8][15 - a - 1 + 1] = s : this.modules[8][15 - a - 1] = s }
            this.modules[this.moduleCount - 8][8] = !t }, mapData: function(t, e) {
            for (var n = -1, i = this.moduleCount - 1, a = 7, s = 0, o = this.moduleCount - 1; o > 0; o -= 2)
                for (6 == o && o--;;) {
                    for (var r = 0; 2 > r; r++)
                        if (null == this.modules[i][o - r]) {
                            var l = !1;
                            s < t.length && (l = 1 == (1 & t[s] >>> a));
                            var c = h.getMask(e, i, o - r);
                            c && (l = !l), this.modules[i][o - r] = l, a--, -1 == a && (s++, a = 7) }
                    if (i += n, 0 > i || this.moduleCount <= i) { i -= n, n = -n;
                        break } } } }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function(t, n, s) {
        for (var o = i.getRSBlocks(t, n), r = new a, l = 0; l < s.length; l++) {
            var c = s[l];
            r.put(c.mode, 4), r.put(c.getLength(), h.getLengthInBits(c.mode, t)), c.write(r) }
        for (var d = 0, l = 0; l < o.length; l++) d += o[l].dataCount;
        if (r.getLengthInBits() > 8 * d) throw new Error("code length overflow. (" + r.getLengthInBits() + ">" + 8 * d + ")");
        for (r.getLengthInBits() + 4 <= 8 * d && r.put(0, 4); 0 != r.getLengthInBits() % 8;) r.putBit(!1);
        for (; !(r.getLengthInBits() >= 8 * d) && (r.put(e.PAD0, 8), !(r.getLengthInBits() >= 8 * d));) r.put(e.PAD1, 8);
        return e.createBytes(r, o) }, e.createBytes = function(t, e) {
        for (var i = 0, a = 0, s = 0, o = new Array(e.length), r = new Array(e.length), l = 0; l < e.length; l++) {
            var c = e[l].dataCount,
                d = e[l].totalCount - c;
            a = Math.max(a, c), s = Math.max(s, d), o[l] = new Array(c);
            for (var u = 0; u < o[l].length; u++) o[l][u] = 255 & t.buffer[u + i];
            i += c;
            var f = h.getErrorCorrectPolynomial(d),
                _ = new n(o[l], f.getLength() - 1),
                p = _.mod(f);
            r[l] = new Array(f.getLength() - 1);
            for (var u = 0; u < r[l].length; u++) {
                var m = u + p.getLength() - r[l].length;
                r[l][u] = m >= 0 ? p.get(m) : 0 } }
        for (var g = 0, u = 0; u < e.length; u++) g += e[u].totalCount;
        for (var v = new Array(g), $ = 0, u = 0; a > u; u++)
            for (var l = 0; l < e.length; l++) u < o[l].length && (v[$++] = o[l][u]);
        for (var u = 0; s > u; u++)
            for (var l = 0; l < e.length; l++) u < r[l].length && (v[$++] = r[l][u]);
        return v };
    for (var c = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, d = { L: 1, M: 0, Q: 3, H: 2 }, u = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, h = {
            PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(t) {
                for (var e = t << 10; h.getBCHDigit(e) - h.getBCHDigit(h.G15) >= 0;) e ^= h.G15 << h.getBCHDigit(e) - h.getBCHDigit(h.G15);
                return (t << 10 | e) ^ h.G15_MASK },
            getBCHTypeNumber: function(t) {
                for (var e = t << 12; h.getBCHDigit(e) - h.getBCHDigit(h.G18) >= 0;) e ^= h.G18 << h.getBCHDigit(e) - h.getBCHDigit(h.G18);
                return t << 12 | e },
            getBCHDigit: function(t) {
                for (var e = 0; 0 != t;) e++, t >>>= 1;
                return e },
            getPatternPosition: function(t) {
                return h.PATTERN_POSITION_TABLE[t - 1] },
            getMask: function(t, e, n) {
                switch (t) {
                    case u.PATTERN000:
                        return 0 == (e + n) % 2;
                    case u.PATTERN001:
                        return 0 == e % 2;
                    case u.PATTERN010:
                        return 0 == n % 3;
                    case u.PATTERN011:
                        return 0 == (e + n) % 3;
                    case u.PATTERN100:
                        return 0 == (Math.floor(e / 2) + Math.floor(n / 3)) % 2;
                    case u.PATTERN101:
                        return 0 == e * n % 2 + e * n % 3;
                    case u.PATTERN110:
                        return 0 == (e * n % 2 + e * n % 3) % 2;
                    case u.PATTERN111:
                        return 0 == (e * n % 3 + (e + n) % 2) % 2;
                    default:
                        throw new Error("bad maskPattern:" + t) } },
            getErrorCorrectPolynomial: function(t) {
                for (var e = new n([1], 0), i = 0; t > i; i++) e = e.multiply(new n([1, f.gexp(i)], 0));
                return e },
            getLengthInBits: function(t, e) {
                if (e >= 1 && 10 > e) switch (t) {
                    case c.MODE_NUMBER:
                        return 10;
                    case c.MODE_ALPHA_NUM:
                        return 9;
                    case c.MODE_8BIT_BYTE:
                        return 8;
                    case c.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + t)
                } else if (27 > e) switch (t) {
                    case c.MODE_NUMBER:
                        return 12;
                    case c.MODE_ALPHA_NUM:
                        return 11;
                    case c.MODE_8BIT_BYTE:
                        return 16;
                    case c.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + t) } else {
                    if (!(41 > e)) throw new Error("type:" + e);
                    switch (t) {
                        case c.MODE_NUMBER:
                            return 14;
                        case c.MODE_ALPHA_NUM:
                            return 13;
                        case c.MODE_8BIT_BYTE:
                            return 16;
                        case c.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + t) } }
            },
            getLostPoint: function(t) {
                for (var e = t.getModuleCount(), n = 0, i = 0; e > i; i++)
                    for (var a = 0; e > a; a++) {
                        for (var s = 0, o = t.isDark(i, a), r = -1; 1 >= r; r++)
                            if (!(0 > i + r || i + r >= e))
                                for (var l = -1; 1 >= l; l++) 0 > a + l || a + l >= e || (0 != r || 0 != l) && o == t.isDark(i + r, a + l) && s++;
                        s > 5 && (n += 3 + s - 5) }
                for (var i = 0; e - 1 > i; i++)
                    for (var a = 0; e - 1 > a; a++) {
                        var c = 0;
                        t.isDark(i, a) && c++, t.isDark(i + 1, a) && c++, t.isDark(i, a + 1) && c++, t.isDark(i + 1, a + 1) && c++, (0 == c || 4 == c) && (n += 3) }
                for (var i = 0; e > i; i++)
                    for (var a = 0; e - 6 > a; a++) t.isDark(i, a) && !t.isDark(i, a + 1) && t.isDark(i, a + 2) && t.isDark(i, a + 3) && t.isDark(i, a + 4) && !t.isDark(i, a + 5) && t.isDark(i, a + 6) && (n += 40);
                for (var a = 0; e > a; a++)
                    for (var i = 0; e - 6 > i; i++) t.isDark(i, a) && !t.isDark(i + 1, a) && t.isDark(i + 2, a) && t.isDark(i + 3, a) && t.isDark(i + 4, a) && !t.isDark(i + 5, a) && t.isDark(i + 6, a) && (n += 40);
                for (var d = 0, a = 0; e > a; a++)
                    for (var i = 0; e > i; i++) t.isDark(i, a) && d++;
                var u = Math.abs(100 * d / e / e - 50) / 5;
                return n += 10 * u }
        }, f = { glog: function(t) {
                if (1 > t) throw new Error("glog(" + t + ")");
                return f.LOG_TABLE[t] }, gexp: function(t) {
                for (; 0 > t;) t += 255;
                for (; t >= 256;) t -= 255;
                return f.EXP_TABLE[t] }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) }, _ = 0; 8 > _; _++) f.EXP_TABLE[_] = 1 << _;
    for (var _ = 8; 256 > _; _++) f.EXP_TABLE[_] = f.EXP_TABLE[_ - 4] ^ f.EXP_TABLE[_ - 5] ^ f.EXP_TABLE[_ - 6] ^ f.EXP_TABLE[_ - 8];
    for (var _ = 0; 255 > _; _++) f.LOG_TABLE[f.EXP_TABLE[_]] = _;
    n.prototype = { get: function(t) {
            return this.num[t] }, getLength: function() {
            return this.num.length }, multiply: function(t) {
            for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++)
                for (var a = 0; a < t.getLength(); a++) e[i + a] ^= f.gexp(f.glog(this.get(i)) + f.glog(t.get(a)));
            return new n(e, 0) }, mod: function(t) {
            if (this.getLength() - t.getLength() < 0) return this;
            for (var e = f.glog(this.get(0)) - f.glog(t.get(0)), i = new Array(this.getLength()), a = 0; a < this.getLength(); a++) i[a] = this.get(a);
            for (var a = 0; a < t.getLength(); a++) i[a] ^= f.gexp(f.glog(t.get(a)) + e);
            return new n(i, 0).mod(t) } }, i.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], i.getRSBlocks = function(t, e) {
        var n = i.getRsBlockTable(t, e);
        if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
        for (var a = n.length / 3, s = [], o = 0; a > o; o++)
            for (var r = n[3 * o + 0], l = n[3 * o + 1], c = n[3 * o + 2], d = 0; r > d; d++) s.push(new i(l, c));
        return s }, i.getRsBlockTable = function(t, e) {
        switch (e) {
            case d.L:
                return i.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case d.M:
                return i.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case d.Q:
                return i.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case d.H:
                return i.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
                return } }, a.prototype = { get: function(t) {
            var e = Math.floor(t / 8);
            return 1 == (1 & this.buffer[e] >>> 7 - t % 8) }, put: function(t, e) {
            for (var n = 0; e > n; n++) this.putBit(1 == (1 & t >>> e - n - 1)) }, getLengthInBits: function() {
            return this.length }, putBit: function(t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++ } };
    var p = [
            [17, 14, 11, 7],
            [32, 26, 20, 14],
            [53, 42, 32, 24],
            [78, 62, 46, 34],
            [106, 84, 60, 44],
            [134, 106, 74, 58],
            [154, 122, 86, 64],
            [192, 152, 108, 84],
            [230, 180, 130, 98],
            [271, 213, 151, 119],
            [321, 251, 177, 137],
            [367, 287, 203, 155],
            [425, 331, 241, 177],
            [458, 362, 258, 194],
            [520, 412, 292, 220],
            [586, 450, 322, 250],
            [644, 504, 364, 280],
            [718, 560, 394, 310],
            [792, 624, 442, 338],
            [858, 666, 482, 382],
            [929, 711, 509, 403],
            [1003, 779, 565, 439],
            [1091, 857, 611, 461],
            [1171, 911, 661, 511],
            [1273, 997, 715, 535],
            [1367, 1059, 751, 593],
            [1465, 1125, 805, 625],
            [1528, 1190, 868, 658],
            [1628, 1264, 908, 698],
            [1732, 1370, 982, 742],
            [1840, 1452, 1030, 790],
            [1952, 1538, 1112, 842],
            [2068, 1628, 1168, 898],
            [2188, 1722, 1228, 958],
            [2303, 1809, 1283, 983],
            [2431, 1911, 1351, 1051],
            [2563, 1989, 1423, 1093],
            [2699, 2099, 1499, 1139],
            [2809, 2213, 1579, 1219],
            [2953, 2331, 1663, 1273]
        ],
        m = function() {
            var t = function(t, e) { this._el = t, this._htOption = e };
            return t.prototype.draw = function(t) {
                function e(t, e) {
                    var n = document.createElementNS("http://www.w3.org/2000/svg", t);
                    for (var i in e) e.hasOwnProperty(i) && n.setAttribute(i, e[i]);
                    return n }
                var n = this._htOption,
                    i = this._el,
                    a = t.getModuleCount();
                Math.floor(n.width / a), Math.floor(n.height / a), this.clear();
                var s = e("svg", { viewBox: "0 0 " + String(a) + " " + String(a), width: "100%", height: "100%", fill: n.colorLight });
                s.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), i.appendChild(s), s.appendChild(e("rect", { fill: n.colorDark, width: "1", height: "1", id: "template" }));
                for (var o = 0; a > o; o++)
                    for (var r = 0; a > r; r++)
                        if (t.isDark(o, r)) {
                            var l = e("use", { x: String(o), y: String(r) });
                            l.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), s.appendChild(l) } }, t.prototype.clear = function() {
                for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild) }, t }(),
        g = "svg" === document.documentElement.tagName.toLowerCase(),
        v = g ? m : s() ? function() {
            function t() { this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none" }

            function e(t, e) {
                var n = this;
                if (n._fFail = e, n._fSuccess = t, null === n._bSupportDataURI) {
                    var i = document.createElement("img"),
                        a = function() { n._bSupportDataURI = !1, n._fFail && _fFail.call(n) },
                        s = function() { n._bSupportDataURI = !0, n._fSuccess && n._fSuccess.call(n) };
                    return i.onabort = a, i.onerror = a, i.onload = s, i.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", void 0 }
                n._bSupportDataURI === !0 && n._fSuccess ? n._fSuccess.call(n) : n._bSupportDataURI === !1 && n._fFail && n._fFail.call(n) }
            if (this._android && this._android <= 2.1) {
                var n = 1 / window.devicePixelRatio,
                    i = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function(t, e, a, s, o, r, l, c) {
                    if ("nodeName" in t && /img/i.test(t.nodeName))
                        for (var d = arguments.length - 1; d >= 1; d--) arguments[d] = arguments[d] * n;
                    else "undefined" == typeof c && (arguments[1] *= n, arguments[2] *= n, arguments[3] *= n, arguments[4] *= n);
                    i.apply(this, arguments) } }
            var a = function(t, e) { this._bIsPainted = !1, this._android = o(), this._htOption = e, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = e.width, this._elCanvas.height = e.height, t.appendChild(this._elCanvas), this._el = t, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null };
            return a.prototype.draw = function(t) {
                var e = this._elImage,
                    n = this._oContext,
                    i = this._htOption,
                    a = t.getModuleCount(),
                    s = i.width / a,
                    o = i.height / a,
                    r = Math.round(s),
                    l = Math.round(o);
                e.style.display = "none", this.clear();
                for (var c = 0; a > c; c++)
                    for (var d = 0; a > d; d++) {
                        var u = t.isDark(c, d),
                            h = d * s,
                            f = c * o;
                        n.strokeStyle = u ? i.colorDark : i.colorLight, n.lineWidth = 1, n.fillStyle = u ? i.colorDark : i.colorLight, n.fillRect(h, f, s, o), n.strokeRect(Math.floor(h) + .5, Math.floor(f) + .5, r, l), n.strokeRect(Math.ceil(h) - .5, Math.ceil(f) - .5, r, l) }
                this._bIsPainted = !0 }, a.prototype.makeImage = function() { this._bIsPainted && e.call(this, t) }, a.prototype.isPainted = function() {
                return this._bIsPainted }, a.prototype.clear = function() {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
                    this._bIsPainted = !1
            }, a.prototype.round = function(t) {
                return t ? Math.floor(1e3 * t) / 1e3 : t }, a
        }() : function() {
            var t = function(t, e) { this._el = t, this._htOption = e };
            return t.prototype.draw = function(t) {
                for (var e = this._htOption, n = this._el, i = t.getModuleCount(), a = Math.floor(e.width / i), s = Math.floor(e.height / i), o = ['<table style="border:0;border-collapse:collapse;">'], r = 0; i > r; r++) { o.push("<tr>");
                    for (var l = 0; i > l; l++) o.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + a + "px;height:" + s + "px;background-color:" + (t.isDark(r, l) ? e.colorDark : e.colorLight) + ';"></td>');
                    o.push("</tr>") }
                o.push("</table>"), n.innerHTML = o.join("");
                var c = n.childNodes[0],
                    d = (e.width - c.offsetWidth) / 2,
                    u = (e.height - c.offsetHeight) / 2;
                d > 0 && u > 0 && (c.style.margin = u + "px " + d + "px") }, t.prototype.clear = function() { this._el.innerHTML = "" }, t }();
    QRCode = function(t, e) {
        if (this._htOption = { width: 256, height: 256, typeNumber: 4, colorDark: "#000000", colorLight: "#ffffff", correctLevel: d.H }, "string" == typeof e && (e = { text: e }), e)
            for (var n in e) this._htOption[n] = e[n]; "string" == typeof t && (t = document.getElementById(t)), this._android = o(), this._el = t, this._oQRCode = null, this._oDrawing = new v(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text) }, QRCode.prototype.makeCode = function(t) { this._oQRCode = new e(r(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = t, this._oDrawing.draw(this._oQRCode), this.makeImage() }, QRCode.prototype.makeImage = function() { "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage() }, QRCode.prototype.clear = function() { this._oDrawing.clear() }, QRCode.CorrectLevel = d
}();
I$(236, ".#<uispace> .cntbox{width:400px;padding:20px;}\n.#<uispace> .cntbox p{padding:20px 40px 0;font-size:18px;color:#333;text-align:center;}\n\n.#<uispace> .btnbox{padding:20px;text-align:center;}\n.#<uispace> .btnbox .u-btn{display:inline-block;min-width:100px;height:20px; padding:10px; text-align:center;line-height:100%;color:#fff;font-size:18px;background:#D22147;}\n\n.#<uispace> .btnbox .u-btn:hover{text-decoration:none; }\n");
I$(237, '<textarea name="txt" id="#<seedTxt>">\n\t<div>\n\t\t<div class="j-flag">\n\t\t</div>\n\t</div>\n</textarea>\n<textarea name="jst" id="#<seedMessage>">\n\t<div class="cntbox">\n\t\t<p>${message}</p>\n\t</div>\n\t<div class="btnbox">\n\t\t<a href="javascript:void(0);" class="u-btn j-tag">${btntext}</a>\n\t</div>\n</textarea>');
I$(449, '<div class="m-notify m-notify-{position}">\n  {#list messages as msg}\n  <div class="notify notify-{msg.type||\'info\'}" r-animation=\'on: enter; class: animated fadeInX; on: leave; class: animated bounceOut fast; \'>\n    <div class="glyphicon glyphicon-{this.iconMap[msg.type]}"></div>\n    <span class="notify_close" on-click={this.clear(msg)}>×</span>\n    <h4 class="notify_title" r-hide={!msg.title}>{msg.title}</h4>\n    <p class="notify_message">{msg.message}</p>\n  </div>\n  {/list}\n</div>');
I$(238, function(t, e, n) {
    var i = Regular.extend({ template: t, duration: 3e3, iconMap: { error: "remove-circle", success: "ok-sign", warning: "warning-sign", info: "info-sign", loading: "info-sign" }, config: function(t) { n.extend(t, { messages: [], position: "right" }) }, init: function() {
            if (this.$root == this) this.$inject(document.body) }, notify: function(t) {
            if ("string" == typeof t) t = { message: t };
            n.extend(t, { type: "info", duration: this.duration });
            this.$update(function(e) { e.messages.unshift(t) });
            var e = this.clear.bind(this, t);
            this.$timeout(e, t.duration == -1 ? 36e8 : t.duration);
            return e }, show: function(t) { this.clearTotal();
            return this.notify(t) }, showError: function(t, e) { e = n.extend(e || {}, { type: "error" });
            return this.show(t, e) }, clear: function(t) {
            var e = this.data.messages,
                n = e.length;
            for (; n--;)
                if (t === e[n]) e.splice(n, 1);
            this.$update() }, clearTotal: function() { this.$update("messages", []) } }).use("timeout");
    var a = new i({});
    a.Notify = i;
    return a }, 449, 247, 15);
I$(8, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var f = e._$pushCSSText(i),
        _ = s._$parseUITemplate(a),
        p = _["seedTxt"],
        m = _["seedMessage"],
        g = s._$addNodeTemplate(s._$getTextTemplate(p));
    l._$$PromptWindow = NEJ.C();
    h = l._$$PromptWindow._$extend(t);
    h.__reset = function(t) { t.title = t.title || "提示";
        t.btnType = t.btnType || "close";
        var i = t.btntext || "确定";
        this.__super(t);
        r._$render(this.__box, m, { message: t.message, btntext: i });
        var a = e._$getByClassName(this.__box, "j-tag");
        this.__okBtn = a[0];
        n._$addEvent(this.__okBtn, "click", this.__onOK._$bind(this, t.btnType)) };
    h.__destroy = function(t) { this.__super(t) };
    h.__initXGui = function() { this.__seed_css = f;
        this.__seed_html = g };
    h.__initNode = function() { this.__super();
        var t = e._$getByClassName(this.__body, "j-flag");
        this.__box = t[0] };
    h.__onOK = function(t, e) { n._$stop(e);
        this._$dispatchEvent("onok");
        if ("close" == t) this._$hide();
        else if ("custom" == t); };
    return l._$$PromptWindow }, 229, 4, 3, 236, 237, 233, 238, 239);
I$(325, '<table class="m-modaltbl">\n\t<tbody>\n\t\t<tr>\n\t\t  <td class="cell">\n\t\t  <div class="modal iDialogContent {modalName||\'\'} iDialogAniCore iDialogAnimate5" ref="modal" style="width: {width||640}px;">\n\t\t\t  <div class="modal-row">\n\t\t\t      <div class="modal-dialog modal-cell">\n\t\t\t        <div class="modal-content">\n\t\t\t          <div class="iDialogHead">\n\t\t\t            <h4 class="modal-title" id="myModalLabel">{title || \'Modal title\'}</h4>\n\t\t\t\t\t\t{#if !hideCloseBtn}<a class="iDialogClose" href="javascript:void(0);"  on-click={this.close()}></a>{/if}\n\t\t\t          </div>\n\t\t\t          <div class="modal-body">\n\t\t\t            {#include content ||this.content }\n\t\t\t          </div>\n\t\t\t        </div>\n\t\t\t      </div>\n\t\t\t   </div>\n\t\t\t</div>\n\t\t  </td>\n\t\t</tr>\n\t</tbody>\n</table>\n<div class="m-modalmask">\n</div>');
I$(128, function(t, e, n, i, a, s, o, r, l) {
    var c = i.extend({ template: a, init: function() { this.supr();
            var t = this.destroy._$bind(this);
            n._$addEvent(document, "keydown", function i(e) {
                var e = e || window.event;
                if (27 == e.keyCode) { t();
                    n._$delEvent(document, "keydown", i) } });
            if (this.$root == this) this.$inject(document.body);
            setTimeout(function() { e._$delClassName(this.$refs["modal"], "iDialogAnimate5") }._$bind(this), 10) }, confirm: function() { this.$emit("confirm", this.data);
            this.destroy() }, close: function() { this.$emit("close", this.data);
            this.destroy() }, timeout: function(t) { this.destroyTimeout = setTimeout(function() { this.$emit("close", this.data);
                this.destroy() }._$bind(this), t) }, destroy: function() { e._$addClassName(this.$refs["modal"], "iDialogAnimate5");
            if (this.destroyTimeout) { clearTimeout(this.destroyTimeout);
                this.destroyTimeout = null }
            var t = this.supr;
            setTimeout(function() { t.apply(this) }._$bind(this), 300) } });
    return c }, 15, 4, 3, 151, 325);
I$(269, function(t, e, n, i, a, s, o, r, l) { a._$$LazyLoading = t._$klass();
    l = a._$$LazyLoading._$extend(i._$$EventTarget);
    l.__reset = function(t) { this.__super(t);
        this.__name = t.attr || "";
        this.__parent = e._$get(t.parent);
        this.__doInitDomEvent([
            [this.__parent || window, "scroll", this.__doCheckScrollPosition._$bind(this)]
        ]);
        this._$refresh() };
    l.__destroy = function() { delete this.__parent;
        this.__super() };
    l.__getScrollViewPort = function() {
        return this.__parent || e._$getPageBox() };
    l.__getSettingInfo = function(t) {
        var i = {};
        n._$forEach(this.__name.split(","), function(n) { i[n] = e._$dataset(t, n) });
        return i };
    l.__doCheckScrollPosition = function() {
        var t = { "-1": "onremove", 1: "onappend" };
        return function(e) {
            var i = this.__getResourceList(this.__parent || document);
            var a = this.__getScrollViewPort();
            n._$forEach(i, function(e) {
                var n = { target: e, config: a };
                this._$dispatchEvent("oncheck", n);
                var i = n.value;
                if (null == i) i = this.__doCheckResource(e, a);
                var s = t[i];
                if (s) {
                    var n = { target: e, config: this.__getSettingInfo(e) };
                    this._$dispatchEvent(s, n);
                    if (!n.stopped)
                        if (i == -1) this.__doRemoveResource(e);
                        else this.__doAppendResource(e, n.config) } }, this) } }();
    l.__getResourceList = o;
    l.__doCheckResource = o;
    l.__doRemoveResource = o;
    l.__doAppendResource = o;
    l._$refresh = function() { this.__doCheckScrollPosition() } }, 1, 4, 2, 23);
I$(51, function(t, e, n, i, a, s, o, r, l) { a._$$LazyImage = t._$klass();
    l = a._$$LazyImage._$extend(i._$$LazyLoading);
    l.__reset = function(t) { this.__super(t);
        this.__holder = t.holder || e._$BLANK_IMAGE };
    l.__getResourceList = function(t) {
        return t.getElementsByTagName("img") };
    l.__doCheckResource = function(t, e) {
        var i = e.clientHeight,
            a = n._$offset(t, e).y - e.scrollTop,
            s = a + t.offsetHeight,
            o = this.__getSettingInfo(t),
            r = !t.src || t.src.indexOf(this.__holder) >= 0 || t.src.indexOf(o.src) < 0;
        if (r && 0 <= s && a <= i) return 1;
        if (!r && (s < 0 || a > i)) return -1;
        else return 0 };
    l.__doRemoveResource = function(t) { t.src = this.__holder };
    l.__doAppendResource = function(t, e) { t.src = e.src || this.__holder } }, 1, 225, 4, 269);
I$(24, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var f;
    l._$$LazyImage = t._$klass();
    f = l._$$LazyImage._$extend(s._$$LazyImage);
    f.__reset = function(t) { t = t || {};
        t.attr = "src";
        t.loadedClass = t.loadedClass || "img-lazyloaded";
        t.exploreDist = t.exploreDist || 100;
        t.onappend = function(t) {
            var e = t.target;
            if (!i._$dataset(e, "src")) t.stopped = 1 };
        this.__initCacheDate(t);
        this.__super(t) };
    f.__initCacheDate = function(t) { this._options = t;
        this.__throtteScroll = o.throttle(this.__doCheckScrollFunc._$bind(this), 300, { trailing: !0 }) };
    f.__getResourceList = function(t) {
        return r(t)._$children("[data-" + this._options.attr + "]:not(." + this._options.loadedClass + ")", !0) };
    f.__doCheckResource = function(t, e) {
        var n = this.__getSettingInfo(t),
            i = !t.src || t.src.indexOf(this.__holder) >= 0 || t.src.indexOf(n.src) < 0;
        if (i && this.__isInViewPort(t)) return 1;
        else return 0 };
    f.__isInViewPort = function(t) {
        var e = t.getBoundingClientRect(),
            n = e.top || 0,
            i = e.bottom || 0,
            a = this._options.exploreDist,
            s = document.documentElement.clientHeight + a;
        if (n > -a && n < s || i > -a && i < s || n < -a && i > s) return !0;
        else return !1 };
    f.__doAppendResource = function(t, e) {
        if (t.src != e.src) { this.__addImgTrack(t);
            t.src = e.src || this.__holder;
            i._$addClassName(t, this._options.loadedClass) } };
    f.__addImgTrack = function(t) { n._$addEvent(t, "error", this.__doImgTrack, !1) };
    f.__doImgTrack = function(t) {
        function e(t, e) {
            throw { name: t, message: e, toString: function() {
                    return this.name + " :::: MSG: " + this.message + " :::: PAGE_URL: " + document.URL.split("?")[0] } } }
        n._$clearEvent(t.target, "error");
        if ("load" == t.type);
        else if ("error" == t.type) {
            e("imgloaderror", "image src: " + t.target.src);
            NRUM && NRUM.measure("imgloaderror")
        }
    };
    f.__doCheckScrollPosition = function() { this.__throtteScroll() };
    f.__doCheckScrollFunc = function() {
        var t = { "-1": "onremove", 1: "onappend" };
        return function() {
            var n = this.__getResourceList(this.__parent || document);
            var i = this.__getScrollViewPort();
            e._$forEach(n, function(e) {
                var n = { target: e, config: i };
                this._$dispatchEvent("oncheck", n);
                var a = n.value;
                if (null == a) a = this.__doCheckResource(e, i);
                var s = t[a];
                if (s) {
                    var n = { target: e, config: this.__getSettingInfo(e) };
                    this._$dispatchEvent(s, n);
                    if (!n.stopped)
                        if (a == -1) this.__doRemoveResource(e);
                        else this.__doAppendResource(e, n.config) } }, this) } }();
    return l._$$LazyImage
}, 1, 2, 3, 4, 225, 51, 15, 25);
I$(254, '.#<uispace> .cntbox{width:400px;padding:20px;}\n.#<uispace> .cntbox .tip{margin:10px 0;font-size:24px;color:#333;}\n.#<uispace> .cntbox .warning{color:#D12147;font-family:"iconfont" !important;font-size:28px;padding-right:10px;}\n.#<uispace> .cntbox .smalltip{margin-left:36px;}\n\n.#<uispace> .btnbox{padding:20px;text-align:center;}\n.#<uispace> .btnbox .u-btn{display:inline-block;width:120px;height:40px;text-align:center;line-height:40px;color:#fff;font-weight:700;font-size:18px;background:#D22147;}\n.#<uispace> .btnbox .u-btn:hover{text-decoration:none;}');
I$(255, '<textarea name="txt" id="#<seedTxt>">\n\t<div>\n\t\t<div class="cntbox j-flag">\n\t\t</div>\n\t\t<div class="btnbox">\n\t\t\t<a href="javascript:void(0);" class="u-btn j-flag">确定</a>\n\t\t</div>\n\t</div>\n</textarea>\n<textarea name="jst" id="#<seedMessage>">\n\t<p class="tip"><i class="warning">&#xe609;</i>${message}</p>\n\t<p class="smalltip">${smalltip}</p>\n</textarea>');
I$(28, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var f = e._$pushCSSText(i),
        _ = s._$parseUITemplate(a),
        p = _["seedTxt"],
        m = _["seedMessage"],
        g = s._$addNodeTemplate(s._$getTextTemplate(p));
    l._$$PromptWindow = NEJ.C();
    h = l._$$PromptWindow._$extend(t);
    h.__reset = function(t) { t.title = t.title || "提示";
        this.__okBtn.innerHTML = t.btntext || "确定";
        this.__super(t);
        r._$render(this.__box, m, { message: t.message, smalltip: t.smalltip }) };
    h.__destroy = function(t) { this.__super(t) };
    h.__initXGui = function() { this.__seed_css = f;
        this.__seed_html = g };
    h.__initNode = function() { this.__super();
        var t = e._$getByClassName(this.__body, "j-flag");
        this.__box = t[0];
        this.__okBtn = t[1];
        n._$addEvent(this.__okBtn, "click", this.__onOK._$bind(this)) };
    h.__onOK = function(t) { n._$stop(t);
        this._$dispatchEvent("onok");
        this._$hide() };
    return l._$$PromptWindow }, 229, 4, 3, 254, 255, 233, 238, 239);
I$(29, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var u;
    r._$$OutDateLayer = t._$klass();
    u = r._$$OutDateLayer._$extend(i._$$EventTarget);
    u.__init = function(t) { this.__supInit(t);
        this.__initLayer() };
    u.__initLayer = function() {
        var t = a._$get("outdatejumpurl");
        if (t) {
            var e = Number(o.getUrlParam("redCount") || 0);
            if (e > 2) t.href = "/index.html";
            else { e++;
                t.href = o.insertParamIntoUrl(t.href, "redCount=" + e) } } };
    return r._$$OutDateLayer }, 1, 2, 3, 23, 4, 25, 15);
I$(106, function(t, e, n, i, a, s, o, r, l, c, d) {
    var u;
    o._$$Slider = t._$klass();
    d = o._$$Slider._$extend(i._$$EventTarget);
    d.__reset = function(t) { this.__super(t);
        this.__list = t.list;
        this.__length = this.__list.length;
        this.__icons = t.icons || [];
        this.__preBtn = t.preBtn;
        this.__nextBtn = t.nextBtn;
        this.__zIndex = t.zIndex || 10;
        this.__box = t.box || this.__list[0].parentNode;
        this.__initListNode(this.__list);
        this.__duragion = t.duragion || 5e3;
        this.__thumbnail = t.thumbnail;
        this.__thumbnailAni = t.thumbnailAni;
        if (this.__thumbnailAni) this.__initThumbnailAni(this.__thumbnailAni);
        else if (this.__thumbnail) this.__initThumbnail(this.__thumbnail);
        this.__current = 0;
        this.__timeOut = setTimeout(this.__doSlide._$bind(this, this.__current, this.__current + 1), this.__duragion) };
    d.__initListNode = function(t) { t[0].style.cssText = "opacity:1;filter:alpha(opacity=100);z-index:" + this.__zIndex;
        for (var e = 1, i = t.length; e < i; e++) { t[e].style.cssText = "opacity:0;filter:alpha(opacity=0);z-index:" + (this.__zIndex - 1);
            a._$delClassName(t[e], "hide") }
        for (var e = 0, i = this.__icons.length; e < i; e++) n._$addEvent(this.__icons[e], "mouseover", this.__onIconHover._$bind(this, e));
        n._$addEvent(this.__preBtn, "click", this.__onButtonClick._$bind(this, -1));
        n._$addEvent(this.__nextBtn, "click", this.__onButtonClick._$bind(this, 1));
        n._$addEvent(this.__box, "mouseenter", this.__onBoxMouseOver._$bind(this));
        n._$addEvent(this.__box, "mouseleave", this.__onBoxMouseOut._$bind(this)) };
    d.__initThumbnailAni = function(t) {
        var e = t.items;
        var i = e.length;
        var a = t.itemGroups;
        var s = a.length;
        var o = a[0].parentNode;
        var r = 6;
        var l = 174;
        var c = i % r;
        var d = 0;
        this._isBelowIE9 = "ie" == nej.p._$KERNEL.browser && nej.p._$KERNEL.version < 9;
        if (0 == c) c = r;
        if (a.length > 1) { t.preArrow.style.display = "inline-block";
            t.nextArrow.style.display = "inline-block";
            n._$addEvent(t.preArrow, "click", function() { d--;
                if (d >= 0) {
                    var e = parseFloat(o.style.marginLeft) || 0;
                    if (d + 2 == s) o.style.marginLeft = e + c * l + "px";
                    else o.style.marginLeft = e + r * l + "px";
                    this.__controlArrow(t, d, s);
                    this.__onIconHover(d * r) } else d++ }._$bind(this));
            n._$addEvent(t.nextArrow, "click", function() { d++;
                if (d + 1 <= s) {
                    var e = parseFloat(o.style.marginLeft) || 0;
                    if (d + 1 == s) o.style.marginLeft = e - c * l + "px";
                    else o.style.marginLeft = e - r * l + "px";
                    this.__controlArrow(t, d, s);
                    this.__onIconHover(d * r) } else d-- }._$bind(this)) }
        this.__thumbnailItemMouseEvent(e) };
    d.__controlArrow = function(t, e, n) {
        var i = t.preArrow,
            s = t.preArrow;
        a[0 == e ? "_$addClassName" : "_$delClassName"](t.preArrow, "arrow-left-dis");
        a[e == n - 1 ? "_$addClassName" : "_$delClassName"](t.nextArrow, "arrow-right-dis") };
    d.__initThumbnail = function(t) {
        function e(t) { r = t < 0 ? t % s + s : t % s;
            return r }
        var i = t.items;
        var a = t.itemGroups;
        var s = a.length;
        var o = 6;
        var r = 0;
        if (a.length > 1) { t.preArrow.style.display = "inline-block";
            t.nextArrow.style.display = "inline-block";
            n._$addEvent(t.preArrow, "click", function() { a[r].style.display = "none";
                e(--r);
                a[r].style.display = "block";
                this.__onIconHover(r * o) }._$bind(this));
            n._$addEvent(t.nextArrow, "click", function() { a[r].style.display = "none";
                e(++r);
                a[r].style.display = "block";
                this.__onIconHover(r * o) }._$bind(this)) }
        this.__thumbnailItemMouseEvent(i) };
    d.__thumbnailItemMouseEvent = function(t) { e._$forEach(t, function(t, e) { n._$addEvent(t, "mouseenter", function() { t.firstChild.style.display = "none";
                this.__onIconHover(e) }._$bind(this));
            n._$addEvent(t, "mouseleave", function() { t.firstChild.style.display = "inline-block" }._$bind(this)) }._$bind(this)) };
    d.__onBoxMouseOver = function() {
        if (this.__thumbnailAni) this.__showThumbnail(this.__thumbnailAni);
        else if (this.__thumbnail) this.__showThumbnail(this.__thumbnail);
        clearTimeout(this.__timeOut) };
    d.__onBoxMouseOut = function() {
        if (this.__thumbnailAni) this.__hideThumbnail(this.__thumbnailAni);
        else if (this.__thumbnail) this.__hideThumbnail(this.__thumbnail);
        this.__timeOut = setTimeout(this.__doSlide._$bind(this, this.__current, this.__current + 1), this.__duragion) };
    d.__onButtonClick = function(t, e) { this.__doSlide(this.__current, this.__current + t) };
    d.__onIconHover = function(t, e) {
        if (t != this.__current) this.__doSlide(this.__current, t) };
    d.__getOpacityCSSText = function(t) {
        var e = ["opacity:" + t];
        e.push("filter:alpha(opacity=" + 100 * t + ")");
        return e.join(";") };
    d.__resetOtherImages = function(t, e) {
        for (var n = 0, i = this.__list.length; n < i; n++)
            if (n != t && n != e) this.__list[n].style.cssText = this.__getOpacityCSSText(0) };
    d.__doSlide = function(t, e) {
        if (e < 0) e = this.__length - 1;
        if (e == this.__length) e = 0;
        this.__setIndexIcon(this.__current, e);
        if (this.__animation) { this.__animation = this.__animation._$recycle();
            this.__list[t].style.cssText = this.__getOpacityCSSText(0) }
        this.__resetOtherImages(t, e);
        if (this.__timeOut) clearTimeout(this.__timeOut);
        this.__current = e;
        this.__animation = s._$$AnimEaseIn._$allocate({ from: { offset: 0 }, to: { offset: 1 }, duration: 400, onupdate: function(n) { this.__list[e].style.cssText = this.__getOpacityCSSText(n.offset);
                this.__list[e].style.zIndex = this.__zIndex;
                this.__list[t].style.cssText = this.__getOpacityCSSText(1 - n.offset);
                this.__list[t].style.zIndex = this.__zIndex - 1 }._$bind(this), onstop: function() { this.__animation = this.__animation._$recycle();
                this.__timeOut = setTimeout(this.__doSlide._$bind(this, this.__current, this.__current + 1), this.__duragion) }._$bind(this) });
        this.__animation._$play() };
    d.__setIndexIcon = function(t, e) {
        for (var n = 0, i = this.__icons.length; n < i; n++) a._$delClassName(this.__icons[n], "active");
        if (this.__icons.length) a._$addClassName(this.__icons[e], "active") };
    d.__showThumbnail = function(t) {
        if (this._isBelowIE9) this.__comOpacityAni(t.wrap, 0, 1);
        else t.wrap.style.cssText = "opacity:1;filter:alpha(opacity=100);" };
    d.__hideThumbnail = function(t) {
        if (this._isBelowIE9) this.__comOpacityAni(t.wrap, 1, 0);
        else t.wrap.style.cssText = "opacity:0;filter:alpha(opacity=0);" };
    d.__comOpacityAni = function(t, e, n) {
        if (this.__comOpaAni) this.__comOpaAni = this.__comOpaAni._$recycle();
        this.__comOpaAni = s._$$AnimEaseIn._$allocate({ from: { offset: e }, to: { offset: n }, duration: 400, onupdate: function(e) { t.style.cssText = this.__getOpacityCSSText(e.offset) }._$bind(this), onstop: function() { this.__comOpaAni = this.__comOpaAni._$recycle() }._$bind(this) });
        this.__comOpaAni._$play() };
    return o._$$Slider }, 1, 2, 3, 23, 4, 234);
I$(30, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var h;
    l._$$ActivSlide = t._$klass();
    h = l._$$ActivSlide._$extend(i._$$EventTarget);
    h.__init = function(t) { this.__supInit(t);
        this.__getNodes();
        this.__addEvent();
        this.__initSlide() };
    h.__initSlide = function() {
        var t = s(".sliderBox");
        if (t.length) e._$forEach(t, function(t, e, n) {
            var i = a._$getByClassName(n[e], "show_pic");
            var s = a._$getChildren(i[0]) || [];
            if (!(s.length < 2)) {
                var l = a._$getByClassName(n[e], "idxicon");
                var c = a._$getByClassName(n[e], "cons");
                r._$hover(t, "j-sliderBoxhover");
                o._$allocate({ list: s, icons: l, preBtn: c[0], nextBtn: c[1] }) } else if (0 == s.length) t.style.display = "none" }) };
    h.__getNodes = function() {};
    h.__addEvent = function() {};
    return l._$$ActivSlide }, 1, 2, 3, 23, 4, 25, 106, 107);
I$(31, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var u;
    r._$$ActivSlide = t._$klass();
    u = r._$$ActivSlide._$extend(a._$$EventTarget);
    u.__init = function(t) { this.__supInit(t);
        this.__extendTool();
        this.__getNodes();
        this.__addEvent();
        this.__initSlide() };
    u.__initSlide = function() {
        var t = o(".m-sideslip, .m-qsideslip");
        if (t.length) t._$forEach(function(t, e, a) {
            var r = o(t),
                l, c = "#" + r._$attr("startShow"),
                d = ~~r._$attr("topDistance"),
                h = ~~r._$attr("imgLocation"),
                f = 0 == ~~r._$attr("isShow") ? "none" : "block",
                _ = o("#docFoot"),
                p = u.__getBoundingClientRect(t),
                m = p.height,
                g, v, $, y, b, w = s._$getPageBox().clientHeight;
            var C = (r._$attr("class") || "").indexOf("m-qsideslip") > -1;
            if (C) {
                var x = r._$attr("hoverColor");
                var T = r._$attr("bgColor");
                var L = { mouseenter: function() { o(this)._$style({ backgroundColor: x }) }, mouseleave: function() { o(this)._$style({ backgroundColor: T }) } };
                r._$children(".mainPart")._$children("a")._$on(L);
                r._$children(".bottomPart")._$on(L) }
            if (2 == h) g = function() { p = u.__getBoundingClientRect(t);
                $ = u.__getBoundingClientRect(o(c)[0]);
                y = u.__getBoundingClientRect(_[0]);
                b = document.documentElement.scrollTop || document.body.scrollTop;
                l = $.y;
                if (o.isIE6) { r._$style({ position: "absolute", top: l + "px" });
                    r._$children("*", !1)._$trigger("hover") } else {
                    if (p.scrollTop + w <= l + d + m) r._$style({ position: "absolute", top: l + "px", bottom: "auto", display: f });
                    else r._$style({ position: "fixed", top: "auto", bottom: d + "px", display: "block" });
                    if (y && p.scrollTop + w - d >= y.y - 60) r._$style({ position: "absolute", top: y.y - 60 - m + "px", display: "block" }) } };
            else g = function() { p = u.__getBoundingClientRect(t);
                $ = u.__getBoundingClientRect(o(c)[0]);
                y = u.__getBoundingClientRect(_[0]);
                l = $.y;
                if (o.isIE6) { r._$style({ position: "absolute", top: l + "px" });
                    r._$children("*", !1)._$trigger("hover") } else {
                    if (p.scrollTop + d <= l) r._$style({ position: "absolute", top: l + "px", display: f });
                    else r._$style({ position: "fixed", top: d + "px", display: "block" });
                    if (y && p.scrollTop + d + m >= y.y - 60) r._$style({ position: "absolute", top: y.y - 60 - m + "px", display: "block" }) } };
            v = n.throttle(g, 5);
            i._$addEvent(window, "scroll", function() { v() });
            i._$dispatchEvent(window, "scroll")
        })
    };
    u.__getNodes = function() {};
    u.__addEvent = function() {};
    u.__getBoundingClientRect = function(t) {
        if (!t) return !1;
        var e = t.getBoundingClientRect(),
            n = document.documentElement.scrollTop || document.body.scrollTop,
            i = document.documentElement.scrollLeft || document.body.scrollLeft;
        return { top: e.top, bottom: e.bottom, left: e.left, right: e.right, width: e.width || e.right - e.left, height: e.height || e.bottom - e.top, scrollTop: n, scrollLeft: i, x: e.left + i, y: e.top + n } };
    u.__extendTool = function() { o.isIE678 = !1;
        if (o.isIE678) { o.isIE8 = !!"1" [0];
            o.isIE6 = !(o.isIE8 || document.documentMode && "BackCompat" != document.compatMode);
            o.isIE7 = !o.isIE8 && !o.isIE6 } };
    return r._$$ActivSlide
}, 1, 2, 15, 3, 23, 4, 25);
I$(108, function(t, e, n, i, a, s, o, r, l, c) {
    var d = function() {
        var t = 6e4,
            e = 60 * t,
            n = 24 * e;
        return function(i) {
            var a = +i > 0 ? +i : 0;
            var s = parseInt(a / n, 10),
                o = parseInt(a % n / e, 10),
                r = parseInt(a % n % e / t, 10),
                l = parseInt(a % n % e % t / 1e3, 10),
                c = parseInt(a % n % e % t % 1e3, 10);
            if (1 === s && 0 === o) { s = 0;
                o = 24 }
            return { d: s, h: o, m: r, s: l, ms: c, dd: u(s), hh: u(o), mm: u(r), ss: u(l) } } }();
    var u = function(t) {
        return (t < 10 ? "0" : "") + t };
    s._$$CountZero = t._$klass();
    c = s._$$CountZero._$extend(n._$$EventTarget);
    c.__reset = function(t) { this.__super(t);
        this.__initCountZero(t) };
    c.__initCountZero = function(t) { this._cache = [];
        this.__addOptionsObj(t);
        this._timer = null;
        this.__startPolling() };
    c.__addOptionsObj = function(t) { t.leftMs = Number(t.leftMs) || 0;
        this._cache.push(t) };
    c.__startPolling = function() { this.__update.call(this);
        this._timer = window.setInterval(this.__update._$bind(this), 500) };
    c.__update = function() {
        var t = 0;
        e._$forEach(this._cache, function(n, i) {
            if (!n._finish) {
                if (n.leftMs <= 0) { n._finish = !0;
                    n.leftMs = 0;
                    this.__showLeftTime(n);
                    if (n.onZero && e._$isFunction(n.onZero)) n.onZero() } else this.__showLeftTime(n);
                n.leftMs -= 500 } else t++ }._$bind(this));
        if (t == this._cache.length) { this._cache = null;
            window.clearInterval(this._timer);
            this._timer = null } };
    c.__showLeftTime = function(t) {
        var n = d(t.leftMs);
        if (t.onUpdate && e._$isFunction(t.onUpdate)) t.onUpdate(n);
        if (t.parent)
            if (!t.format) t.parent.innerText = u(24 * n.d + n.h) + ":" + u(n.m) + ":" + u(n.s);
            else {
                var i = t.format.indexOf("{d") != -1;
                t.parent.innerHTML = t.format.replace(/{[dhms]{1,2}(\:[12]{1})?}/gi, function(t) {
                    var e = t.replace(/{|}/g, ""),
                        a = e.split(":"),
                        s = a[0],
                        o = +a[1],
                        r = n[s];
                    if (t.indexOf("h") != -1 && n.d > 0 && !i) r = +r + 24 * n.d + "";
                    return !o ? r : r.slice(o - 1, o) }) } };
    c._$addCount = function(t) {
        if (null === this._timer) this.__initCountZero(t);
        else this.__addOptionsObj(t) };
    return s._$$CountZero }, 1, 2, 23, 3, 4);
I$(256, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var u;
    r._$$BrandAni = t._$klass();
    u = r._$$BrandAni._$extend(i._$$EventTarget);
    u.__reset = function(t) { this.__super(t);
        this.__configAni(t);
        if (this.__validConfig()) this.__bindAni() };
    u.__configAni = function(t) { this._wrapElem = t.wrapElem || "";
        this._aniElem = t.aniElem || "";
        this._to = parseFloat(t.to) || 50;
        this._from = parseFloat(t.from) || 0;
        this._dur = parseFloat(t.duration) || 300;
        this._timing = t.timing || "easeinout";
        this._mspp = Math.abs(this._dur / (this._to - this._from));
        this._onTo = "onTo";
        this._onFrom = "onFrom";
        this._brandAni = {} };
    u.__validConfig = function() {
        if (!this._wrapElem) { console.error("没有传入触发动画的节点！");
            return !1 }
        if (!this._wrapElem) { console.error("没有传入运动的节点！");
            return !1 }
        return !0 };
    u.__bindAni = function() { s(this._wrapElem)._$filter(":not([ani=bind])")._$on({ mouseenter: this.__doAni._$bind(this, !0), mouseleave: this.__doAni._$bind(this, !1) })._$attr({ ani: "bind" }) };
    u.__doAni = function(t, e) {
        var n = this,
            i = s(e.target)._$children(this._aniElem, !0)[0],
            r = parseFloat(i.style.top) || this._from,
            l = Math.abs(t ? (this._to - r) * this._mspp : (r - this._from) * this._mspp),
            c = a._$dataset(i, "ani");
        if (this._brandAni[c]) this._brandAni[c]._$recycle();
        delete this._brandAni[c];
        var d = a._$dataset(i, "ani", +new Date);
        this._brandAni[d] = o._$$AnimBezier._$allocate({ from: { offset: r }, to: { offset: t ? n._to : n._from }, duration: l, timing: n._timing, onupdate: function(t) { i.style.top = t.offset + "px" }, onstop: function() { n._$dispatchEvent(t ? n._onTo : n._onFrom);
                this._$recycle();
                delete n._brandAni[d] } });
        this._brandAni[d]._$play() };
    return r }, 1, 2, 3, 23, 4, 25, 96);
I$(257, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) {
    var p;
    var m = { addFav: function(t, e, n, i) {
            if (n && !this.sending) {
                var a = "/personal/brand/follow.html",
                    l = 1;
                this.sending = 1;
                s(a, { method: "POST", data: { id: e, status: l || 1 }, type: "json", norest: !0, onload: function(t) {
                        if (200 == t.retcode) { this.toast("成功关注", n, -44);
                            this.__changeFavStatus(n) } else if (461 == t.retcode) { this.__loginWin = o._$allocate({ logincallback: this.__getLoginOK2._$bind(this, e, n, i) })._$show();
                            this.sending = 0 } else if (491 == t.retcode) { this.toast("已关注", n);
                            this.__changeFavStatus(n) } else this.toast("关注失败", n, -44) }._$bind(this), onerror: function(t) { r._$allocate({ message: "系统错误" })._$show();
                        this.sending = 0 }._$bind(this) }) } }, __changeFavStatus: function(t) { t.className = "follow followed" }, __getLoginOK2: function(t, e, n, i) {
            if (0 == i) { this.addFav(null, t, e, n);
                n._$dispatchEvent("cbloginOk") } }, toast: function() {
            function t() { this.cnt = 1 }
            t.prototype.getOpacityCSSText = function(t) {
                var e = ["opacity:" + t];
                e.push("filter:alpha(opacity=" + 100 * t + ")");
                return e.join(";") };
            t.prototype.animate = function(t, e, n) {
                var i = c._$$AnimEaseIn._$allocate({ from: { offset: e }, to: { offset: n }, duration: 500, onupdate: function(e) { t.style.cssText = this.getOpacityCSSText(e.offset) }._$bind(this), onstop: function() { this._$recycle() } });
                i._$play() };
            t.prototype.show = function(t, e, n) {
                if (e && !this.loading) { this.loading = 1;
                    var i = l(e)._$next(".toast")[0];
                    i.innerHTML = t;
                    if (n) i.style.marginLeft = n + "px";
                    this.animate(i, 0, .75);
                    setTimeout(function() { this.animate(i, .75, 0);
                        this.loading = 0;
                        p.sending = 0 }._$bind(this), 2e3) } };
            var e = new t;
            return function(t, n, i) {
                if (!p) p = this;
                e.show(t, n, i) } }._$bind(this)() };
    return m }, 1, 2, 3, 23, 4, 6, 7, 8, 25, 234);
I$(258, function(t, e, n, i, a, s, o, r, l, c) {
    var c = {};
    c._$onSuccess = function(t, e) {
        var i = n._$getElement(t, "c:j-brandcoupon");
        this._$disableBtn(i, "已领") };
    c._$onExchanged = function(t, e) {
        var i = n._$getElement(t, "c:j-brandcoupon");
        this._$disableBtn(i, "已领") };
    c._$disableBtn = function(t, e) {
        if (a._$hasClassName(t, "j-brandcoupon")) { a._$addClassName(t, "text-gray");
            a._$delClassName(t, "couponExchange");
            a._$getByClassName(t, "j-kind")[0].innerText = e } };
    return c }, 1, 2, 3, 23, 4);
I$(32, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _, p) {
    var p;
    u._$$BrandArea = t._$klass();
    p = u._$$BrandArea._$extend(i._$$EventTarget);
    p.__init = function(t) { this.__supInit(t);
        this._parent = t.parent || "body";
        this.__brandAreaEvent(t);
        this.__queryStatus() };
    p.__brandAreaEvent = function(t) { this.__StartCountDown(t);
        this.__delegateBrandAni();
        this.__followBrand() };
    p.__StartCountDown = function(t) {
        var n = t.kaolaSystemTime || window.kaolaSystemTime || +new Date,
            i = s(this._parent)._$children(".brandTime", !0);
        if (i.length) e._$forEach(i, function(t, e, i) {
            var s = +a._$attr(t, "time") || 0;
            if (0 != s) {
                var o = a._$getByClassName(t, "timeArea");
                if (o && o.length) {
                    var l = { parent: o[0], leftMs: s - n, format: "{dd}天{hh}时{mm}分{ss}秒" };
                    if (this._CZ) this._CZ._$addCount(l);
                    else this._CZ = r._$allocate(l) } } }, this) };
    p.__delegateBrandAni = function() { l._$$BrandAni._$allocate({ wrapElem: s(this._parent)._$children(".brandWrap[ani=need]", !0), aniElem: ".brandDesc", to: -48, from: 0, duration: 300 }) };
    p.__followBrand = function() {
        var t = s(this._parent)._$children(".rowOfSix .follow", !0);
        if (t.length) t._$on("click", function(t) { n._$stop(t);
            var e = n._$getElement(t),
                i = a._$attr(e, "brandId");
            c.addFav(t, i, e, this) }._$bind(this)) };
    p.__queryStatus = function() {
        var t = s(this._parent)._$children(".j-brandcoupon", !0),
            n = [];
        if (0 != t.length) { t._$forEach(function(t) {
                var e = a._$attr(t, "schemeId");
                if (e && n.indexOf(e) == -1) n.push(e) });
            o._$request("/coupon/redeemCode/getBatchCouponRemainder.html", { method: "post", headers: { "X-Requested-With": "XMLHttpRequest" }, data: e._$object2query({ redeemCodes: n.join(",") }), type: "json", onload: function(t) {
                    var e = t || {};
                    if (200 == e.code) {
                        var n = e.data || {};
                        for (var i in n)
                            if (!n[i]) s(".j-brandcoupon[schemeId=" + i + "]")._$forEach(function(t) { d._$disableBtn(t, "抢光") }._$bind(this)) } }._$bind(this), onerror: function() {} }) } };
    return u._$$BrandArea }, 1, 2, 3, 23, 4, 25, 14, 108, 256, 257, 258);
I$(95, function(t, e, n, i, a, s, o, r, l, c, d) {
    o._$$ScrollTo = t._$klass();
    d = o._$$ScrollTo._$extend(n._$$EventTarget);
    d.__reset = function(t) { this.__super(t);
        this._scrollTo = t.scrollTo;
        this._offset = +t.offset || 0;
        this._duration = +t.duration || 500;
        this._timing = t.timing || "easeinout";
        this._onEnd = t.onEnd;
        if (this._scrollTo) this.__startAni(t) };
    d.__startAni = function(t) {
        var e = this;
        var n = document.body.scrollTop || document.documentElement.scrollTop;
        var i = a._$offset(this._scrollTo).y + this._offset;
        if (n != i) {
            var o = s._$$AnimBezier._$allocate({ from: { offset: n }, to: { offset: i }, duration: this._duration, timing: this._timing, onupdate: function(t) { window.scrollTo(0, t.offset) }, onstop: function() { e.__callback();
                    this._$recycle() } });
            o._$play() } else this.__callback() };
    d.__callback = function() {
        if (this._onEnd && e._$isFunction(this._onEnd)) this._onEnd();
    };
    return o._$$ScrollTo
}, 1, 2, 23, 3, 4, 96);
I$(33, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var h;
    l._$$SwitchTabs = t._$klass();
    h = l._$$SwitchTabs._$extend(i._$$EventTarget);
    h.__init = function(t) { this.__supInit(t);
        this.__switchTabs();
        this.__liftTabs() };
    h.__switchTabs = function() { e._$forEach(s(".tabChange"), function(t, i, o) {
            var r = a._$getByClassName(t, "tab"),
                l = r.length;
            var c = s(t)._$children("table", !0)[0];
            var d = a._$getByClassName(t, "contentArea"),
                u = a._$getChildren(d[0]);
            if (u && u.length) e._$forEach(u, function(t, e, n) {
                var i = a._$attr(t, "locateId");
                s("#" + i)._$delClassName("m-goodsarea")._$insert2(t) });
            if (r && l) { s(r)._$on("mouseenter", function(t) {
                    var i = n._$getElement(t),
                        o = s(i)._$siblings(".active"),
                        l = e._$indexOf(r, i) + 1;
                    clearTimeout(this.tabTimer);
                    this.tabTimer = setTimeout(function() {
                        var t = a._$attr(i, "activeColor"),
                            e = o._$attr("color");
                        if (a._$hasClassName(i, "j-showtype2")) { s(i)._$children(".j-tabtxt")._$style({ color: t, borderColor: t });
                            o._$children(".j-tabtxt")._$style({ color: e, borderColor: "#fff" }) } else { s(i)._$style({ backgroundColor: t, borderColor: t });
                            o._$style({ backgroundColor: e, borderColor: "#ddd" }) }
                        s(i)._$addClassName("active");
                        o._$delClassName("active")._$parent(".tabChange")._$children(".contentArea")._$children()._$addClassName("hide")._$filter(":nth-child(" + l + ")")._$delClassName("hide");
                        n._$dispatchEvent(window, "scroll") }, 200) }._$bind(this));
                s(c)._$on("mouseleave", function(t) {
                    var e = n._$getElement(t),
                        i = s(e)._$children("th.active", !0)[0],
                        o = a._$attr(i, "activeColor");
                    clearTimeout(this.tabTimer);
                    if (a._$hasClassName(i, "j-showtype2")) s(i)._$children(".j-tabtxt")._$style({ color: o, borderColor: o });
                    else s(i)._$style({ backgroundColor: o, borderColor: o }) }._$bind(this));
                e._$forEach(r, function(t, e, n) {
                    if (!a._$hasClassName(t, "active") && !a._$hasClassName(t, "j-showtype2")) a._$style(t, { backgroundColor: a._$attr(t, "color") });
                    a._$style(t, { width: (1e3 / l).toFixed(1) + "px" }) }) } }._$bind(this)) };
    h.__liftTabs = function() {
        if (s(".m-tabbar-wrap .tabbar-bg").length) { this.__lifttabNavFix();
            this.__bindliftTab();
            this.__bindliftTabScroll() } };
    h.__lifttabNavFix = function() {
        var t = s(".m-tabbar-wrap .tabbar-bg"),
            e = t[0].parentNode,
            i = function() {
                var n = document.documentElement.scrollTop || document.body.scrollTop,
                    i = n + e.getBoundingClientRect().top;
                if (n >= i) { a._$addClassName(t[0], "tabbar-bg-fix");
                    if ("absolute" == t._$style("position")) t._$style("top", n - i - 3) } else if (n < i) { a._$delClassName(t[0], "tabbar-bg-fix");
                    t._$attr("style", "") } }._$bind(this);
        var r = o.throttle(i, 50, { leading: !1 });
        n._$addEvent(window, "scroll", r);
        r() };
    h.__bindliftTab = function() {
        var t = s(".m-tabbar-wrap .tabbar");
        this.__isScrolling = !1;
        t._$on("click .tab", function(e) {
            var i = n._$getElement(e, "c:tab");
            var o = s(i)._$parent()._$children(".tab.active", !0);
            if (0 === o.length || o[0] != i) { a._$delClassName(o[0], "active");
                a._$addClassName(i, "active");
                this.__switchliftTabStyle(t) }
            this.__isScrolling = !0;
            r._$allocate({ scrollTo: a._$get(a._$attr(i, "data-rel")), offset: -i.offsetHeight, duration: 400, timing: "easeinout", onEnd: function() { this.__isScrolling = !1 }._$bind(this) }) }._$bind(this)) };
    h.__bindliftTabScroll = function() {
        var t = s(".m-tabbar-wrap .tabbar"),
            e, i = t[0].offsetHeight,
            r = function(e) {
                return e ? t[0].style.display = e : t[0].style.display };
        var l = function() {
            if (!this.__isScrolling) {
                var e = [],
                    n, s = document.documentElement.scrollTop || document.body.scrollTop,
                    o = t._$children(".tab")._$map(function(t) {
                        return a._$get(a._$attr(t, "data-rel")) });
                for (var l = 0; l < o.length; l++)
                    if (o[l]) { n = a._$offset(o[l]).y;
                        if (n <= s + i) e.push(n);
                        else break } else;
                var c = t._$children(".active"),
                    d = t._$children()[e.length > 0 ? e.length - 1 : 0];
                if (0 === c.length || d != c[0]) { a._$delClassName(c[0], "active");
                    a._$addClassName(d, "active");
                    this.__switchliftTabStyle(t) }
                if (e.length === o.length) {
                    var u = o[o.length - 1];
                    if (a._$offset(u).y + u.offsetHeight <= s + i + 200) "none" !== r() && r("none");
                    else "block" !== r() && r("block") } else "block" !== r() && r("block") } }._$bind(this);
        var c = o.throttle(l, 100, { leading: !1 });
        n._$addEvent(window, "scroll", c);
        c() };
    h.__switchliftTabStyle = function(t) {
        var e = t._$attr("showType") || 1;
        t._$children()._$forEach(function(t) {
            var n = s(t),
                i = n._$attr("color");
            if (2 == e) n._$children("em")._$style({ color: i, borderColor: "#fff" });
            else n._$style("background-color", i) });
        t._$children(".active")._$forEach(function(t) {
            var n = s(t),
                i = n._$attr("activeColor");
            if (2 == e) n._$children("em")._$style({ color: i, borderColor: i });
            else { n._$children("span")._$style("border-top-color", i);
                n._$style("background-color", i) } }) };
    return l._$$SwitchTabs }, 1, 2, 3, 23, 4, 25, 15, 95);
I$(259, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var u;
    r._$$RollComment = t._$klass();
    u = r._$$RollComment._$extend(i._$$EventTarget);
    u.__init = function(t) { this.__supInit(t);
        this.__initComment(t) };
    u.__initComment = function(t) { this.commentTimer = null, this.rollTextTimer = null;
        var e = t.parent || "body";
        s(e)._$children(".detailWrap", !0)._$on({ mouseenter: this.__showComment._$bind(this), mouseleave: this.__hideComment._$bind(this) }) };
    u.__showComment = function(t) {
        var e = s(t.target);
        var n = e._$attr("goodsId");
        var i = e._$children(".proComment", !0);
        var a = 1 == i._$attr("hasComment");
        var o = 1 == i._$attr("gotComment");
        i._$attr("leave", "0");
        if (0 != i.length)
            if (a)
                if (o) { this.__showElem(i);
                    this.__rollComment(i) } else this.commentTimer = setTimeout(this.__getCommentList._$bind(this, i, n), 150);
        else this.__showElem(i) };
    u.__getCommentList = function(t, n) { o._$request("/commentAjax/comment_list.html", { sync: !1, type: "json", headers: { "X-Requested-With": "XMLHttpRequest" }, data: e._$object2query({ goodsId: n, grade: 1, hasContent: 1, hasImg: 0, pageNo: 1, pageSize: 10 }), method: "post", timeout: 0, onload: function(n) {
                var i = n || {};
                var s = [];
                var o = 1 == t._$attr("leave");
                if (200 == i.retcode) { t._$attr("gotComment", 1);
                    e._$forEach(i.commentPage.result, function(t) {
                        if (2 != t.commentStatus) return !1;
                        s.push((t.accountShow || "") + "：" + (t.commentContent || "")) }) }
                if (!o) this.__showElem(t);
                if (s.length > 0) { a._$addClassName(t._$children(".data")[0], "hasDetail");
                    t._$children(".detail")._$style("display", "block");
                    t._$children(".rollText", !0)._$html(s.join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"));
                    if (!o) this.__rollComment(t) } }._$bind(this), onerror: function() {}._$bind(this) }) };
    u.__rollComment = function(t) {
        var e = t._$children(".rollText", !0);
        var n = e[0].offsetWidth - 10;
        var i = !1;
        this.rollTextTimer = setInterval(function() {
            var t = parseFloat(e._$style("marginLeft")) || 0;
            if (n <= -t) i = !0;
            e._$style("marginLeft", t - 1 + "px");
            if (i) { e._$style("marginLeft", n + "px");
                i = !1 } }, 30) };
    u.__showElem = function(t) { t._$style("display", "inline-block") };
    u.__hideComment = function(t) {
        var e = this;
        var n = s(t.target);
        var i = n._$children(".proComment", !0);
        if (0 != i.length) { clearTimeout(this.commentTimer);
            clearTimeout(this.rollTextTimer);
            i._$attr("leave", "1");
            i._$style("display", "none") } };
    return r }, 1, 2, 3, 23, 4, 25, 14);
I$(328, '<div class="m-skucard" style="left: {left || \'auto\'}px;">\n\t<h2 class="titlebox f-cb">\n\t\t<span class="title f-fl">加入购物车</span>\n\t\t<span on-click={this.close()} class="close f-fr">×</span>\n\t</h2>\n\t<div class="cntbox">\n\t\t<ul class="namelist">\n\t\t\t{#if skuGoodsPropertyList.length != 0}\n\t\t\t{#list skuGoodsPropertyList as item}\n\t\t\t<li class="item">\n\t\t\t\t<p class="propname">{item.propertyNameCn}：</p>\n\t\t\t\t<p class="proptlist f-cb">\n\t\t\t\t\t{#if item.propertyValues.length != 0}\n\t\t\t\t\t{#list item.propertyValues as item2}\n\t\t\t\t\t{#if item2.showTag == 0}\n\t\t\t\t\t\t<a href="javascript:void(0)" class="propt disable">{item2.propertyValue}</a>\n\t\t\t\t\t{#else}\n\t\t\t\t\t\t<a href="javascript:void(0)" class="propt {item2.showTag == 1 ? \'propt-2\' : \'\'} {item2.showTag == 2 ? \'propt-1\' : \'\'}" on-click={this.changePropt(item2)}>{item2.propertyValue}</a>\n\t\t\t\t\t{/if}\n\t\t\t\t\t{/list}\n\t\t\t\t\t{/if}\n\t\t\t\t</p>\n\t\t\t</li>\n\t\t\t{/list}\n\t\t\t{/if}\n\t\t</ul>\n\t\t<div class="foot f-cb">\n\t\t\t{#if !!price}\n\t\t\t<span class="price f-fl">¥{price}</span>\n\t\t\t<a href="javascript:void(0)" on-click={this.confirm()} class="u-wbtn f-fr">确定</a>\n\t\t\t{#else}\n\t\t\t<a href="javascript:void(0)" class="u-wbtn u-wbtn-1 disable f-fr">确定</a>\n\t\t\t{/if}\n\t\t</div>\n\t</div>\n</div>');
I$(139, function(t, e) {
    var n = e.extend({
        name: "skucard",
        template: t,
        config: function() { this.selectedValues = [];
            this.setCard() },
        init: function() { this.supr() },
        setCard: function() {
            for (var t = 0, e = this.data.skuGoodsPropertyList.length; t < e; t++)
                for (var n = 0, i = this.data.skuGoodsPropertyList[t].propertyValues.length; n < i; n++) {
                    var a = this.data.skuGoodsPropertyList[t].propertyValues[n];
                    if (!this.checkisSelected(a)) this.setProperty(a) } },
        setProperty: function(t) {
            var e = this.filteredSku || this.data.skuList;
            var n = t.propertyValueId;
            t.showTag = 0;
            for (var i = 0, a = e.length; i < a; i++)
                for (var s = 0, o = e[i].skuPropertyValueIdList.length; s < o; s++)
                    if (n == e[i].skuPropertyValueIdList[s] && e[i].storageStatus && e[i].storeForView) t.showTag = 1 },
        changePropt: function(t) {
            if (1 == t.showTag) { this.setSinglePropValue(t);
                this.filterSelectedVal(t);
                t.showTag = 2 } else if (2 == t.showTag) t.showTag = 1;
            this.checkSelectProp(t);
            this.getSelectPropt();
            this.getSkuList();
            this.setCard();
            this.showPrice();
            this.$update() },
        checkSku: function(t) {
            for (var e = 0, n = this.data.skuList.length; e < n; e++) {
                var i = 0;
                for (var a = 0, s = t.length; a < s; a++) {
                    var o = new RegExp(t[a]);
                    if (o.test(this.data.skuList[e].skuPropertyValueId4View)) i += 1 }
                if (i == t.length && this.data.skuList[e].storageStatus && this.data.skuList[e].storeForView) return !0 }
            return !1 },
        setSinglePropValue: function(t) {
            var e = t.propertyNameId;
            for (var n = 0, i = this.data.skuGoodsPropertyList.length; n < i; n++)
                for (var a = 0, s = this.data.skuGoodsPropertyList[n].propertyValues.length; a < s; a++) {
                    var o = this.data.skuGoodsPropertyList[n].propertyValues[a];
                    if (2 == o.showTag && o.propertyNameId == t.propertyNameId) o.showTag = 1 } },
        filterSelectedVal: function(t) {
            this.uselessVals = [];
            for (var e = 0, n = this.data.skuGoodsPropertyList.length; e < n; e++)
                for (var i = 0, a = this.data.skuGoodsPropertyList[e].propertyValues.length; i < a; i++) {
                    var s = this.data.skuGoodsPropertyList[e].propertyValues[i];
                    if (t.propertyNameId != s.propertyNameId) { this.getSkuList1(t);
                        this.getUselessVals(s) } }
            for (var o = 0, r = this.uselessVals.length; o < r; o++)
                for (var l = 0, c = this.selectedValues.length; l < c; l++)
                    if (this.uselessVals[o].propertyValueId == this.selectedValues[l].propertyValueId) this.selectedValues[l].showTag = 0;
        },
        getSkuList1: function(t) { this.filteredSku1 = [];
            var e = this.data.skuList;
            for (var n = 0, i = e.length; n < i; n++)
                for (var a = 0, s = e[n].skuPropertyValueIdList.length; a < s; a++)
                    if (t.propertyValueId == e[n].skuPropertyValueIdList[a]) this.filteredSku1.push(e[n]) },
        getUselessVals: function(t) {
            var e = this.filteredSku1 || this.data.skuList,
                n = t.propertyValueId,
                i = 0;
            for (var a = 0, s = e.length; a < s; a++)
                for (var o = 0, r = e[a].skuPropertyValueIdList.length; o < r; o++)
                    if (n == e[a].skuPropertyValueIdList[o] && e[a].storageStatus && e[a].storeForView) i = 1;
            if (!i) { t.showTag = 0;
                this.uselessVals.push(t) } else if (!t.showTag) t.showTag = 1 },
        checkSelectProp: function(t) { this.getSelectPropt();
            for (var e = 0, n = this.data.skuGoodsPropertyList.length; e < n; e++)
                for (var i = 0, a = this.data.skuGoodsPropertyList[e].propertyValues.length; i < a; i++) {
                    var s = this.data.skuGoodsPropertyList[e].propertyValues[i];
                    if (t.propertyNameId != s.propertyNameId) {
                        var o = 0;
                        for (var r = 0, l = this.selectedValues.length; r < l; r++)
                            if (this.selectedValues[r].propertyValueId == s.propertyValueId) o = 1;
                        if (!o) {
                            var c = this.getSelectPropt(1);
                            this.getSelectPropt();
                            for (var d = 0, u = this.selectedValues.length; d < u; d++)
                                if (s.propertyNameId == this.selectedValues[d].propertyNameId) c[d] = s.propertyValueId;
                            if (!this.checkSku(c)) s.showTag = 0;
                            else s.showTag = 1 } } } },
        isSelectedProp: function(t) { this.getSelectPropt();
            for (var e = 0, n = this.selectedValues.length; e < n; e++)
                if (t.propertyNameId == this.selectedValues[e].propertyNameId && 0 == t.showTag) { this.selectedValues[e].propertyValueId = t.propertyValueId;
                    return !0 }
            return !1 },
        getSelectPropt: function(t) {
            var e = [];
            this.selectedValues = [];
            for (var n = 0, i = this.data.skuGoodsPropertyList.length; n < i; n++)
                for (var a = 0, s = this.data.skuGoodsPropertyList[n].propertyValues.length; a < s; a++) {
                    var o = this.data.skuGoodsPropertyList[n].propertyValues[a];
                    if (2 == o.showTag)
                        if (!t) this.selectedValues.push(o);
                        else e.push(o.propertyValueId) }
            return e },
        checkisSelected: function(t) {
            var e = t.propertyNameId;
            for (var n = 0, i = this.selectedValues.length; n < i; n++)
                if (e == this.selectedValues[n].propertyNameId) return !0;
            return !1 },
        getSkuList: function() { this.filteredSku = [];
            for (var t = 0, e = this.data.skuList.length; t < e; t++)
                if (this.filterSkuList(t)) this.filteredSku.push(this.data.skuList[t]) },
        filterSkuList: function(t) {
            var e = 0;
            for (var n = 0, i = this.data.skuList[t].skuPropertyValueIdList.length; n < i; n++)
                for (var a = 0, s = this.selectedValues.length; a < s; a++)
                    if (this.selectedValues[a].propertyValueId == this.data.skuList[t].skuPropertyValueIdList[n]) e += 1;
            if (e == this.selectedValues.length) return !0;
            else return !1 },
        showPrice: function() {
            if (this.selectedValues.length == this.data.skuGoodsPropertyList.length && 1 == this.filteredSku.length) this.data.price = this.filteredSku[0].actualCurrentPrice;
            else this.data.price = 0 },
        close: function() { this.$emit("close");
            this.destroy() },
        confirm: function() { this.$emit("confirm", this.filteredSku[0].skuId);
            this.destroy() }
    });
    return n
}, 328, 151);
I$(260, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) {
    var _;
    d._$$AddToCart = t._$klass();
    _ = d._$$AddToCart._$extend(i._$$EventTarget);
    _.__init = function(t) { this.__supInit(t);
        this.__bindCartBtn(t) };
    _.__bindCartBtn = function(t) {
        var e = a._$get(t.parent || "body");
        n._$addEvent(e, "click", this.__onBodyClick._$bind(this)) };
    _.__onBodyClick = function(t) {
        var i = n._$getElement(t),
            r = this;
        if (a._$hasClassName(i, "j-cart-btn")) {
            var d = a._$dataset(i, "goodsid"),
                u = a._$dataset(i, "imageurl");
            if (this.skuCard) this.skuCard.destroy();
            o._$request("/goodsAjax/querySkuById.html", { method: "post", data: e._$object2query({ goodsIdStr: d }), type: "json", headers: { "X-Requested-With": "XMLHttpRequest" }, onload: function(t) {
                    if (200 == t.retcode) { t = t.object;
                        if (t.skuList.length > 1) { r.skuCard = new l({ data: t });
                            r.skuCard.$on("confirm", r.__addCart._$bind(r, i, u, d));
                            r.skuCard.$inject(s(i)._$parent(".proinfo", !0)[0]) } else if (1 == t.skuList.length) {
                            var e = t.skuList[0].skuId;
                            r.__addCart(i, u, d, e) } } else c._$allocate({ message: t.retdesc })._$show() }, onerror: function(t) { c._$allocate({ message: "获取商品属性信息失败！" })._$show() } }) } };
    _.__addCart = function(t, e, n, i) {
        var s = a._$get("sidesCart"),
            o = !1;
        if (s) o = { from: t, imageUrl: e, to: s };
        if (!this.__cart) this.__cart = r._$allocate({ onsuccess: this.__onAddCartSuccess._$bind(this) });
        this.__cart._$addCart({ count: 1, goodsId: n || 0, skuId: i || 0, source: "activity" }, o) };
    _.__onAddCartSuccess = function() {};
    return d }, 1, 2, 3, 23, 4, 25, 14, 101, 139, 8);
I$(462, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var u;
    r._$$AddFavAjax = t._$klass();
    u = r._$$AddFavAjax._$extend(i._$$EventTarget);
    u.__reset = function(t) { this.__super(t);
        this.__startAjax(t) };
    u.__urls = { add: "/favoriteAjax/add.html", del: "/favoriteAjax/delete.html", check: "/favoriteAjax/isFavorite.html" };
    u.__startAjax = function(t) { this._operate = t.operate || "";
        var e = this.__urls[this._operate];
        var n = t.goodsId || "";
        if (!e || !n) { console.error("favAjax : no " + (!e ? "operate" : "goodsId") + "!");
            return !1 }
        o.afterLogin(this.__doAjax._$bind(this, e, n)) };
    u.__doAjax = function(t, n) { s._$request(t, { sync: !1, type: "json", headers: { "X-Requested-With": "XMLHttpRequest" }, data: e._$object2query({ goodsId: n }), method: "post", onload: this.__onSuccess._$bind(this), onerror: this.__onFail._$bind(this) }) };
    u.__onSuccess = function(t) {
        var e = t || {},
            n = e.retcode,
            i = this._operate;
        if ("add" == i)
            if (200 === n || 491 === n) this._$dispatchEvent("onsuccess", e);
            else this._$dispatchEvent("onfail", e);
        else if ("del" == i)
            if (200 === n) this._$dispatchEvent("onsuccess", e);
            else this._$dispatchEvent("onfail", e);
        else if (200 === n && e && e.result) this._$dispatchEvent("onsuccess", !0);
        else this._$dispatchEvent("onfail", !1) };
    u.__onFail = function() { this._$dispatchEvent("onfail", !1) };
    return r }, 1, 2, 3, 23, 4, 14, 26);
I$(310, '<div class="m-dialogmodal iDialogMain {customClass}">\n\t<div class="m-dlgcont cnt">\n     <p class="title"><i class="iconfont main-icon {icon||\'yes\'}" r-html="icon==\'yes\'?\'&#xe612;\':\'&#xe604;\'"></i>{text}</p>\n     {#if !!detail}\n     <p class="detail">{detail}</p>\n     {/if}\n </div>\n \t{#if !!btnText}\n\t<div class="btnbar f-tac">\n\t  <a class="btn" href="javascript:void(0)" on-click={this.confirm()}>{btnText}</a>\n\t</div>\n\t{/if}\n</div>\n\n');
I$(115, function(t, e, n, i, a, s) {
    var o = a.extend({ content: s, data: { title: "到货提醒", width: 520, icon: "yes", text: "设置成功", detail: "", btnText: "确认", customClass: "", timeout: 0 }, init: function() { this.supr();
            var t = this.data.timeout;
            if (0 != t) this.timeout(t) }, confirm: function() { this.destroy() } });
    return o }, 15, 4, 3, 2, 128, 310);
I$(261, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f) {
    var f;
    c._$$AddFavorite = t._$klass();
    f = c._$$AddFavorite._$extend(i._$$EventTarget);
    f.__reset = function(t) { this.__super(t);
        this.__bindBtn(t) };
    f.__notice = function() {
        function t(t, e) { this._txt = e ? "收藏成功" : "您已收藏";
            this._anchor = t;
            this.createNotice();
            this.calcPos();
            this.show() }
        t.prototype.createNotice = function() {
            var t = '<div class="m-favsucc">                    <span class="arr0 arr">&nbsp;</span>                    <span class="arr1 arr">&nbsp;</span>                    <i class="iconfont ic">&#xe62e;</i>' + this._txt + '。<a href="/personal/listfavorite.html" class="color-blue" target="_blank">去个人中心查看&thinsp;&gt;</a>                </div>';
            this._notice = s(t);
            s(document.body)._$insert(this._notice, "bottom") };
        t.prototype.calcPos = function() {
            var t = a._$offset(this._anchor, document.body);
            aRect = { width: this._anchor.offsetWidth, height: this._anchor.offsetHeight }, noticeOffset = { left: 0, top: 0 }, noticeRect = { width: this._notice[0].offsetWidth, height: this._notice[0].offsetHeight };
            noticeOffset.left = t.x + aRect.width / 2 - noticeRect.width / 2;
            noticeOffset.top = t.y + aRect.height + 6;
            this._notice._$style({ left: noticeOffset.left + "px", top: noticeOffset.top + "px" }) };
        t.prototype.bindEvents = function() {
            function t() { e._timeout = 0;
                a._$addClassName(e._notice[0], "m-favsucc-fadeOut");
                setTimeout(function() { e._notice._$style({ display: "none" });
                    e.remove() }, 300) }
            var e = this;
            this._timeout = setTimeout(t, 2e3);
            this._notice._$on("mouseenter", function() { clearTimeout(e._timeout);
                e._timeout = 0 });
            this._notice._$on("mouseleave", function() { e._timeout = setTimeout(t, 1e3) }) };
        t.prototype.show = function() { this._notice._$style({ visibility: "visible" });
            this.bindEvents() };
        t.prototype.remove = function() { clearTimeout(this._timeout);
            this._notice[0].parentNode.removeChild(this._notice[0]);
            this._notice = null;
            this._anchor = null };
        return function(e, n) { new t(e, n) } }();
    f.__addFavorite = function(t) {
        var e = this;
        var n = t.target;
        if (a._$hasClassName(n, "iconfont")) n = n.parentNode;
        if (!a._$hasClassName(n, "j-adding") && !a._$hasClassName(n, "added")) { a._$addClassName(n, "j-adding");
            setTimeout(function() { a._$delClassName(n, "j-adding") }, 2e3);
            var i = a._$attr(n, "data-goodsId");
            var s = r._$$AddFavAjax._$allocate({ operate: "add", goodsId: i, onsuccess: function(t) { a._$addClassName(n, "added");
                    n.innerHTML = '<i class="iconfont">&#xe62f;</i>已收藏';
                    a._$attr(n, "title", "已收藏");
                    var i = e.__notice(n, 200 === t.retcode);
                    s = s._$recycle() }, onfail: function(t) { new l({ data: { title: "提示", icon: "fail", text: t.retdesc || "加入收藏失败", btnText: "", timeout: 3e3 } });
                    s = s._$recycle() } }) } };
    f.__bindBtn = function(t) {
        var e = t.parentNode || document.body;
        s(e)._$children(".j-favbtn", !0)._$on({ click: this.__addFavorite._$bind(this) }) };
    return c }, 1, 2, 3, 23, 4, 25, 14, 462, 115);
I$(34, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) {
    var _;
    d._$$GoodsArea = t._$klass();
    _ = d._$$GoodsArea._$extend(i._$$EventTarget);
    _.__init = function(t) { this.__supInit(t);
        this.__getNodes();
        this.__addEvent();
        var e = t.parent;
        r._$$RollComment._$allocate({ parent: e });
        l._$$AddToCart._$allocate({ parent: e });
        c._$$AddFavorite._$allocate({ parentNode: e }) };
    _.__getNodes = function() {};
    _.__addEvent = function() {};
    return d._$$GoodsArea }, 1, 2, 3, 23, 4, 25, 14, 259, 260, 261);
I$(35, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var u;
    r._$$Statistics = t._$klass();
    u = r._$$Statistics._$extend(i._$$EventTarget);
    u.__init = function(t) { this.__supInit(t);
        this.__initActDa();
        this.__initShtml() };
    u.__initActDa = function() {
        var t = window.actPageLink || window.location.href;
        s("body")._$on("click a[data-actda]", function() {
            var e = window.account || "",
                n = this.getAttribute("data-actda"),
                i = n.split("@@"),
                a = i[0] || "",
                s = i[1] || "",
                o = i[2] || "",
                r = i[3] || "";
            if ("" != n && window._dapush && "javascript:;" != r) window._dapush("_trackEvent", "活动页", t, a, { userAccount: e, userId: e, customData: [r, s, o].join("|") }) }) };
    u.__initShtml = function() {
        var t = "/stat/activity.html",
            n = {},
            i = location.search.split("?")[1];
        if (location.href.indexOf(".shtml") > -1) {
            if (i) n = e._$query2object(i);
            n.activityRefer = encodeURIComponent(document.referrer);
            n.activityShowId = window.activityId;
            o._$request(t, { sync: !1, type: "json", data: e._$object2query(n), method: "post", headers: { "X-Requested-With": "XMLHttpRequest" }, timeout: 0, onload: function(t) {} })
        }
    };
    return r._$$Statistics
}, 1, 2, 3, 23, 4, 25, 14);
I$(36, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var u;
    r._$$ActivSlide = t._$klass();
    u = r._$$ActivSlide._$extend(a._$$EventTarget);
    u.__init = function(t) { this.__supInit(t);
        this.__extendTool();
        this.__getNodes();
        this.__addEvent();
        this.__initVideo() };
    u.__initVideo = function() { o(document)._$on("click .closeVideo", function() { s._$remove(o(this)._$parent()[0], !1) });
        o(".video163")._$forEach(function(t, e, n) {
            function i(t, e, n) {
                function i(e) {
                    return t.replace(n || /\\?\{([^}]+)\}/g, function(t, n) {
                        if ("\\" == t.charAt(0)) return t.slice(1);
                        else return void 0 != e[n] ? e[n] : "" }) }
                if ("[object Array]" !== Object.prototype.toString.call(e)) e = [e];
                var a = [];
                for (var s = 0, o = e.length; s < o; s++) a.push(i(e[s]));
                return a.join("") }
            var a = o(t),
                r = a._$attr("topic"),
                l = a._$attr("sid"),
                c = a._$attr("vid");
            var d = a._$parent()[0];
            if (o.isIE6 && s._$hasClassName(d, "countryVideo")) s._$remove(d, !1);
            var u = navigator.userAgent;
            var h = ['<object  classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}" >', '<param name="bgcolor" value="{background_color}" >', '<param name="allowFullScreen" value="{full_screen}">', '<param name="allowscriptaccess" value="always">', '<param name="allownetworking" value="all" />', '<param name="wmode" value="{wmode}">', '<param name="movie" value="{flash_src}" >', '<param name="flashvars" value="pltype={pltype}&topicid={topicid}&sid={sid}&vid={vid}&threadCountPath={threadCountPath}&threadListPath={threadListPath}&coverpic={coverpic}&videoadv={videoadv}&autoplay={autoplay}&openSub={openSub}&iplimit={iplimit}" >', "</object>"].join("");
            var f = ['<object width="{width}" height="{height}" data="{flash_src}" type="application/x-shockwave-flash">', '<param name="bgcolor" value="{background_color}" >', '<param name="allowFullScreen" value="{full_screen}">', '<param name="allowscriptaccess" value="always">', '<param name="allownetworking" value="all" />', '<param name="wmode" value="{wmode}">', '<param name="flashvars" value="pltype={pltype}&topicid={topicid}&sid={sid}&vid={vid}&threadCountPath={threadCountPath}&threadListPath={threadListPath}&coverpic={coverpic}&videoadv={videoadv}&autoplay={autoplay}&openSub={openSub}&iplimit={iplimit}" >', "</object>"].join("");
            var _ = { topicid: "0085", coverpic: "", autoplay: !0, sid: l || "", vid: c || "", flash_src: "//v.163.com/swf/video/NetEaseFlvPlayerV3.swf", background_color: "#000000", wmode: "opaque", full_screen: !0, iplimit: 0, threadCountPath: "", threadListPath: "", pltype: "", videoadv: "", openSub: "", width: "100%", height: "100%" };
            if ("paike" == r) _.topicid = "1000";
            var p = u.toLowerCase().indexOf("msie") > -1 ? !0 : !1;
            var m;
            if (p) m = i(h, _);
            else m = i(f, _);
            t.innerHTML = m }) };
    u.__getNodes = function() {};
    u.__addEvent = function() {};
    u.__extendTool = function() { o.isIE678 = !1;
        if (o.isIE678) { o.isIE8 = !!"1" [0];
            o.isIE6 = !(o.isIE8 || document.documentMode && "BackCompat" != document.compatMode);
            o.isIE7 = !o.isIE8 && !o.isIE6 } };
    return r._$$ActivSlide }, 1, 2, 15, 3, 23, 4, 25);
I$(37, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _, p, m) {
    var m;
    h._$$ActivSlide = t._$klass();
    m = h._$$ActivSlide._$extend(a._$$EventTarget);
    m.__init = function(t) { this.__supInit(t);
        this.__extendTool();
        this.__initCoupon() };
    m.__initCoupon = function() {
        var t = this;
        var n = c(".couponExchange,.rowOfThree-coupon,.rowOfFour-coupon,.m-couponarea,.m-brandcoupon, .m-brandcoupon1");
        if (0 != n.length) { m.checkCodeTimer = null;
            c("body")._$on({ "click #phoneNum,#checkCode": function(t) { "checkCode" == c(this)._$attr("id") ? c(".checkCodeErr")._$html("&nbsp;") : c(".phoneNumErr")._$html("&nbsp;") }, "click .sendCheckCode": function(t) {
                    if (!m.__validatePhoneNum()) return !1;
                    var n = c("#phoneNum"),
                        i = n._$val().trim();
                    d._$request("/personal/phone/getVerifyCode.html", { method: "post", headers: { "X-Requested-With": "XMLHttpRequest" }, data: e._$object2query({ schemeId: m.currentSchemeId, phoneNum: i }), type: "json", onload: function(t) {
                            if (200 == t.retcode) { s._$remove(c(".sendCheckCode")[0], !1);
                                c("#phoneNum")._$insert(c("<span id='checkCodeTimer'>再次发送(60)</span>")[0], "after");
                                var e = c("#checkCodeTimer");
                                var n = 0;
                                m.checkCodeTimer = setInterval(function() { n += 1;
                                    e._$text("再次发送(" + (60 - n) + ")");
                                    if (n >= 60) { clearInterval(m.checkCodeTimer);
                                        s._$remove(e[0], !1);
                                        c("#phoneNum")._$insert(c('<a href="javascript:;" class="sendCheckCode">获取验证码</a>')[0], "after") } }, 1e3) } else if (445 == t.retcode) c(".phoneNumErr")._$html("<i>&#xe606;</i>该手机号已经被账号" + (t.accountId || "其它账号") + "绑定了哦，请使用该绑定账号登录领取，或选择使用其它手机号进行绑定");
                            else c(".checkCodeErr")._$html("<i>&#xe606;</i>" + (t.retdesc || "获取验证码失败！")) }, onerror: function() { c(".checkCodeErr")._$html("<i>&#xe606;</i>获取验证码失败！") } }) }, "click .couponExchange": function(n) {
                    var i = c(this),
                        a = i._$attr("phoneValidation");
                    m.currentSchemeId = i._$attr("schemeId"), m.currentCouponId = i._$attr("couponId");
                    d._$request("/personal/obtain_coupon.html", { method: "post", headers: { "X-Requested-With": "XMLHttpRequest" }, data: e._$object2query({ schemeId: m.currentSchemeId, phoneValidation: "true" == a }), type: "json", onload: function(e) {
                            if (461 != e.retcode) t._$dispatchEvent("cbclickcoupon");
                            if (200 == e.retcode) {
                                var a = e.coupon || { couponScheme: { schemeName: "优惠券" } };
                                var s = a.couponScheme || { schemeName: "优惠券" };
                                t.__exchangeSuccess(s.schemeName);
                                u._$onSuccess(n, a) } else if (444 == e.retcode) m.__phoneValidation(e.accountId || "");
                            else if (461 == e.retcode) o._$allocate({ logincallback: function(e) {
                                    if (0 == e) { t._$dispatchEvent("cbloginOk", m.currentSchemeId);
                                        i._$trigger("click") } else window.location.reload() } })._$show();
                            else if (e.retcode == -12) { t.__exchangeFail(e.retdesc || "您可能已经领取过该优惠券了");
                                u._$onExchanged(n, a) } else t.__exchangeFail(e.retdesc || "您可能已经领取过该优惠券了") }, onerror: function() {
                            var t = r._$allocate({ clazz: "commTipsPop", title: "提示", width: 520, message: '<div class="staDialogStyle"><i class="alert">&#xe609;</i>领取失败，请您刷新页面重试！</div>' })._$show();
                            setTimeout(function() { t._$hide() }, 3e3) } }) } }) } };
    m.__validatePhoneNum = function() {
        var t = new RegExp("^1[3|4|5|7|8]\\d{9}$");
        var e = c("#phoneNum")._$val().trim();
        if ("" == e) { c(".phoneNumErr")._$html("<i>&#xe606;</i>手机号码不能为空！");
            return !1 }
        if (!t.test(e)) { c(".phoneNumErr")._$html("<i>&#xe606;</i>手机号码格式错误！");
            return !1 }
        return !0 };
    m.__phoneValidation = function() {
        var t = '<div class="prompt phoneValidation">                    <ul>                        <li class="hint">小考拉需要您将登录账号{accountId}与手机号进行绑定，才能顺利给您发放哦：</li>                        <li class="phone clearfix">手机号码：<input id="phoneNum" type="text" value="" maxLength=11 placeholder="请输入手机号" /><a href="javascript:;" class="sendCheckCode">获取验证码</a></li>                        <li class="phoneNumErr"></li>                        <li class="checkCode">短信验证码：<input id="checkCode" type="text" value="" placeholder="请输入验证码" /></li>                        <li class="checkCodeErr"></li>                        <li class="cantUnbind"><b>&#xe609;</b>手机号与登录账号绑定后暂时无法解绑哦~如有疑问可联系考拉客服：<br>400-088-8188</li>                    </ul>                </div>';
        return function(e) { m.phoneValidWin = r._$allocate({ message: m.__tplParse(t, { accountId: e }), title: "绑定手机号领取", width: 520, clazz: "commTipsPop commTipsPop-tip", btntext: "提交", btnType: "custom", onok: m.__submitPhoneValidation._$bind(this), onclose: function() { clearInterval(m.checkCodeTimer) } })._$show() } }();
    m.__submitPhoneValidation = function(t) {
        var n = m.phoneValidWin,
            i = this;
        if (m.__validatePhoneNum()) { clearInterval(m.checkCodeTimer);
            var a = c("#checkCode"),
                s = a._$val().trim(),
                o = c("#phoneNum")._$val().trim();
            if ("" == s) { c(".checkCodeErr")._$html("<i>&#xe606;</i>验证码不能为空！");
                return !1 }
            d._$request("/personal/phone/verify.html", { method: "post", headers: { "X-Requested-With": "XMLHttpRequest" }, data: e._$object2query({ schemeId: m.currentSchemeId, phoneNum: o, code: s }), type: "json", onload: function(t) {
                    if (445 == t.retcode) {
                        var e = t.retdesc || "未知错误";
                        if (e.indexOf("手机") != -1) c(".phoneNumErr")._$html("<i>&#xe606;</i>" + e);
                        else c(".checkCodeErr")._$html("<i>&#xe606;</i>" + e) } else if (200 == t.retcode) {
                        var a = t.coupon || { couponScheme: { schemeName: "优惠券" } };
                        var s = a.couponScheme || { schemeName: "优惠券" };
                        n._$hide();
                        setTimeout(function() { i.__exchangeSuccess(s.schemeName) }, 200) } else { n._$hide();
                        setTimeout(function() { i.__exchangeFail(t.retdesc || "您可能已经领取过该优惠券了") }, 200) } }, onerror: function() { n._$hide();
                    setTimeout(function() {
                        var t = r._$allocate({ clazz: "commTipsPop", width: 520, message: '<div class="staDialogStyle"><i class="alert">&#xe609;</i>领取失败，请您刷新页面重试！</div>' })._$show();
                        setTimeout(function() { t._$hide() }, 3e3) }, 200) } }) } };
    m.__exchangeFail = function() {
        var t = '<div class="prompt">                    <ul>                        <li class="icon alert"><i>&#xe609;</i>啊哦！肿么回事！优惠券领取失败啦...</li>                        <li class="failReason">出错原因：{failReason}</li>                    </ul>                </div>';
        return function(e) { this._$dispatchEvent("cbexchangefail", e);
            r._$allocate({ message: m.__tplParse(t, { failReason: e }), title: "提示", width: 520, clazz: "commTipsPop", btntext: "确定" })._$show() } }();
    m.__exchangeSuccess = function() {
        var t = '<div class="prompt promptSuccess">                  <ul>                    <li class="icon success"><i>&#xe612;</i>恭喜您！领取成功！</li>                    <li>                      <a href="/personal/my_coupon.html" target="_blank" class="seeMyCoupon">查看我的优惠券</a>                    </li>                  </ul>                </div>';
        return function(e) { this._$dispatchEvent("cbexchangesuccess", m.currentCouponId);
            r._$allocate({ message: m.__tplParse(t, { couponName: e }), title: "提示", width: 520, clazz: "commTipsPop", btntext: "确定" })._$show() } }();
    m.__tplParse = function(t, e, n) {
        function i(e) {
            return t.replace(n || /\\?\{([^}]+)\}/g, function(t, n) {
                if ("\\" == t.charAt(0)) return t.slice(1);
                else return void 0 != e[n] ? e[n] : "" }) }
        if ("[object Array]" !== Object.prototype.toString.call(e)) e = [e];
        var a = [];
        for (var s = 0, o = e.length; s < o; s++) a.push(i(e[s]));
        return a.join("") };
    m.__extendTool = function() { c.isIE678 = !1;
        if (c.isIE678) { c.isIE8 = !!"1" [0];
            c.isIE6 = !(c.isIE8 || document.documentMode && "BackCompat" != document.compatMode);
            c.isIE7 = !c.isIE8 && !c.isIE6 } };
    return h._$$ActivSlide }, 1, 2, 15, 3, 23, 4, 7, 8, 115, 25, 14, 258);
I$(40, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var h;
    l._$$CountDown = t._$klass();
    h = l._$$CountDown._$extend(a._$$EventTarget);
    h.__init = function(t) { this.__supInit(t);
        this.__startTimer() };
    h.__startTimer = function() { this.__timeArr = [];
        o(".js-countdown")._$forEach(this.__setCountTimer._$bind(this)) };
    h.__setCountTimer = function(t, i) {
        function a() {
            var t = +new Date + d,
                i, a = 0;
            if (r > t) a = r - t;
            else location.reload();
            i = n.millisecond2LeftTime(a, !1);
            e._$forEach(i, function(t, e) { o(s[e])._$text("00" == t ? "0" : t) }) }
        var s, r, l, c, d, u;
        t = o(t);
        r = parseFloat(t._$attr("data-endTime"));
        l = parseFloat(t._$attr("data-serverTime"));
        if (r && l && !(r <= l)) { s = t._$children(".js-time");
            c = +new Date;
            d = l - c;
            u = setInterval(a, 500);
            this.__timeArr.push(u);
            a() } };
    h._$refresh = function() { e._$forEach(this.__timeArr, function(t) { window.clearInterval(t) });
        this.__startTimer() };
    return l._$$CountDown
}, 1, 2, 15, 3, 23, 4, 25, 14);
I$(252, ".#<uispace> .m-phonecheck{padding:18px 40px;max-width:450px;}\n.#<uispace> .m-phonecheck .cntbox{padding:0 0 10px 20px;}\n.#<uispace> .m-phonecheck .u-ipt{padding-left:8px;width:242px;height:34px;line-height:34px;\n\tfont-size:14px;border:1px solid #D5D5D5;}\n.#<uispace> .m-phonecheck .remind{margin:5px 0;min-height:10px;line-height:20px;font-size:14px;color:#D22147;}\n.#<uispace> .m-phonecheck .u-checkbtn{display:inline-block;margin-left:18px;text-align:center;width:130px;height:34px;line-height:34px;\n\tborder:1px solid #F3F3F3;cursor:pointer;text-decoration:none;font-size:16px;color:#666;}\n.#<uispace> .m-phonecheck .u-checkbtn:hover{color:#fff;background:#D22147;}\n.#<uispace> .m-phonecheck .u-checkbtn-1{background-color:#C1C1C1;color:#fff;border-color:#C1C1C1;cursor:not-allowed;}\n.#<uispace> .m-phonecheck .u-checkbtn-1:hover{background-color:#C1C1C1;}\n.#<uispace> .m-phonecheck .btnbox{text-align:center;}\n.#<uispace> .m-phonecheck .u-btn{display:inline-block;width:120px;height:40px;line-height:40px;background:#D22147;cursor:pointer;text-decoration:none;color:#fff;font-size:18px;}\n.#<uispace> .m-phonecheck .text{margin:20px 20px;line-height:24px;font-size:14px;text-align:left;color:#333;}\n.#<uispace> .m-phonecheck .u-link{margin-left:10px;font-size:14px;}\n.#<uispace> .m-phonecheck .alarm{padding:10px 20px 20px;height:18px;line-height:18px;color:#999;font-size:12px;}\n.#<uispace> .m-phonecheck .alarm .icon{display:inline-block;width:16px;height:16px;background:url(http://mm.bst.126.net/images/index/icon1.png) no-repeat -5px -350px;}");
I$(253, '<textarea name="txt" id="#<seedTxt>">\n\t<div>\n\t\t<div class="m-phonecheck">\n\t\t\t<div class="j-flag">\n\n\t\t\t</div>\n\t\t\t<div class="cntbox">\n\t\t\t\t<div class="f-cb">\n\t\t\t\t\t<input type="text" placeholder="请输入手机号" class="u-ipt f-fl j-flag">\n\t\t\t\t\t<a class="u-checkbtn f-fl j-flag">获取验证码</a>\n\t\t\t\t</div>\n\t\t\t\t<p class="remind"><span class="f-dn j-flag">请填写正确的手机号码！</span></p>\n\t\t\t\t<div>\n\t\t\t\t\t<input type="text" placeholder="请输入正确的验证码" class="u-ipt j-flag">\n\t\t\t\t</div>\n\t\t\t\t<p class="remind"><span class="f-dn j-flag">请输入验证码！</span></p>\n\t\t\t</div>\n\t\t\t<div class="btnbox">\n\t\t\t\t<a class="u-btn j-flag">提交</a>\n\t\t\t\t<a class="u-link f-dn j-flag" href="/">去首页&gt;</a>\n\t\t\t</div>\n\t\t\t<div class="alarm j-flag f-dn">\n\t\t\t\t<p><span class="icon">&nbsp;</span>绑定后不可解绑且3个月内不可更换，3个月后可在个人中心更换绑定其他手机。有疑问请联系考拉客服：400-088-8188</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</textarea>\n<textarea name="jst" id="#<seedMessage>">\n\t<p class="text">${message}</p>\n</textarea>');
I$(27, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var h = e._$pushCSSText(i),
        f = s._$parseUITemplate(a),
        _ = f["seedTxt"],
        p = f["seedMessage"],
        m = s._$addNodeTemplate(s._$getTextTemplate(_));
    r._$$PhoneCheckWindow = NEJ.C();
    u = r._$$PhoneCheckWindow._$extend(t);
    u.__reset = function(t) { t.title = t.title || "绑定手机号领取";
        this.__super(t);
        if (t.title) o._$render(this.__textbox, p, { message: t.text });
        if (t.showLinkBtn) e._$delClassName(this.__linkBtn, "f-dn");
        if (t.showbtAlarm) e._$delClassName(this.__alarmBox, "f-dn") };
    u.__destroy = function(t) { this.__super(t) };
    u.__initXGui = function() { this.__seed_css = h;
        this.__seed_html = m };
    u.__initNode = function() { this.__super();
        var t = e._$getByClassName(this.__body, "j-flag");
        this.__textbox = t[0];
        this.__phoneipt = t[1];
        this.__checkbtn = t[2];
        this.__remindnum = t[3];
        this.__checkipt = t[4];
        this.__remindcode = t[5];
        this.__submitbtn = t[6];
        this.__linkBtn = t[7];
        this.__alarmBox = t[8];
        n._$addEvent(this.__checkbtn, "click", this.__onCheckBtnClick._$bind(this));
        n._$addEvent(this.__submitbtn, "click", this.__onSubmitBtnClick._$bind(this));
        n._$addEvent(this.__phoneipt, "focus", this.__onPhoneIptFocus._$bind(this));
        n._$addEvent(this.__checkipt, "focus", this.__onCheckIptFocus._$bind(this)) };
    u.__onCheckBtnClick = function() {
        var t = this.__phoneipt.value.trim();
        if (this.__checkPhone(t)) { e._$addClassName(this.__remindnum, "f-dn");
            if (!this.isSending) this._$dispatchEvent("oncheckcode", t) } else { this.__remindnum.innerText = "请输入正确的手机号码！";
            e._$delClassName(this.__remindnum, "f-dn") } };
    u._$closeCheckCode = function() {
        if (!this.time) { e._$addClassName(this.__checkbtn, "u-checkbtn-1");
            this.isSending = !0;
            this.time = 59;
            this.timer = window.setInterval(function() { this.__onShowLefTime(this.time) }._$bind(this), 1e3) } };
    u.__onShowLefTime = function(t) {
        if (t >= 10) this.__checkbtn.innerText = "再次发送(" + t + ")";
        else this.__checkbtn.innerText = "再次发送(0" + t + ")";
        this.time = t - 1;
        if (this.time < 0) { window.clearInterval(this.timer);
            e._$delClassName(this.__checkbtn, "u-checkbtn-1");
            this.__checkbtn.innerText = "再次发送";
            this.isSending = !1;
            this.time = 0 } };
    u.__onSubmitBtnClick = function() {
        var t = this.__phoneipt.value.trim(),
            n = this.__checkipt.value.trim();
        if (this.__checkPhone(t) && this.__checkCode(n)) { e._$addClassName(this.__remindnum, "f-dn");
            e._$addClassName(this.__remindcode, "f-dn");
            this._$dispatchEvent("onsubmit", t, n) } else {
            if (!this.__checkPhone(t)) e._$delClassName(this.__remindnum, "f-dn");
            if (!this.__checkCode(n)) e._$delClassName(this.__remindcode, "f-dn") } };
    u.__onPhoneIptFocus = function() { e._$addClassName(this.__remindnum, "f-dn") };
    u.__onCheckIptFocus = function() { e._$addClassName(this.__remindcode, "f-dn") };
    u.__checkPhone = function(t) {
        return /0?(13|14|15|17|18)[0-9]{9}/.test(t) ? !0 : !1 };
    u.__checkCode = function(t) {
        return t ? !0 : !1 };
    u._$showError = function(t) {
        if (t && t.type && "code" == t.type) { this.__remindcode.innerText = t.message || "请输入正确的验证码！";
            e._$addClassName(this.__remindnum, "f-dn");
            e._$delClassName(this.__remindcode, "f-dn") } else if (t && t.type && "phonenum" == t.type) { this.__remindnum.innerText = t.message || "请输入正确的手机号码！";
            e._$delClassName(this.__remindnum, "f-dn");
            e._$addClassName(this.__remindcode, "f-dn") } };
    return r._$$PhoneCheckWindow }, 229, 4, 3, 252, 253, 233, 239);
I$(464, '{#if hasTimeline}\n  <date-timeline timelineData="{timelineData}" on-goodsChange="{this._$goodsChange($event)}" kaolaSystemTime="{kaolaSystemTime}"></date-timeline>\n{/if}\n\n<!-- 商品列表 -->\n<section class="m-seckillGoodsList {typeClass} {typeExraClass}">\n  <div class="goodsListWrap clearfix">\n    {#list goodsList as goods}\n    <!-- goods.status //0\'未开始\',1\'进行中\',2\'已结束\',3\'已开抢\',4\'距离开始不到15分钟\',5\'已抢光\' -->\n    <!-- 一排一 -->\n    <div class="goodsw clearfix">\n      <a class="goodsimg" href="/product/{goods.goodsId}.html" title="{goods.title}" target="_blank">\n        {#if !!goods.lazyreload}\n        <img class="img-lazyload"\n             src="{__cdnBaseUrl}images/blank.gif"\n             lazyload="{goods.imageUrl|imgThumbnailUrl:imgWidth,imgHeight}"\n             data-src="{goods.imageUrl|imgThumbnailUrl:imgWidth,imgHeight}"\n             alt="{goods.title}">\n        {#else}\n        <img src="{goods.imageUrl|imgThumbnailUrl:imgWidth,imgHeight}" alt="{goods.title}">\n        {/if}\n        <span class="m-sqarricon">\n          <p>限量<br>{goods.limitGoodsStore||0}件</p>\n          <i></i>\n        </span>\n        {#if goods.status == 5}<span class="w-icon w-icon-13">&nbsp;</span>{/if}\n        {#if goods.status == 2}<span class="w-icon w-icon-over">&nbsp;</span>{/if}\n        {#if !!goods.skuList && goods.skuList.length > 1} <!-- 多sku标识 -->\n          <span class="u-multiicon">&nbsp;</span>\n        {/if}\n      </a>\n\n      <div class="goodsinfo">\n        <a class="tit" href="/product/{goods.goodsId}.html" title="{goods.title}" target="_blank" r-html="{goods.titleHtml||goods.title}"></a>\n        {#if showType == 1}\n        <a class="subtit" href="/product/{goods.goodsId}.html" title="{goods.desc}" target="_blank">{goods.desc}</a>\n        {#elseif showType == 2}\n        <a class="subtit f-ellipsis" href="/product/{goods.goodsId}.html" title="{goods.introduce}" target="_blank">{goods.introduce}</a>\n        {/if}\n\n        <!-- 一排一+无时间轴+未开始或不到15分钟 -->\n        {#if !hasTimeline && showType == 1 && (goods.status == 0 || goods.status == 4)}\n          <span class="sectime">{goods.noTimelineTimeShow.str}</span>\n        {/if}\n        <div class="statusw">\n          <span class="pricetit">秒杀价：</span>\n          <span class="seckillprice">￥<em>{goods.seckillPrice}</em></span>\n          <span class="marketprice">￥<del>{goods.marketPrice}</del></span>\n          {#if goods.status == 0}<!-- 0未开始 -->\n            {#if hasTimeline || showType == 1}\n            <a class="smsnotice f-trans j-activityTplSmsNotice"\n               on-click="{this.__onSmsNotice(goods.startTimeShow, goods)}">开抢提醒</a>\n            {#else} <!-- 无时间轴+非一排一 -->\n            <a class="smsnotice z-notimeline f-trans j-activityTplSmsNotice"\n               on-click="{this.__onSmsNotice(goods.startTimeShow, goods)}">\n              <i class="s1">{goods.noTimelineTimeShow.month}{#if showType==5}<br/>{/if}{goods.noTimelineTimeShow.time}开始秒杀</i>\n              <i class="s2">开抢提醒</i>\n            </a>\n            {/if}\n          {#elseif goods.status == 4}<!-- 4距离开始不到15分钟 -->\n            {#if hasTimeline || showType == 1}\n              <span class="about2seckill">即将秒杀...</span>\n            {#else} <!-- 无时间轴+非一排一 -->\n              <span class="about2seckill z-notimeline">\n                <i class="s1">{goods.noTimelineTimeShow.str}</i>\n                <i class="s2">即将秒杀..</i>\n              </span>\n            {/if}\n          {#elseif goods.status == 1 || goods.status == 3}<!-- 1进行中 3已开抢 -->\n          <a class="buyimd f-trans"\n             href="/product/{goods.goodsId}.html"\n             target="_blank"\n             title="马上去抢"\n            >马上去抢</a>\n          {#elseif goods.status == 2 || goods.status == 5}<!-- 2已结束 or 5已抢光 -->\n            <a class="original2buy f-trans"\n               href="/product/{goods.goodsId}.html"\n               target="_blank"\n               title="原价商品仍有优惠哦~"\n              >原价商品仍有优惠哦~</a>\n          {/if}\n        </div>\n      </div>\n    </div>\n    {/list}\n  </div>\n</section>');
I$(594, '<div class="m-smsnotice">\n  <div r-hide="{!!successDialog || !!errorDialog}">\n    <div class="m-smsnotice-msg" r-html="{msg}"></div>\n    <div class="m-smsnotice-number">\n      <label>\n        <input class="m-smsnotice-numberCheck" type="checkbox" r-model="{phoneCheck}" {#if !appCheck}disabled{/if} />\n        <span class="m-smsnotice-title">手机号码：</span>\n      </label>\n      <input class="m-smsnotice-phoneNumber" type="text" placeholder="请输入手机号"\n             r-model="{phoneNumber}" maxlength=11 autocomplete="off"\n             on-focus="{this.__phoneNumFocus()}" on-blur="{this.__phoneNumBlur()}"/>\n\n      <div class="m-smsnotice-error">{errMsg}</div>\n    </div>\n    <div class="m-smsnotice-app">\n      <label>\n        <input class="m-smsnotice-appReceive" type="checkbox" r-model="{appCheck}" {#if !phoneCheck}disabled{/if} />\n        <span class="m-smsnotice-title">考拉客户端接收提醒</span>\n        <br>\n        <span class="m-smsnotice-appmsg">没安装立即扫描二维码下载吧！下载后请登录设置提醒的账号</span>\n      </label>\n\n      <div class="m-smsnotice-qrcode">\n        <img src="//mm.bst.126.net/images/index/2dcode-app.jpg" alt="手机版考拉客户端二维码">\n      </div>\n      <i class="m-smsnotice-qrcodearr"></i>\n    </div>\n  </div>\n\n  <!-- 成功窗口 -->\n  <div class="m-smsnotice-success" r-hide="{!successDialog}">\n    <div class="title"><i class="ft" r-html="{\'&#xe612;\'}"></i>设置成功!</div>\n    <div class="msg">\n      考拉将在开抢前通过<em class="red">免费短信或考拉app</em>通知您\n      <br>\n      （<em>{counter}</em>秒后自动关闭）\n    </div>\n  </div>\n\n  <!-- 失败窗口 -->\n  <div class="m-smsnotice-failure" r-hide="{!errorDialog}">\n    <div class="title"><i class="ft" r-html="{\'&#xe604;\'}"></i>设置失败!</div>\n    <div class="msg">因为网络等原因，设置失败。请重试。</div>\n  </div>\n\n  <!-- 短信提醒确认 -->\n  <div class="m-smsnotice-confirm" r-hide="{!!successDialog || !!errorDialog}">\n    <span class="m-smsnotice-error">{errMsg2}</span>\n    <span class="m-smsnotice-confirmBtn" on-click="{this.__confirm()}">确定</span>\n    <span class="m-smsnotice-cancelBtn" on-click="{this.__hide()}">取消</span>\n  </div>\n\n  <!-- 失败确认 -->\n  <div class="m-smsnotice-confirm" r-hide="{!errorDialog}" on-click="{this.__hide()}">\n    <span class="m-smsnotice-confirmBtn">确认</span>\n  </div>\n</div>');
I$(465, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _, p) {
    var m = /(^1[3|4|5|7|8|]\d{9}$)|(^1[3|4|5|7|8|][0-9]{1}[*]{4}[0-9]{4}$)/;
    var g = r.extend({ content: l, data: { title: "开抢提醒", width: 520 }, init: function(t) {
            var e = this;
            e.supr();
            e.__initDate();
            e.$on("success", function() { e.__successDialog() });
            e.$on("error", function() { e.__errorDialog() });
            e.$on("hide", function() { e.__hide() }) }, __initDate: function() {
            var t = this,
                n = t.data;
            n.title = n.title || "开抢提醒";
            n.msg = n.msg || "我们将在开抢前通过手机发送通知提醒您。";
            var i = n.msg.split("*");
            if (i.length % 2 == 1 || i.length > 1) { n.msg = "";
                e._$forEach(i, function(t, e) { n.msg += e % 2 == 1 ? "<em>" + t + "</em>" : t }) }
            t.__initPhoneNumber();
            n.phoneCheck = n.phoneCheck || !0;
            n.appCheck = n.appCheck || !0;
            n.errorDialog = !1;
            n.successDialog = !1;
            t.$update() }, __hide: function() {
            if (this.$refs && this.$refs["modal"]) this.destroy() }, __successDialog: function() {
            var t = this,
                e = t.data;
            e.successDialog = !0;
            e.errorDialog = !1;
            if (e.phoneNumber && e.phoneCheck) i._$cookie("NTES_KAOLA_NUMREG", { value: e.phoneNumber, path: "/", domain: ".kaola.com", expires: 7 });
            var n = 2,
                a;
            e.counter = 3;
            a = setInterval(function() {
                if (n != -1) { e.counter = n--;
                    t.$update() } else { clearInterval(a);
                    t.__hide() } }, 1e3);
            t.$update() }, __errorDialog: function() {
            var t = this.data;
            t.errorDialog = !0;
            t.successDialog = !1;
            this.$update() }, __confirm: function() {
            var t = this,
                e = t.data;
            var n = e.phoneCheck,
                i = e.appCheck,
                a = e.phoneNumber,
                s = {};
            if (n || i) {
                if (n)
                    if (t.__checkPhoneNumber(a)) s.phoneNum = a;
                    else return;
                if (i) s.appNotification = !0;
                t.$emit("sending", s) } }, __checkPhoneNumber: function(t) {
            var e, n = this.data;
            e = "" != t && m.test(t);
            if (!e) n.errMsg = "" == t ? "手机号不能为空" : "请填写正确的手机号码";
            else n.errMsg = "";
            return e }, __phoneNumFocus: function() { this.data.errMsg = "" }, __phoneNumBlur: function() { this.__checkPhoneNumber(this.data.phoneNumber || "") }, __initPhoneNumber: function() {
            var t = this,
                e = t.data;
            var n = i._$cookie("NTES_KAOLA_NUMREG");
            if (n && t.__checkPhoneNumber(n)) e.phoneNumber = n;
            else d._$request("/getUserMobile.html", { method: "GET", type: "json", onload: function(i) {
                    if (i && 200 == i.retcode) { n = i.result.userMobile;
                        if (t.__checkPhoneNumber(n)) { e.phoneNumber = n;
                            t.$update();
                            return } }
                    e.phoneNumber = "";
                    t.$update() }, onerror: function() { e.phoneNumber = "";
                    t.$update() } }) } });
    u._$$smsNoticeTpl = t._$klass();
    p = u._$$smsNoticeTpl._$extend(s._$$EventTarget);
    p.__init = function(t) {
        var e = this;
        e.__supInit(t);
        e.__confirm = t.confirm || function() {};
        e.__refreshTopbar = t.refreshTopbar || function() {};
        e.__msg = t.msg || "";
        e.__title = t.title || "" };
    p._$show = function() {
        var t = this;
        n.afterLogin(function() { t.__refreshTopbar();
            t._smsNotice = new g({ data: { title: t.__title, msg: t.__msg } });
            t._smsNotice.$on("sending", t.__confirm) });
        return t };
    p._$hide = function() { this._smsNotice.$emit("hide") };
    p._$successDialog = function() { this._smsNotice.$emit("success") };
    p._$errorDialog = function() { this._smsNotice.$emit("error") };
    return u._$$smsNoticeTpl }, 1, 2, 26, 11, 3, 23, 4, 128, 594, 25, 14);
I$(595, '<!-- 日期时间轴（1天1时间点 不显示） -->\n{#if hasTimeline && !day1time1}\n<div class="m-seckillTimeline">\n\n  <!--日期轴-->\n  {#if dayNtimeN}\n  <div class="m-seckillTimelineDate" style="background-color: {timeLineDateBgColor};">\n    <ul class="{days.bigCls}">\n      {#list days as day}\n      <!-- .z-act .z-last -->\n      <li class="{day.classAct} {day.classLast}" style="width: {100/days.length}%;"\n          on-click="{this.__dayClick($event, day_index)}">\n        {day.seckillDate|format:\'M月d日\'}\n        <i></i>\n      </li>\n      {/list}\n    </ul>\n  </div>\n  {/if}\n\n  <!--时间轴-->\n  {#if !dayNtime1}\n  <!-- 多天多场次 -->\n  <div class="m-seckillTimelineTime">\n    <ul class="{today.bigCls}">\n      {#list today.seckillEventList as time}\n      <!-- .z-done .z-act .z-last -->\n      <li class="{time.classAct} {time.classLast} {time.classDone}"\n          on-mouseenter="{this.__timeMouseenter($event)}" on-mouseleave="{this.__timeMouseleave($event)}"\n          on-click="{this.__timeClick($event, time_index)}"\n          style="width: {time.width}px;border-right:1px solid {hoverTimeLineTimeBgColor};background:{timeLineTimeBgColor};">\n        {time.startTime|format:\'H:mm\'}{time.statusStr}\n      </li>\n      {/list}\n    </ul>\n  </div>\n\n  <!-- 多天一个场次 -->\n  {#elseif dayNtime1}\n  <div class="m-seckillTimelineTime {mutiCls||\'\'}">\n    <ul class="{days.bigCls}">\n      {#list days as day}\n        {#list day.seckillEventList as time}\n        <!-- .z-done .z-act .z-last -->\n        <li class="{day.classAct} {day.classLast} {time.classDone}"\n            on-mouseenter="{this.__timeMouseenter($event)}" on-mouseleave="{this.__timeMouseleave($event)}"\n            on-click="{this.__dayClick($event, day_index)}"\n            style="width: {day.width}px;border-right:1px solid {hoverTimeLineTimeBgColor};background:{timeLineTimeBgColor};">\n          {time.datetime|format:\'M月d日\'}{#if !!dayNtime1N}<br>{time.startDatetime|format:\'H:mm\'}{/if}{time.statusStr}\n        </li>\n        {/list}\n      {/list}\n    </ul>\n  </div>\n  {/if}\n\n</div>\n{/if}\n');
I$(466, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f) {
    return l.extend({
        name: "date-timeline",
        template: r,
        config: function(t) {
            var e = this;
            t.config = t.timelineData.config;
            t.days = t.timelineData.days;
            t.today = { seckillEventList: [] };
            t.seckillEvent = { goodsList: [] };
            t.sysTime = new Date(parseInt(t.kaolaSystemTime || window.__kaolaSeckillServerTime || +new Date));
            e.__dealDate2Time();
            var n = t.config;
            t.hasTimeline = 1 == (n.templateType || 1);
            t.timeLineDateBgColor = n.timeLineDateBgColor || "#fff";
            t.timeLineTimeBgColor = n.timeLineTimeBgColor || "#333";
            t.hoverTimeLineTimeBgColor = n.hoverTimeLineTimeBgColor || "#262626";
            e.__initTimelineData() },
        __initTimelineData: function() {
            var t = this,
                n = t.data,
                i = n.days;
            i.bigCls = i.length < 5 ? "z-big" : "";
            var a = t.__getTomorrow();
            e._$forEach(i, function(t, i, s) {
                var o = 0,
                    r = 0,
                    l = void 0,
                    c = void 0;
                t.bigCls = t.seckillEventList.length < 5 ? "z-big" : "";
                e._$forEach(t.seckillEventList, function(n, i, a) { n.statusStr = "";
                    n.classAct = "";
                    n.classLast = "";
                    if (0 == n.status) { n.statusStr = "开始秒杀";
                        if (!c) c = n } else if (1 == n.status) { n.statusStr = "进行中";
                        o++;
                        n.classAct = "z-act" } else if (2 == n.status) { n.statusStr = "已结束";
                        n.classDone = "z-done" } else if (3 == n.status) { n.statusStr = "已开抢";
                        r++;
                        l = n }
                    if (a.length == i + 1) { n.classLast = "z-last";
                        n.width = 1e3 / t.seckillEventList.length } else n.width = 1e3 / t.seckillEventList.length - 1;
                    n.datetime = t.seckillDate;
                    n.startTime = t.seckillDateStr + " " + n.startTime;
                    n.startDatetime = e._$var2date(n.startTime.replace(/-/g, "/"));
                    n.endTime = t.seckillDateStr + " " + n.endTime });
                if (0 == o)
                    if (r > 0) l.classAct = "z-act";
                    else if (c) c.classAct = "z-act";
                else { t.seckillEventList[t.seckillEventList.length - 1].classAct = "z-act";
                    if (t == n.today && a) { n.today.classAct = "";
                        a.classAct = "z-act";
                        n.today = a } } });
            e._$forEach(n.today.seckillEventList, function(t, e, i) {
                if ("z-act" == t.classAct) n.seckillEvent = t });
            t.$root.$on("inject", function() { t.$emit("goodsChange", n.seckillEvent) }) },
        __getTomorrow: function() {
            var t = this,
                n = t.data;
            var i = n.today,
                a = n.days,
                s = null,
                o = !1;
            e._$forEach(a, function(t, e) {
                if (o) { o = !1;
                    s = t }
                if (t == i) o = !0 });
            return s },
        __dealDate2Time: function() {
            var t = this,
                n = t.data,
                i = n.sysTime,
                a = n.days,
                s = !1;
            var o, r, l, c, d = [];
            n.day1time1 = 1 == a.length && 1 == (a[0].seckillEventList || []).length;
            n.day1timeN = 1 == a.length && (a[0].seckillEventList || []).length > 1;
            n.dayNtime1 = a.length > 1;
            n.dayNtimeN = a.length > 1;
            e._$forEach(a, function(t, u, h) { o = t.seckillEventList[0];
                if (o)
                    if (1 == o.status) r = t;
                    else if (3 == o.status) l = t;
                else if (0 == o.status)
                    if (!c) c = t;
                if ((t.seckillEventList || []).length > 1) n.dayNtime1 = !1;!!o && d.push(o.startTime || "");
                t.seckillDateStr = t.seckillDate;
                var f = t.seckillDate = e._$var2date(t.seckillDateStr.replace(/-/g, "/"));
                var _ = f.getFullYear() == i.getFullYear() && f.getMonth() == i.getMonth() && f.getDate() == i.getDate();
                t.classAct = _ ? "z-act" : "";
                if (_) { n.today = t;
                    s = !0 }
                if (a.length == u + 1) { t.classLast = "z-last";
                    t.width = 1e3 / a.length } else t.width = 1e3 / a.length - 1 });
            if (!s) {
                if (r) n.today = r;
                else if (l) n.today = l;
                else if (c) n.today = c;
                else n.today = a[0];
                n.today.classAct = "z-act" }
            if (n.dayNtime1) n.dayNtimeN = !1;
            if (n.dayNtime1) {
                n.dayNtime1N = !t.__firstTimeEveryDayIsEq(d);
                if (n.dayNtime1N) n.mutiCls = "z-muti"
            }
        },
        __firstTimeEveryDayIsEq: function(t) {
            if (0 == t.length) return !0;
            var n = t[0],
                i = !0;
            e._$forEach(t, function(t) {
                if (n != t) i = !1 });
            return i },
        __timeMouseenter: function(t) {
            var e = n._$getElement(t),
                i = this.data;
            a._$setStyle(e, "background", i.hoverTimeLineTimeBgColor) },
        __timeMouseleave: function(t) {
            var e = n._$getElement(t),
                i = this.data;
            a._$setStyle(e, "background", i.timeLineTimeBgColor) },
        __timeClick: function(t, n, i) {
            var a = this,
                s = a.data;
            var o = s.today.seckillEventList,
                r = o[n];
            if (r && "z-act" != r.classAct || i) { e._$forEach(o, function(t) { t.classAct = "" });
                r.classAct = "z-act";
                s.seckillEvent = r;
                a.$emit("goodsChange", r) } },
        __dayClick: function(t, n) {
            var i = this,
                a = i.data,
                s = a.days,
                o = s[n];
            if (o != a.today) { a.today.classAct = "";
                a.today = o;
                a.today.classAct = "z-act";
                e._$forEach(a.today.seckillEventList, function(t, e) {
                    if ("z-act" == t.classAct) i.__timeClick(null, e, !0) }) } },
        init: function(t) {
            var e = this }
    }).use("timeout")
}, 1, 2, 3, 23, 4, 25, 14, 595, 151);
I$(266, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _, p) {
    return c.extend({ template: l, config: function(t) { t.timelineData = { days: t.days, config: t.config };
            t.__cdnBaseUrl = window.__cdnBaseUrl || "/";
            t.hasTimeline = 1 == (t.config.templateType || 1) }, init: function(t) {
            var e = this;
            t.sysTime = new Date(parseInt(t.kaolaSystemTime || window.__kaolaSeckillServerTime || +new Date));
            t.sysTimeMills = +t.sysTime;
            e.__dealGoodsClass();
            if (!t.hasTimeline) e.__dealNoTimelineGoods(t.days) }, __dealNoTimelineGoods: function(t) {
            var e = [],
                i = this,
                a = i.data;
            n._$forEach(t, function(t, a) {
                var s = t.seckillDate;
                n._$forEach(t.seckillEventList, function(t, n, a) { t.startTime = s + " " + t.startTime;
                    t.endTime = s + " " + t.endTime;
                    i._$goodsChange(t);
                    e = e.concat(t.goodsList || []) }) });
            a.goodsList = e;
            i.$update() }, __dealGoodsClass: function() {
            var t = this,
                e = t.data,
                n = e.config;
            var i = n.showType = parseInt(n.showType || -1);
            e.showType = i;
            e.typeClass = "secKillLineOf" + i;
            e.typeExraClass = "";
            if (1 == i) { e.imgWidth = 488;
                e.imgHeiht = 300 } else if (2 == i) e.imgWidth = e.imgHeiht = 200;
            else if (3 == i || 4 == i || 5 == i) { e.imgWidth = e.imgHeiht = 328;
                e.typeExraClass = "secKillLineOf345" } }, _$goodsChange: function(t) {
            var i = this,
                a = i.data,
                s = a.config;
            a.status = t.status;
            a.startTime = t.startTime.replace(/-/g, "/");
            a.endTime = t.endTime.replace(/-/g, "/");
            var o = +n._$var2date(a.startTime),
                r = o - a.sysTimeMills,
                l = r > 0 && r < 9e5;
            n._$forEach(t.goodsList, function(t, o, r) {
                if (!t._prepared) { t._prepared = !0;
                    t.startTimeShow = i.__calcStartTimeShow(a.startTime);
                    t.noTimelineTimeShow = i.__calcNoTimelineTimeShow(a.startTime);
                    t.status = a.status;
                    if (0 == t.status && l) t.status = 4;
                    t.limitGoodsStore = parseInt(t.limitGoodsStore) || 0;
                    e.extend(t, t.goods);
                    if (1 == a.showType) t.imageUrl = t.onePaiOneGoodsImg || t.imageUrl;
                    if ("number" == typeof t.memberCount && t.memberCount > 0) { t.titleHtml = "<b>" + t.memberCount + (t.memberUnitName || "件") + "装</b>&nbsp;|&nbsp;" + t.title;
                        t.title = t.memberCount + (t.memberUnitName || "件") + "装 | " + t.title }
                    if (t.isSeckGoodsSoldOut)
                        if (2 != t.status && 0 != t.status && 4 != t.status) t.status = 5;
                    if (1 == t.status || 3 == t.status)
                        if (t.endTime && +n._$var2date(t.endTime) < a.sysTimeMills) t.status = 5;
                    if (parseInt((o + 1) / (s.showType || 1)) > 3) t.lazyreload = !0 } });
            if (a.hasTimeline) a.goodsList = t.goodsList }, __calcNoTimelineTimeShow: function(t) {
            var e = n._$var2date(t),
                i = { month: n._$format(e, "M月d日"), time: n._$format(e, "HH:mm"), str: n._$format(e, "M月d日 HH:mm") + "开始秒杀" },
                a = this.data.sysTime;
            if (e.getYear() == a.getYear() && e.getMonth() == a.getMonth() && e.getDate() == a.getDate()) { i.month = n._$format(e, "今天");
                i.time = n._$format(e, "HH:mm");
                i.str = n._$format(e, "今天HH:mm") + "开始秒杀" }
            return i }, __calcStartTimeShow: function(t) {
            function e(t) {
                return (t < 10 ? "0" : "") + t }
            var i = this,
                a = i.data,
                s = n._$var2date(t),
                o = s.getDate(),
                r = +s,
                l = a.sysTime,
                c = l.getDate(),
                d = +l,
                u = r - d,
                h = 864e5,
                f = 1728e5,
                _ = new Date(d + h),
                p = _.getDate(),
                m = "";
            var g = e(s.getHours()),
                v = e(s.getMinutes());
            if (u > 0 && u < h && c == o) m = g + ":" + v;
            else if (u > 0 && u < f && p == o) m = "明天" + g + ":" + v;
            else m = n._$format(s, "yyyy年MM月dd日 HH:mm");
            return m }, __onSmsNotice: function(t, e) {
            var i = this,
                a = i.data,
                s;
            var o = d._$allocate({ msg: "该商品将于*" + t + "*开始秒抢，我们将在开抢前通过手机发送通知提醒您。", confirm: function(t) {
                    function i(t, e) {
                        if (!t) return !1;
                        else return e ? 200 == t.retcode : 0 == t.code }
                    var l = a.zone = a.zone || {};
                    var c = l.activityType || -1,
                        d = 9 == c,
                        u = d ? "/short/message/temai/temaiNotify.html" : "/short/message/seckill/notify.html";
                    if (d) { t.price = e.seckillPrice;
                        if (e.startTime && "number" == typeof e.startTime) { s = new Date(parseInt(e.startTime));
                            t.startTime = n._$format(s, "yyyy-MM-dd HH:mm:ss") }
                        t.tabId = l.activitySchemeId || "" }
                    t.goodsId = e.goodsId;
                    r._$request(u, { method: "GET", query: t, headers: { "X-Requested-With": "XMLHttpRequest" }, type: "json", onload: function(t) {
                            if (!i(t, d)) o._$errorDialog();
                            else o._$successDialog() }, onerror: function() { o._$errorDialog() } }) }, refreshTopbar: function() { i.$emit("cbloginOk") } })._$show() } }).use("timeout") }, 1, 15, 2, 3, 23, 4, 25, 14, 464, 151, 465, 466);
I$(46, function(t, e, n, i, a, s, o, r, l, c, d, u, h) { l._$$seckillArea = t._$klass();
    h = l._$$seckillArea._$extend(i._$$EventTarget);
    h.__init = function(t) {
        var e = this;
        e.__supInit(t);
        var n = window.__kaolaSeckillModuleJsonList || [];
        for (var i = 0, a = n.length, s; i < a; i++) { s = n[i];
            var o = new r({ data: { zone: s.json || {}, days: s.json.groupList || [], config: s.config || {} } });
            o.$on("inject", function() { t.goodsChange() });
            o.$on("goodsChange", function() { t.goodsChange() });
            o.$on("cbloginOk", function() { t.cbloginOk() });
            var l = document.getElementById(s.id);
            l.innerHTML = "";
            o.$inject(l) } };
    return l._$$seckillArea }, 1, 2, 3, 23, 4, 25, 14, 266);
I$(467, '<div class="iDialogMain couponModal">\n\t<div class="cnt">\n\t    <div class="noticeText">{#if hasGot}您已经领取了10元优惠券，依然可以喊好友领券哦{#else}分享我的2015，领取<b>10元优惠券</b>{/if}</div>\n\t    <div class="qrCodeWrap clearfix">\n\t    \t<span ref="QRCode" class="qrCode"></span>\n\t    \t{#if hasGot}\n\t    \t<div class="hasGot">扫码分享到微信</div>\n\t    \t{#else}\n\t    \t<div class="notGet">\n\t    \t\t<p class="tit">微信扫一扫</p>\n\t    \t\t<p>分享后，10元券</p>\n\t    \t\t<p>会自动派发到您的账户中</p>\n\t    \t\t<p><a class="myCoupon" href="/personal/my_coupon.html" target="_blank">查看我的优惠券&nbsp;&gt;</a></p>\n\t    \t</div>\n\t    \t{/if}\n\t    </div>\n\t</div>\n\t<div class="btnbar f-tac">\n\t  <a class="btn" href="javascript:void(0)" on-click={this.confirm()}>确认</a>\n\t</div>\n</div>');
I$(270, function(t, e, n, i, a, s, o) {
    var r = a.extend({ content: s, data: { title: "分享领10元券", width: 520 }, init: function() { this.supr();
            this.makeQRCode(this.$refs.QRCode, "http://m.kaola.com/newyear/timemachine.html?from=pcScan&QRCode=" + (this.data.QRCode || ""), 120, 120, "#000000", "#ffffff") }, config: function() {}, confirm: function() { this.destroy() }, makeQRCode: function(t, e, n, i, a, s) { new QRCode(t, { text: e, width: n, height: i, colorDark: a, colorLight: s, correctLevel: QRCode.CorrectLevel.H }) } });
    return r }, 15, 4, 3, 2, 128, 467, 20);
I$(461, function(t, e, n, i, a, s, o, r, l, c, d) {
    var u;
    o._$$Marquee = t._$klass();
    d = o._$$Marquee._$extend(i._$$EventTarget);
    d.__reset = function(t) { this.__super(t);
        this.__box = t.box;
        this.__duration = t.duration || 800;
        this.__interval = t.interval || 3e3;
        this.__offset = t.offset || 1;
        var e = a._$getChildren(this.__box);
        this.__children = [];
        for (var n = 0, i = e.length; n < i; n++)
            if (1 == e[n].nodeType) this.__children.push(e[n]);
        this.__height = this.__children[0].clientHeight;
        this.__index = 0;
        this.__isRegularjs = t.isRegularjs;
        this.__initMarquee() };
    d.__initMarquee = function() { this.__timer = setInterval(this.__doMarquee._$bind(this), this.__interval) };
    d._$resetData = function() {
        if (this.__timer) clearInterval(this.__timer);
        this.__initMarquee() };
    d.__doMarquee = function(t, e) { this.__animation = s._$$AnimEaseIn._$allocate({ from: { offset: 0 }, to: { offset: 1 }, duration: this.__duration, onupdate: function(t) { this.__box.style.top = -(this.__height * this.__offset * t.offset) + "px" }._$bind(this), onstop: function() {
                if (this.__animation) this.__animation = this.__animation._$recycle();
                if (this.__isRegularjs) this._$dispatchEvent("onIntervalDataChange", this.__offset);
                else {
                    var t = this.__box.children;
                    for (var e = 0, n = this.__offset; e < n; e++) this.__box.appendChild(t[e]) }
                this.__box.style.top = "0px" }._$bind(this) });
        this.__animation._$play() };
    return o._$$Marquee }, 1, 2, 3, 23, 4, 234);
I$(504, "{#if total > 1}<ul class=\"m-pagination f-cb\" r-hide=\"!total\"><li on-click={ this.nav(current-1)} class='pageprv {current==1? \"disabled\": \"\"}'><a  href='javascript:void(0);' >上一页</a></li>{#if total - 5 > show * 2}<li  on-click={ this.nav(1)} class={current==1? 'active': ''}><a href='javascript:void(0);'>1</a></li>{#if begin > 2}<li><a>...</a></li>{/if}{#list begin..end as i}<li on-click={ this.nav(i)} class={current==i? 'active': ''}><a href='javascript:void(0);'>{i}</a></li>{/list}{#if (end < total-1)}<li><a>...</a></li>{/if}<li on-click={ this.nav(total)} class={current==total? 'active': ''}><a href='javascript:void(0);'>{total}</a></li>{#else}{#list 1..total as i}<li on-click={ this.nav(i)} class={current==i? 'active': ''}><a href='javascript:void(0);'>{i}</a></li>{/list}{/if}<li on-click={ this.nav(current + 1)} class='pagenxt {current==total? \"disabled\": \"\"}'><a  href='javascript:void(0);' >下一页</a></li></ul>{/if}\n\n");
I$(308, function(t, e) {
    var n = e.extend({ name: "pager", template: t, config: function(t) {
            var e = 5;
            var n = t.show = Math.floor(e / 2);
            t.current = parseInt(t.current || 1);
            t.total = parseInt(t.total || 1);
            this.$watch(["current", "total"], function(e, i) { t.begin = e - n;
                t.end = e + n;
                if (t.begin < 2) t.begin = 2;
                if (t.end > t.total - 1) t.end = t.total - 1;
                if (e - t.begin <= 1) t.end = t.end + n + t.begin - e;
                if (t.end - e <= 1) t.begin = t.begin - n - e + t.end }) }, nav: function(t) {
            var e = this.data;
            if (!(t < 1))
                if (!(t > e.total))
                    if (t !== e.current) { e.current = t;
                        this.$emit("nav", t) } } });
    return n }, 504, 151);
I$(268, function(t, e, n) {
    var i = n.extend({
        watchedAttr: ["current"],
        config: function(e) { t.extend(e, { total: 1, current: 1, limit: 10, list: [] });
            this.$watch(this.watchedAttr, function() {
                if (this.shouldUpdateList()) this.__getList() }) },
        init: function() { this.$on("updatelist", this.__getList.bind(this)) },
        shouldUpdateList: function(t) {
            return !0 },
        getExtraParam: function() {
            return this.data.condition },
        refresh: function(t) { this.data.current = 1;
            this.data.condition = t;
            this.$emit("updatelist") },
        getListParam: function() {
            var e = this.data;
            return t.extend({ limit: e.limit, offset: e.limit * (e.current - 1), lastId: e.lastId }, this.getExtraParam(e)) },
        __bodyResolver: function(e) {
            var n = e.body,
                i = n.list || [];
            t.mergeList(i, this.data.list, this.data.key || "id");
            this.data.total = n.total;
            this.data.list = i;
        },
        __getList: function() {
            var n = this.data;
            var i = { progress: !0, data: this.getListParam(), onload: function(t) { this.__bodyResolver(t) }._$bind(this), onerror: function(t) {
                    var e = this.__errorHandler;
                    e && e(t) } };
            if (this.xdrOption) t.extend(i, this.xdrOption);
            if (i.norest && !e._$isString(i.data)) i.data = e._$object2query(i.data);
            if ("GET" == i.method.toUpperCase()) i.query = i.data;
            this.$request(this.url, i) }
    });
    return i
}, 15, 2, 151, 308);
I$(44, function(t, e, n, i, a, s, o, r, l) {
    var c = {};
    c.gtmCollect = function(t) { window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(t) };
    c.gtmTrigger = function(t) { t = t || "gtmReady";
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: t }) };
    c.gtmReady = function(t) { c.gtmGo(t, e.getUserType()) };
    c.gtmReadyAsync = function(t) { setTimeout(function() {
            if (void 0 === window.isLogin) {
                var n = new i;
                n.$on("logined", function(i) {
                    var a = e.getUserTypeInUser(window.isLogin, i);
                    c.gtmGo(t, a);
                    n = n.destroy() }) } else {
                var a = e.getUserTypeInUser(window.isLogin, window.user);
                c.gtmGo(t, a) } }, 2e3) };
    c.gtmGo = function(i, a) {
        var s = e.getAccountFromCookie(),
            o = t.merge({ com_data: { user_type: a, account: s, account_md5: n._$md52hex(s) } }, i);
        c.gtmCollect(o);
        c.gtmTrigger("gtmReady") };
    return c }, 15, 26, 245, 264);
I$(265, '<div class="cntbox">\n\t<div class="u-close" on-click={this.close()} data-category="新人推广" data-event="推广弹框" data-label="关闭"></div>\n\t<img on-click={this.goSite()} width="100%" src={imageUrl|noProtocol} ref="bgimg"/>\n</div>');
I$(45, function(t, e, n, i, a, s) {
    var o = s.extend({ content: t, data: { width: 760, modalName: "m-onlyimgwin m-novicewin" }, config: function(t) {
            var n = "showNovicePop",
                i = e._$query2object(location.search.slice(1)),
                a = i[n];
            this.data.popid = a;
            this.data.isHidden = !0;
            this.data.paraname = n;
            this.data.cookiename = "NTES_KAOLA_NOVICEPOP_" + this.data.popid }, init: function() { this.needShow(this.data.popid);
            this.supr();
            this.$inject(!1) }, needShow: function(t) {
            if (void 0 !== t) n.isLogin(function(e) {
                if (!e) this.data.__needShow = this.getCookieStat();
                if (this.data.__needShow !== !1) this.getNovicePopDataReq(t) }._$bind(this)) }, getNovicePopDataReq: function(t) { a("/outer/window/user/info.html", { method: "POST", norest: !0, data: { id: t }, type: "json", onload: function(e) {
                    if (e && 200 == e.retcode) {
                        var n = e.retdata,
                            i = n.paidStatus + n.popupStatus;
                        if (n.url && n.imageUrl && 0 === i) { this.data.url = n.url;
                            this.data.imageUrl = n.imageUrl;
                            this.$update();
                            this.hasPopConfirmReq(t);
                            this.$inject(document.body) } else this.resetCookieStat() } else this.resetCookieStat() }._$bind(this), onerror: function() { this.resetCookieStat() }._$bind(this) }) }, getCookieStat: function() {
            var t = this.data.cookiename,
                e = i._$cookie(t);
            if (e) return !1;
            else { i._$cookie(t, { value: !0, expires: 1 });
                return !0 } }, resetCookieStat: function() {
            var t = this.data.cookiename;
            i._$cookie(t, { value: !1, expires: -1 }) }, hasPopConfirmReq: function(t) { a("/outer/window/user/popup.html", { method: "POST", norest: !0, data: { id: t }, type: "json" }) }, goSite: function() {
            var t = this.data,
                e = window.location,
                n = e.pathname,
                i = n.substring(1, n.lastIndexOf("."));
            window._dapush && window._dapush("_trackEvent", "外推弹窗", "点击", "弹窗", { path: i, win_id: t.popid });
            setTimeout(function() { t.url && (e.href = t.url) }, 250) }, preventMove: function(t) { t.preventDefault() } });
    return o }, 265, 2, 15, 11, 6, 128);
I$(47, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) {
    var _;
    d._$$CodeExchange = t._$klass();
    _ = d._$$CodeExchange._$extend(a._$$EventTarget);
    _.__init = function(t) { this.__supInit(t);
        this.__addEvent() };
    _.__addEvent = function() { o(".j-exchangbtn")._$on("click", function(t) {
            var e = this;
            var n = o(this)._$parent(".j-exchangbox", !0)._$children(".j-codetxt", !0),
                i = n._$val().trim();
            if (!s._$hasClassName(e, "z-clicked"))
                if (i) { r("/personal/exchange_coupon_by_password.html", { method: "POST", data: { redeemCode: i }, norest: !0, type: "json", onload: function(t) { s._$delClassName(e, "z-clicked");
                            if (200 == t.retcode) {
                                var i = '<span class="succdesc"><i class="succ"></i>恭喜，口令兑换成功啦!</span>                                        <a href="/" target="_blank" class="link">立即去逛逛&gt;</a>';
                                c._$allocate({ message: i, clazz: "m-dhsuccwin" })._$show();
                                n._$val("") } else if (461 == t.retcode) l._$allocate({ logincallback: function() { o(e)._$trigger("click") } })._$show();
                            else c._$allocate({ message: t.retdesc || "兑换出错" })._$show() }._$bind(this) });
                    s._$addClassName(e, "z-clicked") } else c._$allocate({ message: "请输入口令！" })._$show() }) };
    return d._$$CodeExchange }, 1, 2, 15, 3, 23, 4, 25, 6, 7, 8);
I$(471, function(t, e) {
    var n = {};
    t.extend(Number.prototype, { Round: function(t, e) {
            var n = Math.pow(10, t || 0);
            return 0 == e ? Math.ceil(this * n) / n : Math.round(this * n + (5 - (e || 5)) / 10) / n }, Cint: function(t) {
            return this.Round(0, t) } });
    n.merge = function(t, e) {
        for (var n in e)
            if (e.hasOwnProperty(n)) t[n] = e[n] };
    n.encode = function(t) {
        if (t) return window.encodeURIComponent(t);
        else return "" };
    n.imgThumbnailUrl = function(e, n, i, a) {
        var a = a || 75;
        return t.imgThumbnailUrl(e, n, i, a) };
    n.formatTime = t.formatTime;
    n.addParam = function(t, e, n) {
        if ("" == t) return "javascript:;";
        if (t.indexOf("?") != -1) return t.replace("?", "?" + e + "=" + n + "&");
        else if (t.indexOf("#") != -1) return t.replace("#", "?" + e + "=" + n + "#");
        else return t + "?" + e + "=" + n };
    n.defStr = function(t, e) {
        var t = t || "";
        return "" == t ? e : t };
    n.splitUrlHash = function(t, e) {
        var t = t || "";
        if (1 == e) return "#" + (t.split("#")[1] || "");
        else return t.split("#")[0] };
    n.jointTjQuery = function(t, e, i, a, s, o) {
        var r = "",
            l = "";
        if (t.indexOf("#") != -1) r = t.split("#")[1];
        l = "ri=" + e + "&rt=" + i + "&zid=" + a + "&zp=" + i + s + "&zn=" + n.encode(o);
        if ("" != r) l = l + "#" + r;
        return l };
    n.jointDaLabel = function(t, e, i, a) {
        return n.encode(t) + "@@" + e + "@@" + i + "@@" + a };
    n.addNbsp = function(t, e) {
        if (!t) return "";
        else if (1 == e) return t + "&nbsp;";
        else return t + "&nbsp;&nbsp;" };
    n.removeBaoYou = function(t) {
        return (t || "").replace("包邮价", "") };
    n._get_background = function(t, e, n, i) {
        var t = t || "",
            e = e || "",
            n = +(n || "4"),
            i = +(i || "0"),
            a = "";
        if ("" != e && e.indexOf("#") == -1) e = "#" + e;
        if ("" != t) a = a + "background-image:url(" + t + ");";
        if ("" != e) a = a + "background-color:" + e + ";";
        switch (n) {
            case 5:
                a += "background-repeat:repeat;";
                break;
            case 4:
                a += "background-position:center top;background-repeat:no-repeat;";
                break;
            case 1:
                a += "background-position:left top;background-repeat:no-repeat;";
                break;
            case 0:
                a += "background-position:right top;background-repeat:no-repeat;";
                break;
            default:
                a += "background-position:center top;background-repeat:no-repeat;" }
        if (0 != i) a = a + "padding-top:" + i + "px;";
        return a };
    n.removeComment = function(t) {
        return t.replace(/<!--[\w\W\r\n]*?-->/gim, "") };
    n.removeCRLF = function(t) {
        return t.replace(/\r\n/gim, "") };
    n.minifyHtml = function(t) {
        return n.removeCRLF(n.removeComment(t)) };
    n.noProtocol = function(e) {
        return t.noProtocol(e) };
    return n }, 15, 6);
I$(596, '<div class="act-module"></div>');
I$(472, function(t, e, n, i, a, s, o, r, l, c, d) {
    var u, h = o._$addNodeTemplate(s);
    r._$$Module = t._$klass();
    u = r._$$Module._$extend(a._$$EventTarget);
    u.__reset = function(t) { this.__super(t);
        this.__body = o._$getNodeTemplate(h);
        this.__placeholder = e._$get(t.id) || "" };
    u._$getBody = function() {
        return this.__body };
    u.__initData = function() {};
    u.__render = function() { this._$replaceNode(this.__body, this.__placeholder) };
    u.__afterRender = function() {};
    u._$replaceNode = function(t, e) { e.parentNode.replaceChild(t, e) };
    u._$insertAfter = function(t, e) {
        var n = e.parentNode;
        if (n.lastChild == e) n.appendChild(t);
        else n.insertBefore(t, node.nextSibling) };
    u.__supportTransition = function() {
        var t = !1,
            e = document.createElement("div"),
            n = ["transition", "webkitTransition", "msTransition", "mozTransition"];
        for (var i = 0; i < n.length; i++)
            if (void 0 !== e.style[n[i]]) { t = !0;
                break }
        e = null;
        return function() {
            return t } }();
    return r._$$Module }, 1, 4, 2, 286, 23, 596, 233);
I$(473, '<article class="m-drainage {if showType==1}m-drainage-2{elseif showType==2}m-drainage-3{else}m-drainage-4{/if}">\n<section class="imgWrap clearfix">\n{list list as item}\n  <a class="imgLink" href="${item.siteUrl||\'\'}" data-actda="${jointDaLabel(\'底部引流\',\'\',item_index+1,item.siteUrl||\'\')}" target="{if type==1}_self{else}_blank{/if}"><img src="${(item.imageUrl||\'\')|noProtocol}" title="" alt=""></a>\n{/list}\n</section>\n</article>');
I$(282, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var h, f = a._$add(s.minifyHtml(r));
    l._$$Drainage = t._$klass();
    h = l._$$Drainage._$extend(o);
    h.__reset = function(t) {
        var n = t.list || [];
        if (0 != n.length) { this.__super(t);
            this.__parent = e._$get(t.parent || "");
            var i = this.__initData(n);
            this.__renderDrainage(i) } };
    h.__initData = function(t) { this.__super();
        var e = t[0].configMap.type || 1,
            n = +(t[0].configMap.showType || 1);
        var i = { list: t, type: e, showType: n };
        s.merge(i, { jointDaLabel: s.jointDaLabel });
        return i };
    h.__renderDrainage = function(t) { this.__parent.appendChild(this._$getBody());
        a._$render(this._$getBody(), f, t, s) };
    return l._$$Drainage }, 1, 4, 2, 3, 239, 471, 472, 473);
I$(70, function(t, e, n, i, a, s, o, r, l, c, d) {
    var u;
    r._$$Drainage = t._$klass();
    u = r._$$Drainage._$extend(i._$$EventTarget);
    u.__init = function(t) { this.__supInit(t);
        this.__parent = t.parent || "body";
        var e = window.syncData.showDefaultBottomModules || 0;
        if (1 == e) this.__getDrainage() };
    u.__getDrainage = function() { s._$request("/activity/detail/getActivityBottomModule4PC.shtml", { type: "json", headers: { "X-Requested-With": "XMLHttpRequest" }, method: "get", onload: this.__onDrainageLoaded._$bind(this) }) };
    u.__onDrainageLoaded = function(t) {
        var e = t || {},
            n = e.data || [];
        if (e.success && n.length > 0) o._$allocate({ parent: this.__parent, list: n }) };
    return r._$$Drainage }, 1, 2, 3, 23, 4, 14, 282);
I$(474, '<div class="m-modalmask"></div>\n<div class="m-outdate">\n  <div class="imgwrap">\n    <img src="${cdnBaseUrl}images/activity/activityTemplate/over.jpg">\n    <a class="btn" id="outdatejumpurl" href="${redirectUrl}">${redirectTitle}</a>\n  </div>\n</div>');
I$(283, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var f, _ = a._$add(o.minifyHtml(l));
    c._$$EndMask = t._$klass();
    f = c._$$EndMask._$extend(r);
    f.__reset = function(t) { this.__super(t);
        var e = t.kaolaSystemTime || 0,
            n = window.syncData.activityShowEndDate || 0;
        if (0 != n && n < e) {
            var i = this.__initData();
            this.__renderEndMask(i);
            this.__afterRenderEndMask() } };
    f.__initData = function() { this.__super();
        var t = window.cdnBaseUrl || "/",
            e = window.syncData.redirectUrl || "",
            n = window.syncData.redirectTitle || "";
        var i = { cdnBaseUrl: t, redirectUrl: e, redirectTitle: n };
        return i };
    f.__renderEndMask = function(t) { document.body.appendChild(this._$getBody());
        a._$render(this._$getBody(), _, t) };
    f.__afterRenderEndMask = function() { s._$allocate() };
    return c._$$EndMask }, 1, 4, 2, 3, 239, 29, 471, 472, 474);
I$(71, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var h;
    l._$$GetServerTime = t._$klass();
    h = l._$$GetServerTime._$extend(i._$$EventTarget);
    h.__reset = function(t) { this.__super(t);
        this.__countDown = t.countDown;
        this.__doAjax(t) };
    h.__doAjax = function(t) { s._$request("/activity/detail/getSystemTime.html", { type: "json", method: "post", headers: { "X-Requested-With": "XMLHttpRequest" }, onload: this.__onSuccess._$bind(this), onerror: this.__onFail._$bind(this) }) };
    h.__onSuccess = function(t) {
        var e = t || {};
        if (e.success) {
            var n = e.data || 0;
            this.__updateCountDown(n);
            this.__activityEndMask(n);
            this._$dispatchEvent("onsuccess", n) } else this._$dispatchEvent("onfail", !1) };
    h.__onFail = function() { this._$dispatchEvent("onfail", !1) };
    h.__updateCountDown = function(t) {
        if (this.__countDown) { o(".js-countdown")._$forEach(function(e) { a._$attr(e, "data-serverTime", t) });
            this.__countDown._$refresh() } };
    h.__activityEndMask = function(t) { r._$allocate({ kaolaSystemTime: t }) };
    return l._$$GetServerTime
}, 1, 2, 3, 23, 4, 14, 25, 283);
I$(676, '{if (!isActivityStart || hasPrePrice) && !!preBuyType.type}\n    <!-- 预售期、并且勾选了预热期间按钮 -->\n    {if preBuyType.type==1}\n        <a class="cart-btn cart-btn-1 j-favbtn" \n             data-goodsid="${saleGoods.goods.goodsId}" \n             href="javascript:;"\n             title="${preBuyType.value|defStr:\'提前收藏\'}"\n             rel="nofollow"\n             {if buyButtonBgColor!="" && buyButtonTextColor!=""}\n             style="background-color:${buyButtonBgColor};color:${buyButtonTextColor}"\n             {/if}\n          >${preBuyType.value|defStr:\'提前收藏\'}{if isBigAction}<b class="icon-action"></b>{/if}</a>\n    {elseif preBuyType.type==2}\n        <a class="to-start u-btn" \n             href="${goodsLink}"\n             data-param="from=${zone.locateId}"\n             data-actda="${actDaParam}"\n             target="_blank"\n             title="${preBuyType.value|defStr:\'即将开始\'}"\n             {if buyButtonBgColor!="" && buyButtonTextColor!=""}\n             style="background-color:${buyButtonBgColor};color:${buyButtonTextColor}"\n             {/if}\n          >${preBuyType.value|defStr:\'即将开始\'}{if isBigAction}<b class="icon-action"></b>{/if}</a>\n    {/if}\n{else}\n    {if isActivityStart && saleGoods.goods.actualStorageStatus==0}\n    <a class="cart-btn cart-btn-1 cart-btn-dis" href="javascript:;" title="已抢光" rel="nofollow">已抢光</a>\n    {else}\n        {if buyType.type==1}\n            <a class="cart-btn cart-btn-1" \n               href="${goodsLink}" \n               data-param="${dataParam}" \n               data-actda="${actDaParam}"\n               target="_blank" \n               title="${buyType.value|defStr:\'立即购买\'}" \n               rel="nofollow"\n               {if buyButtonBgColor!="" && buyButtonTextColor!=""}\n               style="background-color:${buyButtonBgColor};color:${buyButtonTextColor}"\n               {/if}\n            >${buyType.value|defStr:\'立即购买\'}</a>\n        {elseif buyType.type==2}\n            <a class="cart-btn cart-btn-1 j-cart-btn" \n               href="javascript:;" \n               title="${buyType.value|defStr:\'加入购物车\'}"\n               data-goodsid="${saleGoods.goods.goodsId}"\n               data-imageurl="${saleGoods.goods.imageUrl}"\n               rel="nofollow"\n               {if buyButtonBgColor!="" && buyButtonTextColor!=""}\n               style="background-color:${buyButtonBgColor};color:${buyButtonTextColor}"\n               {/if}\n            >${buyType.value|defStr:\'加入购物车\'}</a>\n        {/if}\n    {/if}\n{/if}');
I$(666, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { g_actions: function(n, i, a, s, o) {
            var r = window.domainUrl || "//www.kaola.com/",
                c = window.activityId || "",
                d = window.syncData.activityShowStartDate;
            var u = n.zoneConfigMap || {},
                h = u.priceSetting || {},
                f = !!h.prePrice && 1 == h.prePrice.type,
                _ = u.buyType || {},
                p = u.preBuyType || {},
                m = u.buyButtonBgColor || "",
                g = u.buyButtonTextColor || "";
            isBigAction = 1 == u.buyButtonStyle, goodsLink = r + "product/" + a.goods.goodsId + ".html", dataParam = e.jointTjQuery(goodsLink, c, "product", n.locateId, s, u.zoneName), actDaParam = e.jointDaLabel(u.zoneName, i, s, goodsLink);
            var v = { zone: n, saleGoods: a, isActivityStart: d <= o, hasPrePrice: f, buyType: _, preBuyType: p, buyButtonBgColor: m, buyButtonTextColor: g, isBigAction: isBigAction, goodsLink: goodsLink, dataParam: dataParam, actDaParam: actDaParam };
            return t._$get(l, v, e) } } }, 239, 471, 676);
I$(677, '{macro getStarWidth(commPoint,isEmpty)}\n    ${(isEmpty?\'e\':\'w\')+Math.round(commPoint*2)}\n{/macro}\n\n<!-- 后台配置是否显示商品评论 -->\n{if showComment}\n<span class="proComment" hasComment="${hasComment?1:0}">\n  <span class="bg"></span>\n  {if hasComment}\n  <span class="data clearfix">\n    {if type!="lineOfFive"}\n    <span class="prefect">\n      {if hasComment}\n      ${(commentGoodCount/commentCount*100).toFixed(1)}\n      {else}100{/if}%好评</span>\n    {/if}\n    <span class="percentStar clearfix">\n        <span class="fullStar {if commentPoint!=0 && hasComment}${getStarWidth(commentPoint,false)}{else}w10{/if}">&#xe60c;&#xe60c;&#xe60c;&#xe60c;&#xe60c;</span>\n        <span class="emptyStar {if commentPoint!=0 && hasComment}${getStarWidth(commentPoint,true)}{else}e10{/if}">&#xe60c;&#xe60c;&#xe60c;&#xe60c;&#xe60c;</span>\n    </span>\n    <span class="num">${commentCount}条评论</span>\n  </span>\n  <span class="detail"><b class="rollText"></b></span>\n  {else}\n  <span class="noComment">新品上线，赶快来试试吧！</span>\n  {/if}\n</span>\n{/if}\n');
I$(667, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { g_comment: function(n, i, a) {
            var s = n.zoneConfigMap || {},
                o = s.isDisplayable || !1,
                r = 0 != (i.goods.commentCount || 0),
                c = i.goods.commentGoodCount || 0,
                d = i.goods.commentCount || 1,
                u = i.goods.commentPoint || 0;
            var h = { type: a, showComment: o, hasComment: r, commentGoodCount: c, commentCount: d, commentPoint: u };
            return t._$get(l, h, e) } } }, 239, 471, 677);
I$(678, '<img class="w-brand-img{if rectFlag} rect{/if}" src="${flag|noProtocol}" alt="原产国国旗" />');
I$(668, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { g_flag: function(n) {
            var i = !!window.syncData.switchRectFlag;
            var a = n.goods.originCountryRectFlag || "",
                s = n.goods.originCountryFlag || "",
                o = i && "" != a,
                r = o ? a : s;
            var c = { rectFlag: o, flag: r };
            return t._$get(l, c, e) } } }, 239, 471, 678);
I$(679, '{if giftList.length>0}\n<dl class="giftList f-cb">\n  <dt class="giftTit">${giftText}</dt>\n  {list giftList as gift}\n  {if gift_index < showNum}\n    {var giftGoodsId = gift.giftGoodsId||0 }\n    {var giftGoodsImg = gift.giftGoodsImg||\'\' }\n    {var isSoldOut = (gift.actualStorageStatus||0)==0 }\n    {var giftLink = domainUrl+ "product/"+giftGoodsId+".html" }\n    <dd class="gift">\n      <a href="${giftLink}" target="_blank"><img src="${giftGoodsImg|noProtocol}"></a>{if isSoldOut}<span class="none">赠完</span>{/if}\n    </dd>\n    {if (gift_index+1 < gift_length) && (gift_index < showNum-1)}\n    <dd class="division">+</dd>\n    {/if}\n  {/if}\n  {/list}\n</dl>\n{/if}');
I$(669, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { g_gift: function(n, i) {
            var a = window.domainUrl || "//www.kaola.com/";
            var s = n.goodsConfigMap || {},
                o = s.giftText || "",
                r = s.giftList || [],
                c = "maizeng-5" == i ? 2 : 3;
            var d = { type: i, giftText: o, giftList: r, showNum: c };
            return t._$get(l, d, e) } } }, 239, 471, 679);
I$(680, '<img class="proImg img-lazyload" \n       src="${goodsImg|noProtocol}" \n       alt="${goodsTit}" \n       title="${goodsTit}" >');
I$(670, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { g_img: function(n, i, a, s) {
            var o = window.cdnBaseUrl || "//mm.bst.126.net/";
            var r = n.goodsImage || "",
                c = n.goods.imageUrl || "",
                d = e.imgThumbnailUrl("" != r ? r : c, i, a, s),
                u = n.goods.title || "";
            var h = { cdnBaseUrl: o, goodsImg: d, goodsTit: u };
            return t._$get(l, h, e) } } }, 239, 471, 680);
I$(681, '<p class="w-price">\n<!-- 有预告价则显示预告价不显示在线售价-->\n{if hasPrePrice && prePrice>0}\n{var showGuidePrice = prePrice < guidePrice}\n<strong{if priceColor!="" && priceColor!="#d22147"} style="color:${priceColor}"{/if}><span class="symbol"><b>${prePriceValue|removeBaoYou|addNbsp}</b>¥</span>${prePrice}</strong>\n{else}\n{var showGuidePrice = onlinePrice < guidePrice }\n<strong{if priceColor!="" && priceColor!="#d22147"} style="color:${priceColor}"{/if}><span class="symbol"><b>${onlinePriceValue|removeBaoYou|addNbsp}</b>¥</span>${onlinePrice}</strong>\n{/if}\n{if hasMarketPrice}\n<i class="tl">${marketPriceValue|addNbsp:1}¥<del>${marketPrice}</del></i>\n{/if}\n{if hasGuidePrice && showGuidePrice}\n<i>${guidePriceValue|addNbsp:1}¥${guidePrice}</i>\n{/if}\n</p>');
I$(671, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { g_prices: function(n, i) {
            var a = n.zoneConfigMap || {},
                s = a.priceSetting || {},
                o = s.textColor || "",
                r = "" != o ? o : "#d22147",
                c = s.prePrice || {},
                d = s.onlinePrice || {},
                u = s.guidePrice || {},
                h = s.marketPrice || {},
                f = 1 == c.type,
                _ = 1 == d.type,
                p = 1 == u.type,
                m = 1 == h.type,
                g = c.value || "",
                v = d.value || "",
                $ = u.value || "",
                y = h.value || "",
                b = i.prePrice || 0,
                w = i.goods.actualCurrentPrice || 0,
                C = i.goods.suggestPrice || 0,
                x = i.goods.marketPrice || 0;
            var T = { priceSetting: s, priceColor: r, hasPrePrice: f, hasOnlinePrice: _, hasGuidePrice: p, hasMarketPrice: m, prePriceValue: g, onlinePriceValue: v, guidePriceValue: $, marketPriceValue: y, prePrice: b, onlinePrice: w, guidePrice: C, marketPrice: x };
            return t._$get(l, T, e) } } }, 239, 471, 681);
I$(682, '{if isSoldOut}\n<span class="w-icon w-icon-13">&nbsp;</span>\n{/if}');
I$(672, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { g_soldout: function(n) {
            var i = 0 == n.goods.actualStorageStatus;
            var a = { isSoldOut: i };
            return t._$get(l, a, e) } } }, 239, 471, 682);
I$(683, '<ul class="tags clearfix">\n  <!-- 是否显示组合标签 -->\n  {if cfg.showCompositeTag && memberCount>0 && saleGoods.goods.isShowDiscountCost}\n  <li class="tagItem">每${saleGoods.goods.memberUnitName||\'件\'}${saleGoods.goods.memberPrice||0}元</li>\n  {/if}\n  <!-- 是否显示运营标签（之前的角标） -->\n  {if !showMaizengTag && !!cfg.cornerMark}\n  {var cornerMarkType = +(cfg.cornerMark.type||-1) }\n    {if cornerMarkType==0}\n    <li class="tagItem">立省¥{if hasPrePrice && prePrice>0}${(marketPrice0-prePrice).Round(1)}{else}${(marketPrice0-onlinePrice).Round(1)}{/if}</li>\n    {elseif cornerMarkType==1}\n    <li class="tagItem">{if hasPrePrice && prePrice>0}${Math.ceil(100*prePrice/marketPrice1)/10}{else}${Math.ceil(100*onlinePrice/marketPrice1)/10}{/if}折</li>\n    {elseif cornerMarkType==2}\n    <li class="tagItem">${cfg.cornerMark.value||""}</li>\n    {elseif cornerMarkType==3 && saleGoods.goods.isAppOnlyPrice==1 && (onlinePrice-appOnlinePrice)>0}\n    <li class="tagItem">手机下单减${(onlinePrice-appOnlinePrice).Round(1)}元</li>\n    {/if}\n  {/if}\n  <!-- 是否显示包邮标签 -->\n  {if cfg.showFreePostageTag && saleGoods.goods.isPostageFree==1}\n  <li class="tagItem">包邮</li>\n  {/if}\n  <!-- 是否显示买赠标签 -->\n  {if showMaizengTag}\n  <li class="tagItem">买赠</li>\n  {/if}\n</ul>');
I$(673, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { g_tags: function(n, i) {
            var a = n.zoneConfigMap || {},
                s = a.priceSetting || {},
                o = !!s.prePrice && 1 == s.prePrice.type,
                r = i.prePrice || 0,
                c = i.goods.actualCurrentPrice || 0,
                d = i.goods.actualCurrentPriceForApp || 0,
                u = i.goods.marketPrice || 0,
                h = i.goods.marketPrice || 1,
                f = !!a.showPremiumsTag && "" != (i.goods.maizengPromotionTitleLink || ""),
                _ = i.goods.memberCount || 0;
            var p = { cfg: a, saleGoods: i, memberCount: _, hasPrePrice: o, prePrice: r, onlinePrice: c, appOnlinePrice: d, marketPrice0: u, marketPrice1: h, showMaizengTag: f };
            return t._$get(l, p, e) } } }, 239, 471, 683);
I$(684, '{if type=="lineOfOne"}\n<h3 class="tit">\n  <a target="_blank" href="${goodsLink}" data-param="${dataParam}" data-actda="${actDaParam}" title="{if hasMemberCount}${memberCount}${memberUnitName}&nbsp;|&nbsp;{/if}${shortTitle}">{if hasMemberCount}<b>${memberCount}${memberUnitName}</b>&nbsp;|&nbsp;{/if}<strong>${shortTitle}</strong></a>\n</h3>\n<p class="desc" title="${introduce} ${description}"><b>${introduce}</b>${description}</p>\n{else}\n<h3 class="tit">\n  <a class="titLink" target="_blank" href="${goodsLink}" data-param="${dataParam}" data-actda="${actDaParam}" title="{if hasMemberCount}${memberCount}${memberUnitName}&nbsp;|&nbsp;{/if}${shortTitle}">{if hasMemberCount}<b>${memberCount}${memberUnitName}</b>&nbsp;|&nbsp;{/if}${shortTitle}</a>\n  {if type!=\'maizeng-3\' && type!=\'maizeng-4\' && type!=\'maizeng-5\'}\n  <a target="_blank" href="${goodsLink}" {if isAdvertShowRed}class="z-red"{/if} data-param="${dataParam}" data-actda="${actDaParam}" title="${introduce}">${introduce}</a>\n  {/if}\n</h3>\n{/if}');
I$(674, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { g_titles: function(n, i, a, s, o) {
            var r = window.domainUrl || "//www.kaola.com/",
                c = window.activityId || "";
            var d = n.zoneConfigMap || {},
                u = a.goodsConfigMap || {},
                h = u.advertString || "",
                f = a.goods.memberCount || 0,
                _ = f > 0,
                p = (a.goods.memberUnitName || "件") + "装",
                m = a.goods.shortTitle || "",
                g = "" != h ? h : a.goods.introduce || "",
                v = a.goods.description || "",
                $ = d.isAdvertShowRed || !1,
                y = r + "product/" + a.goods.goodsId + ".html",
                b = e.jointTjQuery(y, c, "product", n.locateId, o, d.zoneName),
                w = e.jointDaLabel(d.zoneName, i, o, y);
            var C = { type: s, memberCount: f, hasMemberCount: _, memberUnitName: p, shortTitle: m, introduce: g, description: v, isAdvertShowRed: $, goodsLink: y, dataParam: b, actDaParam: w };
            return t._$get(l, C, e) } } }, 239, 471, 684);
I$(685, "{if showUnionTag && actTag!=''}\n<span class=\"unionTag {if actTag=='换购'}z-hg{/if}\">${actTag}</span>\n{/if}");
I$(675, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { g_unionTag: function(n, i) {
            var a = n.zoneConfigMap || {},
                s = a.showUnionTag || !1,
                o = (i.goods.unionPromptPriceInfo || "").replace(/(选|减)/g, "<br/>$1");
            var r = { showUnionTag: s, actTag: o };
            return t._$get(l, r, e) } } }, 239, 471, 685);
I$(657, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) {
    var p = {},
        m = 0,
        g = arguments.length - 5;
    for (; m < g; m++) d.merge(p, arguments[m]);
    return p }, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 471);
I$(658, '<div class="${goodsClass}" goodsId="${saleGoods.goods.goodsId}">\n    <a class="pic" href="${goodsLink}" data-param="${dataParam}" data-actda="${actDaParam}" target="_blank" title="${saleGoods.goods.title||\'\'}">\n      <!-- 商品图片 -->\n      {if type=="lineOfOne"||type=="lineOfTwo"}\n        ${g_img(saleGoods,490,300)}\n      {else}\n        ${g_img(saleGoods,330,330)}\n      {/if}\n      <!-- 商品评论相关 -->\n      ${g_comment(zone,saleGoods,type)}\n      <!-- 商品售罄 -->\n      ${g_soldout(saleGoods)}\n      {if type!="lineOfOne"}\n        <!-- 国旗 -->\n        ${g_flag(saleGoods)}\n        {if type!="lineOfTwo"}\n        <!-- 整单类标签 -->\n        ${g_unionTag(zone,saleGoods)}\n        {/if}\n      {/if}\n    </a>\n    <div class="proinfo">\n      {if type=="lineOfOne"}\n      <!-- 一排一国旗 -->\n      <div class="w-brand clearfix">\n          ${g_flag(saleGoods)}\n          <span>${saleGoods.goods.originCountryBrev||\'\'}<br/>${saleGoods.goods.goodsSource||\'\'}</span>\n      </div>\n      {/if}\n        <!-- 标题区域 -->\n        ${g_titles(zone,zoneIndex,saleGoods,type,pIndex)}\n        <!-- 标签区域 -->\n        ${g_tags(zone,saleGoods)}\n        <!-- 价格区域 -->\n        ${g_prices(zone,saleGoods)}\n        <!-- 行动点区域 -->\n        ${g_actions(zone,zoneIndex,saleGoods,pIndex,kaolaSystemTime)}\n    </div>\n</div>');
I$(634, function(t, e, n, i, a, s, o, r, l) {
    var c, d = e._$add(n.minifyHtml(a));
    return { goods_common: function(a, s, o, r, l, c) {
            function u() {
                var e = o.goodsConfigMap.recId || "",
                    i = t._$attr(a.locateId, "isRecommend"),
                    s = "1" == i ? "recproduct" : _.zoneName,
                    r;
                r = n.jointTjQuery(g, f, "product", a.locateId, l, s);
                if ("1" == i) r += "&recId=" + e;
                return r }
            var h = window.domainUrl || "//www.kaola.com/",
                f = window.activityId || "";
            var _ = a.zoneConfigMap || {},
                p = 1 == _.buyButtonStyle,
                m = "detailWrap" + (p ? " bigActionWrap" : "") + " clearfix",
                g = h + "product/" + o.goods.goodsId + ".html",
                v = u(),
                $ = n.jointDaLabel(_.zoneName, s, l, g);
            var y = { zone: a, zoneIndex: s, kaolaSystemTime: c, saleGoods: o, type: r, pIndex: l, goodsClass: m, goodsLink: g, dataParam: v, actDaParam: $ };
            n.merge(y, i);
            return e._$get(d, y, n) } } }, 4, 239, 471, 657, 658);
I$(659, '<a href="${imageUrl|splitUrlHash}" data-param="${dataParam}" data-actda="${actDaParam}" target="_blank" class="${imgClass}" style="background:url(${goodsImage}) no-repeat center;"></a>');
I$(635, function(t, e, n, i, a, s, o, r) {
    var l, c = t._$add(e.minifyHtml(i));
    return { goods_image: function(n, i, a, s, o) {
            var r = window.activityId || "";
            var l = n.zoneConfigMap || {},
                d = 1 == l.buyButtonStyle,
                u = "detailWrap" + (d ? " bigActionWrap" : ""),
                h = "" == (a.imageUrl || "") ? "javascript:;" : a.imageUrl,
                f = a.goodsImage || "",
                _ = e.jointTjQuery(h, r, "product", n.locateId, o, l.zoneName),
                p = e.jointDaLabel(l.zoneName, i, o, h);
            var m = { zone: n, zoneIndex: i, saleGoods: a, type: s, pIndex: o, imgClass: u, imageUrl: h, goodsImage: f, dataParam: _, actDaParam: p };
            return t._$get(c, m, e) } } }, 239, 471, 657, 659);
I$(660, '{macro g_infoTop(goodsConfigMap,goodsLink,dataParam,actDaParam,textColor,memberCount,memberUnitName)}\n<div class="infoTop" style="border-bottom-color:${textColor}">\n    <p class="intro"><a target="_blank" href="${goodsLink}" style="color:${textColor}" data-param="${dataParam}" data-actda="${actDaParam}" title="${goodsConfigMap.introduce||\'\'}">${goodsConfigMap.introduce||\'\'}</a></p>\n    <h3 class="shortTitle">\n      <a target="_blank" href="${goodsLink}" style="color:${textColor}" data-param="${dataParam}" data-actda="${actDaParam}" \n      title="{if memberCount>0}${memberCount}${memberUnitName}&nbsp;|&nbsp;{/if}${goodsConfigMap.shortTitle||\'\'}"\n      >{if memberCount>0}<b>${memberCount}${memberUnitName}</b>&nbsp;|&nbsp;{/if}${goodsConfigMap.shortTitle||\'\'}</a>\n    </h3>\n</div>\n<h4 class="subTitle"><a target="_blank" href="${goodsLink}" style="color:${textColor}" data-param="${dataParam}" data-actda="${actDaParam}" title="${goodsConfigMap.subTitle||\'\'}">${goodsConfigMap.subTitle||\'\'}</a></h4>\n{/macro}\n\n<div class="${goodsClass}" goodsId="${saleGoods.goods.goodsId}">\n    <a class="${picClass}" href="${goodsLink}" data-param="${dataParam}" data-actda="${actDaParam}" target="_blank" title="${saleGoods.goods.title||\'\'}">\n      <!-- 商品图片 -->\n      {if type=="newLineOfOne"}\n        ${g_img(saleGoods,500,400)}\n      {else}\n        ${g_img(saleGoods,440,352)}\n      {/if}\n      <!-- 商品售罄 -->\n      ${g_soldout(saleGoods)}\n    </a>\n    <div class="${infoClass}">\n        <!-- 十字描述、短标题 -->\n        ${g_infoTop(goodsConfigMap,goodsLink,dataParam,actDaParam,textColor,memberCount,memberUnitName)}\n        <!-- 标签区域 -->\n        ${g_tags(zone,saleGoods)}\n        <!-- 价格区域 -->\n        ${g_prices(zone,saleGoods)}\n        <!-- 行动点区域 -->\n        ${g_actions(zone,zoneIndex,saleGoods,pIndex,kaolaSystemTime)}\n    </div>\n</div>\n\n');
I$(636, function(t, e, n, i, a, s, o, r) {
    var l, c = t._$add(e.minifyHtml(i));
    return { goods_newitem: function(i, a, s, o, r, l) {
            var d = window.domainUrl || "//www.kaola.com/",
                u = window.activityId || "";
            var h = i.zoneConfigMap || {},
                f = "detailWrap clearfix",
                _ = "pic",
                p = "proinfo",
                m = "" == (h.textColor || "") ? "#333" : h.textColor,
                g = s.goodsConfigMap || {},
                v = g.displayType || 1,
                $ = s.goods.memberCount || 0,
                y = (s.goods.memberUnitName || "件") + "装",
                b = d + "product/" + s.goods.goodsId + ".html",
                w = e.jointTjQuery(b, u, "product", i.locateId, r, h.zoneName),
                C = e.jointDaLabel(h.zoneName, a, r, b);
            if ("newLineOfOne" == o) { _ += 2 == v ? " f-fr" : " f-fl";
                p += 2 == v ? " f-fr mr40" : " f-fl ml40" }
            var x = { zone: i, zoneIndex: a, kaolaSystemTime: l, saleGoods: s, type: o, pIndex: r, goodsConfigMap: g, goodsClass: f, picClass: _, infoClass: p, textColor: m, displayType: v, memberCount: $, memberUnitName: y, goodsLink: b, dataParam: w, actDaParam: C };
            e.merge(x, n);
            return t._$get(c, x, e) } } }, 239, 471, 657, 660);
I$(661, '<div class="${goodsClass}" goodsId="${saleGoods.goods.goodsId}">\n    <a class="pic" href="${goodsLink}" data-param="${dataParam}" data-actda="${actDaParam}" target="_blank" title="${saleGoods.goods.title||\'\'}">\n      <!-- 商品图片 -->\n      ${g_img(saleGoods,330,330)}\n      <!-- 商品评论相关 -->\n      ${g_comment(zone,saleGoods,type)}\n      <!-- 商品售罄 -->\n      ${g_soldout(saleGoods)}\n      <!-- 国旗 -->\n      ${g_flag(saleGoods)}\n    </a>\n    <div class="line"></div>\n    <div class="proinfo">\n        <!-- 赠品区域 -->\n        ${g_gift(saleGoods,type)}\n        <!-- 标题区域 -->\n        ${g_titles(zone,zoneIndex,saleGoods,type,pIndex)}\n        <!-- 价格区域 -->\n        <p class="w-price">¥<b>${saleGoods.goods.actualCurrentPrice||0}</b><i>¥</i><del>${saleGoods.goods.marketPrice||0}</del></p>\n        <!-- 行动点区域 -->\n        ${g_actions(zone,zoneIndex,saleGoods,pIndex,kaolaSystemTime)}\n    </div>\n</div>');
I$(637, function(t, e, n, i, a, s, o, r) {
    var l, c = t._$add(e.minifyHtml(i));
    return { goods_maizeng: function(i, a, s, o, r, l) {
            var d = window.domainUrl || "//www.kaola.com/",
                u = window.activityId || "";
            var h = i.zoneConfigMap || {},
                f = 1 == h.buyButtonStyle,
                _ = "detailWrap" + (f ? " bigActionWrap" : "") + " clearfix",
                p = d + "product/" + s.goods.goodsId + ".html",
                m = e.jointTjQuery(p, u, "product", i.locateId, r, h.zoneName),
                g = e.jointDaLabel(h.zoneName, a, r, p);
            var v = { zone: i, zoneIndex: a, kaolaSystemTime: l, saleGoods: s, type: o, pIndex: r, goodsClass: _, goodsLink: p, dataParam: m, actDaParam: g };
            e.merge(v, n);
            return t._$get(c, v, e) } } }, 239, 471, 657, 661);
I$(597, function(t, e, n, i, a, s, o, r, l) {
    var c = {},
        d = 0,
        u = arguments.length - 5;
    for (; d < u; d++) a.merge(c, arguments[d]);
    return c
}, 634, 635, 636, 637, 471);
I$(598, "<article id=\"${zone.locateId||''}\" class=\"m-goodsarea js-goodsarea\" style=\"${bgStyle}\">\n<section class=\"${type}\">\n<div class=\"goodsWrap clearfix\">\n{var showGoodsList = zone.showGoodsList||[]}\n{var pIndex = 0}<!-- 排序计数 -->\n{list showGoodsList as saleGoods}<!-- 商品循环 -->\n    {if saleGoods.type==0}<!-- 显示商品 -->\n        <!-- {if saleGoods.goods.isShow!=0 && saleGoods.goods.onlineStatus!=0} --><!-- 判断商品是否需要显示 -->\n        {var pIndex = pIndex+1}\n        {if type=='newLineOfOne'||type=='newLineOfTwo'}\n            <!-- 显示新版一排一，一排二 -->\n            ${goods_newitem(zone,zoneIndex,saleGoods,type,pIndex,kaolaSystemTime)}\n        {elseif type=='maizeng-3'||type=='maizeng-4'||type=='maizeng-5'}\n            <!-- 显示买赠一排三，一排四，一排五 -->\n            ${goods_maizeng(zone,zoneIndex,saleGoods,type,pIndex,kaolaSystemTime)}\n        {else}\n            <!-- 显示常规的商品一排1,2,3,4,5 -->\n            ${goods_common(zone,zoneIndex,saleGoods,type,pIndex,kaolaSystemTime)}\n        {/if}\n        <!-- {/if} -->\n    {elseif saleGoods.type==1}<!-- 显示图片 -->\n        {var pIndex = pIndex+1}\n        <!-- 显示商品区域中的图片 -->\n        ${goods_image(zone,zoneIndex,saleGoods,type,pIndex,kaolaSystemTime)}\n    {/if}\n{/list}\n</div>\n</section>\n</article>\n");
I$(475, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f) {
    var _, p = s._$add(a.minifyHtml(l));
    d._$$JstGoods = t._$klass();
    _ = d._$$JstGoods._$extend(r);
    _.__reset = function(t) { this.__super(t);
        var e = this.__initData(t);
        this.__render(e);
        this.__afterRender(this._$getBody()) };
    _.__initData = function(t) { this.__super();
        var e = t.zoneIndex,
            n = t.zone || {},
            i = +(t.kaolaSystemTime || 0),
            s = n.zoneConfigMap || {},
            r = s.displayForm || 0,
            l = +(s.showType || "-1"),
            c = a._get_background(n.zoneImageUrl, n.backgroundColor, n.imgLocation, s.bgPaddingTop),
            d = "";
        if (13 == r) d = "maizeng-" + (l + 1);
        else switch (l) {
            case 0:
                d = "lineOfOne";
                break;
            case 1:
                d = "lineOfTwo";
                break;
            case 2:
                d = "lineOfThree";
                break;
            case 3:
                d = "lineOfFour";
                break;
            case 4:
                d = "lineOfFive";
                break;
            case 5:
                d = "newLineOfOne";
                break;
            case 6:
                d = "newLineOfTwo" }
        var u = { zone: n, type: d, zoneIndex: e, kaolaSystemTime: i, bgStyle: c };
        a.merge(u, o);
        return u };
    _.__render = function(t) { this.__super();
        s._$render(this._$getBody(), p, t) };
    _.__afterRender = function(t) { this.__super();
        c._$allocate({ parent: t, cbloginOk: this._$dispatchEvent._$bind(this, "cbloginOk") });
        i._$dispatchEvent(window, "scroll") };
    return d._$$JstGoods }, 1, 4, 2, 3, 471, 239, 597, 472, 598, 34);
I$(662, '<div class="brandWrap clearfix"{if isRowOf34} ani="need"{/if}>\n    <a class="brandImgLink{if isRowOf12} f-fl{/if}" href="${brandLink|splitUrlHash}" data-param="${dataParam}" data-actda="${actDaParam}" target="_blank">\n      {if type=="rowOfOne"}\n      <img class="brandImg" src="${brandImg|imgThumbnailUrl:640,320}" title="${brandName}">\n      {elseif type=="rowOfTwo"}\n      <img class="brandImg" src="${brandImg|imgThumbnailUrl:270,270}" title="${brandName}">\n      {elseif type=="rowOfThree"}\n      <img class="brandImg" src="${brandImg|imgThumbnailUrl:328,328}" title="${brandName}">\n      {else}\n      <img class="brandImg" src="${brandImg|imgThumbnailUrl:244,244}" title="${brandName}">\n      {/if}\n    </a>\n    <a class="brandDesc{if isRowOf12} f-fl{/if}" href="${brandLink|splitUrlHash}" data-param="${dataParam}" data-actda="${actDaParam}" target="_blank">\n      <img class="brandLogo" src="${(brandDetail.logoPic||\'\')|imgThumbnailUrl:120,120}" title="${brandName}">\n      <p class="brandName" title="${brandName}">${brandName}</p>\n      {if type=="rowOfOne"}\n      <!-- 仅一排一显示品牌描述 -->\n      <p class="brandIntro" title="${brandDetail.detailShort||\'\'}">${brandDetail.detailShort||\'\'}</p>\n      {/if}\n      <p class="brandBenefit" title="${brandConfig.benefitDesc||\'\'}">${brandConfig.benefitDesc||\'\'}</p>\n      {if hasButton && !isBrandCoupon}\n      <span class="brandBtn" style="${acButtonColor}${acTextColor}">${acButtonName}</span>\n      {/if}\n      {if isRowOf12}\n      {if startTime > kaolaSystemTime}\n      <p class="brandTime start" time="${startTime}"><b></b>距开始：<span class="timeArea"></span></p>\n      {elseif endTime > kaolaSystemTime}\n      <p class="brandTime end" time="${endTime}"><b></b>距结束：<span class="timeArea"></span></p>\n      {/if}\n      {/if}\n    </a>\n    {if isBrandCoupon}\n    <p class="coupon">\n      <a class="text f-cb j-brandcoupon couponExchange" href="javascript:;" schemeId="${brandConfig.couponRedeemCode||\'\'}" data-type=\'brandcoupon\'>\n        <b class=\'j-kind\'>${isCombinedCoupon?\'礼包\':\'券\'}</b><b class="val"><i>¥${shareTicket.couponAmount||0}</i>&nbsp;&gt;</b>\n      </a>\n      {if hasButton}\n      <a class="couponBtn" href="${brandLink|splitUrlHash}" data-param="${dataParam}" data-actda="${actDaParam}" target="_blank" style="${acButtonColor}${acTextColor}">${acButtonName}</a>\n      {/if}\n    </p>\n    {/if}\n</div>\n');
I$(638, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { brand_common: function(n, i, a, s, o, r) {
            var c = window.domainUrl || "//www.kaola.com/",
                d = window.activityId || "";
            var u = n.zoneConfigMap || {},
                h = !!u.actionButton,
                f = u.actionButton || {},
                _ = "background-color:" + (f.acButtonColor || "#d22147") + ";",
                p = "color:" + (f.acTextColor || "#fff") + ";",
                m = f.acButtonName || "去购买",
                g = "rowOfThree-coupon" == s || "rowOfFour-coupon" == s,
                v = "rowOfOne" == s || "rowOfTwo" == s,
                $ = "rowOfThree" == s || "rowOfFour" == s,
                y = a.brand || {},
                b = a.goodsConfigMap || {},
                w = b.shareTicket || {},
                C = b.startTime || 0,
                x = b.endTime || 0,
                T = 1 == (w.isIngredientCoupon || 0),
                L = b.brandUrl || "",
                S = "" != L ? L : c + "brand/" + (y.brandId || "") + ".html",
                I = y.name || "",
                k = e.jointTjQuery(S, d, "brand", n.locateId, o, u.zoneName),
                D = e.jointDaLabel(u.zoneName, i, o, S);
            if ("" != (a.goodsImage || "")) var N = a.goodsImage || "";
            else if ("rowOfOne" == s) var N = y.zoneStripImgUrl || "";
            else var N = y.h5ImageUrl || "";
            var E = { type: s, bIndex: o, kaolaSystemTime: r, brandDetail: y, brandConfig: b, isBrandCoupon: g, isRowOf12: v, isRowOf34: $, hasButton: h, button: f, acButtonColor: _, acTextColor: p, acButtonName: m, startTime: C, endTime: x, shareTicket: w, isCombinedCoupon: T, brandName: I, brandLink: S, brandImg: N, dataParam: k, actDaParam: D };
            return t._$get(l, E, e) } } }, 239, 471, 662);
I$(663, '<a href="${imageUrl|splitUrlHash}" data-param="${dataParam}" data-actda="${actDaParam}" target="_blank" class="${imgClass}" style="background:url(${goodsImage}) no-repeat center;"></a>');
I$(639, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { brand_image: function(n, i, a, s, o) {
            var r = window.activityId || "";
            var c = n.zoneConfigMap || {},
                d = 1 == c.buyButtonStyle,
                u = "brandWrap",
                h = "" == (a.imageUrl || "") ? "javascript:;" : a.imageUrl,
                f = a.goodsImage || "",
                _ = e.jointTjQuery(h, r, "brand", n.locateId, o, c.zoneName),
                p = e.jointDaLabel(c.zoneName, i, o, h);
            var m = { zone: n, brand: a, type: s, imgClass: u, imageUrl: h, goodsImage: f, dataParam: _, actDaParam: p };
            return t._$get(l, m, e) } } }, 239, 471, 663);
I$(664, '<div class="brandWrap clearfix">\n    <a class="brandDesc" href="${brandLink|splitUrlHash}" data-param="${dataParam}" data-actda="${actDaParam}" target="_blank" title="${brandName}">\n        <img class="brandLogo" src="${(brandDetail.logoPic||\'\')|imgThumbnailUrl:120,120}">\n        {if hasButton}\n        <span class="brandBenefit">${brandConfig.benefitDesc||\'\'}</span>\n        <span class="brandBtn" style="background-color:${button.acButtonColor||\'#d22147\'};color:${button.acTextColor||\'#fff\'}">${button.acButtonName||\'进入品牌\'}</span>\n        {/if}\n        <span class="follow" brandId="${brandDetail.brandId||\'\'}"></span>\n        <span class="toast">已关注</span>\n    </a>\n</div>');
I$(640, function(t, e, n, i, a, s, o) {
    var r, l = t._$add(e.minifyHtml(n));
    return { brand_wall: function(n, i, a, s, o) {
            var r = window.domainUrl || "//www.kaola.com/",
                c = window.activityId || "";
            var d = n.zoneConfigMap || {},
                u = !!d.actionButton,
                h = d.actionButton || {},
                f = a.brand || {},
                _ = a.goodsConfigMap || {},
                p = _.brandUrl || "",
                m = "" != p ? p : r + "brand/" + (f.brandId || "") + ".html",
                g = f.name || "",
                v = e.jointTjQuery(m, c, "brand", n.locateId, o, d.zoneName),
                $ = e.jointDaLabel(d.zoneName, i, o, m);
            var y = { type: s, bIndex: o, brandDetail: f, brandConfig: _, hasButton: u, button: h, brandName: g, brandLink: m, dataParam: v, actDaParam: $ };
            return t._$get(l, y, e) } } }, 239, 471, 664);
I$(599, function(t, e, n, i, a, s, o, r) {
    var l = {},
        c = 0,
        d = arguments.length - 5;
    for (; c < d; c++) i.merge(l, arguments[c]);
    return l }, 638, 639, 640, 471);
I$(600, '<article id="${zone.locateId||\'\'}" class="m-brandarea" imgLocation="${zone.imgLocation||\'0\'}" style="${bgStyle}">\n<section class="${type} brandSec">\n<section class="brandBox clearfix">\n{var showGoodsList = zone.showGoodsList||[]}\n{var bIndex = 0}<!-- 排序计数 -->\n{list showGoodsList as brand}<!-- 品牌循环 -->\n    {if brand.type==2}\n        <!-- 显示品牌 -->\n        {if !(!!brand.goodsConfigMap && !!brand.goodsConfigMap.endTime && brand.goodsConfigMap.endTime<kaolaSystemTime)}<!-- 判断品牌是否已结束 -->\n            {var bIndex = bIndex+1}\n            {if type=="rowOfSix"}\n                <!-- 品牌墙 -->\n                ${brand_wall(zone,zoneIndex,brand,type,bIndex)}\n            {else}\n                <!-- 品牌 一排1,2,3,4,领券 -->\n                ${brand_common(zone,zoneIndex,brand,type,bIndex,kaolaSystemTime)}\n            {/if}\n        {/if}\n    {elseif brand.type==1}\n        <!-- 显示图片 -->\n        {var bIndex = bIndex+1}\n        <!-- 显示品牌区域中的图片 -->\n        ${brand_image(zone,zoneIndex,brand,type,bIndex)}\n    {/if}\n{/list}\n</section>\n</section>\n</article>\n');
I$(476, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f) {
    var _, p = s._$add(a.minifyHtml(l));
    d._$$JstBrand = t._$klass();
    _ = d._$$JstBrand._$extend(r);
    _.__reset = function(t) { this.__super(t);
        var e = this.__initData(t);
        this.__render(e);
        this.__afterRender(this._$getBody(), e.kaolaSystemTime) };
    _.__initData = function(t) {
        this.__super();
        var e = t.zone || {},
            n = t.zoneIndex,
            i = +(t.kaolaSystemTime || 0),
            s = e.zoneConfigMap || {},
            r = +(s.displayStyle || 0),
            l = +(s.showType || "-1"),
            c = a._get_background(e.zoneImageUrl, e.backgroundColor, e.imgLocation, s.bgPaddingTop),
            d = "";
        if (0 == r) switch (l) {
                case 1:
                    d = "rowOfOne";
                    break;
                case 2:
                    d = "rowOfTwo";
                    break;
                case 3:
                    d = "rowOfThree";
                    break;
                case 4:
                    d = "rowOfFour";
                    break;
                case 6:
                    d = "rowOfSix" } else if (1 == r) switch (l) {
                case 3:
                    d = "rowOfThree-coupon";
                    break;
                case 4:
                    d = "rowOfFour-coupon"
            }
            var u = { zone: e, type: d, kaolaSystemTime: i, zoneIndex: n, bgStyle: c };
        a.merge(u, o);
        return u
    };
    _.__render = function(t) { this.__super();
        s._$render(this._$getBody(), p, t) };
    _.__afterRender = function(t, e) { this.__super();
        c._$allocate({ parent: t, kaolaSystemTime: e, cbloginOk: this._$dispatchEvent._$bind(this, "cbloginOk") });
        i._$dispatchEvent(window, "scroll") };
    return d._$$JstBrand
}, 1, 4, 2, 3, 471, 239, 599, 472, 600, 32);
I$(601, '<article id="${locateId||\'\'}" class="m-brandarea m-brandarea-tj" style="background-color: ${bgColor};">\n<section class="${type} brandSec">\n<section class="brandBox clearfix">\n{var bIndex = 0}<!-- 排序计数 -->\n{list blist as brand}\n    {var bIndex = bIndex+1}\n    <!-- 品牌推荐 -->\n    <div class="brandWrap clearfix" ani="need">\n        {var brandLink = domainUrl+\'brand/\'+(brand.brandId||\'\')+\'.html\'}\n        <a class="brandImgLink" href="${brandLink}" data-param="${jointTjQuery2(brandLink,brand.brandName,bIndex,brand.recId)}" target="_blank">\n          <img class="brandImg" src="${(brand.h5ImageUrl||\'\')|imgThumbnailUrl:244,244}" title="${brand.brandName}">\n        </a>\n        <a class="brandDesc" href="${brandLink}" data-param="${jointTjQuery2(brandLink,brand.brandName,bIndex,brand.recId)}" target="_blank">\n          <img class="brandLogo" src="${(brand.logoPic||\'\')|imgThumbnailUrl:120,120}" title="${brand.brandName}">\n          <p class="brandName" title="${brand.brandName}">${brand.brandName}</p>\n          <p class="brandBenefit" title="${brand.benefitPoint||\'\'}">${brand.benefitPoint||\'\'}</p>\n        </a>\n    </div>\n{/list}\n</section>\n</section>\n</article>\n');
I$(477, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f) {
    var _, p = s._$add(a.minifyHtml(l));
    d._$$JstBrand = t._$klass();
    _ = d._$$JstBrand._$extend(r);
    _.__reset = function(t) { this.__super(t);
        var e = this.__initData(t);
        this.__render(e) };
    _.__initData = function(t) { this.__super();
        var e = window.domainUrl || "//www.kaola.com/",
            n = window.activityId || "";
        var i = t.data || {},
            s = t.id,
            o = t.zoneIndex,
            r = "rowOfFour";
        var l = { blist: i.brandList || [], locateId: s, type: r, activityId: n, domainUrl: e, zoneIndex: o, bgColor: i.bgColor };
        var c = function(t, e, i, o) {
            var r = a.jointTjQuery(t, n, "", s, a.encode(e) + "-" + i, "personalbrand");
            r += "&recId=" + (o || "");
            return r };
        a.merge(l, { jointTjQuery2: c });
        return l };
    _.__render = function(t) { this.__super();
        s._$render(this._$getBody(), p, t, a) };
    return d._$$JstBrand }, 1, 4, 2, 3, 471, 239, 599, 472, 601, 32);
I$(478, function(t, e, n, i, a, s, o, r, l, c, d) {
    var u;
    r._$$SeckillArea = t._$klass();
    u = r._$$SeckillArea._$extend(s);
    u.__reset = function(t) { this.__super(t);
        var e = this.__initData(t);
        if (e) this.__renderSeckill(e) };
    u.__initData = function(t) {
        var e = t.zone || {},
            n = e.locateId || "seckillArea" + t.zoneIndex;
        if (e.seckillModuleJson) return { config: e.zoneConfigMap || {}, json: JSON.parse(e.seckillModuleJson || "{}"), id: n, kaolaSystemTime: t.kaolaSystemTime };
        else {
            var i = document.getElementById(n);
            i.parentNode.removeChild(i);
            return !1 } };
    u.__renderSeckill = function(t) {
        var e = new o({ data: { zone: t.json || {}, kaolaSystemTime: t.kaolaSystemTime, days: t.json.groupList || [], config: t.config || {} } });
        e.$on("inject", this.__triggerScroll._$bind(this));
        e.$on("goodsChange", this.__triggerScroll._$bind(this));
        e.$on("cbloginOk", this._$dispatchEvent._$bind(this, "cbloginOk"));
        var n = document.getElementById(t.id);
        n.innerHTML = "";
        e.$inject(n) };
    u.__triggerScroll = function() { i._$dispatchEvent(window, "scroll") };
    return r._$$SeckillArea }, 1, 4, 2, 3, 471, 472, 266);
I$(602, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var f;
    l._$$Switch = t._$klass();
    h = l._$$Switch._$extend(i._$$EventTarget);
    h.__reset = function(t) { this.__super(t);
        var e = t.node;
        if (e) { this.__listBox = a._$getByClassName(e, "j-list")[0];
            this.__list = a._$getChildren(this.__listBox);
            this.__preBtn = a._$getByClassName(e, "j-pre")[0];
            this.__nextBtn = a._$getByClassName(e, "j-next")[0];
            this.__length = this.__list.length;
            this.gap = t.gap || 0;
            this.duration = t.duration || 300;
            this.timing = t.timing || "easeinout";
            this.count = t.count || 4;
            this.autoPlay = !!t.autoPlay;
            this.delay = t.delay || 5e3;
            this.stopCB = t.onstop || null;
            this.__init() } };
    h.__init = function() {
        if (this.__listBox && this.__length) { this.itemWidth = this.__list[0].offsetWidth + this.gap;
            s(this.__listBox)._$style({ width: this.itemWidth * this.__length + "px", left: "0px" });
            if (this.__length > 4) this.__setNode("left");
            s(this.__listBox)._$style({ visibility: "visible" });
            n._$addEvent(this.__preBtn, "click", this.__clickBtn._$bind(this, "left"));
            n._$addEvent(this.__nextBtn, "click", this.__clickBtn._$bind(this, "right"));
            if (this.autoPlay) {
                if (this.timer) clearInterval(this.timer);
                this.timer = setInterval(this.__doAnimation._$bind(this, "right"), this.delay) } } };
    h.__clickBtn = function(t) {
        var e = "left" == t ? this.__preBtn : this.__nextBtn;
        var n = a._$dataset(e, "param");
        var i = n.split("@@");
        this.__doAnimation(t);
        r.daEvent(i[0] || "个性化会场", i[1] || "点击", i[2] || t) };
    h.__setNode = function(t) {
        var e = this.count,
            n = this.__length;
        if ("right" == t)
            for (var i = 0; i < e; i++) {
                var a = s(this.__listBox);
                var o = a._$children("a:first-child");
                s(o)._$clone(!0)._$insert2(this.__listBox, "bottom");
                s(o)._$remove() } else
                for (var i = n - 1; i >= n - e; i--) {
                    var a = s(this.__listBox);
                    var o = a._$children("a:last-child");
                    s(o)._$clone(!0)._$insert2(this.__listBox, "top");
                    s(o)._$remove() }
        s(this.__listBox)._$style({ left: -this.itemWidth * e + "px" }) };
    h.__doAnimation = function(t) {
        var e = this.__listBox,
            n = this,
            i = this.itemWidth * this.count,
            a = parseFloat(e.style.left);
        if (!this.inAnimation) {
            if ("right" == t) i = -i;
            o._$$AnimBezier._$allocate({ from: { offset: a }, to: { offset: a + i }, duration: this.duration, timing: this.timing, onupdate: function(t) { e.style.left = t.offset + "px" }, onstop: function() { n.inAnimation = !1;
                    n.stopCB && n.stopCB();
                    setTimeout(function() { n.__setNode(t) }, 0);
                    this._$recycle() } })._$play();
            this.inAnimation = !0 } };
    return l._$$Switch }, 1, 2, 3, 23, 4, 79, 96, 15);
I$(603, '<!-- 会场推荐 -->\n<article id="${id}" class="m-placeRec" style="background-color: ${bgColor};height: ${height}px;">\n  <section class="imgWrap clearfix">\n    <div class="imgbox j-list" style="visibility: hidden;">\n      {list list as item}\n      <a class="imgLink" href="${item.imageLink|splitUrlHash}" data-index="${item_index}" data-param="${jointTjQuery2(item.imageLink,item.showName, item_index+1,item.recId)}" target="_blank"><img src="${item.imageUrl|imgThumbnailUrl:244,0,85}"></a>\n      {/list}\n      {if list.length < 12 && list.length > 4}\n      {list list as item}\n      <a class="imgLink" href="${item.imageLink|splitUrlHash}" data-index="${item_index}" data-param="${jointTjQuery2(item.imageLink,item.showName, item_index+1,item.recId)}" target="_blank"><img src="${item.imageUrl|imgThumbnailUrl:244,0,85}"></a>\n      {/list}\n      {if list.length < 8}\n      {list list as item}\n      <a class="imgLink" href="${item.imageLink|splitUrlHash}" data-index="${item_index}" data-param="${jointTjQuery2(item.imageLink,item.showName, item_index+1,item.recId)}" target="_blank"><img src="${item.imageUrl|imgThumbnailUrl:244,0,85}"></a>\n      {/list}\n      {/if}\n      {/if}\n    </div>\n    {if list.length > 4}\n    <div class="u-ctrl">\n      <b class="dir prev j-pre" data-param="个性化会场@@点击@@左切"></b>\n      <b class="dir next j-next" data-param="个性化会场@@点击@@右切"></b>\n    </div>\n    {/if}\n  </section>\n</article>');
I$(479, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f) {
    var _, p = s._$add(o.minifyHtml(c));
    d._$$PlaceRecmd = t._$klass();
    _ = d._$$PlaceRecmd._$extend(r);
    _.__reset = function(t) {
        var e = t.data;
        this.__super(t);
        e.id = t.id;
        e = this.__initData(e);
        this.__render(e);
        this.__afterRender() };
    _.__initData = function(t) { this.__super();
        var e = t.id,
            n = window.activityId || "";
        var i = t || {};
        var a = function(t, i, a, s) {
            var r = o.jointTjQuery(t, n, "", e, o.encode(i) + "-" + a, "personalmall");
            r += "&recId=" + (s || "");
            return r };
        o.merge(i, { jointDaLabel: o.jointDaLabel, jointTjQuery2: a });
        i.height = t.list[0].height || 244;
        return i };
    _.__render = function(t) { this.__super();
        s._$render(this._$getBody(), p, t, o) };
    _.__afterRender = function() { this.__super();
        l._$allocate({ node: this.__body, duration: 300, gap: 8 }) };
    return d._$$PlaceRecmd }, 1, 4, 2, 3, 79, 239, 471, 472, 602, 603);
I$(604, "<article class=\"m-couponarea m-couponarea-${showType||3}\" style=\"${areaBgStyle}\">\n\t<section class=\"couponBox\" {if boxWidth!=1000}style=\"${boxStyle}\"{/if}>\n\t\t<div class=\"couponWrap f-cb\">\n\t\t\t{list list as coupon}\n\t\t\t<div class='coupon' style=\"${imgAreaBgStyle}\">\n\t\t\t\t<div class='detail f-cb'>\n\t\t\t\t\t<span class='price'>¥<b>${coupon.couponAmount||0}</b></span>\n\t\t\t\t\t<span class='condition'>\n\t\t\t\t\t\t<b title=\"${coupon.couponThreshold||''}\">${coupon.couponThreshold||''}</b>\n\t\t\t\t\t\t<b title=\"${replaceBr(coupon.couponTitle)}\">${replaceBr(coupon.couponTitle)}</b>\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class='line'></i>\n\t\t\t\t</div>\n\t\t\t\t<a class='get couponExchange' schemeId=\"${coupon.redeemCode||''}\" href=\"javascript:;\">立即领取&gt;</a>\n\t\t\t\t{if coupon.expireTimeType==1}\n\t\t\t\t<p class='expires'>使用期限：领取后${coupon.expireDays||''}天内有效</p>\n\t\t\t\t{else}\n\t\t\t\t<p class='expires'>使用期限：${formatTime(coupon.couponActiveTime,'yyyy.MM.dd')}-${formatTime(coupon.couponExpireTime,'yyyy.MM.dd')}</p>\n\t\t\t\t{/if}\n\t\t\t\t<span class='gap gap-left' style=\"${areaBgStyle}\"></span>\n\t\t\t\t<span class='gap gap-right' style=\"${areaBgStyle}\"></span>\n\t\t\t</div>\n\t\t\t{/list}\n\t\t</div>\n\t</section>\n</article>");
I$(480, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var h, f = a._$add(s.minifyHtml(r));
    l._$$Coupon = t._$klass();
    h = l._$$Coupon._$extend(o);
    h.__reset = function(t) {
        var e = t.json.data || [];
        if (0 != e.length) { this.__super(t);
            var n = this.__initData(t);
            this.__render(n) } };
    h.__initData = function(t) { this.__super(t);
        var e = t.json.data || [],
            n = e.length,
            i = n < 4 ? 3 : 4,
            a = t.areaBgColor || "#fff",
            o = t.imgAreaBgColor || "#ffcd75",
            r = "background:" + a + ";",
            l = "background:" + o + ";",
            c = 1e3;
        switch (n) {
            case 1:
                c = 324;
                break;
            case 2:
                c = 662 }
        var d = "width:" + c + "px;";
        var u = { list: e, showType: i, areaBgStyle: r, imgAreaBgStyle: l, boxWidth: c, boxStyle: d };
        s.merge(u, { jointDaLabel: s.jointDaLabel, formatTime: s.formatTime, replaceBr: function(t) {
                return (t || "").replace(/<br>|<br\/>/gim, " ") } });
        return u };
    h.__render = function(t) { this.__super();
        a._$render(this._$getBody(), f, t) };
    return l._$$Coupon }, 1, 4, 2, 3, 239, 471, 472, 604);
I$(284, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _, p, m, g) {
    var g;
    var v = t._$klass();
    g = v._$extend(a._$$EventTarget);
    g.__reset = function(t) { this.__supInit(t);
        this.__initJstMap();
        this.__zoneMap(t) };
    g.__zoneMap = function(t) { t = this.__extendOptions(t, ["id", "zoneKind", "zoneIndex", "isRecommend"]);
        switch (+t.zoneKind) {
            case 1:
            case 9:
                if (9 == t.zoneKind && "1" == t.isRecommend) { this.__renderBrandRecmd(t);
                    break }
            case 16:
                this.__renderJst(t);
                break;
            case 21:
                this.__renderCoupon(t);
                break;
            case 22:
                this.__renderZoneRecmd(t) } };
    g.__renderJst = function(t) {
        var n = t.id,
            i = t.zoneIndex,
            a = t.zoneKind,
            s = t.json.zone_data || [],
            o = t.json.kaolaSystemTime || window.kaolaSystemTime;
        if (n) e._$forEach(s, function(t) {
            var e = this.__jstMap[a];
            if (e) e._$allocate({ id: n, zoneIndex: i, kaolaSystemTime: o, zone: t, cbloginOk: this._$dispatchEvent._$bind(this, "cbloginOk") }) }, this) };
    g.__initJstMap = function() { this.__jstMap = { 1: r, 9: l, 16: d } };
    g.__renderCoupon = function(t) { t = this.__extendOptions(t, ["imgAreaBgColor", "areaBgColor"]);
        h._$allocate(t) };
    g.__renderZoneRecmd = function(t) {
        var e = t.id,
            n = t.zoneIndex,
            i = t.zoneKind,
            a = t.json.data || [],
            s = o("#" + e)._$attr("bgColor"),
            r = { list: a, bgColor: s };
        u._$allocate({ id: e, zoneIndex: n, zoneKind: i, data: r }) };
    g.__renderBrandRecmd = function(t) {
        var e = t.id,
            n = t.zoneIndex,
            i = t.zoneKind,
            a = t.json.data || {};
        c._$allocate({ id: e, zoneIndex: n, zoneKind: i, data: a }) };
    g.__extendOptions = function(t, e) { n.extend(t, this.__getNodeAttr(t.node, e), !0);
        return t };
    g.__getNodeAttr = function(t, n) {
        var i = {};
        e._$forEach(n || [], function(e) { i[e] = s._$attr(t, e) || "" });
        return i };
    return v }, 1, 2, 15, 3, 23, 4, 79, 475, 476, 477, 478, 479, 480);
I$(72, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f) {
    var f;
    var _ = t._$klass();
    f = _._$extend(i._$$EventTarget);
    f.__reset = function(t) { this.__supInit(t);
        this.__cfg(t);
        this.__bindScroll() };
    f.__cfg = function(t) { this._detectClass = t.detectClass || ".j-async";
        this._exploreDist = t.exploreDist || 200;
        this._inAjax = {};
        this._ajaxCount = {} };
    f.__bindScroll = function() { this.__onWinScrollThrottle = s.throttle(this.__onWinScroll._$bind(this), 100);
        n._$addEvent(window, "scroll", this.__onWinScrollThrottle);
        n._$dispatchEvent(window, "scroll") };
    f.__onWinScroll = function() {
        var t = o(this._detectClass);
        if (t.length) t._$forEach(function(t) { this.__isInViewPort(t) && this.__getZoneData(t) }._$bind(this));
        else n._$delEvent(window, "scroll", this.__onWinScrollThrottle) };
    f.__isInViewPort = function(t) {
        var e = t.getBoundingClientRect(),
            n = e.top || 0,
            i = e.bottom || 0,
            a = this._exploreDist,
            s = document.documentElement.clientHeight + a,
            o = 0 == n && 0 == i;
        return !o && (n > -a && n < s || i > -a && i < s || n < -a && i > s) };
    f.__getRequestUrl = function(t) {
        var e = "",
            n = window.syncData.isPreview,
            i = window.activityId,
            s = a._$attr(t, "id"),
            o = a._$attr(t, "isRecommend"),
            r = +a._$attr(t, "zoneKind");
        switch (r) {
            case 1:
                if ("1" == o) { e = "/activity/get/recommend_goods_list/" + i + "/" + s + ".html";
                    e += n ? "?isPreview=1" : "";
                    break }
            case 9:
                if ("1" == o && 9 == r) { e = "/activity/get/recommend_brand_list/" + i + "/" + s + ".html";
                    e += n ? "?isPreview=1" : "";
                    break }
            case 16:
                e = n ? "/activityshow/preview/getActivityShowZone/" + i + "/" + s + ".html" : "/activity/detail/getActivityShowZone/" + i + "/" + s + ".shtml";
                break;
            case 21:
                e = n ? "/activity/preview/coupon/getCouponShowZone/" + i + "/" + s + ".html" : "/activity/coupon/getCouponShowZone/" + i + "/" + s + ".shtml";
                break;
            case 22:
                e = "/activity/get/recommend_show_list.html" }
        return e };
    f.__getZoneData = function(t) {
        var e = a._$attr(t, "id"),
            n = this.__getRequestUrl(t);
        var i = !!this._inAjax[e],
            s = this._ajaxCount[e] || 0;
        if (!(i || s > 2)) { this._inAjax[e] = !0;
            this._ajaxCount[e] = s + 1;
            r(n, { method: "get", norest: !0, onload: function(n) {
                    var i = n || {};
                    if (i.success) { l._$allocate({ node: t || {}, json: i, cbloginOk: this._$dispatchEvent._$bind(this, "cbloginOk") });
                        a._$delClassName(t, "j-async") } else a._$remove(e, !1);
                    this._inAjax[e] = !1 }._$bind(this), onerror: function(t) { this._inAjax[e] = !1 }._$bind(this) }) } else s > 2 && a._$delClassName(t, "j-async") };
    return _ }, 1, 2, 3, 23, 4, 15, 25, 6, 284);
I$(49, function(t, e, n, i, a, s, o, r, l, c) {
    var d = function() {
        var t = function(t) {
            return (t < 10 ? "0" : "") + t };
        var e = 6e4,
            n = 60 * e,
            i = 24 * n;
        return function(a) {
            var s = +a > 0 ? +a : 0;
            var o = parseInt(s / i, 10),
                r = parseInt(s % i / n, 10),
                l = parseInt(s % i % n / e, 10),
                c = parseInt(s % i % n % e / 1e3, 10),
                d = parseInt(s % i % n % e % 1e3, 10);
            if (1 === o && 0 === r) { o = 0;
                r = 24 }
            return { d: o, h: r, m: l, s: c, ms: d, dd: t(o), hh: t(r), mm: t(l), ss: t(c) } } }();
    s._$$CountDown = t._$klass();
    c = s._$$CountDown._$extend(n._$$EventTarget);
    c.__reset = function(t) { this.__super(t);
        this.__dvalue = Number(t.dvalue);
        this.__deadLine = Number(t.deadline);
        this.__parent = t.parentnode;
        this.__timeNodes = a._$getByClassName(this.__parent, t.nodeflag);
        this.__update() };
    c.__update = function() {
        var t = (new Date).getTime(),
            e = t + this.__dvalue,
            n = this.__deadLine - e;
        if (n <= 0) var i = d(0);
        else {
            var i = d(n);
            window.setTimeout(function() { this.__update() }._$bind(this), 500) }
        this.__setTimeShow(i) };
    c.__setTimeShow = function(t) {
        var e = 0,
            n = this.__timeNodes.length,
            i, s;
        for (; e < n; e++) { i = this.__timeNodes[e];
            s = a._$attr(i, "data-timekey");
            i.innerText = t[s] } };
    return s._$$CountDown }, 1, 2, 23, 3, 4);
I$(267, '{#if type == 0}\n<div class="operation">\n{#if categoryId==-1 && categoryList.length > 0}\n<div class="m-classify clearfix">\n\t<div class="name">分类：</div>\n\t<div class="hdbrands" r-class=\'{{"autoheight": catListInfo.more == true || catListInfo.offsetHeight < 90, "line2height": catListInfo.more == false && catListInfo.offsetHeight > 90}}\'>\n\t\t<div class="hdbrands2">\n\t\t\t<div class="brands all" ref=catlist>\n\t\t\t\t{#list categoryList as item}\n\t\t\t\t{#if category == item.categoryId}\n\t\t\t\t<a class="active" href="javascript:void(0)" on-click={this.changeCategory(item.categoryId)}>{item.categoryName}<b r-html={\'&#xe61b;\'}>x</b></a>\n\t\t\t\t{#else}\n\t\t\t\t<a href="javascript:void(0)" on-click={this.changeCategory(item.categoryId)}>{item.categoryName}</a>\n\t\t\t\t{/if}\n\t\t\t\t{/list}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t{#if catListInfo.offsetHeight > 90}\n\t<div class="morewrap">\n\t\t{#if catListInfo.more}\n\t\t<div class="more" on-click={this.moreShow(catListInfo)}>收起<span class="packup"></span></div>\n\t\t{#else}\n\t\t<div class="more" on-click={this.moreShow(catListInfo)}>更多<span></span></div>\n\t\t{/if}\n\t</div>\n\t{/if}\n</div>\n{/if}\n\n{#if proList.length > 0}\n{#list proList as property}\n<div class="m-classify property clearfix">\n\t<div class="name">{property.proNameCn||\'\'}：</div>\n\t<div class="hdbrands">\n\t\t<div class="hdbrands2">\n\t\t\t<div class="brands all" ref={\'pro\'+property_index}>\n\t\t\t\t{#list property.proValues as item}\n\t\t\t\t{#if proSelectIds.indexOf(\',\'+item.proNameValueId+\',\') != -1}\n\t\t\t\t<a class="active" href="javascript:void(0)" on-click={this.changePrototype(property.proNameId,item.proNameValueId)}>{item.proValueDesc}<b r-html={\'&#xe61b;\'}>x</b></a>\n\t\t\t\t{#else}\n\t\t\t\t<a href="javascript:void(0)" on-click={this.changePrototype(property.proNameId,item.proNameValueId)}>{item.proValueDesc}</a>\n\t\t\t\t{/if}\n\t\t\t\t{/list}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t{#if property.prototypeInfo.offsetHeight > 90}\n\t<div class="morewrap">\n\t\t{#if property.prototypeInfo.more}\n\t\t<div class="more" on-click={this.moreShow(property.prototypeInfo)}>收起<span class="packup"></span></div>\n\t\t{#else}\n\t\t<div class="more" on-click={this.moreShow(property.prototypeInfo)}>更多<span></span></div>\n\t\t{/if}\n\t</div>\n\t{/if}\n</div>\n{/list}\n{/if}\n</div>\n{/if}\n\n<div class="operation">\n<div class="m-filter clearfix">\n\t<div class="hdorder clearfix" id="order">\n    <dl class="order">\n        <dd class="jtag" r-class=\'{{"active": sortfield==0}}\' on-click={this.sortClick(0)}>\n          <span>人气{#if sortfield==0}{#if isDesc==true}<span class="arrow-down"></span>{#else}<span class="arrow-up"></span>{/if}{/if}</span>\n        </dd>\n\n        <dd class="jtag" r-class=\'{{"active": sortfield==2}}\' on-click={this.sortClick(2)}>\n          <span>销量{#if sortfield==2}{#if isDesc==true}<span class="arrow-down"></span>{#else}<span class="arrow-up"></span>{/if}{/if}</span>\n        </dd>\n\n        <dd class="jtag" r-class=\'{{"active": sortfield==1}}\' on-click={this.sortClick(1)}>\n          <span>价格{#if sortfield==1}{#if isDesc==true}<span class="arrow-down"></span>{#else}<span class="arrow-up"></span>{/if}{/if}</span>\n        </dd>\n    </dl>\n    <label class="m-checkbox jtag" r-class=\'{{"m-checked": isStock==true}}\' on-click={this.filterResultClick(\'isStock\')}>\n        <span class="box"><i r-html={\'&#xe601;\'}></i><em r-html={\'&#xe60b;\'}></em></span><span>只选有货商品</span>\n    </label>\n    <label class="m-checkbox jtag" r-class=\'{{"m-checked": isPromote==true}}\' on-click={this.filterResultClick(\'isPromote\')}>\n        <span class="box"><i r-html={\'&#xe601;\'}></i><em r-html={\'&#xe60b;\'}></em></span><span>仅显示促销</span>\n    </label>\n    {#if totalPage && totalPage != 0}\n    <div class="simplePage">\n        <span class="num"><i>{current}</i>/{totalPage}</span>\n        {#if current==1}\n        <span class="arrow-left def-left"></span>\n        {#else}\n        <a href="javascript:void(0);" class="arrow-left" on-click={this.paging(-1)}></a>\n        {/if}\n        {#if current==totalPage}\n        <span class="arrow-right def-right"></span>\n        {#else}\n        <a href="javascript:void(0);" class="arrow-right" on-click={this.paging(1)}></a>\n        {/if}\n    </div>\n    {/if}\n\n    </div>\n</div>\n</div>\n\n{#if total != 0}\n<div class="m-result">\n\t<ul class="clearfix" >\n\t\t{#list list as goods}\n\t\t<li class="goods">\n\t\t\t<div class="goodswrap" r-class=\'{{"promotion": !!goods.saleShow}}\'>\n        \t<div class="img">\n\t\t\t\t<a target="_blank" href="/product/{goods.goodsId}.html">\n\t\t\t\t<img alt="{goods.title}" class="img-lazyload" data-src="{goods.imageUrl|imgThumbnailUrl:262,262,90}" >\n\t\t\t\t\t{#if !goods.storage}\n\t\t\t\t\t<span class="soldout"></span>\n\t\t\t\t\t{#elseif !!goods.promoteUrl}\n\t\t\t\t\t<img class="promote" src="{goods.promoteUrl|noProtocol}" />\n\t\t\t\t\t{#else}\n\t\t\t\t\t<div class="activityflag">\n\t\t\t\t\t\t{#if goods.bestselling && goods.bestselling== true}\n\t\t\t\t\t\t<span class="hot">热销</span>\n\t\t\t\t\t\t{#elseif goods.isNewGoods && goods.isNewGoods== true}\n\t\t\t\t\t\t<span class="new">新品</span>\n\t\t\t\t\t\t{/if}\n\t\t\t\t\t</div>\n\t\t\t\t\t{/if}\n          \t\t</a>\n          \t\t{#if !goods.storage}\n          \t\t<a class="arrivenotice" target="_blank" href="/product/{goods.goodsId}.html"><span class="icon"></span><span class="text">到货通知</span></a>\n          \t\t{#else}\n            \t<span class="favbtn"  r-class=\'{{"favt": goods.isFavorite==true}}\' on-click={this.addFav(goods)}><span class="iconfont ic" r-html={\'&#xe62a;\'}></span> 收藏</span>\n          \t\t{/if}\n        \t</div>\n        \t<div class="desc clearfix">\n\t\t\t\t<p class="price">\n\t\t\t\t\t<span class="cur"><i>¥</i>{#if goods.actualCurrentPrice}{goods.actualCurrentPrice}{#else}{goods.suggestPrice}{/if}</span>\n\t\t\t\t\t{#if goods.memberCount && goods.memberCount > 0}\n\t\t\t\t\t\t{#if !!goods.isShowDiscountCost}\n\t\t\t\t\t\t<b class="combinedLabel">单{goods.memberUnitName||\'件\'}¥<i>{goods.memberPrice}</i></b>\n\t\t\t\t\t\t{/if}\n\t\t\t\t\t{#else}\n\t\t\t\t\t\t<b class="combinedLabel">{goods.discount}折</b>\n\t\t\t\t\t{/if}\n\n\t\t\t\t\t{#if (goods.isPostageFree)==1}\n\t\t\t\t\t\t<b class="combinedLabel">包邮</b>\n\t\t\t\t\t{/if}\n\t\t\t\t\t<span class="marketprice">¥<del>{goods.marketPrice}</del></span>\n\t\t\t\t</p>\n\t\t\t\t<p class="titlewrap">\n\t\t\t\t{#if goods.memberCount && goods.memberCount > 0}\n\t\t\t\t\t<a class="title" href="/product/{goods.goodsId}.html" target="_blank"><i>{goods.memberCount}{goods.memberUnitName||\'件\'}装</i> | {goods.title}</a>\n\t\t\t\t{#else}\n\t\t\t\t\t<a class="title" href="/product/{goods.goodsId}.html" target="_blank">{goods.title}</a>\n\t\t\t\t{/if}\n\t\t\t\t</p>\n\t\t\t\t{#if goods.saleShow}\n\t\t\t\t<p class="saelsinfo">\n\t\t\t\t\t{#if !!goods.danpinPromotionTitleLink}\n\t\t\t\t\t<span class="activity danpin">{goods.danpinPromotionTitleLink.split(\'-\')[0]}</span>\n\t\t\t\t\t{/if}\n\t\t\t\t\t{#if !!goods.zhengdanPromotionTitleLink}\n\t\t\t\t\t<span class="activity zhengdan" r-class=\'{{"large": (goods.zhengdanPromotionTitleLink.indexOf("N元任选") != -1 || goods.zhengdanPromotionTitleLink.indexOf("税费补贴") != -1)}}\' >{goods.zhengdanPromotionTitleLink.split(\'-\')[0]}</span>{/if}&nbsp;{goods.saleShow}</p>\n\t\t\t\t{/if}\n\t\t\t\t<p class="goodsinfo clearfix">\n\t\t\t\t\t<a target="_blank" href="/product/{goods.goodsId}.html#mainBtmWrap" class="comments"><span class="icon"></span>{goods.commentGoodCount}</a>\n\t\t\t\t\t<span class="proPlace ellipsis">{goods.productionPlace||\'\'}</span>\n\t\t\t\t</p>\n        \t</div>\n      \t\t</div>\n      \t</li>\n\t\t{/list}\n\t</ul>\n</div>\n{#else}\n<div class="m-empty">\n    <div class="content">\n\t\t<p style="font-size:18px;">抱歉，没有找到符合条件的商品</p>\n\t\t<br>\n\t\t<p>建议您：</p>\n\t\t<p>1、适当减少筛选条件，可以获得更多结果</p>\n\t\t<p>2、尝试其他关键词</p>\n    </div>\n    <span class="errorimg"></span>\n</div>\n{/if}\n\n<div id="pageNavWrap">\n    <div id="pageNav" class="m-centerpager clearfix center">\n        <pager total={Math.ceil(total/limit)} current={current}></pager>\n    </div>\n</div>');
I$(50, function(t, e, n, i, a, s) {
    var o = i.extend({ url: "/activity/brand/getGoods.html", template: e, scrollToTop: !0, hasInitPro: !1, data: { list: [], type: 0, categoryList: [], categoryId: "", catListInfo: { offsetHeight: 0, more: !1 }, proSelectIds: ",", isSearch: !0, empty: !1, category: "", brandId: "", sortfield: 0, isDesc: !0, isStock: !1, isPromote: !1, schemeId: "" }, config: function(t) { n.extend(t, { total: 1, current: 1, limit: 60, list: [] });
            if (t.categoryId && t.categoryId != -1) t.category = t.categoryId;
            this.$watch(this.watchedAttr, function() {
                if (this.shouldUpdateList()) this.__getList() }) }, search: function(t, e) {
            if (1 != this.data.current) this.data.current = 1;
            else this.__getList() }, changeCategory: function(t) {
            if (this.data.category == t) this.data.category = "";
            else this.data.category = t;
            this.search() }, changePrototype: function(t, e) {
            var n = this.data.proSelectIds;
            if (n.indexOf("," + t + "_") != -1)
                if (n.indexOf(e) != -1) n = n.replace("," + e + ",", ",");
                else {
                    var i = new RegExp("," + t + "_\\d+,", "ig");
                    n = n.replace(i, "," + e + ",") }
            else n += e + ",";
            this.data.proSelectIds = n;
            this.search() }, sortClick: function(t) {
            if (this.data.sortfield == t) this.data.isDesc = !this.data.isDesc;
            else { this.data.sortfield = t;
                this.data.isDesc = !0;
                if (1 == t) this.data.isDesc = !1 }
            this.search() }, filterResultClick: function(t) { this.data[t] = !this.data[t];
            this.search() }, paging: function(t) { this.data.current += t }, moreShow: function(t) { t.more = !t.more }, calBrandsParam: function() {
            var t = this.data,
                e = t.proList.length,
                n = 0,
                i;
            if (this.$refs.catlist) {
                var a = this.$refs.catlist.offsetHeight,
                    s = 0;
                t.catListInfo = { offsetHeight: a, more: !1 } }
            for (; n < e; n++) { i = this.$refs["pro" + n];
                if (i) {
                    var a = i.offsetHeight;
                    t.proList[n]["prototypeInfo"] = { offHeight: a, more: !1 } } }
            this.$update() }, addFav: function(t) {
            var e = "/favoriteAjax/add.html",
                n = 1;
            if (1 == t.isFavorite) { e = "/favoriteAjax/delete.html";
                n = -1 }
            this.$request(e, { method: "POST", data: { goodsId: t.goodsId }, type: "json", norest: !0, onload: function(e) {
                    if (200 == e.retcode) this.changeFavStatus(t);
                    else if (461 == e.retcode) this.loginWin = a._$allocate({ logincallback: this.getLoginOK2._$bind(this, t) })._$show();
                    else if (491 == e.retcode) this.changeFavStatus(t);
                    else s._$allocate({ message: e.retdesc })._$show() }._$bind(this), onerror: function(t) { s._$allocate({ message: "内部错误！" })._$show() } }) }, changeFavStatus: function(t) { t.isFavorite = !t.isFavorite;
            this.$update() }, getLoginOK2: function(t, e) {
            if (0 == e) this.addFav(t) }, getListParam: function() {
            var t = this.data,
                e = [],
                n = t.schemeId,
                i = t.category;
            if (0 == t.type) n = "";
            else if (1 == t.type) i = "";
            return { pageNo: t.current, pageSize: t.limit, sortfield: t.sortfield, isDesc: t.isDesc, isStock: t.isStock, b: t.brandId, c: i, source: 1, proIds: t.proSelectIds.slice(1, -1), goodsTag: n } }, __getList: function() {
            var t = this.data;
            var e = { data: this.getListParam(), method: "POST", type: "json", progress: !0, onload: function(e) {
                    if (200 == e.retcode) {
                        var n = e.result,
                            i = n.goodsList || [];
                        this.data.empty = !1;
                        if (!this.hasInitPro) this.initProOnce(n);
                        t.total = n.total;
                        t.totalPage = Math.ceil(n.total / t.limit) || 1;
                        t.list = i;
                        t.result = n;
                        if (window.lazyImgTrigger) window.setTimeout(window.lazyImgTrigger, 60) } else {
                        if (this.data.isSearch) { this.data.empty = !0;
                            t.brandNameList = [] }
                        t.list = [];
                        t.total = t.totalPage = 0 }
                    this.data.isSearch = !1 }, onerror: function(e) { this.data.empty = !0;
                    t.list = t.brandNameList = [];
                    t.total = t.totalPage = 0 } };
            this.$request(this.url, e) }, initProOnce: function(t) {
            var e = this.data;
            e.categoryList = t.frontCategoryList || [];
            e.proList = t.propertyNameList || [];
            window.setTimeout(this.calBrandsParam._$bind(this), 50);
            this.hasInitPro = !0 } });
    return o }, 2, 267, 15, 268, 7, 8);
I$(262, ".#<uispace>{width:518px;text-align:center;}\n.#<uispace> .cntbox{padding:30px;font-size: 24px;} \n.#<uispace> .btnbox{padding:0 0 40px;}\n.#<uispace> .btnbox .u-btn{display:inline-block;*display:inline;zoom:1;min-width:70px;padding:0 10px;height:34px;margin:0 10px;border:1px solid #D22147;cursor: pointer;\n\ttext-decoration: none;text-align:center;line-height:34px;color:#fff;font-size:14px;background:#D22147;}\n.#<uispace> .btnbox .u-btn:hover{background-color: #F5345E;border-color: #F5345E;color:#fff;}\n.#<uispace> .btnbox .u-btn-cancel{color: #666;border-color: #ccc;background: #fff;}\n.#<uispace> .btnbox .u-btn-cancel:hover{background: #fff;color: #666;}");
I$(263, '<div class="cfmbox">\n\t<div class="cntbox j-flag"></div>\n\t<div class="btnbox">\n\t\t<a href="javascript:void(0);" class="u-btn j-flag">确定</a>\n\t\t<a href="javascript:void(0);" class="u-btn u-btn-cancel j-flag">取消</a>\n\t</div>\n</div>\n');
I$(39, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var h = e._$pushCSSText(i),
        f = s._$addNodeTemplate(a);
    r._$$ConfirmWindow = NEJ.C();
    u = r._$$ConfirmWindow._$extend(t);
    u.__initNode = function() { this.__super();
        var t = e._$getByClassName(this.__body, "j-flag");
        this.__box = t[0];
        this.__okBtn = t[1];
        this.__cancelBtn = t[2];
        n._$addEvent(this.__okBtn, "click", this.__onOK._$bind(this));
        n._$addEvent(this.__cancelBtn, "click", this.__onCancel._$bind(this)) };
    u.__reset = function(t) { t.title = t.title || "提示";
        t.clazz = t.clazz || "m-confirm";
        t.noCancel = t.noCancel || !1;
        this.__super(t);
        this.__box.innerHTML = t.msg || "";
        this.__okBtn.innerHTML = t.oktext || "确定";
        this.__cancelBtn.innerHTML = t.canceltext || "取消";
        if (t.noCancel) this.__cancelBtn.style.display = "none";
        if (t.okBtnText) this.__okBtn.innerText = t.okBtnText };
    u.__initXGui = function() { this.__seed_css = h;
        this.__seed_html = f };
    u.__onOK = function(t) { n._$stop(t);
        this._$dispatchEvent("onok");
        this._$hide() };
    u.__onCancel = function(t) { n._$stop(t);
        this._$dispatchEvent("oncancel");
        this._$hide() };
    return r._$$ConfirmWindow }, 229, 4, 3, 262, 263, 233, 239);
I$(180, function(t, e, n, i, a, s, o, r) {
    var l;
    a._$$AnimEaseInOut = e._$klass();
    l = a._$$AnimEaseInOut._$extend(i._$$AnimBezier);
    l.__reset = function(t) { t = n._$merge({}, t);
        t.timing = "easeinout";
        this.__super(t) };
    if (!0) t.copy(t.P("nej.ut"), a);
    return a }, 215, 1, 2, 96);
I$(91, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _) {
    var _;
    d._$$HelpModule = t._$klass();
    _ = d._$$HelpModule._$extend(l);
    _.__init = function(t) {
        if (window.useHelpModule) { this.__supInit(t);
            this.__initLeftNav() } };
    _.__initLeftNav = function() {
        if (s("#helpLeftNav")) { s("#helpLeftNav .active")._$parent(".top", !0)._$delClassName("collapsed")._$addClassName("expanded");
            s("#helpLeftNav .tit")._$on("click", function() {
                var t = s(this)._$parent();
                if (t._$hasClassName("collapsed")) t._$delClassName("collapsed")._$addClassName("expanded");
                else t._$delClassName("expanded")._$addClassName("collapsed") }) } };
    d._$$HelpModule._$allocate() }, 1, 2, 3, 4, 78, 79, 51, 15, 5, 6);
I$(288, '{#if list.length!=0}\n<h4 class="newRecomTitle clearFix">大家都在买<b>全网最热门的商品推荐</b></h4>\n<div class="m-reclst clearFix">\n\t{#list list as item}\n\t<div class="newRecomItemWrap" on-click={this.clickRecommendTj(item_index)}>\n\t\t{#if item.memberCount && item.memberCount>0}\n\t\t<a class="itemImg" target="_blank" href="/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=0">\n\t\t\t<img border="0" title="{item.memberCount}{item.memberUnitName || \'件\'}装 | {item.title}" alt="{item.memberCount}{item.memberUnitName || \'件\'}装 | {item.title}" src="{(item.imageUrlFor430||item.imageUrl)|noProtocol}" style="opacity: 1;">\n\t\t</a>\n\t\t<p class="itemTitle">\n\t\t\t<a href="/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=1" title="{item.memberCount}{item.memberUnitName || \'件\'}装 | {item.title}" target="_blank"><b>{item.memberCount}{item.memberUnitName || \'件\'}装</b>&nbsp;|&nbsp;{item.title}</a>\n\t\t</p>\n\t\t{#else}\n\t\t<a class="itemImg" target="_blank" href="/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=0">\n\t\t\t<img border="0" title="{item.title}" alt="{item.title}" src="{(item.imageUrlFor430||item.imageUrl)|noProtocol}" style="opacity: 1;">\n\t\t</a>\n\t\t<p class="itemTitle">\n\t\t\t<a href="/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=1" title="{item.title}" target="_blank">{item.title}</a>\n\t\t</p>\n\t\t{/if}\n\t\t<div class="itemInfo clearfix">\n\t\t\t<p class="price">¥{item.actualCurrentPrice}<span class="marprice">¥<del>{item.marketPrice}</del></span></p>\n\t\t\t<a href="/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=2#mainBtmWrap" target="_blank" class="comment">{item.commentCount} 人已评价</a>\n\t\t</div>\n\t</div>\n\t{/list}\n</div>\n{/if}');
I$(289, function(t, e, n, i, a) {
    var s = i.extend({ printRecommendLog: "/recommend/printRecommendLog.html", init: function() { this.supr();
            e._$addEvent(window, "scroll", a.throttle(this.onBodyScrollCheck._$bind(this), 100)) } });
    i.filter({ encode: function(t) {
            return t ? window.encodeURIComponent(t) : "" } });
    return s }, 2, 3, 15, 268, 15);
I$(290, function(t, e, n, i, a, s, o, r, l, c, d) { o._$$ScrollTo = t._$klass();
    d = o._$$ScrollTo._$extend(n._$$EventTarget);
    d.__init = function(t) { this.__super(t) };
    d.__reset = function(t) {
        var n = this;
        n.__super(t);
        n._elem = t.elem || a._$get(t.id || "");
        n._page = "停留打点^_^" + (t.page || "");
        n._module = t.module || "";
        n._param = t.param || (e._$isArray(t.param) ? [] : {});
        n._waitMills = t.waitMills || 1e3;
        n._area = t.area || {};
        if (n._elem && t.page && t.module) { n._hasCalled = !1;
            n._blocking = !1;
            n._sto = void 0;
            i._$addEvent(window, "scroll", n.__cbFn._$bind(n));
            i._$addEvent(window, "resize", n.__cbFn._$bind(n));
            n.__cbFn._$bind(n)() } };
    d.__cbFn = function() {
        var t = this;
        var e = t._area,
            n = t._waitMills;
        if (t._elem.getBoundingClientRect && !t._hasCalled) {
            var i = t._elem.getBoundingClientRect(),
                a = i.top || 0,
                s = i.bottom || 0,
                o = document.documentElement.clientHeight,
                r = e.top || 0,
                l = o - (e.bottom || 0);
            if (a > r && a < l || s > r && s < l || a < r && s > l) {
                if (t._blocking) return;
                t._blocking = !0;
                t._sto = setTimeout(function() { t._blocking = !1;
                    t.__sendDaPush() }, n) } else { t._blocking = !1;
                if (t._sto) { clearTimeout(t._sto);
                    t._sto = void 0 } } } };
    d.__sendDaPush = function() {
        var t = this,
            e = t._param;
        t._hasCalled = !0;
        if ("function" == typeof e) e = e.apply(window);!!window._dapush && window._dapush("_trackEvent", t._page, t._module, JSON.stringify(e) || "", { userAccount: window.account, userId: window.account }) };
    return o._$$ScrollTo }, 1, 2, 23, 3, 4, 25);
I$(81, function(t, e, n, i, a, s) {
    var o = i.extend({
        template: n,
        data: { list: [] },
        getListParam: function() {
            var t = a.extend({}, this.getExtraParam(this.data));
            delete t.tongji;
            return t },
        url: "/recommend/getRecommendGoods.html",
        xdrOption: { method: "POST", norest: !0, type: "json" },
        onBodyScrollCheck: function(n) {
            var i = e._$offset(this.$root.parentNode, document.body);
            var a = e._$getPageBox();
            if (a.scrollTop + a.clientHeight > i.y && !this.data.recommendSent) { this.daPush();
                this.data.recommendSent = !0;
                var s = [];
                t._$forEach(this.data.list, function(t) { s.push('{"id":' + (t.goodsId || "") + ',"recType":"' + (t.recType || "") + '","reason":"' + (t.reason || "") + '","weight":"' + (t.weight || "") + '"}') });
                this.$request(this.printRecommendLog, { data: { userId: window.account || "", date: +new Date, position: this.data.condition.tongji.position || "大家都在买", items: "[" + s.join(",") + "]", resource: "挖掘组" }, onload: function() {}, onerror: function() {} }) }
        },
        daPush: function() { a.daEvent(this.data.condition.tongji.category || "推荐区域展示", this.data.condition.tongji.action || "我的优惠券", this.data.condition.tongji.lable || "大家都在买") },
        clickRecommendTj: function(t) {
            var e = this.data.list[t] || {};
            if (!event.target.getAttribute("hasClick")) { event.target.setAttribute("hasClick", 1);
                this.$request(this.printRecommendLog, { data: { userId: window.account || "", date: +new Date, position: this.data.condition.tongji.position || "大家都在买", clickItem: '{"id":' + (e.goodsId || "") + ',"recType":"' + (e.recType || "") + '","reason":"' + (e.reason || "") + '","weight":"' + (e.weight || "") + '"}', resource: "挖掘组" }, onload: function() {}, onerror: function() {} }) } },
        __getList: function() {
            var e = this.data;
            var n = { progress: !0, data: this.getListParam(), onload: function(t) {
                    if (200 == t.retcode) {
                        var n = t,
                            i = n.list || [];
                        a.mergeList(i, e.list, e.key || "id");
                        e.total = n.totalCount;
                        e.list = i;
                        if (0 == i.length) this.__setParentHide() } else this.__setParentHide() }, onerror: function(t) { this.__setParentHide() } };
            if (this.xdrOption) a.extend(n, this.xdrOption);
            if (n.norest && !t._$isString(n.data)) n.data = t._$object2query(n.data);
            if ("GET" == n.method.toUpperCase()) n.query = n.data;
            this.$request(this.data.url || this.url, n) },
        __setParentHide: function() { this.parentNode.style.display = "none" },
        __bindDaPush: function() {
            var t = this,
                e = t.data,
                n = e.dapushParam;
            if (n && n.page) {
                var i = { param: function() {
                        for (var t = 0, n = [], i = e.list.length; t < i; t++) n.push(e.list[t].goodsId);
                        return n } };
                a.extend(i, n);
                s._$allocate(i) } },
        config: function(t) { a.extend(t, { total: 1, current: 1, limit: 20, list: [] });
            if (!this.data.condition.tongji) this.data.condition.tongji = { category: "", action: "", lable: "", position: "", from: "", query: "" };
            this.__bindDaPush();
            this.$watch(this.watchedAttr, function() {
                if (this.shouldUpdateList()) this.__getList() }) }
    });
    return o
}, 2, 4, 288, 289, 15, 290);
I$(291, '{#if list.length!=0}\n\t<h4 class="newRecomTitle">猜你喜欢<b>根据你的浏览记录推荐的商品</b>\n       {! <a href="javascript:;" class="rec-refresh" on-click={this.refresh($event)}>\n         <span class="refresh-icon" r-html={refreshIcon}></span>\n         <span class="refresh-txt">换一批</span>\n       </a> !}\n    </h4>\n\t<div class="m-reclst clearfix">\n\t{#list list as item}\n\t<div class="newRecomItemWrap newRecomItemWrap-{item_index+1}" on-click={this.clickRecommendTj(item_index,item.goodsId,condition.tongji.from)}>\n\t\t{#if item.memberCount && item.memberCount>0}\n\t\t<a class="itemImg" target="_blank" href="/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=0">\n\t\t\t<img border="0" title="{item.memberCount}{item.memberUnitName || \'件\'}装 | {item.title}" alt="{item.memberCount}{item.memberUnitName || \'件\'}装 | {item.title}" src="{(item.imageUrlFor430||item.imageUrl)|noProtocol}" style="opacity: 1;">\n\t\t</a>\n\t\t<p {#if !!item.saleShow}class="itemTitle hasPromotion"{#else}class="itemTitle"{/if}>\n\t\t\t<a class="protitle" href="/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=1" title="{item.memberCount}{item.memberUnitName || \'件\'}装 | {item.title}" target="_blank"><b>{item.memberCount}{item.memberUnitName || \'件\'}装</b>&nbsp;|&nbsp;{item.title}</a>\n\t\t</p>\n\t\t{#else}\n\t\t<a class="itemImg" target="_blank" href="/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=0">\n\t\t\t<img border="0" title="{item.title}" alt="{item.title}" src="{(item.imageUrlFor430||item.imageUrl)|noProtocol}" style="opacity: 1;">\n\t\t</a>\n\t\t<p {#if !!item.saleShow}class="itemTitle hasPromotion"{#else}class="itemTitle"{/if}>\n\t\t\t<a class="protitle" href="/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=1" title="{item.title}" target="_blank">{item.title}</a>\n\t\t</p>\n\t\t{/if}\n\t\t{#if !!item.saleShow}\n\t\t<p class="promotion"><span title="{item.saleShow||\'\'}">{item.saleShow||\'\'}</span></p>\n\t\t{/if}\n\t\t<div class="itemInfo clearfix">\n\t\t\t<p class="price"><span class="symbol">¥</span>{item.actualCurrentPrice}<span class="marprice">¥<del>{item.marketPrice}</del></span></p>\n\t\t\t<a href="/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=2#mainBtmWrap" target="_blank" class="comment">{item.commentCount} 人已评价</a>\n\t\t</div>\n\t</div>\n\t{/list}\n\t</div>\n{/if}');
I$(82, function(t, e, n, i, a, s) {
    var o = i.extend({ template: n, data: { list: [] }, getListParam: function() {
            var t = a.extend({}, this.getExtraParam(this.data));
            delete t.tongji;
            return t }, url: "/recommend/getRecommendGoods.html", xdrOption: { method: "POST", norest: !0, type: "json" }, onBodyScrollCheck: function(n) {
            var i = e._$offset(this.$root.parentNode, document.body);
            var a = e._$getPageBox();
            if (a.scrollTop + a.clientHeight > i.y && !this.data.recommendSent) { this.daPush();
                this.data.recommendSent = !0;
                var s = [];
                t._$forEach(this.data.list, function(t) { s.push('{"id":' + (t.goodsId || "") + ',"recType":"' + (t.recType || "") + '","reason":"' + (t.reason || "") + '","weight":"' + (t.weight || "") + '"}') });
                this.$request(this.printRecommendLog, { data: { userId: window.account || "", date: +new Date, position: this.data.condition.tongji.position || "我的优惠券：猜你喜欢", items: "[" + s.join(",") + "]", resource: "挖掘组" }, onload: function() {}, onerror: function() {} }) } }, daPush: function() { a.daEvent(this.data.condition.tongji.category || "推荐区域展示", this.data.condition.tongji.action || "我的优惠券", this.data.condition.tongji.lable || "猜你喜欢") }, clickRecommendTj: function(t, e, n) {
            if ("homecnxh" === n) window._dapush && window._dapush("_trackEvent", "首页", "猜你喜欢", t + 1, { userAccount: window.account || "", userId: window.account || "", customData: "/product/" + e + ".html" });
            var i = this.data.list[t] || {};
            if (!event.target.getAttribute("hasClick")) { event.target.setAttribute("hasClick", 1);
                this.$request(this.printRecommendLog, { data: { userId: window.account || "", date: +new Date, position: this.data.condition.tongji.position || "我的优惠券：猜你喜欢", clickItem: '{"id":' + (i.goodsId || "") + ',"recType":"' + (i.recType || "") + '","reason":"' + (i.reason || "") + '","weight":"' + (i.weight || "") + '"}', resource: "挖掘组" }, onload: function() {}, onerror: function() {} }) } }, __getList: function() {
            var e = this.data;
            var n = { data: this.getListParam(), onload: function(t) {
                    if (200 == t.retcode) {
                        var n = t,
                            i = n.list || [];
                        a.mergeList(i, e.list, e.key || "id");
                        e.total = n.totalCount;
                        e.list = i;
                        e.refreshIcon = "&#xe61a;";
                        if (0 == i.length) this.__setParentHide() } else this.__setParentHide() }, onerror: function(t) { this.__setParentHide() } };
            if (this.xdrOption) a.extend(n, this.xdrOption);
            if (n.norest && !t._$isString(n.data)) n.data = t._$object2query(n.data);
            if ("GET" == n.method.toUpperCase()) n.query = n.data;
            this.$request(this.data.url || this.url, n) }, __setParentHide: function() { this.parentNode.style.display = "none" }, __bindDaPush: function() {
            var t = this,
                e = t.data,
                n = e.dapushParam;
            if (n && n.page) {
                var i = { param: function() {
                        for (var t = 0, n = [], i = e.list.length; t < i; t++) n.push(e.list[t].goodsId);
                        return n } };
                a.extend(i, n);
                s._$allocate(i) } }, config: function(t) { a.extend(t, { total: 1, current: 1, limit: 20, list: [] });
            if (!this.data.condition.tongji) this.data.condition.tongji = { category: "", action: "", lable: "", position: "", from: "", query: "" };
            this.__bindDaPush();
            this.$watch(this.watchedAttr, function() {
                if (this.shouldUpdateList()) this.__getList() }) } });
    return o }, 2, 4, 291, 289, 15, 290);
I$(503, '<div class="m-startbuymodal iDialogMain startBuyModal">\n\t<div class="cnt">\n\t    <div class="noticeText">{noticeTxt || \'请留下您的手机号码，该商品开抢前，考拉会第一时间通知您\'}</div>\n\t    <div class="phoneInput">\n\t        <input {#if phoneNum==\'请输入接收通知的手机号\'}class="c_ccc"{/if} type="text" ref="phoneNum" placeholder="请输入接收通知的手机号" data-holder="请输入接收通知的手机号" autocomplete="off" on-blur={this.onPhoneNumBlur()} on-focus={this.onPhoneNumFocus()} r-model={phoneNum|integer} maxlength=11 />\n\t    </div>\n\t    {#if errorMsg}\n\t    <div class="phoneErr">{errorMsg}</div>\n\t    {/if}\n\t</div>\n\t<div class="btnbar f-tac">\n\t  <a class="btn" href="javascript:void(0)" on-click={this.confirm()}>确定</a>\n\t</div>\n</div>');
I$(304, function(t, e, n, i, a, s, o, r) {
    var l = new RegExp("(^1[3|4|5|7|8|]\\d{9}$)|(^1[3|4|5|7|8|][0-9]{1}[*]{4}[0-9]{4}$)");
    var c = a.extend({ content: s, data: { title: "开抢提醒", width: 520 }, onPhoneNumFocus: function() { this.data.errorMsg = "" }, init: function() { this.supr() }, config: function(t) { t.phoneNum = t.phoneNum || o._$cookie("STARTBUYTEL") || "请输入接收通知的手机号";
            t.url = t.url || "/short/message/onsale/seckillNotify.html" }, onPhoneNumBlur: function() {
            if (!this.data.phoneNum) this.data.errorMsg = "不能为空";
            if (!l.test(this.data.phoneNum)) this.data.errorMsg = "请填写正确的手机号码！";
            else this.data.errorMsg = "" }, onPhoneNumFocus: function() {
            if ("请输入接收通知的手机号" == this.data.phoneNum) this.data.phoneNum = "";
            this.data.errorMsg = "" }, confirm: function() {
            if (l.test(this.data.phoneNum)) this.$request(this.data.url, { data: { phoneNum: this.data.phoneNum, goodsId: this.data.goodsId, tabId: this.data.tabId }, method: "POST", norest: !0, onload: function(t) {
                    if (200 == t.retcode) { o._$cookie("STARTBUYTEL", { value: t.phoneNum || "", path: "/", expires: 3650 });
                        this.$emit("confirm", t);
                        this.resultDialog.call(this, "yes", "设置成功", "考拉将在开抢前通过免费短信通知您。") } else if (402 == t.retcode) this.resultDialog.call(this, "fail", "设置失败", "因为网络等原因，设置失败。请重试。");
                    else this.resultDialog.call(this, "fail", "设置失败", t.retdesc || "") }._$bind(this) });
            else {
                if (!this.data.phoneNum) this.data.errorMsg = "不能为空";
                if (!l.test(this.data.phoneNum)) this.data.errorMsg = "请填写正确的手机号码！" } }, resultDialog: function(t, e, n) {
            var i = { title: "提示", icon: t, text: e, detail: n, btnText: "确认", customClass: "startBuyResult" };
            this.destroy();
            new r({ data: i }) } });
    return c }, 15, 4, 3, 2, 128, 503, 11, 115);
I$(311, '<article class="m-goodslist lineOfFour">\n<section class="goodsWrap f-cb">\n{#if !!goodsList}\n{#list goodsList as goods}\n\t<div class="detailWrap f-cb">\n\t\t<a class="pic" href="{goods|goodsLink}" target="_blank" title="{goods|getTitle:true}" data-param="{goods|dataParam:goods_index,curStatus}">\n\t\t\t{! 商品图片 !}\n\t\t\t<img class="proImg img-lazyload" src="{cdnBaseUrl}images/blank.gif" data-src="{(goods.imageUrl||\'\')|imgThumbnailUrl:360,360}" alt="{goods|getTitle:true}" title="{goods|getTitle:true}" >\n\t\t    {! 是否售罄 !}\n\t\t    {#if curStatus==\'ing\' && (goods|soldout)}\n\t\t\t  \t<span class="w-icon w-icon-13">&nbsp;</span>\n\t\t\t{/if}\n\t\t\t{! 自定义角标 !}\n\t\t\t{#if !!goods.cornerLabel}\n\t\t\t\t{#if (goods.cornerLabel||\'\').length>4}\n\t\t\t\t<span class="custom-corner gt4"><b>{goods.cornerLabel||\'\'}</b></span>\n\t\t\t\t{#elseif (goods.cornerLabel||\'\').length==4}\n\t\t\t\t<span class="custom-corner"><b>{goods.cornerLabel||\'\'}</b></span>\n\t\t\t\t{#else}\n\t\t\t\t<span class="custom-corner lt4"><b>{goods.cornerLabel||\'\'}</b></span>\n\t\t\t\t{/if}\n\t\t\t{/if}\n\t\t\t{! 明日开抢提醒 !}\n\t\t\t{#if curStatus!=\'ing\'}\n\t\t\t  \t<span class="start-hint">{goods|startHint}</span>\n\t\t\t{/if}\n\t\t</a>\n\t\t<div class="proinfo">\n\t\t\t{! 标题区域 !}\n\t\t\t<h3 class="tit">\n\t\t\t\t<a class="titLink" target="_blank" href="{goods|goodsLink}" title="{goods|getTitle:true}" r-html="{goods|getTitle}" data-param="{goods|dataParam:goods_index,curStatus}"></a>\n\t\t\t\t<a class="titLink intro" target="_blank" href="{goods|goodsLink}" title="{goods.introduce||\'\'}" data-param="{goods|dataParam:goods_index,curStatus}">{goods.introduce||\'\'}</a>\n\t\t\t</h3>\n\t\t\t{! 销售进度条 !}\n\t\t\t{#if curStatus==\'ing\'}\n\t\t\t\t{#if goods|soldout}\n\t\t\t\t\t<div class="dlprogress f-cb">抢完也有优惠哦~</div>\n\t\t\t\t{#else}\n\t\t\t\t\t{#if (goods.activityGoodsSellCount||0)==0}\n\t\t\t\t\t<p class="limit f-cb">限量<i>{goods.activityGoodsStore||0}</i>件</p>\n\t\t\t\t\t{#else}\n\t\t\t\t\t<dl class="dlprogress f-cb">\n\t\t\t\t\t\t<dd class="barWrap"><b class="bar" style="width:{goods|remainPercent}%;"></b></dd>\n\t\t\t\t\t\t<dd class="remain">剩余<i>{goods|remainNum}</i>件</dd>\n\t\t\t\t\t</dl>\n\t\t\t\t\t{/if}\n\t\t\t\t{/if}\n\t\t\t{#else}\n\t\t\t{! 限量角标 !}\n\t\t\t<p class="limit f-cb">限量<i>{goods.activityGoodsStore||0}</i>件</p>\n\t\t\t{/if}\n\t\t\t{! 开抢提醒 !}\n\t\t\t{#if curStatus==\'tomorrow\'||curStatus==\'soon\'}\n\t\t\t<a class="j-remind u-remind" href="javascript:;" on-click="{this.startBuyNotice(goods,$event)}"><i class=\'iconfont\' r-html={\'&#xe643;\'}></i>开抢通知我</a>\n\t\t\t{/if}\n\t\t</div>\n\t\t{! 价格&&行动点区域 !}\n\t\t<div class="proaction f-cb act">\n\t\t{#if curStatus==\'tomorrow\' || curStatus==\'soon\' || curStatus==\'ready\'}\n\t\t\t<p class="u-price u-price-blue">¥<b>{goods.pcMiaoshaPrice||0}{#if goods.showPriceOriginTip}<i class=\'tip\'>起</i>{/if}</b>¥<del>{goods.marketPrice||0}</del></p>\n\t\t\t<a class="u-action u-action-blue" href="{goods|goodsLink}" target="_blank" data-param="{goods|dataParam:goods_index,curStatus}">即将开始</a>\n\t\t{#else}\n\t\t\t{#if goods|soldout}\n\t\t\t<p class="u-price u-price-gray">¥<b>{goods.pcMiaoshaPrice||0}{#if goods.showPriceOriginTip}<i class=\'tip\'>起</i>{/if}</b>¥<del>{goods.marketPrice||0}</del></p>\n\t\t\t<a class="u-action" href="{goods|goodsLink}" target="_blank" data-param="{goods|dataParam:goods_index,curStatus}">去看看</a>\n\t\t\t{#else}\n\t\t\t<p class="u-price">¥<b>{goods.pcMiaoshaPrice||0}{#if goods.showPriceOriginTip}<i class=\'tip\'>起</i>{/if}</b>¥<del>{goods.marketPrice||0}</del></p>\n\t\t\t<a class="u-action" href="{goods|goodsLink}" target="_blank" data-param="{goods|dataParam:goods_index,curStatus}">立即抢购</a>\n\t\t\t{/if}\n\t\t{/if}\n\t\t</div>\n\t</div>\n{/list}\n{#else}\n\t<img src="{cdnBaseUrl}images/loadingWhite.gif" class="dl-loading">\n{/if}\n</section>\n{#if !!goodsList && !!totalPage && !!pageNo}\n<pager total={totalPage} current={pageNo} on-nav={this.pageChange($event)}></pager>\n{/if}\n</article>');
I$(116, function(t, e, n, i, a, s, o, r, l, c, d) {
    function u(t) {
        return !!t.memberCount && t.memberCount > 0 }

    function h(t) {
        return ("0" + t).slice(-2) }
    var f = i.extend({ template: a, config: function(t) { t.cdnBaseUrl = t.cdnBaseUrl || "/" }, init: function() { this.supr() }, startBuyNotice: function(t, e) {
            var n = t.goodsId || "";
            var i = t.tabId || "";
            new s({ data: { goodsId: n, tabId: i } }).$inject(document.body) }, pageChange: function(t) { this.$emit("pageChange", t) } });
    var _ = function() {};
    f.filter({ goodsLink: function(t) {
            return "/product/" + (t.goodsId || 0) + ".html" + (this.data.query ? "?" + this.data.query : "") }, hasMemberCount: u, getTitle: function(t, e) {
            var n = u(t);
            var i = t.memberCount || "";
            var a = t.memberUnitName || "件";
            var s = t.shortTitle || "";
            if (e) return (n ? i + a + "装 | " : "") + s;
            else return (n ? "<b>" + i + a + "装 | </b>" : "") + s }, remainPercent: function(t) {
            var e = 0;
            if (0 != (t.activityGoodsStore || 0)) { e = 100 - (t.activityGoodsSellCount || 0) / (t.activityGoodsStore || 1) * 100;
                e = Math.ceil(e) }
            return e }, remainNum: function(t) {
            var e = "0";
            if (0 != (t.activityGoodsStore || 0)) e = (t.activityGoodsStore || 0) - (t.activityGoodsSellCount || 0);
            return e }, soldout: function(t) {
            return t.showSoldOut }, startHint: function(t) {
            var e = new Date((+this.data.kaolaSystemTime)),
                n = new Date(t.startTimeMs || 0),
                i = e.getDate(),
                a = n.getDate(),
                s = h(n.getHours()),
                o = h(n.getMinutes());
            return "将于" + (i == a ? "今日 " : "明日 ") + s + ":" + o + "正式开抢" }, dataParam: _ });
    return f }, 15, 4, 3, 151, 311, 304, 308);
I$(312, '{#list brandList as brand}\n<div class="brandWrap">\n\t<a class=\'img\' href="{brand.siteUrl||\'javascript:;\'}" target="_blank" data-param="{brand|dataParam:brand_index}">\n\t\t<img class=\'img-lazyload\' src="{cdnBaseUrl}images/blank.gif" data-src="{brand|brandImg}">\n\t</a>\n\t<p class=\'time {brand.status==0?"time-notstart":"time-start"}\'><b class=\'iconfont\' r-html={\'&#xe64c;\'}></b><span r-countdown=\'{brand}\'>00:00:00</span></p>\n</div>\n{/list}');
I$(118, function(t, e, n, i, a, s, o, r, l, c) {
    var d = i.extend({ template: a, config: function(t) {
            var e = t.list || [],
                n = e.length,
                i = t.index || 0,
                a = t.quantity || 0,
                s = [];
            if ("all" == a) s = e;
            else
                for (var o = i; o < i + a && !(o >= n); o++) { e[o] = e[o] || {};
                    e[o].realIndex = o;
                    s.push(e[o]) }
            t.cdnBaseUrl = t.cdnBaseUrl || "//mm.bst.126.net/";
            t.brandList = s }, init: function() { this.supr() } });
    var u = function() {};
    var h = s._$allocate();
    d.directive("r-countdown", function(t, e) {
        var n = this.$get(e),
            i = n.status || 0,
            a = n.nowToEndMs || 0;
        h._$addCount({ parent: t, leftMs: a, format: (0 == i ? "距开始" : "距结束") + "{hh}:{mm}:{ss}", onZero: function() {} }) });
    d.filter({ brandImg: function(e) {
            var n = e.themeImgUrl || "";
            return t.imgThumbnailUrl(n, 536, 0, 90) }, dataParam: u });
    return d }, 15, 4, 3, 151, 312, 108);
I$(496, '<a href="/product/{(goods.goodsId)}.html" data-param="{urlParam}" title="{goods.title}" target="_blank" class="imgwrap">\n  <img class="gimg" src="{cdnBaseUrl}images/blank.gif" data-src="{goods.imageUrl|imgThumbnailUrl:imgWidth||0,imgHeight||0,imgQulity||85}" alt="{goods.title}">\n  {#if isShowFlag}\n    {#if goods.originCountryRectFlag}\n    <img class="u-flag" src="{goods.originCountryRectFlag|imgThumbnailUrl:35}"/>\n    {#elseif goods.originCountryFlag}\n    <img class="u-flag" src="{goods.originCountryFlag|imgThumbnailUrl:28}"/>\n    {/if}\n  {/if}\n  {#if goods.actualStorageStatus==0}<span class="u-icn u-soldout">已抢光</span>{/if}\n</a>');
I$(497, '  <a class="gtlt" href="/product/{goods.goodsId}.html" data-param="{urlParam}" target="_blank"\n  {#if (goods.memberCount ||0) >0} title="{goods.memberCount+(goods.memberUnitName||\'件\')+\'装 | \'+goods.title}"\n  {#else} title="{goods.title}"{/if}>\n    {#if (goods.memberCount ||0) >0}\n        <b>{goods.memberCount+(goods.memberUnitName||\'件\')+\'装 | \'}</b>{goods.title}\n    {#else}\n      {goods.title}\n    {/if}\n  </a>\n');
I$(498, ' <a class="gintro f-toe2" href="/product/{(goods.goodsId)}.html" data-param="{urlParam}" title="{goods.introduce}" target="_blank">{goods.introduce}</a>');
I$(499, '<span class="u-gprice">\n      <em class="crtprice"><span class="symbol">¥</span>{goods.actualCurrentPrice}</em>\n      <i class="mktprice">¥<del>{goods.marketPrice}</del></i>\n  </span>');
I$(500, '{#if (goods.memberCount || 0) > 0 && goods.isShowDiscountCost !== false}\n  <span class="u-gtag"><span class="f-fwb">单{goods.memberUnitName || \'件\'}¥{goods.memberPrice}</span></span>\n{#else}\n  {#if (goods.discount > 0 && goods.discount < 10)}\n  <span class="u-gtag"><b class="num">{(goods.discount).toFixed(1)}</b>折</span>\n  {/if}\n{/if}\n{#if goods.isPostageFree === true}\n  <span class="u-gtag">包邮</span>\n{/if}');
I$(501, '<a href="/product/{(goods.goodsId)}.html" data-param="{urlParam}" title="{btnText || \'立即抢购\'}" target="_blank" class="u-gbuy">\n   {btnText || \'立即抢购\'}\n</a>');
I$(502, '\n<li class="m-goods" ref="goodsItem">\n  {#include tpl_gimg}\n  <div class="detail">\n    <p class="tlt">{#include tpl_gtlt}</p>\n    <p class="intro">{#include tpl_gintro}</p>\n    <p class="price">{#include tpl_gprice}{#include tpl_gtag}</p>\n    <p class="btnwrap">{#include tpl_gbtn}</p>\n  </div>\n</li>');
I$(303, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _, p) {
    var m = a.extend({ template: u, name: "goodsItem", config: function(e) { t.extend(e, { tpl_gtlt: o, tpl_gimg: s, tpl_gintro: r, tpl_gprice: l, tpl_gtag: c, tpl_gbtn: d }) }, init: function() { this.supr() } });
    return m }, 15, 4, 3, 6, 151, 496, 497, 498, 499, 500, 501, 502);
I$(608, '<table class="m-modaltbl m-popmodal">\n\t<tbody>\n\t\t<tr>\n\t\t  <td class={type==2?"cell-rightbottom":"cell"} {#if type==2}align="right"{/if}>\n\t\t  <div class="modal iDialog {modalName||\'\'} iDialogAniCore iDialogAnimate1" ref="modal" style="background:url({png}) 0 0 no-repeat;width:{width}px;{height}px;">\n\t\t\t  {#include content ||this.content }\n\t\t\t</div>\n\t\t  </td>\n\t\t</tr>\n\t</tbody>\n</table>');
I$(505, function(t, e, n, i, a, s, o, r, l) {
    var c = i.extend({ template: a, init: function() { this.supr();
            var t = this.destroy._$bind(this);
            n._$addEvent(document, "keydown", function(e) {
                var e = e || window.event;
                if (27 == e.keyCode) { t();
                    n._$delEvent(document, "keydown", t) } });
            if (this.$root == this) this.$inject(document.body);
            setTimeout(function() { e._$delClassName(this.$refs["modal"], "iDialogAnimate1") }._$bind(this), 10) }, confirm: function() { this.$emit("confirm", this.data);
            this.destroy() }, close: function() { this.$emit("close", this.data);
            this.destroy() }, destroy: function() { e._$addClassName(this.$refs["modal"], "iDialogAnimate1");
            var t = this.supr;
            setTimeout(function() { t.apply(this) }._$bind(this), 300) } });
    return c }, 15, 4, 3, 151, 608);
I$(506, '<a href="{url}" style="cursor:pointer;display:block;width:{width}px;height:{height}px;" on-click={this.close()}></a>\n<a class="iDialogClose" title="关闭" href="javascript:void(0)" on-click={this.close()}></a>\n');
I$(316, function(t, e, n, i, a, s) {
    var o = a.extend({ content: s, data: { width: 520 }, onPhoneNumFocus: function() { this.data.errorMsg = "" }, close: function() { this.$emit("close", this.data);
            this.destroy() } });
    return o }, 15, 4, 3, 2, 505, 506);
I$(507, '<div class="cntbox">\n\t<div class="u-close" on-click={this.close()} data-category="新人礼包" data-event="引导弹框" data-label="关闭"></div>\n\t<div class="u-btn" on-click={this.onTakeBtnClick()} id="getbag" data-category="新人礼包" data-event="引导弹框" data-label="点击领取"></div>\n</div>');
I$(317, function(t, e, n, i, a, s) {
    var o = a.extend({ content: s, data: { width: 760, modalName: "m-onlyimgwin m-newerwin" }, init: function() { this.supr() }, onTakeBtnClick: function() {
            var t = location.protocol + "//www.kaola.com/activity/detail/" + this.data.__newGiftId__ + ".shtml";
            if (window.isLogin) window.location.href = t;
            else window.location.href = "/login.html?target=" + t } });
    return o }, 15, 4, 3, 2, 128, 507);
I$(508, "{#if asideImg!='' && asideLink!='javascript:;' && onSaleGoodsList.length >= 4}\n<article id='{flashSaleId}' class='m-dailylimit'>\n    <h2 class=\"w-tit1 w-tit1-1 tit\"><span class=\"big\">{mainTilte}</span>{#if status==0}{subTitle}{#else}本场还剩<span id=\"j-dltimebox\" class=\"timebox\" leftms='{timeToEndMs}'><i>0</i><i>0</i>:<i>0</i><i>0</i>:<i>0</i><i>0</i></span>{/if}<a class='more' href='{dailyLimitUrl}' target='_blank' data-param=\"{'limitBuy-up-1'|dataParam}\">进入限时购频道&gt;</a></h2>\n    <section class=\"cnt f-cb\">\n        <ul class=\"goodslist\">\n            {#list onSaleGoodsList as goods}\n            <li class=\"goods f-cb\">\n                <a href=\"{goods|goodsLink}\" class=\"pic\" target='_blank' data-param=\"{('limitBuy-mid-'+(goods_index+1))|dataParam}\">\n                    <img class=\"img-lazyload\" src=\"{cdnBaseUrl}images/blank.gif\" data-src=\"{(goods.imageUrl||'')|imgThumbnailUrl:188}\" title=\"{goods|getGoodsTitle:true}\">\n                    {#if (goods|leftNum)==0}\n                    <span class=\"w-icon w-icon-13\">&nbsp;</span>\n                    {/if}\n                    {! 自定义角标 !}\n                    {#if (goods|cornerLabel) != ''}\n                        {#if (goods|cornerLabelLen) > 4}\n                        <span class=\"custom-corner gt4\"><b>{goods|cornerLabel}</b></span>\n                        {#elseif (goods|cornerLabelLen) == 4}\n                        <span class=\"custom-corner\"><b>{goods|cornerLabel}</b></span>\n                        {#else}\n                        <span class=\"custom-corner lt4\"><b>{goods|cornerLabel}</b></span>\n                        {/if}\n                    {/if}\n                </a>\n                <div class=\"detail\">\n                    <h3 class='intro'><a href=\"{goods|goodsLink}\" target='_blank' title=\"{goods.introduce||''}\" data-param=\"{('limitBuy-mid-'+(goods_index+1))|dataParam}\">{goods.introduce||''}</a></h3>\n                    <h3 class='shortTitle'><a href=\"{goods|goodsLink}\" target='_blank' title=\"{goods|getGoodsTitle:true}\" data-param=\"{('limitBuy-mid-'+(goods_index+1))|dataParam}\" r-html={goods|getGoodsTitle:false}></a></h3>\n                    <p class='price'><b>¥</b>{goods.pcMiaoshaPrice||0}<span>¥</span><del>{goods.marketPrice||0}</del></p>\n                    {! 进度条 !}\n                    {#if status==0}\n                    <div class='process process-limit'>限量{goods|goodsStore}件</div>\n                    {#elseif status==1}\n                        {#if (goods|leftNum)==0}\n                        <div class='process process-soldout'>抢完仍有优惠哦～</div>\n                        {#elseif (goods|goodsSellCount)==0}\n                        <div class='process process-limit'>限量{goods|goodsStore}件</div>\n                        {#else}\n                        <div class='process'><b style=\"width:{goods|leftPercent}%;\"></b><p class='text'>剩余{goods|leftNum}件</p></div>\n                        {/if}\n                    {/if}\n                    {! 行动点按钮 !}\n                    {#if status==0}\n                    <a class='btn f-hover btn-soon' href=\"{goods|goodsLink}\" target='_blank' data-param=\"{('limitBuy-mid-'+(goods_index+1))|dataParam}\">即将开始</a>\n                    {#elseif status==1}\n                        {#if (goods|leftNum)==0}\n                        <a class='btn f-hover btn-goto' href=\"{goods|goodsLink}\" target='_blank' data-param=\"{('limitBuy-mid-'+(goods_index+1))|dataParam}\">去看看</a>\n                        {#else}\n                        <a class='btn f-hover' href=\"{goods|goodsLink}\" target='_blank' data-param=\"{('limitBuy-mid-'+(goods_index+1))|dataParam}\">立即抢购</a>\n                        {/if}\n                    {/if}\n                </div>\n            </li>\n            {/list}\n        </ul>\n        <aside class='aside'>\n            <a href=\"{asideLink}\" class=\"pic\" target='_blank' data-param=\"{'limitBuy-right-1'|dataParam}\"><img class=\"img-lazyload\" src=\"{cdnBaseUrl}images/blank.gif\" data-src=\"{asideImg|imgThumbnailUrl:221,378,95}\"></a>\n        </aside>\n    </section>\n</article>\n{/if}");
I$(318, function(t, e, n, i, a, s) {
    var o = s.extend({ template: i, config: function(t) {
            var e = t.flashSaleFloor || {};
            a.extend(t, { cdnBaseUrl: t.cdnBaseUrl || "//mm.bst.126.net/", mainTilte: e.mainTilte || "", subTitle: e.subTitle || "", status: e.status || 0, timeToEndMs: e.timeToEndMs || 0, asideImg: e.imgUrl || "", asideLink: e.linkUrl || "javascript:;", onSaleGoodsList: e.onSaleGoodsList || [], dailyLimitUrl: "/activity/flashSaleIndex/show.html", flashSaleId: e.floorId || "" }) }, init: function() { this.supr() } });
    var r = function(t) {
        return t.activityGoodsStore || 0 };
    var l = function(t) {
        return t.activityGoodsSellCount || 0 };
    var c = function(t) {
        return t.cornerLabel || "" };
    var d = function(t) {
        return r(t) - l(t) };
    o.filter({ goodsLink: function(t) {
            return "/product/" + (t.goodsId || 0) + ".html" }, goodsStore: r, goodsSellCount: l, leftNum: d, leftPercent: function(t) {
            var e = r(t);
            if (0 == e) return "0.0";
            else return (100 * d(t) / e).toFixed(1) }, cornerLabel: c, cornerLabelLen: function(t) {
            return c(t).length }, dataParam: function(t) {
            return "ri=home&zid=" + this.data.flashSaleId + "&zp=" + t + "&zn=limitBuy" }, getGoodsTitle: function(t, e) {
            var n = t.memberCount || 0;
            var i = t.memberUnitName || "件";
            var a = t.shortTitle || "";
            if (n > 0)
                if (e) return n + i + "装 | " + a;
                else return "<b>" + n + i + "装 | </b>" + a;
            else return a } });
    return o }, 2, 3, 4, 508, 15, 151);
I$(509, '{#if !!appDownloadBanner}\n<article class="m-appbanner" id="j-appbanner" style="display:none;">\n    <a href="{appDownloadBanner.siteUrl||\'\'}" target="_blank">\n        <img src="{(appDownloadBanner.imageUrl||\'\')|noProtocol}" />\n    </a>\n    <i class="close"></i>\n</article>\n{/if}\n{#if !!appDownloadBanner2}\n<article class="m-appbanner2" id="j-appbanner2" style="display:none;">\n    <div class="cont">\n        <a href="{appDownloadBanner2.siteUrl||\'\'}" target="_blank">\n            <img src="{(appDownloadBanner2.imageUrl||\'\')|noProtocol}" />\n        </a>\n        <i class="close"></i>\n    </div>\n</article>\n{/if}');
I$(319, function(t, e, n, i, a, s) {
    var o = s.extend({ template: i, config: function(t) { a.extend(t, {}) }, init: function() { this.supr() } });
    return o }, 2, 3, 4, 509, 15, 151);
I$(510, '<div class="cntbox" style="background:url({mail.imgUrl}) 0 0 no-repeat;">\n\t<a target="_blank" class="hotzone" href="{mail.url}" style="width:{mail.width}px;height:{mail.height}px;top:{mail.top}px;left:{mail.left}px;"></a>\n\t<div class="u-close close" on-click={this.close()} data-category="邮箱" data-event="引导弹框" data-label="关闭" r-html="{\'&#xe605;\'}"></div>\n</div>');
I$(320, function(t, e, n, i, a, s) {
    return a.extend({ content: s, data: { width: 760, modalName: "m-onlyimgwin m-mailtopwin" }, init: function(t) { this.supr();
            var e = t.mail;
            e.url = e.url || "";
            e.width = e.width || 0;
            e.height = e.height || 0;
            e.top = e.top || 0;
            e.left = e.left || 0 } }) }, 15, 4, 3, 2, 128, 510);
I$(511, '{#if !!mailTabAdImageLink && !!mailTabAdImageUrl}\n<article class="m-appbanner2" id="j-mailbanner" style="display:none;">\n    <div class="cont">\n        <a href="{(mailTabAdImageLink||\'\')|noProtocol}" target="_blank">\n            <img src="{(mailTabAdImageUrl||\'\')|noProtocol}" />\n        </a>\n        <i class="close"></i>\n    </div>\n</article>\n{/if}');
I$(321, function(t, e, n, i, a, s) {
    var o = s.extend({ template: i, config: function(t) { a.extend(t, {}) }, init: function() { this.supr() } });
    return o }, 2, 3, 4, 511, 15, 151);
I$(322, function(t, e, n, i, a, s, o, r, l, c, d) { o._$$Announce = t._$klass();
    d = o._$$Announce._$extend(n._$$EventTarget);
    d.__reset = function(t) { this.__super(t);
        this._list = t.list || [];
        this._offset = t.offset || 0;
        this._duration = t.duration || 5e3;
        this._aniDuration = t.aniDuration || 500;
        this._timing = t.timing || "easeinout";
        this._onChange = t.onChange;
        this._mouseEvent = !!t.mouseEvent || !0;
        this._timer = null;
        if (this._list && !(this._list.length <= 1) && 0 != this._offset) { this._wrap = t.wrap || this._list[0].parentNode;
            this.__startAnnounce();
            if (this._mouseEvent) this.__bindMouseEvent() } };
    d.__startAnnounce = function() { this._timer = setInterval(this.__changeAnnounce._$bind(this), this._duration) };
    d.__changeAnnounce = function() {
        var t = this;
        var e = this._list[0];
        s._$$AnimBezier._$allocate({ from: { offset: 0 }, to: { offset: this._offset }, duration: this._aniDuration, timing: this._timing, onupdate: function(t) { e.style.marginTop = -t.offset + "px" }, onstop: function() { e.style.marginTop = 0;
                e.parentNode.appendChild(e);
                t.__callback();
                this._$recycle() } })._$play() };
    d.__callback = function() {
        if (this._onChange && e._$isFunction(this._onChange)) this._onChange() };
    d.__bindMouseEvent = function() { i._$addEvent(this._wrap, "mouseenter", this.__onWrapMouseEnter._$bind(this));
        i._$addEvent(this._wrap, "mouseleave", this.__onWrapMouseLeave._$bind(this)) };
    d.__onWrapMouseEnter = function() { window.clearInterval(this._timer) };
    d.__onWrapMouseLeave = function() { this.__startAnnounce() };
    return o._$$Announce }, 1, 2, 23, 3, 4, 96);
I$(512, '<li class="hide">\n    <a class="itm" target="_blank" href="{banner|urlstr|removeHash}" on-click={this.daEvent($event)} data-param="{banner|dataParam:index}" >\n        <img class="showImg" src="{(banner.imageUrl||\'\')|imgThumbnailUrl:1920,0,90}" width="1920px" height="400px"/>\n        {#if banner.imageUrlSmall!=""}\n        <img class="logoImg" src="{(banner.imageUrlSmall||\'\')|noProtocol}" />\n        {/if}\n    </a>\n</li>');
I$(323, function(t, e, n, i) {
    var a = i.extend({ template: n, config: function(t) { e.extend(t, {}) }, init: function() {}, daEvent: function() { e.daEvent("首页", "banner", this.data.index + 1, { customData: s(this.data.banner) }) } });
    var s = function(t) {
        var t = t || {};
        return t.siteUrl || "" };
    a.filter({ dataParam: function(t, e) {
            var t = t || {};
            var n = s(t).split("#")[1];
            return "ri=home&zp=banner-" + (e + 1) + "&zn=banner" + (n ? "#" + n : "") }, removeHash: function(t) {
            var t = t || "";
            return t.split("#")[0] }, urlstr: s });
    return a }, 2, 15, 512, 151);
I$(513, '<table class="img_pagebox" cellspacing="0" cellpadding="0" border="0" style="z-index: 11;">\n    <tbody>\n    <tr class="img_page">\n        <td id="icon_num" class="pageBox">\n            <span class="w-slbtn">\n              <span class="partr">\n                {#list 1..len as num}\n                    <a class="idxicon"\n                       r-class="{{\'first active\':num==1, \'last\':num==len}}"\n                      href="javascript:void(0)"><i class="iconfont" r-html="{\'&#xe603;\'}"></i><span class="num">{num}</span>\n                    </a>\n                {/list}\n                </span>\n            </span>\n        </td>\n    </tr>\n    </tbody>\n</table>\n<div class="control" style="z-index: 11;">\n    <div>\n        <a href="javascript:void(0)" class="cons prev ani"></a>\n        <a href="javascript:void(0)" class="cons next ani"></a>\n    </div>\n</div>');
I$(324, function(t, e, n, i) {
    return i.extend({ template: n, config: function(t) {}, init: function() {} }) }, 2, 15, 513, 151);
I$(123, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _, p, m, g, v, $, y, b, w, C, x, T, L, S, I, k, D) {
    var D;
    L._$$Index = t._$klass();
    D = L._$$Index._$extend(i._$$EventTarget);
    D.__reset = function(t) { this.__super(t);
        this.__isMail = !!t.isMail;
        o._$allocate({ exploreDist: 1e3 });
        this.__initLinkTarget();
        this.__staticizeDisplayCtrl();
        this.__initSlide();
        this.__announce();
        this.__rowofx();
        this.__dailyLimit();
        this.__leftNavEvent();
        this.__initSlideFloor();
        this.__processSecondList();
        this.__recommendlist();
        this.__followBrand();
        this.__gtmCollect() };
    D.__followBrand = function() {
        var t = w(".w-logolist .follow");
        if (t.length) t._$on("click", function(t) { n._$stop(t);
            var e = n._$getElement(t),
                i = a._$attr(e, "data-bid");
            C.addFav(t, i, e, this) }._$bind(this)) };
    D.__processSecondList = function() {
        var t = a._$get("j-profloorlist"),
            n = a._$getByClassName(t, "w-secondlist");
        if (n && n.length > 0) e._$forEach(n, function(t, n, i) {
            var s = a._$getByClassName(t, "txt");
            if (s && s.length > 0) e._$forEach(s, function(t, e, n) {
                var i = t.innerHTML || "";
                var s = i.replace(/[^\x00-\xff]/g, "r").length;
                if (s > 4) a._$addClassName(t, "txt-1") }._$bind(this)) }._$bind(this)) };
    D.__initLinkTarget = function() {
        if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())) { console.log("mobile");
            var t = document.getElementsByTagName("a"),
                e = "";
            for (var n = 0, i = t.length; n < i; n++) { e = t[n].href;
                if (e.indexOf("/product/") > -1) t[n].removeAttribute("target") } } };
    D.__staticizeDisplayCtrl = function() {
        if (this.__isMail) this.__getMailPopupDivs();
        else this.__getPopupDivs() };
    D.__getPopupDivs = function() {
        var t = "block" in e._$query2object(location.search.replace(/^\?/, ""));
        r("/index/ajax/getPopupDivs.html", { data: { block: t ? 1 : 0, hasNav: a._$get("js_bottomnav") ? 1 : 0 }, norest: !0, method: "post", onload: function(t) {
                var e = t || {},
                    n = e.retcode || -1,
                    i = e.body || {},
                    s = a._$get("j-newPartnerNotice");
                if (200 == n) {
                    if (1 == i.indexInternalStaffIsShow) a._$delClassName(s, "f-dn");
                    else a._$remove(s);
                    if (i.appDownloadBanner || i.appDownloadBanner2) new f({ data: { appDownloadBanner: i.appDownloadBanner, appDownloadBanner2: i.appDownloadBanner2 } }).$inject("#index-netease-com");
                    this.__IsShowWin__ = i.newUserGiftPopup || 0;
                    this.__newGiftId__ = i.newUserGiftActivityId || "" } else a._$remove(s);
                this.__showWin();
                this.__initMobileAppBanner() }._$bind(this) }) };
    D.__getMailPopupDivs = function() {
        var t = "block" in e._$query2object(location.search.replace(/^\?/, ""));
        r("/index/ajax/getMailPopupDivs.html", { data: { block: t ? 1 : 0 }, norest: !0, method: "post", onload: function(t) {
                var e = t || {},
                    n = e.retcode || -1,
                    i = e.body || {},
                    s = a._$get("j-newPartnerNotice");
                if (200 == n) {
                    if (i.mailTopPop) new _({ data: { mail: i.mailTopPop || {} } });
                    if (i.mailTabAdImageLink && i.mailTabAdImageUrl) { new p({ data: { mailTabAdImageLink: i.mailTabAdImageLink, mailTabAdImageUrl: i.mailTabAdImageUrl } }).$inject("#index-netease-com");
                        this.__initMailFootBanner() } }
                a._$remove(s);
                this.__showWin() }._$bind(this) }) };
    D.__initMobileAppBanner = function() {
        var t = a._$get("j-appbanner");
        if (t) {
            var e = m._$cookie("NTES_KAOLA_INDEXAPPBANNER");
            if (e && "-1" == e);
            else t.style.display = "block";
            var i = a._$getByClassName(t, "close");
            if (i.length) n._$addEvent(i[0], "click", function() { t.style.display = "none";
                m._$cookie("NTES_KAOLA_INDEXAPPBANNER", { value: "-1", path: "/", domain: "kaola.com", expires: 365 }) }._$bind(this)) } };
    D.__showWin = function() {
        this.__checkIsNewer();
        if (!this.__hasShowWin) {
            var t = a._$get("j-appbanner2");
            var e = m._$cookie("NTES_KAOLA_INDEXAPPBANNER2");
            if (e) {
                var i = new Date,
                    s = i.getDate(),
                    o = i.getMonth(),
                    r = new Date(parseInt(e)),
                    l = r.getDate(),
                    c = r.getMonth();
                if (l != s || c != o && l == s)
                    if (t) t.style.display = "block";
                    else this.__checkPageAd();
                else this.__checkPageAd();
            } else if (t) t.style.display = "block";
            else this.__checkPageAd();
            if (t) {
                var d = a._$getByClassName(t, "close");
                if (d.length) n._$addEvent(d[0], "click", function() { t.style.display = "none";
                    m._$cookie("NTES_KAOLA_INDEXAPPBANNER2", { value: +new Date, path: "/", domain: "kaola.com", expires: 1 }) }._$bind(this)) }
        }
    };
    D.__checkIsNewer = function() {
        if (this.__IsShowWin__ && !this.__hasShowWin) { new d({ data: { __newGiftId__: this.__newGiftId__ } });
            this.__hasShowWin = 1 } };
    D.__initMailFootBanner = function() {
        var t = a._$get("j-mailbanner");
        if (t) {
            var e = m._$cookie("NTES_KAOLA_INDEXMAILBANNER");
            if (e && "-1" == e);
            else t.style.display = "block";
            var i = a._$getByClassName(t, "close");
            if (i.length) n._$addEvent(i[0], "click", function() { t.style.display = "none";
                m._$cookie("NTES_KAOLA_INDEXMAILBANNER", { value: "-1", path: "/", domain: "kaola.com", expires: 365 }) }._$bind(this)) } };
    D.__initSlideFloor = function() {
        var t = w(".m-prolist");
        if (t.length) e._$forEach(t, function(t, e, n) {
            var i = a._$getByClassName(n[e], "itemgroup");
            if (!(i.length < 2)) {
                var s = a._$getByClassName(n[e], "idxicon");
                g._$allocate({ list: i, icons: s }) } }) };
    D.__rowofx = function() {
        var t = a._$get("rowOfXResource"),
            e = a._$getByClassName(t, "j-newuser-row")[0],
            n = a._$getByClassName(t, "j-olduser-row")[0],
            i = +a._$attr(t, "top");
        this.__rowofxHasBg = "true" == a._$attr(t, "hasBg");
        a._$remove("j-rowofx");
        if (e || n) {
            if ("no" == m._$cookie("KAOLA_NEW_USER_COOKIE"))
                if (!n) { a._$remove(t);
                    return } else { a._$remove(e);
                    a._$delClassName(t, "f-dn") }
            else { m._$cookie("KAOLA_NEW_USER_COOKIE", { value: "no", path: "/", expires: 365, domain: ".kaola.com" });
                if (!e) { a._$remove(t);
                    return } else { a._$remove(n);
                    a._$delClassName(t, "f-dn") } }
            if (!this.__isIEOldVer()) {
                var s = a._$getByClassName(document.body, "mainBgWrap")[0];
                var o = s.getBoundingClientRect();
                var r = document.body.scrollTop || document.documentElement.scrollTop;
                if (this.__rowofxHasBg) this._$dispatchEvent("refreshRightBar", { __offsetABTop: r + o.top + s.clientHeight });
                else {
                    var l = t.getBoundingClientRect();
                    var c = r + l.top + i;
                    this._$dispatchEvent("refreshRightBar", { __offsetABTop: r + l.top + i + c, __abTop: -(o.top - l.top - i), __top: c }) } } } else a._$remove(t) };
    D.__alignSlideSlip = function() {
        if (!this.__isIEOldVer()) {
            var t = a._$get("indexleft"),
                e = a._$get("rowOfXResource");
            if (!this.__rowofxHasBg && !this.__isMail && e) {
                var n = +a._$attr(e, "top"),
                    i = e.getBoundingClientRect(),
                    s = a._$getByClassName(document.body, "mainBgWrap")[0],
                    o = s.getBoundingClientRect();
                this._$dispatchEvent("refreshRightBar", { __abTop: -(o.top - i.top - n) }) } } };
    D.__recommendlist = function() {
        var t = { strategy: "fav", limit: 4, account: window.account || "", ver: 2, from: "pc", tongji: { category: "推荐区域展示", action: "首页", lable: "猜你喜欢", position: "首页：猜你喜欢", from: "homecnxh", query: "rp=home&zp=cnxh&zn=rec&recId=" } };
        new u({ data: { url: "/recommend/getRecommendGoods.html", condition: t, dapushParam: { id: "guess", page: "首页", module: "猜你喜欢" } } }).$inject(a._$get("guess")) };
    D.__checkPageAd = function() { r("/surprise/get.html", { query: { url: encodeURIComponent(document.URL) }, norest: !0, onload: function(t) {
                var e = t.adList;
                for (var n = 0, i = e.length; n < i; n++) {
                    var a = {};
                    a.id = e[n].adId;
                    a.png = e[n].adImg;
                    a.url = e[n].adUrl;
                    a.mode = e[n].closeType;
                    a.type = { center: 1, "right-bottom": 2 }[e[n].location || "center"];
                    a.txt = e[n].adContent;
                    a.layout = !!e[n].coverScreen;
                    this.__showPOPWin(a) } }._$bind(this) }) };
    D.__showPOPWin = function(t) {
        var e = "mmAd" + t.id;
        var n = m._$cookie(e);
        if (!n) {
            var i = new Image;
            i.onload = function() { t.width = this.width;
                t.height = this.height;
                var e = new c({ data: t });
                e.$on("close", function(t) {
                    var e = "mmAd" + t.id;
                    m._$cookie(e, { value: "-1", path: "/", domain: "kaola.com", expires: 365 }) }) };
            i.src = t.png } };
    D.__initSlide = function() { r("/getPCBannerList.html", { norest: !0, onload: function(t) {
                var e = t || {},
                    n = e.code || -1,
                    i = e.body || {},
                    a = i.bannerList || [];
                if (200 == n && a.length > 1) this.__createSlideNode(a) }._$bind(this) }) };
    D.__createSlideNode = function(t) { e._$forEach(t, function(t, e) {
            if (0 != e) new x({ data: { banner: t, index: e } }).$inject("#show_pic", "bottom") }._$bind(this));
        new T({ data: { len: t.length || 0 } }).$inject("#show_pic", "after");
        this.__bindSlide() };
    D.__bindSlide = function() {
        var t = a._$get("picBox");
        var e = a._$getChildren(a._$get("show_pic")) || [];
        if (e && !(e.length < 2)) {
            var n = a._$getByClassName(t, "idxicon");
            var i = a._$getByClassName(t, "cons");
            b._$hover(t, "j-sliderBoxhover");
            var s = g._$allocate({ box: t, list: e, icons: n, preBtn: i[0], nextBtn: i[1] }) } };
    D.__announce = function() {
        var t = a._$get("j-announce");
        if (t) v._$allocate({ list: t.getElementsByTagName("li"), offset: 18 }) };
    D.__dltimebox = function() {
        var t = a._$get("j-dltimebox");
        var e = +a._$attr(t, "leftms");
        if (t && !(e <= 0)) $._$allocate({ parent: t, leftMs: e, format: "<i>{hh:1}</i><i>{hh:2}</i>:<i>{mm:1}</i><i>{mm:2}</i>:<i>{ss:1}</i><i>{ss:2}</i>", onZero: function() { window.location.reload() } }) };
    D.__inject2Leftbar = function(t) {
        var e = a._$get("indexleft");
        if (e) {
            var n = a._$getByClassName(e, "channel")[0],
                i = t.floorId || "",
                s = t.mainTilte || "";
            if (n) {
                var o = w('<li><a href="javascript:;" class="j-floor" data-id="' + i + '">' + s + "</a></li>")[0];
                n.insertBefore(o, a._$getChildren(n)[0]) } } };
    D.__dailyLimit = function() {
        var t = a._$get("j-dailyLimit");
        if (t) r("/getFlashSaleFloor.html", { norest: !0, onload: function(e) {
                var i = e || {},
                    s = i.retcode || -1,
                    o = i.body || {},
                    r = o.flashSaleFloor;
                if (200 == s && r) { new h({ data: { flashSaleFloor: r, cdnBaseUrl: window.cdnBaseUrl || "" } }).$inject(t, "after");
                    this.__dltimebox();
                    if (!this.__isMail) this.__inject2Leftbar(r) }
                a._$remove(t);
                this.__alignSlideSlip();
                n._$dispatchEvent(window, "scroll") }._$bind(this), onerror: function() { a._$remove(t);
                this.__alignSlideSlip() }._$bind(this) }) };
    D.__leftNavEvent = function() { w("body")._$on("click #indexleft .j-floor", function(t) {
            var e = n._$getElement(t),
                i = a._$attr(e, "data-id"),
                s = a._$get(i);
            if (s) y._$allocate({ scrollTo: s, offset: -58, duration: 500, timing: "easeinout" }) }) };
    D._$replaceUserAccountPH = function() { w("a[onclick]")._$forEach(function(t) {
            var e = t.getAttribute("onclick");
            if ("string" == typeof e) t.setAttribute("onclick", e.replace(/(\'userAccount\'\:\')\'/g, "$1" + window.account + "'").replace(/(\'userId\'\:\')\'/g, "$1" + window.account + "'")) }) };
    D.__gtmCollect = function() { l.gtmReadyAsync({ com_data: { page_type: "home" } }) };
    D.__isIEOldVer = function() {
        var t = "ie" == s._$KERNEL.browser && s._$KERNEL.release <= "3.0";
        return function() {
            return t } }();
    return L._$$Index
}, 1, 2, 3, 23, 4, 78, 24, 6, 44, 316, 317, 82, 318, 319, 320, 321, 11, 106, 322, 108, 95, 107, 25, 257, 323, 324);
I$(492, '<div id="brandboxwrap">\n    <div class="name"  r-class="{{\'letter\':isShow}}">品牌：</div>\n    {#if isShow}\n    <ul class="letterBox clearfix">\n        <li on-mouseover="{this.letterChange(0)}" r-class="{{\'active\':selected==0}}" style="margin-left:15px;">全部</li>\n        {#list letterList as letter}\n        <li on-mouseover="{this.letterChange(letter)}" r-class="{{\'active\':selected==letter}}" >{letter}</li>\n        {/list}\n        <li on-mouseover="{this.letterChange(-1)}" r-class="{{\'active\':selected==-1}}">其它</li>\n    </ul>\n    {/if}\n    <div class="hdbrands j-tagwrap" r-class=\'{{"autoheight": isShow, "line2height": !isShow}}\'>\n        <div class="hdbrands2 ctag">\n            <div class="brands  brands-cate all ctag">{#list brandList as brand}<a title="{brand.brandName}" data-brid="{brand.brandId}" href="{brand.url}">{brand.brandName}</a>{/list}\n            </div>\n        </div>\n    </div>\n    <div class="morewrap">\n\n        <div class="more ctag" on-click="{this.changeList()}">{#if !isShow}展开<span></span>{#else}收起<span class="packup"></span>{/if}\n        </div>\n    </div>\n</div>');
I$(493, function() {
    var t = function(t) { this.initialize(t) },
        e = { checkPolyphone: !1, charcase: "default" };
    t.fn = t.prototype = {
        init: function(t) { this.options = n(e, t) },
        initialize: function(t) {
            this.init(t);
            this.char_dict = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY";
            this.full_dict = { a: "啊阿锕", ai: "埃挨哎唉哀皑癌蔼矮艾碍爱隘诶捱嗳嗌嫒瑷暧砹锿霭", an: "鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌顸黯", ang: "肮昂盎", ao: "凹敖熬翱袄傲奥懊澳坳拗嗷噢岙廒遨媪骜聱螯鏊鳌鏖", ba: "芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝萆捭岜灞杷钯粑鲅魃", bai: "白柏百摆佰败拜稗薜掰鞴", ban: "斑班搬扳般颁板版扮拌伴瓣半办绊阪坂豳钣瘢癍舨", bang: "邦帮梆榜膀绑棒磅蚌镑傍谤蒡螃", bao: "苞胞包褒雹保堡饱宝抱报暴豹鲍爆勹葆宀孢煲鸨褓趵龅", bo: "剥薄玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳蕃啵饽檗擘礴钹鹁簸跛", bei: "杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶埤蓓呗怫悖碚鹎褙鐾", ben: "奔苯本笨畚坌锛", beng: "崩绷甭泵蹦迸唪嘣甏", bi: "逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛匕仳俾芘荜荸吡哔狴庳愎滗濞弼妣婢嬖璧贲畀铋秕裨筚箅篦舭襞跸髀", bian: "鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥稹窆蝙笾鳊", biao: "标彪膘表婊骠飑飙飚灬镖镳瘭裱鳔", bie: "鳖憋别瘪蹩鳘", bin: "彬斌濒滨宾摈傧浜缤玢殡膑镔髌鬓", bing: "兵冰柄丙秉饼炳病并禀邴摒绠枋槟燹", bu: "捕卜哺补埠不布步簿部怖拊卟逋瓿晡钚醭", ca: "擦嚓礤", cai: "猜裁材才财睬踩采彩菜蔡", can: "餐参蚕残惭惨灿骖璨粲黪", cang: "苍舱仓沧藏伧", cao: "操糙槽曹草艹嘈漕螬艚", ce: "厕策侧册测刂帻恻", ceng: "层蹭噌", cha: "插叉茬茶查碴搽察岔差诧猹馇汊姹杈楂槎檫钗锸镲衩", chai: "拆柴豺侪茈瘥虿龇", chan: "搀掺蝉馋谗缠铲产阐颤冁谄谶蒇廛忏潺澶孱羼婵嬗骣觇禅镡裣蟾躔", chang: "昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳", chao: "超抄钞朝嘲潮巢吵炒怊绉晁耖", che: "车扯撤掣彻澈坼屮砗", chen: "郴臣辰尘晨忱沉陈趁衬称谌抻嗔宸琛榇肜胂碜龀", cheng: "撑城橙成呈乘程惩澄诚承逞骋秤埕嵊徵浈枨柽樘晟塍瞠铖裎蛏酲", chi: "吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺墀芪茌搋叱哧啻嗤彳饬沲媸敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑", chong: "充冲虫崇宠茺忡憧铳艟", chou: "抽酬畴踌稠愁筹仇绸瞅丑俦圳帱惆溴妯瘳雠鲋", chu: "臭初出橱厨躇锄雏滁除楚础储矗搐触处亍刍憷绌杵楮樗蜍蹰黜", chuan: "揣川穿椽传船喘串掾舛惴遄巛氚钏镩舡", chuang: "疮窗幢床闯创怆", chui: "吹炊捶锤垂陲棰槌", chun: "春椿醇唇淳纯蠢促莼沌肫朐鹑蝽", chuo: "戳绰蔟辶辍镞踔龊", ci: "疵茨磁雌辞慈瓷词此刺赐次荠呲嵯鹚螅糍趑", cong: "聪葱囱匆从丛偬苁淙骢琮璁枞", cu: "凑粗醋簇猝殂蹙", cuan: "蹿篡窜汆撺昕爨", cui: "摧崔催脆瘁粹淬翠萃悴璀榱隹", cun: "村存寸磋忖皴", cuo: "撮搓措挫错厝脞锉矬痤鹾蹉躜", da: "搭达答瘩打大耷哒嗒怛妲疸褡笪靼鞑", dai: "呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨逯骀绐玳黛", dan: "耽担丹单郸掸胆旦氮但惮淡诞弹蛋亻儋卩萏啖澹檐殚赕眈瘅聃箪", dang: "当挡党荡档谠凼菪宕砀铛裆", dao: "刀捣蹈倒岛祷导到稻悼道盗叨啁忉洮氘焘忑纛", de: "德得的锝", deng: "蹬灯登等瞪凳邓噔嶝戥磴镫簦", di: "堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻莜荻嘀娣柢棣觌砥碲睇镝羝骶", dian: "颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫埝巅玷癜癫簟踮", diao: "碉叼雕凋刁掉吊钓调轺铞蜩粜貂", die: "跌爹碟蝶迭谍叠佚垤堞揲喋渫轶牒瓞褶耋蹀鲽鳎", ding: "丁盯叮钉顶鼎锭定订丢仃啶玎腚碇町铤疔耵酊", dong: "东冬董懂动栋侗恫冻洞垌咚岽峒夂氡胨胴硐鸫", dou: "兜抖斗陡豆逗痘蔸钭窦窬蚪篼酡", du: "都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟橐牍蠹笃髑黩", duan: "端短锻段断缎彖椴煅簖", dui: "堆兑队对怼憝碓", dun: "墩吨蹲敦顿囤钝盾遁炖砘礅盹镦趸", duo: "掇哆多夺垛躲朵跺舵剁惰堕咄哚缍柁铎裰踱", e: "蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩垭苊莪萼呃愕屙婀轭曷腭硪锇锷鹗颚鳄", en: "恩蒽摁唔嗯", er: "而儿耳尔饵洱二贰迩珥铒鸸鲕", fa: "发罚筏伐乏阀法珐垡砝", fan: "藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蘩幡犭梵攵燔畈蹯", fang: "坊芳方肪房防妨仿访纺放匚邡彷钫舫鲂", fei: "菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绋绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱", fen: "芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼愍鲼鼢", feng: "丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑沣砜", fu: "佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙苻茯莩菔呋幞滏艴孚驸绂桴赙黻黼罘稃馥虍蚨蜉蝠蝮麸趺跗鳆", ga: "噶嘎蛤尬呷尕尜旮钆", gai: "该改概钙盖溉丐陔垓戤赅胲", gan: "干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐", gang: "冈刚钢缸肛纲岗港戆罡颃筻", gong: "杠工攻功恭龚供躬公宫弓巩汞拱贡共蕻廾咣珙肱蚣蛩觥", gao: "篙皋高膏羔糕搞镐稿告睾诰郜蒿藁缟槔槁杲锆", ge: "哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿塥嗝纥搿膈硌铪镉袼颌虼舸骼髂", gei: "给", gen: "根跟亘茛哏艮", geng: "耕更庚羹埂耿梗哽赓鲠", gou: "钩勾沟苟狗垢构购够佝诟岣遘媾缑觏彀鸲笱篝鞲", gu: "辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰哌崮汩梏轱牯牿胍臌毂瞽罟钴锢瓠鸪鹄痼蛄酤觚鲴骰鹘", gua: "刮瓜剐寡挂褂卦诖呱栝鸹", guai: "乖拐怪哙", guan: "棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏", guang: "光广逛犷桄胱疒", gui: "瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜", gun: "辊滚棍丨衮绲磙鲧", guo: "锅郭国果裹过馘蠃埚掴呙囗帼崞猓椁虢锞聒蜮蜾蝈", ha: "哈", hai: "骸孩海氦亥害骇咴嗨颏醢", han: "酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖阚瀚晗焓颔蚶鼾", hen: "夯痕很狠恨", hang: "杭航沆绗珩桁", hao: "壕嚎豪毫郝好耗号浩薅嗥嚆濠灏昊皓颢蚝", he: "呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺诃劾壑藿嗑嗬阖盍蚵翮", hei: "嘿黑", heng: "哼亨横衡恒訇蘅", hong: "轰哄烘虹鸿洪宏弘红黉讧荭薨闳泓", hou: "喉侯猴吼厚候后堠後逅瘊篌糇鲎骺", hu: "呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜鹕鹱笏醐斛", hua: "花哗华猾滑画划化话劐浍骅桦铧稞", huai: "槐徊怀淮坏还踝", huan: "欢环桓缓换患唤痪豢焕涣宦幻郇奂垸擐圜洹浣漶寰逭缳锾鲩鬟", huang: "荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇", hui: "灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙哕喙隳洄彗缋珲晖恚虺蟪麾", hun: "荤昏婚魂浑混诨馄阍溷缗", huo: "豁活伙火获或惑霍货祸攉嚯夥钬锪镬耠蠖", ji: "击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪居丌乩剞佶佴脔墼芨芰萁蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂", jia: "嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏拮岬浃迦珈戛胛恝铗镓痂蛱笳袈跏", jian: "歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧柙楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯", jiang: "僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇", jiao: "蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫佼僬茭挢噍峤徼姣纟敫皎鹪蛟醮跤鲛", jie: "窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届偈讦诘喈嗟獬婕孑桀獒碣锴疖袷颉蚧羯鲒骱髫", jin: "巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽卺荩堇噤馑廑妗缙瑾槿赆觐钅锓衿矜", jing: "劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌", jiong: "炯窘冂迥扃", jiu: "揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鹫赳鬏", ju: "鞠拘狙疽驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫", juan: "捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽", jue: "撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖", jun: "均菌钧军君峻俊竣浚郡骏捃狻皲筠麇", ka: "喀咖卡佧咔胩", ke: "咯坷苛柯棵磕颗科壳咳可渴克刻客课岢恪溘骒缂珂轲氪瞌钶疴窠蝌髁", kai: "开揩楷凯慨剀垲蒈忾恺铠锎", kan: "刊堪勘坎砍看侃凵莰莶戡龛瞰", kang: "康慷糠扛抗亢炕坑伉闶钪", kao: "考拷烤靠尻栲犒铐", ken: "肯啃垦恳垠裉颀", keng: "吭忐铿", kong: "空恐孔控倥崆箜", kou: "抠口扣寇芤蔻叩眍筘", ku: "枯哭窟苦酷库裤刳堀喾绔骷", kua: "夸垮挎跨胯侉", kuai: "块筷侩快蒯郐蒉狯脍", kuan: "宽款髋", kuang: "匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶", kui: "亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗揆喹喟悝愦阕逵暌睽聩蝰篑臾跬", kun: "坤昆捆困悃阃琨锟醌鲲髡", kuo: "括扩廓阔蛞", la: "垃拉喇蜡腊辣啦剌摺邋旯砬瘌", lai: "莱来赖崃徕涞濑赉睐铼癞籁", lan: "蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴", lang: "琅榔狼廊郎朗浪莨蒗啷阆锒稂螂", lao: "捞劳牢老佬姥酪烙涝唠崂栳铑铹痨醪", le: "勒乐肋仂叻嘞泐鳓", lei: "雷镭蕾磊累儡垒擂类泪羸诔荽咧漯嫘缧檑耒酹", ling: "棱冷拎玲菱零龄铃伶羚凌灵陵岭领另令酃塄苓呤囹泠绫柃棂瓴聆蛉翎鲮", leng: "楞愣", li: "厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜捩呖唳喱猁溧澧逦娌嫠骊缡珞枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧", lian: "俩联莲连镰廉怜涟帘敛脸链恋炼练挛蔹奁潋濂娈琏楝殓臁膦裢蠊鲢", liang: "粮凉梁粱良两辆量晾亮谅墚椋踉靓魉", liao: "撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩耢", lie: "列裂烈劣猎冽埒洌趔躐鬣", lin: "琳林磷霖临邻鳞淋凛赁吝蔺嶙廪遴檩辚瞵粼躏麟", liu: "溜琉榴硫馏留刘瘤流柳六抡偻蒌泖浏遛骝绺旒熘锍镏鹨鎏", "long": "龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃", lou: "楼娄搂篓漏陋喽嵝镂瘘耧蝼髅", lu: "芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆摅撸噜泸渌漉璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈", lv: "驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛", luan: "峦孪滦卵乱栾鸾銮", lue: "掠略锊", lun: "轮伦仑沦纶论囵", luo: "萝螺罗逻锣箩骡裸落洛骆络倮荦摞猡泺椤脶镙瘰雒", ma: "妈麻玛码蚂马骂嘛吗唛犸嬷杩麽", mai: "埋买麦卖迈脉劢荬咪霾", man: "瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔", mang: "芒茫盲忙莽邙漭朦硭蟒", meng: "氓萌蒙檬盟锰猛梦孟勐甍瞢懵礞虻蜢蠓艋艨黾", miao: "猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱", mao: "茅锚毛矛铆卯茂冒帽貌贸侔袤勖茆峁瑁昴牦耄旄懋瞀蛑蝥蟊髦", me: "么", mei: "玫枚梅酶霉煤没眉媒镁每美昧寐妹媚坶莓嵋猸浼湄楣镅鹛袂魅", men: "门闷们扪玟焖懑钔", mi: "眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼嘧猕獯汨宓弭脒敉糸縻麋", mian: "棉眠绵冕免勉娩缅面沔湎腼眄", mie: "蔑灭咩蠛篾", min: "民抿皿敏悯闽苠岷闵泯珉", ming: "明螟鸣铭名命冥茗溟暝瞑酩", miu: "谬", mo: "摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫镆秣瘼耱蟆貊貘", mou: "谋牟某厶哞婺眸鍪", mu: "拇牡亩姆母墓暮幕募慕木目睦牧穆仫苜呒沐毪钼", na: "拿哪呐钠那娜纳内捺肭镎衲箬", nai: "氖乃奶耐奈鼐艿萘柰", nan: "南男难囊喃囡楠腩蝻赧", nao: "挠脑恼闹孬垴猱瑙硇铙蛲", ne: "淖呢讷", nei: "馁", nen: "嫩能枘恁", ni: "妮霓倪泥尼拟你匿腻逆溺伲坭猊怩滠昵旎祢慝睨铌鲵", nian: "蔫拈年碾撵捻念廿辇黏鲇鲶", niang: "娘酿", niao: "鸟尿茑嬲脲袅", nie: "捏聂孽啮镊镍涅乜陧蘖嗫肀颞臬蹑", nin: "您柠", ning: "狞凝宁拧泞佞蓥咛甯聍", niu: "牛扭钮纽狃忸妞蚴", nong: "脓浓农侬", nu: "奴努怒呶帑弩胬孥驽", nv: "女恧钕衄", nuan: "暖", nuenue: "虐", nue: "疟谑", nuo: "挪懦糯诺傩搦喏锘", ou: "哦欧鸥殴藕呕偶沤怄瓯耦", pa: "啪趴爬帕怕琶葩筢", pai: "拍排牌徘湃派俳蒎", pan: "攀潘盘磐盼畔判叛爿泮袢襻蟠蹒", pang: "乓庞旁耪胖滂逄", pao: "抛咆刨炮袍跑泡匏狍庖脬疱", pei: "呸胚培裴赔陪配佩沛掊辔帔淠旆锫醅霈", pen: "喷盆湓", peng: "砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯堋嘭怦蟛", pi: "砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕陴邳郫圮鼙擗噼庀媲纰枇甓睥罴铍痦癖疋蚍貔", pian: "篇偏片骗谝骈犏胼褊翩蹁", piao: "飘漂瓢票剽嘌嫖缥殍瞟螵", pie: "撇瞥丿苤氕", pin: "拼频贫品聘拚姘嫔榀牝颦", ping: "乒坪苹萍平凭瓶评屏俜娉枰鲆", po: "坡泼颇婆破魄迫粕叵鄱溥珀钋钷皤笸", pou: "剖裒踣", pu: "扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗濮璞氆镤镨蹼", qi: "期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亟亓圻芑萋葺嘁屺岐汔淇骐绮琪琦杞桤槭欹祺憩碛蛴蜞綦綮趿蹊鳍麒", qia: "掐恰洽葜", qian: "牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉佥阡芊芡荨掮岍悭慊骞搴褰缱椠肷愆钤虔箝", qiang: "枪呛腔羌墙蔷强抢嫱樯戗炝锖锵镪襁蜣羟跫跄", qiao: "橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵毳硗跷鞒", qie: "切茄且怯窃郄唼惬妾挈锲箧", qin: "钦侵亲秦琴勤芹擒禽寝沁芩蓁蕲揿吣嗪噙溱檎螓衾", qing: "青轻氢倾卿清擎晴氰情顷请庆倩苘圊檠磬蜻罄箐謦鲭黥", qiong: "琼穷邛茕穹筇銎", qiu: "秋丘邱球求囚酋泅俅氽巯艽犰湫逑遒楸赇鸠虬蚯蝤裘糗鳅鼽", qu: "趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍祛磲癯蛐蠼麴瞿黢", quan: "圈颧权醛泉全痊拳犬券劝诠荃獾悛绻辁畎铨蜷筌鬈", que: "缺炔瘸却鹊榷确雀阙悫", qun: "裙群逡", ran: "然燃冉染苒髯", rang: "瓤壤攘嚷让禳穰", rao: "饶扰绕荛娆桡", ruo: "惹若弱", re: "热偌", ren: "壬仁人忍韧任认刃妊纫仞荏葚饪轫稔衽", reng: "扔仍", ri: "日", rong: "戎茸蓉荣融熔溶容绒冗嵘狨缛榕蝾", rou: "揉柔肉糅蹂鞣", ru: "茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡铷襦颥", ruan: "软阮朊", rui: "蕊瑞锐芮蕤睿蚋", run: "闰润", sa: "撒洒萨卅仨挲飒", sai: "腮鳃塞赛噻", san: "三叁伞散彡馓氵毵糁霰", sang: "桑嗓丧搡磉颡", sao: "搔骚扫嫂埽臊瘙鳋", se: "瑟色涩啬铩铯穑", sen: "森", seng: "僧", sha: "莎砂杀刹沙纱傻啥煞脎歃痧裟霎鲨", shai: "筛晒酾", shan: "珊苫杉山删煽衫闪陕擅赡膳善汕扇缮剡讪鄯埏芟潸姗骟膻钐疝蟮舢跚鳝", shang: "墒伤商赏晌上尚裳垧绱殇熵觞", shao: "梢捎稍烧芍勺韶少哨邵绍劭苕潲蛸笤筲艄", she: "奢赊蛇舌舍赦摄射慑涉社设厍佘猞畲麝", shen: "砷申呻伸身深娠绅神沈审婶甚肾慎渗诜谂吲哂渖椹矧蜃", sheng: "声生甥牲升绳省盛剩胜圣丞渑媵眚笙", shi: "师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑唑饣轼耆贳炻礻铈铊螫舐筮豕鲥鲺", shou: "收手首守寿授售受瘦兽扌狩绶艏", shu: "蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽忄沭涑澍姝纾毹腧殳镯秫鹬", shua: "刷耍唰涮", shuai: "摔衰甩帅蟀", shuan: "栓拴闩", shuang: "霜双爽孀", shui: "谁水睡税", shun: "吮瞬顺舜恂", shuo: "说硕朔烁蒴搠嗍濯妁槊铄", si: "斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕菥咝汜泗澌姒驷缌祀祠锶鸶耜蛳笥", song: "松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦", sou: "搜艘擞嗽叟嗖嗾馊溲飕瞍锼螋", su: "苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫簌觫稣", suan: "酸蒜算", sui: "虽隋随绥髓碎岁穗遂隧祟蓑冫谇濉邃燧眭睢", sun: "孙损笋荪狲飧榫跣隼", suo: "梭唆缩琐索锁所唢嗦娑桫睃羧", ta: "塌他它她塔獭挞蹋踏闼溻遢榻沓", tai: "胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐", tan: "坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯蕈昙钽锬覃", tang: "汤塘搪堂棠膛唐糖傥饧溏瑭铴镗耥螗螳羰醣", thang: "倘躺淌", theng: "趟烫", tao: "掏涛滔绦萄桃逃淘陶讨套挑鼗啕韬饕", te: "特", teng: "藤腾疼誊滕", ti: "梯剔踢锑提题蹄啼体替嚏惕涕剃屉荑悌逖绨缇鹈裼醍", tian: "天添填田甜恬舔腆掭忝阗殄畋钿蚺", tiao: "条迢眺跳佻祧铫窕龆鲦", tie: "贴铁帖萜餮", ting: "厅听烃汀廷停亭庭挺艇莛葶婷梃蜓霆", tong: "通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼", tou: "偷投头透亠", tu: "凸秃突图徒途涂屠土吐兔堍荼菟钍酴", tuan: "湍团疃", tui: "推颓腿蜕褪退忒煺", tun: "吞屯臀饨暾豚窀", tuo: "拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝砣箨舄跎鼍", wa: "挖哇蛙洼娃瓦袜佤娲腽", wai: "歪外", wan: "豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄苋菀纨绾琬脘畹蜿箢", wang: "汪王亡枉网往旺望忘妄罔尢惘辋魍", wei: "威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫倭偎诿隈葳薇帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨熨痿艉鲔", wen: "瘟温蚊文闻纹吻稳紊问刎愠阌汶璺韫殁雯", weng: "嗡翁瓮蓊蕹", wo: "挝蜗涡窝我斡卧握沃莴幄渥杌肟龌", wu: "巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴庑怃忤浯寤迕妩骛牾焐鹉鹜蜈鋈鼯", xi: "昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗茜葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧钸皙穸蜥蟋舾羲粞翕醯鼷", xia: "瞎虾匣霞辖暇峡侠狭下厦夏吓掀葭嗄狎遐瑕硖瘕罅黠", xian: "锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼藓岘猃暹娴氙祆鹇痫蚬筅籼酰跹", xiang: "相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨", xiao: "萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓咻崤潇逍骁绡枭枵筱箫魈", xie: "楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷廨瀣邂绁缬榭榍歙躞", xin: "薪芯锌欣辛新忻心信衅囟馨莘歆铽鑫", xing: "星腥猩惺兴刑型形邢行醒幸杏性姓陉荇荥擤悻硎", xiong: "兄凶胸匈汹雄熊芎", xiu: "休修羞朽嗅锈秀袖绣莠岫馐庥鸺貅髹", xu: "墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续讴诩圩蓿怵洫溆顼栩煦砉盱胥糈醑", xuan: "轩喧宣悬旋玄选癣眩绚儇谖萱揎馔泫洵渲漩璇楦暄炫煊碹铉镟痃", xue: "靴薛学穴雪血噱泶鳕", xun: "勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀薰峋徇浔曛窨醺鲟", ya: "压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢揠吖岈迓娅琊桠氩砑睚痖", yan: "焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣靥赝俨偃兖讠谳郾鄢芫菸崦恹闫阏洇湮滟妍嫣琰晏胭腌焱罨筵酽魇餍鼹", yang: "殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅", yao: "邀腰妖瑶摇尧遥窑谣姚咬舀药要耀夭爻吆崾徭瀹幺珧杳曜肴鹞窈繇鳐", ye: "椰噎耶爷野冶也页掖业叶曳腋夜液谒邺揶馀晔烨铘", yi: "一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佾诒圪圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪贻旖熠钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟", yin: "茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞堙茚喑狺夤氤铟瘾蚓霪龈", ying: "英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦撄嘤膺滢潆瀛瑛璎楹鹦瘿颍罂", yo: "哟唷", yong: "拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉慵邕镛甬鳙饔", you: "幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莸呦囿宥柚猷牖铕疣蝣鱿黝鼬", yu: "迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄喁圄圉嵛狳饫庾阈妪妤纡瑜昱觎腴欤於煜燠聿钰鹆瘐瘀窳蝓竽舁雩龉", yuan: "鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院塬沅媛瑗橼爰眢鸢螈鼋", yue: "曰约越跃钥岳粤月悦阅龠樾刖钺", yun: "耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽纭殒昀氲", za: "匝砸杂拶咂", zai: "栽哉灾宰载再在咱崽甾", zan: "攒暂赞瓒昝簪糌趱錾", zang: "赃脏葬奘戕臧", zao: "遭糟凿藻枣早澡蚤躁噪造皂灶燥唣缫", ze: "责择则泽仄赜啧迮昃笮箦舴", zei: "贼", zen: "怎谮", zeng: "增憎曾赠缯甑罾锃", zha: "扎喳渣札轧铡闸眨栅榨咋乍炸诈揸吒咤哳怍砟痄蚱齄", zhai: "摘斋宅窄债寨砦", zhan: "瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃", zhang: "樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑", zhao: "招昭找沼赵照罩兆肇召爪诏棹钊笊", zhe: "遮折哲蛰辙者锗蔗这浙谪陬柘辄磔鹧褚蜇赭", zhen: "珍斟真甄砧臻贞针侦枕疹诊震振镇阵缜桢榛轸赈胗朕祯畛鸩", zheng: "蒸挣睁征狰争怔整拯正政帧症郑证诤峥钲铮筝", zhi: "芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾攴贽膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯", zhong: "中盅忠钟衷终种肿重仲众冢锺螽舂舯踵", zhou: "舟周州洲诌粥轴肘帚咒皱宙昼骤啄着倜诹荮鬻纣胄碡籀舳酎鲷", zhu: "珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴驺杼槠橥炷铢疰瘃蚰竺箸翥躅麈", zhua: "抓", zhuai: "拽", zhuan: "专砖转撰赚篆抟啭颛", zhuang: "桩庄装妆撞壮状丬", zhui: "椎锥追赘坠缀萑骓缒", zhun: "谆准", zhuo: "捉拙卓桌琢茁酌灼浊倬诼廴蕞擢啜浞涿杓焯禚斫", zi: "兹咨资姿滋淄孜紫仔籽滓子自渍字谘嵫姊孳缁梓辎赀恣眦锱秭耔笫粢觜訾鲻髭", zong: "鬃棕踪宗综总纵腙粽", zou: "邹走奏揍鄹鲰", zu: "租足卒族祖诅阻组俎菹啐徂驵蹴", zuan: "钻纂攥缵", zui: "嘴醉最罪", zun: "尊遵撙樽鳟", zuo: "昨左佐柞做作坐座阝阼胙祚酢", cou: "薮楱辏腠", nang: "攮哝囔馕曩", o: "喔", dia: "嗲", chuai: "嘬膪踹", cen: "岑涔", diu: "铥", nou: "耨", fou: "缶", bia: "髟" };
            this.polyphone = {
                19969: "DZ",
                19975: "WM",
                19988: "QJ",
                20048: "YL",
                20056: "SC",
                20060: "NM",
                20094: "QG",
                20127: "QJ",
                20167: "QC",
                20193: "YG",
                20250: "KH",
                20256: "ZC",
                20282: "SC",
                20285: "QJG",
                20291: "TD",
                20314: "YD",
                20340: "NE",
                20375: "TD",
                20389: "YJ",
                20391: "CZ",
                20415: "PB",
                20446: "YS",
                20447: "SQ",
                20504: "TC",
                20608: "KG",
                20854: "QJ",
                20857: "ZC",
                20911: "PF",
                20504: "TC",
                20608: "KG",
                20854: "QJ",
                20857: "ZC",
                20911: "PF",
                20985: "AW",
                21032: "PB",
                21048: "XQ",
                21049: "SC",
                21089: "YS",
                21119: "JC",
                21242: "SB",
                21273: "SC",
                21305: "YP",
                21306: "QO",
                21330: "ZC",
                21333: "SDC",
                21345: "QK",
                21378: "CA",
                21397: "SC",
                21414: "XS",
                21442: "SC",
                21477: "JG",
                21480: "TD",
                21484: "ZS",
                21494: "YX",
                21505: "YX",
                21512: "HG",
                21523: "XH",
                21537: "PB",
                21542: "PF",
                21549: "KH",
                21571: "E",
                21574: "DA",
                21588: "TD",
                21589: "O",
                21618: "ZC",
                21621: "KHA",
                21632: "ZJ",
                21654: "KG",
                21679: "LKG",
                21683: "KH",
                21710: "A",
                21719: "YH",
                21734: "WOE",
                21769: "A",
                21780: "WN",
                21804: "XH",
                21834: "A",
                21899: "ZD",
                21903: "RN",
                21908: "WO",
                21939: "ZC",
                21956: "SA",
                21964: "YA",
                21970: "TD",
                22003: "A",
                22031: "JG",
                22040: "XS",
                22060: "ZC",
                22066: "ZC",
                22079: "MH",
                22129: "XJ",
                22179: "XA",
                22237: "NJ",
                22244: "TD",
                22280: "JQ",
                22300: "YH",
                22313: "XW",
                22331: "YQ",
                22343: "YJ",
                22351: "PH",
                22395: "DC",
                22412: "TD",
                22484: "PB",
                22500: "PB",
                22534: "ZD",
                22549: "DH",
                22561: "PB",
                22612: "TD",
                22771: "KQ",
                22831: "HB",
                22841: "JG",
                22855: "QJ",
                22865: "XQ",
                23013: "ML",
                23081: "WM",
                23487: "SX",
                23558: "QJ",
                23561: "YW",
                23586: "YW",
                23614: "YW",
                23615: "SN",
                23631: "PB",
                23646: "ZS",
                23663: "ZT",
                23673: "YG",
                23762: "TD",
                23769: "ZS",
                23780: "QJ",
                23884: "QK",
                24055: "XH",
                24113: "DC",
                24162: "ZC",
                24191: "GA",
                24273: "QJ",
                24324: "NL",
                24377: "TD",
                24378: "QJ",
                24439: "PF",
                24554: "ZS",
                24683: "TD",
                24694: "WE",
                24733: "LK",
                24925: "TN",
                25094: "ZG",
                25100: "XQ",
                25103: "XH",
                25153: "PB",
                25170: "PB",
                25179: "KG",
                25203: "PB",
                25240: "ZS",
                25282: "FB",
                25303: "NA",
                25324: "KG",
                25341: "ZY",
                25373: "WZ",
                25375: "XJ",
                25384: "A",
                25457: "A",
                25528: "SD",
                25530: "SC",
                25552: "TD",
                25774: "ZC",
                25874: "ZC",
                26044: "YW",
                26080: "WM",
                26292: "PB",
                26333: "PB",
                26355: "ZY",
                26366: "CZ",
                26397: "ZC",
                26399: "QJ",
                26415: "ZS",
                26451: "SB",
                26526: "ZC",
                26552: "JG",
                26561: "TD",
                26588: "JG",
                26597: "CZ",
                26629: "ZS",
                26638: "YL",
                26646: "XQ",
                26653: "KG",
                26657: "XJ",
                26727: "HG",
                26894: "ZC",
                26937: "ZS",
                26946: "ZC",
                26999: "KJ",
                27099: "KJ",
                27449: "YQ",
                27481: "XS",
                27542: "ZS",
                27663: "ZS",
                27748: "TS",
                27784: "SC",
                27788: "ZD",
                27795: "TD",
                27812: "O",
                27850: "PB",
                27852: "MB",
                27895: "SL",
                27898: "PL",
                27973: "QJ",
                27981: "KH",
                27986: "HX",
                27994: "XJ",
                28044: "YC",
                28065: "WG",
                28177: "SM",
                28267: "QJ",
                28291: "KH",
                28337: "ZQ",
                28463: "TL",
                28548: "DC",
                28601: "TD",
                28689: "PB",
                28805: "JG",
                28820: "QG",
                28846: "PB",
                28952: "TD",
                28975: "ZC",
                29100: "A",
                29325: "QJ",
                29575: "SL",
                29602: "FB",
                30010: "TD",
                30044: "CX",
                30058: "PF",
                30091: "YSP",
                30111: "YN",
                30229: "XJ",
                30427: "SC",
                30465: "SX",
                30631: "YQ",
                30655: "QJ",
                30684: "QJG",
                30707: "SD",
                30729: "XH",
                30796: "LG",
                30917: "PB",
                31074: "NM",
                31085: "JZ",
                31109: "SC",
                31181: "ZC",
                31192: "MLB",
                31293: "JQ",
                31400: "YX",
                31584: "YJ",
                31896: "ZN",
                31909: "ZY",
                31995: "XJ",
                32321: "PF",
                32327: "ZY",
                32418: "HG",
                32420: "XQ",
                32421: "HG",
                32438: "LG",
                32473: "GJ",
                32488: "TD",
                32521: "QJ",
                32527: "PB",
                32562: "ZSQ",
                32564: "JZ",
                32735: "ZD",
                32793: "PB",
                33071: "PF",
                33098: "XL",
                33100: "YA",
                33152: "PB",
                33261: "CX",
                33324: "BP",
                33333: "TD",
                33406: "YA",
                33426: "WM",
                33432: "PB",
                33445: "JG",
                33486: "ZN",
                33493: "TS",
                33507: "QJ",
                33540: "QJ",
                33544: "ZC",
                33564: "XQ",
                33617: "YT",
                33632: "QJ",
                33636: "XH",
                33637: "YX",
                33694: "WG",
                33705: "PF",
                33728: "YW",
                33882: "SR",
                34067: "WM",
                34074: "YW",
                34121: "QJ",
                34255: "ZC",
                34259: "XL",
                34425: "JH",
                34430: "XH",
                34485: "KH",
                34503: "YS",
                34532: "HG",
                34552: "XS",
                34558: "YE",
                34593: "ZL",
                34660: "YQ",
                34892: "XH",
                34928: "SC",
                34999: "QJ",
                35048: "PB",
                35059: "SC",
                35098: "ZC",
                35203: "TQ",
                35265: "JX",
                35299: "JX",
                35782: "SZ",
                35828: "YS",
                35830: "E",
                35843: "TD",
                35895: "YG",
                35977: "MH",
                36158: "JG",
                36228: "QJ",
                36426: "XQ",
                36466: "DC",
                36710: "JC",
                36711: "ZYG",
                36767: "PB",
                36866: "SK",
                36951: "YW",
                37034: "YX",
                37063: "XH",
                37218: "ZC",
                37325: "ZC",
                38063: "PB",
                38079: "TD",
                38085: "QY",
                38107: "DC",
                38116: "TD",
                38123: "YD",
                38224: "HG",
                38241: "XTC",
                38271: "ZC",
                38415: "YE",
                38426: "KH",
                38461: "YD",
                38463: "AE",
                38466: "PB",
                38477: "XJ",
                38518: "YT",
                38551: "WK",
                38585: "ZC",
                38704: "XS",
                38739: "LJ",
                38761: "GJ",
                38808: "SQ",
                39048: "JG",
                39049: "XJ",
                39052: "HG",
                39076: "CZ",
                39271: "XT",
                39534: "TD",
                39552: "TD",
                39584: "PB",
                39647: "SB",
                39730: "LG",
                39748: "TPB",
                40109: "ZQ",
                40479: "ND",
                40516: "HG",
                40536: "HG",
                40583: "QJ",
                40765: "YQ",
                40784: "QJ",
                40840: "YK",
                40863: "QJG"
            }
        },
        getFullChars: function(t) {
            var e = "",
                n;
            var i = new RegExp("[a-zA-Z0-9- ]");
            for (var a = 0, s = t.length; a < s; a++) {
                var o = t.substr(a, 1),
                    r = o.charCodeAt(0);
                if (r > 40869 || r < 19968) e += o;
                else { n = this._getFullChar(o);
                    if (n !== !1) e += n } }
            return e },
        getCamelChars: function(t) {
            if ("string" != typeof t) throw new Error((-1), "函数getFisrt需要字符串类型参数!");
            var e = [];
            for (var n = 0, i = t.length; n < i; n++) {
                var a = t.charAt(n);
                e.push(this._getChar(a)) }
            return this._getResult(e) },
        _getFullChar: function(t) {
            for (var e in this.full_dict)
                if (-1 !== this.full_dict[e].indexOf(t)) return this._capitalize(e);
            return !1 },
        _capitalize: function(t) {
            if (t.length > 0) {
                var e = t.substr(0, 1).toUpperCase();
                var n = t.substr(1, t.length);
                return e + n } },
        _getChar: function(t) {
            var e = t.charCodeAt(0);
            if (e > 40869 || e < 19968) return t;
            if (!this.options.checkPolyphone) return this.char_dict.charAt(e - 19968);
            else return this.polyphone[e] ? this.polyphone[e] : this.char_dict.charAt(e - 19968) },
        _getResult: function(t) {
            if (!this.options.checkPolyphone) return t.join("");
            var e = [""];
            for (var n = 0, i = t.length; n < i; n++) {
                var a = t[n],
                    s = a.length;
                if (1 == s)
                    for (var o = 0; o < e.length; o++) e[c] += a;
                else {
                    var r = e.slice(0);
                    e = [];
                    for (var o = 0; o < s; o++) {
                        var l = r.slice(0);
                        for (var c = 0; c < l.length; c++) l[c] += a.charAt(o);
                        e = e.concat(l) } } }
            return e }
    };
    var n = function(t, e) {
        for (var n in e) t[n] = e[n];
        return t };
    return new t(arguments)
});
I$(299, function(t, e, n, i, a) {
    var s = i.extend({ template: e.replace(/[\n]/g, ""), config: function(t) {
            var e = t.brandList;
            for (var n = e.length; n--;) {
                var i = e[n];
                var a = new RegExp("&" + t.brandText + "=[^&]*", "gi");
                i.url = t.baseUrl.replace(a, "&" + t.brandText + "=" + i.brandId) }
            t.isShow = !0;
            t.selected = 0;
            t.brandNameKey = "brandName";
            this.supr(t) }, init: function() {
            var t = this.data;
            this.initLetter(t);
            this.supr() }, initLetter: function(e) { e.allBrand = n.clone(e.brandList);
            e.letterList = [];
            var i = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0 };
            t._$forEach(e.allBrand, function(t) {
                var n = t[e.brandNameKey];
                var a = this.getFirstEnglishLetter(n);
                var s = this.getFirstChineseLetter(n);
                if (/^[a-zA-Z]$/.test(a)) i[a]++;
                if (/^[a-zA-Z]$/.test(s)) i[s]++ }._$bind(this));
            for (var a in i)
                if (i[a] > 0) e.letterList.push(a);
            this.$update() }, letterChange: function(e) {
            var n = this.data;
            var i = n.allBrand || [];
            n.selected = e;
            if (0 != e) {
                var a = [];
                if (e == -1) t._$forEach(i, function(t) {
                    var e = t[n.brandNameKey];
                    if (!/[a-zA-Z]/.test(this.getFirstEnglishLetter(e)) && !/[a-zA-Z]/.test(this.getFirstChineseLetter(e))) a.push(t) }._$bind(this));
                else t._$forEach(i, function(t) {
                    var i = t[n.brandNameKey];
                    if (this.getFirstEnglishLetter(i) == e.toUpperCase() || this.getFirstChineseLetter(i) == e.toUpperCase()) a.push(t) }._$bind(this));
                n.brandList = a } else n.brandList = n.allBrand }, getFirstChineseLetter: function(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t.charAt(e);
                if (/^[\u4E00-\u9FA5]$/.test(n)) return a._getChar(n).toUpperCase() }
            return "" }, getFirstEnglishLetter: function(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t.charAt(e);
                if (/[a-zA-Z]$/.test(n)) return n.toUpperCase() }
            return "" }, changeList: function() {
            var t = this.data;
            if (t.isShow) t.brandList = t.allBrand;
            t.isShow = !t.isShow } });
    return s }, 2, 492, 15, 151, 493);
I$(331, '<div class="m-modal-message">\n\t{#include msg}\n</div>\n<div class="m-modal-footer">\n\t{#if hideOkBtn != true}\n\t\t<a href="javascript:;" class="btn u-btn u-btn-ok u-btn-medium" on-click="{this.onok()}"  r-html="{txtOk || \'确认\'}"></a>\n\t{/if}\n\t{#if hideCCBtn != true}\n\t\t<a href="javascript:;" class="btn u-btn u-btn-cancel u-btn-medium" on-click="{this.cancel()}" r-html="{txtCC || \'取消\'}"></a>\n\t{/if}\n</div>');
I$(144, function(t, e, n) { "use strict";
    return e.extend({ config: function() {
            var e = this.data;
            t.extend(e, {});
            e.content = n;
            this.supr() } }) }, 15, 128, 331);
I$(142, function(t, e, n, i) {
    var a = { parseJSON: function(t) { t = t.replace(/("|')\\?\/Date\((-?[0-9+]+)\)\\?\/\1/g, "new Date($2)");
            return new Function("return " + t)() }, isLogin: function(e) {
            var n = "/getUserName.html",
                i = { method: "get", norest: !0, type: "json", onload: function(t) {
                        if (!t || 461 != t.retcode) e(1);
                        else e(0) }._$bind(this), onerror: function() { e(0) }._$bind(this) };
            t._$request(n, i) }, afterLogin: function(t) { this.isLogin(function(e) {
                if (!e) n._$allocate({ logincallback: t })._$show();
                else t() }) }, scrollTo: function(t, e, n) {
            function i(t, e, n, i) {
                var a = (t /= i) * t * t;
                return e + n * a }

            function a(t, e, n, i) { t /= i / 2;
                if (t < 1) return n / 2 * t * t + e;
                t--;
                return -n / 2 * (t * (t - 2) - 1) + e }

            function s(t, e, n) {
                function i(t) { document.documentElement.scrollTop = t;
                    document.body.parentNode.scrollTop = t;
                    document.body.scrollTop = t }

                function s() {
                    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop }
                var r = s(),
                    l = t - r,
                    c = 0,
                    d = 20;
                n = "undefined" == typeof n ? 500 : n;
                var u = function() { c += d;
                    var t = a(c, r, l, n);
                    i(t);
                    if (c < n) o(u);
                    else if (e && "function" == typeof e) e() };
                u() }
            var o = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) { window.setTimeout(t, 1e3 / 60) } }();
            s(t, e, n) }, showErrorTip: function(t) {
            var e = t || "oh，服务器和考拉私奔了，请重试";
            var n = i._$allocate({ title: "提示", clazz: "m-window-3", message: '<div class="dialogStyle"><i class="alert">&#xe609;</i>' + e + "</div>", btntext: "确定" })._$show();
            setTimeout(function() { n._$hide() }, 3e3) }, showMsgTip: function(t, e) {
            var n = t || "";
            var a = i._$allocate({ title: "提示", clazz: "m-window-3", message: '<div class="m-dialog-result"><i class="succ">&#xe612;</i>' + n + "</div>", btntext: "确定", onok: function() { e() }, onclose: function() { e() } })._$show();
            setTimeout(function() { e();
                a._$hide() }, 3e3) }, getUserInfoFromCookie: function(t, n) {
            var i = "163" === t || e._$cookie("S_INFO") || !e._$cookie("S_OINFO") ? "P_INFO" : "P_OINFO";
            if (n) return i;
            var a = (e._$cookie(i) || "").replace(/\"|\'/g, ""),
                s = a.split("|");
            if (s.length > 1 && /^.+@.+$/.test(s[0])) {
                var o = s[s.length - 1];
                return { base: s[0], alias: /^1\d{10}@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(o) ? o : s[0] } } } };
    return a }, 14, 11, 7, 8);
I$(332, '{label}{#if label}：{/if}<span class="h-status" on-click="{this.stopPropagation($event)}">\n\t<span class="nselect-wrap {disabled?\'nselect-wrap-dis\':\'\'}" style="width:120px;">\n\t\t<div class="nselector">\n\t\t\t<div class="result-wrap" style="font-size:12px; padding-left:16px; padding-right:16px; height:28px; line-height:28px; border-color:rgb(221, 221, 221)" {#if !disabled} on-click="{this.data.active = !this.data.active}" {/if}>\n\t\t\t\t<div class="result ellipsis" style="width:100%; ">{current.value || \'全部\'}</div>\n\t\t\t\t<div r-class="{{\'cp-arrow\':true, \'cp-arrow-down\':!active,\'cp-arrow-up\':active}}" style="top:12.5px;"></div>\n\t\t\t</div>\n\t\t\t<div class="options-wrap" style="top:30px;">\n\t\t\t\t<div class="options" r-hide="{!active}">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t{#list kv as itm}\n\t\t\t\t\t\t<li on-click="{this.onselect(itm)}">\n\t\t\t\t\t\t\t<a hidefocus="true" href="javascript:;" class="option ellipsis" title="{itm.value}" value="{itm.key}" style="font-size:12px; padding-left:16px; padding-right:16px; height:28px; line-height:28px;display:block;">{itm.value}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t{/list}\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</span>\n</span>');
I$(145, function(t, e, n, i) {
    var a = t.extend({ name: "iselect", template: n, config: function(t) { e.extend(t, { active: !1, current: t.kv[0] || {}, value: t.kv[0].key || "" });
            this.supr(t) }, init: function() { i._$addEvent(document.body, "click", function() { this.data.active = !1;
                this.$update() }._$bind(this)) }, onselect: function(t) { this.data.current = t;
            this.data.active = !1;
            this.update() }, stopPropagation: function(t) { t.stopPropagation && t.stopPropagation();
            t.cancelBubble && t.cancelBubble() }, update: function() { this.data.value = this.data.current.key;
            this.$emit("update", this.data.value) } });
    return a }, 151, 15, 332, 3);
I$(333, function(t, e, n) {
    var i = t.extend({ config: function(t) { e.extend(t, { active: !0 });
            this.supr(t) }, onok: function() { this.data.active = !1;
            setTimeout(function() { this.destroy() }._$bind(this), 350) }, onclose: function() { this.data.active = !1;
            setTimeout(function() { this.destroy() }._$bind(this), 350) } });
    i.directive("animate", function(t) { n._$addClassName(t, "iDialogAnimate5");
        n._$addClassName(t, "iDialogAniCore");
        this.$watch("active", function(e) {
            if (!e) n._$addClassName(t, "iDialogAnimate5");
            else setTimeout(function() { n._$delClassName(t, "iDialogAnimate5") }, 100) }) });
    return i }, 151, 15, 4);
I$(334, '<div class="iDialog commTipsPop m-window-2" animate style="z-index:10001;width:{width}px; height:{height}px;margin-left:-{width/2}px; left:50%; margin-top:-{height/2}px; top:50%; ">\n\t<table class="iDialogWrapTable">\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td class="itd-mid-left"></td>\n\t\t\t\t<td class="itd-mid-center">\n\t\t\t\t\t<div class="iDialogContent">\n\t\t\t\t\t\t<div class="iDialogHead">\n\t\t\t\t\t\t\t<h1>提示</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class="iDialogClose" hidefocus="true" href="javascript:;" on-click="{this.onclose()}"></a>\n\t\t\t\t\t\t<div class="iDialogBody">\n\t\t\t\t\t\t\t<div class="iDialogMain" style="height:123px;">\n\t\t\t\t\t\t\t\t<div class="cancelOrderStyle">\n\t\t\t\t\t\t\t\t\t<div class="tipText">您确定要取消订单吗？取消订单后，不能恢复</div>\n\t\t\t\t\t\t\t\t\t<span class="cancelOrderBtnOk btn-red30" on-click="{this.onok()}">确认</span>\n\t\t\t\t\t\t\t\t\t<span class="reasonSelect" style="font-size:12px;">\n\t\t\t\t\t\t\t\t\t\t<iselect kv="{cancelOrderReasonList}" label="请选择取消订单的理由" name="cancelOrderReason" value="{cancelOrderReason}"></iselect>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td class="itd-mid-right"></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>\n<div class="iDialogLayout" style="z-index:10000;"></div>');
I$(146, function(t, e, n) {
    var i = t.extend({ template: n, config: function(t) { e.extend(t, { width: 520, height: 250, cancelOrderReasonList: [{ value: "请选择关闭理由", key: "其他原因" }, { value: "收货人信息有误", key: "收货人信息有误" }, { value: "商品数量或款式需调整", key: "商品数量或款式需调整" }, { value: "有更优惠的购买方案", key: "有更优惠的购买方案" }, { value: "商品缺货", key: "商品缺货" }, { value: "我不想买了", key: "我不想买了" }, { value: "其他原因", key: "其他原因" }], cancelOrderReason: "其他原因" });
            this.supr(t) }, onok: function() { this.data.onok && this.data.onok(this.data.cancelOrderReason) }, onclose: function() { this.supr() } });
    return i }, 333, 15, 334);
I$(342, '{#if list.length!=0}\n<h4 class="newRecomTitle clearFix">最近浏览<b>你最近一段时间浏览的商品</b>\n{#if Math.ceil(total/limit)>1}\n\t<div class="fright m-recommentPager">\n\t    <a href="javascript:void(0);" class="rec-forward" on-click={this.onNextPageClick()}>&gt;</a>\n\t    <span class="rec-page">{current}/{Math.ceil(total/limit)}</span>\n\t\t<a href="javascript:void(0);" class="rec-backward"  on-click={this.onPrevPageClick()}>&lt;</a>\n    </div>\n{/if}\n</h4>\n<div class="m-reclst clearFix">\n\t{#list list as item}\n\t\t{#if item_index<limit*current&&item_index>=limit*(current-1)}\n\t\t<div class="newRecomItemWrap" on-click={this.clickRecommendTj(item_index)}>\n\t\t\t{#if item.memberCount && item.memberCount>0}\n\t\t\t<a class="itemImg" target="_blank" href="/product/{item.goodsId}.html?{condition.query}{item.reason|encode}&istext=0">\n\t\t\t\t<img border="0" title="{item.memberCount}{item.memberUnitName || \'件\'}装 | {item.title}" alt="{item.memberCount}{item.memberUnitName || \'件\'}装 | {item.title}" src="{(item.imageUrlFor430||item.imageUrl)|noProtocol}" style="opacity: 1;">\n\t\t\t</a>\n\t\t\t<p class="itemTitle">\n\t\t\t\t<a href="/product/{item.goodsId}.html?{condition.query}{item.reason|encode}&istext=1" title="{item.memberCount}{item.memberUnitName || \'件\'}装 | {item.title}" target="_blank"><b>{item.memberCount}{item.memberUnitName || \'件\'}装</b>&nbsp;|&nbsp;{item.title}</a>\n\t\t\t</p>\n\t\t\t{#else}\n\t\t\t<a class="itemImg" target="_blank" href="/product/{item.goodsId}.html?{condition.query}{item.reason|encode}&istext=0">\n\t\t\t\t<img border="0" title="{item.title}" alt="{item.title}" src="{(item.imageUrlFor430||item.imageUrl)|noProtocol}" style="opacity: 1;">\n\t\t\t</a>\n\t\t\t<p class="itemTitle">\n\t\t\t\t<a href="/product/{item.goodsId}.html?{condition.query}{item.reason|encode}&istext=1" title="{item.title}" target="_blank">{item.title}</a>\n\t\t\t</p>\n\t\t\t{/if}\n\t\t\t<div class="itemInfo clearfix">\n\t\t\t\t<p class="price">¥{item.actualCurrentPrice}<span class="marprice">¥<del>{item.marketPrice}</del></span></p>\n\t\t\t\t<a href="/product/{item.goodsId}.html?{condition.query}{item.reason|encode}&istext=2#mainBtmWrap" target="_blank" class="comment">{item.commentCount} 人已评价</a>\n\t\t\t</div>\n\t\t</div>\n\t\t{/if}\n\t{/list}\n</div>\n{/if}');
I$(159, function(t, e, n, i, a, s, o) {
    var r = i.extend({ template: n, data: { list: [], condition: {}, shouldUpdate: !0 }, shouldUpdateList: function(t) {
            return this.data.shouldUpdate }, getListParam: function() {
            var t = this.data;
            return { id: this.getExtraParam(t).goods_ids, v: 1 } }, url: "/recommend/getRecommendGoods.html", xdrOption: { method: "POST", norest: !0, type: "json" }, onBodyScrollCheck: function(n) {
            var i = e._$offset(this.$root.parentNode, document.body);
            var a = e._$getPageBox();
            if (a.scrollTop + a.clientHeight > i.y && !this.data.recommendSent) { this.daPush();
                this.data.recommendSent = !0;
                var s = [];
                t._$forEach(this.data.list, function(t) { s.push('{"id":' + (t.goodsId || "") + ',"recType":"' + (t.recType || "") + '","reason":"' + (t.reason || "") + '","weight":"' + (t.weight || "") + '"}') });
                this.$request(this.printRecommendLog, { data: { userId: window.account || "", date: +new Date, position: this.data.condition.tongji.position || "我的优惠券：最近浏览", items: "[" + s.join(",") + "]", resource: "考拉产品组" }, onload: function() {}, onerror: function() {} }) } }, clickRecommendTj: function(t) {
            var e = this.data.list[t] || {};
            if (!event.target.getAttribute("hasClick")) { event.target.setAttribute("hasClick", 1);
                this.$request(this.printRecommendLog, { data: { userId: window.account || "", date: +new Date, position: this.data.condition.tongji.position || "我的优惠券：最近浏览", clickItem: '{"id":' + (e.goodsId || "") + ',"recType":"' + (e.recType || "") + '","reason":"' + (e.reason || "") + '","weight":"' + (e.weight || "") + '"}', resource: "考拉产品组" }, onload: function() {}, onerror: function() {} }) } }, __getList: function() {
            var e = this.data;
            var n = { data: this.getListParam(), onload: function(t) {
                    if (200 == t.retcode) {
                        var n = t,
                            i = n.list || [];
                        s.mergeList(i, e.list, e.key || "id");
                        e.total = n.totalCount;
                        e.list = i } }, onerror: function(t) { this.__setParentHide() } };
            if (this.xdrOption) s.extend(n, this.xdrOption);
            if (n.norest && !t._$isString(n.data)) n.data = t._$object2query(n.data);
            if ("GET" == n.method.toUpperCase()) n.query = n.data;
            this.$request(this.data.url || this.url, n) }, __setParentHide: function() { this.parentNode.style.display = "none" }, onPrevPageClick: function() {
            if (this.data.current - 1 > 0) { this.data.current -= 1;
                this.daPush() } }, onNextPageClick: function() {
            if (this.data.current + 1 <= Math.ceil(this.data.total / this.data.limit)) { this.data.current += 1;
                this.daPush() } }, daPush: function() { s.daEvent(this.data.condition.tongji.category || "推荐区域展示", this.data.condition.tongji.action || "我的优惠券", this.data.condition.tongji.lable || "最近浏览") }, __bindDaPush: function() {
            var t = this,
                e = t.data,
                n = e.dapushParam,
                i = e.limit || 5;
            if (n && n.page) {
                var a = { param: function() {
                        for (var t = 0, n = [], a = Math.min(e.list.length, i); t < a; t++) n.push(e.list[t].goodsId);
                        return n } };
                s.extend(a, n);
                o._$allocate(a) } }, config: function(t) {
            var e = a._$cookie("NTES_KAOLA_RV");
            var n = e.split("|"),
                i = [];
            for (var o = 0, r = n.length; o < r; o++) {
                var l = n[o].split("_");
                i.push(l[0]) }
            this.data.condition.goods_ids = i.join(",");
            this.data.condition.version = 1;
            this.data.total = 2 * i.length;
            s.extend(t, { total: 1, current: 1, limit: t.condition.limit, list: [] });
            if (!this.data.condition.tongji) this.data.condition.tongji = { category: "", action: "", lable: "", position: "", from: "" };
            this.__bindDaPush();
            this.$watch(this.watchedAttr, function() {
                if (this.shouldUpdateList()) { this.data.shouldUpdate = !1;
                    this.__getList() } }) } });
    return r }, 2, 4, 342, 289, 11, 15, 290);
I$(201, function(t, e, n, i, a, s) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "4.0") I$(397, function() {
        var t = Array.prototype;
        var e = function(t) {
            return "[object function]" == i.toString.call(t).toLowerCase() };
        Array.isArray = function(t) {
            return "[object array]" === i.toString.call(t).toLowerCase() };
        t.indexOf = function(t, e) {
            var n = parseInt(e) || 0;
            if (n < 0) n = Math.max(0, this.length + n);
            for (var i = this.length; n < i; n++)
                if (n in this && t === this[n]) return n;
            return -1 };
        t.lastIndexOf = function(t, e) {
            var n = this.length - 1;
            e = parseInt(e);
            if (!isNaN(e)) { n = e;
                if (n < 0) n = this.length + n }
            for (; n >= 0; n--)
                if (n in this && t === this[n]) return n;
            return -1 };
        t.every = function(t, n) {
            if (!e(t)) throw new Error(t + " is not a function");
            for (var i = 0, a = this.length; i < a; i++)
                if (i in this && !t.call(n, this[i], i, this)) return !1;
            return !0 };
        t.some = function(t, n) {
            if (!e(t)) throw new Error(t + " is not a function");
            for (var i = 0, a = this.length; i < a; i++)
                if (i in this && t.call(n, this[i], i, this)) return !0;
            return !1 };
        t.forEach = function(t, n) {
            if (!e(t)) throw new Error(t + " is not a function");
            for (var i = 0, a = this.length; i < a; i++)
                if (i in this) t.call(n, this[i], i, this) };
        t.map = function(t, n) {
            if (!e(t)) throw new Error(t + " is not a function");
            var i = new Array(this.length);
            for (var a = 0, s = this.length; a < s; a++)
                if (a in this) i[a] = t.call(n, this[a], a, this);
            return i };
        t.filter = function(t, n) {
            if (!e(t)) throw new Error(t + " is not a function");
            var i = [];
            for (var a = 0, s = this.length; a < s; a++)
                if (a in this && t.call(n, this[a], a, this)) i.push(this[a]);
            return i };
        t.reduce = function(t, n) {
            if (!e(t)) throw new Error(t + " is not a function");
            var i = arguments.length > 1;
            for (var a = 0, s = this.length; a < s; a++)
                if (a in this)
                    if (i) n = t(n, this[a], a, this);
                    else { i = !0;
                        n = this[a] }
            else;
            if (!i) throw new Error("Reduce of empty array with no initial value");
            return n
        };
        t.reduceRight = function(t, n) {
            if (!e(t)) throw new Error(t + " is not a function");
            var i = arguments.length > 1;
            for (var a = this.length - 1; a >= 0; a--)
                if (a in this)
                    if (i) n = t(n, this[a], a, this);
                    else { i = !0;
                        n = this[a] }
            else;
            if (!i) throw new Error("Reduce of empty array with no initial value");
            return n }
    });
    return t
}, 398, 78);
I$(150, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var f = {};
    f.icons = { alert: "&#xe609;", forbid: "&#xe606;", success: "&#xe612;", fail: "&#xe604;" };
    f.clazz = { green: "succ", red: "fail" };
    f.createIconNode = function(t) {
        return "noIcon" == t ? "" : "<i class='" + this.clazz["success" == t ? "green" : "red"] + "' r-html={'" + this.icons[t] + "'}></i>" };
    f.iconDefault = function(t) {
        return t || "success" };
    f.errorDefault = function(t) {
        return t || "网络或系统错误" };
    f.okBtnDefault = function(t) {
        return t || "确认" };
    f.ccBtnDefault = function(t) {
        return t || "取消" };
    f.confirmDialog = function(t, e, n, i, a) { new r({ data: { width: 520, title: "提示", msg: "<p class='m-dialog-result'>" + f.createIconNode(f.iconDefault(n)) + t + "</p>", txtOk: f.okBtnDefault(e), hideCCBtn: !0, onok: function() {!!i && i() }, onclose: function() {!!a && a() } } }).$inject(document.body) };
    f.errorDialog = function(t, e, n) { f.confirmDialog(f.errorDefault(t), e, "fail", n, n) };
    f.autoCloseDialog = function(t, e, n) { new r({ data: { width: 520, title: "提示", hideOkBtn: !0, hideCCBtn: !0, msg: "<p class='m-dialog-result'>" + f.createIconNode(f.iconDefault(e)) + t + "</p><p style='display:none;' countdown='3'></p>", onclose: function() {!!n && n() }._$bind(this) } }).$inject(document.body) };
    f.promptDialog = function(t) {
        var t = t || {};
        new r({ data: { width: 520, title: "提示", msg: "<p class='m-dialog-result'>" + f.createIconNode(f.iconDefault(t.icon)) + t.text + "</p>", txtOk: f.okBtnDefault(t.okBtnText), txtCC: f.ccBtnDefault(t.ccBtnText), onok: function() {!!t.onok && t.onok() }, onclose: function() {!!t.onclose && t.onclose() } } }).$inject(document.body) };
    f.twoLineDialog = function(t) {
        var t = t || {};
        new r({ data: { width: 520, title: "提示", msg: "<div class='m-dialog-result f-tal' style='margin-left:" + (t.marginLeft || 0) + "px;'>" + f.createIconNode(f.iconDefault(t.icon)) + t.text1 + "<p class='line2'>" + t.text2 + "</p></div>", txtOk: f.okBtnDefault(t.okBtnText), txtCC: f.ccBtnDefault(t.ccBtnText), hideOkBtn: !!t.hideOkBtn, hideCCBtn: !!t.hideCCBtn, onok: function() {!!t.onok && t.onok() }, onclose: function() {!!t.onclose && t.onclose() } } }).$inject(document.body) };
    return f }, 1, 2, 23, 3, 4, 15, 26, 187);
I$(518, '<div class="iDialog commTipsPop {clazz} m-dialogVerify m-photoVerify" animate style="z-index:109;width:{width}px; height:{height}px;margin-left:-{width/2}px; left:50%; margin-top:-{height/2}px; top:50%; ">\n\t<table class="iDialogWrapTable">\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td class="itd-mid-left"></td>\n\t\t\t\t<td class="itd-mid-center">\n\t\t\t\t\t<div class="iDialogContent">\n\t\t\t\t\t\t<div class="iDialogHead">\n\t\t\t\t\t\t\t<h1>实名认证</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class="iDialogClose" hidefocus="true" href="javascript:;" on-click="{this.onclose()}"></a>\n\t\t\t\t\t\t<div class="iDialogBody">\n\t\t\t\t\t\t\t<div class="iDialogMain" style="padding-bottom:30px;">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t{#if status==3}\n\t\t\t\t\t\t\t\t\t<p class="notice-2"><b class="iconfont" r-html={"&#xe609;"}></b>应海关要求，请上传身份证照片，补充实名认证信息</p>\n\t\t\t\t\t\t\t\t\t{#elseif status==4}\n\t\t\t\t\t\t\t\t\t<p class="notice-3">根据海关要求，购买跨境商品需要对订购人进行实名认证</p>\n\t\t\t\t\t\t\t\t\t{#else}\n\t\t\t\t\t\t\t\t\t<p class="notice-1">网易考拉海购承诺所传身份证明只用于办理跨境商品的清关手续，不作他途使用，其他任何人均无法查看。</p>\n\t\t\t\t\t\t\t\t\t{/if}\n\t\t\t\t\t\t\t\t\t<div class="m_myaddress m_myaddress_photo">\n\t\t\t\t\t\t\t\t\t\t{#if status==4}\n\t\t\t\t\t\t\t\t\t\t<ul class="input-text">\n\t\t\t\t\t\t\t\t\t\t\t<li class="input-name"><b>*</b>收货人姓名<input type="text" r-placeholder="请确保填写的是真实姓名" on-focus={this.onInputFocus(\'name\')} r-model=\'{authData.name}\'></li>\n\t\t\t\t\t\t\t\t\t\t\t<li class="input-err" r-hide="{!authError.name}"><i r-html={"&#xe606;"}></i>{authError.name}</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class="input-idNum">\n\t\t\t\t\t\t\t\t\t\t\t\t<b>*</b>身份证号码<input type="text" r-placeholder="请填写姓名对应的身份证号码" on-focus={this.onInputFocus(\'idNum\')} r-model={authData.idNum}>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="m-idcardtip m-idcardtip-photo" on-mouseenter={showidcardtip=true} on-mouseleave={showidcardtip=false}>\n\t\t\t\t\t\t\t\t                   <i class="iconfont w-icon-ask" r-html={"&#xe613;"}></i>\n\t\t\t\t\t\t\t\t                   <div class="m-notice m-notice-idcard" style="display:none;" r-hide={!showidcardtip}>\n\t\t\t\t\t\t\t\t\t                   <p class="para1">根据海关要求，购买部分跨境商品需对收货人进行实名认证，并提供身份证影印件，错误信息可能导致无法正常清关。</p>\n\t\t\t\t\t\t\t\t\t                   <p class="para2">你的身份证信息将加密保管，考拉保证信息安全，绝不对外泄露！</p>\n\t\t\t\t\t\t\t\t\t                   <p class="para3">有任何身份认证的问题请咨询我们<br/>400-088-8188<br/>09:00-24:00</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="arrow">\n\t\t\t\t\t\t\t\t\t\t                    <span class="arr"></span>\n\t\t\t\t\t\t\t\t\t\t                    <span class="arr1"></span>\n\t\t\t\t\t\t\t\t\t                   </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class="input-err" r-hide="{!authError.idNum}"><i r-html={"&#xe606;"}></i>{authError.idNum}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t{#else}\n\t\t\t\t\t\t\t\t\t\t<p class="name">实名者：<b>{authData.name||\'\'}</b></p>\n\t\t\t\t\t\t\t\t\t\t<p class="idNum">身份证：<b>{authData.idNum||\'\'}</b></p>\n\t\t\t\t\t\t\t\t\t\t{/if}\n\t\t\t\t\t\t\t\t\t\t<section {#if status==4}class="photoArea"{/if}>\n\t\t\t\t\t\t\t\t\t\t<div ref="photoWrap" class="photoWrap clearfix">\n\t\t\t\t\t\t\t\t\t\t\t{#if status==4}<p class=\'tit\'><b>*</b>上传照片</p>{/if}\n\t\t\t\t\t\t\t\t\t\t\t<label class="photo front uploadLabel" r-hide="{!!authData.frontUrl}" on-click={this.onLabelClick(\'front\')}>+ 添加正面</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="display frontDisplay" r-hide="{!authData.frontUrl}">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="{authData.frontUrl|noProtocol}" width="100%" on-load={this.photoLoad($event)}>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="photoOpe" r-hide={status==1}>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="uploadLabel front" on-click={this.onLabelClick(\'front\')}>重新上传</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label on-click="{authData.frontUrl=\'\'}">删除</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<label class="photo back uploadLabel" r-hide="{!!authData.backUrl}" on-click={this.onLabelClick(\'back\')}>+ 添加反面</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="display backDisplay" r-hide="{!authData.backUrl}">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="{authData.backUrl|noProtocol}" width="100%" on-load={this.photoLoad($event)}>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="photoOpe" r-hide={status==1}>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="uploadLabel" on-click={this.onLabelClick(\'back\')}>重新上传</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label on-click="{authData.backUrl=\'\'}">删除</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<ul class="err f-cb">\n\t\t\t\t\t\t\t\t\t\t\t<li class="err-front">\n\t\t\t\t\t\t\t\t\t\t\t\t<p r-hide="{!authError.frontUrl}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i r-html={"&#xe606;"}></i>{authError.frontUrl}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class="err-back">\n\t\t\t\t\t\t\t\t\t\t\t\t<p r-hide="{!authError.backUrl}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i r-html={"&#xe606;"}></i>{authError.backUrl}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t{#if status==1}\n\t\t\t\t\t\t\t\t\t\t<p class="hint-hidephoto">为保护您的个人隐私，历史已上传的照片已做加密处理，无法再次查看</p>\n\t\t\t\t\t\t\t\t\t\t{#else}\n\t\t\t\t\t\t\t\t\t\t<p class="weak-hint" r-hide={weakHint==\'\'}><b class="iconfont" r-html={"&#xe614;"}></b>{weakHint}</p>\n\t\t\t\t\t\t\t\t\t\t<ul class="example f-cb" r-hide={weakHint!=\'\'}>\n\t\t\t\t\t\t\t\t\t\t\t<li class="example-front"><p>示例</p><div class="img"></div></li>\n\t\t\t\t\t\t\t\t\t\t\t<li class="example-back"><p>示例</p><div class="img"></div></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<p class="hint hint1">注：1.需上传清晰的身份证正面、反面共2张照片</p>\n\t\t\t\t\t\t\t\t\t\t<p class="hint hint2">2.照片不超过5MB，支持格式jpg，jpeg，png</p>\n\t\t\t\t\t\t\t\t\t\t{/if}\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="iDialogFoot">{#if status==1}<a href="javascript:;" rel="1" class="iDialogBtn focusBtn" on-click="{this.onmodify()}"><span>修改</span></a>{#else}<a href="javascript:;" rel="1" class="iDialogBtn focusBtn" on-click="{this.onok()}"><span>认证</span></a><a href="javascript:;" rel="0" class="iDialogBtn" on-click="{this.onclose()}"><span>取消</span></a>{/if}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td class="itd-mid-right"></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>\n<div class="iDialogLayout" style="z-index:108;"></div>');
I$(338, function(t, e, n, i, a, s, o, r, l) {
    var c = t.extend({
        template: r,
        config: function(t) { this.supr(t);
            a.extend(t, { width: 520, height: 400, authData: { name: "", idNum: "", frontUrl: "", backUrl: "" }, authError: { name: "", idNum: "", frontUrl: "", backUrl: "" }, weakHint: "", frontImgExample: "//haitao.nos.netease.com/3e6d92a5615a4c22a7b8913fdb70c85f.jpg?imageView&thumbnail=132x0&quality=95&crop=0_0_132_88", backImgExample: "//haitao.nos.netease.com/3e6d92a5615a4c22a7b8913fdb70c85f.jpg?imageView&thumbnail=132x0&quality=95&crop=0_90_132_88", imgOpt: "imageView&thumbnail=272x0&quality=95", status: 1 });
            this.$watch("status", function(e) {
                switch (e || 1) {
                    case 1:
                        t.height = 414;
                        t.authData.frontUrl = t.frontImgExample;
                        t.authData.backUrl = t.backImgExample;
                        break;
                    case 2:
                        t.height = 496;
                        break;
                    case 3:
                        t.height = 481;
                        break;
                    case 4:
                        t.height = 507 } });
            this.$watch(["authData.name", "authData.idNum", "authData.frontPhoto", "authData.backPhoto"], function() { t.weakHint = "" }) },
        init: function() {
            this.initUpload();
            if (4 == this.data.status) a.daEvent("支付后实名认证", "收货人实名认证浮层", "出现")
        },
        onInputFocus: function(t) {
            var e = "name" == t;
            var n = this.data;
            n.authError[e ? "name" : "idNum"] = "";
            if (4 == n.status) a.daEvent("支付后实名认证", "收货人实名认证浮层", e ? "姓名" : "身份证") },
        onLabelClick: function(t) {
            var e = "front" == t;
            var n = this.data.status;
            if (2 == n || 3 == n) a.daEvent("个人中心实名认证", "列表非空", e ? "添加正面" : "添加反面");
            else if (4 == n) a.daEvent("支付后实名认证", "收货人实名认证浮层", e ? "添加正面" : "添加反面") },
        photoLoad: function(t) {
            var e = t.target,
                n = e.offsetHeight;
            e.style.marginTop = -n / 2 + "px" },
        initUpload: function() {
            var t = this;
            i._$forEach(e._$getByClassName(this.$refs.photoWrap, "uploadLabel"), function(n) { s._$bind(n, { parent: n.parentNode, accept: "image/jpg,image/jpeg,image/png", onchange: function(n) {
                        var i = e._$hasClassName(n.target, "front");
                        var a = n.form;
                        a.action = "/uploadImageForNej.html?module=authOcr";
                        a.method = "POST";
                        o._$upload(a, { cookie: !0, name: "fileData", accept: "image/jpg,image/jpeg,image/png", onload: t.uploadSucCb._$bind(t, i, a), onerror: t.uploadFailCb._$bind(t, i, a) }) } }) }) },
        uploadSucCb: function(t, e, n) {
            var i = n || { imageUrl: [""] },
                a;
            e.reset();
            if (200 == i.retcode) { a = i.imageUrl[0] || "";
                this.data.authData[t ? "frontUrl" : "backUrl"] = a + (a.indexOf("?") > 0 ? "&" : "?") + this.data.imgOpt;
                this.showError(t ? "frontUrl" : "backUrl") } else if (403 == i.retcode) this.showError("frontUrl", "图片格式不正确");
            else if (404 == i.retcode) this.showError("frontUrl", "图片大小不能超过5MB");
            else if (461 == i.retcode) l.afterLogin(function() { location.reload() }._$bind(this));
            else this.showError("frontUrl", i.retdesc || "照片上传失败") },
        uploadFailCb: function(t, e) { e.reset();
            this.showError("frontUrl", "照片上传失败") },
        onok: function() {
            var t = this.data,
                e = 0,
                n = t.status,
                s = { authId: t.authId || "", realName: (t.authData.name || "").trim(), idCardNum: (t.authData.idNum || "").trim(), idCardFrontUrl: (t.authData.frontUrl || "").trim().replace(new RegExp("[?&]{1}" + this.data.imgOpt, "g"), ""), idCardOppositeUrl: (t.authData.backUrl || "").trim().replace(new RegExp("[?&]{1}" + this.data.imgOpt, "g"), ""), gorderId: t.gorderId || "", authType: 0, forceSubmitPhoto: !!t.weakHint },
                o = /(^[0-9A-Za-z*]{15}$)|(^[0-9A-Za-z*]{18}$)/;
            if (2 == n || 3 == n) a.daEvent("个人中心实名认证", "列表非空", "提交认证");
            else if (4 == n) a.daEvent("支付后实名认证", "收货人实名认证浮层", "提交认证");
            i._$forEach(["name", "idNum", "frontUrl", "backUrl"], function(t) { this.showError(t) }._$bind(this));
            if (!s.idCardFrontUrl || s.idCardFrontUrl == t.frontImgExample) { this.showError("frontUrl", "请上传正面照片");
                e++ }
            if (!s.idCardOppositeUrl || s.idCardOppositeUrl == t.backImgExample) { this.showError("backUrl", "请上传反面照片");
                e++ }
            if (4 == n) { s.authType = 2;
                if ("" == s.realName) { this.showError("name", "请输入您的真实姓名");
                    e++ }
                if ("" == s.idCardNum) { this.showError("idNum", "请输入身份证号码");
                    e++ } else if (!o.test(s.idCardNum)) { this.showError("idNum", "身份证号码有误，请重试");
                    e++ } }
            if (!(e > 0)) l.afterLogin(function() { this.authreq(s) }._$bind(this)) },
        showError: function(t, e) { this.data.authError[t] = e || "";
            this.$update() },
        requesting: !1,
        authreq: function(t) {
            if (!this.requesting) { this.requesting = !0;
                var e = "/personal/authenticate/doAuth.html",
                    n = { method: "post", data: t, norest: !0, onload: this.onauthreqload._$bind(this), onerror: function() { this.requesting = !1 }._$bind(this) };
                this.$request(e, n) } },
        onauthreqload: function(t) {
            var e = t || {},
                n = e.retcode || 0,
                i = e.retdesc || "系统错误",
                s = this.data,
                o = s.status;
            if (200 == n)
                if (4 == o) a.daEvent("支付后实名认证", "收货人实名认证浮层", "认证通过");
                else a.daEvent("个人中心实名认证", "列表非空", "认证通过");
            else if (4 == o) a.daEvent("支付后实名认证", "收货人实名认证浮层", "错误", { errorType: i });
            else a.daEvent("个人中心实名认证", "列表非空", "错误", { errorType: i });
            if (200 == n) { this.onclose();
                l.showMsgTip("恭喜您已提交成功", function() { location.reload() }._$bind(this));!!window._dapush && window._dapush("_trackEvent", "郑州保税仓实名认证", "上传成功弹窗弹出", "弹窗出现", { userAccount: window.account, userId: window.account }) } else if (n == -202 || n == -203) this.showError("name", i);
            else if (n == -204 || n == -205 || n == -301 || n == -305 || n == -306) this.showError("idNum", i);
            else if (n == -302 || n == -303 || n == -304) s.weakHint = i;
            else this.showError("frontUrl", i);
            this.requesting = !1 },
        onclose: function() { this.supr() },
        onmodify: function() { this.data.status = 2 }
    });
    var d = { "r-placeholder": function(t, i) {
            var a = i;
            if ("expression" == i.type) a = this.$get(i);
            setTimeout(function() {
                if ("" == t.value.trim()) { t.value = a;
                    e._$addClassName(t, "c_999") } });
            n._$addEvent(t, "focus", function() {
                if (t.value.trim() == a) { t.value = "";
                    e._$delClassName(t, "c_999") } });
            n._$addEvent(t, "blur", function() {
                if ("" == t.value.trim()) { t.value = a;
                    e._$addClassName(t, "c_999") } }) } };
    c.directive(d);
    return c
}, 333, 4, 3, 2, 15, 516, 14, 518, 142);
I$(343, '{#if !error}\n    {#if !empty}\n    <div class="resultwrap">\n    {#if loading}\n      <div class="m-loading">\n        <img src="{__cdnBaseUrl}images/loading.gif">\n      </div>\n    {#else}\n      {#if list.length > 0}\n      <dl class="result">\n        {#list list as line}\n        <dd class="g-brand  {(total<=limit && line_index+1===list.length)?\'g-brand-onepage-last\':\'\'}">\n            <div class="brand">\n                <a href="/brand/{line.brand.id}.html" target="_blank">\n                <img class="logo" src="{line.brand.logoUrl|noProtocol}"/></a><br/>\n                <a href="#" class="action {line._notfollowed?\'action-notfollowed\':\'action-followed\'}" on-click={this.__brandFollow(line, $event)}>{#if line._notfollowed}<i class="iconfont" r-html={"&#xe631;"}></i>关注{#else}<span class="def">已关注</span><span class="hov">取消</span>{/if}</a>\n            </div>\n            <div class="cont {(!line.goodsList || line.goodsList.length===0)?\'nogoods\':\'\'}">\n                <div class="bar">\n                    <a class="more" href="/brand/{line.brand.id}.html" target="_blank">查看全部<i class="iconfont" r-html={"&#xe629;"}></i></a>\n                    <a class="name" href="/brand/{line.brand.id}.html" target="_blank">{line.brand.name}</a>\n                </div>\n                <!-- 商品区块 -->\n                {#if line.goodsList && line.goodsList.length>0}\n                <ul class="itemlist clearfix">\n                  {#list line.goodsList as sku}\n                  {#if sku}\n                    <li class="good" >\n                      <div class="img">\n                        <a target="_blank" href="/product/{sku.goodsId}.html?from=page{current}&position={sku_index}">\n                        <img class="img-lazyload"\n                         title="{sku.title}"\n                         src ="/images/blank.gif"\n                         data-src="{sku.imageUrl|imgThumbnailUrl:192}" >\n                        {#if !sku.actualStorageStatus && sku.onlineStatus}\n                          <span class="soldout"></span>\n                        {#elseif sku.onlineStatus}\n                          <div class="activityflag">\n                            {#if !!sku.danpinPromotionTitle }\n                            <span class="danpin">{sku.danpinPromotionTitle.split(\'-\')[0]}</span>\n                            {#elseif !!sku.isNewGoods}\n                            <span class="new">新品</span>\n                            {/if}\n                            {#if !!sku.zhengdanPromotionTitle }\n                            <span class="zhengdan large">{sku.zhengdanPromotionTitle.split(\'-\')[0]}</span>\n                            {/if}\n                          </div>\n                        {/if}\n                        </a>\n                      </div>\n                      <div class="desc">\n                        <p class="title">\n                        {#if !!sku.memberCount && sku.memberCount > 0}\n                          <a href="/product/{sku.goodsId}.html?from=page{current}&position={sku_index}&istext=1" target="_blank" title="{sku.title}"><i>{sku.memberCount}件装</i> | {sku.title}</a>\n                        {#else}\n                          <a href="/product/{sku.goodsId}.html?from=page{current}&position={sku_index}&istext=1" target="_blank" title="{sku.title}">{sku.title}</a>\n                        {/if}\n                        </p>\n                        {#if sku.onlineStatus!==0}\n                            <p class="price">\n                            {#if !!sku.memberCount && sku.memberCount > 0 && sku.isShowDiscountCost!==false}\n                              <span class="cur"><i>¥</i>{sku.actualCurrentPrice}</span><b class="combinedLabel">折合单件¥<i>{sku.memberPrice}</i></b>\n                            {#else}\n                              <span class="cur"><i>¥</i>{sku.actualCurrentPrice}</span>{#if sku.actualCurrentPrice>0 && sku.actualCurrentPrice/sku.marketPrice<=0.99}<b class="combinedLabel">{(sku.actualCurrentPrice/sku.marketPrice)|toDiscount}折</b>\n                              {/if}\n                            {/if}\n                            </p>\n                            <p class="clearfix">\n                              <del>¥{sku.marketPrice}</del>\n                              <a target="_blank" href="/product/{sku.goodsId}.html?from=comment#mainBtmWrap" class="comments">{sku.commentCount}人已评价</a>\n                            </p>\n                        {#else}\n                            <p class="not-online">商品已下架</p>\n                        {/if}\n                      </div>\n                    </li>\n                  {/if}\n                  {/list}\n                </ul>\n                {#else}\n                    暂无在售商品\n                {/if}\n            </div>\n        </dd>\n        {/list}\n        <div id="pageNavWrap">\n            <div id="pageNav" class="m-centerpager clearfix center">\n                <pager total={Math.ceil(total/limit)} current={current} on-nav={this.pagerNav($event)}></pager>\n            </div>\n        </div>\n      </dl>\n      {#else}\n      <div class="tbl-nodata clearfix">\n          <span class="img"></span>\n          <span class="info">当前无关注的品牌， &thinsp;<a href="/" class="color-red">去逛逛&gt;</a></span>\n      </div>\n      {/if}\n    {/if}\n    </div>\n    {#else}\n    <div class="tbl-nodata clearfix">\n        <span class="img"></span>\n        <span class="info">当前无关注的品牌，&thinsp;<a href="/" class="color-red">去逛逛&gt;</a></span>\n    </div>\n    {/if}\n{#else}\n<div class="tbl-loaderror clearfix">\n    <span class="img"></span>\n    <span class="info">获取关注品牌失败，&thinsp;<a href="" class="color-red" onclick="location.reload();return false;">点击刷新页面&gt;</a></span>\n</div>\n{/if}\n');
I$(519, ".#<uispace> .succ{width:auto}\n");
I$(520, '<div class="iDialogBody">\n    <div class="iDialogMain">\n        <div class="m-brandwin-bdy m-dlgcont m-dlgcont-c">\n            <p class="j-cont title">确定取消关注该品牌？</p>\n        </div>\n    </div>\n</div>\n<div class="iDialogFoot">\n    <a href="javascript:;" rel="1" class="iDialogBtn focusBtn j-ok"><span>确定</span></a>\n    <a href="javascript:;" rel="0" class="iDialogBtn j-cc"><span>取消</span></a>\n</div>\n');
I$(344, function(t, e, n, i, a, s, o, r, l, c, d, u, h) {
    var f = e._$pushCSSText(i),
        _ = s._$addNodeTemplate(a);
    l._$$BrandWindow = NEJ.C();
    h = l._$$BrandWindow._$extend(t);
    h.__reset = function(t) { t.title = "提示";
        this.__super(t);
        var e = t.type || "confirm",
            n = t.msg || "",
            i = t.btns || ["确定", "取消"];
        this.__diatype = e;
        switch (e) {
            case "ask":
                r(this._okbtn)._$style("display", "inline-block")._$children("span", !0)._$text(i[0]);
                r(this._ccbtn)._$style("display", "inline-block")._$children("span", !0)._$text(i[1]);
                r(this._conts)._$html(n);
                break;
            case "confirm":
                r(this._okbtn)._$style("display", "inline-block")._$children("span", !0)._$text(i[0]);
                r(this._ccbtn)._$style("display", "none")._$children("span", !0)._$text(i[1]);
                r(this._conts)._$html(n) }
        r(this._okbtn)._$on("click", this.__onOK._$bind(this));
        r(this._ccbtn)._$on("click", this.__onCC._$bind(this)) };
    h.__destroy = function(t) { this.__super(t);
        r(this._okbtn)._$off("click");
        r(this._ccbtn)._$off("click");
        this._conts = null;
        this._okbtn = null;
        this._ccbtn = null };
    h.__initXGui = function() { this.__seed_css = f;
        this.__seed_html = _ };
    h.__initNode = function() { this.__super();
        var t = e._$getByClassName(this.__body, "j-flag");
        this._conts = e._$getByClassName(this.__body, "j-cont")[0];
        this._okbtn = e._$getByClassName(this.__body, "j-ok")[0];
        this._ccbtn = e._$getByClassName(this.__body, "j-cc")[0] };
    h.__onOK = function(t) { n._$stop(t);
        this._$dispatchEvent("onok");
        this._$hide() };
    h.__onCC = function(t) { n._$stop(t);
        this._$dispatchEvent("oncancel");
        this._$hide() };
    return l._$$BrandWindow }, 229, 4, 3, 519, 520, 233, 238, 25);
I$(160, function(t, e, n, i, a, s) {
    var o = i.extend({ template: e, config: function(t) { s.extend(t, { total: 0, current: 1, limit: 10, list: [] });
            t.error = !1;
            t.__cdnBaseUrl = window.__cdnBaseUrl || "/";
            this.$watch(this.watchedAttr, function() {
                if (this.shouldUpdateList()) this.__getList() });
            this.$watch("total", this.emitLoad._$bind(this)) }, init: function() { this.supr() }, emitLoad: function() { this.$emit("load", { total: this.data.total || 0, list: this.data.list || [] }) }, getListParam: function() {
            var t = this.data;
            return s.extend({ pageSize: t.limit, pageNo: t.current }, this.getExtraParam(t)) }, url: "/personal/brand/list.html", xdrOption: { method: "POST", norest: !0, type: "json" }, __getList: function() {
            var e = this.data;
            var n = { progress: !0, data: this.getListParam(), onload: function(t) {
                    if (200 == t.retcode) {
                        var n = t.result,
                            i = n.result || [];
                        s.mergeList(i, e.list, e.key || "id");
                        e.total = n.totalCount;
                        e.list = i;
                        this.emitLoad() } else { e.error = !0;
                        this.emitLoad() } }, onerror: function(t) { e.error = !0;
                    this.emitLoad() } };
            if (this.xdrOption) s.extend(n, this.xdrOption);
            if (n.norest && !t._$isString(n.data)) n.data = t._$object2query(n.data);
            if ("GET" == n.method.toUpperCase()) n.query = n.data;
            this.$request(this.url, n) }, __brandFollowAjax: function(t, e, n) {
            var i = "/personal/brand/follow.html";
            a(i, { data: { id: t, status: e }, method: "POST", type: "json", norest: !0, onload: function(t) {
                    if (200 == t.retcode || 491 == t.retcode) n(!1, t);
                    else n(!0, t) }, onerror: function(t) { n(!0, t) } }) }, __brandFollow: function(t, e) { e.preventDefault();
            var i = t._notfollowed ? 1 : 0;
            if (0 === i) {
                var a = n._$allocate({ clazz: "m-brandwin", width: 520, type: "ask", msg: "确定取消关注该品牌？", onok: function(e) { this.__brandFollowAjax(t.brand.id, i, function(e, n) {
                            if (e) this.__showConfrimMsg(i);
                            else { t._notfollowed = !t._notfollowed;
                                this.$update() } }._$bind(this)) }._$bind(this), oncancel: function(t) {}._$bind(this) });
                a._$show() } else this.__brandFollowAjax(t.brand.id, i, function(e, n) {
                if (e) this.__showConfrimMsg(i);
                else { t._notfollowed = !t._notfollowed;
                    this.$update() } }._$bind(this)) }, __showConfrimMsg: function(t) {
            var e = 1 === t ? "关注失败，请重新操作。" : "取消关注失败，请重新操作。";
            var i = n._$allocate({ clazz: "m-brandwin", width: 520, type: "confirm", btns: ["我知道了"], msg: e });
            i._$show() }, __filterHiddenGoods: function(t) {
            if (!t || !t.length) return [];
            var e = [];
            for (var n = 0; n < t.length; n++)
                if (t[n] && t[n].isShow) e.push(t[n]);
            return e }, _getList: function(t) {
            return this.data.list.filter(function(e) {
                return !!e[t] }) }, pagerNav: function(t) { this.$emit("nav", t) } });
    o.filter("toDiscount", function(t) {
        if ("number" == typeof t) {
            var e = Math.ceil(100 * t) / 10 + "";
            if (1 === e.length) e += ".0";
            return e } else return t });
    return o }, 2, 343, 344, 268, 6, 15);
I$(528, function(t, e, n, i, a, s, o, r, l) {
    var c = NEJ.P,
        e = c("nej.ui"),
        l, d;
    a._$$AWWindow = t._$klass();
    l = a._$$AWWindow._$extend(e._$$WindowWrapper);
    d = a._$$AWWindow._$supro;
    l.__reset = function(t) { t.parent = t.parent || document.body;
        t.clazz = (t.clazz || "") + " m-window";
        t.mask = "m-mask";
        this.__supReset(t);
        var e = this.__layer._$hide;
        this.__layer._$hide = function() { console.log("hide");
            var t = i._$$AnimEaseOut._$allocate({ from: { offset: 400 }, to: { offset: 0 }, duration: 200, onupdate: function(t) { this.__body.parentNode.parentNode.style.width = t.offset + "px";
                    this.__layer.__doPositionAlign() }._$bind(this), onstop: function() { t._$recycle();
                    e.apply(this.__layer) }._$bind(this) });
            t._$play() }._$bind(this);
        this.__layer._$setTitle(t.title, !0);
        this.__width = t.width };
    l.__doAnimation = function() {
        var t = n._$$AnimEaseIn._$allocate({ from: { offset: 0 }, to: { offset: this.__width }, duration: 200, onupdate: function(t) { this.__body.parentNode.parentNode.style.width = t.offset + "px";
                this.__layer.__doPositionAlign() }._$bind(this), onstop: function() { this._$recycle() } });
        t._$play() };
    l._$hide = function() { this.__super() };
    l.__doHide = function() {
        var t = this.__super.bind(this);
        var e = i._$$AnimEaseOut._$allocate({ from: { offset: 400 }, to: { offset: 0 }, duration: 1e3, onupdate: function(t) { this.__body.parentNode.parentNode.style.width = t.offset + "px";
                this.__layer.__doPositionAlign() }, onstop: function() { this._$recycle();
                t() } });
        e._$play() };
    l._$show = function() { d._$show.apply(this, arguments);
        this.__body.focus();
        this.__doAnimation();
        return this };
    return a._$$AWWindow }, 1, 447, 234, 138);
I$(529, ".#<uispace> .succ{width:auto}\n");
I$(530, '<div class="iDialogBody">\n    <div class="iDialogMain" style="height: 127px;">\n        <div class="coupon-exchange-dialog">\n            <p><i class="succ"></i>恭喜，兑换码兑换成功啦!</p><a href="/" target="_blank">立即去逛逛&gt;</a></div>\n    </div>\n</div>');
I$(368, function(t, e, n, i, a, s, o, r, l, c, d, u) {
    var h = e._$pushCSSText(i),
        f = s._$addNodeTemplate(a);
    r._$$CouponWindow = NEJ.C();
    u = r._$$CouponWindow._$extend(t);
    u.__reset = function(t) { t.title = "提示";
        this.__super(t) };
    u.__destroy = function(t) { this.__super(t) };
    u.__initXGui = function() { this.__seed_css = h;
        this.__seed_html = f };
    u.__initNode = function() { this.__super();
        var t = e._$getByClassName(this.__body, "j-flag") };
    u.__onOK = function(t) { n._$stop(t);
        this._$dispatchEvent("onok");
        this._$hide() };
    return r._$$CouponWindow }, 528, 4, 3, 529, 530, 233, 238);
I$(523, '<span ref="wrap" class="nselect-wrap {wrapClass||\'\'}" style="width:{@(swidth)}px;display:{shownone?\'inline-block\':slist.length==0?\'none\':\'inline-block\'};" on-click="{this.stopPropagation($event)}">\n\t<div class="nselector">\n\t\t<div class="result-wrap" style="font-size:{@(sfontsize)}px; padding-left:16px; padding-right:16px; height:{@(sheight)}px; line-height:{@(sheight)}px;" on-click="{active=!active}">\n\t\t\t<div class="result ellipsis" style="width:100%; ">{current.text || \'\'}</div>\n\t\t\t<div r-class="{{\'cp-arrow\':true, \'cp-arrow-down\':!active,\'cp-arrow-up\':active}}" style="top:{@(sheight/2-1.5)}px;"></div>\n\t\t</div>\n\t\t<div class="options-wrap" style="top:{@(sheight+2)}px;">\n\t\t\t<div class="options" r-style="{{display:active?\'block\':\'none\'}}">\n\t\t\t\t<ul>\n\t\t\t\t\t{#list slist as itm}\n\t\t\t\t\t<li on-click="{this.onchange(itm)}">\n\t\t\t\t\t\t<a hidefocus="true" href="javascript:;" class="option ellipsis {itm.value==current.value?\'curr\':\'\'}" title="{itm.text}" value="{itm.value}" style="font-size:{@(sfontsize)}px;padding-left:16px;padding-right:16px;width:100%;height:{@(sheight)}px;line-height:{@(sheight)}px;display:block;">{itm.text}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t{/list}\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</span>');
I$(350, function(t, e, n, i, a) {
    function s(t, e) {
        return parseFloat(t || e) }
    var o = t.extend({ name: "rselect", template: i, config: function(t) { n.extend(t, { active: !1, current: t.current || (t.list || [])[0] || {}, slist: t.list || [], swidth: s(t.width, 120), sheight: s(t.height, 28), sfontsize: s(t.fontsize, 12) });
            this.supr(t);
            this.$watch("current", function(e) { e = e || {};
                if (void 0 === e.value || void 0 === e.text) {
                    var n = t.slist,
                        i = n.length,
                        a = void 0 === e.value ? "text" : "value",
                        s = void 0 === e.value ? "value" : "text";
                    for (var o = 0; o < i; o++)
                        if (n[o][a] == e[a]) { t.current[s] = n[o][s];
                            break }
                    this.$update() } }._$bind(this)) }, init: function() { a._$addEvent(document.body, "click", function() { this.$update({ active: !1 }) }._$bind(this)) }, onchange: function(t) {
            var e = this.data;
            e.active = !1;
            if (e.current.value != t.value) { e.current = t;
                this.$emit("change", t) } }, stopPropagation: function(t) { t.stopPropagation && t.stopPropagation();
            t.cancelBubble && t.cancelBubble() }, $getCurrent: function() {
            return this.data.current || {} }, $setCurrent: function(t) {
            if (t) this.data.current = t } });
    return o }, 151, 2, 15, 523, 3);
I$(335, '{#if showAuthButtonType/1 == 0 }\n\t<span class="waitCertificate btn-gray30" title="认证错误次数过多，请明天再试">实名认证</span>\n{#else}\n\t<span class="waitCertificate btn-red30" on-click="{this.certificate(gorder)}">实名认证</span>\t\n{/if}');
I$(515, '<div class="iDialog commTipsPop {clazz} m-dialogVerify" animate style="z-index:189;width:{width}px; height:{height}px;margin-left:-{width/2}px; left:50%; margin-top:-{height/2}px; top:50%; ">\n\t<table class="iDialogWrapTable">\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td class="itd-mid-left"></td>\n\t\t\t\t<td class="itd-mid-center">\n\t\t\t\t\t<div class="iDialogContent">\n\t\t\t\t\t\t<div class="iDialogHead">\n\t\t\t\t\t\t\t<h1>实名认证</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class="iDialogClose" hidefocus="true" href="javascript:;" on-click="{this.onclose()}"></a>\n\t\t\t\t\t\t<div class="iDialogBody">\n\t\t\t\t\t\t\t<div class="iDialogMain" style="padding-bottom:40px;">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<p class="notice">根据海关要求，购买跨境商品需要对订购人进行实名认证</p>\n\t\t\t\t\t\t\t\t\t<div class="m_myaddress m_myaddress_verify">\n\t\t\t\t\t\t\t\t\t\t<div class="item clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="item-label"><i>*</i>&nbsp;订购人姓名：</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" name="fullname3" r-class="{{\'item-input\':true, \'item-input-fullname\':true, \'ztag\':true, \'error\':receiverError}}" lenlimit r-model="{receiver}" on-focus={this.onNameInputFocus($event)}/>\n\t\t\t\t\t\t\t\t\t\t\t<p class="i-error" r-hide="{!receiverError}">\n\t\t\t\t\t\t\t\t\t\t\t\t<i r-html={"&#xe606;"}></i>{receiverErrorMsg}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="item clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="item-label"><i>*</i>&nbsp;身份证号码：</span>\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" name="identityCard1" r-class="{{\'item-input\':true, \'ztag\':true,\'oIpt\':true, \'c_999\':!idno || idno == \'请填写收货人本人的真实身份证号码\', \'error\':idnoError}}" value="请填写收货人本人的真实身份证号码" iplaceholder="请填写收货人本人的真实身份证号码" r-model="{idno}" idno  on-focus={this.onIdNumInputFocus($event)}/>\n\t\t\t\t\t\t\t\t\t\t\t<div class="m-idcardtip">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class="iconfont w-icon-ask" r-html={"&#xe613;"} on-mouseenter="{this.data.askhover = true}" on-mouseleave="{this.data.askhover = false}"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="m-notice m-notice-idcard" r-hide="{!askhover}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="para1">根据海关要求，购买跨境商品需要对订购人进行实名认证，错误信息可能导致无法正常清关。</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="para2">你的身份证信息将加密保管，考拉保证信息安全，绝不对外泄露！</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="para3">有任何身份认证的问题请咨询我们<br/>400-088-8188<br/>09:00-24:00</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="arrow">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="arr"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="arr1"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<p class="i-error" r-hide="{!idnoError}">\n\t\t\t\t\t\t\t\t\t\t\t\t<i r-html={"&#xe606;"}></i>{idnoErrorMsg}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="iDialogFoot">\n\t\t\t\t\t\t\t<a href="javascript:;" rel="1" class="iDialogBtn focusBtn" on-click="{this.onok()}">\n\t\t\t\t\t\t\t\t<span>认证</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href="javascript:;" rel="0" class="iDialogBtn" on-click="{this.onclose()}">\n\t\t\t\t\t\t\t\t<span>取消</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td class="itd-mid-right"></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>\n<div class="iDialogLayout" style="z-index:188;"></div>');
I$(336, function(t, e, n, i, a, s) {
    var o = t.extend({ template: a, config: function(t) { i.extend(t, {});
            this.supr(t) }, init: function() {
            var t = s.getUserInfoFromCookie() || {};
            window["_gaq"].push(["_trackEvent", "实名认证", "完成实名认证", "我的点击实名认证###" + t.base + "&" + new Date]);
            i.daEvent("支付后实名认证", "订购人实名认证浮层", "出现") }, onNameInputFocus: function() { i.daEvent("支付后实名认证", "订购人实名认证浮层", "姓名") }, onIdNumInputFocus: function() { i.daEvent("支付后实名认证", "订购人实名认证浮层", "身份证") }, onok: function() {
            var t = this.data;
            var e = { authType: 1, realName: t.receiver || "", idCardNum: t.idno || "", gorderId: t.gorderId };
            i.daEvent("支付后实名认证", "订购人实名认证浮层", "提交认证");
            if ("" != t.receiver.trim() && "请填写收货人本人的真实身份证号码" != t.idno.trim() && "" != t.idno.trim())
                if (!t.receiverError || 1 != t.receiverErrorCode)
                    if (!t.idnoError || 1 != t.idnoErrorCode) s.afterLogin(function() { this.authreq(e) }._$bind(this)) }, requesting: !1, authreq: function(t) {
            if (!this.requesting) { this.requesting = !0;
                var e = "/personal/authenticate/doAuth.html",
                    n = { data: t, onload: function(t) {
                            var e = t || {};
                            var n = e.retcode;
                            var a = e.retdesc || "";
                            if (200 == n) i.daEvent("支付后实名认证", "订购人实名认证浮层", "认证通过");
                            else i.daEvent("支付后实名认证", "订购人实名认证浮层", "错误", { errorType: a || "系统错误" });
                            if (200 == n) { this.onclose();
                                s.showMsgTip("实名认证成功", function() { location.reload() }._$bind(this));
                                var o = s.getUserInfoFromCookie() || {};
                                window["_gaq"].push(["_trackEvent", "实名认证", "完成实名认证", "我的实名认证完成###" + o.base + "&" + new Date + "&null&1"]) } else {
                                var r = "";
                                switch (n) {
                                    case 2:
                                        r = a ? a + "，请重试" : "身份证号码与姓名不一致，请重试";
                                        this.data.idnoError = !0;
                                        this.data.idnoErrorMsg = r;
                                        this.data.idnoErrorCode = 2;
                                        break;
                                    case 439:
                                        r = a ? a + "，请明天再试，如有疑问请联系客服" : "认证服务超时，请明天再试，如有疑问请联系客服";
                                        this.data.idnoError = !0;
                                        this.data.idnoErrorMsg = r;
                                        this.data.idnoErrorCode = 439;
                                        break;
                                    case 412:
                                        r = a;
                                        this.data.receiverError = !0;
                                        this.data.receiverErrorMsg = r;
                                        this.data.receiverErrorCode = 412;
                                        break;
                                    default:
                                        r = a || "身份证号码与姓名不一致，请重试";
                                        this.data.idnoError = !0;
                                        this.data.idnoErrorMsg = r;
                                        this.data.idnoErrorCode = 2 }
                                this.$update();
                                var o = s.getUserInfoFromCookie() || {};
                                window["_gaq"].push(["_trackEvent", "实名认证", "完成实名认证", "我的实名认证完成###" + o.base + "&" + new Date + "&null&0"]) }
                            this.requesting = !1 }._$bind(this), onerror: function() { this.requesting = !1 }._$bind(this) };
                this.$request(e, n) } }, onclose: function() { this.supr() } });
    o.directive("lenlimit", function(t) { n._$addEvent(t, "blur", function() {
            var e = t.value,
                n = e.replace(/[^\x00-\xff]/g, "rr").length;
            this.data.receiverError = n < 2 || n > 24;
            if (this.data.receiverError) { this.data.receiverErrorMsg = "长度不符合，请控制在2-24个字符，一个汉字为两个字符";
                this.data.receiverErrorCode = 1 }
            this.$update() }._$bind(this)) });
    o.directive("idno", function(t) { n._$addEvent(t, "blur", function() {
            var e = t.value,
                n = /(^[0-9A-Za-z*]{15}$)|(^[0-9A-Za-z*]{18}$)/;
            this.data.idnoError = !n.test(e);
            if (this.data.idnoError) { this.data.idnoErrorMsg = "请输入正确的身份证号码";
                this.data.idnoErrorCode = 1;
                this.$update() } else this.onok() }._$bind(this)) });
    o.directive("iplaceholder", function(t, i) {
        if (t.value != i) e._$delClassName(t, "c_999");
        n._$addEvent(t, "focus", function() {
            if (t.value == i) { t.value = "";
                e._$delClassName(t, "c_999") } }._$bind(this));
        n._$addEvent(t, "blur", function() {
            if ("" == t.value) { t.value = i;
                e._$addClassName(t, "c_999") } }) });
    return o }, 333, 4, 3, 15, 515, 142);
I$(517, '<div class="iDialog commTipsPop {clazz} m-dialogVerify m-photoVerify" animate style="z-index:10001;width:{width}px; height:{height}px;margin-left:-{width/2}px; left:50%; margin-top:-{height/2}px; top:50%; ">\n\t<table class="iDialogWrapTable">\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td class="itd-mid-left"></td>\n\t\t\t\t<td class="itd-mid-center">\n\t\t\t\t\t<div class="iDialogContent">\n\t\t\t\t\t\t<div class="iDialogHead">\n\t\t\t\t\t\t\t<h1>实名认证</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class="iDialogClose" hidefocus="true" href="javascript:;" on-click="{this.onclose()}"></a>\n\t\t\t\t\t\t<div class="iDialogBody">\n\t\t\t\t\t\t\t<div class="iDialogMain" style="padding-bottom:40px;">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<p class="notice"><b class="iconfont" r-html={"&#xe609;"}></b>应海关要求，请上传身份证照片，补充实名认证信息</p>\n\t\t\t\t\t\t\t\t\t<div class="m_myaddress m_myaddress_photo">\n\t\t\t\t\t\t\t\t\t\t<p class="personalInfo">实名者：<b class="name">{receiver}</b>身份证：<b>{identityCard}</b></p>\n\t\t\t\t\t\t\t\t\t\t<p class="hint hint1">注：1.需上传清晰的身份证正面、反面共2张照片</p>\n\t\t\t\t\t\t\t\t\t\t<p class="hint hint2">2.照片不超过5MB，支持格式jpg，jpeg，png</p>\n\t\t\t\t\t\t\t\t\t\t<div ref="example" class="hover-example clearfix" r-hide="{hideExample}">\n\t\t\t\t\t\t\t\t\t\t\t<span class="image"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class="text">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="tit" r-html="{exampleTit}">身份证正面照片</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>1.拍照时保证身份证完整显示</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>2.确保能清晰看见身份证上的信息</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>3.防止拍照时身份证反光</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<b class="triangle"></b>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div ref="photoWrap" class="photoWrap clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<label class="photo front uploadLabel" r-hide="{!!photoUrl.frontUrl}" on-mouseenter={this.showExample(true)} on-mouseleave={this.hideExample()}>+ 添加正面</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="display frontDisplay" r-hide="{!photoUrl.frontUrl}">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="{photoUrl.frontUrl|noProtocol}" width="100%" on-load={this.photoLoad($event)}>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="photoOpe">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="uploadLabel front">重新上传</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label on-click="{photoUrl.frontUrl=\'\'}">删除</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<label class="photo back uploadLabel" r-hide="{!!photoUrl.backUrl}" on-mouseenter={this.showExample(false)} on-mouseleave={this.hideExample()}>+ 添加反面</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="display backDisplay" r-hide="{!photoUrl.backUrl}">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="{photoUrl.backUrl|noProtocol}" width="100%" on-load={this.photoLoad($event)}>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="photoOpe">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="uploadLabel">重新上传</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label on-click="{photoUrl.backUrl=\'\'}">删除</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class="err" r-hide="{!photoErrorMsg}">\n\t\t\t\t\t\t\t\t\t\t\t<i r-html={"&#xe606;"}></i>{photoErrorMsg}\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="iDialogFoot"><a href="javascript:;" rel="1" class="iDialogBtn focusBtn" on-click="{this.onok()}"><span>认证</span></a><a href="javascript:;" rel="0" class="iDialogBtn" on-click="{this.onclose()}"><span>取消</span></a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td class="itd-mid-right"></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>\n<div class="iDialogLayout" style="z-index:10000;"></div>');
I$(337, function(t, e, n, i, a, s, o, r, l) {
    var c = t.extend({ template: r, config: function(t) { a.extend(t, { hideExample: !0, photoUrl: { frontUrl: null, backUrl: null }, photoErrorMsg: "", imgOpt: "imageView&thumbnail=272x0&quality=95" });
            this.supr(t) }, init: function() { this.initUpload() }, photoLoad: function(t) {
            var e = t.target,
                n = e.offsetHeight;
            e.style.marginTop = -n / 2 + "px" }, showExample: function(t) { this.data.hideExample = !1;
            e[t ? "_$delClassName" : "_$addClassName"](this.$refs.example, "hover-exampleBack");
            this.data.exampleTit = t ? "身份证正面照片" : "身份证反面照片" }, hideExample: function(t) { this.data.hideExample = !0 }, initUpload: function() {
            var t = this;
            i._$forEach(e._$getByClassName(this.$refs.photoWrap, "uploadLabel"), function(n) { s._$bind(n, { parent: n.parentNode, accept: "image/jpg,image/jpeg,image/png", onchange: function(n) {
                        var i = e._$hasClassName(n.target, "front");
                        var a = n.form;
                        a.action = "/uploadImageForNej.html?module=auth";
                        a.method = "POST";
                        o._$upload(a, { cookie: !0, name: "fileData", accept: "image/jpg,image/jpeg,image/png", onload: t.uploadSucCb._$bind(t, i, a), onerror: t.uploadFailCb._$bind(t, i, a) }) } }) }) }, uploadSucCb: function(t, e, n) {
            var i = n || { imageUrl: [] },
                a;
            e.reset();
            if (200 == i.retcode) { a = i.imageUrl[0];
                this.data.photoUrl[t ? "frontUrl" : "backUrl"] = a + (a.indexOf("?") > 0 ? "&" : "?") + this.data.imgOpt;
                this.data.photoUrl[t ? "frontFileKey" : "oppositeFileKey"] = i.imageUrl[1] || "";
                this.showError("") } else if (403 == i.retcode) this.showError("图片格式不正确");
            else if (404 == i.retcode) this.showError("图片大小不能超过5MB");
            else if (461 == i.retcode) l.afterLogin(function() { location.reload() }._$bind(this));
            else this.showError(i.retdesc || "照片上传失败") }, uploadFailCb: function(t, e) { e.reset();
            this.showError("照片上传失败") }, onok: function() {
            var t = this.data,
                e = { frontFileKey: (t.photoUrl.frontFileKey || "").trim(), oppositeFileKey: (t.photoUrl.oppositeFileKey || "").trim(), gorderId: t.gorderId };
            if (!e.frontFileKey && !e.oppositeFileKey) return this.showError("请上传正/反面照片");
            if (!e.frontFileKey) return this.showError("请上传正面照片");
            if (!e.oppositeFileKey) return this.showError("请上传反面照片");
            l.afterLogin(function() { this.authreq(e) }._$bind(this)) }, showError: function(t) { this.data.photoErrorMsg = t;
            this.$update() }, requesting: !1, authreq: function(t) {
            if (!this.requesting) { this.requesting = !0;
                var e = "/personal/authOrderWithPhoto.html",
                    n = { data: t, onload: function(t) {
                            var e = t.retcode;
                            if (200 == e) { this.onclose();
                                l.showMsgTip("恭喜您已提交实名认证申请", function() { location.reload() }._$bind(this));!!window._dapush && window._dapush("_trackEvent", "郑州保税仓实名认证", "上传成功弹窗弹出", "弹窗出现", { userAccount: window.account, userId: window.account }) } else this.showError("照片上传失败");
                            this.requesting = !1 }._$bind(this), onerror: function() { this.requesting = !1 }._$bind(this) };
                this.$request(e, n) } }, onclose: function() { this.supr() } });
    return c }, 333, 4, 3, 2, 15, 516, 14, 517, 142);
I$(147, function(t, e, n, i, a, s, o) {
    var r = t.extend({
        name: "certificate",
        template: i,
        config: function(t) { n.extend(t, {});
            this.supr(t) },
        certificate: function(t) {
            var n = t.verifyStatus || -1,
                i = t.needVerifyInfo || {},
                r = i.hasAuthInfo || {};
            if (3 == n) { new s({ data: { width: 520, height: 340, receiver: t.receiverName, identityCard: t.identityCard, gorderId: t.gorderId } }).$inject(e._$get("certificatedialog"));!!window._dapush && window._dapush("_trackEvent", "郑州保税仓实名认证", "订单列表页点击", "身份证照片", { userAccount: window.account, userId: window.account }) } else if (11 == n || 12 == n) new o({
                data: {
                    authId: r.authId || "",
                    gorderId: t.gorderId,
                    authData: {
                        name: r.realName || "",
                        idNum: r.idCardNum || ""
                    },
                    status: 4
                }
            }).$inject(e._$get("certificatedialog"));
            else { new a({ data: { width: 520, height: 340, receiver: r.realName, gorderId: t.gorderId } }).$inject(e._$get("certificatedialog"));!!window._dapush && window._dapush("_trackEvent", "郑州保税仓实名认证", "订单列表页点击", "身份证号码", { userAccount: window.account, userId: window.account }) }
        }
    });
    return r
}, 151, 4, 15, 335, 336, 337, 338);
I$(384, function(t) {
    function e(t) { this.time = 0;
        this.length = 0;
        this.config = t;
        this.lastIndex = 0;
        this.animate = {};
        this.posArr = [];
        this.container = document.createDocumentFragment();
        this._setPosArr();
        this._bindEvent(this) }
    var n = e.prototype;
    n._bindEvent = function(t) {
        if (t) { t.$on = function(e, n) {
                if ("object" == typeof e) {
                    var i = arguments.callee;
                    for (var a in e)
                        if (e.hasOwnProperty(a)) i(a, e[a]) } else {
                    var s = t._handles || (t._handles = {}),
                        o = s[e] || (s[e] = []);
                    o.push(n) }
                return t };
            t.$off = function(e, n) {
                if (t._handles) {
                    if (!e) t._handles = {};
                    var i = t._handles,
                        a;
                    if (a = i[e]) {
                        if (!n) { i[e] = [];
                            return t }
                        for (var s = 0, o = a.length; s < o; s++)
                            if (n === a[s]) { a.splice(s, 1);
                                return t } }
                    return t } };
            t.$emit = function(e) {
                var n = t._handles,
                    i, a, s;
                if (e) {
                    if ("object" == typeof e) { s = e.type;
                        a = e.data || [] } else { a = Array.prototype.slice.call(arguments);
                        s = e }
                    if (!n || !(i = n[s])) return t;
                    for (var o = 0, r = i.length; o < r; o++) i[o].apply(t, a);
                    return t } } } };
    n._setPosArr = function() {
        var t = this.config;
        var e = t.row;
        var n = t.column;
        var i = t.margin || 1;
        if (!(!e || !n || e < 3 || n < 3)) {
            var a = t.width;
            var s = t.height;
            if (!(!a || !s || a < 0 || s < 0)) {
                var o = a - i * (n - 1);
                var r = s - i * (e - 1);
                var l = (o - o % n) / n;
                var c = (r - r % e) / e;
                var d = [];
                for (var u = 0; u < e; u++) { d[u] = [];
                    for (var h = 0; h < n; h++) {
                        var f = {};
                        f.x = h * l + h * i;
                        f.y = u * c + u * i;
                        f.width = l;
                        f.height = c;
                        if (!(u > 0 & u < e - 1 & h > 0 & h < n - 1)) d[u][h] = f;
                        else; } }
                for (var u = 0; u < e; u++)
                    if (u == e - 1) d[u].reverse();
                var _ = [];
                _ = _.concat(d[0]);
                for (var u = 1; u < e - 1; u++) _ = _.concat(d[u][n - 1]);
                _ = _.concat(d[e - 1]);
                for (var u = e - 2; u > 0; u--) _ = _.concat(d[u][0]);
                this.length = _.length;
                var p = {};
                var m = (n - 2) * l + (n - 3) * i;
                var g = (e - 2) * c + (e - 3) * i;
                p.x = l + i;
                p.y = c + i;
                p.width = m;
                p.height = g;
                _.push(p);
                this.posArr = _ } else console.log("宽度和高度必须不小于0!") } else console.log("行数和列数必须不小于3!") };
    n.$setBox = function(t) { t = t || [];
        var e = 0;
        var n = this.posArr;
        for (var i = 0, a = this.length; i < a; i++) { e++;
            var s = document.createElement("div"),
                o = "",
                r = t[i],
                l = n[i];
            if (r) {
                if (r.imgUrl) o += '<img src="' + r.imgUrl.replace(/^http:/i, "") + '"/>';
                if (r.text) o += r.text;
                if (r.href) o = '<a href="' + r.href + '" target="_blank">' + o + "</a>" }
            o += '<div class="j-turnplate-halo j-turnplate-halo' + e + '"></div>';
            s.innerHTML = o;
            s.className = "j-turnplate-prize j-turnplate-prize" + e;
            s.style.cssText = "width:" + l.width + "px;height:" + l.height + "px;line-height:" + l.height + "px;top:" + l.y + "px;left:" + l.x + "px;";
            this.container.appendChild(s) }
        var c = this.btn = document.createElement("div"),
            d = n[this.length];
        c.className = "j-turnplate-btn";
        c.style.cssText = "width:" + d.width + "px;height:" + d.height + "px;top:" + d.y + "px;left:" + d.x + "px;";
        this.container.appendChild(c);
        return this };
    n.$setAnimate = function(t) { t = t || {};
        if (t.endCycle && !(t.endCycle < 2)) { this.animate.slow = t.slow || 3;
            this.animate.quick = t.quick || 0;
            this.animate.speed = t.speed || 5;
            this.animate.noReset = !!t.noReset;
            this.animate.endCycle = t.endCycle;
            return this } else console.log("大转盘至少转动2圈!") };
    n.$inject = function(e) {
        if (e) {
            var n = t._$get(e);
            n.innerHTML = "";
            n.appendChild(this.container);
            return this } };
    n.$play = function(e) {
        function n() { c++;
            if (a > s) { a = 1;
                d++ }
            if (0 == u) {
                if (r == c) { clearInterval(_);
                    _ = setInterval(n, h / 4) }
                if (d == i.animate.endCycle - 1 && a == l) { clearInterval(_);
                    u = !0;
                    _ = setInterval(n, 2.5 * h) } }
            t._$addClassName(i.haloNodeArr[a - 1], "j-turnplate-current");
            if (a > 1) f = a - 1;
            else f = s;
            t._$delClassName(i.haloNodeArr[f - 1], "j-turnplate-current");
            if (1 == u && a == o) { r = 0;
                i.lastIndex = o;
                clearInterval(_);
                i.$emit("end") }
            a++ }
        var i = this;
        if (i.animate.endCycle && e.EndIndex) {
            if (!i.haloNodeArr) i.haloNodeArr = nes(".j-turnplate-halo");
            var a = e.index || 1,
                s = i.length,
                o = e.EndIndex,
                r = i.animate.quick,
                l = i.animate.slow;
            i.$emit("start");
            var c = 0,
                d = 0,
                u = !1,
                h = 40 * i.animate.speed,
                f = i.lastIndex || s,
                _ = setInterval(n, h);
            i.time++;
            l = o - l <= 0 ? o - l + s : o - l;
            if (!i.config.noReset) t._$delClassName(nes(".j-turnplate-halo" + f)[0], "j-turnplate-current") } else console.log("必须有转动圈数和结束位置，至少转动2圈!") };
    return e }, 4);
I$(552, '{#if showArr.length}\n<ul class="j-marquee-wrap {className||\'\'}" ref="box">\n  {#list showArr as item}\n  <li class="j-marquee-item f-toe {item.className||\'\'}">{#include this.content}</li>\n  {/list}\n</ul>\n{#else}\n<div class="j-marquee-empty ">\n  暂无数据\n</div>\n{/if}');
I$(385, function(t, e, n, i) {
    return n.extend({ name: "marquee", template: i, config: function(n) { e.extend(n, { _index: 0, scale: 20, unit: "px", showArr: [], className: "", showLength: 5, offset: 2, time: 3e3, duration: 800 });
            if (!this.content) throw new Error("必须有滚动节点结构！");
            if (!Array.isArray(this.array)) throw new Error("必须有源数据！");
            this._copy = e.clone(this.array);
            var n = this.data;
            n.length = n.showLength + n.offset;
            if (n.offset < 1) throw new Error("请至少滚动1条！");
            if (n.duration >= n.time) throw new Error("动画持续时间请小于滚动间隔时间！");
            if (this.array.length < n.length) { this.noScroll = !0;
                console.log("marquee：列表长度小于展示条数，已停止滚动效果！");
                return !1 }
            for (var i = 0; i < n.length; i++) { n._index++;
                n.showArr[i] = this.array[i] }
            this.$watch("showArr", function(e, n) {
                if (!this.noScroll) {
                    var i = this.data,
                        a = this.$refs.box;
                    a.style.top = 0;
                    var s = t._$$AnimEaseInOut._$allocate({ from: { offset: 0 }, to: { offset: i.offset * i.scale }, duration: i.duration, onupdate: function(t) { a.style.top = -t.offset + i.unit }, onstop: function() { this._$recycle() } });
                    s._$play() } }) }, init: function() {
            if (!this.noScroll) setInterval(this.setShowArr._$bind(this), this.data.time) }, resetArray: function() { this.array = e.clone(this._copy) }, addItem: function(t) { this.array.splice(this.data._index, 0, t) }, setShowArr: function() {
            var t = this.data;
            t.showArr.splice(0, t.offset);
            for (var e = 0; e < t.offset; e++) {
                if (t._index - this.array.length >= 0) { t._index = 0;
                    this.$emit("top") }
                t.showArr.push(this.array[t._index]);
                t._index++ }
            this.$emit("roll", t._index);
            this.$update() } }) }, 180, 15, 151, 552);
I$(248, function(t) {
    return { sync: function(e) {
            var n = "/personal/myPoint.html",
                i = { data: {}, method: "post", onload: function(t) { e && e(t) } };
            t(n, i) } } }, 6);
I$(553, '<div class="cnt">\n  {#if showTip}\n    <div class="tipCnt">\n      <div class="tip">{tip}</div>\n      <div class="btns f-cb">\n        {#if isError}\n          <a href="javascript:;" class="btn u-btn u-btn-ok u-btn-medium" on-click="{this.cancel()}">\n            <span>我知道了</span>\n          </a>\n        {#else}\n          <a href="javascript:;" class="btn u-btn u-btn-ok u-btn-medium" on-click="{this.onok()}">\n            <span r-html="{txtOk || \'确认\'}"></span>\n          </a>\n          <a href="javascript:;" class="btn u-btn u-btn-cancel u-btn-medium" on-click="{this.cancel()}" r-html="{txtCC || \'取消\'}"></a>\n        {/if}\n      </div>\n    </div>\n  {#else}\n    <div class="resultCnt clearfix">\n      {#if result.luckyType==3}\n        <a class="f-fl giftImg" href="/product/{result.goodsId}.html" target="_blank">\n          <img src="{result.imgUrl|imgThumbnailUrl:160,160}"/>\n          <div class="price">\n            <div class="tip">\n              <p>券后价</p>\n              <p>\n                <span>&yen;</span><span class="big">{result.discountPrice}</span>\n              </p>\n            </div>\n          </div>\n          <div class="name f-toe">{result.awardName}</div>\n        </a>\n        <div class="f-fl result gift">\n          <div class="show">\n            <div class="name">\n              <p>恭喜您！获得了1次低价购的机会</p>\n            </div>\n            <p>我们送您一张该商品的单品优惠券，保证您可以低价购得该商品，<a href="/product/{result.goodsId}.html" target="_blank">快去下单啊~</a></p>\n            <div class="btns">\n              <a href="javascript:;" class="btn u-btn u-btn-go u-btn-medium" on-click="{this.onok()}">\n                <span>继续抽奖</span>\n              </a>\n              <a class="btn u-btn u-btn-ok u-btn-medium" href="/product/{result.goodsId}.html" target="_blank">立即下单</a>\n            </div>\n          </div>\n        </div>\n      {#else}\n        <div class="f-fl brand {\'brand-\'+result.luckyType}">\n          {#if result.luckyType==2}\n            <div class="coupon">\n              <p style="line-height: 33px;">\n                <span class="small">&yen;</span><span class="price">{result.couponAmount}</span>\n              </p>\n              <p class="type">{couponName[result.couponType]}</p>\n            </div>\n          {/if}\n        </div>\n        <div class="f-fl result">\n          <div class="show">\n            {#if result.luckyType==1}\n            <p>恭喜您！抽中了！</p>\n            <div class="name">\n              <p class="f-toe">{result.awardName}</p>\n            </div>\n            {/if}\n            {#if result.luckyType==2}\n              <p>恭喜您！抽中了！</p>\n              <p class="name">{result.awardName}</p>\n              <a href="/personal/my_coupon.html" target="_blank">查看我的优惠券 &gt;</a>\n            {/if}\n            {#if result.luckyType==4}\n            <p class="name">{_loseTip[_loseCount]}</p>\n            {/if}\n            <div class="btns">\n              <a href="javascript:;" class="btn u-btn u-btn-ok u-btn-medium" on-click="{this.onok()}">\n                <span>继续抽奖</span>\n              </a>\n              <a href="javascript:;" class="btn u-btn u-btn-cancel u-btn-medium" on-click="{this.cancel()}">取消</a>\n            </div>\n          </div>\n        </div>\n      {/if}\n    </div>\n  {/if}\n</div>');
I$(386, function(t, e, n) {
    var i = 0;
    var a = ["阿噢~差一点就中奖啦！", "要不换个姿势再试试？", "距离大奖只剩一点点了!", "我就不信中不了奖", "曾经，我离大奖咫尺之遥……"];
    return e.extend({ config: function(e) { t.extend(e, { msg: n, clazz: "m-lotteryModal", showTip: !0, isError: !1, tip: "", couponName: { 1: "满减", 2: "无门槛" }, result: {}, hideOkBtn: !0, hideCCBtn: !0, _loseTip: a, _loseCount: i });
            this.supr(e);
            i++;
            if (4 != this.data.result.luckyType || i == a.length) i = 0 } }) }, 15, 187, 553);
I$(314, '<div class="m-exchangecode m-{type}">\n    {#if type === \'exchange\'}\n        <p class="title">\n            <span class="text">\n                {#if code == 200}\n                    <i class="iconfont success" r-html={\'&#xe612;\'}></i>\n                    兑换成功！\n                {#else}\n                    <i class="iconfont error" r-html={\'&#xe609;\'}></i>\n                    {message}\n                {/if}\n            </span>\n        </p>\n    {/if}\n    {#if code == 200 || type == \'seeCode\'}\n        <ul class="code">\n            <li class="code-key">\n                <span>兑换码/卡号：</span>\n                {redeemCode}\n            </li>\n            {#if pwd}\n            <li class="code-value">\n                <span>密码：</span>\n                {pwd}\n            </li>\n            {/if}\n        </ul>\n        <p class="sendToPhone">\n            <span class="from-label">发送到手机：</span>\n            <div class="from-content">\n                <p><input type="text" r-model={submitData.mobile} maxlength="11"></p>\n                <p class="send-tip" r-class={ {\'has-error\': !!errorMsg} }>{errorMsg || \'兑换码将会以短信的形式发送到填写的号码\'}</p>\n            </div>\n        </p>\n    {#elseif code == 402}\n        <p class="error-tip">您的考拉豆暂时不足，无法成功兑换。</p>\n        <p class="operation-tip">去<a class="u-jump-url" href={jumpUrl}>我的考拉豆</a>页面赚取更多考拉豆！</p>\n    {#else}\n        <p class="operation-tip">去<a class="u-jump-url" href={jumpUrl}>我的考拉豆</a>页面查看更多兑换！</p>\n    {/if}\n</div>');
I$(315, '@charset "UTF-8";\n\n/*查看兑换码*/\n.m-seeCodeModal .modal-body{\n    padding: 30px 59px;\n}\n\n.m-seeCodeModal .m-modal-message{\n    text-align: left;\n    padding-bottom: 18px;\n}\n\n.m-seeCodeModal .code{\n    margin-bottom: 15px;\n    padding: 8px 0 14px;\n    border-bottom: 1px solid #ddd;\n}\n\n.m-seeCodeModal .m-exchangecode{\n    line-height: 24px;\n}\n.m-seeCodeModal .from-label,\n.m-seeCodeModal .from-content{\n\n}\n.m-seeCodeModal .from-label{\n    float: left;\n    line-height: 36px;\n}\n\n.m-seeCodeModal .from-content{\n    padding-left: 90px;\n}\n\n.m-seeCodeModal .from-content input{\n    padding: 10px;\n    width: 218px;\n    height: 14px;\n    font-size: 12px;\n    color: inherit;\n    border: 1px solid #d5d5d5;\n}\n\n.m-seeCodeModal .send-tip{\n    line-height: 27px;\n    font-size: 12px;\n    color: #999;\n}\n\n.m-seeCodeModal .m-exchangecode .has-error{\n    color: #D22147;\n}\n\n.m-alert-modal{\n\n}\n\n.m-exchange .title .iconfont,\n.m-alert-modal .iconfont{\n    margin-right: 8px;\n    font-size: 24px;\n}\n\n.m-exchange .text,\n.m-exchange .title .iconfont,\n.m-alert-modal .text,\n.m-alert-modal .title .iconfont{\n    vertical-align: middle;\n}\n\n.m-exchange .title,\n.m-alert-modal .title{\n    font-size: 23px;\n}\n\n.m-seeCodeModal .iconfont.error,\n.m-alert-error .title .iconfont{\n    color: #c20d38;\n}\n\n.m-seeCodeModal .iconfont.success,\n.m-alert-success .title .iconfont{\n    color: #5dc540;\n}\n\n.m-exchange .title .iconfont{\n    margin-right: 12px;\n}\n\n.m-exchange .code,\n.m-exchange .error-tip,\n.m-exchange .operation-tip{\n    padding-left: 36px;\n}\n\n.m-exchange .code{\n    overflow: hidden;\n}\n\n.m-exchange .code li{\n    padding-right: 25px;\n    float: left;\n}\n\n.m-exchange .error-tip{\n    padding-top: 9px;\n    padding-bottom: 9px;\n    border-bottom: 1px solid #ddd;\n}\n\n.m-exchange .operation-tip{\n    margin-bottom: 2px;\n    padding-top: 7px;\n    padding-bottom: 7px;\n}\n\n.m-exchange .operation-tip .u-jump-url{\n    padding: 0 5px;\n}');
I$(129, '<div class="m-dialogmodal iDialogMain m-alert-modal {typeClass}">\n    <div class="m-dlgcont cnt">\n        <p class="title">\n            <i class="iconfont main-icon {icon||\'yes\'}" r-html="icon==\'yes\'?\'&#xe612;\':\'&#xe609;\'"></i>\n            <span class="text">{text}</span>\n        </p>\n        {#if !!detail}\n        <p class="detail" r-html={detail}></p>\n        {/if}\n    </div>\n    {#if !!btnText}\n    <div class="btnbar f-tac">\n        <a class="btn" href="javascript:void(0)" on-click={this.confirm()}>{btnText}</a>\n    </div>\n    {/if}\n</div>');
I$(127, function(t, e, n, i, a, s, o, r, l) { "use strict";
    t._$addStyle(r);
    return a.extend({ config: function(t) { n.extend(t, { modalName: "m-seeCodeModal", msg: n.compressHtml(o), width: 518, type: "seeCode", redeemCode: "", pwd: "", submitData: { id: "", mobile: "" }, code: 0, message: "", hideCCBtn: !0 });
            this.setTitle();
            this.setBtnText();
            this.supr(t);
            this.getUserPhone() }, setBtnText: function() {
            var t = this.data;
            var e = t.code;
            var n = "";
            if (200 !== e && "exchange" == t.type) { n = "去看看";
                t.jumpUrl = "/personal/my_point/index.html" } else n = "发送";
            t.txtOk = n }, setTitle: function() {
            var t = this.data;
            var e = "";
            if ("seeCode" == t.type) e = "兑换码";
            else if ("exchange" == t.type) e = "兑换结果";
            t.title = e }, getUserPhone: function() {
            var t = "/integral/get_mobile.html";
            var e = this.data.submitData;
            this.ajax(t, {}, function(t) {
                if (t && 200 == t.code && t.message) e.mobile = t.message }, function() {}) }, validateMobile: function() {
            var t = new RegExp("^1[3|4|5|7|8]\\d{9}$");
            var e = this.data;
            var n = e.submitData;
            var i = n.mobile;
            if ("" == i.trim()) { e.errorMsg = "手机号码不能为空！";
                return !1 }
            if (!t.test(i)) { e.errorMsg = "手机号码格式错误！";
                return !1 }
            e.errorMsg = "";
            return !0 }, send: function() {
            var t = "/integral/send_to_mobile.html";
            var e = this.data;
            var n = e.submitData;
            this.ajax(t, { data: n, method: "post", norest: !0 }, function(t) {
                var e = t ? t.code : "";
                this.destroy();
                this.showSendPrompt(e) }, function() { this.destroy();
                this.showSendPrompt() }) }, showSendPrompt: function(t) {
            var e = "发送到手机";
            var i = " m-alert-error";
            var a = { title: e, width: 518, btnText: "确认" };
            if (200 == t) n.extend(a, { icon: "yes", text: "发送成功！", typeClass: " m-alert-success" });
            else if (403 == t) n.extend(a, { icon: "no", text: "短信发送次数过多，请在24小时后再尝试", typeClass: i });
            else n.extend(a, { icon: "no", text: "发送失败！", typeClass: i });
            new s({ content: n.compressHtml(l), data: a }) }, ajax: function(t, e, a, s) { this.sending = !0;
            if (e.onload || e.onerror) { delete e.onload;
                delete e.onerror }
            var o = { type: "json", method: "GET", onload: function(t) { a && a.call(this, t);
                    this.sending = !1;
                    this.$update() }._$bind(this), onerror: function() { s && s.call(this);
                    this.sending = !1;
                    this.$update() }._$bind(this) };
            n.extend(o, e, !0);
            i(t, o) }, onok: function() {
            var t = this.data;
            var e = t.code;
            if (!this.sending) {
                if ("seeCode" == t.type || 200 == e)
                    if (!this.validateMobile()) return;
                if (200 !== e && "exchange" == t.type) location.href = t.jumpUrl;
                else this.send() } } }) }, 4, 3, 15, 6, 144, 128, 314, 315, 129);
I$(99, function(t, e, n, i, a, s, o, r, l, c, d, u, h, f, _, p, m, g, v, $, y, b, w) {
    var C;
    v._$$SearchModule = t._$klass();
    C = v._$$SearchModule._$extend(s._$$EventTarget);
    C.__init = function(t) { this.__supInit(t);
        this.__initNode();
        this.__initPage();
        this.__initEvent();
        this.__initSelectTag("brandbox");
        this.__initSelectTag("classify");
        this.__initSelectTag("country");
        this.__setPropertyAction();
        this.__lazyImg = m._$$LazyImage._$allocate({ attr: "src", oncheck: this.__checkImg._$bind(this), onappend: this.__onAppend._$bind(this) });
        window.lazyImgTrigger = this.__lazyImgTrigger._$bind(this);
        this.__gaText = t.gaText || "搜索列表页";
        this.__gaFrom = t.gaFrom || "search";
        this.__gaPosiiton = t.gaPosiiton || "搜索";
        this.__dapushParam = t.dapushParam;
        if (nej.p._$KERNEL && "ie" == nej.p._$KERNEL.browser && ("6.0" == nej.p._$KERNEL.version || "7.0" == nej.p._$KERNEL.version));
        else this.__initBrandDetail();
        this.__initRecommend();
        this.__countDownInit();
        if (!window.kl) window.kl = {};
        if (location.search.indexOf("pageSize") >= 0)
            if ("brand" == this.__gaFrom && (hasActive || hasCoupon || hasHotSaleGoods || hasNewsGoods)) a._$scrollTo("search_crumbs");
            else a._$scrollTo("topTab");
        kl.addFav = this.__addFav._$bind(this);
        kl.arrivalNotice = this.__arrivalNotice._$bind(this);
        kl.skumouseover = this.__onSkuMouseOver._$bind(this);
        kl.skumouseout = this.__onSkuMouseOut._$bind(this);
        kl.forwordclick = this.__onForwordSkuClick._$bind(this);
        if ("undefined" != typeof redirectType && 1 == redirectType) this._startCountDownTimer();
        var e = window.__gtmGoods || [];
        this.__gtmCollect(this.__gaFrom, e) };
    C._startCountDownTimer = function() {
        var t = 5,
            e, n = a._$get("J_countDownTxt"),
            i = a._$get("J_countDownTxtWrap"),
            s = a._$get("J_clearCountDown"),
            o;
        if ("undefined" == typeof redirectUrl) o = "http://www.kaola.com.hk";
        else o = redirectUrl;
        i.style.display = "block";
        e = setInterval(function() {
            if (0 !== t) { t--;
                n.innerHTML = t } else { clearInterval(e);
                i.style.display = "none";
                window.open(o) } }, 1e3);
        s.onclick = function() { i.style.display = "none";
            clearInterval(e) } };
    C.__initBrandDetail = function() {
        var t = a._$get("brandtext");
        if (t) {
            var e = t.children[0].offsetHeight;
            if (!(e < 60)) a._$addClassName(t, "dot") } };
    C.__initNode = function() {
        var t = a._$getByClassName(document.body, "opertaion");
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (!/\w/.test(n.innerHTML)) n.parentNode.removeChild(n) }
        var i = a._$getByClassName(document.body, "jtag"),
            s = 0;
        this.__popularity = i[s++];
        this.__sales = i[s++];
        this.__newGoods = i[s++];
        this.__price = i[s++];
        this.__priceStartIpt = i[s++];
        this.__priceEndIpt = i[s++];
        this.__priceBoxBtn = i[s++];
        this.__isStock = i[s++];
        this.__isPromote = i[s++];
        this.__delBrandsBtn = a._$get("delbrands");
        this.__followBtn = a._$get("followBtn");
        this.__searchResultBox = a._$get("searchresult");
        this.__focusCountCnt = a._$get("focusCount") };
    C.__initEvent = function() { i._$addEvent(this.__popularity, "click", this.__orderResult._$bind(this, 0));
        i._$addEvent(this.__sales, "click", this.__orderResult._$bind(this, 2));
        i._$addEvent(this.__newGoods, "click", this.__orderResult._$bind(this, 6));
        i._$addEvent(this.__price, "click", this.__orderResult._$bind(this, 1));
        i._$addEvent(this.__priceBoxBtn, "click", this.__priceRangeResult._$bind(this));
        i._$addEvent(this.__priceStartIpt, "keyup", this.__priceRangeKeyup._$bind(this));
        i._$addEvent(this.__priceEndIpt, "keyup", this.__priceRangeKeyup._$bind(this));
        i._$addEvent(this.__isStock, "click", this.__stockResult._$bind(this, 1));
        i._$addEvent(this.__isPromote, "click", this.__promoteResult._$bind(this, 1));
        i._$addEvent(this.__delBrandsBtn, "click", this.__delBrands._$bind(this, 1));
        if (this.__followBtn) { this.__brandId = Number(this.__followBtn.getAttribute("data-bid"));
            i._$addEvent(this.__followBtn, "click", this.__doFollow._$bind(this));
            i._$addEvent(this.__followBtn, "mouseover", this.__doFollowBtnHover._$bind(this, !0));
            i._$addEvent(this.__followBtn, "mouseout", this.__doFollowBtnHover._$bind(this, !1)) }
        if (this.__searchResultBox) {
            var t = a._$getByClassName(this.__searchResultBox, "colorsku");
            if (t && t.length > 0) {
                var e = a._$getByClassName(this.__searchResultBox, "skutag");
                i._$addEvent(this.__searchResultBox, "click", function(t) {
                    var e = i._$getElement(t);
                    if (a._$hasClassName(e, "arrow-1")) this.__onForwordSkuClick(e, 1);
                    else if (a._$hasClassName(e, "arrow-2")) this.__onForwordSkuClick(e, -1) }._$bind(this));
                for (var n = 0, s = e.length; n < s; n++) i._$addEvent(e[n], "mouseover", this.__onSkuMouseOver._$bind(this, e[n])) } } };
    C.__initSelectTag = function(t) {
        var e = a._$get(t);
        if (e) {
            var n = a._$getByClassName(e, "ctag"),
                s = 0;
            var o = n[s++],
                r = n[s++],
                l = n[s++];
            this.__brandsMultiple = !1;
            if ("brandbox" == t) {
                var c = a._$dataset(l, "param");
                var d = a._$dataset(l, "brandText") || a._$dataset(l, "brandtext");
                i._$addEvent(l, "click", this.__showBrandsByLetter._$bind(this, c, d)) } else i._$addEvent(l, "click", this.__showBrands._$bind(this));
            var u = r.offsetHeight;
            if (u > 60) { l.style.display = "";
                a._$replaceClassName(o.parentNode, "autoheight", "line2height") } else a._$replaceClassName(o.parentNode, "line2height", "autoheight");
            if (nej.p._$KERNEL && "ie" == nej.p._$KERNEL.browser && ("6.0" == nej.p._$KERNEL.version || "7.0" == nej.p._$KERNEL.version)) this.__isIE67 = !0;
            this.__fixIERepaintBug() } };
    C.__initPage = function() {
        var t = a._$getByClassName(document.body, "m-classify");
        if (t && t.length) a._$replaceClassName(t.pop(), "z-cat3", "nobottomline");
        this.__tempLink = tempLink.replace(/&amp;/gi, "&");
        if (pageType && pageType >= 1) {
            this.__typeText = "sortfield";
            this.__typeReg = new RegExp(/&sortfield=[^&]*/gi);
            this.__brandReg = new RegExp(/&b=[^&]*/gi)
        } else { this.__typeText = "type";
            this.__typeReg = new RegExp(/&type=[^&]*/gi);
            this.__brandReg = new RegExp(/&brandId=[^&]*/gi);
            var e = a._$get("topSearchInput"),
                n = a._$getByClassName("topsearch", "js-placeholder");
            var i = this.__getUrlParam(location.href, "key").replace(/%2B/gi, "%20");
            e.value = decodeURIComponent(decodeURIComponent(i));
            if (e.value && n.length > 0) n[0].style.display = "none" }
        this.__defaultLink = this.__tempLink.replace(this.__typeReg, "&" + this.__typeText + "=0").replace(/&isDesc=[^&]*/gi, "&isDesc=true").replace(/&isStock=[^&]*/gi, "&isStock=false");
        this.__type = Number(this.__getUrlParam(this.__tempLink, this.__typeText));
        this.__isDesc = "true" == this.__getUrlParam(this.__tempLink, "isDesc") ? !0 : !1;
        this.__stock = this.__getUrlParam(this.__tempLink, "isStock");
        this.__promote = this.__getUrlParam(this.__tempLink, "isPromote");
        var s = a._$get("relativeWrap");
        if (s) {
            var o = a._$getByClassName(s, "relative"),
                r;
            for (var l = 0, c = o.length; l < c; l++) { r = o[l];
                r.href = "/search.html?key=" + encodeURIComponent(encodeURIComponent(a._$attr(r, "key"))) + "&searchRefer=research&referPostion=" + (l + 1) } }
    };
    C.__setPropertyAction = function() {
        var t = a._$getByClassName(document.body, "property"),
            e, n, s;
        for (var o = 0, r = t.length; o < r; o++) { e = a._$getByClassName(t[o], "ptag");
            n = 0;
            _brandIdsWrapPa = e[n++];
            _brandIdsWrap = e[n++];
            _brandIds = e[n++];
            _more = e[n++];
            s = _brandIds.offsetHeight;
            if (s > 60) { _more.style.display = "";
                _brandIdsWrap.parentNode.className = "hdbrands line2height";
                i._$addEvent(_more, "click", this.__showPro._$bind(this, _more, _brandIdsWrapPa)) } else _brandIdsWrap.parentNode.className = "hdbrands autoheight" } };
    C.__showPro = function(t, e, n) {
        var i = !(t.innerHTML.indexOf("收起") >= 0);
        t.innerHTML = !i ? "展开<span></span>" : '收起<span class="packup"></span>';
        e.className = i ? "hdbrands autoheight" : "hdbrands line2height";
        this.__fixIERepaintBug() };
    C.__showBrands = function(t) {
        var e = i._$getElement(t);
        if ("span" == e.tagName.toLowerCase()) e = e.parentNode;
        var n = o(e)._$parent(".j-box", !0)._$children(".j-tagwrap", !0)[0];
        var s = o(e)._$parent(".j-box", !0)._$children(".ctag", !0)[1];
        if (e.innerHTML.indexOf("展开") >= 0) { e.innerHTML = '收起<span class="packup"></span>';
            if (n) { a._$replaceClassName(n, "line2height", "autoheight");
                n.style.height = s.offsetHeight + "px" } } else { e.innerHTML = "展开<span></span>";
            if (n) { a._$replaceClassName(n, "autoheight", "line2height");
                n.style.height = "68px" } }
        this.__fixIERepaintBug() };
    C.__showBrandsByLetter = function(t, e) { a._$remove(a._$get("brandboxwrap"));
        var n = new _({ data: { brandList: window.brandList, baseUrl: t, brandText: e } });
        n.$inject(a._$get("brandbox")) };
    C.__orderResult = function(t) {
        var e = "";
        if (this.__type == t) {
            var n = 6 == t ? this.__isDesc : !this.__isDesc;
            e = this.__tempLink.replace(/&isDesc=[^&]*/gi, "&isDesc=" + n) } else if (1 == t || 6 == t) e = this.__tempLink.replace(this.__typeReg, "&" + this.__typeText + "=" + t).replace(/&isDesc=[^&]*/gi, "&isDesc=false");
        else e = this.__tempLink.replace(this.__typeReg, "&" + this.__typeText + "=" + t).replace(/&isDesc=[^&]*/gi, "&isDesc=true");
        location.href = e + "&changeContent=type" };
    C.__doFollow = function(t) {
        var e = 1;
        if (a._$hasClassName(this.__followBtn, "unfo")) e = 0;
        var n = { id: this.__brandId, status: e };
        r("/personal/brand/follow.html", { method: "POST", data: n, type: "json", norest: !0, onload: function(t) {
                if (200 == t.retcode) this.__changeFollowStatus(e);
                else if (461 == t.retcode) this.__loginWin = l._$allocate({ logincallback: this.__getLoginOK._$bind(this) })._$show();
                else if (491 == t.retcode) this.__changeFollowStatus(1);
                else c._$allocate({ message: t.retdesc })._$show() }._$bind(this), onerror: function(t) { c._$allocate({ message: "内部错误！" })._$show() } }) };
    C.__doFollowBtnHover = function(t, e) {
        var n = 1 == pageType ? "取消关注" : "取消关注";
        if (a._$hasClassName(this.__followBtn, "unfo")) this.__followBtn.innerText = t ? n : "已关注" };
    C.__changeFollowStatus = function(t) {
        var e = 1 == pageType ? "关注" : "关注";
        var n = Number(this.__focusCountCnt.innerText);
        this.__focusCountCnt.innerText = 0 == t ? n - 1 < 0 ? 0 : n - 1 : n + 1;
        this.__followBtn.className = 0 == t ? "follow" : "follow unfo";
        this.__followBtn.innerHTML = 0 == t ? "<b>&#xe60a;</b>&nbsp;" + e : "已关注" };
    C.__getLoginOK = function(t) {
        if (0 == t) { this.__doFollow();
            this._$dispatchEvent("cbloginOk") } };
    C.__addFav = function(t, e, n) {
        if (n) {
            var i = "/favoriteAjax/add.html",
                a = 1;
            if (n.className.indexOf("favt") != -1) { i = "/favoriteAjax/delete.html";
                a = -1 }
            r(i, { method: "POST", data: { goodsId: e }, type: "json", norest: !0, onload: function(t) {
                    if (200 == t.retcode) this.__changeFavStatus(n);
                    else if (461 == t.retcode) this.__loginWin = l._$allocate({ logincallback: this.__getLoginOK2._$bind(this, e, n) })._$show();
                    else if (491 == t.retcode) this.__changeFavStatus(n);
                    else c._$allocate({ message: t.retdesc })._$show() }._$bind(this), onerror: function(t) { c._$allocate({ message: "内部错误！" })._$show() } }) } };
    C.__changeFavStatus = function(t) { t.className = t.className.indexOf("favt") < 0 ? "favbtn favt" : "favbtn" };
    C.__getLoginOK2 = function(t, e, n) {
        if (0 == n) { this.__addFav(null, t, e);
            this._$dispatchEvent("cbloginOk") } };
    C.__arrivalNotice = function() {
        if (!window.user) this.__loginWin = l._$allocate({ logincallback: this.__getLoginOK3._$bind(this) })._$show();
        else; };
    C.__getLoginOK3 = function(t, e, n) {
        if (0 == n); };
    C.__priceRangeResult = function(t) {
        var e = this.__priceStartIpt.value ? parseFloat(this.__priceStartIpt.value) : "-1";
        var n = this.__priceEndIpt.value ? parseFloat(this.__priceEndIpt.value) : "-1";
        var i = this.__tempLink;
        if (e != -1 && n != -1 && e > n) { e += n;
            n = e - n;
            e -= n }
        if (/&lowerPrice=[^&]*/gi.test(i)) i = i.replace(/&lowerPrice=[^&]*/gi, "&lowerPrice=" + e);
        else i = i + "&lowerPrice=" + e;
        if (/&upperPrice=[^&]*/gi.test(i)) i = i.replace(/&upperPrice=[^&]*/gi, "&upperPrice=" + n);
        else i = i + "&upperPrice=" + n;
        location.href = i + "&changeContent=price" };
    C.__priceRangeKeyup = function(t) {
        var e = t.target || t.srcElement;
        if (190 != t.keyCode || !/^\d+\.$/.test(e.value))
            if (!/^\d+(\.\d+)?$/.test(e.value)) e.value = e.value.substr(0, e.value.length - 1) };
    C.__stockResult = function() {
        var t = "true" == this.__stock ? !1 : !0,
            e = this.__tempLink.replace(/&isStock=[^&]*/gi, "&isStock=" + t);
        location.href = e + "&changeContent=isStock" };
    C.__promoteResult = function() {
        var t = "true" == this.__promote ? !1 : !0,
            e = this.__tempLink.replace(/&isPromote=[^&]*/gi, "&isPromote=" + t);
        location.href = e + "&changeContent=isPromote" };
    C.__delBrands = function() {
        var t = this.__defaultLink.replace(this.__brandReg, "&brandId=");
        t += "&changeContent=crumbs_b";
        location.href = t };
    C.__onSkuMouseOver = function(t, e) {
        if ("cur" != t.className) {
            var n = t.parentNode,
                i = a._$getByClassName(n, "cur"),
                s = a._$attr(t, "proId"),
                o = t.children[0],
                r = o.src || a._$attr(o, "data-src"),
                l = n.parentNode.parentNode.parentNode,
                o = a._$getByClassName(l, "imgtag")[0],
                c = l.getElementsByTagName("a");
            if (i && i.length > 0)
                for (var d = 0, u = i.length; d < u; d++) a._$delClassName(i[d], "cur");
            a._$addClassName(t, "cur");
            if (s) { o.src = r.replace("thumbnail=30x30", "thumbnail=262x262");
                for (var h = 0, f = c.length, _; h < f; h++) { _ = c[h].href;
                    if (_.indexOf("skupvs") > 0) c[h].href = _.replace(/skupvs=[^&]+/gi, "skupvs=_" + s);
                    else if (_.indexOf("?") != -1) c[h].href = _ + "&skupvs=_" + s;
                    else c[h].href = _ + "?skupvs=_" + s } } } };
    C.__onSkuMouseOut = function(t) {};
    C.__onForwordSkuClick = function(t, e, n) {
        if (!(t.className.indexOf("arrowdis") >= 0)) {
            var i = t.parentNode,
                s = a._$getByClassName(i, "arrow"),
                o = s[0],
                r = s[1],
                l = i.getElementsByTagName("ul")[0],
                c = l.getElementsByTagName("li").length,
                d = Number(l.style.left.replace("px", "")) / 36;
            curIndex = d + 5 * e;
            a._$delClassName(r, "arrowdis-2");
            a._$delClassName(o, "arrowdis-1");
            if (curIndex >= 0) { a._$addClassName(o, "arrowdis-1");
                curIndex = 0 } else if (curIndex <= 5 - c) a._$addClassName(r, "arrowdis-2");
            l.style.left = 36 * curIndex + "px" } };
    C.__getUrlParam = function(t, e) {
        if (t.indexOf(e + "=") < 0) return "";
        else return (t + "&").split(e + "=")[1].split("&")[0] };
    C.__checkImg = function(t) {
        var e = nej.e._$attr(t.target, "data-src");
        if (!e || e == t.target.src) t.value = 0 };
    C.__onAppend = function(t) { t.stopped = !0;
        t.target.src = t.config.src;
        nej.e._$attr(t.target, "data-src", "");
        a._$delClassName(t.target, "img-lazyload") };
    C.__lazyImgTrigger = function() { this.__lazyImg.__doCheckScrollPosition() };
    C.__fixIERepaintBug = function() {
        if (this.__isIE67) document.body.className = document.body.className };
    C.__countDownInit = function() {
        var t = a._$get("countDown");
        if (t) {
            var e = a._$attr(t, "data-dvalue"),
                n = a._$getChildren(t)[1],
                i = a._$attr(n, "data-deadline");
            this.__countDown = p._$allocate({ parentnode: t, dvalue: e, deadline: i, nodeflag: "ttag" }) } };
    C.__initRecommend = function() {
        var t = [];
        o(".goods")._$forEach(function(e) {
            var n = o(e)._$children(".title", !0)[0] || {};
            var i = n.href || "";
            var a = /(\d+)/gi.exec(i);
            if (a && a[0]) t.push(a[0]) });
        var e = a._$get("recommendWrap");
        if (e) {
            var i = a._$getByClassName(e, "retag"),
                s, r;
            for (var l = 0, c = i.length; l < c; l++) { s = i[l];
                r = a._$attr(s, "searchkey");
                if (r) s.href = "/search.html?key=" + encodeURIComponent(encodeURIComponent(r)) } }
        var d = a._$get("recomGoodsWrap"),
            _ = a._$get("guess"),
            p = a._$get("recent");
        if (d) {
            var m = { strategy: "hot", goods_ids: t.join(","), limit: 5, type: 0, account: window.account || "", ver: 2, from: "pc", tongji: { category: "推荐区域展示", action: this.__gaText, lable: "大家都在买", position: this.__gaPosiiton + "：大家都在买", from: this.__gaFrom + "djdzm", query: "rp=" + this.__gaFrom + "&zp=djdzm&zn=rec&recId=" } };
            var g = new u({ data: { url: "/recommend/getRecommendGoods.html", condition: m, dapushParam: n.extend({ id: "recomGoodsWrap", module: "大家都在买" }, this.__dapushParam) } });
            g.$inject(d) }
        if (_) {
            var m = { strategy: "multi_items", goods_ids: t.join(","), limit: 5, type: 0, account: window.account || "", ver: 2, from: "pc", tongji: { category: "推荐区域展示", action: this.__gaText, lable: "猜你喜欢", position: this.__gaPosiiton + "：猜你喜欢", from: this.__gaFrom + "cnxh", query: "rp=" + this.__gaFrom + "&zp=cnxh&zn=rec&recId=" } };
            var v = new h({ data: { url: "/recommend/getRecommendGoods.html", condition: m, dapushParam: n.extend({ id: "guess", module: "猜你喜欢" }, this.__dapushParam) } });
            v.$inject(_) }
        if (p) {
            var m = { limit: 5, from: this.__gaFrom + "zjll", query: "rp=" + this.__gaFrom + "&zp=zjll&zn=rec&recId=", tongji: { category: "推荐区域展示", action: this.__gaText, lable: "最近浏览", position: this.__gaPosiiton + "：最近浏览" } };
            var $ = new f({ data: { url: "../recentlyViewAjax01.html", condition: m, dapushParam: n.extend({ id: "recent", module: "最近浏览" }, this.__dapushParam) } });
            $.$inject(p) } };
    C.__gtmCollect = function(t, e) {
        if ("navigation" == t) t = "category";
        g.gtmReady({ com_data: { page_type: t, items: e } }) };
    return v._$$SearchModule
}, 1, 2, 15, 3, 4, 23, 25, 6, 7, 8, 28, 81, 82, 159, 299, 49, 51, 44);
//# sourceMappingURL=./s/core.js.map
