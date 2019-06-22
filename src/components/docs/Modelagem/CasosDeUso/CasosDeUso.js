import React from 'react'
import NCardsLayout from '../../../UI/NCardsLayout/NCardsLayout'
import Interview from '../../../../assets/Interview.svg'


const items = [
  {
    link: '/CasosDeUsoConfiguração',
    img: Interview,
    title: 'Configuração'
  },
  {
    link: '/CasosDeUsoDesafios',
    img: Interview,
    title: 'Desafios'
  },
  {
    link: '/CasosDeUsoGamificação',
    img: Interview,
    title: 'Gamificação'
  },
  {
    link: '/CasosDeUsoGuia de Contribuição',
    img: Interview,
    title: 'Guia de Contribuição'
  },
  {
    link: '/CasosDeUsoInventário',
    img: Interview,
    title: 'Inventário'
  },
  {
    link: '/CasosDeUsoLoja',
    img: Interview,
    title: 'Loja'
  }
]

const CasosDeUso = () => (
  <div className="content artefact">
    <h1>Casos de Uso</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default CasosDeUso