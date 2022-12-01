// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,o=n.__defineSetter__,a=n.__lookupGetter__,u=n.__lookupSetter__,c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,c){var f,s,p,l;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===e.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((s="value"in c)&&(a.call(r,t)||u.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=c.value,r.__proto__=f):r[t]=c.value),p="get"in c,l="set"in c,s&&(p||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,t,c.get),l&&o&&o.call(r,t,c.set),r};function f(r,t,n){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function s(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function p(r){return r!=r}function l(r,t){return p(r)||p(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t}function y(r){return function(){return r}}function g(r,t,n){c(r,t,{configurable:!1,enumerable:!1,get:n})}function d(r){return"number"==typeof r}s(l,"factory",(function(r){return p(r)||r<0||r>1?y(NaN):function(t){return p(t)?NaN:t<0?0:t>=1?1:1-r}}));var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return h&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,w=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",N=b()?function(r){var t,n,e,i,o;if(null==r)return v.call(r);n=r[m],o=m,t=null!=(i=r)&&w.call(i,o);try{r[m]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[m]=n:delete r[m],e}:function(r){return v.call(r)},A=Number,_=A.prototype.toString,E=b();function U(r){return"object"==typeof r&&(r instanceof A||(E?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Number]"===N(r)))}function k(r){return d(r)||U(r)}function S(r){return d(r)&&r>=0&&r<=1}function j(r){return U(r)&&r.valueOf()>=0&&r.valueOf()<=1}function I(r){return S(r)||j(r)}s(k,"isPrimitive",d),s(k,"isObject",U),s(I,"isPrimitive",S),s(I,"isObject",j);var x,F="function"==typeof Uint32Array,T="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;x=function(){var r,t,n;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(F&&n instanceof Uint32Array||"[object Uint32Array]"===N(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?O:function(){throw new Error("not implemented")};var V,$=x,G="function"==typeof Float64Array,P="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P([1,3.14,-3.14,NaN]),n=t,r=(G&&n instanceof Float64Array||"[object Float64Array]"===N(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?H:function(){throw new Error("not implemented")};var W,C=V,L="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,R="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,t,n;if("function"!=typeof M)return!1;try{t=new M(t=[1,3.14,-3.14,256,257]),n=t,r=(L&&n instanceof Uint8Array||"[object Uint8Array]"===N(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?R:function(){throw new Error("not implemented")};var Z,q=W,X="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;Z=function(){var r,t,n;if("function"!=typeof Y)return!1;try{t=new Y(t=[1,3.14,-3.14,65536,65537]),n=t,r=(X&&n instanceof Uint16Array||"[object Uint16Array]"===N(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:Z,uint8:q};(B=new D.uint16(1))[0]=4660;var J=52===new D.uint8(B.buffer)[0],K=!0===J?1:0,Q=new C(1),rr=new $(Q.buffer);function tr(r){return Q[0]=r,rr[K]}var nr=!0===J?1:0,er=new C(1),ir=new $(er.buffer),or=1023,ar=A.NEGATIVE_INFINITY,ur=.6931471803691238,cr=1.9082149292705877e-10,fr=1048575;function sr(r){var t,n,e,i,o,a,u,c,f,s,l,y;return 0===r?ar:p(r)||r<0?NaN:(o=0,(n=tr(r))<1048576&&(o-=54,n=tr(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-or|0,o+=(c=614244+(n&=fr)&1048576|0)>>20|0,u=(r=function(r,t){return er[0]=r,ir[nr]=t>>>0,er[0]}(r,n|1072693248^c))-1,(fr&2+n)<3?0===u?0===o?0:o*ur+o*cr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*ur-(a-o*cr-u)):(c=n-398458|0,f=440401-n|0,i=(l=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=e+i,(c|=f)>0?(t=.5*u*u,0===o?u-(t-s*(t+a)):o*ur-(t-(s*(t+a)+o*cr)-u)):0===o?u-s*(u-a):o*ur-(s*(u-a)-o*cr-u))))}function pr(r){var t;return p(r)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*sr(t)-r*sr(r)}function lr(r){return p(r)||r<0||r>1?NaN:1/(r*(1-r))-6}function yr(r){return p(r)||r<0||r>1?NaN:r}function gr(r){return p(r)||r<0||r>1?NaN:r<=.5?0:1}function dr(r){return p(r)||r<0||r>1?NaN:r<=.5?0:1}var hr=Math.sqrt,br=Number.POSITIVE_INFINITY;function vr(r){return p(r)||r<0||r>1?NaN:0===r?br:1===r?ar:(1-2*r)/hr(r*(1-r))}function wr(r){return p(r)||r<0||r>1?NaN:hr((1-r)*r)}function mr(r){return p(r)||r<0||r>1?NaN:r*(1-r)}function Nr(r){return r>=0&&r<=1}var Ar,_r,Er=Math.floor,Ur=Math.ceil;function kr(r){return r<0?Ur(r):Er(r)}function Sr(r){return r===br||r===ar}!0===J?(Ar=1,_r=0):(Ar=0,_r=1);var jr,Ir,xr={HIGH:Ar,LOW:_r},Fr=new C(1),Tr=new $(Fr.buffer),Or=xr.HIGH,Vr=xr.LOW;function $r(r,t,n,e){return Fr[0]=r,t[e]=Tr[Or],t[e+n]=Tr[Vr],t}function Gr(r){return $r(r,[0,0],1,0)}s(Gr,"assign",$r),!0===J?(jr=1,Ir=0):(jr=0,Ir=1);var Pr={HIGH:jr,LOW:Ir},Hr=new C(1),Wr=new $(Hr.buffer),Cr=Pr.HIGH,Lr=Pr.LOW;function Mr(r,t){return Wr[Cr]=r,Wr[Lr]=t,Hr[0]}var Rr=[0,0];function Zr(r,t,n,e){return p(r)||Sr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}s((function(r){return Zr(r,[0,0],1,0)}),"assign",Zr);var qr=[0,0],Xr=[0,0];function Yr(r,t){var n,e,i,o,a,u;return 0===t||0===r||p(r)||Sr(r)?r:(Zr(r,qr,1,0),t+=qr[1],t+=function(r){var t=tr(r);return(t=(2146435072&t)>>>20)-or|0}(r=qr[0]),t<-1074?(i=0,o=r,Gr.assign(i,Rr,1,0),a=Rr[0],a&=2147483647,u=tr(o),Mr(a|=u&=2147483648,Rr[1])):t>1023?r<0?ar:br:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Gr.assign(r,Xr,1,0),n=Xr[0],n&=2148532223,e*Mr(n|=t+or<<20,Xr[1])))}var zr=1.4426950408889634,Br=1/(1<<28);function Dr(r){var t;return p(r)||r===br?r:r===ar?0:r>709.782712893384?br:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Br?1+r:function(r,t,n){var e,i,o,a;return Yr(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(t=kr(r<0?zr*r-.5:zr*r+.5)),1.9082149292705877e-10*t,t)}function Jr(r,t){return p(r)||!Nr(t)?NaN:1-t+t*Dr(r)}function Kr(r,t){return p(r)||p(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0}function Qr(r,t){return p(t)||p(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1}function rt(r){return"number"==typeof r}function tt(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function nt(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+tt(i):tt(i)+r,e&&(r="-"+r)),r}s(Jr,"factory",(function(r){return Nr(r)?function(t){return p(t)?NaN:1-r+r*Dr(t)}:y(NaN)})),s(Kr,"factory",(function(r){return p(r)||r<0||r>1?y(NaN):function(t){return p(t)?NaN:0===t?1-r:1===t?r:0}})),s(Qr,"factory",(function(r){return p(r)||r<0||r>1?y(NaN):function(t){return p(t)||t<0||t>1?NaN:t<=1-r?0:1}}));var et=String.prototype.toLowerCase,it=String.prototype.toUpperCase;function ot(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!rt(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=nt(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=nt(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===it.call(r.specifier)?it.call(n):et.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function at(r){return"string"==typeof r}var ut=Math.abs,ct=String.prototype.toLowerCase,ft=String.prototype.toUpperCase,st=String.prototype.replace,pt=/e\+(\d)$/,lt=/e-(\d)$/,yt=/^(\d+)$/,gt=/^(\d+)e/,dt=/\.0$/,ht=/\.0*e/,bt=/(\..*[^0])0*e/;function vt(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!rt(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":ut(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=st.call(n,bt,"$1e"),n=st.call(n,ht,"e"),n=st.call(n,dt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=st.call(n,pt,"e+0$1"),n=st.call(n,lt,"e-0$1"),r.alternate&&(n=st.call(n,yt,"$1."),n=st.call(n,gt,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===ft.call(r.specifier)?ft.call(n):ct.call(n)}function wt(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function mt(r,t,n){var e=t-r.length;return e<0?r:r=n?r+wt(e):wt(e)+r}var Nt=String.fromCharCode,At=isNaN,_t=Array.isArray;function Et(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Ut(r){var t,n,e,i,o,a,u,c,f;if(!_t(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(at(e=r[c]))a+=e;else{if(t=void 0!==e.precision,!(e=Et(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,At(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,At(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=ot(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!At(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=At(o)?String(e.arg):Nt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=vt(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=nt(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=mt(e.arg,e.width,e.padRight)),a+=e.arg||"",u+=1}return a}var kt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function St(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function jt(r){var t,n,e,i;for(n=[],i=0,e=kt.exec(r);e;)(t=r.slice(i,kt.lastIndex-e[0].length)).length&&n.push(t),n.push(St(e)),i=kt.lastIndex,e=kt.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function It(r){return"string"==typeof r}function xt(r){var t,n,e;if(!It(r))throw new TypeError(xt("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=jt(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return Ut.apply(null,n)}function Ft(){var r;if(!(this instanceof Ft))return 0===arguments.length?new Ft:new Ft(arguments[0]);if(arguments.length){if(!S(r=arguments[0]))throw new TypeError(xt("invalid argument. Mean parameter must be a probability. Value: `%s`.",r))}else r=.5;return c(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!S(t))throw new TypeError(xt("invalid assignment. Must be a probability. Value: `%s`.",t));r=t}}),this}g(Ft.prototype,"entropy",(function(){return pr(this.p)})),g(Ft.prototype,"kurtosis",(function(){return lr(this.p)})),g(Ft.prototype,"mean",(function(){return yr(this.p)})),g(Ft.prototype,"median",(function(){return dr(this.p)})),g(Ft.prototype,"mode",(function(){return gr(this.p)})),g(Ft.prototype,"skewness",(function(){return vr(this.p)})),g(Ft.prototype,"stdev",(function(){return wr(this.p)})),g(Ft.prototype,"variance",(function(){return mr(this.p)})),s(Ft.prototype,"cdf",(function(r){return l(r,this.p)})),s(Ft.prototype,"mgf",(function(r){return Jr(r,this.p)})),s(Ft.prototype,"pmf",(function(r){return Kr(r,this.p)})),s(Ft.prototype,"quantile",(function(r){return Qr(r,this.p)}));var Tt={};return f(Tt,"cdf",l),f(Tt,"Bernoulli",Ft),f(Tt,"entropy",pr),f(Tt,"kurtosis",lr),f(Tt,"mean",yr),f(Tt,"median",dr),f(Tt,"mgf",Jr),f(Tt,"mode",gr),f(Tt,"pmf",Kr),f(Tt,"quantile",Qr),f(Tt,"skewness",vr),f(Tt,"stdev",wr),f(Tt,"variance",mr),Tt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).bernoulli=t();
//# sourceMappingURL=index.js.map
