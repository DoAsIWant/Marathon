import  s from "./Header.module.css";
import {useHistory} from "react-router-dom";
const Header = ({title,descr})=>{
     
    const history = useHistory();
    const handleClick = ()=>{
       history.push("/game")
    }
    return(
        <>
        <header className={s.root}>
            <div className={s.forest}></div>
             <div className = {s.silhouette}/>
               <div className = {s.moon}></div>
            <div className={s.container}>
               {title && <h1>{title}</h1> }
                {descr && <p>{descr}</p>}
                <button onClick={handleClick}>
                    Start
                </button>
             </div>
        </header>
        </>
    )
}

export default Header;
