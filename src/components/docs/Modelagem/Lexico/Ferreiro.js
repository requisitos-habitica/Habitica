import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Ferreiro = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Ferreiros" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>Ferreiros</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
          <li>Blacksmiths</li>
	      <li>Programadores</li>
	      <li>Desenvolvedores</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Ferreiros são pessoas, que desenvolvem, codifica ou projeta o software do Habitica, contribuindo para o projeto</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ferreiros ajudam a melhorar a qualidade do projeto do Habitica</li>
        <li>Ferreiros podem utilizar o código fonte do Habitica para estudar</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Ferreiro
