import Api from './api-service';
import handleResponse from './handlers/handlerResponse';
import { changeUrl } from './service/chengingUrlApi';

const apiServiceTrending = new Api();

function initRenderTrendingMovie() {
  apiServiceTrending.pageNumber = +changeUrl().getCurrentPage();

  apiServiceTrending
    .fetchTrending()
    .then(data => {
      handleResponse(data, apiServiceTrending);
    })
    .catch(console.log);
}

export { initRenderTrendingMovie, appService };
