/*!
 * Raphael 1.5.2 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://raphaeljs.com/license.html) license.
 */
(function () {
    function aI() {
        if (aI.is(arguments[0], a7)) {
            var b = arguments[0],
                d = F[bB](aI, b.splice(0, 4 + aI.is(b[0], aF))),
                R = d.set();
            for (var E = 0, S = b[s]; E < S; E++) {
                var e = b[E] || {};
                bp[ag](e.type) && R[k](d[e.type]().attr(e))
            }
            return R
        }
        return F[bB](aI, arguments)
    }
    aI.version = "1.5.2";
    var a = /[, ]+/,
        bp = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        },
        bn = /\{(\d+)\}/g,
        bE = "prototype",
        ag = "hasOwnProperty",
        aa = document,
        aQ = window,
        r = {
            was: Object[bE][ag].call(aQ, "Raphael"),
            is: aQ.Raphael
        },
        bz = function () {
            this.customAttributes = {}
        },
        aZ, bk = "appendChild",
        bB = "apply",
        bw = "concat",
        W = "createTouch" in aa,
        aP = "",
        aH = " ",
        bC = String,
        I = "split",
        Q = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend" [I](aH),
        bq = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        aW = "join",
        s = "length",
        bG = bC[bE].toLowerCase,
        ao = Math,
        m = ao.max,
        bi = ao.min,
        aq = ao.abs,
        bl = ao.pow,
        aM = ao.PI,
        aF = "number",
        af = "string",
        a7 = "array",
        a0 = "toString",
        a4 = "fill",
        aT = Object[bE][a0],
        bt = {},
        k = "push",
        h = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        G = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        ap = {
            "NaN": 1,
            "Infinity": 1,
            "-Infinity": 1
        },
        c = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        ad = ao.round,
        D = "setAttribute",
        aj = parseFloat,
        T = parseInt,
        a5 = " progid:DXImageTransform.Microsoft",
        bo = bC[bE].toUpperCase,
        q = {
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            opacity: 1,
            path: "M0,0",
            r: 0,
            rotation: 0,
            rx: 0,
            ry: 0,
            scale: "1 1",
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            translation: "0 0",
            width: 0,
            x: 0,
            y: 0
        },
        am = {
            along: "along",
            blur: aF,
            "clip-rect": "csv",
            cx: aF,
            cy: aF,
            fill: "colour",
            "fill-opacity": aF,
            "font-size": aF,
            height: aF,
            opacity: aF,
            path: "path",
            r: aF,
            rotation: "csv",
            rx: aF,
            ry: aF,
            scale: "csv",
            stroke: "colour",
            "stroke-opacity": aF,
            "stroke-width": aF,
            translation: "csv",
            width: aF,
            x: aF,
            y: aF
        },
        bs = "replace",
        bf = /^(from|to|\d+%?)$/,
        bd = /\s*,\s*/,
        n = {
            hs: 1,
            rg: 1
        },
        ba = /,?([achlmqrstvxz]),?/gi,
        aR = /([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,
        aG = /(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig,
        aO = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,
        bm = function (e, d) {
            return e.key - d.key
        };
    aI.type = (aQ.SVGAngle || aa.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
    if (aI.type == "VML") {
        var ax = aa.createElement("div"),
            aB;
        ax.innerHTML = '<v:shape adj="1"/>';
        aB = ax.firstChild;
        aB.style.behavior = "url(#default#VML)";
        if (!(aB && typeof aB.adj == "object")) {
            return aI.type = null
        }
        ax = null
    }
    aI.svg = !(aI.vml = aI.type == "VML");
    bz[bE] = aI[bE];
    aZ = bz[bE];
    aI._id = 0;
    aI._oid = 0;
    aI.fn = {};
    aI.is = function (d, b) {
        b = bG.call(b);
        if (b == "finite") {
            return !ap[ag](+d)
        }
        return (b == "null" && d === null) || (b == typeof d) || (b == "object" && d === Object(d)) || (b == "array" && Array.isArray && Array.isArray(d)) || aT.call(d).slice(8, -1).toLowerCase() == b
    };
    aI.angle = function (E, S, e, R, d, i) {
        if (d == null) {
            var b = E - e,
                bH = S - R;
            if (!b && !bH) {
                return 0
            }
            return ((b < 0) * 180 + ao.atan(-bH / -b) * 180 / aM + 360) % 360
        } else {
            return aI.angle(E, S, d, i) - aI.angle(e, R, d, i)
        }
    };
    aI.rad = function (b) {
        return b % 360 * aM / 180
    };
    aI.deg = function (b) {
        return b * 180 / aM % 360
    };
    aI.snapTo = function (d, E, b) {
        b = aI.is(b, "finite") ? b : 10;
        if (aI.is(d, a7)) {
            var e = d.length;
            while (e--) {
                if (aq(d[e] - E) <= b) {
                    return d[e]
                }
            }
        } else {
            d = +d;
            var R = E % d;
            if (R < b) {
                return E - R
            }
            if (R > d - b) {
                return E - R + d
            }
        }
        return E
    };

    function j() {
        var d = [],
            b = 0;
        for (; b < 32; b++) {
            d[b] = (~~(ao.random() * 16))[a0](16)
        }
        d[12] = 4;
        d[16] = ((d[16] & 3) | 8)[a0](16);
        return "r-" + d[aW]("")
    }
    aI.setWindow = function (b) {
        aQ = b;
        aa = aQ.document
    };
    var a9 = function (E) {
            if (aI.vml) {
                var b = /^\s+|\s+$/g;
                var S;
                try {
                    var bH = new ActiveXObject("htmlfile");
                    bH.write("<body>");
                    bH.close();
                    S = bH.body
                } catch (bI) {
                    S = createPopup().document.body
                }
                var d = S.createTextRange();
                a9 = aA(function (i) {
                    try {
                        S.style.color = bC(i)[bs](b, aP);
                        var bJ = d.queryCommandValue("ForeColor");
                        bJ = ((bJ & 255) << 16) | (bJ & 65280) | ((bJ & 16711680) >>> 16);
                        return "#" + ("000000" + bJ[a0](16)).slice(-6)
                    } catch (bK) {
                        return "none"
                    }
                })
            } else {
                var R = aa.createElement("i");
                R.title = "Rapha\xebl Colour Picker";
                R.style.display = "none";
                aa.body[bk](R);
                a9 = aA(function (e) {
                    R.style.color = e;
                    return aa.defaultView.getComputedStyle(R, aP).getPropertyValue("color")
                })
            }
            return a9(E)
        },
        aC = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        M = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        B = function () {
            return this.hex
        };
    aI.hsb2rgb = function (i, e, d, E) {
        if (aI.is(i, "object") && "h" in i && "s" in i && "b" in i) {
            d = i.b;
            e = i.s;
            i = i.h;
            E = i.o
        }
        return aI.hsl2rgb(i, e, d / 2, E)
    };
    aI.hsl2rgb = function (bH, bO, E, e) {
        if (aI.is(bH, "object") && "h" in bH && "s" in bH && "l" in bH) {
            E = bH.l;
            bO = bH.s;
            bH = bH.h
        }
        if (bH > 1 || bO > 1 || E > 1) {
            bH /= 360;
            bO /= 100;
            E /= 100
        }
        var bM = {},
            bJ = ["r", "g", "b"],
            bI, bL, S, d, bK, bN;
        if (!bO) {
            bM = {
                r: E,
                g: E,
                b: E
            }
        } else {
            if (E < 0.5) {
                bI = E * (1 + bO)
            } else {
                bI = E + bO - E * bO
            }
            bL = 2 * E - bI;
            for (var R = 0; R < 3; R++) {
                S = bH + 1 / 3 * -(R - 1);
                S < 0 && S++;
                S > 1 && S--;
                if (S * 6 < 1) {
                    bM[bJ[R]] = bL + (bI - bL) * 6 * S
                } else {
                    if (S * 2 < 1) {
                        bM[bJ[R]] = bI
                    } else {
                        if (S * 3 < 2) {
                            bM[bJ[R]] = bL + (bI - bL) * (2 / 3 - S) * 6
                        } else {
                            bM[bJ[R]] = bL
                        }
                    }
                }
            }
        }
        bM.r *= 255;
        bM.g *= 255;
        bM.b *= 255;
        bM.hex = "#" + (16777216 | bM.b | (bM.g << 8) | (bM.r << 16)).toString(16).slice(1);
        aI.is(e, "finite") && (bM.opacity = e);
        bM.toString = B;
        return bM
    };
    aI.rgb2hsb = function (b, d, bH) {
        if (d == null && aI.is(b, "object") && "r" in b && "g" in b && "b" in b) {
            bH = b.b;
            d = b.g;
            b = b.r
        }
        if (d == null && aI.is(b, af)) {
            var bJ = aI.getRGB(b);
            b = bJ.r;
            d = bJ.g;
            bH = bJ.b
        }
        if (b > 1 || d > 1 || bH > 1) {
            b /= 255;
            d /= 255;
            bH /= 255
        }
        var S = m(b, d, bH),
            e = bi(b, d, bH),
            E, i, R = S;
        if (e == S) {
            return {
                h: 0,
                s: 0,
                b: S,
                toString: aC
            }
        } else {
            var bI = (S - e);
            i = bI / S;
            if (b == S) {
                E = (d - bH) / bI
            } else {
                if (d == S) {
                    E = 2 + ((bH - b) / bI)
                } else {
                    E = 4 + ((b - d) / bI)
                }
            }
            E /= 6;
            E < 0 && E++;
            E > 1 && E--
        }
        return {
            h: E,
            s: i,
            b: R,
            toString: aC
        }
    };
    aI.rgb2hsl = function (d, e, S) {
        if (e == null && aI.is(d, "object") && "r" in d && "g" in d && "b" in d) {
            S = d.b;
            e = d.g;
            d = d.r
        }
        if (e == null && aI.is(d, af)) {
            var bK = aI.getRGB(d);
            d = bK.r;
            e = bK.g;
            S = bK.b
        }
        if (d > 1 || e > 1 || S > 1) {
            d /= 255;
            e /= 255;
            S /= 255
        }
        var R = m(d, e, S),
            i = bi(d, e, S),
            E, bJ, b = (R + i) / 2,
            bI;
        if (i == R) {
            bI = {
                h: 0,
                s: 0,
                l: b
            }
        } else {
            var bH = R - i;
            bJ = b < 0.5 ? bH / (R + i) : bH / (2 - R - i);
            if (d == R) {
                E = (e - S) / bH
            } else {
                if (e == R) {
                    E = 2 + (S - d) / bH
                } else {
                    E = 4 + (d - e) / bH
                }
            }
            E /= 6;
            E < 0 && E++;
            E > 1 && E--;
            bI = {
                h: E,
                s: bJ,
                l: b
            }
        }
        bI.toString = M;
        return bI
    };
    aI._path2string = function () {
        return this.join(",")[bs](ba, "$1")
    };

    function aA(i, d, b) {
        function e() {
            var E = Array[bE].slice.call(arguments, 0),
                S = E[aW]("\u25ba"),
                R = e.cache = e.cache || {},
                bH = e.count = e.count || [];
            if (R[ag](S)) {
                return b ? b(R[S]) : R[S]
            }
            bH[s] >= 1000 && delete R[bH.shift()];
            bH[k](S);
            R[S] = i[bB](d, E);
            return b ? b(R[S]) : R[S]
        }
        return e
    }
    aI.getRGB = aA(function (b) {
        if (!b || !!((b = bC(b)).indexOf("-") + 1)) {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1
            }
        }
        if (b == "none") {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none"
            }
        }!(n[ag](b.toLowerCase().substring(0, 2)) || b.charAt() == "#") && (b = a9(b));
        var E, d, e, S, i, bI, bH, R = b.match(G);
        if (R) {
            if (R[2]) {
                S = T(R[2].substring(5), 16);
                e = T(R[2].substring(3, 5), 16);
                d = T(R[2].substring(1, 3), 16)
            }
            if (R[3]) {
                S = T((bI = R[3].charAt(3)) + bI, 16);
                e = T((bI = R[3].charAt(2)) + bI, 16);
                d = T((bI = R[3].charAt(1)) + bI, 16)
            }
            if (R[4]) {
                bH = R[4][I](bd);
                d = aj(bH[0]);
                bH[0].slice(-1) == "%" && (d *= 2.55);
                e = aj(bH[1]);
                bH[1].slice(-1) == "%" && (e *= 2.55);
                S = aj(bH[2]);
                bH[2].slice(-1) == "%" && (S *= 2.55);
                R[1].toLowerCase().slice(0, 4) == "rgba" && (i = aj(bH[3]));
                bH[3] && bH[3].slice(-1) == "%" && (i /= 100)
            }
            if (R[5]) {
                bH = R[5][I](bd);
                d = aj(bH[0]);
                bH[0].slice(-1) == "%" && (d *= 2.55);
                e = aj(bH[1]);
                bH[1].slice(-1) == "%" && (e *= 2.55);
                S = aj(bH[2]);
                bH[2].slice(-1) == "%" && (S *= 2.55);
                (bH[0].slice(-3) == "deg" || bH[0].slice(-1) == "\xb0") && (d /= 360);
                R[1].toLowerCase().slice(0, 4) == "hsba" && (i = aj(bH[3]));
                bH[3] && bH[3].slice(-1) == "%" && (i /= 100);
                return aI.hsb2rgb(d, e, S, i)
            }
            if (R[6]) {
                bH = R[6][I](bd);
                d = aj(bH[0]);
                bH[0].slice(-1) == "%" && (d *= 2.55);
                e = aj(bH[1]);
                bH[1].slice(-1) == "%" && (e *= 2.55);
                S = aj(bH[2]);
                bH[2].slice(-1) == "%" && (S *= 2.55);
                (bH[0].slice(-3) == "deg" || bH[0].slice(-1) == "\xb0") && (d /= 360);
                R[1].toLowerCase().slice(0, 4) == "hsla" && (i = aj(bH[3]));
                bH[3] && bH[3].slice(-1) == "%" && (i /= 100);
                return aI.hsl2rgb(d, e, S, i)
            }
            R = {
                r: d,
                g: e,
                b: S
            };
            R.hex = "#" + (16777216 | S | (e << 8) | (d << 16)).toString(16).slice(1);
            aI.is(i, "finite") && (R.opacity = i);
            return R
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1
        }
    }, aI);
    aI.getColor = function (d) {
        var e = this.getColor.start = this.getColor.start || {
                h: 0,
                s: 1,
                b: d || 0.75
            },
            b = this.hsb2rgb(e.h, e.s, e.b);
        e.h += 0.075;
        if (e.h > 1) {
            e.h = 0;
            e.s -= 0.2;
            e.s <= 0 && (this.getColor.start = {
                h: 0,
                s: 1,
                b: e.b
            })
        }
        return b.hex
    };
    aI.getColor.reset = function () {
        delete this.start
    };
    aI.parsePathString = aA(function (b) {
        if (!b) {
            return null
        }
        var e = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            d = [];
        if (aI.is(b, a7) && aI.is(b[0], a7)) {
            d = aS(b)
        }
        if (!d[s]) {
            bC(b)[bs](aR, function (E, i, bH) {
                var S = [],
                    R = bG.call(i);
                bH[bs](aG, function (bJ, bI) {
                    bI && S[k](+bI)
                });
                if (R == "m" && S[s] > 2) {
                    d[k]([i][bw](S.splice(0, 2)));
                    R = "l";
                    i = i == "m" ? "l" : "L"
                }
                while (S[s] >= e[R]) {
                    d[k]([i][bw](S.splice(0, e[R])));
                    if (!e[R]) {
                        break
                    }
                }
            })
        }
        d[a0] = aI._path2string;
        return d
    });
    aI.findDotsAtSegment = function (d, b, bU, bS, S, E, bI, bH, bO) {
        var bM = 1 - bO,
            bL = bl(bM, 3) * d + bl(bM, 2) * 3 * bO * bU + bM * 3 * bO * bO * S + bl(bO, 3) * bI,
            bJ = bl(bM, 3) * b + bl(bM, 2) * 3 * bO * bS + bM * 3 * bO * bO * E + bl(bO, 3) * bH,
            bQ = d + 2 * bO * (bU - d) + bO * bO * (S - 2 * bU + d),
            bP = b + 2 * bO * (bS - b) + bO * bO * (E - 2 * bS + b),
            bT = bU + 2 * bO * (S - bU) + bO * bO * (bI - 2 * S + bU),
            bR = bS + 2 * bO * (E - bS) + bO * bO * (bH - 2 * E + bS),
            bN = (1 - bO) * d + bO * bU,
            bK = (1 - bO) * b + bO * bS,
            i = (1 - bO) * S + bO * bI,
            e = (1 - bO) * E + bO * bH,
            R = (90 - ao.atan((bQ - bT) / (bP - bR)) * 180 / aM);
        (bQ > bT || bP < bR) && (R += 180);
        return {
            x: bL,
            y: bJ,
            m: {
                x: bQ,
                y: bP
            },
            n: {
                x: bT,
                y: bR
            },
            start: {
                x: bN,
                y: bK
            },
            end: {
                x: i,
                y: e
            },
            alpha: R
        }
    };
    var ai = aA(function (bL) {
            if (!bL) {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
            bL = V(bL);
            var bI = 0,
                bH = 0,
                E = [],
                d = [],
                e;
            for (var R = 0, bK = bL[s]; R < bK; R++) {
                e = bL[R];
                if (e[0] == "M") {
                    bI = e[1];
                    bH = e[2];
                    E[k](bI);
                    d[k](bH)
                } else {
                    var S = a6(bI, bH, e[1], e[2], e[3], e[4], e[5], e[6]);
                    E = E[bw](S.min.x, S.max.x);
                    d = d[bw](S.min.y, S.max.y);
                    bI = e[5];
                    bH = e[6]
                }
            }
            var b = bi[bB](0, E),
                bJ = bi[bB](0, d);
            return {
                x: b,
                y: bJ,
                width: m[bB](0, E) - b,
                height: m[bB](0, d) - bJ
            }
        }),
        aS = function (S) {
            var e = [];
            if (!aI.is(S, a7) || !aI.is(S && S[0], a7)) {
                S = aI.parsePathString(S)
            }
            for (var d = 0, E = S[s]; d < E; d++) {
                e[d] = [];
                for (var b = 0, R = S[d][s]; b < R; b++) {
                    e[d][b] = S[d][b]
                }
            }
            e[a0] = aI._path2string;
            return e
        },
        au = aA(function (E) {
            if (!aI.is(E, a7) || !aI.is(E && E[0], a7)) {
                E = aI.parsePathString(E)
            }
            var bK = [],
                bM = 0,
                bL = 0,
                bP = 0,
                bO = 0,
                e = 0;
            if (E[0][0] == "M") {
                bM = E[0][1];
                bL = E[0][2];
                bP = bM;
                bO = bL;
                e++;
                bK[k](["M", bM, bL])
            }
            for (var bH = e, bQ = E[s]; bH < bQ; bH++) {
                var b = bK[bH] = [],
                    bN = E[bH];
                if (bN[0] != bG.call(bN[0])) {
                    b[0] = bG.call(bN[0]);
                    switch (b[0]) {
                        case "a":
                            b[1] = bN[1];
                            b[2] = bN[2];
                            b[3] = bN[3];
                            b[4] = bN[4];
                            b[5] = bN[5];
                            b[6] = +(bN[6] - bM).toFixed(3);
                            b[7] = +(bN[7] - bL).toFixed(3);
                            break;
                        case "v":
                            b[1] = +(bN[1] - bL).toFixed(3);
                            break;
                        case "m":
                            bP = bN[1];
                            bO = bN[2];
                        default:
                            for (var S = 1, bI = bN[s]; S < bI; S++) {
                                b[S] = +(bN[S] - ((S % 2) ? bM : bL)).toFixed(3)
                            }
                    }
                } else {
                    b = bK[bH] = [];
                    if (bN[0] == "m") {
                        bP = bN[1] + bM;
                        bO = bN[2] + bL
                    }
                    for (var R = 0, d = bN[s]; R < d; R++) {
                        bK[bH][R] = bN[R]
                    }
                }
                var bJ = bK[bH][s];
                switch (bK[bH][0]) {
                    case "z":
                        bM = bP;
                        bL = bO;
                        break;
                    case "h":
                        bM += +bK[bH][bJ - 1];
                        break;
                    case "v":
                        bL += +bK[bH][bJ - 1];
                        break;
                    default:
                        bM += +bK[bH][bJ - 2];
                        bL += +bK[bH][bJ - 1]
                }
            }
            bK[a0] = aI._path2string;
            return bK
        }, 0, aS),
        y = aA(function (E) {
            if (!aI.is(E, a7) || !aI.is(E && E[0], a7)) {
                E = aI.parsePathString(E)
            }
            var bJ = [],
                bL = 0,
                bK = 0,
                bO = 0,
                bN = 0,
                e = 0;
            if (E[0][0] == "M") {
                bL = +E[0][1];
                bK = +E[0][2];
                bO = bL;
                bN = bK;
                e++;
                bJ[0] = ["M", bL, bK]
            }
            for (var bH = e, bP = E[s]; bH < bP; bH++) {
                var b = bJ[bH] = [],
                    bM = E[bH];
                if (bM[0] != bo.call(bM[0])) {
                    b[0] = bo.call(bM[0]);
                    switch (b[0]) {
                        case "A":
                            b[1] = bM[1];
                            b[2] = bM[2];
                            b[3] = bM[3];
                            b[4] = bM[4];
                            b[5] = bM[5];
                            b[6] = +(bM[6] + bL);
                            b[7] = +(bM[7] + bK);
                            break;
                        case "V":
                            b[1] = +bM[1] + bK;
                            break;
                        case "H":
                            b[1] = +bM[1] + bL;
                            break;
                        case "M":
                            bO = +bM[1] + bL;
                            bN = +bM[2] + bK;
                        default:
                            for (var S = 1, bI = bM[s]; S < bI; S++) {
                                b[S] = +bM[S] + ((S % 2) ? bL : bK)
                            }
                    }
                } else {
                    for (var R = 0, d = bM[s]; R < d; R++) {
                        bJ[bH][R] = bM[R]
                    }
                }
                switch (b[0]) {
                    case "Z":
                        bL = bO;
                        bK = bN;
                        break;
                    case "H":
                        bL = b[1];
                        break;
                    case "V":
                        bK = b[1];
                        break;
                    case "M":
                        bO = bJ[bH][bJ[bH][s] - 2];
                        bN = bJ[bH][bJ[bH][s] - 1];
                    default:
                        bL = bJ[bH][bJ[bH][s] - 2];
                        bK = bJ[bH][bJ[bH][s] - 1]
                }
            }
            bJ[a0] = aI._path2string;
            return bJ
        }, null, aS),
        bD = function (d, i, b, e) {
            return [d, i, b, e, b, e]
        },
        bj = function (d, i, S, E, b, e) {
            var R = 1 / 3,
                bH = 2 / 3;
            return [R * d + bH * S, R * i + bH * E, R * b + bH * S, R * e + bH * E, b, e]
        },
        Z = function (bO, cj, bX, bV, bP, bJ, E, bN, ci, bQ) {
            var bU = aM * 120 / 180,
                b = aM / 180 * (+bP || 0),
                b1 = [],
                bY, cf = aA(function (ck, cn, i) {
                    var cm = ck * ao.cos(i) - cn * ao.sin(i),
                        cl = ck * ao.sin(i) + cn * ao.cos(i);
                    return {
                        x: cm,
                        y: cl
                    }
                });
            if (!bQ) {
                bY = cf(bO, cj, -b);
                bO = bY.x;
                cj = bY.y;
                bY = cf(bN, ci, -b);
                bN = bY.x;
                ci = bY.y;
                var d = ao.cos(aM / 180 * bP),
                    bL = ao.sin(aM / 180 * bP),
                    b3 = (bO - bN) / 2,
                    b2 = (cj - ci) / 2;
                var cd = (b3 * b3) / (bX * bX) + (b2 * b2) / (bV * bV);
                if (cd > 1) {
                    cd = ao.sqrt(cd);
                    bX = cd * bX;
                    bV = cd * bV
                }
                var e = bX * bX,
                    b6 = bV * bV,
                    b8 = (bJ == E ? -1 : 1) * ao.sqrt(aq((e * b6 - e * b2 * b2 - b6 * b3 * b3) / (e * b2 * b2 + b6 * b3 * b3))),
                    bS = b8 * bX * b2 / bV + (bO + bN) / 2,
                    bR = b8 * -bV * b3 / bX + (cj + ci) / 2,
                    bI = ao.asin(((cj - bR) / bV).toFixed(9)),
                    bH = ao.asin(((ci - bR) / bV).toFixed(9));
                bI = bO < bS ? aM - bI : bI;
                bH = bN < bS ? aM - bH : bH;
                bI < 0 && (bI = aM * 2 + bI);
                bH < 0 && (bH = aM * 2 + bH);
                if (E && bI > bH) {
                    bI = bI - aM * 2
                }
                if (!E && bH > bI) {
                    bH = bH - aM * 2
                }
            } else {
                bI = bQ[0];
                bH = bQ[1];
                bS = bQ[2];
                bR = bQ[3]
            }
            var bM = bH - bI;
            if (aq(bM) > bU) {
                var bT = bH,
                    bW = bN,
                    bK = ci;
                bH = bI + bU * (E && bH > bI ? 1 : -1);
                bN = bS + bX * ao.cos(bH);
                ci = bR + bV * ao.sin(bH);
                b1 = Z(bN, ci, bX, bV, bP, 0, E, bW, bK, [bH, bT, bS, bR])
            }
            bM = bH - bI;
            var S = ao.cos(bI),
                ch = ao.sin(bI),
                R = ao.cos(bH),
                cg = ao.sin(bH),
                b4 = ao.tan(bM / 4),
                b7 = 4 / 3 * bX * b4,
                b5 = 4 / 3 * bV * b4,
                ce = [bO, cj],
                cc = [bO + b7 * ch, cj - b5 * S],
                cb = [bN + b7 * cg, ci - b5 * R],
                b9 = [bN, ci];
            cc[0] = 2 * ce[0] - cc[0];
            cc[1] = 2 * ce[1] - cc[1];
            if (bQ) {
                return [cc, cb, b9][bw](b1)
            } else {
                b1 = [cc, cb, b9][bw](b1)[aW]()[I](",");
                var bZ = [];
                for (var ca = 0, b0 = b1[s]; ca < b0; ca++) {
                    bZ[ca] = ca % 2 ? cf(b1[ca - 1], b1[ca], b).y : cf(b1[ca], b1[ca + 1], b).x
                }
                return bZ
            }
        },
        ac = function (d, b, i, e, bI, bH, S, R, bJ) {
            var E = 1 - bJ;
            return {
                x: bl(E, 3) * d + bl(E, 2) * 3 * bJ * i + E * 3 * bJ * bJ * bI + bl(bJ, 3) * S,
                y: bl(E, 3) * b + bl(E, 2) * 3 * bJ * e + E * 3 * bJ * bJ * bH + bl(bJ, 3) * R
            }
        },
        a6 = aA(function (i, d, R, E, bQ, bP, bM, bJ) {
            var bO = (bQ - 2 * R + i) - (bM - 2 * bQ + R),
                bL = 2 * (R - i) - 2 * (bQ - R),
                bI = i - R,
                bH = (-bL + ao.sqrt(bL * bL - 4 * bO * bI)) / 2 / bO,
                S = (-bL - ao.sqrt(bL * bL - 4 * bO * bI)) / 2 / bO,
                bK = [d, bJ],
                bN = [i, bM],
                e;
            aq(bH) > "1e12" && (bH = 0.5);
            aq(S) > "1e12" && (S = 0.5);
            if (bH > 0 && bH < 1) {
                e = ac(i, d, R, E, bQ, bP, bM, bJ, bH);
                bN[k](e.x);
                bK[k](e.y)
            }
            if (S > 0 && S < 1) {
                e = ac(i, d, R, E, bQ, bP, bM, bJ, S);
                bN[k](e.x);
                bK[k](e.y)
            }
            bO = (bP - 2 * E + d) - (bJ - 2 * bP + E);
            bL = 2 * (E - d) - 2 * (bP - E);
            bI = d - E;
            bH = (-bL + ao.sqrt(bL * bL - 4 * bO * bI)) / 2 / bO;
            S = (-bL - ao.sqrt(bL * bL - 4 * bO * bI)) / 2 / bO;
            aq(bH) > "1e12" && (bH = 0.5);
            aq(S) > "1e12" && (S = 0.5);
            if (bH > 0 && bH < 1) {
                e = ac(i, d, R, E, bQ, bP, bM, bJ, bH);
                bN[k](e.x);
                bK[k](e.y)
            }
            if (S > 0 && S < 1) {
                e = ac(i, d, R, E, bQ, bP, bM, bJ, S);
                bN[k](e.x);
                bK[k](e.y)
            }
            return {
                min: {
                    x: bi[bB](0, bN),
                    y: bi[bB](0, bK)
                },
                max: {
                    x: m[bB](0, bN),
                    y: m[bB](0, bK)
                }
            }
        }),
        V = aA(function (bP, bK) {
            var E = y(bP),
                bL = bK && y(bK),
                bM = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                b = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                S = function (bQ, bR) {
                    var i, bS;
                    if (!bQ) {
                        return ["C", bR.x, bR.y, bR.x, bR.y, bR.x, bR.y]
                    }!(bQ[0] in {
                        T: 1,
                        Q: 1
                    }) && (bR.qx = bR.qy = null);
                    switch (bQ[0]) {
                        case "M":
                            bR.X = bQ[1];
                            bR.Y = bQ[2];
                            break;
                        case "A":
                            bQ = ["C"][bw](Z[bB](0, [bR.x, bR.y][bw](bQ.slice(1))));
                            break;
                        case "S":
                            i = bR.x + (bR.x - (bR.bx || bR.x));
                            bS = bR.y + (bR.y - (bR.by || bR.y));
                            bQ = ["C", i, bS][bw](bQ.slice(1));
                            break;
                        case "T":
                            bR.qx = bR.x + (bR.x - (bR.qx || bR.x));
                            bR.qy = bR.y + (bR.y - (bR.qy || bR.y));
                            bQ = ["C"][bw](bj(bR.x, bR.y, bR.qx, bR.qy, bQ[1], bQ[2]));
                            break;
                        case "Q":
                            bR.qx = bQ[1];
                            bR.qy = bQ[2];
                            bQ = ["C"][bw](bj(bR.x, bR.y, bQ[1], bQ[2], bQ[3], bQ[4]));
                            break;
                        case "L":
                            bQ = ["C"][bw](bD(bR.x, bR.y, bQ[1], bQ[2]));
                            break;
                        case "H":
                            bQ = ["C"][bw](bD(bR.x, bR.y, bQ[1], bR.y));
                            break;
                        case "V":
                            bQ = ["C"][bw](bD(bR.x, bR.y, bR.x, bQ[1]));
                            break;
                        case "Z":
                            bQ = ["C"][bw](bD(bR.x, bR.y, bR.X, bR.Y));
                            break
                    }
                    return bQ
                },
                d = function (bQ, bR) {
                    if (bQ[bR][s] > 7) {
                        bQ[bR].shift();
                        var bS = bQ[bR];
                        while (bS[s]) {
                            bQ.splice(bR++, 0, ["C"][bw](bS.splice(0, 6)))
                        }
                        bQ.splice(bR, 1);
                        bN = m(E[s], bL && bL[s] || 0)
                    }
                },
                e = function (bU, bT, bR, bQ, bS) {
                    if (bU && bT && bU[bS][0] == "M" && bT[bS][0] != "M") {
                        bT.splice(bS, 0, ["M", bQ.x, bQ.y]);
                        bR.bx = 0;
                        bR.by = 0;
                        bR.x = bU[bS][1];
                        bR.y = bU[bS][2];
                        bN = m(E[s], bL && bL[s] || 0)
                    }
                };
            for (var bI = 0, bN = m(E[s], bL && bL[s] || 0); bI < bN; bI++) {
                E[bI] = S(E[bI], bM);
                d(E, bI);
                bL && (bL[bI] = S(bL[bI], b));
                bL && d(bL, bI);
                e(E, bL, bM, b, bI);
                e(bL, E, b, bM, bI);
                var bH = E[bI],
                    bO = bL && bL[bI],
                    R = bH[s],
                    bJ = bL && bO[s];
                bM.x = bH[R - 2];
                bM.y = bH[R - 1];
                bM.bx = aj(bH[R - 4]) || bM.x;
                bM.by = aj(bH[R - 3]) || bM.y;
                b.bx = bL && (aj(bO[bJ - 4]) || b.x);
                b.by = bL && (aj(bO[bJ - 3]) || b.y);
                b.x = bL && bO[bJ - 2];
                b.y = bL && bO[bJ - 1]
            }
            return bL ? [E, bL] : E
        }, null, aS),
        w = aA(function (bK) {
            var bJ = [];
            for (var S = 0, bL = bK[s]; S < bL; S++) {
                var b = {},
                    bI = bK[S].match(/^([^:]*):?([\d\.]*)/);
                b.color = aI.getRGB(bI[1]);
                if (b.color.error) {
                    return null
                }
                b.color = b.color.hex;
                bI[2] && (b.offset = bI[2] + "%");
                bJ[k](b)
            }
            for (S = 1, bL = bJ[s] - 1; S < bL; S++) {
                if (!bJ[S].offset) {
                    var e = aj(bJ[S - 1].offset || 0),
                        E = 0;
                    for (var R = S + 1; R < bL; R++) {
                        if (bJ[R].offset) {
                            E = bJ[R].offset;
                            break
                        }
                    }
                    if (!E) {
                        E = 100;
                        R = bL
                    }
                    E = aj(E);
                    var bH = (E - e) / (R - S + 1);
                    for (; S < R; S++) {
                        e += bH;
                        bJ[S].offset = e + "%"
                    }
                }
            }
            return bJ
        }),
        aJ = function (b, S, e, i, R, E) {
            var d;
            if (aI.is(b, af) || aI.is(b, "object")) {
                d = aI.is(b, af) ? aa.getElementById(b) : b;
                if (d.tagName) {
                    if (S == null) {
                        return {
                            container: d,
                            width: d.style.pixelWidth || d.offsetWidth,
                            height: d.style.pixelHeight || d.offsetHeight
                        }
                    } else {
                        return {
                            container: d,
                            width: S,
                            height: e,
                            viewBox: i,
                            vmlSize: R
                        }
                    }
                }
            } else {
                return {
                    container: 1,
                    x: b,
                    y: S,
                    width: e,
                    height: i,
                    viewBox: R,
                    vmlSize: E
                }
            }
        },
        be = function (b, e) {
            var d = this;
            for (var i in e) {
                if (e[ag](i) && !(i in b)) {
                    switch (typeof e[i]) {
                        case "function":
                            (function (E) {
                                b[i] = b === d ? E : function () {
                                    return E[bB](d, arguments)
                                }
                            })(e[i]);
                            break;
                        case "object":
                            b[i] = b[i] || {};
                            be.call(this, b[i], e[i]);
                            break;
                        default:
                            b[i] = e[i];
                            break
                    }
                }
            }
        },
        aE = function (b, d) {
            b == d.top && (d.top = b.prev);
            b == d.bottom && (d.bottom = b.next);
            b.next && (b.next.prev = b.prev);
            b.prev && (b.prev.next = b.next)
        },
        al = function (b, d) {
            if (d.top === b) {
                return
            }
            aE(b, d);
            b.next = null;
            b.prev = d.top;
            d.top.next = b;
            d.top = b
        },
        p = function (b, d) {
            if (d.bottom === b) {
                return
            }
            aE(b, d);
            b.next = d.bottom;
            b.prev = null;
            d.bottom.prev = b;
            d.bottom = b
        },
        J = function (d, b, e) {
            aE(d, e);
            b == e.top && (e.top = d);
            b.next && (b.next.prev = d);
            d.next = b.next;
            d.prev = b;
            b.next = d
        },
        aL = function (d, b, e) {
            aE(d, e);
            b == e.bottom && (e.bottom = d);
            b.prev && (b.prev.next = d);
            d.prev = b.prev;
            b.prev = d;
            d.next = b
        },
        z = function (b) {
            return function () {
                throw new Error("Rapha\xebl: you are calling to method \u201c" + b + "\u201d of removed object")
            }
        };
    aI.pathToRelative = au;
    if (aI.svg) {
        aZ.svgns = "http://www.w3.org/2000/svg";
        aZ.xlink = "http://www.w3.org/1999/xlink";
        ad = function (b) {
            return +b + (~~b === b) * 0.5
        };
        var bh = function (e, b) {
            if (b) {
                for (var d in b) {
                    if (b[ag](d)) {
                        e[D](d, bC(b[d]))
                    }
                }
            } else {
                e = aa.createElementNS(aZ.svgns, e);
                e.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
                return e
            }
        };
        aI[a0] = function () {
            return "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version
        };
        var x = function (b, i) {
            var d = bh("path");
            i.canvas && i.canvas[bk](d);
            var e = new aU(d, i);
            e.type = "path";
            an(e, {
                fill: "none",
                stroke: "#000",
                path: b
            });
            return e
        };
        var g = function (E, bO, b) {
            var bL = "linear",
                bI = 0.5,
                S = 0.5,
                bQ = E.style;
            bO = bC(bO)[bs](aO, function (bS, i, bT) {
                bL = "radial";
                if (i && bT) {
                    bI = aj(i);
                    S = aj(bT);
                    var bR = ((S > 0.5) * 2 - 1);
                    bl(bI - 0.5, 2) + bl(S - 0.5, 2) > 0.25 && (S = ao.sqrt(0.25 - bl(bI - 0.5, 2)) * bR + 0.5) && S != 0.5 && (S = S.toFixed(5) - 0.00001 * bR)
                }
                return aP
            });
            bO = bO[I](/\s*\-\s*/);
            if (bL == "linear") {
                var bH = bO.shift();
                bH = -aj(bH);
                if (isNaN(bH)) {
                    return null
                }
                var R = [0, 0, ao.cos(bH * aM / 180), ao.sin(bH * aM / 180)],
                    bN = 1 / (m(aq(R[2]), aq(R[3])) || 1);
                R[2] *= bN;
                R[3] *= bN;
                if (R[2] < 0) {
                    R[0] = -R[2];
                    R[2] = 0
                }
                if (R[3] < 0) {
                    R[1] = -R[3];
                    R[3] = 0
                }
            }
            var bK = w(bO);
            if (!bK) {
                return null
            }
            var d = E.getAttribute(a4);
            d = d.match(/^url\(#(.*)\)$/);
            d && b.defs.removeChild(aa.getElementById(d[1]));
            var e = bh(bL + "Gradient");
            e.id = j();
            bh(e, bL == "radial" ? {
                fx: bI,
                fy: S
            } : {
                x1: R[0],
                y1: R[1],
                x2: R[2],
                y2: R[3]
            });
            b.defs[bk](e);
            for (var bJ = 0, bP = bK[s]; bJ < bP; bJ++) {
                var bM = bh("stop");
                bh(bM, {
                    offset: bK[bJ].offset ? bK[bJ].offset : !bJ ? "0%" : "100%",
                    "stop-color": bK[bJ].color || "#fff"
                });
                e[bk](bM)
            }
            bh(E, {
                fill: "url(#" + e.id + ")",
                opacity: 1,
                "fill-opacity": 1
            });
            bQ.fill = aP;
            bQ.opacity = 1;
            bQ.fillOpacity = 1;
            return 1
        };
        var ab = function (d) {
            var b = d.getBBox();
            bh(d.pattern, {
                patternTransform: aI.format("translate({0},{1})", b.x, b.y)
            })
        };
        var an = function (bN, bW) {
            var bQ = {
                    "": [0],
                    none: [0],
                    "-": [3, 1],
                    ".": [1, 1],
                    "-.": [3, 1, 1, 1],
                    "-..": [3, 1, 1, 1, 1, 1],
                    ". ": [1, 3],
                    "- ": [4, 3],
                    "--": [8, 3],
                    "- .": [4, 3, 1, 3],
                    "--.": [8, 3, 1, 3],
                    "--..": [8, 3, 1, 3, 1, 3]
                },
                bS = bN.node,
                bO = bN.attrs,
                bK = bN.rotate(),
                S = function (b3, b2) {
                    b2 = bQ[bG.call(b2)];
                    if (b2) {
                        var b0 = b3.attrs["stroke-width"] || "1",
                            bY = {
                                round: b0,
                                square: b0,
                                butt: 0
                            } [b3.attrs["stroke-linecap"] || bW["stroke-linecap"]] || 0,
                            b1 = [];
                        var bZ = b2[s];
                        while (bZ--) {
                            b1[bZ] = b2[bZ] * b0 + ((bZ % 2) ? 1 : -1) * bY
                        }
                        bh(bS, {
                            "stroke-dasharray": b1[aW](",")
                        })
                    }
                };
            bW[ag]("rotation") && (bK = bW.rotation);
            var bJ = bC(bK)[I](a);
            if (!(bJ.length - 1)) {
                bJ = null
            } else {
                bJ[1] = +bJ[1];
                bJ[2] = +bJ[2]
            }
            aj(bK) && bN.rotate(0, true);
            for (var bR in bW) {
                if (bW[ag](bR)) {
                    if (!q[ag](bR)) {
                        continue
                    }
                    var bP = bW[bR];
                    bO[bR] = bP;
                    switch (bR) {
                        case "blur":
                            bN.blur(bP);
                            break;
                        case "rotation":
                            bN.rotate(bP, true);
                            break;
                        case "href":
                        case "title":
                        case "target":
                            var bU = bS.parentNode;
                            if (bG.call(bU.tagName) != "a") {
                                var E = bh("a");
                                bU.insertBefore(E, bS);
                                E[bk](bS);
                                bU = E
                            }
                            if (bR == "target" && bP == "blank") {
                                bU.setAttributeNS(bN.paper.xlink, "show", "new")
                            } else {
                                bU.setAttributeNS(bN.paper.xlink, bR, bP)
                            }
                            break;
                        case "cursor":
                            bS.style.cursor = bP;
                            break;
                        case "clip-rect":
                            var d = bC(bP)[I](a);
                            if (d[s] == 4) {
                                bN.clip && bN.clip.parentNode.parentNode.removeChild(bN.clip.parentNode);
                                var e = bh("clipPath"),
                                    bT = bh("rect");
                                e.id = j();
                                bh(bT, {
                                    x: d[0],
                                    y: d[1],
                                    width: d[2],
                                    height: d[3]
                                });
                                e[bk](bT);
                                bN.paper.defs[bk](e);
                                bh(bS, {
                                    "clip-path": "url(#" + e.id + ")"
                                });
                                bN.clip = bT
                            }
                            if (!bP) {
                                var bV = aa.getElementById(bS.getAttribute("clip-path")[bs](/(^url\(#|\)$)/g, aP));
                                bV && bV.parentNode.removeChild(bV);
                                bh(bS, {
                                    "clip-path": aP
                                });
                                delete bN.clip
                            }
                            break;
                        case "path":
                            if (bN.type == "path") {
                                bh(bS, {
                                    d: bP ? bO.path = y(bP) : "M0,0"
                                })
                            }
                            break;
                        case "width":
                            bS[D](bR, bP);
                            if (bO.fx) {
                                bR = "x";
                                bP = bO.x
                            } else {
                                break
                            }
                            case "x":
                                if (bO.fx) {
                                    bP = -bO.x - (bO.width || 0)
                                }
                                case "rx":
                                    if (bR == "rx" && bN.type == "rect") {
                                        break
                                    }
                                    case "cx":
                                        bJ && (bR == "x" || bR == "cx") && (bJ[1] += bP - bO[bR]);
                                        bS[D](bR, bP);
                                        bN.pattern && ab(bN);
                                        break;
                                    case "height":
                                        bS[D](bR, bP);
                                        if (bO.fy) {
                                            bR = "y";
                                            bP = bO.y
                                        } else {
                                            break
                                        }
                                        case "y":
                                            if (bO.fy) {
                                                bP = -bO.y - (bO.height || 0)
                                            }
                                            case "ry":
                                                if (bR == "ry" && bN.type == "rect") {
                                                    break
                                                }
                                                case "cy":
                                                    bJ && (bR == "y" || bR == "cy") && (bJ[2] += bP - bO[bR]);
                                                    bS[D](bR, bP);
                                                    bN.pattern && ab(bN);
                                                    break;
                                                case "r":
                                                    if (bN.type == "rect") {
                                                        bh(bS, {
                                                            rx: bP,
                                                            ry: bP
                                                        })
                                                    } else {
                                                        bS[D](bR, bP)
                                                    }
                                                    break;
                                                case "src":
                                                    if (bN.type == "image") {
                                                        bS.setAttributeNS(bN.paper.xlink, "href", bP)
                                                    }
                                                    break;
                                                case "stroke-width":
                                                    bS.style.strokeWidth = bP;
                                                    bS[D](bR, bP);
                                                    if (bO["stroke-dasharray"]) {
                                                        S(bN, bO["stroke-dasharray"])
                                                    }
                                                    break;
                                                case "stroke-dasharray":
                                                    S(bN, bP);
                                                    break;
                                                case "translation":
                                                    var bH = bC(bP)[I](a);
                                                    bH[0] = +bH[0] || 0;
                                                    bH[1] = +bH[1] || 0;
                                                    if (bJ) {
                                                        bJ[1] += bH[0];
                                                        bJ[2] += bH[1]
                                                    }
                                                    A.call(bN, bH[0], bH[1]);
                                                    break;
                                                case "scale":
                                                    bH = bC(bP)[I](a);
                                                    bN.scale(+bH[0] || 1, +bH[1] || +bH[0] || 1, isNaN(aj(bH[2])) ? null : +bH[2], isNaN(aj(bH[3])) ? null : +bH[3]);
                                                    break;
                                                case a4:
                                                    var R = bC(bP).match(h);
                                                    if (R) {
                                                        e = bh("pattern");
                                                        var bM = bh("image");
                                                        e.id = j();
                                                        bh(e, {
                                                            x: 0,
                                                            y: 0,
                                                            patternUnits: "userSpaceOnUse",
                                                            height: 1,
                                                            width: 1
                                                        });
                                                        bh(bM, {
                                                            x: 0,
                                                            y: 0
                                                        });
                                                        bM.setAttributeNS(bN.paper.xlink, "href", R[1]);
                                                        e[bk](bM);
                                                        var bX = aa.createElement("img");
                                                        bX.style.cssText = "position:absolute;left:-9999em;top-9999em";
                                                        bX.onload = function () {
                                                            bh(e, {
                                                                width: this.offsetWidth,
                                                                height: this.offsetHeight
                                                            });
                                                            bh(bM, {
                                                                width: this.offsetWidth,
                                                                height: this.offsetHeight
                                                            });
                                                            aa.body.removeChild(this);
                                                            bN.paper.safari()
                                                        };
                                                        aa.body[bk](bX);
                                                        bX.src = R[1];
                                                        bN.paper.defs[bk](e);
                                                        bS.style.fill = "url(#" + e.id + ")";
                                                        bh(bS, {
                                                            fill: "url(#" + e.id + ")"
                                                        });
                                                        bN.pattern = e;
                                                        bN.pattern && ab(bN);
                                                        break
                                                    }
                                                    var i = aI.getRGB(bP);
                                                    if (!i.error) {
                                                        delete bW.gradient;
                                                        delete bO.gradient;
                                                        !aI.is(bO.opacity, "undefined") && aI.is(bW.opacity, "undefined") && bh(bS, {
                                                            opacity: bO.opacity
                                                        });
                                                        !aI.is(bO["fill-opacity"], "undefined") && aI.is(bW["fill-opacity"], "undefined") && bh(bS, {
                                                            "fill-opacity": bO["fill-opacity"]
                                                        })
                                                    } else {
                                                        if ((({
                                                                circle: 1,
                                                                ellipse: 1
                                                            })[ag](bN.type) || bC(bP).charAt() != "r") && g(bS, bP, bN.paper)) {
                                                            bO.gradient = bP;
                                                            bO.fill = "none";
                                                            break
                                                        }
                                                    }
                                                    i[ag]("opacity") && bh(bS, {
                                                        "fill-opacity": i.opacity > 1 ? i.opacity / 100 : i.opacity
                                                    });
                                                case "stroke":
                                                    i = aI.getRGB(bP);
                                                    bS[D](bR, i.hex);
                                                    bR == "stroke" && i[ag]("opacity") && bh(bS, {
                                                        "stroke-opacity": i.opacity > 1 ? i.opacity / 100 : i.opacity
                                                    });
                                                    break;
                                                case "gradient":
                                                    (({
                                                        circle: 1,
                                                        ellipse: 1
                                                    })[ag](bN.type) || bC(bP).charAt() != "r") && g(bS, bP, bN.paper);
                                                    break;
                                                case "opacity":
                                                    if (bO.gradient && !bO[ag]("stroke-opacity")) {
                                                        bh(bS, {
                                                            "stroke-opacity": bP > 1 ? bP / 100 : bP
                                                        })
                                                    }
                                                    case "fill-opacity":
                                                        if (bO.gradient) {
                                                            var b = aa.getElementById(bS.getAttribute(a4)[bs](/^url\(#|\)$/g, aP));
                                                            if (b) {
                                                                var bI = b.getElementsByTagName("stop");
                                                                bI[bI[s] - 1][D]("stop-opacity", bP)
                                                            }
                                                            break
                                                        }
                                                        default:
                                                            bR == "font-size" && (bP = T(bP, 10) + "px");
                                                            var bL = bR[bs](/(\-.)/g, function (bY) {
                                                                return bo.call(bY.substring(1))
                                                            });
                                                            bS.style[bL] = bP;
                                                            bS[D](bR, bP);
                                                            break
                    }
                }
            }
            P(bN, bW);
            if (bJ) {
                bN.rotate(bJ.join(aH))
            } else {
                aj(bK) && bN.rotate(bK, true)
            }
        };
        var o = 1.2,
            P = function (b, E) {
                if (b.type != "text" || !(E[ag]("text") || E[ag]("font") || E[ag]("font-size") || E[ag]("x") || E[ag]("y"))) {
                    return
                }
                var bJ = b.attrs,
                    d = b.node,
                    bL = d.firstChild ? T(aa.defaultView.getComputedStyle(d.firstChild, aP).getPropertyValue("font-size"), 10) : 10;
                if (E[ag]("text")) {
                    bJ.text = E.text;
                    while (d.firstChild) {
                        d.removeChild(d.firstChild)
                    }
                    var e = bC(E.text)[I]("\n");
                    for (var R = 0, bK = e[s]; R < bK; R++) {
                        if (e[R]) {
                            var bH = bh("tspan");
                            R && bh(bH, {
                                dy: bL * o,
                                x: bJ.x
                            });
                            bH[bk](aa.createTextNode(e[R]));
                            d[bk](bH)
                        }
                    }
                } else {
                    e = d.getElementsByTagName("tspan");
                    for (R = 0, bK = e[s]; R < bK; R++) {
                        R && bh(e[R], {
                            dy: bL * o,
                            x: bJ.x
                        })
                    }
                }
                bh(d, {
                    y: bJ.y
                });
                var S = b.getBBox(),
                    bI = bJ.y - (S.y + S.height / 2);
                bI && aI.is(bI, "finite") && bh(d, {
                    y: bJ.y + bI
                })
            },
            aU = function (d, b) {
                var i = 0,
                    e = 0;
                this[0] = d;
                this.id = aI._oid++;
                this.node = d;
                d.raphael = this;
                this.paper = b;
                this.attrs = this.attrs || {};
                this.transformations = [];
                this._ = {
                    tx: 0,
                    ty: 0,
                    rt: {
                        deg: 0,
                        cx: 0,
                        cy: 0
                    },
                    sx: 1,
                    sy: 1
                };
                !b.bottom && (b.bottom = this);
                this.prev = b.top;
                b.top && (b.top.next = this);
                b.top = this;
                this.next = null
            };
        var bc = aU[bE];
        aU[bE].rotate = function (d, b, i) {
            if (this.removed) {
                return this
            }
            if (d == null) {
                if (this._.rt.cx) {
                    return [this._.rt.deg, this._.rt.cx, this._.rt.cy][aW](aH)
                }
                return this._.rt.deg
            }
            var e = this.getBBox();
            d = bC(d)[I](a);
            if (d[s] - 1) {
                b = aj(d[1]);
                i = aj(d[2])
            }
            d = aj(d[0]);
            if (b != null && b !== false) {
                this._.rt.deg = d
            } else {
                this._.rt.deg += d
            }(i == null) && (b = null);
            this._.rt.cx = b;
            this._.rt.cy = i;
            b = b == null ? e.x + e.width / 2 : b;
            i = i == null ? e.y + e.height / 2 : i;
            if (this._.rt.deg) {
                this.transformations[0] = aI.format("rotate({0} {1} {2})", this._.rt.deg, b, i);
                this.clip && bh(this.clip, {
                    transform: aI.format("rotate({0} {1} {2})", -this._.rt.deg, b, i)
                })
            } else {
                this.transformations[0] = aP;
                this.clip && bh(this.clip, {
                    transform: aP
                })
            }
            bh(this.node, {
                transform: this.transformations[aW](aH)
            });
            return this
        };
        aU[bE].hide = function () {
            !this.removed && (this.node.style.display = "none");
            return this
        };
        aU[bE].show = function () {
            !this.removed && (this.node.style.display = "");
            return this
        };
        aU[bE].remove = function () {
            if (this.removed) {
                return
            }
            aE(this, this.paper);
            this.node.parentNode.removeChild(this.node);
            for (var b in this) {
                delete this[b]
            }
            this.removed = true
        };
        aU[bE].getBBox = function () {
            if (this.removed) {
                return this
            }
            if (this.type == "path") {
                return ai(this.attrs.path)
            }
            if (this.node.style.display == "none") {
                this.show();
                var d = true
            }
            var bH = {};
            try {
                bH = this.node.getBBox()
            } catch (R) {} finally {
                bH = bH || {}
            }
            if (this.type == "text") {
                bH = {
                    x: bH.x,
                    y: Infinity,
                    width: 0,
                    height: 0
                };
                for (var b = 0, E = this.node.getNumberOfChars(); b < E; b++) {
                    var S = this.node.getExtentOfChar(b);
                    (S.y < bH.y) && (bH.y = S.y);
                    (S.y + S.height - bH.y > bH.height) && (bH.height = S.y + S.height - bH.y);
                    (S.x + S.width - bH.x > bH.width) && (bH.width = S.x + S.width - bH.x)
                }
            }
            d && this.hide();
            return bH
        };
        aU[bE].attr = function (b, bJ) {
            if (this.removed) {
                return this
            }
            if (b == null) {
                var bI = {};
                for (var R in this.attrs) {
                    if (this.attrs[ag](R)) {
                        bI[R] = this.attrs[R]
                    }
                }
                this._.rt.deg && (bI.rotation = this.rotate());
                (this._.sx != 1 || this._.sy != 1) && (bI.scale = this.scale());
                bI.gradient && bI.fill == "none" && (bI.fill = bI.gradient) && delete bI.gradient;
                return bI
            }
            if (bJ == null && aI.is(b, af)) {
                if (b == "translation") {
                    return A.call(this)
                }
                if (b == "rotation") {
                    return this.rotate()
                }
                if (b == "scale") {
                    return this.scale()
                }
                if (b == a4 && this.attrs.fill == "none" && this.attrs.gradient) {
                    return this.attrs.gradient
                }
                return this.attrs[b]
            }
            if (bJ == null && aI.is(b, a7)) {
                var bL = {};
                for (var E = 0, S = b.length; E < S; E++) {
                    bL[b[E]] = this.attr(b[E])
                }
                return bL
            }
            if (bJ != null) {
                var d = {};
                d[b] = bJ
            } else {
                if (b != null && aI.is(b, "object")) {
                    d = b
                }
            }
            for (var bK in this.paper.customAttributes) {
                if (this.paper.customAttributes[ag](bK) && d[ag](bK) && aI.is(this.paper.customAttributes[bK], "function")) {
                    var bH = this.paper.customAttributes[bK].apply(this, [][bw](d[bK]));
                    this.attrs[bK] = d[bK];
                    for (var e in bH) {
                        if (bH[ag](e)) {
                            d[e] = bH[e]
                        }
                    }
                }
            }
            an(this, d);
            return this
        };
        aU[bE].toFront = function () {
            if (this.removed) {
                return this
            }
            this.node.parentNode[bk](this.node);
            var b = this.paper;
            b.top != this && al(this, b);
            return this
        };
        aU[bE].toBack = function () {
            if (this.removed) {
                return this
            }
            if (this.node.parentNode.firstChild != this.node) {
                this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
                p(this, this.paper);
                var b = this.paper
            }
            return this
        };
        aU[bE].insertAfter = function (b) {
            if (this.removed) {
                return this
            }
            var d = b.node || b[b.length - 1].node;
            if (d.nextSibling) {
                d.parentNode.insertBefore(this.node, d.nextSibling)
            } else {
                d.parentNode[bk](this.node)
            }
            J(this, b, this.paper);
            return this
        };
        aU[bE].insertBefore = function (b) {
            if (this.removed) {
                return this
            }
            var d = b.node || b[0].node;
            d.parentNode.insertBefore(this.node, d);
            aL(this, b, this.paper);
            return this
        };
        aU[bE].blur = function (d) {
            var b = this;
            if (+d !== 0) {
                var e = bh("filter"),
                    i = bh("feGaussianBlur");
                b.attrs.blur = d;
                e.id = j();
                bh(i, {
                    stdDeviation: +d || 1.5
                });
                e.appendChild(i);
                b.paper.defs.appendChild(e);
                b._blur = e;
                bh(b.node, {
                    filter: "url(#" + e.id + ")"
                })
            } else {
                if (b._blur) {
                    b._blur.parentNode.removeChild(b._blur);
                    delete b._blur;
                    delete b.attrs.blur
                }
                b.node.removeAttribute("filter")
            }
        };
        var ae = function (d, b, R, E) {
                var i = bh("circle");
                d.canvas && d.canvas[bk](i);
                var e = new aU(i, d);
                e.attrs = {
                    cx: b,
                    cy: R,
                    r: E,
                    fill: "none",
                    stroke: "#000"
                };
                e.type = "circle";
                bh(i, e.attrs);
                return e
            },
            bb = function (e, b, bH, d, R, S) {
                var E = bh("rect");
                e.canvas && e.canvas[bk](E);
                var i = new aU(E, e);
                i.attrs = {
                    x: b,
                    y: bH,
                    width: d,
                    height: R,
                    r: S || 0,
                    rx: S || 0,
                    ry: S || 0,
                    fill: "none",
                    stroke: "#000"
                };
                i.type = "rect";
                bh(E, i.attrs);
                return i
            },
            az = function (d, b, S, R, E) {
                var i = bh("ellipse");
                d.canvas && d.canvas[bk](i);
                var e = new aU(i, d);
                e.attrs = {
                    cx: b,
                    cy: S,
                    rx: R,
                    ry: E,
                    fill: "none",
                    stroke: "#000"
                };
                e.type = "ellipse";
                bh(i, e.attrs);
                return e
            },
            v = function (e, S, b, bH, d, R) {
                var E = bh("image");
                bh(E, {
                    x: b,
                    y: bH,
                    width: d,
                    height: R,
                    preserveAspectRatio: "none"
                });
                E.setAttributeNS(e.xlink, "href", S);
                e.canvas && e.canvas[bk](E);
                var i = new aU(E, e);
                i.attrs = {
                    x: b,
                    y: bH,
                    width: d,
                    height: R,
                    src: S
                };
                i.type = "image";
                return i
            },
            ak = function (d, b, R, E) {
                var i = bh("text");
                bh(i, {
                    x: b,
                    y: R,
                    "text-anchor": "middle"
                });
                d.canvas && d.canvas[bk](i);
                var e = new aU(i, d);
                e.attrs = {
                    x: b,
                    y: R,
                    "text-anchor": "middle",
                    text: E,
                    font: q.font,
                    stroke: "none",
                    fill: "#000"
                };
                e.type = "text";
                an(e, e.attrs);
                return e
            },
            bA = function (d, b) {
                this.width = d || this.width;
                this.height = b || this.height;
                this.canvas[D]("width", this.width);
                this.canvas[D]("height", this.height);
                return this
            },
            F = function () {
                var i = aJ[bB](0, arguments),
                    e = i && i.container,
                    d = i.x,
                    bH = i.y,
                    E = i.width,
                    b = i.height,
                    R = i.viewBox !== undefined ? i.viewBox : "";
                this.cordOrigin = i.cordOrigin;
                this.cordSize = i.cordSize;
                if (!e) {
                    throw new Error("SVG container not found.")
                }
                var S = bh("svg");
                d = d || 0;
                bH = bH || 0;
                E = E || 512;
                b = b || 342;
                bh(S, {
                    xmlns: "http://www.w3.org/2000/svg",
                    version: 1.1,
                    width: E,
                    height: b,
                    viewBox: R
                });
                if (e == 1) {
                    S.style.cssText = "position:absolute;left:" + d + "px;top:" + bH + "px";
                    aa.body[bk](S)
                } else {
                    if (e.firstChild) {
                        e.insertBefore(S, e.firstChild)
                    } else {
                        e[bk](S)
                    }
                }
                e = new bz;
                e.width = E;
                e.height = b;
                e.canvas = S;
                be.call(e, e, aI.fn);
                e.clear();
                return e
            };
        aZ.clear = function () {
            var b = this.canvas;
            while (b.firstChild) {
                b.removeChild(b.firstChild)
            }
            this.bottom = this.top = null;
            (this.desc = bh("desc"))[bk](aa.createTextNode("Russian Map"));
            b[bk](this.desc);
            b[bk](this.defs = bh("defs"))
        };
        aZ.remove = function () {
            this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (var b in this) {
                this[b] = z(b)
            }
        }
    }
    if (aI.vml) {
        var N = {
                M: "m",
                L: "l",
                C: "c",
                Z: "x",
                m: "t",
                l: "r",
                c: "v",
                z: "x"
            },
            aN = /([clmz]),?([^clmz]*)/gi,
            bx = / progid:\S+Blur\([^\)]+\)/g,
            bF = /-?[^,\s-]+/g,
            aX = 1000 + aH + 1000,
            u = 0.5,
            t = {
                path: 1,
                rect: 1
            },
            bg = function (bL) {
                var bI = /[ahqstv]/ig,
                    e = y;
                bC(bL).match(bI) && (e = V);
                bI = /[clmz]/g;
                if (e == y && !bC(bL).match(bI)) {
                    var bH = bC(bL)[bs](aN, function (bO, bQ, bM) {
                        var bP = [],
                            i = bG.call(bQ) == "m",
                            bN = N[bQ];
                        bM[bs](bF, function (bR) {
                            if (i && bP[s] == 2) {
                                bN += bP + N[bQ == "m" ? "l" : "L"];
                                bP = []
                            }
                            bP[k](ad(bR * u))
                        });
                        return bN + bP
                    });
                    return bH
                }
                var bJ = e(bL),
                    d, b;
                bH = [];
                for (var R = 0, bK = bJ[s]; R < bK; R++) {
                    d = bJ[R];
                    b = bG.call(bJ[R][0]);
                    b == "z" && (b = "x");
                    for (var E = 1, S = d[s]; E < S; E++) {
                        b += ad(d[E] * u) + (E != S - 1 ? "," : aP)
                    }
                    bH[k](b)
                }
                return bH[aW](aH)
            };
        aI[a0] = function () {
            return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version
        };
        x = function (e, d) {
            var R = ay("group");
            R.style.cssText = "position:absolute;left:0;top:0;width:" + d.width + "px;height:" + d.height + "px";
            R.coordsize = 1000 + aH + 1000;
            R.coordorigin = d.coordorigin;
            var E = ay("shape"),
                i = E.style;
            i.width = d.width + "px";
            i.height = d.height + "px";
            E.coordsize = d.coordsize;
            E.coordorigin = d.coordorigin;
            R[bk](E);
            var S = new aU(E, R, d),
                b = {
                    fill: "none",
                    stroke: "#000"
                };
            e && (b.path = e);
            S.type = "path";
            S.path = [];
            S.Path = aP;
            an(S, b);
            d.canvas[bk](R);
            return S
        };
        an = function (bJ, bQ) {
            bJ.attrs = bJ.attrs || {};
            var bN = bJ.node,
                bR = bJ.attrs,
                S = bN.style,
                i, bP = (bQ.x != bR.x || bQ.y != bR.y || bQ.width != bR.width || bQ.height != bR.height || bQ.r != bR.r) && bJ.type == "rect",
                bV = bJ;
            for (var bH in bQ) {
                if (bQ[ag](bH)) {
                    bR[bH] = bQ[bH]
                }
            }
            if (bP) {
                bR.path = at(bR.x, bR.y, bR.width, bR.height, bR.r);
                bJ.X = bR.x;
                bJ.Y = bR.y;
                bJ.W = bR.width;
                bJ.H = bR.height
            }
            bQ.href && (bN.href = bQ.href);
            bQ.title && (bN.title = bQ.title);
            bQ.target && (bN.target = bQ.target);
            bQ.cursor && (S.cursor = bQ.cursor);
            "blur" in bQ && bJ.blur(bQ.blur);
            if (bQ.path && bJ.type == "path" || bP) {
                bN.path = bg(bR.path)
            }
            if (bQ.rotation != null) {
                bJ.rotate(bQ.rotation, true)
            }
            if (bQ.translation) {
                i = bC(bQ.translation)[I](a);
                A.call(bJ, i[0], i[1]);
                if (bJ._.rt.cx != null) {
                    bJ._.rt.cx += +i[0];
                    bJ._.rt.cy += +i[1];
                    bJ.setBox(bJ.attrs, i[0], i[1])
                }
            }
            if (bQ.scale) {
                i = bC(bQ.scale)[I](a);
                bJ.scale(+i[0] || 1, +i[1] || +i[0] || 1, +i[2] || null, +i[3] || null)
            }
            if ("clip-rect" in bQ) {
                var b = bC(bQ["clip-rect"])[I](a);
                if (b[s] == 4) {
                    b[2] = +b[2] + (+b[0]);
                    b[3] = +b[3] + (+b[1]);
                    var bI = bN.clipRect || aa.createElement("div"),
                        bU = bI.style,
                        R = bN.parentNode;
                    bU.clip = aI.format("rect({1}px {2}px {3}px {0}px)", b);
                    if (!bN.clipRect) {
                        bU.position = "absolute";
                        bU.top = 0;
                        bU.left = 0;
                        bU.width = bJ.paper.width + "px";
                        bU.height = bJ.paper.height + "px";
                        R.parentNode.insertBefore(bI, R);
                        bI[bk](R);
                        bN.clipRect = bI
                    }
                }
                if (!bQ["clip-rect"]) {
                    bN.clipRect && (bN.clipRect.style.clip = aP)
                }
            }
            if (bJ.type == "image" && bQ.src) {
                bN.src = bQ.src
            }
            if (bJ.type == "image" && bQ.opacity) {
                bN.filterOpacity = a5 + ".Alpha(opacity=" + (bQ.opacity * 100) + ")";
                S.filter = (bN.filterMatrix || aP) + (bN.filterOpacity || aP)
            }
            bQ.font && (S.font = bQ.font);
            bQ["font-family"] && (S.fontFamily = '"' + bQ["font-family"][I](",")[0][bs](/^['"]+|['"]+$/g, aP) + '"');
            bQ["font-size"] && (S.fontSize = bQ["font-size"]);
            bQ["font-weight"] && (S.fontWeight = bQ["font-weight"]);
            bQ["font-style"] && (S.fontStyle = bQ["font-style"]);
            if (bQ.opacity != null || bQ["stroke-width"] != null || bQ.fill != null || bQ.stroke != null || bQ["stroke-width"] != null || bQ["stroke-opacity"] != null || bQ["fill-opacity"] != null || bQ["stroke-dasharray"] != null || bQ["stroke-miterlimit"] != null || bQ["stroke-linejoin"] != null || bQ["stroke-linecap"] != null) {
                bN = bJ.shape || bN;
                var bO = (bN.getElementsByTagName(a4) && bN.getElementsByTagName(a4)[0]),
                    bS = false;
                !bO && (bS = bO = ay(a4));
                if ("fill-opacity" in bQ || "opacity" in bQ) {
                    var d = ((+bR["fill-opacity"] + 1 || 2) - 1) * ((+bR.opacity + 1 || 2) - 1) * ((+aI.getRGB(bQ.fill).o + 1 || 2) - 1);
                    d = bi(m(d, 0), 1);
                    bO.opacity = d
                }
                bQ.fill && (bO.on = true);
                if (bO.on == null || bQ.fill == "none") {
                    bO.on = false
                }
                if (bO.on && bQ.fill) {
                    var e = bQ.fill.match(h);
                    if (e) {
                        bO.src = e[1];
                        bO.type = "tile"
                    } else {
                        bO.color = aI.getRGB(bQ.fill).hex;
                        bO.src = aP;
                        bO.type = "solid";
                        if (aI.getRGB(bQ.fill).error && (bV.type in {
                                circle: 1,
                                ellipse: 1
                            } || bC(bQ.fill).charAt() != "r") && g(bV, bQ.fill)) {
                            bR.fill = "none";
                            bR.gradient = bQ.fill
                        }
                    }
                }
                bS && bN[bk](bO);
                var E = (bN.getElementsByTagName("stroke") && bN.getElementsByTagName("stroke")[0]),
                    bT = false;
                !E && (bT = E = ay("stroke"));
                if ((bQ.stroke && bQ.stroke != "none") || bQ["stroke-width"] || bQ["stroke-opacity"] != null || bQ["stroke-dasharray"] || bQ["stroke-miterlimit"] || bQ["stroke-linejoin"] || bQ["stroke-linecap"]) {
                    E.on = true
                }(bQ.stroke == "none" || E.on == null || bQ.stroke == 0 || bQ["stroke-width"] == 0) && (E.on = false);
                var bM = aI.getRGB(bQ.stroke);
                E.on && bQ.stroke && (E.color = bM.hex);
                d = ((+bR["stroke-opacity"] + 1 || 2) - 1) * ((+bR.opacity + 1 || 2) - 1) * ((+bM.o + 1 || 2) - 1);
                var bK = (aj(bQ["stroke-width"]) || 1) * 0.75;
                d = bi(m(d, 0), 1);
                bQ["stroke-width"] == null && (bK = bR["stroke-width"]);
                bQ["stroke-width"] && (E.weight = bK);
                bK && bK < 1 && (d *= bK) && (E.weight = 1);
                E.opacity = d;
                bQ["stroke-linejoin"] && (E.joinstyle = bQ["stroke-linejoin"] || "miter");
                E.miterlimit = bQ["stroke-miterlimit"] || 8;
                bQ["stroke-linecap"] && (E.endcap = bQ["stroke-linecap"] == "butt" ? "flat" : bQ["stroke-linecap"] == "square" ? "square" : "round");
                if (bQ["stroke-dasharray"]) {
                    var bL = {
                        "-": "shortdash",
                        ".": "shortdot",
                        "-.": "shortdashdot",
                        "-..": "shortdashdotdot",
                        ". ": "dot",
                        "- ": "dash",
                        "--": "longdash",
                        "- .": "dashdot",
                        "--.": "longdashdot",
                        "--..": "longdashdotdot"
                    };
                    E.dashstyle = bL[ag](bQ["stroke-dasharray"]) ? bL[bQ["stroke-dasharray"]] : aP
                }
                bT && bN[bk](E)
            }
            if (bV.type == "text") {
                S = bV.paper.span.style;
                bR.font && (S.font = bR.font);
                bR["font-family"] && (S.fontFamily = bR["font-family"]);
                bR["font-size"] && (S.fontSize = bR["font-size"]);
                bR["font-weight"] && (S.fontWeight = bR["font-weight"]);
                bR["font-style"] && (S.fontStyle = bR["font-style"]);
                bV.node.string && (bV.paper.span.innerHTML = bC(bV.node.string)[bs](/</g, "&#60;")[bs](/&/g, "&#38;")[bs](/\n/g, "<br>"));
                bV.W = bR.w = bV.paper.span.offsetWidth;
                bV.H = bR.h = bV.paper.span.offsetHeight;
                bV.X = bR.x;
                bV.Y = bR.y + ad(bV.H / 2);
                switch (bR["text-anchor"]) {
                    case "start":
                        bV.node.style["v-text-align"] = "left";
                        bV.bbx = ad(bV.W / 2);
                        break;
                    case "end":
                        bV.node.style["v-text-align"] = "right";
                        bV.bbx = -ad(bV.W / 2);
                        break;
                    default:
                        bV.node.style["v-text-align"] = "center";
                        break
                }
            }
        };
        g = function (b, bH) {
            b.attrs = b.attrs || {};
            var bI = b.attrs,
                bK, R = "linear",
                S = ".5 .5";
            b.attrs.gradient = bH;
            bH = bC(bH)[bs](aO, function (bM, bN, i) {
                R = "radial";
                if (bN && i) {
                    bN = aj(bN);
                    i = aj(i);
                    bl(bN - 0.5, 2) + bl(i - 0.5, 2) > 0.25 && (i = ao.sqrt(0.25 - bl(bN - 0.5, 2)) * ((i > 0.5) * 2 - 1) + 0.5);
                    S = bN + aH + i
                }
                return aP
            });
            bH = bH[I](/\s*\-\s*/);
            if (R == "linear") {
                var d = bH.shift();
                d = -aj(d);
                if (isNaN(d)) {
                    return null
                }
            }
            var E = w(bH);
            if (!E) {
                return null
            }
            b = b.shape || b.node;
            bK = b.getElementsByTagName(a4)[0] || ay(a4);
            !bK.parentNode && b.appendChild(bK);
            if (E[s]) {
                bK.on = true;
                bK.method = "none";
                bK.color = E[0].color;
                bK.color2 = E[E[s] - 1].color;
                var bL = [];
                for (var e = 0, bJ = E[s]; e < bJ; e++) {
                    E[e].offset && bL[k](E[e].offset + aH + E[e].color)
                }
                bK.colors && (bK.colors.value = bL[s] ? bL[aW]() : "0% " + bK.color);
                if (R == "radial") {
                    bK.type = "gradientradial";
                    bK.focus = "100%";
                    bK.focussize = S;
                    bK.focusposition = S
                } else {
                    bK.type = "gradient";
                    bK.angle = (270 - d) % 360
                }
            }
            return 1
        };
        aU = function (E, S, b) {
            var R = 0,
                e = 0,
                d = 0,
                i = 1;
            this[0] = E;
            this.id = aI._oid++;
            this.node = E;
            E.raphael = this;
            this.X = 0;
            this.Y = 0;
            this.attrs = {};
            this.Group = S;
            this.paper = b;
            this._ = {
                tx: 0,
                ty: 0,
                rt: {
                    deg: 0
                },
                sx: 1,
                sy: 1
            };
            !b.bottom && (b.bottom = this);
            this.prev = b.top;
            b.top && (b.top.next = this);
            b.top = this;
            this.next = null
        };
        bc = aU[bE];
        bc.rotate = function (d, b, e) {
            if (this.removed) {
                return this
            }
            if (d == null) {
                if (this._.rt.cx) {
                    return [this._.rt.deg, this._.rt.cx, this._.rt.cy][aW](aH)
                }
                return this._.rt.deg
            }
            d = bC(d)[I](a);
            if (d[s] - 1) {
                b = aj(d[1]);
                e = aj(d[2])
            }
            d = aj(d[0]);
            if (b != null) {
                this._.rt.deg = d
            } else {
                this._.rt.deg += d
            }
            e == null && (b = null);
            this._.rt.cx = b;
            this._.rt.cy = e;
            this.setBox(this.attrs, b, e);
            this.Group.style.rotation = this._.rt.deg;
            return this
        };
        bc.setBox = function (E, R, e) {
            if (this.removed) {
                return this
            }
            var b = this.Group.style,
                S = (this.shape && this.shape.style) || this.node.style;
            E = E || {};
            for (var bH in E) {
                if (E[ag](bH)) {
                    this.attrs[bH] = E[bH]
                }
            }
            R = R || this._.rt.cx;
            e = e || this._.rt.cy;
            var bK = this.attrs,
                bN, bM, bO, bJ;
            switch (this.type) {
                case "circle":
                    bN = bK.cx - bK.r;
                    bM = bK.cy - bK.r;
                    bO = bJ = bK.r * 2;
                    break;
                case "ellipse":
                    bN = bK.cx - bK.rx;
                    bM = bK.cy - bK.ry;
                    bO = bK.rx * 2;
                    bJ = bK.ry * 2;
                    break;
                case "image":
                    bN = +bK.x;
                    bM = +bK.y;
                    bO = bK.width || 0;
                    bJ = bK.height || 0;
                    break;
                case "text":
                    this.textpath.v = ["m", ad(bK.x), ", ", ad(bK.y - 2), "l", ad(bK.x) + 1, ", ", ad(bK.y - 2)][aW](aP);
                    bN = bK.x - ad(this.W / 2);
                    bM = bK.y - this.H / 2;
                    bO = this.W;
                    bJ = this.H;
                    break;
                case "rect":
                case "path":
                    if (!this.attrs.path) {
                        bN = 0;
                        bM = 0;
                        bO = this.paper.width;
                        bJ = this.paper.height
                    } else {
                        var bI = ai(this.attrs.path);
                        bN = bI.x;
                        bM = bI.y;
                        bO = bI.width;
                        bJ = bI.height
                    }
                    break;
                default:
                    bN = 0;
                    bM = 0;
                    bO = this.paper.width;
                    bJ = this.paper.height;
                    break
            }
            R = (R == null) ? bN + bO / 2 : R;
            e = (e == null) ? bM + bJ / 2 : e;
            var d = R - this.paper.width / 2,
                bL = e - this.paper.height / 2,
                bP;
            b.left != (bP = d + "px") && (b.left = bP);
            b.top != (bP = bL + "px") && (b.top = bP);
            this.X = t[ag](this.type) ? -d : bN;
            this.Y = t[ag](this.type) ? -bL : bM;
            this.W = bO;
            this.H = bJ;
            if (t[ag](this.type)) {
                S.left != (bP = -d * u + "px") && (S.left = bP);
                S.top != (bP = -bL * u + "px") && (S.top = bP)
            } else {
                if (this.type == "text") {
                    S.left != (bP = -d + "px") && (S.left = bP);
                    S.top != (bP = -bL + "px") && (S.top = bP)
                } else {
                    b.width != (bP = this.paper.width + "px") && (b.width = bP);
                    b.height != (bP = this.paper.height + "px") && (b.height = bP);
                    S.left != (bP = bN - d + "px") && (S.left = bP);
                    S.top != (bP = bM - bL + "px") && (S.top = bP);
                    S.width != (bP = bO + "px") && (S.width = bP);
                    S.height != (bP = bJ + "px") && (S.height = bP)
                }
            }
        };
        bc.hide = function () {
            !this.removed && (this.Group.style.display = "none");
            return this
        };
        bc.show = function () {
            !this.removed && (this.Group.style.display = "block");
            return this
        };
        bc.getBBox = function () {
            if (this.removed) {
                return this
            }
            if (t[ag](this.type)) {
                return ai(this.attrs.path)
            }
            return {
                x: this.X + (this.bbx || 0),
                y: this.Y,
                width: this.W,
                height: this.H
            }
        };
        bc.remove = function () {
            if (this.removed) {
                return
            }
            aE(this, this.paper);
            this.node.parentNode.removeChild(this.node);
            this.Group.parentNode.removeChild(this.Group);
            this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var b in this) {
                delete this[b]
            }
            this.removed = true
        };
        bc.attr = function (b, bH) {
            if (this.removed) {
                return this
            }
            if (b == null) {
                var S = {};
                for (var E in this.attrs) {
                    if (this.attrs[ag](E)) {
                        S[E] = this.attrs[E]
                    }
                }
                this._.rt.deg && (S.rotation = this.rotate());
                (this._.sx != 1 || this._.sy != 1) && (S.scale = this.scale());
                S.gradient && S.fill == "none" && (S.fill = S.gradient) && delete S.gradient;
                return S
            }
            if (bH == null && aI.is(b, "string")) {
                if (b == "translation") {
                    return A.call(this)
                }
                if (b == "rotation") {
                    return this.rotate()
                }
                if (b == "scale") {
                    return this.scale()
                }
                if (b == a4 && this.attrs.fill == "none" && this.attrs.gradient) {
                    return this.attrs.gradient
                }
                return this.attrs[b]
            }
            if (this.attrs && bH == null && aI.is(b, a7)) {
                var bK, bJ = {};
                for (E = 0, bK = b[s]; E < bK; E++) {
                    bJ[b[E]] = this.attr(b[E])
                }
                return bJ
            }
            var d;
            if (bH != null) {
                d = {};
                d[b] = bH
            }
            bH == null && aI.is(b, "object") && (d = b);
            if (d) {
                for (var bI in this.paper.customAttributes) {
                    if (this.paper.customAttributes[ag](bI) && d[ag](bI) && aI.is(this.paper.customAttributes[bI], "function")) {
                        var R = this.paper.customAttributes[bI].apply(this, [][bw](d[bI]));
                        this.attrs[bI] = d[bI];
                        for (var e in R) {
                            if (R[ag](e)) {
                                d[e] = R[e]
                            }
                        }
                    }
                }
                if (d.text && this.type == "text") {
                    this.node.string = d.text
                }
                an(this, d);
                if (d.gradient && (({
                        circle: 1,
                        ellipse: 1
                    })[ag](this.type) || bC(d.gradient).charAt() != "r")) {
                    g(this, d.gradient)
                }(!t[ag](this.type) || this._.rt.deg) && this.setBox(this.attrs)
            }
            return this
        };
        bc.toFront = function () {
            !this.removed && this.Group.parentNode[bk](this.Group);
            this.paper.top != this && al(this, this.paper);
            return this
        };
        bc.toBack = function () {
            if (this.removed) {
                return this
            }
            if (this.Group.parentNode.firstChild != this.Group) {
                this.Group.parentNode.insertBefore(this.Group, this.Group.parentNode.firstChild);
                p(this, this.paper)
            }
            return this
        };
        bc.insertAfter = function (b) {
            if (this.removed) {
                return this
            }
            if (b.constructor == ah) {
                b = b[b.length - 1]
            }
            if (b.Group.nextSibling) {
                b.Group.parentNode.insertBefore(this.Group, b.Group.nextSibling)
            } else {
                b.Group.parentNode[bk](this.Group)
            }
            J(this, b, this.paper);
            return this
        };
        bc.insertBefore = function (b) {
            if (this.removed) {
                return this
            }
            if (b.constructor == ah) {
                b = b[0]
            }
            b.Group.parentNode.insertBefore(this.Group, b.Group);
            aL(this, b, this.paper);
            return this
        };
        bc.blur = function (b) {
            var d = this.node.runtimeStyle,
                e = d.filter;
            e = e.replace(bx, aP);
            if (+b !== 0) {
                this.attrs.blur = b;
                d.filter = e + aH + a5 + ".Blur(pixelradius=" + (+b || 1.5) + ")";
                d.margin = aI.format("-{0}px 0 0 -{0}px", ad(+b || 1.5))
            } else {
                d.filter = e;
                d.margin = 0;
                delete this.attrs.blur
            }
        };
        ae = function (d, b, bH, R) {
            var E = ay("group"),
                S = ay("oval"),
                e = S.style;
            E.style.cssText = "position:absolute;left:0;top:0;width:" + d.width + "px;height:" + d.height + "px";
            E.coordsize = aX;
            E.coordorigin = d.coordorigin;
            E[bk](S);
            var i = new aU(S, E, d);
            i.type = "circle";
            an(i, {
                stroke: "#000",
                fill: "none"
            });
            i.attrs.cx = b;
            i.attrs.cy = bH;
            i.attrs.r = R;
            i.setBox({
                x: b - R,
                y: bH - R,
                width: R * 2,
                height: R * 2
            });
            d.canvas[bk](E);
            return i
        };

        function at(b, E, d, e, i) {
            if (i) {
                return aI.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z", b + i, E, d - i * 2, i, -i, e - i * 2, i * 2 - d, i * 2 - e)
            } else {
                return aI.format("M{0},{1}l{2},0,0,{3},{4},0z", b, E, d, e, -d)
            }
        }
        bb = function (d, S, E, bH, e, b) {
            var bI = at(S, E, bH, e, b),
                i = d.path(bI),
                R = i.attrs;
            i.X = R.x = S;
            i.Y = R.y = E;
            i.W = R.width = bH;
            i.H = R.height = e;
            R.r = b;
            R.path = bI;
            i.type = "rect";
            return i
        };
        az = function (b, bI, bH, e, d) {
            var E = ay("group"),
                i = ay("oval"),
                S = i.style;
            E.style.cssText = "position:absolute;left:0;top:0;width:" + b.width + "px;height:" + b.height + "px";
            E.coordsize = aX;
            E.coordorigin = b.coordorigin;
            E[bk](i);
            var R = new aU(i, E, b);
            R.type = "ellipse";
            an(R, {
                stroke: "#000"
            });
            R.attrs.cx = bI;
            R.attrs.cy = bH;
            R.attrs.rx = e;
            R.attrs.ry = d;
            R.setBox({
                x: bI - e,
                y: bH - d,
                width: e * 2,
                height: d * 2
            });
            b.canvas[bk](E);
            return R
        };
        v = function (d, b, bH, S, bI, i) {
            var E = ay("group"),
                e = ay("image");
            E.style.cssText = "position:absolute;left:0;top:0;width:" + d.width + "px;height:" + d.height + "px";
            E.coordsize = aX;
            E.coordorigin = d.coordorigin;
            e.src = b;
            E[bk](e);
            var R = new aU(e, E, d);
            R.type = "image";
            R.attrs.src = b;
            R.attrs.x = bH;
            R.attrs.y = S;
            R.attrs.w = bI;
            R.attrs.h = i;
            R.setBox({
                x: bH,
                y: S,
                width: bI,
                height: i
            });
            d.canvas[bk](E);
            return R
        };
        ak = function (d, bI, bH, bJ) {
            var E = ay("group"),
                i = ay("shape"),
                S = i.style,
                bK = ay("path"),
                b = bK.style,
                e = ay("textpath");
            E.style.cssText = "position:absolute;left:0;top:0;width:" + d.width + "px;height:" + d.height + "px";
            E.coordsize = aX;
            E.coordorigin = d.coordorigin;
            bK.v = aI.format("m{0},{1}l{2},{1}", ad(bI * 10), ad(bH * 10), ad(bI * 10) + 1);
            bK.textpathok = true;
            S.width = d.width;
            S.height = d.height;
            e.string = bC(bJ);
            e.on = true;
            i[bk](e);
            i[bk](bK);
            E[bk](i);
            var R = new aU(e, E, d);
            R.shape = i;
            R.textpath = bK;
            R.type = "text";
            R.attrs.text = bJ;
            R.attrs.x = bI;
            R.attrs.y = bH;
            R.attrs.w = 1;
            R.attrs.h = 1;
            an(R, {
                font: q.font,
                stroke: "none",
                fill: "#000"
            });
            R.setBox();
            d.canvas[bk](E);
            return R
        };
        bA = function (e, b) {
            var d = this.canvas.style;
            e == +e && (e += "px");
            b == +b && (b += "px");
            d.width = e;
            d.height = b;
            d.clip = "rect(0 " + e + " " + b + " 0)";
            return this
        };
        var ay;
        aa.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !aa.namespaces.rvml && aa.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
            ay = function (b) {
                return aa.createElement("<rvml:" + b + ' class="rvml">')
            }
        } catch (aw) {
            ay = function (b) {
                return aa.createElement("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
        F = function () {
            var e = aJ[bB](0, arguments),
                b = e.container,
                bK = e.height,
                bM, d = e.width,
                bJ = e.x,
                bI = e.y,
                bL = e.cordSize,
                E = e.cordOrigin,
                i = e.vmlSize;
            if (!b) {
                throw new Error("VML container not found.")
            }
            var S = new bz,
                bH = S.canvas = aa.createElement("div"),
                R = bH.style;
            bJ = bJ || 0;
            bI = bI || 0;
            d = d || 512;
            bK = bK || 342;
            d == +d && (d += "px");
            bK == +bK && (bK += "px");
            S.width = 1000;
            S.height = 1000;
            S.coordsize = i;
            S.coordorigin = "0 0";
            S.span = aa.createElement("span");
            S.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            bH[bk](S.span);
            R.cssText = aI.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", d, bK);
            if (b == 1) {
                aa.body[bk](bH);
                R.left = bJ + "px";
                R.top = bI + "px";
                R.position = "absolute"
            } else {
                if (b.firstChild) {
                    b.insertBefore(bH, b.firstChild)
                } else {
                    b[bk](bH)
                }
            }
            be.call(S, S, aI.fn);
            return S
        };
        aZ.clear = function () {
            this.canvas.innerHTML = aP;
            this.span = aa.createElement("span");
            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            this.canvas[bk](this.span);
            this.bottom = this.top = null
        };
        aZ.remove = function () {
            this.canvas.parentNode.removeChild(this.canvas);
            for (var b in this) {
                this[b] = z(b)
            }
            return true
        }
    }
    var U = navigator.userAgent.match(/Version\/(.*?)\s/);
    if ((navigator.vendor == "Apple Computer, Inc.") && (U && U[1] < 4 || navigator.platform.slice(0, 2) == "iP")) {
        aZ.safari = function () {
            var b = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
                stroke: "none"
            });
            aQ.setTimeout(function () {
                b.remove()
            })
        }
    } else {
        aZ.safari = function () {}
    }
    var O = function () {
            this.returnValue = false
        },
        bv = function () {
            return this.originalEvent.preventDefault()
        },
        a3 = function () {
            this.cancelBubble = true
        },
        aD = function () {
            return this.originalEvent.stopPropagation()
        },
        av = (function () {
            if (aa.addEventListener) {
                return function (R, i, e, d) {
                    var b = W && bq[i] ? bq[i] : i;
                    var E = function (bJ) {
                        if (W && bq[ag](i)) {
                            for (var bH = 0, bI = bJ.targetTouches && bJ.targetTouches.length; bH < bI; bH++) {
                                if (bJ.targetTouches[bH].target == R) {
                                    var S = bJ;
                                    bJ = bJ.targetTouches[bH];
                                    bJ.originalEvent = S;
                                    bJ.preventDefault = bv;
                                    bJ.stopPropagation = aD;
                                    break
                                }
                            }
                        }
                        return e.call(d, bJ)
                    };
                    R.addEventListener(b, E, false);
                    return function () {
                        R.removeEventListener(b, E, false);
                        return true
                    }
                }
            } else {
                if (aa.attachEvent) {
                    return function (R, i, e, d) {
                        var E = function (S) {
                            S = S || aQ.event;
                            S.preventDefault = S.preventDefault || O;
                            S.stopPropagation = S.stopPropagation || a3;
                            return e.call(d, S)
                        };
                        R.attachEvent("on" + i, E);
                        var b = function () {
                            R.detachEvent("on" + i, E);
                            return true
                        };
                        return b
                    }
                }
            }
        })(),
        a8 = [],
        br = function (S) {
            var bI = S.clientX,
                bH = S.clientY,
                bJ = aa.documentElement.scrollTop || aa.body.scrollTop,
                bK = aa.documentElement.scrollLeft || aa.body.scrollLeft,
                b, d = a8.length;
            while (d--) {
                b = a8[d];
                if (W) {
                    var R = S.touches.length,
                        E;
                    while (R--) {
                        E = S.touches[R];
                        if (E.identifier == b.el._drag.id) {
                            bI = E.clientX;
                            bH = E.clientY;
                            (S.originalEvent ? S.originalEvent : S).preventDefault();
                            break
                        }
                    }
                } else {
                    S.preventDefault()
                }
                bI += bK;
                bH += bJ;
                b.move && b.move.call(b.move_scope || b.el, bI - b.el._drag.x, bH - b.el._drag.y, bI, bH, S)
            }
        },
        f = function (E) {
            aI.unmousemove(br).unmouseup(f);
            var d = a8.length,
                b;
            while (d--) {
                b = a8[d];
                b.el._drag = {};
                b.end && b.end.call(b.end_scope || b.start_scope || b.move_scope || b.el, E)
            }
            a8 = []
        };
    for (var ar = Q[s]; ar--;) {
        (function (b) {
            aI[b] = aU[bE][b] = function (e, d) {
                if (aI.is(e, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: b,
                        f: e,
                        unbind: av(this.shape || this.node || aa, b, e, d || this)
                    })
                }
                return this
            };
            aI["un" + b] = aU[bE]["un" + b] = function (i) {
                var e = this.events,
                    d = e[s];
                while (d--) {
                    if (e[d].name == b && e[d].f == i) {
                        e[d].unbind();
                        e.splice(d, 1);
                        !e.length && delete this.events;
                        return this
                    }
                }
                return this
            }
        })(Q[ar])
    }
    bc.hover = function (i, b, e, d) {
        return this.mouseover(i, e).mouseout(b, d || e)
    };
    bc.unhover = function (d, b) {
        return this.unmouseover(d).unmouseout(b)
    };
    bc.drag = function (d, R, E, b, e, i) {
        this._drag = {};
        this.mousedown(function (bH) {
            (bH.originalEvent || bH).preventDefault();
            var S = aa.documentElement.scrollTop || aa.body.scrollTop,
                bI = aa.documentElement.scrollLeft || aa.body.scrollLeft;
            this._drag.x = bH.clientX + bI;
            this._drag.y = bH.clientY + S;
            this._drag.id = bH.identifier;
            R && R.call(e || b || this, bH.clientX + bI, bH.clientY + S, bH);
            !a8.length && aI.mousemove(br).mouseup(f);
            a8.push({
                el: this,
                move: d,
                end: E,
                move_scope: b,
                start_scope: e,
                end_scope: i
            })
        });
        return this
    };
    bc.undrag = function (b, E, e) {
        var d = a8.length;
        while (d--) {
            a8[d].el == this && (a8[d].move == b && a8[d].end == e) && a8.splice(d++, 1)
        }!a8.length && aI.unmousemove(br).unmouseup(f)
    };
    aZ.circle = function (b, e, d) {
        return ae(this, b || 0, e || 0, d || 0)
    };
    aZ.rect = function (b, E, d, e, i) {
        return bb(this, b || 0, E || 0, d || 0, e || 0, i || 0)
    };
    aZ.ellipse = function (b, i, e, d) {
        return az(this, b || 0, i || 0, e || 0, d || 0)
    };
    aZ.path = function (b) {
        b && !aI.is(b, af) && !aI.is(b[0], a7) && (b += aP);
        return x(aI.format[bB](aI, arguments), this)
    };
    aZ.image = function (i, b, E, d, e) {
        return v(this, i || "about:blank", b || 0, E || 0, d || 0, e || 0)
    };
    aZ.text = function (b, e, d) {
        return ak(this, b || 0, e || 0, bC(d))
    };
    aZ.set = function (b) {
        arguments[s] > 1 && (b = Array[bE].splice.call(arguments, 0, arguments[s]));
        return new ah(b)
    };
    aZ.setSize = bA;
    aZ.top = aZ.bottom = null;
    aZ.raphael = aI;

    function C() {
        return this.x + aH + this.y
    }
    bc.resetScale = function () {
        if (this.removed) {
            return this
        }
        this._.sx = 1;
        this._.sy = 1;
        this.attrs.scale = "1 1"
    };
    bc.scale = function (bZ, bY, bQ, bO) {
        if (this.removed) {
            return this
        }
        if (bZ == null && bY == null) {
            return {
                x: this._.sx,
                y: this._.sy,
                toString: C
            }
        }
        bY = bY || bZ;
        !+bY && (bY = bZ);
        var d, b, b7, b6, ca = this.attrs;
        if (bZ != 0) {
            var cb = this.getBBox(),
                E = cb.x + cb.width / 2,
                e = cb.y + cb.height / 2,
                b4 = aq(bZ / this._.sx),
                b3 = aq(bY / this._.sy);
            bQ = (+bQ || bQ == 0) ? bQ : E;
            bO = (+bO || bO == 0) ? bO : e;
            var bJ = this._.sx > 0,
                bI = this._.sy > 0,
                bP = ~~(bZ / aq(bZ)),
                bN = ~~(bY / aq(bY)),
                S = b4 * bP,
                R = b3 * bN,
                b0 = this.node.style,
                bX = bQ + aq(E - bQ) * S * (E > bQ == bJ ? 1 : -1),
                bW = bO + aq(e - bO) * R * (e > bO == bI ? 1 : -1),
                bT = (bZ * bP > bY * bN ? b3 : b4);
            switch (this.type) {
                case "rect":
                case "image":
                    var bL = ca.width * b4,
                        bU = ca.height * b3;
                    this.attr({
                        height: bU,
                        r: ca.r * bT,
                        width: bL,
                        x: bX - bL / 2,
                        y: bW - bU / 2
                    });
                    break;
                case "circle":
                case "ellipse":
                    this.attr({
                        rx: ca.rx * b4,
                        ry: ca.ry * b3,
                        r: ca.r * bT,
                        cx: bX,
                        cy: bW
                    });
                    break;
                case "text":
                    this.attr({
                        x: bX,
                        y: bW
                    });
                    break;
                case "path":
                    var b2 = au(ca.path),
                        bK = true,
                        bS = bJ ? S : b4,
                        bR = bI ? R : b3;
                    for (var b9 = 0, bV = b2[s]; b9 < bV; b9++) {
                        var b5 = b2[b9],
                            bM = bo.call(b5[0]);
                        if (bM == "M" && bK) {
                            continue
                        } else {
                            bK = false
                        }
                        if (bM == "A") {
                            b5[b2[b9][s] - 2] *= bS;
                            b5[b2[b9][s] - 1] *= bR;
                            b5[1] *= b4;
                            b5[2] *= b3;
                            b5[5] = +(bP + bN ? !!+b5[5] : !+b5[5])
                        } else {
                            if (bM == "H") {
                                for (var b8 = 1, bH = b5[s]; b8 < bH; b8++) {
                                    b5[b8] *= bS
                                }
                            } else {
                                if (bM == "V") {
                                    for (b8 = 1, bH = b5[s]; b8 < bH; b8++) {
                                        b5[b8] *= bR
                                    }
                                } else {
                                    for (b8 = 1, bH = b5[s]; b8 < bH; b8++) {
                                        b5[b8] *= (b8 % 2) ? bS : bR
                                    }
                                }
                            }
                        }
                    }
                    var b1 = ai(b2);
                    d = bX - b1.x - b1.width / 2;
                    b = bW - b1.y - b1.height / 2;
                    b2[0][1] += d;
                    b2[0][2] += b;
                    this.attr({
                        path: b2
                    });
                    break
            }
            if (this.type in {
                    text: 1,
                    image: 1
                } && (bP != 1 || bN != 1)) {
                if (this.transformations) {
                    this.transformations[2] = "scale(" [bw](bP, ",", bN, ")");
                    this.node[D]("transform", this.transformations[aW](aH));
                    d = (bP == -1) ? -ca.x - (bL || 0) : ca.x;
                    b = (bN == -1) ? -ca.y - (bU || 0) : ca.y;
                    this.attr({
                        x: d,
                        y: b
                    });
                    ca.fx = bP - 1;
                    ca.fy = bN - 1
                } else {
                    this.node.filterMatrix = a5 + ".Matrix(M11=" [bw](bP, ", M12=0, M21=0, M22=", bN, ", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");
                    b0.filter = (this.node.filterMatrix || aP) + (this.node.filterOpacity || aP)
                }
            } else {
                if (this.transformations) {
                    this.transformations[2] = aP;
                    this.node[D]("transform", this.transformations[aW](aH));
                    ca.fx = 0;
                    ca.fy = 0
                } else {
                    this.node.filterMatrix = aP;
                    b0.filter = (this.node.filterMatrix || aP) + (this.node.filterOpacity || aP)
                }
            }
            ca.scale = [bZ, bY, bQ, bO][aW](aH);
            this._.sx = bZ;
            this._.sy = bY
        }
        return this
    };
    bc.clone = function () {
        if (this.removed) {
            return null
        }
        var b = this.attr();
        delete b.scale;
        delete b.translation;
        return this.paper[this.type]().attr(b)
    };
    var a2 = {},
        l = function (R, d, bJ, bI, bR, bQ, bP, bN, S) {
            var bM = 0,
                bL = 100,
                E = [R, d, bJ, bI, bR, bQ, bP, bN].join(),
                b = a2[E],
                bH, e;
            !b && (a2[E] = b = {
                data: []
            });
            b.timer && clearTimeout(b.timer);
            b.timer = setTimeout(function () {
                delete a2[E]
            }, 2000);
            if (S != null) {
                var bO = l(R, d, bJ, bI, bR, bQ, bP, bN);
                bL = ~~bO * 10
            }
            for (var bK = 0; bK < bL + 1; bK++) {
                if (b.data[S] > bK) {
                    e = b.data[bK * bL]
                } else {
                    e = aI.findDotsAtSegment(R, d, bJ, bI, bR, bQ, bP, bN, bK / bL);
                    b.data[bK] = e
                }
                bK && (bM += bl(bl(bH.x - e.x, 2) + bl(bH.y - e.y, 2), 0.5));
                if (S != null && bM >= S) {
                    return e
                }
                bH = e
            }
            if (S == null) {
                return bM
            }
        },
        a1 = function (b, d) {
            return function (bP, R, S) {
                bP = V(bP);
                var bL, bK, e, bH, E = "",
                    bO = {},
                    bM, bJ = 0;
                for (var bI = 0, bN = bP.length; bI < bN; bI++) {
                    e = bP[bI];
                    if (e[0] == "M") {
                        bL = +e[1];
                        bK = +e[2]
                    } else {
                        bH = l(bL, bK, e[1], e[2], e[3], e[4], e[5], e[6]);
                        if (bJ + bH > R) {
                            if (d && !bO.start) {
                                bM = l(bL, bK, e[1], e[2], e[3], e[4], e[5], e[6], R - bJ);
                                E += ["C", bM.start.x, bM.start.y, bM.m.x, bM.m.y, bM.x, bM.y];
                                if (S) {
                                    return E
                                }
                                bO.start = E;
                                E = ["M", bM.x, bM.y + "C", bM.n.x, bM.n.y, bM.end.x, bM.end.y, e[5], e[6]][aW]();
                                bJ += bH;
                                bL = +e[5];
                                bK = +e[6];
                                continue
                            }
                            if (!b && !d) {
                                bM = l(bL, bK, e[1], e[2], e[3], e[4], e[5], e[6], R - bJ);
                                return {
                                    x: bM.x,
                                    y: bM.y,
                                    alpha: bM.alpha
                                }
                            }
                        }
                        bJ += bH;
                        bL = +e[5];
                        bK = +e[6]
                    }
                    E += e
                }
                bO.end = E;
                bM = b ? bJ : d ? bO : aI.findDotsAtSegment(bL, bK, e[1], e[2], e[3], e[4], e[5], e[6], 1);
                bM.alpha && (bM = {
                    x: bM.x,
                    y: bM.y,
                    alpha: bM.alpha
                });
                return bM
            }
        };
    var aK = a1(1),
        L = a1(),
        Y = a1(0, 1);
    bc.getTotalLength = function () {
        if (this.type != "path") {
            return
        }
        if (this.node.getTotalLength) {
            return this.node.getTotalLength()
        }
        return aK(this.attrs.path)
    };
    bc.getPointAtLength = function (b) {
        if (this.type != "path") {
            return
        }
        return L(this.attrs.path, b)
    };
    bc.getSubpath = function (e, d) {
        if (this.type != "path") {
            return
        }
        if (aq(this.getTotalLength() - d) < "1e-6") {
            return Y(this.attrs.path, e).end
        }
        var b = Y(this.attrs.path, d, 1);
        return e ? Y(b, e).end : b
    };
    aI.easing_formulas = {
        linear: function (b) {
            return b
        },
        "<": function (b) {
            return bl(b, 3)
        },
        ">": function (b) {
            return bl(b - 1, 3) + 1
        },
        "<>": function (b) {
            b = b * 2;
            if (b < 1) {
                return bl(b, 3) / 2
            }
            b -= 2;
            return (bl(b, 3) + 2) / 2
        },
        backIn: function (d) {
            var b = 1.70158;
            return d * d * ((b + 1) * d - b)
        },
        backOut: function (d) {
            d = d - 1;
            var b = 1.70158;
            return d * d * ((b + 1) * d + b) + 1
        },
        elastic: function (e) {
            if (e == 0 || e == 1) {
                return e
            }
            var d = 0.3,
                b = d / 4;
            return bl(2, -10 * e) * ao.sin((e - b) * (2 * aM) / d) + 1
        },
        bounce: function (i) {
            var d = 7.5625,
                e = 2.75,
                b;
            if (i < (1 / e)) {
                b = d * i * i
            } else {
                if (i < (2 / e)) {
                    i -= (1.5 / e);
                    b = d * i * i + 0.75
                } else {
                    if (i < (2.5 / e)) {
                        i -= (2.25 / e);
                        b = d * i * i + 0.9375
                    } else {
                        i -= (2.625 / e);
                        b = d * i * i + 0.984375
                    }
                }
            }
            return b
        }
    };
    var X = [],
        bu = function () {
            var bI = +new Date;
            for (var bT = 0; bT < X[s]; bT++) {
                var bY = X[bT];
                if (bY.stop || bY.el.removed) {
                    continue
                }
                var R = bI - bY.start,
                    bQ = bY.ms,
                    bP = bY.easing,
                    bU = bY.from,
                    bN = bY.diff,
                    d = bY.to,
                    bM = bY.t,
                    bH = bY.el,
                    bO = {},
                    b;
                if (R < bQ) {
                    var E = bP(R / bQ);
                    for (var bR in bU) {
                        if (bU[ag](bR)) {
                            switch (am[bR]) {
                                case "along":
                                    b = E * bQ * bN[bR];
                                    d.back && (b = d.len - b);
                                    var bS = L(d[bR], b);
                                    bH.translate(bN.sx - bN.x || 0, bN.sy - bN.y || 0);
                                    bN.x = bS.x;
                                    bN.y = bS.y;
                                    bH.translate(bS.x - bN.sx, bS.y - bN.sy);
                                    d.rot && bH.rotate(bN.r + bS.alpha, bS.x, bS.y);
                                    break;
                                case aF:
                                    b = +bU[bR] + E * bQ * bN[bR];
                                    break;
                                case "colour":
                                    b = "rgb(" + [K(ad(bU[bR].r + E * bQ * bN[bR].r)), K(ad(bU[bR].g + E * bQ * bN[bR].g)), K(ad(bU[bR].b + E * bQ * bN[bR].b))][aW](",") + ")";
                                    break;
                                case "path":
                                    b = [];
                                    for (var bW = 0, bL = bU[bR][s]; bW < bL; bW++) {
                                        b[bW] = [bU[bR][bW][0]];
                                        for (var bV = 1, bX = bU[bR][bW][s]; bV < bX; bV++) {
                                            b[bW][bV] = +bU[bR][bW][bV] + E * bQ * bN[bR][bW][bV]
                                        }
                                        b[bW] = b[bW][aW](aH)
                                    }
                                    b = b[aW](aH);
                                    break;
                                case "csv":
                                    switch (bR) {
                                        case "translation":
                                            var bK = E * bQ * bN[bR][0] - bM.x,
                                                bJ = E * bQ * bN[bR][1] - bM.y;
                                            bM.x += bK;
                                            bM.y += bJ;
                                            b = bK + aH + bJ;
                                            break;
                                        case "rotation":
                                            b = +bU[bR][0] + E * bQ * bN[bR][0];
                                            bU[bR][1] && (b += "," + bU[bR][1] + "," + bU[bR][2]);
                                            break;
                                        case "scale":
                                            b = [+bU[bR][0] + E * bQ * bN[bR][0], +bU[bR][1] + E * bQ * bN[bR][1], (2 in d[bR] ? d[bR][2] : aP), (3 in d[bR] ? d[bR][3] : aP)][aW](aH);
                                            break;
                                        case "clip-rect":
                                            b = [];
                                            bW = 4;
                                            while (bW--) {
                                                b[bW] = +bU[bR][bW] + E * bQ * bN[bR][bW]
                                            }
                                            break
                                    }
                                    break;
                                default:
                                    var S = [].concat(bU[bR]);
                                    b = [];
                                    bW = bH.paper.customAttributes[bR].length;
                                    while (bW--) {
                                        b[bW] = +S[bW] + E * bQ * bN[bR][bW]
                                    }
                                    break
                            }
                            bO[bR] = b
                        }
                    }
                    bH.attr(bO);
                    bH._run && bH._run.call(bH)
                } else {
                    if (d.along) {
                        bS = L(d.along, d.len * !d.back);
                        bH.translate(bN.sx - (bN.x || 0) + bS.x - bN.sx, bN.sy - (bN.y || 0) + bS.y - bN.sy);
                        d.rot && bH.rotate(bN.r + bS.alpha, bS.x, bS.y)
                    }(bM.x || bM.y) && bH.translate(-bM.x, -bM.y);
                    d.scale && (d.scale += aP);
                    bH.attr(d);
                    X.splice(bT--, 1)
                }
            }
            aI.svg && bH && bH.paper && bH.paper.safari();
            X[s] && setTimeout(bu)
        },
        by = function (b, e, R, E, i) {
            var d = R - E;
            e.timeouts.push(setTimeout(function () {
                aI.is(i, "function") && i.call(e);
                e.animate(b, d, b.easing)
            }, E))
        },
        K = function (b) {
            return m(bi(b, 255), 0)
        },
        A = function (b, e) {
            if (b == null) {
                return {
                    x: this._.tx,
                    y: this._.ty,
                    toString: C
                }
            }
            this._.tx += +b;
            this._.ty += +e;
            switch (this.type) {
                case "circle":
                case "ellipse":
                    this.attr({
                        cx: +b + this.attrs.cx,
                        cy: +e + this.attrs.cy
                    });
                    break;
                case "rect":
                case "image":
                case "text":
                    this.attr({
                        x: +b + this.attrs.x,
                        y: +e + this.attrs.y
                    });
                    break;
                case "path":
                    var d = au(this.attrs.path);
                    d[0][1] += +b;
                    d[0][2] += +e;
                    this.attr({
                        path: d
                    });
                    break
            }
            return this
        };
    bc.animateWith = function (e, R, b, bH, S) {
        for (var d = 0, E = X.length; d < E; d++) {
            if (X[d].el.id == e.id) {
                R.start = X[d].start
            }
        }
        return this.animate(R, b, bH, S)
    };
    bc.animateAlong = aV();
    bc.animateAlongBack = aV(1);

    function aV(b) {
        return function (i, e, d, R) {
            var E = {
                back: b
            };
            aI.is(d, "function") ? (R = d) : (E.rot = d);
            i && i.constructor == aU && (i = i.attrs.path);
            i && (E.along = i);
            return this.animate(E, e, R)
        }
    }

    function aY(bN, i, d, bM, bL, bH) {
        var bI = 3 * i,
            bK = 3 * (bM - i) - bI,
            b = 1 - bI - bK,
            S = 3 * d,
            bJ = 3 * (bL - d) - S,
            bO = 1 - S - bJ;

        function R(bP) {
            return ((b * bP + bK) * bP + bI) * bP
        }

        function e(bP, bR) {
            var bQ = E(bP, bR);
            return ((bO * bQ + bJ) * bQ + S) * bQ
        }

        function E(bP, bW) {
            var bV, bU, bS, bQ, bT, bR;
            for (bS = bP, bR = 0; bR < 8; bR++) {
                bQ = R(bS) - bP;
                if (aq(bQ) < bW) {
                    return bS
                }
                bT = (3 * b * bS + 2 * bK) * bS + bI;
                if (aq(bT) < 0.000001) {
                    break
                }
                bS = bS - bQ / bT
            }
            bV = 0;
            bU = 1;
            bS = bP;
            if (bS < bV) {
                return bV
            }
            if (bS > bU) {
                return bU
            }
            while (bV < bU) {
                bQ = R(bS);
                if (aq(bQ - bP) < bW) {
                    return bS
                }
                if (bP > bQ) {
                    bV = bS
                } else {
                    bU = bS
                }
                bS = (bU - bV) / 2 + bV
            }
            return bS
        }
        return e(bN, 1 / (200 * bH))
    }
    bc.onAnimation = function (b) {
        this._run = b || 0;
        return this
    };
    bc.animate = function (b0, bQ, bP, R) {
        var d = this;
        d.timeouts = d.timeouts || [];
        if (aI.is(bP, "function") || !bP) {
            R = bP || null
        }
        if (d.removed) {
            R && R.call(d);
            return d
        }
        var bU = {},
            e = {},
            S = false,
            bL = {};
        for (var bR in b0) {
            if (b0[ag](bR)) {
                if (am[ag](bR) || d.paper.customAttributes[ag](bR)) {
                    S = true;
                    bU[bR] = d.attr(bR);
                    (bU[bR] == null) && (bU[bR] = q[bR]);
                    e[bR] = b0[bR];
                    switch (am[bR]) {
                        case "along":
                            var bY = aK(b0[bR]);
                            var bS = L(b0[bR], bY * !!b0.back);
                            var bH = d.getBBox();
                            bL[bR] = bY / bQ;
                            bL.tx = bH.x;
                            bL.ty = bH.y;
                            bL.sx = bS.x;
                            bL.sy = bS.y;
                            e.rot = b0.rot;
                            e.back = b0.back;
                            e.len = bY;
                            b0.rot && (bL.r = aj(d.rotate()) || 0);
                            break;
                        case aF:
                            bL[bR] = (e[bR] - bU[bR]) / bQ;
                            break;
                        case "colour":
                            bU[bR] = aI.getRGB(bU[bR]);
                            var bT = aI.getRGB(e[bR]);
                            bL[bR] = {
                                r: (bT.r - bU[bR].r) / bQ,
                                g: (bT.g - bU[bR].g) / bQ,
                                b: (bT.b - bU[bR].b) / bQ
                            };
                            break;
                        case "path":
                            var bI = V(bU[bR], e[bR]);
                            bU[bR] = bI[0];
                            var bN = bI[1];
                            bL[bR] = [];
                            for (var bX = 0, bK = bU[bR][s]; bX < bK; bX++) {
                                bL[bR][bX] = [0];
                                for (var bW = 1, bZ = bU[bR][bX][s]; bW < bZ; bW++) {
                                    bL[bR][bX][bW] = (bN[bX][bW] - bU[bR][bX][bW]) / bQ
                                }
                            }
                            break;
                        case "csv":
                            var b = bC(b0[bR])[I](a),
                                bJ = bC(bU[bR])[I](a);
                            switch (bR) {
                                case "translation":
                                    bU[bR] = [0, 0];
                                    bL[bR] = [b[0] / bQ, b[1] / bQ];
                                    break;
                                case "rotation":
                                    bU[bR] = (bJ[1] == b[1] && bJ[2] == b[2]) ? bJ : [0, b[1], b[2]];
                                    bL[bR] = [(b[0] - bU[bR][0]) / bQ, 0, 0];
                                    break;
                                case "scale":
                                    b0[bR] = b;
                                    bU[bR] = bC(bU[bR])[I](a);
                                    bL[bR] = [(b[0] - bU[bR][0]) / bQ, (b[1] - bU[bR][1]) / bQ, 0, 0];
                                    break;
                                case "clip-rect":
                                    bU[bR] = bC(bU[bR])[I](a);
                                    bL[bR] = [];
                                    bX = 4;
                                    while (bX--) {
                                        bL[bR][bX] = (b[bX] - bU[bR][bX]) / bQ
                                    }
                                    break
                            }
                            e[bR] = b;
                            break;
                        default:
                            b = [].concat(b0[bR]);
                            bJ = [].concat(bU[bR]);
                            bL[bR] = [];
                            bX = d.paper.customAttributes[bR][s];
                            while (bX--) {
                                bL[bR][bX] = ((b[bX] || 0) - (bJ[bX] || 0)) / bQ
                            }
                            break
                    }
                }
            }
        }
        if (!S) {
            var bO = [],
                E;
            for (var b1 in b0) {
                if (b0[ag](b1) && bf.test(b1)) {
                    bR = {
                        value: b0[b1]
                    };
                    b1 == "from" && (b1 = 0);
                    b1 == "to" && (b1 = 100);
                    bR.key = T(b1, 10);
                    bO.push(bR)
                }
            }
            bO.sort(bm);
            if (bO[0].key) {
                bO.unshift({
                    key: 0,
                    value: d.attrs
                })
            }
            for (bX = 0, bK = bO[s]; bX < bK; bX++) {
                by(bO[bX].value, d, bQ / 100 * bO[bX].key, bQ / 100 * (bO[bX - 1] && bO[bX - 1].key || 0), bO[bX - 1] && bO[bX - 1].value.callback)
            }
            E = bO[bO[s] - 1].value.callback;
            if (E) {
                d.timeouts.push(setTimeout(function () {
                    E.call(d)
                }, bQ))
            }
        } else {
            var bV = aI.easing_formulas[bP];
            if (!bV) {
                bV = bC(bP).match(c);
                if (bV && bV[s] == 5) {
                    var bM = bV;
                    bV = function (i) {
                        return aY(i, +bM[1], +bM[2], +bM[3], +bM[4], bQ)
                    }
                } else {
                    bV = function (i) {
                        return i
                    }
                }
            }
            X.push({
                start: b0.start || +new Date,
                ms: bQ,
                easing: bV,
                from: bU,
                diff: bL,
                to: e,
                el: d,
                t: {
                    x: 0,
                    y: 0
                }
            });
            aI.is(R, "function") && (d._ac = setTimeout(function () {
                R.call(d)
            }, bQ));
            X[s] == 1 && setTimeout(bu)
        }
        return this
    };
    bc.stop = function () {
        for (var b = 0; b < X.length; b++) {
            X[b].el.id == this.id && X.splice(b--, 1)
        }
        for (b = 0, ii = this.timeouts && this.timeouts.length; b < ii; b++) {
            clearTimeout(this.timeouts[b])
        }
        this.timeouts = [];
        clearTimeout(this._ac);
        delete this._ac;
        return this
    };
    bc.translate = function (b, d) {
        return this.attr({
            translation: b + " " + d
        })
    };
    bc[a0] = function () {
        return "Rapha\xebl\u2019s object"
    };
    aI.ae = X;
    var ah = function (b) {
        this.items = [];
        this[s] = 0;
        this.type = "set";
        if (b) {
            for (var d = 0, e = b[s]; d < e; d++) {
                if (b[d] && (b[d].constructor == aU || b[d].constructor == ah)) {
                    this[this.items[s]] = this.items[this.items[s]] = b[d];
                    this[s]++
                }
            }
        }
    };
    ah[bE][k] = function () {
        var E, b;
        for (var d = 0, e = arguments[s]; d < e; d++) {
            E = arguments[d];
            if (E && (E.constructor == aU || E.constructor == ah)) {
                b = this.items[s];
                this[b] = this.items[b] = E;
                this[s]++
            }
        }
        return this
    };
    ah[bE].pop = function () {
        delete this[this[s]--];
        return this.items.pop()
    };
    for (var H in bc) {
        if (bc[ag](H)) {
            ah[bE][H] = (function (b) {
                return function () {
                    for (var d = 0, e = this.items[s]; d < e; d++) {
                        this.items[d][b][bB](this.items[d], arguments)
                    }
                    return this
                }
            })(H)
        }
    }
    ah[bE].attr = function (d, S) {
        if (d && aI.is(d, a7) && aI.is(d[0], "object")) {
            for (var b = 0, R = d[s]; b < R; b++) {
                this.items[b].attr(d[b])
            }
        } else {
            for (var e = 0, E = this.items[s]; e < E; e++) {
                this.items[e].attr(d, S)
            }
        }
        return this
    };
    ah[bE].animate = function (d, b, S, bI) {
        (aI.is(S, "function") || !S) && (bI = S || null);
        var R = this.items[s],
            e = R,
            bJ, bH = this,
            E;
        bI && (E = function () {
            !--R && bI.call(bH)
        });
        S = aI.is(S, af) ? S : E;
        bJ = this.items[--e].animate(d, b, S, E);
        while (e--) {
            this.items[e] && !this.items[e].removed && this.items[e].animateWith(bJ, d, b, S, E)
        }
        return this
    };
    ah[bE].insertAfter = function (d) {
        var b = this.items[s];
        while (b--) {
            this.items[b].insertAfter(d)
        }
        return this
    };
    ah[bE].getBBox = function () {
        var b = [],
            S = [],
            d = [],
            E = [];
        for (var e = this.items[s]; e--;) {
            var R = this.items[e].getBBox();
            b[k](R.x);
            S[k](R.y);
            d[k](R.x + R.width);
            E[k](R.y + R.height)
        }
        b = bi[bB](0, b);
        S = bi[bB](0, S);
        return {
            x: b,
            y: S,
            width: m[bB](0, d) - b,
            height: m[bB](0, E) - S
        }
    };
    ah[bE].clone = function (e) {
        e = new ah;
        for (var b = 0, d = this.items[s]; b < d; b++) {
            e[k](this.items[b].clone())
        }
        return e
    };
    aI.registerFont = function (d) {
        if (!d.face) {
            return d
        }
        this.fonts = this.fonts || {};
        var i = {
                w: d.w,
                face: {},
                glyphs: {}
            },
            e = d.face["font-family"];
        for (var S in d.face) {
            if (d.face[ag](S)) {
                i.face[S] = d.face[S]
            }
        }
        if (this.fonts[e]) {
            this.fonts[e][k](i)
        } else {
            this.fonts[e] = [i]
        }
        if (!d.svg) {
            i.face["units-per-em"] = T(d.face["units-per-em"], 10);
            for (var E in d.glyphs) {
                if (d.glyphs[ag](E)) {
                    var R = d.glyphs[E];
                    i.glyphs[E] = {
                        w: R.w,
                        k: {},
                        d: R.d && "M" + R.d[bs](/[mlcxtrv]/g, function (bH) {
                            return {
                                l: "L",
                                c: "C",
                                x: "z",
                                t: "m",
                                r: "l",
                                v: "c"
                            } [bH] || "M"
                        }) + "z"
                    };
                    if (R.k) {
                        for (var b in R.k) {
                            if (R[ag](b)) {
                                i.glyphs[E].k[b] = R.k[b]
                            }
                        }
                    }
                }
            }
        }
        return d
    };
    aZ.getFont = function (bI, bJ, d, E) {
        E = E || "normal";
        d = d || "normal";
        bJ = +bJ || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        } [bJ] || 400;
        if (!aI.fonts) {
            return
        }
        var R = aI.fonts[bI];
        if (!R) {
            var e = new RegExp("(^|\\s)" + bI[bs](/[^\w\d\s+!~.:_-]/g, aP) + "(\\s|$)", "i");
            for (var b in aI.fonts) {
                if (aI.fonts[ag](b)) {
                    if (e.test(b)) {
                        R = aI.fonts[b];
                        break
                    }
                }
            }
        }
        var S;
        if (R) {
            for (var bH = 0, bK = R[s]; bH < bK; bH++) {
                S = R[bH];
                if (S.face["font-weight"] == bJ && (S.face["font-style"] == d || !S.face["font-style"]) && S.face["font-stretch"] == E) {
                    break
                }
            }
        }
        return S
    };
    aZ.print = function (R, E, b, bI, bJ, bS, d) {
        bS = bS || "middle";
        d = m(bi(d || 0, 1), -1);
        var bO = this.set(),
            bR = bC(b)[I](aP),
            bP = 0,
            bM = aP,
            bT;
        aI.is(bI, b) && (bI = this.getFont(bI));
        if (bI) {
            bT = (bJ || 16) / bI.face["units-per-em"];
            var e = bI.face.bbox.split(a),
                bH = +e[0],
                bK = +e[1] + (bS == "baseline" ? e[3] - e[1] + (+bI.face.descent) : (e[3] - e[1]) / 2);
            for (var bN = 0, S = bR[s]; bN < S; bN++) {
                var bL = bN && bI.glyphs[bR[bN - 1]] || {},
                    bQ = bI.glyphs[bR[bN]];
                bP += bN ? (bL.w || bI.w) + (bL.k && bL.k[bR[bN]] || 0) + (bI.w * d) : 0;
                bQ && bQ.d && bO[k](this.path(bQ.d).attr({
                    fill: "#000",
                    stroke: "none",
                    translation: [bP, 0]
                }))
            }
            bO.scale(bT, bT, bH, bK).translate(R - bH, E - bK)
        }
        return bO
    };
    aI.format = function (d, e) {
        var b = aI.is(e, a7) ? [0][bw](e) : arguments;
        d && aI.is(d, af) && b[s] - 1 && (d = d[bs](bn, function (R, E) {
            return b[++E] == null ? aP : b[E]
        }));
        return d || aP
    };
    aI.ninja = function () {
        r.was ? (aQ.Raphael = r.is) : delete Raphael;
        return aI
    };
    aI.el = bc;
    aI.st = ah[bE];
    r.was ? (aQ.Raphael = aI) : (Raphael = aI)
})();