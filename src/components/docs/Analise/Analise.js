import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import dictionary from '../../../assets/dictionary.svg'
import route from '../../../assets/destination.svg'
import checklist from '../../../assets/checklist.svg'
import correct from '../../../assets/correct.svg'

const items = [
  {
    link: '/Verificacao',
    img: checklist,
    title: 'Verificação'
  },
  {
    link: '/Validacao',
    img: correct,
    title: 'Validação'
  }
]

const Modelagem = (props) => (
  <div className="content artefact">
    <h1>Análise</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Modelagem