function changeUrl() {
  const href = location.href;
  const url = new URL(href);

  return {
    goToStartPage: function () {
      url.pathname = 'home/';
      url.searchParams.delete('page');
      history.pushState({}, '', `${url}`);
    },

    goToHome: function () {
      url.pathname = 'home/';
      history.pushState({}, '', `${url}`);
    },

    goToLibrary: function () {
      url.pathname = 'library/';
      url.searchParams.delete('page');
      history.pushState({}, '', `${url}`);
    },

    goToSearch: function () {
      url.pathname = 'hone/search/';
      url.searchParams.delete('page');
      history.pushState({}, '', `${url}`);
    },

    changePage: function (value, searchQuery) {
      if (+value > 1) {
        url.searchParams.set('page', +value);
      }

      // console.log(searchQuery);

      // url.searchParams.set('query', searchQuery);
      // if (url.searchParams.get('search')) {
      // }

      history.pushState({}, '', `${url}`);
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
