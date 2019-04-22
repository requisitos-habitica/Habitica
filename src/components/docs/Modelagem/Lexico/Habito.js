import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Habito = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Hábito" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Hábito</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Habit</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            <Link to="/Tarefa">Tarefa</Link> que o usuário pode <Link to="/IncrementarHabito">incrementar caso tenha feito um hábito bom</Link> ou <Link to="/DecrementarHabito">decrementar caso tenha feito um hábito ruim</Link>.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
            <li>O usuário pode <Link to="/CriarHabito">criar</Link> e <Link to="/EditarHabito">editar hábitos</Link></li>
            <li>O usuário pode <Link to="/IncrementarHabito">incrementar</Link> ou <Link to="/DecrementarHabito">decrementar</Link> o hábito</li>           
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default Habito