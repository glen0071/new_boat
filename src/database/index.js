// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS9PMIgUg_609i59hyXIG8Xona--WfYyA",
  authDomain: "boat-f0bc7.firebaseapp.com",
  databaseURL: "https://boat-f0bc7-default-rtdb.firebaseio.com",
  projectId: "boat-f0bc7",
  storageBucket: "boat-f0bc7.appspot.com",
  messagingSenderId: "273149634913",
  appId: "1:273149634913:web:7556486d07969fc8237d20",
  measurementId: "G-J8RY8NT4NL"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
