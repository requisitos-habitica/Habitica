import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import SD from '../../../../assets/Modelagem/iStar/Desafio/Diagrama.png'
import SR1 from '../../../../assets/Modelagem/iStar/Desafio/RationaleCriador.png'
import SR2 from '../../../../assets/Modelagem/iStar/Desafio/RationaleParticipante.png'
import ReactImageMagnify from 'react-image-magnify'

const AdicionarTarefasDeDesafioV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="iStar Desafios" author="Gabriel Albino"/>
    <Card>
      <h2>Modelo de Dependência</h2>
      <ReactImageMagnify {...{
        smallImage: {
            alt: 'SD',
            src: SD,
            isFluidWidth: true
        },
        largeImage: {
            src: SD,
            width: 2000,
            height: 1500
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />

    </Card>
        <Card>
        <h2>Modelo Rationale Criador do Desafio</h2>
        <ReactImageMagnify {...{
        smallImage: {
            alt: 'SR',
            src: SR1,
            isFluidWidth: true
        },
        largeImage: {
            src: SR1,
            width: 1500,
            height: 1500
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />
    </Card>

  <Card>
    <h2>Modelo Rationale Participante do Desafio</h2>
    <ReactImageMagnify {...{
        smallImage: {
            alt: 'SR',
            src: SR2,
            isFluidWidth: true
        },
        largeImage: {
            src: SR2,
            width: 1500,
            height: 1500
        },
        isHintEnabled: true,
        enlargedImagePosition: "over",
    }} />
    </Card>

  </div>
)

export default AdicionarTarefasDeDesafioV1
