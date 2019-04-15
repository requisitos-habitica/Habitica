import React from 'react'

const Contributor = ({ github, name, img }) => (
  <a href={ github } className="card">
    <p>{ name }</p>
    <img src={ img } alt="Contribuidor"/>
  </a>
)

export default Contributor