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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // retrieving actual data
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    console.log(email);
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;