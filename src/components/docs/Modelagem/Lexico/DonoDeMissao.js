import React from 'react'
import { Link } from 'react-router-dom'

const DonoDeMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Dono de Missão" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Dono de Missão</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Líder da Missão</li>
        <li>Iniciador da Missão</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Usuário que utiliza o Tomo de <Link to="/Missao">Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Dono de Missão pode iniciar <Link to="/Missao">Missão</Link></li>
        <li>Dono de Missão pode <Link to="/Cenarios/CancelarMissao">Cancelar Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default DonoDeMissao