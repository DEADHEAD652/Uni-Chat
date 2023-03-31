import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyAYoDVtgkFnNDeopgKf5AL8q1WczlssxFg",
    authDomain: "unichat-35a03.firebaseapp.com",
    projectId: "unichat-35a03",
    storageBucket: "unichat-35a03.appspot.com",
    messagingSenderId: "846369497805",
    appId: "1:846369497805:web:fab5ae9bcb8ca0b7f33f84"
  }).auth()