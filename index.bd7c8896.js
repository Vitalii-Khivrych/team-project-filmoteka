var e={searchInput:document.querySelector("#search-movie")};const t=new class{fetchTrending(){const e=`https://api.themoviedb.org/3/trending/all/day?api_key=81f57ce8a5863d84fdab7c29ba0c37c2&page=${this.page}`;return fetch(e).then((e=>e.json()))}fetchSearchMovie(){const e=`https://api.themoviedb.org/3/search/movie?api_key=81f57ce8a5863d84fdab7c29ba0c37c2&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return fetch(e).then((e=>e.json()))}fetchMovieDetails(e){const t=`https://api.themoviedb.org/3/movie/${searchId}?api_key=81f57ce8a5863d84fdab7c29ba0c37c2&language=en-US`;return fetch(t).then((e=>e.json()))}incrementPage(){this.page+=1}set pageNumber(e){this.page=e}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get movieId(){return this.searchId}set movieId(e){this.searchId=e}constructor(){this.searchQuery="",this.page=1,this.searchId="66732"}};e.searchInput.addEventListener("submit",(function(e){e.preventDefault(),t.query=e.currentTarget.elements.searchQuery.value.trim();if(""===t.searchQuery)return void console.log("Пустий пошук");t.resetPage(),t.fetchSearchMovie().then(console.log)}));
//# sourceMappingURL=index.bd7c8896.js.map
