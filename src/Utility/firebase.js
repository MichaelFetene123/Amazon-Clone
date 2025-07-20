// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8VXmKQFVNOC0dMJXEACsX4qH5L3SNGCk",
  authDomain: "clone-d91ea.firebaseapp.com",
  projectId: "clone-d91ea",
  storageBucket: "clone-d91ea.firebasestorage.app",
  messagingSenderId: "120140638397",
  appId: "1:120140638397:web:d7400effb81a4921846fd4",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore();
