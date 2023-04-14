import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDovAeTzvgVwsFeKVo9DK55HwYBx93v7A4",
  authDomain: "web-a4-b92b0.firebaseapp.com",
  projectId: "web-a4-b92b0",
  storageBucket: "web-a4-b92b0.appspot.com",
  messagingSenderId: "76620330771",
  appId: "1:76620330771:web:ccdf04740d3058d9b04ce6"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
