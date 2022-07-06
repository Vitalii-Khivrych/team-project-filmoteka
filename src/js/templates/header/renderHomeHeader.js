import createHeaderHomeMarkup from './createHeaderHomeMarkup';
import { onLibraryLinkClick } from '../../handlers/onLibraryLinkClick';
import { onSearchMovie } from '../../handlers/onSearchMovie';

const renderHomeHeader = () => {
  const headerElement = document.querySelector('.header');

  headerElement.innerHTML = createHeaderHomeMarkup();
  headerElement.classList.remove('additional-bg');

  const libraryLink = document.getElementById('libraryLink');
  libraryLink.addEventListener('click', onLibraryLinkClick);

  const searchInput = document.getElementById('search-movie');
  searchInput.addEventListener('submit', onSearchMovie);
};

export { renderHomeHeader };
