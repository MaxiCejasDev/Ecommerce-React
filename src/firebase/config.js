// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClQPbBl9SXz8f1KAU_s7IpuKrJa8l-2i8",
  authDomain: "magic-market100.firebaseapp.com",
  projectId: "magic-market100",
  storageBucket: "magic-market100.appspot.com",
  messagingSenderId: "1030205060574",
  appId: "1:1030205060574:web:c16232dfe10f10a43d594f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initializeFirebase = ()=> app