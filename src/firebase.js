import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBglYJOY4vQT7odrzsFTbbcY0PJEBH9BfY",
  authDomain: "look--book.firebaseapp.com",
  projectId: "look--book",
  storageBucket: "look--book.appspot.com",
  messagingSenderId: "419574257126",
  appId: "1:419574257126:web:cb5223b6ec5b652797b227",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
