import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import './Verificacao.scss'



const VerificacaoSuplementarV1 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={null} rastreability={null}
        title="Verificação Especificação Suplementar V1" author="Saleh Kader" />

      <Card >
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQBaB5rcXkROaY94qWTM_q-piIaX8uIG4tmStedPfHdIZdpjDdZo_jVoH3v-zYRSdqjmBLRDK48DNXr/pubhtml?gid=0&single=true" height="500" width="650"></iframe>
      </Card>

    </div>
  )
}

export default VerificacaoSuplementarV1