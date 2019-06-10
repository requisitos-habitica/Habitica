import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const UtilizarLojaSazonalV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Utilizar a loja do Habitica - Loja Sazonal" author="Lucas Dutra"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Comprar novos equipamentos</p>
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
        <li>Equipamentos</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário abre o app do habitica</li>
        <li>Usuário completa suas tarefas diárias</li>
        <li>Usuário ganha moedas</li>
        <li>Usuário vai até a loja para comprar equipamentos novos para o seu avatar</li>    
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
        <li>O usuário não possui gemas o bastante para comprar o equipamento desejado</li>
        <li>O usuário não possui moedas o bastante para comprar o equipamento desejado</li>
        <li>O usuário não pertencer a classe necessária para se obter o item      </li>
      </ul>
    </Card>

  </div>
)

export default UtilizarLojaSazonalV1