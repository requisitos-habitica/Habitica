import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import dictionary from '../../../assets/dictionary.svg'
import route from '../../../assets/destination.svg'
import prototype from '../../../assets/prototype.svg'
import email from '../../../assets/email.svg'
import gryphon from '../../../assets/gryphon.svg'
import Referencias from '../../UI/reference/reference'

const items = [
  {
    link: '/Prototipo',
    img: prototype,
    title: 'Protótipo'
  },
  {
    link: '/emailMatteo',
    img: email,
    title: 'Validação Informal Matteo'
  },
  {
    link: '/emailAlys',
    img: email,
    title: 'Validação Informal Alys'
  },
  {
    link: '/WikiOficial',
    img: gryphon,
    title: 'Wiki Oficial'
  }
]

const Validacao = (props) => (
  <div>
    <div className="content artefact">
      <h1>Validação</h1>
      <NCardsLayout items={items} />
    </div>
    <Referencias reference="analise" />
  </div>
)

export default Validacao