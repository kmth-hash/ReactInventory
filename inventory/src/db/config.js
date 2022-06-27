import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFU7INbtIOkJo4wGxKD1EWbP6qaBSjFLI",
  authDomain: "inventory-4ca25.firebaseapp.com",
  databaseURL: "https://inventory-4ca25-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "inventory-4ca25",
  storageBucket: "inventory-4ca25.appspot.com",
  messagingSenderId: "1064074230394",
  appId: "1:1064074230394:web:5c389ef4a2e1ac39d319c3"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default db;
// dummy config file 