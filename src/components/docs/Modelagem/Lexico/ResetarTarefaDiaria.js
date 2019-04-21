import React from 'react'
import { Link } from 'react-router-dom'
const ResetarTarefaDiaria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Resetar tarefa diária" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Resetar tarefa diária</p>
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
            O sistema, seguindo o intervalo de tempo cadastrado na tarefa diária, que pode ser dias, semanas ou meses, deixa a <Link to="/TarefaDiaria">tarefa diária</Link> disponível para ser completada novamente.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Quando a tarefa é resetada o usuário pode <Link to="/CompletarTarefaDiaria">completar a tarefa diária</Link> novamente.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default ResetarTarefaDiaria