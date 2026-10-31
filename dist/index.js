"use strict";var l=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var y=l(function(A,m){
var o=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ninf/dist'),s=require('@stdlib/constants-float64-ln-two/dist');function R(n,r,e,i){return o(n)||o(r)||o(e)||o(i)||r>i||i>e?NaN:n<r?p:n<i?s+u(n-r)-u(e-r)-u(i-r):n===i?s-u(e-r):n<=e?s+u(e-n)-u(e-r)-u(e-i):p}m.exports=R
});var I=l(function(B,g){
var h=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-ninf/dist'),q=require('@stdlib/constants-float64-ln-two/dist');function j(n,r,e){var i,N,d,v;if(a(n)||a(r)||a(e)||n>e||e>r)return h(NaN);return v=f(r-n),i=v+f(e-n),N=v,d=v+f(r-e),O;function O(t){return a(t)?NaN:t<n?F:t<e?q+f(t-n)-i:t===e?q-N:t<=r?q+f(r-t)-d:F}}g.exports=j
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=y(),w=I();k(L,"factory",w);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
