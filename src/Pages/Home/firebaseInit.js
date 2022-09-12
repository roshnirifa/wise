// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDizEGciREceb95RmFe8moomQmMLuPX3Po",
    authDomain: "wise-ecommerce.firebaseapp.com",
    projectId: "wise-ecommerce",
    storageBucket: "wise-ecommerce.appspot.com",
    messagingSenderId: "988821809068",
    appId: "1:988821809068:web:6d3897c3d342c420247c09",
    measurementId: "G-02G5SD4V7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;