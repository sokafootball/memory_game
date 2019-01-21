import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
    return (
      <div className='mainBar'>
        <p>Memory Game</p>
        <button onClick={() => props.newGame}>New Game</button>
      </div>
    )
}

export {Navbar}
