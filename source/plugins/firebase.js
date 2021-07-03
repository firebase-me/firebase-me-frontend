import * as firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBKjzb30t6rTFzaZLW6uaSug5rmW6C78-U",
    authDomain: "fire-base-me.firebaseapp.com",
    databaseURL: "https://fire-base-me.firebaseio.com",
    projectId: "fire-base-me",
    storageBucket: "fire-base-me.appspot.com",
    messagingSenderId: "798485785604",
    appId: "1:798485785604:web:2185699d2b037f40409951",
    measurementId: "G-4ECXRCCNTL"
  };

  let app = null;
  if(!firebase.app.length)
  app = firebase.initializeApp(firebaseConfig);

  export default firebase;