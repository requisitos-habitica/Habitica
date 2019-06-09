import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Inteligência" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Inteligência.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>INT</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>afeta a experiência e os pontos de mana . É o atributo primário para  Magos</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Aumenta a inteligência que permite que o jogador ganhe mais XP ao executar tarefas, o que significa que eles subirão de nível mais rapidamente.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Base