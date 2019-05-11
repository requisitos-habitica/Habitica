import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

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
            Tarefa é o conceito chave do habitica, o usuário pode ter 3 tipos de tarefas, e cada uma pertence a uma <Link to="/Tarefa Diária">diárias</Link>, <Link to="/Afazer">afazeres</Link> e <Link to="/Hábito">hábitos</Link>. Cada tarefa tem um modo de recompensar o usuário.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ao realizar tarefas o usuário <Link to="/Editar tarefa diária">ganha recompensas</Link></li>
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
