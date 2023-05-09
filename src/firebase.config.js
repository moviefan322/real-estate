import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEpHm_tdnAnO87au2pbIch1Joqge0mUis",
  authDomain: "realestate-15a2e.firebaseapp.com",
  projectId: "realestate-15a2e",
  storageBucket: "realestate-15a2e.appspot.com",
  messagingSenderId: "526530553639",
  appId: "1:526530553639:web:83a322bd1ee1b859316b02",
  measurementId: "G-CNNPK391PZ",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
