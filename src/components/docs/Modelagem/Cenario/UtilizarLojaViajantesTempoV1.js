import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const UtilizarLojaViajantesTempoV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Utilizar a loja do Habitica - Viajantes do tempo" author="Lucas Dutra"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Comprar novos equipamentos, mascotes ou montarias especiais</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: ser usuário assinante</li>
        <li>Local: Aba loja, subseção Viajantes do tempo</li>
        <li>Tempo: Qualquer hora do dia</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário do sistema</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Equipamentos </li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário abre o app do habitica</li>
        <li>Usuário assina a mensalidade</li>
        <li>Usuário renova a assinatura por 3 meses consecutivos</li>
        <li>Usuário ganha uma ampulheta mística</li>
        <li>Usuário vai até a loja para comprar equipamentos, mascotes ou montarias especiais</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O item, mascote ou montaria ser de interesse do usuário </li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O usuário não é assinante do habitica</li>
        <li>O usuário não possui ampulhetas místicas</li>
      </ul>
    </Card>

  </div>
)

export default UtilizarLojaViajantesTempoV1