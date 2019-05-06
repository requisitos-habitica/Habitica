import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Comida = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Comida" author="Rogério Júnior"/>
    <Card>
      <h2>Nome</h2>
      <p>Comida</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Comidas</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Representação virtual de comida que são dadas à <Link target="_blank" to='/ModelagemLexicos/Mascote'>mascotes</Link></li>
        <li>Promove o crescimento de <Link target="_blank" to='/ModelagemLexicos/Mascote'>mascotes</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Alimentar <Link target="_blank" to='/ModelagemLexicos/Mascote'>mascotes</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Comida