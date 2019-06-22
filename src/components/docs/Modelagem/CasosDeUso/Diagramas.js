import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import CasosObj from './CasosDeUsoObj.js'
import ReactImageMagnify from 'react-image-magnify'
import './CasosDeUso.scss'


const Diagramas = (props) => {

    let x = props.x * 1.5
    let y = props.y * 1.5

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title={props.title} author={props.author} />

    <Card>
        <h2>Diagrama</h2>
        <div className='img-cont'>
        <ReactImageMagnify {...{
          smallImage: {
              alt: 'NFR V1',
              src: require(`../../../../assets/CasosDeUso/${props.image}`),
              isFluidWidth: true,
          },
          largeImage: {
              src: require(`../../../../assets/CasosDeUso/${props.image}`),
              width: x,
              height: y
          },
          isHintEnabled: true,
          enlargedImagePosition: "over",
      }} />
    </div>
    </Card>

    </div>
  )
}

export default Diagramas