import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCi473kbMndOb-XYgHaBVyOHjonH1WgpCE",
    authDomain: "we-chat-3703f.firebaseapp.com",
    projectId: "we-chat-3703f",
    storageBucket: "we-chat-3703f.appspot.com",
    messagingSenderId: "1080158647667",
    appId: "1:1080158647667:web:044507792778b1d6d74106"
  }).auth();