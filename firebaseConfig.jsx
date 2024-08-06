// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPFwkEEbT3oipZ3TL-6C8cGqn1FPlnnUo",
  authDomain: "community-marketplace-a3206.firebaseapp.com",
  projectId: "community-marketplace-a3206",
  storageBucket: "community-marketplace-a3206.appspot.com",
  messagingSenderId: "906929191606",
  appId: "1:906929191606:web:e48580a7186be61e894417",
  measurementId: "G-K5W0P48CRR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
