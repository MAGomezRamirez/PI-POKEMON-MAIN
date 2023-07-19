import { NavLink } from "react-router-dom";
import React from 'react'
import { Link } from 'react-router-dom';
import "./Landing.styles.css";

const handleButtonClick = () => {

}
const Landing = () =>{
	return (
		<div className="landing">
			<div className="welcomeContainer">
				<h1 className="titulo">
					BIENVENIDO AL MUNDO POKEMON
				</h1>
				<div className="boton">
				<Link to="/home">
					<button className="button"onClick={handleButtonClick}><NavLink to="/home"> HOME </NavLink></button>
				</Link>
			</div>
		</div>
		</div>
	);
};

export default Landing;