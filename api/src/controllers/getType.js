const axios = require("axios");
const {Pokemon,Type} = require("../db")
//Traemos los tipo de Pokémon

const getType= async(req, res)=> {//funcion asincrona
    //Traemos los diferentes tipos de la API, y utilizamo axios para hacer la solicitud a la direccion web

    try{

        const respuesta= await axios.get("https://pokeapi.co/api/v2/type");
        const types= respuesta.data.resuls.map(type =>type.name) //El resultado de la solicitud se solicita en la constante respuesta
        //Utlizo map para extraer los nombres de los tipos de Pokémon y se almacenan en la variable tipos
        return types;
    }catch(error){
        throw new Error('No se encontro los Pokemon Type desde la API.');

    }
}

module.exports=getType;
   