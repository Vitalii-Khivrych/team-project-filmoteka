import './sass/index.scss';
import createAuthMarkup from './js/templates/header/createAuthMarkup';
import makeBasicGalleryMarkup from './js/templates/render-basic-gallery';
import renderFooter from './js/templates/render-footer';
import { initHeader } from './js/templates/header/initHeader';
import { initRenderTrendingMovie } from './js/createTrendingMovieCards';
import { searchMovie } from './js/handlers/onSearchMovie';
import renderBackdrop from './js/templates/render-backdrop';
import { onCardClick } from './js/handlers/onGalleryCardHandlers';
import { renderBackdropTeamModal } from './js/templates/render-backdrop-teamModal';
import onGoItClick from './js/handlers/onGoItStudentsClick';
import spiner from './js/spiner';
import { changeUrl } from './js/service/chengingUrlApi';
import { scrollUp } from './js/scrollUp.js';

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
  document.querySelector('.gallery').addEventListener('click', onCardClick);

  changeUrl().isSearch() ? searchMovie() : initRenderTrendingMovie();

  if (!changeUrl().isSearch()) {
    changeUrl().goToStartPage();
  }

  const scrollToTopBtn = document.querySelector('#scrollToTopBtn');
  scrollToTopBtn.addEventListener('click', scrollUp);
}

// window.onpopstate = function (event) {
//   alert(
//     `location: ${document.location}, state: ${JSON.stringify(event.state)}`
//   );
// };
