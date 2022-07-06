import Api from '../js/api-service';
import handleResponse from './handlers/handlerResponse';

const appService = new Api();

function initRenderTrendingMovie() {
  appService.fetchTrending().then(handleResponse).catch(console.log);
}

export { initRenderTrendingMovie, appService };
