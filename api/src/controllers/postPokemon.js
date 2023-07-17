
const {Pokemon,Type} = require("../db.js")

async function createPokemon( name,hp,attack,defense,speed,height,weight,image,typeId ){//Creo un nuevo objeto de pokemon en la BD
    const newPokemon = await Pokemon.create({//con estas propiedades
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
        typeId
    })
    await Promise.all(typeId.map(async (element) => {//Realizo una búsqueda en la tabla type de la BD para encontrar registros que coincidan con el nombre del tipo actual

        const buscar= await Type.findAll({
            where:{nombre: element}
        });

        await newPokemon.addType(buscar) // asociacion entre el nuevo pokemon y el tipo encontrado

    }));
    return 'Los datos de '+name+' han sido guardado con exito'

}

module.exports=createPokemon;