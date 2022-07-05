import createInitialHeaderMarkup from './createInitialHeaderMarkup';
import { onLibraryClick, onSearchMovie } from './relinkingApi';

// после инициализации блок header остается и рендеририться будет только разметка внутри
// оставляю фиксированный блок для того, чтобы при переходе на другие страницы, не прыгала разметка

const initHeader = () => {
  const headerMarkup = createInitialHeaderMarkup();
  document.body.insertAdjacentHTML('afterbegin', headerMarkup);

  const libraryLink = document.getElementById('libraryLink');
  libraryLink.addEventListener('click', onLibraryClick);

  const searchInput = document.getElementById('search-movie');
  searchInput.addEventListener('submit', onSearchMovie);
};

export { initHeader };
