import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import ContribuirHistoria from '../Cenario/ContribuirHistoria'

const ContribuirHistoriaV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ [ContribuirHistoria] } rastreability={ null }
                  title="Contribuir para as Histórias do Habitica V2" author="Saleh Kader e Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Elaborar novas narrativas para serem usadas no Habitica</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Habitica e o Trello</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: Contribuidor deve saber escrever narrativas</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Contribuidor</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Computador</li>
        <li><Link to = '/Contribuir para o Habitica'>Guia de Contribuição</Link></li>
        <li>Permissões de Contribuição</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Contribuidor lê o <Link to = '/Contribuir para o Habitica'>Guia de Contribuição</Link></li>
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

export default ContribuirHistoriaV2