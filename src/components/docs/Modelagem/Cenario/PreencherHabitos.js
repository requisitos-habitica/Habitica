import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const PreencherHabitos = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Preencher Hábitos" author="Gabriel Albino"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Incrementar um hábito da lista  </p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: Usuário deve estar logado</li>
        
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário, Sistema</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Tarefas</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário abre o app; </li>
        <li>Usuário clica em hábitos; </li>
        <li>Usuário marca se completou um hábito bom ou ruim; </li>
        <li>Sistema contabiliza o hábito bom/ruim e dá recompensas/desvantagens ao usuário; </li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não preenche as informações do habito corretamente</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não ter uma conta.</li>
        <li>Usuário não ter hábitos cadastradas</li>
      </ul>
    </Card>

  </div>
)

export default PreencherHabitos