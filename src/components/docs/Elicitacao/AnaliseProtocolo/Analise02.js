import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import './Analise.scss'
import {Link} from 'react-router-dom'



const Analise02V1 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Análise de protocolo 02" author="Rogério Júnior"/>

    <Card>
        <h2>Versionamento</h2>
        <p><Link to ='/AnaliseProtocolo02V1'>V1</Link></p>
    </Card>

    <Card>
        <h2>Entrevistada:</h2>
        <p>Amanda Henriques - Engenharia Eletrônica (5º Semestre)</p>
    </Card>

    <Card>
        <p>Para a análise de protocolo foi pedido a Amanda que descrevesse os métodos que mais usa e artifícios para sua organização acadêmica. Com base em suas respostas, foi possível evidenciar aquilo que julga mais necessário às suas necessidades e o que uma aplicação que se insere nesse contexto deve possuir para que possa ser o mais eficiente possível.
        Em um registro auditivo de 2:47 minutos (AP_Amanda.ogg), Amanda elencou os pontos mais importantes no seu processo de organização e quais aplicações julga mais adequadas à sua conjuntura, tais como Google Agenda, seu caderno de anotação e o Whatsapp.
        O Google Agenda (AP_Amanda_GAgenda1.jpeg) se mostra importante para Amanda pois é uma aplicação que tem uma interface visual que permite o usuário enxergar seus compromissos em tabela (Kanban), que emite notificações ao usuário e permite integração com outros calendários externos (como o da empresa a que faz parte).
        O caderno de anotações (AP_Amanda_Caderno1-4.jpeg) vem suprir a necessidade de elencar matérias que são necessitam de revisão, tarefas que necessita realizar e prazos de entregas que deve cumprir. Por fim o Whatsapp, o qual consiste em enviar mensagens para si mesma para manter registros de compromissos ou tarefas que sejam mais informais.
        É possível notar que essa estudante presa muito por uma organização bem planejada e de fácil portabilidade, que seja visual e que envie notificações sobre suas atividades, e por fim que possa integrar compromissos que tenha em comum com seus amigos. Dessa forma são evidenciados os seguintes requisitos funcionais e não funcionais juntamente com a priorização, feitas com base na percepção de importância da Amanda:        
        </p>
    </Card>

    <Card>
        <h2>Requisitos Funcionais</h2>
        <p><b>RF01 - </b>O usuário deve ser capaz de inserir tarefas - <b>MUST HAVE</b></p>
        <p><b>RF02 - </b>O aplicativo deve lembrar o usuário de seus compromissos - <b>MUST HAVE</b></p>
        <p><b>RF03 - </b>O aplicativo deve permitir a inserção de tarefas de terceiros nas do indivíduo - <b>SHOULD HAVE</b></p>
        <p><b>RF04 - </b>O usuário deve poder inserir lembretes e planejamentos de forma rápida e eficiente - <b>SHOULD HAVE</b></p>
        <p><b>RF05 - </b>O usuário deve ser capaz de inserir compromissos com datas definidas - <b>MUST HAVE</b></p>
    </Card>

    <Card>
        <h2>Requisitos Não Funcionais</h2>
        <p><b>RNF01 - </b>O aplicativo deve ser portável entre plataformas - <b>SHOULD HAVE</b></p>
        <p><b>RNF02 - </b>O aplicativo deve ser eficiente e seguro - <b>MUST HAVE</b></p>
        <p><b>RNF03 - </b>O aplicativo deve ser confiável - <b>MUST HAVE</b></p>
        <p><b>RNF04 - </b>Deve possuir uma interface atraente e moderna - <b>MUST HAVE</b></p>
    </Card>

    </div>
  )
}

export default Analise02V1