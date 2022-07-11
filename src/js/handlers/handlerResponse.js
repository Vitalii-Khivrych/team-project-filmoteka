import renderPopularCards from '../templates/render-popular-card';
import { createPaginationBtn } from '../createPaginationBtn';
import spiner from '../spiner';
import { showNoResultMessage } from '../showFailMessage';
import { scrollUp } from '../scrollUp';
import makeBasicFilterMarkup from '../templates/render-filter';
import { onFilterUpdate } from './onSearchFilters';


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
      const galleryTitleRef = document.querySelector('.filter__wrap')
      galleryRef.innerHTML = renderPopularCards(cards, genreMap);
      galleryTitleRef.innerHTML = makeBasicFilterMarkup();
      document.querySelector('.filter').addEventListener('change', onFilterUpdate);


      createPaginationBtn(response, apiService);

      spiner.off();

      scrollUp();
    })
    .catch(console.log);
}
