import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCvEh2_M7jG3DPP20Aq6q87N3NPCXjb3IQ',
  authDomain: 'crwn-db-2966f.firebaseapp.com',
  databaseURL: 'https://crwn-db-2966f.firebaseio.com',
  projectId: 'crwn-db-2966f',
  storageBucket: 'crwn-db-2966f.appspot.com',
  messagingSenderId: '521514565677',
  appId: '1:521514565677:web:c664d3f692cd3bc450f8a4',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
