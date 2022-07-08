import Api from './api-service';
import handleResponse from './handlers/handlerResponse';

const apiServiceTrending = new Api();

function initRenderTrendingMovie() {
  apiServiceTrending
    .fetchTrending()
    .then(data => handleResponse(data, apiServiceTrending))
    .catch(console.log);
}

export { initRenderTrendingMovie, appService };
