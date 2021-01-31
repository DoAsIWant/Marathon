import React from "react";
import s from "./PokemonCard.module.css";
import cardBack from "../images/card-back-side.jpg"
import {useState} from "react"
const PokemonCard = ({name,id,type,img,top,bottom,left,right})=>{
    const[active,setActive] = useState(false);

    const clicker = ()=>{
       setActive(true)
    }
    return(
        <div className={s.root} onClick={clicker}>
      <div className={`${s.pokemonCard} ${active ? s.active : ""}`}>
        <div className={s.cardFront}>
            <div className={`${s.wrap} ${s.front}`}>
                <div className={`${s.pokemon} ${s[type]}`}>
                    <div className={s.values}>
                        <div className={`${s.count} ${s.top}`}>{top}</div>
                        <div className={`${s.count} ${s.right}`}>{right}</div>
                        <div className= {`${s.count} ${s.bottom}`}>{bottom}</div>
                        <div className={`${s.count} ${s.left}`}>{left}</div>
                    </div>
                    <div className={s.imgContainer}>
                        <img src={img} alt={name} />
                    </div>
                    <div className={s.info}>
                        <span className={s.number}>#{id}</span>
                        <h3 className={s.name}>{name}</h3>
                        <small className={s.type}>Type: <span>{type}</span></small>
                    </div>
                </div>
            </div>
        </div>

        <div className={s.cardBack}>
            <div className={`${s.wrap} ${s.back}`}>
                <img src={cardBack} alt="Сard Backed" />
            </div>
        </div>

    </div>
</div>

    )
}

export default PokemonCard;