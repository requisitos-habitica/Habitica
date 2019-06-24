import React from 'react'
import argumentacao from '../../../utils/argumentacao'
import CardsGridLayout from '../../UI/CardsGridLayout/CardsGridLayout'
import Modal from '../../HOC/Modal/Modal'
import './PreRastreabilidade.scss'

const RichPicture = () => {

  const [fullSizeImg, setFullSizeImg] = React.useState(null)

  const openArtefactFullSize = (img) => setFullSizeImg(img)
  const closeArtefactFullSize = () => setFullSizeImg(null)

  return (
    <div className="content artefact">
      <h1>Argumentações</h1>
      <h2 className='style-header'>Metodologia:</h2>
      <p>A Argumentação é uma interação social em que incluí uma negociação de argumentos a favor e contrários a um ponto de vista.</p>
      <br></br>
      <p>A metodologia adotada pelo grupo para a construção das Argumentações foi separada em duas partes:
        <ol className='align-itens'>
          <li>O grupo construíu um modelo de argumentação em conjunto.</li>
          <li>Alguns integrantes atualizaram o modelo construído em grupo e fizeram as suas próprias argumentações.</li>
        </ol>
        Seguem as Argumentações construídas:
      </p>
      { fullSizeImg ? <Modal onClose={closeArtefactFullSize}> <img src={fullSizeImg} style={{width: "auto", height: "85vh", border:".4rem solid #7300B5"}}/> </Modal> : null }
      <CardsGridLayout obj={ argumentacao } onClick={ openArtefactFullSize }/>
    </div>
  )
}

export default RichPicture