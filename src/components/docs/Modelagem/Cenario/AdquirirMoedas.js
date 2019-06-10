import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const AdquirirMoedas = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Adquirir Moedas" author="Lucas Dutra"/>

    <Card>
      <h2>Objetivo</h2>
      <p>Adquirir moedas</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado</li>
        <li>Local: Página principal</li>
        <li>Tempo: Qualquer momento que o usuário desejar</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
        <li>Sistema</li>
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
        <li>O usuário entra no sistema</li>
        <li>O usuário completa uma tarefa</li>
        <li>O usuário é recompensado com moedas  </li>    
      </ul>
    </Card>

    <Card>
        <h2>Restrições</h2>
        <ul>
            <li>Usuário não preenche as informações da tarefa corretamente</li>
        </ul>
    </Card>

    <Card>
        <h2>Exceções</h2>
        <ul>
            <li>O usuário não possui uma tarefa cadastrada</li>
        </ul>
    </Card>

  </div>
)

export default AdquirirMoedas