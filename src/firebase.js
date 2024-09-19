import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBIf2v4BPTw6pyqpoe2hVcMD7LeHrVbKYM",
  authDomain: "chat-42770.firebaseapp.com",
  projectId: "chat-42770",
  storageBucket: "chat-42770.appspot.com",
  messagingSenderId: "823763438446",
  appId: "1:823763438446:web:4069abe17d54ce658ecf7f",
  measurementId: "G-8L9Y97GG0Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app)
