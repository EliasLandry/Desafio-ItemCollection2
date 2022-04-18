// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK0qoWjMXDqYAKoCzr5rncto25UDV_XRM",
  authDomain: "g4g-rj.firebaseapp.com",
  projectId: "g4g-rj",
  storageBucket: "g4g-rj.appspot.com",
  messagingSenderId: "565364429073",
  appId: "1:565364429073:web:9abf78046a5f6756b8bcb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)