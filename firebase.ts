// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJnYsSjTwbTH3TqPP6dICsIM2UERkAz8E",
  authDomain: "todo-app-8edcf.firebaseapp.com",
  projectId: "todo-app-8edcf",
  storageBucket: "todo-app-8edcf.firebasestorage.app",
  messagingSenderId: "697593380008",
  appId: "1:697593380008:web:8b45732a91ff1453d5569d",
  measurementId: "G-BVG01V6MHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
