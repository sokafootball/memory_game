import React, {Component} from 'react'
import './Navbar.css'
class Navbar extends Component{

  render () {
    return (
      <div className='mainBar'>
        <p>Memory Game</p>
        <button onClick={newGame}>New Game</button>
      </div>
    )
  }
}

export {Navbar}
