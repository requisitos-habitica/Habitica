import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import CasosObj from './CasosDeUsoObj.js'
import './CasosDeUso.scss'
import ReactImageMagnify from 'react-image-magnify'


const CasoDeUsoBase = (props) => {

  let x = props.info.x * 1.5
  let y = props.info.y * 1.5

  console.log(props)

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title={props.title} author={props.info.author} />

    { props.info.images.length > 0 ?
      <Card>
      <div>
        <h2>Diagramas</h2>
        {
          props.info.images.map((image, i) => {
            if(props.info.images.length == i+1){
              return (
                <div>
                  <h3>V{i+1}</h3>
                  <div className='img-cont'>
                    <ReactImageMagnify {...{
                      smallImage: {
                          alt: 'NFR V1',
                          src: require(`../../../../assets/CasosDeUso/${image}`),
                          isFluidWidth: true,
                      },
                      largeImage: {
                          src: require(`../../../../assets/CasosDeUso/${image}`),
                          width: x,
                          height: y
                      },
                      isHintEnabled: true,
                      enlargedImagePosition: "over",
                  }} />
                </div>
              </div>
              )
            }
            else{
              return(
                <p><Link to={`/DiagramasCasoUso/${props.title}/V${i+1}`} >V{i+1}</Link></p>
              )
            }
          })
        }
        </div> </Card>: null
      }

    {props.info.UCs.map((UC) => {
      return(
        <div id={`UC${UC.id}`}>
          <Card>
            <h1>UC{UC.id} - {UC.name}</h1>
            <br></br>
            <h2>Breve Descrição</h2>
            <br></br>
            <p>{UC.description}</p>
            <br></br>
            <h2>Atores</h2>
            {UC.actors.map(actor => <p>{actor}</p>)}
            <br></br>
            <h2>Fluxo de eventos</h2>
            <h3>Fluxo básico</h3>
            {UC.basic_flux.map(ep => <p>{ep}</p>)}
            <br></br>
            {
              UC.alternative_flux.length > 0 ? 
              <div>
              <h3>Fluxos Alternativos</h3>
              {UC.alternative_flux.map((flux, i) => 
                <div>
                  <h4>FA{i+1} - {flux.name}</h4>
                  {flux.flux.map(ep => <p>{ep}</p>)}
                </div>)}
                <br></br>
              </div> : null
            }
            {
              UC.exeption_flux.length > 0 ? 
              <div>
              <h3>Fluxos de Exceção</h3>
              {UC.exeption_flux.map((flux, i) => 
                <div>
                  <h4>FE{i+1} - {flux.name}</h4>
                  {flux.flux.map(ep => <p>{ep}</p>)}
                </div>)}
                <br></br>
              </div> : null
            }
            <h2>Pré-condições</h2>
            {UC.pre_conditions.map(condition => <p>{condition}</p>)}
            <br></br>
            <h2>Pós-condições</h2>
            {UC.pos_conditions.map(condition => <p>{condition}</p>)}
            <br></br>
          </Card>
        </div>
      )
    })}

    </div>
  )
}

export default CasoDeUsoBase