import createHeaderHomeMarkup from './createHeaderHomeMarkup';
import createHeaderLibraryMarkup from './createHeaderLibraryMarkup';
import Api from '../../api-service';

// обработчики ниже нужно дополнить разметкой галереи и футера для рендера целой страницы
const appService = new Api();

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

const onLibraryClick = event => {
  event.preventDefault();

  renderLibraryPage();
};

const onHomeClick = event => {
  event.preventDefault();

  renderHomePage();
};

const renderHomePage = () => {
  const headerElement = document.querySelector('.header');

  headerElement.innerHTML = createHeaderHomeMarkup();
  headerElement.classList.remove('additional-bg');

  const libraryLink = document.getElementById('libraryLink');
  libraryLink.addEventListener('click', onLibraryClick);

  const searchInput = document.getElementById('search-movie');
  searchInput.addEventListener('submit', onSearchMovie);
};

const renderLibraryPage = () => {
  const headerElement = document.querySelector('.header');

  headerElement.innerHTML = createHeaderLibraryMarkup();
  headerElement.classList.add('additional-bg');

  const homeLink = document.getElementById('homeLink');
  const logoLink = document.getElementById('logoLink');
  homeLink.addEventListener('click', onHomeClick);
  logoLink.addEventListener('click', onHomeClick);
};

export { onLibraryClick, onHomeClick, onSearchMovie, appService };
