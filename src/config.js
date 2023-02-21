// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAQY-T4v20MKtQDmwGH889CBnqlYoLj2AA",
  authDomain: "reactnative-48ff4.firebaseapp.com",
  projectId: "reactnative-48ff4",
  storageBucket: "reactnative-48ff4.appspot.com",
  messagingSenderId: "546607039534",
  appId: "1:546607039534:web:0a27e831b6cfcc8dfe4bbf",
  measurementId: "G-F9PZ19TP2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);