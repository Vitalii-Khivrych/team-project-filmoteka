import createInitialHeaderMarkup from './createInitialHeaderMarkup';
import { onLibraryClick } from './relinkingApi';
// после инициализации блок header остается и рендеририться будет только разметка внутри
// оставляю фиксированный блок для того, чтобы при переходе на другие страницы, не прыгала разметка

// импортировать onSearchMovie
export default function initHeader() {
  const headerMarkup = createInitialHeaderMarkup();
  document.body.insertAdjacentHTML('afterbegin', headerMarkup);

  const libraryLink = document.getElementById('libraryLink');
  libraryLink.addEventListener('click', onLibraryClick);

  const searchInput = document.getElementById('search-movie');
  searchInput.addEventListener('submit', onSearchMovie);
}
