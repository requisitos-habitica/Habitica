import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const AdicionarTarefasDiarias = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Adicionar Tarefa Diaria" author="Gabriel Albino"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Adicionar uma tarefa na lista de tarefas diárias</p>
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
        <li>Usuário</li>
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
        <li>Usuário entra no menu de criação da diária; </li>
        <li>Usuário digita informações da tarefa; </li>
        <li>Usuário salva a tarefa; </li>


      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não preenche as informações da diária corretamente</li>
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

export default AdicionarTarefasDiarias