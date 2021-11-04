import React, {useState} from 'react';

const Pokemon = () =>{

    const [allPokemon, setAllPokemon] = useState([])

    const fetchPokemon = () =>{
        console.log('This is connected')
        fetch("https://pokeapi.co/api/v2/pokemon?limit=800")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setAllPokemon(response.results)
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <div>
            <h1>Here are all of the Pokemon</h1>
            <button onClick = {fetchPokemon}>Push to get all of the Pokemon</button>
            <ul>
                {
                    allPokemon.map((pokemon, i)=>{
                        return(
                            <li>{pokemon.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Pokemon;