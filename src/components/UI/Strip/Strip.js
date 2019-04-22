import React from 'react'
import './Strip.scss'

const Strip = ({ title, color, onClick }) => (
  <div className="strip" style={{ backgroundColor: color}} onClick={ onClick }>
    <div style={{ backgroundColor: color}}></div>
    <h2>{ title }</h2>
  </div>
)

export default Strip