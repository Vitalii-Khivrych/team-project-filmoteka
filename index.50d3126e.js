!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},a=t.parcelRequire62bd;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire62bd=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("3SEMc",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return a("a0wpL").Q})),e(t.exports,"signInWithPopup",(function(){return a("a0wpL").c})),e(t.exports,"getAuth",(function(){return a("a0wpL").n})),e(t.exports,"signOut",(function(){return a("a0wpL").y})),e(t.exports,"onAuthStateChanged",(function(){return a("a0wpL").v})),a("eMcUM")})),a.register("eMcUM",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return a("a0wpL").Q})),e(t.exports,"getAuth",(function(){return a("a0wpL").n})),e(t.exports,"onAuthStateChanged",(function(){return a("a0wpL").v})),e(t.exports,"signInWithPopup",(function(){return a("a0wpL").c})),e(t.exports,"signOut",(function(){return a("a0wpL").y})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("a0wpL")})),a.register("2xDiJ",(function(t,r){e(t.exports,"base64urlEncodeWithoutPadding",(function(){return h})),e(t.exports,"base64Decode",(function(){return v})),e(t.exports,"Deferred",(function(){return m})),e(t.exports,"getUA",(function(){return g})),e(t.exports,"isMobileCordova",(function(){return b})),e(t.exports,"isBrowserExtension",(function(){return y})),e(t.exports,"isReactNative",(function(){return k})),e(t.exports,"isIE",(function(){return _})),e(t.exports,"isIndexedDBAvailable",(function(){return w})),e(t.exports,"validateIndexedDBOpenable",(function(){return x})),e(t.exports,"FirebaseError",(function(){return I})),e(t.exports,"ErrorFactory",(function(){return E})),e(t.exports,"isEmpty",(function(){return S})),e(t.exports,"deepEqual",(function(){return L})),e(t.exports,"querystring",(function(){return M})),e(t.exports,"querystringDecode",(function(){return C})),e(t.exports,"extractQuerystring",(function(){return N})),e(t.exports,"createSubscribe",(function(){return R})),e(t.exports,"getModularInstance",(function(){return j}));var i=a("ds8z5"),o=a("8MBJY"),s=a("a2hTj"),u=a("eYQtU"),c=a("1t1Wn"),l=(a("8nrFW"),a("4c7YB")),f=a("2MbLg"),d=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(d=64)),r.push(n[l],n[f],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(d(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){return function(e){var t=d(e);return p.encodeByteArray(t,!0)}(e).replace(/\./g,"")},v=function(e){try{return p.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var m=function(){"use strict";function e(){var t=this;n(o)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return n(s)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function y(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function k(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function _(){var e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return"object"==typeof indexedDB}function x(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var I=function(e){"use strict";n(u)(r,e);var t=n(f)(r);function r(e,a,s){var u;return n(o)(this,r),(u=t.call(this,a)).code=e,u.customData=s,u.name="FirebaseError",Object.setPrototypeOf(n(i)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(n(i)(u),E.prototype.create),u}return r}(n(l)(Error)),E=function(){"use strict";function e(t,r,i){n(o)(this,e),this.service=t,this.serviceName=r,this.errors=i}return n(s)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?O(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new I(a,u,i);return c}}]),e}();function O(e,t){return e.replace(T,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(A(l)&&A(f)){if(!L(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function A(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=n(c)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){t.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return t.length?"&"+t.join("&"):""}function C(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=n(c)(e.split("="),2),i=r[0],a=r[1];t[decodeURIComponent(i)]=decodeURIComponent(a)}})),t}function N(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){var n=new P(e,t);return n.subscribe.bind(n)}var P=function(){"use strict";function e(t,r){var i=this;n(o)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){t(i)})).catch((function(e){i.error(e)}))}return n(s)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=s(a("8slrw")),r=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=s(a("kMC0W")),r=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(a("ge8co")),r=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return n.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("MjY8E",(function(t,r){e(t.exports,"_registerComponent",(function(){return O})),e(t.exports,"_getProvider",(function(){return T})),e(t.exports,"SDK_VERSION",(function(){return M})),e(t.exports,"initializeApp",(function(){return C})),e(t.exports,"getApp",(function(){return N})),e(t.exports,"registerVersion",(function(){return R}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),f=a("6ExWU"),d=a("kZfxc"),p=a("2xDiJ"),h=a("ajgRO"),v=(p=a("2xDiJ"),function(){"use strict";function e(t){n(o)(this,e),this.container=t}return n(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var m,g,b="@firebase/app",y="0.7.27",k=new(0,d.Logger)("@firebase/app"),_="[DEFAULT]",w=(m={},n(u)(m,b,"fire-core"),n(u)(m,"@firebase/app-compat","fire-core-compat"),n(u)(m,"@firebase/analytics","fire-analytics"),n(u)(m,"@firebase/analytics-compat","fire-analytics-compat"),n(u)(m,"@firebase/app-check","fire-app-check"),n(u)(m,"@firebase/app-check-compat","fire-app-check-compat"),n(u)(m,"@firebase/auth","fire-auth"),n(u)(m,"@firebase/auth-compat","fire-auth-compat"),n(u)(m,"@firebase/database","fire-rtdb"),n(u)(m,"@firebase/database-compat","fire-rtdb-compat"),n(u)(m,"@firebase/functions","fire-fn"),n(u)(m,"@firebase/functions-compat","fire-fn-compat"),n(u)(m,"@firebase/installations","fire-iid"),n(u)(m,"@firebase/installations-compat","fire-iid-compat"),n(u)(m,"@firebase/messaging","fire-fcm"),n(u)(m,"@firebase/messaging-compat","fire-fcm-compat"),n(u)(m,"@firebase/performance","fire-perf"),n(u)(m,"@firebase/performance-compat","fire-perf-compat"),n(u)(m,"@firebase/remote-config","fire-rc"),n(u)(m,"@firebase/remote-config-compat","fire-rc-compat"),n(u)(m,"@firebase/storage","fire-gcs"),n(u)(m,"@firebase/storage-compat","fire-gcs-compat"),n(u)(m,"@firebase/firestore","fire-fst"),n(u)(m,"@firebase/firestore-compat","fire-fst-compat"),n(u)(m,"fire-js","fire-js"),n(u)(m,"firebase","fire-js-all"),m),x=new Map,I=new Map;function E(e,t){try{e.container.addComponent(t)}catch(n){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function O(e){var t=e.name;if(I.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;I.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=x.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){E(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function T(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var S=(g={},n(u)(g,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),n(u)(g,"bad-app-name","Illegal App name: '{$appName}"),n(u)(g,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),n(u)(g,"app-deleted","Firebase App named '{$appName}' already deleted"),n(u)(g,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),n(u)(g,"invalid-log-argument","First argument to `onLog` must be null or a function."),n(u)(g,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),n(u)(g,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),n(u)(g,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),n(u)(g,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),g),L=new(0,p.ErrorFactory)("app","Firebase",S),A=function(){"use strict";function e(t,r,i){var a=this;n(o)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,f.Component)("app",(function(){return a}),"PUBLIC"))}return n(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}]),e}(),M="9.8.4";function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:_,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw L.create("bad-app-name",{appName:String(i)});var a=x.get(i);if(a){if((0,p.deepEqual)(e,a.options)&&(0,p.deepEqual)(r,a.config))return a;throw L.create("duplicate-app",{appName:i})}var o=new(0,f.ComponentContainer)(i),s=!0,u=!1,c=void 0;try{for(var l,d=I.values()[Symbol.iterator]();!(s=(l=d.next()).done);s=!0){var h=l.value;o.addComponent(h)}}catch(e){u=!0,c=e}finally{try{s||null==d.return||d.return()}finally{if(u)throw c}}var v=new A(e,r,o);return x.set(i,v),v}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=x.get(e);if(!t)throw L.create("no-app",{appName:e});return t}function R(e,t,n){var r,i=null!==(r=w[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(s.join(" "))}O(new(0,f.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var P="firebase-heartbeat-store",D=null;function j(){return D||(D=(0,h.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(P)}}).catch((function(e){throw L.create("storage-open",{originalErrorMessage:e.message})}))),D}function U(e){return F.apply(this,arguments)}function F(){return(F=n(i)(n(l).mark((function e(t){var r,i;return n(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,j();case 4:return i=e.sent,e.abrupt("return",i.transaction(P).objectStore(P).get(H(t)));case 8:throw e.prev=8,e.t0=e.catch(1),L.create("storage-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function V(e,t){return B.apply(this,arguments)}function B(){return(B=n(i)(n(l).mark((function e(t,r){var i,a,o,s;return n(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,j();case 4:return a=e.sent,o=a.transaction(P,"readwrite"),s=o.objectStore(P),e.next=9,s.put(r,H(t));case 9:return e.abrupt("return",o.done);case 12:throw e.prev=12,e.t0=e.catch(1),L.create("storage-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function H(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W=function(){"use strict";function e(t){var r=this;n(o)(this,e),this.container=t,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new J(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return n(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r,i,a;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=q(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),t)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r,i,a,o,s;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=q(),i=z(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,p.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),t)})))()}}]),e}();function q(){return(new Date).toISOString().substring(0,10)}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),G(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),G(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var K,J=function(){"use strict";function e(t){n(o)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return n(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return n(i)(n(l).mark((function e(){return n(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,p.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,U(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),t)})))()}},{key:"overwrite",value:function(e){var t=this;return n(i)(n(l).mark((function r(){var i,a;return n(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,t.read();case 10:return a=n.sent,n.abrupt("return",V(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return n.stop()}}),r)})))()}},{key:"add",value:function(e){var t=this;return n(i)(n(l).mark((function r(){var i,a;return n(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,t.read();case 10:return a=r.sent,r.abrupt("return",V(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:n(c)(a.heartbeats).concat(n(c)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function G(e){return(0,p.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */K="",O(new(0,f.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),O(new(0,f.Component)("heartbeat",(function(e){return new W(e)}),"PRIVATE")),R(b,y,K),R(b,y,"esm2017"),R("fire-js","")})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new S(r||[]);return a._invoke=function(e,t,n){var r=f;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw a;return A()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=E(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?h:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function m(){}function g(){}function b(){}var y={};u(y,a,(function(){return this}));var k=Object.getPrototypeOf,_=k&&k(k(L([])));_&&_!==n&&r.call(_,a)&&(y=_);var w=b.prototype=m.prototype=Object.create(y);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:A}}function A(){return{value:t,done:!0}}return g.prototype=b,u(w,"constructor",b),u(b,"constructor",g),g.displayName=u(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},x(I.prototype),u(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new I(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(w),u(w,s,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("6ExWU",(function(t,r){e(t.exports,"Component",(function(){return d})),e(t.exports,"ComponentContainer",(function(){return v}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),f=a("2xDiJ"),d=function(){"use strict";function e(t,r,i){n(o)(this,e),this.name=t,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return n(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),p="[DEFAULT]",h=function(){"use strict";function e(t,r){n(o)(this,e),this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return n(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,f.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:p})}catch(e){}var t=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=n(u)(a.value,2),c=s[0],l=s[1],f=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:f});l.resolve(d)}catch(e){}}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Array.from(e.instances.values()),t.next=3,Promise.all(n(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(n(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return t.stop()}}),t)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,f=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var d=n(u)(l.value,2),p=d[0],h=d[1],v=this.normalizeInstanceIdentifier(p);i===v&&h.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===p?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.component?this.component.multipleInstances?e:p:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var v=function(){"use strict";function e(t){n(o)(this,e),this.name=t,this.providers=new Map}return n(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new h(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),a.register("kZfxc",(function(t,r){e(t.exports,"LogLevel",(function(){return i})),e(t.exports,"Logger",(function(){return g})),e(t.exports,"setLogLevel",(function(){return b})),e(t.exports,"setUserLogHandler",(function(){return y}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),f=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var d,p={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},h=i.INFO,v=(d={},n(c)(d,i.DEBUG,"log"),n(c)(d,i.VERBOSE,"log"),n(c)(d,i.INFO,"info"),n(c)(d,i.WARN,"warn"),n(c)(d,i.ERROR,"error"),d),m=function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(t<e.logLevel)){var s=(new Date).toISOString(),u=v[t];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(n(l)(i)))}},g=function(){"use strict";function e(t){n(s)(this,e),this.name=t,this._logLevel=h,this._logHandler=m,this._userLogHandler=null,f.push(this)}return n(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?p[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(n(l)(t))),this._logHandler.apply(this,[this,i.DEBUG].concat(n(l)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(n(l)(t))),this._logHandler.apply(this,[this,i.VERBOSE].concat(n(l)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(n(l)(t))),this._logHandler.apply(this,[this,i.INFO].concat(n(l)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(n(l)(t))),this._logHandler.apply(this,[this,i.WARN].concat(n(l)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(n(l)(t))),this._logHandler.apply(this,[this,i.ERROR].concat(n(l)(t)))}}]),e}();function b(e){f.forEach((function(t){t.setLogLevel(e)}))}function y(e,t){var n=!0,r=!1,a=void 0;try{for(var o,s=f[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,c=null;t&&t.level&&(c=p[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}})),a.register("ajgRO",(function(t,r){e(t.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var f=["get","getKey","getAll","getAllKeys","count"],d=["put","add","delete","clear"],p=new Map;function h(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(p.get(t))return p.get(t);var r=t.replace(/FromIndex$/,""),a=t!==r,o=d.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||f.includes(r))){var c,l=(c=n(i)(n(u).mark((function e(t){var i,c,l,f,d,p,h=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=h.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=h[l];return d=this.transaction(t,o?"readwrite":"readonly"),p=d.store,a&&(p=p.index(c.shift())),e.next=7,Promise.all([(f=p)[r].apply(f,n(s)(c)),o&&d.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return p.set(t,l),l}}}(0,c.r)((function(e){return n(o)({},e,{get:function(t,n,r){return h(t,n)||e.get(t,n,r)},has:function(t,n){return!!h(t,n)||e.has(t,n)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("kKOTz",(function(t,r){e(t.exports,"w",(function(){return g})),e(t.exports,"r",(function(){return h}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap;var p={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function h(e){p=e(p)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(b(this),n),g(u.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(e.apply(b(this),n))}:function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,u=(o=e).call.apply(o,[b(this),t].concat(n(s)(i)));return l.set(u,t.sort?t.sort():[t]),g(u)}}function m(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,p):e);var t}function g(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(g(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),d.set(n,t),n;var t,n;if(f.has(e))return f.get(e);var r=m(e);return r!==e&&(f.set(e,r),d.set(r,e)),r}var b=function(e){return d.get(e)}})),a.register("a0wpL",(function(t,r){e(t.exports,"Q",(function(){return bt})),e(t.exports,"v",(function(){return Mt})),e(t.exports,"y",(function(){return Ct})),e(t.exports,"c",(function(){return In})),e(t.exports,"n",(function(){return br}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),f=a("fVNic"),d=a("eYQtU"),p=a("1t1Wn"),h=a("8nrFW"),v=a("2MbLg"),m=a("2TvXO"),g=a("2xDiJ"),b=a("MjY8E"),y=a("4tSb9"),k=a("kZfxc"),_=a("6ExWU");function w(){return n(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var x=w,I=new(0,g.ErrorFactory)("auth","Firebase",w()),E=new(0,k.Logger)("@firebase/auth");function O(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a;E.logLevel<=k.LogLevel.ERROR&&(a=E).error.apply(a,["Auth (".concat(b.SDK_VERSION,"): ").concat(e)].concat(n(h)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];throw M.apply(void 0,[e].concat(n(h)(r)))}function S(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return M.apply(void 0,[e].concat(n(h)(r)))}function L(e,t,r){var i=Object.assign(Object.assign({},x()),n(c)({},t,r));return new(0,g.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function A(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&T(e,"argument-error"),L(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function M(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=n(h)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(n(h)(u)))}return(a=I).create.apply(a,[e].concat(n(h)(r)))}function C(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw M.apply(void 0,[t].concat(n(h)(i)))}function N(e){var t="INTERNAL ASSERTION FAILED: "+e;throw O(t),new Error(t)}function R(e,t){e||N(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P=new Map;function D(e){R(e instanceof Function,"Expected a class definition");var t=P.get(e);return t?(R(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,P.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){var n=(0,b._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,g.deepEqual)(i,null!=t?t:{}))return r;T(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function F(){return"http:"===V()||"https:"===V()}function V(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var B=function(){"use strict";function e(t,r){n(s)(this,e),this.shortDelay=t,this.longDelay=r,R(r>t,"Short delay should be less than long delay!"),this.isMobile=(0,g.isMobileCordova)()||(0,g.isReactNative)()}return n(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(F()||(0,g.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){R(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W,q=function(){"use strict";function e(){n(s)(this,e)}return n(u)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void N("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void N("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void N("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),z=(W={},n(c)(W,"CREDENTIAL_MISMATCH","custom-token-mismatch"),n(c)(W,"MISSING_CUSTOM_TOKEN","internal-error"),n(c)(W,"INVALID_IDENTIFIER","invalid-email"),n(c)(W,"MISSING_CONTINUE_URI","internal-error"),n(c)(W,"INVALID_PASSWORD","wrong-password"),n(c)(W,"MISSING_PASSWORD","internal-error"),n(c)(W,"EMAIL_EXISTS","email-already-in-use"),n(c)(W,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),n(c)(W,"INVALID_IDP_RESPONSE","invalid-credential"),n(c)(W,"INVALID_PENDING_TOKEN","invalid-credential"),n(c)(W,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),n(c)(W,"MISSING_REQ_TYPE","internal-error"),n(c)(W,"EMAIL_NOT_FOUND","user-not-found"),n(c)(W,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),n(c)(W,"EXPIRED_OOB_CODE","expired-action-code"),n(c)(W,"INVALID_OOB_CODE","invalid-action-code"),n(c)(W,"MISSING_OOB_CODE","internal-error"),n(c)(W,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),n(c)(W,"INVALID_ID_TOKEN","invalid-user-token"),n(c)(W,"TOKEN_EXPIRED","user-token-expired"),n(c)(W,"USER_NOT_FOUND","user-token-expired"),n(c)(W,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),n(c)(W,"INVALID_CODE","invalid-verification-code"),n(c)(W,"INVALID_SESSION_INFO","invalid-verification-id"),n(c)(W,"INVALID_TEMPORARY_PROOF","invalid-credential"),n(c)(W,"MISSING_SESSION_INFO","missing-verification-id"),n(c)(W,"SESSION_EXPIRED","code-expired"),n(c)(W,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),n(c)(W,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),n(c)(W,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),n(c)(W,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),n(c)(W,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),n(c)(W,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),n(c)(W,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),n(c)(W,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),n(c)(W,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),n(c)(W,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),n(c)(W,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),W),K=new B(3e4,6e4);function J(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function G(e,t,n,r){return Y.apply(this,arguments)}function Y(){return Y=n(o)(n(m).mark((function e(t,r,i,a){var s,u=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",Q(t,s,n(o)(n(m).mark((function e(){var o,s,u,c;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=(0,g.querystring)(Object.assign({key:t.config.apiKey},s)).slice(1),e.next=6,t._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),e.abrupt("return",q.fetch()(ee(t,t.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function Q(e,t,n){return X.apply(this,arguments)}function X(){return(X=n(o)(n(m).mark((function e(t,r,i){var a,o,s,u,c,l,f,d,h;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,a=Object.assign(Object.assign({},z),r),e.prev=2,o=new te(t),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw ne(t,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=n(p)(c.split(" : "),2),f=l[0],d=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){e.next=23;break}throw ne(t,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){e.next=27;break}throw ne(t,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){e.next=29;break}throw ne(t,"user-disabled",u);case 29:if(h=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){e.next=34;break}throw L(t,h,d);case 34:T(t,h);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof g.FirebaseError)){e.next=41;break}throw e.t0;case 41:T(t,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function $(e,t,n,r){return Z.apply(this,arguments)}function Z(){return Z=n(o)(n(m).mark((function e(t,r,i,a){var o,s,u=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,G(t,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&T(t,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}function ee(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?H(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var te=function(){"use strict";function e(t){var r=this;n(s)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(S(n.auth,"network-request-failed"))}),K.get())}))}return n(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function ne(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=S(e,t,r);return i.customData._tokenResponse=n,i}function re(e,t){return ie.apply(this,arguments)}function ie(){return(ie=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(t,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,t){return oe.apply(this,arguments)}function oe(){return(oe=n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(t,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return ue=n(o)(n(m).mark((function e(t){var r,i,a,o,s,u,c=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,g.getModularInstance)(t),e.next=4,i.getIdToken(r);case 4:return a=e.sent,C((o=le(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:se(ce(o.auth_time)),issuedAtTime:se(ce(o.iat)),expirationTime:se(ce(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}function ce(e){return 1e3*Number(e)}function le(e){var t,r=n(p)(e.split("."),3),i=r[0],a=r[1],o=r[2];if(void 0===i||void 0===a||void 0===o)return O("JWT malformed, contained fewer than 3 sections"),null;try{var s=(0,g.base64Decode)(a);return s?JSON.parse(s):(O("Failed to decode base64 JWT payload"),null)}catch(e){return O("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}function fe(e,t){return de.apply(this,arguments)}function de(){return de=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t,r){var i=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof g.FirebaseError&&pe(e.t0))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),de.apply(this,arguments)}function pe(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he=function(){"use strict";function e(t){n(s)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return n(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),r=this;this.timerId=setTimeout(n(o)(n(m).mark((function e(){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),t)}}},{key:"iteration",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,e.user.getIdToken(!0);case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(r=t.t0)||void 0===r?void 0:r.code)&&e.schedule(!0),t.abrupt("return");case 10:e.schedule();case 11:case"end":return t.stop()}}),t,null,[[1,6]])})))()}}]),e}(),ve=function(){"use strict";function e(t,r){n(s)(this,e),this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}return n(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=se(this.lastLoginAt),this.creationTime=se(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){return ge.apply(this,arguments)}function ge(){return(ge=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t){var r,i,a,o,s,u,c,l,f,d,p;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.auth,e.next=4,t.getIdToken();case 4:return a=e.sent,e.next=7,fe(t,ae(i,{idToken:a}));case 7:C(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],t._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?ke(s.providerUserInfo):[],c=ye(t.providerData,u),l=t.isAnonymous,f=!(t.email&&s.passwordHash||(null==c?void 0:c.length)),d=!!l&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ve(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(t,p);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){return(be=n(o)(n(m).mark((function e(t){var r;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,g.getModularInstance)(t),e.next=3,me(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e,t){var r=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return n(h)(r).concat(n(h)(t))}function ke(e){return e.map((function(e){var t=e.providerId,n=(0,y.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function _e(e,t){return we.apply(this,arguments)}function we(){return(we=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t,r){var i;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t,{},n(o)(n(m).mark((function e(){var i,a,o,s,u,c;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,g.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=t.config,o=a.tokenApiHost,s=a.apiKey,u=ee(t,o,"/v1/token","key=".concat(s)),e.next=5,t._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",q.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe=function(){"use strict";function e(){n(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return n(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){C(e.idToken,"internal-error"),C(void 0!==e.idToken,"internal-error"),C(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,C(n=le(t),"internal-error"),C(void 0!==n.exp,"internal-error"),C(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(m).mark((function i(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(C(!r.accessToken||r.refreshToken,e,"user-token-expired"),t||!r.accessToken||r.isExpired){n.next=3;break}return n.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){n.next=7;break}return n.next=6,r.refresh(e,r.refreshToken);case 6:return n.abrupt("return",r.accessToken);case 7:return n.abrupt("return",null);case 8:case"end":return n.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var r=this;return n(o)(n(m).mark((function i(){var a,o,s,u;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_e(e,t);case 2:a=n.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return n.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return N("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(C("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(C("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(C("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){C("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ee=function(){"use strict";function e(t){n(s)(this,e);var r=t.uid,i=t.auth,a=t.stsTokenManager,o=(0,y.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new he(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?n(h)(o.providerData):[],this.metadata=new ve(o.createdAt||void 0,o.lastLoginAt||void 0)}return n(u)(e,[{key:"getIdToken",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fe(t,t.stsTokenManager.getToken(t.auth,e));case 2:if(C(i=n.sent,t.auth,"internal-error"),t.accessToken===i){n.next=9;break}return t.accessToken=i,n.next=8,t.auth._persistUserIfCurrent(t);case 8:t.auth._notifyListenersIfCurrent(t);case 9:return n.abrupt("return",i);case 10:case"end":return n.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ue.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return be.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(m).mark((function i(){var a;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!t){n.next=5;break}return n.next=5,me(r);case 5:return n.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return n.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,fe(e,re(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),t)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,p=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,b=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,y=n.uid,k=n.emailVerified,_=n.isAnonymous,w=n.providerData,x=n.stsTokenManager;C(y&&x,t,"internal-error");var I=xe.fromJSON(this.name,x);C("string"==typeof y,t,"internal-error"),Ie(f,t.name),Ie(d,t.name),C("boolean"==typeof k,t,"internal-error"),C("boolean"==typeof _,t,"internal-error"),Ie(p,t.name),Ie(h,t.name),Ie(v,t.name),Ie(m,t.name),Ie(g,t.name),Ie(b,t.name);var E=new e({uid:y,auth:t,email:d,emailVerified:k,displayName:f,isAnonymous:_,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:b});return w&&Array.isArray(w)&&(E.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(o)(n(m).mark((function a(){var o,s;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=new xe).updateFromServerResponse(r),s=new e({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:i}),n.next=5,me(s);case 5:return n.abrupt("return",s);case 6:case"end":return n.stop()}}),a)})))()}}]),e}(),Oe=function(){"use strict";function e(){n(s)(this,e),this.type="NONE",this.storage={}}return n(u)(e,[{key:"_isAvailable",value:function(){return n(o)(n(m).mark((function e(){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,t){var r=this;return n(o)(n(m).mark((function i(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.storage[e]=t;case 1:case"end":return n.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.storage[e],n.abrupt("return",void 0===i?null:i);case 2:case"end":return n.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:delete t.storage[e];case 1:case"end":return n.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe.type="NONE";var Te=Oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Le=function(){"use strict";function e(t,r,i){n(s)(this,e),this.persistence=t,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Se(this.userKey,o.apiKey,u),this.fullPersistenceKey=Se("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return n(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?Ee._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),t)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.persistence!==e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.getCurrentUser();case 4:return i=n.sent,n.next=7,t.removeCurrentUser();case 7:if(t.persistence=e,!i){n.next=10;break}return n.abrupt("return",t.setCurrentUser(i));case 10:case"end":return n.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return n(o)(n(m).mark((function a(){var s,u,c,l,f,d,p,h,v,g,b,y,k;return n(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(D(Te),t,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=n(o)(n(m).mark((function e(t){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||D(Te),c=Se(i,t.config.apiKey,t.name),l=null,f=!0,d=!1,p=void 0,a.prev=9,h=r[Symbol.iterator]();case 11:if(f=(v=h.next()).done){a.next=29;break}return g=v.value,a.prev=13,a.next=16,g._get(c);case 16:if(!(b=a.sent)){a.next=22;break}return y=Ee._fromJSON(t,b),g!==u&&(l=y),u=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),d=!0,p=a.t1;case 35:a.prev=35,a.prev=36,f||null==h.return||h.return();case 38:if(a.prev=38,!d){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new e(u,t,i));case 46:if(u=k[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=n(o)(n(m).mark((function e(t){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===u){e.next=8;break}return e.prev=1,e.next=4,t._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,t,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Re(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(De(t))return"Blackberry";if(je(t))return"Webos";if(Ce(t))return"Safari";if((t.includes("chrome/")||Ne(t))&&!t.includes("edge/"))return"Chrome";if(Pe(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/firefox\//i.test(e)}function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/crios\//i.test(e)}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iemobile/i.test(e)}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/android/i.test(e)}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/blackberry/i.test(e)}function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/webos/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iphone|ipad|ipod/i.test(e)}function Fe(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ve(){return(0,g.isIE)()&&10===document.documentMode}function Be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(e)||Pe(e)||je(e)||De(e)||/windows phone/i.test(e)||Re(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ae((0,g.getUA)());break;case"Worker":t="".concat(Ae((0,g.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(b.SDK_VERSION,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We=function(){"use strict";function e(t){n(s)(this,e),this.auth=t,this.queue=[]}return n(u)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a,o,s,u,c,l,f,d,p,h,v,g,b;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.auth.currentUser!==e){n.next=3;break}return n.abrupt("return");case 3:a=[],n.prev=4,o=!0,s=!1,u=void 0,n.prev=6,c=t.queue[Symbol.iterator]();case 8:if(o=(l=c.next()).done){n.next=16;break}return f=l.value,n.next=12,f(e);case 12:f.onAbort&&a.push(f.onAbort);case 13:o=!0,n.next=8;break;case 16:n.next=22;break;case 18:n.prev=18,n.t0=n.catch(6),s=!0,u=n.t0;case 22:n.prev=22,n.prev=23,o||null==c.return||c.return();case 25:if(n.prev=25,!s){n.next=28;break}throw u;case 28:return n.finish(25);case 29:return n.finish(22);case 30:n.next=53;break;case 32:for(n.prev=32,n.t1=n.catch(4),a.reverse(),d=!0,p=!1,h=void 0,n.prev=36,v=a[Symbol.iterator]();!(d=(g=v.next()).done);d=!0){b=g.value;try{b()}catch(e){}}n.next=44;break;case 40:n.prev=40,n.t2=n.catch(36),p=!0,h=n.t2;case 44:n.prev=44,n.prev=45,d||null==v.return||v.return();case 47:if(n.prev=47,!p){n.next=50;break}throw h;case 50:return n.finish(47);case 51:return n.finish(44);case 52:throw t.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=n.t1)||void 0===i?void 0:i.message});case 53:case"end":return n.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),qe=function(){"use strict";function e(t,r,i){n(s)(this,e),this.app=t,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ke(this),this.idTokenSubscription=new Ke(this),this.beforeStateQueue=new We(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}return n(u)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=D(t));var r=this;return this._initializationPromise=this.queue(n(o)(n(m).mark((function i(){var a,o;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._deleted){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,Le.create(r,e);case 5:if(r.persistenceManager=n.sent,!r._deleted){n.next=8;break}return n.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){n.next=16;break}return n.prev=9,n.next=12,r._popupRedirectResolver._initialize(r);case 12:n.next=16;break;case 14:n.prev=14,n.t0=n.catch(9);case 16:return n.next=18,r.initializeCurrentUser(t);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){n.next=21;break}return n.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return n.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),t)})))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a,o,s,u,c,l;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t.assertedPersistence.getCurrentUser();case 3:if(a=n.sent,o=a,s=!1,!e||!t.config.authDomain){n.next=15;break}return n.next=9,t.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=t.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,n.next=13,t.tryRedirectSignIn(e);case 13:l=n.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){n.next=17;break}return n.abrupt("return",t.directlySetCurrentUser(null));case 17:if(o._redirectEventId){n.next=33;break}if(!s){n.next=28;break}return n.prev=19,n.next=22,t.beforeStateQueue.runMiddleware(o);case 22:n.next=28;break;case 24:n.prev=24,n.t0=n.catch(19),o=a,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(n.t0)}));case 28:if(!o){n.next=32;break}return n.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 32:return n.abrupt("return",t.directlySetCurrentUser(null));case 33:return C(t._popupRedirectResolver,t,"argument-error"),n.next=36,t.getOrInitRedirectPersistenceManager();case 36:if(!t.redirectUser||t.redirectUser._redirectEventId!==o._redirectEventId){n.next=38;break}return n.abrupt("return",t.directlySetCurrentUser(o));case 38:return n.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return n.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=null,n.prev=1,n.next=4,t._popupRedirectResolver._completeRedirectFn(t,e,!0);case 4:i=n.sent,n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(1),n.next=11,t._setRedirectUser(null);case 11:return n.abrupt("return",i);case 12:case"end":return n.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,me(e);case 4:n.next=10;break;case 6:if(n.prev=6,n.t0=n.catch(1),"auth/network-request-failed"===(null===(i=n.t0)||void 0===i?void 0:i.code)){n.next=10;break}return n.abrupt("return",t.directlySetCurrentUser(null));case 10:return n.abrupt("return",t.directlySetCurrentUser(e));case 11:case"end":return n.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),t)})))()}},{key:"updateCurrentUser",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=e?(0,g.getModularInstance)(e):null)&&C(i.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),n.abrupt("return",t._updateCurrentUser(i&&i._clone(t)));case 3:case"end":return n.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(m).mark((function i(){return n(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&C(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),t){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),t)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),t)})))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue(n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.assertedPersistence.setPersistence(D(e));case 2:case"end":return n.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,g.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var r=this;return n(o)(n(m).mark((function i(){var a;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.getOrInitRedirectPersistenceManager(t);case 2:return a=n.sent,n.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return n.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.redirectPersistenceManager){n.next=9;break}return C(i=e&&D(e)||t._popupRedirectResolver,t,"argument-error"),n.next=5,Le.create(t,[D(i._redirectPersistence)],"redirectUser");case 5:return t.redirectPersistenceManager=n.sent,n.next=8,t.redirectPersistenceManager.getCurrentUser();case 8:t.redirectUser=n.sent;case 9:return n.abrupt("return",t.redirectPersistenceManager);case 10:case"end":return n.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a;return n(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t._isInitialized){r.next=4;break}return r.next=4,t.queue(n(o)(n(m).mark((function e(){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=t._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",t._currentUser);case 6:if((null===(a=t.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",t.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==t.currentUser){r.next=2;break}return r.abrupt("return",t.queue(n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.directlySetCurrentUser(e));case 1:case"end":return n.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return C(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.currentUser&&t.currentUser!==e&&(t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh()),t.currentUser=e,!e){n.next=7;break}return n.next=5,t.assertedPersistence.setCurrentUser(e);case 5:n.next=9;break;case 7:return n.next=9,t.assertedPersistence.removeCurrentUser();case 9:case"end":return n.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=He(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r,i,a;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),t.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=t.sent)&&(i["X-Firebase-Client"]=a),t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e){return(0,g.getModularInstance)(e)}var Ke=function(){"use strict";function e(t){var r=this;n(s)(this,e),this.auth=t,this.observer=null,this.addObserver=(0,g.createSubscribe)((function(e){return r.observer=e}))}return n(u)(e,[{key:"next",get:function(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Je=function(){"use strict";function e(t,r){n(s)(this,e),this.providerId=t,this.signInMethod=r}return n(u)(e,[{key:"toJSON",value:function(){return N("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return N("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return N("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return N("not implemented")}}]),e}();function Ge(e,t){return Ye.apply(this,arguments)}function Ye(){return(Ye=n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(t,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qe(e,t){return Xe.apply(this,arguments)}function Xe(){return(Xe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithPassword",J(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $e(e,t){return Ze.apply(this,arguments)}function Ze(){return(Ze=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithEmailLink",J(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function et(e,t){return tt.apply(this,arguments)}function tt(){return(tt=n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithEmailLink",J(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(e,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return n(s)(this,r),(o=t.call(this,"password",a))._email=e,o._password=i,o._tenantId=u,o}return n(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=t.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",Qe(e,{returnSecureToken:!0,email:t._email,password:t._password}));case 4:return n.abrupt("return",$e(e,{email:t._email,oobCode:t._password}));case 5:T(e,"internal-error");case 6:case"end":return n.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,t){var r=this;return n(o)(n(m).mark((function i(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=r.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",Ge(e,{idToken:t,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return n.abrupt("return",et(e,{idToken:t,email:r._email,oobCode:r._password}));case 5:T(e,"internal-error");case 6:case"end":return n.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Je);function rt(e,t){return it.apply(this,arguments)}function it(){return(it=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithIdp",J(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(){var e;return n(s)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return n(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return rt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,rt(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,rt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,g.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):T("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=(0,y.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Je);function ot(e,t){return st.apply(this,arguments)}function st(){return(st=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(t,"POST","/v1/accounts:sendVerificationCode",J(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ut(){return(ut=n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithPhoneNumber",J(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ct(){return(ct=n(o)(n(m).mark((function e(t,r){var i;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(t,"POST","/v1/accounts:signInWithPhoneNumber",J(t,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw ne(t,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var lt=n(c)({},"USER_NOT_FOUND","user-not-found");function ft(){return(ft=n(o)(n(m).mark((function e(t,r){var i;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",$(t,"POST","/v1/accounts:signInWithPhoneNumber",J(t,i),lt));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(e){var i;return n(s)(this,r),(i=t.call(this,"phone","phone")).params=e,i}return n(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ut.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ct.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return ft.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Je);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt=function(){"use strict";function e(t){var r,i,a,o,u,c;n(s)(this,e);var l=(0,g.querystringDecode)((0,g.extractQuerystring)(t)),f=null!==(r=l.apiKey)&&void 0!==r?r:null,d=null!==(i=l.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);C(f&&d&&p,"argument-error"),this.apiKey=f,this.operation=p,this.code=d,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return n(u)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).link,n=t?(0,g.querystringDecode)((0,g.extractQuerystring)(t)).deep_link_id:null,r=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).deep_link_id;return(r?(0,g.querystringDecode)((0,g.extractQuerystring)(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ht=function(){"use strict";function e(){n(s)(this,e),this.providerId=e.PROVIDER_ID}return n(u)(e,null,[{key:"credential",value:function(e,t){return nt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=pt.parseLink(t);return C(n,"argument-error"),nt._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vt=function(){"use strict";function e(t){n(s)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return n(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),mt=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(){var e;return n(s)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return n(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return n(h)(this.scopes)}}]),r}(vt),gt=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(){return n(s)(this,r),t.call(this,"facebook.com")}return n(u)(r,null,[{key:"credential",value:function(e){return at._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(mt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt.FACEBOOK_SIGN_IN_METHOD="facebook.com",gt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bt=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(){var e;return n(s)(this,r),(e=t.call(this,"google.com")).addScope("profile"),e}return n(u)(r,null,[{key:"credential",value:function(e,t){return at._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(mt);bt.GOOGLE_SIGN_IN_METHOD="google.com",bt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yt=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(){return n(s)(this,r),t.call(this,"github.com")}return n(u)(r,null,[{key:"credential",value:function(e){return at._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(mt);yt.GITHUB_SIGN_IN_METHOD="github.com",yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var kt=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(){return n(s)(this,r),t.call(this,"twitter.com")}return n(u)(r,null,[{key:"credential",value:function(e,t){return at._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(mt);kt.TWITTER_SIGN_IN_METHOD="twitter.com",kt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _t=function(){"use strict";function e(t){n(s)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return n(u)(e,null,[{key:"_fromIdTokenResponse",value:function(t,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n(o)(n(m).mark((function o(){var s,u,c;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Ee._fromIdTokenResponse(t,i,a);case 2:return s=n.sent,u=wt(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),n.abrupt("return",c);case 6:case"end":return n.stop()}}),o)})))()}},{key:"_forOperation",value:function(t,r,i){return n(o)(n(m).mark((function a(){var o;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._updateTokensIfNecessary(i,!0);case 2:return o=wt(i),n.abrupt("return",new e({user:t,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return n.stop()}}),a)})))()}}]),e}();function wt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xt=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(e,a,o,u){var c,l;return n(s)(this,r),(c=t.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(n(i)(c),r.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return n(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(g.FirebaseError);function It(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw xt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,t){return Ot.apply(this,arguments)}function Ot(){return Ot=n(o)(n(m).mark((function e(t,r){var i,a,o=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=fe,e.t1=t,e.t2=r,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",_t._forOperation(t,"link",a));case 14:case"end":return e.stop()}}),e)}))),Ot.apply(this,arguments)}function Tt(e,t){return St.apply(this,arguments)}function St(){return St=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t,r){var i,a,o,s,u,c,l,f=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],o=t.auth,s="reauthenticate",e.prev=4,e.next=7,fe(t,It(o,s,r,t),i);case 7:return C((u=e.sent).idToken,o,"internal-error"),C(c=le(u.idToken),o,"internal-error"),l=c.sub,C(t.uid===l,o,"user-mismatch"),e.abrupt("return",_t._forOperation(t,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&T(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])}))),St.apply(this,arguments)}function Lt(e,t){return At.apply(this,arguments)}function At(){return At=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t,r){var i,a,o,s,u=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,It(t,a,r);case 4:return o=e.sent,e.next=7,_t._fromIdTokenResponse(t,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,t._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),At.apply(this,arguments)}function Mt(e,t,n,r){return(0,g.getModularInstance)(e).onAuthStateChanged(t,n,r)}function Ct(e){return(0,g.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:start",J(e,t))}new WeakMap;var Rt="__sak",Pt=function(){"use strict";function e(t,r){n(s)(this,e),this.storageRetriever=t,this.type=r}return n(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Rt,"1"),this.storage.removeItem(Rt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(){var e,i;return n(s)(this,r),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Ce(i=(0,g.getUA)())||Ue(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Be(),e._shouldAllowMigration=!0,e}return n(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Ve()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var i=this,a=this;return n(o)(n(m).mark((function o(){return n(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n(l)(n(f)(r.prototype),"_set",i).call(a,e,t);case 2:a.localCache[e]=JSON.stringify(t);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var t=this,i=this;return n(o)(n(m).mark((function a(){var o;return n(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(l)(n(f)(r.prototype),"_get",t).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var t=this,i=this;return n(o)(n(m).mark((function a(){return n(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(l)(n(f)(r.prototype),"_remove",t).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(Pt);Dt.type="LOCAL";var jt=Dt,Ut=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(){return n(s)(this,r),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return n(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Pt);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.type="SESSION";var Ft=Ut;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e){return Promise.all(e.map((t=n(o)(n(m).mark((function e(t){var r;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return t.apply(this,arguments)})));var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt=function(){"use strict";function e(t){n(s)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return n(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a,s,u,c,l,f,d;return n(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=t.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),f=Array.from(l).map(function(){var e=n(o)(n(m).mark((function e(t){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,Vt(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ht(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt.receivers=[];var Wt=function(){"use strict";function e(t){n(s)(this,e),this.target=t,this.handlers=new Set}return n(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return n(o)(n(m).mark((function a(){var o,s,u;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){n.next=3;break}throw new Error("connection_unavailable");case 3:return n.abrupt("return",new Promise((function(n,a){var c=Ht("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(e){var t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),n(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:t},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return n.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(){return void 0!==qt().WorkerGlobalScope&&"function"==typeof qt().importScripts}function Kt(){return Jt.apply(this,arguments)}function Jt(){return(Jt=n(o)(n(m).mark((function e(){var t;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gt="firebaseLocalStorageDb",Yt="firebaseLocalStorage",Qt="fbase_key",Xt=function(){"use strict";function e(t){n(s)(this,e),this.request=t}return n(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function $t(e,t){return e.transaction([Yt],t?"readwrite":"readonly").objectStore(Yt)}function Zt(){var e=indexedDB.deleteDatabase(Gt);return new Xt(e).toPromise()}function en(){var e=indexedDB.open(Gt,1);return new Promise((function(t,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Yt,{keyPath:Qt})}catch(e){r(e)}})),e.addEventListener("success",n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((i=e.result).objectStoreNames.contains(Yt)){n.next=12;break}return i.close(),n.next=5,Zt();case 5:return n.t0=t,n.next=8,en();case 8:n.t1=n.sent,(0,n.t0)(n.t1),n.next=13;break;case 12:t(i);case 13:case"end":return n.stop()}}),r)}))))}))}function tn(e,t,n){return nn.apply(this,arguments)}function nn(){return(nn=n(o)(n(m).mark((function e(t,r,i){var a,o;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=$t(t,!0).put((a={},n(c)(a,Qt,r),n(c)(a,"value",i),a)),e.abrupt("return",new Xt(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function rn(e,t){return an.apply(this,arguments)}function an(){return(an=n(o)(n(m).mark((function e(t,r){var i,a;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=$t(t,!1).get(r),e.next=3,new Xt(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function on(e,t){var n=$t(e,!0).delete(t);return new Xt(n).toPromise()}var sn=function(){"use strict";function e(){n(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return n(u)(e,[{key:"_openDb",value:function(){var e=this;return n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,en();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),t)})))()}},{key:"_withRetries",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=0;case 1:return n.prev=2,n.next=5,t._openDb();case 5:return a=n.sent,n.next=8,e(a);case 8:return n.abrupt("return",n.sent);case 11:if(n.prev=11,n.t0=n.catch(2),!(i++>3)){n.next=15;break}throw n.t0;case 15:t.db&&(t.db.close(),t.db=void 0);case 16:n.next=1;break;case 18:case"end":return n.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",zt()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),t)})))()}},{key:"initializeReceiver",value:function(){var e=this;return n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.receiver=Bt._getInstance(zt()?self:null),e.receiver._subscribe("keyChanged",function(){var t=n(o)(n(m).mark((function t(r,i){var a;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}},{key:"initializeSender",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r,i,a;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Kt();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Wt(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),t)})))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.sender&&t.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===t.activeServiceWorker)){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50);case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(2);case 9:case"end":return n.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return n(o)(n(m).mark((function e(){var t;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,en();case 5:return t=e.sent,e.next=8,tn(t,Rt,"1");case 8:return e.next=10,on(t,Rt);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.pendingWrites++,n.prev=1,n.next=4,e();case 4:return n.prev=4,t.pendingWrites--,n.finish(4);case 7:case"end":return n.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,t){var r=this;return n(o)(n(m).mark((function i(){return n(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(n(o)(n(m).mark((function i(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r._withRetries((function(n){return tn(n,e,t)}));case 2:return r.localCache[e]=t,n.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._withRetries((function(t){return rn(t,e)}));case 2:return i=n.sent,t.localCache[e]=i,n.abrupt("return",i);case 5:case"end":return n.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t._withPendingWrite(n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._withRetries((function(t){return on(t,e)}));case 2:return delete t.localCache[e],n.abrupt("return",t.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r,i,a,o,s,u,c,l,f,d,p,h,v,g,b,y,k;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=$t(e,!1).getAll();return new Xt(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)f=l.value,d=f.fbase_key,p=f.value,a.add(d),JSON.stringify(e.localCache[d])!==JSON.stringify(p)&&(e.notifyListeners(d,p),i.push(d));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(h=!0,v=!1,g=void 0,t.prev=27,b=Object.keys(e.localCache)[Symbol.iterator]();!(h=(y=b.next()).done);h=!0)k=y.value,e.localCache[k]&&!a.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,g=t.t1;case 35:t.prev=35,t.prev=36,h||null==b.return||b.return();case 38:if(t.prev=38,!v){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();sn.type="LOCAL";var un=sn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:start",J(e,t))}function ln(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=S("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function fn(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
fn("rcb"),new B(3e4,6e4);var dn="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(e,t,n){return hn.apply(this,arguments)}function hn(){return(hn=n(o)(n(m).mark((function e(t,r,i){var a,o,s,u,c,l,f,d;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,C("string"==typeof o,t,"argument-error"),C(i.type===dn,t,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return C("enroll"===u.type,t,"internal-error"),e.next=15,Nt(t,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return C("signin"===u.type,t,"internal-error"),C(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,t,"missing-multi-factor-info"),e.next=24,cn(t,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ot(t,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vn=function(){"use strict";function e(t){n(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=ze(t)}return n(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return pn(this.auth,e,(0,g.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return dt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?dt._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mn(e,t){return t?D(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.PROVIDER_ID="phone",vn.PHONE_SIGN_IN_METHOD="phone";var gn=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(e){var i;return n(s)(this,r),(i=t.call(this,"custom","custom")).params=e,i}return n(u)(r,[{key:"_getIdTokenResponse",value:function(e){return rt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return rt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return rt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Je);function bn(e){return Lt(e.auth,new gn(e),e.bypassAuthState)}function yn(e){var t=e.auth,n=e.user;return C(n,t,"internal-error"),Tt(n,new gn(e),e.bypassAuthState)}function kn(e){return _n.apply(this,arguments)}function _n(){return(_n=n(o)(n(m).mark((function e(t){var r,i;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.auth,C(i=t.user,r,"internal-error"),e.abrupt("return",Et(i,new gn(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wn=function(){"use strict";function e(t,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n(s)(this,e),this.auth=t,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return n(u)(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=n(o)(n(m).mark((function e(r,i){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a,o,s,u,c,l;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){n.next=4;break}return t.reject(u),n.abrupt("return");case 4:return l={auth:t.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:t.user,bypassAuthState:t.bypassAuthState},n.prev=5,n.t0=t,n.next=9,t.getIdpTask(c)(l);case 9:n.t1=n.sent,n.t0.resolve.call(n.t0,n.t1),n.next=16;break;case 13:n.prev=13,n.t2=n.catch(5),t.reject(n.t2);case 16:case"end":return n.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bn;case"linkViaPopup":case"linkViaRedirect":return kn;case"reauthViaPopup":case"reauthViaRedirect":return yn;default:T(this.auth,"internal-error")}}},{key:"resolve",value:function(e){R(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){R(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),xn=new B(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e,t,n){return En.apply(this,arguments)}function En(){return(En=n(o)(n(m).mark((function e(t,r,i){var a,o,s;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ze(t),A(t,r,vt),o=mn(a,i),s=new On(a,"signInViaPopup",r,o),e.abrupt("return",s.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var On=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(e,a,o,u,c){var l;return n(s)(this,r),(l=t.call(this,e,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=n(i)(l),l}return n(u)(r,[{key:"executeNotNull",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return C(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return R(1===e.filter.length,"Popup operations only handle one event"),r=Ht(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(S(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),t)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(S(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(S(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,xn.get())};t()}}]),r}(wn);On.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Tn=new Map,Sn=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(s)(this,r),(a=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return n(u)(r,[{key:"execute",value:function(){var e=this,t=this;return n(o)(n(m).mark((function i(){var a,o;return n(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Tn.get(t.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Ln(t.resolver,t.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,n(l)(n(f)(r.prototype),"execute",e).call(t);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Tn.set(t.auth._key(),a);case 21:return t.bypassAuthState||Tn.set(t.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var t=this,i=this,a=function(){return n(l)(n(f)(r.prototype),"onAuthEvent",t)};return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){return n(o)(n(m).mark((function e(){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(wn);function Ln(e,t){return An.apply(this,arguments)}function An(){return(An=n(o)(n(m).mark((function e(t,r){var i,a,o;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Nn(r),a=Cn(t),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Mn(e,t){Tn.set(e._key(),t)}function Cn(e){return D(e._redirectPersistence)}function Nn(e){return Se("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e,t){return Pn.apply(this,arguments)}function Pn(){return Pn=n(o)(n(m).mark((function e(t,r){var i,a,o,s,u,c=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=ze(t),o=mn(a,r),s=new Sn(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),Pn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dn=function(){"use strict";function e(t){n(s)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return n(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Un(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Un(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(S(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(jn(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(jn(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function jn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Un(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Fn(e){return Vn.apply(this,arguments)}function Vn(){return Vn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(m).mark((function e(t){var r,i=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",G(t,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),Vn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hn=/^https?/;function Wn(){return(Wn=n(o)(n(m).mark((function e(t){var r,i,a,o,s,u,c;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Fn(t);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!qn(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:T(t,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function qn(e){var t=U(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Hn.test(r))return!1;if(Bn.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn=new B(3e4,6e4);function Kn(){var e=qt().___jsl,t=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=n(h)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}var Jn=null;function Gn(e){return Jn=Jn||function(e){return new Promise((function(t,n){var r,i,a;function o(){Kn(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Kn(),n(S(e,"network-request-failed"))},timeout:zn.get()})}if(null===(i=null===(r=qt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=qt().gapi)||void 0===a?void 0:a.load)){var s=fn("iframefcb");return qt()[s]=function(){gapi.load?o():n(S(e,"network-request-failed"))},ln("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Jn=null,e}))}(e),Jn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn=new B(5e3,15e3),Qn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $n(e){var t=e.config;C(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?H(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:b.SDK_VERSION},i=Xn.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat((0,g.querystring)(r).slice(1))}function Zn(e){return er.apply(this,arguments)}function er(){return er=n(o)(n(m).mark((function e(t){var r,i;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Gn(t);case 2:return r=e.sent,C(i=qt().gapi,t,"internal-error"),e.abrupt("return",r.open({where:document.body,url:$n(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qn,dontclear:!0},(function(e){return new Promise((r=n(o)(n(m).mark((function r(i,a){var o,s,u;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=function(){qt().clearTimeout(s),i(e)},n.next=3,e.restyle({setHideOnLeave:!1});case 3:o=S(t,"network-request-failed"),s=qt().setTimeout((function(){a(o)}),Yn.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return n.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),er.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nr="_blank",rr="http://localhost",ir=function(){"use strict";function e(t){n(s)(this,e),this.window=t,this.associatedEvent=null}return n(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function ar(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},tr),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,g.getUA)().toLowerCase();r&&(u=Ne(l)?nr:r),Me(l)&&(t=t||rr,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,t){var r=n(p)(t,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Fe(l)&&"_self"!==u)return or(t||"",u),new ir(null);var d=window.open(t||"",u,f);C(d,e,"popup-blocked");try{d.focus()}catch(e){}return new ir(d)}function or(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sr="__/auth/handler",ur="emulator/auth/handler";function cr(e,t,r,i,a,o){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:b.SDK_VERSION,eventId:a};if(t instanceof vt){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",(0,g.isEmpty)(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(o||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=n(p)(f.value,2),v=h[0],m=h[1];s[v]=m}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(t instanceof mt){var y=t.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}e.tenantId&&(s.tid=e.tenantId);var k,_,w=s,x=!0,I=!1,E=void 0;try{for(var O,T=Object.keys(w)[Symbol.iterator]();!(x=(O=T.next()).done);x=!0){var S=O.value;void 0===w[S]&&delete w[S]}}catch(e){I=!0,E=e}finally{try{x||null==T.return||T.return()}finally{if(I)throw E}}return"".concat((k=e,_=k.config,_.emulator?H(_,ur):"https://".concat(_.authDomain,"/").concat(sr)),"?").concat((0,g.querystring)(w).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var lr="webStorageSupport",fr=function(){"use strict";function e(){n(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ft,this._completeRedirectFn=Rn,this._overrideRedirectResult=Mn}return n(u)(e,[{key:"_openPopup",value:function(e,t,r,i){var a=this;return n(o)(n(m).mark((function o(){var s,u;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return R(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=cr(e,t,r,U(),i),n.abrupt("return",ar(e,u,Ht()));case 4:case"end":return n.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,t,r,i){var a=this;return n(o)(n(m).mark((function o(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a._originValidation(e);case 2:return o=cr(e,t,r,U(),i),qt().location.href=o,n.abrupt("return",new Promise((function(){})));case 4:case"end":return n.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(R(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Zn(e);case 2:return i=n.sent,a=new Dn(e),i.register("authEvent",(function(t){return C(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:a},t.iframes[e._key()]=i,n.abrupt("return",a);case 8:case"end":return n.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(lr,{type:lr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),T(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Wn.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Be()||Ce()||Ue()}}]),e}(),dr=fr,pr=function(e){"use strict";n(d)(r,e);var t=n(v)(r);function r(e){var i;return n(s)(this,r),(i=t.call(this,"phone")).credential=e,i}return n(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:finalize",J(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:finalize",J(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(t){n(s)(this,e),this.factorId=t}return n(u)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return N("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){n(s)(this,e)}return n(u)(e,null,[{key:"assertion",value:function(e){return pr._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var hr,vr="@firebase/auth",mr="0.20.4",gr=function(){"use strict";function e(t){n(s)(this,e),this.auth=t,this.internalListeners=new Map}return n(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.assertAuthConfigured(),n.next=3,t.auth._initializationPromise;case 3:if(t.auth.currentUser){n.next=5;break}return n.abrupt("return",null);case 5:return n.next=7,t.auth.currentUser.getIdToken(e);case 7:return i=n.sent,n.abrupt("return",{accessToken:i});case 9:case"end":return n.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function br(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,b.getApp)(),t=(0,b._getProvider)(e,"auth");return t.isInitialized()?t.getImmediate():j(e,{popupRedirectResolver:dr,persistence:[un,jt,Ft]})}hr="Browser",(0,b._registerComponent)(new(0,_.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){C(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),C(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:hr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:He(hr)},i=new qe(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(D);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,b._registerComponent)(new(0,_.Component)("auth-internal",(function(e){var t=ze(e.getProvider("auth").getImmediate());return new gr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,b.registerVersion)(vr,mr,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(hr)),(0,b.registerVersion)(vr,mr,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=a("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.50d3126e.js","ee16w":"sprite.47a876e0.svg","jEEqz":"no-poster.0fbddd47.jpg","iiLus":"Vitaliy-desk-1x.310086e6.jpg","emfiV":"Natalia-desk-1x.af81d0b3.jpg","bERqi":"Dima-desk-1x.2c0319fe.jpg","7jpbb":"Viktoriya-desk-1x.2d315583.jpg","ddqV1":"Ihor-desk-1x.a78c1af3.jpg","fto5N":"Samvel-desk-1x.858123dc.jpg","kyKx7":"Yevhen-desk-1x.506c68bb.jpg","8Lcim":"Oleksandr-desk-1x.d5df1872.jpg","5UbS1":"index.1011d344.css"}'));var o;o=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ee16w");var s,u=a("8MBJY"),c=a("a2hTj"),l="https://api.themoviedb.org/3",f="81f57ce8a5863d84fdab7c29ba0c37c2",d=function(){"use strict";function e(){n(u)(this,e),this.searchQuery="",this.page=1,this.searchId="66732"}return n(c)(e,[{key:"fetchGenres",value:function(e){var t="".concat(l,"/genre/").concat(e,"/list?api_key=").concat(f,"&language=en-US");return fetch(t).then((function(e){return e.json()}))}},{key:"fetchTrending",value:function(){var e="".concat(l,"/trending/movie/day?api_key=").concat(f,"&page=").concat(this.page);return fetch(e).then((function(e){return e.json()}))}},{key:"fetchSearchMovie",value:function(){var e="".concat(l,"/search/movie?api_key=").concat(f,"&language=en-US&query=").concat(this.searchQuery,"&page=").concat(this.page,"&include_adult=false");return fetch(e).then((function(e){return e.json()}))}},{key:"fetchMovieDetails",value:function(e){var t="".concat(l,"/movie/").concat(e,"?api_key=").concat(f,"&language=en-US");return fetch(t).then((function(e){return e.json()}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"decrementPage",value:function(){this.page-=1}},{key:"pageNumber",get:function(){return this.page},set:function(e){this.page=e}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"movieId",get:function(){return this.searchId},set:function(e){this.searchId=e}}]),e}();function p(e,t){return e.map((function(e){var r=e.poster_path,i=e.backdrop_path,a=e.original_title,o=e.original_name,u=e.genre_ids,c=e.release_date,l=e.first_air_date,f=e.vote_average,d=e.id,p=r?"https://image.tmdb.org/t/p/w500/".concat(r||i):"".concat(n(s)),h=c||l,v=a||o,m=h?new Date(h).getFullYear():"N/A",g=u?u.slice(0,2).map((function(e){return t.get(e)})):["Others"];u&&u.length>2&&g.push("Others");var b=g.join(", "),y=void 0!==f?f.toFixed(1):"N/A";return'<li class="gallery__item card" data-id="'.concat(d,'">\n          <img\n            class="card__image"\n            src=').concat(p,'\n            alt="poster"\n            loading="lazy"\n          />\n          <div class="card__info" >\n            <p class="card__title">').concat(v,'</p>\n            <div class="card__movie-info">\n              <p class="card__genre">').concat(b,'</p>\n              <span class="vertical">&nbsp|&nbsp</span>\n              <p class="card__release">').concat(m,'</p>\n              <p class="card__rating">').concat(y,"</p>\n            </div>\n          </div>\n      </li>")})).join("")}function h(e,t){var r='<button class="pagination__arrow pagination__arrow-left" id=\'previous\'>\n                      <svg class="pagination-arrow-icon" >\n                        <use href="'.concat(n(o),'#icon-arrow-left"></use>\n                      </svg>\n                    </button>'),i='<button class="pagination__arrow pagination__arrow-right" id=\'next\'>\n                      <svg class="pagination-arrow-icon">\n                        <use href="'.concat(n(o),'#icon-arrow-right" ></use>\n                      </svg>\n                    </button>'),a='<li class="item">\n                          <button class="pagination__btn">1</button>\n                        </li>',s='<li class="item">\n                    <button class="pagination-btn-more">...</button>\n                  </li>',u='<li class="item">\n                        <button class="pagination__btn">'.concat(e-2,"</button>\n                      </li>"),c='<li class="item">\n                    <button class="pagination__btn">'.concat(e-1,"</button>\n                  </li>"),l='<li class="item">\n                        <button class="pagination__btn pagination__btn--choice">'.concat(e,"</button>\n                      </li>"),f='<li class="item">\n                    <button class="pagination__btn">'.concat(e+1,"</button>\n                  </li>"),d=' <li class="item">\n                          <button class="pagination__btn">'.concat(e+2,"</button>\n                        </li>"),p='<li class="item">\n                    <button class="pagination__btn">'.concat(t,"</button>\n                  </li>");return 1===e?window.matchMedia("(max-width:768px)").matches?'<ul class="pagination-list">\n                '.concat(l," \n                ").concat(f,"\n                ").concat(d,"\n              </ul>\n              ").concat(i):' <ul class="pagination-list"> \n              '.concat(l," \n              ").concat(f,"\n              ").concat(d,"\n              ").concat(s,"\n              ").concat(p,"\n            </ul>\n            ").concat(i):2===e?window.matchMedia("(max-width:768px)").matches?"".concat(r,'\n        <ul class="pagination-list">\n          ').concat(c,"\n          ").concat(l,"\n          ").concat(f,"\n          ").concat(d,"\n        </ul>\n        ").concat(i):"".concat(r,'\n        <ul class="pagination-list">\n          ').concat(c,"\n          ").concat(l," \n          ").concat(f,"\n          ").concat(d,"\n          ").concat(s,"\n          ").concat(p,"\n        </ul>\n        ").concat(i):3===e?window.matchMedia("(max-width:768px)").matches?"".concat(r,'\n        <ul class="pagination-list">\n          ').concat(u,"  \n          ").concat(c,"\n          ").concat(l,"\n          ").concat(f,"\n          ").concat(d,"\n        </ul>\n        ").concat(i):"".concat(r,'\n        <ul class="pagination-list">\n          ').concat(u,"\n          ").concat(c,"\n          ").concat(l," \n          ").concat(f,"\n          ").concat(d,"\n          ").concat(s,"\n          ").concat(p,"\n        </ul>\n        ").concat(i):e===t-2?window.matchMedia("(max-width:768px)").matches?"".concat(r,'\n        <ul class="pagination-list">\n          ').concat(u,"  \n          ").concat(c,"\n          ").concat(l,"\n          ").concat(f,"\n          ").concat(d,"\n        </ul>\n        ").concat(i):"".concat(r,'\n        <ul class="pagination-list">\n          ').concat(a,"\n          ").concat(s,"\n          ").concat(u,"\n          ").concat(c,"\n          ").concat(l," \n          ").concat(f,"\n          ").concat(d,"\n        </ul>\n        ").concat(i):e===t-1?window.matchMedia("(max-width:768px)").matches?"".concat(r,'\n        <ul class="pagination-list">\n          ').concat(u,"  \n          ").concat(c,"\n          ").concat(l,"\n          ").concat(f,"\n        </ul>\n        ").concat(i):"".concat(r,'\n        <ul class="pagination-list">\n          ').concat(a,"\n          ").concat(s,"\n          ").concat(u,"\n          ").concat(c,"\n          ").concat(l," \n          ").concat(f,"\n        </ul>\n        ").concat(i):e===t?window.matchMedia("(max-width:768px)").matches?"".concat(r,'\n        <ul class="pagination-list">\n          ').concat(u,"  \n          ").concat(c,"\n          ").concat(l,"\n        </ul>"):"".concat(r,'\n        <ul class="pagination-list">\n          ').concat(a,"\n          ").concat(s,"\n          ").concat(u,"\n          ").concat(c,"\n          ").concat(l," \n        </ul>"):window.matchMedia("(max-width:768px)").matches?"".concat(r,'\n      <ul class="pagination-list">\n        ').concat(u,"  \n        ").concat(c,"\n        ").concat(l,"\n        ").concat(f,"\n        ").concat(d,"\n      </ul>\n      ").concat(i):"".concat(r,'\n      <ul class="pagination-list">\n        ').concat(a,"\n        ").concat(s,"\n        ").concat(u,"\n        ").concat(c,"\n        ").concat(l," \n        ").concat(f,"\n        ").concat(d,"\n        ").concat(s,"\n        ").concat(p,"\n      </ul>\n      ").concat(i)}s=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("jEEqz");var v=null,m=null;function g(e){v=document.querySelector(".pagination"),m=k.pageNumber;var t=e.total_pages;v.innerHTML=h(m,t),v.addEventListener("click",b)}function b(e){if(e.preventDefault(),+e.target.textContent!==m){if(v.removeEventListener("click",b),"next"===e.target.id)return k.incrementPage(),""!==k.query?void I():void _();if("previous"===e.target.id)return k.decrementPage(),""!==k.query?void I():void _();if("BUTTON"===e.target.nodeName){if(k.pageNumber=+e.target.textContent,""!==k.query)return void I();_()}}else console.log("Поточна сторінка")}function y(e){console.log(e);var t=e.results;Promise.all([k.fetchGenres("movie"),k.fetchGenres("tv")]).then((function(n){var r=n.flatMap((function(e){return e.genres})),i=new Map(r.map((function(e){return[e.id,e.name]})));document.querySelector(".gallery").innerHTML=p(t,i),g(e)})).catch(console.log)}var k=new d;function _(){k.fetchTrending().then(y).catch(console.log)}var w=null;document.addEventListener("DOMContentLoaded",(function(){(w=document.querySelector("#search-movie")).addEventListener("submit",x)}));var x=function(e){e.preventDefault();var t=e.currentTarget.elements.searchQuery.value.trim();""!==t?(k.query=t,k.resetPage(),I(),w.reset()):console.log("Пустий пошук")};function I(){k.fetchSearchMovie().then(y).catch(console.log)}var E=function(){_();var e=document.querySelector(".header");e.innerHTML='<div class="container">\n  <div class="nav-wrap">\n    <a href="#" class="header__logo" id="logoLink">\n     <svg class="header__icon">\n        <use href="'.concat(n(o),'#icon-main-logo"></use>\n      </svg>\n      <span class="header__text">Filmoteka</span>\n    </a>\n    <nav>\n      <ul class="nav-list">\n        <li class="nav-list__item">\n          <a\n            class="nav-list__link nav-list__link--current"\n            href="#"\n            id="homeLink"\n            >Home</a\n          >\n        </li>\n        <li class="nav-list__item">\n          <a class="nav-list__link" href="#" id="libraryLink">My library</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <div class="search-form-wrap">\n    <form class="search-form" id="search-movie">\n      <input\n        class="search-form__input"\n        name="searchQuery"\n        type="text"\n        placeholder="Movie search"\n      />\n      <button class="search-form__button-submit" type="submit">\n       <svg width="12" height="12">\n          <use href="').concat(n(o),'#icon-search"></use>\n        </svg>\n      </button>\n    </form>\n  </div>\n  <p class="notification notification--is-hidden"></p>\n  </div>\n'),e.classList.remove("additional-bg"),document.getElementById("libraryLink").addEventListener("click",j),document.getElementById("search-movie").addEventListener("submit",x)},O=function(e){e.preventDefault(),E()},T=function(){var e=document.querySelector(".header");e.innerHTML='<div class="container">\n  <div class="nav-wrap additional-margin">\n    <a href="#" class="header__logo" id="logoLink">\n      <svg class="header__icon">\n        <use href="'.concat(n(o),'#icon-main-logo"></use>\n      </svg>\n      <span class="header__text">Filmoteka</span>\n    </a>\n    <nav>\n      <ul class="nav-list">\n        <li class="nav-list__item">\n          <a class="nav-list__link" href="#" id="homeLink">Home</a>\n        </li>\n        <li class="nav-list__item">\n          <a class="nav-list__link nav-list__link--current" href="#" id="libraryLink"\n            >My library</a\n          >\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <ul class="button-list">\n    <li class="button-list__item">\n      <button class="button-list__btn button-list__btn--current" type="button">\n        Watched\n      </button>\n    </li>\n    <li class="button-list__item">\n      <button class="button-list__btn" type="button">Queue</button>\n    </li>\n  </ul>\n  </div>\n'),e.classList.add("additional-bg");var t=document.getElementById("homeLink"),r=document.getElementById("logoLink");t.addEventListener("click",O),r.addEventListener("click",O)};function S(e){return e.map((function(e){var t=e.poster_path,n=e.original_title,r=e.original_name,i=e.genres,a=e.release_date,o=e.first_air_date,s=e.vote_average,u=e.id,c=new Date(a||o).getFullYear(),l=n||r,f=s?s.toFixed(1):"N/A",d=i?i.slice(0,2).map((function(e){return e.name})):[];(i.length>2||0===i.length)&&d.push("Others");var p=d.join(", ");return'<li class="gallery__item card" data-id="'.concat(u,'">\n          <img\n            class="card__image"\n            src="https://image.tmdb.org/t/p/w500/').concat(t,'"\n            alt="poster"\n            loading="lazy"\n          />\n          <div class="card__info" >\n            <p class="card__title">').concat(l,'</p>\n            <div class="card__movie-info">\n              <p class="card__genre">').concat(p,'</p>\n              <span class="vertical">&nbsp|&nbsp</span>\n              <p class="card__release">').concat(c,'</p>\n              <p class="card__rating">').concat(f,"</p>\n            </div>\n          </div>\n      </li>")})).join("")}var L="watched-list",A="queue-list",M={getWatchedList:function(){try{return JSON.parse(localStorage.getItem(L))}catch(e){console.log(e)}},setWatchedList:function(e){localStorage.setItem(L,JSON.stringify(e))},getQueueList:function(){try{return JSON.parse(localStorage.getItem(A))}catch(e){console.log(e)}},setQueueList:function(e){localStorage.setItem(A,JSON.stringify(e))},isWatchedListEmpty:function(){var e=this.getWatchedList();return!e||0===e.length},isQueueListEmpty:function(){var e=this.getQueueList();return!e||0===e.length},isMovieInWatchedList:function(e){return!this.isWatchedListEmpty()&&!!this.getWatchedList().includes(e)},isMovieInQueueList:function(e){return!this.isQueueListEmpty()&&!!this.getQueueList().includes(e)},addMovieToWatchedList:function(e){if(this.isWatchedListEmpty())localStorage.setItem(L,JSON.stringify([e]));else{var t=this.getWatchedList();t.push(e),this.setWatchedList(t)}},addMovieToQueueList:function(e){if(this.isQueueListEmpty())localStorage.setItem(A,JSON.stringify([e]));else{var t=this.getQueueList();t.push(e),this.setQueueList(t)}},removeMovieFromWatchedList:function(e){var t=this.getWatchedList().filter((function(t){return t!==e}));this.setWatchedList(t)},removeMovieFromQueueList:function(e){var t=this.getQueueList().filter((function(t){return t!==e}));this.setQueueList(t)},clearWatchedList:function(){localStorage.removeItem(L)},clearQueueList:function(){localStorage.removeItem(A)}},C=new d;function N(){var e=document.querySelector(".gallery"),t=M.getQueueList();e.innerHTML="";var n=t.map((function(e){return C.fetchMovieDetails(e).catch((function(e){return console.log(e)}))}));Promise.all(n).then((function(t){var n=S(t);e.innerHTML=n})).catch((function(e){return console.log(e)}))}a("3SEMc");var R=a("a0wpL"),P={},D=a("l5bVx");P=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="swal-button";t.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:r,CONFIRM_BUTTON:r+"--confirm",CANCEL_BUTTON:r+"--cancel",DANGER_BUTTON:r+"--danger",BUTTON_LOADING:r+"--loading",BUTTON_LOADER:r+"__loader"},t.default=t.CLASS_NAMES},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNode=function(e){var t="."+e;return document.querySelector(t)},t.stringToNode=function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild},t.insertAfter=function(e,t){var n=t.nextSibling;t.parentNode.insertBefore(e,n)},t.removeNode=function(e){e.parentElement.removeChild(e)},t.throwErr=function(e){throw"SweetAlert: "+(e=e.replace(/ +(?= )/g,"")).trim()},t.isPlainObject=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype},t.ordinalSuffixOf=function(e){var t=e%10,n=e%100;return 1===t&&11!==n?e+"st":2===t&&12!==n?e+"nd":3===t&&13!==n?e+"rd":e+"th"}},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(25));var i=n(26);t.overlayMarkup=i.default,r(n(27)),r(n(28)),r(n(29));var a=n(0),o=a.default.MODAL_TITLE,s=a.default.MODAL_TEXT,u=a.default.ICON,c=a.default.FOOTER;t.iconMarkup='\n  <div class="'+u+'"></div>',t.titleMarkup='\n  <div class="'+o+'"></div>\n',t.textMarkup='\n  <div class="'+s+'"></div>',t.footerMarkup='\n  <div class="'+c+'"></div>\n'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.CONFIRM_KEY="confirm",t.CANCEL_KEY="cancel";var i={visible:!0,text:null,value:null,className:"",closeModal:!0},a=Object.assign({},i,{visible:!1,text:"Cancel",value:null}),o=Object.assign({},i,{text:"OK",value:!0});t.defaultButtonList={cancel:a,confirm:o};var s=function(e){switch(e){case t.CONFIRM_KEY:return o;case t.CANCEL_KEY:return a;default:var n=e.charAt(0).toUpperCase()+e.slice(1);return Object.assign({},i,{text:n,value:e})}},u=function(e,t){var n=s(e);return!0===t?Object.assign({},n,{visible:!0}):"string"==typeof t?Object.assign({},n,{visible:!0,text:t}):r.isPlainObject(t)?Object.assign({visible:!0},n,t):Object.assign({},n,{visible:!1})},c=function(e){for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var i=r[n],o=e[i],s=u(i,o);t[i]=s}return t.cancel||(t.cancel=a),t},l=function(e){var n={};switch(e.length){case 1:n[t.CANCEL_KEY]=Object.assign({},a,{visible:!1});break;case 2:n[t.CANCEL_KEY]=u(t.CANCEL_KEY,e[0]),n[t.CONFIRM_KEY]=u(t.CONFIRM_KEY,e[1]);break;default:r.throwErr("Invalid number of 'buttons' in array ("+e.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};t.getButtonListOpts=function(e){var n=t.defaultButtonList;return"string"==typeof e?n[t.CONFIRM_KEY]=u(t.CONFIRM_KEY,e):Array.isArray(e)?n=l(e):r.isPlainObject(e)?n=c(e):!0===e?n=l([!0,!0]):!1===e?n=l([!1,!1]):void 0===e&&(n=t.defaultButtonList),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2),a=n(0),o=a.default.MODAL,s=a.default.OVERLAY,u=n(30),c=n(31),l=n(32),f=n(33);t.injectElIntoModal=function(e){var t=r.getNode(o),n=r.stringToNode(e);return t.appendChild(n),n};var d=function(e){e.className=o,e.textContent=""},p=function(e,t){d(e);var n=t.className;n&&e.classList.add(n)};t.initModalContent=function(e){var t=r.getNode(o);p(t,e),u.default(e.icon),c.initTitle(e.title),c.initText(e.text),f.default(e.content),l.default(e.buttons,e.dangerMode)};var h=function(){var e=r.getNode(s),t=r.stringToNode(i.modalMarkup);e.appendChild(t)};t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i={isOpen:!1,promise:null,actions:{},timer:null},a=Object.assign({},i);t.resetState=function(){a=Object.assign({},i)},t.setActionValue=function(e){if("string"==typeof e)return o(r.CONFIRM_KEY,e);for(var t in e)o(t,e[t])};var o=function(e,t){a.actions[e]||(a.actions[e]={}),Object.assign(a.actions[e],{value:t})};t.setActionOptionsFor=function(e,t){var n=(void 0===t?{}:t).closeModal,r=void 0===n||n;Object.assign(a.actions[e],{closeModal:r})},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(3),a=n(0),o=a.default.OVERLAY,s=a.default.SHOW_MODAL,u=a.default.BUTTON,c=a.default.BUTTON_LOADING,l=n(5);t.openModal=function(){r.getNode(o).classList.add(s),l.default.isOpen=!0};var f=function(){r.getNode(o).classList.remove(s),l.default.isOpen=!1};t.onAction=function(e){void 0===e&&(e=i.CANCEL_KEY);var t=l.default.actions[e],n=t.value;if(!1===t.closeModal){var a=u+"--"+e;r.getNode(a).classList.add(c)}else f();l.default.promise.resolve(n)},t.getState=function(){var e=Object.assign({},l.default);return delete e.promise,delete e.timer,e},t.stopLoading=function(){for(var e=document.querySelectorAll("."+u),t=0;t<e.length;t++)e[t].classList.remove(c)}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){e.exports=t.sweetAlert=n(9)}).call(t,n(7))},function(e,t,n){(function(t){e.exports=t.swal=n(10)}).call(t,n(7))},function(e,t,n){"undefined"!=typeof window&&n(11),n(16);var r=n(23).default;e.exports=r},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insertAt:"top",transform:void 0};n(14)(r,i),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(13)(void 0)).push([e.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var a=r(i);return[n].concat(i.sources.map((function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"}))).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=h[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(l(r.parts[a],t))}else{var o=[];for(a=0;a<r.parts.length;a++)o.push(l(r.parts[a],t));h[r.id]={id:r.id,refs:1,parts:o}}}}function i(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function a(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),a(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),a(e,t),t}function c(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function l(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var c=b++;n=g||(g=s(t)),r=f.bind(null,n,c,!1),i=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n,t),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=d.bind(null,n),i=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function f(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=k(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}((function(){return window&&document&&document.all&&!window.atob})),m=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}((function(e){return document.querySelector(e)})),g=null,b=0,y=[],k=n(15);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return r(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var s=n[o];(u=h[s.id]).refs--,a.push(u)}for(e&&r(i(e,t),t),o=0;o<a.length;o++){var u;if(0===(u=a[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete h[u.id]}}}};var _,w=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")})},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,n){var r=n(17);"undefined"==typeof window||window.Promise||(window.Promise=r),n(21),String.prototype.includes||(String.prototype.includes=function(e,t){"use strict";return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var i=0|t,a=Math.max(i>=0?i:r-Math.abs(i),0);a<r;){if(function(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}(n[a],e))return!0;a++}return!1}}),"undefined"!=typeof window&&[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})}))},function(e,t,n){(function(t){!function(n){function r(){}function i(e,t){return function(){e.apply(t,arguments)}}function a(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function o(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void u(t.promise,e)}s(t.promise,r)}else(1===e._state?s:u)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void f(i(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){u(e,t)}}function u(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e((function(e){n||(n=!0,s(t,e))}),(function(e){n||(n=!0,u(t,e))}))}catch(e){if(n)return;n=!0,u(t,e)}}var d=setTimeout;a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(r);return o(this,new l(e,t,n)),n},a.all=function(e){var t=Array.prototype.slice.call(e);return new a((function(e,n){function r(a,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s)return void s.call(o,(function(e){r(a,e)}),n)}t[a]=o,0==--i&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var i=t.length,a=0;a<t.length;a++)r(a,t[a])}))},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)}))},a._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){d(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},a._setImmediateFn=function(e){a._immediateFn=e},a._setUnhandledRejectionFn=function(e){a._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=a:n.Promise||(n.Promise=a)}(this)}).call(t,n(18).setImmediate)},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(19),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return c[u]=r,s(u),u++}function i(e){delete c[e]}function a(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function o(e){if(l)setTimeout(o,0,e);else{var t=c[e];if(t){l=!0;try{a(t)}finally{i(e),l=!1}}}}if(!e.setImmediate){var s,u=1,c={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?s=function(e){t.nextTick((function(){o(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(h="setImmediate$"+Math.random()+"$",v=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(h)&&o(+t.data.slice(h.length))},e.addEventListener?e.addEventListener("message",v,!1):e.attachEvent("onmessage",v),s=function(t){e.postMessage(h+t,"*")}):e.MessageChannel?((p=new MessageChannel).port1.onmessage=function(e){o(e.data)},s=function(e){p.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;s=function(t){var n=f.createElement("script");n.onreadystatechange=function(){o(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():s=function(e){setTimeout(o,0,e)},d.setImmediate=r,d.clearImmediate=i}var p,h,v}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(7),n(20))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function o(){v&&p&&(v=!1,p.length?h=p.concat(h):m=-1,h.length&&s())}function s(){if(!v){var e=i(o);v=!0;for(var t=h.length;t;){for(p=h,h=[];++m<t;)p&&p[m].run();m=-1,t=h.length}p=null,v=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,h=[],v=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||v||i(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";n(22).polyfill()},function(e,t,n){"use strict";function r(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var a=Object.keys(Object(i)),o=0,s=a.length;o<s;o++){var u=a[o],c=Object.getOwnPropertyDescriptor(i,u);void 0!==c&&c.enumerable&&(n[u]=i[u])}}return n}function i(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:r})}e.exports={assign:r,polyfill:i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),i=n(6),a=n(5),o=n(36),s=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if("undefined"!=typeof window){var n=o.getOpts.apply(void 0,e);return new Promise((function(e,t){a.default.promise={resolve:e,reject:t},r.default(n),setTimeout((function(){i.openModal()}))}))}};s.close=i.onAction,s.getState=i.getState,s.setActionValue=a.setActionValue,s.stopLoading=i.stopLoading,s.setDefaults=o.setDefaults,t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0).default.MODAL,a=n(4),o=n(34),s=n(35),u=n(1);t.init=function(e){r.getNode(i)||(document.body||u.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),o.default(),a.default()),a.initModalContent(e),s.default(e)},t.default=t.init},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).default.MODAL;t.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',t.default=t.modalMarkup},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r='<div \n    class="'+n(0).default.OVERLAY+'"\n    tabIndex="-1">\n  </div>';t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).default.ICON;t.errorIconMarkup=function(){var e=r+"--error",t=e+"__line";return'\n    <div class="'+e+'__x-mark">\n      <span class="'+t+" "+t+'--left"></span>\n      <span class="'+t+" "+t+'--right"></span>\n    </div>\n  '},t.warningIconMarkup=function(){var e=r+"--warning";return'\n    <span class="'+e+'__body">\n      <span class="'+e+'__dot"></span>\n    </span>\n  '},t.successIconMarkup=function(){var e=r+"--success";return'\n    <span class="'+e+"__line "+e+'__line--long"></span>\n    <span class="'+e+"__line "+e+'__line--tip"></span>\n\n    <div class="'+e+'__ring"></div>\n    <div class="'+e+'__hide-corners"></div>\n  '}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).default.CONTENT;t.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=r.default.BUTTON_CONTAINER,a=r.default.BUTTON,o=r.default.BUTTON_LOADER;t.buttonMarkup='\n  <div class="'+i+'">\n\n    <button\n      class="'+a+'"\n    ></button>\n\n    <div class="'+o+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=n(2),a=n(0),o=a.default.ICON,s=a.default.ICON_CUSTOM,u=["error","warning","success","info"],c={error:i.errorIconMarkup(),warning:i.warningIconMarkup(),success:i.successIconMarkup()},l=function(e,t){var n=o+"--"+e;t.classList.add(n);var r=c[e];r&&(t.innerHTML=r)},f=function(e,t){t.classList.add(s);var n=document.createElement("img");n.src=e,t.appendChild(n)},d=function(e){if(e){var t=r.injectElIntoModal(i.iconMarkup);u.includes(e)?l(e,t):f(e,t)}};t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=n(4),a=function(e){navigator.userAgent.includes("AppleWebKit")&&(e.style.display="none",e.offsetHeight,e.style.display="")};t.initTitle=function(e){if(e){var t=i.injectElIntoModal(r.titleMarkup);t.textContent=e,a(t)}},t.initText=function(e){if(e){var t=document.createDocumentFragment();e.split("\n").forEach((function(e,n,r){t.appendChild(document.createTextNode(e)),n<r.length-1&&t.appendChild(document.createElement("br"))}));var n=i.injectElIntoModal(r.textMarkup);n.appendChild(t),a(n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(4),a=n(0),o=a.default.BUTTON,s=a.default.DANGER_BUTTON,u=n(3),c=n(2),l=n(6),f=n(5),d=function(e,t,n){var i=t.text,a=t.value,d=t.className,p=t.closeModal,h=r.stringToNode(c.buttonMarkup),v=h.querySelector("."+o),m=o+"--"+e;v.classList.add(m),d&&(Array.isArray(d)?d:d.split(" ")).filter((function(e){return e.length>0})).forEach((function(e){v.classList.add(e)})),n&&e===u.CONFIRM_KEY&&v.classList.add(s),v.textContent=i;var g={};return g[e]=a,f.setActionValue(g),f.setActionOptionsFor(e,{closeModal:p}),v.addEventListener("click",(function(){return l.onAction(e)})),h},p=function(e,t){var n=i.injectElIntoModal(c.footerMarkup);for(var r in e){var a=e[r],o=d(r,a,t);a.visible&&n.appendChild(o)}0===n.children.length&&n.remove()};t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=n(4),a=n(2),o=n(5),s=n(6),u=n(0).default.CONTENT,c=function(e){e.addEventListener("input",(function(e){var t=e.target.value;o.setActionValue(t)})),e.addEventListener("keyup",(function(e){if("Enter"===e.key)return s.onAction(r.CONFIRM_KEY)})),setTimeout((function(){e.focus(),o.setActionValue("")}),0)},l=function(e,t,n){var r=document.createElement(t),i=u+"__"+t;for(var a in r.classList.add(i),n){var o=n[a];r[a]=o}"input"===t&&c(r),e.appendChild(r)},f=function(e){if(e){var t=i.injectElIntoModal(a.contentMarkup),n=e.element,r=e.attributes;"string"==typeof n?l(t,n,r):t.appendChild(n)}};t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2),a=function(){var e=r.stringToNode(i.overlayMarkup);document.body.appendChild(e)};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(6),a=n(1),o=n(3),s=n(0),u=s.default.MODAL,c=s.default.BUTTON,l=s.default.OVERLAY,f=function(e){e.preventDefault(),m()},d=function(e){e.preventDefault(),g()},p=function(e){if(r.default.isOpen&&"Escape"===e.key)return i.onAction(o.CANCEL_KEY)},h=function(e){if(r.default.isOpen&&"Tab"===e.key)return f(e)},v=function(e){if(r.default.isOpen)return"Tab"===e.key&&e.shiftKey?d(e):void 0},m=function(){var e=a.getNode(c);e&&(e.tabIndex=0,e.focus())},g=function(){var e=a.getNode(u).querySelectorAll("."+c),t=e[e.length-1];t&&t.focus()},b=function(e){e[e.length-1].addEventListener("keydown",h)},y=function(e){e[0].addEventListener("keydown",v)},k=function(){var e=a.getNode(u).querySelectorAll("."+c);e.length&&(b(e),y(e))},_=function(e){if(a.getNode(l)===e.target)return i.onAction(o.CANCEL_KEY)},w=function(e){var t=a.getNode(l);t.removeEventListener("click",_),e&&t.addEventListener("click",_)},x=function(e){r.default.timer&&clearTimeout(r.default.timer),e&&(r.default.timer=window.setTimeout((function(){return i.onAction(o.CANCEL_KEY)}),e))},I=function(e){e.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),e.dangerMode?m():g(),k(),w(e.closeOnClickOutside),x(e.timer)};t.default=I},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),a=r(3),o=r(37),s=r(38),u={title:null,text:null,icon:null,buttons:a.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},u);t.setDefaults=function(e){c=Object.assign({},u,e)};var l=function(e){var t=e&&e.button,n=e&&e.buttons;return void 0!==t&&void 0!==n&&i.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==t?{confirm:t}:n},f=function(e){return i.ordinalSuffixOf(e+1)},d=function(e,t){i.throwErr(f(t)+" argument ('"+e+"') is invalid")},p=function(e,t){var n=e+1,r=t[n];i.isPlainObject(r)||void 0===r||i.throwErr("Expected "+f(n)+" argument ('"+r+"') to be a plain object")},h=function(e,t){var n=e+1,r=t[n];void 0!==r&&i.throwErr("Unexpected "+f(n)+" argument ("+r+")")},v=function(e,t,r,a){var o=void 0===t?"undefined":n(D)(t),s=t instanceof Element;if("string"===o){if(0===r)return{text:t};if(1===r)return{text:t,title:a[0]};if(2===r)return p(r,a),{icon:t};d(t,r)}else{if(s&&0===r)return p(r,a),{content:t};if(i.isPlainObject(t))return h(r,a),t;d(t,r)}};t.getOpts=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={};e.forEach((function(t,r){var i=v(0,t,r,e);Object.assign(n,i)}));var r=l(n);n.buttons=a.getButtonListOpts(r),delete n.button,n.content=o.getContentOpts(n.content);var i=Object.assign({},u,c,n);return Object.keys(i).forEach((function(e){s.DEPRECATED_OPTS[e]&&s.logDeprecation(e)})),i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i={element:"input",attributes:{placeholder:""}};t.getContentOpts=function(e){var t={};return r.isPlainObject(e)?Object.assign(t,e):e instanceof Element?{element:e}:"input"===e?i:null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logDeprecation=function(e){var n=t.DEPRECATED_OPTS[e],r=n.onlyRename,i=n.replacement,a=n.subOption,o=n.link,s='SweetAlert warning: "'+e+'" option has been '+(r?"renamed":"deprecated")+".";i&&(s+=" Please use"+(a?' "'+a+'" in ':" ")+'"'+i+'" instead.');var u="https://sweetalert.js.org";s+=o?" More details: "+u+o:" More details: "+u+"/guides/#upgrading-from-1x",console.warn(s)},t.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}]);var j=function(e){e.preventDefault(),(0,R.n)().currentUser?(T(),N()):n(P)("Oops!","You need to register to view!","warning")},U=document.querySelector("#root"),F=function(){var e='<header class="header">\n  <div class="container">\n  <div class="nav-wrap">\n    <a href="#" class="header__logo" id="logoLink">\n      <svg class="header__icon">\n        <use href="'.concat(n(o),'#icon-main-logo"></use>\n      </svg>\n      <span class="header__text">Filmoteka</span>\n    </a>\n    <nav>\n      <ul class="nav-list">\n        <li class="nav-list__item">\n          <a\n            class="nav-list__link nav-list__link--current"\n            href="#"\n            id="homeLink"\n            >Home</a\n          >\n        </li>\n        <li class="nav-list__item">\n          <a class="nav-list__link" href="#" id="libraryLink">My library</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <div class="search-form-wrap">\n    <form class="search-form" id="search-movie">\n      <input\n        class="search-form__input"\n        name="searchQuery"\n        type="text"\n        placeholder="Movie search"\n      />\n      <button class="search-form__button-submit" type="submit">\n        <svg width="12" height="12">\n          <use href="').concat(n(o),'#icon-search"></use>\n        </svg>\n      </button>\n    </form>\n  </div>\n  <p class="notification notification--is-hidden"></p>\n  </div>\n</header>');U.insertAdjacentHTML("afterbegin",e),document.getElementById("libraryLink").addEventListener("click",j),document.getElementById("search-movie").addEventListener("submit",x)};var V=a("bpxeT"),B=a("2TvXO");V=a("bpxeT"),B=a("2TvXO");function H(e){var t=e.poster_path,r=e.genres,i=void 0===r?[]:r,a=e.vote_count,s=e.vote_average,u=e.original_title,c=e.popularity,l=e.title,f=e.overview,d=i.map((function(e){return e.name}));return'<div class="modal">\n    <button class="modal__close" data-action="close-modal"><svg class="modal__close-icon" width="14" height="14">\n        <use href="'.concat(n(o),'#icon-close"></use>\n      </svg></button>\n \n      <img class="modal__img" src=').concat("https://image.tmdb.org/t/p/w500/").concat(t,' alt="poster" />\n  \n    <div class="modal__description-wrap">\n      <h2 class="modal__title">').concat(l,'</h2>\n      <table class="modal__info">\n  <tr>\n    <td class="modal__info-key">Vote/votes</td>\n    <td "modal__info-value">\n    <span class="modal__info-value--accent">').concat(s,'</span>\n     <span class="modal__info-value--slash">/ </span\n    ><span class="modal__info-value--grey">').concat(a,'</span>\n    </td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Popularity</td>\n    <td "modal__info-value">').concat(c,'</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Original Title</td>\n    <td "modal__info-value">').concat(u,'</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Genre</td>\n    <td "modal__info-value">').concat(d,'</td>\n  </tr>\n</table>\n    \n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">\n        ').concat(f,'\n      </p>\n      <div class="modal__option">\n        <button class="btn-add-wached" data-action="add-wached">add to Watched</button>\n        <button class="btn-add-queue" data-action="add-queue">add to queue</button>\n      </div>\n    </div>\n  </div>')}function W(e){if("add-queue"===e.target.dataset.action){var t=document.querySelector(".btn-add-queue"),n=document.querySelector(".btn-add-wached"),r=e.currentTarget.getAttribute("id");if(M.isMovieInQueueList(r)?M.removeMovieFromQueueList(r):M.addMovieToQueueList(r),t.classList.toggle("isActive"),M.isMovieInQueueList(r)?t.textContent="delete to queue":t.textContent="add to queue",console.log(M.getQueueList()),!t.disabled&&!n.disabled)return n.disabled=!0;if(n.disabled)return n.disabled=!1}}function q(e){if("add-wached"===e.target.dataset.action){var t=document.querySelector(".btn-add-wached"),n=document.querySelector(".btn-add-queue"),r=e.currentTarget.getAttribute("id");if(M.isMovieInWatchedList(r)?M.removeMovieFromWatchedList(r):M.addMovieToWatchedList(r),t.classList.toggle("isActive"),M.isMovieInWatchedList(r)?t.textContent="delete to wached":t.textContent="add to watched",console.log(M.getWatchedList()),!n.disabled&&!t.disabled)return n.disabled=!0;if(n.disabled)return n.disabled=!1}}function z(){var e=document.querySelector(".backdrop");e.classList.remove("is-hidden"),document.addEventListener("keydown",J),e.addEventListener("click",G),e.addEventListener("click",W),e.addEventListener("click",q)}function K(){var e=document.querySelector(".backdrop");e.classList.add("is-hidden"),document.removeEventListener("keydown",J),e.removeEventListener("click",G),e.removeEventListener("click",W),e.removeEventListener("click",q)}function J(e){"Escape"===e.code&&K()}function G(e){"close-modal"!==e.target.dataset.action&&e.currentTarget!==e.target||K()}var Y=new d;function Q(e){return X.apply(this,arguments)}function X(){return(X=n(V)(n(B).mark((function e(t){var r,i,a,o;return n(B).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector(".backdrop").setAttribute("id",t),e.next=4,Y.fetchMovieDetails(t);case 4:return r=e.sent,e.next=7,H(r);case 7:return i=e.sent,e.next=10,$(i);case 10:a=document.querySelector(".btn-add-queue"),o=document.querySelector(".btn-add-wached"),M.isMovieInQueueList(t)&&(a.textContent="delete to queue",a.classList.toggle("isActive"),o.disabled=!0),M.isMovieInWatchedList(t)&&(o.textContent="delete to Wached",o.classList.toggle("isActive"),a.disabled=!0),z();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return Z.apply(this,arguments)}function Z(){return(Z=n(V)(n(B).mark((function e(t){return n(B).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector(".backdrop").innerHTML=t;case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=n(V)(n(B).mark((function e(t){var r;return n(B).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.querySelector(".backdrop"),document.querySelector(".backdrop"),!t.target.classList.contains("gallery__item")){e.next=6;break}return r=t.target.dataset.id,e.next=6,Q(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne;V=a("bpxeT"),B=a("2TvXO");ne=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iiLus");var re;re=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("emfiV");var ie;ie=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("bERqi");var ae;ae=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("7jpbb");var oe;oe=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ddqV1");var se;se=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("fto5N");var ue;ue=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("kyKx7");var ce;function le(){return'<div class="team-modal">\n      <button class="team-modal__btn-close" type="button">\n        <svg width="11" height="11">\n            <use href="'.concat(n(o),'#icon-close"></use>\n        </svg>\n      </button>\n      <h2 class="team-modal__title">OUR BEST TEAM OF DEVELOPERS!</h2>\n      <ul class="team-modal__list">\n          <li class="team-modal__card">\n              <img src="').concat(n(ne),'" alt="man Vitaliy">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Vitaliy Khivrych</h3>\n              <p class="team-modal__text">Team-Lead\n                    <a target="_blank" href="https://github.com/Vitalii-Khivrych">\n                        <svg width="20" height="20">\n                            <use href="').concat(n(o),'#icon-github-logo"></use>\n                        </svg>\n                    </a>\n              </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n              <img  src="').concat(n(re),'" alt="woman Natalia">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Natalia Delicheban</h3>\n              <p class="team-modal__text">Scrum-Master\n                        <a target="_blank" href="https://github.com/NataliaDelicheban">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n              </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n              <img src="').concat(n(ie),'" alt="man Dima">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Dima Zharyy</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/dima-zharyy">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n                    </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n              <img src="').concat(n(ae),'" alt="woman Viktoria">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Viktoria Fomenko</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/ViktoriaFomenko">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n                    </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n                  <img src="').concat(n(oe),'" alt="man Igor">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Igor Smelyanets</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/IgorSME">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n                    </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n              <img src="').concat(n(se),'" alt="man Samvel">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Samvel Ogmrtsyan</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/samvel216">\n                        <svg width="20" height="20">\n                            <use href="').concat(n(o),'#icon-github-logo"></use>\n                        </svg>\n                    </a></p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n                  <img src="').concat(n(ue),'" alt="man Yevhen">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Yevhen Podoliaka</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/yevhenpodoliaka">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n                    </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n              <img src="').concat(n(ce),'" alt="man Oleksandr">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Oleksandr Suprun</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/parfors">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n              </p>\n          </div>\n          </li>\n      </ul>\n    </div>')}function fe(e){document.querySelector(".backdrop__team-modal").innerHTML=e}function de(){var e=document.querySelector(".backdrop__team-modal");e.classList.remove("is-hidden"),document.addEventListener("keydown",he),document.querySelector(".team-modal__btn-close").addEventListener("click",pe),e.addEventListener("click",ve)}function pe(){var e=document.querySelector(".backdrop__team-modal");e.classList.add("is-hidden"),document.removeEventListener("keydown",he),e.removeEventListener("click",onBtnCloseTeamModal)}function he(e){"Escape"===e.code&&pe()}function ve(e){e.currentTarget===e.target&&pe()}function me(){return ge.apply(this,arguments)}function ge(){return(ge=n(V)(n(B).mark((function e(){var t;return n(B).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:return t=e.sent,e.next=5,fe(t);case 5:de();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}ce=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8Lcim");var be=document.querySelector("#root");document.addEventListener("DOMContentLoaded",function(){F(),be.insertAdjacentHTML("afterbegin",'<div class="container auth">\n  <div id="user-container" class="nav-list__item">\n    <div hidden id="user-pic"></div>\n    <div hidden id="user-name"></div>\n    <button hidden id="sign-out" class="mdl-button mdl-js-button mdl-js-ripple-effect">\n      Sign-out\n    </button>\n    <button id="sign-in" class="mdl-button mdl-js-button mdl-js-ripple-effect">\n      <i class="material-icons">account_circle</i>\n      Sign-in with Google\n    </button>\n  </div>\n  </div>\n'),be.insertAdjacentHTML("beforeend",'\n  <main>\n    <section class="section">\n      <div class="container">\n        <h2 class="visually-hidden">Gallery list</h2>\n        <ul class="gallery"></ul>\n        <div class="pagination">\n          \n        </div>\n      </div>\n    </section>\n  </main>'),be.insertAdjacentHTML("beforeend",'<footer>\n  <div class="footer__container container">\n    <p class="footer__text">© 2020 | All Rights Reserved |</p>\n    <p class="footer__text">\n      Developed with<svg xmlns="http://www.w3.org/2000/svg" id="icon-heart" class="footer__icon" viewBox="0 0 34 32" width="14" height="13">\n      <path\n        d="M17.231 31.705l-2.412-2.412c-8.96-7.926-14.818-13.268-14.818-19.815 0-5.342 4.135-9.477 9.477-9.477 2.929 0 5.858 1.378 7.754 3.618 1.895-2.24 4.825-3.618 7.754-3.618 5.342 0 9.477 4.135 9.477 9.477 0 6.548-5.858 11.889-14.818 19.815l-2.412 2.412z"\n      ></path>\n    </svg>by\n      <button type="button" class="footer__button">GoIT Students</button>\n    </p>\n  </div>\n</footer>'),be.insertAdjacentHTML("beforeend",'<div class="backdrop is-hidden"></div>'),be.insertAdjacentHTML("beforeend",'<div class="backdrop__team-modal is-hidden"></div>'),document.querySelector(".footer__button").addEventListener("click",me);document.querySelector(".gallery").addEventListener("click",ee);_()}(),{once:!0})}();
//# sourceMappingURL=index.50d3126e.js.map
