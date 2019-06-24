import React from 'react'
import './CardsGridLayout.scss'

const CardsGridLayout = ({ obj, onClick }) => {

  const getDocsFromEachGroup = group => {
    return obj[group].map(doc => (
      <div className="card-container" id = {doc.id} onClick={ () => onClick(doc.img) } key={ doc.id }>
        <img className="card-img" src={ doc.img }/>
        <div className="card-about">
          <ul>
            <h2>{ doc.id }</h2>
            <li><strong>Nome:</strong> { doc.name }</li>
            <li><strong>Autor:</strong> { doc.autor }</li>
            <li><strong>Versão:</strong> { doc.versao }</li>
            <li><strong>Descrição:</strong> { doc.descricao }</li>
          </ul>
        </div>
      </div>
    ))
  }

  return (
    Object.keys(obj).map(group => (
      <div className="cards-grid-container" key={ group }>
        <h2>{ group }</h2>
        <div className="cards-grid">
          { getDocsFromEachGroup(group) }
        </div>
      </div>
    ))
  )
}

export default CardsGridLayout