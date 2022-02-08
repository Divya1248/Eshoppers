import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBxnE1Ith19ZGaaUgcBFOQUJMxNbTZynSA",
  authDomain: "ecommerce-9a2af.firebaseapp.com",
  projectId: "ecommerce-9a2af",
  storageBucket: "ecommerce-9a2af.appspot.com",
  messagingSenderId: "828649176924",
  appId: "1:828649176924:web:e5ecc410f888df4c754b99",
  measurementId: "G-9C2CC88GTJ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };

