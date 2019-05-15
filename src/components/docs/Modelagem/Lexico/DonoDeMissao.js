import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const DonoDeMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Dono de Missão" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Dono de <Link to="/Missão">Missão</Link></p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Líder da <Link to="/Missão">Missão</Link></li>
        <li>Iniciador da <Link to="/Missão">Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Usuário que utiliza o <Link to="/Tomo de Missão">Tomo de Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Dono de <Link to="/Missão">Missão</Link> pode iniciar Missão</li>
        <li>Dono de <Link to="/Missão">Missão</Link> pode <Link to="/Cancelar Missão">Cancelar Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default DonoDeMissao