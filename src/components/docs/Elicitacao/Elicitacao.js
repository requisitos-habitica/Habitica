import React from 'react'
import route from '../../../assets/destination.svg'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import Protocolo from '../../../assets/Protocolo.svg'
import Brainstorm from '../../../assets/Brainstorm.svg'
import Interview from '../../../assets/Interview.svg'
import Etnografia from '../../../assets/Etnografia.svg'
import Introspeccao from '../../../assets/Introspeccao.svg'
import Persona from '../../../assets/Persona.svg'
import Storytelling from '../../../assets/Storytelling.svg'



const items = [
  {
    link: '/Lexicos',
    img: Protocolo,
    title: 'Análise de Protocolo 01'
  },
  {
    link: '/Cenarios',
    img: Protocolo,
    title: 'Análise de Protocolo 02'
  },
  {
    link: '/Cenarios',
    img: Brainstorm,
    title: 'Brainstorm'
  },
  {
    link: '/Cenarios',
    img: Interview,
    title: 'Entrevista'
  },
  {
    link: '/Cenarios',
    img: Etnografia,
    title: 'Etnografia'
  },
  {
    link: '/Cenarios',
    img: Introspeccao,
    title: 'Introspecção'
  },
  {
    link: '/Cenarios',
    img: Persona,
    title: 'Persona'
  },
  {
    link: '/Cenarios',
    img: Storytelling,
    title: 'Storytelling'
  }
]

const Elicitacao = () => (
  <div className="content artefact">
    <h1>Elicitação</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Elicitacao