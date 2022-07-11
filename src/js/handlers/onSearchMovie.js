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

const onSearchMovie = e => {
  e.preventDefault();

  const queryString = e.currentTarget.elements.searchQuery.value.trim();

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

export { onSearchMovie, searchMovie };
