// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALvPSlbP40OWq5DxZPd6YbESjSg8H7Oaw",
  authDomain: "cv-maker-38a8f.firebaseapp.com",
  projectId: "cv-maker-38a8f",
  storageBucket: "cv-maker-38a8f.appspot.com",
  messagingSenderId: "211662081257",
  appId: "1:211662081257:web:0df154361d96434bf5b478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
