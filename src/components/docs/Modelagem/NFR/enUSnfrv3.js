import React from 'react'
import { Link } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify'

import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import img from '../../../../assets/enUSNFRv3.jpg'

const enUSnfrv3 = () => (
  <div className="content artefact">
    <HeadArtefact versions={null} rastreability={null}
      title="enUS - NFR V3" author="Pedro Féo, Rogério Júnior e Youssef Muhamad" />

    <Card>
      <h2>Versionamento</h2>
      <p><Link to='/NFR V1'>V1</Link></p>
      <p><Link to='/NFR V2'>V2</Link></p>
      <p><Link to='/NFR V3'>V3</Link></p>
    </Card>

    <Card style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h2>NFR</h2>
      <ReactImageMagnify {...{
        smallImage: {
          alt: 'NFR',
          src: img,
          isFluidWidth: true
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

export default enUSnfrv3
