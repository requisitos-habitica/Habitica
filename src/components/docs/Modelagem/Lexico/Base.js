import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Artefato Nome" author="Quem fez"/>
    <Card>
      <h2>Nome</h2>
      <p>Irure pariatur Lorem ea commodo tempor magna.</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Esse sint <Link to="/Lexico04v2">Léxico04</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Reprehenderit sit adipisicing sunt tempor fugiat dolore eiusmod ea ad dolor.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li><Link to="/Contextos/Contexto02v2">Léxico02</Link> aliqua</li>
        <li>Aute incididunt pariatur ex dolore dolore culpa aliqua id ex minim velit.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Et veniam pariatur qui duis adipisicing.</p>
    </Card>

  </div>
)

export default Base