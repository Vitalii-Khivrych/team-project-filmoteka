import renderPopularCards from '../templates/render-popular-card';
import { createPaginationBtn } from '../createPaginationBtn';
import { appService } from '../createTrandingMovieCars';

export default function handleResponse(response) {
  console.log(response);
  const cards = response.results;

  appService
    .fetchGenres()
    .then(genres => {
      const genreMap = new Map(
        genres.genres.map(object => {
          return [object.id, object.name];
        })
      );

      const galleryRef = document.querySelector('.gallery');

      galleryRef.innerHTML = renderPopularCards(cards, genreMap);

      createPaginationBtn(response);
    })
    .catch(console.log);
}
