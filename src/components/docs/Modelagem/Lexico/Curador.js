import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Curador" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Mago.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Curadores</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É a classe de avatar com a característica de constituição. O jogador pode escolher ele quando chegar no nível 10.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Alta defesa contra danos.</li>
        <li>Podem se curar e tornar suas tarefas menos vermelhas e prejudiciais.</li>
        <li>Pode lustrar o CON dos membros do partido e restaurar sua saúde.</li>
        <li>Níveis rapidamente e ganha muitos MP por usar habilidades.</li>
        <li>Útil em festas em geral e para jogadores com muitas diárias ou hábitos negativos.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default Base