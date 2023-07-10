const axios = require('axios')
const allPokemonsApp= async()=> {
    try{
        //utilizo un limite de 60 para trabajar mas rapidamente, pero funciona igual de bien trayendo los 1281 que hay en total 
        const url = ('https://pokeapi.co/api/v2/pokemon?limit=60');
        //Utilizo axios para hacer una solicitud GET a la URL y guardo la respuesta en la variable data. El uso de await asegura que la solicitud se resuelva antes de continuar con el siguiente código.
         const { data } = await axios(url)
         //creo un arreglo de promesas. Por cada Pokémon en la lista obtenida, se crea una promesa que hace una solicitud a la URL del Pokémon para obtener información detallada.
         const allPromises = data.resultado.map(async(character)=>{
            return await axios(character.url)
         })
         //Se utiliza Promise.all para esperar a que todas las promesas en allPromises se resuelvan. El resultado es un arreglo de respuestas de las solicitudes a las URLS de los Pokémon
         const allCharacters = await Promise.all(allPromises).then((responsePromise)=>{

            //Se procesa cada respuesta para extraer información específica de cada Pokémon, como su nombre, imagen
             const infoPokemons= responsePromise.map(character =>{
                return{
                     name: data.name,
                     id: data.id,
                     image: data.sprites.other.home.front_default,
                     life: data.stats[0].base_stat,
                     attack: data.stats[1].base_stat,
                     defense: data.stats[2].base_stat,
                     speed: data.stats[5].base_stat,
                     height: data.height,
                     weight: data.weight,
                     types: data.types.map(element => element.type.name)
                }

                })
                //  se devuelve el arreglo pokemonsInfo que contiene la información de todos los Pokémon
                return infoPokemons;
            })
         return allCharacters

    }catch (error){
        return error.message

    }
}

module.exports = allPokemonsApp;