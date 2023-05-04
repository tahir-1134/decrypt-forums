import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQLIf5YySPuXUa1bohG8UQROo0xNDye9g",

  authDomain: "decrypt-forums-a42d2.firebaseapp.com",

  projectId: "decrypt-forums-a42d2",

  storageBucket: "decrypt-forums-a42d2.appspot.com",

  messagingSenderId: "76191475239",

  appId: "1:76191475239:web:6402188661772aa3eb5002",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};