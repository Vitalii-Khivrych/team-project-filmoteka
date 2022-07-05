import createInitialHeaderMarkup from './createInitialHeaderMarkup';
import { onLibraryClick } from './relinkingApi';
import { appService } from '../../..';

// после инициализации блок header остается и рендеририться будет только разметка внутри
// оставляю фиксированный блок для того, чтобы при переходе на другие страницы, не прыгала разметка

const onSearchMovie = e => {
  e.preventDefault();

  appService.query = e.currentTarget.elements.searchQuery.value.trim();

  const isEmptySearch = appService.searchQuery === '';

  if (isEmptySearch) {
    console.log('Пустий пошук');
    //Зробити повідомлення про пустий пошук
    return;
  }

  appService.resetPage();
  appService.fetchSearchMovie().then(console.log);
};

const initHeader = () => {
  const headerMarkup = createInitialHeaderMarkup();
  document.body.insertAdjacentHTML('afterbegin', headerMarkup);

  const libraryLink = document.getElementById('libraryLink');
  libraryLink.addEventListener('click', onLibraryClick);

  const searchInput = document.getElementById('search-movie');
  searchInput.addEventListener('submit', onSearchMovie);
};

export { initHeader, onSearchMovie };
