import { renderLibraryHeader } from '../templates/header/renderLibraryHeader';
import { renderQueueList } from '../templates/renderQueueList';
import { getAuth } from 'firebase/auth';
import swal from 'sweetalert';

// Добавить проверку авторизации в начало

const onLibraryLinkClick = event => {
  event.preventDefault();
  if (!getAuth().currentUser) {
    swal('Oops!', 'You need to register to view!', 'warning');
    return;
  }
  renderLibraryHeader();
  renderQueueList();
};

export { onLibraryLinkClick };
