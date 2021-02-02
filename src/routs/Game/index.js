import React from "react";
const GamePage = ({onChangePage})=>{
    return(
        <div>
           <button onClick={onChangePage("game")} className ="btn-danger"></button>
        </div>
    )
}

export default GamePage;