import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Domado = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Domado" author="Rogério Júnior"/>
    <Card>
      <h2>Nome</h2>
      <p>Domado</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Domados</li>
        <li>Crescer</li>
        <li>Crescimento</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Estado no qual um animal vira uma <Link target="_blank" to='/ModelagemLexicos/Montaria'>montaria</Link></li>
        <li>Decorre de uma certa quantia de comida que o animal recebe</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Estado final de um animal</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Estado</p>
    </Card>

  </div>
)

export default Domado