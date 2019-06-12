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
      <p>Comprar qualquer <Link to = '/Equipamento'>equipamento</Link> na <Link to ='/Loja'>loja</Link> utilizando <Link to='/Moeda'>Moedas</Link></p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, o usuário deve possuir <Link to='/Moeda'>Moedas</Link></li>
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
        <li><Link to='/Moeda'>Moedas</Link></li>
        <li>Conexão com a internet</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>O usuário <Link to='/Adquirir Moedas'>ganha moedas</Link></li>
        <li>O usuário acessa a <Link to ='/Loja'>loja</Link></li>
        <li>O usuário avalia o preço do <Link to = '/Equipamento'>equipamento</Link></li>
        <li>O usuário compara o preço do <Link to = '/Equipamento'>equipamento</Link> com seu saldo</li>
        <li>O usuário compra o <Link to = '/Equipamento'>equipamento</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O <Link to = '/Equipamento'>equipamento</Link> a ser comprado é inferior ao que o usuário já pertence</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O usuário não possui moedas suficientes para comprar o <Link to = '/Equipamento'>equipamento</Link> desejado</li>
        <li>O <Link to = '/Equipamento'>equipamento</Link> está bloqueado por algum <Link to = '/Equipamento'>equipamento</Link> inferior</li>
        <li>O <Link to = '/Equipamento'>equipamento</Link> a ser comprado não pertencer a classe do usuário</li>
      </ul>
    </Card>

  </div>
)

export default ComprarEquipamentoLoja