import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Afazer = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Afazer" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Afazer</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>To-do</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            <Link target="_blank" to="/Tarefa">Tarefa</Link> que o usuário pode completar uma única vez
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
            <li>O usuário pode <Link target="_blank" to="/ConcluirAfazer">completar o afazer</Link></li>
            <li>O usuário pode <Link target="_blank" to="/CriarAfazer">criar</Link>, <Link target="_blank" to="/EditarAfazer">editar</Link> ou <Link target="_blank" to="/ExcluirAfazer">excluir afazeres</Link></li>          
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default Afazer