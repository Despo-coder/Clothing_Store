// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB0wnH-UjgtMvayl0ekxbWd92ZtbKTaZww',
  authDomain: 'clothingstoredb-262a0.firebaseapp.com',
  projectId: 'clothingstoredb-262a0',
  storageBucket: 'clothingstoredb-262a0.appspot.com',
  messagingSenderId: '497681913202',
  appId: '1:497681913202:web:52b5884f73e7daae7eb9eb',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const singInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return userDocRef;
};
