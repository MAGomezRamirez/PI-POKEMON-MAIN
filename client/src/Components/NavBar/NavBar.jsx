import "../NavBar/NavBar.styles.css";
import { NavLink } from "react-router-dom";

const Nav = ()=> {
    return(
        <div className="Nav">
            <div className="container">
            <button className="home"><NavLink to="/home">Home</NavLink></button>
            <button className="types"><NavLink to="/types">Types</NavLink></button>
            <button className="crear"><NavLink to="/post">Crear Pokemón</NavLink></button>
        </div>
    
     </div>
    )
}

export default Nav;