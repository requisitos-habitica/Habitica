import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

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
        <li><Link to="/Missão">Missão</Link> de Chefão</li>
        <li><Link to="/Missão">Missão</Link> de Batalha</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É um tipo de <Link to="/Missão">Missão</Link></li>
        <li>Ao começar um <Link to="/Chefão">Chefão</Link> irá aparecer</li>
        <li>Grupo <Link to="/Batalha Chefão">Batalha Chefão</Link></li>
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