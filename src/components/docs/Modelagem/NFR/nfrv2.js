import React from 'react'
import { Link } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify'

import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import img from '../../../../assets/NFRHabiticav2.png'

const NFRV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="NFR V2" author="Rogério Júnior e Youssef Muhamad"/>

    <Card>
      <h2>Versionamento</h2>
      <p><Link to='/NFR V1'>V1</Link></p>
    </Card>

    <Card style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'NFR V1',
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

export default NFRV2
