import React from 'react'
import { Link } from 'react-router-dom'

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
        <li>Ao <Link to="/Cenarios/RealizarTarefa">Realizar Tarefa</Link>, o Avatar perde Vida</li>
        <li>Se o Usuário não realizar uma <Link to="/TarefaDiaria">Tarefa Diária</Link>, o <Link to="/Chefao">Chefão</Link> Dá Dano</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Se <Link to="/Cenarios/RealizarTarefa">Chefão</Link> Dá Dano, o Avatar perde Vida</li>
        <li>Se Avatar Dá Dano, o <Link to="/Cenarios/RealizarTarefa">Chefão</Link> perde Vida</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)

export default DarDano