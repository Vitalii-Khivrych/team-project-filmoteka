import Api from '../api-service';
import handleResponse from './handlerResponse';

const apiServiceSearch = new Api();
console.log('onSearchFilters');

function onFilterUpdate() {
  console.log('onFilterUpdate');
  const genre = document.querySelector('#genre');
  const year = document.querySelector('#year');
  apiServiceSearch.genreIdFilter = genre.value;
  apiServiceSearch.yearFilter = year.value;
  apiServiceSearch.fetchMoviesByFilters(genre, year).then(data => {
    handleResponse(data, apiServiceSearch);
  });
}

export { onFilterUpdate };
