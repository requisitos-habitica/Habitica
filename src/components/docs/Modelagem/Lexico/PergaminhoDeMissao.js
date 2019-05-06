import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const PergaminhoDeMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Pergaminho de Missão" author="Rogério Júnior"/>
    <Card>
      <h2>Nome</h2>
      <p>Pergaminho de Missão</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Pergaminhos de Missão</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Item que tem descrito missões a serem cumpridas</li>
        <li>Item que mostra as recompensas a serem adquiridas</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Pode ser proposto às equipes que o usuário faz parte</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default PergaminhoDeMissao