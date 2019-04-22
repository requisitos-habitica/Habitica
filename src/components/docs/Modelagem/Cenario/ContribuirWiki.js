import React from 'react'
import { Link } from 'react-router-dom'

const ContribuirWiki = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Contribuir para a Wiki Habitica" author="Saleh Kader"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Contribuir para a documentação da Wiki do Habitica</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Wiki do Habitica</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: Contribuidores devem ter uma conta no Wikia</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Desenvolvedores</li>
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
        <li>Contribuidor clica em um botão de editar na wiki</li>
        <li>Contribuidor edita a wiki</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>-</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Falta de conhecimento de um idioma para traduzir a documentação da wiki</li>
        <li>Contribuição não condiz com a documentação</li>
      </ul>
    </Card>

  </div>
)

export default ContribuirWiki