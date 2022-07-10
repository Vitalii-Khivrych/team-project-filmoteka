export { openModal };
import { onBtnPlayClick } from './onPlayBtnClick';
import {
  onBtnAddToQueueClick,
  onBtnAddWachedClick,
} from './localStorageOptions';
// // знімає is.hidden з refs.backdrop та додає слухачів

function openModal() {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.classList.remove('is-hidden');

  const bodyEl = document.querySelector('body').classList.toggle('noScroll');

  document.addEventListener('keydown', onCloseEsc);
  backdropEl.addEventListener('click', onBtnCloseModalClick);
  backdropEl.addEventListener('click', onBtnAddToQueueClick);
  backdropEl.addEventListener('click', onBtnAddWachedClick);
  backdropEl.addEventListener('click', onBtnPlayClick);
}
// //додає is.hidden на refs.backdrop та знімає слухачів
function closeModal() {
  const backdropEl = document.querySelector('.backdrop');
  const modalEl = document.querySelector('.modal');
  modalEl.remove();

  const bodyEl = document.querySelector('body').classList.toggle('noScroll');

  backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', onCloseEsc);
  backdropEl.removeEventListener('click', onBtnCloseModalClick);
  backdropEl.removeEventListener('click', onBtnAddToQueueClick);
  backdropEl.removeEventListener('click', onBtnAddWachedClick);
  backdropEl.removeEventListener('click', onBtnPlayClick);
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
