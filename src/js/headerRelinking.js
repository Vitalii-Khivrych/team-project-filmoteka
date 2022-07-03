// ================== код ниже нужно добавить в индекс ================
const headerElement = document.querySelector('.header');
const libraryLink = document.getElementById('libraryLink');
libraryLink.addEventListener('click', onLibraryClick);
// ================== код для переноса в index ========================

function onLibraryClick(event) {
  event.preventDefault();

  renderLibraryPage();

  const homeLink = document.getElementById('homeLink');
  const logoLink = document.getElementById('logoLink');
  homeLink.addEventListener('click', onHomeClick);
  logoLink.addEventListener('click', onHomeClick);
}

function onHomeClick(event) {
  event.preventDefault();

  renderHomePage();

  const libraryLink = document.getElementById('libraryLink');
  libraryLink.addEventListener('click', onLibraryClick);
}

function renderHomePage() {
  headerElement.innerHTML = createHeaderHomeMarkup();
  headerElement.classList.remove('additional-bg');
}

function renderLibraryPage() {
  headerElement.innerHTML = createHeaderLibraryMarkup();
  headerElement.classList.add('additional-bg');
}

function createHeaderHomeMarkup() {
  return `<div class="nav-wrap">
    <a href="#" class="header__logo" id="logoLink">
      <svg
        class="header__icon"
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.82 2H4.18A2.18 2.18 0 0 0 2 4.18v15.64A2.18 2.18 0 0 0 4.18 22h15.64A2.18 2.18 0 0 0 22 19.82V4.18A2.18 2.18 0 0 0 19.82 2ZM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="header__text">Filmoteka</span>
    </a>
    <nav>
      <ul class="nav-list">
        <li class="nav-list__item">
          <a
            class="nav-list__link nav-list__link--current"
            href="#"
            id="homeLink"
            >Home</a
          >
        </li>
        <li class="nav-list__item">
          <a class="nav-list__link" href="#" id="libraryLink">My library</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="search-form-wrap">
    <form class="search-form" id="search-movie">
      <input
        class="search-form__input"
        name="searchQuery"
        type="text"
        placeholder="Movie search"
      />
      <button class="search-form__button-submit" type="submit">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
        >
          <path
            d="M5.5 9.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM10.5 10.5 8.325 8.325"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </form>
  </div>
  <p class="notification">
    Search result is not successful. Enter the correct movie name and try again.
  </p>
`;
}

function createHeaderLibraryMarkup() {
  return `<div class="nav-wrap additional-margin">
    <a href="#" class="header__logo" id="logoLink">
      <svg
        class="header__icon"
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.82 2H4.18A2.18 2.18 0 0 0 2 4.18v15.64A2.18 2.18 0 0 0 4.18 22h15.64A2.18 2.18 0 0 0 22 19.82V4.18A2.18 2.18 0 0 0 19.82 2ZM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="header__text">Filmoteka</span>
    </a>
    <nav>
      <ul class="nav-list">
        <li class="nav-list__item">
          <a class="nav-list__link" href="#" id="homeLink">Home</a>
        </li>
        <li class="nav-list__item">
          <a class="nav-list__link nav-list__link--current" href="#" id="libraryLink"
            >My library</a
          >
        </li>
      </ul>
    </nav>
  </div>
  <ul class="button-list">
    <li class="button-list__item">
      <button class="button-list__btn button-list__btn--current" type="button">
        Watched
      </button>
    </li>
    <li class="button-list__item">
      <button class="button-list__btn" type="button">Queue</button>
    </li>
  </ul>
`;
}
