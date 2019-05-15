import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Desafiantes = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Desafiantes" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>Desafiantes</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Escritores</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            Desafiantes são pessoas responsáveis por estarem criando desafios dentro das guildas do Habitica
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Desafiantes beneficiam a comunidade com recompensas</li>
        <li>Desafiantes expandem o mundo do Habitica</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default Desafiantes