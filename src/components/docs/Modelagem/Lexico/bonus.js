import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Bônus de atributo" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Bônus de atributo.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Pontos de level</li>
        <li>Bônus de atributos</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É o item que o usuário pode trocar por poder.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Sobe o poder da característica do avatar</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default Base