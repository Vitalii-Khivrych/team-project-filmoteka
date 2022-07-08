import renderModalCard from '../renderModalCard';
export { onCardClick };

async function onCardClick(e) {
  let backdropEl = document.querySelector('.backdrop');
  backdropEl = document.querySelector('.backdrop');
  if (e.target.classList.contains('gallery__item')) {
    const filmId = e.target.dataset.id;
    await renderModalCard(filmId);
  }
}
