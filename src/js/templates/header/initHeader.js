import createInitialHeaderMarkup from './createInitialHeaderMarkup';
import { onLibraryLinkClick } from '../../handlers/onLibraryLinkClick';
import { onSearchMovie } from '../../handlers/onSearchMovie';

// после инициализации блок header остается и рендеририться будет только разметка внутри
// оставляю фиксированный блок для того, чтобы при переходе на другие страницы, не прыгала разметка
const rootRef = document.querySelector('#root');

const initHeader = () => {
  const headerMarkup = createInitialHeaderMarkup();
  rootRef.insertAdjacentHTML('afterbegin', headerMarkup);
  // document.body.insertAdjacentHTML('afterbegin', headerMarkup);

  const libraryLink = document.getElementById('libraryLink');
  libraryLink.addEventListener('click', onLibraryLinkClick);

  const searchInput = document.getElementById('search-movie');
  searchInput.addEventListener('submit', onSearchMovie);
};

export { initHeader };
