const {Pokemon}= require('../db');

const eliminarPokemon = async (name)=> {
    try{
        const pokemon= await Pokemon.findOne({ where: { name }});
        //recibo el nombre por query y le pido a BD que encuentre uno donde coincida el nombre
        if(!pokemon){
            return false;
        }

        await pokemon.destroy();//Si lo encuentra uso destroy para eliminarlo
        return true;
    }catch(error){
        throw new Error('Error al eliminar el pokemon');

    }
};

module.exports =  eliminarPokemon;