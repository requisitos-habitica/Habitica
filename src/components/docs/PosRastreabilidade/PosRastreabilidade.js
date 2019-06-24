import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import fact from '../../../assets/network.svg'
import back from '../../../assets/right-arrow.svg'
import forw from '../../../assets/back-drawn-arrow.svg'

const items = [
  {
    link: '/BackwardFrom',
    img: forw,
    title: 'BackwardFrom'
  },
  {
    link: '/ForwardFrom',
    img: back,
    title: 'Forward From'
  },
  {
    link: '/FactBox',
    img: fact,
    title: 'FactBox'
  }
]

const PosRastreabilidade = (props) => (
  <div>
    <div className="content artefact">
      <h1>Pós-Rastreabilidade</h1>
      <NCardsLayout items={items} />
    </div>
  </div>
)

export default PosRastreabilidade