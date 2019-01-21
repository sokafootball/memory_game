import React from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'

const Navbar = (props) => {
    return (
      <div className='mainBar'>
        <h1>Memory Game</h1>
        <h3 onClick={props.newGame}>New Game</h3>
      </div>
    )
}

Navbar.defaultProps = {
  newGame: () => {console.log('from Navbar: newGame function not provided')}
}

Navbar.propTypes = {
  newGame: PropTypes.func.isRequired
}

export {Navbar}
