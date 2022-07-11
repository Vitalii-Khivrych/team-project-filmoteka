import Api from '../api-service';
import handleResponse from './handlerResponse';

const apiServiceFilterSearch = new Api();

function onFilterUpdate() {
  const genre = document.querySelector('#genre');
  const year = document.querySelector('#year');

  apiServiceFilterSearch.genreIdFilter = genre.value;
  apiServiceFilterSearch.yearFilter = year.value;

  apiServiceFilterSearch.fetchMoviesByFilters().then(data => {
    handleResponse(data, apiServiceFilterSearch);
  });
}

export { onFilterUpdate };
