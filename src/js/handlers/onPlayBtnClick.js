export { onBtnPlayClick };
import ApiService from '../service/api-service';
const api = new ApiService();

async function onBtnPlayClick(e) {
  const backdropEl = document.querySelector('.backdrop');
  const modalEl = document.querySelector('.modal');
  const modalCardEl = document.querySelector('.modal__card');
  const modalVideoEl = document.querySelector('.modal__video');
  if (e.target.classList.contains('modal__btn-play')) {
    modalCardEl.classList.add('is-hidden');
    modalVideoEl.classList.remove('is-hidden');
    modalEl.style.backgroundColor = 'transparent';
    backdropEl.addEventListener('click', onBtnCloseTrailer);
  }
}
function onBtnCloseTrailer(e) {
  const backdropEl = document.querySelector('.backdrop');
  const modalVideoEl = document.querySelector('.modal__video');
  const modalCardEl = document.querySelector('.modal__card');
  const modalEl = document.querySelector('.modal');
  if (e.target.classList.contains('modal__btn-close-trailer')) {
    modalVideoEl.classList.add('is-hidden');
    modalCardEl.classList.remove('is-hidden');
    modalEl.style.backgroundColor = 'var(--main-bg)';
    backdropEl.removeEventListener('click', onBtnCloseTrailer);
  }
}
