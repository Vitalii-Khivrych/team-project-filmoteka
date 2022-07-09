import makePaginatuonBtnMarkup from './templates/paginationMarkup';
import { initRenderTrendingMovie } from './createTrendingMovieCards';
import { searchMovie } from './handlers/onSearchMovie';
import spiner from './spiner';
import { changeUrl } from './service/chengingUrlApi';

function createPaginationBtn(data, apiService) {
  const paginationSectionRef = document.querySelector('.section__pagination');
  const currentPage = apiService.pageNumber;
  const lastPage = data.total_pages;

  paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(
    currentPage,
    lastPage
  );

  // ------------- Логіка роботи кнопок пагінаціі -----------
  const paginationBtn = document.querySelector('.pagination');
  paginationBtn.addEventListener('click', onPaginationBtnClick);

  function onPaginationBtnClick(e) {
    e.preventDefault();

    if (+e.target.textContent === currentPage) {
      console.log('Поточна сторінка');
      return;
    }

    // removePaginationBtnClick();

    if (e.target.id === 'next') {
      apiService.incrementPage();

      changeUrl().changePage(apiService.pageNumber, apiService.query);
      if (apiService.query !== '') {
        searchMovie();
        return;
      }

      initRenderTrendingMovie();
      return;
    }

    if (e.target.id === 'previous') {
      apiService.decrementPage();

      changeUrl().changePage(apiService.pageNumber, apiService.query);

      if (apiService.query !== '') {
        searchMovie();
        return;
      }

      initRenderTrendingMovie();
      return;
    }

    if (e.target.nodeName === 'BUTTON') {
      spiner.on();
      apiService.pageNumber = +e.target.textContent;
      changeUrl().changePage(apiService.pageNumber, apiService.query);

      if (apiService.query !== '') {
        searchMovie();
        return;
      }

      initRenderTrendingMovie();
    }
  }
}

// function removePaginationBtnClick() {
//   paginatioRef.removeEventListener('click', onPaginationBtnClick);
// }

export { createPaginationBtn };
