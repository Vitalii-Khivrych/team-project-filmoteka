import './sass/index.scss';

// import refs from './js/refs'; // do not work

import Api from './js/api-service';

// import renderModalCard from './js/templates/render-card-modal';

import initHeader from './js/templates/header/createInitialHeaderMarkup';
import makeBasicGalleryMarkup from './js/templates/render-basic-gallery';
import renderFooter from './js/templates/render-footer';

import renderPopularCards from './js/templates/render-popular-card';
import makePaginatuonBtnMarkup from './js/templates/pagination';

const appService = new Api();

// -------------Створює початкову розмітку сайту-----------

const rootRef = document.querySelector('#root');

document.addEventListener('DOMContentLoaded', createSiteMarkup(), {
  once: true,
});

function createSiteMarkup() {
  rootRef.insertAdjacentHTML('beforeend', initHeader());
  rootRef.insertAdjacentHTML('beforeend', makeBasicGalleryMarkup());
  rootRef.insertAdjacentHTML('beforeend', renderFooter());

  initRenderTrendingMovie();
}
// ------------------------------------------------------------

// -------------Для рендеру карток головної сторінки-----------

const galleryRef = document.querySelector('.gallery');

function initRenderTrendingMovie() {
  appService.fetchTrending().then(handleResponse).catch(console.log);
}

function handleResponse(response) {
  console.log(response);
  const cards = response.results;

  Promise.all([appService.fetchGenres('movie'), appService.fetchGenres('tv')])
    .then(allGenres => {
      const genres = allGenres.flatMap(r => r.genres);
      const genreMap = new Map(
        genres.map(object => {
          return [object.id, object.name];
        })
      );

      // galleryRef.insertAdjacentHTML(
      //   'beforeend',
      //   renderPopularCards(cards, genreMap)
      // );

      galleryRef.innerHTML = renderPopularCards(cards, genreMap);

      renderPaginationBtn(response);
    })
    .catch(error => {
      console.log(error);
    });
}

// ------------------------------------------------

// ------------- Для рендеру кнопок пагінаціі -----------

function renderPaginationBtn(data) {
  const paginatioRef = document.querySelector('.pagination');
  const currentPage = appService.pageNumber;
  const lastPage = data.total_pages;

  paginatioRef.innerHTML = makePaginatuonBtnMarkup(currentPage, lastPage);

  // ------------- Логіка роботи кнопок пагінаціі -----------
  paginatioRef.addEventListener('click', onPaginationBtnClick);

  function onPaginationBtnClick(e) {
    e.preventDefault();
    console.log(e);
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
  // ------------------------------------------------
}
// ------------------------------------------------

// -------------Поіск фільму по назві-----------
document
  .querySelector('#search-movie')
  .addEventListener('submit', onSearchMovie);

function onSearchMovie(e) {
  e.preventDefault();

  appService.query = e.currentTarget.elements.searchQuery.value.trim();

  const isEmptySearch = appService.searchQuery === '';

  if (isEmptySearch) {
    console.log('Пустий пошук');
    //Зробити повідомлення про пустий пошук
    return;
  }

  appService.resetPage();
  appService.fetchSearchMovie().then(handleResponse).catch(console.log);
}
// ------------------------------------------------

// тест відкриття модали з ID фшльму 12 (розкоментуй renderModalCard)
// renderModalCard(12);
// експорт для доступу в функції renderModalCard
// export { appService };
