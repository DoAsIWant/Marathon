import {useState} from "react"
import Menu from "./Menu";
import Navbar from "./Navbar";

const MenuHeader = ()=>{

    const [active,setActive] = useState(true);

    const handleState = ()=>{
        setActive(!active)
    }
    return(
        <>
    <Menu isAcive = {active}></Menu>
    <Navbar  onChangeState = {handleState}></Navbar>
        </>
    )

}

export default MenuHeader;