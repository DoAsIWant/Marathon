import s from './style.module.css';
import {useContext,useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {PokemonContext} from "../../context/pokemonContext"
import PokemonCard from "../../Components/PokemonCard"
import PlayBoard from "../Board/component/playBoard"

const BoardPage = () => {
    const {pokemon} = useContext(PokemonContext);
    const history = useHistory();
    const [board,setBoard] = useState([]);

    const counterWin = (board,player1,player2)=>{
       let player1Count = player1.length;
       let player2Count = player2.length;
       board.forEach(item=>{
           if(item.card.posession === "red"){
               player2Count++;
           }

           if(item.card.posession === "blue"){
               player1Count++;
           }
       })

       return [player1Count,player2Count];
    }

    const [player1, setPlayer1] = useState(()=>{
        return Object.values(pokemon).map(item=>({
         ...item, posession:"blue",
        }))
    });
    const [player2, setPlayer2] = useState([]);
    const[chooseCard,setChoose] = useState(null);
    const[steps,setSteps] = useState(0);

    if(Object.keys(pokemon).length === 0){
        history.replace("/game");
    }

    const handlerBoard =  async (position)=>{
        console.log(position);
        if(chooseCard){
            const params = {
                position,
                card: chooseCard,
                board
            }
        

        const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        const request = await res.json();

        console.log(request);
        

        if(chooseCard.player === 1){
            setPlayer1(prev=>prev.filter(item=>item.id!==chooseCard.id))
        }

        if(chooseCard.player === 2){
            setPlayer2(prev=>prev.filter(item=>item.id!==chooseCard.id))
        }

        setBoard(request.data)

        setSteps(prev=>{
            const newStep = prev++;
            return newStep;
        })
    }
    }

    useEffect(async()=>{
      const boardResponse = await fetch("https://reactmarathon-api.netlify.app/api/board");
      const responce = await boardResponse.json();
      setBoard(responce.data);

      const player2Response = await fetch("https://reactmarathon-api.netlify.app/api/create-player");
      const responcePlayer2 = await player2Response.json();
      setPlayer2(()=>{return responcePlayer2.data.map(item=>({
        ...item, posession:"red",
       }))});

    },[])

    useEffect(()=>{
      if(steps === 9){
        const [count1, count2] = counterWin(board,player1,player2);

        if(count1>count2){
            alert("Win");
        } else if(count2>count1){
            alert("LOSE");
        } else{
            alert("DRAW")
        }
        PokemonContext.onSelectedPokemon(player2,player1);
        history.push("/game/finish");
      }
    },[steps])
    
    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                        <PlayBoard player={1} onClickCard={(card)=>{
                            setChoose(card);
                        }} cards={player1}></PlayBoard>
						</div>
                            <div className={s.board}>
                                {board.map(item=>(
                                <div onClick={()=>!item.card && handlerBoard(item.position)} 
                                    key={item.position} className={s.boardPlate}>
                                    {
                                        item.card && <PokemonCard {...item.card} active minimize></PokemonCard>
                                    }
                                </div>))}
                                
                            </div>

            <div className = {s.playerTwo}>

               <PlayBoard player={2} onClickCard={(card)=>{
                            setChoose(card);
                        }} cards={player2}>

               </PlayBoard>
            </div>
        </div>
    );
};

export default BoardPage;