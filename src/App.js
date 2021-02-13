import React from "react"
import GamePage from "./routs/Game";
import HomePage from "./routs/Home";
import About from "./routs/About";
import Contacts from "./routs/Contacts";
import NotFound from "./routs/NotFound";
import MenuHeader from "./Components/MenuHeader";
import Footer from "./Components/Footer";
import {Route,Switch,useLocation} from "react-router-dom";
import s from "./style.module.css"
import cn from "classnames";
import FireBase from "./services/firebase";
import {FirebaseContext} from "./context/firebaseContext";



const App = ()=>{
   const location = useLocation();
   const ispadding = location.pathname === "/" || location.pathname === "/game/board"
     return(
  <FirebaseContext.Provider value={new FireBase()}>
      <Switch>
       <Route>
         <>
         <MenuHeader bgActive={!ispadding}></MenuHeader>
         <div className = { cn(s.wrap, {[s.isHomePage]:ispadding})}>
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
   </FirebaseContext.Provider>
     )
  

}

export default App;