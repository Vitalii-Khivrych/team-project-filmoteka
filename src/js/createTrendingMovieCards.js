import Api from './api-service';
import handleResponse from './handlers/handlerResponse';
import { changeUrl } from './service/chengingUrlApi';

const apiServiceTrending = new Api();

function initRenderTrendingMovie() {
  apiServiceTrending
    .fetchTrending()
    .then(data => {
      apiServiceTrending.pageNumber = +changeUrl().getCurrentPage();
      handleResponse(data, apiServiceTrending);
    })
    .catch(console.log);
}

export { initRenderTrendingMovie, appService };
