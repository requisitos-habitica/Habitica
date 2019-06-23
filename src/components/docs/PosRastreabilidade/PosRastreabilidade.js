import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import dictionary from '../../../assets/dictionary.svg'

const items = [
  {
    link: '/ForwardFrom',
    img: dictionary,
    title: 'Forward From'
  },
  {
    link: '/BackwardFrom',
    img: dictionary,
    title: 'BackwardFrom'
  },
  {
    link: '/FactBox',
    img: dictionary,
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