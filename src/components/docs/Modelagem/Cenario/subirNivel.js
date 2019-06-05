import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Artefato Nome" author="Quem fez"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Ganhar experiência para adquirir um novo nível.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial.</li>
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
        <li>Experiência</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário cria tarefa.</li>
        <li>Usuário finalizar tarefa.</li>
        <li>Usuário ganha experiência.</li>
        <li>Usuário sobe de nível.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário está restrito às atividades que tem para ganhar experiência.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não fazer as atividades.</li>
      </ul>
    </Card>

  </div>
)

export default Base