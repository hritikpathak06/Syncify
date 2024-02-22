
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBpWOi6wITbkUxU7Xl_kMzU73Ze6xea8h8",
  authDomain: "syncify-71a5c.firebaseapp.com",
  projectId: "syncify-71a5c",
  storageBucket: "syncify-71a5c.appspot.com",
  messagingSenderId: "224239370382",
  appId: "1:224239370382:web:21feec0e9c5b195665c9df",
  measurementId: "G-4YQLPMYSQ7"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)