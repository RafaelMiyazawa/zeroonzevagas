import { Component } from 'preact';
import { auth, googleAuthProvider } from '../firebase';

export default class Login extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(() => this.forceUpdate());
  }
  render() {
    if (auth.currentUser) {
      return (
        <div class="login">
          <p>Seja bem vindo, {auth.currentUser.displayName}!</p>
          <button class="button is-small is-default" onclick={() => auth.signOut()}>
            <span class="icon is-small">
              <i class="fa fa-sign-out" />
            </span>
            <span>
              Sair
            </span>
          </button>
        </div>
      )
    }
    else {
      return (
        <div class="login">
          <h3>Login</h3>
          <p>Autentique-se para adicionar suas vagas</p>
          <button class="button is-primary" onclick={() => auth.signInWithPopup(googleAuthProvider)}>
            <span class="icon is-small">
              <i class="fa fa-google" />
            </span>
            <span> Autenticar usando Google</span>
          </button>
        </div>
      )
    }
  }
}
