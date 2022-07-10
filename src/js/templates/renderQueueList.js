import Api from '../api-service';
import { renderLibraryCards } from './renderLibraryCards';
import { localStorageApi } from '../localStorageApi';
import { addEmptyListPlaceholder } from '../addEmptyListPlaceholder';
import { changeUrl } from '../service/chengingUrlApi';

const apiService = new Api();

function renderQueueList() {
  const queueBtn = document
    .getElementById('js-queue')
    .classList.add('button-list__btn--current');
  const watchedBtn = document
    .getElementById('js-watched')
    .classList.remove('button-list__btn--current');
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
      changeUrl().goToLibrary('library/queue');
      const libraryMarkup = renderLibraryCards(cards);
      galleryElement.innerHTML = libraryMarkup;
    })
    .catch(error => console.log(error));
}

export { renderQueueList };
