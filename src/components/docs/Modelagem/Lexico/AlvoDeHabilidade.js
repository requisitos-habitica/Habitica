import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const AlvoDeHabilidade = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Alvo de Habilidade" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Alvo de Habilidade</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Alvo de Skill</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Usuário ou <Link to="/Tarefa">Tarefa</Link> que recebeu o efeito de uma Habilidade</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Usuário ou <Link to="/Tarefa">Tarefa</Link> recebem o efeito de uma Habilidade</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default AlvoDeHabilidade