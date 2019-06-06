import React from 'react'
import './CardsGridLayout.scss'

const CardsGridLayout = ({ obj, onClick }) => {

  const getArtefactsFromTheSameContributor = (group, contributor) => {
    return obj[group][contributor].map((rp, i) => (
      <div className="rp-card-container" key={ contributor + i } onClick={ () => onClick(obj[group][contributor][i]) }>
        <img src={ obj[group][contributor][i] }/>
        <div className="rp-about">
          <ul>
            <h2>{ rp.match(/RP[^\.]+/) }</h2>
            <li>Autor: </li>
            <li>Versão: </li>
            <li>Descrição: </li>
            <li>Data: </li>
            <li>Fontes: </li>
          </ul>
        </div>
      </div>
    ))
  }

  const getArtefactsForEachContributor = (group) => {
    return Object.keys(obj[group]).map(contributor => (
      <React.Fragment key={ contributor + Math.random() }>
        { getArtefactsFromTheSameContributor(group, contributor) }
      </React.Fragment>
    ))
  }

  return (
    Object.keys(obj).map(group => (
      <div className="cards-grid-container" key={ group }>
  
        <h2>{ group }</h2>
        <div className="cards-grid">
          { getArtefactsForEachContributor(group) }
        </div>
      </div>
    )) 
  )
}

export default CardsGridLayout