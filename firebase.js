import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDl4RewhALj1DsbRVWzX1xr_I-LToXCouI",
  authDomain: "cdntgmw.firebaseapp.com",
  projectId: "cdntgmw",
  storageBucket: "cdntgmw.firebasestorage.app",
  messagingSenderId: "701530451126",
  appId: "1:701530451126:web:102de6b7b38c594ffdca17"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
