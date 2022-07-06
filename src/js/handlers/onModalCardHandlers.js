import ApiService from '../api-service';
import createModalMarkup from '../templates/modalCardMarkap';
export { onCardClick };

let backdropEl = null;
const appService = new ApiService();

async function onCardClick(e) {
  backdropEl = document.querySelector('.backdrop');
  if (e.target.classList.contains('gallery__item')) {
    const filmId = e.target.dataset.id;
    await renderModalCard(filmId);
  }
}

//при викликі фонкції renderModal :
// 1.на refs.backdrop додається значення movieId яке є аргументом функціі
// 2.запит інформації про Фільм за його ID
// 3.створення розмітки
// 4.додання розмітки в DOM
async function renderModalCard(movieId) {
  backdropEl.setAttribute('id', movieId);
  const data = await appService.fetchMovieDetails(movieId);
  const markup = await createModalMarkup(data);
  await uppendModalMarkap(markup);
  openModal();
}
// // додавання розмітки на backdrop
async function uppendModalMarkap(markup) {
  backdropEl.innerHTML = markup;
}
// // знімає is.hidden з refs.backdrop та додає слухачів
function openModal() {
  backdropEl.classList.remove('is-hidden');
  document.addEventListener('keydown', onCloseEsc);
  backdropEl.addEventListener('click', onBtnCloseModalClick);
  backdropEl.addEventListener('click', onBtnAddToQueueClick);
  backdropEl.addEventListener('click', onBtnAddWachedClick);
}
// //додає is.hidden на refs.backdrop та знімає слухачів
function closeModal() {
  backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', onCloseEsc);
  backdropEl.removeEventListener('click', onBtnCloseModalClick);
  backdropEl.removeEventListener('click', onBtnAddToQueueClick);
  backdropEl.removeEventListener('click', onBtnAddWachedClick);
}

// // закриття по Esc
function onCloseEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
// // закриття по кнопкі або по кліку на бєкдроп
function onBtnCloseModalClick(e) {
  if (
    e.target.dataset.action === 'close-modal' ||
    e.currentTarget === e.target
  ) {
    closeModal();
  }
}
function onBtnAddToQueueClick(e) {
  if (e.target.dataset.action === 'add-queue') {
    console.log('onBtnAddToQueueClick - click');
  }
}
function onBtnAddWachedClick(e) {
  if (e.target.dataset.action === 'add-wached') {
    console.log('onBtnAddWachedClick - click');
  }
}
