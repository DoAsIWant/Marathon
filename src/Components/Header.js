import  s from "./Header.module.css";

const Header = ({title,descr,onclickButton})=>{

    const handleClick = ()=>{
        console.log("<Header>");
        onclickButton("game");
    }
    return(
        <>
        <header className={s.root}>
            <div className={s.forest}></div>
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
