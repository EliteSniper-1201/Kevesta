import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDETl5diKbDoNTI_MUZDFgnTPpSkbrSvoM",
  authDomain: "greenbay-chat.firebaseapp.com",
  databaseURL: "https://greenbay-chat.firebaseio.com",
  projectId: "greenbay-chat",
  storageBucket: "greenbay-chat.firebasestorage.app",
  messagingSenderId: "935587814271",
  appId: "1:935587814271:web:c21862c9f0504b9975184a"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithPhoneNumber, RecaptchaVerifier };