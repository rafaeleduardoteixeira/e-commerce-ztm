import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { credentials } from '../fireBaseCredentials';

initializeApp({
  apiKey: credentials.apiKey,
  authDomain: credentials.authDomain,
  projectId: credentials.projectId,
  storageBucket: credentials.storageBucket,
  messagingSenderId: credentials.messagingSenderId,
  appId: credentials.appId,
});

export const db = getFirestore();
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch(err => {
    console.log(err);
  });
