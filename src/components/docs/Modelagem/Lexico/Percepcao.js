import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Percepção" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Percepção.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>PER</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Atributo que afeta a taxa de ganho de gotas e pontos de ouro para cada tarefa. É o atributo primário para Ladinos</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Aumenta a probabilidade de encontrar itens ao completar Tasks e a quantia de moedas concedida para cada tarefa concluída.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Base