import React from 'react'
import './HeadArtefact.scss'
import Card from '../../UI/Card/Card'

const HeadArtefact = ({ versions, rastreability, title, author }) => {

  return (
    <Card>
      <div className="headArtefact">
        <h1>{ title }</h1>
        <p>Autor: { author }</p>
      </div>
    </Card>
  )
}

export default HeadArtefact