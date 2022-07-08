const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '81f57ce8a5863d84fdab7c29ba0c37c2';
import trailerMarkup from './templates/traillerMarkup';

export default async function searchTrailerById(id) {
  const url = `${BASE_URL}/movie/${id}/videos?api_key=${KEY}&language=en-US`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const trailer = data.results.find(el => el.name.includes('Official'));
    return trailer.key;
  } catch (error) {
    alert('sorry!!!');
    console.log(error);
  }
}
