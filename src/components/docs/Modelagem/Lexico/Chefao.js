import React from 'react'
import { Link } from 'react-router-dom'

const Chefao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Chefão" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Chefão</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Chefe</li>
        <li>Boss</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Pertencem ao sistema de <Link to="/Missao">Missão</Link></li>
        <li><Link to="/Grupo">Grupo</Link> enfrenta Chefão</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Usuário <Link to="/Cenarios/BatalhaChefao">Batalha Chefão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Chefao