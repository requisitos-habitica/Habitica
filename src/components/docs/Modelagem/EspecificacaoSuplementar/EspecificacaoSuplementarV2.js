import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const EspecificacaoSuplementarV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Especificação Suplementar" author="Saleh Kader"/>

    <Card>
      <h2>Versionamento</h2>
      <p><Link to='/EspecificacaoSuplementarV1'>V1</Link></p>
    </Card>

    <Card>
      <h2>Finalidade</h2>
      <p>Para a construção de um software de qualidade, é necessário definir os seus requisitos não funcionais. E esse documento possui por finalidade apresentar os requisitos não funcionais do sistema do Habitica. Pegando todos aqueles requisitos, que não foram capturados pelos casos de uso.</p>
    </Card>

    <Card>
        <h2>Escopo</h2>
        <p>O Habitica é um aplicativo de gerenciamento de tarefas que por meios de recompensas e técnicas de gamificação busca motivar o seu usuário a deixar sua vida mais organizada.</p>
    </Card>

    <Card>
      <h2>Definições, Acrônimos e Abreviações</h2>
      <p>Consulta aos <Link to='/Lexicos'>Léxicos</Link></p>
    </Card>

    <Card>
      <h2>Referências</h2>
      <p>Habitica. Privacy Policy. Disponível em: <a href='https://habitica.com/static/privacy'>https://habitica.com/static/privacy</a></p>
      <p>Requisitos de Software Nubank. Especificação Suplementar. Disponível em: <a href='https://requisitos-2017-2-nubank.github.io/Nubank/siki/esp-suplementar.html'>http://twixar.me/3P2n</a></p>
      <p>Requisitos de Software Tinder. Especificação Suplementar. Disponível em: <a href='https://requisitos-tinder.github.io/Tinder-2018-1/modelagem/EspSuplementar/EspSuplementar/'>http://twixar.me/KP2n</a></p>
      <p>Gois, Samily. Sobrinho, Francisco. Projeto de Software Floricultura Beija-Flor Especificação Suplementar. Disponível em: <a href='https://docplayer.com.br/3800759-Php-software-company-samily-rocha-gois-francisco-luiz-sobrinho-projeto-de-software-floricultura-beija-flor-especificacao-suplementar-versao-101.html'>http://twixar.me/fP2n</a></p>
    </Card>

    <Card>
      <h2>Visão Geral</h2>
      <p>O presente documento busca deixar claro uma introdução ao escopo do projeto do Habitica. Construído em cima de um modelo para classificação de atributos de qualidade de software, o <a href='https://en.wikipedia.org/wiki/FURPS'>FURPS+</a>. Os seus requisitos foram analisados seguindo esse modelo.</p>
    </Card>

    <Card>
      <h2>Funcionalidades</h2>
      <p>Todas as funcionalidades do Habitica, podem ser visualizadas no <Link to='/BacklogV3'>Product Backlog</Link> levantado da Aplicação e nos <Link to='/CasosDeUso'>Casos de Uso</Link> levantados.</p>
    </Card>

    <Card>
        <h2>Usabilidade</h2>
        <h3>Fácil usabilidade no gerenciamento de atividades:</h3>
        <p>Para criar, deletar e atualizar as atividades no Habitica não é necessário um treinamento afundo para isso. Bastando apenas um pequeno botão, com design minimalista, na lateral direita da tela, com as opções de se criar uma tarefa, um hábito ou uma atividade diária. A deleção e atualização das atividades é realizada clicando-se em cima do card da atividades.</p>
        <br></br>
        <h3>Atratividade nos elementos de Gamificação e feedback:</h3>
        <p>Todos os elementos de Gamificação oferecem ícones padronizados e com uma paleta de cores muito bem definidas, além da Gamificação fornecer um feedback instantâneo. Um exemplo disso, são a quantidade de moedas, a vida e a experiência do usuário que o acompanha durante quase todas as áreas da aplicação.</p>
        <br></br>
    </Card>

    <Card>
        <h2>Confiabilidade</h2>
        <h3>Segurança mínima no armazenamento de dados:</h3>
        <p>O armazenamento de dados dos usuário seguem os critérios mínimos da indústria para a segurança das informações de seus usuário.</p>
        <br></br>
        <h3>Atualização das informações pessoais:</h3>
        <p>O usuário do Habitica tem a possibilidade de alterar os seus dados, mediante a solicitação. O Habitica solicita a identificação do usuário para aprovar as modificações das informações desejadas.</p>
        <br></br>
        <h3>Disponibilidade da Aplicação:</h3>
        <p>A aplicação do Habitica está disponível tanto na plataforma Web quanto na Mobile durante 24 horas por dia.</p>
    </Card>

    <Card>
        <h2>Desempenho</h2>
        <h3>Tempo mínimo de resposta após tarefas concluídas:</h3>
        <p>A atividade de completar tarefas consiste em cliques nos Hábitos, Afazeres e Tarefas Diárias que já foram cumpridas. Logo é necessário que após esta ação, o usuário receba as moedas e a experiência resultante da conclusão da tarefa imediatamente.</p>
        <br></br>
        <h3>Tempo mínimo de respostas ao comprar itens:</h3>
        <p>A tela que notifica o usuário que o item foi comprado, deve aparecer rapidamente e de forma invasiva, pois representa um dos principais diferenciais do aplicativo, o uso de mecânicas de RPGs. Com isso o usuário tem noção em tempo real das consequências de suas ações.</p>
        <br></br>
        <h3>Capacidade de membros nos grupos:</h3>
        <p>Para o melhor funcionamento e otimização do sistema, os grupos criados pelos usuários possuem um limite de 30 integrantes. O principal motivo disso é a exibição na tela inicial do usuário e a perda de desempenho geral do site.</p>
    </Card>

    <Card>
        <h2>Suportabilidade</h2>
        <p>O sistema do Habitica está disponível para as principais plataformas Web e Mobile do mercado. Funcionando nos sistemas operacionais mobile Android, nas versões 5.0 ou superior e IOS, nas versões 9.3 ou superior.</p>
    </Card>

    <Card>
        <h2>Requisitos de Licenciamento</h2>
        <h3>Licenças presentes no sistema:</h3>
        <p>GPL - 3.0</p>
        <p>CC - BY - SA 3.0</p>
        <p>CC - BY - NC - SA 3.0</p>
    </Card>

  </div>
)

export default EspecificacaoSuplementarV2