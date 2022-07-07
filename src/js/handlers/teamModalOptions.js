export { addTeamModal, openTeamModal, closeTeamModal, onEscCloseTeamModal, onBackdropCloseTeamModal }

function addTeamModal(teamModal) {
    let backdropTeamModal = document.querySelector('.backdrop__team-modal');
    backdropTeamModal.innerHTML = teamModal;
}

function openTeamModal() {
    let backdropTeamModal = document.querySelector('.backdrop__team-modal');
    backdropTeamModal.classList.remove('is-hidden');
    document.addEventListener('keydown', onEscCloseTeamModal);
    let closeTeamModalBtn = document.querySelector('.team-modal__btn-close');
    closeTeamModalBtn.addEventListener('click', closeTeamModal);
    backdropTeamModal.addEventListener('click', onBackdropCloseTeamModal);
}
function closeTeamModal() {
    let backdropTeamModal = document.querySelector('.backdrop__team-modal');
    backdropTeamModal.classList.add('is-hidden');
    document.removeEventListener('keydown', onEscCloseTeamModal);
    backdropTeamModal.removeEventListener('click', onBtnCloseTeamModal);
}

function onEscCloseTeamModal(event) {
    if (event.code === 'Escape') {
        closeTeamModal();
    }
}
function onBackdropCloseTeamModal(event) {
    if (event.currentTarget === event.target) {
        closeTeamModal();
    }
}