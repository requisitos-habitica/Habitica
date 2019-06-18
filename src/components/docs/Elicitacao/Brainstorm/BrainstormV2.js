import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../../UI/Card/Card'
import './Brainstorm.scss'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'


const BrainstormV1 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Brainstorm V2" author="Youssef Muhamad"/>
    <Card>
        <h2>Versionamento</h2>
        <p><Link to='/BrainstormV1'>V1</Link></p>
    </Card>

    <Card>
        <h2>Participantes</h2>
        <p>Ana Beatriz</p>
        <p>Alice Cavalcante</p>
        <p>Paulo Henrique</p>
    </Card>

    <Card>
        <h2>Como transformar o processo de planejamento de afazeres e construção de hábitos em algo prático e menos desinteressante ?</h2>
        <p><b>Paulo:</b>Planejando com um grupo de pessoas com interesses parecidos.</p>
        <p><b>Ana:</b>Tem que ser alguma coisa que você consiga ver todos os dias e que te motive a continuar até que você consiga criar um hábito, porque para formar um hábito é uma tarefa cansativa, e se não sentir uma evolução do estado em que estava você se desmotiva.</p>
        <p><b>Alice:</b>Para deixar prático eu penso em integrar com a tecnologia, pode ser algum site ou um aplicativo mesmo já que todo mundo anda com celular, fica mais fácil para lembrar que você fez alguma tarefa que planejou.</p>
        <p><b>Paulo:</b>Então dá pra juntar o que elas disseram, o grupo ele ajuda na parte de manter as pessoas motivadas, porque todos vão estar juntos nessa tarefa, então caso uma pessoa não esteja tão motivada, ela pode enxergar no grupo uma motivação, coisa que ela não veria se estivesse sozinha, e um aplicativo ou site facilita nessa outra parte de praticidade, se estiver no celular da pessoa as tarefas dela, e os hábitos que ela quer formar, durante o dia ela vai conferindo se está perto de completar algo, e se motivar a ir completar.</p>
        <p><b>Alice:</b>Dependendo do hábito, vai ser bem difícil de manter a pessoa motivada se ela não ver uma evolução para se sentir satisfeita com o andamento, por isso muita gente desiste de academia, porque além de fazer o esforço, a parte boa que são os resultados dos treinos demoram a surgir. Então se é pra pessoa se sentir motivada a continuar persistindo eu acho necessário algum mecanismo que a deixe melhor ao completar sua meta.</p>
    </Card>

    <Card>
        <h2>Trazer elementos dos jogos para a ferramenta deixaria o usuário mais engajado?</h2>
        <p><b>Ana:</b>Vai depender do público, hoje em dia todo mundo gosta de jogar, então pegar algumas coisas que sejam comuns nos jogos vai deixar mais interessante, porque tira um pouco o foco do esforço necessário das tarefas trazendo uma descontração.</p>
        <p><b>Paulo:</b>Como a Alice disse da preocupação com a motivação do usuário e que pra ele continuar persistindo em algo que ele deve fazer era legal que tivesse algo que o deixasse melhor ao completá-la, os jogos são perfeitos pra isso porque eles tem vários mecanismos de prender o jogador para que ele invista o tempo dele, então se conseguir mudar o contexto desse investimento do tempo e ao invés de ser em jogo ele focar nas tarefas dele seria perfeito.</p>
        <p><b>Alice:</b>Seria perfeito mesmo, tipo quando ele completar uma parte de um hábito dele, por exemplo ele quer parar de fumar então a cada hora que ele ficar sem fumar ele ganhasse uma recompensa, faria com que ele se sentisse melhor e motivaria a ele repetir essa ação boa que deu uma recompensa a ele.</p>
        <p><b>Ana:</b>Mas a pessoa tem que ganhar esses dinheiros dos jogos, ela tem que poder gastar com algo, porque assim faz com que ela perca essa recompensa e seja forçada a ganhar mais, e tem que ter coisas para ela gastar que sejam cada vez melhores pra ficar nesse ciclo de ser recompensada e querer comprar.</p>
        <p><b>Paulo:</b>Assim como nos jogos tem fases que são mais difíceis que outras, pode ser legal isso também, que tenham tarefas mais difíceis que outras e por isso elas dariam recompensas melhores.</p>
        <p><b>Alice:</b>Até agora ele só ganha recompensa e gasta essas recompensas, ele só perderia comprando alguma coisa, e os jogos são desafiadores para manter a pessoa semṕre querendo passar de fase. Como a pessoa vai colocar um monte de tarefas que ela quer fazer seria bom que essas tarefas que ela deixasse de fazer depois do prazo dela, que o não cumprimento dessa tarefa prejudicasse ele, porque assim ele vai querer sempre completar tarefas para ganhar, e sabe que se deixar de fazer ele vai ser prejudicado, assim ele vai se planejar melhor em quais tarefas ele quer realizar, e não só jogar um monte.</p>
        <p><b>Ana:</b>Tem que estar claro tudo isso pra pessoa que vai usar, porque o foco é que ela consiga se planejar melhor, separando o que ela tem pra fazer, se ela quer formar algum hábito ou fazer suas tarefas diárias para criar uma rotina nova para si. Porque tem várias coisas pode confundir ele ou tirar o foco da proposta inicial.</p>
    </Card>
    <Card>
        <h2>Com as ideias que surgiram neste Brainstorm, como seria essa aplicação ?</h2>
        <p><b>Paulo:</b>Uma aplicação inspirada em elementos que existem nos jogos para deixar o processo de planejamento mais legal, e que recompense o usuário ao fazer suas tarefas.</p>
        <p><b>Alice:</b>Um sistema para o gerenciamento de tarefas simples de se usar, e que prenda a pessoa com um sistema igual dos jogos.</p>
    </Card>

    <Card>
        <h2>Requisitos elicitados a partir deste Brainstorm</h2>
        <h3>Legenda:</h3>
        <p><b>RF - </b>Requisitos Funcionais</p>
        <p><b>RNF - </b>Requisitos Não Funcionais </p>
        <br></br>
        <h3>Requisitos Funcionais</h3>
        <p><b>RF01 - </b>O sistema deve permitir que os usuários tenham tarefas em grupo.</p>
        <p><b>RF02 - </b>O usuário deve ser capaz de criar uma tarefa.</p>
        <p><b>RF03 - </b>O sistema deve recompensar os usuários que completam suas tarefas.</p>
        <p><b>RF04 - </b>O sistema deve punir os usuários que não completam suas tarefas.</p>
        <p><b>RF05 - </b>O usuário deve ser capaz de criar seu personagem.</p>
        <p><b>RF06 - </b>O usuário deve ser capaz de comprar itens para seu personagem.</p>
        <p><b>RF07 - </b>O sistema deve permitir a entrada de usuários dentro dos grupos.</p>
        <p><b>RF08 - </b>O sistema deve permitir a saída de usuários dos grupos.</p>
        <br></br>
        <h3>Requisitos Não Funcionais</h3>
        <p><b>RNF01 - </b>A aplicação deve ser prática e simples de utilizar.</p>
        <p><b>RNF02 - </b>O sistema deve ser gamificado de forma a manter o usuário engajado e motivado.</p>
        <p><b>RNF03 - </b>As tarefas devem funcionar em todos as plataformas suportadas pelo Habitica.</p>
        <p><b>RNF04 - </b>O incremento/decremento da pontuação das tarefas devem ser feitos de forma intuitiva.</p>
        <p><b>RNF05 - </b>O usuário deve ser capaz de identificar qual tipo de tarefa está sendo exibida para ele e forma intuitiva.</p>
    </Card>
    </div>
  )
}

export default BrainstormV1