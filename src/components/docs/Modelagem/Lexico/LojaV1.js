import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const LojaV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Loja" author="Lucas Dutra"/>
    <Card>
      <h2>Nome</h2>
      <p>Loja</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Lojas</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É uma área da aplicação destinada a compras que podem ser feitas pelo usuário.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Possibilita a compra de ovos, equipamentos, cartões, poções, etc.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default LojaV1