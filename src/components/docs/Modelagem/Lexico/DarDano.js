import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const DarDano = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Dar Dano" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Dar Dano</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Machucar</li>
        <li>Ferir</li>
        <li>Dá Dano</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Ao <Link to="/Realizar Tarefa">Realizar Tarefa</Link>, o Avatar perde Vida</li>
        <li>Se o Usuário não realizar uma <Link to="/Tarefa Diária">Tarefa Diária</Link>, o <Link to="/Chefão">Chefão</Link> Dá Dano</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Se <Link to="/Realizar Tarefa">Chefão</Link> Dá Dano, o Avatar perde Vida</li>
        <li>Se Avatar Dá Dano, o <Link to="/Realizar Tarefa">Chefão</Link> perde Vida</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)

export default DarDano