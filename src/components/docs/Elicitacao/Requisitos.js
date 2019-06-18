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
import Questionario from '../../../assets/Questionario.svg'
import i5w2h from '../../../assets/5w2h.svg' 


const items = [
  {
    link: '/AnaliseProtocolo01',
    img: Protocolo,
    title: 'Análise de Protocolo 01'
  },
  {
    link: '/AnaliseProtocolo02',
    img: Protocolo,
    title: 'Análise de Protocolo 02'
  },
  {
    link: '/Brainstorm',
    img: Brainstorm,
    title: 'Brainstorm'
  },
  {
    link: '/Entrevista',
    img: Interview,
    title: 'Entrevistas'
  },
  {
    link: '/Etnografia',
    img: Etnografia,
    title: 'Etnografia'
  },
  {
    link: '/Introspeccao',
    img: Introspeccao,
    title: 'Introspecção'
  },
  {
    link: '/Persona',
    img: Persona,
    title: 'Persona'
  },
  {
    link: '/Storytelling01',
    img: Storytelling,
    title: 'Storytelling 01'
  },
  {
    link: '/Storytelling02',
    img: Storytelling,
    title: 'Storytelling 02'
  },
  {
    link: '/Questionario',
    img: Questionario,
    title: 'Questionário'
  },
  {
    link: '/5W2H',
    img: i5w2h,
    title: '5W2H'
  },
]

const Elicitacao = () => (
  <div className="content artefact">
    <h1>Elicitação</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Elicitacao