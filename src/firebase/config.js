// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAup5K7Nz87e5Iukut1PudHn2wV1bc5690",
    authDomain: "landspice-d9db5.firebaseapp.com",
    projectId: "landspice-d9db5",
    storageBucket: "landspice-d9db5.firebasestorage.app",
    messagingSenderId: "1026404822173",
    appId: "1:1026404822173:web:62f639fc418afb1905f874",
    measurementId: "G-K9J2THRERY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export { app, analytics };
export { app, analytics };
