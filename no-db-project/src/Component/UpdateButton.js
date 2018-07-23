import React from 'react'


function updateDisplayButton (props) {
    return (
        <button onClick={() => props.updateDisplayedPokemon(props.id)}>Update Your Pokemon!</button>
    )
}

export default updateDisplayButton