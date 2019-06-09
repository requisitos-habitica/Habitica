import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Gema" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Gema.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Gemas</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É a forma de comprar itens especiais. É a principal forma que os desenvolvedores do Habitica recebem de apoio financeiro.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Possibilita a compra de itens especiais na aplicação</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Base