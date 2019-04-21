import React from 'react'
import './NavBar.scss'
import logo from '../../../assets/habitica-logo.svg'

const NavBar = props => (
  <>
    <nav className="nav">
      <img src={ logo } alt="Habitica"/>
      <ul>
        <li>Disciplina</li>
        <li>Pré-Rastreabilidade</li>
        <li>Pós-Rastreabilidade</li>
        <li>Elicitação</li>
        <li>Modelagem</li>
        <li>Análise</li>
        <li>Sobre</li>
      </ul>
    </nav>

    { props.children }
  </>
)

export default NavBar