import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import CasosObj from './CasosDeUsoObj.js'
import './CasosDeUso.scss'


const CasoDeUsoConfiguracao = (props) => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title='aaaa' author='aaaa'/>

    <Card>
        <h2>Diagramas</h2>
    </Card>

    </div>
  )
}

export default CasoDeUsoConfiguracao