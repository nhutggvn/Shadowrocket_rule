// Author: Maasea Build: 2024/2/12 11:12:14
(() => {
  (function (t) {
    function e() {}
    function n() {}
    var r = String.fromCharCode,
      s = {}.toString,
      o = s.call(t.SharedArrayBuffer),
      i = s(),
      a = t.Uint8Array,
      c = a || Array,
      f = a ? ArrayBuffer : c,
      d =
        f.isView ||
        function (y) {
          return y && "length" in y;
        },
      p = s.call(f.prototype);
    f = n.prototype;
    var g = t.TextEncoder,
      l = new (a ? Uint16Array : c)(32);
    (e.prototype.decode = function (y) {
      if (!d(y)) {
        var E = s.call(y);
        if (E !== p && E !== o && E !== i)
          throw TypeError(
            "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'",
          );
        y = a ? new c(y) : y || [];
      }
      for (
        var F = (E = ""),
          h = 0,
          b = y.length | 0,
          W = (b - 32) | 0,
          w,
          T,
          S = 0,
          J = 0,
          O,
          B = 0,
          A = -1;
        h < b;

      ) {
        for (
          w = h <= W ? 32 : (b - h) | 0;
          B < w;
          h = (h + 1) | 0, B = (B + 1) | 0
        ) {
          switch (((T = y[h] & 255), T >> 4)) {
            case 15:
              if (((O = y[(h = (h + 1) | 0)] & 255), O >> 6 !== 2 || 247 < T)) {
                h = (h - 1) | 0;
                break;
              }
              (S = ((T & 7) << 6) | (O & 63)), (J = 5), (T = 256);
            case 14:
              (O = y[(h = (h + 1) | 0)] & 255),
                (S <<= 6),
                (S |= ((T & 15) << 6) | (O & 63)),
                (J = O >> 6 === 2 ? (J + 4) | 0 : 24),
                (T = (T + 256) & 768);
            case 13:
            case 12:
              (O = y[(h = (h + 1) | 0)] & 255),
                (S <<= 6),
                (S |= ((T & 31) << 6) | (O & 63)),
                (J = (J + 7) | 0),
                h < b && O >> 6 === 2 && S >> J && 1114112 > S
                  ? ((T = S),
                    (S = (S - 65536) | 0),
                    0 <= S &&
                      ((A = ((S >> 10) + 55296) | 0),
                      (T = ((S & 1023) + 56320) | 0),
                      31 > B
                        ? ((l[B] = A), (B = (B + 1) | 0), (A = -1))
                        : ((O = A), (A = T), (T = O))))
                  : ((T >>= 8), (h = (h - T - 1) | 0), (T = 65533)),
                (S = J = 0),
                (w = h <= W ? 32 : (b - h) | 0);
            default:
              l[B] = T;
              continue;
            case 11:
            case 10:
            case 9:
            case 8:
          }
          l[B] = 65533;
        }
        if (
          ((F += r(
            l[0],
            l[1],
            l[2],
            l[3],
            l[4],
            l[5],
            l[6],
            l[7],
            l[8],
            l[9],
            l[10],
            l[11],
            l[12],
            l[13],
            l[14],
            l[15],
            l[16],
            l[17],
            l[18],
            l[19],
            l[20],
            l[21],
            l[22],
            l[23],
            l[24],
            l[25],
            l[26],
            l[27],
            l[28],
            l[29],
            l[30],
            l[31],
          )),
          32 > B && (F = F.slice(0, (B - 32) | 0)),
          h < b)
        ) {
          if (((l[0] = A), (B = ~A >>> 31), (A = -1), F.length < E.length))
            continue;
        } else A !== -1 && (F += r(A));
        (E += F), (F = "");
      }
      return E;
    }),
      (f.encode = function (y) {
        y = y === void 0 ? "" : "" + y;
        var E = y.length | 0,
          F = new c(((E << 1) + 8) | 0),
          h,
          b = 0,
          W = !a;
        for (h = 0; h < E; h = (h + 1) | 0, b = (b + 1) | 0) {
          var w = y.charCodeAt(h) | 0;
          if (127 >= w) F[b] = w;
          else {
            if (2047 >= w) F[b] = 192 | (w >> 6);
            else {
              e: {
                if (55296 <= w)
                  if (56319 >= w) {
                    var T = y.charCodeAt((h = (h + 1) | 0)) | 0;
                    if (56320 <= T && 57343 >= T) {
                      if (((w = ((w << 10) + T - 56613888) | 0), 65535 < w)) {
                        (F[b] = 240 | (w >> 18)),
                          (F[(b = (b + 1) | 0)] = 128 | ((w >> 12) & 63)),
                          (F[(b = (b + 1) | 0)] = 128 | ((w >> 6) & 63)),
                          (F[(b = (b + 1) | 0)] = 128 | (w & 63));
                        continue;
                      }
                      break e;
                    }
                    w = 65533;
                  } else 57343 >= w && (w = 65533);
                !W &&
                  h << 1 < b &&
                  h << 1 < ((b - 7) | 0) &&
                  ((W = !0), (T = new c(3 * E)), T.set(F), (F = T));
              }
              (F[b] = 224 | (w >> 12)),
                (F[(b = (b + 1) | 0)] = 128 | ((w >> 6) & 63));
            }
            F[(b = (b + 1) | 0)] = 128 | (w & 63);
          }
        }
        return a ? F.subarray(0, b) : F.slice(0, b);
      }),
      g || ((t.TextDecoder = e), (t.TextEncoder = n));
  })(globalThis);
  function x(t, e) {
    if (!t) throw new Error(e);
  }
  var Lt = 34028234663852886e22,
    $t = -34028234663852886e22,
    Jt = 4294967295,
    Vt = 2147483647,
    Gt = -2147483648;
  function G(t) {
    if (typeof t != "number") throw new Error("invalid int 32: " + typeof t);
    if (!Number.isInteger(t) || t > Vt || t < Gt)
      throw new Error("invalid int 32: " + t);
  }
  function j(t) {
    if (typeof t != "number") throw new Error("invalid uint 32: " + typeof t);
    if (!Number.isInteger(t) || t > Jt || t < 0)
      throw new Error("invalid uint 32: " + t);
  }
  function Q(t) {
    if (typeof t != "number") throw new Error("invalid float 32: " + typeof t);
    if (Number.isFinite(t) && (t > Lt || t < $t))
      throw new Error("invalid float 32: " + t);
  }
  var Le = Symbol("@bufbuild/protobuf/enum-type");
  function $e(t) {
    let e = t[Le];
    return x(e, "missing enum type on enum object"), e;
  }
  function Te(t, e, n, r) {
    t[Le] = we(
      e,
      n.map((s) => ({ no: s.no, name: s.name, localName: t[s.no] })),
      r,
    );
  }
  function we(t, e, n) {
    let r = Object.create(null),
      s = Object.create(null),
      o = [];
    for (let i of e) {
      let a = Ve(i);
      o.push(a), (r[i.name] = a), (s[i.no] = a);
    }
    return {
      typeName: t,
      values: o,
      findName(i) {
        return r[i];
      },
      findNumber(i) {
        return s[i];
      },
    };
  }
  function Je(t, e, n) {
    let r = {};
    for (let s of e) {
      let o = Ve(s);
      (r[o.localName] = o.no), (r[o.no] = o.localName);
    }
    return Te(r, t, e, n), r;
  }
  function Ve(t) {
    return "localName" in t
      ? t
      : Object.assign(Object.assign({}, t), { localName: t.name });
  }
  var M = class {
    equals(e) {
      return this.getType().runtime.util.equals(this.getType(), this, e);
    }
    clone() {
      return this.getType().runtime.util.clone(this);
    }
    fromBinary(e, n) {
      let r = this.getType(),
        s = r.runtime.bin,
        o = s.makeReadOptions(n);
      return s.readMessage(this, o.readerFactory(e), e.byteLength, o), this;
    }
    fromJson(e, n) {
      let r = this.getType(),
        s = r.runtime.json,
        o = s.makeReadOptions(n);
      return s.readMessage(r, e, o, this), this;
    }
    fromJsonString(e, n) {
      let r;
      try {
        r = JSON.parse(e);
      } catch (s) {
        throw new Error(
          `cannot decode ${this.getType().typeName} from JSON: ${
            s instanceof Error ? s.message : String(s)
          }`,
        );
      }
      return this.fromJson(r, n);
    }
    toBinary(e) {
      let n = this.getType(),
        r = n.runtime.bin,
        s = r.makeWriteOptions(e),
        o = s.writerFactory();
      return r.writeMessage(this, o, s), o.finish();
    }
    toJson(e) {
      let n = this.getType(),
        r = n.runtime.json,
        s = r.makeWriteOptions(e);
      return r.writeMessage(this, s);
    }
    toJsonString(e) {
      var n;
      let r = this.toJson(e);
      return JSON.stringify(
        r,
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
  function Ge(t, e, n, r) {
    var s;
    let o =
        (s = r?.localName) !== null && s !== void 0
          ? s
          : e.substring(e.lastIndexOf(".") + 1),
      i = {
        [o]: function (a) {
          t.util.initFields(this), t.util.initPartial(a, this);
        },
      }[o];
    return (
      Object.setPrototypeOf(i.prototype, new M()),
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
  var U;
  (function (t) {
    (t[(t.BIGINT = 0)] = "BIGINT"), (t[(t.STRING = 1)] = "STRING");
  })(U || (U = {}));
  function _e() {
    let t = 0,
      e = 0;
    for (let r = 0; r < 28; r += 7) {
      let s = this.buf[this.pos++];
      if (((t |= (s & 127) << r), !(s & 128)))
        return this.assertBounds(), [t, e];
    }
    let n = this.buf[this.pos++];
    if (((t |= (n & 15) << 28), (e = (n & 112) >> 4), !(n & 128)))
      return this.assertBounds(), [t, e];
    for (let r = 3; r <= 31; r += 7) {
      let s = this.buf[this.pos++];
      if (((e |= (s & 127) << r), !(s & 128)))
        return this.assertBounds(), [t, e];
    }
    throw new Error("invalid varint");
  }
  function Z(t, e, n) {
    for (let o = 0; o < 28; o = o + 7) {
      let i = t >>> o,
        a = !(!(i >>> 7) && e == 0),
        c = (a ? i | 128 : i) & 255;
      if ((n.push(c), !a)) return;
    }
    let r = ((t >>> 28) & 15) | ((e & 7) << 4),
      s = !!(e >> 3);
    if ((n.push((s ? r | 128 : r) & 255), !!s)) {
      for (let o = 3; o < 31; o = o + 7) {
        let i = e >>> o,
          a = !!(i >>> 7),
          c = (a ? i | 128 : i) & 255;
        if ((n.push(c), !a)) return;
      }
      n.push((e >>> 31) & 1);
    }
  }
  var H = 4294967296;
  function xe(t) {
    let e = t[0] === "-";
    e && (t = t.slice(1));
    let n = 1e6,
      r = 0,
      s = 0;
    function o(i, a) {
      let c = Number(t.slice(i, a));
      (s *= n),
        (r = r * n + c),
        r >= H && ((s = s + ((r / H) | 0)), (r = r % H));
    }
    return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), e ? Ye(r, s) : Ie(r, s);
  }
  function Xe(t, e) {
    let n = Ie(t, e),
      r = n.hi & 2147483648;
    r && (n = Ye(n.lo, n.hi));
    let s = Fe(n.lo, n.hi);
    return r ? "-" + s : s;
  }
  function Fe(t, e) {
    if ((({ lo: t, hi: e } = qt(t, e)), e <= 2097151)) return String(H * e + t);
    let n = t & 16777215,
      r = ((t >>> 24) | (e << 8)) & 16777215,
      s = (e >> 16) & 65535,
      o = n + r * 6777216 + s * 6710656,
      i = r + s * 8147497,
      a = s * 2,
      c = 1e7;
    return (
      o >= c && ((i += Math.floor(o / c)), (o %= c)),
      i >= c && ((a += Math.floor(i / c)), (i %= c)),
      a.toString() + qe(i) + qe(o)
    );
  }
  function qt(t, e) {
    return { lo: t >>> 0, hi: e >>> 0 };
  }
  function Ie(t, e) {
    return { lo: t | 0, hi: e | 0 };
  }
  function Ye(t, e) {
    return (e = ~e), t ? (t = ~t + 1) : (e += 1), Ie(t, e);
  }
  var qe = (t) => {
    let e = String(t);
    return "0000000".slice(e.length) + e;
  };
  function Ne(t, e) {
    if (t >= 0) {
      for (; t > 127; ) e.push((t & 127) | 128), (t = t >>> 7);
      e.push(t);
    } else {
      for (let n = 0; n < 9; n++) e.push((t & 127) | 128), (t = t >> 7);
      e.push(1);
    }
  }
  function We() {
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
  function _t() {
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
      let s = BigInt("-9223372036854775808"),
        o = BigInt("9223372036854775807"),
        i = BigInt("0"),
        a = BigInt("18446744073709551615");
      return {
        zero: BigInt(0),
        supported: !0,
        parse(c) {
          let f = typeof c == "bigint" ? c : BigInt(c);
          if (f > o || f < s) throw new Error(`int64 invalid: ${c}`);
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
    let n = (s) => x(/^-?[0-9]+$/.test(s), `int64 invalid: ${s}`),
      r = (s) => x(/^[0-9]+$/.test(s), `uint64 invalid: ${s}`);
    return {
      zero: "0",
      supported: !1,
      parse(s) {
        return typeof s != "string" && (s = s.toString()), n(s), s;
      },
      uParse(s) {
        return typeof s != "string" && (s = s.toString()), r(s), s;
      },
      enc(s) {
        return typeof s != "string" && (s = s.toString()), n(s), xe(s);
      },
      uEnc(s) {
        return typeof s != "string" && (s = s.toString()), r(s), xe(s);
      },
      dec(s, o) {
        return Xe(s, o);
      },
      uDec(s, o) {
        return Fe(s, o);
      },
    };
  }
  var I = _t();
  var k;
  (function (t) {
    (t[(t.Varint = 0)] = "Varint"),
      (t[(t.Bit64 = 1)] = "Bit64"),
      (t[(t.LengthDelimited = 2)] = "LengthDelimited"),
      (t[(t.StartGroup = 3)] = "StartGroup"),
      (t[(t.EndGroup = 4)] = "EndGroup"),
      (t[(t.Bit32 = 5)] = "Bit32");
  })(k || (k = {}));
  var ee = class {
      constructor(e) {
        (this.stack = []),
          (this.textEncoder = e ?? new TextEncoder()),
          (this.chunks = []),
          (this.buf = []);
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for (let s = 0; s < this.chunks.length; s++) e += this.chunks[s].length;
        let n = new Uint8Array(e),
          r = 0;
        for (let s = 0; s < this.chunks.length; s++)
          n.set(this.chunks[s], r), (r += this.chunks[s].length);
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
        for (j(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
        return this.buf.push(e), this;
      }
      int32(e) {
        return G(e), Ne(e, this.buf), this;
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
        Q(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n);
      }
      double(e) {
        let n = new Uint8Array(8);
        return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n);
      }
      fixed32(e) {
        j(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n);
      }
      sfixed32(e) {
        G(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n);
      }
      sint32(e) {
        return G(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), Ne(e, this.buf), this;
      }
      sfixed64(e) {
        let n = new Uint8Array(8),
          r = new DataView(n.buffer),
          s = I.enc(e);
        return r.setInt32(0, s.lo, !0), r.setInt32(4, s.hi, !0), this.raw(n);
      }
      fixed64(e) {
        let n = new Uint8Array(8),
          r = new DataView(n.buffer),
          s = I.uEnc(e);
        return r.setInt32(0, s.lo, !0), r.setInt32(4, s.hi, !0), this.raw(n);
      }
      int64(e) {
        let n = I.enc(e);
        return Z(n.lo, n.hi, this.buf), this;
      }
      sint64(e) {
        let n = I.enc(e),
          r = n.hi >> 31,
          s = (n.lo << 1) ^ r,
          o = ((n.hi << 1) | (n.lo >>> 31)) ^ r;
        return Z(s, o, this.buf), this;
      }
      uint64(e) {
        let n = I.uEnc(e);
        return Z(n.lo, n.hi, this.buf), this;
      }
    },
    te = class {
      constructor(e, n) {
        (this.varint64 = _e),
          (this.uint32 = We),
          (this.buf = e),
          (this.len = e.length),
          (this.pos = 0),
          (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (this.textDecoder = n ?? new TextDecoder());
      }
      tag() {
        let e = this.uint32(),
          n = e >>> 3,
          r = e & 7;
        if (n <= 0 || r < 0 || r > 5)
          throw new Error("illegal tag: field no " + n + " wire type " + r);
        return [n, r];
      }
      skip(e) {
        let n = this.pos;
        switch (e) {
          case k.Varint:
            for (; this.buf[this.pos++] & 128; );
            break;
          case k.Bit64:
            this.pos += 4;
          case k.Bit32:
            this.pos += 4;
            break;
          case k.LengthDelimited:
            let r = this.uint32();
            this.pos += r;
            break;
          case k.StartGroup:
            let s;
            for (; (s = this.tag()[1]) !== k.EndGroup; ) this.skip(s);
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
          r = -(e & 1);
        return (
          (e = ((e >>> 1) | ((n & 1) << 31)) ^ r),
          (n = (n >>> 1) ^ r),
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
  function R(t, e, n) {
    if (e === n) return !0;
    if (t == u.BYTES) {
      if (
        !(e instanceof Uint8Array) ||
        !(n instanceof Uint8Array) ||
        e.length !== n.length
      )
        return !1;
      for (let r = 0; r < e.length; r++) if (e[r] !== n[r]) return !1;
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
  function V(t, e) {
    switch (t) {
      case u.BOOL:
        return !1;
      case u.UINT64:
      case u.FIXED64:
      case u.INT64:
      case u.SFIXED64:
      case u.SINT64:
        return e == 0 ? I.zero : "0";
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
  function Se(t, e) {
    let n = e === void 0,
      r = k.Varint,
      s = e === 0;
    switch (t) {
      case u.STRING:
        (s = n || !e.length), (r = k.LengthDelimited);
        break;
      case u.BOOL:
        s = e === !1;
        break;
      case u.DOUBLE:
        r = k.Bit64;
        break;
      case u.FLOAT:
        r = k.Bit32;
        break;
      case u.INT64:
        s = n || e == 0;
        break;
      case u.UINT64:
        s = n || e == 0;
        break;
      case u.FIXED64:
        (s = n || e == 0), (r = k.Bit64);
        break;
      case u.BYTES:
        (s = n || !e.byteLength), (r = k.LengthDelimited);
        break;
      case u.FIXED32:
        r = k.Bit32;
        break;
      case u.SFIXED32:
        r = k.Bit32;
        break;
      case u.SFIXED64:
        (s = n || e == 0), (r = k.Bit64);
        break;
      case u.SINT64:
        s = n || e == 0;
        break;
    }
    let o = u[t].toLowerCase();
    return [r, o, n || s];
  }
  function je(t, e, n, r) {
    let s;
    return {
      typeName: e,
      extendee: n,
      get field() {
        if (!s) {
          let o = typeof r == "function" ? r() : r;
          (o.name = e.split(".").pop()),
            (o.jsonName = `[${e}]`),
            (s = t.util.newFieldList([o]).list()[0]);
        }
        return s;
      },
      runtime: t,
    };
  }
  function ne(t) {
    let e = t.field.localName,
      n = Object.create(null);
    return (n[e] = Xt(t)), [n, () => n[e]];
  }
  function Xt(t) {
    let e = t.field;
    if (e.repeated) return [];
    if (e.default !== void 0) return e.default;
    switch (e.kind) {
      case "enum":
        return e.T.values[0].no;
      case "scalar":
        return V(e.T, e.L);
      case "message":
        let n = e.T,
          r = new n();
        return n.fieldWrapper ? n.fieldWrapper.unwrapField(r) : r;
      case "map":
        throw "map fields are not allowed to be extensions";
    }
  }
  function Ke(t, e) {
    if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
      for (let n = t.length - 1; n >= 0; --n)
        if (t[n].no == e.no) return [t[n]];
      return [];
    }
    return t.filter((n) => n.no === e.no);
  }
  function ze(t, e, n, r) {
    return {
      syntax: t,
      json: e,
      bin: n,
      util: r,
      makeMessageType(s, o, i) {
        return Ge(this, s, o, i);
      },
      makeEnum: Je,
      makeEnumType: we,
      getEnumType: $e,
      makeExtension(s, o, i) {
        return je(this, s, o, i);
      },
    };
  }
  function se(t, e) {
    return e instanceof M || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e);
  }
  var rr = {
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
    Qe = { readUnknownFields: !0, readerFactory: (t) => new te(t) },
    He = { writeUnknownFields: !0, writerFactory: () => new ee() };
  function Yt(t) {
    return t ? Object.assign(Object.assign({}, Qe), t) : Qe;
  }
  function Wt(t) {
    return t ? Object.assign(Object.assign({}, He), t) : He;
  }
  function et() {
    return {
      makeReadOptions: Yt,
      makeWriteOptions: Wt,
      listUnknownFields(t) {
        var e;
        return (e = t[q]) !== null && e !== void 0 ? e : [];
      },
      discardUnknownFields(t) {
        delete t[q];
      },
      writeUnknownFields(t, e) {
        let r = t[q];
        if (r) for (let s of r) e.tag(s.no, s.wireType).raw(s.data);
      },
      onUnknownField(t, e, n, r) {
        let s = t;
        Array.isArray(s[q]) || (s[q] = []),
          s[q].push({ no: e, wireType: n, data: r });
      },
      readMessage(t, e, n, r, s) {
        let o = t.getType(),
          i = s ? e.len : e.pos + n,
          a,
          c;
        for (; e.pos < i && (([a, c] = e.tag()), c != k.EndGroup); ) {
          let f = o.fields.find(a);
          if (!f) {
            let d = e.skip(c);
            r.readUnknownFields && this.onUnknownField(t, a, c, d);
            continue;
          }
          Ze(t, e, f, c, r);
        }
        if (s && (c != k.EndGroup || a !== n))
          throw new Error("invalid end group tag");
      },
      readField: Ze,
    };
  }
  function Ze(t, e, n, r, s) {
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
          c = oe;
        if ((n.kind == "scalar" && n.L > 0 && (c = Kt), o)) {
          let g = t[i];
          if (r == k.LengthDelimited && a != u.STRING && a != u.BYTES) {
            let y = e.uint32() + e.pos;
            for (; e.pos < y; ) g.push(c(e, a));
          } else g.push(c(e, a));
        } else t[i] = c(e, a);
        break;
      case "message":
        let f = n.T;
        o
          ? t[i].push(re(e, new f(), s, n))
          : t[i] instanceof M
          ? re(e, t[i], s, n)
          : ((t[i] = re(e, new f(), s, n)),
            f.fieldWrapper &&
              !n.oneof &&
              !n.repeated &&
              (t[i] = f.fieldWrapper.unwrapField(t[i])));
        break;
      case "map":
        let [d, p] = jt(n, e, s);
        t[i][d] = p;
        break;
    }
  }
  function re(t, e, n, r) {
    let s = e.getType().runtime.bin,
      o = r?.delimited;
    return s.readMessage(e, t, o ? r?.no : t.uint32(), n, o), e;
  }
  function jt(t, e, n) {
    let r = e.uint32(),
      s = e.pos + r,
      o,
      i;
    for (; e.pos < s; ) {
      let [a] = e.tag();
      switch (a) {
        case 1:
          o = oe(e, t.K);
          break;
        case 2:
          switch (t.V.kind) {
            case "scalar":
              i = oe(e, t.V.T);
              break;
            case "enum":
              i = e.int32();
              break;
            case "message":
              i = re(e, new t.V.T(), n, void 0);
              break;
          }
          break;
      }
    }
    if (o === void 0) {
      let a = V(t.K, U.BIGINT);
      o = t.K == u.BOOL ? a.toString() : a;
    }
    if (
      (typeof o != "string" && typeof o != "number" && (o = o.toString()),
      i === void 0)
    )
      switch (t.V.kind) {
        case "scalar":
          i = V(t.V.T, U.BIGINT);
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
  function Kt(t, e) {
    let n = oe(t, e);
    return typeof n == "bigint" ? n.toString() : n;
  }
  function oe(t, e) {
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
  function tt(t, e, n, r, s) {
    t.tag(n.no, k.LengthDelimited), t.fork();
    let o = r;
    switch (n.K) {
      case u.INT32:
      case u.FIXED32:
      case u.UINT32:
      case u.SFIXED32:
      case u.SINT32:
        o = Number.parseInt(r);
        break;
      case u.BOOL:
        x(r == "true" || r == "false"), (o = r == "true");
        break;
    }
    switch ((_(t, n.K, 1, o, !0), n.V.kind)) {
      case "scalar":
        _(t, n.V.T, 2, s, !0);
        break;
      case "enum":
        _(t, u.INT32, 2, s, !0);
        break;
      case "message":
        t.tag(2, k.LengthDelimited).bytes(s.toBinary(e));
        break;
    }
    t.join();
  }
  function Ee(t, e, n, r) {
    let s = se(n.T, r);
    n?.delimited
      ? t.tag(n.no, k.StartGroup).raw(s.toBinary(e)).tag(n.no, k.EndGroup)
      : t.tag(n.no, k.LengthDelimited).bytes(s.toBinary(e));
  }
  function _(t, e, n, r, s) {
    let [o, i, a] = Se(e, r);
    (!a || s) && t.tag(n, o)[i](r);
  }
  function nt(t, e, n, r) {
    if (!r.length) return;
    t.tag(n, k.LengthDelimited).fork();
    let [, s] = Se(e);
    for (let o = 0; o < r.length; o++) t[s](r[o]);
    t.join();
  }
  function rt() {
    return Object.assign(Object.assign({}, et()), {
      writeField: st,
      writeMessage(t, e, n) {
        let r = t.getType();
        for (let s of r.fields.byNumber()) {
          let o,
            i = s.localName;
          if (s.oneof) {
            let a = t[s.oneof.localName];
            if (a.case !== i) continue;
            o = a.value;
          } else o = t[i];
          st(s, o, e, n);
        }
        return n.writeUnknownFields && this.writeUnknownFields(t, e), e;
      },
    });
  }
  function st(t, e, n, r) {
    let s = t.repeated;
    switch (t.kind) {
      case "scalar":
      case "enum":
        let o = t.kind == "enum" ? u.INT32 : t.T;
        if (s)
          if (t.packed) nt(n, o, t.no, e);
          else for (let i of e) _(n, o, t.no, i, !0);
        else e !== void 0 && _(n, o, t.no, e, !!t.oneof || t.opt);
        break;
      case "message":
        if (s) for (let i of e) Ee(n, r, t, i);
        else e !== void 0 && Ee(n, r, t, e);
        break;
      case "map":
        for (let [i, a] of Object.entries(e)) tt(n, r, t, i, a);
        break;
    }
  }
  var C =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        "",
      ),
    ie = [];
  for (let t = 0; t < C.length; t++) ie[C[t].charCodeAt(0)] = t;
  ie["-".charCodeAt(0)] = C.indexOf("+");
  ie["_".charCodeAt(0)] = C.indexOf("/");
  var Be = {
    dec(t) {
      let e = (t.length * 3) / 4;
      t[t.length - 2] == "=" ? (e -= 2) : t[t.length - 1] == "=" && (e -= 1);
      let n = new Uint8Array(e),
        r = 0,
        s = 0,
        o,
        i = 0;
      for (let a = 0; a < t.length; a++) {
        if (((o = ie[t.charCodeAt(a)]), o === void 0))
          switch (t[a]) {
            case "=":
              s = 0;
            case `
`:
            case "\r":
            case "	":
            case " ":
              continue;
            default:
              throw Error("invalid base64 string.");
          }
        switch (s) {
          case 0:
            (i = o), (s = 1);
            break;
          case 1:
            (n[r++] = (i << 2) | ((o & 48) >> 4)), (i = o), (s = 2);
            break;
          case 2:
            (n[r++] = ((i & 15) << 4) | ((o & 60) >> 2)), (i = o), (s = 3);
            break;
          case 3:
            (n[r++] = ((i & 3) << 6) | o), (s = 0);
            break;
        }
      }
      if (s == 1) throw Error("invalid base64 string.");
      return n.subarray(0, r);
    },
    enc(t) {
      let e = "",
        n = 0,
        r,
        s = 0;
      for (let o = 0; o < t.length; o++)
        switch (((r = t[o]), n)) {
          case 0:
            (e += C[r >> 2]), (s = (r & 3) << 4), (n = 1);
            break;
          case 1:
            (e += C[s | (r >> 4)]), (s = (r & 15) << 2), (n = 2);
            break;
          case 2:
            (e += C[s | (r >> 6)]), (e += C[r & 63]), (n = 0);
            break;
        }
      return n && ((e += C[s]), (e += "="), n == 1 && (e += "=")), e;
    },
  };
  function ot(t, e, n) {
    at(e, t);
    let r = e.runtime.bin.makeReadOptions(n),
      s = Ke(t.getType().runtime.bin.listUnknownFields(t), e.field),
      [o, i] = ne(e);
    for (let a of s)
      e.runtime.bin.readField(
        o,
        r.readerFactory(a.data),
        e.field,
        a.wireType,
        r,
      );
    return i();
  }
  function it(t, e, n, r) {
    at(e, t);
    let s = e.runtime.bin.makeReadOptions(r),
      o = e.runtime.bin.makeWriteOptions(r);
    if (Me(t, e)) {
      let f = t
        .getType()
        .runtime.bin.listUnknownFields(t)
        .filter((d) => d.no != e.field.no);
      t.getType().runtime.bin.discardUnknownFields(t);
      for (let d of f)
        t.getType().runtime.bin.onUnknownField(t, d.no, d.wireType, d.data);
    }
    let i = o.writerFactory(),
      a = e.field;
    !a.opt &&
      !a.repeated &&
      (a.kind == "enum" || a.kind == "scalar") &&
      (a = Object.assign(Object.assign({}, e.field), { opt: !0 })),
      e.runtime.bin.writeField(a, n, i, o);
    let c = s.readerFactory(i.finish());
    for (; c.pos < c.len; ) {
      let [f, d] = c.tag(),
        p = c.skip(d);
      t.getType().runtime.bin.onUnknownField(t, f, d, p);
    }
  }
  function Me(t, e) {
    let n = t.getType();
    return (
      e.extendee.typeName === n.typeName &&
      !!n.runtime.bin.listUnknownFields(t).find((r) => r.no == e.field.no)
    );
  }
  function at(t, e) {
    x(
      t.extendee.typeName == e.getType().typeName,
      `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`,
    );
  }
  var ct = { ignoreUnknownFields: !1 },
    ut = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0,
    };
  function zt(t) {
    return t ? Object.assign(Object.assign({}, ct), t) : ct;
  }
  function Qt(t) {
    return t ? Object.assign(Object.assign({}, ut), t) : ut;
  }
  function dt(t, e) {
    let n = e(Ht, mt);
    return {
      makeReadOptions: zt,
      makeWriteOptions: Qt,
      readMessage(r, s, o, i) {
        if (s == null || Array.isArray(s) || typeof s != "object")
          throw new Error(
            `cannot decode message ${r.typeName} from JSON: ${P(s)}`,
          );
        i = i ?? new r();
        let a = new Map(),
          c = o.typeRegistry;
        for (let [f, d] of Object.entries(s)) {
          let p = r.fields.findJsonName(f);
          if (p) {
            if (p.oneof) {
              if (d === null && p.kind == "scalar") continue;
              let g = a.get(p.oneof);
              if (g !== void 0)
                throw new Error(
                  `cannot decode message ${r.typeName} from JSON: multiple keys for oneof "${p.oneof.name}" present: "${g}", "${f}"`,
                );
              a.set(p.oneof, f);
            }
            ft(i, d, p, o, r, t);
          } else {
            let g = !1;
            if (c?.findExtension && f.startsWith("[") && f.endsWith("]")) {
              let l = c.findExtension(f.substring(1, f.length - 1));
              if (l && l.extendee.typeName == r.typeName) {
                g = !0;
                let [y, E] = ne(l);
                ft(y, d, l.field, o, l, !0), it(i, l, E(), o);
              }
            }
            if (!g && !o.ignoreUnknownFields)
              throw new Error(
                `cannot decode message ${r.typeName} from JSON: key "${f}" is unknown`,
              );
          }
        }
        return i;
      },
      writeMessage(r, s) {
        let o = r.getType(),
          i = {},
          a;
        try {
          for (let f of o.fields.byMember()) {
            let d;
            if (f.kind == "oneof") {
              let p = r[f.localName];
              if (p.value === void 0) continue;
              if (((a = f.findField(p.case)), !a))
                throw "oneof case not found: " + p.case;
              d = n(a, p.value, s);
            } else (a = f), (d = n(a, r[a.localName], s));
            d !== void 0 && (i[s.useProtoFieldName ? a.name : a.jsonName] = d);
          }
          let c = s.typeRegistry;
          if (c?.findExtensionFor)
            for (let f of o.runtime.bin.listUnknownFields(r)) {
              let d = c.findExtensionFor(o.typeName, f.no);
              if (d && Me(r, d)) {
                let p = ot(r, d, s),
                  g = n(d.field, p, s);
                g !== void 0 && (i[d.field.jsonName] = g);
              }
            }
        } catch (c) {
          let f = a
              ? `cannot encode field ${o.typeName}.${a.name} to JSON`
              : `cannot encode message ${o.typeName} to JSON`,
            d = c instanceof Error ? c.message : String(c);
          throw new Error(f + (d.length > 0 ? `: ${d}` : ""));
        }
        return i;
      },
      readScalar: (r, s, o) => K(r, s, o, t),
      writeScalar: mt,
      debug: P,
    };
  }
  function P(t) {
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
  function ft(t, e, n, r, s, o) {
    let i = n.localName;
    if (n.oneof) {
      if (e === null && n.kind == "scalar") return;
      (t = t[n.oneof.localName] = { case: i }), (i = "value");
    }
    if (n.repeated) {
      if (e === null) return;
      if (!Array.isArray(e))
        throw new Error(
          `cannot decode field ${s.typeName}.${n.name} from JSON: ${P(e)}`,
        );
      let a = t[i];
      for (let c of e) {
        if (c === null)
          throw new Error(
            `cannot decode field ${s.typeName}.${n.name} from JSON: ${P(c)}`,
          );
        let f;
        switch (n.kind) {
          case "message":
            f = n.T.fromJson(c, r);
            break;
          case "enum":
            if (((f = Oe(n.T, c, r.ignoreUnknownFields, !0)), f === void 0))
              continue;
            break;
          case "scalar":
            try {
              f = K(n.T, c, n.L, !0);
            } catch (d) {
              let p = `cannot decode field ${s.typeName}.${
                n.name
              } from JSON: ${P(c)}`;
              throw (
                (d instanceof Error &&
                  d.message.length > 0 &&
                  (p += `: ${d.message}`),
                new Error(p))
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
          `cannot decode field ${s.typeName}.${n.name} from JSON: ${P(e)}`,
        );
      let a = t[i];
      for (let [c, f] of Object.entries(e)) {
        if (f === null)
          throw new Error(
            `cannot decode field ${s.typeName}.${n.name} from JSON: map value null`,
          );
        let d;
        switch (n.V.kind) {
          case "message":
            d = n.V.T.fromJson(f, r);
            break;
          case "enum":
            if (((d = Oe(n.V.T, f, r.ignoreUnknownFields, !0)), d === void 0))
              continue;
            break;
          case "scalar":
            try {
              d = K(n.V.T, f, U.BIGINT, !0);
            } catch (p) {
              let g = `cannot decode map value for field ${s.typeName}.${
                n.name
              } from JSON: ${P(e)}`;
              throw (
                (p instanceof Error &&
                  p.message.length > 0 &&
                  (g += `: ${p.message}`),
                new Error(g))
              );
            }
            break;
        }
        try {
          a[
            K(
              n.K,
              n.K == u.BOOL ? (c == "true" ? !0 : c == "false" ? !1 : c) : c,
              U.BIGINT,
              !0,
            ).toString()
          ] = d;
        } catch (p) {
          let g = `cannot decode map key for field ${s.typeName}.${
            n.name
          } from JSON: ${P(e)}`;
          throw (
            (p instanceof Error &&
              p.message.length > 0 &&
              (g += `: ${p.message}`),
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
                `cannot decode field ${s.typeName}.${n.name} from JSON: null is invalid for oneof field`,
              );
            return;
          }
          t[i] instanceof M
            ? t[i].fromJson(e, r)
            : ((t[i] = a.fromJson(e, r)),
              a.fieldWrapper &&
                !n.oneof &&
                (t[i] = a.fieldWrapper.unwrapField(t[i])));
          break;
        case "enum":
          let c = Oe(n.T, e, r.ignoreUnknownFields, o);
          c !== void 0 && (t[i] = c);
          break;
        case "scalar":
          try {
            t[i] = K(n.T, e, n.L, o);
          } catch (f) {
            let d = `cannot decode field ${s.typeName}.${n.name} from JSON: ${P(
              e,
            )}`;
            throw (
              (f instanceof Error &&
                f.message.length > 0 &&
                (d += `: ${f.message}`),
              new Error(d))
            );
          }
          break;
      }
  }
  function K(t, e, n, r) {
    switch (t) {
      case u.DOUBLE:
      case u.FLOAT:
        if (e === null) return r ? 0 : void 0;
        if (e === "NaN") return Number.NaN;
        if (e === "Infinity") return Number.POSITIVE_INFINITY;
        if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
        if (
          e === "" ||
          (typeof e == "string" && e.trim().length !== e.length) ||
          (typeof e != "string" && typeof e != "number")
        )
          break;
        let s = Number(e);
        if (Number.isNaN(s) || !Number.isFinite(s)) break;
        return t == u.FLOAT && Q(s), s;
      case u.INT32:
      case u.FIXED32:
      case u.SFIXED32:
      case u.SINT32:
      case u.UINT32:
        if (e === null) return r ? 0 : void 0;
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
        return t == u.UINT32 ? j(o) : G(o), o;
      case u.INT64:
      case u.SFIXED64:
      case u.SINT64:
        if (e === null) return r ? I.zero : void 0;
        if (typeof e != "number" && typeof e != "string") break;
        let i = I.parse(e);
        return n ? i.toString() : i;
      case u.FIXED64:
      case u.UINT64:
        if (e === null) return r ? I.zero : void 0;
        if (typeof e != "number" && typeof e != "string") break;
        let a = I.uParse(e);
        return n ? a.toString() : a;
      case u.BOOL:
        if (e === null) return r ? !1 : void 0;
        if (typeof e != "boolean") break;
        return e;
      case u.STRING:
        if (e === null) return r ? "" : void 0;
        if (typeof e != "string") break;
        try {
          encodeURIComponent(e);
        } catch {
          throw new Error("invalid UTF8");
        }
        return e;
      case u.BYTES:
        if (e === null) return r ? new Uint8Array(0) : void 0;
        if (e === "") return new Uint8Array(0);
        if (typeof e != "string") break;
        return Be.dec(e);
    }
    throw new Error();
  }
  function Oe(t, e, n, r) {
    if (e === null) return r ? t.values[0].no : void 0;
    switch (typeof e) {
      case "number":
        if (Number.isInteger(e)) return e;
        break;
      case "string":
        let s = t.findName(e);
        if (s || n) return s?.no;
        break;
    }
    throw new Error(`cannot decode enum ${t.typeName} from JSON: ${P(e)}`);
  }
  function Ht(t, e, n, r) {
    var s;
    if (e === void 0) return e;
    if (!n && t.values[0].no === e) return;
    if (r) return e;
    if (t.typeName == "google.protobuf.NullValue") return null;
    let o = t.findNumber(e);
    return (s = o?.name) !== null && s !== void 0 ? s : e;
  }
  function mt(t, e, n) {
    if (e !== void 0)
      switch (t) {
        case u.INT32:
        case u.SFIXED32:
        case u.SINT32:
        case u.FIXED32:
        case u.UINT32:
          return x(typeof e == "number"), e != 0 || n ? e : void 0;
        case u.FLOAT:
        case u.DOUBLE:
          return (
            x(typeof e == "number"),
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
          return x(typeof e == "string"), e.length > 0 || n ? e : void 0;
        case u.BOOL:
          return x(typeof e == "boolean"), e || n ? e : void 0;
        case u.UINT64:
        case u.FIXED64:
        case u.INT64:
        case u.SFIXED64:
        case u.SINT64:
          return (
            x(
              typeof e == "bigint" ||
                typeof e == "string" ||
                typeof e == "number",
            ),
            n || e != 0 ? e.toString(10) : void 0
          );
        case u.BYTES:
          return (
            x(e instanceof Uint8Array),
            n || e.byteLength > 0 ? Be.enc(e) : void 0
          );
      }
  }
  function lt() {
    return dt(
      !0,
      (t, e) =>
        function (r, s, o) {
          if (r.kind == "map") {
            let i = {};
            switch (r.V.kind) {
              case "scalar":
                for (let [c, f] of Object.entries(s)) {
                  let d = e(r.V.T, f, !0);
                  x(d !== void 0), (i[c.toString()] = d);
                }
                break;
              case "message":
                for (let [c, f] of Object.entries(s))
                  i[c.toString()] = f.toJson(o);
                break;
              case "enum":
                let a = r.V.T;
                for (let [c, f] of Object.entries(s)) {
                  x(f === void 0 || typeof f == "number");
                  let d = t(a, f, !0, o.enumAsInteger);
                  x(d !== void 0), (i[c.toString()] = d);
                }
                break;
            }
            return o.emitDefaultValues || Object.keys(i).length > 0
              ? i
              : void 0;
          } else if (r.repeated) {
            let i = [];
            switch (r.kind) {
              case "scalar":
                for (let a = 0; a < s.length; a++) i.push(e(r.T, s[a], !0));
                break;
              case "enum":
                for (let a = 0; a < s.length; a++)
                  i.push(t(r.T, s[a], !0, o.enumAsInteger));
                break;
              case "message":
                for (let a = 0; a < s.length; a++) i.push(s[a].toJson(o));
                break;
            }
            return o.emitDefaultValues || i.length > 0 ? i : void 0;
          } else {
            if (s === void 0) return;
            switch (r.kind) {
              case "scalar":
                return e(r.T, s, !!r.oneof || r.opt || o.emitDefaultValues);
              case "enum":
                return t(
                  r.T,
                  s,
                  !!r.oneof || r.opt || o.emitDefaultValues,
                  o.enumAsInteger,
                );
              case "message":
                return se(r.T, s).toJson(o);
            }
          }
        },
    );
  }
  function pt() {
    return {
      setEnumType: Te,
      initPartial(t, e) {
        if (t === void 0) return;
        let n = e.getType();
        for (let r of n.fields.byMember()) {
          let s = r.localName,
            o = e,
            i = t;
          if (i[s] !== void 0)
            switch (r.kind) {
              case "oneof":
                let a = i[s].case;
                if (a === void 0) continue;
                let c = r.findField(a),
                  f = i[s].value;
                c && c.kind == "message" && !(f instanceof c.T)
                  ? (f = new c.T(f))
                  : c && c.kind === "scalar" && c.T === u.BYTES && (f = z(f)),
                  (o[s] = { case: a, value: f });
                break;
              case "scalar":
              case "enum":
                let d = i[s];
                r.T === u.BYTES && (d = r.repeated ? d.map(z) : z(d)),
                  (o[s] = d);
                break;
              case "map":
                switch (r.V.kind) {
                  case "scalar":
                  case "enum":
                    if (r.V.T === u.BYTES)
                      for (let [l, y] of Object.entries(i[s])) o[s][l] = z(y);
                    else Object.assign(o[s], i[s]);
                    break;
                  case "message":
                    let g = r.V.T;
                    for (let l of Object.keys(i[s])) {
                      let y = i[s][l];
                      g.fieldWrapper || (y = new g(y)), (o[s][l] = y);
                    }
                    break;
                }
                break;
              case "message":
                let p = r.T;
                if (r.repeated)
                  o[s] = i[s].map((g) => (g instanceof p ? g : new p(g)));
                else if (i[s] !== void 0) {
                  let g = i[s];
                  p.fieldWrapper
                    ? p.typeName === "google.protobuf.BytesValue"
                      ? (o[s] = z(g))
                      : (o[s] = g)
                    : (o[s] = g instanceof p ? g : new p(g));
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
          : t.fields.byMember().every((r) => {
              let s = e[r.localName],
                o = n[r.localName];
              if (r.repeated) {
                if (s.length !== o.length) return !1;
                switch (r.kind) {
                  case "message":
                    return s.every((i, a) => r.T.equals(i, o[a]));
                  case "scalar":
                    return s.every((i, a) => R(r.T, i, o[a]));
                  case "enum":
                    return s.every((i, a) => R(u.INT32, i, o[a]));
                }
                throw new Error(`repeated cannot contain ${r.kind}`);
              }
              switch (r.kind) {
                case "message":
                  return r.T.equals(s, o);
                case "enum":
                  return R(u.INT32, s, o);
                case "scalar":
                  return R(r.T, s, o);
                case "oneof":
                  if (s.case !== o.case) return !1;
                  let i = r.findField(s.case);
                  if (i === void 0) return !0;
                  switch (i.kind) {
                    case "message":
                      return i.T.equals(s.value, o.value);
                    case "enum":
                      return R(u.INT32, s.value, o.value);
                    case "scalar":
                      return R(i.T, s.value, o.value);
                  }
                  throw new Error(`oneof cannot contain ${i.kind}`);
                case "map":
                  let a = Object.keys(s).concat(Object.keys(o));
                  switch (r.V.kind) {
                    case "message":
                      let c = r.V.T;
                      return a.every((d) => c.equals(s[d], o[d]));
                    case "enum":
                      return a.every((d) => R(u.INT32, s[d], o[d]));
                    case "scalar":
                      let f = r.V.T;
                      return a.every((d) => R(f, s[d], o[d]));
                  }
                  break;
              }
            });
      },
      clone(t) {
        let e = t.getType(),
          n = new e(),
          r = n;
        for (let s of e.fields.byMember()) {
          let o = t[s.localName],
            i;
          if (s.repeated) i = o.map(ae);
          else if (s.kind == "map") {
            i = r[s.localName];
            for (let [a, c] of Object.entries(o)) i[a] = ae(c);
          } else
            s.kind == "oneof"
              ? (i = s.findField(o.case)
                  ? { case: o.case, value: ae(o.value) }
                  : { case: void 0 })
              : (i = ae(o));
          r[s.localName] = i;
        }
        return n;
      },
    };
  }
  function ae(t) {
    if (t === void 0) return t;
    if (t instanceof M) return t.clone();
    if (t instanceof Uint8Array) {
      let e = new Uint8Array(t.byteLength);
      return e.set(t), e;
    }
    return t;
  }
  function z(t) {
    return t instanceof Uint8Array ? t : new Uint8Array(t);
  }
  var ce = class {
    constructor(e, n) {
      (this._fields = e), (this._normalizer = n);
    }
    findJsonName(e) {
      if (!this.jsonNames) {
        let n = {};
        for (let r of this.list()) n[r.jsonName] = n[r.name] = r;
        this.jsonNames = n;
      }
      return this.jsonNames[e];
    }
    find(e) {
      if (!this.numbers) {
        let n = {};
        for (let r of this.list()) n[r.no] = r;
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
        for (let r of this.list())
          r.oneof ? r.oneof !== n && ((n = r.oneof), e.push(n)) : e.push(r);
      }
      return this.members;
    }
  };
  function Ae(t, e) {
    let n = ht(t);
    return e ? n : nn(tn(n));
  }
  function gt(t) {
    return Ae(t, !1);
  }
  var yt = ht;
  function ht(t) {
    let e = !1,
      n = [];
    for (let r = 0; r < t.length; r++) {
      let s = t.charAt(r);
      switch (s) {
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
          n.push(s), (e = !1);
          break;
        default:
          e && ((e = !1), (s = s.toUpperCase())), n.push(s);
          break;
      }
    }
    return n.join("");
  }
  var Zt = new Set(["constructor", "toString", "toJSON", "valueOf"]),
    en = new Set([
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
    kt = (t) => `${t}$`,
    tn = (t) => (en.has(t) ? kt(t) : t),
    nn = (t) => (Zt.has(t) ? kt(t) : t);
  var ue = class {
    constructor(e) {
      (this.kind = "oneof"),
        (this.repeated = !1),
        (this.packed = !1),
        (this.opt = !1),
        (this.default = void 0),
        (this.fields = []),
        (this.name = e),
        (this.localName = gt(e));
    }
    addField(e) {
      x(e.oneof === this, `field ${e.name} not one of ${this.name}`),
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
  var m = ze(
    "proto3",
    lt(),
    rt(),
    Object.assign(Object.assign({}, pt()), {
      newFieldList(t) {
        return new ce(t, sn);
      },
      initFields(t) {
        for (let e of t.getType().fields.byMember()) {
          if (e.opt) continue;
          let n = e.localName,
            r = t;
          if (e.repeated) {
            r[n] = [];
            continue;
          }
          switch (e.kind) {
            case "oneof":
              r[n] = { case: void 0 };
              break;
            case "enum":
              r[n] = 0;
              break;
            case "map":
              r[n] = {};
              break;
            case "scalar":
              r[n] = V(e.T, e.L);
              break;
            case "message":
              break;
          }
        }
      },
    }),
  );
  function sn(t) {
    var e, n, r, s;
    let o = [],
      i;
    for (let a of typeof t == "function" ? t() : t) {
      let c = a;
      if (
        ((c.localName = Ae(a.name, a.oneof !== void 0)),
        (c.jsonName =
          (e = a.jsonName) !== null && e !== void 0 ? e : yt(a.name)),
        (c.repeated = (n = a.repeated) !== null && n !== void 0 ? n : !1),
        a.kind == "scalar" &&
          (c.L = (r = a.L) !== null && r !== void 0 ? r : U.BIGINT),
        a.oneof !== void 0)
      ) {
        let f = typeof a.oneof == "string" ? a.oneof : a.oneof.name;
        (!i || i.name != f) && (i = new ue(f)), (c.oneof = i), i.addField(c);
      }
      a.kind == "message" && (c.delimited = !1),
        (c.packed =
          (s = a.packed) !== null && s !== void 0
            ? s
            : a.kind == "enum" ||
              (a.kind == "scalar" && a.T != u.BYTES && a.T != u.STRING)),
        o.push(c);
    }
    return o;
  }
  var Eo = m.makeMessageType("youtube.request.Request", () => [
      { no: 1, name: "context", kind: "message", T: rn },
      { no: 2, name: "browseId", kind: "scalar", T: 9 },
    ]),
    rn = m.makeMessageType("youtube.request.Context", () => [
      { no: 9, name: "adSignalsInfo", kind: "message", T: on },
    ]),
    on = m.makeMessageType("youtube.request.AdSignalsInfo", () => [
      { no: 1, name: "params", kind: "message", T: Ue, repeated: !0 },
    ]),
    Ue = m.makeMessageType("youtube.request.Params", () => [
      { no: 1, name: "key", kind: "scalar", T: 9 },
      { no: 2, name: "value", kind: "scalar", T: 9 },
    ]);
  var xt = m.makeMessageType("youtube.response.Browse", () => [
      { no: 1, name: "responseContext", kind: "message", T: an },
      { no: 9, name: "n1F9", kind: "message", T: un },
      { no: 10, name: "n1F10", kind: "message", T: Ft },
    ]),
    an = m.makeMessageType("youtube.response.ResponseContext", () => [
      {
        no: 6,
        name: "serviceTrackingParams",
        kind: "message",
        T: cn,
        repeated: !0,
      },
    ]),
    cn = m.makeMessageType("youtube.response.ServiceTrackingParams", () => [
      { no: 1, name: "service", kind: "scalar", T: 5 },
      { no: 2, name: "params", kind: "message", T: Ue, repeated: !0 },
    ]),
    un = m.makeMessageType("youtube.response.n1F9", () => [
      { no: 58173949, name: "m2F58173949", kind: "message", T: fn },
      { no: 153515154, name: "n6F153515154", kind: "message", T: St },
      { no: 49399797, name: "n2F49399797", kind: "message", T: X },
    ]),
    Ft = m.makeMessageType("youtube.response.n1F10", () => [
      { no: 49399797, name: "n2F49399797", kind: "message", T: X },
    ]),
    fn = m.makeMessageType("youtube.response.m2F58173949", () => [
      { no: 1, name: "m3F1", kind: "message", T: mn, repeated: !0 },
    ]),
    mn = m.makeMessageType("youtube.response.m3F1", () => [
      { no: 58174010, name: "m4F58174010", kind: "message", T: dn },
    ]),
    dn = m.makeMessageType("youtube.response.m4F58174010", () => [
      { no: 4, name: "n1F10", kind: "message", T: Ft },
    ]),
    X = m.makeMessageType("youtube.response.n2F49399797", () => [
      { no: 1, name: "n3F1", kind: "message", T: ln, repeated: !0 },
    ]),
    ln = m.makeMessageType("youtube.response.n3F1", () => [
      { no: 50195462, name: "n4F50195462", kind: "message", T: It },
      { no: 51845067, name: "n4F51845067", kind: "message", T: pn },
      { no: 221496734, name: "m4F221496734", kind: "message", T: gn },
    ]),
    It = m.makeMessageType("youtube.response.n4F50195462", () => [
      { no: 1, name: "n5F1", kind: "message", T: Nt, repeated: !0 },
    ]),
    pn = m.makeMessageType("youtube.response.n4F51845067", () => [
      { no: 5, name: "n5F5", kind: "message", T: hn },
    ]),
    gn = m.makeMessageType("youtube.response.n4F221496734", () => [
      { no: 3, name: "n5F3", kind: "message", T: yn },
      { no: 10, name: "n5F10", kind: "message", T: wn },
    ]),
    Nt = m.makeMessageType("youtube.response.n5F1", () => [
      { no: 153515154, name: "n6F153515154", kind: "message", T: St },
    ]),
    yn = m.makeMessageType("youtube.response.n5F3", () => [
      { no: 1, name: "n6F1", kind: "message", T: kn },
    ]),
    hn = m.makeMessageType("youtube.response.n5F5", () => [
      { no: 51431404, name: "n6F51431404", kind: "message", T: bn },
    ]),
    kn = m.makeMessageType("youtube.response.n6F1", () => [
      { no: 1, name: "staticLyric", kind: "scalar", T: 9 },
    ]),
    St = m.makeMessageType("youtube.response.n6F153515154", () => [
      { no: 172660663, name: "n7F172660663", kind: "message", T: Tn },
    ]),
    bn = m.makeMessageType("youtube.response.n6F51431404", () => [
      { no: 1, name: "n5F1", kind: "message", T: Nt, repeated: !0 },
    ]),
    Tn = m.makeMessageType("youtube.response.n7F172660663", () => [
      { no: 1, name: "n8F1", kind: "message", T: Et },
      { no: 2, name: "n8F2", kind: "message", T: Bt },
      { no: 3, name: "n8F3", kind: "message", T: xn },
    ]),
    wn = m.makeMessageType("youtube.response.n5F10", () => [
      { no: 1, name: "origin", kind: "message", T: Fn },
    ]),
    Et = m.makeMessageType("youtube.response.n8F1", () => [
      { no: 168777401, name: "n9F168777401", kind: "message", T: In },
    ]),
    Bt = m.makeMessageType("youtube.response.n8F2", () => [
      { no: 183314536, name: "n9F183314536", kind: "message", T: Nn },
    ]),
    xn = m.makeMessageType("youtube.response.n8F3", () => [
      { no: 1, name: "n8F1", kind: "message", T: Et },
      { no: 2, name: "n8F2", kind: "message", T: Bt },
    ]),
    Fn = m.makeMessageType("youtube.response.Origin", () => [
      { no: 1, name: "originText", kind: "scalar", T: 9 },
    ]),
    In = m.makeMessageType("youtube.response.n9F168777401", () => [
      { no: 3, name: "n10F3", kind: "message", T: Sn },
      { no: 5, name: "n10F5", kind: "message", T: En },
    ]),
    Nn = m.makeMessageType("youtube.response.n9F183314536", () => [
      { no: 1, name: "type", kind: "scalar", T: 9 },
    ]),
    Sn = m.makeMessageType("youtube.response.n10F3", () => [
      { no: 172035250, name: "n11F172035250", kind: "message", T: An },
    ]),
    En = m.makeMessageType("youtube.response.n10F5", () => [
      { no: 465160965, name: "n11F465160965", kind: "message", T: Bn },
    ]),
    Bn = m.makeMessageType("youtube.response.n11F465160965", () => [
      { no: 4, name: "n12F4", kind: "message", T: Mn },
    ]),
    Mn = m.makeMessageType("youtube.response.n12F4", () => [
      { no: 1, name: "n13F1", kind: "message", T: On, repeated: !0 },
      { no: 2, name: "originText", kind: "scalar", T: 9 },
    ]),
    On = m.makeMessageType("youtube.response.n13F1", () => [
      { no: 1, name: "f1", kind: "scalar", T: 9 },
    ]),
    An = m.makeMessageType("youtube.response.n11F172035250", () => [
      { no: 1, name: "type", kind: "scalar", T: 9 },
    ]),
    Mt = m.makeMessageType("youtube.response.Next", () => [
      { no: 7, name: "a1F7", kind: "message", T: Un },
      { no: 8, name: "a1F8", kind: "message", T: Pn },
    ]),
    Un = m.makeMessageType("youtube.response.a1F7", () => [
      { no: 51779735, name: "a2F51779735", kind: "message", T: Vn },
      { no: 125354411, name: "musicPlayRender", kind: "message", T: Rn },
    ]),
    Pn = m.makeMessageType("youtube.response.a1F8", () => [
      { no: 49399797, name: "n2F49399797", kind: "message", T: X },
    ]),
    Rn = m.makeMessageType("youtube.response.MusicPlayRender", () => [
      { no: 7, name: "bottomRender", kind: "message", T: Cn },
    ]),
    Cn = m.makeMessageType("youtube.response.BottomRender", () => [
      { no: 91700600, name: "sectionTab", kind: "message", T: vn },
    ]),
    vn = m.makeMessageType("youtube.response.SectionTab", () => [
      { no: 1, name: "items", kind: "message", T: Dn, repeated: !0 },
    ]),
    Dn = m.makeMessageType("youtube.response.Item", () => [
      { no: 58174010, name: "tab", kind: "message", T: Ln },
    ]),
    Ln = m.makeMessageType("youtube.response.Tab", () => [
      { no: 1, name: "info", kind: "message", T: $n },
      { no: 2, name: "name", kind: "scalar", T: 9 },
    ]),
    $n = m.makeMessageType("youtube.response.Info", () => [
      { no: 48687626, name: "BrowseInfo", kind: "message", T: Jn },
    ]),
    Jn = m.makeMessageType("youtube.response.BrowseInfo", () => [
      { no: 2, name: "browseId", kind: "scalar", T: 9 },
    ]),
    Vn = m.makeMessageType("youtube.response.a2F51779735", () => [
      { no: 1, name: "a3F1", kind: "message", T: Gn },
    ]),
    Gn = m.makeMessageType("youtube.response.a3F1", () => [
      { no: 49399797, name: "n2F49399797", kind: "message", T: X },
    ]),
    Ot = m.makeMessageType("youtube.response.Search", () => [
      { no: 4, name: "s1F4", kind: "message", T: qn },
      { no: 7, name: "s1F7", kind: "message", T: _n },
    ]),
    qn = m.makeMessageType("youtube.response.s1F4", () => [
      { no: 49399797, name: "n2F49399797", kind: "message", T: X },
    ]),
    _n = m.makeMessageType("youtube.response.s1F7", () => [
      { no: 50195462, name: "n4F50195462", kind: "message", T: It },
      { no: 49399797, name: "n2F49399797", kind: "message", T: X },
    ]),
    At = m.makeMessageType("youtube.response.Shorts", () => [
      { no: 2, name: "entries", kind: "message", T: Xn, repeated: !0 },
    ]),
    Xn = m.makeMessageType("youtube.response.Entry", () => [
      { no: 1, name: "command", kind: "message", T: Yn },
    ]),
    Yn = m.makeMessageType("youtube.response.Command", () => [
      { no: 139608561, name: "reelWatchEndpoint", kind: "message", T: Wn },
    ]),
    Wn = m.makeMessageType("youtube.response.ReelWatchEndpoint", () => [
      { no: 8, name: "overlay", kind: "message", T: jn },
    ]),
    jn = m.makeMessageType("youtube.response.Overlay", () => [
      {
        no: 139970731,
        name: "reelPlayerOverlayRenderer",
        kind: "message",
        T: Kn,
      },
    ]),
    Kn = m.makeMessageType("youtube.response.ReelPlayerOverlayRenderer", () => [
      { no: 12, name: "style", kind: "scalar", T: 5 },
    ]),
    Ut = m.makeMessageType("youtube.response.Guide", () => [
      { no: 4, name: "guideItem4", kind: "message", T: bt, repeated: !0 },
      { no: 6, name: "guideItem6", kind: "message", T: bt, repeated: !0 },
    ]),
    bt = m.makeMessageType("youtube.response.GuideItem", () => [
      { no: 117866661, name: "guideSectionRenderer", kind: "message", T: zn },
    ]),
    zn = m.makeMessageType("youtube.response.GuideSectionRenderer", () => [
      { no: 1, name: "rendererItems", kind: "message", T: Qn, repeated: !0 },
    ]),
    Qn = m.makeMessageType("youtube.response.RendererItem", () => [
      { no: 318370163, name: "iconRender", kind: "message", T: Tt },
      { no: 117501096, name: "labelRender", kind: "message", T: Tt },
    ]),
    Tt = m.makeMessageType("youtube.response.guideEntryRenderer", () => [
      { no: 1, name: "browseId", kind: "scalar", T: 9 },
    ]),
    Pt = m.makeMessageType("youtube.response.Player", () => [
      { no: 7, name: "adPlacements", kind: "message", T: Hn, repeated: !0 },
      { no: 2, name: "playabilityStatus", kind: "message", T: es },
      { no: 10, name: "captions", kind: "message", T: rs },
    ]),
    Hn = m.makeMessageType("youtube.response.AdPlacement", () => [
      { no: 84813246, name: "adPlacementRenderer", kind: "message", T: Zn },
    ]),
    Zn = m.makeMessageType("youtube.response.AdPlacementRenderer", () => [
      { no: 4, name: "params", kind: "scalar", T: 9 },
    ]),
    es = m.makeMessageType("youtube.response.PlayabilityStatus", () => [
      { no: 21, name: "pipAbility", kind: "message", T: ts },
      { no: 11, name: "backgroundAbility", kind: "message", T: Pe },
    ]),
    ts = m.makeMessageType("youtube.response.PIPAbility", () => [
      { no: 151635310, name: "piplayer", kind: "message", T: ns },
    ]),
    Pe = m.makeMessageType("youtube.response.BackgroundAbility", () => [
      { no: 64657230, name: "backgroundPlayer", kind: "message", T: ss },
    ]),
    ns = m.makeMessageType("youtube.response.PIPlayer", () => [
      { no: 1, name: "active", kind: "scalar", T: 8 },
    ]),
    ss = m.makeMessageType("youtube.response.BackgroundPlayer", () => [
      { no: 1, name: "active", kind: "scalar", T: 8 },
    ]),
    rs = m.makeMessageType("youtube.response.Captions", () => [
      {
        no: 51621377,
        name: "playerCaptionsTracklistRenderer",
        kind: "message",
        T: os,
      },
    ]),
    os = m.makeMessageType(
      "youtube.response.PlayerCaptionsTracklistRenderer",
      () => [
        { no: 1, name: "captionTracks", kind: "message", T: is, repeated: !0 },
        { no: 2, name: "audioTracks", kind: "message", T: as, repeated: !0 },
        {
          no: 3,
          name: "translationLanguages",
          kind: "message",
          T: Re,
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
    is = m.makeMessageType("youtube.response.CaptionTrack", () => [
      { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
      { no: 2, name: "name", kind: "message", T: Rt },
      { no: 3, name: "vssId", kind: "scalar", T: 9 },
      { no: 4, name: "languageCode", kind: "scalar", T: 9 },
      { no: 5, name: "kind", kind: "scalar", T: 9, opt: !0 },
      { no: 6, name: "rtl", kind: "scalar", T: 8, opt: !0 },
      { no: 7, name: "isTranslatable", kind: "scalar", T: 8 },
    ]),
    as = m.makeMessageType("youtube.response.AudioTrack", () => [
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
    Re = m.makeMessageType("youtube.response.TranslationLanguage", () => [
      { no: 1, name: "languageCode", kind: "scalar", T: 9 },
      { no: 2, name: "languageName", kind: "message", T: Rt },
    ]),
    Rt = m.makeMessageType("youtube.response.Name", () => [
      { no: 1, name: "runs", kind: "message", T: cs, repeated: !0 },
    ]),
    cs = m.makeMessageType(
      "youtube.response.Name.Runs",
      () => [{ no: 1, name: "text", kind: "scalar", T: 9 }],
      { localName: "Name_Runs" },
    ),
    Ct = m.makeMessageType("youtube.response.Setting", () => [
      { no: 6, name: "settingItems", kind: "message", T: Ce, repeated: !0 },
      { no: 10, name: "trackingParams", kind: "message", T: fe },
    ]),
    Ce = m.makeMessageType("youtube.response.SettingItem", () => [
      {
        no: 88478200,
        name: "settingCategoryEntryRenderer",
        kind: "message",
        T: fs,
      },
      {
        no: 66930374,
        name: "settingCategoryCollectionRenderer",
        kind: "message",
        T: ms,
      },
    ]),
    fe = m.makeMessageType("youtube.response.TrackingParams", () => [
      { no: 1, name: "f1", kind: "scalar", T: 5 },
      { no: 2, name: "f2", kind: "scalar", T: 5 },
      { no: 3, name: "f3", kind: "scalar", T: 5 },
      { no: 4, name: "timeInfo", kind: "message", T: us },
    ]),
    us = m.makeMessageType("youtube.response.TimeInfo", () => [
      { no: 1, name: "timestamp", kind: "scalar", T: 4, L: 1 },
      { no: 2, name: "f2", kind: "scalar", T: 7 },
      { no: 3, name: "f3", kind: "scalar", T: 7 },
    ]),
    fs = m.makeMessageType(
      "youtube.response.SettingCategoryEntryRenderer",
      () => [
        { no: 2, name: "f2", kind: "scalar", T: 5 },
        { no: 3, name: "f3", kind: "scalar", T: 5 },
        { no: 5, name: "trackingParams", kind: "message", T: fe },
        { no: 6, name: "f6", kind: "scalar", T: 5 },
        { no: 7, name: "f7", kind: "scalar", T: 5 },
        { no: 8, name: "f8", kind: "scalar", T: 5 },
        { no: 9, name: "f9", kind: "scalar", T: 5 },
        { no: 10, name: "f10", kind: "scalar", T: 5 },
        { no: 12, name: "f12", kind: "scalar", T: 5 },
      ],
    ),
    ms = m.makeMessageType(
      "youtube.response.SettingCategoryCollectionRenderer",
      () => [
        { no: 3, name: "subSettings", kind: "message", T: ve, repeated: !0 },
        { no: 4, name: "categoryId", kind: "scalar", T: 5 },
      ],
    ),
    ve = m.makeMessageType("youtube.response.SubSetting", () => [
      { no: 61331416, name: "settingBooleanRenderer", kind: "message", T: ds },
    ]),
    ds = m.makeMessageType("youtube.response.SettingBooleanRenderer", () => [
      { no: 5, name: "enableServiceEndpoint", kind: "message", T: wt },
      { no: 6, name: "disableServiceEndpoint", kind: "message", T: wt },
      { no: 13, name: "clickTrackingParams", kind: "message", T: fe },
      { no: 15, name: "itemId", kind: "scalar", T: 5 },
    ]),
    wt = m.makeMessageType("youtube.response.ServiceEndpoint", () => [
      { no: 2, name: "trackingParams", kind: "message", T: fe },
      {
        no: 81212182,
        name: "setClientSettingEndpoint",
        kind: "message",
        T: ls,
      },
    ]),
    ls = m.makeMessageType("youtube.response.SetClientSettingEndpoint", () => [
      { no: 1, name: "settingDatas", kind: "message", T: ps },
    ]),
    ps = m.makeMessageType("youtube.response.SettingDatas", () => [
      { no: 1, name: "clientSettingEnum", kind: "message", T: gs },
      { no: 3, name: "boolValue", kind: "scalar", T: 8 },
    ]),
    gs = m.makeMessageType("youtube.response.ClientSettingEnum", () => [
      { no: 1, name: "item", kind: "scalar", T: 5 },
    ]);
  var Y = class {
      constructor(e, n, r) {
        this._times = new Map();
        (this.name = e ?? ""),
          (this.debug = r?.debug ?? !1),
          e && this.log(`${e} Start`),
          (this.className = n ?? ""),
          this.init();
      }
      static getInstance(e, n) {
        let r = typeof $task < "u" ? "QuanX" : "Surge";
        return (
          Y.instances[r] || (Y.instances[r] = Y.classNames[r](e, r, n)),
          Y.instances[r]
        );
      }
      createProxy(e) {
        return new Proxy(e, { get: this.getFn, set: this.setFn });
      }
      getFn(e, n, r) {
        return e[n];
      }
      setFn(e, n, r, s) {
        return (e[n] = r), !0;
      }
      getJSON(e, n = {}) {
        let r = this.getVal(e);
        return r ? JSON.parse(r) : n;
      }
      setJSON(e, n) {
        this.setVal(JSON.stringify(e), n);
      }
      msg(e = this.name, n = "", r = "", s) {}
      log(e) {
        this.debug &&
          (typeof e == "object" && (e = JSON.stringify(e)), console.log(e));
      }
      timeStart(e) {
        (this._times = this._times || {}), (this._times[e] = Date.now());
      }
      timeEnd(e) {
        if (this._times?.has(e)) {
          let n = Date.now() - this._times[e];
          this.log(`${e}: ${n}ms`), this._times.delete(e);
        } else this.log(`Timer with label ${e} does not exist.`);
      }
      exit() {
        $done({});
      }
      reject() {
        $done();
      }
    },
    D = Y;
  (D.instances = {}),
    (D.classNames = {
      QuanX: (e, n, r) => new de(e, n, r),
      Surge: (e, n, r) => new me(e, n, r),
    });
  var le = class extends D {
      getFn(e, n, r) {
        let s = le.clientAdapter[n] || n;
        return super.getFn(e, s, r);
      }
      setFn(e, n, r, s) {
        let o = le.clientAdapter[n] || n;
        return super.setFn(e, o, r, s);
      }
      init() {
        try {
          (this.request = this.createProxy($request)),
            (this.response = this.createProxy($response));
        } catch (e) {
          this.log(e.toString());
        }
      }
      getVal(e) {
        return $persistentStore.read(e);
      }
      setVal(e, n) {
        $persistentStore.write(e, n);
      }
      msg(e = this.name, n = "", r = "", s) {
        $notification.post(e, n, r, { url: s ?? "" });
      }
      async fetch(e) {
        return await new Promise((n, r) => {
          let { method: s, body: o, bodyBytes: i, ...a } = e,
            c = i ?? o,
            f = c instanceof Uint8Array;
          $httpClient[s.toLowerCase()](
            { ...a, body: c, "binary-mode": f },
            (d, p, g) => {
              d && r(d);
              let l = f ? "bodyBytes" : "body";
              n({
                status: p.status || p.statusCode,
                headers: p.headers,
                [l]: g,
              });
            },
          );
        });
      }
      done(e) {
        let n = e.response ?? e,
          r,
          s;
        n.bodyBytes
          ? ((r = n.bodyBytes),
            delete n.bodyBytes,
            (s = { ...e }),
            s.response ? (s.response.body = r) : (s.body = r))
          : (s = e),
          $done(s);
      }
    },
    me = le;
  me.clientAdapter = { bodyBytes: "body" };
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
          this.log(e.toString());
        }
      }
      getFn(e, n, r) {
        let s = v.clientAdapter[n] || n,
          o = super.getFn(e, s, r);
        return (
          n === "bodyBytes" && (o = v.transferBodyBytes(o, "Uint8Array")), o
        );
      }
      setFn(e, n, r, s) {
        let o = v.clientAdapter[n] || n,
          i = r;
        return (
          n === "bodyBytes" && (i = v.transferBodyBytes(i, "Uint8Array")),
          super.setFn(e, o, i, s)
        );
      }
      getVal(e) {
        return $prefs.valueForKey(e)?.replace(/\0/g, "");
      }
      setVal(e, n) {
        $prefs.setValueForKey(e, n);
      }
      msg(e = this.name, n = "", r = "", s) {
        $notify(e, n, r, { "open-url": s ?? "" });
      }
      async fetch(e) {
        return await new Promise((n) => {
          let r = { url: "", method: "GET" };
          for (let [s, o] of Object.entries(e))
            s === "id"
              ? (r.sessionIndex = o)
              : s === "bodyBytes"
              ? (r.bodyBytes = v.transferBodyBytes(o, "ArrayBuffer"))
              : (r[s] = o);
          e.bodyBytes && delete r.body,
            $task.fetch(r).then((s) => {
              let o = { status: 200, headers: {} };
              for (let [i, a] of Object.entries(s))
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
          r = {};
        for (let [s, o] of Object.entries(n))
          s === "status"
            ? (r.status = `HTTP/1.1 ${o}`)
            : s === "bodyBytes"
            ? (r.bodyBytes = v.transferBodyBytes(o, "ArrayBuffer"))
            : (r[s] = o);
        $done(r);
      }
    },
    de = v;
  de.clientAdapter = { id: "sessionIndex", status: "statusCode" };
  var N = D.getInstance("YouTube", { debug: !1 });
  var L = class {
    constructor(e, n) {
      this.decoder = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });
      N.log(n),
        (this.msgType = e),
        Object.assign(
          this,
          N.getJSON("YouTubeAdvertiseInfo", {
            whiteNo: [],
            blackNo: [],
            whiteEml: [],
            blackEml: ["cell_divider.eml"],
          }),
        );
    }
    fromBinary(e) {
      return (this.message = this.msgType.fromBinary(e)), this;
    }
    toBinary() {
      return this.message.toBinary();
    }
    listUnknownFields(e) {
      return e.getType().runtime.bin.listUnknownFields(e);
    }
    save() {
      if (this.needSave) {
        N.log("Update Config");
        let e = {
          whiteNo: this.whiteNo,
          blackNo: this.blackNo,
          whiteEml: this.whiteEml,
          blackEml: this.blackEml,
        };
        N.setJSON(e, "YouTubeAdvertiseInfo");
      }
    }
    done(e) {
      this.save();
      let n = e.bodyBytes;
      this.needProcess && (n = this.toBinary()),
        (e.headers["Content-Encoding"] = "identity"),
        (e.headers["Content-Length"] = (n?.length ?? 0)?.toString()),
        N.done({ response: { ...e, bodyBytes: n } });
    }
    doneResponse() {
      this.save(),
        this.needProcess && N.done({ bodyBytes: this.toBinary() }),
        N.exit();
    }
    iterate(e = {}, n, r) {
      let s = typeof e == "object" ? [e] : [];
      for (; s.length; ) {
        let o = s.pop(),
          i = Object.keys(o);
        if (typeof n == "symbol") {
          for (let a of Object.getOwnPropertySymbols(o))
            if (a.description === n.description) {
              r(o, s);
              break;
            }
        }
        for (let a of i)
          a === n ? r(o, s) : typeof o[a] == "object" && s.push(o[a]);
      }
    }
    isAdvertise(e) {
      let n = this.listUnknownFields(e)[0],
        r = n ? this.handleFieldNo(n) : this.handleFieldEml(e);
      return r && (this.needProcess = !0), r;
    }
    handleFieldNo(e) {
      let n = e.no;
      if (this.whiteNo.includes(n)) return !1;
      if (this.blackNo.includes(n)) return !0;
      let s = this.decoder.decode(e.data).includes("pagead");
      return (
        s ? this.blackNo.push(n) : this.whiteNo.push(n), (this.needSave = !0), s
      );
    }
    handleFieldEml(e) {
      let n = !1,
        r = !0,
        s = "";
      return (
        this.iterate(e, "type", (o, i) => {
          (s = o.type.split("|")[0]),
            this.whiteEml.includes(s)
              ? (n = !1)
              : this.blackEml.includes(s) || /shorts(?!_pivot_item)/.test(s)
              ? (n = !0)
              : (r = !1),
            (i.length = 0);
        }),
        r ||
          (this.iterate(
            e,
            Symbol.for("@bufbuild/protobuf/unknown-fields"),
            (o, i) => {
              let a = this.listUnknownFields(o);
              for (let c of a)
                if (
                  c.data.length > 1e3 &&
                  ((n = this.decoder.decode(c.data).includes("pagead")), n)
                ) {
                  i.length = 0;
                  break;
                }
            },
          ),
          n ? this.blackEml.push(s) : this.whiteEml.push(s),
          (this.needSave = !0)),
        n
      );
    }
  };
  function ys(t) {
    let r = ".",
      s = "+-a^+6",
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
    for (t = 406644, a = 0; a < i.length; a++) (t += i[a]), (t = vt(t, s));
    return (
      (t = vt(t, o)),
      (t ^= 3293161072),
      0 > t && (t = (t & 2147483647) + 2147483648),
      (t %= 1e6),
      t.toString() + r + (t ^ 406644)
    );
  }
  function vt(t, e) {
    let n = "a",
      r = "+",
      s;
    for (let o = 0; o < e.length - 2; o += 3)
      (s = e.charAt(o + 2)),
        (s = s >= n ? s.charCodeAt(0) - 87 : Number(s)),
        (s = e.charAt(o + 1) == r ? t >>> s : t << s),
        (t = e.charAt(o) == r ? (t + s) & 4294967295 : t ^ s);
    return t;
  }
  function Dt(t) {
    return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${ys(
      t,
    )}&q=${encodeURIComponent(t)}`;
  }
  var $ = class extends L {
      constructor(n = xt, r = "Browse") {
        super(n, r);
      }
      pure() {
        return (
          this.iterate(this.message, "n5F1", (r) => {
            for (let s = r.n5F1?.length - 1; s >= 0; s--)
              this.isAdvertise(r.n5F1[s]) && r.n5F1.splice(s, 1);
          }),
          this.getBrowseId().startsWith("MPLYt") && (this.needTranslate = !0),
          this
        );
      }
      getBrowseId() {
        let n = "";
        return (
          this.iterate(this.message?.responseContext, "key", (r, s) => {
            r.key === "browse_id" && ((n = r.value), (s.length = 0));
          }),
          n
        );
      }
      async translate() {
        let n = "",
          r,
          s = !1;
        if (
          (this.iterate(this.message, "n13F1", (a, c) => {
            (r = a),
              (n = a.n13F1.map((f) => f.f1).join(`
`)),
              (s = !0),
              (c.length = 0);
          }),
          s ||
            this.iterate(this.message, "staticLyric", (a, c) => {
              (r = a), (n = a.staticLyric), (c.length = 0), (s = !0);
            }),
          !s)
        )
          return;
        let o = Dt(n),
          i = await N.fetch({ method: "GET", url: o });
        if (i.status === 200 && i.body) {
          let a = JSON.parse(i.body),
            c = " & Translated by Google",
            f = a[2].includes("zh");
          r.staticLyric
            ? ((r.staticLyric = a[0].map((d) => (f ? d[0] : d[1] + d[0] || ""))
                .join(`\r
`)),
              this.iterate(this.message, "originText", (d, p) => {
                (d.originText += c), (p.length = 0);
              }))
            : r.n13F1.length <= a[0].length &&
              (r.n13F1.forEach((d, p) => {
                d.f1 = f
                  ? a[0][p][0]
                  : d.f1 +
                    `
${a[0][p][0]}`;
              }),
              (r.originText += c)),
            (this.needProcess = !0);
        }
      }
    },
    pe = class extends $ {
      constructor(e = Mt, n = "Next") {
        super(e, n);
      }
      pure() {
        return super.pure(), this;
      }
      addTranslateTab() {
        this.iterate(this.message?.a1F7?.musicPlayRender, "items", (e, n) => {
          let r = e.items.find((s) =>
            s.tab.info?.browseInfo?.browseId.startsWith("MPLYt"),
          );
          r && (r.tab.name = r.tab.name + "\u21C4"),
            (this.needProcess = !0),
            (n.length = 0);
        });
      }
    },
    ge = class extends L {
      constructor(e = Pt, n = "Player") {
        super(e, n);
      }
      pure() {
        this.message.adPlacements?.length &&
          (this.message.adPlacements.length = 0);
        let e = this.message?.playabilityStatus?.pipAbility?.piplayer;
        return (
          typeof e == "object" && (e.active = !0),
          typeof this.message.playabilityStatus == "object" &&
            (this.message.playabilityStatus.backgroundAbility = new Pe({
              backgroundPlayer: { active: !0 },
            })),
          this.iterate(this.message, "captionTracks", (n, r) => {
            let s = n.captionTracks;
            if (Array.isArray(s)) for (let i of s) i.isTranslatable = !0;
            let o = {
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
            (n.translationLanguages = Object.entries(o).map(
              ([i, a]) =>
                new Re({
                  languageCode: i,
                  languageName: { runs: [{ text: a }] },
                }),
            )),
              n?.defaultCaptionTrackIndex || (n.defaultCaptionTrackIndex = 0),
              (r.length = 0);
          }),
          (this.needProcess = !0),
          this
        );
      }
    },
    ye = class extends $ {
      constructor(e = Ot, n = "Search") {
        super(e, n);
      }
    },
    he = class extends L {
      constructor(e = At, n = "Shorts") {
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
    ke = class extends L {
      constructor(e = Ut, n = "Guide") {
        super(e, n);
      }
      pure() {
        let e = ["FEmusic_immersive", "SPunlimited", "FEuploads"];
        return (
          this.iterate(this.message, "rendererItems", (n) => {
            for (let r = n.rendererItems.length - 1; r >= 0; r--) {
              let s =
                n.rendererItems[r]?.iconRender?.browseId ||
                n.rendererItems[r]?.labelRender?.browseId;
              e.includes(s) &&
                (n.rendererItems.splice(r, 1), (this.needProcess = !0));
            }
          }),
          this
        );
      }
    },
    be = class extends L {
      constructor(e = Ct, n = "Setting") {
        super(e, n);
      }
      pure() {
        this.iterate(this.message, "categoryId", (n) => {
          if (n.categoryId === 10005) {
            let r = {
                f1: 135,
                f2: 20434,
                f3: 2,
                timeInfo: this.message.trackingParams.timeInfo,
              },
              s = new ve({
                settingBooleanRenderer: {
                  itemId: 0,
                  enableServiceEndpoint: {
                    trackingParams: r,
                    setClientSettingEndpoint: {
                      settingDatas: {
                        clientSettingEnum: { item: 151 },
                        boolValue: !0,
                      },
                    },
                  },
                  disableServiceEndpoint: {
                    trackingParams: r,
                    setClientSettingEndpoint: {
                      settingDatas: {
                        clientSettingEnum: { item: 151 },
                        boolValue: !1,
                      },
                    },
                  },
                  clickTrackingParams: r,
                },
              });
            n.subSettings.push(s);
          }
        });
        let e = new Ce({
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
  var hs = new Map([
    ["browse", $],
    ["next", pe],
    ["player", ge],
    ["search", ye],
    ["reel_watch_sequence", he],
    ["guide", ke],
    ["get_setting", be],
  ]);
  function De(t) {
    for (let [e, n] of hs.entries()) if (t.includes(e)) return new n();
    return null;
  }
  async function ks() {
    let t = De(N.request.url);
    if (t)
      try {
        let e = N.response.bodyBytes;
        t.fromBinary(e).pure(),
          t instanceof $ && t.needTranslate && (await t.translate()),
          t.doneResponse();
      } catch (e) {
        console.log(e.toString()), N.exit();
      }
    else
      N.msg(
        "YouTube Enhance",
        "\u811A\u672C\u9700\u8981\u66F4\u65B0",
        "\u5916\u90E8\u8D44\u6E90 -> \u5168\u90E8\u66F4\u65B0",
      ),
        N.exit();
  }
  ks();
})();
