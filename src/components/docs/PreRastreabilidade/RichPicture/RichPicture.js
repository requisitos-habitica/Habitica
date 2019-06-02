import React from 'react'
import richpictures from '../../../../utils/richpictures'

import './RichPicture.scss'

const RichPicture = () => {

  console.log(richpictures)

  return (
    <div className="content artefact">
      <h1>Rich Pictures</h1>
      
        { Object.keys(richpictures).map(group => (
            <>
              <h2>{ group }</h2>
              <div className="cards-grid">
                { Object.keys(richpictures[group]).map(contributor => (
                  <>
                  <p>{contributor}</p>
                  {richpictures[group][contributor].map((rp, i) => <img src={richpictures[group][contributor][i]} style={{width:"10rem", height:"10rem"}}/>)}
                  </>
                )) }
              </div>
            </>
          )
        ) }

    </div>
  )
}

export default RichPicture