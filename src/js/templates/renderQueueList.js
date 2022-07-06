import Api from '../api-service';
import { renderLibraryCards } from './renderLibraryCards';
import { localStorageApi } from '../localStorageApi';

const apiService = new Api();

function renderQueueList() {
  const galleryElement = document.querySelector('.gallery');
  const queueList = localStorageApi.getQueueList();

  galleryElement.innerHTML = '';

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
