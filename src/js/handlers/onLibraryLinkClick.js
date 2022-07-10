import { renderLibraryHeader } from '../templates/header/renderLibraryHeader';
import { renderQueueList } from '../templates/renderQueueList';
import { getAuth,  GoogleAuthProvider,
  signInWithPopup, } from 'firebase/auth';
import spiner from '../spiner';
import { changeUrl } from '../service/chengingUrlApi';


// Добавить проверку авторизации в начало

const onLibraryLinkClick = async(event) => {
  event.preventDefault();
  if (!getAuth().currentUser) {
    console.log('Authorized');
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider)
  
  }
  spiner.on();

  console.log(event);

  renderLibraryHeader();
  renderQueueList();
  changeUrl().goToLibrary('library');
};

export { onLibraryLinkClick };
