import React from 'react'
import route from '../../../assets/destination.svg'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import Trophy from '../../../assets/Trophy.svg'
import Requisitos from '../../../assets/Requisitos.svg'



const items = [
  {
    link: '/RequisitosElicitacao',
    img: Requisitos,
    title: 'Elicitação de Requisitos'
  },
  {
    link: '/Priorizacao',
    img: Trophy,
    title: 'Priorização'
  }
]

const Elicitacao = () => (
  <div className="content artefact">
    <h1>Elicitação</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Elicitacao