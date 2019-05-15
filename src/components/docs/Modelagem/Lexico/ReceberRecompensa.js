import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ReceberRecompensa = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Receber recompensa" author="Gabriel Albino"/>
    <Card>
      <h2>Nome</h2>
      <p>Receber recompensa</p>
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
            O usuário recebe recompensas como Ouro e XP ao completar uma <Link to="/Tarefa Diária">diária</Link>, <Link to="/Afazer">afazer</Link> ou <Link to="/Habito">hábito</Link> bom
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O usuário recebe <Link to="/Ouro">ouro</Link> para <Link to="/Loja">gastar na loja</Link> e <Link to="/Experiencia">xp</Link> para evoluir</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>#Verbo</p>
    </Card>

  </div>
)
export default ReceberRecompensa
