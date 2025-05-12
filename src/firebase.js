// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCwpmd7-H4_9LawLKklEcHhtvA9HAVdlQI",
  authDomain: "nalazuri.firebaseapp.com",
  projectId: "nalazuri",
  storageBucket: "nalazuri.firebasestorage.app",
  messagingSenderId: "776751178966",
  appId: "1:776751178966:web:8795a560693a68e73b9577",
  measurementId: "G-87FJJVXNHG",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const db = getFirestore(app);
 
export default db;