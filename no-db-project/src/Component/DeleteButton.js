
import React from 'react'


function DeleteButton (props) {
    return (
        <button onClick = { () => props.deletePokemon(props.id)}>Delete</button>
    )
}

export default DeleteButton