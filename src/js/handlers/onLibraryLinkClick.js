import { renderLibraryHeader } from '../templates/header/renderLibraryHeader';
import { renderQueueList } from '../templates/renderQueueList';

// Добавить проверку авторизации в начало

const onLibraryLinkClick = event => {
  event.preventDefault();

  renderLibraryHeader();
  renderQueueList();
};

export { onLibraryLinkClick };
