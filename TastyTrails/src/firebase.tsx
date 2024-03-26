
// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAcSl5wnRXuDHp2tQucmlbc0PGHHc69niE",
    authDomain: "food-app-7046e.firebaseapp.com",
    projectId: "food-app-7046e",
    storageBucket: "food-app-7046e.appspot.com",
    messagingSenderId: "1016067002016",
    appId: "1:1016067002016:web:e8d33b9e951db1451f43c5",
    measurementId: "G-HNDY5YDBMZ"
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

export { app, analytics, auth, firestore, storage };
