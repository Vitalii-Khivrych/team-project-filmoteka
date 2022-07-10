import Api from '../api-service';
import { renderLibraryCards } from './renderLibraryCards';
import { localStorageApi } from '../localStorageApi';
import { addEmptyListPlaceholder } from '../addEmptyListPlaceholder';
import { renderQueuePagination } from '../renderLibraryPagination';
import { devideListBy20 } from '../devideListBy20';
import spiner from '../spiner';

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
  const devidedQueuelist = devideListBy20(queueList);

  galleryElement.innerHTML = '';

  if (localStorageApi.isQueueListEmpty()) {
    addEmptyListPlaceholder(galleryElement);
    return;
  }

  renderQueuePagination(queueList, apiService);

  const movieCards = devidedQueuelist[apiService.pageNumber - 1].map(id =>
    apiService.fetchMovieDetails(id).catch(error => console.log(error))
  );

  Promise.all(movieCards)
    .then(cards => {
      const libraryMarkup = renderLibraryCards(cards);
      galleryElement.innerHTML = libraryMarkup;

      setTimeout(() => {
        spiner.off();
      }, 500);
    })
    .catch(error => console.log(error));
}

export { renderQueueList };