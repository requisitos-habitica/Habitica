import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'


const SeJuntarAoDesafioV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Se juntar ao desafio" author="Kaique"/>
    <Card>
      <h2>Nome</h2>
      <p>Se juntar ao desafio</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Usuário se interessa por <Link target="_blank" to="/DesafioV1">desafio</Link> e deseja participar</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ao se juntar ao <Link target="_blank" to="/DesafioV1">desafio</Link>, o usuário se torna <Link target="_blank" to="/ParticipanteV1">participante</Link> do desafio</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)

export default SeJuntarAoDesafioV1
