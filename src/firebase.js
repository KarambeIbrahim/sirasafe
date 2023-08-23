import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDB-iu0tzz2pxju14dg23Id6gVDLE1xG6s",
  authDomain: "sirasafe-73b7d.firebaseapp.com",
  databaseURL: "https://sirasafe-73b7d-default-rtdb.firebaseio.com",
  projectId: "sirasafe-73b7d",
  storageBucket: "sirasafe-73b7d.appspot.com",
  messagingSenderId: "447948535735",
  appId: "1:447948535735:web:87127069a37e5cf7359a32",
  measurementId: "G-15VCCC5MLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;