import React from 'react'
import richpictures from '../../../../utils/richpictures'
import CardsGridLayout from '../../../UI/CardsGridLayout/CardsGridLayout'

const RichPicture = () => {

  const [fullSizeImg, setFullSizeImg] = React.useState(null)

  const openArtefactFullSize = (img) => setFullSizeImg(img)
  const closeArtefactFullSize = () => setFullSizeImg(null)

  return (
    <div className="content artefact">
      <h1>Rich Pictures</h1>
      <img style={{position: "fixed", zIndex: "100", margin:"auto"}} src={fullSizeImg}/>
      <CardsGridLayout obj={ richpictures } onClick={ openArtefactFullSize }/>
    </div>
  )
}

export default RichPicture