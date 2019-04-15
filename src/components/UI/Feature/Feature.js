import React from 'react'
import './Feature.scss'

const Feature = ({ title, img, description }) => (
  <div className="feature">
    <h2>{ title }</h2>
    <img src={ img } alt="Feature do Habitica"/>
    <p>{ description }</p>
  </div>
)

export default Feature