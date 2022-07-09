function changeUrl() {
  const href = location.href;
  const url = new URL(href);

  return {
    goToStartPage: function () {
      url.pathname = 'home/';
      // url.searchParams.delete('page');
      // url.searchParams.delete('query');
      history.pushState({}, '', `${url}`);
    },

    goToHome: function () {
      url.searchParams.delete('query');
      url.pathname = 'home/';
      history.pushState({}, '', `${url}`);
    },

    goToLibrary: function () {
      url.searchParams.delete('query');
      url.pathname = 'library/';
      url.searchParams.delete('page');
      history.pushState({}, '', `${url}`);
    },

    goToSearch: function (searchQuery) {
      url.pathname = 'hone/search/';
      url.searchParams.delete('page');
      url.searchParams.set('query', searchQuery);
      history.pushState({}, '', `${url}`);
    },

    changePage: function (value) {
      if (+value > 1) {
        url.searchParams.set('page', +value);
        history.pushState({}, '', `${url}`);
      }
    },

    setQuery: function (searchQuery) {
      url.searchParams.set('query', searchQuery);
      history.pushState({}, '', `${url}`);
    },

    getQuery: function () {
      console.log(url.searchParams.get('query'));
      return url.searchParams.get('query');
    },

    getCurrentPage() {
      return url.searchParams.get('page') ?? 1;
    },
  };
}

// &query=bvb
//
// class UrlApi {
//   constructor() {
//     this.path = '';
//     this.params = '';
//   }

//   changePath() {}
// }

export { changeUrl };
