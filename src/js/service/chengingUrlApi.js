export default function changeUrl(value) {
  if (value === 'libraryLink') {
    const href = location.href;
    const url = new URL(href);
    history.pushState({}, '', `${url}`);
    return;
  }

  const href = location.href;
  const url = new URL(href);
  url.pathname = 'home/';

  if (+value > 1) {
    url.searchParams.set('page', +number);
    history.pushState({}, '', `${url}`);
  }
  //

  // console.log(url.searchParams);
  console.log(url);
}

class UrlApi {
  constructor() {
    this.path = '';
    this.params = '';
  }

  changePath() {}
}
