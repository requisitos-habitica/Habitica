import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../../UI/Card/Card'
import HeadArtefact from '../../../../HOC/HeadArtefact/HeadArtefact'
import S1 from '../../../../../assets/Modelagem/iStar/Tarefas/DependenciaV1.png'
import S2 from '../../../../../assets/Modelagem/iStar/Tarefas/SR1V1.png'
import S3 from '../../../../../assets/Modelagem/iStar/Tarefas/SR2V1.png'
import S4 from '../../../../../assets/Modelagem/iStar/Tarefas/MergeV1.png'
import ReactImageMagnify from 'react-image-magnify'

const LojaRascunho = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="iStar Tarefas V1" author="Gabriel Albino"/>

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
            height: 550
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
            width: 1000,
            height: 1000
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
            src: S3,
            isFluidWidth: true
        },
        largeImage: {
            src: S3,
            width: 1500,
            height: 1000
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />
    </Card>

    <Card>
        <h2>Junção de Modelos</h2>
        <ReactImageMagnify {...{
        smallImage: {
            alt: 'SR',
            src: S4,
            isFluidWidth: true
        },
        largeImage: {
            src: S4,
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
