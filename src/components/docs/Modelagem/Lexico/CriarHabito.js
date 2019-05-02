import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const CriarHabito = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Criar hábito" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Criar hábito</p>
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
            Usuário cadastra um novo <Link to="/Habito">hábito</Link> na lista. O hábito pode ser só positivo, tendo assim só o botão de <Link to="/IncrementarHabito">incrementar o hábito</Link>, por exemplo: Beber água. O hábito pode ser só negativo, tendo assim só o botão de <Link to="/DecrementarHabito">decrementar o hábito</Link>, por exemplo: Fumar. Ou o hábito pode ser positivo e negativo, tendo assim ambos os botões, por exemplo: estudar/procrastinar, onde quando o estudo for realizado será incrementado e quando a procrastinação for realizada ele será decrementado.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Após criar uma tarefa, o usuário pode completar o hábito</li>
        <li>Caso seja um hábito positivo, o usuário pode <Link to="/IncrementarHabito">incrementar o hábito</Link></li>
        <li>Caso seja um hábito negativo, o usuário pode <Link to="/DecrementarHabito">decrementar o hábito</Link></li>
        <li>O hábito criado sempre aparece na <Link to="/ListaDeTarefas">lista de tarefas</Link> referente aos hábitos</li>            
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default CriarHabito