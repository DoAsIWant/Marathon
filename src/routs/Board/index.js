import s from './style.module.css';
import {useContext} from "react";
import {PokemonContext} from "../../context/pokemonContext"
import PokemonCard from "../../Components/PokemonCard"
const BoardPage = () => {
    const {pokemon} = useContext(PokemonContext);
    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                           {Object.values(pokemon).map(item=>(
                               <PokemonCard
                               className={s.card}
                               key={item.id}
                               id={item.id}
                               name={item.name}
                               values={item.values}
                               img={item.img}
                               type={item.type}
                               active = {true}
                               minimize
                               selected = {item.selected}
                                />
                           ))}
						</div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;