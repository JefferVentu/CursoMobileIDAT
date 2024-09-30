// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importar el módulo de autenticación

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCW742yg_z4AH80Wyqpb0mLrBVq3NsMDW8",
    authDomain: "react-native-mayo-24-54b0d.firebaseapp.com",
    projectId: "react-native-mayo-24-54b0d",
    storageBucket: "react-native-mayo-24-54b0d.appspot.com",
    messagingSenderId: "300126817370",
    appId: "1:300126817370:web:ec39eec430395ea0809c63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });
const auth = getAuth(app); // Inicializar el servicio de autenticación

export { db, auth }; // Exportar también el objeto de autenticación
