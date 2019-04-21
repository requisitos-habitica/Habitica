import React from 'react'
import { Link } from 'react-router-dom'
const CompletarTarefaDiaria = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Completar tarefa diária" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Completar tarefa diária</p>
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
            O usuário marca a tarefa como completa e <Link to="/ReceberRecompensa">ganha a recompensa</Link>. A tarefa poderá ser completada novamente após o intervalo de tempo definido na <Link to="/CriarTarefaDiaria">criação da tarefa</Link> ou ao <Link to="/EditarTarefaDiaria">editar a tarefa</Link>.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
            <li>Após a tarefa ser completa, o sistema começa a contabilizar o tempo para <Link to="/ResetarTarefaDiaria">resetar a tarefa diária</Link></li>
            <li>Após a tarefa ser completada, o usuário pode marcar ela como incompleta novamente</li>
            <li>A tarefa que foi completada aparece diferente na lista de tarefas</li>
            <li>O usuário <Link to="/ReceberRecompensa">recebe recompensas</Link> ao completar tarefas diárias</li> 
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default CompletarTarefaDiaria