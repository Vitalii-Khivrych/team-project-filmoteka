import './sass/index.scss';


import Api from './js/api-service';
import refs from './js/refs';
import renderModalCard from './js/templates/render-card-modal';
const appService = new Api();

// -------------Для рендеру карток головної сторінки-----------
// appService.fetchTrending().then(console.log)   // Повертає об'єкт, в якому є масив з фільмами, номер поточної сторінки, кількість сторінок і скільски всього знайдено відео
// ------------------------------------------------

// -------------Поіск фільму по назві-----------
refs.searchInput.addEventListener('submit', onSearchMovie);

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
  appService.fetchSearchMovie().then(console.log);
}
// ------------------------------------------------
// тест відкриття модали з ID фшльму 12 (розкоментуй renderModalCard)
// renderModalCard(12);
// експорт для доступу в функції renderModalCard
export { appService };

