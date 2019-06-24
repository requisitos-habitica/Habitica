import React from 'react'
import NCardsLayout from '../../../UI/NCardsLayout/NCardsLayout'
import Configuracao from '../../../../assets/configuracao (1).svg'
import Inventario from '../../../../assets/inventario (1).svg'
import Desafio from '../../../../assets/desafios.svg'
import Gamificacao from '../../../../assets/gamificacao (1).svg'
import Contribuicao from '../../../../assets/contribuicao (1).svg'
import Loja from '../../../../assets/loja.svg'


const items = [
  {
    link: '/CasosDeUsoConfiguração',
    img: Configuracao,
    title: 'Configuração'
  },
  {
    link: '/CasosDeUsoDesafios',
    img: Desafio,
    title: 'Desafios'
  },
  {
    link: '/CasosDeUsoGamificação',
    img: Gamificacao,
    title: 'Gamificação'
  },
  {
    link: '/CasosDeUsoGuia de Contribuição',
    img: Contribuicao,
    title: 'Guia de Contribuição'
  },
  {
    link: '/CasosDeUsoInventário',
    img: Inventario,
    title: 'Inventário'
  },
  {
    link: '/CasosDeUsoLoja',
    img: Loja,
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