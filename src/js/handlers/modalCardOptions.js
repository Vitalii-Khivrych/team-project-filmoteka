export { openModal };
import {
  onBtnAddToQueueClick,
  onBtnAddWachedClick,
} from './localStorageOptions';
// // знімає is.hidden з refs.backdrop та додає слухачів

function openModal() {
  let backdropEl = document.querySelector('.backdrop');
  backdropEl.classList.remove('is-hidden');
  document.addEventListener('keydown', onCloseEsc);
  backdropEl.addEventListener('click', onBtnCloseModalClick);
  backdropEl.addEventListener('click', onBtnAddToQueueClick);
  backdropEl.addEventListener('click', onBtnAddWachedClick);
}
// //додає is.hidden на refs.backdrop та знімає слухачів
function closeModal() {
  let backdropEl = document.querySelector('.backdrop');
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
