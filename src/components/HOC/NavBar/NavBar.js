import React from 'react'
import './NavBar.scss'
import logo from '../../../assets/habitica-logo.svg'

import { NavLink } from 'react-router-dom'

const NavBar = props => (
  <div>
    <nav className="nav">
      <NavLink to="/"><img src={ logo } alt="Habitica"/></NavLink>
      <ul>
        <NavLink to="/Disciplina">Disciplina</NavLink>
        <NavLink to="/Pre-Rastreabilidade">Pré-Rastreabilidade</NavLink>
        <NavLink to="/Pos-Rastreabilidade">Pós-Rastreabilidade</NavLink>
        <NavLink to="/Elicitacao">Elicitação</NavLink>
        <NavLink to="/Modelagem">Modelagem</NavLink>
        <NavLink to="/Analise">Análise</NavLink>
        <NavLink to="/Sobre">Sobre</NavLink>
      </ul>
    </nav>

    { props.children }
  </div>
)

export default NavBar