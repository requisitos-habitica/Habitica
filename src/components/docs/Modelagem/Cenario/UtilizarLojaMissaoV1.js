import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const UtilizarLojaMissaoV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Utilizar a loja do Habitica" author="Lucas Dutra"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Comprar uma missão</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: possuir moedas ou gemas</li>
        <li>Local: Aba loja, subseção Loja Sazonal</li>
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
        <li>Missões</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário abre o app do habitica</li>
        <li>Usuário completa suas tarefas diárias</li>
        <li>Usuário ganha moedas</li>
        <li>Usuário vai até a loja para comprar novas missões para completar junto com sua equipe</li>    
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O grupo estar disposto a participar da missão</li>
        <li>O usuário estar em um grupo</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O usuário não possui gemas o bastante</li>
        <li>O usuário não possui moedas o bastante</li>
        <li>O usuário não está no nível requerido pela missão</li>
      </ul>
    </Card>

  </div>
)

export default UtilizarLojaMissaoV1