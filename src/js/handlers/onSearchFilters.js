import Api from '../service/api-service';
import handleResponse from './handlerResponse';
import { changeUrl } from '../service/chengingUrlApi';

import createSearchFilter from '../createSearchFilter';

const apiServiceFilterSearch = new Api();

function onFilterUpdate() {
  const genre = document.querySelector('#genre');
  const year = document.querySelector('#year');

  // apiServiceFilterSearch.genreIdFilter = genre.value;
  // apiServiceFilterSearch.yearFilter = year.value;
  apiServiceFilterSearch.resetPage();

  changeUrl().goToFilter(genre.value, year.value);

  filterMovie();
}

async function filterMovie() {
  try {
    const galleryRef = document.querySelector('.gallery');
    const paginationSectionRef = document.querySelector('.pagination');
    galleryRef.innerHTML = '';
    paginationSectionRef.innerHTML = '';

    createSearchFilter();

    apiServiceFilterSearch.genreIdFilter = changeUrl().getGenre();
    apiServiceFilterSearch.yearFilter = changeUrl().getYeare();
    apiServiceFilterSearch.pageNumber = +changeUrl().getCurrentPage();

    genre.value = apiServiceFilterSearch.genreIdFilter;
    year.value = apiServiceFilterSearch.yearFilter;

    const response = await apiServiceFilterSearch.fetchMoviesByFilters();
    handleResponse(response, apiServiceFilterSearch);
  } catch (err) {
    console.log(err);
  }
}

export { onFilterUpdate, filterMovie };
