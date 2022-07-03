const WATCHED_LIST_STORAGE_KEY = 'watched-list';
const QUEUE_LIST_STORAGE_KEY = 'queue-list';

function getWatchedList() {
  return JSON.parse(localStorage.getItem(WATCHED_LIST_STORAGE_KEY));
}

function setWatchedList(list) {
  localStorage.setItem(WATCHED_LIST_STORAGE_KEY, JSON.stringify(list));
}

function getQueueList() {
  return JSON.parse(localStorage.getItem(QUEUE_LIST_STORAGE_KEY));
}

function setQueueList(list) {
  localStorage.setItem(QUEUE_LIST_STORAGE_KEY, JSON.stringify(list));
}

function isWatchedListEmpty() {
  const watchedList = getWatchedList();
  return !watchedList ? true : false;
}

function isQueueListEmpty() {
  const queueList = getQueueList();
  return !queueList ? true : false;
}

//================== Все что ниже идет на экспорт и используется при проверке
//================== перед отрисовкой и при нажатии на кнопку
function isMovieInWatchedList(movieId) {
  if (isWatchedListEmpty()) {
    return false;
  }

  const parsedMovies = getWatchedList();
  return parsedMovies.includes(movieId) ? true : false;
}

function isMovieInQueueList(movieId) {
  if (isQueueListEmpty()) {
    return false;
  }

  const parsedMovies = getQueueList();
  return parsedMovies.includes(movieId) ? true : false;
}

function addMovieToWatchedList(movieId) {
  if (isWatchedListEmpty()) {
    localStorage.setItem(WATCHED_LIST_STORAGE_KEY, JSON.stringify([movieId]));
  } else {
    const parsedMovies = getWatchedList();
    parsedMovies.push(movieId);
    setWatchedList(parsedMovies);
  }
}

function addMovieToQueueList(movieId) {
  if (isQueueListEmpty()) {
    localStorage.setItem(QUEUE_LIST_STORAGE_KEY, JSON.stringify([movieId]));
  } else {
    const parsedMovies = getQueueList();
    console.log(parsedMovies);
    parsedMovies.push(movieId);
    setQueueList(parsedMovies);
  }
}

function removeMovieFromWatchedList(movieId) {
  const parsedMovies = getWatchedList();
  const changedList = parsedMovies.filter(id => id !== movieId);
  setWatchedList(changedList);
}

function removeMovieFromQueueList(movieId) {
  const parsedMovies = getQueueList();
  const changedList = parsedMovies.filter(id => id !== movieId);
  setQueueList(changedList);
}

// ================ Если мы захотим сделать кнопку очистить список полностью ==================

function clearWatchedList() {
  localStorage.removeItem(WATCHED_LIST_STORAGE_KEY);
}

function clearQueueList() {
  localStorage.removeItem(QUEUE_LIST_STORAGE_KEY);
}
