import React from 'react'
import { Link } from 'react-router-dom'

const ContribuirDesign = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Contribuir no Design do Habitica" author="Saleh Kader"/>
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
        <li>Desenvolvedores</li>
        <li>WebDesigners</li>
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
        <li>Contribuidor verifica se já existem issues sobre design</li>
        <li>Caso não exista, o contribuidor informa guilda</li>
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

export default ContribuirDesign