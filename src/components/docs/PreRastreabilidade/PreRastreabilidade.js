import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import richpictureIcon from '../../../assets/rich-picture.svg'
import argumentacaoIcon from '../../../assets/argumentacao.svg'
import Args from '../../UI/reference/reference'

const items = [
  {
    link: '/Argumentacoes',
    img: argumentacaoIcon,
    title: 'Argumentações'
  },
  {
    link: '/RichPictures',
    img: richpictureIcon,
    title: 'Rich Pictures'
  }
]

const PreRastreabilidade = () => (
  <div>
    <div className="content artefact">
      <h1>Pré-Rastreabilidade</h1>
      <NCardsLayout items={items} />
    </div>
    <Args reference="preRastrabilidade"/>
  </div>
)

export default PreRastreabilidade