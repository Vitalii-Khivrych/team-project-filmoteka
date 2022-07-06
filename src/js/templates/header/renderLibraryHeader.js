import createHeaderLibraryMarkup from './createHeaderLibraryMarkup';
import { onHomeLinkClick } from '../../handlers/onHomeLinkClick';

const renderLibraryHeader = () => {
  const headerElement = document.querySelector('.header');

  headerElement.innerHTML = createHeaderLibraryMarkup();
  headerElement.classList.add('additional-bg');

  const homeLink = document.getElementById('homeLink');
  const logoLink = document.getElementById('logoLink');
  homeLink.addEventListener('click', onHomeLinkClick);
  logoLink.addEventListener('click', onHomeLinkClick);
};

export { renderLibraryHeader };
