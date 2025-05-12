import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0VqJHomq2dimSG0SjKdTg0kD2R-bUd4A",
  authDomain: "password-generador.firebaseapp.com",
  projectId: "password-generador",
  storageBucket: "password-generador.firebasestorage.app",
  messagingSenderId: "522949812037",
  appId: "1:522949812037:web:34fbb818083a7af180e82c",
  measurementId: "G-ZPZDN7WJPX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)