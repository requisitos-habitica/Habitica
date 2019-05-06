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
          <Link target="_blank" to="/ModelagemLexicos/Tarefa">Tarefa</Link> que o usuário pode completar de acordo com um intervalo definido por ele na <Link target="_blank" to="/CriarTarefaDiaria">criação da tarefa</Link>  
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O usuário pode <Link target="_blank" to="/CompletarTarefaDiaria">completar a tarefa diária</Link></li>
        <li>O usuário pode <Link target="_blank" to="/CriarTarefaDiaria">criar</Link>, <Link target="_blank" to="/EditarTarefaDiaria">editar</Link> ou <Link target="_blank" to="/ExcluirTarefaDiaria">excluir tarefas diárias</Link></li>        
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default TarefaDiaria
