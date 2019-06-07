import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Força" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Força.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>STR</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É um atributo de personagem que aumenta o dano causado a um chefe e os efeitos das habilidades dos Guerreiros.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Aumenta a chance de um jogador acertar um acerto crítico ao marcar uma tarefa e aumenta o bônus obtido de acertos críticos.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Base