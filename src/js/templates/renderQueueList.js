import Api from '../api-service';
import { renderLibraryCards } from './renderLibraryCards';
import { localStorageApi } from '../localStorageApi';
import { addEmptyListPlaceholder } from '../addEmptyListPlaceholder';
import makePaginatuonBtnMarkup from './paginationMarkup';
import spiner from '../spiner';

const apiServiceLibr = new Api();

function renderQueueList() {
  const queueBtn = document.getElementById('js-queue').classList.add('button-list__btn--current');
    const watchedBtn = document.getElementById('js-watched').classList.remove('button-list__btn--current')
  const galleryElement = document.querySelector('.gallery');
  const queueList = localStorageApi.getQueueList();
  galleryElement.innerHTML = '';

  if (localStorageApi.isQueueListEmpty()) {
    addEmptyListPlaceholder(galleryElement);
    return;
  }
  renderFavouritList(queueList, galleryElement, apiServiceLibr);

  const paginationSectionRef = document.querySelector('.pagination');
  const currentPage = apiServiceLibr.pageNumber;
  const lastPage = Math.ceil(+queueList.length / 20)

  paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(currentPage, lastPage)
  
  const paginationBtn = document.querySelector('.pagination-list ');
  paginationBtn.addEventListener('click', onPaginationBtnClick);

  function onPaginationBtnClick(e) {
    e.preventDefault();

    if (+e.target.textContent === currentPage) {
      console.log('Поточна сторінка');
      return;
    }

    if (e.target.id === 'next') {
      apiServiceLibr.incrementPage();

      renderFavouritList(queueList, galleryElement, apiServiceLibr);
      paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(apiServiceLibr.pageNumber, lastPage)
      return;
    }

    if (e.target.id === 'previous') {
      apiServiceLibr.decrementPage();

      renderFavouritList(queueList, galleryElement, apiServiceLibr);
      paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(apiServiceLibr.pageNumber, lastPage)
      return;
    }

    if (e.target.textContent !== '...' && e.target.nodeName === 'BUTTON') {
      // spiner.on();
      apiServiceLibr.pageNumber = +e.target.textContent;

      renderFavouritList(queueList, galleryElement, apiServiceLibr);
      paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(apiServiceLibr.pageNumber, lastPage)
    }
  }
}
function renderFavouritList(queueList, galleryElement, apiServiceEl) {
  const queuePage = queueList.slice(0+20*(apiServiceEl.pageNumber -1), 20 + 20*(apiServiceEl.pageNumber -1))
  
  const movieCards = queuePage.map(id =>
    apiServiceEl.fetchMovieDetails(id).catch(error => console.log(error))
  );

  Promise.all(movieCards)
    .then(cards => {
      const libraryMarkup = renderLibraryCards(cards);
      galleryElement.innerHTML = libraryMarkup;
    })
    .catch(error => console.log(error));
  
}

export { renderQueueList , renderFavouritList};
