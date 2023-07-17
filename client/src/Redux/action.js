import { GET_TYPES, 
         GET_All_POKEMONS, 
         GET_POKEMON_BY_ID, 
         GET_POKEMON_BY_NAME, 
         FILTER_TYPE, 
         POST_POKEMON, 
         ORDER_POKEMONS, 
         DELETE_POKEMON} 
         from './action-types';
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001/';


export const getTypes = ()=>{//Llamo a todos los tipos de Pokemon desde la API
   return async (dispatch) =>{
     try{
         const {data}=await axios.get('/types')// Obtengo la respuesta de la API y los guardo en la variable Data
             return dispatch({type: GET_TYPES, payload:data});// Esto indica que se ha obtenido la información de los tipos de Pokémon y se pueden utilizar
    }catch (error){
        console.log('Error al obtener los tipos de pokemon', error)

    }
  };
};

export const getAllPokemons = ()=>{
    return async(dispatch) =>{
        const {data}=await axios.get('/pokemons')
        return dispatch({type: GET_All_POKEMONS, payload: data})
    }
}

export const GetPokemonById = (id)=>{
    return async (dispatch)=>{
        let info = await axios.get(`/pokemons/${id}`);
        return dispatch({type: GET_POKEMON_BY_ID, payload: info.data})
    }
}

export const getPokemonByName = (payload) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`/pokemons?name=${payload}`);
        dispatch({ type: GET_POKEMON_BY_NAME, payload: data });
      } catch (error) {
        console.log('Error al obtener el nombre del Pokémon:', error);
        throw new Error('Error al obtener el nombre del Pokémon');
      }
    };
  };

export const filterType= (payload)=>{
    return{ type: FILTER_TYPE, payload }
}

export const postPokemon = (payload) => {
    return async (dispatch) => {
      try {
        const respuesta = await axios.post("http://localhost:3001/pokemons", payload);
        dispatch({
          type: POST_POKEMON,
          payload: respuesta.data,
        });
      } catch (error) {
        throw new Error('Error al enviar el Pokémon');
      }
    };
  };

  export const deletePokemon = (payload) => {
    return async (dispatch) => {
      try {
        const informacion = await axios.delete(`/pokemons?name=${payload}`);
        dispatch({ type: DELETE_POKEMON, payload: informacion.data });
      } catch (error) {
        console.log('Error al eliminar el Pokémon:', error);
        throw new Error('Error al eliminar el Pokémon');
      }
    };
  };

export const orderPokemons = (payload)=>{
    return { type: ORDER_POKEMONS, payload: payload}
}


