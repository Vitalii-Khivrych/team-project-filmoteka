import Api from '../service/api-service';
import handleResponse from './handlerResponse';
import { changeUrl } from '../service/chengingUrlApi';

const apiServiceFilterSearch = new Api();

function onFilterUpdate() {
  const genre = document.querySelector('#genre');
  const year = document.querySelector('#year');

  // apiServiceFilterSearch.genreIdFilter = genre.value;
  // apiServiceFilterSearch.yearFilter = year.value;
  apiServiceFilterSearch.resetPage();

  changeUrl().goToFilter(genre.value || 28, year.value || 2022);

  filterMovie();
}

async function filterMovie() {
  try {
    apiServiceFilterSearch.genreIdFilter = changeUrl().getGenre();
    apiServiceFilterSearch.yearFilter = changeUrl().getYeare();
    apiServiceFilterSearch.pageNumber = +changeUrl().getCurrentPage();

    const response = await apiServiceFilterSearch.fetchMoviesByFilters();
    handleResponse(response, apiServiceFilterSearch);
  } catch (err) {
    console.log(err);
  }
}

export { onFilterUpdate, filterMovie };
