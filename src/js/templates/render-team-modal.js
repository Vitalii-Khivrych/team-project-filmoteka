import refs from '../refs';

refs.openTeamModalBtn.addEventListener('click', renderTeamModal)

async function renderTeamModal() {
    const teamModal = await createTeamModal();
    await addTeamModal(teamModal);
    refs.backdropTeamModal.classList.remove('is-hidden');
    refs.closeTeamModalBtn.addEventListener('click', closeTeamModal);
}

function addTeamModal(teamModal) {
    refs.backdropTeamModal.innerHTML = teamModal;
}

function createTeamModal() {
return `<div class="team-modal">
  <button class="team-modal__btn-close" type="button">X
    <svg width="11" height="11">
        <use href="./images/sprite.svg#icon-close"></use>
    </svg>
  </button>
  <h2 class="team-modal__title">OUR BEST TEAM OF DEVELOPERS!</h2>
  <ul class="team-modal__list">
      <li class="team-modal__card">
          <img src="./images/team-modal/Vitaliy-desk-1x.jpg" alt="man Vitaliy">
      <div class="team-modal__box">
          <h3 class="team-modal__box-title">Vitaliy Khivrych</h3>
          <p class="team-modal__text">Team-Lead
                <a href="https://github.com/Vitalii-Khivrych">
                    <svg width="20" height="20">
                        <use href="./images/sprite.svg#icon-github-logo"></use>
                    </svg>
                </a>
          </p>
      </div>
      </li>
      <li class="team-modal__card">
          <img  src="./images/team-modal/Natalia-desk-1x.jpg" alt="woman Natalia">
      <div class="team-modal__box">
          <h3 class="team-modal__box-title">Natalia Delicheban</h3>
          <p class="team-modal__text">Scrum-Master
                    <a href="https://github.com/NataliaDelicheban">
                        <svg width="20" height="20">
                            <use href="./images/sprite.svg#icon-github-logo"></use>
                        </svg>
                    </a>
          </p>
      </div>
      </li>
      <li class="team-modal__card">
          <img src="./images/team-modal/Dima-desk-1x.jpg" alt="man Dima">
      <div class="team-modal__box">
          <h3 class="team-modal__box-title">Dima Zharyy</h3>
          <p class="team-modal__text">Web Developer
                    <a href="https://github.com/dima-zharyy">
                        <svg width="20" height="20">
                            <use href="./images/sprite.svg#icon-github-logo"></use>
                        </svg>
                    </a>
                </p>
      </div>
      </li>
      <li class="team-modal__card">
          <img src="./images/team-modal/Viktoriya-desk-1x.jpg" alt="woman Viktoria">
      <div class="team-modal__box">
          <h3 class="team-modal__box-title">Viktoria Fomenko</h3>
          <p class="team-modal__text">Web Developer
                    <a href="https://github.com/ViktoriaFomenko">
                        <svg width="20" height="20">
                            <use href="./images/sprite.svg#icon-github-logo"></use>
                        </svg>
                    </a>
                </p>
      </div>
      </li>
      <li class="team-modal__card">
              <img src="./images/team-modal/Ihor-desk-1x.jpg" alt="man Igor">
      <div class="team-modal__box">
          <h3 class="team-modal__box-title">Igor Smelyanets</h3>
          <p class="team-modal__text">Web Developer
                    <a href="https://github.com/IgorSME">
                        <svg width="20" height="20">
                            <use href="./images/sprite.svg#icon-github-logo"></use>
                        </svg>
                    </a>
                </p>
      </div>
      </li>
      <li class="team-modal__card">
          <img src="./images/team-modal/Samvel-desk-1x.jpg" alt="man Samvel">
      <div class="team-modal__box">
          <h3 class="team-modal__box-title">Samvel Ogmrtsyan</h3>
          <p class="team-modal__text">Web Developer
                    <a href="https://github.com/samvel216">
                    <svg width="20" height="20">
                        <use href="./images/sprite.svg#icon-github-logo"></use>
                    </svg>
                </a></p>
      </div>
      </li>
      <li class="team-modal__card">
              <img src="./images/team-modal/Yevhen-desk-1x.jpg" alt="man Yevhen">
      <div class="team-modal__box">
          <h3 class="team-modal__box-title">Yevhen Podoliaka</h3>
          <p class="team-modal__text">Web Developer
                    <a href="https://github.com/yevhenpodoliaka">
                        <svg width="20" height="20">
                            <use href="./images/sprite.svg#icon-github-logo"></use>
                        </svg>
                    </a>
                </p>
      </div>
      </li>
      <li class="team-modal__card">
          <img src="./images/team-modal/Oleksandr-desk-1x.jpg" alt="man Oleksandr">
      <div class="team-modal__box">
          <h3 class="team-modal__box-title">Oleksandr Suprun</h3>
          <p class="team-modal__text">Web Developer
                    <a href="https://github.com/parfors">
                        <svg width="20" height="20">
                            <use href="./images/sprite.svg#icon-github-logo"></use>
                        </svg>
                    </a>
                </p>
      </div>
      </li>
  </ul>
</div>`
}

function closeTeamModal() {
  refs.backdropTeamModal.classList.add('is-hidden');
}
  
export default renderTeamModal;