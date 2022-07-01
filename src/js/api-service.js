const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
const KEY = '81f57ce8a5863d84fdab7c29ba0c37c2';

export default fetch(`${BASE_URL}?api_key=${KEY}&page=1`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
