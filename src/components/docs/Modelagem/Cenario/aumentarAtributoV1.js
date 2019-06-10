import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Aumentar Atributo" author="Ésio Freitas"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Usuário deseja aumentar o seu poder.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial -> atributos.</li>
        <li>Tempo: Em qualquer momento.</li>
        <li>Pré-condição: Usuário deve ter pontos de atributos.</li>
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
        <li>Pontos de atributos</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário sobe de nível.</li>
        <li>Usuário adquire pontos de atributos.</li>
        <li>Usuário escolhe o atributo que quer aumentar.</li>
        <li>Usuário aumenta o atributo.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário pode não salva as alterações.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Não ter pontos de atributos.</li>
      </ul>
    </Card>

  </div>
)

export default Base