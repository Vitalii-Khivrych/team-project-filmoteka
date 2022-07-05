import { renderLibraryHeader } from '../templates/header/renderLibraryHeader';

const onLibraryLinkClick = event => {
  event.preventDefault();

  renderLibraryHeader();
};

export { onLibraryLinkClick };
