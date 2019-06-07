import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Ladinos" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Ladino.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Ladinos</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É a classe de avatar com a característica de percepção. O jogador pode escolher ele quando chegar no nível 10.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Encontra a maioria das gotas e ouro</li>
        <li>Maior chance de acertar acertos críticos , que concedem bônus GP e XP.</li>
        <li>Pode buff membros do partido PER e evitar danos causados por Dailies incompletas.</li>
        <li>Níveis rapidamente e ganha muitos MP por usar habilidades.</li>
        <li>Útil em missões de coleções e para jogadores que querem atualizar equipamentos rapidamente, subir de nível rapidamente e encontrar Drops com mais frequência.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default Base