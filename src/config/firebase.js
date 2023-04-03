import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB77Uy6mO6phgtRrnySOx-ZyiDaVcD2RKA",
  authDomain: "tiktok-jornada-9cb0f.firebaseapp.com",
  projectId: "tiktok-jornada-9cb0f",
  storageBucket: "tiktok-jornada-9cb0f.appspot.com",
  messagingSenderId: "194350225078",
  appId: "1:194350225078:web:78e6be31bd21e8ca9d7817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;