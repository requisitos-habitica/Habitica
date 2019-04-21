import React from 'react'
import { Link } from 'react-router-dom'
const CriarTarefaDiaria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Criar tarefa diária" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Criar tarefa diária</p>
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
            Usuário cadastra uma nova <Link to="/TarefaDiaria">tarefa diária</Link> na <Link to="/ListaDeTarefas">lista de diárias</Link>.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Após a tarefa ser criada, o usuário pode <Link to="/CompletarTarefaDiaria">Completar a tarefa diária</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default CriarTarefaDiaria