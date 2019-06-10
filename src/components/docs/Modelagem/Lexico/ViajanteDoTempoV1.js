import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ViajanteDoTempoV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Viajante do Tempo" author="Lucas Dutra"/>
    <Card>
      <h2>Nome</h2>
      <p>Viajante do tempo</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Viajantes do tempo</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É uma das ramificações de lojas dentro do Habitica.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Possibilita a compra de montarias, mascotes e equipamentos que somente os assinantes de habitica serão capazes de comprar.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default ViajanteDoTempoV1