const axios = require ("axios");
const { Pokemon,Type } = require ("../db");
const getallApi= require("./getAllApi");
const getBd= require("./getBd")
//Busco primero en la base de datos

const bdPokemon = async(id)=> {
    try{
        //findOne nos permite encontrar en la tabla pokemón donde coincida el id, y tambien traemos type como atributo
        const pokemonBd= await Pokemon.findOne({
            where:{id},
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes : [],
                }
            }
        });
        //Verifico si encuentro el id en la base de datos y lo retorno
        if(pokemonBd) {
            return pokemonBd
        //si no se ecuentra en la base de datos, lo busco en la API    
        } else {
            const response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

            const types = response.data.types.map(element=>{
            //Extraigo los tipos de Pokemones del resultado de la respuesta, el cual se alamacena en un array con todos los datos
            //Utilizo el map para traer solo los nombres de los tipos
                return{
                    name: element.type.name
                }
            })
            //Creo un objeto que contiene diferentes atributos obtenidos de la api 
            const encontrarPokemon = {
                id:res.data.id,
                name: res.data.name,
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                speed: res.data.stats[5].base_stat,
                types: types,
                weight: res.data.weight,
                height: res.data.height,
                image: res.data.sprites.other["official-artwork"]["front_default"],
              };
         return encontrarPokemon
        }

    } catch (error){
        throw new Error('No se encontro el id del Pokemon');

    }
}

module.exports= bdPokemon