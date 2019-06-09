import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Deletar Conta" author="Ésio Freitas"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Usuário quer parar de usar a aplicação.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial -> configuração.</li>
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
        <li>Conta</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário clica em deletar uma conta.</li>
        <li>Usuário confirma que quer deletar uma conta.</li>
        <li>Conta é deletada.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não encontra onde excluir conta.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário cancela.</li>
      </ul>
    </Card>

  </div>
)

export default Base