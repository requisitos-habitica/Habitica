import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ComprarEquipamentoLoja = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Comprar equipamentos na Loja" author="Lucas Dutra"/>

    <Card>
        <h2>Versionamento</h2>
        <p><Link to='/Utilizar a loja do Habitica Itens'>Utilizar Loja</Link></p>
    </Card>

    <Card>
      <h2>Objetivo</h2>
      <p>Comprar qualquer equipamento na loja utilizando moedas</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, o usuário deve possuir moedas</li>
        <li>Local: Loja do habitica, aba mercado</li>
        <li>Tempo: Qualquer momento que o usuário desejar</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Moedas</li>
        <li>Conexão com a internet</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>O usuário ganha moedas</li>
        <li>O usuário acessa a loja</li>
        <li>O usuário avalia o preço do equipamento</li>
        <li>O usuário compara o preço do equipamento com seu saldo</li>
        <li>O usuário compra o equipamento</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O equipamento a ser comprado é inferior ao que o usuário já pertence</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O usuário não possui moedas suficientes para comprar o equipamento desejado</li>
        <li>O equipamento está bloqueado por algum equipamento inferior</li>
        <li>O equipamento a ser comprado não pertencer a classe do usuário</li>
      </ul>
    </Card>

  </div>
)

export default ComprarEquipamentoLoja