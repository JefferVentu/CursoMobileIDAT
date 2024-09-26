// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8Ja_Ewqf6qOU0PU_Uto4j-zPlPjAuRsg",
    authDomain: "rn-api-firestore-2024.firebaseapp.com",
    projectId: "rn-api-firestore-2024",
    storageBucket: "rn-api-firestore-2024.appspot.com",
    messagingSenderId: "676153641621",
    appId: "1:676153641621:web:c3e115cb953236a112e99c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});
export{ db };