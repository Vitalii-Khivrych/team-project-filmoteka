import ApiService from './api-service';
import createModalMarkup from './templates/modalCardMarkap';
import { openModal } from './handlers/modalCardOptions';
import { localStorageApi } from './localStorageApi';
const appService = new ApiService();

export default async function renderModalCard(movieId) {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.setAttribute('id', movieId);
  try {
    const data = await appService.fetchMovieDetails(movieId);
    const markup = await createModalMarkup(data);
    await uppendModalMarkap(markup);
  } catch (error) {
    console.log(error);
  }
  const addToQueue = document.querySelector('.btn-add-queue');
  const addWached = document.querySelector('.btn-add-watched');
  if (localStorageApi.isMovieInQueueList(movieId)) {
    addToQueue.textContent = 'delete from queue';
    addToQueue.classList.toggle('isActive');
    addWached.disabled = true;
  }
  if (localStorageApi.isMovieInWatchedList(movieId)) {
    addWached.textContent = 'delete from watched';
    addWached.classList.toggle('isActive');
    addToQueue.disabled = true;
  }
  openModal();
}

function uppendModalMarkap(markup) {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.innerHTML = markup;
}
