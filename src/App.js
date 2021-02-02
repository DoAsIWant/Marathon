import {React,useState} from "react"
import GamePage from "./routs/Game";
import HomePage from "./routs/Home";

const App = ()=>{
  const [page,setPage] = useState("app");

  const changePage = (page)=>{
    setPage(page);
  }
 

  switch(page){
    case "app":
      return <HomePage onChangePage={changePage} ></HomePage>
    case "game":
      return <GamePage onChangePage={changePage}></GamePage>
    default:
      return <HomePage></HomePage>
  }
}

export default App;