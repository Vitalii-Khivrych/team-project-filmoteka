export default function createAuthMarkup() {
  return `<div class="container auth">
  <div id="user-container" class="nav-list__item">
    <div hidden id="user-pic"></div>
    <div hidden id="user-name"></div>
    <button hidden id="sign-out" class="mdl-button mdl-js-button mdl-js-ripple-effect">
      Sign-out
    </button>
    <button id="sign-in" class="mdl-button mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">account_circle</i>
      Sign-in with Google
    </button>
  </div>
  </div>
`;
}