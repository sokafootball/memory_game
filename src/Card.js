import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({color}) => {
  const style = {
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor:  color
  }
  return (
    <div style={style}></div>
  )
}

Card.defaultProps = {
  color: 'black'
}

Card.propTypes = {
  color: PropTypes.string
}

export {Card}
