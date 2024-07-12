import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBITw91JdIhKXCDw-dduZUAU4iHq0Fj1w",
  authDomain: "portfolio-4cf62.firebaseapp.com",
  projectId: "portfolio-4cf62",
  storageBucket: "portfolio-4cf62.appspot.com",
  messagingSenderId: "757597927841",
  appId: "1:757597927841:web:1b1611e3867a96ffefb3e0",
  measurementId: "G-FNE0Q7EK2Q",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const homeRef = doc(db, "Content", "home");
export const workRef = doc(db, "Content", "work");
export const skillRef = doc(db, "Content", "skill");
export const aboutRef = doc(db, "Content", "about");
export const passcodeRef = doc(db, "Auth", "passcode");
export const contactRef = doc(db, "Content", "contact");
export const educationRef = doc(db, "Content", "education");
export const experienceRef = doc(db, "Content", "experience");
