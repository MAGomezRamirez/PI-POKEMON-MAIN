const { Router } = require('express');
const router = Router();
const {Type} = require ('../db');
const getType = require('../controllers/getType')

router.get('/', async (req, res)=>{
    try{
        const typesApi = await getType();
        const crearTypes= await Promise.all(typesApi.map(async(tipo)=> await Type.findOrCreate({where:{name:tipo}})))
        const typesDb= crearTypes.map(array => array[0])
        res.status(200).json(typesDb);
    }catch(error){
        res.status(500).send('error')

    }
})

module.exports=router;