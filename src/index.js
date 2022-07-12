import './sass/index.scss';
import createAuthMarkup from './js/templates/header/createAuthMarkup';
import makeBasicGalleryMarkup from './js/templates/render-basic-gallery';
import renderFooter from './js/templates/render-footer';
import { initHeader } from './js/templates/header/initHeader';
import { initRenderTrendingMovie } from './js/initRenderTrendingMovie';

import renderBackdrop from './js/templates/render-backdrop';
import { onCardClick } from './js/handlers/onGalleryCardHandlers';
import { renderBackdropTeamModal } from './js/templates/render-backdrop-teamModal';
import onGoItClick from './js/handlers/onGoItStudentsClick';
import spiner from './js/spiner';
import { changeUrl } from './js/service/chengingUrlApi';
import { scrollUp } from './js/scrollUp.js';

import { rendereThemeIcon } from './js/service/changeTheme';
import { theme } from './js/service/changeTheme';
// import Spiner from './js/spiner';

// -------------Створює початкову розмітку сайту-----------
const rootRef = document.querySelector('#root');

document.addEventListener('DOMContentLoaded', createSiteMarkup(), {
  once: true,
});

function createSiteMarkup() {
  rootRef.insertAdjacentHTML('afterend', spiner.getMarkup());
  spiner.on();
  initHeader();
  rootRef.insertAdjacentHTML('afterbegin', createAuthMarkup());
  rootRef.insertAdjacentHTML('beforeend', makeBasicGalleryMarkup());
  rootRef.insertAdjacentHTML('beforeend', renderFooter());
  rootRef.insertAdjacentHTML('beforeend', renderBackdrop());
  rootRef.insertAdjacentHTML('beforeend', renderBackdropTeamModal());
  onGoItClick();
  rootRef.insertAdjacentHTML('afterbegin', rendereThemeIcon());
  theme();

  document.querySelector('.gallery').addEventListener('click', onCardClick);

  initRenderTrendingMovie();

  if (!changeUrl().isSearch()) {
    changeUrl().goToStartPage();
  }
  const scrollToTopBtn = document.querySelector('#scrollToTopBtn');
  scrollToTopBtn.addEventListener('click', scrollUp);
  // if (!changeUrl().isSearch()) {
  //   changeUrl().goToStartPage();
  // }
}
