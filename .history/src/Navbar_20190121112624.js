import React from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'

const Navbar = (props) => {
    return (
      <div className='mainBar'>
        <p>Memory Game</p>
        <button onClick={() => props.newGame}>New Game</button>
      </div>
    )
}

Navbar.defaultProps = {
  newGame: () => {}
}

Navbar.propTypes = {
  newGame: PropTypes.func.isRequired
}

export {Navbar}
