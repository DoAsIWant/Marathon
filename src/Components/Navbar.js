import s from "./Navbar.module.css";
import cn from "classnames";

const Navbar = ({onChangeState})=>{
    return (
        <nav id={s.navbar}>
        <div className={s.navWrapper}>
            <p className={s.brand}>
      LOGO
    </p>
    <a onClick = {onChangeState()} className={cn(s.menuButton, s.active)}>
      <span />
    </a>
  </div>
</nav>
    )
}

export default Navbar;