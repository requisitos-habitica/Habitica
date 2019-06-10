import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ComprarCartoesLoja = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Comprar cartões na Loja" author="Lucas Dutra"/>

    <Card>
        <h2>Versionamento</h2>
        <p><Link to='/Utilizar a loja do Habitica Itens'>Utilizar Loja</Link></p>
    </Card>

    <Card>
      <h2>Objetivo</h2>
      <p>Comprar <Link to='/Cartões'>cartões</Link> na <Link to ='/Loja'>loja</Link></p>
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
        <li>O usuário avalia o preço do <Link to='/Cartões'>cartão</Link></li>
        <li>O usuário compara o preço do <Link to='/Cartões'>cartão</Link> com seu saldo</li>
        <li>O usuário compra o <Link to='/Cartões'>cartão</Link></li>
        <li>O usuário envia um <Link to='/Cartões'>cartão</Link> para um amigo de seu grupo</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O <Link to='/Cartões'>cartão</Link> possuir a descrição de acordo com as intenções do usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O usuário não está em um grupo</li>
        <li>O usuário não possui <Link to='/Moeda'>Moedas</Link> o suficiente para comprar o <Link to='/Cartões'>cartão</Link> </li>
      </ul>
    </Card>

  </div>
)

export default ComprarCartoesLoja