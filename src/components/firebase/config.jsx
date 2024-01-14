// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appIds,
  apiKey: "AIzaSyCKTbKgmhcNQ6HrdvU5Oz4nxq0nqI7w9LU",
  authDomain: "kioscovirtual-9f240.firebaseapp.com",
  projectId: "kioscovirtual-9f240",
  storageBucket: "kioscovirtual-9f240.appspot.com",
  messagingSenderId: "574565265561",
  appId: "1:574565265561:web:013a87ae65a16d8c4e4808",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
