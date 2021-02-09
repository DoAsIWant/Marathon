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


 class FireBase {
   constructor(){
     firebase.initializeApp(firebaseConfig);
     this.fire = firebase;
     this.database = this.fire.database();
   }

   getPokemonsOnce = async()=>{
     return await this.database.ref("pokemons").once("value").then(snapshot=>snapshot.val())
   }
 }

 export default FireBase;