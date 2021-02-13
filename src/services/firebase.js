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
    class FireBase {
   constructor(){

     this.fire = firebase;
     this.database = this.fire.database();
   }

   getPokemonSoket = (cb)=>{
     this.database.ref("pokemons").on("value",(snapshot)=>{
       cb(snapshot.val());
    })
   }
   getPokemonsOnce = async()=>{
     return await this.database.ref("pokemons").once("value").then(snapshot=>snapshot.val())
   }

   postPokemon = (key,pokemon)=>{
     this.database.ref(`pokemons/${key}`).set(pokemon)
   }

   addPokemon = (data,cb)=>{
    const newKey = this.database.ref().child("pokemons").push().key
    this.database.ref('pokemons/' + newKey).set(data).then(()=>cb)
   }

  
 }

 export default FireBase;