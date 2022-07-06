import ApiService from './api-service';
import createModalMarkup from './templates/modalCardMarkap';
import { openModal } from './handlers/modalCardOptions';

const appService = new ApiService();

export default async function renderModalCard(movieId) {
  let backdropEl = document.querySelector('.backdrop');
  backdropEl.setAttribute('id', movieId);
  const data = await appService.fetchMovieDetails(movieId);
  const markup = await createModalMarkup(data);
  await uppendModalMarkap(markup);
  openModal();
}

async function uppendModalMarkap(markup) {
  let backdropEl = document.querySelector('.backdrop');
  backdropEl.innerHTML = markup;
}
