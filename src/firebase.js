import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBglYJOY4vQT7odrzsFTbbcY0PJEBH9BfY",
  authDomain: "look--book.firebaseapp.com",
  projectId: "look--book",
  storageBucket: "look--book.appspot.com",
  messagingSenderId: "419574257126",
  appId: "1:419574257126:web:cb5223b6ec5b652797b227",
};

const app = initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const db = firebase.firestore();
