import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Mudar Configurações do Site" author="Ésio Freitas"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Usuário deseja mudar configuração padrão da aplicação.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial -> configurações.</li>
        <li>Tempo: Em qualquer momento.</li>
        <li>Pré-condição: Usuário deve estar logado.</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário.</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Tempo</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário entra na área de configuração do site.</li>
        <li>Usuário escolhe as novas opções.</li>
        <li>Usuário muda as configurações do site.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário coloca um dado errado.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>A rede cai.</li>
      </ul>
    </Card>

  </div>
)

export default Base