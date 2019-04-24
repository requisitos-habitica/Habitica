import React from 'react'
import { Link } from 'react-router-dom'

const TomoDeMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Tomo de Missão" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Tomo de Missão.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Pergaminho</li>
        <li>Pergaminho de Missão</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Permite que <Link to="/Grupo">Grupo</Link> <Link to="/Cenarios/FazMissao">Faça Missão</Link></li>
        <li>Pertence a um Usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Torna o Usuário que usou o Tomo de Missão no <Link to="/DonoDeMissao">Dono de Missão</Link></li>
        <li>Ao usar Tomo de Missão, <Link to="/Grupo">Grupo</Link> é convidado para <Link to="/Missao">Missão</Link></li>
        <li>Ao usar Tomo de Missão, <Link to="/Missao">Missão</Link> começa</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default TomoDeMissao