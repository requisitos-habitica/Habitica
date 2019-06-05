import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const Base = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Fazer Assinatura" author="Ésio Freitas"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Usuário deseja ter mais funcionalidades.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela inicial -> assinatura.</li>
        <li>Tempo: Em qualquer momento.</li>
        <li>Pré-condição: Usuário deve ter cartão de crédito ou usuário deve ter uma conta no PayPal ou o usuário deve ter uma conta na Amazon Pay.</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário.</li>
        <li>PayPal.</li>
        <li>Amazon Pay.</li>
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
        <li>Usuário escolhe um plano.</li>
        <li>Usuário pode aplicar um código de cupom.</li>
        <li>Usuário escolhe uma forma de pagamento.</li>
        <li>Usuário confirma a compra.</li>
        <li>Usuário faz a assinatura.</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Código de cupom pode não funcionar.</li>
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