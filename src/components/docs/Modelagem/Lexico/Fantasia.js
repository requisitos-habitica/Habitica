import React from 'react'
import { Link } from 'react-router-dom'

const Fantasia = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Fantasia" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Fantasia</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Roupa</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>São os itens que o Avatar veste</li>
        <li>A Fantasia não altera os Stats do Usuário</li>
        <li>A Fantasia substitui o visual do <Link to="/EquipamentoDeBatalha">Equipamento de Batalha</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>A Fantasia pode ser retirado pelo Usuário</li>
        <li>A Fantasia pode ser equipado pelo Usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Fantasia