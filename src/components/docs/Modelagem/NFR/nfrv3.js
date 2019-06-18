import React from 'react'
import { Link } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify'

import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import img from '../../../../assets/NFRHabiticav3.png'

const NFRV3 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="NFR V3" author="Rogério Júnior e Youssef Muhamad"/>

    <Card>
        <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'NFR V1',
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

export default NFRV3
