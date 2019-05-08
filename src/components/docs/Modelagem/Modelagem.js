import React from 'react'
import './Modelagem.scss'
import { Link } from 'react-router-dom'
import dictionary from '../../../assets/dictionary.svg'
import route from '../../../assets/destination.svg'

const Modelagem = (props) => (
  <div className="content artefact">
    <h1>Modelagem</h1>
    <div className="modelagem">
      <Link target="_blank" to="Modelagem/Lexicos" style={{ textDecoration: 'none' }}>
        <div className="cards">
          <img src={ dictionary } alt="Léxico"/>
          <h2>Léxicos</h2>
        </div>
      </Link>

      <Link target="_blank" to="Modelagem/Cenarios" style={{ textDecoration: 'none' }}>
        <div className="cards">
          <img src={ route } alt="Cenário"/>
          <h2>Cenários</h2> 
        </div>
      </Link>
    </div>
  </div>
)

export default Modelagem