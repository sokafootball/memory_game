import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => {

if(props.status !== 'hidden'){
  var style = {
    backgroundColor: props.color
  }
}

  return (
    <div className="card" style={style} onClick={() => props.handleCardClick(props.id)}></div>
  )
}

Card.defaultProps = {
  id: '99',
  status: 'hidden',
  color: 'grey'
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export {Card}
