// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUhUFwSWWORoN9Rfe0EdRn4OSSC6_EPbE",
  authDomain: "aula-6----firebase.firebaseapp.com",
  projectId: "aula-6----firebase",
  storageBucket: "aula-6----firebase.firebasestorage.app",
  messagingSenderId: "985665982920",
  appId: "1:985665982920:web:cf7dc6059c2a81a82c70fd",
  measurementId: "G-XYTSHT5CS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };