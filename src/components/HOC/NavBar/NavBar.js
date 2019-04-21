import React from 'react'
import './NavBar.scss'
import logo from '../../../assets/habitica-logo.svg'

import { Link } from 'react-router-dom'

const NavBar = props => (
  <div>
    <nav className="nav">
      <Link to="/"><img src={ logo } alt="Habitica"/></Link>
      <ul>
        <Link to="/Disciplina">Disciplina</Link>
        <Link to="/Pre-Rastreabilidade">Pré-Rastreabilidade</Link>
        <Link to="/Pos-Rastreabilidade">Pós-Rastreabilidade</Link>
        <Link to="/Elicitação">Elicitação</Link>
        <Link to="/Modelagem">Modelagem</Link>
        <Link to="/Analise">Análise</Link>
        <Link to="/Sobre">Sobre</Link>
      </ul>
    </nav>
    <div className="content artefact">
      { props.children }
    </div>
  </div>
)

export default NavBar