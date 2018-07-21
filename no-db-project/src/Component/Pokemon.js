import React, { Component } from 'react'
import DeleteButton from './DeleteButton'
import axios from 'axios'

class Pokemon extends Component {
    constructor(){
        super();

    }
    deletePokemon = (id) => {
        axios.delete(`/api/pokemon/${id}`).then(res => {
            this.props.updatePokemon(res.data)
        })
    }

    render(){
        console.log(this.props);
        
        const {poke} = this.props
        return (
            <div>
                <h4>{poke.name}</h4>
                <p>LVL: {poke.lvl}</p>
                <p>HP: {poke.hp}</p>
                <p>ATTACK: {poke.attack}</p>
                <DeleteButton id={poke.id} deletePokemon={this.deletePokemon}/>
            </div>
        )
    }
}


export default Pokemon