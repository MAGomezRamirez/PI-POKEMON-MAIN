const axios = require("axios");
const pokemon = require('./getAllPokemon')

async function PokemonByName(name){
    const allPokemon= await pokemon();
    //Filtro los pokemones que coincidan con el nombre
    const search = allPokemon.filter(pokemons => pokemons.name.toLowerCase().includes(name.toLowerCase()))
    if (search.length===0){
        throw new Error('No se encontro el nombre del pokemon')
    }

    return search;
}

module.exports= PokemonByName