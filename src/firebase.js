
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlLscWVgOwMudir8xVYulaiS9QcXWZ36M",
  authDomain: "meesho-clone-dddd4.firebaseapp.com",
  projectId: "meesho-clone-dddd4",
  storageBucket: "meesho-clone-dddd4.appspot.com",
  messagingSenderId: "160054993395",
  appId: "1:160054993395:web:8ccdbca955cba6906e3286"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{app,auth};