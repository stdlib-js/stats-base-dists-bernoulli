// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,w,"$1e"),e=l.call(e,v,"e"),e=l.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,y,"e+0$1"),e=l.call(e,g,"e-0$1"),r.alternate&&(e=l.call(e,d,"$1."),e=l.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):s.call(e)}function N(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+N(e):N(e)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function k(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,o,a,f,s,p,l;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,p=0;p<r.length;p++)if(c(e=r[p]))f+=e;else{if(t=void 0!==e.precision,!(e=k(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(o=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,E(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",s+=1}return f}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,i;for(n=[],i=0,e=j.exec(r);e;)(t=r.slice(i,j.lastIndex-e[0].length)).length&&n.push(t),n.push(I(e)),i=j.lastIndex,e=j.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function F(r){return"string"==typeof r}function T(r){var t,n,e;if(!F(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,P=O.__lookupGetter__,H=O.__lookupSetter__,W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(P.call(r,t)||H.call(r,t)?(e=r.__proto__,r.__proto__=O,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,t,n.get),a&&G&&G.call(r,t,n.set),r};function C(r,t,n){W(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function L(r,t,n){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function M(r){return r!=r}function R(r,t){return M(r)||M(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t}function Z(r){return function(){return r}}function q(r,t,n){W(r,t,{configurable:!1,enumerable:!1,get:n})}function X(r){return"number"==typeof r}L(R,"factory",(function(r){return M(r)||r<0||r>1?Z(NaN):function(t){return M(t)?NaN:t<0?0:t>=1?1:1-r}}));var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Y&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString,D=Object.prototype.hasOwnProperty,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=z()?function(r){var t,n,e,i,o;if(null==r)return B.call(r);n=r[K],o=K,t=null!=(i=r)&&D.call(i,o);try{r[K]=void 0}catch(t){return B.call(r)}return e=B.call(r),t?r[K]=n:delete r[K],e}:function(r){return B.call(r)},rr=Number,tr=rr.prototype.toString,nr=z();function er(r){return"object"==typeof r&&(r instanceof rr||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function ir(r){return X(r)||er(r)}function or(r){return X(r)&&r>=0&&r<=1}function ar(r){return er(r)&&r.valueOf()>=0&&r.valueOf()<=1}function ur(r){return or(r)||ar(r)}L(ir,"isPrimitive",X),L(ir,"isObject",er),L(ur,"isPrimitive",or),L(ur,"isObject",ar);var cr,fr="function"==typeof Uint32Array,sr="function"==typeof Uint32Array?Uint32Array:null,pr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(fr&&n instanceof Uint32Array||"[object Uint32Array]"===Q(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var lr,yr=cr,gr="function"==typeof Float64Array,dr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr([1,3.14,-3.14,NaN]),n=t,r=(gr&&n instanceof Float64Array||"[object Float64Array]"===Q(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var br,vr=lr,wr="function"==typeof Uint8Array,mr="function"==typeof Uint8Array?Uint8Array:null,Nr="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,t,n;if("function"!=typeof mr)return!1;try{t=new mr(t=[1,3.14,-3.14,256,257]),n=t,r=(wr&&n instanceof Uint8Array||"[object Uint8Array]"===Q(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,_r=br,Er="function"==typeof Uint16Array,Ur="function"==typeof Uint16Array?Uint16Array:null,kr="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,t,n;if("function"!=typeof Ur)return!1;try{t=new Ur(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Er&&n instanceof Uint16Array||"[object Uint16Array]"===Q(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Sr,jr={uint16:Ar,uint8:_r};(Sr=new jr.uint16(1))[0]=4660;var Ir=52===new jr.uint8(Sr.buffer)[0],xr=!0===Ir?1:0,Fr=new vr(1),Tr=new yr(Fr.buffer);function Or(r){return Fr[0]=r,Tr[xr]}var Vr=!0===Ir?1:0,$r=new vr(1),Gr=new yr($r.buffer),Pr=1023,Hr=rr.NEGATIVE_INFINITY,Wr=.6931471803691238,Cr=1.9082149292705877e-10,Lr=1048575;function Mr(r){var t,n,e,i,o,a,u,c,f,s,p,l;return 0===r?Hr:M(r)||r<0?NaN:(o=0,(n=Or(r))<1048576&&(o-=54,n=Or(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-Pr|0,o+=(c=614244+(n&=Lr)&1048576|0)>>20|0,u=(r=function(r,t){return $r[0]=r,Gr[Vr]=t>>>0,$r[0]}(r,n|1072693248^c))-1,(Lr&2+n)<3?0===u?0===o?0:o*Wr+o*Cr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Wr-(a-o*Cr-u)):(c=n-398458|0,f=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(c|=f)>0?(t=.5*u*u,0===o?u-(t-s*(t+a)):o*Wr-(t-(s*(t+a)+o*Cr)-u)):0===o?u-s*(u-a):o*Wr-(s*(u-a)-o*Cr-u))))}function Rr(r){var t;return M(r)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*Mr(t)-r*Mr(r)}function Zr(r){return M(r)||r<0||r>1?NaN:1/(r*(1-r))-6}function qr(r){return M(r)||r<0||r>1?NaN:r}function Xr(r){return M(r)||r<0||r>1?NaN:r<=.5?0:1}function Yr(r){return M(r)||r<0||r>1?NaN:r<=.5?0:1}var zr=Math.sqrt,Br=Number.POSITIVE_INFINITY;function Dr(r){return M(r)||r<0||r>1?NaN:0===r?Br:1===r?Hr:(1-2*r)/zr(r*(1-r))}function Jr(r){return M(r)||r<0||r>1?NaN:zr((1-r)*r)}function Kr(r){return M(r)||r<0||r>1?NaN:r*(1-r)}function Qr(r){return r>=0&&r<=1}var rt,tt,nt=Math.floor,et=Math.ceil;function it(r){return r<0?et(r):nt(r)}function ot(r){return r===Br||r===Hr}!0===Ir?(rt=1,tt=0):(rt=0,tt=1);var at,ut,ct={HIGH:rt,LOW:tt},ft=new vr(1),st=new yr(ft.buffer),pt=ct.HIGH,lt=ct.LOW;function yt(r,t,n,e){return ft[0]=r,t[e]=st[pt],t[e+n]=st[lt],t}function gt(r){return yt(r,[0,0],1,0)}L(gt,"assign",yt),!0===Ir?(at=1,ut=0):(at=0,ut=1);var dt={HIGH:at,LOW:ut},ht=new vr(1),bt=new yr(ht.buffer),vt=dt.HIGH,wt=dt.LOW;function mt(r,t){return bt[vt]=r,bt[wt]=t,ht[0]}var Nt=[0,0];function At(r,t,n,e){return M(r)||ot(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}L((function(r){return At(r,[0,0],1,0)}),"assign",At);var _t=[0,0],Et=[0,0];function Ut(r,t){var n,e,i,o,a,u;return 0===t||0===r||M(r)||ot(r)?r:(At(r,_t,1,0),t+=_t[1],t+=function(r){var t=Or(r);return(t=(2146435072&t)>>>20)-Pr|0}(r=_t[0]),t<-1074?(i=0,o=r,gt.assign(i,Nt,1,0),a=Nt[0],a&=2147483647,u=Or(o),mt(a|=u&=2147483648,Nt[1])):t>1023?r<0?Hr:Br:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,gt.assign(r,Et,1,0),n=Et[0],n&=2148532223,e*mt(n|=t+Pr<<20,Et[1])))}var kt=1.4426950408889634,St=1/(1<<28);function jt(r){var t;return M(r)||r===Br?r:r===Hr?0:r>709.782712893384?Br:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<St?1+r:function(r,t,n){var e,i,o,a;return Ut(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(t=it(r<0?kt*r-.5:kt*r+.5)),1.9082149292705877e-10*t,t)}function It(r,t){return M(r)||!Qr(t)?NaN:1-t+t*jt(r)}function xt(r,t){return M(r)||M(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0}function Ft(r,t){return M(t)||M(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1}function Tt(){var r;if(!(this instanceof Tt))return 0===arguments.length?new Tt:new Tt(arguments[0]);if(arguments.length){if(!or(r=arguments[0]))throw new TypeError(T("invalid argument. Mean parameter must be a probability. Value: `%s`.",r))}else r=.5;return W(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!or(t))throw new TypeError(T("invalid assignment. Must be a probability. Value: `%s`.",t));r=t}}),this}L(It,"factory",(function(r){return Qr(r)?function(t){return M(t)?NaN:1-r+r*jt(t)}:Z(NaN)})),L(xt,"factory",(function(r){return M(r)||r<0||r>1?Z(NaN):function(t){return M(t)?NaN:0===t?1-r:1===t?r:0}})),L(Ft,"factory",(function(r){return M(r)||r<0||r>1?Z(NaN):function(t){return M(t)||t<0||t>1?NaN:t<=1-r?0:1}})),q(Tt.prototype,"entropy",(function(){return Rr(this.p)})),q(Tt.prototype,"kurtosis",(function(){return Zr(this.p)})),q(Tt.prototype,"mean",(function(){return qr(this.p)})),q(Tt.prototype,"median",(function(){return Yr(this.p)})),q(Tt.prototype,"mode",(function(){return Xr(this.p)})),q(Tt.prototype,"skewness",(function(){return Dr(this.p)})),q(Tt.prototype,"stdev",(function(){return Jr(this.p)})),q(Tt.prototype,"variance",(function(){return Kr(this.p)})),L(Tt.prototype,"cdf",(function(r){return R(r,this.p)})),L(Tt.prototype,"mgf",(function(r){return It(r,this.p)})),L(Tt.prototype,"pmf",(function(r){return xt(r,this.p)})),L(Tt.prototype,"quantile",(function(r){return Ft(r,this.p)}));var Ot={};return C(Ot,"cdf",R),C(Ot,"Bernoulli",Tt),C(Ot,"entropy",Rr),C(Ot,"kurtosis",Zr),C(Ot,"mean",qr),C(Ot,"median",Yr),C(Ot,"mgf",It),C(Ot,"mode",Xr),C(Ot,"pmf",xt),C(Ot,"quantile",Ft),C(Ot,"skewness",Dr),C(Ot,"stdev",Jr),C(Ot,"variance",Kr),Ot},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).bernoulli=t();
//# sourceMappingURL=index.js.map