import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const AdquirirAmpulhetas = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Adquirir Ampulhetas Místicas" author="Lucas Dutra"/>

    <Card>
      <h2>Objetivo</h2>
      <p>Adquirir ampulhetas mísitcas</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, o usuário deve ser assinante</li>
        <li>Local: Página principal</li>
        <li>Tempo: Três meses após a primeira assinatura</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
        <li>PayPal</li>
        <li>Amazon Pay</li>
        <li>Corretora de crédito</li>
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
        <li>Usuário escolhe um plano </li>
        <li>Usuário pode aplicar um código de cupom</li>
        <li>Usuário escolhe uma forma de pagamento</li>
        <li>Usuário confirma a compra</li>
        <li>Usuário faz a assinatura.</li>
        <li>Usuário mantém o pagamento por três meses.</li>
        <li>Usuário recebe uma ampulheta mísitica. </li>  
      </ul>
    </Card>

    <Card>
        <h2>Restrições</h2>
        <ul>
            <li>Código de cupom pode não funcionar</li>
        </ul>
    </Card>

    <Card>
        <h2>Exceções</h2>
        <ul>
            <li>O usuário não pagou a assinatura em algum dos meses</li>
        </ul>
    </Card>

  </div>
)

export default AdquirirAmpulhetas