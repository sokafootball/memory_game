import React, {Component} from 'react'
import './Navbar.css'
class Navbar extends Component{

  render () {
    return (
      <div className='mainBar'>
        <p>Memory Game</p>
        <p>New Game</p>
      </div>
    )
  }
}

export {Navbar}
