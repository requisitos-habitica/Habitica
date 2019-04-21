import React from 'react'
import { Link } from 'react-router-dom'

const Tarefa = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Tarefa" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Tarefa</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Tarefas</li>
        <li>Task</li>
        <li>Tasks</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            Tarefa é o conceito chave do habitica, o usuário pode ter 3 tipos de tarefas, e cada uma pertence a uma #: <Link to="/TarefaDiaria">diárias</Link>, <Link to="/Afazer">afazeres</Link> e <Link to="/Habito">hábitos</Link>. Cada tarefa tem um modo de recompensar o usuário.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ao realizar tarefas o usuário <Link to="/ReceberRecompensa">ganha recompensas</Link></li>
        <li>Ao não realizar as tarefas o avatar pode perder vida</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default Tarefa
