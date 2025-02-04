// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdJH68OkiE7JZijTLmw1ZlIIM2Brq6sYY",
  authDomain: "vite-contact-be558.firebaseapp.com",
  projectId: "vite-contact-be558",
  storageBucket: "vite-contact-be558.firebasestorage.app",
  messagingSenderId: "163349539955",
  appId: "1:163349539955:web:00f47c29ac40bb0c870e06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);