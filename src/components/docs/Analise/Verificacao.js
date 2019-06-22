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
    link: '/VerificacaoCasoUso',
    img: CasosDeUso,
    title: 'Casos de Uso'
  },
  {
    link: '/Verificacao',
    img: route,
    title: 'Cenários'
  },
  {
    link: '/VerificacaoSuplementarV2',
    img: Suplementar,
    title: 'Especificação Suplementar'
  },
  {
    link: '/Verificacao',
    img: dictionary,
    title: 'Léxicos'
  },
  {
    link: '/VerificacaoNFR',
    img: NFR,
    title: 'NFR'
  },
  {
    link: '/VerificacaoRP',
    img: richpictureIcon,
    title: 'Rich Pictures'
  }
]

const Verificacao = (props) => (
  <div className="content artefact">
    <h1>Verificação</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Verificacao