// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqOyzeNWCi8JvxPWyN8VPR4hlgmZrG3ps",
  authDomain: "cars-doctor-ac09e.firebaseapp.com",
  projectId: "cars-doctor-ac09e",
  storageBucket: "cars-doctor-ac09e.appspot.com",
  messagingSenderId: "479290425910",
  appId: "1:479290425910:web:eaca26d22549b345bf4e97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;