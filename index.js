// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,e,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,c=parseInt(e,10),!isFinite(c)){if(!n(e))throw new Error("invalid integer. Value: "+e);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(e=(-c).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=c.toString(t),c||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=s.call(e,w,"$1e"),e=s.call(e,b,"e"),e=s.call(e,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,y,"e+0$1"),e=s.call(e,g,"e-0$1"),r.alternate&&(e=s.call(e,d,"$1."),e=s.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function N(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+N(e):N(e)+r}var _=String.fromCharCode,U=isNaN,E=Array.isArray;function j(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,o,a,f,l,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(u(e=r[p]))f+=e;else{if(t=void 0!==e.precision,!(e=j(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,U(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,U(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=c(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!U(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=U(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function k(r){var t,n,e,i;for(n=[],i=0,e=I.exec(r);e;)(t=r.slice(i,I.lastIndex-e[0].length)).length&&n.push(t),n.push(F(e)),i=I.lastIndex,e=I.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function T(r){return"string"==typeof r}function x(r){var t,n,e;if(!T(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=k(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var O=Object.prototype,V=O.toString,P=O.__defineGetter__,$=O.__defineSetter__,G=O.__lookupGetter__,C=O.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,t)||C.call(r,t)?(e=r.__proto__,r.__proto__=O,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,t,n.get),a&&$&&$.call(r,t,n.set),r};function W(r,t,n){R(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function L(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Z(r){return r!=r}function M(r,t){return Z(r)||Z(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t}function H(r){return function(){return r}}L(M,"factory",(function(r){return Z(r)||r<0||r>1?H(NaN):function(t){return Z(t)?NaN:t<0?0:t>=1?1:1-r}}));var Y="function"==typeof Object.defineProperty?Object.defineProperty:null,q=Object.defineProperty,X=Object.prototype,z=X.toString,B=X.__defineGetter__,D=X.__defineSetter__,J=X.__lookupGetter__,K=X.__lookupSetter__,Q=function(){try{return Y({},"x",{}),!0}catch(r){return!1}}()?q:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===z.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((i="value"in n)&&(J.call(r,t)||K.call(r,t)?(e=r.__proto__,r.__proto__=X,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(r,t,n.get),a&&D&&D.call(r,t,n.set),r};function rr(r,t,n){Q(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function tr(r,t,n){Q(r,t,{configurable:!1,enumerable:!1,get:n})}function nr(r){return"number"==typeof r}function er(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var ir=er();function or(){return ir&&"symbol"==typeof Symbol.toStringTag}var ar=Object.prototype.toString,cr=Object.prototype.hasOwnProperty,ur="function"==typeof Symbol?Symbol.toStringTag:"",fr=or()?function(r){var t,n,e,i,o;if(null==r)return ar.call(r);n=r[ur],o=ur,t=null!=(i=r)&&cr.call(i,o);try{r[ur]=void 0}catch(t){return ar.call(r)}return e=ar.call(r),t?r[ur]=n:delete r[ur],e}:function(r){return ar.call(r)},lr=Number,pr=lr.prototype.toString,sr=or();function yr(r){return"object"==typeof r&&(r instanceof lr||(sr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===fr(r)))}function gr(r){return nr(r)||yr(r)}function dr(r){return nr(r)&&r>=0&&r<=1}function hr(r){return yr(r)&&r.valueOf()>=0&&r.valueOf()<=1}function vr(r){return dr(r)||hr(r)}function br(r){return r!=r}rr(gr,"isPrimitive",nr),rr(gr,"isObject",yr),rr(vr,"isPrimitive",dr),rr(vr,"isObject",hr);var wr,mr="function"==typeof Uint32Array,Nr="function"==typeof Uint32Array?Uint32Array:null,Ar="function"==typeof Uint32Array?Uint32Array:void 0;wr=function(){var r,t,n;if("function"!=typeof Nr)return!1;try{t=new Nr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(mr&&n instanceof Uint32Array||"[object Uint32Array]"===fr(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Ur=wr,Er="function"==typeof Float64Array,jr="function"==typeof Float64Array?Float64Array:null,Sr="function"==typeof Float64Array?Float64Array:void 0;_r=function(){var r,t,n;if("function"!=typeof jr)return!1;try{t=new jr([1,3.14,-3.14,NaN]),n=t,r=(Er&&n instanceof Float64Array||"[object Float64Array]"===fr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var Ir,Fr=_r,kr="function"==typeof Uint8Array,Tr="function"==typeof Uint8Array?Uint8Array:null,xr="function"==typeof Uint8Array?Uint8Array:void 0;Ir=function(){var r,t,n;if("function"!=typeof Tr)return!1;try{t=new Tr(t=[1,3.14,-3.14,256,257]),n=t,r=(kr&&n instanceof Uint8Array||"[object Uint8Array]"===fr(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?xr:function(){throw new Error("not implemented")};var Or,Vr=Ir,Pr="function"==typeof Uint16Array,$r="function"==typeof Uint16Array?Uint16Array:null,Gr="function"==typeof Uint16Array?Uint16Array:void 0;Or=function(){var r,t,n;if("function"!=typeof $r)return!1;try{t=new $r(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Pr&&n instanceof Uint16Array||"[object Uint16Array]"===fr(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Cr,Rr={uint16:Or,uint8:Vr};(Cr=new Rr.uint16(1))[0]=4660;var Wr=52===new Rr.uint8(Cr.buffer)[0],Lr=!0===Wr?1:0,Zr=new Fr(1),Mr=new Ur(Zr.buffer);function Hr(r){return Zr[0]=r,Mr[Lr]}var Yr=!0===Wr?1:0,qr=new Fr(1),Xr=new Ur(qr.buffer),zr=lr.NEGATIVE_INFINITY,Br=.6931471803691238,Dr=1.9082149292705877e-10,Jr=1048575;function Kr(r){var t,n,e,i,o,a,c,u,f,l,p,s;return 0===r?zr:br(r)||r<0?NaN:(o=0,(n=Hr(r))<1048576&&(o-=54,n=Hr(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(u=614244+(n&=Jr)&1048576|0)>>20|0,c=(r=function(r,t){return qr[0]=r,Xr[Yr]=t>>>0,qr[0]}(r,n|1072693248^u))-1,(Jr&2+n)<3?0===c?0===o?0:o*Br+o*Dr:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*Br-(a-o*Dr-c)):(u=n-398458|0,f=440401-n|0,i=(p=(s=(l=c/(2+c))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(u|=f)>0?(t=.5*c*c,0===o?c-(t-l*(t+a)):o*Br-(t-(l*(t+a)+o*Dr)-c)):0===o?c-l*(c-a):o*Br-(l*(c-a)-o*Dr-c))))}var Qr=Math.sqrt,rt=Number.POSITIVE_INFINITY;function tt(r,t){return br(r)||br(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t}function nt(r){return function(){return r}}rr(tt,"factory",(function(r){return br(r)||r<0||r>1?nt(NaN):function(t){return br(t)?NaN:t<0?0:t>=1?1:1-r}}));var et="function"==typeof Object.defineProperty?Object.defineProperty:null,it=Object.defineProperty,ot=Object.prototype,at=ot.toString,ct=ot.__defineGetter__,ut=ot.__defineSetter__,ft=ot.__lookupGetter__,lt=ot.__lookupSetter__,pt=function(){try{return et({},"x",{}),!0}catch(r){return!1}}()?it:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===at.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===at.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((i="value"in n)&&(ft.call(r,t)||lt.call(r,t)?(e=r.__proto__,r.__proto__=ot,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&ct&&ct.call(r,t,n.get),a&&ut&&ut.call(r,t,n.set),r};function st(r,t,n){pt(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function yt(r){return r>=0&&r<=1}function gt(r){return r!=r}var dt=Math.floor,ht=Math.ceil;function vt(r){return r<0?ht(r):dt(r)}var bt=Number.NEGATIVE_INFINITY,wt=Number.POSITIVE_INFINITY;function mt(r){return r===wt||r===bt}var Nt,At=er(),_t=Object.prototype.toString,Ut=Object.prototype.hasOwnProperty,Et="function"==typeof Symbol?Symbol.toStringTag:"",jt=At&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,i,o;if(null==r)return _t.call(r);n=r[Et],o=Et,t=null!=(i=r)&&Ut.call(i,o);try{r[Et]=void 0}catch(t){return _t.call(r)}return e=_t.call(r),t?r[Et]=n:delete r[Et],e}:function(r){return _t.call(r)},St="function"==typeof Uint32Array,It="function"==typeof Uint32Array?Uint32Array:null,Ft="function"==typeof Uint32Array?Uint32Array:void 0;Nt=function(){var r,t,n;if("function"!=typeof It)return!1;try{t=new It(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(St&&n instanceof Uint32Array||"[object Uint32Array]"===jt(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ft:function(){throw new Error("not implemented")};var kt,Tt=Nt,xt="function"==typeof Float64Array,Ot="function"==typeof Float64Array?Float64Array:null,Vt="function"==typeof Float64Array?Float64Array:void 0;kt=function(){var r,t,n;if("function"!=typeof Ot)return!1;try{t=new Ot([1,3.14,-3.14,NaN]),n=t,r=(xt&&n instanceof Float64Array||"[object Float64Array]"===jt(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Vt:function(){throw new Error("not implemented")};var Pt,$t=kt,Gt="function"==typeof Uint8Array,Ct="function"==typeof Uint8Array?Uint8Array:null,Rt="function"==typeof Uint8Array?Uint8Array:void 0;Pt=function(){var r,t,n;if("function"!=typeof Ct)return!1;try{t=new Ct(t=[1,3.14,-3.14,256,257]),n=t,r=(Gt&&n instanceof Uint8Array||"[object Uint8Array]"===jt(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Rt:function(){throw new Error("not implemented")};var Wt,Lt=Pt,Zt="function"==typeof Uint16Array,Mt="function"==typeof Uint16Array?Uint16Array:null,Ht="function"==typeof Uint16Array?Uint16Array:void 0;Wt=function(){var r,t,n;if("function"!=typeof Mt)return!1;try{t=new Mt(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Zt&&n instanceof Uint16Array||"[object Uint16Array]"===jt(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ht:function(){throw new Error("not implemented")};var Yt,qt={uint16:Wt,uint8:Lt};Yt=function(){var r;return(r=new qt.uint16(1))[0]=4660,52===new qt.uint8(r.buffer)[0]}();var Xt,zt,Bt=Yt;!0===Bt?(Xt=1,zt=0):(Xt=0,zt=1);var Dt={HIGH:Xt,LOW:zt},Jt=new $t(1),Kt=new Tt(Jt.buffer),Qt=Dt.HIGH,rn=Dt.LOW;function tn(r,t,n,e){return Jt[0]=r,t[e]=Kt[Qt],t[e+n]=Kt[rn],t}function nn(r){return tn(r,[0,0],1,0)}st(nn,"assign",tn);var en,on,an=!0===Bt?1:0,cn=new $t(1),un=new Tt(cn.buffer);function fn(r){return cn[0]=r,un[an]}!0===Bt?(en=1,on=0):(en=0,on=1);var ln={HIGH:en,LOW:on},pn=new $t(1),sn=new Tt(pn.buffer),yn=ln.HIGH,gn=ln.LOW;function dn(r,t){return sn[yn]=r,sn[gn]=t,pn[0]}var hn=[0,0];function vn(r,t,n,e){return gt(r)||mt(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}st((function(r){return vn(r,[0,0],1,0)}),"assign",vn);var bn=[0,0],wn=[0,0];function mn(r,t){var n,e,i,o,a,c;return 0===t||0===r||gt(r)||mt(r)?r:(vn(r,bn,1,0),t+=bn[1],t+=function(r){var t=fn(r);return(t=(2146435072&t)>>>20)-1023|0}(r=bn[0]),t<-1074?(i=0,o=r,nn.assign(i,hn,1,0),a=hn[0],a&=2147483647,c=fn(o),dn(a|=c&=2147483648,hn[1])):t>1023?r<0?bt:wt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,nn.assign(r,wn,1,0),n=wn[0],n&=2148532223,e*dn(n|=t+1023<<20,wn[1])))}var Nn=1.4426950408889634,An=1/(1<<28);function _n(r){var t;return gt(r)||r===wt?r:r===bt?0:r>709.782712893384?wt:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<An?1+r:function(r,t,n){var e,i,o,a;return mn(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(t=vt(r<0?Nn*r-.5:Nn*r+.5)),1.9082149292705877e-10*t,t)}function Un(r,t){return gt(r)||!yt(t)?NaN:1-t+t*_n(r)}function En(r,t){return br(r)||br(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0}function jn(r,t){return br(t)||br(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1}function Sn(r){return"number"==typeof r}function In(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function Fn(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+In(i):In(i)+r,e&&(r="-"+r)),r}st(Un,"factory",(function(r){return yt(r)?function(t){return gt(t)?NaN:1-r+r*_n(t)}:(t=NaN,function(){return t});var t})),rr(En,"factory",(function(r){return br(r)||r<0||r>1?nt(NaN):function(t){return br(t)?NaN:0===t?1-r:1===t?r:0}})),rr(jn,"factory",(function(r){return br(r)||r<0||r>1?nt(NaN):function(t){return br(t)||t<0||t>1?NaN:t<=1-r?0:1}}));var kn=String.prototype.toLowerCase,Tn=String.prototype.toUpperCase;function xn(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!Sn(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=Fn(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=Fn(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===Tn.call(r.specifier)?Tn.call(n):kn.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function On(r){return"string"==typeof r}var Vn=Math.abs,Pn=String.prototype.toLowerCase,$n=String.prototype.toUpperCase,Gn=String.prototype.replace,Cn=/e\+(\d)$/,Rn=/e-(\d)$/,Wn=/^(\d+)$/,Ln=/^(\d+)e/,Zn=/\.0$/,Mn=/\.0*e/,Hn=/(\..*[^0])0*e/;function Yn(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!Sn(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":Vn(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=Gn.call(n,Hn,"$1e"),n=Gn.call(n,Mn,"e"),n=Gn.call(n,Zn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Gn.call(n,Cn,"e+0$1"),n=Gn.call(n,Rn,"e-0$1"),r.alternate&&(n=Gn.call(n,Wn,"$1."),n=Gn.call(n,Ln,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===$n.call(r.specifier)?$n.call(n):Pn.call(n)}function qn(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function Xn(r,t,n){var e=t-r.length;return e<0?r:r=n?r+qn(e):qn(e)+r}var zn=String.fromCharCode,Bn=isNaN,Dn=Array.isArray;function Jn(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Kn(r){var t,n,e,i,o,a,c,u,f;if(!Dn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(On(e=r[u]))a+=e;else{if(t=void 0!==e.precision,!(e=Jn(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,Bn(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,Bn(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=xn(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!Bn(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Bn(o)?String(e.arg):zn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=Yn(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Fn(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Xn(e.arg,e.width,e.padRight)),a+=e.arg||"",c+=1}return a}var Qn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function re(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function te(r){var t,n,e,i;for(n=[],i=0,e=Qn.exec(r);e;)(t=r.slice(i,Qn.lastIndex-e[0].length)).length&&n.push(t),n.push(re(e)),i=Qn.lastIndex,e=Qn.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function ne(r){return"string"==typeof r}function ee(r){var t,n,e;if(!ne(r))throw new TypeError(ee("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=te(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return Kn.apply(null,n)}function ie(){var r;if(!(this instanceof ie))return 0===arguments.length?new ie:new ie(arguments[0]);if(arguments.length){if(!dr(r=arguments[0]))throw new TypeError(ee("invalid argument. Mean parameter must be a probability. Value: `%s`.",r))}else r=.5;return Q(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!dr(t))throw new TypeError(ee("invalid assignment. Must be a probability. Value: `%s`.",t));r=t}}),this}tr(ie.prototype,"entropy",(function(){return br(r=this.p)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*Kr(t)-r*Kr(r);var r,t})),tr(ie.prototype,"kurtosis",(function(){return br(r=this.p)||r<0||r>1?NaN:1/(r*(1-r))-6;var r})),tr(ie.prototype,"mean",(function(){return br(r=this.p)||r<0||r>1?NaN:r;var r})),tr(ie.prototype,"median",(function(){return br(r=this.p)||r<0||r>1?NaN:r<=.5?0:1;var r})),tr(ie.prototype,"mode",(function(){return br(r=this.p)||r<0||r>1?NaN:r<=.5?0:1;var r})),tr(ie.prototype,"skewness",(function(){return br(r=this.p)||r<0||r>1?NaN:0===r?rt:1===r?zr:(1-2*r)/Qr(r*(1-r));var r})),tr(ie.prototype,"stdev",(function(){return br(r=this.p)||r<0||r>1?NaN:Qr((1-r)*r);var r})),tr(ie.prototype,"variance",(function(){return br(r=this.p)||r<0||r>1?NaN:r*(1-r);var r})),rr(ie.prototype,"cdf",(function(r){return tt(r,this.p)})),rr(ie.prototype,"mgf",(function(r){return Un(r,this.p)})),rr(ie.prototype,"pmf",(function(r){return En(r,this.p)})),rr(ie.prototype,"quantile",(function(r){return jn(r,this.p)}));var oe,ae=er(),ce=Object.prototype.toString,ue=Object.prototype.hasOwnProperty,fe="function"==typeof Symbol?Symbol:void 0,le="function"==typeof fe?fe.toStringTag:"",pe=ae&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,i,o;if(null==r)return ce.call(r);n=r[le],o=le,t=null!=(i=r)&&ue.call(i,o);try{r[le]=void 0}catch(t){return ce.call(r)}return e=ce.call(r),t?r[le]=n:delete r[le],e}:function(r){return ce.call(r)},se="function"==typeof Uint32Array,ye="function"==typeof Uint32Array?Uint32Array:null,ge="function"==typeof Uint32Array?Uint32Array:void 0;oe=function(){var r,t,n;if("function"!=typeof ye)return!1;try{t=new ye(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(se&&n instanceof Uint32Array||"[object Uint32Array]"===pe(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ge:function(){throw new Error("not implemented")};var de,he=oe,ve="function"==typeof Float64Array,be="function"==typeof Float64Array?Float64Array:null,we="function"==typeof Float64Array?Float64Array:void 0;de=function(){var r,t,n;if("function"!=typeof be)return!1;try{t=new be([1,3.14,-3.14,NaN]),n=t,r=(ve&&n instanceof Float64Array||"[object Float64Array]"===pe(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?we:function(){throw new Error("not implemented")};var me,Ne=de,Ae="function"==typeof Uint8Array,_e="function"==typeof Uint8Array?Uint8Array:null,Ue="function"==typeof Uint8Array?Uint8Array:void 0;me=function(){var r,t,n;if("function"!=typeof _e)return!1;try{t=new _e(t=[1,3.14,-3.14,256,257]),n=t,r=(Ae&&n instanceof Uint8Array||"[object Uint8Array]"===pe(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ue:function(){throw new Error("not implemented")};var Ee,je=me,Se="function"==typeof Uint16Array,Ie="function"==typeof Uint16Array?Uint16Array:null,Fe="function"==typeof Uint16Array?Uint16Array:void 0;Ee=function(){var r,t,n;if("function"!=typeof Ie)return!1;try{t=new Ie(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Se&&n instanceof Uint16Array||"[object Uint16Array]"===pe(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Fe:function(){throw new Error("not implemented")};var ke,Te={uint16:Ee,uint8:je};ke=function(){var r;return(r=new Te.uint16(1))[0]=4660,52===new Te.uint8(r.buffer)[0]}();var xe=ke,Oe=!0===xe?1:0,Ve=new Ne(1),Pe=new he(Ve.buffer);function $e(r){return Ve[0]=r,Pe[Oe]}var Ge=!0===xe?1:0,Ce=new Ne(1),Re=new he(Ce.buffer),We=Number.NEGATIVE_INFINITY,Le=.6931471803691238,Ze=1.9082149292705877e-10,Me=1048575;function He(r){var t,n,e,i,o,a,c,u,f,l,p,s;return 0===r?We:Z(r)||r<0?NaN:(o=0,(n=$e(r))<1048576&&(o-=54,n=$e(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(u=614244+(n&=Me)&1048576|0)>>20|0,c=(r=function(r,t){return Ce[0]=r,Re[Ge]=t>>>0,Ce[0]}(r,n|1072693248^u))-1,(Me&2+n)<3?0===c?0===o?0:o*Le+o*Ze:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*Le-(a-o*Ze-c)):(u=n-398458|0,f=440401-n|0,i=(p=(s=(l=c/(2+c))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(u|=f)>0?(t=.5*c*c,0===o?c-(t-l*(t+a)):o*Le-(t-(l*(t+a)+o*Ze)-c)):0===o?c-l*(c-a):o*Le-(l*(c-a)-o*Ze-c))))}function Ye(r,t){return Z(r)||Z(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0}function qe(r,t){return Z(t)||Z(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1}L(Ye,"factory",(function(r){return Z(r)||r<0||r>1?H(NaN):function(t){return Z(t)?NaN:0===t?1-r:1===t?r:0}})),L(qe,"factory",(function(r){return Z(r)||r<0||r>1?H(NaN):function(t){return Z(t)||t<0||t>1?NaN:t<=1-r?0:1}}));var Xe=Math.sqrt,ze=Number.POSITIVE_INFINITY,Be={};return W(Be,"cdf",M),W(Be,"Bernoulli",ie),W(Be,"entropy",(function(r){var t;return Z(r)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*He(t)-r*He(r)})),W(Be,"kurtosis",(function(r){return Z(r)||r<0||r>1?NaN:1/(r*(1-r))-6})),W(Be,"mean",(function(r){return Z(r)||r<0||r>1?NaN:r})),W(Be,"median",(function(r){return Z(r)||r<0||r>1?NaN:r<=.5?0:1})),W(Be,"mgf",Un),W(Be,"mode",(function(r){return Z(r)||r<0||r>1?NaN:r<=.5?0:1})),W(Be,"pmf",Ye),W(Be,"quantile",qe),W(Be,"skewness",(function(r){return Z(r)||r<0||r>1?NaN:0===r?ze:1===r?We:(1-2*r)/Xe(r*(1-r))})),W(Be,"stdev",(function(r){return Z(r)||r<0||r>1?NaN:Xe((1-r)*r)})),W(Be,"variance",(function(r){return Z(r)||r<0||r>1?NaN:r*(1-r)})),Be},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).bernoulli=t();
//# sourceMappingURL=index.js.map
