import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const CriarDesafioV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Criar desafio" author="Kaique"/>
    <Card>
      <h2>Nome</h2>
      <p>Criar desafio</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Usuário quer motivar outros através de competitividade e recompensa</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li><Link to="/DesafioV1">Desafio</Link> criado</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)

export default CriarDesafioV1
