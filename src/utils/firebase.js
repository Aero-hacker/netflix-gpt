// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClNE_YIP1Ph6GQ3Tbe31zgZhemOPNhUeA",
  authDomain: "netflixgpt-333.firebaseapp.com",
  projectId: "netflixgpt-333",
  storageBucket: "netflixgpt-333.appspot.com",
  messagingSenderId: "153974298502",
  appId: "1:153974298502:web:2d94723981efe24223fe07",
  measurementId: "G-S02XVJVWEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();