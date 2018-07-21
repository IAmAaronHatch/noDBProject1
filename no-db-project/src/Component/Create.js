import React, { Component } from 'react'
import axios from 'axios'

class Create extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            lvl: 0,
            hp: 0,
            attack: 0,
            sprite: false
        }
    }

    handleName=(e)=>{
        this.setState({ 
            name: e.target.value
        })
    }
    handleLevel=(e)=>{
        this.setState ({
            lvl: e.target.value
        })
    }
    handleHp=(e)=>{
        this.setState ({
            hp: e.target.value
        })
    }
    handleAttack=(e)=>{
        this.setState ({
            attack: e.target.value
        })
    }
   

    addPokemon = () => {
        const {name, lvl, hp, attack} = this.state
        const newPokemon = { name, lvl, hp, attack}

        axios.post('/api/pokemon', newPokemon).then(res => {
            this.props.updatePokemon(res.data)
        })
    }

    render () {
        return (
            <div>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleName} />

                <input type="number" placeholder="Level" value={this.state.lvl} onChange={this.handleLevel} />

                <input type="number" placeholder="HP" value={this.state.hp} onChange={this.handleHp} />

                <input type="number" placeholder="Attack" value={this.state.attack} onChange={this.handleAttack} />

                <button onClick={this.addPokemon}>Add New Pokemon</button>
            </div>
        )
    }

}

export default Create