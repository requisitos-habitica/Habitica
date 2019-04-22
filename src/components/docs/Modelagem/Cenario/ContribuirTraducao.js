import React from 'react'
import { Link } from 'react-router-dom'

const ContribuirTraducao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Contribuir para a tradução do Habitica" author="Saleh Kader"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Traduzir as funcionalidades do Habitica para um idioma específico</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Habitica e o Trello</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: Tradutores devem ser fluentes no idioma desejado e a tradução deve ser aprovada no Trello</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Desenvolvedores</li>
        <li>Linguistas</li>
        <li>Entusiastas do Habitica</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Computador</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Contribuidor lê o guia de contribuição</li>
        <li>Contribuidor verifica se o idioma está na lista do projeto</li>
        <li>Contribuidor traduz as features</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Idioma não estar na lista do projeto</li>
        <li>Traduções erradas</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Não atender aos critérios de Permissão do Habitica</li>
      </ul>
    </Card>

  </div>
)

export default ContribuirTraducao