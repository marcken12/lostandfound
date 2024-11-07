// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgAu5Ipx7mpBFcDOMyE-hBf4AOKio6_00",
  authDomain: "lostandfound-6235f.firebaseapp.com",
  projectId: "lostandfound-6235f",
  storageBucket: "lostandfound-6235f.firebasestorage.app",
  messagingSenderId: "227954756606",
  appId: "1:227954756606:web:87bc6bf261a17f8b9fceaf",
  measurementId: "G-RF3W9FP54D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
