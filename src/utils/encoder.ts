// @ts-nocheck
/* eslint-disable */

function n(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (null != n) {
        var i,
          o,
          a = [],
          r = !0,
          l = !1;
        try {
          for (n = n.call(e); !(r = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); r = !0);
        } catch (e) {
          (l = !0), (o = e);
        } finally {
          try {
            r || null == n.return || n.return();
          } finally {
            if (l) throw o;
          }
        }
        return a;
      }
    })(e, t) ||
    a(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}

function i(e, t) {
  var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
  if (!n) {
    if (Array.isArray(e) || (n = a(e)) || (t && e && 'number' == typeof e.length)) {
      n && (e = n);
      var i = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return i >= e.length
            ? {
                done: !0,
              }
            : {
                done: !1,
                value: e[i++],
              };
        },
        e: function (e) {
          throw e;
        },
        f: o,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var r,
    l = !0,
    s = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return (l = e.done), e;
    },
    e: function (e) {
      (s = !0), (r = e);
    },
    f: function () {
      try {
        l || null == n.return || n.return();
      } finally {
        if (s) throw r;
      }
    },
  };
}

function o(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return r(e);
    })(e) ||
    (function (e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
    })(e) ||
    a(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}

function a(e, t) {
  if (e) {
    if ('string' == typeof e) return r(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? r(e, t)
        : void 0
    );
  }
}

function r(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
  return i;
}

function l(e) {
  return (l =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        })(e);
}

function s(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}

function d(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i);
  }
}

function c(e, t, n) {
  return (
    t && d(e.prototype, t),
    n && d(e, n),
    Object.defineProperty(e, 'prototype', {
      writable: !1,
    }),
    e
  );
}

