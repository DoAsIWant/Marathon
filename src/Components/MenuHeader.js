import {useState} from "react"
import Menu from "./Menu";
import Navbar from "./Navbar";
import s from "./MenuHeader.module.css";

const MenuHeader = ({bgActive})=>{

    const [active,setActive] = useState(null);

    const handleState = ()=>{
        setActive(prevState=>!prevState)
    }
    return(
        <>
    <Menu isActive = {active}></Menu>
    <Navbar onChangeState = {handleState} isActive={active} bgActive ={bgActive}></Navbar>
        </>
    )

}

export default MenuHeader;