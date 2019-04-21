import React from 'react'
import { Link } from 'react-router-dom'
const ExcluirTarefaDiaria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Excluir tarefa diária" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Excluir tarefa diária</p>
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
            Usuário apaga da lista uma <Link to="/TarefaDiaria">tarefa diária</Link>.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>A tarefa diária some da <Link to="/ListaDeTarefas">lista de tarefas</Link></li>
         <li>O usuário não pode mais <Link to="/CompletarTarefaDiaria">completar a tarefa diária</Link> apagada</li>            
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default ExcluirTarefaDiaria