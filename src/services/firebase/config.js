import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLGosBfoUbyTXBMdXPno2HzXxV69bRi_g",
  authDomain: "fakegram-1a8ef.firebaseapp.com",
  databaseURL: "https://fakegram-1a8ef-default-rtdb.firebaseio.com",
  projectId: "fakegram-1a8ef",
  storageBucket: "fakegram-1a8ef.appspot.com",
  messagingSenderId: "142610272428",
  appId: "1:142610272428:web:06a61199dd180104a94f09",
  measurementId: "G-50JDS6LWBV"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);