function m(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var u,
  p = new Uint8Array(16);

function f() {
  if (!u && !(u = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  return u(p);
}
var g = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function h(e) {
  return 'string' == typeof e && g.test(e);
}
for (var b = [], y = 0; y < 256; ++y) b.push((y + 256).toString(16).slice(1));

function _(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return (
    b[e[t + 0]] +
    b[e[t + 1]] +
    b[e[t + 2]] +
    b[e[t + 3]] +
    '-' +
    b[e[t + 4]] +
    b[e[t + 5]] +
    '-' +
    b[e[t + 6]] +
    b[e[t + 7]] +
    '-' +
    b[e[t + 8]] +
    b[e[t + 9]] +
    '-' +
    b[e[t + 10]] +
    b[e[t + 11]] +
    b[e[t + 12]] +
    b[e[t + 13]] +
    b[e[t + 14]] +
    b[e[t + 15]]
  ).toLowerCase();
}

function v(e) {
  if (!h(e)) throw TypeError('Invalid UUID');
  var t,
    n = new Uint8Array(16);
  return (
    (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
    (n[1] = (t >>> 16) & 255),
    (n[2] = (t >>> 8) & 255),
    (n[3] = 255 & t),
    (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
    (n[5] = 255 & t),
    (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
    (n[7] = 255 & t),
    (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
    (n[9] = 255 & t),
    (n[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
    (n[11] = (t / 4294967296) & 255),
    (n[12] = (t >>> 24) & 255),
    (n[13] = (t >>> 16) & 255),
    (n[14] = (t >>> 8) & 255),
    (n[15] = 255 & t),
    n
  );
}

function k(e, t, n) {
  function i(e, i, o, a) {
    var r;
    if (
      ('string' == typeof e &&
        (e = (function (e) {
          e = unescape(encodeURIComponent(e));
          for (var t = [], n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
          return t;
        })(e)),
      'string' == typeof i && (i = v(i)),
      16 !== (null === (r = i) || void 0 === r ? void 0 : r.length))
    )
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    var l = new Uint8Array(16 + e.length);
    if ((l.set(i), l.set(e, i.length), ((l = n(l))[6] = (15 & l[6]) | t), (l[8] = (63 & l[8]) | 128), o)) {
      a = a || 0;
      for (var s = 0; s < 16; ++s) o[a + s] = l[s];
      return o;
    }
    return _(l);
  }
  try {
    i.name = e;
  } catch (e) {}
  return (i.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'), (i.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'), i;
}

function F(e) {
  return 14 + (((e + 64) >>> 9) << 4) + 1;
}

function E(e, t) {
  var n = (65535 & e) + (65535 & t);
  return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
}

function T(e, t, n, i, o, a) {
  return E(((r = E(E(t, e), E(i, a))) << (l = o)) | (r >>> (32 - l)), n);
  var r, l;
}

function C(e, t, n, i, o, a, r) {
  return T((t & n) | (~t & i), e, t, o, a, r);
}

function P(e, t, n, i, o, a, r) {
  return T((t & i) | (n & ~i), e, t, o, a, r);
}

function O(e, t, n, i, o, a, r) {
  return T(t ^ n ^ i, e, t, o, a, r);
}

function N(e, t, n, i, o, a, r) {
  return T(n ^ (t | ~i), e, t, o, a, r);
}
k('v3', 48, function (e) {
  if ('string' == typeof e) {
    var t = unescape(encodeURIComponent(e));
    e = new Uint8Array(t.length);
    for (var n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
  }
  return (function (e) {
    for (var t = [], n = 32 * e.length, i = '0123456789abcdef', o = 0; o < n; o += 8) {
      var a = (e[o >> 5] >>> o % 32) & 255,
        r = parseInt(i.charAt((a >>> 4) & 15) + i.charAt(15 & a), 16);
      t.push(r);
    }
    return t;
  })(
    (function (e, t) {
      (e[t >> 5] |= 128 << t % 32), (e[F(t) - 1] = t);
      for (var n = 1732584193, i = -271733879, o = -1732584194, a = 271733878, r = 0; r < e.length; r += 16) {
        var l = n,
          s = i,
          d = o,
          c = a;
        (n = C(n, i, o, a, e[r], 7, -680876936)),
          (a = C(a, n, i, o, e[r + 1], 12, -389564586)),
          (o = C(o, a, n, i, e[r + 2], 17, 606105819)),
          (i = C(i, o, a, n, e[r + 3], 22, -1044525330)),
          (n = C(n, i, o, a, e[r + 4], 7, -176418897)),
          (a = C(a, n, i, o, e[r + 5], 12, 1200080426)),
          (o = C(o, a, n, i, e[r + 6], 17, -1473231341)),
          (i = C(i, o, a, n, e[r + 7], 22, -45705983)),
          (n = C(n, i, o, a, e[r + 8], 7, 1770035416)),
          (a = C(a, n, i, o, e[r + 9], 12, -1958414417)),
          (o = C(o, a, n, i, e[r + 10], 17, -42063)),
          (i = C(i, o, a, n, e[r + 11], 22, -1990404162)),
          (n = C(n, i, o, a, e[r + 12], 7, 1804603682)),
          (a = C(a, n, i, o, e[r + 13], 12, -40341101)),
          (o = C(o, a, n, i, e[r + 14], 17, -1502002290)),
          (n = P(n, (i = C(i, o, a, n, e[r + 15], 22, 1236535329)), o, a, e[r + 1], 5, -165796510)),
          (a = P(a, n, i, o, e[r + 6], 9, -1069501632)),
          (o = P(o, a, n, i, e[r + 11], 14, 643717713)),
          (i = P(i, o, a, n, e[r], 20, -373897302)),
          (n = P(n, i, o, a, e[r + 5], 5, -701558691)),
          (a = P(a, n, i, o, e[r + 10], 9, 38016083)),
          (o = P(o, a, n, i, e[r + 15], 14, -660478335)),
          (i = P(i, o, a, n, e[r + 4], 20, -405537848)),
          (n = P(n, i, o, a, e[r + 9], 5, 568446438)),
          (a = P(a, n, i, o, e[r + 14], 9, -1019803690)),
          (o = P(o, a, n, i, e[r + 3], 14, -187363961)),
          (i = P(i, o, a, n, e[r + 8], 20, 1163531501)),
          (n = P(n, i, o, a, e[r + 13], 5, -1444681467)),
          (a = P(a, n, i, o, e[r + 2], 9, -51403784)),
          (o = P(o, a, n, i, e[r + 7], 14, 1735328473)),
          (n = O(n, (i = P(i, o, a, n, e[r + 12], 20, -1926607734)), o, a, e[r + 5], 4, -378558)),
          (a = O(a, n, i, o, e[r + 8], 11, -2022574463)),
          (o = O(o, a, n, i, e[r + 11], 16, 1839030562)),
          (i = O(i, o, a, n, e[r + 14], 23, -35309556)),
          (n = O(n, i, o, a, e[r + 1], 4, -1530992060)),
          (a = O(a, n, i, o, e[r + 4], 11, 1272893353)),
          (o = O(o, a, n, i, e[r + 7], 16, -155497632)),
          (i = O(i, o, a, n, e[r + 10], 23, -1094730640)),
          (n = O(n, i, o, a, e[r + 13], 4, 681279174)),
          (a = O(a, n, i, o, e[r], 11, -358537222)),
          (o = O(o, a, n, i, e[r + 3], 16, -722521979)),
          (i = O(i, o, a, n, e[r + 6], 23, 76029189)),
          (n = O(n, i, o, a, e[r + 9], 4, -640364487)),
          (a = O(a, n, i, o, e[r + 12], 11, -421815835)),
          (o = O(o, a, n, i, e[r + 15], 16, 530742520)),
          (n = N(n, (i = O(i, o, a, n, e[r + 2], 23, -995338651)), o, a, e[r], 6, -198630844)),
          (a = N(a, n, i, o, e[r + 7], 10, 1126891415)),
          (o = N(o, a, n, i, e[r + 14], 15, -1416354905)),
          (i = N(i, o, a, n, e[r + 5], 21, -57434055)),
          (n = N(n, i, o, a, e[r + 12], 6, 1700485571)),
          (a = N(a, n, i, o, e[r + 3], 10, -1894986606)),
          (o = N(o, a, n, i, e[r + 10], 15, -1051523)),
          (i = N(i, o, a, n, e[r + 1], 21, -2054922799)),
          (n = N(n, i, o, a, e[r + 8], 6, 1873313359)),
          (a = N(a, n, i, o, e[r + 15], 10, -30611744)),
          (o = N(o, a, n, i, e[r + 6], 15, -1560198380)),
          (i = N(i, o, a, n, e[r + 13], 21, 1309151649)),
          (n = N(n, i, o, a, e[r + 4], 6, -145523070)),
          (a = N(a, n, i, o, e[r + 11], 10, -1120210379)),
          (o = N(o, a, n, i, e[r + 2], 15, 718787259)),
          (i = N(i, o, a, n, e[r + 9], 21, -343485551)),
          (n = E(n, l)),
          (i = E(i, s)),
          (o = E(o, d)),
          (a = E(a, c));
      }
      return [n, i, o, a];
    })(
      (function (e) {
        if (0 === e.length) return [];
        for (var t = 8 * e.length, n = new Uint32Array(F(t)), i = 0; i < t; i += 8) n[i >> 5] |= (255 & e[i / 8]) << i % 32;
        return n;
      })(e),
      8 * e.length,
    ),
  );
});
var I = {
  randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
};

function S(e, t, n) {
  if (I.randomUUID && !t && !e) return I.randomUUID();
  var i = (e = e || {}).random || (e.rng || f)();
  if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
    n = n || 0;
    for (var o = 0; o < 16; ++o) t[n + o] = i[o];
    return t;
  }
  return _(i);
}

function A(e, t, n, i) {
  switch (e) {
    case 0:
      return (t & n) ^ (~t & i);
    case 1:
    case 3:
      return t ^ n ^ i;
    case 2:
      return (t & n) ^ (t & i) ^ (n & i);
  }
}

function w(e, t) {
  return (e << t) | (e >>> (32 - t));
}
k('v5', 80, function (e) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782],
    n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if ('string' == typeof e) {
    var i = unescape(encodeURIComponent(e));
    e = [];
    for (var o = 0; o < i.length; ++o) e.push(i.charCodeAt(o));
  } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
  e.push(128);
  for (var a = e.length / 4 + 2, r = Math.ceil(a / 16), l = new Array(r), s = 0; s < r; ++s) {
    for (var d = new Uint32Array(16), c = 0; c < 16; ++c)
      d[c] = (e[64 * s + 4 * c] << 24) | (e[64 * s + 4 * c + 1] << 16) | (e[64 * s + 4 * c + 2] << 8) | e[64 * s + 4 * c + 3];
    l[s] = d;
  }
  (l[r - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
    (l[r - 1][14] = Math.floor(l[r - 1][14])),
    (l[r - 1][15] = (8 * (e.length - 1)) & 4294967295);
  for (var m = 0; m < r; ++m) {
    for (var u = new Uint32Array(80), p = 0; p < 16; ++p) u[p] = l[m][p];
    for (var f = 16; f < 80; ++f) u[f] = w(u[f - 3] ^ u[f - 8] ^ u[f - 14] ^ u[f - 16], 1);
    for (var g = n[0], h = n[1], b = n[2], y = n[3], _ = n[4], v = 0; v < 80; ++v) {
      var k = Math.floor(v / 20),
        F = (w(g, 5) + A(k, h, b, y) + _ + t[k] + u[v]) >>> 0;
      (_ = y), (y = b), (b = w(h, 30) >>> 0), (h = g), (g = F);
    }
    (n[0] = (n[0] + g) >>> 0),
      (n[1] = (n[1] + h) >>> 0),
      (n[2] = (n[2] + b) >>> 0),
      (n[3] = (n[3] + y) >>> 0),
      (n[4] = (n[4] + _) >>> 0);
  }
  return [
    (n[0] >> 24) & 255,
    (n[0] >> 16) & 255,
    (n[0] >> 8) & 255,
    255 & n[0],
    (n[1] >> 24) & 255,
    (n[1] >> 16) & 255,
    (n[1] >> 8) & 255,
    255 & n[1],
    (n[2] >> 24) & 255,
    (n[2] >> 16) & 255,
    (n[2] >> 8) & 255,
    255 & n[2],
    (n[3] >> 24) & 255,
    (n[3] >> 16) & 255,
    (n[3] >> 8) & 255,
    255 & n[3],
    (n[4] >> 24) & 255,
    (n[4] >> 16) & 255,
    (n[4] >> 8) & 255,
    255 & n[4],
  ];
});
var D = Uint8Array,
  R = Uint16Array,
  M = Uint32Array,
  x = new D([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
  L = new D([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
  U = new D([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
  j = function (e, t) {
    for (var n = new R(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
    var o = new M(n[30]);
    for (i = 1; i < 30; ++i) for (var a = n[i]; a < n[i + 1]; ++a) o[a] = ((a - n[i]) << 5) | i;
    return [n, o];
  },
  V = j(x, 2),
  z = V[0],
  B = V[1];
(z[28] = 258), (B[258] = 28);
for (var G = j(L, 0)[1], q = new R(32768), H = 0; H < 32768; ++H) {
  var W = ((43690 & H) >>> 1) | ((21845 & H) << 1);
  (W = ((61680 & (W = ((52428 & W) >>> 2) | ((13107 & W) << 2))) >>> 4) | ((3855 & W) << 4)),
    (q[H] = (((65280 & W) >>> 8) | ((255 & W) << 8)) >>> 1);
}
var Y = function (e, t, n) {
    for (var i = e.length, o = 0, a = new R(t); o < i; ++o) e[o] && ++a[e[o] - 1];
    var r,
      l = new R(t);
    for (o = 0; o < t; ++o) l[o] = (l[o - 1] + a[o - 1]) << 1;
    if (n) {
      r = new R(1 << t);
      var s = 15 - t;
      for (o = 0; o < i; ++o)
        if (e[o])
          for (var d = (o << 4) | e[o], c = t - e[o], m = l[e[o] - 1]++ << c, u = m | ((1 << c) - 1); m <= u; ++m)
            r[q[m] >>> s] = d;
    } else for (r = new R(i), o = 0; o < i; ++o) e[o] && (r[o] = q[l[e[o] - 1]++] >>> (15 - e[o]));
    return r;
  },
  K = new D(288);
for (H = 0; H < 144; ++H) K[H] = 8;
for (H = 144; H < 256; ++H) K[H] = 9;
for (H = 256; H < 280; ++H) K[H] = 7;
for (H = 280; H < 288; ++H) K[H] = 8;
var J = new D(32);
for (H = 0; H < 32; ++H) J[H] = 5;
var $ = Y(K, 9, 0),
  Q = Y(J, 5, 0),
  X = function (e) {
    return ((e + 7) / 8) | 0;
  },
  Z = function (e, t, n) {
    n <<= 7 & t;
    var i = (t / 8) | 0;
    (e[i] |= n), (e[i + 1] |= n >>> 8);
  },
  ee = function (e, t, n) {
    n <<= 7 & t;
    var i = (t / 8) | 0;
    (e[i] |= n), (e[i + 1] |= n >>> 8), (e[i + 2] |= n >>> 16);
  },
  te = function (e, t) {
    for (var n = [], i = 0; i < e.length; ++i)
      e[i] &&
        n.push({
          s: i,
          f: e[i],
        });
    var o = n.length,
      a = n.slice();
    if (!o) return [se, 0];
    if (1 == o) {
      var r = new D(n[0].s + 1);
      return (r[n[0].s] = 1), [r, 1];
    }
    n.sort(function (e, t) {
      return e.f - t.f;
    }),
      n.push({
        s: -1,
        f: 25001,
      });
    var l = n[0],
      s = n[1],
      d = 0,
      c = 1,
      m = 2;
    for (
      n[0] = {
        s: -1,
        f: l.f + s.f,
        l: l,
        r: s,
      };
      c != o - 1;

    )
      (l = n[n[d].f < n[m].f ? d++ : m++]),
        (s = n[d != c && n[d].f < n[m].f ? d++ : m++]),
        (n[c++] = {
          s: -1,
          f: l.f + s.f,
          l: l,
          r: s,
        });
    var u = a[0].s;
    for (i = 1; i < o; ++i) a[i].s > u && (u = a[i].s);
    var p = new R(u + 1),
      f = ne(n[c - 1], p, 0);
    if (f > t) {
      i = 0;
      var g = 0,
        h = f - t,
        b = 1 << h;
      for (
        a.sort(function (e, t) {
          return p[t.s] - p[e.s] || e.f - t.f;
        });
        i < o;
        ++i
      ) {
        var y = a[i].s;
        if (!(p[y] > t)) break;
        (g += b - (1 << (f - p[y]))), (p[y] = t);
      }
      for (g >>>= h; g > 0; ) {
        var _ = a[i].s;
        p[_] < t ? (g -= 1 << (t - p[_]++ - 1)) : ++i;
      }
      for (; i >= 0 && g; --i) {
        var v = a[i].s;
        p[v] == t && (--p[v], ++g);
      }
      f = t;
    }
    return [new D(p), f];
  },
  ne = function e(t, n, i) {
    return -1 == t.s ? Math.max(e(t.l, n, i + 1), e(t.r, n, i + 1)) : (n[t.s] = i);
  },
  ie = function (e) {
    for (var t = e.length; t && !e[--t]; );
    for (
      var n = new R(++t),
        i = 0,
        o = e[0],
        a = 1,
        r = function (e) {
          n[i++] = e;
        },
        l = 1;
      l <= t;
      ++l
    )
      if (e[l] == o && l != t) ++a;
      else {
        if (!o && a > 2) {
          for (; a > 138; a -= 138) r(32754);
          a > 2 && (r(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305), (a = 0));
        } else if (a > 3) {
          for (r(o), --a; a > 6; a -= 6) r(8304);
          a > 2 && (r(((a - 3) << 5) | 8208), (a = 0));
        }
        for (; a--; ) r(o);
        (a = 1), (o = e[l]);
      }
    return [n.subarray(0, i), t];
  },
  oe = function (e, t) {
    for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
    return n;
  },
  ae = function (e, t, n) {
    var i = n.length,
      o = X(t + 2);
    (e[o] = 255 & i), (e[o + 1] = i >>> 8), (e[o + 2] = 255 ^ e[o]), (e[o + 3] = 255 ^ e[o + 1]);
    for (var a = 0; a < i; ++a) e[o + a + 4] = n[a];
    return 8 * (o + 4 + i);
  },
  re = function (e, t, n, i, o, a, r, l, s, d, c) {
    Z(t, c++, n), ++o[256];
    for (
      var m = te(o, 15),
        u = m[0],
        p = m[1],
        f = te(a, 15),
        g = f[0],
        h = f[1],
        b = ie(u),
        y = b[0],
        _ = b[1],
        v = ie(g),
        k = v[0],
        F = v[1],
        E = new R(19),
        T = 0;
      T < y.length;
      ++T
    )
      E[31 & y[T]]++;
    for (T = 0; T < k.length; ++T) E[31 & k[T]]++;
    for (var C = te(E, 7), P = C[0], O = C[1], N = 19; N > 4 && !P[U[N - 1]]; --N);
    var I,
      S,
      A,
      w,
      D = (d + 5) << 3,
      M = oe(o, K) + oe(a, J) + r,
      j = oe(o, u) + oe(a, g) + r + 14 + 3 * N + oe(E, P) + (2 * E[16] + 3 * E[17] + 7 * E[18]);
    if (D <= M && D <= j) return ae(t, c, e.subarray(s, s + d));
    if ((Z(t, c, 1 + (j < M)), (c += 2), j < M)) {
      (I = Y(u, p, 0)), (S = u), (A = Y(g, h, 0)), (w = g);
      var V = Y(P, O, 0);
      Z(t, c, _ - 257), Z(t, c + 5, F - 1), Z(t, c + 10, N - 4), (c += 14);
      for (T = 0; T < N; ++T) Z(t, c + 3 * T, P[U[T]]);
      c += 3 * N;
      for (var z = [y, k], B = 0; B < 2; ++B) {
        var G = z[B];
        for (T = 0; T < G.length; ++T) {
          var q = 31 & G[T];
          Z(t, c, V[q]), (c += P[q]), q > 15 && (Z(t, c, (G[T] >>> 5) & 127), (c += G[T] >>> 12));
        }
      }
    } else (I = $), (S = K), (A = Q), (w = J);
    for (T = 0; T < l; ++T)
      if (i[T] > 255) {
        q = (i[T] >>> 18) & 31;
        ee(t, c, I[q + 257]), (c += S[q + 257]), q > 7 && (Z(t, c, (i[T] >>> 23) & 31), (c += x[q]));
        var H = 31 & i[T];
        ee(t, c, A[H]), (c += w[H]), H > 3 && (ee(t, c, (i[T] >>> 5) & 8191), (c += L[H]));
      } else ee(t, c, I[i[T]]), (c += S[i[T]]);
    return ee(t, c, I[256]), c + S[256];
  },
  le = new M([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
  se = new D(0),
  de = (function () {
    for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
      for (var n = t, i = 9; --i; ) n = (1 & n && -306674912) ^ (n >>> 1);
      e[t] = n;
    }
    return e;
  })(),
  ce = function (e, t, n) {
    for (; n; ++t) (e[t] = n), (n >>>= 8);
  };

export function encode(e, t = {}) {
  t || (t = {});
  var n = (function () {
      var e = -1;
      return {
        p: function (t) {
          for (var n = e, i = 0; i < t.length; ++i) n = de[(255 & n) ^ t[i]] ^ (n >>> 8);
          e = n;
        },
        d: function () {
          return ~e;
        },
      };
    })(),
    i = e.length;
  n.p(e);
  var o,
    a,
    r,
    l =
      ((o = e),
      (a = t),
      (r = (function (e) {
        return 10 + ((e.filename && e.filename.length + 1) || 0);
      })(t)),
      8,
      (function (e, t, n, i, o, a) {
        var r = e.length,
          l = new D(i + r + 5 * (1 + Math.ceil(r / 7e3)) + o),
          s = l.subarray(i, l.length - o),
          d = 0;
        if (!t || r < 8)
          for (var c = 0; c <= r; c += 65535) {
            var m = c + 65535;
            m >= r && (s[d >> 3] = a), (d = ae(s, d + 1, e.subarray(c, m)));
          }
        else {
          for (
            var u = le[t - 1],
              p = u >>> 13,
              f = 8191 & u,
              g = (1 << n) - 1,
              h = new R(32768),
              b = new R(g + 1),
              y = Math.ceil(n / 3),
              _ = 2 * y,
              v = function (t) {
                return (e[t] ^ (e[t + 1] << y) ^ (e[t + 2] << _)) & g;
              },
              k = new M(25e3),
              F = new R(288),
              E = new R(32),
              T = 0,
              C = 0,
              P = ((c = 0), 0),
              O = 0,
              N = 0;
            c < r;
            ++c
          ) {
            var I = v(c),
              S = 32767 & c,
              A = b[I];
            if (((h[S] = A), (b[I] = S), O <= c)) {
              var w = r - c;
              if ((T > 7e3 || P > 24576) && w > 423) {
                (d = re(e, s, 0, k, F, E, C, P, N, c - N, d)), (P = T = C = 0), (N = c);
                for (var U = 0; U < 286; ++U) F[U] = 0;
                for (U = 0; U < 30; ++U) E[U] = 0;
              }
              var j = 2,
                V = 0,
                z = f,
                q = (S - A) & 32767;
              if (w > 2 && I == v(c - q))
                for (var H = Math.min(p, w) - 1, W = Math.min(32767, c), Y = Math.min(258, w); q <= W && --z && S != A; ) {
                  if (e[c + j] == e[c + j - q]) {
                    for (var K = 0; K < Y && e[c + K] == e[c + K - q]; ++K);
                    if (K > j) {
                      if (((j = K), (V = q), K > H)) break;
                      var J = Math.min(q, K - 2),
                        $ = 0;
                      for (U = 0; U < J; ++U) {
                        var Q = (c - q + U + 32768) & 32767,
                          Z = (Q - h[Q] + 32768) & 32767;
                        Z > $ && (($ = Z), (A = Q));
                      }
                    }
                  }
                  q += ((S = A) - (A = h[S]) + 32768) & 32767;
                }
              if (V) {
                k[P++] = 268435456 | (B[j] << 18) | G[V];
                var ee = 31 & B[j],
                  te = 31 & G[V];
                (C += x[ee] + L[te]), ++F[257 + ee], ++E[te], (O = c + j), ++T;
              } else (k[P++] = e[c]), ++F[e[c]];
            }
          }
          (d = re(e, s, a, k, F, E, C, P, N, c - N, d)), !a && 7 & d && (d = ae(s, d + 1, se));
        }
        return (function (e, t, n) {
          (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
          var i = new (2 == e.BYTES_PER_ELEMENT ? R : 4 == e.BYTES_PER_ELEMENT ? M : D)(n - t);
          return i.set(e.subarray(t, n)), i;
        })(l, 0, i + X(d) + o);
      })(
        o,
        null == a.level ? 6 : a.level,
        null == a.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(o.length)))) : 12 + a.mem,
        r,
        8,
        !0,
      )),
    s = l.length;
  return (
    (function (e, t) {
      var n = t.filename;
      if (
        ((e[0] = 31),
        (e[1] = 139),
        (e[2] = 8),
        (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0),
        (e[9] = 3),
        0 != t.mtime && ce(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
        n)
      ) {
        e[3] = 8;
        for (var i = 0; i <= n.length; ++i) e[i + 10] = n.charCodeAt(i);
      }
    })(l, t),
    ce(l, s - 8, n.d()),
    ce(l, s - 4, i),
    l
  );
}
