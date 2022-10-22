// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import { FB_API_KEY, FB_AUTH_DOMAIN, FB_PROJECT_ID, FB_STORAGE_BUCKET, FB_MESSAGING_SENDER_ID, FB_APP_ID, FB_MEASUREMENT_ID } from '@env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: `${FB_API_KEY}`,
  authDomain: `${FB_AUTH_DOMAIN}`,
  projectId: `${FB_PROJECT_ID}`,
  storageBucket: `${FB_STORAGE_BUCKET}`,
  messagingSenderId: `${FB_MESSAGING_SENDER_ID}`,
  appId: `${FB_APP_ID}`,
  measurementId: `${FB_MEASUREMENT_ID}`
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();


export default app;