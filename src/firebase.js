// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "nzconsultants-ca804",
//   storageBucket: "fgoBWozSN9eRD0uqojca",
//   messagingSenderId: "1088106622406",
//   appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDCZl8jCxsVAoNuMf7YMxMS2E61FC16i0I",
  authDomain: "nzconsultants-ca804.firebaseapp.com",
  projectId: "nzconsultants-ca804",
  storageBucket: "nzconsultants-ca804.appspot.com",
  messagingSenderId: "1088106622406",
  appId: "1:1088106622406:web:af8918da6443a78a0a16c7",
  measurementId: "G-04HR0BFG5H",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
