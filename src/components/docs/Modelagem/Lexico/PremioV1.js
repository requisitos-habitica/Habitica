import React from 'react'
import { Link } from 'react-router-dom'

const PremioV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Prêmio" author="Kaique"/>
    <Card>
      <h2>Nome</h2>
      <p>Prêmio</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Prize</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Recompensa dada a um usuário ao vencer um <Link to="/DesafioV1">desafio</Link>.</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
      <li>Adicionar prêmio ao <Link to="/DesafioV1">desafio</Link>, para ser dado ao vencedor do mesmo.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default PremioV1
