import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBAfWbJy6NYQhFtmMbBlRqHGeEbzhUFaXo",
    authDomain: "movie-development.firebaseapp.com",
    projectId: "movie-development",
    storageBucket: "movie-development.appspot.com",
    messagingSenderId: "445719016456",
    appId: "1:445719016456:web:eb788ae53796608da4cdbd"
  };

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const database = getDatabase(app);