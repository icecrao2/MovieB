// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  onValue,
  get,
  remove,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0-n5hhNBGWx2cCRUHqSTJ5VCAh8HoZVI",
  authDomain: "movieb-ff879.firebaseapp.com",
  projectId: "movieb-ff879",
  storageBucket: "movieb-ff879.appspot.com",
  messagingSenderId: "869641856025",
  appId: "1:869641856025:web:315a0275da629136e7f688",
  measurementId: "G-M0CDPV9F0T",
  databaseURL: "https://movieb-ff879-default-rtdb.firebaseio.com"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const database = getDatabase(app);

export {
  auth,
  googleProvider,
  githubProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  database,
  ref,
  set,
  update,
  push,
  child,
  onValue,
  get,
  remove,
}