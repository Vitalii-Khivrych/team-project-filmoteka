// import refs from '../refs';

const refs = {
    openTeamModalBtn: document.querySelector('.footer__button'),
    closeTeamModalBtn: document.querySelector('.team-modal__btn-close'),
    modal: document.querySelector('.backdrop__team-modal'),
  };

  refs.openTeamModalBtn.addEventListener('click', toggleModal);
  refs.closeTeamModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  };

//   закрытие модалки при нажатии на клавишу Escape

// function modalCloseEsc (event) {
//     if ( !event.keyCode === 27 ) {
//         toggleModal();
//     }
//   }
  
//   document.addEventListener('keydown', modalCloseEsc);