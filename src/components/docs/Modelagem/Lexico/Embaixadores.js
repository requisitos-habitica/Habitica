import React from 'react'
import { Link } from 'react-router-dom'

const Embaixadores = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Embaixadores" author="Saleh Kader"/>
    <Card>
      <h2>Nome</h2>
      <p>Embaixadores</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Escritores</li>
	    <li>Divulgadores</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>
        Embaixadores são pessoas responsáveis por estarem divulgando o Habitica em seus blogues, redes sociais ou fanpages
        </li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Habitica se torna acessível a uma quantidade maior de usuário</li>
        <li>São responsáveis por influenciar no tráfego de usuários do Habitica</li> 
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)
export default Embaixadores