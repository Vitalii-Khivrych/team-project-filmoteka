import renderPopularCards from '../templates/render-popular-card';
import { createPaginationBtn } from '../createPaginationBtn';
import spiner from '../spiner';
import { showNoResultMessage } from '../showFailMessage';
import { scrollUp } from '../scrollUp';

export default function handleResponse(response, apiService) {
  if (response.total_results === 0) {
    spiner.off();
    showNoResultMessage();
    return;
  }

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

      const galleryRef = document.querySelector('.gallery');

      galleryRef.innerHTML = renderPopularCards(cards, genreMap);

      createPaginationBtn(response, apiService);

      spiner.off();

      scrollUp();
    })
    .catch(console.log);
}
