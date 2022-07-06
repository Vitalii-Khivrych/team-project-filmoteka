import icon from '../../images/sprite.svg';

export default function makePaginatuonBtnMarkup(currentPage, lastPage) {
  const prevArow = `<button class="pagination__arrow pagination__arrow-left" id='previous'>
                      <svg class="pagination-arrow-icon" >
                        <use href="${icon}#icon-arrow-left"></use>
                      </svg>
                    </button>`;
  const nextArow = `<button class="pagination__arrow pagination__arrow-right" id='next'>
                      <svg class="pagination-arrow-icon">
                        <use href="${icon}#icon-arrow-right" ></use>
                      </svg>
                    </button>`;
  const firstPageBtn = `<li class="item">
                          <button class="pagination__btn">1</button>
                        </li>`;
  const moreBtn = `<li class="item">
                    <button class="pagination-btn-more">...</button>
                  </li>`;
  const prevPrevBtn = `<li class="item">
                        <button class="pagination__btn">${
                          currentPage - 2
                        }</button>
                      </li>`;
  const prevBtn = `<li class="item">
                    <button class="pagination__btn">${currentPage - 1}</button>
                  </li>`;
  const currentBtn = `<li class="item">
                        <button class="pagination__btn pagination__btn--choice">${currentPage}</button>
                      </li>`;
  const nextBtn = `<li class="item">
                    <button class="pagination__btn">${currentPage + 1}</button>
                  </li>`;
  const nextNextBtn = ` <li class="item">
                          <button class="pagination__btn">${
                            currentPage + 2
                          }</button>
                        </li>`;
  const lastBtn = `<li class="item">
                    <button class="pagination__btn">${lastPage}</button>
                  </li>`;

  if (currentPage === 1) {
    return ` <ul class="pagination-list">
              ${currentBtn} 
              ${nextBtn}
              ${nextNextBtn}
              ${moreBtn}
              ${lastBtn}
            </ul>
            ${nextArow}`;
  }

  if (currentPage === 2) {
    return `${prevArow}
            <ul class="pagination-list">
              ${prevBtn}
              ${currentBtn} 
              ${nextBtn}
              ${nextNextBtn}
              ${moreBtn}
              ${lastBtn}
            </ul>
            ${nextArow}`;
  }

  if (currentPage === 3) {
    return `${prevArow}
            <ul class="pagination-list">
              ${prevPrevBtn}
              ${prevBtn}
              ${currentBtn} 
              ${nextBtn}
              ${nextNextBtn}
              ${moreBtn}
              ${lastBtn}
            </ul>
            ${nextArow}`;
  }

  if (currentPage === lastPage - 2) {
    return `${prevArow}
            <ul class="pagination-list">
              ${firstPageBtn}
              ${moreBtn}
              ${prevPrevBtn}
              ${prevBtn}
              ${currentBtn} 
              ${nextBtn}
              ${nextNextBtn}
            </ul>
            ${nextArow}`;
  }

  if (currentPage === lastPage - 1) {
    return `${prevArow}
            <ul class="pagination-list">
              ${firstPageBtn}
              ${moreBtn}
              ${prevPrevBtn}
              ${prevBtn}
              ${currentBtn} 
              ${nextBtn}
            </ul>
            ${nextArow}`;
  }

  if (currentPage === lastPage) {
    return `${prevArow}
            <ul class="pagination-list">
              ${firstPageBtn}
              ${moreBtn}
              ${prevPrevBtn}
              ${prevBtn}
              ${currentBtn} 
            </ul>`;
  }

  return `${prevArow}
            <ul class="pagination-list">
              ${firstPageBtn}
              ${moreBtn}
              ${prevPrevBtn}
              ${prevBtn}
              ${currentBtn} 
              ${nextBtn}
              ${nextNextBtn}
              ${moreBtn}
              ${lastBtn}
            </ul>
            ${nextArow}`;
}
