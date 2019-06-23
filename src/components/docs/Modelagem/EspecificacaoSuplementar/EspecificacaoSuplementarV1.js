import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const EspecificacaoSuplementarV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Especificação Suplementar" author="Saleh Kader e Lucas Dutra"/>

    <Card>
      <h2>Versionamento</h2>
      <p>V1</p>
    </Card>

    <Card>
      <h2>Finalidade</h2>
      <p>Esta especificação suplementar busca tratar os requisitos não-funcionais não capturados pelos casos de uso.</p>
    </Card>

    <Card>
        <h2>Escopo</h2>
        <p>Esta especificação suplementar se aplica ao sistema do Habitica, em um estudo sobre modelagem de requisitos.
        <br></br>
        O Habitica é um aplicativo de gerenciamento de tarefas que por meios de recompensas e técnicas de gamificação busca motivar o seu usuário a deixar sua vida mais organizada.
        </p>
    </Card>

    <Card>
        <h2>Usabilidade</h2>
        <h3>Fácil usabilidade no gerenciamento de atividades</h3>
        <p>Para criar, deletar e atualizar as atividades no Habitica não é necessário um treinamento afundo para isso. Bastando apenas um pequeno botão na lateral direita da tela, com as opções de se criar uma tarefa, um hábito ou uma atividade diária. A deleção e atualização das atividades é realizada clicando-se em cima do card da atividades.</p>
        <br></br>
        <h3>Atratividade nos elementos de Gamificação e feedback</h3>
        <p>Todos os elementos de Gamificação oferecem artes muito bonitas, além das features relacionadas diretamente a Gamificação fornecer um feedback instantâneo. Um exemplo disso, são a quantidade de moedas, a vida e a experiência do usuário que o acompanha durante quase todas as áreas da aplicação.</p>
        <br></br>
    </Card>

    <Card>
        <h2>Confiabilidade</h2>
        <h3>Segurança mínima no armazenamento de dados:</h3>
        <p>Segundo as palavras do Habitica <a href='https://habitica.com/static/privacy'>“seguimos padrões razoáveis ​​e adequados da indústria para proteger suas informações e dados pessoais”</a>. Utilizando de critérios mínimos para a preservação de segurança dos dados dos usuário. Porém, o aplicativo não consegue garantir que esses dados não sejam transferidos ou armazenados de maneira 100% segura. Não podendo assegurar segurança absoluta sobre qualquer informação que o usuário transmita a aplicação.</p>
        <br></br>
        <h3>Possibilidade de cancelamento de spams:</h3>
        <p>	É importante que o aplicativo forneça emails para os usuários atualizando-os sobre novas atividades dentro do sistema. Porém, os usuários também devem ter a possibilidade de cancelar o recebimento desses emails e spams fornecidos pela a equipe da aplicação.</p>
    </Card>

    <Card>
        <h2>Desempenho</h2>
        <h3>Tempo mínimo de resposta após tarefas concluídas:</h3>
        <p>A atividade de completar tarefas consiste em cliques nos Hábitos, Afazeres e Tarefas Diárias que já foram cumpridas. Logo é necessário que após esta ação, o usuário receba as moedas e a experiência resultante da conclusão da tarefa imediatamente. Caso o tempo de resposta seja lento, uma das principais funções da aplicação seria comprometida e ,provavelmente, levaria a uma evasão do habitica, pela falta do feedback instantâneo que motiva o usuário a continuar utilizando o aplicativo.</p>
        <br></br>
        <h3>Tempo mínimo de respostas ao comprar itens:</h3>
        <p>A tela que notifica o usuário que o item foi comprado, deve aparecer rapidamente e de forma invasiva, pois representa um dos principais diferenciais do aplicativo, o uso de mecânicas de RPGs. Com isso o usuário tem noção em tempo real das consequências de suas ações.</p>
        <br></br>
        <h3>Capacidade de membros nos grupos:</h3>
        <p>	Para o melhor funcionamento e otimização do sistema, os grupos criados pelos usuários possuem um limite de 30 integrantes. O principal motivo disso é a exibição na tela inicial do usuário e a perda de performance geral do site.</p>
    </Card>

    <Card>
        <h2>Compatibilidade</h2>
        <h3>Suporte à plataforma Android:</h3>
        <p>Deve existir uma versão estável e otimizada para dispositivos móveis que utilizam o sistema operacional Android.</p>
        <br></br>
        <h3>Suporte à plataforma IOS:</h3>
        <p>Deve existir uma versão estável e otimizada para dispositivos móveis que utilizam o sistema operacional IOS.</p>
        <br></br>
        <h3>Suporte à plataforma Web:</h3>
        <p>O sistema deve ser acessível em navegadores web por meio de uma versão específica para eles.</p>
        <br></br>
        <h3>Compatibilidade com versões de browser (Google Chrome, Mozilla Firefox, etc):</h3>
        <p>O sistema deve se comportar de forma idêntica em qualquer navegador web comum.</p>
        <br></br>
        <h3>Compatibilidade com versões de sistemas operacionais móveis:</h3>
        <p>O sistema deve estar disponível para diversas versões de um sistema operacional como Android ou IOS. Deve-se levar em conta as limitações das versões mais antigas, que ocasionaram em diferenças entre versões do Habitica. Limitações do navegador que interfiram de forma significativa nas principais funções do Habitica terão como consequência a não existência de uma versão do Habitica para esta versão do navegador.</p>
        <br></br>
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

export default EspecificacaoSuplementarV1