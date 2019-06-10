import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Fazer uma Conta" author="Ésio Freitas"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Usuário deseja criar uma conta.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela da aplicação.</li>
        <li>Tempo: Em qualquer momento.</li>
        <li>Pré-condição: Usuário deve ter um email.</li>
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
        <li>email.</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário preenche os campos.</li>
        <li>Usuário confirma a criação da conta.</li>
        <li>Usuário faz uma conta.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não completa todos os campos.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O email é inválido.</li>
      </ul>
    </Card>

  </div>
)

export default Base