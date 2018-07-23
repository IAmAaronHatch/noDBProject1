import React from 'react'
import Pokemon from './Pokemon'
 

 
const pokemonList = (props) => {
    let pokemonMap = props.pokemon.map((poke, i) => {
        return <Pokemon
        handleBattle={props.handleBattle}  
        updatePokemon={props.updatePokemon} 
        poke={poke} 
        key={i}
        />
        //import App.js? for the updatePokemon method
    })

    return (
        <div className="Poke-Stats-Whole-Field">
            {pokemonMap}
        </div>
    )
}

//student-fight/App.js

export default pokemonList