import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Guerreiro" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Guerreiro.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Guerreiros</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É a classe de avatar com a característica de força. O jogador pode escolher ele quando chegar no nível 10.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Causa dano alto aos chefes</li>
        <li>Maior chance de acertos críticos e bônus maiores para eles, o que concede bônus aleatórios GP e XP</li>
        <li>Defesa moderada contra danos.</li>
        <li>Pode buffar os membros do grupo STR & CON.</li>
        <li>Útil em batalhas contra chefes e jogadores motivados por recompensas aleatórias</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default Base