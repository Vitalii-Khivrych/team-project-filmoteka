function handleScroll() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  const scrollToTopBtn = document.querySelector('#scrollToTopBtn');
  scrollToTopBtn.style.display = 'none';

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.display = 'none';
  }
}

export { handleScroll };
