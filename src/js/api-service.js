const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '81f57ce8a5863d84fdab7c29ba0c37c2';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.searchId = '';
  }

  fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}&language=en-US`;
    return fetch(url).then(res => res.json());
  }

  fetchTrending() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${this.page}`;

    return fetch(url).then(res => res.json());
  }

  fetchSearchMovie() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;

    return fetch(url).then(res => res.json());
  }

  async fetchMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US&append_to_response=videos`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  get pageNumber() {
    return this.page;
  }

  set pageNumber(number) {
    this.page = number;
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

  get movieId() {
    return this.searchId;
  }

  set movieId(newId) {
    this.searchId = newId;
  }
}

//
