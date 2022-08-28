// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5tVQXYYNkGTV6yavQ4sz1-2_Fvnave4c",
  authDomain: "siyab-arshad-portfolio.firebaseapp.com",
  projectId: "siyab-arshad-portfolio",
  storageBucket: "siyab-arshad-portfolio.appspot.com",
  messagingSenderId: "178205760545",
  appId: "1:178205760545:web:e578bd94e87d79ac67d760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app