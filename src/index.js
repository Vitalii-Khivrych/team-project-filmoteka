import './sass/index.scss';
import createAuthMarkup from './js/templates/header/createAuthMarkup';
import makeBasicGalleryMarkup from './js/templates/render-basic-gallery';
import renderFooter from './js/templates/render-footer';
import { initHeader } from './js/templates/header/initHeader';
import { initRenderTrendingMovie } from './js/createTrendingMovieCards';
import renderBackdrop from './js/templates/render-backdrop';
import { onCardClick } from './js/handlers/onModalCardHandlers';
import { renderBackdropTeamModal } from './js/templates/render-backdrop-teamModal';
import onGoItClick from './js/handlers/onGoItStudentsClick';
import spiner from './js/spiner';
import changeUrl from './js/service/chengingUrlApi';

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

  initRenderTrendingMovie();
}

window.onpopstate = function (event) {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );
};
