import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Artefato Nome" author="Quem fez"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Irure pariatur Lorem ea commodo tempor magna.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Esse sint enim minim <Link to="/Cenario08v2">Cenário08</Link> sit occaecat.</li>
        <li>Adipisicing Lorem non mollit in nisi.</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li><Link to="/Lexicos/Lexico04v2">Léxico04</Link> pariatur exercitation.</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link to="/Lexicos/Lexico02v2">Léxico02</Link> aliqua</li>
        <li>Fugiat aliqua</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Et veniam pariatur qui duis adipisicing.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Elit esse in consequat ipsum.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Elit esse in consequat ipsum.</li>
      </ul>
    </Card>

  </div>
)

export default Base