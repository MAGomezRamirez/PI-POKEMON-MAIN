import style from "../NavBar/NavBar.module.css"
import { NavLink } from "react-router-dom";

const Nav = ()=> {
    return(
        <div className={style.bar}>
            <button className={style.input}><NavLink to="/home">Home</NavLink></button>
            <button className={style.input}><NavLink to="/types">Types</NavLink></button>
            <button className={style.input}><NavLink to="/post">Crear Pokemón</NavLink></button>
        </div>
    )
}

export default Nav;