import React from 'react'
import richpictures from '../../../../utils/richpictures'

import './RichPicture.scss'

const RichPicture = () => {

  console.log(richpictures)

  return (
    <div className="content artefact">
      <h1>Rich Pictures</h1>
      
        { Object.keys(richpictures).map(group => (
            <div className="cards-grid-container" key={ group }>
              <h2>{ group }</h2>
              <div className="cards-grid">
                { Object.keys(richpictures[group]).map(contributor => (
                  <React.Fragment key={contributor + Math.random()}>
                    {richpictures[group][contributor].map((rp, i) => (
                      <div>
                        <p>{ `RP${ contributor.split(' ')[0] }V${ i + 1 }` }</p>
                        <img src={ richpictures[group][contributor][i] } key={ contributor + i }/>)
                      </div>
                    ))}
                  </React.Fragment>
                )) }
              </div>
            </div>
          )
        ) }

    </div>
  )
}

export default RichPicture