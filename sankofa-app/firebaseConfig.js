// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd6EP_CjiI0ceyrQb0A-JzgBTFWLm1k-E",
  authDomain: "sankofa-app-bfef9.firebaseapp.com",
  projectId: "sankofa-app-bfef9",
  storageBucket: "sankofa-app-bfef9.appspot.com",
  messagingSenderId: "5608152629",
  appId: "1:5608152629:web:eb01e6cac767159b3b9b7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
 


export default app