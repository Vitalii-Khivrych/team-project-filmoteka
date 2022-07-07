import { appService } from '../createTrandingMovieCars';
import handleResponse from './handlerResponse';

let searchForm = null;

document.addEventListener('DOMContentLoaded', function () {
  searchForm = document.querySelector('#search-movie');
  searchForm.addEventListener('submit', onSearchMovie);
});

const onSearchMovie = e => {
  e.preventDefault();
  const queryString = e.currentTarget.elements.searchQuery.value.trim();

  if (queryString === '') {
    console.log('Пустий пошук');
    //Зробити повідомлення про пустий пошук
    return;
  }
  appService.query = queryString;

  appService.resetPage();

  searchMovie();

  searchForm.reset();
};

function searchMovie() {
  appService.fetchSearchMovie().then(handleResponse).catch(console.log);
}

export { onSearchMovie, searchMovie };
