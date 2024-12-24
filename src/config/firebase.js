import { initializeApp } from "firebase/app";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyDY60N_dohz9B5ruwagwg3hNHo52rVDtLM",
  authDomain: "confrence-ticket-software.firebaseapp.com",
  databaseURL: "https://confrence-ticket-software-default-rtdb.firebaseio.com",
  projectId: "confrence-ticket-software",
  storageBucket: "confrence-ticket-software.firebasestorage.app",
  messagingSenderId: "762719347318",
  appId: "1:762719347318:web:602da5086b09eeaa267557",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
