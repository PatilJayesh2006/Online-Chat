import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0Xt9i3Wf52hHTNOVRxjxGhuSZEnU6dKk",
  authDomain: "chatting-3e552.firebaseapp.com",
  databaseURL:
    "https://chatting-3e552-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatting-3e552",
  storageBucket: "chatting-3e552.appspot.com",
  messagingSenderId: "368765217591",
  appId: "1:368765217591:web:8339793c5e484b065448b2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const googleProvider = new GoogleAuthProvider();
