import renderPopularCards from '../templates/render-popular-card';
import { createPaginationBtn } from '../createPaginationBtn';
import spiner from '../spiner';
import refs from '../../index';

export default function handleResponse(response, apiService) {
  console.log(response);
  const cards = response.results;

  apiService
    .fetchGenres()
    .then(genres => {
      const genreMap = new Map(
        genres.genres.map(object => {
          return [object.id, object.name];
        })
      );

      refs.gallery.innerHTML = renderPopularCards(cards, genreMap);

      createPaginationBtn(response, apiService);

      spiner.off();
    })
    .catch(console.log);
}
