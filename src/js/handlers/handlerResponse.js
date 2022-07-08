import renderPopularCards from '../templates/render-popular-card';
import { createPaginationBtn } from '../createPaginationBtn';
import spiner from '../spiner';

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

      const galleryRef = document.querySelector('.gallery');
      galleryRef.innerHTML = renderPopularCards(cards, genreMap);

      createPaginationBtn(response, apiService);

      spiner.off();
    })
    .catch(console.log);
}
