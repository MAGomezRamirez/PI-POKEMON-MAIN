import React from 'react'
import { Link } from 'react-router-dom';
import "./Landing.styles.css";
import Pikachu from '../../assets/Imagen1.jpg'

const Landing = () =>{
	return (
		<div className="componentContainer">
			<div className="welcomeContainer">
				<h1 className="title">
					Welcome to an Awesome Pokemon App
				</h1>
				<h2 className="title">Click Pikachu</h2>
				<Link to="/home">
					<img src={Pikachu} alt="pikachu-chocolate" />
				</Link>
			</div>
		</div>
	);
};

export default Landing;