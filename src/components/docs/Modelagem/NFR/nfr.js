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

    <Card style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'NFR',
                            src: img,
                            width: 1000,
                            height: 750
                        },
                        largeImage: {
                            src: img,
                            width: 3000,
                            height: 2500
                        },
                        isHintEnabled: true,
                        enlargedImagePosition: "over",
                    }} />
    </Card>

  </div>
)

export default NFR
