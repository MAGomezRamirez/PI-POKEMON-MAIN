import { GET_TYPES, 
    GET_All_POKEMONS, 
    GET_POKEMON_BY_ID, 
    GET_POKEMON_BY_NAME, 
    FILTER_TYPE, 
    POST_POKEMON, 
    ORDER_POKEMONS, 
    DELETE_POKEMON} 
    from './action-types'; 
const initialState = {
    pokemons: [],//Total de pokemones
    filtered: [],//Los pokemones que vamos viendo, ordenando y filtrando
    types: [], //Los tipos de Pokemon
    detail: [],//el detail para cuando busquemos uno
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TYPES :
            return { ...state, types: action.payload
            }; 
        case GET_All_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                allPokemon: action.payload,
            };
        case GET_POKEMON_BY_ID:
            return{
                ...state,
                pokemonDetail: action.payload
            };
        case GET_POKEMON_BY_NAME:
            console.log("GET BY NAME");
			if (action.payload.length) {
				return { ...state, filtered: action.payload };
			} else {
				return { ...state, filtered: state.pokemons };
			};
     
        case ORDER_POKEMONS:
            const toOrder = [...state.filtered];
			const ordered = toOrder.sort((a, b) => {
				if (action.payload.sort === "attack") {
					if (action.payload.action === "ASCENDANT") {
						return a.attack - b.attack;
					} else {
						return b.attack - a.attack;
					}
				}
				if (action.payload.sort === "name") {
					if (action.payload.action === "ASCENDANT") {
						return a.name.localeCompare(b.name);
					} else {
						return b.name.localeCompare(a.name);
					}
				}
			});
			return {
				...state,
				filtered: ordered,
			};
        case POST_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemons, action.payload]
            };
        case DELETE_POKEMON:
                return {...state}
                case FILTER_TYPE:
                    if(action.payload === "all"){
                        return { ...state, filtered: state.pokemons };
                    } else {
                        return{
                        ...state,
                        filtered: state.pokemons.filter((pokemon) =>
                            pokemon.Types.map((type) => type.name).includes(
                                action.payload
                            )
                        ),
                      };
                    }
        default:
            return state;

        }
    }

    export default rootReducer;
