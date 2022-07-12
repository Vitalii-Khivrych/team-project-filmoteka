import makeBasicFilterMarkup from './templates/render-filter';
import { onFilterUpdate } from './handlers/onSearchFilters';

export default function createSearchFilter() {
  const galleryTitleRef = document.querySelector('.filter__wrap');

  galleryTitleRef.innerHTML = makeBasicFilterMarkup();

  document.querySelector('.filter').addEventListener('change', onFilterUpdate);
}
