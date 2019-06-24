import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const EditarTarefaDiaria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Editar Tarefa Diária" author="Gabriel Albino"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Cadastrar uma recompensa para ser comprada</p>
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
        <li>Usuário abre o app; Usuário clica em “Tarefas” e escolhe a tarefa que será atualizada; </li>
        <li>Usuário preenche as novas informações  e salva; </li>
        <li>Sistema atualiza a tarefa e exibe ela atualizada ao usuário; </li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não tem tarefas cadastradas</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não ter uma conta.</li>
      </ul>
    </Card>

  </div>
)

export default EditarTarefaDiaria