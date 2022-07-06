export { onBtnAddToQueueClick, onBtnAddWachedClick };

function onBtnAddToQueueClick(e) {
  if (e.target.dataset.action === 'add-queue') {
    console.log('onBtnAddToQueueClick - click');
  }
}
function onBtnAddWachedClick(e) {
  if (e.target.dataset.action === 'add-wached') {
    console.log('onBtnAddWachedClick - click');
  }
}
