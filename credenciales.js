// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhZlvWIlyWZck8XBm35rWTcFrcfD7Iz74",
    authDomain: "full-93fa3.firebaseapp.com",
    projectId: "full-93fa3",
    storageBucket: "full-93fa3.appspot.com",
    messagingSenderId: "1027043046116",
    appId: "1:1027043046116:web:d78bc850c239e928be72f1",
    measurementId: "G-JF00Q41RJF"
};

// Initialize Firebase
const cerolinealApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//# Exportamos la aplicación de autenticación para poder ser utilizada en los otros archivos de la siguiente manera:
export const auth = getAuth(cerolinealApp);

//! Exportamos la aplicación de almacenamiento para poder ser utilizada en los otros archivos de la siguiente manera:
export const almacen = getFirestore(cerolinealApp);