import React from 'react'
import { Link } from 'react-router-dom'

const ContribuirArtes = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Contribuir para as Artes do Habitica" author="Saleh Kader"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Construir pixel arts para o Habitica</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Habitica e o Trello</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: As Pixel Arts devem ser aprovadas no board de avaliação do Habitica no Trello</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Desenvolvedores</li>
        <li>Artistas</li>
        <li>Entusiastas do Habitica</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Computador</li>
        <li>Software de edição de arte</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Contribuidor lê o guia de contribuição</li>
        <li>Contribuidor lê as permissões de contribuição</li>
        <li>Contribuidor envia um email para o Habitica, retificando que atende as permissões</li>
        <li>Contribuidor elabora a pixel art</li>
        <li>Contribuidor posta a pixel art no Trello do Habitica</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Contribuidor não enviar o email para o Habitica</li>
        <li>Pixel art não estar no formato desejado</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Não atender aos critérios de Permissão do Habitica</li>
        <li>Pixel Art não condizer com o Habitica</li>
      </ul>
    </Card>

  </div>
)

export default ContribuirArtes