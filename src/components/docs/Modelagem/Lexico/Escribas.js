import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Escribas = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Escribas" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>Escribas</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Escritores</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
            Escribas são pessoas responsáveis por estarem contribuindo para a <Link to="/Wiki">Wiki</Link> do Habitica
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Habitica se torna acessível a uma quantidade maior de usuário</li>
        <li>Informações sobre o Habitica se tornam mais claras e acessíveis</li> 
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default Escribas