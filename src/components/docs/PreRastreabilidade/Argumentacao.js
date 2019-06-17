import React from 'react'
import argumentacao from '../../../utils/argumentacao'
import CardsGridLayout from '../../UI/CardsGridLayout/CardsGridLayout'
import Modal from '../../HOC/Modal/Modal'

const RichPicture = () => {

  const [fullSizeImg, setFullSizeImg] = React.useState(null)

  const openArtefactFullSize = (img) => setFullSizeImg(img)
  const closeArtefactFullSize = () => setFullSizeImg(null)

  return (
    <div className="content artefact">
      <h1>Argumentações</h1>
      { fullSizeImg ? <Modal onClose={closeArtefactFullSize}> <img src={fullSizeImg} style={{width: "auto", height: "85vh", border:".4rem solid #7300B5"}}/> </Modal> : null }
      <CardsGridLayout obj={ argumentacao } onClick={ openArtefactFullSize }/>
    </div>
  )
}

export default RichPicture