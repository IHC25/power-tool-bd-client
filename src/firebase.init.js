// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_OgDmCsnAVnE_bjLA6wrPCjKrHLgxJPU",
  authDomain: "power-tool-bd.firebaseapp.com",
  projectId: "power-tool-bd",
  storageBucket: "power-tool-bd.appspot.com",
  messagingSenderId: "93443525680",
  appId: "1:93443525680:web:e44bb500e399edd260f1f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
