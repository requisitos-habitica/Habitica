import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const EditarHabito = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Editar Hábito" author="Gabriel Albino"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Editar um hábito da lista</p>
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
        <li>Usuário clica em “Hábitos” e seleciona um hábito cadastrado; </li>
        <li>Usuário escolhe as novas informações do hábito e salva; </li>
        <li>Sistema atualiza o hábito e exibe o hábito atualizado ao usuário; </li>

      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não tem hábitos cadastrados</li>
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

export default EditarHabito 