import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ParticipanteV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Participante" author="Kaique"/>
    <Card>
      <h2>Nome</h2>
      <p>Participante</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Participantes</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Usuário é um competidor em um <Link target="_blank" to="/DesafioV1">desafio</Link>, podendo vencê-lo</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Um participante pode ser <Link target="_blank" to="/DeclararVencedorDoDesafioV1">declarado vencedor do desafio</Link></li>
        <li>Um participante pode <Link target="_blank" to="/DeixarDesafioV1">deixar o desafio</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default ParticipanteV1
