function scrollUp() {
  const root = document.getElementById('root');

  root.scrollIntoView({
    block: 'start',
    inline: 'nearest',
  });
}

export { scrollUp };
