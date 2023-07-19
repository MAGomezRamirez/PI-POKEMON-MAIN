const { Router } = require('express');
const PokemonRoute = require('./pokemonRoute');
const TypeRoute = require('./typeRoute')


const router = Router();

router.use('/pokemons',PokemonRoute)
router.use('/types', TypeRoute)




module.exports = router;
