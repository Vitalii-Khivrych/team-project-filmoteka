import Api from './service/api-service';
import handleResponse from './handlers/handlerResponse';
import { changeUrl } from './service/chengingUrlApi';
import makeBasicFilterMarkup from './templates/render-filter';
import { onFilterUpdate } from './handlers/onSearchFilters';
import { searchMovie } from './handlers/onSearchMovie ';
import { filterMovie } from './handlers/onSearchFilters';
import { changeUrl } from './service/chengingUrlApi';

const apiServiceTrending = new Api();

function initRenderTrendingMovie() {
  if (changeUrl().isSearch()) {
    searchMovie();
    return;
  }

  if (changeUrl().isFilter()) {
    filterMovie();
    return;
  }

  createTrendingMovieGallery();
  // createTrendingMoviegallery();
}

function createSearchFilter() {
  const galleryTitleRef = document.querySelector('.filter__wrap');
  galleryTitleRef.innerHTML = makeBasicFilterMarkup();
  document.querySelector('.filter').addEventListener('change', onFilterUpdate);
}

async function createTrendingMovieGallery() {
  apiServiceTrending.pageNumber = +changeUrl().getCurrentPage();
  createSearchFilter();

  try {
    const response = await apiServiceTrending.fetchTrending();
    handleResponse(response, apiServiceTrending);
  } catch (error) {
    console.log(error);
  }
}

export { initRenderTrendingMovie, appService };
