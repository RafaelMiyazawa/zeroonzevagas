import firebase from 'firebase';

var config = {
    apiKey: 'AIzaSyDZX6_bRiS1b7Ls7rDHB6sdJLqVcz1CfVo',
    authDomain: 'zeroonzevagas.firebaseapp.com',
    databaseURL: 'https://zeroonzevagas.firebaseio.com',
    projectId: 'zeroonzevagas',
    storageBucket: 'zeroonzevagas.appspot.com',
    messagingSenderId: '1054103958455'
};
firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database, auth, googleAuthProvider }
