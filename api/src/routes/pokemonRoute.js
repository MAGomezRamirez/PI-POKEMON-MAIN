const { Router }= require('express');
const axios= require (áxios);
const router = Router();
const {Pokemon, Type}= require('../db');
const getAllApi = require('../controllers/getAllApi');
const getPokemonById= require('../controllers/getPokemonById');
const postPokemon = require('../controllers/postPokemon');
const validatePokemon= require('../controllers/validatePokemon');
const deletePokemon = require('../controllers/deletePokemon');
const pokemonByName = require('../controllers/pokemonByName');


//Traer todos los pokemones
router.get('/', async (req, res)=> {
    try{
        const name = req.query.name;
        const allPokemon= await getAllApi(); //con getAll traemos todos los pomenones de la DB y la API
        if(!name){//si no hay ingresado ningun nombre, devuelve el total de todos(significa que no se busco nada)
            return res.status(200).json(allPokemon);
        }
        if(name){//
            const namePokemones = allPokemon.filter((e)=> e.name.toLowerCase()=== name.toLowerCase())
            return res.status(200).json(namePokemones);
        }
    } catch(error){
        return res.status(500).send('Internal server error');

    }
})

//Buscar Pokmones por ID
router.get('/:id', async (req, res) =>{
    try{
        //Recibo el id por params y mediante el controller getPokemonById lo buscamos con axios, si no se encuentra recibimos 404
        const idPokemon= req.params.id;
        const pokemon = await getPokemonById(idPokemon);
        if(!pokemon){
            return res.status(404).send('No se encontro el pokemon')
        }
        res.status(200).send(pokemon)
    } catch(error){
        res.status(500).json({ error: 'Error al buscar el Pokemon'});
    }
});

//Crear pokemon

router.post('/', async (req, res) => {
    try {
    //estos son los datos que vamos a recibir en el body
      const {name, hp, attack, defense, speed, height, weight, image,typeId} = req.body;
    //se los pasamos directamente al controller postPokemon que se encargara de guardar todo en la DB
      const pokemon = await postPokemon(name, hp, attack, defense, speed, height, weight, image,typeId)
  
      if (!pokemon) {
        return res.status(400).json({ message: "Not created" });
      }
  
      return res.status(201).json(pokemon);
    } catch (error) {
      console.error(error.message);
      return res.status(404).send("Error en alguno de los datos enviados");
    }
  });

  //Eliminar Pokemon

  router.delete('/', async (req,res)=>{
    const {name} = req.query
    try{
        const eliminarPokemon= await deletePokemon(name)
        if (eliminarPokemon) {
            return res.status(200).json({message: `El pokemon ${name} se elimino con exito` })
        } else{
            return res.status(404).json({message: `El pokemon ${name} no se encontro`})
        }
    }catch(error) {
        return res.status(500).json({message: "Error al eliminar el pokemon"})

    }
  })

  module.exports = router;