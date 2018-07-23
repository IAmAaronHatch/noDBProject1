import React, { Component } from 'react'
import DeleteButton from './DeleteButton'
import UpdateButton from './UpdateButton'
import axios from 'axios'

class Pokemon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            name: props.poke.name,
            lvl: props.poke.lvl,
            hp: props.poke.hp,
            attack: props.poke.attack,
            sprite: props.poke.sprite,
            edit: false,
           
        }

    }
    deletePokemon = (id) => {
        axios.delete(`/api/pokemon/${id}`).then(res => {
            this.props.updatePokemon(res.data)
        })
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    updateDisplayedPokemon = (id) => {
        let { name, lvl, hp, attack } = this.state
        let updatedPokemon = { name, lvl, hp, attack }
        axios.put(`/api/pokemon/${id}`, updatedPokemon).then(res => {
            this.props.updatePokemon(res.data)

            this.setState({
                name: '',
                lvl: '',
                hp: '',
                attack: '',
                sprite: '',
                edit: false
            })
        })
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleLevel = (e) => {
        this.setState({
            lvl: e.target.value
        })
    }
    handleHp = (e) => {
        this.setState({
            hp: e.target.value
        })
    }
    handleAttack = (e) => {
        this.setState({
            attack: e.target.value
        })
    }
    
    render() {
        const { poke } = this.props
       
        return (
            <div className="Poke-Stats-Full-Container">

                <div className="Poke-Stats-Container">

                    <div className="Poke-Stats">
                        <h4>{poke.name}</h4>
                        <p>LVL: {poke.lvl}</p>
                        <p>HP: {poke.hp}</p>
                        <p>ATTACK: {poke.attack}</p>
                        <img src={poke.sprite} alt="" />
                        <button onClick={() => this.props.handleBattle(poke)}>Select</button>
                        <DeleteButton id={poke.id} deletePokemon={this.deletePokemon} />
                    </div>

                    <div className="Update-Poke-Stats">
                        <input type="text" placeholder="Update Name" onChange={this.handleName} />
                        <input type="number" placeholder="Update Level" onChange={this.handleLevel} />
                        <input type="number" placeholder="Update HP" onChange={this.handleHp} />
                        <input type="number" placeholder="Update Attack" onChange={this.handleAttack}/>

                        <UpdateButton id={poke.id} updateDisplayedPokemon={this.updateDisplayedPokemon} />
                    </div>

                </div>
            </div>
        )
    }
}


export default Pokemon