import React from "react"
import GamePage from "./routs/Game";
import HomePage from "./routs/Home";
import About from "./routs/About";
import Contacts from "./routs/Contacts";
import NotFound from "./routs/NotFound";
import MenuHeader from "./Components/MenuHeader";
import Footer from "./Components/Footer";
import {BrowserRouter,Route,Switch,useRouteMatch} from "react-router-dom";
import s from "./style.module.css"
import cn from "classnames";




const App = ()=>{
   const match = useRouteMatch("/")
     return(
  
    <Switch>
       <Route>
         <>
         <MenuHeader bgActive={!match.isExact}></MenuHeader>
         <div className = { cn(s.wrap, {[s.isHomePage]:match.isExact})}>
         <Switch>
            <Route path = "/" exact component={HomePage}/>
            <Route path = "/home" component = {HomePage}/>
            <Route path = "/game" component = {GamePage}/>
            <Route path = "/about" component = {About}/>
            <Route path= "/contacts" component = {Contacts}/> 
         </Switch>
         </div>
         <Footer></Footer>
         </>
         </Route>
          
         <Route component={NotFound}/>
      </Switch>
   
     )
  

}

export default App;