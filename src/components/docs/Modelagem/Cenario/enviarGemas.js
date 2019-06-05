import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Enviar Gemas" author="Ésio Freitas"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Dar gemas para um outro usuário.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial -> perfil -> Enviar gemas.</li>
        <li>Tempo: Em qualquer momento.</li>
        <li>Pré-condição: Usuário deve estar logado.</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário.</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Gemas</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário escolhe quantas gemas querem dar.</li>
        <li>Usuário compra gema.</li>
        <li>Usuário pode mandar uma mensagem.</li>
        <li>Usuário escolhe para quem quer mandar as gemas.</li>
        <li>Usuário envia as gemas.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário ter menos gemas do que doar.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não ter gemas.</li>
      </ul>
    </Card>

  </div>
)

export default Base