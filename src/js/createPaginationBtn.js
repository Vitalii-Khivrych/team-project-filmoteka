import makePaginatuonBtnMarkup from './templates/paginationMarkup';
import { initRenderTrendingMovie, appService } from './createTrandingMovieCars';
import { searchMovie } from './handlers/onSearchMovie';

let paginatioRef = null;
let currentPage = null;

function createPaginationBtn(data) {
  paginatioRef = document.querySelector('.pagination');
  currentPage = appService.pageNumber;
  const lastPage = data.total_pages;

  paginatioRef.innerHTML = makePaginatuonBtnMarkup(currentPage, lastPage);

  // ------------- Логіка роботи кнопок пагінаціі -----------
  paginatioRef.addEventListener('click', onPaginationBtnClick);
}

function onPaginationBtnClick(e) {
  e.preventDefault();

  if (+e.target.textContent === currentPage) {
    console.log('Поточна сторінка');
    return;
  }

  removePaginationBtnClick();

  if (e.target.id === 'next') {
    appService.incrementPage();

    if (appService.query !== '') {
      searchMovie();
      return;
    }

    initRenderTrendingMovie();
    return;
  }

  if (e.target.id === 'previous') {
    appService.decrementPage();

    if (appService.query !== '') {
      searchMovie();
      return;
    }

    initRenderTrendingMovie();
    return;
  }

  if (e.target.nodeName === 'BUTTON') {
    appService.pageNumber = +e.target.textContent;

    if (appService.query !== '') {
      searchMovie();
      return;
    }

    initRenderTrendingMovie();
  }
}

function removePaginationBtnClick() {
  paginatioRef.removeEventListener('click', onPaginationBtnClick);
}

export { createPaginationBtn, removePaginationBtnClick };
