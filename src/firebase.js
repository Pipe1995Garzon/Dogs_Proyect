// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3plEa7k16v0v-J9W76M3ipCIpYfIYTZE",
  authDomain: "dogs-cbf06.firebaseapp.com",
  projectId: "dogs-cbf06",
  storageBucket: "dogs-cbf06.appspot.com",
  messagingSenderId: "799807991418",
  appId: "1:799807991418:web:1af2caefa666bb00df95c3",
  measurementId: "G-L7NXXYVZTM"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export  const analytics = getAnalytics(app);
export  const auth = getAuth(app)
