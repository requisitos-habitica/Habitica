import React from 'react'
import './NavBar.scss'
import logo from '../../../assets/habitica-logo.svg'

import { Link } from 'react-router-dom'

const NavBar = props => (
  <div>
    <nav className="nav">
      <Link target="_blank" to="/"><img src={ logo } alt="Habitica"/></Link>
      <ul>
        <Link target="_blank" to="/Disciplina">Disciplina</Link>
        <Link target="_blank" to="/Pre-Rastreabilidade">Pré-Rastreabilidade</Link>
        <Link target="_blank" to="/Pos-Rastreabilidade">Pós-Rastreabilidade</Link>
        <Link target="_blank" to="/Elicitacao">Elicitação</Link>
        <Link target="_blank" to="/Modelagem">Modelagem</Link>
        <Link target="_blank" to="/Analise">Análise</Link>
        <Link target="_blank" to="/Sobre">Sobre</Link>
      </ul>
    </nav>

    { props.children }
  </div>
)

export default NavBar