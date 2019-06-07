import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Mago" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Mago.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Magos</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É a classe de avatar com a característica de inteligência. O jogador pode escolher ele quando chegar no nível 10.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ganha alta experiência para nivelar rapidamente.</li>
        <li>Ganha uma grande quantidade de MP e regenera MP mais rapidamente.</li>
        <li>Pode lustrar o INT dos membros do grupo . Pode restaurar MP do partido (excluindo outros Mages).</li>
        <li>Causa dano adicional aos chefes e pode congelar listras.</li>
        <li>Útil em batalhas de Boss e para jogadores que querem subir de nível rapidamente.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default Base