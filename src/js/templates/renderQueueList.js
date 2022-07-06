import Api from '../api-service';
import { renderLibraryCards } from './renderLibraryCards';
import { localStorageApi } from '../localStorageApi';

const apiService = new Api();

function renderQueueList() {
  const galleryElement = document.querySelector('.gallery');

  // ==================  Раскомментировать для тестов ===================
  /*
  localStorageApi.addMovieToQueueList(234); 
  localStorageApi.addMovieToQueueList(344); 
  localStorageApi.addMovieToQueueList(123); 
  localStorageApi.addMovieToQueueList(234); 
  localStorageApi.addMovieToQueueList(562); 
  localStorageApi.addMovieToQueueList(184); 
  localStorageApi.addMovieToQueueList(12); 
  localStorageApi.addMovieToQueueList(2357); 
  localStorageApi.addMovieToQueueList(298); 
  localStorageApi.addMovieToQueueList(5333); 
  localStorageApi.addMovieToQueueList(5876); 
*/
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
