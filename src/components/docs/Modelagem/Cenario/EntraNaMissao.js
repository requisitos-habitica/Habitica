import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const EntraNaMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Entra na Missao" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Entrar em uma <Link to="/Missão">Missão</Link> iniciada por outro <Link to="/Membros">Membro do Grupo</Link></p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: Estar logado; <Link to="/Convite de Missão">Convite de Missão</Link> ter sido enviado</li>
        <li>Local: Grupo->Missão</li>
        <li>Tempo: Enquanto uma <Link to="/Missão">Missão</Link> estiver esperando para ser iniciada</li>
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
        <li><Link to="/Convite de Missão">Convite de Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário recebe <Link to="/Convite de Missão">Convite de Missão</Link></li>
        <li>Usuário aceita <Link to="/Convite de Missão">Convite de Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li><Link to="/Convite de Missão">Missão</Link> não ter iniciado</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário já está em <Link to="/Convite de Missão">Missão</Link></li>
      </ul>
    </Card>

  </div>
)

export default EntraNaMissao