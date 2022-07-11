import Api from '../api-service';
import handleResponse from './handlerResponse';
import spiner from '../spiner';
import { showEmptyInputMessage } from '../showFailMessage';
import { changeUrl } from '../service/chengingUrlApi';

const apiServiceSearch = new Api();
// let searchInput = null;

// document.addEventListener('DOMContentLoaded', function () {
//   searchInput = document.querySelector('#search-movie');
//   searchInput.addEventListener('submit', onSearchMovie);
// });
let currentInputPlaceholder = "";
const onFocusInput = (event) => {
  event.preventDefault();
  if (currentInputPlaceholder.length > 0) {
    event.currentTarget.placeholder = currentInputPlaceholder;
    event.currentTarget.classList.add("search-form__input-focus-placeholder");
  } 
}
const onBlurInput = (event) => {
  event.preventDefault();
  event.currentTarget.placeholder = "Movie search";
  event.currentTarget.classList.remove("search-form__input-focus-placeholder");
}

const onSearchMovie = e => {
  e.preventDefault();
  const queryString = e.currentTarget.elements.searchQuery.value.trim();
  currentInputPlaceholder = queryString;
  e.currentTarget.elements.searchQuery.placeholder = currentInputPlaceholder;
  e.currentTarget.elements.searchQuery.classList.add("search-form__input-focus-placeholder");
  if (queryString === '') {
    e.target.reset();
    showEmptyInputMessage();
    return;
  }
  spiner.on();

  apiServiceSearch.resetPage();

  changeUrl().goToSearch(queryString);

  searchMovie();

  e.target.reset();
};

function searchMovie() {
  apiServiceSearch.pageNumber = +changeUrl().getCurrentPage();
  apiServiceSearch.query = changeUrl().getQuery();

  apiServiceSearch
    .fetchSearchMovie()
    .then(data => handleResponse(data, apiServiceSearch))
    .catch(console.log);
}

export { onSearchMovie, searchMovie,onFocusInput, onBlurInput};
