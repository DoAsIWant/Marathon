import s from  "./Menu.module.css";
import {Link} from "react-router-dom";
const MENU = [{
  item:"HOME",
  to : "/welcome"
  },
  {
  item:"GAME",
  to: "/game",
  },
  {
   item : "ABOUT",
   to: "/about"
  },
  {
    item: "CONTACTS",
    about: "/contacts",
  }
]
const Menu = ({isActive})=>{
    return(
        
        <div className={`${s.menuContainer} ${isActive ? s.active: s.deactive}`}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                {MENU.map((el,index)=>{
                      return <li key={index}>
                          <Link to={el.to}>
                                {el.item}
                          </Link></li> 
                })}
                </ul>
            
               
            </div>
            </div>
    )
}

export default Menu;