import React from 'react'
import './Contributor.scss'

const Contributor = ({ github, name, img }) => (
  <a href={ github } className="card" target="_blank">
    <p>{ name }</p>
    <img src={ img } alt="Contribuidor"/>
  </a>
)

export default Contributor