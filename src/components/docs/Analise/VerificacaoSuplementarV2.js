import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import './Verificacao.scss'



const VerificacaoSuplementarV1 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={null} rastreability={null}
        title="Verificação Especificação Suplementar" author="Saleh Kader" />

      <Card >
        <h2>Versionamento</h2>
        <Link to='/VerificacaoSuplementarV1' >V1</Link>
      </Card>

      <Card>
        <h2>Rastreabilidade</h2>
        <Link to='/EspecificacaoSuplementar' >Especificação Suplementar </Link>
      </Card>


      <Card >
        <h2>Quantidade de Erros</h2>
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-qc3F4W2v6IH32CUfb3cZgP4u7g5q-4isAX9mcmy6pfb9x6dA1BLtfAscSlURc-4BeTOxHWTQ1DCS/pubchart?oid=964167898&format=image" height="500" width="650"></iframe>
      </Card>

      <Card >
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-qc3F4W2v6IH32CUfb3cZgP4u7g5q-4isAX9mcmy6pfb9x6dA1BLtfAscSlURc-4BeTOxHWTQ1DCS/pubhtml?gid=0&single=true" height="500" width="750"></iframe>
      </Card>

    </div>
  )
}

export default VerificacaoSuplementarV1