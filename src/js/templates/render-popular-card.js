import refs from '../refs';
import Api from '../api-service';
import renderModalCard from './render-card-modal';
import ApiService from '../api-service';
//import { appService } from '../../index';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const appService = new Api();

appService.fetchTrending().then(handleResponse);

function handleResponse(response) {
  const cards = response.results;
  console.log(response);

  Promise.all([
    appService.fetchGenres('movie'),
    appService.fetchGenres('tv'),
  ]).then(allGenres => {
    const genres = allGenres.map(r => r.genres);
    const mergedGenres = [].concat.apply([], genres);
    const genreMap = new Map(
      mergedGenres.map(object => {
        return [object.id, object.name];
      })
    );
    renderPopularCards(cards, genreMap);
  });
}

function renderPopularCards(cards, genres) {
  console.log(cards);
  console.log(genres);
  const markup = cards
    .map(
      ({
        poster_path,
        original_title,
        original_name,
        genre_ids,
        release_date,
        first_air_date,
        vote_average,
      }) => {
        const date = release_date ? release_date : first_air_date;
        const name = original_title ? original_title : original_name;
        const dateArr = date.split('-');
        const year = dateArr[0];
        console.log(year);
        console.log(genre_ids);
        const genreArr = genre_ids.slice(0, 2).map(id => genres.get(id));

        if (genre_ids.length > 2) {
          genreArr.push('others');
        }

        const genreStr = genreArr.join(', ');
        console.log(genreStr);
        const vote = vote_average.toFixed(1);
        return `<li class="gallery__item card">
        <a href="" class="card__link">
          <img
            class="card__image"
            src="${IMG_URL}${poster_path}"
            alt="poster"
            loading="lazy"
          />
          <div class="card__info">
            <p class="card__title">${name}</p>
            <div class="card__movie-info">
              <p class="card__genre">${genreStr}</p>
              <span class="vertical">&nbsp|&nbsp</span>
              <p class="card__release">${year}</p>
              <p class="card__rating">${vote}</p>
            </div>
          </div>
        </a>
      </li>`;
      }
    )
    .join('');

  console.log(markup);
}
