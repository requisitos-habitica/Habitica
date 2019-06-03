import React from 'react'
import richpictures from '../../../../utils/richpictures'
import CardsGridLayout from '../../../UI/CardsGridLayout/CardsGridLayout'

const RichPicture = () => {

  return (
    <div className="content artefact">
      <h1>Rich Pictures</h1>
      <CardsGridLayout obj={ richpictures }/>
    </div>
  )
}

export default RichPicture