import React from 'react'
import { Link } from 'react-router-dom'

const MissaoDeColeta = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="MissaoDeColeta" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Missão de Coleta</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Missão para Coleta</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É um tipo de <Link to="/Missao">Missão</Link></li>
        <li>Usuários precisam coletar Itens para completar Missão de Coleta</li>
        <li>Missão de Coleta pode ser do tipo <Link to="/MissaoDeMascote">Missão de Mascote</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Missão de Coleta pode ser iniciada</li>
        <li>Missão de Coleta pode ser cancelada</li>
        <li>Missão de Coleta pode ser completa</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default MissaoDeColeta