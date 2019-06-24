import React from 'react'
import NCardsLayout from '../../../UI/NCardsLayout/NCardsLayout'
import Referencias from '../../../UI/reference/reference'
import Desafio from '../../../../assets/desafios.svg'
import Loja from '../../../../assets/loja.svg'
import Grupos from '../../../../assets/grupos (2).svg'
import Mascotes from '../../../../assets/mascotes (1).svg'
import Tarefas from '../../../../assets/tarefas (1).svg'

const items = [
  {
    link: '/iStarDesafios',
    img: Desafio,
    title: 'Desafios'
  },
  {
    link: '/iStarLojaV3',
    img: Loja,
    title: 'Lojas'
  },
  {
    link: '/iStarGruposV1',
    img: Grupos,
    title: 'Grupos'
  },
  {
    link: '/iStarTarefasV2',
    img: Tarefas,
    title: 'Tarefas'
  },
  {
    link: '/iStarMascoteV1',
    img: Mascotes,
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