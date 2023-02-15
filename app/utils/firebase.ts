// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiIZRHAThe_xuI8scVDRkQgCNHG2OPV4w",
  authDomain: "broker-2226d.firebaseapp.com",
  projectId: "broker-2226d",
  storageBucket: "broker-2226d.appspot.com",
  messagingSenderId: "634736691056",
  appId: "1:634736691056:web:2e19d2559ade23b85ff1b5",
  measurementId: "G-71SYVQVCFE"
};

initializeApp(firebaseConfig)

export const auth = getAuth();

export const register = (email: string, password: string) => 
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
