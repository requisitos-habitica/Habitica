import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Estabulo = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Estábulo" author="Rogério Júnior"/>
    <Card>
      <h2>Nome</h2>
      <p>Estábulo</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>-</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Local que ficam guardados os <Link target="_blank" to='/ModelagemLexicos/Mascote'>mascotes</Link> e as <Link target="_blank" to='/ModelagemLexicos/Montaria'>montarias</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Os <Link target="_blank" to='/ModelagemLexicos/Mascote'>mascotes</Link> e as <Link target="_blank" to='/ModelagemLexicos/Montaria'>montarias</Link> podem ser cuidadas através do estábulo</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Estabulo