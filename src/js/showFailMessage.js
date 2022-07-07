function showEmptyInputMessage() {
  const notificationElement = document.querySelector('.notification');
  notificationElement.textContent = 'Please type something';
  notificationElement.classList.remove('notification--is-hidden');

  setTimeout(() => {
    notificationElement.classList.add('notification--is-hidden');
    notificationElement.textContent = '';
  }, 4000);
}

function showNoResultMessage() {
  const notificationElement = document.querySelector('.notification');
  notificationElement.textContent = 'No result found';
  notificationElement.classList.remove('notification--is-hidden');

  setTimeout(() => {
    notificationElement.classList.add('notification--is-hidden');
    notificationElement.textContent = '';
  }, 4000);
}

export { showEmptyInputMessage, showNoResultMessage };
