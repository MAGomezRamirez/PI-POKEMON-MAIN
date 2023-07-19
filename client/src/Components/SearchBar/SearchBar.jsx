
import { getPokemonByName } from "../../redux/actions";
import "./SearchBar.styles.css"

export default function SearchBar(props) {

    const handleChange = (event) => {
        const value = event.target.value
        setName(value)
     }

     const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getPokemonByName(name));
        setName('')
        props.onPageChange(1);
        handleButtonClick()
    };

    return (
        <div className="searchbar">
           <input className="input" type='search' placeholder=' Search Pokemon name ' value ={name} onChange={(event) => handleChange(event)}/>
           <button className="button" type='submit' onClick={(event) => handleSubmit(event)}>Search</button>
           </div>
           );
}
