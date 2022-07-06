import { createTeamModal } from './createTeamModal';
import { addTeamModal } from '../handlers/teamModalOptions';
import { closeTeamModal } from '../handlers/teamModalOptions';

export { renderTeamModal };
async function renderTeamModal() {
    const teamModal = await createTeamModal();
    await addTeamModal(teamModal);
    let backdropTeamModal = document.querySelector('.backdrop__team-modal');
    backdropTeamModal.classList.remove('is-hidden');
    let closeTeamModalBtn = document.querySelector('.team-modal__btn-close');
    closeTeamModalBtn.addEventListener('click', closeTeamModal);
}