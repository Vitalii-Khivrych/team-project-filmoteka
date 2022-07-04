const WATCHED_LIST_STORAGE_KEY = 'watched-list';
const QUEUE_LIST_STORAGE_KEY = 'queue-list';

const localStorageApi = {
  getWatchedList() {
    return JSON.parse(localStorage.getItem(WATCHED_LIST_STORAGE_KEY));
  },

  setWatchedList(list) {
    localStorage.setItem(WATCHED_LIST_STORAGE_KEY, JSON.stringify(list));
  },

  getQueueList() {
    return JSON.parse(localStorage.getItem(QUEUE_LIST_STORAGE_KEY));
  },

  setQueueList(list) {
    localStorage.setItem(QUEUE_LIST_STORAGE_KEY, JSON.stringify(list));
  },

  isWatchedListEmpty() {
    const watchedList = getWatchedList();
    return !watchedList || watchedList.length === 0 ? true : false;
  },

  isQueueListEmpty() {
    const queueList = getQueueList();
    return !queueList || queueList.length === 0 ? true : false;
  },

  isMovieInWatchedList(movieId) {
    if (isWatchedListEmpty()) {
      return false;
    }

    const parsedMovies = getWatchedList();
    return parsedMovies.includes(movieId) ? true : false;
  },

  isMovieInQueueList(movieId) {
    if (isQueueListEmpty()) {
      return false;
    }

    const parsedMovies = getQueueList();
    return parsedMovies.includes(movieId) ? true : false;
  },

  addMovieToWatchedList(movieId) {
    if (isWatchedListEmpty()) {
      localStorage.setItem(WATCHED_LIST_STORAGE_KEY, JSON.stringify([movieId]));
    } else {
      const parsedMovies = getWatchedList();
      parsedMovies.push(movieId);
      setWatchedList(parsedMovies);
    }
  },

  addMovieToQueueList(movieId) {
    if (isQueueListEmpty()) {
      localStorage.setItem(QUEUE_LIST_STORAGE_KEY, JSON.stringify([movieId]));
    } else {
      const parsedMovies = getQueueList();
      console.log(parsedMovies);
      parsedMovies.push(movieId);
      setQueueList(parsedMovies);
    }
  },

  removeMovieFromWatchedList(movieId) {
    const parsedMovies = getWatchedList();
    const changedList = parsedMovies.filter(id => id !== movieId);
    setWatchedList(changedList);
  },

  removeMovieFromQueueList(movieId) {
    const parsedMovies = getQueueList();
    const changedList = parsedMovies.filter(id => id !== movieId);
    setQueueList(changedList);
  },

  // ================ Если мы захотим сделать кнопку очистить список полностью ==================

  clearWatchedList() {
    localStorage.removeItem(WATCHED_LIST_STORAGE_KEY);
  },

  clearQueueList() {
    localStorage.removeItem(QUEUE_LIST_STORAGE_KEY);
  },
};
