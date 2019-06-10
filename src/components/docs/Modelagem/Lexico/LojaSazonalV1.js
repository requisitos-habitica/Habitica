import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const LojaSazonalV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Loja Sazonal" author="Lucas Dutra"/>
    <Card>
      <h2>Nome</h2>
      <p>Loja Sazonal</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Lojas Sazonais</li>
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
        <li>Possibilita a compra de ovos, poções e equipamentos que variam de acordo com as estações do ano.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default LojaSazonalV1