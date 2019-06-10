import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ContribuirDesignV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Contribuir no Design do Habitica V2" author="Saleh Kader e Pedro Féo"/>

    <Card>
      <h2>Versionamento</h2>
      <p><Link to='/Contribuir no Design do Habitica V1'>V1</Link></p>
    </Card>

    <Card>
      <h2>Objetivo</h2>
      <p>Contribuir para modificar o visual do Habitica</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Aplicativo do Habitica</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: Deve ser um bom conhecedor de webdesign para resolver os problemas de interface</li>
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
        <li>Pull Request</li>
        <li>Código do Habitica</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Contribuidor lê o <Link to = '/Contribuir para o Habitica'>Guia de Contribuição</Link></li>
        <li>Contribuidor verifica se já existem issues sobre design</li>
        <li>Caso não exista, o contribuidor informa <Link to = "/Guilda">Guilda</Link></li>
        <li>Contribuidor edita o código do Habitica</li>
        <li>Contribuidor abre um pull request</li>
        <li>Caso aceito, contribuição feita</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Pull Request não ser aceito</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Falta de conhecimento sobre a tecnologia do projeto</li>
        <li>Ideia de contribuição não condiz com os objetivos do aplicativo</li>
      </ul>
    </Card>

  </div>
)

export default ContribuirDesignV2