// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjAbPHkQQSAkpXLeS59gZHOQ1U6BzzY0A",
  authDomain: "challenge-a1ad3.firebaseapp.com",
  projectId: "challenge-a1ad3",
  storageBucket: "challenge-a1ad3.appspot.com",
  messagingSenderId: "188342560097",
  appId: "1:188342560097:web:db745810dbac5220195120",
  measurementId: "G-43TET40ZY6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };