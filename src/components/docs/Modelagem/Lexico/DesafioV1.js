import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const DesafioV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Desafio" author="Kaique"/>
    <Card>
      <h2>Nome</h2>
      <p>Desafio</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Desafios</li>
        <li>Challenge</li>
        <li>Challenges</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Eventos da comunidade na qual usuários competem e ganham <Link target="_blank" to="/PremioV1">prêmios</Link> por completar um grupo de tarefas relacionada</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li><Link target="_blank" to="/CriarDesafioV1">Criar desafio</Link></li>
        <li><Link target="_blank" to="/SeJuntarAoDesafioV1">Se juntar ao desafio</Link></li>
        <li><Link target="_blank" to="/DeclararVencedorDoDesafioV1">Declarar vencedor do desafio</Link></li>
        <li>Vencer um desafio</li>
        <li><Link target="_blank" to="/AdicionarTarefasDeDesafioV1">Adicionar tarefas de desafio</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default DesafioV1
