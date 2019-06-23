import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../../UI/Card/Card'
import HeadArtefact from '../../../../HOC/HeadArtefact/HeadArtefact'
import S1 from '../../../../../assets/Modelagem/iStar/Loja/DependenciaV2.png'
import S2 from '../../../../../assets/Modelagem/iStar/Loja/RationaleLojaV2.png'
import S3 from '../../../../../assets/Modelagem/iStar/Loja/RationaleUserV2.png'
import ReactImageMagnify from 'react-image-magnify'

const LojaRascunho = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="iStar Loja V2" author="Pedro Féo e Saleh Kader"/>

    <Card>
        <h2>Versionamento</h2>
        <p><Link to='/RascunhoLoja' >Rascunhos</Link></p>
        <p><Link to='/iStarLojaV1' >V1</Link></p>
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
            height: 600
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />

    </Card>

    <Card>
        <h2>Modelo Rationale Loja</h2>
        <ReactImageMagnify {...{
        smallImage: {
            alt: 'SR',
            src: S2,
            isFluidWidth: true
        },
        largeImage: {
            src: S2,
            width: 1200,
            height: 1200
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />
    </Card>

    <Card>
        <h2>Modelo Rationale Usuário</h2>
        <ReactImageMagnify {...{
        smallImage: {
            alt: 'SR',
            src: S3,
            isFluidWidth: true
        },
        largeImage: {
            src: S3,
            width: 1200,
            height: 1200
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />
    </Card>

  </div>
)

export default LojaRascunho
