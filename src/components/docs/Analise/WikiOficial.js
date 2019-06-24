import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import { Link } from 'react-router-dom'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import './Verificacao.scss'



const WikiOficial = () => {

  return (
    <div className='content artefact'>

        <h1>Wiki Oficial do Habitica</h1>

        <Card>
            <p>Durante a etapa de validação dos documentos elaborados pela Disciplina, a equipe entrou em contato com o Matteo(Desenvolvedor do Habitica), durante a conversa, notamos que o Habitica não possui documentação oficial, relacionada à Requisitos. Logo, nos propuzemos a enviar alguns de nossos documentos.</p>
            <br></br>
            <p>Para isso entramos em contato com a Alys(Mantenadora da Wiki Oficial do Habitica), que mostrou interesse em alguns dos novos Rich Pictures. Que validou e nos ajudou a melhorar os documentos através de sugestões.</p>
            <br></br>
            <p>Atualmente possuímos dois de nossos documentos expostos na Wiki Oficial, sendo eles <Link>Rich Picture Geral</Link> e <Link>Rich Picture Inventário</Link></p>
            <br></br>
            <p>Nossos documentos estão disponíveis <a href='https://habitica.fandom.com/wiki/Guidance_for_Blacksmiths#Reverse-Engineered_Requirements_Documents' >aqui</a> na Wiki Oficial</p>
        </Card>

    </div>
  )
}

export default WikiOficial