import React from 'react'
import { Link } from 'react-router-dom'
const EditarHabito = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Editar hábito" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Editar hábito</p>
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
            Usuário edita as informações de um <Link to="/Habito">hábito</Link> que já se encontra na lista.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ao ser editado, o <Link to="/Habito">hábito</Link> aparece com as informações atualizadas na <Link to="/ListaDeTarefas">lista de tarefas</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default EditarHabito