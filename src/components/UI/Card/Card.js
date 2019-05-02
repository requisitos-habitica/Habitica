import React from 'react'
import './Card.scss'

const Card = props => (
  <div className="docCard">
    { props.children }
  </div>
)

export default Card