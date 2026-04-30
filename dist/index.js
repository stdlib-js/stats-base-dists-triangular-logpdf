"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=l(function(A,m){
var o=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ninf/dist'),s=require('@stdlib/constants-float64-ln-two/dist');function R(e,r,n,i){return o(e)||o(r)||o(n)||o(i)||r>i||i>n?NaN:e<r?p:e<i?s+u(e-r)-u(n-r)-u(i-r):e===i?s-u(n-r):e<=n?s+u(n-e)-u(n-r)-u(n-i):p}m.exports=R
});var I=l(function(B,g){
var h=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-ninf/dist'),q=require('@stdlib/constants-float64-ln-two/dist');function j(e,r,n){var i,N,d,v;if(a(e)||a(r)||a(n)||e>n||n>r)return h(NaN);return v=f(r-e),i=v+f(n-e),N=v,d=v+f(r-n),O;function O(t){return a(t)?NaN:t<e?F:t<n?q+f(t-e)-i:t===n?q-N:t<=r?q+f(r-t)-d:F}}g.exports=j
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=y(),w=I();k(L,"factory",w);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
