import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import dictionary from '../../../assets/dictionary.svg'
import route from '../../../assets/destination.svg'
import NFR from '../../../assets/NFR.svg'
import Agile from '../../../assets/Agile.svg'
import CasosDeUso from '../../../assets/CasosDeUso.svg'
import Suplementar from '../../../assets/Suplementar.svg'
import richpictureIcon from '../../../assets/rich-picture.svg'

const items = [
  {
    link: '/Verificacao',
    img: Agile,
    title: 'Ágil'
  },
  {
    link: '/Validacao',
    img: CasosDeUso,
    title: 'Casos de Uso'
  },
  {
    link: '/Verificacao',
    img: route,
    title: 'Cenários'
  },
  {
    link: '/Validacao',
    img: Suplementar,
    title: 'Especificação Suplementar'
  },
  {
    link: '/Verificacao',
    img: dictionary,
    title: 'Léxicos'
  },
  {
    link: '/Validacao',
    img: NFR,
    title: 'NFR'
  },
  {
    link: '/Verificacao',
    img: richpictureIcon,
    title: 'Rich Pictures'
  }
]

const Modelagem = (props) => (
  <div className="content artefact">
    <h1>Modelagem</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Modelagem