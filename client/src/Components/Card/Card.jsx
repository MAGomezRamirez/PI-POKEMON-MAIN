import {Link} from "react-router-dom";
import './Card.styles.css';
import React from "react";

const Card = ({id, name, types, image}) =>{
    return (

        <div className="Card">
  
         <img src={image} alt="pok" />
         <Link to={`/detail/${id}`} >  
         <h3>{name.toUpperCase()}</h3>
         </Link > 
        <h5>Types: {types.map(e=>e.name).join(", ")}</h5>
            
        </div>

    )
}

export default Card;
