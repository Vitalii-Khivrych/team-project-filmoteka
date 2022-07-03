import refs from '../refs';

  refs.openTeamModalBtn.addEventListener('click', toggleTeamModal);
  refs.closeTeamModalBtn.addEventListener('click', toggleTeamModal);

  function toggleTeamModal() {
    refs.teamModal.classList.toggle('is-hidden');
  };

//   закрытие модалки при нажатии на клавишу Escape

// function teamModalCloseEsc (event) {
//     if ( !event.keyCode === 27 ) {
//         toggleTeamModal();
//     }
//   }
  
//   document.addEventListener('keydown', teamModalCloseEsc);