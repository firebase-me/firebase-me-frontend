import firebase from 'firebase'

// copy the config from the console https://console.firebase.google.com/u/0/project/sign-11111/settings/general/
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
let app = null
// prevent initializing firebase more than once
if (!firebase.apps.length) { 
  app = firebase.initializeApp(firebaseConfig)
}
// inject it so it can be accessed as this.$firebase inside the project
export default (ctx, inject) => {
  inject('firebase', firebase)
}