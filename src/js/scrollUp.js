function scrollUp() {
  const gallery = document.querySelector('.gallery');

  gallery.scrollIntoView({
    block: 'start',
    inline: 'nearest',
  });
}

export { scrollUp };
