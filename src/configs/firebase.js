// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8k7IlZW4N1mjP5Lcj73smDU_f1GXMaog",
  authDomain: "jasusdotcom.firebaseapp.com",
  projectId: "jasusdotcom",
  storageBucket: "jasusdotcom.firebasestorage.app",
  messagingSenderId: "572723788987",
  appId: "1:572723788987:web:d736dd4a36ee4df9a77d9e",
  measurementId: "G-07SG9BJGSJ",
  databaseUrl: 'https://jasusdotcom-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);