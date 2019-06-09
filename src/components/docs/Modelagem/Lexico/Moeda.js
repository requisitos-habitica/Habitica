import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Moeda" author="Ésio Freitas"/>
    <Card>
      <h2>Definições</h2>
      <p>Moeda.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>moedas</li>
        <li>ouro</li>
        <li>Pontos de Ouro</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É utilizada dentro do Habitica para adquirir Recompensas personalizadas, poções de vida, equipamentos, armários encantados, certas missões e itens de transformação. O montante de ouro disponível para jogadores é exibido na barra de ferramentas.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Possibilita a compra de itens na aplicação.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Base