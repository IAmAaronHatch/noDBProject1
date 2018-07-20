import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor(){
    super ();

    this.state = {
      pokemon: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome!</h1>
        <h2>Can you defeat Red?</h2>
        <image/>
      </div>
    );
  }
}

export default App;
