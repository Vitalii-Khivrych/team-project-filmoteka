export default function createHeaderHomeMarkup() {
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