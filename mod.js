// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=s.call(e,b,"$1e"),e=s.call(e,d,"e"),e=s.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,l,"e+0$1"),e=s.call(e,y,"e-0$1"),r.alternate&&(e=s.call(e,g,"$1."),e=s.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):f.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,a,o,c,f,p,s,l,y,g,v;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,p=0;p<r.length;p++)if(e=r[p],"string"==typeof e)c+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(a=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,_(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,g=e.padRight,v=void 0,(v=y-l.length)<0?l:l=g?l+m(v):m(v)+l)),c+=e.arg||"",f+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,n,e,i;for(n=[],i=0,e=U.exec(r);e;)(t=r.slice(i,U.lastIndex-e[0].length)).length&&n.push(t),n.push(k(e)),i=U.lastIndex,e=U.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function j(r){var t,n;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[I(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return S.apply(null,t)}var x=Object.prototype,F=x.toString,O=x.__defineGetter__,T=x.__defineSetter__,V=x.__lookupGetter__,$=x.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,t)||$.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,t,n.get),o&&T&&T.call(r,t,n.set),r};function P(r,t,n){G(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function H(r,t,n){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}function C(r,t){return W(r)||W(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t}function L(r){return function(){return r}}function M(r,t,n){G(r,t,{configurable:!1,enumerable:!1,get:n})}function R(r){return"number"==typeof r}H(C,"factory",(function(r){return W(r)||r<0||r>1?L(NaN):function(t){if(W(t))return NaN;if(t<0)return 0;if(t>=1)return 1;return 1-r}}));var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return Z&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,B="function"==typeof z?z.toStringTag:"";var D=q()?function(r){var t,n,e,i,a;if(null==r)return X.call(r);n=r[B],a=B,t=null!=(i=r)&&Y.call(i,a);try{r[B]=void 0}catch(t){return X.call(r)}return e=X.call(r),t?r[B]=n:delete r[B],e}:function(r){return X.call(r)},J=Number,K=J.prototype.toString;var Q=q();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function tr(r){return R(r)||rr(r)}function nr(r){return R(r)&&r>=0&&r<=1}function er(r){return rr(r)&&r.valueOf()>=0&&r.valueOf()<=1}function ir(r){return nr(r)||er(r)}H(tr,"isPrimitive",R),H(tr,"isObject",rr),H(ir,"isPrimitive",nr),H(ir,"isObject",er);var ar="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var ur,cr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,t,n;if("function"!=typeof or)return!1;try{t=new or(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr=ur,pr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var lr,yr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr([1,3.14,-3.14,NaN]),n=t,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr=lr,vr="function"==typeof Uint8Array;var hr="function"==typeof Uint8Array?Uint8Array:null;var dr,br="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,n;if("function"!=typeof hr)return!1;try{t=new hr(t=[1,3.14,-3.14,256,257]),n=t,r=(vr&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?br:function(){throw new Error("not implemented")};var wr=dr,mr="function"==typeof Uint16Array;var Nr="function"==typeof Uint16Array?Uint16Array:null;var Ar,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,t,n;if("function"!=typeof Nr)return!1;try{t=new Nr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(mr&&n instanceof Uint16Array||"[object Uint16Array]"===D(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Sr={uint16:Ar,uint8:wr};(Er=new Sr.uint16(1))[0]=4660;var Ur=52===new Sr.uint8(Er.buffer)[0],kr=!0===Ur?1:0,Ir=new gr(1),jr=new fr(Ir.buffer);function xr(r){return Ir[0]=r,jr[kr]}var Fr=!0===Ur?1:0,Or=new gr(1),Tr=new fr(Or.buffer);var Vr=1023,$r=J.NEGATIVE_INFINITY;var Gr=.6931471803691238,Pr=1.9082149292705877e-10,Hr=0x40000000000000,Wr=.3333333333333333,Cr=1048575,Lr=2146435072,Mr=1048576,Rr=1072693248;function Zr(r){var t,n,e,i,a,o,u,c,f,p,s,l;return 0===r?$r:W(r)||r<0?NaN:(a=0,(n=xr(r))<Mr&&(a-=54,n=xr(r*=Hr)),n>=Lr?r+r:(a+=(n>>20)-Vr|0,a+=(c=(n&=Cr)+614244&1048576|0)>>20|0,u=(r=function(r,t){return Or[0]=r,Tr[Fr]=t>>>0,Or[0]}(r,n|c^Rr))-1,(Cr&2+n)<3?0===u?0===a?0:a*Gr+a*Pr:(o=u*u*(.5-Wr*u),0===a?u-o:a*Gr-(o-a*Pr-u)):(c=n-398458|0,f=440401-n|0,i=(s=(l=(p=u/(2+u))*p)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=e+i,(c|=f)>0?(t=.5*u*u,0===a?u-(t-p*(t+o)):a*Gr-(t-(p*(t+o)+a*Pr)-u)):0===a?u-p*(u-o):a*Gr-(p*(u-o)-a*Pr-u))))}function qr(r){var t;return W(r)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*Zr(t)-r*Zr(r)}function Xr(r){return W(r)||r<0||r>1?NaN:1/(r*(1-r))-6}function Yr(r){return W(r)||r<0||r>1?NaN:r}function zr(r){return W(r)||r<0||r>1?NaN:r<=.5?0:1}function Br(r){return W(r)||r<0||r>1?NaN:r<=.5?0:1}var Dr=Math.sqrt,Jr=Number.POSITIVE_INFINITY;function Kr(r){return W(r)||r<0||r>1?NaN:0===r?Jr:1===r?$r:(1-2*r)/Dr(r*(1-r))}function Qr(r){return W(r)||r<0||r>1?NaN:Dr((1-r)*r)}function rt(r){return W(r)||r<0||r>1?NaN:r*(1-r)}function tt(r){return r>=0&&r<=1}var nt=Math.floor,et=Math.ceil;function it(r){return r<0?et(r):nt(r)}var at=1023,ot=-1023,ut=-1074;function ct(r){return r===Jr||r===$r}var ft,pt,st=2147483648,lt=2147483647;!0===Ur?(ft=1,pt=0):(ft=0,pt=1);var yt,gt,vt={HIGH:ft,LOW:pt},ht=new gr(1),dt=new fr(ht.buffer),bt=vt.HIGH,wt=vt.LOW;function mt(r,t,n,e){return ht[0]=r,t[e]=dt[bt],t[e+n]=dt[wt],t}function Nt(r){return mt(r,[0,0],1,0)}H(Nt,"assign",mt),!0===Ur?(yt=1,gt=0):(yt=0,gt=1);var At={HIGH:yt,LOW:gt},_t=new gr(1),Et=new fr(_t.buffer),St=At.HIGH,Ut=At.LOW;function kt(r,t){return Et[St]=r,Et[Ut]=t,_t[0]}var It=[0,0];var jt=22250738585072014e-324;var xt=4503599627370496;function Ft(r,t,n,e){return W(r)||ct(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<jt?(t[e]=r*xt,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}H((function(r){return Ft(r,[0,0],1,0)}),"assign",Ft);var Ot=2146435072;var Tt=2220446049250313e-31,Vt=2148532223,$t=[0,0],Gt=[0,0];function Pt(r,t){var n,e,i,a,o,u;return 0===t||0===r||W(r)||ct(r)?r:(Ft(r,$t,1,0),r=$t[0],t+=$t[1],t+=function(r){var t=xr(r);return(t=(t&Ot)>>>20)-Vr|0}(r),t<ut?(i=0,a=r,Nt.assign(i,It,1,0),o=It[0],o&=lt,u=xr(a),kt(o|=u&=st,It[1])):t>at?r<0?$r:Jr:(t<=ot?(t+=52,e=Tt):e=1,Nt.assign(r,Gt,1,0),n=Gt[0],n&=Vt,e*kt(n|=t+Vr<<20,Gt[1])))}var Ht=.6931471803691238,Wt=1.9082149292705877e-10,Ct=1.4426950408889634,Lt=709.782712893384,Mt=-745.1332191019411,Rt=1/(1<<28),Zt=-Rt;function qt(r){var t;return W(r)||r===Jr?r:r===$r?0:r>Lt?Jr:r<Mt?0:r>Zt&&r<Rt?1+r:function(r,t,n){var e,i,a,o;return Pt(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(t=it(r<0?Ct*r-.5:Ct*r+.5))*Ht,t*Wt,t)}function Xt(r,t){return W(r)||!tt(t)?NaN:1-t+t*qt(r)}function Yt(r,t){return W(r)||W(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0}function zt(r,t){return W(t)||W(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1}function Bt(){var r;if(!(this instanceof Bt))return 0===arguments.length?new Bt:new Bt(arguments[0]);if(arguments.length){if(!nr(r=arguments[0]))throw new TypeError(j("invalid argument. Mean parameter must be a probability. Value: `%s`.",r))}else r=.5;return G(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!nr(t))throw new TypeError(j("invalid assignment. Must be a probability. Value: `%s`.",t));r=t}}),this}H(Xt,"factory",(function(r){return tt(r)?function(t){if(W(t))return NaN;return 1-r+r*qt(t)}:L(NaN)})),H(Yt,"factory",(function(r){return W(r)||r<0||r>1?L(NaN):function(t){if(W(t))return NaN;if(0===t)return 1-r;if(1===t)return r;return 0}})),H(zt,"factory",(function(r){return W(r)||r<0||r>1?L(NaN):function(t){if(W(t)||t<0||t>1)return NaN;if(t<=1-r)return 0;return 1}})),M(Bt.prototype,"entropy",(function(){return qr(this.p)})),M(Bt.prototype,"kurtosis",(function(){return Xr(this.p)})),M(Bt.prototype,"mean",(function(){return Yr(this.p)})),M(Bt.prototype,"median",(function(){return Br(this.p)})),M(Bt.prototype,"mode",(function(){return zr(this.p)})),M(Bt.prototype,"skewness",(function(){return Kr(this.p)})),M(Bt.prototype,"stdev",(function(){return Qr(this.p)})),M(Bt.prototype,"variance",(function(){return rt(this.p)})),H(Bt.prototype,"cdf",(function(r){return C(r,this.p)})),H(Bt.prototype,"mgf",(function(r){return Xt(r,this.p)})),H(Bt.prototype,"pmf",(function(r){return Yt(r,this.p)})),H(Bt.prototype,"quantile",(function(r){return zt(r,this.p)}));var Dt={};P(Dt,"cdf",C),P(Dt,"Bernoulli",Bt),P(Dt,"entropy",qr),P(Dt,"kurtosis",Xr),P(Dt,"mean",Yr),P(Dt,"median",Br),P(Dt,"mgf",Xt),P(Dt,"mode",zr),P(Dt,"pmf",Yt),P(Dt,"quantile",zt),P(Dt,"skewness",Kr),P(Dt,"stdev",Qr),P(Dt,"variance",rt);export{Bt as Bernoulli,C as cdf,Dt as default,qr as entropy,Xr as kurtosis,Yr as mean,Br as median,Xt as mgf,zr as mode,Yt as pmf,zt as quantile,Kr as skewness,Qr as stdev,rt as variance};
//# sourceMappingURL=mod.js.map