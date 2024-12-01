// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function d(t,i,d,m){var o,a,l;return n(t)||n(i)||n(d)||n(m)||i>m||m>d?NaN:t<i?e:(o=s(d-i)+s(m-i),a=s(d-i),l=s(d-i)+s(d-m),t<m?r+s(t-i)-o:t===m?r-a:t<=d?r+s(d-t)-l:e)}function m(t,d,m){var o,a,l;return n(t)||n(d)||n(m)||t>m||m>d?i(NaN):(o=s(d-t)+s(m-t),a=s(d-t),l=s(d-t)+s(d-m),function(i){if(n(i))return NaN;if(i<t)return e;if(i<m)return r+s(i-t)-o;if(i===m)return r-a;if(i<=d)return r+s(d-i)-l;return e})}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
