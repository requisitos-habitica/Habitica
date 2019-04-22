import React from 'react'
import { Link } from 'react-router-dom'
const Wiki = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Wiki" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>Wiki</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>-</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            Wiki é o website do Habitica responsável por informar os aspectos gerais da aplicação. Na Wiki contribuidores podem modificar o seu conteúdo de maneira colaborativa
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Wiki traz aspectos gerais do Habitica</li>
        <li>Wiki orienta usuários sobre como contribuir para o Habitica</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default Wiki
