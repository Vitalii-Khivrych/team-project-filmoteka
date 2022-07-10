import Api from '../api-service';
import { localStorageApi } from '../localStorageApi';
import { addEmptyListPlaceholder } from '../addEmptyListPlaceholder';
import { renderFavouritList } from "./renderQueueList";
import makePaginatuonBtnMarkup from './paginationMarkup';

const apiServiceLibrWatched = new Api();


function renderWatchedList() {
    const queueBtn = document.getElementById('js-queue').classList.remove('button-list__btn--current');
    const watchedBtn = document.getElementById('js-watched').classList.add('button-list__btn--current')
  const galleryElement = document.querySelector('.gallery');
  const watchedList = localStorageApi.getWatchedList();

  galleryElement.innerHTML = '';

  if (localStorageApi.isWatchedListEmpty()) {
    addEmptyListPlaceholder(galleryElement);
    return;
  }

  renderFavouritList(watchedList, galleryElement, apiServiceLibrWatched);

  const paginationSectionRef = document.querySelector('.pagination');
  const currentPage = apiServiceLibrWatched.pageNumber;
  const lastPage = Math.ceil(+watchedList.length / 20)

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
      apiServiceLibrWatched.incrementPage();

      renderFavouritList(watchedList, galleryElement, apiServiceLibrWatched);
      return;
    }

    if (e.target.id === 'previous') {
      apiServiceLibrWatched.decrementPage();

      renderFavouritList(watchedList, galleryElement, apiServiceLibrWatched);
      return;
    }

    if (e.target.textContent !== '...' && e.target.nodeName === 'BUTTON') {
      // spiner.on();
      apiServiceLibrWatched.pageNumber = +e.target.textContent;

       renderFavouritList(watchedList, galleryElement, apiServiceLibrWatched);
    }
  }
}

export { renderWatchedList };

