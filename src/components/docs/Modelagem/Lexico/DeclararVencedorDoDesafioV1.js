import React from 'react'
import { Link } from 'react-router-dom'

const DeclararVencedorDoDesafioV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Declarar vencedor do desafio" author="Kaique"/>
    <Card>
      <h2>Nome</h2>
      <p>Declarar vencedor do desafio</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>O criador do <Link to="/DesafioV1">desafio</Link> pode encerrar o mesmo, e selecionar o vencedor, o usuário que receberá o <Link to="/PremioV1">prêmio</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>O <Link to="/DesafioV1">desafio</Link> é encerrado</li>
        <li>Um <Link to="/ParticipanteV1">participante</Link> se torna o vencedor do <Link to="/DesafioV1">desafio</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)

export default DeclararVencedorDoDesafioV1
