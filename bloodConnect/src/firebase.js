import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDmCgn0w2_THV4kla1J0eLeJN9By4qNWqo",
    authDomain: "bloodconnect-cb439.firebaseapp.com",
    projectId: "bloodconnect-cb439",
    storageBucket: "bloodconnect-cb439.appspot.com",
    messagingSenderId: "543546317838",
    appId: "1:543546317838:web:191b92b9a78105e7def05f",
    measurementId: "G-M0G1GB6K45"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);