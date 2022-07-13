!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},a=t.parcelRequire62bd;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire62bd=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new L(r||[]);return a._invoke=function(e,t,n){var r=d;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw a;return P()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=E(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?h:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,k=_&&_(_(O([])));k&&k!==n&&r.call(k,a)&&(b=k);var w=y.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(d).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function O(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:P}}function P(){return{value:t,done:!0}}return g.prototype=y,u(w,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},x(I.prototype),u(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new I(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(w),u(w,s,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("3SEMc",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return a("a0wpL").Q})),e(t.exports,"signInWithPopup",(function(){return a("a0wpL").c})),e(t.exports,"getAuth",(function(){return a("a0wpL").n})),e(t.exports,"signOut",(function(){return a("a0wpL").y})),e(t.exports,"onAuthStateChanged",(function(){return a("a0wpL").v})),a("eMcUM")})),a.register("eMcUM",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return a("a0wpL").Q})),e(t.exports,"getAuth",(function(){return a("a0wpL").n})),e(t.exports,"onAuthStateChanged",(function(){return a("a0wpL").v})),e(t.exports,"signInWithPopup",(function(){return a("a0wpL").c})),e(t.exports,"signOut",(function(){return a("a0wpL").y})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("a0wpL")})),a.register("2xDiJ",(function(t,r){e(t.exports,"base64urlEncodeWithoutPadding",(function(){return h})),e(t.exports,"base64Decode",(function(){return v})),e(t.exports,"Deferred",(function(){return m})),e(t.exports,"getUA",(function(){return g})),e(t.exports,"isMobileCordova",(function(){return y})),e(t.exports,"isBrowserExtension",(function(){return b})),e(t.exports,"isReactNative",(function(){return _})),e(t.exports,"isIE",(function(){return k})),e(t.exports,"isIndexedDBAvailable",(function(){return w})),e(t.exports,"validateIndexedDBOpenable",(function(){return x})),e(t.exports,"FirebaseError",(function(){return I})),e(t.exports,"ErrorFactory",(function(){return E})),e(t.exports,"isEmpty",(function(){return L})),e(t.exports,"deepEqual",(function(){return O})),e(t.exports,"querystring",(function(){return A})),e(t.exports,"querystringDecode",(function(){return R})),e(t.exports,"extractQuerystring",(function(){return C})),e(t.exports,"createSubscribe",(function(){return M})),e(t.exports,"getModularInstance",(function(){return j}));var i=a("ds8z5"),o=a("8MBJY"),s=a("a2hTj"),u=a("eYQtU"),c=a("1t1Wn"),l=(a("8nrFW"),a("4c7YB")),d=a("2MbLg"),f=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,d=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(f=64)),r.push(n[l],n[d],n[f],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(f(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var d=s<<6&192|u;r.push(d)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){return function(e){var t=f(e);return p.encodeByteArray(t,!0)}(e).replace(/\./g,"")},v=function(e){try{return p.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function b(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function _(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function k(){var e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return"object"==typeof indexedDB}function x(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
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
var I=function(e){"use strict";n(u)(r,e);var t=n(d)(r);function r(e,a,s){var u;return n(o)(this,r),(u=t.call(this,a)).code=e,u.customData=s,u.name="FirebaseError",Object.setPrototypeOf(n(i)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(n(i)(u),E.prototype.create),u}return r}(n(l)(Error)),E=function(){"use strict";function e(t,r,i){n(o)(this,e),this.service=t,this.serviceName=r,this.errors=i}return n(s)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?T(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new I(a,u,i);return c}}]),e}();function T(e,t){return e.replace(S,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var S=/\{\$([^}]+)}/g;
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
 */function L(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function O(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],d=t[c];if(P(l)&&P(d)){if(!O(l,d))return!1}else if(l!==d)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{f||null==m.return||m.return()}finally{if(p)throw h}}return!0}function P(e){return null!==e&&"object"==typeof e}
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
 */function A(e){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=n(c)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){t.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return t.length?"&"+t.join("&"):""}function R(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=n(c)(e.split("="),2),i=r[0],a=r[1];t[decodeURIComponent(i)]=decodeURIComponent(a)}})),t}function C(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function M(e,t){var n=new N(e,t);return n.subscribe.bind(n)}var N=function(){"use strict";function e(t,r){var i=this;n(o)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){t(i)})).catch((function(e){i.error(e)}))}return n(s)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function D(){}
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
function j(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=s(a("8slrw")),r=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=s(a("kMC0W")),r=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(a("ge8co")),r=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return n.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("MjY8E",(function(t,r){e(t.exports,"_registerComponent",(function(){return T})),e(t.exports,"_getProvider",(function(){return S})),e(t.exports,"SDK_VERSION",(function(){return A})),e(t.exports,"initializeApp",(function(){return R})),e(t.exports,"getApp",(function(){return C})),e(t.exports,"registerVersion",(function(){return M}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),d=a("6ExWU"),f=a("kZfxc"),p=a("2xDiJ"),h=a("ajgRO"),v=(p=a("2xDiJ"),function(){"use strict";function e(t){n(o)(this,e),this.container=t}return n(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var m,g,y="@firebase/app",b="0.7.27",_=new(0,f.Logger)("@firebase/app"),k="[DEFAULT]",w=(m={},n(u)(m,y,"fire-core"),n(u)(m,"@firebase/app-compat","fire-core-compat"),n(u)(m,"@firebase/analytics","fire-analytics"),n(u)(m,"@firebase/analytics-compat","fire-analytics-compat"),n(u)(m,"@firebase/app-check","fire-app-check"),n(u)(m,"@firebase/app-check-compat","fire-app-check-compat"),n(u)(m,"@firebase/auth","fire-auth"),n(u)(m,"@firebase/auth-compat","fire-auth-compat"),n(u)(m,"@firebase/database","fire-rtdb"),n(u)(m,"@firebase/database-compat","fire-rtdb-compat"),n(u)(m,"@firebase/functions","fire-fn"),n(u)(m,"@firebase/functions-compat","fire-fn-compat"),n(u)(m,"@firebase/installations","fire-iid"),n(u)(m,"@firebase/installations-compat","fire-iid-compat"),n(u)(m,"@firebase/messaging","fire-fcm"),n(u)(m,"@firebase/messaging-compat","fire-fcm-compat"),n(u)(m,"@firebase/performance","fire-perf"),n(u)(m,"@firebase/performance-compat","fire-perf-compat"),n(u)(m,"@firebase/remote-config","fire-rc"),n(u)(m,"@firebase/remote-config-compat","fire-rc-compat"),n(u)(m,"@firebase/storage","fire-gcs"),n(u)(m,"@firebase/storage-compat","fire-gcs-compat"),n(u)(m,"@firebase/firestore","fire-fst"),n(u)(m,"@firebase/firestore-compat","fire-fst-compat"),n(u)(m,"fire-js","fire-js"),n(u)(m,"firebase","fire-js-all"),m),x=new Map,I=new Map;function E(e,t){try{e.container.addComponent(t)}catch(n){_.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function T(e){var t=e.name;if(I.has(t))return _.debug("There were multiple attempts to register component ".concat(t,".")),!1;I.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=x.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){E(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function S(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var L=(g={},n(u)(g,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),n(u)(g,"bad-app-name","Illegal App name: '{$appName}"),n(u)(g,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),n(u)(g,"app-deleted","Firebase App named '{$appName}' already deleted"),n(u)(g,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),n(u)(g,"invalid-log-argument","First argument to `onLog` must be null or a function."),n(u)(g,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),n(u)(g,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),n(u)(g,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),n(u)(g,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),g),O=new(0,p.ErrorFactory)("app","Firebase",L),P=function(){"use strict";function e(t,r,i){var a=this;n(o)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,d.Component)("app",(function(){return a}),"PUBLIC"))}return n(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}}]),e}(),A="9.8.4";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:k,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw O.create("bad-app-name",{appName:String(i)});var a=x.get(i);if(a){if((0,p.deepEqual)(e,a.options)&&(0,p.deepEqual)(r,a.config))return a;throw O.create("duplicate-app",{appName:i})}var o=new(0,d.ComponentContainer)(i),s=!0,u=!1,c=void 0;try{for(var l,f=I.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value;o.addComponent(h)}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}var v=new P(e,r,o);return x.set(i,v),v}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=x.get(e);if(!t)throw O.create("no-app",{appName:e});return t}function M(e,t,n){var r,i=null!==(r=w[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void _.warn(s.join(" "))}T(new(0,d.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var N="firebase-heartbeat-store",D=null;function j(){return D||(D=(0,h.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(N)}}).catch((function(e){throw O.create("storage-open",{originalErrorMessage:e.message})}))),D}function U(e){return F.apply(this,arguments)}function F(){return(F=n(i)(n(l).mark((function e(t){var r,i;return n(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,j();case 4:return i=e.sent,e.abrupt("return",i.transaction(N).objectStore(N).get(V(t)));case 8:throw e.prev=8,e.t0=e.catch(1),O.create("storage-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function q(e,t){return H.apply(this,arguments)}function H(){return(H=n(i)(n(l).mark((function e(t,r){var i,a,o,s;return n(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,j();case 4:return a=e.sent,o=a.transaction(N,"readwrite"),s=o.objectStore(N),e.next=9,s.put(r,V(t));case 9:return e.abrupt("return",o.done);case 12:throw e.prev=12,e.t0=e.catch(1),O.create("storage-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function V(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var B=function(){"use strict";function e(t){var r=this;n(o)(this,e),this.container=t,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new K(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return n(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r,i,a;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=W(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),t)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r,i,a,o,s;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=W(),i=z(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,p.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),t)})))()}}]),e}();function W(){return(new Date).toISOString().substring(0,10)}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),G(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),G(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var J,K=function(){"use strict";function e(t){n(o)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return n(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return n(i)(n(l).mark((function e(){return n(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,p.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,U(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),t)})))()}},{key:"overwrite",value:function(e){var t=this;return n(i)(n(l).mark((function r(){var i,a;return n(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,t.read();case 10:return a=n.sent,n.abrupt("return",q(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return n.stop()}}),r)})))()}},{key:"add",value:function(e){var t=this;return n(i)(n(l).mark((function r(){var i,a;return n(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,t.read();case 10:return a=r.sent,r.abrupt("return",q(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:n(c)(a.heartbeats).concat(n(c)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function G(e){return(0,p.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */J="",T(new(0,d.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),T(new(0,d.Component)("heartbeat",(function(e){return new B(e)}),"PRIVATE")),M(y,b,J),M(y,b,"esm2017"),M("fire-js","")})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("6ExWU",(function(t,r){e(t.exports,"Component",(function(){return f})),e(t.exports,"ComponentContainer",(function(){return v}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),d=a("2xDiJ"),f=function(){"use strict";function e(t,r,i){n(o)(this,e),this.name=t,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return n(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),p="[DEFAULT]",h=function(){"use strict";function e(t,r){n(o)(this,e),this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return n(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,d.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:p})}catch(e){}var t=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=n(u)(a.value,2),c=s[0],l=s[1],d=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:d});l.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Array.from(e.instances.values()),t.next=3,Promise.all(n(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(n(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return t.stop()}}),t)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,d=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=d.next()).done);o=!0){var f=n(u)(l.value,2),p=f[0],h=f[1],v=this.normalizeInstanceIdentifier(p);i===v&&h.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==d.return||d.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===p?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.component?this.component.multipleInstances?e:p:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var v=function(){"use strict";function e(t){n(o)(this,e),this.name=t,this.providers=new Map}return n(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new h(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),a.register("kZfxc",(function(t,r){e(t.exports,"LogLevel",(function(){return i})),e(t.exports,"Logger",(function(){return g})),e(t.exports,"setLogLevel",(function(){return y})),e(t.exports,"setUserLogHandler",(function(){return b}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),d=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var f,p={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},h=i.INFO,v=(f={},n(c)(f,i.DEBUG,"log"),n(c)(f,i.VERBOSE,"log"),n(c)(f,i.INFO,"info"),n(c)(f,i.WARN,"warn"),n(c)(f,i.ERROR,"error"),f),m=function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(t<e.logLevel)){var s=(new Date).toISOString(),u=v[t];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(n(l)(i)))}},g=function(){"use strict";function e(t){n(s)(this,e),this.name=t,this._logLevel=h,this._logHandler=m,this._userLogHandler=null,d.push(this)}return n(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?p[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(n(l)(t))),this._logHandler.apply(this,[this,i.DEBUG].concat(n(l)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(n(l)(t))),this._logHandler.apply(this,[this,i.VERBOSE].concat(n(l)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(n(l)(t))),this._logHandler.apply(this,[this,i.INFO].concat(n(l)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(n(l)(t))),this._logHandler.apply(this,[this,i.WARN].concat(n(l)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(n(l)(t))),this._logHandler.apply(this,[this,i.ERROR].concat(n(l)(t)))}}]),e}();function y(e){d.forEach((function(t){t.setLogLevel(e)}))}function b(e,t){var n=!0,r=!1,a=void 0;try{for(var o,s=d[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,c=null;t&&t.level&&(c=p[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}})),a.register("ajgRO",(function(t,r){e(t.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var d=["get","getKey","getAll","getAllKeys","count"],f=["put","add","delete","clear"],p=new Map;function h(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(p.get(t))return p.get(t);var r=t.replace(/FromIndex$/,""),a=t!==r,o=f.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||d.includes(r))){var c,l=(c=n(i)(n(u).mark((function e(t){var i,c,l,d,f,p,h=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=h.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=h[l];return f=this.transaction(t,o?"readwrite":"readonly"),p=f.store,a&&(p=p.index(c.shift())),e.next=7,Promise.all([(d=p)[r].apply(d,n(s)(c)),o&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return p.set(t,l),l}}}(0,c.r)((function(e){return n(o)({},e,{get:function(t,n,r){return h(t,n)||e.get(t,n,r)},has:function(t,n){return!!h(t,n)||e.has(t,n)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("kKOTz",(function(t,r){e(t.exports,"w",(function(){return g})),e(t.exports,"r",(function(){return h}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,d=new WeakMap,f=new WeakMap;var p={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function h(e){p=e(p)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(y(this),n),g(u.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(e.apply(y(this),n))}:function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,u=(o=e).call.apply(o,[y(this),t].concat(n(s)(i)));return l.set(u,t.sort?t.sort():[t]),g(u)}}function m(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,p):e);var t}function g(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(g(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),f.set(n,t),n;var t,n;if(d.has(e))return d.get(e);var r=m(e);return r!==e&&(d.set(e,r),f.set(r,e)),r}var y=function(e){return f.get(e)}})),a.register("a0wpL",(function(t,r){e(t.exports,"Q",(function(){return yt})),e(t.exports,"v",(function(){return At})),e(t.exports,"y",(function(){return Rt})),e(t.exports,"c",(function(){return In})),e(t.exports,"n",(function(){return yr}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),d=a("fVNic"),f=a("eYQtU"),p=a("1t1Wn"),h=a("8nrFW"),v=a("2MbLg"),m=a("2TvXO"),g=a("2xDiJ"),y=a("MjY8E"),b=a("4tSb9"),_=a("kZfxc"),k=a("6ExWU");function w(){return n(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var x=w,I=new(0,g.ErrorFactory)("auth","Firebase",w()),E=new(0,_.Logger)("@firebase/auth");function T(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a;E.logLevel<=_.LogLevel.ERROR&&(a=E).error.apply(a,["Auth (".concat(y.SDK_VERSION,"): ").concat(e)].concat(n(h)(r)))}
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
 */function S(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];throw A.apply(void 0,[e].concat(n(h)(r)))}function L(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return A.apply(void 0,[e].concat(n(h)(r)))}function O(e,t,r){var i=Object.assign(Object.assign({},x()),n(c)({},t,r));return new(0,g.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function P(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&S(e,"argument-error"),O(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function A(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=n(h)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(n(h)(u)))}return(a=I).create.apply(a,[e].concat(n(h)(r)))}function R(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw A.apply(void 0,[t].concat(n(h)(i)))}function C(e){var t="INTERNAL ASSERTION FAILED: "+e;throw T(t),new Error(t)}function M(e,t){e||C(t)}
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
 */var N=new Map;function D(e){M(e instanceof Function,"Expected a class definition");var t=N.get(e);return t?(M(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,N.set(e,t),t)}
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
 */function j(e,t){var n=(0,y._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,g.deepEqual)(i,null!=t?t:{}))return r;S(r,"already-initialized")}return n.initialize({options:t})}
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
function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function F(){return"http:"===q()||"https:"===q()}function q(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
var H=function(){"use strict";function e(t,r){n(s)(this,e),this.shortDelay=t,this.longDelay=r,M(r>t,"Short delay should be less than long delay!"),this.isMobile=(0,g.isMobileCordova)()||(0,g.isReactNative)()}return n(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(F()||(0,g.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
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
 */function V(e,t){M(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var B,W=function(){"use strict";function e(){n(s)(this,e)}return n(u)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void C("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void C("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void C("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),z=(B={},n(c)(B,"CREDENTIAL_MISMATCH","custom-token-mismatch"),n(c)(B,"MISSING_CUSTOM_TOKEN","internal-error"),n(c)(B,"INVALID_IDENTIFIER","invalid-email"),n(c)(B,"MISSING_CONTINUE_URI","internal-error"),n(c)(B,"INVALID_PASSWORD","wrong-password"),n(c)(B,"MISSING_PASSWORD","internal-error"),n(c)(B,"EMAIL_EXISTS","email-already-in-use"),n(c)(B,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),n(c)(B,"INVALID_IDP_RESPONSE","invalid-credential"),n(c)(B,"INVALID_PENDING_TOKEN","invalid-credential"),n(c)(B,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),n(c)(B,"MISSING_REQ_TYPE","internal-error"),n(c)(B,"EMAIL_NOT_FOUND","user-not-found"),n(c)(B,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),n(c)(B,"EXPIRED_OOB_CODE","expired-action-code"),n(c)(B,"INVALID_OOB_CODE","invalid-action-code"),n(c)(B,"MISSING_OOB_CODE","internal-error"),n(c)(B,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),n(c)(B,"INVALID_ID_TOKEN","invalid-user-token"),n(c)(B,"TOKEN_EXPIRED","user-token-expired"),n(c)(B,"USER_NOT_FOUND","user-token-expired"),n(c)(B,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),n(c)(B,"INVALID_CODE","invalid-verification-code"),n(c)(B,"INVALID_SESSION_INFO","invalid-verification-id"),n(c)(B,"INVALID_TEMPORARY_PROOF","invalid-credential"),n(c)(B,"MISSING_SESSION_INFO","missing-verification-id"),n(c)(B,"SESSION_EXPIRED","code-expired"),n(c)(B,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),n(c)(B,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),n(c)(B,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),n(c)(B,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),n(c)(B,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),n(c)(B,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),n(c)(B,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),n(c)(B,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),n(c)(B,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),n(c)(B,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),n(c)(B,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),B),J=new H(3e4,6e4);function K(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function G(e,t,n,r){return Q.apply(this,arguments)}function Q(){return Q=n(o)(n(m).mark((function e(t,r,i,a){var s,u=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",Y(t,s,n(o)(n(m).mark((function e(){var o,s,u,c;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=(0,g.querystring)(Object.assign({key:t.config.apiKey},s)).slice(1),e.next=6,t._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),e.abrupt("return",W.fetch()(ee(t,t.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function Y(e,t,n){return X.apply(this,arguments)}function X(){return(X=n(o)(n(m).mark((function e(t,r,i){var a,o,s,u,c,l,d,f,h;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,a=Object.assign(Object.assign({},z),r),e.prev=2,o=new te(t),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw ne(t,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=n(p)(c.split(" : "),2),d=l[0],f=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){e.next=23;break}throw ne(t,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==d){e.next=27;break}throw ne(t,"email-already-in-use",u);case 27:if("USER_DISABLED"!==d){e.next=29;break}throw ne(t,"user-disabled",u);case 29:if(h=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!f){e.next=34;break}throw O(t,h,f);case 34:S(t,h);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof g.FirebaseError)){e.next=41;break}throw e.t0;case 41:S(t,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function $(e,t,n,r){return Z.apply(this,arguments)}function Z(){return Z=n(o)(n(m).mark((function e(t,r,i,a){var o,s,u=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,G(t,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&S(t,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}function ee(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?V(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var te=function(){"use strict";function e(t){var r=this;n(s)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(L(n.auth,"network-request-failed"))}),J.get())}))}return n(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function ne(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=L(e,t,r);return i.customData._tokenResponse=n,i}function re(e,t){return ie.apply(this,arguments)}function ie(){return(ie=
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
 */function ue(){return ue=n(o)(n(m).mark((function e(t){var r,i,a,o,s,u,c=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,g.getModularInstance)(t),e.next=4,i.getIdToken(r);case 4:return a=e.sent,R((o=le(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:se(ce(o.auth_time)),issuedAtTime:se(ce(o.iat)),expirationTime:se(ce(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}function ce(e){return 1e3*Number(e)}function le(e){var t,r=n(p)(e.split("."),3),i=r[0],a=r[1],o=r[2];if(void 0===i||void 0===a||void 0===o)return T("JWT malformed, contained fewer than 3 sections"),null;try{var s=(0,g.base64Decode)(a);return s?JSON.parse(s):(T("Failed to decode base64 JWT payload"),null)}catch(e){return T("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}function de(e,t){return fe.apply(this,arguments)}function fe(){return fe=
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
n(o)(n(m).mark((function e(t,r){var i=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof g.FirebaseError&&pe(e.t0))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),fe.apply(this,arguments)}function pe(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
n(o)(n(m).mark((function e(t){var r,i,a,o,s,u,c,l,d,f,p;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.auth,e.next=4,t.getIdToken();case 4:return a=e.sent,e.next=7,de(t,ae(i,{idToken:a}));case 7:R(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],t._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?_e(s.providerUserInfo):[],c=be(t.providerData,u),l=t.isAnonymous,d=!(t.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!l&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ve(s.createdAt,s.lastLoginAt),isAnonymous:f},Object.assign(t,p);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(){return(ye=n(o)(n(m).mark((function e(t){var r;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,g.getModularInstance)(t),e.next=3,me(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(e,t){var r=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return n(h)(r).concat(n(h)(t))}function _e(e){return e.map((function(e){var t=e.providerId,n=(0,b.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ke(e,t){return we.apply(this,arguments)}function we(){return(we=
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
n(o)(n(m).mark((function e(t,r){var i;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t,{},n(o)(n(m).mark((function e(){var i,a,o,s,u,c;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,g.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=t.config,o=a.tokenApiHost,s=a.apiKey,u=ee(t,o,"/v1/token","key=".concat(s)),e.next=5,t._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",W.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var xe=function(){"use strict";function e(){n(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return n(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){R(e.idToken,"internal-error"),R(void 0!==e.idToken,"internal-error"),R(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,R(n=le(t),"internal-error"),R(void 0!==n.exp,"internal-error"),R(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(m).mark((function i(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(R(!r.accessToken||r.refreshToken,e,"user-token-expired"),t||!r.accessToken||r.isExpired){n.next=3;break}return n.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){n.next=7;break}return n.next=6,r.refresh(e,r.refreshToken);case 6:return n.abrupt("return",r.accessToken);case 7:return n.abrupt("return",null);case 8:case"end":return n.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var r=this;return n(o)(n(m).mark((function i(){var a,o,s,u;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ke(e,t);case 2:a=n.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return n.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return C("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(R("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(R("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(R("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
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
 */function Ie(e,t){R("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ee=function(){"use strict";function e(t){n(s)(this,e);var r=t.uid,i=t.auth,a=t.stsTokenManager,o=(0,b.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new he(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?n(h)(o.providerData):[],this.metadata=new ve(o.createdAt||void 0,o.lastLoginAt||void 0)}return n(u)(e,[{key:"getIdToken",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,de(t,t.stsTokenManager.getToken(t.auth,e));case 2:if(R(i=n.sent,t.auth,"internal-error"),t.accessToken===i){n.next=9;break}return t.accessToken=i,n.next=8,t.auth._persistUserIfCurrent(t);case 8:t.auth._notifyListenersIfCurrent(t);case 9:return n.abrupt("return",i);case 10:case"end":return n.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ue.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ye.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(m).mark((function i(){var a;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!t){n.next=5;break}return n.next=5,me(r);case 5:return n.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return n.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,de(e,re(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),t)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,d=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,p=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,b=n.uid,_=n.emailVerified,k=n.isAnonymous,w=n.providerData,x=n.stsTokenManager;R(b&&x,t,"internal-error");var I=xe.fromJSON(this.name,x);R("string"==typeof b,t,"internal-error"),Ie(d,t.name),Ie(f,t.name),R("boolean"==typeof _,t,"internal-error"),R("boolean"==typeof k,t,"internal-error"),Ie(p,t.name),Ie(h,t.name),Ie(v,t.name),Ie(m,t.name),Ie(g,t.name),Ie(y,t.name);var E=new e({uid:b,auth:t,email:f,emailVerified:_,displayName:d,isAnonymous:k,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(E.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(o)(n(m).mark((function a(){var o,s;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=new xe).updateFromServerResponse(r),s=new e({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:i}),n.next=5,me(s);case 5:return n.abrupt("return",s);case 6:case"end":return n.stop()}}),a)})))()}}]),e}(),Te=function(){"use strict";function e(){n(s)(this,e),this.type="NONE",this.storage={}}return n(u)(e,[{key:"_isAvailable",value:function(){return n(o)(n(m).mark((function e(){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,t){var r=this;return n(o)(n(m).mark((function i(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.storage[e]=t;case 1:case"end":return n.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.storage[e],n.abrupt("return",void 0===i?null:i);case 2:case"end":return n.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:delete t.storage[e];case 1:case"end":return n.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
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
 */Te.type="NONE";var Se=Te;
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
 */function Le(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Oe=function(){"use strict";function e(t,r,i){n(s)(this,e),this.persistence=t,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Le(this.userKey,o.apiKey,u),this.fullPersistenceKey=Le("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return n(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?Ee._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),t)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.persistence!==e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.getCurrentUser();case 4:return i=n.sent,n.next=7,t.removeCurrentUser();case 7:if(t.persistence=e,!i){n.next=10;break}return n.abrupt("return",t.setCurrentUser(i));case 10:case"end":return n.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return n(o)(n(m).mark((function a(){var s,u,c,l,d,f,p,h,v,g,y,b,_;return n(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(D(Se),t,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=n(o)(n(m).mark((function e(t){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||D(Se),c=Le(i,t.config.apiKey,t.name),l=null,d=!0,f=!1,p=void 0,a.prev=9,h=r[Symbol.iterator]();case 11:if(d=(v=h.next()).done){a.next=29;break}return g=v.value,a.prev=13,a.next=16,g._get(c);case 16:if(!(y=a.sent)){a.next=22;break}return b=Ee._fromJSON(t,y),g!==u&&(l=b),u=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:d=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),f=!0,p=a.t1;case 35:a.prev=35,a.prev=36,d||null==h.return||h.return();case 38:if(a.prev=38,!f){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(_=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&_.length){a.next=46;break}return a.abrupt("return",new e(u,t,i));case 46:if(u=_[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=n(o)(n(m).mark((function e(t){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===u){e.next=8;break}return e.prev=1,e.next=4,t._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,t,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
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
 */function Pe(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ae(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(De(t))return"Blackberry";if(je(t))return"Webos";if(Re(t))return"Safari";if((t.includes("chrome/")||Ce(t))&&!t.includes("edge/"))return"Chrome";if(Ne(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/firefox\//i.test(e)}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/crios\//i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iemobile/i.test(e)}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/android/i.test(e)}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/blackberry/i.test(e)}function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/webos/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iphone|ipad|ipod/i.test(e)}function Fe(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function qe(){return(0,g.isIE)()&&10===document.documentMode}function He(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(e)||Ne(e)||je(e)||De(e)||/windows phone/i.test(e)||Me(e)}
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
function Ve(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Pe((0,g.getUA)());break;case"Worker":t="".concat(Pe((0,g.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(y.SDK_VERSION,"/").concat(r)}
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
 */var Be=function(){"use strict";function e(t){n(s)(this,e),this.auth=t,this.queue=[]}return n(u)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a,o,s,u,c,l,d,f,p,h,v,g,y;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.auth.currentUser!==e){n.next=3;break}return n.abrupt("return");case 3:a=[],n.prev=4,o=!0,s=!1,u=void 0,n.prev=6,c=t.queue[Symbol.iterator]();case 8:if(o=(l=c.next()).done){n.next=16;break}return d=l.value,n.next=12,d(e);case 12:d.onAbort&&a.push(d.onAbort);case 13:o=!0,n.next=8;break;case 16:n.next=22;break;case 18:n.prev=18,n.t0=n.catch(6),s=!0,u=n.t0;case 22:n.prev=22,n.prev=23,o||null==c.return||c.return();case 25:if(n.prev=25,!s){n.next=28;break}throw u;case 28:return n.finish(25);case 29:return n.finish(22);case 30:n.next=53;break;case 32:for(n.prev=32,n.t1=n.catch(4),a.reverse(),f=!0,p=!1,h=void 0,n.prev=36,v=a[Symbol.iterator]();!(f=(g=v.next()).done);f=!0){y=g.value;try{y()}catch(e){}}n.next=44;break;case 40:n.prev=40,n.t2=n.catch(36),p=!0,h=n.t2;case 44:n.prev=44,n.prev=45,f||null==v.return||v.return();case 47:if(n.prev=47,!p){n.next=50;break}throw h;case 50:return n.finish(47);case 51:return n.finish(44);case 52:throw t.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=n.t1)||void 0===i?void 0:i.message});case 53:case"end":return n.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),We=function(){"use strict";function e(t,r,i){n(s)(this,e),this.app=t,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Je(this),this.idTokenSubscription=new Je(this),this.beforeStateQueue=new Be(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}return n(u)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=D(t));var r=this;return this._initializationPromise=this.queue(n(o)(n(m).mark((function i(){var a,o;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._deleted){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,Oe.create(r,e);case 5:if(r.persistenceManager=n.sent,!r._deleted){n.next=8;break}return n.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){n.next=16;break}return n.prev=9,n.next=12,r._popupRedirectResolver._initialize(r);case 12:n.next=16;break;case 14:n.prev=14,n.t0=n.catch(9);case 16:return n.next=18,r.initializeCurrentUser(t);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){n.next=21;break}return n.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return n.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),t)})))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a,o,s,u,c,l;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t.assertedPersistence.getCurrentUser();case 3:if(a=n.sent,o=a,s=!1,!e||!t.config.authDomain){n.next=15;break}return n.next=9,t.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=t.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,n.next=13,t.tryRedirectSignIn(e);case 13:l=n.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){n.next=17;break}return n.abrupt("return",t.directlySetCurrentUser(null));case 17:if(o._redirectEventId){n.next=33;break}if(!s){n.next=28;break}return n.prev=19,n.next=22,t.beforeStateQueue.runMiddleware(o);case 22:n.next=28;break;case 24:n.prev=24,n.t0=n.catch(19),o=a,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(n.t0)}));case 28:if(!o){n.next=32;break}return n.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 32:return n.abrupt("return",t.directlySetCurrentUser(null));case 33:return R(t._popupRedirectResolver,t,"argument-error"),n.next=36,t.getOrInitRedirectPersistenceManager();case 36:if(!t.redirectUser||t.redirectUser._redirectEventId!==o._redirectEventId){n.next=38;break}return n.abrupt("return",t.directlySetCurrentUser(o));case 38:return n.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return n.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=null,n.prev=1,n.next=4,t._popupRedirectResolver._completeRedirectFn(t,e,!0);case 4:i=n.sent,n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(1),n.next=11,t._setRedirectUser(null);case 11:return n.abrupt("return",i);case 12:case"end":return n.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,me(e);case 4:n.next=10;break;case 6:if(n.prev=6,n.t0=n.catch(1),"auth/network-request-failed"===(null===(i=n.t0)||void 0===i?void 0:i.code)){n.next=10;break}return n.abrupt("return",t.directlySetCurrentUser(null));case 10:return n.abrupt("return",t.directlySetCurrentUser(e));case 11:case"end":return n.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),t)})))()}},{key:"updateCurrentUser",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=e?(0,g.getModularInstance)(e):null)&&R(i.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),n.abrupt("return",t._updateCurrentUser(i&&i._clone(t)));case 3:case"end":return n.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(m).mark((function i(){return n(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&R(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),t){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),t)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),t)})))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue(n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.assertedPersistence.setPersistence(D(e));case 2:case"end":return n.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,g.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var r=this;return n(o)(n(m).mark((function i(){var a;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.getOrInitRedirectPersistenceManager(t);case 2:return a=n.sent,n.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return n.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.redirectPersistenceManager){n.next=9;break}return R(i=e&&D(e)||t._popupRedirectResolver,t,"argument-error"),n.next=5,Oe.create(t,[D(i._redirectPersistence)],"redirectUser");case 5:return t.redirectPersistenceManager=n.sent,n.next=8,t.redirectPersistenceManager.getCurrentUser();case 8:t.redirectUser=n.sent;case 9:return n.abrupt("return",t.redirectPersistenceManager);case 10:case"end":return n.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a;return n(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t._isInitialized){r.next=4;break}return r.next=4,t.queue(n(o)(n(m).mark((function e(){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=t._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",t._currentUser);case 6:if((null===(a=t.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",t.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==t.currentUser){r.next=2;break}return r.abrupt("return",t.queue(n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.directlySetCurrentUser(e));case 1:case"end":return n.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.currentUser&&t.currentUser!==e&&(t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh()),t.currentUser=e,!e){n.next=7;break}return n.next=5,t.assertedPersistence.setCurrentUser(e);case 5:n.next=9;break;case 7:return n.next=9,t.assertedPersistence.removeCurrentUser();case 9:case"end":return n.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ve(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r,i,a;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),t.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=t.sent)&&(i["X-Firebase-Client"]=a),t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})))()}}]),e}();
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
 */function ze(e){return(0,g.getModularInstance)(e)}var Je=function(){"use strict";function e(t){var r=this;n(s)(this,e),this.auth=t,this.observer=null,this.addObserver=(0,g.createSubscribe)((function(e){return r.observer=e}))}return n(u)(e,[{key:"next",get:function(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
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
var Ke=function(){"use strict";function e(t,r){n(s)(this,e),this.providerId=t,this.signInMethod=r}return n(u)(e,[{key:"toJSON",value:function(){return C("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return C("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return C("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return C("not implemented")}}]),e}();function Ge(e,t){return Qe.apply(this,arguments)}function Qe(){return(Qe=n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(t,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ye(e,t){return Xe.apply(this,arguments)}function Xe(){return(Xe=
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
n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithPassword",K(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $e(e,t){return Ze.apply(this,arguments)}function Ze(){return(Ze=
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
n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithEmailLink",K(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function et(e,t){return tt.apply(this,arguments)}function tt(){return(tt=n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithEmailLink",K(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var nt=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(e,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return n(s)(this,r),(o=t.call(this,"password",a))._email=e,o._password=i,o._tenantId=u,o}return n(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=t.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",Ye(e,{returnSecureToken:!0,email:t._email,password:t._password}));case 4:return n.abrupt("return",$e(e,{email:t._email,oobCode:t._password}));case 5:S(e,"internal-error");case 6:case"end":return n.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,t){var r=this;return n(o)(n(m).mark((function i(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=r.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",Ge(e,{idToken:t,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return n.abrupt("return",et(e,{idToken:t,email:r._email,oobCode:r._password}));case 5:S(e,"internal-error");case 6:case"end":return n.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Ke);function rt(e,t){return it.apply(this,arguments)}function it(){return(it=
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
n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithIdp",K(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var at=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(){var e;return n(s)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return n(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return rt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,rt(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,rt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,g.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):S("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=(0,b.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Ke);function ot(e,t){return st.apply(this,arguments)}function st(){return(st=
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
n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(t,"POST","/v1/accounts:sendVerificationCode",K(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ut(){return(ut=n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithPhoneNumber",K(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ct(){return(ct=n(o)(n(m).mark((function e(t,r){var i;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(t,"POST","/v1/accounts:signInWithPhoneNumber",K(t,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw ne(t,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var lt=n(c)({},"USER_NOT_FOUND","user-not-found");function dt(){return(dt=n(o)(n(m).mark((function e(t,r){var i;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",$(t,"POST","/v1/accounts:signInWithPhoneNumber",K(t,i),lt));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var ft=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(e){var i;return n(s)(this,r),(i=t.call(this,"phone","phone")).params=e,i}return n(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ut.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ct.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return dt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Ke);
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
 */var pt=function(){"use strict";function e(t){var r,i,a,o,u,c;n(s)(this,e);var l=(0,g.querystringDecode)((0,g.extractQuerystring)(t)),d=null!==(r=l.apiKey)&&void 0!==r?r:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);R(d&&f&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=f,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return n(u)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).link,n=t?(0,g.querystringDecode)((0,g.extractQuerystring)(t)).deep_link_id:null,r=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).deep_link_id;return(r?(0,g.querystringDecode)((0,g.extractQuerystring)(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
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
var ht=function(){"use strict";function e(){n(s)(this,e),this.providerId=e.PROVIDER_ID}return n(u)(e,null,[{key:"credential",value:function(e,t){return nt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=pt.parseLink(t);return R(n,"argument-error"),nt._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var vt=function(){"use strict";function e(t){n(s)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return n(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),mt=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(){var e;return n(s)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return n(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return n(h)(this.scopes)}}]),r}(vt),gt=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(){return n(s)(this,r),t.call(this,"facebook.com")}return n(u)(r,null,[{key:"credential",value:function(e){return at._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(mt);
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
var yt=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(){var e;return n(s)(this,r),(e=t.call(this,"google.com")).addScope("profile"),e}return n(u)(r,null,[{key:"credential",value:function(e,t){return at._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(mt);yt.GOOGLE_SIGN_IN_METHOD="google.com",yt.PROVIDER_ID="google.com";
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
var bt=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(){return n(s)(this,r),t.call(this,"github.com")}return n(u)(r,null,[{key:"credential",value:function(e){return at._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(mt);bt.GITHUB_SIGN_IN_METHOD="github.com",bt.PROVIDER_ID="github.com";
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
var _t=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(){return n(s)(this,r),t.call(this,"twitter.com")}return n(u)(r,null,[{key:"credential",value:function(e,t){return at._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(mt);_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";
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
var kt=function(){"use strict";function e(t){n(s)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return n(u)(e,null,[{key:"_fromIdTokenResponse",value:function(t,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n(o)(n(m).mark((function o(){var s,u,c;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Ee._fromIdTokenResponse(t,i,a);case 2:return s=n.sent,u=wt(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),n.abrupt("return",c);case 6:case"end":return n.stop()}}),o)})))()}},{key:"_forOperation",value:function(t,r,i){return n(o)(n(m).mark((function a(){var o;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._updateTokensIfNecessary(i,!0);case 2:return o=wt(i),n.abrupt("return",new e({user:t,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return n.stop()}}),a)})))()}}]),e}();function wt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var xt=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(e,a,o,u){var c,l;return n(s)(this,r),(c=t.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(n(i)(c),r.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return n(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(g.FirebaseError);function It(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw xt._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function Et(e,t){return Tt.apply(this,arguments)}function Tt(){return Tt=n(o)(n(m).mark((function e(t,r){var i,a,o=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=de,e.t1=t,e.t2=r,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",kt._forOperation(t,"link",a));case 14:case"end":return e.stop()}}),e)}))),Tt.apply(this,arguments)}function St(e,t){return Lt.apply(this,arguments)}function Lt(){return Lt=
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
n(o)(n(m).mark((function e(t,r){var i,a,o,s,u,c,l,d=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>2&&void 0!==d[2]&&d[2],o=t.auth,s="reauthenticate",e.prev=4,e.next=7,de(t,It(o,s,r,t),i);case 7:return R((u=e.sent).idToken,o,"internal-error"),R(c=le(u.idToken),o,"internal-error"),l=c.sub,R(t.uid===l,o,"user-mismatch"),e.abrupt("return",kt._forOperation(t,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&S(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])}))),Lt.apply(this,arguments)}function Ot(e,t){return Pt.apply(this,arguments)}function Pt(){return Pt=
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
n(o)(n(m).mark((function e(t,r){var i,a,o,s,u=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,It(t,a,r);case 4:return o=e.sent,e.next=7,kt._fromIdTokenResponse(t,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,t._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Pt.apply(this,arguments)}function At(e,t,n,r){return(0,g.getModularInstance)(e).onAuthStateChanged(t,n,r)}function Rt(e){return(0,g.getModularInstance)(e).signOut()}
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
function Ct(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:start",K(e,t))}new WeakMap;var Mt="__sak",Nt=function(){"use strict";function e(t,r){n(s)(this,e),this.storageRetriever=t,this.type=r}return n(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Mt,"1"),this.storage.removeItem(Mt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
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
 */var Dt=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(){var e,i;return n(s)(this,r),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Re(i=(0,g.getUA)())||Ue(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=He(),e._shouldAllowMigration=!0,e}return n(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);qe()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var i=this,a=this;return n(o)(n(m).mark((function o(){return n(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n(l)(n(d)(r.prototype),"_set",i).call(a,e,t);case 2:a.localCache[e]=JSON.stringify(t);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var t=this,i=this;return n(o)(n(m).mark((function a(){var o;return n(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(l)(n(d)(r.prototype),"_get",t).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var t=this,i=this;return n(o)(n(m).mark((function a(){return n(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(l)(n(d)(r.prototype),"_remove",t).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(Nt);Dt.type="LOCAL";var jt=Dt,Ut=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(){return n(s)(this,r),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return n(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Nt);
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
 */function qt(e){return Promise.all(e.map((t=n(o)(n(m).mark((function e(t){var r;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return t.apply(this,arguments)})));var t}
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
 */var Ht=function(){"use strict";function e(t){n(s)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return n(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a,s,u,c,l,d,f;return n(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=t.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),d=Array.from(l).map(function(){var e=n(o)(n(m).mark((function e(t){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,qt(d);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
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
function Vt(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Ht.receivers=[];var Bt=function(){"use strict";function e(t){n(s)(this,e),this.target=t,this.handlers=new Set}return n(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return n(o)(n(m).mark((function a(){var o,s,u;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){n.next=3;break}throw new Error("connection_unavailable");case 3:return n.abrupt("return",new Promise((function(n,a){var c=Vt("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(e){var t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),n(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:t},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return n.stop()}}),a)})))()}}]),e}();
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
 */function Wt(){return window}
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
function zt(){return void 0!==Wt().WorkerGlobalScope&&"function"==typeof Wt().importScripts}function Jt(){return Kt.apply(this,arguments)}function Kt(){return(Kt=n(o)(n(m).mark((function e(){var t;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
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
var Gt="firebaseLocalStorageDb",Qt="firebaseLocalStorage",Yt="fbase_key",Xt=function(){"use strict";function e(t){n(s)(this,e),this.request=t}return n(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function $t(e,t){return e.transaction([Qt],t?"readwrite":"readonly").objectStore(Qt)}function Zt(){var e=indexedDB.deleteDatabase(Gt);return new Xt(e).toPromise()}function en(){var e=indexedDB.open(Gt,1);return new Promise((function(t,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Qt,{keyPath:Yt})}catch(e){r(e)}})),e.addEventListener("success",n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((i=e.result).objectStoreNames.contains(Qt)){n.next=12;break}return i.close(),n.next=5,Zt();case 5:return n.t0=t,n.next=8,en();case 8:n.t1=n.sent,(0,n.t0)(n.t1),n.next=13;break;case 12:t(i);case 13:case"end":return n.stop()}}),r)}))))}))}function tn(e,t,n){return nn.apply(this,arguments)}function nn(){return(nn=n(o)(n(m).mark((function e(t,r,i){var a,o;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=$t(t,!0).put((a={},n(c)(a,Yt,r),n(c)(a,"value",i),a)),e.abrupt("return",new Xt(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function rn(e,t){return an.apply(this,arguments)}function an(){return(an=n(o)(n(m).mark((function e(t,r){var i,a;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=$t(t,!1).get(r),e.next=3,new Xt(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function on(e,t){var n=$t(e,!0).delete(t);return new Xt(n).toPromise()}var sn=function(){"use strict";function e(){n(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return n(u)(e,[{key:"_openDb",value:function(){var e=this;return n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,en();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),t)})))()}},{key:"_withRetries",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=0;case 1:return n.prev=2,n.next=5,t._openDb();case 5:return a=n.sent,n.next=8,e(a);case 8:return n.abrupt("return",n.sent);case 11:if(n.prev=11,n.t0=n.catch(2),!(i++>3)){n.next=15;break}throw n.t0;case 15:t.db&&(t.db.close(),t.db=void 0);case 16:n.next=1;break;case 18:case"end":return n.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",zt()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),t)})))()}},{key:"initializeReceiver",value:function(){var e=this;return n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.receiver=Ht._getInstance(zt()?self:null),e.receiver._subscribe("keyChanged",function(){var t=n(o)(n(m).mark((function t(r,i){var a;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=n(o)(n(m).mark((function e(t,r){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}},{key:"initializeSender",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r,i,a;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Jt();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Bt(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),t)})))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.sender&&t.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===t.activeServiceWorker)){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50);case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(2);case 9:case"end":return n.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return n(o)(n(m).mark((function e(){var t;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,en();case 5:return t=e.sent,e.next=8,tn(t,Mt,"1");case 8:return e.next=10,on(t,Mt);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.pendingWrites++,n.prev=1,n.next=4,e();case 4:return n.prev=4,t.pendingWrites--,n.finish(4);case 7:case"end":return n.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,t){var r=this;return n(o)(n(m).mark((function i(){return n(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(n(o)(n(m).mark((function i(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r._withRetries((function(n){return tn(n,e,t)}));case 2:return r.localCache[e]=t,n.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._withRetries((function(t){return rn(t,e)}));case 2:return i=n.sent,t.localCache[e]=i,n.abrupt("return",i);case 5:case"end":return n.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return n(o)(n(m).mark((function r(){return n(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t._withPendingWrite(n(o)(n(m).mark((function r(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._withRetries((function(t){return on(t,e)}));case 2:return delete t.localCache[e],n.abrupt("return",t.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r,i,a,o,s,u,c,l,d,f,p,h,v,g,y,b,_;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=$t(e,!1).getAll();return new Xt(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)d=l.value,f=d.fbase_key,p=d.value,a.add(f),JSON.stringify(e.localCache[f])!==JSON.stringify(p)&&(e.notifyListeners(f,p),i.push(f));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(h=!0,v=!1,g=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(h=(b=y.next()).done);h=!0)_=b.value,e.localCache[_]&&!a.has(_)&&(e.notifyListeners(_,null),i.push(_));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,g=t.t1;case 35:t.prev=35,t.prev=36,h||null==y.return||y.return();case 38:if(t.prev=38,!v){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(n(o)(n(m).mark((function t(){return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();sn.type="LOCAL";var un=sn;
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
 */function cn(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:start",K(e,t))}function ln(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=L("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function dn(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
dn("rcb"),new H(3e4,6e4);var fn="recaptcha";
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
 */function pn(e,t,n){return hn.apply(this,arguments)}function hn(){return(hn=n(o)(n(m).mark((function e(t,r,i){var a,o,s,u,c,l,d,f;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,R("string"==typeof o,t,"argument-error"),R(i.type===fn,t,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return R("enroll"===u.type,t,"internal-error"),e.next=15,Ct(t,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return R("signin"===u.type,t,"internal-error"),R(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,t,"missing-multi-factor-info"),e.next=24,cn(t,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ot(t,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var vn=function(){"use strict";function e(t){n(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=ze(t)}return n(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return pn(this.auth,e,(0,g.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return ft._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?ft._fromTokenResponse(n,r):null}}]),e}();
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
function mn(e,t){return t?D(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */vn.PROVIDER_ID="phone",vn.PHONE_SIGN_IN_METHOD="phone";var gn=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(e){var i;return n(s)(this,r),(i=t.call(this,"custom","custom")).params=e,i}return n(u)(r,[{key:"_getIdTokenResponse",value:function(e){return rt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return rt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return rt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Ke);function yn(e){return Ot(e.auth,new gn(e),e.bypassAuthState)}function bn(e){var t=e.auth,n=e.user;return R(n,t,"internal-error"),St(n,new gn(e),e.bypassAuthState)}function _n(e){return kn.apply(this,arguments)}function kn(){return(kn=n(o)(n(m).mark((function e(t){var r,i;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.auth,R(i=t.user,r,"internal-error"),e.abrupt("return",Et(i,new gn(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var wn=function(){"use strict";function e(t,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n(s)(this,e),this.auth=t,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return n(u)(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=n(o)(n(m).mark((function e(r,i){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a,o,s,u,c,l;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){n.next=4;break}return t.reject(u),n.abrupt("return");case 4:return l={auth:t.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:t.user,bypassAuthState:t.bypassAuthState},n.prev=5,n.t0=t,n.next=9,t.getIdpTask(c)(l);case 9:n.t1=n.sent,n.t0.resolve.call(n.t0,n.t1),n.next=16;break;case 13:n.prev=13,n.t2=n.catch(5),t.reject(n.t2);case 16:case"end":return n.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yn;case"linkViaPopup":case"linkViaRedirect":return _n;case"reauthViaPopup":case"reauthViaRedirect":return bn;default:S(this.auth,"internal-error")}}},{key:"resolve",value:function(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),xn=new H(2e3,1e4);
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
 */function In(e,t,n){return En.apply(this,arguments)}function En(){return(En=n(o)(n(m).mark((function e(t,r,i){var a,o,s;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ze(t),P(t,r,vt),o=mn(a,i),s=new Tn(a,"signInViaPopup",r,o),e.abrupt("return",s.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Tn=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(e,a,o,u,c){var l;return n(s)(this,r),(l=t.call(this,e,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=n(i)(l),l}return n(u)(r,[{key:"executeNotNull",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return R(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){var e=this;return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return M(1===e.filter.length,"Popup operations only handle one event"),r=Vt(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(L(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),t)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(L(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(L(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,xn.get())};t()}}]),r}(wn);Tn.currentPopupAction=null;
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
var Sn=new Map,Ln=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(s)(this,r),(a=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return n(u)(r,[{key:"execute",value:function(){var e=this,t=this;return n(o)(n(m).mark((function i(){var a,o;return n(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Sn.get(t.auth._key())){i.next=21;break}return i.prev=2,i.next=5,On(t.resolver,t.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,n(l)(n(d)(r.prototype),"execute",e).call(t);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Sn.set(t.auth._key(),a);case 21:return t.bypassAuthState||Sn.set(t.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var t=this,i=this,a=function(){return n(l)(n(d)(r.prototype),"onAuthEvent",t)};return n(o)(n(m).mark((function t(){var r;return n(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){return n(o)(n(m).mark((function e(){return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(wn);function On(e,t){return Pn.apply(this,arguments)}function Pn(){return(Pn=n(o)(n(m).mark((function e(t,r){var i,a,o;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Cn(r),a=Rn(t),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function An(e,t){Sn.set(e._key(),t)}function Rn(e){return D(e._redirectPersistence)}function Cn(e){return Le("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Mn(e,t){return Nn.apply(this,arguments)}function Nn(){return Nn=n(o)(n(m).mark((function e(t,r){var i,a,o,s,u,c=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=ze(t),o=mn(a,r),s=new Ln(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),Nn.apply(this,arguments)}
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
var Dn=function(){"use strict";function e(t){n(s)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return n(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Un(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Un(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(L(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(jn(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(jn(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function jn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Un(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Fn(e){return qn.apply(this,arguments)}function qn(){return qn=
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
n(o)(n(m).mark((function e(t){var r,i=arguments;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",G(t,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),qn.apply(this,arguments)}
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
 */var Hn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vn=/^https?/;function Bn(){return(Bn=n(o)(n(m).mark((function e(t){var r,i,a,o,s,u,c;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Fn(t);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!Wn(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:S(t,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Wn(e){var t=U(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Vn.test(r))return!1;if(Hn.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */var zn=new H(3e4,6e4);function Jn(){var e=Wt().___jsl,t=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=n(h)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}var Kn=null;function Gn(e){return Kn=Kn||function(e){return new Promise((function(t,n){var r,i,a;function o(){Jn(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Jn(),n(L(e,"network-request-failed"))},timeout:zn.get()})}if(null===(i=null===(r=Wt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Wt().gapi)||void 0===a?void 0:a.load)){var s=dn("iframefcb");return Wt()[s]=function(){gapi.load?o():n(L(e,"network-request-failed"))},ln("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Kn=null,e}))}(e),Kn}
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
 */var Qn=new H(5e3,15e3),Yn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $n(e){var t=e.config;R(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?V(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:y.SDK_VERSION},i=Xn.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat((0,g.querystring)(r).slice(1))}function Zn(e){return er.apply(this,arguments)}function er(){return er=n(o)(n(m).mark((function e(t){var r,i;return n(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Gn(t);case 2:return r=e.sent,R(i=Wt().gapi,t,"internal-error"),e.abrupt("return",r.open({where:document.body,url:$n(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yn,dontclear:!0},(function(e){return new Promise((r=n(o)(n(m).mark((function r(i,a){var o,s,u;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=function(){Wt().clearTimeout(s),i(e)},n.next=3,e.restyle({setHideOnLeave:!1});case 3:o=L(t,"network-request-failed"),s=Wt().setTimeout((function(){a(o)}),Qn.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return n.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),er.apply(this,arguments)}
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
 */var tr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nr="_blank",rr="http://localhost",ir=function(){"use strict";function e(t){n(s)(this,e),this.window=t,this.associatedEvent=null}return n(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function ar(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},tr),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,g.getUA)().toLowerCase();r&&(u=Ce(l)?nr:r),Ae(l)&&(t=t||rr,c.scrollbars="yes");var d=Object.entries(c).reduce((function(e,t){var r=n(p)(t,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Fe(l)&&"_self"!==u)return or(t||"",u),new ir(null);var f=window.open(t||"",u,d);R(f,e,"popup-blocked");try{f.focus()}catch(e){}return new ir(f)}function or(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var sr="__/auth/handler",ur="emulator/auth/handler";function cr(e,t,r,i,a,o){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:y.SDK_VERSION,eventId:a};if(t instanceof vt){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",(0,g.isEmpty)(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var d,f=Object.entries(o||{})[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var h=n(p)(d.value,2),v=h[0],m=h[1];s[v]=m}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(t instanceof mt){var b=t.getScopes().filter((function(e){return""!==e}));b.length>0&&(s.scopes=b.join(","))}e.tenantId&&(s.tid=e.tenantId);var _,k,w=s,x=!0,I=!1,E=void 0;try{for(var T,S=Object.keys(w)[Symbol.iterator]();!(x=(T=S.next()).done);x=!0){var L=T.value;void 0===w[L]&&delete w[L]}}catch(e){I=!0,E=e}finally{try{x||null==S.return||S.return()}finally{if(I)throw E}}return"".concat((_=e,k=_.config,k.emulator?V(k,ur):"https://".concat(k.authDomain,"/").concat(sr)),"?").concat((0,g.querystring)(w).slice(1))}
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
var lr="webStorageSupport",dr=function(){"use strict";function e(){n(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ft,this._completeRedirectFn=Mn,this._overrideRedirectResult=An}return n(u)(e,[{key:"_openPopup",value:function(e,t,r,i){var a=this;return n(o)(n(m).mark((function o(){var s,u;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return M(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=cr(e,t,r,U(),i),n.abrupt("return",ar(e,u,Vt()));case 4:case"end":return n.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,t,r,i){var a=this;return n(o)(n(m).mark((function o(){return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a._originValidation(e);case 2:return o=cr(e,t,r,U(),i),Wt().location.href=o,n.abrupt("return",new Promise((function(){})));case 4:case"end":return n.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(M(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i,a;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Zn(e);case 2:return i=n.sent,a=new Dn(e),i.register("authEvent",(function(t){return R(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:a},t.iframes[e._key()]=i,n.abrupt("return",a);case 8:case"end":return n.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(lr,{type:lr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),S(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Bn.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return He()||Re()||Ue()}}]),e}(),fr=dr,pr=function(e){"use strict";n(f)(r,e);var t=n(v)(r);function r(e){var i;return n(s)(this,r),(i=t.call(this,"phone")).credential=e,i}return n(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:finalize",K(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:finalize",K(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(t){n(s)(this,e),this.factorId=t}return n(u)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return C("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){n(s)(this,e)}return n(u)(e,null,[{key:"assertion",value:function(e){return pr._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var hr,vr="@firebase/auth",mr="0.20.4",gr=function(){"use strict";function e(t){n(s)(this,e),this.auth=t,this.internalListeners=new Map}return n(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return n(o)(n(m).mark((function r(){var i;return n(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.assertAuthConfigured(),n.next=3,t.auth._initializationPromise;case 3:if(t.auth.currentUser){n.next=5;break}return n.abrupt("return",null);case 5:return n.next=7,t.auth.currentUser.getIdToken(e);case 7:return i=n.sent,n.abrupt("return",{accessToken:i});case 9:case"end":return n.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
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
function yr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getApp)(),t=(0,y._getProvider)(e,"auth");return t.isInitialized()?t.getImmediate():j(e,{popupRedirectResolver:fr,persistence:[un,jt,Ft]})}hr="Browser",(0,y._registerComponent)(new(0,k.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){R(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),R(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:hr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ve(hr)},i=new We(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(D);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,y._registerComponent)(new(0,k.Component)("auth-internal",(function(e){var t=ze(e.getProvider("auth").getImmediate());return new gr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,y.registerVersion)(vr,mr,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(hr)),(0,y.registerVersion)(vr,mr,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=a("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.a54d9713.js","ee16w":"sprite.7c4e9067.svg","jEEqz":"no-poster.0fbddd47.jpg","2WXp7":"empty-library-placeholder.5ed483fb.png","iiLus":"Vitaliy-desk-1x.3510baed.jpg","emfiV":"Natalia-desk-1x.9cadc779.jpg","bERqi":"Dima-desk-1x.756492e8.jpg","7jpbb":"Viktoriya-desk-1x.d8f286cf.jpg","ddqV1":"Ihor-desk-1x.128e444c.jpg","fto5N":"Samvel-desk-1x.52d6e078.jpg","kyKx7":"Yevhen-desk-1x.ad9b2d15.jpg","8Lcim":"Oleksandr-desk-1x.fa79260a.jpg","5UbS1":"index.bdf7d469.css"}'));var o;o=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ee16w");var s=a("bpxeT"),u=a("2TvXO");s=a("bpxeT"),u=a("2TvXO"),s=a("bpxeT");var c,l=a("8MBJY"),d=a("a2hTj"),f=(u=a("2TvXO"),"https://api.themoviedb.org/3"),p="81f57ce8a5863d84fdab7c29ba0c37c2",h=function(){"use strict";function e(){n(l)(this,e),this.searchQuery="",this.page=1,this.searchId="",this.genre="",this.year=""}return n(d)(e,[{key:"fetchMoviesByFilters",value:function(){var e=this;return n(s)(n(u).mark((function t(){var r,i,a;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(f,"/discover/movie?api_key=").concat(p,"&language=en-US&primary_release_year=").concat(e.year,"&with_genres=").concat(e.genre,"&page=").concat(e.page),t.next=3,fetch(r);case 3:return i=t.sent,t.next=6,i.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))()}},{key:"fetchGenres",value:function(){return n(s)(n(u).mark((function e(){var t,r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(f,"/genre/movie/list?api_key=").concat(p,"&language=en-US"),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))()}},{key:"fetchTrending",value:function(){var e=this;return n(s)(n(u).mark((function t(){var r,i,a;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(f,"/trending/movie/day?api_key=").concat(p,"&page=").concat(e.page),t.next=3,fetch(r);case 3:return i=t.sent,t.next=6,i.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))()}},{key:"fetchSearchMovie",value:function(){var e=this;return n(s)(n(u).mark((function t(){var r,i,a;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(f,"/search/movie?api_key=").concat(p,"&language=en-US&query=").concat(e.searchQuery,"&page=").concat(e.page,"&include_adult=false"),t.next=3,fetch(r);case 3:return i=t.sent,t.next=6,i.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))()}},{key:"fetchMovieDetails",value:function(e){return n(s)(n(u).mark((function t(){var r,i,a;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(f,"/movie/").concat(e,"?api_key=").concat(p,"&language=en-US"),t.next=3,fetch(r);case 3:return i=t.sent,t.next=6,i.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))()}},{key:"searchTrailerById",value:function(e){return n(s)(n(u).mark((function t(){var r,i,a,o;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(f,"/movie/").concat(e,"/videos?api_key=").concat(p,"&language=en-US"),t.next=3,fetch(r);case 3:return i=t.sent,t.next=6,i.json();case 6:return a=t.sent,o=a.results.find((function(e){return e.name.includes("Official")})),t.abrupt("return",o.key);case 9:case"end":return t.stop()}}),t)})))()}},{key:"incrementPage",value:function(){this.page+=1}},{key:"decrementPage",value:function(){this.page-=1}},{key:"pageNumber",get:function(){return this.page},set:function(e){this.page=e}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"movieId",get:function(){return this.searchId},set:function(e){this.searchId=e}},{key:"yearFilter",get:function(){return this.year},set:function(e){this.year=e}},{key:"genreIdFilter",get:function(){return this.genre},set:function(e){this.genre=e}}]),e}();s=a("bpxeT"),u=a("2TvXO");function v(e,t){return e.map((function(e){var r=e.poster_path,i=e.original_title,a=e.genre_ids,o=e.release_date,s=e.vote_average,u=e.id,l=r?"https://image.tmdb.org/t/p/w500/".concat(r):"".concat(n(c)),d=o?new Date(o).getFullYear():"N/A",f=a?a.slice(0,2).map((function(e){return t.get(e)})):["Others"];a&&a.length>2&&f.push("Others");var p=f.join(", "),h=void 0!==s?s.toFixed(1):"N/A";return'<li class="gallery__item card" data-id="'.concat(u,'">\n          <img\n            class="card__image"\n            src=').concat(l,'\n            alt="poster"\n            loading="lazy"\n          />\n          <div class="card__info" >\n            <p class="card__title">').concat(i,'</p>\n            <div class="card__movie-info">\n              <p class="card__genre">').concat(p,'</p>\n              <span class="vertical">&nbsp|&nbsp</span>\n              <p class="card__release">').concat(d,'</p>\n              <p class="card__rating">').concat(h,"</p>\n            </div>\n          </div>\n      </li>")})).join("")}function m(e,t){var r='<li class="item">\n                      <button class="pagination__arrow pagination__arrow-left" id=\'previous\'>\n                        <svg class="pagination-arrow-icon" >\n                          <use href="'.concat(n(o),'#icon-arrow-left"></use>\n                        </svg>\n                      </button>\n                    </li>'),i='<li class="item">\n                      <button class="pagination__arrow pagination__arrow-right" id=\'next\'>\n                        <svg class="pagination-arrow-icon">\n                          <use href="'.concat(n(o),'#icon-arrow-right" ></use>\n                        </svg>\n                      </button>\n                    </li>'),a='<li class="item">\n                          <button class="pagination__btn">1</button>\n                        </li>',s='<li class="item">\n                    <button class="pagination-btn-more">...</button>\n                  </li>',u=('<li class="item">\n                        <button class="pagination__btn">'.concat(e-2,"</button>\n                      </li>"),'<li class="item">\n                    <button class="pagination__btn">'.concat(e-1,"</button>\n                  </li>"),'<li class="item">\n                        <button class="pagination__btn pagination__btn--choice">'.concat(e,"</button>\n                      </li>")),c=('<li class="item">\n                    <button class="pagination__btn">'.concat(e+1,"</button>\n                  </li>"),' <li class="item">\n                          <button class="pagination__btn">'.concat(e+2,"</button>\n                        </li>"),'<li class="item">\n                    <button class="pagination__btn">'.concat(t,"</button>\n                  </li>")),l=[],d=window.matchMedia("(max-width:768px)").matches;if(l.push('<ul class="pagination-list">'),1===t)return"";e>1&&l.push(r),e>1&&!d&&l.push(a),e>1&&e<4&&d&&l.push(a),e>4&&!d&&l.push(s);for(var f=e-2;f<e+3;f+=1)f!==e?f>1&&f<=t-1&&l.push('<li class="item">\n                    <button class="pagination__btn">'.concat(f,"</button>\n                  </li>")):l.push(u);return e<t-3&&!d&&l.push(s),e>t-3&&e<t&&d&&l.push(c),e<t&&!d&&l.push(c),e<t&&l.push(i),l.push("</ul>"),l.join("")}c=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("jEEqz");s=a("bpxeT"),u=a("2TvXO");function g(e){var t=location.href,n=new URL(t);return{goToStartPage:function(){n.searchParams.delete("with_genres"),n.searchParams.delete("primary_release_year"),n.searchParams.delete("page"),n.searchParams.delete("query"),history.pushState({},"","".concat(n))},reset:function(){n.searchParams.delete("page"),n.searchParams.delete("query"),history.pushState({},"","".concat(n))},goToSearch:function(e){n.searchParams.delete("page"),n.searchParams.delete("with_genres"),n.searchParams.delete("primary_release_year"),n.searchParams.set("query",e),history.pushState({},"","".concat(n))},goToFilter:function(e,t){n.searchParams.delete("page"),n.searchParams.delete("query"),n.searchParams.set("with_genres",e),n.searchParams.set("primary_release_year",t),history.pushState({},"","".concat(n))},isFilter:function(){return n.searchParams.has("primary_release_year")||n.searchParams.has("with_genres")},isSearch:function(){return n.searchParams.has("query")},changePage:function(e){n.searchParams.set("page",+e),history.pushState({},"","".concat(n))},setQuery:function(e){n.searchParams.set("query",e),history.pushState({},"","".concat(n))},getQuery:function(){return n.searchParams.get("query")},getGenre:function(){return n.searchParams.get("with_genres")},getYeare:function(){return n.searchParams.get("primary_release_year")},setFilter:function(e,t){n.searchParams.set("with_genres",e),n.searchParams.set("primary_release_year",t),history.pushState({},"","".concat(n))},getCurrentPage:function(){var e;return null!==(e=n.searchParams.get("page"))&&void 0!==e?e:1}}}s=a("bpxeT"),u=a("2TvXO");var y=new h;function b(){var e=document.querySelector("#genre"),t=document.querySelector("#year");y.resetPage(),g().goToFilter(e.value,t.value),_()}function _(){return k.apply(this,arguments)}function k(){return(k=n(s)(n(u).mark((function e(){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(),y.genreIdFilter=g().getGenre(),y.yearFilter=g().getYeare(),y.pageNumber=+g().getCurrentPage(),genre.value=y.genreIdFilter,year.value=y.yearFilter,e.next=9,y.fetchMoviesByFilters();case 9:A(e.sent,y),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function w(){document.querySelector(".filter__wrap").innerHTML='\n<div class="filter">\n        <p class="filter__text">Find the movies:</p>\n        <ul class="filter__list">\n  <li class="filter__item">\n    <select class="filter__select genre" id="genre" name="genre">\n      <option value="">Genre: all</option>\n      <option value="28">Action</option>\n      <option value="12">Adventure</option>\n      <option value="16">Animation</option>\n      <option value="35">Comedy</option>\n      <option value="80">Crime</option>\n      <option value="99">Documentary</option>\n      <option value="18">Drama</option>\n      <option value="10751">Family</option>\n      <option value="14">Fantasy</option>\n      <option value="36">History</option>\n      <option value="27">Horror</option>\n      <option value="10402">Music</option>\n      <option value="9648">Mystery</option>\n      <option value="10749">Romance</option>\n      <option value="878">Science Fiction</option>\n      <option value="10770">TV Movie</option>\n      <option value="53">Thriller</option>\n      <option value="10752">War</option>\n      <option value="37">TV Western</option>\n    </select>\n  </li>\n  <li class="filter__item">\n  <select class="filter__select year" id="year" name="year">\n          <option value="">Year: all</option>\n          <option value="2022">2022</option>\n          <option value="2021">2021</option>\n          <option value="2020">2020</option>\n          <option value="2019">2019</option>\n          <option value="2018">2018</option>\n          <option value="2017">2017</option>\n          <option value="2016">2016</option>\n          <option value="2015">2015</option>\n          <option value="2014">2014</option>\n          <option value="2013">2013</option>\n          <option value="2012">2012</option>\n          <option value="2011">2011</option>\n          <option value="2010">2010</option>\n          <option value="2009">2009</option>\n          <option value="2008">2008</option>\n          <option value="2007">2007</option>\n          <option value="2006">2006</option>\n          <option value="2005">2005</option>\n          <option value="2004">2004</option>\n          <option value="2003">2003</option>\n          <option value="2002">2002</option>\n          <option value="2001">2001</option>\n          <option value="2000">2000</option>\n          <option value="1999">1999</option>\n          <option value="1998">1998</option>\n          <option value="1997">1997</option>\n          <option value="1996">1996</option>\n          <option value="1995">1995</option>\n          <option value="1994">1994</option>\n          <option value="1993">1993</option>\n          <option value="1992">1992</option>\n          <option value="1991">1991</option>\n          <option value="1990">1990</option>\n          <option value="1989">1989</option>\n          <option value="1988">1988</option>\n          <option value="1987">1987</option>\n          <option value="1986">1986</option>\n          <option value="1985">1985</option>\n          <option value="1984">1984</option>\n          <option value="1983">1983</option>\n          <option value="1982">1982</option>\n          <option value="1981">1981</option>\n          <option value="1980">1980</option>\n          <option value="1979">1979</option>\n          <option value="1978">1978</option>\n          <option value="1977">1977</option>\n          <option value="1976">1976</option>\n          <option value="1975">1975</option>\n          <option value="1974">1974</option>\n          <option value="1973">1973</option>\n          <option value="1972">1972</option>\n          <option value="1971">1971</option>\n          <option value="1970">1970</option>\n          <option value="1969">1969</option>\n          <option value="1968">1968</option>\n          <option value="1967">1967</option>\n          <option value="1966">1966</option>\n          <option value="1965">1965</option>\n          <option value="1964">1964</option>\n        </select></li>\n</ul>        \n</div>',document.querySelector(".filter").addEventListener("change",b)}var x=new h;function I(){g().isSearch()?U():g().isFilter()?_():function(){E.apply(this,arguments)}()}function E(){return(E=n(s)(n(u).mark((function e(){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x.pageNumber=+g().getCurrentPage(),w(),e.prev=2,e.next=5,x.fetchTrending();case 5:A(e.sent,x),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var T={markup:'<div id="spiner" class="spiner__holder is-hidden">\n        <div class="lds-spinner">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <p class="spiner__text">Please stand by</p>\n        </div>\n    </div>',getMarkup:function(){return this.markup},insertIn:function(e){e.insertAdjacentHTML("beforeend",this.markup)},off:function(){document.querySelector("#spiner").classList.add("is-hidden")},on:function(){var e=this;document.querySelector("#spiner").classList.remove("is-hidden"),setTimeout((function(){e.off()}),500)},delete:function(){document.querySelector("#spiner").remove()}};function S(){document.querySelector(".gallery").scrollIntoView({block:"start",inline:"nearest"})}function L(e,t){var n=document.querySelector(".pagination"),r=t.pageNumber,i=e.total_pages;n.innerHTML=m(r,i),document.querySelector(".pagination-list ").addEventListener("click",(function(e){if(e.preventDefault(),+e.target.textContent===r)return;if("next"===e.target.id)return T.on(),t.incrementPage(),console.log(t.pageNumber),g().changePage(t.pageNumber),g().isSearch()?(g().setQuery(t.query),U(),void S()):g().isFilter()?(g().setFilter(t.genre,t.year),_(),void S()):(I(),void S());if("previous"===e.target.id)return T.on(),t.decrementPage(),g().changePage(t.pageNumber),g().isSearch()?(g().setQuery(t.query),U(),void S()):g().isFilter()?(g().setFilter(t.genre,t.year),_(),void S()):(I(),void S());if("..."!==e.target.textContent&&"BUTTON"===e.target.nodeName){if(T.on(),t.pageNumber=+e.target.textContent,g().changePage(t.pageNumber,t.query),g().isSearch())return g().setQuery(t.query),U(),void S();if(g().isFilter())return g().setFilter(t.genre,t.year),_(),void S();I(),S()}}))}function O(){var e=document.querySelector(".notification");e.textContent="No results found",e.classList.remove("notification--is-hidden"),setTimeout((function(){e.classList.add("notification--is-hidden"),setTimeout((function(){e.textContent=""}),300)}),2e3)}function P(e,t){var n=1!==e?'Total result for <span class="notification--query">'.concat(t,'</span> is <span class="notification--query">').concat(e,"</span> movies"):'Total result for <span class="notification--query">'.concat(t,'</span> is <span class="notification--query">').concat(e,"</span> movie"),r=document.querySelector(".notification");r.innerHTML=n,r.classList.add("notification--success"),r.classList.remove("notification--is-hidden"),setTimeout((function(){r.classList.add("notification--is-hidden"),setTimeout((function(){r.classList.remove("notification--success"),r.innerHTML=""}),300)}),2e3)}function A(e,t){return R.apply(this,arguments)}function R(){return(R=n(s)(n(u).mark((function e(t,r){var i,a,o;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.total_results){e.next=5;break}return T.off(),O(),g().reset(),e.abrupt("return");case 5:return i=t.results,e.prev=6,e.next=9,r.fetchGenres();case 9:a=e.sent,o=new Map(a.genres.map((function(e){return[e.id,e.name]}))),document.querySelector(".gallery").innerHTML=v(i,o),r.searchQuery&&P(t.total_results,r.searchQuery),L(t,r),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6);case 20:case"end":return e.stop()}}),e,null,[[6,17]])})))).apply(this,arguments)}var C=new h,M="",N=function(e){e.preventDefault(),M.length>0&&(e.currentTarget.placeholder=M,e.currentTarget.classList.add("search-form__input-focus-placeholder"))},D=function(e){e.preventDefault(),e.currentTarget.placeholder="Movie search",e.currentTarget.classList.remove("search-form__input-focus-placeholder")},j=function(e){e.preventDefault();var t,n=e.currentTarget.elements.searchQuery.value.trim();if(M=n,e.currentTarget.elements.searchQuery.placeholder=M,e.currentTarget.elements.searchQuery.classList.add("search-form__input-focus-placeholder"),""===n)return e.target.reset(),(t=document.querySelector(".notification")).textContent="Please type something",t.classList.remove("notification--is-hidden"),void setTimeout((function(){t.classList.add("notification--is-hidden"),setTimeout((function(){t.textContent=""}),300)}),2e3);T.on(),C.resetPage(),g().goToSearch(n),U(),e.target.reset()};function U(){return F.apply(this,arguments)}function F(){return(F=n(s)(n(u).mark((function e(){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(),C.pageNumber=+g().getCurrentPage(),C.query=g().getQuery(),e.prev=3,e.next=6,C.fetchSearchMovie();case 6:A(e.sent,C),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function q(){g().goToStartPage(),location.reload()}var H=function(){var e=document.querySelector(".header");e.innerHTML='<div class="container">\n  <div class="nav-wrap">\n    <a href="#" class="header__logo" id="logoLink">\n     <svg class="header__icon">\n        <use href="'.concat(n(o),'#icon-main-logo"></use>\n      </svg>\n      <span class="header__text">Filmoteka</span>\n    </a>\n    <nav>\n      <ul class="nav-list">\n        <li class="nav-list__item">\n          <a\n            class="nav-list__link nav-list__link--current"\n            href="#"\n            id="homeLink"\n            >Home</a\n          >\n        </li>\n        <li class="nav-list__item">\n          <a class="nav-list__link" href="#" id="libraryLink">My library</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <div class="search-form-wrap">\n    <form class="search-form" id="search-movie">\n      <input\n        class="search-form__input"\n        name="searchQuery"\n        type="text"\n        placeholder="Movie search"\n        autocomplete="off"\n      />\n      <button class="search-form__button-submit" type="submit">\n       <svg width="12" height="12">\n          <use href="').concat(n(o),'#icon-search"></use>\n        </svg>\n      </button>\n    </form>\n  </div>\n  <p class="notification notification--is-hidden"></p>\n  </div>\n'),e.classList.remove("additional-bg"),document.getElementById("libraryLink").addEventListener("click",ie),document.getElementById("search-movie").addEventListener("submit",j),document.querySelector("#logoLink").addEventListener("click",q);var t=document.querySelector(".search-form__input");t.addEventListener("focus",N),t.addEventListener("blur",D),I()},V=function(e){e.preventDefault(),H()};function B(e){return e.map((function(e){var t=e.poster_path,n=e.original_title,r=e.original_name,i=e.genres,a=e.release_date,o=e.first_air_date,s=e.vote_average,u=e.id,c=new Date(a||o).getFullYear(),l=n||r,d=s?s.toFixed(1):"N/A",f=i?i.slice(0,2).map((function(e){return e.name})):[];(i.length>2||0===i.length)&&f.push("Others");var p=f.join(", ");return'<li class="gallery__item card" data-id="'.concat(u,'">\n          <img\n            class="card__image"\n            src="https://image.tmdb.org/t/p/w500/').concat(t,'"\n            alt="poster"\n            loading="lazy"\n          />\n          <div class="card__info" >\n            <p class="card__title">').concat(l,'</p>\n            <div class="card__movie-info">\n              <p class="card__genre">').concat(p,'</p>\n              <span class="vertical">&nbsp|&nbsp</span>\n              <p class="card__release">').concat(c,'</p>\n              <p class="card__rating">').concat(d,"</p>\n            </div>\n          </div>\n      </li>")})).join("")}var W,z="watched-list",J="queue-list",K={getWatchedList:function(){try{return JSON.parse(localStorage.getItem(z))}catch(e){console.log(e)}},setWatchedList:function(e){localStorage.setItem(z,JSON.stringify(e))},getQueueList:function(){try{return JSON.parse(localStorage.getItem(J))}catch(e){console.log(e)}},setQueueList:function(e){localStorage.setItem(J,JSON.stringify(e))},isWatchedListEmpty:function(){var e=this.getWatchedList();return!e||0===e.length},isQueueListEmpty:function(){var e=this.getQueueList();return!e||0===e.length},isMovieInWatchedList:function(e){return!this.isWatchedListEmpty()&&!!this.getWatchedList().includes(e)},isMovieInQueueList:function(e){return!this.isQueueListEmpty()&&!!this.getQueueList().includes(e)},addMovieToWatchedList:function(e){if(this.isWatchedListEmpty())localStorage.setItem(z,JSON.stringify([e]));else{var t=this.getWatchedList();t.push(e),this.setWatchedList(t)}},addMovieToQueueList:function(e){if(this.isQueueListEmpty())localStorage.setItem(J,JSON.stringify([e]));else{var t=this.getQueueList();t.push(e),this.setQueueList(t)}},removeMovieFromWatchedList:function(e){var t=this.getWatchedList().filter((function(t){return t!==e}));this.setWatchedList(t)},removeMovieFromQueueList:function(e){var t=this.getQueueList().filter((function(t){return t!==e}));this.setQueueList(t)},clearWatchedList:function(){localStorage.removeItem(z)},clearQueueList:function(){localStorage.removeItem(J)}};function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n(W);e.innerHTML='<li style="margin: 0 auto;"><img src="'.concat(t,'"></li>')}function Q(e){for(var t=[],n=0;n<Math.ceil(e.length/20);n+=1){var r=e.slice(20*n,20*n+20);t.push(r)}return t}W=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("2WXp7");var Y=new h;function X(){T.on();document.getElementById("js-queue").classList.remove("button-list__btn--current"),document.getElementById("js-watched").classList.add("button-list__btn--current");var e=document.querySelector(".gallery"),t=K.getWatchedList(),n=t?Q(t):t;if(K.isWatchedListEmpty())return G(e),void(document.querySelector(".pagination").innerHTML="");$(t,Y);var r=n[Y.pageNumber-1].map((function(e){return Y.fetchMovieDetails(e).catch((function(e){return console.log(e)}))}));Promise.all(r).then((function(t){var n=B(t);e.innerHTML=n})).catch((function(e){return console.log(e)}))}function $(e,t){var n=document.querySelector(".pagination"),r=t.pageNumber,i=1;e.length<=20?n.innerHTML="":(e&&(i=e.length>20?Math.ceil(e.length/20):1),n.innerHTML=m(r,i),document.querySelector(".pagination-list ").addEventListener("click",(function(e){if(e.preventDefault(),+e.target.textContent===r)return;if("next"===e.target.id)return T.on(),t.incrementPage(),X(),void S();if("previous"===e.target.id)return T.on(),t.decrementPage(),X(),void S();"..."!==e.target.textContent&&"BUTTON"===e.target.nodeName&&(T.on(),t.pageNumber=+e.target.textContent,X(),S())})))}var Z=new h;function ee(){T.on();document.getElementById("js-queue").classList.add("button-list__btn--current"),document.getElementById("js-watched").classList.remove("button-list__btn--current");var e,t,n,r,i,a=document.querySelector(".gallery"),o=K.getQueueList(),s=o?Q(o):o;if(K.isQueueListEmpty())return G(a),void(document.querySelector(".pagination").innerHTML="");e=o,t=Z,n=document.querySelector(".pagination"),r=t.pageNumber,i=1,e.length<=20?n.innerHTML="":(e&&(i=e.length>20?Math.ceil(e.length/20):1),n.innerHTML=m(r,i),document.querySelector(".pagination-list ").addEventListener("click",(function(e){if(e.preventDefault(),+e.target.textContent!==r)return"next"===e.target.id?(T.on(),t.incrementPage(),ee(),void S()):"previous"===e.target.id?(T.on(),t.decrementPage(),ee(),void S()):void("..."!==e.target.textContent&&"BUTTON"===e.target.nodeName&&(T.on(),t.pageNumber=+e.target.textContent,ee(),S()))})));var u=s[Z.pageNumber-1].map((function(e){return Z.fetchMovieDetails(e).catch((function(e){return console.log(e)}))}));Promise.all(u).then((function(e){var t=B(e);a.innerHTML=t})).catch((function(e){return console.log(e)}))}var te=function(){var e=document.querySelector(".header");e.innerHTML='<div class="container">\n  <div class="nav-wrap additional-margin">\n    <a href="#" class="header__logo" id="logoLink">\n      <svg class="header__icon">\n        <use href="'.concat(n(o),'#icon-main-logo"></use>\n      </svg>\n      <span class="header__text">Filmoteka</span>\n    </a>\n    <nav>\n      <ul class="nav-list">\n        <li class="nav-list__item">\n          <a class="nav-list__link" href="#" id="homeLink">Home</a>\n        </li>\n        <li class="nav-list__item">\n          <a class="nav-list__link nav-list__link--current" href="#" id="libraryLink"\n            >My library</a\n          >\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <ul class="button-list">\n    <li class="button-list__item">\n      <button class="button-list__btn " type="button" id="js-watched">\n        Watched\n      </button>\n    </li>\n    <li class="button-list__item">\n      <button class="button-list__btn button-list__btn--current" type="button" id="js-queue">Queue</button>\n    </li>\n  </ul>\n  </div>\n'),e.classList.add("additional-bg"),document.querySelector(".filter__wrap").innerHTML="";var t=document.getElementById("homeLink"),r=document.getElementById("logoLink"),i=document.getElementById("js-watched"),a=document.getElementById("js-queue");t.addEventListener("click",V),r.addEventListener("click",V),i.addEventListener("click",X),a.addEventListener("click",ee)};a("3SEMc");var ne,re=a("a0wpL"),ie=(ne=n(s)(n(u).mark((function e(t){var r;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.preventDefault(),(0,re.n)().currentUser){e.next=6;break}return r=new(0,re.Q),e.next=6,(0,re.c)((0,re.n)(),r);case 6:te(),ee(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(e){return ne.apply(this,arguments)}),ae=document.querySelector("#root"),oe=function(){var e='<header class="header">\n  <div class="container">\n  <div class="nav-wrap">\n    <a href="#" class="header__logo" id="logoLink">\n      <svg class="header__icon">\n        <use href="'.concat(n(o),'#icon-main-logo"></use>\n      </svg>\n      <span class="header__text">Filmoteka</span>\n    </a>\n    <nav>\n      <ul class="nav-list">\n        <li class="nav-list__item">\n          <a\n            class="nav-list__link nav-list__link--current"\n            href="#"\n            id="homeLink"\n            >Home</a\n          >\n        </li>\n        <li class="nav-list__item">\n          <a class="nav-list__link" href="#" id="libraryLink">My library</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <div class="search-form-wrap">\n    <form class="search-form" id="search-movie">\n      <input\n        class="search-form__input"\n        name="searchQuery"\n        type="text"\n        placeholder="Movie search"\n        autocomplete="off"\n      />\n      <button class="search-form__button-submit" type="submit">\n        <svg width="12" height="12">\n          <use href="').concat(n(o),'#icon-search"></use>\n        </svg>\n      </button>\n    </form>\n  </div>\n  <p class="notification notification--is-hidden"></p>\n  </div>\n</header>');ae.insertAdjacentHTML("afterbegin",e),document.querySelector("#logoLink").addEventListener("click",q),document.getElementById("libraryLink").addEventListener("click",ie),document.getElementById("search-movie").addEventListener("submit",j);var t=document.querySelector(".search-form__input");t.addEventListener("focus",N),t.addEventListener("blur",D)};s=a("bpxeT"),u=a("2TvXO"),s=a("bpxeT"),u=a("2TvXO");function se(e){var t=e.poster_path,r=e.genres,i=void 0===r?[]:r,a=e.vote_count,s=e.vote_average,u=e.original_title,l=e.popularity,d=e.title,f=e.overview;0===f.length&&(f+="Sorry, there is no description for this movie.");var p=i.map((function(e){return e.name})).join(", "),h=t?"https://image.tmdb.org/t/p/w500/".concat(t):"".concat(n(c)),v=f.slice(0,1e3);return'<div class="modal">\n        <div class="modal__card">\n         <button class="modal__close" data-action="close-modal"><svg class="modal__close-icon" width="14" height="14">\n        <use href="'.concat(n(o),'#icon-close"></use>\n      </svg></button>\n        <div class="modal__content">\n     \n    <button class="modal__btn-play is-hidden"><svg class="modal__play-icon">\n        <use href="').concat(n(o),'#icon-youtube" ></use>\n      </svg></button>\n    <img class="modal__img" src="').concat(h,'" alt="cinema" />\n  </div>\n\n  \n    <div class="modal__description-wrap">\n      <h2 class="modal__title">').concat(d,'</h2>\n      <table class="modal__info">\n  <tr>\n    <td class="modal__info-key">Vote/votes</td>\n    <td "modal__info-value">\n    <span class="modal__info-value--accent">').concat(s,'</span>\n     <span class="modal__info-value--slash">/ </span\n    ><span class="modal__info-value--grey">').concat(a,'</span>\n    </td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Popularity</td>\n    <td "modal__info-value">').concat(l,'</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Original Title</td>\n    <td "modal__info-value">').concat(u,'</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Genre</td>\n    <td "modal__info-value">').concat(p,'</td>\n  </tr>\n</table>\n    \n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">\n        ').concat(v,'\n      </p>\n      <div class="modal__option">\n        <button class="btn-add-watched" data-action="add-watched">add to Watched</button>\n        <button class="btn-add-queue" data-action="add-queue">add to queue</button>\n      </div>\n    </div>\n    </div>\n  </div>')}function ue(e){var t,r=document.querySelector(".backdrop"),i=document.querySelector(".modal"),a=document.querySelector(".modal__card");if(e.target.classList.contains("modal__btn-play")){var s=e.target.getAttribute("id"),u=(t=s,'<div\n  class ="modal__video is-hidden">\n     <button  class="modal__btn-close-trailer"><svg class="modal__close-icon" width="14" height="14">\n        <use href="'.concat(n(o),'#icon-close"></use>\n      </svg></button>\n    <iframe class="video-frame" src="https://www.youtube.com/embed/').concat(t,"\"\n    frameborder = '0';\n    title = 'YouTube video player';\n      allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe></div>"));i.insertAdjacentHTML("afterbegin",u),a.classList.add("is-hidden"),document.querySelector(".modal__video").classList.remove("is-hidden"),i.style.backgroundColor="transparent",r.addEventListener("click",ce)}}function ce(e){var t=document.querySelector(".backdrop"),n=document.querySelector(".modal__video"),r=document.querySelector(".modal__card"),i=document.querySelector(".modal");e.target.classList.contains("modal__btn-close-trailer")&&(n.remove(),n.classList.add("is-hidden"),r.classList.remove("is-hidden"),i.style.backgroundColor="var(--main-bg)",t.removeEventListener("click",ce))}function le(e){var t=document.getElementById("libraryLink");if("add-queue"===e.target.dataset.action){var n=document.querySelector(".btn-add-queue"),r=document.querySelector(".btn-add-watched"),i=e.currentTarget.getAttribute("id");if(!K.isMovieInQueueList(i)&&!K.isMovieInWatchedList(i)){if(K.addMovieToQueueList(i),n.classList.toggle("isActive"),n.textContent="delete from queue",t.classList.contains("nav-list__link--current"))document.getElementById("js-queue").classList.contains("button-list__btn--current")&&ee();return}if(K.isMovieInQueueList(i)){if(K.removeMovieFromQueueList(i),n.classList.toggle("isActive"),n.textContent="add to queue",t.classList.contains("nav-list__link--current"))document.getElementById("js-queue").classList.contains("button-list__btn--current")&&ee();return}if(K.isMovieInWatchedList(i)){if(K.removeMovieFromWatchedList(i),r.classList.toggle("isActive"),r.textContent="add to watched",K.addMovieToQueueList(i),n.classList.toggle("isActive"),n.textContent="delete from queue",t.classList.contains("nav-list__link--current"))document.getElementById("js-watched").classList.contains("button-list__btn--current")&&X();return}}}function de(e){var t=document.getElementById("libraryLink");if("add-watched"===e.target.dataset.action){var n=document.querySelector(".btn-add-watched"),r=document.querySelector(".btn-add-queue"),i=e.currentTarget.getAttribute("id");if(!K.isMovieInWatchedList(i)&&!K.isMovieInQueueList(i)){if(K.addMovieToWatchedList(i),n.classList.toggle("isActive"),n.textContent="delete from watched",t.classList.contains("nav-list__link--current"))document.getElementById("js-watched").classList.contains("button-list__btn--current")&&X();return}if(K.isMovieInWatchedList(i)){if(K.removeMovieFromWatchedList(i),n.classList.toggle("isActive"),n.textContent="add to watched",t.classList.contains("nav-list__link--current"))document.getElementById("js-watched").classList.contains("button-list__btn--current")&&X();return}if(K.isMovieInQueueList(i)){if(K.removeMovieFromQueueList(i),r.classList.toggle("isActive"),r.textContent="add to queue",K.addMovieToWatchedList(i),n.classList.toggle("isActive"),n.textContent="delete from watched",t.classList.contains("nav-list__link--current"))document.getElementById("js-queue").classList.contains("button-list__btn--current")&&ee();return}}}function fe(){var e=document.querySelector(".backdrop");e.classList.remove("is-hidden"),document.addEventListener("keydown",he),e.addEventListener("click",ve),e.addEventListener("click",le),e.addEventListener("click",de),e.addEventListener("click",ue),document.body.addEventListener("wheel",me,{passive:!1})}function pe(){var e=document.querySelector(".backdrop");document.querySelector(".modal").remove(),e.classList.add("is-hidden"),document.removeEventListener("keydown",he),e.removeEventListener("click",ve),e.removeEventListener("click",le),e.removeEventListener("click",de),e.removeEventListener("click",ue),document.body.removeEventListener("wheel",me,{passive:!1})}function he(e){"Escape"===e.code&&pe()}function ve(e){"close-modal"!==e.target.dataset.action&&e.currentTarget!==e.target||pe()}function me(e){return e.preventDefault(),e.stopPropagation(),!1}var ge=new h;function ye(e){return be.apply(this,arguments)}function be(){return(be=n(s)(n(u).mark((function e(t){var r,i,a,o;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector(".backdrop").setAttribute("id",t),e.prev=2,e.next=5,ge.fetchMovieDetails(t);case 5:return r=e.sent,e.next=8,se(r);case 8:return i=e.sent,e.next=11,_e(i);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:return a=document.querySelector(".btn-add-queue"),o=document.querySelector(".btn-add-watched"),K.isMovieInQueueList(t)&&(a.textContent="delete from queue",a.classList.toggle("isActive")),K.isMovieInWatchedList(t)&&(o.textContent="delete from watched",o.classList.toggle("isActive")),e.next=22,ke(t);case 22:fe();case 23:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}function _e(e){document.querySelector(".backdrop").innerHTML=e}function ke(e){return we.apply(this,arguments)}function we(){return(we=n(s)(n(u).mark((function e(t){var r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.querySelector(".modal__btn-play"),e.prev=1,e.next=4,ge.searchTrailerById(t);case 4:i=e.sent,r.setAttribute("id",i),r.classList.remove("is-hidden"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function xe(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=n(s)(n(u).mark((function e(t){var r;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,document.querySelector(".backdrop"),document.querySelector(".backdrop"),!t.target.classList.contains("gallery__item")){e.next=7;break}return r=t.target.dataset.id,e.next=7,ye(r);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var Ee;s=a("bpxeT"),u=a("2TvXO");Ee=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iiLus");var Te;Te=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("emfiV");var Se;Se=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("bERqi");var Le;Le=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("7jpbb");var Oe;Oe=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ddqV1");var Pe;Pe=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("fto5N");var Ae;Ae=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("kyKx7");var Re;function Ce(){return'<div class="team-modal">\n      <button class="team-modal__btn-close" type="button">\n        <svg width="11" height="11">\n            <use href="'.concat(n(o),'#icon-close"></use>\n        </svg>\n      </button>\n      <h2 class="team-modal__title">OUR BEST TEAM OF DEVELOPERS!</h2>\n      <ul class="team-modal__list">\n          <li class="team-modal__card">\n              <img src="').concat(n(Ee),'" alt="man Vitaliy">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Vitaliy Khivrych</h3>\n              <p class="team-modal__text">Team-Lead\n                    <a target="_blank" href="https://github.com/Vitalii-Khivrych">\n                        <svg width="20" height="20">\n                            <use href="').concat(n(o),'#icon-github-logo"></use>\n                        </svg>\n                    </a>\n              </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n              <img  src="').concat(n(Te),'" alt="woman Natalia">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Natalia Delicheban</h3>\n              <p class="team-modal__text">Scrum-Master\n                        <a target="_blank" href="https://github.com/NataliaDelicheban">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n              </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n              <img src="').concat(n(Se),'" alt="man Dima">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Dima Zharyy</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/dima-zharyy">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n                    </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n              <img src="').concat(n(Le),'" alt="woman Viktoria">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Viktoria Fomenko</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/ViktoriaFomenko">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n                    </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n                  <img src="').concat(n(Oe),'" alt="man Igor">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Igor Smelyanets</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/IgorSME">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n                    </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n              <img src="').concat(n(Pe),'" alt="man Samvel">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Samvel Ogmrtsyan</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/samvel216">\n                        <svg width="20" height="20">\n                            <use href="').concat(n(o),'#icon-github-logo"></use>\n                        </svg>\n                    </a></p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n                  <img src="').concat(n(Ae),'" alt="man Yevhen">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Yevhen Podoliaka</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/yevhenpodoliaka">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n                    </p>\n          </div>\n          </li>\n          <li class="team-modal__card">\n              <img src="').concat(n(Re),'" alt="man Oleksandr">\n          <div class="team-modal__box">\n              <h3 class="team-modal__box-title">Oleksandr Suprun</h3>\n              <p class="team-modal__text">Web Developer\n                        <a target="_blank" href="https://github.com/parfors">\n                            <svg width="20" height="20">\n                                <use href="').concat(n(o),'#icon-github-logo"></use>\n                            </svg>\n                        </a>\n              </p>\n          </div>\n          </li>\n      </ul>\n    </div>')}function Me(e){document.querySelector(".backdrop__team-modal").innerHTML=e}function Ne(){var e=document.querySelector(".backdrop__team-modal");e.classList.remove("is-hidden"),document.body.classList.toggle("lock"),document.addEventListener("keydown",je),document.querySelector(".team-modal__btn-close").addEventListener("click",De),e.addEventListener("click",Ue),document.body.addEventListener("wheel",Fe,{passive:!1})}function De(){var e=document.querySelector(".backdrop__team-modal");e.classList.add("is-hidden"),document.body.classList.toggle("lock"),document.removeEventListener("keydown",je),e.removeEventListener("click",Ue),document.body.removeEventListener("wheel",Fe,{passive:!1})}function je(e){"Escape"===e.code&&De()}function Ue(e){e.currentTarget===e.target&&De()}function Fe(e){return e.preventDefault(),e.stopPropagation(),!1}function qe(){return He.apply(this,arguments)}function He(){return(He=n(s)(n(u).mark((function e(){var t;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ce();case 3:return t=e.sent,e.next=6,Me(t);case 6:Ne(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Ve(){document.querySelector(".header").scrollIntoView({behavior:"smooth"})}function Be(){if(!window.matchMedia("(max-width: 768px)").matches&&!(document.querySelector(".gallery").childElementCount<2)){var e=document.querySelector(".scrollup");window.pageYOffset>250?e.style.display="block":e.style.display="none"}}Re=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8Lcim");var We,ze=a("l5bVx"),Je="Expected a function",Ke=/^\s+|\s+$/g,Ge=/^[-+]0x[0-9a-f]+$/i,Qe=/^0b[01]+$/i,Ye=/^0o[0-7]+$/i,Xe=parseInt,$e="object"==typeof t&&t&&t.Object===Object&&t,Ze="object"==typeof self&&self&&self.Object===Object&&self,et=$e||Ze||Function("return this")(),tt=Object.prototype.toString,nt=Math.max,rt=Math.min,it=function(){return et.Date.now()};function at(e,t,n){var r,i,a,o,s,u,c=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(Je);function p(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function h(e){return c=e,s=setTimeout(m,t),l?p(e):o}function v(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=a}function m(){var e=it();if(v(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-u);return d?rt(n,a-(e-c)):n}(e))}function g(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){var e=it(),n=v(e);if(r=arguments,i=this,u=e,n){if(void 0===s)return h(u);if(d)return s=setTimeout(m,t),p(u)}return void 0===s&&(s=setTimeout(m,t)),o}return t=st(t)||0,ot(n)&&(l=!!n.leading,a=(d="maxWait"in n)?nt(st(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=u=i=s=void 0},y.flush=function(){return void 0===s?o:g(it())},y}function ot(e){var t=void 0===e?"undefined":n(ze)(e);return!!e&&("object"==t||"function"==t)}function st(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":n(ze)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==tt.call(e)}(e))return NaN;if(ot(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ot(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ke,"");var r=Qe.test(e);return r||Ye.test(e)?Xe(e.slice(2),r?2:8):Ge.test(e)?NaN:+e}function ut(){var e=document.getElementById("root"),t='<div class="scrollup">\n      <svg class="scrollup__icon">\n        <use href="'.concat(n(o),'#icon-arrow"></use>\n      </svg>\n    </div>');e.insertAdjacentHTML("beforeend",t),document.querySelector(".scrollup").addEventListener("click",Ve),document.addEventListener("scroll",n(We)(Be,300))}We=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(Je);return ot(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),at(e,t,{leading:r,maxWait:t,trailing:i})};var ct,lt,dt,ft,pt=document.querySelector("#root");document.addEventListener("DOMContentLoaded",(pt.insertAdjacentHTML("afterend",T.getMarkup()),T.on(),oe(),pt.insertAdjacentHTML("afterbegin",'<div class="container auth">\n  <div id="user-container" class="nav-list__item">\n    <div hidden id="user-pic"></div>\n    <div hidden id="user-name"></div>\n    <button hidden id="sign-out" class="mdl-button mdl-js-button mdl-js-ripple-effect">\n      Sign-out\n    </button>\n    <button id="sign-in" class="mdl-button mdl-js-button mdl-js-ripple-effect">\n      <i class="material-icons">account_circle</i>\n      Sign-in\n    </button>\n  </div>\n  </div>\n'),pt.insertAdjacentHTML("beforeend",'\n  <main>\n    <section class="section gallery__section">\n    <div class="container">\n    <div class="filter__wrap"></div>\n      \n        <h2 class="gallery__title visually-hidden">Gallery list</h2>\n        <ul class="gallery"></ul>\n        <div class="pagination">\n        \n    </section>\n  </main>'),pt.insertAdjacentHTML("beforeend",'<footer>\n  <div class="footer__container container">\n    <p class="footer__text">© 2022 | All Rights Reserved |</p>\n    <p class="footer__text">\n      Developed with<svg xmlns="http://www.w3.org/2000/svg" id="icon-heart" class="footer__icon" viewBox="0 0 34 32" width="14" height="13">\n      <path\n        d="M17.231 31.705l-2.412-2.412c-8.96-7.926-14.818-13.268-14.818-19.815 0-5.342 4.135-9.477 9.477-9.477 2.929 0 5.858 1.378 7.754 3.618 1.895-2.24 4.825-3.618 7.754-3.618 5.342 0 9.477 4.135 9.477 9.477 0 6.548-5.858 11.889-14.818 19.815l-2.412 2.412z"\n      ></path>\n    </svg>by\n      <button type="button" class="footer__button">GoIT Students</button>\n    </p>\n  </div>\n</footer>'),pt.insertAdjacentHTML("beforeend",'<div class="backdrop is-hidden"></div>'),pt.insertAdjacentHTML("beforeend",'<div class="backdrop__team-modal is-hidden"></div>'),void document.querySelector(".footer__button").addEventListener("click",qe),pt.insertAdjacentHTML("afterbegin",'<div class="theme container">\n    <button class="theme__toggle">\n    <svg class="theme__icon--moon" width="30" height="30">\n          <use href="'.concat(n(o),'#icon-moon"></use>\n    </svg>\n    <svg class="theme__icon--sun theme__active" width="30" height="30">\n          <use href="').concat(n(o),'#icon-sun"></use>\n    </svg>\n    </button>\n    </div>')),ct=document.querySelector(".theme__toggle"),lt=document.querySelector(".theme__icon--moon"),dt=document.querySelector(".theme__icon--sun"),ft=document.documentElement,ct.addEventListener("click",(function(){ft.hasAttribute("data-theme")?(ft.removeAttribute("data-theme"),dt.classList.add("theme__active"),lt.classList.remove("theme__active"),localStorage.removeItem("theme")):(ft.setAttribute("data-theme","dark"),dt.classList.remove("theme__active"),lt.classList.add("theme__active"),localStorage.setItem("theme","dark"))})),void(null!==localStorage.getItem("theme")&&(ft.setAttribute("data-theme","dark"),dt.classList.remove("theme__active"),lt.classList.add("theme__active"))),document.querySelector(".gallery").addEventListener("click",xe),I(),ut(),void(g().isSearch()||g().isFilter()||g().goToStartPage())),{once:!0})}();
//# sourceMappingURL=index.a54d9713.js.map
