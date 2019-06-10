import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const AmpulhetaMisticaV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Ampulheta Mística" author="Lucas Dutra"/>
    <Card>
      <h2>Nome</h2>
      <p>Ampulheta Mística</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Ampulhetas místicas</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É utilizado dentro do Habitica para comprar mascotes, montarias e equipamentos exclusivos para assinantes.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Possibilita a compra de mascotes, montarias e equipamentos que somente assinantes têm acesso.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default AmpulhetaMisticaV1