import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ComoContribuir = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Contribuir para o Habitica" author="Saleh Kader"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Contribuir para o código do Habitica</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Repositório do Habitica no GitHub</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: O contribuidor deve ter conhecimento sobre desenvolvimento de software sobre a tecnologia do projeto</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Desenvolvedores de Software</li>
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
        <li>Desenvolvedor lê o guia de contribuição</li>
        <li>Desenvolvedor lê as issues do repositório</li>
        <li>Desenvolvedor desenvolve uma nova funcionalidade ou corrige um hotfix</li>
        <li>Desenvolvedor abre um pull request</li>
        <li>Mantenedor avalia o pull request</li>
        <li>Caso seja aceito, a contribuição é feita</li>
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

export default ComoContribuir