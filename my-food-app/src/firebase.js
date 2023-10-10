// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'
// import { getDatabase } from 'firebase/database';
// import { storage } from 'firebase/app';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyAcSl5wnRXuDHp2tQucmlbc0PGHHc69niE",
//   authDomain: "food-app-7046e.firebaseapp.com",
//   projectId: "food-app-7046e",
//   storageBucket: "food-app-7046e.appspot.com",
//   messagingSenderId: "1016067002016",
//   appId: "1:1016067002016:web:e8d33b9e951db1451f43c5",
//   measurementId: "G-HNDY5YDBMZ"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // const storage = getStorage(app);

// export { storage };
// export const firestore = getFirestore(app);
// export const auth = getAuth(app);
// export const database = getDatabase(app);

// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const storageInstance = getStorage(app); // Change the variable name

// export { storageInstance };
// // export const firestore = getFirestore(app);
// // export const auth = getAuth(app);
// // export const database = getDatabase(app);





// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'
// import { getDatabase } from 'firebase/database';
// import { getStorage } from 'firebase/storage'; // Import storage from 'firebase/storage' directly

// const firebaseConfig = {
//   apiKey: "AIzaSyAcSl5wnRXuDHp2tQucmlbc0PGHHc69niE",
//   authDomain: "food-app-7046e.firebaseapp.com",
//   projectId: "food-app-7046e",
//   storageBucket: "food-app-7046e.appspot.com",
//   messagingSenderId: "1016067002016",
//   appId: "1:1016067002016:web:e8d33b9e951db1451f43c5",
//   measurementId: "G-HNDY5YDBMZ"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const firestore = getFirestore(app);
// export const auth = getAuth(app);
// export const database = getDatabase(app);

// // Create a named export for the Firebase Storage instance
// export const storage = getStorage(app);

// export { app, analytics };










import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
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

export { app, analytics, auth, firestore, storage };
