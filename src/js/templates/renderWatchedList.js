import Api from '../api-service';
import { renderLibraryCards } from './renderLibraryCards';
import { localStorageApi } from '../localStorageApi';
import { addEmptyListPlaceholder } from '../addEmptyListPlaceholder';

const apiService = new Api();

function renderWatchedList() {
    const queueBtn = document.getElementById('js-queue').classList.remove('button-list__btn--current');
    const watchedBtn = document.getElementById('js-watched').classList.add('button-list__btn--current')
  const galleryElement = document.querySelector('.gallery');
  const watchedList = localStorageApi.getWatchedList();

  galleryElement.innerHTML = '';

  if (localStorageApi.isWatchedListEmpty()) {
    addEmptyListPlaceholder(galleryElement);
    return;
  }

  const movieCards = watchedList.map(id =>
    apiService.fetchMovieDetails(id).catch(error => console.log(error))
  );

  Promise.all(movieCards)
    .then(cards => {
      const libraryMarkup = renderLibraryCards(cards);
      galleryElement.innerHTML = libraryMarkup;
    })
    .catch(error => console.log(error));
}

export { renderWatchedList };