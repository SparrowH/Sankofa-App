// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyConUEpd53ohY256s2EQ57OKlvpo6vuie4",

  authDomain: "sankofaapp-4fca8.firebaseapp.com",

  projectId: "sankofaapp-4fca8",

  storageBucket: "sankofaapp-4fca8.appspot.com",

  messagingSenderId: "68189834268",

  appId: "1:68189834268:web:4c3ac6f8944b2712fba3d9"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db };