// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect
} from "firebase/auth";
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
  measurementId: "G-M0CDPV9F0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithRedirect }