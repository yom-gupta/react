// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getMessaging,getToken} from 'firebase/messaging'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWCQ46C6IR3IkEfFm-C4dGWeKeJI2o5Hs",
  authDomain: "test-7d4c6.firebaseapp.com",
  databaseURL: "https://test-7d4c6-default-rtdb.firebaseio.com",
  projectId: "test-7d4c6",
  storageBucket: "test-7d4c6.appspot.com",
  messagingSenderId: "435268862353",
  appId: "1:435268862353:web:6f5975e088e1caac425a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app)
export default app
