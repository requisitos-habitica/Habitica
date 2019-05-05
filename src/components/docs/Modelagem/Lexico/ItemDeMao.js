import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ItemDeMao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Item de Mão" author="Quem fez"/>
    <Card>
      <h2>Nome</h2>
      <p>Item de Mão</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Itens de Mão</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Objetos que são usados na mão esquerda ou direita</li>
        <li>Normalmente são escudos, armas, espadas, dentre outros</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Aumenta as habilidades do usuário</li>
        <li>Deixa o avatar mais bonito</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default ItemDeMao