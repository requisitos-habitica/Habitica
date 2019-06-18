import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'


const Entrevista01 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Entrevista 01" author="Saleh Kader"/>

    <Card>
        <h2>Entrevistado</h2>
        <p>Rodrigo Nascimento, criador da página Habitica Brasil</p>
    </Card>

    <Card>
        <h2>Por que você criou o Habitica Brasil?</h2>
        <p><b>a. </b>Entrou no Habitica em 2015, através dos estudos de Gamificação, que descobriu em 2014 com o Kevin Werbach.</p>
        <p><b>b. </b>Pesquisar a fonte do Habitica, HabitHuber. Utilizou o Habitica para estudar inglês e acompanhar mais Game Of Thrones.</p>
        <p><b>c. </b>A guilda Brasil tinha 6 mil pessoas, mas ele cortou porque não tinha mais notificações</p>
        <p><b>d. </b>Viu a necessidade de tradução porque muitas pessoas por não entender desistiram de usar o app.</p>
        <p><b>e. </b>Auxiliar novos usuários a usar o aplicativo de forma mais fácil.</p>
        <p><b>f. </b>Parou de utilizar o Habitica. Porque via que o sistema é bom d+. Procura o TaskHero ou Heroídes.</p>
        <p><b>g. </b>O nicho do Habitica é muito fechado, e não consegue usar com pessoas mais velhas. </p>
        <p><b>h. </b>Interface complicada;</p>
        <p><b>i. </b>Considera a comunidade do Habitica Brasil, muito engajada.</p>
    </Card>

    <Card>
        <h2>Você utiliza algum aplicativo para gerenciar suas tarefas, além do Habitica?</h2>
        <p><b>a. </b>Trello. Usa atualmente o ToDoist. Ele quer buscar alguns cursos para o ToDoist.</p>
    </Card>

    <Card>
    <h2>Como você acha que o Habitica têm facilitado a sua vida?</h2>
        <p><b>a. </b>Com absoluta certeza. Não somos máquinas e o aplicativo nos permite organizar isso.</p>
        <p><b>b. </b>Tirar as coisas da cabeça e passar para o sistema, caso ele seja conifável, te permite se concentrar nas suas tarefas. É uma plataforma que te permite ter de forma fácil seus lembretes, tarefas e afazeres.</p>
    </Card>

    <Card>
        <h2>Quais são os maiores defeitos que você enxerga nesse aplicativo (Habitica)?</h2>
        <p><b>a. </b>O aplicativo é ruim, não possui confiabilidade;</p>
        <p><b>b. </b>Interface que prenda mais o usuário;</p>
        <p><b>c. </b>Definir uma métrica para recompensas que seja justa à todos, uma normalização de valores;</p>
        <p><b>d. </b>Não possui uma área pra guardar ideias.</p>
    </Card>

    <Card>
        <h2>Qual funcionalidade no Habitica te encanta mais?</h2>
        <p><b>a. </b>Ajuda as pessoas à se tornarem melhor;</p>
        <p><b>b. </b>Os devs estão à todo tempo dando feedback;</p>
        <p><b>c. </b>Diárias;</p>
    </Card>

    <Card>
        <h2>Você contribui com o código do Habitica?</h2>
        <p><b>a. </b>Ele codou um pouco do código do Habitica, mas não contribuiu. Mas contribuiu para a parte documental.</p>
        <p><b>b. </b>As contribuições devem seguir o padrão de projetos (plano de negócios) do Habitica.</p>
        <p><b>c. </b>A questão de contribuição do Habitica é mais relacionado ao modo gerencial. </p>
    </Card>

    <Card>
        <h2>Você conhece alguns dos mantenedores do Habitica hoje em dia?</h2>
        <p><b>a. </b>Teve contato com quase todos os criadores do Habitica.</p>
    </Card>

    </div>
  )
}

export default Entrevista01