import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => {

  // const style = {
  //   margin: '4px',
  //   width: '180px',
  //   height: '180px',
  //   display: 'inline-block',
  //   backgroundColor: 'grey'
  // }
  return (
    <div className="card"></div>
  )
}

Card.defaultProps = {
  color: 'grey'
}

Card.propTypes = {
  color: PropTypes.string
}

export {Card}
