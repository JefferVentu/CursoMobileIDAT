// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage

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

// Inicializar Firebase Auth con persistencia utilizando AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
