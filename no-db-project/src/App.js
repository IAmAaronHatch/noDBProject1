import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Create from './Component/Create'
import PokemonList from './Component/PokemonList'




class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      battle: []
    }
  }

  componentDidMount() {
    axios.get('/api/pokemon').then(res => {
      this.setState({
        pokemon: res.data
      })
    })
  }

  updatePokemon = (pokemon) => {
    this.setState({
      pokemon
    })
  }

  handleBattle = (poke) => {
    let battles = this.state.battle.slice()
    battles.push(poke)
    this.setState({
      battle: battles
    })
  }

  battleTime = (battle) => {
    let one = this.state.battle[0]
    let two = this.state.battle[1]

    let oneFight = one.hp - two.attack
    let twoFight = two.hp - one.attack

    if (oneFight > twoFight) {
      alert(`${one.name} has defeated ${two.name}! Red is the Champion!`)
    } else if (oneFight < twoFight) {
      alert(`${two.name} has defeated ${one.name}! You are the Champion!`)
    } else {
      alert("It's a DRAW!")
    }

  }


  render() {
    console.log(this.state)
    let mappedBattle = this.state.battle.map(e => {
      return (
        this.battleTime
      )
    })

    return (
      <div className="App">
        <div className="App-Header-Container">
          <div className="Welcome-Text-Box">
            <div className="Welcome-Text-Box-Top">
              <h1 className="Welcome">Welcome!</h1>
              <h2 className="Defeat-Text">Can you defeat Red?</h2>

            </div>

            <div className="Welcome-Header-Icons">
              <img className="Red-Sprite" src='https://archives.bulbagarden.net/media/upload/9/9a/Spr_B2W2_Red.png' alt="" />
              <img src={require('./sprites/pikachu.gif')} alt="" />
            </div>
          </div>

        </div>

        <div className="Create-Pokemon-Container">
          <div className="Create-Pokemon-Container-Header">Pokemon Generator!</div>
          <div className="Create-Pokemon-Minibox">
            <Create updatePokemon={this.updatePokemon} />
          </div>
        </div>
        <div className="Display-All-Pokemon">
          <div className="Display-Pokemon-Container">
            <PokemonList
              updatePokemon={this.updatePokemon}
              pokemon={this.state.pokemon}
              handleBattle={this.handleBattle}
            />

          </div>
        </div>

        <div className="Battle-Container">
          <div className="Battle-Background-Container">
            <div className="Battle-Background-Container-Top">

              <img className="Battle-Pikachu-Sprite" src="http://www.pokestadium.com/sprites/xy/pikachu.gif" alt="" />

            </div>

            <div className="Battle-Background-Container-Mid">
              <img className="Battle-Gengar-Sprite" src="http://www.pokestadium.com/sprites/heartgold-soulsilver/back/gengar.png" alt="" />

            </div>

            <div className="BBC-Bottom-Sq">
              {mappedBattle}
              <button className="Battle-Button" onClick={this.battleTime}>Battle</button>
            </div>
          </div>
        </div>



      </div>
    );
  }
}

export default App;
