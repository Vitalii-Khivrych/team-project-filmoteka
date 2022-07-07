import renderPopularCards from '../templates/render-popular-card';
import { createPaginationBtn } from '../createPaginationBtn';
import { appService } from '../createTrandingMovieCars';

export default function handleResponse(response) {
  console.log(response);
  const cards = response.results;

  Promise.all([appService.fetchGenres('movie'), appService.fetchGenres('tv')])
    .then(allGenres => {
      const genres = allGenres.flatMap(r => r.genres);
      const genreMap = new Map(
        genres.map(object => {
          return [object.id, object.name];
        })
      );

      const galleryRef = document.querySelector('.gallery');

      galleryRef.innerHTML = renderPopularCards(cards, genreMap);

      createPaginationBtn(response);
    })
    .catch(console.log);
}
