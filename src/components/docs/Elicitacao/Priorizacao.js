import React from 'react'
import route from '../../../assets/destination.svg'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import Protocolo from '../../../assets/Protocolo.svg'
import cow from '../../../assets/cow.svg'
import HOQ from '../../../assets/HOQ.svg'
import FTF from '../../../assets/FTF.svg'


const items = [
  {
    link: '/HOQ',
    img: HOQ,
    title: 'House of Quality'
  },
  {
    link: '/FirstThingsFirst',
    img: FTF,
    title: 'First Things First'
  },
  {
    link: '/MoSCoW',
    img: cow,
    title: 'MoSCoW'
  },
]

const Elicitacao = () => (
  <div className="content artefact">
    <h1>Priorização</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Elicitacao