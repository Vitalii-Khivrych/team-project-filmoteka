export { addTeamModal, closeTeamModal }

function addTeamModal(teamModal) {
    let backdropTeamModal = document.querySelector('.backdrop__team-modal');
    backdropTeamModal.innerHTML = teamModal;
}

function closeTeamModal() {
    let backdropTeamModal = document.querySelector('.backdrop__team-modal');
    backdropTeamModal.classList.add('is-hidden');
}