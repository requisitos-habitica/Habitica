import React from 'react'
import { Link } from 'react-router-dom'
const ConcluirAfazer = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Concluir o afazer" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Concluir o afazer</p>
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
            O usuário marca o <Link to="/Afazer">afazer</Link> como completo e ele some da <Link to="/ListaDeTarefas">lista</Link>.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O afazer que for concluído não será mais listado na <Link to="/ListaDeTarefas">lista de tarefas</Link></li>
         <li>Ao completar um afazer o usuário <Link to="/ReceberRecompensa">recebe as recompensas</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default ConcluirAfazer