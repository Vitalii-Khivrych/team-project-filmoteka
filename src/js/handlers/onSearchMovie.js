import Api from '../api-service';
import handleResponse from './handlerResponse';
import spiner from '../spiner';
import { showEmptyInputMessage } from '../showFailMessage';

const apiServiceSearch = new Api();
let searchInput = null;

document.addEventListener('DOMContentLoaded', function () {
  searchInput = document.querySelector('#search-movie');
  searchInput.addEventListener('submit', onSearchMovie);
});

const onSearchMovie = e => {
  e.preventDefault();

  const queryString = e.currentTarget.elements.searchQuery.value.trim();

  if (queryString === '') {
    searchInput.reset();
    showEmptyInputMessage();
    return;
  }
  spiner.on();

  apiServiceSearch.query = queryString;
  apiServiceSearch.resetPage();

  searchMovie();

  searchInput.reset();
};

function searchMovie() {
  apiServiceSearch
    .fetchSearchMovie()
    .then(data => handleResponse(data, apiServiceSearch))
    .catch(console.log);
}

export { onSearchMovie, searchMovie };
