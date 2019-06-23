import React from 'react'
import NCardsLayout from '../../../UI/NCardsLayout/NCardsLayout'
import dictionary from '../../../../assets/dictionary.svg'
import route from '../../../../assets/destination.svg'
import NFR from '../../../../assets/NFR.svg'
import IStar from '../../../../assets/IStar.svg'
import Agile from '../../../../assets/Agile.svg'
import CasosDeUso from '../../../../assets/CasosDeUso.svg'
import Suplementar from '../../../../assets/Suplementar.svg'
import Referencias from '../../../UI/reference/reference'

const items = [
  {
    link: '/iStarDesafios',
    img: dictionary,
    title: 'Desafios'
  },
  {
    link: '/iStarLojaV3',
    img: route,
    title: 'Lojas'
  },
  {
    link: '/iStarGruposV1',
    img: CasosDeUso,
    title: 'Grupos'
  },
  {
    link: '/iStarTarefasV2',
    img: Suplementar,
    title: 'Tarefas'
  },
  {
    link: '/iStarMascoteV1',
    img: Agile,
    title: 'Mascotes'
  }
]

const Modelagem = (props) => (
  <div>
    <div className="content artefact">
      <h1>iStar</h1>
      <NCardsLayout items={items} />
    </div>
    <Referencias reference="modelagem" />
  </div>
)

export default Modelagem