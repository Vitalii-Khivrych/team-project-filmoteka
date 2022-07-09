export default function trailerMarkup(videoKey) {
  return `<div
  class ="modal__video">
    <iframe class="video-frame" src="https://www.youtube.com/embed/${videoKey}"
    frameborder = '0';
    title = 'YouTube video player';
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe></div>`;
}
