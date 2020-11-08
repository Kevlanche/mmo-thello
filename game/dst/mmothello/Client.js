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

  function m128(_i, _a0) {// 47.loclam$lambda<void, Entry<any, any>>$500~ (Entry<any, any> ent))
   let _4 = m111(_a0,) /* Entry<any, any>.getKey */;
   let _5 = m112(_a0,) /* Entry<any, any>.getValue */;
   m102(_i,_4, _5) /* Map<any, any>~.put~ */;
  }
  function m1(_a0) {// mmothello.Client~.NewManual)
   let _2 = m4() /* mmothello.Board~.NewManual */;
   let _3 = m4() /* mmothello.Board~.NewManual */;
   let _1 = [_a0, _2, _3];
   return _1;
  }
  function m129() {// List<Entry<any, any>>~.NewManual)
   let _2 = m132((5)) /* array<Entry<any, any>>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m130(_i, _a0, _a1) {// array<Entry<any, any>>~.set~)
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
  function m131(_i) {// array<Entry<any, any>>~.getLength)
   return _i[0];
  }
  function m4() {// mmothello.Board~.NewManual)
   let _3 = _capi((16)*(16));
   let _4 = m6(_3) /* Buffer<byte>~.NewManual */;
   let _0 = [_4];
   return _0;
  }
  function m132(_a0) {// array<Entry<any, any>>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m133(_i, _a0) {// array<Entry<any, any>>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m118(_i,_5) /* array<Entry<any, any>>~.get */;
    let _7 = _3;
    m137(_a0,_6, _7) /* lamcall58 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m6(_a0) {// Buffer<byte>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(0)];
   return _1;
  }
  function m134(_i, _a0, _a1) {// 59.bouncelam$500~ (Entry<any, any>? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m135(_i[1],_6, _7, _8) /* 50.loclam$lambda<void, Entry<any, any>?, int>$500~ (Entry<any, any>? val, int idx, array<Entry<any, any>>~ next) */;
   return undefined;
  }
  function m135(_i, _a0, _a1, _a2) {// 50.loclam$lambda<void, Entry<any, any>?, int>$500~ (Entry<any, any>? val, int idx, array<Entry<any, any>>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m130(_a2,_6, _7) /* array<Entry<any, any>>~.set~ */;
   return undefined;
  }
  function m136(_i, _a0) {// List<Entry<any, any>>~.forEach)
   let _4 = _a0;
   m138(_i[0],_4) /* array<Entry<any, any>>~.forEachEx */;
  }
  function m9() {// StringBuilder~.NewManual)
   let _1 = m30() /* List<String>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m137(_i, _a0, _a1) {// lamcall58)
   m134(_i,_a0, _a1) /* 59.bouncelam$500~ (Entry<any, any>? val, int idx) */;
   return undefined;
  }
  function m10(_i, _a0) {// StringBuilder~.add~)
   let _3 = _a0;
   m31(_i[0],_3) /* List<String>~.add~ */;
   return undefined;
  }
  function m138(_i, _a0) {// array<Entry<any, any>>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m118(_i,_6) /* array<Entry<any, any>>~.get */;
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
     m139(_a0,_9) /* lamcall56 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m11(_i) {// mmothello.Client.Click.getX)
   return _i[0];
  }
  function m139(_i, _a0) {// lamcall56)
   m127(_i,_a0) /* 57.bouncelam$500~ (Entry<any, any> ent) */;
   return undefined;
  }
  function m12(_a0) {// int.Stringify)
   let _3 = (_a0===(0));
   if (_3) {
    let _2 = [[1,48]];
    return _2;
   }
   let _4 = m32() /* List<int>~.NewManual */;
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
    m33(_4,_18) /* List<int>~.add~ */;
    _a0 = _capi(_a0/(10));
    let _20 = (_a0>(0));
    _12 = _20;
   }
   if (_5) {
    m33(_4,(45)) /* List<int>~.add~ */;
   }
   m34(_4,) /* List<int>~.reverse~ */;
   let _22 = m36(_4) /* SerializationBuilder.makeBetterCopy */;
   let _23 = m35(_22) /* List.toString */;
   return _23;
  }
  function m13(_i) {// mmothello.Client.Click.getY)
   return _i[1];
  }
  function m14(_i) {// StringBuilder~.getResult)
   let _5 = [(500), _i];
   let _2 = m37(_i[0],(0), _5) /* List<String>~.fold */;
   let _7 = _2;
   let _6 = m40(_7) /* String~.NewManual */;
   let _8 = m41((0)) /* int~.NewManual */;
   let _11 = [(500), _i, _8, _6];
   m42(_i[0],_11) /* List<String>~.forEach */;
   let _12 = m45(_6) /* SerializationBuilder.makeBetterCopy */;
   return _12;
  }
  function m17(_a0) {// mmothello.ClientToServer.newOnClick)
   let _2 = _a0;
   let _3 = m50((0), _2) /* mmothello.ClientToServer.NewManual */;
   return _3;
  }
  function m18(_a0, _a1) {// mmothello.ClientToServer.OnClick.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m21(_a0) {// byte.Stringify)
   let _3 = (_a0===(0));
   if (_3) {
    let _2 = [[1,48]];
    return _2;
   }
   let _6 = _capi(_a0);
   let _7 = _capi((0)-(128));
   let _9 = (_6===_7);
   if (_9) {
    let _8 = [[4,45,49,50,56]];
    return _8;
   }
   let _10 = (_a0<(0));
   if (_10) {
    _a0 = _capb((0)-_a0);
   }
   let _13 = m32() /* List<int>~.NewManual */;
   let _15 = (_a0>(0));
   while (_15) {
    let _18 = _capb(_a0%(10));
    let _19 = _capi(_18);
    let _21 = _capi(_19+(48));
    m33(_13,_21) /* List<int>~.add~ */;
    _a0 = _capb(_a0/(10));
    let _23 = (_a0>(0));
    _15 = _23;
   }
   if (_10) {
    m33(_13,(45)) /* List<int>~.add~ */;
   }
   m34(_13,) /* List<int>~.reverse~ */;
   let _25 = m36(_13) /* SerializationBuilder.makeBetterCopy */;
   let _26 = m35(_25) /* List.toString */;
   return _26;
  }
  function m22(_i) {// mmothello.ServerToClient.getRefreshBoard)
   let _4 = (_i[0]===(0));
   if (_4) {
    return _i[1];
   }
   let _5 = null;
   return _5;
  }
  function m23(_i, _a0, _a1) {// mmothello.Board~.get)
   let _5 = _capi(_a1*(16));
   let _6 = _capi(_a0+_5);
   let _7 = m52(_i[0],_6) /* Buffer<byte>~.get */;
   return _7;
  }
  function m24(_i, _a0, _a1) {// mmothello.Board.get)
   let _5 = _capi(_a1*(16));
   let _6 = _capi(_a0+_5);
   let _7 = m52(_i[0],_6) /* Buffer<byte>~.get */;
   return _7;
  }
  function m26(_i, _a0, _a1, _a2) {// mmothello.Board~.set~)
   let _6 = _capi(_a1*(16));
   let _7 = _capi(_a0+_6);
   let _8 = _a2;
   m53(_i[0],_7, _8) /* Buffer<byte>~.set~ */;
   return undefined;
  }
  function m27(_i, _a0, _a1, _a2) {// mmothello.Board~.isLegalMove~)
   let _5 = _a0;
   let _6 = _a1;
   let _7 = m23(_i,_5, _6) /* mmothello.Board~.get */;
   let _9 = (_7===_a2);
   if (_9) {
    return (false);
   }
   let _10 = _a2;
   let _11 = m54(_i,_10) /* mmothello.Board~.hasAnyPieces */;
   let _23 = (_11===(false));
   if (_23) {
    let _14 = (_a0>=(4));
    let _15;
    if (_14) {
     let _17 = (_a0<=(11));
     let _18;
     if (_17) {
      let _20 = (_a1>=(4));
      let _21;
      if (_20) {
       _21 = (_a1<=(11));
      }
      else {
       _21 = false;
      }
      _18 = _21;
     }
     else {
      _18 = false;
     }
     _15 = _18;
    }
    else {
     _15 = false;
    }
    return _15;
   }
   let _24 = _a0;
   let _25 = _a1;
   let _26 = m23(_i,_24, _25) /* mmothello.Board~.get */;
   let _29 = (_26!==(0));
   if (_29) {
    return (false);
   }
   let _30 = [(500), _i, _a0, _a1, _a2];
   let _34 = m57(_30,(1), (0)) /* lamcall41 */;
   let _35;
   if (_34) {
    _35 = true;
   }
   else {
    let _38 = m57(_30,(-1), (0)) /* lamcall41 */;
    let _39;
    if (_38) {
     _39 = true;
    }
    else {
     let _42 = m57(_30,(0), (-1)) /* lamcall41 */;
     let _43;
     if (_42) {
      _43 = true;
     }
     else {
      let _46 = m57(_30,(0), (1)) /* lamcall41 */;
      let _47;
      if (_46) {
       _47 = true;
      }
      else {
       let _50 = m57(_30,(1), (1)) /* lamcall41 */;
       let _51;
       if (_50) {
        _51 = true;
       }
       else {
        let _54 = m57(_30,(1), (-1)) /* lamcall41 */;
        let _55;
        if (_54) {
         _55 = true;
        }
        else {
         let _58 = m57(_30,(-1), (1)) /* lamcall41 */;
         let _59;
         if (_58) {
          _59 = true;
         }
         else {
          _59 = m57(_30,(-1), (-1)) /* lamcall41 */;
         }
         _55 = _59;
        }
        _51 = _55;
       }
       _47 = _51;
      }
      _43 = _47;
     }
     _39 = _43;
    }
    _35 = _39;
   }
   return _35;
  }
  function m30() {// List<String>~.NewManual)
   let _2 = m58((5)) /* array<String>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m31(_i, _a0) {// List<String>~.add~)
   let _4 = m59(_i[0],) /* array<String>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m59(_i[0],) /* array<String>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m58(_8) /* array<String>~.NewManual */;
    let _10 = [(500), _i, _5];
    m60(_i[0],_10) /* array<String>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m63(_i[0],_12, _13) /* array<String>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m32() {// List<int>~.NewManual)
   let _2 = m64((5)) /* array<int>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m33(_i, _a0) {// List<int>~.add~)
   let _4 = m65(_i[0],) /* array<int>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m65(_i[0],) /* array<int>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m64(_8) /* array<int>~.NewManual */;
    let _10 = [(500), _i, _5];
    m66(_i[0],_10) /* array<int>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m69(_i[0],_12, _13) /* array<int>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m34(_i) {// List<int>~.reverse~)
   let _3 = _capi(_i[1]/(2));
   let _5 = 0;
   let _6 = (_5<_3);
   while (_6) {
    let _7 = _5;
    let _9 = _capi(_i[1]-(1));
    let _10 = _capi(_9-_5);
    m70(_i[0],_7, _10) /* array<int>~.swap~ */;
    _5 = _capi(_5+(1));
    let _12 = (_5<_3);
    _6 = _12;
   }
  }
  function m35(_a0) {// List.toString)
   let _1 = m71(_a0,) /* List<int>.getSize */;
   let _3 = _1;
   let _2 = m40(_3) /* String~.NewManual */;
   let _4 = 0;
   let _5 = (_4<_1);
   while (_5) {
    let _6 = _4;
    let _7 = _4;
    let _8 = m73(_a0,_7) /* List<int>.get */;
    let _10 = _8 === null;
    let _9;
    if (_10) {
     _9 = 0;
    }
    else {
     _9 = _8;
    }
    let _11 = _9;
    m72(_2,_6, _11) /* String~.setChar~ */;
    _4 = _capi(_4+(1));
    let _13 = (_4<_1);
    _5 = _13;
   }
   let _14 = m45(_2) /* SerializationBuilder.makeBetterCopy */;
   return _14;
  }
  function m36(_a0) {// SerializationBuilder.makeBetterCopy)
   let _1 = m74() /* Map<any, any>~.NewManual */;
   let _2 = m75(_1,_a0) /* Map<any, any>~.get */;
   let _3 = _2 === null;
   let _4;
   if (_3) {
    _4 = m76(_a0,_1) /* List<int>~.MakeCopy */;
   }
   else {
    _4 = _2;
   }
   return _4;
  }
  function m37(_i, _a0, _a1) {// List<String>~.fold)
   let _5 = _a0;
   let _6 = _a1;
   let _7 = m77(_i[0],_5, _6) /* array<String>~.foldEx */;
   return _7;
  }
  function m38(_i, _a0, _a1) {// 36.bouncelam$500 (int sum, String add))
   let _5 = _a0;
   let _6 = _a1;
   let _7 = m39(_i[1],_5, _6) /* 17.loclam$lambda<int, int, String>$500 (int sum, String add) */;
   return _7;
  }
  function m39(_i, _a0, _a1) {// 17.loclam$lambda<int, int, String>$500 (int sum, String add))
   let _4 = m78(_a1,) /* String.getLen */;
   let _5 = _capi(_a0+_4);
   return _5;
  }
  function m40(_a0) {// String~.NewManual)
   let _2 = _a0;
   let _3 = m79(_2) /* Buffer<int>~.NewManual */;
   let _1 = [_3];
   return _1;
  }
  function m41(_a0) {// int~.NewManual)
   let _1 = [_a0];
   return _1;
  }
  function m42(_i, _a0) {// List<String>~.forEach)
   let _4 = _a0;
   m80(_i[0],_4) /* array<String>~.forEachEx */;
  }
  function m43(_i, _a0) {// 40.bouncelam$500 (String part))
   let _6 = _a0;
   let _7 = _i[2];
   let _8 = _i[3];
   m44(_i[1],_6, _7, _8) /* 17.loclam$lambda<void, String>$500 (String part, int~ off, String~ ret) */;
   return undefined;
  }
  function m44(_i, _a0, _a1, _a2) {// 17.loclam$lambda<void, String>$500 (String part, int~ off, String~ ret))
   let _5 = _a2;
   let _6 = m78(_a0,) /* String.getLen */;
   let _7 = m82(_a1,_6) /* int~.getAndAdd~ */;
   m81(_a0,_5, _7) /* String.writeTo */;
  }
  function m45(_a0) {// SerializationBuilder.makeBetterCopy)
   let _1 = m74() /* Map<any, any>~.NewManual */;
   let _2 = m75(_1,_a0) /* Map<any, any>~.get */;
   let _3 = _2 === null;
   let _4;
   if (_3) {
    _4 = m83(_a0,_1) /* String~.MakeCopy */;
   }
   else {
    _4 = _2;
   }
   return _4;
  }
  function m46(_i) {// Buffer<int>~.getLen)
   return _i[0];
  }
  function m48(_i, _a0) {// String.getChar)
   let _3 = _a0;
   let _4 = m85(_i[0],_3) /* Buffer<int>~.get */;
   return _4;
  }
  function m50(_a0, _a1) {// mmothello.ClientToServer.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m52(_i, _a0) {// Buffer<byte>~.get)
   let _3 = _i[1 + _a0] || 0;
   return _3;
  }
  function m53(_i, _a0, _a1) {// Buffer<byte>~.set~)
   if (_a0 >= 0 && _a0 < _i.length - 1) _i[1 + _a0] = _a1;
   return undefined;
  }
  function m54(_i, _a0) {// mmothello.Board~.hasAnyPieces)
   let _3 = 0;
   let _5 = (_3<(16));
   while (_5) {
    let _6 = 0;
    let _8 = (_6<(16));
    while (_8) {
     let _9 = _3;
     let _10 = _6;
     let _11 = m23(_i,_9, _10) /* mmothello.Board~.get */;
     let _45 = (_11===_a0);
     if (_45) {
      let _12 = [(501), _i, _3, _6, _a0];
      let _16 = m57(_12,(-1), (0)) /* lamcall41 */;
      let _17;
      if (_16) {
       _17 = true;
      }
      else {
       let _20 = m57(_12,(1), (0)) /* lamcall41 */;
       let _21;
       if (_20) {
        _21 = true;
       }
       else {
        let _24 = m57(_12,(0), (-1)) /* lamcall41 */;
        let _25;
        if (_24) {
         _25 = true;
        }
        else {
         let _28 = m57(_12,(0), (1)) /* lamcall41 */;
         let _29;
         if (_28) {
          _29 = true;
         }
         else {
          let _32 = m57(_12,(-1), (-1)) /* lamcall41 */;
          let _33;
          if (_32) {
           _33 = true;
          }
          else {
           let _36 = m57(_12,(1), (-1)) /* lamcall41 */;
           let _37;
           if (_36) {
            _37 = true;
           }
           else {
            let _40 = m57(_12,(-1), (1)) /* lamcall41 */;
            let _41;
            if (_40) {
             _41 = true;
            }
            else {
             _41 = m57(_12,(1), (1)) /* lamcall41 */;
            }
            _37 = _41;
           }
           _33 = _37;
          }
          _29 = _33;
         }
         _25 = _29;
        }
        _21 = _25;
       }
       _17 = _21;
      }
      if (_17) {
       return (true);
      }
     }
     _6 = _capi(_6+(1));
     let _48 = (_6<(16));
     _8 = _48;
    }
    _3 = _capi(_3+(1));
    let _51 = (_3<(16));
    _5 = _51;
   }
   return (false);
  }
  function m55(_i, _a0, _a1) {// 42.bouncelam$500~ (int dx, int dy))
   let _8 = _a0;
   let _9 = _a1;
   let _10 = _i[2];
   let _11 = _i[3];
   let _12 = _i[4];
   let _13 = m56(_i[1],_8, _9, _10, _11, _12) /* 12.loclam$lambda<bool, int, int>$500~ (int dx, int dy, int x, int y, byte player) */;
   return _13;
  }
  function m56(_i, _a0, _a1, _a2, _a3, _a4) {// 12.loclam$lambda<bool, int, int>$500~ (int dx, int dy, int x, int y, byte player))
   let _7 = _capi(_a2+_a0);
   let _8 = _capi(_a3+_a1);
   let _9 = m23(_i,_7, _8) /* mmothello.Board~.get */;
   let _11 = (_9===(0));
   let _12;
   if (_11) {
    _12 = true;
   }
   else {
    _12 = (_9===_a4);
   }
   if (_12) {
    return (false);
   }
   let _15 = _capi((2)*_a0);
   let _16 = _capi(_a2+_15);
   let _18 = _capi((2)*_a1);
   let _19 = _capi(_a3+_18);
   let _20 = _a0;
   let _21 = _a1;
   let _22 = _a4;
   let _24 = m91(_i,_16, _19, _20, _21, _22, (true)) /* mmothello.Board~.searchAndFlip~ */;
   return _24;
  }
  function m57(_i, _a0, _a1) {// lamcall41)
   let _5 = _i[0];
   let _7 = (_5===(500));
   let _4;
   if (_7) {
    _4 = m55(_i,_a0, _a1) /* 42.bouncelam$500~ (int dx, int dy) */;
    return _4;
   }
   _4 = m89(_i,_a0, _a1) /* 53.bouncelam$501 (int dx, int dy) */;
   return _4;
  }
  function m58(_a0) {// array<String>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m59(_i) {// array<String>~.getLength)
   return _i[0];
  }
  function m60(_i, _a0) {// array<String>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m93(_i,_5) /* array<String>~.get */;
    let _7 = _3;
    m92(_a0,_6, _7) /* lamcall43 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m61(_i, _a0, _a1) {// 44.bouncelam$500~ (String? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m62(_i[1],_6, _7, _8) /* 18.loclam$lambda<void, String?, int>$500~ (String? val, int idx, array<String>~ next) */;
   return undefined;
  }
  function m62(_i, _a0, _a1, _a2) {// 18.loclam$lambda<void, String?, int>$500~ (String? val, int idx, array<String>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m63(_a2,_6, _7) /* array<String>~.set~ */;
   return undefined;
  }
  function m63(_i, _a0, _a1) {// array<String>~.set~)
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
  function m64(_a0) {// array<int>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m65(_i) {// array<int>~.getLength)
   return _i[0];
  }
  function m66(_i, _a0) {// array<int>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m95(_i,_5) /* array<int>~.get */;
    let _7 = _3;
    m94(_a0,_6, _7) /* lamcall45 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m67(_i, _a0, _a1) {// 46.bouncelam$500~ (int? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m68(_i[1],_6, _7, _8) /* 24.loclam$lambda<void, int?, int>$500~ (int? val, int idx, array<int>~ next) */;
   return undefined;
  }
  function m68(_i, _a0, _a1, _a2) {// 24.loclam$lambda<void, int?, int>$500~ (int? val, int idx, array<int>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m69(_a2,_6, _7) /* array<int>~.set~ */;
   return undefined;
  }
  function m69(_i, _a0, _a1) {// array<int>~.set~)
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
  function m70(_i, _a0, _a1) {// array<int>~.swap~)
   let _5 = _a0;
   let _4 = m95(_i,_5) /* array<int>~.get */;
   let _6 = _a0;
   let _7 = _a1;
   let _8 = m95(_i,_7) /* array<int>~.get */;
   m69(_i,_6, _8) /* array<int>~.set~ */;
   let _9 = _a1;
   let _10 = _4;
   m69(_i,_9, _10) /* array<int>~.set~ */;
  }
  function m71(_i) {// List<int>.getSize)
   return _i[1];
  }
  function m72(_i, _a0, _a1) {// String~.setChar~)
   let _4 = _a0;
   let _5 = _a1;
   m96(_i[0],_4, _5) /* Buffer<int>~.set~ */;
  }
  function m73(_i, _a0) {// List<int>.get)
   let _4 = _a0;
   let _5 = m95(_i[0],_4) /* array<int>~.get */;
   return _5;
  }
  function m74() {// Map<any, any>~.NewManual)
   let _2 = m97((16)) /* array<Entries<any, any>~>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m75(_i, _a0) {// Map<any, any>~.get)
   let _5 = _identityHash(_a0);
   let _6 = _5;
   let _4 = m98(_6) /* int.sabs */;
   let _8 = m99(_i[0],) /* array<Entries<any, any>~>~.getLength */;
   let _7 = _capi(_4%_8);
   let _10 = _7;
   let _11 = m100(_i[0],_10) /* array<Entries<any, any>~>~.get */;
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
   let _15 = m101(_9,_14) /* Entries<any, any>~.get */;
   return _15;
  }
  function m76(_i, _a0) {// List<int>~.MakeCopy)
   let _5 = [];
   m102(_a0,_i, _5) /* Map<any, any>~.put~ */;
   let _4 = _5;
   let _7 = m75(_a0,_i[0]) /* Map<any, any>~.get */;
   let _8 = _7 === null;
   let _9;
   if (_8) {
    _9 = m103(_i[0],_a0) /* array<int>~.MakeCopyM */;
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
  function m77(_i, _a0, _a1) {// array<String>~.foldEx)
   let _4 = _a0;
   let _5 = 0;
   let _6 = (_5<_i[0]);
   while (_6) {
    let _7 = _5;
    let _10 = m93(_i,_7) /* array<String>~.get */;
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
     _4 = m104(_a1,_11, _12) /* lamcall35 */;
    }
    _5 = _capi(_5+(1));
    let _14 = (_5<_i[0]);
    _6 = _14;
   }
   return _4;
  }
  function m78(_i) {// String.getLen)
   let _2 = m46(_i[0],) /* Buffer<int>~.getLen */;
   return _2;
  }
  function m79(_a0) {// Buffer<int>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(0)];
   return _1;
  }
  function m80(_i, _a0) {// array<String>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m93(_i,_6) /* array<String>~.get */;
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
     m105(_a0,_9) /* lamcall39 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m81(_i, _a0, _a1) {// String.writeTo)
   let _4 = m46(_i[0],) /* Buffer<int>~.getLen */;
   let _5 = 0;
   let _6 = (_5<_4);
   while (_6) {
    let _7 = _capi(_5+_a1);
    let _8 = _5;
    let _9 = m85(_i[0],_8) /* Buffer<int>~.get */;
    m72(_a0,_7, _9) /* String~.setChar~ */;
    _5 = _capi(_5+(1));
    let _11 = (_5<_4);
    _6 = _11;
   }
  }
  function m82(_i, _a0) {// int~.getAndAdd~)
   let _3 = _i[0];
   _i[0] = _capi(_i[0]+_a0);
   return _3;
  }
  function m83(_i, _a0) {// String~.MakeCopy)
   let _4 = [];
   m102(_a0,_i, _4) /* Map<any, any>~.put~ */;
   let _3 = _4;
   let _6 = m75(_a0,_i[0]) /* Map<any, any>~.get */;
   let _7 = _6 === null;
   let _8;
   if (_7) {
    _8 = m106(_i[0],_a0) /* Buffer<int>~.MakeCopyM */;
   }
   else {
    _8 = _6;
   }
   let _5 = _8;
   _3[0] = _5;
   return _3;
  }
  function m84(_a0, _a1) {// int.shiftRight)
   let _2 = _capi(_a0>>_a1);
   return _2;
  }
  function m85(_i, _a0) {// Buffer<int>~.get)
   let _3 = _i[1 + _a0] || 0;
   return _3;
  }
  function m88(_a0) {// mmothello.ServerToClient.newRefreshBoard)
   let _2 = _a0;
   let _3 = m108((0), _2) /* mmothello.ServerToClient.NewManual */;
   return _3;
  }
  function m89(_i, _a0, _a1) {// 53.bouncelam$501 (int dx, int dy))
   let _8 = _a0;
   let _9 = _a1;
   let _10 = _i[2];
   let _11 = _i[3];
   let _12 = _i[4];
   let _13 = m90(_i[1],_8, _9, _10, _11, _12) /* 12.loclam$lambda<bool, int, int>$501 (int dx, int dy, int x, int y, byte player) */;
   return _13;
  }
  function m90(_i, _a0, _a1, _a2, _a3, _a4) {// 12.loclam$lambda<bool, int, int>$501 (int dx, int dy, int x, int y, byte player))
   let _7 = _capi(_a2+_a0);
   let _8 = _capi(_a3+_a1);
   let _9 = m23(_i,_7, _8) /* mmothello.Board~.get */;
   let _10 = (_9!==_a4);
   let _11;
   if (_10) {
    _11 = (_9!==(0));
   }
   else {
    _11 = false;
   }
   return _11;
  }
  function m91(_i, _a0, _a1, _a2, _a3, _a4, _a5) {// mmothello.Board~.searchAndFlip~)
   let _9 = (_a0<(0));
   let _10;
   if (_9) {
    _10 = true;
   }
   else {
    let _12 = (_a0>=(16));
    let _13;
    if (_12) {
     _13 = true;
    }
    else {
     let _15 = (_a1<(0));
     let _16;
     if (_15) {
      _16 = true;
     }
     else {
      _16 = (_a1>=(16));
     }
     _13 = _16;
    }
    _10 = _13;
   }
   if (_10) {
    return (false);
   }
   let _19 = _a0;
   let _20 = _a1;
   let _21 = m23(_i,_19, _20) /* mmothello.Board~.get */;
   let _23 = (_21===_a4);
   if (_23) {
    return (true);
   }
   let _26 = (_21===(0));
   if (_26) {
    return (false);
   }
   let _27 = _capi(_a0+_a2);
   let _28 = _capi(_a1+_a3);
   let _29 = _a2;
   let _30 = _a3;
   let _31 = _a4;
   let _32 = _a5;
   let _33 = m91(_i,_27, _28, _29, _30, _31, _32) /* mmothello.Board~.searchAndFlip~ */;
   if (_33) {
    let _38 = (_a5===(false));
    if (_38) {
     let _35 = _a0;
     let _36 = _a1;
     let _37 = _a4;
     m26(_i,_35, _36, _37) /* mmothello.Board~.set~ */;
    }
   }
   return _33;
  }
  function m92(_i, _a0, _a1) {// lamcall43)
   m61(_i,_a0, _a1) /* 44.bouncelam$500~ (String? val, int idx) */;
   return undefined;
  }
  function m93(_i, _a0) {// array<String>~.get)
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
  function m94(_i, _a0, _a1) {// lamcall45)
   m67(_i,_a0, _a1) /* 46.bouncelam$500~ (int? val, int idx) */;
   return undefined;
  }
  function m95(_i, _a0) {// array<int>~.get)
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
  function m96(_i, _a0, _a1) {// Buffer<int>~.set~)
   if (_a0 >= 0 && _a0 < _i.length - 1) _i[1 + _a0] = _a1;
   return undefined;
  }
  function m97(_a0) {// array<Entries<any, any>~>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m98(_a0) {// int.sabs)
   let _4 = (_a0<(0));
   if (_4) {
    let _3 = _capi((0)-_a0);
    return _3;
   }
   return _a0;
  }
  function m99(_i) {// array<Entries<any, any>~>~.getLength)
   return _i[0];
  }
  function m100(_i, _a0) {// array<Entries<any, any>~>~.get)
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
  function m101(_i, _a0) {// Entries<any, any>~.get)
   let _3 = 0;
   let _4 = m109(_i[0],) /* List<Entry<any, any>>~.getSize */;
   let _5 = (_3<_4);
   while (_5) {
    let _7 = _3;
    let _8 = m110(_i[0],_7) /* List<Entry<any, any>>~.get */;
    let _10 = _8 === null;
    let _9;
    if (_10) {
     return null;
    }
    else {
     _9 = _8;
    }
    let _6 = _9;
    let _11 = m111(_6,) /* Entry<any, any>.getKey */;
    let _13 = (_11) === (_a0);
    if (_13) {
     let _12 = m112(_6,) /* Entry<any, any>.getValue */;
     return _12;
    }
    _3 = _capi(_3+(1));
    let _15 = m109(_i[0],) /* List<Entry<any, any>>~.getSize */;
    let _16 = (_3<_15);
    _5 = _16;
   }
   let _17 = null;
   return _17;
  }
  function m102(_i, _a0, _a1) {// Map<any, any>~.put~)
   let _6 = _identityHash(_a0);
   let _7 = _6;
   let _5 = m98(_7) /* int.sabs */;
   let _9 = m99(_i[0],) /* array<Entries<any, any>~>~.getLength */;
   let _8 = _capi(_5%_9);
   let _11 = _8;
   let _12 = m100(_i[0],_11) /* array<Entries<any, any>~>~.get */;
   let _14 = _12 === null;
   let _13;
   if (_14) {
    let _15 = _8;
    _13 = m113(_i,_15) /* Map<any, any>~.putNew~ */;
   }
   else {
    _13 = _12;
   }
   let _10 = _13;
   let _17 = _a0;
   let _18 = _a1;
   let _16 = m114(_10,_17, _18) /* Entries<any, any>~.put~ */;
   let _19 = _16 === null;
   _19 = (_19===(false));
   let _33 = (_19===(false));
   if (_33) {
    _i[1] = _capi(_i[1]+(1));
    let _24 = m99(_i[0],) /* array<Entries<any, any>~>~.getLength */;
    let _23 = _capi(_24*(2));
    let _32 = (_i[1]>=_23);
    if (_32) {
     let _27 = (_23<(0));
     if (_27) {
     }
     else {
      let _28 = _i[0];
      let _29 = _23;
      _i[0] = m97(_29) /* array<Entries<any, any>~>~.NewManual */;
      _i[1] = 0;
      let _31 = [(500), _i];
      m115(_28,_31) /* array<Entries<any, any>~>~.forEachEx */;
     }
    }
   }
   return _16;
  }
  function m103(_i, _a0) {// array<int>~.MakeCopyM)
   let _4 = _i[0];
   let _3 = m64(_4) /* array<int>~.NewManual */;
   let _5 = _i;
   let _6 = _3;
   m102(_a0,_5, _6) /* Map<any, any>~.put~ */;
   let _7 = 0;
   let _8 = (_7<_i[0]);
   while (_8) {
    let _9 = _7;
    let _12 = m95(_i,_9) /* array<int>~.get */;
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
     m69(_3,_13, _14) /* array<int>~.set~ */;
    }
    _7 = _capi(_7+(1));
    let _16 = (_7<_i[0]);
    _8 = _16;
   }
   return _3;
  }
  function m104(_i, _a0, _a1) {// lamcall35)
   let _4 = m38(_i,_a0, _a1) /* 36.bouncelam$500 (int sum, String add) */;
   return _4;
  }
  function m105(_i, _a0) {// lamcall39)
   m43(_i,_a0) /* 40.bouncelam$500 (String part) */;
   return undefined;
  }
  function m106(_i, _a0) {// Buffer<int>~.MakeCopyM)
   let _3 = [..._i];
   let _4 = _i;
   let _5 = _3;
   m102(_a0,_4, _5) /* Map<any, any>~.put~ */;
   return _3;
  }
  function m108(_a0, _a1) {// mmothello.ServerToClient.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m109(_i) {// List<Entry<any, any>>~.getSize)
   return _i[1];
  }
  function m110(_i, _a0) {// List<Entry<any, any>>~.get)
   let _4 = _a0;
   let _5 = m118(_i[0],_4) /* array<Entry<any, any>>~.get */;
   return _5;
  }
  function m111(_i) {// Entry<any, any>.getKey)
   return _i[0];
  }
  function m112(_i) {// Entry<any, any>.getValue)
   return _i[1];
  }
  function m113(_i, _a0) {// Map<any, any>~.putNew~)
   let _4 = m119() /* Entries<any, any>~.NewManual */;
   let _5 = _a0;
   let _6 = _4;
   m120(_i[0],_5, _6) /* array<Entries<any, any>~>~.set~ */;
   return _4;
  }
  function m114(_i, _a0, _a1) {// Entries<any, any>~.put~)
   let _5 = _a0;
   let _6 = _a1;
   let _4 = m121(_5, _6) /* Entry<any, any>.NewManual */;
   let _7 = m122(_i[0],) /* List<Entry<any, any>>~.getLen */;
   let _8 = 0;
   let _9 = (_8<_7);
   while (_9) {
    let _11 = _8;
    let _12 = m110(_i[0],_11) /* List<Entry<any, any>>~.get */;
    let _14 = _12 === null;
    let _13;
    if (_14) {
     return null;
    }
    else {
     _13 = _12;
    }
    let _10 = _13;
    let _15 = m111(_10,) /* Entry<any, any>.getKey */;
    let _19 = (_15) === (_a0);
    if (_19) {
     let _16 = _8;
     let _17 = _4;
     m123(_i[0],_16, _17) /* List<Entry<any, any>>~.set~ */;
     let _18 = m112(_10,) /* Entry<any, any>.getValue */;
     return _18;
    }
    _8 = _capi(_8+(1));
    let _21 = (_8<_7);
    _9 = _21;
   }
   let _22 = _4;
   m124(_i[0],_22) /* List<Entry<any, any>>~.add~ */;
   let _23 = null;
   return _23;
  }
  function m115(_i, _a0) {// array<Entries<any, any>~>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m100(_i,_6) /* array<Entries<any, any>~>~.get */;
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
     m125(_a0,_9) /* lamcall54 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m116(_i, _a0) {// 55.bouncelam$500~ (Entries<any, any>~ oldEnt))
   let _4 = _a0;
   m117(_i[1],_4) /* 47.loclam$lambda<void, Entries<any, any>~>$500~ (Entries<any, any>~ oldEnt) */;
   return undefined;
  }
  function m117(_i, _a0) {// 47.loclam$lambda<void, Entries<any, any>~>$500~ (Entries<any, any>~ oldEnt))
   let _5 = [(500), _i];
   m126(_a0,_5) /* Entries<any, any>~.forEach */;
  }
  function m118(_i, _a0) {// array<Entry<any, any>>~.get)
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
  function m119() {// Entries<any, any>~.NewManual)
   let _1 = m129() /* List<Entry<any, any>>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m120(_i, _a0, _a1) {// array<Entries<any, any>~>~.set~)
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
  function m121(_a0, _a1) {// Entry<any, any>.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m122(_i) {// List<Entry<any, any>>~.getLen)
   return _i[1];
  }
  function m123(_i, _a0, _a1) {// List<Entry<any, any>>~.set~)
   let _6 = (_a0>=_i[1]);
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _7 = _a0;
   let _8 = _a1;
   let _9 = m130(_i[0],_7, _8) /* array<Entry<any, any>>~.set~ */;
   return _9;
  }
  function m124(_i, _a0) {// List<Entry<any, any>>~.add~)
   let _4 = m131(_i[0],) /* array<Entry<any, any>>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m131(_i[0],) /* array<Entry<any, any>>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m132(_8) /* array<Entry<any, any>>~.NewManual */;
    let _10 = [(500), _i, _5];
    m133(_i[0],_10) /* array<Entry<any, any>>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m130(_i[0],_12, _13) /* array<Entry<any, any>>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m125(_i, _a0) {// lamcall54)
   m116(_i,_a0) /* 55.bouncelam$500~ (Entries<any, any>~ oldEnt) */;
   return undefined;
  }
  function m126(_i, _a0) {// Entries<any, any>~.forEach)
   let _3 = _a0;
   m136(_i[0],_3) /* List<Entry<any, any>>~.forEach */;
  }
  function m127(_i, _a0) {// 57.bouncelam$500~ (Entry<any, any> ent))
   let _4 = _a0;
   m128(_i[1],_4) /* 47.loclam$lambda<void, Entry<any, any>>$500~ (Entry<any, any> ent) */;
   return undefined;
  }

function MAIN(_binding, ...inArgs) {
 const _io = new I$O(_binding);
  function m0() {// mmothello.Client.game)
   let _0 = [];
   _doLog('--> [s 14]', `Client started`);
   let _2 = _0;
   let _1 = m1(_2) /* mmothello.Client~.NewManual */;
   let _4 = [(500), _1];
   return _4;
  }
  function m2(_i) {// 15.bouncelam$500 ())
   let _3 = _i[1];
   m3(_3) /* 10.loclam$lambda<void>?$500 (mmothello.Client~ cl) */;
   return undefined;
  }
  function m3(_a0) {// 10.loclam$lambda<void>?$500 (mmothello.Client~ cl))
   m5(_a0,) /* mmothello.Client~.update~ */;
  }
  function m5(_i) {// mmothello.Client~.update~)
   m7(_i,) /* mmothello.Client~.handleIncomingMessages~ */;
   let _6 = m8() /* mmothello.Client.ClientBinding~.getClick */;
   let _5 = _6 === null;
   let _4;
   if (_5) {
    _5 = false;
    _4 = null;
   }
   else {
    _5 = true;
    _4 = _6;
   }
   if (_5) {
    let _7 = m9() /* StringBuilder~.NewManual */;
    let _8 = [[12,71,111,116,32,99,108,105,99,107,32,64,32]];
    m10(_7,_8) /* StringBuilder~.add~ */;
    let _9 = m11(_4,) /* mmothello.Client.Click.getX */;
    _8 = m12(_9) /* int.Stringify */;
    m10(_7,_8) /* StringBuilder~.add~ */;
    _8 = [[3,32,124,32]];
    m10(_7,_8) /* StringBuilder~.add~ */;
    let _10 = m13(_4,) /* mmothello.Client.Click.getY */;
    _8 = m12(_10) /* int.Stringify */;
    m10(_7,_8) /* StringBuilder~.add~ */;
    _8 = m14(_7,) /* StringBuilder~.getResult */;
    m15(_8,) /* String.OutputBytes */;
     _io.flushDirect(-8);
    let _11 = m11(_4,) /* mmothello.Client.Click.getX */;
    let _12 = m13(_4,) /* mmothello.Client.Click.getY */;
    let _13 = m18(_11, _12) /* mmothello.ClientToServer.OnClick.NewManual */;
    let _14 = m17(_13) /* mmothello.ClientToServer.newOnClick */;
    m16(_14) /* mmothello.Client.ClientBinding~.postToServer */;
   }
  }
  function m7(_i) {// mmothello.Client~.handleIncomingMessages~)
   let _4 = true;
   while (_4) {
    let _5 = m19() /* mmothello.Client.ClientBinding~.getIncomingMessage */;
    let _7 = _5 === null;
    let _6;
    if (_7) {
     return undefined;
    }
    else {
     _6 = _5;
    }
    let _8 = _6;
    let _9 = m9() /* StringBuilder~.NewManual */;
    let _10 = [[16,77,121,32,108,111,99,97,108,32,105,100,32,105,115,58,32]];
    m10(_9,_10) /* StringBuilder~.add~ */;
    let _11 = m20() /* mmothello.Client.ClientBinding~.getLocalId */;
    let _13 = _11 === null;
    let _12;
    if (_13) {
     _12 = 0;
    }
    else {
     _12 = _11;
    }
    _10 = m21(_12) /* byte.Stringify */;
    m10(_9,_10) /* StringBuilder~.add~ */;
    _10 = m14(_9,) /* StringBuilder~.getResult */;
    m15(_10,) /* String.OutputBytes */;
     _io.flushDirect(-8);
    let _16 = m22(_8,) /* mmothello.ServerToClient.getRefreshBoard */;
    let _15 = _16 === null;
    let _14;
    if (_15) {
     _15 = false;
     _14 = null;
    }
    else {
     _15 = true;
     _14 = _16;
    }
    if (_15) {
     let _17 = false;
     let _18 = 0;
     let _20 = (_18<(16));
     while (_20) {
      let _21 = 0;
      let _23 = (_21<(16));
      while (_23) {
       let _24 = _18;
       let _25 = _21;
       let _26 = m23(_i[1],_24, _25) /* mmothello.Board~.get */;
       let _27 = _18;
       let _28 = _21;
       let _29 = m24(_14,_27, _28) /* mmothello.Board.get */;
       let _36 = (_26!==_29);
       if (_36) {
        let _30 = _18;
        let _31 = _21;
        let _32 = _29;
        m25(_30, _31, _32) /* mmothello.Client.ClientBinding~.setBoard */;
        let _33 = _18;
        let _34 = _21;
        let _35 = _29;
        m26(_i[1],_33, _34, _35) /* mmothello.Board~.set~ */;
        _17 = true;
       }
       _21 = _capi(_21+(1));
       let _39 = (_21<(16));
       _23 = _39;
      }
      _18 = _capi(_18+(1));
      let _42 = (_18<(16));
      _20 = _42;
     }
     if (_17) {
      let _45 = m20() /* mmothello.Client.ClientBinding~.getLocalId */;
      let _44 = _45 === null;
      let _43;
      if (_44) {
       _44 = false;
       _43 = 0;
      }
      else {
       _44 = true;
       _43 = _45;
      }
      if (_44) {
       let _46 = 0;
       let _48 = (_46<(16));
       while (_48) {
        let _49 = 0;
        let _51 = (_49<(16));
        while (_51) {
         let _52 = _46;
         let _53 = _49;
         let _54 = _43;
         let _55 = m27(_i[1],_52, _53, _54) /* mmothello.Board~.isLegalMove~ */;
         let _56 = _46;
         let _57 = _49;
         let _58 = m23(_i[2],_56, _57) /* mmothello.Board~.get */;
         let _60 = (_58!==(0));
         let _70 = (_55!==_60);
         if (_70) {
          let _61 = _46;
          let _62 = _49;
          let _63 = _55;
          m28(_61, _62, _63) /* mmothello.Client.ClientBinding~.setLegality */;
          if (_55) {
           let _64 = _46;
           let _65 = _49;
           m26(_i[2],_64, _65, (1)) /* mmothello.Board~.set~ */;
          }
          else {
           let _67 = _46;
           let _68 = _49;
           m26(_i[2],_67, _68, (0)) /* mmothello.Board~.set~ */;
          }
         }
         _49 = _capi(_49+(1));
         let _73 = (_49<(16));
         _51 = _73;
        }
        _46 = _capi(_46+(1));
        let _76 = (_46<(16));
        _48 = _76;
       }
      }
     }
    }
    else {
     _doLog('--> [s 24]', `ERR unknown message type`);
    }
    _4 = (true);
   }
  }
  function m8() {// mmothello.Client.ClientBinding~.getClick)
    _io.flushDirect(100);
   let _0 = _io.ir.getIB();
   if (_0) {
    let _1 = m29() /* mmothello.Client.Click.Read */;
    return _1;
   }
   let _2 = null;
   return _2;
  }
  function m140(_i) {// lamcall14)
   m2(_i,) /* 15.bouncelam$500 () */;
   return undefined;
  }
  function m15(_i) {// String.OutputBytes)
   let _2 = m46(_i[0],) /* Buffer<int>~.getLen */;
   let _3 = 0;
   let _4 = (_3<_2);
   while (_4) {
    let _5 = _3;
    let _6 = m48(_i,_5) /* String.getChar */;
    m47(_6) /* int.OutputUnicodeBytes */;
    _3 = _capi(_3+(1));
    let _8 = (_3<_2);
    _4 = _8;
   }
  }
  function m16(_a0) {// mmothello.Client.ClientBinding~.postToServer)
   m49(_a0,) /* mmothello.ClientToServer.Write */;
    _io.flushDirect(101);
   let _1 = _io.ir.getIB();
   if (_1) {
    return undefined;
   }
   let _2 = null;
   return _2;
  }
  function m19() {// mmothello.Client.ClientBinding~.getIncomingMessage)
    _io.flushDirect(102);
   let _0 = _io.ir.getIB();
   if (_0) {
    let _1 = m51() /* mmothello.ServerToClient.Read */;
    return _1;
   }
   let _2 = null;
   return _2;
  }
  function m20() {// mmothello.Client.ClientBinding~.getLocalId)
    _io.flushDirect(105);
   let _0 = _io.ir.getIB();
   if (_0) {
    let _1 = _io.ir.getI8();
    return _1;
   }
   let _2 = null;
   return _2;
  }
  function m25(_a0, _a1, _a2) {// mmothello.Client.ClientBinding~.setBoard)
   _io.ow.addI32(_a0);
   _io.ow.addI32(_a1);
   _io.ow.addI8(_a2);
    _io.flushDirect(103);
   let _3 = _io.ir.getIB();
   if (_3) {
    return undefined;
   }
   let _4 = null;
   return _4;
  }
  function m28(_a0, _a1, _a2) {// mmothello.Client.ClientBinding~.setLegality)
   _io.ow.addI32(_a0);
   _io.ow.addI32(_a1);
   _io.ow.addIB(_a2);
    _io.flushDirect(104);
   let _3 = _io.ir.getIB();
   if (_3) {
    return undefined;
   }
   let _4 = null;
   return _4;
  }
  function m29() {// mmothello.Client.Click.Read)
   let _0 = _io.ir.getI32();
   let _1 = _io.ir.getI32();
   let _2 = [_0, _1];
   return _2;
  }
  function m47(_a0) {// int.OutputUnicodeBytes)
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
    let _10 = m84(_7, (6)) /* int.shiftRight */;
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
    let _24 = m84(_21, (12)) /* int.shiftRight */;
    let _25 = _capi((224)|_24);
    let _26 = _capb(_25);
    _io.ow.addI8(_26);
    let _27 = _a0;
    let _29 = m84(_27, (6)) /* int.shiftRight */;
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
   let _44 = m84(_41, (18)) /* int.shiftRight */;
   let _45 = _capi((240)|_44);
   let _46 = _capb(_45);
   _io.ow.addI8(_46);
   let _47 = _a0;
   let _49 = m84(_47, (12)) /* int.shiftRight */;
   let _52 = _capi(_49&(63));
   let _53 = _capi((128)|_52);
   let _54 = _capb(_53);
   _io.ow.addI8(_54);
   let _55 = _a0;
   let _57 = m84(_55, (6)) /* int.shiftRight */;
   let _60 = _capi(_57&(63));
   let _61 = _capi((128)|_60);
   let _62 = _capb(_61);
   _io.ow.addI8(_62);
   let _65 = _capi(_a0&(63));
   let _66 = _capi((128)|_65);
   let _67 = _capb(_66);
   _io.ow.addI8(_67);
  }
  function m49(_i) {// mmothello.ClientToServer.Write)
   _io.ow.addI8(_i[0]);
   let _3 = _i[1];
   m86(_3,) /* mmothello.ClientToServer.OnClick.Write */;
   return undefined;
  }
  function m51() {// mmothello.ServerToClient.Read)
   let _0 = _io.ir.getI8();
   let _1 = m87() /* mmothello.Board.Read */;
   let _2 = _1;
   let _3 = m88(_2) /* mmothello.ServerToClient.newRefreshBoard */;
   return _3;
  }
  function m86(_i) {// mmothello.ClientToServer.OnClick.Write)
   _io.ow.addI32(_i[0]);
   _io.ow.addI32(_i[1]);
  }
  function m87() {// mmothello.Board.Read)
   let _0 = m107() /* Buffer<byte>~.ReadM */;
   let _1 = [_0];
   return _1;
  }
  function m107() {// Buffer<byte>~.ReadM)
   let _0 = _io.ir.getI32();
   let _2 = _0;
   let _1 = m6(_2) /* Buffer<byte>~.NewManual */;
   let _3 = 0;
   let _4 = (_3<_0);
   while (_4) {
    let _5 = _io.ir.getI8();
    let _6 = _3;
    let _7 = _5;
    m53(_1,_6, _7) /* Buffer<byte>~.set~ */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_0);
    _4 = _9;
   }
   return _1;
  }
const _re = m0(null, ...inArgs);
if (_re) {
  _re.call = () => m140(_re, _re[0]);
}
return _re;
}


 // === PROG END 


      if (typeof exports !== 'undefined') { 

        if (typeof module !== 'undefined' && module.exports) { exports = module.exports = MAIN; } 

        exports.ClientRaw = MAIN;
      } else {
        window['ClientRaw'] = MAIN;
      }

    function niceMAIN(binding) {
      return MAIN((mthId, src, dst, srcEnd) => {
        switch (mthId) {
case 100: { //  mmothello.Client.Click? getClick~()
const res = binding.getClick();
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);dst.addI32(res.x), dst.addI32(res.y)}
break;
}case 101: { //  void? postToServer~(mmothello.ClientToServer msg)
const res = binding.postToServer(src.buffer.slice(src.pos, srcEnd));
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 102: { //  mmothello.ServerToClient? getIncomingMessage~()
const res = binding.getIncomingMessage();
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);  for (let i = 0; i < res.length; ++i) { dst.addI8(res[i]); }}
break;
}case 103: { //  void? setBoard~(int x, int y, byte color)
const res = binding.setBoard(src.getI32(), src.getI32(), src.getI8());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 104: { //  void? setLegality~(int x, int y, bool isLegal)
const res = binding.setLegality(src.getI32(), src.getI32(), src.getI8());
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 105: { //  byte? getLocalId~()
const res = binding.getLocalId();
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);dst.addI8(res)}
break;
}

            default: {
              throw new Error(`Bad mthId ${mthId}`);
            }
          }
        });
      }
      
      if (typeof exports !== 'undefined') {
        exports.Client = niceMAIN;
      } else {
        window['Client'] = niceMAIN;
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
  
};
exports.VERSION = '1109269550';