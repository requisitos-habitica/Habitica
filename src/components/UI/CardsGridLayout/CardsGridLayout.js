import React from 'react'
import './CardsGridLayout.scss'

const CardsGridLayout = ({ obj, onClick }) => {

  const getDocsFromEachGroup = group => {
    return obj[group].map(doc => (
      <div className="rp-card-container" onClick={ () => onClick(doc.img) }>
        <img src={ doc.img }/>
        <div className="rp-about">
          <ul>
            <h2>{ doc.id }</h2>
            <li>Autor: { doc.autor }</li>
            <li>Versão: { doc.versao }</li>
            <li>Descrição: { doc.descricao }</li>
            <li>Data: { doc.data }</li>
            <li>Fontes: <a href={ doc.fontes[0].link }>{ doc.fontes[0].nome }</a></li>
          </ul>
        </div>
      </div>
    ))
  }

  console.log(Object.keys(obj))
  return (
    Object.keys(obj).map(group => (
        <div className="cards-grid-container" key={ group }>
          <h2>{ group }</h2>
          <div className="cards-grid">
            { getDocsFromEachGroup(group) }
          </div>
        </div>
      )
    )
  )
}

export default CardsGridLayout