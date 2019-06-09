import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Adquirir Classe" author="Ésio Freitas"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Usuário deseja ganhar uma nova classe.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial.</li>
        <li>Tempo: Qualquer momento.</li>
        <li>Pré-condição: Usuário deve ter nível 10.</li>
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
        <li>Usuário deve finalizar uma atividade.</li>
        <li>Usuário ganha experiência.</li>
        <li>Usuário adquire uma classe.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não pode mudar de classe.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não tem nível 10.</li>
      </ul>
    </Card>

  </div>
)

export default Base