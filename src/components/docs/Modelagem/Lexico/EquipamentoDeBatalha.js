import React from 'react'
import { Link } from 'react-router-dom'

const EquipamentoDeBatalha = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Equipamento de Batalha" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Equipamento de Batalha</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Equipamento</li>
        <li>Roupa de Batalha</li>
        <li>Itens Equipados</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>São os Itens em que o Avatar está atualmente equipado</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O Equipamento de Batalha pode ser retirado pelo Usuário</li>
        <li>O Equipamento de Batalha pode ser equipado pelo usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default EquipamentoDeBatalha