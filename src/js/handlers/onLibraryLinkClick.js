import { renderLibraryHeader } from '../templates/header/renderLibraryHeader';
import { renderQueueList } from '../templates/renderQueueList';
import { getAuth } from 'firebase/auth';
import swal from 'sweetalert';
import changeUrl from 'module';

// Добавить проверку авторизации в начало

const onLibraryLinkClick = event => {
  event.preventDefault();
  if (!getAuth().currentUser) {
    swal('Oops!', 'You need to register to view!', 'warning');
    return;
  }

  console.log(event);

  renderLibraryHeader();
  renderQueueList();
  changeUrl(event.target.id);
};

export { onLibraryLinkClick };
