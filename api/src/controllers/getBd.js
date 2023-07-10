const axios = require("axios");
const {Pokemon, Type}= require ("../db");
const getType= require("./getType")// obtenemos los pokemon de la base de datos

const getBD= async()=>{//Esta función es asíncrona y se encarga de obtener los Pokémon y sus tipos de la base de datos.
    const typesApi= await getType();// se llama a la función getType para obtener los tipos de Pokémon desde la API

    //mapeamos quedandonos unicamente con el nombre de cada tipo de pokemon
    // ahora creamos en la tabla type tomando el array recien creado como referencia
    const createTypes= await Promise.all(typesApi.map(async(tipo)=>await Type.findOrCreate({where:{name:tipo}})))

    //Utilizo map nuevamente en crearTypes para extraer el primer elemento de cada array, (es un array de los tipos de la base de datos.)
    const typesDB = createTypes.map(array => array[0])
    try { 
        //Utilizo findAll para buscar registros en la tabla correspondiente de la base de datos. 
        const baseDatos = await Pokemon.findAll({
            include:{ //Utilizamos include para incluir información adicional, e incluimos el type como un atributo, por que los type estan guardados aparte en su propia tabla
                model: Type,
                attributes: ['name'],//Utilizamos attributes para especificar que atributos de la entidad "Type" utilizaremos, en este caso es name
                through:{
                    attributes:[],
                },
            }
        });
        return baseDatos;

    }catch(error){
        throw new Error('Base de dato no encontro todos lo pokemones y sus types');

    }
};
module.exports= getBD;
