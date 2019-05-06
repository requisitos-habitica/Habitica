import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const IncrementarHabito = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Incrementar hábito" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Incrementar hábito</p>
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
            O usuário quando realizou um <Link target="_blank" to="/Habito">hábito</Link> bom realiza o incremento do contador que marca as vezes que ele realizou o <Link target="_blank" to="/Habito">hábito</Link> e ganha recompensas por isso
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ao incrementar o <Link target="_blank" to="/Habito">hábito</Link>, o contador de hábitos bons aumenta</li>
        <li>Ao incrementar um hábito, o usuário <Link target="_blank" to="/ReceberRecompensa">ganha recompensas</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default IncrementarHabito