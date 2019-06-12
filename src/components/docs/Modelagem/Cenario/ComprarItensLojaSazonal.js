import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ComprarItensLojaSazonal = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Comprar itens na Loja Sazonal" author="Lucas Dutra"/>

    <Card>
        <h2>Versionamento</h2>
        <p><Link to='/Utilizar a loja do Habitica - Loja Sazonal'>Utilizar Loja Sazonal</Link></p>
    </Card>

    <Card>
      <h2>Objetivo</h2>
      <p>Comprar qualquer item na <Link to='/Loja'>loja</Link> utilizando <Link to='/Moeda'>Moedas</Link> ou <Link to='/Gema'>gemas</Link></p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, o usuário deve possuir <Link to='/Moeda'>Moedas</Link> ou <Link to='/Gema'>gemas</Link></li>
        <li>Local: Loja do habitica, aba loja sazonal</li>
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
        <li><Link to='/Gema'>Gemas</Link></li>
        <li>Conexão com a internet</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>O usuário <Link to='/Adquirir Moedas'>ganha moedas</Link> ou <Link to='/Comprar gema V1'>compra Gemas</Link></li>
        <li>O usuário acessa a <Link to='/Loja'>loja</Link> </li>
        <li>O usuário navega a aba <Link to='/Loja Sazonal'>loja sazonal</Link></li>
        <li>O usuário avalia o preço do item</li>
        <li>O usuário compara o preço do item com seu saldo</li>
        <li>O usuário compra o item</li>   
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Item a ser comprado é dependente de um terceiro para executar a interação completa</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O usuário não possui <Link to='/Moeda'>Moedas</Link> suficientes para comprar o item desejado</li>
      </ul>
    </Card>

  </div>
)

export default ComprarItensLojaSazonal