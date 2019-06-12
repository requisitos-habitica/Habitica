import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const UtilizarLojaItensV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Utilizar a loja do Habitica" author="Lucas Dutra"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Comprar um item no mercado</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: possuir moedas ou gemas</li>
        <li>Local: Aba loja, subseção mercado</li>
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
        <li>Ovos</li>
        <li>Poções de Eclosão</li>
        <li>Comidas</li>
        <li>Celas</li>
        <li>Cartões</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
      <li>Usuário abre o app do habitica</li>
      <li>Usuário completa suas tarefas diárias</li>
      <li>Usuário ganha um ovo</li>
      <li>Usuário vai até o mercado para comprar poção de eclosão</li> 
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Item ser necessário no momento</li>
        <li>O usuário possuir um ovo para utilizar os itens</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O usuário não possui gemas o bastante</li>
      </ul>
    </Card>

  </div>
)

export default UtilizarLojaItensV1