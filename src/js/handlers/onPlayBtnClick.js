import * as basicLightbox from 'basiclightbox';
export { onBtnPlayClick };
import searchTrailerById from '../searchTailerById';
// import traillerMarkup from '../templates/traillerMarkup';
async function onBtnPlayClick(e) {
  const btnPlayEl = document.querySelector('.modal__btn-play');
  const modalCardEl = document.querySelector('.modal__card');
  console.log(modalCardEl);
  if (e.target.classList.contains('modal__btn-play')) {
    const filmId = e.currentTarget.getAttribute('id');
    const key = await searchTrailerById(filmId);
    // const markup = await traillerMarkup(key);
    basicLightbox
      .create(
        `<iframe src="https://www.youtube.com/embed/${key}" width="560" height="315" frameborder="0"></iframe`
      )
      .show();
  }
}
