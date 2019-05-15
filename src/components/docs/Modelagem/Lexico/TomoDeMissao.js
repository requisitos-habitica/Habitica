import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const TomoDeMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Tomo de Missão" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Tomo de <Link to="/Missão">Missão</Link></p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Pergaminho</li>
        <li>Pergaminho de <Link to="/Missão">Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Permite que <Link to="/Grupo">Grupo</Link> <Link to="/Faz Missão">Faça Missão</Link></li>
        <li>Pertence a um Usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Torna o Usuário que usou o Tomo de <Link to="/Missão">Missão</Link> no <Link to="/Dono de Missão">Dono de Missão</Link></li>
        <li>Ao usar Tomo de <Link to="/Missão">Missão</Link>, <Link to="/Grupo">Grupo</Link> é convidado para <Link to="/Missão">Missão</Link></li>
        <li>Ao usar Tomo de <Link to="/Missão">Missão</Link>, <Link to="/Missão">Missão</Link> começa</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default TomoDeMissao