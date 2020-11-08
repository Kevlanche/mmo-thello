!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.Long=i():t.Long=i()}("undefined"!=typeof self?self:this,function(){return function(t){function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}var n={};return i.m=t,i.c=n,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=0)}([function(t,i){function n(t,i,n){this.low=0|t,this.high=0|i,this.unsigned=!!n}function e(t){return!0===(t&&t.__isLong__)}function r(t,i){var n,e,r;return i?(t>>>=0,(r=0<=t&&t<256)&&(e=l[t])?e:(n=h(t,(0|t)<0?-1:0,!0),r&&(l[t]=n),n)):(t|=0,(r=-128<=t&&t<128)&&(e=f[t])?e:(n=h(t,t<0?-1:0,!1),r&&(f[t]=n),n))}function s(t,i){if(isNaN(t))return i?p:m;if(i){if(t<0)return p;if(t>=c)return q}else{if(t<=-v)return _;if(t+1>=v)return E}return t<0?s(-t,i).neg():h(t%d|0,t/d|0,i)}function h(t,i,e){return new n(t,i,e)}function u(t,i,n){if(0===t.length)throw Error("empty string");if("NaN"===t||"Infinity"===t||"+Infinity"===t||"-Infinity"===t)return m;if("number"==typeof i?(n=i,i=!1):i=!!i,(n=n||10)<2||36<n)throw RangeError("radix");var e;if((e=t.indexOf("-"))>0)throw Error("interior hyphen");if(0===e)return u(t.substring(1),i,n).neg();for(var r=s(a(n,8)),h=m,o=0;o<t.length;o+=8){var g=Math.min(8,t.length-o),f=parseInt(t.substring(o,o+g),n);if(g<8){var l=s(a(n,g));h=h.mul(l).add(s(f))}else h=h.mul(r),h=h.add(s(f))}return h.unsigned=i,h}function o(t,i){return"number"==typeof t?s(t,i):"string"==typeof t?u(t,i):h(t.low,t.high,"boolean"==typeof i?i:t.unsigned)}t.exports=n;var g=null;try{g=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(t){}n.prototype.__isLong__,Object.defineProperty(n.prototype,"__isLong__",{value:!0}),n.isLong=e;var f={},l={};n.fromInt=r,n.fromNumber=s,n.fromBits=h;var a=Math.pow;n.fromString=u,n.fromValue=o;var d=4294967296,c=d*d,v=c/2,w=r(1<<24),m=r(0);n.ZERO=m;var p=r(0,!0);n.UZERO=p;var y=r(1);n.ONE=y;var b=r(1,!0);n.UONE=b;var N=r(-1);n.NEG_ONE=N;var E=h(-1,2147483647,!1);n.MAX_VALUE=E;var q=h(-1,-1,!0);n.MAX_UNSIGNED_VALUE=q;var _=h(0,-2147483648,!1);n.MIN_VALUE=_;var B=n.prototype;B.toInt=function(){return this.unsigned?this.low>>>0:this.low},B.toNumber=function(){return this.unsigned?(this.high>>>0)*d+(this.low>>>0):this.high*d+(this.low>>>0)},B.toString=function(t){if((t=t||10)<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(_)){var i=s(t),n=this.div(i),e=n.mul(i).sub(this);return n.toString(t)+e.toInt().toString(t)}return"-"+this.neg().toString(t)}for(var r=s(a(t,6),this.unsigned),h=this,u="";;){var o=h.div(r),g=h.sub(o.mul(r)).toInt()>>>0,f=g.toString(t);if(h=o,h.isZero())return f+u;for(;f.length<6;)f="0"+f;u=""+f+u}},B.getHighBits=function(){return this.high},B.getHighBitsUnsigned=function(){return this.high>>>0},B.getLowBits=function(){return this.low},B.getLowBitsUnsigned=function(){return this.low>>>0},B.getNumBitsAbs=function(){if(this.isNegative())return this.eq(_)?64:this.neg().getNumBitsAbs();for(var t=0!=this.high?this.high:this.low,i=31;i>0&&0==(t&1<<i);i--);return 0!=this.high?i+33:i+1},B.isZero=function(){return 0===this.high&&0===this.low},B.eqz=B.isZero,B.isNegative=function(){return!this.unsigned&&this.high<0},B.isPositive=function(){return this.unsigned||this.high>=0},B.isOdd=function(){return 1==(1&this.low)},B.isEven=function(){return 0==(1&this.low)},B.equals=function(t){return e(t)||(t=o(t)),(this.unsigned===t.unsigned||this.high>>>31!=1||t.high>>>31!=1)&&(this.high===t.high&&this.low===t.low)},B.eq=B.equals,B.notEquals=function(t){return!this.eq(t)},B.neq=B.notEquals,B.ne=B.notEquals,B.lessThan=function(t){return this.comp(t)<0},B.lt=B.lessThan,B.lessThanOrEqual=function(t){return this.comp(t)<=0},B.lte=B.lessThanOrEqual,B.le=B.lessThanOrEqual,B.greaterThan=function(t){return this.comp(t)>0},B.gt=B.greaterThan,B.greaterThanOrEqual=function(t){return this.comp(t)>=0},B.gte=B.greaterThanOrEqual,B.ge=B.greaterThanOrEqual,B.compare=function(t){if(e(t)||(t=o(t)),this.eq(t))return 0;var i=this.isNegative(),n=t.isNegative();return i&&!n?-1:!i&&n?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1},B.comp=B.compare,B.negate=function(){return!this.unsigned&&this.eq(_)?_:this.not().add(y)},B.neg=B.negate,B.add=function(t){e(t)||(t=o(t));var i=this.high>>>16,n=65535&this.high,r=this.low>>>16,s=65535&this.low,u=t.high>>>16,g=65535&t.high,f=t.low>>>16,l=65535&t.low,a=0,d=0,c=0,v=0;return v+=s+l,c+=v>>>16,v&=65535,c+=r+f,d+=c>>>16,c&=65535,d+=n+g,a+=d>>>16,d&=65535,a+=i+u,a&=65535,h(c<<16|v,a<<16|d,this.unsigned)},B.subtract=function(t){return e(t)||(t=o(t)),this.add(t.neg())},B.sub=B.subtract,B.multiply=function(t){if(this.isZero())return m;if(e(t)||(t=o(t)),g){return h(g.mul(this.low,this.high,t.low,t.high),g.get_high(),this.unsigned)}if(t.isZero())return m;if(this.eq(_))return t.isOdd()?_:m;if(t.eq(_))return this.isOdd()?_:m;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(w)&&t.lt(w))return s(this.toNumber()*t.toNumber(),this.unsigned);var i=this.high>>>16,n=65535&this.high,r=this.low>>>16,u=65535&this.low,f=t.high>>>16,l=65535&t.high,a=t.low>>>16,d=65535&t.low,c=0,v=0,p=0,y=0;return y+=u*d,p+=y>>>16,y&=65535,p+=r*d,v+=p>>>16,p&=65535,p+=u*a,v+=p>>>16,p&=65535,v+=n*d,c+=v>>>16,v&=65535,v+=r*a,c+=v>>>16,v&=65535,v+=u*l,c+=v>>>16,v&=65535,c+=i*d+n*a+r*l+u*f,c&=65535,h(p<<16|y,c<<16|v,this.unsigned)},B.mul=B.multiply,B.divide=function(t){if(e(t)||(t=o(t)),t.isZero())throw Error("division by zero");if(g){if(!this.unsigned&&-2147483648===this.high&&-1===t.low&&-1===t.high)return this;return h((this.unsigned?g.div_u:g.div_s)(this.low,this.high,t.low,t.high),g.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?p:m;var i,n,r;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return p;if(t.gt(this.shru(1)))return b;r=p}else{if(this.eq(_)){if(t.eq(y)||t.eq(N))return _;if(t.eq(_))return y;return i=this.shr(1).div(t).shl(1),i.eq(m)?t.isNegative()?y:N:(n=this.sub(t.mul(i)),r=i.add(n.div(t)))}if(t.eq(_))return this.unsigned?p:m;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();r=m}for(n=this;n.gte(t);){i=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var u=Math.ceil(Math.log(i)/Math.LN2),f=u<=48?1:a(2,u-48),l=s(i),d=l.mul(t);d.isNegative()||d.gt(n);)i-=f,l=s(i,this.unsigned),d=l.mul(t);l.isZero()&&(l=y),r=r.add(l),n=n.sub(d)}return r},B.div=B.divide,B.modulo=function(t){if(e(t)||(t=o(t)),g){return h((this.unsigned?g.rem_u:g.rem_s)(this.low,this.high,t.low,t.high),g.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))},B.mod=B.modulo,B.rem=B.modulo,B.not=function(){return h(~this.low,~this.high,this.unsigned)},B.and=function(t){return e(t)||(t=o(t)),h(this.low&t.low,this.high&t.high,this.unsigned)},B.or=function(t){return e(t)||(t=o(t)),h(this.low|t.low,this.high|t.high,this.unsigned)},B.xor=function(t){return e(t)||(t=o(t)),h(this.low^t.low,this.high^t.high,this.unsigned)},B.shiftLeft=function(t){return e(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?h(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):h(0,this.low<<t-32,this.unsigned)},B.shl=B.shiftLeft,B.shiftRight=function(t){return e(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?h(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):h(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},B.shr=B.shiftRight,B.shiftRightUnsigned=function(t){if(e(t)&&(t=t.toInt()),0===(t&=63))return this;var i=this.high;if(t<32){return h(this.low>>>t|i<<32-t,i>>>t,this.unsigned)}return 32===t?h(i,0,this.unsigned):h(i>>>t-32,0,this.unsigned)},B.shru=B.shiftRightUnsigned,B.shr_u=B.shiftRightUnsigned,B.toSigned=function(){return this.unsigned?h(this.low,this.high,!1):this},B.toUnsigned=function(){return this.unsigned?this:h(this.low,this.high,!0)},B.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()},B.toBytesLE=function(){var t=this.high,i=this.low;return[255&i,i>>>8&255,i>>>16&255,i>>>24,255&t,t>>>8&255,t>>>16&255,t>>>24]},B.toBytesBE=function(){var t=this.high,i=this.low;return[t>>>24,t>>>16&255,t>>>8&255,255&t,i>>>24,i>>>16&255,i>>>8&255,255&i]},n.fromBytes=function(t,i,e){return e?n.fromBytesLE(t,i):n.fromBytesBE(t,i)},n.fromBytesLE=function(t,i){return new n(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,i)},n.fromBytesBE=function(t,i){return new n(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],i)}}])});

