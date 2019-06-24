import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'


const i5W2H = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="5W2H" author="Rogério Júnior"/>

    <Card>
        <h2>Rastreabilidade</h2>
        <ul>
            <li><Link smooth to='/Questionario'>Questionario</Link></li>
        </ul>
    </Card>

    <Card>
        <h2>What</h2>
        <p>Uma aplicação de gerenciamento de tarefas que auxilie seus usuários a realizar sua organização pessoal de forma eficiente e lúdica com o uso de ferramentas gamificadas.</p>
    </Card>

    <Card>
        <h2>Why</h2>
        <p>Organização gera produtividade e bem estar àqueles que realizam seu gerenciamento, além do uso da gamificação pode ser uma motivação para esse planejamento.</p>
    </Card>

    <Card>
        <h2>Where</h2>
        <p>Uma aplicação mobile, pois permite o gerenciamento em tempo real das tarefas, tanto em inserção e acompanhamento das atividades diárias, e uma aplicação Web para permitir melhor integração entre as plataforma de acordo com o que for melhor ao usuário.</p>
    </Card>

    <Card>
        <h2>When</h2>
        <p>Campanha de arrecadamento inicia em Janeiro de 2013 e a corporação criada pelos fundadores começa em 2014.</p>
    </Card>

    <Card>
        <h2>Who</h2>
        <p>Tyler Renelle, Siena Leslie e Vicky Hsu.</p>
    </Card>

    <Card>
        <h2>How</h2>
        <p>Aplicação Web em Javascript, Android Nativo em Kotlin e IOS Nativo em Swift.</p>
    </Card>

    <Card>
        <h2>How Much</h2>
        <p>Para desenvolvimento inicial do projeto, foram realizadas doações pelo site Kickstarter, que arrecadou um total de US$ 41,191.</p>
    </Card>

    <Card>
        <h2>Referências</h2>
        <p>Wikipedia contributors. Habitica. Wikipedia, The Free Encyclopedia. Disponível em: https://en.wikipedia.org/wiki/Habitica. Acesso em: 07/04/2019</p>
        <p>Kickstater of Habitica from January 10, 2013 to February 19, 2013. Disponível em: https://www.kickstarter.com/projects/lefnire/habitrpg-mobile. Acesso em: 07/04/2019</p>
        <p>Repositório Oficial da Organização do Habitica. Disponível em: https://github.com/HabitRPG</p>
    </Card>

    </div>
  )
}

export default i5W2H