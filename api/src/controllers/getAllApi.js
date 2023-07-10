const axios = require("axios");
const {Pokemon, Type} = require("../db");
const getPokemon= require("./getAllPokemon");
const getBd = require("./getBd")

const getAllApi= async ()=>{

    const dataApi= await getPokemon();//Devuelve datos de la Api
    const infoBd= await getBd(); //Devuelve datos de la base de datos
    const allInfo= dataApi.concat(infoBd)//Concateno los datos de la Api con la de la base de datos
    return allInfo; //Devuelto toda la información
};
module.export = getAllApi