global.Long = module.exports;
/* eslint-disable */ (() => {
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/classes/binary-parser [rev. #1]

if (typeof Long === 'undefined') {
	global.Long = require('long');
}

class BinaryParser {
  constructor(bigEndian, allowExceptions) {
    this.bigEndian = bigEndian;
    this.allowExceptions = allowExceptions;
  }

  encodeFloat(number, precisionBits, exponentBits) {
		var bias = Math.pow(2, exponentBits - 1) - 1, minExp = -bias + 1, maxExp = bias, minUnnormExp = minExp - precisionBits,
		status = isNaN(n = parseFloat(number)) || n == -Infinity || n == +Infinity ? n : 0,
		exp = 0, len = 2 * bias + 1 + precisionBits + 3, bin = new Array(len),
		signal = (n = status !== 0 ? 0 : n) < 0, n = Math.abs(n), intPart = Math.floor(n), floatPart = n - intPart,
		i, lastBit, rounded, j, result;
		for(i = len; i; bin[--i] = 0);
		for(i = bias + 2; intPart && i; bin[--i] = intPart % 2, intPart = Math.floor(intPart / 2));
		for(i = bias + 1; floatPart > 0 && i; (bin[++i] = ((floatPart *= 2) >= 1) - 0) && --floatPart);
		for(i = -1; ++i < len && !bin[i];);
		if(bin[(lastBit = precisionBits - 1 + (i = (exp = bias + 1 - i) >= minExp && exp <= maxExp ? i + 1 : bias + 1 - (exp = minExp - 1))) + 1]){
			if(!(rounded = bin[lastBit]))
				for(j = lastBit + 2; !rounded && j < len; rounded = bin[j++]);
			for(j = lastBit + 1; rounded && --j >= 0; (bin[j] = !bin[j] - 0) && (rounded = 0));
		}
		for(i = i - 2 < 0 ? -1 : i - 3; ++i < len && !bin[i];);

		if ((exp = bias + 1 - i) >= minExp && exp <= maxExp ? ++i : exp < minExp &&
			(exp != bias + 1 - len && exp < minUnnormExp && this.warn("encodeFloat::float underflow"), i = bias + 1 - (exp = minExp - 1)));
		if ((intPart || status !== 0) && (this.warn(intPart ? "encodeFloat::float overflow" : "encodeFloat::" + status),
			exp = maxExp + 1, i = bias + 2, status == -Infinity ? signal = 1 : isNaN(status) && (bin[i] = 1)));
    for(n = Math.abs(exp + bias), j = exponentBits + 1, result = ""; --j; result = (n % 2) + result, n = n >>= 1);
    let r;
		for(n = 0, j = 0, i = (result = (signal ? "1" : "0") + result + bin.slice(i, i + precisionBits).join("")).length, r = [];
			i; n += (1 << j) * result.charAt(--i), j == 7 && (r[r.length] = String.fromCharCode(n), n = 0), j = (j + 1) % 8);
		r[r.length] = n ? String.fromCharCode(n) : "";
		return (this.bigEndian ? r.reverse() : r).join("");
	}

  encodeInt(number, bits, signed){
		var max = Math.pow(2, bits), r = [];
		(number >= max || number < -(max >> 1)) && this.warn("encodeInt::overflow") && (number = 0);
		number < 0 && (number += max);
		for(; number; r[r.length] = String.fromCharCode(number % 256), number = Math.floor(number / 256));
		for(bits = -(-bits >> 3) - r.length; bits--; r[r.length] = "\0");
		return (this.bigEndian ? r.reverse() : r).join("");
	}
	decodeFloat(data, precisionBits, exponentBits){
		var b = ((b = new Buffer(this.bigEndian, data)).checkBuffer(precisionBits + exponentBits + 1), b),
			bias = Math.pow(2, exponentBits - 1) - 1, signal = b.readBits(precisionBits + exponentBits, 1),
			exponent = b.readBits(precisionBits, exponentBits), significand = 0,
			divisor = 2, curByte = b.buffer.length + (-precisionBits >> 3) - 1,
			byteValue, startBit, mask;
		do
			for(byteValue = b.buffer[ ++curByte ], startBit = precisionBits % 8 || 8, mask = 1 << startBit;
				mask >>= 1; (byteValue & mask) && (significand += 1 / divisor), divisor *= 2);
		while(precisionBits -= startBit);
		return exponent == (bias << 1) + 1 ? significand ? NaN : signal ? -Infinity : +Infinity
			: (1 + signal * -2) * (exponent || significand ? !exponent ? Math.pow(2, -bias + 1) * significand
			: Math.pow(2, exponent - bias) * (1 + significand) : 0);
	}
	decodeInt(data, bits, signed){
		var b = new Buffer(this.bigEndian, data), x = b.readBits(0, bits), max = Math.pow(2, bits);
		return signed && x >= max / 2 ? x - max : x;
  }
  warn(msg){
		if(this.allowExceptions)
			throw new Error(msg);
		return 1;
	}
	toSmall(data){return this.decodeInt(data, 8, true);}
	fromSmall(number){return this.encodeInt(number, 8, true);}
	toByte(data){return this.decodeInt(data, 8, false);}
	fromByte(number){return this.encodeInt(number, 8, false);}
	toShort(data){return this.decodeInt(data, 16, true);}
	fromShort(number){return this.encodeInt(number, 16, true);}
	toWord(data){return this.decodeInt(data, 16, false);}
	fromWord(number){return this.encodeInt(number, 16, false);}
	toInt(data){return this.decodeInt(data, 32, true);}
	fromInt(number){return this.encodeInt(number, 32, true);}
	toDWord(data){return this.decodeInt(data, 32, false);}
	fromDWord(number){return this.encodeInt(number, 32, false);}
	toFloat(data){return this.decodeFloat(data, 23, 8);}
	fromFloat(number){return this.encodeFloat(number, 23, 8);}
	toDouble(data){return this.decodeFloat(data, 52, 11);}
	fromDouble(number){return this.encodeFloat(number, 52, 11);}
};
	class Buffer {
  constructor(bigEndian, buffer) {
    this.bigEndian = bigEndian || 0;
    this.buffer = [];
    this.setBuffer(buffer);
  }
  readBits(start, length){
    //shl fix: Henri Torgemane ~1996 (compressed by Jonas Raoni)
    function shl(a, b){
      for(++b; --b; a = ((a %= 0x7fffffff + 1) & 0x40000000) == 0x40000000 ? a * 2 : (a - 0x40000000) * 2 + 0x7fffffff + 1);
      return a;
    }
    if(start < 0 || length <= 0)
      return 0;
    this.checkBuffer(start + length);
    for(var offsetLeft, offsetRight = start % 8, curByte = this.buffer.length - (start >> 3) - 1,
      lastByte = this.buffer.length + (-(start + length) >> 3), diff = curByte - lastByte,
      sum = ((this.buffer[ curByte ] >> offsetRight) & ((1 << (diff ? 8 - offsetRight : length)) - 1))
      + (diff && (offsetLeft = (start + length) % 8) ? (this.buffer[ lastByte++ ] & ((1 << offsetLeft) - 1))
      << (diff-- << 3) - offsetRight : 0); diff; sum += shl(this.buffer[ lastByte++ ], (diff-- << 3) - offsetRight)
    );
    return sum;
  };
  setBuffer(data){
    if(data){
      for(var l, i = l = data.length, b = this.buffer = new Array(l); i; b[l - i] = data.charCodeAt(--i));
      this.bigEndian && b.reverse();
    }
  };
  hasNeededBits(neededBits){
    return this.buffer.length >= -(-neededBits >> 3);
  };
  checkBuffer(neededBits){
    if(!this.hasNeededBits(neededBits))
      throw new Error("checkBuffer::missing bytes");
  };
}
const binaryParser = new BinaryParser(true, false);

const i16Arr = new Int16Array(1);
const i32Arr = new Int32Array(1);
class StreamDecoder {
  constructor(buffer) {
    this.buffer = buffer;
    this.pos = 0;
  }

	reset() {
		this.pos = 0;
	}

  getIB() {
    return this.buffer[this.pos++] === 1;
	}

  getI8() {
		const r = this.buffer[this.pos++];
    if (r > 127) {
      return r - 256;
    }
    return r;
	}

	getI16() {
		i16Arr[0] = (this.buffer[this.pos++] << 8) + (this.buffer[this.pos++]);
    return i16Arr[0];
	}

  getI32() {
    i32Arr[0] = (this.buffer[this.pos++] << 24) + (this.buffer[this.pos++] << 16) + (this.buffer[this.pos++] << 8) + (this.buffer[this.pos++]);
    return i32Arr[0];
	}

  getI64() {
    const high = this.getI32();
    const low = this.getI32();
    return new Long(low, high);
  }

	getF32() {
    const str = `${String.fromCharCode(this.buffer[this.pos++])}${String.fromCharCode(this.buffer[this.pos++])}${String.fromCharCode(this.buffer[this.pos++])}${String.fromCharCode(this.buffer[this.pos++])}`;
		return binaryParser.toFloat(str);
	}

  getF64() {
		const b = this.buffer;
		const p = this.pos;
    const str = `${
			String.fromCharCode(b[p])
		}${String.fromCharCode(b[p + 1])
		}${String.fromCharCode(b[p + 2])
		}${String.fromCharCode(b[p + 3])
		}${String.fromCharCode(b[p + 4])
		}${String.fromCharCode(b[p + 5])
		}${String.fromCharCode(b[p + 6])
		}${String.fromCharCode(b[p + 7])}`;
		this.pos = p + 8;
		return binaryParser.toDouble(str);
  }

  skip(numBits) {
    this.pos += numBits;
  }

  getString() {
      const codePoints = [];
      const len = this.getI32();
      for (let i = 0; i < len; i += 1) {
         // const exists = this.getI8();
         // if (exists === 1) {
          codePoints.push(this.getI32());
         // }
      }
      return String.fromCodePoint(...codePoints);
  }

  getBufferShort() {
    const ret = [];
    const len = this.getI32();
    for (let i = 0; i < len; i += 1) {
      ret.push(this.getI16());
    }
    return ret;
  }

  getBufferInt() {
    const ret = [];
    const len = this.getI32();
    for (let i = 0; i < len; i += 1) {
      ret.push(this.getI32());
    }
    return ret;
  }

  getBufferFloat() {
    const ret = [];
    const len = this.getI32();
    for (let i = 0; i < len; i += 1) {
      ret.push(this.getF32());
    }
    return ret;
  }

  getArray(entryReader) {
    const ret = [];
    const len = this.getI32();
    console.log('getArr, len:', len);
    for (let i = 0; i < len; i += 1) {
      if (this.getIB()) {
        ret.push(entryReader());
      } else {
        ret.push(null);
      }
    }
    return ret;
  }

  getList(entryReader) {
    const ret = this.getArray(entryReader);
    const pos = this.getI32();
    return ret.slice(0, pos);
  }
}

class StreamEncoder {
  constructor(buffer) {
    this.buffer = buffer;
    this.pos = 0;
	}

	reset() {
		this.pos = 0;
	}

  addIB(val) {
    this.buffer[this.pos++] = val ? 1 : 0;
  }

  addI8(val) {
    this.buffer[this.pos++] = val & 0xff;
  }

  addI16(val) {
    const b = this.buffer;
    const p = this.pos;
    b[p] = (val >> 8) & 0xff;
    b[p + 1] = val & 0xff;
    this.pos = p + 2;
  }

  addI32(val) {
    const b = this.buffer;
    const p = this.pos;
    b[p] = (val >> 24) & 0xff;
    b[p + 1] = (val >> 16) & 0xff;
    b[p + 2] = (val >> 8) & 0xff;
    b[p + 3] = val & 0xff;
    this.pos = p + 4;
  }

  addI64(val) {
		val = _capl(val);
    this.addI32(val.high);
    this.addI32(val.low);
  }

  addF32(val) {
    const bytes = binaryParser.fromFloat(val);

    const b = this.buffer;
    const p = this.pos;
    b[p] = bytes.codePointAt(0);
    b[p + 1] = bytes.codePointAt(1);
    b[p + 2] = bytes.codePointAt(2);
    b[p + 3] = bytes.codePointAt(3);
    this.pos = p + 4;
  }

  addF64(val) {
    const bytes = binaryParser.fromDouble(val);

		const b = this.buffer;
		const p = this.pos;
    b[p] = bytes.codePointAt(0);
    b[p + 1] = bytes.codePointAt(1);
    b[p + 2] = bytes.codePointAt(2);
		b[p + 3] = bytes.codePointAt(3);

    b[p + 4] = bytes.codePointAt(4);
    b[p + 5] = bytes.codePointAt(5);
    b[p + 6] = bytes.codePointAt(6);
		b[p + 7] = bytes.codePointAt(7);

		this.pos = p + 8;
	}

	addString(str) {
		const len = str.length;
		this.addI32(len);
		for (let i = 0; i < len; i += 1) {
			this.addI32(str.codePointAt(i));
		}
	}

  addBufferByte(buf) {
    const len = buf.length;
    this.addI32(len);
		for (let i = 0; i < len; i += 1) {
			this.addI8(buf[i]);
		}
  }
  addBufferShort(buf) {
    const len = buf.length;
    this.addI32(len);
		for (let i = 0; i < len; i += 1) {
			this.addI16(buf[i]);
		}
  }
  addBufferFloat(buf) {
    const len = buf.length;
    this.addI32(len);
		for (let i = 0; i < len; i += 1) {
			this.addF32(buf[i]);
		}
  }
}

// [ [ 5, 72, 101, 108, 108, 111 ] ]
//    len	 H   e    l     l   o
function _strToKl(strVal) {
	const len = strVal.length;
	const arr = Array(1 + len);
	arr[0] = len;
	for (let i = 0; i < len; ++i) {
		arr[i + 1] = strVal.codePointAt(i);
	}
	return [arr];
}

function _bufferEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 1; i < a.length; ++i) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}


function _doLog(...msg) {
	if (msg.length > 0 && typeof PRETTY === 'boolean' && PRETTY) {
		console.log('\x1b[2m%s\x1b[0m', ...msg);
	} else {
		console.log(...msg);
	}
}

const FlushType = {
  RAW: -9, STRING: -8, DOUBLE: -7, FLOAT: -6,
  LONG: -5, INT: -4, SHORT: -3, BYTE: -2, BOOL: -1
}

class I$O {
	constructor(binding) {
		this.binding = binding;

		// Output writer & reader
		this.ow = new StreamEncoder(new Uint8Array(32 * 1024 * 1024));
		this.or = new StreamDecoder(this.ow.buffer);
		// Input writer & reader
		this.iw = new StreamEncoder(new Uint8Array(32 * 1024 * 1024));
		this.ir = new StreamDecoder(this.iw.buffer);
	}

	flushPrimitive(mthId, srcLen) {
		const src = this.or;
		switch (mthId) {
			case FlushType.RAW: { _doLog(`--> [x${srcLen - 4}]`, src.buffer.slice(4, srcLen).toString()); break; }
			case FlushType.STRING: {
				let str;
				if (typeof window === 'undefined') {
						const { StringDecoder } = require('string_decoder');
						const dec = new StringDecoder('utf-8');
						str = dec.write(src.buffer.slice(0, srcLen));
				} else {
						str = new TextDecoder("utf-8").decode(src.buffer.slice(0, srcLen)).replace('\n', '\n          ');
				}
				_doLog(`--> [s${srcLen < 10 ? '  ' : (srcLen < 100 ? ' ' : '')}${srcLen}]`, str);
				break;
			}

			case FlushType.LONG: {
				const val = src.getI64();
				_doLog('--> [ L]', val.toString());
				break;
			}
			case FlushType.INT: {
				const val = src.getI32();
				_doLog('--> [ i]', val);
				break;
			}
			case FlushType.BYTE: {
				const val = src.getI8();
				_doLog('--> [ b]', val);
				break;
			}
			case FlushType.FLOAT: {
				const val = src.getF32();
				_doLog('--> [ f]', val);
				break;
			}
			case FlushType.SHORT: {
				const val = src.getI16();
				_doLog('--> [ s]', val);
				break;
			}
			case FlushType.BOOL: {
				const val = src.getI8();
				_doLog('--> [ o]', val === 1 ? true : false);
				break;
			}
			case FlushType.DOUBLE: {
				const val = src.getF64();
				_doLog('--> [ d]', val);
				break;
			}

			default: {
				console.error('TODO output type', mthId);
				process.exit(3);
			}
		}
		src.reset();
	}

	async flush(mthId) {
		const srcLen = this.ow.pos;

		this.ow.reset();
		const src = this.or;
		src.reset();
		if (mthId < 0) {
			this.flushPrimitive(mthId, srcLen);
			return;
		}

		const dst = this.iw;
		dst.reset();
		await this.binding(mthId, src, dst, srcLen);
		this.ir.reset();
	}

	flushDirect(mthId) {
		const srcLen = this.ow.pos;

		this.ow.reset();
		const src = this.or;
		src.reset();
		if (mthId < 0) {
			this.flushPrimitive(mthId, srcLen);
			return;
		}

		const dst = this.iw;
		dst.reset();
		this.binding(mthId, src, dst, srcLen);
		this.ir.reset();
	}
}

function gub(arr, pos) {
  const b = arr[pos];
  return b < 0 ? (b + 256) : b;
}

function snb(arr, pos, val) {
	arr[pos] = val;
}
function gnb(arr, pos) {
	return arr[pos];
}

function gnf(arr, pos) {
  const str = `${String.fromCharCode(arr[pos])}${String.fromCharCode(arr[pos + 1])}${String.fromCharCode(arr[pos + 2])}${String.fromCharCode(arr[pos + 3])}`;
  return binaryParser.toFloat(str);
}

function snf(arr, pos, val) {
  const bytes = binaryParser.fromFloat(val);

  arr[pos + 0] = bytes.codePointAt(0);
  arr[pos + 1] = bytes.codePointAt(1);
  arr[pos + 2] = bytes.codePointAt(2);
	arr[pos + 3] = bytes.codePointAt(3);
}

function gni(arr, pos) {
  return (gub(arr, pos) << 24) | (gub(arr, pos + 1) << 16) | (gub(arr, pos + 2) << 8) | gub(arr, pos + 3);
}

function gns(arr, pos) {
  return (gub(arr, pos) << 8) | gub(arr, pos + 1);
}

function sns(arr, pos, val) {
  arr[pos] = (val >> 8) & 0xFF;
  arr[pos + 1] = val & 0xFF;
}

const _clamperF64 = new Float64Array(2);
function _capd(val) {
	_clamperF64[0] = val;
	return _clamperF64[0];
}

const _intBitsI = new Int32Array(2);
function _bitsint(val) {
	_intBitsI[0] = val;
	return new Float32Array(_intBitsI.buffer)[0];
}

const _intBitsF = new Float32Array(2);
function _bitsFtoI(val) {
	_intBitsF[0] = val;
	return new Int32Array(_intBitsF.buffer)[0];
}

const _longBitsD = new Float64Array(2);
function _bitsDtoL(val) {
	_longBitsD[0] = val;
	const buf = new Int32Array(_longBitsD.buffer);
	return new Long(buf[0], buf[1]);
}

const _doubleBitsI = new Int32Array(2);
function _bitsdouble(val) {
	const capped = _capl(val);
	_doubleBitsI[0] = capped.low;
	_doubleBitsI[1] = capped.high;
	return new Float64Array(_doubleBitsI.buffer)[0];
}

const _clamperI32 = new Int32Array(2);
function _capi(val) {
	_clamperI32[0] = val;
	return _clamperI32[0];
}
function _capl(val) {
	if (typeof val === 'number') {
			return Long.fromNumber(val);
	}
return val;
}
function _capo(val) {
	return !!val;
}
const _clamperI8 = new Int8Array(2);
function _capb(val) {
	_clamperI8[0] = val;
	return _clamperI8[0];
}

const _clamperI16 = new Int16Array(2);
function _caps(val) {
	_clamperI16[0] = val;
	return _clamperI16[0];
}

const _clamperF32 = new Float32Array(2);
function _capf(val) {
	_clamperF32[0] = val;
	return _clamperF32[0];
}

let identityHashIdGenerator = 0;
function _identityHash(obj) {
  if (Array.isArray(obj)) {
    if (!obj[-1]) {
      obj[-1] = identityHashIdGenerator++;
    }
    return obj[-1];
  }
  return _capi(+obj);
}

function sni(arr, pos, val) {
  arr[pos] = (val >> 24) & 0xFF;
  arr[pos + 1] = (val >> 16) & 0xFF;
  arr[pos + 2] = (val >> 8) & 0xFF;
  arr[pos + 3] = val & 0xFF;
}

function gnl(arr, pos, readFirst) {
  let high;
  if (readFirst) {
    high = gni(arr, pos);
  } else {
    high = (gub(arr, pos + 1) << 16) | (gub(pos + 2) << 8) | gub(arr, pos + 3);
  }
  const low = gni(arr, pos + 4);

  return new Long(low, high);
}

function snl(arr, pos, val, head) {
  sni(arr, pos, val.high);
  if (head) {
    arr[pos] = head;
  }
  sni(arr, pos + 4, val.low);
}

function performJsEscape(src) {
	return src.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\"/g, "\\\"");
}



 // === BOILERPLATE END

  function m256(_i, _a0) {// 99.bouncelam$500~ (Entry<factory.Game.BoardPoint, bool> ent))
   let _4 = _a0;
   m257(_i[1],_4) /* 36.loclam$lambda<void, Entry<factory.Game.BoardPoint, bool>>$500~ (Entry<factory.Game.BoardPoint, bool> ent) */;
   return undefined;
  }
  function m257(_i, _a0) {// 36.loclam$lambda<void, Entry<factory.Game.BoardPoint, bool>>$500~ (Entry<factory.Game.BoardPoint, bool> ent))
   let _4 = m250(_a0,) /* Entry<factory.Game.BoardPoint, bool>.getKey */;
   let _5 = m252(_a0,) /* Entry<factory.Game.BoardPoint, bool>.getValue */;
   m84(_i,_4, _5) /* Map<factory.Game.BoardPoint, bool>~.put~ */;
  }
  function m258(_i, _a0, _a1) {// lamcall84)
   m176(_i,_a0, _a1) /* 85.bouncelam$500~ (String? val, int idx) */;
   return undefined;
  }
  function m3() {// factory.Game.SpecialTileType.getSOURCEG)
   return (1);
  }
  function m259(_i, _a0) {// array<String>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m4() {// factory.Game.SpecialTileType.getSINK)
   return (3);
  }
  function m260(_i, _a0, _a1) {// lamcall86)
   m182(_i,_a0, _a1) /* 87.bouncelam$500~ (int? val, int idx) */;
   return undefined;
  }
  function m5(_a0) {// factory.Game~.NewManual)
   let _1 = [_a0, (0), (0), (0), (3), (false), (0), (0), (0), (0)];
   return _1;
  }
  function m261(_i, _a0) {// array<int>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m262(_i, _a0, _a1) {// Buffer<int>~.set~)
   if (_a0 >= 0 && _a0 < _i.length - 1) _i[1 + _a0] = _a1;
   return undefined;
  }
  function m263(_i, _a0) {// array<int>~.MakeCopyM)
   let _4 = _i[0];
   let _3 = m179(_4) /* array<int>~.NewManual */;
   let _5 = _i;
   let _6 = _3;
   m163(_a0,_5, _6) /* Map<any, any>~.put~ */;
   let _7 = 0;
   let _8 = (_7<_i[0]);
   while (_8) {
    let _9 = _7;
    let _12 = m261(_i,_9) /* array<int>~.get */;
    let _11 = _12 === null;
    let _10;
    if (_11) {
     _11 = false;
     _10 = 0;
    }
    else {
     _11 = true;
     _10 = _12;
    }
    if (_11) {
     let _13 = _7;
     let _14 = _10;
     m184(_3,_13, _14) /* array<int>~.set~ */;
    }
    _7 = _capi(_7+(1));
    let _16 = (_7<_i[0]);
    _8 = _16;
   }
   return _3;
  }
  function m264(_i, _a0, _a1) {// lamcall71)
   let _4 = m93(_i,_a0, _a1) /* 72.bouncelam$500 (int sum, String add) */;
   return _4;
  }
  function m265(_i, _a0) {// lamcall74)
   m97(_i,_a0) /* 75.bouncelam$500 (String part) */;
   return undefined;
  }
  function m266(_i, _a0) {// Buffer<int>~.MakeCopyM)
   let _3 = [..._i];
   let _4 = _i;
   let _5 = _3;
   m163(_a0,_4, _5) /* Map<any, any>~.put~ */;
   return _3;
  }
  function m11() {// List<factory.Game.BoardPoint>~.NewManual)
   let _2 = m54((5)) /* array<factory.Game.BoardPoint>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m267(_i, _a0) {// array<factory.Game.BoardPoint>~.find)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _5 = m83(_i,_6) /* array<factory.Game.BoardPoint>~.get */;
    let _7 = _5;
    let _8 = m311(_a0,_7) /* lamcall100 */;
    if (_8) {
     return _5;
    }
    _3 = _capi(_3+(1));
    let _10 = (_3<_i[0]);
    _4 = _10;
   }
   let _11 = null;
   return _11;
  }
  function m12() {// Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.NewManual)
   let _2 = m55((16)) /* array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m268(_i, _a0) {// 101.bouncelam$500 (factory.Game.BoardPoint? raw))
   let _5 = _a0;
   let _6 = _i[2];
   let _7 = m269(_i[1],_5, _6) /* 34.loclam$lambda<bool, factory.Game.BoardPoint?>$500 (factory.Game.BoardPoint? raw, lambda<bool, factory.Game.BoardPoint> predicate) */;
   return _7;
  }
  function m269(_i, _a0, _a1) {// 34.loclam$lambda<bool, factory.Game.BoardPoint?>$500 (factory.Game.BoardPoint? raw, lambda<bool, factory.Game.BoardPoint> predicate))
   let _6 = _a0 === null;
   let _5;
   if (_6) {
    _6 = false;
    _5 = null;
   }
   else {
    _6 = true;
    _5 = _a0;
   }
   if (_6) {
    let _7 = _5;
    let _8 = m312(_a1,_7) /* lamcall76 */;
    return _8;
   }
   return (false);
  }
  function m14(_a0, _a1) {// factory.Game.BoardPoint.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m270(_i) {// List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.getSize)
   return _i[1];
  }
  function m15() {// factory.Game.SpecialTileType.getSOURCER)
   return (0);
  }
  function m271(_i, _a0) {// List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.get)
   let _4 = _a0;
   let _5 = m313(_i[0],_4) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.get */;
   return _5;
  }
  function m16(_i, _a0, _a1) {// Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.put~)
   let _6 = m58(_a0,) /* factory.Game.BoardPoint.hashCode */;
   let _5 = m57(_6) /* int.sabs */;
   let _8 = m59(_i[0],) /* array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.getLength */;
   let _7 = _capi(_5%_8);
   let _10 = _7;
   let _11 = m60(_i[0],_10) /* array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.get */;
   let _13 = _11 === null;
   let _12;
   if (_13) {
    let _14 = _7;
    _12 = m61(_i,_14) /* Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.putNew~ */;
   }
   else {
    _12 = _11;
   }
   let _9 = _12;
   let _16 = _a0;
   let _17 = _a1;
   let _15 = m62(_9,_16, _17) /* Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~.put~ */;
   let _18 = _15 === null;
   _18 = (_18===(false));
   let _32 = (_18===(false));
   if (_32) {
    _i[1] = _capi(_i[1]+(1));
    let _23 = m59(_i[0],) /* array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.getLength */;
    let _22 = _capi(_23*(2));
    let _31 = (_i[1]>=_22);
    if (_31) {
     let _26 = (_22<(0));
     if (_26) {
     }
     else {
      let _27 = _i[0];
      let _28 = _22;
      _i[0] = m55(_28) /* array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.NewManual */;
      _i[1] = 0;
      let _30 = [(500), _i];
      m63(_27,_30) /* array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.forEachEx */;
     }
    }
   }
   return _15;
  }
  function m272(_i) {// Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>.getKey)
   return _i[0];
  }
  function m17(_a0, _a1, _a2) {// factory.Game.ColorRichness.NewManual)
   let _3 = [_a0, _a1, _a2];
   return _3;
  }
  function m273(_i) {// Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>.getValue)
   return _i[1];
  }
  function m18(_i, _a0) {// List<factory.Game.BoardPoint>~.add~)
   let _4 = m66(_i[0],) /* array<factory.Game.BoardPoint>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m66(_i[0],) /* array<factory.Game.BoardPoint>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m54(_8) /* array<factory.Game.BoardPoint>~.NewManual */;
    let _10 = [(500), _i, _5];
    m67(_i[0],_10) /* array<factory.Game.BoardPoint>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m70(_i[0],_12, _13) /* array<factory.Game.BoardPoint>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m274(_i, _a0, _a1) {// lamcall88)
   m207(_i,_a0, _a1) /* 89.bouncelam$500~ (factory.Game.ColorRichness? val, int idx) */;
   return undefined;
  }
  function m19() {// factory.Game.SpecialTileType.getSOURCEB)
   return (2);
  }
  function m275(_i, _a0) {// array<factory.Game.ColorRichness>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m20() {// factory.Game.SpecialTileType.getMERGER)
   return (4);
  }
  function m276() {// Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.NewManual)
   let _1 = m314() /* List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m21(_a0) {// int.getPtr)
   let _1 = _a0;
   let _2 = m71(_1) /* int~.NewManual */;
   return _2;
  }
  function m277(_i, _a0, _a1) {// array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m278(_a0, _a1) {// Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m279(_i) {// List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.getLen)
   return _i[1];
  }
  function m280(_i, _a0, _a1) {// List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.set~)
   let _6 = (_a0>=_i[1]);
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _7 = _a0;
   let _8 = _a1;
   let _9 = m315(_i[0],_7, _8) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.set~ */;
   return _9;
  }
  function m25() {// factory.Game.Side.getBOTTOM)
   return (2);
  }
  function m281(_i, _a0) {// List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.add~)
   let _4 = m316(_i[0],) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m316(_i[0],) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m317(_8) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.NewManual */;
    let _10 = [(500), _i, _5];
    m318(_i[0],_10) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m315(_i[0],_12, _13) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m26() {// factory.Game.Side.getLEFT)
   return (3);
  }
  function m282(_i, _a0) {// lamcall90)
   m213(_i,_a0) /* 91.bouncelam$500~ (Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~ oldEnt) */;
   return undefined;
  }
  function m27() {// factory.Game.Side.getTOP)
   return (0);
  }
  function m283(_i, _a0) {// Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.forEach)
   let _3 = _a0;
   m321(_i[0],_3) /* List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.forEach */;
  }
  function m28() {// factory.Game.Side.getRIGHT)
   return (1);
  }
  function m284(_i, _a0) {// 103.bouncelam$500~ (Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~> ent))
   let _4 = _a0;
   m285(_i[1],_4) /* 42.loclam$lambda<void, Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>$500~ (Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~> ent) */;
   return undefined;
  }
  function m29(_i) {// int~.getValue)
   return _i[0];
  }
  function m285(_i, _a0) {// 42.loclam$lambda<void, Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>$500~ (Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~> ent))
   let _4 = m272(_a0,) /* Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>.getKey */;
   let _5 = m273(_a0,) /* Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>.getValue */;
   m114(_i,_4, _5) /* Map<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.put~ */;
  }
  function m30(_a0) {// SerializationBuilder.makeBetterCopy)
   let _1 = m78() /* Map<any, any>~.NewManual */;
   let _2 = m79(_1,_a0) /* Map<any, any>~.get */;
   let _3 = _2 === null;
   let _4;
   if (_3) {
    _4 = m80(_a0,_1) /* List<factory.Game.BoardPoint>~.MakeCopy */;
   }
   else {
    _4 = _2;
   }
   return _4;
  }
  function m286(_i, _a0) {// array<factory.Game.ColorRichness>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m275(_i,_6) /* array<factory.Game.ColorRichness>~.get */;
    let _7 = _8 === null;
    let _5;
    if (_7) {
     _7 = false;
     _5 = null;
    }
    else {
     _7 = true;
     _5 = _8;
    }
    if (_7) {
     let _9 = _5;
     m322(_a0,_9) /* lamcall92 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m31() {// Set<factory.Game.BoardPoint>~.NewManual)
   let _1 = m81() /* Map<factory.Game.BoardPoint, bool>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m287(_i, _a0) {// int~.set~)
   _i[0] = _a0;
  }
  function m32() {// Map<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.NewManual)
   let _2 = m82((16)) /* array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m33(_i) {// List<factory.Game.BoardPoint>~.getIsNonEmpty)
   let _4 = (_i[1]!==(0));
   return _4;
  }
  function m289(_i, _a0, _a1) {// lamcall94)
   m233(_i,_a0, _a1) /* 95.bouncelam$500~ (Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>? val, int idx) */;
   return undefined;
  }
  function m34(_i) {// List<factory.Game.BoardPoint>~.pop~)
   let _5 = (_i[1]===(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   _i[1] = _capi(_i[1]-(1));
   let _8 = _i[1];
   let _9 = m83(_i[0],_8) /* array<factory.Game.BoardPoint>~.get */;
   let _11 = _9 === null;
   let _10;
   if (_11) {
    return null;
   }
   else {
    _10 = _9;
   }
   let _7 = _10;
   let _12 = _i[1];
   let _13 = m70(_i[0],_12, null) /* array<factory.Game.BoardPoint>~.set~ */;
   let _15 = _13 === null;
   if (_15) {
    return null;
   }
   else {
    let _14 = _13;
   }
   return _7;
  }
  function m290(_i, _a0) {// array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m226(_i,_6) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.get */;
    let _7 = _8 === null;
    let _5;
    if (_7) {
     _7 = false;
     _5 = null;
    }
    else {
     _7 = true;
     _5 = _8;
    }
    if (_7) {
     let _9 = _5;
     m323(_a0,_9) /* lamcall80 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m35(_i, _a0) {// Set<factory.Game.BoardPoint>~.add~)
   let _3 = _a0;
   m84(_i[0],_3, (true)) /* Map<factory.Game.BoardPoint, bool>~.put~ */;
   return undefined;
  }
  function m291(_i, _a0) {// array<Entry<any, any>>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m36() {// StringBuilder~.NewManual)
   let _1 = m85() /* List<String>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m292() {// Entries<any, any>~.NewManual)
   let _1 = m324() /* List<Entry<any, any>>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m37(_i, _a0) {// StringBuilder~.add~)
   let _3 = _a0;
   m86(_i[0],_3) /* List<String>~.add~ */;
   return undefined;
  }
  function m293(_i, _a0, _a1) {// array<Entries<any, any>~>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m38(_i) {// factory.Game.BoardPoint.getX)
   return _i[0];
  }
  function m294(_a0, _a1) {// Entry<any, any>.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m39(_a0) {// int.Stringify)
   let _3 = (_a0===(0));
   if (_3) {
    let _2 = [[1,48]];
    return _2;
   }
   let _4 = m87() /* List<int>~.NewManual */;
   let _5 = (_a0<(0));
   if (_5) {
    _a0 = _capi((0)-_a0);
   }
   let _10 = (_a0<(0));
   if (_10) {
    let _9 = [[11,45,50,49,52,55,52,56,51,54,52,56]];
    return _9;
   }
   let _12 = (_a0>(0));
   while (_12) {
    let _16 = _capi(_a0%(10));
    let _14 = _capi(_16+(48));
    let _18 = _14;
    m88(_4,_18) /* List<int>~.add~ */;
    _a0 = _capi(_a0/(10));
    let _20 = (_a0>(0));
    _12 = _20;
   }
   if (_5) {
    m88(_4,(45)) /* List<int>~.add~ */;
   }
   m89(_4,) /* List<int>~.reverse~ */;
   let _22 = m91(_4) /* SerializationBuilder.makeBetterCopy */;
   let _23 = m90(_22) /* List.toString */;
   return _23;
  }
  function m295(_i) {// List<Entry<any, any>>~.getLen)
   return _i[1];
  }
  function m40(_i) {// factory.Game.BoardPoint.getY)
   return _i[1];
  }
  function m296(_i, _a0, _a1) {// List<Entry<any, any>>~.set~)
   let _6 = (_a0>=_i[1]);
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _7 = _a0;
   let _8 = _a1;
   let _9 = m325(_i[0],_7, _8) /* array<Entry<any, any>>~.set~ */;
   return _9;
  }
  function m41(_i) {// StringBuilder~.getResult)
   let _5 = [(500), _i];
   let _2 = m92(_i[0],(0), _5) /* List<String>~.fold */;
   let _7 = _2;
   let _6 = m95(_7) /* String~.NewManual */;
   let _8 = m71((0)) /* int~.NewManual */;
   let _11 = [(500), _i, _8, _6];
   m96(_i[0],_11) /* List<String>~.forEach */;
   let _12 = m99(_6) /* SerializationBuilder.makeBetterCopy */;
   return _12;
  }
  function m297(_i, _a0) {// List<Entry<any, any>>~.add~)
   let _4 = m326(_i[0],) /* array<Entry<any, any>>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m326(_i[0],) /* array<Entry<any, any>>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m327(_8) /* array<Entry<any, any>>~.NewManual */;
    let _10 = [(500), _i, _5];
    m328(_i[0],_10) /* array<Entry<any, any>>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m325(_i[0],_12, _13) /* array<Entry<any, any>>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m298(_i, _a0) {// lamcall96)
   m243(_i,_a0) /* 97.bouncelam$500~ (Entries<any, any>~ oldEnt) */;
   return undefined;
  }
  function m43(_i, _a0) {// Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.get)
   let _5 = m58(_a0,) /* factory.Game.BoardPoint.hashCode */;
   let _4 = m57(_5) /* int.sabs */;
   let _7 = m59(_i[0],) /* array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.getLength */;
   let _6 = _capi(_4%_7);
   let _9 = _6;
   let _10 = m60(_i[0],_9) /* array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.get */;
   let _12 = _10 === null;
   let _11;
   if (_12) {
    return null;
   }
   else {
    _11 = _10;
   }
   let _8 = _11;
   let _13 = _a0;
   let _14 = m103(_8,_13) /* Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~.get */;
   return _14;
  }
  function m299(_i, _a0) {// Entries<any, any>~.forEach)
   let _3 = _a0;
   m331(_i[0],_3) /* List<Entry<any, any>>~.forEach */;
  }
  function m44(_i, _a0, _a1) {// 54.bouncelam$500~ (factory.Game.BoardPoint newSrc, factory.Game.ColorRichness newColor))
   let _7 = _a0;
   let _8 = _a1;
   let _9 = _i[2];
   let _10 = _i[3];
   m45(_i[1],_7, _8, _9, _10) /* 10.loclam$lambda<void, factory.Game.BoardPoint, factory.Game.ColorRichness>$500~ (factory.Game.BoardPoint newSrc, factory.Game.ColorRichness newColor, Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~ sourceRichness, List<factory.Game.BoardPoint>~ validSources) */;
   return undefined;
  }
  function m300(_i, _a0) {// 105.bouncelam$500~ (Entry<any, any> ent))
   let _4 = _a0;
   m301(_i[1],_4) /* 61.loclam$lambda<void, Entry<any, any>>$500~ (Entry<any, any> ent) */;
   return undefined;
  }
  function m45(_i, _a0, _a1, _a2, _a3) {// 10.loclam$lambda<void, factory.Game.BoardPoint, factory.Game.ColorRichness>$500~ (factory.Game.BoardPoint newSrc, factory.Game.ColorRichness newColor, Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~ sourceRichness, List<factory.Game.BoardPoint>~ validSources))
   let _15 = _a0;
   m18(_a3,_15) /* List<factory.Game.BoardPoint>~.add~ */;
   let _16 = _a0;
   let _17 = _a1;
   m16(_a2,_16, _17) /* Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.put~ */;
  }
  function m301(_i, _a0) {// 61.loclam$lambda<void, Entry<any, any>>$500~ (Entry<any, any> ent))
   let _4 = m238(_a0,) /* Entry<any, any>.getKey */;
   let _5 = m239(_a0,) /* Entry<any, any>.getValue */;
   m163(_i,_4, _5) /* Map<any, any>~.put~ */;
  }
  function m302() {// List<Entry<factory.Game.BoardPoint, bool>>~.NewManual)
   let _2 = m306((5)) /* array<Entry<factory.Game.BoardPoint, bool>>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m303(_i, _a0) {// array<Entry<factory.Game.BoardPoint, bool>>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m304(_i, _a0, _a1) {// array<Entry<factory.Game.BoardPoint, bool>>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m305(_i) {// array<Entry<factory.Game.BoardPoint, bool>>~.getLength)
   return _i[0];
  }
  function m306(_a0) {// array<Entry<factory.Game.BoardPoint, bool>>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m51(_i, _a0) {// String.Equals)
   let _3 = m130(_a0,) /* String.get$data */;
   let _4 = m131(_i[0],_3) /* Buffer<int>~.EqualsM */;
   let _7 = (_4===(false));
   if (_7) {
    return (false);
   }
   return (true);
  }
  function m307(_i, _a0) {// array<Entry<factory.Game.BoardPoint, bool>>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m303(_i,_5) /* array<Entry<factory.Game.BoardPoint, bool>>~.get */;
    let _7 = _3;
    m332(_a0,_6, _7) /* lamcall106 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m308(_i, _a0, _a1) {// 107.bouncelam$500~ (Entry<factory.Game.BoardPoint, bool>? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m309(_i[1],_6, _7, _8) /* 39.loclam$lambda<void, Entry<factory.Game.BoardPoint, bool>?, int>$500~ (Entry<factory.Game.BoardPoint, bool>? val, int idx, array<Entry<factory.Game.BoardPoint, bool>>~ next) */;
   return undefined;
  }
  function m309(_i, _a0, _a1, _a2) {// 39.loclam$lambda<void, Entry<factory.Game.BoardPoint, bool>?, int>$500~ (Entry<factory.Game.BoardPoint, bool>? val, int idx, array<Entry<factory.Game.BoardPoint, bool>>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m304(_a2,_6, _7) /* array<Entry<factory.Game.BoardPoint, bool>>~.set~ */;
   return undefined;
  }
  function m54(_a0) {// array<factory.Game.BoardPoint>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m310(_i, _a0) {// List<Entry<factory.Game.BoardPoint, bool>>~.forEach)
   let _4 = _a0;
   m333(_i[0],_4) /* array<Entry<factory.Game.BoardPoint, bool>>~.forEachEx */;
  }
  function m55(_a0) {// array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m311(_i, _a0) {// lamcall100)
   let _3 = m268(_i,_a0) /* 101.bouncelam$500 (factory.Game.BoardPoint? raw) */;
   return _3;
  }
  function m312(_i, _a0) {// lamcall76)
   let _3 = m107(_i,_a0) /* 77.bouncelam$500~ (factory.Game.BoardPoint pos) */;
   return _3;
  }
  function m57(_a0) {// int.sabs)
   let _4 = (_a0<(0));
   if (_4) {
    let _3 = _capi((0)-_a0);
    return _3;
   }
   return _a0;
  }
  function m313(_i, _a0) {// array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m58(_i) {// factory.Game.BoardPoint.hashCode)
   let _3 = 1;
   let _5 = _capi(_3*(31));
   _3 = _capi(_5+_i[0]);
   let _7 = _capi(_3*(31));
   _3 = _capi(_7+_i[1]);
   return _3;
  }
  function m314() {// List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.NewManual)
   let _2 = m317((5)) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m59(_i) {// array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.getLength)
   return _i[0];
  }
  function m315(_i, _a0, _a1) {// array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m60(_i, _a0) {// array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m316(_i) {// array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.getLength)
   return _i[0];
  }
  function m61(_i, _a0) {// Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.putNew~)
   let _4 = m133() /* Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~.NewManual */;
   let _5 = _a0;
   let _6 = _4;
   m134(_i[0],_5, _6) /* array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.set~ */;
   return _4;
  }
  function m317(_a0) {// array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m62(_i, _a0, _a1) {// Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~.put~)
   let _5 = _a0;
   let _6 = _a1;
   let _4 = m135(_5, _6) /* Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>.NewManual */;
   let _7 = m136(_i[0],) /* List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.getLen */;
   let _8 = 0;
   let _9 = (_8<_7);
   while (_9) {
    let _11 = _8;
    let _12 = m137(_i[0],_11) /* List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.get */;
    let _14 = _12 === null;
    let _13;
    if (_14) {
     return null;
    }
    else {
     _13 = _12;
    }
    let _10 = _13;
    let _15 = m138(_10,) /* Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>.getKey */;
    let _19 = m139(_15,_a0) /* factory.Game.BoardPoint.Equals */;
    if (_19) {
     let _16 = _8;
     let _17 = _4;
     m140(_i[0],_16, _17) /* List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.set~ */;
     let _18 = m141(_10,) /* Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>.getValue */;
     return _18;
    }
    _8 = _capi(_8+(1));
    let _21 = (_8<_7);
    _9 = _21;
   }
   let _22 = _4;
   m142(_i[0],_22) /* List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.add~ */;
   let _23 = null;
   return _23;
  }
  function m318(_i, _a0) {// array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m313(_i,_5) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.get */;
    let _7 = _3;
    m334(_a0,_6, _7) /* lamcall108 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m63(_i, _a0) {// array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m60(_i,_6) /* array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.get */;
    let _7 = _8 === null;
    let _5;
    if (_7) {
     _7 = false;
     _5 = null;
    }
    else {
     _7 = true;
     _5 = _8;
    }
    if (_7) {
     let _9 = _5;
     m143(_a0,_9) /* lamcall57 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m319(_i, _a0, _a1) {// 109.bouncelam$500~ (Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m320(_i[1],_6, _7, _8) /* 47.loclam$lambda<void, Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>?, int>$500~ (Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>? val, int idx, array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~ next) */;
   return undefined;
  }
  function m64(_i, _a0) {// 58.bouncelam$500~ (Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~ oldEnt))
   let _4 = _a0;
   m65(_i[1],_4) /* 17.loclam$lambda<void, Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>$500~ (Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~ oldEnt) */;
   return undefined;
  }
  function m320(_i, _a0, _a1, _a2) {// 47.loclam$lambda<void, Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>?, int>$500~ (Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>? val, int idx, array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m315(_a2,_6, _7) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.set~ */;
   return undefined;
  }
  function m65(_i, _a0) {// 17.loclam$lambda<void, Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>$500~ (Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~ oldEnt))
   let _5 = [(500), _i];
   m144(_a0,_5) /* Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~.forEach */;
  }
  function m321(_i, _a0) {// List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.forEach)
   let _4 = _a0;
   m335(_i[0],_4) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.forEachEx */;
  }
  function m66(_i) {// array<factory.Game.BoardPoint>~.getLength)
   return _i[0];
  }
  function m322(_i, _a0) {// lamcall92)
   m216(_i,_a0) /* 93.bouncelam$500 (factory.Game.ColorRichness col) */;
   return undefined;
  }
  function m67(_i, _a0) {// array<factory.Game.BoardPoint>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m83(_i,_5) /* array<factory.Game.BoardPoint>~.get */;
    let _7 = _3;
    m147(_a0,_6, _7) /* lamcall59 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m323(_i, _a0) {// lamcall80)
   m145(_i,_a0) /* 81.bouncelam$500~ (Entry<factory.Game.BoardPoint, factory.Game.ColorRichness> ent) */;
   return undefined;
  }
  function m68(_i, _a0, _a1) {// 60.bouncelam$500~ (factory.Game.BoardPoint? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m69(_i[1],_6, _7, _8) /* 14.loclam$lambda<void, factory.Game.BoardPoint?, int>$500~ (factory.Game.BoardPoint? val, int idx, array<factory.Game.BoardPoint>~ next) */;
   return undefined;
  }
  function m324() {// List<Entry<any, any>>~.NewManual)
   let _2 = m327((5)) /* array<Entry<any, any>>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m69(_i, _a0, _a1, _a2) {// 14.loclam$lambda<void, factory.Game.BoardPoint?, int>$500~ (factory.Game.BoardPoint? val, int idx, array<factory.Game.BoardPoint>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m70(_a2,_6, _7) /* array<factory.Game.BoardPoint>~.set~ */;
   return undefined;
  }
  function m325(_i, _a0, _a1) {// array<Entry<any, any>>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m70(_i, _a0, _a1) {// array<factory.Game.BoardPoint>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m326(_i) {// array<Entry<any, any>>~.getLength)
   return _i[0];
  }
  function m71(_a0) {// int~.NewManual)
   let _1 = [_a0];
   return _1;
  }
  function m327(_a0) {// array<Entry<any, any>>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m328(_i, _a0) {// array<Entry<any, any>>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m291(_i,_5) /* array<Entry<any, any>>~.get */;
    let _7 = _3;
    m336(_a0,_6, _7) /* lamcall110 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m73(_a0) {// factory.Game.Side.getDiffX)
   let _1 = m28() /* factory.Game.Side.getRIGHT */;
   let _3 = (_a0===_1);
   if (_3) {
    return (1);
   }
   let _4 = m26() /* factory.Game.Side.getLEFT */;
   let _6 = (_a0===_4);
   if (_6) {
    return (-1);
   }
   return (0);
  }
  function m329(_i, _a0, _a1) {// 111.bouncelam$500~ (Entry<any, any>? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m330(_i[1],_6, _7, _8) /* 64.loclam$lambda<void, Entry<any, any>?, int>$500~ (Entry<any, any>? val, int idx, array<Entry<any, any>>~ next) */;
   return undefined;
  }
  function m74(_a0) {// factory.Game.Side.getDiffY)
   let _1 = m27() /* factory.Game.Side.getTOP */;
   let _3 = (_a0===_1);
   if (_3) {
    return (-1);
   }
   let _4 = m25() /* factory.Game.Side.getBOTTOM */;
   let _6 = (_a0===_4);
   if (_6) {
    return (1);
   }
   return (0);
  }
  function m330(_i, _a0, _a1, _a2) {// 64.loclam$lambda<void, Entry<any, any>?, int>$500~ (Entry<any, any>? val, int idx, array<Entry<any, any>>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m325(_a2,_6, _7) /* array<Entry<any, any>>~.set~ */;
   return undefined;
  }
  function m75(_a0, _a1) {// factory.Game.ConveyorType.getOtherSide)
   let _2 = m27() /* factory.Game.Side.getTOP */;
   let _13 = (_a1===_2);
   if (_13) {
    let _3 = m149() /* factory.Game.ConveyorType.getLTT */;
    let _5 = (_a0===_3);
    if (_5) {
     let _4 = m150() /* factory.Game.Side?.getLEFT */;
     return _4;
    }
    let _6 = m151() /* factory.Game.ConveyorType.getTTR */;
    let _8 = (_a0===_6);
    if (_8) {
     let _7 = m152() /* factory.Game.Side?.getRIGHT */;
     return _7;
    }
    let _9 = m153() /* factory.Game.ConveyorType.getTTB */;
    let _11 = (_a0===_9);
    if (_11) {
     let _10 = m154() /* factory.Game.Side?.getBOTTOM */;
     return _10;
    }
    let _12 = null;
    return _12;
   }
   let _14 = m28() /* factory.Game.Side.getRIGHT */;
   let _25 = (_a1===_14);
   if (_25) {
    let _15 = m151() /* factory.Game.ConveyorType.getTTR */;
    let _17 = (_a0===_15);
    if (_17) {
     let _16 = m155() /* factory.Game.Side?.getTOP */;
     return _16;
    }
    let _18 = m156() /* factory.Game.ConveyorType.getRTB */;
    let _20 = (_a0===_18);
    if (_20) {
     let _19 = m154() /* factory.Game.Side?.getBOTTOM */;
     return _19;
    }
    let _21 = m157() /* factory.Game.ConveyorType.getLTR */;
    let _23 = (_a0===_21);
    if (_23) {
     let _22 = m150() /* factory.Game.Side?.getLEFT */;
     return _22;
    }
    let _24 = null;
    return _24;
   }
   let _26 = m25() /* factory.Game.Side.getBOTTOM */;
   let _37 = (_a1===_26);
   if (_37) {
    let _27 = m156() /* factory.Game.ConveyorType.getRTB */;
    let _29 = (_a0===_27);
    if (_29) {
     let _28 = m152() /* factory.Game.Side?.getRIGHT */;
     return _28;
    }
    let _30 = m158() /* factory.Game.ConveyorType.getBTL */;
    let _32 = (_a0===_30);
    if (_32) {
     let _31 = m150() /* factory.Game.Side?.getLEFT */;
     return _31;
    }
    let _33 = m153() /* factory.Game.ConveyorType.getTTB */;
    let _35 = (_a0===_33);
    if (_35) {
     let _34 = m155() /* factory.Game.Side?.getTOP */;
     return _34;
    }
    let _36 = null;
    return _36;
   }
   let _38 = m149() /* factory.Game.ConveyorType.getLTT */;
   let _40 = (_a0===_38);
   if (_40) {
    let _39 = m155() /* factory.Game.Side?.getTOP */;
    return _39;
   }
   let _41 = m158() /* factory.Game.ConveyorType.getBTL */;
   let _43 = (_a0===_41);
   if (_43) {
    let _42 = m154() /* factory.Game.Side?.getBOTTOM */;
    return _42;
   }
   let _44 = m157() /* factory.Game.ConveyorType.getLTR */;
   let _46 = (_a0===_44);
   if (_46) {
    let _45 = m152() /* factory.Game.Side?.getRIGHT */;
    return _45;
   }
   let _47 = null;
   return _47;
  }
  function m331(_i, _a0) {// List<Entry<any, any>>~.forEach)
   let _4 = _a0;
   m337(_i[0],_4) /* array<Entry<any, any>>~.forEachEx */;
  }
  function m76(_a0) {// factory.Game.Side.getOpposite)
   let _1 = m27() /* factory.Game.Side.getTOP */;
   let _3 = (_a0===_1);
   if (_3) {
    let _2 = m25() /* factory.Game.Side.getBOTTOM */;
    return _2;
   }
   let _4 = m25() /* factory.Game.Side.getBOTTOM */;
   let _6 = (_a0===_4);
   if (_6) {
    let _5 = m27() /* factory.Game.Side.getTOP */;
    return _5;
   }
   let _7 = m28() /* factory.Game.Side.getRIGHT */;
   let _9 = (_a0===_7);
   if (_9) {
    let _8 = m26() /* factory.Game.Side.getLEFT */;
    return _8;
   }
   let _10 = m28() /* factory.Game.Side.getRIGHT */;
   return _10;
  }
  function m332(_i, _a0, _a1) {// lamcall106)
   m308(_i,_a0, _a1) /* 107.bouncelam$500~ (Entry<factory.Game.BoardPoint, bool>? val, int idx) */;
   return undefined;
  }
  function m77(_i) {// int~.increment~)
   _i[0] = _capi(_i[0]+(1));
  }
  function m333(_i, _a0) {// array<Entry<factory.Game.BoardPoint, bool>>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m303(_i,_6) /* array<Entry<factory.Game.BoardPoint, bool>>~.get */;
    let _7 = _8 === null;
    let _5;
    if (_7) {
     _7 = false;
     _5 = null;
    }
    else {
     _7 = true;
     _5 = _8;
    }
    if (_7) {
     let _9 = _5;
     m338(_a0,_9) /* lamcall98 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m78() {// Map<any, any>~.NewManual)
   let _2 = m159((16)) /* array<Entries<any, any>~>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m334(_i, _a0, _a1) {// lamcall108)
   m319(_i,_a0, _a1) /* 109.bouncelam$500~ (Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>? val, int idx) */;
   return undefined;
  }
  function m79(_i, _a0) {// Map<any, any>~.get)
   let _5 = _identityHash(_a0);
   let _6 = _5;
   let _4 = m57(_6) /* int.sabs */;
   let _8 = m160(_i[0],) /* array<Entries<any, any>~>~.getLength */;
   let _7 = _capi(_4%_8);
   let _10 = _7;
   let _11 = m161(_i[0],_10) /* array<Entries<any, any>~>~.get */;
   let _13 = _11 === null;
   let _12;
   if (_13) {
    return null;
   }
   else {
    _12 = _11;
   }
   let _9 = _12;
   let _14 = _a0;
   let _15 = m162(_9,_14) /* Entries<any, any>~.get */;
   return _15;
  }
  function m335(_i, _a0) {// array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m313(_i,_6) /* array<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.get */;
    let _7 = _8 === null;
    let _5;
    if (_7) {
     _7 = false;
     _5 = null;
    }
    else {
     _7 = true;
     _5 = _8;
    }
    if (_7) {
     let _9 = _5;
     m339(_a0,_9) /* lamcall102 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m80(_i, _a0) {// List<factory.Game.BoardPoint>~.MakeCopy)
   let _5 = [];
   m163(_a0,_i, _5) /* Map<any, any>~.put~ */;
   let _4 = _5;
   let _7 = m79(_a0,_i[0]) /* Map<any, any>~.get */;
   let _8 = _7 === null;
   let _9;
   if (_8) {
    _9 = m164(_i[0],_a0) /* array<factory.Game.BoardPoint>~.MakeCopyM */;
   }
   else {
    _9 = _7;
   }
   let _6 = _9;
   let _10 = _i[1];
   _4[0] = _6;
   _4[1] = _10;
   return _4;
  }
  function m336(_i, _a0, _a1) {// lamcall110)
   m329(_i,_a0, _a1) /* 111.bouncelam$500~ (Entry<any, any>? val, int idx) */;
   return undefined;
  }
  function m81() {// Map<factory.Game.BoardPoint, bool>~.NewManual)
   let _2 = m165((16)) /* array<Entries<factory.Game.BoardPoint, bool>~>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m337(_i, _a0) {// array<Entry<any, any>>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m291(_i,_6) /* array<Entry<any, any>>~.get */;
    let _7 = _8 === null;
    let _5;
    if (_7) {
     _7 = false;
     _5 = null;
    }
    else {
     _7 = true;
     _5 = _8;
    }
    if (_7) {
     let _9 = _5;
     m340(_a0,_9) /* lamcall104 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m82(_a0) {// array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m338(_i, _a0) {// lamcall98)
   m256(_i,_a0) /* 99.bouncelam$500~ (Entry<factory.Game.BoardPoint, bool> ent) */;
   return undefined;
  }
  function m83(_i, _a0) {// array<factory.Game.BoardPoint>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m339(_i, _a0) {// lamcall102)
   m284(_i,_a0) /* 103.bouncelam$500~ (Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~> ent) */;
   return undefined;
  }
  function m84(_i, _a0, _a1) {// Map<factory.Game.BoardPoint, bool>~.put~)
   let _6 = m58(_a0,) /* factory.Game.BoardPoint.hashCode */;
   let _5 = m57(_6) /* int.sabs */;
   let _8 = m166(_i[0],) /* array<Entries<factory.Game.BoardPoint, bool>~>~.getLength */;
   let _7 = _capi(_5%_8);
   let _10 = _7;
   let _11 = m167(_i[0],_10) /* array<Entries<factory.Game.BoardPoint, bool>~>~.get */;
   let _13 = _11 === null;
   let _12;
   if (_13) {
    let _14 = _7;
    _12 = m168(_i,_14) /* Map<factory.Game.BoardPoint, bool>~.putNew~ */;
   }
   else {
    _12 = _11;
   }
   let _9 = _12;
   let _16 = _a0;
   let _17 = _a1;
   let _15 = m169(_9,_16, _17) /* Entries<factory.Game.BoardPoint, bool>~.put~ */;
   let _18 = _15 === null;
   _18 = (_18===(false));
   let _32 = (_18===(false));
   if (_32) {
    _i[1] = _capi(_i[1]+(1));
    let _23 = m166(_i[0],) /* array<Entries<factory.Game.BoardPoint, bool>~>~.getLength */;
    let _22 = _capi(_23*(2));
    let _31 = (_i[1]>=_22);
    if (_31) {
     let _26 = (_22<(0));
     if (_26) {
     }
     else {
      let _27 = _i[0];
      let _28 = _22;
      _i[0] = m165(_28) /* array<Entries<factory.Game.BoardPoint, bool>~>~.NewManual */;
      _i[1] = 0;
      let _30 = [(500), _i];
      m170(_27,_30) /* array<Entries<factory.Game.BoardPoint, bool>~>~.forEachEx */;
     }
    }
   }
   return _15;
  }
  function m340(_i, _a0) {// lamcall104)
   m300(_i,_a0) /* 105.bouncelam$500~ (Entry<any, any> ent) */;
   return undefined;
  }
  function m85() {// List<String>~.NewManual)
   let _2 = m173((5)) /* array<String>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m86(_i, _a0) {// List<String>~.add~)
   let _4 = m174(_i[0],) /* array<String>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m174(_i[0],) /* array<String>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m173(_8) /* array<String>~.NewManual */;
    let _10 = [(500), _i, _5];
    m175(_i[0],_10) /* array<String>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m178(_i[0],_12, _13) /* array<String>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m87() {// List<int>~.NewManual)
   let _2 = m179((5)) /* array<int>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m88(_i, _a0) {// List<int>~.add~)
   let _4 = m180(_i[0],) /* array<int>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m180(_i[0],) /* array<int>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m179(_8) /* array<int>~.NewManual */;
    let _10 = [(500), _i, _5];
    m181(_i[0],_10) /* array<int>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m184(_i[0],_12, _13) /* array<int>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m89(_i) {// List<int>~.reverse~)
   let _3 = _capi(_i[1]/(2));
   let _5 = 0;
   let _6 = (_5<_3);
   while (_6) {
    let _7 = _5;
    let _9 = _capi(_i[1]-(1));
    let _10 = _capi(_9-_5);
    m185(_i[0],_7, _10) /* array<int>~.swap~ */;
    _5 = _capi(_5+(1));
    let _12 = (_5<_3);
    _6 = _12;
   }
  }
  function m90(_a0) {// List.toString)
   let _1 = m186(_a0,) /* List<int>.getSize */;
   let _3 = _1;
   let _2 = m95(_3) /* String~.NewManual */;
   let _4 = 0;
   let _5 = (_4<_1);
   while (_5) {
    let _6 = _4;
    let _7 = _4;
    let _8 = m188(_a0,_7) /* List<int>.get */;
    let _10 = _8 === null;
    let _9;
    if (_10) {
     _9 = 0;
    }
    else {
     _9 = _8;
    }
    let _11 = _9;
    m187(_2,_6, _11) /* String~.setChar~ */;
    _4 = _capi(_4+(1));
    let _13 = (_4<_1);
    _5 = _13;
   }
   let _14 = m99(_2) /* SerializationBuilder.makeBetterCopy */;
   return _14;
  }
  function m91(_a0) {// SerializationBuilder.makeBetterCopy)
   let _1 = m78() /* Map<any, any>~.NewManual */;
   let _2 = m79(_1,_a0) /* Map<any, any>~.get */;
   let _3 = _2 === null;
   let _4;
   if (_3) {
    _4 = m189(_a0,_1) /* List<int>~.MakeCopy */;
   }
   else {
    _4 = _2;
   }
   return _4;
  }
  function m92(_i, _a0, _a1) {// List<String>~.fold)
   let _5 = _a0;
   let _6 = _a1;
   let _7 = m190(_i[0],_5, _6) /* array<String>~.foldEx */;
   return _7;
  }
  function m93(_i, _a0, _a1) {// 72.bouncelam$500 (int sum, String add))
   let _5 = _a0;
   let _6 = _a1;
   let _7 = m94(_i[1],_5, _6) /* 50.loclam$lambda<int, int, String>$500 (int sum, String add) */;
   return _7;
  }
  function m94(_i, _a0, _a1) {// 50.loclam$lambda<int, int, String>$500 (int sum, String add))
   let _4 = m191(_a1,) /* String.getLen */;
   let _5 = _capi(_a0+_4);
   return _5;
  }
  function m95(_a0) {// String~.NewManual)
   let _2 = _a0;
   let _3 = m192(_2) /* Buffer<int>~.NewManual */;
   let _1 = [_3];
   return _1;
  }
  function m96(_i, _a0) {// List<String>~.forEach)
   let _4 = _a0;
   m193(_i[0],_4) /* array<String>~.forEachEx */;
  }
  function m97(_i, _a0) {// 75.bouncelam$500 (String part))
   let _6 = _a0;
   let _7 = _i[2];
   let _8 = _i[3];
   m98(_i[1],_6, _7, _8) /* 50.loclam$lambda<void, String>$500 (String part, int~ off, String~ ret) */;
   return undefined;
  }
  function m98(_i, _a0, _a1, _a2) {// 50.loclam$lambda<void, String>$500 (String part, int~ off, String~ ret))
   let _5 = _a2;
   let _6 = m191(_a0,) /* String.getLen */;
   let _7 = m195(_a1,_6) /* int~.getAndAdd~ */;
   m194(_a0,_5, _7) /* String.writeTo */;
  }
  function m99(_a0) {// SerializationBuilder.makeBetterCopy)
   let _1 = m78() /* Map<any, any>~.NewManual */;
   let _2 = m79(_1,_a0) /* Map<any, any>~.get */;
   let _3 = _2 === null;
   let _4;
   if (_3) {
    _4 = m196(_a0,_1) /* String~.MakeCopy */;
   }
   else {
    _4 = _2;
   }
   return _4;
  }
  function m100(_i) {// Buffer<int>~.getLen)
   return _i[0];
  }
  function m102(_i, _a0) {// String.getChar)
   let _3 = _a0;
   let _4 = m198(_i[0],_3) /* Buffer<int>~.get */;
   return _4;
  }
  function m103(_i, _a0) {// Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~.get)
   let _3 = 0;
   let _4 = m199(_i[0],) /* List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.getSize */;
   let _5 = (_3<_4);
   while (_5) {
    let _7 = _3;
    let _8 = m137(_i[0],_7) /* List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.get */;
    let _10 = _8 === null;
    let _9;
    if (_10) {
     return null;
    }
    else {
     _9 = _8;
    }
    let _6 = _9;
    let _11 = m138(_6,) /* Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>.getKey */;
    let _13 = m139(_11,_a0) /* factory.Game.BoardPoint.Equals */;
    if (_13) {
     let _12 = m141(_6,) /* Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>.getValue */;
     return _12;
    }
    _3 = _capi(_3+(1));
    let _15 = m199(_i[0],) /* List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.getSize */;
    let _16 = (_3<_15);
    _5 = _16;
   }
   let _17 = null;
   return _17;
  }
  function m104(_i) {// factory.Game.ColorRichness.getValue)
   let _4 = _capi(_i[0]+_i[1]);
   let _5 = _capi(_4+_i[2]);
   let _7 = _capi(_5/(2));
   return _7;
  }
  function m105() {// factory.Game.StableStatus.getCONNECTED)
   return (0);
  }
  function m106(_i, _a0) {// List<factory.Game.BoardPoint>.some)
   let _4 = _a0;
   let _6 = m200(_i,_4) /* List<factory.Game.BoardPoint>.find */;
   let _5 = _6 === null;
   _5 = (_5===(false));
   return _5;
  }
  function m107(_i, _a0) {// 77.bouncelam$500~ (factory.Game.BoardPoint pos))
   let _6 = _a0;
   let _7 = _i[2];
   let _8 = _i[3];
   let _9 = m108(_i[1],_6, _7, _8) /* 10.loclam$lambda<bool, factory.Game.BoardPoint>$500~ (factory.Game.BoardPoint pos, int x, int y) */;
   return _9;
  }
  function m108(_i, _a0, _a1, _a2) {// 10.loclam$lambda<bool, factory.Game.BoardPoint>$500~ (factory.Game.BoardPoint pos, int x, int y))
   let _14 = m38(_a0,) /* factory.Game.BoardPoint.getX */;
   let _15 = (_14===_a1);
   let _16;
   if (_15) {
    let _17 = m40(_a0,) /* factory.Game.BoardPoint.getY */;
    _16 = (_17===_a2);
   }
   else {
    _16 = false;
   }
   return _16;
  }
  function m109() {// factory.Game.StableStatus.getDISCONNECTED)
   return (1);
  }
  function m110(_i, _a0) {// Map<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.get)
   let _5 = m58(_a0,) /* factory.Game.BoardPoint.hashCode */;
   let _4 = m57(_5) /* int.sabs */;
   let _7 = m201(_i[0],) /* array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.getLength */;
   let _6 = _capi(_4%_7);
   let _9 = _6;
   let _10 = m202(_i[0],_9) /* array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.get */;
   let _12 = _10 === null;
   let _11;
   if (_12) {
    return null;
   }
   else {
    _11 = _10;
   }
   let _8 = _11;
   let _13 = _a0;
   let _14 = m203(_8,_13) /* Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.get */;
   return _14;
  }
  function m111(_i, _a0) {// List<factory.Game.ColorRichness>~.add~)
   let _4 = m204(_i[0],) /* array<factory.Game.ColorRichness>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m204(_i[0],) /* array<factory.Game.ColorRichness>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m205(_8) /* array<factory.Game.ColorRichness>~.NewManual */;
    let _10 = [(500), _i, _5];
    m206(_i[0],_10) /* array<factory.Game.ColorRichness>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m209(_i[0],_12, _13) /* array<factory.Game.ColorRichness>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m112(_i) {// List<factory.Game.ColorRichness>~.getLen)
   return _i[1];
  }
  function m113() {// List<factory.Game.ColorRichness>~.NewManual)
   let _2 = m205((5)) /* array<factory.Game.ColorRichness>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m114(_i, _a0, _a1) {// Map<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.put~)
   let _6 = m58(_a0,) /* factory.Game.BoardPoint.hashCode */;
   let _5 = m57(_6) /* int.sabs */;
   let _8 = m201(_i[0],) /* array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.getLength */;
   let _7 = _capi(_5%_8);
   let _10 = _7;
   let _11 = m202(_i[0],_10) /* array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.get */;
   let _13 = _11 === null;
   let _12;
   if (_13) {
    let _14 = _7;
    _12 = m210(_i,_14) /* Map<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.putNew~ */;
   }
   else {
    _12 = _11;
   }
   let _9 = _12;
   let _16 = _a0;
   let _17 = _a1;
   let _15 = m211(_9,_16, _17) /* Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.put~ */;
   let _18 = _15 === null;
   _18 = (_18===(false));
   let _32 = (_18===(false));
   if (_32) {
    _i[1] = _capi(_i[1]+(1));
    let _23 = m201(_i[0],) /* array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.getLength */;
    let _22 = _capi(_23*(2));
    let _31 = (_i[1]>=_22);
    if (_31) {
     let _26 = (_22<(0));
     if (_26) {
     }
     else {
      let _27 = _i[0];
      let _28 = _22;
      _i[0] = m82(_28) /* array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.NewManual */;
      _i[1] = 0;
      let _30 = [(500), _i];
      m212(_27,_30) /* array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.forEachEx */;
     }
    }
   }
   return _15;
  }
  function m115(_i, _a0, _a1) {// lamcall53)
   m44(_i,_a0, _a1) /* 54.bouncelam$500~ (factory.Game.BoardPoint newSrc, factory.Game.ColorRichness newColor) */;
   return undefined;
  }
  function m116(_a0) {// factory.Game.ColorRichness.fromList)
   let _2 = m21((0)) /* int.getPtr */;
   let _4 = m21((0)) /* int.getPtr */;
   let _6 = m21((0)) /* int.getPtr */;
   let _8 = [(500), _4, _6, _2];
   m215(_a0,_8) /* List<factory.Game.ColorRichness>~.forEach */;
   let _11 = m29(_2,) /* int~.getValue */;
   let _12 = m219((10), _11) /* int.min */;
   let _13 = m218((0), _12) /* int.max */;
   let _16 = m29(_4,) /* int~.getValue */;
   let _17 = m219((10), _16) /* int.min */;
   let _18 = m218((0), _17) /* int.max */;
   let _21 = m29(_6,) /* int~.getValue */;
   let _22 = m219((10), _21) /* int.min */;
   let _23 = m218((0), _22) /* int.max */;
   let _24 = m17(_13, _18, _23) /* factory.Game.ColorRichness.NewManual */;
   return _24;
  }
  function m117(_a0) {// factory.Game.Side.Stringify)
   let _3 = (_a0===(0));
   if (_3) {
    let _2 = [[3,84,79,80]];
    return _2;
   }
   let _6 = (_a0===(1));
   if (_6) {
    let _5 = [[5,82,73,71,72,84]];
    return _5;
   }
   let _9 = (_a0===(2));
   if (_9) {
    let _8 = [[6,66,79,84,84,79,77]];
    return _8;
   }
   let _10 = [[4,76,69,70,84]];
   return _10;
  }
  function m118(_a0) {// factory.Game.SpecialTileType.Stringify)
   let _3 = (_a0===(0));
   if (_3) {
    let _2 = [[7,83,79,85,82,67,69,82]];
    return _2;
   }
   let _6 = (_a0===(1));
   if (_6) {
    let _5 = [[7,83,79,85,82,67,69,71]];
    return _5;
   }
   let _9 = (_a0===(2));
   if (_9) {
    let _8 = [[7,83,79,85,82,67,69,66]];
    return _8;
   }
   let _12 = (_a0===(3));
   if (_12) {
    let _11 = [[4,83,73,78,75]];
    return _11;
   }
   let _13 = [[6,77,69,82,71,69,82]];
   return _13;
  }
  function m121(_i) {// factory.Game.ColorRichness.getRed)
   return _i[0];
  }
  function m122(_i) {// factory.Game.ColorRichness.getGreen)
   return _i[1];
  }
  function m123(_i) {// factory.Game.ColorRichness.getBlue)
   return _i[2];
  }
  function m126(_i, _a0, _a1) {// List<String>~.join)
   let _5 = m36() /* StringBuilder~.NewManual */;
   let _6 = m222(_i,) /* List<String>~.getFirst */;
   let _8 = _6 === null;
   let _7;
   if (_8) {
    let _9 = m36() /* StringBuilder~.NewManual */;
    let _10 = m41(_9,) /* StringBuilder~.getResult */;
    return _10;
   }
   else {
    _7 = _6;
   }
   let _11 = _7;
   let _12 = m221(_a1,_11) /* lamcall78 */;
   m37(_5,_12) /* StringBuilder~.add~ */;
   let _13 = 1;
   let _14 = (_13<_i[1]);
   while (_14) {
    let _15 = _a0;
    m37(_5,_15) /* StringBuilder~.add~ */;
    let _16 = _13;
    let _17 = m223(_i,_16) /* List<String>~.get */;
    let _19 = _17 === null;
    let _18;
    if (_19) {
     let _20 = m36() /* StringBuilder~.NewManual */;
     let _21 = m41(_20,) /* StringBuilder~.getResult */;
     return _21;
    }
    else {
     _18 = _17;
    }
    let _22 = _18;
    let _23 = m221(_a1,_22) /* lamcall78 */;
    m37(_5,_23) /* StringBuilder~.add~ */;
    _13 = _capi(_13+(1));
    let _25 = (_13<_i[1]);
    _14 = _25;
   }
   let _26 = m41(_5,) /* StringBuilder~.getResult */;
   return _26;
  }
  function m127(_i, _a0) {// 79.bouncelam$500~ (String anonlam10686$10687))
   let _4 = _a0;
   let _5 = m128(_i[1],_4) /* 10.loclam$lambda<String, String>$500~ (String anonlam10686$10687) */;
   return _5;
  }
  function m128(_i, _a0) {// 10.loclam$lambda<String, String>$500~ (String anonlam10686$10687))
   return _a0;
  }
  function m130(_i) {// String.get$data)
   return _i[0];
  }
  function m131(_i, _a0) {// Buffer<int>~.EqualsM)
   let _3 = _bufferEqual(_i, _a0);
   return _3;
  }
  function m133() {// Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~.NewManual)
   let _1 = m225() /* List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m134(_i, _a0, _a1) {// array<Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m135(_a0, _a1) {// Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m136(_i) {// List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.getLen)
   return _i[1];
  }
  function m137(_i, _a0) {// List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.get)
   let _4 = _a0;
   let _5 = m226(_i[0],_4) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.get */;
   return _5;
  }
  function m138(_i) {// Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>.getKey)
   return _i[0];
  }
  function m139(_i, _a0) {// factory.Game.BoardPoint.Equals)
   let _4 = m227(_a0,) /* factory.Game.BoardPoint.get$x */;
   let _6 = (_i[0]!==_4);
   if (_6) {
    return (false);
   }
   let _7 = m228(_a0,) /* factory.Game.BoardPoint.get$y */;
   let _9 = (_i[1]!==_7);
   if (_9) {
    return (false);
   }
   return (true);
  }
  function m140(_i, _a0, _a1) {// List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.set~)
   let _6 = (_a0>=_i[1]);
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _7 = _a0;
   let _8 = _a1;
   let _9 = m229(_i[0],_7, _8) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.set~ */;
   return _9;
  }
  function m141(_i) {// Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>.getValue)
   return _i[1];
  }
  function m142(_i, _a0) {// List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.add~)
   let _4 = m230(_i[0],) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m230(_i[0],) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m231(_8) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.NewManual */;
    let _10 = [(500), _i, _5];
    m232(_i[0],_10) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m229(_i[0],_12, _13) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m143(_i, _a0) {// lamcall57)
   m64(_i,_a0) /* 58.bouncelam$500~ (Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~ oldEnt) */;
   return undefined;
  }
  function m144(_i, _a0) {// Entries<factory.Game.BoardPoint, factory.Game.ColorRichness>~.forEach)
   let _3 = _a0;
   m235(_i[0],_3) /* List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.forEach */;
  }
  function m145(_i, _a0) {// 81.bouncelam$500~ (Entry<factory.Game.BoardPoint, factory.Game.ColorRichness> ent))
   let _4 = _a0;
   m146(_i[1],_4) /* 17.loclam$lambda<void, Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>$500~ (Entry<factory.Game.BoardPoint, factory.Game.ColorRichness> ent) */;
   return undefined;
  }
  function m146(_i, _a0) {// 17.loclam$lambda<void, Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>$500~ (Entry<factory.Game.BoardPoint, factory.Game.ColorRichness> ent))
   let _4 = m138(_a0,) /* Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>.getKey */;
   let _5 = m141(_a0,) /* Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>.getValue */;
   m16(_i,_4, _5) /* Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.put~ */;
  }
  function m147(_i, _a0, _a1) {// lamcall59)
   m68(_i,_a0, _a1) /* 60.bouncelam$500~ (factory.Game.BoardPoint? val, int idx) */;
   return undefined;
  }
  function m149() {// factory.Game.ConveyorType.getLTT)
   return (0);
  }
  function m150() {// factory.Game.Side?.getLEFT)
   return (3);
  }
  function m151() {// factory.Game.ConveyorType.getTTR)
   return (1);
  }
  function m152() {// factory.Game.Side?.getRIGHT)
   return (1);
  }
  function m153() {// factory.Game.ConveyorType.getTTB)
   return (5);
  }
  function m154() {// factory.Game.Side?.getBOTTOM)
   return (2);
  }
  function m155() {// factory.Game.Side?.getTOP)
   return (0);
  }
  function m156() {// factory.Game.ConveyorType.getRTB)
   return (2);
  }
  function m157() {// factory.Game.ConveyorType.getLTR)
   return (4);
  }
  function m158() {// factory.Game.ConveyorType.getBTL)
   return (3);
  }
  function m159(_a0) {// array<Entries<any, any>~>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m160(_i) {// array<Entries<any, any>~>~.getLength)
   return _i[0];
  }
  function m161(_i, _a0) {// array<Entries<any, any>~>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m162(_i, _a0) {// Entries<any, any>~.get)
   let _3 = 0;
   let _4 = m236(_i[0],) /* List<Entry<any, any>>~.getSize */;
   let _5 = (_3<_4);
   while (_5) {
    let _7 = _3;
    let _8 = m237(_i[0],_7) /* List<Entry<any, any>>~.get */;
    let _10 = _8 === null;
    let _9;
    if (_10) {
     return null;
    }
    else {
     _9 = _8;
    }
    let _6 = _9;
    let _11 = m238(_6,) /* Entry<any, any>.getKey */;
    let _13 = (_11) === (_a0);
    if (_13) {
     let _12 = m239(_6,) /* Entry<any, any>.getValue */;
     return _12;
    }
    _3 = _capi(_3+(1));
    let _15 = m236(_i[0],) /* List<Entry<any, any>>~.getSize */;
    let _16 = (_3<_15);
    _5 = _16;
   }
   let _17 = null;
   return _17;
  }
  function m163(_i, _a0, _a1) {// Map<any, any>~.put~)
   let _6 = _identityHash(_a0);
   let _7 = _6;
   let _5 = m57(_7) /* int.sabs */;
   let _9 = m160(_i[0],) /* array<Entries<any, any>~>~.getLength */;
   let _8 = _capi(_5%_9);
   let _11 = _8;
   let _12 = m161(_i[0],_11) /* array<Entries<any, any>~>~.get */;
   let _14 = _12 === null;
   let _13;
   if (_14) {
    let _15 = _8;
    _13 = m240(_i,_15) /* Map<any, any>~.putNew~ */;
   }
   else {
    _13 = _12;
   }
   let _10 = _13;
   let _17 = _a0;
   let _18 = _a1;
   let _16 = m241(_10,_17, _18) /* Entries<any, any>~.put~ */;
   let _19 = _16 === null;
   _19 = (_19===(false));
   let _33 = (_19===(false));
   if (_33) {
    _i[1] = _capi(_i[1]+(1));
    let _24 = m160(_i[0],) /* array<Entries<any, any>~>~.getLength */;
    let _23 = _capi(_24*(2));
    let _32 = (_i[1]>=_23);
    if (_32) {
     let _27 = (_23<(0));
     if (_27) {
     }
     else {
      let _28 = _i[0];
      let _29 = _23;
      _i[0] = m159(_29) /* array<Entries<any, any>~>~.NewManual */;
      _i[1] = 0;
      let _31 = [(500), _i];
      m242(_28,_31) /* array<Entries<any, any>~>~.forEachEx */;
     }
    }
   }
   return _16;
  }
  function m164(_i, _a0) {// array<factory.Game.BoardPoint>~.MakeCopyM)
   let _4 = _i[0];
   let _3 = m54(_4) /* array<factory.Game.BoardPoint>~.NewManual */;
   let _5 = _i;
   let _6 = _3;
   m163(_a0,_5, _6) /* Map<any, any>~.put~ */;
   let _7 = 0;
   let _8 = (_7<_i[0]);
   while (_8) {
    let _9 = _7;
    let _12 = m83(_i,_9) /* array<factory.Game.BoardPoint>~.get */;
    let _11 = _12 === null;
    let _10;
    if (_11) {
     _11 = false;
     _10 = null;
    }
    else {
     _11 = true;
     _10 = _12;
    }
    if (_11) {
     let _13 = _7;
     let _14 = _10;
     m70(_3,_13, _14) /* array<factory.Game.BoardPoint>~.set~ */;
    }
    _7 = _capi(_7+(1));
    let _16 = (_7<_i[0]);
    _8 = _16;
   }
   return _3;
  }
  function m165(_a0) {// array<Entries<factory.Game.BoardPoint, bool>~>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m166(_i) {// array<Entries<factory.Game.BoardPoint, bool>~>~.getLength)
   return _i[0];
  }
  function m167(_i, _a0) {// array<Entries<factory.Game.BoardPoint, bool>~>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m168(_i, _a0) {// Map<factory.Game.BoardPoint, bool>~.putNew~)
   let _4 = m245() /* Entries<factory.Game.BoardPoint, bool>~.NewManual */;
   let _5 = _a0;
   let _6 = _4;
   m246(_i[0],_5, _6) /* array<Entries<factory.Game.BoardPoint, bool>~>~.set~ */;
   return _4;
  }
  function m169(_i, _a0, _a1) {// Entries<factory.Game.BoardPoint, bool>~.put~)
   let _5 = _a0;
   let _6 = _a1;
   let _4 = m247(_5, _6) /* Entry<factory.Game.BoardPoint, bool>.NewManual */;
   let _7 = m248(_i[0],) /* List<Entry<factory.Game.BoardPoint, bool>>~.getLen */;
   let _8 = 0;
   let _9 = (_8<_7);
   while (_9) {
    let _11 = _8;
    let _12 = m249(_i[0],_11) /* List<Entry<factory.Game.BoardPoint, bool>>~.get */;
    let _14 = _12 === null;
    let _13;
    if (_14) {
     return null;
    }
    else {
     _13 = _12;
    }
    let _10 = _13;
    let _15 = m250(_10,) /* Entry<factory.Game.BoardPoint, bool>.getKey */;
    let _19 = m139(_15,_a0) /* factory.Game.BoardPoint.Equals */;
    if (_19) {
     let _16 = _8;
     let _17 = _4;
     m251(_i[0],_16, _17) /* List<Entry<factory.Game.BoardPoint, bool>>~.set~ */;
     let _18 = m252(_10,) /* Entry<factory.Game.BoardPoint, bool>.getValue */;
     return _18;
    }
    _8 = _capi(_8+(1));
    let _21 = (_8<_7);
    _9 = _21;
   }
   let _22 = _4;
   m253(_i[0],_22) /* List<Entry<factory.Game.BoardPoint, bool>>~.add~ */;
   let _23 = null;
   return _23;
  }
  function m170(_i, _a0) {// array<Entries<factory.Game.BoardPoint, bool>~>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m167(_i,_6) /* array<Entries<factory.Game.BoardPoint, bool>~>~.get */;
    let _7 = _8 === null;
    let _5;
    if (_7) {
     _7 = false;
     _5 = null;
    }
    else {
     _7 = true;
     _5 = _8;
    }
    if (_7) {
     let _9 = _5;
     m254(_a0,_9) /* lamcall82 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m171(_i, _a0) {// 83.bouncelam$500~ (Entries<factory.Game.BoardPoint, bool>~ oldEnt))
   let _4 = _a0;
   m172(_i[1],_4) /* 36.loclam$lambda<void, Entries<factory.Game.BoardPoint, bool>~>$500~ (Entries<factory.Game.BoardPoint, bool>~ oldEnt) */;
   return undefined;
  }
  function m172(_i, _a0) {// 36.loclam$lambda<void, Entries<factory.Game.BoardPoint, bool>~>$500~ (Entries<factory.Game.BoardPoint, bool>~ oldEnt))
   let _5 = [(500), _i];
   m255(_a0,_5) /* Entries<factory.Game.BoardPoint, bool>~.forEach */;
  }
  function m173(_a0) {// array<String>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m174(_i) {// array<String>~.getLength)
   return _i[0];
  }
  function m175(_i, _a0) {// array<String>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m259(_i,_5) /* array<String>~.get */;
    let _7 = _3;
    m258(_a0,_6, _7) /* lamcall84 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m176(_i, _a0, _a1) {// 85.bouncelam$500~ (String? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m177(_i[1],_6, _7, _8) /* 51.loclam$lambda<void, String?, int>$500~ (String? val, int idx, array<String>~ next) */;
   return undefined;
  }
  function m177(_i, _a0, _a1, _a2) {// 51.loclam$lambda<void, String?, int>$500~ (String? val, int idx, array<String>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m178(_a2,_6, _7) /* array<String>~.set~ */;
   return undefined;
  }
  function m178(_i, _a0, _a1) {// array<String>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m179(_a0) {// array<int>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m180(_i) {// array<int>~.getLength)
   return _i[0];
  }
  function m181(_i, _a0) {// array<int>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m261(_i,_5) /* array<int>~.get */;
    let _7 = _3;
    m260(_a0,_6, _7) /* lamcall86 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m182(_i, _a0, _a1) {// 87.bouncelam$500~ (int? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m183(_i[1],_6, _7, _8) /* 67.loclam$lambda<void, int?, int>$500~ (int? val, int idx, array<int>~ next) */;
   return undefined;
  }
  function m183(_i, _a0, _a1, _a2) {// 67.loclam$lambda<void, int?, int>$500~ (int? val, int idx, array<int>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m184(_a2,_6, _7) /* array<int>~.set~ */;
   return undefined;
  }
  function m184(_i, _a0, _a1) {// array<int>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m185(_i, _a0, _a1) {// array<int>~.swap~)
   let _5 = _a0;
   let _4 = m261(_i,_5) /* array<int>~.get */;
   let _6 = _a0;
   let _7 = _a1;
   let _8 = m261(_i,_7) /* array<int>~.get */;
   m184(_i,_6, _8) /* array<int>~.set~ */;
   let _9 = _a1;
   let _10 = _4;
   m184(_i,_9, _10) /* array<int>~.set~ */;
  }
  function m186(_i) {// List<int>.getSize)
   return _i[1];
  }
  function m187(_i, _a0, _a1) {// String~.setChar~)
   let _4 = _a0;
   let _5 = _a1;
   m262(_i[0],_4, _5) /* Buffer<int>~.set~ */;
  }
  function m188(_i, _a0) {// List<int>.get)
   let _4 = _a0;
   let _5 = m261(_i[0],_4) /* array<int>~.get */;
   return _5;
  }
  function m189(_i, _a0) {// List<int>~.MakeCopy)
   let _5 = [];
   m163(_a0,_i, _5) /* Map<any, any>~.put~ */;
   let _4 = _5;
   let _7 = m79(_a0,_i[0]) /* Map<any, any>~.get */;
   let _8 = _7 === null;
   let _9;
   if (_8) {
    _9 = m263(_i[0],_a0) /* array<int>~.MakeCopyM */;
   }
   else {
    _9 = _7;
   }
   let _6 = _9;
   let _10 = _i[1];
   _4[0] = _6;
   _4[1] = _10;
   return _4;
  }
  function m190(_i, _a0, _a1) {// array<String>~.foldEx)
   let _4 = _a0;
   let _5 = 0;
   let _6 = (_5<_i[0]);
   while (_6) {
    let _7 = _5;
    let _10 = m259(_i,_7) /* array<String>~.get */;
    let _9 = _10 === null;
    let _8;
    if (_9) {
     _9 = false;
     _8 = null;
    }
    else {
     _9 = true;
     _8 = _10;
    }
    if (_9) {
     let _11 = _4;
     let _12 = _8;
     _4 = m264(_a1,_11, _12) /* lamcall71 */;
    }
    _5 = _capi(_5+(1));
    let _14 = (_5<_i[0]);
    _6 = _14;
   }
   return _4;
  }
  function m191(_i) {// String.getLen)
   let _2 = m100(_i[0],) /* Buffer<int>~.getLen */;
   return _2;
  }
  function m192(_a0) {// Buffer<int>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(0)];
   return _1;
  }
  function m193(_i, _a0) {// array<String>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m259(_i,_6) /* array<String>~.get */;
    let _7 = _8 === null;
    let _5;
    if (_7) {
     _7 = false;
     _5 = null;
    }
    else {
     _7 = true;
     _5 = _8;
    }
    if (_7) {
     let _9 = _5;
     m265(_a0,_9) /* lamcall74 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m194(_i, _a0, _a1) {// String.writeTo)
   let _4 = m100(_i[0],) /* Buffer<int>~.getLen */;
   let _5 = 0;
   let _6 = (_5<_4);
   while (_6) {
    let _7 = _capi(_5+_a1);
    let _8 = _5;
    let _9 = m198(_i[0],_8) /* Buffer<int>~.get */;
    m187(_a0,_7, _9) /* String~.setChar~ */;
    _5 = _capi(_5+(1));
    let _11 = (_5<_4);
    _6 = _11;
   }
  }
  function m195(_i, _a0) {// int~.getAndAdd~)
   let _3 = _i[0];
   _i[0] = _capi(_i[0]+_a0);
   return _3;
  }
  function m196(_i, _a0) {// String~.MakeCopy)
   let _4 = [];
   m163(_a0,_i, _4) /* Map<any, any>~.put~ */;
   let _3 = _4;
   let _6 = m79(_a0,_i[0]) /* Map<any, any>~.get */;
   let _7 = _6 === null;
   let _8;
   if (_7) {
    _8 = m266(_i[0],_a0) /* Buffer<int>~.MakeCopyM */;
   }
   else {
    _8 = _6;
   }
   let _5 = _8;
   _3[0] = _5;
   return _3;
  }
  function m197(_a0, _a1) {// int.shiftRight)
   let _2 = _capi(_a0>>_a1);
   return _2;
  }
  function m198(_i, _a0) {// Buffer<int>~.get)
   let _3 = _i[1 + _a0] || 0;
   return _3;
  }
  function m199(_i) {// List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.getSize)
   return _i[1];
  }
  function m200(_i, _a0) {// List<factory.Game.BoardPoint>.find)
   let _5 = [(500), _i, _a0];
   let _6 = m267(_i[0],_5) /* array<factory.Game.BoardPoint>~.find */;
   return _6;
  }
  function m201(_i) {// array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.getLength)
   return _i[0];
  }
  function m202(_i, _a0) {// array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m203(_i, _a0) {// Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.get)
   let _3 = 0;
   let _4 = m270(_i[0],) /* List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.getSize */;
   let _5 = (_3<_4);
   while (_5) {
    let _7 = _3;
    let _8 = m271(_i[0],_7) /* List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.get */;
    let _10 = _8 === null;
    let _9;
    if (_10) {
     return null;
    }
    else {
     _9 = _8;
    }
    let _6 = _9;
    let _11 = m272(_6,) /* Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>.getKey */;
    let _13 = m139(_11,_a0) /* factory.Game.BoardPoint.Equals */;
    if (_13) {
     let _12 = m273(_6,) /* Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>.getValue */;
     return _12;
    }
    _3 = _capi(_3+(1));
    let _15 = m270(_i[0],) /* List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.getSize */;
    let _16 = (_3<_15);
    _5 = _16;
   }
   let _17 = null;
   return _17;
  }
  function m204(_i) {// array<factory.Game.ColorRichness>~.getLength)
   return _i[0];
  }
  function m205(_a0) {// array<factory.Game.ColorRichness>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m206(_i, _a0) {// array<factory.Game.ColorRichness>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m275(_i,_5) /* array<factory.Game.ColorRichness>~.get */;
    let _7 = _3;
    m274(_a0,_6, _7) /* lamcall88 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m207(_i, _a0, _a1) {// 89.bouncelam$500~ (factory.Game.ColorRichness? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m208(_i[1],_6, _7, _8) /* 45.loclam$lambda<void, factory.Game.ColorRichness?, int>$500~ (factory.Game.ColorRichness? val, int idx, array<factory.Game.ColorRichness>~ next) */;
   return undefined;
  }
  function m208(_i, _a0, _a1, _a2) {// 45.loclam$lambda<void, factory.Game.ColorRichness?, int>$500~ (factory.Game.ColorRichness? val, int idx, array<factory.Game.ColorRichness>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m209(_a2,_6, _7) /* array<factory.Game.ColorRichness>~.set~ */;
   return undefined;
  }
  function m209(_i, _a0, _a1) {// array<factory.Game.ColorRichness>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m210(_i, _a0) {// Map<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.putNew~)
   let _4 = m276() /* Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.NewManual */;
   let _5 = _a0;
   let _6 = _4;
   m277(_i[0],_5, _6) /* array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.set~ */;
   return _4;
  }
  function m211(_i, _a0, _a1) {// Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.put~)
   let _5 = _a0;
   let _6 = _a1;
   let _4 = m278(_5, _6) /* Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>.NewManual */;
   let _7 = m279(_i[0],) /* List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.getLen */;
   let _8 = 0;
   let _9 = (_8<_7);
   while (_9) {
    let _11 = _8;
    let _12 = m271(_i[0],_11) /* List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.get */;
    let _14 = _12 === null;
    let _13;
    if (_14) {
     return null;
    }
    else {
     _13 = _12;
    }
    let _10 = _13;
    let _15 = m272(_10,) /* Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>.getKey */;
    let _19 = m139(_15,_a0) /* factory.Game.BoardPoint.Equals */;
    if (_19) {
     let _16 = _8;
     let _17 = _4;
     m280(_i[0],_16, _17) /* List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.set~ */;
     let _18 = m273(_10,) /* Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>.getValue */;
     return _18;
    }
    _8 = _capi(_8+(1));
    let _21 = (_8<_7);
    _9 = _21;
   }
   let _22 = _4;
   m281(_i[0],_22) /* List<Entry<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>>~.add~ */;
   let _23 = null;
   return _23;
  }
  function m212(_i, _a0) {// array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m202(_i,_6) /* array<Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>~.get */;
    let _7 = _8 === null;
    let _5;
    if (_7) {
     _7 = false;
     _5 = null;
    }
    else {
     _7 = true;
     _5 = _8;
    }
    if (_7) {
     let _9 = _5;
     m282(_a0,_9) /* lamcall90 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m213(_i, _a0) {// 91.bouncelam$500~ (Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~ oldEnt))
   let _4 = _a0;
   m214(_i[1],_4) /* 42.loclam$lambda<void, Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>$500~ (Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~ oldEnt) */;
   return undefined;
  }
  function m214(_i, _a0) {// 42.loclam$lambda<void, Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~>$500~ (Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~ oldEnt))
   let _5 = [(500), _i];
   m283(_a0,_5) /* Entries<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.forEach */;
  }
  function m215(_i, _a0) {// List<factory.Game.ColorRichness>~.forEach)
   let _4 = _a0;
   m286(_i[0],_4) /* array<factory.Game.ColorRichness>~.forEachEx */;
  }
  function m216(_i, _a0) {// 93.bouncelam$500 (factory.Game.ColorRichness col))
   let _6 = _a0;
   let _7 = _i[1];
   let _8 = _i[2];
   let _9 = _i[3];
   m217(_6, _7, _8, _9) /* 20.loclam$lambda<void, factory.Game.ColorRichness>$500 (factory.Game.ColorRichness col, int~ green, int~ blue, int~ red) */;
   return undefined;
  }
  function m217(_a0, _a1, _a2, _a3) {// 20.loclam$lambda<void, factory.Game.ColorRichness>$500 (factory.Game.ColorRichness col, int~ green, int~ blue, int~ red))
   let _4 = m29(_a3,) /* int~.getValue */;
   let _5 = m121(_a0,) /* factory.Game.ColorRichness.getRed */;
   let _6 = _capi(_4+_5);
   m287(_a3,_6) /* int~.set~ */;
   let _7 = m29(_a1,) /* int~.getValue */;
   let _8 = m122(_a0,) /* factory.Game.ColorRichness.getGreen */;
   let _9 = _capi(_7+_8);
   m287(_a1,_9) /* int~.set~ */;
   let _10 = m29(_a2,) /* int~.getValue */;
   let _11 = m123(_a0,) /* factory.Game.ColorRichness.getBlue */;
   let _12 = _capi(_10+_11);
   m287(_a2,_12) /* int~.set~ */;
  }
  function m218(_a0, _a1) {// int.max)
   let _2 = (_a0>_a1);
   if (_2) {
    return _a0;
   }
   return _a1;
  }
  function m219(_a0, _a1) {// int.min)
   let _2 = (_a0<_a1);
   if (_2) {
    return _a0;
   }
   return _a1;
  }
  function m221(_i, _a0) {// lamcall78)
   let _3 = m127(_i,_a0) /* 79.bouncelam$500~ (String anonlam10686$10687) */;
   return _3;
  }
  function m222(_i) {// List<String>~.getFirst)
   let _4 = m259(_i[0],(0)) /* array<String>~.get */;
   return _4;
  }
  function m223(_i, _a0) {// List<String>~.get)
   let _4 = _a0;
   let _5 = m259(_i[0],_4) /* array<String>~.get */;
   return _5;
  }
  function m225() {// List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.NewManual)
   let _2 = m231((5)) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m226(_i, _a0) {// array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.get)
   let _5 = (_a0<(0));
   if (_5) {
    let _4 = null;
    return _4;
   }
   let _7 = (_a0>=_i[0]);
   if (_7) {
    let _6 = null;
    return _6;
   }
   let _8 = _i[1 + _a0];
   return _8;
  }
  function m227(_i) {// factory.Game.BoardPoint.get$x)
   return _i[0];
  }
  function m228(_i) {// factory.Game.BoardPoint.get$y)
   return _i[1];
  }
  function m229(_i, _a0, _a1) {// array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m230(_i) {// array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.getLength)
   return _i[0];
  }
  function m231(_a0) {// array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m232(_i, _a0) {// array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m226(_i,_5) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.get */;
    let _7 = _3;
    m289(_a0,_6, _7) /* lamcall94 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m233(_i, _a0, _a1) {// 95.bouncelam$500~ (Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m234(_i[1],_6, _7, _8) /* 21.loclam$lambda<void, Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>?, int>$500~ (Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>? val, int idx, array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~ next) */;
   return undefined;
  }
  function m234(_i, _a0, _a1, _a2) {// 21.loclam$lambda<void, Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>?, int>$500~ (Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>? val, int idx, array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m229(_a2,_6, _7) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.set~ */;
   return undefined;
  }
  function m235(_i, _a0) {// List<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.forEach)
   let _4 = _a0;
   m290(_i[0],_4) /* array<Entry<factory.Game.BoardPoint, factory.Game.ColorRichness>>~.forEachEx */;
  }
  function m236(_i) {// List<Entry<any, any>>~.getSize)
   return _i[1];
  }
  function m237(_i, _a0) {// List<Entry<any, any>>~.get)
   let _4 = _a0;
   let _5 = m291(_i[0],_4) /* array<Entry<any, any>>~.get */;
   return _5;
  }
  function m238(_i) {// Entry<any, any>.getKey)
   return _i[0];
  }
  function m239(_i) {// Entry<any, any>.getValue)
   return _i[1];
  }
  function m240(_i, _a0) {// Map<any, any>~.putNew~)
   let _4 = m292() /* Entries<any, any>~.NewManual */;
   let _5 = _a0;
   let _6 = _4;
   m293(_i[0],_5, _6) /* array<Entries<any, any>~>~.set~ */;
   return _4;
  }
  function m241(_i, _a0, _a1) {// Entries<any, any>~.put~)
   let _5 = _a0;
   let _6 = _a1;
   let _4 = m294(_5, _6) /* Entry<any, any>.NewManual */;
   let _7 = m295(_i[0],) /* List<Entry<any, any>>~.getLen */;
   let _8 = 0;
   let _9 = (_8<_7);
   while (_9) {
    let _11 = _8;
    let _12 = m237(_i[0],_11) /* List<Entry<any, any>>~.get */;
    let _14 = _12 === null;
    let _13;
    if (_14) {
     return null;
    }
    else {
     _13 = _12;
    }
    let _10 = _13;
    let _15 = m238(_10,) /* Entry<any, any>.getKey */;
    let _19 = (_15) === (_a0);
    if (_19) {
     let _16 = _8;
     let _17 = _4;
     m296(_i[0],_16, _17) /* List<Entry<any, any>>~.set~ */;
     let _18 = m239(_10,) /* Entry<any, any>.getValue */;
     return _18;
    }
    _8 = _capi(_8+(1));
    let _21 = (_8<_7);
    _9 = _21;
   }
   let _22 = _4;
   m297(_i[0],_22) /* List<Entry<any, any>>~.add~ */;
   let _23 = null;
   return _23;
  }
  function m242(_i, _a0) {// array<Entries<any, any>~>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m161(_i,_6) /* array<Entries<any, any>~>~.get */;
    let _7 = _8 === null;
    let _5;
    if (_7) {
     _7 = false;
     _5 = null;
    }
    else {
     _7 = true;
     _5 = _8;
    }
    if (_7) {
     let _9 = _5;
     m298(_a0,_9) /* lamcall96 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m243(_i, _a0) {// 97.bouncelam$500~ (Entries<any, any>~ oldEnt))
   let _4 = _a0;
   m244(_i[1],_4) /* 61.loclam$lambda<void, Entries<any, any>~>$500~ (Entries<any, any>~ oldEnt) */;
   return undefined;
  }
  function m244(_i, _a0) {// 61.loclam$lambda<void, Entries<any, any>~>$500~ (Entries<any, any>~ oldEnt))
   let _5 = [(500), _i];
   m299(_a0,_5) /* Entries<any, any>~.forEach */;
  }
  function m245() {// Entries<factory.Game.BoardPoint, bool>~.NewManual)
   let _1 = m302() /* List<Entry<factory.Game.BoardPoint, bool>>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m246(_i, _a0, _a1) {// array<Entries<factory.Game.BoardPoint, bool>~>~.set~)
   let _6 = (_a0<(0));
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _8 = (_a0>=_i[0]);
   if (_8) {
    let _7 = null;
    return _7;
   }
   _i[1 + _a0] = _a1;
  }
  function m247(_a0, _a1) {// Entry<factory.Game.BoardPoint, bool>.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m248(_i) {// List<Entry<factory.Game.BoardPoint, bool>>~.getLen)
   return _i[1];
  }
  function m249(_i, _a0) {// List<Entry<factory.Game.BoardPoint, bool>>~.get)
   let _4 = _a0;
   let _5 = m303(_i[0],_4) /* array<Entry<factory.Game.BoardPoint, bool>>~.get */;
   return _5;
  }
  function m250(_i) {// Entry<factory.Game.BoardPoint, bool>.getKey)
   return _i[0];
  }
  function m251(_i, _a0, _a1) {// List<Entry<factory.Game.BoardPoint, bool>>~.set~)
   let _6 = (_a0>=_i[1]);
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _7 = _a0;
   let _8 = _a1;
   let _9 = m304(_i[0],_7, _8) /* array<Entry<factory.Game.BoardPoint, bool>>~.set~ */;
   return _9;
  }
  function m252(_i) {// Entry<factory.Game.BoardPoint, bool>.getValue)
   return _i[1];
  }
  function m253(_i, _a0) {// List<Entry<factory.Game.BoardPoint, bool>>~.add~)
   let _4 = m305(_i[0],) /* array<Entry<factory.Game.BoardPoint, bool>>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m305(_i[0],) /* array<Entry<factory.Game.BoardPoint, bool>>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m306(_8) /* array<Entry<factory.Game.BoardPoint, bool>>~.NewManual */;
    let _10 = [(500), _i, _5];
    m307(_i[0],_10) /* array<Entry<factory.Game.BoardPoint, bool>>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m304(_i[0],_12, _13) /* array<Entry<factory.Game.BoardPoint, bool>>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m254(_i, _a0) {// lamcall82)
   m171(_i,_a0) /* 83.bouncelam$500~ (Entries<factory.Game.BoardPoint, bool>~ oldEnt) */;
   return undefined;
  }
  function m255(_i, _a0) {// Entries<factory.Game.BoardPoint, bool>~.forEach)
   let _3 = _a0;
   m310(_i[0],_3) /* List<Entry<factory.Game.BoardPoint, bool>>~.forEach */;
  }

function MAIN(_binding, ...inArgs) {
 const _io = new I$O(_binding);
  function m0() {// factory.Game.game)
   let _0 = [];
   _doLog('--> [s 19]', `Hello World to you!`);
   m1((3)) /* factory.Game.GameBinding~.buildBoard */;
   let _4 = m3() /* factory.Game.SpecialTileType.getSOURCEG */;
   m2((0), (1), _4) /* factory.Game.GameBinding~.setSpecialTile */;
   let _7 = m4() /* factory.Game.SpecialTileType.getSINK */;
   m2((2), (1), _7) /* factory.Game.GameBinding~.setSpecialTile */;
   let _9 = _0;
   let _8 = m5(_9) /* factory.Game~.NewManual */;
   let _11 = [(500), _8];
   return _11;
  }
  function m1(_a0) {// factory.Game.GameBinding~.buildBoard)
   _io.ow.addI32(_a0);
    _io.flushDirect(111);
   let _1 = _io.ir.getIB();
   if (_1) {
    return undefined;
   }
   let _2 = null;
   return _2;
  }
  function m2(_a0, _a1, _a2) {// factory.Game.GameBinding~.setSpecialTile)
   _io.ow.addI32(_a0);
   _io.ow.addI32(_a1);
   _io.ow.addI8(_a2);
    _io.flushDirect(112);
   let _3 = _io.ir.getIB();
   if (_3) {
    return undefined;
   }
   let _4 = null;
   return _4;
  }
  function m6(_i) {// 13.bouncelam$500 ())
   let _3 = _i[1];
   m7(_3) /* 10.loclam$lambda<void>?$500 (factory.Game~ gm) */;
   return undefined;
  }
  function m7(_a0) {// 10.loclam$lambda<void>?$500 (factory.Game~ gm))
   m8(_a0,) /* factory.Game~.update~ */;
  }
  function m8(_i) {// factory.Game~.update~)
   _i[1] = _capi(_i[1]+(1));
   let _13 = _capi(_i[1]%(50));
   let _17 = (_13===(0));
   if (_17) {
    _i[2] = _capi(_i[2]+_i[3]);
    let _15 = _i[2];
    let _16 = _i[3];
    m9(_15, _16) /* factory.Game.GameBinding~.setCurrency */;
   }
   let _18 = m10() /* factory.Game.GameBinding~.getNeedValidation */;
   let _20 = _18 === null;
   let _19;
   if (_20) {
    _19 = false;
   }
   else {
    _19 = _18;
   }
   let _21 = _19;
   let _22;
   if (_21) {
    _22 = true;
   }
   else {
    _22 = _i[5];
   }
   if (_22) {
    _i[5] = false;
    let _23 = m11() /* List<factory.Game.BoardPoint>~.NewManual */;
    let _24 = m11() /* List<factory.Game.BoardPoint>~.NewManual */;
    let _25 = m12() /* Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.NewManual */;
    let _26 = 0;
    let _27 = (_26<_i[4]);
    while (_27) {
     let _28 = 0;
     let _29 = (_28<_i[4]);
     while (_29) {
      let _30 = _28;
      let _31 = _26;
      let _34 = m13(_30, _31) /* factory.Game.GameBinding~.getSpecialType */;
      let _33 = _34 === null;
      let _32;
      if (_33) {
       _33 = false;
       _32 = null;
      }
      else {
       _33 = true;
       _32 = _34;
      }
      if (_33) {
       let _36 = _28;
       let _37 = _26;
       let _35 = m14(_36, _37) /* factory.Game.BoardPoint.NewManual */;
       let _38 = m15() /* factory.Game.SpecialTileType.getSOURCER */;
       let _45 = (_32===_38);
       if (_45) {
        let _39 = _35;
        let _43 = m17((2), (0), (0)) /* factory.Game.ColorRichness.NewManual */;
        m16(_25,_39, _43) /* Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.put~ */;
        let _44 = _35;
        m18(_24,_44) /* List<factory.Game.BoardPoint>~.add~ */;
       }
       else {
        let _46 = m3() /* factory.Game.SpecialTileType.getSOURCEG */;
        let _47 = (_32===_46);
        if (_47) {
         let _48 = _35;
         let _52 = m17((0), (2), (0)) /* factory.Game.ColorRichness.NewManual */;
         m16(_25,_48, _52) /* Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.put~ */;
         let _53 = _35;
         m18(_24,_53) /* List<factory.Game.BoardPoint>~.add~ */;
        }
        else {
         let _54 = m19() /* factory.Game.SpecialTileType.getSOURCEB */;
         let _55 = (_32===_54);
         if (_55) {
          let _56 = _35;
          let _60 = m17((0), (0), (2)) /* factory.Game.ColorRichness.NewManual */;
          m16(_25,_56, _60) /* Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.put~ */;
          let _61 = _35;
          m18(_24,_61) /* List<factory.Game.BoardPoint>~.add~ */;
         }
         else {
          let _62 = m20() /* factory.Game.SpecialTileType.getMERGER */;
          let _63 = (_32===_62);
          if (_63) {
           let _65 = m21((0)) /* int.getPtr */;
           let _66 = [(500), _i, _65, _28, _26];
           let _68 = m25() /* factory.Game.Side.getBOTTOM */;
           m24(_66,_68) /* lamcall25 */;
           let _69 = m26() /* factory.Game.Side.getLEFT */;
           m24(_66,_69) /* lamcall25 */;
           let _70 = m27() /* factory.Game.Side.getTOP */;
           m24(_66,_70) /* lamcall25 */;
           let _71 = m28() /* factory.Game.Side.getRIGHT */;
           m24(_66,_71) /* lamcall25 */;
           let _72 = m29(_65,) /* int~.getValue */;
           let _77 = (_72<(4));
           if (_77) {
            let _74 = _28;
            let _75 = _26;
            let _76 = m14(_74, _75) /* factory.Game.BoardPoint.NewManual */;
            m18(_23,_76) /* List<factory.Game.BoardPoint>~.add~ */;
           }
          }
         }
        }
       }
      }
      _28 = _capi(_28+(1));
      let _79 = (_28<_i[4]);
      _29 = _79;
     }
     _26 = _capi(_26+(1));
     let _81 = (_26<_i[4]);
     _27 = _81;
    }
    let _82 = m30(_23) /* SerializationBuilder.makeBetterCopy */;
    _i[3] = 0;
    let _83 = m31() /* Set<factory.Game.BoardPoint>~.NewManual */;
    let _84 = m32() /* Map<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.NewManual */;
    let _85 = m33(_24,) /* List<factory.Game.BoardPoint>~.getIsNonEmpty */;
    while (_85) {
     let _86 = m34(_24,) /* List<factory.Game.BoardPoint>~.pop~ */;
     let _88 = _86 === null;
     let _87;
     if (_88) {
      return undefined;
     }
     else {
      _87 = _86;
     }
     let _89 = _87;
     let _90 = _89;
     m35(_83,_90) /* Set<factory.Game.BoardPoint>~.add~ */;
     let _91 = m36() /* StringBuilder~.NewManual */;
     let _92 = [[8,71,111,116,32,115,114,99,32]];
     m37(_91,_92) /* StringBuilder~.add~ */;
     let _93 = m38(_89,) /* factory.Game.BoardPoint.getX */;
     _92 = m39(_93) /* int.Stringify */;
     m37(_91,_92) /* StringBuilder~.add~ */;
     _92 = [[1,32]];
     m37(_91,_92) /* StringBuilder~.add~ */;
     let _94 = m40(_89,) /* factory.Game.BoardPoint.getY */;
     _92 = m39(_94) /* int.Stringify */;
     m37(_91,_92) /* StringBuilder~.add~ */;
     _92 = m41(_91,) /* StringBuilder~.getResult */;
     m42(_92,) /* String.OutputBytes */;
      _io.flushDirect(-8);
     let _95 = _89;
     let _96 = m43(_25,_95) /* Map<factory.Game.BoardPoint, factory.Game.ColorRichness>~.get */;
     let _98 = _96 === null;
     let _97;
     if (_98) {
      _97 = m17((0), (1), (0)) /* factory.Game.ColorRichness.NewManual */;
     }
     else {
      _97 = _96;
     }
     let _102 = _97;
     let _103 = [(500), _i, _25, _24];
     let _105 = _i[1];
     let _106 = _102;
     let _107 = _82;
     let _108 = _84;
     let _109 = _103;
     let _110 = m25() /* factory.Game.Side.getBOTTOM */;
     let _111 = m38(_89,) /* factory.Game.BoardPoint.getX */;
     let _112 = m40(_89,) /* factory.Game.BoardPoint.getY */;
     let _114 = _capi(_112-(1));
     m46(_i,_105, _106, _107, _108, _109, _110, _111, _114) /* factory.Game~.stabilizeConveyors~ */;
     let _115 = _i[1];
     let _116 = _102;
     let _117 = _82;
     let _118 = _84;
     let _119 = _103;
     let _120 = m26() /* factory.Game.Side.getLEFT */;
     let _121 = m38(_89,) /* factory.Game.BoardPoint.getX */;
     let _123 = _capi(_121+(1));
     let _124 = m40(_89,) /* factory.Game.BoardPoint.getY */;
     m46(_i,_115, _116, _117, _118, _119, _120, _123, _124) /* factory.Game~.stabilizeConveyors~ */;
     let _125 = _i[1];
     let _126 = _102;
     let _127 = _82;
     let _128 = _84;
     let _129 = _103;
     let _130 = m27() /* factory.Game.Side.getTOP */;
     let _131 = m38(_89,) /* factory.Game.BoardPoint.getX */;
     let _132 = m40(_89,) /* factory.Game.BoardPoint.getY */;
     let _134 = _capi(_132+(1));
     m46(_i,_125, _126, _127, _128, _129, _130, _131, _134) /* factory.Game~.stabilizeConveyors~ */;
     let _135 = _i[1];
     let _136 = _102;
     let _137 = _82;
     let _138 = _84;
     let _139 = _103;
     let _140 = m28() /* factory.Game.Side.getRIGHT */;
     let _141 = m38(_89,) /* factory.Game.BoardPoint.getX */;
     let _143 = _capi(_141-(1));
     let _144 = m40(_89,) /* factory.Game.BoardPoint.getY */;
     m46(_i,_135, _136, _137, _138, _139, _140, _143, _144) /* factory.Game~.stabilizeConveyors~ */;
     let _145 = m33(_24,) /* List<factory.Game.BoardPoint>~.getIsNonEmpty */;
     _85 = _145;
    }
    let _146 = _i[1];
    m47(_146) /* factory.Game.GameBinding~.validateAll */;
   }
   let _147 = true;
   while (_147) {
    let _148 = m48() /* factory.Game.GameBinding~.getIncomingClick */;
    let _150 = _148 === null;
    let _149;
    if (_150) {
     return undefined;
    }
    else {
     _149 = _148;
    }
    let _151 = _149;
    let _152 = [(500), _i];
    let _154 = [[8,112,114,101,115,116,105,103,101]];
    let _178 = m51(_151,_154) /* String.Equals */;
    if (_178) {
     let _155 = _capi(_i[4]*_i[4]);
     let _157 = _capi(_155*(10));
     let _159 = (_i[4]===(3));
     if (_159) {
      _157 = 30;
     }
     let _161 = (_i[4]===(5));
     if (_161) {
      _157 = 100;
     }
     let _166 = (_i[2]<_157);
     if (_166) {
      let _162 = m36() /* StringBuilder~.NewManual */;
      let _163 = [[6,67,111,115,116,58,32]];
      m37(_162,_163) /* StringBuilder~.add~ */;
      _163 = m39(_157) /* int.Stringify */;
      m37(_162,_163) /* StringBuilder~.add~ */;
      _163 = m41(_162,) /* StringBuilder~.getResult */;
      let _164 = _163;
      let _165 = m52(_i,_164) /* factory.Game~.showError~ */;
      return _165;
     }
     _i[6] = 0;
     _i[7] = 0;
     _i[8] = 0;
     _i[9] = 0;
     _i[2] = _capi(_i[2]-_157);
     _i[4] = _capi(_i[4]+(2));
     let _168 = _i[4];
     m1(_168) /* factory.Game.GameBinding~.buildBoard */;
     let _171 = _capi(_i[4]/(2));
     let _172 = m3() /* factory.Game.SpecialTileType.getSOURCEG */;
     m2((1), _171, _172) /* factory.Game.GameBinding~.setSpecialTile */;
     let _174 = _capi(_i[4]-(2));
     let _176 = _capi(_i[4]/(2));
     let _177 = m4() /* factory.Game.SpecialTileType.getSINK */;
     m2(_174, _176, _177) /* factory.Game.GameBinding~.setSpecialTile */;
    }
    else {
     let _179 = [[3,114,101,100]];
     let _180 = m51(_151,_179) /* String.Equals */;
     if (_180) {
      let _183 = _capi(_i[6]+(1));
      let _184 = _capi((30)*_183);
      let _189 = (_i[2]<_184);
      if (_189) {
       let _185 = m36() /* StringBuilder~.NewManual */;
       let _186 = [[6,67,111,115,116,58,32]];
       m37(_185,_186) /* StringBuilder~.add~ */;
       _186 = m39(_184) /* int.Stringify */;
       m37(_185,_186) /* StringBuilder~.add~ */;
       _186 = m41(_185,) /* StringBuilder~.getResult */;
       let _187 = _186;
       let _188 = m52(_i,_187) /* factory.Game~.showError~ */;
       return _188;
      }
      _i[2] = _capi(_i[2]-_184);
      _i[6] = _capi(_i[6]+(1));
      let _191 = m15() /* factory.Game.SpecialTileType.getSOURCER */;
      m53(_152,_191) /* lamcall55 */;
     }
     else {
      let _192 = [[5,103,114,101,101,110]];
      let _193 = m51(_151,_192) /* String.Equals */;
      if (_193) {
       let _196 = _capi(_i[7]+(1));
       let _197 = _capi((30)*_196);
       let _202 = (_i[2]<_197);
       if (_202) {
        let _198 = m36() /* StringBuilder~.NewManual */;
        let _199 = [[6,67,111,115,116,58,32]];
        m37(_198,_199) /* StringBuilder~.add~ */;
        _199 = m39(_197) /* int.Stringify */;
        m37(_198,_199) /* StringBuilder~.add~ */;
        _199 = m41(_198,) /* StringBuilder~.getResult */;
        let _200 = _199;
        let _201 = m52(_i,_200) /* factory.Game~.showError~ */;
        return _201;
       }
       _i[2] = _capi(_i[2]-_197);
       _i[7] = _capi(_i[7]+(1));
       let _204 = m3() /* factory.Game.SpecialTileType.getSOURCEG */;
       m53(_152,_204) /* lamcall55 */;
      }
      else {
       let _205 = [[4,98,108,117,101]];
       let _206 = m51(_151,_205) /* String.Equals */;
       if (_206) {
        let _209 = _capi(_i[8]+(1));
        let _210 = _capi((30)*_209);
        let _215 = (_i[2]<_210);
        if (_215) {
         let _211 = m36() /* StringBuilder~.NewManual */;
         let _212 = [[6,67,111,115,116,58,32]];
         m37(_211,_212) /* StringBuilder~.add~ */;
         _212 = m39(_210) /* int.Stringify */;
         m37(_211,_212) /* StringBuilder~.add~ */;
         _212 = m41(_211,) /* StringBuilder~.getResult */;
         let _213 = _212;
         let _214 = m52(_i,_213) /* factory.Game~.showError~ */;
         return _214;
        }
        _i[2] = _capi(_i[2]-_210);
        _i[8] = _capi(_i[8]+(1));
        let _217 = m19() /* factory.Game.SpecialTileType.getSOURCEB */;
        m53(_152,_217) /* lamcall55 */;
       }
       else {
        let _218 = [[6,109,101,114,103,101,114]];
        let _219 = m51(_151,_218) /* String.Equals */;
        if (_219) {
         let _222 = _capi(_i[9]+(1));
         let _223 = _capi((20)*_222);
         let _228 = (_i[2]<_223);
         if (_228) {
          let _224 = m36() /* StringBuilder~.NewManual */;
          let _225 = [[6,67,111,115,116,58,32]];
          m37(_224,_225) /* StringBuilder~.add~ */;
          _225 = m39(_223) /* int.Stringify */;
          m37(_224,_225) /* StringBuilder~.add~ */;
          _225 = m41(_224,) /* StringBuilder~.getResult */;
          let _226 = _225;
          let _227 = m52(_i,_226) /* factory.Game~.showError~ */;
          return _227;
         }
         _i[2] = _capi(_i[2]-_223);
         _i[9] = _capi(_i[9]+(1));
         let _230 = m20() /* factory.Game.SpecialTileType.getMERGER */;
         m53(_152,_230) /* lamcall55 */;
        }
        else {
         let _231 = m36() /* StringBuilder~.NewManual */;
         let _232 = [[20,84,79,68,79,32,117,110,107,110,111,119,110,32,99,108,105,99,107,32,39]];
         m37(_231,_232) /* StringBuilder~.add~ */;
         m37(_231,_151) /* StringBuilder~.add~ */;
         _232 = [[1,39]];
         m37(_231,_232) /* StringBuilder~.add~ */;
         _232 = m41(_231,) /* StringBuilder~.getResult */;
         m42(_232,) /* String.OutputBytes */;
          _io.flushDirect(-8);
        }
       }
      }
     }
    }
    _147 = (true);
   }
  }
  function m9(_a0, _a1) {// factory.Game.GameBinding~.setCurrency)
   _io.ow.addI32(_a0);
   _io.ow.addI32(_a1);
    _io.flushDirect(108);
   let _2 = _io.ir.getIB();
   if (_2) {
    return undefined;
   }
   let _3 = null;
   return _3;
  }
  function m10() {// factory.Game.GameBinding~.getNeedValidation)
    _io.flushDirect(101);
   let _0 = _io.ir.getIB();
   if (_0) {
    let _1 = _io.ir.getIB();
    return _1;
   }
   let _2 = null;
   return _2;
  }
  function m13(_a0, _a1) {// factory.Game.GameBinding~.getSpecialType)
   _io.ow.addI32(_a0);
   _io.ow.addI32(_a1);
    _io.flushDirect(107);
   let _2 = _io.ir.getIB();
   if (_2) {
    let _3 = m56() /* factory.Game.SpecialTileType.Read */;
    return _3;
   }
   let _4 = null;
   return _4;
  }
  function m22(_i, _a0) {// 26.bouncelam$500~ (factory.Game.Side dir))
   let _7 = _a0;
   let _8 = _i[2];
   let _9 = _i[3];
   let _10 = _i[4];
   m23(_i[1],_7, _8, _9, _10) /* 10.loclam$lambda<void, factory.Game.Side>$500~ (factory.Game.Side dir, int~ hits, int x, int y) */;
   return undefined;
  }
  function m23(_i, _a0, _a1, _a2, _a3) {// 10.loclam$lambda<void, factory.Game.Side>$500~ (factory.Game.Side dir, int~ hits, int x, int y))
   let _15 = m73(_a0) /* factory.Game.Side.getDiffX */;
   let _16 = _capi(_a2+_15);
   let _17 = m74(_a0) /* factory.Game.Side.getDiffY */;
   let _18 = _capi(_a3+_17);
   let _21 = m72(_16, _18) /* factory.Game.GameBinding~.getConveyorType */;
   let _20 = _21 === null;
   let _19;
   if (_20) {
    _20 = false;
    _19 = null;
   }
   else {
    _20 = true;
    _19 = _21;
   }
   if (_20) {
    let _22 = m76(_a0) /* factory.Game.Side.getOpposite */;
    let _24 = m75(_19, _22) /* factory.Game.ConveyorType.getOtherSide */;
    let _23 = _24 === null;
    _23 = (_23===(false));
    if (_23) {
     m77(_a1,) /* int~.increment~ */;
    }
   }
  }
  function m24(_i, _a0) {// lamcall25)
   m22(_i,_a0) /* 26.bouncelam$500~ (factory.Game.Side dir) */;
   return undefined;
  }
  function m288(_i) {// Buffer<int>~.Write)
   _io.ow.addI32(_i[0]);
   let _2 = 0;
   let _3 = (_2<_i[0]);
   while (_3) {
    let _5 = _2;
    let _4 = m198(_i,_5) /* Buffer<int>~.get */;
    _io.ow.addI32(_4);
    _2 = _capi(_2+(1));
    let _7 = (_2<_i[0]);
    _3 = _7;
   }
  }
  function m42(_i) {// String.OutputBytes)
   let _2 = m100(_i[0],) /* Buffer<int>~.getLen */;
   let _3 = 0;
   let _4 = (_3<_2);
   while (_4) {
    let _5 = _3;
    let _6 = m102(_i,_5) /* String.getChar */;
    m101(_6) /* int.OutputUnicodeBytes */;
    _3 = _capi(_3+(1));
    let _8 = (_3<_2);
    _4 = _8;
   }
  }
  function m46(_i, _a0, _a1, _a2, _a3, _a4, _a5, _a6, _a7) {// factory.Game~.stabilizeConveyors~)
   let _19 = _a6;
   let _20 = _a7;
   let _23 = m13(_19, _20) /* factory.Game.GameBinding~.getSpecialType */;
   let _22 = _23 === null;
   let _21;
   if (_22) {
    _22 = false;
    _21 = null;
   }
   else {
    _22 = true;
    _21 = _23;
   }
   if (_22) {
    let _24 = m4() /* factory.Game.SpecialTileType.getSINK */;
    let _27 = (_21===_24);
    if (_27) {
     let _25 = m104(_a1,) /* factory.Game.ColorRichness.getValue */;
     _i[3] = _capi(_i[3]+_25);
     let _26 = m105() /* factory.Game.StableStatus.getCONNECTED */;
     return _26;
    }
    let _28 = m20() /* factory.Game.SpecialTileType.getMERGER */;
    let _63 = (_21===_28);
    if (_63) {
     let _30 = [(500), _i, _a6, _a7];
     let _31 = m106(_a2,_30) /* List<factory.Game.BoardPoint>.some */;
     let _34 = (_31===(false));
     if (_34) {
      let _33 = m109() /* factory.Game.StableStatus.getDISCONNECTED */;
      return _33;
     }
     let _36 = _a6;
     let _37 = _a7;
     let _35 = m14(_36, _37) /* factory.Game.BoardPoint.NewManual */;
     let _39 = _35;
     let _42 = m110(_a3,_39) /* Map<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.get */;
     let _41 = _42 === null;
     let _40;
     if (_41) {
      _41 = false;
      _40 = null;
     }
     else {
      _41 = true;
      _40 = _42;
     }
     let _38;
     if (_41) {
      let _43 = _a1;
      m111(_40,_43) /* List<factory.Game.ColorRichness>~.add~ */;
      _38 = m112(_40,) /* List<factory.Game.ColorRichness>~.getLen */;
     }
     else {
      let _44 = m113() /* List<factory.Game.ColorRichness>~.NewManual */;
      let _45 = _a1;
      m111(_44,_45) /* List<factory.Game.ColorRichness>~.add~ */;
      let _46 = _35;
      let _47 = _44;
      m114(_a3,_46, _47) /* Map<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.put~ */;
      _38 = 1;
     }
     let _56 = (_38===(2));
     if (_56) {
      let _49 = _35;
      let _50 = _35;
      let _51 = m110(_a3,_50) /* Map<factory.Game.BoardPoint, List<factory.Game.ColorRichness>~>~.get */;
      let _53 = _51 === null;
      let _52;
      if (_53) {
       _52 = m113() /* List<factory.Game.ColorRichness>~.NewManual */;
      }
      else {
       _52 = _51;
      }
      let _54 = _52;
      let _55 = m116(_54) /* factory.Game.ColorRichness.fromList */;
      m115(_a4,_49, _55) /* lamcall53 */;
     }
     let _57 = m36() /* StringBuilder~.NewManual */;
     let _58 = [[17,83,116,97,98,105,108,105,122,101,32,77,69,82,71,69,82,32]];
     m37(_57,_58) /* StringBuilder~.add~ */;
     _58 = m39(_a6) /* int.Stringify */;
     m37(_57,_58) /* StringBuilder~.add~ */;
     _58 = [[1,32]];
     m37(_57,_58) /* StringBuilder~.add~ */;
     _58 = m39(_a7) /* int.Stringify */;
     m37(_57,_58) /* StringBuilder~.add~ */;
     _58 = [[3,32,124,32]];
     m37(_57,_58) /* StringBuilder~.add~ */;
     _58 = m117(_a5) /* factory.Game.Side.Stringify */;
     m37(_57,_58) /* StringBuilder~.add~ */;
     _58 = [[15,44,32,99,111,110,110,101,99,116,105,111,110,115,58,32]];
     m37(_57,_58) /* StringBuilder~.add~ */;
     _58 = m39(_38) /* int.Stringify */;
     m37(_57,_58) /* StringBuilder~.add~ */;
     _58 = m41(_57,) /* StringBuilder~.getResult */;
     m42(_58,) /* String.OutputBytes */;
      _io.flushDirect(-8);
     let _61 = (_38<=(2));
     if (_61) {
      let _60 = m105() /* factory.Game.StableStatus.getCONNECTED */;
      return _60;
     }
     _doLog('--> [s 28]', `Disconnecting > 2 connection`);
     let _62 = m109() /* factory.Game.StableStatus.getDISCONNECTED */;
     return _62;
    }
    let _64 = m36() /* StringBuilder~.NewManual */;
    let _65 = [[16,85,110,107,110,111,119,110,32,115,112,101,99,105,97,108,32]];
    m37(_64,_65) /* StringBuilder~.add~ */;
    _65 = m118(_21) /* factory.Game.SpecialTileType.Stringify */;
    m37(_64,_65) /* StringBuilder~.add~ */;
    _65 = m41(_64,) /* StringBuilder~.getResult */;
    m42(_65,) /* String.OutputBytes */;
     _io.flushDirect(-8);
    let _66 = m109() /* factory.Game.StableStatus.getDISCONNECTED */;
    return _66;
   }
   let _67 = _a6;
   let _68 = _a7;
   let _69 = m119(_67, _68) /* factory.Game.GameBinding~.getNonce */;
   let _71 = _69 === null;
   let _70;
   if (_71) {
    let _72 = m109() /* factory.Game.StableStatus.getDISCONNECTED */;
    return _72;
   }
   else {
    _70 = _69;
   }
   let _73 = _70;
   let _75 = (_a0===_73);
   if (_75) {
    let _74 = m109() /* factory.Game.StableStatus.getDISCONNECTED */;
    return _74;
   }
   let _76 = _a6;
   let _77 = _a7;
   let _78 = m36() /* StringBuilder~.NewManual */;
   let _79 = [[10,99,101,108,108,67,111,108,111,114,95]];
   m37(_78,_79) /* StringBuilder~.add~ */;
   let _80 = m121(_a1,) /* factory.Game.ColorRichness.getRed */;
   _79 = m39(_80) /* int.Stringify */;
   m37(_78,_79) /* StringBuilder~.add~ */;
   _79 = [[1,95]];
   m37(_78,_79) /* StringBuilder~.add~ */;
   let _81 = m122(_a1,) /* factory.Game.ColorRichness.getGreen */;
   _79 = m39(_81) /* int.Stringify */;
   m37(_78,_79) /* StringBuilder~.add~ */;
   _79 = [[1,95]];
   m37(_78,_79) /* StringBuilder~.add~ */;
   let _82 = m123(_a1,) /* factory.Game.ColorRichness.getBlue */;
   _79 = m39(_82) /* int.Stringify */;
   m37(_78,_79) /* StringBuilder~.add~ */;
   _79 = m41(_78,) /* StringBuilder~.getResult */;
   let _83 = _79;
   m120(_76, _77, _83) /* factory.Game.GameBinding~.setTileColorClass */;
   let _84 = _a6;
   let _85 = _a7;
   let _86 = m72(_84, _85) /* factory.Game.GameBinding~.getConveyorType */;
   let _88 = _86 === null;
   let _87;
   if (_88) {
    let _89 = m109() /* factory.Game.StableStatus.getDISCONNECTED */;
    return _89;
   }
   else {
    _87 = _86;
   }
   let _90 = _87;
   let _91 = _a5;
   let _92 = m75(_90, _91) /* factory.Game.ConveyorType.getOtherSide */;
   let _94 = _92 === null;
   let _93;
   if (_94) {
    let _95 = m109() /* factory.Game.StableStatus.getDISCONNECTED */;
    return _95;
   }
   else {
    _93 = _92;
   }
   let _96 = _93;
   let _97 = _a6;
   let _98 = _a7;
   let _99 = _a0;
   m124(_97, _98, _99) /* factory.Game.GameBinding~.setConveyorNonce */;
   let _100 = m85() /* List<String>~.NewManual */;
   let _101 = m121(_a1,) /* factory.Game.ColorRichness.getRed */;
   let _109 = (_101>(0));
   if (_109) {
    let _103 = m36() /* StringBuilder~.NewManual */;
    let _105 = m121(_a1,) /* factory.Game.ColorRichness.getRed */;
    let _107 = _capi(_105*(10));
    let _104 = m39(_107) /* int.Stringify */;
    m37(_103,_104) /* StringBuilder~.add~ */;
    _104 = [[5,37,32,114,101,100]];
    m37(_103,_104) /* StringBuilder~.add~ */;
    _104 = m41(_103,) /* StringBuilder~.getResult */;
    let _108 = _104;
    m86(_100,_108) /* List<String>~.add~ */;
   }
   let _110 = m122(_a1,) /* factory.Game.ColorRichness.getGreen */;
   let _118 = (_110>(0));
   if (_118) {
    let _112 = m36() /* StringBuilder~.NewManual */;
    let _114 = m122(_a1,) /* factory.Game.ColorRichness.getGreen */;
    let _116 = _capi(_114*(10));
    let _113 = m39(_116) /* int.Stringify */;
    m37(_112,_113) /* StringBuilder~.add~ */;
    _113 = [[7,37,32,103,114,101,101,110]];
    m37(_112,_113) /* StringBuilder~.add~ */;
    _113 = m41(_112,) /* StringBuilder~.getResult */;
    let _117 = _113;
    m86(_100,_117) /* List<String>~.add~ */;
   }
   let _119 = m123(_a1,) /* factory.Game.ColorRichness.getBlue */;
   let _127 = (_119>(0));
   if (_127) {
    let _121 = m36() /* StringBuilder~.NewManual */;
    let _123 = m123(_a1,) /* factory.Game.ColorRichness.getBlue */;
    let _125 = _capi(_123*(10));
    let _122 = m39(_125) /* int.Stringify */;
    m37(_121,_122) /* StringBuilder~.add~ */;
    _122 = [[6,37,32,98,108,117,101]];
    m37(_121,_122) /* StringBuilder~.add~ */;
    _122 = m41(_121,) /* StringBuilder~.getResult */;
    let _126 = _122;
    m86(_100,_126) /* List<String>~.add~ */;
   }
   let _128 = _a6;
   let _129 = _a7;
   let _130 = m36() /* StringBuilder~.NewManual */;
   let _132 = [[2,44,32]];
   let _134 = [(500), _i];
   let _135 = m126(_100,_132, _134) /* List<String>~.join */;
   m37(_130,_135) /* StringBuilder~.add~ */;
   let _131 = [[8,44,32,119,111,114,116,104,32]];
   m37(_130,_131) /* StringBuilder~.add~ */;
   let _136 = m104(_a1,) /* factory.Game.ColorRichness.getValue */;
   _131 = m39(_136) /* int.Stringify */;
   m37(_130,_131) /* StringBuilder~.add~ */;
   _131 = m41(_130,) /* StringBuilder~.getResult */;
   let _137 = _131;
   m125(_128, _129, _137) /* factory.Game.GameBinding~.setHoverInfo */;
   let _138 = _a0;
   let _139 = _a1;
   let _140 = _a2;
   let _141 = _a3;
   let _142 = _a4;
   let _143 = m76(_96) /* factory.Game.Side.getOpposite */;
   let _144 = m73(_96) /* factory.Game.Side.getDiffX */;
   let _145 = _capi(_a6+_144);
   let _146 = m74(_96) /* factory.Game.Side.getDiffY */;
   let _147 = _capi(_a7+_146);
   let _148 = m46(_i,_138, _139, _140, _141, _142, _143, _145, _147) /* factory.Game~.stabilizeConveyors~ */;
   let _149 = m109() /* factory.Game.StableStatus.getDISCONNECTED */;
   let _154 = (_148===_149);
   if (_154) {
    let _150 = _a6;
    let _151 = _a7;
    let _153 = _capi(_a0-(1));
    m124(_150, _151, _153) /* factory.Game.GameBinding~.setConveyorNonce */;
   }
   return _148;
  }
  function m47(_a0) {// factory.Game.GameBinding~.validateAll)
   _io.ow.addI32(_a0);
    _io.flushDirect(106);
   let _1 = _io.ir.getIB();
   if (_1) {
    return undefined;
   }
   let _2 = null;
   return _2;
  }
  function m48() {// factory.Game.GameBinding~.getIncomingClick)
    _io.flushDirect(113);
   let _0 = _io.ir.getIB();
   if (_0) {
    let _1 = m129() /* String.Read */;
    return _1;
   }
   let _2 = null;
   return _2;
  }
  function m49(_i, _a0) {// 56.bouncelam$500~ (factory.Game.SpecialTileType type))
   let _4 = _a0;
   m50(_i[1],_4) /* 10.loclam$lambda<void, factory.Game.SpecialTileType>$500~ (factory.Game.SpecialTileType type) */;
   return undefined;
  }
  function m50(_i, _a0) {// 10.loclam$lambda<void, factory.Game.SpecialTileType>$500~ (factory.Game.SpecialTileType type))
   let _12 = 0;
   let _13 = (_12<_i[4]);
   while (_13) {
    let _14 = 0;
    let _15 = (_14<_i[4]);
    while (_15) {
     let _16 = _14;
     let _17 = _12;
     let _19 = m13(_16, _17) /* factory.Game.GameBinding~.getSpecialType */;
     let _18 = _19 === null;
     _18 = (_18===(false));
     let _32 = (_18===(false));
     if (_32) {
      let _22 = _14;
      let _23 = _12;
      let _25 = m72(_22, _23) /* factory.Game.GameBinding~.getConveyorType */;
      let _24 = _25 === null;
      _24 = (_24===(false));
      let _31 = (_24===(false));
      if (_31) {
       let _28 = _14;
       let _29 = _12;
       let _30 = _a0;
       m2(_28, _29, _30) /* factory.Game.GameBinding~.setSpecialTile */;
       _i[5] = true;
       return undefined;
      }
     }
     _14 = _capi(_14+(1));
     let _34 = (_14<_i[4]);
     _15 = _34;
    }
    _12 = _capi(_12+(1));
    let _36 = (_12<_i[4]);
    _13 = _36;
   }
  }
  function m52(_i, _a0) {// factory.Game~.showError~)
   let _12 = _a0;
   m132(_12) /* factory.Game.GameBinding~.showError */;
  }
  function m53(_i, _a0) {// lamcall55)
   m49(_i,_a0) /* 56.bouncelam$500~ (factory.Game.SpecialTileType type) */;
   return undefined;
  }
  function m56() {// factory.Game.SpecialTileType.Read)
   let _0 = _io.ir.getI8();
   return _0;
  }
  function m72(_a0, _a1) {// factory.Game.GameBinding~.getConveyorType)
   _io.ow.addI32(_a0);
   _io.ow.addI32(_a1);
    _io.flushDirect(103);
   let _2 = _io.ir.getIB();
   if (_2) {
    let _3 = m148() /* factory.Game.ConveyorType.Read */;
    return _3;
   }
   let _4 = null;
   return _4;
  }
  function m341(_i) {// lamcall12)
   m6(_i,) /* 13.bouncelam$500 () */;
   return undefined;
  }
  function m101(_a0) {// int.OutputUnicodeBytes)
   let _2 = _capi((127)&_a0);
   let _4 = (_2===_a0);
   if (_4) {
    let _3 = _capb(_a0);
    _io.ow.addI8(_3);
    return undefined;
   }
   let _6 = _capi((65535)&_a0);
   let _18 = (_6===_a0);
   if (_18) {
    let _7 = _a0;
    let _10 = m197(_7, (6)) /* int.shiftRight */;
    let _11 = _capi((192)|_10);
    let _12 = _capb(_11);
    _io.ow.addI8(_12);
    let _15 = _capi(_a0&(63));
    let _16 = _capi((128)|_15);
    let _17 = _capb(_16);
    _io.ow.addI8(_17);
    return undefined;
   }
   let _20 = _capi((16777215)&_a0);
   let _40 = (_20===_a0);
   if (_40) {
    let _21 = _a0;
    let _24 = m197(_21, (12)) /* int.shiftRight */;
    let _25 = _capi((224)|_24);
    let _26 = _capb(_25);
    _io.ow.addI8(_26);
    let _27 = _a0;
    let _29 = m197(_27, (6)) /* int.shiftRight */;
    let _32 = _capi(_29&(63));
    let _33 = _capi((128)|_32);
    let _34 = _capb(_33);
    _io.ow.addI8(_34);
    let _37 = _capi(_a0&(63));
    let _38 = _capi((128)|_37);
    let _39 = _capb(_38);
    _io.ow.addI8(_39);
    return undefined;
   }
   let _41 = _a0;
   let _44 = m197(_41, (18)) /* int.shiftRight */;
   let _45 = _capi((240)|_44);
   let _46 = _capb(_45);
   _io.ow.addI8(_46);
   let _47 = _a0;
   let _49 = m197(_47, (12)) /* int.shiftRight */;
   let _52 = _capi(_49&(63));
   let _53 = _capi((128)|_52);
   let _54 = _capb(_53);
   _io.ow.addI8(_54);
   let _55 = _a0;
   let _57 = m197(_55, (6)) /* int.shiftRight */;
   let _60 = _capi(_57&(63));
   let _61 = _capi((128)|_60);
   let _62 = _capb(_61);
   _io.ow.addI8(_62);
   let _65 = _capi(_a0&(63));
   let _66 = _capi((128)|_65);
   let _67 = _capb(_66);
   _io.ow.addI8(_67);
  }
  function m119(_a0, _a1) {// factory.Game.GameBinding~.getNonce)
   _io.ow.addI32(_a0);
   _io.ow.addI32(_a1);
    _io.flushDirect(104);
   let _2 = _io.ir.getIB();
   if (_2) {
    let _3 = _io.ir.getI32();
    return _3;
   }
   let _4 = null;
   return _4;
  }
  function m120(_a0, _a1, _a2) {// factory.Game.GameBinding~.setTileColorClass)
   _io.ow.addI32(_a0);
   _io.ow.addI32(_a1);
   m220(_a2,) /* String.Write */;
    _io.flushDirect(109);
   let _3 = _io.ir.getIB();
   if (_3) {
    return undefined;
   }
   let _4 = null;
   return _4;
  }
  function m124(_a0, _a1, _a2) {// factory.Game.GameBinding~.setConveyorNonce)
   _io.ow.addI32(_a0);
   _io.ow.addI32(_a1);
   _io.ow.addI32(_a2);
    _io.flushDirect(105);
   let _3 = _io.ir.getIB();
   if (_3) {
    return undefined;
   }
   let _4 = null;
   return _4;
  }
  function m125(_a0, _a1, _a2) {// factory.Game.GameBinding~.setHoverInfo)
   _io.ow.addI32(_a0);
   _io.ow.addI32(_a1);
   m220(_a2,) /* String.Write */;
    _io.flushDirect(110);
   let _3 = _io.ir.getIB();
   if (_3) {
    return undefined;
   }
   let _4 = null;
   return _4;
  }
  function m129() {// String.Read)
   let _0 = m224() /* Buffer<int>~.ReadM */;
   let _1 = [_0];
   return _1;
  }
  function m132(_a0) {// factory.Game.GameBinding~.showError)
   m220(_a0,) /* String.Write */;
    _io.flushDirect(114);
   let _1 = _io.ir.getIB();
   if (_1) {
    return undefined;
   }
   let _2 = null;
   return _2;
  }
  function m148() {// factory.Game.ConveyorType.Read)
   let _0 = _io.ir.getI8();
   return _0;
  }
  function m220(_i) {// String.Write)
   m288(_i[0],) /* Buffer<int>~.Write */;
  }
  function m224() {// Buffer<int>~.ReadM)
   let _0 = _io.ir.getI32();
   let _2 = _0;
   let _1 = m192(_2) /* Buffer<int>~.NewManual */;
   let _3 = 0;
   let _4 = (_3<_0);
   while (_4) {
    let _5 = _io.ir.getI32();
    let _6 = _3;
    let _7 = _5;
    m262(_1,_6, _7) /* Buffer<int>~.set~ */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_0);
    _4 = _9;
   }
   return _1;
  }
const _re = m0(null, ...inArgs);
if (_re) {
  _re.call = () => m341(_re, _re[0]);
}
return _re;
}


 // === PROG END 


      if (typeof exports !== 'undefined') { 

        if (typeof module !== 'undefined' && module.exports) { exports = module.exports = MAIN; } 

        exports.GameRaw = MAIN;
      } else {
        window['GameRaw'] = MAIN;
      }

    function niceMAIN(binding) {
      return MAIN((mthId, src, dst, srcEnd) => {
        switch (mthId) {
case 100: { //  void? foo~(factory.Game.Side s)
const res = binding.foo(src.getI8());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 101: { //  bool? getNeedValidation~()
const res = binding.getNeedValidation();
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);dst.addI8(res)}
break;
}case 102: { //  factory.Game.BoardPoint? getSource~(int nthOfType)
const res = binding.getSource(src.getI32());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);dst.addI32(res.x), dst.addI32(res.y)}
break;
}case 103: { //  factory.Game.ConveyorType? getConveyorType~(int x, int y)
const res = binding.getConveyorType(src.getI32(), src.getI32());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);dst.addI8(res)}
break;
}case 104: { //  int? getNonce~(int x, int y)
const res = binding.getNonce(src.getI32(), src.getI32());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);dst.addI32(res)}
break;
}case 105: { //  void? setConveyorNonce~(int x, int y, int nonce)
const res = binding.setConveyorNonce(src.getI32(), src.getI32(), src.getI32());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 106: { //  void? validateAll~(int expectedNonce)
const res = binding.validateAll(src.getI32());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 107: { //  factory.Game.SpecialTileType? getSpecialType~(int x, int y)
const res = binding.getSpecialType(src.getI32(), src.getI32());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);dst.addI8(res)}
break;
}case 108: { //  void? setCurrency~(int amount, int amountPerSec)
const res = binding.setCurrency(src.getI32(), src.getI32());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 109: { //  void? setTileColorClass~(int x, int y, String colorClass)
const res = binding.setTileColorClass(src.getI32(), src.getI32(), src.getString());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 110: { //  void? setHoverInfo~(int x, int y, String msg)
const res = binding.setHoverInfo(src.getI32(), src.getI32(), src.getString());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 111: { //  void? buildBoard~(int size)
const res = binding.buildBoard(src.getI32());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 112: { //  void? setSpecialTile~(int x, int y, factory.Game.SpecialTileType type)
const res = binding.setSpecialTile(src.getI32(), src.getI32(), src.getI8());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 113: { //  String? getIncomingClick~()
const res = binding.getIncomingClick();
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);dst.addString(res)}
break;
}case 114: { //  void? showError~(String errmsg)
const res = binding.showError(src.getString());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}

            default: {
              throw new Error(`Bad mthId ${mthId}`);
            }
          }
        });
      }
      
      if (typeof exports !== 'undefined') {
        exports.Game = niceMAIN;
      } else {
        window['Game'] = niceMAIN;
      }
    if (typeof exports !== 'undefined') {
      exports.StreamEncoder = StreamEncoder;
    } else {
      window['StreamEncoder'] = StreamEncoder;
    }
    if (typeof exports !== 'undefined') {
      exports.StreamDecoder = StreamDecoder;
    } else {
      window['StreamDecoder'] = StreamDecoder;
    }
})();

exports.Types = {
  
  factory_Game_SpecialTileType: {
    SOURCER: 0, SOURCEG: 1, SOURCEB: 2, SINK: 3, MERGER: 4
  },


  factory_Game_ConveyorType: {
    LTT: 0, TTR: 1, RTB: 2, BTL: 3, LTR: 4, TTB: 5
  },


  factory_Game_Side: {
    TOP: 0, RIGHT: 1, BOTTOM: 2, LEFT: 3
  },

};
exports.VERSION = '220315449';