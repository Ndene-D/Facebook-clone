import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeDnuMY_WBESmqz_kbGujJ7ke6R0uUTrY",
  authDomain: "fb-clone-9be44.firebaseapp.com",
  projectId: "fb-clone-9be44",
  storageBucket: "fb-clone-9be44.appspot.com",
  messagingSenderId: "179710224335",
  appId: "1:179710224335:web:1d9dfd4527aebe967a54ba",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, GoogleAuthProvider };

export default db;
