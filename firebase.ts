import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtt1vbqXOzCSyDJ10U_kU39aesdi05r7o",
  authDomain: "chatgpt-clone-ai.firebaseapp.com",
  projectId: "chatgpt-clone-ai",
  storageBucket: "chatgpt-clone-ai.appspot.com",
  messagingSenderId: "66216443897",
  appId: "1:66216443897:web:c61f76e3d36d1c3ba90728",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
