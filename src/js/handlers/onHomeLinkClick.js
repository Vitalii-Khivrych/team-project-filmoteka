import { renderHomeHeader } from '../templates/header/renderHomeHeader';

const onHomeLinkClick = event => {
  event.preventDefault();

  renderHomeHeader();
};

export { onHomeLinkClick };
