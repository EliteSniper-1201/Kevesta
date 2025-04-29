// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDETl5diKbDoNTI_MUZDFgnTPpSkbrSvoM",
  authDomain: "greenbay-chat.firebaseapp.com",
  databaseURL: "https://greenbay-chat.firebaseio.com",
  projectId: "greenbay-chat",
  storageBucket: "greenbay-chat.appspot.com", // fix: should be .appspot.com
  messagingSenderId: "935587814271",
  appId: "1:935587814271:web:c21862c9f0504b9975184a"
};

// Initialize Firebase if it hasn't been initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { firebase, auth, firebaseConfig };
