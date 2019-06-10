import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const CartaoV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Cartões" author="Lucas Dutra"/>
    <Card>
      <h2>Nome</h2>
      <p>Cartões</p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Cartão</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>É utilizado dentro do Habitica para enviar mensagens pré-definidas pelo sistema para um <Link to = '/Membros'>membro</Link> de seu <Link to='/Grupo' >grupo</Link>. Gastando <Link to = '/Moeda'>ouro</Link> para comprá-los</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Possibilita comunicação entre usuários do aplicativo.</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default CartaoV1