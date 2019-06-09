import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const APIHabitica = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="API do Habitica" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>API do Habitica</p>
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
        <li>API do Habitica é um conjunto de instruções e padrões de programação para acesso ao seu aplicativo ou a sua plataforma Web</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>API do Habitica permite que os Ferreiros criem aplicativos, extensões e outras ferramentas de terceiros que fazem interface com o Habitica</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default APIHabitica
