import React from 'react'
import { Link } from 'react-router-dom'

const DeixarDesafioV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Deixar desafio" author="Kaique"/>
    <Card>
      <h2>Nome</h2>
      <p>Deixar desafio</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Usuário que é <Link to="/ParticipanteV1">participante</Link> do <Link to="/DesafioV1">desafio</Link> sai do mesmo</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O <Link to="/ParticipanteV1">participante</Link> que deixou o <Link to="/DesafioV1">desafio</Link> pode optar por apagar as tarefas ou não</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)

export default DeixarDesafioV1
