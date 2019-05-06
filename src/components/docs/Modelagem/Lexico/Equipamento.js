import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Equipamento = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Equipamento" author="Rogério Júnior"/>
    <Card>
      <h2>Nome</h2>
      <p>Equipamento</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Equipamentos</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Itens usados para customizar o avatar do usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O equipamento deixa o avatar mais bonito</li>
        <li>O equipamento dá habilidades ao usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Equipamento