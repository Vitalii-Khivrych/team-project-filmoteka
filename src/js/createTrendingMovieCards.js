import Api from './api-service';
import handleResponse from './handlers/handlerResponse';
import { changeUrl } from './service/chengingUrlApi';
import makeBasicFilterMarkup from './templates/render-filter';
import { onFilterUpdate } from './handlers/onSearchFilters';

const apiServiceTrending = new Api();

function initRenderTrendingMovie() {
  createSearchFilter();
  createTrendingMoviegallery();
}

function createSearchFilter() {
  const galleryTitleRef = document.querySelector('.filter__wrap');
  galleryTitleRef.innerHTML = makeBasicFilterMarkup();
  document.querySelector('.filter').addEventListener('change', onFilterUpdate);
}

function createTrendingMoviegallery() {
  apiServiceTrending.pageNumber = +changeUrl().getCurrentPage();

  apiServiceTrending
    .fetchTrending()
    .then(data => {
      handleResponse(data, apiServiceTrending);
    })
    .catch(console.log);
}

export { initRenderTrendingMovie, appService };
