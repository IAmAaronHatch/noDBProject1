import React, { Component } from 'react'
import axios from 'axios'

class Create extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            lvl: '',
            hp: '',
            attack: '',
            sprite: '',
            
        }
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
    handleSprite = (str) => {
        this.setState ({
            sprite: str 
        })
    }


    addPokemon = () => {
        const { name, lvl, hp, attack, sprite } = this.state
        const newPokemon = { name, lvl, hp, attack, sprite }

        axios.post('/api/pokemon', newPokemon).then(res => {
            this.props.updatePokemon(res.data)
        })
    }

    render() {
        console.log(this.state.sprite)
        return (
            <div className="Create-Add-Pokemon-Fullbox">
                <div className="Add-New-Pokemon-Field">
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleName} />

                    <input type="number" placeholder="Level" value={this.state.lvl} onChange={this.handleLevel} />

                    <input type="number" placeholder="HP" value={this.state.hp} onChange={this.handleHp} />

                    <input type="number" placeholder="Attack" value={this.state.attack} onChange={this.handleAttack} />

                    <button onClick={this.addPokemon}>Add New Pokemon</button>
                </div>

                <div className="Pokemon-Icon-Field">
                    <div className="Poke-Icons">

                        <div>
                            <img src={'http://www.pokestadium.com/sprites/black-white/animated/gengar.gif'}
                                alt=""
                                onClick={() => this.handleSprite('http://www.pokestadium.com/sprites/black-white/animated/gengar.gif')} />
                        </div>
                        <div>
                            <img src={'http://www.pokestadium.com/sprites/black-white/animated/blastoise.gif'}
                                alt=""
                                onClick={() => this.handleSprite('http://www.pokestadium.com/sprites/black-white/animated/blastoise.gif')} />
                        </div>
                        <div>
                            <img src={'http://www.pokestadium.com/sprites/black-white/animated/dragonite.gif'}
                                alt=""
                                onClick={() => this.handleSprite('http://www.pokestadium.com/sprites/black-white/animated/dragonite.gif')} />
                        </div>
                        <div>
                            <img src={'http://www.pokestadium.com/sprites/black-white/animated/umbreon.gif'}
                                alt=""
                                onClick={() => this.handleSprite('http://www.pokestadium.com/sprites/black-white/animated/umbreon.gif')} />
                        </div>
                        <div>
                            <img src={'http://www.pokestadium.com/sprites/black-white/animated/sandslash.gif'}
                                alt=""
                                onClick={() => this.handleSprite('http://www.pokestadium.com/sprites/black-white/animated/sandslash.gif')} />
                        </div>
                        <div>
                            <img src={'http://www.pokestadium.com/sprites/black-white/animated/snorlax.gif'}
                                alt=""
                                onClick={() => this.handleSprite('http://www.pokestadium.com/sprites/black-white/animated/snorlax.gif')} />
                        </div>

                    </div>
                </div>

            
            </div>
        )
    }

}

export default Create