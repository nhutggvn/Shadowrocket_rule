// https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/dist/youtube.response.preview.js
// Build: 2024/3/10 08:46:17
(() => {
  var Vt = Object.defineProperty;
  var Jt = (t, e, n) =>
    e in t
      ? Vt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  var K = (t, e, n) => (Jt(t, typeof e != "symbol" ? e + "" : e, n), n);
  (function (t) {
    function e() {}
    function n() {}
    var s = String.fromCharCode,
      r = {}.toString,
      o = r.call(t.SharedArrayBuffer),
      i = r(),
      a = t.Uint8Array,
      c = a || Array,
      f = a ? ArrayBuffer : c,
      m =
        f.isView ||
        function (h) {
          return h && "length" in h;
        },
      l = r.call(f.prototype);
    f = n.prototype;
    var g = t.TextEncoder,
      p = new (a ? Uint16Array : c)(32);
    (e.prototype.decode = function (h) {
      if (!m(h)) {
        var R = r.call(h);
        if (R !== l && R !== o && R !== i)
          throw TypeError(
            "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'",
          );
        h = a ? new c(h) : h || [];
      }
      for (
        var N = (R = ""),
          y = 0,
          T = h.length | 0,
          j = (T - 32) | 0,
          x,
          w,
          F = 0,
          J = 0,
          O,
          B = 0,
          C = -1;
        y < T;

      ) {
        for (
          x = y <= j ? 32 : (T - y) | 0;
          B < x;
          y = (y + 1) | 0, B = (B + 1) | 0
        ) {
          switch (((w = h[y] & 255), w >> 4)) {
            case 15:
              if (((O = h[(y = (y + 1) | 0)] & 255), O >> 6 !== 2 || 247 < w)) {
                y = (y - 1) | 0;
                break;
              }
              (F = ((w & 7) << 6) | (O & 63)), (J = 5), (w = 256);
            case 14:
              (O = h[(y = (y + 1) | 0)] & 255),
                (F <<= 6),
                (F |= ((w & 15) << 6) | (O & 63)),
                (J = O >> 6 === 2 ? (J + 4) | 0 : 24),
                (w = (w + 256) & 768);
            case 13:
            case 12:
              (O = h[(y = (y + 1) | 0)] & 255),
                (F <<= 6),
                (F |= ((w & 31) << 6) | (O & 63)),
                (J = (J + 7) | 0),
                y < T && O >> 6 === 2 && F >> J && 1114112 > F
                  ? ((w = F),
                    (F = (F - 65536) | 0),
                    0 <= F &&
                      ((C = ((F >> 10) + 55296) | 0),
                      (w = ((F & 1023) + 56320) | 0),
                      31 > B
                        ? ((p[B] = C), (B = (B + 1) | 0), (C = -1))
                        : ((O = C), (C = w), (w = O))))
                  : ((w >>= 8), (y = (y - w - 1) | 0), (w = 65533)),
                (F = J = 0),
                (x = y <= j ? 32 : (T - y) | 0);
            default:
              p[B] = w;
              continue;
            case 11:
            case 10:
            case 9:
            case 8:
          }
          p[B] = 65533;
        }
        if (
          ((N += s(
            p[0],
            p[1],
            p[2],
            p[3],
            p[4],
            p[5],
            p[6],
            p[7],
            p[8],
            p[9],
            p[10],
            p[11],
            p[12],
            p[13],
            p[14],
            p[15],
            p[16],
            p[17],
            p[18],
            p[19],
            p[20],
            p[21],
            p[22],
            p[23],
            p[24],
            p[25],
            p[26],
            p[27],
            p[28],
            p[29],
            p[30],
            p[31],
          )),
          32 > B && (N = N.slice(0, (B - 32) | 0)),
          y < T)
        ) {
          if (((p[0] = C), (B = ~C >>> 31), (C = -1), N.length < R.length))
            continue;
        } else C !== -1 && (N += s(C));
        (R += N), (N = "");
      }
      return R;
    }),
      (f.encode = function (h) {
        h = h === void 0 ? "" : "" + h;
        var R = h.length | 0,
          N = new c(((R << 1) + 8) | 0),
          y,
          T = 0,
          j = !a;
        for (y = 0; y < R; y = (y + 1) | 0, T = (T + 1) | 0) {
          var x = h.charCodeAt(y) | 0;
          if (127 >= x) N[T] = x;
          else {
            if (2047 >= x) N[T] = 192 | (x >> 6);
            else {
              e: {
                if (55296 <= x)
                  if (56319 >= x) {
                    var w = h.charCodeAt((y = (y + 1) | 0)) | 0;
                    if (56320 <= w && 57343 >= w) {
                      if (((x = ((x << 10) + w - 56613888) | 0), 65535 < x)) {
                        (N[T] = 240 | (x >> 18)),
                          (N[(T = (T + 1) | 0)] = 128 | ((x >> 12) & 63)),
                          (N[(T = (T + 1) | 0)] = 128 | ((x >> 6) & 63)),
                          (N[(T = (T + 1) | 0)] = 128 | (x & 63));
                        continue;
                      }
                      break e;
                    }
                    x = 65533;
                  } else 57343 >= x && (x = 65533);
                !j &&
                  y << 1 < T &&
                  y << 1 < ((T - 7) | 0) &&
                  ((j = !0), (w = new c(3 * R)), w.set(N), (N = w));
              }
              (N[T] = 224 | (x >> 12)),
                (N[(T = (T + 1) | 0)] = 128 | ((x >> 6) & 63));
            }
            N[(T = (T + 1) | 0)] = 128 | (x & 63);
          }
        }
        return a ? N.subarray(0, T) : N.slice(0, T);
      }),
      g || ((t.TextDecoder = e), (t.TextEncoder = n));
  })(globalThis);
  function I(t, e) {
    if (!t) throw new Error(e);
  }
  var Gt = 34028234663852886e22,
    _t = -34028234663852886e22,
    qt = 4294967295,
    Xt = 2147483647,
    Yt = -2147483648;
  function _(t) {
    if (typeof t != "number") throw new Error("invalid int 32: " + typeof t);
    if (!Number.isInteger(t) || t > Xt || t < Yt)
      throw new Error("invalid int 32: " + t);
  }
  function z(t) {
    if (typeof t != "number") throw new Error("invalid uint 32: " + typeof t);
    if (!Number.isInteger(t) || t > qt || t < 0)
      throw new Error("invalid uint 32: " + t);
  }
  function Z(t) {
    if (typeof t != "number") throw new Error("invalid float 32: " + typeof t);
    if (Number.isFinite(t) && (t > Gt || t < _t))
      throw new Error("invalid float 32: " + t);
  }
  var Ge = Symbol("@bufbuild/protobuf/enum-type");
  function _e(t) {
    let e = t[Ge];
    return I(e, "missing enum type on enum object"), e;
  }
  function xe(t, e, n, s) {
    t[Ge] = Ie(
      e,
      n.map((r) => ({ no: r.no, name: r.name, localName: t[r.no] })),
      s,
    );
  }
  function Ie(t, e, n) {
    let s = Object.create(null),
      r = Object.create(null),
      o = [];
    for (let i of e) {
      let a = Xe(i);
      o.push(a), (s[i.name] = a), (r[i.no] = a);
    }
    return {
      typeName: t,
      values: o,
      findName(i) {
        return s[i];
      },
      findNumber(i) {
        return r[i];
      },
    };
  }
  function qe(t, e, n) {
    let s = {};
    for (let r of e) {
      let o = Xe(r);
      (s[o.localName] = o.no), (s[o.no] = o.localName);
    }
    return xe(s, t, e, n), s;
  }
  function Xe(t) {
    return "localName" in t
      ? t
      : Object.assign(Object.assign({}, t), { localName: t.name });
  }
  var E = class {
    equals(e) {
      return this.getType().runtime.util.equals(this.getType(), this, e);
    }
    clone() {
      return this.getType().runtime.util.clone(this);
    }
    fromBinary(e, n) {
      let s = this.getType(),
        r = s.runtime.bin,
        o = r.makeReadOptions(n);
      return r.readMessage(this, o.readerFactory(e), e.byteLength, o), this;
    }
    fromJson(e, n) {
      let s = this.getType(),
        r = s.runtime.json,
        o = r.makeReadOptions(n);
      return r.readMessage(s, e, o, this), this;
    }
    fromJsonString(e, n) {
      let s;
      try {
        s = JSON.parse(e);
      } catch (r) {
        throw new Error(
          `cannot decode ${this.getType().typeName} from JSON: ${
            r instanceof Error ? r.message : String(r)
          }`,
        );
      }
      return this.fromJson(s, n);
    }
    toBinary(e) {
      let n = this.getType(),
        s = n.runtime.bin,
        r = s.makeWriteOptions(e),
        o = r.writerFactory();
      return s.writeMessage(this, o, r), o.finish();
    }
    toJson(e) {
      let n = this.getType(),
        s = n.runtime.json,
        r = s.makeWriteOptions(e);
      return s.writeMessage(this, r);
    }
    toJsonString(e) {
      var n;
      let s = this.toJson(e);
      return JSON.stringify(
        s,
        null,
        (n = e?.prettySpaces) !== null && n !== void 0 ? n : 0,
      );
    }
    toJSON() {
      return this.toJson({ emitDefaultValues: !0 });
    }
    getType() {
      return Object.getPrototypeOf(this).constructor;
    }
  };
  function Ye(t, e, n, s) {
    var r;
    let o =
        (r = s?.localName) !== null && r !== void 0
          ? r
          : e.substring(e.lastIndexOf(".") + 1),
      i = {
        [o]: function (a) {
          t.util.initFields(this), t.util.initPartial(a, this);
        },
      }[o];
    return (
      Object.setPrototypeOf(i.prototype, new E()),
      Object.assign(i, {
        runtime: t,
        typeName: e,
        fields: t.util.newFieldList(n),
        fromBinary(a, c) {
          return new i().fromBinary(a, c);
        },
        fromJson(a, c) {
          return new i().fromJson(a, c);
        },
        fromJsonString(a, c) {
          return new i().fromJsonString(a, c);
        },
        equals(a, c) {
          return t.util.equals(i, a, c);
        },
      }),
      i
    );
  }
  var u;
  (function (t) {
    (t[(t.DOUBLE = 1)] = "DOUBLE"),
      (t[(t.FLOAT = 2)] = "FLOAT"),
      (t[(t.INT64 = 3)] = "INT64"),
      (t[(t.UINT64 = 4)] = "UINT64"),
      (t[(t.INT32 = 5)] = "INT32"),
      (t[(t.FIXED64 = 6)] = "FIXED64"),
      (t[(t.FIXED32 = 7)] = "FIXED32"),
      (t[(t.BOOL = 8)] = "BOOL"),
      (t[(t.STRING = 9)] = "STRING"),
      (t[(t.BYTES = 12)] = "BYTES"),
      (t[(t.UINT32 = 13)] = "UINT32"),
      (t[(t.SFIXED32 = 15)] = "SFIXED32"),
      (t[(t.SFIXED64 = 16)] = "SFIXED64"),
      (t[(t.SINT32 = 17)] = "SINT32"),
      (t[(t.SINT64 = 18)] = "SINT64");
  })(u || (u = {}));
  var M;
  (function (t) {
    (t[(t.BIGINT = 0)] = "BIGINT"), (t[(t.STRING = 1)] = "STRING");
  })(M || (M = {}));
  function je() {
    let t = 0,
      e = 0;
    for (let s = 0; s < 28; s += 7) {
      let r = this.buf[this.pos++];
      if (((t |= (r & 127) << s), !(r & 128)))
        return this.assertBounds(), [t, e];
    }
    let n = this.buf[this.pos++];
    if (((t |= (n & 15) << 28), (e = (n & 112) >> 4), !(n & 128)))
      return this.assertBounds(), [t, e];
    for (let s = 3; s <= 31; s += 7) {
      let r = this.buf[this.pos++];
      if (((e |= (r & 127) << s), !(r & 128)))
        return this.assertBounds(), [t, e];
    }
    throw new Error("invalid varint");
  }
  function te(t, e, n) {
    for (let o = 0; o < 28; o = o + 7) {
      let i = t >>> o,
        a = !(!(i >>> 7) && e == 0),
        c = (a ? i | 128 : i) & 255;
      if ((n.push(c), !a)) return;
    }
    let s = ((t >>> 28) & 15) | ((e & 7) << 4),
      r = !!(e >> 3);
    if ((n.push((r ? s | 128 : s) & 255), !!r)) {
      for (let o = 3; o < 31; o = o + 7) {
        let i = e >>> o,
          a = !!(i >>> 7),
          c = (a ? i | 128 : i) & 255;
        if ((n.push(c), !a)) return;
      }
      n.push((e >>> 31) & 1);
    }
  }
  var ee = 4294967296;
  function Ne(t) {
    let e = t[0] === "-";
    e && (t = t.slice(1));
    let n = 1e6,
      s = 0,
      r = 0;
    function o(i, a) {
      let c = Number(t.slice(i, a));
      (r *= n),
        (s = s * n + c),
        s >= ee && ((r = r + ((s / ee) | 0)), (s = s % ee));
    }
    return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), e ? ze(s, r) : Ee(s, r);
  }
  function Ke(t, e) {
    let n = Ee(t, e),
      s = n.hi & 2147483648;
    s && (n = ze(n.lo, n.hi));
    let r = Se(n.lo, n.hi);
    return s ? "-" + r : r;
  }
  function Se(t, e) {
    if ((({ lo: t, hi: e } = Wt(t, e)), e <= 2097151))
      return String(ee * e + t);
    let n = t & 16777215,
      s = ((t >>> 24) | (e << 8)) & 16777215,
      r = (e >> 16) & 65535,
      o = n + s * 6777216 + r * 6710656,
      i = s + r * 8147497,
      a = r * 2,
      c = 1e7;
    return (
      o >= c && ((i += Math.floor(o / c)), (o %= c)),
      i >= c && ((a += Math.floor(i / c)), (i %= c)),
      a.toString() + We(i) + We(o)
    );
  }
  function Wt(t, e) {
    return { lo: t >>> 0, hi: e >>> 0 };
  }
  function Ee(t, e) {
    return { lo: t | 0, hi: e | 0 };
  }
  function ze(t, e) {
    return (e = ~e), t ? (t = ~t + 1) : (e += 1), Ee(t, e);
  }
  var We = (t) => {
    let e = String(t);
    return "0000000".slice(e.length) + e;
  };
  function Fe(t, e) {
    if (t >= 0) {
      for (; t > 127; ) e.push((t & 127) | 128), (t = t >>> 7);
      e.push(t);
    } else {
      for (let n = 0; n < 9; n++) e.push((t & 127) | 128), (t = t >> 7);
      e.push(1);
    }
  }
  function He() {
    let t = this.buf[this.pos++],
      e = t & 127;
    if (!(t & 128)) return this.assertBounds(), e;
    if (((t = this.buf[this.pos++]), (e |= (t & 127) << 7), !(t & 128)))
      return this.assertBounds(), e;
    if (((t = this.buf[this.pos++]), (e |= (t & 127) << 14), !(t & 128)))
      return this.assertBounds(), e;
    if (((t = this.buf[this.pos++]), (e |= (t & 127) << 21), !(t & 128)))
      return this.assertBounds(), e;
    (t = this.buf[this.pos++]), (e |= (t & 15) << 28);
    for (let n = 5; t & 128 && n < 10; n++) t = this.buf[this.pos++];
    if (t & 128) throw new Error("invalid varint");
    return this.assertBounds(), e >>> 0;
  }
  function jt() {
    let t = new DataView(new ArrayBuffer(8));
    if (
      typeof BigInt == "function" &&
      typeof t.getBigInt64 == "function" &&
      typeof t.getBigUint64 == "function" &&
      typeof t.setBigInt64 == "function" &&
      typeof t.setBigUint64 == "function" &&
      (typeof process != "object" ||
        typeof process.env != "object" ||
        process.env.BUF_BIGINT_DISABLE !== "1")
    ) {
      let r = BigInt("-9223372036854775808"),
        o = BigInt("9223372036854775807"),
        i = BigInt("0"),
        a = BigInt("18446744073709551615");
      return {
        zero: BigInt(0),
        supported: !0,
        parse(c) {
          let f = typeof c == "bigint" ? c : BigInt(c);
          if (f > o || f < r) throw new Error(`int64 invalid: ${c}`);
          return f;
        },
        uParse(c) {
          let f = typeof c == "bigint" ? c : BigInt(c);
          if (f > a || f < i) throw new Error(`uint64 invalid: ${c}`);
          return f;
        },
        enc(c) {
          return (
            t.setBigInt64(0, this.parse(c), !0),
            { lo: t.getInt32(0, !0), hi: t.getInt32(4, !0) }
          );
        },
        uEnc(c) {
          return (
            t.setBigInt64(0, this.uParse(c), !0),
            { lo: t.getInt32(0, !0), hi: t.getInt32(4, !0) }
          );
        },
        dec(c, f) {
          return (
            t.setInt32(0, c, !0), t.setInt32(4, f, !0), t.getBigInt64(0, !0)
          );
        },
        uDec(c, f) {
          return (
            t.setInt32(0, c, !0), t.setInt32(4, f, !0), t.getBigUint64(0, !0)
          );
        },
      };
    }
    let n = (r) => I(/^-?[0-9]+$/.test(r), `int64 invalid: ${r}`),
      s = (r) => I(/^[0-9]+$/.test(r), `uint64 invalid: ${r}`);
    return {
      zero: "0",
      supported: !1,
      parse(r) {
        return typeof r != "string" && (r = r.toString()), n(r), r;
      },
      uParse(r) {
        return typeof r != "string" && (r = r.toString()), s(r), r;
      },
      enc(r) {
        return typeof r != "string" && (r = r.toString()), n(r), Ne(r);
      },
      uEnc(r) {
        return typeof r != "string" && (r = r.toString()), s(r), Ne(r);
      },
      dec(r, o) {
        return Ke(r, o);
      },
      uDec(r, o) {
        return Se(r, o);
      },
    };
  }
  var S = jt();
  var b;
  (function (t) {
    (t[(t.Varint = 0)] = "Varint"),
      (t[(t.Bit64 = 1)] = "Bit64"),
      (t[(t.LengthDelimited = 2)] = "LengthDelimited"),
      (t[(t.StartGroup = 3)] = "StartGroup"),
      (t[(t.EndGroup = 4)] = "EndGroup"),
      (t[(t.Bit32 = 5)] = "Bit32");
  })(b || (b = {}));
  var ne = class {
      constructor(e) {
        (this.stack = []),
          (this.textEncoder = e ?? new TextEncoder()),
          (this.chunks = []),
          (this.buf = []);
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for (let r = 0; r < this.chunks.length; r++) e += this.chunks[r].length;
        let n = new Uint8Array(e),
          s = 0;
        for (let r = 0; r < this.chunks.length; r++)
          n.set(this.chunks[r], s), (s += this.chunks[r].length);
        return (this.chunks = []), n;
      }
      fork() {
        return (
          this.stack.push({ chunks: this.chunks, buf: this.buf }),
          (this.chunks = []),
          (this.buf = []),
          this
        );
      }
      join() {
        let e = this.finish(),
          n = this.stack.pop();
        if (!n) throw new Error("invalid state, fork stack empty");
        return (
          (this.chunks = n.chunks),
          (this.buf = n.buf),
          this.uint32(e.byteLength),
          this.raw(e)
        );
      }
      tag(e, n) {
        return this.uint32(((e << 3) | n) >>> 0);
      }
      raw(e) {
        return (
          this.buf.length &&
            (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
          this.chunks.push(e),
          this
        );
      }
      uint32(e) {
        for (z(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
        return this.buf.push(e), this;
      }
      int32(e) {
        return _(e), Fe(e, this.buf), this;
      }
      bool(e) {
        return this.buf.push(e ? 1 : 0), this;
      }
      bytes(e) {
        return this.uint32(e.byteLength), this.raw(e);
      }
      string(e) {
        let n = this.textEncoder.encode(e);
        return this.uint32(n.byteLength), this.raw(n);
      }
      float(e) {
        Z(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n);
      }
      double(e) {
        let n = new Uint8Array(8);
        return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n);
      }
      fixed32(e) {
        z(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n);
      }
      sfixed32(e) {
        _(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n);
      }
      sint32(e) {
        return _(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), Fe(e, this.buf), this;
      }
      sfixed64(e) {
        let n = new Uint8Array(8),
          s = new DataView(n.buffer),
          r = S.enc(e);
        return s.setInt32(0, r.lo, !0), s.setInt32(4, r.hi, !0), this.raw(n);
      }
      fixed64(e) {
        let n = new Uint8Array(8),
          s = new DataView(n.buffer),
          r = S.uEnc(e);
        return s.setInt32(0, r.lo, !0), s.setInt32(4, r.hi, !0), this.raw(n);
      }
      int64(e) {
        let n = S.enc(e);
        return te(n.lo, n.hi, this.buf), this;
      }
      sint64(e) {
        let n = S.enc(e),
          s = n.hi >> 31,
          r = (n.lo << 1) ^ s,
          o = ((n.hi << 1) | (n.lo >>> 31)) ^ s;
        return te(r, o, this.buf), this;
      }
      uint64(e) {
        let n = S.uEnc(e);
        return te(n.lo, n.hi, this.buf), this;
      }
    },
    re = class {
      constructor(e, n) {
        (this.varint64 = je),
          (this.uint32 = He),
          (this.buf = e),
          (this.len = e.length),
          (this.pos = 0),
          (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (this.textDecoder = n ?? new TextDecoder());
      }
      tag() {
        let e = this.uint32(),
          n = e >>> 3,
          s = e & 7;
        if (n <= 0 || s < 0 || s > 5)
          throw new Error("illegal tag: field no " + n + " wire type " + s);
        return [n, s];
      }
      skip(e) {
        let n = this.pos;
        switch (e) {
          case b.Varint:
            for (; this.buf[this.pos++] & 128; );
            break;
          case b.Bit64:
            this.pos += 4;
          case b.Bit32:
            this.pos += 4;
            break;
          case b.LengthDelimited:
            let s = this.uint32();
            this.pos += s;
            break;
          case b.StartGroup:
            let r;
            for (; (r = this.tag()[1]) !== b.EndGroup; ) this.skip(r);
            break;
          default:
            throw new Error("cant skip wire type " + e);
        }
        return this.assertBounds(), this.buf.subarray(n, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
      }
      int32() {
        return this.uint32() | 0;
      }
      sint32() {
        let e = this.uint32();
        return (e >>> 1) ^ -(e & 1);
      }
      int64() {
        return S.dec(...this.varint64());
      }
      uint64() {
        return S.uDec(...this.varint64());
      }
      sint64() {
        let [e, n] = this.varint64(),
          s = -(e & 1);
        return (
          (e = ((e >>> 1) | ((n & 1) << 31)) ^ s),
          (n = (n >>> 1) ^ s),
          S.dec(e, n)
        );
      }
      bool() {
        let [e, n] = this.varint64();
        return e !== 0 || n !== 0;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0);
      }
      fixed64() {
        return S.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return S.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0);
      }
      bytes() {
        let e = this.uint32(),
          n = this.pos;
        return (
          (this.pos += e), this.assertBounds(), this.buf.subarray(n, n + e)
        );
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
  function A(t, e, n) {
    if (e === n) return !0;
    if (t == u.BYTES) {
      if (
        !(e instanceof Uint8Array) ||
        !(n instanceof Uint8Array) ||
        e.length !== n.length
      )
        return !1;
      for (let s = 0; s < e.length; s++) if (e[s] !== n[s]) return !1;
      return !0;
    }
    switch (t) {
      case u.UINT64:
      case u.FIXED64:
      case u.INT64:
      case u.SFIXED64:
      case u.SINT64:
        return e == n;
    }
    return !1;
  }
  function G(t, e) {
    switch (t) {
      case u.BOOL:
        return !1;
      case u.UINT64:
      case u.FIXED64:
      case u.INT64:
      case u.SFIXED64:
      case u.SINT64:
        return e == 0 ? S.zero : "0";
      case u.DOUBLE:
      case u.FLOAT:
        return 0;
      case u.BYTES:
        return new Uint8Array(0);
      case u.STRING:
        return "";
      default:
        return 0;
    }
  }
  function Re(t, e) {
    let n = e === void 0,
      s = b.Varint,
      r = e === 0;
    switch (t) {
      case u.STRING:
        (r = n || !e.length), (s = b.LengthDelimited);
        break;
      case u.BOOL:
        r = e === !1;
        break;
      case u.DOUBLE:
        s = b.Bit64;
        break;
      case u.FLOAT:
        s = b.Bit32;
        break;
      case u.INT64:
        r = n || e == 0;
        break;
      case u.UINT64:
        r = n || e == 0;
        break;
      case u.FIXED64:
        (r = n || e == 0), (s = b.Bit64);
        break;
      case u.BYTES:
        (r = n || !e.byteLength), (s = b.LengthDelimited);
        break;
      case u.FIXED32:
        s = b.Bit32;
        break;
      case u.SFIXED32:
        s = b.Bit32;
        break;
      case u.SFIXED64:
        (r = n || e == 0), (s = b.Bit64);
        break;
      case u.SINT64:
        r = n || e == 0;
        break;
    }
    let o = u[t].toLowerCase();
    return [s, o, n || r];
  }
  function Qe(t, e, n, s) {
    let r;
    return {
      typeName: e,
      extendee: n,
      get field() {
        if (!r) {
          let o = typeof s == "function" ? s() : s;
          (o.name = e.split(".").pop()),
            (o.jsonName = `[${e}]`),
            (r = t.util.newFieldList([o]).list()[0]);
        }
        return r;
      },
      runtime: t,
    };
  }
  function se(t) {
    let e = t.field.localName,
      n = Object.create(null);
    return (n[e] = Kt(t)), [n, () => n[e]];
  }
  function Kt(t) {
    let e = t.field;
    if (e.repeated) return [];
    if (e.default !== void 0) return e.default;
    switch (e.kind) {
      case "enum":
        return e.T.values[0].no;
      case "scalar":
        return G(e.T, e.L);
      case "message":
        let n = e.T,
          s = new n();
        return n.fieldWrapper ? n.fieldWrapper.unwrapField(s) : s;
      case "map":
        throw "map fields are not allowed to be extensions";
    }
  }
  function Ze(t, e) {
    if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
      for (let n = t.length - 1; n >= 0; --n)
        if (t[n].no == e.no) return [t[n]];
      return [];
    }
    return t.filter((n) => n.no === e.no);
  }
  function et(t, e, n, s) {
    return {
      syntax: t,
      json: e,
      bin: n,
      util: s,
      makeMessageType(r, o, i) {
        return Ye(this, r, o, i);
      },
      makeEnum: qe,
      makeEnumType: Ie,
      getEnumType: _e,
      makeExtension(r, o, i) {
        return Qe(this, r, o, i);
      },
    };
  }
  function oe(t, e) {
    return e instanceof E || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e);
  }
  var Xr = {
    "google.protobuf.DoubleValue": u.DOUBLE,
    "google.protobuf.FloatValue": u.FLOAT,
    "google.protobuf.Int64Value": u.INT64,
    "google.protobuf.UInt64Value": u.UINT64,
    "google.protobuf.Int32Value": u.INT32,
    "google.protobuf.UInt32Value": u.UINT32,
    "google.protobuf.BoolValue": u.BOOL,
    "google.protobuf.StringValue": u.STRING,
    "google.protobuf.BytesValue": u.BYTES,
  };
  var q = Symbol("@bufbuild/protobuf/unknown-fields"),
    tt = { readUnknownFields: !0, readerFactory: (t) => new re(t) },
    nt = { writeUnknownFields: !0, writerFactory: () => new ne() };
  function zt(t) {
    return t ? Object.assign(Object.assign({}, tt), t) : tt;
  }
  function Ht(t) {
    return t ? Object.assign(Object.assign({}, nt), t) : nt;
  }
  function st() {
    return {
      makeReadOptions: zt,
      makeWriteOptions: Ht,
      listUnknownFields(t) {
        var e;
        return (e = t[q]) !== null && e !== void 0 ? e : [];
      },
      discardUnknownFields(t) {
        delete t[q];
      },
      writeUnknownFields(t, e) {
        let s = t[q];
        if (s) for (let r of s) e.tag(r.no, r.wireType).raw(r.data);
      },
      onUnknownField(t, e, n, s) {
        let r = t;
        Array.isArray(r[q]) || (r[q] = []),
          r[q].push({ no: e, wireType: n, data: s });
      },
      readMessage(t, e, n, s, r) {
        let o = t.getType(),
          i = r ? e.len : e.pos + n,
          a,
          c;
        for (; e.pos < i && (([a, c] = e.tag()), c != b.EndGroup); ) {
          let f = o.fields.find(a);
          if (!f) {
            let m = e.skip(c);
            s.readUnknownFields && this.onUnknownField(t, a, c, m);
            continue;
          }
          rt(t, e, f, c, s);
        }
        if (r && (c != b.EndGroup || a !== n))
          throw new Error("invalid end group tag");
      },
      readField: rt,
    };
  }
  function rt(t, e, n, s, r) {
    let { repeated: o, localName: i } = n;
    switch (
      (n.oneof &&
        ((t = t[n.oneof.localName]),
        t.case != i && delete t.value,
        (t.case = i),
        (i = "value")),
      n.kind)
    ) {
      case "scalar":
      case "enum":
        let a = n.kind == "enum" ? u.INT32 : n.T,
          c = ae;
        if ((n.kind == "scalar" && n.L > 0 && (c = Zt), o)) {
          let g = t[i];
          if (s == b.LengthDelimited && a != u.STRING && a != u.BYTES) {
            let h = e.uint32() + e.pos;
            for (; e.pos < h; ) g.push(c(e, a));
          } else g.push(c(e, a));
        } else t[i] = c(e, a);
        break;
      case "message":
        let f = n.T;
        o
          ? t[i].push(ie(e, new f(), r, n))
          : t[i] instanceof E
          ? ie(e, t[i], r, n)
          : ((t[i] = ie(e, new f(), r, n)),
            f.fieldWrapper &&
              !n.oneof &&
              !n.repeated &&
              (t[i] = f.fieldWrapper.unwrapField(t[i])));
        break;
      case "map":
        let [m, l] = Qt(n, e, r);
        t[i][m] = l;
        break;
    }
  }
  function ie(t, e, n, s) {
    let r = e.getType().runtime.bin,
      o = s?.delimited;
    return r.readMessage(e, t, o ? s?.no : t.uint32(), n, o), e;
  }
  function Qt(t, e, n) {
    let s = e.uint32(),
      r = e.pos + s,
      o,
      i;
    for (; e.pos < r; ) {
      let [a] = e.tag();
      switch (a) {
        case 1:
          o = ae(e, t.K);
          break;
        case 2:
          switch (t.V.kind) {
            case "scalar":
              i = ae(e, t.V.T);
              break;
            case "enum":
              i = e.int32();
              break;
            case "message":
              i = ie(e, new t.V.T(), n, void 0);
              break;
          }
          break;
      }
    }
    if (o === void 0) {
      let a = G(t.K, M.BIGINT);
      o = t.K == u.BOOL ? a.toString() : a;
    }
    if (
      (typeof o != "string" && typeof o != "number" && (o = o.toString()),
      i === void 0)
    )
      switch (t.V.kind) {
        case "scalar":
          i = G(t.V.T, M.BIGINT);
          break;
        case "enum":
          i = 0;
          break;
        case "message":
          i = new t.V.T();
          break;
      }
    return [o, i];
  }
  function Zt(t, e) {
    let n = ae(t, e);
    return typeof n == "bigint" ? n.toString() : n;
  }
  function ae(t, e) {
    switch (e) {
      case u.STRING:
        return t.string();
      case u.BOOL:
        return t.bool();
      case u.DOUBLE:
        return t.double();
      case u.FLOAT:
        return t.float();
      case u.INT32:
        return t.int32();
      case u.INT64:
        return t.int64();
      case u.UINT64:
        return t.uint64();
      case u.FIXED64:
        return t.fixed64();
      case u.BYTES:
        return t.bytes();
      case u.FIXED32:
        return t.fixed32();
      case u.SFIXED32:
        return t.sfixed32();
      case u.SFIXED64:
        return t.sfixed64();
      case u.SINT64:
        return t.sint64();
      case u.UINT32:
        return t.uint32();
      case u.SINT32:
        return t.sint32();
    }
  }
  function ot(t, e, n, s, r) {
    t.tag(n.no, b.LengthDelimited), t.fork();
    let o = s;
    switch (n.K) {
      case u.INT32:
      case u.FIXED32:
      case u.UINT32:
      case u.SFIXED32:
      case u.SINT32:
        o = Number.parseInt(s);
        break;
      case u.BOOL:
        I(s == "true" || s == "false"), (o = s == "true");
        break;
    }
    switch ((X(t, n.K, 1, o, !0), n.V.kind)) {
      case "scalar":
        X(t, n.V.T, 2, r, !0);
        break;
      case "enum":
        X(t, u.INT32, 2, r, !0);
        break;
      case "message":
        t.tag(2, b.LengthDelimited).bytes(r.toBinary(e));
        break;
    }
    t.join();
  }
  function Be(t, e, n, s) {
    let r = oe(n.T, s);
    n?.delimited
      ? t.tag(n.no, b.StartGroup).raw(r.toBinary(e)).tag(n.no, b.EndGroup)
      : t.tag(n.no, b.LengthDelimited).bytes(r.toBinary(e));
  }
  function X(t, e, n, s, r) {
    let [o, i, a] = Re(e, s);
    (!a || r) && t.tag(n, o)[i](s);
  }
  function it(t, e, n, s) {
    if (!s.length) return;
    t.tag(n, b.LengthDelimited).fork();
    let [, r] = Re(e);
    for (let o = 0; o < s.length; o++) t[r](s[o]);
    t.join();
  }
  function ct() {
    return Object.assign(Object.assign({}, st()), {
      writeField: at,
      writeMessage(t, e, n) {
        let s = t.getType();
        for (let r of s.fields.byNumber()) {
          let o,
            i = r.localName;
          if (r.oneof) {
            let a = t[r.oneof.localName];
            if (a.case !== i) continue;
            o = a.value;
          } else o = t[i];
          at(r, o, e, n);
        }
        return n.writeUnknownFields && this.writeUnknownFields(t, e), e;
      },
    });
  }
  function at(t, e, n, s) {
    let r = t.repeated;
    switch (t.kind) {
      case "scalar":
      case "enum":
        let o = t.kind == "enum" ? u.INT32 : t.T;
        if (r)
          if (t.packed) it(n, o, t.no, e);
          else for (let i of e) X(n, o, t.no, i, !0);
        else e !== void 0 && X(n, o, t.no, e, !!t.oneof || t.opt);
        break;
      case "message":
        if (r) for (let i of e) Be(n, s, t, i);
        else e !== void 0 && Be(n, s, t, e);
        break;
      case "map":
        for (let [i, a] of Object.entries(e)) ot(n, s, t, i, a);
        break;
    }
  }
  var P =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        "",
      ),
    ce = [];
  for (let t = 0; t < P.length; t++) ce[P[t].charCodeAt(0)] = t;
  ce["-".charCodeAt(0)] = P.indexOf("+");
  ce["_".charCodeAt(0)] = P.indexOf("/");
  var Oe = {
    dec(t) {
      let e = (t.length * 3) / 4;
      t[t.length - 2] == "=" ? (e -= 2) : t[t.length - 1] == "=" && (e -= 1);
      let n = new Uint8Array(e),
        s = 0,
        r = 0,
        o,
        i = 0;
      for (let a = 0; a < t.length; a++) {
        if (((o = ce[t.charCodeAt(a)]), o === void 0))
          switch (t[a]) {
            case "=":
              r = 0;
            case `
`:
            case "\r":
            case "	":
            case " ":
              continue;
            default:
              throw Error("invalid base64 string.");
          }
        switch (r) {
          case 0:
            (i = o), (r = 1);
            break;
          case 1:
            (n[s++] = (i << 2) | ((o & 48) >> 4)), (i = o), (r = 2);
            break;
          case 2:
            (n[s++] = ((i & 15) << 4) | ((o & 60) >> 2)), (i = o), (r = 3);
            break;
          case 3:
            (n[s++] = ((i & 3) << 6) | o), (r = 0);
            break;
        }
      }
      if (r == 1) throw Error("invalid base64 string.");
      return n.subarray(0, s);
    },
    enc(t) {
      let e = "",
        n = 0,
        s,
        r = 0;
      for (let o = 0; o < t.length; o++)
        switch (((s = t[o]), n)) {
          case 0:
            (e += P[s >> 2]), (r = (s & 3) << 4), (n = 1);
            break;
          case 1:
            (e += P[r | (s >> 4)]), (r = (s & 15) << 2), (n = 2);
            break;
          case 2:
            (e += P[r | (s >> 6)]), (e += P[s & 63]), (n = 0);
            break;
        }
      return n && ((e += P[r]), (e += "="), n == 1 && (e += "=")), e;
    },
  };
  function ut(t, e, n) {
    mt(e, t);
    let s = e.runtime.bin.makeReadOptions(n),
      r = Ze(t.getType().runtime.bin.listUnknownFields(t), e.field),
      [o, i] = se(e);
    for (let a of r)
      e.runtime.bin.readField(
        o,
        s.readerFactory(a.data),
        e.field,
        a.wireType,
        s,
      );
    return i();
  }
  function ft(t, e, n, s) {
    mt(e, t);
    let r = e.runtime.bin.makeReadOptions(s),
      o = e.runtime.bin.makeWriteOptions(s);
    if (Ce(t, e)) {
      let f = t
        .getType()
        .runtime.bin.listUnknownFields(t)
        .filter((m) => m.no != e.field.no);
      t.getType().runtime.bin.discardUnknownFields(t);
      for (let m of f)
        t.getType().runtime.bin.onUnknownField(t, m.no, m.wireType, m.data);
    }
    let i = o.writerFactory(),
      a = e.field;
    !a.opt &&
      !a.repeated &&
      (a.kind == "enum" || a.kind == "scalar") &&
      (a = Object.assign(Object.assign({}, e.field), { opt: !0 })),
      e.runtime.bin.writeField(a, n, i, o);
    let c = r.readerFactory(i.finish());
    for (; c.pos < c.len; ) {
      let [f, m] = c.tag(),
        l = c.skip(m);
      t.getType().runtime.bin.onUnknownField(t, f, m, l);
    }
  }
  function Ce(t, e) {
    let n = t.getType();
    return (
      e.extendee.typeName === n.typeName &&
      !!n.runtime.bin.listUnknownFields(t).find((s) => s.no == e.field.no)
    );
  }
  function mt(t, e) {
    I(
      t.extendee.typeName == e.getType().typeName,
      `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`,
    );
  }
  var dt = { ignoreUnknownFields: !1 },
    lt = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0,
    };
  function en(t) {
    return t ? Object.assign(Object.assign({}, dt), t) : dt;
  }
  function tn(t) {
    return t ? Object.assign(Object.assign({}, lt), t) : lt;
  }
  function ht(t, e) {
    let n = e(nn, gt);
    return {
      makeReadOptions: en,
      makeWriteOptions: tn,
      readMessage(s, r, o, i) {
        if (r == null || Array.isArray(r) || typeof r != "object")
          throw new Error(
            `cannot decode message ${s.typeName} from JSON: ${U(r)}`,
          );
        i = i ?? new s();
        let a = new Map(),
          c = o.typeRegistry;
        for (let [f, m] of Object.entries(r)) {
          let l = s.fields.findJsonName(f);
          if (l) {
            if (l.oneof) {
              if (m === null && l.kind == "scalar") continue;
              let g = a.get(l.oneof);
              if (g !== void 0)
                throw new Error(
                  `cannot decode message ${s.typeName} from JSON: multiple keys for oneof "${l.oneof.name}" present: "${g}", "${f}"`,
                );
              a.set(l.oneof, f);
            }
            pt(i, m, l, o, s, t);
          } else {
            let g = !1;
            if (c?.findExtension && f.startsWith("[") && f.endsWith("]")) {
              let p = c.findExtension(f.substring(1, f.length - 1));
              if (p && p.extendee.typeName == s.typeName) {
                g = !0;
                let [h, R] = se(p);
                pt(h, m, p.field, o, p, !0), ft(i, p, R(), o);
              }
            }
            if (!g && !o.ignoreUnknownFields)
              throw new Error(
                `cannot decode message ${s.typeName} from JSON: key "${f}" is unknown`,
              );
          }
        }
        return i;
      },
      writeMessage(s, r) {
        let o = s.getType(),
          i = {},
          a;
        try {
          for (let f of o.fields.byMember()) {
            let m;
            if (f.kind == "oneof") {
              let l = s[f.localName];
              if (l.value === void 0) continue;
              if (((a = f.findField(l.case)), !a))
                throw "oneof case not found: " + l.case;
              m = n(a, l.value, r);
            } else (a = f), (m = n(a, s[a.localName], r));
            m !== void 0 && (i[r.useProtoFieldName ? a.name : a.jsonName] = m);
          }
          let c = r.typeRegistry;
          if (c?.findExtensionFor)
            for (let f of o.runtime.bin.listUnknownFields(s)) {
              let m = c.findExtensionFor(o.typeName, f.no);
              if (m && Ce(s, m)) {
                let l = ut(s, m, r),
                  g = n(m.field, l, r);
                g !== void 0 && (i[m.field.jsonName] = g);
              }
            }
        } catch (c) {
          let f = a
              ? `cannot encode field ${o.typeName}.${a.name} to JSON`
              : `cannot encode message ${o.typeName} to JSON`,
            m = c instanceof Error ? c.message : String(c);
          throw new Error(f + (m.length > 0 ? `: ${m}` : ""));
        }
        return i;
      },
      readScalar: (s, r, o) => H(s, r, o, t),
      writeScalar: gt,
      debug: U,
    };
  }
  function U(t) {
    if (t === null) return "null";
    switch (typeof t) {
      case "object":
        return Array.isArray(t) ? "array" : "object";
      case "string":
        return t.length > 100 ? "string" : `"${t.split('"').join('\\"')}"`;
      default:
        return String(t);
    }
  }
  function pt(t, e, n, s, r, o) {
    let i = n.localName;
    if (n.oneof) {
      if (e === null && n.kind == "scalar") return;
      (t = t[n.oneof.localName] = { case: i }), (i = "value");
    }
    if (n.repeated) {
      if (e === null) return;
      if (!Array.isArray(e))
        throw new Error(
          `cannot decode field ${r.typeName}.${n.name} from JSON: ${U(e)}`,
        );
      let a = t[i];
      for (let c of e) {
        if (c === null)
          throw new Error(
            `cannot decode field ${r.typeName}.${n.name} from JSON: ${U(c)}`,
          );
        let f;
        switch (n.kind) {
          case "message":
            f = n.T.fromJson(c, s);
            break;
          case "enum":
            if (((f = Me(n.T, c, s.ignoreUnknownFields, !0)), f === void 0))
              continue;
            break;
          case "scalar":
            try {
              f = H(n.T, c, n.L, !0);
            } catch (m) {
              let l = `cannot decode field ${r.typeName}.${
                n.name
              } from JSON: ${U(c)}`;
              throw (
                (m instanceof Error &&
                  m.message.length > 0 &&
                  (l += `: ${m.message}`),
                new Error(l))
              );
            }
            break;
        }
        a.push(f);
      }
    } else if (n.kind == "map") {
      if (e === null) return;
      if (typeof e != "object" || Array.isArray(e))
        throw new Error(
          `cannot decode field ${r.typeName}.${n.name} from JSON: ${U(e)}`,
        );
      let a = t[i];
      for (let [c, f] of Object.entries(e)) {
        if (f === null)
          throw new Error(
            `cannot decode field ${r.typeName}.${n.name} from JSON: map value null`,
          );
        let m;
        switch (n.V.kind) {
          case "message":
            m = n.V.T.fromJson(f, s);
            break;
          case "enum":
            if (((m = Me(n.V.T, f, s.ignoreUnknownFields, !0)), m === void 0))
              continue;
            break;
          case "scalar":
            try {
              m = H(n.V.T, f, M.BIGINT, !0);
            } catch (l) {
              let g = `cannot decode map value for field ${r.typeName}.${
                n.name
              } from JSON: ${U(e)}`;
              throw (
                (l instanceof Error &&
                  l.message.length > 0 &&
                  (g += `: ${l.message}`),
                new Error(g))
              );
            }
            break;
        }
        try {
          a[
            H(
              n.K,
              n.K == u.BOOL ? (c == "true" ? !0 : c == "false" ? !1 : c) : c,
              M.BIGINT,
              !0,
            ).toString()
          ] = m;
        } catch (l) {
          let g = `cannot decode map key for field ${r.typeName}.${
            n.name
          } from JSON: ${U(e)}`;
          throw (
            (l instanceof Error &&
              l.message.length > 0 &&
              (g += `: ${l.message}`),
            new Error(g))
          );
        }
      }
    } else
      switch (n.kind) {
        case "message":
          let a = n.T;
          if (e === null && a.typeName != "google.protobuf.Value") {
            if (n.oneof)
              throw new Error(
                `cannot decode field ${r.typeName}.${n.name} from JSON: null is invalid for oneof field`,
              );
            return;
          }
          t[i] instanceof E
            ? t[i].fromJson(e, s)
            : ((t[i] = a.fromJson(e, s)),
              a.fieldWrapper &&
                !n.oneof &&
                (t[i] = a.fieldWrapper.unwrapField(t[i])));
          break;
        case "enum":
          let c = Me(n.T, e, s.ignoreUnknownFields, o);
          c !== void 0 && (t[i] = c);
          break;
        case "scalar":
          try {
            t[i] = H(n.T, e, n.L, o);
          } catch (f) {
            let m = `cannot decode field ${r.typeName}.${n.name} from JSON: ${U(
              e,
            )}`;
            throw (
              (f instanceof Error &&
                f.message.length > 0 &&
                (m += `: ${f.message}`),
              new Error(m))
            );
          }
          break;
      }
  }
  function H(t, e, n, s) {
    switch (t) {
      case u.DOUBLE:
      case u.FLOAT:
        if (e === null) return s ? 0 : void 0;
        if (e === "NaN") return Number.NaN;
        if (e === "Infinity") return Number.POSITIVE_INFINITY;
        if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
        if (
          e === "" ||
          (typeof e == "string" && e.trim().length !== e.length) ||
          (typeof e != "string" && typeof e != "number")
        )
          break;
        let r = Number(e);
        if (Number.isNaN(r) || !Number.isFinite(r)) break;
        return t == u.FLOAT && Z(r), r;
      case u.INT32:
      case u.FIXED32:
      case u.SFIXED32:
      case u.SINT32:
      case u.UINT32:
        if (e === null) return s ? 0 : void 0;
        let o;
        if (
          (typeof e == "number"
            ? (o = e)
            : typeof e == "string" &&
              e.length > 0 &&
              e.trim().length === e.length &&
              (o = Number(e)),
          o === void 0)
        )
          break;
        return t == u.UINT32 ? z(o) : _(o), o;
      case u.INT64:
      case u.SFIXED64:
      case u.SINT64:
        if (e === null) return s ? S.zero : void 0;
        if (typeof e != "number" && typeof e != "string") break;
        let i = S.parse(e);
        return n ? i.toString() : i;
      case u.FIXED64:
      case u.UINT64:
        if (e === null) return s ? S.zero : void 0;
        if (typeof e != "number" && typeof e != "string") break;
        let a = S.uParse(e);
        return n ? a.toString() : a;
      case u.BOOL:
        if (e === null) return s ? !1 : void 0;
        if (typeof e != "boolean") break;
        return e;
      case u.STRING:
        if (e === null) return s ? "" : void 0;
        if (typeof e != "string") break;
        try {
          encodeURIComponent(e);
        } catch {
          throw new Error("invalid UTF8");
        }
        return e;
      case u.BYTES:
        if (e === null) return s ? new Uint8Array(0) : void 0;
        if (e === "") return new Uint8Array(0);
        if (typeof e != "string") break;
        return Oe.dec(e);
    }
    throw new Error();
  }
  function Me(t, e, n, s) {
    if (e === null) return s ? t.values[0].no : void 0;
    switch (typeof e) {
      case "number":
        if (Number.isInteger(e)) return e;
        break;
      case "string":
        let r = t.findName(e);
        if (r || n) return r?.no;
        break;
    }
    throw new Error(`cannot decode enum ${t.typeName} from JSON: ${U(e)}`);
  }
  function nn(t, e, n, s) {
    var r;
    if (e === void 0) return e;
    if (!n && t.values[0].no === e) return;
    if (s) return e;
    if (t.typeName == "google.protobuf.NullValue") return null;
    let o = t.findNumber(e);
    return (r = o?.name) !== null && r !== void 0 ? r : e;
  }
  function gt(t, e, n) {
    if (e !== void 0)
      switch (t) {
        case u.INT32:
        case u.SFIXED32:
        case u.SINT32:
        case u.FIXED32:
        case u.UINT32:
          return I(typeof e == "number"), e != 0 || n ? e : void 0;
        case u.FLOAT:
        case u.DOUBLE:
          return (
            I(typeof e == "number"),
            Number.isNaN(e)
              ? "NaN"
              : e === Number.POSITIVE_INFINITY
              ? "Infinity"
              : e === Number.NEGATIVE_INFINITY
              ? "-Infinity"
              : e !== 0 || n
              ? e
              : void 0
          );
        case u.STRING:
          return I(typeof e == "string"), e.length > 0 || n ? e : void 0;
        case u.BOOL:
          return I(typeof e == "boolean"), e || n ? e : void 0;
        case u.UINT64:
        case u.FIXED64:
        case u.INT64:
        case u.SFIXED64:
        case u.SINT64:
          return (
            I(
              typeof e == "bigint" ||
                typeof e == "string" ||
                typeof e == "number",
            ),
            n || e != 0 ? e.toString(10) : void 0
          );
        case u.BYTES:
          return (
            I(e instanceof Uint8Array),
            n || e.byteLength > 0 ? Oe.enc(e) : void 0
          );
      }
  }
  function yt() {
    return ht(
      !0,
      (t, e) =>
        function (s, r, o) {
          if (s.kind == "map") {
            let i = {};
            switch (s.V.kind) {
              case "scalar":
                for (let [c, f] of Object.entries(r)) {
                  let m = e(s.V.T, f, !0);
                  I(m !== void 0), (i[c.toString()] = m);
                }
                break;
              case "message":
                for (let [c, f] of Object.entries(r))
                  i[c.toString()] = f.toJson(o);
                break;
              case "enum":
                let a = s.V.T;
                for (let [c, f] of Object.entries(r)) {
                  I(f === void 0 || typeof f == "number");
                  let m = t(a, f, !0, o.enumAsInteger);
                  I(m !== void 0), (i[c.toString()] = m);
                }
                break;
            }
            return o.emitDefaultValues || Object.keys(i).length > 0
              ? i
              : void 0;
          } else if (s.repeated) {
            let i = [];
            switch (s.kind) {
              case "scalar":
                for (let a = 0; a < r.length; a++) i.push(e(s.T, r[a], !0));
                break;
              case "enum":
                for (let a = 0; a < r.length; a++)
                  i.push(t(s.T, r[a], !0, o.enumAsInteger));
                break;
              case "message":
                for (let a = 0; a < r.length; a++) i.push(r[a].toJson(o));
                break;
            }
            return o.emitDefaultValues || i.length > 0 ? i : void 0;
          } else {
            if (r === void 0) return;
            switch (s.kind) {
              case "scalar":
                return e(s.T, r, !!s.oneof || s.opt || o.emitDefaultValues);
              case "enum":
                return t(
                  s.T,
                  r,
                  !!s.oneof || s.opt || o.emitDefaultValues,
                  o.enumAsInteger,
                );
              case "message":
                return oe(s.T, r).toJson(o);
            }
          }
        },
    );
  }
  function bt() {
    return {
      setEnumType: xe,
      initPartial(t, e) {
        if (t === void 0) return;
        let n = e.getType();
        for (let s of n.fields.byMember()) {
          let r = s.localName,
            o = e,
            i = t;
          if (i[r] !== void 0)
            switch (s.kind) {
              case "oneof":
                let a = i[r].case;
                if (a === void 0) continue;
                let c = s.findField(a),
                  f = i[r].value;
                c && c.kind == "message" && !(f instanceof c.T)
                  ? (f = new c.T(f))
                  : c && c.kind === "scalar" && c.T === u.BYTES && (f = Q(f)),
                  (o[r] = { case: a, value: f });
                break;
              case "scalar":
              case "enum":
                let m = i[r];
                s.T === u.BYTES && (m = s.repeated ? m.map(Q) : Q(m)),
                  (o[r] = m);
                break;
              case "map":
                switch (s.V.kind) {
                  case "scalar":
                  case "enum":
                    if (s.V.T === u.BYTES)
                      for (let [p, h] of Object.entries(i[r])) o[r][p] = Q(h);
                    else Object.assign(o[r], i[r]);
                    break;
                  case "message":
                    let g = s.V.T;
                    for (let p of Object.keys(i[r])) {
                      let h = i[r][p];
                      g.fieldWrapper || (h = new g(h)), (o[r][p] = h);
                    }
                    break;
                }
                break;
              case "message":
                let l = s.T;
                if (s.repeated)
                  o[r] = i[r].map((g) => (g instanceof l ? g : new l(g)));
                else if (i[r] !== void 0) {
                  let g = i[r];
                  l.fieldWrapper
                    ? l.typeName === "google.protobuf.BytesValue"
                      ? (o[r] = Q(g))
                      : (o[r] = g)
                    : (o[r] = g instanceof l ? g : new l(g));
                }
                break;
            }
        }
      },
      equals(t, e, n) {
        return e === n
          ? !0
          : !e || !n
          ? !1
          : t.fields.byMember().every((s) => {
              let r = e[s.localName],
                o = n[s.localName];
              if (s.repeated) {
                if (r.length !== o.length) return !1;
                switch (s.kind) {
                  case "message":
                    return r.every((i, a) => s.T.equals(i, o[a]));
                  case "scalar":
                    return r.every((i, a) => A(s.T, i, o[a]));
                  case "enum":
                    return r.every((i, a) => A(u.INT32, i, o[a]));
                }
                throw new Error(`repeated cannot contain ${s.kind}`);
              }
              switch (s.kind) {
                case "message":
                  return s.T.equals(r, o);
                case "enum":
                  return A(u.INT32, r, o);
                case "scalar":
                  return A(s.T, r, o);
                case "oneof":
                  if (r.case !== o.case) return !1;
                  let i = s.findField(r.case);
                  if (i === void 0) return !0;
                  switch (i.kind) {
                    case "message":
                      return i.T.equals(r.value, o.value);
                    case "enum":
                      return A(u.INT32, r.value, o.value);
                    case "scalar":
                      return A(i.T, r.value, o.value);
                  }
                  throw new Error(`oneof cannot contain ${i.kind}`);
                case "map":
                  let a = Object.keys(r).concat(Object.keys(o));
                  switch (s.V.kind) {
                    case "message":
                      let c = s.V.T;
                      return a.every((m) => c.equals(r[m], o[m]));
                    case "enum":
                      return a.every((m) => A(u.INT32, r[m], o[m]));
                    case "scalar":
                      let f = s.V.T;
                      return a.every((m) => A(f, r[m], o[m]));
                  }
                  break;
              }
            });
      },
      clone(t) {
        let e = t.getType(),
          n = new e(),
          s = n;
        for (let r of e.fields.byMember()) {
          let o = t[r.localName],
            i;
          if (r.repeated) i = o.map(ue);
          else if (r.kind == "map") {
            i = s[r.localName];
            for (let [a, c] of Object.entries(o)) i[a] = ue(c);
          } else
            r.kind == "oneof"
              ? (i = r.findField(o.case)
                  ? { case: o.case, value: ue(o.value) }
                  : { case: void 0 })
              : (i = ue(o));
          s[r.localName] = i;
        }
        return n;
      },
    };
  }
  function ue(t) {
    if (t === void 0) return t;
    if (t instanceof E) return t.clone();
    if (t instanceof Uint8Array) {
      let e = new Uint8Array(t.byteLength);
      return e.set(t), e;
    }
    return t;
  }
  function Q(t) {
    return t instanceof Uint8Array ? t : new Uint8Array(t);
  }
  var fe = class {
    constructor(e, n) {
      (this._fields = e), (this._normalizer = n);
    }
    findJsonName(e) {
      if (!this.jsonNames) {
        let n = {};
        for (let s of this.list()) n[s.jsonName] = n[s.name] = s;
        this.jsonNames = n;
      }
      return this.jsonNames[e];
    }
    find(e) {
      if (!this.numbers) {
        let n = {};
        for (let s of this.list()) n[s.no] = s;
        this.numbers = n;
      }
      return this.numbers[e];
    }
    list() {
      return this.all || (this.all = this._normalizer(this._fields)), this.all;
    }
    byNumber() {
      return (
        this.numbersAsc ||
          (this.numbersAsc = this.list()
            .concat()
            .sort((e, n) => e.no - n.no)),
        this.numbersAsc
      );
    }
    byMember() {
      if (!this.members) {
        this.members = [];
        let e = this.members,
          n;
        for (let s of this.list())
          s.oneof ? s.oneof !== n && ((n = s.oneof), e.push(n)) : e.push(s);
      }
      return this.members;
    }
  };
  function Ue(t, e) {
    let n = wt(t);
    return e ? n : an(on(n));
  }
  function kt(t) {
    return Ue(t, !1);
  }
  var Tt = wt;
  function wt(t) {
    let e = !1,
      n = [];
    for (let s = 0; s < t.length; s++) {
      let r = t.charAt(s);
      switch (r) {
        case "_":
          e = !0;
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          n.push(r), (e = !1);
          break;
        default:
          e && ((e = !1), (r = r.toUpperCase())), n.push(r);
          break;
      }
    }
    return n.join("");
  }
  var rn = new Set(["constructor", "toString", "toJSON", "valueOf"]),
    sn = new Set([
      "getType",
      "clone",
      "equals",
      "fromBinary",
      "fromJson",
      "fromJsonString",
      "toBinary",
      "toJson",
      "toJsonString",
      "toObject",
    ]),
    xt = (t) => `${t}$`,
    on = (t) => (sn.has(t) ? xt(t) : t),
    an = (t) => (rn.has(t) ? xt(t) : t);
  var me = class {
    constructor(e) {
      (this.kind = "oneof"),
        (this.repeated = !1),
        (this.packed = !1),
        (this.opt = !1),
        (this.default = void 0),
        (this.fields = []),
        (this.name = e),
        (this.localName = kt(e));
    }
    addField(e) {
      I(e.oneof === this, `field ${e.name} not one of ${this.name}`),
        this.fields.push(e);
    }
    findField(e) {
      if (!this._lookup) {
        this._lookup = Object.create(null);
        for (let n = 0; n < this.fields.length; n++)
          this._lookup[this.fields[n].localName] = this.fields[n];
      }
      return this._lookup[e];
    }
  };
  var d = et(
    "proto3",
    yt(),
    ct(),
    Object.assign(Object.assign({}, bt()), {
      newFieldList(t) {
        return new fe(t, cn);
      },
      initFields(t) {
        for (let e of t.getType().fields.byMember()) {
          if (e.opt) continue;
          let n = e.localName,
            s = t;
          if (e.repeated) {
            s[n] = [];
            continue;
          }
          switch (e.kind) {
            case "oneof":
              s[n] = { case: void 0 };
              break;
            case "enum":
              s[n] = 0;
              break;
            case "map":
              s[n] = {};
              break;
            case "scalar":
              s[n] = G(e.T, e.L);
              break;
            case "message":
              break;
          }
        }
      },
    }),
  );
  function cn(t) {
    var e, n, s, r;
    let o = [],
      i;
    for (let a of typeof t == "function" ? t() : t) {
      let c = a;
      if (
        ((c.localName = Ue(a.name, a.oneof !== void 0)),
        (c.jsonName =
          (e = a.jsonName) !== null && e !== void 0 ? e : Tt(a.name)),
        (c.repeated = (n = a.repeated) !== null && n !== void 0 ? n : !1),
        a.kind == "scalar" &&
          (c.L = (s = a.L) !== null && s !== void 0 ? s : M.BIGINT),
        a.oneof !== void 0)
      ) {
        let f = typeof a.oneof == "string" ? a.oneof : a.oneof.name;
        (!i || i.name != f) && (i = new me(f)), (c.oneof = i), i.addField(c);
      }
      a.kind == "message" && (c.delimited = !1),
        (c.packed =
          (r = a.packed) !== null && r !== void 0
            ? r
            : a.kind == "enum" ||
              (a.kind == "scalar" && a.T != u.BYTES && a.T != u.STRING)),
        o.push(c);
    }
    return o;
  }
  var Nt = d.makeMessageType("youtube.response.browse.Browse", () => [
      { no: 1, name: "responseContext", kind: "message", T: un },
      { no: 9, name: "contents", kind: "message", T: L },
      { no: 10, name: "onResponseReceivedActions", kind: "message", T: L },
    ]),
    un = d.makeMessageType("youtube.response.browse.ResponseContext", () => [
      {
        no: 6,
        name: "serviceTrackingParams",
        kind: "message",
        T: fn,
        repeated: !0,
      },
    ]),
    fn = d.makeMessageType(
      "youtube.response.browse.ServiceTrackingParams",
      () => [
        { no: 1, name: "service", kind: "scalar", T: 5 },
        { no: 2, name: "params", kind: "message", T: mn, repeated: !0 },
      ],
    ),
    mn = d.makeMessageType("youtube.response.browse.Params", () => [
      { no: 1, name: "key", kind: "scalar", T: 9 },
      { no: 2, name: "value", kind: "scalar", T: 9 },
    ]),
    L = d.makeMessageType("youtube.response.browse.Contents", () => [
      { no: 58173949, name: "browseResultsRenderer", kind: "message", T: dn },
      {
        no: 153515154,
        name: "videoWithContextRenderer",
        kind: "message",
        T: Et,
      },
      { no: 49399797, name: "richGridRenderer", kind: "message", T: Ae },
    ]),
    dn = d.makeMessageType(
      "youtube.response.browse.BrowseResultsRenderer",
      () => [{ no: 1, name: "tabs", kind: "message", T: ln, repeated: !0 }],
    ),
    ln = d.makeMessageType("youtube.response.browse.Tab", () => [
      { no: 58174010, name: "tabRenderer", kind: "message", T: pn },
    ]),
    pn = d.makeMessageType("youtube.response.browse.TabRenderer", () => [
      { no: 4, name: "contents", kind: "message", T: L },
    ]),
    Ae = d.makeMessageType("youtube.response.browse.RichGridRenderer", () => [
      { no: 1, name: "richGridContents", kind: "message", T: gn, repeated: !0 },
    ]),
    gn = d.makeMessageType("youtube.response.browse.RichGridContent", () => [
      { no: 50195462, name: "richItemRenderer", kind: "message", T: Pe },
      { no: 51845067, name: "richSectionRenderer", kind: "message", T: Nn },
      {
        no: 221496734,
        name: "musicDescriptionShelfRenderer",
        kind: "message",
        T: Fn,
      },
    ]),
    Pe = d.makeMessageType("youtube.response.browse.RichItemRenderer", () => [
      { no: 1, name: "richItemContent", kind: "message", T: St, repeated: !0 },
    ]),
    St = d.makeMessageType("youtube.response.browse.RichItemContent", () => [
      {
        no: 153515154,
        name: "videoWithContextRenderer",
        kind: "message",
        T: Et,
      },
    ]),
    Et = d.makeMessageType(
      "youtube.response.browse.VideoWithContextRenderer",
      () => [
        { no: 172660663, name: "videoRendererContent", kind: "message", T: hn },
      ],
    ),
    hn = d.makeMessageType(
      "youtube.response.browse.VideoRendererContent",
      () => [
        { no: 1, name: "videoInfo", kind: "message", T: yn },
        { no: 2, name: "renderInfo", kind: "message", T: xn },
      ],
    ),
    yn = d.makeMessageType("youtube.response.browse.VideoInfo", () => [
      { no: 168777401, name: "videoContext", kind: "message", T: bn },
    ]),
    bn = d.makeMessageType("youtube.response.browse.VideoContext", () => [
      { no: 5, name: "videoContent", kind: "message", T: kn },
    ]),
    kn = d.makeMessageType("youtube.response.browse.VideoContent", () => [
      { no: 465160965, name: "timedLyricsRender", kind: "message", T: Tn },
    ]),
    Tn = d.makeMessageType("youtube.response.browse.TimedLyricsRender", () => [
      { no: 4, name: "timedLyricsContent", kind: "message", T: wn },
    ]),
    wn = d.makeMessageType("youtube.response.browse.TimedLyricsContent", () => [
      { no: 1, name: "runs", kind: "message", T: Ft, repeated: !0 },
      { no: 2, name: "footerLabel", kind: "scalar", T: 9 },
    ]),
    xn = d.makeMessageType("youtube.response.browse.RenderInfo", () => [
      { no: 183314536, name: "layoutRender", kind: "message", T: In },
    ]),
    In = d.makeMessageType("youtube.response.browse.LayoutRender", () => [
      { no: 1, name: "eml", kind: "scalar", T: 9 },
    ]),
    Nn = d.makeMessageType(
      "youtube.response.browse.RichSectionRenderer",
      () => [{ no: 5, name: "richSectionContent", kind: "message", T: Sn }],
    ),
    Sn = d.makeMessageType("youtube.response.browse.RichSectionContent", () => [
      { no: 51431404, name: "reelShelfRenderer", kind: "message", T: En },
    ]),
    En = d.makeMessageType("youtube.response.browse.ReelShelfRenderer", () => [
      { no: 1, name: "richItemContent", kind: "message", T: St, repeated: !0 },
    ]),
    Fn = d.makeMessageType(
      "youtube.response.browse.MusicDescriptionShelfRenderer",
      () => [
        { no: 3, name: "description", kind: "message", T: It },
        { no: 10, name: "footer", kind: "message", T: It },
      ],
    ),
    It = d.makeMessageType("youtube.response.browse.Label", () => [
      { no: 1, name: "runs", kind: "message", T: Ft, repeated: !0 },
    ]),
    Ft = d.makeMessageType("youtube.response.browse.Run", () => [
      { no: 1, name: "text", kind: "scalar", T: 9 },
    ]);
  var Rt = d.makeMessageType("youtube.response.next.Next", () => [
      { no: 7, name: "Contents", kind: "message", T: Rn },
      { no: 8, name: "onResponseReceivedActions", kind: "message", T: L },
    ]),
    Rn = d.makeMessageType("youtube.response.next.Contents", () => [
      { no: 51779735, name: "NextResults", kind: "message", T: Bn },
    ]),
    Bn = d.makeMessageType("youtube.response.next.NextResults", () => [
      { no: 1, name: "Contents", kind: "message", T: L },
    ]);
  var Bt = d.makeMessageType("youtube.response.search.Search", () => [
      { no: 4, name: "contents", kind: "message", T: L },
      { no: 7, name: "onResponseReceivedCommands", kind: "message", T: On },
    ]),
    On = d.makeMessageType(
      "youtube.response.search.OnResponseReceivedCommands",
      () => [
        { no: 50195462, name: "richItemRenderer", kind: "message", T: Pe },
        {
          no: 49399797,
          name: "appendContinuationItemsAction",
          kind: "message",
          T: Ae,
        },
      ],
    );
  var Ot = d.makeMessageType("youtube.response.shorts.Shorts", () => [
      { no: 2, name: "entries", kind: "message", T: Cn, repeated: !0 },
    ]),
    Cn = d.makeMessageType("youtube.response.shorts.Entry", () => [
      { no: 1, name: "command", kind: "message", T: Mn },
    ]),
    Mn = d.makeMessageType("youtube.response.shorts.Command", () => [
      { no: 139608561, name: "reelWatchEndpoint", kind: "message", T: Un },
    ]),
    Un = d.makeMessageType("youtube.response.shorts.ReelWatchEndpoint", () => [
      { no: 8, name: "overlay", kind: "message", T: An },
    ]),
    An = d.makeMessageType("youtube.response.shorts.Overlay", () => [
      {
        no: 139970731,
        name: "reelPlayerOverlayRenderer",
        kind: "message",
        T: Pn,
      },
    ]),
    Pn = d.makeMessageType(
      "youtube.response.shorts.ReelPlayerOverlayRenderer",
      () => [{ no: 12, name: "style", kind: "scalar", T: 5 }],
    );
  var Ut = d.makeMessageType("youtube.response.browse.Guide", () => [
      { no: 4, name: "items4", kind: "message", T: Ct, repeated: !0 },
      { no: 6, name: "items6", kind: "message", T: Ct, repeated: !0 },
    ]),
    Ct = d.makeMessageType("youtube.response.browse.Item", () => [
      { no: 117866661, name: "guideSectionRenderer", kind: "message", T: vn },
    ]),
    vn = d.makeMessageType(
      "youtube.response.browse.GuideSectionRenderer",
      () => [
        { no: 1, name: "rendererItems", kind: "message", T: Dn, repeated: !0 },
      ],
    ),
    Dn = d.makeMessageType("youtube.response.browse.RendererItem", () => [
      { no: 318370163, name: "iconRender", kind: "message", T: Mt },
      { no: 117501096, name: "labelRender", kind: "message", T: Mt },
    ]),
    Mt = d.makeMessageType("youtube.response.browse.guideEntryRenderer", () => [
      { no: 1, name: "browseId", kind: "scalar", T: 9 },
    ]);
  var At = d.makeMessageType("youtube.response.player.Player", () => [
      { no: 7, name: "adPlacements", kind: "message", T: Ln, repeated: !0 },
      { no: 2, name: "playabilityStatus", kind: "message", T: Vn },
      { no: 9, name: "playbackTracking", kind: "message", T: qn },
      { no: 10, name: "captions", kind: "message", T: Xn },
    ]),
    Ln = d.makeMessageType("youtube.response.player.AdPlacement", () => [
      { no: 84813246, name: "adPlacementRenderer", kind: "message", T: $n },
    ]),
    $n = d.makeMessageType(
      "youtube.response.player.AdPlacementRenderer",
      () => [{ no: 4, name: "params", kind: "scalar", T: 9 }],
    ),
    Vn = d.makeMessageType("youtube.response.player.PlayabilityStatus", () => [
      { no: 21, name: "miniPlayer", kind: "message", T: Jn },
      { no: 11, name: "backgroundPlayer", kind: "message", T: ve },
    ]),
    Jn = d.makeMessageType("youtube.response.player.MiniPlayer", () => [
      { no: 151635310, name: "miniPlayerRender", kind: "message", T: Gn },
    ]),
    ve = d.makeMessageType("youtube.response.player.BackgroundPlayer", () => [
      { no: 64657230, name: "backgroundPlayerRender", kind: "message", T: _n },
    ]),
    Gn = d.makeMessageType("youtube.response.player.MiniPlayerRender", () => [
      { no: 1, name: "active", kind: "scalar", T: 8 },
    ]),
    _n = d.makeMessageType(
      "youtube.response.player.BackgroundPlayerRender",
      () => [{ no: 1, name: "active", kind: "scalar", T: 8 }],
    ),
    qn = d.makeMessageType("youtube.response.player.PlaybackTracking", () => [
      { no: 1, name: "videostatsPlaybackUrl", kind: "message", T: $ },
      { no: 2, name: "videostatsDelayplayUrl", kind: "message", T: $ },
      { no: 3, name: "videostatsWatchtimeUrl", kind: "message", T: $ },
      { no: 4, name: "ptrackingUrl", kind: "message", T: $ },
      { no: 5, name: "qoeUrl", kind: "message", T: $ },
      { no: 13, name: "atrUrl", kind: "message", T: $ },
      { no: 15, name: "videostatsEngageUrl", kind: "message", T: $ },
      { no: 18, name: "pageadViewthroughconversion", kind: "message", T: $ },
    ]),
    $ = d.makeMessageType("youtube.response.player.Tracking", () => [
      { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
    ]),
    Xn = d.makeMessageType("youtube.response.player.Captions", () => [
      {
        no: 51621377,
        name: "playerCaptionsTrackListRenderer",
        jsonName: "playerCaptionsTracklistRenderer",
        kind: "message",
        T: Yn,
      },
    ]),
    Yn = d.makeMessageType(
      "youtube.response.player.PlayerCaptionsTrackListRenderer",
      () => [
        { no: 1, name: "captionTracks", kind: "message", T: De, repeated: !0 },
        { no: 2, name: "audioTracks", kind: "message", T: Wn, repeated: !0 },
        {
          no: 3,
          name: "translationLanguages",
          kind: "message",
          T: Le,
          repeated: !0,
        },
        {
          no: 4,
          name: "defaultAudioTrackIndex",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        {
          no: 6,
          name: "defaultCaptionTrackIndex",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
      ],
    ),
    De = d.makeMessageType("youtube.response.player.CaptionTrack", () => [
      { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
      { no: 2, name: "name", kind: "message", T: Pt },
      { no: 3, name: "vssId", kind: "scalar", T: 9 },
      { no: 4, name: "languageCode", kind: "scalar", T: 9 },
      { no: 5, name: "kind", kind: "scalar", T: 9, opt: !0 },
      { no: 6, name: "rtl", kind: "scalar", T: 8, opt: !0 },
      { no: 7, name: "isTranslatable", kind: "scalar", T: 8 },
    ]),
    Wn = d.makeMessageType("youtube.response.player.AudioTrack", () => [
      {
        no: 2,
        name: "captionTrackIndices",
        kind: "scalar",
        T: 5,
        repeated: !0,
        packed: !1,
      },
      {
        no: 3,
        name: "defaultCaptionTrackIndex",
        kind: "scalar",
        T: 5,
        opt: !0,
      },
      { no: 4, name: "forcedCaptionTrackIndex", kind: "scalar", T: 5, opt: !0 },
      { no: 5, name: "visibility", kind: "scalar", T: 5, opt: !0 },
      { no: 6, name: "hasDefaultTrack", kind: "scalar", T: 8, opt: !0 },
      { no: 7, name: "hasForcedTrack", kind: "scalar", T: 8, opt: !0 },
      { no: 8, name: "audioTrackId", kind: "scalar", T: 9, opt: !0 },
      { no: 11, name: "captionsInitialState", kind: "scalar", T: 5, opt: !0 },
    ]),
    Le = d.makeMessageType(
      "youtube.response.player.TranslationLanguage",
      () => [
        { no: 1, name: "languageCode", kind: "scalar", T: 9 },
        { no: 2, name: "languageName", kind: "message", T: Pt },
      ],
    ),
    Pt = d.makeMessageType("youtube.response.player.Name", () => [
      { no: 1, name: "runs", kind: "message", T: jn, repeated: !0 },
    ]),
    jn = d.makeMessageType(
      "youtube.response.player.Name.Run",
      () => [{ no: 1, name: "text", kind: "scalar", T: 9 }],
      { localName: "Name_Run" },
    );
  var Dt = d.makeMessageType("youtube.response.setting.Setting", () => [
      { no: 6, name: "settingItems", kind: "message", T: $e, repeated: !0 },
      { no: 10, name: "trackingParams", kind: "message", T: de },
    ]),
    $e = d.makeMessageType("youtube.response.setting.SettingItem", () => [
      {
        no: 88478200,
        name: "settingCategoryEntryRenderer",
        kind: "message",
        T: zn,
      },
      {
        no: 66930374,
        name: "settingCategoryCollectionRenderer",
        kind: "message",
        T: Hn,
      },
    ]),
    de = d.makeMessageType("youtube.response.setting.TrackingParams", () => [
      { no: 1, name: "f1", kind: "scalar", T: 5 },
      { no: 2, name: "f2", kind: "scalar", T: 5 },
      { no: 3, name: "f3", kind: "scalar", T: 5 },
      { no: 4, name: "timeInfo", kind: "message", T: Kn },
    ]),
    Kn = d.makeMessageType("youtube.response.setting.TimeInfo", () => [
      { no: 1, name: "timestamp", kind: "scalar", T: 4, L: 1 },
      { no: 2, name: "f2", kind: "scalar", T: 7 },
      { no: 3, name: "f3", kind: "scalar", T: 7 },
    ]),
    zn = d.makeMessageType(
      "youtube.response.setting.SettingCategoryEntryRenderer",
      () => [
        { no: 2, name: "f2", kind: "scalar", T: 5 },
        { no: 3, name: "f3", kind: "scalar", T: 5 },
        { no: 5, name: "trackingParams", kind: "message", T: de },
        { no: 6, name: "f6", kind: "scalar", T: 5 },
        { no: 7, name: "f7", kind: "scalar", T: 5 },
        { no: 8, name: "f8", kind: "scalar", T: 5 },
        { no: 9, name: "f9", kind: "scalar", T: 5 },
        { no: 10, name: "f10", kind: "scalar", T: 5 },
        { no: 12, name: "f12", kind: "scalar", T: 5 },
      ],
    ),
    Hn = d.makeMessageType(
      "youtube.response.setting.SettingCategoryCollectionRenderer",
      () => [
        { no: 3, name: "subSettings", kind: "message", T: Ve, repeated: !0 },
        { no: 4, name: "categoryId", kind: "scalar", T: 5 },
      ],
    ),
    Ve = d.makeMessageType("youtube.response.setting.SubSetting", () => [
      { no: 61331416, name: "settingBooleanRenderer", kind: "message", T: Qn },
    ]),
    Qn = d.makeMessageType(
      "youtube.response.setting.SettingBooleanRenderer",
      () => [
        { no: 5, name: "enableServiceEndpoint", kind: "message", T: vt },
        { no: 6, name: "disableServiceEndpoint", kind: "message", T: vt },
        { no: 13, name: "clickTrackingParams", kind: "message", T: de },
        { no: 15, name: "itemId", kind: "scalar", T: 5 },
      ],
    ),
    vt = d.makeMessageType("youtube.response.setting.ServiceEndpoint", () => [
      { no: 2, name: "trackingParams", kind: "message", T: de },
      {
        no: 81212182,
        name: "setClientSettingEndpoint",
        kind: "message",
        T: Zn,
      },
    ]),
    Zn = d.makeMessageType(
      "youtube.response.setting.SetClientSettingEndpoint",
      () => [{ no: 1, name: "settingDatas", kind: "message", T: er }],
    ),
    er = d.makeMessageType("youtube.response.setting.SettingDatas", () => [
      { no: 1, name: "clientSettingEnum", kind: "message", T: tr },
      { no: 3, name: "boolValue", kind: "scalar", T: 8 },
    ]),
    tr = d.makeMessageType("youtube.response.setting.ClientSettingEnum", () => [
      { no: 1, name: "item", kind: "scalar", T: 5 },
    ]);
  var Y = class {
      _times = new Map();
      name;
      isDebug;
      className;
      request;
      response;
      constructor(e, n, s) {
        (this.name = e ?? ""),
          (this.isDebug = s?.debug ?? !1),
          e && this.debug(`${e} Start`),
          (this.className = n ?? ""),
          this.init();
      }
      static getInstance(e, n) {
        let s = typeof $task < "u" ? "QuanX" : "Surge";
        return (
          Y.instances[s] || (Y.instances[s] = Y.classNames[s](e, s, n)),
          Y.instances[s]
        );
      }
      createProxy(e) {
        return new Proxy(e, { get: this.getFn, set: this.setFn });
      }
      getFn(e, n, s) {
        return e[n];
      }
      setFn(e, n, s, r) {
        return (e[n] = s), !0;
      }
      getJSON(e, n = {}) {
        let s = this.getVal(e);
        return s ? JSON.parse(s) : n;
      }
      setJSON(e, n) {
        this.setVal(JSON.stringify(e), n);
      }
      msg(e = this.name, n = "", s = "", r) {}
      debug(e) {
        this.isDebug &&
          (typeof e == "object" && (e = JSON.stringify(e)), console.log(e));
      }
      log(e) {
        typeof e == "object" && (e = JSON.stringify(e)), console.log(e);
      }
      timeStart(e) {
        this._times.set(e, Date.now());
      }
      timeEnd(e) {
        if (this._times.has(e)) {
          let n = this._times.get(e) ?? 0,
            s = Date.now() - n;
          this.debug(`${e}: ${s}ms`), this._times.delete(e);
        } else this.debug(`Timer with label ${e} does not exist.`);
      }
      exit() {
        $done({});
      }
      reject() {
        $done();
      }
    },
    D = Y;
  K(D, "instances", {}),
    K(D, "classNames", {
      QuanX: (e, n, s) => new pe(e, n, s),
      Surge: (e, n, s) => new le(e, n, s),
    });
  var ge = class extends D {
      getFn(e, n, s) {
        let r = ge.clientAdapter[n] || n;
        return super.getFn(e, r, s);
      }
      setFn(e, n, s, r) {
        let o = ge.clientAdapter[n] || n;
        return super.setFn(e, o, s, r);
      }
      init() {
        try {
          (this.request = this.createProxy($request)),
            (this.response = this.createProxy($response));
        } catch (e) {
          this.debug(e.toString());
        }
      }
      getVal(e) {
        return $persistentStore.read(e);
      }
      setVal(e, n) {
        $persistentStore.write(e, n);
      }
      msg(e = this.name, n = "", s = "", r) {
        $notification.post(e, n, s, { url: r ?? "" });
      }
      async fetch(e) {
        return await new Promise((n, s) => {
          let { method: r, body: o, bodyBytes: i, ...a } = e,
            c = i ?? o,
            f = c instanceof Uint8Array;
          $httpClient[r.toLowerCase()](
            { ...a, body: c, "binary-mode": f },
            (m, l, g) => {
              m && s(m);
              let p = f ? "bodyBytes" : "body";
              n({
                status: l.status || l.statusCode,
                headers: l.headers,
                [p]: g,
              });
            },
          );
        });
      }
      done(e) {
        let n = e.response ?? e,
          s,
          r;
        n.bodyBytes
          ? ((s = n.bodyBytes),
            delete n.bodyBytes,
            (r = { ...e }),
            r.response ? (r.response.body = s) : (r.body = s))
          : (r = e),
          $done(r);
      }
    },
    le = ge;
  K(le, "clientAdapter", { bodyBytes: "body" });
  var v = class extends D {
      static transferBodyBytes(e, n) {
        return e instanceof ArrayBuffer
          ? n === "Uint8Array"
            ? new Uint8Array(e)
            : e
          : e instanceof Uint8Array && n === "ArrayBuffer"
          ? e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset)
          : e;
      }
      init() {
        try {
          (this.request = this.createProxy($request)),
            (this.response = this.createProxy($response));
        } catch (e) {
          this.debug(e.toString());
        }
      }
      getFn(e, n, s) {
        let r = v.clientAdapter[n] || n,
          o = super.getFn(e, r, s);
        return (
          n === "bodyBytes" && (o = v.transferBodyBytes(o, "Uint8Array")), o
        );
      }
      setFn(e, n, s, r) {
        let o = v.clientAdapter[n] || n,
          i = s;
        return (
          n === "bodyBytes" && (i = v.transferBodyBytes(i, "Uint8Array")),
          super.setFn(e, o, i, r)
        );
      }
      getVal(e) {
        return $prefs.valueForKey(e)?.replace(/\0/g, "");
      }
      setVal(e, n) {
        $prefs.setValueForKey(e, n);
      }
      msg(e = this.name, n = "", s = "", r) {
        $notify(e, n, s, { "open-url": r ?? "" });
      }
      async fetch(e) {
        return await new Promise((n) => {
          let s = { url: "", method: "GET" };
          for (let [r, o] of Object.entries(e))
            r === "id"
              ? (s.sessionIndex = o)
              : r === "bodyBytes"
              ? (s.bodyBytes = v.transferBodyBytes(o, "ArrayBuffer"))
              : (s[r] = o);
          e.bodyBytes && delete s.body,
            $task.fetch(s).then((r) => {
              let o = { status: 200, headers: {} };
              for (let [i, a] of Object.entries(r))
                i === "sessionIndex"
                  ? (o.id = a)
                  : i === "bodyBytes"
                  ? (o.bodyBytes = v.transferBodyBytes(a, "Uint8Array"))
                  : i === "statusCode"
                  ? (o.status = a)
                  : (o[i] = a);
              n(o);
            });
        });
      }
      done(e) {
        let n = e.response ?? e,
          s = {};
        for (let [r, o] of Object.entries(n))
          r === "status"
            ? (s.status = `HTTP/1.1 ${o}`)
            : r === "bodyBytes"
            ? (s.bodyBytes = v.transferBodyBytes(o, "ArrayBuffer"))
            : (s[r] = o);
        $done(s);
      }
    },
    pe = v;
  K(pe, "clientAdapter", { id: "sessionIndex", status: "statusCode" });
  var k = D.getInstance("YouTube");
  var V = class {
    name;
    needProcess;
    needSave;
    message;
    whiteNo;
    blackNo;
    whiteEml;
    blackEml;
    msgType;
    argument;
    decoder = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });
    constructor(e, n) {
      (this.name = n),
        (this.msgType = e),
        Object.assign(
          this,
          k.getJSON("YouTubeAdvertiseInfo", {
            whiteNo: [],
            blackNo: [],
            whiteEml: [],
            blackEml: [],
          }),
        ),
        (this.argument = this.decodeArgument()),
        (k.isDebug = Boolean(this.argument.debug)),
        k.debug(this.name);
    }
    decodeArgument() {
      let e = {
        lyricLang: "zh-Hans",
        captionLang: "zh-Hans",
        blockUpload: !0,
        immersive: !0,
        debug: !1,
      };
      return typeof $argument == "string" && !$argument.includes("{{{")
        ? JSON.parse($argument)
        : e;
    }
    fromBinary(e) {
      return e instanceof Uint8Array
        ? ((this.message = this.msgType.fromBinary(e)),
          k.debug(`raw: ${Math.floor(e.length / 1024)} kb`),
          this)
        : (k.log("YouTube can not get binaryBody"), k.exit(), this);
    }
    async modify() {
      let e = this.pure();
      return e instanceof Promise ? await e : e;
    }
    toBinary() {
      return this.message.toBinary();
    }
    listUnknownFields(e) {
      return e instanceof E ? e.getType().runtime.bin.listUnknownFields(e) : [];
    }
    save() {
      if (this.needSave) {
        k.debug("Update Config");
        let e = {
          whiteNo: this.whiteNo,
          blackNo: this.blackNo,
          whiteEml: this.whiteEml,
          blackEml: this.blackEml,
        };
        k.setJSON(e, "YouTubeAdvertiseInfo");
      }
    }
    done() {
      if ((this.save(), this.needProcess)) {
        k.timeStart("toBinary");
        let e = this.toBinary();
        k.timeEnd("toBinary"),
          k.debug(`modify: ${Math.floor(e.length / 1024)} kb`),
          k.done({ bodyBytes: e });
      }
      k.debug("use $done({})"), k.exit();
    }
    iterate(e = {}, n, s) {
      let r = typeof e == "object" ? [e] : [];
      for (; r.length; ) {
        let o = r.pop(),
          i = Object.keys(o);
        if (typeof n == "symbol") {
          for (let a of Object.getOwnPropertySymbols(o))
            if (a.description === n.description) {
              s(o, r);
              break;
            }
        }
        for (let a of i)
          a === n ? s(o, r) : typeof o[a] == "object" && r.push(o[a]);
      }
    }
    isAdvertise(e) {
      let n = this.listUnknownFields(e)[0];
      return n ? this.handleFieldNo(n) : this.handleFieldEml(e);
    }
    handleFieldNo(e) {
      let n = e.no;
      if (this.whiteNo.includes(n)) return !1;
      if (this.blackNo.includes(n)) return !0;
      let r = this.decoder.decode(e.data).includes("pagead");
      return (
        r ? this.blackNo.push(n) : this.whiteNo.push(n), (this.needSave = !0), r
      );
    }
    handleFieldEml(e) {
      let n = !1,
        s = "";
      return (
        this.iterate(e, "renderInfo", (r, o) => {
          if (
            ((s = r.renderInfo.layoutRender.eml.split("|")[0]),
            this.whiteEml.includes(s))
          )
            n = !1;
          else if (this.blackEml.includes(s) || /shorts(?!_pivot_item)/.test(s))
            n = !0;
          else {
            let i = r?.videoInfo?.videoContext?.videoContent;
            if (i) {
              let a = this.listUnknownFields(i)[0];
              (n = this.decoder.decode(a.data).includes("pagead")),
                n ? this.blackEml.push(s) : this.whiteEml.push(s),
                (this.needSave = !0);
            }
          }
          o.length = 0;
        }),
        n
      );
    }
    isShorts(e) {
      let n = !1;
      return (
        this.iterate(e, "eml", (s, r) => {
          (n = /shorts(?!_pivot_item)/.test(s.eml)), (r.length = 0);
        }),
        n
      );
    }
  };
  function nr(t) {
    let s = ".",
      r = "+-a^+6",
      o = "+-3^+b+-f",
      i,
      a,
      c;
    for (i = [], a = 0, c = 0; c < t.length; c++) {
      let f = t.charCodeAt(c);
      128 > f
        ? (i[a++] = f)
        : (2048 > f
            ? (i[a++] = (f >> 6) | 192)
            : ((f & 64512) == 55296 &&
              c + 1 < t.length &&
              (t.charCodeAt(c + 1) & 64512) == 56320
                ? ((f =
                    65536 + ((f & 1023) << 10) + (t.charCodeAt(++c) & 1023)),
                  (i[a++] = (f >> 18) | 240),
                  (i[a++] = ((f >> 12) & 63) | 128))
                : (i[a++] = (f >> 12) | 224),
              (i[a++] = ((f >> 6) & 63) | 128)),
          (i[a++] = (f & 63) | 128));
    }
    for (t = 406644, a = 0; a < i.length; a++) (t += i[a]), (t = Lt(t, r));
    return (
      (t = Lt(t, o)),
      (t ^= 3293161072),
      0 > t && (t = (t & 2147483647) + 2147483648),
      (t %= 1e6),
      t.toString() + s + (t ^ 406644)
    );
  }
  function Lt(t, e) {
    let n = "a",
      s = "+",
      r;
    for (let o = 0; o < e.length - 2; o += 3)
      (r = e.charAt(o + 2)),
        (r = r >= n ? r.charCodeAt(0) - 87 : Number(r)),
        (r = e.charAt(o + 1) == s ? t >>> r : t << r),
        (t = e.charAt(o) == s ? (t + r) & 4294967295 : t ^ r);
    return t;
  }
  function $t(t, e) {
    return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=${e}&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${nr(
      t,
    )}&q=${encodeURIComponent(t)}`;
  }
  var W = class extends V {
      constructor(e = Nt, n = "Browse") {
        super(e, n);
      }
      async pure() {
        return (
          this.iterate(this.message, "richGridContents", (e) => {
            for (let n = e.richGridContents.length - 1; n >= 0; n--)
              this.removeCommonAD(e, n), this.removeShorts(e, n);
          }),
          await this.translate(),
          this
        );
      }
      removeCommonAD(e, n) {
        let r = e.richGridContents[n]?.richItemRenderer?.richItemContent;
        for (let o = r?.length - 1; o >= 0; o--)
          this.isAdvertise(r[o]) && (r.splice(o, 1), (this.needProcess = !0));
      }
      removeShorts(e, n) {
        let s = e.richGridContents[n]?.richSectionRenderer;
        this.isShorts(s) &&
          (e.richGridContents.splice(n, 1), (this.needProcess = !0));
      }
      getBrowseId() {
        let e = "";
        return (
          this.iterate(this.message?.responseContext, "key", (n, s) => {
            n.key === "browse_id" && ((e = n.value), (s.length = 0));
          }),
          e
        );
      }
      async translate() {
        let e = this.argument.lyricLang?.trim();
        if (
          !(this.name === "Browse" && this.getBrowseId().startsWith("MPLYt")) ||
          e === "off"
        )
          return;
        let n = "",
          s,
          r = !1;
        if (
          (this.iterate(this.message, "timedLyricsContent", (c, f) => {
            (s = c.timedLyricsContent),
              (n = c.timedLyricsContent.runs.map((m) => m.text).join(`
`)),
              (r = !0),
              (f.length = 0);
          }),
          r ||
            this.iterate(this.message, "description", (c, f) => {
              (s = c.description.runs[0]),
                (n = c.description.runs[0].text),
                (f.length = 0),
                (r = !0);
            }),
          !r)
        )
          return;
        let o = e.split("-")[0],
          i = $t(n, e),
          a = await k.fetch({ method: "GET", url: i });
        if (a.status === 200 && a.body) {
          let c = JSON.parse(a.body),
            f = " & Translated by Google",
            m = c[2].includes(o);
          s.text
            ? ((s.text = c[0].map((l) => (m ? l[0] : l[1] + l[0] || ""))
                .join(`\r
`)),
              this.iterate(this.message, "footer", (l, g) => {
                (l.footer.runs[0].text += f), (g.length = 0);
              }))
            : s.runs.length <= c[0].length &&
              (s.runs.forEach((l, g) => {
                l.text = m
                  ? c[0][g][0]
                  : l.text +
                    `
${c[0][g][0]}`;
              }),
              (s.footerLabel += f)),
            (this.needProcess = !0);
        }
      }
    },
    he = class extends W {
      constructor(e = Rt, n = "Next") {
        super(e, n);
      }
      addTranslateTab() {
        this.iterate(this.message?.a1F7?.musicPlayRender, "items", (e, n) => {
          let s = e.items.find((r) =>
            r.tab.info?.browseInfo?.browseId.startsWith("MPLYt"),
          );
          s && (s.tab.name = s.tab.name + "\u21C4"),
            (this.needProcess = !0),
            (n.length = 0);
        });
      }
    },
    ye = class extends V {
      constructor(e = At, n = "Player") {
        super(e, n);
      }
      pure() {
        return (
          this.message.adPlacements?.length &&
            (this.message.adPlacements.length = 0),
          delete this.message.playbackTracking.pageadViewthroughconversion,
          this.addPlayAbility(),
          this.addTranslateCaption(),
          (this.needProcess = !0),
          this
        );
      }
      addPlayAbility() {
        let e = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
        typeof e == "object" && (e.active = !0),
          typeof this.message.playabilityStatus == "object" &&
            (this.message.playabilityStatus.backgroundPlayer = new ve({
              backgroundPlayerRender: { active: !0 },
            }));
      }
      addTranslateCaption() {
        let e = this.argument.captionLang;
        e !== "off" &&
          this.iterate(this.message, "captionTracks", (n, s) => {
            let r = n.captionTracks,
              o = n.audioTracks;
            if (Array.isArray(r)) {
              let a = { [e]: 2, en: 1 },
                c = -1,
                f = 0;
              for (let m = 0; m < r.length; m++) {
                let l = r[m],
                  g = a[l.languageCode];
                g && g > c && ((c = g), (f = m)), (l.isTranslatable = !0);
              }
              if (c !== 2) {
                let m = new De({
                  baseUrl: r[f].baseUrl + `&tlang=${e}`,
                  name: { runs: [{ text: `@Enhance (${e})` }] },
                  vssId: `.${e}`,
                  languageCode: e,
                });
                r.push(m);
              }
              if (Array.isArray(o)) {
                let m = c === 2 ? f : r.length - 1;
                for (let l of o)
                  l.captionTrackIndices?.includes(m) ||
                    l.captionTrackIndices.push(m),
                    (l.defaultCaptionTrackIndex = m),
                    (l.captionsInitialState = 3);
              }
            }
            let i = {
              de: "Deutsch",
              ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
              fr: "Fran\xE7ais",
              fil: "Filipino",
              ko: "\uD55C\uAD6D\uC5B4",
              ja: "\u65E5\u672C\u8A9E",
              en: "English",
              vi: "Ti\u1EBFng Vi\u1EC7t",
              "zh-Hant": "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09",
              "zh-Hans": "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09",
              und: "@VirgilClyne",
            };
            (n.translationLanguages = Object.entries(i).map(
              ([a, c]) =>
                new Le({
                  languageCode: a,
                  languageName: { runs: [{ text: c }] },
                }),
            )),
              (s.length = 0);
          });
      }
    },
    be = class extends W {
      constructor(e = Bt, n = "Search") {
        super(e, n);
      }
    },
    ke = class extends V {
      constructor(e = Ot, n = "Shorts") {
        super(e, n);
      }
      pure() {
        let e = this.message.entries?.length;
        if (e)
          for (let n = e - 1; n >= 0; n--)
            this.message.entries[n].command?.reelWatchEndpoint?.overlay ||
              (this.message.entries.splice(n, 1), (this.needProcess = !0));
        return this;
      }
    },
    Te = class extends V {
      constructor(e = Ut, n = "Guide") {
        super(e, n);
      }
      pure() {
        let e = ["SPunlimited"];
        return (
          this.argument.blockUpload && e.push("FEuploads"),
          this.argument.immersive && e.push("FEmusic_immersive"),
          this.iterate(this.message, "rendererItems", (n) => {
            for (let s = n.rendererItems.length - 1; s >= 0; s--) {
              let r =
                n.rendererItems[s]?.iconRender?.browseId ||
                n.rendererItems[s]?.labelRender?.browseId;
              e.includes(r) &&
                (n.rendererItems.splice(s, 1), (this.needProcess = !0));
            }
          }),
          this
        );
      }
    },
    we = class extends V {
      constructor(e = Dt, n = "Setting") {
        super(e, n);
      }
      pure() {
        this.iterate(this.message, "categoryId", (n) => {
          if (n.categoryId === 10005) {
            let s = {
                f1: 135,
                f2: 20434,
                f3: 2,
                timeInfo: this.message.trackingParams.timeInfo,
              },
              r = new Ve({
                settingBooleanRenderer: {
                  itemId: 0,
                  enableServiceEndpoint: {
                    trackingParams: s,
                    setClientSettingEndpoint: {
                      settingDatas: {
                        clientSettingEnum: { item: 151 },
                        boolValue: !0,
                      },
                    },
                  },
                  disableServiceEndpoint: {
                    trackingParams: s,
                    setClientSettingEndpoint: {
                      settingDatas: {
                        clientSettingEnum: { item: 151 },
                        boolValue: !1,
                      },
                    },
                  },
                  clickTrackingParams: s,
                },
              });
            n.subSettings.push(r);
          }
        });
        let e = new $e({
          settingCategoryEntryRenderer: {
            f2: 1,
            f3: 1,
            trackingParams: {
              f1: 2,
              f2: 20020,
              f3: 8,
              timeInfo: this.message.trackingParams.timeInfo,
            },
            f6: 0,
            f7: 1,
            f8: 1,
            f9: 1,
            f10: 1,
            f12: 1,
          },
        });
        return this.message.settingItems.push(e), (this.needProcess = !0), this;
      }
    };
  var rr = new Map([
    ["browse", W],
    ["next", he],
    ["player", ye],
    ["search", be],
    ["reel_watch_sequence", ke],
    ["guide", Te],
    ["get_setting", we],
  ]);
  function Je(t) {
    for (let [e, n] of rr.entries()) if (t.includes(e)) return new n();
    return null;
  }
  async function sr() {
    let t = Je(k.request.url);
    if (t) {
      let e = k.response.bodyBytes;
      k.timeStart("fromBinary"),
        t.fromBinary(e),
        k.timeEnd("fromBinary"),
        k.timeStart("modify"),
        await t.modify(),
        k.timeEnd("modify"),
        t.done();
    } else
      k.msg(
        "YouTube Enhance",
        "\u811A\u672C\u9700\u8981\u66F4\u65B0",
        "\u5916\u90E8\u8D44\u6E90 -> \u5168\u90E8\u66F4\u65B0",
      ),
        k.exit();
  }
  sr()
    .catch((t) => {
      k.log(t.toString());
    })
    .finally(() => {
      k.exit();
    });
})();
