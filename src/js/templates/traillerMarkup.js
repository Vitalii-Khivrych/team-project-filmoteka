export default function trailerMarkup(videoKey) {
  return ` 
    <iframe class="video-frame" src="https://www.youtube.com/embed/${videoKey}"
    frameborder = '0';
    title = 'YouTube video player';
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`;
}
//  const videoKey = videos.results[0].key;
{
  /* <button class="modal__btn-close-trailer visually-hidden">
  <svg class="modal__close-icon" width="14" height="14">
    <use href="${icon}#icon-close"></use>
  </svg>
</button>;  */
}
