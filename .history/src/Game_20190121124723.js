import React from 'react'
import {Card} from './Card'
// import './Game.css'
import PropTypes from 'prop-types'

const Game = (props) => {
  const myCards = props.cards.map((c, index) => {
    return <Card {...c} key={index} handleCardClick = {props.handleCardClick}/>
  })
    return (
      <div className="cardsDiv">
        {myCards}
      </div>
    )
}

Game.defaultProps = {
  handleCardClick: () => {console.log('handleCardClick function not provided')},
  cards: () => [
    {id: 0, color: 'black', status: 'showing'},
    {id: 1, color: 'black', status: 'showing'},
    {id: 2, color: 'black', status: 'showing'},
    {id: 3, color: 'black', status: 'showing'},
    {id: 4, color: 'black', status: 'showing'},
    {id: 5, color: 'black', status: 'showing'},
    {id: 6, color: 'black', status: 'showing'},
    {id: 7, color: 'black', status: 'showing'},
    {id: 8, color: 'black', status: 'showing'},
    {id: 9, color: 'black', status: 'showing'},
    {id: 10, color: 'black', status: 'showing'},
    {id: 11, color: 'black', status: 'showing'},
    {id: 12, color: 'black', status: 'showing'},
    {id: 13, color: 'black', status: 'showing'},
    {id: 14, color: 'black', status: 'showing'},
    {id: 15, color: 'black', status: 'showing'}
  ]
}

Game.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export {Game}
