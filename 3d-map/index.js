(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });

  function t(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }

  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const _o = "128",
  xn = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
  },
  _n = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3,
  },
  Al = 0,
  $s = 1,
  Ll = 2,
  wo = 1,
  bo = 2,
  li = 3,
  pr = 0,
  Ze = 1,
  mr = 2,
  Mo = 1,
  hi = 0,
  ui = 1,
  ea = 2,
  ta = 3,
  na = 4,
  Cl = 5,
  kn = 100,
  Rl = 101,
  Pl = 102,
  ia = 103,
  ra = 104,
  Dl = 200,
  Il = 201,
  Nl = 202,
  Fl = 203,
  So = 204,
  To = 205,
  zl = 206,
  Bl = 207,
  kl = 208,
  Ol = 209,
  Hl = 210,
  Ul = 0,
  Gl = 1,
  Vl = 2,
  cs = 3,
  Wl = 4,
  jl = 5,
  ql = 6,
  Xl = 7,
  gr = 0,
  Yl = 1,
  Zl = 2,
  di = 0,
  Jl = 1,
  Kl = 2,
  Ql = 3,
  Eo = 4,
  $l = 5,
  Ao = 300,
  _s = 301,
  ws = 302,
  sa = 303,
  aa = 304,
  bs = 306,
  Ms = 307,
  hs = 1e3,
  Et = 1001,
  us = 1002,
  ot = 1003,
  oa = 1004,
  la = 1005,
  vt = 1006,
  ec = 1007,
  Ss = 1008,
  Ts = 1009,
  tc = 1010,
  nc = 1011,
  ar = 1012,
  ic = 1013,
  sr = 1014,
  $t = 1015,
  or = 1016,
  rc = 1017,
  sc = 1018,
  ac = 1019,
  fi = 1020,
  oc = 1021,
  fn = 1022,
  At = 1023,
  lc = 1024,
  cc = 1025,
  Gn = 1026,
  vi = 1027,
  hc = 1028,
  uc = 1029,
  dc = 1030,
  fc = 1031,
  pc = 1032,
  mc = 1033,
  ca = 33776,
  ha = 33777,
  ua = 33778,
  da = 33779,
  fa = 35840,
  pa = 35841,
  ma = 35842,
  ga = 35843,
  gc = 36196,
  ya = 37492,
  va = 37496,
  yc = 37808,
  vc = 37809,
  xc = 37810,
  _c = 37811,
  wc = 37812,
  bc = 37813,
  Mc = 37814,
  Sc = 37815,
  Tc = 37816,
  Ec = 37817,
  Ac = 37818,
  Lc = 37819,
  Cc = 37820,
  Rc = 37821,
  Pc = 36492,
  Dc = 37840,
  Ic = 37841,
  Nc = 37842,
  Fc = 37843,
  zc = 37844,
  Bc = 37845,
  kc = 37846,
  Oc = 37847,
  Hc = 37848,
  Uc = 37849,
  Gc = 37850,
  Vc = 37851,
  Wc = 37852,
  jc = 37853,
  qc = 2200,
  Xc = 2201,
  Yc = 2202,
  lr = 2300,
  cr = 2301,
  Er = 2302,
  On = 2400,
  Hn = 2401,
  hr = 2402,
  Es = 2500,
  Lo = 2501,
  Zc = 0,
  Ei = 3e3,
  As = 3001,
  Jc = 3007,
  Kc = 3002,
  Qc = 3003,
  $c = 3004,
  eh = 3005,
  th = 3006,
  nh = 3200,
  ih = 3201,
  qn = 0,
  rh = 1,
  Ar = 7680,
  sh = 519,
  xi = 35044,
  ur = 35048,
  xa = "300 es";
class sn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const $e = [];
for (let r = 0; r < 256; r++) $e[r] = (r < 16 ? "0" : "") + r.toString(16);
let Ci = 1234567;
const pi = Math.PI / 180,
  _i = 180 / Math.PI;

function Lt() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    $e[r & 255] +
    $e[(r >> 8) & 255] +
    $e[(r >> 16) & 255] +
    $e[(r >> 24) & 255] +
    "-" +
    $e[e & 255] +
    $e[(e >> 8) & 255] +
    "-" +
    $e[((e >> 16) & 15) | 64] +
    $e[(e >> 24) & 255] +
    "-" +
    $e[(t & 63) | 128] +
    $e[(t >> 8) & 255] +
    "-" +
    $e[(t >> 16) & 255] +
    $e[(t >> 24) & 255] +
    $e[n & 255] +
    $e[(n >> 8) & 255] +
    $e[(n >> 16) & 255] +
    $e[(n >> 24) & 255]
  ).toUpperCase();
}

function at(r, e, t) {
  return Math.max(e, Math.min(t, r));
}

function Ls(r, e) {
  return ((r % e) + e) % e;
}

function ah(r, e, t, n, i) {
  return n + ((r - e) * (i - n)) / (t - e);
}

function oh(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}

function mi(r, e, t) {
  return (1 - t) * r + t * e;
}

function lh(r, e, t, n) {
  return mi(r, e, 1 - Math.exp(-t * n));
}

function ch(r, e = 1) {
  return e - Math.abs(Ls(r, e * 2) - e);
}

function hh(r, e, t) {
  return r <= e
    ? 0
    : r >= t
    ? 1
    : ((r = (r - e) / (t - e)), r * r * (3 - 2 * r));
}

function uh(r, e, t) {
  return r <= e
    ? 0
    : r >= t
    ? 1
    : ((r = (r - e) / (t - e)), r * r * r * (r * (r * 6 - 15) + 10));
}

function dh(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}

function fh(r, e) {
  return r + Math.random() * (e - r);
}

function ph(r) {
  return r * (0.5 - Math.random());
}

function mh(r) {
  return (
    r !== void 0 && (Ci = r % 2147483647),
    (Ci = (Ci * 16807) % 2147483647),
    (Ci - 1) / 2147483646
  );
}

function gh(r) {
  return r * pi;
}

function yh(r) {
  return r * _i;
}

function ds(r) {
  return (r & (r - 1)) === 0 && r !== 0;
}

function Co(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}

function Ro(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}

function vh(r, e, t, n, i) {
  const s = Math.cos,
    a = Math.sin,
    o = s(t / 2),
    l = a(t / 2),
    c = s((e + n) / 2),
    h = a((e + n) / 2),
    d = s((e - n) / 2),
    u = a((e - n) / 2),
    f = s((n - e) / 2),
    m = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * h, l * d, l * u, o * c);
      break;
    case "YZY":
      r.set(l * u, o * h, l * d, o * c);
      break;
    case "ZXZ":
      r.set(l * d, l * u, o * h, o * c);
      break;
    case "XZX":
      r.set(o * h, l * m, l * f, o * c);
      break;
    case "YXY":
      r.set(l * f, o * h, l * m, o * c);
      break;
    case "ZYZ":
      r.set(l * m, l * f, o * h, o * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
var _a = Object.freeze({
  __proto__: null,
  DEG2RAD: pi,
  RAD2DEG: _i,
  generateUUID: Lt,
  clamp: at,
  euclideanModulo: Ls,
  mapLinear: ah,
  inverseLerp: oh,
  lerp: mi,
  damp: lh,
  pingpong: ch,
  smoothstep: hh,
  smootherstep: uh,
  randInt: dh,
  randFloat: fh,
  randFloatSpread: ph,
  seededRandom: mh,
  degToRad: gh,
  radToDeg: yh,
  isPowerOfTwo: ds,
  ceilPowerOfTwo: Co,
  floorPowerOfTwo: Ro,
  setQuaternionFromProperEuler: vh,
});
class Z {
  constructor(e = 0, t = 0) {
    (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      this
    );
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      a = this.y - e.y;
    return (this.x = s * n - a * i + e.x), (this.y = s * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
}
Z.prototype.isVector2 = !0;
class et {
  constructor() {
    (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, n, i, s, a, o, l, c) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[1] = i),
      (h[2] = o),
      (h[3] = t),
      (h[4] = s),
      (h[5] = l),
      (h[6] = n),
      (h[7] = a),
      (h[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      h = n[4],
      d = n[7],
      u = n[2],
      f = n[5],
      m = n[8],
      y = i[0],
      v = i[3],
      g = i[6],
      p = i[1],
      E = i[4],
      L = i[7],
      A = i[2],
      x = i[5],
      N = i[8];
    return (
      (s[0] = a * y + o * p + l * A),
      (s[3] = a * v + o * E + l * x),
      (s[6] = a * g + o * L + l * N),
      (s[1] = c * y + h * p + d * A),
      (s[4] = c * v + h * E + d * x),
      (s[7] = c * g + h * L + d * N),
      (s[2] = u * y + f * p + m * A),
      (s[5] = u * v + f * E + m * x),
      (s[8] = u * g + f * L + m * N),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8];
    return (
      t * a * h - t * o * c - n * s * h + n * o * l + i * s * c - i * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8],
      d = h * a - o * c,
      u = o * l - h * s,
      f = c * s - a * l,
      m = t * d + n * u + i * f;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / m;
    return (
      (e[0] = d * y),
      (e[1] = (i * c - h * n) * y),
      (e[2] = (o * n - i * a) * y),
      (e[3] = u * y),
      (e[4] = (h * t - i * l) * y),
      (e[5] = (i * s - o * t) * y),
      (e[6] = f * y),
      (e[7] = (n * l - c * t) * y),
      (e[8] = (a * t - n * s) * y),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + e,
        -i * c,
        i * l,
        -i * (-c * a + l * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= t),
      (n[4] *= t),
      (n[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      n = Math.sin(e),
      i = this.elements,
      s = i[0],
      a = i[3],
      o = i[6],
      l = i[1],
      c = i[4],
      h = i[7];
    return (
      (i[0] = t * s + n * l),
      (i[3] = t * a + n * c),
      (i[6] = t * o + n * h),
      (i[1] = -n * s + t * l),
      (i[4] = -n * a + t * c),
      (i[7] = -n * o + t * h),
      this
    );
  }
  translate(e, t) {
    const n = this.elements;
    return (
      (n[0] += e * n[2]),
      (n[3] += e * n[5]),
      (n[6] += e * n[8]),
      (n[1] += t * n[2]),
      (n[4] += t * n[5]),
      (n[7] += t * n[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
et.prototype.isMatrix3 = !0;
let wn;
class Gt {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      wn === void 0 &&
        (wn = document.createElementNS(
          "http://www.w3.org/1999/xhtml",
          "canvas"
        )),
        (wn.width = e.width),
        (wn.height = e.height);
      const n = wn.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = wn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
}
let xh = 0;
class nt extends sn {
  constructor(
    e = nt.DEFAULT_IMAGE,
    t = nt.DEFAULT_MAPPING,
    n = Et,
    i = Et,
    s = vt,
    a = Ss,
    o = At,
    l = Ts,
    c = 1,
    h = Ei
  ) {
    super(),
      Object.defineProperty(this, "id", {
        value: xh++,
      }),
      (this.uuid = Lt()),
      (this.name = ""),
      (this.image = e),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Z(0, 0)),
      (this.repeat = new Z(1, 1)),
      (this.center = new Z(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new et()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = h),
      (this.version = 0),
      (this.onUpdate = null);
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.image = e.image),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON",
      },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    if (this.image !== void 0) {
      const i = this.image;
      if (
        (i.uuid === void 0 && (i.uuid = Lt()),
        !t && e.images[i.uuid] === void 0)
      ) {
        let s;
        if (Array.isArray(i)) {
          s = [];
          for (let a = 0, o = i.length; a < o; a++)
            i[a].isDataTexture ? s.push(Lr(i[a].image)) : s.push(Lr(i[a]));
        } else s = Lr(i);
        e.images[i.uuid] = {
          uuid: i.uuid,
          url: s,
        };
      }
      n.image = i.uuid;
    }
    return t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
  transformUv(e) {
    if (this.mapping !== Ao) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case hs:
          e.x = e.x - Math.floor(e.x);
          break;
        case Et:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case us:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case hs:
          e.y = e.y - Math.floor(e.y);
          break;
        case Et:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case us:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
nt.DEFAULT_IMAGE = void 0;
nt.DEFAULT_MAPPING = Ao;
nt.prototype.isTexture = !0;

function Lr(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && r instanceof ImageBitmap)
    ? Gt.getDataURL(r)
    : r.data
    ? {
        data: Array.prototype.slice.call(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
class Fe {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.x = e), (this.y = t), (this.z = n), (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements,
      c = l[0],
      h = l[4],
      d = l[8],
      u = l[1],
      f = l[5],
      m = l[9],
      y = l[2],
      v = l[6],
      g = l[10];
    if (
      Math.abs(h - u) < 0.01 &&
      Math.abs(d - y) < 0.01 &&
      Math.abs(m - v) < 0.01
    ) {
      if (
        Math.abs(h + u) < 0.1 &&
        Math.abs(d + y) < 0.1 &&
        Math.abs(m + v) < 0.1 &&
        Math.abs(c + f + g - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2,
        L = (f + 1) / 2,
        A = (g + 1) / 2,
        x = (h + u) / 4,
        N = (d + y) / 4,
        z = (m + v) / 4;
      return (
        E > L && E > A
          ? E < 0.01
            ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(E)), (i = x / n), (s = N / n))
          : L > A
          ? L < 0.01
            ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
            : ((i = Math.sqrt(L)), (n = x / i), (s = z / i))
          : A < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
          : ((s = Math.sqrt(A)), (n = N / s), (i = z / s)),
        this.set(n, i, s, t),
        this
      );
    }
    let p = Math.sqrt(
      (v - m) * (v - m) + (d - y) * (d - y) + (u - h) * (u - h)
    );
    return (
      Math.abs(p) < 0.001 && (p = 1),
      (this.x = (v - m) / p),
      (this.y = (d - y) / p),
      (this.z = (u - h) / p),
      (this.w = Math.acos((c + f + g - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
}
Fe.prototype.isVector4 = !0;
class pn extends sn {
  constructor(e, t, n) {
    super(),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Fe(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Fe(0, 0, e, t)),
      (n = n || {}),
      (this.texture = new nt(
        void 0,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.encoding
      )),
      (this.texture.image = {}),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = 1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : vt),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null);
  }
  setTexture(e) {
    (e.image = {
      width: this.width,
      height: this.height,
      depth: this.depth,
    }),
      (this.texture = e);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.depthTexture = e.depthTexture),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
}
pn.prototype.isWebGLRenderTarget = !0;
class _h extends pn {
  constructor(e, t, n) {
    super(e, t, n), (this.samples = 4);
  }
  copy(e) {
    return super.copy.call(this, e), (this.samples = e.samples), this;
  }
}
_h.prototype.isWebGLMultisampleRenderTarget = !0;
class tt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this._x = e), (this._y = t), (this._z = n), (this._w = i);
  }
  static slerp(e, t, n, i) {
    return (
      console.warn(
        "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
      ),
      n.slerpQuaternions(e, t, i)
    );
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let l = n[i + 0],
      c = n[i + 1],
      h = n[i + 2],
      d = n[i + 3];
    const u = s[a + 0],
      f = s[a + 1],
      m = s[a + 2],
      y = s[a + 3];
    if (o === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = d);
      return;
    }
    if (o === 1) {
      (e[t + 0] = u), (e[t + 1] = f), (e[t + 2] = m), (e[t + 3] = y);
      return;
    }
    if (d !== y || l !== u || c !== f || h !== m) {
      let v = 1 - o;
      const g = l * u + c * f + h * m + d * y,
        p = g >= 0 ? 1 : -1,
        E = 1 - g * g;
      if (E > Number.EPSILON) {
        const A = Math.sqrt(E),
          x = Math.atan2(A, g * p);
        (v = Math.sin(v * x) / A), (o = Math.sin(o * x) / A);
      }
      const L = o * p;
      if (
        ((l = l * v + u * L),
        (c = c * v + f * L),
        (h = h * v + m * L),
        (d = d * v + y * L),
        v === 1 - o)
      ) {
        const A = 1 / Math.sqrt(l * l + c * c + h * h + d * d);
        (l *= A), (c *= A), (h *= A), (d *= A);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = d);
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i],
      l = n[i + 1],
      c = n[i + 2],
      h = n[i + 3],
      d = s[a],
      u = s[a + 1],
      f = s[a + 2],
      m = s[a + 3];
    return (
      (e[t] = o * m + h * d + l * f - c * u),
      (e[t + 1] = l * m + h * u + c * d - o * f),
      (e[t + 2] = c * m + h * f + o * u - l * d),
      (e[t + 3] = h * m - o * d - l * u - c * f),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    if (!(e && e.isEuler))
      throw new Error(
        "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    const n = e._x,
      i = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      h = o(i / 2),
      d = o(s / 2),
      u = l(n / 2),
      f = l(i / 2),
      m = l(s / 2);
    switch (a) {
      case "XYZ":
        (this._x = u * h * d + c * f * m),
          (this._y = c * f * d - u * h * m),
          (this._z = c * h * m + u * f * d),
          (this._w = c * h * d - u * f * m);
        break;
      case "YXZ":
        (this._x = u * h * d + c * f * m),
          (this._y = c * f * d - u * h * m),
          (this._z = c * h * m - u * f * d),
          (this._w = c * h * d + u * f * m);
        break;
      case "ZXY":
        (this._x = u * h * d - c * f * m),
          (this._y = c * f * d + u * h * m),
          (this._z = c * h * m + u * f * d),
          (this._w = c * h * d - u * f * m);
        break;
      case "ZYX":
        (this._x = u * h * d - c * f * m),
          (this._y = c * f * d + u * h * m),
          (this._z = c * h * m - u * f * d),
          (this._w = c * h * d + u * f * m);
        break;
      case "YZX":
        (this._x = u * h * d + c * f * m),
          (this._y = c * f * d + u * h * m),
          (this._z = c * h * m - u * f * d),
          (this._w = c * h * d - u * f * m);
        break;
      case "XZY":
        (this._x = u * h * d - c * f * m),
          (this._y = c * f * d - u * h * m),
          (this._z = c * h * m + u * f * d),
          (this._w = c * h * d + u * f * m);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      s = t[8],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      h = t[6],
      d = t[10],
      u = n + o + d;
    if (u > 0) {
      const f = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / f),
        (this._x = (h - l) * f),
        (this._y = (s - c) * f),
        (this._z = (a - i) * f);
    } else if (n > o && n > d) {
      const f = 2 * Math.sqrt(1 + n - o - d);
      (this._w = (h - l) / f),
        (this._x = 0.25 * f),
        (this._y = (i + a) / f),
        (this._z = (s + c) / f);
    } else if (o > d) {
      const f = 2 * Math.sqrt(1 + o - n - d);
      (this._w = (s - c) / f),
        (this._x = (i + a) / f),
        (this._y = 0.25 * f),
        (this._z = (l + h) / f);
    } else {
      const f = 2 * Math.sqrt(1 + d - n - o);
      (this._w = (a - i) / f),
        (this._x = (s + c) / f),
        (this._y = (l + h) / f),
        (this._z = 0.25 * f);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(at(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
        ),
        this.multiplyQuaternions(e, t))
      : this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      h = t._w;
    return (
      (this._x = n * h + a * o + i * c - s * l),
      (this._y = i * h + a * l + s * o - n * c),
      (this._z = s * h + a * c + n * l - i * o),
      (this._w = a * h - n * o - i * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      s = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = s), this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const f = 1 - t;
      return (
        (this._w = f * a + t * this._w),
        (this._x = f * n + t * this._x),
        (this._y = f * i + t * this._y),
        (this._z = f * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      h = Math.atan2(c, o),
      d = Math.sin((1 - t) * h) / c,
      u = Math.sin(t * h) / c;
    return (
      (this._w = a * d + this._w * u),
      (this._x = n * d + this._x * u),
      (this._y = i * d + this._y * u),
      (this._z = s * d + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    this.copy(e).slerp(t, n);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
}
tt.prototype.isQuaternion = !0;
class b {
  constructor(e = 0, t = 0, n = 0) {
    (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
        ),
        this.multiplyVectors(e, t))
      : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return (
      (e && e.isEuler) ||
        console.error(
          "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
        ),
      this.applyQuaternion(wa.setFromEuler(e))
    );
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(wa.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * i),
      (this.y = s[1] * t + s[4] * n + s[7] * i),
      (this.z = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements,
      a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a),
      (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a),
      (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = l * t + a * i - o * n,
      h = l * n + o * t - s * i,
      d = l * i + s * n - a * t,
      u = -s * t - a * n - o * i;
    return (
      (this.x = c * l + u * -s + h * -o - d * -a),
      (this.y = h * l + u * -a + d * -s - c * -o),
      (this.z = d * l + u * -o + c * -a - h * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * i),
      (this.y = s[1] * t + s[5] * n + s[9] * i),
      (this.z = s[2] * t + s[6] * n + s[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
        ),
        this.crossVectors(e, t))
      : this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = i * l - s * o),
      (this.y = s * a - n * l),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Cr.copy(this).projectOnVector(e), this.sub(Cr);
  }
  reflect(e) {
    return this.sub(Cr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(at(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
}
b.prototype.isVector3 = !0;
const Cr = new b(),
  wa = new tt();
class _t {
  constructor(
    e = new b(1 / 0, 1 / 0, 1 / 0),
    t = new b(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const h = e[l],
        d = e[l + 1],
        u = e[l + 2];
      h < t && (t = h),
        d < n && (n = d),
        u < i && (i = u),
        h > s && (s = h),
        d > a && (a = d),
        u > o && (o = u);
    }
    return this.min.set(t, n, i), this.max.set(s, a, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const h = e.getX(l),
        d = e.getY(l),
        u = e.getZ(l);
      h < t && (t = h),
        d < n && (n = d),
        u < i && (i = u),
        h > s && (s = h),
        d > a && (a = d),
        u > o && (o = u);
    }
    return this.min.set(t, n, i), this.max.set(s, a, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Qn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e) {
    return this.makeEmpty(), this.expandByObject(e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return (
      e === void 0 &&
        (console.warn("THREE.Box3: .getCenter() target is now required"),
        (e = new b())),
      this.isEmpty()
        ? e.set(0, 0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5)
    );
  }
  getSize(e) {
    return (
      e === void 0 &&
        (console.warn("THREE.Box3: .getSize() target is now required"),
        (e = new b())),
      this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    );
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e) {
    e.updateWorldMatrix(!1, !1);
    const t = e.geometry;
    t !== void 0 &&
      (t.boundingBox === null && t.computeBoundingBox(),
      Rr.copy(t.boundingBox),
      Rr.applyMatrix4(e.matrixWorld),
      this.union(Rr));
    const n = e.children;
    for (let i = 0, s = n.length; i < s; i++) this.expandByObject(n[i]);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return (
      t === void 0 &&
        (console.warn("THREE.Box3: .getParameter() target is now required"),
        (t = new b())),
      t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z)
      )
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Qn),
      Qn.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter($n),
      Ri.subVectors(this.max, $n),
      bn.subVectors(e.a, $n),
      Mn.subVectors(e.b, $n),
      Sn.subVectors(e.c, $n),
      jt.subVectors(Mn, bn),
      qt.subVectors(Sn, Mn),
      hn.subVectors(bn, Sn);
    let t = [
      0,
      -jt.z,
      jt.y,
      0,
      -qt.z,
      qt.y,
      0,
      -hn.z,
      hn.y,
      jt.z,
      0,
      -jt.x,
      qt.z,
      0,
      -qt.x,
      hn.z,
      0,
      -hn.x,
      -jt.y,
      jt.x,
      0,
      -qt.y,
      qt.x,
      0,
      -hn.y,
      hn.x,
      0,
    ];
    return !Pr(t, bn, Mn, Sn, Ri) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Pr(t, bn, Mn, Sn, Ri))
      ? !1
      : (Pi.crossVectors(jt, qt),
        (t = [Pi.x, Pi.y, Pi.z]),
        Pr(t, bn, Mn, Sn, Ri));
  }
  clampPoint(e, t) {
    return (
      t === void 0 &&
        (console.warn("THREE.Box3: .clampPoint() target is now required"),
        (t = new b())),
      t.copy(e).clamp(this.min, this.max)
    );
  }
  distanceToPoint(e) {
    return Qn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      e === void 0 &&
        console.error(
          "THREE.Box3: .getBoundingSphere() target is now required"
        ),
      this.getCenter(e.center),
      (e.radius = this.getSize(Qn).length() * 0.5),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Bt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Bt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Bt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Bt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Bt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Bt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Bt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Bt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Bt),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
_t.prototype.isBox3 = !0;
const Bt = [
    new b(),
    new b(),
    new b(),
    new b(),
    new b(),
    new b(),
    new b(),
    new b(),
  ],
  Qn = new b(),
  Rr = new _t(),
  bn = new b(),
  Mn = new b(),
  Sn = new b(),
  jt = new b(),
  qt = new b(),
  hn = new b(),
  $n = new b(),
  Ri = new b(),
  Pi = new b(),
  un = new b();

function Pr(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    un.fromArray(r, s);
    const o =
        i.x * Math.abs(un.x) + i.y * Math.abs(un.y) + i.z * Math.abs(un.z),
      l = e.dot(un),
      c = t.dot(un),
      h = n.dot(un);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return !1;
  }
  return !0;
}
const wh = new _t(),
  ba = new b(),
  Dr = new b(),
  Ir = new b();
class Xn {
  constructor(e = new b(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : wh.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t === void 0 &&
        (console.warn("THREE.Sphere: .clampPoint() target is now required"),
        (t = new b())),
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return (
      e === void 0 &&
        (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
        (e = new _t())),
      this.isEmpty()
        ? (e.makeEmpty(), e)
        : (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
    );
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    Ir.subVectors(e, this.center);
    const t = Ir.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.add(Ir.multiplyScalar(i / n)), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return (
      Dr.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius),
      this.expandByPoint(ba.copy(e.center).add(Dr)),
      this.expandByPoint(ba.copy(e.center).sub(Dr)),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const kt = new b(),
  Nr = new b(),
  Di = new b(),
  Xt = new b(),
  Fr = new b(),
  Ii = new b(),
  zr = new b();
class gn {
  constructor(e = new b(), t = new b(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return (
      t === void 0 &&
        (console.warn("THREE.Ray: .at() target is now required"),
        (t = new b())),
      t.copy(this.direction).multiplyScalar(e).add(this.origin)
    );
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, kt)), this;
  }
  closestPointToPoint(e, t) {
    t === void 0 &&
      (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
      (t = new b())),
      t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = kt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (kt.copy(this.direction).multiplyScalar(t).add(this.origin),
        kt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Nr.copy(e).add(t).multiplyScalar(0.5),
      Di.copy(t).sub(e).normalize(),
      Xt.copy(this.origin).sub(Nr);
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Di),
      o = Xt.dot(this.direction),
      l = -Xt.dot(Di),
      c = Xt.lengthSq(),
      h = Math.abs(1 - a * a);
    let d, u, f, m;
    if (h > 0)
      if (((d = a * l - o), (u = a * o - l), (m = s * h), d >= 0))
        if (u >= -m)
          if (u <= m) {
            const y = 1 / h;
            (d *= y),
              (u *= y),
              (f = d * (d + a * u + 2 * o) + u * (a * d + u + 2 * l) + c);
          } else
            (u = s),
              (d = Math.max(0, -(a * u + o))),
              (f = -d * d + u * (u + 2 * l) + c);
        else
          (u = -s),
            (d = Math.max(0, -(a * u + o))),
            (f = -d * d + u * (u + 2 * l) + c);
      else
        u <= -m
          ? ((d = Math.max(0, -(-a * s + o))),
            (u = d > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (f = -d * d + u * (u + 2 * l) + c))
          : u <= m
          ? ((d = 0),
            (u = Math.min(Math.max(-s, -l), s)),
            (f = u * (u + 2 * l) + c))
          : ((d = Math.max(0, -(a * s + o))),
            (u = d > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (f = -d * d + u * (u + 2 * l) + c));
    else
      (u = a > 0 ? -s : s),
        (d = Math.max(0, -(a * u + o))),
        (f = -d * d + u * (u + 2 * l) + c);
    return (
      n && n.copy(this.direction).multiplyScalar(d).add(this.origin),
      i && i.copy(Di).multiplyScalar(u).add(Nr),
      f
    );
  }
  intersectSphere(e, t) {
    kt.subVectors(e.center, this.origin);
    const n = kt.dot(this.direction),
      i = kt.dot(kt) - n * n,
      s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i),
      o = n - a,
      l = n + a;
    return o < 0 && l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x,
      h = 1 / this.direction.y,
      d = 1 / this.direction.z,
      u = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - u.x) * c), (i = (e.max.x - u.x) * c))
        : ((n = (e.max.x - u.x) * c), (i = (e.min.x - u.x) * c)),
      h >= 0
        ? ((s = (e.min.y - u.y) * h), (a = (e.max.y - u.y) * h))
        : ((s = (e.max.y - u.y) * h), (a = (e.min.y - u.y) * h)),
      n > a ||
      s > i ||
      ((s > n || n !== n) && (n = s),
      (a < i || i !== i) && (i = a),
      d >= 0
        ? ((o = (e.min.z - u.z) * d), (l = (e.max.z - u.z) * d))
        : ((o = (e.max.z - u.z) * d), (l = (e.min.z - u.z) * d)),
      n > l || o > i) ||
      ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, kt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Fr.subVectors(t, e), Ii.subVectors(n, e), zr.crossVectors(Fr, Ii);
    let a = this.direction.dot(zr),
      o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    Xt.subVectors(this.origin, e);
    const l = o * this.direction.dot(Ii.crossVectors(Xt, Ii));
    if (l < 0) return null;
    const c = o * this.direction.dot(Fr.cross(Xt));
    if (c < 0 || l + c > a) return null;
    const h = -o * Xt.dot(zr);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class pe {
  constructor() {
    (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, n, i, s, a, o, l, c, h, d, u, f, m, y, v) {
    const g = this.elements;
    return (
      (g[0] = e),
      (g[4] = t),
      (g[8] = n),
      (g[12] = i),
      (g[1] = s),
      (g[5] = a),
      (g[9] = o),
      (g[13] = l),
      (g[2] = c),
      (g[6] = h),
      (g[10] = d),
      (g[14] = u),
      (g[3] = f),
      (g[7] = m),
      (g[11] = y),
      (g[15] = v),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new pe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Tn.setFromMatrixColumn(e, 0).length(),
      s = 1 / Tn.setFromMatrixColumn(e, 1).length(),
      a = 1 / Tn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    (e && e.isEuler) ||
      console.error(
        "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
      );
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      h = Math.cos(s),
      d = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * h,
        f = a * d,
        m = o * h,
        y = o * d;
      (t[0] = l * h),
        (t[4] = -l * d),
        (t[8] = c),
        (t[1] = f + m * c),
        (t[5] = u - y * c),
        (t[9] = -o * l),
        (t[2] = y - u * c),
        (t[6] = m + f * c),
        (t[10] = a * l);
    } else if (e.order === "YXZ") {
      const u = l * h,
        f = l * d,
        m = c * h,
        y = c * d;
      (t[0] = u + y * o),
        (t[4] = m * o - f),
        (t[8] = a * c),
        (t[1] = a * d),
        (t[5] = a * h),
        (t[9] = -o),
        (t[2] = f * o - m),
        (t[6] = y + u * o),
        (t[10] = a * l);
    } else if (e.order === "ZXY") {
      const u = l * h,
        f = l * d,
        m = c * h,
        y = c * d;
      (t[0] = u - y * o),
        (t[4] = -a * d),
        (t[8] = m + f * o),
        (t[1] = f + m * o),
        (t[5] = a * h),
        (t[9] = y - u * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l);
    } else if (e.order === "ZYX") {
      const u = a * h,
        f = a * d,
        m = o * h,
        y = o * d;
      (t[0] = l * h),
        (t[4] = m * c - f),
        (t[8] = u * c + y),
        (t[1] = l * d),
        (t[5] = y * c + u),
        (t[9] = f * c - m),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l);
    } else if (e.order === "YZX") {
      const u = a * l,
        f = a * c,
        m = o * l,
        y = o * c;
      (t[0] = l * h),
        (t[4] = y - u * d),
        (t[8] = m * d + f),
        (t[1] = d),
        (t[5] = a * h),
        (t[9] = -o * h),
        (t[2] = -c * h),
        (t[6] = f * d + m),
        (t[10] = u - y * d);
    } else if (e.order === "XZY") {
      const u = a * l,
        f = a * c,
        m = o * l,
        y = o * c;
      (t[0] = l * h),
        (t[4] = -d),
        (t[8] = c * h),
        (t[1] = u * d + y),
        (t[5] = a * h),
        (t[9] = f * d - m),
        (t[2] = m * d - f),
        (t[6] = o * h),
        (t[10] = y * d + u);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(bh, e, Mh);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      dt.subVectors(e, t),
      dt.lengthSq() === 0 && (dt.z = 1),
      dt.normalize(),
      Yt.crossVectors(n, dt),
      Yt.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (dt.x += 1e-4) : (dt.z += 1e-4),
        dt.normalize(),
        Yt.crossVectors(n, dt)),
      Yt.normalize(),
      Ni.crossVectors(dt, Yt),
      (i[0] = Yt.x),
      (i[4] = Ni.x),
      (i[8] = dt.x),
      (i[1] = Yt.y),
      (i[5] = Ni.y),
      (i[9] = dt.y),
      (i[2] = Yt.z),
      (i[6] = Ni.z),
      (i[10] = dt.z),
      this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
        ),
        this.multiplyMatrices(e, t))
      : this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      l = n[8],
      c = n[12],
      h = n[1],
      d = n[5],
      u = n[9],
      f = n[13],
      m = n[2],
      y = n[6],
      v = n[10],
      g = n[14],
      p = n[3],
      E = n[7],
      L = n[11],
      A = n[15],
      x = i[0],
      N = i[4],
      z = i[8],
      B = i[12],
      G = i[1],
      q = i[5],
      O = i[9],
      C = i[13],
      P = i[2],
      D = i[6],
      R = i[10],
      X = i[14],
      $ = i[3],
      K = i[7],
      ae = i[11],
      se = i[15];
    return (
      (s[0] = a * x + o * G + l * P + c * $),
      (s[4] = a * N + o * q + l * D + c * K),
      (s[8] = a * z + o * O + l * R + c * ae),
      (s[12] = a * B + o * C + l * X + c * se),
      (s[1] = h * x + d * G + u * P + f * $),
      (s[5] = h * N + d * q + u * D + f * K),
      (s[9] = h * z + d * O + u * R + f * ae),
      (s[13] = h * B + d * C + u * X + f * se),
      (s[2] = m * x + y * G + v * P + g * $),
      (s[6] = m * N + y * q + v * D + g * K),
      (s[10] = m * z + y * O + v * R + g * ae),
      (s[14] = m * B + y * C + v * X + g * se),
      (s[3] = p * x + E * G + L * P + A * $),
      (s[7] = p * N + E * q + L * D + A * K),
      (s[11] = p * z + E * O + L * R + A * ae),
      (s[15] = p * B + E * C + L * X + A * se),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      h = e[2],
      d = e[6],
      u = e[10],
      f = e[14],
      m = e[3],
      y = e[7],
      v = e[11],
      g = e[15];
    return (
      m *
        (+s * l * d -
          i * c * d -
          s * o * u +
          n * c * u +
          i * o * f -
          n * l * f) +
      y *
        (+t * l * f -
          t * c * u +
          s * a * u -
          i * a * f +
          i * c * h -
          s * l * h) +
      v *
        (+t * c * d -
          t * o * f -
          s * a * d +
          n * a * f +
          s * o * h -
          n * c * h) +
      g *
        (-i * o * h - t * l * d + t * o * u + i * a * d - n * a * u + n * l * h)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8],
      d = e[9],
      u = e[10],
      f = e[11],
      m = e[12],
      y = e[13],
      v = e[14],
      g = e[15],
      p = d * v * c - y * u * c + y * l * f - o * v * f - d * l * g + o * u * g,
      E = m * u * c - h * v * c - m * l * f + a * v * f + h * l * g - a * u * g,
      L = h * y * c - m * d * c + m * o * f - a * y * f - h * o * g + a * d * g,
      A = m * d * l - h * y * l - m * o * u + a * y * u + h * o * v - a * d * v,
      x = t * p + n * E + i * L + s * A;
    if (x === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const N = 1 / x;
    return (
      (e[0] = p * N),
      (e[1] =
        (y * u * s -
          d * v * s -
          y * i * f +
          n * v * f +
          d * i * g -
          n * u * g) *
        N),
      (e[2] =
        (o * v * s -
          y * l * s +
          y * i * c -
          n * v * c -
          o * i * g +
          n * l * g) *
        N),
      (e[3] =
        (d * l * s -
          o * u * s -
          d * i * c +
          n * u * c +
          o * i * f -
          n * l * f) *
        N),
      (e[4] = E * N),
      (e[5] =
        (h * v * s -
          m * u * s +
          m * i * f -
          t * v * f -
          h * i * g +
          t * u * g) *
        N),
      (e[6] =
        (m * l * s -
          a * v * s -
          m * i * c +
          t * v * c +
          a * i * g -
          t * l * g) *
        N),
      (e[7] =
        (a * u * s -
          h * l * s +
          h * i * c -
          t * u * c -
          a * i * f +
          t * l * f) *
        N),
      (e[8] = L * N),
      (e[9] =
        (m * d * s -
          h * y * s -
          m * n * f +
          t * y * f +
          h * n * g -
          t * d * g) *
        N),
      (e[10] =
        (a * y * s -
          m * o * s +
          m * n * c -
          t * y * c -
          a * n * g +
          t * o * g) *
        N),
      (e[11] =
        (h * o * s -
          a * d * s -
          h * n * c +
          t * d * c +
          a * n * f -
          t * o * f) *
        N),
      (e[12] = A * N),
      (e[13] =
        (h * y * i -
          m * d * i +
          m * n * u -
          t * y * u -
          h * n * v +
          t * d * v) *
        N),
      (e[14] =
        (m * o * i -
          a * y * i -
          m * n * l +
          t * y * l +
          a * n * v -
          t * o * v) *
        N),
      (e[15] =
        (a * d * i -
          h * o * i +
          h * n * l -
          t * d * l -
          a * n * u +
          t * o * u) *
        N),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = 1 - n,
      a = e.x,
      o = e.y,
      l = e.z,
      c = s * a,
      h = s * o;
    return (
      this.set(
        c * a + n,
        c * o - i * l,
        c * l + i * o,
        0,
        c * o + i * l,
        h * o + n,
        h * l - i * a,
        0,
        c * l - i * o,
        h * l + i * a,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n) {
    return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = s + s,
      h = a + a,
      d = o + o,
      u = s * c,
      f = s * h,
      m = s * d,
      y = a * h,
      v = a * d,
      g = o * d,
      p = l * c,
      E = l * h,
      L = l * d,
      A = n.x,
      x = n.y,
      N = n.z;
    return (
      (i[0] = (1 - (y + g)) * A),
      (i[1] = (f + L) * A),
      (i[2] = (m - E) * A),
      (i[3] = 0),
      (i[4] = (f - L) * x),
      (i[5] = (1 - (u + g)) * x),
      (i[6] = (v + p) * x),
      (i[7] = 0),
      (i[8] = (m + E) * N),
      (i[9] = (v - p) * N),
      (i[10] = (1 - (u + y)) * N),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Tn.set(i[0], i[1], i[2]).length();
    const a = Tn.set(i[4], i[5], i[6]).length(),
      o = Tn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      bt.copy(this);
    const c = 1 / s,
      h = 1 / a,
      d = 1 / o;
    return (
      (bt.elements[0] *= c),
      (bt.elements[1] *= c),
      (bt.elements[2] *= c),
      (bt.elements[4] *= h),
      (bt.elements[5] *= h),
      (bt.elements[6] *= h),
      (bt.elements[8] *= d),
      (bt.elements[9] *= d),
      (bt.elements[10] *= d),
      t.setFromRotationMatrix(bt),
      (n.x = s),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, i, s, a) {
    a === void 0 &&
      console.warn(
        "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
      );
    const o = this.elements,
      l = (2 * s) / (t - e),
      c = (2 * s) / (n - i),
      h = (t + e) / (t - e),
      d = (n + i) / (n - i),
      u = -(a + s) / (a - s),
      f = (-2 * a * s) / (a - s);
    return (
      (o[0] = l),
      (o[4] = 0),
      (o[8] = h),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = c),
      (o[9] = d),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = u),
      (o[14] = f),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, s, a) {
    const o = this.elements,
      l = 1 / (t - e),
      c = 1 / (n - i),
      h = 1 / (a - s),
      d = (t + e) * l,
      u = (n + i) * c,
      f = (a + s) * h;
    return (
      (o[0] = 2 * l),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -d),
      (o[1] = 0),
      (o[5] = 2 * c),
      (o[9] = 0),
      (o[13] = -u),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = -2 * h),
      (o[14] = -f),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
pe.prototype.isMatrix4 = !0;
const Tn = new b(),
  bt = new pe(),
  bh = new b(0, 0, 0),
  Mh = new b(1, 1, 1),
  Yt = new b(),
  Ni = new b(),
  dt = new b(),
  Ma = new pe(),
  Sa = new tt();
class Yn {
  constructor(e = 0, t = 0, n = 0, i = Yn.DefaultOrder) {
    (this._x = e), (this._y = t), (this._z = n), (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i || this._order),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t, n) {
    const i = e.elements,
      s = i[0],
      a = i[4],
      o = i[8],
      l = i[1],
      c = i[5],
      h = i[9],
      d = i[2],
      u = i[6],
      f = i[10];
    switch (((t = t || this._order), t)) {
      case "XYZ":
        (this._y = Math.asin(at(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-h, f)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(u, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-at(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-d, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(at(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-d, f)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-at(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(u, f)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case "YZX":
        (this._z = Math.asin(at(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-h, c)), (this._y = Math.atan2(-d, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, f)));
        break;
      case "XZY":
        (this._z = Math.asin(-at(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(u, c)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-h, f)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n !== !1 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Ma.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ma, t, n)
    );
  }
  setFromVector3(e, t) {
    return this.set(e.x, e.y, e.z, t || this._order);
  }
  reorder(e) {
    return Sa.setFromEuler(this), this.setFromQuaternion(Sa, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  toVector3(e) {
    return e
      ? e.set(this._x, this._y, this._z)
      : new b(this._x, this._y, this._z);
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
}
Yn.prototype.isEuler = !0;
Yn.DefaultOrder = "XYZ";
Yn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Po {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e) | 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
}
let Sh = 0;
const Ta = new b(),
  En = new tt(),
  Ot = new pe(),
  Fi = new b(),
  ei = new b(),
  Th = new b(),
  Eh = new tt(),
  Ea = new b(1, 0, 0),
  Aa = new b(0, 1, 0),
  La = new b(0, 0, 1),
  Ah = {
    type: "added",
  },
  Ca = {
    type: "removed",
  };
class Le extends sn {
  constructor() {
    super(),
      Object.defineProperty(this, "id", {
        value: Sh++,
      }),
      (this.uuid = Lt()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Le.DefaultUp.clone());
    const e = new b(),
      t = new Yn(),
      n = new tt(),
      i = new b(1, 1, 1);

    function s() {
      n.setFromEuler(t, !1);
    }

    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: e,
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: t,
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: n,
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: i,
        },
        modelViewMatrix: {
          value: new pe(),
        },
        normalMatrix: {
          value: new et(),
        },
      }),
      (this.matrix = new pe()),
      (this.matrixWorld = new pe()),
      (this.matrixAutoUpdate = Le.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Po()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return En.setFromAxisAngle(e, t), this.quaternion.multiply(En), this;
  }
  rotateOnWorldAxis(e, t) {
    return En.setFromAxisAngle(e, t), this.quaternion.premultiply(En), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ea, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Aa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(La, e);
  }
  translateOnAxis(e, t) {
    return (
      Ta.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Ta.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Ea, e);
  }
  translateY(e) {
    return this.translateOnAxis(Aa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(La, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Ot.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Fi.copy(e) : Fi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      ei.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Ot.lookAt(ei, Fi, this.up)
        : Ot.lookAt(Fi, ei, this.up),
      this.quaternion.setFromRotationMatrix(Ot),
      i &&
        (Ot.extractRotation(i.matrixWorld),
        En.setFromRotationMatrix(Ot),
        this.quaternion.premultiply(En.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Ah))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Ca)),
      this
    );
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(Ca);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Ot.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Ot.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Ot),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getWorldPosition(e) {
    return (
      e === void 0 &&
        (console.warn(
          "THREE.Object3D: .getWorldPosition() target is now required"
        ),
        (e = new b())),
      this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      e === void 0 &&
        (console.warn(
          "THREE.Object3D: .getWorldQuaternion() target is now required"
        ),
        (e = new tt())),
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(ei, e, Th),
      e
    );
  }
  getWorldScale(e) {
    return (
      e === void 0 &&
        (console.warn(
          "THREE.Object3D: .getWorldScale() target is now required"
        ),
        (e = new b())),
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(ei, Eh, e),
      e
    );
  }
  getWorldDirection(e) {
    e === void 0 &&
      (console.warn(
        "THREE.Object3D: .getWorldDirection() target is now required"
      ),
      (e = new b())),
      this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));

    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const d = l[c];
            s(e.shapes, d);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        i.material = o;
      } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        h = a(e.images),
        d = a(e.shapes),
        u = a(e.skeletons),
        f = a(e.animations);
      o.length > 0 && (n.geometries = o),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        h.length > 0 && (n.images = h),
        d.length > 0 && (n.shapes = d),
        u.length > 0 && (n.skeletons = u),
        f.length > 0 && (n.animations = f);
    }
    return (n.object = i), n;

    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Le.DefaultUp = new b(0, 1, 0);
Le.DefaultMatrixAutoUpdate = !0;
Le.prototype.isObject3D = !0;
const Br = new b(),
  Lh = new b(),
  Ch = new et();
class Pt {
  constructor(e = new b(1, 0, 0), t = 0) {
    (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Br.subVectors(n, t).cross(Lh.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return (
      t === void 0 &&
        (console.warn("THREE.Plane: .projectPoint() target is now required"),
        (t = new b())),
      t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
    );
  }
  intersectLine(e, t) {
    t === void 0 &&
      (console.warn("THREE.Plane: .intersectLine() target is now required"),
      (t = new b()));
    const n = e.delta(Br),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return (
      e === void 0 &&
        (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
        (e = new b())),
      e.copy(this.normal).multiplyScalar(-this.constant)
    );
  }
  applyMatrix4(e, t) {
    const n = t || Ch.getNormalMatrix(e),
      i = this.coplanarPoint(Br).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Pt.prototype.isPlane = !0;
const Mt = new b(),
  Ht = new b(),
  kr = new b(),
  Ut = new b(),
  An = new b(),
  Ln = new b(),
  Ra = new b(),
  Or = new b(),
  Hr = new b(),
  Ur = new b();
class Xe {
  constructor(e = new b(), t = new b(), n = new b()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i === void 0 &&
      (console.warn("THREE.Triangle: .getNormal() target is now required"),
      (i = new b())),
      i.subVectors(n, t),
      Mt.subVectors(e, t),
      i.cross(Mt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    Mt.subVectors(i, t), Ht.subVectors(n, t), kr.subVectors(e, t);
    const a = Mt.dot(Mt),
      o = Mt.dot(Ht),
      l = Mt.dot(kr),
      c = Ht.dot(Ht),
      h = Ht.dot(kr),
      d = a * c - o * o;
    if (
      (s === void 0 &&
        (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
        (s = new b())),
      d === 0)
    )
      return s.set(-2, -1, -1);
    const u = 1 / d,
      f = (c * l - o * h) * u,
      m = (a * h - o * l) * u;
    return s.set(1 - f - m, m, f);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, Ut),
      Ut.x >= 0 && Ut.y >= 0 && Ut.x + Ut.y <= 1
    );
  }
  static getUV(e, t, n, i, s, a, o, l) {
    return (
      this.getBarycoord(e, t, n, i, Ut),
      l.set(0, 0),
      l.addScaledVector(s, Ut.x),
      l.addScaledVector(a, Ut.y),
      l.addScaledVector(o, Ut.z),
      l
    );
  }
  static isFrontFacing(e, t, n, i) {
    return Mt.subVectors(n, t), Ht.subVectors(e, t), Mt.cross(Ht).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Mt.subVectors(this.c, this.b),
      Ht.subVectors(this.a, this.b),
      Mt.cross(Ht).length() * 0.5
    );
  }
  getMidpoint(e) {
    return (
      e === void 0 &&
        (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
        (e = new b())),
      e
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3)
    );
  }
  getNormal(e) {
    return Xe.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return (
      e === void 0 &&
        (console.warn("THREE.Triangle: .getPlane() target is now required"),
        (e = new Pt())),
      e.setFromCoplanarPoints(this.a, this.b, this.c)
    );
  }
  getBarycoord(e, t) {
    return Xe.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Xe.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Xe.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Xe.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    t === void 0 &&
      (console.warn(
        "THREE.Triangle: .closestPointToPoint() target is now required"
      ),
      (t = new b()));
    const n = this.a,
      i = this.b,
      s = this.c;
    let a, o;
    An.subVectors(i, n), Ln.subVectors(s, n), Or.subVectors(e, n);
    const l = An.dot(Or),
      c = Ln.dot(Or);
    if (l <= 0 && c <= 0) return t.copy(n);
    Hr.subVectors(e, i);
    const h = An.dot(Hr),
      d = Ln.dot(Hr);
    if (h >= 0 && d <= h) return t.copy(i);
    const u = l * d - h * c;
    if (u <= 0 && l >= 0 && h <= 0)
      return (a = l / (l - h)), t.copy(n).addScaledVector(An, a);
    Ur.subVectors(e, s);
    const f = An.dot(Ur),
      m = Ln.dot(Ur);
    if (m >= 0 && f <= m) return t.copy(s);
    const y = f * c - l * m;
    if (y <= 0 && c >= 0 && m <= 0)
      return (o = c / (c - m)), t.copy(n).addScaledVector(Ln, o);
    const v = h * m - f * d;
    if (v <= 0 && d - h >= 0 && f - m >= 0)
      return (
        Ra.subVectors(s, i),
        (o = (d - h) / (d - h + (f - m))),
        t.copy(i).addScaledVector(Ra, o)
      );
    const g = 1 / (v + y + u);
    return (
      (a = y * g),
      (o = u * g),
      t.copy(n).addScaledVector(An, a).addScaledVector(Ln, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Rh = 0;

function Ke() {
  Object.defineProperty(this, "id", {
    value: Rh++,
  }),
    (this.uuid = Lt()),
    (this.name = ""),
    (this.type = "Material"),
    (this.fog = !0),
    (this.blending = ui),
    (this.side = pr),
    (this.vertexColors = !1),
    (this.opacity = 1),
    (this.transparent = !1),
    (this.blendSrc = So),
    (this.blendDst = To),
    (this.blendEquation = kn),
    (this.blendSrcAlpha = null),
    (this.blendDstAlpha = null),
    (this.blendEquationAlpha = null),
    (this.depthFunc = cs),
    (this.depthTest = !0),
    (this.depthWrite = !0),
    (this.stencilWriteMask = 255),
    (this.stencilFunc = sh),
    (this.stencilRef = 0),
    (this.stencilFuncMask = 255),
    (this.stencilFail = Ar),
    (this.stencilZFail = Ar),
    (this.stencilZPass = Ar),
    (this.stencilWrite = !1),
    (this.clippingPlanes = null),
    (this.clipIntersection = !1),
    (this.clipShadows = !1),
    (this.shadowSide = null),
    (this.colorWrite = !0),
    (this.precision = null),
    (this.polygonOffset = !1),
    (this.polygonOffsetFactor = 0),
    (this.polygonOffsetUnits = 0),
    (this.dithering = !1),
    (this.alphaTest = 0),
    (this.alphaToCoverage = !1),
    (this.premultipliedAlpha = !1),
    (this.visible = !0),
    (this.toneMapped = !0),
    (this.userData = {}),
    (this.version = 0);
}
Ke.prototype = Object.assign(Object.create(sn.prototype), {
  constructor: Ke,
  isMaterial: !0,
  onBuild: function () {},
  onBeforeCompile: function () {},
  customProgramCacheKey: function () {
    return this.onBeforeCompile.toString();
  },
  setValues: function (r) {
    if (r !== void 0)
      for (const e in r) {
        const t = r[e];
        if (t === void 0) {
          console.warn("THREE.Material: '" + e + "' parameter is undefined.");
          continue;
        }
        if (e === "shading") {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = t === Mo);
          continue;
        }
        const n = this[e];
        if (n === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              e +
              "' is not a property of this material."
          );
          continue;
        }
        n && n.isColor
          ? n.set(t)
          : n && n.isVector3 && t && t.isVector3
          ? n.copy(t)
          : (this[e] = t);
      }
  },
  toJSON: function (r) {
    const e = r === void 0 || typeof r == "string";
    e &&
      (r = {
        textures: {},
        images: {},
      });
    const t = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (t.uuid = this.uuid),
      (t.type = this.type),
      this.name !== "" && (t.name = this.name),
      this.color && this.color.isColor && (t.color = this.color.getHex()),
      this.roughness !== void 0 && (t.roughness = this.roughness),
      this.metalness !== void 0 && (t.metalness = this.metalness),
      this.sheen && this.sheen.isColor && (t.sheen = this.sheen.getHex()),
      this.emissive &&
        this.emissive.isColor &&
        (t.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (t.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (t.specular = this.specular.getHex()),
      this.shininess !== void 0 && (t.shininess = this.shininess),
      this.clearcoat !== void 0 && (t.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (t.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (t.clearcoatMap = this.clearcoatMap.toJSON(r).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (t.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(r).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((t.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(r).uuid),
        (t.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.map && this.map.isTexture && (t.map = this.map.toJSON(r).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (t.matcap = this.matcap.toJSON(r).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (t.alphaMap = this.alphaMap.toJSON(r).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((t.lightMap = this.lightMap.toJSON(r).uuid),
        (t.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((t.aoMap = this.aoMap.toJSON(r).uuid),
        (t.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((t.bumpMap = this.bumpMap.toJSON(r).uuid),
        (t.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((t.normalMap = this.normalMap.toJSON(r).uuid),
        (t.normalMapType = this.normalMapType),
        (t.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((t.displacementMap = this.displacementMap.toJSON(r).uuid),
        (t.displacementScale = this.displacementScale),
        (t.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (t.roughnessMap = this.roughnessMap.toJSON(r).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (t.metalnessMap = this.metalnessMap.toJSON(r).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (t.emissiveMap = this.emissiveMap.toJSON(r).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (t.specularMap = this.specularMap.toJSON(r).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((t.envMap = this.envMap.toJSON(r).uuid),
        this.combine !== void 0 && (t.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (t.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (t.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (t.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (t.gradientMap = this.gradientMap.toJSON(r).uuid),
      this.size !== void 0 && (t.size = this.size),
      this.shadowSide !== null && (t.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (t.sizeAttenuation = this.sizeAttenuation),
      this.blending !== ui && (t.blending = this.blending),
      this.side !== pr && (t.side = this.side),
      this.vertexColors && (t.vertexColors = !0),
      this.opacity < 1 && (t.opacity = this.opacity),
      this.transparent === !0 && (t.transparent = this.transparent),
      (t.depthFunc = this.depthFunc),
      (t.depthTest = this.depthTest),
      (t.depthWrite = this.depthWrite),
      (t.colorWrite = this.colorWrite),
      (t.stencilWrite = this.stencilWrite),
      (t.stencilWriteMask = this.stencilWriteMask),
      (t.stencilFunc = this.stencilFunc),
      (t.stencilRef = this.stencilRef),
      (t.stencilFuncMask = this.stencilFuncMask),
      (t.stencilFail = this.stencilFail),
      (t.stencilZFail = this.stencilZFail),
      (t.stencilZPass = this.stencilZPass),
      this.rotation && this.rotation !== 0 && (t.rotation = this.rotation),
      this.polygonOffset === !0 && (t.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (t.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (t.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth && this.linewidth !== 1 && (t.linewidth = this.linewidth),
      this.dashSize !== void 0 && (t.dashSize = this.dashSize),
      this.gapSize !== void 0 && (t.gapSize = this.gapSize),
      this.scale !== void 0 && (t.scale = this.scale),
      this.dithering === !0 && (t.dithering = !0),
      this.alphaTest > 0 && (t.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (t.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (t.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (t.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (t.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (t.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (t.wireframeLinejoin = this.wireframeLinejoin),
      this.morphTargets === !0 && (t.morphTargets = !0),
      this.morphNormals === !0 && (t.morphNormals = !0),
      this.skinning === !0 && (t.skinning = !0),
      this.flatShading === !0 && (t.flatShading = this.flatShading),
      this.visible === !1 && (t.visible = !1),
      this.toneMapped === !1 && (t.toneMapped = !1),
      JSON.stringify(this.userData) !== "{}" && (t.userData = this.userData);

    function n(i) {
      const s = [];
      for (const a in i) {
        const o = i[a];
        delete o.metadata, s.push(o);
      }
      return s;
    }
    if (e) {
      const i = n(r.textures),
        s = n(r.images);
      i.length > 0 && (t.textures = i), s.length > 0 && (t.images = s);
    }
    return t;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (r) {
    (this.name = r.name),
      (this.fog = r.fog),
      (this.blending = r.blending),
      (this.side = r.side),
      (this.vertexColors = r.vertexColors),
      (this.opacity = r.opacity),
      (this.transparent = r.transparent),
      (this.blendSrc = r.blendSrc),
      (this.blendDst = r.blendDst),
      (this.blendEquation = r.blendEquation),
      (this.blendSrcAlpha = r.blendSrcAlpha),
      (this.blendDstAlpha = r.blendDstAlpha),
      (this.blendEquationAlpha = r.blendEquationAlpha),
      (this.depthFunc = r.depthFunc),
      (this.depthTest = r.depthTest),
      (this.depthWrite = r.depthWrite),
      (this.stencilWriteMask = r.stencilWriteMask),
      (this.stencilFunc = r.stencilFunc),
      (this.stencilRef = r.stencilRef),
      (this.stencilFuncMask = r.stencilFuncMask),
      (this.stencilFail = r.stencilFail),
      (this.stencilZFail = r.stencilZFail),
      (this.stencilZPass = r.stencilZPass),
      (this.stencilWrite = r.stencilWrite);
    const e = r.clippingPlanes;
    let t = null;
    if (e !== null) {
      const n = e.length;
      t = new Array(n);
      for (let i = 0; i !== n; ++i) t[i] = e[i].clone();
    }
    return (
      (this.clippingPlanes = t),
      (this.clipIntersection = r.clipIntersection),
      (this.clipShadows = r.clipShadows),
      (this.shadowSide = r.shadowSide),
      (this.colorWrite = r.colorWrite),
      (this.precision = r.precision),
      (this.polygonOffset = r.polygonOffset),
      (this.polygonOffsetFactor = r.polygonOffsetFactor),
      (this.polygonOffsetUnits = r.polygonOffsetUnits),
      (this.dithering = r.dithering),
      (this.alphaTest = r.alphaTest),
      (this.alphaToCoverage = r.alphaToCoverage),
      (this.premultipliedAlpha = r.premultipliedAlpha),
      (this.visible = r.visible),
      (this.toneMapped = r.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(r.userData))),
      this
    );
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose",
    });
  },
});
Object.defineProperty(Ke.prototype, "needsUpdate", {
  set: function (r) {
    r === !0 && this.version++;
  },
});
const Do = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  St = {
    h: 0,
    s: 0,
    l: 0,
  },
  zi = {
    h: 0,
    s: 0,
    l: 0,
  };

function Gr(r, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? r + (e - r) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? r + (e - r) * 6 * (2 / 3 - t)
      : r
  );
}

function Vr(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}

function Wr(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
class he {
  constructor(e, t, n) {
    return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      this
    );
  }
  setRGB(e, t, n) {
    return (this.r = e), (this.g = t), (this.b = n), this;
  }
  setHSL(e, t, n) {
    if (((e = Ls(e, 1)), (t = at(t, 0, 1)), (n = at(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const i = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        s = 2 * n - i;
      (this.r = Gr(s, i, e + 1 / 3)),
        (this.g = Gr(s, i, e)),
        (this.b = Gr(s, i, e - 1 / 3));
    }
    return this;
  }
  setStyle(e) {
    function t(i) {
      i !== void 0 &&
        parseFloat(i) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let n;
    if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let i;
      const s = n[1],
        a = n[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (
            (i =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(i[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(i[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(i[3], 10)) / 255),
              t(i[4]),
              this
            );
          if (
            (i =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(i[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(i[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(i[3], 10)) / 100),
              t(i[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (i =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          ) {
            const o = parseFloat(i[1]) / 360,
              l = parseInt(i[2], 10) / 100,
              c = parseInt(i[3], 10) / 100;
            return t(i[4]), this.setHSL(o, l, c);
          }
          break;
      }
    } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const i = n[1],
        s = i.length;
      if (s === 3)
        return (
          (this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255),
          (this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255),
          (this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255),
          this
        );
      if (s === 6)
        return (
          (this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255),
          (this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255),
          (this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e) : this;
  }
  setColorName(e) {
    const t = Do[e.toLowerCase()];
    return (
      t !== void 0
        ? this.setHex(t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copyGammaToLinear(e, t = 2) {
    return (
      (this.r = Math.pow(e.r, t)),
      (this.g = Math.pow(e.g, t)),
      (this.b = Math.pow(e.b, t)),
      this
    );
  }
  copyLinearToGamma(e, t = 2) {
    const n = t > 0 ? 1 / t : 1;
    return (
      (this.r = Math.pow(e.r, n)),
      (this.g = Math.pow(e.g, n)),
      (this.b = Math.pow(e.b, n)),
      this
    );
  }
  convertGammaToLinear(e) {
    return this.copyGammaToLinear(this, e), this;
  }
  convertLinearToGamma(e) {
    return this.copyLinearToGamma(this, e), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Vr(e.r)), (this.g = Vr(e.g)), (this.b = Vr(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Wr(e.r)), (this.g = Wr(e.g)), (this.b = Wr(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex() {
    return (
      ((this.r * 255) << 16) ^ ((this.g * 255) << 8) ^ ((this.b * 255) << 0)
    );
  }
  getHexString() {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  }
  getHSL(e) {
    e === void 0 &&
      (console.warn("THREE.Color: .getHSL() target is now required"),
      (e = {
        h: 0,
        s: 0,
        l: 0,
      }));
    const t = this.r,
      n = this.g,
      i = this.b,
      s = Math.max(t, n, i),
      a = Math.min(t, n, i);
    let o, l;
    const c = (a + s) / 2;
    if (a === s) (o = 0), (l = 0);
    else {
      const h = s - a;
      switch (((l = c <= 0.5 ? h / (s + a) : h / (2 - s - a)), s)) {
        case t:
          o = (n - i) / h + (n < i ? 6 : 0);
          break;
        case n:
          o = (i - t) / h + 2;
          break;
        case i:
          o = (t - n) / h + 4;
          break;
      }
      o /= 6;
    }
    return (e.h = o), (e.s = l), (e.l = c), e;
  }
  getStyle() {
    return (
      "rgb(" +
      ((this.r * 255) | 0) +
      "," +
      ((this.g * 255) | 0) +
      "," +
      ((this.b * 255) | 0) +
      ")"
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(St),
      (St.h += e),
      (St.s += t),
      (St.l += n),
      this.setHSL(St.h, St.s, St.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(St), e.getHSL(zi);
    const n = mi(St.h, zi.h, t),
      i = mi(St.s, zi.s, t),
      s = mi(St.l, zi.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      e.normalized === !0 &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
}
he.NAMES = Do;
he.prototype.isColor = !0;
he.prototype.r = 1;
he.prototype.g = 1;
he.prototype.b = 1;
class Cs extends Ke {
  constructor(e) {
    super(),
      (this.type = "MeshBasicMaterial"),
      (this.color = new he(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = gr),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.skinning = !1),
      (this.morphTargets = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.skinning = e.skinning),
      (this.morphTargets = e.morphTargets),
      this
    );
  }
}
Cs.prototype.isMeshBasicMaterial = !0;
const Oe = new b(),
  Bi = new Z();
class Je {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n === !0),
      (this.usage = xi),
      (this.updateRange = {
        offset: 0,
        count: -1,
      }),
      (this.version = 0),
      (this.onUploadCallback = function () {});
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  copyColorsArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let a = e[i];
      a === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyColorsArray(): color is undefined",
          i
        ),
        (a = new he())),
        (t[n++] = a.r),
        (t[n++] = a.g),
        (t[n++] = a.b);
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let a = e[i];
      a === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
          i
        ),
        (a = new Z())),
        (t[n++] = a.x),
        (t[n++] = a.y);
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let a = e[i];
      a === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
          i
        ),
        (a = new b())),
        (t[n++] = a.x),
        (t[n++] = a.y),
        (t[n++] = a.z);
    }
    return this;
  }
  copyVector4sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let a = e[i];
      a === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
          i
        ),
        (a = new Fe())),
        (t[n++] = a.x),
        (t[n++] = a.y),
        (t[n++] = a.z),
        (t[n++] = a.w);
    }
    return this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Bi.fromBufferAttribute(this, t),
          Bi.applyMatrix3(e),
          this.setXY(t, Bi.x, Bi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Oe.fromBufferAttribute(this, t),
          Oe.applyMatrix3(e),
          this.setXYZ(t, Oe.x, Oe.y, Oe.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Oe.x = this.getX(t)),
        (Oe.y = this.getY(t)),
        (Oe.z = this.getZ(t)),
        Oe.applyMatrix4(e),
        this.setXYZ(t, Oe.x, Oe.y, Oe.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Oe.x = this.getX(t)),
        (Oe.y = this.getY(t)),
        (Oe.z = this.getZ(t)),
        Oe.applyNormalMatrix(e),
        this.setXYZ(t, Oe.x, Oe.y, Oe.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Oe.x = this.getX(t)),
        (Oe.y = this.getY(t)),
        (Oe.z = this.getZ(t)),
        Oe.transformDirection(e),
        this.setXYZ(t, Oe.x, Oe.y, Oe.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    return this.array[e * this.itemSize];
  }
  setX(e, t) {
    return (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    return this.array[e * this.itemSize + 1];
  }
  setY(e, t) {
    return (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    return this.array[e * this.itemSize + 2];
  }
  setZ(e, t) {
    return (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    return this.array[e * this.itemSize + 3];
  }
  setW(e, t) {
    return (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== xi && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
}
Je.prototype.isBufferAttribute = !0;
class Io extends Je {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class No extends Je {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Ph extends Je {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
Ph.prototype.isFloat16BufferAttribute = !0;
class We extends Je {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}

function Fo(r) {
  if (r.length === 0) return -1 / 0;
  let e = r[0];
  for (let t = 1, n = r.length; t < n; ++t) r[t] > e && (e = r[t]);
  return e;
}
let Dh = 0;
const Rt = new pe(),
  jr = new Le(),
  Cn = new b(),
  ft = new _t(),
  ti = new _t(),
  Ye = new b();
class ke extends sn {
  constructor() {
    super(),
      Object.defineProperty(this, "id", {
        value: Dh++,
      }),
      (this.uuid = Lt()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = {
        start: 0,
        count: 1 / 0,
      }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Fo(e) > 65535 ? No : Io)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n,
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new et().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  rotateX(e) {
    return Rt.makeRotationX(e), this.applyMatrix4(Rt), this;
  }
  rotateY(e) {
    return Rt.makeRotationY(e), this.applyMatrix4(Rt), this;
  }
  rotateZ(e) {
    return Rt.makeRotationZ(e), this.applyMatrix4(Rt), this;
  }
  translate(e, t, n) {
    return Rt.makeTranslation(e, t, n), this.applyMatrix4(Rt), this;
  }
  scale(e, t, n) {
    return Rt.makeScale(e, t, n), this.applyMatrix4(Rt), this;
  }
  lookAt(e) {
    return jr.lookAt(e), jr.updateMatrix(), this.applyMatrix4(jr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Cn).negate(),
      this.translate(Cn.x, Cn.y, Cn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new We(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new _t());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new b(-1 / 0, -1 / 0, -1 / 0),
          new b(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          ft.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (Ye.addVectors(this.boundingBox.min, ft.min),
                this.boundingBox.expandByPoint(Ye),
                Ye.addVectors(this.boundingBox.max, ft.max),
                this.boundingBox.expandByPoint(Ye))
              : (this.boundingBox.expandByPoint(ft.min),
                this.boundingBox.expandByPoint(ft.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Xn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new b(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((ft.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          ti.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (Ye.addVectors(ft.min, ti.min),
                ft.expandByPoint(Ye),
                Ye.addVectors(ft.max, ti.max),
                ft.expandByPoint(Ye))
              : (ft.expandByPoint(ti.min), ft.expandByPoint(ti.max));
        }
      ft.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        Ye.fromBufferAttribute(e, s),
          (i = Math.max(i, n.distanceToSquared(Ye)));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            Ye.fromBufferAttribute(o, c),
              l && (Cn.fromBufferAttribute(e, c), Ye.add(Cn)),
              (i = Math.max(i, n.distanceToSquared(Ye)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeFaceNormals() {}
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      s = t.normal.array,
      a = t.uv.array,
      o = i.length / 3;
    t.tangent === void 0 &&
      this.setAttribute("tangent", new Je(new Float32Array(4 * o), 4));
    const l = t.tangent.array,
      c = [],
      h = [];
    for (let G = 0; G < o; G++) (c[G] = new b()), (h[G] = new b());
    const d = new b(),
      u = new b(),
      f = new b(),
      m = new Z(),
      y = new Z(),
      v = new Z(),
      g = new b(),
      p = new b();

    function E(G, q, O) {
      d.fromArray(i, G * 3),
        u.fromArray(i, q * 3),
        f.fromArray(i, O * 3),
        m.fromArray(a, G * 2),
        y.fromArray(a, q * 2),
        v.fromArray(a, O * 2),
        u.sub(d),
        f.sub(d),
        y.sub(m),
        v.sub(m);
      const C = 1 / (y.x * v.y - v.x * y.y);
      isFinite(C) &&
        (g
          .copy(u)
          .multiplyScalar(v.y)
          .addScaledVector(f, -y.y)
          .multiplyScalar(C),
        p
          .copy(f)
          .multiplyScalar(y.x)
          .addScaledVector(u, -v.x)
          .multiplyScalar(C),
        c[G].add(g),
        c[q].add(g),
        c[O].add(g),
        h[G].add(p),
        h[q].add(p),
        h[O].add(p));
    }
    let L = this.groups;
    L.length === 0 &&
      (L = [
        {
          start: 0,
          count: n.length,
        },
      ]);
    for (let G = 0, q = L.length; G < q; ++G) {
      const O = L[G],
        C = O.start,
        P = O.count;
      for (let D = C, R = C + P; D < R; D += 3) E(n[D + 0], n[D + 1], n[D + 2]);
    }
    const A = new b(),
      x = new b(),
      N = new b(),
      z = new b();

    function B(G) {
      N.fromArray(s, G * 3), z.copy(N);
      const q = c[G];
      A.copy(q),
        A.sub(N.multiplyScalar(N.dot(q))).normalize(),
        x.crossVectors(z, q);
      const C = x.dot(h[G]) < 0 ? -1 : 1;
      (l[G * 4] = A.x),
        (l[G * 4 + 1] = A.y),
        (l[G * 4 + 2] = A.z),
        (l[G * 4 + 3] = C);
    }
    for (let G = 0, q = L.length; G < q; ++G) {
      const O = L[G],
        C = O.start,
        P = O.count;
      for (let D = C, R = C + P; D < R; D += 3)
        B(n[D + 0]), B(n[D + 1]), B(n[D + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Je(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let u = 0, f = n.count; u < f; u++) n.setXYZ(u, 0, 0, 0);
      const i = new b(),
        s = new b(),
        a = new b(),
        o = new b(),
        l = new b(),
        c = new b(),
        h = new b(),
        d = new b();
      if (e)
        for (let u = 0, f = e.count; u < f; u += 3) {
          const m = e.getX(u + 0),
            y = e.getX(u + 1),
            v = e.getX(u + 2);
          i.fromBufferAttribute(t, m),
            s.fromBufferAttribute(t, y),
            a.fromBufferAttribute(t, v),
            h.subVectors(a, s),
            d.subVectors(i, s),
            h.cross(d),
            o.fromBufferAttribute(n, m),
            l.fromBufferAttribute(n, y),
            c.fromBufferAttribute(n, v),
            o.add(h),
            l.add(h),
            c.add(h),
            n.setXYZ(m, o.x, o.y, o.z),
            n.setXYZ(y, l.x, l.y, l.z),
            n.setXYZ(v, c.x, c.y, c.z);
        }
      else
        for (let u = 0, f = t.count; u < f; u += 3)
          i.fromBufferAttribute(t, u + 0),
            s.fromBufferAttribute(t, u + 1),
            a.fromBufferAttribute(t, u + 2),
            h.subVectors(a, s),
            d.subVectors(i, s),
            h.cross(d),
            n.setXYZ(u + 0, h.x, h.y, h.z),
            n.setXYZ(u + 1, h.x, h.y, h.z),
            n.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        e
      );
      return;
    }
    t === void 0 &&
      ((t = 0),
      console.warn(
        "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
      ));
    const n = this.attributes;
    for (const i in n) {
      if (e.attributes[i] === void 0) continue;
      const a = n[i].array,
        o = e.attributes[i],
        l = o.array,
        c = o.itemSize * t,
        h = Math.min(l.length, a.length - c);
      for (let d = 0, u = c; d < h; d++, u++) a[u] = l[d];
    }
    return this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Ye.fromBufferAttribute(e, t),
        Ye.normalize(),
        e.setXYZ(t, Ye.x, Ye.y, Ye.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        h = o.itemSize,
        d = o.normalized,
        u = new c.constructor(l.length * h);
      let f = 0,
        m = 0;
      for (let y = 0, v = l.length; y < v; y++) {
        f = l[y] * h;
        for (let g = 0; g < h; g++) u[m++] = c[f++];
      }
      return new Je(u, h, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new ke(),
      n = this.index.array,
      i = this.attributes;
    for (const o in i) {
      const l = i[o],
        c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [],
        c = s[o];
      for (let h = 0, d = c.length; h < d; h++) {
        const u = c[h],
          f = e(u, n);
        l.push(f);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = {
      attributes: {},
    };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        h = [];
      for (let d = 0, u = c.length; d < u; d++) {
        const f = c[d];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && ((i[l] = h), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new ke().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [],
        d = s[c];
      for (let u = 0, f = d.length; u < f; u++) h.push(d[u].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const d = a[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
}
ke.prototype.isBufferGeometry = !0;
const Pa = new pe(),
  Rn = new gn(),
  qr = new Xn(),
  Zt = new b(),
  Jt = new b(),
  Kt = new b(),
  Xr = new b(),
  Yr = new b(),
  Zr = new b(),
  ki = new b(),
  Oi = new b(),
  Hi = new b(),
  Ui = new Z(),
  Gi = new Z(),
  Vi = new Z(),
  Jr = new b(),
  Wi = new b();
class gt extends Le {
  constructor(e = new ke(), t = new Cs()) {
    super(),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes,
        n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let s = 0, a = i.length; s < a; s++) {
            const o = i[s].name || String(s);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[o] = s);
          }
        }
      }
    } else {
      const t = e.morphTargets;
      t !== void 0 &&
        t.length > 0 &&
        console.error(
          "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      s = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      qr.copy(n.boundingSphere),
      qr.applyMatrix4(s),
      e.ray.intersectsSphere(qr) === !1) ||
      (Pa.copy(s).invert(),
      Rn.copy(e.ray).applyMatrix4(Pa),
      n.boundingBox !== null && Rn.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let a;
    if (n.isBufferGeometry) {
      const o = n.index,
        l = n.attributes.position,
        c = n.morphAttributes.position,
        h = n.morphTargetsRelative,
        d = n.attributes.uv,
        u = n.attributes.uv2,
        f = n.groups,
        m = n.drawRange;
      if (o !== null)
        if (Array.isArray(i))
          for (let y = 0, v = f.length; y < v; y++) {
            const g = f[y],
              p = i[g.materialIndex],
              E = Math.max(g.start, m.start),
              L = Math.min(g.start + g.count, m.start + m.count);
            for (let A = E, x = L; A < x; A += 3) {
              const N = o.getX(A),
                z = o.getX(A + 1),
                B = o.getX(A + 2);
              (a = ji(this, p, e, Rn, l, c, h, d, u, N, z, B)),
                a &&
                  ((a.faceIndex = Math.floor(A / 3)),
                  (a.face.materialIndex = g.materialIndex),
                  t.push(a));
            }
          }
        else {
          const y = Math.max(0, m.start),
            v = Math.min(o.count, m.start + m.count);
          for (let g = y, p = v; g < p; g += 3) {
            const E = o.getX(g),
              L = o.getX(g + 1),
              A = o.getX(g + 2);
            (a = ji(this, i, e, Rn, l, c, h, d, u, E, L, A)),
              a && ((a.faceIndex = Math.floor(g / 3)), t.push(a));
          }
        }
      else if (l !== void 0)
        if (Array.isArray(i))
          for (let y = 0, v = f.length; y < v; y++) {
            const g = f[y],
              p = i[g.materialIndex],
              E = Math.max(g.start, m.start),
              L = Math.min(g.start + g.count, m.start + m.count);
            for (let A = E, x = L; A < x; A += 3) {
              const N = A,
                z = A + 1,
                B = A + 2;
              (a = ji(this, p, e, Rn, l, c, h, d, u, N, z, B)),
                a &&
                  ((a.faceIndex = Math.floor(A / 3)),
                  (a.face.materialIndex = g.materialIndex),
                  t.push(a));
            }
          }
        else {
          const y = Math.max(0, m.start),
            v = Math.min(l.count, m.start + m.count);
          for (let g = y, p = v; g < p; g += 3) {
            const E = g,
              L = g + 1,
              A = g + 2;
            (a = ji(this, i, e, Rn, l, c, h, d, u, E, L, A)),
              a && ((a.faceIndex = Math.floor(g / 3)), t.push(a));
          }
        }
    } else
      n.isGeometry &&
        console.error(
          "THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
  }
}
gt.prototype.isMesh = !0;

function Ih(r, e, t, n, i, s, a, o) {
  let l;
  if (
    (e.side === Ze
      ? (l = n.intersectTriangle(a, s, i, !0, o))
      : (l = n.intersectTriangle(i, s, a, e.side !== mr, o)),
    l === null)
  )
    return null;
  Wi.copy(o), Wi.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(Wi);
  return c < t.near || c > t.far
    ? null
    : {
        distance: c,
        point: Wi.clone(),
        object: r,
      };
}

function ji(r, e, t, n, i, s, a, o, l, c, h, d) {
  Zt.fromBufferAttribute(i, c),
    Jt.fromBufferAttribute(i, h),
    Kt.fromBufferAttribute(i, d);
  const u = r.morphTargetInfluences;
  if (e.morphTargets && s && u) {
    ki.set(0, 0, 0), Oi.set(0, 0, 0), Hi.set(0, 0, 0);
    for (let m = 0, y = s.length; m < y; m++) {
      const v = u[m],
        g = s[m];
      v !== 0 &&
        (Xr.fromBufferAttribute(g, c),
        Yr.fromBufferAttribute(g, h),
        Zr.fromBufferAttribute(g, d),
        a
          ? (ki.addScaledVector(Xr, v),
            Oi.addScaledVector(Yr, v),
            Hi.addScaledVector(Zr, v))
          : (ki.addScaledVector(Xr.sub(Zt), v),
            Oi.addScaledVector(Yr.sub(Jt), v),
            Hi.addScaledVector(Zr.sub(Kt), v)));
    }
    Zt.add(ki), Jt.add(Oi), Kt.add(Hi);
  }
  r.isSkinnedMesh &&
    e.skinning &&
    (r.boneTransform(c, Zt), r.boneTransform(h, Jt), r.boneTransform(d, Kt));
  const f = Ih(r, e, t, n, Zt, Jt, Kt, Jr);
  if (f) {
    o &&
      (Ui.fromBufferAttribute(o, c),
      Gi.fromBufferAttribute(o, h),
      Vi.fromBufferAttribute(o, d),
      (f.uv = Xe.getUV(Jr, Zt, Jt, Kt, Ui, Gi, Vi, new Z()))),
      l &&
        (Ui.fromBufferAttribute(l, c),
        Gi.fromBufferAttribute(l, h),
        Vi.fromBufferAttribute(l, d),
        (f.uv2 = Xe.getUV(Jr, Zt, Jt, Kt, Ui, Gi, Vi, new Z())));
    const m = {
      a: c,
      b: h,
      c: d,
      normal: new b(),
      materialIndex: 0,
    };
    Xe.getNormal(Zt, Jt, Kt, m.normal), (f.face = m);
  }
  return f;
}
class Rs extends ke {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (a = Math.floor(a));
    const l = [],
      c = [],
      h = [],
      d = [];
    let u = 0,
      f = 0;
    m("z", "y", "x", -1, -1, n, t, e, a, s, 0),
      m("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
      m("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      m("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      m("x", "y", "z", 1, -1, e, t, n, i, s, 4),
      m("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new We(c, 3)),
      this.setAttribute("normal", new We(h, 3)),
      this.setAttribute("uv", new We(d, 2));

    function m(y, v, g, p, E, L, A, x, N, z, B) {
      const G = L / N,
        q = A / z,
        O = L / 2,
        C = A / 2,
        P = x / 2,
        D = N + 1,
        R = z + 1;
      let X = 0,
        $ = 0;
      const K = new b();
      for (let ae = 0; ae < R; ae++) {
        const se = ae * q - C;
        for (let ue = 0; ue < D; ue++) {
          const me = ue * G - O;
          (K[y] = me * p),
            (K[v] = se * E),
            (K[g] = P),
            c.push(K.x, K.y, K.z),
            (K[y] = 0),
            (K[v] = 0),
            (K[g] = x > 0 ? 1 : -1),
            h.push(K.x, K.y, K.z),
            d.push(ue / N),
            d.push(1 - ae / z),
            (X += 1);
        }
      }
      for (let ae = 0; ae < z; ae++)
        for (let se = 0; se < N; se++) {
          const ue = u + se + D * ae,
            me = u + se + D * (ae + 1),
            H = u + (se + 1) + D * (ae + 1),
            De = u + (se + 1) + D * ae;
          l.push(ue, me, De), l.push(me, H, De), ($ += 6);
        }
      o.addGroup(f, $, B), (f += $), (u += X);
    }
  }
}

function Vn(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}

function it(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Vn(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
const Nh = {
  clone: Vn,
  merge: it,
};
var Fh = `void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`,
  zh = `void main() {
      gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
  }`;
class mn extends Ke {
  constructor(e) {
    super(),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.vertexShader = Fh),
      (this.fragmentShader = zh),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.skinning = !1),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 &&
        (e.attributes !== void 0 &&
          console.error(
            "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
          ),
        this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Vn(e.uniforms)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.skinning = e.skinning),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = {
            type: "t",
            value: a.toJSON(e).uuid,
          })
        : a && a.isColor
        ? (t.uniforms[i] = {
            type: "c",
            value: a.getHex(),
          })
        : a && a.isVector2
        ? (t.uniforms[i] = {
            type: "v2",
            value: a.toArray(),
          })
        : a && a.isVector3
        ? (t.uniforms[i] = {
            type: "v3",
            value: a.toArray(),
          })
        : a && a.isVector4
        ? (t.uniforms[i] = {
            type: "v4",
            value: a.toArray(),
          })
        : a && a.isMatrix3
        ? (t.uniforms[i] = {
            type: "m3",
            value: a.toArray(),
          })
        : a && a.isMatrix4
        ? (t.uniforms[i] = {
            type: "m4",
            value: a.toArray(),
          })
        : (t.uniforms[i] = {
            value: a,
          });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
mn.prototype.isShaderMaterial = !0;
class Ps extends Le {
  constructor() {
    super(),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new pe()),
      (this.projectionMatrix = new pe()),
      (this.projectionMatrixInverse = new pe());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    e === void 0 &&
      (console.warn(
        "THREE.Camera: .getWorldDirection() target is now required"
      ),
      (e = new b())),
      this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Ps.prototype.isCamera = !0;
class ut extends Ps {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = _i * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(pi * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return _i * 2 * Math.atan(Math.tan(pi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(pi * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (s += (a.offsetX * i) / l),
        (t -= (a.offsetY * n) / c),
        (i *= a.width / l),
        (n *= a.height / c);
    }
    const o = this.filmOffset;
    o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
ut.prototype.isPerspectiveCamera = !0;
const Pn = 90,
  Dn = 1;
class Ds extends Le {
  constructor(e, t, n) {
    if (
      (super(), (this.type = "CubeCamera"), n.isWebGLCubeRenderTarget !== !0)
    ) {
      console.error(
        "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
      );
      return;
    }
    this.renderTarget = n;
    const i = new ut(Pn, Dn, e, t);
    (i.layers = this.layers),
      i.up.set(0, -1, 0),
      i.lookAt(new b(1, 0, 0)),
      this.add(i);
    const s = new ut(Pn, Dn, e, t);
    (s.layers = this.layers),
      s.up.set(0, -1, 0),
      s.lookAt(new b(-1, 0, 0)),
      this.add(s);
    const a = new ut(Pn, Dn, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, 1),
      a.lookAt(new b(0, 1, 0)),
      this.add(a);
    const o = new ut(Pn, Dn, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, -1),
      o.lookAt(new b(0, -1, 0)),
      this.add(o);
    const l = new ut(Pn, Dn, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new b(0, 0, 1)),
      this.add(l);
    const c = new ut(Pn, Dn, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new b(0, 0, -1)),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, s, a, o, l, c] = this.children,
      h = e.xr.enabled,
      d = e.getRenderTarget();
    e.xr.enabled = !1;
    const u = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, a),
      e.setRenderTarget(n, 3),
      e.render(t, o),
      e.setRenderTarget(n, 4),
      e.render(t, l),
      (n.texture.generateMipmaps = u),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(d),
      (e.xr.enabled = h);
  }
}
class yr extends nt {
  constructor(e, t, n, i, s, a, o, l, c, h) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : _s),
      (o = o !== void 0 ? o : fn),
      super(e, t, n, i, s, a, o, l, c, h),
      (this._needsFlipEnvMap = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
yr.prototype.isCubeTexture = !0;
class zo extends pn {
  constructor(e, t, n) {
    Number.isInteger(t) &&
      (console.warn(
        "THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"
      ),
      (t = n)),
      super(e, e, t),
      (t = t || {}),
      (this.texture = new yr(
        void 0,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.encoding
      )),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : vt),
      (this.texture._needsFlipEnvMap = !1);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.format = At),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: {
          tEquirect: {
            value: null,
          },
        },
        vertexShader: `
  
                  varying vec3 vWorldDirection;
  
                  vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
  
                      return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
  
                  }
  
                  void main() {
  
                      vWorldDirection = transformDirection( position, modelMatrix );
  
                      #include <begin_vertex>
                      #include <project_vertex>
  
                  }
              `,
        fragmentShader: `
  
                  uniform sampler2D tEquirect;
  
                  varying vec3 vWorldDirection;
  
                  #include <common>
  
                  void main() {
  
                      vec3 direction = normalize( vWorldDirection );
  
                      vec2 sampleUV = equirectUv( direction );
  
                      gl_FragColor = texture2D( tEquirect, sampleUV );
  
                  }
              `,
      },
      i = new Rs(5, 5, 5),
      s = new mn({
        name: "CubemapFromEquirect",
        uniforms: Vn(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Ze,
        blending: hi,
      });
    s.uniforms.tEquirect.value = t;
    const a = new gt(i, s),
      o = t.minFilter;
    return (
      t.minFilter === Ss && (t.minFilter = vt),
      new Ds(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
zo.prototype.isWebGLCubeRenderTarget = !0;
class Bo extends nt {
  constructor(e, t, n, i, s, a, o, l, c, h, d, u) {
    super(null, a, o, l, c, h, i, s, d, u),
      (this.image = {
        data: e || null,
        width: t || 1,
        height: n || 1,
      }),
      (this.magFilter = c !== void 0 ? c : ot),
      (this.minFilter = h !== void 0 ? h : ot),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.needsUpdate = !0);
  }
}
Bo.prototype.isDataTexture = !0;
const In = new Xn(),
  qi = new b();
class vr {
  constructor(
    e = new Pt(),
    t = new Pt(),
    n = new Pt(),
    i = new Pt(),
    s = new Pt(),
    a = new Pt()
  ) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(i),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      s = n[1],
      a = n[2],
      o = n[3],
      l = n[4],
      c = n[5],
      h = n[6],
      d = n[7],
      u = n[8],
      f = n[9],
      m = n[10],
      y = n[11],
      v = n[12],
      g = n[13],
      p = n[14],
      E = n[15];
    return (
      t[0].setComponents(o - i, d - l, y - u, E - v).normalize(),
      t[1].setComponents(o + i, d + l, y + u, E + v).normalize(),
      t[2].setComponents(o + s, d + c, y + f, E + g).normalize(),
      t[3].setComponents(o - s, d - c, y - f, E - g).normalize(),
      t[4].setComponents(o - a, d - h, y - m, E - p).normalize(),
      t[5].setComponents(o + a, d + h, y + m, E + p).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(In)
    );
  }
  intersectsSprite(e) {
    return (
      In.center.set(0, 0, 0),
      (In.radius = 0.7071067811865476),
      In.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(In)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((qi.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (qi.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (qi.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(qi) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}

function ko() {
  let r = null,
    e = !1,
    t = null,
    n = null;

  function i(s, a) {
    t(s, a), (n = r.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = r.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      r.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      r = s;
    },
  };
}

function Bh(r, e) {
  const t = e.isWebGL2,
    n = new WeakMap();

  function i(c, h) {
    const d = c.array,
      u = c.usage,
      f = r.createBuffer();
    r.bindBuffer(h, f), r.bufferData(h, d, u), c.onUploadCallback();
    let m = 5126;
    return (
      d instanceof Float32Array
        ? (m = 5126)
        : d instanceof Float64Array
        ? console.warn(
            "THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."
          )
        : d instanceof Uint16Array
        ? c.isFloat16BufferAttribute
          ? t
            ? (m = 5131)
            : console.warn(
                "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
              )
          : (m = 5123)
        : d instanceof Int16Array
        ? (m = 5122)
        : d instanceof Uint32Array
        ? (m = 5125)
        : d instanceof Int32Array
        ? (m = 5124)
        : d instanceof Int8Array
        ? (m = 5120)
        : d instanceof Uint8Array && (m = 5121),
      {
        buffer: f,
        type: m,
        bytesPerElement: d.BYTES_PER_ELEMENT,
        version: c.version,
      }
    );
  }

  function s(c, h, d) {
    const u = h.array,
      f = h.updateRange;
    r.bindBuffer(d, c),
      f.count === -1
        ? r.bufferSubData(d, 0, u)
        : (t
            ? r.bufferSubData(
                d,
                f.offset * u.BYTES_PER_ELEMENT,
                u,
                f.offset,
                f.count
              )
            : r.bufferSubData(
                d,
                f.offset * u.BYTES_PER_ELEMENT,
                u.subarray(f.offset, f.offset + f.count)
              ),
          (f.count = -1));
  }

  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }

  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (r.deleteBuffer(h.buffer), n.delete(c));
  }

  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const u = n.get(c);
      (!u || u.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d === void 0
      ? n.set(c, i(c, h))
      : d.version < c.version && (s(d.buffer, c, h), (d.version = c.version));
  }
  return {
    get: a,
    remove: o,
    update: l,
  };
}
class kh extends ke {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const s = e / 2,
      a = t / 2,
      o = Math.floor(n),
      l = Math.floor(i),
      c = o + 1,
      h = l + 1,
      d = e / o,
      u = t / l,
      f = [],
      m = [],
      y = [],
      v = [];
    for (let g = 0; g < h; g++) {
      const p = g * u - a;
      for (let E = 0; E < c; E++) {
        const L = E * d - s;
        m.push(L, -p, 0), y.push(0, 0, 1), v.push(E / o), v.push(1 - g / l);
      }
    }
    for (let g = 0; g < l; g++)
      for (let p = 0; p < o; p++) {
        const E = p + c * g,
          L = p + c * (g + 1),
          A = p + 1 + c * (g + 1),
          x = p + 1 + c * g;
        f.push(E, L, x), f.push(L, A, x);
      }
    this.setIndex(f),
      this.setAttribute("position", new We(m, 3)),
      this.setAttribute("normal", new We(y, 3)),
      this.setAttribute("uv", new We(v, 2));
  }
}
var Oh = `#ifdef USE_ALPHAMAP
      diffuseColor.a *= texture2D( alphaMap, vUv ).g;
  #endif`,
  Hh = `#ifdef USE_ALPHAMAP
      uniform sampler2D alphaMap;
  #endif`,
  Uh = `#ifdef ALPHATEST
      if ( diffuseColor.a < ALPHATEST ) discard;
  #endif`,
  Gh = `#ifdef USE_AOMAP
      float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
      reflectedLight.indirectDiffuse *= ambientOcclusion;
      #if defined( USE_ENVMAP ) && defined( STANDARD )
          float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
          reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
      #endif
  #endif`,
  Vh = `#ifdef USE_AOMAP
      uniform sampler2D aoMap;
      uniform float aoMapIntensity;
  #endif`,
  Wh = "vec3 transformed = vec3( position );",
  jh = `vec3 objectNormal = vec3( normal );
  #ifdef USE_TANGENT
      vec3 objectTangent = vec3( tangent.xyz );
  #endif`,
  qh = `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
      const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
      const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
      vec4 r = roughness * c0 + c1;
      float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
      return vec2( -1.04, 1.04 ) * a004 + r.zw;
  }
  float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
  #if defined ( PHYSICALLY_CORRECT_LIGHTS )
      float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
      if( cutoffDistance > 0.0 ) {
          distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
      }
      return distanceFalloff;
  #else
      if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
          return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
      }
      return 1.0;
  #endif
  }
  vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
      return RECIPROCAL_PI * diffuseColor;
  }
  vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
      float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
      return ( 1.0 - specularColor ) * fresnel + specularColor;
  }
  vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
      float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
      vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
      return Fr * fresnel + F0;
  }
  float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
      float a2 = pow2( alpha );
      float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
      float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
      return 1.0 / ( gl * gv );
  }
  float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
      float a2 = pow2( alpha );
      float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
      float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
      return 0.5 / max( gv + gl, EPSILON );
  }
  float D_GGX( const in float alpha, const in float dotNH ) {
      float a2 = pow2( alpha );
      float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
      return RECIPROCAL_PI * a2 / pow2( denom );
  }
  vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
      float alpha = pow2( roughness );
      vec3 halfDir = normalize( incidentLight.direction + viewDir );
      float dotNL = saturate( dot( normal, incidentLight.direction ) );
      float dotNV = saturate( dot( normal, viewDir ) );
      float dotNH = saturate( dot( normal, halfDir ) );
      float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
      vec3 F = F_Schlick( specularColor, dotLH );
      float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
      float D = D_GGX( alpha, dotNH );
      return F * ( G * D );
  }
  vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
      const float LUT_SIZE = 64.0;
      const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
      const float LUT_BIAS = 0.5 / LUT_SIZE;
      float dotNV = saturate( dot( N, V ) );
      vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
      uv = uv * LUT_SCALE + LUT_BIAS;
      return uv;
  }
  float LTC_ClippedSphereFormFactor( const in vec3 f ) {
      float l = length( f );
      return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
  }
  vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
      float x = dot( v1, v2 );
      float y = abs( x );
      float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
      float b = 3.4175940 + ( 4.1616724 + y ) * y;
      float v = a / b;
      float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
      return cross( v1, v2 ) * theta_sintheta;
  }
  vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
      vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
      vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
      vec3 lightNormal = cross( v1, v2 );
      if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
      vec3 T1, T2;
      T1 = normalize( V - N * dot( V, N ) );
      T2 = - cross( N, T1 );
      mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
      vec3 coords[ 4 ];
      coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
      coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
      coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
      coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
      coords[ 0 ] = normalize( coords[ 0 ] );
      coords[ 1 ] = normalize( coords[ 1 ] );
      coords[ 2 ] = normalize( coords[ 2 ] );
      coords[ 3 ] = normalize( coords[ 3 ] );
      vec3 vectorFormFactor = vec3( 0.0 );
      vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
      vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
      vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
      vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
      float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
      return vec3( result );
  }
  vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
      float dotNV = saturate( dot( normal, viewDir ) );
      vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
      return specularColor * brdf.x + brdf.y;
  }
  void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
      float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
      vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
      vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
      vec3 FssEss = F * brdf.x + brdf.y;
      float Ess = brdf.x + brdf.y;
      float Ems = 1.0 - Ess;
      vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
      singleScatter += FssEss;
      multiScatter += Fms * Ems;
  }
  float G_BlinnPhong_Implicit( ) {
      return 0.25;
  }
  float D_BlinnPhong( const in float shininess, const in float dotNH ) {
      return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
  }
  vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
      vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
      float dotNH = saturate( dot( geometry.normal, halfDir ) );
      float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
      vec3 F = F_Schlick( specularColor, dotLH );
      float G = G_BlinnPhong_Implicit( );
      float D = D_BlinnPhong( shininess, dotNH );
      return F * ( G * D );
  }
  float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
      return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
  }
  float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
      return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
  }
  #if defined( USE_SHEEN )
  float D_Charlie(float roughness, float NoH) {
      float invAlpha = 1.0 / roughness;
      float cos2h = NoH * NoH;
      float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
  }
  float V_Neubelt(float NoV, float NoL) {
      return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
  }
  vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
      vec3 N = geometry.normal;
      vec3 V = geometry.viewDir;
      vec3 H = normalize( V + L );
      float dotNH = saturate( dot( N, H ) );
      return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
  }
  #endif`,
  Xh = `#ifdef USE_BUMPMAP
      uniform sampler2D bumpMap;
      uniform float bumpScale;
      vec2 dHdxy_fwd() {
          vec2 dSTdx = dFdx( vUv );
          vec2 dSTdy = dFdy( vUv );
          float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
          float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
          float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
          return vec2( dBx, dBy );
      }
      vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
          vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
          vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
          vec3 vN = surf_norm;
          vec3 R1 = cross( vSigmaY, vN );
          vec3 R2 = cross( vN, vSigmaX );
          float fDet = dot( vSigmaX, R1 ) * faceDirection;
          vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
          return normalize( abs( fDet ) * surf_norm - vGrad );
      }
  #endif`,
  Yh = `#if NUM_CLIPPING_PLANES > 0
      vec4 plane;
      #pragma unroll_loop_start
      for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
          plane = clippingPlanes[ i ];
          if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
      }
      #pragma unroll_loop_end
      #if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
          bool clipped = true;
          #pragma unroll_loop_start
          for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
              plane = clippingPlanes[ i ];
              clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
          }
          #pragma unroll_loop_end
          if ( clipped ) discard;
      #endif
  #endif`,
  Zh = `#if NUM_CLIPPING_PLANES > 0
      varying vec3 vClipPosition;
      uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
  #endif`,
  Jh = `#if NUM_CLIPPING_PLANES > 0
      varying vec3 vClipPosition;
  #endif`,
  Kh = `#if NUM_CLIPPING_PLANES > 0
      vClipPosition = - mvPosition.xyz;
  #endif`,
  Qh = `#if defined( USE_COLOR_ALPHA )
      diffuseColor *= vColor;
  #elif defined( USE_COLOR )
      diffuseColor.rgb *= vColor;
  #endif`,
  $h = `#if defined( USE_COLOR_ALPHA )
      varying vec4 vColor;
  #elif defined( USE_COLOR )
      varying vec3 vColor;
  #endif`,
  eu = `#if defined( USE_COLOR_ALPHA )
      varying vec4 vColor;
  #elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
      varying vec3 vColor;
  #endif`,
  tu = `#if defined( USE_COLOR_ALPHA )
      vColor = vec4( 1.0 );
  #elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
      vColor = vec3( 1.0 );
  #endif
  #ifdef USE_COLOR
      vColor *= color;
  #endif
  #ifdef USE_INSTANCING_COLOR
      vColor.xyz *= instanceColor.xyz;
  #endif`,
  nu = `#define PI 3.141592653589793
  #define PI2 6.283185307179586
  #define PI_HALF 1.5707963267948966
  #define RECIPROCAL_PI 0.3183098861837907
  #define RECIPROCAL_PI2 0.15915494309189535
  #define EPSILON 1e-6
  #ifndef saturate
  #define saturate(a) clamp( a, 0.0, 1.0 )
  #endif
  #define whiteComplement(a) ( 1.0 - saturate( a ) )
  float pow2( const in float x ) { return x*x; }
  float pow3( const in float x ) { return x*x*x; }
  float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
  float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
  highp float rand( const in vec2 uv ) {
      const highp float a = 12.9898, b = 78.233, c = 43758.5453;
      highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
      return fract(sin(sn) * c);
  }
  #ifdef HIGH_PRECISION
      float precisionSafeLength( vec3 v ) { return length( v ); }
  #else
      float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
      float precisionSafeLength( vec3 v ) {
          float maxComponent = max3( abs( v ) );
          return length( v / maxComponent ) * maxComponent;
      }
  #endif
  struct IncidentLight {
      vec3 color;
      vec3 direction;
      bool visible;
  };
  struct ReflectedLight {
      vec3 directDiffuse;
      vec3 directSpecular;
      vec3 indirectDiffuse;
      vec3 indirectSpecular;
  };
  struct GeometricContext {
      vec3 position;
      vec3 normal;
      vec3 viewDir;
  #ifdef CLEARCOAT
      vec3 clearcoatNormal;
  #endif
  };
  vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
      return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
  }
  vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
      return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
  }
  vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
      float distance = dot( planeNormal, point - pointOnPlane );
      return - distance * planeNormal + point;
  }
  float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
      return sign( dot( point - pointOnPlane, planeNormal ) );
  }
  vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
      return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
  }
  mat3 transposeMat3( const in mat3 m ) {
      mat3 tmp;
      tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
      tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
      tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
      return tmp;
  }
  float linearToRelativeLuminance( const in vec3 color ) {
      vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
      return dot( weights, color.rgb );
  }
  bool isPerspectiveMatrix( mat4 m ) {
      return m[ 2 ][ 3 ] == - 1.0;
  }
  vec2 equirectUv( in vec3 dir ) {
      float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
      float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
      return vec2( u, v );
  }`,
  iu = `#ifdef ENVMAP_TYPE_CUBE_UV
      #define cubeUV_maxMipLevel 8.0
      #define cubeUV_minMipLevel 4.0
      #define cubeUV_maxTileSize 256.0
      #define cubeUV_minTileSize 16.0
      float getFace( vec3 direction ) {
          vec3 absDirection = abs( direction );
          float face = - 1.0;
          if ( absDirection.x > absDirection.z ) {
              if ( absDirection.x > absDirection.y )
                  face = direction.x > 0.0 ? 0.0 : 3.0;
              else
                  face = direction.y > 0.0 ? 1.0 : 4.0;
          } else {
              if ( absDirection.z > absDirection.y )
                  face = direction.z > 0.0 ? 2.0 : 5.0;
              else
                  face = direction.y > 0.0 ? 1.0 : 4.0;
          }
          return face;
      }
      vec2 getUV( vec3 direction, float face ) {
          vec2 uv;
          if ( face == 0.0 ) {
              uv = vec2( direction.z, direction.y ) / abs( direction.x );
          } else if ( face == 1.0 ) {
              uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
          } else if ( face == 2.0 ) {
              uv = vec2( - direction.x, direction.y ) / abs( direction.z );
          } else if ( face == 3.0 ) {
              uv = vec2( - direction.z, direction.y ) / abs( direction.x );
          } else if ( face == 4.0 ) {
              uv = vec2( - direction.x, direction.z ) / abs( direction.y );
          } else {
              uv = vec2( direction.x, direction.y ) / abs( direction.z );
          }
          return 0.5 * ( uv + 1.0 );
      }
      vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
          float face = getFace( direction );
          float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
          mipInt = max( mipInt, cubeUV_minMipLevel );
          float faceSize = exp2( mipInt );
          float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
          vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
          vec2 f = fract( uv );
          uv += 0.5 - f;
          if ( face > 2.0 ) {
              uv.y += faceSize;
              face -= 3.0;
          }
          uv.x += face * faceSize;
          if ( mipInt < cubeUV_maxMipLevel ) {
              uv.y += 2.0 * cubeUV_maxTileSize;
          }
          uv.y += filterInt * 2.0 * cubeUV_minTileSize;
          uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
          uv *= texelSize;
          vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
          uv.x += texelSize;
          vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
          uv.y += texelSize;
          vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
          uv.x -= texelSize;
          vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
          vec3 tm = mix( tl, tr, f.x );
          vec3 bm = mix( bl, br, f.x );
          return mix( tm, bm, f.y );
      }
      #define r0 1.0
      #define v0 0.339
      #define m0 - 2.0
      #define r1 0.8
      #define v1 0.276
      #define m1 - 1.0
      #define r4 0.4
      #define v4 0.046
      #define m4 2.0
      #define r5 0.305
      #define v5 0.016
      #define m5 3.0
      #define r6 0.21
      #define v6 0.0038
      #define m6 4.0
      float roughnessToMip( float roughness ) {
          float mip = 0.0;
          if ( roughness >= r1 ) {
              mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
          } else if ( roughness >= r4 ) {
              mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
          } else if ( roughness >= r5 ) {
              mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
          } else if ( roughness >= r6 ) {
              mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
          } else {
              mip = - 2.0 * log2( 1.16 * roughness );		}
          return mip;
      }
      vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
          float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
          float mipF = fract( mip );
          float mipInt = floor( mip );
          vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
          if ( mipF == 0.0 ) {
              return vec4( color0, 1.0 );
          } else {
              vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
              return vec4( mix( color0, color1, mipF ), 1.0 );
          }
      }
  #endif`,
  ru = `vec3 transformedNormal = objectNormal;
  #ifdef USE_INSTANCING
      mat3 m = mat3( instanceMatrix );
      transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
      transformedNormal = m * transformedNormal;
  #endif
  transformedNormal = normalMatrix * transformedNormal;
  #ifdef FLIP_SIDED
      transformedNormal = - transformedNormal;
  #endif
  #ifdef USE_TANGENT
      vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
      #ifdef FLIP_SIDED
          transformedTangent = - transformedTangent;
      #endif
  #endif`,
  su = `#ifdef USE_DISPLACEMENTMAP
      uniform sampler2D displacementMap;
      uniform float displacementScale;
      uniform float displacementBias;
  #endif`,
  au = `#ifdef USE_DISPLACEMENTMAP
      transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
  #endif`,
  ou = `#ifdef USE_EMISSIVEMAP
      vec4 emissiveColor = texture2D( emissiveMap, vUv );
      emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
      totalEmissiveRadiance *= emissiveColor.rgb;
  #endif`,
  lu = `#ifdef USE_EMISSIVEMAP
      uniform sampler2D emissiveMap;
  #endif`,
  cu = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  hu = `
  vec4 LinearToLinear( in vec4 value ) {
      return value;
  }
  vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
      return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
  }
  vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
      return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
  }
  vec4 sRGBToLinear( in vec4 value ) {
      return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
  }
  vec4 LinearTosRGB( in vec4 value ) {
      return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
  }
  vec4 RGBEToLinear( in vec4 value ) {
      return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
  }
  vec4 LinearToRGBE( in vec4 value ) {
      float maxComponent = max( max( value.r, value.g ), value.b );
      float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
      return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
  }
  vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
      return vec4( value.rgb * value.a * maxRange, 1.0 );
  }
  vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
      float maxRGB = max( value.r, max( value.g, value.b ) );
      float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
      M = ceil( M * 255.0 ) / 255.0;
      return vec4( value.rgb / ( M * maxRange ), M );
  }
  vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
      return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
  }
  vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
      float maxRGB = max( value.r, max( value.g, value.b ) );
      float D = max( maxRange / maxRGB, 1.0 );
      D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
      return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
  }
  const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
  vec4 LinearToLogLuv( in vec4 value ) {
      vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
      Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
      vec4 vResult;
      vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
      float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
      vResult.w = fract( Le );
      vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
      return vResult;
  }
  const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
  vec4 LogLuvToLinear( in vec4 value ) {
      float Le = value.z * 255.0 + value.w;
      vec3 Xp_Y_XYZp;
      Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
      Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
      Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
      vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
      return vec4( max( vRGB, 0.0 ), 1.0 );
  }`,
  uu = `#ifdef USE_ENVMAP
      #ifdef ENV_WORLDPOS
          vec3 cameraToFrag;
          if ( isOrthographic ) {
              cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
          } else {
              cameraToFrag = normalize( vWorldPosition - cameraPosition );
          }
          vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
          #ifdef ENVMAP_MODE_REFLECTION
              vec3 reflectVec = reflect( cameraToFrag, worldNormal );
          #else
              vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
          #endif
      #else
          vec3 reflectVec = vReflect;
      #endif
      #ifdef ENVMAP_TYPE_CUBE
          vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
      #elif defined( ENVMAP_TYPE_CUBE_UV )
          vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
      #else
          vec4 envColor = vec4( 0.0 );
      #endif
      #ifndef ENVMAP_TYPE_CUBE_UV
          envColor = envMapTexelToLinear( envColor );
      #endif
      #ifdef ENVMAP_BLENDING_MULTIPLY
          outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
      #elif defined( ENVMAP_BLENDING_MIX )
          outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
      #elif defined( ENVMAP_BLENDING_ADD )
          outgoingLight += envColor.xyz * specularStrength * reflectivity;
      #endif
  #endif`,
  du = `#ifdef USE_ENVMAP
      uniform float envMapIntensity;
      uniform float flipEnvMap;
      uniform int maxMipLevel;
      #ifdef ENVMAP_TYPE_CUBE
          uniform samplerCube envMap;
      #else
          uniform sampler2D envMap;
      #endif
      
  #endif`,
  fu = `#ifdef USE_ENVMAP
      uniform float reflectivity;
      #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
          #define ENV_WORLDPOS
      #endif
      #ifdef ENV_WORLDPOS
          varying vec3 vWorldPosition;
          uniform float refractionRatio;
      #else
          varying vec3 vReflect;
      #endif
  #endif`,
  pu = `#ifdef USE_ENVMAP
      #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
          #define ENV_WORLDPOS
      #endif
      #ifdef ENV_WORLDPOS
          
          varying vec3 vWorldPosition;
      #else
          varying vec3 vReflect;
          uniform float refractionRatio;
      #endif
  #endif`,
  mu = `#ifdef USE_ENVMAP
      #ifdef ENV_WORLDPOS
          vWorldPosition = worldPosition.xyz;
      #else
          vec3 cameraToVertex;
          if ( isOrthographic ) {
              cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
          } else {
              cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
          }
          vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
          #ifdef ENVMAP_MODE_REFLECTION
              vReflect = reflect( cameraToVertex, worldNormal );
          #else
              vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
          #endif
      #endif
  #endif`,
  gu = `#ifdef USE_FOG
      fogDepth = - mvPosition.z;
  #endif`,
  yu = `#ifdef USE_FOG
      varying float fogDepth;
  #endif`,
  vu = `#ifdef USE_FOG
      #ifdef FOG_EXP2
          float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
      #else
          float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
      #endif
      gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #endif`,
  xu = `#ifdef USE_FOG
      uniform vec3 fogColor;
      varying float fogDepth;
      #ifdef FOG_EXP2
          uniform float fogDensity;
      #else
          uniform float fogNear;
          uniform float fogFar;
      #endif
  #endif`,
  _u = `#ifdef USE_GRADIENTMAP
      uniform sampler2D gradientMap;
  #endif
  vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
      float dotNL = dot( normal, lightDirection );
      vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
      #ifdef USE_GRADIENTMAP
          return texture2D( gradientMap, coord ).rgb;
      #else
          return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
      #endif
  }`,
  wu = `#ifdef USE_LIGHTMAP
      vec4 lightMapTexel= texture2D( lightMap, vUv2 );
      reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
  #endif`,
  bu = `#ifdef USE_LIGHTMAP
      uniform sampler2D lightMap;
      uniform float lightMapIntensity;
  #endif`,
  Mu = `vec3 diffuse = vec3( 1.0 );
  GeometricContext geometry;
  geometry.position = mvPosition.xyz;
  geometry.normal = normalize( transformedNormal );
  geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
  GeometricContext backGeometry;
  backGeometry.position = geometry.position;
  backGeometry.normal = -geometry.normal;
  backGeometry.viewDir = geometry.viewDir;
  vLightFront = vec3( 0.0 );
  vIndirectFront = vec3( 0.0 );
  #ifdef DOUBLE_SIDED
      vLightBack = vec3( 0.0 );
      vIndirectBack = vec3( 0.0 );
  #endif
  IncidentLight directLight;
  float dotNL;
  vec3 directLightColor_Diffuse;
  vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
  vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
  #ifdef DOUBLE_SIDED
      vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
      vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
  #endif
  #if NUM_POINT_LIGHTS > 0
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
          getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
          dotNL = dot( geometry.normal, directLight.direction );
          directLightColor_Diffuse = PI * directLight.color;
          vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
          #ifdef DOUBLE_SIDED
              vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
          #endif
      }
      #pragma unroll_loop_end
  #endif
  #if NUM_SPOT_LIGHTS > 0
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
          getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
          dotNL = dot( geometry.normal, directLight.direction );
          directLightColor_Diffuse = PI * directLight.color;
          vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
          #ifdef DOUBLE_SIDED
              vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
          #endif
      }
      #pragma unroll_loop_end
  #endif
  #if NUM_DIR_LIGHTS > 0
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
          getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
          dotNL = dot( geometry.normal, directLight.direction );
          directLightColor_Diffuse = PI * directLight.color;
          vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
          #ifdef DOUBLE_SIDED
              vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
          #endif
      }
      #pragma unroll_loop_end
  #endif
  #if NUM_HEMI_LIGHTS > 0
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
          vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
          #ifdef DOUBLE_SIDED
              vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
          #endif
      }
      #pragma unroll_loop_end
  #endif`,
  Su = `uniform bool receiveShadow;
  uniform vec3 ambientLightColor;
  uniform vec3 lightProbe[ 9 ];
  vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
      float x = normal.x, y = normal.y, z = normal.z;
      vec3 result = shCoefficients[ 0 ] * 0.886227;
      result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
      result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
      result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
      result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
      result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
      result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
      result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
      result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
      return result;
  }
  vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
      vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
      vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
      return irradiance;
  }
  vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
      vec3 irradiance = ambientLightColor;
      #ifndef PHYSICALLY_CORRECT_LIGHTS
          irradiance *= PI;
      #endif
      return irradiance;
  }
  #if NUM_DIR_LIGHTS > 0
      struct DirectionalLight {
          vec3 direction;
          vec3 color;
      };
      uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
      void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
          directLight.color = directionalLight.color;
          directLight.direction = directionalLight.direction;
          directLight.visible = true;
      }
  #endif
  #if NUM_POINT_LIGHTS > 0
      struct PointLight {
          vec3 position;
          vec3 color;
          float distance;
          float decay;
      };
      uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
      void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
          vec3 lVector = pointLight.position - geometry.position;
          directLight.direction = normalize( lVector );
          float lightDistance = length( lVector );
          directLight.color = pointLight.color;
          directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
          directLight.visible = ( directLight.color != vec3( 0.0 ) );
      }
  #endif
  #if NUM_SPOT_LIGHTS > 0
      struct SpotLight {
          vec3 position;
          vec3 direction;
          vec3 color;
          float distance;
          float decay;
          float coneCos;
          float penumbraCos;
      };
      uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
      void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
          vec3 lVector = spotLight.position - geometry.position;
          directLight.direction = normalize( lVector );
          float lightDistance = length( lVector );
          float angleCos = dot( directLight.direction, spotLight.direction );
          if ( angleCos > spotLight.coneCos ) {
              float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
              directLight.color = spotLight.color;
              directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
              directLight.visible = true;
          } else {
              directLight.color = vec3( 0.0 );
              directLight.visible = false;
          }
      }
  #endif
  #if NUM_RECT_AREA_LIGHTS > 0
      struct RectAreaLight {
          vec3 color;
          vec3 position;
          vec3 halfWidth;
          vec3 halfHeight;
      };
      uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
      uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
  #endif
  #if NUM_HEMI_LIGHTS > 0
      struct HemisphereLight {
          vec3 direction;
          vec3 skyColor;
          vec3 groundColor;
      };
      uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
      vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
          float dotNL = dot( geometry.normal, hemiLight.direction );
          float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
          vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
          #ifndef PHYSICALLY_CORRECT_LIGHTS
              irradiance *= PI;
          #endif
          return irradiance;
      }
  #endif`,
  Tu = `#if defined( USE_ENVMAP )
      #ifdef ENVMAP_MODE_REFRACTION
          uniform float refractionRatio;
      #endif
      vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
          vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
          #ifdef ENVMAP_TYPE_CUBE
              vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
              #ifdef TEXTURE_LOD_EXT
                  vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
              #else
                  vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
              #endif
              envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
          #elif defined( ENVMAP_TYPE_CUBE_UV )
              vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
          #else
              vec4 envMapColor = vec4( 0.0 );
          #endif
          return PI * envMapColor.rgb * envMapIntensity;
      }
      float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
          float maxMIPLevelScalar = float( maxMIPLevel );
          float sigma = PI * roughness * roughness / ( 1.0 + roughness );
          float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
          return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
      }
      vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
          #ifdef ENVMAP_MODE_REFLECTION
              vec3 reflectVec = reflect( -viewDir, normal );
              reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
          #else
              vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
          #endif
          reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
          float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
          #ifdef ENVMAP_TYPE_CUBE
              vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
              #ifdef TEXTURE_LOD_EXT
                  vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
              #else
                  vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
              #endif
              envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
          #elif defined( ENVMAP_TYPE_CUBE_UV )
              vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
          #endif
          return envMapColor.rgb * envMapIntensity;
      }
  #endif`,
  Eu = `ToonMaterial material;
  material.diffuseColor = diffuseColor.rgb;`,
  Au = `varying vec3 vViewPosition;
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
  #endif
  struct ToonMaterial {
      vec3 diffuseColor;
  };
  void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
      vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
      #ifndef PHYSICALLY_CORRECT_LIGHTS
          irradiance *= PI;
      #endif
      reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
  }
  void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
      reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
  }
  #define RE_Direct				RE_Direct_Toon
  #define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
  #define Material_LightProbeLOD( material )	(0)`,
  Lu = `BlinnPhongMaterial material;
  material.diffuseColor = diffuseColor.rgb;
  material.specularColor = specular;
  material.specularShininess = shininess;
  material.specularStrength = specularStrength;`,
  Cu = `varying vec3 vViewPosition;
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
  #endif
  struct BlinnPhongMaterial {
      vec3 diffuseColor;
      vec3 specularColor;
      float specularShininess;
      float specularStrength;
  };
  void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
      float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
      vec3 irradiance = dotNL * directLight.color;
      #ifndef PHYSICALLY_CORRECT_LIGHTS
          irradiance *= PI;
      #endif
      reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
      reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
  }
  void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
      reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
  }
  #define RE_Direct				RE_Direct_BlinnPhong
  #define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
  #define Material_LightProbeLOD( material )	(0)`,
  Ru = `PhysicalMaterial material;
  material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
  vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
  float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
  material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
  material.specularRoughness = min( material.specularRoughness, 1.0 );
  #ifdef REFLECTIVITY
      material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
  #else
      material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
  #endif
  #ifdef CLEARCOAT
      material.clearcoat = clearcoat;
      material.clearcoatRoughness = clearcoatRoughness;
      #ifdef USE_CLEARCOATMAP
          material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
      #endif
      #ifdef USE_CLEARCOAT_ROUGHNESSMAP
          material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
      #endif
      material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
      material.clearcoatRoughness += geometryRoughness;
      material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
  #endif
  #ifdef USE_SHEEN
      material.sheenColor = sheen;
  #endif`,
  Pu = `struct PhysicalMaterial {
      vec3 diffuseColor;
      float specularRoughness;
      vec3 specularColor;
  #ifdef CLEARCOAT
      float clearcoat;
      float clearcoatRoughness;
  #endif
  #ifdef USE_SHEEN
      vec3 sheenColor;
  #endif
  };
  #define MAXIMUM_SPECULAR_COEFFICIENT 0.16
  #define DEFAULT_SPECULAR_COEFFICIENT 0.04
  float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
      return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
  }
  #if NUM_RECT_AREA_LIGHTS > 0
      void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
          vec3 normal = geometry.normal;
          vec3 viewDir = geometry.viewDir;
          vec3 position = geometry.position;
          vec3 lightPos = rectAreaLight.position;
          vec3 halfWidth = rectAreaLight.halfWidth;
          vec3 halfHeight = rectAreaLight.halfHeight;
          vec3 lightColor = rectAreaLight.color;
          float roughness = material.specularRoughness;
          vec3 rectCoords[ 4 ];
          rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
          rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
          rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
          vec2 uv = LTC_Uv( normal, viewDir, roughness );
          vec4 t1 = texture2D( ltc_1, uv );
          vec4 t2 = texture2D( ltc_2, uv );
          mat3 mInv = mat3(
              vec3( t1.x, 0, t1.y ),
              vec3(    0, 1,    0 ),
              vec3( t1.z, 0, t1.w )
          );
          vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
          reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
          reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
      }
  #endif
  void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
      float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
      vec3 irradiance = dotNL * directLight.color;
      #ifndef PHYSICALLY_CORRECT_LIGHTS
          irradiance *= PI;
      #endif
      #ifdef CLEARCOAT
          float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
          vec3 ccIrradiance = ccDotNL * directLight.color;
          #ifndef PHYSICALLY_CORRECT_LIGHTS
              ccIrradiance *= PI;
          #endif
          float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
          reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
      #else
          float clearcoatDHR = 0.0;
      #endif
      #ifdef USE_SHEEN
          reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
              material.specularRoughness,
              directLight.direction,
              geometry,
              material.sheenColor
          );
      #else
          reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
      #endif
      reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
  }
  void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
      reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
  }
  void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
      #ifdef CLEARCOAT
          float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
          reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
          float ccDotNL = ccDotNV;
          float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
      #else
          float clearcoatDHR = 0.0;
      #endif
      float clearcoatInv = 1.0 - clearcoatDHR;
      vec3 singleScattering = vec3( 0.0 );
      vec3 multiScattering = vec3( 0.0 );
      vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
      BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
      vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
      reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
      reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
      reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
  }
  #define RE_Direct				RE_Direct_Physical
  #define RE_Direct_RectArea		RE_Direct_RectArea_Physical
  #define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
  #define RE_IndirectSpecular		RE_IndirectSpecular_Physical
  float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
      return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
  }`,
  Du = `
  GeometricContext geometry;
  geometry.position = - vViewPosition;
  geometry.normal = normal;
  geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
  #ifdef CLEARCOAT
      geometry.clearcoatNormal = clearcoatNormal;
  #endif
  IncidentLight directLight;
  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
      PointLight pointLight;
      #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
      PointLightShadow pointLightShadow;
      #endif
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
          pointLight = pointLights[ i ];
          getPointDirectLightIrradiance( pointLight, geometry, directLight );
          #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
          pointLightShadow = pointLightShadows[ i ];
          directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
          #endif
          RE_Direct( directLight, geometry, material, reflectedLight );
      }
      #pragma unroll_loop_end
  #endif
  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
      SpotLight spotLight;
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
      SpotLightShadow spotLightShadow;
      #endif
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
          spotLight = spotLights[ i ];
          getSpotDirectLightIrradiance( spotLight, geometry, directLight );
          #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
          spotLightShadow = spotLightShadows[ i ];
          directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
          #endif
          RE_Direct( directLight, geometry, material, reflectedLight );
      }
      #pragma unroll_loop_end
  #endif
  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
      DirectionalLight directionalLight;
      #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
      DirectionalLightShadow directionalLightShadow;
      #endif
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
          directionalLight = directionalLights[ i ];
          getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
          #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
          directionalLightShadow = directionalLightShadows[ i ];
          directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
          #endif
          RE_Direct( directLight, geometry, material, reflectedLight );
      }
      #pragma unroll_loop_end
  #endif
  #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
      RectAreaLight rectAreaLight;
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
          rectAreaLight = rectAreaLights[ i ];
          RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
      }
      #pragma unroll_loop_end
  #endif
  #if defined( RE_IndirectDiffuse )
      vec3 iblIrradiance = vec3( 0.0 );
      vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
      irradiance += getLightProbeIrradiance( lightProbe, geometry );
      #if ( NUM_HEMI_LIGHTS > 0 )
          #pragma unroll_loop_start
          for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
              irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
          }
          #pragma unroll_loop_end
      #endif
  #endif
  #if defined( RE_IndirectSpecular )
      vec3 radiance = vec3( 0.0 );
      vec3 clearcoatRadiance = vec3( 0.0 );
  #endif`,
  Iu = `#if defined( RE_IndirectDiffuse )
      #ifdef USE_LIGHTMAP
          vec4 lightMapTexel= texture2D( lightMap, vUv2 );
          vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
          #ifndef PHYSICALLY_CORRECT_LIGHTS
              lightMapIrradiance *= PI;
          #endif
          irradiance += lightMapIrradiance;
      #endif
      #if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
          iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
      #endif
  #endif
  #if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
      radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
      #ifdef CLEARCOAT
          clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
      #endif
  #endif`,
  Nu = `#if defined( RE_IndirectDiffuse )
      RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
  #endif
  #if defined( RE_IndirectSpecular )
      RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
  #endif`,
  Fu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
      gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
  #endif`,
  zu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
      uniform float logDepthBufFC;
      varying float vFragDepth;
      varying float vIsPerspective;
  #endif`,
  Bu = `#ifdef USE_LOGDEPTHBUF
      #ifdef USE_LOGDEPTHBUF_EXT
          varying float vFragDepth;
          varying float vIsPerspective;
      #else
          uniform float logDepthBufFC;
      #endif
  #endif`,
  ku = `#ifdef USE_LOGDEPTHBUF
      #ifdef USE_LOGDEPTHBUF_EXT
          vFragDepth = 1.0 + gl_Position.w;
          vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
      #else
          if ( isPerspectiveMatrix( projectionMatrix ) ) {
              gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
              gl_Position.z *= gl_Position.w;
          }
      #endif
  #endif`,
  Ou = `#ifdef USE_MAP
      vec4 texelColor = texture2D( map, vUv );
      texelColor = mapTexelToLinear( texelColor );
      diffuseColor *= texelColor;
  #endif`,
  Hu = `#ifdef USE_MAP
      uniform sampler2D map;
  #endif`,
  Uu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
      vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
  #endif
  #ifdef USE_MAP
      vec4 mapTexel = texture2D( map, uv );
      diffuseColor *= mapTexelToLinear( mapTexel );
  #endif
  #ifdef USE_ALPHAMAP
      diffuseColor.a *= texture2D( alphaMap, uv ).g;
  #endif`,
  Gu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
      uniform mat3 uvTransform;
  #endif
  #ifdef USE_MAP
      uniform sampler2D map;
  #endif
  #ifdef USE_ALPHAMAP
      uniform sampler2D alphaMap;
  #endif`,
  Vu = `float metalnessFactor = metalness;
  #ifdef USE_METALNESSMAP
      vec4 texelMetalness = texture2D( metalnessMap, vUv );
      metalnessFactor *= texelMetalness.b;
  #endif`,
  Wu = `#ifdef USE_METALNESSMAP
      uniform sampler2D metalnessMap;
  #endif`,
  ju = `#ifdef USE_MORPHNORMALS
      objectNormal *= morphTargetBaseInfluence;
      objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
      objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
      objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
      objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
  #endif`,
  qu = `#ifdef USE_MORPHTARGETS
      uniform float morphTargetBaseInfluence;
      #ifndef USE_MORPHNORMALS
          uniform float morphTargetInfluences[ 8 ];
      #else
          uniform float morphTargetInfluences[ 4 ];
      #endif
  #endif`,
  Xu = `#ifdef USE_MORPHTARGETS
      transformed *= morphTargetBaseInfluence;
      transformed += morphTarget0 * morphTargetInfluences[ 0 ];
      transformed += morphTarget1 * morphTargetInfluences[ 1 ];
      transformed += morphTarget2 * morphTargetInfluences[ 2 ];
      transformed += morphTarget3 * morphTargetInfluences[ 3 ];
      #ifndef USE_MORPHNORMALS
          transformed += morphTarget4 * morphTargetInfluences[ 4 ];
          transformed += morphTarget5 * morphTargetInfluences[ 5 ];
          transformed += morphTarget6 * morphTargetInfluences[ 6 ];
          transformed += morphTarget7 * morphTargetInfluences[ 7 ];
      #endif
  #endif`,
  Yu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
  #ifdef FLAT_SHADED
      vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
      vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
      vec3 normal = normalize( cross( fdx, fdy ) );
  #else
      vec3 normal = normalize( vNormal );
      #ifdef DOUBLE_SIDED
          normal = normal * faceDirection;
      #endif
      #ifdef USE_TANGENT
          vec3 tangent = normalize( vTangent );
          vec3 bitangent = normalize( vBitangent );
          #ifdef DOUBLE_SIDED
              tangent = tangent * faceDirection;
              bitangent = bitangent * faceDirection;
          #endif
          #if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
              mat3 vTBN = mat3( tangent, bitangent, normal );
          #endif
      #endif
  #endif
  vec3 geometryNormal = normal;`,
  Zu = `#ifdef OBJECTSPACE_NORMALMAP
      normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
      #ifdef FLIP_SIDED
          normal = - normal;
      #endif
      #ifdef DOUBLE_SIDED
          normal = normal * faceDirection;
      #endif
      normal = normalize( normalMatrix * normal );
  #elif defined( TANGENTSPACE_NORMALMAP )
      vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
      mapN.xy *= normalScale;
      #ifdef USE_TANGENT
          normal = normalize( vTBN * mapN );
      #else
          normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
      #endif
  #elif defined( USE_BUMPMAP )
      normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
  #endif`,
  Ju = `#ifdef USE_NORMALMAP
      uniform sampler2D normalMap;
      uniform vec2 normalScale;
  #endif
  #ifdef OBJECTSPACE_NORMALMAP
      uniform mat3 normalMatrix;
  #endif
  #if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
      vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
          vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
          vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
          vec2 st0 = dFdx( vUv.st );
          vec2 st1 = dFdy( vUv.st );
          vec3 N = surf_norm;
          vec3 q1perp = cross( q1, N );
          vec3 q0perp = cross( N, q0 );
          vec3 T = q1perp * st0.x + q0perp * st1.x;
          vec3 B = q1perp * st0.y + q0perp * st1.y;
          float det = max( dot( T, T ), dot( B, B ) );
          float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
          return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
      }
  #endif`,
  Ku = `#ifdef CLEARCOAT
      vec3 clearcoatNormal = geometryNormal;
  #endif`,
  Qu = `#ifdef USE_CLEARCOAT_NORMALMAP
      vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
      clearcoatMapN.xy *= clearcoatNormalScale;
      #ifdef USE_TANGENT
          clearcoatNormal = normalize( vTBN * clearcoatMapN );
      #else
          clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
      #endif
  #endif`,
  $u = `#ifdef USE_CLEARCOATMAP
      uniform sampler2D clearcoatMap;
  #endif
  #ifdef USE_CLEARCOAT_ROUGHNESSMAP
      uniform sampler2D clearcoatRoughnessMap;
  #endif
  #ifdef USE_CLEARCOAT_NORMALMAP
      uniform sampler2D clearcoatNormalMap;
      uniform vec2 clearcoatNormalScale;
  #endif`,
  ed = `vec3 packNormalToRGB( const in vec3 normal ) {
      return normalize( normal ) * 0.5 + 0.5;
  }
  vec3 unpackRGBToNormal( const in vec3 rgb ) {
      return 2.0 * rgb.xyz - 1.0;
  }
  const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
  const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
  const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
  const float ShiftRight8 = 1. / 256.;
  vec4 packDepthToRGBA( const in float v ) {
      vec4 r = vec4( fract( v * PackFactors ), v );
      r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
  }
  float unpackRGBAToDepth( const in vec4 v ) {
      return dot( v, UnpackFactors );
  }
  vec4 pack2HalfToRGBA( vec2 v ) {
      vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
      return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
  }
  vec2 unpackRGBATo2Half( vec4 v ) {
      return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
  }
  float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
      return ( viewZ + near ) / ( near - far );
  }
  float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
      return linearClipZ * ( near - far ) - near;
  }
  float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
      return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
  }
  float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
      return ( near * far ) / ( ( far - near ) * invClipZ - far );
  }`,
  td = `#ifdef PREMULTIPLIED_ALPHA
      gl_FragColor.rgb *= gl_FragColor.a;
  #endif`,
  nd = `vec4 mvPosition = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
      mvPosition = instanceMatrix * mvPosition;
  #endif
  mvPosition = modelViewMatrix * mvPosition;
  gl_Position = projectionMatrix * mvPosition;`,
  id = `#ifdef DITHERING
      gl_FragColor.rgb = dithering( gl_FragColor.rgb );
  #endif`,
  rd = `#ifdef DITHERING
      vec3 dithering( vec3 color ) {
          float grid_position = rand( gl_FragCoord.xy );
          vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
          dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
          return color + dither_shift_RGB;
      }
  #endif`,
  sd = `float roughnessFactor = roughness;
  #ifdef USE_ROUGHNESSMAP
      vec4 texelRoughness = texture2D( roughnessMap, vUv );
      roughnessFactor *= texelRoughness.g;
  #endif`,
  ad = `#ifdef USE_ROUGHNESSMAP
      uniform sampler2D roughnessMap;
  #endif`,
  od = `#ifdef USE_SHADOWMAP
      #if NUM_DIR_LIGHT_SHADOWS > 0
          uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
          varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
          struct DirectionalLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
          };
          uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
      #endif
      #if NUM_SPOT_LIGHT_SHADOWS > 0
          uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
          varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
          struct SpotLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
          };
          uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
      #endif
      #if NUM_POINT_LIGHT_SHADOWS > 0
          uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
          varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
          struct PointLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
              float shadowCameraNear;
              float shadowCameraFar;
          };
          uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
      #endif
      float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
          return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
      }
      vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
          return unpackRGBATo2Half( texture2D( shadow, uv ) );
      }
      float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
          float occlusion = 1.0;
          vec2 distribution = texture2DDistribution( shadow, uv );
          float hard_shadow = step( compare , distribution.x );
          if (hard_shadow != 1.0 ) {
              float distance = compare - distribution.x ;
              float variance = max( 0.00000, distribution.y * distribution.y );
              float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
          }
          return occlusion;
      }
      float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
          float shadow = 1.0;
          shadowCoord.xyz /= shadowCoord.w;
          shadowCoord.z += shadowBias;
          bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
          bool inFrustum = all( inFrustumVec );
          bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
          bool frustumTest = all( frustumTestVec );
          if ( frustumTest ) {
          #if defined( SHADOWMAP_TYPE_PCF )
              vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
              float dx0 = - texelSize.x * shadowRadius;
              float dy0 = - texelSize.y * shadowRadius;
              float dx1 = + texelSize.x * shadowRadius;
              float dy1 = + texelSize.y * shadowRadius;
              float dx2 = dx0 / 2.0;
              float dy2 = dy0 / 2.0;
              float dx3 = dx1 / 2.0;
              float dy3 = dy1 / 2.0;
              shadow = (
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
              ) * ( 1.0 / 17.0 );
          #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
              vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
              float dx = texelSize.x;
              float dy = texelSize.y;
              vec2 uv = shadowCoord.xy;
              vec2 f = fract( uv * shadowMapSize + 0.5 );
              uv -= f * texelSize;
              shadow = (
                  texture2DCompare( shadowMap, uv, shadowCoord.z ) +
                  texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
                  mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
                       texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
                       f.x ) +
                  mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
                       texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
                       f.x ) +
                  mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
                       texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
                       f.y ) +
                  mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
                       texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
                       f.y ) +
                  mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
                            texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
                            f.x ),
                       mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
                            texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
                            f.x ),
                       f.y )
              ) * ( 1.0 / 9.0 );
          #elif defined( SHADOWMAP_TYPE_VSM )
              shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
          #else
              shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
          #endif
          }
          return shadow;
      }
      vec2 cubeToUV( vec3 v, float texelSizeY ) {
          vec3 absV = abs( v );
          float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
          absV *= scaleToCube;
          v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
          vec2 planar = v.xy;
          float almostATexel = 1.5 * texelSizeY;
          float almostOne = 1.0 - almostATexel;
          if ( absV.z >= almostOne ) {
              if ( v.z > 0.0 )
                  planar.x = 4.0 - v.x;
          } else if ( absV.x >= almostOne ) {
              float signX = sign( v.x );
              planar.x = v.z * signX + 2.0 * signX;
          } else if ( absV.y >= almostOne ) {
              float signY = sign( v.y );
              planar.x = v.x + 2.0 * signY + 2.0;
              planar.y = v.z * signY - 2.0;
          }
          return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
      }
      float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
          vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
          vec3 lightToPosition = shadowCoord.xyz;
          float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
          vec3 bd3D = normalize( lightToPosition );
          #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
              vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
              return (
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
              ) * ( 1.0 / 9.0 );
          #else
              return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
          #endif
      }
  #endif`,
  ld = `#ifdef USE_SHADOWMAP
      #if NUM_DIR_LIGHT_SHADOWS > 0
          uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
          varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
          struct DirectionalLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
          };
          uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
      #endif
      #if NUM_SPOT_LIGHT_SHADOWS > 0
          uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
          varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
          struct SpotLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
          };
          uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
      #endif
      #if NUM_POINT_LIGHT_SHADOWS > 0
          uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
          varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
          struct PointLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
              float shadowCameraNear;
              float shadowCameraFar;
          };
          uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
      #endif
  #endif`,
  cd = `#ifdef USE_SHADOWMAP
      #if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
          vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
          vec4 shadowWorldPosition;
      #endif
      #if NUM_DIR_LIGHT_SHADOWS > 0
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
          shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
          vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
      }
      #pragma unroll_loop_end
      #endif
      #if NUM_SPOT_LIGHT_SHADOWS > 0
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
          shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
          vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
      }
      #pragma unroll_loop_end
      #endif
      #if NUM_POINT_LIGHT_SHADOWS > 0
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
          shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
          vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
      }
      #pragma unroll_loop_end
      #endif
  #endif`,
  hd = `float getShadowMask() {
      float shadow = 1.0;
      #ifdef USE_SHADOWMAP
      #if NUM_DIR_LIGHT_SHADOWS > 0
      DirectionalLightShadow directionalLight;
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
          directionalLight = directionalLightShadows[ i ];
          shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      }
      #pragma unroll_loop_end
      #endif
      #if NUM_SPOT_LIGHT_SHADOWS > 0
      SpotLightShadow spotLight;
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
          spotLight = spotLightShadows[ i ];
          shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      }
      #pragma unroll_loop_end
      #endif
      #if NUM_POINT_LIGHT_SHADOWS > 0
      PointLightShadow pointLight;
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
          pointLight = pointLightShadows[ i ];
          shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
      }
      #pragma unroll_loop_end
      #endif
      #endif
      return shadow;
  }`,
  ud = `#ifdef USE_SKINNING
      mat4 boneMatX = getBoneMatrix( skinIndex.x );
      mat4 boneMatY = getBoneMatrix( skinIndex.y );
      mat4 boneMatZ = getBoneMatrix( skinIndex.z );
      mat4 boneMatW = getBoneMatrix( skinIndex.w );
  #endif`,
  dd = `#ifdef USE_SKINNING
      uniform mat4 bindMatrix;
      uniform mat4 bindMatrixInverse;
      #ifdef BONE_TEXTURE
          uniform highp sampler2D boneTexture;
          uniform int boneTextureSize;
          mat4 getBoneMatrix( const in float i ) {
              float j = i * 4.0;
              float x = mod( j, float( boneTextureSize ) );
              float y = floor( j / float( boneTextureSize ) );
              float dx = 1.0 / float( boneTextureSize );
              float dy = 1.0 / float( boneTextureSize );
              y = dy * ( y + 0.5 );
              vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
              vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
              vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
              vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
              mat4 bone = mat4( v1, v2, v3, v4 );
              return bone;
          }
      #else
          uniform mat4 boneMatrices[ MAX_BONES ];
          mat4 getBoneMatrix( const in float i ) {
              mat4 bone = boneMatrices[ int(i) ];
              return bone;
          }
      #endif
  #endif`,
  fd = `#ifdef USE_SKINNING
      vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
      vec4 skinned = vec4( 0.0 );
      skinned += boneMatX * skinVertex * skinWeight.x;
      skinned += boneMatY * skinVertex * skinWeight.y;
      skinned += boneMatZ * skinVertex * skinWeight.z;
      skinned += boneMatW * skinVertex * skinWeight.w;
      transformed = ( bindMatrixInverse * skinned ).xyz;
  #endif`,
  pd = `#ifdef USE_SKINNING
      mat4 skinMatrix = mat4( 0.0 );
      skinMatrix += skinWeight.x * boneMatX;
      skinMatrix += skinWeight.y * boneMatY;
      skinMatrix += skinWeight.z * boneMatZ;
      skinMatrix += skinWeight.w * boneMatW;
      skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
      objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
      #ifdef USE_TANGENT
          objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
      #endif
  #endif`,
  md = `float specularStrength;
  #ifdef USE_SPECULARMAP
      vec4 texelSpecular = texture2D( specularMap, vUv );
      specularStrength = texelSpecular.r;
  #else
      specularStrength = 1.0;
  #endif`,
  gd = `#ifdef USE_SPECULARMAP
      uniform sampler2D specularMap;
  #endif`,
  yd = `#if defined( TONE_MAPPING )
      gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
  #endif`,
  vd = `#ifndef saturate
  #define saturate(a) clamp( a, 0.0, 1.0 )
  #endif
  uniform float toneMappingExposure;
  vec3 LinearToneMapping( vec3 color ) {
      return toneMappingExposure * color;
  }
  vec3 ReinhardToneMapping( vec3 color ) {
      color *= toneMappingExposure;
      return saturate( color / ( vec3( 1.0 ) + color ) );
  }
  vec3 OptimizedCineonToneMapping( vec3 color ) {
      color *= toneMappingExposure;
      color = max( vec3( 0.0 ), color - 0.004 );
      return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
  }
  vec3 RRTAndODTFit( vec3 v ) {
      vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
      vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
      return a / b;
  }
  vec3 ACESFilmicToneMapping( vec3 color ) {
      const mat3 ACESInputMat = mat3(
          vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
          vec3( 0.04823, 0.01566, 0.83777 )
      );
      const mat3 ACESOutputMat = mat3(
          vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
          vec3( -0.07367, -0.00605,  1.07602 )
      );
      color *= toneMappingExposure / 0.6;
      color = ACESInputMat * color;
      color = RRTAndODTFit( color );
      color = ACESOutputMat * color;
      return saturate( color );
  }
  vec3 CustomToneMapping( vec3 color ) { return color; }`,
  xd = `#ifdef USE_TRANSMISSIONMAP
      totalTransmission *= texture2D( transmissionMap, vUv ).r;
  #endif`,
  _d = `#ifdef USE_TRANSMISSIONMAP
      uniform sampler2D transmissionMap;
  #endif`,
  wd = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
      varying vec2 vUv;
  #endif`,
  bd = `#ifdef USE_UV
      #ifdef UVS_VERTEX_ONLY
          vec2 vUv;
      #else
          varying vec2 vUv;
      #endif
      uniform mat3 uvTransform;
  #endif`,
  Md = `#ifdef USE_UV
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  #endif`,
  Sd = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      varying vec2 vUv2;
  #endif`,
  Td = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      attribute vec2 uv2;
      varying vec2 vUv2;
      uniform mat3 uv2Transform;
  #endif`,
  Ed = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
  #endif`,
  Ad = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
      vec4 worldPosition = vec4( transformed, 1.0 );
      #ifdef USE_INSTANCING
          worldPosition = instanceMatrix * worldPosition;
      #endif
      worldPosition = modelMatrix * worldPosition;
  #endif`,
  Ld = `uniform sampler2D t2D;
  varying vec2 vUv;
  void main() {
      vec4 texColor = texture2D( t2D, vUv );
      gl_FragColor = mapTexelToLinear( texColor );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
  }`,
  Cd = `varying vec2 vUv;
  uniform mat3 uvTransform;
  void main() {
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
      gl_Position = vec4( position.xy, 1.0, 1.0 );
  }`,
  Rd = `#include <envmap_common_pars_fragment>
  uniform float opacity;
  varying vec3 vWorldDirection;
  #include <cube_uv_reflection_fragment>
  void main() {
      vec3 vReflect = vWorldDirection;
      #include <envmap_fragment>
      gl_FragColor = envColor;
      gl_FragColor.a *= opacity;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
  }`,
  Pd = `varying vec3 vWorldDirection;
  #include <common>
  void main() {
      vWorldDirection = transformDirection( position, modelMatrix );
      #include <begin_vertex>
      #include <project_vertex>
      gl_Position.z = gl_Position.w;
  }`,
  Dd = `#if DEPTH_PACKING == 3200
      uniform float opacity;
  #endif
  #include <common>
  #include <packing>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  varying vec2 vHighPrecisionZW;
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( 1.0 );
      #if DEPTH_PACKING == 3200
          diffuseColor.a = opacity;
      #endif
      #include <map_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <logdepthbuf_fragment>
      float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
      #if DEPTH_PACKING == 3200
          gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
      #elif DEPTH_PACKING == 3201
          gl_FragColor = packDepthToRGBA( fragCoordZ );
      #endif
  }`,
  Id = `#include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  varying vec2 vHighPrecisionZW;
  void main() {
      #include <uv_vertex>
      #include <skinbase_vertex>
      #ifdef USE_DISPLACEMENTMAP
          #include <beginnormal_vertex>
          #include <morphnormal_vertex>
          #include <skinnormal_vertex>
      #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      vHighPrecisionZW = gl_Position.zw;
  }`,
  Nd = `#define DISTANCE
  uniform vec3 referencePosition;
  uniform float nearDistance;
  uniform float farDistance;
  varying vec3 vWorldPosition;
  #include <common>
  #include <packing>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main () {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( 1.0 );
      #include <map_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      float dist = length( vWorldPosition - referencePosition );
      dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
      dist = saturate( dist );
      gl_FragColor = packDepthToRGBA( dist );
  }`,
  Fd = `#define DISTANCE
  varying vec3 vWorldPosition;
  #include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <skinbase_vertex>
      #ifdef USE_DISPLACEMENTMAP
          #include <beginnormal_vertex>
          #include <morphnormal_vertex>
          #include <skinnormal_vertex>
      #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <worldpos_vertex>
      #include <clipping_planes_vertex>
      vWorldPosition = worldPosition.xyz;
  }`,
  zd = `uniform sampler2D tEquirect;
  varying vec3 vWorldDirection;
  #include <common>
  void main() {
      vec3 direction = normalize( vWorldDirection );
      vec2 sampleUV = equirectUv( direction );
      vec4 texColor = texture2D( tEquirect, sampleUV );
      gl_FragColor = mapTexelToLinear( texColor );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
  }`,
  Bd = `varying vec3 vWorldDirection;
  #include <common>
  void main() {
      vWorldDirection = transformDirection( position, modelMatrix );
      #include <begin_vertex>
      #include <project_vertex>
  }`,
  kd = `uniform vec3 diffuse;
  uniform float opacity;
  uniform float dashSize;
  uniform float totalSize;
  varying float vLineDistance;
  #include <common>
  #include <color_pars_fragment>
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      if ( mod( vLineDistance, totalSize ) > dashSize ) {
          discard;
      }
      vec3 outgoingLight = vec3( 0.0 );
      vec4 diffuseColor = vec4( diffuse, opacity );
      #include <logdepthbuf_fragment>
      #include <color_fragment>
      outgoingLight = diffuseColor.rgb;
      gl_FragColor = vec4( outgoingLight, diffuseColor.a );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
  }`,
  Od = `uniform float scale;
  attribute float lineDistance;
  varying float vLineDistance;
  #include <common>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      vLineDistance = scale * lineDistance;
      #include <color_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <fog_vertex>
  }`,
  Hd = `uniform vec3 diffuse;
  uniform float opacity;
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
  #endif
  #include <common>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <uv2_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <envmap_common_pars_fragment>
  #include <envmap_pars_fragment>
  #include <cube_uv_reflection_fragment>
  #include <fog_pars_fragment>
  #include <specularmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <specularmap_fragment>
      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
      #ifdef USE_LIGHTMAP
      
          vec4 lightMapTexel= texture2D( lightMap, vUv2 );
          reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
      #else
          reflectedLight.indirectDiffuse += vec3( 1.0 );
      #endif
      #include <aomap_fragment>
      reflectedLight.indirectDiffuse *= diffuseColor.rgb;
      vec3 outgoingLight = reflectedLight.indirectDiffuse;
      #include <envmap_fragment>
      gl_FragColor = vec4( outgoingLight, diffuseColor.a );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
  Ud = `#include <common>
  #include <uv_pars_vertex>
  #include <uv2_pars_vertex>
  #include <envmap_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <uv2_vertex>
      #include <color_vertex>
      #include <skinbase_vertex>
      #ifdef USE_ENVMAP
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <worldpos_vertex>
      #include <clipping_planes_vertex>
      #include <envmap_vertex>
      #include <fog_vertex>
  }`,
  Gd = `uniform vec3 diffuse;
  uniform vec3 emissive;
  uniform float opacity;
  varying vec3 vLightFront;
  varying vec3 vIndirectFront;
  #ifdef DOUBLE_SIDED
      varying vec3 vLightBack;
      varying vec3 vIndirectBack;
  #endif
  #include <common>
  #include <packing>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <uv2_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <emissivemap_pars_fragment>
  #include <envmap_common_pars_fragment>
  #include <envmap_pars_fragment>
  #include <cube_uv_reflection_fragment>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <fog_pars_fragment>
  #include <shadowmap_pars_fragment>
  #include <shadowmask_pars_fragment>
  #include <specularmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
      vec3 totalEmissiveRadiance = emissive;
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <specularmap_fragment>
      #include <emissivemap_fragment>
      #ifdef DOUBLE_SIDED
          reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
      #else
          reflectedLight.indirectDiffuse += vIndirectFront;
      #endif
      #include <lightmap_fragment>
      reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
      #ifdef DOUBLE_SIDED
          reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
      #else
          reflectedLight.directDiffuse = vLightFront;
      #endif
      reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
      #include <aomap_fragment>
      vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
      #include <envmap_fragment>
      gl_FragColor = vec4( outgoingLight, diffuseColor.a );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
  Vd = `#define LAMBERT
  varying vec3 vLightFront;
  varying vec3 vIndirectFront;
  #ifdef DOUBLE_SIDED
      varying vec3 vLightBack;
      varying vec3 vIndirectBack;
  #endif
  #include <common>
  #include <uv_pars_vertex>
  #include <uv2_pars_vertex>
  #include <envmap_pars_vertex>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <shadowmap_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <uv2_vertex>
      #include <color_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <worldpos_vertex>
      #include <envmap_vertex>
      #include <lights_lambert_vertex>
      #include <shadowmap_vertex>
      #include <fog_vertex>
  }`,
  Wd = `#define MATCAP
  uniform vec3 diffuse;
  uniform float opacity;
  uniform sampler2D matcap;
  varying vec3 vViewPosition;
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
  #endif
  #include <common>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <fog_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      vec3 viewDir = normalize( vViewPosition );
      vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
      vec3 y = cross( viewDir, x );
      vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
      #ifdef USE_MATCAP
          vec4 matcapColor = texture2D( matcap, uv );
          matcapColor = matcapTexelToLinear( matcapColor );
      #else
          vec4 matcapColor = vec4( 1.0 );
      #endif
      vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
      gl_FragColor = vec4( outgoingLight, diffuseColor.a );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
  jd = `#define MATCAP
  varying vec3 vViewPosition;
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
  #endif
  #include <common>
  #include <uv_pars_vertex>
  #include <color_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <color_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #ifndef FLAT_SHADED
          vNormal = normalize( transformedNormal );
      #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <fog_vertex>
      vViewPosition = - mvPosition.xyz;
  }`,
  qd = `#define TOON
  uniform vec3 diffuse;
  uniform vec3 emissive;
  uniform float opacity;
  #include <common>
  #include <packing>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <uv2_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <emissivemap_pars_fragment>
  #include <gradientmap_pars_fragment>
  #include <fog_pars_fragment>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <lights_toon_pars_fragment>
  #include <shadowmap_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
      vec3 totalEmissiveRadiance = emissive;
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      #include <emissivemap_fragment>
      #include <lights_toon_fragment>
      #include <lights_fragment_begin>
      #include <lights_fragment_maps>
      #include <lights_fragment_end>
      #include <aomap_fragment>
      vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
      gl_FragColor = vec4( outgoingLight, diffuseColor.a );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
  Xd = `#define TOON
  varying vec3 vViewPosition;
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
  #endif
  #include <common>
  #include <uv_pars_vertex>
  #include <uv2_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <shadowmap_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <uv2_vertex>
      #include <color_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
  #ifndef FLAT_SHADED
      vNormal = normalize( transformedNormal );
  #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      vViewPosition = - mvPosition.xyz;
      #include <worldpos_vertex>
      #include <shadowmap_vertex>
      #include <fog_vertex>
  }`,
  Yd = `#define PHONG
  uniform vec3 diffuse;
  uniform vec3 emissive;
  uniform vec3 specular;
  uniform float shininess;
  uniform float opacity;
  #include <common>
  #include <packing>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <uv2_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <emissivemap_pars_fragment>
  #include <envmap_common_pars_fragment>
  #include <envmap_pars_fragment>
  #include <cube_uv_reflection_fragment>
  #include <fog_pars_fragment>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <lights_phong_pars_fragment>
  #include <shadowmap_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <specularmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
      vec3 totalEmissiveRadiance = emissive;
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <specularmap_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      #include <emissivemap_fragment>
      #include <lights_phong_fragment>
      #include <lights_fragment_begin>
      #include <lights_fragment_maps>
      #include <lights_fragment_end>
      #include <aomap_fragment>
      vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
      #include <envmap_fragment>
      gl_FragColor = vec4( outgoingLight, diffuseColor.a );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
  Zd = `#define PHONG
  varying vec3 vViewPosition;
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
  #endif
  #include <common>
  #include <uv_pars_vertex>
  #include <uv2_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <envmap_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <shadowmap_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <uv2_vertex>
      #include <color_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
  #ifndef FLAT_SHADED
      vNormal = normalize( transformedNormal );
  #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      vViewPosition = - mvPosition.xyz;
      #include <worldpos_vertex>
      #include <envmap_vertex>
      #include <shadowmap_vertex>
      #include <fog_vertex>
  }`,
  Jd = `#define STANDARD
  #ifdef PHYSICAL
      #define REFLECTIVITY
      #define CLEARCOAT
      #define TRANSMISSION
  #endif
  uniform vec3 diffuse;
  uniform vec3 emissive;
  uniform float roughness;
  uniform float metalness;
  uniform float opacity;
  #ifdef TRANSMISSION
      uniform float transmission;
  #endif
  #ifdef REFLECTIVITY
      uniform float reflectivity;
  #endif
  #ifdef CLEARCOAT
      uniform float clearcoat;
      uniform float clearcoatRoughness;
  #endif
  #ifdef USE_SHEEN
      uniform vec3 sheen;
  #endif
  varying vec3 vViewPosition;
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
      #ifdef USE_TANGENT
          varying vec3 vTangent;
          varying vec3 vBitangent;
      #endif
  #endif
  #include <common>
  #include <packing>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <uv2_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <emissivemap_pars_fragment>
  #include <transmissionmap_pars_fragment>
  #include <bsdfs>
  #include <cube_uv_reflection_fragment>
  #include <envmap_common_pars_fragment>
  #include <envmap_physical_pars_fragment>
  #include <fog_pars_fragment>
  #include <lights_pars_begin>
  #include <lights_physical_pars_fragment>
  #include <shadowmap_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <clearcoat_pars_fragment>
  #include <roughnessmap_pars_fragment>
  #include <metalnessmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
      vec3 totalEmissiveRadiance = emissive;
      #ifdef TRANSMISSION
          float totalTransmission = transmission;
      #endif
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <roughnessmap_fragment>
      #include <metalnessmap_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      #include <clearcoat_normal_fragment_begin>
      #include <clearcoat_normal_fragment_maps>
      #include <emissivemap_fragment>
      #include <transmissionmap_fragment>
      #include <lights_physical_fragment>
      #include <lights_fragment_begin>
      #include <lights_fragment_maps>
      #include <lights_fragment_end>
      #include <aomap_fragment>
      vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
      #ifdef TRANSMISSION
          diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
      #endif
      gl_FragColor = vec4( outgoingLight, diffuseColor.a );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
  Kd = `#define STANDARD
  varying vec3 vViewPosition;
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
      #ifdef USE_TANGENT
          varying vec3 vTangent;
          varying vec3 vBitangent;
      #endif
  #endif
  #include <common>
  #include <uv_pars_vertex>
  #include <uv2_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <shadowmap_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <uv2_vertex>
      #include <color_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
  #ifndef FLAT_SHADED
      vNormal = normalize( transformedNormal );
      #ifdef USE_TANGENT
          vTangent = normalize( transformedTangent );
          vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
      #endif
  #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      vViewPosition = - mvPosition.xyz;
      #include <worldpos_vertex>
      #include <shadowmap_vertex>
      #include <fog_vertex>
  }`,
  Qd = `#define NORMAL
  uniform float opacity;
  #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
      varying vec3 vViewPosition;
  #endif
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
      #ifdef USE_TANGENT
          varying vec3 vTangent;
          varying vec3 vBitangent;
      #endif
  #endif
  #include <packing>
  #include <uv_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      #include <logdepthbuf_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
  }`,
  $d = `#define NORMAL
  #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
      varying vec3 vViewPosition;
  #endif
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
      #ifdef USE_TANGENT
          varying vec3 vTangent;
          varying vec3 vBitangent;
      #endif
  #endif
  #include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
  #ifndef FLAT_SHADED
      vNormal = normalize( transformedNormal );
      #ifdef USE_TANGENT
          vTangent = normalize( transformedTangent );
          vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
      #endif
  #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
  #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
      vViewPosition = - mvPosition.xyz;
  #endif
  }`,
  ef = `uniform vec3 diffuse;
  uniform float opacity;
  #include <common>
  #include <color_pars_fragment>
  #include <map_particle_pars_fragment>
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec3 outgoingLight = vec3( 0.0 );
      vec4 diffuseColor = vec4( diffuse, opacity );
      #include <logdepthbuf_fragment>
      #include <map_particle_fragment>
      #include <color_fragment>
      #include <alphatest_fragment>
      outgoingLight = diffuseColor.rgb;
      gl_FragColor = vec4( outgoingLight, diffuseColor.a );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
  }`,
  tf = `uniform float size;
  uniform float scale;
  #include <common>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <color_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <project_vertex>
      gl_PointSize = size;
      #ifdef USE_SIZEATTENUATION
          bool isPerspective = isPerspectiveMatrix( projectionMatrix );
          if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
      #endif
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <worldpos_vertex>
      #include <fog_vertex>
  }`,
  nf = `uniform vec3 color;
  uniform float opacity;
  #include <common>
  #include <packing>
  #include <fog_pars_fragment>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <shadowmap_pars_fragment>
  #include <shadowmask_pars_fragment>
  void main() {
      gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
  }`,
  rf = `#include <common>
  #include <fog_pars_vertex>
  #include <shadowmap_pars_vertex>
  void main() {
      #include <begin_vertex>
      #include <project_vertex>
      #include <worldpos_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #include <shadowmap_vertex>
      #include <fog_vertex>
  }`,
  sf = `uniform vec3 diffuse;
  uniform float opacity;
  #include <common>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec3 outgoingLight = vec3( 0.0 );
      vec4 diffuseColor = vec4( diffuse, opacity );
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      outgoingLight = diffuseColor.rgb;
      gl_FragColor = vec4( outgoingLight, diffuseColor.a );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
  }`,
  af = `uniform float rotation;
  uniform vec2 center;
  #include <common>
  #include <uv_pars_vertex>
  #include <fog_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
      vec2 scale;
      scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
      scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
      #ifndef USE_SIZEATTENUATION
          bool isPerspective = isPerspectiveMatrix( projectionMatrix );
          if ( isPerspective ) scale *= - mvPosition.z;
      #endif
      vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
      vec2 rotatedPosition;
      rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
      rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
      mvPosition.xy += rotatedPosition;
      gl_Position = projectionMatrix * mvPosition;
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <fog_vertex>
  }`;
const Me = {
    alphamap_fragment: Oh,
    alphamap_pars_fragment: Hh,
    alphatest_fragment: Uh,
    aomap_fragment: Gh,
    aomap_pars_fragment: Vh,
    begin_vertex: Wh,
    beginnormal_vertex: jh,
    bsdfs: qh,
    bumpmap_pars_fragment: Xh,
    clipping_planes_fragment: Yh,
    clipping_planes_pars_fragment: Zh,
    clipping_planes_pars_vertex: Jh,
    clipping_planes_vertex: Kh,
    color_fragment: Qh,
    color_pars_fragment: $h,
    color_pars_vertex: eu,
    color_vertex: tu,
    common: nu,
    cube_uv_reflection_fragment: iu,
    defaultnormal_vertex: ru,
    displacementmap_pars_vertex: su,
    displacementmap_vertex: au,
    emissivemap_fragment: ou,
    emissivemap_pars_fragment: lu,
    encodings_fragment: cu,
    encodings_pars_fragment: hu,
    envmap_fragment: uu,
    envmap_common_pars_fragment: du,
    envmap_pars_fragment: fu,
    envmap_pars_vertex: pu,
    envmap_physical_pars_fragment: Tu,
    envmap_vertex: mu,
    fog_vertex: gu,
    fog_pars_vertex: yu,
    fog_fragment: vu,
    fog_pars_fragment: xu,
    gradientmap_pars_fragment: _u,
    lightmap_fragment: wu,
    lightmap_pars_fragment: bu,
    lights_lambert_vertex: Mu,
    lights_pars_begin: Su,
    lights_toon_fragment: Eu,
    lights_toon_pars_fragment: Au,
    lights_phong_fragment: Lu,
    lights_phong_pars_fragment: Cu,
    lights_physical_fragment: Ru,
    lights_physical_pars_fragment: Pu,
    lights_fragment_begin: Du,
    lights_fragment_maps: Iu,
    lights_fragment_end: Nu,
    logdepthbuf_fragment: Fu,
    logdepthbuf_pars_fragment: zu,
    logdepthbuf_pars_vertex: Bu,
    logdepthbuf_vertex: ku,
    map_fragment: Ou,
    map_pars_fragment: Hu,
    map_particle_fragment: Uu,
    map_particle_pars_fragment: Gu,
    metalnessmap_fragment: Vu,
    metalnessmap_pars_fragment: Wu,
    morphnormal_vertex: ju,
    morphtarget_pars_vertex: qu,
    morphtarget_vertex: Xu,
    normal_fragment_begin: Yu,
    normal_fragment_maps: Zu,
    normalmap_pars_fragment: Ju,
    clearcoat_normal_fragment_begin: Ku,
    clearcoat_normal_fragment_maps: Qu,
    clearcoat_pars_fragment: $u,
    packing: ed,
    premultiplied_alpha_fragment: td,
    project_vertex: nd,
    dithering_fragment: id,
    dithering_pars_fragment: rd,
    roughnessmap_fragment: sd,
    roughnessmap_pars_fragment: ad,
    shadowmap_pars_fragment: od,
    shadowmap_pars_vertex: ld,
    shadowmap_vertex: cd,
    shadowmask_pars_fragment: hd,
    skinbase_vertex: ud,
    skinning_pars_vertex: dd,
    skinning_vertex: fd,
    skinnormal_vertex: pd,
    specularmap_fragment: md,
    specularmap_pars_fragment: gd,
    tonemapping_fragment: yd,
    tonemapping_pars_fragment: vd,
    transmissionmap_fragment: xd,
    transmissionmap_pars_fragment: _d,
    uv_pars_fragment: wd,
    uv_pars_vertex: bd,
    uv_vertex: Md,
    uv2_pars_fragment: Sd,
    uv2_pars_vertex: Td,
    uv2_vertex: Ed,
    worldpos_vertex: Ad,
    background_frag: Ld,
    background_vert: Cd,
    cube_frag: Rd,
    cube_vert: Pd,
    depth_frag: Dd,
    depth_vert: Id,
    distanceRGBA_frag: Nd,
    distanceRGBA_vert: Fd,
    equirect_frag: zd,
    equirect_vert: Bd,
    linedashed_frag: kd,
    linedashed_vert: Od,
    meshbasic_frag: Hd,
    meshbasic_vert: Ud,
    meshlambert_frag: Gd,
    meshlambert_vert: Vd,
    meshmatcap_frag: Wd,
    meshmatcap_vert: jd,
    meshtoon_frag: qd,
    meshtoon_vert: Xd,
    meshphong_frag: Yd,
    meshphong_vert: Zd,
    meshphysical_frag: Jd,
    meshphysical_vert: Kd,
    normal_frag: Qd,
    normal_vert: $d,
    points_frag: ef,
    points_vert: tf,
    shadow_frag: nf,
    shadow_vert: rf,
    sprite_frag: sf,
    sprite_vert: af,
  },
  te = {
    common: {
      diffuse: {
        value: new he(15658734),
      },
      opacity: {
        value: 1,
      },
      map: {
        value: null,
      },
      uvTransform: {
        value: new et(),
      },
      uv2Transform: {
        value: new et(),
      },
      alphaMap: {
        value: null,
      },
    },
    specularmap: {
      specularMap: {
        value: null,
      },
    },
    envmap: {
      envMap: {
        value: null,
      },
      flipEnvMap: {
        value: -1,
      },
      reflectivity: {
        value: 1,
      },
      refractionRatio: {
        value: 0.98,
      },
      maxMipLevel: {
        value: 0,
      },
    },
    aomap: {
      aoMap: {
        value: null,
      },
      aoMapIntensity: {
        value: 1,
      },
    },
    lightmap: {
      lightMap: {
        value: null,
      },
      lightMapIntensity: {
        value: 1,
      },
    },
    emissivemap: {
      emissiveMap: {
        value: null,
      },
    },
    bumpmap: {
      bumpMap: {
        value: null,
      },
      bumpScale: {
        value: 1,
      },
    },
    normalmap: {
      normalMap: {
        value: null,
      },
      normalScale: {
        value: new Z(1, 1),
      },
    },
    displacementmap: {
      displacementMap: {
        value: null,
      },
      displacementScale: {
        value: 1,
      },
      displacementBias: {
        value: 0,
      },
    },
    roughnessmap: {
      roughnessMap: {
        value: null,
      },
    },
    metalnessmap: {
      metalnessMap: {
        value: null,
      },
    },
    gradientmap: {
      gradientMap: {
        value: null,
      },
    },
    fog: {
      fogDensity: {
        value: 25e-5,
      },
      fogNear: {
        value: 1,
      },
      fogFar: {
        value: 2e3,
      },
      fogColor: {
        value: new he(16777215),
      },
    },
    lights: {
      ambientLightColor: {
        value: [],
      },
      lightProbe: {
        value: [],
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {},
        },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: {
        value: [],
      },
      directionalShadowMatrix: {
        value: [],
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotShadowMap: {
        value: [],
      },
      spotShadowMatrix: {
        value: [],
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {},
        },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: {
        value: [],
      },
      pointShadowMatrix: {
        value: [],
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {},
        },
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {},
        },
      },
      ltc_1: {
        value: null,
      },
      ltc_2: {
        value: null,
      },
    },
    points: {
      diffuse: {
        value: new he(15658734),
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 1,
      },
      scale: {
        value: 1,
      },
      map: {
        value: null,
      },
      alphaMap: {
        value: null,
      },
      uvTransform: {
        value: new et(),
      },
    },
    sprite: {
      diffuse: {
        value: new he(15658734),
      },
      opacity: {
        value: 1,
      },
      center: {
        value: new Z(0.5, 0.5),
      },
      rotation: {
        value: 0,
      },
      map: {
        value: null,
      },
      alphaMap: {
        value: null,
      },
      uvTransform: {
        value: new et(),
      },
    },
  },
  Dt = {
    basic: {
      uniforms: it([
        te.common,
        te.specularmap,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.fog,
      ]),
      vertexShader: Me.meshbasic_vert,
      fragmentShader: Me.meshbasic_frag,
    },
    lambert: {
      uniforms: it([
        te.common,
        te.specularmap,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.fog,
        te.lights,
        {
          emissive: {
            value: new he(0),
          },
        },
      ]),
      vertexShader: Me.meshlambert_vert,
      fragmentShader: Me.meshlambert_frag,
    },
    phong: {
      uniforms: it([
        te.common,
        te.specularmap,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.fog,
        te.lights,
        {
          emissive: {
            value: new he(0),
          },
          specular: {
            value: new he(1118481),
          },
          shininess: {
            value: 30,
          },
        },
      ]),
      vertexShader: Me.meshphong_vert,
      fragmentShader: Me.meshphong_frag,
    },
    standard: {
      uniforms: it([
        te.common,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.roughnessmap,
        te.metalnessmap,
        te.fog,
        te.lights,
        {
          emissive: {
            value: new he(0),
          },
          roughness: {
            value: 1,
          },
          metalness: {
            value: 0,
          },
          envMapIntensity: {
            value: 1,
          },
        },
      ]),
      vertexShader: Me.meshphysical_vert,
      fragmentShader: Me.meshphysical_frag,
    },
    toon: {
      uniforms: it([
        te.common,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.gradientmap,
        te.fog,
        te.lights,
        {
          emissive: {
            value: new he(0),
          },
        },
      ]),
      vertexShader: Me.meshtoon_vert,
      fragmentShader: Me.meshtoon_frag,
    },
    matcap: {
      uniforms: it([
        te.common,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.fog,
        {
          matcap: {
            value: null,
          },
        },
      ]),
      vertexShader: Me.meshmatcap_vert,
      fragmentShader: Me.meshmatcap_frag,
    },
    points: {
      uniforms: it([te.points, te.fog]),
      vertexShader: Me.points_vert,
      fragmentShader: Me.points_frag,
    },
    dashed: {
      uniforms: it([
        te.common,
        te.fog,
        {
          scale: {
            value: 1,
          },
          dashSize: {
            value: 1,
          },
          totalSize: {
            value: 2,
          },
        },
      ]),
      vertexShader: Me.linedashed_vert,
      fragmentShader: Me.linedashed_frag,
    },
    depth: {
      uniforms: it([te.common, te.displacementmap]),
      vertexShader: Me.depth_vert,
      fragmentShader: Me.depth_frag,
    },
    normal: {
      uniforms: it([
        te.common,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        {
          opacity: {
            value: 1,
          },
        },
      ]),
      vertexShader: Me.normal_vert,
      fragmentShader: Me.normal_frag,
    },
    sprite: {
      uniforms: it([te.sprite, te.fog]),
      vertexShader: Me.sprite_vert,
      fragmentShader: Me.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new et(),
        },
        t2D: {
          value: null,
        },
      },
      vertexShader: Me.background_vert,
      fragmentShader: Me.background_frag,
    },
    cube: {
      uniforms: it([
        te.envmap,
        {
          opacity: {
            value: 1,
          },
        },
      ]),
      vertexShader: Me.cube_vert,
      fragmentShader: Me.cube_frag,
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null,
        },
      },
      vertexShader: Me.equirect_vert,
      fragmentShader: Me.equirect_frag,
    },
    distanceRGBA: {
      uniforms: it([
        te.common,
        te.displacementmap,
        {
          referencePosition: {
            value: new b(),
          },
          nearDistance: {
            value: 1,
          },
          farDistance: {
            value: 1e3,
          },
        },
      ]),
      vertexShader: Me.distanceRGBA_vert,
      fragmentShader: Me.distanceRGBA_frag,
    },
    shadow: {
      uniforms: it([
        te.lights,
        te.fog,
        {
          color: {
            value: new he(0),
          },
          opacity: {
            value: 1,
          },
        },
      ]),
      vertexShader: Me.shadow_vert,
      fragmentShader: Me.shadow_frag,
    },
  };
Dt.physical = {
  uniforms: it([
    Dt.standard.uniforms,
    {
      clearcoat: {
        value: 0,
      },
      clearcoatMap: {
        value: null,
      },
      clearcoatRoughness: {
        value: 0,
      },
      clearcoatRoughnessMap: {
        value: null,
      },
      clearcoatNormalScale: {
        value: new Z(1, 1),
      },
      clearcoatNormalMap: {
        value: null,
      },
      sheen: {
        value: new he(0),
      },
      transmission: {
        value: 0,
      },
      transmissionMap: {
        value: null,
      },
    },
  ]),
  vertexShader: Me.meshphysical_vert,
  fragmentShader: Me.meshphysical_frag,
};

function of(r, e, t, n, i) {
  const s = new he(0);
  let a = 0,
    o,
    l,
    c = null,
    h = 0,
    d = null;

  function u(m, y, v, g) {
    let p = y.isScene === !0 ? y.background : null;
    p && p.isTexture && (p = e.get(p));
    const E = r.xr,
      L = E.getSession && E.getSession();
    L && L.environmentBlendMode === "additive" && (p = null),
      p === null ? f(s, a) : p && p.isColor && (f(p, 1), (g = !0)),
      (r.autoClear || g) &&
        r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
      p && (p.isCubeTexture || p.mapping === bs)
        ? (l === void 0 &&
            ((l = new gt(
              new Rs(1, 1, 1),
              new mn({
                name: "BackgroundCubeMaterial",
                uniforms: Vn(Dt.cube.uniforms),
                vertexShader: Dt.cube.vertexShader,
                fragmentShader: Dt.cube.fragmentShader,
                side: Ze,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            l.geometry.deleteAttribute("uv"),
            (l.onBeforeRender = function (A, x, N) {
              this.matrixWorld.copyPosition(N.matrixWorld);
            }),
            Object.defineProperty(l.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            n.update(l)),
          (l.material.uniforms.envMap.value = p),
          (l.material.uniforms.flipEnvMap.value =
            p.isCubeTexture && p._needsFlipEnvMap ? -1 : 1),
          (c !== p || h !== p.version || d !== r.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (c = p),
            (h = p.version),
            (d = r.toneMapping)),
          m.unshift(l, l.geometry, l.material, 0, 0, null))
        : p &&
          p.isTexture &&
          (o === void 0 &&
            ((o = new gt(
              new kh(2, 2),
              new mn({
                name: "BackgroundMaterial",
                uniforms: Vn(Dt.background.uniforms),
                vertexShader: Dt.background.vertexShader,
                fragmentShader: Dt.background.fragmentShader,
                side: pr,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            o.geometry.deleteAttribute("normal"),
            Object.defineProperty(o.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            n.update(o)),
          (o.material.uniforms.t2D.value = p),
          p.matrixAutoUpdate === !0 && p.updateMatrix(),
          o.material.uniforms.uvTransform.value.copy(p.matrix),
          (c !== p || h !== p.version || d !== r.toneMapping) &&
            ((o.material.needsUpdate = !0),
            (c = p),
            (h = p.version),
            (d = r.toneMapping)),
          m.unshift(o, o.geometry, o.material, 0, 0, null));
  }

  function f(m, y) {
    t.buffers.color.setClear(m.r, m.g, m.b, y, i);
  }
  return {
    getClearColor: function () {
      return s;
    },
    setClearColor: function (m, y = 1) {
      s.set(m), (a = y), f(s, a);
    },
    getClearAlpha: function () {
      return a;
    },
    setClearAlpha: function (m) {
      (a = m), f(s, a);
    },
    render: u,
  };
}

function lf(r, e, t, n) {
  const i = r.getParameter(34921),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    a = n.isWebGL2 || s !== null,
    o = {},
    l = y(null);
  let c = l;

  function h(C, P, D, R, X) {
    let $ = !1;
    if (a) {
      const K = m(R, D, P);
      c !== K && ((c = K), u(c.object)), ($ = v(R, X)), $ && g(R, X);
    } else {
      const K = P.wireframe === !0;
      (c.geometry !== R.id || c.program !== D.id || c.wireframe !== K) &&
        ((c.geometry = R.id), (c.program = D.id), (c.wireframe = K), ($ = !0));
    }
    C.isInstancedMesh === !0 && ($ = !0),
      X !== null && t.update(X, 34963),
      $ && (N(C, P, D, R), X !== null && r.bindBuffer(34963, t.get(X).buffer));
  }

  function d() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }

  function u(C) {
    return n.isWebGL2 ? r.bindVertexArray(C) : s.bindVertexArrayOES(C);
  }

  function f(C) {
    return n.isWebGL2 ? r.deleteVertexArray(C) : s.deleteVertexArrayOES(C);
  }

  function m(C, P, D) {
    const R = D.wireframe === !0;
    let X = o[C.id];
    X === void 0 && ((X = {}), (o[C.id] = X));
    let $ = X[P.id];
    $ === void 0 && (($ = {}), (X[P.id] = $));
    let K = $[R];
    return K === void 0 && ((K = y(d())), ($[R] = K)), K;
  }

  function y(C) {
    const P = [],
      D = [],
      R = [];
    for (let X = 0; X < i; X++) (P[X] = 0), (D[X] = 0), (R[X] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: D,
      attributeDivisors: R,
      object: C,
      attributes: {},
      index: null,
    };
  }

  function v(C, P) {
    const D = c.attributes,
      R = C.attributes;
    let X = 0;
    for (const $ in R) {
      const K = D[$],
        ae = R[$];
      if (K === void 0 || K.attribute !== ae || K.data !== ae.data) return !0;
      X++;
    }
    return c.attributesNum !== X || c.index !== P;
  }

  function g(C, P) {
    const D = {},
      R = C.attributes;
    let X = 0;
    for (const $ in R) {
      const K = R[$],
        ae = {};
      (ae.attribute = K), K.data && (ae.data = K.data), (D[$] = ae), X++;
    }
    (c.attributes = D), (c.attributesNum = X), (c.index = P);
  }

  function p() {
    const C = c.newAttributes;
    for (let P = 0, D = C.length; P < D; P++) C[P] = 0;
  }

  function E(C) {
    L(C, 0);
  }

  function L(C, P) {
    const D = c.newAttributes,
      R = c.enabledAttributes,
      X = c.attributeDivisors;
    (D[C] = 1),
      R[C] === 0 && (r.enableVertexAttribArray(C), (R[C] = 1)),
      X[C] !== P &&
        ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](C, P),
        (X[C] = P));
  }

  function A() {
    const C = c.newAttributes,
      P = c.enabledAttributes;
    for (let D = 0, R = P.length; D < R; D++)
      P[D] !== C[D] && (r.disableVertexAttribArray(D), (P[D] = 0));
  }

  function x(C, P, D, R, X, $) {
    n.isWebGL2 === !0 && (D === 5124 || D === 5125)
      ? r.vertexAttribIPointer(C, P, D, X, $)
      : r.vertexAttribPointer(C, P, D, R, X, $);
  }

  function N(C, P, D, R) {
    if (
      n.isWebGL2 === !1 &&
      (C.isInstancedMesh || R.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    p();
    const X = R.attributes,
      $ = D.getAttributes(),
      K = P.defaultAttributeValues;
    for (const ae in $) {
      const se = $[ae];
      if (se >= 0) {
        const ue = X[ae];
        if (ue !== void 0) {
          const me = ue.normalized,
            H = ue.itemSize,
            De = t.get(ue);
          if (De === void 0) continue;
          const Se = De.buffer,
            ge = De.type,
            de = De.bytesPerElement;
          if (ue.isInterleavedBufferAttribute) {
            const Te = ue.data,
              we = Te.stride,
              be = ue.offset;
            Te && Te.isInstancedInterleavedBuffer
              ? (L(se, Te.meshPerAttribute),
                R._maxInstanceCount === void 0 &&
                  (R._maxInstanceCount = Te.meshPerAttribute * Te.count))
              : E(se),
              r.bindBuffer(34962, Se),
              x(se, H, ge, me, we * de, be * de);
          } else
            ue.isInstancedBufferAttribute
              ? (L(se, ue.meshPerAttribute),
                R._maxInstanceCount === void 0 &&
                  (R._maxInstanceCount = ue.meshPerAttribute * ue.count))
              : E(se),
              r.bindBuffer(34962, Se),
              x(se, H, ge, me, 0, 0);
        } else if (ae === "instanceMatrix") {
          const me = t.get(C.instanceMatrix);
          if (me === void 0) continue;
          const H = me.buffer,
            De = me.type;
          L(se + 0, 1),
            L(se + 1, 1),
            L(se + 2, 1),
            L(se + 3, 1),
            r.bindBuffer(34962, H),
            r.vertexAttribPointer(se + 0, 4, De, !1, 64, 0),
            r.vertexAttribPointer(se + 1, 4, De, !1, 64, 16),
            r.vertexAttribPointer(se + 2, 4, De, !1, 64, 32),
            r.vertexAttribPointer(se + 3, 4, De, !1, 64, 48);
        } else if (ae === "instanceColor") {
          const me = t.get(C.instanceColor);
          if (me === void 0) continue;
          const H = me.buffer,
            De = me.type;
          L(se, 1),
            r.bindBuffer(34962, H),
            r.vertexAttribPointer(se, 3, De, !1, 12, 0);
        } else if (K !== void 0) {
          const me = K[ae];
          if (me !== void 0)
            switch (me.length) {
              case 2:
                r.vertexAttrib2fv(se, me);
                break;
              case 3:
                r.vertexAttrib3fv(se, me);
                break;
              case 4:
                r.vertexAttrib4fv(se, me);
                break;
              default:
                r.vertexAttrib1fv(se, me);
            }
        }
      }
    }
    A();
  }

  function z() {
    q();
    for (const C in o) {
      const P = o[C];
      for (const D in P) {
        const R = P[D];
        for (const X in R) f(R[X].object), delete R[X];
        delete P[D];
      }
      delete o[C];
    }
  }

  function B(C) {
    if (o[C.id] === void 0) return;
    const P = o[C.id];
    for (const D in P) {
      const R = P[D];
      for (const X in R) f(R[X].object), delete R[X];
      delete P[D];
    }
    delete o[C.id];
  }

  function G(C) {
    for (const P in o) {
      const D = o[P];
      if (D[C.id] === void 0) continue;
      const R = D[C.id];
      for (const X in R) f(R[X].object), delete R[X];
      delete D[C.id];
    }
  }

  function q() {
    O(), c !== l && ((c = l), u(c.object));
  }

  function O() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: h,
    reset: q,
    resetDefaultState: O,
    dispose: z,
    releaseStatesOfGeometry: B,
    releaseStatesOfProgram: G,
    initAttributes: p,
    enableAttribute: E,
    disableUnusedAttributes: A,
  };
}

function cf(r, e, t, n) {
  const i = n.isWebGL2;
  let s;

  function a(c) {
    s = c;
  }

  function o(c, h) {
    r.drawArrays(s, c, h), t.update(h, s, 1);
  }

  function l(c, h, d) {
    if (d === 0) return;
    let u, f;
    if (i) (u = r), (f = "drawArraysInstanced");
    else if (
      ((u = e.get("ANGLE_instanced_arrays")),
      (f = "drawArraysInstancedANGLE"),
      u === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    u[f](s, c, h, d), t.update(h, s, d);
  }
  (this.setMode = a), (this.render = o), (this.renderInstances = l);
}

function hf(r, e, t) {
  let n;

  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const x = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }

  function s(x) {
    if (x === "highp") {
      if (
        r.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        r.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      x = "mediump";
    }
    return x === "mediump" &&
      r.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      r.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const a =
    (typeof WebGL2RenderingContext < "u" &&
      r instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext < "u" &&
      r instanceof WebGL2ComputeRenderingContext);
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = s(o);
  l !== o &&
    (console.warn(
      "THREE.WebGLRenderer:",
      o,
      "not supported, using",
      l,
      "instead."
    ),
    (o = l));
  const c = t.logarithmicDepthBuffer === !0,
    h = r.getParameter(34930),
    d = r.getParameter(35660),
    u = r.getParameter(3379),
    f = r.getParameter(34076),
    m = r.getParameter(34921),
    y = r.getParameter(36347),
    v = r.getParameter(36348),
    g = r.getParameter(36349),
    p = d > 0,
    E = a || e.has("OES_texture_float"),
    L = p && E,
    A = a ? r.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: c,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: u,
    maxCubemapSize: f,
    maxAttributes: m,
    maxVertexUniforms: y,
    maxVaryings: v,
    maxFragmentUniforms: g,
    vertexTextures: p,
    floatFragmentTextures: E,
    floatVertexTextures: L,
    maxSamples: A,
  };
}

function uf(r) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    s = !1;
  const a = new Pt(),
    o = new et(),
    l = {
      value: null,
      needsUpdate: !1,
    };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, u, f) {
      const m = d.length !== 0 || u || n !== 0 || i;
      return (i = u), (t = h(d, f, 0)), (n = d.length), m;
    }),
    (this.beginShadows = function () {
      (s = !0), h(null);
    }),
    (this.endShadows = function () {
      (s = !1), c();
    }),
    (this.setState = function (d, u, f) {
      const m = d.clippingPlanes,
        y = d.clipIntersection,
        v = d.clipShadows,
        g = r.get(d);
      if (!i || m === null || m.length === 0 || (s && !v)) s ? h(null) : c();
      else {
        const p = s ? 0 : n,
          E = p * 4;
        let L = g.clippingState || null;
        (l.value = L), (L = h(m, u, E, f));
        for (let A = 0; A !== E; ++A) L[A] = t[A];
        (g.clippingState = L),
          (this.numIntersection = y ? this.numPlanes : 0),
          (this.numPlanes += p);
      }
    });

  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }

  function h(d, u, f, m) {
    const y = d !== null ? d.length : 0;
    let v = null;
    if (y !== 0) {
      if (((v = l.value), m !== !0 || v === null)) {
        const g = f + y * 4,
          p = u.matrixWorldInverse;
        o.getNormalMatrix(p),
          (v === null || v.length < g) && (v = new Float32Array(g));
        for (let E = 0, L = f; E !== y; ++E, L += 4)
          a.copy(d[E]).applyMatrix4(p, o),
            a.normal.toArray(v, L),
            (v[L + 3] = a.constant);
      }
      (l.value = v), (l.needsUpdate = !0);
    }
    return (e.numPlanes = y), (e.numIntersection = 0), v;
  }
}

function df(r) {
  let e = new WeakMap();

  function t(a, o) {
    return o === sa ? (a.mapping = _s) : o === aa && (a.mapping = ws), a;
  }

  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === sa || o === aa)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = r.getRenderTarget(),
              h = new zo(l.height / 2);
            return (
              h.fromEquirectangularTexture(r, a),
              e.set(a, h),
              r.setRenderTarget(c),
              a.addEventListener("dispose", i),
              t(h.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }

  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }

  function s() {
    e = new WeakMap();
  }
  return {
    get: n,
    dispose: s,
  };
}

function ff(r) {
  const e = {};

  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          r.getExtension("WEBGL_depth_texture") ||
          r.getExtension("MOZ_WEBGL_depth_texture") ||
          r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          r.getExtension("EXT_texture_filter_anisotropic") ||
          r.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          r.getExtension("WEBGL_compressed_texture_s3tc") ||
          r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          r.getExtension("WEBGL_compressed_texture_pvrtc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}

function pf(r, e, t, n) {
  const i = {},
    s = new WeakMap();

  function a(d) {
    const u = d.target;
    u.index !== null && e.remove(u.index);
    for (const m in u.attributes) e.remove(u.attributes[m]);
    u.removeEventListener("dispose", a), delete i[u.id];
    const f = s.get(u);
    f && (e.remove(f), s.delete(u)),
      n.releaseStatesOfGeometry(u),
      u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount,
      t.memory.geometries--;
  }

  function o(d, u) {
    return (
      i[u.id] === !0 ||
        (u.addEventListener("dispose", a),
        (i[u.id] = !0),
        t.memory.geometries++),
      u
    );
  }

  function l(d) {
    const u = d.attributes;
    for (const m in u) e.update(u[m], 34962);
    const f = d.morphAttributes;
    for (const m in f) {
      const y = f[m];
      for (let v = 0, g = y.length; v < g; v++) e.update(y[v], 34962);
    }
  }

  function c(d) {
    const u = [],
      f = d.index,
      m = d.attributes.position;
    let y = 0;
    if (f !== null) {
      const p = f.array;
      y = f.version;
      for (let E = 0, L = p.length; E < L; E += 3) {
        const A = p[E + 0],
          x = p[E + 1],
          N = p[E + 2];
        u.push(A, x, x, N, N, A);
      }
    } else {
      const p = m.array;
      y = m.version;
      for (let E = 0, L = p.length / 3 - 1; E < L; E += 3) {
        const A = E + 0,
          x = E + 1,
          N = E + 2;
        u.push(A, x, x, N, N, A);
      }
    }
    const v = new (Fo(u) > 65535 ? No : Io)(u, 1);
    v.version = y;
    const g = s.get(d);
    g && e.remove(g), s.set(d, v);
  }

  function h(d) {
    const u = s.get(d);
    if (u) {
      const f = d.index;
      f !== null && u.version < f.version && c(d);
    } else c(d);
    return s.get(d);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h,
  };
}

function mf(r, e, t, n) {
  const i = n.isWebGL2;
  let s;

  function a(u) {
    s = u;
  }
  let o, l;

  function c(u) {
    (o = u.type), (l = u.bytesPerElement);
  }

  function h(u, f) {
    r.drawElements(s, f, o, u * l), t.update(f, s, 1);
  }

  function d(u, f, m) {
    if (m === 0) return;
    let y, v;
    if (i) (y = r), (v = "drawElementsInstanced");
    else if (
      ((y = e.get("ANGLE_instanced_arrays")),
      (v = "drawElementsInstancedANGLE"),
      y === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    y[v](s, f, o, u * l, m), t.update(f, s, m);
  }
  (this.setMode = a),
    (this.setIndex = c),
    (this.render = h),
    (this.renderInstances = d);
}

function gf(r) {
  const e = {
      geometries: 0,
      textures: 0,
    },
    t = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0,
    };

  function n(s, a, o) {
    switch ((t.calls++, a)) {
      case 4:
        t.triangles += o * (s / 3);
        break;
      case 1:
        t.lines += o * (s / 2);
        break;
      case 3:
        t.lines += o * (s - 1);
        break;
      case 2:
        t.lines += o * s;
        break;
      case 0:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }

  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}

function yf(r, e) {
  return r[0] - e[0];
}

function vf(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}

function xf(r) {
  const e = {},
    t = new Float32Array(8),
    n = [];
  for (let s = 0; s < 8; s++) n[s] = [s, 0];

  function i(s, a, o, l) {
    const c = s.morphTargetInfluences,
      h = c === void 0 ? 0 : c.length;
    let d = e[a.id];
    if (d === void 0) {
      d = [];
      for (let v = 0; v < h; v++) d[v] = [v, 0];
      e[a.id] = d;
    }
    for (let v = 0; v < h; v++) {
      const g = d[v];
      (g[0] = v), (g[1] = c[v]);
    }
    d.sort(vf);
    for (let v = 0; v < 8; v++)
      v < h && d[v][1]
        ? ((n[v][0] = d[v][0]), (n[v][1] = d[v][1]))
        : ((n[v][0] = Number.MAX_SAFE_INTEGER), (n[v][1] = 0));
    n.sort(yf);
    const u = o.morphTargets && a.morphAttributes.position,
      f = o.morphNormals && a.morphAttributes.normal;
    let m = 0;
    for (let v = 0; v < 8; v++) {
      const g = n[v],
        p = g[0],
        E = g[1];
      p !== Number.MAX_SAFE_INTEGER && E
        ? (u &&
            a.getAttribute("morphTarget" + v) !== u[p] &&
            a.setAttribute("morphTarget" + v, u[p]),
          f &&
            a.getAttribute("morphNormal" + v) !== f[p] &&
            a.setAttribute("morphNormal" + v, f[p]),
          (t[v] = E),
          (m += E))
        : (u &&
            a.hasAttribute("morphTarget" + v) === !0 &&
            a.deleteAttribute("morphTarget" + v),
          f &&
            a.hasAttribute("morphNormal" + v) === !0 &&
            a.deleteAttribute("morphNormal" + v),
          (t[v] = 0));
    }
    const y = a.morphTargetsRelative ? 1 : 1 - m;
    l.getUniforms().setValue(r, "morphTargetBaseInfluence", y),
      l.getUniforms().setValue(r, "morphTargetInfluences", t);
  }
  return {
    update: i,
  };
}

function _f(r, e, t, n) {
  let i = new WeakMap();

  function s(l) {
    const c = n.render.frame,
      h = l.geometry,
      d = e.get(l, h);
    return (
      i.get(d) !== c && (e.update(d), i.set(d, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", o) === !1 &&
          l.addEventListener("dispose", o),
        t.update(l.instanceMatrix, 34962),
        l.instanceColor !== null && t.update(l.instanceColor, 34962)),
      d
    );
  }

  function a() {
    i = new WeakMap();
  }

  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a,
  };
}
class Oo extends nt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.image = {
        data: e,
        width: t,
        height: n,
        depth: i,
      }),
      (this.magFilter = ot),
      (this.minFilter = ot),
      (this.wrapR = Et),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.needsUpdate = !0);
  }
}
Oo.prototype.isDataTexture2DArray = !0;
class Ho extends nt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.image = {
        data: e,
        width: t,
        height: n,
        depth: i,
      }),
      (this.magFilter = ot),
      (this.minFilter = ot),
      (this.wrapR = Et),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.needsUpdate = !0);
  }
}
Ho.prototype.isDataTexture3D = !0;
const Uo = new nt(),
  wf = new Oo(),
  bf = new Ho(),
  Go = new yr(),
  Da = [],
  Ia = [],
  Na = new Float32Array(16),
  Fa = new Float32Array(9),
  za = new Float32Array(4);

function Zn(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = Da[i];
  if ((s === void 0 && ((s = new Float32Array(i)), (Da[i] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), r[a].toArray(s, o);
  }
  return s;
}

function ct(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
  return !0;
}

function rt(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}

function Vo(r, e) {
  let t = Ia[e];
  t === void 0 && ((t = new Int32Array(e)), (Ia[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}

function Mf(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}

function Sf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ct(t, e)) return;
    r.uniform2fv(this.addr, e), rt(t, e);
  }
}

function Tf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (r.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (ct(t, e)) return;
    r.uniform3fv(this.addr, e), rt(t, e);
  }
}

function Ef(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ct(t, e)) return;
    r.uniform4fv(this.addr, e), rt(t, e);
  }
}

function Af(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), rt(t, e);
  } else {
    if (ct(t, n)) return;
    za.set(n), r.uniformMatrix2fv(this.addr, !1, za), rt(t, n);
  }
}

function Lf(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), rt(t, e);
  } else {
    if (ct(t, n)) return;
    Fa.set(n), r.uniformMatrix3fv(this.addr, !1, Fa), rt(t, n);
  }
}

function Cf(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), rt(t, e);
  } else {
    if (ct(t, n)) return;
    Na.set(n), r.uniformMatrix4fv(this.addr, !1, Na), rt(t, n);
  }
}

function Rf(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}

function Pf(r, e) {
  const t = this.cache;
  ct(t, e) || (r.uniform2iv(this.addr, e), rt(t, e));
}

function Df(r, e) {
  const t = this.cache;
  ct(t, e) || (r.uniform3iv(this.addr, e), rt(t, e));
}

function If(r, e) {
  const t = this.cache;
  ct(t, e) || (r.uniform4iv(this.addr, e), rt(t, e));
}

function Nf(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}

function Ff(r, e) {
  const t = this.cache;
  ct(t, e) || (r.uniform2uiv(this.addr, e), rt(t, e));
}

function zf(r, e) {
  const t = this.cache;
  ct(t, e) || (r.uniform3uiv(this.addr, e), rt(t, e));
}

function Bf(r, e) {
  const t = this.cache;
  ct(t, e) || (r.uniform4uiv(this.addr, e), rt(t, e));
}

function kf(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.safeSetTexture2D(e || Uo, i);
}

function Of(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || bf, i);
}

function Hf(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.safeSetTextureCube(e || Go, i);
}

function Uf(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || wf, i);
}

function Gf(r) {
  switch (r) {
    case 5126:
      return Mf;
    case 35664:
      return Sf;
    case 35665:
      return Tf;
    case 35666:
      return Ef;
    case 35674:
      return Af;
    case 35675:
      return Lf;
    case 35676:
      return Cf;
    case 5124:
    case 35670:
      return Rf;
    case 35667:
    case 35671:
      return Pf;
    case 35668:
    case 35672:
      return Df;
    case 35669:
    case 35673:
      return If;
    case 5125:
      return Nf;
    case 36294:
      return Ff;
    case 36295:
      return zf;
    case 36296:
      return Bf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return kf;
    case 35679:
    case 36299:
    case 36307:
      return Of;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Hf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Uf;
  }
}

function Vf(r, e) {
  r.uniform1fv(this.addr, e);
}

function Wf(r, e) {
  const t = Zn(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}

function jf(r, e) {
  const t = Zn(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}

function qf(r, e) {
  const t = Zn(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}

function Xf(r, e) {
  const t = Zn(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}

function Yf(r, e) {
  const t = Zn(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}

function Zf(r, e) {
  const t = Zn(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}

function Jf(r, e) {
  r.uniform1iv(this.addr, e);
}

function Kf(r, e) {
  r.uniform2iv(this.addr, e);
}

function Qf(r, e) {
  r.uniform3iv(this.addr, e);
}

function $f(r, e) {
  r.uniform4iv(this.addr, e);
}

function ep(r, e) {
  r.uniform1uiv(this.addr, e);
}

function tp(r, e) {
  r.uniform2uiv(this.addr, e);
}

function np(r, e) {
  r.uniform3uiv(this.addr, e);
}

function ip(r, e) {
  r.uniform4uiv(this.addr, e);
}

function rp(r, e, t) {
  const n = e.length,
    i = Vo(t, n);
  r.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s) t.safeSetTexture2D(e[s] || Uo, i[s]);
}

function sp(r, e, t) {
  const n = e.length,
    i = Vo(t, n);
  r.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s) t.safeSetTextureCube(e[s] || Go, i[s]);
}

function ap(r) {
  switch (r) {
    case 5126:
      return Vf;
    case 35664:
      return Wf;
    case 35665:
      return jf;
    case 35666:
      return qf;
    case 35674:
      return Xf;
    case 35675:
      return Yf;
    case 35676:
      return Zf;
    case 5124:
    case 35670:
      return Jf;
    case 35667:
    case 35671:
      return Kf;
    case 35668:
    case 35672:
      return Qf;
    case 35669:
    case 35673:
      return $f;
    case 5125:
      return ep;
    case 36294:
      return tp;
    case 36295:
      return np;
    case 36296:
      return ip;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return rp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return sp;
  }
}

function op(r, e, t) {
  (this.id = r),
    (this.addr = t),
    (this.cache = []),
    (this.setValue = Gf(e.type));
}

function Wo(r, e, t) {
  (this.id = r),
    (this.addr = t),
    (this.cache = []),
    (this.size = e.size),
    (this.setValue = ap(e.type));
}
Wo.prototype.updateCache = function (r) {
  const e = this.cache;
  r instanceof Float32Array &&
    e.length !== r.length &&
    (this.cache = new Float32Array(r.length)),
    rt(e, r);
};

function jo(r) {
  (this.id = r), (this.seq = []), (this.map = {});
}
jo.prototype.setValue = function (r, e, t) {
  const n = this.seq;
  for (let i = 0, s = n.length; i !== s; ++i) {
    const a = n[i];
    a.setValue(r, e[a.id], t);
  }
};
const Kr = /(\w+)(\])?(\[|\.)?/g;

function Ba(r, e) {
  r.seq.push(e), (r.map[e.id] = e);
}

function lp(r, e, t) {
  const n = r.name,
    i = n.length;
  for (Kr.lastIndex = 0; ; ) {
    const s = Kr.exec(n),
      a = Kr.lastIndex;
    let o = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (o = o | 0), c === void 0 || (c === "[" && a + 2 === i))) {
      Ba(t, c === void 0 ? new op(o, r, e) : new Wo(o, r, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && ((d = new jo(o)), Ba(t, d)), (t = d);
    }
  }
}

function en(r, e) {
  (this.seq = []), (this.map = {});
  const t = r.getProgramParameter(e, 35718);
  for (let n = 0; n < t; ++n) {
    const i = r.getActiveUniform(e, n),
      s = r.getUniformLocation(e, i.name);
    lp(i, s, this);
  }
}
en.prototype.setValue = function (r, e, t, n) {
  const i = this.map[e];
  i !== void 0 && i.setValue(r, t, n);
};
en.prototype.setOptional = function (r, e, t) {
  const n = e[t];
  n !== void 0 && this.setValue(r, t, n);
};
en.upload = function (r, e, t, n) {
  for (let i = 0, s = e.length; i !== s; ++i) {
    const a = e[i],
      o = t[a.id];
    o.needsUpdate !== !1 && a.setValue(r, o.value, n);
  }
};
en.seqWithValue = function (r, e) {
  const t = [];
  for (let n = 0, i = r.length; n !== i; ++n) {
    const s = r[n];
    s.id in e && t.push(s);
  }
  return t;
};

function ka(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let cp = 0;

function hp(r) {
  const e = r.split(`
  `);
  for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
  return e.join(`
  `);
}

function qo(r) {
  switch (r) {
    case Ei:
      return ["Linear", "( value )"];
    case As:
      return ["sRGB", "( value )"];
    case Kc:
      return ["RGBE", "( value )"];
    case $c:
      return ["RGBM", "( value, 7.0 )"];
    case eh:
      return ["RGBM", "( value, 16.0 )"];
    case th:
      return ["RGBD", "( value, 256.0 )"];
    case Jc:
      return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case Qc:
      return ["LogLuv", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", r),
        ["Linear", "( value )"]
      );
  }
}

function Oa(r, e, t) {
  const n = r.getShaderParameter(e, 35713),
    i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = r.getShaderSource(e);
  return (
    "THREE.WebGLShader: gl.getShaderInfoLog() " +
    t +
    `
  ` +
    i +
    hp(s)
  );
}

function ni(r, e) {
  const t = qo(e);
  return (
    "vec4 " + r + "( vec4 value ) { return " + t[0] + "ToLinear" + t[1] + "; }"
  );
}

function up(r, e) {
  const t = qo(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}

function dp(r, e) {
  let t;
  switch (e) {
    case Jl:
      t = "Linear";
      break;
    case Kl:
      t = "Reinhard";
      break;
    case Ql:
      t = "OptimizedCineon";
      break;
    case Eo:
      t = "ACESFilmic";
      break;
    case $l:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}

function fp(r) {
  return [
    r.extensionDerivatives ||
    r.envMapCubeUV ||
    r.bumpMap ||
    r.tangentSpaceNormalMap ||
    r.clearcoatNormalMap ||
    r.flatShading ||
    r.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) &&
    r.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (r.extensionShaderTextureLOD || r.envMap) &&
    r.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(ci).join(`
  `);
}

function pp(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
  `);
}

function mp(r, e) {
  const t = {},
    n = r.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const a = r.getActiveAttrib(e, i).name;
    t[a] = r.getAttribLocation(e, a);
  }
  return t;
}

function ci(r) {
  return r !== "";
}

function Ha(r, e) {
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}

function Ua(r, e) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const gp = /^[ \t]*#include +<([\w\d./]+)>/gm;

function fs(r) {
  return r.replace(gp, yp);
}

function yp(r, e) {
  const t = Me[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return fs(t);
}
const vp =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  xp =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function Ga(r) {
  return r.replace(xp, Xo).replace(vp, _p);
}

function _p(r, e, t, n) {
  return (
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
    ),
    Xo(r, e, t, n)
  );
}

function Xo(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}

function Va(r) {
  let e =
    "precision " +
    r.precision +
    ` float;
  precision ` +
    r.precision +
    " int;";
  return (
    r.precision === "highp"
      ? (e += `
  #define HIGH_PRECISION`)
      : r.precision === "mediump"
      ? (e += `
  #define MEDIUM_PRECISION`)
      : r.precision === "lowp" &&
        (e += `
  #define LOW_PRECISION`),
    e
  );
}

function wp(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    r.shadowMapType === wo
      ? (e = "SHADOWMAP_TYPE_PCF")
      : r.shadowMapType === bo
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : r.shadowMapType === li && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}

function bp(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case _s:
      case ws:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case bs:
      case Ms:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}

function Mp(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case ws:
      case Ms:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}

function Sp(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case gr:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Yl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Zl:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}

function Tp(r, e, t, n) {
  const i = r.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = wp(t),
    c = bp(t),
    h = Mp(t),
    d = Sp(t),
    u = r.gammaFactor > 0 ? r.gammaFactor : 1,
    f = t.isWebGL2 ? "" : fp(t),
    m = pp(s),
    y = i.createProgram();
  let v,
    g,
    p = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
  `
      : "";
  t.isRawShaderMaterial
    ? ((v = [m].filter(ci).join(`
  `)),
      v.length > 0 &&
        (v += `
  `),
      (g = [f, m].filter(ci).join(`
  `)),
      g.length > 0 &&
        (g += `
  `))
    : ((v = [
        Va(t),
        "#define SHADER_NAME " + t.shaderName,
        m,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        "#define GAMMA_FACTOR " + u,
        "#define MAX_BONES " + t.maxBones,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.useVertexTexture ? "#define BONE_TEXTURE" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_MORPHTARGETS",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
  `,
      ].filter(ci).join(`
  `)),
      (g = [
        f,
        Va(t),
        "#define SHADER_NAME " + t.shaderName,
        m,
        t.alphaTest
          ? "#define ALPHATEST " + t.alphaTest + (t.alphaTest % 1 ? "" : ".0")
          : "",
        "#define GAMMA_FACTOR " + u,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + d : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        (t.extensionShaderTextureLOD || t.envMap) &&
        t.rendererExtensionShaderTextureLod
          ? "#define TEXTURE_LOD_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== di ? "#define TONE_MAPPING" : "",
        t.toneMapping !== di ? Me.tonemapping_pars_fragment : "",
        t.toneMapping !== di ? dp("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        Me.encodings_pars_fragment,
        t.map ? ni("mapTexelToLinear", t.mapEncoding) : "",
        t.matcap ? ni("matcapTexelToLinear", t.matcapEncoding) : "",
        t.envMap ? ni("envMapTexelToLinear", t.envMapEncoding) : "",
        t.emissiveMap
          ? ni("emissiveMapTexelToLinear", t.emissiveMapEncoding)
          : "",
        t.lightMap ? ni("lightMapTexelToLinear", t.lightMapEncoding) : "",
        up("linearToOutputTexel", t.outputEncoding),
        t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
  `,
      ].filter(ci).join(`
  `))),
    (a = fs(a)),
    (a = Ha(a, t)),
    (a = Ua(a, t)),
    (o = fs(o)),
    (o = Ha(o, t)),
    (o = Ua(o, t)),
    (a = Ga(a)),
    (o = Ga(o)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((p = `#version 300 es
  `),
      (v =
        [
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
  `) +
        `
  ` +
        v),
      (g =
        [
          "#define varying in",
          t.glslVersion === xa ? "" : "out highp vec4 pc_fragColor;",
          t.glslVersion === xa ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
  `) +
        `
  ` +
        g));
  const E = p + v + a,
    L = p + g + o,
    A = ka(i, 35633, E),
    x = ka(i, 35632, L);
  if (
    (i.attachShader(y, A),
    i.attachShader(y, x),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(y, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(y, 0, "position"),
    i.linkProgram(y),
    r.debug.checkShaderErrors)
  ) {
    const B = i.getProgramInfoLog(y).trim(),
      G = i.getShaderInfoLog(A).trim(),
      q = i.getShaderInfoLog(x).trim();
    let O = !0,
      C = !0;
    if (i.getProgramParameter(y, 35714) === !1) {
      O = !1;
      const P = Oa(i, A, "vertex"),
        D = Oa(i, x, "fragment");
      console.error(
        "THREE.WebGLProgram: shader error: ",
        i.getError(),
        "35715",
        i.getProgramParameter(y, 35715),
        "gl.getProgramInfoLog",
        B,
        P,
        D
      );
    } else
      B !== ""
        ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", B)
        : (G === "" || q === "") && (C = !1);
    C &&
      (this.diagnostics = {
        runnable: O,
        programLog: B,
        vertexShader: {
          log: G,
          prefix: v,
        },
        fragmentShader: {
          log: q,
          prefix: g,
        },
      });
  }
  i.deleteShader(A), i.deleteShader(x);
  let N;
  this.getUniforms = function () {
    return N === void 0 && (N = new en(i, y)), N;
  };
  let z;
  return (
    (this.getAttributes = function () {
      return z === void 0 && (z = mp(i, y)), z;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(y),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = cp++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = y),
    (this.vertexShader = A),
    (this.fragmentShader = x),
    this
  );
}

function Ep(r, e, t, n, i, s) {
  const a = [],
    o = n.isWebGL2,
    l = n.logarithmicDepthBuffer,
    c = n.floatVertexTextures,
    h = n.maxVertexUniforms,
    d = n.vertexTextures;
  let u = n.precision;
  const f = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    },
    m = [
      "precision",
      "isWebGL2",
      "supportsVertexTextures",
      "outputEncoding",
      "instancing",
      "instancingColor",
      "map",
      "mapEncoding",
      "matcap",
      "matcapEncoding",
      "envMap",
      "envMapMode",
      "envMapEncoding",
      "envMapCubeUV",
      "lightMap",
      "lightMapEncoding",
      "aoMap",
      "emissiveMap",
      "emissiveMapEncoding",
      "bumpMap",
      "normalMap",
      "objectSpaceNormalMap",
      "tangentSpaceNormalMap",
      "clearcoatMap",
      "clearcoatRoughnessMap",
      "clearcoatNormalMap",
      "displacementMap",
      "specularMap",
      "roughnessMap",
      "metalnessMap",
      "gradientMap",
      "alphaMap",
      "combine",
      "vertexColors",
      "vertexAlphas",
      "vertexTangents",
      "vertexUvs",
      "uvsVertexOnly",
      "fog",
      "useFog",
      "fogExp2",
      "flatShading",
      "sizeAttenuation",
      "logarithmicDepthBuffer",
      "skinning",
      "maxBones",
      "useVertexTexture",
      "morphTargets",
      "morphNormals",
      "premultipliedAlpha",
      "numDirLights",
      "numPointLights",
      "numSpotLights",
      "numHemiLights",
      "numRectAreaLights",
      "numDirLightShadows",
      "numPointLightShadows",
      "numSpotLightShadows",
      "shadowMapEnabled",
      "shadowMapType",
      "toneMapping",
      "physicallyCorrectLights",
      "alphaTest",
      "doubleSided",
      "flipSided",
      "numClippingPlanes",
      "numClipIntersection",
      "depthPacking",
      "dithering",
      "sheen",
      "transmissionMap",
    ];

  function y(x) {
    const z = x.skeleton.bones;
    if (c) return 1024;
    {
      const G = Math.floor((h - 20) / 4),
        q = Math.min(G, z.length);
      return q < z.length
        ? (console.warn(
            "THREE.WebGLRenderer: Skeleton has " +
              z.length +
              " bones. This GPU supports " +
              q +
              "."
          ),
          0)
        : q;
    }
  }

  function v(x) {
    let N;
    return (
      x && x.isTexture
        ? (N = x.encoding)
        : x && x.isWebGLRenderTarget
        ? (console.warn(
            "THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
          ),
          (N = x.texture.encoding))
        : (N = Ei),
      N
    );
  }

  function g(x, N, z, B, G) {
    const q = B.fog,
      O = x.isMeshStandardMaterial ? B.environment : null,
      C = e.get(x.envMap || O),
      P = f[x.type],
      D = G.isSkinnedMesh ? y(G) : 0;
    x.precision !== null &&
      ((u = n.getMaxPrecision(x.precision)),
      u !== x.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          u,
          "instead."
        ));
    let R, X;
    if (P) {
      const ae = Dt[P];
      (R = ae.vertexShader), (X = ae.fragmentShader);
    } else (R = x.vertexShader), (X = x.fragmentShader);
    const $ = r.getRenderTarget();
    return {
      isWebGL2: o,
      shaderID: P,
      shaderName: x.type,
      vertexShader: R,
      fragmentShader: X,
      defines: x.defines,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: u,
      instancing: G.isInstancedMesh === !0,
      instancingColor: G.isInstancedMesh === !0 && G.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: $ !== null ? v($.texture) : r.outputEncoding,
      map: !!x.map,
      mapEncoding: v(x.map),
      matcap: !!x.matcap,
      matcapEncoding: v(x.matcap),
      envMap: !!C,
      envMapMode: C && C.mapping,
      envMapEncoding: v(C),
      envMapCubeUV: !!C && (C.mapping === bs || C.mapping === Ms),
      lightMap: !!x.lightMap,
      lightMapEncoding: v(x.lightMap),
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      emissiveMapEncoding: v(x.emissiveMap),
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === rh,
      tangentSpaceNormalMap: x.normalMapType === qn,
      clearcoatMap: !!x.clearcoatMap,
      clearcoatRoughnessMap: !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: !!x.clearcoatNormalMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      alphaMap: !!x.alphaMap,
      gradientMap: !!x.gradientMap,
      sheen: !!x.sheen,
      transmissionMap: !!x.transmissionMap,
      combine: x.combine,
      vertexTangents: x.normalMap && x.vertexTangents,
      vertexColors: x.vertexColors,
      vertexAlphas:
        x.vertexColors === !0 &&
        G.geometry &&
        G.geometry.attributes.color &&
        G.geometry.attributes.color.itemSize === 4,
      vertexUvs:
        !!x.map ||
        !!x.bumpMap ||
        !!x.normalMap ||
        !!x.specularMap ||
        !!x.alphaMap ||
        !!x.emissiveMap ||
        !!x.roughnessMap ||
        !!x.metalnessMap ||
        !!x.clearcoatMap ||
        !!x.clearcoatRoughnessMap ||
        !!x.clearcoatNormalMap ||
        !!x.displacementMap ||
        !!x.transmissionMap,
      uvsVertexOnly:
        !(
          x.map ||
          x.bumpMap ||
          x.normalMap ||
          x.specularMap ||
          x.alphaMap ||
          x.emissiveMap ||
          x.roughnessMap ||
          x.metalnessMap ||
          x.clearcoatNormalMap ||
          x.transmissionMap
        ) && !!x.displacementMap,
      fog: !!q,
      useFog: x.fog,
      fogExp2: q && q.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: l,
      skinning: x.skinning && D > 0,
      maxBones: D,
      useVertexTexture: c,
      morphTargets: x.morphTargets,
      morphNormals: x.morphNormals,
      numDirLights: N.directional.length,
      numPointLights: N.point.length,
      numSpotLights: N.spot.length,
      numRectAreaLights: N.rectArea.length,
      numHemiLights: N.hemi.length,
      numDirLightShadows: N.directionalShadowMap.length,
      numPointLightShadows: N.pointShadowMap.length,
      numSpotLightShadows: N.spotShadowMap.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: r.shadowMap.enabled && z.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: x.toneMapped ? r.toneMapping : di,
      physicallyCorrectLights: r.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      alphaTest: x.alphaTest,
      doubleSided: x.side === mr,
      flipSided: x.side === Ze,
      depthPacking: x.depthPacking !== void 0 ? x.depthPacking : !1,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: o || t.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: o || t.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: o || t.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey(),
    };
  }

  function p(x) {
    const N = [];
    if (
      (x.shaderID
        ? N.push(x.shaderID)
        : (N.push(x.fragmentShader), N.push(x.vertexShader)),
      x.defines !== void 0)
    )
      for (const z in x.defines) N.push(z), N.push(x.defines[z]);
    if (x.isRawShaderMaterial === !1) {
      for (let z = 0; z < m.length; z++) N.push(x[m[z]]);
      N.push(r.outputEncoding), N.push(r.gammaFactor);
    }
    return N.push(x.customProgramCacheKey), N.join();
  }

  function E(x) {
    const N = f[x.type];
    let z;
    if (N) {
      const B = Dt[N];
      z = Nh.clone(B.uniforms);
    } else z = x.uniforms;
    return z;
  }

  function L(x, N) {
    let z;
    for (let B = 0, G = a.length; B < G; B++) {
      const q = a[B];
      if (q.cacheKey === N) {
        (z = q), ++z.usedTimes;
        break;
      }
    }
    return z === void 0 && ((z = new Tp(r, N, x, i)), a.push(z)), z;
  }

  function A(x) {
    if (--x.usedTimes === 0) {
      const N = a.indexOf(x);
      (a[N] = a[a.length - 1]), a.pop(), x.destroy();
    }
  }
  return {
    getParameters: g,
    getProgramCacheKey: p,
    getUniforms: E,
    acquireProgram: L,
    releaseProgram: A,
    programs: a,
  };
}

function Ap() {
  let r = new WeakMap();

  function e(s) {
    let a = r.get(s);
    return a === void 0 && ((a = {}), r.set(s, a)), a;
  }

  function t(s) {
    r.delete(s);
  }

  function n(s, a, o) {
    r.get(s)[a] = o;
  }

  function i() {
    r = new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i,
  };
}

function Lp(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.program !== e.program
    ? r.program.id - e.program.id
    : r.material.id !== e.material.id
    ? r.material.id - e.material.id
    : r.z !== e.z
    ? r.z - e.z
    : r.id - e.id;
}

function Cp(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.z !== e.z
    ? e.z - r.z
    : r.id - e.id;
}

function Wa(r) {
  const e = [];
  let t = 0;
  const n = [],
    i = [],
    s = {
      id: -1,
    };

  function a() {
    (t = 0), (n.length = 0), (i.length = 0);
  }

  function o(u, f, m, y, v, g) {
    let p = e[t];
    const E = r.get(m);
    return (
      p === void 0
        ? ((p = {
            id: u.id,
            object: u,
            geometry: f,
            material: m,
            program: E.program || s,
            groupOrder: y,
            renderOrder: u.renderOrder,
            z: v,
            group: g,
          }),
          (e[t] = p))
        : ((p.id = u.id),
          (p.object = u),
          (p.geometry = f),
          (p.material = m),
          (p.program = E.program || s),
          (p.groupOrder = y),
          (p.renderOrder = u.renderOrder),
          (p.z = v),
          (p.group = g)),
      t++,
      p
    );
  }

  function l(u, f, m, y, v, g) {
    const p = o(u, f, m, y, v, g);
    (m.transparent === !0 ? i : n).push(p);
  }

  function c(u, f, m, y, v, g) {
    const p = o(u, f, m, y, v, g);
    (m.transparent === !0 ? i : n).unshift(p);
  }

  function h(u, f) {
    n.length > 1 && n.sort(u || Lp), i.length > 1 && i.sort(f || Cp);
  }

  function d() {
    for (let u = t, f = e.length; u < f; u++) {
      const m = e[u];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.program = null),
        (m.group = null);
    }
  }
  return {
    opaque: n,
    transparent: i,
    init: a,
    push: l,
    unshift: c,
    finish: d,
    sort: h,
  };
}

function Rp(r) {
  let e = new WeakMap();

  function t(i, s) {
    let a;
    return (
      e.has(i) === !1
        ? ((a = new Wa(r)), e.set(i, [a]))
        : s >= e.get(i).length
        ? ((a = new Wa(r)), e.get(i).push(a))
        : (a = e.get(i)[s]),
      a
    );
  }

  function n() {
    e = new WeakMap();
  }
  return {
    get: t,
    dispose: n,
  };
}

function Pp() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new b(),
            color: new he(),
          };
          break;
        case "SpotLight":
          t = {
            position: new b(),
            direction: new b(),
            color: new he(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = {
            position: new b(),
            color: new he(),
            distance: 0,
            decay: 0,
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new b(),
            skyColor: new he(),
            groundColor: new he(),
          };
          break;
        case "RectAreaLight":
          t = {
            color: new he(),
            position: new b(),
            halfWidth: new b(),
            halfHeight: new b(),
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}

function Dp() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
let Ip = 0;

function Np(r, e) {
  return (e.castShadow ? 1 : 0) - (r.castShadow ? 1 : 0);
}

function Fp(r, e) {
  const t = new Pp(),
    n = Dp(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let h = 0; h < 9; h++) i.probe.push(new b());
  const s = new b(),
    a = new pe(),
    o = new pe();

  function l(h) {
    let d = 0,
      u = 0,
      f = 0;
    for (let N = 0; N < 9; N++) i.probe[N].set(0, 0, 0);
    let m = 0,
      y = 0,
      v = 0,
      g = 0,
      p = 0,
      E = 0,
      L = 0,
      A = 0;
    h.sort(Np);
    for (let N = 0, z = h.length; N < z; N++) {
      const B = h[N],
        G = B.color,
        q = B.intensity,
        O = B.distance,
        C = B.shadow && B.shadow.map ? B.shadow.map.texture : null;
      if (B.isAmbientLight) (d += G.r * q), (u += G.g * q), (f += G.b * q);
      else if (B.isLightProbe)
        for (let P = 0; P < 9; P++)
          i.probe[P].addScaledVector(B.sh.coefficients[P], q);
      else if (B.isDirectionalLight) {
        const P = t.get(B);
        if ((P.color.copy(B.color).multiplyScalar(B.intensity), B.castShadow)) {
          const D = B.shadow,
            R = n.get(B);
          (R.shadowBias = D.bias),
            (R.shadowNormalBias = D.normalBias),
            (R.shadowRadius = D.radius),
            (R.shadowMapSize = D.mapSize),
            (i.directionalShadow[m] = R),
            (i.directionalShadowMap[m] = C),
            (i.directionalShadowMatrix[m] = B.shadow.matrix),
            E++;
        }
        (i.directional[m] = P), m++;
      } else if (B.isSpotLight) {
        const P = t.get(B);
        if (
          (P.position.setFromMatrixPosition(B.matrixWorld),
          P.color.copy(G).multiplyScalar(q),
          (P.distance = O),
          (P.coneCos = Math.cos(B.angle)),
          (P.penumbraCos = Math.cos(B.angle * (1 - B.penumbra))),
          (P.decay = B.decay),
          B.castShadow)
        ) {
          const D = B.shadow,
            R = n.get(B);
          (R.shadowBias = D.bias),
            (R.shadowNormalBias = D.normalBias),
            (R.shadowRadius = D.radius),
            (R.shadowMapSize = D.mapSize),
            (i.spotShadow[v] = R),
            (i.spotShadowMap[v] = C),
            (i.spotShadowMatrix[v] = B.shadow.matrix),
            A++;
        }
        (i.spot[v] = P), v++;
      } else if (B.isRectAreaLight) {
        const P = t.get(B);
        P.color.copy(G).multiplyScalar(q),
          P.halfWidth.set(B.width * 0.5, 0, 0),
          P.halfHeight.set(0, B.height * 0.5, 0),
          (i.rectArea[g] = P),
          g++;
      } else if (B.isPointLight) {
        const P = t.get(B);
        if (
          (P.color.copy(B.color).multiplyScalar(B.intensity),
          (P.distance = B.distance),
          (P.decay = B.decay),
          B.castShadow)
        ) {
          const D = B.shadow,
            R = n.get(B);
          (R.shadowBias = D.bias),
            (R.shadowNormalBias = D.normalBias),
            (R.shadowRadius = D.radius),
            (R.shadowMapSize = D.mapSize),
            (R.shadowCameraNear = D.camera.near),
            (R.shadowCameraFar = D.camera.far),
            (i.pointShadow[y] = R),
            (i.pointShadowMap[y] = C),
            (i.pointShadowMatrix[y] = B.shadow.matrix),
            L++;
        }
        (i.point[y] = P), y++;
      } else if (B.isHemisphereLight) {
        const P = t.get(B);
        P.skyColor.copy(B.color).multiplyScalar(q),
          P.groundColor.copy(B.groundColor).multiplyScalar(q),
          (i.hemi[p] = P),
          p++;
      }
    }
    g > 0 &&
      (e.isWebGL2 || r.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = te.LTC_FLOAT_1), (i.rectAreaLTC2 = te.LTC_FLOAT_2))
        : r.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = te.LTC_HALF_1), (i.rectAreaLTC2 = te.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = d),
      (i.ambient[1] = u),
      (i.ambient[2] = f);
    const x = i.hash;
    (x.directionalLength !== m ||
      x.pointLength !== y ||
      x.spotLength !== v ||
      x.rectAreaLength !== g ||
      x.hemiLength !== p ||
      x.numDirectionalShadows !== E ||
      x.numPointShadows !== L ||
      x.numSpotShadows !== A) &&
      ((i.directional.length = m),
      (i.spot.length = v),
      (i.rectArea.length = g),
      (i.point.length = y),
      (i.hemi.length = p),
      (i.directionalShadow.length = E),
      (i.directionalShadowMap.length = E),
      (i.pointShadow.length = L),
      (i.pointShadowMap.length = L),
      (i.spotShadow.length = A),
      (i.spotShadowMap.length = A),
      (i.directionalShadowMatrix.length = E),
      (i.pointShadowMatrix.length = L),
      (i.spotShadowMatrix.length = A),
      (x.directionalLength = m),
      (x.pointLength = y),
      (x.spotLength = v),
      (x.rectAreaLength = g),
      (x.hemiLength = p),
      (x.numDirectionalShadows = E),
      (x.numPointShadows = L),
      (x.numSpotShadows = A),
      (i.version = Ip++));
  }

  function c(h, d) {
    let u = 0,
      f = 0,
      m = 0,
      y = 0,
      v = 0;
    const g = d.matrixWorldInverse;
    for (let p = 0, E = h.length; p < E; p++) {
      const L = h[p];
      if (L.isDirectionalLight) {
        const A = i.directional[u];
        A.direction.setFromMatrixPosition(L.matrixWorld),
          s.setFromMatrixPosition(L.target.matrixWorld),
          A.direction.sub(s),
          A.direction.transformDirection(g),
          u++;
      } else if (L.isSpotLight) {
        const A = i.spot[m];
        A.position.setFromMatrixPosition(L.matrixWorld),
          A.position.applyMatrix4(g),
          A.direction.setFromMatrixPosition(L.matrixWorld),
          s.setFromMatrixPosition(L.target.matrixWorld),
          A.direction.sub(s),
          A.direction.transformDirection(g),
          m++;
      } else if (L.isRectAreaLight) {
        const A = i.rectArea[y];
        A.position.setFromMatrixPosition(L.matrixWorld),
          A.position.applyMatrix4(g),
          o.identity(),
          a.copy(L.matrixWorld),
          a.premultiply(g),
          o.extractRotation(a),
          A.halfWidth.set(L.width * 0.5, 0, 0),
          A.halfHeight.set(0, L.height * 0.5, 0),
          A.halfWidth.applyMatrix4(o),
          A.halfHeight.applyMatrix4(o),
          y++;
      } else if (L.isPointLight) {
        const A = i.point[f];
        A.position.setFromMatrixPosition(L.matrixWorld),
          A.position.applyMatrix4(g),
          f++;
      } else if (L.isHemisphereLight) {
        const A = i.hemi[v];
        A.direction.setFromMatrixPosition(L.matrixWorld),
          A.direction.transformDirection(g),
          A.direction.normalize(),
          v++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i,
  };
}

function ja(r, e) {
  const t = new Fp(r, e),
    n = [],
    i = [];

  function s() {
    (n.length = 0), (i.length = 0);
  }

  function a(d) {
    n.push(d);
  }

  function o(d) {
    i.push(d);
  }

  function l() {
    t.setup(n);
  }

  function c(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t,
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o,
  };
}

function zp(r, e) {
  let t = new WeakMap();

  function n(s, a = 0) {
    let o;
    return (
      t.has(s) === !1
        ? ((o = new ja(r, e)), t.set(s, [o]))
        : a >= t.get(s).length
        ? ((o = new ja(r, e)), t.get(s).push(o))
        : (o = t.get(s)[a]),
      o
    );
  }

  function i() {
    t = new WeakMap();
  }
  return {
    get: n,
    dispose: i,
  };
}
class Yo extends Ke {
  constructor(e) {
    super(),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = nh),
      (this.skinning = !1),
      (this.morphTargets = !1),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.skinning = e.skinning),
      (this.morphTargets = e.morphTargets),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
Yo.prototype.isMeshDepthMaterial = !0;
class Zo extends Ke {
  constructor(e) {
    super(),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new b()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.skinning = !1),
      (this.morphTargets = !1),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.fog = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.skinning = e.skinning),
      (this.morphTargets = e.morphTargets),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
Zo.prototype.isMeshDistanceMaterial = !0;
var Bp = `uniform sampler2D shadow_pass;
  uniform vec2 resolution;
  uniform float radius;
  #include <packing>
  void main() {
      float mean = 0.0;
      float squared_mean = 0.0;
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
      for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
          #ifdef HORIZONTAL_PASS
              vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
              mean += distribution.x;
              squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
          #else
              float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
              mean += depth;
              squared_mean += depth * depth;
          #endif
      }
      mean = mean * HALF_SAMPLE_RATE;
      squared_mean = squared_mean * HALF_SAMPLE_RATE;
      float std_dev = sqrt( squared_mean - mean * mean );
      gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
  }`,
  kp = `void main() {
      gl_Position = vec4( position, 1.0 );
  }`;

function Jo(r, e, t) {
  let n = new vr();
  const i = new Z(),
    s = new Z(),
    a = new Fe(),
    o = [],
    l = [],
    c = {},
    h = t.maxTextureSize,
    d = {
      0: Ze,
      1: pr,
      2: mr,
    },
    u = new mn({
      defines: {
        SAMPLE_RATE: 2 / 8,
        HALF_SAMPLE_RATE: 1 / 8,
      },
      uniforms: {
        shadow_pass: {
          value: null,
        },
        resolution: {
          value: new Z(),
        },
        radius: {
          value: 4,
        },
      },
      vertexShader: kp,
      fragmentShader: Bp,
    }),
    f = u.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const m = new ke();
  m.setAttribute(
    "position",
    new Je(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const y = new gt(m, u),
    v = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = wo),
    (this.render = function (x, N, z) {
      if (
        v.enabled === !1 ||
        (v.autoUpdate === !1 && v.needsUpdate === !1) ||
        x.length === 0
      )
        return;
      const B = r.getRenderTarget(),
        G = r.getActiveCubeFace(),
        q = r.getActiveMipmapLevel(),
        O = r.state;
      O.setBlending(hi),
        O.buffers.color.setClear(1, 1, 1, 1),
        O.buffers.depth.setTest(!0),
        O.setScissorTest(!1);
      for (let C = 0, P = x.length; C < P; C++) {
        const D = x[C],
          R = D.shadow;
        if (R === void 0) {
          console.warn("THREE.WebGLShadowMap:", D, "has no shadow.");
          continue;
        }
        if (R.autoUpdate === !1 && R.needsUpdate === !1) continue;
        i.copy(R.mapSize);
        const X = R.getFrameExtents();
        if (
          (i.multiply(X),
          s.copy(R.mapSize),
          (i.x > h || i.y > h) &&
            (i.x > h &&
              ((s.x = Math.floor(h / X.x)),
              (i.x = s.x * X.x),
              (R.mapSize.x = s.x)),
            i.y > h &&
              ((s.y = Math.floor(h / X.y)),
              (i.y = s.y * X.y),
              (R.mapSize.y = s.y))),
          R.map === null && !R.isPointLightShadow && this.type === li)
        ) {
          const K = {
            minFilter: vt,
            magFilter: vt,
            format: At,
          };
          (R.map = new pn(i.x, i.y, K)),
            (R.map.texture.name = D.name + ".shadowMap"),
            (R.mapPass = new pn(i.x, i.y, K)),
            R.camera.updateProjectionMatrix();
        }
        if (R.map === null) {
          const K = {
            minFilter: ot,
            magFilter: ot,
            format: At,
          };
          (R.map = new pn(i.x, i.y, K)),
            (R.map.texture.name = D.name + ".shadowMap"),
            R.camera.updateProjectionMatrix();
        }
        r.setRenderTarget(R.map), r.clear();
        const $ = R.getViewportCount();
        for (let K = 0; K < $; K++) {
          const ae = R.getViewport(K);
          a.set(s.x * ae.x, s.y * ae.y, s.x * ae.z, s.y * ae.w),
            O.viewport(a),
            R.updateMatrices(D, K),
            (n = R.getFrustum()),
            A(N, z, R.camera, D, this.type);
        }
        !R.isPointLightShadow && this.type === li && g(R, z),
          (R.needsUpdate = !1);
      }
      (v.needsUpdate = !1), r.setRenderTarget(B, G, q);
    });

  function g(x, N) {
    const z = e.update(y);
    (u.uniforms.shadow_pass.value = x.map.texture),
      (u.uniforms.resolution.value = x.mapSize),
      (u.uniforms.radius.value = x.radius),
      r.setRenderTarget(x.mapPass),
      r.clear(),
      r.renderBufferDirect(N, null, z, u, y, null),
      (f.uniforms.shadow_pass.value = x.mapPass.texture),
      (f.uniforms.resolution.value = x.mapSize),
      (f.uniforms.radius.value = x.radius),
      r.setRenderTarget(x.map),
      r.clear(),
      r.renderBufferDirect(N, null, z, f, y, null);
  }

  function p(x, N, z) {
    const B = (x << 0) | (N << 1) | (z << 2);
    let G = o[B];
    return (
      G === void 0 &&
        ((G = new Yo({
          depthPacking: ih,
          morphTargets: x,
          skinning: N,
        })),
        (o[B] = G)),
      G
    );
  }

  function E(x, N, z) {
    const B = (x << 0) | (N << 1) | (z << 2);
    let G = l[B];
    return (
      G === void 0 &&
        ((G = new Zo({
          morphTargets: x,
          skinning: N,
        })),
        (l[B] = G)),
      G
    );
  }

  function L(x, N, z, B, G, q, O) {
    let C = null,
      P = p,
      D = x.customDepthMaterial;
    if (
      (B.isPointLight === !0 && ((P = E), (D = x.customDistanceMaterial)),
      D === void 0)
    ) {
      let R = !1;
      z.morphTargets === !0 &&
        (R =
          N.morphAttributes &&
          N.morphAttributes.position &&
          N.morphAttributes.position.length > 0);
      let X = !1;
      x.isSkinnedMesh === !0 &&
        (z.skinning === !0
          ? (X = !0)
          : console.warn(
              "THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",
              x
            ));
      const $ = x.isInstancedMesh === !0;
      C = P(R, X, $);
    } else C = D;
    if (
      r.localClippingEnabled &&
      z.clipShadows === !0 &&
      z.clippingPlanes.length !== 0
    ) {
      const R = C.uuid,
        X = z.uuid;
      let $ = c[R];
      $ === void 0 && (($ = {}), (c[R] = $));
      let K = $[X];
      K === void 0 && ((K = C.clone()), ($[X] = K)), (C = K);
    }
    return (
      (C.visible = z.visible),
      (C.wireframe = z.wireframe),
      O === li
        ? (C.side = z.shadowSide !== null ? z.shadowSide : z.side)
        : (C.side = z.shadowSide !== null ? z.shadowSide : d[z.side]),
      (C.clipShadows = z.clipShadows),
      (C.clippingPlanes = z.clippingPlanes),
      (C.clipIntersection = z.clipIntersection),
      (C.wireframeLinewidth = z.wireframeLinewidth),
      (C.linewidth = z.linewidth),
      B.isPointLight === !0 &&
        C.isMeshDistanceMaterial === !0 &&
        (C.referencePosition.setFromMatrixPosition(B.matrixWorld),
        (C.nearDistance = G),
        (C.farDistance = q)),
      C
    );
  }

  function A(x, N, z, B, G) {
    if (x.visible === !1) return;
    if (
      x.layers.test(N.layers) &&
      (x.isMesh || x.isLine || x.isPoints) &&
      (x.castShadow || (x.receiveShadow && G === li)) &&
      (!x.frustumCulled || n.intersectsObject(x))
    ) {
      x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, x.matrixWorld);
      const C = e.update(x),
        P = x.material;
      if (Array.isArray(P)) {
        const D = C.groups;
        for (let R = 0, X = D.length; R < X; R++) {
          const $ = D[R],
            K = P[$.materialIndex];
          if (K && K.visible) {
            const ae = L(x, C, K, B, z.near, z.far, G);
            r.renderBufferDirect(z, null, C, ae, x, $);
          }
        }
      } else if (P.visible) {
        const D = L(x, C, P, B, z.near, z.far, G);
        r.renderBufferDirect(z, null, C, D, x, null);
      }
    }
    const O = x.children;
    for (let C = 0, P = O.length; C < P; C++) A(O[C], N, z, B, G);
  }
}

function Op(r, e, t) {
  const n = t.isWebGL2;

  function i() {
    let S = !1;
    const j = new Fe();
    let Y = null;
    const le = new Fe(0, 0, 0, 0);
    return {
      setMask: function (W) {
        Y !== W && !S && (r.colorMask(W, W, W, W), (Y = W));
      },
      setLocked: function (W) {
        S = W;
      },
      setClear: function (W, fe, Ce, Pe, Qe) {
        Qe === !0 && ((W *= Pe), (fe *= Pe), (Ce *= Pe)),
          j.set(W, fe, Ce, Pe),
          le.equals(j) === !1 && (r.clearColor(W, fe, Ce, Pe), le.copy(j));
      },
      reset: function () {
        (S = !1), (Y = null), le.set(-1, 0, 0, 0);
      },
    };
  }

  function s() {
    let S = !1,
      j = null,
      Y = null,
      le = null;
    return {
      setTest: function (W) {
        W ? ue(2929) : me(2929);
      },
      setMask: function (W) {
        j !== W && !S && (r.depthMask(W), (j = W));
      },
      setFunc: function (W) {
        if (Y !== W) {
          if (W)
            switch (W) {
              case Ul:
                r.depthFunc(512);
                break;
              case Gl:
                r.depthFunc(519);
                break;
              case Vl:
                r.depthFunc(513);
                break;
              case cs:
                r.depthFunc(515);
                break;
              case Wl:
                r.depthFunc(514);
                break;
              case jl:
                r.depthFunc(518);
                break;
              case ql:
                r.depthFunc(516);
                break;
              case Xl:
                r.depthFunc(517);
                break;
              default:
                r.depthFunc(515);
            }
          else r.depthFunc(515);
          Y = W;
        }
      },
      setLocked: function (W) {
        S = W;
      },
      setClear: function (W) {
        le !== W && (r.clearDepth(W), (le = W));
      },
      reset: function () {
        (S = !1), (j = null), (Y = null), (le = null);
      },
    };
  }

  function a() {
    let S = !1,
      j = null,
      Y = null,
      le = null,
      W = null,
      fe = null,
      Ce = null,
      Pe = null,
      Qe = null;
    return {
      setTest: function (Ge) {
        S || (Ge ? ue(2960) : me(2960));
      },
      setMask: function (Ge) {
        j !== Ge && !S && (r.stencilMask(Ge), (j = Ge));
      },
      setFunc: function (Ge, Ft, wt) {
        (Y !== Ge || le !== Ft || W !== wt) &&
          (r.stencilFunc(Ge, Ft, wt), (Y = Ge), (le = Ft), (W = wt));
      },
      setOp: function (Ge, Ft, wt) {
        (fe !== Ge || Ce !== Ft || Pe !== wt) &&
          (r.stencilOp(Ge, Ft, wt), (fe = Ge), (Ce = Ft), (Pe = wt));
      },
      setLocked: function (Ge) {
        S = Ge;
      },
      setClear: function (Ge) {
        Qe !== Ge && (r.clearStencil(Ge), (Qe = Ge));
      },
      reset: function () {
        (S = !1),
          (j = null),
          (Y = null),
          (le = null),
          (W = null),
          (fe = null),
          (Ce = null),
          (Pe = null),
          (Qe = null);
      },
    };
  }
  const o = new i(),
    l = new s(),
    c = new a();
  let h = {},
    d = null,
    u = {},
    f = null,
    m = !1,
    y = null,
    v = null,
    g = null,
    p = null,
    E = null,
    L = null,
    A = null,
    x = !1,
    N = null,
    z = null,
    B = null,
    G = null,
    q = null;
  const O = r.getParameter(35661);
  let C = !1,
    P = 0;
  const D = r.getParameter(7938);
  D.indexOf("WebGL") !== -1
    ? ((P = parseFloat(/^WebGL (\d)/.exec(D)[1])), (C = P >= 1))
    : D.indexOf("OpenGL ES") !== -1 &&
      ((P = parseFloat(/^OpenGL ES (\d)/.exec(D)[1])), (C = P >= 2));
  let R = null,
    X = {};
  const $ = new Fe(0, 0, r.canvas.width, r.canvas.height),
    K = new Fe(0, 0, r.canvas.width, r.canvas.height);

  function ae(S, j, Y) {
    const le = new Uint8Array(4),
      W = r.createTexture();
    r.bindTexture(S, W),
      r.texParameteri(S, 10241, 9728),
      r.texParameteri(S, 10240, 9728);
    for (let fe = 0; fe < Y; fe++)
      r.texImage2D(j + fe, 0, 6408, 1, 1, 0, 6408, 5121, le);
    return W;
  }
  const se = {};
  (se[3553] = ae(3553, 3553, 1)),
    (se[34067] = ae(34067, 34069, 6)),
    o.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    ue(2929),
    l.setFunc(cs),
    be(!1),
    J($s),
    ue(2884),
    Te(hi);

  function ue(S) {
    h[S] !== !0 && (r.enable(S), (h[S] = !0));
  }

  function me(S) {
    h[S] !== !1 && (r.disable(S), (h[S] = !1));
  }

  function H(S) {
    S !== d && (r.bindFramebuffer(36160, S), (d = S));
  }

  function De(S, j) {
    j === null && d !== null && (j = d),
      u[S] !== j &&
        (r.bindFramebuffer(S, j),
        (u[S] = j),
        n && (S === 36009 && (u[36160] = j), S === 36160 && (u[36009] = j)));
  }

  function Se(S) {
    return f !== S ? (r.useProgram(S), (f = S), !0) : !1;
  }
  const ge = {
    [kn]: 32774,
    [Rl]: 32778,
    [Pl]: 32779,
  };
  if (n) (ge[ia] = 32775), (ge[ra] = 32776);
  else {
    const S = e.get("EXT_blend_minmax");
    S !== null && ((ge[ia] = S.MIN_EXT), (ge[ra] = S.MAX_EXT));
  }
  const de = {
    [Dl]: 0,
    [Il]: 1,
    [Nl]: 768,
    [So]: 770,
    [Hl]: 776,
    [kl]: 774,
    [zl]: 772,
    [Fl]: 769,
    [To]: 771,
    [Ol]: 775,
    [Bl]: 773,
  };

  function Te(S, j, Y, le, W, fe, Ce, Pe) {
    if (S === hi) {
      m === !0 && (me(3042), (m = !1));
      return;
    }
    if ((m === !1 && (ue(3042), (m = !0)), S !== Cl)) {
      if (S !== y || Pe !== x) {
        if (
          ((v !== kn || E !== kn) &&
            (r.blendEquation(32774), (v = kn), (E = kn)),
          Pe)
        )
          switch (S) {
            case ui:
              r.blendFuncSeparate(1, 771, 1, 771);
              break;
            case ea:
              r.blendFunc(1, 1);
              break;
            case ta:
              r.blendFuncSeparate(0, 0, 769, 771);
              break;
            case na:
              r.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", S);
              break;
          }
        else
          switch (S) {
            case ui:
              r.blendFuncSeparate(770, 771, 1, 771);
              break;
            case ea:
              r.blendFunc(770, 1);
              break;
            case ta:
              r.blendFunc(0, 769);
              break;
            case na:
              r.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", S);
              break;
          }
        (g = null), (p = null), (L = null), (A = null), (y = S), (x = Pe);
      }
      return;
    }
    (W = W || j),
      (fe = fe || Y),
      (Ce = Ce || le),
      (j !== v || W !== E) &&
        (r.blendEquationSeparate(ge[j], ge[W]), (v = j), (E = W)),
      (Y !== g || le !== p || fe !== L || Ce !== A) &&
        (r.blendFuncSeparate(de[Y], de[le], de[fe], de[Ce]),
        (g = Y),
        (p = le),
        (L = fe),
        (A = Ce)),
      (y = S),
      (x = null);
  }

  function we(S, j) {
    S.side === mr ? me(2884) : ue(2884);
    let Y = S.side === Ze;
    j && (Y = !Y),
      be(Y),
      S.blending === ui && S.transparent === !1
        ? Te(hi)
        : Te(
            S.blending,
            S.blendEquation,
            S.blendSrc,
            S.blendDst,
            S.blendEquationAlpha,
            S.blendSrcAlpha,
            S.blendDstAlpha,
            S.premultipliedAlpha
          ),
      l.setFunc(S.depthFunc),
      l.setTest(S.depthTest),
      l.setMask(S.depthWrite),
      o.setMask(S.colorWrite);
    const le = S.stencilWrite;
    c.setTest(le),
      le &&
        (c.setMask(S.stencilWriteMask),
        c.setFunc(S.stencilFunc, S.stencilRef, S.stencilFuncMask),
        c.setOp(S.stencilFail, S.stencilZFail, S.stencilZPass)),
      ee(S.polygonOffset, S.polygonOffsetFactor, S.polygonOffsetUnits),
      S.alphaToCoverage === !0 ? ue(32926) : me(32926);
  }

  function be(S) {
    N !== S && (S ? r.frontFace(2304) : r.frontFace(2305), (N = S));
  }

  function J(S) {
    S !== Al
      ? (ue(2884),
        S !== z &&
          (S === $s
            ? r.cullFace(1029)
            : S === Ll
            ? r.cullFace(1028)
            : r.cullFace(1032)))
      : me(2884),
      (z = S);
  }

  function Q(S) {
    S !== B && (C && r.lineWidth(S), (B = S));
  }

  function ee(S, j, Y) {
    S
      ? (ue(32823),
        (G !== j || q !== Y) && (r.polygonOffset(j, Y), (G = j), (q = Y)))
      : me(32823);
  }

  function ce(S) {
    S ? ue(3089) : me(3089);
  }

  function re(S) {
    S === void 0 && (S = 33984 + O - 1),
      R !== S && (r.activeTexture(S), (R = S));
  }

  function M(S, j) {
    R === null && re();
    let Y = X[R];
    Y === void 0 &&
      ((Y = {
        type: void 0,
        texture: void 0,
      }),
      (X[R] = Y)),
      (Y.type !== S || Y.texture !== j) &&
        (r.bindTexture(S, j || se[S]), (Y.type = S), (Y.texture = j));
  }

  function w() {
    const S = X[R];
    S !== void 0 &&
      S.type !== void 0 &&
      (r.bindTexture(S.type, null), (S.type = void 0), (S.texture = void 0));
  }

  function U() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }

  function V() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }

  function ne() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }

  function oe(S) {
    $.equals(S) === !1 && (r.scissor(S.x, S.y, S.z, S.w), $.copy(S));
  }

  function Ee(S) {
    K.equals(S) === !1 && (r.viewport(S.x, S.y, S.z, S.w), K.copy(S));
  }

  function T() {
    r.disable(3042),
      r.disable(2884),
      r.disable(2929),
      r.disable(32823),
      r.disable(3089),
      r.disable(2960),
      r.disable(32926),
      r.blendEquation(32774),
      r.blendFunc(1, 0),
      r.blendFuncSeparate(1, 0, 1, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(513),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(519, 0, 4294967295),
      r.stencilOp(7680, 7680, 7680),
      r.clearStencil(0),
      r.cullFace(1029),
      r.frontFace(2305),
      r.polygonOffset(0, 0),
      r.activeTexture(33984),
      r.bindFramebuffer(36160, null),
      n === !0 &&
        (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (h = {}),
      (R = null),
      (X = {}),
      (d = null),
      (u = {}),
      (f = null),
      (m = !1),
      (y = null),
      (v = null),
      (g = null),
      (p = null),
      (E = null),
      (L = null),
      (A = null),
      (x = !1),
      (N = null),
      (z = null),
      (B = null),
      (G = null),
      (q = null),
      $.set(0, 0, r.canvas.width, r.canvas.height),
      K.set(0, 0, r.canvas.width, r.canvas.height),
      o.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: {
      color: o,
      depth: l,
      stencil: c,
    },
    enable: ue,
    disable: me,
    bindFramebuffer: De,
    bindXRFramebuffer: H,
    useProgram: Se,
    setBlending: Te,
    setMaterial: we,
    setFlipSided: be,
    setCullFace: J,
    setLineWidth: Q,
    setPolygonOffset: ee,
    setScissorTest: ce,
    activeTexture: re,
    bindTexture: M,
    unbindTexture: w,
    compressedTexImage2D: U,
    texImage2D: V,
    texImage3D: ne,
    scissor: oe,
    viewport: Ee,
    reset: T,
  };
}

function Hp(r, e, t, n, i, s, a) {
  const o = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    h = i.maxTextureSize,
    d = i.maxSamples,
    u = new WeakMap();
  let f,
    m = !1;
  try {
    m =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}

  function y(M, w) {
    return m
      ? new OffscreenCanvas(M, w)
      : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  }

  function v(M, w, U, V) {
    let ne = 1;
    if (
      ((M.width > V || M.height > V) && (ne = V / Math.max(M.width, M.height)),
      ne < 1 || w === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && M instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && M instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && M instanceof ImageBitmap)
      ) {
        const oe = w ? Ro : Math.floor,
          Ee = oe(ne * M.width),
          T = oe(ne * M.height);
        f === void 0 && (f = y(Ee, T));
        const S = U ? y(Ee, T) : f;
        return (
          (S.width = Ee),
          (S.height = T),
          S.getContext("2d").drawImage(M, 0, 0, Ee, T),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              M.width +
              "x" +
              M.height +
              ") to (" +
              Ee +
              "x" +
              T +
              ")."
          ),
          S
        );
      } else
        return (
          "data" in M &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                M.width +
                "x" +
                M.height +
                ")."
            ),
          M
        );
    return M;
  }

  function g(M) {
    return ds(M.width) && ds(M.height);
  }

  function p(M) {
    return o
      ? !1
      : M.wrapS !== Et ||
          M.wrapT !== Et ||
          (M.minFilter !== ot && M.minFilter !== vt);
  }

  function E(M, w) {
    return M.generateMipmaps && w && M.minFilter !== ot && M.minFilter !== vt;
  }

  function L(M, w, U, V) {
    r.generateMipmap(M);
    const ne = n.get(w);
    ne.__maxMipLevel = Math.log2(Math.max(U, V));
  }

  function A(M, w, U) {
    if (o === !1) return w;
    if (M !== null) {
      if (r[M] !== void 0) return r[M];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          M +
          "'"
      );
    }
    let V = w;
    return (
      w === 6403 &&
        (U === 5126 && (V = 33326),
        U === 5131 && (V = 33325),
        U === 5121 && (V = 33321)),
      w === 6407 &&
        (U === 5126 && (V = 34837),
        U === 5131 && (V = 34843),
        U === 5121 && (V = 32849)),
      w === 6408 &&
        (U === 5126 && (V = 34836),
        U === 5131 && (V = 34842),
        U === 5121 && (V = 32856)),
      (V === 33325 || V === 33326 || V === 34842 || V === 34836) &&
        e.get("EXT_color_buffer_float"),
      V
    );
  }

  function x(M) {
    return M === ot || M === oa || M === la ? 9728 : 9729;
  }

  function N(M) {
    const w = M.target;
    w.removeEventListener("dispose", N),
      B(w),
      w.isVideoTexture && u.delete(w),
      a.memory.textures--;
  }

  function z(M) {
    const w = M.target;
    w.removeEventListener("dispose", z), G(w), a.memory.textures--;
  }

  function B(M) {
    const w = n.get(M);
    w.__webglInit !== void 0 &&
      (r.deleteTexture(w.__webglTexture), n.remove(M));
  }

  function G(M) {
    const w = M.texture,
      U = n.get(M),
      V = n.get(w);
    if (M) {
      if (
        (V.__webglTexture !== void 0 && r.deleteTexture(V.__webglTexture),
        M.depthTexture && M.depthTexture.dispose(),
        M.isWebGLCubeRenderTarget)
      )
        for (let ne = 0; ne < 6; ne++)
          r.deleteFramebuffer(U.__webglFramebuffer[ne]),
            U.__webglDepthbuffer &&
              r.deleteRenderbuffer(U.__webglDepthbuffer[ne]);
      else
        r.deleteFramebuffer(U.__webglFramebuffer),
          U.__webglDepthbuffer && r.deleteRenderbuffer(U.__webglDepthbuffer),
          U.__webglMultisampledFramebuffer &&
            r.deleteFramebuffer(U.__webglMultisampledFramebuffer),
          U.__webglColorRenderbuffer &&
            r.deleteRenderbuffer(U.__webglColorRenderbuffer),
          U.__webglDepthRenderbuffer &&
            r.deleteRenderbuffer(U.__webglDepthRenderbuffer);
      n.remove(w), n.remove(M);
    }
  }
  let q = 0;

  function O() {
    q = 0;
  }

  function C() {
    const M = q;
    return (
      M >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            M +
            " texture units while this GPU supports only " +
            l
        ),
      (q += 1),
      M
    );
  }

  function P(M, w) {
    const U = n.get(M);
    if (
      (M.isVideoTexture && J(M), M.version > 0 && U.__version !== M.version)
    ) {
      const V = M.image;
      if (V === void 0)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is undefined"
        );
      else if (V.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        ue(U, M, w);
        return;
      }
    }
    t.activeTexture(33984 + w), t.bindTexture(3553, U.__webglTexture);
  }

  function D(M, w) {
    const U = n.get(M);
    if (M.version > 0 && U.__version !== M.version) {
      ue(U, M, w);
      return;
    }
    t.activeTexture(33984 + w), t.bindTexture(35866, U.__webglTexture);
  }

  function R(M, w) {
    const U = n.get(M);
    if (M.version > 0 && U.__version !== M.version) {
      ue(U, M, w);
      return;
    }
    t.activeTexture(33984 + w), t.bindTexture(32879, U.__webglTexture);
  }

  function X(M, w) {
    const U = n.get(M);
    if (M.version > 0 && U.__version !== M.version) {
      me(U, M, w);
      return;
    }
    t.activeTexture(33984 + w), t.bindTexture(34067, U.__webglTexture);
  }
  const $ = {
      [hs]: 10497,
      [Et]: 33071,
      [us]: 33648,
    },
    K = {
      [ot]: 9728,
      [oa]: 9984,
      [la]: 9986,
      [vt]: 9729,
      [ec]: 9985,
      [Ss]: 9987,
    };

  function ae(M, w, U) {
    if (
      (U
        ? (r.texParameteri(M, 10242, $[w.wrapS]),
          r.texParameteri(M, 10243, $[w.wrapT]),
          (M === 32879 || M === 35866) && r.texParameteri(M, 32882, $[w.wrapR]),
          r.texParameteri(M, 10240, K[w.magFilter]),
          r.texParameteri(M, 10241, K[w.minFilter]))
        : (r.texParameteri(M, 10242, 33071),
          r.texParameteri(M, 10243, 33071),
          (M === 32879 || M === 35866) && r.texParameteri(M, 32882, 33071),
          (w.wrapS !== Et || w.wrapT !== Et) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          r.texParameteri(M, 10240, x(w.magFilter)),
          r.texParameteri(M, 10241, x(w.minFilter)),
          w.minFilter !== ot &&
            w.minFilter !== vt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const V = e.get("EXT_texture_filter_anisotropic");
      if (
        (w.type === $t && e.has("OES_texture_float_linear") === !1) ||
        (o === !1 &&
          w.type === or &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (w.anisotropy > 1 || n.get(w).__currentAnisotropy) &&
        (r.texParameterf(
          M,
          V.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(w.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(w).__currentAnisotropy = w.anisotropy));
    }
  }

  function se(M, w) {
    M.__webglInit === void 0 &&
      ((M.__webglInit = !0),
      w.addEventListener("dispose", N),
      (M.__webglTexture = r.createTexture()),
      a.memory.textures++);
  }

  function ue(M, w, U) {
    let V = 3553;
    w.isDataTexture2DArray && (V = 35866),
      w.isDataTexture3D && (V = 32879),
      se(M, w),
      t.activeTexture(33984 + U),
      t.bindTexture(V, M.__webglTexture),
      r.pixelStorei(37440, w.flipY),
      r.pixelStorei(37441, w.premultiplyAlpha),
      r.pixelStorei(3317, w.unpackAlignment),
      r.pixelStorei(37443, 0);
    const ne = p(w) && g(w.image) === !1,
      oe = v(w.image, ne, !1, h),
      Ee = g(oe) || o,
      T = s.convert(w.format);
    let S = s.convert(w.type),
      j = A(w.internalFormat, T, S);
    ae(V, w, Ee);
    let Y;
    const le = w.mipmaps;
    if (w.isDepthTexture)
      (j = 6402),
        o
          ? w.type === $t
            ? (j = 36012)
            : w.type === sr
            ? (j = 33190)
            : w.type === fi
            ? (j = 35056)
            : (j = 33189)
          : w.type === $t &&
            console.error(
              "WebGLRenderer: Floating point depth texture requires WebGL2."
            ),
        w.format === Gn &&
          j === 6402 &&
          w.type !== ar &&
          w.type !== sr &&
          (console.warn(
            "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
          ),
          (w.type = ar),
          (S = s.convert(w.type))),
        w.format === vi &&
          j === 6402 &&
          ((j = 34041),
          w.type !== fi &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
            ),
            (w.type = fi),
            (S = s.convert(w.type)))),
        t.texImage2D(3553, 0, j, oe.width, oe.height, 0, T, S, null);
    else if (w.isDataTexture)
      if (le.length > 0 && Ee) {
        for (let W = 0, fe = le.length; W < fe; W++)
          (Y = le[W]),
            t.texImage2D(3553, W, j, Y.width, Y.height, 0, T, S, Y.data);
        (w.generateMipmaps = !1), (M.__maxMipLevel = le.length - 1);
      } else
        t.texImage2D(3553, 0, j, oe.width, oe.height, 0, T, S, oe.data),
          (M.__maxMipLevel = 0);
    else if (w.isCompressedTexture) {
      for (let W = 0, fe = le.length; W < fe; W++)
        (Y = le[W]),
          w.format !== At && w.format !== fn
            ? T !== null
              ? t.compressedTexImage2D(3553, W, j, Y.width, Y.height, 0, Y.data)
              : console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                )
            : t.texImage2D(3553, W, j, Y.width, Y.height, 0, T, S, Y.data);
      M.__maxMipLevel = le.length - 1;
    } else if (w.isDataTexture2DArray)
      t.texImage3D(
        35866,
        0,
        j,
        oe.width,
        oe.height,
        oe.depth,
        0,
        T,
        S,
        oe.data
      ),
        (M.__maxMipLevel = 0);
    else if (w.isDataTexture3D)
      t.texImage3D(
        32879,
        0,
        j,
        oe.width,
        oe.height,
        oe.depth,
        0,
        T,
        S,
        oe.data
      ),
        (M.__maxMipLevel = 0);
    else if (le.length > 0 && Ee) {
      for (let W = 0, fe = le.length; W < fe; W++)
        (Y = le[W]), t.texImage2D(3553, W, j, T, S, Y);
      (w.generateMipmaps = !1), (M.__maxMipLevel = le.length - 1);
    } else t.texImage2D(3553, 0, j, T, S, oe), (M.__maxMipLevel = 0);
    E(w, Ee) && L(V, w, oe.width, oe.height),
      (M.__version = w.version),
      w.onUpdate && w.onUpdate(w);
  }

  function me(M, w, U) {
    if (w.image.length !== 6) return;
    se(M, w),
      t.activeTexture(33984 + U),
      t.bindTexture(34067, M.__webglTexture),
      r.pixelStorei(37440, w.flipY),
      r.pixelStorei(37441, w.premultiplyAlpha),
      r.pixelStorei(3317, w.unpackAlignment),
      r.pixelStorei(37443, 0);
    const V = w && (w.isCompressedTexture || w.image[0].isCompressedTexture),
      ne = w.image[0] && w.image[0].isDataTexture,
      oe = [];
    for (let W = 0; W < 6; W++)
      !V && !ne
        ? (oe[W] = v(w.image[W], !1, !0, c))
        : (oe[W] = ne ? w.image[W].image : w.image[W]);
    const Ee = oe[0],
      T = g(Ee) || o,
      S = s.convert(w.format),
      j = s.convert(w.type),
      Y = A(w.internalFormat, S, j);
    ae(34067, w, T);
    let le;
    if (V) {
      for (let W = 0; W < 6; W++) {
        le = oe[W].mipmaps;
        for (let fe = 0; fe < le.length; fe++) {
          const Ce = le[fe];
          w.format !== At && w.format !== fn
            ? S !== null
              ? t.compressedTexImage2D(
                  34069 + W,
                  fe,
                  Y,
                  Ce.width,
                  Ce.height,
                  0,
                  Ce.data
                )
              : console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                )
            : t.texImage2D(
                34069 + W,
                fe,
                Y,
                Ce.width,
                Ce.height,
                0,
                S,
                j,
                Ce.data
              );
        }
      }
      M.__maxMipLevel = le.length - 1;
    } else {
      le = w.mipmaps;
      for (let W = 0; W < 6; W++)
        if (ne) {
          t.texImage2D(
            34069 + W,
            0,
            Y,
            oe[W].width,
            oe[W].height,
            0,
            S,
            j,
            oe[W].data
          );
          for (let fe = 0; fe < le.length; fe++) {
            const Pe = le[fe].image[W].image;
            t.texImage2D(
              34069 + W,
              fe + 1,
              Y,
              Pe.width,
              Pe.height,
              0,
              S,
              j,
              Pe.data
            );
          }
        } else {
          t.texImage2D(34069 + W, 0, Y, S, j, oe[W]);
          for (let fe = 0; fe < le.length; fe++) {
            const Ce = le[fe];
            t.texImage2D(34069 + W, fe + 1, Y, S, j, Ce.image[W]);
          }
        }
      M.__maxMipLevel = le.length;
    }
    E(w, T) && L(34067, w, Ee.width, Ee.height),
      (M.__version = w.version),
      w.onUpdate && w.onUpdate(w);
  }

  function H(M, w, U, V) {
    const ne = w.texture,
      oe = s.convert(ne.format),
      Ee = s.convert(ne.type),
      T = A(ne.internalFormat, oe, Ee);
    V === 32879 || V === 35866
      ? t.texImage3D(V, 0, T, w.width, w.height, w.depth, 0, oe, Ee, null)
      : t.texImage2D(V, 0, T, w.width, w.height, 0, oe, Ee, null),
      t.bindFramebuffer(36160, M),
      r.framebufferTexture2D(36160, U, V, n.get(ne).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }

  function De(M, w, U) {
    if ((r.bindRenderbuffer(36161, M), w.depthBuffer && !w.stencilBuffer)) {
      let V = 33189;
      if (U) {
        const ne = w.depthTexture;
        ne &&
          ne.isDepthTexture &&
          (ne.type === $t ? (V = 36012) : ne.type === sr && (V = 33190));
        const oe = be(w);
        r.renderbufferStorageMultisample(36161, oe, V, w.width, w.height);
      } else r.renderbufferStorage(36161, V, w.width, w.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, M);
    } else if (w.depthBuffer && w.stencilBuffer) {
      if (U) {
        const V = be(w);
        r.renderbufferStorageMultisample(36161, V, 35056, w.width, w.height);
      } else r.renderbufferStorage(36161, 34041, w.width, w.height);
      r.framebufferRenderbuffer(36160, 33306, 36161, M);
    } else {
      const V = w.texture,
        ne = s.convert(V.format),
        oe = s.convert(V.type),
        Ee = A(V.internalFormat, ne, oe);
      if (U) {
        const T = be(w);
        r.renderbufferStorageMultisample(36161, T, Ee, w.width, w.height);
      } else r.renderbufferStorage(36161, Ee, w.width, w.height);
    }
    r.bindRenderbuffer(36161, null);
  }

  function Se(M, w) {
    if (w && w.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, M),
      !(w.depthTexture && w.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(w.depthTexture).__webglTexture ||
      w.depthTexture.image.width !== w.width ||
      w.depthTexture.image.height !== w.height) &&
      ((w.depthTexture.image.width = w.width),
      (w.depthTexture.image.height = w.height),
      (w.depthTexture.needsUpdate = !0)),
      P(w.depthTexture, 0);
    const V = n.get(w.depthTexture).__webglTexture;
    if (w.depthTexture.format === Gn)
      r.framebufferTexture2D(36160, 36096, 3553, V, 0);
    else if (w.depthTexture.format === vi)
      r.framebufferTexture2D(36160, 33306, 3553, V, 0);
    else throw new Error("Unknown depthTexture format");
  }

  function ge(M) {
    const w = n.get(M),
      U = M.isWebGLCubeRenderTarget === !0;
    if (M.depthTexture) {
      if (U)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Se(w.__webglFramebuffer, M);
    } else if (U) {
      w.__webglDepthbuffer = [];
      for (let V = 0; V < 6; V++)
        t.bindFramebuffer(36160, w.__webglFramebuffer[V]),
          (w.__webglDepthbuffer[V] = r.createRenderbuffer()),
          De(w.__webglDepthbuffer[V], M, !1);
    } else
      t.bindFramebuffer(36160, w.__webglFramebuffer),
        (w.__webglDepthbuffer = r.createRenderbuffer()),
        De(w.__webglDepthbuffer, M, !1);
    t.bindFramebuffer(36160, null);
  }

  function de(M) {
    const w = M.texture,
      U = n.get(M),
      V = n.get(w);
    M.addEventListener("dispose", z),
      (V.__webglTexture = r.createTexture()),
      (V.__version = w.version),
      a.memory.textures++;
    const ne = M.isWebGLCubeRenderTarget === !0,
      oe = M.isWebGLMultisampleRenderTarget === !0,
      Ee = w.isDataTexture3D || w.isDataTexture2DArray,
      T = g(M) || o;
    if (
      (o &&
        w.format === fn &&
        (w.type === $t || w.type === or) &&
        ((w.format = At),
        console.warn(
          "THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead."
        )),
      ne)
    ) {
      U.__webglFramebuffer = [];
      for (let S = 0; S < 6; S++)
        U.__webglFramebuffer[S] = r.createFramebuffer();
    } else if (((U.__webglFramebuffer = r.createFramebuffer()), oe))
      if (o) {
        (U.__webglMultisampledFramebuffer = r.createFramebuffer()),
          (U.__webglColorRenderbuffer = r.createRenderbuffer()),
          r.bindRenderbuffer(36161, U.__webglColorRenderbuffer);
        const S = s.convert(w.format),
          j = s.convert(w.type),
          Y = A(w.internalFormat, S, j),
          le = be(M);
        r.renderbufferStorageMultisample(36161, le, Y, M.width, M.height),
          t.bindFramebuffer(36160, U.__webglMultisampledFramebuffer),
          r.framebufferRenderbuffer(
            36160,
            36064,
            36161,
            U.__webglColorRenderbuffer
          ),
          r.bindRenderbuffer(36161, null),
          M.depthBuffer &&
            ((U.__webglDepthRenderbuffer = r.createRenderbuffer()),
            De(U.__webglDepthRenderbuffer, M, !0)),
          t.bindFramebuffer(36160, null);
      } else
        console.warn(
          "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
        );
    if (ne) {
      t.bindTexture(34067, V.__webglTexture), ae(34067, w, T);
      for (let S = 0; S < 6; S++)
        H(U.__webglFramebuffer[S], M, 36064, 34069 + S);
      E(w, T) && L(34067, w, M.width, M.height), t.bindTexture(34067, null);
    } else {
      let S = 3553;
      Ee &&
        (o
          ? (S = w.isDataTexture3D ? 32879 : 35866)
          : console.warn(
              "THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2."
            )),
        t.bindTexture(S, V.__webglTexture),
        ae(S, w, T),
        H(U.__webglFramebuffer, M, 36064, S),
        E(w, T) && L(3553, w, M.width, M.height),
        t.bindTexture(3553, null);
    }
    M.depthBuffer && ge(M);
  }

  function Te(M) {
    const w = M.texture,
      U = g(M) || o;
    if (E(w, U)) {
      const V = M.isWebGLCubeRenderTarget ? 34067 : 3553,
        ne = n.get(w).__webglTexture;
      t.bindTexture(V, ne), L(V, w, M.width, M.height), t.bindTexture(V, null);
    }
  }

  function we(M) {
    if (M.isWebGLMultisampleRenderTarget)
      if (o) {
        const w = M.width,
          U = M.height;
        let V = 16384;
        M.depthBuffer && (V |= 256), M.stencilBuffer && (V |= 1024);
        const ne = n.get(M);
        t.bindFramebuffer(36008, ne.__webglMultisampledFramebuffer),
          t.bindFramebuffer(36009, ne.__webglFramebuffer),
          r.blitFramebuffer(0, 0, w, U, 0, 0, w, U, V, 9728),
          t.bindFramebuffer(36008, null),
          t.bindFramebuffer(36009, ne.__webglMultisampledFramebuffer);
      } else
        console.warn(
          "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
        );
  }

  function be(M) {
    return o && M.isWebGLMultisampleRenderTarget ? Math.min(d, M.samples) : 0;
  }

  function J(M) {
    const w = a.render.frame;
    u.get(M) !== w && (u.set(M, w), M.update());
  }
  let Q = !1,
    ee = !1;

  function ce(M, w) {
    M &&
      M.isWebGLRenderTarget &&
      (Q === !1 &&
        (console.warn(
          "THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."
        ),
        (Q = !0)),
      (M = M.texture)),
      P(M, w);
  }

  function re(M, w) {
    M &&
      M.isWebGLCubeRenderTarget &&
      (ee === !1 &&
        (console.warn(
          "THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."
        ),
        (ee = !0)),
      (M = M.texture)),
      X(M, w);
  }
  (this.allocateTextureUnit = C),
    (this.resetTextureUnits = O),
    (this.setTexture2D = P),
    (this.setTexture2DArray = D),
    (this.setTexture3D = R),
    (this.setTextureCube = X),
    (this.setupRenderTarget = de),
    (this.updateRenderTargetMipmap = Te),
    (this.updateMultisampleRenderTarget = we),
    (this.safeSetTexture2D = ce),
    (this.safeSetTextureCube = re);
}

function Up(r, e, t) {
  const n = t.isWebGL2;

  function i(s) {
    let a;
    if (s === Ts) return 5121;
    if (s === rc) return 32819;
    if (s === sc) return 32820;
    if (s === ac) return 33635;
    if (s === tc) return 5120;
    if (s === nc) return 5122;
    if (s === ar) return 5123;
    if (s === ic) return 5124;
    if (s === sr) return 5125;
    if (s === $t) return 5126;
    if (s === or)
      return n
        ? 5131
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === oc) return 6406;
    if (s === fn) return 6407;
    if (s === At) return 6408;
    if (s === lc) return 6409;
    if (s === cc) return 6410;
    if (s === Gn) return 6402;
    if (s === vi) return 34041;
    if (s === hc) return 6403;
    if (s === uc) return 36244;
    if (s === dc) return 33319;
    if (s === fc) return 33320;
    if (s === pc) return 36248;
    if (s === mc) return 36249;
    if (s === ca || s === ha || s === ua || s === da)
      if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (s === ca) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === ha) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === ua) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === da) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === fa || s === pa || s === ma || s === ga)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (s === fa) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === pa) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === ma) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === ga) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === gc)
      return (
        (a = e.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (
      (s === ya || s === va) &&
      ((a = e.get("WEBGL_compressed_texture_etc")), a !== null)
    ) {
      if (s === ya) return a.COMPRESSED_RGB8_ETC2;
      if (s === va) return a.COMPRESSED_RGBA8_ETC2_EAC;
    }
    if (
      s === yc ||
      s === vc ||
      s === xc ||
      s === _c ||
      s === wc ||
      s === bc ||
      s === Mc ||
      s === Sc ||
      s === Tc ||
      s === Ec ||
      s === Ac ||
      s === Lc ||
      s === Cc ||
      s === Rc ||
      s === Dc ||
      s === Ic ||
      s === Nc ||
      s === Fc ||
      s === zc ||
      s === Bc ||
      s === kc ||
      s === Oc ||
      s === Hc ||
      s === Uc ||
      s === Gc ||
      s === Vc ||
      s === Wc ||
      s === jc
    )
      return (
        (a = e.get("WEBGL_compressed_texture_astc")), a !== null ? s : null
      );
    if (s === Pc)
      return (a = e.get("EXT_texture_compression_bptc")), a !== null ? s : null;
    if (s === fi)
      return n
        ? 34042
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null);
  }
  return {
    convert: i,
  };
}
class Ko extends ut {
  constructor(e = []) {
    super(), (this.cameras = e);
  }
}
Ko.prototype.isArrayCamera = !0;
class dn extends Le {
  constructor() {
    super(), (this.type = "Group");
  }
}
dn.prototype.isGroup = !0;
const Gp = {
  type: "move",
};
class Qr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new dn()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = {
          pinching: !1,
        })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new dn()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new b()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new b())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new dn()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new b()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new b())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({
        type: "disconnected",
        data: e,
      }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      s = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred")
      if (
        (o !== null &&
          ((i = t.getPose(e.targetRaySpace, n)),
          i !== null &&
            (o.matrix.fromArray(i.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            i.linearVelocity
              ? ((o.hasLinearVelocity = !0),
                o.linearVelocity.copy(i.linearVelocity))
              : (o.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((o.hasAngularVelocity = !0),
                o.angularVelocity.copy(i.angularVelocity))
              : (o.hasAngularVelocity = !1),
            this.dispatchEvent(Gp))),
        c && e.hand)
      ) {
        a = !0;
        for (const y of e.hand.values()) {
          const v = t.getJointPose(y, n);
          if (c.joints[y.jointName] === void 0) {
            const p = new dn();
            (p.matrixAutoUpdate = !1),
              (p.visible = !1),
              (c.joints[y.jointName] = p),
              c.add(p);
          }
          const g = c.joints[y.jointName];
          v !== null &&
            (g.matrix.fromArray(v.transform.matrix),
            g.matrix.decompose(g.position, g.rotation, g.scale),
            (g.jointRadius = v.radius)),
            (g.visible = v !== null);
        }
        const h = c.joints["index-finger-tip"],
          d = c.joints["thumb-tip"],
          u = h.position.distanceTo(d.position),
          f = 0.02,
          m = 0.005;
        c.inputState.pinching && u > f + m
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            u <= f - m &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
    return (
      o !== null && (o.visible = i !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
}
class Vp extends sn {
  constructor(e, t) {
    super();
    const n = this,
      i = e.state;
    let s = null,
      a = 1,
      o = null,
      l = "local-floor",
      c = null;
    const h = [],
      d = new Map(),
      u = new ut();
    u.layers.enable(1), (u.viewport = new Fe());
    const f = new ut();
    f.layers.enable(2), (f.viewport = new Fe());
    const m = [u, f],
      y = new Ko();
    y.layers.enable(1), y.layers.enable(2);
    let v = null,
      g = null;
    (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (O) {
        let C = h[O];
        return (
          C === void 0 && ((C = new Qr()), (h[O] = C)), C.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (O) {
        let C = h[O];
        return C === void 0 && ((C = new Qr()), (h[O] = C)), C.getGripSpace();
      }),
      (this.getHand = function (O) {
        let C = h[O];
        return C === void 0 && ((C = new Qr()), (h[O] = C)), C.getHandSpace();
      });

    function p(O) {
      const C = d.get(O.inputSource);
      C &&
        C.dispatchEvent({
          type: O.type,
          data: O.inputSource,
        });
    }

    function E() {
      d.forEach(function (O, C) {
        O.disconnect(C);
      }),
        d.clear(),
        (v = null),
        (g = null),
        i.bindXRFramebuffer(null),
        e.setRenderTarget(e.getRenderTarget()),
        q.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({
          type: "sessionend",
        });
    }
    (this.setFramebufferScaleFactor = function (O) {
      (a = O),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (O) {
        (l = O),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return o;
      }),
      (this.getSession = function () {
        return s;
      }),
      (this.setSession = async function (O) {
        if (((s = O), s !== null)) {
          s.addEventListener("select", p),
            s.addEventListener("selectstart", p),
            s.addEventListener("selectend", p),
            s.addEventListener("squeeze", p),
            s.addEventListener("squeezestart", p),
            s.addEventListener("squeezeend", p),
            s.addEventListener("end", E),
            s.addEventListener("inputsourceschange", L);
          const C = t.getContextAttributes();
          C.xrCompatible !== !0 && (await t.makeXRCompatible());
          const P = {
              antialias: C.antialias,
              alpha: C.alpha,
              depth: C.depth,
              stencil: C.stencil,
              framebufferScaleFactor: a,
            },
            D = new XRWebGLLayer(s, t, P);
          s.updateRenderState({
            baseLayer: D,
          }),
            (o = await s.requestReferenceSpace(l)),
            q.setContext(s),
            q.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({
              type: "sessionstart",
            });
        }
      });

    function L(O) {
      const C = s.inputSources;
      for (let P = 0; P < h.length; P++) d.set(C[P], h[P]);
      for (let P = 0; P < O.removed.length; P++) {
        const D = O.removed[P],
          R = d.get(D);
        R &&
          (R.dispatchEvent({
            type: "disconnected",
            data: D,
          }),
          d.delete(D));
      }
      for (let P = 0; P < O.added.length; P++) {
        const D = O.added[P],
          R = d.get(D);
        R &&
          R.dispatchEvent({
            type: "connected",
            data: D,
          });
      }
    }
    const A = new b(),
      x = new b();

    function N(O, C, P) {
      A.setFromMatrixPosition(C.matrixWorld),
        x.setFromMatrixPosition(P.matrixWorld);
      const D = A.distanceTo(x),
        R = C.projectionMatrix.elements,
        X = P.projectionMatrix.elements,
        $ = R[14] / (R[10] - 1),
        K = R[14] / (R[10] + 1),
        ae = (R[9] + 1) / R[5],
        se = (R[9] - 1) / R[5],
        ue = (R[8] - 1) / R[0],
        me = (X[8] + 1) / X[0],
        H = $ * ue,
        De = $ * me,
        Se = D / (-ue + me),
        ge = Se * -ue;
      C.matrixWorld.decompose(O.position, O.quaternion, O.scale),
        O.translateX(ge),
        O.translateZ(Se),
        O.matrixWorld.compose(O.position, O.quaternion, O.scale),
        O.matrixWorldInverse.copy(O.matrixWorld).invert();
      const de = $ + Se,
        Te = K + Se,
        we = H - ge,
        be = De + (D - ge),
        J = ((ae * K) / Te) * de,
        Q = ((se * K) / Te) * de;
      O.projectionMatrix.makePerspective(we, be, J, Q, de, Te);
    }

    function z(O, C) {
      C === null
        ? O.matrixWorld.copy(O.matrix)
        : O.matrixWorld.multiplyMatrices(C.matrixWorld, O.matrix),
        O.matrixWorldInverse.copy(O.matrixWorld).invert();
    }
    this.getCamera = function (O) {
      (y.near = f.near = u.near = O.near),
        (y.far = f.far = u.far = O.far),
        (v !== y.near || g !== y.far) &&
          (s.updateRenderState({
            depthNear: y.near,
            depthFar: y.far,
          }),
          (v = y.near),
          (g = y.far));
      const C = O.parent,
        P = y.cameras;
      z(y, C);
      for (let R = 0; R < P.length; R++) z(P[R], C);
      O.matrixWorld.copy(y.matrixWorld),
        O.matrix.copy(y.matrix),
        O.matrix.decompose(O.position, O.quaternion, O.scale);
      const D = O.children;
      for (let R = 0, X = D.length; R < X; R++) D[R].updateMatrixWorld(!0);
      return (
        P.length === 2
          ? N(y, u, f)
          : y.projectionMatrix.copy(u.projectionMatrix),
        y
      );
    };
    let B = null;

    function G(O, C) {
      if (((c = C.getViewerPose(o)), c !== null)) {
        const D = c.views,
          R = s.renderState.baseLayer;
        i.bindXRFramebuffer(R.framebuffer);
        let X = !1;
        D.length !== y.cameras.length && ((y.cameras.length = 0), (X = !0));
        for (let $ = 0; $ < D.length; $++) {
          const K = D[$],
            ae = R.getViewport(K),
            se = m[$];
          se.matrix.fromArray(K.transform.matrix),
            se.projectionMatrix.fromArray(K.projectionMatrix),
            se.viewport.set(ae.x, ae.y, ae.width, ae.height),
            $ === 0 && y.matrix.copy(se.matrix),
            X === !0 && y.cameras.push(se);
        }
      }
      const P = s.inputSources;
      for (let D = 0; D < h.length; D++) {
        const R = h[D],
          X = P[D];
        R.update(X, C, o);
      }
      B && B(O, C);
    }
    const q = new ko();
    q.setAnimationLoop(G),
      (this.setAnimationLoop = function (O) {
        B = O;
      }),
      (this.dispose = function () {});
  }
}

function Wp(r) {
  function e(g, p) {
    g.fogColor.value.copy(p.color),
      p.isFog
        ? ((g.fogNear.value = p.near), (g.fogFar.value = p.far))
        : p.isFogExp2 && (g.fogDensity.value = p.density);
  }

  function t(g, p, E, L) {
    p.isMeshBasicMaterial
      ? n(g, p)
      : p.isMeshLambertMaterial
      ? (n(g, p), l(g, p))
      : p.isMeshToonMaterial
      ? (n(g, p), h(g, p))
      : p.isMeshPhongMaterial
      ? (n(g, p), c(g, p))
      : p.isMeshStandardMaterial
      ? (n(g, p), p.isMeshPhysicalMaterial ? u(g, p) : d(g, p))
      : p.isMeshMatcapMaterial
      ? (n(g, p), f(g, p))
      : p.isMeshDepthMaterial
      ? (n(g, p), m(g, p))
      : p.isMeshDistanceMaterial
      ? (n(g, p), y(g, p))
      : p.isMeshNormalMaterial
      ? (n(g, p), v(g, p))
      : p.isLineBasicMaterial
      ? (i(g, p), p.isLineDashedMaterial && s(g, p))
      : p.isPointsMaterial
      ? a(g, p, E, L)
      : p.isSpriteMaterial
      ? o(g, p)
      : p.isShadowMaterial
      ? (g.color.value.copy(p.color), (g.opacity.value = p.opacity))
      : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }

  function n(g, p) {
    (g.opacity.value = p.opacity),
      p.color && g.diffuse.value.copy(p.color),
      p.emissive &&
        g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && (g.map.value = p.map),
      p.alphaMap && (g.alphaMap.value = p.alphaMap),
      p.specularMap && (g.specularMap.value = p.specularMap);
    const E = r.get(p).envMap;
    if (E) {
      (g.envMap.value = E),
        (g.flipEnvMap.value = E.isCubeTexture && E._needsFlipEnvMap ? -1 : 1),
        (g.reflectivity.value = p.reflectivity),
        (g.refractionRatio.value = p.refractionRatio);
      const x = r.get(E).__maxMipLevel;
      x !== void 0 && (g.maxMipLevel.value = x);
    }
    p.lightMap &&
      ((g.lightMap.value = p.lightMap),
      (g.lightMapIntensity.value = p.lightMapIntensity)),
      p.aoMap &&
        ((g.aoMap.value = p.aoMap),
        (g.aoMapIntensity.value = p.aoMapIntensity));
    let L;
    p.map
      ? (L = p.map)
      : p.specularMap
      ? (L = p.specularMap)
      : p.displacementMap
      ? (L = p.displacementMap)
      : p.normalMap
      ? (L = p.normalMap)
      : p.bumpMap
      ? (L = p.bumpMap)
      : p.roughnessMap
      ? (L = p.roughnessMap)
      : p.metalnessMap
      ? (L = p.metalnessMap)
      : p.alphaMap
      ? (L = p.alphaMap)
      : p.emissiveMap
      ? (L = p.emissiveMap)
      : p.clearcoatMap
      ? (L = p.clearcoatMap)
      : p.clearcoatNormalMap
      ? (L = p.clearcoatNormalMap)
      : p.clearcoatRoughnessMap && (L = p.clearcoatRoughnessMap),
      L !== void 0 &&
        (L.isWebGLRenderTarget && (L = L.texture),
        L.matrixAutoUpdate === !0 && L.updateMatrix(),
        g.uvTransform.value.copy(L.matrix));
    let A;
    p.aoMap ? (A = p.aoMap) : p.lightMap && (A = p.lightMap),
      A !== void 0 &&
        (A.isWebGLRenderTarget && (A = A.texture),
        A.matrixAutoUpdate === !0 && A.updateMatrix(),
        g.uv2Transform.value.copy(A.matrix));
  }

  function i(g, p) {
    g.diffuse.value.copy(p.color), (g.opacity.value = p.opacity);
  }

  function s(g, p) {
    (g.dashSize.value = p.dashSize),
      (g.totalSize.value = p.dashSize + p.gapSize),
      (g.scale.value = p.scale);
  }

  function a(g, p, E, L) {
    g.diffuse.value.copy(p.color),
      (g.opacity.value = p.opacity),
      (g.size.value = p.size * E),
      (g.scale.value = L * 0.5),
      p.map && (g.map.value = p.map),
      p.alphaMap && (g.alphaMap.value = p.alphaMap);
    let A;
    p.map ? (A = p.map) : p.alphaMap && (A = p.alphaMap),
      A !== void 0 &&
        (A.matrixAutoUpdate === !0 && A.updateMatrix(),
        g.uvTransform.value.copy(A.matrix));
  }

  function o(g, p) {
    g.diffuse.value.copy(p.color),
      (g.opacity.value = p.opacity),
      (g.rotation.value = p.rotation),
      p.map && (g.map.value = p.map),
      p.alphaMap && (g.alphaMap.value = p.alphaMap);
    let E;
    p.map ? (E = p.map) : p.alphaMap && (E = p.alphaMap),
      E !== void 0 &&
        (E.matrixAutoUpdate === !0 && E.updateMatrix(),
        g.uvTransform.value.copy(E.matrix));
  }

  function l(g, p) {
    p.emissiveMap && (g.emissiveMap.value = p.emissiveMap);
  }

  function c(g, p) {
    g.specular.value.copy(p.specular),
      (g.shininess.value = Math.max(p.shininess, 1e-4)),
      p.emissiveMap && (g.emissiveMap.value = p.emissiveMap),
      p.bumpMap &&
        ((g.bumpMap.value = p.bumpMap),
        (g.bumpScale.value = p.bumpScale),
        p.side === Ze && (g.bumpScale.value *= -1)),
      p.normalMap &&
        ((g.normalMap.value = p.normalMap),
        g.normalScale.value.copy(p.normalScale),
        p.side === Ze && g.normalScale.value.negate()),
      p.displacementMap &&
        ((g.displacementMap.value = p.displacementMap),
        (g.displacementScale.value = p.displacementScale),
        (g.displacementBias.value = p.displacementBias));
  }

  function h(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap),
      p.emissiveMap && (g.emissiveMap.value = p.emissiveMap),
      p.bumpMap &&
        ((g.bumpMap.value = p.bumpMap),
        (g.bumpScale.value = p.bumpScale),
        p.side === Ze && (g.bumpScale.value *= -1)),
      p.normalMap &&
        ((g.normalMap.value = p.normalMap),
        g.normalScale.value.copy(p.normalScale),
        p.side === Ze && g.normalScale.value.negate()),
      p.displacementMap &&
        ((g.displacementMap.value = p.displacementMap),
        (g.displacementScale.value = p.displacementScale),
        (g.displacementBias.value = p.displacementBias));
  }

  function d(g, p) {
    (g.roughness.value = p.roughness),
      (g.metalness.value = p.metalness),
      p.roughnessMap && (g.roughnessMap.value = p.roughnessMap),
      p.metalnessMap && (g.metalnessMap.value = p.metalnessMap),
      p.emissiveMap && (g.emissiveMap.value = p.emissiveMap),
      p.bumpMap &&
        ((g.bumpMap.value = p.bumpMap),
        (g.bumpScale.value = p.bumpScale),
        p.side === Ze && (g.bumpScale.value *= -1)),
      p.normalMap &&
        ((g.normalMap.value = p.normalMap),
        g.normalScale.value.copy(p.normalScale),
        p.side === Ze && g.normalScale.value.negate()),
      p.displacementMap &&
        ((g.displacementMap.value = p.displacementMap),
        (g.displacementScale.value = p.displacementScale),
        (g.displacementBias.value = p.displacementBias)),
      r.get(p).envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }

  function u(g, p) {
    d(g, p),
      (g.reflectivity.value = p.reflectivity),
      (g.clearcoat.value = p.clearcoat),
      (g.clearcoatRoughness.value = p.clearcoatRoughness),
      p.sheen && g.sheen.value.copy(p.sheen),
      p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap),
      p.clearcoatRoughnessMap &&
        (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
      p.clearcoatNormalMap &&
        (g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
        (g.clearcoatNormalMap.value = p.clearcoatNormalMap),
        p.side === Ze && g.clearcoatNormalScale.value.negate()),
      (g.transmission.value = p.transmission),
      p.transmissionMap && (g.transmissionMap.value = p.transmissionMap);
  }

  function f(g, p) {
    p.matcap && (g.matcap.value = p.matcap),
      p.bumpMap &&
        ((g.bumpMap.value = p.bumpMap),
        (g.bumpScale.value = p.bumpScale),
        p.side === Ze && (g.bumpScale.value *= -1)),
      p.normalMap &&
        ((g.normalMap.value = p.normalMap),
        g.normalScale.value.copy(p.normalScale),
        p.side === Ze && g.normalScale.value.negate()),
      p.displacementMap &&
        ((g.displacementMap.value = p.displacementMap),
        (g.displacementScale.value = p.displacementScale),
        (g.displacementBias.value = p.displacementBias));
  }

  function m(g, p) {
    p.displacementMap &&
      ((g.displacementMap.value = p.displacementMap),
      (g.displacementScale.value = p.displacementScale),
      (g.displacementBias.value = p.displacementBias));
  }

  function y(g, p) {
    p.displacementMap &&
      ((g.displacementMap.value = p.displacementMap),
      (g.displacementScale.value = p.displacementScale),
      (g.displacementBias.value = p.displacementBias)),
      g.referencePosition.value.copy(p.referencePosition),
      (g.nearDistance.value = p.nearDistance),
      (g.farDistance.value = p.farDistance);
  }

  function v(g, p) {
    p.bumpMap &&
      ((g.bumpMap.value = p.bumpMap),
      (g.bumpScale.value = p.bumpScale),
      p.side === Ze && (g.bumpScale.value *= -1)),
      p.normalMap &&
        ((g.normalMap.value = p.normalMap),
        g.normalScale.value.copy(p.normalScale),
        p.side === Ze && g.normalScale.value.negate()),
      p.displacementMap &&
        ((g.displacementMap.value = p.displacementMap),
        (g.displacementScale.value = p.displacementScale),
        (g.displacementBias.value = p.displacementBias));
  }
  return {
    refreshFogUniforms: e,
    refreshMaterialUniforms: t,
  };
}

function jp() {
  const r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  return (r.style.display = "block"), r;
}

function ze(r) {
  r = r || {};
  const e = r.canvas !== void 0 ? r.canvas : jp(),
    t = r.context !== void 0 ? r.context : null,
    n = r.alpha !== void 0 ? r.alpha : !1,
    i = r.depth !== void 0 ? r.depth : !0,
    s = r.stencil !== void 0 ? r.stencil : !0,
    a = r.antialias !== void 0 ? r.antialias : !1,
    o = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0,
    l = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1,
    c = r.powerPreference !== void 0 ? r.powerPreference : "default",
    h =
      r.failIfMajorPerformanceCaveat !== void 0
        ? r.failIfMajorPerformanceCaveat
        : !1;
  let d = null,
    u = null;
  const f = [],
    m = [];
  (this.domElement = e),
    (this.debug = {
      checkShaderErrors: !0,
    }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.gammaFactor = 2),
    (this.outputEncoding = Ei),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = di),
    (this.toneMappingExposure = 1);
  const y = this;
  let v = !1,
    g = 0,
    p = 0,
    E = null,
    L = -1,
    A = null;
  const x = new Fe(),
    N = new Fe();
  let z = null,
    B = e.width,
    G = e.height,
    q = 1,
    O = null,
    C = null;
  const P = new Fe(0, 0, B, G),
    D = new Fe(0, 0, B, G);
  let R = !1;
  const X = new vr();
  let $ = !1,
    K = !1;
  const ae = new pe(),
    se = new b(),
    ue = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };

  function me() {
    return E === null ? q : 1;
  }
  let H = t;

  function De(_, F) {
    for (let I = 0; I < _.length; I++) {
      const k = _[I],
        ie = e.getContext(k, F);
      if (ie !== null) return ie;
    }
    return null;
  }
  try {
    const _ = {
      alpha: n,
      depth: i,
      stencil: s,
      antialias: a,
      premultipliedAlpha: o,
      preserveDrawingBuffer: l,
      powerPreference: c,
      failIfMajorPerformanceCaveat: h,
    };
    if (
      (e.addEventListener("webglcontextlost", fe, !1),
      e.addEventListener("webglcontextrestored", Ce, !1),
      H === null)
    ) {
      const F = ["webgl2", "webgl", "experimental-webgl"];
      if ((y.isWebGL1Renderer === !0 && F.shift(), (H = De(F, _)), H === null))
        throw De(F)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    H.getShaderPrecisionFormat === void 0 &&
      (H.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1,
        };
      });
  } catch (_) {
    throw (console.error("THREE.WebGLRenderer: " + _.message), _);
  }
  let Se,
    ge,
    de,
    Te,
    we,
    be,
    J,
    Q,
    ee,
    ce,
    re,
    M,
    w,
    U,
    V,
    ne,
    oe,
    Ee,
    T,
    S,
    j,
    Y;

  function le() {
    (Se = new ff(H)),
      (ge = new hf(H, Se, r)),
      Se.init(ge),
      (j = new Up(H, Se, ge)),
      (de = new Op(H, Se, ge)),
      (Te = new gf()),
      (we = new Ap()),
      (be = new Hp(H, Se, de, we, ge, j, Te)),
      (J = new df(y)),
      (Q = new Bh(H, ge)),
      (Y = new lf(H, Se, Q, ge)),
      (ee = new pf(H, Q, Te, Y)),
      (ce = new _f(H, ee, Q, Te)),
      (Ee = new xf(H)),
      (V = new uf(we)),
      (re = new Ep(y, J, Se, ge, Y, V)),
      (M = new Wp(we)),
      (w = new Rp(we)),
      (U = new zp(Se, ge)),
      (oe = new of(y, J, de, ce, o)),
      (ne = new Jo(y, ce, ge)),
      (T = new cf(H, Se, Te, ge)),
      (S = new mf(H, Se, Te, ge)),
      (Te.programs = re.programs),
      (y.capabilities = ge),
      (y.extensions = Se),
      (y.properties = we),
      (y.renderLists = w),
      (y.shadowMap = ne),
      (y.state = de),
      (y.info = Te);
  }
  le();
  const W = new Vp(y, H);
  (this.xr = W),
    (this.getContext = function () {
      return H;
    }),
    (this.getContextAttributes = function () {
      return H.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const _ = Se.get("WEBGL_lose_context");
      _ && _.loseContext();
    }),
    (this.forceContextRestore = function () {
      const _ = Se.get("WEBGL_lose_context");
      _ && _.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return q;
    }),
    (this.setPixelRatio = function (_) {
      _ !== void 0 && ((q = _), this.setSize(B, G, !1));
    }),
    (this.getSize = function (_) {
      return (
        _ === void 0 &&
          (console.warn(
            "WebGLRenderer: .getsize() now requires a Vector2 as an argument"
          ),
          (_ = new Z())),
        _.set(B, G)
      );
    }),
    (this.setSize = function (_, F, I) {
      if (W.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (B = _),
        (G = F),
        (e.width = Math.floor(_ * q)),
        (e.height = Math.floor(F * q)),
        I !== !1 && ((e.style.width = _ + "px"), (e.style.height = F + "px")),
        this.setViewport(0, 0, _, F);
    }),
    (this.getDrawingBufferSize = function (_) {
      return (
        _ === void 0 &&
          (console.warn(
            "WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"
          ),
          (_ = new Z())),
        _.set(B * q, G * q).floor()
      );
    }),
    (this.setDrawingBufferSize = function (_, F, I) {
      (B = _),
        (G = F),
        (q = I),
        (e.width = Math.floor(_ * I)),
        (e.height = Math.floor(F * I)),
        this.setViewport(0, 0, _, F);
    }),
    (this.getCurrentViewport = function (_) {
      return (
        _ === void 0 &&
          (console.warn(
            "WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"
          ),
          (_ = new Fe())),
        _.copy(x)
      );
    }),
    (this.getViewport = function (_) {
      return _.copy(P);
    }),
    (this.setViewport = function (_, F, I, k) {
      _.isVector4 ? P.set(_.x, _.y, _.z, _.w) : P.set(_, F, I, k),
        de.viewport(x.copy(P).multiplyScalar(q).floor());
    }),
    (this.getScissor = function (_) {
      return _.copy(D);
    }),
    (this.setScissor = function (_, F, I, k) {
      _.isVector4 ? D.set(_.x, _.y, _.z, _.w) : D.set(_, F, I, k),
        de.scissor(N.copy(D).multiplyScalar(q).floor());
    }),
    (this.getScissorTest = function () {
      return R;
    }),
    (this.setScissorTest = function (_) {
      de.setScissorTest((R = _));
    }),
    (this.setOpaqueSort = function (_) {
      O = _;
    }),
    (this.setTransparentSort = function (_) {
      C = _;
    }),
    (this.getClearColor = function (_) {
      return (
        _ === void 0 &&
          (console.warn(
            "WebGLRenderer: .getClearColor() now requires a Color as an argument"
          ),
          (_ = new he())),
        _.copy(oe.getClearColor())
      );
    }),
    (this.setClearColor = function () {
      oe.setClearColor.apply(oe, arguments);
    }),
    (this.getClearAlpha = function () {
      return oe.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      oe.setClearAlpha.apply(oe, arguments);
    }),
    (this.clear = function (_, F, I) {
      let k = 0;
      (_ === void 0 || _) && (k |= 16384),
        (F === void 0 || F) && (k |= 256),
        (I === void 0 || I) && (k |= 1024),
        H.clear(k);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", fe, !1),
        e.removeEventListener("webglcontextrestored", Ce, !1),
        w.dispose(),
        U.dispose(),
        we.dispose(),
        J.dispose(),
        ce.dispose(),
        Y.dispose(),
        W.dispose(),
        W.removeEventListener("sessionstart", qs),
        W.removeEventListener("sessionend", Xs),
        on.stop();
    });

  function fe(_) {
    _.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (v = !0);
  }

  function Ce() {
    console.log("THREE.WebGLRenderer: Context Restored."), (v = !1);
    const _ = Te.autoReset,
      F = ne.enabled,
      I = ne.autoUpdate,
      k = ne.needsUpdate,
      ie = ne.type;
    le(),
      (Te.autoReset = _),
      (ne.enabled = F),
      (ne.autoUpdate = I),
      (ne.needsUpdate = k),
      (ne.type = ie);
  }

  function Pe(_) {
    const F = _.target;
    F.removeEventListener("dispose", Pe), Qe(F);
  }

  function Qe(_) {
    Ge(_), we.remove(_);
  }

  function Ge(_) {
    const F = we.get(_).programs;
    F !== void 0 &&
      F.forEach(function (I) {
        re.releaseProgram(I);
      });
  }

  function Ft(_, F) {
    _.render(function (I) {
      y.renderBufferImmediate(I, F);
    });
  }
  (this.renderBufferImmediate = function (_, F) {
    Y.initAttributes();
    const I = we.get(_);
    _.hasPositions && !I.position && (I.position = H.createBuffer()),
      _.hasNormals && !I.normal && (I.normal = H.createBuffer()),
      _.hasUvs && !I.uv && (I.uv = H.createBuffer()),
      _.hasColors && !I.color && (I.color = H.createBuffer());
    const k = F.getAttributes();
    _.hasPositions &&
      (H.bindBuffer(34962, I.position),
      H.bufferData(34962, _.positionArray, 35048),
      Y.enableAttribute(k.position),
      H.vertexAttribPointer(k.position, 3, 5126, !1, 0, 0)),
      _.hasNormals &&
        (H.bindBuffer(34962, I.normal),
        H.bufferData(34962, _.normalArray, 35048),
        Y.enableAttribute(k.normal),
        H.vertexAttribPointer(k.normal, 3, 5126, !1, 0, 0)),
      _.hasUvs &&
        (H.bindBuffer(34962, I.uv),
        H.bufferData(34962, _.uvArray, 35048),
        Y.enableAttribute(k.uv),
        H.vertexAttribPointer(k.uv, 2, 5126, !1, 0, 0)),
      _.hasColors &&
        (H.bindBuffer(34962, I.color),
        H.bufferData(34962, _.colorArray, 35048),
        Y.enableAttribute(k.color),
        H.vertexAttribPointer(k.color, 3, 5126, !1, 0, 0)),
      Y.disableUnusedAttributes(),
      H.drawArrays(4, 0, _.count),
      (_.count = 0);
  }),
    (this.renderBufferDirect = function (_, F, I, k, ie, Ae) {
      F === null && (F = ue);
      const ye = ie.isMesh && ie.matrixWorld.determinant() < 0,
        _e = Qs(_, F, k, ie);
      de.setMaterial(k, ye);
      let Be = I.index;
      const xe = I.attributes.position;
      if (Be === null) {
        if (xe === void 0 || xe.count === 0) return;
      } else if (Be.count === 0) return;
      let Re = 1;
      k.wireframe === !0 && ((Be = ee.getWireframeAttribute(I)), (Re = 2)),
        (k.morphTargets || k.morphNormals) && Ee.update(ie, I, k, _e),
        Y.setup(ie, k, _e, I, Be);
      let ve,
        Ie = T;
      Be !== null && ((ve = Q.get(Be)), (Ie = S), Ie.setIndex(ve));
      const Ct = Be !== null ? Be.count : xe.count,
        st = I.drawRange.start * Re,
        ln = I.drawRange.count * Re,
        qe = Ae !== null ? Ae.start * Re : 0,
        cn = Ae !== null ? Ae.count * Re : 1 / 0,
        je = Math.max(st, qe),
        Tr = Math.min(Ct, st + ln, qe + cn) - 1,
        ht = Math.max(0, Tr - je + 1);
      if (ht !== 0) {
        if (ie.isMesh)
          k.wireframe === !0
            ? (de.setLineWidth(k.wireframeLinewidth * me()), Ie.setMode(1))
            : Ie.setMode(4);
        else if (ie.isLine) {
          let zt = k.linewidth;
          zt === void 0 && (zt = 1),
            de.setLineWidth(zt * me()),
            ie.isLineSegments
              ? Ie.setMode(1)
              : ie.isLineLoop
              ? Ie.setMode(2)
              : Ie.setMode(3);
        } else ie.isPoints ? Ie.setMode(0) : ie.isSprite && Ie.setMode(4);
        if (ie.isInstancedMesh) Ie.renderInstances(je, ht, ie.count);
        else if (I.isInstancedBufferGeometry) {
          const zt = Math.min(I.instanceCount, I._maxInstanceCount);
          Ie.renderInstances(je, ht, zt);
        } else Ie.render(je, ht);
      }
    }),
    (this.compile = function (_, F) {
      (u = U.get(_)),
        u.init(),
        _.traverseVisible(function (I) {
          I.isLight &&
            I.layers.test(F.layers) &&
            (u.pushLight(I), I.castShadow && u.pushShadow(I));
        }),
        u.setupLights(),
        _.traverse(function (I) {
          const k = I.material;
          if (k)
            if (Array.isArray(k))
              for (let ie = 0; ie < k.length; ie++) {
                const Ae = k[ie];
                Sr(Ae, _, I);
              }
            else Sr(k, _, I);
        });
    });
  let wt = null;

  function Ml(_) {
    wt && wt(_);
  }

  function qs() {
    on.stop();
  }

  function Xs() {
    on.start();
  }
  const on = new ko();
  on.setAnimationLoop(Ml),
    typeof window < "u" && on.setContext(window),
    (this.setAnimationLoop = function (_) {
      (wt = _), W.setAnimationLoop(_), _ === null ? on.stop() : on.start();
    }),
    W.addEventListener("sessionstart", qs),
    W.addEventListener("sessionend", Xs),
    (this.render = function (_, F) {
      let I, k;
      if (
        (arguments[2] !== void 0 &&
          (console.warn(
            "THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."
          ),
          (I = arguments[2])),
        arguments[3] !== void 0 &&
          (console.warn(
            "THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."
          ),
          (k = arguments[3])),
        F !== void 0 && F.isCamera !== !0)
      ) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (v === !0) return;
      _.autoUpdate === !0 && _.updateMatrixWorld(),
        F.parent === null && F.updateMatrixWorld(),
        W.enabled === !0 && W.isPresenting === !0 && (F = W.getCamera(F)),
        _.isScene === !0 && _.onBeforeRender(y, _, F, I || E),
        (u = U.get(_, m.length)),
        u.init(),
        m.push(u),
        ae.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse),
        X.setFromProjectionMatrix(ae),
        (K = this.localClippingEnabled),
        ($ = V.init(this.clippingPlanes, K, F)),
        (d = w.get(_, f.length)),
        d.init(),
        f.push(d),
        Ys(_, F, 0, y.sortObjects),
        d.finish(),
        y.sortObjects === !0 && d.sort(O, C),
        $ === !0 && V.beginShadows();
      const ie = u.state.shadowsArray;
      ne.render(ie, _, F),
        u.setupLights(),
        u.setupLightsView(F),
        $ === !0 && V.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        I !== void 0 && this.setRenderTarget(I),
        oe.render(d, _, F, k);
      const Ae = d.opaque,
        ye = d.transparent;
      Ae.length > 0 && Zs(Ae, _, F),
        ye.length > 0 && Zs(ye, _, F),
        E !== null &&
          (be.updateRenderTargetMipmap(E), be.updateMultisampleRenderTarget(E)),
        _.isScene === !0 && _.onAfterRender(y, _, F),
        de.buffers.depth.setTest(!0),
        de.buffers.depth.setMask(!0),
        de.buffers.color.setMask(!0),
        de.setPolygonOffset(!1),
        Y.resetDefaultState(),
        (L = -1),
        (A = null),
        m.pop(),
        m.length > 0 ? (u = m[m.length - 1]) : (u = null),
        f.pop(),
        f.length > 0 ? (d = f[f.length - 1]) : (d = null);
    });

  function Ys(_, F, I, k) {
    if (_.visible === !1) return;
    if (_.layers.test(F.layers)) {
      if (_.isGroup) I = _.renderOrder;
      else if (_.isLOD) _.autoUpdate === !0 && _.update(F);
      else if (_.isLight) u.pushLight(_), _.castShadow && u.pushShadow(_);
      else if (_.isSprite) {
        if (!_.frustumCulled || X.intersectsSprite(_)) {
          k && se.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ae);
          const ye = ce.update(_),
            _e = _.material;
          _e.visible && d.push(_, ye, _e, I, se.z, null);
        }
      } else if (_.isImmediateRenderObject)
        k && se.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ae),
          d.push(_, null, _.material, I, se.z, null);
      else if (
        (_.isMesh || _.isLine || _.isPoints) &&
        (_.isSkinnedMesh &&
          _.skeleton.frame !== Te.render.frame &&
          (_.skeleton.update(), (_.skeleton.frame = Te.render.frame)),
        !_.frustumCulled || X.intersectsObject(_))
      ) {
        k && se.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ae);
        const ye = ce.update(_),
          _e = _.material;
        if (Array.isArray(_e)) {
          const Be = ye.groups;
          for (let xe = 0, Re = Be.length; xe < Re; xe++) {
            const ve = Be[xe],
              Ie = _e[ve.materialIndex];
            Ie && Ie.visible && d.push(_, ye, Ie, I, se.z, ve);
          }
        } else _e.visible && d.push(_, ye, _e, I, se.z, null);
      }
    }
    const Ae = _.children;
    for (let ye = 0, _e = Ae.length; ye < _e; ye++) Ys(Ae[ye], F, I, k);
  }

  function Zs(_, F, I) {
    const k = F.isScene === !0 ? F.overrideMaterial : null;
    for (let ie = 0, Ae = _.length; ie < Ae; ie++) {
      const ye = _[ie],
        _e = ye.object,
        Be = ye.geometry,
        xe = k === null ? ye.material : k,
        Re = ye.group;
      if (I.isArrayCamera) {
        const ve = I.cameras;
        for (let Ie = 0, Ct = ve.length; Ie < Ct; Ie++) {
          const st = ve[Ie];
          _e.layers.test(st.layers) &&
            (de.viewport(x.copy(st.viewport)),
            u.setupLightsView(st),
            Js(_e, F, st, Be, xe, Re));
        }
      } else Js(_e, F, I, Be, xe, Re);
    }
  }

  function Js(_, F, I, k, ie, Ae) {
    if (
      (_.onBeforeRender(y, F, I, k, ie, Ae),
      _.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, _.matrixWorld),
      _.normalMatrix.getNormalMatrix(_.modelViewMatrix),
      _.isImmediateRenderObject)
    ) {
      const ye = Qs(I, F, ie, _);
      de.setMaterial(ie), Y.reset(), Ft(_, ye);
    } else y.renderBufferDirect(I, F, k, ie, _, Ae);
    _.onAfterRender(y, F, I, k, ie, Ae);
  }

  function Sr(_, F, I) {
    F.isScene !== !0 && (F = ue);
    const k = we.get(_),
      ie = u.state.lights,
      Ae = u.state.shadowsArray,
      ye = ie.state.version,
      _e = re.getParameters(_, ie.state, Ae, F, I),
      Be = re.getProgramCacheKey(_e);
    let xe = k.programs;
    (k.environment = _.isMeshStandardMaterial ? F.environment : null),
      (k.fog = F.fog),
      (k.envMap = J.get(_.envMap || k.environment)),
      xe === void 0 &&
        (_.addEventListener("dispose", Pe),
        (xe = new Map()),
        (k.programs = xe));
    let Re = xe.get(Be);
    if (Re !== void 0) {
      if (k.currentProgram === Re && k.lightsStateVersion === ye)
        return Ks(_, _e), Re;
    } else
      (_e.uniforms = re.getUniforms(_)),
        _.onBuild(_e, y),
        _.onBeforeCompile(_e, y),
        (Re = re.acquireProgram(_e, Be)),
        xe.set(Be, Re),
        (k.uniforms = _e.uniforms);
    const ve = k.uniforms;
    ((!_.isShaderMaterial && !_.isRawShaderMaterial) || _.clipping === !0) &&
      (ve.clippingPlanes = V.uniform),
      Ks(_, _e),
      (k.needsLights = Tl(_)),
      (k.lightsStateVersion = ye),
      k.needsLights &&
        ((ve.ambientLightColor.value = ie.state.ambient),
        (ve.lightProbe.value = ie.state.probe),
        (ve.directionalLights.value = ie.state.directional),
        (ve.directionalLightShadows.value = ie.state.directionalShadow),
        (ve.spotLights.value = ie.state.spot),
        (ve.spotLightShadows.value = ie.state.spotShadow),
        (ve.rectAreaLights.value = ie.state.rectArea),
        (ve.ltc_1.value = ie.state.rectAreaLTC1),
        (ve.ltc_2.value = ie.state.rectAreaLTC2),
        (ve.pointLights.value = ie.state.point),
        (ve.pointLightShadows.value = ie.state.pointShadow),
        (ve.hemisphereLights.value = ie.state.hemi),
        (ve.directionalShadowMap.value = ie.state.directionalShadowMap),
        (ve.directionalShadowMatrix.value = ie.state.directionalShadowMatrix),
        (ve.spotShadowMap.value = ie.state.spotShadowMap),
        (ve.spotShadowMatrix.value = ie.state.spotShadowMatrix),
        (ve.pointShadowMap.value = ie.state.pointShadowMap),
        (ve.pointShadowMatrix.value = ie.state.pointShadowMatrix));
    const Ie = Re.getUniforms(),
      Ct = en.seqWithValue(Ie.seq, ve);
    return (k.currentProgram = Re), (k.uniformsList = Ct), Re;
  }

  function Ks(_, F) {
    const I = we.get(_);
    (I.outputEncoding = F.outputEncoding),
      (I.instancing = F.instancing),
      (I.numClippingPlanes = F.numClippingPlanes),
      (I.numIntersection = F.numClipIntersection),
      (I.vertexAlphas = F.vertexAlphas);
  }

  function Qs(_, F, I, k) {
    F.isScene !== !0 && (F = ue), be.resetTextureUnits();
    const ie = F.fog,
      Ae = I.isMeshStandardMaterial ? F.environment : null,
      ye = E === null ? y.outputEncoding : E.texture.encoding,
      _e = J.get(I.envMap || Ae),
      Be =
        I.vertexColors === !0 &&
        k.geometry &&
        k.geometry.attributes.color &&
        k.geometry.attributes.color.itemSize === 4,
      xe = we.get(I),
      Re = u.state.lights;
    if ($ === !0 && (K === !0 || _ !== A)) {
      const je = _ === A && I.id === L;
      V.setState(I, _, je);
    }
    let ve = !1;
    I.version === xe.__version
      ? ((xe.needsLights && xe.lightsStateVersion !== Re.state.version) ||
          xe.outputEncoding !== ye ||
          (k.isInstancedMesh && xe.instancing === !1) ||
          (!k.isInstancedMesh && xe.instancing === !0) ||
          xe.envMap !== _e ||
          (I.fog && xe.fog !== ie) ||
          (xe.numClippingPlanes !== void 0 &&
            (xe.numClippingPlanes !== V.numPlanes ||
              xe.numIntersection !== V.numIntersection)) ||
          xe.vertexAlphas !== Be) &&
        (ve = !0)
      : ((ve = !0), (xe.__version = I.version));
    let Ie = xe.currentProgram;
    ve === !0 && (Ie = Sr(I, F, k));
    let Ct = !1,
      st = !1,
      ln = !1;
    const qe = Ie.getUniforms(),
      cn = xe.uniforms;
    if (
      (de.useProgram(Ie.program) && ((Ct = !0), (st = !0), (ln = !0)),
      I.id !== L && ((L = I.id), (st = !0)),
      Ct || A !== _)
    ) {
      if (
        (qe.setValue(H, "projectionMatrix", _.projectionMatrix),
        ge.logarithmicDepthBuffer &&
          qe.setValue(H, "logDepthBufFC", 2 / (Math.log(_.far + 1) / Math.LN2)),
        A !== _ && ((A = _), (st = !0), (ln = !0)),
        I.isShaderMaterial ||
          I.isMeshPhongMaterial ||
          I.isMeshToonMaterial ||
          I.isMeshStandardMaterial ||
          I.envMap)
      ) {
        const je = qe.map.cameraPosition;
        je !== void 0 &&
          je.setValue(H, se.setFromMatrixPosition(_.matrixWorld));
      }
      (I.isMeshPhongMaterial ||
        I.isMeshToonMaterial ||
        I.isMeshLambertMaterial ||
        I.isMeshBasicMaterial ||
        I.isMeshStandardMaterial ||
        I.isShaderMaterial) &&
        qe.setValue(H, "isOrthographic", _.isOrthographicCamera === !0),
        (I.isMeshPhongMaterial ||
          I.isMeshToonMaterial ||
          I.isMeshLambertMaterial ||
          I.isMeshBasicMaterial ||
          I.isMeshStandardMaterial ||
          I.isShaderMaterial ||
          I.isShadowMaterial ||
          I.skinning) &&
          qe.setValue(H, "viewMatrix", _.matrixWorldInverse);
    }
    if (I.skinning) {
      qe.setOptional(H, k, "bindMatrix"),
        qe.setOptional(H, k, "bindMatrixInverse");
      const je = k.skeleton;
      if (je) {
        const Tr = je.bones;
        if (ge.floatVertexTextures) {
          if (je.boneTexture === null) {
            let ht = Math.sqrt(Tr.length * 4);
            (ht = Co(ht)), (ht = Math.max(ht, 4));
            const zt = new Float32Array(ht * ht * 4);
            zt.set(je.boneMatrices);
            const El = new Bo(zt, ht, ht, At, $t);
            (je.boneMatrices = zt),
              (je.boneTexture = El),
              (je.boneTextureSize = ht);
          }
          qe.setValue(H, "boneTexture", je.boneTexture, be),
            qe.setValue(H, "boneTextureSize", je.boneTextureSize);
        } else qe.setOptional(H, je, "boneMatrices");
      }
    }
    return (
      (st || xe.receiveShadow !== k.receiveShadow) &&
        ((xe.receiveShadow = k.receiveShadow),
        qe.setValue(H, "receiveShadow", k.receiveShadow)),
      st &&
        (qe.setValue(H, "toneMappingExposure", y.toneMappingExposure),
        xe.needsLights && Sl(cn, ln),
        ie && I.fog && M.refreshFogUniforms(cn, ie),
        M.refreshMaterialUniforms(cn, I, q, G),
        en.upload(H, xe.uniformsList, cn, be)),
      I.isShaderMaterial &&
        I.uniformsNeedUpdate === !0 &&
        (en.upload(H, xe.uniformsList, cn, be), (I.uniformsNeedUpdate = !1)),
      I.isSpriteMaterial && qe.setValue(H, "center", k.center),
      qe.setValue(H, "modelViewMatrix", k.modelViewMatrix),
      qe.setValue(H, "normalMatrix", k.normalMatrix),
      qe.setValue(H, "modelMatrix", k.matrixWorld),
      Ie
    );
  }

  function Sl(_, F) {
    (_.ambientLightColor.needsUpdate = F),
      (_.lightProbe.needsUpdate = F),
      (_.directionalLights.needsUpdate = F),
      (_.directionalLightShadows.needsUpdate = F),
      (_.pointLights.needsUpdate = F),
      (_.pointLightShadows.needsUpdate = F),
      (_.spotLights.needsUpdate = F),
      (_.spotLightShadows.needsUpdate = F),
      (_.rectAreaLights.needsUpdate = F),
      (_.hemisphereLights.needsUpdate = F);
  }

  function Tl(_) {
    return (
      _.isMeshLambertMaterial ||
      _.isMeshToonMaterial ||
      _.isMeshPhongMaterial ||
      _.isMeshStandardMaterial ||
      _.isShadowMaterial ||
      (_.isShaderMaterial && _.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return g;
  }),
    (this.getActiveMipmapLevel = function () {
      return p;
    }),
    (this.getRenderTarget = function () {
      return E;
    }),
    (this.setRenderTarget = function (_, F = 0, I = 0) {
      (E = _),
        (g = F),
        (p = I),
        _ && we.get(_).__webglFramebuffer === void 0 && be.setupRenderTarget(_);
      let k = null,
        ie = !1,
        Ae = !1;
      if (_) {
        const ye = _.texture;
        (ye.isDataTexture3D || ye.isDataTexture2DArray) && (Ae = !0);
        const _e = we.get(_).__webglFramebuffer;
        _.isWebGLCubeRenderTarget
          ? ((k = _e[F]), (ie = !0))
          : _.isWebGLMultisampleRenderTarget
          ? (k = we.get(_).__webglMultisampledFramebuffer)
          : (k = _e),
          x.copy(_.viewport),
          N.copy(_.scissor),
          (z = _.scissorTest);
      } else
        x.copy(P).multiplyScalar(q).floor(),
          N.copy(D).multiplyScalar(q).floor(),
          (z = R);
      if (
        (de.bindFramebuffer(36160, k),
        de.viewport(x),
        de.scissor(N),
        de.setScissorTest(z),
        ie)
      ) {
        const ye = we.get(_.texture);
        H.framebufferTexture2D(36160, 36064, 34069 + F, ye.__webglTexture, I);
      } else if (Ae) {
        const ye = we.get(_.texture),
          _e = F || 0;
        H.framebufferTextureLayer(36160, 36064, ye.__webglTexture, I || 0, _e);
      }
    }),
    (this.readRenderTargetPixels = function (_, F, I, k, ie, Ae, ye) {
      if (!(_ && _.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let _e = we.get(_).__webglFramebuffer;
      if ((_.isWebGLCubeRenderTarget && ye !== void 0 && (_e = _e[ye]), _e)) {
        de.bindFramebuffer(36160, _e);
        try {
          const Be = _.texture,
            xe = Be.format,
            Re = Be.type;
          if (xe !== At && j.convert(xe) !== H.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const ve =
            Re === or &&
            (Se.has("EXT_color_buffer_half_float") ||
              (ge.isWebGL2 && Se.has("EXT_color_buffer_float")));
          if (
            Re !== Ts &&
            j.convert(Re) !== H.getParameter(35738) &&
            !(
              Re === $t &&
              (ge.isWebGL2 ||
                Se.has("OES_texture_float") ||
                Se.has("WEBGL_color_buffer_float"))
            ) &&
            !ve
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          H.checkFramebufferStatus(36160) === 36053
            ? F >= 0 &&
              F <= _.width - k &&
              I >= 0 &&
              I <= _.height - ie &&
              H.readPixels(F, I, k, ie, j.convert(xe), j.convert(Re), Ae)
            : console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
              );
        } finally {
          const Be = E !== null ? we.get(E).__webglFramebuffer : null;
          de.bindFramebuffer(36160, Be);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (_, F, I = 0) {
      const k = Math.pow(2, -I),
        ie = Math.floor(F.image.width * k),
        Ae = Math.floor(F.image.height * k),
        ye = j.convert(F.format);
      be.setTexture2D(F, 0),
        H.copyTexImage2D(3553, I, ye, _.x, _.y, ie, Ae, 0),
        de.unbindTexture();
    }),
    (this.copyTextureToTexture = function (_, F, I, k = 0) {
      const ie = F.image.width,
        Ae = F.image.height,
        ye = j.convert(I.format),
        _e = j.convert(I.type);
      be.setTexture2D(I, 0),
        H.pixelStorei(37440, I.flipY),
        H.pixelStorei(37441, I.premultiplyAlpha),
        H.pixelStorei(3317, I.unpackAlignment),
        F.isDataTexture
          ? H.texSubImage2D(3553, k, _.x, _.y, ie, Ae, ye, _e, F.image.data)
          : F.isCompressedTexture
          ? H.compressedTexSubImage2D(
              3553,
              k,
              _.x,
              _.y,
              F.mipmaps[0].width,
              F.mipmaps[0].height,
              ye,
              F.mipmaps[0].data
            )
          : H.texSubImage2D(3553, k, _.x, _.y, ye, _e, F.image),
        k === 0 && I.generateMipmaps && H.generateMipmap(3553),
        de.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (_, F, I, k, ie = 0) {
      if (y.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const { width: Ae, height: ye, data: _e } = I.image,
        Be = j.convert(k.format),
        xe = j.convert(k.type);
      let Re;
      if (k.isDataTexture3D) be.setTexture3D(k, 0), (Re = 32879);
      else if (k.isDataTexture2DArray) be.setTexture2DArray(k, 0), (Re = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      H.pixelStorei(37440, k.flipY),
        H.pixelStorei(37441, k.premultiplyAlpha),
        H.pixelStorei(3317, k.unpackAlignment);
      const ve = H.getParameter(3314),
        Ie = H.getParameter(32878),
        Ct = H.getParameter(3316),
        st = H.getParameter(3315),
        ln = H.getParameter(32877);
      H.pixelStorei(3314, Ae),
        H.pixelStorei(32878, ye),
        H.pixelStorei(3316, _.min.x),
        H.pixelStorei(3315, _.min.y),
        H.pixelStorei(32877, _.min.z),
        H.texSubImage3D(
          Re,
          ie,
          F.x,
          F.y,
          F.z,
          _.max.x - _.min.x + 1,
          _.max.y - _.min.y + 1,
          _.max.z - _.min.z + 1,
          Be,
          xe,
          _e
        ),
        H.pixelStorei(3314, ve),
        H.pixelStorei(32878, Ie),
        H.pixelStorei(3316, Ct),
        H.pixelStorei(3315, st),
        H.pixelStorei(32877, ln),
        ie === 0 && k.generateMipmaps && H.generateMipmap(Re),
        de.unbindTexture();
    }),
    (this.initTexture = function (_) {
      be.setTexture2D(_, 0), de.unbindTexture();
    }),
    (this.resetState = function () {
      (g = 0), (p = 0), (E = null), de.reset(), Y.reset();
    }),
    typeof __THREE_DEVTOOLS__ < "u" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", {
          detail: this,
        })
      );
}
class qp extends ze {}
qp.prototype.isWebGL1Renderer = !0;
class Is extends Le {
  constructor() {
    super(),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", {
            detail: this,
          })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.autoUpdate = e.autoUpdate),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.background !== null &&
        (t.object.background = this.background.toJSON(e)),
      this.environment !== null &&
        (t.object.environment = this.environment.toJSON(e)),
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      t
    );
  }
}
Is.prototype.isScene = !0;
class yn {
  constructor(e, t) {
    (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = xi),
      (this.updateRange = {
        offset: 0,
        count: -1,
      }),
      (this.version = 0),
      (this.uuid = Lt()),
      (this.onUploadCallback = function () {});
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Lt()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new yn(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Lt()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
yn.prototype.isInterleavedBuffer = !0;
const Ve = new b();
class wi {
  constructor(e, t, n, i) {
    (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = i === !0);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      (Ve.x = this.getX(t)),
        (Ve.y = this.getY(t)),
        (Ve.z = this.getZ(t)),
        Ve.applyMatrix4(e),
        this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Ve.x = this.getX(t)),
        (Ve.y = this.getY(t)),
        (Ve.z = this.getZ(t)),
        Ve.applyNormalMatrix(e),
        this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Ve.x = this.getX(t)),
        (Ve.y = this.getY(t)),
        (Ve.z = this.getZ(t)),
        Ve.transformDirection(e),
        this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  setX(e, t) {
    return (this.data.array[e * this.data.stride + this.offset] = t), this;
  }
  setY(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 1] = t), this;
  }
  setZ(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 2] = t), this;
  }
  setW(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 3] = t), this;
  }
  getX(e) {
    return this.data.array[e * this.data.stride + this.offset];
  }
  getY(e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  }
  getZ(e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  }
  getW(e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      (this.data.array[e + 3] = s),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return new Je(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new wi(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
wi.prototype.isInterleavedBufferAttribute = !0;
class Qo extends Ke {
  constructor(e) {
    super(),
      (this.type = "SpriteMaterial"),
      (this.color = new he(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.rotation = e.rotation),
      (this.sizeAttenuation = e.sizeAttenuation),
      this
    );
  }
}
Qo.prototype.isSpriteMaterial = !0;
let Nn;
const ii = new b(),
  Fn = new b(),
  zn = new b(),
  Bn = new Z(),
  ri = new Z(),
  $o = new pe(),
  Xi = new b(),
  si = new b(),
  Yi = new b(),
  qa = new Z(),
  $r = new Z(),
  Xa = new Z();
class Xp extends Le {
  constructor(e) {
    if ((super(), (this.type = "Sprite"), Nn === void 0)) {
      Nn = new ke();
      const t = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        n = new yn(t, 5);
      Nn.setIndex([0, 1, 2, 0, 2, 3]),
        Nn.setAttribute("position", new wi(n, 3, 0, !1)),
        Nn.setAttribute("uv", new wi(n, 2, 3, !1));
    }
    (this.geometry = Nn),
      (this.material = e !== void 0 ? e : new Qo()),
      (this.center = new Z(0.5, 0.5));
  }
  raycast(e, t) {
    e.camera === null &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
      ),
      Fn.setFromMatrixScale(this.matrixWorld),
      $o.copy(e.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        e.camera.matrixWorldInverse,
        this.matrixWorld
      ),
      zn.setFromMatrixPosition(this.modelViewMatrix),
      e.camera.isPerspectiveCamera &&
        this.material.sizeAttenuation === !1 &&
        Fn.multiplyScalar(-zn.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && ((s = Math.cos(n)), (i = Math.sin(n)));
    const a = this.center;
    Zi(Xi.set(-0.5, -0.5, 0), zn, a, Fn, i, s),
      Zi(si.set(0.5, -0.5, 0), zn, a, Fn, i, s),
      Zi(Yi.set(0.5, 0.5, 0), zn, a, Fn, i, s),
      qa.set(0, 0),
      $r.set(1, 0),
      Xa.set(1, 1);
    let o = e.ray.intersectTriangle(Xi, si, Yi, !1, ii);
    if (
      o === null &&
      (Zi(si.set(-0.5, 0.5, 0), zn, a, Fn, i, s),
      $r.set(0, 1),
      (o = e.ray.intersectTriangle(Xi, Yi, si, !1, ii)),
      o === null)
    )
      return;
    const l = e.ray.origin.distanceTo(ii);
    l < e.near ||
      l > e.far ||
      t.push({
        distance: l,
        point: ii.clone(),
        uv: Xe.getUV(ii, Xi, si, Yi, qa, $r, Xa, new Z()),
        face: null,
        object: this,
      });
  }
  copy(e) {
    return (
      super.copy(e),
      e.center !== void 0 && this.center.copy(e.center),
      (this.material = e.material),
      this
    );
  }
}
Xp.prototype.isSprite = !0;

function Zi(r, e, t, n, i, s) {
  Bn.subVectors(r, t).addScalar(0.5).multiply(n),
    i !== void 0
      ? ((ri.x = s * Bn.x - i * Bn.y), (ri.y = i * Bn.x + s * Bn.y))
      : ri.copy(Bn),
    r.copy(e),
    (r.x += ri.x),
    (r.y += ri.y),
    r.applyMatrix4($o);
}
const Ya = new b(),
  Za = new Fe(),
  Ja = new Fe(),
  Yp = new b(),
  Ka = new pe();
class el extends gt {
  constructor(e, t) {
    super(e, t),
      (this.type = "SkinnedMesh"),
      (this.bindMode = "attached"),
      (this.bindMatrix = new pe()),
      (this.bindMatrixInverse = new pe());
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      this
    );
  }
  bind(e, t) {
    (this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Fe(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      (e.x = t.getX(n)),
        (e.y = t.getY(n)),
        (e.z = t.getZ(n)),
        (e.w = t.getW(n));
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === "attached"
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === "detached"
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  boneTransform(e, t) {
    const n = this.skeleton,
      i = this.geometry;
    Za.fromBufferAttribute(i.attributes.skinIndex, e),
      Ja.fromBufferAttribute(i.attributes.skinWeight, e),
      Ya.fromBufferAttribute(i.attributes.position, e).applyMatrix4(
        this.bindMatrix
      ),
      t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = Ja.getComponent(s);
      if (a !== 0) {
        const o = Za.getComponent(s);
        Ka.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
          t.addScaledVector(Yp.copy(Ya).applyMatrix4(Ka), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
el.prototype.isSkinnedMesh = !0;
class Zp extends Le {
  constructor() {
    super(), (this.type = "Bone");
  }
}
Zp.prototype.isBone = !0;
const Qa = new pe(),
  $a = new pe(),
  Ji = [],
  ai = new gt();
class Jp extends gt {
  constructor(e, t, n) {
    super(e, t),
      (this.instanceMatrix = new Je(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.count = n),
      (this.frustumCulled = !1);
  }
  copy(e) {
    return (
      super.copy(e),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      ((ai.geometry = this.geometry),
      (ai.material = this.material),
      ai.material !== void 0)
    )
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, Qa),
          $a.multiplyMatrices(n, Qa),
          (ai.matrixWorld = $a),
          ai.raycast(e, Ji);
        for (let a = 0, o = Ji.length; a < o; a++) {
          const l = Ji[a];
          (l.instanceId = s), (l.object = this), t.push(l);
        }
        Ji.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null &&
      (this.instanceColor = new Je(new Float32Array(this.count * 3), 3)),
      t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
}
Jp.prototype.isInstancedMesh = !0;
class Ai extends Ke {
  constructor(e) {
    super(),
      (this.type = "LineBasicMaterial"),
      (this.color = new he(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.morphTargets = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.morphTargets = e.morphTargets),
      this
    );
  }
}
Ai.prototype.isLineBasicMaterial = !0;
const eo = new b(),
  to = new b(),
  no = new pe(),
  es = new gn(),
  Ki = new Xn();
class Ns extends Le {
  constructor(e = new ke(), t = new Ai()) {
    super(),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        const t = e.attributes.position,
          n = [0];
        for (let i = 1, s = t.count; i < s; i++)
          eo.fromBufferAttribute(t, i - 1),
            to.fromBufferAttribute(t, i),
            (n[i] = n[i - 1]),
            (n[i] += eo.distanceTo(to));
        e.setAttribute("lineDistance", new We(n, 1));
      } else
        console.warn(
          "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
    else
      e.isGeometry &&
        console.error(
          "THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ki.copy(n.boundingSphere),
      Ki.applyMatrix4(i),
      (Ki.radius += s),
      e.ray.intersectsSphere(Ki) === !1)
    )
      return;
    no.copy(i).invert(), es.copy(e.ray).applyMatrix4(no);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = new b(),
      h = new b(),
      d = new b(),
      u = new b(),
      f = this.isLineSegments ? 2 : 1;
    if (n.isBufferGeometry) {
      const m = n.index,
        v = n.attributes.position;
      if (m !== null) {
        const g = Math.max(0, a.start),
          p = Math.min(m.count, a.start + a.count);
        for (let E = g, L = p - 1; E < L; E += f) {
          const A = m.getX(E),
            x = m.getX(E + 1);
          if (
            (c.fromBufferAttribute(v, A),
            h.fromBufferAttribute(v, x),
            es.distanceSqToSegment(c, h, u, d) > l)
          )
            continue;
          u.applyMatrix4(this.matrixWorld);
          const z = e.ray.origin.distanceTo(u);
          z < e.near ||
            z > e.far ||
            t.push({
              distance: z,
              point: d.clone().applyMatrix4(this.matrixWorld),
              index: E,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      } else {
        const g = Math.max(0, a.start),
          p = Math.min(v.count, a.start + a.count);
        for (let E = g, L = p - 1; E < L; E += f) {
          if (
            (c.fromBufferAttribute(v, E),
            h.fromBufferAttribute(v, E + 1),
            es.distanceSqToSegment(c, h, u, d) > l)
          )
            continue;
          u.applyMatrix4(this.matrixWorld);
          const x = e.ray.origin.distanceTo(u);
          x < e.near ||
            x > e.far ||
            t.push({
              distance: x,
              point: d.clone().applyMatrix4(this.matrixWorld),
              index: E,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      }
    } else
      n.isGeometry &&
        console.error(
          "THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
  }
  updateMorphTargets() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes,
        n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let s = 0, a = i.length; s < a; s++) {
            const o = i[s].name || String(s);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[o] = s);
          }
        }
      }
    } else {
      const t = e.morphTargets;
      t !== void 0 &&
        t.length > 0 &&
        console.error(
          "THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
}
Ns.prototype.isLine = !0;
const io = new b(),
  ro = new b();
class Fs extends Ns {
  constructor(e, t) {
    super(e, t), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        const t = e.attributes.position,
          n = [];
        for (let i = 0, s = t.count; i < s; i += 2)
          io.fromBufferAttribute(t, i),
            ro.fromBufferAttribute(t, i + 1),
            (n[i] = i === 0 ? 0 : n[i - 1]),
            (n[i + 1] = n[i] + io.distanceTo(ro));
        e.setAttribute("lineDistance", new We(n, 1));
      } else
        console.warn(
          "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
    else
      e.isGeometry &&
        console.error(
          "THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    return this;
  }
}
Fs.prototype.isLineSegments = !0;
class Kp extends Ns {
  constructor(e, t) {
    super(e, t), (this.type = "LineLoop");
  }
}
Kp.prototype.isLineLoop = !0;
class tl extends Ke {
  constructor(e) {
    super(),
      (this.type = "PointsMaterial"),
      (this.color = new he(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.morphTargets = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.morphTargets = e.morphTargets),
      this
    );
  }
}
tl.prototype.isPointsMaterial = !0;
const so = new pe(),
  ps = new gn(),
  Qi = new Xn(),
  $i = new b();
class Qp extends Le {
  constructor(e = new ke(), t = new tl()) {
    super(),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Qi.copy(n.boundingSphere),
      Qi.applyMatrix4(i),
      (Qi.radius += s),
      e.ray.intersectsSphere(Qi) === !1)
    )
      return;
    so.copy(i).invert(), ps.copy(e.ray).applyMatrix4(so);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o;
    if (n.isBufferGeometry) {
      const c = n.index,
        d = n.attributes.position;
      if (c !== null) {
        const u = Math.max(0, a.start),
          f = Math.min(c.count, a.start + a.count);
        for (let m = u, y = f; m < y; m++) {
          const v = c.getX(m);
          $i.fromBufferAttribute(d, v), ao($i, v, l, i, e, t, this);
        }
      } else {
        const u = Math.max(0, a.start),
          f = Math.min(d.count, a.start + a.count);
        for (let m = u, y = f; m < y; m++)
          $i.fromBufferAttribute(d, m), ao($i, m, l, i, e, t, this);
      }
    } else
      console.error(
        "THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
      );
  }
  updateMorphTargets() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes,
        n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let s = 0, a = i.length; s < a; s++) {
            const o = i[s].name || String(s);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[o] = s);
          }
        }
      }
    } else {
      const t = e.morphTargets;
      t !== void 0 &&
        t.length > 0 &&
        console.error(
          "THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
}
Qp.prototype.isPoints = !0;

function ao(r, e, t, n, i, s, a) {
  const o = ps.distanceSqToPoint(r);
  if (o < t) {
    const l = new b();
    ps.closestPointToPoint(r, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      object: a,
    });
  }
}
class $p extends nt {
  constructor(e, t, n, i, s, a, o, l, c) {
    super(e, t, n, i, s, a, o, l, c),
      (this.format = o !== void 0 ? o : fn),
      (this.minFilter = a !== void 0 ? a : vt),
      (this.magFilter = s !== void 0 ? s : vt),
      (this.generateMipmaps = !1);
    const h = this;

    function d() {
      (h.needsUpdate = !0), e.requestVideoFrameCallback(d);
    }
    "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(d);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const e = this.image;
    "requestVideoFrameCallback" in e === !1 &&
      e.readyState >= e.HAVE_CURRENT_DATA &&
      (this.needsUpdate = !0);
  }
}
$p.prototype.isVideoTexture = !0;
class em extends nt {
  constructor(e, t, n, i, s, a, o, l, c, h, d, u) {
    super(null, a, o, l, c, h, i, s, d, u),
      (this.image = {
        width: t,
        height: n,
      }),
      (this.mipmaps = e),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
em.prototype.isCompressedTexture = !0;
class tm extends nt {
  constructor(e, t, n, i, s, a, o, l, c) {
    super(e, t, n, i, s, a, o, l, c), (this.needsUpdate = !0);
  }
}
tm.prototype.isCanvasTexture = !0;
class nm extends nt {
  constructor(e, t, n, i, s, a, o, l, c, h) {
    if (((h = h !== void 0 ? h : Gn), h !== Gn && h !== vi))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && h === Gn && (n = ar),
      n === void 0 && h === vi && (n = fi),
      super(null, i, s, a, o, l, h, n, c),
      (this.image = {
        width: e,
        height: t,
      }),
      (this.magFilter = o !== void 0 ? o : ot),
      (this.minFilter = l !== void 0 ? l : ot),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
nm.prototype.isDepthTexture = !0;
const im = {
  triangulate: function (r, e, t) {
    t = t || 2;
    const n = e && e.length,
      i = n ? e[0] * t : r.length;
    let s = nl(r, 0, i, t, !0);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l, c, h, d, u, f;
    if ((n && (s = lm(r, e, s, t)), r.length > 80 * t)) {
      (o = c = r[0]), (l = h = r[1]);
      for (let m = t; m < i; m += t)
        (d = r[m]),
          (u = r[m + 1]),
          d < o && (o = d),
          u < l && (l = u),
          d > c && (c = d),
          u > h && (h = u);
      (f = Math.max(c - o, h - l)), (f = f !== 0 ? 1 / f : 0);
    }
    return bi(s, a, t, o, l, f), a;
  },
};

function nl(r, e, t, n, i) {
  let s, a;
  if (i === xm(r, e, t, n) > 0)
    for (s = e; s < t; s += n) a = oo(s, r[s], r[s + 1], a);
  else for (s = t - n; s >= e; s -= n) a = oo(s, r[s], r[s + 1], a);
  return a && xr(a, a.next) && (Si(a), (a = a.next)), a;
}

function nn(r, e) {
  if (!r) return r;
  e || (e = r);
  let t = r,
    n;
  do
    if (
      ((n = !1), !t.steiner && (xr(t, t.next) || Ue(t.prev, t, t.next) === 0))
    ) {
      if ((Si(t), (t = e = t.prev), t === t.next)) break;
      n = !0;
    } else t = t.next;
  while (n || t !== e);
  return e;
}

function bi(r, e, t, n, i, s, a) {
  if (!r) return;
  !a && s && fm(r, n, i, s);
  let o = r,
    l,
    c;
  for (; r.prev !== r.next; ) {
    if (((l = r.prev), (c = r.next), s ? sm(r, n, i, s) : rm(r))) {
      e.push(l.i / t),
        e.push(r.i / t),
        e.push(c.i / t),
        Si(r),
        (r = c.next),
        (o = c.next);
      continue;
    }
    if (((r = c), r === o)) {
      a
        ? a === 1
          ? ((r = am(nn(r), e, t)), bi(r, e, t, n, i, s, 2))
          : a === 2 && om(r, e, t, n, i, s)
        : bi(nn(r), e, t, n, i, s, 1);
      break;
    }
  }
}

function rm(r) {
  const e = r.prev,
    t = r,
    n = r.next;
  if (Ue(e, t, n) >= 0) return !1;
  let i = r.next.next;
  for (; i !== r.prev; ) {
    if (
      Un(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) &&
      Ue(i.prev, i, i.next) >= 0
    )
      return !1;
    i = i.next;
  }
  return !0;
}

function sm(r, e, t, n) {
  const i = r.prev,
    s = r,
    a = r.next;
  if (Ue(i, s, a) >= 0) return !1;
  const o = i.x < s.x ? (i.x < a.x ? i.x : a.x) : s.x < a.x ? s.x : a.x,
    l = i.y < s.y ? (i.y < a.y ? i.y : a.y) : s.y < a.y ? s.y : a.y,
    c = i.x > s.x ? (i.x > a.x ? i.x : a.x) : s.x > a.x ? s.x : a.x,
    h = i.y > s.y ? (i.y > a.y ? i.y : a.y) : s.y > a.y ? s.y : a.y,
    d = ms(o, l, e, t, n),
    u = ms(c, h, e, t, n);
  let f = r.prevZ,
    m = r.nextZ;
  for (; f && f.z >= d && m && m.z <= u; ) {
    if (
      (f !== r.prev &&
        f !== r.next &&
        Un(i.x, i.y, s.x, s.y, a.x, a.y, f.x, f.y) &&
        Ue(f.prev, f, f.next) >= 0) ||
      ((f = f.prevZ),
      m !== r.prev &&
        m !== r.next &&
        Un(i.x, i.y, s.x, s.y, a.x, a.y, m.x, m.y) &&
        Ue(m.prev, m, m.next) >= 0)
    )
      return !1;
    m = m.nextZ;
  }
  for (; f && f.z >= d; ) {
    if (
      f !== r.prev &&
      f !== r.next &&
      Un(i.x, i.y, s.x, s.y, a.x, a.y, f.x, f.y) &&
      Ue(f.prev, f, f.next) >= 0
    )
      return !1;
    f = f.prevZ;
  }
  for (; m && m.z <= u; ) {
    if (
      m !== r.prev &&
      m !== r.next &&
      Un(i.x, i.y, s.x, s.y, a.x, a.y, m.x, m.y) &&
      Ue(m.prev, m, m.next) >= 0
    )
      return !1;
    m = m.nextZ;
  }
  return !0;
}

function am(r, e, t) {
  let n = r;
  do {
    const i = n.prev,
      s = n.next.next;
    !xr(i, s) &&
      il(i, n, n.next, s) &&
      Mi(i, s) &&
      Mi(s, i) &&
      (e.push(i.i / t),
      e.push(n.i / t),
      e.push(s.i / t),
      Si(n),
      Si(n.next),
      (n = r = s)),
      (n = n.next);
  } while (n !== r);
  return nn(n);
}

function om(r, e, t, n, i, s) {
  let a = r;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && gm(a, o)) {
        let l = rl(a, o);
        (a = nn(a, a.next)),
          (l = nn(l, l.next)),
          bi(a, e, t, n, i, s),
          bi(l, e, t, n, i, s);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== r);
}

function lm(r, e, t, n) {
  const i = [];
  let s, a, o, l, c;
  for (s = 0, a = e.length; s < a; s++)
    (o = e[s] * n),
      (l = s < a - 1 ? e[s + 1] * n : r.length),
      (c = nl(r, o, l, n, !1)),
      c === c.next && (c.steiner = !0),
      i.push(mm(c));
  for (i.sort(cm), s = 0; s < i.length; s++) hm(i[s], t), (t = nn(t, t.next));
  return t;
}

function cm(r, e) {
  return r.x - e.x;
}

function hm(r, e) {
  if (((e = um(r, e)), e)) {
    const t = rl(e, r);
    nn(e, e.next), nn(t, t.next);
  }
}

function um(r, e) {
  let t = e;
  const n = r.x,
    i = r.y;
  let s = -1 / 0,
    a;
  do {
    if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
      const u = t.x + ((i - t.y) * (t.next.x - t.x)) / (t.next.y - t.y);
      if (u <= n && u > s) {
        if (((s = u), u === n)) {
          if (i === t.y) return t;
          if (i === t.next.y) return t.next;
        }
        a = t.x < t.next.x ? t : t.next;
      }
    }
    t = t.next;
  } while (t !== e);
  if (!a) return null;
  if (n === s) return a;
  const o = a,
    l = a.x,
    c = a.y;
  let h = 1 / 0,
    d;
  t = a;
  do
    n >= t.x &&
      t.x >= l &&
      n !== t.x &&
      Un(i < c ? n : s, i, l, c, i < c ? s : n, i, t.x, t.y) &&
      ((d = Math.abs(i - t.y) / (n - t.x)),
      Mi(t, r) &&
        (d < h || (d === h && (t.x > a.x || (t.x === a.x && dm(a, t))))) &&
        ((a = t), (h = d))),
      (t = t.next);
  while (t !== o);
  return a;
}

function dm(r, e) {
  return Ue(r.prev, r, e.prev) < 0 && Ue(e.next, r, r.next) < 0;
}

function fm(r, e, t, n) {
  let i = r;
  do
    i.z === null && (i.z = ms(i.x, i.y, e, t, n)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next);
  while (i !== r);
  (i.prevZ.nextZ = null), (i.prevZ = null), pm(i);
}

function pm(r) {
  let e,
    t,
    n,
    i,
    s,
    a,
    o,
    l,
    c = 1;
  do {
    for (t = r, r = null, s = null, a = 0; t; ) {
      for (a++, n = t, o = 0, e = 0; e < c && (o++, (n = n.nextZ), !!n); e++);
      for (l = c; o > 0 || (l > 0 && n); )
        o !== 0 && (l === 0 || !n || t.z <= n.z)
          ? ((i = t), (t = t.nextZ), o--)
          : ((i = n), (n = n.nextZ), l--),
          s ? (s.nextZ = i) : (r = i),
          (i.prevZ = s),
          (s = i);
      t = n;
    }
    (s.nextZ = null), (c *= 2);
  } while (a > 1);
  return r;
}

function ms(r, e, t, n, i) {
  return (
    (r = 32767 * (r - t) * i),
    (e = 32767 * (e - n) * i),
    (r = (r | (r << 8)) & 16711935),
    (r = (r | (r << 4)) & 252645135),
    (r = (r | (r << 2)) & 858993459),
    (r = (r | (r << 1)) & 1431655765),
    (e = (e | (e << 8)) & 16711935),
    (e = (e | (e << 4)) & 252645135),
    (e = (e | (e << 2)) & 858993459),
    (e = (e | (e << 1)) & 1431655765),
    r | (e << 1)
  );
}

function mm(r) {
  let e = r,
    t = r;
  do (e.x < t.x || (e.x === t.x && e.y < t.y)) && (t = e), (e = e.next);
  while (e !== r);
  return t;
}

function Un(r, e, t, n, i, s, a, o) {
  return (
    (i - a) * (e - o) - (r - a) * (s - o) >= 0 &&
    (r - a) * (n - o) - (t - a) * (e - o) >= 0 &&
    (t - a) * (s - o) - (i - a) * (n - o) >= 0
  );
}

function gm(r, e) {
  return (
    r.next.i !== e.i &&
    r.prev.i !== e.i &&
    !ym(r, e) &&
    ((Mi(r, e) &&
      Mi(e, r) &&
      vm(r, e) &&
      (Ue(r.prev, r, e.prev) || Ue(r, e.prev, e))) ||
      (xr(r, e) && Ue(r.prev, r, r.next) > 0 && Ue(e.prev, e, e.next) > 0))
  );
}

function Ue(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}

function xr(r, e) {
  return r.x === e.x && r.y === e.y;
}

function il(r, e, t, n) {
  const i = tr(Ue(r, e, t)),
    s = tr(Ue(r, e, n)),
    a = tr(Ue(t, n, r)),
    o = tr(Ue(t, n, e));
  return !!(
    (i !== s && a !== o) ||
    (i === 0 && er(r, t, e)) ||
    (s === 0 && er(r, n, e)) ||
    (a === 0 && er(t, r, n)) ||
    (o === 0 && er(t, e, n))
  );
}

function er(r, e, t) {
  return (
    e.x <= Math.max(r.x, t.x) &&
    e.x >= Math.min(r.x, t.x) &&
    e.y <= Math.max(r.y, t.y) &&
    e.y >= Math.min(r.y, t.y)
  );
}

function tr(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}

function ym(r, e) {
  let t = r;
  do {
    if (
      t.i !== r.i &&
      t.next.i !== r.i &&
      t.i !== e.i &&
      t.next.i !== e.i &&
      il(t, t.next, r, e)
    )
      return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}

function Mi(r, e) {
  return Ue(r.prev, r, r.next) < 0
    ? Ue(r, e, r.next) >= 0 && Ue(r, r.prev, e) >= 0
    : Ue(r, e, r.prev) < 0 || Ue(r, r.next, e) < 0;
}

function vm(r, e) {
  let t = r,
    n = !1;
  const i = (r.x + e.x) / 2,
    s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s &&
      t.next.y !== t.y &&
      i < ((t.next.x - t.x) * (s - t.y)) / (t.next.y - t.y) + t.x &&
      (n = !n),
      (t = t.next);
  while (t !== r);
  return n;
}

function rl(r, e) {
  const t = new gs(r.i, r.x, r.y),
    n = new gs(e.i, e.x, e.y),
    i = r.next,
    s = e.prev;
  return (
    (r.next = e),
    (e.prev = r),
    (t.next = i),
    (i.prev = t),
    (n.next = t),
    (t.prev = n),
    (s.next = n),
    (n.prev = s),
    n
  );
}

function oo(r, e, t, n) {
  const i = new gs(r, e, t);
  return (
    n
      ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  );
}

function Si(r) {
  (r.next.prev = r.prev),
    (r.prev.next = r.next),
    r.prevZ && (r.prevZ.nextZ = r.nextZ),
    r.nextZ && (r.nextZ.prevZ = r.prevZ);
}

function gs(r, e, t) {
  (this.i = r),
    (this.x = e),
    (this.y = t),
    (this.prev = null),
    (this.next = null),
    (this.z = null),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}

function xm(r, e, t, n) {
  let i = 0;
  for (let s = e, a = t - n; s < t; s += n)
    (i += (r[a] - r[s]) * (r[s + 1] + r[a + 1])), (a = s);
  return i;
}
class tn {
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return tn.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [],
      i = [],
      s = [];
    lo(e), co(n, e);
    let a = e.length;
    t.forEach(lo);
    for (let l = 0; l < t.length; l++)
      i.push(a), (a += t[l].length), co(n, t[l]);
    const o = im.triangulate(n, i);
    for (let l = 0; l < o.length; l += 3) s.push(o.slice(l, l + 3));
    return s;
  }
}

function lo(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}

function co(r, e) {
  for (let t = 0; t < e.length; t++) r.push(e[t].x), r.push(e[t].y);
}
class _r extends ke {
  constructor(e, t) {
    super(),
      (this.type = "ExtrudeGeometry"),
      (this.parameters = {
        shapes: e,
        options: t,
      }),
      (e = Array.isArray(e) ? e : [e]);
    const n = this,
      i = [],
      s = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o];
      a(c);
    }
    this.setAttribute("position", new We(i, 3)),
      this.setAttribute("uv", new We(s, 2)),
      this.computeVertexNormals();

    function a(o) {
      const l = [],
        c = t.curveSegments !== void 0 ? t.curveSegments : 12,
        h = t.steps !== void 0 ? t.steps : 1;
      let d = t.depth !== void 0 ? t.depth : 100,
        u = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0,
        f = t.bevelThickness !== void 0 ? t.bevelThickness : 6,
        m = t.bevelSize !== void 0 ? t.bevelSize : f - 2,
        y = t.bevelOffset !== void 0 ? t.bevelOffset : 0,
        v = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const g = t.extrudePath,
        p = t.UVGenerator !== void 0 ? t.UVGenerator : _m;
      t.amount !== void 0 &&
        (console.warn(
          "THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
        ),
        (d = t.amount));
      let E,
        L = !1,
        A,
        x,
        N,
        z;
      g &&
        ((E = g.getSpacedPoints(h)),
        (L = !0),
        (u = !1),
        (A = g.computeFrenetFrames(h, !1)),
        (x = new b()),
        (N = new b()),
        (z = new b())),
        u || ((v = 0), (f = 0), (m = 0), (y = 0));
      const B = o.extractPoints(c);
      let G = B.shape;
      const q = B.holes;
      if (!tn.isClockWise(G)) {
        G = G.reverse();
        for (let J = 0, Q = q.length; J < Q; J++) {
          const ee = q[J];
          tn.isClockWise(ee) && (q[J] = ee.reverse());
        }
      }
      const C = tn.triangulateShape(G, q),
        P = G;
      for (let J = 0, Q = q.length; J < Q; J++) {
        const ee = q[J];
        G = G.concat(ee);
      }

      function D(J, Q, ee) {
        return (
          Q || console.error("THREE.ExtrudeGeometry: vec does not exist"),
          Q.clone().multiplyScalar(ee).add(J)
        );
      }
      const R = G.length,
        X = C.length;

      function $(J, Q, ee) {
        let ce, re, M;
        const w = J.x - Q.x,
          U = J.y - Q.y,
          V = ee.x - J.x,
          ne = ee.y - J.y,
          oe = w * w + U * U,
          Ee = w * ne - U * V;
        if (Math.abs(Ee) > Number.EPSILON) {
          const T = Math.sqrt(oe),
            S = Math.sqrt(V * V + ne * ne),
            j = Q.x - U / T,
            Y = Q.y + w / T,
            le = ee.x - ne / S,
            W = ee.y + V / S,
            fe = ((le - j) * ne - (W - Y) * V) / (w * ne - U * V);
          (ce = j + w * fe - J.x), (re = Y + U * fe - J.y);
          const Ce = ce * ce + re * re;
          if (Ce <= 2) return new Z(ce, re);
          M = Math.sqrt(Ce / 2);
        } else {
          let T = !1;
          w > Number.EPSILON
            ? V > Number.EPSILON && (T = !0)
            : w < -Number.EPSILON
            ? V < -Number.EPSILON && (T = !0)
            : Math.sign(U) === Math.sign(ne) && (T = !0),
            T
              ? ((ce = -U), (re = w), (M = Math.sqrt(oe)))
              : ((ce = w), (re = U), (M = Math.sqrt(oe / 2)));
        }
        return new Z(ce / M, re / M);
      }
      const K = [];
      for (
        let J = 0, Q = P.length, ee = Q - 1, ce = J + 1;
        J < Q;
        J++, ee++, ce++
      )
        ee === Q && (ee = 0),
          ce === Q && (ce = 0),
          (K[J] = $(P[J], P[ee], P[ce]));
      const ae = [];
      let se,
        ue = K.concat();
      for (let J = 0, Q = q.length; J < Q; J++) {
        const ee = q[J];
        se = [];
        for (
          let ce = 0, re = ee.length, M = re - 1, w = ce + 1;
          ce < re;
          ce++, M++, w++
        )
          M === re && (M = 0),
            w === re && (w = 0),
            (se[ce] = $(ee[ce], ee[M], ee[w]));
        ae.push(se), (ue = ue.concat(se));
      }
      for (let J = 0; J < v; J++) {
        const Q = J / v,
          ee = f * Math.cos((Q * Math.PI) / 2),
          ce = m * Math.sin((Q * Math.PI) / 2) + y;
        for (let re = 0, M = P.length; re < M; re++) {
          const w = D(P[re], K[re], ce);
          ge(w.x, w.y, -ee);
        }
        for (let re = 0, M = q.length; re < M; re++) {
          const w = q[re];
          se = ae[re];
          for (let U = 0, V = w.length; U < V; U++) {
            const ne = D(w[U], se[U], ce);
            ge(ne.x, ne.y, -ee);
          }
        }
      }
      const me = m + y;
      for (let J = 0; J < R; J++) {
        const Q = u ? D(G[J], ue[J], me) : G[J];
        L
          ? (N.copy(A.normals[0]).multiplyScalar(Q.x),
            x.copy(A.binormals[0]).multiplyScalar(Q.y),
            z.copy(E[0]).add(N).add(x),
            ge(z.x, z.y, z.z))
          : ge(Q.x, Q.y, 0);
      }
      for (let J = 1; J <= h; J++)
        for (let Q = 0; Q < R; Q++) {
          const ee = u ? D(G[Q], ue[Q], me) : G[Q];
          L
            ? (N.copy(A.normals[J]).multiplyScalar(ee.x),
              x.copy(A.binormals[J]).multiplyScalar(ee.y),
              z.copy(E[J]).add(N).add(x),
              ge(z.x, z.y, z.z))
            : ge(ee.x, ee.y, (d / h) * J);
        }
      for (let J = v - 1; J >= 0; J--) {
        const Q = J / v,
          ee = f * Math.cos((Q * Math.PI) / 2),
          ce = m * Math.sin((Q * Math.PI) / 2) + y;
        for (let re = 0, M = P.length; re < M; re++) {
          const w = D(P[re], K[re], ce);
          ge(w.x, w.y, d + ee);
        }
        for (let re = 0, M = q.length; re < M; re++) {
          const w = q[re];
          se = ae[re];
          for (let U = 0, V = w.length; U < V; U++) {
            const ne = D(w[U], se[U], ce);
            L
              ? ge(ne.x, ne.y + E[h - 1].y, E[h - 1].x + ee)
              : ge(ne.x, ne.y, d + ee);
          }
        }
      }
      H(), De();

      function H() {
        const J = i.length / 3;
        if (u) {
          let Q = 0,
            ee = R * Q;
          for (let ce = 0; ce < X; ce++) {
            const re = C[ce];
            de(re[2] + ee, re[1] + ee, re[0] + ee);
          }
          (Q = h + v * 2), (ee = R * Q);
          for (let ce = 0; ce < X; ce++) {
            const re = C[ce];
            de(re[0] + ee, re[1] + ee, re[2] + ee);
          }
        } else {
          for (let Q = 0; Q < X; Q++) {
            const ee = C[Q];
            de(ee[2], ee[1], ee[0]);
          }
          for (let Q = 0; Q < X; Q++) {
            const ee = C[Q];
            de(ee[0] + R * h, ee[1] + R * h, ee[2] + R * h);
          }
        }
        n.addGroup(J, i.length / 3 - J, 0);
      }

      function De() {
        const J = i.length / 3;
        let Q = 0;
        Se(P, Q), (Q += P.length);
        for (let ee = 0, ce = q.length; ee < ce; ee++) {
          const re = q[ee];
          Se(re, Q), (Q += re.length);
        }
        n.addGroup(J, i.length / 3 - J, 1);
      }

      function Se(J, Q) {
        let ee = J.length;
        for (; --ee >= 0; ) {
          const ce = ee;
          let re = ee - 1;
          re < 0 && (re = J.length - 1);
          for (let M = 0, w = h + v * 2; M < w; M++) {
            const U = R * M,
              V = R * (M + 1),
              ne = Q + ce + U,
              oe = Q + re + U,
              Ee = Q + re + V,
              T = Q + ce + V;
            Te(ne, oe, Ee, T);
          }
        }
      }

      function ge(J, Q, ee) {
        l.push(J), l.push(Q), l.push(ee);
      }

      function de(J, Q, ee) {
        we(J), we(Q), we(ee);
        const ce = i.length / 3,
          re = p.generateTopUV(n, i, ce - 3, ce - 2, ce - 1);
        be(re[0]), be(re[1]), be(re[2]);
      }

      function Te(J, Q, ee, ce) {
        we(J), we(Q), we(ce), we(Q), we(ee), we(ce);
        const re = i.length / 3,
          M = p.generateSideWallUV(n, i, re - 6, re - 3, re - 2, re - 1);
        be(M[0]), be(M[1]), be(M[3]), be(M[1]), be(M[2]), be(M[3]);
      }

      function we(J) {
        i.push(l[J * 3 + 0]), i.push(l[J * 3 + 1]), i.push(l[J * 3 + 2]);
      }

      function be(J) {
        s.push(J.x), s.push(J.y);
      }
    }
  }
  toJSON() {
    const e = ke.prototype.toJSON.call(this),
      t = this.parameters.shapes,
      n = this.parameters.options;
    return wm(t, n, e);
  }
}
const _m = {
  generateTopUV: function (r, e, t, n, i) {
    const s = e[t * 3],
      a = e[t * 3 + 1],
      o = e[n * 3],
      l = e[n * 3 + 1],
      c = e[i * 3],
      h = e[i * 3 + 1];
    return [new Z(s, a), new Z(o, l), new Z(c, h)];
  },
  generateSideWallUV: function (r, e, t, n, i, s) {
    const a = e[t * 3],
      o = e[t * 3 + 1],
      l = e[t * 3 + 2],
      c = e[n * 3],
      h = e[n * 3 + 1],
      d = e[n * 3 + 2],
      u = e[i * 3],
      f = e[i * 3 + 1],
      m = e[i * 3 + 2],
      y = e[s * 3],
      v = e[s * 3 + 1],
      g = e[s * 3 + 2];
    return Math.abs(o - h) < 0.01
      ? [new Z(a, 1 - l), new Z(c, 1 - d), new Z(u, 1 - m), new Z(y, 1 - g)]
      : [new Z(o, 1 - l), new Z(h, 1 - d), new Z(f, 1 - m), new Z(v, 1 - g)];
  },
};

function wm(r, e, t) {
  if (((t.shapes = []), Array.isArray(r)))
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      t.shapes.push(s.uuid);
    }
  else t.shapes.push(r.uuid);
  return (
    e.extrudePath !== void 0 &&
      (t.options.extrudePath = e.extrudePath.toJSON()),
    t
  );
}
class bm extends ke {
  constructor(e, t = 12) {
    super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = {
        shapes: e,
        curveSegments: t,
      });
    const n = [],
      i = [],
      s = [],
      a = [];
    let o = 0,
      l = 0;
    if (Array.isArray(e) === !1) c(e);
    else
      for (let h = 0; h < e.length; h++)
        c(e[h]), this.addGroup(o, l, h), (o += l), (l = 0);
    this.setIndex(n),
      this.setAttribute("position", new We(i, 3)),
      this.setAttribute("normal", new We(s, 3)),
      this.setAttribute("uv", new We(a, 2));

    function c(h) {
      const d = i.length / 3,
        u = h.extractPoints(t);
      let f = u.shape;
      const m = u.holes;
      tn.isClockWise(f) === !1 && (f = f.reverse());
      for (let v = 0, g = m.length; v < g; v++) {
        const p = m[v];
        tn.isClockWise(p) === !0 && (m[v] = p.reverse());
      }
      const y = tn.triangulateShape(f, m);
      for (let v = 0, g = m.length; v < g; v++) {
        const p = m[v];
        f = f.concat(p);
      }
      for (let v = 0, g = f.length; v < g; v++) {
        const p = f[v];
        i.push(p.x, p.y, 0), s.push(0, 0, 1), a.push(p.x, p.y);
      }
      for (let v = 0, g = y.length; v < g; v++) {
        const p = y[v],
          E = p[0] + d,
          L = p[1] + d,
          A = p[2] + d;
        n.push(E, L, A), (l += 3);
      }
    }
  }
  toJSON() {
    const e = ke.prototype.toJSON.call(this),
      t = this.parameters.shapes;
    return Mm(t, e);
  }
}

function Mm(r, e) {
  if (((e.shapes = []), Array.isArray(r)))
    for (let t = 0, n = r.length; t < n; t++) {
      const i = r[t];
      e.shapes.push(i.uuid);
    }
  else e.shapes.push(r.uuid);
  return e;
}
class sl extends ke {
  constructor(e = 1, t = 8, n = 6, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: s,
        thetaStart: a,
        thetaLength: o,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const h = [],
      d = new b(),
      u = new b(),
      f = [],
      m = [],
      y = [],
      v = [];
    for (let g = 0; g <= n; g++) {
      const p = [],
        E = g / n;
      let L = 0;
      g == 0 && a == 0
        ? (L = 0.5 / t)
        : g == n && l == Math.PI && (L = -0.5 / t);
      for (let A = 0; A <= t; A++) {
        const x = A / t;
        (d.x = -e * Math.cos(i + x * s) * Math.sin(a + E * o)),
          (d.y = e * Math.cos(a + E * o)),
          (d.z = e * Math.sin(i + x * s) * Math.sin(a + E * o)),
          m.push(d.x, d.y, d.z),
          u.copy(d).normalize(),
          y.push(u.x, u.y, u.z),
          v.push(x + L, 1 - E),
          p.push(c++);
      }
      h.push(p);
    }
    for (let g = 0; g < n; g++)
      for (let p = 0; p < t; p++) {
        const E = h[g][p + 1],
          L = h[g][p],
          A = h[g + 1][p],
          x = h[g + 1][p + 1];
        (g !== 0 || a > 0) && f.push(E, L, x),
          (g !== n - 1 || l < Math.PI) && f.push(L, A, x);
      }
    this.setIndex(f),
      this.setAttribute("position", new We(m, 3)),
      this.setAttribute("normal", new We(y, 3)),
      this.setAttribute("uv", new We(v, 2));
  }
}
class Sm extends Ke {
  constructor(e) {
    super(),
      (this.type = "ShadowMaterial"),
      (this.color = new he(0)),
      (this.transparent = !0),
      this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this;
  }
}
Sm.prototype.isShadowMaterial = !0;
class Tm extends mn {
  constructor(e) {
    super(e), (this.type = "RawShaderMaterial");
  }
}
Tm.prototype.isRawShaderMaterial = !0;
class zs extends Ke {
  constructor(e) {
    super(),
      (this.defines = {
        STANDARD: "",
      }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new he(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new he(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = qn),
      (this.normalScale = new Z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.skinning = !1),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      (this.flatShading = !1),
      (this.vertexTangents = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = {
        STANDARD: "",
      }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.skinning = e.skinning),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      (this.flatShading = e.flatShading),
      (this.vertexTangents = e.vertexTangents),
      this
    );
  }
}
zs.prototype.isMeshStandardMaterial = !0;
class Em extends zs {
  constructor(e) {
    super(),
      (this.defines = {
        STANDARD: "",
        PHYSICAL: "",
      }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoat = 0),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new Z(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.reflectivity = 0.5),
      Object.defineProperty(this, "ior", {
        get: function () {
          return (1 + 0.4 * this.reflectivity) / (1 - 0.4 * this.reflectivity);
        },
        set: function (t) {
          this.reflectivity = at((2.5 * (t - 1)) / (t + 1), 0, 1);
        },
      }),
      (this.sheen = null),
      (this.transmission = 0),
      (this.transmissionMap = null),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = {
        STANDARD: "",
        PHYSICAL: "",
      }),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.reflectivity = e.reflectivity),
      e.sheen
        ? (this.sheen = (this.sheen || new he()).copy(e.sheen))
        : (this.sheen = null),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      this
    );
  }
}
Em.prototype.isMeshPhysicalMaterial = !0;
class al extends Ke {
  constructor(e) {
    super(),
      (this.type = "MeshPhongMaterial"),
      (this.color = new he(16777215)),
      (this.specular = new he(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new he(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = qn),
      (this.normalScale = new Z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = gr),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.skinning = !1),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      (this.shininess = e.shininess),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.skinning = e.skinning),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
al.prototype.isMeshPhongMaterial = !0;
class Am extends Ke {
  constructor(e) {
    super(),
      (this.defines = {
        TOON: "",
      }),
      (this.type = "MeshToonMaterial"),
      (this.color = new he(16777215)),
      (this.map = null),
      (this.gradientMap = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new he(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = qn),
      (this.normalScale = new Z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.skinning = !1),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.gradientMap = e.gradientMap),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.skinning = e.skinning),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      this
    );
  }
}
Am.prototype.isMeshToonMaterial = !0;
class Lm extends Ke {
  constructor(e) {
    super(),
      (this.type = "MeshNormalMaterial"),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = qn),
      (this.normalScale = new Z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.skinning = !1),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.skinning = e.skinning),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
Lm.prototype.isMeshNormalMaterial = !0;
class Cm extends Ke {
  constructor(e) {
    super(),
      (this.type = "MeshLambertMaterial"),
      (this.color = new he(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new he(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = gr),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.skinning = !1),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.skinning = e.skinning),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      this
    );
  }
}
Cm.prototype.isMeshLambertMaterial = !0;
class Rm extends Ke {
  constructor(e) {
    super(),
      (this.defines = {
        MATCAP: "",
      }),
      (this.type = "MeshMatcapMaterial"),
      (this.color = new he(16777215)),
      (this.matcap = null),
      (this.map = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = qn),
      (this.normalScale = new Z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.skinning = !1),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = {
        MATCAP: "",
      }),
      this.color.copy(e.color),
      (this.matcap = e.matcap),
      (this.map = e.map),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.skinning = e.skinning),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
Rm.prototype.isMeshMatcapMaterial = !0;
class Pm extends Ai {
  constructor(e) {
    super(),
      (this.type = "LineDashedMaterial"),
      (this.scale = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.scale = e.scale),
      (this.dashSize = e.dashSize),
      (this.gapSize = e.gapSize),
      this
    );
  }
}
Pm.prototype.isLineDashedMaterial = !0;
const He = {
  arraySlice: function (r, e, t) {
    return He.isTypedArray(r)
      ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length))
      : r.slice(e, t);
  },
  convertArray: function (r, e, t) {
    return !r || (!t && r.constructor === e)
      ? r
      : typeof e.BYTES_PER_ELEMENT == "number"
      ? new e(r)
      : Array.prototype.slice.call(r);
  },
  isTypedArray: function (r) {
    return ArrayBuffer.isView(r) && !(r instanceof DataView);
  },
  getKeyframeOrder: function (r) {
    function e(i, s) {
      return r[i] - r[s];
    }
    const t = r.length,
      n = new Array(t);
    for (let i = 0; i !== t; ++i) n[i] = i;
    return n.sort(e), n;
  },
  sortedArray: function (r, e, t) {
    const n = r.length,
      i = new r.constructor(n);
    for (let s = 0, a = 0; a !== n; ++s) {
      const o = t[s] * e;
      for (let l = 0; l !== e; ++l) i[a++] = r[o + l];
    }
    return i;
  },
  flattenJSON: function (r, e, t, n) {
    let i = 1,
      s = r[0];
    for (; s !== void 0 && s[n] === void 0; ) s = r[i++];
    if (s === void 0) return;
    let a = s[n];
    if (a !== void 0)
      if (Array.isArray(a))
        do
          (a = s[n]),
            a !== void 0 && (e.push(s.time), t.push.apply(t, a)),
            (s = r[i++]);
        while (s !== void 0);
      else if (a.toArray !== void 0)
        do
          (a = s[n]),
            a !== void 0 && (e.push(s.time), a.toArray(t, t.length)),
            (s = r[i++]);
        while (s !== void 0);
      else
        do
          (a = s[n]), a !== void 0 && (e.push(s.time), t.push(a)), (s = r[i++]);
        while (s !== void 0);
  },
  subclip: function (r, e, t, n, i = 30) {
    const s = r.clone();
    s.name = e;
    const a = [];
    for (let l = 0; l < s.tracks.length; ++l) {
      const c = s.tracks[l],
        h = c.getValueSize(),
        d = [],
        u = [];
      for (let f = 0; f < c.times.length; ++f) {
        const m = c.times[f] * i;
        if (!(m < t || m >= n)) {
          d.push(c.times[f]);
          for (let y = 0; y < h; ++y) u.push(c.values[f * h + y]);
        }
      }
      d.length !== 0 &&
        ((c.times = He.convertArray(d, c.times.constructor)),
        (c.values = He.convertArray(u, c.values.constructor)),
        a.push(c));
    }
    s.tracks = a;
    let o = 1 / 0;
    for (let l = 0; l < s.tracks.length; ++l)
      o > s.tracks[l].times[0] && (o = s.tracks[l].times[0]);
    for (let l = 0; l < s.tracks.length; ++l) s.tracks[l].shift(-1 * o);
    return s.resetDuration(), s;
  },
  makeClipAdditive: function (r, e = 0, t = r, n = 30) {
    n <= 0 && (n = 30);
    const i = t.tracks.length,
      s = e / n;
    for (let a = 0; a < i; ++a) {
      const o = t.tracks[a],
        l = o.ValueTypeName;
      if (l === "bool" || l === "string") continue;
      const c = r.tracks.find(function (g) {
        return g.name === o.name && g.ValueTypeName === l;
      });
      if (c === void 0) continue;
      let h = 0;
      const d = o.getValueSize();
      o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (h = d / 3);
      let u = 0;
      const f = c.getValueSize();
      c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (u = f / 3);
      const m = o.times.length - 1;
      let y;
      if (s <= o.times[0]) {
        const g = h,
          p = d - h;
        y = He.arraySlice(o.values, g, p);
      } else if (s >= o.times[m]) {
        const g = m * d + h,
          p = g + d - h;
        y = He.arraySlice(o.values, g, p);
      } else {
        const g = o.createInterpolant(),
          p = h,
          E = d - h;
        g.evaluate(s), (y = He.arraySlice(g.resultBuffer, p, E));
      }
      l === "quaternion" &&
        new tt().fromArray(y).normalize().conjugate().toArray(y);
      const v = c.times.length;
      for (let g = 0; g < v; ++g) {
        const p = g * f + u;
        if (l === "quaternion")
          tt.multiplyQuaternionsFlat(c.values, p, y, 0, c.values, p);
        else {
          const E = f - u * 2;
          for (let L = 0; L < E; ++L) c.values[p + L] -= y[L];
        }
      }
    }
    return (r.blendMode = Lo), r;
  },
};
class rn {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      s = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.afterEnd_(n - 1, e, s)
                );
              }
              if (n === o) break;
              if (((s = i), (i = t[++n]), e < i)) break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && ((n = 2), (s = o));
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return (this._cachedIndex = 0), this.beforeStart_(0, e, i);
              if (n === l) break;
              if (((i = s), (s = t[--n - 1]), e >= s)) break t;
            }
            (a = n), (n = 0);
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          const o = (n + a) >>> 1;
          e < t[o] ? (a = o) : (n = o + 1);
        }
        if (((i = t[n]), (s = t[n - 1]), s === void 0))
          return (this._cachedIndex = 0), this.beforeStart_(0, e, i);
        if (i === void 0)
          return (
            (n = t.length), (this._cachedIndex = n), this.afterEnd_(n - 1, s, e)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      s = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[s + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
rn.prototype.beforeStart_ = rn.prototype.copySampleValue_;
rn.prototype.afterEnd_ = rn.prototype.copySampleValue_;
class Dm extends rn {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = {
        endingStart: On,
        endingEnd: On,
      });
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2,
      a = e + 1,
      o = i[s],
      l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Hn:
          (s = e), (o = 2 * t - n);
          break;
        case hr:
          (s = i.length - 2), (o = t + i[s] - i[s + 1]);
          break;
        default:
          (s = e), (o = n);
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case Hn:
          (a = e), (l = 2 * n - t);
          break;
        case hr:
          (a = 1), (l = n + i[1] - i[0]);
          break;
        default:
          (a = e - 1), (l = t);
      }
    const c = (n - t) * 0.5,
      h = this.valueSize;
    (this._weightPrev = c / (t - o)),
      (this._weightNext = c / (l - n)),
      (this._offsetPrev = s * h),
      (this._offsetNext = a * h);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = e * o,
      c = l - o,
      h = this._offsetPrev,
      d = this._offsetNext,
      u = this._weightPrev,
      f = this._weightNext,
      m = (n - t) / (i - t),
      y = m * m,
      v = y * m,
      g = -u * v + 2 * u * y - u * m,
      p = (1 + u) * v + (-1.5 - 2 * u) * y + (-0.5 + u) * m + 1,
      E = (-1 - f) * v + (1.5 + f) * y + 0.5 * m,
      L = f * v - f * y;
    for (let A = 0; A !== o; ++A)
      s[A] = g * a[h + A] + p * a[c + A] + E * a[l + A] + L * a[d + A];
    return s;
  }
}
class ol extends rn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = e * o,
      c = l - o,
      h = (n - t) / (i - t),
      d = 1 - h;
    for (let u = 0; u !== o; ++u) s[u] = a[c + u] * d + a[l + u] * h;
    return s;
  }
}
class Im extends rn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Nt {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = He.convertArray(t, this.TimeBufferType)),
      (this.values = He.convertArray(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: He.convertArray(e.times, Array),
        values: He.convertArray(e.values, Array),
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Im(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new ol(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Dm(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case lr:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case cr:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Er:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return lr;
      case this.InterpolantFactoryMethodLinear:
        return cr;
      case this.InterpolantFactoryMethodSmooth:
        return Er;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let s = 0,
      a = i - 1;
    for (; s !== i && n[s] < e; ) ++s;
    for (; a !== -1 && n[a] > t; ) --a;
    if ((++a, s !== 0 || a !== i)) {
      s >= a && ((a = Math.max(a, 1)), (s = a - 1));
      const o = this.getValueSize();
      (this.times = He.arraySlice(n, s, a)),
        (this.values = He.arraySlice(this.values, s * o, a * o));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const n = this.times,
      i = this.values,
      s = n.length;
    s === 0 &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          o,
          l
        ),
          (e = !1);
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a),
          (e = !1);
        break;
      }
      a = l;
    }
    if (i !== void 0 && He.isTypedArray(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            o,
            c
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = He.arraySlice(this.times),
      t = He.arraySlice(this.values),
      n = this.getValueSize(),
      i = this.getInterpolation() === Er,
      s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = e[o],
        h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0]))
        if (i) l = !0;
        else {
          const d = o * n,
            u = d - n,
            f = d + n;
          for (let m = 0; m !== n; ++m) {
            const y = t[d + m];
            if (y !== t[u + m] || y !== t[f + m]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const d = o * n,
            u = a * n;
          for (let f = 0; f !== n; ++f) t[u + f] = t[d + f];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[o + c];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = He.arraySlice(e, 0, a)),
          (this.values = He.arraySlice(t, 0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = He.arraySlice(this.times, 0),
      t = He.arraySlice(this.values, 0),
      n = this.constructor,
      i = new n(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
Nt.prototype.TimeBufferType = Float32Array;
Nt.prototype.ValueBufferType = Float32Array;
Nt.prototype.DefaultInterpolation = cr;
class Jn extends Nt {}
Jn.prototype.ValueTypeName = "bool";
Jn.prototype.ValueBufferType = Array;
Jn.prototype.DefaultInterpolation = lr;
Jn.prototype.InterpolantFactoryMethodLinear = void 0;
Jn.prototype.InterpolantFactoryMethodSmooth = void 0;
class ll extends Nt {}
ll.prototype.ValueTypeName = "color";
class dr extends Nt {}
dr.prototype.ValueTypeName = "number";
class Nm extends rn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4) tt.slerpFlat(s, 0, a, c - o, a, c, l);
    return s;
  }
}
class Li extends Nt {
  InterpolantFactoryMethodLinear(e) {
    return new Nm(this.times, this.values, this.getValueSize(), e);
  }
}
Li.prototype.ValueTypeName = "quaternion";
Li.prototype.DefaultInterpolation = cr;
Li.prototype.InterpolantFactoryMethodSmooth = void 0;
class Kn extends Nt {}
Kn.prototype.ValueTypeName = "string";
Kn.prototype.ValueBufferType = Array;
Kn.prototype.DefaultInterpolation = lr;
Kn.prototype.InterpolantFactoryMethodLinear = void 0;
Kn.prototype.InterpolantFactoryMethodSmooth = void 0;
class fr extends Nt {}
fr.prototype.ValueTypeName = "vector";
class ho {
  constructor(e, t = -1, n, i = Es) {
    (this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = i),
      (this.uuid = Lt()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(zm(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return (s.uuid = e.uuid), s;
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let s = 0, a = n.length; s !== a; ++s) t.push(Nt.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length,
      a = [];
    for (let o = 0; o < s; o++) {
      let l = [],
        c = [];
      l.push((o + s - 1) % s, o, (o + 1) % s), c.push(0, 1, 0);
      const h = He.getKeyframeOrder(l);
      (l = He.sortedArray(l, 1, h)),
        (c = He.sortedArray(c, 1, h)),
        !i && l[0] === 0 && (l.push(s), c.push(c[0])),
        a.push(
          new dr(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n)
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {},
      s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o],
        h = c.name.match(s);
      if (h && h.length > 1) {
        const d = h[1];
        let u = i[d];
        u || (i[d] = u = []), u.push(c);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (d, u, f, m, y) {
        if (f.length !== 0) {
          const v = [],
            g = [];
          He.flattenJSON(f, v, g, m), v.length !== 0 && y.push(new d(u, v, g));
        }
      },
      i = [],
      s = e.name || "default",
      a = e.fps || 30,
      o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let d = 0; d < c.length; d++) {
      const u = c[d].keys;
      if (!(!u || u.length === 0))
        if (u[0].morphTargets) {
          const f = {};
          let m;
          for (m = 0; m < u.length; m++)
            if (u[m].morphTargets)
              for (let y = 0; y < u[m].morphTargets.length; y++)
                f[u[m].morphTargets[y]] = -1;
          for (const y in f) {
            const v = [],
              g = [];
            for (let p = 0; p !== u[m].morphTargets.length; ++p) {
              const E = u[m];
              v.push(E.time), g.push(E.morphTarget === y ? 1 : 0);
            }
            i.push(new dr(".morphTargetInfluence[" + y + "]", v, g));
          }
          l = f.length * (a || 1);
        } else {
          const f = ".bones[" + t[d].name + "]";
          n(fr, f + ".position", u, "pos", i),
            n(Li, f + ".quaternion", u, "rot", i),
            n(fr, f + ".scale", u, "scl", i);
        }
    }
    return i.length === 0 ? null : new this(s, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}

function Fm(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return dr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return fr;
    case "color":
      return ll;
    case "quaternion":
      return Li;
    case "bool":
    case "boolean":
      return Jn;
    case "string":
      return Kn;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}

function zm(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Fm(r.type);
  if (r.times === void 0) {
    const t = [],
      n = [];
    He.flattenJSON(r.keys, t, n, "value"), (r.times = t), (r.values = n);
  }
  return e.parse !== void 0
    ? e.parse(r)
    : new e(r.name, r.times, r.values, r.interpolation);
}
const Wn = {
  enabled: !1,
  files: {},
  add: function (r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r];
  },
  remove: function (r) {
    delete this.files[r];
  },
  clear: function () {
    this.files = {};
  },
};
class Bm {
  constructor(e, t, n) {
    const i = this;
    let s = !1,
      a = 0,
      o = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (h) {
        o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), (s = !0);
      }),
      (this.itemEnd = function (h) {
        a++,
          i.onProgress !== void 0 && i.onProgress(h, a, o),
          a === o && ((s = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (h) {
        i.onError !== void 0 && i.onError(h);
      }),
      (this.resolveURL = function (h) {
        return l ? l(h) : h;
      }),
      (this.setURLModifier = function (h) {
        return (l = h), this;
      }),
      (this.addHandler = function (h, d) {
        return c.push(h, d), this;
      }),
      (this.removeHandler = function (h) {
        const d = c.indexOf(h);
        return d !== -1 && c.splice(d, 2), this;
      }),
      (this.getHandler = function (h) {
        for (let d = 0, u = c.length; d < u; d += 2) {
          const f = c[d],
            m = c[d + 1];
          if ((f.global && (f.lastIndex = 0), f.test(h))) return m;
        }
        return null;
      });
  }
}
const km = new Bm();
class an {
  constructor(e) {
    (this.manager = e !== void 0 ? e : km),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
const Tt = {};
class Om extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = Wn.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), s.manager.itemEnd(e);
        }, 0),
        a
      );
    if (Tt[e] !== void 0) {
      Tt[e].push({
        onLoad: t,
        onProgress: n,
        onError: i,
      });
      return;
    }
    const o = /^data:(.*?)(;base64)?,(.*)$/,
      l = e.match(o);
    let c;
    if (l) {
      const h = l[1],
        d = !!l[2];
      let u = l[3];
      (u = decodeURIComponent(u)), d && (u = atob(u));
      try {
        let f;
        const m = (this.responseType || "").toLowerCase();
        switch (m) {
          case "arraybuffer":
          case "blob":
            const y = new Uint8Array(u.length);
            for (let g = 0; g < u.length; g++) y[g] = u.charCodeAt(g);
            m === "blob"
              ? (f = new Blob([y.buffer], {
                  type: h,
                }))
              : (f = y.buffer);
            break;
          case "document":
            f = new DOMParser().parseFromString(u, h);
            break;
          case "json":
            f = JSON.parse(u);
            break;
          default:
            f = u;
            break;
        }
        setTimeout(function () {
          t && t(f), s.manager.itemEnd(e);
        }, 0);
      } catch (f) {
        setTimeout(function () {
          i && i(f), s.manager.itemError(e), s.manager.itemEnd(e);
        }, 0);
      }
    } else {
      (Tt[e] = []),
        Tt[e].push({
          onLoad: t,
          onProgress: n,
          onError: i,
        }),
        (c = new XMLHttpRequest()),
        c.open("GET", e, !0),
        c.addEventListener(
          "load",
          function (h) {
            const d = this.response,
              u = Tt[e];
            if ((delete Tt[e], this.status === 200 || this.status === 0)) {
              this.status === 0 &&
                console.warn("THREE.FileLoader: HTTP Status 0 received."),
                Wn.add(e, d);
              for (let f = 0, m = u.length; f < m; f++) {
                const y = u[f];
                y.onLoad && y.onLoad(d);
              }
              s.manager.itemEnd(e);
            } else {
              for (let f = 0, m = u.length; f < m; f++) {
                const y = u[f];
                y.onError && y.onError(h);
              }
              s.manager.itemError(e), s.manager.itemEnd(e);
            }
          },
          !1
        ),
        c.addEventListener(
          "progress",
          function (h) {
            const d = Tt[e];
            for (let u = 0, f = d.length; u < f; u++) {
              const m = d[u];
              m.onProgress && m.onProgress(h);
            }
          },
          !1
        ),
        c.addEventListener(
          "error",
          function (h) {
            const d = Tt[e];
            delete Tt[e];
            for (let u = 0, f = d.length; u < f; u++) {
              const m = d[u];
              m.onError && m.onError(h);
            }
            s.manager.itemError(e), s.manager.itemEnd(e);
          },
          !1
        ),
        c.addEventListener(
          "abort",
          function (h) {
            const d = Tt[e];
            delete Tt[e];
            for (let u = 0, f = d.length; u < f; u++) {
              const m = d[u];
              m.onError && m.onError(h);
            }
            s.manager.itemError(e), s.manager.itemEnd(e);
          },
          !1
        ),
        this.responseType !== void 0 && (c.responseType = this.responseType),
        this.withCredentials !== void 0 &&
          (c.withCredentials = this.withCredentials),
        c.overrideMimeType &&
          c.overrideMimeType(
            this.mimeType !== void 0 ? this.mimeType : "text/plain"
          );
      for (const h in this.requestHeader)
        c.setRequestHeader(h, this.requestHeader[h]);
      c.send(null);
    }
    return s.manager.itemStart(e), c;
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class cl extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = Wn.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), s.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

    function l() {
      o.removeEventListener("load", l, !1),
        o.removeEventListener("error", c, !1),
        Wn.add(e, this),
        t && t(this),
        s.manager.itemEnd(e);
    }

    function c(h) {
      o.removeEventListener("load", l, !1),
        o.removeEventListener("error", c, !1),
        i && i(h),
        s.manager.itemError(e),
        s.manager.itemEnd(e);
    }
    return (
      o.addEventListener("load", l, !1),
      o.addEventListener("error", c, !1),
      e.substr(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class Hm extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new yr(),
      a = new cl(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let o = 0;

    function l(c) {
      a.load(
        e[c],
        function (h) {
          (s.images[c] = h), o++, o === 6 && ((s.needsUpdate = !0), t && t(s));
        },
        void 0,
        i
      );
    }
    for (let c = 0; c < e.length; ++c) l(c);
    return s;
  }
}
class Um extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new nt(),
      a = new cl(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          s.image = o;
          const l =
            e.search(/\.jpe?g($|\?)/i) > 0 ||
            e.search(/^data\:image\/jpeg/) === 0;
          (s.format = l ? fn : At), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        i
      ),
      s
    );
  }
}
class xt {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n,
      i = this.getPoint(0),
      s = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      (n = this.getPoint(a / e)), (s += n.distanceTo(i)), t.push(s), (i = n);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let a;
    t ? (a = t) : (a = e * n[s - 1]);
    let o = 0,
      l = s - 1,
      c;
    for (; o <= l; )
      if (((i = Math.floor(o + (l - o) / 2)), (c = n[i] - a), c < 0)) o = i + 1;
      else if (c > 0) l = i - 1;
      else {
        l = i;
        break;
      }
    if (((i = l), n[i] === a)) return i / (s - 1);
    const h = n[i],
      u = n[i + 1] - h,
      f = (a - h) / u;
    return (i + f) / (s - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4,
      s = e + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const a = this.getPoint(i),
      o = this.getPoint(s),
      l = t || (a.isVector2 ? new Z() : new b());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new b(),
      i = [],
      s = [],
      a = [],
      o = new b(),
      l = new pe();
    for (let f = 0; f <= e; f++) {
      const m = f / e;
      (i[f] = this.getTangentAt(m, new b())), i[f].normalize();
    }
    (s[0] = new b()), (a[0] = new b());
    let c = Number.MAX_VALUE;
    const h = Math.abs(i[0].x),
      d = Math.abs(i[0].y),
      u = Math.abs(i[0].z);
    h <= c && ((c = h), n.set(1, 0, 0)),
      d <= c && ((c = d), n.set(0, 1, 0)),
      u <= c && n.set(0, 0, 1),
      o.crossVectors(i[0], n).normalize(),
      s[0].crossVectors(i[0], o),
      a[0].crossVectors(i[0], s[0]);
    for (let f = 1; f <= e; f++) {
      if (
        ((s[f] = s[f - 1].clone()),
        (a[f] = a[f - 1].clone()),
        o.crossVectors(i[f - 1], i[f]),
        o.length() > Number.EPSILON)
      ) {
        o.normalize();
        const m = Math.acos(at(i[f - 1].dot(i[f]), -1, 1));
        s[f].applyMatrix4(l.makeRotationAxis(o, m));
      }
      a[f].crossVectors(i[f], s[f]);
    }
    if (t === !0) {
      let f = Math.acos(at(s[0].dot(s[e]), -1, 1));
      (f /= e), i[0].dot(o.crossVectors(s[0], s[e])) > 0 && (f = -f);
      for (let m = 1; m <= e; m++)
        s[m].applyMatrix4(l.makeRotationAxis(i[m], f * m)),
          a[m].crossVectors(i[m], s[m]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: a,
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON",
      },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class wr extends xt {
  constructor(
    e = 0,
    t = 0,
    n = 1,
    i = 1,
    s = 0,
    a = Math.PI * 2,
    o = !1,
    l = 0
  ) {
    super(),
      (this.type = "EllipseCurve"),
      (this.aX = e),
      (this.aY = t),
      (this.xRadius = n),
      (this.yRadius = i),
      (this.aStartAngle = s),
      (this.aEndAngle = a),
      (this.aClockwise = o),
      (this.aRotation = l);
  }
  getPoint(e, t) {
    const n = t || new Z(),
      i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (a ? (s = 0) : (s = i)),
      this.aClockwise === !0 && !a && (s === i ? (s = -i) : (s = s - i));
    const o = this.aStartAngle + e * s;
    let l = this.aX + this.xRadius * Math.cos(o),
      c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation),
        d = Math.sin(this.aRotation),
        u = l - this.aX,
        f = c - this.aY;
      (l = u * h - f * d + this.aX), (c = u * d + f * h + this.aY);
    }
    return n.set(l, c);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.aX = this.aX),
      (e.aY = this.aY),
      (e.xRadius = this.xRadius),
      (e.yRadius = this.yRadius),
      (e.aStartAngle = this.aStartAngle),
      (e.aEndAngle = this.aEndAngle),
      (e.aClockwise = this.aClockwise),
      (e.aRotation = this.aRotation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
}
wr.prototype.isEllipseCurve = !0;
class hl extends wr {
  constructor(e, t, n, i, s, a) {
    super(e, t, n, n, i, s, a), (this.type = "ArcCurve");
  }
}
hl.prototype.isArcCurve = !0;

function Bs() {
  let r = 0,
    e = 0,
    t = 0,
    n = 0;

  function i(s, a, o, l) {
    (r = s),
      (e = o),
      (t = -3 * s + 3 * a - 2 * o - l),
      (n = 2 * s - 2 * a + o + l);
  }
  return {
    initCatmullRom: function (s, a, o, l, c) {
      i(a, o, c * (o - s), c * (l - a));
    },
    initNonuniformCatmullRom: function (s, a, o, l, c, h, d) {
      let u = (a - s) / c - (o - s) / (c + h) + (o - a) / h,
        f = (o - a) / h - (l - a) / (h + d) + (l - o) / d;
      (u *= h), (f *= h), i(a, o, u, f);
    },
    calc: function (s) {
      const a = s * s,
        o = a * s;
      return r + e * s + t * a + n * o;
    },
  };
}
const nr = new b(),
  ts = new Bs(),
  ns = new Bs(),
  is = new Bs();
class ul extends xt {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(),
      (this.type = "CatmullRomCurve3"),
      (this.points = e),
      (this.closed = t),
      (this.curveType = n),
      (this.tension = i);
  }
  getPoint(e, t = new b()) {
    const n = t,
      i = this.points,
      s = i.length,
      a = (s - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a),
      l = a - o;
    this.closed
      ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s)
      : l === 0 && o === s - 1 && ((o = s - 2), (l = 1));
    let c, h;
    this.closed || o > 0
      ? (c = i[(o - 1) % s])
      : (nr.subVectors(i[0], i[1]).add(i[0]), (c = nr));
    const d = i[o % s],
      u = i[(o + 1) % s];
    if (
      (this.closed || o + 2 < s
        ? (h = i[(o + 2) % s])
        : (nr.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), (h = nr)),
      this.curveType === "centripetal" || this.curveType === "chordal")
    ) {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(c.distanceToSquared(d), f),
        y = Math.pow(d.distanceToSquared(u), f),
        v = Math.pow(u.distanceToSquared(h), f);
      y < 1e-4 && (y = 1),
        m < 1e-4 && (m = y),
        v < 1e-4 && (v = y),
        ts.initNonuniformCatmullRom(c.x, d.x, u.x, h.x, m, y, v),
        ns.initNonuniformCatmullRom(c.y, d.y, u.y, h.y, m, y, v),
        is.initNonuniformCatmullRom(c.z, d.z, u.z, h.z, m, y, v);
    } else
      this.curveType === "catmullrom" &&
        (ts.initCatmullRom(c.x, d.x, u.x, h.x, this.tension),
        ns.initCatmullRom(c.y, d.y, u.y, h.y, this.tension),
        is.initCatmullRom(c.z, d.z, u.z, h.z, this.tension));
    return n.set(ts.calc(l), ns.calc(l), is.calc(l)), n;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return (
      (e.closed = this.closed),
      (e.curveType = this.curveType),
      (e.tension = this.tension),
      e
    );
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new b().fromArray(i));
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
}
ul.prototype.isCatmullRomCurve3 = !0;

function uo(r, e, t, n, i) {
  const s = (n - e) * 0.5,
    a = (i - t) * 0.5,
    o = r * r,
    l = r * o;
  return (
    (2 * t - 2 * n + s + a) * l + (-3 * t + 3 * n - 2 * s - a) * o + s * r + t
  );
}

function Gm(r, e) {
  const t = 1 - r;
  return t * t * e;
}

function Vm(r, e) {
  return 2 * (1 - r) * r * e;
}

function Wm(r, e) {
  return r * r * e;
}

function gi(r, e, t, n) {
  return Gm(r, e) + Vm(r, t) + Wm(r, n);
}

function jm(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}

function qm(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}

function Xm(r, e) {
  return 3 * (1 - r) * r * r * e;
}

function Ym(r, e) {
  return r * r * r * e;
}

function yi(r, e, t, n, i) {
  return jm(r, e) + qm(r, t) + Xm(r, n) + Ym(r, i);
}
class ks extends xt {
  constructor(e = new Z(), t = new Z(), n = new Z(), i = new Z()) {
    super(),
      (this.type = "CubicBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(e, t = new Z()) {
    const n = t,
      i = this.v0,
      s = this.v1,
      a = this.v2,
      o = this.v3;
    return n.set(yi(e, i.x, s.x, a.x, o.x), yi(e, i.y, s.y, a.y, o.y)), n;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
ks.prototype.isCubicBezierCurve = !0;
class dl extends xt {
  constructor(e = new b(), t = new b(), n = new b(), i = new b()) {
    super(),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(e, t = new b()) {
    const n = t,
      i = this.v0,
      s = this.v1,
      a = this.v2,
      o = this.v3;
    return (
      n.set(
        yi(e, i.x, s.x, a.x, o.x),
        yi(e, i.y, s.y, a.y, o.y),
        yi(e, i.z, s.z, a.z, o.z)
      ),
      n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
dl.prototype.isCubicBezierCurve3 = !0;
class br extends xt {
  constructor(e = new Z(), t = new Z()) {
    super(), (this.type = "LineCurve"), (this.v1 = e), (this.v2 = t);
  }
  getPoint(e, t = new Z()) {
    const n = t;
    return (
      e === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
      n
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t) {
    const n = t || new Z();
    return n.copy(this.v2).sub(this.v1).normalize(), n;
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
br.prototype.isLineCurve = !0;
class Zm extends xt {
  constructor(e = new b(), t = new b()) {
    super(),
      (this.type = "LineCurve3"),
      (this.isLineCurve3 = !0),
      (this.v1 = e),
      (this.v2 = t);
  }
  getPoint(e, t = new b()) {
    const n = t;
    return (
      e === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
      n
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class Os extends xt {
  constructor(e = new Z(), t = new Z(), n = new Z()) {
    super(),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n);
  }
  getPoint(e, t = new Z()) {
    const n = t,
      i = this.v0,
      s = this.v1,
      a = this.v2;
    return n.set(gi(e, i.x, s.x, a.x), gi(e, i.y, s.y, a.y)), n;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
Os.prototype.isQuadraticBezierCurve = !0;
class fl extends xt {
  constructor(e = new b(), t = new b(), n = new b()) {
    super(),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n);
  }
  getPoint(e, t = new b()) {
    const n = t,
      i = this.v0,
      s = this.v1,
      a = this.v2;
    return (
      n.set(gi(e, i.x, s.x, a.x), gi(e, i.y, s.y, a.y), gi(e, i.z, s.z, a.z)), n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
fl.prototype.isQuadraticBezierCurve3 = !0;
class Hs extends xt {
  constructor(e = []) {
    super(), (this.type = "SplineCurve"), (this.points = e);
  }
  getPoint(e, t = new Z()) {
    const n = t,
      i = this.points,
      s = (i.length - 1) * e,
      a = Math.floor(s),
      o = s - a,
      l = i[a === 0 ? a : a - 1],
      c = i[a],
      h = i[a > i.length - 2 ? i.length - 1 : a + 1],
      d = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(uo(o, l.x, c.x, h.x, d.x), uo(o, l.y, c.y, h.y, d.y)), n;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new Z().fromArray(i));
    }
    return this;
  }
}
Hs.prototype.isSplineCurve = !0;
var Jm = Object.freeze({
  __proto__: null,
  ArcCurve: hl,
  CatmullRomCurve3: ul,
  CubicBezierCurve: ks,
  CubicBezierCurve3: dl,
  EllipseCurve: wr,
  LineCurve: br,
  LineCurve3: Zm,
  QuadraticBezierCurve: Os,
  QuadraticBezierCurve3: fl,
  SplineCurve: Hs,
});
class Km extends xt {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new br(t, e));
  }
  getPoint(e) {
    const t = e * this.getLength(),
      n = this.getCurveLengths();
    let i = 0;
    for (; i < n.length; ) {
      if (n[i] >= t) {
        const s = n[i] - t,
          a = this.curves[i],
          o = a.getLength(),
          l = o === 0 ? 0 : 1 - s / o;
        return a.getPointAt(l);
      }
      i++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      (t += this.curves[n].getLength()), e.push(t);
    return (this.cacheLengths = e), e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const a = s[i],
        o =
          a && a.isEllipseCurve
            ? e * 2
            : a && (a.isLineCurve || a.isLineCurve3)
            ? 1
            : a && a.isSplineCurve
            ? e * a.points.length
            : e,
        l = a.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        (n && n.equals(h)) || (t.push(h), (n = h));
      }
    }
    return (
      this.autoClose &&
        t.length > 1 &&
        !t[t.length - 1].equals(t[0]) &&
        t.push(t[0]),
      t
    );
  }
  copy(e) {
    super.copy(e), (this.curves = []);
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return (this.autoClose = e.autoClose), this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.autoClose = this.autoClose), (e.curves = []);
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new Jm[i.type]().fromJSON(i));
    }
    return this;
  }
}
class ys extends Km {
  constructor(e) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new Z()),
      e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new br(this.currentPoint.clone(), new Z(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const s = new Os(this.currentPoint.clone(), new Z(e, t), new Z(n, i));
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, a) {
    const o = new ks(
      this.currentPoint.clone(),
      new Z(e, t),
      new Z(n, i),
      new Z(s, a)
    );
    return this.curves.push(o), this.currentPoint.set(s, a), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e),
      n = new Hs(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, s, a) {
    const o = this.currentPoint.x,
      l = this.currentPoint.y;
    return this.absarc(e + o, t + l, n, i, s, a), this;
  }
  absarc(e, t, n, i, s, a) {
    return this.absellipse(e, t, n, n, i, s, a), this;
  }
  ellipse(e, t, n, i, s, a, o, l) {
    const c = this.currentPoint.x,
      h = this.currentPoint.y;
    return this.absellipse(e + c, t + h, n, i, s, a, o, l), this;
  }
  absellipse(e, t, n, i, s, a, o, l) {
    const c = new wr(e, t, n, i, s, a, o, l);
    if (this.curves.length > 0) {
      const d = c.getPoint(0);
      d.equals(this.currentPoint) || this.lineTo(d.x, d.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.currentPoint = this.currentPoint.toArray()), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class Us extends ys {
  constructor(e) {
    super(e), (this.uuid = Lt()), (this.type = "Shape"), (this.holes = []);
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e),
    };
  }
  copy(e) {
    super.copy(e), (this.holes = []);
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.uuid = this.uuid), (e.holes = []);
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []);
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new ys().fromJSON(i));
    }
    return this;
  }
}
class It extends Le {
  constructor(e, t = 1) {
    super(),
      (this.type = "Light"),
      (this.color = new he(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
It.prototype.isLight = !0;
class Qm extends It {
  constructor(e, t, n) {
    super(e, n),
      (this.type = "HemisphereLight"),
      this.position.copy(Le.DefaultUp),
      this.updateMatrix(),
      (this.groundColor = new he(t));
  }
  copy(e) {
    return (
      It.prototype.copy.call(this, e),
      this.groundColor.copy(e.groundColor),
      this
    );
  }
}
Qm.prototype.isHemisphereLight = !0;
const fo = new pe(),
  po = new b(),
  mo = new b();
class Gs {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.mapSize = new Z(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new pe()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new vr()),
      (this._frameExtents = new Z(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Fe(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    po.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(po),
      mo.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(mo),
      t.updateMatrixWorld(),
      fo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(fo),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(t.projectionMatrix),
      n.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class pl extends Gs {
  constructor() {
    super(new ut(50, 1, 0.5, 500)), (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = _i * 2 * e.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = s), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
pl.prototype.isSpotLightShadow = !0;
class $m extends It {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 1) {
    super(e, t),
      (this.type = "SpotLight"),
      this.position.copy(Le.DefaultUp),
      this.updateMatrix(),
      (this.target = new Le()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = s),
      (this.decay = a),
      (this.shadow = new pl());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
$m.prototype.isSpotLight = !0;
const go = new pe(),
  oi = new b(),
  rs = new b();
class ml extends Gs {
  constructor() {
    super(new ut(90, 1, 0.5, 500)),
      (this._frameExtents = new Z(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Fe(2, 1, 1, 1),
        new Fe(0, 1, 1, 1),
        new Fe(3, 1, 1, 1),
        new Fe(1, 1, 1, 1),
        new Fe(3, 0, 1, 1),
        new Fe(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new b(1, 0, 0),
        new b(-1, 0, 0),
        new b(0, 0, 1),
        new b(0, 0, -1),
        new b(0, 1, 0),
        new b(0, -1, 0),
      ]),
      (this._cubeUps = [
        new b(0, 1, 0),
        new b(0, 1, 0),
        new b(0, 1, 0),
        new b(0, 1, 0),
        new b(0, 0, 1),
        new b(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      s = e.distance || n.far;
    s !== n.far && ((n.far = s), n.updateProjectionMatrix()),
      oi.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(oi),
      rs.copy(n.position),
      rs.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(rs),
      n.updateMatrixWorld(),
      i.makeTranslation(-oi.x, -oi.y, -oi.z),
      go.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(go);
  }
}
ml.prototype.isPointLightShadow = !0;
class eg extends It {
  constructor(e, t, n = 0, i = 1) {
    super(e, t),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new ml());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
eg.prototype.isPointLight = !0;
class gl extends Ps {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let s = n - e,
      a = n + e,
      o = i + t,
      l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (a = s + c * this.view.width),
        (o -= h * this.view.offsetY),
        (l = o - h * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
gl.prototype.isOrthographicCamera = !0;
class yl extends Gs {
  constructor() {
    super(new gl(-5, 5, 5, -5, 0.5, 500));
  }
}
yl.prototype.isDirectionalLightShadow = !0;
class vl extends It {
  constructor(e, t) {
    super(e, t),
      (this.type = "DirectionalLight"),
      this.position.copy(Le.DefaultUp),
      this.updateMatrix(),
      (this.target = new Le()),
      (this.shadow = new yl());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
vl.prototype.isDirectionalLight = !0;
class xl extends It {
  constructor(e, t) {
    super(e, t), (this.type = "AmbientLight");
  }
}
xl.prototype.isAmbientLight = !0;
class tg extends It {
  constructor(e, t, n = 10, i = 10) {
    super(e, t),
      (this.type = "RectAreaLight"),
      (this.width = n),
      (this.height = i);
  }
  copy(e) {
    return (
      super.copy(e), (this.width = e.width), (this.height = e.height), this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.object.width = this.width), (t.object.height = this.height), t;
  }
}
tg.prototype.isRectAreaLight = !0;
class _l {
  constructor() {
    this.coefficients = [];
    for (let e = 0; e < 9; e++) this.coefficients.push(new b());
  }
  set(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
    return this;
  }
  getAt(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      a = this.coefficients;
    return (
      t.copy(a[0]).multiplyScalar(0.282095),
      t.addScaledVector(a[1], 0.488603 * i),
      t.addScaledVector(a[2], 0.488603 * s),
      t.addScaledVector(a[3], 0.488603 * n),
      t.addScaledVector(a[4], 1.092548 * (n * i)),
      t.addScaledVector(a[5], 1.092548 * (i * s)),
      t.addScaledVector(a[6], 0.315392 * (3 * s * s - 1)),
      t.addScaledVector(a[7], 1.092548 * (n * s)),
      t.addScaledVector(a[8], 0.546274 * (n * n - i * i)),
      t
    );
  }
  getIrradianceAt(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      a = this.coefficients;
    return (
      t.copy(a[0]).multiplyScalar(0.886227),
      t.addScaledVector(a[1], 2 * 0.511664 * i),
      t.addScaledVector(a[2], 2 * 0.511664 * s),
      t.addScaledVector(a[3], 2 * 0.511664 * n),
      t.addScaledVector(a[4], 2 * 0.429043 * n * i),
      t.addScaledVector(a[5], 2 * 0.429043 * i * s),
      t.addScaledVector(a[6], 0.743125 * s * s - 0.247708),
      t.addScaledVector(a[7], 2 * 0.429043 * n * s),
      t.addScaledVector(a[8], 0.429043 * (n * n - i * i)),
      t
    );
  }
  add(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
    return !0;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].fromArray(e, t + i * 3);
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].toArray(e, t + i * 3);
    return e;
  }
  static getBasisAt(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z;
    (t[0] = 0.282095),
      (t[1] = 0.488603 * i),
      (t[2] = 0.488603 * s),
      (t[3] = 0.488603 * n),
      (t[4] = 1.092548 * n * i),
      (t[5] = 1.092548 * i * s),
      (t[6] = 0.315392 * (3 * s * s - 1)),
      (t[7] = 1.092548 * n * s),
      (t[8] = 0.546274 * (n * n - i * i));
  }
}
_l.prototype.isSphericalHarmonics3 = !0;
class Vs extends It {
  constructor(e = new _l(), t = 1) {
    super(void 0, t), (this.sh = e);
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  fromJSON(e) {
    return (this.intensity = e.intensity), this.sh.fromArray(e.sh), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.object.sh = this.sh.toArray()), t;
  }
}
Vs.prototype.isLightProbe = !0;
class ng {
  static decodeText(e) {
    if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.substr(0, t + 1);
  }
}
class ig extends ke {
  constructor() {
    super(),
      (this.type = "InstancedBufferGeometry"),
      (this.instanceCount = 1 / 0);
  }
  copy(e) {
    return super.copy(e), (this.instanceCount = e.instanceCount), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = super.toJSON(this);
    return (
      (e.instanceCount = this.instanceCount),
      (e.isInstancedBufferGeometry = !0),
      e
    );
  }
}
ig.prototype.isInstancedBufferGeometry = !0;
class rg extends Je {
  constructor(e, t, n, i) {
    typeof n == "number" &&
      ((i = n),
      (n = !1),
      console.error(
        "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
      )),
      super(e, t, n),
      (this.meshPerAttribute = i || 1);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
rg.prototype.isInstancedBufferAttribute = !0;
class sg extends an {
  constructor(e) {
    super(e),
      typeof createImageBitmap > "u" &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      typeof fetch > "u" &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = {
        premultiplyAlpha: "none",
      });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = Wn.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), s.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = {};
    (o.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (o.headers = this.requestHeader),
      fetch(e, o)
        .then(function (l) {
          return l.blob();
        })
        .then(function (l) {
          return createImageBitmap(
            l,
            Object.assign(s.options, {
              colorSpaceConversion: "none",
            })
          );
        })
        .then(function (l) {
          Wn.add(e, l), t && t(l), s.manager.itemEnd(e);
        })
        .catch(function (l) {
          i && i(l), s.manager.itemError(e), s.manager.itemEnd(e);
        }),
      s.manager.itemStart(e);
  }
}
sg.prototype.isImageBitmapLoader = !0;
let ir;
const ag = {
  getContext: function () {
    return (
      ir === void 0 &&
        (ir = new (window.AudioContext || window.webkitAudioContext)()),
      ir
    );
  },
  setContext: function (r) {
    ir = r;
  },
};
class og extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this,
      a = new Om(this.manager);
    a.setResponseType("arraybuffer"),
      a.setPath(this.path),
      a.setRequestHeader(this.requestHeader),
      a.setWithCredentials(this.withCredentials),
      a.load(
        e,
        function (o) {
          try {
            const l = o.slice(0);
            ag.getContext().decodeAudioData(l, function (h) {
              t(h);
            });
          } catch (l) {
            i ? i(l) : console.error(l), s.manager.itemError(e);
          }
        },
        n,
        i
      );
  }
}
class lg extends Vs {
  constructor(e, t, n = 1) {
    super(void 0, n);
    const i = new he().set(e),
      s = new he().set(t),
      a = new b(i.r, i.g, i.b),
      o = new b(s.r, s.g, s.b),
      l = Math.sqrt(Math.PI),
      c = l * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),
      this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c);
  }
}
lg.prototype.isHemisphereLightProbe = !0;
class cg extends Vs {
  constructor(e, t = 1) {
    super(void 0, t);
    const n = new he().set(e);
    this.sh.coefficients[0]
      .set(n.r, n.g, n.b)
      .multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
cg.prototype.isAmbientLightProbe = !0;
class hg extends Le {
  constructor(e) {
    super(),
      (this.type = "Audio"),
      (this.listener = e),
      (this.context = e.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(e.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.offset = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.source = null),
      (this.sourceType = "empty"),
      (this._startedAt = 0),
      (this._progress = 0),
      (this._connected = !1),
      (this.filters = []);
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "audioNode"),
      (this.source = e),
      this.connect(),
      this
    );
  }
  setMediaElementSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaNode"),
      (this.source = this.context.createMediaElementSource(e)),
      this.connect(),
      this
    );
  }
  setMediaStreamSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaStreamNode"),
      (this.source = this.context.createMediaStreamSource(e)),
      this.connect(),
      this
    );
  }
  setBuffer(e) {
    return (
      (this.buffer = e),
      (this.sourceType = "buffer"),
      this.autoplay && this.play(),
      this
    );
  }
  play(e = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return (
      (t.buffer = this.buffer),
      (t.loop = this.loop),
      (t.loopStart = this.loopStart),
      (t.loopEnd = this.loopEnd),
      (t.onended = this.onEnded.bind(this)),
      t.start(this._startedAt, this._progress + this.offset, this.duration),
      (this.isPlaying = !0),
      (this.source = t),
      this.setDetune(this.detune),
      this.setPlaybackRate(this.playbackRate),
      this.connect()
    );
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      this.isPlaying === !0 &&
        ((this._progress +=
          Math.max(this.context.currentTime - this._startedAt, 0) *
          this.playbackRate),
        this.loop === !0 &&
          (this._progress =
            this._progress % (this.duration || this.buffer.duration)),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1)),
      this
    );
  }
  stop() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this._progress = 0),
      this.source.stop(),
      (this.source.onended = null),
      (this.isPlaying = !1),
      this
    );
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return (this._connected = !0), this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else this.source.disconnect(this.getOutput());
    return (this._connected = !1), this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return (
      e || (e = []),
      this._connected === !0
        ? (this.disconnect(), (this.filters = e.slice()), this.connect())
        : (this.filters = e.slice()),
      this
    );
  }
  setDetune(e) {
    if (((this.detune = e), this.source.detune !== void 0))
      return (
        this.isPlaying === !0 &&
          this.source.detune.setTargetAtTime(
            this.detune,
            this.context.currentTime,
            0.01
          ),
        this
      );
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.playbackRate = e),
      this.isPlaying === !0 &&
        this.source.playbackRate.setTargetAtTime(
          this.playbackRate,
          this.context.currentTime,
          0.01
        ),
      this
    );
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1
      ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
      : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.loop = e),
      this.isPlaying === !0 && (this.source.loop = this.loop),
      this
    );
  }
  setLoopStart(e) {
    return (this.loopStart = e), this;
  }
  setLoopEnd(e) {
    return (this.loopEnd = e), this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
}
class ug {
  constructor(e, t, n) {
    (this.binding = e), (this.valueSize = n);
    let i, s, a;
    switch (t) {
      case "quaternion":
        (i = this._slerp),
          (s = this._slerpAdditive),
          (a = this._setAdditiveIdentityQuaternion),
          (this.buffer = new Float64Array(n * 6)),
          (this._workIndex = 5);
        break;
      case "string":
      case "bool":
        (i = this._select),
          (s = this._select),
          (a = this._setAdditiveIdentityOther),
          (this.buffer = new Array(n * 5));
        break;
      default:
        (i = this._lerp),
          (s = this._lerpAdditive),
          (a = this._setAdditiveIdentityNumeric),
          (this.buffer = new Float64Array(n * 5));
    }
    (this._mixBufferRegion = i),
      (this._mixBufferRegionAdditive = s),
      (this._setIdentity = a),
      (this._origIndex = 3),
      (this._addIndex = 4),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0),
      (this.useCount = 0),
      (this.referenceCount = 0);
  }
  accumulate(e, t) {
    const n = this.buffer,
      i = this.valueSize,
      s = e * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== i; ++o) n[s + o] = n[o];
      a = t;
    } else {
      a += t;
      const o = t / a;
      this._mixBufferRegion(n, s, 0, o, i);
    }
    this.cumulativeWeight = a;
  }
  accumulateAdditive(e) {
    const t = this.buffer,
      n = this.valueSize,
      i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(),
      this._mixBufferRegionAdditive(t, i, 0, e, n),
      (this.cumulativeWeightAdditive += e);
  }
  apply(e) {
    const t = this.valueSize,
      n = this.buffer,
      i = e * t + t,
      s = this.cumulativeWeight,
      a = this.cumulativeWeightAdditive,
      o = this.binding;
    if (
      ((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), s < 1)
    ) {
      const l = t * this._origIndex;
      this._mixBufferRegion(n, i, l, 1 - s, t);
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l)
      if (n[l] !== n[l + t]) {
        o.setValue(n, i);
        break;
      }
  }
  saveOriginalState() {
    const e = this.binding,
      t = this.buffer,
      n = this.valueSize,
      i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, a = i; s !== a; ++s) t[s] = t[i + (s % n)];
    this._setIdentity(),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0);
  }
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize,
      t = e + this.valueSize;
    for (let n = e; n < t; n++) this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(),
      (this.buffer[this._addIndex * this.valueSize + 3] = 1);
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize,
      t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  _select(e, t, n, i, s) {
    if (i >= 0.5) for (let a = 0; a !== s; ++a) e[t + a] = e[n + a];
  }
  _slerp(e, t, n, i) {
    tt.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const a = this._workIndex * s;
    tt.multiplyQuaternionsFlat(e, a, e, t, e, n),
      tt.slerpFlat(e, t, e, t, e, a, i);
  }
  _lerp(e, t, n, i, s) {
    const a = 1 - i;
    for (let o = 0; o !== s; ++o) {
      const l = t + o;
      e[l] = e[l] * a + e[n + o] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let a = 0; a !== s; ++a) {
      const o = t + a;
      e[o] = e[o] + e[n + a] * i;
    }
  }
}
const Ws = "\\[\\]\\.:\\/",
  dg = new RegExp("[" + Ws + "]", "g"),
  js = "[^" + Ws + "]",
  fg = "[^" + Ws.replace("\\.", "") + "]",
  pg = /((?:WC+[\/:])*)/.source.replace("WC", js),
  mg = /(WCOD+)?/.source.replace("WCOD", fg),
  gg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", js),
  yg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", js),
  vg = new RegExp("^" + pg + mg + gg + yg + "$"),
  xg = ["material", "materials", "bones"];
class _g {
  constructor(e, t, n) {
    const i = n || Ne.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Ne {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || Ne.parseTrackName(t)),
      (this.node = Ne.findNode(e, this.parsedPath.nodeName) || e),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new Ne.Composite(e, t, n)
      : new Ne(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(dg, "");
  }
  static parseTrackName(e) {
    const t = vg.exec(e);
    if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      xg.indexOf(s) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = s));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (!t || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (s) {
          for (let a = 0; a < s.length; a++) {
            const o = s[a];
            if (o.name === t || o.uuid === t) return o;
            const l = n(o.children);
            if (l) return l;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.node[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let s = t.propertyIndex;
    if (
      (e ||
        ((e = Ne.findNode(this.rootNode, t.nodeName) || this.rootNode),
        (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.error(
        "THREE.PropertyBinding: Trying to update node for track: " +
          this.path +
          " but it wasn't found."
      );
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === c) {
              c = h;
              break;
            }
          break;
        default:
          if (e[n] === void 0) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          c +
          "." +
          i +
          " but it wasn't found.",
        e
      );
      return;
    }
    let o = this.Versioning.None;
    (this.targetObject = e),
      e.needsUpdate !== void 0
        ? (o = this.Versioning.NeedsUpdate)
        : e.matrixWorldNeedsUpdate !== void 0 &&
          (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (e.geometry.isBufferGeometry) {
          if (!e.geometry.morphAttributes) {
            console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this
            );
            return;
          }
          e.morphTargetDictionary[s] !== void 0 &&
            (s = e.morphTargetDictionary[s]);
        } else {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
            this
          );
          return;
        }
      }
      (l = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = s);
    } else
      a.fromArray !== void 0 && a.toArray !== void 0
        ? ((l = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((l = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[l]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[l][o]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
Ne.Composite = _g;
Ne.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
Ne.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
Ne.prototype.GetterByBindingType = [
  Ne.prototype._getValue_direct,
  Ne.prototype._getValue_array,
  Ne.prototype._getValue_arrayElement,
  Ne.prototype._getValue_toArray,
];
Ne.prototype.SetterByBindingTypeAndVersioning = [
  [
    Ne.prototype._setValue_direct,
    Ne.prototype._setValue_direct_setNeedsUpdate,
    Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    Ne.prototype._setValue_array,
    Ne.prototype._setValue_array_setNeedsUpdate,
    Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    Ne.prototype._setValue_arrayElement,
    Ne.prototype._setValue_arrayElement_setNeedsUpdate,
    Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    Ne.prototype._setValue_fromArray,
    Ne.prototype._setValue_fromArray_setNeedsUpdate,
    Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class wg {
  constructor(e, t, n = null, i = t.blendMode) {
    (this._mixer = e),
      (this._clip = t),
      (this._localRoot = n),
      (this.blendMode = i);
    const s = t.tracks,
      a = s.length,
      o = new Array(a),
      l = {
        endingStart: On,
        endingEnd: On,
      };
    for (let c = 0; c !== a; ++c) {
      const h = s[c].createInterpolant(null);
      (o[c] = h), (h.settings = l);
    }
    (this._interpolantSettings = l),
      (this._interpolants = o),
      (this._propertyBindings = new Array(a)),
      (this._cacheIndex = null),
      (this._byClipCacheIndex = null),
      (this._timeScaleInterpolant = null),
      (this._weightInterpolant = null),
      (this.loop = Xc),
      (this._loopCount = -1),
      (this._startTime = null),
      (this.time = 0),
      (this.timeScale = 1),
      (this._effectiveTimeScale = 1),
      (this.weight = 1),
      (this._effectiveWeight = 1),
      (this.repetitions = 1 / 0),
      (this.paused = !1),
      (this.enabled = !0),
      (this.clampWhenFinished = !1),
      (this.zeroSlopeAtStart = !0),
      (this.zeroSlopeAtEnd = !0);
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return (
      (this.paused = !1),
      (this.enabled = !0),
      (this.time = 0),
      (this._loopCount = -1),
      (this._startTime = null),
      this.stopFading().stopWarping()
    );
  }
  isRunning() {
    return (
      this.enabled &&
      !this.paused &&
      this.timeScale !== 0 &&
      this._startTime === null &&
      this._mixer._isActiveAction(this)
    );
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return (this._startTime = e), this;
  }
  setLoop(e, t) {
    return (this.loop = e), (this.repetitions = t), this;
  }
  setEffectiveWeight(e) {
    return (
      (this.weight = e),
      (this._effectiveWeight = this.enabled ? e : 0),
      this.stopFading()
    );
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if ((e.fadeOut(t), this.fadeIn(t), n)) {
      const i = this._clip.duration,
        s = e._clip.duration,
        a = s / i,
        o = i / s;
      e.warp(1, a, t), this.warp(o, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return (
      e !== null &&
        ((this._weightInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  setEffectiveTimeScale(e) {
    return (
      (this.timeScale = e),
      (this._effectiveTimeScale = this.paused ? 0 : e),
      this.stopWarping()
    );
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return (this.timeScale = this._clip.duration / e), this.stopWarping();
  }
  syncWith(e) {
    return (
      (this.time = e.time), (this.timeScale = e.timeScale), this.stopWarping()
    );
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer,
      s = i.time,
      a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null &&
      ((o = i._lendControlInterpolant()), (this._timeScaleInterpolant = o));
    const l = o.parameterPositions,
      c = o.sampleValues;
    return (l[0] = s), (l[1] = s + n), (c[0] = e / a), (c[1] = t / a), this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return (
      e !== null &&
        ((this._timeScaleInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const l = (e - s) * n;
      if (l < 0 || n === 0) return;
      (this._startTime = null), (t = n * l);
    }
    t *= this._updateTimeScale(e);
    const a = this._updateTime(t),
      o = this._updateWeight(e);
    if (o > 0) {
      const l = this._interpolants,
        c = this._propertyBindings;
      switch (this.blendMode) {
        case Lo:
          for (let h = 0, d = l.length; h !== d; ++h)
            l[h].evaluate(a), c[h].accumulateAdditive(o);
          break;
        case Es:
        default:
          for (let h = 0, d = l.length; h !== d; ++h)
            l[h].evaluate(a), c[h].accumulate(i, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        (t *= i),
          e > n.parameterPositions[1] &&
            (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return (this._effectiveWeight = t), t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        (t *= i),
          e > n.parameterPositions[1] &&
            (this.stopWarping(),
            t === 0 ? (this.paused = !0) : (this.timeScale = t));
      }
    }
    return (this._effectiveTimeScale = t), t;
  }
  _updateTime(e) {
    const t = this._clip.duration,
      n = this.loop;
    let i = this.time + e,
      s = this._loopCount;
    const a = n === Yc;
    if (e === 0) return s === -1 ? i : a && (s & 1) === 1 ? t - i : i;
    if (n === qc) {
      s === -1 && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
      e: {
        if (i >= t) i = t;
        else if (i < 0) i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
          (this.time = i),
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e < 0 ? -1 : 1,
          });
      }
    } else {
      if (
        (s === -1 &&
          (e >= 0
            ? ((s = 0), this._setEndings(!0, this.repetitions === 0, a))
            : this._setEndings(this.repetitions === 0, !0, a)),
        i >= t || i < 0)
      ) {
        const o = Math.floor(i / t);
        (i -= t * o), (s += Math.abs(o));
        const l = this.repetitions - s;
        if (l <= 0)
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (i = e > 0 ? t : 0),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e > 0 ? 1 : -1,
            });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, a);
          } else this._setEndings(!1, !1, a);
          (this._loopCount = s),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: o,
            });
        }
      } else this.time = i;
      if (a && (s & 1) === 1) return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n
      ? ((i.endingStart = Hn), (i.endingEnd = Hn))
      : (e
          ? (i.endingStart = this.zeroSlopeAtStart ? Hn : On)
          : (i.endingStart = hr),
        t ? (i.endingEnd = this.zeroSlopeAtEnd ? Hn : On) : (i.endingEnd = hr));
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer,
      s = i.time;
    let a = this._weightInterpolant;
    a === null &&
      ((a = i._lendControlInterpolant()), (this._weightInterpolant = a));
    const o = a.parameterPositions,
      l = a.sampleValues;
    return (o[0] = s), (l[0] = t), (o[1] = s + e), (l[1] = n), this;
  }
}
class bg extends sn {
  constructor(e) {
    super(),
      (this._root = e),
      this._initMemoryManager(),
      (this._accuIndex = 0),
      (this.time = 0),
      (this.timeScale = 1);
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root,
      i = e._clip.tracks,
      s = i.length,
      a = e._propertyBindings,
      o = e._interpolants,
      l = n.uuid,
      c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && ((h = {}), (c[l] = h));
    for (let d = 0; d !== s; ++d) {
      const u = i[d],
        f = u.name;
      let m = h[f];
      if (m !== void 0) a[d] = m;
      else {
        if (((m = a[d]), m !== void 0)) {
          m._cacheIndex === null &&
            (++m.referenceCount, this._addInactiveBinding(m, l, f));
          continue;
        }
        const y = t && t._propertyBindings[d].binding.parsedPath;
        (m = new ug(Ne.create(n, f, y), u.ValueTypeName, u.getValueSize())),
          ++m.referenceCount,
          this._addInactiveBinding(m, l, f),
          (a[d] = m);
      }
      o[d].resultBuffer = m.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid,
          i = e._clip.uuid,
          s = this._actionsByClip[i];
        this._bindAction(e, s && s.knownActions[0]),
          this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 &&
          (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    (this._actions = []),
      (this._nActiveActions = 0),
      (this._actionsByClip = {}),
      (this._bindings = []),
      (this._nActiveBindings = 0),
      (this._bindingsByRootAndName = {}),
      (this._controlInterpolants = []),
      (this._nActiveControlInterpolants = 0);
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        },
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        },
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        },
      },
    };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions,
      s = this._actionsByClip;
    let a = s[t];
    if (a === void 0)
      (a = {
        knownActions: [e],
        actionByRoot: {},
      }),
        (e._byClipCacheIndex = 0),
        (s[t] = a);
    else {
      const o = a.knownActions;
      (e._byClipCacheIndex = o.length), o.push(e);
    }
    (e._cacheIndex = i.length), i.push(e), (a.actionByRoot[n] = e);
  }
  _removeInactiveAction(e) {
    const t = this._actions,
      n = t[t.length - 1],
      i = e._cacheIndex;
    (n._cacheIndex = i), (t[i] = n), t.pop(), (e._cacheIndex = null);
    const s = e._clip.uuid,
      a = this._actionsByClip,
      o = a[s],
      l = o.knownActions,
      c = l[l.length - 1],
      h = e._byClipCacheIndex;
    (c._byClipCacheIndex = h),
      (l[h] = c),
      l.pop(),
      (e._byClipCacheIndex = null);
    const d = o.actionByRoot,
      u = (e._localRoot || this._root).uuid;
    delete d[u],
      l.length === 0 && delete a[s],
      this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions,
      n = e._cacheIndex,
      i = this._nActiveActions++,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _takeBackAction(e) {
    const t = this._actions,
      n = e._cacheIndex,
      i = --this._nActiveActions,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName,
      s = this._bindings;
    let a = i[t];
    a === void 0 && ((a = {}), (i[t] = a)),
      (a[n] = e),
      (e._cacheIndex = s.length),
      s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings,
      n = e.binding,
      i = n.rootNode.uuid,
      s = n.path,
      a = this._bindingsByRootAndName,
      o = a[i],
      l = t[t.length - 1],
      c = e._cacheIndex;
    (l._cacheIndex = c),
      (t[c] = l),
      t.pop(),
      delete o[s],
      Object.keys(o).length === 0 && delete a[i];
  }
  _lendBinding(e) {
    const t = this._bindings,
      n = e._cacheIndex,
      i = this._nActiveBindings++,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _takeBackBinding(e) {
    const t = this._bindings,
      n = e._cacheIndex,
      i = --this._nActiveBindings,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants,
      t = this._nActiveControlInterpolants++;
    let n = e[t];
    return (
      n === void 0 &&
        ((n = new ol(
          new Float32Array(2),
          new Float32Array(2),
          1,
          this._controlInterpolantsResultBuffer
        )),
        (n.__cacheIndex = t),
        (e[t] = n)),
      n
    );
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants,
      n = e.__cacheIndex,
      i = --this._nActiveControlInterpolants,
      s = t[i];
    (e.__cacheIndex = i), (t[i] = e), (s.__cacheIndex = n), (t[n] = s);
  }
  clipAction(e, t, n) {
    const i = t || this._root,
      s = i.uuid;
    let a = typeof e == "string" ? ho.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e,
      l = this._actionsByClip[o];
    let c = null;
    if (
      (n === void 0 && (a !== null ? (n = a.blendMode) : (n = Es)),
      l !== void 0)
    ) {
      const d = l.actionByRoot[s];
      if (d !== void 0 && d.blendMode === n) return d;
      (c = l.knownActions[0]), a === null && (a = c._clip);
    }
    if (a === null) return null;
    const h = new wg(this, a, t, n);
    return this._bindAction(h, c), this._addInactiveAction(h, o, s), h;
  }
  existingAction(e, t) {
    const n = t || this._root,
      i = n.uuid,
      s = typeof e == "string" ? ho.findByName(n, e) : e,
      a = s ? s.uuid : e,
      o = this._actionsByClip[a];
    return (o !== void 0 && o.actionByRoot[i]) || null;
  }
  stopAllAction() {
    const e = this._actions,
      t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n) e[n].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions,
      n = this._nActiveActions,
      i = (this.time += e),
      s = Math.sign(e),
      a = (this._accuIndex ^= 1);
    for (let c = 0; c !== n; ++c) t[c]._update(i, e, s, a);
    const o = this._bindings,
      l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) o[c].apply(a);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions,
      n = e.uuid,
      i = this._actionsByClip,
      s = i[n];
    if (s !== void 0) {
      const a = s.knownActions;
      for (let o = 0, l = a.length; o !== l; ++o) {
        const c = a[o];
        this._deactivateAction(c);
        const h = c._cacheIndex,
          d = t[t.length - 1];
        (c._cacheIndex = null),
          (c._byClipCacheIndex = null),
          (d._cacheIndex = h),
          (t[h] = d),
          t.pop(),
          this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid,
      n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot,
        l = o[t];
      l !== void 0 &&
        (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName,
      s = i[t];
    if (s !== void 0)
      for (const a in s) {
        const o = s[a];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
bg.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class Mg extends yn {
  constructor(e, t, n = 1) {
    super(e, t), (this.meshPerAttribute = n || 1);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  clone(e) {
    const t = super.clone(e);
    return (t.meshPerAttribute = this.meshPerAttribute), t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.isInstancedInterleavedBuffer = !0),
      (t.meshPerAttribute = this.meshPerAttribute),
      t
    );
  }
}
Mg.prototype.isInstancedInterleavedBuffer = !0;
class Sg {
  constructor(e, t, n = 0, i = 1 / 0) {
    (this.ray = new gn(e, t)),
      (this.near = n),
      (this.far = i),
      (this.camera = null),
      (this.layers = new Po()),
      (this.params = {
        Mesh: {},
        Line: {
          threshold: 1,
        },
        LOD: {},
        Points: {
          threshold: 1,
        },
        Sprite: {},
      });
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t && t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t && t.isOrthographicCamera
      ? (this.ray.origin
          .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
          .unproject(t),
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
        (this.camera = t))
      : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !1, n = []) {
    return vs(e, this, n, t), n.sort(yo), n;
  }
  intersectObjects(e, t = !1, n = []) {
    for (let i = 0, s = e.length; i < s; i++) vs(e[i], this, n, t);
    return n.sort(yo), n;
  }
}

function yo(r, e) {
  return r.distance - e.distance;
}

function vs(r, e, t, n) {
  if ((r.layers.test(e.layers) && r.raycast(e, t), n === !0)) {
    const i = r.children;
    for (let s = 0, a = i.length; s < a; s++) vs(i[s], e, t, !0);
  }
}
class vo {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(at(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Tg extends Le {
  constructor(e) {
    super(),
      (this.material = e),
      (this.render = function () {}),
      (this.hasPositions = !1),
      (this.hasNormals = !1),
      (this.hasColors = !1),
      (this.hasUvs = !1),
      (this.positionArray = null),
      (this.normalArray = null),
      (this.colorArray = null),
      (this.uvArray = null),
      (this.count = 0);
  }
}
Tg.prototype.isImmediateRenderObject = !0;
const Qt = new b(),
  rr = new pe(),
  ss = new pe();
class Eg extends Fs {
  constructor(e) {
    const t = wl(e),
      n = new ke(),
      i = [],
      s = [],
      a = new he(0, 0, 1),
      o = new he(0, 1, 0);
    for (let c = 0; c < t.length; c++) {
      const h = t[c];
      h.parent &&
        h.parent.isBone &&
        (i.push(0, 0, 0),
        i.push(0, 0, 0),
        s.push(a.r, a.g, a.b),
        s.push(o.r, o.g, o.b));
    }
    n.setAttribute("position", new We(i, 3)),
      n.setAttribute("color", new We(s, 3));
    const l = new Ai({
      vertexColors: !0,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
      transparent: !0,
    });
    super(n, l),
      (this.type = "SkeletonHelper"),
      (this.isSkeletonHelper = !0),
      (this.root = e),
      (this.bones = t),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }
  updateMatrixWorld(e) {
    const t = this.bones,
      n = this.geometry,
      i = n.getAttribute("position");
    ss.copy(this.root.matrixWorld).invert();
    for (let s = 0, a = 0; s < t.length; s++) {
      const o = t[s];
      o.parent &&
        o.parent.isBone &&
        (rr.multiplyMatrices(ss, o.matrixWorld),
        Qt.setFromMatrixPosition(rr),
        i.setXYZ(a, Qt.x, Qt.y, Qt.z),
        rr.multiplyMatrices(ss, o.parent.matrixWorld),
        Qt.setFromMatrixPosition(rr),
        i.setXYZ(a + 1, Qt.x, Qt.y, Qt.z),
        (a += 2));
    }
    (n.getAttribute("position").needsUpdate = !0), super.updateMatrixWorld(e);
  }
}

function wl(r) {
  const e = [];
  r && r.isBone && e.push(r);
  for (let t = 0; t < r.children.length; t++)
    e.push.apply(e, wl(r.children[t]));
  return e;
}
class Ag extends Fs {
  constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
    (n = new he(n)), (i = new he(i));
    const s = t / 2,
      a = e / t,
      o = e / 2,
      l = [],
      c = [];
    for (let u = 0, f = 0, m = -o; u <= t; u++, m += a) {
      l.push(-o, 0, m, o, 0, m), l.push(m, 0, -o, m, 0, o);
      const y = u === s ? n : i;
      y.toArray(c, f),
        (f += 3),
        y.toArray(c, f),
        (f += 3),
        y.toArray(c, f),
        (f += 3),
        y.toArray(c, f),
        (f += 3);
    }
    const h = new ke();
    h.setAttribute("position", new We(l, 3)),
      h.setAttribute("color", new We(c, 3));
    const d = new Ai({
      vertexColors: !0,
      toneMapped: !1,
    });
    super(h, d), (this.type = "GridHelper");
  }
}
const Lg = new Float32Array(1);
new Int32Array(Lg.buffer);
const Cg = new Cs({
  side: Ze,
  depthWrite: !1,
  depthTest: !1,
});
new gt(new Rs(), Cg);
xt.create = function (r, e) {
  return (
    console.log("THREE.Curve.create() has been deprecated"),
    (r.prototype = Object.create(xt.prototype)),
    (r.prototype.constructor = r),
    (r.prototype.getPoint = e),
    r
  );
};
ys.prototype.fromPoints = function (r) {
  return (
    console.warn(
      "THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
    ),
    this.setFromPoints(r)
  );
};
Ag.prototype.setColors = function () {
  console.error(
    "THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
  );
};
Eg.prototype.update = function () {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
an.prototype.extractUrlBase = function (r) {
  return (
    console.warn(
      "THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
    ),
    ng.extractUrlBase(r)
  );
};
an.Handlers = {
  add: function () {
    console.error(
      "THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
    );
  },
  get: function () {
    console.error(
      "THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
    );
  },
};
_t.prototype.center = function (r) {
  return (
    console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
    this.getCenter(r)
  );
};
_t.prototype.empty = function () {
  return (
    console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
  );
};
_t.prototype.isIntersectionBox = function (r) {
  return (
    console.warn(
      "THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
    ),
    this.intersectsBox(r)
  );
};
_t.prototype.isIntersectionSphere = function (r) {
  return (
    console.warn(
      "THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
    ),
    this.intersectsSphere(r)
  );
};
_t.prototype.size = function (r) {
  return (
    console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
    this.getSize(r)
  );
};
Xn.prototype.empty = function () {
  return (
    console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
  );
};
vr.prototype.setFromMatrix = function (r) {
  return (
    console.warn(
      "THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."
    ),
    this.setFromProjectionMatrix(r)
  );
};
et.prototype.flattenToArrayOffset = function (r, e) {
  return (
    console.warn(
      "THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
    ),
    this.toArray(r, e)
  );
};
et.prototype.multiplyVector3 = function (r) {
  return (
    console.warn(
      "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
    ),
    r.applyMatrix3(this)
  );
};
et.prototype.multiplyVector3Array = function () {
  console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
};
et.prototype.applyToBufferAttribute = function (r) {
  return (
    console.warn(
      "THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
    ),
    r.applyMatrix3(this)
  );
};
et.prototype.applyToVector3Array = function () {
  console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
};
et.prototype.getInverse = function (r) {
  return (
    console.warn(
      "THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
    ),
    this.copy(r).invert()
  );
};
pe.prototype.extractPosition = function (r) {
  return (
    console.warn(
      "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
    ),
    this.copyPosition(r)
  );
};
pe.prototype.flattenToArrayOffset = function (r, e) {
  return (
    console.warn(
      "THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
    ),
    this.toArray(r, e)
  );
};
pe.prototype.getPosition = function () {
  return (
    console.warn(
      "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
    ),
    new b().setFromMatrixColumn(this, 3)
  );
};
pe.prototype.setRotationFromQuaternion = function (r) {
  return (
    console.warn(
      "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
    ),
    this.makeRotationFromQuaternion(r)
  );
};
pe.prototype.multiplyToArray = function () {
  console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
};
pe.prototype.multiplyVector3 = function (r) {
  return (
    console.warn(
      "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
    ),
    r.applyMatrix4(this)
  );
};
pe.prototype.multiplyVector4 = function (r) {
  return (
    console.warn(
      "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
    ),
    r.applyMatrix4(this)
  );
};
pe.prototype.multiplyVector3Array = function () {
  console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
};
pe.prototype.rotateAxis = function (r) {
  console.warn(
    "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
  ),
    r.transformDirection(this);
};
pe.prototype.crossVector = function (r) {
  return (
    console.warn(
      "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
    ),
    r.applyMatrix4(this)
  );
};
pe.prototype.translate = function () {
  console.error("THREE.Matrix4: .translate() has been removed.");
};
pe.prototype.rotateX = function () {
  console.error("THREE.Matrix4: .rotateX() has been removed.");
};
pe.prototype.rotateY = function () {
  console.error("THREE.Matrix4: .rotateY() has been removed.");
};
pe.prototype.rotateZ = function () {
  console.error("THREE.Matrix4: .rotateZ() has been removed.");
};
pe.prototype.rotateByAxis = function () {
  console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
};
pe.prototype.applyToBufferAttribute = function (r) {
  return (
    console.warn(
      "THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
    ),
    r.applyMatrix4(this)
  );
};
pe.prototype.applyToVector3Array = function () {
  console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
};
pe.prototype.makeFrustum = function (r, e, t, n, i, s) {
  return (
    console.warn(
      "THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
    ),
    this.makePerspective(r, e, n, t, i, s)
  );
};
pe.prototype.getInverse = function (r) {
  return (
    console.warn(
      "THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
    ),
    this.copy(r).invert()
  );
};
Pt.prototype.isIntersectionLine = function (r) {
  return (
    console.warn(
      "THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
    ),
    this.intersectsLine(r)
  );
};
tt.prototype.multiplyVector3 = function (r) {
  return (
    console.warn(
      "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
    ),
    r.applyQuaternion(this)
  );
};
tt.prototype.inverse = function () {
  return (
    console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),
    this.invert()
  );
};
gn.prototype.isIntersectionBox = function (r) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
    ),
    this.intersectsBox(r)
  );
};
gn.prototype.isIntersectionPlane = function (r) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
    ),
    this.intersectsPlane(r)
  );
};
gn.prototype.isIntersectionSphere = function (r) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
    ),
    this.intersectsSphere(r)
  );
};
Xe.prototype.area = function () {
  return (
    console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
    this.getArea()
  );
};
Xe.prototype.barycoordFromPoint = function (r, e) {
  return (
    console.warn(
      "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
    ),
    this.getBarycoord(r, e)
  );
};
Xe.prototype.midpoint = function (r) {
  return (
    console.warn(
      "THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
    ),
    this.getMidpoint(r)
  );
};
Xe.prototypenormal = function (r) {
  return (
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    this.getNormal(r)
  );
};
Xe.prototype.plane = function (r) {
  return (
    console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
    this.getPlane(r)
  );
};
Xe.barycoordFromPoint = function (r, e, t, n, i) {
  return (
    console.warn(
      "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
    ),
    Xe.getBarycoord(r, e, t, n, i)
  );
};
Xe.normal = function (r, e, t, n) {
  return (
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    Xe.getNormal(r, e, t, n)
  );
};
Us.prototype.extractAllPoints = function (r) {
  return (
    console.warn(
      "THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
    ),
    this.extractPoints(r)
  );
};
Us.prototype.extrude = function (r) {
  return (
    console.warn(
      "THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
    ),
    new _r(this, r)
  );
};
Us.prototype.makeGeometry = function (r) {
  return (
    console.warn(
      "THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
    ),
    new bm(this, r)
  );
};
Z.prototype.fromAttribute = function (r, e, t) {
  return (
    console.warn(
      "THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
    ),
    this.fromBufferAttribute(r, e, t)
  );
};
Z.prototype.distanceToManhattan = function (r) {
  return (
    console.warn(
      "THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
    ),
    this.manhattanDistanceTo(r)
  );
};
Z.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
    ),
    this.manhattanLength()
  );
};
b.prototype.setEulerFromRotationMatrix = function () {
  console.error(
    "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
  );
};
b.prototype.setEulerFromQuaternion = function () {
  console.error(
    "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
  );
};
b.prototype.getPositionFromMatrix = function (r) {
  return (
    console.warn(
      "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
    ),
    this.setFromMatrixPosition(r)
  );
};
b.prototype.getScaleFromMatrix = function (r) {
  return (
    console.warn(
      "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
    ),
    this.setFromMatrixScale(r)
  );
};
b.prototype.getColumnFromMatrix = function (r, e) {
  return (
    console.warn(
      "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
    ),
    this.setFromMatrixColumn(e, r)
  );
};
b.prototype.applyProjection = function (r) {
  return (
    console.warn(
      "THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
    ),
    this.applyMatrix4(r)
  );
};
b.prototype.fromAttribute = function (r, e, t) {
  return (
    console.warn(
      "THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
    ),
    this.fromBufferAttribute(r, e, t)
  );
};
b.prototype.distanceToManhattan = function (r) {
  return (
    console.warn(
      "THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
    ),
    this.manhattanDistanceTo(r)
  );
};
b.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
    ),
    this.manhattanLength()
  );
};
Fe.prototype.fromAttribute = function (r, e, t) {
  return (
    console.warn(
      "THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
    ),
    this.fromBufferAttribute(r, e, t)
  );
};
Fe.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
    ),
    this.manhattanLength()
  );
};
Le.prototype.getChildByName = function (r) {
  return (
    console.warn(
      "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
    ),
    this.getObjectByName(r)
  );
};
Le.prototype.renderDepth = function () {
  console.warn(
    "THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
  );
};
Le.prototype.translate = function (r, e) {
  return (
    console.warn(
      "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
    ),
    this.translateOnAxis(e, r)
  );
};
Le.prototype.getWorldRotation = function () {
  console.error(
    "THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
  );
};
Le.prototype.applyMatrix = function (r) {
  return (
    console.warn(
      "THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."
    ),
    this.applyMatrix4(r)
  );
};
Object.defineProperties(Le.prototype, {
  eulerOrder: {
    get: function () {
      return (
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
        this.rotation.order
      );
    },
    set: function (r) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
        (this.rotation.order = r);
    },
  },
  useQuaternion: {
    get: function () {
      console.warn(
        "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
      );
    },
    set: function () {
      console.warn(
        "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
      );
    },
  },
});
gt.prototype.setDrawMode = function () {
  console.error(
    "THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
  );
};
Object.defineProperties(gt.prototype, {
  drawMode: {
    get: function () {
      return (
        console.error(
          "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
        ),
        Zc
      );
    },
    set: function () {
      console.error(
        "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
      );
    },
  },
});
el.prototype.initBones = function () {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
ut.prototype.setLens = function (r, e) {
  console.warn(
    "THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
  ),
    e !== void 0 && (this.filmGauge = e),
    this.setFocalLength(r);
};
Object.defineProperties(It.prototype, {
  onlyShadow: {
    set: function () {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    },
  },
  shadowCameraFov: {
    set: function (r) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
        (this.shadow.camera.fov = r);
    },
  },
  shadowCameraLeft: {
    set: function (r) {
      console.warn(
        "THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
      ),
        (this.shadow.camera.left = r);
    },
  },
  shadowCameraRight: {
    set: function (r) {
      console.warn(
        "THREE.Light: .shadowCameraRight is now .shadow.camera.right."
      ),
        (this.shadow.camera.right = r);
    },
  },
  shadowCameraTop: {
    set: function (r) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
        (this.shadow.camera.top = r);
    },
  },
  shadowCameraBottom: {
    set: function (r) {
      console.warn(
        "THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
      ),
        (this.shadow.camera.bottom = r);
    },
  },
  shadowCameraNear: {
    set: function (r) {
      console.warn(
        "THREE.Light: .shadowCameraNear is now .shadow.camera.near."
      ),
        (this.shadow.camera.near = r);
    },
  },
  shadowCameraFar: {
    set: function (r) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
        (this.shadow.camera.far = r);
    },
  },
  shadowCameraVisible: {
    set: function () {
      console.warn(
        "THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
      );
    },
  },
  shadowBias: {
    set: function (r) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
        (this.shadow.bias = r);
    },
  },
  shadowDarkness: {
    set: function () {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    },
  },
  shadowMapWidth: {
    set: function (r) {
      console.warn(
        "THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
      ),
        (this.shadow.mapSize.width = r);
    },
  },
  shadowMapHeight: {
    set: function (r) {
      console.warn(
        "THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
      ),
        (this.shadow.mapSize.height = r);
    },
  },
});
Object.defineProperties(Je.prototype, {
  length: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferAttribute: .length has been deprecated. Use .count instead."
        ),
        this.array.length
      );
    },
  },
  dynamic: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
        ),
        this.usage === ur
      );
    },
    set: function () {
      console.warn(
        "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
      ),
        this.setUsage(ur);
    },
  },
});
Je.prototype.setDynamic = function (r) {
  return (
    console.warn(
      "THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
    ),
    this.setUsage(r === !0 ? ur : xi),
    this
  );
};
(Je.prototype.copyIndicesArray = function () {
  console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}),
  (Je.prototype.setArray = function () {
    console.error(
      "THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
    );
  });
ke.prototype.addIndex = function (r) {
  console.warn(
    "THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
  ),
    this.setIndex(r);
};
ke.prototype.addAttribute = function (r, e) {
  return (
    console.warn(
      "THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
    ),
    !(e && e.isBufferAttribute) && !(e && e.isInterleavedBufferAttribute)
      ? (console.warn(
          "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
        ),
        this.setAttribute(r, new Je(arguments[1], arguments[2])))
      : r === "index"
      ? (console.warn(
          "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
        ),
        this.setIndex(e),
        this)
      : this.setAttribute(r, e)
  );
};
ke.prototype.addDrawCall = function (r, e, t) {
  t !== void 0 &&
    console.warn(
      "THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
    ),
    console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
    this.addGroup(r, e);
};
ke.prototype.clearDrawCalls = function () {
  console.warn(
    "THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
  ),
    this.clearGroups();
};
ke.prototype.computeOffsets = function () {
  console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
};
ke.prototype.removeAttribute = function (r) {
  return (
    console.warn(
      "THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
    ),
    this.deleteAttribute(r)
  );
};
ke.prototype.applyMatrix = function (r) {
  return (
    console.warn(
      "THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."
    ),
    this.applyMatrix4(r)
  );
};
Object.defineProperties(ke.prototype, {
  drawcalls: {
    get: function () {
      return (
        console.error(
          "THREE.BufferGeometry: .drawcalls has been renamed to .groups."
        ),
        this.groups
      );
    },
  },
  offsets: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferGeometry: .offsets has been renamed to .groups."
        ),
        this.groups
      );
    },
  },
});
yn.prototype.setDynamic = function (r) {
  return (
    console.warn(
      "THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
    ),
    this.setUsage(r === !0 ? ur : xi),
    this
  );
};
yn.prototype.setArray = function () {
  console.error(
    "THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
  );
};
_r.prototype.getArrays = function () {
  console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
};
_r.prototype.addShapeList = function () {
  console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
};
_r.prototype.addShape = function () {
  console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
};
Is.prototype.dispose = function () {
  console.error("THREE.Scene: .dispose() has been removed.");
};
Object.defineProperties(Ke.prototype, {
  wrapAround: {
    get: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
  },
  overdraw: {
    get: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
  },
  wrapRGB: {
    get: function () {
      return (
        console.warn("THREE.Material: .wrapRGB has been removed."), new he()
      );
    },
  },
  shading: {
    get: function () {
      console.error(
        "THREE." +
          this.type +
          ": .shading has been removed. Use the boolean .flatShading instead."
      );
    },
    set: function (r) {
      console.warn(
        "THREE." +
          this.type +
          ": .shading has been removed. Use the boolean .flatShading instead."
      ),
        (this.flatShading = r === Mo);
    },
  },
  stencilMask: {
    get: function () {
      return (
        console.warn(
          "THREE." +
            this.type +
            ": .stencilMask has been removed. Use .stencilFuncMask instead."
        ),
        this.stencilFuncMask
      );
    },
    set: function (r) {
      console.warn(
        "THREE." +
          this.type +
          ": .stencilMask has been removed. Use .stencilFuncMask instead."
      ),
        (this.stencilFuncMask = r);
    },
  },
});
Object.defineProperties(mn.prototype, {
  derivatives: {
    get: function () {
      return (
        console.warn(
          "THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
        ),
        this.extensions.derivatives
      );
    },
    set: function (r) {
      console.warn(
        "THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
      ),
        (this.extensions.derivatives = r);
    },
  },
});
ze.prototype.clearTarget = function (r, e, t, n) {
  console.warn(
    "THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
  ),
    this.setRenderTarget(r),
    this.clear(e, t, n);
};
ze.prototype.animate = function (r) {
  console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
    this.setAnimationLoop(r);
};
ze.prototype.getCurrentRenderTarget = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
    ),
    this.getRenderTarget()
  );
};
ze.prototype.getMaxAnisotropy = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
    ),
    this.capabilities.getMaxAnisotropy()
  );
};
ze.prototype.getPrecision = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
    ),
    this.capabilities.precision
  );
};
ze.prototype.resetGLState = function () {
  return (
    console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
    this.state.reset()
  );
};
ze.prototype.supportsFloatTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
    ),
    this.extensions.get("OES_texture_float")
  );
};
ze.prototype.supportsHalfFloatTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
    ),
    this.extensions.get("OES_texture_half_float")
  );
};
ze.prototype.supportsStandardDerivatives = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
    ),
    this.extensions.get("OES_standard_derivatives")
  );
};
ze.prototype.supportsCompressedTextureS3TC = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
    ),
    this.extensions.get("WEBGL_compressed_texture_s3tc")
  );
};
ze.prototype.supportsCompressedTexturePVRTC = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
    ),
    this.extensions.get("WEBGL_compressed_texture_pvrtc")
  );
};
ze.prototype.supportsBlendMinMax = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
    ),
    this.extensions.get("EXT_blend_minmax")
  );
};
ze.prototype.supportsVertexTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
    ),
    this.capabilities.vertexTextures
  );
};
ze.prototype.supportsInstancedArrays = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
    ),
    this.extensions.get("ANGLE_instanced_arrays")
  );
};
ze.prototype.enableScissorTest = function (r) {
  console.warn(
    "THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
  ),
    this.setScissorTest(r);
};
ze.prototype.initMaterial = function () {
  console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
};
ze.prototype.addPrePlugin = function () {
  console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
};
ze.prototype.addPostPlugin = function () {
  console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
};
ze.prototype.updateShadowMap = function () {
  console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
};
ze.prototype.setFaceCulling = function () {
  console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
};
ze.prototype.allocTextureUnit = function () {
  console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
};
ze.prototype.setTexture = function () {
  console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
};
ze.prototype.setTexture2D = function () {
  console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
};
ze.prototype.setTextureCube = function () {
  console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
};
ze.prototype.getActiveMipMapLevel = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
    ),
    this.getActiveMipmapLevel()
  );
};
Object.defineProperties(ze.prototype, {
  shadowMapEnabled: {
    get: function () {
      return this.shadowMap.enabled;
    },
    set: function (r) {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
      ),
        (this.shadowMap.enabled = r);
    },
  },
  shadowMapType: {
    get: function () {
      return this.shadowMap.type;
    },
    set: function (r) {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
      ),
        (this.shadowMap.type = r);
    },
  },
  shadowMapCullFace: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
      );
    },
  },
  context: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."
        ),
        this.getContext()
      );
    },
  },
  vr: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
        this.xr
      );
    },
  },
  gammaInput: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
        ),
        !1
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
      );
    },
  },
  gammaOutput: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
        ),
        !1
      );
    },
    set: function (r) {
      console.warn(
        "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
      ),
        (this.outputEncoding = r === !0 ? As : Ei);
    },
  },
  toneMappingWhitePoint: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
        ),
        1
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
      );
    },
  },
});
Object.defineProperties(Jo.prototype, {
  cullFace: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
      );
    },
  },
  renderReverseSided: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
      );
    },
  },
  renderSingleSided: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
      );
    },
  },
});
Object.defineProperties(pn.prototype, {
  wrapS: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
        this.texture.wrapS
      );
    },
    set: function (r) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
        (this.texture.wrapS = r);
    },
  },
  wrapT: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
        this.texture.wrapT
      );
    },
    set: function (r) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
        (this.texture.wrapT = r);
    },
  },
  magFilter: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
        ),
        this.texture.magFilter
      );
    },
    set: function (r) {
      console.warn(
        "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
      ),
        (this.texture.magFilter = r);
    },
  },
  minFilter: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
        ),
        this.texture.minFilter
      );
    },
    set: function (r) {
      console.warn(
        "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
      ),
        (this.texture.minFilter = r);
    },
  },
  anisotropy: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
        ),
        this.texture.anisotropy
      );
    },
    set: function (r) {
      console.warn(
        "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
      ),
        (this.texture.anisotropy = r);
    },
  },
  offset: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .offset is now .texture.offset."
        ),
        this.texture.offset
      );
    },
    set: function (r) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
        (this.texture.offset = r);
    },
  },
  repeat: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
        ),
        this.texture.repeat
      );
    },
    set: function (r) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
        (this.texture.repeat = r);
    },
  },
  format: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .format is now .texture.format."
        ),
        this.texture.format
      );
    },
    set: function (r) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
        (this.texture.format = r);
    },
  },
  type: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
        this.texture.type
      );
    },
    set: function (r) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
        (this.texture.type = r);
    },
  },
  generateMipmaps: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
        ),
        this.texture.generateMipmaps
      );
    },
    set: function (r) {
      console.warn(
        "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
      ),
        (this.texture.generateMipmaps = r);
    },
  },
});
hg.prototype.load = function (r) {
  console.warn(
    "THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
  );
  const e = this;
  return (
    new og().load(r, function (n) {
      e.setBuffer(n);
    }),
    this
  );
};
Ds.prototype.updateCubeMap = function (r, e) {
  return (
    console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
    this.update(r, e)
  );
};
Ds.prototype.clear = function (r, e, t, n) {
  return (
    console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),
    this.renderTarget.clear(r, e, t, n)
  );
};
Gt.crossOrigin = void 0;
Gt.loadTexture = function (r, e, t, n) {
  console.warn(
    "THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
  );
  const i = new Um();
  i.setCrossOrigin(this.crossOrigin);
  const s = i.load(r, t, void 0, n);
  return e && (s.mapping = e), s;
};
Gt.loadTextureCube = function (r, e, t, n) {
  console.warn(
    "THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
  );
  const i = new Hm();
  i.setCrossOrigin(this.crossOrigin);
  const s = i.load(r, t, void 0, n);
  return e && (s.mapping = e), s;
};
Gt.loadCompressedTexture = function () {
  console.error(
    "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
  );
};
Gt.loadCompressedTextureCube = function () {
  console.error(
    "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
  );
};
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", {
      detail: {
        revision: _o,
      },
    })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = _o));
const xo = {
    type: "change",
  },
  as = {
    type: "start",
  },
  os = {
    type: "end",
  };
class Rg extends sn {
  constructor(e, t) {
    super(),
      t === void 0 &&
        console.warn(
          'THREE.OrbitControls: The second parameter "domElement" is now mandatory.'
        ),
      t === document &&
        console.error(
          'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
        ),
      (this.object = e),
      (this.domElement = t),
      (this.enabled = !0),
      (this.target = new b()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: xn.ROTATE,
        MIDDLE: xn.DOLLY,
        RIGHT: xn.PAN,
      }),
      (this.touches = {
        ONE: _n.ROTATE,
        TWO: _n.DOLLY_PAN,
      }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return o.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return o.theta;
      }),
      (this.listenToKeyEvents = function (T) {
        T.addEventListener("keydown", U), (this._domElementKeyEvents = T);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(xo),
          n.update(),
          (s = i.NONE);
      }),
      (this.update = (function () {
        const T = new b(),
          S = new tt().setFromUnitVectors(e.up, new b(0, 1, 0)),
          j = S.clone().invert(),
          Y = new b(),
          le = new tt(),
          W = 2 * Math.PI;
        return function () {
          const Ce = n.object.position;
          T.copy(Ce).sub(n.target),
            T.applyQuaternion(S),
            o.setFromVector3(T),
            n.autoRotate && s === i.NONE && N(A()),
            n.enableDamping
              ? ((o.theta += l.theta * n.dampingFactor),
                (o.phi += l.phi * n.dampingFactor))
              : ((o.theta += l.theta), (o.phi += l.phi));
          let Pe = n.minAzimuthAngle,
            Qe = n.maxAzimuthAngle;
          return (
            isFinite(Pe) &&
              isFinite(Qe) &&
              (Pe < -Math.PI ? (Pe += W) : Pe > Math.PI && (Pe -= W),
              Qe < -Math.PI ? (Qe += W) : Qe > Math.PI && (Qe -= W),
              Pe <= Qe
                ? (o.theta = Math.max(Pe, Math.min(Qe, o.theta)))
                : (o.theta =
                    o.theta > (Pe + Qe) / 2
                      ? Math.max(Pe, o.theta)
                      : Math.min(Qe, o.theta))),
            (o.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, o.phi)
            )),
            o.makeSafe(),
            (o.radius *= c),
            (o.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, o.radius)
            )),
            n.enableDamping === !0
              ? n.target.addScaledVector(h, n.dampingFactor)
              : n.target.add(h),
            T.setFromSpherical(o),
            T.applyQuaternion(j),
            Ce.copy(n.target).add(T),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                h.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), h.set(0, 0, 0)),
            (c = 1),
            d ||
            Y.distanceToSquared(n.object.position) > a ||
            8 * (1 - le.dot(n.object.quaternion)) > a
              ? (n.dispatchEvent(xo),
                Y.copy(n.object.position),
                le.copy(n.object.quaternion),
                (d = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", Ee),
          n.domElement.removeEventListener("pointerdown", J),
          n.domElement.removeEventListener("wheel", w),
          n.domElement.removeEventListener("touchstart", V),
          n.domElement.removeEventListener("touchend", oe),
          n.domElement.removeEventListener("touchmove", ne),
          n.domElement.ownerDocument.removeEventListener("pointermove", Q),
          n.domElement.ownerDocument.removeEventListener("pointerup", ee),
          n._domElementKeyEvents !== null &&
            n._domElementKeyEvents.removeEventListener("keydown", U);
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let s = i.NONE;
    const a = 1e-6,
      o = new vo(),
      l = new vo();
    let c = 1;
    const h = new b();
    let d = !1;
    const u = new Z(),
      f = new Z(),
      m = new Z(),
      y = new Z(),
      v = new Z(),
      g = new Z(),
      p = new Z(),
      E = new Z(),
      L = new Z();

    function A() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }

    function x() {
      return Math.pow(0.95, n.zoomSpeed);
    }

    function N(T) {
      l.theta -= T;
    }

    function z(T) {
      l.phi -= T;
    }
    const B = (function () {
        const T = new b();
        return function (j, Y) {
          T.setFromMatrixColumn(Y, 0), T.multiplyScalar(-j), h.add(T);
        };
      })(),
      G = (function () {
        const T = new b();
        return function (j, Y) {
          n.screenSpacePanning === !0
            ? T.setFromMatrixColumn(Y, 1)
            : (T.setFromMatrixColumn(Y, 0), T.crossVectors(n.object.up, T)),
            T.multiplyScalar(j),
            h.add(T);
        };
      })(),
      q = (function () {
        const T = new b();
        return function (j, Y) {
          const le = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const W = n.object.position;
            T.copy(W).sub(n.target);
            let fe = T.length();
            (fe *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              B((2 * j * fe) / le.clientHeight, n.object.matrix),
              G((2 * Y * fe) / le.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (B(
                  (j * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    le.clientWidth,
                  n.object.matrix
                ),
                G(
                  (Y * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    le.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();

    function O(T) {
      n.object.isPerspectiveCamera
        ? (c /= T)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * T)
          )),
          n.object.updateProjectionMatrix(),
          (d = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }

    function C(T) {
      n.object.isPerspectiveCamera
        ? (c *= T)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / T)
          )),
          n.object.updateProjectionMatrix(),
          (d = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }

    function P(T) {
      u.set(T.clientX, T.clientY);
    }

    function D(T) {
      p.set(T.clientX, T.clientY);
    }

    function R(T) {
      y.set(T.clientX, T.clientY);
    }

    function X(T) {
      f.set(T.clientX, T.clientY),
        m.subVectors(f, u).multiplyScalar(n.rotateSpeed);
      const S = n.domElement;
      N((2 * Math.PI * m.x) / S.clientHeight),
        z((2 * Math.PI * m.y) / S.clientHeight),
        u.copy(f),
        n.update();
    }

    function $(T) {
      E.set(T.clientX, T.clientY),
        L.subVectors(E, p),
        L.y > 0 ? O(x()) : L.y < 0 && C(x()),
        p.copy(E),
        n.update();
    }

    function K(T) {
      v.set(T.clientX, T.clientY),
        g.subVectors(v, y).multiplyScalar(n.panSpeed),
        q(g.x, g.y),
        y.copy(v),
        n.update();
    }

    function ae(T) {
      T.deltaY < 0 ? C(x()) : T.deltaY > 0 && O(x()), n.update();
    }

    function se(T) {
      let S = !1;
      switch (T.code) {
        case n.keys.UP:
          q(0, n.keyPanSpeed), (S = !0);
          break;
        case n.keys.BOTTOM:
          q(0, -n.keyPanSpeed), (S = !0);
          break;
        case n.keys.LEFT:
          q(n.keyPanSpeed, 0), (S = !0);
          break;
        case n.keys.RIGHT:
          q(-n.keyPanSpeed, 0), (S = !0);
          break;
      }
      S && (T.preventDefault(), n.update());
    }

    function ue(T) {
      if (T.touches.length == 1) u.set(T.touches[0].pageX, T.touches[0].pageY);
      else {
        const S = 0.5 * (T.touches[0].pageX + T.touches[1].pageX),
          j = 0.5 * (T.touches[0].pageY + T.touches[1].pageY);
        u.set(S, j);
      }
    }

    function me(T) {
      if (T.touches.length == 1) y.set(T.touches[0].pageX, T.touches[0].pageY);
      else {
        const S = 0.5 * (T.touches[0].pageX + T.touches[1].pageX),
          j = 0.5 * (T.touches[0].pageY + T.touches[1].pageY);
        y.set(S, j);
      }
    }

    function H(T) {
      const S = T.touches[0].pageX - T.touches[1].pageX,
        j = T.touches[0].pageY - T.touches[1].pageY,
        Y = Math.sqrt(S * S + j * j);
      p.set(0, Y);
    }

    function De(T) {
      n.enableZoom && H(T), n.enablePan && me(T);
    }

    function Se(T) {
      n.enableZoom && H(T), n.enableRotate && ue(T);
    }

    function ge(T) {
      if (T.touches.length == 1) f.set(T.touches[0].pageX, T.touches[0].pageY);
      else {
        const j = 0.5 * (T.touches[0].pageX + T.touches[1].pageX),
          Y = 0.5 * (T.touches[0].pageY + T.touches[1].pageY);
        f.set(j, Y);
      }
      m.subVectors(f, u).multiplyScalar(n.rotateSpeed);
      const S = n.domElement;
      N((2 * Math.PI * m.x) / S.clientHeight),
        z((2 * Math.PI * m.y) / S.clientHeight),
        u.copy(f);
    }

    function de(T) {
      if (T.touches.length == 1) v.set(T.touches[0].pageX, T.touches[0].pageY);
      else {
        const S = 0.5 * (T.touches[0].pageX + T.touches[1].pageX),
          j = 0.5 * (T.touches[0].pageY + T.touches[1].pageY);
        v.set(S, j);
      }
      g.subVectors(v, y).multiplyScalar(n.panSpeed), q(g.x, g.y), y.copy(v);
    }

    function Te(T) {
      const S = T.touches[0].pageX - T.touches[1].pageX,
        j = T.touches[0].pageY - T.touches[1].pageY,
        Y = Math.sqrt(S * S + j * j);
      E.set(0, Y),
        L.set(0, Math.pow(E.y / p.y, n.zoomSpeed)),
        O(L.y),
        p.copy(E);
    }

    function we(T) {
      n.enableZoom && Te(T), n.enablePan && de(T);
    }

    function be(T) {
      n.enableZoom && Te(T), n.enableRotate && ge(T);
    }

    function J(T) {
      if (n.enabled !== !1)
        switch (T.pointerType) {
          case "mouse":
          case "pen":
            ce(T);
            break;
        }
    }

    function Q(T) {
      if (n.enabled !== !1)
        switch (T.pointerType) {
          case "mouse":
          case "pen":
            re(T);
            break;
        }
    }

    function ee(T) {
      switch (T.pointerType) {
        case "mouse":
        case "pen":
          M();
          break;
      }
    }

    function ce(T) {
      T.preventDefault(),
        n.domElement.focus ? n.domElement.focus() : window.focus();
      let S;
      switch (T.button) {
        case 0:
          S = n.mouseButtons.LEFT;
          break;
        case 1:
          S = n.mouseButtons.MIDDLE;
          break;
        case 2:
          S = n.mouseButtons.RIGHT;
          break;
        default:
          S = -1;
      }
      switch (S) {
        case xn.DOLLY:
          if (n.enableZoom === !1) return;
          D(T), (s = i.DOLLY);
          break;
        case xn.ROTATE:
          if (T.ctrlKey || T.metaKey || T.shiftKey) {
            if (n.enablePan === !1) return;
            R(T), (s = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            P(T), (s = i.ROTATE);
          }
          break;
        case xn.PAN:
          if (T.ctrlKey || T.metaKey || T.shiftKey) {
            if (n.enableRotate === !1) return;
            P(T), (s = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            R(T), (s = i.PAN);
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE &&
        (n.domElement.ownerDocument.addEventListener("pointermove", Q),
        n.domElement.ownerDocument.addEventListener("pointerup", ee),
        n.dispatchEvent(as));
    }

    function re(T) {
      if (n.enabled !== !1)
        switch ((T.preventDefault(), s)) {
          case i.ROTATE:
            if (n.enableRotate === !1) return;
            X(T);
            break;
          case i.DOLLY:
            if (n.enableZoom === !1) return;
            $(T);
            break;
          case i.PAN:
            if (n.enablePan === !1) return;
            K(T);
            break;
        }
    }

    function M(T) {
      n.domElement.ownerDocument.removeEventListener("pointermove", Q),
        n.domElement.ownerDocument.removeEventListener("pointerup", ee),
        n.enabled !== !1 && (n.dispatchEvent(os), (s = i.NONE));
    }

    function w(T) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        (s !== i.NONE && s !== i.ROTATE) ||
        (T.preventDefault(), n.dispatchEvent(as), ae(T), n.dispatchEvent(os));
    }

    function U(T) {
      n.enabled === !1 || n.enablePan === !1 || se(T);
    }

    function V(T) {
      if (n.enabled !== !1) {
        switch ((T.preventDefault(), T.touches.length)) {
          case 1:
            switch (n.touches.ONE) {
              case _n.ROTATE:
                if (n.enableRotate === !1) return;
                ue(T), (s = i.TOUCH_ROTATE);
                break;
              case _n.PAN:
                if (n.enablePan === !1) return;
                me(T), (s = i.TOUCH_PAN);
                break;
              default:
                s = i.NONE;
            }
            break;
          case 2:
            switch (n.touches.TWO) {
              case _n.DOLLY_PAN:
                if (n.enableZoom === !1 && n.enablePan === !1) return;
                De(T), (s = i.TOUCH_DOLLY_PAN);
                break;
              case _n.DOLLY_ROTATE:
                if (n.enableZoom === !1 && n.enableRotate === !1) return;
                Se(T), (s = i.TOUCH_DOLLY_ROTATE);
                break;
              default:
                s = i.NONE;
            }
            break;
          default:
            s = i.NONE;
        }
        s !== i.NONE && n.dispatchEvent(as);
      }
    }

    function ne(T) {
      if (n.enabled !== !1)
        switch ((T.preventDefault(), s)) {
          case i.TOUCH_ROTATE:
            if (n.enableRotate === !1) return;
            ge(T), n.update();
            break;
          case i.TOUCH_PAN:
            if (n.enablePan === !1) return;
            de(T), n.update();
            break;
          case i.TOUCH_DOLLY_PAN:
            if (n.enableZoom === !1 && n.enablePan === !1) return;
            we(T), n.update();
            break;
          case i.TOUCH_DOLLY_ROTATE:
            if (n.enableZoom === !1 && n.enableRotate === !1) return;
            be(T), n.update();
            break;
          default:
            s = i.NONE;
        }
    }

    function oe(T) {
      n.enabled !== !1 && (n.dispatchEvent(os), (s = i.NONE));
    }

    function Ee(T) {
      n.enabled !== !1 && T.preventDefault();
    }
    n.domElement.addEventListener("contextmenu", Ee),
      n.domElement.addEventListener("pointerdown", J),
      n.domElement.addEventListener("wheel", w, {
        passive: !1,
      }),
      n.domElement.addEventListener("touchstart", V, {
        passive: !1,
      }),
      n.domElement.addEventListener("touchend", oe),
      n.domElement.addEventListener("touchmove", ne, {
        passive: !1,
      }),
      this.update();
  }
}

let jn = new Sg(),
  Vt = new Z(),
  pt;
const Mr = document.querySelector("#c"),
  Dg = Mr.clientWidth,
  Ig = Mr.clientHeight;
let mt;
mt = new ze({
  canvas: Mr,
  antialias: !0,
  alpha: !0,
});
mt.setPixelRatio(window.devicePixelRatio);
mt.setSize(Dg, Ig, !1);
mt.toneMapping = Eo;
mt.toneMappingExposure = 0.8;
mt.outputEncoding = As;
mt.shadowMap.enabled = !0;
mt.shadowMap.type = bo;
const Ng = 20,
  Fg = 2,
  zg = 0.1,
  Bg = 10,
  lt = new ut(Ng, Fg, zg, Bg);
lt.position.z = 7;
const yt = new Rg(lt, Mr);
yt.enableDamping = !0;
yt.enablePan = !1;
yt.enableZoom = !1;
yt.minDistance = 3;
yt.maxDistance = 7;
yt.update();
let Ti = new dn();
Ti.name = "lights";
let Wt = new dn();
Wt.name = "markers";
const kg = new b(0, 0, 0),
  vn = new Is(),
  Og = 1,
  Hg = 32;
var xs = Gg(Og, Hg);
const Ug = () => {
  vn.add(xs), document.querySelector("#map-home").classList.remove("loading");
};

function Gg(r, e) {
  return new gt(
    new sl(r, e, e),
    new al({
      map: Gt.loadTexture("/3d-map/2_no_clouds_4k.jpg"),
      bumpMap: Gt.loadTexture("/3d-map/elev_bump_4k.jpeg"),
      bumpScale: 0.005,
      specularMap: Gt.loadTexture("/3d-map/water_4k.jpg"),
      specular: new he("grey"),
    })
  );
}
const Vg = (r) => {
    let e = r.radius * r.scale,
      t = new sl(r.radius, 32, 32),
      n = new zs({
        color: r.color,
      }),
      i = new gt(t, n);
    (i.position.x = r.position.x),
      (i.position.y = r.position.y),
      (i.position.z = r.position.z),
      (i.castShadow = !0),
      (i.receiveShadow = !1),
      (i.material.emissiveIntensity = 0),
      (i.name = r.country_name),
      (i.title = r.title),
      (i.description = r.description),
      (i.infoimage = r.infoimage),
      (i.link = r.link),
      (i.dimension = e),
      (i.active = !1),
      (i.scale.x = i.scale.y = i.scale.z = r.scale),
      i.lookAt(kg),
      i.translateZ(-e),
      Wt.add(i);
  },
  Wg = () => {
    const r = Math.PI * 1.5,
      e = Math.PI,
      t = new Le(),
      n = new Le();
    t.add(n);
    const i = new Le();
    (i.position.z = 1), n.add(i);
    let s;
    for (const a of Pg) {
      const {
        id: o,
        lat: l,
        lon: c,
        country_name: h,
        title: d,
        description: u,
        image: f,
        link: m,
      } = a;
      (t.rotation.y = _a.degToRad(c) + r),
        (n.rotation.x = _a.degToRad(l) + e),
        i.updateWorldMatrix(!0, !1);
      const y = new b();
      i.getWorldPosition(y),
        (a.position = y),
        (s = 16777215),
        Vg({
          color: s,
          radius: 0.01,
          scale: 1,
          infoimage: f,
          position: y,
          country_name: h,
          uid: o,
          title: d,
          description: u,
          left: !1,
          link: m,
        });
    }
    vn.add(Wt);
  };

function jg(r) {
  const e = Wt.children;
  document.getElementById("map-3d").addEventListener(
    "click",
    function (t) {
      (Vt.x = (t.offsetX / (t.target.width / window.devicePixelRatio)) * 2 - 1),
        (Vt.y =
          -(t.offsetY / (t.target.height / window.devicePixelRatio)) * 2 + 1),
        jn.setFromCamera(Vt, lt);
      var n = jn.intersectObjects(vn.children[2].children, !0);
      if (n.length > 0 && n[0].object.name != "globo1") {
        e.forEach(function (u) {
          u.material.color.setHex(16777215), (u.active = !1);
        }),
          (n[0].object.active = !0),
          n[0].object.material.color.setHex(9747456);
        var i = n[0].object.name,
          s = n[0].object.title,
          a = n[0].object.description,
          o = n[0].object.infoimage,
          l = n[0].object.link;
        console.log(n[0].object);
        var c = document.getElementById("map-modal"),
          h = document.getElementById("map-modal-body"),
          d = document.getElementById("map-modal-image");
        c.classList.contains("show") || c.classList.add("show"),
          (d.innerHTML = `<img src="${o}" alt="${s}" />`),
          (h.innerHTML = `
                  <h3>${i}</h3>
                  <h5><a href="${l}" target="_blank">${s}</a></h5>
                  <p>${a}</p>
              `);
      }
    },
    !1
  );
}

function qg() {
  const r = Wt.children;
  document.getElementById("map-3d").addEventListener(
    "touchstart",
    function (e) {
      var t = e.touches[0] || e.changedTouches[0],
        n = document.elementFromPoint(t.clientX, t.clientY);
      (e.offsetX = t.clientX - n.getBoundingClientRect().x),
        (e.offsetY = t.clientY - n.getBoundingClientRect().y),
        (Vt.x =
          (e.offsetX / (e.target.width / window.devicePixelRatio)) * 2 - 1),
        (Vt.y =
          -(e.offsetY / (e.target.height / window.devicePixelRatio)) * 2 + 1),
        jn.setFromCamera(Vt, lt);
      var i = jn.intersectObjects(vn.children[2].children, !0);
      if (i.length > 0 && i[0].object.name != "globo1") {
        r.forEach(function (f) {
          f.material.color.setHex(16777215), (f.active = !1);
        }),
          (i[0].object.active = !0),
          i[0].object.material.color.setHex(9747456);
        var s = i[0].object.name,
          a = i[0].object.title,
          o = i[0].object.description,
          l = i[0].object.infoimage,
          c = i[0].object.link,
          h = document.getElementById("map-modal"),
          d = document.getElementById("map-modal-body"),
          u = document.getElementById("map-modal-image");
        h.classList.contains("show") || h.classList.add("show"),
          (u.innerHTML = `<img src="${l}" alt="${a}" />`),
          (d.innerHTML = `
                  <h3>${s}</h3>
                  <h5><a href="${c}" target="_blank">${a}</a></h5>
                  <p>${o}</p>
              `);
      }
    },
    !1
  );
}
const Xg = () => {
    document.getElementById("map-3d").addEventListener(
      "mousemove",
      function (r) {
        (Vt.x =
          (r.offsetX / (r.target.width / window.devicePixelRatio)) * 2 - 1),
          (Vt.y =
            -(r.offsetY / (r.target.height / window.devicePixelRatio)) * 2 + 1),
          jn.setFromCamera(Vt, lt);
        var e = jn.intersectObjects(vn.children[2].children, !0);
        e.length > 0 &&
        e[0].object.name != "globo1" &&
        e[0].object.name != "nuvole"
          ? (document.getElementById("map-home").classList.add("hand-cursor"),
            e[0].object != pt &&
              (pt && pt.material.color.setHex(pt.currentHex),
              (pt = e[0].object),
              (pt.currentHex = pt.material.color.getHex()),
              pt.material.color.setHex(9747456)))
          : (document
              .getElementById("map-home")
              .classList.remove("hand-cursor"),
            pt && !pt.active && pt.material.color.setHex(pt.currentHex),
            (pt = null));
      },
      !1
    );
  },
  Yg = () => {
    window.addEventListener(
      "resize",
      function () {
        (lt.aspect = window.innerWidth / window.innerHeight),
          lt.updateProjectionMatrix(),
          mt.setSize(
            document.getElementById("map-3d").offsetWidth,
            document.getElementById("map-3d").offsetHeight
          );
      },
      !1
    );
  },
  Zg = () => {
    ls({
      color: 16777215,
      intensity: 2,
      x: -100,
      y: -10,
      z: 25,
      castShadow: !1,
    }),
      ls({
        color: 7600102,
        intensity: 0.7,
        x: 100,
        y: 60,
        z: -100,
        castShadow: !1,
      }),
      ls({
        color: 16728576,
        intensity: 0.15,
        x: 100,
        y: -80,
        z: -150,
        castShadow: !1,
      }),
      Ti.add(new xl(2236962)),
      vn.add(Ti);
  },
  ls = (r) => {
    const e = new vl(r.color, r.intensity);
    e.position.set(r.x, r.y, r.z),
      r.castShadow &&
        ((e.castShadow = !0),
        (e.shadow.mapSize.width = 1024),
        (e.shadow.mapSize.height = 1024),
        (e.shadow.camera.near = 0.5),
        (e.shadow.camera.far = 500)),
      Ti.add(e);
  },
  bl = () => {
    requestAnimationFrame(bl, mt.domElement);
    const r = mt.domElement;
    (lt.aspect = r.clientWidth / r.clientHeight),
      lt.updateProjectionMatrix(),
      yt.update(),
      Ti.quaternion.copy(lt.quaternion),
      (mt.toneMappingExposure = 0.7),
      mt.render(vn, lt);
  },
  Jg = () => {
    var r = document.getElementById("zoomIn"),
      e = document.getElementById("zoomOut"),
      t = 7;
    (e.disabled = !0),
      r.addEventListener("click", function () {
        (t === 7 || (t < 7 && t != 0)) &&
          ((t = t - 1), (lt.zoom = lt.zoom + 0.2)),
          t <= 0
            ? ((r.disabled = !0), (e.disabled = !1))
            : ((r.disabled = !1), (e.disabled = !1));
      }),
      e.addEventListener("click", function () {
        (t != 7 || (t < 7 && t != 0)) &&
          ((t = t + 1), (lt.zoom = lt.zoom - 0.2)),
          t < 7
            ? ((e.disabled = !1), (r.disabled = !1))
            : ((e.disabled = !0), (r.disabled = !1));
      });
  },
  Kg = () => {
    var r = Wt.children,
      e = yt.target.distanceTo(yt.object.position),
      t;
    yt.addEventListener("change", function () {
      (e = yt.target.distanceTo(yt.object.position)),
        (t = e / 7),
        r.forEach(function (n) {
          (n.scale.x = t), (n.scale.y = t), (n.scale.z = t);
        });
    });
  },
  rotateGlobeToAustralia = (globe) => {
    const australiaLat = -127.2744;
    const australiaLng = 50.7751;

    const rotationY = -((australiaLng * Math.PI) / 180);
    const rotationX = (australiaLat * Math.PI) / 180;

    globe.rotation.y = rotationY;
    globe.rotation.x = rotationX;
  },
  Qg = () => {
    Ug();
    // (Wt.rotation.y = 4.5),
    // (Wt.rotation.x = 0.4),
    // (xs.rotation.y = 4.5),
    // (xs.rotation.x = 0.4),
    rotateGlobeToAustralia(Wt);

    xs.rotation.y = Wt.rotation.y;
    xs.rotation.x = Wt.rotation.x;
    Zg(), Wg(), Xg(), jg(), qg(), Yg(), Kg(), Jg(), bl();
    var r = document.getElementById("btn-modal-close"),
      e = document.getElementById("map-modal");
    r.addEventListener("click", () => {
      const t = Wt.children;
      e.classList.remove("show"),
        t.forEach(function (n) {
          n.material.color.setHex(16777215), (n.active = !1);
        });
    });
  };
Qg();
