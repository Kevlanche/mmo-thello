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

  function m1(_a0) {// mmothello.Game~.NewManual)
   let _1 = [_a0];
   return _1;
  }
  function m2(_i) {// 13.bouncelam$500 ())
   m3() /* 10.loclam$lambda<void>?$500 () */;
   return undefined;
  }
  function m3() {// 10.loclam$lambda<void>?$500 ())
   _doLog('--> [s  3]', `Foo`);
  }

function MAIN(_binding, ...inArgs) {
 const _io = new I$O(_binding);
  function m0() {// mmothello.Game.game)
   let _0 = [];
   _doLog('--> [s 28]', `Hello World to you from KL!!`);
   let _2 = _0;
   let _1 = m1(_2) /* mmothello.Game~.NewManual */;
   let _4 = [(500)];
   return _4;
  }
  function m4(_i) {// lamcall12)
   m2(_i,) /* 13.bouncelam$500 () */;
   return undefined;
  }
const _re = m0(null, ...inArgs);
if (_re) {
  _re.call = () => m4(_re, _re[0]);
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
case 100: { //  void? foo~(int s)
const res = binding.foo(src.getI32());
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
  
};
exports.VERSION = '1274560507';