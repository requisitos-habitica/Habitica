import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'


const Etnografia = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Etnografia" author="Pedro Féo"/>

    <Card>
        <p>Esse Documento contempla a elicitação de requisitos através do estudo de público-alvo e através do estudo de comportamento motivacional de usuários.</p>
    </Card>

    <Card>
        <h2>Usuários</h2>
        <p>Maioria dos usuários apresenta de 18 a 34 anos</p>
        <p>60% dos usuários dizem jogar video-games</p>
        <p>Pessoas com o objetivos de criar novos hábitos e gerenciar suas atividades de uma maneira divertida</p>
        <h3>Requisitos: </h3>
        <p>O sistema deve ser intuitivo para pessoas de idades diversas </p>
        <p>O sistema deve ser intuitivo para usuários com e sem histórico em videogames</p>
        <p>O sistema deve ser capaz de motivar o usuário a criar novos hábitos</p>
        <p>O sistema deve ser capaz de motivar o usuário a gerenciar e realizar suas atividades</p>
    </Card>

    <Card>
        <p>A seguinte seção se baseia na literatura de Yu-Kai-Chou, onde se dividem as motivações humanas em 8 áreas distintas, aleḿ disso cada um dos motivadores possui técnicas associadas que se tornaram requisitos funcionais.</p>
    </Card>

    <Card>
        <h2>Motivadores</h2>

        <h3>Significado Épico</h3>
        <p>O Usuário do habitica deve sentir que está fazendo parte de algo maior que ele, que está usando a aplicação com um significado, não usando apenas por usar.</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O Usuário pode se motivar por sentir que possui um significado. </p>
        <br></br>
        <h3>Técnicas</h3>
        <p><b>Elitismo - </b>O usuário se sente especial por fazer parte de um certo grupo</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O Usuário pode fazer parte de um grupo de amigos</p>
        <p>O Usuário pode fazer parte da comunidade </p>
        <br></br>

        <h3>Realização</h3>
        <p>O Usuário deve se sentir motivado através da sensação de estar tendo progresso, desenvolvendo algo ou superando desafios.</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O usuário pode se motivar ao ver que está melhorando em algo</p>
        <br></br>
        <h3>Técnicas</h3>
        <p><b>Pontos - </b>O Usuário se motiva por receber algo</p>
        <p><b>Recompensas de ações - </b>O usuário sabe que ganhara o que quer ao terminar uma ação</p>
        <p><b>Barra de Progresso - </b>mostra o estado do jogador em relação a completar algo</p>
        <p><b>Lista de Missões - </b>mostra uma lista de coisas para fazer, para incentivar que o usuário faça algo</p>
        <p><b>High-Five - </b>Recompensa emocional ao fazer algo pequeno</p>
        <p><b>Coroação - </b>Recompensa emocional ao fazer algo difícil</p>
        <p><b>LevelUp - </b>usuários podem melhorar em um sistema de níveis</p>
        <p><b>Efeito de Aura - </b>O esforço de um jogador pode impactar outros </p>
        <p><b>Luta com Chefões - </b>Um desafio difícil de superar</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O sistema pode possuir um sistema de pontuação</p>
        <p>O Usuário pode receber pontos ao completar uma ação determinada </p>
        <p>O Usuário pode receber itens ao completar uma ação</p>
        <p>O Usuário poderá saber que itens irá receber ao completar uma ação determinada </p>
        <p>O Usuário deverá possuir uma demonstração do seu estado em relação a vida</p>
        <p>O Usuário deverá possuir uma demonstração do seu estado em relação a experiência</p>
        <p>O Usuário deverá possuir uma lista de hábitos a serem criados</p>
        <p>O usuário deverá possuir uma lista de atividades para fazer</p>
        <p>O usuário deverá possuir uma lista de atividades diárias</p>
        <p>O usuário pode se sentir bem ao completar uma ação determinada</p>
        <p>O usuário poderá possuir um nível</p>
        <p>O nível do usuário poderá aumentar ao completar a barra de experiência</p>
        <p>O usuário pode ajudar seus amigos ao completar tarefas</p>
        <p>O Sistema pode possuir monstros</p>
        <p>O usuário pode receber dinheiro virtual, experiência e itens ao derrotar um monstro</p>
        <br></br>

        <h3>Criatividade e Feedback</h3>
        <p>O Usuário deve se engajar em um processo através de um processo criativo, sentindo que está fazendo algo de maneira única, que apenas ele pensou. Além disso o motivador envolve a sensação de resposta do sistema, dando feedback a todas as ações do usuário.</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O usuário pode se motivar ao fazer algo criativo</p>
        <br></br>
        <h3>Técnicas</h3>
        <p><b>Feedback Instantâneo - </b>Usuários devem reconhecer imediatamente o resultado de seu trabalho</p>
        <p><b>Boosters - </b>Itens que fazem algo mais forte ou efetivo</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O Sistema deverá avisar o usuário quando uma ação for completa ou efetuada</p>
        <p>O Sistema pode possuir itens que melhoram o estado do usuário</p>
        <br></br>

        <h3>Posse</h3>
        <p>O Usuário deve se sentir motivado através da sensação de possuir algo.</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O usuário pode se motivar ao possuir algo</p>
        <br></br>
        <h3>Técnicas</h3>
        <p><b>Bens Virtuais - </b>Itens virtuais que o usuário pode obter e possuir</p>
        <p><b>Construção do Zero - </b>Pessoas se importam mais com coisas que investiram em criar</p>
        <p><b>Coleção - </b>Conjunto de itens se estará completos se estiverem todos juntos</p>
        <p><b>Avatar - </b>Representação virtual de você mesmo</p>
        <p><b>Recrutamento - </b>Fazer usuários se sentirem mais presos ao sistema por recrutar outras pessoas</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O Sistema poderá possuir um conjunto de itens </p>
        <p>O Usuário poderá adquirir itens</p>
        <p>O usuário poderá guardar itens</p>
        <p>O usuário poderá criar um personagem</p>
        <p>O usuário poderá customizar o personagem com seus itens</p>
        <p>O Sistema poderá possuir itens que só estarão completos se estiverem juntos</p>
        <p>O Usuário poderá possuir uma representação visual</p>
        <p>O usuário pode convidar amigos e conhecidos ao sistema</p>
        <br></br>

        <h3>Influência Social</h3>
        <p>Esse motivador envolve todos os elementos sociais que devem motivar uma pessoa, como pertencimento, aceitação, mentoria, respostas, companhia, competição, inveja, etc</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O usuário poderá se motivar ao interagir com outros usuários</p>
        <br></br>
        <h3>Técnicas</h3>
        <p><b>Convites - </b>Amigos podem convidar uns aos outros</p>
        <p><b>Tesouro/Presente Social - </b>Incentivos que só podem ser conseguidos se outras pessoas te enviarem</p>
        <p><b>Missão em Grupo - </b>Missões que só podem ser completas em grupo</p>
        <p><b>Resfriamento - </b>Um lugar para as pessoas descontraírem </p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O usuário será capaz de convidar um amigo ao seu grupo</p>
        <p>O sistema poderá possuir itens que só podem ser obtidos caso haja interação com outros usuários</p>
        <p>O usuário poderá fazer missões</p>
        <p>O usuário poderá convidar seu grupo para realizar missões</p>
        <p>O grupo possui um local para conversa</p>
        <br></br>

        <h3>Escassez</h3>
        <p>Esse motivador envolve a vontade do usuário de querer algo porque não pode ter.</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O usuário poderá se motivar para conseguir algo que não possui </p>
        <br></br>
        <h3>Técnicas</h3>
        <p><b>Interface evolutiva - </b>Dar menos opções à pessoas no começo e evoluir com o tempo</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O sistema poderá possuir uma loja</p>
        <p>O usuário poderá visualizar a loja</p>
        <p>O usuário pode comprar itens da loja</p>
        <p>O sistema pode bloquear itens da loja caso o usuário não possua dinheiro suficiente</p>
        <br></br>

        <h3>Imprevisibilidade</h3>
        <p>O usuário deve querer descobrir o que vai acontecer em seguida.</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O usuário poderá se motivar a continuar usando o sistema para descobrir o que acontecerá em seguida</p>
        <br></br>
        <h3>Técnicas</h3>
        <p><b>Prêmios Aleatórios - </b>Itens que podem ser qualquer coisa e só serão descobertos ao consegui-los</p>
        <br></br>
        <h3>Requisitos:</h3>
        <p>O usuário poderá receber itens ao completar uma atividade</p>
        <br></br>

        <h3>Perda</h3>
        <p>Esse motivador faz com que o usuário não queira que algo de ruim aconteça.</p>
        <h3>Requisitos:</h3>
        <p>O usuário poderá se motivar a usar o sistema da forma ideal para que não seja penalizado</p>
        <h3>Técnicas</h3>
        <p><b>Perda de Progresso - </b>perda de progresso para indicar que o usuário está fazendo algo de errado </p>
        <p><b>Oportunidade temporária - </b>uma oportunidade que irá desaparecer em um período de tempo</p>
        <p><b>Agravante visual - </b>mostrar ao usuário conteúdos desmotivadores quando não atingem algo esperado</p>
        <p><b>Culpa - </b>o usuário é culpado por não fazer algo esperado </p>
        <h3>Requisitos:</h3>
        <p>O usuário poderá perder sua experiência ao perder toda a vida</p>
        <p>O Sistema poderá possuir atividade diárias, que só podem ser feitas naquele dia </p>
        <p>O Sistema deverá avisar ao usuário quando não fizer uma ação desejada</p>
        <p>O usuário poderá se sentir culpado ao não realizar uma ação esperada</p>
    </Card>

    <Card>
        <h2>Referência</h2>
        <p>Chou, Y.: Actionable Gamification: Beyond Points, Badges, and Leaderboards. Octalysis Media, USA (2015)</p>
    </Card>

    </div>
  )
}

export default Etnografia