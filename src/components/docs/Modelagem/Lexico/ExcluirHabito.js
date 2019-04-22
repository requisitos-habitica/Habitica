import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ExcluirHabito = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Excluir hábito" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Excluir hábito</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>-</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            Usuário apaga da lista um <Link to="/Habito">hábito</Link>.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ao <Link to="/Habito">hábito</Link> ser deletado, ele deixa de ser listado na <Link to="/ListaDeTarefas">lista de tarefas</Link></li>
        <li>Ao <Link to="/Habito">hábito</Link> ser deletado, o usuário não consegue mais <Link to="/IncrementarHabito">incrementar o hábito</Link> nem <Link to="/DecrementarHabito">decrementar o hábito</Link>.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default ExcluirHabito