import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// ​​import { GoogleAuthProvider,  getAuth,signInWithPopup, signInWithEmailAndPassword,  createUserWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import {getAuth} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA32reQih5sG5D12rjimZpvRF1S8i4OjG0",
    authDomain: "eshop-17eed.firebaseapp.com",
    projectId: "eshop-17eed",
    storageBucket: "eshop-17eed.appspot.com",
    messagingSenderId: "754586284767",
    appId: "1:754586284767:web:42727d9e7d0b3f5e986f6a",
    measurementId: "G-6FL0D7GDGT"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const auth = getAuth(app);
  export { db, auth };

  

