import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import Members from '../../../utils/members'


const StoryTelling01V1 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Story Telling Com Personas" author= { Members.Esio } />

<Card>
        <h2>Versionamento</h2>
        <p><Link to='/StoryTelling01'>V2</Link></p>
    </Card>

    <Card>
        <p>Esse Documento contempla a elicitação de requisitos através de histórias contadas por usuários.</p>
    </Card>

    <Card>
        <h2 id = "ST1">Pedro Henrique</h2>
        <p>Pedro tem 30 anos, é casado e trabalha como design gráfico em uma agência digital recebendo R$3.000 por mês. Pedro gosta de estar sempre com a família e com os amigos e, por isso, dá muito valor no tempo que tem. 
Pedro deseja ter hábitos mais saudáveis pois está preocupado com sua idade.</p>
        <h3>Reorganizando minhas obrigações</h3>
        <p>Certo dia, decidi criar o hábito de me alongar pela manhã. No entanto, sempre me esquecia dessa atividade, pois não estava acostumado. Por isso adicionei esse meu novo hábito no meu aplicativo de gerenciar atividades. Depois de perceber o benefício dessa prática, decidi criar novos hábitos, tais como: comer a cada 3 horas, tomar 2 litros de água por dia, meditar. Mas chegou uma hora que meus novos hábitos e minhas tarefas começaram a ficar misturadas e isso começou a me incomodar.</p>
        <p>Depois de falar a minha situação para um amigo, ele me indicou um novo aplicativo chamado Habitica. Nele eu poderia separar minhas tarefas dos meus novo hábitos. Além disso, nele eu posso ter uma área apenas para as minhas atividades diárias. Outra vantagem é poder colocar etiquetas nas minhas obrigações e poder buscá-las por atividades feitas, por etiqueta e por data.</p>
        <p>Outro ponto interessante é poder registrar atividades com outras pessoas. Pude assim criar um grupo com a minha família para podermos dividir nossas obrigações uns com os outros, como compras, dia de pagar contas e marcar eventos familiares. Nessa parte da aplicação, podemos conversar sobre as obrigações, fazer desafios juntos e reagir a comentários uns dos outros.</p>
        <p>	Por fim, gostei muito, pois agora tenho um aplicativo que posso deixar minha obrigações mais organizadas e me interagir com meus familiares de uma forma interativa em relação às nossas atividades compartilhadas.</p>
    </Card>

    <Card>
        <h2 id = "ST2">Ana Carla</h2>
        <p>Ana tem 28 anos, é solteira e não quer ter filhos. Ela trabalha como estilista em no seu próprio atelier e ama sair com os amigos nos tempos livres. No entanto, tem problema de controlar suas atividades. Além disso, Ana quer começar a fazer trabalho voluntário e yoga, pois acredita que essas atividades vão ajudar a sentir-se menos estressada.</p>
        <h3>Vivendo com menos estresse</h3>
        <p>Depois de um dia cansado de trabalho, decidi chegar em casa, tomar um banho e ficar deitada no sofá assistindo mais um episódio da minha série preferida. No entanto, fui interrompida por uma chuva de mensagens da minha melhor amiga Laís, que questionava onde eu estava naquele momento. Com isso me lembrei que tinha combinado com meus amigos de encontrá-los hoje em um bar no centro. Me desculpei com ela e expliquei a situação e do meu dia. Ela foi bastante compreensiva e me indicou uma aplicação que eu poderia baixar no celular para organizar minhas atividades.</p>
        <p>Em primeiro momento não entendi o aplicativo, mas depois vi que se tratava de um RPG e eu poderia ganhar itens, participar de missões e me interagir com outras pessoas por ele. Com isso, fiquei muito animada e comecei a migrar minhas obrigações para o Habitica.</p>
        <p>Depois de um mês usando a aplicação vi outros benefícios que ela poderia me proporcionar, ainda mais no atelier que tenho. Por isso apresentei ele para os meus funcionários para a gente montar um grupo dentro do aplicativo e interagir nossas obrigações. Uma das vantagens que mais gostei foi como o aplicativo separa os tipos de atividades e como eu posso me divertir por fazer ela.</p>
        <p>Por fim, gostei muito, pois agora tenho um aplicativo que posso deixar minha obrigações mais organizadas e me interagir com meus familiares de uma forma interativa em relação às nossas atividades compartilhadas.</p>
    </Card>

    </div>
  )
}

export default StoryTelling01V1