

// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCemOs_j_yNCeEmTPE3bYWnUfhfW-e7Oeo",
    authDomain: "fir-fin-3e351.firebaseapp.com",
    projectId: "fir-fin-3e351",
    storageBucket: "fir-fin-3e351.appspot.com",
    messagingSenderId: "444934139311",
    appId: "1:444934139311:web:867df21096c53d4f25535a"
  };
  
  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Listen for changes in authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is logged in:', user.uid);
    } else {
      console.log('User is logged out');
    }
  });

export { app, analytics, auth, firestore, storage, onAuthStateChanged };
