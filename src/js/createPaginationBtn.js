import makePaginatuonBtnMarkup from './templates/paginationMarkup';
import { initRenderTrendingMovie } from './createTrendingMovieCards';
import { searchMovie } from './handlers/onSearchMovie';
import spiner from './spiner';
import { changeUrl } from './service/chengingUrlApi';
import { scrollUp } from './scrollUp';

function createPaginationBtn(data, apiService) {
  const paginationSectionRef = document.querySelector('.pagination');
  const currentPage = apiService.pageNumber;
  const lastPage = data.total_pages;

  paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(
    currentPage,
    lastPage
  );

  // ------------- Логіка роботи кнопок пагінаціі -----------
  const paginationBtn = document.querySelector('.pagination-list ');
  paginationBtn.addEventListener('click', onPaginationBtnClick);

  function onPaginationBtnClick(e) {
    e.preventDefault();

    if (+e.target.textContent === currentPage) {
      return;
    }

    if (e.target.id === 'next') {
      spiner.on();
      apiService.incrementPage();

      changeUrl().changePage(apiService.pageNumber);

      if (changeUrl().isSearch()) {
        changeUrl().setQuery(apiService.query);

        searchMovie();
        scrollUp();
        return;
      }

      initRenderTrendingMovie();
      scrollUp();
      return;
    }

    if (e.target.id === 'previous') {
      spiner.on();
      apiService.decrementPage();

      changeUrl().changePage(apiService.pageNumber);

      if (changeUrl().isSearch()) {
        changeUrl().setQuery(apiService.query);

        searchMovie();
        scrollUp();
        return;
      }

      initRenderTrendingMovie();
      scrollUp();

      return;
    }

    if (e.target.textContent !== '...' && e.target.nodeName === 'BUTTON') {
      spiner.on();
      apiService.pageNumber = +e.target.textContent;
      changeUrl().changePage(apiService.pageNumber, apiService.query);

      if (changeUrl().isSearch()) {
        changeUrl().setQuery(apiService.query);

        searchMovie();
        scrollUp();
        return;
      }

      initRenderTrendingMovie();
      scrollUp();
    }
  }
}

// function removePaginationBtnClick() {
//   paginatioRef.removeEventListener('click', onPaginationBtnClick);
// }

export { createPaginationBtn };
