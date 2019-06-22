import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import './Verificacao.scss'
import V2 from '../../../assets/Analise/Suplementar/V2.jpg'
import grafico from '../../../assets/Analise/Suplementar/grafico.jpg'



const VerificacaoSuplementarV1 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Verificação Especificação Suplementar" author="Saleh Kader"/>

          <Card >
            <h2>Versionamento</h2>
            <Link to='/VerificacaoSuplementarV1' >V1</Link>
        </Card>

        <Card >
            <h2>Quantidade de Erros</h2>
            <div className='center-card'>
                <img src={grafico} ></img>
            </div>
        </Card>

        <Card >
          <div className='center-card'>
              <img src={V2} ></img>
          </div>
      </Card>

    </div>
  )
}

export default VerificacaoSuplementarV1