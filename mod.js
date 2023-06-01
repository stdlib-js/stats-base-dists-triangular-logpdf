// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,y,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((y="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,p="set"in n,y&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function y(r){return r!=r}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var b,A="function"==typeof Symbol?Symbol.toStringTag:"";b=l&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return p.call(r);n=r[A],a=A,t=null!=(o=r)&&v.call(o,a);try{r[A]=void 0}catch(t){return p.call(r)}return e=p.call(r),t?r[A]=n:delete r[A],e}:function(r){return p.call(r)};var _=b,w="function"==typeof Uint32Array;var m="function"==typeof Uint32Array?Uint32Array:null;var d,U="function"==typeof Uint32Array?Uint32Array:void 0;d=function(){var r,t,n;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(w&&n instanceof Uint32Array||"[object Uint32Array]"===_(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?U:function(){throw new Error("not implemented")};var s=d,j="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var N,g="function"==typeof Float64Array?Float64Array:void 0;N=function(){var r,t,n;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,NaN]),n=t,r=(j&&n instanceof Float64Array||"[object Float64Array]"===_(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")};var S=N,E="function"==typeof Uint8Array;var F="function"==typeof Uint8Array?Uint8Array:null;var O,T="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,256,257]),n=t,r=(E&&n instanceof Uint8Array||"[object Uint8Array]"===_(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var P=O,I="function"==typeof Uint16Array;var x="function"==typeof Uint16Array?Uint16Array:null;var G,V="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,65536,65537]),n=t,r=(I&&n instanceof Uint16Array||"[object Uint16Array]"===_(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var k,C={uint16:G,uint8:P};(k=new C.uint16(1))[0]=4660;var Y=52===new C.uint8(k.buffer)[0],q=!0===Y?1:0,z=new S(1),B=new s(z.buffer);function D(r){return z[0]=r,B[q]}var H=!0===Y?1:0,J=new S(1),K=new s(J.buffer);var L=Number.NEGATIVE_INFINITY;var M=.6931471803691238,Q=1.9082149292705877e-10;function R(r){var t,n,e,o,a,i,u,f,c,l,p,v;return 0===r?L:y(r)||r<0?NaN:(a=0,(n=D(r))<1048576&&(a-=54,n=D(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,t){return J[0]=r,K[H]=t>>>0,J[0]}(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===a?0:a*M+a*Q:(i=u*u*(.5-.3333333333333333*u),0===a?u-i:a*M-(i-a*Q-u)):(f=n-398458|0,c=440401-n|0,o=(p=(v=(l=u/(2+u))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+o,(f|=c)>0?(t=.5*u*u,0===a?u-(t-l*(t+i)):a*M-(t-(l*(t+i)+a*Q)-u)):0===a?u-l*(u-i):a*M-(l*(u-i)-a*Q-u))))}var W=.6931471805599453;function X(r,t,n,e){var o,a,i;return y(r)||y(t)||y(n)||y(e)||t>e||e>n?NaN:r<t?L:(o=R(n-t)+R(e-t),a=R(n-t),i=R(n-t)+R(n-e),r<e?W+R(r-t)-o:r===e?W-a:r<=n?W+R(n-r)-i:L)}function Z(r,t,n){var e,o,a,i;return y(r)||y(t)||y(n)||r>n||n>t?(i=NaN,function(){return i}):(e=R(t-r)+R(n-r),o=R(t-r),a=R(t-r)+R(t-n),function(i){if(y(i))return NaN;if(i<r)return L;if(i<n)return W+R(i-r)-e;if(i===n)return W-o;if(i<=t)return W+R(t-i)-a;return L})}c(X,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Z});export{X as default,Z as factory};
//# sourceMappingURL=mod.js.map