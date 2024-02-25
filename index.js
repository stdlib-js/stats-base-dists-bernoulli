// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,v,"$1e"),e=p.call(e,b,"e"),e=p.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):f.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var N=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,o,a,c,f,s,p,l,y,g,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))c+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,A(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!A(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,g=e.padRight,d=void 0,(d=y-l.length)<0?l:l=g?l+m(d):m(d)+l)),c+=e.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,n,e,i;for(n=[],i=0,e=k.exec(r);e;)(t=r.slice(i,k.lastIndex-e[0].length)).length&&n.push(t),n.push(S(e)),i=k.lastIndex,e=k.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function I(r){var t,n;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var x=Object.prototype,F=x.toString,T=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,$=x.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,t)||$.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&T&&T.call(r,t,n.get),a&&O&&O.call(r,t,n.set),r};function P(r,t,n){G(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function H(r,t,n){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}function C(r,t){return W(r)||W(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t}function L(r){return function(){return r}}function M(r,t,n){G(r,t,{configurable:!1,enumerable:!1,get:n})}function R(r){return"number"==typeof r}H(C,"factory",(function(r){return W(r)||r<0||r>1?L(NaN):function(t){return W(t)?NaN:t<0?0:t>=1?1:1-r}}));var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return Z&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,B="function"==typeof z?z.toStringTag:"",D=q()?function(r){var t,n,e,i,o;if(null==r)return X.call(r);n=r[B],o=B,t=null!=(i=r)&&Y.call(i,o);try{r[B]=void 0}catch(t){return X.call(r)}return e=X.call(r),t?r[B]=n:delete r[B],e}:function(r){return X.call(r)},J=Number,K=J.prototype.toString,Q=q();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function tr(r){return R(r)||rr(r)}function nr(r){return R(r)&&r>=0&&r<=1}function er(r){return rr(r)&&r.valueOf()>=0&&r.valueOf()<=1}function ir(r){return nr(r)||er(r)}H(tr,"isPrimitive",R),H(tr,"isObject",rr),H(ir,"isPrimitive",nr),H(ir,"isObject",er);var or,ar="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,t,n;if("function"!=typeof ur)return!1;try{t=new ur(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,sr=or,pr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr([1,3.14,-3.14,NaN]),n=t,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,dr=fr,hr="function"==typeof Uint8Array,br="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,t,n;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,256,257]),n=t,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,mr=gr,Nr="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,t,n;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Nr&&n instanceof Uint16Array||"[object Uint16Array]"===D(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:wr,uint8:mr};(Er=new Ur.uint16(1))[0]=4660;var kr=52===new Ur.uint8(Er.buffer)[0],Sr=!0===kr?1:0,jr=new dr(1),Ir=new sr(jr.buffer);function xr(r){return jr[0]=r,Ir[Sr]}var Fr=!0===kr?1:0,Tr=new dr(1),Or=new sr(Tr.buffer),Vr=1023,$r=J.NEGATIVE_INFINITY,Gr=.6931471803691238,Pr=1.9082149292705877e-10,Hr=0x40000000000000,Wr=.3333333333333333,Cr=1048575,Lr=2146435072,Mr=1048576,Rr=1072693248;function Zr(r){var t,n,e,i,o,a,u,c,f,s,p,l;return 0===r?$r:W(r)||r<0?NaN:(o=0,(n=xr(r))<Mr&&(o-=54,n=xr(r*=Hr)),n>=Lr?r+r:(o+=(n>>20)-Vr|0,o+=(c=614244+(n&=Cr)&1048576|0)>>20|0,u=(r=function(r,t){return Tr[0]=r,Or[Fr]=t>>>0,Tr[0]}(r,n|c^Rr))-1,(Cr&2+n)<3?0===u?0===o?0:o*Gr+o*Pr:(a=u*u*(.5-Wr*u),0===o?u-a:o*Gr-(a-o*Pr-u)):(c=n-398458|0,f=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(c|=f)>0?(t=.5*u*u,0===o?u-(t-s*(t+a)):o*Gr-(t-(s*(t+a)+o*Pr)-u)):0===o?u-s*(u-a):o*Gr-(s*(u-a)-o*Pr-u))))}function qr(r){var t;return W(r)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*Zr(t)-r*Zr(r)}function Xr(r){return W(r)||r<0||r>1?NaN:1/(r*(1-r))-6}function Yr(r){return W(r)||r<0||r>1?NaN:r}function zr(r){return W(r)||r<0||r>1?NaN:r<=.5?0:1}function Br(r){return W(r)||r<0||r>1?NaN:r<=.5?0:1}var Dr=Math.sqrt,Jr=Number.POSITIVE_INFINITY;function Kr(r){return W(r)||r<0||r>1?NaN:0===r?Jr:1===r?$r:(1-2*r)/Dr(r*(1-r))}function Qr(r){return W(r)||r<0||r>1?NaN:Dr((1-r)*r)}function rt(r){return W(r)||r<0||r>1?NaN:r*(1-r)}function tt(r){return r>=0&&r<=1}var nt=Math.floor,et=Math.ceil;function it(r){return r<0?et(r):nt(r)}var ot=1023,at=-1023,ut=-1074;function ct(r){return r===Jr||r===$r}var ft,st,pt=2147483648,lt=2147483647;!0===kr?(ft=1,st=0):(ft=0,st=1);var yt,gt,dt={HIGH:ft,LOW:st},ht=new dr(1),bt=new sr(ht.buffer),vt=dt.HIGH,wt=dt.LOW;function mt(r,t,n,e){return ht[0]=r,t[e]=bt[vt],t[e+n]=bt[wt],t}function Nt(r){return mt(r,[0,0],1,0)}H(Nt,"assign",mt),!0===kr?(yt=1,gt=0):(yt=0,gt=1);var At={HIGH:yt,LOW:gt},_t=new dr(1),Et=new sr(_t.buffer),Ut=At.HIGH,kt=At.LOW;function St(r,t){return Et[Ut]=r,Et[kt]=t,_t[0]}var jt=[0,0],It=22250738585072014e-324,xt=4503599627370496;function Ft(r,t,n,e){return W(r)||ct(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<It?(t[e]=r*xt,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}H((function(r){return Ft(r,[0,0],1,0)}),"assign",Ft);var Tt=2146435072,Ot=2220446049250313e-31,Vt=2148532223,$t=[0,0],Gt=[0,0];function Pt(r,t){var n,e,i,o,a,u;return 0===t||0===r||W(r)||ct(r)?r:(Ft(r,$t,1,0),r=$t[0],t+=$t[1],t+=function(r){var t=xr(r);return(t=(t&Tt)>>>20)-Vr|0}(r),t<ut?(i=0,o=r,Nt.assign(i,jt,1,0),a=jt[0],a&=lt,u=xr(o),St(a|=u&=pt,jt[1])):t>ot?r<0?$r:Jr:(t<=at?(t+=52,e=Ot):e=1,Nt.assign(r,Gt,1,0),n=Gt[0],n&=Vt,e*St(n|=t+Vr<<20,Gt[1])))}var Ht=.6931471803691238,Wt=1.9082149292705877e-10,Ct=1.4426950408889634,Lt=709.782712893384,Mt=-745.1332191019411,Rt=1/(1<<28),Zt=-Rt;function qt(r){var t;return W(r)||r===Jr?r:r===$r?0:r>Lt?Jr:r<Mt?0:r>Zt&&r<Rt?1+r:function(r,t,n){var e,i,o,a;return Pt(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-(t=it(r<0?Ct*r-.5:Ct*r+.5))*Ht,t*Wt,t)}function Xt(r,t){return W(r)||!tt(t)?NaN:1-t+t*qt(r)}function Yt(r,t){return W(r)||W(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0}function zt(r,t){return W(t)||W(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1}function Bt(){var r;if(!(this instanceof Bt))return 0===arguments.length?new Bt:new Bt(arguments[0]);if(arguments.length){if(!nr(r=arguments[0]))throw new TypeError(I("invalid argument. Mean parameter must be a probability. Value: `%s`.",r))}else r=.5;return G(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!nr(t))throw new TypeError(I("invalid assignment. Must be a probability. Value: `%s`.",t));r=t}}),this}H(Xt,"factory",(function(r){return tt(r)?function(t){return W(t)?NaN:1-r+r*qt(t)}:L(NaN)})),H(Yt,"factory",(function(r){return W(r)||r<0||r>1?L(NaN):function(t){return W(t)?NaN:0===t?1-r:1===t?r:0}})),H(zt,"factory",(function(r){return W(r)||r<0||r>1?L(NaN):function(t){return W(t)||t<0||t>1?NaN:t<=1-r?0:1}})),M(Bt.prototype,"entropy",(function(){return qr(this.p)})),M(Bt.prototype,"kurtosis",(function(){return Xr(this.p)})),M(Bt.prototype,"mean",(function(){return Yr(this.p)})),M(Bt.prototype,"median",(function(){return Br(this.p)})),M(Bt.prototype,"mode",(function(){return zr(this.p)})),M(Bt.prototype,"skewness",(function(){return Kr(this.p)})),M(Bt.prototype,"stdev",(function(){return Qr(this.p)})),M(Bt.prototype,"variance",(function(){return rt(this.p)})),H(Bt.prototype,"cdf",(function(r){return C(r,this.p)})),H(Bt.prototype,"mgf",(function(r){return Xt(r,this.p)})),H(Bt.prototype,"pmf",(function(r){return Yt(r,this.p)})),H(Bt.prototype,"quantile",(function(r){return zt(r,this.p)}));var Dt={};return P(Dt,"cdf",C),P(Dt,"Bernoulli",Bt),P(Dt,"entropy",qr),P(Dt,"kurtosis",Xr),P(Dt,"mean",Yr),P(Dt,"median",Br),P(Dt,"mgf",Xt),P(Dt,"mode",zr),P(Dt,"pmf",Yt),P(Dt,"quantile",zt),P(Dt,"skewness",Kr),P(Dt,"stdev",Qr),P(Dt,"variance",rt),Dt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).bernoulli=t();
//# sourceMappingURL=index.js.map
