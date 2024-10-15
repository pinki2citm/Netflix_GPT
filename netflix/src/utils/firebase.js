// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzu4ADEuTTawiojDlCzqKnD7yHjfcypW4",
  authDomain: "netflixgpt-46b0d.firebaseapp.com",
  projectId: "netflixgpt-46b0d",
  storageBucket: "netflixgpt-46b0d.appspot.com",
  messagingSenderId: "578740468341",
  appId: "1:578740468341:web:a40d5b84fc4c01798f563c",
  measurementId: "G-B8T6CQK6TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();