var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire62bd;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire62bd=i);var r=i("amyG6"),o=i("ix4Jr");
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
(0,(o=i("ix4Jr")).registerVersion)("firebase","9.8.4","app");o=i("ix4Jr");const d=document.getElementById("user-pic"),a=document.getElementById("user-name"),u=document.getElementById("sign-in"),s=document.getElementById("sign-out");s.addEventListener("click",(function(){(0,r.signOut)((0,r.getAuth)())})),u.addEventListener("click",(async function(){try{const e=new(0,r.GoogleAuthProvider);await(0,r.signInWithPopup)((0,r.getAuth)(),e)}catch(e){console.log(e)}}));(0,o.initializeApp)({apiKey:"AIzaSyD97IsDjK-7IAttx0i6Aam0sN8iE_LfeLk",authDomain:"filmoteka-9c8eb.firebaseapp.com",databaseURL:"https://filmoteka-9c8eb-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-9c8eb",storageBucket:"filmoteka-9c8eb.appspot.com",messagingSenderId:"661633585171",appId:"1:661633585171:web:5eac125f261ab9e0712fe6",measurementId:"G-BYWLPZ81KP"});function c(e){if(e){const e=(0,r.getAuth)().currentUser.photoURL,n=(0,r.getAuth)().currentUser.displayName;d.style.backgroundImage="url("+((-1!==(t=e).indexOf("googleusercontent.com")&&-1===t.indexOf("?")?t+"?sz=150":t)+")"),a.textContent=n,a.removeAttribute("hidden"),d.removeAttribute("hidden"),s.removeAttribute("hidden"),u.setAttribute("hidden","true")}else a.setAttribute("hidden","true"),d.setAttribute("hidden","true"),s.setAttribute("hidden","true"),u.removeAttribute("hidden");var t}(0,r.onAuthStateChanged)((0,r.getAuth)(),c);
//# sourceMappingURL=index.6a2b7287.js.map
