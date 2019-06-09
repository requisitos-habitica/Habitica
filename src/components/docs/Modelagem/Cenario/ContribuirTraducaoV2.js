import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import ContribuirTraducao from '../Cenario/ContribuirTraducao'

const ContribuirTraducaoV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ [ ContribuirTraducao] } rastreability={ null }
                  title="Contribuir para a tradução do Habitica V2" author="Saleh Kader e Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Traduzir as funcionalidades do Habitica para um idioma específico</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Habitica e o Trello</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: Tradutores devem ser fluentes no idioma desejado</li>
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
        <li>Features</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Contribuidor lê o <Link to = '/Contribuir para o Habitica'>Guia de Contribuição</Link></li>
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

export default ContribuirTraducaoV2