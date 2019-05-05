import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const PocaoDeEclosao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Poção de Eclosão" author="Rogério Júnior"/>
    <Card>
      <h2>Nome</h2>
      <p>Poção de Eclosão</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Poções de Eclosão</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Item que choca o ovo de um <Link to='/ModelagemLexicos/Mascote'>mascote</Link></li>
        <li>Item que define a cor e o tipo do <Link to='/ModelagemLexicos/Mascote'>mascote</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Poções de eclosão são aplicados à <Link to='/ModelagemLexicos/Ovo de Mascote'>ovos de mascotes</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default PocaoDeEclosao