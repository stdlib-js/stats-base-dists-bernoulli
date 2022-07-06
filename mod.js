// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,i=r.__lookupGetter__,a=r.__lookupSetter__;var f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,f.get),p&&u&&u.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}function l(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return t!=t}function p(t,n){return y(t)||y(n)||n<0||n>1?NaN:t<0?0:t>=1?1:1-n}function v(t){return function(){return t}}function s(t,n,r){f(t,n,{configurable:!1,enumerable:!1,get:r})}function b(t){return"number"==typeof t}l(p,"factory",(function(t){return y(t)||t<0||t>1?v(NaN):function(n){if(y(n))return NaN;if(n<0)return 0;if(n>=1)return 1;return 1-t}}));var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return N&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var A=m()?function(t){var n,r,e,o,u;if(null==t)return h.call(t);r=t[d],u=d,n=null!=(o=t)&&w.call(o,u);try{t[d]=void 0}catch(n){return h.call(t)}return e=h.call(t),n?t[d]=r:delete t[d],e}:function(t){return h.call(t)},_=Number,g=_.prototype.toString;var U=m();function j(t){return"object"==typeof t&&(t instanceof _||(U?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===A(t)))}function O(t){return b(t)||j(t)}function I(t){return b(t)&&t>=0&&t<=1}function S(t){return j(t)&&t.valueOf()>=0&&t.valueOf()<=1}function E(t){return I(t)||S(t)}l(O,"isPrimitive",b),l(O,"isObject",j),l(E,"isPrimitive",I),l(E,"isObject",S);var F="function"==typeof Uint32Array;var T="function"==typeof Uint32Array?Uint32Array:null;var H,P="function"==typeof Uint32Array?Uint32Array:void 0;H=function(){var t,n,r;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(F&&r instanceof Uint32Array||"[object Uint32Array]"===A(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?P:function(){throw new Error("not implemented")};var G=H,k="function"==typeof Float64Array;var M="function"==typeof Float64Array?Float64Array:null;var V,L="function"==typeof Float64Array?Float64Array:void 0;V=function(){var t,n,r;if("function"!=typeof M)return!1;try{n=new M([1,3.14,-3.14,NaN]),r=n,t=(k&&r instanceof Float64Array||"[object Float64Array]"===A(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?L:function(){throw new Error("not implemented")};var W=V,q="function"==typeof Uint8Array;var x="function"==typeof Uint8Array?Uint8Array:null;var Y,B="function"==typeof Uint8Array?Uint8Array:void 0;Y=function(){var t,n,r;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),r=n,t=(q&&r instanceof Uint8Array||"[object Uint8Array]"===A(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?B:function(){throw new Error("not implemented")};var C=Y,z="function"==typeof Uint16Array;var D="function"==typeof Uint16Array?Uint16Array:null;var J,K="function"==typeof Uint16Array?Uint16Array:void 0;J=function(){var t,n,r;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,65536,65537]),r=n,t=(z&&r instanceof Uint16Array||"[object Uint16Array]"===A(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?K:function(){throw new Error("not implemented")};var Q,R={uint16:J,uint8:C};(Q=new R.uint16(1))[0]=4660;var X=52===new R.uint8(Q.buffer)[0],Z=!0===X?1:0,$=new W(1),tt=new G($.buffer);function nt(t){return $[0]=t,tt[Z]}var rt=!0===X?1:0,et=new W(1),ot=new G(et.buffer);var ut=_.NEGATIVE_INFINITY;var it=.6931471803691238,at=1.9082149292705877e-10;function ft(t){var n,r,e,o,u,i,a,f,c,l,p,v;return 0===t?ut:y(t)||t<0?NaN:(u=0,(r=nt(t))<1048576&&(u-=54,r=nt(t*=0x40000000000000)),r>=2146435072?t+t:(u+=(r>>20)-1023|0,u+=(f=(r&=1048575)+614244&1048576|0)>>20|0,a=(t=function(t,n){return et[0]=t,ot[rt]=n>>>0,et[0]}(t,r|1072693248^f))-1,(1048575&2+r)<3?0===a?0===u?0:u*it+u*at:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*it-(i-u*at-a)):(f=r-398458|0,c=440401-r|0,o=(p=(v=(l=a/(2+a))*l)*v)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=v*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),i=e+o,(f|=c)>0?(n=.5*a*a,0===u?a-(n-l*(n+i)):u*it-(n-(l*(n+i)+u*at)-a)):0===u?a-l*(a-i):u*it-(l*(a-i)-u*at-a))))}function ct(t){var n;return y(t)||t<0||t>1?NaN:0===t||1===t?0:-(n=1-t)*ft(n)-t*ft(t)}function lt(t){return y(t)||t<0||t>1?NaN:1/(t*(1-t))-6}function yt(t){return y(t)||t<0||t>1?NaN:t}function pt(t){return y(t)||t<0||t>1?NaN:t<=.5?0:1}function vt(t){return y(t)||t<0||t>1?NaN:t<=.5?0:1}var st=Math.sqrt,bt=Number.POSITIVE_INFINITY;function Nt(t){return y(t)||t<0||t>1?NaN:0===t?bt:1===t?ut:(1-2*t)/st(t*(1-t))}function mt(t){return y(t)||t<0||t>1?NaN:st((1-t)*t)}function ht(t){return y(t)||t<0||t>1?NaN:t*(1-t)}function wt(t){return t>=0&&t<=1}var dt=Math.floor,At=Math.ceil;function _t(t){return t<0?At(t):dt(t)}var gt,Ut;function jt(t){return t===bt||t===ut}!0===X?(gt=1,Ut=0):(gt=0,Ut=1);var Ot,It,St={HIGH:gt,LOW:Ut},Et=new W(1),Ft=new G(Et.buffer),Tt=St.HIGH,Ht=St.LOW;function Pt(t,n){return Et[0]=n,t[0]=Ft[Tt],t[1]=Ft[Ht],t}function Gt(t,n){return 1===arguments.length?Pt([0,0],t):Pt(t,n)}!0===X?(Ot=1,It=0):(Ot=0,It=1);var kt={HIGH:Ot,LOW:It},Mt=new W(1),Vt=new G(Mt.buffer),Lt=kt.HIGH,Wt=kt.LOW;function qt(t,n){return Vt[Lt]=t,Vt[Wt]=n,Mt[0]}var xt=[0,0];function Yt(t,n){return y(n)||jt(n)?(t[0]=n,t[1]=0,t):0!==n&&function(t){return Math.abs(t)}(n)<22250738585072014e-324?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)}var Bt=[0,0],Ct=[0,0];function zt(t,n){var r,e,o,u,i;return 0===n||0===t||y(t)||jt(t)?t:(function(t,n){1===arguments.length?Yt([0,0],t):Yt(t,n)}(Bt,t),n+=Bt[1],n+=function(t){var n=nt(t);return(n=(2146435072&n)>>>20)-1023|0}(t=Bt[0]),n<-1074?(o=t,Gt(xt,0),u=xt[0],u&=2147483647,i=nt(o),qt(u|=i&=2147483648,xt[1])):n>1023?t<0?ut:bt:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Gt(Ct,t),r=Ct[0],r&=2148532223,e*qt(r|=n+1023<<20,Ct[1])))}function Dt(t){var n;return y(t)||t===bt?t:t===ut?0:t>709.782712893384?bt:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:function(t,n,r){var e,o,u,i;return zt(1-(n-(e=t-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),r)}(t-.6931471803691238*(n=_t(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5)),1.9082149292705877e-10*n,n)}function Jt(t,n){return y(t)||!wt(n)?NaN:1-n+n*Dt(t)}function Kt(t,n){return y(t)||y(n)||n<0||n>1?NaN:0===t?1-n:1===t?n:0}function Qt(t,n){return y(n)||y(t)||n<0||n>1||t<0||t>1?NaN:t<=1-n?0:1}function Rt(){var t;if(!(this instanceof Rt))return 0===arguments.length?new Rt:new Rt(arguments[0]);if(arguments.length){if(!I(t=arguments[0]))throw new TypeError("invalid argument. Mean parameter `p` must be a probability. Value: `"+t+"`")}else t=.5;return f(this,"p",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!I(n))throw new TypeError("invalid value. Must be a probability. Value: `"+n+"`");t=n}}),this}l(Jt,"factory",(function(t){return wt(t)?function(n){if(y(n))return NaN;return 1-t+t*Dt(n)}:v(NaN)})),l(Kt,"factory",(function(t){return y(t)||t<0||t>1?v(NaN):function(n){if(y(n))return NaN;if(0===n)return 1-t;if(1===n)return t;return 0}})),l(Qt,"factory",(function(t){return y(t)||t<0||t>1?v(NaN):function(n){if(y(n)||n<0||n>1)return NaN;if(n<=1-t)return 0;return 1}})),s(Rt.prototype,"entropy",(function(){return ct(this.p)})),s(Rt.prototype,"kurtosis",(function(){return lt(this.p)})),s(Rt.prototype,"mean",(function(){return yt(this.p)})),s(Rt.prototype,"median",(function(){return vt(this.p)})),s(Rt.prototype,"mode",(function(){return pt(this.p)})),s(Rt.prototype,"skewness",(function(){return Nt(this.p)})),s(Rt.prototype,"stdev",(function(){return mt(this.p)})),s(Rt.prototype,"variance",(function(){return ht(this.p)})),l(Rt.prototype,"cdf",(function(t){return p(t,this.p)})),l(Rt.prototype,"mgf",(function(t){return Jt(t,this.p)})),l(Rt.prototype,"pmf",(function(t){return Kt(t,this.p)})),l(Rt.prototype,"quantile",(function(t){return Qt(t,this.p)}));var Xt={};c(Xt,"cdf",p),c(Xt,"Bernoulli",Rt),c(Xt,"entropy",ct),c(Xt,"kurtosis",lt),c(Xt,"mean",yt),c(Xt,"median",vt),c(Xt,"mgf",Jt),c(Xt,"mode",pt),c(Xt,"pmf",Kt),c(Xt,"quantile",Qt),c(Xt,"skewness",Nt),c(Xt,"stdev",mt),c(Xt,"variance",ht);export{Rt as Bernoulli,p as cdf,Xt as default,ct as entropy,lt as kurtosis,yt as mean,vt as median,Jt as mgf,pt as mode,Kt as pmf,Qt as quantile,Nt as skewness,mt as stdev,ht as variance};
//# sourceMappingURL=mod.js.map
