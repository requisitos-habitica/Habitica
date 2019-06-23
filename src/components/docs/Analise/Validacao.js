import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import dictionary from '../../../assets/dictionary.svg'
import route from '../../../assets/destination.svg'
import checklist from '../../../assets/checklist.svg'
import correct from '../../../assets/correct.svg'
import Referencias from '../../UI/reference/reference'

const items = [
  {
    link: '/Prototipo',
    img: checklist,
    title: 'Protótipo'
  },
  {
    link: '/Emails',
    img: correct,
    title: 'E-mails'
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