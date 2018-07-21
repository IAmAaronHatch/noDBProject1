import React from 'react'
import Pokemon from './Pokemon'



const pokemonList = (props) => {
    let pokemonMap = props.pokemon.map(poke => {
        return <Pokemon updatePokemon={props.updatePokemon} poke={poke}/>
        //import App.js? for the updatePokemon method
    })

    return (
        <div>
            {pokemonMap}
            
        </div>
    )
}

//student-fight/App.js

export default pokemonList