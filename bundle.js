// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).bernoulli=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=n,v=function(r,t,n){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((v="value"in n)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,y="set"in n,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,t,n.get),y&&i&&i.call(r,t,n.set),r},l=t()?c:v,y=l;var p=function(r,t,n){y(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})},s=l;var b=function(r,t,n){s(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})};var N=function(r){return r!=r},m=N;var h=function(r){return function(){return r}},d=h,w=N;var A=function(r,t){return m(r)||m(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t};b(A,"factory",(function(r){return w(r)||r<0||r>1?d(NaN):function(t){if(w(t))return NaN;if(t<0)return 0;if(t>=1)return 1;return 1-r}}));var _=A,g=l;var j=function(r,t,n){g(r,t,{configurable:!1,enumerable:!1,get:n})};var U=function(r){return"number"==typeof r};var O=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return O&&"symbol"==typeof Symbol.toStringTag},S=Object.prototype.toString,E=S;var T=function(r){return E.call(r)},F=Object.prototype.hasOwnProperty;var P=function(r,t){return null!=r&&F.call(r,t)},H="function"==typeof Symbol?Symbol.toStringTag:"",G=P,k=H,M=S;var V=T,x=function(r){var t,n,e;if(null==r)return M.call(r);n=r[k],t=G(r,k);try{r[k]=void 0}catch(t){return M.call(r)}return e=M.call(r),t?r[k]=n:delete r[k],e},L=I()?x:V,W=Number,q=W.prototype.toString;var Y=L,B=W,C=function(r){try{return q.call(r),!0}catch(r){return!1}},z=I();var D=function(r){return"object"==typeof r&&(r instanceof B||(z?C(r):"[object Number]"===Y(r)))},J=U,K=D;var Q=b,R=function(r){return J(r)||K(r)},X=D;Q(R,"isPrimitive",U),Q(R,"isObject",X);var Z=R.isPrimitive;var $=function(r){return Z(r)&&r>=0&&r<=1},rr=R.isObject;var tr=function(r){return rr(r)&&r.valueOf()>=0&&r.valueOf()<=1},nr=$,er=tr;var or=b,ur=function(r){return nr(r)||er(r)},ir=tr;or(ur,"isPrimitive",$),or(ur,"isObject",ir);var ar=ur,fr=L,cr="function"==typeof Uint32Array;var vr="function"==typeof Uint32Array?Uint32Array:null,lr=function(r){return cr&&r instanceof Uint32Array||"[object Uint32Array]"===fr(r)},yr=vr;var pr=function(){var r,t;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,4294967296,4294967297]),r=lr(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var sr="function"==typeof Uint32Array?Uint32Array:void 0,br=function(){throw new Error("not implemented")},Nr=pr()?sr:br,mr=L,hr="function"==typeof Float64Array;var dr="function"==typeof Float64Array?Float64Array:null,wr=function(r){return hr&&r instanceof Float64Array||"[object Float64Array]"===mr(r)},Ar=dr;var _r=function(){var r,t;if("function"!=typeof Ar)return!1;try{t=new Ar([1,3.14,-3.14,NaN]),r=wr(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var gr="function"==typeof Float64Array?Float64Array:void 0,jr=function(){throw new Error("not implemented")},Ur=_r()?gr:jr,Or=L,Ir="function"==typeof Uint8Array;var Sr="function"==typeof Uint8Array?Uint8Array:null,Er=function(r){return Ir&&r instanceof Uint8Array||"[object Uint8Array]"===Or(r)},Tr=Sr;var Fr=function(){var r,t;if("function"!=typeof Tr)return!1;try{t=new Tr(t=[1,3.14,-3.14,256,257]),r=Er(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Pr="function"==typeof Uint8Array?Uint8Array:void 0,Hr=function(){throw new Error("not implemented")},Gr=Fr()?Pr:Hr,kr=L,Mr="function"==typeof Uint16Array;var Vr="function"==typeof Uint16Array?Uint16Array:null,xr=function(r){return Mr&&r instanceof Uint16Array||"[object Uint16Array]"===kr(r)},Lr=Vr;var Wr=function(){var r,t;if("function"!=typeof Lr)return!1;try{t=new Lr(t=[1,3.14,-3.14,65536,65537]),r=xr(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var qr,Yr="function"==typeof Uint16Array?Uint16Array:void 0,Br=function(){throw new Error("not implemented")},Cr={uint16:Wr()?Yr:Br,uint8:Gr};(qr=new Cr.uint16(1))[0]=4660;var zr=52===new Cr.uint8(qr.buffer)[0],Dr=Nr,Jr=!0===zr?1:0,Kr=new Ur(1),Qr=new Dr(Kr.buffer);var Rr=function(r){return Kr[0]=r,Qr[Jr]},Xr=Nr,Zr=!0===zr?1:0,$r=new Ur(1),rt=new Xr($r.buffer);var tt=function(r,t){return $r[0]=r,rt[Zr]=t>>>0,$r[0]},nt=tt,et=W.NEGATIVE_INFINITY;var ot=Rr,ut=nt,it=N,at=et,ft=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ct=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},vt=.6931471803691238,lt=1.9082149292705877e-10,yt=1048575;var pt=N,st=function(r){var t,n,e,o,u,i,a,f,c,v,l;return 0===r?at:it(r)||r<0?NaN:(o=0,(n=ot(r))<1048576&&(o-=54,n=ot(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(a=(n&=yt)+614244&1048576|0)>>20|0,i=(r=ut(r,n|1072693248^a))-1,(yt&2+n)<3?0===i?0===o?0:o*vt+o*lt:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*vt-(u-o*lt-i)):(a=n-398458|0,f=440401-n|0,e=(v=(l=(c=i/(2+i))*c)*l)*ft(v),u=l*ct(v)+e,(a|=f)>0?(t=.5*i*i,0===o?i-(t-c*(t+u)):o*vt-(t-(c*(t+u)+o*lt)-i)):0===o?i-c*(i-u):o*vt-(c*(i-u)-o*lt-i))))};var bt=function(r){var t;return pt(r)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*st(t)-r*st(r)},Nt=N;var mt=function(r){return Nt(r)||r<0||r>1?NaN:1/(r*(1-r))-6},ht=N;var dt=function(r){return ht(r)||r<0||r>1?NaN:r},wt=N;var At=function(r){return wt(r)||r<0||r>1?NaN:r<=.5?0:1},_t=N;var gt=function(r){return _t(r)||r<0||r>1?NaN:r<=.5?0:1},jt=Math.sqrt,Ut=Number.POSITIVE_INFINITY,Ot=N,It=jt,St=Ut,Et=et;var Tt=function(r){return Ot(r)||r<0||r>1?NaN:0===r?St:1===r?Et:(1-2*r)/It(r*(1-r))},Ft=N,Pt=jt;var Ht=function(r){return Ft(r)||r<0||r>1?NaN:Pt((1-r)*r)},Gt=N;var kt=function(r){return Gt(r)||r<0||r>1?NaN:r*(1-r)};var Mt=function(r){return r>=0&&r<=1},Vt=Math.floor,xt=Math.ceil,Lt=Vt,Wt=xt;var qt=function(r){return r<0?Wt(r):Lt(r)},Yt=Ut,Bt=et;var Ct,zt,Dt=function(r){return r===Yt||r===Bt};!0===zr?(Ct=1,zt=0):(Ct=0,zt=1);var Jt=Nr,Kt={HIGH:Ct,LOW:zt},Qt=new Ur(1),Rt=new Jt(Qt.buffer),Xt=Kt.HIGH,Zt=Kt.LOW;var $t=function(r,t){return Qt[0]=t,r[0]=Rt[Xt],r[1]=Rt[Zt],r};var rn,tn,nn=function(r,t){return 1===arguments.length?$t([0,0],r):$t(r,t)},en=nn;!0===zr?(rn=1,tn=0):(rn=0,tn=1);var on=Nr,un={HIGH:rn,LOW:tn},an=new Ur(1),fn=new on(an.buffer),cn=un.HIGH,vn=un.LOW;var ln=function(r,t){return fn[cn]=r,fn[vn]=t,an[0]},yn=en,pn=Rr,sn=ln,bn=[0,0];var Nn=Dt,mn=N,hn=function(r){return Math.abs(r)};var dn=function(r,t){return mn(t)||Nn(t)?(r[0]=t,r[1]=0,r):0!==t&&hn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var wn=function(r,t){return 1===arguments.length?dn([0,0],r):dn(r,t)},An=Rr;var _n=function(r){var t=An(r);return(t=(2146435072&t)>>>20)-1023|0},gn=Ut,jn=et,Un=N,On=Dt,In=function(r,t){var n,e;return yn(bn,r),n=bn[0],n&=2147483647,e=pn(t),sn(n|=e&=2147483648,bn[1])},Sn=wn,En=_n,Tn=en,Fn=ln,Pn=[0,0],Hn=[0,0];var Gn=function(r,t){var n,e;return 0===t||0===r||Un(r)||On(r)?r:(Sn(Pn,r),t+=Pn[1],(t+=En(r=Pn[0]))<-1074?In(0,r):t>1023?r<0?jn:gn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Tn(Hn,r),n=Hn[0],n&=2148532223,e*Fn(n|=t+1023<<20,Hn[1])))};var kn=Gn,Mn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Vn=N,xn=qt,Ln=et,Wn=Ut,qn=function(r,t,n){var e,o,u;return u=(e=r-t)-(o=e*e)*Mn(o),kn(1-(t-e*u/(2-u)-r),n)},Yn=1.4426950408889634,Bn=1/(1<<28);var Cn=function(r){var t;return Vn(r)||r===Wn?r:r===Ln?0:r>709.782712893384?Wn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Bn?1+r:(t=xn(r<0?Yn*r-.5:Yn*r+.5),qn(r-.6931471803691238*t,1.9082149292705877e-10*t,t))},zn=Mt,Dn=N,Jn=Cn;var Kn=h,Qn=Mt,Rn=N,Xn=Cn;var Zn=function(r,t){return Dn(r)||!zn(t)?NaN:1-t+t*Jn(r)};b(Zn,"factory",(function(r){return Qn(r)?function(t){if(Rn(t))return NaN;return 1-r+r*Xn(t)}:Kn(NaN)}));var $n=Zn,re=N;var te=h,ne=N;var ee=function(r,t){return re(r)||re(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0};b(ee,"factory",(function(r){return ne(r)||r<0||r>1?te(NaN):function(t){if(ne(t))return NaN;if(0===t)return 1-r;if(1===t)return r;return 0}}));var oe=ee,ue=N;var ie=h,ae=N;var fe=function(r,t){return ue(t)||ue(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1};b(fe,"factory",(function(r){return ae(r)||r<0||r>1?ie(NaN):function(t){if(ae(t)||t<0||t>1)return NaN;if(t<=1-r)return 0;return 1}}));var ce=fe,ve=l,le=b,ye=j,pe=ar.isPrimitive,se=bt,be=mt,Ne=dt,me=At,he=gt,de=Tt,we=Ht,Ae=kt,_e=_,ge=$n,je=oe,Ue=ce;function Oe(){var r;if(!(this instanceof Oe))return 0===arguments.length?new Oe:new Oe(arguments[0]);if(arguments.length){if(!pe(r=arguments[0]))throw new TypeError("invalid argument. Mean parameter `p` must be a probability. Value: `"+r+"`")}else r=.5;return ve(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!pe(t))throw new TypeError("invalid value. Must be a probability. Value: `"+t+"`");r=t}}),this}ye(Oe.prototype,"entropy",(function(){return se(this.p)})),ye(Oe.prototype,"kurtosis",(function(){return be(this.p)})),ye(Oe.prototype,"mean",(function(){return Ne(this.p)})),ye(Oe.prototype,"median",(function(){return he(this.p)})),ye(Oe.prototype,"mode",(function(){return me(this.p)})),ye(Oe.prototype,"skewness",(function(){return de(this.p)})),ye(Oe.prototype,"stdev",(function(){return we(this.p)})),ye(Oe.prototype,"variance",(function(){return Ae(this.p)})),le(Oe.prototype,"cdf",(function(r){return _e(r,this.p)})),le(Oe.prototype,"mgf",(function(r){return ge(r,this.p)})),le(Oe.prototype,"pmf",(function(r){return je(r,this.p)})),le(Oe.prototype,"quantile",(function(r){return Ue(r,this.p)}));var Ie=Oe,Se=p,Ee={};return Se(Ee,"cdf",_),Se(Ee,"Bernoulli",Ie),Se(Ee,"entropy",bt),Se(Ee,"kurtosis",mt),Se(Ee,"mean",dt),Se(Ee,"median",gt),Se(Ee,"mgf",$n),Se(Ee,"mode",At),Se(Ee,"pmf",oe),Se(Ee,"quantile",ce),Se(Ee,"skewness",Tt),Se(Ee,"stdev",Ht),Se(Ee,"variance",kt),Ee}));
//# sourceMappingURL=bundle.js.map
