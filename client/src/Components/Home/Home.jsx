import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAllPokemons } from "../../Redux/action";

const Home = () =>{
    const pokemons = useSelector((state)=> state.pokemons);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPokemons());
    }, [dispatch]);

    return (
        <div>
            <h1>Holaa</h1>
            {pokemons.map((pokemon)=>(
                <div key={pokemon.id}>
                    <p>{pokemon.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;