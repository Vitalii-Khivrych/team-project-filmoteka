const galleryEl = document.querySelector('.gallery');
const galleryButtonListEl = document.querySelector('.gallery-button-list');
const numberMassiveGallery = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
import imgLink from '../../images/poster.jpg';
const galleryRender = () => {
const markup = numberMassiveGallery.map((element) => `<li class="card">
<a href="" class="card__link">
  <img
    class="card__image"
    src="${imgLink}"
    alt=""
    loading="lazy"
  />
  <div class="card__info">
    <p class="card__title">A FISTFUL OF LEAD</p>
    <div class="card__movie-info">
      <p class="card__genre">Western</p>
      <span class="vertical">&nbsp|&nbsp</span>
      <p class="card__release">2019</p>
      <p class="card__rating">7.3</p>
    </div>
  </div>
</a>
</li>`).join("");
galleryEl.insertAdjacentHTML("beforeend", markup);
}
galleryRender();
export default galleryRender;