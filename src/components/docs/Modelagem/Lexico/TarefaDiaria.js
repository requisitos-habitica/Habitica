import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const TarefaDiaria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Tarefa Diária" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Tarefa Diária</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Daily</li>
        <li>Diárias</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
          <Link to="/Tarefa">Tarefa</Link> que o usuário pode completar de acordo com um intervalo definido por ele na <Link to="/CriarTarefaDiaria">criação da tarefa</Link>  
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O usuário pode <Link to="/CompletarTarefaDiaria">completar a tarefa diária</Link></li>
        <li>O usuário pode <Link to="/CriarTarefaDiaria">criar</Link>, <Link to="/EditarTarefaDiaria">editar</Link> ou <Link to="/ExcluirTarefaDiaria">excluir tarefas diárias</Link></li>        
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default TarefaDiaria
