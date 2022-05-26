// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuxd8byszihNGZJzxPJBCTrZCoayzBB7w",
  authDomain: "photo-32e2c.firebaseapp.com",
  projectId: "photo-32e2c",
  storageBucket: "photo-32e2c.appspot.com",
  messagingSenderId: "1001251535019",
  appId: "1:1001251535019:web:dddb80df807bf2cbd81fee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage= firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {projectStorage,projectFirestore,timestamp};