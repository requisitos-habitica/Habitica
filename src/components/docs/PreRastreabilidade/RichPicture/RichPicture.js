import React from 'react'
import richpictures from '../../../../utils/richpictures'
import CardsGridLayout from '../../../UI/CardsGridLayout/CardsGridLayout'
import Modal from '../../../HOC/Modal/Modal'

const RichPicture = () => {

  const [fullSizeImg, setFullSizeImg] = React.useState(null)

  const openArtefactFullSize = (img) => setFullSizeImg(img)
  const closeArtefactFullSize = () => setFullSizeImg(null)

  return (
    <div className="content artefact">
      <h1>Rich Pictures</h1>
      { fullSizeImg ? <Modal onClose={closeArtefactFullSize}> <img src={fullSizeImg} style={{width: "75vw", height: "85vh"}}/> </Modal> : null }
      <CardsGridLayout obj={ richpictures } onClick={ openArtefactFullSize }/>
    </div>
  )
}

export default RichPicture