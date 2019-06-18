import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import CasosObj from './CasosDeUsoObj.js'
import './CasosDeUso.scss'


const Diagramas = (props) => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title={props.title} author={props.author} />

    <Card>
        <h2>Diagrama</h2>
        <div className='img-cont'>
            <img src={require(`../../../../assets/CasosDeUso/${props.image}`)} ></img>
        </div>
    </Card>

    </div>
  )
}

export default Diagramas