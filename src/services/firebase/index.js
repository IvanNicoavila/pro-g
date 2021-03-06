import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBX7xZYNxUJ3zDBg0kz1a1L2H5FaPLLSCU",
  authDomain: "backend-pro-g.firebaseapp.com",
  projectId: "backend-pro-g",
  storageBucket: "backend-pro-g.appspot.com",
  messagingSenderId: "229154691884",
  appId: "1:229154691884:web:462641e397cf28df24ea89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)

export const collectionName = {
  products: 'products', 
  orders: 'orders'
}
