import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const env = import.meta.env || {};

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || "",
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: env.VITE_FIREBASE_APP_ID || "",
};

const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean);

let auth = null;
let db = null;
let provider = null;

if (hasFirebaseConfig) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  provider = new GoogleAuthProvider();
}

export { auth, db, hasFirebaseConfig };

export const loginWithGoogle = () => {
  if (!auth || !provider) {
    throw new Error("Firebase is not configured.");
  }

  return signInWithPopup(auth, provider);
};

export const logout = () => {
  if (!auth) {
    return Promise.resolve();
  }

  return signOut(auth);
};
