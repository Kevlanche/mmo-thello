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

  function m128(_i, _a0) {// 60.bouncelam$500~ (Entry<any, any> ent))
   let _4 = _a0;
   m129(_i[1],_4) /* 40.loclam$lambda<void, Entry<any, any>>$500~ (Entry<any, any> ent) */;
   return undefined;
  }
  function m1(_a0) {// mmothello.Server~.NewManual)
   let _2 = m4() /* mmothello.Board~.NewManual */;
   let _1 = [_a0, _2];
   return _1;
  }
  function m129(_i, _a0) {// 40.loclam$lambda<void, Entry<any, any>>$500~ (Entry<any, any> ent))
   let _4 = m93(_a0,) /* Entry<any, any>.getKey */;
   let _5 = m94(_a0,) /* Entry<any, any>.getValue */;
   m65(_i,_4, _5) /* Map<any, any>~.put~ */;
  }
  function m130(_i, _a0, _a1) {// array<Entry<byte, int>>~.set~)
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
  function m131(_i) {// array<Entry<byte, int>>~.getLength)
   return _i[0];
  }
  function m4() {// mmothello.Board~.NewManual)
   let _3 = _capi((16)*(16));
   let _4 = m6(_3) /* Buffer<byte>~.NewManual */;
   let _0 = [_4];
   return _0;
  }
  function m132(_i, _a0) {// array<Entry<byte, int>>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m51(_i,_5) /* array<Entry<byte, int>>~.get */;
    let _7 = _3;
    m148(_a0,_6, _7) /* lamcall61 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m133(_i, _a0, _a1) {// 62.bouncelam$500~ (Entry<byte, int>? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m134(_i[1],_6, _7, _8) /* 29.loclam$lambda<void, Entry<byte, int>?, int>$500~ (Entry<byte, int>? val, int idx, array<Entry<byte, int>>~ next) */;
   return undefined;
  }
  function m6(_a0) {// Buffer<byte>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(0)];
   return _1;
  }
  function m134(_i, _a0, _a1, _a2) {// 29.loclam$lambda<void, Entry<byte, int>?, int>$500~ (Entry<byte, int>? val, int idx, array<Entry<byte, int>>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m130(_a2,_6, _7) /* array<Entry<byte, int>>~.set~ */;
   return undefined;
  }
  function m135(_i, _a0) {// Entries<byte, int>~.MakeCopyM)
   let _4 = [];
   m65(_a0,_i, _4) /* Map<any, any>~.put~ */;
   let _3 = _4;
   let _6 = m36(_a0,_i[0]) /* Map<any, any>~.get */;
   let _7 = _6 === null;
   let _8;
   if (_7) {
    _8 = m149(_i[0],_a0) /* List<Entry<byte, int>>~.MakeCopyM */;
   }
   else {
    _8 = _6;
   }
   let _5 = _8;
   _3[0] = _5;
   return _3;
  }
  function m136(_i, _a0) {// array<Entry<byte, int>>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m51(_i,_6) /* array<Entry<byte, int>>~.get */;
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
     m150(_a0,_9) /* lamcall56 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m9(_a0) {// mmothello.ServerToClient.newRefreshBoard)
   let _2 = _a0;
   let _3 = m34((0), _2) /* mmothello.ServerToClient.NewManual */;
   return _3;
  }
  function m137(_i, _a0, _a1) {// 64.bouncelam$500~ (int lo, int hi))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   let _9 = m138(_i[1],_6, _7, _8) /* 30.loclam$lambda<int, int, int>$500~ (int lo, int hi, lambda<int, Entry<byte, int>?, Entry<byte, int>?> comp) */;
   return _9;
  }
  function m10(_a0) {// SerializationBuilder.makeBetterCopy)
   let _1 = m35() /* Map<any, any>~.NewManual */;
   let _2 = m36(_1,_a0) /* Map<any, any>~.get */;
   let _3 = _2 === null;
   let _4;
   if (_3) {
    _4 = m37(_a0,_1) /* mmothello.Board~.MakeCopy */;
   }
   else {
    _4 = _2;
   }
   return _4;
  }
  function m138(_i, _a0, _a1, _a2) {// 30.loclam$lambda<int, int, int>$500~ (int lo, int hi, lambda<int, Entry<byte, int>?, Entry<byte, int>?> comp))
   let _5 = _a0;
   let _7 = _a1;
   let _6 = m51(_i,_7) /* array<Entry<byte, int>>~.get */;
   let _8 = _5;
   let _9 = (_8<_a1);
   while (_9) {
    let _11 = _8;
    let _10 = m51(_i,_11) /* array<Entry<byte, int>>~.get */;
    let _12 = _10;
    let _13 = _6;
    let _14 = m151(_a2,_12, _13) /* lamcall51 */;
    let _19 = (_14<(0));
    if (_19) {
     let _16 = _5;
     let _17 = _8;
     m152(_i,_16, _17) /* array<Entry<byte, int>>~.swap~ */;
     _5 = _capi(_5+(1));
    }
    _8 = _capi(_8+(1));
    let _21 = (_8<_a1);
    _9 = _21;
   }
   let _22 = _5;
   let _23 = _a1;
   m152(_i,_22, _23) /* array<Entry<byte, int>>~.swap~ */;
   return _5;
  }
  function m11() {// util.Counter<byte>~.NewManual)
   let _1 = m38() /* Map<byte, int>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m139(_i, _a0, _a1) {// lamcall63)
   let _4 = m137(_i,_a0, _a1) /* 64.bouncelam$500~ (int lo, int hi) */;
   return _4;
  }
  function m12(_i, _a0, _a1) {// mmothello.Board~.get)
   let _5 = _capi(_a1*(16));
   let _6 = _capi(_a0+_5);
   let _7 = m39(_i[0],_6) /* Buffer<byte>~.get */;
   return _7;
  }
  function m140() {// List<Entry<any, any>>~.NewManual)
   let _2 = m143((5)) /* array<Entry<any, any>>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m13(_i, _a0) {// util.Counter<byte>~.add~)
   let _3 = _a0;
   let _6 = m40(_i[0],_3) /* Map<byte, int>~.get */;
   let _5 = _6 === null;
   let _4;
   if (_5) {
    _5 = false;
    _4 = 0;
   }
   else {
    _5 = true;
    _4 = _6;
   }
   if (_5) {
    let _7 = _a0;
    let _9 = _capi(_4+(1));
    m41(_i[0],_7, _9) /* Map<byte, int>~.put~ */;
   }
   else {
    let _10 = _a0;
    m41(_i[0],_10, (1)) /* Map<byte, int>~.put~ */;
   }
  }
  function m141(_i, _a0, _a1) {// array<Entry<any, any>>~.set~)
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
  function m14(_i) {// util.Counter<byte>~.getResult)
   let _2 = m42(_i[0]) /* SerializationBuilder.makeBetterCopy */;
   return _2;
  }
  function m142(_i) {// array<Entry<any, any>>~.getLength)
   return _i[0];
  }
  function m15(_i) {// Map<byte, int>.getEntries)
   let _3 = m43() /* List<Entry<byte, int>>~.NewManual */;
   let _5 = [(500), _i, _3];
   m44(_i[0],_5) /* array<Entries<byte, int>~>~.forEachEx */;
   let _6 = m47(_3) /* SerializationBuilder.makeBetterCopy */;
   return _6;
  }
  function m143(_a0) {// array<Entry<any, any>>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m16(_i, _a0) {// List<Entry<byte, int>>.getSorted)
   let _4 = m48(_i) /* SerializationBuilder.makeBetterCopy */;
   let _5 = _a0;
   m49(_4,_5) /* List<Entry<byte, int>>~.sort~ */;
   let _6 = m47(_4) /* SerializationBuilder.makeBetterCopy */;
   return _6;
  }
  function m144(_i, _a0) {// array<Entry<any, any>>~.forEachi)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _5 = _3;
    let _6 = m119(_i,_5) /* array<Entry<any, any>>~.get */;
    let _7 = _3;
    m153(_a0,_6, _7) /* lamcall65 */;
    _3 = _capi(_3+(1));
    let _9 = (_3<_i[0]);
    _4 = _9;
   }
  }
  function m17(_i, _a0, _a1) {// 35.bouncelam$500~ (Entry<byte, int> lhs, Entry<byte, int> rhs))
   let _5 = _a0;
   let _6 = _a1;
   let _7 = m18(_i[1],_5, _6) /* 10.loclam$lambda<int, Entry<byte, int>, Entry<byte, int>>$500~ (Entry<byte, int> lhs, Entry<byte, int> rhs) */;
   return _7;
  }
  function m145(_i, _a0, _a1) {// 66.bouncelam$500~ (Entry<any, any>? val, int idx))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   m146(_i[1],_6, _7, _8) /* 43.loclam$lambda<void, Entry<any, any>?, int>$500~ (Entry<any, any>? val, int idx, array<Entry<any, any>>~ next) */;
   return undefined;
  }
  function m18(_i, _a0, _a1) {// 10.loclam$lambda<int, Entry<byte, int>, Entry<byte, int>>$500~ (Entry<byte, int> lhs, Entry<byte, int> rhs))
   let _5 = m50(_a1,) /* Entry<byte, int>.getValue */;
   let _6 = m50(_a0,) /* Entry<byte, int>.getValue */;
   let _7 = _capi(_5-_6);
   return _7;
  }
  function m146(_i, _a0, _a1, _a2) {// 43.loclam$lambda<void, Entry<any, any>?, int>$500~ (Entry<any, any>? val, int idx, array<Entry<any, any>>~ next))
   let _6 = _a1;
   let _7 = _a0;
   m141(_a2,_6, _7) /* array<Entry<any, any>>~.set~ */;
   return undefined;
  }
  function m19(_i) {// List<Entry<byte, int>>.getFirst)
   let _4 = m51(_i[0],(0)) /* array<Entry<byte, int>>~.get */;
   return _4;
  }
  function m147(_i, _a0) {// List<Entry<any, any>>~.forEach)
   let _4 = _a0;
   m154(_i[0],_4) /* array<Entry<any, any>>~.forEachEx */;
  }
  function m148(_i, _a0, _a1) {// lamcall61)
   m133(_i,_a0, _a1) /* 62.bouncelam$500~ (Entry<byte, int>? val, int idx) */;
   return undefined;
  }
  function m21(_i) {// Entry<byte, int>.getKey)
   return _i[0];
  }
  function m149(_i, _a0) {// List<Entry<byte, int>>~.MakeCopyM)
   let _5 = [];
   m65(_a0,_i, _5) /* Map<any, any>~.put~ */;
   let _4 = _5;
   let _7 = m36(_a0,_i[0]) /* Map<any, any>~.get */;
   let _8 = _7 === null;
   let _9;
   if (_8) {
    _9 = m115(_i[0],_a0) /* array<Entry<byte, int>>~.MakeCopyM */;
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
  function m150(_i, _a0) {// lamcall56)
   let _3 = _i[0];
   let _5 = (_3===(500));
   if (_5) {
    m109(_i,_a0) /* 57.bouncelam$500~ (Entry<byte, int> ent) */;
    return undefined;
   }
   m113(_i,_a0) /* 58.bouncelam$501 (Entry<byte, int> entry) */;
   return undefined;
  }
  function m23(_i) {// mmothello.ClientToServer.getOnClick)
   let _4 = (_i[0]===(0));
   if (_4) {
    return _i[1];
   }
   let _5 = null;
   return _5;
  }
  function m151(_i, _a0, _a1) {// lamcall51)
   let _4 = m83(_i,_a0, _a1) /* 52.bouncelam$500~ (Entry<byte, int>? a, Entry<byte, int>? b) */;
   return _4;
  }
  function m152(_i, _a0, _a1) {// array<Entry<byte, int>>~.swap~)
   let _5 = _a0;
   let _4 = m51(_i,_5) /* array<Entry<byte, int>>~.get */;
   let _6 = _a0;
   let _7 = _a1;
   let _8 = m51(_i,_7) /* array<Entry<byte, int>>~.get */;
   m130(_i,_6, _8) /* array<Entry<byte, int>>~.set~ */;
   let _9 = _a1;
   let _10 = _4;
   m130(_i,_9, _10) /* array<Entry<byte, int>>~.set~ */;
  }
  function m25(_i) {// mmothello.ClientToServer.OnClick.getX)
   return _i[0];
  }
  function m153(_i, _a0, _a1) {// lamcall65)
   m145(_i,_a0, _a1) /* 66.bouncelam$500~ (Entry<any, any>? val, int idx) */;
   return undefined;
  }
  function m26(_i) {// mmothello.ClientToServer.OnClick.getY)
   return _i[1];
  }
  function m154(_i, _a0) {// array<Entry<any, any>>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m119(_i,_6) /* array<Entry<any, any>>~.get */;
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
     m155(_a0,_9) /* lamcall59 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m27(_i, _a0, _a1, _a2) {// mmothello.Board~.isLegalMove~)
   let _5 = _a0;
   let _6 = _a1;
   let _7 = m12(_i,_5, _6) /* mmothello.Board~.get */;
   let _9 = (_7===_a2);
   if (_9) {
    return (false);
   }
   let _10 = _a2;
   let _11 = m53(_i,_10) /* mmothello.Board~.hasAnyPieces */;
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
   let _26 = m12(_i,_24, _25) /* mmothello.Board~.get */;
   let _29 = (_26!==(0));
   if (_29) {
    return (false);
   }
   let _30 = [(500), _i, _a0, _a1, _a2];
   let _34 = m56(_30,(1), (0)) /* lamcall48 */;
   let _35;
   if (_34) {
    _35 = true;
   }
   else {
    let _38 = m56(_30,(-1), (0)) /* lamcall48 */;
    let _39;
    if (_38) {
     _39 = true;
    }
    else {
     let _42 = m56(_30,(0), (-1)) /* lamcall48 */;
     let _43;
     if (_42) {
      _43 = true;
     }
     else {
      let _46 = m56(_30,(0), (1)) /* lamcall48 */;
      let _47;
      if (_46) {
       _47 = true;
      }
      else {
       let _50 = m56(_30,(1), (1)) /* lamcall48 */;
       let _51;
       if (_50) {
        _51 = true;
       }
       else {
        let _54 = m56(_30,(1), (-1)) /* lamcall48 */;
        let _55;
        if (_54) {
         _55 = true;
        }
        else {
         let _58 = m56(_30,(-1), (1)) /* lamcall48 */;
         let _59;
         if (_58) {
          _59 = true;
         }
         else {
          _59 = m56(_30,(-1), (-1)) /* lamcall48 */;
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
  function m155(_i, _a0) {// lamcall59)
   m128(_i,_a0) /* 60.bouncelam$500~ (Entry<any, any> ent) */;
   return undefined;
  }
  function m28(_i, _a0, _a1, _a2) {// mmothello.Board~.set~)
   let _6 = _capi(_a1*(16));
   let _7 = _capi(_a0+_6);
   let _8 = _a2;
   m57(_i[0],_7, _8) /* Buffer<byte>~.set~ */;
   return undefined;
  }
  function m29(_i, _a0, _a1) {// 39.bouncelam$500~ (int dx, int dy))
   let _8 = _a0;
   let _9 = _a1;
   let _10 = _i[2];
   let _11 = _i[3];
   let _12 = _i[4];
   m30(_i[1],_8, _9, _10, _11, _12) /* 10.loclam$lambda<void, int, int>$500~ (int dx, int dy, int x, int y, byte player) */;
   return undefined;
  }
  function m30(_i, _a0, _a1, _a2, _a3, _a4) {// 10.loclam$lambda<void, int, int>$500~ (int dx, int dy, int x, int y, byte player))
   let _8 = _capi(_a2+_a0);
   let _9 = _capi(_a3+_a1);
   let _10 = _a0;
   let _11 = _a1;
   let _12 = _a4;
   m58(_i[1],_8, _9, _10, _11, _12, (false)) /* mmothello.Board~.searchAndFlip~ */;
  }
  function m31(_i, _a0, _a1) {// lamcall38)
   m29(_i,_a0, _a1) /* 39.bouncelam$500~ (int dx, int dy) */;
   return undefined;
  }
  function m32(_i) {// mmothello.ClientToServer.getRequestFullUpdate)
   let _4 = (_i[0]===(1));
   if (_4) {
    return undefined;
   }
   let _5 = null;
   return _5;
  }
  function m34(_a0, _a1) {// mmothello.ServerToClient.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m35() {// Map<any, any>~.NewManual)
   let _2 = m60((16)) /* array<Entries<any, any>~>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m36(_i, _a0) {// Map<any, any>~.get)
   let _5 = _identityHash(_a0);
   let _6 = _5;
   let _4 = m61(_6) /* int.sabs */;
   let _8 = m62(_i[0],) /* array<Entries<any, any>~>~.getLength */;
   let _7 = _capi(_4%_8);
   let _10 = _7;
   let _11 = m63(_i[0],_10) /* array<Entries<any, any>~>~.get */;
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
   let _15 = m64(_9,_14) /* Entries<any, any>~.get */;
   return _15;
  }
  function m37(_i, _a0) {// mmothello.Board~.MakeCopy)
   let _4 = [];
   m65(_a0,_i, _4) /* Map<any, any>~.put~ */;
   let _3 = _4;
   let _6 = m36(_a0,_i[0]) /* Map<any, any>~.get */;
   let _7 = _6 === null;
   let _8;
   if (_7) {
    _8 = m66(_i[0],_a0) /* Buffer<byte>~.MakeCopyM */;
   }
   else {
    _8 = _6;
   }
   let _5 = _8;
   _3[0] = _5;
   return _3;
  }
  function m38() {// Map<byte, int>~.NewManual)
   let _2 = m67((16)) /* array<Entries<byte, int>~>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m39(_i, _a0) {// Buffer<byte>~.get)
   let _3 = _i[1 + _a0] || 0;
   return _3;
  }
  function m40(_i, _a0) {// Map<byte, int>~.get)
   let _5 = m68(_a0) /* byte.hashCode */;
   let _4 = m61(_5) /* int.sabs */;
   let _7 = m69(_i[0],) /* array<Entries<byte, int>~>~.getLength */;
   let _6 = _capi(_4%_7);
   let _9 = _6;
   let _10 = m70(_i[0],_9) /* array<Entries<byte, int>~>~.get */;
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
   let _14 = m71(_8,_13) /* Entries<byte, int>~.get */;
   return _14;
  }
  function m41(_i, _a0, _a1) {// Map<byte, int>~.put~)
   let _6 = m68(_a0) /* byte.hashCode */;
   let _5 = m61(_6) /* int.sabs */;
   let _8 = m69(_i[0],) /* array<Entries<byte, int>~>~.getLength */;
   let _7 = _capi(_5%_8);
   let _10 = _7;
   let _11 = m70(_i[0],_10) /* array<Entries<byte, int>~>~.get */;
   let _13 = _11 === null;
   let _12;
   if (_13) {
    let _14 = _7;
    _12 = m72(_i,_14) /* Map<byte, int>~.putNew~ */;
   }
   else {
    _12 = _11;
   }
   let _9 = _12;
   let _16 = _a0;
   let _17 = _a1;
   let _15 = m73(_9,_16, _17) /* Entries<byte, int>~.put~ */;
   let _18 = _15 === null;
   _18 = (_18===(false));
   let _32 = (_18===(false));
   if (_32) {
    _i[1] = _capi(_i[1]+(1));
    let _23 = m69(_i[0],) /* array<Entries<byte, int>~>~.getLength */;
    let _22 = _capi(_23*(2));
    let _31 = (_i[1]>=_22);
    if (_31) {
     let _26 = (_22<(0));
     if (_26) {
     }
     else {
      let _27 = _i[0];
      let _28 = _22;
      _i[0] = m67(_28) /* array<Entries<byte, int>~>~.NewManual */;
      _i[1] = 0;
      let _30 = [(501), _i];
      m44(_27,_30) /* array<Entries<byte, int>~>~.forEachEx */;
     }
    }
   }
   return _15;
  }
  function m42(_a0) {// SerializationBuilder.makeBetterCopy)
   let _1 = m35() /* Map<any, any>~.NewManual */;
   let _2 = m36(_1,_a0) /* Map<any, any>~.get */;
   let _3 = _2 === null;
   let _4;
   if (_3) {
    _4 = m76(_a0,_1) /* Map<byte, int>~.MakeCopy */;
   }
   else {
    _4 = _2;
   }
   return _4;
  }
  function m43() {// List<Entry<byte, int>>~.NewManual)
   let _2 = m77((5)) /* array<Entry<byte, int>>~.NewManual */;
   let _0 = [_2, (0)];
   return _0;
  }
  function m44(_i, _a0) {// array<Entries<byte, int>~>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m70(_i,_6) /* array<Entries<byte, int>~>~.get */;
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
     m78(_a0,_9) /* lamcall46 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m45(_i, _a0) {// 47.bouncelam$500 (Entries<byte, int>~ anonlam56455$56456))
   let _5 = _a0;
   let _6 = _i[2];
   m46(_i[1],_5, _6) /* 32.loclam$lambda<void, Entries<byte, int>~>$500 (Entries<byte, int>~ anonlam56455$56456, List<Entry<byte, int>>~ ret) */;
   return undefined;
  }
  function m46(_i, _a0, _a1) {// 32.loclam$lambda<void, Entries<byte, int>~>$500 (Entries<byte, int>~ anonlam56455$56456, List<Entry<byte, int>>~ ret))
   let _5 = _a1;
   m79(_a0,_5) /* Entries<byte, int>~.getEntries */;
   return undefined;
  }
  function m47(_a0) {// SerializationBuilder.makeBetterCopy)
   let _1 = m35() /* Map<any, any>~.NewManual */;
   let _2 = m36(_1,_a0) /* Map<any, any>~.get */;
   let _3 = _2 === null;
   let _4;
   if (_3) {
    _4 = m80(_a0,_1) /* List<Entry<byte, int>>~.MakeCopy */;
   }
   else {
    _4 = _2;
   }
   return _4;
  }
  function m48(_a0) {// SerializationBuilder.makeBetterCopy)
   let _1 = m35() /* Map<any, any>~.NewManual */;
   let _2 = m36(_1,_a0) /* Map<any, any>~.get */;
   let _3 = _2 === null;
   let _4;
   if (_3) {
    _4 = m81(_a0,_1) /* List<Entry<byte, int>>.MakeCopyM */;
   }
   else {
    _4 = _2;
   }
   return _4;
  }
  function m49(_i, _a0) {// List<Entry<byte, int>>~.sort~)
   let _5 = [(500), _i, _a0];
   m82(_i[0],_5) /* array<Entry<byte, int>>~.sort~ */;
  }
  function m50(_i) {// Entry<byte, int>.getValue)
   return _i[1];
  }
  function m51(_i, _a0) {// array<Entry<byte, int>>~.get)
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
  function m53(_i, _a0) {// mmothello.Board~.hasAnyPieces)
   let _3 = 0;
   let _5 = (_3<(16));
   while (_5) {
    let _6 = 0;
    let _8 = (_6<(16));
    while (_8) {
     let _9 = _3;
     let _10 = _6;
     let _11 = m12(_i,_9, _10) /* mmothello.Board~.get */;
     let _45 = (_11===_a0);
     if (_45) {
      let _12 = [(501), _i, _3, _6, _a0];
      let _16 = m56(_12,(-1), (0)) /* lamcall48 */;
      let _17;
      if (_16) {
       _17 = true;
      }
      else {
       let _20 = m56(_12,(1), (0)) /* lamcall48 */;
       let _21;
       if (_20) {
        _21 = true;
       }
       else {
        let _24 = m56(_12,(0), (-1)) /* lamcall48 */;
        let _25;
        if (_24) {
         _25 = true;
        }
        else {
         let _28 = m56(_12,(0), (1)) /* lamcall48 */;
         let _29;
         if (_28) {
          _29 = true;
         }
         else {
          let _32 = m56(_12,(-1), (-1)) /* lamcall48 */;
          let _33;
          if (_32) {
           _33 = true;
          }
          else {
           let _36 = m56(_12,(1), (-1)) /* lamcall48 */;
           let _37;
           if (_36) {
            _37 = true;
           }
           else {
            let _40 = m56(_12,(-1), (1)) /* lamcall48 */;
            let _41;
            if (_40) {
             _41 = true;
            }
            else {
             _41 = m56(_12,(1), (1)) /* lamcall48 */;
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
  function m54(_i, _a0, _a1) {// 49.bouncelam$500~ (int dx, int dy))
   let _8 = _a0;
   let _9 = _a1;
   let _10 = _i[2];
   let _11 = _i[3];
   let _12 = _i[4];
   let _13 = m55(_i[1],_8, _9, _10, _11, _12) /* 12.loclam$lambda<bool, int, int>$500~ (int dx, int dy, int x, int y, byte player) */;
   return _13;
  }
  function m55(_i, _a0, _a1, _a2, _a3, _a4) {// 12.loclam$lambda<bool, int, int>$500~ (int dx, int dy, int x, int y, byte player))
   let _7 = _capi(_a2+_a0);
   let _8 = _capi(_a3+_a1);
   let _9 = m12(_i,_7, _8) /* mmothello.Board~.get */;
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
   let _24 = m58(_i,_16, _19, _20, _21, _22, (true)) /* mmothello.Board~.searchAndFlip~ */;
   return _24;
  }
  function m56(_i, _a0, _a1) {// lamcall48)
   let _5 = _i[0];
   let _7 = (_5===(500));
   let _4;
   if (_7) {
    _4 = m54(_i,_a0, _a1) /* 49.bouncelam$500~ (int dx, int dy) */;
    return _4;
   }
   _4 = m88(_i,_a0, _a1) /* 53.bouncelam$501 (int dx, int dy) */;
   return _4;
  }
  function m57(_i, _a0, _a1) {// Buffer<byte>~.set~)
   if (_a0 >= 0 && _a0 < _i.length - 1) _i[1 + _a0] = _a1;
   return undefined;
  }
  function m58(_i, _a0, _a1, _a2, _a3, _a4, _a5) {// mmothello.Board~.searchAndFlip~)
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
   let _21 = m12(_i,_19, _20) /* mmothello.Board~.get */;
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
   let _33 = m58(_i,_27, _28, _29, _30, _31, _32) /* mmothello.Board~.searchAndFlip~ */;
   if (_33) {
    let _38 = (_a5===(false));
    if (_38) {
     let _35 = _a0;
     let _36 = _a1;
     let _37 = _a4;
     m28(_i,_35, _36, _37) /* mmothello.Board~.set~ */;
    }
   }
   return _33;
  }
  function m60(_a0) {// array<Entries<any, any>~>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m61(_a0) {// int.sabs)
   let _4 = (_a0<(0));
   if (_4) {
    let _3 = _capi((0)-_a0);
    return _3;
   }
   return _a0;
  }
  function m62(_i) {// array<Entries<any, any>~>~.getLength)
   return _i[0];
  }
  function m63(_i, _a0) {// array<Entries<any, any>~>~.get)
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
  function m64(_i, _a0) {// Entries<any, any>~.get)
   let _3 = 0;
   let _4 = m91(_i[0],) /* List<Entry<any, any>>~.getSize */;
   let _5 = (_3<_4);
   while (_5) {
    let _7 = _3;
    let _8 = m92(_i[0],_7) /* List<Entry<any, any>>~.get */;
    let _10 = _8 === null;
    let _9;
    if (_10) {
     return null;
    }
    else {
     _9 = _8;
    }
    let _6 = _9;
    let _11 = m93(_6,) /* Entry<any, any>.getKey */;
    let _13 = (_11) === (_a0);
    if (_13) {
     let _12 = m94(_6,) /* Entry<any, any>.getValue */;
     return _12;
    }
    _3 = _capi(_3+(1));
    let _15 = m91(_i[0],) /* List<Entry<any, any>>~.getSize */;
    let _16 = (_3<_15);
    _5 = _16;
   }
   let _17 = null;
   return _17;
  }
  function m65(_i, _a0, _a1) {// Map<any, any>~.put~)
   let _6 = _identityHash(_a0);
   let _7 = _6;
   let _5 = m61(_7) /* int.sabs */;
   let _9 = m62(_i[0],) /* array<Entries<any, any>~>~.getLength */;
   let _8 = _capi(_5%_9);
   let _11 = _8;
   let _12 = m63(_i[0],_11) /* array<Entries<any, any>~>~.get */;
   let _14 = _12 === null;
   let _13;
   if (_14) {
    let _15 = _8;
    _13 = m95(_i,_15) /* Map<any, any>~.putNew~ */;
   }
   else {
    _13 = _12;
   }
   let _10 = _13;
   let _17 = _a0;
   let _18 = _a1;
   let _16 = m96(_10,_17, _18) /* Entries<any, any>~.put~ */;
   let _19 = _16 === null;
   _19 = (_19===(false));
   let _33 = (_19===(false));
   if (_33) {
    _i[1] = _capi(_i[1]+(1));
    let _24 = m62(_i[0],) /* array<Entries<any, any>~>~.getLength */;
    let _23 = _capi(_24*(2));
    let _32 = (_i[1]>=_23);
    if (_32) {
     let _27 = (_23<(0));
     if (_27) {
     }
     else {
      let _28 = _i[0];
      let _29 = _23;
      _i[0] = m60(_29) /* array<Entries<any, any>~>~.NewManual */;
      _i[1] = 0;
      let _31 = [(500), _i];
      m97(_28,_31) /* array<Entries<any, any>~>~.forEachEx */;
     }
    }
   }
   return _16;
  }
  function m66(_i, _a0) {// Buffer<byte>~.MakeCopyM)
   let _3 = [..._i];
   let _4 = _i;
   let _5 = _3;
   m65(_a0,_4, _5) /* Map<any, any>~.put~ */;
   return _3;
  }
  function m67(_a0) {// array<Entries<byte, int>~>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m68(_a0) {// byte.hashCode)
   let _1 = _capi(_a0);
   return _1;
  }
  function m69(_i) {// array<Entries<byte, int>~>~.getLength)
   return _i[0];
  }
  function m70(_i, _a0) {// array<Entries<byte, int>~>~.get)
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
  function m71(_i, _a0) {// Entries<byte, int>~.get)
   let _3 = 0;
   let _4 = m100(_i[0],) /* List<Entry<byte, int>>~.getSize */;
   let _5 = (_3<_4);
   while (_5) {
    let _7 = _3;
    let _8 = m101(_i[0],_7) /* List<Entry<byte, int>>~.get */;
    let _10 = _8 === null;
    let _9;
    if (_10) {
     return null;
    }
    else {
     _9 = _8;
    }
    let _6 = _9;
    let _11 = m21(_6,) /* Entry<byte, int>.getKey */;
    let _13 = (_11===_a0);
    if (_13) {
     let _12 = m50(_6,) /* Entry<byte, int>.getValue */;
     return _12;
    }
    _3 = _capi(_3+(1));
    let _15 = m100(_i[0],) /* List<Entry<byte, int>>~.getSize */;
    let _16 = (_3<_15);
    _5 = _16;
   }
   let _17 = null;
   return _17;
  }
  function m72(_i, _a0) {// Map<byte, int>~.putNew~)
   let _4 = m102() /* Entries<byte, int>~.NewManual */;
   let _5 = _a0;
   let _6 = _4;
   m103(_i[0],_5, _6) /* array<Entries<byte, int>~>~.set~ */;
   return _4;
  }
  function m73(_i, _a0, _a1) {// Entries<byte, int>~.put~)
   let _5 = _a0;
   let _6 = _a1;
   let _4 = m104(_5, _6) /* Entry<byte, int>.NewManual */;
   let _7 = m105(_i[0],) /* List<Entry<byte, int>>~.getLen */;
   let _8 = 0;
   let _9 = (_8<_7);
   while (_9) {
    let _11 = _8;
    let _12 = m101(_i[0],_11) /* List<Entry<byte, int>>~.get */;
    let _14 = _12 === null;
    let _13;
    if (_14) {
     return null;
    }
    else {
     _13 = _12;
    }
    let _10 = _13;
    let _15 = m21(_10,) /* Entry<byte, int>.getKey */;
    let _19 = (_15===_a0);
    if (_19) {
     let _16 = _8;
     let _17 = _4;
     m106(_i[0],_16, _17) /* List<Entry<byte, int>>~.set~ */;
     let _18 = m50(_10,) /* Entry<byte, int>.getValue */;
     return _18;
    }
    _8 = _capi(_8+(1));
    let _21 = (_8<_7);
    _9 = _21;
   }
   let _22 = _4;
   m107(_i[0],_22) /* List<Entry<byte, int>>~.add~ */;
   let _23 = null;
   return _23;
  }
  function m74(_i, _a0) {// 50.bouncelam$501~ (Entries<byte, int>~ oldEnt))
   let _4 = _a0;
   m75(_i[1],_4) /* 26.loclam$lambda<void, Entries<byte, int>~>$501~ (Entries<byte, int>~ oldEnt) */;
   return undefined;
  }
  function m75(_i, _a0) {// 26.loclam$lambda<void, Entries<byte, int>~>$501~ (Entries<byte, int>~ oldEnt))
   let _5 = [(500), _i];
   m108(_a0,_5) /* Entries<byte, int>~.forEach */;
  }
  function m76(_i, _a0) {// Map<byte, int>~.MakeCopy)
   let _5 = [];
   m65(_a0,_i, _5) /* Map<any, any>~.put~ */;
   let _4 = _5;
   let _7 = m36(_a0,_i[0]) /* Map<any, any>~.get */;
   let _8 = _7 === null;
   let _9;
   if (_8) {
    _9 = m111(_i[0],_a0) /* array<Entries<byte, int>~>~.MakeCopyM */;
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
  function m77(_a0) {// array<Entry<byte, int>>~.NewManual)
   let _1 = [_a0, ...Array(_a0).fill(null)];
   return _1;
  }
  function m78(_i, _a0) {// lamcall46)
   let _3 = _i[0];
   let _5 = (_3===(500));
   if (_5) {
    m45(_i,_a0) /* 47.bouncelam$500 (Entries<byte, int>~ anonlam56455$56456) */;
    return undefined;
   }
   m74(_i,_a0) /* 50.bouncelam$501~ (Entries<byte, int>~ oldEnt) */;
   return undefined;
  }
  function m79(_i, _a0) {// Entries<byte, int>~.getEntries)
   let _4 = [(501), _i, _a0];
   m112(_i[0],_4) /* List<Entry<byte, int>>~.forEach */;
  }
  function m80(_i, _a0) {// List<Entry<byte, int>>~.MakeCopy)
   let _5 = [];
   m65(_a0,_i, _5) /* Map<any, any>~.put~ */;
   let _4 = _5;
   let _7 = m36(_a0,_i[0]) /* Map<any, any>~.get */;
   let _8 = _7 === null;
   let _9;
   if (_8) {
    _9 = m115(_i[0],_a0) /* array<Entry<byte, int>>~.MakeCopyM */;
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
  function m81(_i, _a0) {// List<Entry<byte, int>>.MakeCopyM)
   let _5 = [];
   m65(_a0,_i, _5) /* Map<any, any>~.put~ */;
   let _4 = _5;
   let _7 = m36(_a0,_i[0]) /* Map<any, any>~.get */;
   let _8 = _7 === null;
   let _9;
   if (_8) {
    _9 = m115(_i[0],_a0) /* array<Entry<byte, int>>~.MakeCopyM */;
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
  function m82(_i, _a0) {// array<Entry<byte, int>>~.sort~)
   let _3 = _a0;
   let _6 = _capi(_i[0]-(1));
   m116(_i,_3, (0), _6) /* array<Entry<byte, int>>~.quickSort~ */;
  }
  function m83(_i, _a0, _a1) {// 52.bouncelam$500~ (Entry<byte, int>? a, Entry<byte, int>? b))
   let _6 = _a0;
   let _7 = _a1;
   let _8 = _i[2];
   let _9 = m84(_i[1],_6, _7, _8) /* 29.loclam$lambda<int, Entry<byte, int>?, Entry<byte, int>?>$500~ (Entry<byte, int>? a, Entry<byte, int>? b, lambda<int, Entry<byte, int>, Entry<byte, int>> comparator) */;
   return _9;
  }
  function m84(_i, _a0, _a1, _a2) {// 29.loclam$lambda<int, Entry<byte, int>?, Entry<byte, int>?>$500~ (Entry<byte, int>? a, Entry<byte, int>? b, lambda<int, Entry<byte, int>, Entry<byte, int>> comparator))
   let _7 = _a0 === null;
   let _6;
   if (_7) {
    _7 = false;
    _6 = null;
   }
   else {
    _7 = true;
    _6 = _a0;
   }
   if (_7) {
    let _9 = _a1 === null;
    let _8;
    if (_9) {
     _9 = false;
     _8 = null;
    }
    else {
     _9 = true;
     _8 = _a1;
    }
    if (_9) {
     let _10 = _6;
     let _11 = _8;
     let _12 = m117(_a2,_10, _11) /* lamcall34 */;
     return _12;
    }
    return (-1);
   }
   let _14 = _a1 === null;
   _14 = (_14===(false));
   if (_14) {
    return (1);
   }
   return (0);
  }
  function m86(_a0) {// mmothello.ClientToServer.newOnClick)
   let _2 = _a0;
   let _3 = m118((0), _2) /* mmothello.ClientToServer.NewManual */;
   return _3;
  }
  function m87() {// mmothello.ClientToServer.newRequestFullUpdate)
   let _2 = m118((1), (1)) /* mmothello.ClientToServer.NewManual */;
   return _2;
  }
  function m88(_i, _a0, _a1) {// 53.bouncelam$501 (int dx, int dy))
   let _8 = _a0;
   let _9 = _a1;
   let _10 = _i[2];
   let _11 = _i[3];
   let _12 = _i[4];
   let _13 = m89(_i[1],_8, _9, _10, _11, _12) /* 12.loclam$lambda<bool, int, int>$501 (int dx, int dy, int x, int y, byte player) */;
   return _13;
  }
  function m89(_i, _a0, _a1, _a2, _a3, _a4) {// 12.loclam$lambda<bool, int, int>$501 (int dx, int dy, int x, int y, byte player))
   let _7 = _capi(_a2+_a0);
   let _8 = _capi(_a3+_a1);
   let _9 = m12(_i,_7, _8) /* mmothello.Board~.get */;
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
  function m91(_i) {// List<Entry<any, any>>~.getSize)
   return _i[1];
  }
  function m92(_i, _a0) {// List<Entry<any, any>>~.get)
   let _4 = _a0;
   let _5 = m119(_i[0],_4) /* array<Entry<any, any>>~.get */;
   return _5;
  }
  function m93(_i) {// Entry<any, any>.getKey)
   return _i[0];
  }
  function m94(_i) {// Entry<any, any>.getValue)
   return _i[1];
  }
  function m95(_i, _a0) {// Map<any, any>~.putNew~)
   let _4 = m120() /* Entries<any, any>~.NewManual */;
   let _5 = _a0;
   let _6 = _4;
   m121(_i[0],_5, _6) /* array<Entries<any, any>~>~.set~ */;
   return _4;
  }
  function m96(_i, _a0, _a1) {// Entries<any, any>~.put~)
   let _5 = _a0;
   let _6 = _a1;
   let _4 = m122(_5, _6) /* Entry<any, any>.NewManual */;
   let _7 = m123(_i[0],) /* List<Entry<any, any>>~.getLen */;
   let _8 = 0;
   let _9 = (_8<_7);
   while (_9) {
    let _11 = _8;
    let _12 = m92(_i[0],_11) /* List<Entry<any, any>>~.get */;
    let _14 = _12 === null;
    let _13;
    if (_14) {
     return null;
    }
    else {
     _13 = _12;
    }
    let _10 = _13;
    let _15 = m93(_10,) /* Entry<any, any>.getKey */;
    let _19 = (_15) === (_a0);
    if (_19) {
     let _16 = _8;
     let _17 = _4;
     m124(_i[0],_16, _17) /* List<Entry<any, any>>~.set~ */;
     let _18 = m94(_10,) /* Entry<any, any>.getValue */;
     return _18;
    }
    _8 = _capi(_8+(1));
    let _21 = (_8<_7);
    _9 = _21;
   }
   let _22 = _4;
   m125(_i[0],_22) /* List<Entry<any, any>>~.add~ */;
   let _23 = null;
   return _23;
  }
  function m97(_i, _a0) {// array<Entries<any, any>~>~.forEachEx)
   let _3 = 0;
   let _4 = (_3<_i[0]);
   while (_4) {
    let _6 = _3;
    let _8 = m63(_i,_6) /* array<Entries<any, any>~>~.get */;
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
     m126(_a0,_9) /* lamcall54 */;
    }
    _3 = _capi(_3+(1));
    let _11 = (_3<_i[0]);
    _4 = _11;
   }
  }
  function m98(_i, _a0) {// 55.bouncelam$500~ (Entries<any, any>~ oldEnt))
   let _4 = _a0;
   m99(_i[1],_4) /* 40.loclam$lambda<void, Entries<any, any>~>$500~ (Entries<any, any>~ oldEnt) */;
   return undefined;
  }
  function m99(_i, _a0) {// 40.loclam$lambda<void, Entries<any, any>~>$500~ (Entries<any, any>~ oldEnt))
   let _5 = [(500), _i];
   m127(_a0,_5) /* Entries<any, any>~.forEach */;
  }
  function m100(_i) {// List<Entry<byte, int>>~.getSize)
   return _i[1];
  }
  function m101(_i, _a0) {// List<Entry<byte, int>>~.get)
   let _4 = _a0;
   let _5 = m51(_i[0],_4) /* array<Entry<byte, int>>~.get */;
   return _5;
  }
  function m102() {// Entries<byte, int>~.NewManual)
   let _1 = m43() /* List<Entry<byte, int>>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m103(_i, _a0, _a1) {// array<Entries<byte, int>~>~.set~)
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
  function m104(_a0, _a1) {// Entry<byte, int>.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m105(_i) {// List<Entry<byte, int>>~.getLen)
   return _i[1];
  }
  function m106(_i, _a0, _a1) {// List<Entry<byte, int>>~.set~)
   let _6 = (_a0>=_i[1]);
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _7 = _a0;
   let _8 = _a1;
   let _9 = m130(_i[0],_7, _8) /* array<Entry<byte, int>>~.set~ */;
   return _9;
  }
  function m107(_i, _a0) {// List<Entry<byte, int>>~.add~)
   let _4 = m131(_i[0],) /* array<Entry<byte, int>>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m131(_i[0],) /* array<Entry<byte, int>>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m77(_8) /* array<Entry<byte, int>>~.NewManual */;
    let _10 = [(500), _i, _5];
    m132(_i[0],_10) /* array<Entry<byte, int>>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m130(_i[0],_12, _13) /* array<Entry<byte, int>>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m108(_i, _a0) {// Entries<byte, int>~.forEach)
   let _3 = _a0;
   m112(_i[0],_3) /* List<Entry<byte, int>>~.forEach */;
  }
  function m109(_i, _a0) {// 57.bouncelam$500~ (Entry<byte, int> ent))
   let _4 = _a0;
   m110(_i[1],_4) /* 26.loclam$lambda<void, Entry<byte, int>>$500~ (Entry<byte, int> ent) */;
   return undefined;
  }
  function m110(_i, _a0) {// 26.loclam$lambda<void, Entry<byte, int>>$500~ (Entry<byte, int> ent))
   let _4 = m21(_a0,) /* Entry<byte, int>.getKey */;
   let _5 = m50(_a0,) /* Entry<byte, int>.getValue */;
   m41(_i,_4, _5) /* Map<byte, int>~.put~ */;
  }
  function m111(_i, _a0) {// array<Entries<byte, int>~>~.MakeCopyM)
   let _4 = _i[0];
   let _3 = m67(_4) /* array<Entries<byte, int>~>~.NewManual */;
   let _5 = _i;
   let _6 = _3;
   m65(_a0,_5, _6) /* Map<any, any>~.put~ */;
   let _7 = 0;
   let _8 = (_7<_i[0]);
   while (_8) {
    let _9 = _7;
    let _12 = m70(_i,_9) /* array<Entries<byte, int>~>~.get */;
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
     let _14 = m36(_a0,_10) /* Map<any, any>~.get */;
     let _15 = _14 === null;
     let _16;
     if (_15) {
      _16 = m135(_10,_a0) /* Entries<byte, int>~.MakeCopyM */;
     }
     else {
      _16 = _14;
     }
     let _17 = _16;
     m103(_3,_13, _17) /* array<Entries<byte, int>~>~.set~ */;
    }
    _7 = _capi(_7+(1));
    let _19 = (_7<_i[0]);
    _8 = _19;
   }
   return _3;
  }
  function m112(_i, _a0) {// List<Entry<byte, int>>~.forEach)
   let _4 = _a0;
   m136(_i[0],_4) /* array<Entry<byte, int>>~.forEachEx */;
  }
  function m113(_i, _a0) {// 58.bouncelam$501 (Entry<byte, int> entry))
   let _5 = _a0;
   let _6 = _i[2];
   m114(_i[1],_5, _6) /* 27.loclam$lambda<void, Entry<byte, int>>$501 (Entry<byte, int> entry, List<Entry<byte, int>>~ out) */;
   return undefined;
  }
  function m114(_i, _a0, _a1) {// 27.loclam$lambda<void, Entry<byte, int>>$501 (Entry<byte, int> entry, List<Entry<byte, int>>~ out))
   let _4 = _a0;
   m107(_a1,_4) /* List<Entry<byte, int>>~.add~ */;
   return undefined;
  }
  function m115(_i, _a0) {// array<Entry<byte, int>>~.MakeCopyM)
   let _4 = _i[0];
   let _3 = m77(_4) /* array<Entry<byte, int>>~.NewManual */;
   let _5 = _i;
   let _6 = _3;
   m65(_a0,_5, _6) /* Map<any, any>~.put~ */;
   let _7 = 0;
   let _8 = (_7<_i[0]);
   while (_8) {
    let _9 = _7;
    let _12 = m51(_i,_9) /* array<Entry<byte, int>>~.get */;
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
     m130(_3,_13, _14) /* array<Entry<byte, int>>~.set~ */;
    }
    _7 = _capi(_7+(1));
    let _16 = (_7<_i[0]);
    _8 = _16;
   }
   return _3;
  }
  function m116(_i, _a0, _a1, _a2) {// array<Entry<byte, int>>~.quickSort~)
   let _5 = [(500), _i, _a0];
   let _18 = (_a1<_a2);
   if (_18) {
    let _8 = _a1;
    let _9 = _a2;
    let _7 = m139(_5,_8, _9) /* lamcall63 */;
    let _10 = _a0;
    let _11 = _a1;
    let _13 = _capi(_7-(1));
    m116(_i,_10, _11, _13) /* array<Entry<byte, int>>~.quickSort~ */;
    let _14 = _a0;
    let _16 = _capi(_7+(1));
    let _17 = _a2;
    m116(_i,_14, _16, _17) /* array<Entry<byte, int>>~.quickSort~ */;
   }
  }
  function m117(_i, _a0, _a1) {// lamcall34)
   let _4 = m17(_i,_a0, _a1) /* 35.bouncelam$500~ (Entry<byte, int> lhs, Entry<byte, int> rhs) */;
   return _4;
  }
  function m118(_a0, _a1) {// mmothello.ClientToServer.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m119(_i, _a0) {// array<Entry<any, any>>~.get)
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
  function m120() {// Entries<any, any>~.NewManual)
   let _1 = m140() /* List<Entry<any, any>>~.NewManual */;
   let _0 = [_1];
   return _0;
  }
  function m121(_i, _a0, _a1) {// array<Entries<any, any>~>~.set~)
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
  function m122(_a0, _a1) {// Entry<any, any>.NewManual)
   let _2 = [_a0, _a1];
   return _2;
  }
  function m123(_i) {// List<Entry<any, any>>~.getLen)
   return _i[1];
  }
  function m124(_i, _a0, _a1) {// List<Entry<any, any>>~.set~)
   let _6 = (_a0>=_i[1]);
   if (_6) {
    let _5 = null;
    return _5;
   }
   let _7 = _a0;
   let _8 = _a1;
   let _9 = m141(_i[0],_7, _8) /* array<Entry<any, any>>~.set~ */;
   return _9;
  }
  function m125(_i, _a0) {// List<Entry<any, any>>~.add~)
   let _4 = m142(_i[0],) /* array<Entry<any, any>>~.getLength */;
   let _11 = (_i[1]===_4);
   if (_11) {
    let _6 = m142(_i[0],) /* array<Entry<any, any>>~.getLength */;
    let _8 = _capi(_6*(2));
    let _5 = m143(_8) /* array<Entry<any, any>>~.NewManual */;
    let _10 = [(500), _i, _5];
    m144(_i[0],_10) /* array<Entry<any, any>>~.forEachi */;
    _i[0] = _5;
   }
   let _12 = _i[1];
   let _13 = _a0;
   m141(_i[0],_12, _13) /* array<Entry<any, any>>~.set~ */;
   _i[1] = _capi(_i[1]+(1));
  }
  function m126(_i, _a0) {// lamcall54)
   m98(_i,_a0) /* 55.bouncelam$500~ (Entries<any, any>~ oldEnt) */;
   return undefined;
  }
  function m127(_i, _a0) {// Entries<any, any>~.forEach)
   let _3 = _a0;
   m147(_i[0],_3) /* List<Entry<any, any>>~.forEach */;
  }

function MAIN(_binding, ...inArgs) {
 const _io = new I$O(_binding);
  function m0() {// mmothello.Server.game)
   let _0 = [];
   _doLog('--> [s 14]', `Server started`);
   let _2 = _0;
   let _1 = m1(_2) /* mmothello.Server~.NewManual */;
   let _4 = [(500), _1];
   return _4;
  }
  function m2(_i) {// 15.bouncelam$500 ())
   let _3 = _i[1];
   m3(_3) /* 10.loclam$lambda<void>?$500 (mmothello.Server~ gm) */;
   return undefined;
  }
  function m3(_a0) {// 10.loclam$lambda<void>?$500 (mmothello.Server~ gm))
   m5(_a0,) /* mmothello.Server~.update~ */;
  }
  function m5(_i) {// mmothello.Server~.update~)
   let _33 = m7(_i,) /* mmothello.Server~.handleIncomingMessages~ */;
   if (_33) {
    let _3 = m10(_i[1]) /* SerializationBuilder.makeBetterCopy */;
    let _4 = m9(_3) /* mmothello.ServerToClient.newRefreshBoard */;
    m8(_4) /* mmothello.Server.ServerBinding~.postMessage */;
    let _5 = m11() /* util.Counter<byte>~.NewManual */;
    let _6 = 0;
    let _8 = (_6<(16));
    while (_8) {
     let _9 = 0;
     let _11 = (_9<(16));
     while (_11) {
      let _12 = _6;
      let _13 = _9;
      let _14 = m12(_i[1],_12, _13) /* mmothello.Board~.get */;
      let _17 = (_14!==(0));
      if (_17) {
       let _16 = _14;
       m13(_5,_16) /* util.Counter<byte>~.add~ */;
      }
      _9 = _capi(_9+(1));
      let _20 = (_9<(16));
      _11 = _20;
     }
     _6 = _capi(_6+(1));
     let _23 = (_6<(16));
     _8 = _23;
    }
    let _24 = m14(_5,) /* util.Counter<byte>~.getResult */;
    let _25 = m15(_24,) /* Map<byte, int>.getEntries */;
    let _27 = [(500), _i];
    let _28 = m16(_25,_27) /* List<Entry<byte, int>>.getSorted */;
    let _31 = m19(_28,) /* List<Entry<byte, int>>.getFirst */;
    let _30 = _31 === null;
    let _29;
    if (_30) {
     _30 = false;
     _29 = null;
    }
    else {
     _30 = true;
     _29 = _31;
    }
    if (_30) {
     let _32 = m21(_29,) /* Entry<byte, int>.getKey */;
     m20(_32) /* mmothello.Server.ServerBinding~.reportLeader */;
    }
   }
  }
  function m7(_i) {// mmothello.Server~.handleIncomingMessages~)
   let _3 = false;
   let _4 = true;
   while (_4) {
    let _5 = m22() /* mmothello.Server.ServerBinding~.receiveIncomingMessage */;
    let _7 = _5 === null;
    let _6;
    if (_7) {
     return _3;
    }
    else {
     _6 = _5;
    }
    let _8 = _6;
    let _11 = m23(_8,) /* mmothello.ClientToServer.getOnClick */;
    let _10 = _11 === null;
    let _9;
    if (_10) {
     _10 = false;
     _9 = null;
    }
    else {
     _10 = true;
     _9 = _11;
    }
    if (_10) {
     let _12 = m24() /* mmothello.Server.ServerBinding~.getLastIncomingMessageOwner */;
     let _14 = _12 === null;
     let _13;
     if (_14) {
      return _3;
     }
     else {
      _13 = _12;
     }
     let _15 = _13;
     let _16 = m25(_9,) /* mmothello.ClientToServer.OnClick.getX */;
     let _17 = m26(_9,) /* mmothello.ClientToServer.OnClick.getY */;
     let _18 = _16;
     let _19 = _17;
     let _20 = _15;
     let _42 = m27(_i[1],_18, _19, _20) /* mmothello.Board~.isLegalMove~ */;
     if (_42) {
      let _21 = _16;
      let _22 = _17;
      let _23 = _15;
      m28(_i[1],_21, _22, _23) /* mmothello.Board~.set~ */;
      _3 = true;
      let _24 = [(500), _i, _16, _17, _15];
      m31(_24,(1), (0)) /* lamcall38 */;
      m31(_24,(-1), (0)) /* lamcall38 */;
      m31(_24,(0), (-1)) /* lamcall38 */;
      m31(_24,(0), (1)) /* lamcall38 */;
      m31(_24,(1), (1)) /* lamcall38 */;
      m31(_24,(1), (-1)) /* lamcall38 */;
      m31(_24,(-1), (1)) /* lamcall38 */;
      m31(_24,(-1), (-1)) /* lamcall38 */;
     }
    }
    let _44 = m32(_8,) /* mmothello.ClientToServer.getRequestFullUpdate */;
    let _43 = _44 === null;
    _43 = (_43===(false));
    if (_43) {
     _3 = true;
    }
    _4 = (true);
   }
  }
  function m8(_a0) {// mmothello.Server.ServerBinding~.postMessage)
   m33(_a0,) /* mmothello.ServerToClient.Write */;
    _io.flushDirect(102);
   let _1 = _io.ir.getIB();
   if (_1) {
    return undefined;
   }
   let _2 = null;
   return _2;
  }
  function m20(_a0) {// mmothello.Server.ServerBinding~.reportLeader)
   _io.ow.addI8(_a0);
    _io.flushDirect(103);
   let _1 = _io.ir.getIB();
   if (_1) {
    return undefined;
   }
   let _2 = null;
   return _2;
  }
  function m22() {// mmothello.Server.ServerBinding~.receiveIncomingMessage)
    _io.flushDirect(100);
   let _0 = _io.ir.getIB();
   if (_0) {
    let _1 = m52() /* mmothello.ClientToServer.Read */;
    return _1;
   }
   let _2 = null;
   return _2;
  }
  function m24() {// mmothello.Server.ServerBinding~.getLastIncomingMessageOwner)
    _io.flushDirect(101);
   let _0 = _io.ir.getIB();
   if (_0) {
    let _1 = _io.ir.getI8();
    return _1;
   }
   let _2 = null;
   return _2;
  }
  function m156(_i) {// lamcall14)
   m2(_i,) /* 15.bouncelam$500 () */;
   return undefined;
  }
  function m33(_i) {// mmothello.ServerToClient.Write)
   _io.ow.addI8(_i[0]);
   let _3 = _i[1];
   m59(_3,) /* mmothello.Board.Write */;
   return undefined;
  }
  function m52() {// mmothello.ClientToServer.Read)
   let _0 = _io.ir.getI8();
   let _5 = (_0===(0));
   if (_5) {
    let _2 = m85() /* mmothello.ClientToServer.OnClick.Read */;
    let _3 = _2;
    let _4 = m86(_3) /* mmothello.ClientToServer.newOnClick */;
    return _4;
   }
   let _6 = m87() /* mmothello.ClientToServer.newRequestFullUpdate */;
   return _6;
  }
  function m59(_i) {// mmothello.Board.Write)
   m90(_i[0],) /* Buffer<byte>~.Write */;
  }
  function m85() {// mmothello.ClientToServer.OnClick.Read)
   let _0 = _io.ir.getI32();
   let _1 = _io.ir.getI32();
   let _2 = [_0, _1];
   return _2;
  }
  function m90(_i) {// Buffer<byte>~.Write)
   _io.ow.addI32(_i[0]);
   let _2 = 0;
   let _3 = (_2<_i[0]);
   while (_3) {
    let _5 = _2;
    let _4 = m39(_i,_5) /* Buffer<byte>~.get */;
    _io.ow.addI8(_4);
    _2 = _capi(_2+(1));
    let _7 = (_2<_i[0]);
    _3 = _7;
   }
  }
const _re = m0(null, ...inArgs);
if (_re) {
  _re.call = () => m156(_re, _re[0]);
}
return _re;
}


 // === PROG END 


      if (typeof exports !== 'undefined') { 

        if (typeof module !== 'undefined' && module.exports) { exports = module.exports = MAIN; } 

        exports.ServerRaw = MAIN;
      } else {
        window['ServerRaw'] = MAIN;
      }

    function niceMAIN(binding) {
      return MAIN((mthId, src, dst, srcEnd) => {
        switch (mthId) {
case 100: { //  mmothello.ClientToServer? receiveIncomingMessage~()
const res = binding.receiveIncomingMessage();
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);  for (let i = 0; i < res.length; ++i) { dst.addI8(res[i]); }}
break;
}case 101: { //  byte? getLastIncomingMessageOwner~()
const res = binding.getLastIncomingMessageOwner();
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);dst.addI8(res)}
break;
}case 102: { //  void? postMessage~(mmothello.ServerToClient msg)
const res = binding.postMessage(src.buffer.slice(src.pos, srcEnd));
if (res === null) { dst.addI8(0); }
else {
  dst.addI8(1);}
break;
}case 103: { //  void? reportLeader~(byte pid)
const res = binding.reportLeader(src.getI8());
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
        exports.Server = niceMAIN;
      } else {
        window['Server'] = niceMAIN;
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
exports.VERSION = '1450630394';