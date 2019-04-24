import React from 'react'
import { Link } from 'react-router-dom'

const BatalhaDeChefao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Batalha de Chefão" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Batalha de Chefão</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Missão de Chefão</li>
        <li>Missão de Batalha</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É um tipo de <Link to="/Missao">Missão</Link></li>
        <li>Ao começar um <Link to="/Chefao">Chefão</Link> irá aparecer</li>
        <li>Grupo <Link to="/Cenarios/BatalhaChefao">Batalha Chefão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Batalha de Chefão pode ser iniciada</li>
        <li>Batalha de Chefão pode ser cancelada</li>
        <li>Batalha de Chefão pode ser completa</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default BatalhaDeChefao