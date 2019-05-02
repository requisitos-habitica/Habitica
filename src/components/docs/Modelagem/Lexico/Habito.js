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
            <Link to="/ModelagemLexicos/Tarefa">Tarefa</Link> que o usuário pode <Link to="/ModelagemLexicos/Incrementar hábito">incrementar caso tenha feito um hábito bom</Link> ou <Link to="Incrementar hábito/Decrementar hábito">decrementar caso tenha feito um hábito ruim</Link>.
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O usuário pode <Link to="/ModelagemLexicos/Criar hábito">criar</Link> e <Link to="/EditarHabito">editar hábitos</Link></li>
        <li>O usuário pode <Link to="/ModelagemLexicos/Incrementar hábito">incrementar</Link> ou <Link to="/ModelagemLexicos/Decrementar hábito">decrementar</Link> o hábito</li>           
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default Habito