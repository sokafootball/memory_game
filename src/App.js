import React, { Component } from 'react';
import './App.css';
import {Game} from './Game'
import {Navbar} from './Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Game />
      </div>
    );
  }
}

export default App;
