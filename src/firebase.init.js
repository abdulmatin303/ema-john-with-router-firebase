// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBm7GZSRglCB1Wuh6FUZOXr7Q7Pr7exfk",
  authDomain: "ema-john-with-router-fir-49348.firebaseapp.com",
  projectId: "ema-john-with-router-fir-49348",
  storageBucket: "ema-john-with-router-fir-49348.appspot.com",
  messagingSenderId: "1070048552963",
  appId: "1:1070048552963:web:f6c205ba3fe8ff15a48636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;