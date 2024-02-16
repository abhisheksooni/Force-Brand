// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYotAdA_JGf4XNwLYnJzJ8n3U2Ifbc7N8",
  authDomain: "ecommercep1-c7a69.firebaseapp.com",
  projectId: "ecommercep1-c7a69",
  storageBucket: "ecommercep1-c7a69.appspot.com",
  messagingSenderId: "44012348489",
  appId: "1:44012348489:web:32adace6c0de0eb3bbcb98",
  measurementId: "G-Y1RRPG6N5P",
  databaseURL:"https://ecommercep1-c7a69-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);