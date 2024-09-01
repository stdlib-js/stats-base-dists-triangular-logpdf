"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=m(function(z,p){
var s=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-ln/dist'),l=require('@stdlib/constants-float64-ninf/dist'),N=require('@stdlib/constants-float64-ln-two/dist');function O(e,r,n,i){var o,v,a;return s(e)||s(r)||s(n)||s(i)||r>i||i>n?NaN:e<r?l:(o=u(n-r)+u(i-r),v=u(n-r),a=u(n-r)+u(n-i),e<i?N+u(e-r)-o:e===i?N-v:e<=n?N+u(n-e)-a:l)}p.exports=O
});var I=m(function(A,g){
var R=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-ninf/dist'),d=require('@stdlib/constants-float64-ln-two/dist');function h(e,r,n){var i,o,v;if(q(e)||q(r)||q(n)||e>n||n>r)return R(NaN);return i=f(r-e)+f(n-e),o=f(r-e),v=f(r-e)+f(r-n),a;function a(t){return q(t)?NaN:t<e?F:t<n?d+f(t-e)-i:t===n?d-o:t<=r?d+f(r-t)-v:F}}g.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=y(),k=I();j(L,"factory",k);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
