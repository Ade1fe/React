// //firebase.tsx

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPnopTcaEiabyQ0y1ysD0Mlg0ypPsvJb0",
  authDomain: "journal-69353.firebaseapp.com",
  projectId: "journal-69353",
  storageBucket: "journal-69353.appspot.com",
  messagingSenderId: "750588432928",
  appId: "1:750588432928:web:7efc56df1bc712ceffa245"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, firestore, storage, getAuth };