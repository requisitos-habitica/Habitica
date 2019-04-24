import React from 'react'
import { Link } from 'react-router-dom'

const Mana = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Mana" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Mana</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Pontos de Mana</li>
        <li>MP</li>
        <li>Energia Mágica</li>
        <li>Barra de Mana</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É o que permite que o Usuário use Habilidade</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Mana é perdida se usuário Usa Habilidade</li>
        <li>Mana é recuperada se Usuário <Link to="/Contextos/CompletaTarefa">Completa Tarefa</Link></li>
        <li>Mana é recuperada diariamente</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default Mana