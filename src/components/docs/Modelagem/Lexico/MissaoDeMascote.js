import React from 'react'
import { Link } from 'react-router-dom'

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
        <li>Missão para conseguir Mascote</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É um tipo de <Link to="/MissaoDeColeta">Missão de Coleta</Link></li>
        <li>Ao <Link to="/Cenarios/FazMissao">Fazer Missão</Link>, tem como recompensa um <Link to="/OvoDeMascote">Ovo de Mascote</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Missão de Mascote pode ser iniciada</li>
        <li>Missão de Mascote pode ser cancelada</li>
        <li>Missão de Mascote pode ser completa</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default MissaoDeMascote