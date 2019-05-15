import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const MissaoDeColeta = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="MissaoDeColeta" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p><Link to="/Missão">Missão</Link> de Coleta</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li><Link to="/Missão">Missão</Link> para Coleta</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É um tipo de <Link to="/Missão">Missão</Link></li>
        <li>Usuários precisam coletar Itens para completar <Link to="/Missão">Missão</Link> de Coleta</li>
        <li><Link to="/Missão">Missão</Link> de Coleta pode ser do tipo <Link to="/Missão de Mascote">Missão de Mascote</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li><Link to="/Missão">Missão</Link> de Coleta pode ser iniciada</li>
        <li><Link to="/Missão">Missão</Link> de Coleta pode ser cancelada</li>
        <li><Link to="/Missão">Missão</Link> de Coleta pode ser completa</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default MissaoDeColeta