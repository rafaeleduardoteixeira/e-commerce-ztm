import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { credentials } from '../fireBaseCredentials';

const firebaseApp = initializeApp({
  apiKey: credentials.apiKey,
  authDomain: credentials.authDomain,
  projectId: credentials.projectId,
  storageBucket: credentials.storageBucket,
  messagingSenderId: credentials.messagingSenderId,
  appId: credentials.appId,
});

export const db = getFirestore();
