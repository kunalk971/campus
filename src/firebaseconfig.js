// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-
 import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-h35C8ylfugYuK5W07-_dxzQpIe32iHo",
  authDomain: "campus-d5906.firebaseapp.com",
  projectId: "campus-d5906",
  storageBucket: "campus-d5906.firebasestorage.app",
  messagingSenderId: "993277487137",
  appId: "1:993277487137:web:661ea8393b62fbae5f9b60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth,app};