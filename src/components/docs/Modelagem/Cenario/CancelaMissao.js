import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const CancelaMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Cancela Missão" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Cancelar um <Link to="/Missão">Missão</Link> antes que comece</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: Estar Logado; Ter convidado <Link to="/Grupo">Grupo</Link> para a <Link to="/Missão">Missão</Link>; <Link to="/Missão">Missão</Link> não ter sido Iniciada</li>
        <li>Local: Grupo->Missão</li>
        <li>Tempo: Depois de ter convidado o <Link to="/Grupo">Grupo</Link> para uma <Link to="/Missão">Missão</Link> e antes de ter iniciado a <Link to="/Missão">Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link to="/Missão">Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário aperta o botão Abortar</li>
        <li><Link to="/Missão">Missão</Link> é cancelada</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>-</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>-</li>
      </ul>
    </Card>

  </div>
)

export default CancelaMissao