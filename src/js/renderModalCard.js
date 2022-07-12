import ApiService from './service/api-service';
import createModalMarkup from './templates/modalCardMarkap';
import { openModal } from './handlers/modalCardOptions';
import { localStorageApi } from './service/localStorageApi';

import trailerMarkup from './templates/traillerMarkup';

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
  }
  if (localStorageApi.isMovieInWatchedList(movieId)) {
    addWached.textContent = 'delete from watched';
    addWached.classList.toggle('isActive');
  }

  await fetchByTrailer(movieId);
  openModal();
}

function uppendModalMarkap(markup) {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.innerHTML = markup;
}

async function fetchByTrailer(filmId) {
  const modalEl = document.querySelector('.modal');
  const btnPlay = document.querySelector('.modal__btn-play');
  try {
    const key = await appService.searchTrailerById(filmId);
    const markup = await trailerMarkup(key);
    await modalEl.insertAdjacentHTML('afterbegin', markup);
    btnPlay.classList.remove('is-hidden');
  } catch (error) {
    console.log(error);
  }
}
