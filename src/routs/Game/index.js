import {useContext} from "react";
import StartPage from "../Start";
import BoardPage from "../Board";
import Finish from "../Finish";
import {Switch,Route,useRouteMatch} from "react-router-dom"
import { firebaseContext } from "../../context/firebaseContext";
import {pokemonContext} from "../../context/pokemonContext";

const GamePage = () => {
  const firebase = useContext(firebaseContext);
 
  const match = useRouteMatch();
  return (
    <pokemonContext.Provider value={{pokemon:[],setPokemons:(pokemon)=>{}}}>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={Finish} />
      </Switch>
      </pokemonContext.Provider>
  );
};

export default GamePage;