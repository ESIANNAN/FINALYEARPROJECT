import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0f7g_akeqXB4iCDwyd2N0HUoDrUVTPo8",
  authDomain: "sankofa-language-app.firebaseapp.com",
  projectId: "sankofa-language-app",
  storageBucket: "sankofa-language-app.firebasestorage.app",
  messagingSenderId: "721230750026",
  appId: "1:721230750026:web:a1d50315c905b4efab61b3",
  measurementId: "G-LKXJPT12CC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);







