const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '81f57ce8a5863d84fdab7c29ba0c37c2';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchTrending() {
    const url = `${BASE_URL}/trending/all/day?api_key=${KEY}&page=${this.page}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return data;
      });
  }

  fetchSearchMovie() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&include_adult=false`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return data;
      });
  }

  fetchMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return data;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

//
