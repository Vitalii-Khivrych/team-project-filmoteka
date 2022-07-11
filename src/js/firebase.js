
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { initializeApp } from "firebase/app";


const userPicElement = document.getElementById('user-pic');
const userNameElement = document.getElementById('user-name');
const signInButtonElement = document.getElementById('sign-in');
const signOutButtonElement = document.getElementById('sign-out');


signOutButtonElement.addEventListener('click', signOutUser);
signInButtonElement.addEventListener('click', signIn);


const firebaseConfig = {
  apiKey: "AIzaSyD97IsDjK-7IAttx0i6Aam0sN8iE_LfeLk",
  authDomain: "filmoteka-9c8eb.firebaseapp.com",
  databaseURL: "https://filmoteka-9c8eb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filmoteka-9c8eb",
  storageBucket: "filmoteka-9c8eb.appspot.com",
  messagingSenderId: "661633585171",
  appId: "1:661633585171:web:5eac125f261ab9e0712fe6",
  measurementId: "G-BYWLPZ81KP"
};
const app = initializeApp(firebaseConfig);


async function signIn() {
    try {
        const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
    } catch (error) {
        console.log(error);
    }
}

function signOutUser() {
  signOut(getAuth());
  
}

function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver);
}

// Запускаємо рендер зображення користувача згідно його статусу - зареєстрований чи ні
function authStateObserver(user) {
  if (user) {
    // Користувач зареєстрований
    const profilePicUrl = getProfilePicUrl();
    const userName = getUserName();

    userPicElement.style.backgroundImage =
      'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
    userNameElement.textContent = userName;

    // Показуємо дані користувача та відкриваємо кнопку разлогінитись
    userNameElement.removeAttribute('hidden');
    userPicElement.removeAttribute('hidden');
    signOutButtonElement.removeAttribute('hidden');

    // Скриваємо кнопку залогінитись
    signInButtonElement.setAttribute('hidden', 'true');

  } else {
    // Користувач не залогінився
    userNameElement.setAttribute('hidden', 'true');
    userPicElement.setAttribute('hidden', 'true');
    signOutButtonElement.setAttribute('hidden', 'true');

    // Показуємо кнопку залогінитись
    signInButtonElement.removeAttribute('hidden');
  }
}

function addSizeToGoogleProfilePic(url) {
  if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
    return url + '?sz=150';
  }
  return url;
}
// Отримуємо фото зареєстрованого користувача
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || './images/free-icon-delete-account-7084160.png';
}

// Отримуємо displayName зареєстрованого користувача
function getUserName() {
  return getAuth().currentUser.displayName;
}

initFirebaseAuth();

export {signIn}