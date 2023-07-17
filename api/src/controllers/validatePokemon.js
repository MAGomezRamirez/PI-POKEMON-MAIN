const axios= require('axios');
require('dotenv').config();
const {API_kEY}= process.env;
const URL= 'https://pokeapi.co/api/v2/pokemon?limit=60&'+API_kEY

async function validatePokemon(name){
    const info= await axios(URL);
    if(info.data.find(e=>e.name===name))//se comprueba si el nombre del Pokémon que se pasó como argumento
    return true
    return false
}

module.exports = validatePokemon;