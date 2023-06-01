// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFhgnL0J1rutB6BZgV6wP_hYqMh9JzKuE",
  authDomain: "charity-management-1e00b.firebaseapp.com",
  projectId: "charity-management-1e00b",
  storageBucket: "charity-management-1e00b.appspot.com",
  messagingSenderId: "423233816278",
  appId: "1:423233816278:web:80ed877a59eeccc9f02b77",
  measurementId: "G-PJM483C0JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);