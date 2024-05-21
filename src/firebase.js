import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDbOV3l0cWPbCluQ2iJK8iCRRBgKdmpf4k",
  authDomain: "stickerproject-3d21a.firebaseapp.com",
  projectId: "stickerproject-3d21a",
  storageBucket: "stickerproject-3d21a.appspot.com",
  messagingSenderId: "896243589828",
  appId: "1:896243589828:web:2e3e13fcae9076b1961f91",
  measurementId: "G-Z7JBT22DKC"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth= getAuth(app);
const provider = new GoogleAuthProvider(); 
const storage = getStorage(app);

export {auth,provider,storage};
export default db;