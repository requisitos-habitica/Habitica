import React from 'react'
import './Strip.scss'

const Strip = ({ title, color }) => (
  <div className="strip" style={{ backgroundColor: color}}>
    <div style={{ backgroundColor: color}}></div>
    <h2>{ title }</h2>
  </div>
)

export default Strip