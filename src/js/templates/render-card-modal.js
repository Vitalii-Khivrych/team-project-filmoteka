import refs from '../refs';
import { appService } from '../../index';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

// додавання розмітки на backdrop
async function uppendModalMarkap(markup) {
  refs.backdrop.innerHTML = markup;
}
//при викликі фонкції renderModal :
// 1.на refs.backdrop додається значення movieId яке є аргументом функціі
// 2.запит інформації про Фільм за його ID
// 3.створення розмітки
// 4.додання розмітки в DOM
async function renderModalCard(movieId) {
  refs.backdrop.setAttribute('id', movieId);
  const data = await appService.fetchMovieDetails(movieId);
  const markup = await createModalMarkup(data);
  await uppendModalMarkap(markup);
  openModal();
}
{
}
function createModalMarkup({
  poster_path,
  genres = [],
  vote_count,
  vote_average,
  original_title,
  popularity,
  title,
  overview,
}) {
  const genersList = genres.map(element => element.name);
  return `<div class="modal">
    <button class="modal__close" data-action="close-modal">X</button>
 
      <img class="modal__img" src=${IMG_URL}${poster_path} alt="poster" />
  
    <div class="modal__description-wrap">
      <h2 class="modal__title">${title}</h2>
      <table class="modal__info">
  <tr>
    <td class="modal__info-key">Vote/votes</td>
    <td "modal__info-value">
    <span class="modal__info-value--accent">${vote_average}</span>
     <span class="modal__info-value--slash">/ </span
    ><span class="modal__info-value--grey">${vote_count}</span>
    </td>
  </tr>
  <tr>
    <td class="modal__info-key">Popularity</td>
    <td "modal__info-value">${popularity}</td>
  </tr>
  <tr>
    <td class="modal__info-key">Original Title</td>
    <td "modal__info-value">${original_title}</td>
  </tr>
  <tr>
    <td class="modal__info-key">Genre</td>
    <td "modal__info-value">${genersList}</td>
  </tr>
</table>
    
      <h3 class="modal__about-title">About</h3>
      <p class="modal__about-text">
        ${overview}
      </p>
      <div class="modal__option">
        <button class="btn-add-wached" data-action="add-wached">add to Watched</button>
        <button class="btn-add-queue" data-action="add-queue">add to queue</button>
      </div>
    </div>
  </div>`;
}

// знімає is.hidden з refs.backdrop та додає слухачів
function openModal() {
  refs.backdrop.classList.remove('is-hidden');
  document.addEventListener('keydown', onCloseEsc);
  refs.backdrop.addEventListener('click', onBtnCloseModalClick);
  refs.backdrop.addEventListener('click', onBtnAddToQueueClick);
  refs.backdrop.addEventListener('click', onBtnAddWachedClick);
}
//додає is.hidden на refs.backdrop та знімає слухачів
function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  document.removeEventListener('keydown', onCloseEsc);
  refs.backdrop.removeEventListener('click', onBtnCloseModalClick);
  refs.backdrop.removeEventListener('click', onBtnAddToQueueClick);
  refs.backdrop.removeEventListener('click', onBtnAddWachedClick);
}

// закриття по Esc
function onCloseEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
// закриття по кнопкі або по кліку на бєкдроп
function onBtnCloseModalClick(e) {
  if (
    e.target.dataset.action === 'close-modal' ||
    e.currentTarget === e.target
  ) {
    closeModal();
  }
}
function onBtnAddToQueueClick() {
  console.log('onBtnAddToQueueClick - click');
}
function onBtnAddWachedClick() {
  console.log('onBtnAddWachedClick - click');
}
export default renderModalCard;
