import { Component } from 'preact';
import { auth, database } from '../../components/firebase';
import Login from '../../components/login';

export default class JobAdd extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(() => this.forceUpdate());
  }
  
  render() {
    return (
      <div class="page">
        <h1>Adicionar Vagas</h1>
        <Login />
        {auth.currentUser &&
          <div class="form">
            <h2>Cadastre sua vaga</h2>
          </div>
        }
      </div>
    );
  }
}
