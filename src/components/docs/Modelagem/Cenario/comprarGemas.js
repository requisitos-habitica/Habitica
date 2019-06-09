import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Comprar Gema" author="Ésio Freitas"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Adquirir novas gemas.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial -> gema.</li>
        <li>Tempo: Em qualquer momento.</li>
        <li>Pré-condição: Usuário deve ter uma cartão de crédito.</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário.</li>
        <li>PayPal.</li>
        <li> Amazon Pay.</li>
        <li>Corretora de crédito.</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Dinheiro</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário escolhe o tanto de gema que deseja.</li>
        <li>Usuário escolhe uma forma de pagamento.</li>
        <li>Usuário confirma a compra.</li>
        <li>Usuário compra as gemas.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não consegue comprar menos do que 20 gemas.</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não tem limite de crédito necessário.</li>
      </ul>
    </Card>

  </div>
)

export default Base