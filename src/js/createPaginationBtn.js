// import Api from '../js/api-service';

import makePaginatuonBtnMarkup from './templates/paginationMarkup';
import { initRenderTrendingMovie, appService } from './createTrandingMovieCars';

// const appService = new Api();

export default function createPaginationBtn(data) {
  const paginatioRef = document.querySelector('.pagination');
  const currentPage = appService.pageNumber;
  const lastPage = data.total_pages;

  paginatioRef.innerHTML = makePaginatuonBtnMarkup(currentPage, lastPage);

  // ------------- Логіка роботи кнопок пагінаціі -----------
  paginatioRef.addEventListener('click', onPaginationBtnClick);

  function onPaginationBtnClick(e) {
    e.preventDefault();
    // console.log(e);

    if (+e.target.textContent === currentPage) {
      console.log('Поточна сторінка');
      return;
    }

    if (e.target.id === 'next') {
      appService.incrementPage();

      paginatioRef.removeEventListener('click', onPaginationBtnClick);

      initRenderTrendingMovie();
      return;
    }

    if (e.target.id === 'previous') {
      appService.decrementPage();

      paginatioRef.removeEventListener('click', onPaginationBtnClick);

      initRenderTrendingMovie();
      return;
    }

    if (e.target.nodeName === 'BUTTON') {
      appService.pageNumber = +e.target.textContent;
      paginatioRef.removeEventListener('click', onPaginationBtnClick);
      initRenderTrendingMovie();
    }
  }
}
