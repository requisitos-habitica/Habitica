import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import dictionary from '../../../assets/dictionary.svg'
import route from '../../../assets/destination.svg'

const items = [
  {
    link: '/Lexicos',
    img: dictionary,
    title: 'Léxicos'
  },
  {
    link: '/Cenarios',
    img: route,
    title: 'Cenários'
  }
]

const Modelagem = (props) => (
  <div className="content artefact">
    <h1>Modelagem</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Modelagem