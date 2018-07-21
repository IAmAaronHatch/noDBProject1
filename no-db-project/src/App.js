import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Create from './Component/Create'
import PokemonList from './Component/PokemonList'


class App extends Component {
  constructor(){
    super ();

    this.state = {
      pokemon: []
    }
  }

  componentDidMount(){
    axios.get('/api/pokemon').then(res => {
      this.setState({
        pokemon: res.data
      })
    })
  }

  updatePokemon=(pokemon) => {
    this.setState ({
      pokemon
    })
  }

  render() {


    return (
      <div className="App">
    
        <h1 className="Welcome">Welcome!</h1>
        <h2>Can you defeat Blue?</h2>
        <img src = {require('./sprites/Spr_HGSS_Blue.png')} className="blue-picture-back"/>

        
        <Create updatePokemon={this.updatePokemon}/>
        <PokemonList updatePokemon={this.updatePokemon} pokemon={this.state.pokemon}/>

        
      </div>
    );
  }
}

export default App;
