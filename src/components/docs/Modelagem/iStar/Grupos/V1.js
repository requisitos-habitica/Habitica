import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../../UI/Card/Card'
import HeadArtefact from '../../../../HOC/HeadArtefact/HeadArtefact'
import S1 from '../../../../../assets/Modelagem/iStar/Grupos/DependenciaV1.png'
import S2 from '../../../../../assets/Modelagem/iStar/Grupos/RationaleV1.png'
import ReactImageMagnify from 'react-image-magnify'

const LojaRascunho = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="iStar Grupos" author="Kaique Borges"/>

    <Card>
    <h2>Modelo de Dependência</h2>
      <ReactImageMagnify {...{
        smallImage: {
            alt: 'SD',
            src: S1,
            isFluidWidth: true
        },
        largeImage: {
            src: S1,
            width: 800,
            height: 650
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />

    </Card>

    <Card>
        <h2>Modelo Rationale</h2>
        <ReactImageMagnify {...{
        smallImage: {
            alt: 'SR',
            src: S2,
            isFluidWidth: true
        },
        largeImage: {
            src: S2,
            width: 1500,
            height: 1000
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />
    </Card>

  </div>
)

export default LojaRascunho
