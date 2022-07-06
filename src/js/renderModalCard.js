import ApiService from './api-service';
import createModalMarkup from './templates/modalCardMarkap';
import { openModal } from './handlers/modalCardOptions';
import { localStorageApi } from './localStorageApi';

const appService = new ApiService();

export default async function renderModalCard(movieId) {
  let backdropEl = document.querySelector('.backdrop');
  backdropEl.setAttribute('id', movieId);
  const data = await appService.fetchMovieDetails(movieId);
  const markup = await createModalMarkup(data);
  await uppendModalMarkap(markup);
  const addToQueue = document.querySelector('.btn-add-queue');
  const addWached = document.querySelector('.btn-add-wached');
  if (localStorageApi.isMovieInQueueList(movieId)) {
    addToQueue.textContent = 'delete to queue';
    addToQueue.classList.toggle('isActive');
    addWached.disabled = true;
  }
  if (localStorageApi.isMovieInWatchedList(movieId)) {
    addWached.textContent = 'delete to Wached';
    addWached.classList.toggle('isActive');
    addToQueue.disabled = true;
  }
  openModal();
}

async function uppendModalMarkap(markup) {
  let backdropEl = document.querySelector('.backdrop');
  backdropEl.innerHTML = markup;
}