import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ContribuirArtesV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Contribuir para as Artes do Habitica V2" author="Saleh Kader e Pedro Féo"/>

    <Card>
      <h2>Versionamento</h2>
      <p><Link to='/Contribuir para as Artes do Habitica V1'>V1</Link></p>
    </Card>

    <Card>
      <h2>Objetivo</h2>
      <p>Construir <Link to = '/Pixel Art'>Pixel Arts</Link> para o Habitica</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Habitica e o Trello</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: Contribuidor deve saber fazer <Link to = '/Pixel Art'>Pixel Art</Link></li>
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
        <li>Software de edição de arte</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Contribuidor lê o guia de contribuição</li>
        <li>Contribuidor lê as permissões de <Link to = '/Contribuir para o Habitica'>Contribuição</Link></li>
        <li>Contribuidor envia um email para o Habitica, retificando que atende as permissões</li>
        <li>Contribuidor elabora a <Link to = '/Pixel Art'>Pixel Arts</Link></li>
        <li>Contribuidor posta a <Link to = '/Pixel Art'>Pixel Art</Link> no Trello do Habitica</li>
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
        <li><Link to = '/Pixel Art'>Pixel Arts</Link> não condizer com o Habitica</li>
      </ul>
    </Card>

  </div>
)

export default ContribuirArtesV2