import spiner from './spiner';
import makePaginatuonBtnMarkup from './templates/paginationMarkup';
import { renderQueueList } from './templates/renderQueueList';
import { renderWatchedList } from './templates/renderWatchedList';

function renderQueuePagination(data, apiService) {
  const paginationSectionRef = document.querySelector('.pagination');
  const currentPage = apiService.pageNumber;
  let lastPage = 1;

  if (data) {
    lastPage = data.length > 20 ? Math.ceil(data.length / 20) : 1;
  }

  paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(
    currentPage,
    lastPage
  );

  // ------------- Логіка роботи кнопок пагінаціі -----------
  const paginationBtn = document.querySelector('.pagination-list ');
  paginationBtn.addEventListener('click', onBtnClick);

  function onBtnClick(e) {
    e.preventDefault();

    if (+e.target.textContent === currentPage) {
      return;
    }

    if (e.target.id === 'next') {
      apiService.incrementPage();

      renderQueueList();
      return;
    }

    if (e.target.id === 'previous') {
      apiService.decrementPage();

      renderQueueList();
      return;
    }

    if (e.target.textContent !== '...' && e.target.nodeName === 'BUTTON') {
      spiner.on();
      apiService.pageNumber = +e.target.textContent;

      renderQueueList();
    }
  }
}

function renderWatchedPagination(data, apiService) {
  const paginationSectionRef = document.querySelector('.pagination');
  const currentPage = apiService.pageNumber;
  let lastPage = 1;

  if (data) {
    lastPage = data.length > 20 ? Math.ceil(data.length / 20) : 1;
  }

  paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(
    currentPage,
    lastPage
  );

  // ------------- Логіка роботи кнопок пагінаціі -----------
  const paginationBtn = document.querySelector('.pagination-list ');
  paginationBtn.addEventListener('click', onBtnClick);

  function onBtnClick(e) {
    e.preventDefault();

    if (+e.target.textContent === currentPage) {
      return;
    }

    if (e.target.id === 'next') {
      apiService.incrementPage();

      renderWatchedList();
      return;
    }

    if (e.target.id === 'previous') {
      apiService.decrementPage();

      renderWatchedList();
      return;
    }

    if (e.target.textContent !== '...' && e.target.nodeName === 'BUTTON') {
      spiner.on();
      apiService.pageNumber = +e.target.textContent;

      renderWatchedList();
    }
  }
}

export { renderQueuePagination, renderWatchedPagination };
