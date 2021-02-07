import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyA1WuLDWqVW_1O0NfayLVtUPs28P5a4oI4",
    authDomain: "my-first-pro-703ba.firebaseapp.com",
    databaseURL: "https://my-first-pro-703ba-default-rtdb.firebaseio.com",
    projectId: "my-first-pro-703ba",
    storageBucket: "my-first-pro-703ba.appspot.com",
    messagingSenderId: "71150808216",
    appId: "1:71150808216:web:7fcce8fd1acd8dcca834ed"
  };

  firebase.initializeApp(firebaseConfig);
 export const fire = firebase;
 export const database = fire.database();
 export default database;