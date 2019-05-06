import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ArmarioEncantado = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Armário Encantado" author="Quem fez"/>
    <Card>
      <h2>Nome</h2>
      <p>Armário Encantado</p>
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
        <li>Item custa 100 moedas</li>
        <li>Item dá ao usuário prêmios aleatórios</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
       <li>Item pode ser aberto</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default ArmarioEncantado