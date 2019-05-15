import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const MissaoDeMascote = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Missao de Mascote" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Missao de Mascote</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li><Link to="/Missão">Missão</Link> para conseguir Mascote</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É um tipo de <Link to="/Missão de Coleta">Missão de Coleta</Link></li>
        <li>Ao <Link to="/Faz Missão">Fazer Missão</Link>, tem como recompensa um <Link to="/Ovo de Mascote">Ovo de Mascote</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li><Link to="/Missão">Missão</Link> de Mascote pode ser iniciada</li>
        <li><Link to="/Missão">Missão</Link> de Mascote pode ser cancelada</li>
        <li><Link to="/Missão">Missão</Link> de Mascote pode ser completa</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default MissaoDeMascote