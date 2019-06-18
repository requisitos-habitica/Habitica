import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../../UI/Card/Card'
import './Brainstorm.scss'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const palavras = [
  'Habitos',
  'Tarefa',
  'organização',
  'gamificação', 
  'avatar',
  'missão',
  'atividade',
  'transformação',
  'engajamento',
  'RPG',
  'comunidade', 
  'mascote',
  'evolução',
  'motivação',
  'hacker',
  'personagem',
  'desafios',
  'espada',
  'armadura',
  'dragão',
  'moedas',
  'trabalho em equipe',
  'chefão',
  'gatuno',
  'mago',
  'guerreiro',
  'curandeiro',
  'prêmios',
  'feedback',
  'priorização',
  'white hat',
  'monstro',
  'grupo',
  'desafios',
  'armadura',
  'guilda',
  'flor',
  'compras',
  'chat',
  'experiência',
  'pet',
  'vida',
  'itens',
  'capacete'
  ]

const BrainstormV1 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Brainstorm V1" author="Todos do Grupo"/>
      <Card>
        <div className='brainstormv1'>
          {palavras.map(palavra => <h2 className='brainstormv1_word'>{palavra}</h2>)}
        </div>
      </Card>
    </div>
  )
}

export default BrainstormV1