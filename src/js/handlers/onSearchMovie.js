import Api from '../api-service';
import handleResponse from './handlerResponse';
import spiner from '../spiner';
import refs from '../../index';

const apiServiceSearch = new Api();

document.addEventListener('DOMContentLoaded', function () {
  refs.searchInput.addEventListener('submit', onSearchMovie);
});

const onSearchMovie = e => {
  e.preventDefault();
  spiner.on();
  const queryString = e.currentTarget.elements.searchQuery.value.trim();

  if (queryString === '') {
    console.log('Пустий пошук');
    //Зробити повідомлення про пустий пошук
    return;
  }

  apiServiceSearch.query = queryString;
  apiServiceSearch.resetPage();

  searchMovie();

  refs.searchInput.reset();
};

function searchMovie() {
  apiServiceSearch
    .fetchSearchMovie()
    .then(data => handleResponse(data, apiServiceSearch))
    .catch(console.log);
}

export { onSearchMovie, searchMovie };
