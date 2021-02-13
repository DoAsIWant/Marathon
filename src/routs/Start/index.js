import {React,useState,useEffect,useContext} from "react";
import PokemonCard from "../../Components/PokemonCard"
import {useHistory} from "react-router-dom";
import {FirebaseContext} from "../../context/firebaseContext";
import {PokemonContext} from "../../context/pokemonContext"
import s from "./start.module.css";


  
const Start = ()=>{
    const history = useHistory();
    const [pokemons,setPokemons] = useState({});
    const pokemonContext = useContext(PokemonContext);
    const firebase = useContext(FirebaseContext);
    
    console.log(pokemonContext)
    const clickGame = ()=>{
       history.push("/");
    }
    
    useEffect(() => {
      firebase.getPokemonSoket((pokemons)=>{
        setPokemons(pokemons);
      })
   }, []);

   const onChangeSelected = (key) => {
      const pokemon = {...pokemons[key]}
      pokemonContext.onSelectedPokemon(key,pokemon);
     setPokemons((prestate)=>(        
      {
        ...prestate, [key]:{...prestate[key],selected:!prestate[key].selected}
     }))
    }
    
    const StartHandler = ()=>{
       history.push("/game/board")
    }
   
    return(
        <div>
           <button onClick={clickGame} className ="btn-danger">Домой</button>
           <button disabled={Object.keys(pokemonContext.pokemon).length > 5} onClick = {StartHandler} 
           className={s.start}>Начать</button>
           
           <div className={s.flex}>
                    {
                             Object.entries(pokemons).map(([key, item]) => {
                               return <PokemonCard
                                className={s.card}
                                key={key}
                                id={item.id}
                                name={item.name}
                                values={item.values}
                                img={item.img}
                                type={item.type}
                                active={true}
                                onClickCard={()=>{if(Object.keys(pokemonContext.pokemon).length < 5 
                                 || item.selected){
                                 onChangeSelected(key)
                                }}}
                                selected = {item.selected}
                                 />})
                        }
                      
                </div>
        </div>
      
    )
}

export default Start;