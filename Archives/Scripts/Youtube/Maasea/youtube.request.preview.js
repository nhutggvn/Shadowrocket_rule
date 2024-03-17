// https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/dist/youtube.request.preview.js
// Build: 2024/2/27 19:14:32
(() => {
  var at = Object.defineProperty;
  var ct = (t, e, n) =>
    e in t
      ? at(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  var _ = (t, e, n) => (ct(t, typeof e != "symbol" ? e + "" : e, n), n);
  (function (t) {
    function e() {}
    function n() {}
    var s = String.fromCharCode,
      r = {}.toString,
      i = r.call(t.SharedArrayBuffer),
      o = r(),
      a = t.Uint8Array,
      c = a || Array,
      u = a ? ArrayBuffer : c,
      l =
        u.isView ||
        function (h) {
          return h && "length" in h;
        },
      m = r.call(u.prototype);
    u = n.prototype;
    var p = t.TextEncoder,
      d = new (a ? Uint16Array : c)(32);
    (e.prototype.decode = function (h) {
      if (!l(h)) {
        var B = r.call(h);
        if (B !== m && B !== i && B !== o)
          throw TypeError(
            "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'",
          );
        h = a ? new c(h) : h || [];
      }
      for (
        var N = (B = ""),
          g = 0,
          b = h.length | 0,
          G = (b - 32) | 0,
          k,
          w,
          E = 0,
          R = 0,
          O,
          S = 0,
          U = -1;
        g < b;

      ) {
        for (
          k = g <= G ? 32 : (b - g) | 0;
          S < k;
          g = (g + 1) | 0, S = (S + 1) | 0
        ) {
          switch (((w = h[g] & 255), w >> 4)) {
            case 15:
              if (((O = h[(g = (g + 1) | 0)] & 255), O >> 6 !== 2 || 247 < w)) {
                g = (g - 1) | 0;
                break;
              }
              (E = ((w & 7) << 6) | (O & 63)), (R = 5), (w = 256);
            case 14:
              (O = h[(g = (g + 1) | 0)] & 255),
                (E <<= 6),
                (E |= ((w & 15) << 6) | (O & 63)),
                (R = O >> 6 === 2 ? (R + 4) | 0 : 24),
                (w = (w + 256) & 768);
            case 13:
            case 12:
              (O = h[(g = (g + 1) | 0)] & 255),
                (E <<= 6),
                (E |= ((w & 31) << 6) | (O & 63)),
                (R = (R + 7) | 0),
                g < b && O >> 6 === 2 && E >> R && 1114112 > E
                  ? ((w = E),
                    (E = (E - 65536) | 0),
                    0 <= E &&
                      ((U = ((E >> 10) + 55296) | 0),
                      (w = ((E & 1023) + 56320) | 0),
                      31 > S
                        ? ((d[S] = U), (S = (S + 1) | 0), (U = -1))
                        : ((O = U), (U = w), (w = O))))
                  : ((w >>= 8), (g = (g - w - 1) | 0), (w = 65533)),
                (E = R = 0),
                (k = g <= G ? 32 : (b - g) | 0);
            default:
              d[S] = w;
              continue;
            case 11:
            case 10:
            case 9:
            case 8:
          }
          d[S] = 65533;
        }
        if (
          ((N += s(
            d[0],
            d[1],
            d[2],
            d[3],
            d[4],
            d[5],
            d[6],
            d[7],
            d[8],
            d[9],
            d[10],
            d[11],
            d[12],
            d[13],
            d[14],
            d[15],
            d[16],
            d[17],
            d[18],
            d[19],
            d[20],
            d[21],
            d[22],
            d[23],
            d[24],
            d[25],
            d[26],
            d[27],
            d[28],
            d[29],
            d[30],
            d[31],
          )),
          32 > S && (N = N.slice(0, (S - 32) | 0)),
          g < b)
        ) {
          if (((d[0] = U), (S = ~U >>> 31), (U = -1), N.length < B.length))
            continue;
        } else U !== -1 && (N += s(U));
        (B += N), (N = "");
      }
      return B;
    }),
      (u.encode = function (h) {
        h = h === void 0 ? "" : "" + h;
        var B = h.length | 0,
          N = new c(((B << 1) + 8) | 0),
          g,
          b = 0,
          G = !a;
        for (g = 0; g < B; g = (g + 1) | 0, b = (b + 1) | 0) {
          var k = h.charCodeAt(g) | 0;
          if (127 >= k) N[b] = k;
          else {
            if (2047 >= k) N[b] = 192 | (k >> 6);
            else {
              e: {
                if (55296 <= k)
                  if (56319 >= k) {
                    var w = h.charCodeAt((g = (g + 1) | 0)) | 0;
                    if (56320 <= w && 57343 >= w) {
                      if (((k = ((k << 10) + w - 56613888) | 0), 65535 < k)) {
                        (N[b] = 240 | (k >> 18)),
                          (N[(b = (b + 1) | 0)] = 128 | ((k >> 12) & 63)),
                          (N[(b = (b + 1) | 0)] = 128 | ((k >> 6) & 63)),
                          (N[(b = (b + 1) | 0)] = 128 | (k & 63));
                        continue;
                      }
                      break e;
                    }
                    k = 65533;
                  } else 57343 >= k && (k = 65533);
                !G &&
                  g << 1 < b &&
                  g << 1 < ((b - 7) | 0) &&
                  ((G = !0), (w = new c(3 * B)), w.set(N), (N = w));
              }
              (N[b] = 224 | (k >> 12)),
                (N[(b = (b + 1) | 0)] = 128 | ((k >> 6) & 63));
            }
            N[(b = (b + 1) | 0)] = 128 | (k & 63);
          }
        }
        return a ? N.subarray(0, b) : N.slice(0, b);
      }),
      p || ((t.TextDecoder = e), (t.TextEncoder = n));
  })(globalThis);
  function T(t, e) {
    if (!t) throw new Error(e);
  }
  var ft = 34028234663852886e22,
    ut = -34028234663852886e22,
    lt = 4294967295,
    dt = 2147483647,
    mt = -2147483648;
  function P(t) {
    if (typeof t != "number") throw new Error("invalid int 32: " + typeof t);
    if (!Number.isInteger(t) || t > dt || t < mt)
      throw new Error("invalid int 32: " + t);
  }
  function Y(t) {
    if (typeof t != "number") throw new Error("invalid uint 32: " + typeof t);
    if (!Number.isInteger(t) || t > lt || t < 0)
      throw new Error("invalid uint 32: " + t);
  }
  function z(t) {
    if (typeof t != "number") throw new Error("invalid float 32: " + typeof t);
    if (Number.isFinite(t) && (t > ft || t < ut))
      throw new Error("invalid float 32: " + t);
  }
  var Fe = Symbol("@bufbuild/protobuf/enum-type");
  function Ee(t) {
    let e = t[Fe];
    return T(e, "missing enum type on enum object"), e;
  }
  function me(t, e, n, s) {
    t[Fe] = pe(
      e,
      n.map((r) => ({ no: r.no, name: r.name, localName: t[r.no] })),
      s,
    );
  }
  function pe(t, e, n) {
    let s = Object.create(null),
      r = Object.create(null),
      i = [];
    for (let o of e) {
      let a = Se(o);
      i.push(a), (s[o.name] = a), (r[o.no] = a);
    }
    return {
      typeName: t,
      values: i,
      findName(o) {
        return s[o];
      },
      findNumber(o) {
        return r[o];
      },
    };
  }
  function Be(t, e, n) {
    let s = {};
    for (let r of e) {
      let i = Se(r);
      (s[i.localName] = i.no), (s[i.no] = i.localName);
    }
    return me(s, t, e, n), s;
  }
  function Se(t) {
    return "localName" in t
      ? t
      : Object.assign(Object.assign({}, t), { localName: t.name });
  }
  var F = class {
    equals(e) {
      return this.getType().runtime.util.equals(this.getType(), this, e);
    }
    clone() {
      return this.getType().runtime.util.clone(this);
    }
    fromBinary(e, n) {
      let s = this.getType(),
        r = s.runtime.bin,
        i = r.makeReadOptions(n);
      return r.readMessage(this, i.readerFactory(e), e.byteLength, i), this;
    }
    fromJson(e, n) {
      let s = this.getType(),
        r = s.runtime.json,
        i = r.makeReadOptions(n);
      return r.readMessage(s, e, i, this), this;
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
        i = r.writerFactory();
      return s.writeMessage(this, i, r), i.finish();
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
  function Oe(t, e, n, s) {
    var r;
    let i =
        (r = s?.localName) !== null && r !== void 0
          ? r
          : e.substring(e.lastIndexOf(".") + 1),
      o = {
        [i]: function (a) {
          t.util.initFields(this), t.util.initPartial(a, this);
        },
      }[i];
    return (
      Object.setPrototypeOf(o.prototype, new F()),
      Object.assign(o, {
        runtime: t,
        typeName: e,
        fields: t.util.newFieldList(n),
        fromBinary(a, c) {
          return new o().fromBinary(a, c);
        },
        fromJson(a, c) {
          return new o().fromJson(a, c);
        },
        fromJsonString(a, c) {
          return new o().fromJsonString(a, c);
        },
        equals(a, c) {
          return t.util.equals(o, a, c);
        },
      }),
      o
    );
  }
  var f;
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
  })(f || (f = {}));
  var A;
  (function (t) {
    (t[(t.BIGINT = 0)] = "BIGINT"), (t[(t.STRING = 1)] = "STRING");
  })(A || (A = {}));
  function Ae() {
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
  function H(t, e, n) {
    for (let i = 0; i < 28; i = i + 7) {
      let o = t >>> i,
        a = !(!(o >>> 7) && e == 0),
        c = (a ? o | 128 : o) & 255;
      if ((n.push(c), !a)) return;
    }
    let s = ((t >>> 28) & 15) | ((e & 7) << 4),
      r = !!(e >> 3);
    if ((n.push((r ? s | 128 : s) & 255), !!r)) {
      for (let i = 3; i < 31; i = i + 7) {
        let o = e >>> i,
          a = !!(o >>> 7),
          c = (a ? o | 128 : o) & 255;
        if ((n.push(c), !a)) return;
      }
      n.push((e >>> 31) & 1);
    }
  }
  var Q = 4294967296;
  function he(t) {
    let e = t[0] === "-";
    e && (t = t.slice(1));
    let n = 1e6,
      s = 0,
      r = 0;
    function i(o, a) {
      let c = Number(t.slice(o, a));
      (r *= n),
        (s = s * n + c),
        s >= Q && ((r = r + ((s / Q) | 0)), (s = s % Q));
    }
    return i(-24, -18), i(-18, -12), i(-12, -6), i(-6), e ? $e(s, r) : ye(s, r);
  }
  function De(t, e) {
    let n = ye(t, e),
      s = n.hi & 2147483648;
    s && (n = $e(n.lo, n.hi));
    let r = ge(n.lo, n.hi);
    return s ? "-" + r : r;
  }
  function ge(t, e) {
    if ((({ lo: t, hi: e } = pt(t, e)), e <= 2097151)) return String(Q * e + t);
    let n = t & 16777215,
      s = ((t >>> 24) | (e << 8)) & 16777215,
      r = (e >> 16) & 65535,
      i = n + s * 6777216 + r * 6710656,
      o = s + r * 8147497,
      a = r * 2,
      c = 1e7;
    return (
      i >= c && ((o += Math.floor(i / c)), (i %= c)),
      o >= c && ((a += Math.floor(o / c)), (o %= c)),
      a.toString() + Ue(o) + Ue(i)
    );
  }
  function pt(t, e) {
    return { lo: t >>> 0, hi: e >>> 0 };
  }
  function ye(t, e) {
    return { lo: t | 0, hi: e | 0 };
  }
  function $e(t, e) {
    return (e = ~e), t ? (t = ~t + 1) : (e += 1), ye(t, e);
  }
  var Ue = (t) => {
    let e = String(t);
    return "0000000".slice(e.length) + e;
  };
  function be(t, e) {
    if (t >= 0) {
      for (; t > 127; ) e.push((t & 127) | 128), (t = t >>> 7);
      e.push(t);
    } else {
      for (let n = 0; n < 9; n++) e.push((t & 127) | 128), (t = t >> 7);
      e.push(1);
    }
  }
  function Le() {
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
  function ht() {
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
        i = BigInt("9223372036854775807"),
        o = BigInt("0"),
        a = BigInt("18446744073709551615");
      return {
        zero: BigInt(0),
        supported: !0,
        parse(c) {
          let u = typeof c == "bigint" ? c : BigInt(c);
          if (u > i || u < r) throw new Error(`int64 invalid: ${c}`);
          return u;
        },
        uParse(c) {
          let u = typeof c == "bigint" ? c : BigInt(c);
          if (u > a || u < o) throw new Error(`uint64 invalid: ${c}`);
          return u;
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
        dec(c, u) {
          return (
            t.setInt32(0, c, !0), t.setInt32(4, u, !0), t.getBigInt64(0, !0)
          );
        },
        uDec(c, u) {
          return (
            t.setInt32(0, c, !0), t.setInt32(4, u, !0), t.getBigUint64(0, !0)
          );
        },
      };
    }
    let n = (r) => T(/^-?[0-9]+$/.test(r), `int64 invalid: ${r}`),
      s = (r) => T(/^[0-9]+$/.test(r), `uint64 invalid: ${r}`);
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
        return typeof r != "string" && (r = r.toString()), n(r), he(r);
      },
      uEnc(r) {
        return typeof r != "string" && (r = r.toString()), s(r), he(r);
      },
      dec(r, i) {
        return De(r, i);
      },
      uDec(r, i) {
        return ge(r, i);
      },
    };
  }
  var I = ht();
  var y;
  (function (t) {
    (t[(t.Varint = 0)] = "Varint"),
      (t[(t.Bit64 = 1)] = "Bit64"),
      (t[(t.LengthDelimited = 2)] = "LengthDelimited"),
      (t[(t.StartGroup = 3)] = "StartGroup"),
      (t[(t.EndGroup = 4)] = "EndGroup"),
      (t[(t.Bit32 = 5)] = "Bit32");
  })(y || (y = {}));
  var Z = class {
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
        for (Y(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
        return this.buf.push(e), this;
      }
      int32(e) {
        return P(e), be(e, this.buf), this;
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
        z(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n);
      }
      double(e) {
        let n = new Uint8Array(8);
        return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n);
      }
      fixed32(e) {
        Y(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n);
      }
      sfixed32(e) {
        P(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n);
      }
      sint32(e) {
        return P(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), be(e, this.buf), this;
      }
      sfixed64(e) {
        let n = new Uint8Array(8),
          s = new DataView(n.buffer),
          r = I.enc(e);
        return s.setInt32(0, r.lo, !0), s.setInt32(4, r.hi, !0), this.raw(n);
      }
      fixed64(e) {
        let n = new Uint8Array(8),
          s = new DataView(n.buffer),
          r = I.uEnc(e);
        return s.setInt32(0, r.lo, !0), s.setInt32(4, r.hi, !0), this.raw(n);
      }
      int64(e) {
        let n = I.enc(e);
        return H(n.lo, n.hi, this.buf), this;
      }
      sint64(e) {
        let n = I.enc(e),
          s = n.hi >> 31,
          r = (n.lo << 1) ^ s,
          i = ((n.hi << 1) | (n.lo >>> 31)) ^ s;
        return H(r, i, this.buf), this;
      }
      uint64(e) {
        let n = I.uEnc(e);
        return H(n.lo, n.hi, this.buf), this;
      }
    },
    ee = class {
      constructor(e, n) {
        (this.varint64 = Ae),
          (this.uint32 = Le),
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
          case y.Varint:
            for (; this.buf[this.pos++] & 128; );
            break;
          case y.Bit64:
            this.pos += 4;
          case y.Bit32:
            this.pos += 4;
            break;
          case y.LengthDelimited:
            let s = this.uint32();
            this.pos += s;
            break;
          case y.StartGroup:
            let r;
            for (; (r = this.tag()[1]) !== y.EndGroup; ) this.skip(r);
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
        return I.dec(...this.varint64());
      }
      uint64() {
        return I.uDec(...this.varint64());
      }
      sint64() {
        let [e, n] = this.varint64(),
          s = -(e & 1);
        return (
          (e = ((e >>> 1) | ((n & 1) << 31)) ^ s),
          (n = (n >>> 1) ^ s),
          I.dec(e, n)
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
        return I.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return I.dec(this.sfixed32(), this.sfixed32());
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
  function $(t, e, n) {
    if (e === n) return !0;
    if (t == f.BYTES) {
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
      case f.UINT64:
      case f.FIXED64:
      case f.INT64:
      case f.SFIXED64:
      case f.SINT64:
        return e == n;
    }
    return !1;
  }
  function J(t, e) {
    switch (t) {
      case f.BOOL:
        return !1;
      case f.UINT64:
      case f.FIXED64:
      case f.INT64:
      case f.SFIXED64:
      case f.SINT64:
        return e == 0 ? I.zero : "0";
      case f.DOUBLE:
      case f.FLOAT:
        return 0;
      case f.BYTES:
        return new Uint8Array(0);
      case f.STRING:
        return "";
      default:
        return 0;
    }
  }
  function we(t, e) {
    let n = e === void 0,
      s = y.Varint,
      r = e === 0;
    switch (t) {
      case f.STRING:
        (r = n || !e.length), (s = y.LengthDelimited);
        break;
      case f.BOOL:
        r = e === !1;
        break;
      case f.DOUBLE:
        s = y.Bit64;
        break;
      case f.FLOAT:
        s = y.Bit32;
        break;
      case f.INT64:
        r = n || e == 0;
        break;
      case f.UINT64:
        r = n || e == 0;
        break;
      case f.FIXED64:
        (r = n || e == 0), (s = y.Bit64);
        break;
      case f.BYTES:
        (r = n || !e.byteLength), (s = y.LengthDelimited);
        break;
      case f.FIXED32:
        s = y.Bit32;
        break;
      case f.SFIXED32:
        s = y.Bit32;
        break;
      case f.SFIXED64:
        (r = n || e == 0), (s = y.Bit64);
        break;
      case f.SINT64:
        r = n || e == 0;
        break;
    }
    let i = f[t].toLowerCase();
    return [s, i, n || r];
  }
  function ve(t, e, n, s) {
    let r;
    return {
      typeName: e,
      extendee: n,
      get field() {
        if (!r) {
          let i = typeof s == "function" ? s() : s;
          (i.name = e.split(".").pop()),
            (i.jsonName = `[${e}]`),
            (r = t.util.newFieldList([i]).list()[0]);
        }
        return r;
      },
      runtime: t,
    };
  }
  function te(t) {
    let e = t.field.localName,
      n = Object.create(null);
    return (n[e] = gt(t)), [n, () => n[e]];
  }
  function gt(t) {
    let e = t.field;
    if (e.repeated) return [];
    if (e.default !== void 0) return e.default;
    switch (e.kind) {
      case "enum":
        return e.T.values[0].no;
      case "scalar":
        return J(e.T, e.L);
      case "message":
        let n = e.T,
          s = new n();
        return n.fieldWrapper ? n.fieldWrapper.unwrapField(s) : s;
      case "map":
        throw "map fields are not allowed to be extensions";
    }
  }
  function Me(t, e) {
    if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
      for (let n = t.length - 1; n >= 0; --n)
        if (t[n].no == e.no) return [t[n]];
      return [];
    }
    return t.filter((n) => n.no === e.no);
  }
  function Re(t, e, n, s) {
    return {
      syntax: t,
      json: e,
      bin: n,
      util: s,
      makeMessageType(r, i, o) {
        return Oe(this, r, i, o);
      },
      makeEnum: Be,
      makeEnumType: pe,
      getEnumType: Ee,
      makeExtension(r, i, o) {
        return ve(this, r, i, o);
      },
    };
  }
  function ne(t, e) {
    return e instanceof F || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e);
  }
  var kn = {
    "google.protobuf.DoubleValue": f.DOUBLE,
    "google.protobuf.FloatValue": f.FLOAT,
    "google.protobuf.Int64Value": f.INT64,
    "google.protobuf.UInt64Value": f.UINT64,
    "google.protobuf.Int32Value": f.INT32,
    "google.protobuf.UInt32Value": f.UINT32,
    "google.protobuf.BoolValue": f.BOOL,
    "google.protobuf.StringValue": f.STRING,
    "google.protobuf.BytesValue": f.BYTES,
  };
  var C = Symbol("@bufbuild/protobuf/unknown-fields"),
    Je = { readUnknownFields: !0, readerFactory: (t) => new ee(t) },
    Pe = { writeUnknownFields: !0, writerFactory: () => new Z() };
  function yt(t) {
    return t ? Object.assign(Object.assign({}, Je), t) : Je;
  }
  function bt(t) {
    return t ? Object.assign(Object.assign({}, Pe), t) : Pe;
  }
  function Ve() {
    return {
      makeReadOptions: yt,
      makeWriteOptions: bt,
      listUnknownFields(t) {
        var e;
        return (e = t[C]) !== null && e !== void 0 ? e : [];
      },
      discardUnknownFields(t) {
        delete t[C];
      },
      writeUnknownFields(t, e) {
        let s = t[C];
        if (s) for (let r of s) e.tag(r.no, r.wireType).raw(r.data);
      },
      onUnknownField(t, e, n, s) {
        let r = t;
        Array.isArray(r[C]) || (r[C] = []),
          r[C].push({ no: e, wireType: n, data: s });
      },
      readMessage(t, e, n, s, r) {
        let i = t.getType(),
          o = r ? e.len : e.pos + n,
          a,
          c;
        for (; e.pos < o && (([a, c] = e.tag()), c != y.EndGroup); ) {
          let u = i.fields.find(a);
          if (!u) {
            let l = e.skip(c);
            s.readUnknownFields && this.onUnknownField(t, a, c, l);
            continue;
          }
          Ce(t, e, u, c, s);
        }
        if (r && (c != y.EndGroup || a !== n))
          throw new Error("invalid end group tag");
      },
      readField: Ce,
    };
  }
  function Ce(t, e, n, s, r) {
    let { repeated: i, localName: o } = n;
    switch (
      (n.oneof &&
        ((t = t[n.oneof.localName]),
        t.case != o && delete t.value,
        (t.case = o),
        (o = "value")),
      n.kind)
    ) {
      case "scalar":
      case "enum":
        let a = n.kind == "enum" ? f.INT32 : n.T,
          c = se;
        if ((n.kind == "scalar" && n.L > 0 && (c = kt), i)) {
          let p = t[o];
          if (s == y.LengthDelimited && a != f.STRING && a != f.BYTES) {
            let h = e.uint32() + e.pos;
            for (; e.pos < h; ) p.push(c(e, a));
          } else p.push(c(e, a));
        } else t[o] = c(e, a);
        break;
      case "message":
        let u = n.T;
        i
          ? t[o].push(re(e, new u(), r, n))
          : t[o] instanceof F
          ? re(e, t[o], r, n)
          : ((t[o] = re(e, new u(), r, n)),
            u.fieldWrapper &&
              !n.oneof &&
              !n.repeated &&
              (t[o] = u.fieldWrapper.unwrapField(t[o])));
        break;
      case "map":
        let [l, m] = wt(n, e, r);
        t[o][l] = m;
        break;
    }
  }
  function re(t, e, n, s) {
    let r = e.getType().runtime.bin,
      i = s?.delimited;
    return r.readMessage(e, t, i ? s?.no : t.uint32(), n, i), e;
  }
  function wt(t, e, n) {
    let s = e.uint32(),
      r = e.pos + s,
      i,
      o;
    for (; e.pos < r; ) {
      let [a] = e.tag();
      switch (a) {
        case 1:
          i = se(e, t.K);
          break;
        case 2:
          switch (t.V.kind) {
            case "scalar":
              o = se(e, t.V.T);
              break;
            case "enum":
              o = e.int32();
              break;
            case "message":
              o = re(e, new t.V.T(), n, void 0);
              break;
          }
          break;
      }
    }
    if (i === void 0) {
      let a = J(t.K, A.BIGINT);
      i = t.K == f.BOOL ? a.toString() : a;
    }
    if (
      (typeof i != "string" && typeof i != "number" && (i = i.toString()),
      o === void 0)
    )
      switch (t.V.kind) {
        case "scalar":
          o = J(t.V.T, A.BIGINT);
          break;
        case "enum":
          o = 0;
          break;
        case "message":
          o = new t.V.T();
          break;
      }
    return [i, o];
  }
  function kt(t, e) {
    let n = se(t, e);
    return typeof n == "bigint" ? n.toString() : n;
  }
  function se(t, e) {
    switch (e) {
      case f.STRING:
        return t.string();
      case f.BOOL:
        return t.bool();
      case f.DOUBLE:
        return t.double();
      case f.FLOAT:
        return t.float();
      case f.INT32:
        return t.int32();
      case f.INT64:
        return t.int64();
      case f.UINT64:
        return t.uint64();
      case f.FIXED64:
        return t.fixed64();
      case f.BYTES:
        return t.bytes();
      case f.FIXED32:
        return t.fixed32();
      case f.SFIXED32:
        return t.sfixed32();
      case f.SFIXED64:
        return t.sfixed64();
      case f.SINT64:
        return t.sint64();
      case f.UINT32:
        return t.uint32();
      case f.SINT32:
        return t.sint32();
    }
  }
  function qe(t, e, n, s, r) {
    t.tag(n.no, y.LengthDelimited), t.fork();
    let i = s;
    switch (n.K) {
      case f.INT32:
      case f.FIXED32:
      case f.UINT32:
      case f.SFIXED32:
      case f.SINT32:
        i = Number.parseInt(s);
        break;
      case f.BOOL:
        T(s == "true" || s == "false"), (i = s == "true");
        break;
    }
    switch ((V(t, n.K, 1, i, !0), n.V.kind)) {
      case "scalar":
        V(t, n.V.T, 2, r, !0);
        break;
      case "enum":
        V(t, f.INT32, 2, r, !0);
        break;
      case "message":
        t.tag(2, y.LengthDelimited).bytes(r.toBinary(e));
        break;
    }
    t.join();
  }
  function ke(t, e, n, s) {
    let r = ne(n.T, s);
    n?.delimited
      ? t.tag(n.no, y.StartGroup).raw(r.toBinary(e)).tag(n.no, y.EndGroup)
      : t.tag(n.no, y.LengthDelimited).bytes(r.toBinary(e));
  }
  function V(t, e, n, s, r) {
    let [i, o, a] = we(e, s);
    (!a || r) && t.tag(n, i)[o](s);
  }
  function Xe(t, e, n, s) {
    if (!s.length) return;
    t.tag(n, y.LengthDelimited).fork();
    let [, r] = we(e);
    for (let i = 0; i < s.length; i++) t[r](s[i]);
    t.join();
  }
  function _e() {
    return Object.assign(Object.assign({}, Ve()), {
      writeField: Ge,
      writeMessage(t, e, n) {
        let s = t.getType();
        for (let r of s.fields.byNumber()) {
          let i,
            o = r.localName;
          if (r.oneof) {
            let a = t[r.oneof.localName];
            if (a.case !== o) continue;
            i = a.value;
          } else i = t[o];
          Ge(r, i, e, n);
        }
        return n.writeUnknownFields && this.writeUnknownFields(t, e), e;
      },
    });
  }
  function Ge(t, e, n, s) {
    let r = t.repeated;
    switch (t.kind) {
      case "scalar":
      case "enum":
        let i = t.kind == "enum" ? f.INT32 : t.T;
        if (r)
          if (t.packed) Xe(n, i, t.no, e);
          else for (let o of e) V(n, i, t.no, o, !0);
        else e !== void 0 && V(n, i, t.no, e, !!t.oneof || t.opt);
        break;
      case "message":
        if (r) for (let o of e) ke(n, s, t, o);
        else e !== void 0 && ke(n, s, t, e);
        break;
      case "map":
        for (let [o, a] of Object.entries(e)) qe(n, s, t, o, a);
        break;
    }
  }
  var L =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        "",
      ),
    ie = [];
  for (let t = 0; t < L.length; t++) ie[L[t].charCodeAt(0)] = t;
  ie["-".charCodeAt(0)] = L.indexOf("+");
  ie["_".charCodeAt(0)] = L.indexOf("/");
  var Te = {
    dec(t) {
      let e = (t.length * 3) / 4;
      t[t.length - 2] == "=" ? (e -= 2) : t[t.length - 1] == "=" && (e -= 1);
      let n = new Uint8Array(e),
        s = 0,
        r = 0,
        i,
        o = 0;
      for (let a = 0; a < t.length; a++) {
        if (((i = ie[t.charCodeAt(a)]), i === void 0))
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
            (o = i), (r = 1);
            break;
          case 1:
            (n[s++] = (o << 2) | ((i & 48) >> 4)), (o = i), (r = 2);
            break;
          case 2:
            (n[s++] = ((o & 15) << 4) | ((i & 60) >> 2)), (o = i), (r = 3);
            break;
          case 3:
            (n[s++] = ((o & 3) << 6) | i), (r = 0);
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
      for (let i = 0; i < t.length; i++)
        switch (((s = t[i]), n)) {
          case 0:
            (e += L[s >> 2]), (r = (s & 3) << 4), (n = 1);
            break;
          case 1:
            (e += L[r | (s >> 4)]), (r = (s & 15) << 2), (n = 2);
            break;
          case 2:
            (e += L[r | (s >> 6)]), (e += L[s & 63]), (n = 0);
            break;
        }
      return n && ((e += L[r]), (e += "="), n == 1 && (e += "=")), e;
    },
  };
  function Ye(t, e, n) {
    We(e, t);
    let s = e.runtime.bin.makeReadOptions(n),
      r = Me(t.getType().runtime.bin.listUnknownFields(t), e.field),
      [i, o] = te(e);
    for (let a of r)
      e.runtime.bin.readField(
        i,
        s.readerFactory(a.data),
        e.field,
        a.wireType,
        s,
      );
    return o();
  }
  function je(t, e, n, s) {
    We(e, t);
    let r = e.runtime.bin.makeReadOptions(s),
      i = e.runtime.bin.makeWriteOptions(s);
    if (Ne(t, e)) {
      let u = t
        .getType()
        .runtime.bin.listUnknownFields(t)
        .filter((l) => l.no != e.field.no);
      t.getType().runtime.bin.discardUnknownFields(t);
      for (let l of u)
        t.getType().runtime.bin.onUnknownField(t, l.no, l.wireType, l.data);
    }
    let o = i.writerFactory(),
      a = e.field;
    !a.opt &&
      !a.repeated &&
      (a.kind == "enum" || a.kind == "scalar") &&
      (a = Object.assign(Object.assign({}, e.field), { opt: !0 })),
      e.runtime.bin.writeField(a, n, o, i);
    let c = r.readerFactory(o.finish());
    for (; c.pos < c.len; ) {
      let [u, l] = c.tag(),
        m = c.skip(l);
      t.getType().runtime.bin.onUnknownField(t, u, l, m);
    }
  }
  function Ne(t, e) {
    let n = t.getType();
    return (
      e.extendee.typeName === n.typeName &&
      !!n.runtime.bin.listUnknownFields(t).find((s) => s.no == e.field.no)
    );
  }
  function We(t, e) {
    T(
      t.extendee.typeName == e.getType().typeName,
      `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`,
    );
  }
  var Ke = { ignoreUnknownFields: !1 },
    ze = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0,
    };
  function Tt(t) {
    return t ? Object.assign(Object.assign({}, Ke), t) : Ke;
  }
  function Nt(t) {
    return t ? Object.assign(Object.assign({}, ze), t) : ze;
  }
  function Ze(t, e) {
    let n = e(xt, He);
    return {
      makeReadOptions: Tt,
      makeWriteOptions: Nt,
      readMessage(s, r, i, o) {
        if (r == null || Array.isArray(r) || typeof r != "object")
          throw new Error(
            `cannot decode message ${s.typeName} from JSON: ${D(r)}`,
          );
        o = o ?? new s();
        let a = new Map(),
          c = i.typeRegistry;
        for (let [u, l] of Object.entries(r)) {
          let m = s.fields.findJsonName(u);
          if (m) {
            if (m.oneof) {
              if (l === null && m.kind == "scalar") continue;
              let p = a.get(m.oneof);
              if (p !== void 0)
                throw new Error(
                  `cannot decode message ${s.typeName} from JSON: multiple keys for oneof "${m.oneof.name}" present: "${p}", "${u}"`,
                );
              a.set(m.oneof, u);
            }
            Qe(o, l, m, i, s, t);
          } else {
            let p = !1;
            if (c?.findExtension && u.startsWith("[") && u.endsWith("]")) {
              let d = c.findExtension(u.substring(1, u.length - 1));
              if (d && d.extendee.typeName == s.typeName) {
                p = !0;
                let [h, B] = te(d);
                Qe(h, l, d.field, i, d, !0), je(o, d, B(), i);
              }
            }
            if (!p && !i.ignoreUnknownFields)
              throw new Error(
                `cannot decode message ${s.typeName} from JSON: key "${u}" is unknown`,
              );
          }
        }
        return o;
      },
      writeMessage(s, r) {
        let i = s.getType(),
          o = {},
          a;
        try {
          for (let u of i.fields.byMember()) {
            let l;
            if (u.kind == "oneof") {
              let m = s[u.localName];
              if (m.value === void 0) continue;
              if (((a = u.findField(m.case)), !a))
                throw "oneof case not found: " + m.case;
              l = n(a, m.value, r);
            } else (a = u), (l = n(a, s[a.localName], r));
            l !== void 0 && (o[r.useProtoFieldName ? a.name : a.jsonName] = l);
          }
          let c = r.typeRegistry;
          if (c?.findExtensionFor)
            for (let u of i.runtime.bin.listUnknownFields(s)) {
              let l = c.findExtensionFor(i.typeName, u.no);
              if (l && Ne(s, l)) {
                let m = Ye(s, l, r),
                  p = n(l.field, m, r);
                p !== void 0 && (o[l.field.jsonName] = p);
              }
            }
        } catch (c) {
          let u = a
              ? `cannot encode field ${i.typeName}.${a.name} to JSON`
              : `cannot encode message ${i.typeName} to JSON`,
            l = c instanceof Error ? c.message : String(c);
          throw new Error(u + (l.length > 0 ? `: ${l}` : ""));
        }
        return o;
      },
      readScalar: (s, r, i) => j(s, r, i, t),
      writeScalar: He,
      debug: D,
    };
  }
  function D(t) {
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
  function Qe(t, e, n, s, r, i) {
    let o = n.localName;
    if (n.oneof) {
      if (e === null && n.kind == "scalar") return;
      (t = t[n.oneof.localName] = { case: o }), (o = "value");
    }
    if (n.repeated) {
      if (e === null) return;
      if (!Array.isArray(e))
        throw new Error(
          `cannot decode field ${r.typeName}.${n.name} from JSON: ${D(e)}`,
        );
      let a = t[o];
      for (let c of e) {
        if (c === null)
          throw new Error(
            `cannot decode field ${r.typeName}.${n.name} from JSON: ${D(c)}`,
          );
        let u;
        switch (n.kind) {
          case "message":
            u = n.T.fromJson(c, s);
            break;
          case "enum":
            if (((u = xe(n.T, c, s.ignoreUnknownFields, !0)), u === void 0))
              continue;
            break;
          case "scalar":
            try {
              u = j(n.T, c, n.L, !0);
            } catch (l) {
              let m = `cannot decode field ${r.typeName}.${
                n.name
              } from JSON: ${D(c)}`;
              throw (
                (l instanceof Error &&
                  l.message.length > 0 &&
                  (m += `: ${l.message}`),
                new Error(m))
              );
            }
            break;
        }
        a.push(u);
      }
    } else if (n.kind == "map") {
      if (e === null) return;
      if (typeof e != "object" || Array.isArray(e))
        throw new Error(
          `cannot decode field ${r.typeName}.${n.name} from JSON: ${D(e)}`,
        );
      let a = t[o];
      for (let [c, u] of Object.entries(e)) {
        if (u === null)
          throw new Error(
            `cannot decode field ${r.typeName}.${n.name} from JSON: map value null`,
          );
        let l;
        switch (n.V.kind) {
          case "message":
            l = n.V.T.fromJson(u, s);
            break;
          case "enum":
            if (((l = xe(n.V.T, u, s.ignoreUnknownFields, !0)), l === void 0))
              continue;
            break;
          case "scalar":
            try {
              l = j(n.V.T, u, A.BIGINT, !0);
            } catch (m) {
              let p = `cannot decode map value for field ${r.typeName}.${
                n.name
              } from JSON: ${D(e)}`;
              throw (
                (m instanceof Error &&
                  m.message.length > 0 &&
                  (p += `: ${m.message}`),
                new Error(p))
              );
            }
            break;
        }
        try {
          a[
            j(
              n.K,
              n.K == f.BOOL ? (c == "true" ? !0 : c == "false" ? !1 : c) : c,
              A.BIGINT,
              !0,
            ).toString()
          ] = l;
        } catch (m) {
          let p = `cannot decode map key for field ${r.typeName}.${
            n.name
          } from JSON: ${D(e)}`;
          throw (
            (m instanceof Error &&
              m.message.length > 0 &&
              (p += `: ${m.message}`),
            new Error(p))
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
          t[o] instanceof F
            ? t[o].fromJson(e, s)
            : ((t[o] = a.fromJson(e, s)),
              a.fieldWrapper &&
                !n.oneof &&
                (t[o] = a.fieldWrapper.unwrapField(t[o])));
          break;
        case "enum":
          let c = xe(n.T, e, s.ignoreUnknownFields, i);
          c !== void 0 && (t[o] = c);
          break;
        case "scalar":
          try {
            t[o] = j(n.T, e, n.L, i);
          } catch (u) {
            let l = `cannot decode field ${r.typeName}.${n.name} from JSON: ${D(
              e,
            )}`;
            throw (
              (u instanceof Error &&
                u.message.length > 0 &&
                (l += `: ${u.message}`),
              new Error(l))
            );
          }
          break;
      }
  }
  function j(t, e, n, s) {
    switch (t) {
      case f.DOUBLE:
      case f.FLOAT:
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
        return t == f.FLOAT && z(r), r;
      case f.INT32:
      case f.FIXED32:
      case f.SFIXED32:
      case f.SINT32:
      case f.UINT32:
        if (e === null) return s ? 0 : void 0;
        let i;
        if (
          (typeof e == "number"
            ? (i = e)
            : typeof e == "string" &&
              e.length > 0 &&
              e.trim().length === e.length &&
              (i = Number(e)),
          i === void 0)
        )
          break;
        return t == f.UINT32 ? Y(i) : P(i), i;
      case f.INT64:
      case f.SFIXED64:
      case f.SINT64:
        if (e === null) return s ? I.zero : void 0;
        if (typeof e != "number" && typeof e != "string") break;
        let o = I.parse(e);
        return n ? o.toString() : o;
      case f.FIXED64:
      case f.UINT64:
        if (e === null) return s ? I.zero : void 0;
        if (typeof e != "number" && typeof e != "string") break;
        let a = I.uParse(e);
        return n ? a.toString() : a;
      case f.BOOL:
        if (e === null) return s ? !1 : void 0;
        if (typeof e != "boolean") break;
        return e;
      case f.STRING:
        if (e === null) return s ? "" : void 0;
        if (typeof e != "string") break;
        try {
          encodeURIComponent(e);
        } catch {
          throw new Error("invalid UTF8");
        }
        return e;
      case f.BYTES:
        if (e === null) return s ? new Uint8Array(0) : void 0;
        if (e === "") return new Uint8Array(0);
        if (typeof e != "string") break;
        return Te.dec(e);
    }
    throw new Error();
  }
  function xe(t, e, n, s) {
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
    throw new Error(`cannot decode enum ${t.typeName} from JSON: ${D(e)}`);
  }
  function xt(t, e, n, s) {
    var r;
    if (e === void 0) return e;
    if (!n && t.values[0].no === e) return;
    if (s) return e;
    if (t.typeName == "google.protobuf.NullValue") return null;
    let i = t.findNumber(e);
    return (r = i?.name) !== null && r !== void 0 ? r : e;
  }
  function He(t, e, n) {
    if (e !== void 0)
      switch (t) {
        case f.INT32:
        case f.SFIXED32:
        case f.SINT32:
        case f.FIXED32:
        case f.UINT32:
          return T(typeof e == "number"), e != 0 || n ? e : void 0;
        case f.FLOAT:
        case f.DOUBLE:
          return (
            T(typeof e == "number"),
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
        case f.STRING:
          return T(typeof e == "string"), e.length > 0 || n ? e : void 0;
        case f.BOOL:
          return T(typeof e == "boolean"), e || n ? e : void 0;
        case f.UINT64:
        case f.FIXED64:
        case f.INT64:
        case f.SFIXED64:
        case f.SINT64:
          return (
            T(
              typeof e == "bigint" ||
                typeof e == "string" ||
                typeof e == "number",
            ),
            n || e != 0 ? e.toString(10) : void 0
          );
        case f.BYTES:
          return (
            T(e instanceof Uint8Array),
            n || e.byteLength > 0 ? Te.enc(e) : void 0
          );
      }
  }
  function et() {
    return Ze(
      !0,
      (t, e) =>
        function (s, r, i) {
          if (s.kind == "map") {
            let o = {};
            switch (s.V.kind) {
              case "scalar":
                for (let [c, u] of Object.entries(r)) {
                  let l = e(s.V.T, u, !0);
                  T(l !== void 0), (o[c.toString()] = l);
                }
                break;
              case "message":
                for (let [c, u] of Object.entries(r))
                  o[c.toString()] = u.toJson(i);
                break;
              case "enum":
                let a = s.V.T;
                for (let [c, u] of Object.entries(r)) {
                  T(u === void 0 || typeof u == "number");
                  let l = t(a, u, !0, i.enumAsInteger);
                  T(l !== void 0), (o[c.toString()] = l);
                }
                break;
            }
            return i.emitDefaultValues || Object.keys(o).length > 0
              ? o
              : void 0;
          } else if (s.repeated) {
            let o = [];
            switch (s.kind) {
              case "scalar":
                for (let a = 0; a < r.length; a++) o.push(e(s.T, r[a], !0));
                break;
              case "enum":
                for (let a = 0; a < r.length; a++)
                  o.push(t(s.T, r[a], !0, i.enumAsInteger));
                break;
              case "message":
                for (let a = 0; a < r.length; a++) o.push(r[a].toJson(i));
                break;
            }
            return i.emitDefaultValues || o.length > 0 ? o : void 0;
          } else {
            if (r === void 0) return;
            switch (s.kind) {
              case "scalar":
                return e(s.T, r, !!s.oneof || s.opt || i.emitDefaultValues);
              case "enum":
                return t(
                  s.T,
                  r,
                  !!s.oneof || s.opt || i.emitDefaultValues,
                  i.enumAsInteger,
                );
              case "message":
                return ne(s.T, r).toJson(i);
            }
          }
        },
    );
  }
  function tt() {
    return {
      setEnumType: me,
      initPartial(t, e) {
        if (t === void 0) return;
        let n = e.getType();
        for (let s of n.fields.byMember()) {
          let r = s.localName,
            i = e,
            o = t;
          if (o[r] !== void 0)
            switch (s.kind) {
              case "oneof":
                let a = o[r].case;
                if (a === void 0) continue;
                let c = s.findField(a),
                  u = o[r].value;
                c && c.kind == "message" && !(u instanceof c.T)
                  ? (u = new c.T(u))
                  : c && c.kind === "scalar" && c.T === f.BYTES && (u = W(u)),
                  (i[r] = { case: a, value: u });
                break;
              case "scalar":
              case "enum":
                let l = o[r];
                s.T === f.BYTES && (l = s.repeated ? l.map(W) : W(l)),
                  (i[r] = l);
                break;
              case "map":
                switch (s.V.kind) {
                  case "scalar":
                  case "enum":
                    if (s.V.T === f.BYTES)
                      for (let [d, h] of Object.entries(o[r])) i[r][d] = W(h);
                    else Object.assign(i[r], o[r]);
                    break;
                  case "message":
                    let p = s.V.T;
                    for (let d of Object.keys(o[r])) {
                      let h = o[r][d];
                      p.fieldWrapper || (h = new p(h)), (i[r][d] = h);
                    }
                    break;
                }
                break;
              case "message":
                let m = s.T;
                if (s.repeated)
                  i[r] = o[r].map((p) => (p instanceof m ? p : new m(p)));
                else if (o[r] !== void 0) {
                  let p = o[r];
                  m.fieldWrapper
                    ? m.typeName === "google.protobuf.BytesValue"
                      ? (i[r] = W(p))
                      : (i[r] = p)
                    : (i[r] = p instanceof m ? p : new m(p));
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
                i = n[s.localName];
              if (s.repeated) {
                if (r.length !== i.length) return !1;
                switch (s.kind) {
                  case "message":
                    return r.every((o, a) => s.T.equals(o, i[a]));
                  case "scalar":
                    return r.every((o, a) => $(s.T, o, i[a]));
                  case "enum":
                    return r.every((o, a) => $(f.INT32, o, i[a]));
                }
                throw new Error(`repeated cannot contain ${s.kind}`);
              }
              switch (s.kind) {
                case "message":
                  return s.T.equals(r, i);
                case "enum":
                  return $(f.INT32, r, i);
                case "scalar":
                  return $(s.T, r, i);
                case "oneof":
                  if (r.case !== i.case) return !1;
                  let o = s.findField(r.case);
                  if (o === void 0) return !0;
                  switch (o.kind) {
                    case "message":
                      return o.T.equals(r.value, i.value);
                    case "enum":
                      return $(f.INT32, r.value, i.value);
                    case "scalar":
                      return $(o.T, r.value, i.value);
                  }
                  throw new Error(`oneof cannot contain ${o.kind}`);
                case "map":
                  let a = Object.keys(r).concat(Object.keys(i));
                  switch (s.V.kind) {
                    case "message":
                      let c = s.V.T;
                      return a.every((l) => c.equals(r[l], i[l]));
                    case "enum":
                      return a.every((l) => $(f.INT32, r[l], i[l]));
                    case "scalar":
                      let u = s.V.T;
                      return a.every((l) => $(u, r[l], i[l]));
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
          let i = t[r.localName],
            o;
          if (r.repeated) o = i.map(oe);
          else if (r.kind == "map") {
            o = s[r.localName];
            for (let [a, c] of Object.entries(i)) o[a] = oe(c);
          } else
            r.kind == "oneof"
              ? (o = r.findField(i.case)
                  ? { case: i.case, value: oe(i.value) }
                  : { case: void 0 })
              : (o = oe(i));
          s[r.localName] = o;
        }
        return n;
      },
    };
  }
  function oe(t) {
    if (t === void 0) return t;
    if (t instanceof F) return t.clone();
    if (t instanceof Uint8Array) {
      let e = new Uint8Array(t.byteLength);
      return e.set(t), e;
    }
    return t;
  }
  function W(t) {
    return t instanceof Uint8Array ? t : new Uint8Array(t);
  }
  var ae = class {
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
  function Ie(t, e) {
    let n = st(t);
    return e ? n : Bt(Et(n));
  }
  function nt(t) {
    return Ie(t, !1);
  }
  var rt = st;
  function st(t) {
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
  var It = new Set(["constructor", "toString", "toJSON", "valueOf"]),
    Ft = new Set([
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
    it = (t) => `${t}$`,
    Et = (t) => (Ft.has(t) ? it(t) : t),
    Bt = (t) => (It.has(t) ? it(t) : t);
  var ce = class {
    constructor(e) {
      (this.kind = "oneof"),
        (this.repeated = !1),
        (this.packed = !1),
        (this.opt = !1),
        (this.default = void 0),
        (this.fields = []),
        (this.name = e),
        (this.localName = nt(e));
    }
    addField(e) {
      T(e.oneof === this, `field ${e.name} not one of ${this.name}`),
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
  var q = Re(
    "proto3",
    et(),
    _e(),
    Object.assign(Object.assign({}, tt()), {
      newFieldList(t) {
        return new ae(t, St);
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
              s[n] = J(e.T, e.L);
              break;
            case "message":
              break;
          }
        }
      },
    }),
  );
  function St(t) {
    var e, n, s, r;
    let i = [],
      o;
    for (let a of typeof t == "function" ? t() : t) {
      let c = a;
      if (
        ((c.localName = Ie(a.name, a.oneof !== void 0)),
        (c.jsonName =
          (e = a.jsonName) !== null && e !== void 0 ? e : rt(a.name)),
        (c.repeated = (n = a.repeated) !== null && n !== void 0 ? n : !1),
        a.kind == "scalar" &&
          (c.L = (s = a.L) !== null && s !== void 0 ? s : A.BIGINT),
        a.oneof !== void 0)
      ) {
        let u = typeof a.oneof == "string" ? a.oneof : a.oneof.name;
        (!o || o.name != u) && (o = new ce(u)), (c.oneof = o), o.addField(c);
      }
      a.kind == "message" && (c.delimited = !1),
        (c.packed =
          (r = a.packed) !== null && r !== void 0
            ? r
            : a.kind == "enum" ||
              (a.kind == "scalar" && a.T != f.BYTES && a.T != f.STRING)),
        i.push(c);
    }
    return i;
  }
  var ot = q.makeMessageType("youtube.request.common.Request", () => [
      { no: 1, name: "context", kind: "message", T: Ot },
      { no: 2, name: "browseId", kind: "scalar", T: 9 },
    ]),
    Ot = q.makeMessageType("youtube.request.common.Context", () => [
      { no: 9, name: "adSignalsInfo", kind: "message", T: Ut },
    ]),
    Ut = q.makeMessageType("youtube.request.common.AdSignalsInfo", () => [
      { no: 1, name: "params", kind: "message", T: At, repeated: !0 },
    ]),
    At = q.makeMessageType("youtube.request.common.Params", () => [
      { no: 1, name: "key", kind: "scalar", T: 9 },
      { no: 2, name: "value", kind: "scalar", T: 9 },
    ]);
  var X = class {
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
          X.instances[s] || (X.instances[s] = X.classNames[s](e, s, n)),
          X.instances[s]
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
    M = X;
  _(M, "instances", {}),
    _(M, "classNames", {
      QuanX: (e, n, s) => new ue(e, n, s),
      Surge: (e, n, s) => new fe(e, n, s),
    });
  var le = class extends M {
      getFn(e, n, s) {
        let r = le.clientAdapter[n] || n;
        return super.getFn(e, r, s);
      }
      setFn(e, n, s, r) {
        let i = le.clientAdapter[n] || n;
        return super.setFn(e, i, s, r);
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
          let { method: r, body: i, bodyBytes: o, ...a } = e,
            c = o ?? i,
            u = c instanceof Uint8Array;
          $httpClient[r.toLowerCase()](
            { ...a, body: c, "binary-mode": u },
            (l, m, p) => {
              l && s(l);
              let d = u ? "bodyBytes" : "body";
              n({
                status: m.status || m.statusCode,
                headers: m.headers,
                [d]: p,
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
    fe = le;
  _(fe, "clientAdapter", { bodyBytes: "body" });
  var v = class extends M {
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
          i = super.getFn(e, r, s);
        return (
          n === "bodyBytes" && (i = v.transferBodyBytes(i, "Uint8Array")), i
        );
      }
      setFn(e, n, s, r) {
        let i = v.clientAdapter[n] || n,
          o = s;
        return (
          n === "bodyBytes" && (o = v.transferBodyBytes(o, "Uint8Array")),
          super.setFn(e, i, o, r)
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
          for (let [r, i] of Object.entries(e))
            r === "id"
              ? (s.sessionIndex = i)
              : r === "bodyBytes"
              ? (s.bodyBytes = v.transferBodyBytes(i, "ArrayBuffer"))
              : (s[r] = i);
          e.bodyBytes && delete s.body,
            $task.fetch(s).then((r) => {
              let i = { status: 200, headers: {} };
              for (let [o, a] of Object.entries(r))
                o === "sessionIndex"
                  ? (i.id = a)
                  : o === "bodyBytes"
                  ? (i.bodyBytes = v.transferBodyBytes(a, "Uint8Array"))
                  : o === "statusCode"
                  ? (i.status = a)
                  : (i[o] = a);
              n(i);
            });
        });
      }
      done(e) {
        let n = e.response ?? e,
          s = {};
        for (let [r, i] of Object.entries(n))
          r === "status"
            ? (s.status = `HTTP/1.1 ${i}`)
            : r === "bodyBytes"
            ? (s.bodyBytes = v.transferBodyBytes(i, "ArrayBuffer"))
            : (s[r] = i);
        $done(s);
      }
    },
    ue = v;
  _(ue, "clientAdapter", { id: "sessionIndex", status: "statusCode" });
  var x = M.getInstance("YouTube");
  var de = class {
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
          x.getJSON("YouTubeAdvertiseInfo", {
            whiteNo: [],
            blackNo: [],
            whiteEml: [],
            blackEml: [],
          }),
        ),
        (this.argument = this.decodeArgument()),
        (x.isDebug = Boolean(this.argument.debug)),
        x.debug(this.name);
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
          x.debug(`raw: ${Math.floor(e.length / 1024)} kb`),
          this)
        : (x.log("YouTube can not get binaryBody"), x.exit(), this);
    }
    async modify() {
      let e = this.pure();
      return e instanceof Promise ? await e : e;
    }
    toBinary() {
      return this.message.toBinary();
    }
    listUnknownFields(e) {
      return e instanceof F ? e.getType().runtime.bin.listUnknownFields(e) : [];
    }
    save() {
      if (this.needSave) {
        x.debug("Update Config");
        let e = {
          whiteNo: this.whiteNo,
          blackNo: this.blackNo,
          whiteEml: this.whiteEml,
          blackEml: this.blackEml,
        };
        x.setJSON(e, "YouTubeAdvertiseInfo");
      }
    }
    done() {
      if ((this.save(), this.needProcess)) {
        x.timeStart("toBinary");
        let e = this.toBinary();
        x.timeEnd("toBinary"),
          x.debug(`modify: ${Math.floor(e.length / 1024)} kb`),
          x.done({ bodyBytes: e });
      }
      x.debug("use $done({})"), x.exit();
    }
    iterate(e = {}, n, s) {
      let r = typeof e == "object" ? [e] : [];
      for (; r.length; ) {
        let i = r.pop(),
          o = Object.keys(i);
        if (typeof n == "symbol") {
          for (let a of Object.getOwnPropertySymbols(i))
            if (a.description === n.description) {
              s(i, r);
              break;
            }
        }
        for (let a of o)
          a === n ? s(i, r) : typeof i[a] == "object" && r.push(i[a]);
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
        this.iterate(e, "renderInfo", (r, i) => {
          if (
            ((s = r.renderInfo.layoutRender.eml.split("|")[0]),
            this.whiteEml.includes(s))
          )
            n = !1;
          else if (this.blackEml.includes(s) || /shorts(?!_pivot_item)/.test(s))
            n = !0;
          else {
            let o = r?.videoInfo?.videoContext?.videoContent;
            if (o) {
              let a = this.listUnknownFields(o)[0];
              (n = this.decoder.decode(a.data).includes("pagead")),
                n ? this.blackEml.push(s) : this.whiteEml.push(s),
                (this.needSave = !0);
            }
          }
          i.length = 0;
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
  var K = class extends de {
    constructor(e = ot, n = "Request") {
      super(e, n);
    }
    pure() {
      return (
        (this.message.context.adSignalsInfo.params.length = 0),
        (this.needProcess = !0),
        this
      );
    }
  };
  async function Dt() {
    let t = new K();
    await t.fromBinary(x.request.bodyBytes).pure(), t.done();
  }
  Dt()
    .catch((t) => {
      x.log(t.toString());
    })
    .finally(() => {
      x.exit();
    });
})();
