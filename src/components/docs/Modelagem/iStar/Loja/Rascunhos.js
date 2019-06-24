import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../../UI/Card/Card'
import HeadArtefact from '../../../../HOC/HeadArtefact/HeadArtefact'
import S1 from '../../../../../assets/Modelagem/iStar/Loja/01.jpg'
import S2 from '../../../../../assets/Modelagem/iStar/Loja/02.jpg'
import S3 from '../../../../../assets/Modelagem/iStar/Loja/03.jpg'
import ReactImageMagnify from 'react-image-magnify'

const LojaRascunho = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="iStar Rascunhos Loja" author="Pedro Féo e Saleh Kader"/>
    <Card>
      <ReactImageMagnify {...{
        smallImage: {
            alt: 'Rascunho',
            src: S1,
            isFluidWidth: true
        },
        largeImage: {
            src: S1,
            width: 800,
            height: 1200
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />

    </Card>

    <Card>
        <ReactImageMagnify {...{
        smallImage: {
            alt: 'Rascunho',
            src: S2,
            isFluidWidth: true
        },
        largeImage: {
            src: S2,
            width: 1000,
            height: 1000
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />
    </Card>

  <Card>
    <ReactImageMagnify {...{
        smallImage: {
            alt: 'Rascunho',
            src: S3,
            isFluidWidth: true
        },
        largeImage: {
            src: S3,
            width: 1000,
            height: 1000
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />
    </Card>

  </div>
)

export default LojaRascunho
