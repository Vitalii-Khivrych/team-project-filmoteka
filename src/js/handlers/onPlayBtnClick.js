export { onBtnPlayClick };
import ApiService from '../api-service';
import traillerMarkup from '../templates/traillerMarkup';

const api = new ApiService();

async function onBtnPlayClick(e) {
  const backdropEl = document.querySelector('.backdrop');
  const modalEl = document.querySelector('.modal');
  const modalCardEl = document.querySelector('.modal__card');
  const closeModalBtn = document.querySelector('.modal__close');
  const closeTrailerlBtn = document.querySelector('.modal__btn-close-trailer');
  if (e.target.classList.contains('modal__btn-play')) {
    const filmId = e.currentTarget.getAttribute('id');
    try {
      const key = await api.searchTrailerById(filmId);
      const markup = await traillerMarkup(key);
      modalCardEl.classList.add('is-hidden');
      closeModalBtn.classList.add('is-hidden');
      closeTrailerlBtn.classList.remove('is-hidden');
      modalEl.insertAdjacentHTML('afterbegin', markup);
      backdropEl.addEventListener('click', onBtnCloseTrailer);
    } catch (error) {
      swal('sorry, there are no trailers for this movie(');
      console.log(error);
    }
  }
}
function onBtnCloseTrailer(e) {
  const backdropEl = document.querySelector('.backdrop');
  const modalVideoEl = document.querySelector('.modal__video');
  const modalCardEl = document.querySelector('.modal__card');
  const closeModalBtn = document.querySelector('.modal__close');
  const closeTrailerlBtn = document.querySelector('.modal__btn-close-trailer');
  if (e.target.classList.contains('modal__btn-close-trailer')) {
    modalVideoEl.remove();
    modalCardEl.classList.remove('is-hidden');
    closeModalBtn.classList.remove('is-hidden');
    closeTrailerlBtn.classList.add('is-hidden');
    backdropEl.removeEventListener('click', onBtnCloseTrailer);
  }
}
