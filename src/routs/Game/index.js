import {useContext, useState} from "react";
import StartPage from "../Start";
import BoardPage from "../Board";
import Finish from "../Finish";
import {Switch,Route,useRouteMatch} from "react-router-dom"
import {PokemonContext} from "../../context/pokemonContext";

const GamePage = () => {

  const match = useRouteMatch();

  const handler = (key,pokemon)=>{
    setSelectedPokemon((prev)=>{
      if(prev[key]){
        const copy = {...prev}
        delete copy[key];

        return copy;
      }
      return {
        ...prev, [key]: pokemon
      }
    })
  }

  const[selectedPokemon, setSelectedPokemon] = useState({});
  return (
    <PokemonContext.Provider value={{pokemon: selectedPokemon , onSelectedPokemon:handler}}>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={Finish} />
      </Switch>
      </PokemonContext.Provider>
  );
};

export default GamePage;