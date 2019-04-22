import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const DecrementarHabito = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Decrementar hábito" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Decrementar hábito</p>
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
            O usuário quando realizou um <Link to="/Habito">hábito</Link> ruim realiza o decremento do contador que marca as vezes que ele realizou o hábito e perde vida
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ao decrementar o hábito, o contador de hábitos ruins aumenta</li>
         <li>Ao decrementar um hábito,o usuário perde vida</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default DecrementarHabito