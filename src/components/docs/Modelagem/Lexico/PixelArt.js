import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const PixelArt = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Pixel Art" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>Pixel Art</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Arte</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            Pixel Art são formas de artes digitais, na qual sua estrutura é feita tendo pixels como base
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Contribuidores podem subir suas pixel arts no Habitica para receber feedbacks</li>
        <li>Contribuidores podem adicionar suas pixel arts nas aplicações do Habitica</li> 
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default PixelArt