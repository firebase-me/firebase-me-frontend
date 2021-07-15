import firebase from 'firebase'

// copy the config from the console https://console.firebase.google.com/u/0/project/sign-11111/settings/general/
// const firebaseConfig = {
//   apiKey: "AIzaSyBKjzb30t6rTFzaZLW6uaSug5rmW6C78-U",
//   authDomain: "fire-base-me.firebaseapp.com",
//   databaseURL: "https://fire-base-me.firebaseio.com",
//   projectId: "fire-base-me",
//   storageBucket: "fire-base-me.appspot.com",
//   messagingSenderId: "798485785604",
//   appId: "1:798485785604:web:2185699d2b037f40409951",
//   measurementId: "G-4ECXRCCNTL"
// };

const firebaseConfig = {
  apiKey: "AIzaSyATPkHM0DCC2t7TbnPtkobTs-Zor7bgkGs",
  authDomain: "spaceboy-project.firebaseapp.com",
  projectId: "spaceboy-project",
  storageBucket: "spaceboy-project.appspot.com",
  messagingSenderId: "1031566095365",
  appId: "1:1031566095365:web:72cf11da1c4a2dd1a5d86c",
  measurementId: "G-2DJ0XXDF2B"
}


let app = null
// prevent initializing firebase more than once
if (!firebase.apps.length) { 
  app = firebase.initializeApp(firebaseConfig)
}
// inject it so it can be accessed as this.$firebase inside the project
export default (ctx, inject) => {
  inject('firebase', firebase)
}