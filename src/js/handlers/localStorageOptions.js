export { onBtnAddToQueueClick, onBtnAddWachedClick };
import { localStorageApi } from '../localStorageApi';

function onBtnAddToQueueClick(e) {
  if (e.target.dataset.action === 'add-queue') {
    const addToQueue = document.querySelector('.btn-add-queue');
    const addWached = document.querySelector('.btn-add-wached');
    const filmId = e.currentTarget.getAttribute('id');
    localStorageApi.isMovieInQueueList(filmId)
      ? localStorageApi.removeMovieFromQueueList(filmId)
      : localStorageApi.addMovieToQueueList(filmId);
    addToQueue.classList.toggle('isActive');
    localStorageApi.isMovieInQueueList(filmId)
      ? (addToQueue.textContent = 'delete for queue')
      : (addToQueue.textContent = 'add to queue');
    console.log(localStorageApi.getQueueList());
    if (!addToQueue.disabled && !addWached.disabled) {
      return (addWached.disabled = true);
    }
    if (addWached.disabled) {
      return (addWached.disabled = false);
    }
  }
}
function onBtnAddWachedClick(e) {
  if (e.target.dataset.action === 'add-wached') {
    const addWached = document.querySelector('.btn-add-wached');
    const addToQueue = document.querySelector('.btn-add-queue');
    const filmId = e.currentTarget.getAttribute('id');
    localStorageApi.isMovieInWatchedList(filmId)
      ? localStorageApi.removeMovieFromWatchedList(filmId)
      : localStorageApi.addMovieToWatchedList(filmId);
    addWached.classList.toggle('isActive');
    localStorageApi.isMovieInWatchedList(filmId)
      ? (addWached.textContent = 'delete for wached')
      : (addWached.textContent = 'add to watched');
    console.log(localStorageApi.getWatchedList());
    if (!addToQueue.disabled && !addWached.disabled) {
      return (addToQueue.disabled = true);
    }
    if (addToQueue.disabled) {
      return (addToQueue.disabled = false);
    }
  }
}