import React from 'react'
import './Disciplina.scss'

const Disciplina = () => (
  <div className="content artefact disciplina">
    <h1>Sobre a Disciplina</h1>

    <h2>Engenharia de Software</h2>
    <p>
      A Engenharia de Software é uma disciplina da engenharia dedicada aos aspectos da produção de software. Assim como em toda engenharia, os engenheiros de software adotam abordagens sistemáticas e organizadas, através de diversos conhecimentos específicos, visando criar a melhor solução para um problema, levando em consideração as restrições e recursos disponíveis.
      O curso de Engenharia de Software da Universidade de Brasília contempla diversas áreas, onde se encontra a disciplina Requisitos de Software.
    </p>

    <h2>Requisitos de Software</h2>
    <p>
      Engenharia de Requisitos é o ramo da engenharia de Software responsável por elicitar, modelar, validar e rastrear toda a vida útil de um requisito ao decorrer de um projeto. A área se mostra muito importante tendo em vista que a maior parte dos fracassos de produtos de software ocorrem devido à má elicitação de seus requisitos.
      A disciplina da UnB possui como objetivo capacitar o estudante a compreender conceitos, técnicas, procedimentos e ferramentas para o levantamento de requisitos.
      A matéria é dividida de tal forma:
    </p>
    <ul>
      <li>
        Módulo 1 - Engenharia de Requisitos(Visão Geral)
        <ul>
          <li className="nested--1">Conceitos básicos e fundamentais da engenharia de requisitos</li>
        </ul>
      </li>

      <li>
        Módulo 2 - Engenharia de Requisitos (Pré-Rastreabilidade - Gerência 1)
        <ul>
          <li className="nested--1">RichPicture</li>
          <li className="nested--1">Argumentação</li>
        </ul>
      </li>

      <li>
        Módulo 3 - Engenharia de Requisitos (Elicitação)
        <ul>
          <li className="nested--1">Técnicas</li>
          <li className="nested--1">Priorização</li>
        </ul>
      </li>

      <li>
        Módulo 4 - Engenharia de Requisitos (Modelagem)
        <ul>

          <li className="nested--1">
            Inicial
            <ul>
              <li className="nested--2">Cenários</li>  
              <li className="nested--2">Léxico</li>  
            </ul>
          </li>
        
          <li className="nested--1">
            Tradicional
            <ul>
              <li className="nested--2">Use Case</li>  
              <li className="nested--2">Especificação Suplementar</li>  
            </ul>
          </li>

          <li className="nested--1">
            Ágil
            <ul>
              <li className="nested--2">Histórias de Usuário</li>  
              <li className="nested--2">Backlogs</li>  
            </ul>
          </li>
          
          <li className="nested--1">
            Intencional ou Orientada à Meta (Escopo Requisitos Não Funcionais)
            <ul>
              <li className="nested--2">NFR Framework</li>
            </ul>
          </li>

          <li className="nested--1">
            Intencional ou Orientada à Meta (Escopo Geral)
            <ul>
              <li className="nested--2">i*(iStar - Intencionalidade Distribuída)</li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        Módulo 5 - Engenharia de Requisitos (Análise)
        <ul>
          <li className="nested--1">Verificação</li>
          <li className="nested--1">Validação</li>
        </ul>
      </li>

      <li>
        Módulo 6 - Engenharia de Requisitos (Pós-Rastreabilidade - Gerência 2)
        <ul>
          <li className="nested--1">Gerência de Desenvolvimento de Software orientada à baseline de Requisitos</li>
        </ul>
      </li>

      <li>
        Módulo 7 - Seminários
        <ul>
          <li className="nested--1">Apresentação dos Trabalhos Finais</li>
        </ul>
      </li>

      <li>
        Módulo 8 - Debate & Desafio
        <ul>
          <li className="nested--1">Debate sobre os resultados e conteúdos da disciplina - Modelo Fishbowl</li>
          <li className="nested--1">Desafios (a definir)</li>
        </ul>
      </li>

    </ul>

    <h2>Grupo 1 - Habitica</h2>
    <p>
      Ao decorrer da disciplina, a equipe utilizou-se dos conhecimentos adquiridos durante as aulas de Requisitos de Software para consolidar o conhecimento dos casos estudados e serem avaliados pelos professores responsáveis pela matéria.
      O Grupo 1, Habitia, é composto pelos seguintes integrante:
    </p>

    <table cellSpacing="8">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Matrícula</th> 
          <th>GitHub</th>
          <th>E-mail</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Ésio Gustavo Pereira Freitas</td>
          <td>17/0033066</td> 
          <td>EsioFreitas</td>
          <td>esio.gustavo@gmail.com</td>
        </tr>
        
        <tr>
          <td>Gabriel Batista Albino Silva</td>
          <td>16/0028361</td> 
          <td>gabrielalbino</td>
          <td>enggabrielalbino@gmail.com</td>
        </tr>

        <tr>
          <td>Lucas Dutra</td>
          <td>17/0050939</td> 
          <td>lucasdutraf</td>
          <td>ldutra98@gmail.com</td>
        </tr>

        <tr>
          <td>Kaique Henrique de Carvalho Borges</td>
          <td>17/0014771</td> 
          <td>kaiqueborges</td>
          <td>rique.kaique@gmail.com</td>
        </tr>

        <tr>
          <td>Pedro Henrique Andrade Féo</td>
          <td>17/0020461</td> 
          <td>phe0</td>
          <td>pheofo@gmail.com</td>
        </tr>

        <tr>
          <td>Rogério Silva dos Santos Júnior</td>
          <td>17/0021751</td> 
          <td>rogerioo</td>
          <td>junior.rogerio8@gmail.com</td>
        </tr>

        <tr>
          <td>Saleh Nazih Abdel Kader</td>
          <td>16/0144485</td> 
          <td>devsalula</td>
          <td>saleh.nazih.dev@gmail.com</td>
        </tr>

        <tr>
          <td>Youssef Muhamad</td>
          <td>17/0024334</td> 
          <td>youssef-md</td>
          <td>emaildeyoussefmuhamad@gmail.com</td>
        </tr>
      </tbody>
    </table>

    <h2>Professores</h2>
    <p>
      Os professores responsáveis por ministrar a matéria de Requisitos de Software forneceram os materiais de estudo a respeito do conteúdo dado em sala de aula e avaliaram os grupos pelo seus trabalhos entregues. Os professores responsáveis são:
    </p>
    <ul>
      <li>Maurício Serrano</li>
      <li>Milene Serrano</li>
    </ul>

    <h2>Ferramentas de Organização e Comunicação</h2>
    <p>
      Procurando a melhor organização e comunicação do grupo, foram usadas as seguintes ferramentas:
    </p>
    <ul>
      <li>
        GitHub
        <ul>
          <li className="nested--1">Ferramenta utilizada para armazenar o código fonte do projeto, manter rastreabilidade e distribuição de atividades através de issues</li>
        </ul>
      </li>
      
      <li>
        Google Drive
        <ul>
          <li className="nested--1">Ferramenta utilizada para armazenamento de todos os arquivos produzidos pelo grupo, antes de serem colocados na Wiki</li>
        </ul>
      </li>

      <li>
        Slack
        <ul>
          <li className="nested--1">Ferramenta utilizada com o objetivo de ser o principal meio de comunicação do grupo.</li>
        </ul>
      </li>

      <li>
        ZenHub
        <ul>
          <li className="nested--1">Ferramenta utilizada para melhor controle das atividades e promover uma transparência em relação ao andamento das mesmas</li>
        </ul>
      </li>

      <li>
        Draw.io
        <ul>
          <li className="nested--1">Ferramenta utilizada para a criação de diagramas</li>
        </ul>
      </li>

      <li>
        Google Hangouts
        <ul>
          <li className="nested--1">Ferramenta utilizada para prover um ambiente destinado à reuniões do grupo, por vídeo conferência</li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Disciplina