import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../../UI/Card/Card'
import HeadArtefact from '../../../../HOC/HeadArtefact/HeadArtefact'
import S1 from '../../../../../assets/Modelagem/iStar/Loja/DependenciaV3.png'
import S2 from '../../../../../assets/Modelagem/iStar/Loja/SRV3.png'
import ReactImageMagnify from 'react-image-magnify'

const LojaRascunho = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="iStar Loja V3" author="Kaique Borges"/>

    <Card>
        <h2>Versionamento</h2>
        <p><Link to='/RascunhoLoja' >Rascunhos</Link></p>
        <p><Link to='/iStarLojaV1' >V1</Link></p>
        <p><Link to='/iStarLojaV2' >V2</Link></p>
    </Card>

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
            width: 1000,
            height: 800
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
            height: 1200
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />
    </Card>

  </div>
)

export default LojaRascunho
