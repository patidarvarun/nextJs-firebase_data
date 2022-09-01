import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ_O2_SW-pvzUfmVttYNwQALGhZxhwMK4",
  authDomain: "nextjs-login-95a21.firebaseapp.com",
  projectId: "nextjs-login-95a21",
  storageBucket: "nextjs-login-95a21.appspot.com",
  messagingSenderId: "217097522654",
  appId: "1:217097522654:web:05e09cf5643119fac6614f",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
