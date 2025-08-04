// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw12JBosAmh1eecW7Lw-PZ-QUsQ3J041o",
  authDomain: "tm-web-store.firebaseapp.com",
  projectId: "tm-web-store",
  storageBucket: "tm-web-store.firebasestorage.app",
  messagingSenderId: "502601933951",
  appId: "1:502601933951:web:d4bad9ba414ec10a664b4a",
  measurementId: "G-1B5XB070XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 