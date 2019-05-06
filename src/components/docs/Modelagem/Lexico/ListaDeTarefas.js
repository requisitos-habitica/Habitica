import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ListaDeTarefas = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Lista de Tarefas" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Lista de Tarefas</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Task list</li>
        <li>Lista de afazeres</li>
        <li>Lista de hábitos</li>
        <li>Lista de diárias</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            Uma Lista de Tarefas é uma tela onde aparecem todas as <Link target="_blank" to="/Tarefa">tarefas</Link> de um determinado tipo que o usuário cadastrou
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
            <li>O usuário pode <Link target="_blank" to="/ModelagemLexicos/EditarTarefaDiaria">editar as diárias</Link>, <Link target="_blank" to="/EditarAfazer">afazeres</Link> ou <Link target="_blank" to="/EditarHabito">hábitos</Link> a partir da tela de lista</li>
            <li>O usuário pode marcar uma <Link target="_blank" to="/CompletarTarefaDiaria">diária</Link>, <Link target="_blank" to="/ConcluirAfazer">afazer</Link> ou <Link target="_blank" to="/IncrementarHabito">hábito como concluído</Link></li>
            <li>O usuário pode <Link target="_blank" to="/ExcluirTarefaDiaria">excluir uma diária</Link>, <Link target="_blank" to="/ExcluirHabito">hábito</Link> ou <Link target="_blank" to="/ExcluirAfazer">afazer</Link> da lista</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default ListaDeTarefas