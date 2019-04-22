import React from 'react'
import { Link } from 'react-router-dom'

const ContribuirHistoria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Contribuir para as Histórias do Habitica" author="Saleh Kader"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Elaborar novas narrativas para serem usadas no Habitica</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Habitica e o Trello</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: As histórias escritas devem ser aprovadas no board de avaliação do Habitica no Trello</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Desenvolvedores</li>
        <li>Escritores</li>
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
        <li>Contribuidor lê as permissões de contribuição</li>
        <li>Contribuidor envia um email para o Habitica, retificando que atende as permissões</li>
        <li>Contribuidor elabora o texto</li>
        <li>Contribuidor posta o texto no Trello do Habitica</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Contribuidor não enviar o email para o Habitica</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Não atender aos critérios de Permissão do Habitica</li>
        <li>Narrativa não condizer com o Habitica</li>
      </ul>
    </Card>

  </div>
)

export default ContribuirHistoria