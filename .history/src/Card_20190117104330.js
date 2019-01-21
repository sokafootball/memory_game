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
    <div className="card" style={style}></div>
  )
}

Card.defaultProps = {
  color: 'grey'
}

Card.propTypes = {
  color: PropTypes.string
}

export {Card}
