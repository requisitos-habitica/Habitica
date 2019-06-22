import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import './Verificacao.scss'
import V1 from '../../../assets/Analise/Suplementar/V1.jpg'



const VerificacaoSuplementarV1 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Verificação Especificação Suplementar V1" author="Saleh Kader"/>

        <Card >
            <div className='center-card'>
                <img src={V1} ></img>
            </div>
        </Card>

    </div>
  )
}

export default VerificacaoSuplementarV1