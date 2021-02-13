import {PokemonContext} from "../../context/pokemonContext"
import {useContext,useState} from "react";

const Finish = ()=>{
    const [finish,setFinish] = useState(null);
    const pokemon = useContext(PokemonContext);

    return(
        <div>
           
        </div>
    )
}

export default Finish;