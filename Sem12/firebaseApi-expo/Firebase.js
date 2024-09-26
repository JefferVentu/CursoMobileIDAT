// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth;

export {auth};
