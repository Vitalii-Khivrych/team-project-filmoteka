function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},i=n.parcelRequire62bd;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},n.parcelRequire62bd=i),i.register("kyEFX",(function(t,n){var a,s;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var i={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},s=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.e481ec1a.js","lp5u4":"sprite.47a876e0.svg","5UbS1":"index.f1288467.css"}'));var o;o=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString();class r{fetchGenres(e){return fetch(`https://api.themoviedb.org/3/genre/${e}/list?api_key=81f57ce8a5863d84fdab7c29ba0c37c2&language=en-US`).then((e=>e.json()))}fetchTrending(){const e=`https://api.themoviedb.org/3/trending/movie/day?api_key=81f57ce8a5863d84fdab7c29ba0c37c2&page=${this.page}`;return fetch(e).then((e=>e.json()))}fetchSearchMovie(){const e=`https://api.themoviedb.org/3/search/movie?api_key=81f57ce8a5863d84fdab7c29ba0c37c2&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return fetch(e).then((e=>e.json()))}fetchMovieDetails(e){return fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=81f57ce8a5863d84fdab7c29ba0c37c2&language=en-US`).then((e=>e.json()))}incrementPage(){this.page+=1}decrementPage(){this.page-=1}get pageNumber(){return this.page}set pageNumber(e){this.page=e}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get movieId(){return this.searchId}set movieId(e){this.searchId=e}constructor(){this.searchQuery="",this.page=1,this.searchId="66732"}}const l=new r,c=e=>{e.preventDefault(),l.query=e.currentTarget.elements.searchQuery.value.trim();""===l.searchQuery?console.log("Пустий пошук"):(l.resetPage(),l.fetchSearchMovie().then(console.log))},d=()=>{const e=document.querySelector(".header");e.innerHTML=`<div class="nav-wrap">\n    <a href="#" class="header__logo" id="logoLink">\n     <svg class="header__icon">\n        <use href="${t(o)}#icon-main-logo"></use>\n      </svg>\n      <span class="header__text">Filmoteka</span>\n    </a>\n    <nav>\n      <ul class="nav-list">\n        <li class="nav-list__item">\n          <a\n            class="nav-list__link nav-list__link--current"\n            href="#"\n            id="homeLink"\n            >Home</a\n          >\n        </li>\n        <li class="nav-list__item">\n          <a class="nav-list__link" href="#" id="libraryLink">My library</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <div class="search-form-wrap">\n    <form class="search-form" id="search-movie">\n      <input\n        class="search-form__input"\n        name="searchQuery"\n        type="text"\n        placeholder="Movie search"\n      />\n      <button class="search-form__button-submit" type="submit">\n       <svg width="12" height="12">\n          <use href="${t(o)}#icon-search"></use>\n        </svg>\n      </button>\n    </form>\n  </div>\n  <p class="notification">\n    Search result is not successful. Enter the correct movie name and try again.\n  </p>\n`,e.classList.remove("additional-bg");document.getElementById("libraryLink").addEventListener("click",p);document.getElementById("search-movie").addEventListener("submit",c)},u=e=>{e.preventDefault(),d()},g=()=>{const e=document.querySelector(".header");e.innerHTML=`<div class="nav-wrap additional-margin">\n    <a href="#" class="header__logo" id="logoLink">\n      <svg class="header__icon">\n        <use href="${t(o)}#icon-main-logo"></use>\n      </svg>\n      <span class="header__text">Filmoteka</span>\n    </a>\n    <nav>\n      <ul class="nav-list">\n        <li class="nav-list__item">\n          <a class="nav-list__link" href="#" id="homeLink">Home</a>\n        </li>\n        <li class="nav-list__item">\n          <a class="nav-list__link nav-list__link--current" href="#" id="libraryLink"\n            >My library</a\n          >\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <ul class="button-list">\n    <li class="button-list__item">\n      <button class="button-list__btn button-list__btn--current" type="button">\n        Watched\n      </button>\n    </li>\n    <li class="button-list__item">\n      <button class="button-list__btn" type="button">Queue</button>\n    </li>\n  </ul>\n`,e.classList.add("additional-bg");const n=document.getElementById("homeLink"),a=document.getElementById("logoLink");n.addEventListener("click",u),a.addEventListener("click",u)};function h(e){return e.map((({poster_path:e,original_title:t,original_name:n,genres:a,release_date:s,first_air_date:i,vote_average:o,id:r})=>{const l=new Date(s||i).getFullYear(),c=t||n,d=o?o.toFixed(1):"N/A",u=a?a.slice(0,2).map((e=>e.name)):[];(a.length>2||0===a.length)&&u.push("Others");return`<li class="gallery__item card" data-id="${r}">\n          <img\n            class="card__image"\n            src="https://image.tmdb.org/t/p/w500/${e}"\n            alt="poster"\n            loading="lazy"\n          />\n          <div class="card__info" >\n            <p class="card__title">${c}</p>\n            <div class="card__movie-info">\n              <p class="card__genre">${u.join(", ")}</p>\n              <span class="vertical">&nbsp|&nbsp</span>\n              <p class="card__release">${l}</p>\n              <p class="card__rating">${d}</p>\n            </div>\n          </div>\n      </li>`})).join("")}const _={getWatchedList:()=>JSON.parse(localStorage.getItem("watched-list")),setWatchedList(e){localStorage.setItem("watched-list",JSON.stringify(e))},getQueueList:()=>JSON.parse(localStorage.getItem("queue-list")),setQueueList(e){localStorage.setItem("queue-list",JSON.stringify(e))},isWatchedListEmpty(){const e=this.getWatchedList();return!e||0===e.length},isQueueListEmpty(){const e=this.getQueueList();return!e||0===e.length},isMovieInWatchedList(e){if(this.isWatchedListEmpty())return!1;return!!this.getWatchedList().includes(e)},isMovieInQueueList(e){if(this.isQueueListEmpty())return!1;return!!this.getQueueList().includes(e)},addMovieToWatchedList(e){if(this.isWatchedListEmpty())localStorage.setItem("watched-list",JSON.stringify([e]));else{const t=this.getWatchedList();t.push(e),this.setWatchedList(t)}},addMovieToQueueList(e){if(this.isQueueListEmpty())localStorage.setItem("queue-list",JSON.stringify([e]));else{const t=this.getQueueList();t.push(e),this.setQueueList(t)}},removeMovieFromWatchedList(e){const t=this.getWatchedList().filter((t=>t!==e));this.setWatchedList(t)},removeMovieFromQueueList(e){const t=this.getQueueList().filter((t=>t!==e));this.setQueueList(t)},clearWatchedList(){localStorage.removeItem("watched-list")},clearQueueList(){localStorage.removeItem("queue-list")}},m=new r;function v(){const e=document.querySelector(".gallery"),t=_.getQueueList();e.innerHTML="";const n=t.map((e=>m.fetchMovieDetails(e).catch((e=>console.log(e)))));Promise.all(n).then((t=>{const n=h(t);e.innerHTML=n})).catch((e=>console.log(e)))}const p=e=>{e.preventDefault(),g(),v()},f=document.querySelector("#root"),b=()=>{const e=`<header class="header container">\n  <div class="nav-wrap">\n    <a href="#" class="header__logo" id="logoLink">\n      <svg class="header__icon">\n        <use href="${t(o)}#icon-main-logo"></use>\n      </svg>\n      <span class="header__text">Filmoteka</span>\n    </a>\n    <nav>\n      <ul class="nav-list">\n        <li class="nav-list__item">\n          <a\n            class="nav-list__link nav-list__link--current"\n            href="#"\n            id="homeLink"\n            >Home</a\n          >\n        </li>\n        <li class="nav-list__item">\n          <a class="nav-list__link" href="#" id="libraryLink">My library</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <div class="search-form-wrap">\n    <form class="search-form" id="search-movie">\n      <input\n        class="search-form__input"\n        name="searchQuery"\n        type="text"\n        placeholder="Movie search"\n      />\n      <button class="search-form__button-submit" type="submit">\n        <svg width="12" height="12">\n          <use href="${t(o)}#icon-search"></use>\n        </svg>\n      </button>\n    </form>\n  </div>\n  <p class="notification">\n    Search result is not successful. Enter the correct movie name and try again.\n  </p>\n</header>`;f.insertAdjacentHTML("afterbegin",e);document.getElementById("libraryLink").addEventListener("click",p);document.getElementById("search-movie").addEventListener("submit",c)};function y(e,t){return e.map((({poster_path:e,original_title:n,original_name:a,genre_ids:s,release_date:i,first_air_date:o,vote_average:r,id:l})=>{const c=n||a,d=new Date(i||o).getFullYear(),u=s.slice(0,2).map((e=>t.get(e)));s.length>2&&u.push("Others");return`<li class="gallery__item card" data-id="${l}">\n          <img\n            class="card__image"\n            src="https://image.tmdb.org/t/p/w500/${e}"\n            alt="poster"\n            loading="lazy"\n          />\n          <div class="card__info" >\n            <p class="card__title">${c}</p>\n            <div class="card__movie-info">\n              <p class="card__genre">${u.join(", ")}</p>\n              <span class="vertical">&nbsp|&nbsp</span>\n              <p class="card__release">${d}</p>\n              <p class="card__rating">${r.toFixed(1)}</p>\n            </div>\n          </div>\n      </li>`})).join("")}function L(e,n){const a=`<button class="pagination__arrow pagination__arrow-left" id='previous'>\n                      <svg class="pagination-arrow-icon" >\n                        <use href="${t(o)}#icon-arrow-left"></use>\n                      </svg>\n                    </button>`,s=`<button class="pagination__arrow pagination__arrow-right" id='next'>\n                      <svg class="pagination-arrow-icon">\n                        <use href="${t(o)}#icon-arrow-right" ></use>\n                      </svg>\n                    </button>`,i='<li class="item">\n                          <button class="pagination__btn">1</button>\n                        </li>',r='<li class="item">\n                    <button class="pagination-btn-more">...</button>\n                  </li>',l=`<li class="item">\n                        <button class="pagination__btn">${e-2}</button>\n                      </li>`,c=`<li class="item">\n                    <button class="pagination__btn">${e-1}</button>\n                  </li>`,d=`<li class="item">\n                        <button class="pagination__btn pagination__btn--choice">${e}</button>\n                      </li>`,u=`<li class="item">\n                    <button class="pagination__btn">${e+1}</button>\n                  </li>`,g=` <li class="item">\n                          <button class="pagination__btn">${e+2}</button>\n                        </li>`,h=`<li class="item">\n                    <button class="pagination__btn">${n}</button>\n                  </li>`;return 1===e?` <ul class="pagination-list">\n              ${d} \n              ${u}\n              ${g}\n              ${r}\n              ${h}\n            </ul>\n            ${s}`:2===e?`${a}\n            <ul class="pagination-list">\n              ${c}\n              ${d} \n              ${u}\n              ${g}\n              ${r}\n              ${h}\n            </ul>\n            ${s}`:3===e?`${a}\n            <ul class="pagination-list">\n              ${l}\n              ${c}\n              ${d} \n              ${u}\n              ${g}\n              ${r}\n              ${h}\n            </ul>\n            ${s}`:e===n-2?`${a}\n            <ul class="pagination-list">\n              ${i}\n              ${r}\n              ${l}\n              ${c}\n              ${d} \n              ${u}\n              ${g}\n            </ul>\n            ${s}`:e===n-1?`${a}\n            <ul class="pagination-list">\n              ${i}\n              ${r}\n              ${l}\n              ${c}\n              ${d} \n              ${u}\n            </ul>\n            ${s}`:e===n?`${a}\n            <ul class="pagination-list">\n              ${i}\n              ${r}\n              ${l}\n              ${c}\n              ${d} \n            </ul>`:`${a}\n            <ul class="pagination-list">\n              ${i}\n              ${r}\n              ${l}\n              ${c}\n              ${d} \n              ${u}\n              ${g}\n              ${r}\n              ${h}\n            </ul>\n            ${s}`}function $(e){const t=document.querySelector(".pagination"),n=S.pageNumber,a=e.total_pages;t.innerHTML=L(n,a),t.addEventListener("click",(function e(a){if(a.preventDefault(),+a.target.textContent===n)return void console.log("Поточна сторінка");if("next"===a.target.id)return S.incrementPage(),t.removeEventListener("click",e),void E();if("previous"===a.target.id)return S.decrementPage(),t.removeEventListener("click",e),void E();"BUTTON"===a.target.nodeName&&(S.pageNumber=+a.target.textContent,t.removeEventListener("click",e),E())}))}const w=new r;function k(e){const t=e.results;Promise.all([w.fetchGenres("movie"),w.fetchGenres("tv")]).then((n=>{const a=n.flatMap((e=>e.genres)),s=new Map(a.map((e=>[e.id,e.name])));document.querySelector(".gallery").innerHTML=y(t,s),$(e)})).catch(console.log)}const S=new r;function E(){S.fetchTrending().then(k).catch(console.log)}function M({poster_path:e,genres:n=[],vote_count:a,vote_average:s,original_title:i,popularity:r,title:l,overview:c}){const d=n.map((e=>e.name));return`<div class="modal">\n    <button class="modal__close" data-action="close-modal"><svg class="modal__close-icon" width="14" height="14">\n        <use href="${t(o)}#icon-close"></use>\n      </svg></button>\n \n      <img class="modal__img" src=https://image.tmdb.org/t/p/w500/${e} alt="poster" />\n  \n    <div class="modal__description-wrap">\n      <h2 class="modal__title">${l}</h2>\n      <table class="modal__info">\n  <tr>\n    <td class="modal__info-key">Vote/votes</td>\n    <td "modal__info-value">\n    <span class="modal__info-value--accent">${s}</span>\n     <span class="modal__info-value--slash">/ </span\n    ><span class="modal__info-value--grey">${a}</span>\n    </td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Popularity</td>\n    <td "modal__info-value">${r}</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Original Title</td>\n    <td "modal__info-value">${i}</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Genre</td>\n    <td "modal__info-value">${d}</td>\n  </tr>\n</table>\n    \n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">\n        ${c}\n      </p>\n      <div class="modal__option">\n        <button class="btn-add-wached" data-action="add-wached">add to Watched</button>\n        <button class="btn-add-queue" data-action="add-queue">add to queue</button>\n      </div>\n    </div>\n  </div>`}function q(e){if("add-queue"===e.target.dataset.action){const t=document.querySelector(".btn-add-queue"),n=document.querySelector(".btn-add-wached"),a=e.currentTarget.getAttribute("id");if(_.isMovieInQueueList(a)?_.removeMovieFromQueueList(a):_.addMovieToQueueList(a),t.classList.toggle("isActive"),_.isMovieInQueueList(a)?t.textContent="delete to queue":t.textContent="add to queue",console.log(_.getQueueList()),!t.disabled&&!n.disabled)return n.disabled=!0;if(n.disabled)return n.disabled=!1}}function x(e){if("add-wached"===e.target.dataset.action){const t=document.querySelector(".btn-add-wached"),n=document.querySelector(".btn-add-queue"),a=e.currentTarget.getAttribute("id");if(_.isMovieInWatchedList(a)?_.removeMovieFromWatchedList(a):_.addMovieToWatchedList(a),t.classList.toggle("isActive"),_.isMovieInWatchedList(a)?t.textContent="delete to wached":t.textContent="add to watched",console.log(_.getWatchedList()),!n.disabled&&!t.disabled)return n.disabled=!0;if(n.disabled)return n.disabled=!1}}function Q(){let e=document.querySelector(".backdrop");e.classList.remove("is-hidden"),document.addEventListener("keydown",T),e.addEventListener("click",W),e.addEventListener("click",q),e.addEventListener("click",x)}function I(){let e=document.querySelector(".backdrop");e.classList.add("is-hidden"),document.removeEventListener("keydown",T),e.removeEventListener("click",W),e.removeEventListener("click",q),e.removeEventListener("click",x)}function T(e){"Escape"===e.code&&I()}function W(e){"close-modal"!==e.target.dataset.action&&e.currentTarget!==e.target||I()}const H=new r;async function F(e){document.querySelector(".backdrop").setAttribute("id",e);const t=await H.fetchMovieDetails(e),n=await M(t);await async function(e){document.querySelector(".backdrop").innerHTML=e}(n);const a=document.querySelector(".btn-add-queue"),s=document.querySelector(".btn-add-wached");_.isMovieInQueueList(e)&&(a.textContent="delete to queue",a.classList.toggle("isActive"),s.disabled=!0),_.isMovieInWatchedList(e)&&(s.textContent="delete to Wached",s.classList.toggle("isActive"),a.disabled=!0),Q()}async function A(e){let t=document.querySelector(".backdrop");if(t=document.querySelector(".backdrop"),e.target.classList.contains("gallery__item")){const t=e.target.dataset.id;await F(t)}}const O=document.querySelector("#root");document.addEventListener("DOMContentLoaded",function(){b(),O.insertAdjacentHTML("beforeend",'\n  <section class="section">\n  <div class="container">\n    <h2 class="visually-hidden">Gallery list</h2>\n    <ul class="gallery"></ul>\n    <div class="pagination">\n      \n    </div>\n  </div>\n</section>'),O.insertAdjacentHTML("beforeend",'<footer>\n  <div class="footer__container container">\n    <p class="footer__text">© 2020 | All Rights Reserved |</p>\n    <p class="footer__text">\n      Developed with<svg xmlns="http://www.w3.org/2000/svg" id="icon-heart" class="footer__icon" viewBox="0 0 34 32" width="14" height="13">\n      <path\n        d="M17.231 31.705l-2.412-2.412c-8.96-7.926-14.818-13.268-14.818-19.815 0-5.342 4.135-9.477 9.477-9.477 2.929 0 5.858 1.378 7.754 3.618 1.895-2.24 4.825-3.618 7.754-3.618 5.342 0 9.477 4.135 9.477 9.477 0 6.548-5.858 11.889-14.818 19.815l-2.412 2.412z"\n      ></path>\n    </svg>by\n      <button type="button" class="footer__button">GoIT Students</button>\n    </p>\n  </div>\n</footer>'),O.insertAdjacentHTML("beforeend",'<div class="backdrop is-hidden"></div>');document.querySelector(".gallery").addEventListener("click",A);E()}(),{once:!0});
//# sourceMappingURL=index.e481ec1a.js.map
