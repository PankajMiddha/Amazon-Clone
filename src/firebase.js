import firebase from "firebase";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTveAiYLQRLy_dw7KHUbh0FUo3jaulrw8",
    authDomain: "clone-9f0a1.firebaseapp.com",
    projectId: "clone-9f0a1",
    storageBucket: "clone-9f0a1.appspot.com",
    messagingSenderId: "643747720929",
    appId: "1:643747720929:web:e0bc1d535b7e82bf2491a0",
    measurementId: "G-KM6MGFPHL3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };