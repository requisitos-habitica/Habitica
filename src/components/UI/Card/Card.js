import React from 'react'
import './Card.scss'

const Card = props => (
  <div className="docCard" style={ props.style }>
    { props.children }
  </div>
)

export default Card