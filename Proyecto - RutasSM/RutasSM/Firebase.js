// Import the functions you need from the SDKs you need
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJEP0Ce0VhzsvVzMUeRV5li8qJGaDBAik",
    authDomain: "rutasm-proyectoidat.firebaseapp.com",
    projectId: "rutasm-proyectoidat",
    storageBucket: "rutasm-proyectoidat.appspot.com",
    messagingSenderId: "106629757714",
    appId: "1:106629757714:web:208f209bdc4eedb75e91cb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth;
// const firestore = firebase.firestore(); // Inicializar Firestore
const db = initializeFirestore(app, {experimentalForceLongPolling: true});
export{ db };
export {auth};