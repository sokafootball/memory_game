import React from 'react'
import {Card} from './Card'
import PropTypes from 'prop-types'

const Game = (props) => {
  const myCards = props.cards.map((c, index) => {
    return <Card {...c} key={index} handleCardClick = {props.handleCardClick}/>
  })
    return (
      myCards
    )
}

Game.defaultProps = {
  handleCardClick: () => {},
  cards: () => [{}]
}

Game.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export {Game}
