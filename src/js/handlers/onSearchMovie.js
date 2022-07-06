import Api from '../api-service';
const appService = new Api();
import handleResponse from './handlerResponse';

document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.querySelector('#search-movie');
  console.log(searchForm);
  searchForm.addEventListener('submit', onSearchMovie);
});

const onSearchMovie = e => {
  e.preventDefault();
  const queryString = e.currentTarget.elements.searchQuery.value.trim();

  if (queryString === '') {
    console.log('Пустий пошук');
    //Зробити повідомлення про пустий пошук
    return;
  }
  appService.query = queryString;

  appService.resetPage();
  appService.fetchSearchMovie().then(handleResponse).catch(console.log);
};

export { onSearchMovie, appService };
