import Api from '../api-service';
import { renderLibraryCards } from './renderLibraryCards';
import { localStorageApi } from '../localStorageApi';
import { addEmptyListPlaceholder } from '../addEmptyListPlaceholder';

const apiService = new Api();

function renderQueueList() {
  const galleryElement = document.querySelector('.gallery');
  const queueList = localStorageApi.getQueueList();

  galleryElement.innerHTML = '';

  if (localStorageApi.isQueueListEmpty()) {
    addEmptyListPlaceholder(galleryElement);
    return;
  }

  const movieCards = queueList.map(id =>
    apiService.fetchMovieDetails(id).catch(error => console.log(error))
  );

  Promise.all(movieCards)
    .then(cards => {
      const libraryMarkup = renderLibraryCards(cards);
      galleryElement.innerHTML = libraryMarkup;
    })
    .catch(error => console.log(error));
}

export { renderQueueList };
