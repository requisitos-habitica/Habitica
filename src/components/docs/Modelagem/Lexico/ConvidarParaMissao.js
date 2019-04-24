import React from 'react'
import { Link } from 'react-router-dom'

const ConvidarParaMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Convidar Para Missão" author="Pedro Féo"/>
    <Card>
      <h2>Nome</h2>
      <p>Convidar Para Missão</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Chamar Para Missão</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Realizado pelo <Link to="/DonoDeMissao">Dono de Missão</Link></li>
        <li>Acontece quando Usuário usa <Link to="/TomoDeMissao">Tomo de Missão</Link></li>
        <li><Link to="/DonoDeMissao">Dono de Missão</Link> convida <Link to="/Grupo">Grupo</Link> a <Link to="/Cenarios/FazMissao">Fazer Missão</Link></li>
      </ul>
    </Card>

    <Card>
    <h2>Impacto</h2>
    <ul>
      <li><Link to="/Membros">Membros do Grupo</Link> estão convidados</li>
        <li>Se o <Link to="/Membros">Membros do Grupo</Link> está convidado, pode aceitar convite</li>
        <li>Se <Link to="/Membros">Membros do Grupo</Link> está convidado, pode recusar convite</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)

export default ConvidarParaMissao