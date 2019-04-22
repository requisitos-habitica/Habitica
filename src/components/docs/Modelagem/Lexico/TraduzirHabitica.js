import React from 'react'
import { Link } from 'react-router-dom'

const TraduzirHabitica = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Traduzir o Habitica" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>Traduzir o Habitica</p>
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
        Pessoas que sejam nativos ou bastante fluentes em uma determinada língua pode estar contribuindo para a tradução do Habitica
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Habitica se torna acessível a uma quantidade maior de usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)
export default TraduzirHabitica