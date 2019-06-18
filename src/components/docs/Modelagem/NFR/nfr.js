import React from 'react'
import { Link } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify'

import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import img from '../../../../assets/NFRHabiticav4.png'

const NFR = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="NFR V4" author="Rogério Júnior e Youssef Muhamad"/>

    <Card>
      <h2>Versionamento</h2>
      <p><Link to='/NFR V1'>V1</Link></p>
      <p><Link to='/NFR V2'>V2</Link></p>
      <p><Link to='/NFR V3'>V3</Link></p>
    </Card>

    <Card>
        <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'NFR',
                            src: img,
                            width: 800,
                            height: 450
                        },
                        largeImage: {
                            src: img,
                            width: 2500,
                            height: 1800
                        },
                        isHintEnabled: true,
                        enlargedImagePosition: "over",
                    }} />
    </Card>

  </div>
)

export default NFR
