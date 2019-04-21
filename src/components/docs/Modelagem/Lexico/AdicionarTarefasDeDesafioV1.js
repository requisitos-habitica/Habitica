import React from 'react'
import { Link } from 'react-router-dom'

const AdicionarTarefasDeDesafioV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Adicionar tarefas de desafio" author="Kaique"/>
    <Card>
      <h2>Nome</h2>
      <p>Adicionar tarefas de desafio</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Usuário que cria <Link to="/DesafioV1">desafio</Link> deseja adicionar as tarefas do mesmo</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O <Link to="/DesafioV1">desafio</Link> passa a ter tarefas, com as quais os <Link to="/ParticipanteV1">participantes</Link> podem interagir</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)

export default AdicionarTarefasDeDesafioV1
