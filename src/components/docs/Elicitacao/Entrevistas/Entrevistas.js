import React from 'react'
import NCardsLayout from '../../../UI/NCardsLayout/NCardsLayout'
import Interview from '../../../../assets/Interview.svg'



const items = [
  {
    link: '/Entrevista/01',
    img: Interview,
    title: 'Rodrigo Nascimento'
  },
  {
    link: '/Entrevista/02',
    img: Interview,
    title: 'Filipe Toyoshima'
  }
]

const Elicitacao = () => (
  <div className="content artefact">
    <h1>Entrevistas</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Elicitacao