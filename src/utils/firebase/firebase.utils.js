import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi9OwcI7fDyEy8RXXFDR_UnRCe8MmMuis",
  authDomain: "react-ai-eeb13.firebaseapp.com",
  projectId: "react-ai-eeb13",
  storageBucket: "react-ai-eeb13.appspot.com",
  messagingSenderId: "1061615721409",
  appId: "1:1061615721409:web:19abe182a1e55b1101ed40"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Set up Google authentication provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Get auth instance
const auth = getAuth(firebaseApp);

// Sign in with Google popup
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Firestore instance
const db = getFirestore(firebaseApp);

// Create user document in Firestore
export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return userDocRef;
};