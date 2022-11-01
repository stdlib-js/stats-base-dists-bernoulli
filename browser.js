// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,p,s,l;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((p="value"in e)&&(u.call(r,t)||c.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),s="get"in e,l="set"in e,p&&(s||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(r,t,e.get),l&&a&&a.call(r,t,e.set),r};function p(r,t,e){f(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}function s(r,t,e){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function l(r){return r!=r}function y(r,t){return l(r)||l(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t}function d(r){return function(){return r}}function g(r,t,e){f(r,t,{configurable:!1,enumerable:!1,get:e})}function h(r){return"number"==typeof r}s(y,"factory",(function(r){return l(r)||r<0||r>1?d(NaN):function(t){return l(t)?NaN:t<0?0:t>=1?1:1-r}}));var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString,m=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",A=v()?function(r){var t,e,n,i,o;if(null==r)return w.call(r);e=r[N],o=N,t=null!=(i=r)&&m.call(i,o);try{r[N]=void 0}catch(t){return w.call(r)}return n=w.call(r),t?r[N]=e:delete r[N],n}:function(r){return w.call(r)},_=Number,E=_.prototype.toString,k=v();function U(r){return"object"==typeof r&&(r instanceof _||(k?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Number]"===A(r)))}function j(r){return h(r)||U(r)}function S(r){return h(r)&&r>=0&&r<=1}function x(r){return U(r)&&r.valueOf()>=0&&r.valueOf()<=1}function I(r){return S(r)||x(r)}s(j,"isPrimitive",h),s(j,"isObject",U),s(I,"isPrimitive",S),s(I,"isObject",x);var F,O="function"==typeof Uint32Array,T="function"==typeof Uint32Array?Uint32Array:null,V="function"==typeof Uint32Array?Uint32Array:void 0;F=function(){var r,t,e;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(O&&e instanceof Uint32Array||"[object Uint32Array]"===A(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var P,$=F,G="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,M="function"==typeof Float64Array?Float64Array:void 0;P=function(){var r,t,e;if("function"!=typeof H)return!1;try{t=new H([1,3.14,-3.14,NaN]),e=t,r=(G&&e instanceof Float64Array||"[object Float64Array]"===A(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?M:function(){throw new Error("not implemented")};var W,C=P,L="function"==typeof Uint8Array,R="function"==typeof Uint8Array?Uint8Array:null,Z="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,t,e;if("function"!=typeof R)return!1;try{t=new R(t=[1,3.14,-3.14,256,257]),e=t,r=(L&&e instanceof Uint8Array||"[object Uint8Array]"===A(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var q,B=W,X="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,t,e;if("function"!=typeof Y)return!1;try{t=new Y(t=[1,3.14,-3.14,65536,65537]),e=t,r=(X&&e instanceof Uint16Array||"[object Uint16Array]"===A(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?z:function(){throw new Error("not implemented")};var D,J={uint16:q,uint8:B};(D=new J.uint16(1))[0]=4660;var K=52===new J.uint8(D.buffer)[0],Q=!0===K?1:0,rr=new C(1),tr=new $(rr.buffer);function er(r){return rr[0]=r,tr[Q]}var nr=!0===K?1:0,ir=new C(1),or=new $(ir.buffer),ar=1023,ur=_.NEGATIVE_INFINITY,cr=.6931471803691238,fr=1.9082149292705877e-10,pr=1048575;function sr(r){var t,e,n,i,o,a,u,c,f,p,s,y;return 0===r?ur:l(r)||r<0?NaN:(o=0,(e=er(r))<1048576&&(o-=54,e=er(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-ar|0,o+=(c=614244+(e&=pr)&1048576|0)>>20|0,u=(r=function(r,t){return ir[0]=r,or[nr]=t>>>0,ir[0]}(r,e|1072693248^c))-1,(pr&2+e)<3?0===u?0===o?0:o*cr+o*fr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*cr-(a-o*fr-u)):(c=e-398458|0,f=440401-e|0,i=(s=(y=(p=u/(2+u))*p)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+i,(c|=f)>0?(t=.5*u*u,0===o?u-(t-p*(t+a)):o*cr-(t-(p*(t+a)+o*fr)-u)):0===o?u-p*(u-a):o*cr-(p*(u-a)-o*fr-u))))}function lr(r){var t;return l(r)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*sr(t)-r*sr(r)}function yr(r){return l(r)||r<0||r>1?NaN:1/(r*(1-r))-6}function dr(r){return l(r)||r<0||r>1?NaN:r}function gr(r){return l(r)||r<0||r>1?NaN:r<=.5?0:1}function hr(r){return l(r)||r<0||r>1?NaN:r<=.5?0:1}var br=Math.sqrt,vr=Number.POSITIVE_INFINITY;function wr(r){return l(r)||r<0||r>1?NaN:0===r?vr:1===r?ur:(1-2*r)/br(r*(1-r))}function mr(r){return l(r)||r<0||r>1?NaN:br((1-r)*r)}function Nr(r){return l(r)||r<0||r>1?NaN:r*(1-r)}function Ar(r){return r>=0&&r<=1}var _r,Er,kr=Math.floor,Ur=Math.ceil;function jr(r){return r<0?Ur(r):kr(r)}function Sr(r){return r===vr||r===ur}!0===K?(_r=1,Er=0):(_r=0,Er=1);var xr,Ir,Fr={HIGH:_r,LOW:Er},Or=new C(1),Tr=new $(Or.buffer),Vr=Fr.HIGH,Pr=Fr.LOW;function $r(r,t){return Or[0]=t,r[0]=Tr[Vr],r[1]=Tr[Pr],r}function Gr(r,t){return 1===arguments.length?$r([0,0],r):$r(r,t)}!0===K?(xr=1,Ir=0):(xr=0,Ir=1);var Hr={HIGH:xr,LOW:Ir},Mr=new C(1),Wr=new $(Mr.buffer),Cr=Hr.HIGH,Lr=Hr.LOW;function Rr(r,t){return Wr[Cr]=r,Wr[Lr]=t,Mr[0]}var Zr=[0,0];function qr(r,t,e,n){return l(r)||Sr(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}s((function(r){return qr(r,[0,0],1,0)}),"assign",qr);var Br=[0,0],Xr=[0,0];function Yr(r,t){var e,n,i,o,a;return 0===t||0===r||l(r)||Sr(r)?r:(qr(r,Br,1,0),t+=Br[1],t+=function(r){var t=er(r);return(t=(2146435072&t)>>>20)-ar|0}(r=Br[0]),t<-1074?(i=r,Gr(Zr,0),o=Zr[0],o&=2147483647,a=er(i),Rr(o|=a&=2147483648,Zr[1])):t>1023?r<0?ur:vr:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,Gr(Xr,r),e=Xr[0],e&=2148532223,n*Rr(e|=t+ar<<20,Xr[1])))}var zr=1.4426950408889634,Dr=1/(1<<28);function Jr(r){var t;return l(r)||r===vr?r:r===ur?0:r>709.782712893384?vr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Dr?1+r:function(r,t,e){var n,i,o,a;return Yr(1-(t-(n=r-t)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-.6931471803691238*(t=jr(r<0?zr*r-.5:zr*r+.5)),1.9082149292705877e-10*t,t)}function Kr(r,t){return l(r)||!Ar(t)?NaN:1-t+t*Jr(r)}function Qr(r,t){return l(r)||l(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0}function rt(r,t){return l(t)||l(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1}function tt(r){return"number"==typeof r}function et(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function nt(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+et(i):et(i)+r,n&&(r="-"+r)),r}s(Kr,"factory",(function(r){return Ar(r)?function(t){return l(t)?NaN:1-r+r*Jr(t)}:d(NaN)})),s(Qr,"factory",(function(r){return l(r)||r<0||r>1?d(NaN):function(t){return l(t)?NaN:0===t?1-r:1===t?r:0}})),s(rt,"factory",(function(r){return l(r)||r<0||r>1?d(NaN):function(t){return l(t)||t<0||t>1?NaN:t<=1-r?0:1}}));var it=String.prototype.toLowerCase,ot=String.prototype.toUpperCase;function at(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!tt(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=nt(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=nt(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===ot.call(r.specifier)?ot.call(e):it.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function ut(r){return"string"==typeof r}var ct=Math.abs,ft=String.prototype.toLowerCase,pt=String.prototype.toUpperCase,st=String.prototype.replace,lt=/e\+(\d)$/,yt=/e-(\d)$/,dt=/^(\d+)$/,gt=/^(\d+)e/,ht=/\.0$/,bt=/\.0*e/,vt=/(\..*[^0])0*e/;function wt(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!tt(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":ct(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=st.call(e,vt,"$1e"),e=st.call(e,bt,"e"),e=st.call(e,ht,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=st.call(e,lt,"e+0$1"),e=st.call(e,yt,"e-0$1"),r.alternate&&(e=st.call(e,dt,"$1."),e=st.call(e,gt,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===pt.call(r.specifier)?pt.call(e):ft.call(e)}function mt(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Nt(r,t,e){var n=t-r.length;return n<0?r:r=e?r+mt(n):mt(n)+r}var At=String.fromCharCode,_t=isNaN,Et=Array.isArray;function kt(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Ut(r){var t,e,n,i,o,a,u,c,f;if(!Et(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(ut(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=kt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(i=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,_t(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,_t(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=at(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!_t(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_t(o)?String(n.arg):At(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=wt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=nt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Nt(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var jt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function St(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function xt(r){var t,e,n,i;for(e=[],i=0,n=jt.exec(r);n;)(t=r.slice(i,jt.lastIndex-n[0].length)).length&&e.push(t),e.push(St(n)),i=jt.lastIndex,n=jt.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function It(r){return"string"==typeof r}function Ft(r){var t,e,n;if(!It(r))throw new TypeError(Ft("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=xt(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return Ut.apply(null,e)}function Ot(){var r;if(!(this instanceof Ot))return 0===arguments.length?new Ot:new Ot(arguments[0]);if(arguments.length){if(!S(r=arguments[0]))throw new TypeError(Ft("invalid argument. Mean parameter must be a probability. Value: `%s`.",r))}else r=.5;return f(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!S(t))throw new TypeError(Ft("invalid assignment. Must be a probability. Value: `%s`.",t));r=t}}),this}g(Ot.prototype,"entropy",(function(){return lr(this.p)})),g(Ot.prototype,"kurtosis",(function(){return yr(this.p)})),g(Ot.prototype,"mean",(function(){return dr(this.p)})),g(Ot.prototype,"median",(function(){return hr(this.p)})),g(Ot.prototype,"mode",(function(){return gr(this.p)})),g(Ot.prototype,"skewness",(function(){return wr(this.p)})),g(Ot.prototype,"stdev",(function(){return mr(this.p)})),g(Ot.prototype,"variance",(function(){return Nr(this.p)})),s(Ot.prototype,"cdf",(function(r){return y(r,this.p)})),s(Ot.prototype,"mgf",(function(r){return Kr(r,this.p)})),s(Ot.prototype,"pmf",(function(r){return Qr(r,this.p)})),s(Ot.prototype,"quantile",(function(r){return rt(r,this.p)}));var Tt={};p(Tt,"cdf",y),p(Tt,"Bernoulli",Ot),p(Tt,"entropy",lr),p(Tt,"kurtosis",yr),p(Tt,"mean",dr),p(Tt,"median",hr),p(Tt,"mgf",Kr),p(Tt,"mode",gr),p(Tt,"pmf",Qr),p(Tt,"quantile",rt),p(Tt,"skewness",wr),p(Tt,"stdev",mr),p(Tt,"variance",Nr),r.Bernoulli=Ot,r.cdf=y,r.default=Tt,r.entropy=lr,r.kurtosis=yr,r.mean=dr,r.median=hr,r.mgf=Kr,r.mode=gr,r.pmf=Qr,r.quantile=rt,r.skewness=wr,r.stdev=mr,r.variance=Nr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).bernoulli={});
//# sourceMappingURL=browser.js.map