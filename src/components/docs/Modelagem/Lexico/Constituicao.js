import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Constituição" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Constituição.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>CON</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É um atributo que afeta a saúde e defesa. É o atributo primário para curandeiros</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>diminui a quantidade de vida tirada de suas próprias Diárias perdidas e de clicar em seus Hábitos negativos.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Base