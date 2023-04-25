// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLntSxFYISnzNoXIl9QjmaC09zjMIPZSM",
  authDomain: "recap-dragon.firebaseapp.com",
  projectId: "recap-dragon",
  storageBucket: "recap-dragon.appspot.com",
  messagingSenderId: "609033198849",
  appId: "1:609033198849:web:e00e23ea1cd93b3b850f00"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp