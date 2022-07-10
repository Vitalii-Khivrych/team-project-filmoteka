import { renderLibraryHeader } from '../templates/header/renderLibraryHeader';
import { renderQueueList } from '../templates/renderQueueList';
import { getAuth } from 'firebase/auth';
import swal from 'sweetalert';
import spiner from '../spiner';

// Добавить проверку авторизации в начало

const onLibraryLinkClick = event => {
  event.preventDefault();
  if (!getAuth().currentUser) {
    swal('Oops!', 'You need to register to view!', 'warning');
    return;
  }
  spiner.on();
  renderLibraryHeader();
  renderQueueList();
};

export { onLibraryLinkClick };
