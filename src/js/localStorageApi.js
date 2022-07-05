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
    const watchedList = this.getWatchedList();
    return !watchedList || watchedList.length === 0 ? true : false;
  },

  isQueueListEmpty() {
    const queueList = this.getQueueList();
    return !queueList || queueList.length === 0 ? true : false;
  },

  isMovieInWatchedList(movieId) {
    if (this.isWatchedListEmpty()) {
      return false;
    }

    const parsedMovies = this.getWatchedList();
    return parsedMovies.includes(movieId) ? true : false;
  },

  isMovieInQueueList(movieId) {
    if (this.isQueueListEmpty()) {
      return false;
    }

    const parsedMovies = this.getQueueList();
    return parsedMovies.includes(movieId) ? true : false;
  },

  addMovieToWatchedList(movieId) {
    if (this.isWatchedListEmpty()) {
      localStorage.setItem(WATCHED_LIST_STORAGE_KEY, JSON.stringify([movieId]));
    } else {
      const parsedMovies = this.getWatchedList();
      parsedMovies.push(movieId);
      this.setWatchedList(parsedMovies);
    }
  },

  addMovieToQueueList(movieId) {
    if (this.isQueueListEmpty()) {
      localStorage.setItem(QUEUE_LIST_STORAGE_KEY, JSON.stringify([movieId]));
    } else {
      const parsedMovies = this.getQueueList();
      console.log(parsedMovies);
      parsedMovies.push(movieId);
      this.setQueueList(parsedMovies);
    }
  },

  removeMovieFromWatchedList(movieId) {
    const parsedMovies = this.getWatchedList();
    const changedList = parsedMovies.filter(id => id !== movieId);
    this.setWatchedList(changedList);
  },

  removeMovieFromQueueList(movieId) {
    const parsedMovies = this.getQueueList();
    const changedList = parsedMovies.filter(id => id !== movieId);
    this.setQueueList(changedList);
  },

  // ================ Если мы захотим сделать кнопку очистить список полностью ==================

  clearWatchedList() {
    localStorage.removeItem(WATCHED_LIST_STORAGE_KEY);
  },

  clearQueueList() {
    localStorage.removeItem(QUEUE_LIST_STORAGE_KEY);
  },
};
