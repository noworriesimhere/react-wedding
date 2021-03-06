import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDISBw0hNhIGiKRaaEuKHwzf1I133nxzPI',
  authDomain: 'wedding-project-f3ecc.firebaseapp.com',
  projectId: 'wedding-project-f3ecc',
  storageBucket: 'wedding-project-f3ecc.appspot.com',
  messagingSenderId: '997158385219',
  appId: '1:997158385219:web:1ce41baf9ca917923086f6',
  measurementId: 'G-MLD0WNH3E7',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        isRsvpd: false,
        ...additionalData,
      });
      console.log('made new login');
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
