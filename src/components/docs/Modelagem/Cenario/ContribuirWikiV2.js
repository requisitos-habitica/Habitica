import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import ContribuirWiki from '../Cenario/ContribuirWiki'

const ContribuirWikiV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ [ContribuirWiki] } rastreability={ null }
                  title="Contribuir para a Wiki Habitica V2" author="Saleh Kader e Pedro Féo"/>
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
        <li>Contribuidores</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Computador</li>
        <li><Link to = '/Contribuir para o Habitica'>Guia de Contribuição</Link></li>
        <li><Link to = '/Wiki'>Wiki</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Contribuidor lê o <Link to = '/Contribuir para o Habitica'>Guia de Contribuição</Link></li>
        <li>Contribuidor clica em um botão de editar na <Link to = '/Wiki'>Wiki</Link></li>
        <li>Contribuidor edita a <Link to = '/Wiki'>Wiki</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Contribuidor ter conhecimento sobre o que irá contribuir</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Falta de conhecimento de um idioma para traduzir a documentação da <Link to = '/Wiki'>Wiki</Link></li>
        <li>Contribuição não condiz com a documentação</li>
      </ul>
    </Card>

  </div>
)

export default ContribuirWikiV2