// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFcbwdBbOX8mUp2Zcm-JkmIGVwi7D0fNg",
  authDomain: "auth-firebase-context-c63ab.firebaseapp.com",
  projectId: "auth-firebase-context-c63ab",
  storageBucket: "auth-firebase-context-c63ab.appspot.com",
  messagingSenderId: "229491589141",
  appId: "1:229491589141:web:82a7be4efd041598a24e1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app)