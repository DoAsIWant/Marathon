import cn from "classnames";
import { useState } from "react";
import PokemonCard from "../../../../Components/PokemonCard"
import s from "../../component/playBoard/playBoard.module.css";

const PlayBoard = ({player,cards,onClickCard})=>{
    const[isSelected,changeSelected] = useState(null);
     return (
        <div>
            {
                  cards.map(item => {
                            return (
                        <div className = {cn(s.cardBoard,{[s.selected] : isSelected === item.id })}
                             onClick = {()=>{changeSelected(item.id)
                                onClickCard({
                                    ...item,player
                                })
                             }}>
                                <PokemonCard
                             key={item.id}
                             id={item.id}
                             name={item.name}
                             values={item.values}
                             img={item.img}
                             type={item.type}
                             active={true}
                             selected = {item.selected}
                             minimize
                              /></div>
                              )})
                    
                }
        </div>
     )
}

export default PlayBoard;