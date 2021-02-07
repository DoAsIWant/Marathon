import s from "./Navbar.module.css";
import cn from "classnames";

const Navbar = ({onChangeState,isActive,bgActive=false})=>{
    return (
        <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
        <div className={s.navWrapper}>
            <p className={s.brand}>
      LOGO
    </p>
    <a onClick = {onChangeState} className={cn(s.menuButton, {[s.active]:isActive})}>
      <span />
    </a>
  </div>
</nav>
    )

}

export default Navbar;