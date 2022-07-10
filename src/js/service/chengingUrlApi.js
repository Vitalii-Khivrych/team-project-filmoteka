function changeUrl() {
  const href = location.href;
  const url = new URL(href);

  // const changePath = newPath => {
  //   const path = url.pathname.split('/').splice(1, 1);
  //   path.push(newPath);
  //   return path.join('/');
  // };

  return {
    goToStartPage: function () {
      // url.pathname = changePath('home');
      url.searchParams.delete('page');
      url.searchParams.delete('query');
      history.pushState({}, '', `${url}`);
    },

    goToHome: function () {
      // url.pathname = changePath('home');
      url.searchParams.delete('query');
      history.pushState({}, '', `${url}`);
    },

    goToLibrary: function (newPath) {
      // url.pathname = changePath(newPath);
      url.searchParams.delete('page');
      url.searchParams.delete('query');
      history.pushState({}, '', `${url}`);
    },

    goToSearch: function (searchQuery) {
      // url.pathname = changePath('home/search');
      url.searchParams.delete('page');
      url.searchParams.set('query', searchQuery);
      history.pushState({}, '', `${url}`);
    },

    isSearch: function () {
      return url.searchParams.has('query');
    },

    changePage: function (value) {
      url.searchParams.set('page', +value);
      history.pushState({}, '', `${url}`);
    },

    setQuery: function (searchQuery) {
      url.searchParams.set('query', searchQuery);
      history.pushState({}, '', `${url}`);
    },

    getQuery: function () {
      // console.log(url.searchParams.get('query'));
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
