// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC-FLtkDrDp9r5AG05TknfLzmk6e0eEGQ",
  authDomain: "docs-clone-17fd0.firebaseapp.com",
  projectId: "docs-clone-17fd0",
  storageBucket: "docs-clone-17fd0.firebasestorage.app",
  messagingSenderId: "985256699409",
  appId: "1:985256699409:web:89226e3730e0b064b873b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);