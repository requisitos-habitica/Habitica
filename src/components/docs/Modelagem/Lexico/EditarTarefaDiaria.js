import React from 'react'
import { Link } from 'react-router-dom'
const EditarTarefaDiaria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Editar tarefa diária" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Editar tarefa diária</p>
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
            Usuário edita as informações de uma tarefa diária que já se encontra na <Link to="/ListaDeTarefas">lista de diárias</Link>.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Após a edição a tarefa aparece com as propriedades atualizadas na <Link to="/ListaDeTarefas">lista de tarefas</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default EditarTarefaDiaria