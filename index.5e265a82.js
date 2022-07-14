!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire62bd;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire62bd=i);var o=i("bpxeT"),a=i("2TvXO"),u=i("3SEMc"),d=i("MjY8E");
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
(0,(d=i("MjY8E")).registerVersion)("firebase","9.8.4","app");d=i("MjY8E");var s=document.getElementById("user-pic"),c=document.getElementById("user-name"),l=document.getElementById("sign-in"),p=document.getElementById("sign-out");p.addEventListener("click",(function(){(0,u.signOut)((0,u.getAuth)())})),l.addEventListener("click",(function(){return f.apply(this,arguments)}));(0,d.initializeApp)({apiKey:"AIzaSyD97IsDjK-7IAttx0i6Aam0sN8iE_LfeLk",authDomain:"filmoteka-9c8eb.firebaseapp.com",databaseURL:"https://filmoteka-9c8eb-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-9c8eb",storageBucket:"filmoteka-9c8eb.appspot.com",messagingSenderId:"661633585171",appId:"1:661633585171:web:5eac125f261ab9e0712fe6",measurementId:"G-BYWLPZ81KP"});function f(){return(f=e(o)(e(a).mark((function t(){var n;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new(0,u.GoogleAuthProvider),e.next=4,(0,u.signInWithPopup)((0,u.getAuth)(),n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function b(e){if(e){var t=(0,u.getAuth)().currentUser.photoURL,n=(0,u.getAuth)().currentUser.displayName;s.style.backgroundImage="url("+((-1!==(r=t).indexOf("googleusercontent.com")&&-1===r.indexOf("?")?r+"?sz=150":r)+")"),c.textContent=n,c.removeAttribute("hidden"),s.removeAttribute("hidden"),p.removeAttribute("hidden"),l.setAttribute("hidden","true")}else c.setAttribute("hidden","true"),s.setAttribute("hidden","true"),p.setAttribute("hidden","true"),l.removeAttribute("hidden");var r}(0,u.onAuthStateChanged)((0,u.getAuth)(),b)}();
//# sourceMappingURL=index.5e265a82.js.map
